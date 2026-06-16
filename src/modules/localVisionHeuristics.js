import { isDarkColor } from "../support/domUtils.js";

export function classifyDesignLanguage(evidence) {
  const { inspection, visualRhythm } = evidence;
  if (!inspection) return { label: "unknown", confidence: 0, signals: [] };
  
  const cssFeatures = evidence.cssFeatures || inspection.cssFeatures;

  const signals = [];
  const scores = {};

  const colors = inspection.tokens?.colors || [];
  const darkColors = colors.filter((c) => isDarkColor(c)).length;
  const lightColors = colors.length - darkColors;
  const isDarkTheme = darkColors > lightColors * 1.2;
  const isLightTheme = lightColors > darkColors * 1.5;

  const hasBackdropFilter = (cssFeatures?.effects || []).some((e) => e.feature === "backdrop-filter");
  const hasClipPath = (cssFeatures?.effects || []).some((e) => e.feature === "clip-path");
  const hasMaskImage = (cssFeatures?.effects || []).some((e) => e.feature === "mask-image");
  const hasBlendMode = (cssFeatures?.effects || []).some((e) => e.feature === "mix-blend-mode");
  const hasSticky = (cssFeatures?.effects || []).some((e) => e.feature === "position: sticky");
  const hasAnimation = (cssFeatures?.effects || []).some((e) => e.feature === "animation" || e.feature === "@keyframes");
  const hasWebGL = inspection.webgl?.webglCount > 0;
  const complexityScore = cssFeatures?.complexityScore || 0;

  const sectionCount = (inspection.sections || []).length;
  const hasFullViewportSections = (inspection.sections || []).some((s) => s.isFullViewport);
  const hasCanvas = (inspection.assets?.canvasCount || 0) > 0;
  const hasInlineSvg = (inspection.assets?.inlineSvgCount || 0) > 2;
  const hasVideo = (inspection.assets?.videos || []).length > 0;

  const motionRecipes = inspection.motionRecipes || [];
  const hasParallax = motionRecipes.some((r) => r.type === "scroll-parallax");
  const hasStickyMotion = motionRecipes.some((r) => r.type === "sticky-pin");
  const hasScrollFade = motionRecipes.some((r) => r.type === "scroll-fade");

  const contrastMood = visualRhythm?.contrastMoodByScroll || [];
  const moodShifts = contrastMood.filter((m, i) => i > 0 && m.mood !== contrastMood[i - 1].mood).length;

  if (isDarkTheme && hasWebGL && hasAnimation) {
    scores["cinematic dark"] = (scores["cinematic dark"] || 0) + 3;
    signals.push("dark palette with WebGL and animation");
  }

  if (isLightTheme && complexityScore < 30 && !hasWebGL) {
    scores["luxury minimal"] = (scores["luxury minimal"] || 0) + 3;
    signals.push("light palette, low CSS complexity, no WebGL");
  }

  if (hasStickyMotion && hasFullViewportSections && moodShifts > 0) {
    scores["editorial brutalism"] = (scores["editorial brutalism"] || 0) + 2;
    signals.push("sticky scroll choreography with mood shifts");
  }

  if (hasParallax && hasWebGL && complexityScore > 50) {
    scores["kinetic tech"] = (scores["kinetic tech"] || 0) + 3;
    signals.push("parallax motion with WebGL and high CSS complexity");
  }

  if (isLightTheme && !hasWebGL && hasAnimation && sectionCount > 4) {
    scores["neo-institutional"] = (scores["neo-institutional"] || 0) + 2;
    signals.push("light, animated, multi-section institutional layout");
  }

  if (hasCanvas && hasInlineSvg && complexityScore > 40) {
    scores["playful 3D"] = (scores["playful 3D"] || 0) + 2;
    signals.push("canvas and inline SVG with moderate complexity");
  }

  if (!hasWebGL && !hasCanvas && hasAnimation && sectionCount >= 4) {
    scores["product lab"] = (scores["product lab"] || 0) + 2;
    signals.push("DOM-only animations, structured sections");
  }

  if (hasClipPath || hasMaskImage) {
    scores["editorial brutalism"] = (scores["editorial brutalism"] || 0) + 1;
    signals.push("clip-path or mask-image for editorial reveals");
  }

  if (hasBlendMode) {
    scores["kinetic tech"] = (scores["kinetic tech"] || 0) + 1;
    signals.push("mix-blend-mode for layered effects");
  }

  if (hasBackdropFilter) {
    scores["luxury minimal"] = (scores["luxury minimal"] || 0) + 1;
    signals.push("backdrop-filter for glass surfaces");
  }

  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const topLabel = sorted[0]?.[0] || "contemporary digital";
  const topScore = sorted[0]?.[1] || 0;
  const maxPossible = Math.max(1, Object.values(scores).reduce((a, b) => a + b, 0));
  const confidence = Math.round((topScore / maxPossible) * 100) / 100;

  return {
    label: topLabel,
    confidence: Math.min(0.85, Math.max(0.3, confidence)),
    signals: [...new Set(signals)].slice(0, 6),
    allScores: Object.fromEntries(sorted)
  };
}


