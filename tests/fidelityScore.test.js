import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  computeFidelityScore,
  computePixelPaletteConfidence,
  computeVisualDescriptionConfidence,
  FIDELITY_WEIGHTS
} from "../src/modules/fidelityScore.js";

// Fixture base sin datos visuales nuevos (pixelPalette / visualDescription).
// Reutilizado por varios tests para comparar el efecto de añadirlos.
function baseEvidence() {
  return {
    url: "https://example.com",
    niche: "test",
    generatedAt: new Date().toISOString(),
    inspection: {
      technologies: ["GSAP"],
      tokens: { colors: ["#000", "#fff"], fonts: ["Inter"], cssVariables: { "--bg": "#000" }, spacingScale: ["8px"] },
      layout: { dominant: "flex" },
      animationHints: [],
      sections: [{ role: "hero" }],
      semanticTags: { h1: 1, button: 1 },
      ctas: [{ text: "Buy" }],
      viewport: { width: 1440 },
      visualEvidence: [{ viewport: "desktop" }, { viewport: "mobile" }],
      assets: { images: ["img.jpg"], fonts: ["font.woff2"], scripts: ["app.js"], stylesheets: ["style.css"], inlineSvgCount: 3, canvasCount: 1 },
      cssFeatures: { effects: [{ feature: "animation", count: 5 }], complexityScore: 30 },
      motionRecipes: [],
      hoverEffects: []
    }
  };
}

describe("computeFidelityScore", () => {
  it("returns object with overall between 0 and 100", () => {
    const evidence = {
      url: "https://example.com",
      niche: "test",
      generatedAt: new Date().toISOString(),
      inspection: {
        technologies: ["GSAP"],
        tokens: { colors: ["#000", "#fff"], fonts: ["Inter"], cssVariables: { "--bg": "#000" }, spacingScale: ["8px"] },
        layout: { dominant: "flex" },
        animationHints: [],
        sections: [{ role: "hero" }],
        semanticTags: { h1: 1, button: 1 },
        ctas: [{ text: "Buy" }],
        viewport: { width: 1440 },
        visualEvidence: [{ viewport: "desktop" }, { viewport: "mobile" }],
        assets: { images: ["img.jpg"], fonts: ["font.woff2"], scripts: ["app.js"], stylesheets: ["style.css"], inlineSvgCount: 3, canvasCount: 1 },
        cssFeatures: { effects: [{ feature: "animation", count: 5 }], complexityScore: 30 },
        motionRecipes: [],
        hoverEffects: [],
        performanceMetrics: { LCP: 1.5 }
      }
    };
    const score = computeFidelityScore(evidence);
    assert.ok(typeof score.overall === "number");
    assert.ok(score.overall >= 0 && score.overall <= 100);
    assert.ok(typeof score.label === "string");
    assert.ok(Array.isArray(score.missingEvidence));
  });

  it("returns 0 for empty evidence", () => {
    const score = computeFidelityScore({ url: "https://x.com", niche: "test", inspection: null });
    assert.equal(score.overall, 0);
    assert.equal(score.label, "No data");
  });

  it("scores a richly-extracted site at >= 80 (minimum contract)", () => {
    // Fija el contrato del requisito de mínimo: un sitio bien extraído
    // (3 viewports, motionRecipes, ≥5 hovers, tokens completos, CSS rico,
    // assets variados) debe alcanzar ≥80 con el scoring actual.
    const evidence = {
      url: "https://rich.example.com",
      niche: "test",
      generatedAt: new Date().toISOString(),
      inspection: {
        technologies: ["GSAP", "Lenis"],
        tokens: {
          colors: ["#000", "#fff", "#ccc", "#444"],
          fonts: ["Inter", "GT America"],
          cssVariables: { "--bg": "#000", "--fg": "#fff" },
          spacingScale: ["4px", "8px", "16px", "32px"]
        },
        layout: { dominant: "grid" },
        animationHints: [{ selector: ".hero", type: "fade" }],
        motionRecipes: [{ name: "heroReveal", duration: 800 }],
        sections: [
          { role: "hero" },
          { role: "features" },
          { role: "footer" }
        ],
        semanticTags: { h1: 1, h2: 3, button: 4, nav: 1 },
        ctas: [{ text: "Comprar" }, { text: "Saber más" }],
        viewport: { width: 1440 },
        visualEvidence: [
          { viewport: "desktop" },
          { viewport: "tablet" },
          { viewport: "mobile" }
        ],
        assets: {
          images: ["a.jpg", "b.jpg"],
          fonts: ["inter.woff2"],
          scripts: ["app.js"],
          stylesheets: ["style.css"],
          inlineSvgCount: 2,
          canvasCount: 0,
          videos: ["bg.mp4"]
        },
        webgl: { webglCount: 0, canvasCount: 0, likely3dLibrary: null },
        cssFeatures: {
          effects: [
            { feature: "animation", count: 3 },
            { feature: "transition", count: 3 },
            { feature: "transform", count: 2 },
            { feature: "backdrop-filter", count: 1 },
            { feature: "clip-path", count: 1 },
            { feature: "mask", count: 1 },
            { feature: "grid", count: 1 },
            { feature: "filter", count: 1 }
          ],
          complexityScore: 60
        },
        hoverEffects: [
          { selector: ".btn1" }, { selector: ".btn2" }, { selector: ".btn3" },
          { selector: ".btn4" }, { selector: ".btn5" }, { selector: ".btn6" }
        ],
        performanceMetrics: { LCP: 1.2 }
      }
    };
    const score = computeFidelityScore(evidence);
    assert.ok(
      score.overall >= 80,
      `rich fixture should reach >= 80, got ${score.overall} (breakdown=${JSON.stringify(score.breakdown)})`
    );
  });

  it("boosts overall when evidence.pixelPalette is present", () => {
    const without = computeFidelityScore(baseEvidence());
    const withPalette = computeFidelityScore({
      ...baseEvidence(),
      pixelPalette: {
        background: "#0a0a0a",
        dominant: "#f5f5f5",
        accent: "#ff5500",
        muted: "#888888",
        palette: ["#0a0a0a", "#f5f5f5", "#ff5500", "#888888"],
        gradients: [{ type: "linear", from: "#0a0a0a", to: "#333333" }]
      }
    });

    assert.ok(
      withPalette.breakdown.pixelPaletteConfidence > 0,
      `pixelPaletteConfidence should be > 0, got ${withPalette.breakdown.pixelPaletteConfidence}`
    );
    assert.equal(without.breakdown.pixelPaletteConfidence, 0);
    assert.ok(
      withPalette.overall > without.overall,
      `overall should increase with pixelPalette: ${withPalette.overall} > ${without.overall}`
    );
  });

  it("boosts overall when llmInterpretation.visualDescription is rich", () => {
    const without = computeFidelityScore(baseEvidence());
    const richDescription =
      "Hero full-bleed con fotografía editorial a la izquierda y título tipográfico " +
      "a la derecha, alineado a baseline grid de 8px. Paleta monocroma con un accent " +
      "cálido. Tratamiento tipográfico del título: sans-serif condensada, peso 700, " +
      "tracking negativo, escala fluida clamp(2.5rem, 6vw, 5rem). Layering por z-index " +
      "y mix-blend-mode. Transiciones entre secciones con clip-path reveal. " +
      "Mood editorial, dark, premium.".repeat(4);
    const withDesc = computeFidelityScore({
      ...baseEvidence(),
      llmInterpretation: { visualDescription: richDescription }
    });

    assert.ok(
      withDesc.breakdown.visualDescriptionConfidence >= 0.85,
      `visualDescriptionConfidence should be high for rich text, got ${withDesc.breakdown.visualDescriptionConfidence}`
    );
    assert.equal(without.breakdown.visualDescriptionConfidence, 0);
    assert.ok(
      withDesc.overall > without.overall,
      `overall should increase with visualDescription: ${withDesc.overall} > ${without.overall}`
    );
  });

  it("weights sum to exactly 1.0 (all 11 dimensions accounted)", () => {
    // Contrato de los pesos: deben sumar 1.0 para que el overall (0-1 escalado
    // a 0-100) sea coherente. Verificación directa sobre la constante exportada
    // —más determinista que inferir pesos vía fixtures con techos <1.0.
    const sum = Object.values(FIDELITY_WEIGHTS).reduce((a, b) => a + b, 0);
    assert.ok(
      Math.abs(sum - 1) < 1e-9,
      `FIDELITY_WEIGHTS must sum to 1.0, got ${sum} (weights=${JSON.stringify(FIDELITY_WEIGHTS)})`
    );
    // Cobertura: cada dimensión computada en computeFidelityScore tiene peso.
    const score = computeFidelityScore(baseEvidence());
    for (const key of Object.keys(score.breakdown)) {
      assert.ok(key in FIDELITY_WEIGHTS, `dimension "${key}" has no weight assigned`);
    }
    assert.equal(Object.keys(FIDELITY_WEIGHTS).length, 11, "expected 11 weighted dimensions");
  });

  it("is backward-compatible: old evidence without pixelPalette/llmInterpretation does not crash or NaN", () => {
    const score = computeFidelityScore(baseEvidence());
    assert.ok(!Number.isNaN(score.overall), "overall must not be NaN");
    assert.ok(score.overall >= 0 && score.overall <= 100);
    assert.equal(score.breakdown.pixelPaletteConfidence, 0);
    assert.equal(score.breakdown.visualDescriptionConfidence, 0);
    // Neither new dimension should appear in missingEvidence spuriously
    // (they'll be 0 < 0.3 so they DO appear — that's the contract: they're
    // genuinely missing for old runs). Just ensure no crash and key present.
    assert.ok("pixelPaletteConfidence" in score.breakdown);
    assert.ok("visualDescriptionConfidence" in score.breakdown);
  });
});

describe("computePixelPaletteConfidence", () => {
  it("returns 0 for absent palette", () => {
    assert.equal(computePixelPaletteConfidence(null), 0);
    assert.equal(computePixelPaletteConfidence(undefined), 0);
    assert.equal(computePixelPaletteConfidence({}), 0);
  });

  it("accumulates confidence as roles fill in", () => {
    const onlyBg = computePixelPaletteConfidence({ background: "#000" });
    const withDominant = computePixelPaletteConfidence({ background: "#000", dominant: "#fff" });
    assert.ok(withDominant > onlyBg, "adding dominant should increase score");
  });

  it("caps at 1.0 for a full palette", () => {
    const full = computePixelPaletteConfidence({
      background: "#000",
      dominant: "#fff",
      accent: "#f00",
      palette: ["#000", "#fff", "#f00", "#0f0"],
      gradients: [{ type: "linear", from: "#000", to: "#111" }]
    });
    assert.ok(full <= 1, `must not exceed 1.0, got ${full}`);
    assert.ok(full >= 0.9, `full palette should be near 1.0, got ${full}`);
  });
});

describe("computeVisualDescriptionConfidence", () => {
  it("returns 0 for absent / non-string", () => {
    assert.equal(computeVisualDescriptionConfidence(null), 0);
    assert.equal(computeVisualDescriptionConfidence(undefined), 0);
    assert.equal(computeVisualDescriptionConfidence(123), 0);
    assert.equal(computeVisualDescriptionConfidence("   "), 0);
  });

  it("scores short text as partial fallback", () => {
    const short = computeVisualDescriptionConfidence("Hero con foto.");
    assert.ok(short <= 0.5, `short text should be partial, got ${short}`);
  });

  it("scores medium text as useful multimodal", () => {
    const medium = computeVisualDescriptionConfidence("x".repeat(250));
    assert.ok(medium >= 0.8, `medium text should be high, got ${medium}`);
  });

  it("scores long text as rich description", () => {
    const long = computeVisualDescriptionConfidence("x".repeat(900));
    assert.ok(long >= 0.9, `long text should be rich, got ${long}`);
  });
});
