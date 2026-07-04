import { computeRenderedSimilarity } from "../src/modules/renderedSimilarity.js";
import assert from "node:assert/strict";
import { test } from "node:test";
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

function loadFixture(name) {
  return JSON.parse(readFileSync(join(__dirname, "fixtures", name), "utf8"));
}

test("good generated page scores higher than bad generated page", () => {
  const ref = loadFixture("reference-simple.json");
  const good = loadFixture("generated-simple-good.json");
  const bad = loadFixture("generated-simple-bad.json");

  assert.ok(
    computeRenderedSimilarity(ref, good).overall >
    computeRenderedSimilarity(ref, bad).overall
  );
});
