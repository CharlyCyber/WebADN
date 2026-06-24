# CHANGELOG — Correcciones de Fidelidad (Junio 2026)

## Resumen

4 cambios quirúrgicos en `promptGenerator.js` y `briefComposer.js` para que la fidelidad extraída (score 85, CSS complexity 53, designLanguage estable) llegue intacta al prompt downstream. Sin tocar extractores, scraper ni dashboard.

## Bug A — `briefEvidence` omitía `fidelityScore`

**Archivo:** `src/modules/promptGenerator.js:6-15`

**Problema:** El objeto `briefEvidence` no incluía `fidelityScore`, `designLanguage`, `pixelPalette` ni `spacing`. `composeMegaBrief` leía `evidence.fidelityScore?.overall` → `undefined` → `0` → prefijo `🔴 BAJA CONFIANZA` en TODAS las secciones (aunque el score real fuera 85).

**Fix:** Añadidos 4 campos al `briefEvidence`:
- `fidelityScore: evidence.fidelityScore || null`
- `designLanguage: evidence.designLanguage || null`
- `pixelPalette: evidence.pixelPalette || null`
- `spacing: evidence.spacing || null`

**Efecto:** Score 85 → sin prefijo. Score 50-80 → `⚠️ DATOS PARCIALES`. Score <50 → `🔴 BAJA CONFIANZA`.

## Bug B — `trimEvidence` omitía `cssFeatures`

**Archivo:** `src/modules/briefComposer.js:1642`

**Problema:** La función `trimEvidence` no incluía `cssFeatures` en el objeto `inspection` recortado. `composeExecutiveDiagnosis`, `buildReferenceProfile`, `composeComponentArchitecture` y `composeMotionTimeline` recibían `inspection.cssFeatures` como `undefined` → complejidad reportada como `0/100` y efectos como "no advanced effects".

**Fix:** Añadido `cssFeatures: originalInsp.cssFeatures` al objeto `inspection` dentro de `trimEvidence`.

**Efecto:** CSS Complexity now refleja el score real (ej: 53/100). Los efectos aparecen en el diagnosis, perfil de referencia y timeline de motion.

## Bug C — `designLanguage` se perdía en el trim

**Nota:** `trimEvidence` ya pasaba `designLanguage: evidence.designLanguage` en la línea 1597. La causa raíz era que `briefEvidence` no lo incluía (Bug A), no el trim. El fix de Bug A lo resuelve.

**Efectivo:** `designLanguage` ahora se propaga estable — no se reclasifica desde datos parciales en cada run.

## Cambio C — Compresión de #4 CSS Architecture y #6 Section Build Spec

**Archivo:** `src/modules/briefComposer.js`

### #4 CSS Architecture (`composeCssArchitecture`)

- Añadido `RESET_SELECTOR_PATTERNS` configurable (filtra `*`, `html`, `body`, `:root`, `.w-`).
- En modo surgical: filtra selectores de reset/framework, limita a **60** selectores con valor de fidelidad (vs 500 anteriores).
- En compact/standard: comportamiento intacto.
- Keyframes, media queries y @font-face se mantienen completos.

### #6 Section Build Spec (`composeSectionBuildSpec`)

- Añadida función `prioritizeChildren()` que ordena hijos por relevancia: headings > CTAs > media > animados > otros.
- En surgical: top-20 hijos por relevancia (vs todos los hijos anteriormente).
- En compact/standard: top-15 (antes 30).
- CHILDREN_STYLES para surgical cambió de `null` (todos los estilos) a lista curada de 17 propiedades de fidelidad.

## Cambio D — Eliminación de duplicación en #15 Final Agent Prompt

**Archivo:** `src/modules/briefComposer.js:1285-1567`

**Problema:** `composeFinalAgentPrompt` duplicaba ~600 líneas de contenido ya presente en #3 (Design Tokens), #6 (Section Spec), #7 (Motion Timeline) y #8 (Interaction Recipes). Esto inflaba el prompt sin aportar información nueva.

**Fix:** Reemplazados los bloques duplicados (`=== SECTIONS STRUCTURE BLUEPRINT ===`, `=== MOTION TIMELINE & GSAP RECIPES ===`, `=== DESIGN TOKENS (CSS VARIABLES) ===`, `=== GSAP DATA ATTRIBUTES DETECTED ===`, `=== HOVER INTERACTION GSAP CODE ===`) por referencias cruzadas:
```
=== SECTIONS STRUCTURE ===
See #6 Section-by-Section Build Spec above...

=== MOTION & GSAP ===
See #7 Motion Timeline Recipes and #8 Interaction Recipes above...

=== DESIGN TOKENS ===
See #3 Design Token System above...
```

Conservado contenido exclusivo de #15: identidad del agente, target de fidelidad, boilerplate de instalación, development laws.

## Tests añadidos

5 tests nuevos en `tests/briefComposer.test.js`:
- `Bug A: fidelityScore=85 suppresses BAJA CONFIANZA prefix`
- `Bug A: fidelityScore=0 triggers BAJA CONFIANZA prefix`
- `Bug B: cssFeatures complexityScore propagates to executive diagnosis`
- `Bug B: cssFeatures.effects appear in reference profile`
- `Bug C: designLanguage passes through stably (not reclassified)`

Test actualizado en `tests/megaBriefSpecificity.test.js`: regex `/Observed keyframes/` → `/Observed scroll keyframes/` (refleja el wording de #7, no del duplicado eliminado de #15).

## Verificación

- `npm test`: 67/68 pass (único fail: `extractor.test.js` — preexistente, flaky por red)
- `prompt.compact.md` y `prompt.json` no se modifican (el compact prompt se genera con función separada `buildCompactPrompt`)
- Dashboard, CLI y todos los extractores intactos
- Compatibilidad hacia atrás: runs sin `fidelityScore`/`cssFeatures` en trimmed siguen funcionando (fallbacks `|| null` / `|| {}`)

## Archivos modificados

| Archivo | Líneas | Cambio |
|---------|--------|--------|
| `src/modules/promptGenerator.js` | 6-15 | +4 campos a `briefEvidence` |
| `src/modules/briefComposer.js` | 4-38 | +`RESET_SELECTOR_PATTERNS`, surgical `CHILDREN_STYLES` curado |
| `src/modules/briefComposer.js` | 693-771 | Filtro de selectores reset en surgical |
| `src/modules/briefComposer.js` | 827-988 | `prioritizeChildren()`, límite de hijos por relevancia |
| `src/modules/briefComposer.js` | 1285-1567 | #15 sin duplicación, referencias cruzadas |
| `src/modules/briefComposer.js` | 1642 | +`cssFeatures` a `trimEvidence` |
| `tests/briefComposer.test.js` | +45 | 5 tests nuevos para bugs A/B/C |
| `tests/megaBriefSpecificity.test.js` | 1 | regex actualizado |

## Lo que no se hizo (YAGNI)

- No se tocaron extractores, scraper, dashboard, CLI
- No se añadió arquitectura multiagente nueva
- No se migró a TypeScript
- No se modificó el sistema de evidencia/cache
