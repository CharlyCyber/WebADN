import { captureViewportMatrix } from "./visualCapture.js";
import { mapSections } from "./sectionMapper.js";
import { extractAssets, classifyAssetType } from "./assetExtractor.js";
import { analyzeCssFeatures } from "./cssAnalyzer.js";
import { sampleMotionTimeline } from "./motionSampler.js";
import { probeHoverInteractions } from "./interactionProbe.js";
import { inspectWebGL } from "./webglInspector.js";
import { detectWebGLAnimations } from "./webglTimeDetector.js";
import { handleOverlays } from "./overlayHandler.js";
import { navigateWithFallback } from "../support/navigation.js";
import { join } from "node:path";
import { extractStyles } from "./styleExtractor.js";
import { downloadLocalAssets } from "./assetDownloader.js";
import { extractSectionStructure } from "./structureExtractor.js";
import { extractJsTokens, mergeJsTokens } from "./jsTokenExtractor.js";
import { isHostPublic } from "../support/urlSafety.js";
import { captureIntroTimeline, INTRO_INIT_SCRIPT } from "./introCapture.js";

const TECHNOLOGY_SIGNATURES = [
  { name: "GSAP", tests: ["gsap", "ScrollTrigger"] },
  { name: "Three.js", tests: ["THREE", "three.js", "three.module"] },
  { name: "React Three Fiber", tests: ["@react-three/fiber", "react-three-fiber"] },
  { name: "Framer Motion", tests: ["framer-motion", "motion.div", "__framer"] },
  { name: "Lenis Scroll", tests: ["lenis", "Lenis"] },
  { name: "WebGL", tests: ["webgl", "WebGLRenderingContext"] },
  { name: "React", tests: ["react", "__REACT_DEVTOOLS_GLOBAL_HOOK__"] },
  { name: "Next.js", tests: ["__NEXT_DATA__", "_next/static"] },
  { name: "Vue", tests: ["__VUE__", "vue"] },
  { name: "Nuxt", tests: ["__NUXT__", "_nuxt"] }
];

async function preparePageForExtraction(page, onProgress, preset = "standard") {
  onProgress?.({ step: "prepare-page", message: "Preparando página (fuentes, lazy load, pre-scroll)..." });
  try {
    await page.evaluate(async (surgical) => {
      await document.fonts.ready;

      document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        img.loading = "eager";
        img.setAttribute("loading", "eager");
      });

      const scrollDistance = surgical ? 12000 : 6000;
      await new Promise(r => {
        let h = 0;
        const maxScroll = Math.min(scrollDistance, document.body.scrollHeight);
        const step = () => {
          if (h >= maxScroll) { window.scrollTo(0, 0); r(); return; }
          window.scrollBy(0, 120);
          h += 120;
          requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      });

      if (surgical) {
        await new Promise(r => {
          let h = 0;
          const maxScroll = Math.min(8000, document.body.scrollHeight);
          const step = () => {
            if (h >= maxScroll) { window.scrollTo(0, 0); r(); return; }
            window.scrollBy(0, 120);
            h += 120;
            requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        });
      }

      const isVisible = (el) => {
        const s = getComputedStyle(el);
        return el.getBoundingClientRect().width > 0 && s.display !== "none" && s.visibility !== "hidden" && parseFloat(s.opacity) > 0.1;
      };

      await new Promise(r => {
        const start = Date.now();
        const check = () => {
          const loaders = [...document.querySelectorAll('*')].filter(el => {
            const id = (el.id || "").toLowerCase();
            const cls = [...el.classList].join(" ").toLowerCase();
            return (id + cls).match(/loader|spinner|preload/) && isVisible(el);
          });
          if (loaders.length === 0 || Date.now() - start > 3000) r();
          else setTimeout(check, 100);
        };
        check();
      });
    }, preset === "surgical");
  } catch (err) {}
  await page.waitForTimeout(1500);
}

export async function inspectUrl({ url, headless = true, timeoutMs = 30000, preset = "standard", screenshotsPath, onProgress, browser: externalBrowser }) {
  const { chromium } = await import("playwright");
  let ownBrowser = false;
  const browser = externalBrowser || (ownBrowser = true, await chromium.launch({ headless }));

  try {
    const page = await browser.newPage({
      viewport: { width: 1440, height: 1100 },
      userAgent:
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/125 Safari/537.36"
    });

    const earlyNetworkAssets = [];
    await page.addInitScript({ content: INTRO_INIT_SCRIPT });

    page.on("response", async (response) => {
      try {
        const reqUrl = response.url();
        const status = response.status();
        if (status >= 300 && status < 400) {
          const location = response.headers()["location"];
          if (location) {
            const target = new URL(location, reqUrl);
            if (!(await isHostPublic(target.hostname))) {
              await page.context().close();
              throw new Error(`SSRF blocked: redirect to private host ${target.hostname}`);
            }
          }
        }
        if (status >= 400) return;
        const contentType = response.headers()["content-type"] || "";
        const type = classifyAssetType(reqUrl, contentType);
        if (type) {
          earlyNetworkAssets.push({ url: reqUrl, type, contentType, size: parseInt(response.headers()["content-length"] || "0"), status });
        }
      } catch (e) {
        if (e.message && e.message.includes("SSRF blocked")) throw e;
      }
    });

    await page.addInitScript(() => {
      const contexts = [];
      const orig = HTMLCanvasElement.prototype.getContext;
      HTMLCanvasElement.prototype.getContext = function (...args) {
        contexts.push({ type: args[0], width: this.width || this.clientWidth || 0, height: this.height || this.clientHeight || 0, attributes: args[1] || null });
        return orig.apply(this, args);
      };
      window.__webglContexts = contexts;
    });

    onProgress?.({ step: "navigate", message: "Navegando al sitio..." });
    await page.route("**/*", async (route) => {
      try {
        const reqUrl = new URL(route.request().url());
        if (reqUrl.protocol === "http:" || reqUrl.protocol === "https:") {
          if (!(await isHostPublic(reqUrl.hostname))) {
            return route.abort("blockedbyclient");
          }
        }
        return route.continue();
      } catch {
        return route.abort("blockedbyclient");
      }
    });
    const navigationResult = await navigateWithFallback(page, url, timeoutMs);

    const introTimeline = preset === "fast"
      ? { enabled: false }
      : await captureIntroTimeline(page, { screenshotsPath, preset, onProgress });

    const overlayActions = await handleOverlays(page);
    if (overlayActions.length > 0) {
      await page.waitForTimeout(500);
    }

    await preparePageForExtraction(page, onProgress, preset);

    onProgress?.({ step: "page-data", message: "Extrayendo datos de página..." });
    const maxElements = preset === "surgical" ? 5000 : preset === "fast" ? 1000 : 3000;
    const pageData = await page.evaluate((elemLimit) => {
      const cssVariables = {};
      const colors = new Set();
      const fonts = new Set();
      const spacing = new Set();
      const layoutCounts = { grid: 0, flex: 0, sticky: 0, fixed: 0, absolute: 0 };
      const animationHints = new Set();
      const semanticTags = {};
      const ctas = [];
      const gsapDataAttrs = {};
      const scripts = [...document.scripts].map((script) => script.src || script.textContent?.slice(0, 1000) || "");
      const html = document.documentElement.outerHTML.slice(0, 500000);

      const gsapAttrElements = document.querySelectorAll("[data-speed], [data-stagger], [data-delay], [data-scroll], [data-animation], [data-reveal], [data-aos]");
      for (const el of gsapAttrElements) {
        const attrs = {};
        for (const attr of ["data-speed", "data-stagger", "data-delay", "data-scroll", "data-animation", "data-reveal", "data-aos", "data-aos-duration", "data-aos-delay"]) {
          const v = el.getAttribute(attr);
          if (v !== null && v !== "") attrs[attr.replace("data-", "")] = v;
        }
        if (Object.keys(attrs).length > 0) {
          const cls = [...el.classList].filter(c => c.length > 2).slice(0, 2).join(".");
          const key = cls ? `${el.tagName.toLowerCase()}.${cls}` : el.tagName.toLowerCase();
          gsapDataAttrs[key] = attrs;
        }
      }

      // Muestreo estratificado con límite según preset
      const keyElements = new Set([
        ...document.querySelectorAll("h1, h2, h3, h4, h5, h6"),
        ...document.querySelectorAll("a, button, [role='button'], input, textarea, select"),
        ...document.querySelectorAll("header, header *, nav, nav *, footer, footer *"),
        ...document.querySelectorAll("[class*='hero'], [class*='hero'] *, [id*='hero'] *"),
        ...document.querySelectorAll("[class*='section'], [class*='container'], [class*='wrapper'], [class*='card']"),
        ...document.querySelectorAll("main > section, main > section *"),
        ...document.querySelectorAll("[data-speed], [data-stagger], [data-delay], [data-scroll], [data-animation]"),
        ...document.querySelectorAll("body *")
      ]);
      const elements = [...keyElements].slice(0, elemLimit);

      for (const sheet of [...document.styleSheets]) {
        try {
          for (const rule of [...sheet.cssRules]) {
            const text = rule.cssText || "";
            for (const match of text.matchAll(/--([a-zA-Z0-9-_]+)\s*:\s*([^;]+)/g)) {
              cssVariables[`--${match[1]}`] = match[2].trim();
            }
            for (const match of text.matchAll(/#[0-9a-fA-F]{3,8}\b|rgba?\([^)]+\)|hsla?\([^)]+\)/g)) {
              colors.add(match[0]);
            }
          }
        } catch {
          // Cross-origin stylesheets cannot be inspected. Inline/computed extraction below serves as robust fallback.
        }
      }

      for (const element of elements) {
        // Extraer variables CSS inline
        const inlineStyle = element.getAttribute("style") || "";
        for (const match of inlineStyle.matchAll(/--([a-zA-Z0-9-_]+)\s*:\s*([^;]+)/g)) {
          cssVariables[`--${match[1]}`] = match[2].trim();
        }

        const styles = getComputedStyle(element);
        const display = styles.display;
        const position = styles.position;

        if (display.includes("grid")) layoutCounts.grid += 1;
        if (display.includes("flex")) layoutCounts.flex += 1;
        if (position === "sticky") layoutCounts.sticky += 1;
        if (position === "fixed") layoutCounts.fixed += 1;
        if (position === "absolute") layoutCounts.absolute += 1;

        if (styles.fontFamily) {
          // Limpiar familias tipográficas (quitar comillas innecesarias)
          const f = styles.fontFamily.replace(/['"]/g, "").trim();
          if (f && f !== "inherit") fonts.add(f);
        }
        if (styles.color && styles.color !== "rgba(0, 0, 0, 0)" && styles.color !== "transparent") {
          colors.add(styles.color);
        }
        if (styles.backgroundColor && styles.backgroundColor !== "rgba(0, 0, 0, 0)" && styles.backgroundColor !== "transparent") {
          colors.add(styles.backgroundColor);
        }

        for (const prop of ["marginTop", "marginBottom", "paddingTop", "paddingBottom", "gap", "rowGap", "columnGap"]) {
          const value = styles[prop];
          if (value && value !== "0px" && value !== "normal") spacing.add(value);
        }

        if (styles.transform !== "none") animationHints.add("transform-driven motion");
        if (styles.willChange !== "auto") animationHints.add(`will-change: ${styles.willChange}`);
        if (styles.backdropFilter && styles.backdropFilter !== "none") animationHints.add("backdrop-filter layering");
        if (styles.clipPath && styles.clipPath !== "none") animationHints.add("clip-path reveal");
        if (styles.position === "sticky") animationHints.add("sticky scroll choreography");
      }

      for (const tag of ["header", "main", "section", "article", "nav", "footer", "button", "form", "h1"]) {
        semanticTags[tag] = document.querySelectorAll(tag).length;
      }

      for (const node of [...document.querySelectorAll("a, button")].slice(0, 40)) {
        const text = node.textContent?.replace(/\s+/g, " ").trim();
        if (text && /(book|buy|start|get|contact|demo|call|quote|join|try|shop|reserve|comprar|contactar|empezar|cotizar)/i.test(text)) {
          ctas.push({
            text,
            href: node.href || null,
            aboveFold: node.getBoundingClientRect().top < window.innerHeight
          });
        }
      }

      return {
        title: document.title,
        description: document.querySelector("meta[name='description']")?.content || "",
        h1: document.querySelector("h1")?.textContent?.replace(/\s+/g, " ").trim() || "",
        scripts,
        html,
        gsapDataAttrs,
        tokens: {
          cssVariables,
          colors: [...colors].slice(0, 40),
          fonts: [...fonts].slice(0, 16),
          spacingScale: [...spacing].slice(0, 24)
        },
        layout: {
          counts: layoutCounts,
          dominant: inferDominantLayout(layoutCounts)
        },
        animationHints: [...animationHints],
        semanticTags,
        ctas,
        viewport: {
          width: window.innerWidth,
          height: window.innerHeight,
          bodyHeight: (document.body || document.documentElement).scrollHeight
        }
      };

      function inferDominantLayout(counts) {
        if (counts.grid > counts.flex * 0.45) return "CSS Grid with Flexbox support";
        if (counts.flex > 0) return "Flexbox-dominant composition";
        return "Static or custom positioned layout";
      }
    }, maxElements);

    const result = normalizeInspection(url, pageData);
    result.introTimeline = introTimeline;
    result.navigation = {
      success: navigationResult.success,
      diagnosis: navigationResult.diagnosis,
      errors: navigationResult.errors
    };
    result.overlayActions = overlayActions;

    if (screenshotsPath) {
      onProgress?.({ step: "sections", message: "Mapeando secciones..." });
      const sections = await mapSections(page);
      result.sections = sections;

      onProgress?.({ step: "assets", message: "Extrayendo assets..." });
      const assets = await extractAssets(page, earlyNetworkAssets);
      result.assets = assets;

onProgress?.({ step: "css-features", message: "Analizando features CSS..." });
      const cssFeatures = await analyzeCssFeatures(page);
      result.cssFeatures = cssFeatures;

      onProgress?.({ step: "styles", message: "Extrayendo estilos..." });
      const styles = await extractStyles(page);
      result.styles = styles;

      onProgress?.({ step: "js-tokens", message: "Extrayendo tokens de JavaScript..." });
      const jsTokens = await extractJsTokens(page);
      mergeJsTokens(result, jsTokens);

      onProgress?.({ step: "webgl", message: "Inspeccionando WebGL..." });
      const webglInfo = await inspectWebGL(page);
      result.webgl = webglInfo;

      onProgress?.({ step: "webgl-time", message: "Detectando animaciones WebGL tiempos..." });
      const webglTimeInfo = await detectWebGLAnimations(page, preset);
      result.webgl.animations = webglTimeInfo;

      onProgress?.({ step: "structure", message: "Extrayendo estructura de secciones..." });
      const sectionStructure = await extractSectionStructure(page, sections);
      result.sectionStructure = sectionStructure;

      const firstWithSvg = sectionStructure.find((s) => s.heroSvg);
      if (firstWithSvg && screenshotsPath) {
        try {
          const assetPath = join(screenshotsPath, "..", "assets");
          const { mkdir, writeFile } = await import("node:fs/promises");
          await mkdir(assetPath, { recursive: true });
          await writeFile(join(assetPath, "hero-svg.svg"), firstWithSvg.heroSvg, "utf8");
        } catch (err) { console.warn("[scraper] SVG save failed:", err.message); }
      }

      onProgress?.({ step: "screenshots", message: "Capturando viewports..." });
      const visualEvidence = await captureViewportMatrix(page, screenshotsPath, preset);
      result.visualEvidence = visualEvidence;

      await page.setViewportSize({ width: 1440, height: 1100 });
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(200);

      if (preset !== "fast") {
        onProgress?.({ step: "motion", message: "Muestreando animaciones..." });
        const motionRecipes = await sampleMotionTimeline(page, preset);
        result.motionRecipes = motionRecipes;

        onProgress?.({ step: "hover", message: "Analizando interacciones hover..." });

        // Abandonable hover probing with hard 4s ceiling so it can NEVER block the pipeline.
        // CSS-only evaluate on the same page with RAF killed from init to avoid interference.
        const hoverPromise = (async () => {
          await page.addInitScript(() => { window.requestAnimationFrame = () => 0; });
          try {
            // Ensure we're at the top of the page for consistent hover results
            await page.evaluate(() => window.scrollTo(0, 0));
            await page.waitForTimeout(500);
            return await probeHoverInteractions(page, preset);
          } finally {
            // Remove the RAF override to allow normal operation for subsequent steps
            await page.addInitScript(() => { window.requestAnimationFrame = undefined; });
          }
        })().catch(() => []);

        result.hoverEffects = await Promise.race([
          hoverPromise,
          new Promise((r) => setTimeout(() => {
onProgress?.({ step: "metrics", message: "Recogiendo métricas de rendimiento..." });
            r([]); 
          }, 4000))
        ]);

if (typeof onProgress === 'function') {
          onProgress({ step: "metrics", message: "Recogiendo métricas de rendimiento..." });
        }
      }
    }

    // Métricas reales via Chrome DevTools Protocol (CDP)
    try {
      const client = await page.context().newCDPSession(page);
      await client.send("Performance.enable");
      const performanceMetrics = await client.send("Performance.getMetrics");
      
      const findMetric = (name) => performanceMetrics.metrics.find(m => m.name === name)?.value || 0;
      
      result.performanceMetrics = {
        LCP: Math.round((findMetric("LargestContentfulPaint") || 0) * 100) / 100,
        FCP: Math.round((findMetric("FirstContentfulPaint") || 0) * 100) / 100,
        JSHeapUsedSize: Math.round((findMetric("JSHeapUsedSize") || 0) / (1024 * 1024) * 100) / 100, // MB
        LayoutCount: findMetric("LayoutCount") || 0,
        RecalcStyleCount: findMetric("RecalcStyleCount") || 0
      };
    } catch (cdpErr) {
      result.performanceMetrics = { LCP: 0, FCP: 0, error: cdpErr.message };
    }

    if (preset === "surgical" && result.assets) {
      const assetPath = join(screenshotsPath, "..", "assets");
      try {
        result.downloadedAssets = await downloadLocalAssets(result.assets, assetPath);
      } catch (err) {
        result.downloadedAssets = { error: err.message, files: [] };
      }
    }

    return result;
  } finally {
    if (ownBrowser) await browser.close();
  }
}

export function sampleInspection(url) {
  const result = normalizeInspection(url, {
    title: "Sample Premium Reference",
    description: "Dry-run inspection sample.",
    h1: "Transform digital presence into demand",
    scripts: ["gsap ScrollTrigger", "three.js", "lenis"],
    html: "<main><section><h1>Transform digital presence into demand</h1><button>Book a strategy call</button></section></main>",
    tokens: {
      cssVariables: {
        "--color-background": "#0d0f12",
        "--color-accent": "#d8ff66",
        "--space-section": "120px"
      },
      colors: ["#0d0f12", "#d8ff66", "#f4f1ea", "rgb(255, 255, 255)"],
      fonts: ["Inter, sans-serif", "Instrument Serif, serif"],
      spacingScale: ["8px", "16px", "24px", "48px", "120px"]
    },
    layout: {
      counts: { grid: 8, flex: 26, sticky: 3, fixed: 1, absolute: 12 },
      dominant: "Flexbox-dominant composition"
    },
    animationHints: ["transform-driven motion", "sticky scroll choreography", "backdrop-filter layering"],
    semanticTags: { header: 1, main: 1, section: 7, article: 3, nav: 1, footer: 1, button: 4, form: 1, h1: 1 },
    ctas: [{ text: "Book a strategy call", href: null, aboveFold: true }],
    viewport: { width: 1440, height: 1100, bodyHeight: 6200 },
    assets: {
      images: ["https://example.com/hero.jpg", "https://example.com/logo.svg"],
      videos: [],
      fonts: ["https://fonts.gstatic.com/s/inter/v12/inter.woff2"],
      scripts: ["https://example.com/gsap.js", "https://example.com/main.js"],
      stylesheets: ["https://example.com/styles.css"],
      models3d: [],
      inlineSvgCount: 3,
      canvasCount: 1,
      cssBackgroundImages: [],
      suspiciousHeavyAssets: [],
      totalNetworkAssets: 12
    },
    cssFeatures: {
      effects: [
        { feature: "backdrop-filter", count: 4, category: "filtering", usage: "glassmorphism on nav and cards" },
        { feature: "clip-path", count: 2, category: "shaping", usage: "hero image reveal" },
        { feature: "position: sticky", count: 3, category: "positioning", usage: "sticky nav and sections" },
        { feature: "animation", count: 12, category: "animation", usage: "keyframe-based reveals" }
      ],
      cssVariableCount: 28,
      totalRules: 340,
      complexityScore: 42
    },
    motionRecipes: [
      { type: "scroll-parallax", target: ".hero-visual", tag: "div", range: "0-35%", yDelta: -180, parallaxRatio: -0.28, opacity: "1 -> 0.2", implementation: "GSAP ScrollTrigger scrub: true or CSS scroll-timeline" },
      { type: "scroll-fade", target: ".section-title", tag: "h2", range: "25-50%", opacityRange: "1 -> 0", implementation: "GSAP ScrollTrigger opacity tween or CSS scroll-timeline" },
      { type: "sticky-pin", target: ".gallery-container", tag: "section", range: "50-75%", yDelta: 0, opacity: null, implementation: "CSS position: sticky with scroll-linked animation" }
    ],
    hoverEffects: [
      { selector: "a.nav-link", tag: "a", text: "Work", effect: "underline reveal", styleChanges: {} },
      { selector: "button.primary-cta", tag: "button", text: "Book a strategy call", effect: "color invert, card lift", styleChanges: {} },
      { selector: "div.project-card", tag: "div", text: "Project Alpha", effect: "card lift", styleChanges: {} }
    ],
webgl: {
       canvasCount: 1,
       webglCount: 1,
       likely3dLibrary: "Three.js",
       detectedLibraries: ["Three.js", "GSAP"],
       performanceRisk: { level: "medium", risks: ["WebGL context detected - may impact mobile performance"] },
       promptRecipe: "WebGL detected (1 context). Use Three.js for 3D/rendering. Lazy-load WebGL bundle; never block initial paint. Cap devicePixelRatio at 2 on mobile. Expose shader uniforms: u_time, u_scrollProgress, u_pointer, u_velocity. Provide fallback content for no-WebGL browsers.",
       animations: {
         uniformsOverTime: { u_time: { detected: true, type: "uniform" }, u_scrollProgress: { detected: true, type: "uniform" } },
         timeBasedAnimations: [{ type: "render-loop", evidence: "requestAnimationFrame detected in script", confidence: 0.7 }],
         timeAnalysis: [{ type: "time-varying-uniform", name: "u_time", implementation: "Update in render loop for time-based shader animation" }]
       }
     }
  });

  result.sections = [
    { index: 0, tag: "section", role: "hero", confidence: 0.86, reasons: ["first section", "contains h1", "contains CTA"], height: 900, isFullViewport: true, textHierarchy: [{ level: "H1", text: "Transform digital presence into demand" }], ctaText: ["Book a strategy call"] },
    { index: 1, tag: "section", role: "proof", confidence: 0.72, reasons: ["contains metrics", "client logos"], height: 600, isFullViewport: false, textHierarchy: [{ level: "H2", text: "Trusted by industry leaders" }], ctaText: [] },
    { index: 2, tag: "section", role: "showcase", confidence: 0.68, reasons: ["contains portfolio", "project cards"], height: 800, isFullViewport: true, textHierarchy: [{ level: "H2", text: "Selected work" }], ctaText: ["View project"] },
    { index: 3, tag: "section", role: "contact", confidence: 0.75, reasons: ["contains form", "contact info"], height: 500, isFullViewport: false, textHierarchy: [{ level: "H2", text: "Get in touch" }], ctaText: ["Send message"] },
    { index: 4, tag: "footer", role: "footer", confidence: 0.90, reasons: ["last section", "footer element"], height: 400, isFullViewport: false, textHierarchy: [], ctaText: [] }
  ];

  result.sectionStructure = [
    {
      index: 0, tag: "section", classList: "hero dark-theme", id: null,
      htmlSnippet: `<section class="hero dark-theme" style="display:flex;flex-direction:column;justify-content:center;align-items:center;min-height:100vh;background:#0d0f12;padding:2rem;"><div style="max-width:1200px;text-align:center;"><h1 style="font-size:clamp(3rem,8vw,6rem);font-weight:800;color:#f4f1ea;letter-spacing:-0.03em;line-height:1.1;">Transform digital presence into demand</h1><p style="font-size:1.25rem;color:rgba(244,241,234,0.7);max-width:36rem;margin:1.5rem auto;line-height:1.6;">We build award-winning digital experiences that drive measurable business growth.</p><button style="background:#d8ff66;color:#0d0f12;border:none;border-radius:4px;padding:1rem 2.5rem;font-size:1rem;font-weight:600;cursor:pointer;">Book a strategy call</button></div></section>`,
      computedStyles: { display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", minHeight: "100vh", padding: "2rem" },
      background: { color: "#0d0f12" },
      layoutConfig: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" },
      keyChildren: [
        { tag: "h1", classList: "", styles: { fontSize: "clamp(3rem,8vw,6rem)", fontWeight: "800", color: "#f4f1ea", letterSpacing: "-0.03em", lineHeight: "1.1", textAlign: "center" }, textContent: "Transform digital presence into demand" },
        { tag: "p", classList: "", styles: { fontSize: "1.25rem", color: "rgba(244,241,234,0.7)", maxWidth: "36rem", lineHeight: "1.6", margin: "1.5rem auto", textAlign: "center" }, textContent: "We build award-winning digital experiences..." },
        { tag: "button", classList: "primary-cta", styles: { background: "#d8ff66", color: "#0d0f12", border: "none", borderRadius: "4px", padding: "1rem 2.5rem", fontWeight: "600", cursor: "pointer" }, textContent: "Book a strategy call", animation: { transition: "all 0.3s ease" } }
      ]
    },
    {
      index: 1, tag: "section", classList: "proof-section", id: null,
      htmlSnippet: `<section class="proof-section" style="padding:4rem 2rem;background:#1a1d22;"><div style="max-width:1200px;margin:0 auto;"><h2 style="font-size:2.5rem;font-weight:700;color:#f4f1ea;text-align:center;margin-bottom:3rem;">Trusted by industry leaders</h2><div style="display:flex;gap:2rem;justify-content:center;flex-wrap:wrap;"><div class="metric" style="text-align:center;"><span style="font-size:3rem;font-weight:800;color:#d8ff66;">250+</span><p style="color:rgba(244,241,234,0.6);">Projects delivered</p></div></div></div></section>`,
      computedStyles: { padding: "4rem 2rem", background: "#1a1d22" },
      background: { color: "#1a1d22" },
      layoutConfig: { display: "block" },
      keyChildren: [
        { tag: "h2", classList: "", styles: { fontSize: "2.5rem", fontWeight: "700", color: "#f4f1ea", textAlign: "center", marginBottom: "3rem" }, textContent: "Trusted by industry leaders" }
      ]
    },
    {
      index: 2, tag: "section", classList: "showcase", id: null,
      htmlSnippet: `<section class="showcase" style="padding:4rem 2rem;background:#0d0f12;"><h2 style="font-size:2.5rem;font-weight:700;color:#f4f1ea;text-align:center;">Selected work</h2><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:2rem;max-width:1200px;margin:2rem auto;"><div class="project-card" style="background:#1a1d22;border-radius:12px;padding:2rem;"><h3 style="font-size:1.5rem;color:#f4f1ea;">Project Alpha</h3></div></div></section>`,
      computedStyles: { padding: "4rem 2rem", background: "#0d0f12" },
      background: { color: "#0d0f12" },
      layoutConfig: { display: "block" },
      keyChildren: [
        { tag: "h2", classList: "", styles: { fontSize: "2.5rem", fontWeight: "700", color: "#f4f1ea", textAlign: "center" }, textContent: "Selected work" },
        { tag: "div", classList: "project-card", styles: { background: "#1a1d22", borderRadius: "12px", padding: "2rem" }, animation: { transform: "scale(1)", transition: "transform 0.3s ease, box-shadow 0.3s ease" } }
      ]
    },
    {
      index: 3, tag: "section", classList: "contact", id: null,
      htmlSnippet: `<section class="contact" style="padding:4rem 2rem;background:#1a1d22;"><h2 style="font-size:2.5rem;font-weight:700;color:#f4f1ea;text-align:center;">Get in touch</h2><form style="max-width:480px;margin:2rem auto;"><input type="email" placeholder="Your email" style="width:100%;padding:1rem;border:1px solid rgba(255,255,255,0.1);border-radius:4px;background:#0d0f12;color:#f4f1ea;"><button type="submit" style="width:100%;padding:1rem;margin-top:1rem;background:#d8ff66;color:#0d0f12;border:none;border-radius:4px;font-weight:600;">Send message</button></form></section>`,
      computedStyles: { padding: "4rem 2rem", background: "#1a1d22" },
      background: { color: "#1a1d22" },
      layoutConfig: { display: "block" },
      keyChildren: [
        { tag: "h2", classList: "", styles: { fontSize: "2.5rem", fontWeight: "700", color: "#f4f1ea", textAlign: "center" }, textContent: "Get in touch" },
        { tag: "input", classList: "", styles: { width: "100%", padding: "1rem", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "4px", background: "#0d0f12", color: "#f4f1ea" } },
        { tag: "button", classList: "", styles: { width: "100%", padding: "1rem", background: "#d8ff66", color: "#0d0f12", border: "none", borderRadius: "4px", fontWeight: "600" }, textContent: "Send message" }
      ]
    },
    {
      index: 4, tag: "footer", classList: "", id: null,
      htmlSnippet: `<footer style="padding:2rem;text-align:center;background:#0d0f12;color:rgba(244,241,234,0.5);font-size:0.875rem;"><p>&copy; 2025 Company. All rights reserved.</p></footer>`,
      computedStyles: { padding: "2rem", textAlign: "center", background: "#0d0f12", fontSize: "0.875rem" },
      background: { color: "#0d0f12" },
      layoutConfig: { display: "block" },
      keyChildren: [
        { tag: "p", classList: "", styles: { color: "rgba(244,241,234,0.5)", fontSize: "0.875rem", textAlign: "center" }, textContent: "© 2025 Company. All rights reserved." }
      ]
    }
  ];

  return result;
}

function normalizeInspection(url, pageData) {
  const searchable = [
    pageData.html,
    ...(pageData.scripts || []),
    JSON.stringify(pageData.tokens?.cssVariables || {}),
    JSON.stringify(pageData.gsapDataAttrs || {})
  ].join("\n");

  return {
    url,
    title: pageData.title,
    description: pageData.description,
    h1: pageData.h1,
    technologies: detectTechnologies(searchable),
    tokens: pageData.tokens,
    layout: pageData.layout,
    animationHints: pageData.animationHints,
    semanticTags: pageData.semanticTags,
    ctas: pageData.ctas,
    viewport: pageData.viewport,
    gsapDataAttrs: pageData.gsapDataAttrs || {},
    risks: inferExtractionRisks(pageData)
  };
}

function detectTechnologies(searchableText) {
  return TECHNOLOGY_SIGNATURES.filter((signature) =>
    signature.tests.some((test) => searchableText.toLowerCase().includes(test.toLowerCase()))
  ).map((signature) => signature.name);
}

function inferExtractionRisks(pageData) {
  const risks = [];

  if (!pageData.h1) risks.push("Missing visible H1 in initial DOM.");
  if (!pageData.description) risks.push("Missing meta description.");
  if ((pageData.semanticTags?.button ?? 0) === 0 && (pageData.ctas?.length ?? 0) === 0) {
    risks.push("No obvious CTA detected.");
  }
  if ((pageData.semanticTags?.main ?? 0) === 0) risks.push("Missing semantic main landmark.");

  return risks;
}
