import { classifyDesignLanguage } from "./localVisionHeuristics.js";
import { buildNicheTranslationTable } from "./nicheAdapter.js";

const RESET_SELECTOR_PATTERNS = [
  /^(\*|html)$/,
  /^body$/,
  /^:root$/,
  /^\.w-/,
];

const TRIM_LEVELS = {
  compact: {
    MAX_COLORS: 4, MAX_SECTIONS: 5, MAX_MOTION: 3, MAX_HOVER: 3, MAX_CTAS: 2,
    MAX_SCRIPTS: 4, MAX_STYLESHEETS: 3, MAX_CSS_RULES: 20, MAX_CSS_VARS: 12,
    MAX_FONTS: 4, MAX_SPACING: 6, MAX_KEYFRAMES: 3, MAX_FONT_FACES: 2,
    MAX_MEDIA_QUERIES: 4, MAX_ANIMATION_HINTS: 5, MAX_RISKS: 4,
    MAX_SECTION_STRUCTURE: 3, MAX_KEY_CHILDREN: 8,
    CHILDREN_STYLES: ["fontSize", "fontWeight", "color", "display"],
    HTML_SNIPPET_LENGTH: 600, TEXT_CONTENT_LENGTH: 60, MAX_VISUAL_EVIDENCE: 3,
    MAX_IMAGES: 5, MAX_VIDEOS: 1, MAX_FONTS_ASSETS: 3, MAX_3D_MODELS: 1,
    MAX_HEAVY_ASSETS: 2, MAX_CSS_BG_IMAGES: 3,
  },
  standard: {
    MAX_COLORS: 8, MAX_SECTIONS: 12, MAX_MOTION: 8, MAX_HOVER: 8, MAX_CTAS: 6,
    MAX_SCRIPTS: 12, MAX_STYLESHEETS: 8, MAX_CSS_RULES: 60, MAX_CSS_VARS: 30,
    MAX_FONTS: 10, MAX_SPACING: 14, MAX_KEYFRAMES: 8, MAX_FONT_FACES: 8,
    MAX_MEDIA_QUERIES: 12, MAX_ANIMATION_HINTS: 15, MAX_RISKS: 10,
    MAX_SECTION_STRUCTURE: 8, MAX_KEY_CHILDREN: 20,
    CHILDREN_STYLES: ["fontSize", "fontWeight", "fontFamily", "color", "backgroundColor", "display", "padding", "margin", "lineHeight", "letterSpacing", "textTransform", "textAlign"],
    HTML_SNIPPET_LENGTH: 2000, TEXT_CONTENT_LENGTH: 120, MAX_VISUAL_EVIDENCE: 8,
    MAX_IMAGES: 15, MAX_VIDEOS: 5, MAX_FONTS_ASSETS: 8, MAX_3D_MODELS: 3,
    MAX_HEAVY_ASSETS: 4, MAX_CSS_BG_IMAGES: 8,
  },
  surgical: {
    MAX_COLORS: 24, MAX_SECTIONS: 30, MAX_MOTION: 40, MAX_HOVER: 30, MAX_CTAS: 20,
    MAX_SCRIPTS: 40, MAX_STYLESHEETS: 20, MAX_CSS_RULES: 500, MAX_CSS_VARS: 120,
    MAX_FONTS: 20, MAX_SPACING: 30, MAX_KEYFRAMES: 40, MAX_FONT_FACES: 20,
    MAX_MEDIA_QUERIES: 30, MAX_ANIMATION_HINTS: 50, MAX_RISKS: 30,
    MAX_SECTION_STRUCTURE: 30, MAX_KEY_CHILDREN: 60,
    CHILDREN_STYLES: ["fontSize", "fontWeight", "fontFamily", "color", "backgroundColor", "display", "padding", "margin", "lineHeight", "letterSpacing", "textTransform", "textAlign", "borderRadius", "boxShadow", "opacity", "backdropFilter", "clipPath"],
    HTML_SNIPPET_LENGTH: 8000, TEXT_CONTENT_LENGTH: 400, MAX_VISUAL_EVIDENCE: 20,
    MAX_IMAGES: 60, MAX_VIDEOS: 15, MAX_FONTS_ASSETS: 20, MAX_3D_MODELS: 10,
    MAX_HEAVY_ASSETS: 15, MAX_CSS_BG_IMAGES: 30,
  }
};

function yieldToEventLoop() {
  return new Promise((resolve) => setImmediate(resolve));
}

function classifyColorsByRole(inspection) {
  const seen = {};
  const add = (color, role) => { if (color && color !== "rgba(0, 0, 0, 0)" && color !== "transparent") { seen[color] = seen[color] || { count: 0, roles: new Set() }; seen[color].count++; seen[color].roles.add(role); } };

  const cssVars = inspection.tokens?.cssVariables || {};
  for (const [key, val] of Object.entries(cssVars)) {
    if (/#[0-9a-fA-F]{3,8}\b|rgba?\(|hsla?\(/.test(val)) {
      const role = key.includes("bg") || key.includes("backdrop") || key.includes("surface") ? "Background"
        : key.includes("text") || key.includes("font") ? "Text"
        : key.includes("accent") || key.includes("primary") ? "Accent"
        : key.includes("border") || key.includes("stroke") ? "Border"
        : key.includes("hover") || key.includes("active") ? "Hover"
        : key.includes("success") || key.includes("error") || key.includes("warning") ? "Semantic"
        : "Token";
      add(val, role);
    }
  }

  const structure = inspection.sectionStructure || [];
  for (const section of structure) {
    if (section.background?.color) add(section.background.color, "Background");
    const children = section.keyChildren || [];
    for (const child of children) {
      if (child.styles?.color) add(child.styles.color, "Text");
      if (child.styles?.backgroundColor) add(child.styles.backgroundColor, "Surface");
    }
  }

  const rules = inspection.styles?.styleRules || [];
  for (const rule of rules.slice(0, 80)) {
    for (const [prop, val] of Object.entries(rule.properties)) {
      if (/#[0-9a-fA-F]{3,8}\b|rgba?\(|hsla?\(/.test(val)) {
        const role = prop === "background-color" || prop === "background" ? "Background"
          : prop === "color" ? "Text"
          : prop === "border-color" || prop === "outline-color" ? "Border"
          : prop === "accent-color" ? "Accent"
          : "Declared";
        add(val, role);
      }
    }
  }

  return Object.entries(seen)
    .sort((a, b) => b[1].count - a[1].count)
    .slice(0, 12)
    .map(([color, info]) => {
      const primaryRole = [...info.roles].sort((a, b) => {
        const order = ["Background", "Text", "Accent", "Surface", "Border", "Token", "Hover", "Semantic", "Declared"];
        return order.indexOf(a) - order.indexOf(b);
      })[0];
      return { color, role: primaryRole, frequency: info.count };
    });
}

function extractTypeScale(inspection) {
  const tagSizes = {};
  const structure = inspection.sectionStructure || [];
  for (const section of structure) {
    const children = section.keyChildren || [];
    for (const child of children) {
      const tag = child.tag;
      if (!/^h[1-6]$|^p$|^span$|^a$|^button$|^li$|^figcaption$/.test(tag)) continue;
      const s = child.styles || {};
      const key = `${tag}`;
      if (!tagSizes[key]) tagSizes[key] = { tag, sizes: [], weights: [], lh: [], ls: [] };
      if (s.fontSize) tagSizes[key].sizes.push(s.fontSize);
      if (s.fontWeight) tagSizes[key].weights.push(s.fontWeight);
      if (s.lineHeight) tagSizes[key].lh.push(s.lineHeight);
      if (s.letterSpacing) tagSizes[key].ls.push(s.letterSpacing);
    }
  }

  const scale = [];
  for (const entry of Object.values(tagSizes)) {
    const mode = (arr) => {
      if (!arr.length) return null;
      const freq = {};
      let max = 0, best = arr[0];
      for (const v of arr) { freq[v] = (freq[v] || 0) + 1; if (freq[v] > max) { max = freq[v]; best = v; } }
      return best;
    };
    scale.push({
      tag: entry.tag,
      fontSize: mode(entry.sizes),
      fontWeight: mode(entry.weights),
      lineHeight: mode(entry.lh),
      letterSpacing: mode(entry.ls)
    });
  }

  const order = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "a", "button", "li", "span", "figcaption"];
  return scale.sort((a, b) => order.indexOf(a.tag) - order.indexOf(b.tag)).filter((e) => e.fontSize || e.fontWeight);
}

function buildReferenceProfile(inspection, designLanguage) {
  const colorRoles = classifyColorsByRole(inspection);
  const typeScale = extractTypeScale(inspection);
  const cssEffects = inspection.cssFeatures?.effects || [];
  const keyframes = inspection.styles?.keyframes || [];
  const mediaQueries = inspection.styles?.mediaQueries || [];
  const webgl = inspection.webgl || {};
  const webglAnimations = webgl.animations || {};
  const motionRecipes = inspection.motionRecipes || [];
  const hoverEffects = inspection.hoverEffects || [];
  const sections = inspection.sections || [];
  const structure = inspection.sectionStructure || [];

  return {
    designLanguage,
    colorRoles,
    typeScale,
    cssEffects: cssEffects.slice(0, 14),
    keyframes: keyframes.slice(0, 10),
    mediaQueries: mediaQueries.slice(0, 8),
    motionRecipes,
    hoverEffects,
    webgl: {
      library: webgl.likely3dLibrary,
      webglCount: webgl.webglCount || 0,
      canvasCount: webgl.canvasCount || inspection.assets?.canvasCount || 0,
      shaders: webgl.shaderDetails || [],
      uniforms: Object.keys(webglAnimations.uniformsOverTime || {}),
      timeAnalysis: webglAnimations.timeAnalysis || [],
      performanceRisk: webgl.performanceRisk
    },
    sectionFingerprints: sections.map((section, index) => {
      const struct = structure.find((candidate) => candidate.index === section.index) || structure[index] || {};
      return {
        index,
        role: section.role || "section",
        tag: section.tag || struct.tag || "section",
        classList: struct.classList || "",
        fullViewport: Boolean(section.isFullViewport),
        height: section.height,
        background: struct.background || {},
        layout: struct.layoutConfig || {},
        stickyDescendants: section.stickyDescendants || 0,
        fixedDescendants: section.fixedDescendants || 0,
        mediaElements: section.mediaElements || {},
        keyChildren: (struct.keyChildren || []).slice(0, 8).map((child) => ({
          tag: child.tag,
          classList: child.classList || "",
          textContent: child.textContent || "",
          styles: child.styles || {},
          animation: child.animation || null
        }))
      };
    })
  };
}

function composeFidelityTarget(profile, niche, confidencePrefix = "") {
  const colors = profile.colorRoles
    .slice(0, 8)
    .map((entry) => `${entry.role}: ${entry.color}`)
    .join("; ");
  const type = profile.typeScale
    .slice(0, 6)
    .map((entry) => `${entry.tag} ${entry.fontSize || "?"}/${entry.fontWeight || "?"}`)
    .join("; ");
  const effects = profile.cssEffects
    .slice(0, 8)
    .map((effect) => `${effect.feature} (${effect.count})`)
    .join("; ");
  const webglLine = profile.webgl.webglCount || profile.webgl.canvasCount
    ? `- WebGL/canvas grammar: ${profile.webgl.library || "unknown renderer"}, ${profile.webgl.canvasCount} canvas(es), uniforms ${profile.webgl.uniforms.slice(0, 8).join(", ") || "not exposed"}, ${profile.webgl.shaders.length} shader snippet(s).`
    : "- WebGL/canvas grammar: none detected; preserve DOM/CSS motion grammar instead.";

  return `# Reference Fidelity Target

${confidencePrefix}Aim for an 80-90% resemblance in visual grammar and interaction feel while replacing brand, copy, assets, names, logos, and business content for "${niche}".

Preserve these reference signals:
- Design language: ${profile.designLanguage.label}; ${profile.designLanguage.signals.join("; ") || "signals inferred from extracted layout and style evidence"}.
- Color roles: ${colors || "no reliable color roles detected"}.
- Typography scale: ${type || "no reliable type scale detected"}.
- CSS/effects: ${effects || "no advanced effects detected"}.
- Motion evidence: ${profile.motionRecipes.length} scroll recipe(s), ${profile.hoverEffects.length} hover probe(s), ${profile.keyframes.length} keyframe block(s).
${webglLine}

Adaptation rule: keep proportions, spacing rhythm, layering, animation timing, scroll behavior, and component silhouettes. Replace content and imagery with original niche-specific material.`;
}

function formatMotionKeyframes(keyframes = []) {
  return keyframes
    .slice(0, 5)
    .map((frame) => {
      const parts = [
        `${frame.scrollPercent}%`,
        `pos(${frame.x}, ${frame.y})`,
        `${frame.width}x${frame.height}`,
        `opacity ${frame.opacity}`
      ];
      if (frame.translateX !== null || frame.translateY !== null) {
        parts.push(`translate(${frame.translateX ?? 0}, ${frame.translateY ?? 0})`);
      }
      if (frame.scaleX !== null || frame.scaleY !== null) {
        parts.push(`scale(${frame.scaleX ?? 1}, ${frame.scaleY ?? 1})`);
      }
      parts.push(`visible ${frame.visibleRatio}`);
      return parts.join(" | ");
    })
    .join(" -> ");
}

export async function composeMegaBrief(evidence, fidelityLevel = "standard") {
  const trimmed = trimEvidence(evidence, fidelityLevel);
  const { inspection, visualRhythm, conversionPlan, niche, url } = trimmed;
  const designLanguage = trimmed.designLanguage || classifyDesignLanguage(trimmed);
  const referenceProfile = buildReferenceProfile(inspection, designLanguage);
  // FASE 1A/1B: ground truth visual. La paleta pixel y la descripción visual LLM
  // se inyectan temprano en el brief (sección 2.5) para que el modelo las trate
  // como prioridad a la hora de recrear composición/mood/imagery.
  const pixelPalette = trimmed.pixelPalette || evidence.pixelPalette || null;
  // Preferimos evidence.llmInterpretation (donde lo guarda el orchestrator) y
  // caemos a trimmed.llmInterpretation para runs cacheados u otros callers.
  const llmInterpretation = evidence.llmInterpretation || trimmed.llmInterpretation || null;
  const visualDescription = llmInterpretation?.visualDescription || null;
  
  // Calcular prefijos de confianza basados en fidelityScore
  const fidelityScore = evidence.fidelityScore?.overall || 0;
  const confidencePrefix = getConfidencePrefix(fidelityScore);
  
  // Extraer scores individuales para prefijos específicos.
  // FIX: antes se leían claves inexistentes (evidence.fidelityScore.motionConfidence,
  // .visualConfidence, .techConfidence) que siempre caían a || 1, mintiendo
  // "alta confianza". Los scores reales viven dentro de `breakdown`.
  const breakdown = evidence.fidelityScore?.breakdown;
  const motionConfidence = breakdown?.motionConfidence ?? 1;
  const visualConfidence = breakdown?.visualCoverage ?? 1;
  const techConfidence = breakdown?.tokenConfidence ?? 1;
  
  const motionPrefix = getConfidencePrefix(motionConfidence * 100);
  const visualPrefix = getConfidencePrefix(visualConfidence * 100);
  const techPrefix = getConfidencePrefix(techConfidence * 100);

  // Brief del cliente: si existe contenido útil, se inyecta como paso 0 (al
  // inicio del prompt). Si no, se omite y el resto del prompt queda idéntico.
  const clientBrief = evidence.clientBrief || trimmed.clientBrief || null;
  const clientBriefStep = composeClientBrief(clientBrief);

  const steps = [];
  if (clientBriefStep) {
    steps.push(() => clientBriefStep);
  }
  steps.push(
    () => composeExecutiveDiagnosis(inspection, designLanguage, visualRhythm, confidencePrefix, llmInterpretation),
    () => composeIntroTimeline(evidence),
    () => composeFidelityTarget(referenceProfile, niche, confidencePrefix),
    () => composeDnaSummary(inspection, designLanguage, referenceProfile, confidencePrefix, llmInterpretation),
    () => composeVisualGroundTruth(pixelPalette, visualDescription),
    () => composeDesignTokens(trimmed, techPrefix),
    () => composeCssArchitecture(inspection, fidelityLevel, techPrefix),
    () => composeComponentArchitecture(inspection),
    () => composeSectionBuildSpec(inspection, fidelityLevel),
    () => composeMotionTimeline(inspection, motionPrefix),
    () => composeInteractionRecipes(inspection, motionPrefix),
    () => composeAssetRequirements(inspection, visualPrefix),
    () => composeResponsiveRules(inspection, visualRhythm),
    () => composeCroAdaptation(conversionPlan, inspection, niche, fidelityLevel),
    () => composePerformanceBudget(conversionPlan, inspection),
    () => composeAccessibilityConstraints(conversionPlan),
    () => composeAcceptanceCriteria(inspection, niche),
    () => composeFinalAgentPrompt(trimmed, designLanguage, referenceProfile, confidencePrefix, llmInterpretation, pixelPalette)
  );

  const sections = [];
  for (const step of steps) {
    sections.push(step());
    await yieldToEventLoop();
  }

  return sections.join("\n\n---\n\n");
}

function getConfidencePrefix(fidelityScore) {
  if (fidelityScore >= 80) return ""; // sin prefijo
  if (fidelityScore >= 50) return "⚠️ DATOS PARCIALES: ";
  return "🔴 BAJA CONFIANZA — inferido, no extraído: ";
}

function composeClientBrief(clientBrief) {
  // clientBrief llega como evidence.clientBrief (objeto) o null cuando el
  // usuario no rellenó el formulario. Si no hay contenido útil, se omite la
  // sección devolviendo null; el llamador (composeMegaBrief) filtra con
  // `if (clientBriefStep)` para no inyectar el paso 0.
  if (!clientBrief || typeof clientBrief !== "object") return null;

  const {
    brandName, niche, audience, tone,
    sections = [],
    extraBrief
  } = clientBrief;

  const lines = [];
  if (brandName) lines.push(`- Marca / proyecto: ${brandName}`);
  if (niche) lines.push(`- Nicho / tipo de negocio: ${niche}`);
  if (audience) lines.push(`- Audiencia objetivo: ${audience}`);
  if (tone) lines.push(`- Tono de voz: ${tone}`);

  const meaningfulSections = (Array.isArray(sections) ? sections : [])
    .filter((s) => s && (s.name || s.copy));
  if (meaningfulSections.length) {
    const sectionLines = meaningfulSections.map((s) =>
      `  • ${s.name || "(sin título)"}${s.copy ? ` — ${s.copy}` : ""}`
    ).join("\n");
    lines.push(`- Secciones del sitio:\n${sectionLines}`);
  }

  if (extraBrief) lines.push(`- Notas adicionales: ${extraBrief}`);

  // Si tras recoger todos los campos no hay nada útil, omitir la sección.
  if (!lines.length) return null;

  return `# Brief del Cliente (paso 0)

El usuario proporcionó este brief. Es PRIORITARIO: respetar marca, audiencia, tono y secciones listadas; todo el contenido de copy debe adaptarse a este contexto antes de aplicar la fidelidad visual del resto del brief.

${lines.join("\n")}`;
}

function composeExecutiveDiagnosis(inspection, designLanguage, visualRhythm, confidencePrefix = "", llmInterpretation = null) {
  const sectionCount = (inspection.sections || []).length;
  const motionCount = (inspection.motionRecipes || []).length;
  const cssComplexity = inspection.cssFeatures?.complexityScore || 0;
  const vr = visualRhythm || {};

  const rhythm = [];
  if (vr.sectionCountEstimate) rhythm.push(`${vr.sectionCountEstimate} estimated sections`);
  if (vr.stickySceneEstimate) rhythm.push("sticky scenes present");
  if (vr.majorTransitions?.length) rhythm.push(`${vr.majorTransitions.length} major transition(s)`);
  if (vr.visualDensityByScroll?.length) {
    const peak = vr.visualDensityByScroll.reduce((a, b) => (a.elementCount || 0) > (b.elementCount || 0) ? a : b, {});
    if (peak.elementCount) rhythm.push(`peak density ${peak.elementCount} elements at ~${peak.scrollPercent || 0}% scroll`);
  }
  const viewportCount = new Set((inspection.visualEvidence || []).map((e) => e.viewport)).size;
  if (viewportCount) rhythm.push(`${viewportCount} viewport(s) captured`);

  // Añadir sección de interpretación LLM si está disponible
  const llmSection = llmInterpretation?.used ? `
**IA Interpretation:** ${llmInterpretation.provider ? `(via ${llmInterpretation.provider}, ${Math.round(llmInterpretation.confidence * 100)}% confianza)` : ""}
${llmInterpretation.interpretation ? `\n${llmInterpretation.interpretation}\n` : ""}
${llmInterpretation.patterns?.length ? `\n**Patrones Inferidos:**\n${llmInterpretation.patterns.map(p => `- ${p}`).join("\n")}\n` : ""}
${llmInterpretation.directives?.length ? `\n**Directivas de Nicho:**\n${llmInterpretation.directives.map(d => `- ${d}`).join("\n")}\n` : ""}
${llmInterpretation.gaps?.length ? `\n**Gaps de Extracción:**\n${llmInterpretation.gaps.map(g => `- ${g}`).join("\n")}\n` : ""}` : "";

  return `# 1. Executive Design Diagnosis

${confidencePrefix}**Design Language:** ${designLanguage.label} (confidence: ${Math.round(designLanguage.confidence * 100)}%)
**Signals:** ${designLanguage.signals.join("; ")}
**Sections:** ${sectionCount} major sections detected
**Motion Complexity:** ${motionCount} scroll-linked animations
**CSS Complexity:** ${cssComplexity}/100
**Visual Rhythm:** ${rhythm.length ? rhythm.join("; ") : "basic layout"}
${llmSection}
This reference uses a ${designLanguage.label} approach with ${motionCount > 3 ? "heavy" : motionCount > 0 ? "moderate" : "minimal"} motion choreography and ${cssComplexity > 60 ? "advanced" : cssComplexity > 30 ? "moderate" : "standard"} CSS effects.`;
}

function composeIntroTimeline(evidence) {
  const intro = evidence?.inspection?.introTimeline || evidence?.introTimeline;
  if (!intro || intro.enabled === false || (!intro.preloader?.detected && !intro.timeline?.length)) {
    return "";
  }

  const parts = [`# 1A. Initial Load Choreography\n`];

  if (intro.preloader?.detected) {
    parts.push(`\n**Preloader presence:** Yes\n`);
    parts.push(`- **Signature classes:** ${intro.preloader.classes}\n`);
    parts.push(`- **Tag:** ${intro.preloader.tag}\n`);
    parts.push(`- **Coverage:** ${intro.preloader.coverage}% of viewport\n`);
    parts.push(`- **Element count:** ${intro.preloader.elementCount}\n`);
    if (intro.preloader.durationMs) {
      parts.push(`- **Duration:** ~${intro.preloader.durationMs}ms\n`);
    }
    parts.push(`\n**Implementation:** Include matching preloader that resolves before hero reveal. Use the same color/logo/style as detected.\n`);
  } else {
    parts.push(`\n**Preloader presence:** None detected\n`);
  }

  if (intro.timeline?.length > 0) {
    parts.push(`\n## Hero Intro Timeline (time-based, NOT scroll-based)\n`);
    for (const recipe of intro.timeline) {
      parts.push(`\n### Recipe: ${recipe.type.toUpperCase()}\n`);
      parts.push(`- **Target:** \`${recipe.target}\` (${recipe.tag})\n`);
      parts.push(`- **Duration:** ${recipe.durationMs}ms\n`);
      // FASE 3A: easing medido. Mostramos curva cubic-bezier real + método
      // (bezier-fit | midpoint-heuristic) + confianza del ajuste cuando aplique.
      if (recipe.easingCurve) {
        const conf = typeof recipe.easingConfidence === "number"
          ? ` (${Math.round(recipe.easingConfidence * 100)}% fit)`
          : "";
        parts.push(`- **Easing:** \`${recipe.easingCurve}\`${conf}\n`);
        if (recipe.easingMethod) parts.push(`- **Easing method:** ${recipe.easingMethod}\n`);
        if (recipe.easing && recipe.easing !== recipe.easingCurve) {
          parts.push(`- **GSAP alias:** \`${recipe.easing}\`\n`);
        }
      } else if (recipe.easing) {
        parts.push(`- **Easing:** ${recipe.easing}\n`);
      }
      if (recipe.opacityRange) parts.push(`- **Opacity:** ${recipe.opacityRange}\n`);
      if (recipe.yDelta) parts.push(`- **Y delta:** ${recipe.yDelta}px\n`);
      if (recipe.clipPathRange) parts.push(`- **Clip-path:** ${recipe.clipPathRange}\n`);
      if (recipe.scaleRange) parts.push(`- **Scale:** ${recipe.scaleRange}\n`);
      if (recipe.keyframes?.length) {
        parts.push(`- **Keyframes:**\n`);
        for (const kf of recipe.keyframes) {
          const details = [];
          if (kf.tMs !== undefined) details.push(`t=${kf.tMs}ms`);
          if (kf.opacity !== undefined) details.push(`opacity=${kf.opacity.toFixed(2)}`);
          if (kf.y !== undefined) details.push(`y=${kf.y}`);
          if (kf.clipPath) details.push(`clip=${kf.clipPath.slice(0, 60)}`);
          if (kf.scaleX !== undefined && kf.scaleX !== null) details.push(`scaleX=${kf.scaleX.toFixed(2)}`);
          parts.push(`  - ${details.join(", ")}\n`);
        }
      }
      const implHint = recipe.type === "intro-fade" ? "GSAP timeline / CSS transition"
        : recipe.type === "intro-slide-y" ? "GSAP fromTo y with ease"
        : recipe.type === "intro-clip-reveal" ? "CSS clip-path animation / GSAP"
        : recipe.type === "intro-scale" ? "GSAP scale tween"
        : "CSS @keyframes or WAAPI";
      parts.push(`- **Implementation hint:** ${implHint}\n`);
    }

    if (intro.screenshotPaths?.length) {
      parts.push(`\n**Intro frames captured:** ${intro.screenshotPaths.length} screenshot(s)\n`);
      parts.push(`Check \`intro/\` folder for frames at: ${intro.screenshotPaths.map((p) => `\`${p}\``).join(", ")}\n`);
    }
  }

  if (!intro.timeline?.length && !intro.preloader?.detected) {
    parts.push(`\nNo time-based intro animation or preloader detected. The page transitions directly to its idle state.\n`);
  }

  return parts.join("");
}

function composeDnaSummary(inspection, designLanguage, profile, confidencePrefix = "", llmInterpretation = null) {
  const technologies = inspection.technologies || [];
  const layout = inspection.layout?.dominant || "unknown";
  const fonts = inspection.tokens?.fonts || [];
  const colors = inspection.tokens?.colors || [];
  const effects = profile.cssEffects.slice(0, 6).map((effect) => effect.feature).join(", ");
  const motion = `${profile.motionRecipes.length} scroll recipe(s), ${profile.hoverEffects.length} hover interaction(s)`;

  // Añadir insights de LLM si disponibles
  const llmInsight = llmInterpretation?.used && llmInterpretation.patterns?.length 
    ? `\n**IA-Enhanced Patterns:** ${llmInterpretation.patterns.slice(0, 3).join("; ")}`
    : "";

  return `# 2. Reference DNA Summary

${confidencePrefix}**Stack:** ${technologies.length ? technologies.join(", ") : "No explicit framework signatures; build lean"}
**Layout:** ${layout}
**Typography:** ${fonts.length ? fonts.join(", ") : "No reliable font evidence extracted"}
**Palette:** ${colors.length ? colors.slice(0, 8).join(", ") : "No reliable palette evidence extracted"}
**Effects:** ${effects || "No advanced CSS effect evidence"}
**Motion:** ${motion}
**Design Language:** ${designLanguage.label}
**Key Differentiators:** ${designLanguage.signals.slice(0, 3).join(", ") || "Insufficient visual-language evidence; rely on extracted sections, tokens, screenshots, and CSS rules only"}${llmInsight}`;
}

// ---------------------------------------------------------------------------
// FASE 1A + 1B: Visual Ground Truth
// Sección prioritaria (entre #2 y #3) que inyecta DOS señales que el extractor
// clásico NO puede dar:
//   1) Descripción visual LLM multimodal (composición, mood, jerarquía, imagery)
//   2) Paleta PERCIBIDA a nivel pixel (background/dominant/accent/muted de
//      FOTOS, gradientes y texturas que son invisibles para el extractor CSS).
// El modelo downstream recibe esto como TEXTO -> no necesita ver las imágenes.
// Devuelve "" si no hay ni descripción ni paleta (no ensucia el brief).
// ---------------------------------------------------------------------------
function composeVisualGroundTruth(pixelPalette, visualDescription) {
  if (!pixelPalette && !visualDescription) return "";

  const parts = [`# 2.5. Visual Ground Truth\n`];
  parts.push(`> Esta sección es el ground truth visual del sitio (no inferido del DOM): captura la composición percibida y los colores reales renderizados en pantalla, incluidos los que viven dentro de fotografías, gradientes y texturas. Trátala como prioridad a la hora de recrear mood, layering y tratamiento de imagery.\n`);

  if (visualDescription) {
    parts.push(`\n## Descripción Visual (análisis IA multimodal sobre capturas reales)\n\n`);
    parts.push(visualDescription.trim() + "\n");
  } else {
    parts.push(`\n## Descripción Visual\n- No disponible (sin API key multimodal o sin capturas procesables). Considera inspeccionar manualmente el sitio de referencia para fijar composición y mood.\n`);
  }

  if (pixelPalette) {
    parts.push(`\n## Paleta Percibida (median-cut sobre pixels renderizados)\n`);
    parts.push(`- **Método:** ${pixelPalette.method || "median-cut"} · ${pixelPalette.source || "screenshot cuantizado"}\n`);
    if (pixelPalette.background) {
      parts.push(`- **Background dominante:** \`${pixelPalette.background}\` (cubre ~${pixelPalette.backgroundCoverage || 0}% del viewport)\n`);
    }
    if (pixelPalette.dominant) parts.push(`- **Dominant (texto/elemento principal):** \`${pixelPalette.dominant}\`\n`);
    if (pixelPalette.accent) parts.push(`- **Accent:** \`${pixelPalette.accent}\`\n`);
    if (pixelPalette.muted) parts.push(`- **Muted:** \`${pixelPalette.muted}\`\n`);

    if (pixelPalette.textCandidates?.length) {
      parts.push(`- **Candidatos de texto:** ${pixelPalette.textCandidates.map((c) => `\`${c}\``).join(", ")}\n`);
    }

    if (pixelPalette.palette?.length) {
      parts.push(`\n### Top colores por frecuencia\n`);
      parts.push(`| Hex | Coverage | Luminance | Saturation |\n`);
      parts.push(`|-----|----------|-----------|------------|\n`);
      for (const c of pixelPalette.palette.slice(0, 8)) {
        parts.push(`| \`${c.hex}\` | ${c.coverage}% | ${c.luminance} | ${c.saturation} |\n`);
      }
    }

    if (pixelPalette.gradients?.length) {
      parts.push(`\n### Gradientes percibidos\n`);
      for (const g of pixelPalette.gradients) {
        parts.push(`- **${g.type}:** \`${g.from}\` → \`${g.to}\`${g.note ? ` — ${g.note}` : ""}\n`);
      }
    }

    parts.push(`\n**Regla de fusión:** la paleta CSS declarada (sección #3) gana para tokens explícitamente definidos por el autor; esta paleta pixel **rellena los vacíos** y aporta accents/gradientes que el CSS no declaró (imágenes, texturas). No inventes colores fuera de estas dos fuentes.\n`);
  }

  return parts.join("");
}

function composeDesignTokens(trimmed, techPrefix = "") {
  // FASE 2A/2B: aceptamos `trimmed` (objeto completo) para acceder a
  // `spacing` (escala normalizada) y `inspection.styles.fluidTypeScale`.
  // Mantenemos compat hacia atrás: si llega el inspection directo (runs
  // cacheados/otros callers) lo envolvemos.
  const inspection = trimmed?.inspection || trimmed;
  const spacingScale = trimmed?.spacing || null;
  const tokens = inspection.tokens || {};
  const cssVars = tokens.cssVariables || {};
  const styleVars = inspection.styles?.cssVariableMap || {};
  const allVars = { ...cssVars, ...styleVars };
  const colors = tokens.colors || [];
  const fonts = tokens.fonts || [];
  const legacySpacing = tokens.spacingScale || [];
  const fluidTypeScale = inspection.styles?.fluidTypeScale || null;

  const classifiedColors = classifyColorsByRole(inspection);
  const typeScale = extractTypeScale(inspection);

  const parts = [`${techPrefix}# 3. Design Token System\n`];

  const colorGroups = {};
  for (const c of classifiedColors) {
    if (!colorGroups[c.role]) colorGroups[c.role] = [];
    if (!colorGroups[c.role].includes(c.color)) colorGroups[c.role].push(c.color);
  }
  const roleOrder = ["Background", "Text", "Accent", "Surface", "Border", "Token", "Hover", "Semantic", "Declared"];
  let hasClassified = false;
  for (const role of roleOrder) {
    if (colorGroups[role] && colorGroups[role].length) {
      if (!hasClassified) { parts.push(`\n## Color Palette\n`); hasClassified = true; }
      parts.push(`- **${role}:** ${colorGroups[role].slice(0, 4).join(", ")}\n`);
    }
  }
  if (!hasClassified && colors.length) {
    parts.push(`\n## Colors\n${colors.map((c) => `- ${c}`).join("\n")}\n`);
  }
  if (!hasClassified && !colors.length) {
    parts.push(`\n## Colors\n- No reliable color evidence extracted. Do not invent a palette; rerun with surgical capture or derive colors from screenshots before implementation.\n`);
  }

  if (typeScale.length) {
    parts.push(`\n## Typography\n`);
    parts.push(`| Element | Size | Weight | Line-Height | Letter-Spacing |\n`);
    parts.push(`|---------|------|--------|-------------|----------------|\n`);
    for (const t of typeScale) {
      parts.push(`| \`${t.tag}\` | ${t.fontSize || "—"} | ${t.fontWeight || "—"} | ${t.lineHeight || "—"} | ${t.letterSpacing || "—"} |\n`);
    }
  }
  if (fonts.length && !typeScale.length) {
    parts.push(`\n## Typography\n${fonts.map((f) => `- ${f}`).join("\n")}\n`);
  }
  if (!fonts.length && !typeScale.length) {
    parts.push(`\n## Typography\n- No reliable font evidence extracted. Do not invent a pairing; use only detected font assets or request a visual/manual font pass.\n`);
  }

  // FASE 2B: tipografía fluida (clamp()/vw/media queries) reproducible
  // desktop->mobile por tag. Solo se emite si el styleExtractor la capturó.
  if (fluidTypeScale && fluidTypeScale.rules?.length) {
    parts.push(`\n## Fluid Type Scale (responsive)\n`);
    parts.push(`Reglas \`clamp()\`/\`vw\`/media queries extraídas del CSSOM (no el valor resuelto en un viewport único). Reproduce estas reglas en lugar de fijar un px estático.\n`);
    for (const rule of fluidTypeScale.rules) {
      const sources = rule.sources?.length ? rule.sources.join(", ") : "cssom";
      parts.push(`- \`${rule.tag}\` → \`font-size: ${rule.fluid}\` *(fuente: ${sources})*\n`);
    }
    if (fluidTypeScale.note) {
      parts.push(`\n${fluidTypeScale.note}\n`);
    }
  }

  parts.push(`\n## Spacing Scale\n`);
  if (spacingScale && spacingScale.scale?.length) {
    // FASE 2A: escala coherente normalizada con unidad base + tokens --space-*.
    parts.push(`Base unit: **${spacingScale.baseUnit}px**${spacingScale.inferred ? " (inferida — sin evidencia suficiente, validar manualmente)" : ""}.\n`);
    parts.push("```css\n:root {\n");
    for (const token of spacingScale.tokens) {
      parts.push(`  ${token};\n`);
    }
    parts.push("}\n```\n");
    parts.push(`Tokens observados: ${spacingScale.scale.length} valores únicos`);
    if (spacingScale.observed && !spacingScale.inferred) {
      const o = spacingScale.observed;
      parts.push(` (mediana ${o.median}px, rango ${o.min}–${o.max}px de ${o.total} muestras, ${o.unique} únicos)`);
    }
    parts.push(".\n");
    if (spacingScale.rhythm) {
      const r = spacingScale.rhythm;
      parts.push(`\n**Ritmo vertical de secciones:** ${r.sectionCount} secciones`);
      if (r.heroHeight) parts.push(` · hero ~${r.heroHeight}px`);
      if (r.medianHeight) parts.push(` · mediana ${r.medianHeight}px`);
      if (r.footerHeight) parts.push(` · footer ~${r.footerHeight}px`);
      if (r.viewportRatio) parts.push(` · ${r.viewportRatio}× viewport`);
      if (r.fullViewportSections) parts.push(` · ${r.fullViewportSections} sección(es) full-viewport`);
      parts.push(".\n");
    }
  } else if (legacySpacing.length) {
    // Fallback histórico: bag de px sueltos sin estructura.
    parts.push(legacySpacing.map((s) => `- ${s}`).join("\n"));
    parts.push(`\n*(No se pudo normalizar a escala coherente; trata estos como observaciones puntuales.)*\n`);
  } else {
    parts.push("- No reliable spacing evidence extracted. Preserve section dimensions from screenshots instead of using a generic scale.");
  }
  parts.push(`\n`);

  const varEntries = Object.entries(allVars);
  if (varEntries.length) {
    parts.push(`\n## CSS Variables\n`);
    parts.push("```css\n:root {\n");
    for (const [k, v] of varEntries.slice(0, 40)) {
      parts.push(`${k}: ${v};\n`);
    }
    if (Object.keys(allVars).length > 40) {
      parts.push(`/* ... and ${Object.keys(allVars).length - 40} more variables */\n`);
    }
    parts.push("}\n```\n");
  }
  if (!varEntries.length && cssVars) {
    parts.push(`\n## CSS Variables\n`);
    for (const [k, v] of Object.entries(cssVars).slice(0, 20)) {
      parts.push(`- \`${k}\`: ${v}\n`);
    }
  }

  return parts.join("");
}



function composeCssArchitecture(inspection, fidelityLevel = "standard", techPrefix = "") {
  const styles = inspection.styles;
  if (!styles) {
    return `${techPrefix}# 4. CSS Architecture

No CSSOM style rules were extracted. Do not invent a generic CSS architecture; use sectionStructure computed styles, visual screenshots, and downloaded stylesheets as the source of truth, or rerun in surgical mode.`;
  }

  const isFull = fidelityLevel === "surgical";
  const selectorLimit = fidelityLevel === "compact"
    ? 20
    : isFull
      ? Math.min(styles.styleRules.length, 500)
      : 120;
  const propLimit = fidelityLevel === "compact" ? 6 : null;

  const parts = [];

  parts.push(`${techPrefix}# 4. CSS Architecture (${isFull ? "full extraction" : fidelityLevel === "compact" ? "key selectors" : "standard extraction"})

## Extracted Stylesheets
- **Total CSS rules:** ${styles.totalRuleCount}
- **External stylesheets:** ${styles.externalSheets.length}
- **Unique selectors:** ${styles.styleRules.length}
- **Keyframe animations:** ${styles.keyframes.length}
- **Media queries:** ${styles.mediaQueries.length}
- **@font-face declarations:** ${styles.fontFaces.length}
`);

  if (styles.keyframes.length > 0) {
    parts.push(`## Keyframe Animations\n`);
    for (const kf of styles.keyframes) {
      parts.push(`\`\`\`css\n${kf.css}\n\`\`\`\n`);
    }
    parts.push("\n");
  }

  if (styles.mediaQueries.length > 0) {
    parts.push(`## Media Queries\n`);
    for (const mq of styles.mediaQueries) {
      parts.push(`- \`${mq.conditionText}\` — ${mq.rules.length} rule(s)\n`);
      if (isFull) {
        for (const rule of mq.rules.slice(0, 10)) {
          parts.push(`  - \`${rule.selector}\` { ${Object.entries(rule.properties).slice(0, 5).map(([p, v]) => `${p}: ${v}`).join("; ")} }\n`);
        }
      }
    }
    parts.push("\n");
  }

  if (styles.fontFaces.length > 0) {
    parts.push(`## @font-face Declarations\n`);
    for (const ff of styles.fontFaces) {
      parts.push(`\`\`\`css\n${ff.css}\n\`\`\`\n`);
    }
    parts.push("\n");
  }

  let topSelectors;
  let skippedCount = 0;
  if (isFull) {
    const filtered = styles.styleRules.filter(rule =>
      !RESET_SELECTOR_PATTERNS.some(p => p.test(rule.selector.trim()))
    );
    skippedCount = styles.styleRules.length - filtered.length;
    topSelectors = filtered.slice(0, 60);
  } else {
    topSelectors = styles.styleRules.slice(0, selectorLimit);
  }

  parts.push(`## Key Selectors (${topSelectors.length} shown${skippedCount > 0 ? `, ${skippedCount} framework/reset filtered` : ""})\n\n`);
  for (const rule of topSelectors) {
    parts.push(`\`${rule.selector}\` {\n`);
    const entries = Object.entries(rule.properties);
    const shown = propLimit ? entries.slice(0, propLimit) : entries;
    for (const [prop, val] of shown) {
      parts.push(`  ${prop}: ${val};\n`);
    }
    if (propLimit && entries.length > propLimit) {
      parts.push(`  /* + ${entries.length - propLimit} more properties */\n`);
    }
    parts.push(`}\n\n`);
  }

  if (skippedCount > 0) {
    parts.push(`*(${skippedCount} framework/reset selectors omitted — only value-bearing selectors shown)*\n`);
  } else if (styles.styleRules.length > topSelectors.length) {
    parts.push(`*... and ${styles.styleRules.length - topSelectors.length} more selectors (see evidence.json)*\n`);
  }

  return parts.join("");
}

function composeComponentArchitecture(inspection) {
  const sections = inspection.sections || [];
  const technologies = inspection.technologies || [];
  const hasWebGL = inspection.webgl?.webglCount > 0;
  const hasCanvas = inspection.assets?.canvasCount > 0;
  const webglAnimations = inspection.webgl?.animations;

  const components = [];

  if (sections.some((s) => s.role === "nav")) components.push("Navigation bar (sticky/fixed)");
  if (sections.some((s) => s.role === "hero")) components.push("Hero section (full viewport)");
  if (sections.some((s) => s.role === "proof")) components.push("Proof/trust block (metrics, logos, testimonials)");
  if (sections.some((s) => s.role === "showcase")) components.push("Showcase/gallery (portfolio, projects)");
  if (sections.some((s) => s.role === "service")) components.push("Service/feature cards");
  if (sections.some((s) => s.role === "pricing")) components.push("Pricing tiers");
  if (sections.some((s) => s.role === "team")) components.push("Team/about section");
  if (sections.some((s) => s.role === "contact")) components.push("Contact/booking form");
  if (sections.some((s) => s.role === "footer")) components.push("Footer (business identity, legal)");

  // Enhanced WebGL/canvas component detection
  if (hasWebGL || hasCanvas) {
    const webglLib = inspection.webgl?.likely3dLibrary || "WebGL";
    const uniforms = webglAnimations?.uniformsOverTime ? Object.keys(webglAnimations.uniformsOverTime).slice(0, 4).join(", ") : "u_time, u_scrollProgress";
    components.push(`${webglLib} scene canvas${uniforms ? ` (${uniforms})` : ""} (lazy-loaded, time-based animations)`);
  }

  // Check for shader-based effects
  if (inspection.webgl?.shaderDetails?.length > 0) {
    components.push("Custom shader effects with uniforms");
  }

  // Check for time-based DOM animations
  if (webglAnimations?.domTimeAnimations?.length > 0) {
    components.push("Auto-playing DOM animations (time-based reveals)");
  }

  // Fallback if no sections detected but has WebGL-heavy site
  if (!sections.length && (hasWebGL || hasCanvas)) {
    components.push("Full-viewport WebGL hero");
    components.push("Minimal HTML overlay for text/content");
  }

  if (!components.length) {
    components.push("Evidence-limited component map: derive components from sectionStructure, screenshots, and CSS selectors before building");
  }

  return `# 5. Component Architecture

Build these components:
${components.map((c) => `- ${c}`).join("\n")}

**Stack recommendation:** ${recommendStack(technologies, hasWebGL, inspection.cssFeatures?.complexityScore || 0)}`;
}

function prioritizeChildren(children) {
  const priority = (c) => {
    if (/^h[1-6]$/.test(c.tag)) return 0;
    if (["a", "button"].includes(c.tag)) return 1;
    if (["img", "video", "canvas", "svg", "picture"].includes(c.tag)) return 2;
    if (c.animation) return 3;
    return 4;
  };
  return [...children].sort((a, b) => priority(a) - priority(b));
}

function composeSectionBuildSpec(inspection, fidelityLevel = "standard") {
  const sections = inspection.sections || [];
  const structure = inspection.sectionStructure || [];
  const isFull = fidelityLevel === "surgical";
  const hasWebGL = inspection.webgl?.webglCount > 0;
  const hasCanvas = inspection.assets?.canvasCount > 0;

  if (!sections.length) {
    if (hasWebGL || hasCanvas) {
      const webglLib = inspection.webgl?.likely3dLibrary || "Three.js";
      const shaders = inspection.webgl?.shaderDetails?.length || 0;
      const uniforms = inspection.webgl?.animations?.uniformsOverTime ? Object.keys(inspection.webgl.animations.uniformsOverTime).slice(0, 6).join(", ") : "u_time, u_scrollProgress";
      
      return `# 6. Section-by-Section Build Spec

WebGL-centric layout detected. Build as follows:

## Section 1: WebGL Hero
- **Library:** ${webglLib}
- **Canvas size:** ${inspection.viewport?.width || 1440}x${inspection.viewport?.height || 1100}
- **Shaders detected:** ${shaders}
- **Key uniforms:** ${uniforms}
- **Implementation:** Full-viewport canvas with time-based animation loop. Use requestAnimationFrame to update uniforms.

## Section 2: Content Overlay (optional)
- **Purpose:** Place semantic HTML content over/canvas-as-background
- **Structure:** Minimal DOM with position: fixed or absolute overlays
- **Styling:** Transparent backgrounds, backdrop-filter: blur() for frosted glass effect

## Section 3: Footer
- **Footer/closing frame:** Build only if the reference has footer evidence; otherwise create a minimal accessible closing section in the same visual grammar.

**Note:** This site prioritizes 3D/visual experience over traditional section-based layout. Adapt to your niche by changing overlay content while preserving the WebGL layer.`;
    }
    return `# 6. Section-by-Section Build Spec

No section map available. Do not invent a default landing structure. Reconstruct from visualEvidence screenshots, DOM landmarks, and extracted selectors; if those are missing, rerun extraction in surgical mode.`;
  }

  const parts = [];

  parts.push(`# 6. Section-by-Section Build Spec (${sections.length} sections detected, ${isFull ? "full detail" : "key elements"})\n`);

  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    const struct = structure[i] || {};
    const role = section.role.charAt(0).toUpperCase() + section.role.slice(1);

    parts.push(`\n## Section ${i + 1}: ${role}\n`);
    parts.push(`- **Confidence:** ${Math.round((section.confidence || 0) * 100)}%\n`);
    parts.push(`- **Tag:** ${section.tag || struct.tag}\n`);
    parts.push(`- **Classes:** \`${struct.classList || section.tag}\`\n`);
    parts.push(`- **Size:** ${section.isFullViewport ? "full viewport height" : `${section.height}px height`}`);
    if (struct.computedStyles?.width) parts.push(`, width: ${struct.computedStyles.width}`);
    parts.push(`\n`);

    const bg = struct.background || section.background || {};
    if (bg.color && bg.color !== "rgba(0, 0, 0, 0)") {
      parts.push(`- **Background color:** ${bg.color}\n`);
    }
    if (bg.image) {
      parts.push(`- **Background image:** ${bg.image.length > 200 ? bg.image.slice(0, 200) + "..." : bg.image}\n`);
    }

    if (struct.computedStyles?.borderRadius) parts.push(`- **Border radius:** ${struct.computedStyles.borderRadius}\n`);
    if (struct.computedStyles?.boxShadow) parts.push(`- **Box shadow:** ${struct.computedStyles.boxShadow}\n`);
    if (struct.computedStyles?.padding) parts.push(`- **Padding:** ${struct.computedStyles.padding}\n`);
    if (struct.computedStyles?.margin) parts.push(`- **Margin:** ${struct.computedStyles.margin}\n`);
    if (struct.computedStyles?.clipPath) parts.push(`- **Clip path:** ${struct.computedStyles.clipPath}\n`);
    if (struct.computedStyles?.backdropFilter) parts.push(`- **Backdrop filter:** ${struct.computedStyles.backdropFilter}\n`);

    if (section.textHierarchy?.length) {
      parts.push(`- **Headings:** ${section.textHierarchy.map((h) => `${h.level}: "${h.text}"`).join("; ")}\n`);
    }
    if (section.ctaText?.length) {
      parts.push(`- **CTAs:** ${section.ctaText.join(", ")}\n`);
    }
    if (section.mediaElements) {
      const media = [];
      if (section.mediaElements.images > 0) media.push(`${section.mediaElements.images} image(s)`);
      if (section.mediaElements.videos > 0) media.push(`${section.mediaElements.videos} video(s)`);
      if (section.mediaElements.canvases > 0) media.push(`${section.mediaElements.canvases} canvas(es)`);
      if (section.mediaElements.svgs > 0) media.push(`${section.mediaElements.svgs} SVG(s)`);
      if (media.length) parts.push(`- **Media:** ${media.join(", ")}\n`);
    }

    const layoutCfg = struct.layoutConfig || {};
    if (layoutCfg.display?.includes("grid")) parts.push(`- **Grid:** ${layoutCfg.gridTemplateColumns || "auto"} / ${layoutCfg.gridTemplateRows || "auto"}, gap: ${layoutCfg.gap || "0"}\n`);
    if (layoutCfg.display?.includes("flex")) parts.push(`- **Flex:** direction: ${layoutCfg.flexDirection || "row"}, wrap: ${layoutCfg.flexWrap || "nowrap"}, gap: ${layoutCfg.gap || "0"}\n`);
    if (layoutCfg.alignItems) parts.push(`- **Align items:** ${layoutCfg.alignItems}\n`);
    if (layoutCfg.justifyContent) parts.push(`- **Justify:** ${layoutCfg.justifyContent}\n`);
    if (section.stickyDescendants > 0) parts.push(`- **Sticky elements:** ${section.stickyDescendants}\n`);
    if (section.fixedDescendants > 0) parts.push(`- **Fixed elements:** ${section.fixedDescendants}\n`);

    const animChildren = struct.keyChildren?.filter((c) => c.animation) || [];
    if (animChildren.length > 0) {
      parts.push(`- **Animations:**\n`);
      for (const ac of animChildren) {
        const info = [];
        if (ac.animation?.animation) info.push(`animation: ${ac.animation.animation}`);
        if (ac.animation?.transition) info.push(`transition: ${ac.animation.transition}`);
        if (ac.animation?.transform) info.push(`transform: ${ac.animation.transform}`);
        parts.push(`  - \`${ac.tag}\`${ac.classList ? "." + ac.classList.split(" ")[0] : ""}: ${info.join("; ")}\n`);
      }
    }

    if (struct.keyChildren && struct.keyChildren.length > 0) {
      parts.push(`\n### Element Style Blueprint\n\n`);
      const maxChildren = isFull ? Math.min(struct.keyChildren.length, 20) : 15;
      const childrenSource = isFull ? prioritizeChildren(struct.keyChildren) : struct.keyChildren;
      for (const child of childrenSource.slice(0, maxChildren)) {
        const s = child.styles || {};
        let line = `- **\`<${child.tag}>\`**`;
        if (child.classList) line += ` .${child.classList.split(" ").slice(0, 2).join(".")}`;
        if (child.id) line += ` #${child.id}`;
        parts.push(line + "\n");

        const styleLines = [];
        if (s.fontFamily) styleLines.push(`font: ${s.fontSize || ""} ${s.fontWeight || ""} ${s.fontFamily}`);
        if (s.color) styleLines.push(`color: ${s.color}`);
        if (s.lineHeight) styleLines.push(`lh: ${s.lineHeight}`);
        if (s.letterSpacing) styleLines.push(`ls: ${s.letterSpacing}`);
        if (s.textTransform) styleLines.push(`text-transform: ${s.textTransform}`);
        if (s.textAlign) styleLines.push(`text-align: ${s.textAlign}`);
        if (s.backgroundColor && s.backgroundColor !== "rgba(0, 0, 0, 0)") styleLines.push(`bg: ${s.backgroundColor}`);
        if (s.borderRadius) styleLines.push(`radius: ${s.borderRadius}`);
        if (s.border && s.border !== "0px") styleLines.push(`border: ${s.border}`);
        if (s.boxShadow) styleLines.push(`shadow: ${s.boxShadow}`);
        if (s.display) styleLines.push(`display: ${s.display}`);
        if (s.width && s.width !== "auto") styleLines.push(`width: ${s.width}`);
        if (s.padding) styleLines.push(`padding: ${s.padding}`);
        if (s.margin) styleLines.push(`margin: ${s.margin}`);
        if (s.opacity) styleLines.push(`opacity: ${s.opacity}`);
        if (s.backdropFilter) styleLines.push(`backdrop: ${s.backdropFilter}`);

        if (styleLines.length) parts.push(`  - ${styleLines.join(" | ")}\n`);

        if (child.animation) {
          const animParts = [];
          if (child.animation.animation) animParts.push(child.animation.animation);
          if (child.animation.transition) animParts.push(child.animation.transition);
          if (child.animation.transform) animParts.push(child.animation.transform);
          if (animParts.length) parts.push(`  - anim: ${animParts.join(" | ")}\n`);
        }

        if (child.src) parts.push(`  - src: ${child.src.length > 200 ? child.src.slice(0, 200) + "..." : child.src}\n`);
        if (child.href) parts.push(`  - href: ${child.href.length > 200 ? child.href.slice(0, 200) + "..." : child.href}\n`);
        if (child.textContent && child.textContent.length > 2) {
          parts.push(`  - text: "${child.textContent.slice(0, isFull ? 200 : 120)}"\n`);
        }
        parts.push(`\n`);
      }
    }

    if (struct.htmlSnippet && struct.htmlSnippet.length > 50) {
      parts.push(`### HTML Structure\n\n\`\`\`html\n${struct.htmlSnippet}\n\`\`\`\n\n`);
    }

    parts.push(`**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.\n`);
  }

  return parts.join("");
}

function composeMotionTimeline(inspection, motionPrefix = "") {
  const recipes = inspection.motionRecipes || [];
  const hints = inspection.animationHints || [];
  const webglAnimations = inspection.webgl?.animations;
  const keyframes = inspection.styles?.keyframes || [];
  const cssEffects = inspection.cssFeatures?.effects || [];
  const gsapAttrs = inspection.gsapDataAttrs || {};

  const hasWebGLTime = webglAnimations?.timeBasedAnimations?.length > 0;
  const hasTimeUniforms = webglAnimations?.timeAnalysis?.length > 0;
  const hasDynamicUniforms = webglAnimations?.uniformsOverTime && Object.keys(webglAnimations.uniformsOverTime).length > 0;

  const parts = [`${motionPrefix}# 7. Motion Timeline Recipes\n\n`];

  if (Object.keys(gsapAttrs).length > 0) {
    parts.push(`**GSAP/data animation attributes detected:**\n`);
    for (const [selector, attrs] of Object.entries(gsapAttrs).slice(0, 10)) {
      parts.push(`- \`${selector}\`: ${Object.entries(attrs).map(([key, value]) => `data-${key}="${value}"`).join(", ")}\n`);
    }
    parts.push("\n");
  }

  if (recipes.length > 0) {
    parts.push(`${recipes.length} scroll-linked motion pattern(s) detected:\n`);
    for (const recipe of recipes) {
      parts.push(`\n- **Type:** ${recipe.type}\n`);
      parts.push(`  Target: \`${recipe.target}\` (${recipe.tag})\n`);
      parts.push(`  Range: ${recipe.range}\n`);
      if (recipe.yDelta) parts.push(`  Y movement: ${recipe.yDelta}px\n`);
      if (recipe.parallaxRatio) parts.push(`  Parallax ratio: ${recipe.parallaxRatio}\n`);
      if (recipe.opacity) parts.push(`  Opacity: ${recipe.opacity}\n`);
      // FASE 3A: easing MEDIDO (cubic-bezier por mínimos cuadrados sobre los
      // samples scroll-linked). Reemplaza el alias genérico "power2.out" por
      // la curva real del original.
      if (recipe.easing) {
        const conf = typeof recipe.easing.confidence === "number"
          ? ` (${Math.round(recipe.easing.confidence * 100)}% fit)`
          : "";
        parts.push(`  Easing (measured): \`${recipe.easing.cubicBezier}\`${conf}\n`);
        if (recipe.easing.gsap && recipe.easing.gsap !== recipe.easing.cubicBezier) {
          parts.push(`  Easing alias (GSAP-ready): \`${recipe.easing.gsap}\`\n`);
        }
      }
      if (recipe.keyframes?.length) parts.push(`  Observed scroll keyframes: ${formatMotionKeyframes(recipe.keyframes)}\n`);
      parts.push(`  Implementation: ${recipe.implementation}\n`);
    }
    parts.push("\n");
  }

  if (hasWebGLTime || hasTimeUniforms || hasDynamicUniforms) {
    parts.push(`**WebGL/Canvas Animation Analysis:**\n`);
    
    if (hasDynamicUniforms) {
      const uniformKeys = Object.keys(webglAnimations.uniformsOverTime || {});
      parts.push(`- **Time-varying uniforms:** ${uniformKeys.slice(0, 8).join(", ") || "u_time, u_scrollProgress detected"}\n`);
      
      for (const analysis of (webglAnimations.timeAnalysis || []).slice(0, 3)) {
        parts.push(`- **${analysis.type}:** ${analysis.implementation}\n`);
      }
    }
    
    if (hasWebGLTime) {
      for (const anim of webglAnimations.timeBasedAnimations.slice(0, 2)) {
        parts.push(`- **${anim.type}:** ${anim.evidence}\n`);
      }
    }
    
    parts.push("\n");
  }

  if (hints.length > 0) {
    parts.push(`**DOM Animation Hints:** ${hints.slice(0, 6).join(", ")}\n`);
  }

  if (keyframes.length > 0) {
    parts.push(`\n**CSS keyframes to preserve or recreate:**\n`);
    for (const keyframe of keyframes.slice(0, 8)) {
      parts.push(`- \`${keyframe.name}\`: ${keyframe.frames?.map((frame) => frame.key).slice(0, 6).join(", ") || "frames extracted"}\n`);
    }
  }

  const effectMotion = cssEffects.filter((effect) => ["animation", "positioning", "scrolling", "3d", "masking", "shaping", "filtering", "blending"].includes(effect.category));
  if (effectMotion.length > 0) {
    parts.push(`\n**Effect-driven motion/effects:**\n`);
    for (const effect of effectMotion.slice(0, 10)) {
      parts.push(`- ${effect.feature}: ${effect.count} occurrence(s); ${effect.usage || "usage extracted from CSS"}\n`);
    }
  }

  if (!recipes.length && !hasWebGLTime && !hasTimeUniforms && !hasDynamicUniforms && !hints.length) {
    parts.push(`No measured scroll-linked motion was detected. Do not invent complex motion; recreate only the CSS keyframes, transitions, and effects listed above.`);
  } else {
    parts.push(`\n**Math:** Use lerp next = current + (target - current) * alpha with alpha 0.08-0.18.\n`);
    parts.push(`**Easing:** cubic-bezier(0.22, 1, 0.36, 1) for premium reveals.\n`);
    parts.push(`**Rule:** Respect prefers-reduced-motion.\n`);
  }

  return parts.join("");
}

function composeInteractionRecipes(inspection, motionPrefix = "") {
  const effects = inspection.hoverEffects || [];

  if (!effects.length) {
    return `${motionPrefix}# 8. Interaction Recipes

No hover interactions were measured. Do not invent generic hover behavior; preserve extracted CSS transitions, cursor rules, clip-path effects, and button/link states from the selector and section blueprints.`;
  }

  const grouped = {};
  for (const effect of effects) {
    const type = effect.effect || "no visible effect";
    if (!grouped[type]) grouped[type] = [];
    grouped[type].push(effect);
  }

  const parts = [`${motionPrefix}# 8. Interaction Recipes\n\n${effects.length} hover target(s) probed:\n`];

  for (const [type, items] of Object.entries(grouped)) {
    parts.push(`\n**${type}:** ${items.map((i) => `\`${i.selector}\` (${i.text || i.tag})`).join(", ")}\n`);
    for (const item of items.slice(0, 5)) {
      const changes = item.styleChanges;
      if (changes && Object.keys(changes).length > 0) {
        const lines = [];
        for (const [prop, vals] of Object.entries(changes).slice(0, 5)) {
          if (vals.before !== vals.after) {
            lines.push(`${prop}: ${vals.before} → ${vals.after}`);
          }
        }
        if (lines.length) {
          parts.push(`  - \`${item.selector}\`: ${lines.join("; ")}\n`);
        }
      }
    }
  }

  return parts.join("");
}

function composeAssetRequirements(inspection) {
  const assets = inspection.assets;
  if (!assets) {
    return `# 9. Asset Requirements

No asset manifest available. Do not assume hero images, logos, fonts, or decorative textures; use only assets detected in screenshots/CSS or provide original niche assets that match the observed composition.`;
  }

  const parts = [`# 9. Asset Requirements\n\n`];
  parts.push(`- **Images:** ${assets.images?.length || 0} detected — plan for hero, content, and decorative images\n`);
  parts.push(`- **Videos:** ${assets.videos?.length || 0} detected\n`);
  parts.push(`- **Fonts:** ${assets.fonts?.length || 0} detected\n`);
  parts.push(`- **Inline SVGs:** ${assets.inlineSvgCount || 0}\n`);
  parts.push(`- **Canvases:** ${assets.canvasCount || 0}\n`);

  if (assets.suspiciousHeavyAssets?.length) {
    parts.push(`\n**Heavy assets warning:** ${assets.suspiciousHeavyAssets.length} file(s) over 2MB\n`);
    for (const heavy of assets.suspiciousHeavyAssets.slice(0, 3)) {
      parts.push(`- ${heavy.url} (${heavy.sizeMB}MB)\n`);
    }
  }

  parts.push(`\n**Rule:** Do not copy proprietary assets. Recreate the design language with original, niche-specific content.`);

  return parts.join("");
}

function composeResponsiveRules(inspection, visualRhythm) {
  const visualEvidence = inspection.visualEvidence || [];
  const viewportCount = new Set(visualEvidence.map((e) => e.viewport)).size;

  const evidenceByViewport = {};
  for (const ev of visualEvidence) {
    if (!evidenceByViewport[ev.viewport]) evidenceByViewport[ev.viewport] = [];
    evidenceByViewport[ev.viewport].push(ev);
  }

  const parts = [`# 10. Responsive Rules\n\n`];
  parts.push(`- Mobile-first breakpoint strategy: 390px, 834px, 1440px\n`);
  parts.push(`- ${viewportCount >= 3 ? "All three viewports captured" : viewportCount >= 2 ? "Desktop and mobile captured" : "Only desktop captured — test mobile manually"}\n`);

  for (const [vp, points] of Object.entries(evidenceByViewport)) {
    const scroll0 = points.find((p) => p.scrollPercent === 0);
    const scroll50 = points.find((p) => p.scrollPercent === 50);
    const scroll100 = points.find((p) => p.scrollPercent === 100);

    if (scroll0?.visibleText?.length) {
      const texts = scroll0.visibleText.slice(0, 4).map((t) => `${t.level}: "${t.text.slice(0, 60)}"`);
      parts.push(`- ${vp}@0%: ${texts.join("; ")}\n`);
    }
    if (scroll50?.visibleText?.length) {
      const texts = scroll50.visibleText.slice(0, 3).map((t) => `${t.level}: "${t.text.slice(0, 60)}"`);
      parts.push(`- ${vp}@50%: ${texts.join("; ")}\n`);
    }
    if (scroll100?.visibleText?.length) {
      const texts = scroll100.visibleText.slice(0, 2).map((t) => `${t.level}: "${t.text.slice(0, 60)}"`);
      parts.push(`- ${vp}@100%: ${texts.join("; ")}\n`);
    }

    if (scroll0?.dominantLayoutSignals?.length) {
      parts.push(`- ${vp} signals: ${scroll0.dominantLayoutSignals.join(", ")}\n`);
    }
  }

  const hasMobile = Boolean(evidenceByViewport.mobile);
  const hasTablet = Boolean(evidenceByViewport.tablet);
  const hasCanvas = (inspection.assets?.canvasCount || 0) > 0 || (inspection.webgl?.canvasCount || 0) > 0;

  parts.push(`- Preserve captured breakpoint behavior from ${Object.keys(evidenceByViewport).join(", ") || "available screenshots"}.\n`);
  if (!hasMobile) parts.push(`- Mobile was not captured; derive mobile from section blueprints instead of assuming a hamburger pattern.\n`);
  if (hasTablet) parts.push(`- Tablet evidence exists; keep intermediate layout proportions instead of jumping directly from desktop to mobile.\n`);
  if (hasCanvas) parts.push(`- WebGL/canvas must be lazy-loaded, DPR-capped, and visually replaced with a static niche-specific fallback when disabled.\n`);
  parts.push(`- Touch targets remain at least 44px, while preserving the reference button shape, border radius, color states, and spacing rhythm.\n`);

  if (visualRhythm?.stickySceneEstimate) {
    parts.push(`- Sticky scenes convert to static sections on mobile\n`);
  }

  return parts.join("");
}

function composeCroAdaptation(conversionPlan, inspection, niche, fidelityLevel = "standard") {
  const parts = [`# 11. CRO Adaptation

**Paradigm:** ${conversionPlan.paradigm}

**Required conversion blocks:**
${(conversionPlan.requiredBlocks || []).map((b) => `- ${b}`).join("\n")}

**Pushback:**
${(conversionPlan.pushbacks || []).map((b) => `- ${b}`).join("\n")}

**Niche:** ${niche}
Translate the extracted aesthetic into ${niche}. Preserve the premium visual grammar, but rewrite structure, copy, proof, and CTAs around the business outcome. The first viewport must communicate who this is for, what measurable value is offered, why the visitor should trust it, and what action to take next.

---

### Niche Content Translation Table

Edit the [____] fields below with your copy for "${niche}". All styling, classes, and animations are preserved automatically.\n\n`];

  parts.push(buildNicheTranslationTable(inspection, niche));

  return parts.join("");
}

function composePerformanceBudget(conversionPlan, inspection) {
  const budget = conversionPlan.performanceBudget || {};
  const webglRisk = inspection.webgl?.performanceRisk;

  const parts = [`# 12. Performance Budget

- **LCP:** ${budget.lcp || "< 2.5s"}
- **Total load:** ${budget.totalLoad || "< 5s"}
- **JS:** ${budget.jsBudget || "Keep route-level JS lean; lazy-load WebGL and heavy animation bundles"}
- **Motion:** ${budget.motion || "Respect prefers-reduced-motion and pause offscreen animation"}
`];

  if (webglRisk && webglRisk.level !== "low") {
    parts.push(`\n**Performance risk:** ${webglRisk.level}\n`);
    for (const risk of webglRisk.risks || []) {
      parts.push(`- ${risk}\n`);
    }
  }

  return parts.join("");
}

function composeAccessibilityConstraints(conversionPlan) {
  return `# 13. Accessibility Constraints

${(conversionPlan.accessibility || [
    "Use semantic HTML landmarks and descriptive accessible names.",
    "Maintain WCAG AA contrast for text over glass, video, gradients, and WebGL canvases.",
    "Keyboard states must be visible and match hover affordances.",
    "Provide reduced-motion alternatives for scroll-linked animation."
  ]).map((r) => `- ${r}`).join("\n")}`;
}

function composeAcceptanceCriteria(inspection, niche) {
  const sectionCount = (inspection.sections || []).length;
  const motionCount = (inspection.motionRecipes || []).length;

  return `# 14. Acceptance Criteria

The implementation is not accepted unless:
- The hero communicates value without scrolling.
- ${sectionCount > 0 ? `All ${sectionCount} sections match the extracted layout rhythm.` : "Desktop and mobile match the reference layout rhythm."}
- All scroll animations have reduced-motion alternatives.
- ${inspection.webgl?.webglCount > 0 ? "WebGL/canvas is lazy-loaded and never contains critical text." : "No blocking render resources on initial paint."}
- Primary CTA is visible above the fold on desktop and mobile.
- WCAG AA contrast maintained on all text surfaces.
- Page loads in under 5 seconds on 3G Fast.
- ${motionCount > 0 ? `All ${motionCount} motion patterns are recreated with equivalent feel.` : "No unobserved motion is added; use only extracted CSS transitions/keyframes/effects or document the missing evidence."}`;
}

function composeFinalAgentPrompt(trimmed, designLanguage, referenceProfile, confidencePrefix = "", llmInterpretation = null, pixelPalette = null) {
  const { inspection, niche, url } = trimmed;
  const colors = inspection.tokens?.colors || [];
  const fonts = inspection.tokens?.fonts || [];
  const technologies = inspection.technologies || [];

  const formattedColors = colors.slice(0, 8).join(", ") || "no reliable color evidence";
  const formattedFonts = fonts.slice(0, 4).join(" | ") || "no reliable font evidence";

  const hasGsap = technologies.some(t => t.includes("GSAP"));
  const hasScrollTrigger = technologies.some(t => t.includes("ScrollTrigger"));
  const hasWebGL = inspection.webgl?.webglCount > 0;
  const hasLenis = technologies.some(t => t.includes("Lenis"));
  const profile = referenceProfile || buildReferenceProfile(inspection, designLanguage);
  const concreteEffects = profile.cssEffects.slice(0, 8).map((effect) => `${effect.feature} x${effect.count}`).join(", ");
  const concreteColors = profile.colorRoles.slice(0, 8).map((entry) => `${entry.role}=${entry.color}`).join("; ");
  const concreteType = profile.typeScale.slice(0, 6).map((entry) => `${entry.tag}:${entry.fontSize || "?"}/${entry.fontWeight || "?"}`).join("; ");
  const installPackages = ["gsap"];
  if (hasLenis) installPackages.push("lenis");
  if (hasWebGL) installPackages.push("three");

  const llmDirectives = llmInterpretation?.used && llmInterpretation.directives?.length
    ? `\n=== IA DIRECTIVES FOR "${niche}" ===\n${llmInterpretation.directives.map(d => `- ${d}`).join("\n")}\n`
    : "";

  const plugins = ["ScrollTrigger"];
  const pluginReg = `gsap.registerPlugin(${plugins.join(", ")});`;

  const lenisSetup = hasLenis ? `\n\n// Lenis smooth scroll detected — use:\nimport Lenis from "lenis";\nconst lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });\nlenis.on("scroll", ScrollTrigger.update);\ngsap.ticker.add((time) => lenis.raf(time * 1000));\ngsap.ticker.lagSmoothing(0);` : "";

  const sectionRefs = `=== SECTIONS STRUCTURE ===
See #6 Section-by-Section Build Spec above for the complete section map with layout, backgrounds, children styles, and adaptation notes for each block.

=== MOTION & GSAP ===
See #7 Motion Timeline Recipes and #8 Interaction Recipes above for all extracted GSAP scroll recipes, keyframes, hover effects, and WebGL time analysis.

=== DESIGN TOKENS ===
See #3 Design Token System above for full CSS variables, color roles, typography scale, spacing, and fluid type rules.`;

  return `# 15. Final Agent Prompt

\`\`\`text
You are an Awwwards-winning frontend developer. Build an evidence-matched site for: "${niche}".

Reference: ${url}

=== DESIGN TOKENS ===
- Design Language: ${designLanguage.label}
- Colors: ${formattedColors}
- Fonts: ${formattedFonts}
- Color roles: ${concreteColors || "use extracted palette only"}
- Type scale: ${concreteType || "use extracted font families and computed sizes"}
- Effects to recreate: ${concreteEffects || "only effects listed in CSS architecture"}

=== FIDELITY TARGET ===
Target 80-90% resemblance in layout rhythm, layer order, typography scale, palette roles, motion timing, scroll behavior, hover feel, and WebGL/canvas treatment. Do not settle for a generic premium landing page. Every major visual choice must map back to an observed selector, token, screenshot, motion recipe, CSS feature, or WebGL finding in this brief.

Do not copy original brand assets, logos, names, proprietary images, or text. Replace them with original "${niche}" content while preserving the reference's composition and interaction grammar.
${llmDirectives}

${sectionRefs}
=== BOILERPLATE SETUP ===
\`\`\`bash
npm install ${installPackages.join(" ")}
\`\`\`

\`\`\`javascript
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
${pluginReg}
${lenisSetup}
\`\`\`

=== DEVELOPMENT LAWS ===
1. Use transform/opacity for all animations (GPU-composited).
2. Respect prefers-reduced-motion — disable parallax/stagger, keep simple fades.
3. Lazy-load WebGL/Three.js bundles; cap DPR at 2 on mobile.
4. Responsive: 390px, 834px, 1440px. CTA visible above fold on all.
5. WCAG AA contrast on all text surfaces.
6. Primary easing: cubic-bezier(0.22, 1, 0.36, 1).
7. Scroll-linked animations use scrub:1 unless noted otherwise.
8. Preserve class/selector structure as a build blueprint, but rename implementation classes only after matching the visual result.
9. Do not copy original text or assets. Adapt all copy to "${niche}" while preserving visual grammar.
10. Include a short implementation note beside each major component explaining which extracted evidence it recreates.
\`\`\`
`;
}

function recommendStack(technologies, hasWebGL, cssComplexity) {
  if (hasWebGL && cssComplexity > 60) return "Next.js or Astro + GSAP + Three.js (WebGL evidence detected)";
  if (cssComplexity > 50) return "Astro/Vite + GSAP for scroll choreography";
  if (technologies.includes("React") || technologies.includes("Next.js")) return "Next.js with app router";
  if (cssComplexity < 30) return "Static HTML/CSS or Astro — effects are simple enough for CSS-only";
  return "Astro or Vite + vanilla JS — lean stack for moderate complexity";
}

function pick(obj, keys) {
  if (!obj || !keys) return obj;
  const result = {};
  for (const key of keys) {
    if (key in obj) result[key] = obj[key];
  }
  return result;
}

function trimEvidence(evidence, level = "standard") {
  const limits = TRIM_LEVELS[level] || TRIM_LEVELS.standard;

  const originalInsp = evidence.inspection || {};

  return {
    url: evidence.url,
    niche: evidence.niche,
    generatedAt: evidence.generatedAt,
    fidelityScore: evidence.fidelityScore,
    introTimeline: evidence.introTimeline || originalInsp.introTimeline || null,
    designLanguage: evidence.designLanguage,
    visualRhythm: evidence.visualRhythm,
    motionAnalysis: evidence.motionAnalysis,
    conversionPlan: evidence.conversionPlan,
    // FASE 1A/1B/2A: exponer paleta pixel, descripción visual LLM y escala de
    // espaciado normalizada para que las secciones del brief las consuman.
    pixelPalette: evidence.pixelPalette || null,
    spacing: evidence.spacing || null,
    llmInterpretation: evidence.llmInterpretation || null,
    inspection: {
      title: originalInsp.title,
      description: originalInsp.description,
      h1: originalInsp.h1,
      technologies: originalInsp.technologies,
      viewport: originalInsp.viewport,
      sections: (originalInsp.sections || []).slice(0, limits.MAX_SECTIONS),
      motionRecipes: (originalInsp.motionRecipes || []).slice(0, limits.MAX_MOTION),
      hoverEffects: (originalInsp.hoverEffects || []).slice(0, limits.MAX_HOVER),
      ctas: (originalInsp.ctas || []).slice(0, limits.MAX_CTAS),
      tokens: {
        cssVariables: Object.fromEntries(
          Object.entries(originalInsp.tokens?.cssVariables || {}).slice(0, limits.MAX_CSS_VARS)
        ),
        colors: (originalInsp.tokens?.colors || []).slice(0, limits.MAX_COLORS),
        fonts: (originalInsp.tokens?.fonts || []).slice(0, limits.MAX_FONTS),
        spacingScale: (originalInsp.tokens?.spacingScale || []).slice(0, limits.MAX_SPACING),
      },
      styles: originalInsp.styles ? {
        totalRuleCount: originalInsp.styles.totalRuleCount,
        externalSheets: (originalInsp.styles.externalSheets || []).slice(0, limits.MAX_STYLESHEETS),
        crossOriginSheets: originalInsp.styles.crossOriginSheets || [],
        mediaQueries: (originalInsp.styles.mediaQueries || []).slice(0, limits.MAX_MEDIA_QUERIES),
        fontFaces: (originalInsp.styles.fontFaces || []).slice(0, limits.MAX_FONT_FACES),
        keyframes: (originalInsp.styles.keyframes || []).slice(0, limits.MAX_KEYFRAMES),
        styleRules: (originalInsp.styles.styleRules || []).slice(0, limits.MAX_CSS_RULES),
        cssVariableMap: Object.fromEntries(
          Object.entries(originalInsp.styles.cssVariableMap || {}).slice(0, limits.MAX_CSS_VARS)
        ),
        // FASE 2B: escala tipográfica fluida (clamp/vw/media) reproducible.
        fluidTypeScale: originalInsp.styles.fluidTypeScale || null
      } : null,
      layout: originalInsp.layout,
      gsapDataAttrs: originalInsp.gsapDataAttrs || {},
      animationHints: (originalInsp.animationHints || []).slice(0, limits.MAX_ANIMATION_HINTS),
      semanticTags: originalInsp.semanticTags,
      risks: (originalInsp.risks || []).slice(0, limits.MAX_RISKS),
      cssFeatures: originalInsp.cssFeatures,
      webgl: originalInsp.webgl,
      sectionStructure: (originalInsp.sectionStructure || []).slice(0, limits.MAX_SECTION_STRUCTURE).map(sect => ({
        index: sect.index,
        tag: sect.tag,
        classList: sect.classList,
        id: sect.id,
        background: sect.background,
        computedStyles: sect.computedStyles ? {
          display: sect.computedStyles.display,
          position: sect.computedStyles.position,
          minHeight: sect.computedStyles.minHeight,
          background: sect.computedStyles.background,
          padding: sect.computedStyles.padding,
        } : null,
        layoutConfig: sect.layoutConfig,
        keyChildren: (sect.keyChildren || []).slice(0, limits.MAX_KEY_CHILDREN).map(c => ({
          tag: c.tag,
          classList: c.classList,
          id: c.id,
          textContent: (c.textContent || "").slice(0, limits.TEXT_CONTENT_LENGTH),
          src: c.src,
          href: c.href,
          animation: c.animation,
          styles: pick(c.styles, limits.CHILDREN_STYLES),
        })),
        htmlSnippet: sect.htmlSnippet
          ? sect.htmlSnippet.slice(0, limits.HTML_SNIPPET_LENGTH)
          : "",
      })),
      assets: originalInsp.assets ? {
        images: (originalInsp.assets.images || []).slice(0, limits.MAX_IMAGES),
        videos: (originalInsp.assets.videos || []).slice(0, limits.MAX_VIDEOS),
        fonts: (originalInsp.assets.fonts || []).slice(0, limits.MAX_FONTS_ASSETS),
        scripts: (originalInsp.assets.scripts || []).slice(0, limits.MAX_SCRIPTS),
        stylesheets: (originalInsp.assets.stylesheets || []).slice(0, limits.MAX_STYLESHEETS),
        models3d: (originalInsp.assets.models3d || []).slice(0, limits.MAX_3D_MODELS),
        inlineSvgCount: originalInsp.assets.inlineSvgCount,
        canvasCount: originalInsp.assets.canvasCount,
        cssBackgroundImages: (originalInsp.assets.cssBackgroundImages || []).slice(0, limits.MAX_CSS_BG_IMAGES),
        suspiciousHeavyAssets: (originalInsp.assets.suspiciousHeavyAssets || []).slice(0, limits.MAX_HEAVY_ASSETS),
      } : null,
      visualEvidence: (originalInsp.visualEvidence || []).slice(0, limits.MAX_VISUAL_EVIDENCE),
      downloadedAssets: originalInsp.downloadedAssets,
      introTimeline: originalInsp.introTimeline || null,
    }
  };
}


