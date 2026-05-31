import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { computeFidelityScore } from "../src/modules/fidelityScore.js";

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
});
