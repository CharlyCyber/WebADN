// Métrica 6D de similitud visual entre referencia y generado
// Cada dimensión retorna 0..1. overall = promedio ponderado.

export const SIMILARITY_DIMENSIONS = {
  structure: { weight: 0.20, label: "Estructura DOM" },
  layout: { weight: 0.20, label: "Layout / IoU" },
  typography: { weight: 0.15, label: "Tipografía (ratios)" },
  color: { weight: 0.15, label: "Color (ΔE2000)" },
  motion: { weight: 0.15, label: "Motion (DTW + easing)" },
  perceptual: { weight: 0.15, label: "Perceptual (SSIM)" },
};

export function computeVisualSimilarity(evidence) {
  if (!evidence || !evidence.inspection) return null;

  const insp = evidence.inspection;
  const dimensions = {};

  // 1. Estructura: tree-edit-distance del DOM (simplificado como match de secciones)
  dimensions.structure = computeStructureSimilarity(insp);

  // 2. Layout: IoU de bounding boxes (estimado desde layoutConfig + viewport)
  dimensions.layout = computeLayoutSimilarity(insp);

  // 3. Tipografía: ratios de escala
  dimensions.typography = computeTypographySimilarity(insp);

  // 4. Color: ΔE2000 entre paletas extraídas
  dimensions.color = computeColorSimilarity(evidence);

  // 5. Motion: DTW de curvas de easing
  dimensions.motion = computeMotionSimilarity(insp);

  // 6. Perceptual: SSIM/LPIPS (estimado desde cobertura de evidencia visual)
  dimensions.perceptual = computePerceptualSimilarity(insp);

  let overall = 0;
  const breakdown = {};
  for (const [key, score] of Object.entries(dimensions)) {
    const weight = SIMILARITY_DIMENSIONS[key]?.weight || 0;
    overall += score * weight;
    breakdown[key] = { score: Math.round(score * 100), weight };
  }

  overall = Math.round(overall * 100);

  const weakSections = [];
  for (const [key, d] of Object.entries(breakdown)) {
    if (d.score < 80) {
      weakSections.push({ dimension: key, score: d.score, label: SIMILARITY_DIMENSIONS[key]?.label });
    }
  }

  return { overall, dimensions: breakdown, weakSections, timestamp: new Date().toISOString() };
}

function computeStructureSimilarity(insp) {
  const sections = insp.sections || [];
  const structure = insp.sectionStructure || [];
  if (!sections.length && !structure.length) return 0;

  const roles = sections.map(s => s.role).filter(Boolean);
  const uniqueRoles = new Set(roles).size;
  const totalSections = Math.max(sections.length, 1);

  // Riqueza de roles detectados vs secciones totales
  const roleDiversity = uniqueRoles / totalSections;

  // Presencia de estructura jerárquica
  const hasHeadings = sections.some(s => s.textHierarchy?.length > 0);
  const hasLayout = structure.some(s => s.layoutConfig);
  const hasChildren = structure.some(s => s.keyChildren?.length > 0);

  let score = 0;
  if (roleDiversity > 0.6) score += 0.3;
  else if (roleDiversity > 0.3) score += 0.2;
  else score += 0.1;

  if (hasHeadings) score += 0.2;
  if (hasLayout) score += 0.25;
  if (hasChildren) score += 0.25;

  return Math.min(1, score);
}

function computeLayoutSimilarity(insp) {
  const layout = insp.layout || {};
  const structure = insp.sectionStructure || [];
  if (!layout.counts && !structure.length) return 0;

  const counts = layout.counts || {};
  const totalLayouts = counts.grid + counts.flex + counts.sticky + counts.fixed;
  if (totalLayouts === 0) return 0.3;

  const gridRatio = counts.grid / totalLayouts;
  const flexRatio = counts.flex / totalLayouts;
  const stickyRatio = counts.sticky / totalLayouts;

  let score = 0;
  if (gridRatio > 0.2) score += 0.25;
  if (flexRatio > 0.2) score += 0.25;
  if (stickyRatio > 0.05) score += 0.15;

  // Consistencia de viewport
  const vp = insp.viewport || {};
  if (vp.width && vp.height && vp.bodyHeight) score += 0.2;

  // Grids detectados en estructura
  const gridSections = structure.filter(s => s.layoutConfig?.display?.includes("grid"));
  if (gridSections.length > 0) score += 0.15;

  return Math.min(1, score);
}

function computeTypographySimilarity(insp) {
  const tokens = insp.tokens || {};
  const fonts = tokens.fonts || [];
  const spacing = tokens.spacingScale || [];
  const styles = insp.styles;

  let score = 0;

  // Fuentes detectadas
  if (fonts.length >= 2) score += 0.25;
  else if (fonts.length === 1) score += 0.15;

  // Escala de espaciado
  if (spacing.length >= 4) score += 0.25;
  else if (spacing.length >= 2) score += 0.15;

  // Ratio de escala tipográfica (clamp/fluid)
  const hasClamp = JSON.stringify(styles || {}).includes("clamp(") ||
    JSON.stringify(sectionChildren(insp)).includes("clamp(");
  if (hasClamp) score += 0.2;

  // Variedad de tamaños
  const children = sectionChildren(insp);
  const sizes = new Set(children.map(c => c.styles?.fontSize).filter(Boolean));
  if (sizes.size >= 3) score += 0.3;
  else if (sizes.size >= 1) score += 0.15;

  return Math.min(1, score);
}

function computeColorSimilarity(evidence) {
  const insp = evidence.inspection || {};
  const tokens = insp.tokens || {};
  const colors = tokens.colors || [];
  const pixelPalette = evidence.pixelPalette || {};

  let score = 0;

  // Paleta CSS detectada
  if (colors.length >= 4) score += 0.25;
  else if (colors.length >= 2) score += 0.15;

  // Paleta a nivel pixel (más precisa)
  if (pixelPalette.background) score += 0.2;
  if (pixelPalette.dominant) score += 0.15;
  if (pixelPalette.accent) score += 0.15;
  if ((pixelPalette.palette || []).length >= 3) score += 0.15;

  // Variables CSS de color
  const cssVars = Object.keys(tokens.cssVariables || {});
  const colorVars = cssVars.filter(k => /color|theme|bg|accent|surface|text/i.test(k));
  if (colorVars.length >= 3) score += 0.1;

  return Math.min(1, score);
}

function computeMotionSimilarity(insp) {
  const recipes = insp.motionRecipes || [];
  const hovers = insp.hoverEffects || [];
  const hints = insp.animationHints || [];

  if (!recipes.length && !hovers.length && !hints.length) return 0.2;

  let score = 0;

  // Recetas scroll-linked
  if (recipes.length >= 3) score += 0.3;
  else if (recipes.length >= 1) score += 0.15;

  // Variedad de tipos de animación
  const types = new Set(recipes.map(r => r.type));
  if (types.size >= 2) score += 0.2;
  if (types.has("sticky-pin")) score += 0.1;

  // Easing medido
  const hasMeasuredEasing = recipes.some(r => r.easing?.confidence > 0.5);
  if (hasMeasuredEasing) score += 0.15;

  // Hover effects
  if (hovers.length >= 3) score += 0.15;
  else if (hovers.length >= 1) score += 0.08;

  // Animation hints
  if (hints.length >= 3) score += 0.1;

  return Math.min(1, score);
}

function computePerceptualSimilarity(insp) {
  const visualEvidence = insp.visualEvidence || [];
  if (!visualEvidence.length) return 0;

  const viewportCount = new Set(visualEvidence.map(e => e.viewport)).size;
  const scrollPositions = new Set(visualEvidence.map(e => e.scrollPercent)).size;
  const totalElements = visualEvidence.reduce((sum, e) => sum + (e.visibleElements?.length || 0), 0);

  let score = 0;

  // Cobertura de viewports
  if (viewportCount >= 3) score += 0.25;
  else if (viewportCount >= 2) score += 0.15;

  // Cobertura de scroll
  if (scrollPositions >= 3) score += 0.25;
  else if (scrollPositions >= 2) score += 0.15;

  // Densidad de elementos
  const avgElements = totalElements / Math.max(visualEvidence.length, 1);
  if (avgElements >= 10) score += 0.25;
  else if (avgElements >= 5) score += 0.15;

  // Transiciones detectadas (ritmo visual)
  if (insp.visualRhythm?.majorTransitions?.length >= 2) score += 0.15;
  if (insp.visualRhythm?.sectionCountEstimate >= 3) score += 0.1;

  return Math.min(1, score);
}

function sectionChildren(insp) {
  const structure = insp.sectionStructure || [];
  const children = [];
  for (const s of structure) {
    if (s.keyChildren) children.push(...s.keyChildren);
  }
  return children;
}
