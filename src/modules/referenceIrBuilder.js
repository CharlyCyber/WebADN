import { createEmptyReferenceExperienceIR } from "../shared/reference-experience-ir.js";

export function buildReferenceExperienceIR(evidence) {
  const ir = createEmptyReferenceExperienceIR({
    url: evidence.url,
    niche: evidence.niche
  });

  const sections = evidence.inspection?.sections || [];
  const structure = evidence.inspection?.sectionStructure || [];

  ir.sections = sections.map((section, index) => {
    const struct = structure[index] || {};
    return {
      id: `section-${index}`,
      index,
      role: section.role || "unknown",
      tag: section.tag || "section",
      height: section.height || null,
      isFullViewport: Boolean(section.isFullViewport),
      layout: struct.layoutConfig || {},
      background: struct.background || {},
      typography: extractSectionTypography(struct),
      children: (struct.keyChildren || []).map(normalizeChild),
      motionRefs: [],
      sourceConfidence: section.confidence || 0
    };
  });

  return ir;
}

function normalizeChild(child) {
  return {
    tag: child.tag,
    role: inferChildRole(child),
    rect: child.rect || null,
    styles: child.styles || {},
    textKind: child.textContent ? "replaceable" : "none"
  };
}

function inferChildRole(child) {
  if (/^h[1-6]$/.test(child.tag)) return "heading";
  if (child.tag === "img" || child.tag === "video") return "media";
  if (child.tag === "a" || child.tag === "button") return "cta";
  return "layout";
}

function extractSectionTypography(struct) {
  return (struct.keyChildren || [])
    .filter(c => /^h[1-6]|p|span|a|button$/.test(c.tag))
    .map(c => ({
      tag: c.tag,
      fontSize: c.styles?.fontSize,
      fontWeight: c.styles?.fontWeight,
      lineHeight: c.styles?.lineHeight,
      letterSpacing: c.styles?.letterSpacing
    }));
}
