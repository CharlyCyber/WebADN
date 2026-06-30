// Codegen determinista desde IR (Intermediate Representation)
// Convierte evidencia extraída directamente a HTML/CSS/JS
// Sin pasar por prompt LLM. LLM solo para copy.

export function generateFromIR(evidence, niche, url) {
  if (!evidence || !evidence.inspection) return null;

  const insp = evidence.inspection;
  const sections = insp.sections || [];
  const structure = insp.sectionStructure || [];
  const styles = insp.styles || {};
  const tokens = insp.tokens || {};
  const recipes = insp.motionRecipes || [];
  const hovers = insp.hoverEffects || [];
  const pixelPalette = evidence.pixelPalette || {};
  const spacing = evidence.spacing || {};

  const colors = tokens.colors || [];
  const fonts = tokens.fonts || [];

  const palette = {
    background: pixelPalette.background || colors[0] || "#ffffff",
    dominant: pixelPalette.dominant || colors[1] || "#000000",
    accent: pixelPalette.accent || colors[2] || "#3b82f6",
    text: pixelPalette.textCandidates?.[0] || "#1a1a1a",
    muted: pixelPalette.muted || "#6b7280",
  };

  const fontStack = fonts.length > 0
    ? fonts.map(f => f.includes(" ") ? `"${f}"` : f).join(", ")
    : "system-ui, -apple-system, sans-serif";

  const sourceUrl = new URL(url).hostname;

  const html = buildHTML(sections, structure, niche, palette);
  const css = buildCSS(sections, structure, styles, tokens, spacing, recipes, palette, fontStack);
  const js = buildJS(recipes, hovers);

  return { html, css, js, sourceUrl };
}

function cleanHTMLSnippet(html, niche) {
  let cleaned = html;
  // Remove <script> tags and their content
  cleaned = cleaned.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
  // Remove inline event handlers
  cleaned = cleaned.replace(/\s+on\w+="[^"]*"/gi, "");
  cleaned = cleaned.replace(/\s+on\w+='[^']*'/gi, "");
  // Remove javascript: links
  cleaned = cleaned.replace(/href="javascript:[^"]*"/gi, 'href="#"');
  cleaned = cleaned.replace(/href='javascript:[^']*'/gi, "href='#'");
  return cleaned;
}

function buildHTML(sections, structure, niche, palette) {
  const parts = [];

  parts.push(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHTML(niche)}</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>`);

  if (!sections.length || !sections.some(s => s.role)) {
    parts.push(`
  <section class="hero" style="background:${palette.background};color:${palette.text};">
    <div class="container">
      <h1>${escapeHTML(niche)}</h1>
      <p>Premium ${escapeHTML(niche)} solutions.</p>
    </div>
  </section>`);
  } else {
    for (let i = 0; i < sections.length; i++) {
      const s = sections[i];
      const struct = structure[i] || {};
      const role = s.role || "section";
      const cls = struct.classList || s.tag || "section";
      const bgColor = struct.background?.color || s.background || palette.background;
      const isFull = s.isFullViewport;

      if (struct.htmlSnippet && struct.htmlSnippet.length > 50) {
        // Usar htmlSnippet real extraído del sitio original
        // Preserva jerarquía, wrappers, clases, inline SVGs, data-atributos
        const snippet = cleanHTMLSnippet(struct.htmlSnippet, niche);
        parts.push(`
  <section class="${role} ${cls}"${isFull ? ' data-fullviewport="true"' : ''}>`);
        parts.push(snippet
          .replace(/^<section[^>]*>/i, "")
          .replace(/<\/section>\s*$/i, ""));
        parts.push(`  </section>`);
      } else {
        // Fallback: reconstruir desde keyChildren
        parts.push(`
  <section class="${role} ${cls}"${isFull ? ' data-fullviewport="true"' : ''}${bgColor !== palette.background ? ` style="background:${bgColor};"` : ""}>`);
        parts.push(`    <div class="container">`);

        const children = struct.keyChildren || [];
        for (const child of children) {
          const tag = child.tag || "div";
          const clsAttr = child.classList ? ` class="${child.classList}"` : "";
          const text = child.textContent || "";
          const src = child.src || "";

          if (tag === "h1" || tag === "h2" || tag === "h3" || tag === "h4" || tag === "p") {
            parts.push(`      <${tag}${clsAttr}>${escapeHTML(text.replace(niche, `{niche}`))}</${tag}>`);
          } else if (tag === "img") {
            parts.push(`      <img${clsAttr} src="${escapeHTML(src)}" alt="" loading="lazy" />`);
          } else if (tag === "a" || tag === "button") {
            parts.push(`      <${tag}${clsAttr} class="btn">${escapeHTML(text) || "Learn more"}</${tag}>`);
          } else if (tag === "video") {
            parts.push(`      <video${clsAttr} src="${escapeHTML(src)}" autoplay muted loop playsinline></video>`);
          } else if (tag === "canvas" || tag === "svg") {
            parts.push(`      <${tag}${clsAttr}></${tag}>`);
          } else {
            const textContent = text ? escapeHTML(text.replace(niche, `{niche}`)) : "";
            parts.push(`      <${tag}${clsAttr}>${textContent}</${tag}>`);
          }
        }

        if (!children.length) {
          const hText = s.textHierarchy?.[0]?.text || role;
          parts.push(`      <h2>${escapeHTML(hText.replace(niche, `{niche}`))}</h2>`);
          parts.push(`      <p>Content for ${role} section.</p>`);
        }

        parts.push(`    </div>`);
        parts.push(`  </section>`);
      }
    }
  }

  parts.push(`
</body>
</html>`);

  return parts.join("\n");
}

function buildCSS(sections, structure, styles, tokens, spacing, recipes, palette, fontStack) {
  const parts = [];

  parts.push(`/* Generated from IR - Design DNA Compiler */
:root {
  --bg: ${palette.background};
  --dominant: ${palette.dominant};
  --accent: ${palette.accent};
  --text: ${palette.text};
  --muted: ${palette.muted};
  --font: ${fontStack};
  --spacing-unit: ${spacing.baseUnit || "8px"};
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: var(--font);
  color: var(--text);
  background: var(--bg);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

img { max-width: 100%; height: auto; display: block; }
video { max-width: 100%; display: block; }`);

  // CSS Variables originales del sitio
  const cssVars = tokens.cssVariables || {};
  const extraVars = Object.entries(cssVars).slice(0, 30);
  if (extraVars.length) {
    parts.push(`
:root {
  ${extraVars.map(([k, v]) => `${k}: ${v};`).join("\n  ")}
}`);
  }

  // @font-face originales
  if (styles.fontFaces && styles.fontFaces.length > 0) {
    parts.push(`\n/* @font-face originales */`);
    for (const ff of styles.fontFaces.slice(0, 10)) {
      parts.push(`\n${ff.css}`);
    }
  }

  // Style rules originales (limitado a 200 reglas)
  if (styles.styleRules && styles.styleRules.length > 0) {
    parts.push(`\n/* Reglas CSS originales */`);
    const seen = new Set();
    for (const rule of styles.styleRules.slice(0, 200)) {
      if (seen.has(rule.css)) continue;
      seen.add(rule.css);
      parts.push(`\n${rule.css}`);
    }
  }

  // @keyframes originales
  if (styles.keyframes && styles.keyframes.length > 0) {
    parts.push(`\n/* Animaciones @keyframes originales */`);
    for (const kf of styles.keyframes.slice(0, 20)) {
      parts.push(`\n${kf.css}`);
    }
  }

  // Layout de secciones desde sectionStructure (como CSS complementario)
  for (let i = 0; i < structure.length; i++) {
    const s = structure[i];
    const role = sections[i]?.role || `section-${i}`;

    if (s.htmlSnippet && s.htmlSnippet.length > 50) {
      // Sección con htmlSnippet: solo layout básico, el CSS real viene de styleRules
      const layout = s.layoutConfig || {};
      const bg = s.background || {};
      const hasLayout = layout.display || layout.flexDirection || layout.alignItems ||
        layout.justifyContent || layout.gap || layout.gridTemplateColumns ||
        layout.gridTemplateRows || (bg.color && bg.color !== "rgba(0, 0, 0, 0)") ||
        s.computedStyles?.padding || s.computedStyles?.minHeight;

      if (hasLayout) {
        parts.push(`
.${role} {
  ${layout.display ? `display: ${layout.display};` : ""}
  ${layout.flexDirection ? `flex-direction: ${layout.flexDirection};` : ""}
  ${layout.alignItems ? `align-items: ${layout.alignItems};` : ""}
  ${layout.justifyContent ? `justify-content: ${layout.justifyContent};` : ""}
  ${layout.gap ? `gap: ${layout.gap};` : ""}
  ${layout.gridTemplateColumns ? `grid-template-columns: ${layout.gridTemplateColumns};` : ""}
  ${layout.gridTemplateRows ? `grid-template-rows: ${layout.gridTemplateRows};` : ""}
  ${bg.color && bg.color !== "rgba(0, 0, 0, 0)" ? `background: ${bg.color};` : ""}
  ${s.computedStyles?.padding ? `padding: ${s.computedStyles.padding};` : ""}
  ${s.computedStyles?.minHeight ? `min-height: ${s.computedStyles.minHeight};` : ""}
}`);
      }
    } else {
      // Sin htmlSnippet: CSS completo desde keyChildren
      const layout = s.layoutConfig || {};
      const bg = s.background || {};

      parts.push(`
.${role} {
  ${layout.display ? `display: ${layout.display};` : ""}
  ${layout.flexDirection ? `flex-direction: ${layout.flexDirection};` : ""}
  ${layout.alignItems ? `align-items: ${layout.alignItems};` : ""}
  ${layout.justifyContent ? `justify-content: ${layout.justifyContent};` : ""}
  ${layout.gap ? `gap: ${layout.gap};` : ""}
  ${layout.gridTemplateColumns ? `grid-template-columns: ${layout.gridTemplateColumns};` : ""}
  ${layout.gridTemplateRows ? `grid-template-rows: ${layout.gridTemplateRows};` : ""}
  ${bg.color && bg.color !== "rgba(0, 0, 0, 0)" ? `background: ${bg.color};` : ""}
  ${s.computedStyles?.padding ? `padding: ${s.computedStyles.padding};` : ""}
  ${s.computedStyles?.minHeight ? `min-height: ${s.computedStyles.minHeight};` : ""}
}`);

      const children = s.keyChildren || [];
      for (const child of children) {
        const st = child.styles || {};
        const cls = child.classList ? child.classList.split(" ")[0] : null;
        if (!cls) continue;

        const props = [];
        if (st.fontSize) props.push(`font-size: ${st.fontSize}`);
        if (st.fontWeight) props.push(`font-weight: ${st.fontWeight}`);
        if (st.fontFamily) props.push(`font-family: ${st.fontFamily}`);
        if (st.color) props.push(`color: ${st.color}`);
        if (st.lineHeight) props.push(`line-height: ${st.lineHeight}`);
        if (st.letterSpacing) props.push(`letter-spacing: ${st.letterSpacing}`);
        if (st.textTransform) props.push(`text-transform: ${st.textTransform}`);
        if (st.textAlign) props.push(`text-align: ${st.textAlign}`);
        if (st.backgroundColor && st.backgroundColor !== "rgba(0, 0, 0, 0)") props.push(`background: ${st.backgroundColor}`);
        if (st.padding) props.push(`padding: ${st.padding}`);
        if (st.margin) props.push(`margin: ${st.margin}`);
        if (st.borderRadius) props.push(`border-radius: ${st.borderRadius}`);
        if (st.boxShadow) props.push(`box-shadow: ${st.boxShadow}`);
        if (st.opacity) props.push(`opacity: ${st.opacity}`);
        if (st.backdropFilter) props.push(`backdrop-filter: ${st.backdropFilter}`);

        if (props.length) {
          parts.push(`
.${role} .${cls} {
  ${props.join(";\n  ")};
}`);
        }
      }
    }
  }

  // Media queries originales
  if (styles.mediaQueries && styles.mediaQueries.length > 0) {
    parts.push(`\n/* Media queries originales */`);
    for (const mq of styles.mediaQueries.slice(0, 15)) {
      parts.push(`\n@media ${mq.conditionText} {`);
      for (const rule of mq.rules) {
        parts.push(`  ${rule.css}`);
      }
      parts.push(`}`);
    }
  }

  // Scroll-linked animations from motion recipes
  const scrollAnimations = recipes.filter(r => r.type.includes("scroll") || r.type === "sticky-pin");
  if (scrollAnimations.length) {
    parts.push(`\n/* Scroll-linked animations from extracted motion */`);
    for (const r of scrollAnimations) {
      const sel = r.target?.replace(/[:.#]/g, "-") || "animated";
      parts.push(`
.${sel} {
  transition: transform 0.1s linear, opacity 0.1s linear;
}`);
    }
  }

  // Hover effects
  if (hovers.length) {
    parts.push(`\n/* Hover effects */`);
    for (const h of hovers.slice(0, 10)) {
      parts.push(`
${h.selector}:hover {
  cursor: pointer;
}`);
    }
  }

  // Responsive fallback
  const hasMediaQueries = styles.mediaQueries && styles.mediaQueries.length > 0;
  if (!hasMediaQueries) {
    parts.push(`
@media (max-width: 768px) {
  section { padding: 3rem 0; }
  .container { padding: 0 1rem; }
}
@media (max-width: 480px) {
  section { padding: 2rem 0; }
}`);
  }

  return parts.join("\n");
}

function buildJS(recipes, hovers) {
  const parts = [];

  parts.push(`// Generated animations from extracted motion data
document.addEventListener("DOMContentLoaded", () => {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "none";
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll("[data-reveal]").forEach(el => observer.observe(el));
});

`);

  // Scroll animations if GSAP not present
  const scrollRecipes = recipes.filter(r => r.type.includes("scroll") || r.type === "sticky-pin");
  if (scrollRecipes.length) {
    parts.push(`// Scroll-based animations (from ${scrollRecipes.length} extracted recipes)
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const vh = window.innerHeight;
`);
    for (const r of scrollRecipes.slice(0, 5)) {
      const sel = r.target ? `document.querySelector("${r.target}")` : null;
      if (!sel) continue;
      const range = (r.range || "0-100").split("-");
      const startPct = parseInt(range[0]) || 0;
      const endPct = parseInt(range[1]) || 100;

      parts.push(`
  // ${r.type}: ${r.target}
  {
    const el = ${sel};
    if (el) {
      const docHeight = document.documentElement.scrollHeight - vh;
      const progress = Math.max(0, Math.min(1, (scrollY / docHeight - ${startPct / 100}) / (${(endPct - startPct) / 100})));
      const eased = 1 - Math.pow(1 - progress, 3);
      ${r.yDelta ? `el.style.transform = \`translateY(\${-${Math.abs(r.yDelta)} * eased}px)\`;` : ""}
      ${r.opacity ? `el.style.opacity = 1 - eased;` : ""}
    }
  }`);
    }
    parts.push(`
});
`);
  }

  return parts.join("\n");
}

function escapeHTML(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
