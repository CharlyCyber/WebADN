function getConfidencePrefix(fidelityScore) {
  if (fidelityScore >= 80) return "";
  if (fidelityScore >= 50) return "\u26A0\uFE0F DATOS PARCIALES: ";
  return "\uD83D\uDD34 BAJA CONFIANZA \u2014 inferido, no extra\u00EDdo: ";
}

function composeClientBrief(clientBrief) {
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
      `  \u2022 ${s.name || "(sin t\u00EDtulo)"}${s.copy ? ` \u2014 ${s.copy}` : ""}`
    ).join("\n");
    lines.push(`- Secciones del sitio:\n${sectionLines}`);
  }

  if (extraBrief) lines.push(`- Notas adicionales: ${extraBrief}`);

  if (!lines.length) return null;

  return `# Brief del Cliente (paso 0)

El usuario proporcion\u00f3 este brief. Es PRIORITARIO: respetar marca, audiencia, tono y secciones listadas; todo el contenido de copy debe adaptarse a este contexto antes de aplicar la fidelidad visual del resto del brief.

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

  const llmSection = llmInterpretation?.used ? `
**IA Interpretation:** ${llmInterpretation.provider ? `(via ${llmInterpretation.provider}, ${Math.round(llmInterpretation.confidence * 100)}% confianza)` : ""}
${llmInterpretation.interpretation ? `\n${llmInterpretation.interpretation}\n` : ""}
${llmInterpretation.patterns?.length ? `\n**Patrones Inferidos:**\n${llmInterpretation.patterns.map(p => `- ${p}`).join("\n")}\n` : ""}
${llmInterpretation.directives?.length ? `\n**Directivas de Nicho:**\n${llmInterpretation.directives.map(d => `- ${d}`).join("\n")}\n` : ""}
${llmInterpretation.gaps?.length ? `\n**Gaps de Extracci\u00f3n:**\n${llmInterpretation.gaps.map(g => `- ${g}`).join("\n")}\n` : ""}` : "";

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

function composeVisualGroundTruth(pixelPalette, visualDescription) {
  if (!pixelPalette && !visualDescription) return "";

  const parts = [`# 2.5. Visual Ground Truth\n`];
  parts.push(`> Esta secci\u00f3n es el ground truth visual del sitio (no inferido del DOM): captura la composici\u00f3n percibida y los colores reales renderizados en pantalla, incluidos los que viven dentro de fotograf\u00edas, gradientes y texturas. Tr\u00e1tala como prioridad a la hora de recrear mood, layering y tratamiento de imagery.\n`);

  if (visualDescription) {
    parts.push(`\n## Descripci\u00f3n Visual (an\u00e1lisis IA multimodal sobre capturas reales)\n\n`);
    parts.push(visualDescription.trim() + "\n");
  } else {
    parts.push(`\n## Descripci\u00f3n Visual\n- No disponible (sin API key multimodal o sin capturas procesables). Considera inspeccionar manualmente el sitio de referencia para fijar composici\u00f3n y mood.\n`);
  }

  if (pixelPalette) {
    parts.push(`\n## Paleta Percibida (median-cut sobre pixels renderizados)\n`);
    parts.push(`- **M\u00e9todo:** ${pixelPalette.method || "median-cut"} \u00b7 ${pixelPalette.source || "screenshot cuantizado"}\n`);
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
        parts.push(`- **${g.type}:** \`${g.from}\` \u2192 \`${g.to}\`${g.note ? ` \u2014 ${g.note}` : ""}\n`);
      }
    }

    parts.push(`\n**Regla de fusi\u00f3n:** la paleta CSS declarada (secci\u00f3n #3) gana para tokens expl\u00edcitamente definidos por el autor; esta paleta pixel **rellena los vac\u00edos** y aporta accents/gradientes que el CSS no declar\u00f3 (im\u00e1genes, texturas). No inventes colores fuera de estas dos fuentes.\n`);
  }

  return parts.join("");
}

export {
  getConfidencePrefix,
  composeClientBrief,
  composeExecutiveDiagnosis,
  composeIntroTimeline,
  composeDnaSummary,
  composeVisualGroundTruth
};
