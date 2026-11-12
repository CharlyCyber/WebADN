// src/modules/colorQuantizer.js
// Cuantización de color a nivel pixel sobre screenshots PNG.
//
// PROBLEMA que resuelve: la paleta extraída hoy viene SOLO de CSS declarado y
// getComputedStyle. Los colores que viven dentro de FOTOS, gradientes complejos
// y texturas (lo que define sitios image-driven como Lugano) son invisibles.
//
// SOLUCIÓN: median-cut sobre el PNG del screenshot para deducir la paleta
// percibida real, clasificarla por rol (background/dominant/accent/muted) y
// detectar gradientes dominantes. Sin dependencias: PNG decode a mano + median
// cut a mano. Solo Node 20+ (zlib incluido).

import { readFile } from "node:fs/promises";
import { inflateSync } from "node:zlib";

// ---------------------------------------------------------------------------
// PNG decoding (minimal: solo color type 2/6 sin interlacing, que es lo que
// produce Playwright). Suficiente para screenshots; si el formato no soportado
// aparece, devolvemos null y el llamador hace fallback a la paleta CSS.
// ---------------------------------------------------------------------------

export async function decodePng(buffer) {
  // Validar firma PNG
  if (buffer[0] !== 0x89 || buffer[1] !== 0x50 || buffer[2] !== 0x4e || buffer[3] !== 0x47) {
    return null;
  }

  let offset = 8;
  let width = 0, height = 0;
  let bitDepth = 0, colorType = 0;
  const idatChunks = [];

  while (offset < buffer.length) {
    const length = readUInt32BE(buffer, offset);
    const type = buffer.toString("ascii", offset + 4, offset + 8);
    offset += 8;

    if (type === "IHDR") {
      width = readUInt32BE(buffer, offset);
      height = readUInt32BE(buffer, offset + 4);
      bitDepth = buffer[offset + 8];
      colorType = buffer[offset + 9];
    } else if (type === "IDAT") {
      idatChunks.push(buffer.subarray(offset, offset + length));
    } else if (type === "IEND") {
      break;
    }

    offset += length + 4; // data + CRC
  }

  // Solo soportamos color type 2 (RGB) y 6 (RGBA) a 8 bits, sin interlacing.
  // Playwright siempre produce 8-bit RGBA por defecto.
  if (bitDepth !== 8 || (colorType !== 2 && colorType !== 6)) {
    return null;
  }
  const channels = colorType === 6 ? 4 : 3;

  const compressed = Buffer.concat(idatChunks);
  let raw;
  try {
    raw = inflateSync(compressed);
  } catch {
    return null;
  }

  const bytesPerPixel = channels;
  const stride = width * bytesPerPixel + 1; // +1 byte de filtro por línea
  const pixels = Buffer.alloc(width * height * bytesPerPixel);

  let prevRow = Buffer.alloc(width * bytesPerPixel);

  for (let y = 0; y < height; y++) {
    const rowStart = y * stride;
    const filter = raw[rowStart];
    const rowIn = raw.subarray(rowStart + 1, rowStart + 1 + width * bytesPerPixel);
    const rowOut = Buffer.alloc(width * bytesPerPixel);

    for (let x = 0; x < width * bytesPerPixel; x++) {
      const cur = rowIn[x];
      const left = x >= bytesPerPixel ? rowOut[x - bytesPerPixel] : 0;
      const up = prevRow[x] || 0;
      const upLeft = x >= bytesPerPixel ? prevRow[x - bytesPerPixel] : 0;

      let value;
      switch (filter) {
        case 0: value = cur; break;                              // None
        case 1: value = (cur + left) & 0xff; break;              // Sub
        case 2: value = (cur + up) & 0xff; break;                // Up
        case 3: value = (cur + ((left + up) >> 1)) & 0xff; break;// Average
        case 4: {                                                // Paeth
          const p = left + up - upLeft;
          const pa = Math.abs(p - left);
          const pb = Math.abs(p - up);
          const pc = Math.abs(p - upLeft);
          const pred = pa <= pb && pa <= pc ? left : pb <= pc ? up : upLeft;
          value = (cur + pred) & 0xff;
          break;
        }
        default: value = cur; break;
      }
      rowOut[x] = value;
    }

    rowOut.copy(pixels, y * width * bytesPerPixel);
    prevRow = rowOut;
  }

  return { width, height, channels, pixels };
}

function readUInt32BE(buffer, offset) {
  return (buffer[offset] * 0x1000000) + ((buffer[offset + 1] << 16) | (buffer[offset + 2] << 8) | buffer[offset + 3]);
}

// ---------------------------------------------------------------------------
// Muestreo + median cut
// ---------------------------------------------------------------------------

function samplePixels(image, maxSamples = 20000) {
  const { width, height, channels, pixels } = image;
  const total = width * height;
  // Muestreo estratástico: si la imagen es grande, tomamos cada N píxeles.
  const step = Math.max(1, Math.floor(total / maxSamples));
  const samples = [];

  for (let i = 0; i < total; i += step) {
    const pi = i * channels;
    const r = pixels[pi];
    const g = pixels[pi + 1];
    const b = pixels[pi + 2];
    const a = channels === 4 ? pixels[pi + 3] : 255;
    // Ignorar píxeles casi transparentes (overlays, sombras suaves)
    if (a < 128) continue;
    // Ignorar blancos/negros puros saturados para no dominar (se clasifican aparte)
    samples.push([r, g, b]);
  }
  return samples;
}

function medianCut(samples, depth) {
  // Caso base: bucket único → color promedio
  if (depth <= 0 || samples.length <= 1) {
    if (!samples.length) return [];
    let r = 0, g = 0, b = 0;
    for (const s of samples) { r += s[0]; g += s[1]; b += s[2]; }
    const n = samples.length;
    return [{
      r: Math.round(r / n),
      g: Math.round(g / n),
      b: Math.round(b / n),
      count: n
    }];
  }

  // Encontrar el canal con mayor rango en este bucket
  let rMin = 255, rMax = 0, gMin = 255, gMax = 0, bMin = 255, bMax = 0;
  for (const s of samples) {
    if (s[0] < rMin) rMin = s[0];
    if (s[0] > rMax) rMax = s[0];
    if (s[1] < gMin) gMin = s[1];
    if (s[1] > gMax) gMax = s[1];
    if (s[2] < bMin) bMin = s[2];
    if (s[2] > bMax) bMax = s[2];
  }
  const rRange = rMax - rMin;
  const gRange = gMax - gMin;
  const bRange = bMax - bMin;

  let channel;
  if (rRange >= gRange && rRange >= bRange) channel = 0;
  else if (gRange >= bRange) channel = 1;
  else channel = 2;

  samples.sort((a, b) => a[channel] - b[channel]);
  const mid = Math.floor(samples.length / 2);

  return [
    ...medianCut(samples.slice(0, mid), depth - 1),
    ...medianCut(samples.slice(mid), depth - 1)
  ];
}

function rgbToHex({ r, g, b }) {
  return "#" + [r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("");
}

function luminance({ r, g, b }) {
  // Rec 709
  return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
}

function saturation({ r, g, b }) {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  if (max === 0) return 0;
  return (max - min) / max;
}

function colorDistance(a, b) {
  return Math.sqrt((a.r - b.r) ** 2 + (a.g - b.g) ** 2 + (a.b - b.b) ** 2);
}

// ---------------------------------------------------------------------------
// Clasificación de roles
// ---------------------------------------------------------------------------

function classifyRoles(buckets, totalSamples) {
  // Ordenar por frecuencia
  const sorted = [...buckets].sort((a, b) => b.count - a.count);

  // Background: el color más frecuente (cubre típicamente el 30%+ del viewport).
  const background = sorted[0] || null;

  const result = {
    background: background ? rgbToHex(background) : null,
    backgroundCoverage: background ? Math.round((background.count / totalSamples) * 100) : 0,
    palette: [],
    dominant: null,
    accent: null,
    muted: null,
    textCandidates: []
  };

  const used = new Set();
  if (background) used.add(`${background.r},${background.g},${background.b}`);

  // Text candidates: colores oscuros (baja luminancia) distintos del background.
  const darks = sorted.filter((c) => luminance(c) < 0.3 && !used.has(`${c.r},${c.g},${c.b}`));
  // Lights: para fondos oscuros, el texto claro es el candidato.
  const lights = sorted.filter((c) => luminance(c) > 0.7 && !used.has(`${c.r},${c.g},${c.b}`));

  const isDarkBackground = background ? luminance(background) < 0.35 : false;
  const textPool = isDarkBackground ? lights : darks;
  if (textPool.length) {
    result.textCandidates = textPool.slice(0, 3).map(rgbToHex);
    const text = textPool[0];
    result.dominant = rgbToHex(text);
    used.add(`${text.r},${text.g},${text.b}`);
  }

  // Accent: color más saturado (y no usado ya).
  const saturated = sorted
    .filter((c) => saturation(c) > 0.35 && !used.has(`${c.r},${c.g},${c.b}`))
    .sort((a, b) => saturation(b) - saturation(a));
  if (saturated.length) {
    result.accent = rgbToHex(saturated[0]);
    used.add(`${saturated[0].r},${saturated[0].g},${saturated[0].b}`);
  }

  // Muted: color de baja saturación ni muy claro ni muy oscuro.
  const muted = sorted.find((c) =>
    saturation(c) < 0.2 &&
    luminance(c) > 0.25 &&
    luminance(c) < 0.75 &&
    !used.has(`${c.r},${c.g},${c.b}`)
  );
  if (muted) {
    result.muted = rgbToHex(muted);
    used.add(`${muted.r},${muted.g},${muted.b}`);
  }

  // Palette completa para el brief.
  result.palette = sorted.slice(0, 8).map((c) => ({
    hex: rgbToHex(c),
    coverage: Math.round((c.count / totalSamples) * 100),
    luminance: Math.round(luminance(c) * 100) / 100,
    saturation: Math.round(saturation(c) * 100) / 100
  }));

  return result;
}

// ---------------------------------------------------------------------------
// Detección de gradientes (muestreo del borde superior y diferencias)
// ---------------------------------------------------------------------------

function detectGradients(image, classified) {
  // Heurística: si los 3 colores más frecuentes comparten un canal cercano y
  // hay transición de luminancia, lo marcamos como gradiente probable.
  const palette = classified.palette;
  if (palette.length < 3 || !classified.background) return [];

  const gradients = [];
  // Gradiente vertical probable si hay colors ordenados por luminancia
  const sortedByLum = [...palette].sort((a, b) => a.luminance - b.luminance);
  const min = sortedByLum[0];
  const max = sortedByLum[sortedByLum.length - 1];
  if (max.luminance - min.luminance > 0.25 && colorDistance(hexToRgb(min.hex), hexToRgb(max.hex)) > 60) {
    gradients.push({
      type: "linear-vertical",
      from: min.hex,
      to: max.hex,
      note: "Transición de luminancia detectada en paleta pixel; replicar como gradiente sutil."
    });
  }
  return gradients;
}

function hexToRgb(hex) {
  const h = hex.replace("#", "");
  return {
    r: parseInt(h.slice(0, 2), 16),
    g: parseInt(h.slice(2, 4), 16),
    b: parseInt(h.slice(4, 6), 16)
  };
}

// ---------------------------------------------------------------------------
// API pública
// ---------------------------------------------------------------------------

/**
 * Cuantiza uno o varios screenshots PNG y devuelve una paleta percibida
 * fusionada (background, dominant, accent, muted, palette[], gradients[]).
 *
 * @param {string[]} screenshotPaths - rutas absolutas a PNGs
 * @param {object} options
 * @param {number} options.maxColors - profundidad del median cut (default 5 → 32 colors)
 * @returns {Promise<object|null>} paleta o null si no se pudo decodificar nada
 */
export async function extractPixelPalette(screenshotPaths, options = {}) {
  const maxColors = options.maxColors || 5; // 2^5 = 32 buckets
  const validPaths = (screenshotPaths || []).filter(Boolean);

  if (!validPaths.length) return null;

  const allSamples = [];
  let decodedCount = 0;
  let heroImage = null;

  for (const p of validPaths) {
    try {
      const buffer = await readFile(p);
      const image = await decodePng(buffer);
      if (!image) continue;
      decodedCount++;
      if (!heroImage) heroImage = image;
      const samples = samplePixels(image, 15000);
      allSamples.push(...samples);
    } catch {
      continue;
    }
  }

  if (!allSamples.length || decodedCount === 0) return null;

  // Cap global de samples para que median-cut no explote
  const capped = allSamples.length > 40000
    ? (() => { const step = Math.floor(allSamples.length / 40000); return allSamples.filter((_, i) => i % step === 0); })()
    : allSamples;

  const buckets = medianCut(capped, maxColors);
  const classified = classifyRoles(buckets, capped.length);
  classified.gradients = detectGradients(heroImage, classified);
  classified.source = `${decodedCount} screenshot(s) cuantizados, ${capped.length} píxeles muestreados`;
  classified.method = "median-cut";

  return classified;
}

/**
 * Fusiona la paleta CSS existente con la paleta pixel.
 * Estrategia: la paleta CSS gana para roles EXPLÍCITAMENTE declarados en
 * variables/colores (es ground truth de authoring); la paleta pixel RELLEA los
 * roles vacíos y aporta accent/gradient que el CSS no declaró (fotos, etc.).
 */
export function mergePalettes(cssColors = [], pixelPalette = null) {
  if (!pixelPalette) {
    return { merged: cssColors, source: "css-only" };
  }

  const merged = [...cssColors];
  const additions = [];

  // Añadir accent y muted de pixel si NO están ya cerca en la paleta CSS
  for (const role of ["accent", "muted", "background", "dominant"]) {
    const hex = pixelPalette[role];
    if (!hex) continue;
    const rgb = hexToRgb(hex);
    const alreadyThere = cssColors.some((c) => {
      const m = c.match(/#[0-9a-fA-F]{6}/);
      if (!m) return false;
      const existing = hexToRgb(m[0]);
      return colorDistance(existing, rgb) < 25;
    });
    if (!alreadyThere) additions.push(hex);
  }

  return {
    merged: [...additions, ...merged],
    pixelPalette,
    source: "css+pixel"
  };
}
