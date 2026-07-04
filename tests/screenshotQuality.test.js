import { analyzeScreenshotPixels } from "../src/modules/screenshotQuality.js";
import assert from "node:assert/strict";
import { test } from "node:test";

test("rejects null sample", () => {
  const result = analyzeScreenshotPixels(null);
  assert.equal(result.valid, false);
  assert.equal(result.reason, "NO_PIXEL_SAMPLE");
});

test("rejects empty colors array", () => {
  const result = analyzeScreenshotPixels({ colors: [] });
  assert.equal(result.valid, false);
  assert.equal(result.reason, "NO_PIXEL_SAMPLE");
});

test("rejects flat screen with single color", () => {
  const result = analyzeScreenshotPixels({ colors: ["#ffffff", "#ffffff"], dominantRatio: 0.99 });
  assert.equal(result.valid, false);
  assert.equal(result.reason, "FLAT_COLOR_SCREEN");
});

test("accepts screen with diverse colors", () => {
  const result = analyzeScreenshotPixels({ colors: ["#ff0000", "#00ff00", "#0000ff", "#ffffff"], dominantRatio: 0.4 });
  assert.equal(result.valid, true);
  assert.equal(result.reason, "OK");
});
