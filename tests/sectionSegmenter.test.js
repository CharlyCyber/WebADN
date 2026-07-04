import { segmentSections } from "../src/modules/sectionSegmenter.js";
import assert from "node:assert/strict";
import { test, mock } from "node:test";

test("segmentSections calls page.evaluate", async () => {
  const fakeSections = [
    { index: 0, selector: "section.hero", tag: "section", top: 0, height: 900, width: 1440, text: "hero", headings: ["Welcome"], mediaCount: 1 }
  ];
  const page = { evaluate: mock.fn(() => Promise.resolve(fakeSections)) };
  const result = await segmentSections(page);
  assert.equal(result.length, 1);
  assert.equal(result[0].tag, "section");
  assert.ok(page.evaluate.mock.calls.length > 0);
});
