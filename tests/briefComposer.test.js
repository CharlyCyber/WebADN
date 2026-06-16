import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { composeMegaBrief } from "../src/modules/briefComposer.js";

function minimalEvidence() {
  return {
    url: "https://example.com", niche: "test",
    generatedAt: new Date().toISOString(),
    fidelityLevel: "compact",
    conversionPlan: { pushbacks: [], requiredBlocks: [] },
    inspection: {
      technologies: ["React"],
      tokens: { colors: ["#000"], fonts: ["Arial"], cssVariables: {} },
      layout: { dominant: "flexbox" },
      gsapDataAttrs: {}, semanticTags: {}, ctas: [],
      viewport: { width: 1440, height: 900, bodyHeight: 3000 },
      animationHints: [], sections: [], sectionStructure: [],
      assets: { images: [], videos: [], fonts: [], scripts: [], stylesheets: [] },
      motionRecipes: [], hoverEffects: [], visualEvidence: [],
      webgl: {},
      risks: []
    }
  };
}

describe("composeMegaBrief output size", () => {
  it("stays under 100KB for compact preset", async () => {
    const brief = await composeMegaBrief(minimalEvidence(), "compact");
    assert.ok(brief.length < 100000, `compact brief ${brief.length} bytes > 100KB`);
  });

  it("includes executive diagnosis section", async () => {
    const brief = await composeMegaBrief(minimalEvidence(), "compact");
    assert.ok(brief.includes("Executive Design Diagnosis"), "Should include diagnosis");
  });
});

describe("composeMegaBrief with full evidence", () => {
  it("includes design tokens when present", async () => {
    const evidence = minimalEvidence();
    evidence.inspection.tokens = { colors: ["#ff6600", "#000"], cssVariables: { "--accent": "#ff6600" }, fonts: ["Inter"], spacingScale: ["8px", "16px"] };
    const brief = await composeMegaBrief(evidence, "compact");
    assert.ok(brief.includes("#ff6600") || brief.includes("#000"), "Should include extracted colors");
  });

  it("includes conversion plan paradigm", async () => {
    const evidence = minimalEvidence();
    evidence.conversionPlan.paradigm = "Trust first, convert later.";
    const brief = await composeMegaBrief(evidence, "compact");
    assert.ok(brief.includes("Trust first"), "Should include paradigm");
  });

  it("handles empty evidence gracefully", async () => {
    const empty = {
      url: "", niche: "", generatedAt: "",
      conversionPlan: {},
      inspection: {
        technologies: [], tokens: {}, gsapDataAttrs: {},
        semanticTags: {}, ctas: [],
        viewport: { width: 0, height: 0, bodyHeight: 0 },
        animationHints: [], sections: [], sectionStructure: [],
        motionRecipes: [], hoverEffects: [], webgl: {},
        risks: []
      }
    };
    try {
      const brief = await composeMegaBrief(empty, "compact");
      assert.ok(typeof brief === "string");
    } catch {
      assert.fail("Should not throw on empty evidence");
    }
  });
});
