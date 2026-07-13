// @ts-check
import { classifyDesignLanguage } from "./localVisionHeuristics.js";
import { getConfidencePrefix, composeClientBrief, composeExecutiveDiagnosis, composeIntroTimeline, composeDnaSummary, composeVisualGroundTruth } from "./briefSections/compose-diagnosis.js";
import { buildReferenceProfile, composeFidelityTarget, composeDesignTokens } from "./briefSections/compose-tokens.js";
import { composeMotionTimeline, composeInteractionRecipes } from "./briefSections/compose-motion.js";
import { composeCssArchitecture, composeComponentArchitecture, composeSectionBuildSpec, composeAssetRequirements, composeResponsiveRules, composeCroAdaptation } from "./briefSections/compose-build.js";
import { composePerformanceBudget, composeAccessibilityConstraints, composeAcceptanceCriteria } from "./briefSections/compose-quality.js";
import { composeFinalAgentPrompt } from "./briefSections/compose-prompt.js";

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

export async function composeMegaBrief(evidence, fidelityLevel = "standard") {
  const trimmed = trimEvidence(evidence, fidelityLevel);
  const { inspection, visualRhythm, conversionPlan, niche, url } = trimmed;
  const designLanguage = trimmed.designLanguage || classifyDesignLanguage(trimmed);
  const referenceProfile = buildReferenceProfile(inspection, designLanguage);

  const pixelPalette = trimmed.pixelPalette || evidence.pixelPalette || null;
  const llmInterpretation = evidence.llmInterpretation || trimmed.llmInterpretation || null;
  const visualDescription = llmInterpretation?.visualDescription || null;

  const fidelityScore = evidence.fidelityScore?.overall || 0;
  const confidencePrefix = getConfidencePrefix(fidelityScore);

  const breakdown = evidence.fidelityScore?.breakdown;
  const motionConfidence = breakdown?.motionConfidence ?? 1;
  const visualConfidence = breakdown?.visualCoverage ?? 1;
  const techConfidence = breakdown?.tokenConfidence ?? 1;

  const motionPrefix = getConfidencePrefix(motionConfidence * 100);
  const visualPrefix = getConfidencePrefix(visualConfidence * 100);
  const techPrefix = getConfidencePrefix(techConfidence * 100);

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
