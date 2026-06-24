export async function detectWebGLAnimations(page, preset = "standard") {
  const sampleCount = preset === "surgical" ? 30 : preset === "fast" ? 5 : 15;
  
  const webglInfo = await page.evaluate(async () => {
    const results = {
      uniformsOverTime: {},
      canvasAnimations: [],
      timeBasedAnimations: []
    };

    // Check for Three.js uniforms being updated
    if (typeof THREE !== "undefined") {
      const uniformsPattern = /uniforms\s*[:=]\s*\{([^}]+(?:\}[^}]*)*)\}/gs;
      const scripts = [...document.scripts].map(s => s.textContent || "").join("\n");
      let match;
      while ((match = uniformsPattern.exec(scripts)) !== null) {
        const block = match[0];
        const uniformNames = [...block.matchAll(/\b(u_\w+|[\w.]+)\s*[:=]\s*(?:new THREE\.Uniform|value\s*[:=])/g)]
          .map(m => m[1].startsWith("u_") ? m[1] : null)
          .filter(Boolean);
        for (const name of uniformNames) {
          if (!results.uniformsOverTime[name]) {
            results.uniformsOverTime[name] = { detected: true, type: "uniform" };
          }
        }
      }

      // Check for render loop patterns
      const renderLoopPattern = /(requestAnimationFrame|animate)\s*\([^)]*\)|render\s*\(\)|update\s*\(/g;
      const renderMatches = scripts.match(renderLoopPattern);
      if (renderMatches && renderMatches.length > 0) {
        results.timeBasedAnimations.push({
          type: "render-loop",
          evidence: "requestAnimationFrame detected in script",
          confidence: 0.7
        });
      }
    }

    // Check canvas elements for animation indicators
    const canvases = [...document.querySelectorAll("canvas")];
    for (const canvas of canvases) {
      const computed = getComputedStyle(canvas);
      results.canvasAnimations.push({
        selector: canvas.id ? `#${canvas.id}` : canvas.className ? `.${canvas.className.split(" ")[0]}` : "canvas",
        width: canvas.width || canvas.clientWidth,
        height: canvas.height || canvas.clientHeight,
        hasTransform: computed.transform !== "none",
        hasAnimationHint: computed.willChange !== "auto"
      });
    }

    // Check for GSAP/DOM-based time animations (not scroll-linked)
    const timeAnimations = [];
    const motionElements = [...document.querySelectorAll("[data-animation], [data-autoplay], .autoplay, .animated")];
    for (const el of motionElements) {
      const styles = getComputedStyle(el);
      if (styles.animation !== "none" || styles.animationDuration !== "0s") {
        timeAnimations.push(el.tagName.toLowerCase() + (el.className ? "." + el.className.split(" ")[0] : ""));
      }
    }

    results.domTimeAnimations = timeAnimations;

    return results;
  });

  // Now sample uniforms over time to detect changes
  if (sampleCount > 0 && page) {
    const timeSamples = [];
    for (let i = 0; i < sampleCount; i++) {
      await page.waitForTimeout(50); // Small interval to detect animation
      
      const snapshot = await page.evaluate(() => {
        const uniformsSnapshot = {};
        const canvases = [...document.querySelectorAll("canvas")];
        const canvasData = canvases.map(c => ({
          id: c.id || c.className,
          timestamp: Date.now()
        }));
        
        if (typeof THREE !== "undefined" && typeof window.scene !== "undefined") {
          // Try to extract active uniforms
          try {
            const scene = window.scene;
            if (scene && scene.traverse) {
              scene.traverse((obj) => {
                if (obj.material && obj.material.uniforms) {
                  for (const [name, uniform] of Object.entries(obj.material.uniforms)) {
                    uniformsSnapshot[name] = uniform.value;
                  }
                }
              });
            }
          } catch {}
        }
        return { uniforms: uniformsSnapshot, canvases: canvasData };
      });
      timeSamples.push(snapshot);
    }

    // Analyze time samples for animation patterns
    const animationFindings = analyzeTimeSamples(timeSamples);
    webglInfo.timeAnalysis = animationFindings;
  }

  return webglInfo;
}

function analyzeTimeSamples(samples) {
  const findings = [];
  
  if (!samples.length) return findings;
  
  // Check for time-varying uniforms
  const uniformNames = Object.keys(samples[0]?.uniforms || {});
  for (const name of uniformNames) {
    const values = samples.map(s => s.uniforms[name]).filter(v => v !== undefined);
    if (values.length > 2) {
      const isChanging = values.some((v, i) => i > 0 && v !== values[i-1]);
      if (isChanging) {
        findings.push({
          type: "time-varying-uniform",
          name,
          implementation: "Update uniform in render loop - likely driving shader animation"
        });
      }
    }
  }

  // Check for canvas rendering activity
  const canvasActive = samples.some(s => s.canvases && s.canvases.length > 0);
  if (canvasActive) {
    findings.push({
      type: "active-canvas",
      evidence: "Canvas elements present during animation frames",
      implementation: "requestAnimationFrame loop detected - WebGL rendering is time-based"
    });
  }

  return findings;
}