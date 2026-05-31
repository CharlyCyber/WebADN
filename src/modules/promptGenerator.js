import { composeMegaBrief } from "./briefComposer.js";

export function generateMasterPrompt({ url, niche, inspection, motionAnalysis, conversionPlan, knowledgeMatrix, evidence }) {
  if (evidence) {
    const fidelityLevel = evidence.fidelityLevel || "standard";
    const briefEvidence = {
      inspection,
      visualRhythm: evidence.visualRhythm || null,
      conversionPlan,
      knowledgeMatrix,
      niche,
      url
    };
    return composeMegaBrief(briefEvidence, fidelityLevel);
  }

  return generateLegacyPrompt({ url, niche, inspection, motionAnalysis, conversionPlan, knowledgeMatrix });
}

function generateLegacyPrompt({ url, niche, inspection, motionAnalysis, conversionPlan, knowledgeMatrix }) {
  return `# Awwwards Surgical Extractor & Prompt Engine Output

Reference URL: ${url}
Target niche: ${niche}

## [Tech Stack & Tokens]

Detected technologies:
${formatList(inspection.technologies, "No explicit framework signatures detected. Build with the leanest stack that satisfies the effect requirements.")}

Fonts:
${formatList(inspection.tokens.fonts, "Use a performant premium serif/sans pairing with local or next/font loading.")}

Colors:
${formatList(inspection.tokens.colors, "Define a restrained palette with accessible contrast.")}

CSS variables:
${formatObject(inspection.tokens.cssVariables, "No CSS variables extracted. Create a tokenized theme from the color and spacing findings.")}

Spacing scale:
${formatList(inspection.tokens.spacingScale, "Use an 8px-based scale with fluid section spacing.")}

Layout blueprint:
- Dominant layout: ${inspection.layout.dominant}
- Grid nodes: ${inspection.layout.counts.grid}
- Flex nodes: ${inspection.layout.counts.flex}
- Sticky nodes: ${inspection.layout.counts.sticky}
- Fixed nodes: ${inspection.layout.counts.fixed}

## [Arquitectura de Conversión & Pushback]

Paradigm: ${conversionPlan.paradigm}

Required pushback:
${formatList(conversionPlan.pushbacks, "No hard pushback required from extraction; still prioritize clarity, speed, and conversion.")}

Mandatory conversion blocks:
${formatList(conversionPlan.requiredBlocks)}

Performance and SEO rules:
${formatObject(conversionPlan.performanceBudget)}
${formatList(conversionPlan.seo)}

Accessibility rules:
${formatList(conversionPlan.accessibility)}

## [Desglose de Ingeniería de Animaciones]

Extracted motion hints:
${formatList(inspection.animationHints, "No visible motion hints extracted. Use subtle enhancement only.")}

Vision Engine findings:
${formatList(motionAnalysis.findings)}

Engineering translations:
- Lerp: ${knowledgeMatrix.interactions.lerp}
- Premium easing: ${knowledgeMatrix.animationMath.premiumEase}
- Scroll damping: ${knowledgeMatrix.animationMath.scrollDamping}
- Shader uniforms: ${knowledgeMatrix.animationMath.shaderUniforms}
- GPU rule: ${knowledgeMatrix.webgl3d.gpuOptimization}

Motion directives filtered through conversion:
${formatList(conversionPlan.motionDirectives)}

## [Adaptación al Nicho]

Translate the extracted aesthetic into ${niche}. Preserve the premium visual grammar, but rewrite structure, copy, proof, and CTAs around the business outcome. The first viewport must communicate:
- Who this is for.
- What measurable value is offered.
- Why the visitor should trust it.
- What action to take next.

Use spectacle only where it makes the offer easier to understand or makes a CTA/proof block more memorable.

## [Prompt Final Ejecutable]

\`\`\`text
You are a senior full-stack product engineer and conversion-focused web designer.

Build a premium, high-performance website for this niche: "${niche}".

Reference the visual and interaction language from ${url}, but do not clone blindly. Apply mandatory conversion pushback:
${formatInlineBullets(conversionPlan.pushbacks.length ? conversionPlan.pushbacks : ["Prioritize value clarity, speed, accessibility, and conversion over decoration."])}

Use this extracted foundation:
- Technologies to consider: ${(inspection.technologies.length ? inspection.technologies : ["lean React/Next.js or static HTML when sufficient"]).join(", ")}
- Typography signals: ${(inspection.tokens.fonts.length ? inspection.tokens.fonts : ["premium sans/serif pairing"]).join(" | ")}
- Palette signals: ${(inspection.tokens.colors.length ? inspection.tokens.colors.slice(0, 12) : ["accessible neutral base plus one conversion accent"]).join(", ")}
- Layout: ${inspection.layout.dominant}
- Motion: ${(inspection.animationHints.length ? inspection.animationHints : ["subtle reveal animations"]).join(", ")}

Implementation requirements:
1. Load in under 5 seconds, target LCP under 2.5s, and lazy-load non-critical animation/WebGL.
2. Use semantic HTML, one H1, accessible names, keyboard focus states, and WCAG AA contrast.
3. Above the fold must include a clear offer, proof point, and primary CTA.
4. Add trust blocks near pricing/contact friction.
5. Every animation must guide attention toward value, proof, or action.
6. Use transform and opacity for DOM motion. Use requestAnimationFrame for pointer/scroll loops.
7. Respect prefers-reduced-motion.
8. If using WebGL/shaders, expose u_time, u_scrollProgress, u_pointer, u_velocity, and cap DPR on mobile.

Animation math:
- Use lerp next = current + (target - current) * alpha with alpha 0.08-0.18.
- Use easing cubic-bezier(0.22, 1, 0.36, 1) for premium reveals.
- Use scroll damping targetScroll += (nativeScroll - targetScroll) * 0.1.

Deliver a production-ready responsive site with modular components, tokenized styles, and concise conversion copy adapted to "${niche}".
\`\`\`
`;
}

function formatList(items = [], fallback = "None.") {
  if (!items.length) return `- ${fallback}`;
  return items.map((item) => `- ${item}`).join("\n");
}

function formatObject(object = {}, fallback = "None.") {
  const entries = Object.entries(object);
  if (!entries.length) return `- ${fallback}`;
  return entries.map(([key, value]) => `- ${key}: ${value}`).join("\n");
}

function formatInlineBullets(items) {
  return items.map((item) => `- ${item}`).join("\n");
}
