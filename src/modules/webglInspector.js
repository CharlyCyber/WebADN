const WEBGL_LIBRARIES = [
  { name: "Three.js", signatures: ["THREE", "three.js", "three.module", "three.min"] },
  { name: "OGL", signatures: ["OGL", "ogl/src"] },
  { name: "Babylon.js", signatures: ["BABYLON", "babylon.js", "babylon.max"] },
  { name: "PixiJS", signatures: ["PIXI", "pixi.js", "pixi.min"] },
  { name: "p5.js", signatures: ["p5", "p5.js", "p5.min"] },
  { name: "Spline", signatures: ["spline", "@splinetool"] },
  { name: "Rive", signatures: ["rive", "@rive-app"] },
  { name: "Lottie", signatures: ["lottie", "bodymovin", "@lottiefiles"] },
  { name: "Matter.js", signatures: ["Matter", "matter.js"] },
  { name: "Regl", signatures: ["regl", "create-regl"] },
  { name: "D3", signatures: ["d3", "d3.js", "d3.min"] },
  { name: "GSAP", signatures: ["gsap", "ScrollTrigger", "TweenMax", "TweenLite"] }
];

export async function inspectWebGL(page) {
  const injectionResult = await injectContextTracker(page);
  const libraryDetection = await detectWebGLLibraries(page);
  const shaderDetails = await extractShaders(page);
  const uniformHints = await detectThreeJsUniforms(page);

  const canvasCount = injectionResult.canvasCount;
  const webglCount = injectionResult.webglCount;
  const contexts = injectionResult.contexts;

  const performanceRisk = assessPerformanceRisk({
    canvasCount,
    webglCount,
    contexts,
    library: libraryDetection.primaryLibrary
  });

  const promptRecipe = buildPromptRecipe({
    canvasCount,
    webglCount,
    contexts,
    library: libraryDetection.primaryLibrary,
    performanceRisk,
    shaderDetails,
    uniformHints
  });

  return {
    canvasCount,
    webglCount,
    contexts,
    likely3dLibrary: libraryDetection.primaryLibrary,
    detectedLibraries: libraryDetection.allLibraries,
    performanceRisk,
    shaderDetails,
    promptRecipe
  };
}

async function extractShaders(page) {
  return await page.evaluate(() => {
    const shaders = [];
    const scripts = document.querySelectorAll('script[type="x-shader/x-vertex"], script[type="x-shader/x-fragment"], script[type="x-shader/x-glsl"], script[type="glsl"], script:not([src])');
    for (const s of scripts) {
      const type = s.getAttribute("type") || "unknown";
      const content = (s.textContent || "").trim().slice(0, 1000);
      if (content && /(uniform|varying|attribute|void\s+main|gl_Position|gl_FragColor)/.test(content)) {
        const uniforms = [...content.matchAll(/\buniform\s+(\w+)\s+(\w+)/g)].map(m => ({ type: m[1], name: m[2] }));
        shaders.push({
          id: s.id || null,
          type,
          length: content.length,
          uniforms,
          preview: content.slice(0, 300),
        });
      }
    }
    return shaders;
  });
}

async function detectThreeJsUniforms(page) {
  return await page.evaluate(() => {
    const hints = { uniforms: [], renderTargetSize: null };
    if (typeof THREE === "undefined") return hints;
    try {
      const scenes = [];
      const renderers = [];
      if (THREE.WebGLRenderer) {
        const canvases = document.querySelectorAll("canvas");
        for (const c of canvases) {
          const w = c.width || c.clientWidth;
          const h = c.height || c.clientHeight;
          if (w > 0 && h > 0) {
            hints.renderTargetSize = { width: w, height: h };
            break;
          }
        }
      }
      const scriptText = [...document.scripts].map(s => s.textContent || "").join("\n");
      const uniformMatches = [...scriptText.matchAll(/uniforms\s*=\s*\{([^}]+)\}/g)];
      for (const m of uniformMatches) {
        const block = m[1];
        const entries = [...block.matchAll(/(\w+)\s*:\s*\{\s*(?:value|type)\s*:\s*([^,}]+)/g)];
        for (const e of entries) {
          hints.uniforms.push({ name: e[1], value: e[2].trim() });
        }
      }
      if (hints.uniforms.length === 0) {
        const common = ["u_time", "u_mouse", "u_scroll", "u_resolution", "u_progress", "u_velocity"];
        const found = common.filter(u => scriptText.includes(u));
        hints.uniforms = found.map(n => ({ name: n, value: "auto-detected" }));
      }
    } catch {}
    return hints;
  });
}

async function injectContextTracker(page) {
  const result = await page.evaluate(() => {
    const contexts = window.__webglContexts || [];

    const canvases = document.querySelectorAll("canvas");
    const webglContexts = contexts.filter((c) => c.type === "webgl" || c.type === "webgl2");
    const contexts2d = contexts.filter((c) => c.type === "2d");

    return {
      canvasCount: canvases.length,
      webglCount: webglContexts.length,
      contexts2dCount: contexts2d.length,
      contexts: contexts.map((c) => ({
        type: c.type,
        width: c.width,
        height: c.height,
        hasAttributes: !!c.attributes
      }))
    };
  });

  return result;
}

async function detectWebGLLibraries(page) {
  const allLibraries = [];
  let primaryLibrary = null;

  const htmlContent = await page.evaluate(() => {
    const scripts = [...document.scripts].map((s) => s.src || s.textContent?.slice(0, 500) || "");
    return scripts.join("\n");
  });

  const searchable = htmlContent.toLowerCase();

  for (const lib of WEBGL_LIBRARIES) {
    const found = lib.signatures.some((sig) => searchable.includes(sig.toLowerCase()));
    if (found) {
      allLibraries.push(lib.name);
      if (!primaryLibrary) {
        primaryLibrary = lib.name;
      }
    }
  }

  if (!primaryLibrary) {
    const hasWebGL = await page.evaluate(() => {
      const canvas = document.createElement("canvas");
      return !!(canvas.getContext("webgl") || canvas.getContext("webgl2"));
    });

    if (hasWebGL) {
      primaryLibrary = "Unknown WebGL";
    }
  }

  return { primaryLibrary, allLibraries };
}

function assessPerformanceRisk({ canvasCount, webglCount, contexts, library }) {
  const risks = [];

  if (webglCount > 0) {
    risks.push("WebGL context detected - may impact mobile performance");
  }

  if (canvasCount > 2) {
    risks.push(`Multiple canvases (${canvasCount}) - potential rendering overhead`);
  }

  if (library === "Three.js" || library === "Babylon.js") {
    risks.push(`Heavy 3D library (${library}) - ensure lazy loading and DPR capping`);
  }

  const largeCanvases = (contexts || []).filter((c) => c.width * c.height > 1920 * 1080);
  if (largeCanvases.length > 0) {
    risks.push(`High-resolution canvas detected (${largeCanvases.length}) - cap DPR on mobile`);
  }

  return {
    level: risks.length === 0 ? "low" : risks.length <= 2 ? "medium" : "high",
    risks
  };
}

function buildPromptRecipe({ canvasCount, webglCount, contexts, library, performanceRisk, shaderDetails, uniformHints }) {
  if (!webglCount && canvasCount === 0) {
    return "No WebGL/canvas detected. Use CSS/DOM animations for visual effects.";
  }

  const parts = [];

  if (webglCount > 0) {
    parts.push(`WebGL detected (${webglCount} context${webglCount > 1 ? "s" : ""})`);

    if (library && library !== "Unknown WebGL") {
      parts.push(`Use ${library} for 3D/rendering`);
    }

    const uniforms = [];
    if (uniformHints?.uniforms?.length) {
      uniforms.push(...uniformHints.uniforms.map(u => u.name));
    }
    const shaderUniforms = shaderDetails?.flatMap(s => s.uniforms.map(u => u.name)) || [];
    uniforms.push(...shaderUniforms);
    const allUniforms = [...new Set(uniforms)];
    const uniformStr = allUniforms.length > 0 ? allUniforms.join(", ") : "u_time, u_scrollProgress, u_pointer, u_velocity";

    parts.push(`Expose shader uniforms: ${uniformStr}`);

    if (shaderDetails?.length > 0) {
      for (const s of shaderDetails.slice(0, 3)) {
        parts.push(`Shader (${s.type}): ${s.preview.slice(0, 200)}`);
      }
    }

    parts.push("Lazy-load WebGL bundle; never block initial paint");
    parts.push("Cap devicePixelRatio at 2 on mobile");
    parts.push("Provide fallback content for no-WebGL browsers");
  }

  if (canvasCount > webglCount) {
    parts.push(`${canvasCount - webglCount} 2D canvas(es) also detected`);
  }

  if (canvasCount > 0) {
    parts.push("Pause rendering when canvas is off-screen (IntersectionObserver)");
  }

  if (uniformHints?.renderTargetSize) {
    parts.push(`Canvas target size: ${uniformHints.renderTargetSize.width}x${uniformHints.renderTargetSize.height}`);
  }

  if (performanceRisk.level === "high") {
    parts.push("HIGH performance risk: consider simplifying or deferring canvas/WebGL work");
  }

  return parts.join(". ") + ".";
}
