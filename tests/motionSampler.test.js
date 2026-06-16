import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { inferMotionRecipes } from "../src/modules/motionSampler.js";

function makeSample(scrollPct, elements) {
  return {
    scrollPercent: scrollPct, scrollY: scrollPct * 50,
    elements: elements.map(e => ({
      selector: e.selector, tag: e.tag,
      boundingBox: e.boundingBox || { x: 0, y: e.y, width: 200, height: 100 },
      opacity: e.opacity ?? 1,
      transformMatrix: { scaleX: e.scale || 1, scaleY: e.scale || 1, translateX: 0, translateY: 0 },
      visibleRatio: 1, position: e.position || "static",
      transform: e.transform || null
    }))
  };
}

describe("inferMotionRecipes", () => {
  it("returns empty for no samples", () => {
    const result = inferMotionRecipes([], [{ selector: ".a", tag: "div", area: 100 }]);
    assert.equal(result.length, 0);
  });

  it("returns empty for no candidates", () => {
    const samples = [makeSample(0, []), makeSample(50, [])];
    const result = inferMotionRecipes(samples, []);
    assert.equal(result.length, 0);
  });

  it("detects scroll-parallax from yDelta > 30", () => {
    const selector = ".hero-visual";
    const samples = [
      makeSample(0, [{ selector, tag: "div", y: 800 }]),
      makeSample(25, [{ selector, tag: "div", y: 600 }]),
      makeSample(50, [{ selector, tag: "div", y: 400 }]),
      makeSample(75, [{ selector, tag: "div", y: 200 }]),
    ];
    const result = inferMotionRecipes(samples, [{ selector, tag: "div", area: 100000 }]);
    assert.ok(result.length > 0, "Should detect motion");
    const parallax = result.find(r => r.type === "scroll-parallax");
    assert.ok(parallax, "Should detect parallax");
    assert.ok(parallax.target.includes(".hero-visual"));
  });

  it("detects sticky-pin from position sticky", () => {
    const selector = ".features-panel";
    const samples = [
      makeSample(0, [{ selector, tag: "section", y: 100, position: "sticky" }]),
      makeSample(30, [{ selector, tag: "section", y: 100, position: "sticky" }]),
      makeSample(60, [{ selector, tag: "section", y: 100, position: "sticky" }]),
    ];
    const result = inferMotionRecipes(samples, [{ selector, tag: "section", area: 50000 }]);
    const sticky = result.find(r => r.type === "sticky-pin");
    assert.ok(sticky, "Should detect sticky-pin");
  });

  it("detects scroll-fade from opacity change", () => {
    const selector = ".fade-title";
    const samples = [
      makeSample(0, [{ selector, tag: "h2", y: 500, opacity: 1 }]),
      makeSample(30, [{ selector, tag: "h2", y: 300, opacity: 0.6 }]),
      makeSample(60, [{ selector, tag: "h2", y: 100, opacity: 0.2 }]),
    ];
    const result = inferMotionRecipes(samples, [{ selector, tag: "h2", area: 10000 }]);
    const fade = result.find(r => r.type === "scroll-fade");
    assert.ok(fade, "Should detect scroll-fade");
    assert.ok(fade.opacityRange.includes("0.2"), "Should capture final opacity");
  });

  it("returns empty for less than 3 sample points", () => {
    const selector = ".brief-element";
    const samples = [
      makeSample(0, [{ selector, tag: "div", y: 100 }]),
      makeSample(50, [{ selector, tag: "div", y: 90 }]),
    ];
    const result = inferMotionRecipes(samples, [{ selector, tag: "div", area: 100 }]);
    assert.equal(result.length, 0);
  });
});
