// @ts-check

/**
 * @typedef {Object} Evidence
 * @property {string} url
 * @property {string} niche
 * @property {string} generatedAt
 * @property {Object} inspection
 * @property {Object} [visualRhythm]
 * @property {Object} [pixelPalette] - Paleta cuantizada a nivel pixel (median-cut sobre screenshots).
 * @property {string} [pixelPalette.background]
 * @property {string} [pixelPalette.dominant]
 * @property {string} [pixelPalette.accent]
 * @property {string[]} [pixelPalette.palette]
 * @property {Array} [pixelPalette.gradients]
 * @property {Object} [llmInterpretation] - Salida del intérprete LLM (visión multimodal).
 * @property {string} [llmInterpretation.visualDescription]
 * @property {Object} [fidelityScore]
 * @property {number} fidelityScore.overall
 * @property {string} fidelityScore.label
 */

// Pesos de las 11 dimensiones de fidelidad. Suma = 1.00 (verificada por test).
// Se recortó peso de motion (-0.04), css (-0.03), visualCoverage (-0.02) y
// tokenConfidence (-0.02) para ceder espacio a las dos dimensiones nuevas de
// fidelidad visual (pixelPalette 0.06 + visualDescription 0.05), que reflejan
// los mayores saltos de fidelidad del plan "Surgical Completa" (FASE 1).
export const FIDELITY_WEIGHTS = {
  visualCoverage: 0.10,
  domCoverage: 0.12,
  tokenConfidence: 0.08,
  motionConfidence: 0.14,
  interactionConfidence: 0.12,
  responsiveConfidence: 0.08,
  assetConfidence: 0.08,
  cssConfidence: 0.07,
  webglConfidence: 0.10,
  pixelPaletteConfidence: 0.06,
  visualDescriptionConfidence: 0.05
};

export function computeFidelityScore(evidence) {
  const { inspection, visualRhythm } = evidence;
  if (!inspection) return { overall: 0, label: "No data", missingEvidence: ["all modules"] };

  // FASE 1 del plan "Surgical Completa": la paleta a nivel pixel (colorQuantizer)
  // y la descripción visual multimodal (llmInterpreter) son los mayores saltos de
  // fidelidad, así que ahora aportan al score. Backward-compatible: ausentes = 0.
  const pixelPalette = evidence.pixelPalette || null;
  const visualDescription = evidence.llmInterpretation?.visualDescription || null;

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
  scores.pixelPaletteConfidence = computePixelPaletteConfidence(pixelPalette);
  scores.visualDescriptionConfidence = computeVisualDescriptionConfidence(visualDescription);

  let overall = 0;
  for (const [key, score] of Object.entries(scores)) {
    overall += score * (FIDELITY_WEIGHTS[key] || 0.1);
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

  // Umbrales realistas: el extractor rara vez detecta ≥10 hovers en sitios
  // reales, así que el tope (0.9) bajó a ≥5 y el suelo (0.1) subió a 0.3
  // para no castigar sitios buenos con pocos hovers detectados.
  if (effectCount >= 5) return 0.9;
  if (effectCount >= 3) return 0.7;
  if (effectCount > 0) return 0.5;
  return 0.3;
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

  // Dejar de premiar la ausencia ni de castigar un canvas suelto: la mayoría
  // de sitios buenos no usan WebGL, así que "nada" (0.7) ya casi iguala a
  // "canvas 2D" (0.5) en lugar de invertir el orden.
  if (webgl.webglCount > 0 && webgl.likely3dLibrary) return 0.9;
  if (webgl.webglCount > 0) return 0.6;
  if (webgl.canvasCount > 0) return 0.5;
  return 0.7;
}

export function computePixelPaletteConfidence(pixelPalette) {
  if (!pixelPalette || typeof pixelPalette !== "object") return 0;

  // Cuantización median-cut sobre screenshots: premiamos que se hayan podido
  // asignar los roles clave (background/dominant/accent) y que la paleta tenga
  // profundidad (varios colores) y degradados detectados (típico de sitios con
  // fotografía o texturas, que la paleta CSS declarada no alcanza a ver).
  let score = 0;
  if (pixelPalette.background) score += 0.3;
  if (pixelPalette.dominant) score += 0.25;
  if (pixelPalette.accent) score += 0.2;
  if ((pixelPalette.palette || []).length >= 3) score += 0.15;
  if ((pixelPalette.gradients || []).length >= 1) score += 0.1;

  return Math.min(1, score);
}

export function computeVisualDescriptionConfidence(visualDescription) {
  // Descripción textual destilada por el LLM a partir de screenshots reales
  // (visión multimodal). Una cadena corta o ausente suele ser fallback a modo
  // texto; una cadena larga indica que el modelo realmente "vio" el sitio.
  if (typeof visualDescription !== "string") return 0;
  const len = visualDescription.trim().length;
  if (len === 0) return 0;
  if (len >= 800) return 0.95; // descripción rica (composición + tipografía + mood)
  if (len >= 200) return 0.85; // descripción multimodal útil
  return 0.3; // parcial / fallback texto
}

function getFidelityLabel(score) {
  if (score >= 85) return "Surgical brief";
  if (score >= 70) return "Strong production brief";
  if (score >= 55) return "Useful brief";
  if (score >= 40) return "Rough inspiration";
  return "Minimal extraction";
}
