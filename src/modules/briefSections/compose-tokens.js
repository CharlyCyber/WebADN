import { classifyColorsBySingleRole } from "../../shared/color-roles.js";
import { extractTypeScale } from "../../shared/type-scale.js";

function buildReferenceProfile(inspection, designLanguage) {
  const colorRoles = classifyColorsBySingleRole(inspection);
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

function composeDesignTokens(trimmed, techPrefix = "") {
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

  const classifiedColors = classifyColorsBySingleRole(inspection);
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
      parts.push(`| \`${t.tag}\` | ${t.fontSize || "\u2014"} | ${t.fontWeight || "\u2014"} | ${t.lineHeight || "\u2014"} | ${t.letterSpacing || "\u2014"} |\n`);
    }
  }
  if (fonts.length && !typeScale.length) {
    parts.push(`\n## Typography\n${fonts.map((f) => `- ${f}`).join("\n")}\n`);
  }
  if (!fonts.length && !typeScale.length) {
    parts.push(`\n## Typography\n- No reliable font evidence extracted. Do not invent a pairing; use only detected font assets or request a visual/manual font pass.\n`);
  }

  if (fluidTypeScale && fluidTypeScale.rules?.length) {
    parts.push(`\n## Fluid Type Scale (responsive)\n`);
    parts.push(`Reglas \`clamp()\`/\`vw\`/media queries extra\u00eddas del CSSOM (no el valor resuelto en un viewport \u00fanico). Reproduce estas reglas en lugar de fijar un px est\u00e1tico.\n`);
    for (const rule of fluidTypeScale.rules) {
      const sources = rule.sources?.length ? rule.sources.join(", ") : "cssom";
      parts.push(`- \`${rule.tag}\` \u2192 \`font-size: ${rule.fluid}\` *(fuente: ${sources})*\n`);
    }
    if (fluidTypeScale.note) {
      parts.push(`\n${fluidTypeScale.note}\n`);
    }
  }

  parts.push(`\n## Spacing Scale\n`);
  if (spacingScale && spacingScale.scale?.length) {
    parts.push(`Base unit: **${spacingScale.baseUnit}px**${spacingScale.inferred ? " (inferida \u2014 sin evidencia suficiente, validar manualmente)" : ""}.\n`);
    parts.push("```css\n:root {\n");
    for (const token of spacingScale.tokens) {
      parts.push(`  ${token};\n`);
    }
    parts.push("}\n```\n");
    parts.push(`Tokens observados: ${spacingScale.scale.length} valores \u00fanicos`);
    if (spacingScale.observed && !spacingScale.inferred) {
      const o = spacingScale.observed;
      parts.push(` (mediana ${o.median}px, rango ${o.min}\u2013${o.max}px de ${o.total} muestras, ${o.unique} \u00fanicos)`);
    }
    parts.push(".\n");
    if (spacingScale.rhythm) {
      const r = spacingScale.rhythm;
      parts.push(`\n**Ritmo vertical de secciones:** ${r.sectionCount} secciones`);
      if (r.heroHeight) parts.push(` \u00b7 hero ~${r.heroHeight}px`);
      if (r.medianHeight) parts.push(` \u00b7 mediana ${r.medianHeight}px`);
      if (r.footerHeight) parts.push(` \u00b7 footer ~${r.footerHeight}px`);
      if (r.viewportRatio) parts.push(` \u00b7 ${r.viewportRatio}\u00d7 viewport`);
      if (r.fullViewportSections) parts.push(` \u00b7 ${r.fullViewportSections} secci\u00f3n(es) full-viewport`);
      parts.push(".\n");
    }
  } else if (legacySpacing.length) {
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

export {
  buildReferenceProfile,
  composeFidelityTarget,
  composeDesignTokens
};
