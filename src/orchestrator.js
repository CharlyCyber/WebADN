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
import { interpretEvidence as interpretWithLlm } from "./modules/llmInterpreter.js";
import { extractPixelPalette } from "./modules/colorQuantizer.js";
import { computeSpacingScale } from "./modules/spacingScale.js";
import { packageStructuredContext } from "./modules/contextPackager.js";
import { checkRobotsTxt } from "./support/robotsChecker.js";
import { log } from "./support/logger.js";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { initBrowserPool, getBrowser } from "./support/browserPool.js";
import { computeVisualSimilarity } from "./modules/visualSimilarity.js";
import { generateFromIR } from "./modules/irCodegen.js";
import { runVerificationLoop, classifySiteCategory } from "./modules/verificationLoop.js";

export async function runOrchestrator(config) {
  const pipelineContext = { timings: {}, data: {} };

  const pipeline = [
    { name: 'cacheCheck', fn: runCacheCheck },
    { name: 'robotsCheck', fn: runRobotsCheck },
    { name: 'scraper', fn: runScraper },
    { name: 'analysis', fn: runAnalysis },
    { name: 'pixelAndSpacing', fn: runPixelAndSpacing },
    { name: 'designAndFidelity', fn: runDesignAndFidelity },
    { name: 'llmInterpretation', fn: runLlmInterpretation },
    { name: 'saveArtifacts', fn: runSaveArtifacts },
    { name: 'packageContext', fn: runPackageContext },
    { name: 'generatePrompt', fn: runGeneratePrompt },
    { name: 'generateSite', fn: runGenerateSite },
    { name: 'verifyFidelity', fn: runVerifyFidelity },
  ];

  for (const stage of pipeline) {
    const start = Date.now();
    try {
      pipelineContext.data[stage.name] = await stage.fn(pipelineContext, config);
      pipelineContext.timings[stage.name] = Date.now() - start;
      log("info", stage.name, "Fase completada en " + pipelineContext.timings[stage.name] + "ms");
    } catch (err) {
      pipelineContext.timings[stage.name] = Date.now() - start;
      log("error", stage.name, "Fase fallo tras " + pipelineContext.timings[stage.name] + "ms", { error: err.message });
      throw err;
    }
  }

  const cacheHit = pipelineContext.data.cacheCheck?.cached;
  if (cacheHit) return cacheHit;

  return {
    prompt: pipelineContext.data.generatePrompt,
    artifactPath: pipelineContext.data.saveArtifacts?.artifactPath,
    evidence: pipelineContext.data.saveArtifacts?.evidence,
    fidelityScore: pipelineContext.data.saveArtifacts?.evidence?.fidelityScore
  };
}

async function runCacheCheck(ctx, config) {
  log("info", "orchestrator", "Iniciando extraccion", { url: config.url, niche: config.niche });
  const recentPath = await findRecentRun(config.url, config.niche, config.preset || "standard", config.maxAgeMinutes || 120);
  if (recentPath && !config.force) {
    config.onProgress?.({ step: "cache", message: "Extraccion reciente encontrada. Cargando del cache local..." });
    try {
      const evidence = JSON.parse(await readFile(join(recentPath, "evidence.json"), "utf8"));
      const prompt = await readFile(join(recentPath, "prompt.md"), "utf8");
      log("info", "orchestrator", "Cache hit", { path: recentPath });
      return {
        cached: { prompt, artifactPath: recentPath, evidence, fidelityScore: evidence.fidelityScore }
      };
    } catch (err) {
      config.onProgress?.({ step: "cache-error", message: "Fallo al leer cache local, procediendo a extraccion nueva..." });
    }
  }
  return {};
}

async function runRobotsCheck(ctx, config) {
  if (config.ignoreRobots) return {};
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
  if (robots.allowed) log("info", "robots", "Permitido por robots.txt");
  return {};
}

async function runScraper(ctx, config) {
  const paths = createRunFolder(config.url, config.niche, config.preset || "standard");
  await ensureRunFolders(paths);
  ctx.data.paths = paths;

  const inspection = config.dryRun
    ? sampleInspection(config.url)
    : await inspectUrl({
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

  ctx.data.inspection = inspection;
  ctx.data.effectivePreset = effectivePreset;
  ctx.data.paths = paths;
  return {};
}

async function runAnalysis(ctx, config) {
  const { inspection } = ctx.data;

  const knowledgeMatrix = buildKnowledgeMatrix();
  const motionAnalysis = await analyzeMotionReference({
    videoPath: config.videoPath,
    knowledgeMatrix
  });

  // ConversionBrain solo si CRO está habilitado (opcional desde CLI)
  let conversionPlan = { paradigm: "fidelity-first", requiredBlocks: [], pushbacks: [], motionDirectives: [], performanceBudget: {}, accessibility: [], seo: [] };
  if (config.cro !== false) {
    conversionPlan = await applyConversionStrategy({
      inspection,
      motionAnalysis,
      niche: config.niche
    });
  }

  const evidence = buildEvidence({
    url: config.url,
    niche: config.niche,
    inspection,
    motionAnalysis,
    conversionPlan,
    knowledgeMatrix
  });

  if (config.clientBrief) {
    evidence.clientBrief = config.clientBrief;
  }

  const visualRhythm = await computeVisualRhythm(inspection.visualEvidence);
  evidence.visualRhythm = visualRhythm;

  ctx.data.evidence = evidence;
  ctx.data.motionAnalysis = motionAnalysis;
  ctx.data.conversionPlan = conversionPlan;
  ctx.data.knowledgeMatrix = knowledgeMatrix;
  return {};
}

async function runPixelAndSpacing(ctx, config) {
  const { inspection, evidence } = ctx.data;

  const screenshotPaths = (inspection.visualEvidence || [])
    .filter((e) => e && e.screenshotPath)
    .slice(0, 6)
    .map((e) => e.screenshotPath);

  const tasks = [];

  // Pixel palette
  tasks.push((async () => {
    if (!screenshotPaths.length) return;
    config.onProgress?.({ step: "pixel-color", message: "Cuantizando paleta a nivel pixel..." });
    try {
      const pixelPalette = await extractPixelPalette(screenshotPaths, { maxColors: 5 });
      if (pixelPalette) {
        evidence.pixelPalette = pixelPalette;
        log("info", "pixelPalette", "Paleta pixel extraída", {
          background: pixelPalette.background,
          accent: pixelPalette.accent,
          coverage: pixelPalette.backgroundCoverage + "%"
        });
      }
    } catch (err) {
      log("error", "pixelPalette", "Fallo cuantización pixel", { error: err.message });
      evidence.pixelPalette = { error: 'EXTRACTION_FAILED', details: err.message };
    }
  })());

  // Spacing scale
  tasks.push((async () => {
    config.onProgress?.({ step: "spacing", message: "Normalizando escala de espaciado..." });
    try {
      evidence.spacing = await computeSpacingScale(inspection);
    } catch (err) {
      log("error", "spacingScale", "Fallo normalización de espaciado", { error: err.message });
      evidence.spacing = { error: 'EXTRACTION_FAILED', details: err.message };
    }
  })());

  await Promise.all(tasks);
  return {};
}

async function runDesignAndFidelity(ctx, config) {
  const { evidence, effectivePreset, inspection } = ctx.data;

  let designLanguage, fidelityScore;
  try {
    [designLanguage, fidelityScore] = await Promise.all([
      classifyDesignLanguage(evidence),
      computeFidelityScore(evidence)
    ]);
  } catch (err) {
    log("error", "designAndFidelity", "Fallo análisis de diseño o fidelidad", { error: err.message });
    if (!designLanguage) designLanguage = { label: "unknown", confidence: 0, signals: [] };
    if (!fidelityScore) fidelityScore = { overall: 0, label: "Extraction failed", breakdown: {}, missingEvidence: ["designAndFidelity"] };
  }

  evidence.designLanguage = designLanguage;
  evidence.fidelityScore = fidelityScore;
  evidence.fidelityLevel = effectivePreset === "surgical" ? "surgical" : effectivePreset === "fast" ? "compact" : "standard";

  // Categorización automática del sitio
  if (inspection) {
    evidence.siteCategory = classifySiteCategory(inspection);
    log("info", "designAndFidelity", "Categoría del sitio: " + (evidence.siteCategory?.label || "unknown"));
  }

  return {};
}

async function runLlmInterpretation(ctx, config) {
  const { evidence, inspection, knowledgeMatrix, paths } = ctx.data;

  // LLM interpretation
  let llmInterpretation = null;
  if (process.env.ANTHROPIC_API_KEY || process.env.OPENROUTER_API_KEY) {
    config.onProgress?.({ step: "llm-interpret", message: "Interpretando evidencia con IA (visión multimodal)..." });
    try {
      llmInterpretation = await interpretWithLlm({
        evidence: inspection,
        niche: config.niche,
        knowledgeMatrix,
        screenshotsPath: paths.screenshotsPath
      });
    } catch (err) {
      log("error", "llmInterpreter", "Fallo interpretación LLM", { error: err.message });
      llmInterpretation = { used: false, reason: err.message };
    }
    if (llmInterpretation?.used) {
      evidence.llmInterpretation = llmInterpretation;
      log("info", "llmInterpreter", "Interpretación LLM completada", {
        provider: llmInterpretation.provider,
        confidence: llmInterpretation.confidence,
        multimodal: Boolean(llmInterpretation.visualDescription)
      });
    }
  }

  // Local LLM analysis
  try {
    const llmResult = await tryLocalLlm(buildLlmSummary(evidence));
    if (llmResult?.used) {
      evidence.llmAnalysis = llmResult.result;
    }
  } catch (err) {
    log("warn", "localLlm", "Fallo análisis LLM local", { error: err.message });
  }

  evidence.timings = { ...ctx.timings };
  return { llmInterpretation };
}

async function runSaveArtifacts(ctx, config) {
  const { evidence, paths } = ctx.data;
  const sanitizedEvidence = sanitizeEvidence(evidence);
  await saveEvidence(paths.runPath, sanitizedEvidence);
  await saveRunMeta(paths.runPath, sanitizedEvidence);

  pruneOldRuns(20).catch(err => console.error("pruneOldRuns error:", err));
  updateRunsIndex().catch(err => console.error("updateRunsIndex error:", err));

  return { artifactPath: paths.runPath, evidence };
}

async function runPackageContext(ctx, config) {
  const { evidence, paths } = ctx.data;
  try {
    const contextDir = await packageStructuredContext(evidence, paths.runPath, config.url, config.niche);
    if (contextDir) {
      log("info", "contextPackager", "Contexto estructurado generado en " + contextDir);
    }
  } catch (err) {
    log("warn", "contextPackager", "Fallo empaquetado de contexto estructurado", { error: err.message });
  }
  return {};
}

async function runGeneratePrompt(ctx, config) {
  const { evidence, inspection, motionAnalysis, conversionPlan, knowledgeMatrix, paths } = ctx.data;
  const llmInterpretation = evidence.llmInterpretation || null;

  config.onProgress?.({ step: "prompt", message: "Generando master prompt con evidencia quirurgica..." });
  const promptStart = Date.now();
  const masterPrompt = await generateMasterPrompt({
    url: config.url,
    niche: config.niche,
    inspection,
    motionAnalysis,
    conversionPlan,
    knowledgeMatrix,
    evidence,
    clientBrief: config.clientBrief || null,
    llmInterpretation
  });
  const promptMs = Date.now() - promptStart;
  log("info", "composeMegaBrief", "Master prompt generado en " + promptMs + "ms", {
    chars: typeof masterPrompt === "string" ? masterPrompt.length : 0
  });
  config.onProgress?.({ step: "prompt-done", message: "Master prompt listo (" + promptMs + "ms). Guardando artefactos..." });

  const saveStart = Date.now();
  await savePrompt(paths.runPath, masterPrompt, evidence, config.niche, config.url);
  log("info", "orchestrator", `Prompt guardado en ${Date.now() - saveStart}ms`);

  log("info", "orchestrator", "Extraccion completada", { path: paths.runPath, fidelity: evidence.fidelityScore?.overall });

  return masterPrompt;
}

async function runGenerateSite(ctx, config) {
  const { evidence, paths } = ctx.data;
  if (!config.generate) return {};

  config.onProgress?.({ step: "codegen", message: "Generando sitio desde IR..." });
  try {
    const site = generateFromIR(evidence, config.niche, config.url);
    if (site) {
      ctx.data.generatedSite = site;
      log("info", "codegen", "Sitio generado desde IR", { files: Object.keys(site).length });
    }
  } catch (err) {
    log("error", "codegen", "Fallo generación desde IR", { error: err.message });
    ctx.data.generatedSite = null;
  }
  return {};
}

async function runVerifyFidelity(ctx, config) {
  const { evidence } = ctx.data;
  if (!evidence) return {};

  config.onProgress?.({ step: "verify", message: "Calculando métricas de similitud visual..." });
  try {
    // Similitud 6D
    const similarity = computeVisualSimilarity(evidence);
    if (similarity) {
      evidence.similarityScore = similarity;
      log("info", "verify", "Similitud visual calculada", {
        overall: similarity.overall,
        dimensions: Object.keys(similarity.dimensions || {}).length,
        weak: (similarity.weakSections || []).length,
      });
    }

    // Loop de verificación (no bloqueante, solo informativo)
    if (config.verifyLoop !== false) {
      const loopResult = await runVerificationLoop(evidence, {
        onProgress: config.onProgress,
      });
      evidence.verificationLoop = loopResult;
      log("info", "verify", "Loop de verificación: " + (loopResult.success ? "PASÓ" : "NO PASÓ"), {
        iterations: loopResult.iterations,
        finalScore: loopResult.finalScore,
      });
    }
  } catch (err) {
    log("error", "verify", "Fallo cálculo de similitud", { error: err.message });
  }
  return {};
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
