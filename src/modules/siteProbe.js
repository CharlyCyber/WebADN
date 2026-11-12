// Sonda de medición: produce la "huella" (fingerprint) de un sitio renderizado.
// Se usa igual para la referencia (→ spec.json) y para el build (→ comparación).

import { mkdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import { probeLib } from "./probeLib.js";
import { analyzeMotion } from "./motionAnalysis.js";
import { decodePng } from "./colorQuantizer.js";
import { handleOverlays } from "./overlayHandler.js";

export const FINGERPRINT_VERSION = 1;

export const PROBE_VIEWPORTS = {
  desktop: { width: 1440, height: 900, isMobile: false, hasTouch: false,
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0 Safari/537.36" },
  mobile: { width: 390, height: 844, isMobile: true, hasTouch: true,
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1" },
};

const DEPTHS = {
  fast: { dwell: 280, maxDwell: 900, maxStops: 28, hover: 6, shots: 10, intro: 2500 },
  standard: { dwell: 420, maxDwell: 1800, maxStops: 48, hover: 12, shots: 16, intro: 4500 },
  surgical: { dwell: 600, maxDwell: 2800, maxStops: 70, hover: 18, shots: 24, intro: 7000 },
};

export const GRID_COLS = 16;
export const GRID_ROWS = 9;

/** Reduce un PNG a una rejilla de color medio + densidad de bordes. */
export async function imageGrid(buffer, cols = GRID_COLS, rows = GRID_ROWS) {
  const img = await decodePng(buffer);
  if (!img) return null;
  const { width, height, channels, pixels } = img;
  const cells = [];
  let edgeSum = 0, edgeN = 0;
  const stepX = Math.max(1, Math.floor(width / (cols * 6)));
  const stepY = Math.max(1, Math.floor(height / (rows * 6)));
  for (let gy = 0; gy < rows; gy++) {
    for (let gx = 0; gx < cols; gx++) {
      const x0 = Math.floor((gx * width) / cols), x1 = Math.floor(((gx + 1) * width) / cols);
      const y0 = Math.floor((gy * height) / rows), y1 = Math.floor(((gy + 1) * height) / rows);
      let r = 0, g = 0, b = 0, n = 0, prev = -1;
      for (let y = y0; y < y1; y += stepY) {
        prev = -1;
        for (let x = x0; x < x1; x += stepX) {
          const i = (y * width + x) * channels;
          r += pixels[i]; g += pixels[i + 1]; b += pixels[i + 2]; n++;
          const lum = 0.2126 * pixels[i] + 0.7152 * pixels[i + 1] + 0.0722 * pixels[i + 2];
          if (prev >= 0) { edgeSum += Math.abs(lum - prev); edgeN++; }
          prev = lum;
        }
      }
      n = n || 1;
      cells.push([Math.round(r / n), Math.round(g / n), Math.round(b / n)]);
    }
  }
  return { cols, rows, cells, detail: Math.round((edgeSum / Math.max(edgeN, 1)) * 10) / 10 };
}

function diffSnap(a, b, prefix = "") {
  if (!a || !b) return [];
  const out = [];
  for (const k of Object.keys(a)) if (a[k] !== b[k] && b[k] !== undefined) out.push({ prop: prefix + k, from: a[k], to: b[k] });
  return out;
}

async function probeHover(page, depth, vp) {
  const targets = await page.evaluate((n) => window.__WADN.hoverTargets(n), depth.hover);
  const results = [];
  let cursor = null;
  for (const t of targets) {
    try {
      await page.evaluate((y) => window.scrollTo(0, y), Math.max(0, t.docTop - vp.height / 2));
      await page.mouse.move(2, 2);
      await page.waitForTimeout(220);
      const before = await page.evaluate((id) => window.__WADN.hoverSnap(id), t.id);
      if (!before || !before.inView) continue;
      await page.mouse.move(before.x, before.y, { steps: 4 });
      await page.waitForTimeout(Math.min(900, Math.max(380, before.duration + 120)));
      const after = await page.evaluate((id) => window.__WADN.hoverSnap(id), t.id);
      if (!cursor) cursor = await page.evaluate(([x, y]) => window.__WADN.cursorFollower(x, y), [before.x, before.y]);
      if (!after) continue;
      const changes = [
        ...diffSnap(before.self, after.self),
        ...diffSnap(before.before, after.before, "::before "),
        ...diffSnap(before.after, after.after, "::after "),
        ...diffSnap(before.child, after.child, `${after.childTag || "child"} `),
      ];
      results.push({ kind: t.kind, desc: t.desc, changes, duration: before.duration, easing: before.easing });
    } catch { /* objetivo inestable: se ignora */ }
  }
  await page.mouse.move(2, 2).catch(() => {});
  const byKind = {};
  for (const r of results) {
    const k = (byKind[r.kind] = byKind[r.kind] || { targets: 0, withEffect: 0, props: {}, durations: [] });
    k.targets++;
    if (r.changes.length) { k.withEffect++; if (r.duration) k.durations.push(r.duration); }
    for (const c of r.changes) k.props[c.prop] = (k.props[c.prop] || 0) + 1;
  }
  for (const k of Object.values(byKind)) {
    k.durations.sort((a, b) => a - b);
    k.duration = k.durations.length ? k.durations[Math.floor(k.durations.length / 2)] : null;
    delete k.durations;
  }
  return { targets: results, byKind, customCursor: cursor };
}

async function probeViewport(browser, url, name, opts) {
  const vp = PROBE_VIEWPORTS[name];
  const depth = DEPTHS[opts.depth] || DEPTHS.standard;
  const progress = (message) => opts.onProgress?.({ step: `probe-${name}`, message });
  const context = await browser.newContext({
    viewport: { width: vp.width, height: vp.height }, userAgent: vp.userAgent, isMobile: vp.isMobile, hasTouch: vp.hasTouch,
    deviceScaleFactor: 1, reducedMotion: "no-preference", ignoreHTTPSErrors: true,
  });
  const page = await context.newPage();
  try {
    await page.addInitScript(probeLib);
    await page.addInitScript((ms) => {
      const go = () => window.__WADN && window.__WADN.startIntro(ms);
      if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", go, { once: true }); else go();
    }, depth.intro);
    progress(`Cargando (${name} ${vp.width}×${vp.height})...`);
    try {
      await page.goto(url, { waitUntil: "load", timeout: opts.timeoutMs });
    } catch (err) {
      // Sitios con streams eternos nunca disparan "load": seguimos si hay DOM.
      const ready = await page.evaluate(() => document.readyState).catch(() => "loading");
      if (ready === "loading") throw new Error(`No se pudo cargar ${url}: ${err.message.split("\n")[0]}`);
    }
    await page.evaluate(() => Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 4000))])).catch(() => {});
    await page.waitForTimeout(opts.settleMs ?? 1800);
    await handleOverlays(page).catch(() => {});
    await page.evaluate(probeLib);

    const metrics0 = await page.evaluate(() => window.__WADN.pageMetrics());
    // Pre-scroll rápido: dispara lazy-load para que la altura del documento sea la real.
    const pre = Math.min(metrics0.docHeight, vp.height * 40);
    for (let y = 0; y < pre; y += vp.height * 0.9) { await page.evaluate((v) => window.scrollTo(0, v), y); await page.waitForTimeout(60); }
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(500);
    // El pre-scroll ya disparó las entradas "una sola vez": recargamos para medirlas limpias.
    await page.reload({ waitUntil: "load", timeout: opts.timeoutMs }).catch(() => {});
    await page.evaluate(() => Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 3000))])).catch(() => {});
    progress("Midiendo animación de carga...");
    await page.waitForTimeout(depth.intro + 300);
    await handleOverlays(page).catch(() => {});
    await page.evaluate(probeLib);

    const metrics = await page.evaluate(() => window.__WADN.pageMetrics());
    await page.evaluate(() => { window.__WADN.findSections(); window.__WADN.pickCandidates(450); });

    // ---- pasada de movimiento ----
    const maxY = Math.max(0, metrics.docHeight - vp.height);
    const step = Math.max(vp.height / 3, maxY / depth.maxStops);
    const stops = [];
    for (let y = 0; y <= maxY + 1; y += step) stops.push(Math.min(maxY, Math.round(y)));
    if (stops[stops.length - 1] !== maxY) stops.push(maxY);
    progress(`Midiendo movimiento: ${stops.length} paradas de scroll...`);
    for (const y of stops) await page.evaluate(([v, d, m]) => window.__WADN.motionStop(v, d, m), [y, depth.dwell, depth.maxDwell]);
    const rawMotion = await page.evaluate(() => window.__WADN.motionResult());

    // ---- estático (con todo ya revelado) ----
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(400);
    progress("Midiendo secciones, tipografía, color y efectos...");
    await page.evaluate(() => window.__WADN.findSections());
    const tops = (await page.evaluate(() => window.__WADN.sectionTops())).slice(0, 40);
    const sections = [];
    if (opts.shotsDir) await mkdir(opts.shotsDir, { recursive: true });
    // Cada sección se describe y captura CON EL SCROLL EN ELLA: así los
    // transforms ligados al scroll están en su estado real, no en el de scroll 0.
    for (const t of tops) {
      await page.evaluate((y) => window.scrollTo(0, y), Math.min(t.top, maxY));
      await page.waitForTimeout(380);
      const s = await page.evaluate((i) => window.__WADN.describeSection(i), t.index);
      if (!s) continue;
      s.top = t.top; s.height = t.height;
      if (sections.length < depth.shots) {
        try {
          const scrolled = await page.evaluate(() => window.scrollY);
          const offset = Math.max(0, Math.min(vp.height - 40, t.top - scrolled));
          const h = Math.max(40, Math.min(vp.height - offset, t.height));
          const file = `${opts.prefix || ""}${name}-s${String(t.index).padStart(2, "0")}.png`;
          const path = opts.shotsDir ? join(opts.shotsDir, file) : undefined;
          const buf = await page.screenshot({ clip: { x: 0, y: offset, width: vp.width, height: h }, path, timeout: 15000, animations: "allow" });
          s.shot = path ? file : null;
          s.grid = await imageGrid(buf);
        } catch { s.shot = null; s.grid = null; }
      }
      sections.push(s);
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(300);
    const style = await page.evaluate(() => window.__WADN.describeStyle());
    const motion = analyzeMotion(rawMotion, { vh: vp.height, totalStops: stops.length, sectionCount: sections.length });

    // ---- hover (solo escritorio) ----
    let hover = null;
    if (name === "desktop") {
      progress("Probando hovers...");
      hover = await probeHover(page, depth, vp).catch(() => null);
    }

    return {
      viewport: { width: vp.width, height: vp.height },
      page: { ...metrics, sectionCount: sections.length, heightVh: Math.round((metrics.docHeight / vp.height) * 100) / 100 },
      sections: sections.map((s) => ({ ...s, motion: motion.sections[s.index] || null })),
      type: style.type, color: style.color, effects: style.effects, libs: style.libs,
      motion: {
        summary: motion.summary, tokens: style.motionTokens, cssAnimations: style.cssAnimations,
        running: summarizeRunning(style.runningAnimations),
        reveals: motion.reveals, scrubs: motion.scrubs, pins: motion.pins, loops: motion.loops, fixed: motion.fixed,
      },
      hover,
    };
  } finally {
    await context.close().catch(() => {});
  }
}

function summarizeRunning(anims = []) {
  const groups = {};
  for (const a of anims) {
    const key = `${a.type}|${a.name}|${a.duration}|${a.iterations}`;
    if (!groups[key]) groups[key] = { type: a.type, name: a.name, duration: a.duration, delay: a.delay, easing: a.easing, iterations: a.iterations, direction: a.direction, props: a.props, example: a.target, count: 0 };
    groups[key].count++;
  }
  return Object.values(groups).sort((a, b) => b.count - a.count).slice(0, 25);
}

/**
 * Mide una URL y devuelve su huella.
 * @param {{url:string, browser:import("playwright").Browser, shotsDir?:string, prefix?:string, viewports?:string[], depth?:string, timeoutMs?:number, settleMs?:number, onProgress?:Function}} opts
 */
export async function captureFingerprint(opts) {
  const names = (opts.viewports || ["desktop", "mobile"]).filter((n) => PROBE_VIEWPORTS[n]);
  const fingerprint = { version: FINGERPRINT_VERSION, url: opts.url, capturedAt: new Date().toISOString(), depth: opts.depth || "standard", viewports: {}, errors: [] };
  for (const name of names) {
    try {
      fingerprint.viewports[name] = await probeViewport(opts.browser, opts.url, name, { timeoutMs: 45000, ...opts });
    } catch (err) {
      fingerprint.errors.push({ viewport: name, message: err.message });
    }
  }
  if (!Object.keys(fingerprint.viewports).length) {
    throw new Error(fingerprint.errors[0]?.message || "No se pudo medir el sitio.");
  }
  return fingerprint;
}

export async function loadFingerprint(path) {
  const data = JSON.parse(await readFile(path, "utf8"));
  const fp = data.fingerprint || data;
  if (!fp.viewports) throw new Error(`${path} no contiene una huella WebADN válida.`);
  return fp;
}
