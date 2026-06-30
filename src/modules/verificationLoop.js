// Loop de verificación automática: generar → medir → regenerar secciones flojas
// Max 3 intentos por sección. Coste controlado por iteración parcial.

import { computeVisualSimilarity } from "./visualSimilarity.js";

const MAX_ITERATIONS = 3;
const FIDELITY_THRESHOLD = 0.80;
const DIMENSION_THRESHOLD = 0.75;

export async function runVerificationLoop(evidence, options = {}) {
  const {
    maxIterations = MAX_ITERATIONS,
    threshold = FIDELITY_THRESHOLD,
    onProgress = () => {},
  } = options;

  if (!evidence || !evidence.inspection) {
    return { success: false, reason: "No evidence", iterations: 0 };
  }

  const history = [];
  let currentEvidence = evidence;
  let iteration = 0;

  for (; iteration < maxIterations; iteration++) {
    onProgress({ step: "verify-loop", message: `Iteración ${iteration + 1}/${maxIterations}...` });

    // 1. Medir similitud
    const similarity = computeVisualSimilarity(currentEvidence);
    if (!similarity) {
      return { success: false, reason: "Similarity measurement failed", iterations: iteration, history };
    }

    history.push({
      iteration: iteration + 1,
      overall: similarity.overall,
      weakSections: similarity.weakSections,
      timestamp: similarity.timestamp,
    });

    // 2. ¿Todas las dimensiones ≥ threshold?
    const allPassing = !similarity.weakSections || similarity.weakSections.length === 0;
    const aboveThreshold = similarity.overall >= threshold * 100;

    if (allPassing && aboveThreshold) {
      return {
        success: true,
        iterations: iteration + 1,
        finalScore: similarity.overall,
        history,
        message: `Fidelidad ${similarity.overall}% supera umbral ${threshold * 100}%`,
      };
    }

    // 3. Si hay dimensiones débiles, regenerar secciones específicas
    if (similarity.weakSections && similarity.weakSections.length > 0) {
      const weakDims = similarity.weakSections.map(w => w.dimension);
      onProgress({
        step: "verify-loop",
        message: `Dimensiones débiles: ${weakDims.join(", ")}. Regenerando...`,
      });

      // Regenerar evidencia incompleta (simulado - en producción regeneraría el prompt/codegen)
      currentEvidence = await regenerateWeakDimensions(currentEvidence, weakDims);
    }

    // 4. Si es la última iteración y aún no pasa, entregar mejor versión
    if (iteration === maxIterations - 1) {
      return {
        success: false,
        iterations: iteration + 1,
        finalScore: similarity.overall,
        history,
        weakSections: similarity.weakSections,
        message: `No superó umbral tras ${maxIterations} iteraciones. Score final: ${similarity.overall}%`,
        limitExceeded: true,
      };
    }
  }

  return {
    success: false,
    iterations: iteration,
    history,
    message: "Loop completado sin alcanzar threshold",
  };
}

async function regenerateWeakDimensions(evidence, weakDimensions) {
  const insp = evidence.inspection || {};
  const newEvidence = JSON.parse(JSON.stringify(evidence));
  const newInsp = newEvidence.inspection || {};

  for (const dim of weakDimensions) {
    switch (dim) {
      case "structure": {
        if (!newInsp.sectionStructure) newInsp.sectionStructure = [];
        // Enriquecer secciones desde htmlSnippet cuando keyChildren son pobres
        for (const struct of newInsp.sectionStructure) {
          if (struct.htmlSnippet && struct.htmlSnippet.length > 50 &&
              (!struct.keyChildren || struct.keyChildren.length < 3)) {
            // Extraer etiquetas semánticas del htmlSnippet como keyChildren inferidos
            const tagMatches = [...struct.htmlSnippet.matchAll(/<(\w+)[^>]*>\s*([^<]{3,200}?)\s*<\//g)];
            struct.keyChildren = tagMatches.slice(0, 15).map(([_, tag, text]) => ({
              tag: ["h1","h2","h3","h4","h5","h6","p","a","button","img"].includes(tag) ? tag : "div",
              textContent: text.trim().slice(0, 150),
              classList: "",
              styles: {},
            }));
          }
        }
        break;
      }
      case "color": {
        if (!newEvidence.pixelPalette && insp.tokens?.colors) {
          newEvidence.pixelPalette = {
            background: insp.tokens.colors[0] || "#ffffff",
            dominant: insp.tokens.colors[1] || insp.tokens.colors[0] || "#000000",
            accent: insp.tokens.colors[2] || insp.tokens.colors[0] || "#3b82f6",
            palette: insp.tokens.colors.slice(0, 6).map(c => ({ hex: c, coverage: 0, luminance: 0.5, saturation: 50 })),
          };
        }
        // Extraer colores desde styleRules si no hay tokens
        if (!newEvidence.pixelPalette && insp.styles?.styleRules) {
          const colorProps = ["color", "background", "background-color"];
          const found = [];
          for (const rule of insp.styles.styleRules) {
            for (const prop of colorProps) {
              const val = rule.properties?.[prop];
              if (val && /^#[0-9a-f]{3,6}$|^rgb/i.test(val) && val !== "rgba(0, 0, 0, 0)") {
                found.push(val);
              }
            }
          }
          if (found.length > 0) {
            newEvidence.pixelPalette = {
              background: found.find(c => c !== "#ffffff") || found[0],
              dominant: found[0] || "#000000",
              accent: found[found.length > 1 ? 1 : 0] || "#3b82f6",
              palette: found.slice(0, 6).map(c => ({ hex: c, coverage: 0, luminance: 0.5, saturation: 50 })),
            };
          }
        }
        break;
      }
      case "motion": {
        const hints = insp.animationHints || [];
        if ((newInsp.motionRecipes || []).length === 0 && hints.length > 0) {
          newInsp.motionRecipes = hints.slice(0, 8).map((h, i) => ({
            type: "scroll-fade",
            target: h.selector || `[data-animation-${i}]`,
            range: "0-50",
            opacity: true,
            yDelta: 30,
            trigger: "intersection",
          }));
        }
        // Inferir motion desde transitions en styleRules
        if ((newInsp.motionRecipes || []).length === 0 && insp.styles?.styleRules) {
          const transitionRules = insp.styles.styleRules.filter(r =>
            r.properties?.transition || r.properties?.["transition-duration"]
          );
          if (transitionRules.length > 0) {
            newInsp.motionRecipes = transitionRules.slice(0, 5).map((r, i) => ({
              type: "hover",
              target: r.selector,
              range: "0-0",
              transition: r.properties?.transition || r.properties?.["transition-duration"],
            }));
          }
        }
        break;
      }
      case "perceptual": {
        // Marcar para captura visual adicional
        if (!newEvidence.visualEvidence) newEvidence.visualEvidence = [];
        break;
      }
      default:
        break;
    }
  }

  return newEvidence;
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
