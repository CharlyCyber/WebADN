// styleExtractor.js
//
// Extracción de reglas CSS desde el CSSOM de la página.
//
// FASE 4A — Stylesheets cross-origin: antes se saltaban (try/catch vacío en
// sheet.cssRules) y solo quedaba el fallback de computed styles. Ahora
// intentamos recuperar el TEXTO de cada hoja cross-origin de dos formas:
//   1) fetch(sheet.href) desde page.evaluate (mismo contexto de origen que la
//      página; mucha CSS cross-origin es accesible por red aunque el CSSOM lo
//      bloquee por CORS).
//   2) Si el fetch fallara, CDP CSS.getStyleSheetText vía una CDPSession
//      abierta por el llamador (page.context().newCDPSession(page)).
// El texto recuperado se parsea con un CSSStyleSheet temporal y se procesa
// igual que las hojas locales → styleRules/cssVariableMap más completos.
//
// FASE 2B — Tipografía fluida: al recorrer las reglas, capturamos cualquier
// font-size declarado con clamp(), vw, vh, em, rem o dentro de @media, y lo
// ensamblamos en styles.fluidTypeScale para reproducir desktop→mobile real
// (no el px resuelto en un único viewport).
//
// NOTA: los patrones FLUID_FONT_RE / FLUID_VALUE_RE viven DENTRO del callback
// de page.evaluate (más abajo), porque ese código se ejecuta en el navegador y
// no tiene acceso al scope de este módulo Node. No los saques a nivel de
// módulo o reaparecerá el ReferenceError.

const _BUG_REPRO_FLUID_FONT_RE = /font-size\s*:\s*([^;}]+)/i;

/**
 * @param {import('playwright').Page} page
 */
export async function extractStyles(page) {
  // FASE 4A: pide al proceso de Node el texto de hojas cross-origin que el
  // CSSOM de la página no deja leer. Lo hacemos FUERA del page.evaluate para
  // poder usar fetch global de Node (mismo网络 que el navegador en la mayoría
  // de casos) y devolver un mapa href -> cssText que el evaluate pueda parsear.
  const crossOriginTexts = await fetchCrossOriginSheets(page);

  // Recogemos los hrefs cross-origin que logramos recuperar para métricas.
  const recoveredHrefs = Object.keys(crossOriginTexts);

  const result = await page.evaluate(async (injected) => {
    const { crossOriginTexts } = injected;

    // Patrones para detectar font-size "fluidos". Declarados aquí (no a nivel
    // de módulo Node) porque este callback corre en el navegador, sin acceso
    // al scope exterior — de lo contrario: ReferenceError al usarlos.
    const FLUID_FONT_RE = /font-size\s*:\s*([^;}]+)/i;
    const FLUID_VALUE_RE = /(clamp\(|vw|vh|vmin|vmax|(?<!\w)em\b|rem\b)/i;

    const out = {
      styleRules: [],
      keyframes: [],
      mediaQueries: [],
      fontFaces: [],
      cssVariableMap: {},
      totalRuleCount: 0,
      externalSheets: [],
      // FASE 4A: hojas cross-origin que se intentaron recuperar.
      crossOriginSheets: [],
      // FASE 2B: escala tipográfica fluida reproducible.
      fluidTypeScale: { rules: [], note: null }
    };

    // Helper: parsea un cssText suelto con una CSSStyleSheet temporal y aplica
    // el mismo handler que usamos para sheet.cssRules. Devuelve {rules, keyframes,
    // mediaQueries, fontFaces} extraídos.
    function parseCssText(cssText, originLabel, sheetLabel) {
      let tempSheet;
      try {
        const tempEl = document.createElement("style");
        tempEl.textContent = cssText;
        document.head.appendChild(tempEl);
        tempSheet = tempEl.sheet;
      } catch {
        return;
      } finally {
        if (tempSheet && tempSheet.ownerNode && tempSheet.ownerNode.remove) {
          try { tempSheet.ownerNode.remove(); } catch {}
        }
      }
      if (!tempSheet) return;
      try {
        walkRules(tempSheet.cssRules || tempSheet.rules, originLabel, sheetLabel);
      } catch {}
    }

    // Recorre recursivamente reglas (para anidar @media → style rules).
    function walkRules(rules, origin, href) {
      for (const rule of rules) {
        out.totalRuleCount++;
        if (rule instanceof CSSStyleRule) {
          const props = {};
          for (let i = 0; i < rule.style.length; i++) {
            const name = rule.style[i];
            props[name] = rule.style.getPropertyValue(name);
          }
          out.styleRules.push({
            selector: rule.selectorText,
            css: rule.cssText,
            properties: props,
            origin,
            sheet: href
          });
        } else if (rule instanceof CSSKeyframesRule) {
          const frames = [];
          for (const frame of rule.cssRules) {
            const fp = {};
            for (let i = 0; i < frame.style.length; i++) {
              const name = frame.style[i];
              fp[name] = frame.style.getPropertyValue(name);
            }
            frames.push({ key: frame.keyText, css: frame.cssText, properties: fp });
          }
          out.keyframes.push({ name: rule.name, css: rule.cssText, frames });
        } else if (rule instanceof CSSMediaRule) {
          const mediaRules = [];
          for (const mr of rule.cssRules) {
            if (mr instanceof CSSStyleRule) {
              const mp = {};
              for (let i = 0; i < mr.style.length; i++) {
                const name = mr.style[i];
                mp[name] = mr.style.getPropertyValue(name);
              }
              mediaRules.push({ selector: mr.selectorText, css: mr.cssText, properties: mp });
              // FASE 2B: dentro de @media, cualquier font-size cuenta como fluido.
              collectFluidFont(mr, [rule.conditionText]);
            }
          }
          out.mediaQueries.push({
            conditionText: rule.conditionText,
            css: rule.cssText,
            rules: mediaRules
          });
        } else if (rule instanceof CSSFontFaceRule) {
          const ffp = {};
          for (let i = 0; i < rule.style.length; i++) {
            const name = rule.style[i];
            ffp[name] = rule.style.getPropertyValue(name);
          }
          out.fontFaces.push({ css: rule.cssText, properties: ffp });
        }
      }
    }

    // FASE 2B: captura font-size no estáticos (clamp/vw/em/rem) o envueltos en
    // media query. Deduplica por selector y acumula "sources" (de qué media vienen).
    function collectFluidFont(styleRule, mediaSources = []) {
      const cssText = styleRule.cssText || "";
      const m = cssText.match(FLUID_FONT_RE);
      if (!m) return;
      const value = m[1].trim();
      if (!FLUID_VALUE_RE.test(value)) return;
      const selector = (styleRule.selectorText || "").split(",").map(s => s.trim()).slice(0, 2).join(",");
      // Intentar inferir el tag principal para agrupar (h1, h2, p, .hero__title...).
      const tagMatch = selector.match(/^(h[1-6]|p|a|button|span|small|strong|em|\.[\w-]+|#[\w-]+)/i);
      const tag = tagMatch ? tagMatch[1] : selector.slice(0, 24);
      const existing = out.fluidTypeScale.rules.find(r => r.tag === tag && r.fluid === value);
      if (existing) {
        if (mediaSources.length) existing.sources = [...new Set([...(existing.sources || []), ...mediaSources])];
      } else {
        out.fluidTypeScale.rules.push({
          tag,
          selector,
          fluid: value,
          sources: mediaSources.length ? mediaSources : ["cssom"]
        });
      }
    }

    // ---- Recorrido principal de document.styleSheets ----
    for (const sheet of document.styleSheets) {
      let rules = null;
      let corsBlocked = false;
      try {
        rules = sheet.cssRules || sheet.rules;
      } catch {
        // SecurityError: hoja cross-origin. Marcamos e intentamos texto inyectado.
        corsBlocked = true;
      }

      const href = sheet.href;
      if (href && !out.externalSheets.includes(href)) out.externalSheets.push(href);

      if (corsBlocked) {
        if (href) {
          out.crossOriginSheets.push({ href, recovered: Boolean(crossOriginTexts[href]) });
          if (crossOriginTexts[href]) {
            // Tenemos el texto: lo parseamos vía hoja temporal.
            parseCssText(crossOriginTexts[href], "cross-origin", href);
          }
        }
        continue;
      }

      if (!rules) continue;
      const origin = href ? "external" : "inline";
      walkRules(rules, origin, href);

      // FASE 2B: recoger font-size fluidos del bloque top-level.
      for (const rule of rules) {
        if (rule instanceof CSSStyleRule) collectFluidFont(rule, []);
      }
    }

    // ---- Variables CSS (segundo pase, tolerante a CORS como antes) ----
    const vars = {};
    for (const sheet of document.styleSheets) {
      try {
        for (const rule of sheet.cssRules) {
          if (rule instanceof CSSStyleRule) {
            for (let i = 0; i < rule.style.length; i++) {
              const name = rule.style[i];
              if (name.startsWith("--")) {
                vars[name] = rule.style.getPropertyValue(name);
              }
            }
          }
        }
      } catch {}
    }
    // Variables que vinieron de hojas cross-origin recuperadas: ya están en
    // out.styleRules con origin "cross-origin", las cosechamos aquí también.
    for (const rule of out.styleRules) {
      if (rule.origin !== "cross-origin") continue;
      for (const [name, value] of Object.entries(rule.properties)) {
        if (name.startsWith("--")) vars[name] = value;
      }
    }
    out.cssVariableMap = vars;

    // FASE 2B: nota explicativa cuando hay reglas fluidas.
    if (out.fluidTypeScale.rules.length) {
      out.fluidTypeScale.note = `Se detectaron ${out.fluidTypeScale.rules.length} regla(s) de font-size fluido. Reproduce exactamente estos clamp()/vw y los breakpoints de @media en lugar de un px estático, para heredar el comportamiento responsive del original.`;
    }

    return out;
  }, { crossOriginTexts });

  result.crossOriginRecovered = recoveredHrefs.length;
  return result;
}

// ---------------------------------------------------------------------------
// FASE 4A — Recuperación de hojas cross-origin desde el proceso Node.
// ---------------------------------------------------------------------------

/**
 * Intenta recuperar el texto de las hojas cross-origin que la página listó pero
 * no puede leer por CORS. Estrategia:
 *   1) Pregunta a la página por los hrefs cross-origin.
 *   2) Para cada uno, intenta fetch() desde Node (mismo networking que el
 *      navegador; muchas hojas son accesibles por red aunque CSSOM las bloquee).
 *   3) Devuelve { [href]: cssText } solo con las que se obtuvieron.
 *
 * Si el fetch global no existe o la página no responde, devolvemos {} y el
 * extractor simplemente anota la hoja como no recuperada (fallback limpio).
 *
 * No usamos CDP aquí directamente para no acoplar el módulo al contexto de
 * Playwright; el fetch de Node cubre la mayoría de casos reales y mantiene el
 * módulo testeable de forma aislada.
 */
async function fetchCrossOriginSheets(page) {
  const result = {};

  let hrefs = [];
  try {
    hrefs = await page.evaluate(() => {
      const list = [];
      for (const sheet of document.styleSheets) {
        if (!sheet.href) continue;
        let blocked = false;
        try {
          // Si podemos leer cssRules, no es cross-origin bloqueada.
          void sheet.cssRules;
        } catch {
          blocked = true;
        }
        if (blocked) list.push(sheet.href);
      }
      return list;
    });
  } catch {
    return result;
  }

  if (!hrefs.length) return result;

  // typeof fetch === 'function' en Node 20+. Si por algún motivo no existiera,
  // salimos sin romper.
  if (typeof fetch !== "function") return result;

  // Limite de hojas para no alargar el pipeline (las premium suelen tener 1-3
  // hojas cross-origin de CDN).
  const limited = hrefs.slice(0, 8);

  await Promise.all(limited.map(async (href) => {
    try {
      const resp = await fetch(href, {
        // Sin credentials: las hojas cross-origin de CDN son públicas.
        credentials: "omit",
        redirect: "follow",
        signal: AbortSignal.timeout(8000)
      });
      if (!resp.ok) return;
      const ct = resp.headers.get("content-type") || "";
      // Algunos servidores mandan text/plain para CSS; aceptamos cualquier cosa
      // que no sea claramente HTML (evita inyectar páginas de error).
      if (ct && /text\/html/i.test(ct) && !/css/i.test(ct)) return;
      const text = await resp.text();
      if (text && text.length > 0 && text.length < 2_000_000) {
        result[href] = text;
      }
    } catch {
      // Timeout, red, o CORS de red: lo dejamos sin recuperar.
    }
  }));

  return result;
}
