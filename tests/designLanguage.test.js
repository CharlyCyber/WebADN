import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { classifyDesignLanguage } from "../src/modules/localVisionHeuristics.js";

describe("classifyDesignLanguage", () => {
  it("detects cinematic dark for dark theme with animations", () => {
    const evidence = {
      url: "https://example.com",
      niche: "test",
      generatedAt: new Date().toISOString(),
      inspection: {
        tokens: { colors: ["#0d0f12", "#000000", "#1a1d22", "#f4f1ea"] },
        cssFeatures: {
          effects: [
            { feature: "backdrop-filter", count: 3 },
            { feature: "animation", count: 8 },
            { feature: "clip-path", count: 2 }
          ],
          complexityScore: 50
        },
        sections: [{ isFullViewport: true }],
        motionRecipes: [
          { type: "scroll-parallax" },
          { type: "sticky-pin" }
        ],
        assets: { canvasCount: 1, inlineSvgCount: 0, videos: [] },
        webgl: { webglCount: 1, likely3dLibrary: "Three.js" },
        animationHints: ["transform-driven motion"]
      }
    };
    const lang = classifyDesignLanguage(evidence);
    assert.ok(lang.label.toLowerCase().includes("dark") || lang.label.toLowerCase().includes("cinematic"));
    assert.ok(lang.confidence > 0);
    assert.ok(lang.signals.length > 0);
  });

  it("returns unknown for empty inspection", () => {
    const lang = classifyDesignLanguage({ url: "https://x.com", niche: "test", inspection: null });
    assert.equal(lang.label, "unknown");
    assert.equal(lang.confidence, 0);
  });
});
