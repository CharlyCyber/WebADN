export function computeRenderedSimilarity(reference, generated) {
  const scores = {
    structure: compareSectionOrder(reference, generated),
    layout: compareLayoutBoxes(reference, generated),
    typography: compareTypography(reference, generated),
    color: compareColorRoles(reference, generated),
    motion: compareMotionCurves(reference, generated),
    perceptual: comparePerceptual(reference, generated)
  };

  const overall = weightedAverage(scores);

  const weakSections = identifyWeakSections(reference, generated, scores);

  return {
    overall,
    dimensions: scores,
    weakSections
  };
}

function compareSectionOrder(ref, gen) {
  const refRoles = ref.sections.map(s => s.role);
  const genRoles = gen.sections.map(s => s.role);
  const matches = refRoles.filter((r, i) => genRoles[i] === r).length;
  return matches / Math.max(refRoles.length, genRoles.length, 1);
}

function compareLayoutBoxes(ref, gen) {
  const minLen = Math.min(ref.sections.length, gen.sections.length);
  if (minLen === 0) return 0;
  let score = 0;
  for (let i = 0; i < minLen; i++) {
    const rs = ref.sections[i];
    const gs = gen.sections[i];
    if (rs.isFullViewport === gs.isFullViewport) score += 0.5;
    const rH = rs.height || 0;
    const gH = gs.height || 0;
    if (rH > 0 && gH > 0) {
      const ratio = Math.min(rH, gH) / Math.max(rH, gH);
      score += ratio * 0.5;
    }
  }
  return score / minLen;
}

function compareTypography(ref, gen) {
  const refTypes = flatTypography(ref);
  const genTypes = flatTypography(gen);
  if (refTypes.length === 0 && genTypes.length === 0) return 1;
  if (refTypes.length === 0) return 0.5;
  const matchCount = refTypes.filter((rt, i) => {
    const gt = genTypes[i];
    if (!gt) return false;
    return rt.tag === gt.tag;
  }).length;
  return matchCount / refTypes.length;
}

function flatTypography(ir) {
  const result = [];
  for (const s of ir.sections) {
    for (const t of s.typography || []) {
      result.push({ tag: t.tag, fontSize: t.fontSize });
    }
  }
  return result;
}

function compareColorRoles(ref, gen) {
  const refBgs = ref.sections.map(s => s.background?.color).filter(Boolean);
  const genBgs = gen.sections.map(s => s.background?.color).filter(Boolean);
  if (refBgs.length === 0 && genBgs.length === 0) return 1;
  if (refBgs.length === 0) return 0.5;
  const matches = refBgs.filter((c, i) => genBgs[i] && c.toLowerCase() === genBgs[i].toLowerCase()).length;
  return matches / refBgs.length;
}

function compareMotionCurves(ref, gen) {
  return ref.motion.length === 0 && gen.motion.length === 0 ? 1 : 0.5;
}

function comparePerceptual(ref, gen) {
  if (ref.sections.length === 0 && gen.sections.length === 0) return 1;
  if (ref.sections.length === 0 || gen.sections.length === 0) return 0;
  const sameCount = ref.sections.filter((rs, i) => gen.sections[i] && rs.role === gen.sections[i].role).length;
  return sameCount / Math.max(ref.sections.length, gen.sections.length);
}

function weightedAverage(scores) {
  const weights = {
    structure: 0.2,
    layout: 0.2,
    typography: 0.15,
    color: 0.15,
    motion: 0.15,
    perceptual: 0.15
  };

  return Math.round(
    Object.entries(scores).reduce((sum, [k, v]) => sum + v * weights[k], 0) * 100
  );
}

function identifyWeakSections(ref, gen, scores) {
  const weak = [];
  const minLen = Math.min(ref.sections.length, gen.sections.length);
  for (let i = 0; i < minLen; i++) {
    const rs = ref.sections[i];
    const gs = gen.sections[i];
    if (rs.role !== gs.role) {
      weak.push({ sectionId: rs.id, reason: `role mismatch: ${rs.role} vs ${gs.role}`, dimension: "structure" });
    }
  }
  Object.entries(scores).forEach(([dim, score]) => {
    if (score < 0.6) {
      if (!weak.find(w => w.dimension === dim)) {
        weak.push({ sectionId: "global", reason: `low ${dim} score: ${Math.round(score * 100)}%`, dimension: dim });
      }
    }
  });
  return weak;
}
