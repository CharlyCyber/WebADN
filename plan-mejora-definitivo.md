# PLAN DE MEJORA DEFINITIVO
## Code Web Extractor — Awwwards Surgical Extractor
### Fusión de diagnósticos: Claude Sonnet + Genspark AI

---

> **Filosofía del plan:** No añadir features hasta no tener la base estable.
> Cada fase es un checkpoint de calidad antes de la siguiente.

---

## FASE 0 — SEGURIDAD (Hacer ANTES de compartir con nadie)
**Tiempo estimado: 2-4 horas**

### 0.1 — Bind del servidor a 127.0.0.1

**Archivo:** `src/server.js:40`

```js
// ❌ ACTUAL — expone a toda la LAN
server.listen(PORT, "0.0.0.0", () => { ... });

// ✅ FIX
server.listen(PORT, "127.0.0.1", () => {
  console.log(`Server running at http://127.0.0.1:${PORT}`);
});
```

### 0.2 — Reforzar validatePublicHttpUrl contra SSRF

**Archivo:** `src/support/urlSafety.js`

El código actual tiene 5 vectores de bypass:
- DNS rebinding (dominio público → IP privada)
- IPv4 decimal: `http://2130706433/` = `127.0.0.1`
- Formas cortas: `http://127.1`, `http://0`
- IPv6: `http://[::1]/`, `http://[::ffff:127.0.0.1]/`
- No resuelve DNS antes de validar

```js
import dns from "node:dns/promises";
import { isIPv4, isIPv6 } from "node:net";

const PRIVATE_RANGES = [
  /^127\./,
  /^10\./,
  /^192\.168\./,
  /^172\.(1[6-9]|2\d|3[01])\./,
  /^169\.254\./,
  /^::1$/,
  /^fc00:/i,
  /^fe80:/i,
];

export async function validatePublicHttpUrl(rawUrl) {
  const url = new URL(rawUrl);
  
  if (!["http:", "https:"].includes(url.protocol))
    throw new Error("Solo http y https permitidos.");

  const hostname = url.hostname.replace(/^\[|\]$/g, ""); // strip IPv6 brackets

  // Resolver DNS y validar CADA IP resuelta
  let addresses = [];
  try {
    const results = await dns.lookup(hostname, { all: true, family: 0 });
    addresses = results.map(r => r.address);
  } catch {
    throw new Error(`No se pudo resolver el dominio: ${hostname}`);
  }

  for (const addr of addresses) {
    if (PRIVATE_RANGES.some(re => re.test(addr))) {
      throw new Error(`URL bloqueada — IP privada/local detectada: ${addr}`);
    }
  }

  return url.toString();
}
```

### 0.3 — Rate limiting básico en /api/extract

```js
// src/server.js — token bucket simple
const rateLimiter = new Map(); // ip → { count, resetAt }

function checkRateLimit(ip) {
  const now = Date.now();
  const entry = rateLimiter.get(ip) || { count: 0, resetAt: now + 60_000 };
  if (now > entry.resetAt) { entry.count = 0; entry.resetAt = now + 60_000; }
  if (entry.count >= 5) throw new Error("Rate limit: máximo 5 extracciones por minuto.");
  entry.count++;
  rateLimiter.set(ip, entry);
}
```

### 0.4 — Fix path traversal en serveStatic

```js
// ❌ ACTUAL — vulnerable a bypass con nombres adyacentes
if (!filePath.startsWith(PUBLIC_DIR)) { ... }

// ✅ FIX
import path from "node:path";
const rel = path.relative(PUBLIC_DIR, filePath);
if (rel.startsWith("..") || path.isAbsolute(rel)) {
  res.writeHead(403); res.end("Forbidden"); return;
}
```

### 0.5 — Aviso legal en README

```markdown
## Legal
Este tool extrae información técnica con Playwright para fines de estudio/inspiración.
Respeta los robots.txt de cada sitio. Los assets descargados son solo para uso local.
No clones contenido protegido. Revisa los Terms of Service de cada web antes de extraer.
```

---

## FASE 1 — BUGS FUNCIONALES (Hacer antes de cualquier nueva feature)
**Tiempo estimado: 4-6 horas**

### 1.1 — downloadLocalAssets debe ser awaited

**Archivo:** `src/modules/scraper.js:248`

```js
// ❌ ACTUAL — fire-and-forget, evidence.json nunca tiene los assets
downloadLocalAssets(...).then(d => { result.downloadedAssets = d; }).catch(() => {});
return result;

// ✅ FIX
try {
  result.downloadedAssets = await downloadLocalAssets(...);
} catch (err) {
  result.downloadedAssets = { error: err.message, files: [] };
}
return result;
```

### 1.2 — interactionProbe: el selector :--hf es inválido

**Archivo:** `src/modules/interactionProbe.js`

```js
// ❌ ACTUAL — SyntaxError silencioso, rama nunca ejecuta
if (el.matches(rule.selector.replace(/:hover/g, ":--hf"))) { ... }

// ✅ FIX — restaurar cssText regla por regla
async function probeElement(page, selector, cssRule) {
  return page.evaluate(({ selector, cssText }) => {
    const el = document.querySelector(selector);
    if (!el) return null;
    const original = el.getAttribute("style") || "";
    // Aplicar estilos de :hover manualmente
    const props = cssText.match(/\{([^}]+)\}/)?.[1] || "";
    el.setAttribute("style", original + ";" + props);
    const after = getComputedStyle(el);
    const result = { color: after.color, transform: after.transform, opacity: after.opacity };
    el.setAttribute("style", original); // Restaurar
    return result;
  }, { selector, cssText: cssRule.cssText });
}
```

### 1.3 — page.evaluate acepta solo UN argumento extra

**Archivo:** `src/modules/interactionProbe.js:184`

```js
// ❌ ACTUAL — { timeout: 10000 } se ignora silenciosamente
return await page.evaluate((max) => {...}, maxTargets, { timeout: 10000 });

// ✅ FIX
page.setDefaultTimeout(10000);
return await page.evaluate((max) => {...}, maxTargets);
```

### 1.4 — briefComposer: peak.density no existe

**Archivo:** `src/modules/briefComposer.js`

```js
// ❌ ACTUAL — density nunca existe en visualDiff output
if (peak.density) rhythm.push(...);

// ✅ FIX — usar elementCount que sí existe
const peak = vr.visualDensityByScroll?.reduce(
  (a, b) => (a.elementCount || 0) > (b.elementCount || 0) ? a : b, {}
) || {};
if (peak.elementCount) rhythm.push(`Peak density at ${peak.scrollPercent}%: ${peak.elementCount} elements`);
```

### 1.5 — motionSampler: parallaxRatio mezcla unidades

**Archivo:** `src/modules/motionSampler.js`

```js
// ❌ ACTUAL — mezcla % con px, resultado incomparable entre sitios
const parallaxRatio = scrollRange > 0
  ? (yDelta / (scrollRange / 100 * (last.scrollY - first.scrollY || 1))) : 0;

// ✅ FIX — definición clásica: px / px
const scrollDelta = last.scrollY - first.scrollY || 1;
const parallaxRatio = Math.abs(yDelta) / scrollDelta; // 0 = sin parallax, 1 = mismo ritmo, >1 = inverso
```

### 1.6 — Deduplicación de runs

```js
// src/support/artifacts.js — añadir
export function findRecentRun(url, maxAgeMinutes = 120) {
  const runsDir = "runs";
  const domain = new URL(url).hostname;
  const entries = fs.readdirSync(runsDir)
    .filter(d => d.includes(domain))
    .map(d => ({ name: d, mtime: fs.statSync(join(runsDir, d)).mtime }))
    .sort((a, b) => b.mtime - a.mtime);
  
  if (!entries.length) return null;
  const ageMs = Date.now() - entries[0].mtime.getTime();
  if (ageMs < maxAgeMinutes * 60_000) return join(runsDir, entries[0].name);
  return null;
}
```

### 1.7 — createRunFolder con resolución sub-segundo

```js
// ❌ ACTUAL — colisión si dos runs arrancan en el mismo segundo
const ts = new Date().toISOString().replace(/[:.]/g, "-");

// ✅ FIX
const ts = new Date().toISOString().replace(/[:.]/g, "-") + "-" + process.hrtime.bigint().toString().slice(-6);
```

---

## FASE 2 — CALIDAD DE SALIDA (El problema más impactante en uso real)
**Tiempo estimado: 6-8 horas**

### 2.1 — Reducir prompt.md de 500KB a <15KB

Este es el bug más impactante para el usuario final. Un prompt de 500KB no cabe en el contexto de Claude/GPT/Cursor.

```js
// src/modules/briefComposer.js — añadir función de filtrado
function trimEvidence(evidence) {
  const MAX_COLORS = 8;
  const MAX_SECTIONS = 12;
  const MAX_MOTION = 6;
  const MAX_HOVER = 6;
  const MAX_CTAS = 4;
  const MAX_SCRIPTS = 8;

  return {
    url: evidence.url,
    niche: evidence.niche,
    generatedAt: evidence.generatedAt,
    fidelityScore: evidence.fidelityScore,
    designLanguage: evidence.designLanguage,
    inspection: {
      title: evidence.inspection.title,
      description: evidence.inspection.description,
      technologies: evidence.inspection.technologies,
      viewport: evidence.inspection.viewport,
      // Limitar arrays
      sections: (evidence.inspection.sections || []).slice(0, MAX_SECTIONS),
      motionRecipes: (evidence.inspection.motionRecipes || []).slice(0, MAX_MOTION),
      hoverEffects: (evidence.inspection.hoverEffects || []).slice(0, MAX_HOVER),
      ctas: (evidence.inspection.ctas || []).slice(0, MAX_CTAS),
      // CSS solo tokens clave, no todas las reglas
      cssFeatures: {
        complexityScore: evidence.inspection.cssFeatures?.complexityScore,
        customProperties: Object.fromEntries(
          Object.entries(evidence.inspection.cssFeatures?.customProperties || {}).slice(0, 20)
        ),
        animations: (evidence.inspection.cssFeatures?.animations || []).slice(0, 10),
      },
      // Solo colores más frecuentes
      styles: {
        colors: (evidence.inspection.styles?.colors || []).slice(0, MAX_COLORS),
        fonts: evidence.inspection.styles?.fonts,
        spacing: (evidence.inspection.styles?.spacing || []).slice(0, 10),
      },
      // Assets: solo metadata, sin contenido
      assets: {
        summary: {
          images: evidence.inspection.assets?.images?.length || 0,
          fonts: evidence.inspection.assets?.fonts?.length || 0,
          scripts: (evidence.inspection.assets?.scripts || []).slice(0, MAX_SCRIPTS)
            .map(s => s.src || s),
        }
      },
      animationHints: [...(evidence.inspection.animationHints || [])].slice(0, 15),
      risks: (evidence.inspection.risks || []).slice(0, 8),
    },
    conversionPlan: {
      paradigm: evidence.conversionPlan?.paradigm,
      requiredBlocks: (evidence.conversionPlan?.requiredBlocks || []).slice(0, 8),
      motionDirectives: (evidence.conversionPlan?.motionDirectives || []).slice(0, 6),
    },
  };
}
```

### 2.2 — Generar dos artefactos: prompt.md + prompt.compact.md

```js
// src/support/artifacts.js
export async function savePrompt(runPath, masterPrompt) {
  // Prompt completo (para referencia)
  await fs.writeFile(join(runPath, "prompt.md"), masterPrompt, "utf8");
  
  // Prompt compacto (<15KB, listo para pegar en cualquier agente)
  const compact = buildCompactPrompt(masterPrompt);
  await fs.writeFile(join(runPath, "prompt.compact.md"), compact, "utf8");
  
  // Prompt estructurado en JSON (para integración con otros tools)
  const structured = parsePromptSections(masterPrompt);
  await fs.writeFile(join(runPath, "prompt.json"), JSON.stringify(structured, null, 2), "utf8");
}

function buildCompactPrompt(full) {
  // Extraer solo: tech stack, design tokens, top 5 sections, top 5 animations
  // Target: <15KB
  const sections = parsePromptSections(full);
  return [
    sections.techStack,
    sections.designTokens,
    sections.topSections,
    sections.animationRecipes,
    sections.acceptanceCriteria,
  ].filter(Boolean).join("\n\n---\n\n");
}
```

### 2.3 — Limpiar prompt de datos sensibles

```js
// Antes de guardar, sanitizar URLs con tokens
function sanitizePrompt(text) {
  return text
    .replace(/([?&])(token|key|signature|auth|api_key)=[^&\s"']*/gi, "$1$2=REDACTED")
    .replace(/Bearer\s+[A-Za-z0-9._-]{20,}/g, "Bearer [REDACTED]");
}
```

### 2.4 — Thumbnails base64 en evidence.json

```js
// src/modules/visualCapture.js — añadir miniatura 96x54 en cada screenshot
import { execSync } from "node:child_process";

async function saveThumbnail(screenshotBuffer, outputPath) {
  // Usando Playwright's page.screenshot ya tenemos el buffer
  // Redimensionar con canvas API en el browser context o con sharp si disponible
  const thumbnail = await resizeTo96x54(screenshotBuffer);
  return `data:image/jpeg;base64,${thumbnail.toString("base64")}`;
}
```

---

## FASE 3 — CALIDAD DE EXTRACCIÓN
**Tiempo estimado: 4-6 horas**

### 3.1 — Esperar fuentes y lazy images antes de screenshots

```js
// src/modules/visualCapture.js — antes de capturar
await page.evaluate(async () => {
  // Esperar fuentes
  await document.fonts.ready;
  
  // Forzar carga de imágenes lazy
  document.querySelectorAll('img[loading="lazy"]').forEach(img => {
    img.loading = "eager";
  });
  
  // Scroll completo para activar lazy load
  await new Promise(resolve => {
    let totalHeight = 0;
    const distance = 100;
    const timer = setInterval(() => {
      window.scrollBy(0, distance);
      totalHeight += distance;
      if (totalHeight >= document.body.scrollHeight) {
        clearInterval(timer);
        window.scrollTo(0, 0);
        resolve();
      }
    }, 50);
  });
  
  // Esperar animaciones de entrada
  await new Promise(r => setTimeout(r, 2500));
});
```

### 3.2 — Aumentar límite de elementos de 700 a 3000

```js
// src/modules/scraper.js
// ❌ const elements = [...document.querySelectorAll("body *")].slice(0, 700);

// ✅ Muestreo estratificado por viewport
const elements = [
  ...document.querySelectorAll("header *"),           // Todo el header
  ...document.querySelectorAll("[class*='hero'] *"),  // Hero completo
  ...document.querySelectorAll("main > section *"),   // Primeras secciones
  ...document.querySelectorAll("footer *"),           // Footer
].slice(0, 3000);
```

### 3.3 — Métricas reales via CDP en lugar de estimadas

```js
// src/modules/scraper.js — usar Chrome DevTools Protocol
const client = await page.context().newCDPSession(page);
await client.send("Performance.enable");
const metrics = await client.send("Performance.getMetrics");

const perfData = {
  LCP: metrics.metrics.find(m => m.name === "LargestContentfulPaint")?.value,
  FID: metrics.metrics.find(m => m.name === "FirstInputDelay")?.value,
  CLS: metrics.metrics.find(m => m.name === "CumulativeLayoutShift")?.value,
  FCP: metrics.metrics.find(m => m.name === "FirstContentfulPaint")?.value,
};
```

### 3.4 — Retries con backoff en navegación

```js
// src/support/navigation.js
export async function navigateWithFallback(page, url, timeoutMs) {
  const strategies = [
    { waitUntil: "networkidle", timeout: timeoutMs },
    { waitUntil: "domcontentloaded", timeout: timeoutMs * 0.7 },
    { waitUntil: "load", timeout: timeoutMs * 0.5 },
    { waitUntil: "commit", timeout: 10000 },
  ];
  
  for (let i = 0; i < strategies.length; i++) {
    try {
      const response = await page.goto(url, strategies[i]);
      await page.waitForTimeout(1000 + i * 500); // backoff
      return { success: true, strategy: i, status: response?.status() };
    } catch (err) {
      if (i === strategies.length - 1) return { success: false, error: err.message };
    }
  }
}
```

### 3.5 — Interactionprobe con sandbox DOM

```js
// src/modules/interactionProbe.js — clonar en shadow DOM invisible
async function probeHoverSafe(page, targetSelector, cssRule) {
  return page.evaluate(({ sel, cssText }) => {
    const original = document.querySelector(sel);
    if (!original) return null;
    
    // Clonar en un container invisible
    const sandbox = document.createElement("div");
    sandbox.style.cssText = "position:fixed;top:-9999px;left:-9999px;visibility:hidden";
    document.body.appendChild(sandbox);
    const clone = original.cloneNode(true);
    sandbox.appendChild(clone);
    
    // Aplicar estilos hover al clon
    const props = cssText.match(/\{([^}]+)\}/)?.[1] || "";
    clone.style.cssText += ";" + props;
    
    const result = {
      color: getComputedStyle(clone).color,
      background: getComputedStyle(clone).background,
      transform: getComputedStyle(clone).transform,
      opacity: getComputedStyle(clone).opacity,
      boxShadow: getComputedStyle(clone).boxShadow,
    };
    
    sandbox.remove(); // Limpiar
    return result;
  }, { sel: targetSelector, cssText: cssRule.cssText });
}
```

---

## FASE 4 — PRODUCTO Y UX
**Tiempo estimado: 8-12 horas**

### 4.1 — Historial de runs en la UI

```html
<!-- public/index.html — añadir tab History -->
<button class="tab" data-tab="history">History</button>

<!-- Panel -->
<div id="outputHistory" class="tab-pane">
  <div class="run-list" id="runList"></div>
</div>
```

```js
// public/app.js
async function loadHistory() {
  const res = await fetch("/api/runs");
  const runs = await res.json();
  const runList = document.querySelector("#runList");
  runList.innerHTML = runs.map(run => `
    <div class="run-item" data-path="${run.path}">
      <span class="run-domain">${run.domain}</span>
      <span class="run-date">${new Date(run.date).toLocaleString()}</span>
      <span class="run-fidelity">${run.fidelityScore || "-"}</span>
      <button onclick="loadRun('${run.path}')">Cargar</button>
    </div>
  `).join("");
}
```

```js
// src/server.js — nuevo endpoint
if (pathname === "/api/runs") {
  const runs = await listRuns();
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(runs));
  return;
}
```

### 4.2 — Galería de screenshots en la UI

```html
<!-- public/index.html -->
<button class="tab" data-tab="screenshots">Screenshots</button>
<div id="outputScreenshots" class="tab-pane">
  <div class="screenshot-grid" id="screenshotGrid"></div>
</div>
```

```css
/* public/styles.css */
.screenshot-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 12px;
  padding: 16px;
}
.screenshot-item img {
  width: 100%;
  border-radius: 6px;
  border: 1px solid var(--border);
}
.screenshot-label {
  font-size: 11px;
  color: var(--muted);
  margin-top: 4px;
  text-align: center;
}
```

### 4.3 — Selector de preset en la UI

```html
<!-- public/index.html -->
<div class="field">
  <label for="preset">Profundidad de análisis</label>
  <select id="preset" name="preset">
    <option value="fast">⚡ Fast (30s) — Stack, colores, secciones</option>
    <option value="standard" selected>🔍 Standard (2min) — + Screenshots, motion</option>
    <option value="surgical">🔬 Surgical (5min) — + Assets, hovers, WebGL</option>
  </select>
</div>
```

### 4.4 — LRU retention: máximo 20 runs

```js
// src/support/artifacts.js
export async function pruneOldRuns(maxRuns = 20) {
  const runs = fs.readdirSync("runs")
    .filter(d => fs.statSync(join("runs", d)).isDirectory())
    .map(d => ({ name: d, mtime: fs.statSync(join("runs", d)).mtime }))
    .sort((a, b) => a.mtime - b.mtime); // oldest first
  
  while (runs.length > maxRuns) {
    const oldest = runs.shift();
    fs.rmSync(join("runs", oldest.name), { recursive: true });
    console.log(`Pruned old run: ${oldest.name}`);
  }
  
  // Actualizar índice
  await updateRunsIndex();
}
```

### 4.5 — runs/index.json para acceso rápido

```js
// src/support/artifacts.js
export async function updateRunsIndex() {
  const runs = fs.readdirSync("runs")
    .filter(d => {
      const evidencePath = join("runs", d, "evidence.json");
      return fs.existsSync(evidencePath);
    })
    .map(d => {
      try {
        const ev = JSON.parse(fs.readFileSync(join("runs", d, "evidence.json"), "utf8"));
        return {
          path: d,
          domain: new URL(ev.url).hostname,
          date: ev.generatedAt,
          fidelityScore: ev.fidelityScore?.overall,
          niche: ev.niche,
          technologies: ev.inspection?.technologies?.slice(0, 5),
        };
      } catch { return null; }
    })
    .filter(Boolean)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  
  fs.writeFileSync("runs/index.json", JSON.stringify(runs, null, 2), "utf8");
}
```

### 4.6 — CLI: comandos list y compare

```js
// src/cli.js — añadir subcomandos
const args = process.argv.slice(2);

if (args[0] === "list") {
  const index = JSON.parse(fs.readFileSync("runs/index.json", "utf8"));
  console.table(index.map(r => ({
    domain: r.domain,
    date: new Date(r.date).toLocaleString(),
    fidelity: r.fidelityScore,
    niche: r.niche,
  })));
  process.exit(0);
}

if (args[0] === "compare") {
  const [run1, run2] = args.slice(1);
  await compareRuns(run1, run2);
  process.exit(0);
}
```

---

## FASE 5 — ARQUITECTURA Y MANTENIBILIDAD
**Tiempo estimado: 8-10 horas**

### 5.1 — Logger estructurado

```js
// src/support/logger.js
const LOG_LEVELS = { debug: 0, info: 1, warn: 2, error: 3 };
const currentLevel = LOG_LEVELS[process.env.LOG_LEVEL || "info"];

export function log(level, phase, msg, extra = {}) {
  if (LOG_LEVELS[level] < currentLevel) return;
  const entry = {
    level,
    phase,
    msg,
    ts: new Date().toISOString(),
    ms: Date.now() - globalThis.__startTime,
    ...extra,
  };
  console.log(JSON.stringify(entry));
}

// Uso:
// log("info", "scraper", "Navegando a sitio", { url });
// log("warn", "screenshot", "Viewport en blanco detectado", { viewport: "mobile" });
// log("error", "assets", "Download falló", { url, error: err.message });
```

### 5.2 — Timings por fase

```js
// src/orchestrator.js
const timings = {};

function timed(name, fn) {
  return async (...args) => {
    const start = Date.now();
    const result = await fn(...args);
    timings[name] = Date.now() - start;
    log("info", name, `Fase completada en ${timings[name]}ms`);
    return result;
  };
}

// Envolver cada fase:
const inspection = await timed("scraper", inspectUrl)({...});
const fidelityScore = await timed("fidelity", computeFidelityScore)(evidence);
// etc.

// Incluir timings en evidence.json
evidence.timings = timings;
```

### 5.3 — Validación con JSDoc + @ts-check (sin migrar a TypeScript completo)

```js
// src/modules/briefComposer.js
// @ts-check

/**
 * @typedef {Object} Evidence
 * @property {string} url
 * @property {string} niche
 * @property {string} generatedAt
 * @property {Object} inspection
 * @property {string[]} inspection.technologies
 * @property {Object} fidelityScore
 * @property {number} fidelityScore.overall
 */

/**
 * @param {Evidence} evidence
 * @returns {string}
 */
export function composeBrief(evidence) { ... }
```

### 5.4 — Tests para funciones puras críticas

```js
// tests/briefComposer.test.js
import { test } from "node:test";
import assert from "node:assert";
import { computeFidelityScore } from "../src/modules/fidelityScore.js";
import { classifyDesignLanguage } from "../src/modules/localVisionHeuristics.js";

test("fidelityScore retorna objeto con overall entre 0 y 100", () => {
  const score = computeFidelityScore({ inspection: { technologies: ["GSAP"], sections: [] } });
  assert.ok(score.overall >= 0 && score.overall <= 100);
});

test("classifyDesignLanguage detecta cinematic dark", () => {
  const lang = classifyDesignLanguage({
    inspection: { cssFeatures: { darkBackground: true, animations: ["gsap"] } }
  });
  assert.ok(lang.label.toLowerCase().includes("dark") || lang.label.toLowerCase().includes("cinematic"));
});
```

---

## FASE 6 — ÉTICA Y LEGAL
**Tiempo estimado: 1-2 horas**

### 6.1 — Honrar robots.txt

```js
// src/support/robotsChecker.js
export async function checkRobotsTxt(url) {
  const { origin } = new URL(url);
  try {
    const res = await fetch(`${origin}/robots.txt`, { signal: AbortSignal.timeout(5000) });
    if (!res.ok) return { allowed: true }; // Sin robots.txt = permitido
    const text = await res.text();
    // Parse básico: buscar Disallow: / para User-agent: *
    const lines = text.split("\n").map(l => l.trim());
    const isDisallowed = lines.some(l => l.startsWith("Disallow: /") && !l.startsWith("Disallow: /api"));
    return { allowed: !isDisallowed, text };
  } catch {
    return { allowed: true };
  }
}

// En orchestrator.js:
const robots = await checkRobotsTxt(config.url);
if (!robots.allowed && !config.ignoreRobots) {
  throw new Error("robots.txt no permite el acceso. Usa --ignore-robots para forzar.");
}
```

### 6.2 — Renombrar branding

```
❌ awwwards-extractor → ✅ surgical-extractor
❌ "Awwwards Surgical" en README → ✅ "Surgical Web Extractor"
```

---

## RESUMEN EJECUTIVO DEL PLAN

| Fase | Qué resuelve | Impacto | Tiempo |
|---|---|---|---|
| 0 — Seguridad | Exposición LAN, SSRF, path traversal | 🔴 Crítico | 2-4h |
| 1 — Bugs funcionales | 7 bugs silenciosos con código muerto | 🔴 Crítico | 4-6h |
| 2 — Calidad output | Prompt 500KB → <15KB usable | 🟠 Alto | 6-8h |
| 3 — Extracción | Screenshots reales, lazy load, CDP metrics | 🟠 Alto | 4-6h |
| 4 — UX/Producto | Historial, screenshots UI, presets | 🟡 Medio | 8-12h |
| 5 — Arquitectura | Logging, timings, tests, JSDoc | 🟡 Medio | 8-10h |
| 6 — Ética/Legal | robots.txt, branding | 🟢 Bajo | 1-2h |

**Total estimado: 33-48 horas de trabajo de desarrollo.**

---

## LO QUE CAMBIARÍA TODO EN UN FIN DE SEMANA

Si tuvieras que elegir solo 5 fixes para el máximo impacto:

1. **Fase 0.1** — Cambiar 0.0.0.0 → 127.0.0.1 (10 minutos)
2. **Fase 1.1** — await downloadLocalAssets (5 minutos)
3. **Fase 2.1** — trimEvidence() para reducir prompt a <15KB (3-4 horas)
4. **Fase 3.1** — Esperar fuentes + lazy antes de screenshots (1 hora)
5. **Fase 4.1** — Historial de runs en la UI (2-3 horas)

Con solo estos 5 la herramienta pasa de "prototipo sólido" a "herramienta de producción confiable".
