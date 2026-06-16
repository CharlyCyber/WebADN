import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { buildCompactPrompt } from "../src/support/artifacts.js";

function makeEvidence(overrides = {}) {
  return {
    url: "https://reference-site.com",
    niche: "SaaS Startup",
    generatedAt: new Date().toISOString(),
    inspection: {
      tokens: {
        colors: ["#0a0a0a", "#ffffff", "#6366f1", "#22d3ee"],
        fonts: ["Inter", "JetBrains Mono"],
        cssVariables: { "--bg": "#0a0a0a", "--text": "#ffffff", "--accent": "#6366f1" },
        spacingScale: ["4px", "8px", "16px", "24px"],
      },
      motionRecipes: [
        { type: "scroll-parallax", target: ".hero-image", yDelta: -80, range: "0-50%" },
        { type: "sticky-pin", target: ".features-panel", range: "0-100%" },
        { type: "scroll-fade", target: ".cta-title", opacityRange: "0->1", range: "60-100%" },
      ],
      sections: [
        { role: "hero", tag: "header", isFullViewport: true },
        { role: "features", tag: "section", isFullViewport: false },
        { role: "cta", tag: "section", isFullViewport: false },
      ],
      sectionStructure: [
        { classList: "hero-section fade-in" },
        { classList: "grid-features" },
        { classList: "cta-wrapper" },
      ],
      ...overrides,
    },
  };
}

describe("buildCompactPrompt", () => {
  it("includes registerPlugin when final prompt section present", () => {
    const fullText = `# 15. Final Agent Prompt\n- Must registerPlugin(ScrollTrigger) for scroll animations\n- Use gsap timeline for hero entrance\n`;
    const result = buildCompactPrompt(fullText, makeEvidence(), "SaaS", "https://x.com");
    assert.ok(result.includes("registerPlugin"), "Should contain registerPlugin call");
  });

  it("includes CSS Variables from evidence tokens", () => {
    const result = buildCompactPrompt("", makeEvidence(), "SaaS", "https://x.com");
    assert.ok(result.includes("--bg"), "Should contain css var --bg");
    assert.ok(result.includes("--accent"), "Should contain css var --accent");
  });

  it("includes GSAP motion recipe with target selector", () => {
    const result = buildCompactPrompt("", makeEvidence(), "SaaS", "https://x.com");
    assert.ok(result.includes(".hero-image"), "Should contain hero-image target");
    assert.ok(result.includes("parallax"), "Should describe parallax");
  });

  it("includes niche in fallback prompt", () => {
    const result = buildCompactPrompt("", makeEvidence(), "Agency XYZ", "https://x.com");
    assert.ok(result.includes("Agency XYZ"), "Niche should appear in output");
  });

  it("fallback prompt references niche and extraction data", () => {
    const result = buildCompactPrompt("", makeEvidence(), "Moto Shop", "https://x.com");
    assert.ok(result.includes("Moto Shop"), "Niche should appear");
    assert.ok(result.includes("Design Tokens") || result.includes("section"), "Should include structure");
  });

  it("includes section skeleton with role and tag", () => {
    const result = buildCompactPrompt("", makeEvidence(), "SaaS", "https://x.com");
    assert.ok(result.includes("HERO"), "Should contain HERO section role");
    assert.ok(result.includes("<header>"), "Should contain header tag");
  });

  it("stays under 12KB when given minimal input", () => {
    const result = buildCompactPrompt("", makeEvidence(), "SaaS", "https://x.com");
    assert.ok(result.length < 12000, `Compact prompt oversize: ${result.length} bytes`);
  });

  it("handles empty evidence gracefully", () => {
    const result = buildCompactPrompt("", {}, "Test", "https://x.com");
    assert.ok(typeof result === "string");
    assert.ok(result.length > 0);
  });
});
