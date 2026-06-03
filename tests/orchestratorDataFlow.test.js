import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

describe("orchestrator data flow", () => {
  it("awaits timed evidence builders before composing evidence", async () => {
    const source = await readFile(new URL("../src/orchestrator.js", import.meta.url), "utf8");

    assert.match(source, /const knowledgeMatrix = await timedKnowledgeMatrix\(\)/);
    assert.match(source, /const conversionPlan = await timedConversionPlan\(/);
    assert.match(source, /const visualRhythm = await timedRhythm\(/);
    assert.match(source, /const designLanguage = await timedDesignLang\(/);
    assert.match(source, /const fidelityScore = await timedFidelity\(/);
    assert.doesNotMatch(source, /^\s*onProgress\?\.\(\{ step: "prompt"/m);
    assert.match(source, /config\.onProgress\?\.\(\{ step: "prompt"/);
  });
});
