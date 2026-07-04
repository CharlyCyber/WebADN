// Loop de verificación automática: generar → medir → regenerar secciones flojas
// Max 3 intentos por sección. Coste controlado por iteración parcial.

import { computeRenderedSimilarity } from "./renderedSimilarity.js";

export async function runVerificationLoop({ referenceIR, generatedIR, renderArtifacts, threshold = 80 }) {
  const similarity = computeRenderedSimilarity(referenceIR, generatedIR);

  if (similarity.overall >= threshold) {
    return { success: true, similarity, repairs: [] };
  }

  return {
    success: false,
    similarity,
    repairs: (similarity.weakSections || []).map(section => ({
      sectionId: section.sectionId,
      reason: section.reason,
      action: "REGENERATE_SECTION_FROM_IR"
    }))
  };
}

// Función helper para determinar si un sitio es CSS-DOM, WebGL o Canvas
export function classifySiteCategory(inspection) {
  const webgl = inspection.webgl || {};
  const assets = inspection.assets || {};
  const technologies = inspection.technologies || [];

  const hasWebGL = webgl.webglCount > 0;
  const hasThreeJS = technologies.includes("Three.js") || technologies.includes("React Three Fiber");
  const hasCanvas = assets.canvasCount > 0 || webgl.canvasCount > 0;
  const hasShaders = (webgl.shaderDetails || []).length > 0;
  const hasHeavyAnimation = (inspection.animationHints || []).length > 5;
  const hasScrollEffects = (inspection.motionRecipes || []).some(r => r.type === "sticky-pin" || r.type === "scroll-parallax");

  if (hasWebGL && hasThreeJS) return { category: "webgl", label: "WebGL 3D", maxFidelity: 0.75 };
  if (hasWebGL && hasShaders) return { category: "webgl", label: "WebGL Shaders", maxFidelity: 0.70 };
  if (hasCanvas && !hasWebGL) return { category: "canvas", label: "Canvas 2D", maxFidelity: 0.80 };
  if (hasScrollEffects && hasHeavyAnimation) return { category: "css-dom-premium", label: "CSS-DOM Premium", maxFidelity: 0.90 };
  if (hasScrollEffects) return { category: "css-dom", label: "CSS-DOM with Scroll", maxFidelity: 0.92 };

  return { category: "css-dom", label: "CSS-DOM Standard", maxFidelity: 0.85 };
}
