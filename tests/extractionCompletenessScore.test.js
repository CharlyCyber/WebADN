import { computeExtractionCompletenessScore } from "../src/modules/extractionCompletenessScore.js";
import assert from "node:assert/strict";
import { test } from "node:test";

test("extraction completeness is not visual similarity", () => {
  const score = computeExtractionCompletenessScore({ inspection: null });
  assert.equal(score.overall, 0);
});
