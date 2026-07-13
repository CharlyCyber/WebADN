function formatMotionKeyframes(keyframes = []) {
  return keyframes
    .slice(0, 5)
    .map((frame) => {
      const parts = [
        `${frame.scrollPercent}%`,
        `pos(${frame.x}, ${frame.y})`,
        `${frame.width}x${frame.height}`,
        `opacity ${frame.opacity}`
      ];
      if (frame.translateX !== null || frame.translateY !== null) {
        parts.push(`translate(${frame.translateX ?? 0}, ${frame.translateY ?? 0})`);
      }
      if (frame.scaleX !== null || frame.scaleY !== null) {
        parts.push(`scale(${frame.scaleX ?? 1}, ${frame.scaleY ?? 1})`);
      }
      parts.push(`visible ${frame.visibleRatio}`);
      return parts.join(" | ");
    })
    .join(" -> ");
}

function composeMotionTimeline(inspection, motionPrefix = "") {
  const recipes = inspection.motionRecipes || [];
  const hints = inspection.animationHints || [];
  const webglAnimations = inspection.webgl?.animations;
  const keyframes = inspection.styles?.keyframes || [];
  const cssEffects = inspection.cssFeatures?.effects || [];
  const gsapAttrs = inspection.gsapDataAttrs || {};

  const hasWebGLTime = webglAnimations?.timeBasedAnimations?.length > 0;
  const hasTimeUniforms = webglAnimations?.timeAnalysis?.length > 0;
  const hasDynamicUniforms = webglAnimations?.uniformsOverTime && Object.keys(webglAnimations.uniformsOverTime).length > 0;

  const parts = [`${motionPrefix}# 7. Motion Timeline Recipes\n\n`];

  if (Object.keys(gsapAttrs).length > 0) {
    parts.push(`**GSAP/data animation attributes detected:**\n`);
    for (const [selector, attrs] of Object.entries(gsapAttrs).slice(0, 10)) {
      parts.push(`- \`${selector}\`: ${Object.entries(attrs).map(([key, value]) => `data-${key}="${value}"`).join(", ")}\n`);
    }
    parts.push("\n");
  }

  if (recipes.length > 0) {
    parts.push(`${recipes.length} scroll-linked motion pattern(s) detected:\n`);
    for (const recipe of recipes) {
      parts.push(`\n- **Type:** ${recipe.type}\n`);
      parts.push(`  Target: \`${recipe.target}\` (${recipe.tag})\n`);
      parts.push(`  Range: ${recipe.range}\n`);
      if (recipe.yDelta) parts.push(`  Y movement: ${recipe.yDelta}px\n`);
      if (recipe.parallaxRatio) parts.push(`  Parallax ratio: ${recipe.parallaxRatio}\n`);
      if (recipe.opacity) parts.push(`  Opacity: ${recipe.opacity}\n`);
      if (recipe.easing) {
        const conf = typeof recipe.easing.confidence === "number"
          ? ` (${Math.round(recipe.easing.confidence * 100)}% fit)`
          : "";
        parts.push(`  Easing (measured): \`${recipe.easing.cubicBezier}\`${conf}\n`);
        if (recipe.easing.gsap && recipe.easing.gsap !== recipe.easing.cubicBezier) {
          parts.push(`  Easing alias (GSAP-ready): \`${recipe.easing.gsap}\`\n`);
        }
      }
      if (recipe.keyframes?.length) parts.push(`  Observed scroll keyframes: ${formatMotionKeyframes(recipe.keyframes)}\n`);
      parts.push(`  Implementation: ${recipe.implementation}\n`);
    }
    parts.push("\n");
  }

  if (hasWebGLTime || hasTimeUniforms || hasDynamicUniforms) {
    parts.push(`**WebGL/Canvas Animation Analysis:**\n`);
    
    if (hasDynamicUniforms) {
      const uniformKeys = Object.keys(webglAnimations.uniformsOverTime || {});
      parts.push(`- **Time-varying uniforms:** ${uniformKeys.slice(0, 8).join(", ") || "u_time, u_scrollProgress detected"}\n`);
      
      for (const analysis of (webglAnimations.timeAnalysis || []).slice(0, 3)) {
        parts.push(`- **${analysis.type}:** ${analysis.implementation}\n`);
      }
    }
    
    if (hasWebGLTime) {
      for (const anim of webglAnimations.timeBasedAnimations.slice(0, 2)) {
        parts.push(`- **${anim.type}:** ${anim.evidence}\n`);
      }
    }
    
    parts.push("\n");
  }

  if (hints.length > 0) {
    parts.push(`**DOM Animation Hints:** ${hints.slice(0, 6).join(", ")}\n`);
  }

  if (keyframes.length > 0) {
    parts.push(`\n**CSS keyframes to preserve or recreate:**\n`);
    for (const keyframe of keyframes.slice(0, 8)) {
      parts.push(`- \`${keyframe.name}\`: ${keyframe.frames?.map((frame) => frame.key).slice(0, 6).join(", ") || "frames extracted"}\n`);
    }
  }

  const effectMotion = cssEffects.filter((effect) => ["animation", "positioning", "scrolling", "3d", "masking", "shaping", "filtering", "blending"].includes(effect.category));
  if (effectMotion.length > 0) {
    parts.push(`\n**Effect-driven motion/effects:**\n`);
    for (const effect of effectMotion.slice(0, 10)) {
      parts.push(`- ${effect.feature}: ${effect.count} occurrence(s); ${effect.usage || "usage extracted from CSS"}\n`);
    }
  }

  if (!recipes.length && !hasWebGLTime && !hasTimeUniforms && !hasDynamicUniforms && !hints.length) {
    parts.push(`No measured scroll-linked motion was detected. Do not invent complex motion; recreate only the CSS keyframes, transitions, and effects listed above.`);
  } else {
    parts.push(`\n**Math:** Use lerp next = current + (target - current) * alpha with alpha 0.08-0.18.\n`);
    parts.push(`**Easing:** cubic-bezier(0.22, 1, 0.36, 1) for premium reveals.\n`);
    parts.push(`**Rule:** Respect prefers-reduced-motion.\n`);
  }

  return parts.join("");
}

function composeInteractionRecipes(inspection, motionPrefix = "") {
  const effects = inspection.hoverEffects || [];

  if (!effects.length) {
    return `${motionPrefix}# 8. Interaction Recipes

No hover interactions were measured. Do not invent generic hover behavior; preserve extracted CSS transitions, cursor rules, clip-path effects, and button/link states from the selector and section blueprints.`;
  }

  const grouped = {};
  for (const effect of effects) {
    const type = effect.effect || "no visible effect";
    if (!grouped[type]) grouped[type] = [];
    grouped[type].push(effect);
  }

  const parts = [`${motionPrefix}# 8. Interaction Recipes\n\n${effects.length} hover target(s) probed:\n`];

  for (const [type, items] of Object.entries(grouped)) {
    parts.push(`\n**${type}:** ${items.map((i) => `\`${i.selector}\` (${i.text || i.tag})`).join(", ")}\n`);
    for (const item of items.slice(0, 5)) {
      const changes = item.styleChanges;
      if (changes && Object.keys(changes).length > 0) {
        const lines = [];
        for (const [prop, vals] of Object.entries(changes).slice(0, 5)) {
          if (vals.before !== vals.after) {
            lines.push(`${prop}: ${vals.before} \u2192 ${vals.after}`);
          }
        }
        if (lines.length) {
          parts.push(`  - \`${item.selector}\`: ${lines.join("; ")}\n`);
        }
      }
    }
  }

  return parts.join("");
}

export {
  formatMotionKeyframes,
  composeMotionTimeline,
  composeInteractionRecipes
};
