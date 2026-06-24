// FASE 3B — Modo dual de hover probing.
//
// El probe CSS existente (rápido, sandbox) NO captura efectos hover JS-driven:
// menus que aparecen, transforms calculados por JS, spawn-on-hover, tooltips
// inyectados, etc. Añadimos un segundo pase con mouse REAL (page.hover) que:
//   1) Hace scroll al elemento y lo hoverea de verdad.
//   2) Espera settle (600ms) para transiciones/animations.
//   3) Diffea computed styles + clases del elemento Y de su contenedor cercano
//      (para capturar overlays/menus que el JS inyecta en otro nodo).
//
// Cada efecto se marca con `source: "css" | "mouse"`. El briefComposer refleja
// ambos para que los snippets GSAP del #8 reflejen tanto CSS como JS hovers.

const INTERACTIVE_SELECTORS = [
  "a",
  "button",
  "[role=button]",
  "input",
  "textarea",
  "select",
  "[data-cursor]",
  "[class*=hover]",
  "[class*=card]"
];

// Claves de computed style que inspeccionamos en ambos pases.
const HOVER_STYLE_KEYS = [
  "color", "backgroundColor", "transform", "opacity", "boxShadow",
  "borderColor", "borderWidth", "filter", "backdropFilter",
  "mixBlendMode", "cursor", "textDecoration", "textDecorationColor",
  "textDecorationLine", "outline", "outlineColor", "outlineWidth"
];

export async function probeHoverInteractions(page, preset = "standard") {
  const maxTargets = preset === "fast" ? 0 : 8;
  if (maxTargets === 0) return [];

  // --- PASE 1: probe CSS sandbox (rápido, fuente original) ---
  let cssEffects = [];
  try {
    cssEffects = await probeCssHover(page, maxTargets);
  } catch {
    cssEffects = [];
  }
  // Todos los del CSS se marcan source: "css".
  for (const e of cssEffects) e.source = "css";

  // --- PASE 2: probe mouse real (FASE 3B), solo en presets no-rápidos ---
  // Captura efectos JS-driven invisibles al sandbox CSS.
  let mouseEffects = [];
  try {
    mouseEffects = await probeMouseHover(page, maxTargets, cssEffects);
  } catch {
    mouseEffects = [];
  }

  // Unión: efectos mouse que NO están ya cubiertos por CSS (mismo selector +
  // mismo effect) se añaden como source "mouse".
  const merged = [...cssEffects];
  for (const m of mouseEffects) {
    const dup = cssEffects.some((c) => c.selector === m.selector && c.effect === m.effect);
    if (!dup) merged.push(m);
  }

  return merged;
}

// ---------------------------------------------------------------------------
// PASE 1 — Probe CSS (sandbox, exactamente como antes pero aislado).
// ---------------------------------------------------------------------------

async function probeCssHover(page, maxTargets) {
  return await page.evaluate((max) => {
      const seen = new Set();
      const results = [];

      const keys = [
        "color", "backgroundColor", "transform", "opacity", "boxShadow",
        "borderColor", "borderWidth", "filter", "backdropFilter",
        "mixBlendMode", "cursor", "textDecoration", "textDecorationColor",
        "textDecorationLine", "outline", "outlineColor", "outlineWidth"
      ];

      const prioritySelectors = [
        "[class*=hover]", "[class*=card]", "[data-cursor]",
        "a", "button", "[role=button]"
      ];

      function readStyles(el) {
        const s = getComputedStyle(el);
        const o = {};
        for (const k of keys) o[k] = s[k];
        return o;
      }

      function classify(changes, before, after) {
        const e = [];
        if (changes.color || changes.backgroundColor) {
          e.push(isColorInversion(before.backgroundColor, after.backgroundColor) ? "color invert" : "color shift");
        }
        if (changes.transform) {
          const bm = parseTransformStr(before.transform);
          const am = parseTransformStr(after.transform);
          if (bm && am) {
            if (Math.abs(am.scale - bm.scale) > 0.03) e.push("scale up");
            if (Math.abs(am.translateY - bm.translateY) > 2) e.push("card lift");
          } else {
            e.push("transform effect");
          }
        }
        if (changes.boxShadow && after.boxShadow !== "none") e.push("card lift");
        if (changes.textDecorationLine && after.textDecorationLine.includes("underline")) e.push("underline reveal");
        if (changes.opacity) e.push("opacity shift");
        if (changes.borderColor || (changes.borderWidth && parseInt(after.borderWidth) > parseInt(before.borderWidth))) e.push("border glow");
        if (changes.filter && after.filter !== "none") e.push("filter effect");
        if (after.cursor && after.cursor.startsWith("url")) e.push("cursor label");
        return e.length > 0 ? e.join(", ") : "no visible effect";
      }

      function isColorInversion(before, after) {
        if (!before || !after) return false;
        const bLum = lum(before), aLum = lum(after);
        return (bLum < 0.3 && aLum > 0.7) || (bLum > 0.7 && aLum < 0.3);
      }

      function lum(color) {
        const m = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
        if (!m) return 0.5;
        const r = parseInt(m[1]) / 255, g = parseInt(m[2]) / 255, b = parseInt(m[3]) / 255;
        return 0.2126 * r + 0.7152 * g + 0.0722 * b;
      }

      function parseTransformStr(t) {
        if (!t || t === "none") return null;
        const sm = t.match(/scale\(([^)]+)\)/);
        const tm = t.match(/translateY\(([^)]+)\)/);
        return {
          scale: sm ? parseFloat(sm[1]) : 1,
          translateY: tm ? parseFloat(tm[1]) : 0
        };
      }

      function genSelector(el) {
        if (el.id) return "#" + CSS.escape(el.id);
        const classes = [...el.classList].filter(c => !c.startsWith("css-") && c.length > 2).slice(0, 2);
        if (classes.length) return el.tagName.toLowerCase() + classes.map(c => "." + CSS.escape(c)).join("");
        return el.tagName.toLowerCase();
      }

      // Phase 1: find interactive elements
      const allTargets = [];
      for (const sel of prioritySelectors) {
        for (const el of document.querySelectorAll(sel)) {
          const r = el.getBoundingClientRect();
          if (r.bottom < 0 || r.top > window.scrollY + window.innerHeight) continue;
          if (r.width < 10 || r.height < 10) continue;
          const s = genSelector(el);
          if (!s || seen.has(s)) continue;
          seen.add(s);
          allTargets.push({ element: el, selector: s, tag: el.tagName.toLowerCase(), text: (el.textContent || "").replace(/\s+/g, " ").trim().slice(0, 80) });
          if (allTargets.length >= max) break;
        }
        if (allTargets.length >= max) break;
      }

      // Phase 2: extract all :hover rules from stylesheets
      const hoverRules = [];
      for (const sheet of document.styleSheets) {
        try {
          for (const rule of sheet.cssRules) {
            const st = rule.selectorText;
            if (st && st.includes(":hover") && rule.style && rule.style.length > 0) {
              const props = {};
              for (let i = 0; i < rule.style.length; i++) {
                const name = rule.style[i];
                props[name] = rule.style.getPropertyValue(name).trim();
              }
              hoverRules.push({ selector: st, props });
            }
          }
        } catch (err) { console.debug("[hover] stylesheet rule parse:", err.message); }
      }

      // Phase 3: for each target, probe hover effects with sandbox fallback
      let useSandbox = true;
      let sandbox = null;

      try {
        sandbox = document.createElement("div");
        sandbox.style.cssText = "position:fixed;top:-9999px;left:-9999px;width:1000px;height:1000px;visibility:hidden;opacity:0;pointer-events:none;";
        document.body.appendChild(sandbox);
      } catch {
        useSandbox = false;
        console.debug("[hover] sandbox creation blocked (CSP?), falling back to inline probe");
      }

      for (const t of allTargets) {
        const el = t.element;
        let probeEl;

        if (useSandbox) {
          try {
            probeEl = el.cloneNode(true);
            sandbox.appendChild(probeEl);
          } catch {
            console.debug("[hover] clone fail, skipping:", t.selector);
            continue;
          }
        } else {
          probeEl = el;
        }

        const before = readStyles(probeEl);
        let anyChange = false;

        for (const rule of hoverRules) {
          try {
            const baseSel = rule.selector.replace(/:hover[^,]*/g, "").trim();
            if (baseSel && el.matches(baseSel)) {
              for (const [prop, val] of Object.entries(rule.props)) {
                probeEl.style.setProperty(prop, val, "important");
              }
              anyChange = true;
            }
          } catch {
            // Ignorar selectores inválidos
          }
        }

        if (anyChange) {
          const after = readStyles(probeEl);
          const changes = {};
          for (const k of keys) {
            if (before[k] !== after[k]) {
              changes[k] = { before: before[k], after: after[k] };
            }
          }

          if (Object.keys(changes).length > 0) {
            results.push({
              selector: t.selector,
              tag: t.tag,
              text: t.text,
              effect: classify(changes, before, after),
              styleChanges: changes
            });
          }
        }

        if (useSandbox && probeEl && probeEl.remove) {
          try { probeEl.remove(); } catch {}
        }
      }

      if (sandbox && sandbox.remove) {
        try { sandbox.remove(); } catch {}
      }

      return results;
    }, maxTargets);
}

// ---------------------------------------------------------------------------
// PASE 2 — Probe con mouse real (FASE 3B).
// ---------------------------------------------------------------------------
//
// Estrategia:
//   - Selecciona los mismos targets prioritarios que el pase CSS (links,
//     buttons, [class*=card], [class*=hover]...) hasta maxTargets.
//   - Para cada uno: hace scrollIntoView + page.hover(selector) real.
//   - Captura computed styles + classList ANTES y DESPUÉS del hover.
//   - También captura overlays/menus que el JS pueda inyectar en el body
//     (diff de nodos hijos directos de body, limitado).
//   - Marca `source: "mouse"` para que el brief distinga CSS de JS hovers.
//
// El scraper puede haber matado requestAnimationFrame para el probe CSS; aquí
// lo restauramos temporalmente dentro del evaluate para que las transiciones y
// cualquier handler JS que use RAF se disparen.

const MOUSE_SETTLE_MS = 600;
const MOUSE_HOVER_TIMEOUT_MS = 2500;

async function probeMouseHover(page, maxTargets, cssEffects) {
  // Selección de targets (misma prioridad que el pase CSS, fuera del evaluate
  // para poder pasar selectores estables al page.hover).
  const targets = await page.evaluate((max) => {
    const prioritySelectors = [
      "[class*=hover]", "[class*=card]", "[data-cursor]",
      "a", "button", "[role=button]"
    ];
    function genSelector(el) {
      if (el.id) return "#" + CSS.escape(el.id);
      const classes = [...el.classList].filter(c => !c.startsWith("css-") && c.length > 2).slice(0, 2);
      if (classes.length) return el.tagName.toLowerCase() + classes.map(c => "." + CSS.escape(c)).join("");
      return el.tagName.toLowerCase();
    }
    const seen = new Set();
    const out = [];
    for (const sel of prioritySelectors) {
      for (const el of document.querySelectorAll(sel)) {
        const r = el.getBoundingClientRect();
        if (r.bottom < 0 || r.top > window.scrollY + window.innerHeight) continue;
        if (r.width < 10 || r.height < 10) continue;
        const s = genSelector(el);
        if (!s || seen.has(s)) continue;
        seen.add(s);
        out.push({ selector: s, tag: el.tagName.toLowerCase(), text: (el.textContent || "").replace(/\s+/g, " ").trim().slice(0, 80) });
        if (out.length >= max) break;
      }
      if (out.length >= max) break;
    }
    return out;
  }, maxTargets);

  if (!targets.length) return [];

  // Restaurar RAF dentro de la página si el scraper lo neutralizó (el probe
  // mouse necesita transiciones/animations vivas para capturar el efecto real).
  try {
    await page.evaluate(() => {
      if (typeof window.__origRAF === "function") {
        window.requestAnimationFrame = window.__origRAF;
      } else if (typeof window.requestAnimationFrame !== "function") {
        window.requestAnimationFrame = (cb) => setTimeout(() => cb(Date.now()), 16);
      }
    });
  } catch {}

  const results = [];

  for (const target of targets) {
    // Si el pase CSS ya capturó este selector con efecto visible, no repetimos
    // (ahorro de tiempo; el mouse probe es para lo que el CSS no vio).
    const cssCovered = cssEffects.some((c) => c.selector === target.selector);
    if (cssCovered) continue;

    let hoverResult = null;
    try {
      hoverResult = await hoverAndDiff(page, target);
    } catch {
      continue;
    }
    if (hoverResult && hoverResult.changes && Object.keys(hoverResult.changes).length > 0) {
      results.push({
        selector: target.selector,
        tag: target.tag,
        text: target.text,
        effect: classifyMouseEffect(hoverResult.changes, hoverResult.before, hoverResult.after, hoverResult.classChanges),
        styleChanges: hoverResult.changes,
        classChanges: hoverResult.classChanges,
        source: "mouse"
      });
    }
  }

  return results;
}

/**
 * Hace hover real sobre `selector`, espera settle, y devuelevuelve el diff de
 * computed styles + classList del elemento. Captura además overlays/menus que
 * el JS pueda haber añadido como hijos directos de body (spawn-on-hover).
 */
async function hoverAndDiff(page, target) {
  // 1) Snapshot ANTES (estados base + clases + conteo de hijos de body).
  const before = await page.evaluate((sel) => {
    const el = document.querySelector(sel);
    if (!el) return null;
    el.scrollIntoView({ block: "center", inline: "center" });
    const s = getComputedStyle(el);
    const styles = {};
    for (const k of HOVER_STYLE_KEYS) styles[k] = s[k];
    return {
      styles,
      classes: [...el.classList],
      bodyChildCount: document.body ? document.body.children.length : 0
    };
  }, target.selector);

  if (!before) return null;

  // 2) Hover real con timeout duro (algunos sitios abren modales que bloquean).
  await Promise.race([
    page.hover(target.selector, { timeout: MOUSE_HOVER_TIMEOUT_MS }).catch(() => {}),
    new Promise((r) => setTimeout(r, MOUSE_HOVER_TIMEOUT_MS))
  ]);
  // 3) Settle: dejar que transiciones/animations/JS terminen.
  await page.waitForTimeout(MOUSE_SETTLE_MS);

  // 4) Snapshot DESPUÉS.
  const after = await page.evaluate((sel, prevBodyChildCount) => {
    const el = document.querySelector(sel);
    if (!el) return null;
    const s = getComputedStyle(el);
    const styles = {};
    for (const k of HOVER_STYLE_KEYS) styles[k] = s[k];
    // Detectar overlays/menus nuevos: hijos de body que aparecieron tras hover.
    const newBodyChildren = [];
    if (document.body && document.body.children.length > prevBodyChildCount) {
      const added = [...document.body.children].slice(prevBodyChildCount);
      for (const node of added.slice(0, 3)) {
        if (node.nodeType !== 1) continue;
        const r = node.getBoundingClientRect();
        if (r.width < 10 && r.height < 10) continue;
        newBodyChildren.push({
          tag: node.tagName.toLowerCase(),
          classes: [...node.classList].slice(0, 4).join(" "),
          area: Math.round(r.width * r.height)
        });
      }
    }
    return {
      styles,
      classes: [...el.classList],
      newBodyChildren
    };
  }, target.selector, before.bodyChildCount);

  if (!after) return null;

  // 5) Reset del hover (mouse out) para no dejar el sitio en estado hovereado.
  try {
    await page.mouse.move(0, 0);
    await page.waitForTimeout(150);
  } catch {}

  // 6) Diff de estilos + clases.
  const changes = {};
  for (const k of HOVER_STYLE_KEYS) {
    if (before.styles[k] !== after.styles[k]) {
      changes[k] = { before: before.styles[k], after: after.styles[k] };
    }
  }
  const beforeClasses = new Set(before.classes);
  const afterClasses = new Set(after.classes);
  const added = [...afterClasses].filter((c) => !beforeClasses.has(c));
  const removed = [...beforeClasses].filter((c) => !afterClasses.has(c));
  const classChanges = (added.length || removed.length || after.newBodyChildren.length)
    ? { added, removed, newBodyChildren: after.newBodyChildren }
    : null;

  return { before: before.styles, after: after.styles, changes, classChanges };
}

/**
 * Clasifica el efecto hover detectado por mouse. Reutiliza la lógica del
 * classificador CSS pero añade categorías JS-driven (overlay spawn, class
 * toggle visible, menu reveal).
 */
function classifyMouseEffect(changes, before, after, classChanges) {
  const effects = [];
  if (changes.color || changes.backgroundColor) {
    effects.push(isColorInversion(before.backgroundColor, after.backgroundColor) ? "color invert" : "color shift");
  }
  if (changes.transform) effects.push("transform effect");
  if (changes.boxShadow && after.boxShadow !== "none") effects.push("card lift");
  if (changes.opacity) effects.push("opacity shift");
  if (changes.filter && after.filter !== "none") effects.push("filter effect");
  if (changes.backdropFilter && after.backdropFilter !== "none") effects.push("backdrop blur");

  // Efectos JS-driven detectables solo con mouse real.
  if (classChanges) {
    if (classChanges.added?.length) effects.push(`class toggle (+${classChanges.added.slice(0, 2).join(",")})`);
    if (classChanges.newBodyChildren?.length) effects.push("overlay/menu spawn");
  }

  return effects.length > 0 ? effects.join(", ") : "no visible effect";
}

function isColorInversion(before, after) {
  if (!before || !after) return false;
  const bLum = lum(before), aLum = lum(after);
  return (bLum < 0.3 && aLum > 0.7) || (bLum > 0.7 && aLum < 0.3);
}

function lum(color) {
  const m = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (!m) return 0.5;
  const r = parseInt(m[1]) / 255, g = parseInt(m[2]) / 255, b = parseInt(m[3]) / 255;
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
