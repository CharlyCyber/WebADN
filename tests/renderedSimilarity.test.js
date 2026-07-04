import { computeRenderedSimilarity } from "../src/modules/renderedSimilarity.js";
import assert from "node:assert/strict";
import { test } from "node:test";

function makeIR(sections) {
  return {
    version: "1.0.0",
    url: "https://example.com",
    niche: "test",
    generatedAt: new Date().toISOString(),
    sections: sections.map((s, i) => ({
      id: `section-${i}`,
      index: i,
      role: s.role || "unknown",
      tag: s.tag || "section",
      height: s.height || null,
      isFullViewport: Boolean(s.isFullViewport),
      layout: s.layout || {},
      background: s.background || {},
      typography: s.typography || [],
      children: s.children || [],
      motionRefs: [],
      sourceConfidence: 1
    })),
    globalTokens: {},
    responsive: {},
    motion: [],
    interactions: [],
    assets: [],
    legalPolicy: { copyText: false, copyAssets: false, copyClassNames: false, copyCssVerbatim: false }
  };
}

test("identical IRs score 100", () => {
  const ir = makeIR([{ role: "hero", tag: "section", height: 900, isFullViewport: true }]);
  const result = computeRenderedSimilarity(ir, ir);
  assert.equal(result.overall, 100);
});

test("different section orders reduce score", () => {
  const ref = makeIR([{ role: "hero" }, { role: "footer" }]);
  const gen = makeIR([{ role: "footer" }, { role: "hero" }]);
  const identical = computeRenderedSimilarity(ref, ref);
  const result = computeRenderedSimilarity(ref, gen);
  assert.ok(result.overall < identical.overall);
});

test("returns weakSections for mismatches", () => {
  const ref = makeIR([{ role: "hero" }, { role: "showcase" }]);
  const gen = makeIR([{ role: "hero" }, { role: "footer" }]);
  const result = computeRenderedSimilarity(ref, gen);
  assert.ok(result.weakSections.length > 0);
});
