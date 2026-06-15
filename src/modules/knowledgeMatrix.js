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
    },
    typography: {
      fluidType: "clamp(1rem, 2.5vw + 0.5rem, 3rem) para scale fluido sin media queries",
      variableFonts: "font-variation-settings: 'wght' var(--font-weight); transicionar weight en hover",
      opticalSize: "font-optical-sizing: auto; mejora legibilidad en tamaños extremos",
      kerningPremium: "letter-spacing: -0.02em en headings grandes (>60px); 0 en body",
      lineHeightFluid: "line-height: clamp(1.1, 1.5vw, 1.4) para ajuste óptico automático",
      gradientText: "background-clip: text con gradientes animados vía --gradient-angle",
      textStroke: "-webkit-text-stroke: 1px rgba(255,255,255,0.3) para outlines sutiles",
      mixBlendMode: "mix-blend-mode: difference/exclusion para texto que invierte sobre fondos"
    },
    scrollSystems: {
      lenis: "new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) })",
      scrollDriven: "animation-timeline: scroll(); sin JS para efectos simples de scroll",
      stickyOrchestration: "position: sticky con IntersectionObserver para activar/desactivar GSAP",
      parallaxMath: "transform: translateY(calc(var(--scroll-y) * -0.3px)); GPU-accelerated",
      virtualScroll: "acumular deltaY en buffer y aplicar lerp para smooth nativo",
      scrollSections: "data-scroll-section con Parallax.js para encapsular contextos",
      progressBar: "scrollHeight - scrollTop calculado en RAF para progress indicators",
      scrubLinking: "ScrollTrigger.create({ scrub: 1.5, start: 'top bottom' }) para animations linked to scroll"
    },
    microinteractions: {
      springPhysics: "mass: 1, stiffness: 200, damping: 20 — valores de referencia para spring natural",
      staggerChildren: "GSAP stagger 0.08s entre elementos del mismo grupo visual",
      hoverMagnetic: "gsap.to(el, { x: deltaX * 0.4, y: deltaY * 0.4, duration: 0.3 })",
      cursorCustom: "mix-blend-mode: difference para cursor que invierte colores del fondo",
      buttonRipple: "radial-gradient circle expanding desde click position con transform: scale()",
      iconSpin: "rotate(360deg) con cubic-bezier(0.68, -0.55, 0.265, 1.55) para overshoot",
      skeletonLoading: "linear-gradient animado de left a right con opacity 0.5-0.7",
      toastAnimation: "slide-in-right con spring: { mass: 0.8, stiffness: 300, damping: 25 }"
    },
    performance: {
      criticalCSS: "Inline first-paint CSS; defer resto con <link rel=preload as=style>",
      lazyWebGL: "import('./scene.js') solo cuando IntersectionObserver detecta viewport",
      imageStrategy: "avif primero, webp fallback, jpg último; sizes='(max-width: 768px) 100vw, 50vw'",
      fontLoading: "font-display: swap con preconnect y preload de las primeras 2 variantes",
      codeSplitting: "Dynamic imports por ruta + prefetch on idle para siguientes páginas",
      treeShaking: "ESM exports selectivos + sideEffects: false en package.json",
      workerOffload: "Web Workers para cálculos pesados (physics, pathfinding, data processing)",
      memoryLeaks: "AbortController para fetches pendientes + cleanup en useEffect return"
    },
    layoutPatterns: {
      gridAutoFlow: "grid-auto-flow: dense para packing óptimo de cards irregulares",
      subgrid: "subgrid en axes específicos para alineación nested perfecta",
      containerQueries: "@container (min-width: 400px) para componentes truly responsive",
      aspectRatio: "aspect-ratio: 16/9 con object-fit: cover para media consistente",
      overflowClip: "overflow-clip-margin para smooth scroll edge handling",
      hasSelector: ":has(> img:hover) para parent styling sin JS",
      anchorPositioning: "position-anchor y inset-* para tooltips/anchors dinámicos",
      viewTransitions: "document.startViewTransition() para page-change morphing"
    },
    motionPatterns: {
      enterExit: "from/to states con FLIP technique para layout changes",
      sharedLayout: "layoutId en Framer Motion o custom FLIP para morphing elements",
      physics2d: "Matter.js o Planck.js para colisiones y gravedad real",
      gestureRecognition: "Pointer events con velocity calculation para swipe/pinch",
      timelineControl: "GSAP timeline con labels para seek/scrub/reverse",
      morphing: "clip-path polygon transition o SVG path interpolation",
      particleSystems: "Canvas 2D con offscreen buffer para >1000 partículas",
      trailEffects: "requestAnimationFrame con fade: ctx.fillRect(0,0,w,h,rgba(0,0,0,0.1))"
    },
    accessibility: {
      focusVisible: ":focus-visible con outline offset para keyboard-only focus",
      ariaLive: "aria-live='polite' para dynamic content announcements",
      reducedMotion: "@media (prefers-reduced-motion: reduce) { animation: none }",
      colorContrast: "WCAG AA minimum 4.5:1 para text, 3:1 para large text",
      skipLinks: "Skip to main content link visible on first tab",
      landmarkRoles: "main/nav/aside/header/footer para screen reader navigation",
      formLabels: "label htmlFor + aria-describedby para error messages",
      liveRegions: "role='status' + aria-atomic para toast notifications"
    },
    advancedCss: {
      cssModules: "composes para inheritance + :local/:global scoping",
      styledComponents: "css prop con transpilation para zero-runtime overhead",
      tailwindArbitrary: "w-[calc(100%-2rem)] para values outside design tokens",
      postcssPlugins: "postcss-nesting + postcss-logical + autoprefixer pipeline",
      cssInJs: "Emotion cache extraction para SSR critical CSS",
      layerCascade: "@layer reset, base, components, utilities para specificity control",
      scopeIsolation: "@scope (.component) para styles encapsulation sin Shadow DOM",
      colorMix: "color-mix(in srgb, var(--primary) 80%, black) para tint/shade"
    },
    stateManagement: {
      signals: "Preact Signals o SolidJS para fine-grained reactivity",
      zustand: "create((set) => ({ count: 0, inc: () => set((s) => ({ count: s.count + 1 })) }))",
      jotai: "atom() primitives + derived atoms para composable state",
      xstate: "Machine({ states: { idle: { on: { FETCH: 'loading' } } } }) para statecharts",
      immer: "produce(draft => { draft.nested.value = 42 }) para immutable updates",
      optimisticUi: "optimistic: true en mutations con rollback on error",
      suspense: "React Suspense + use() para async components streaming",
      streamingSsr: "ReadableStream + TextEncoderStream para chunked HTML responses"
    }
  };
}
