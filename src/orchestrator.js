import { inspectUrl, sampleInspection } from "./modules/scraper.js";
import { buildKnowledgeMatrix } from "./modules/knowledgeMatrix.js";
import { analyzeMotionReference } from "./modules/visionEngine.js";
import { applyConversionStrategy } from "./modules/conversionBrain.js";
import { generateMasterPrompt } from "./modules/promptGenerator.js";
import { createRunFolder, ensureRunFolders, saveEvidence, saveRunMeta, savePrompt, findRecentRun, pruneOldRuns, updateRunsIndex } from "./support/artifacts.js";
import { computeVisualRhythm } from "./modules/visualDiff.js";
import { computeFidelityScore } from "./modules/fidelityScore.js";
import { classifyDesignLanguage } from "./modules/localVisionHeuristics.js";
import { tryLocalLlm } from "./modules/localLlmAdapter.js";
import { checkRobotsTxt } from "./support/robotsChecker.js";
import { log } from "./support/logger.js";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { initBrowserPool, getBrowser } from "./support/browserPool.js";

const timings = {};

function timed(name, fn) {
  return async (...args) => {
    const start = Date.now();
    try {
      const result = await fn(...args);
      timings[name] = Date.now() - start;
      log("info", name, "Fase completada en " + timings[name] + "ms");
      return result;
    } catch (err) {
      timings[name] = Date.now() - start;
      log("error", name, "Fase fallo tras " + timings[name] + "ms", { error: err.message });
      throw err;
    }
  };
}

export async function runOrchestrator(config) {
  log("info", "orchestrator", "Iniciando extraccion", { url: config.url, niche: config.niche });

  const recentPath = await findRecentRun(config.url, config.niche, config.preset || "standard", config.maxAgeMinutes || 120);
  if (recentPath && !config.force) {
    config.onProgress?.({ step: "cache", message: "Extraccion reciente encontrada. Cargando del cache local..." });
    try {
      const evidence = JSON.parse(await readFile(join(recentPath, "evidence.json"), "utf8"));
      const prompt = await readFile(join(recentPath, "prompt.md"), "utf8");
      log("info", "orchestrator", "Cache hit", { path: recentPath });
      return {
        prompt,
        artifactPath: recentPath,
        evidence,
        fidelityScore: evidence.fidelityScore
      };
    } catch (err) {
      config.onProgress?.({ step: "cache-error", message: "Fallo al leer cache local, procediendo a extraccion nueva..." });
    }
  }

  if (!config.ignoreRobots) {
    let robots;
    try {
      robots = await checkRobotsTxt(config.url);
    } catch (err) {
      log("warn", "robots", "Error al verificar robots.txt, procediendo", { error: err.message });
      robots = { allowed: true };
    }
    if (!robots.allowed) {
      const reason = robots.reason || "robots.txt bloquea el acceso";
      log("info", "robots", `BLOQUEADO: ${reason}`);
      throw new Error(`${reason}. Usa --ignore-robots para forzar.`);
    }
    if (robots.allowed) {
      log("info", "robots", "Permitido por robots.txt");
    }
  }

  const paths = createRunFolder(config.url, config.niche, config.preset || "standard");
  await ensureRunFolders(paths);

  const timedInspectUrl = timed("scraper", inspectUrl);
  const inspection = config.dryRun
    ? sampleInspection(config.url)
    : await timedInspectUrl({
        url: config.url,
        headless: config.headless,
        timeoutMs: config.timeoutMs,
        preset: config.preset || "standard",
        screenshotsPath: paths.screenshotsPath,
        onProgress: config.onProgress,
        browser: await getBrowser()
      });

  // Auto-detect complex sites and upgrade to surgical preset
  const effectivePreset = config.preset === "surgical" 
    ? "surgical" 
    : config.preset === "fast" 
      ? "fast" 
      : inferComplexityPreset(inspection);

  if (effectivePreset !== (config.preset || "standard") && effectivePreset === "surgical") {
    config.onProgress?.({ step: "auto-preset", message: "Sitio complejo detectado. Usando preset 'surgical' para extracción completa." });
  }

  const timedKnowledgeMatrix = timed("knowledgeMatrix", buildKnowledgeMatrix);
  const timedMotionAnalysis = timed("motionAnalysis", analyzeMotionReference);
  const timedConversionPlan = timed("conversionStrategy", applyConversionStrategy);

  const knowledgeMatrix = await timedKnowledgeMatrix();
  const motionAnalysis = await timedMotionAnalysis({
    videoPath: config.videoPath,
    knowledgeMatrix
  });
  const conversionPlan = await timedConversionPlan({
    inspection,
    motionAnalysis,
    niche: config.niche
  });

  const evidence = buildEvidence({
    url: config.url,
    niche: config.niche,
    inspection,
    motionAnalysis,
    conversionPlan,
    knowledgeMatrix
  });

  const timedRhythm = timed("visualRhythm", computeVisualRhythm);
  const timedDesignLang = timed("designLanguage", classifyDesignLanguage);
  const timedFidelity = timed("fidelityScore", computeFidelityScore);

  const visualRhythm = await timedRhythm(inspection.visualEvidence);
  evidence.visualRhythm = visualRhythm;

  const designLanguage = await timedDesignLang(evidence);
  evidence.designLanguage = designLanguage;

  const fidelityScore = await timedFidelity(evidence);
  evidence.fidelityScore = fidelityScore;
  evidence.fidelityLevel = effectivePreset === "surgical" ? "surgical" : effectivePreset === "fast" ? "compact" : "standard";

  const llmResult = await tryLocalLlm(buildLlmSummary(evidence));
  if (llmResult.used) {
    evidence.llmAnalysis = llmResult.result;
  }

  evidence.timings = { ...timings };

  const sanitizedEvidence = sanitizeEvidence(evidence);
  await saveEvidence(paths.runPath, sanitizedEvidence);
  await saveRunMeta(paths.runPath, sanitizedEvidence);

  config.onProgress?.({ step: "prompt", message: "Generando master prompt con evidencia quirurgica..." });
  const promptStart = Date.now();
  const masterPrompt = await generateMasterPrompt({
    url: config.url,
    niche: config.niche,
    inspection,
    motionAnalysis,
    conversionPlan,
    knowledgeMatrix,
    evidence
  });
  const promptMs = Date.now() - promptStart;
  timings.composeMegaBrief = promptMs;
  log("info", "composeMegaBrief", "Master prompt generado en " + promptMs + "ms", {
    chars: typeof masterPrompt === "string" ? masterPrompt.length : 0
  });
  config.onProgress?.({ step: "prompt-done", message: "Master prompt listo (" + promptMs + "ms). Guardando artefactos..." });

  const saveStart = Date.now();
  await savePrompt(paths.runPath, masterPrompt, evidence, config.niche, config.url);
  log("info", "orchestrator", `Prompt guardado en ${Date.now() - saveStart}ms`);

  pruneOldRuns(20).catch(err => console.error("pruneOldRuns error:", err));
  updateRunsIndex().catch(err => console.error("updateRunsIndex error:", err));

  log("info", "orchestrator", "Extraccion completada", { path: paths.runPath, fidelity: fidelityScore.overall });

  return {
    prompt: masterPrompt,
    artifactPath: paths.runPath,
    evidence,
    fidelityScore
  };
}

function buildLlmSummary(evidence) {
  const parts = [];
  const insp = evidence.inspection || {};

  parts.push("URL: " + evidence.url);
  parts.push("Niche: " + evidence.niche);
  parts.push("Sections: " + (insp.sections || []).length);
  parts.push("Motion recipes: " + (insp.motionRecipes || []).length);
  parts.push("CSS complexity: " + (insp.cssFeatures?.complexityScore || 0) + "/100");
  parts.push("Design language: " + (evidence.designLanguage?.label || "unknown"));
  parts.push("Fidelity score: " + (evidence.fidelityScore?.overall || 0));

  return parts.join("\n");
}

function buildEvidence({ url, niche, inspection, motionAnalysis, conversionPlan, knowledgeMatrix }) {
  return {
    url,
    niche,
    generatedAt: new Date().toISOString(),
    inspection: {
      title: inspection.title,
      description: inspection.description,
      h1: inspection.h1,
      technologies: inspection.technologies,
      tokens: inspection.tokens,
      layout: inspection.layout,
      animationHints: inspection.animationHints,
      gsapDataAttrs: inspection.gsapDataAttrs || {},
      semanticTags: inspection.semanticTags,
      ctas: inspection.ctas,
      viewport: inspection.viewport,
      risks: inspection.risks,
      visualEvidence: inspection.visualEvidence || [],
      sections: inspection.sections || [],
      assets: inspection.assets || null,
      cssFeatures: inspection.cssFeatures || null,
      motionRecipes: inspection.motionRecipes || [],
      hoverEffects: inspection.hoverEffects || [],
      webgl: inspection.webgl || null,
      styles: inspection.styles || null,
      sectionStructure: inspection.sectionStructure || null,
      downloadedAssets: inspection.downloadedAssets || null,
      introTimeline: inspection.introTimeline || null
    },
    motionAnalysis: {
      enabled: motionAnalysis.enabled,
      source: motionAnalysis.source,
      findings: motionAnalysis.findings,
      mappedTechniques: motionAnalysis.mappedTechniques
    },
    conversionPlan: {
      paradigm: conversionPlan.paradigm,
      pushbacks: conversionPlan.pushbacks,
      requiredBlocks: conversionPlan.requiredBlocks,
      performanceBudget: conversionPlan.performanceBudget,
      motionDirectives: conversionPlan.motionDirectives,
      accessibility: conversionPlan.accessibility,
      seo: conversionPlan.seo
    },
    knowledgeMatrix
   };
 }

 function sanitizeEvidence(evidence) {
   const e = JSON.parse(JSON.stringify(evidence, (key, value) => {
     if (Buffer.isBuffer(value)) return `[Buffer:${value.length}b]`;
     if (typeof value === "string" && value.length > 100_000) return value.slice(0, 1000) + "...[truncated]";
     return value;
   }));
   return e;
 }

 function inferComplexityPreset(inspection) {
   const webglCount = inspection.webgl?.webglCount || 0;
   const canvasCount = inspection.assets?.canvasCount || 0;
   const complexityScore = inspection.cssFeatures?.complexityScore || 0;
   const sectionsCount = inspection.sections?.length || 0;
   const hasTimeAnimations = inspection.webgl?.animations?.timeAnalysis?.length > 0 || inspection.webgl?.animations?.uniformsOverTime && Object.keys(inspection.webgl.animations.uniformsOverTime).length > 2;

   // If heavy WebGL/3D presence or high complexity, use surgical
   if (webglCount > 0 || canvasCount > 1 || complexityScore > 60 || hasTimeAnimations) {
     return "surgical";
   }

   // If many sections with complex layouts
   if (sectionsCount > 8) {
     return "surgical";
   }

   return "standard";
 }
