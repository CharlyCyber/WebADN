import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { buildNicheTranslationTable } from "./nicheAdapter.js";
import { extractColorRoles } from "../shared/color-roles.js";

const CONTEXT_DIR = "webadn-context-output";

function buildDesignTokens(evidence) {
  const insp = evidence.inspection || {};
  const tokens = insp.tokens || {};
  const spacing = evidence.spacing || {};
  const palette = evidence.pixelPalette || {};
  const designLang = evidence.designLanguage || {};

  return {
    palette: {
      css: (tokens.colors || []).slice(0, 24),
      pixel: palette.background ? {
        background: palette.background,
        dominant: palette.dominant,
        accent: palette.accent,
        muted: palette.muted,
        textCandidates: palette.textCandidates || [],
        full: (palette.palette || []).slice(0, 8)
      } : null,
      colorRoles: insp.sectionStructure ? extractColorRoles(insp) : []
    },
    typography: {
      fonts: (tokens.fonts || []).slice(0, 10),
      cssVariables: Object.fromEntries(
        Object.entries(tokens.cssVariables || {}).filter(([k]) =>
          /font|typography|text|family|weight|size|line-height|letter-spacing/i.test(k)
        )
      ),
      fluidTypeScale: insp.styles?.fluidTypeScale || null
    },
    spacing: spacing.scale ? {
      baseUnit: spacing.baseUnit,
      tokens: spacing.tokens || [],
      scale: (spacing.scale || []).map(s => ({ [s.token]: `${s.px}px` }))
    } : {
      raw: (tokens.spacingScale || []).slice(0, 14)
    },
    designLanguage: designLang.label || "unknown",
    confidence: designLang.confidence || 0
  };
}

function buildStructureLayout(evidence) {
  const insp = evidence.inspection || {};
  const sections = insp.sections || [];
  const structure = insp.sectionStructure || [];
  const layout = insp.layout || {};

  return {
    layout: {
      dominant: layout.dominant,
      counts: layout.counts || {},
      viewport: insp.viewport || {}
    },
    sections: sections.map((section, i) => {
      const struct = structure[i] || {};
      return {
        index: i,
        role: section.role || "unknown",
        tag: section.tag || "section",
        classList: struct.classList || "",
        isFullViewport: Boolean(section.isFullViewport),
        height: section.height || null,
        background: struct.background || {},
        layout: struct.layoutConfig || {},
        stickyDescendants: section.stickyDescendants || 0,
        fixedDescendants: section.fixedDescendants || 0,
        textHierarchy: (section.textHierarchy || []).slice(0, 3),
        ctas: (section.ctaText || []).slice(0, 3),
        keyChildren: (struct.keyChildren || []).slice(0, 8).map(c => ({
          tag: c.tag,
          classList: c.classList || "",
          styles: pickKeys(c.styles || {}, ["fontSize", "fontWeight", "fontFamily", "color", "backgroundColor", "display", "padding", "margin", "lineHeight", "letterSpacing", "textTransform", "textAlign", "borderRadius", "boxShadow"]),
          animation: c.animation || null
        }))
      };
    }),
    gridSystem: extractGridEvidence(structure)
  };
}

function extractGridEvidence(structure) {
  const grids = [];
  for (const s of structure) {
    const l = s.layoutConfig || {};
    if (l.display?.includes("grid")) {
      grids.push({
        selector: s.classList || s.tag,
        columns: l.gridTemplateColumns || "auto",
        rows: l.gridTemplateRows || "auto",
        gap: l.gap || "0"
      });
    }
  }
  return grids;
}

function buildAnimationsBehavior(evidence) {
  const insp = evidence.inspection || {};
  const recipes = insp.motionRecipes || [];
  const hovers = insp.hoverEffects || [];
  const keyframes = insp.styles?.keyframes || [];
  const webgl = insp.webgl || {};

  const parts = [];

  if (recipes.length) {
    parts.push("# Scroll-Linked Animations\n");
    for (const r of recipes) {
      parts.push(`## ${r.target}\n`);
      parts.push(`- Type: ${r.type}\n`);
      if (r.range) parts.push(`- Range: ${r.range}\n`);
      if (r.yDelta) parts.push(`- Y delta: ${r.yDelta}px\n`);
      if (r.parallaxRatio) parts.push(`- Parallax ratio: ${r.parallaxRatio}\n`);
      if (r.opacity) parts.push(`- Opacity: ${r.opacity}\n`);
      if (r.easing) parts.push(`- Easing: ${r.easing.cubicBezier || r.easing}\n`);
      parts.push(`- Implementation: ${r.implementation}\n\n`);
    }
  }

  if (hovers.length) {
    parts.push("# Hover Interactions\n");
    for (const h of hovers.slice(0, 10)) {
      parts.push(`- \`${h.selector}\`: ${h.effect}${h.source ? ` (source: ${h.source})` : ""}\n`);
    }
    parts.push("\n");
  }

  if (keyframes.length) {
    parts.push("# CSS Keyframes\n");
    for (const kf of keyframes.slice(0, 8)) {
      parts.push(`\`\`\`css\n${kf.css}\n\`\`\`\n\n`);
    }
  }

  if (webgl.webglCount > 0) {
    parts.push("# WebGL / 3D\n");
    parts.push(`- Library: ${webgl.likely3dLibrary || "unknown"}\n`);
    parts.push(`- WebGL contexts: ${webgl.webglCount}\n`);
    parts.push(`- Shaders: ${(webgl.shaderDetails || []).length}\n`);
    if (webgl.animations?.uniformsOverTime) {
      parts.push(`- Uniforms: ${Object.keys(webgl.animations.uniformsOverTime).join(", ")}\n`);
    }
    parts.push("\n");
  }

  if (!parts.length) {
    parts.push("No animation evidence extracted.\n");
  }

  return parts.join("");
}

function buildManifest(evidence, url, niche) {
  const insp = evidence.inspection || {};
  const fidelity = evidence.fidelityScore || {};
  const conversion = evidence.conversionPlan || {};

  return `# WebADN Manifest: ${niche}

## Resumen Ejecutivo
- **URL de referencia:** ${url}
- **Nicho objetivo:** ${niche}
- **Lenguaje de diseño:** ${evidence.designLanguage?.label || "No determinado"}
- **Puntaje de fidelidad:** ${fidelity.overall || 0}% (${fidelity.label || "N/A"})
- **Secciones detectadas:** ${(insp.sections || []).length}
- **Complejidad CSS:** ${insp.cssFeatures?.complexityScore || 0}/100
- **Tecnologias:** ${(insp.technologies || []).join(", ") || "No detectadas"}

## Diagnostico de Conversion
- **Paradigma:** ${conversion.paradigm || "No detectado"}
- **Pushbacks requeridos:**${(conversion.pushbacks || []).map(p => `\n  - ${p}`).join("") || "\n  - Ninguno detectado"}

## Instrucciones para el agente
1. Lee \`design-tokens.json\` como fuente unica de verdad visual.
2. Usa \`structure-layout.json\` para la arquitectura de secciones.
3. Revisa \`animations-behavior.md\` para entender el sistema de motion.
4. Preserva la logica de diseno, tokens y animaciones descritas.
5. Adapta el copy al nicho especificado manteniendo la estructura de conversion.
6. No copies assets, nombres de marca, logos o contenido textual de la referencia.
`;
}

function buildCursorRules(niche) {
  return `# WebADN Context Rules

Estas trabajando en un proyecto basado en una referencia extraida por WebADN.
Nicho: ${niche}

1. Usa los archivos JSON en esta carpeta como tu unica fuente de verdad visual y estructural.
2. Lee \`manifest.md\` para entender el nicho objetivo y la estrategia de conversion.
3. Preserva la logica de diseno, tokens y animaciones descritas en estos archivos.
4. Genera semantica HTML nueva, pero aplica rigurosamente las clases CSS y estilos extraidos.
5. Adapta el copy al nicho especificado, manteniendo la estructura de conversion.
`;
}

function pickKeys(obj, keys) {
  const result = {};
  for (const k of keys) {
    if (k in obj) result[k] = obj[k];
  }
  return result;
}

export async function packageStructuredContext(evidence, artifactPath, url, niche) {
  if (!evidence) return;

  const contextDir = join(artifactPath, "..", CONTEXT_DIR);
  await mkdir(contextDir, { recursive: true });

  const tasks = [
    writeFile(join(contextDir, "manifest.md"), buildManifest(evidence, url, niche)),
    writeFile(join(contextDir, "design-tokens.json"), JSON.stringify(buildDesignTokens(evidence), null, 2)),
    writeFile(join(contextDir, "structure-layout.json"), JSON.stringify(buildStructureLayout(evidence), null, 2)),
    writeFile(join(contextDir, "animations-behavior.md"), buildAnimationsBehavior(evidence)),
    writeFile(join(contextDir, ".cursorrules"), buildCursorRules(niche)),
  ];

  await Promise.all(tasks);
  return contextDir;
}
