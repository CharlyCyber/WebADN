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

describe("fidelity propagation — Bug A/B/C fixes", () => {
  it("Bug A: fidelityScore=85 suppresses BAJA CONFIANZA prefix", async () => {
    const evidence = minimalEvidence();
    evidence.fidelityScore = { overall: 85, label: "Surgical brief", breakdown: { motionConfidence: 0.9, visualCoverage: 0.9, tokenConfidence: 1 } };
    const brief = await composeMegaBrief(evidence, "compact");
    assert.ok(!brief.includes("BAJA CONFIANZA"), "Score 85 should not produce BAJA CONFIANZA");
    assert.ok(!brief.includes("DATOS PARCIALES"), "Score 85 should not produce DATOS PARCIALES");
  });

  it("Bug A: fidelityScore=0 triggers BAJA CONFIANZA prefix", async () => {
    const evidence = minimalEvidence();
    evidence.fidelityScore = { overall: 0, label: "No data", breakdown: {} };
    const brief = await composeMegaBrief(evidence, "compact");
    assert.ok(brief.includes("BAJA CONFIANZA"), "Score 0 should produce BAJA CONFIANZA");
  });

  it("Bug B: cssFeatures complexityScore propagates to executive diagnosis", async () => {
    const evidence = minimalEvidence();
    evidence.inspection.cssFeatures = { complexityScore: 53, effects: [{ feature: "clip-path", count: 3, category: "shaping", usage: "editorial reveals" }] };
    const brief = await composeMegaBrief(evidence, "compact");
    assert.match(brief, /CSS Complexity[^0-9]*53/, "CSS Complexity should show score 53");
  });

  it("Bug B: cssFeatures.effects appear in reference profile", async () => {
    const evidence = minimalEvidence();
    evidence.inspection.cssFeatures = { complexityScore: 53, effects: [{ feature: "clip-path", count: 3, category: "shaping", usage: "editorial reveals" }] };
    const brief = await composeMegaBrief(evidence, "compact");
    assert.ok(brief.includes("clip-path"), "clip-path effect should appear in brief");
  });

  it("Bug C: designLanguage passes through stably (not reclassified)", async () => {
    const evidence = minimalEvidence();
    evidence.designLanguage = { label: "editorial brutalism", confidence: 0.38, signals: ["sticky scroll", "canvas"], allScores: { "editorial brutalism": 3, "luxury minimal": 1 } };
    const brief = await composeMegaBrief(evidence, "compact");
    assert.ok(brief.includes("editorial brutalism"), "designLanguage label should pass through unchanged");
    assert.ok(brief.includes("confidence: 38%"), "designLanguage confidence should pass through");
  });
});
