// src/modules/spacingScale.js
// Normaliza el saco de px sueltos (spacingScale actual) a una ESCALA coherente
// con unidad base deducida, listos para :root { --space-* } y rhythm vertical.
//
// PROBLEMA que resuelve: hoy inspection.tokens.spacingScale es un array plano
// de strings ("12px","14px","18px","23px",...) sin estructura. El modelo
// generador no puede inferir ritmo. Aquí deducimos la unidad base (4/8/px),
// mapeamos cada valor observado al múltiplo canónico más cercano, y producimos
// una escala limpia + ritmo vertical de secciones.

// Escala canónica de referencia (la que emitimos como tokens --space-*).
// Cubre de 4px (micro) a 192px (section gap premium).
const CANONICAL_SCALE = [4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160, 192, 240];

function parsePx(value) {
  if (typeof value !== "string") return null;
  const m = value.match(/^(-?\d+(?:\.\d+)?)px$/);
  if (!m) return null;
  const n = parseFloat(m[1]);
  return Number.isFinite(n) ? n : null;
}

function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v));
}

/**
 * Dada una lista de valores observados (ej. "16px", "2rem", "1.5rem"),
 * deduce la unidad base más probable mirando el GCD de los valores px.
 */
function deduceBaseUnit(pxValues) {
  if (!pxValues.length) return 8;
  // Filtrar valores muy pequeños (ruido) y muy grandes (section gaps)
  const significant = pxValues.filter((v) => v >= 4 && v <= 200);
  if (!significant.length) return 8;

  // Contar cuántos son múltiplos de 4 vs 8 vs 5
  const counts = { 4: 0, 8: 0, 5: 0, 10: 0 };
  for (const v of significant) {
    if (v % 8 === 0) counts[8]++;
    if (v % 4 === 0) counts[4]++;
    if (v % 5 === 0) counts[5]++;
    if (v % 10 === 0) counts[10]++;
  }
  // Preferencia: 8 > 4 > 10 > 5 (escalas de 8 son las más comunes en design systems premium)
  if (counts[8] / significant.length > 0.5) return 8;
  if (counts[4] / significant.length > 0.5) return 4;
  if (counts[10] / significant.length > 0.5) return 10;
  if (counts[5] / significant.length > 0.5) return 5;
  return 8;
}

/**
 * Mapea un valor px observado al token canónico más cercano.
 */
function snapToCanonical(px, baseUnit) {
  // Para valores < 64, ajustar al múltiplo del baseUnit más cercano.
  // Para valores >= 64, ajustar al canónico más cercano de la escala.
  if (px < 0) return null;
  if (px < 4) return null; // ignorar ruido

  let nearest = CANONICAL_SCALE[0];
  let nearestDist = Math.abs(CANONICAL_SCALE[0] - px);
  for (const c of CANONICAL_SCALE) {
    const d = Math.abs(c - px);
    if (d < nearestDist) {
      nearestDist = d;
      nearest = c;
    }
  }

  // Si el valor observado está muy lejos del canónico más cercano (>30%), lo
  // añadimos como token adicional para no perder información.
  const tolerance = Math.max(4, px * 0.25);
  if (nearestDist > tolerance && px >= baseUnit) {
    return { custom: Math.round(px / baseUnit) * baseUnit, canonical: null };
  }
  return { canonical: nearest, custom: null };
}

/**
 * Ritmo vertical de secciones: lista de alturas de sección, para que el
 * modelo respete el ratio entre hero / secciones / footer.
 */
function computeSectionRhythm(inspection) {
  const sections = inspection.sections || [];
  if (!sections.length) return null;

  const heights = sections
    .map((s) => s.height)
    .filter((h) => h && h > 50);

  if (!heights.length) return null;

  const viewport = inspection.viewport?.height || 1100;
  const hero = sections.find((s) => s.role === "hero");
  const footer = sections.find((s) => s.role === "footer");

  return {
    sectionCount: sections.length,
    heights,
    heroHeight: hero?.height || heights[0],
    footerHeight: footer?.height || heights[heights.length - 1],
    medianHeight: median(heights),
    viewportRatio: Math.round((median(heights) / viewport) * 100) / 100,
    fullViewportSections: sections.filter((s) => s.isFullViewport).length
  };
}

function median(arr) {
  const sorted = [...arr].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

/**
 * API pública. Devuelve escala normalizada + tokens + ritmo.
 */
export async function computeSpacingScale(inspection) {
  const raw = inspection.tokens?.spacingScale || [];

  // Parsear todos los valores a px (ignorando rem/em por simplicidad; los
  // valores del scraper ya vienen en px desde getComputedStyle).
  const observedPx = raw
    .map(parsePx)
    .filter((v) => v !== null && v > 0);

  if (!observedPx.length) {
    // Sin evidencia: devolvemos escala por defecto marcada como inferida.
    return {
      baseUnit: 8,
      tokens: canonicalTokens(8),
      observed: [],
      inferred: true,
      rhythm: computeSectionRhythm(inspection)
    };
  }

  const baseUnit = deduceBaseUnit(observedPx);

  // Mapear cada observación a su token canónico.
  const tokenCounts = {};
  const customs = new Set();
  for (const px of observedPx) {
    const result = snapToCanonical(px, baseUnit);
    if (result.canonical !== null) {
      tokenCounts[result.canonical] = (tokenCounts[result.canonical] || 0) + 1;
    } else if (result.custom !== null) {
      customs.add(result.custom);
    }
  }

  // Construir escala final: canónicos observados + customs únicos, ordenados.
  const usedValues = new Set([
    ...Object.keys(tokenCounts).map(Number),
    ...customs
  ]);

  const scale = CANONICAL_SCALE
    .filter((c) => usedValues.has(c))
    .map((c) => ({
      px: c,
      token: `--space-${c}`,
      count: tokenCounts[c] || 0
    }));

  // Añadir customs (valores observados que no encajaron en canónicos).
  for (const c of [...customs].sort((a, b) => a - b)) {
    if (!scale.find((s) => s.px === c)) {
      scale.push({ px: c, token: `--space-${c}`, count: 0, custom: true });
    }
  }
  scale.sort((a, b) => a.px - b.px);

  return {
    baseUnit,
    scale,
    tokens: scale.map((s) => `${s.token}: ${s.px}px`),
    observed: {
      total: observedPx.length,
      unique: new Set(observedPx).size,
      min: Math.min(...observedPx),
      max: Math.max(...observedPx),
      median: median(observedPx)
    },
    inferred: false,
    rhythm: computeSectionRhythm(inspection)
  };
}

// Tokens canónicos por defecto para el modo "inferred".
function canonicalTokens(baseUnit) {
  return CANONICAL_SCALE.map((c) => `--space-${c}: ${c}px`);
}
