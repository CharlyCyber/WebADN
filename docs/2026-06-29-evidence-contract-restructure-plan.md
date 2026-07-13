# Evidence Contract + Surgical Refactor — Implementation Plan

**Goal:** Establish typed evidence contract, fix 7 bugs, eliminate duplication, split briefComposer.js

**Architecture:** Add `src/shared/` layer for types + shared logic, split briefComposer into focused modules under `src/modules/briefSections/`, fix all known bugs, validate at pipeline boundaries.

**Tech Stack:** Node.js, JSDoc types, Node test runner

---

### Task 1: Create shared evidence types contract

**Files:**
- Create: `src/shared/evidence-types.js`
- Verify: `node --check src/shared/evidence-types.js`

- [ ] **Step 1: Write evidence-types.js with full JSDoc typedefs**

```js
/**
 * @typedef {Object} Evidence
 * @property {string} url
 * @property {string} niche
 * @property {string} generatedAt
 * @property {Inspection} inspection
 * @property {FidelityScore} fidelityScore
 * @property {MotionAnalysis} motionAnalysis
 * @property {ConversionPlan} conversionPlan
 * @property {Object} knowledgeMatrix
 * @property {PixelPalette} [pixelPalette]
 * @property {SpacingScale} [spacing]
 * @property {DesignLanguage} designLanguage
 * @property {Object} [llmInterpretation]
 * @property {Object} [llmAnalysis]
 * @property {Object} [visualRhythm]
 * @property {Object} timings
 * @property {string} [fidelityLevel]
 */

/**
 * @typedef {Object} Inspection
 * @property {string} title
 * @property {string} description
 * @property {string} h1
 * @property {string[]} technologies
 * @property {Object} tokens
 * @property {string} layout
 * @property {string[]} animationHints
 * @property {Object} gsapDataAttrs
 * @property {Object} semanticTags
 * @property {Array} ctas
 * @property {Object} viewport
 * @property {string[]} risks
 * @property {Array} visualEvidence
 * @property {Section[]} sections
 * @property {AssetManifest} [assets]
 * @property {CssFeatures} [cssFeatures]
 * @property {MotionRecipe[]} [motionRecipes]
 * @property {HoverEffect[]} [hoverEffects]
 * @property {WebGlInfo} [webgl]
 * @property {StyleInfo} [styles]
 * @property {Array} [sectionStructure]
 * @property {Object} [downloadedAssets]
 * @property {IntroTimeline} [introTimeline]
 * @property {Object} [performanceMetrics]
 * @property {string[]} [overlayActions]
 */

/**
 * @typedef {Object} Section
 * @property {number} index
 * @property {string} tag
 * @property {string} [role]
 * @property {number} [confidence]
 * @property {string[]} [reasons]
 * @property {Object} viewportPosition
 * @property {number} height
 * @property {boolean} [isFullViewport]
 * @property {Object} [textHierarchy]
 * @property {string[]} [ctaText]
 * @property {string} [layoutType]
 * @property {Object} [background]
 * @property {Object} [mediaElements]
 * @property {number} [stickyDescendants]
 * @property {number} [fixedDescendants]
 * @property {boolean} [hasCanvas]
 * @property {boolean} [hasVideo]
 * @property {boolean} [hasSvg]
 * @property {string} [textPreview]
 */

/**
 * @typedef {Object} FidelityScore
 * @property {number} overall
 * @property {string} label
 * @property {Object} breakdown
 * @property {string[]} missingEvidence
 */

/**
 * @typedef {Object} PixelPalette
 * @property {string} background
 * @property {number} backgroundCoverage
 * @property {string} dominant
 * @property {string} accent
 * @property {string} muted
 * @property {string[]} textCandidates
 * @property {Array} palette
 * @property {Array} [gradients]
 * @property {string} source
 * @property {string} method
 */

/**
 * @typedef {Object} SpacingScale
 * @property {number} baseUnit
 * @property {Array} scale
 * @property {string[]} tokens
 * @property {Object} observed
 * @property {boolean} inferred
 * @property {Object} [rhythm]
 */

/**
 * @typedef {Object} DesignLanguage
 * @property {string} label
 * @property {number} confidence
 * @property {string[]} signals
 */

/**
 * @typedef {Object} MotionRecipe
 * @property {string} type
 * @property {string} target
 * @property {string} tag
 * @property {string} range
 * @property {number} [yDelta]
 * @property {number} [xDelta]
 * @property {number} [parallaxRatio]
 * @property {string} [opacity]
 * @property {string} [scaleRange]
 * @property {Object} [easing]
 * @property {Array} [keyframes]
 * @property {string} [implementation]
 */

/**
 * @typedef {Object} HoverEffect
 * @property {string} target
 * @property {string} tag
 * @property {string} [type]
 * @property {Object} [before]
 * @property {Object} [after]
 * @property {Object} [delta]
 */

/**
 * @typedef {Object} CssFeatures
 * @property {number} complexityScore
 * @property {Object} customProperties
 * @property {string[]} animations
 * @property {Array} [effects]
 */

/**
 * @typedef {Object} AssetManifest
 * @property {Array} [images]
 * @property {Array} [videos]
 * @property {Array} [fonts]
 * @property {Array} [scripts]
 * @property {Array} [stylesheets]
 * @property {Array} [models3d]
 * @property {Array} [suspiciousHeavyAssets]
 */

/**
 * @typedef {Object} WebGlInfo
 * @property {number} canvasCount
 * @property {number} webglCount
 * @property {string} [likely3dLibrary]
 * @property {string} [performanceRisk]
 * @property {Object} [animations]
 */

/**
 * @typedef {Object} StyleInfo
 * @property {Array} [colors]
 * @property {Object} [fonts]
 * @property {Array} [spacing]
 * @property {Array} [styleRules]
 */

/**
 * @typedef {Object} IntroTimeline
 * @property {Object} [preloader]
 * @property {Array} timeline
 * @property {string[]} screenshotPaths
 * @property {Array} frames
 */

/**
 * @typedef {Object} MotionAnalysis
 * @property {boolean} enabled
 * @property {string} source
 * @property {Array} findings
 * @property {string[]} mappedTechniques
 */

/**
 * @typedef {Object} ConversionPlan
 * @property {string} paradigm
 * @property {string[]} pushbacks
 * @property {string[]} requiredBlocks
 * @property {Object} performanceBudget
 * @property {string[]} motionDirectives
 * @property {string[]} accessibility
 * @property {string[]} seo
 */
```

- [ ] **Step 2: Verify syntax**

Run: `node --check src/shared/evidence-types.js`
Expected: OK (no output, no errors)

---

### Task 2: Fix bug — motionSampler.js findLast on Node 20

**Files:**
- Modify: `src/modules/motionSampler.js:193-194`
- Verify: `node --check src/modules/motionSampler.js`

- [ ] **Step 1: Replace `findLast` with manual reduce**

Replace:
```js
const firstVisible = points.find(p => p.opacity < 0.95);
const lastVisible = points.findLast(p => p.opacity < 0.95);
```

With:
```js
const firstVisible = points.find(p => p.opacity < 0.95);
const lastVisible = [...points].reverse().find(p => p.opacity < 0.95);
```

- [ ] **Step 2: Verify syntax**

Run: `node --check src/modules/motionSampler.js`
Expected: OK

---

### Task 3: Fix bug — scraper.js missing `log` import

**Files:**
- Modify: `src/modules/scraper.js:1-10`

- [ ] **Step 1: Add log import**

Add at top of scraper.js (if not already present):
```js
import { log } from "../support/logger.js";
```

- [ ] **Step 2: Verify syntax**

Run: `node --check src/modules/scraper.js`
Expected: OK

---

### Task 4: Fix bug — visualCapture.js viewport not restored on error

**Files:**
- Modify: `src/modules/visualCapture.js`

- [ ] **Step 1: Fix generateThumbnail to always restore viewport**

```js
async function generateThumbnail(page) {
  const oldViewport = page.viewportSize();
  try {
    await page.setViewportSize({ width: 192, height: 108 });
    const buf = await page.screenshot({ type: "jpeg", quality: 40 });
    return buf.toString("base64");
  } finally {
    if (oldViewport) {
      await page.setViewportSize(oldViewport);
    }
  }
}
```

- [ ] **Step 2: Verify syntax**

Run: `node --check src/modules/visualCapture.js`
Expected: OK

---

### Task 5: Fix bug — fidelityScore.js dead parameter

**Files:**
- Modify: `src/modules/fidelityScore.js`

- [ ] **Step 1: Fix computeResponsiveConfidence signature and usage**

Find `computeResponsiveConfidence` function and remove unused `visualRhythm` parameter:
```js
function computeResponsiveConfidence(inspection) {
```

Update the call site in `computeFidelityScore`:
```js
const responsiveConfidence = computeResponsiveConfidence(inspection);
```

- [ ] **Step 2: Verify syntax**

Run: `node --check src/modules/fidelityScore.js`
Expected: OK

---

### Task 6: Fix bug — styleExtractor.js dead code

**Files:**
- Modify: `src/modules/styleExtractor.js`

- [ ] **Step 1: Remove unused `_BUG_REPRO_FLUID_FONT_RE`**

Delete the unused module-level regex `_BUG_REPRO_FLUID_FONT_RE` (line ~26).

- [ ] **Step 2: Verify syntax**

Run: `node --check src/modules/styleExtractor.js`
Expected: OK

---

### Task 7: Fix bugs — interactionProbe.js two issues

**Files:**
- Modify: `src/modules/interactionProbe.js`

- [ ] **Step 1: Fix `:--hf` pseudo-selector to use DOM cloning**

Replace the `el.matches(rule.selector.replace(/:hover/g, ":--hf"))` pattern with the sandbox DOM clone approach from plan-mejora-definitivo.md (section 3.5):

```js
async function probeHoverSafe(page, targetSelector, cssRule) {
  return page.evaluate(({ sel, cssText }) => {
    const original = document.querySelector(sel);
    if (!original) return null;
    const sandbox = document.createElement("div");
    sandbox.style.cssText = "position:fixed;top:-9999px;left:-9999px;visibility:hidden";
    document.body.appendChild(sandbox);
    const clone = original.cloneNode(true);
    sandbox.appendChild(clone);
    const props = cssText.match(/\{([^}]+)\}/)?.[1] || "";
    clone.style.cssText += ";" + props;
    const result = {
      color: getComputedStyle(clone).color,
      background: getComputedStyle(clone).background,
      transform: getComputedStyle(clone).transform,
      opacity: getComputedStyle(clone).opacity,
      boxShadow: getComputedStyle(clone).boxShadow,
    };
    sandbox.remove();
    return result;
  }, { sel: targetSelector, cssText: cssRule.cssText });
}
```

- [ ] **Step 2: Fix page.evaluate 2-arg vs 3-arg bug**

Replace `page.evaluate((max) => {...}, maxTargets, { timeout: 10000 })` with:
```js
page.setDefaultTimeout(10000);
return await page.evaluate((max) => {...}, maxTargets);
```

- [ ] **Step 3: Verify syntax**

Run: `node --check src/modules/interactionProbe.js`
Expected: OK

---

### Task 8: Fix bug — structureExtractor.js ignores sections parameter

**Files:**
- Modify: `src/modules/structureExtractor.js`

- [ ] **Step 1: Fix to use passed section elements instead of re-querying**

Modify `extractSectionStructure` to pass section class/id info into `page.evaluate` instead of re-running DOM queries:

```js
export async function extractSectionStructure(page, sections) {
  const sectionSelectors = sections.map((el, i) => {
    const id = el.id ? `#${CSS.escape(el.id)}` : null;
    const classes = [...el.classList].filter(c => c.length > 2).slice(0, 2);
    const classSel = classes.map(c => `.${CSS.escape(c)}`).join("");
    const tag = el.tagName.toLowerCase();
    return id || (classSel ? `${tag}${classSel}` : tag);
  });
  // pass selectors to page.evaluate instead of re-querying
  ...
}
```

- [ ] **Step 2: Verify syntax**

Run: `node --check src/modules/structureExtractor.js`
Expected: OK

---

### Task 9: Create shared color-roles module

**Files:**
- Create: `src/shared/color-roles.js`
- Modify: `src/modules/briefComposer.js` — import from shared
- Modify: `src/modules/contextPackager.js` — import from shared

- [ ] **Step 1: Write color-roles.js**

Extract `classifyColorsByRole` from briefComposer.js into a standalone shared module. The function classifies colors by role (Background, Text, Accent, Border, etc.) using CSS variable names, section backgrounds, and computed styles.

```js
// src/shared/color-roles.js

/**
 * @typedef {Object} ColorRole
 * @property {string} color
 * @property {string} hex
 * @property {string} role
 * @property {number} [frequency]
 */

/**
 * Classify colors from inspection data into semantic roles.
 * @param {Object} inspection
 * @returns {ColorRole[]}
 */
export function classifyColorsByRole(inspection) {
  // Copy the full implementation from briefComposer.js
  // ... (existing classifyColorsByRole code)
}
```

- [ ] **Step 2: Update briefComposer.js**

Replace the inline `classifyColorsByRole` function with:
```js
import { classifyColorsByRole } from "../shared/color-roles.js";
```
Remove the local definition if it exists.

- [ ] **Step 3: Update contextPackager.js**

Replace the inline `extractColorRoles` function with:
```js
import { classifyColorsByRole } from "../shared/color-roles.js";
```

- [ ] **Step 4: Verify syntax**

Run: `node --check src/shared/color-roles.js && node --check src/modules/briefComposer.js && node --check src/modules/contextPackager.js`
Expected: OK

---

### Task 10: Create shared type-scale module

**Files:**
- Create: `src/shared/type-scale.js`
- Modify: `src/modules/briefComposer.js` — import from shared

- [ ] **Step 1: Write type-scale.js**

Extract `extractTypeScale` from briefComposer.js:

```js
// src/shared/type-scale.js
/**
 * Build typography scale from inspection data.
 * @param {Object} inspection
 * @returns {Object}
 */
export function extractTypeScale(inspection) {
  // Copy implementation from briefComposer.js
}
```

- [ ] **Step 2: Update briefComposer.js**

Replace inline `extractTypeScale` with import.

- [ ] **Step 3: Verify syntax**

Run: `node --check src/shared/type-scale.js && node --check src/modules/briefComposer.js`
Expected: OK

---

### Task 11: Split briefComposer.js into focused modules

**Files:**
- Create: `src/modules/briefSections/compose-diagnosis.js`
- Create: `src/modules/briefSections/compose-tokens.js`
- Create: `src/modules/briefSections/compose-motion.js`
- Create: `src/modules/briefSections/compose-build.js`
- Create: `src/modules/briefSections/compose-quality.js`
- Create: `src/modules/briefSections/compose-prompt.js`
- Modify: `src/modules/briefComposer.js` — thin orchestration

- [ ] **Step 1: Create each module with its section of the brief**

Each module exports one function and imports from `../../shared/`:

```
briefSections/
  compose-diagnosis.js  → composeExecutiveDiagnosis, composeDnaSummary, composeVisualGroundTruth
  compose-tokens.js     → composeDesignTokens, composeCssArchitecture
  compose-motion.js     → composeMotionTimeline, composeInteractionRecipes, composeIntroTimeline
  compose-build.js      → composeComponentArchitecture, composeSectionBuildSpec, composeAssetRequirements, composeResponsiveRules
  compose-quality.js    → composeCroAdaptation, composePerformanceBudget, composeAccessibilityConstraints, composeAcceptanceCriteria
  compose-prompt.js     → composeFinalAgentPrompt, composeClientBrief
```

- [ ] **Step 2: Refactor briefComposer.js**

Replace the 1500-line file with a thin orchestration:
```js
import { composeExecutiveDiagnosis, composeDnaSummary, composeVisualGroundTruth } from "./briefSections/compose-diagnosis.js";
import { composeDesignTokens, composeCssArchitecture } from "./briefSections/compose-tokens.js";
// ... etc

export async function composeMegaBrief(evidence, fidelityLevel = "standard") {
  const trimmed = trimEvidence(evidence, fidelityLevel);
  const sections = [
    composeClientBrief(trimmed),
    composeExecutiveDiagnosis(trimmed),
    composeDnaSummary(trimmed),
    composeVisualGroundTruth(trimmed),
    composeDesignTokens(trimmed),
    composeCssArchitecture(trimmed),
    composeComponentArchitecture(trimmed),
    composeSectionBuildSpec(trimmed),
    composeMotionTimeline(trimmed),
    composeInteractionRecipes(trimmed),
    composeAssetRequirements(trimmed),
    composeResponsiveRules(trimmed),
    composeCroAdaptation(trimmed),
    composePerformanceBudget(trimmed),
    composeAccessibilityConstraints(trimmed),
    composeAcceptanceCriteria(trimmed),
    composeFinalAgentPrompt(trimmed),
  ].filter(Boolean).join("\n\n---\n\n");
  return sections;
}

// Keep trimEvidence here since it's the core composition utility
export function trimEvidence(evidence, level) { ... }
export function getConfidencePrefix(score) { ... }
```

- [ ] **Step 3: Verify syntax**

Run: `node --check src/modules/briefComposer.js && node --check src/modules/briefSections/compose-diagnosis.js`
Expected: OK

- [ ] **Step 4: Run tests**

Run: `node --test tests/briefComposer.test.js`
Expected: All pass

---

### Task 12: Add evidence validation to orchestrator

**Files:**
- Modify: `src/orchestrator.js`
- Modify: `src/support/artifacts.js`
- Create: `tests/evidence-contract.test.js`

- [ ] **Step 1: Add validateEvidence function to artifacts.js**

```js
import { hasOwnProperty } from "node:util";

const REQUIRED_EVIDENCE_FIELDS = ["url", "niche", "generatedAt", "inspection"];
const REQUIRED_INSPECTION_FIELDS = ["title", "technologies", "sections", "viewport"];

export function validateEvidence(evidence) {
  const errors = [];
  for (const field of REQUIRED_EVIDENCE_FIELDS) {
    if (evidence[field] === undefined || evidence[field] === null) {
      errors.push(`Missing required field: evidence.${field}`);
    }
  }
  const insp = evidence.inspection || {};
  for (const field of REQUIRED_INSPECTION_FIELDS) {
    if (insp[field] === undefined || insp[field] === null) {
      errors.push(`Missing required field: evidence.inspection.${field}`);
    }
  }
  if (insp.sections && !Array.isArray(insp.sections)) {
    errors.push("evidence.inspection.sections must be an array");
  }
  if (insp.technologies && !Array.isArray(insp.technologies)) {
    errors.push("evidence.inspection.technologies must be an array");
  }
  return { valid: errors.length === 0, errors };
}
```

- [ ] **Step 2: Add validation stage to orchestrator.js pipeline**

After `runDesignAndFidelity` and before `runLlmInterpretation`:
```js
{ name: 'evidenceValidation', fn: runEvidenceValidation },
```

```js
async function runEvidenceValidation(ctx, config) {
  const { evidence } = ctx.data;
  const { valid, errors } = validateEvidence(evidence);
  if (!valid) {
    log("warn", "validation", "Evidence validation failed", { errors });
    evidence.validationWarnings = errors;
  } else {
    log("info", "validation", "Evidence validation passed");
  }
  return {};
}
```

- [ ] **Step 3: Write evidence-contract.test.js**

```js
import { test } from "node:test";
import assert from "node:assert";
import { validateEvidence } from "../src/support/artifacts.js";

const MINIMAL_EVIDENCE = {
  url: "https://example.com",
  niche: "test",
  generatedAt: new Date().toISOString(),
  inspection: {
    title: "Test",
    technologies: [],
    sections: [],
    viewport: { width: 1440, height: 900 }
  },
  fidelityScore: { overall: 50, label: "test", breakdown: {}, missingEvidence: [] },
  designLanguage: { label: "minimal", confidence: 0, signals: [] },
  knowledgeMatrix: {},
  motionAnalysis: { enabled: false, source: "", findings: [], mappedTechniques: [] },
  conversionPlan: { paradigm: "", pushbacks: [], requiredBlocks: [], performanceBudget: {}, motionDirectives: [], accessibility: [], seo: [] },
  timings: {}
};

test("validateEvidence: valid minimal evidence passes", () => {
  const result = validateEvidence(MINIMAL_EVIDENCE);
  assert.ok(result.valid);
  assert.strictEqual(result.errors.length, 0);
});

test("validateEvidence: missing required field fails", () => {
  const { url, ...noUrl } = MINIMAL_EVIDENCE;
  const result = validateEvidence(noUrl);
  assert.ok(!result.valid);
  assert.ok(result.errors.some(e => e.includes("url")));
});

test("validateEvidence: missing inspection field fails", () => {
  const evidence = JSON.parse(JSON.stringify(MINIMAL_EVIDENCE));
  delete evidence.inspection.technologies;
  const result = validateEvidence(evidence);
  assert.ok(!result.valid);
  assert.ok(result.errors.some(e => e.includes("technologies")));
});

test("validateEvidence: null inspection fails", () => {
  const evidence = { ...MINIMAL_EVIDENCE, inspection: null };
  const result = validateEvidence(evidence);
  assert.ok(!result.valid);
});
```

- [ ] **Step 4: Run tests**

Run: `node --test tests/evidence-contract.test.js`
Expected: All pass

---

### Task 13: Run full test suite and fix regressions

**Files:**
- All modified files

- [ ] **Step 1: Run all tests**

Run: `npm test`
Expected: All existing tests still pass (may have 1 pre-existing flaky test)

- [ ] **Step 2: Run static check**

Run: `npm run check`
Expected: All files pass syntax check
