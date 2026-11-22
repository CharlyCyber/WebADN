import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fitEasing } from "./fitBezier.js";

/**
 * Safe screenshot wrapper — prevents Playwright's internal font-loading
 * wait from blocking indefinitely during intro capture.
 */
async function safeScreenshot(page, options, timeoutMs = 10000) {
  try {
    await Promise.race([
      page.screenshot({ ...options, timeout: timeoutMs }),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("intro screenshot safety timeout")), timeoutMs + 2000)
      )
    ]);
  } catch (err) {
    try {
      // Force-clear stuck font loading states
      await page.evaluate(() => {
        try {
          for (const font of [...document.fonts]) {
            if (font.status === 'loading') document.fonts.delete(font);
          }
        } catch {}
      });
      await page.screenshot({ ...options, timeout: timeoutMs });
    } catch {
      console.warn(`[introCapture] Screenshot skipped: ${err.message}`);
    }
  }
}

export const INTRO_INIT_SCRIPT = `
  window.__introStartTime = Date.now();
`;

export async function captureIntroTimeline(page, { screenshotsPath, preset, onProgress }) {
  const timestampsMs = preset === "surgical"
    ? [0, 100, 250, 500, 800, 1200, 1800, 2500, 3500, 5000]
    : [0, 200, 600, 1200, 2000, 3500];

  onProgress?.({ step: "intro-capture", message: "Capturando timeline de intro..." });

  const introDir = screenshotsPath ? join(screenshotsPath, "..", "intro") : null;
  if (introDir) await mkdir(introDir, { recursive: true });

  const candidates = await page.evaluate(() => {
    function genSelector(el) {
      if (el.id) return `#${CSS.escape(el.id)}`;
      const classes = [...el.classList].filter((c) => !c.startsWith("css-") && c.length > 2).slice(0, 2);
      if (classes.length) {
        const parent = el.parentElement;
        const siblings = parent ? [...parent.children].filter((c) => c.tagName === el.tagName) : [];
        const index = siblings.indexOf(el);
        const classSelector = classes.map((c) => `.${CSS.escape(c)}`).join("");
        return index >= 0 && siblings.length > 1
          ? `${el.tagName.toLowerCase()}${classSelector}:nth-child(${index + 1})`
          : `${el.tagName.toLowerCase()}${classSelector}`;
      }
      return el.tagName.toLowerCase();
    }
    const result = [];
    const seen = new Set();
    for (const el of [...document.querySelectorAll("body *")].slice(0, 500)) {
      const styles = getComputedStyle(el);
      const isCandidate =
        styles.transition !== "none" ||
        styles.animation !== "none" ||
        styles.willChange !== "auto" ||
        styles.opacity !== "1" ||
        styles.transform !== "none" ||
        el.tagName === "CANVAS" ||
        el.tagName === "SVG";
      if (!isCandidate) continue;
      const rect = el.getBoundingClientRect();
      if (rect.width < 20 && rect.height < 20) continue;
      const selector = genSelector(el);
      if (!selector || seen.has(selector)) continue;
      seen.add(selector);
      result.push({ selector, tag: el.tagName.toLowerCase(), area: rect.width * rect.height });
    }
    return result.sort((a, b) => b.area - a.area).slice(0, 20);
  });

  const preloader = await page.evaluate(() => {
    const loaders = [...document.querySelectorAll('*')].filter(el => {
      const id = (el.id || "").toLowerCase();
      const cls = [...el.classList].join(" ").toLowerCase();
      return (id + cls).match(/load|spinner|spin|curtain|transition|splash|progress/) && el.getBoundingClientRect().width > 0;
    });
    if (!loaders.length) return { detected: false };
    const first = loaders[0];
    const rect = first.getBoundingClientRect();
    return {
      detected: true,
      classes: [...first.classList].join(" ").slice(0, 200),
      tag: first.tagName.toLowerCase(),
      coverage: Math.round((rect.width * rect.height) / (window.innerWidth * window.innerHeight) * 100),
      elementCount: loaders.length
    };
  });

  const frames = [];
  let elapsed = 0;
  const candidateSelectors = candidates.map((c) => c.selector);

  for (const tMs of timestampsMs) {
    const waitMs = Math.max(0, tMs - elapsed);
    if (waitMs > 0) {
      await page.waitForTimeout(waitMs);
      elapsed = tMs;
    }

    let screenshotName = null;
    if (introDir) {
      screenshotName = `intro-${String(tMs).padStart(5, "0")}ms.png`;
      await safeScreenshot(page, { path: join(introDir, screenshotName), fullPage: false });
    }

    const snapshot = await page.evaluate((selectors) => {
      function parseMatrix(t) {
        const m = t.match(/matrix\(([^)]+)\)/);
        if (!m) return null;
        const v = m[1].split(",").map((n) => parseFloat(n.trim()));
        if (v.length === 6) return { type: "2d", scaleX: v[0], skewY: v[1], skewX: v[2], scaleY: v[3], translateX: v[4], translateY: v[5] };
        return null;
      }
      const elements = [];
      for (const selector of selectors) {
        const el = document.querySelector(selector);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.width === 0 && rect.height === 0) continue;
        const styles = getComputedStyle(el);
        elements.push({
          selector,
          tag: el.tagName.toLowerCase(),
          boundingBox: { x: Math.round(rect.left), y: Math.round(rect.top), width: Math.round(rect.width), height: Math.round(rect.height) },
          opacity: parseFloat(styles.opacity),
          transform: styles.transform !== "none" ? styles.transform : null,
          transformMatrix: styles.transform !== "none" ? parseMatrix(styles.transform) : null,
          clipPath: styles.clipPath !== "none" ? styles.clipPath : null,
          filter: styles.filter !== "none" ? styles.filter : null
        });
      }
      return elements;
    }, candidateSelectors);

    frames.push({ tMs, screenshotName, elements: snapshot });
  }

  const timeline = inferIntroRecipes(frames, candidates);

  const screenshotPaths = frames.filter((f) => f.screenshotName).map((f) => f.screenshotName);

  if (preloader.detected) {
    const preloaderEnd = frames.find((f) => {
      const hasPreloader = f.elements.some((e) => e.opacity < 0.1);
      return !hasPreloader;
    });
    if (preloaderEnd) {
      preloader.durationMs = preloaderEnd.tMs;
    } else {
      preloader.durationMs = timestampsMs[timestampsMs.length - 1];
    }
  }

  return { preloader, timeline, screenshotPaths, frames };
}

function inferIntroRecipes(frames, candidates) {
  if (!frames.length || !candidates.length) return [];

  const recipes = [];

  for (const candidate of candidates) {
    const selector = candidate.selector;
    const points = frames
      .map((f) => {
        const el = f.elements.find((e) => e.selector === selector);
        return el ? { ...el, tMs: f.tMs } : null;
      })
      .filter(Boolean);

    if (points.length < 3) continue;

    const first = points[0];
    const last = points[points.length - 1];

    const yDelta = last.boundingBox.y - first.boundingBox.y;
    const opacityDelta = last.opacity - first.opacity;
    const duration = last.tMs - first.tMs;

    if (duration < 50) continue;

    if (Math.abs(opacityDelta) > 0.3) {
      // FASE 3A: ajustar cubic-bezier por mínimos cuadrados sobre todos los
      // keyframes disponibles (no solo el punto medio). Fallback a heurística
      // si no hay suficientes muestras con rango real.
      const easing = measureEasing(points, "opacity");
      recipes.push({
        type: "intro-fade",
        target: selector,
        tag: candidate.tag,
        durationMs: duration,
        easing: easing ? easing.gsap : inferEasing(points, "opacity"),
        easingMethod: easing ? "bezier-fit" : "midpoint-heuristic",
        easingCurve: easing ? easing.cubicBezier : null,
        easingConfidence: easing ? easing.confidence : null,
        opacityRange: `${first.opacity.toFixed(2)} -> ${last.opacity.toFixed(2)}`,
        keyframes: points.map((p) => ({ tMs: p.tMs, opacity: p.opacity }))
      });
    }

    if (Math.abs(yDelta) > 20) {
      const easing = measureEasing(points, "y");
      recipes.push({
        type: "intro-slide-y",
        target: selector,
        tag: candidate.tag,
        durationMs: duration,
        easing: easing ? easing.gsap : inferEasing(points, "y"),
        easingMethod: easing ? "bezier-fit" : "midpoint-heuristic",
        easingCurve: easing ? easing.cubicBezier : null,
        easingConfidence: easing ? easing.confidence : null,
        yDelta: Math.round(yDelta),
        keyframes: points.map((p) => ({ tMs: p.tMs, y: p.boundingBox.y }))
      });
    }

    if (first.clipPath && (!last.clipPath || first.clipPath !== last.clipPath)) {
      recipes.push({
        type: "intro-clip-reveal",
        target: selector,
        tag: candidate.tag,
        durationMs: duration,
        clipPathRange: `${first.clipPath || "none"} -> ${last.clipPath || "none"}`,
        keyframes: points.map((p) => ({ tMs: p.tMs, clipPath: p.clipPath }))
      });
    }

    if (first.transformMatrix && last.transformMatrix) {
      const scaleDelta = last.transformMatrix.scaleX - first.transformMatrix.scaleX;
      if (Math.abs(scaleDelta) > 0.05) {
        // FASE 3A: scaleX es numérico y monótono → ajustamos bezier.
        const easing = measureEasing(points, "scaleX");
        recipes.push({
          type: "intro-scale",
          target: selector,
          tag: candidate.tag,
          durationMs: duration,
          easing: easing ? easing.gsap : null,
          easingMethod: easing ? "bezier-fit" : "none",
          easingCurve: easing ? easing.cubicBezier : null,
          easingConfidence: easing ? easing.confidence : null,
          scaleRange: `${first.transformMatrix.scaleX.toFixed(2)} -> ${last.transformMatrix.scaleX.toFixed(2)}`,
          keyframes: points.map((p) => ({
            tMs: p.tMs,
            scaleX: p.transformMatrix?.scaleX ?? null,
            scaleY: p.transformMatrix?.scaleY ?? null
          }))
        });
      }
    }
  }

  return [...new Map(recipes.map((r) => [r.target, r])).values()];
}

/**
 * FASE 3A — Ajusta el easing real (cubic-bezier por mínimos cuadrados) sobre
 * los keyframes de una propiedad numérica del timeline.
 *
 * @param {Array} points  - cada uno con {tMs, ...props}
 * @param {string} prop   - "opacity" | "y" | "scaleX" (cualquier campo numérico)
 * @returns {{gsap, cubicBezier, confidence, sampleCount}|null}
 *          null si no hay suficientes muestras con rango real → el llamador
 *          cae a la heurística de punto medio (inferEasing).
 */
function measureEasing(points, prop) {
  // Resolver el valor numérico por punto según la prop.
  const samples = [];
  for (const p of points) {
    let value;
    if (prop === "opacity") value = p.opacity;
    else if (prop === "y") value = p.boundingBox?.y;
    else if (prop === "scaleX") value = p.transformMatrix?.scaleX;
    else value = p[prop];
    if (typeof value !== "number" || !isFinite(value)) continue;
    samples.push({ t: p.tMs, value });
  }
  // fitEasing requiere ≥3 muestras con rango real (lo valida internamente).
  return fitEasing(samples);
}

function inferEasing(points, prop) {
  if (points.length < 3) return "linear";
  const startVal = prop === "y" ? points[0].boundingBox.y : points[0].opacity;
  const endVal = prop === "y" ? points[points.length - 1].boundingBox.y : points[points.length - 1].opacity;
  const range = Math.abs(endVal - startVal);
  if (range < 0.01) return "linear";
  const midIdx = Math.floor(points.length / 2);
  const midVal = prop === "y" ? points[midIdx].boundingBox.y : points[midIdx].opacity;
  const midRatio = Math.abs((midVal - startVal) / range);
  if (midRatio < 0.35) return "ease-out (cubic-bezier(0.22, 1, 0.36, 1))";
  if (midRatio > 0.65) return "ease-in (cubic-bezier(0.5, 0, 0.75, 0))";
  return "linear";
}
