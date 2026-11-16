# Plan de mejora: fidelidad visual máxima, responsive total y funcionalidad al 100%

> Fecha: 2026-11-16 · Estado: análisis final, listo para implementación
> Contexto: WebADN se usó con 2 agentes de IA. El resultado, aunque no malo, presentó
> fallos de layout, imágenes rotas y funciones incompletas. Este documento diagnostica
> las causas raíz y define el plan de corrección para alcanzar el máximo % de similitud
> visual, responsive total y funcionalidad completa.

---

## 1. Resumen ejecutivo

WebADN tiene **dos pipelines de extracción que no comparten evidencia**, y el entregable
principal (`PROMPT.md`) se compone **solo de la huella de fingerprint**, sin la riqueza
del scraper (CSS, assets, tipografía fluida, estructura DOM). A eso se suman bugs de
ordenación del pipeline, probing de medios y interacciones con agujeros, y una verificación
que no detecta imágenes rotas ni interacciones funcionales. Como resultado, los agentes
reciben una guía incompleta y la comparadora no castiga los fallos que más duelen
(imágenes rotas, layout quebrado, menús que no funcionan).

Las correcciones se agrupan en 6 fases. Las fases 0–2 (pipeline, imágenes, layout/responsive)
son las que explain más directamente los fallos observados y tienen mayor impacto en el
% de similitud. La fase 3 (interacciones) es la que garantiza "funcional al 100%".
La fase 4 (empaquetamiento) y 5 (verificación automática) cimentan la calidad a largo plazo.

**Métrica objetivo:** `webadn compare` ≥ 85 global, ninguna dimensión < 70, sin imágenes
rotas, sin overflow horizontal en 390px, y contrato de interacciones verificado.

---

## 2. Diagnóstico: causas raíz por área

### 2.1 Arquitectura: dos pipelines desconectados

**A1 — El dashboard usa un pipeline reducido que nunca ejecuta el scraper.**
- `src/quickKit.js` (usado por `/api/extract` en `src/server.js:356`) ejecuta **solo**
  `captureFingerprint` + `writeKit`. Nunca llama a `runOrchestrator` ni a `inspectUrl`.
- Por tanto, el kit del dashboard carece de: `sectionStructure` (hierarchía DOM),
  `fluidTypeScale`, `spacingScale`, `pixelPalette`, `assets`, `webgl`, `keyframes`,
  `mediaQueries`, `@font-face`, `motionRecipes`, `introTimeline`, `hoverEffects` (JS).
- El prompt del kit (`composeKitPrompt` en `src/modules/buildKit.js`) se compone
  **únicamente** de la huella de fingerprint. Es una guía buena a nivel de secciones,
  pero sin reglas CSS, sin manifiesto de assets y sin tipografía fluida.

**A2 — El pipeline completo (CLI/MCP) produce evidence rica, pero el entregable default
desaparece esa riqueza.**
- `src/orchestrator.js` corre `inspectUrl` (scraper) + `captureFingerprint`.
- El mega-brief (`generateMasterPrompt` → `composeMegaBrief`) se guarda en
  `prompt.md` y en `kit/extras/brief.md`, pero:
  - `src/mcp.js:47` devuelve `result.kit?.prompt || result.prompt` → el prompt del kit
    (fingerprint-only) es el que llega al agente por MCP.
  - El CLI imprime el mismo `kit.prompt` por defecto; el mega-brief solo se lee manualmente
    o con `--output brief`.
- **Consecuencia:** la evidencia más rica que WebADN extrae (CSS, assets, fluid type)
  rara vez llega al agente que construye.

**A3 — Orden incorrecto del pipeline (`src/orchestrator.js`).**
- `runBuildReferenceIR` (stage 5) corre **antes** que `runPixelAndSpacing` (stage 7) y
  `runDesignAndFidelity` (stage 8). El `referenceExperienceIR` queda sin `pixelPalette`,
  `spacing` ni `designLanguage`. (`generateFromIR` lee `evidence.pixelPalette` directamente,
  así que el codegen no se rompe, pero la IR como "representación central" está incompleta.)
- El cache check: `runCacheCheck` devuelve `{ cached }` en el stage 1, pero
  `if (cacheHit) return cacheHit;` está **después** del `for (const stage of pipeline)`
  (líneas 53–70). Un cache hit vuelve a ejecutar todo el pipeline antes de returnar el
  resultado cacheado: trabajo descartado y ralentía.

### 2.2 Imágenes y medios rotos

**B1 — El prompt prohibió reutilizar assets pero no dio alternativas útiles.**
- `composeKitPrompt` (Rule 3, `src/modules/buildKit.js`): "No copies copy ni assets de la
  referencia", sin URLs funcionales, sin recetas SVG, sin reglas de placeholder.
- **Efecto:** los LLMs inventen URLs externas muertas (Unsplash/hotlink), paths relativos
  rotos o cuadros vacíos sin estilo. Es la causa directa de las "imágenes rotas" observadas.

**B2 — El probe de medios captura solo una fracción de la información.**
- `probeLib.blueprint` (`src/modules/probeLib.js`) para `img/video` captura solo
  `{ ratio, radius, fit }`. Omite: `objectPosition`, capas de `background-image`,
  degradaciones/scrims de contraste sobre imágenes, inline SVGs < 40px (filtrados por
  `if (r.width < 40 || r.height < 40) continue;`), y sets de iconos.

**B3 — La descarga de assets está apagada por defecto.**
- `src/modules/assetDownloader.js`: `shouldDownloadBinaries = process.argv.includes('--download-binaries')`.
  El dashboard nunca pasa esa flag → `downloadedAssets` es siempre `{ images: [], fonts: [] }`.
  Ni siquiera videos/SVG se descargan. Los agentes nunca reciben assets locales funcionales.

**B4 — La comparadora no detecta imágenes rotas.**
- `src/modules/fingerprintCompare.js` nunca comprueba `img.complete && img.naturalWidth > 0`,
  `<video>` roto, medios de tamaño cero ni URLs de fondo rotas. Un build con imágenes
  rotas sigue pasando el umbral de ≥ 85.

### 2.3 Layout roto y responsiveness frágil

**C1 — El plano de secciones es plano y sin reglas de layout.**
- `probeLib.blueprint` reduce cada sección a un lista plana de ≤ 14 (escritorio) / ≤ 10
  (móvil) leaf boxes con `x%`, `w%`, `y px`, `h px`. Sin: jerarquía de contenedores,
  reglas Flex/Grid (`grid-template-columns`, `flex-direction`, `justify-content`,
  `align-items`, `gap`, `flex-wrap`), `max-width` de centrado, ni semántica de stacking,
  `z-index` o overlays. Los agentes posicionan con porcentajes frágiles o agrupan
  mal tarjetas/columnas → layout quebrado.

**C2 — Bug crítico: se borra el plano móvil completo cuando cambia el número de secciones.**
- `src/modules/buildKit.js:226`:
  `m?.sections?.[i] && m.sections.length === d.sections.length ? m.sections[i] : null`
- Si móvil esconde/divide/colapsa una sección (muy frecuente), **100% del plano, alturas y
  capturas móviles desaparecen del prompt**. Los agentes pierden la guía mobile.

**C3 — Solo 2 viewports se miden en el camino fingerprint.**
- `src/modules/siteProbe.js`: `PROBE_VIEWPORTS` = solo desktop `1440×900` y mobile `390×844`.
- No hay tablet (`768–1024`), laptop intermedio (`1280`) ni wide (`1920`).
- `fluidTypeScale` (clamp/vw) solo existe en el camino scraper (`styleExtractor.js`), no en
  fingerprint. El prompt no instructa a replicar `clamp()`.

**C4 — La comparadora de layout no castiga cortes ni solapamientos.**
- `compareLayout` (`fingerprintCompare.js`) no comprueba: solapamientos de elementos
  hermanos, texto recortado (`scrollWidth > clientWidth`), contraste de texto sobre
  imágenes, ni posiciones de elementos del plano. Solo hay check de overflow horizontal a
  nivel de página (`compareStructure`, líneas 111–116) — correcto, pero insuficiente.

### 2.4 Funcionalidad e interacciones incompletas

**D1 — Los navs fijos quedan fuera de las secciones.**
- `probeLib.findSections` (`src/modules/probeLib.js:61`):
  `cs.position !== "fixed"` excluye elementos `position: fixed`.
- **Efecto:** header/nav, botones CTA y menú hamburguesa móvil no entran en los planos
  de sección. Los agentes no saben que deben reproducir un nav fijo.

**D2 — No existe contrato de interacciones funcionales.**
- Nada en el probe captura: menú móvil/drawer, accordeons/FAQ, tabs, carruseles/sliders,
  modales, formularios (inputs, validación, estados submit) ni navegación ancla.
- `src/modules/interactionProbe.js` y `probeHover` solo hacen hover.
- `compareInteraction` solo verifica hover y cursor personalizado. **Ninguna de estas
  interacciones se verifica** → "funcional al 100%" no se puede afirmar.

**D3 — Bug en el manejador de overlays.**
- `src/modules/overlayHandler.js`: patrón `/close|cerrar|dismiss|x/i`.
  La alternativa `x` casa con **cualquier botón que contenga la letra "x"**
  (p. ej. "Box", "Explore", "Box") → se pulsa el botón incorrecto. Además, los patrones
  se prueban en orden de array, no por `priority`.

### 2.5 Empaquetamiento y UX del dashboard

**E1 — `Copiar prompt` entrega solo texto, sin contexto.**
- `public/app.js:339`: `await copyText(kit.prompt)`. El prompt referencia `spec.json` y
  `screenshots/*.png`, pero el agente en chat no los recibe. Sin capturas ni spec, el
  agente trabaja con menos información de la disponible.

**E2 — El UI no expone `preset`.**
- `server.js:361` acepta `body.preset`, pero `public/app.js` nunca lo envía → siempre
  `standard`. El `surgical` (que sí captura CSS completo, assets y más) es inalcanzable
  desde el dashboard.

**E3 — Requisitos de assets sin fuente funcional.**
- `composeAssetRequirements` (`briefSections/compose-build.js`) solo dice "no copies
  assets propios". No da fuentes de imágenes/placeholder/SVG que funcionen.

### 2.6 Verificación y medición

**F1 — `computeVisualSimilarity` (visualSimilarity.js) no es similitud reference-vs-build.**
- Es una puntuación **auto-referencial de completitud** de la evidencia de la referencia.
  `runVerifyFidelity` (`orchestrator.js`) la usa sobre la referencia sola → no mide el build.
- La comparadora real es `fingerprintCompare.compareFingerprints` (vía `runCompare`),
  correcta, pero manual.

**F2 — `renderedSimilarity` + `verificationLoop` están escritos pero no conectados.**
- `src/modules/renderedSimilarity.js` y `runVerificationLoop` no se importan en el
  orchestrator (solo `classifySiteCategory` de `verificationLoop.js`). No hay loop
  automático de render → medir → reparar. El plan `docs/plans/2026-07-04-reference-experience-ir.md`
  lo describe pero dice "No ejecutar todavía".

**F3 — Detección de screenshots planos ineficaz.**
- `src/modules/visualCapture.js` deja `screenshotQuality = { colors: [], dominantRatio: 1,
  note: "TODO..." }`. `analyzeScreenshotPixels` (`screenshotQuality.js`) recibe siempre
  `colors: []` → la validación de screenshots planos en `runAnalysis` nunca dispara.

**F4 — Estado de tests:** `npm test` → 104 pass / 5 fail. Los 5 fallos son por
`Cannot find package 'playwright'` (entorno: playwright no instalado), no por código.

---

## 3. Plan de mejora por fases

### Fase 0 — Correcciones críticas de pipeline (rápido impacto)

**T0.1 — Unificar el entregable del orchestrator: que el mega-brief sea el default.**
- En `src/orchestrator.js`, el return final debe priorizar el mega-brief
  (`pipelineContext.data.generatePrompt`) sobre `kit.prompt` cuando existe, o incluir
  ambos (prompt corto + ruta del brief completo).
- En `src/mcp.js` (`webadn_extract`), devolver el mega-brief completo + ruta del kit,
  no solo `kit.prompt`.
- **Aceptación:** MCP/CLI entregan la evidencia rica (CSS, assets, fluid type) al agente.

**T0.2 — Reordenar el pipeline y arreglar el cache.**
- En `src/orchestrator.js`: mover `runBuildReferenceIR` **después** de
  `runPixelAndSpacing` y `runDesignAndFidelity`.
- Mover `const cacheHit = ...; if (cacheHit) return cacheHit;` **antes** del loop de
  pipeline (right después de `runCacheCheck`), con return de los artefactos cacheados.
- **Aceptación:** cache hit no re-ejecuta el pipeline; la IR incluye pixelPalette/spacing/designLanguage.

**T0.3 — Arreglar el manejador de overlays.**
- En `src/modules/overlayHandler.js`: quitar la alternativa `x` suelta
  (`/close|cerrar|dismiss|x/i` → usar `/^x$|close|cerrar|dismiss|accept all|rechazar/i`
  o similar), y ordenar los patrones por `priority` descendente antes de probarlos.
- **Aceptación:** no se clicka un botón que contenga "x" por casualidad; el orden de
  prioridad (accept > reject > necessary > close) se respeta.

**T0.4 — Corregir la caída del plano móvil en `buildKit.js`.**
- En `src/modules/buildKit.js:226`: alinear secciones por índice **y** por orden
  aproximado (el índice móvil puede desfasarse). Cuando `m.sections.length !==
  d.sections.length`, alinear por `top` más cercano en vez de `null`.
- **Aceptación:** el plano móvil nunca se borra; si una sección móvil no tiene pareja,
  se marca explícitamente como "oculta/colapsada en móvil".

### Fase 1 — Imágenes y assets funcionales

**T1.1 — Recetas de assets en el prompt (el fix directo de "imágenes rotas").**
- En `composeKitPrompt` (`buildKit.js`) y `composeAssetRequirements`
  (`briefSections/compose-build.js`): añadir una sección "Assets" con:
  - Reglas de placeholder **que funcionan**: `https://picsum.photos/seed/<id>/W/H`,
    Unsplash Source deflated o recetas SVG inline autocontenidas.
  - Receta SVG para iconos/logotipos (usar `currentColor`, stroke, viewBox).
  - Reglas de comportamiento: `object-fit`, `object-position`, `aspect-ratio`,
    scrim/degradación para contraste, `loading="lazy"`, `decoding="async"`,
    `width/height` para evitar CLS.
  - Instrucción explícita: "ninguna URL externa inventada; si no tienes el asset,
    usa el placeholder indicado con las medidas del plano".
- **Aceptación:** ningún agente recibe un prompt que genere URLs de imágenes muertas.

**T1.2 — Enriquecer el probe de medios.**
- En `probeLib.blueprint`: para `img/video` capturar además `objectPosition`,
  `backgroundImage` de contenedores, `alt`, `srcset` (picture), y marcar
  `broken: img.complete && img.naturalWidth === 0`.
- **Aceptación:** el plano incluye posición de object-fit y detectamos imágenes rotas en la referencia.

**T1.3 — Descargar assets por defecto y entregarlos en el kit.**
- En `assetDownloader.js`: quitar la requirement de `--download-binaries`; descargar
  imágenes + fuentes (+ SVG inline exportados) siempre, con límites y timeout.
- En `buildKit.js`: copiar `assets/` al kit y referenciar la ruta local en el prompt.
- **Aceptación:** el kit incluye assets locales funcionales; el prompt dice dónde están.

**T1.4 — La comparadora castiga imágenes rotas.**
- En `fingerprintCompare.js`: nueva dimensión/chequeo de integridad de medios:
  `img.complete && naturalWidth > 0`, `<video>` con `readyState`, medios de tamaño 0,
  y `background-image` rota. Emitir issue `high` y restar puntuación en `layout`/`perceptual`.
- **Aceptación:** un build con imágenes rotas no puede superar 85.

### Fase 2 — Layout sólido y responsive total

**T2.1 — Añadir jerarquía y reglas de layout al plano.**
- En `probeLib.blueprint`: capturar, además de los leaf boxes, los **contenedores**
  relevantes (padres con display flex/grid) con sus reglas: `display`,
  `flexDirection`, `flexWrap`, `justifyContent`, `alignItems`, `gap`,
  `gridTemplateColumns`, `maxWidth`.
- En `buildKit.js`: emitir un bloque "Contenedores y reglas de layout" antes del plano
  plano, para que el agente use Flex/Grid real y no porcentajes absolutos.
- **Aceptación:** el plano incluye contenedores + reglas flex/grid; el agente tiene
  instrucciones de layout estructurado.

**T2.2 — Medir más viewports.**
- En `siteProbe.js`: añadir viewports `tablet` (834×1112) y `wide` (1920×1080) a
  `PROBE_VIEWPORTS`, y permitir `viewports` en `captureFingerprint` desde el preset.
- **Aceptación:** el fingerprint incluye tablet + wide; el prompt incorpora su guía.

**T2.3 — Capturar tipografía fluida en fingerprint.**
- En `probeLib.describeStyle` (o un nuevo `W.fluidScale`): capturar `clamp()`, `vw`,
  `rem` y los breakpoints de tipo. Incluir en el prompt la escala fluida a replicar.
- **Aceptación:** el prompt instructa a replicar `clamp()` y los breakpoints medidos.

**T2.4 — Comparar solapamientos, cortes y overflow.**
- En `fingerprintCompare.js`:
  - `compareLayout`: detectar elementos hermanos solapados (intersección de cajas) y
    texto recortado (`scrollWidth > clientWidth`).
  - Contraste: si el texto referencia sobre imagen tiene scrim/degradación y el build
    no, emitir issue.
  - Verificar posiciones de elementos clave del plano (comparar `x%`, `w%` de los
    elementos del plano entre referencia y build).
- **Aceptación:** layout con solapamientos o texto recortado no pasa 85.

### Fase 3 — Interacciones y funcionalidad al 100%

**T3.1 — Capturar elementos fijos (nav) en el plano.**
- En `probeLib.findSections`: no excluir `position: fixed`; en vez de eso, capturar
  fixed/sticky como una sección especial (`role: "nav"` o "fixed") con su altura,
  fondo, y elementos internos.
- En `buildKit.js`: incluir el nav fijo en el plano y en las capturas.
- **Aceptación:** header/nav/hamburger aparecen en el plano y se comparan.

**T3.2 — Contrato de interacciones.**
- Nuevo módulo `src/modules/interactionContract.js` (probe en el navegador):
  detectar y describir: menú hamburguesa/drawer, accordeons/FAQ, tabs, carruseles,
  modales, formularios (campos, validación, estados), navegación ancla.
  Salida: `interactionContract` (elementos, estados, gatillos, efectos).
- Invocarlo en `siteProbe.js` (y scraper para el mega-brief).
- **Aceptación:** la evidencia incluye un contrato de interacciones.

**T3.3 — Verificar interacciones en compare.**
- En `fingerprintCompare.js`: extender `compareInteraction` para verificar que los
  elementos del contrato existen y responden (ex: botón menú abre el drawer,
  accordion alterna, tab activa, carrusel avanza). Emisión de issues `high` si faltan.
- **Aceptación:** "funcional al 100%" se mide, no se asume.

**T3.4 — Probar hover JS en más superficie.**
- `interactionProbe.js`/`probeHover` ya hacen hover real; ampliar a botones CTA y
  tarjetas de la sección hero y footer, y asegurar que los cambios capturados se
  traducen a recetas en el prompt (ya hay `hoverEffects`; verificar que llegan al
  prompt del kit — hoy solo están en el mega-brief).

### Fase 4 — Empaquetamiento y UX

**T4.1 — `Copiar prompt` entrega el kit completo.**
- En `public/app.js`: copiar el prompt + una guía que incluya la ruta relativa del
  `spec.json`, `screenshots/` y `assets/` dentro del zip; o entregar un "block de
  contexto" que el agente pueda recibir junto al zip.
- **Aceptación:** el agente recibe prompt + rutas de spec/screenshots/assets.

**T4.2 — Exponer `preset` en el dashboard.**
- En `public/index.html` + `public/app.js`: añadir selector `preset` (fast/standard/surgical)
  y enviarlo en `postStream("/api/extract", ...)`.
- **Aceptación:** el usuario puede elegir `surgical` desde el dashboard.

**T4.3 — Mensajes de fallo claros en la comparadora.**
- En `renderReportMarkdown`: agrupar issues por dimensión y incluir un resumen
  executivo de "qué arreglar primero" (ya ordena por impacto; añadir
  "dimensión más débil" y "actions to fix").

### Fase 5 — Verificación automática y calidad a largo plazo

**T5.1 — Conectar el loop render → medir → reparar.**
- En `src/orchestrator.js`: añadir stages `renderGeneratedSite` + `measureRenderedSimilarity`
  + `repairWeakSections` (usar `renderedSimilarity.js` + `verificationLoop.js`).
- **Aceptación:** con `--generate`, WebADN renderiza su propio site, mide la similitud
  real y reporta las secciones débiles.

**T5.2 — Implementar la calidad real de screenshots.**
- En `visualCapture.js`: implementar `screenshotQuality` con el sample de píxeles real
  (ya hay `decodePng` en `colorQuantizer.js`): contar colores únicos y ratio dominante.
  **Aceptación:** los screenshots planos se detectan y se marcan `visualEvidenceStatus: "invalid"`.

**T5.3 — Tests de producto de fidelidad.**
- Añadir fixtures y tests (`tests/renderedSimilarity.product.test.js` ya existe; extender):
  - build con imágenes rotas → score < 85.
  - build sin plano móvil → score cae en layout.
  - build con nav fijo omitido → structure/issues detectan la falta.
- **Aceptación:** `npm test` verde (primero instalar playwright para los 5 tests de
  `extractor.test.js` que fallan por entorno).

---

## 4. Impacto esperado por objetivo del usuario

| Objetivo | Causas raíz | Fase |
|---|---|---|
| **Máximo % de similitud visual** | A1/A2 (evidencia rica que no llega), B1/B2/B3/B4 (imágenes), C1/C2/C3/C4 (layout/responsive), F1/F3 (verificación) | 0, 1, 2, 5 |
| **Totalmente responsive** | C2 (plano móvil borrado), C3 (2 viewports), C4 (solapamientos/overflow), T2.2/T2.3 | 2 |
| **Funcional al 100%** | D1 (nav fijo excluido), D2 (contrato de interacciones), D3 (overlays), F2 (loop de verificación) | 0, 3, 5 |

## 5. Criterios de aceptación globales

1. `webadn compare` ≥ 85 global y ninguna dimensión < 70 en builds correctos.
2. Builds con imágenes rotas, layout con overflow/solapamiento o texto recortado **no**
   superan 85.
3. El plano móvil está presente en todo kit, incluso si el número de secciones difiere.
4. El contrato de interacciones existe en la evidencia y se verifica en compare.
5. El mega-brief (CSS, assets, fluid type) es el entregable default de MCP/CLI.
6. `npm test` y `npm run check` verdes.
7. El dashboard permite `preset: surgical` y entrega prompt + rutas de spec/screenshots.

## 6. Orden sugerido de implementación

```
Fase 0: T0.1 → T0.2 → T0.3 → T0.4        (1–2 días, fixes críticos)
Fase 1: T1.1 → T1.2 → T1.3 → T1.4        (2–3 días, imágenes funcionales)
Fase 2: T2.1 → T2.2 → T2.3 → T2.4        (3–4 días, layout/responsive)
Fase 3: T3.1 → T3.2 → T3.3 → T3.4        (3–4 días, funcionalidad)
Fase 4: T4.1 → T4.2 → T4.3               (1–2 días, UX)
Fase 5: T5.1 → T5.2 → T5.3               (2–3 días, verificación)
```

Cada fase puede validarse con un mismo flujo end-to-end: extraer una referencia
compleja → construir con un agente → `webadn compare` → confirmar que el score y las
dimensiones débiles reflejan la realidad del build.
