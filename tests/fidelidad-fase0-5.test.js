import test from "node:test";
import assert from "node:assert/strict";
import { compareFingerprints } from "../src/modules/fingerprintCompare.js";
import { composeKitPrompt } from "../src/modules/buildKit.js";
import { buildReferenceExperienceIR } from "../src/modules/referenceIrBuilder.js";

// ---------- helpers: fingerprints mínimos para probar las nuevas garantías ----------
function makeVp(overrides = {}) {
  return {
    viewport: { width: 1440, height: 900 },
    page: { vw: 1440, vh: 900, docHeight: 2700, overflowX: 0, heightVh: 3 },
    sections: [
      {
        index: 0, top: 0, height: 900, hVh: 1, virtual: false, tag: "section",
        desc: "hero", role: "hero", bg: "#111111", textColor: "#eeeeee",
        cols: 1, align: "center", padTop: 80, padBottom: 80,
        counts: { images: 1, videos: 0, buttons: 1, links: 2 },
        elements: [{ k: "h1", x: 20, w: 60, y: 100, h: 60, fs: 48 }],
      },
    ],
    type: { roles: { h1: { size: 48, family: "Inter", weight: 700, lineHeight: 1.1, letterSpacing: 0 } }, display: { size: 48 } },
    color: { pageBg: "#111111", backgrounds: [{ value: "#111111", share: 1 }], texts: [{ value: "#eeeeee", share: 1 }], accents: [] },
    effects: {},
    libs: {},
    motion: {},
    hover: { targets: [{ kind: "button", desc: "cta", changes: [{ prop: "color" }] }], byKind: {} },
    ...overrides,
  };
}

function makeFp(vpOverrides = {}) {
  return { version: 1, url: "https://ref.example", viewports: { desktop: makeVp(vpOverrides.desktop) }, errors: [] };
}

// ---------- Fase 0: IR enriquecida ----------
test("Fase 0: la IR incluye pixelPalette, spacing y designLanguage en globalTokens", () => {
  const ir = buildReferenceExperienceIR({
    url: "https://x.com", niche: "test",
    pixelPalette: { background: "#000000" },
    spacing: { baseUnit: "8px" },
    designLanguage: { label: "dark" },
    probe: { viewports: ["desktop", "mobile"], sections: 5, errors: [] },
    inspection: { sections: [], sectionStructure: [], tokens: { colors: ["#000"] }, layout: {} },
  });
  assert.equal(ir.globalTokens.pixelPalette.background, "#000000");
  assert.equal(ir.globalTokens.spacing.baseUnit, "8px");
  assert.equal(ir.globalTokens.designLanguage.label, "dark");
  assert.deepEqual(ir.responsive.viewports, ["desktop", "mobile"]);
});

// ---------- Fase 1: imágenes rotas penalizadas ----------
test("Fase 1: un build con imágenes rotas se penaliza en layout", () => {
  const ref = makeFp();
  const build = makeFp({
    desktop: {
      sections: [
        {
          index: 0, top: 0, height: 900, hVh: 1, virtual: false, tag: "section",
          desc: "hero", role: "hero", bg: "#111111", textColor: "#eeeeee",
          cols: 1, align: "center", padTop: 80, padBottom: 80,
          counts: { images: 1, videos: 0 },
          elements: [{ k: "img", x: 10, w: 80, y: 200, h: 400, ratio: 2, broken: true }],
        },
      ],
    },
  });
  const refGood = makeFp();
  const refBroken = makeFp({
    desktop: {
      sections: [
        {
          index: 0, top: 0, height: 900, hVh: 1, virtual: false, tag: "section",
          desc: "hero", role: "hero", bg: "#111111", textColor: "#eeeeee",
          cols: 1, align: "center", padTop: 80, padBottom: 80,
          counts: { images: 1, videos: 0 },
          elements: [{ k: "img", x: 10, w: 80, y: 200, h: 400, ratio: 2, broken: true }],
        },
      ],
    },
  });
  const goodReport = compareFingerprints(refGood, refGood);
  const brokenReport = compareFingerprints(refGood, build);
  assert.equal(goodReport.score, 100);
  assert.ok(brokenReport.score < 100, `broken score ${brokenReport.score}`);
  assert.ok(brokenReport.issues.some((i) => /Medios rotos/i.test(i.title)));
  // La referencia con medios rotos se reporta pero no castiga al build igual.
  const refBrokenReport = compareFingerprints(refBroken, refBroken);
  assert.ok(refBrokenReport.issues.some((i) => /referencia tiene medios rotos/i.test(i.title)));
});

// ---------- Fase 3: contrato de interacciones ----------
test("Fase 3: un build sin contrato de interacciones se penaliza", () => {
  const ref = makeFp({
    desktop: { interactionContract: { components: [{ type: "mobile-menu", selector: "#menu", note: "abre drawer" }] } },
  });
  const build = makeFp(); // sin interactionContract
  const report = compareFingerprints(ref, build);
  assert.ok(report.issues.some((i) => /Falta el componente interactivo/i.test(i.title)));
  assert.ok(report.dimensions.interaction < 100, `interaction ${report.dimensions.interaction}`);
});

// ---------- Fase 2 + 3: prompt del kit ----------
test("Fase 1+2+3: el prompt del kit incluye recetas de imágenes, tipografía fluida e interacciones", () => {
  const fp = {
    version: 1, url: "https://ref.example",
    viewports: {
      desktop: makeVp({
        fixedElements: [{ desc: "header", tag: "header", position: "fixed", x: 0, y: 0, w: 1440, h: 70, bg: "#111111", links: [{ text: "Inicio", tag: "a" }] }],
        interactionContract: { components: [{ type: "accordion", selector: ".faq", itemCount: 3, note: "alterna abierto/cerrado" }] },
        type: { roles: { h1: { size: 48 } }, display: { size: 48 }, fluidScale: { rules: [{ selector: "h1", fluid: "clamp(3rem, 8vw, 6rem)" }], note: "fluido" } },
      }),
      mobile: makeVp(),
    },
    errors: [],
  };
  const prompt = composeKitPrompt({ fingerprint: fp, niche: "agencia", url: fp.url });
  // Recetas de imágenes funcionales.
  assert.match(prompt, /picsum\.photos/);
  assert.match(prompt, /<svg>|svg inline/i);
  // Tipografía fluida.
  assert.match(prompt, /clamp\(3rem, 8vw, 6rem\)/);
  assert.match(prompt, /Tipografía fluida/);
  // Elementos fijos y interacciones.
  assert.match(prompt, /Elementos fijos/);
  assert.match(prompt, /Interacciones funcionales/);
  assert.match(prompt, /accordion/);
});

test("Fase 2: el prompt del kit incluye reglas de layout Flex/Grid", () => {
  const fp = {
    version: 1, url: "https://ref.example",
    viewports: {
      desktop: makeVp({
        sections: [
          {
            index: 0, top: 0, height: 900, hVh: 1, virtual: false, tag: "section",
            desc: "hero", role: "hero", bg: "#111111", textColor: "#eeeeee",
            cols: 2, align: "left", padTop: 80, padBottom: 80,
            counts: { images: 0, videos: 0 },
            elements: [{ k: "card", x: 5, w: 45, y: 100, h: 200, n: 2, dir: "row", gap: 4 }],
            containers: [{ desc: ".grid", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }],
          },
        ],
      }),
      mobile: makeVp(),
    },
    errors: [],
  };
  const prompt = composeKitPrompt({ fingerprint: fp, niche: "x", url: fp.url });
  assert.match(prompt, /Reglas de layout/);
  assert.match(prompt, /1fr 1fr/);
  assert.match(prompt, /display: grid/);
});
