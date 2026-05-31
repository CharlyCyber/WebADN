const ADVANCED_CSS_FEATURES = [
  { name: "clip-path", pattern: "clip-path\\s*:", category: "shaping" },
  { name: "mask-image", pattern: "mask-image\\s*:", category: "masking" },
  { name: "mix-blend-mode", pattern: "mix-blend-mode\\s*:", category: "blending" },
  { name: "backdrop-filter", pattern: "backdrop-filter\\s*:", category: "filtering" },
  { name: "filter", pattern: "(?<!backdrop-)filter\\s*:", category: "filtering" },
  { name: "perspective", pattern: "perspective\\s*:", category: "3d" },
  { name: "transform-style: preserve-3d", pattern: "transform-style\\s*:\\s*preserve-3d", category: "3d" },
  { name: "scroll-snap", pattern: "scroll-snap", category: "scrolling" },
  { name: "container-type", pattern: "container-type\\s*:", category: "container-queries" },
  { name: "position: sticky", pattern: "position\\s*:\\s*sticky", category: "positioning" },
  { name: "custom cursor", pattern: "cursor\\s*:\\s*(url|none|custom)", category: "interaction" },
  { name: "conic-gradient", pattern: "conic-gradient", category: "gradients" },
  { name: "radial-gradient", pattern: "radial-gradient", category: "gradients" },
  { name: "complex linear-gradient", pattern: "linear-gradient\\s*\\([^)]*,[^)]*,", category: "gradients" },
  { name: "animation", pattern: "animation\\s*:", category: "animation" },
  { name: "transition", pattern: "transition\\s*:", category: "animation" },
  { name: "@keyframes", pattern: "@keyframes", category: "animation" },
  { name: "will-change", pattern: "will-change\\s*:", category: "performance" },
  { name: "aspect-ratio", pattern: "aspect-ratio\\s*:", category: "layout" },
  { name: "gap", pattern: "\\bgap\\s*:", category: "layout" }
];

export async function analyzeCssFeatures(page) {
  const cssFeatures = await page.evaluate((features) => {
    const compiled = features.map((f) => ({ name: f.name, pattern: new RegExp(f.pattern, "gi"), category: f.category }));

    const featureCounts = {};
    let cssVarCount = 0;
    let totalRules = 0;
    const usageExamples = {};

    for (const sheet of [...document.styleSheets]) {
      try {
        for (const rule of [...sheet.cssRules]) {
          totalRules++;
          const text = rule.cssText || "";

          for (const match of text.matchAll(/--([a-zA-Z0-9-_]+)\s*:/g)) {
            cssVarCount++;
          }

          for (const feature of compiled) {
            const matches = text.match(feature.pattern);
            if (matches && matches.length > 0) {
              featureCounts[feature.name] = (featureCounts[feature.name] || 0) + matches.length;
              if (!usageExamples[feature.name] && matches.length > 0) {
                usageExamples[feature.name] = text.slice(0, 150);
              }
            }
          }
        }
      } catch {
        // Cross-origin stylesheet
      }
    }

    const elements = [...document.querySelectorAll("body *")].slice(0, 500);
    let stickyCount = 0;
    let customCursorCount = 0;

    for (const el of elements) {
      const styles = getComputedStyle(el);
      if (styles.position === "sticky") stickyCount++;
      if (styles.cursor && (styles.cursor.startsWith("url") || styles.cursor === "none")) customCursorCount++;
    }

    if (stickyCount > 0) {
      featureCounts["position: sticky"] = (featureCounts["position: sticky"] || 0) + stickyCount;
    }
    if (customCursorCount > 0) {
      featureCounts["custom cursor"] = (featureCounts["custom cursor"] || 0) + customCursorCount;
    }

    return { featureCounts, cssVarCount, totalRules, usageExamples };
  }, ADVANCED_CSS_FEATURES);

  const effects = Object.entries(cssFeatures.featureCounts).map(([name, count]) => {
    const feature = ADVANCED_CSS_FEATURES.find((f) => f.name === name);
    return {
      feature: name,
      count,
      category: feature?.category || "other",
      usage: cssFeatures.usageExamples[name]?.slice(0, 100) || `${count} occurrence(s)`
    };
  }).sort((a, b) => b.count - a.count);

  const complexityScore = calculateComplexityScore(effects, cssFeatures.cssVarCount, cssFeatures.totalRules);

  return {
    effects,
    cssVariableCount: cssFeatures.cssVarCount,
    totalRules: cssFeatures.totalRules,
    complexityScore
  };
}

function calculateComplexityScore(effects, cssVarCount, totalRules) {
  let score = 0;

  const weightedFeatures = {
    "clip-path": 8,
    "mask-image": 8,
    "mix-blend-mode": 7,
    "backdrop-filter": 6,
    "perspective": 7,
    "transform-style: preserve-3d": 9,
    "scroll-snap": 4,
    "container-type": 5,
    "position: sticky": 3,
    "custom cursor": 5,
    "conic-gradient": 6,
    "@keyframes": 5,
    "animation": 4,
    "will-change": 3
  };

  for (const effect of effects) {
    const weight = weightedFeatures[effect.feature] || 2;
    score += Math.min(weight, Math.log2(effect.count + 1) * weight * 0.4);
  }

  score += Math.min(10, cssVarCount / 20);
  score += Math.min(5, totalRules / 200);

  return Math.round(Math.min(100, score));
}
