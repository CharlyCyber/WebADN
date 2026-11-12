// Extracción ligera para el dashboard: solo la sonda de huella + el kit.
// No ejecuta el pipeline clásico (scraper, brief largo, etc.), así que usa un único
// navegador, tarda menos y consume menos memoria: es lo que permite alojarlo en
// instancias pequeñas. El CLI sigue usando el pipeline completo.

import { readFile, writeFile } from "node:fs/promises";
import { basename, join } from "node:path";
import { captureFingerprint } from "./modules/siteProbe.js";
import { writeKit, KIT_DIR, REF_SHOT_PREFIX } from "./modules/buildKit.js";
import { createRunFolder, ensureRunFolders, findRecentRun, pruneOldRuns, updateRunsIndex, RUNS_DIR } from "./support/artifacts.js";
import { checkRobotsTxt } from "./support/robotsChecker.js";
import { launchBrowser } from "./support/launchBrowser.js";
import { log } from "./support/logger.js";

/** Lee un run guardado en el formato que consume el dashboard. */
export async function loadRun(run) {
  const runPath = join(RUNS_DIR, run);
  const prompt = await readFile(join(runPath, KIT_DIR, "PROMPT.md"), "utf8");
  const fingerprint = JSON.parse(await readFile(join(runPath, KIT_DIR, "fingerprint.json"), "utf8"));
  let meta = {};
  try { meta = JSON.parse(await readFile(join(runPath, "run.json"), "utf8")); } catch { /* run antiguo */ }
  return { run, url: meta.url || fingerprint.url, niche: meta.niche || "", generatedAt: meta.generatedAt || fingerprint.capturedAt, prompt, fingerprint };
}

/**
 * @param {{url:string, niche:string, preset?:string, notes?:string, ignoreRobots?:boolean, force?:boolean, timeoutMs?:number, onProgress?:Function}} config
 */
export async function runQuickKit(config) {
  const preset = config.preset || "standard";
  const progress = (step, message) => config.onProgress?.({ step, message });

  if (!config.force) {
    const recent = await findRecentRun(config.url, `${config.niche}|${config.notes || ""}`, `quick-${preset}`, 120);
    if (recent) {
      try {
        progress("cache", "Extracción reciente encontrada.");
        return await loadRun(basename(recent));
      } catch { /* caché incompleta: se vuelve a medir */ }
    }
  }

  if (!config.ignoreRobots) {
    let robots = { allowed: true };
    try { robots = await checkRobotsTxt(config.url); } catch { /* sin robots.txt accesible: se continúa */ }
    if (!robots.allowed) throw new Error(`${robots.reason || "robots.txt no permite analizar este sitio"}.`);
  }

  const paths = createRunFolder(config.url, `${config.niche}|${config.notes || ""}`, `quick-${preset}`);
  await ensureRunFolders(paths);

  progress("browser", "Abriendo el navegador de medición...");
  const browser = await launchBrowser();
  let fingerprint;
  try {
    fingerprint = await captureFingerprint({
      url: config.url, browser, shotsDir: paths.screenshotsPath, prefix: REF_SHOT_PREFIX, depth: preset,
      timeoutMs: Math.max(30000, Number(config.timeoutMs) || 45000), onProgress: config.onProgress,
    });
  } finally {
    await browser.close().catch(() => {});
  }
  if (!Object.keys(fingerprint.viewports || {}).length) {
    throw new Error(`No se pudo medir el sitio: ${(fingerprint.errors || []).join("; ") || "no cargó"}`);
  }

  progress("kit", "Escribiendo el kit...");
  const generatedAt = new Date().toISOString();
  const kit = await writeKit({
    runPath: paths.runPath, fingerprint, niche: config.niche, url: config.url,
    clientBrief: config.notes ? { extra: config.notes } : null,
  });
  await Promise.all([
    writeFile(join(paths.runPath, "run.json"), JSON.stringify({ url: config.url, niche: config.niche, generatedAt, fidelityScore: 0, technologies: [] })),
    // prompt.md marca el run como completo para la caché de extracciones recientes.
    writeFile(join(paths.runPath, "prompt.md"), kit.prompt),
  ]);
  await pruneOldRuns(Number(process.env.MAX_RUNS) || 20).catch(() => {});
  await updateRunsIndex();
  log("info", "quickKit", "Kit generado", { run: paths.runName, errors: fingerprint.errors?.length || 0 });
  return { run: paths.runName, url: config.url, niche: config.niche, generatedAt, prompt: kit.prompt, fingerprint };
}
