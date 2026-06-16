// @ts-check

/**
 * @typedef {Object} Evidence
 * @property {string} url
 * @property {string} niche
 * @property {string} generatedAt
 * @property {Object} inspection
 * @property {Object} [visualRhythm]
 * @property {Object} [fidelityScore]
 * @property {number} fidelityScore.overall
 * @property {string} fidelityScore.label
 */

export function computeFidelityScore(evidence) {
  const { inspection, visualRhythm } = evidence;
  if (!inspection) return { overall: 0, label: "No data", missingEvidence: ["all modules"] };

  const scores = {};
  const missing = [];

  scores.visualCoverage = computeVisualCoverage(inspection);
  scores.domCoverage = computeDomCoverage(inspection);
  scores.tokenConfidence = computeTokenConfidence(inspection);
  scores.motionConfidence = computeMotionConfidence(inspection);
  scores.interactionConfidence = computeInteractionConfidence(inspection);
  scores.responsiveConfidence = computeResponsiveConfidence(inspection, visualRhythm);
  scores.assetConfidence = computeAssetConfidence(inspection);
  scores.cssConfidence = computeCssConfidence(inspection);
  scores.webglConfidence = computeWebglConfidence(inspection);

  const weights = {
    visualCoverage: 0.12,
    domCoverage: 0.12,
    tokenConfidence: 0.10,
    motionConfidence: 0.18,
    interactionConfidence: 0.12,
    responsiveConfidence: 0.08,
    assetConfidence: 0.08,
    cssConfidence: 0.10,
    webglConfidence: 0.10
  };

  let overall = 0;
  for (const [key, score] of Object.entries(scores)) {
    overall += score * (weights[key] || 0.1);
  }

  overall = Math.round(overall * 100);

  for (const [key, score] of Object.entries(scores)) {
    if (score < 0.3) {
      missing.push(key.replace(/([A-Z])/g, " ").toLowerCase());
    }
  }

  const label = getFidelityLabel(overall);

  return {
    overall,
    label,
    breakdown: scores,
    missingEvidence: missing
  };
}

function computeVisualCoverage(inspection) {
  const hasVisualEvidence = (inspection.visualEvidence || []).length > 0;
  const viewportCount = new Set((inspection.visualEvidence || []).map((e) => e.viewport)).size;

  if (!hasVisualEvidence) return 0;
  if (viewportCount >= 3) return 0.9;
  if (viewportCount >= 2) return 0.7;
  return 0.4;
}

function computeDomCoverage(inspection) {
  const hasSections = (inspection.sections || []).length > 0;
  const hasSemanticTags = Object.keys(inspection.semanticTags || {}).length > 0;
  const hasCtas = (inspection.ctas || []).length > 0;

  let score = 0;
  if (hasSections) score += 0.4;
  if (hasSemanticTags) score += 0.3;
  if (hasCtas) score += 0.3;
  return score;
}

function computeTokenConfidence(inspection) {
  const tokens = inspection.tokens || {};
  let score = 0;

  if ((tokens.colors || []).length > 3) score += 0.25;
  if ((tokens.fonts || []).length > 0) score += 0.25;
  if (Object.keys(tokens.cssVariables || {}).length > 0) score += 0.25;
  if ((tokens.spacingScale || []).length > 2) score += 0.25;

  return score;
}

function computeMotionConfidence(inspection) {
  const hasMotionHints = (inspection.animationHints || []).length > 0;
  const hasMotionRecipes = (inspection.motionRecipes || []).length > 0;

  if (hasMotionRecipes) return 0.9;
  if (hasMotionHints) return 0.4;
  return 0.1;
}

function computeInteractionConfidence(inspection) {
  const hasHoverEffects = (inspection.hoverEffects || []).length > 0;
  const effectCount = (inspection.hoverEffects || []).length;

  if (effectCount >= 10) return 0.9;
  if (effectCount >= 5) return 0.7;
  if (effectCount > 0) return 0.4;
  return 0.1;
}

function computeResponsiveConfidence(inspection, visualRhythm) {
  const viewportCount = new Set((inspection.visualEvidence || []).map((e) => e.viewport)).size;

  if (viewportCount >= 3) return 0.9;
  if (viewportCount >= 2) return 0.6;
  if (viewportCount >= 1) return 0.3;
  return 0;
}

function computeAssetConfidence(inspection) {
  const assets = inspection.assets;
  if (!assets) return 0;

  let score = 0;
  if ((assets.images || []).length > 0) score += 0.2;
  if ((assets.fonts || []).length > 0) score += 0.2;
  if ((assets.scripts || []).length > 0) score += 0.15;
  if ((assets.stylesheets || []).length > 0) score += 0.15;
  if (assets.inlineSvgCount > 0) score += 0.1;
  if (assets.canvasCount > 0) score += 0.1;
  if ((assets.videos || []).length > 0) score += 0.1;

  return Math.min(1, score);
}

function computeCssConfidence(inspection) {
  const cssFeatures = inspection.cssFeatures;
  if (!cssFeatures) return 0;

  const effectCount = (cssFeatures.effects || []).length;
  if (effectCount >= 8) return 0.9;
  if (effectCount >= 4) return 0.6;
  if (effectCount > 0) return 0.3;
  return 0;
}

function computeWebglConfidence(inspection) {
  const webgl = inspection.webgl;
  if (!webgl) return 0;

  if (webgl.webglCount > 0 && webgl.likely3dLibrary) return 0.9;
  if (webgl.webglCount > 0) return 0.6;
  if (webgl.canvasCount > 0) return 0.4;
  return 0.5;
}

function getFidelityLabel(score) {
  if (score >= 85) return "Surgical brief";
  if (score >= 70) return "Strong production brief";
  if (score >= 55) return "Useful brief";
  if (score >= 40) return "Rough inspiration";
  return "Minimal extraction";
}
