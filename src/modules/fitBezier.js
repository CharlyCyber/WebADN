// src/modules/fitBezier.js
//
// FASE 3A — Easing medido, no inferido.
//
// PROBLEMA que resuelve: introCapture.js y motionSampler.js inferían el easing
// con una heurística de 3 puntos (valor en el punto medio) → clasificaba en
// "ease-in / ease-out / linear" con curvas genéricas. Eso pierde el "feel" real
// de sitios premium (easing custom, overshoot, etc.).
//
// SOLUCIÓN: dado un set de muestras (t, progress) donde t ∈ [0,1] es el tiempo
// normalizado y progress ∈ [0,1] es el valor normalizado de la propiedad
// animada, ajustamos una curva cubic-bezier(x1,y1,x2,y2) por mínimos cuadrados
// (búsqueda grid + refinamiento de Newton-style) y devolvemos la cadena CSS
// `cubic-bezier(x1,y1,x2,y2)` + un nombre aproximado (power2.out, expo.out...)
// para que los snippets GSAP del brief puedan usar el alias conocido.
//
// Sin dependencias. ~120 líneas.

// Alias GSAP/canónicos a los que mapeamos la curva ajustada si está cerca.
// x1/y1/x2/y2 + tolerancia. El nombre ayuda a que los snippets del brief sean
// legibles (gsap ease: "power3.out") en vez de solo la curva cruda.
const KNOWN_EASES = [
  { name: "power2.out",   x1: 0.0,  y1: 0.0,  x2: 0.58, y2: 1.0,  tol: 0.12 },
  { name: "power3.out",   x1: 0.215,y1: 0.61, x2: 0.355, y2: 1.0,  tol: 0.10 },
  { name: "expo.out",     x1: 0.0,  y1: 0.0,  x2: 0.16, y2: 1.0,  tol: 0.10 },
  { name: "circ.out",     x1: 0.075,y1: 0.82, x2: 0.165,y2: 1.0,  tol: 0.10 },
  { name: "back.out(1.7)",x1: 0.175,y1: 0.885,x2: 0.32, y2: 1.275,tol: 0.14 },
  { name: "power2.inOut", x1: 0.455,y1: 0.03, x2: 0.515,y2: 0.955,tol: 0.10 },
  { name: "sine.inOut",   x1: 0.445,y1: 0.05, x2: 0.55, y2: 0.95, tol: 0.10 },
  { name: "power4.out",   x1: 0.165,y1: 0.84, x2: 0.44, y2: 1.0,  tol: 0.10 }
];

/**
 * Evalúa una bezier cúbica 1D para x dado t (parámetro), usando el algoritmo
 * de Casteljau. P0=0, P3=1 (curvas de easing CSS siempre arrancan en (0,0) y
 * terminan en (1,1)).
 */
function bezierAxis(t, p1, p2) {
  // p0 = 0, p3 = 1
  const c = 3 * p1;
  const b = 3 * (p2 - p1) - c;
  const a = 1 - c - b;
  return ((a * t + b) * t + c) * t;
}

/**
 * Dado un tiempo normalizado x, encuentra el parámetro t tal que bezierAxis(t, x1, x2) = x.
 * Búsqueda binaria (la curva x(t) es monótona para easings válidos: 0<=x1,x2<=1).
 */
function solveTForX(x, x1, x2) {
  let lo = 0, hi = 1, t = x;
  for (let i = 0; i < 12; i++) {
    const vx = bezierAxis(t, x1, x2);
    if (Math.abs(vx - x) < 1e-4) return t;
    if (vx < x) lo = t; else hi = t;
    t = (lo + hi) / 2;
  }
  return t;
}

/**
 * Progreso de la curva en el tiempo normalizado x.
 */
function bezierY(x, x1, y1, x2, y2) {
  const t = solveTForX(x, x1, x2);
  return bezierAxis(t, y1, y2);
}

/**
 * Suma de errores cuadráticos entre la curva candidata y las muestras.
 */
function errorFor(samples, x1, y1, x2, y2) {
  let sum = 0;
  for (const [t, p] of samples) {
    const y = bezierY(t, x1, y1, x2, y2);
    const d = y - p;
    sum += d * d;
  }
  return sum / samples.length;
}

/**
 * Ajusta (x1,y1,x2,y2) por mínimos cuadrados:
 *   1) Grid grueso sobre x1,x2 ∈ [0,1] (solo estos; y1,y2 se resuelven por
 *      regresión lineal condicionada, pero para simplicidad y robustez hacemos
 *      grid también sobre y1,y2 con paso más grueso).
 *   2) Refinamos el mejor candidato con descenso por coordenadas.
 * Devuelve { x1, y1, x2, y2, error }.
 */
function fitCubicBezier(samples) {
  // Paso 1: grid. Cubrimos overshoot permitiendo y2 > 1 (back.out) y y1 < 0.
  const coarse = 0.25;
  let best = { x1: 0.42, y1: 0, x2: 0.58, y2: 1, error: Infinity };

  for (let x1 = 0; x1 <= 1.0001; x1 += coarse) {
    for (let x2 = 0; x2 <= 1.0001; x2 += coarse) {
      for (let y1 of [0, 0.5]) {
        for (let y2 of [0.5, 1, 1.3]) {
          const err = errorFor(samples, x1, y1, x2, y2);
          if (err < best.error) best = { x1, y1, x2, y2, error: err };
        }
      }
    }
  }

  // Paso 2: refinamiento por descenso por coordenadas.
  const fine = [0.1, 0.05, 0.02, 0.008];
  for (const step of fine) {
    let improved = true;
    while (improved) {
      improved = false;
      const coords = ["x1", "y1", "x2", "y2"];
      for (const coord of coords) {
        for (const delta of [step, -step]) {
          const cand = { ...best };
          cand[coord] += delta;
          // x1,x2 deben quedar en [0,1] (CSS no permite negativos en x).
          if (coord === "x1" || coord === "x2") {
            if (cand[coord] < 0 || cand[coord] > 1) continue;
          }
          cand.error = errorFor(samples, cand.x1, cand.y1, cand.x2, cand.y2);
          if (cand.error < best.error - 1e-7) {
            best = cand;
            improved = true;
          }
        }
      }
    }
  }

  return best;
}

function dist2(a, b) {
  return (a.x1 - b.x1) ** 2 + (a.y1 - b.y1) ** 2 + (a.x2 - b.x2) ** 2 + (a.y2 - b.y2) ** 2;
}

/**
 * Normaliza muestras (t, value) a (t∈[0,1], progress∈[0,1]) invirtiendo si la
 * animación va "hacia atrás" (decrementa el valor). Descarta runs sin rango.
 */
function normalizeSamples(samples) {
  if (!samples || samples.length < 3) return null;

  const sorted = [...samples].sort((a, b) => a.t - b.t);
  const tMin = sorted[0].t;
  const tMax = sorted[sorted.length - 1].t;
  const vMin = Math.min(...sorted.map(s => s.value));
  const vMax = Math.max(...sorted.map(s => s.value));

  const tRange = tMax - tMin;
  const vRange = vMax - vMin;
  if (tRange <= 0 || vRange <= 0.001) return null;

  // Si el valor decrece con el tiempo → invertimos progress para que la curva
  // se exprese como "de 0 a 1" (el sentido físico del easing).
  const decreasing = sorted[0].value > sorted[sorted.length - 1].value;

  return sorted.map(s => {
    const t = (s.t - tMin) / tRange;
    const raw = (s.value - vMin) / vRange;
    const progress = decreasing ? 1 - raw : raw;
    return [t, progress];
  });
}

/**
 * API pública. Recibe muestras [{t, value}] y devuelve:
 *   {
 *     cubicBezier: "cubic-bezier(0.215,0.61,0.355,1)",
 *     values: {x1,y1,x2,y2},
 *     name: "power3.out" | null,        // alias GSAP si matchea uno canónico
 *     gsap: "power3.out",                // listo para `ease:` en un snippet
 *     confidence: 0..1,                  // 1 - error normalizado
 *     sampleCount
 *   }
 * Devuelve null si no hay suficientes muestras o no hay rango real.
 */
export function fitEasing(rawSamples) {
  const samples = normalizeSamples(rawSamples);
  if (!samples) return null;

  const fit = fitCubicBezier(samples);

  // Confianza: 1 - sqrt(error), clampado. Error ~0 → confianza alta.
  const confidence = Math.max(0, Math.min(1, 1 - Math.sqrt(fit.error)));

  // Redondear a 3 decimales para legibilidad CSS.
  const r = (n) => Math.round(n * 1000) / 1000;
  const x1 = r(fit.x1), y1 = r(fit.y1), x2 = r(fit.x2), y2 = r(fit.y2);

  // Buscar alias conocido más cercano.
  let bestName = null;
  let bestDist = Infinity;
  for (const e of KNOWN_EASES) {
    const d = dist2({ x1, y1, x2, y2 }, e);
    if (d < e.tol * e.tol && d < bestDist) {
      bestDist = d;
      bestName = e.name;
    }
  }

  return {
    cubicBezier: `cubic-bezier(${x1},${y1},${x2},${y2})`,
    values: { x1, y1, x2, y2 },
    name: bestName,
    gsap: bestName || `cubic-bezier(${x1},${y1},${x2},${y2})`,
    confidence,
    sampleCount: samples.length
  };
}

/**
 * Conveniencia: ajusta easing desde una lista de keyframes del intro/scroll.
 * Cada keyframe tiene { tMs } y una propiedad numérica (opacity, y, scaleX...).
 * `prop` indica qué campo leer; `invertY` permite tratar y (donde "menos y"
 * puede significar "más progreso" según la dirección del slide).
 */
export function fitEasingFromKeyframes(keyframes, prop, { invert = false } = {}) {
  if (!Array.isArray(keyframes) || keyframes.length < 3) return null;
  const samples = keyframes
    .filter(k => typeof k.tMs === "number" && typeof k[prop] === "number" && isFinite(k[prop]))
    .map(k => ({ t: k.tMs, value: invert ? -k[prop] : k[prop] }));
  return fitEasing(samples);
}
