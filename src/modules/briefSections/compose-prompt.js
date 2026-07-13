import { buildReferenceProfile } from "./compose-tokens.js";

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

  const lenisSetup = hasLenis ? `\n\n// Lenis smooth scroll detected \u2014 use:\nimport Lenis from "lenis";\nconst lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });\nlenis.on("scroll", ScrollTrigger.update);\ngsap.ticker.add((time) => lenis.raf(time * 1000));\ngsap.ticker.lagSmoothing(0);` : "";

  const sectionRefs = `=== SECTIONS STRUCTURE ===
See #6 Section-by-Section Build Spec above for the complete section map with layout, backgrounds, children styles, and adaptation notes for each block.

=== MOTION & GSAP ===
See #7 Motion Timeline Recipes and #8 Interaction Recipes above for all extracted GSAP scroll recipes, keyframes, hover effects, and WebGL time analysis.

=== DESIGN TOKENS ===
See #3 Design Token System above for full CSS variables, color roles, typography scale, spacing, and fluid type rules.`;

  return `# 15. Final Agent Prompt

\`\`\`text
You are a WebADN surgical extraction specialist. Build an evidence-matched site for: "${niche}".

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
2. Respect prefers-reduced-motion \u2014 disable parallax/stagger, keep simple fades.
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

export {
  composeFinalAgentPrompt
};
