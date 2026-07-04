import { buildReferenceExperienceIR } from "../src/modules/referenceIrBuilder.js";
import { createEmptyReferenceExperienceIR } from "../src/shared/reference-experience-ir.js";
import assert from "node:assert/strict";
import { test } from "node:test";

test("creates empty IR with metadata", () => {
  const ir = createEmptyReferenceExperienceIR({ url: "https://example.com", niche: "tech" });
  assert.equal(ir.version, "1.0.0");
  assert.equal(ir.url, "https://example.com");
  assert.equal(ir.niche, "tech");
  assert.ok(ir.generatedAt);
  assert.deepEqual(ir.sections, []);
});

test("builds IR from evidence with sections", () => {
  const evidence = {
    url: "https://example.com",
    niche: "design",
    inspection: {
      sections: [{ role: "hero", tag: "section", height: 900, isFullViewport: true, confidence: 0.9 }],
      sectionStructure: [{
        layoutConfig: { display: "flex" },
        background: { color: "#000" },
        keyChildren: [{ tag: "h1", styles: { fontSize: "3rem" }, textContent: "Hello" }]
      }]
    }
  };

  const ir = buildReferenceExperienceIR(evidence);
  assert.equal(ir.sections.length, 1);
  assert.equal(ir.sections[0].role, "hero");
  assert.equal(ir.sections[0].children[0].role, "heading");
});
