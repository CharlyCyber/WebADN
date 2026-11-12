// Clasifica las series crudas de la sonda en comportamientos de movimiento:
//   reveal  → cambia con el TIEMPO estando el scroll quieto (entrada al viewport)
//   scrub   → el valor asentado depende de la POSICIÓN de scroll (parallax, scrub)
//   pin     → el elemento se queda clavado en pantalla durante un tramo de scroll
//   fixed   → clavado durante toda la página (nav, cursores, overlays)
//   loop    → nunca se asienta (marquee, rotaciones, flotaciones)
// Función pura: testeable sin navegador.

import { fitEasing } from "./fitBezier.js";

const PROPS = ["opacity", "x", "y", "scale", "rotate"]; // índices 0..4 del pack
const THRESH = [0.05, 3, 3, 0.015, 1];

const med = (arr) => {
  if (!arr.length) return null;
  const s = [...arr].sort((a, b) => a - b);
  return s[Math.floor(s.length / 2)];
};
const r1 = (n) => Math.round(n * 10) / 10;

function deltaProps(a, b) {
  const out = [];
  for (let i = 0; i < PROPS.length; i++) if (Math.abs(a[i] - b[i]) > THRESH[i]) out.push(PROPS[i]);
  if (a[5] !== b[5]) out.push("clip-path");
  if (a[6] !== b[6]) out.push("filter");
  if (a[7] !== b[7]) out.push("visibility");
  return out;
}

function stateOf(p) {
  const s = { opacity: p[0], x: p[1], y: p[2], scale: p[3], rotate: p[4] };
  if (p[5]) s.clipPath = p[5];
  if (p[6]) s.filter = p[6];
  return s;
}

function monotonic(values) {
  let up = 0, down = 0;
  for (let i = 1; i < values.length; i++) {
    const d = values[i] - values[i - 1];
    if (d > 0) up++; else if (d < 0) down++;
  }
  const moves = up + down;
  return moves >= 2 && Math.max(up, down) / moves >= 0.8;
}

export function analyzeMotion(raw = [], { vh = 900, totalStops = 0, sectionCount = 0 } = {}) {
  const reveals = [], scrubs = [], pins = [], fixed = [], loops = [];

  for (const el of raw) {
    const stops = el.stops || [];
    const base = { desc: el.desc, kind: el.kind, section: el.sec, size: [el.w, el.h] };
    const css = el.css && el.css.duration > 0 ? el.css : null;

    // --- fixed / pin a partir de la posición en pantalla de elementos grandes y sticky ---
    const rects = el.rects || [];
    if (rects.length >= 3) {
      let runStart = 0, best = null;
      for (let i = 1; i <= rects.length; i++) {
        const same = i < rects.length && Math.abs(rects[i][1] - rects[runStart][1]) <= 3;
        if (!same) {
          const len = i - runStart;
          const px = rects[i - 1][0] - rects[runStart][0];
          const onScreen = rects[runStart][1] > -vh * 0.5 && rects[runStart][1] < vh * 0.6;
          if (len >= 3 && onScreen && (!best || px > best.px)) best = { px, from: rects[runStart][0], to: rects[i - 1][0], top: rects[runStart][1], len };
          runStart = i;
        }
      }
      if (best) {
        if (best.len >= rects.length * 0.8 && rects.length >= 4) fixed.push({ ...base, top: best.top });
        else if (best.px >= vh * 0.3 && el.big) {
          const lefts = rects.filter((r) => r[0] >= best.from && r[0] <= best.to).map((r) => r[2]);
          pins.push({ ...base, scrollPx: best.px, fromY: best.from, toY: best.to, horizontalShift: Math.abs(Math.max(...lefts) - Math.min(...lefts)) });
        }
      }
    }
    if (!stops.length) continue;

    // --- loop: cambia en casi todas las paradas y nunca se asienta ---
    const moving = stops.filter((s) => s.ts !== null);
    const open = stops.filter((s) => s.open);
    if (stops.length >= 3 && open.length >= stops.length * 0.7) {
      const props = [...new Set(moving.flatMap((s) => deltaProps(s.f, s.l)))];
      loops.push({ ...base, props });
      continue;
    }

    // --- scrub: valores asentados distintos y monótonos a lo largo del scroll ---
    const scrubProps = [];
    const settled = stops.filter((s) => !s.open && !s.intro);
    if (settled.length >= 3) {
      for (let i = 0; i < PROPS.length; i++) {
        const vals = settled.map((s) => s.l[i]);
        const range = Math.max(...vals) - Math.min(...vals);
        const distinct = new Set(vals.map((v) => Math.round(v / (THRESH[i] / 2)))).size;
        if (range > THRESH[i] * 2 && distinct >= 3 && monotonic(vals)) {
          const dy = settled[settled.length - 1].y - settled[0].y;
          scrubProps.push({ prop: PROPS[i], from: r1(vals[0]), to: r1(vals[vals.length - 1]), ...(PROPS[i] === "y" && dy ? { speed: Math.round(((vals[vals.length - 1] - vals[0]) / dy) * 100) / 100 } : {}) });
        }
      }
    }
    if (scrubProps.length) {
      scrubs.push({ ...base, props: scrubProps, scrollPx: stops[stops.length - 1].y - stops[0].y, horizontal: scrubProps.some((p) => p.prop === "x" && Math.abs(p.to - p.from) > 200) });
    }
    const scrubSet = new Set(scrubProps.map((p) => p.prop));

    // --- reveal: primer cambio temporal significativo que no sea scrub ---
    for (const s of moving) {
      const props = deltaProps(s.f, s.l).filter((p) => !scrubSet.has(p) && p !== "visibility");
      if (!props.length) continue;
      const duration = Math.max(0, (s.te ?? 0) - (s.ts ?? 0));
      if (duration < 30 && !props.includes("clip-path")) continue;
      let easing = null;
      const main = PROPS.indexOf(props.find((p) => PROPS.includes(p)) || "");
      if (main >= 0 && s.pts && s.pts.length >= 5) {
        const fit = fitEasing(s.pts.filter((p) => p[0] >= (s.ts ?? 0)).map((p) => ({ t: p[0], value: p[main + 1] })));
        if (fit && fit.confidence > 0.6) easing = fit.gsap;
      }
      reveals.push({ ...base, props, from: stateOf(s.f), to: stateOf(s.l), delayMs: css ? css.delay : s.ts, durationMs: css ? css.duration : duration, open: css ? false : !!s.open, easing: css ? css.easing.replace(/\s+/g, "") : easing, timing: css ? "exact" : "measured", atScrollY: s.y, ...(s.intro ? { onLoad: true } : {}) });
      break;
    }
  }

  // pins anidados → conservar el más grande por tramo
  pins.sort((a, b) => b.size[0] * b.size[1] - a.size[0] * a.size[1]);
  const uniquePins = [];
  for (const p of pins) {
    if (!uniquePins.some((q) => Math.min(p.toY, q.toY) - Math.max(p.fromY, q.fromY) > 0)) uniquePins.push(p);
  }
  uniquePins.sort((a, b) => a.fromY - b.fromY);

  const n = Math.max(sectionCount, 1 + Math.max(0, ...raw.map((e) => e.sec || 0)));
  const sections = Array.from({ length: n }, (_, i) => {
    const rv = reveals.filter((r) => r.section === i);
    const sc = scrubs.filter((r) => r.section === i);
    const propCount = {};
    for (const r of rv) for (const p of r.props) propCount[p] = (propCount[p] || 0) + 1;
    const delays = rv.map((r) => r.delayMs).sort((a, b) => a - b);
    const gaps = delays.slice(1).map((d, k) => d - delays[k]).filter((g) => g > 8);
    const pin = uniquePins.find((p) => p.section === i);
    return {
      index: i,
      reveals: rv.length,
      revealProps: propCount,
      revealDuration: med(rv.filter((r) => !r.open).map((r) => r.durationMs)) ?? med(rv.map((r) => r.durationMs)),
      revealOffsetY: med(rv.filter((r) => r.props.includes("y")).map((r) => Math.abs(r.from.y - r.to.y))),
      stagger: med(gaps),
      easing: mostCommon(rv.map((r) => r.easing).filter(Boolean)),
      scrubs: sc.length,
      scrubProps: [...new Set(sc.flatMap((s) => s.props.map((p) => p.prop)))],
      parallaxSpeeds: sc.flatMap((s) => s.props.filter((p) => p.speed).map((p) => p.speed)).slice(0, 6),
      pinned: !!pin, pinScrollPx: pin ? pin.scrollPx : 0,
      horizontal: sc.some((s) => s.horizontal) || !!(pin && pin.horizontalShift > 200),
      loops: loops.filter((l) => l.section === i).length,
    };
  });

  return {
    summary: {
      reveals: reveals.length, scrubs: scrubs.length, pins: uniquePins.length, loops: loops.length, fixed: fixed.length,
      revealDuration: med(reveals.filter((r) => !r.open).map((r) => r.durationMs)),
      easing: mostCommon(reveals.map((r) => r.easing).filter(Boolean)),
      stops: totalStops,
    },
    sections,
    reveals: reveals.slice(0, 120),
    scrubs: scrubs.slice(0, 60),
    pins: uniquePins.slice(0, 12),
    loops: loops.slice(0, 20),
    fixed: fixed.slice(0, 10),
  };
}

function mostCommon(list) {
  if (!list.length) return null;
  const count = {};
  for (const v of list) count[v] = (count[v] || 0) + 1;
  return Object.entries(count).sort((a, b) => b[1] - a[1])[0][0];
}
