# Awwwards Surgical Extractor Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Evolve the current dashboard from a basic technical extractor into a local, zero-paid-API Awwwards-style surgical analysis engine that captures structure, visuals, motion, assets, responsiveness, and conversion strategy into a senior-grade build prompt.

**Architecture:** Keep the existing Node.js + Playwright core, but split extraction into independent analyzers that generate structured evidence first and prose second. The tool should collect DOM/CSS/runtime data, viewport screenshots, scroll states, motion samples, assets, and risk findings locally, then synthesize them through deterministic templates and optional free local LLM hooks.

**Tech Stack:** Node.js, Playwright, Chrome DevTools Protocol, native HTTP server, browser screenshots, JSON evidence artifacts, optional free local tools such as FFmpeg, ImageMagick, Ollama, and open-source JS packages only.

---

## North Star

The tool should not promise to clone a website byte-for-byte. It should extract the design and engineering DNA of a reference site so an AI coding agent can recreate an adapted, legally safer, niche-specific site at roughly 80-90% fidelity on the first serious attempt.

Definition of "surgical":

- Exact section inventory: hero, nav, sticky scenes, galleries, cards, forms, footer.
- Exact design token map: fonts, colors, spacing, radii, shadows, blend modes, masks, gradients.
- Exact interaction inventory: scroll choreography, hover behavior, cursor behavior, reveal timing, parallax layers, 3D/WebGL hints.
- Exact responsive differences: desktop, tablet, mobile.
- Exact asset manifest: images, videos, SVGs, fonts, scripts, canvas/WebGL resources where observable.
- Strong prompt output: component architecture, styling tokens, animation recipes, acceptance criteria, and CRO pushback.

---

## Phase 0: Safety, Scope, and Reliability Baseline

### Task 1: Add URL Validation and Local-Only Server Binding

**Files:**
- Modify: `src/server.js`
- Create: `src/support/urlSafety.js`
- Test: `tests/urlSafety.test.js`

**Step 1: Create URL safety helper**

Implement:

```js
export function validatePublicHttpUrl(rawUrl) {
  const url = new URL(rawUrl);
  if (!["http:", "https:"].includes(url.protocol)) {
    throw new Error("Only http and https URLs are allowed.");
  }
  const host = url.hostname.toLowerCase();
  const blocked = [
    "localhost",
    "127.0.0.1",
    "0.0.0.0",
    "::1"
  ];
  if (blocked.includes(host)) {
    throw new Error("Local and private URLs are blocked for safety.");
  }
  if (/^(10|127|169\.254|172\.(1[6-9]|2\d|3[0-1])|192\.168)\./.test(host)) {
    throw new Error("Private network URLs are blocked for safety.");
  }
  return url.toString();
}
```

**Step 2: Use it before extraction**

In `src/server.js`, validate `body.url` before passing it to `runOrchestrator`.

**Step 3: Bind server to localhost**

Change:

```js
server.listen(PORT, () => {
```

to:

```js
server.listen(PORT, "127.0.0.1", () => {
```

**Step 4: Add tests**

Use Node's built-in test runner. Cover:

- accepts `https://anubi.io/`
- rejects `file:///etc/passwd`
- rejects `http://localhost:3000`
- rejects `http://192.168.1.1`

**Step 5: Run**

```bash
node --test tests/urlSafety.test.js
npm run check
```

Expected: all pass.

---

### Task 2: Add Extraction Artifacts Folder

**Files:**
- Create: `src/support/artifacts.js`
- Modify: `src/orchestrator.js`
- Modify: `README.md`

**Step 1: Create artifact writer**

Create per-run folders:

```text
runs/YYYY-MM-DDTHH-mm-ss-domain/
  evidence.json
  screenshots/
  traces/
  prompt.md
```

**Step 2: Store the raw evidence**

Before generating prose, save the structured extraction result as `evidence.json`.

**Step 3: Store prompt output**

Save the final prompt as `prompt.md`.

**Step 4: Show artifact path in dashboard**

Return `artifactPath` from `/api/extract`.

**Step 5: Test manually**

Run extraction and verify the folder exists with evidence and prompt files.

---

## Phase 1: Multi-Viewport Visual Capture

### Task 3: Add Viewport Matrix Capture

**Files:**
- Create: `src/modules/visualCapture.js`
- Modify: `src/modules/scraper.js`
- Modify: `src/orchestrator.js`

**Step 1: Define viewport matrix**

```js
export const VIEWPORTS = [
  { name: "desktop", width: 1440, height: 1100 },
  { name: "tablet", width: 834, height: 1112 },
  { name: "mobile", width: 390, height: 844 },
  { name: "wide", width: 1920, height: 1080 }
];
```

**Step 2: Capture screenshots at scroll percentages**

For each viewport:

- 0%
- 25%
- 50%
- 75%
- 100%

Save:

```text
runs/.../screenshots/desktop-000.png
runs/.../screenshots/desktop-025.png
...
```

**Step 3: Capture DOM snapshot per point**

For each scroll point, collect:

- visible headings
- visible buttons/links
- top 20 visible elements by area
- background colors/images
- transforms and opacity
- z-index and position

**Step 4: Output visual evidence**

Return:

```js
{
  viewport: "desktop",
  scrollPercent: 25,
  screenshotPath,
  visibleText,
  visibleElements,
  dominantLayoutSignals
}
```

**Step 5: Test**

Use `https://example.com` and `https://anubi.io/`.

Expected: screenshots saved for all viewports and scroll points.

---

### Task 4: Add Screenshot Comparison Heuristics

**Files:**
- Create: `src/modules/visualDiff.js`
- Modify: `src/modules/visualCapture.js`

**Step 1: Compute section transitions**

Use screenshot dimensions and simple pixel sampling to estimate:

- high visual change between scroll points
- static/sticky regions
- dark/light theme shifts
- likely full-screen sections

No paid vision model needed.

**Step 2: Store visual rhythm**

Return:

```js
{
  sectionCountEstimate,
  stickySceneEstimate,
  visualDensityByScroll,
  contrastMoodByScroll,
  majorTransitions
}
```

**Step 3: Add prompt usage**

The prompt generator should say things like:

- "Build 6-8 full-screen sections."
- "Use sticky scene between 25-50% scroll."
- "Switch visual density after hero."

---

## Phase 2: Deep DOM and Component Intelligence

### Task 5: Build Section Mapper

**Files:**
- Create: `src/modules/sectionMapper.js`
- Modify: `src/modules/scraper.js`
- Modify: `src/modules/promptGenerator.js`

**Step 1: Detect major sections**

Use selectors:

```js
main > section,
[data-section],
section,
article,
header,
footer,
div with height > 65vh
```

**Step 2: For each section collect**

- index
- viewport position
- height
- text hierarchy
- CTA text
- layout type
- background
- media elements
- sticky/fixed descendants
- canvas/SVG/video presence
- likely role: hero, proof, showcase, service, process, pricing, contact, footer

**Step 3: Add section confidence**

Example:

```js
{
  role: "hero",
  confidence: 0.86,
  reasons: ["first section", "contains h1", "contains CTA"]
}
```

**Step 4: Prompt section-by-section**

Generate a detailed build spec:

```text
Section 1: Hero
- Layout: full viewport, left-aligned editorial copy, visual canvas layer.
- Motion: intro reveal, scroll compression, CTA remains visible.
- Adaptation: replace original copy with niche-specific value prop.
```

---

### Task 6: Add Asset Manifest

**Files:**
- Create: `src/modules/assetExtractor.js`
- Modify: `src/modules/scraper.js`

**Step 1: Collect direct assets**

From DOM:

- `img[src]`
- `picture source[srcset]`
- `video[src]`
- `source[src]`
- inline SVG count
- canvas count
- CSS background images
- font-face URLs

**Step 2: Collect network assets via Playwright**

Listen to `page.on("response")` and classify:

- image
- video
- font
- script
- stylesheet
- XHR/fetch
- WebGL-ish binary assets: `.glb`, `.gltf`, `.hdr`, `.ktx2`, `.wasm`

**Step 3: Return manifest**

```js
{
  images: [],
  videos: [],
  fonts: [],
  scripts: [],
  stylesheets: [],
  models3d: [],
  suspiciousHeavyAssets: []
}
```

**Step 4: Prompt usage**

Do not tell the agent to steal assets. Tell it:

- what asset types are needed
- how many
- where they appear
- what style they should match

---

### Task 7: CSS Feature Intelligence

**Files:**
- Create: `src/modules/cssAnalyzer.js`
- Modify: `src/modules/scraper.js`

**Step 1: Detect advanced CSS features**

Track:

- `clip-path`
- `mask-image`
- `mix-blend-mode`
- `backdrop-filter`
- `filter`
- `perspective`
- `transform-style: preserve-3d`
- `scroll-snap`
- `container-type`
- CSS variables
- complex gradients
- `position: sticky`
- custom cursor

**Step 2: Count and classify**

Return:

```js
{
  effects: [
    { feature: "mask-image", count: 4, usage: "marquee fade edges" }
  ],
  complexityScore: 0-100
}
```

---

## Phase 3: Motion and Interaction Recorder

### Task 8: Scroll Timeline Sampler

**Files:**
- Create: `src/modules/motionSampler.js`
- Modify: `src/orchestrator.js`

**Step 1: Select animated candidates**

Candidates:

- elements with non-none transform
- opacity less than 1
- sticky/fixed elements
- elements with transition/animation
- large visual elements
- canvases
- SVGs

**Step 2: Sample during controlled scroll**

At 30-60 scroll positions, collect per element:

- bounding box
- transform matrix
- opacity
- filter
- clip-path
- z-index
- visible ratio

**Step 3: Infer motion behavior**

Calculate:

- movement distance
- parallax ratio
- pinned range
- fade range
- scale/rotation changes
- stagger pattern guesses

**Step 4: Return animation recipes**

Example:

```js
{
  type: "scroll-parallax",
  target: ".hero-visual",
  range: "0-35%",
  yRatio: -0.28,
  opacity: "1 -> 0.2",
  implementation: "GSAP ScrollTrigger scrub: true or CSS scroll-timeline"
}
```

**Step 5: Prompt usage**

The final prompt should include animation recipes, not vague terms.

---

### Task 9: Hover and Pointer Interaction Probe

**Files:**
- Create: `src/modules/interactionProbe.js`
- Modify: `src/orchestrator.js`

**Step 1: Find interactive targets**

Selectors:

```js
a, button, [role=button], input, textarea, select, [data-cursor], [class*=hover], [class*=card]
```

**Step 2: Probe each target**

For top 40 visible targets:

- screenshot before
- hover target
- wait 300ms
- screenshot after
- compare computed styles before/after

**Step 3: Classify hover effects**

- color invert
- underline reveal
- magnetic movement
- image swap
- card lift
- cursor label
- background spotlight
- blend-mode reveal

**Step 4: Prompt usage**

Add:

```text
Hover system:
- Primary buttons invert background and shift 2px.
- Project cards reveal media overlay and cursor label.
```

---

### Task 10: Canvas and WebGL Detection

**Files:**
- Create: `src/modules/webglInspector.js`
- Modify: `src/modules/scraper.js`

**Step 1: Instrument canvas contexts**

Before page scripts run, inject:

```js
HTMLCanvasElement.prototype.getContext = new Proxy(...)
```

Record:

- `webgl`
- `webgl2`
- `2d`
- canvas size
- draw frequency approximated through requestAnimationFrame hooks

**Step 2: Detect libraries**

Improve signatures:

- Three.js
- OGL
- Babylon
- Pixi
- p5
- Spline
- Rive
- Lottie
- Matter.js

**Step 3: Output**

```js
{
  canvasCount,
  webglCount,
  likely3dLibrary,
  performanceRisk,
  promptRecipe
}
```

---

## Phase 4: Local Vision Without Paid APIs

### Task 11: Deterministic Visual Classifier

**Files:**
- Create: `src/modules/localVisionHeuristics.js`
- Modify: `src/orchestrator.js`

**Step 1: Analyze screenshots locally**

Use lightweight local heuristics:

- color histogram
- brightness/contrast
- empty space estimate
- text density estimate from DOM overlays
- large media area estimate
- composition balance left/right/top/bottom

**Step 2: Generate design language**

Map evidence to labels:

- editorial brutalism
- luxury minimal
- cinematic dark
- kinetic tech
- neo-institutional
- playful 3D
- product lab

**Step 3: Prompt usage**

Add "Design Direction" with evidence, not vibes.

---

### Task 12: Optional Free Local LLM Adapter

**Files:**
- Create: `src/modules/localLlmAdapter.js`
- Modify: `src/modules/promptGenerator.js`
- Modify: `README.md`

**Step 1: Support Ollama if installed**

Detect `OLLAMA_MODEL` in `.env`.

If present, call:

```text
http://localhost:11434/api/generate
```

**Step 2: Feed local LLM only evidence summaries**

Never send raw huge HTML by default.

**Step 3: Fallback deterministic**

If Ollama is not available, template generation continues.

**Recommended free models:**

- `qwen2.5-coder`
- `llama3.1`
- `mistral`

**Step 4: README**

Explain that this is optional and zero-cost if the user runs it locally.

---

## Phase 5: Prompt Engine 2.0

### Task 13: Replace Single Prompt With Structured Mega Brief

**Files:**
- Modify: `src/modules/promptGenerator.js`
- Create: `src/modules/briefComposer.js`

**Step 1: New output sections**

Generate:

1. Executive design diagnosis
2. Reference DNA summary
3. Design token system
4. Component architecture
5. Section-by-section build spec
6. Motion timeline recipes
7. Interaction recipes
8. Asset requirements
9. Responsive rules
10. CRO adaptation
11. Performance budget
12. Accessibility constraints
13. Acceptance criteria
14. Final agent prompt

**Step 2: Add acceptance criteria**

Example:

```text
The implementation is not accepted unless:
- The hero communicates value without scrolling.
- Desktop and mobile match the extracted layout rhythm.
- All scroll animations have reduced-motion alternatives.
- WebGL/canvas is lazy-loaded and never contains critical text.
```

**Step 3: Add build stack recommendation**

Use evidence:

- Static Astro/Vite for lightweight
- Next.js if dynamic routes/content
- GSAP if complex scroll choreography
- CSS-only if effects are simple
- Three.js only when actual WebGL evidence exists

---

### Task 14: Add Fidelity Scoring

**Files:**
- Create: `src/modules/fidelityScore.js`
- Modify: `src/modules/promptGenerator.js`
- Modify: `public/app.js`
- Modify: `public/index.html`

**Step 1: Score evidence completeness**

Metrics:

- visual coverage
- DOM coverage
- token confidence
- motion confidence
- interaction confidence
- responsive confidence
- asset confidence

**Step 2: Output rating**

```js
{
  overall: 78,
  label: "Strong but motion incomplete",
  missingEvidence: ["hover probes", "mobile section screenshots"]
}
```

**Step 3: Dashboard**

Show "Expected first-pass quality":

- 40-55%: rough inspiration
- 55-70%: useful brief
- 70-85%: strong production brief
- 85-92%: surgical brief

---

## Phase 6: Dashboard Upgrade

### Task 15: Add Evidence Tabs

**Files:**
- Modify: `public/index.html`
- Modify: `public/styles.css`
- Modify: `public/app.js`

**Step 1: Add tabs**

Tabs:

- Prompt
- Screenshots
- Sections
- Motion
- Assets
- Risks

**Step 2: Render structured evidence**

The UI should not only show a prompt. It should show why the prompt says what it says.

**Step 3: Add download buttons**

- Download `prompt.md`
- Download `evidence.json`
- Open run folder path

---

### Task 16: Add Extraction Presets

**Files:**
- Modify: `public/index.html`
- Modify: `public/app.js`
- Modify: `src/server.js`

**Presets:**

- Fast: desktop only, no hover, no motion sampling.
- Standard: desktop + mobile, screenshots + section map + assets.
- Surgical: all viewports, scroll timeline, hover probes, full asset/network manifest.

**Default:** Standard.

---

## Phase 7: Robustness Against Modern Websites

### Task 17: Add Anti-Fragile Navigation Strategy

**Files:**
- Modify: `src/modules/scraper.js`
- Create: `src/support/navigation.js`

**Strategy:**

Try, in order:

1. `commit`
2. wait for `document.body`
3. wait for visible text or canvas
4. wait short for network idle
5. continue even if analytics never settle

**Step 2: Add blocked-site reporting**

If site blocks automation, report:

- blocked by bot protection
- TLS/network error
- empty body
- timeout before body
- likely geo/cookie wall

---

### Task 18: Add Consent and Overlay Handling

**Files:**
- Create: `src/modules/overlayHandler.js`
- Modify: `src/modules/scraper.js`

**Step 1: Detect common cookie buttons**

Text patterns:

- Accept
- Agree
- Allow all
- Reject
- Continue
- Aceptar
- Rechazar

**Step 2: Default behavior**

Prefer reject/necessary-only when available; otherwise accept if overlay blocks viewport.

**Step 3: Report action**

Add to evidence:

```js
overlayActions: ["Clicked Accept cookies"]
```

---

## Phase 8: Testing and Quality Gates

### Task 19: Add Fixture Sites

**Files:**
- Create: `fixtures/sites/basic/index.html`
- Create: `fixtures/sites/motion/index.html`
- Create: `fixtures/sites/webgl/index.html`
- Create: `tests/extractorFixtures.test.js`

**Step 1: Build local fixtures**

Basic:

- CSS variables
- sections
- CTA

Motion:

- sticky
- transform on scroll
- hover card

WebGL:

- canvas
- simple animation loop

**Step 2: Test analyzers**

Each fixture should produce predictable evidence.

---

### Task 20: Add Regression Command

**Files:**
- Modify: `package.json`

Add:

```json
"test": "node --test",
"verify": "npm run check && npm test"
```

Run before each release:

```bash
npm run verify
```

---

## Phase 9: Legal and Ethical Guardrails

### Task 21: Add Adaptation Policy to Prompt

**Files:**
- Modify: `src/modules/promptGenerator.js`
- Modify: `README.md`

**Policy language:**

```text
Use this reference as inspiration for structure, interaction patterns, and quality bar. Do not copy proprietary assets, brand identity, exact copy, source code, trademarks, or unique protected illustrations. Recreate the design language with original assets and niche-specific content.
```

This protects the user and improves the final website.

---

## Implementation Order

Build in this order:

1. Safety baseline: Tasks 1-2.
2. Visual capture: Tasks 3-4.
3. Deep DOM/asset/CSS extraction: Tasks 5-7.
4. Motion and interaction: Tasks 8-10.
5. Local vision and optional local LLM: Tasks 11-12.
6. Prompt 2.0 and scoring: Tasks 13-14.
7. Dashboard upgrade: Tasks 15-16.
8. Robustness: Tasks 17-18.
9. Tests and legal guardrails: Tasks 19-21.

---

## Expected Capability After Each Milestone

**After Phase 1:** The tool can prove what the site looks like across scroll and devices.

**After Phase 2:** The tool can describe the site as components/sections, not just tokens.

**After Phase 3:** The tool can turn animations into implementable engineering recipes.

**After Phase 5:** The generated prompt becomes a real senior-grade build brief.

**After Phase 8:** The tool is stable enough to trust repeatedly.

---

## Zero-Cost Rule

Allowed:

- Playwright
- Chrome DevTools Protocol
- local screenshots
- local file artifacts
- Node built-ins
- open-source npm packages
- optional locally installed FFmpeg/ImageMagick
- optional locally running Ollama

Avoid:

- paid APIs
- paid scraping services
- paid browser clouds
- mandatory SaaS dependencies
- paid vision models

---

## Biggest Technical Risks

1. WebGL/canvas internals are hard to reverse from runtime alone. The tool can detect and approximate behavior, but not always recover shader logic.
2. Minified bundles make exact framework logic hard to infer.
3. Heavy bot protection can block Playwright.
4. "Exact copy" is not a safe or realistic goal; "high-fidelity adapted recreation" is the correct target.
5. Motion inference needs sampling and confidence scores, otherwise it becomes guesswork.

---

## Definition of Done

The tool is ready to call itself "Awwwards Surgical" when a run produces:

- `evidence.json`
- screenshots for 3+ viewports
- section map
- asset manifest
- CSS effect map
- motion recipes
- hover interaction map
- responsiveness notes
- fidelity score
- prompt.md with section-by-section implementation instructions
- dashboard tabs showing evidence

The final generated prompt should give an AI coding agent enough detail to produce a first version that lands around 80-90% of the intended visual/interaction direction, assuming the agent is competent and the reference website is not protected by extreme WebGL/proprietary runtime tricks.
