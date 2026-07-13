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

export {
  composePerformanceBudget,
  composeAccessibilityConstraints,
  composeAcceptanceCriteria
};
