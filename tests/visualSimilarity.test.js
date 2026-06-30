import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { computeVisualSimilarity, SIMILARITY_DIMENSIONS } from "../src/modules/visualSimilarity.js";
import { classifySiteCategory } from "../src/modules/verificationLoop.js";

function minimalEvidence() {
  return {
    url: "https://example.com",
    niche: "test",
    generatedAt: new Date().toISOString(),
    inspection: {
      technologies: ["GSAP"],
      tokens: { colors: ["#000", "#fff"], fonts: ["Inter"], cssVariables: { "--bg": "#000" }, spacingScale: ["8px"] },
      layout: { dominant: "flex", counts: { grid: 0, flex: 5, sticky: 1, fixed: 0, absolute: 2 } },
      animationHints: [],
      sections: [{ role: "hero" }, { role: "features" }],
      semanticTags: { h1: 1 },
      ctas: [{ text: "Buy" }],
      viewport: { width: 1440, height: 900, bodyHeight: 3000 },
      visualEvidence: [
        { viewport: "desktop", scrollPercent: 0, visibleElements: [{ tag: "h1" }, { tag: "p" }] },
        { viewport: "mobile", scrollPercent: 0, visibleElements: [{ tag: "h1" }] },
      ],
      motionRecipes: [{ type: "scroll-parallax", target: ".hero" }],
      hoverEffects: [{ selector: ".btn" }],
      cssFeatures: { effects: [{ feature: "animation", count: 3 }], complexityScore: 30 },
      sectionStructure: [
        { index: 0, tag: "section", layoutConfig: { display: "flex" }, keyChildren: [{ tag: "h1", styles: { fontSize: "2rem" } }] }
      ],
    },
    pixelPalette: { background: "#000", dominant: "#fff", accent: "#f00", palette: ["#000", "#fff", "#f00"] },
    spacing: { baseUnit: "8px" },
  };
}

describe("computeVisualSimilarity", () => {
  it("returns null for empty evidence", () => {
    assert.equal(computeVisualSimilarity(null), null);
    assert.equal(computeVisualSimilarity({}), null);
  });

  it("returns object with overall and dimensions for valid evidence", () => {
    const result = computeVisualSimilarity(minimalEvidence());
    assert.ok(result);
    assert.ok(typeof result.overall === "number");
    assert.ok(result.overall >= 0 && result.overall <= 100);
    assert.ok(result.dimensions);
    assert.ok(result.timestamp);
  });

  it("includes all 6 dimensions in breakdown", () => {
    const result = computeVisualSimilarity(minimalEvidence());
    const dimKeys = Object.keys(result.dimensions);
    const expected = Object.keys(SIMILARITY_DIMENSIONS);
    for (const k of expected) {
      assert.ok(dimKeys.includes(k), `missing dimension: ${k}`);
    }
  });

  it("weights sum to 1.0", () => {
    const sum = Object.values(SIMILARITY_DIMENSIONS).reduce((a, d) => a + d.weight, 0);
    assert.ok(Math.abs(sum - 1) < 1e-9, `weights must sum to 1.0, got ${sum}`);
  });

  it("identifies weak sections when score < 80", () => {
    const result = computeVisualSimilarity(minimalEvidence());
    if (result.overall < 80) {
      assert.ok(result.weakSections.length > 0);
    }
  });

  it("handles evidence without pixelPalette gracefully", () => {
    const ev = minimalEvidence();
    delete ev.pixelPalette;
    const result = computeVisualSimilarity(ev);
    assert.ok(result);
    assert.ok(!Number.isNaN(result.overall));
  });

  it("handles evidence without motionRecipes gracefully", () => {
    const ev = minimalEvidence();
    ev.inspection.motionRecipes = [];
    ev.inspection.hoverEffects = [];
    const result = computeVisualSimilarity(ev);
    assert.ok(result);
    assert.ok(!Number.isNaN(result.overall));
  });
});

describe("classifySiteCategory", () => {
  it("detects WebGL 3D sites", () => {
    const result = classifySiteCategory({
      webgl: { webglCount: 2, shaderDetails: [{ name: "frag" }] },
      technologies: ["Three.js", "GSAP"],
    });
    assert.equal(result.category, "webgl");
    assert.ok(result.maxFidelity <= 0.80);
  });

  it("detects Canvas 2D sites", () => {
    const result = classifySiteCategory({
      webgl: { webglCount: 0 },
      assets: { canvasCount: 2 },
      technologies: [],
    });
    assert.equal(result.category, "canvas");
  });

  it("detects Premium CSS-DOM sites", () => {
    const result = classifySiteCategory({
      webgl: { webglCount: 0 },
      animationHints: ["a", "b", "c", "d", "e", "f"],
      motionRecipes: [{ type: "sticky-pin" }, { type: "scroll-parallax" }],
      technologies: ["GSAP"],
    });
    assert.equal(result.category, "css-dom-premium");
    assert.ok(result.maxFidelity >= 0.85);
  });

  it("defaults to standard CSS-DOM", () => {
    const result = classifySiteCategory({});
    assert.equal(result.category, "css-dom");
    assert.equal(result.maxFidelity, 0.85);
  });
});
