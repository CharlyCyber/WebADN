import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { composeMegaBrief } from "../src/modules/briefComposer.js";

function makeAwwwardsEvidence() {
  return {
    url: "https://reference.example",
    niche: "Taller de motos premium",
    generatedAt: new Date().toISOString(),
    fidelityLevel: "surgical",
    designLanguage: {
      label: "kinetic tech",
      confidence: 0.82,
      signals: ["parallax motion with WebGL and high CSS complexity", "clip-path or mask-image for editorial reveals"]
    },
    visualRhythm: {
      sectionCountEstimate: 4,
      stickySceneEstimate: true,
      majorTransitions: [{ from: 0, to: 50 }]
    },
    conversionPlan: {
      paradigm: "Value first, spectacle second.",
      pushbacks: ["Add a primary above-the-fold CTA."],
      requiredBlocks: ["Hero with niche-specific offer."],
      performanceBudget: { lcp: "< 2.5s", totalLoad: "< 5s" },
      accessibility: ["Respect reduced motion."],
      seo: ["Use one clear H1."]
    },
    inspection: {
      title: "Reference",
      description: "Reference",
      h1: "Reference H1",
      technologies: ["GSAP", "Lenis Scroll"],
      tokens: {
        colors: ["#111112", "#d2ff00", "#f4f4ed"],
        fonts: ["Mona Sans Variable", "Brier"],
        cssVariables: {
          "--color--black": "#111112",
          "--color--lime": "#d2ff00",
          "--text--impact": "7.9375rem"
        },
        spacingScale: ["16px", "80px", "160px"]
      },
      layout: { dominant: "Flexbox-dominant composition", counts: { grid: 2, flex: 24, sticky: 2, fixed: 1 } },
      animationHints: ["clip-path reveal", "sticky scroll choreography", "transform-driven motion"],
      gsapDataAttrs: {
        "section.hero": { speed: "0.8", reveal: "clip" }
      },
      semanticTags: { main: 1, h1: 1, section: 2 },
      ctas: [{ text: "Book", aboveFold: true }],
      viewport: { width: 1440, height: 1100, bodyHeight: 4800 },
      sections: [
        { index: 0, role: "hero", tag: "section", confidence: 0.9, isFullViewport: true, height: 1100, mediaElements: { canvases: 1 } }
      ],
      sectionStructure: [
        {
          index: 0,
          tag: "section",
          classList: "hero gl-stage",
          background: { color: "#111112" },
          layoutConfig: { display: "flex", alignItems: "center", justifyContent: "center" },
          keyChildren: [
            {
              tag: "h1",
              classList: "impact-title",
              textContent: "Reference H1",
              styles: { fontSize: "127px", fontWeight: "700", color: "#f4f4ed", letterSpacing: "-0.02em" }
            }
          ],
          htmlSnippet: "<section class=\"hero gl-stage\"><h1 class=\"impact-title\">Reference H1</h1></section>"
        }
      ],
      assets: { images: [], videos: [], fonts: ["font.woff2"], scripts: ["gsap.js"], stylesheets: ["main.css"], inlineSvgCount: 2, canvasCount: 1 },
      cssFeatures: {
        complexityScore: 78,
        effects: [
          { feature: "clip-path", count: 4, category: "shaping", usage: ".title { clip-path: inset(0); }" },
          { feature: "position: sticky", count: 3, category: "positioning", usage: ".pin { position: sticky; }" },
          { feature: "transform-style: preserve-3d", count: 1, category: "3d", usage: ".scene { transform-style: preserve-3d; }" }
        ]
      },
      styles: {
        totalRuleCount: 12,
        externalSheets: [],
        mediaQueries: [],
        fontFaces: [],
        cssVariableMap: {},
        keyframes: [{ name: "reveal", frames: [{ key: "0%" }, { key: "100%" }] }],
        styleRules: []
      },
      motionRecipes: [
        {
          type: "scroll-parallax",
          target: ".hero-visual",
          tag: "canvas",
          range: "0-50%",
          yDelta: -180,
          parallaxRatio: 0.2,
          keyframes: [
            { scrollPercent: 0, x: 0, y: 0, width: 1440, height: 1100, opacity: 1, translateX: null, translateY: null, scaleX: null, scaleY: null, visibleRatio: 1 },
            { scrollPercent: 25, x: 0, y: -90, width: 1440, height: 1100, opacity: 0.8, translateX: null, translateY: null, scaleX: null, scaleY: null, visibleRatio: 0.8 },
            { scrollPercent: 50, x: 0, y: -180, width: 1440, height: 1100, opacity: 0.4, translateX: null, translateY: null, scaleX: null, scaleY: null, visibleRatio: 0.5 }
          ],
          implementation: "GSAP ScrollTrigger scrub"
        }
      ],
      hoverEffects: [
        { selector: ".cta", tag: "a", text: "Book", effect: "color invert", styleChanges: { color: { before: "#111112", after: "#d2ff00" } } }
      ],
      webgl: {
        canvasCount: 1,
        webglCount: 1,
        likely3dLibrary: "Three.js",
        shaderDetails: [{ uniforms: [{ name: "u_time" }] }],
        performanceRisk: { level: "medium", risks: ["WebGL context detected"] },
        animations: {
          uniformsOverTime: { u_time: { detected: true }, u_scrollProgress: { detected: true } },
          timeAnalysis: [{ type: "time-varying-uniform", name: "u_time", implementation: "Update uniform in render loop" }]
        }
      }
    }
  };
}

describe("composeMegaBrief specificity", () => {
  it("keeps concrete fidelity, GSAP, token, effect, and WebGL instructions", async () => {
    const brief = await composeMegaBrief(makeAwwwardsEvidence(), "surgical");

    assert.match(brief, /80-90% resemblance/);
    assert.match(brief, /data-speed="0.8"/);
    assert.match(brief, /clip-path/);
    assert.match(brief, /#d2ff00/);
    assert.match(brief, /Mona Sans Variable/);
    assert.match(brief, /npm install gsap lenis three/);
    assert.match(brief, /u_time/);
    assert.match(brief, /\.hero-visual/);
    assert.match(brief, /Observed scroll keyframes/);
    assert.match(brief, /25% \| pos\(0, -90\)/);
    assert.match(brief, /Do not settle for a generic premium landing page/);
  });
});
