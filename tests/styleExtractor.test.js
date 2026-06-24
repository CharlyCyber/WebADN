import { describe, it, beforeEach, afterEach } from "node:test";
import assert from "node:assert/strict";
import { extractStyles } from "../src/modules/styleExtractor.js";

// ---------------------------------------------------------------------------
// Test de regresión para extractStyles.
//
// El callback que se pasa a page.evaluate se ejecuta en el navegador, aislado
// del scope del módulo Node. Para poder testear la lógica SIN lanzar Playwright,
// este test ejecuta el callback en este mismo proceso: monta un `document` falso
// con las interfaces CSS mínimas (CSSStyleRule / CSSMediaRule / ...) y un stub
// de `page.evaluate(fn, arg)` que simplemente llama `fn(arg)`.
//
// El caso #1 ("does not throw ReferenceError") es la regresión directa del bug
// FLUID_FONT_RE/FLUID_VALUE_RE que estaban declarados a nivel de módulo Node.
// ---------------------------------------------------------------------------

// Clases fake para que los `instanceof` del callback funcionen.
class FakeCSSStyleRule {
  constructor({ selectorText = "div", declarations = {}, cssText }) {
    this.selectorText = selectorText;
    this.style = makeFakeStyle(declarations);
    this.cssText = cssText || buildCssText(selectorText, declarations);
  }
}
class FakeCSSMediaRule {
  constructor({ conditionText = "(max-width: 768px)", rules = [] }) {
    this.conditionText = conditionText;
    this.cssRules = rules;
    this.cssText = `@media ${conditionText} { ... }`;
  }
}
class FakeCSSKeyframesRule {
  constructor({ name = "fade", frames = [] }) {
    this.name = name;
    this.cssRules = frames;
    this.cssText = `@keyframes ${name} { ... }`;
  }
}
class FakeCSSFontFaceRule {
  constructor({ declarations = {} }) {
    this.style = makeFakeStyle(declarations);
    this.cssText = `@font-face { ... }`;
  }
}
class FakeCSSStyleSheet {
  constructor({ rules = [], href = null }) {
    this.cssRules = rules;
    this.rules = rules;
    this.href = href;
  }
}

// Imita CSSStyleDeclaration: iterable por nombres de prop. y con getPropertyValue.
function makeFakeStyle(declarations) {
  const names = Object.keys(declarations);
  const style = names.map((_, i) => names[i]);
  style.length = names.length;
  for (let i = 0; i < names.length; i++) {
    style[i] = names[i];
  }
  style.getPropertyValue = (name) => declarations[name] ?? "";
  return style;
}

function buildCssText(selector, declarations) {
  const body = Object.entries(declarations)
    .map(([k, v]) => `${k}: ${v}`)
    .join("; ");
  return `${selector} { ${body}; }`;
}

// Monta un document global con document.styleSheets y document.createElement
// (este último lo usa parseCssText en el path cross-origin; no se ejecuta si no
// hay hojas cross-origin en estos tests, pero lo dejamos para realismo).
function mountDocument(sheets) {
  const fakeDoc = {
    styleSheets: sheets,
    head: { appendChild() {}, },
    createElement() {
      // Devuelve un "style" vacío que no produce sheet (los tests no cruzan
      // este path salvo que inyecten crossOriginTexts con un href bloqueado).
      return { textContent: "", sheet: null, ownerNode: { remove() {} } };
    }
  };
  global.document = fakeDoc;
  // Exponer las clases para que `rule instanceof CSSStyleRule` resuelva dentro
  // del callback ejecutado en este mismo proceso.
  global.CSSStyleRule = FakeCSSStyleRule;
  global.CSSMediaRule = FakeCSSMediaRule;
  global.CSSKeyframesRule = FakeCSSKeyframesRule;
  global.CSSFontFaceRule = FakeCSSFontFaceRule;
  return fakeDoc;
}

function makePage(sheets = []) {
  return {
    // Reproduce el comportamiento de Playwright: el callback se "serializa" y
    // se ejecuta SIN acceso al closure del módulo que lo definió. Lo emulamos
    // pasándolo por `new Function` (que pierde el scope léxico del llamador),
    // así cualquier referencia a constantes de módulo Node dentro del callback
    // (el bug FLUID_FONT_RE original) provoca ReferenceError de verdad.
    //
    // No podemos simplemente llamar `new Function("return fn")()` porque la
    // función usa closures internos (helpers, `out`). En su lugar, extraemos el
    // cuerpo de la fn con toString() y lo re-eval-uamos en un scope limpio que
    // solo ve los globals del navegador (document, CSSStyleRule, ...). Esto es
    // lo más fiel a Playwright sin lanzar Chromium.
    evaluate: async (fn, arg) => {
      // Caso especial: el segundo page.evaluate (sin arg) que usa
      // fetchCrossOriginSheets para listar hrefs. En estos tests no hay hojas
      // cross-origin reales, así que lo dejamos pasar ejecutándolo tal cual
      // (esa fn es autónoma, no referencia constantes del módulo).
      if (arg === undefined) {
        return fn();
      }
      return runInBrowserScope(fn, arg);
    }
  };
}

// Re-ejecuta el callback en un scope que imita el del navegador: solo ve los
// globals que montamos (document, CSS*). NO ve el scope del módulo Node, igual
// que haría Playwright al serializarlo. Devuelve lo que devuelva el callback.
function runInBrowserScope(fn, arg) {
  const src = fn.toString();
  // Extrae el cuerpo entre la primera `{` y la última `}`.
  const body = src.slice(src.indexOf("{") + 1, src.lastIndexOf("}"));
  // Reconstruye los parámetros (asumimos un único parámetro `injected`).
  const paramsMatch = src.match(/\(([^)]*)\)/);
  const params = paramsMatch ? paramsMatch[1].split(",").map((s) => s.trim()) : [];
  // Crea una función en un scope fresco: NO cierra sobre el módulo, solo sobre
  // los globals que Node expone (document, CSS* montados por mountDocument).
  // eslint-disable-next-line no-new-func
  const rebuilt = new Function(...params, body);
  return rebuilt(arg);
}

describe("extractStyles", () => {
  beforeEach(() => {
    mountDocument([]);
  });
  afterEach(() => {
    delete global.document;
    delete global.CSSStyleRule;
    delete global.CSSMediaRule;
    delete global.CSSKeyframesRule;
    delete global.CSSFontFaceRule;
  });

  it("does not throw ReferenceError for FLUID_FONT_RE/FLUID_VALUE_RE (regresión)", async () => {
    // Antes del fix, collectFluidFont referenciaba constantes de módulo Node
    // dentro del page.evaluate → ReferenceError. Este test ejecuta el callback
    // real y verifica que no revienta y sí detecta la regla fluida.
    const sheets = [
      new FakeCSSStyleSheet({
        rules: [
          new FakeCSSStyleRule({
            selectorText: "h1",
            declarations: { "font-size": "clamp(2rem, 5vw, 4rem)" }
          })
        ]
      })
    ];
    mountDocument(sheets);

    const result = await extractStyles(makePage());

    assert.ok(result, "extractStyles must return an object, not throw");
    assert.ok(
      Array.isArray(result.fluidTypeScale?.rules),
      "fluidTypeScale.rules must be an array"
    );
    const fluid = result.fluidTypeScale.rules.find((r) => /clamp/i.test(r.fluid));
    assert.ok(fluid, `expected a clamp() rule in fluidTypeScale, got ${JSON.stringify(result.fluidTypeScale.rules)}`);
    assert.equal(fluid.tag, "h1");
  });

  it("captures fluid font-size declared inside @media", async () => {
    const sheets = [
      new FakeCSSStyleSheet({
        rules: [
          new FakeCSSMediaRule({
            conditionText: "(max-width: 768px)",
            rules: [
              new FakeCSSStyleRule({
                selectorText: "h2",
                declarations: { "font-size": "1.5rem" }
              })
            ]
          })
        ]
      })
    ];
    mountDocument(sheets);

    const result = await extractStyles(makePage());

    const fluid = result.fluidTypeScale.rules.find((r) => r.tag === "h2");
    assert.ok(fluid, "expected an h2 fluid rule from @media");
    assert.ok(
      fluid.sources.includes("(max-width: 768px)"),
      `sources must include the media condition, got ${JSON.stringify(fluid.sources)}`
    );
  });

  it("ignores static px font-size (not fluid)", async () => {
    const sheets = [
      new FakeCSSStyleSheet({
        rules: [
          new FakeCSSStyleRule({
            selectorText: "p",
            declarations: { "font-size": "16px", color: "red" }
          })
        ]
      })
    ];
    mountDocument(sheets);

    const result = await extractStyles(makePage());

    assert.equal(
      result.fluidTypeScale.rules.length,
      0,
      "px font-size must not be treated as fluid"
    );
  });

  it("returns complete empty structure for a page with no stylesheets (backward-compat)", async () => {
    mountDocument([]);

    const result = await extractStyles(makePage());

    assert.deepEqual(result.styleRules, []);
    assert.deepEqual(result.keyframes, []);
    assert.deepEqual(result.mediaQueries, []);
    assert.deepEqual(result.fontFaces, []);
    assert.deepEqual(result.cssVariableMap, {});
    assert.equal(result.totalRuleCount, 0);
    assert.deepEqual(result.externalSheets, []);
    assert.deepEqual(result.crossOriginSheets, []);
    assert.deepEqual(result.fluidTypeScale.rules, []);
    assert.equal(result.crossOriginRecovered, 0);
  });

  it("still captures basic style rules (fix didn't break the main extraction path)", async () => {
    const sheets = [
      new FakeCSSStyleSheet({
        rules: [
          new FakeCSSStyleRule({
            selectorText: "body",
            declarations: { color: "red", "background-color": "#fff" }
          })
        ]
      })
    ];
    mountDocument(sheets);

    const result = await extractStyles(makePage());

    assert.ok(
      result.styleRules.length >= 1,
      "basic style rule must still be captured"
    );
    const bodyRule = result.styleRules.find((r) => r.selector === "body");
    assert.ok(bodyRule, "expected a body rule");
    assert.equal(bodyRule.properties.color, "red");
    assert.equal(bodyRule.properties["background-color"], "#fff");
  });
});
