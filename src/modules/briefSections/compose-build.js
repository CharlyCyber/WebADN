import { buildNicheTranslationTable } from "../nicheAdapter.js";

const RESET_SELECTOR_PATTERNS = [
  /^(\*|html)$/,
  /^body$/,
  /^:root$/,
  /^\.w-/,
];

function recommendStack(technologies, hasWebGL, cssComplexity) {
  if (hasWebGL && cssComplexity > 60) return "Next.js or Astro + GSAP + Three.js (WebGL evidence detected)";
  if (cssComplexity > 50) return "Astro/Vite + GSAP for scroll choreography";
  if (technologies.includes("React") || technologies.includes("Next.js")) return "Next.js with app router";
  if (cssComplexity < 30) return "Static HTML/CSS or Astro \u2014 effects are simple enough for CSS-only";
  return "Astro or Vite + vanilla JS \u2014 lean stack for moderate complexity";
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
      parts.push(`- \`${mq.conditionText}\` \u2014 ${mq.rules.length} rule(s)\n`);
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
    parts.push(`*(${skippedCount} framework/reset selectors omitted \u2014 only value-bearing selectors shown)*\n`);
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

  if (hasWebGL || hasCanvas) {
    const webglLib = inspection.webgl?.likely3dLibrary || "WebGL";
    const uniforms = webglAnimations?.uniformsOverTime ? Object.keys(webglAnimations.uniformsOverTime).slice(0, 4).join(", ") : "u_time, u_scrollProgress";
    components.push(`${webglLib} scene canvas${uniforms ? ` (${uniforms})` : ""} (lazy-loaded, time-based animations)`);
  }

  if (inspection.webgl?.shaderDetails?.length > 0) {
    components.push("Custom shader effects with uniforms");
  }

  if (webglAnimations?.domTimeAnimations?.length > 0) {
    components.push("Auto-playing DOM animations (time-based reveals)");
  }

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

function composeAssetRequirements(inspection) {
  const assets = inspection.assets;
  if (!assets) {
    return `# 9. Asset Requirements

No asset manifest available. Do not assume hero images, logos, fonts, or decorative textures; use only assets detected in screenshots/CSS or provide original niche assets that match the observed composition.`;
  }

  const parts = [`# 9. Asset Requirements\n\n`];
  parts.push(`- **Images:** ${assets.images?.length || 0} detected \u2014 plan for hero, content, and decorative images\n`);
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
  parts.push(`- ${viewportCount >= 3 ? "All three viewports captured" : viewportCount >= 2 ? "Desktop and mobile captured" : "Only desktop captured \u2014 test mobile manually"}\n`);

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

export {
  composeCssArchitecture,
  composeComponentArchitecture,
  composeSectionBuildSpec,
  composeAssetRequirements,
  composeResponsiveRules,
  composeCroAdaptation,
  prioritizeChildren,
  recommendStack
};
