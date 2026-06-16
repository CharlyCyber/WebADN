export function applyConversionStrategy({ inspection, motionAnalysis, niche }) {
  const pushbacks = [];
  const requiredBlocks = [];
  const performanceBudget = {
    lcp: "< 2.5s",
    totalLoad: "< 5s",
    jsBudget: "Keep route-level JS lean; lazy-load WebGL and heavy animation bundles.",
    motion: "Respect prefers-reduced-motion and pause offscreen animation."
  };

  if (!inspection.h1 || inspection.h1.length < 18) {
    pushbacks.push("Strengthen the hero H1 so the value proposition is understandable without scrolling.");
  }

  if (!inspection.ctas?.some((cta) => cta.aboveFold)) {
    pushbacks.push("Add a primary above-the-fold CTA with concrete commercial intent.");
  }

  if (inspection.animationHints?.length > 4 || inspection.technologies?.includes("Three.js")) {
    pushbacks.push("Gate decorative motion behind conversion purpose: every 3D/parallax moment must direct attention toward proof, offer, or CTA.");
  }

  if ((inspection.semanticTags?.main ?? 0) === 0 || (inspection.semanticTags?.h1 ?? 0) !== 1) {
    pushbacks.push("Correct semantic structure with one main landmark and one clear H1 for SEO and assistive tech.");
  }

  if (inspection.risks?.length) {
    pushbacks.push(...inspection.risks.map((risk) => `Resolve extraction risk: ${risk}`));
  }

  requiredBlocks.push(
    `Hero with niche-specific offer for ${niche}, a concise proof point, and one primary CTA.`,
    "Trust block near the first friction point: testimonials, metrics, client logos, or before/after proof.",
    "Offer explanation section that makes the buying path obvious.",
    "Conversion-focused contact or booking flow with minimal fields.",
    "Accessible footer with business identity, navigation, and legal links."
  );

  const motionDirectives = buildMotionDirectives(inspection, motionAnalysis);

  return {
    paradigm: "Value first, spectacle second.",
    pushbacks,
    requiredBlocks,
    performanceBudget,
    motionDirectives,
    accessibility: [
      "Use semantic HTML landmarks and descriptive accessible names.",
      "Maintain WCAG AA contrast for text over glass, video, gradients, and WebGL canvases.",
      "Keyboard states must be visible and match hover affordances.",
      "Provide reduced-motion alternatives for scroll-linked animation."
    ],
    seo: [
      "One clear H1, metadata aligned with the offer, structured headings, and descriptive link text.",
      "Render core content server-side or statically where possible.",
      "Reserve canvas/WebGL for enhancement, not for critical copy."
    ]
  };
}

function buildMotionDirectives(inspection, motionAnalysis) {
  const directives = [];

  for (const hint of inspection.animationHints || []) {
    if (hint.includes("sticky")) {
      directives.push("Use sticky sections to sequence proof and offer clarity, not to delay the CTA.");
    }
    if (hint.includes("backdrop")) {
      directives.push("Use backdrop-filter only on small surfaces with tested contrast and fallback solid backgrounds.");
    }
    if (hint.includes("transform")) {
      directives.push("Keep transform/opacity as the primary animation properties to avoid layout thrash.");
    }
  }

  if (motionAnalysis.mappedTechniques?.includes("shader")) {
    directives.push("Expose shader intensity through uniforms and cap device pixel ratio on mobile.");
  }

  if (!directives.length) {
    directives.push("Use restrained reveal animations with cubic-bezier(0.22, 1, 0.36, 1) and clear CTA direction.");
  }

  return [...new Set(directives)];
}
