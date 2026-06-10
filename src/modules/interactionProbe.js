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

export async function probeHoverInteractions(page, preset = "standard") {
  const maxTargets = preset === "fast" ? 0 : 8;
  if (maxTargets === 0) return [];

  try {
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

      // Crear sandbox invisible en el DOM para realizar pruebas aisladas
      const sandbox = document.createElement("div");
      sandbox.style.cssText = "position:fixed;top:-9999px;left:-9999px;width:1000px;height:1000px;visibility:hidden;opacity:0;pointer-events:none;";
      document.body.appendChild(sandbox);

      // Phase 3: for each target, clone into sandbox and check hover effects
      for (const t of allTargets) {
        const el = t.element;
        
        let clone;
        try {
          clone = el.cloneNode(true);
          sandbox.appendChild(clone);
        } catch (err) {
          console.debug("[hover] clone fail:", err.message);
          continue;
        }

        const before = readStyles(clone);
        let anyChange = false;

        for (const rule of hoverRules) {
          try {
            const baseSel = rule.selector.replace(/:hover[^,]*/g, "").trim();
            if (baseSel && el.matches(baseSel)) {
              for (const [prop, val] of Object.entries(rule.props)) {
                clone.style.setProperty(prop, val, "important");
              }
              anyChange = true;
            }
          } catch {
            // Ignorar selectores inválidos
          }
        }

        if (anyChange) {
          const after = readStyles(clone);
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
        
        // Limpiar el clon para la siguiente iteración
        try {
          clone.remove();
        } catch (err) { console.debug("[hover] clone remove:", err.message); }
      }

      // Eliminar el sandbox al finalizar
      try {
        sandbox.remove();
      } catch (err) { console.debug("[hover] sandbox remove:", err.message); }

      return results;
    }, maxTargets);
  } catch {
    return [];
  }
}
