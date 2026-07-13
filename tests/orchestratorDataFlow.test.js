import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

describe("orchestrator data flow", () => {
  it("uses declarative pipeline with sequential stages", async () => {
    const source = await readFile(new URL("../src/orchestrator.js", import.meta.url), "utf8");

    assert.match(source, /const pipeline = \[/);
    assert.match(source, /name: 'analysis'.*fn: runAnalysis/);
    assert.match(source, /name: 'pixelAndSpacing'.*fn: runPixelAndSpacing/);
    assert.match(source, /name: 'designAndFidelity'.*fn: runDesignAndFidelity/);
    assert.match(source, /name: 'generatePrompt'.*fn: runGeneratePrompt/);
    assert.match(source, /config\.onProgress\?\.\(\{ step: "prompt"/);
    assert.doesNotMatch(source, /const timings = \{\};/);
  });

  it("parallelizes pixel palette and spacing scale extraction", async () => {
    const source = await readFile(new URL("../src/orchestrator.js", import.meta.url), "utf8");

    assert.match(source, /Promise\.all\(tasks\)/);
    assert.match(source, /extractPixelPalette/);
    assert.match(source, /computeSpacingScale/);
  });
});
