# Reference Experience IR Implementation Plan

> **Objetivo:** transformar WebADN de generador de prompt enriquecido a motor de fidelidad visual medible: extracción → IR → generación → comparación real → reparación.

**Plan sugerido:** `docs/plans/2026-07-04-reference-experience-ir.md`
**No ejecutar todavía.**

---

## Fase 1: Corregir El Concepto De “Fidelidad”

### Task 1: Renombrar `fidelityScore` a `extractionCompletenessScore`

**Archivos:**
- Crear: `src/modules/extractionCompletenessScore.js`
- Modificar: `src/modules/fidelityScore.js`
- Modificar: `src/orchestrator.js`
- Tests: `tests/extractionCompletenessScore.test.js`

**Código:**

```js
// src/modules/extractionCompletenessScore.js
export { computeFidelityScore as computeExtractionCompletenessScore } from "./fidelityScore.js";
export { FIDELITY_WEIGHTS } from "./fidelityScore.js";
```

En `orchestrator.js`, cambiar semántica:

```js
import { computeExtractionCompletenessScore } from "./modules/extractionCompletenessScore.js";

const extractionCompletenessScore = await computeExtractionCompletenessScore(evidence);

evidence.extractionCompletenessScore = extractionCompletenessScore;
evidence.fidelityScore = null; // deprecated: no usar como similitud real
```

**Test esperado:**

```js
import { computeExtractionCompletenessScore } from "../src/modules/extractionCompletenessScore.js";
import assert from "node:assert/strict";
import { test } from "node:test";

test("extraction completeness is not visual similarity", () => {
  const score = computeExtractionCompletenessScore({ inspection: null });
  assert.equal(score.overall, 0);
});
```

**Verificación:**

```bash
npm.cmd run check
npm.cmd test
```

---

## Fase 2: Bloquear Evidencia Visual Inválida

### Task 2: Detectar screenshots vacíos o planos

**Archivos:**
- Crear: `src/modules/screenshotQuality.js`
- Modificar: `src/modules/visualCapture.js`
- Tests: `tests/screenshotQuality.test.js`

**Código:**

```js
// src/modules/screenshotQuality.js
export function analyzeScreenshotPixels(sample) {
  if (!sample || !Array.isArray(sample.colors) || sample.colors.length === 0) {
    return { valid: false, reason: "NO_PIXEL_SAMPLE" };
  }

  const unique = new Set(sample.colors.map(c => c.toLowerCase()));
  const dominantRatio = sample.dominantRatio ?? 1;

  if (unique.size <= 2 && dominantRatio > 0.96) {
    return { valid: false, reason: "FLAT_COLOR_SCREEN" };
  }

  return { valid: true, reason: "OK" };
}
```

En `visualCapture.js`, después de capturar:

```js
const quality = await page.evaluate(() => {
  const canvas = document.createElement("canvas");
  canvas.width = 32;
  canvas.height = 18;
  const ctx = canvas.getContext("2d");
  return {
    colors: [],
    dominantRatio: 1,
    note: "TODO: sample screenshot buffer via png parser"
  };
});

results.push({
  viewport: viewport.name,
  scrollPercent,
  screenshotPath,
  screenshotQuality: quality
});
```

**Criterio:** si más del 50% de screenshots son planos, marcar:

```js
evidence.visualEvidenceStatus = "invalid";
evidence.validationWarnings.push("Visual screenshots appear blank or flat.");
```

---

## Fase 3: Crear La IR Central

### Task 3: Añadir `ReferenceExperienceIR`

**Archivos:**
- Crear: `src/shared/reference-experience-ir.js`
- Crear: `src/modules/referenceIrBuilder.js`
- Tests: `tests/referenceIrBuilder.test.js`

**Código:**

```js
// src/shared/reference-experience-ir.js
export function createEmptyReferenceExperienceIR({ url, niche }) {
  return {
    version: "1.0.0",
    url,
    niche,
    generatedAt: new Date().toISOString(),
    sections: [],
    globalTokens: {},
    responsive: {},
    motion: [],
    interactions: [],
    assets: [],
    legalPolicy: {
      copyText: false,
      copyAssets: false,
      copyClassNames: false,
      copyCssVerbatim: false
    }
  };
}
```

```js
// src/modules/referenceIrBuilder.js
import { createEmptyReferenceExperienceIR } from "../shared/reference-experience-ir.js";

export function buildReferenceExperienceIR(evidence) {
  const ir = createEmptyReferenceExperienceIR({
    url: evidence.url,
    niche: evidence.niche
  });

  const sections = evidence.inspection?.sections || [];
  const structure = evidence.inspection?.sectionStructure || [];

  ir.sections = sections.map((section, index) => {
    const struct = structure[index] || {};
    return {
      id: `section-${index}`,
      index,
      role: section.role || "unknown",
      tag: section.tag || "section",
      height: section.height || null,
      isFullViewport: Boolean(section.isFullViewport),
      layout: struct.layoutConfig || {},
      background: struct.background || {},
      typography: extractSectionTypography(struct),
      children: (struct.keyChildren || []).map(normalizeChild),
      motionRefs: [],
      sourceConfidence: section.confidence || 0
    };
  });

  return ir;
}

function normalizeChild(child) {
  return {
    tag: child.tag,
    role: inferChildRole(child),
    rect: child.rect || null,
    styles: child.styles || {},
    textKind: child.textContent ? "replaceable" : "none"
  };
}

function inferChildRole(child) {
  if (/^h[1-6]$/.test(child.tag)) return "heading";
  if (child.tag === "img" || child.tag === "video") return "media";
  if (child.tag === "a" || child.tag === "button") return "cta";
  return "layout";
}

function extractSectionTypography(struct) {
  return (struct.keyChildren || [])
    .filter(c => /^h[1-6]|p|span|a|button$/.test(c.tag))
    .map(c => ({
      tag: c.tag,
      fontSize: c.styles?.fontSize,
      fontWeight: c.styles?.fontWeight,
      lineHeight: c.styles?.lineHeight,
      letterSpacing: c.styles?.letterSpacing
    }));
}
```

---

## Fase 4: Reescribir Segmentación De Secciones

### Task 4: Sustituir heurística duplicada por segmentador único

**Archivos:**
- Crear: `src/modules/sectionSegmenter.js`
- Modificar: `src/modules/scraper.js`
- Modificar: `src/modules/structureExtractor.js`
- Tests: `tests/sectionSegmenter.test.js`

**Código base:**

```js
// src/modules/sectionSegmenter.js
export async function segmentSections(page) {
  return page.evaluate(() => {
    const candidates = [...document.querySelectorAll(
      "main > section, section, article, header, footer, [data-section]"
    )];

    const normalized = candidates
      .map((el, index) => {
        const rect = el.getBoundingClientRect();
        return {
          index,
          selector: buildSelector(el, index),
          tag: el.tagName.toLowerCase(),
          top: Math.round(rect.top + window.scrollY),
          height: Math.round(rect.height),
          width: Math.round(rect.width),
          text: (el.textContent || "").replace(/\s+/g, " ").trim().slice(0, 300),
          headings: [...el.querySelectorAll("h1,h2,h3")].map(h => h.textContent.trim()),
          mediaCount: el.querySelectorAll("img,video,canvas,svg").length
        };
      })
      .filter(s => s.height > window.innerHeight * 0.25);

    return mergeNestedSections(normalized);

    function buildSelector(el, index) {
      if (el.id) return `#${CSS.escape(el.id)}`;
      const cls = [...el.classList].slice(0, 2).map(c => `.${CSS.escape(c)}`).join("");
      return `${el.tagName.toLowerCase()}${cls || `:nth-of-type(${index + 1})`}`;
    }

    function mergeNestedSections(items) {
      return items.filter((item, i, arr) => {
        return !arr.some(other =>
          other !== item &&
          item.top >= other.top &&
          item.top + item.height <= other.top + other.height &&
          other.height > item.height * 1.5
        );
      });
    }
  });
}
```

En `scraper.js`:

```js
import { segmentSections } from "./sectionSegmenter.js";

const sections = await segmentSections(page);
result.sections = sections;
result.sectionStructure = await extractSectionStructure(page, sections);
```

---

## Fase 5: Métrica Real Referencia vs Generado

### Task 5: Crear comparador renderizado

**Archivos:**
- Crear: `src/modules/renderedSimilarity.js`
- Tests: `tests/renderedSimilarity.test.js`

**Código inicial:**

```js
// src/modules/renderedSimilarity.js
export function computeRenderedSimilarity(reference, generated) {
  return {
    overall: weightedAverage({
      structure: compareSectionOrder(reference, generated),
      layout: compareLayoutBoxes(reference, generated),
      typography: compareTypography(reference, generated),
      color: compareColorRoles(reference, generated),
      motion: compareMotionCurves(reference, generated),
      perceptual: comparePerceptual(reference, generated)
    }),
    dimensions: {}
  };
}

function compareSectionOrder(ref, gen) {
  const refRoles = ref.sections.map(s => s.role);
  const genRoles = gen.sections.map(s => s.role);
  const matches = refRoles.filter((r, i) => genRoles[i] === r).length;
  return matches / Math.max(refRoles.length, genRoles.length, 1);
}

function weightedAverage(scores) {
  const weights = {
    structure: 0.2,
    layout: 0.2,
    typography: 0.15,
    color: 0.15,
    motion: 0.15,
    perceptual: 0.15
  };

  return Math.round(
    Object.entries(scores).reduce((sum, [k, v]) => sum + v * weights[k], 0) * 100
  );
}
```

**Nota:** `perceptual` debe empezar como placeholder y luego integrarse con SSIM/LPIPS.

---

## Fase 6: Reordenar Pipeline

### Task 6: IR antes de prompt, verificación después de render

**Archivo:**
- Modificar: `src/orchestrator.js`

**Pipeline objetivo:**

```js
const pipeline = [
  { name: "cacheCheck", fn: runCacheCheck },
  { name: "robotsCheck", fn: runRobotsCheck },
  { name: "scraper", fn: runScraper },
  { name: "analysis", fn: runAnalysis },
  { name: "buildReferenceIR", fn: runBuildReferenceIR },
  { name: "saveArtifacts", fn: runSaveArtifacts },
  { name: "generateSite", fn: runGenerateSite },
  { name: "renderGeneratedSite", fn: runRenderGeneratedSite },
  { name: "measureRenderedSimilarity", fn: runMeasureRenderedSimilarity },
  { name: "repairWeakSections", fn: runRepairWeakSections },
  { name: "generatePrompt", fn: runGeneratePrompt }
];
```

**Nuevo stage:**

```js
async function runBuildReferenceIR(ctx) {
  const { evidence } = ctx.data;
  evidence.referenceExperienceIR = buildReferenceExperienceIR(evidence);
  return { referenceExperienceIR: evidence.referenceExperienceIR };
}
```

---

## Fase 7: Legal-Safe Codegen

### Task 7: Prohibir HTML/CSS literal como salida final

**Archivo:**
- Modificar: `src/modules/irCodegen.js`

**Cambiar esto:**
- No usar `struct.htmlSnippet` directamente.
- No volcar `styles.styleRules.slice(0, 200)`.

**Código sustituto:**

```js
function buildHTMLFromIR(ir) {
  return ir.sections.map(section => `
<section class="section section-${section.index} section-${section.role}">
  <div class="section-inner">
    ${buildSectionChildren(section)}
  </div>
</section>`).join("\n");
}

function buildSectionChildren(section) {
  return section.children.map((child, index) => {
    if (child.role === "heading") {
      return `<h2 data-copy-slot="${section.id}-heading-${index}"></h2>`;
    }
    if (child.role === "media") {
      return `<div class="media-slot media-slot-${index}"></div>`;
    }
    if (child.role === "cta") {
      return `<a class="button" href="#"></a>`;
    }
    return `<div class="layout-node layout-node-${index}"></div>`;
  }).join("\n");
}
```

---

## Fase 8: Repair Loop Real

### Task 8: Eliminar regeneración simulada

**Archivo:**
- Modificar: `src/modules/verificationLoop.js`

**Nuevo contrato:**

```js
export async function runVerificationLoop({ referenceIR, generatedIR, renderArtifacts, threshold = 80 }) {
  const similarity = computeRenderedSimilarity(referenceIR, generatedIR);

  if (similarity.overall >= threshold) {
    return { success: true, similarity, repairs: [] };
  }

  return {
    success: false,
    similarity,
    repairs: similarity.weakSections.map(section => ({
      sectionId: section.sectionId,
      reason: section.reason,
      action: "REGENERATE_SECTION_FROM_IR"
    }))
  };
}
```

---

## Fase 9: Tests De Producto

### Task 9: Añadir fixtures de fidelidad

**Archivos:**
- Crear: `tests/fixtures/reference-simple.json`
- Crear: `tests/fixtures/generated-simple-good.json`
- Crear: `tests/fixtures/generated-simple-bad.json`
- Crear: `tests/renderedSimilarity.product.test.js`

**Test:**

```js
test("good generated page scores higher than bad generated page", () => {
  const ref = loadFixture("reference-simple.json");
  const good = loadFixture("generated-simple-good.json");
  const bad = loadFixture("generated-simple-bad.json");

  assert.ok(
    computeRenderedSimilarity(ref, good).overall >
    computeRenderedSimilarity(ref, bad).overall
  );
});
```

---

## Fase 10: Criterios De MVP

El MVP queda aceptado solo si:

- Detecta screenshots planos y no los puntúa como evidencia válida.
- Produce `referenceExperienceIR`.
- Conserva número y orden de secciones.
- Genera sitio desde IR sin HTML/CSS literal.
- Renderiza referencia y generado.
- Calcula similitud real por sección.
- Falla explícitamente si no alcanza umbral.
- Reporta dimensiones débiles.
- No usa `fidelityScore` como similitud.
- Mantiene `npm.cmd run check` y `npm.cmd test` en verde.

**Orden De Commits Sugerido**

```bash
git commit -m "refactor: rename fidelity score to extraction completeness"
git commit -m "feat: validate screenshot quality"
git commit -m "feat: add reference experience IR"
git commit -m "refactor: unify section segmentation"
git commit -m "feat: add rendered similarity contract"
git commit -m "refactor: make orchestrator IR-first"
git commit -m "refactor: make IR codegen legal-safe"
git commit -m "feat: replace simulated verification loop"
git commit -m "test: add product fidelity fixtures"
```

Este plan es el cambio de estrategia: menos “prompt perfecto”, más “motor verificable”. Ahí empieza el producto serio.
