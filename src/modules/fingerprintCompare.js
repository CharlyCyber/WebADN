// Compara dos huellas (referencia vs build) y devuelve una puntuación por
// dimensión más una lista priorizada de diferencias accionables.
// Función pura: no toca disco ni navegador.

export const DIMENSIONS = ["structure", "layout", "typography", "color", "motion", "interaction", "effects", "perceptual"];

export const DIMENSION_LABELS = {
  structure: "Estructura", layout: "Layout", typography: "Tipografía", color: "Color",
  motion: "Animación y scroll", interaction: "Hover e interacción", effects: "Efectos", perceptual: "Composición visual",
};

const WEIGHTS = { structure: 0.12, layout: 0.18, typography: 0.18, color: 0.12, motion: 0.18, interaction: 0.07, effects: 0.05, perceptual: 0.10 };
const VIEWPORT_WEIGHTS = { desktop: 0.65, mobile: 0.35 };

// ---------- utilidades ----------
const clamp01 = (n) => Math.max(0, Math.min(1, n));
const num = (n) => (typeof n === "number" && isFinite(n) ? n : null);
/** Similitud por ratio con suavizado: ratio(0,0)=1, ratio(10,20)≈0.5 */
export const ratio = (a, b, smooth = 0) => {
  a = Math.abs(num(a) ?? 0) + smooth; b = Math.abs(num(b) ?? 0) + smooth;
  if (a === 0 && b === 0) return 1;
  return Math.min(a, b) / Math.max(a, b);
};
const jaccard = (a = [], b = []) => {
  const A = new Set(a), B = new Set(b);
  if (!A.size && !B.size) return 1;
  let inter = 0;
  for (const x of A) if (B.has(x)) inter++;
  return inter / (A.size + B.size - inter);
};
const wavg = (items) => {
  let s = 0, w = 0;
  for (const [value, weight] of items) if (value !== null && value !== undefined && weight > 0) { s += value * weight; w += weight; }
  return w ? s / w : null;
};
const r2 = (n) => Math.round(n * 100) / 100;

export function hexToLab(hex) {
  if (!hex || typeof hex !== "string") return null;
  const m = hex.replace("#", "").match(/^([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})/i);
  if (!m) return null;
  return rgbToLab(parseInt(m[1], 16), parseInt(m[2], 16), parseInt(m[3], 16));
}
export function rgbToLab(r, g, b) {
  const lin = (v) => { v /= 255; return v > 0.04045 ? ((v + 0.055) / 1.055) ** 2.4 : v / 12.92; };
  const R = lin(r), G = lin(g), B = lin(b);
  const f = (t) => (t > 0.008856 ? Math.cbrt(t) : 7.787 * t + 16 / 116);
  const x = f((R * 0.4124 + G * 0.3576 + B * 0.1805) / 0.95047);
  const y = f(R * 0.2126 + G * 0.7152 + B * 0.0722);
  const z = f((R * 0.0193 + G * 0.1192 + B * 0.9505) / 1.08883);
  return [116 * y - 16, 500 * (x - y), 200 * (y - z)];
}
const deltaE = (a, b) => (a && b ? Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]) : null);
/** 1 = mismo color; 0 = ΔE ≥ 45 (colores sin relación). */
export function colorSim(hexA, hexB) {
  const d = deltaE(hexToLab(hexA), hexToLab(hexB));
  return d === null ? null : clamp01(1 - d / 45);
}

// ---------- alineación de secciones ----------
function sectionSim(r, b) {
  return (
    0.3 * (r.role === b.role ? 1 : 0) +
    0.3 * ratio(r.hVh, b.hVh, 0.1) +
    0.2 * (colorSim(r.bg, b.bg) ?? 0.5) +
    0.1 * ratio(r.cols, b.cols) +
    0.1 * (!!r.motion?.pinned === !!b.motion?.pinned ? 1 : 0)
  );
}

/** Needleman-Wunsch: tolera secciones que faltan o sobran sin descuadrar el resto. */
export function alignSections(ref = [], build = []) {
  const n = ref.length, m = build.length, GAP = 0.32;
  const S = Array.from({ length: n + 1 }, () => new Float64Array(m + 1));
  const T = Array.from({ length: n + 1 }, () => new Uint8Array(m + 1));
  for (let i = 1; i <= n; i++) { S[i][0] = -GAP * i; T[i][0] = 1; }
  for (let j = 1; j <= m; j++) { S[0][j] = -GAP * j; T[0][j] = 2; }
  for (let i = 1; i <= n; i++) for (let j = 1; j <= m; j++) {
    const d = S[i - 1][j - 1] + sectionSim(ref[i - 1], build[j - 1]) - 0.35;
    const u = S[i - 1][j] - GAP, l = S[i][j - 1] - GAP;
    if (d >= u && d >= l) { S[i][j] = d; T[i][j] = 0; } else if (u >= l) { S[i][j] = u; T[i][j] = 1; } else { S[i][j] = l; T[i][j] = 2; }
  }
  const pairs = [];
  let i = n, j = m;
  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && T[i][j] === 0) { pairs.push([i - 1, j - 1]); i--; j--; }
    else if (i > 0 && (j === 0 || T[i][j] === 1)) { pairs.push([i - 1, null]); i--; }
    else { pairs.push([null, j - 1]); j--; }
  }
  return pairs.reverse();
}

// ---------- dimensiones ----------
function label(s) {
  if (!s) return "";
  const h = s.headings?.[0];
  return `#${s.index + 1} ${s.role}${s.desc ? ` (${s.desc.split(" ")[0]})` : ""}`;
}

function compareStructure(R, B, pairs, issues, vp) {
  const matched = pairs.filter(([a, b]) => a !== null && b !== null);
  const total = Math.max(R.sections.length, B.sections.length, 1);
  let s = 0;
  for (const [a, b] of matched) s += R.sections[a].role === B.sections[b].role ? 1 : 0.6;
  for (const [a, b] of pairs) {
    if (b === null) issues.push({ severity: "high", dimension: "structure", viewport: vp, section: a, title: `Falta la sección ${label(R.sections[a])}`, expected: `sección de ${R.sections[a].hVh} alturas de pantalla, fondo ${R.sections[a].bg}`, actual: "no existe en el build", weight: 1 / total });
    else if (a === null) issues.push({ severity: "medium", dimension: "structure", viewport: vp, section: null, title: `Sección sobrante en el build: ${label(B.sections[b])}`, expected: "no existe en la referencia", actual: `sección de ${B.sections[b].hVh} alturas de pantalla`, weight: 0.6 / total });
  }
  const pageRatio = ratio(R.page.heightVh, B.page.heightVh);
  if (pageRatio < 0.8) issues.push({ severity: "medium", dimension: "structure", viewport: vp, section: null, title: "La longitud total de la página no coincide", expected: `${R.page.heightVh} alturas de pantalla`, actual: `${B.page.heightVh}`, weight: 0.2 * (1 - pageRatio) });
  let overflow = 1;
  if ((B.page.overflowX || 0) > 8 && !((R.page.overflowX || 0) > 8)) {
    overflow = 0.85;
    issues.push({ severity: "high", dimension: "structure", viewport: vp, section: null, title: "El build tiene desbordamiento horizontal", expected: "sin scroll horizontal", actual: `${B.page.overflowX}px de más`, weight: 0.15 });
  }
  return clamp01((0.8 * (s / total) + 0.2 * pageRatio) * overflow);
}

function compareLayout(R, B, pairs, issues, vp) {
  const items = [];
  for (const [a, b] of pairs) {
    if (a === null || b === null) continue;
    const r = R.sections[a], g = B.sections[b];
    const w = Math.min(1.5, Math.max(0.2, r.hVh));
    const hS = ratio(r.hVh, g.hVh, 0.05), cS = ratio(r.cols, g.cols);
    const aS = r.align && g.align ? (r.align === g.align ? 1 : 0.4) : null;
    const pt = r.padTop !== null && g.padTop !== null ? ratio(r.padTop, g.padTop, 24) : null;
    const pb = r.padBottom !== null && g.padBottom !== null ? ratio(r.padBottom, g.padBottom, 24) : null;
    const mS = !!r.bgMedia === !!g.bgMedia ? 1 : 0.3;
    const score = wavg([[hS, 0.35], [cS, 0.2], [aS, 0.12], [pt, 0.12], [pb, 0.08], [mS, 0.13]]);
    items.push([score, w]);
    const L = label(r);
    if (hS < 0.8) issues.push({ severity: hS < 0.55 ? "high" : "medium", dimension: "layout", viewport: vp, section: a, title: `${L}: altura distinta`, expected: `${r.hVh} × alto de pantalla (${r.height}px)`, actual: `${g.hVh} × (${g.height}px)`, weight: w * 0.35 * (1 - hS) });
    if (cS < 0.99) issues.push({ severity: "high", dimension: "layout", viewport: vp, section: a, title: `${L}: número de columnas distinto`, expected: `${r.cols} columna(s)`, actual: `${g.cols}`, weight: w * 0.2 * (1 - cS) });
    if (aS !== null && aS < 1) issues.push({ severity: "medium", dimension: "layout", viewport: vp, section: a, title: `${L}: alineación del titular`, expected: r.align, actual: g.align, weight: w * 0.07 });
    if (pt !== null && pt < 0.7) issues.push({ severity: "medium", dimension: "layout", viewport: vp, section: a, title: `${L}: espacio superior hasta el contenido`, expected: `${r.padTop}px`, actual: `${g.padTop}px`, weight: w * 0.12 * (1 - pt) });
    if (pb !== null && pb < 0.7) issues.push({ severity: "low", dimension: "layout", viewport: vp, section: a, title: `${L}: espacio inferior tras el contenido`, expected: `${r.padBottom}px`, actual: `${g.padBottom}px`, weight: w * 0.08 * (1 - pb) });
    if (mS < 1) issues.push({ severity: "high", dimension: "layout", viewport: vp, section: a, title: `${L}: medio a pantalla completa`, expected: r.bgMedia ? "imagen/vídeo/canvas ocupa la sección" : "sin medio de fondo", actual: g.bgMedia ? "tiene medio de fondo" : "sin medio de fondo", weight: w * 0.09 });
  }
  return wavg(items) ?? 0;
}

const ROLE_W = { h1: 3, h2: 2.5, h3: 1.5, body: 3, button: 1, nav: 1, small: 0.5, h4: 0.5 };
const ROLE_NAMES = { h1: "H1", h2: "H2", h3: "H3", h4: "H4", body: "texto de párrafo", button: "botones", nav: "navegación", small: "texto pequeño" };

function familySim(r, g) {
  if (!r.family || !g.family) return 0.5;
  if (r.family.toLowerCase() === g.family.toLowerCase()) return 1;
  if (r.generic && g.generic) return r.generic === g.generic ? 0.85 : 0.25;
  return 0.6;
}

function compareTypography(R, B, pairs, issues, vp) {
  const items = [];
  const rr = R.type?.roles || {}, br = B.type?.roles || {};
  for (const [role, r] of Object.entries(rr)) {
    const w = ROLE_W[role] ?? 0.5;
    const g = br[role];
    const name = ROLE_NAMES[role] || role;
    if (!g) { items.push([0.3, w * 0.5]); continue; }
    const sS = ratio(r.size, g.size), wS = clamp01(1 - Math.abs(r.weight - g.weight) / 400);
    const lS = clamp01(1 - Math.abs(r.lineHeight - g.lineHeight) / 0.5), tS = clamp01(1 - Math.abs(r.letterSpacing - g.letterSpacing) / 0.06);
    const fS = familySim(r, g), uS = (r.transform || "") === (g.transform || "") ? 1 : 0;
    items.push([wavg([[sS, 0.4], [wS, 0.13], [lS, 0.13], [tS, 0.1], [fS, 0.19], [uS, 0.05]]), w]);
    const wt = w / 12;
    if (sS < 0.9) issues.push({ severity: sS < 0.65 ? "high" : "medium", dimension: "typography", viewport: vp, section: null, title: `Tamaño de ${name}`, expected: `${r.size}px`, actual: `${g.size}px`, weight: wt * 0.4 * (1 - sS) * 2 });
    if (fS < 0.8) issues.push({ severity: "high", dimension: "typography", viewport: vp, section: null, title: `Familia tipográfica de ${name}`, expected: `${r.family}${r.generic ? ` (${r.generic})` : ""}`, actual: `${g.family}${g.generic ? ` (${g.generic})` : ""}`, weight: wt * 0.19 * (1 - fS) * 2 });
    if (wS < 0.75) issues.push({ severity: "medium", dimension: "typography", viewport: vp, section: null, title: `Peso de ${name}`, expected: `${r.weight}`, actual: `${g.weight}`, weight: wt * 0.13 * (1 - wS) * 2 });
    if (lS < 0.7) issues.push({ severity: "medium", dimension: "typography", viewport: vp, section: null, title: `Interlineado de ${name}`, expected: `${r.lineHeight}`, actual: `${g.lineHeight}`, weight: wt * 0.13 * (1 - lS) * 2 });
    if (tS < 0.6) issues.push({ severity: "medium", dimension: "typography", viewport: vp, section: null, title: `Tracking (letter-spacing) de ${name}`, expected: `${r.letterSpacing}em`, actual: `${g.letterSpacing}em`, weight: wt * 0.1 * (1 - tS) * 2 });
    if (!uS) issues.push({ severity: "low", dimension: "typography", viewport: vp, section: null, title: `text-transform de ${name}`, expected: r.transform || "none", actual: g.transform || "none", weight: wt * 0.05 });
  }
  if (R.type?.display && B.type?.display) {
    const dS = ratio(R.type.display.size, B.type.display.size);
    items.push([dS, 2]);
    if (dS < 0.85) issues.push({ severity: "high", dimension: "typography", viewport: vp, section: null, title: "Tamaño del texto más grande de la página", expected: `${R.type.display.size}px ("${R.type.display.sample}")`, actual: `${B.type.display.size}px`, weight: (2 / 12) * (1 - dS) });
  }
  const secItems = [];
  for (const [a, b] of pairs) {
    if (a === null || b === null) continue;
    const r = R.sections[a], g = B.sections[b];
    if (!r.maxFont) continue;
    const s = ratio(r.maxFont, g.maxFont);
    secItems.push([s, 1]);
    if (s < 0.8) issues.push({ severity: s < 0.6 ? "high" : "medium", dimension: "typography", viewport: vp, section: a, title: `${label(r)}: tamaño del titular`, expected: `${r.maxFont}px`, actual: `${g.maxFont || 0}px`, weight: (3 / 12) * (1 - s) / Math.max(1, pairs.length) * 2 });
  }
  const secScore = wavg(secItems);
  if (secScore !== null) items.push([secScore, 3]);
  return wavg(items) ?? 0;
}

function compareColor(R, B, pairs, issues, vp) {
  const page = colorSim(R.color?.pageBg, B.color?.pageBg);
  if (page !== null && page < 0.85) issues.push({ severity: "high", dimension: "color", viewport: vp, section: null, title: "Color de fondo de la página", expected: R.color.pageBg, actual: B.color.pageBg, weight: 0.2 * (1 - page) });
  const bgItems = [], txItems = [];
  for (const [a, b] of pairs) {
    if (a === null || b === null) continue;
    const r = R.sections[a], g = B.sections[b];
    const w = Math.min(1.5, Math.max(0.2, r.hVh));
    const s = colorSim(r.bg, g.bg);
    if (s !== null) { bgItems.push([s, w]); if (s < 0.85) issues.push({ severity: s < 0.5 ? "high" : "medium", dimension: "color", viewport: vp, section: a, title: `${label(r)}: color de fondo`, expected: r.bg, actual: g.bg, weight: 0.35 * (1 - s) * w / Math.max(1, pairs.length) }); }
    const t = colorSim(r.textColor, g.textColor);
    if (t !== null) { txItems.push([t, w]); if (t < 0.8) issues.push({ severity: "medium", dimension: "color", viewport: vp, section: a, title: `${label(r)}: color de texto`, expected: r.textColor, actual: g.textColor, weight: 0.15 * (1 - t) * w / Math.max(1, pairs.length) }); }
  }
  const ra = R.color?.accents || [], ba = B.color?.accents || [];
  let accent = 1;
  if (ra.length) {
    accent = ba.length ? Math.max(...ba.map((x) => colorSim(ra[0].value, x.value) ?? 0)) : 0;
    if (accent < 0.8) issues.push({ severity: "high", dimension: "color", viewport: vp, section: null, title: "Color de acento", expected: ra[0].value, actual: ba[0]?.value || "ninguno", weight: 0.2 * (1 - accent) });
  } else if (ba.length) accent = 0.75;
  let pal = 0;
  const rb = R.color?.backgrounds || [], bb = B.color?.backgrounds || [];
  for (const c of rb) {
    const share = bb.filter((x) => (colorSim(c.value, x.value) ?? 0) > 0.75).reduce((s, x) => s + x.share, 0);
    pal += Math.min(c.share, share);
  }
  return wavg([[page, 0.2], [wavg(bgItems), 0.35], [wavg(txItems), 0.15], [accent, 0.2], [rb.length ? pal : null, 0.1]]) ?? 0;
}

function parseBezier(e) {
  if (!e) return null;
  const named = { linear: [0, 0, 1, 1], ease: [0.25, 0.1, 0.25, 1], "ease-in": [0.42, 0, 1, 1], "ease-out": [0, 0, 0.58, 1], "ease-in-out": [0.42, 0, 0.58, 1],
    "power1.out": [0.25, 0.46, 0.45, 0.94], "power2.out": [0.215, 0.61, 0.355, 1], "power3.out": [0.165, 0.84, 0.44, 1], "power4.out": [0.23, 1, 0.32, 1], "expo.out": [0.19, 1, 0.22, 1] };
  if (named[e]) return named[e];
  const m = String(e).match(/cubic-bezier\(([^)]+)\)/);
  if (!m) return null;
  const v = m[1].split(",").map(Number);
  return v.length === 4 && v.every(isFinite) ? v : null;
}
export function easingSim(a, b) {
  if (!a && !b) return 1;
  if (!a || !b) return 0.5;
  const A = parseBezier(a), B = parseBezier(b);
  if (!A || !B) return a === b ? 1 : 0.5;
  return clamp01(1 - Math.hypot(A[0] - B[0], A[1] - B[1], A[2] - B[2], A[3] - B[3]) / 1.2);
}

function hasMotion(m) { return !!m && (m.reveals > 0 || m.scrubs > 0 || m.pinned || m.loops > 0); }

function compareMotion(R, B, pairs, issues, vp) {
  const items = [];
  const nPairs = Math.max(1, pairs.length);
  for (const [a, b] of pairs) {
    if (a === null || b === null) continue;
    const r = R.sections[a].motion, g = B.sections[b].motion;
    if (!r || !g) continue;
    const L = label(R.sections[a]);
    if (!hasMotion(r)) { items.push([hasMotion(g) ? 0.7 : 1, 0.3]); continue; }
    const parts = [];
    if (r.reveals > 0) {
      const cS = ratio(r.reveals, g.reveals, 0.5);
      parts.push([cS, 0.3]);
      if (g.reveals === 0) {
        parts.push([0, 0.45]);
        issues.push({ severity: "high", dimension: "motion", viewport: vp, section: a, title: `${L}: faltan las animaciones de entrada`, expected: `${r.reveals} elemento(s) entran animando ${Object.keys(r.revealProps).join(" + ")}${r.revealDuration ? `, ${r.revealDuration}ms` : ""}${r.easing ? `, ${r.easing}` : ""}${r.stagger ? `, stagger ${r.stagger}ms` : ""}${r.revealOffsetY ? `, desplazamiento ${Math.round(r.revealOffsetY)}px` : ""}`, actual: "ningún elemento se anima al entrar", weight: 0.75 / nPairs });
      } else {
        const pS = jaccard(Object.keys(r.revealProps), Object.keys(g.revealProps));
        const dS = r.revealDuration && g.revealDuration ? ratio(r.revealDuration, g.revealDuration) : null;
        const oS = r.revealOffsetY ? ratio(r.revealOffsetY, g.revealOffsetY || 0, 4) : null;
        const sS = r.stagger ? ratio(r.stagger, g.stagger || 0, 10) : null;
        const eS = r.easing ? easingSim(r.easing, g.easing) : null;
        parts.push([pS, 0.15], [dS, 0.12], [oS, 0.08], [sS, 0.05], [eS, 0.05]);
        if (cS < 0.6) issues.push({ severity: "medium", dimension: "motion", viewport: vp, section: a, title: `${L}: cantidad de elementos con entrada animada`, expected: `${r.reveals}`, actual: `${g.reveals}`, weight: 0.3 * (1 - cS) / nPairs });
        if (pS < 0.99) issues.push({ severity: "medium", dimension: "motion", viewport: vp, section: a, title: `${L}: propiedades animadas en la entrada`, expected: Object.keys(r.revealProps).join(" + "), actual: Object.keys(g.revealProps).join(" + ") || "ninguna", weight: 0.15 * (1 - pS) / nPairs });
        if (dS !== null && dS < 0.75) issues.push({ severity: "medium", dimension: "motion", viewport: vp, section: a, title: `${L}: duración de la entrada`, expected: `${r.revealDuration}ms`, actual: `${g.revealDuration}ms`, weight: 0.12 * (1 - dS) / nPairs });
        if (oS !== null && oS < 0.7) issues.push({ severity: "low", dimension: "motion", viewport: vp, section: a, title: `${L}: desplazamiento inicial de la entrada`, expected: `${Math.round(r.revealOffsetY)}px`, actual: `${Math.round(g.revealOffsetY || 0)}px`, weight: 0.08 * (1 - oS) / nPairs });
        if (sS !== null && sS < 0.6) issues.push({ severity: "low", dimension: "motion", viewport: vp, section: a, title: `${L}: stagger entre elementos`, expected: `${r.stagger}ms`, actual: `${g.stagger || 0}ms`, weight: 0.05 * (1 - sS) / nPairs });
        if (eS !== null && eS < 0.7) issues.push({ severity: "low", dimension: "motion", viewport: vp, section: a, title: `${L}: curva de easing`, expected: r.easing, actual: g.easing || "desconocida", weight: 0.05 * (1 - eS) / nPairs });
      }
    } else if (g.reveals > 2) parts.push([0.7, 0.15]);
    if (r.scrubs > 0 || g.scrubs > 0) {
      const cS = ratio(r.scrubs, g.scrubs, 0.5), pS = jaccard(r.scrubProps, g.scrubProps);
      parts.push([cS, 0.15], [pS, 0.1]);
      if (r.scrubs > 0 && g.scrubs === 0) issues.push({ severity: "high", dimension: "motion", viewport: vp, section: a, title: `${L}: falta la animación ligada al scroll`, expected: `${r.scrubs} elemento(s) cambian ${r.scrubProps.join(" + ")} según la posición de scroll${r.parallaxSpeeds?.length ? ` (parallax ×${r.parallaxSpeeds.join(", ×")})` : ""}`, actual: "nada reacciona al scroll", weight: 0.25 / nPairs });
      else if (pS < 0.99 && r.scrubs > 0) issues.push({ severity: "medium", dimension: "motion", viewport: vp, section: a, title: `${L}: propiedades ligadas al scroll`, expected: r.scrubProps.join(" + "), actual: g.scrubProps.join(" + ") || "ninguna", weight: 0.1 * (1 - pS) / nPairs });
    }
    if (r.pinned || g.pinned) {
      const pinS = r.pinned && g.pinned ? 0.5 + 0.5 * ratio(r.pinScrollPx, g.pinScrollPx) : 0;
      parts.push([pinS, 0.25]);
      if (r.pinned && !g.pinned) issues.push({ severity: "high", dimension: "motion", viewport: vp, section: a, title: `${L}: falta el pin (sección clavada durante el scroll)`, expected: `contenido fijo durante ${r.pinScrollPx}px de scroll`, actual: "la sección pasa sin clavarse", weight: 0.25 / nPairs });
      else if (!r.pinned && g.pinned) issues.push({ severity: "medium", dimension: "motion", viewport: vp, section: a, title: `${L}: pin que no existe en la referencia`, expected: "sin pin", actual: `clavada ${g.pinScrollPx}px`, weight: 0.15 / nPairs });
      else if (pinS < 0.85) issues.push({ severity: "medium", dimension: "motion", viewport: vp, section: a, title: `${L}: duración del pin`, expected: `${r.pinScrollPx}px de scroll`, actual: `${g.pinScrollPx}px`, weight: 0.12 * (1 - pinS) / nPairs });
    }
    if (r.horizontal !== g.horizontal) {
      parts.push([0, 0.15]);
      issues.push({ severity: "high", dimension: "motion", viewport: vp, section: a, title: `${L}: desplazamiento horizontal ligado al scroll`, expected: r.horizontal ? "sí" : "no", actual: g.horizontal ? "sí" : "no", weight: 0.15 / nPairs });
    }
    if (r.loops > 0 || g.loops > 0) {
      const lS = r.loops > 0 && g.loops > 0 ? 1 : 0;
      parts.push([lS, 0.12]);
      if (r.loops > 0 && !g.loops) issues.push({ severity: "medium", dimension: "motion", viewport: vp, section: a, title: `${L}: falta la animación en bucle (marquee/rotación)`, expected: `${r.loops} elemento(s) en movimiento continuo`, actual: "estático", weight: 0.12 / nPairs });
    }
    items.push([wavg(parts) ?? 1, 1]);
  }
  const sectionScore = wavg(items) ?? 1;
  const smooth = !!R.effects?.smoothScroll === !!B.effects?.smoothScroll ? 1 : 0;
  if (!smooth) issues.push({ severity: "medium", dimension: "motion", viewport: vp, section: null, title: "Scroll suavizado (Lenis/Locomotive/ScrollSmoother)", expected: R.effects?.smoothScroll ? "activo" : "nativo", actual: B.effects?.smoothScroll ? "activo" : "nativo", weight: 0.08 });
  const eS = R.motion?.summary?.easing ? easingSim(R.motion.summary.easing, B.motion?.summary?.easing) : null;
  const rt = R.motion?.tokens?.[0], bt = B.motion?.tokens?.[0];
  const tokenS = rt ? (bt ? 0.5 * ratio(rt.duration, bt.duration) + 0.5 * easingSim(rt.easing, bt.easing) : 0) : null;
  if (tokenS !== null && tokenS < 0.7) issues.push({ severity: "low", dimension: "motion", viewport: vp, section: null, title: "Transición CSS más usada", expected: `${rt.duration}ms ${rt.easing}`, actual: bt ? `${bt.duration}ms ${bt.easing}` : "sin transiciones", weight: 0.07 * (1 - tokenS) });
  const fixS = ratio(R.motion?.fixed?.length || 0, B.motion?.fixed?.length || 0, 0.5);
  if (fixS < 0.6) issues.push({ severity: "medium", dimension: "motion", viewport: vp, section: null, title: "Elementos fijos en pantalla (nav, cursor, overlays)", expected: `${R.motion?.fixed?.length || 0}: ${(R.motion?.fixed || []).map((f) => f.desc.split(" ")[0]).join(", ")}`, actual: `${B.motion?.fixed?.length || 0}`, weight: 0.05 * (1 - fixS) });
  return wavg([[sectionScore, 0.72], [smooth, 0.08], [eS, 0.06], [tokenS, 0.07], [fixS, 0.07]]) ?? 0;
}

const normProp = (p) => p.replace(/^(img|video|svg|span|div|picture|child) /, "hijo ");
const KIND_NAMES = { button: "botones", link: "enlaces", card: "tarjetas" };

function compareInteraction(R, B, issues, vp) {
  if (!R.hover || !R.hover.targets?.length) return null;
  const items = [];
  const bk = B.hover?.byKind || {};
  for (const [kind, r] of Object.entries(R.hover.byKind || {})) {
    const g = bk[kind];
    const name = KIND_NAMES[kind] || kind;
    const rRate = r.withEffect / Math.max(1, r.targets);
    if (rRate === 0) { items.push([g && g.withEffect ? 0.8 : 1, 0.4]); continue; }
    if (!g || !g.withEffect) {
      items.push([0, 1]);
      issues.push({ severity: "high", dimension: "interaction", viewport: vp, section: null, title: `Falta el efecto hover en ${name}`, expected: `cambia ${Object.keys(r.props).map(normProp).join(", ")}${r.duration ? ` en ${r.duration}ms` : ""}`, actual: g ? "sin cambio al pasar el cursor" : `no se encontraron ${name}`, weight: 1 / 3 });
      continue;
    }
    const pS = jaccard(Object.keys(r.props).map(normProp), Object.keys(g.props).map(normProp));
    const dS = r.duration && g.duration ? ratio(r.duration, g.duration) : r.duration ? 0.3 : null;
    items.push([wavg([[pS, 0.6], [dS, 0.25], [ratio(rRate, g.withEffect / Math.max(1, g.targets)), 0.15]]), 1]);
    if (pS < 0.99) issues.push({ severity: "medium", dimension: "interaction", viewport: vp, section: null, title: `Hover de ${name}: propiedades que cambian`, expected: Object.keys(r.props).map(normProp).join(", "), actual: Object.keys(g.props).map(normProp).join(", "), weight: 0.6 * (1 - pS) / 3 });
    if (dS !== null && dS < 0.75) issues.push({ severity: "low", dimension: "interaction", viewport: vp, section: null, title: `Hover de ${name}: duración de la transición`, expected: `${r.duration}ms`, actual: g.duration ? `${g.duration}ms` : "instantánea", weight: 0.25 * (1 - dS) / 3 });
  }
  const cur = !!R.hover.customCursor === !!B.hover?.customCursor ? 1 : 0;
  if (!cur) issues.push({ severity: "medium", dimension: "interaction", viewport: vp, section: null, title: "Cursor personalizado que sigue al ratón", expected: R.hover.customCursor ? `sí (${R.hover.customCursor.size}px)` : "no", actual: B.hover?.customCursor ? "sí" : "no", weight: 0.2 });
  items.push([cur, R.hover.customCursor ? 1 : 0.3]);
  return wavg(items) ?? 1;
}

const FX = {
  backdropFilter: ["backdrop-filter (blur de cristal)", 1], blendMode: ["mix-blend-mode", 1], clipPath: ["clip-path", 1], mask: ["máscaras CSS", 1],
  filter: ["filter (blur/grayscale…)", 1], gradientBg: ["fondos con degradado", 1], gradientText: ["texto con degradado", 1], textStroke: ["texto con contorno", 1],
  roundedLarge: ["esquinas muy redondeadas (≥16px)", 1], shadow: ["sombras", 1], sticky: ["position: sticky", 1], video: ["vídeo", 1], canvas: ["canvas/WebGL", 1],
  svg: ["SVG inline", 3], splitText: ["texto dividido en letras/palabras", 8],
};

function compareEffects(R, B, issues, vp) {
  const re = R.effects || {}, be = B.effects || {};
  const items = [];
  for (const [key, [name, min]] of Object.entries(FX)) {
    const r = (re[key] || 0) >= min, g = (be[key] || 0) >= min;
    if (!r && !g) continue;
    items.push([r === g ? 1 : r ? 0 : 0.7, r ? 1 : 0.5]);
    if (r && !g) issues.push({ severity: key === "canvas" || key === "video" ? "high" : "medium", dimension: "effects", viewport: vp, section: null, title: `Falta el efecto: ${name}`, expected: `${re[key]} elemento(s)`, actual: "0", weight: 0.12 });
    else if (!r && g) issues.push({ severity: "low", dimension: "effects", viewport: vp, section: null, title: `Efecto que la referencia no usa: ${name}`, expected: "0", actual: `${be[key]} elemento(s)`, weight: 0.04 });
  }
  for (const [key, name] of [["grainOverlay", "capa de grano/ruido a pantalla completa"], ["cursorNone", "cursor nativo oculto"]]) {
    if (!re[key] && !be[key]) continue;
    items.push([!!re[key] === !!be[key] ? 1 : 0, 1]);
    if (re[key] && !be[key]) issues.push({ severity: "medium", dimension: "effects", viewport: vp, section: null, title: `Falta: ${name}`, expected: "sí", actual: "no", weight: 0.1 });
  }
  const rr = re.radii?.[0], br = be.radii?.[0];
  if (rr || br) {
    const s = rr && br ? (rr.radius === br.radius ? 1 : rr.radius === "pill" || br.radius === "pill" ? 0.3 : ratio(+rr.radius, +br.radius, 2)) : 0.3;
    items.push([s, 1]);
    if (s < 0.7) issues.push({ severity: "medium", dimension: "effects", viewport: vp, section: null, title: "Radio de borde más usado", expected: rr ? (rr.radius === "pill" ? "píldora (999px)" : `${rr.radius}px`) : "sin radios", actual: br ? (br.radius === "pill" ? "píldora (999px)" : `${br.radius}px`) : "sin radios", weight: 0.1 * (1 - s) });
  }
  return wavg(items) ?? 1;
}

export function gridSim(a, b) {
  if (!a?.cells || !b?.cells || a.cells.length !== b.cells.length) return null;
  let sum = 0;
  for (let i = 0; i < a.cells.length; i++) sum += deltaE(rgbToLab(...a.cells[i]), rgbToLab(...b.cells[i]));
  const color = clamp01(1 - sum / a.cells.length / 38);
  return 0.8 * color + 0.2 * ratio(a.detail, b.detail, 1.5);
}

function comparePerceptual(R, B, pairs, issues, vp) {
  const items = [];
  for (const [a, b] of pairs) {
    if (a === null || b === null) continue;
    const r = R.sections[a], g = B.sections[b];
    const s = gridSim(r.grid, g.grid);
    if (s === null) continue;
    const w = Math.min(1.5, Math.max(0.2, r.hVh));
    items.push([s, w]);
    if (s < 0.6) issues.push({ severity: s < 0.4 ? "high" : "medium", dimension: "perceptual", viewport: vp, section: a, title: `${label(r)}: la composición visual no se parece`, expected: `ver captura ${r.shot || ""}`.trim(), actual: `ver captura ${g.shot || ""} (similitud ${Math.round(s * 100)}%)`.trim(), weight: (1 - s) * w / Math.max(1, pairs.length) });
  }
  return wavg(items);
}

// ---------- API ----------
function compareViewport(R, B, vp, ignore) {
  const issues = [];
  const pairs = alignSections(R.sections, B.sections);
  const dims = {
    structure: compareStructure(R, B, pairs, issues, vp),
    layout: compareLayout(R, B, pairs, issues, vp),
    typography: compareTypography(R, B, pairs, issues, vp),
    color: compareColor(R, B, pairs, issues, vp),
    motion: compareMotion(R, B, pairs, issues, vp),
    interaction: compareInteraction(R, B, issues, vp),
    effects: compareEffects(R, B, issues, vp),
    perceptual: comparePerceptual(R, B, pairs, issues, vp),
  };
  for (const d of ignore) dims[d] = null;
  const score = wavg(DIMENSIONS.map((d) => [dims[d], WEIGHTS[d]])) ?? 0;
  const kept = issues.filter((i) => !ignore.includes(i.dimension));
  for (const i of kept) i.impact = r2((i.weight || 0.05) * WEIGHTS[i.dimension] * 100);
  const sections = pairs.filter(([a]) => a !== null).map(([a, b]) => ({
    index: a, role: R.sections[a].role, buildIndex: b, refShot: R.sections[a].shot || null, buildShot: b !== null ? B.sections[b].shot || null : null,
    visual: b !== null ? gridSim(R.sections[a].grid, B.sections[b].grid) : 0,
    issues: kept.filter((i) => i.section === a).length,
  }));
  return { score, dims, issues: kept, sections };
}

export function compareFingerprints(ref, build, { ignore = [] } = {}) {
  const names = Object.keys(ref.viewports || {}).filter((n) => build.viewports?.[n]);
  if (!names.length) throw new Error("Las huellas no comparten ningún viewport comparable.");
  const viewports = {};
  for (const n of names) viewports[n] = compareViewport(ref.viewports[n], build.viewports[n], n, ignore);
  const vw = (n) => VIEWPORT_WEIGHTS[n] ?? 0.5;
  const overall = wavg(names.map((n) => [viewports[n].score, vw(n)])) ?? 0;
  const dimensions = {};
  for (const d of DIMENSIONS) {
    const v = wavg(names.map((n) => [viewports[n].dims[d], vw(n)]));
    dimensions[d] = v === null ? null : Math.round(v * 100);
  }
  const issues = names.flatMap((n) => viewports[n].issues.map((i) => ({ ...i, impact: r2(i.impact * vw(n)) })));
  // misma diferencia en ambos viewports → una sola entrada
  const merged = new Map();
  for (const i of issues) {
    const key = `${i.dimension}|${i.section}|${i.title}|${i.expected}|${i.actual}`;
    const prev = merged.get(key);
    if (prev) { prev.impact = r2(prev.impact + i.impact); prev.viewport = "desktop+mobile"; } else merged.set(key, { ...i });
  }
  const sev = { high: 0, medium: 1, low: 2 };
  const list = [...merged.values()].map(({ weight: _w, ...i }) => i).sort((a, b) => b.impact - a.impact || sev[a.severity] - sev[b.severity]);
  const score = Math.round(overall * 100);
  return {
    version: 1,
    reference: ref.url, build: build.url, comparedAt: new Date().toISOString(),
    score,
    verdict: score >= 90 ? "excelente" : score >= 80 ? "objetivo alcanzado" : score >= 65 ? "cerca" : score >= 45 ? "lejos" : "muy lejos",
    target: 85,
    dimensions,
    ignored: ignore,
    viewports: Object.fromEntries(names.map((n) => [n, { score: Math.round(viewports[n].score * 100), dimensions: Object.fromEntries(DIMENSIONS.map((d) => [d, viewports[n].dims[d] === null ? null : Math.round(viewports[n].dims[d] * 100)])), sections: viewports[n].sections.map((s) => ({ ...s, visual: s.visual === null ? null : Math.round(s.visual * 100) })) }])),
    issues: list,
    probeErrors: [...(ref.errors || []).map((e) => ({ site: "reference", ...e })), ...(build.errors || []).map((e) => ({ site: "build", ...e }))],
  };
}

export function renderReportMarkdown(report, { maxIssues = 40 } = {}) {
  const lines = [];
  lines.push(`# WebADN — informe de fidelidad: ${report.score}/100 (${report.verdict})`, "");
  lines.push(`- Referencia: ${report.reference}`, `- Build: ${report.build}`, `- Objetivo: ${report.target}/100`, "");
  lines.push("| Dimensión | Puntuación |", "|---|---|");
  for (const d of DIMENSIONS) if (report.dimensions[d] !== null && report.dimensions[d] !== undefined) lines.push(`| ${DIMENSION_LABELS[d]} | ${report.dimensions[d]} |`);
  lines.push("");
  for (const [name, v] of Object.entries(report.viewports)) lines.push(`- ${name}: ${v.score}/100`);
  lines.push("", `## Qué corregir (${report.issues.length} diferencias, ordenadas por impacto)`, "");
  if (!report.issues.length) lines.push("Sin diferencias medibles.");
  report.issues.slice(0, maxIssues).forEach((i, k) => {
    lines.push(`${k + 1}. **[${DIMENSION_LABELS[i.dimension]} · ${i.viewport}] ${i.title}** (≈ +${i.impact} pts)`);
    lines.push(`   - Referencia: ${i.expected}`, `   - Build: ${i.actual}`);
  });
  if (report.issues.length > maxIssues) lines.push("", `… y ${report.issues.length - maxIssues} diferencias menores más (ver report.json).`);
  if (report.probeErrors?.length) { lines.push("", "## Avisos de medición"); for (const e of report.probeErrors) lines.push(`- ${e.site} (${e.viewport}): ${e.message}`); }
  return lines.join("\n") + "\n";
}
