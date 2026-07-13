# Evidence Contract + Surgical Refactor — Design Spec

**Goal:** Eliminate regressions in WebADN by establishing a typed evidence contract, fixing 7 active bugs, eliminating duplication across modules, and splitting the monolithic briefComposer.js.

## Architecture

### Current Problems
1. **Evidence object has no contract** — any module adds fields ad-hoc, consumers access `?.` chains that silently return undefined
2. **briefComposer.js** (1528 lines) duplicates logic with contextPackager.js (color roles, type scale)
3. **sectionMapper + structureExtractor** both independently detect sections with different heuristics
4. **7 active bugs** degrade extraction quality silently
5. **No validation at pipeline boundaries** — regressions go undetected

### Solution
1. **Typed evidence contract** via JSDoc `@typedef` in a shared module
2. **`// @ts-check`** on all modules in the critical path
3. **Shared extraction of color roles, type scale, section structure** into dedicated modules
4. **Fix 7 bugs** that currently degrade fidelity
5. **Validation layer** at each orchestrator stage

## File Map

### New files
- `src/shared/evidence-types.js` — JSDoc typedefs for the entire evidence/inspection object graph
- `src/shared/color-roles.js` — extracted `classifyColorsByRole` (shared by briefComposer + contextPackager)
- `src/shared/type-scale.js` — extracted `extractTypeScale`
- `src/shared/section-structure.js` — merged section detection logic
- `src/modules/briefSections/compose-diagnosis.js` — executive diagnosis section
- `src/modules/briefSections/compose-tokens.js` — design tokens section
- `src/modules/briefSections/compose-motion.js` — motion/interaction sections
- `src/modules/briefSections/compose-build.js` — build spec + architecture sections
- `src/modules/briefSections/compose-quality.js` — performance, accessibility, acceptance criteria
- `src/modules/briefSections/compose-prompt.js` — final agent prompt
- `tests/evidence-contract.test.js` — validation tests for evidence shape

### Modified files
- `src/modules/briefComposer.js` — thin orchestration importing sections
- `src/modules/contextPackager.js` — import from `shared/color-roles.js` instead of own impl
- `src/modules/motionSampler.js` — fix `findLast` → reduce for Node 20 compat
- `src/modules/scraper.js` — fix missing `log` import
- `src/modules/visualCapture.js` — fix viewport restoration in thumbnail gen
- `src/modules/fidelityScore.js` — fix dead parameter in `computeResponsiveConfidence`
- `src/modules/styleExtractor.js` — remove dead `_BUG_REPRO_FLUID_FONT_RE`
- `src/modules/interactionProbe.js` — fix `:--hf` pseudo-selector, fix 2-arg evaluate
- `src/modules/structureExtractor.js` — fix section parameter being ignored
- `src/orchestrator.js` — add evidence validation stage
- `src/support/artifacts.js` — add evidence validation on save

## Process
1. Create shared evidence types → verify with `node --check`
2. Fix all 7 bugs → verify with `npm test`
3. Extract shared logic (color roles, type scale) → verify existing tests pass
4. Split briefComposer.js → verify with `npm test`
5. Add validation layer → run full pipeline against fixture
