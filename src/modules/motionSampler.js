import { fitEasing } from "./fitBezier.js";

export async function sampleMotionTimeline(page, preset = "standard") {
  const sampleCount = getSampleCount(preset);
  if (sampleCount === 0) return [];

  const candidates = await findAnimatedCandidates(page);
  if (!candidates.length) return [];

  const bodyHeight = await page.evaluate(() => (document.body || document.documentElement).scrollHeight);
  const viewportHeight = await page.evaluate(() => window.innerHeight);
  const maxScroll = Math.max(0, bodyHeight - viewportHeight);

  const scrollPositions = [];
  for (let i = 0; i <= sampleCount; i++) {
    scrollPositions.push(Math.round((i / sampleCount) * maxScroll));
  }

  const samples = [];

  for (const scrollY of scrollPositions) {
    await page.evaluate((y) => window.scrollTo(0, y), scrollY);
    await page.waitForTimeout(80);

    const snapshot = await page.evaluate((candidateSelectors) => {
      function parseMatrix(t) {
        const m = t.match(/matrix\(([^)]+)\)/);
        if (!m) return null;
        const v = m[1].split(",").map((n) => parseFloat(n.trim()));
        if (v.length === 6) return { type: "2d", scaleX: v[0], skewY: v[1], skewX: v[2], scaleY: v[3], translateX: v[4], translateY: v[5] };
        if (v.length === 16) return { type: "3d", values: v };
        return null;
      }

      const scrollPercent = Math.round((window.scrollY / ((document.body || document.documentElement).scrollHeight - window.innerHeight || 1)) * 100);
      const elements = [];

      for (const selector of candidateSelectors) {
        const el = document.querySelector(selector);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        if (rect.width === 0 && rect.height === 0) continue;

        const styles = getComputedStyle(el);
        const transform = styles.transform;
        const matrix = transform !== "none" ? parseMatrix(transform) : null;

        const viewportTop = window.scrollY;
        const viewportBottom = viewportTop + window.innerHeight;
        const elTop = rect.top + window.scrollY;
        const elBottom = rect.bottom + window.scrollY;

        const visibleTop = Math.max(elTop, viewportTop);
        const visibleBottom = Math.min(elBottom, viewportBottom);
        const visibleRatio = Math.max(0, (visibleBottom - visibleTop) / (elBottom - elTop || 1));

        elements.push({
          selector,
          tag: el.tagName.toLowerCase(),
          boundingBox: {
            x: Math.round(rect.left),
            y: Math.round(rect.top),
            width: Math.round(rect.width),
            height: Math.round(rect.height)
          },
          transform: transform !== "none" ? transform : null,
          transformMatrix: matrix,
          opacity: parseFloat(styles.opacity),
          filter: styles.filter !== "none" ? styles.filter : null,
          clipPath: styles.clipPath !== "none" ? styles.clipPath : null,
          zIndex: styles.zIndex !== "auto" ? parseInt(styles.zIndex) : null,
          visibleRatio: Math.round(visibleRatio * 100) / 100,
          position: styles.position
        });
      }

      return { scrollPercent, scrollY: window.scrollY, elements };
    }, candidates.map((c) => c.selector));

    samples.push(snapshot);
  }

  return inferMotionRecipes(samples, candidates);
}

async function findAnimatedCandidates(page) {
  return await page.evaluate(() => {
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

    const candidates = [];
    const seen = new Set();

    const allElements = [...document.querySelectorAll("body *")].slice(0, 1000);

    for (const el of allElements) {
      const styles = getComputedStyle(el);
      const isCandidate =
        styles.transform !== "none" ||
        styles.opacity !== "1" ||
        styles.transition !== "none" ||
        styles.animation !== "none" ||
        styles.position === "sticky" ||
        styles.position === "fixed" ||
        el.tagName === "CANVAS" ||
        el.tagName === "SVG" ||
        styles.willChange !== "auto";

      if (!isCandidate) continue;

      const rect = el.getBoundingClientRect();
      if (rect.width < 20 && rect.height < 20) continue;

      const selector = genSelector(el);
      if (!selector || seen.has(selector)) continue;
      seen.add(selector);

      candidates.push({ selector, tag: el.tagName.toLowerCase(), area: rect.width * rect.height });
    }

    return candidates.sort((a, b) => b.area - a.area).slice(0, 30);
  });
}

export function inferMotionRecipes(samples, candidates) {
  if (!samples.length || !candidates.length) return [];

  const recipes = [];

  for (const candidate of candidates) {
    const selector = candidate.selector;
    const points = samples
      .map((s) => {
        const el = s.elements.find((e) => e.selector === selector);
        return el ? { ...el, scrollPercent: s.scrollPercent, scrollY: s.scrollY } : null;
      })
      .filter(Boolean);

    if (points.length < 3) continue;

    const first = points[0];
    const last = points[points.length - 1];

    const yDelta = last.boundingBox.y - first.boundingBox.y;
    const xDelta = last.boundingBox.x - first.boundingBox.x;
    const opacityDelta = last.opacity - first.opacity;
    const scrollRange = last.scrollPercent - first.scrollPercent;
    const keyframes = buildScrollKeyframes(points);

    const isSticky = first.position === "sticky" || last.position === "sticky";
    if (Math.abs(yDelta) > 30 || isSticky) {
      const scrollDelta = Math.abs(last.scrollY - first.scrollY) || 1;
      const parallaxRatio = isSticky ? 0 : Math.abs(yDelta) / scrollDelta;

      let type = "scroll-translate";
      if (isSticky) type = "sticky-pin";
      else if (Math.abs(parallaxRatio) > 0.1 && Math.abs(parallaxRatio) < 0.9) type = "scroll-parallax";

      recipes.push({
        type,
        target: selector,
        tag: candidate.tag,
        range: `${first.scrollPercent}-${last.scrollPercent}%`,
        yDelta: isSticky ? 0 : Math.round(yDelta),
        xDelta: Math.round(xDelta),
        parallaxRatio: isSticky ? 0 : Math.round(parallaxRatio * 100) / 100,
        opacity: first.opacity !== last.opacity ? `${first.opacity} -> ${last.opacity}` : null,
        // FASE 3A: easing medido sobre el desplazamiento Y vs scroll.
        easing: !isSticky ? measureScrollEasing(points, "y") : null,
        keyframes,
        implementation: type === "sticky-pin"
          ? "CSS position: sticky with scroll-linked animation"
          : type === "scroll-parallax"
            ? "GSAP ScrollTrigger scrub: true or CSS scroll-timeline"
            : "Scroll-linked transform with requestAnimationFrame"
      });
    }

    if (first.opacity !== last.opacity) {
      const fadeStart = points.find((p) => p.opacity < 0.95);
      const fadeEnd = points.findLast((p) => p.opacity < 0.95);

      if (fadeStart && fadeEnd) {
        recipes.push({
          type: "scroll-fade",
          target: selector,
          tag: candidate.tag,
          range: `${fadeStart.scrollPercent}-${fadeEnd.scrollPercent}%`,
          opacityRange: `${fadeStart.opacity} -> ${fadeEnd.opacity}`,
          // FASE 3A: easing medido sobre opacity vs scroll (sentido inverso si
          // el fade va de visible a oculto, fitEasing lo normaliza solo).
          easing: measureScrollEasing(points, "opacity"),
          keyframes,
          implementation: "GSAP ScrollTrigger opacity tween or CSS scroll-timeline"
        });
      }
    }

    if (first.transformMatrix && last.transformMatrix) {
      const scaleDelta = last.transformMatrix.scaleX - first.transformMatrix.scaleX;
      if (Math.abs(scaleDelta) > 0.05) {
        recipes.push({
          type: "scroll-scale",
          target: selector,
          tag: candidate.tag,
          range: `${first.scrollPercent}-${last.scrollPercent}%`,
          scaleRange: `${first.transformMatrix.scaleX} -> ${last.transformMatrix.scaleX}`,
          // FASE 3A: easing medido sobre scaleX vs scroll.
          easing: measureScrollEasing(points, "scaleX"),
          keyframes,
          implementation: "GSAP ScrollTrigger scale tween"
        });
      }
    }
  }

  return [...new Map(recipes.map((r) => [r.target, r])).values()];
}

/**
 * FASE 3A — Ajusta cubic-bezier por mínimos cuadrados sobre los samples de una
 * receta scroll-linked. El "tiempo" aquí es scrollY (no tMs): normalizamos a
 * [0,1] dentro de fitEasing.
 *
 * @param {Array} points - cada uno con {scrollY, boundingBox.y, opacity, transformMatrix.scaleX}
 * @param {"y"|"opacity"|"scaleX"} prop
 * @returns {{gsap, cubicBezier, confidence, sampleCount}|null}
 */
function measureScrollEasing(points, prop) {
  const samples = [];
  for (const p of points) {
    let value;
    if (prop === "y") value = p.boundingBox?.y;
    else if (prop === "opacity") value = p.opacity;
    else if (prop === "scaleX") value = p.transformMatrix?.scaleX;
    else value = p[prop];
    if (typeof value !== "number" || !isFinite(value)) continue;
    samples.push({ t: p.scrollY, value });
  }
  return fitEasing(samples);
}

function buildScrollKeyframes(points) {
  if (!points.length) return [];

  const indexes = [...new Set([
    0,
    Math.floor((points.length - 1) * 0.25),
    Math.floor((points.length - 1) * 0.5),
    Math.floor((points.length - 1) * 0.75),
    points.length - 1
  ])];

  return indexes.map((index) => {
    const point = points[index];
    const matrix = point.transformMatrix || {};
    return {
      scrollPercent: point.scrollPercent,
      x: point.boundingBox.x,
      y: point.boundingBox.y,
      width: point.boundingBox.width,
      height: point.boundingBox.height,
      opacity: point.opacity,
      translateX: matrix.translateX ?? null,
      translateY: matrix.translateY ?? null,
      scaleX: matrix.scaleX ?? null,
      scaleY: matrix.scaleY ?? null,
      visibleRatio: point.visibleRatio,
      transform: point.transform
    };
  });
}

function getSampleCount(preset) {
  switch (preset) {
    case "fast":
      return 0;
    case "surgical":
      return 50;
    default:
      return 20;
  }
}
