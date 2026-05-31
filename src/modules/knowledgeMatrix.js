export function buildKnowledgeMatrix() {
  return {
    interactions: {
      magneticCursor:
        "Pointer target interpolation using lerp(current, target, 0.12) with reduced-motion fallback and hit-area constraints.",
      lerp:
        "Linear interpolation: next = current + (target - current) * alpha. Use alpha between 0.08 and 0.18 for premium UI easing.",
      inverseKinematics:
        "Chain-based motion where parent/child transforms solve toward a target; useful for articulated menus, ribbons, and cursor trails.",
      progressivePixelScroll:
        "Scroll progress maps to pixelation, blur, or shader uniforms, ideally throttled through requestAnimationFrame."
    },
    visualEffects: {
      backdropFilters:
        "Layer translucent surfaces with backdrop-filter: blur() and contrast(), but keep text contrast measurable.",
      dynamicClipPaths:
        "Use clip-path polygons or inset() transitions to reveal content without layout reflow.",
      borderBeams:
        "Conic-gradient border animation masked to the border box; pause offscreen and avoid large repaint regions.",
      alphaMaskedMarquee:
        "Use mask-image linear gradients on marquee edges so infinite movement fades naturally.",
      flashlight:
        "Pointer-fed radial-gradient spotlight stored in CSS variables, with keyboard and reduced-motion equivalents."
    },
    webgl3d: {
      shaders:
        "Fragment shaders color pixels; vertex shaders deform geometry. Expose uniforms for scroll, time, pointer, and theme.",
      noise:
        "Perlin/Simplex noise generates organic displacement, liquid surfaces, grain, and hover distortions.",
      gpuOptimization:
        "Promote only moving layers with will-change, batch reads/writes, and keep animation work in requestAnimationFrame."
    },
    animationMath: {
      premiumEase: "cubic-bezier(0.22, 1, 0.36, 1)",
      fastOut: "cubic-bezier(0.16, 1, 0.3, 1)",
      scrollDamping: "targetScroll += (nativeScroll - targetScroll) * 0.1",
      shaderUniforms: "u_time, u_scrollProgress, u_pointer, u_velocity, u_aspect"
    }
  };
}
