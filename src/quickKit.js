// Extracción ligera para el dashboard: solo la sonda de huella + el kit.
// No ejecuta el pipeline clásico (scraper, brief largo, etc.), así que usa un único
// navegador, tarda menos y consume menos memoria: es lo que permite alojarlo en
// instancias pequeñas. El CLI sigue usando el pipeline completo.

import { readFile, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { basename, join } from "node:path";
import { captureFingerprint, FINGERPRINT_VERSION } from "./modules/siteProbe.js";
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
/** Limpia el texto de un documento del cliente antes de meterlo en el prompt. */
export function cleanDocument(text, max = 12000) {
  const clean = String(text ?? "")
    .replace(/<\/?documento_del_negocio>/gi, "")
    .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g, " ")
    .replace(/\r\n?/g, "\n")
    .replace(/[ \t]+/g, " ")
    .replace(/ ?\n ?/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
  return clean.length > max ? clean.slice(0, max) + "\n[… documento recortado]" : clean;
}

export const DOCUMENT_NICHE = "el negocio descrito en el documento adjunto";

/**
 * El nicho, las notas y el documento solo alimentan el prompt: la medición de la
 * referencia es idéntica sea cual sea el negocio.
 * @param {{url:string, niche?:string, document?:string, documentName?:string, preset?:string, notes?:string, ignoreRobots?:boolean, force?:boolean, timeoutMs?:number, onProgress?:Function}} config
 */
export async function runQuickKit(config) {
  const preset = config.preset || "standard";
  const document = cleanDocument(config.document);
  const niche = String(config.niche || "").trim() || (document ? DOCUMENT_NICHE : "");
  if (!niche) throw new Error("Indica tu nicho o adjunta un documento con la información del negocio.");
  const briefKey = `${niche}|${config.notes || ""}|${document ? createHash("sha1").update(document).digest("hex").slice(0, 12) : ""}`;
  // La versión de la sonda forma parte de la clave de caché: si cambia el
  // algoritmo de medición, no se reutiliza un kit generado con el anterior.
  const cachePreset = `quick-${preset}-v${FINGERPRINT_VERSION}`;
  const progress = (step, message) => config.onProgress?.({ step, message });

  if (!config.force) {
    const recent = await findRecentRun(config.url, briefKey, cachePreset, 120);
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

  const paths = createRunFolder(config.url, briefKey, cachePreset);
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
    runPath: paths.runPath, fingerprint, niche, url: config.url,
    clientBrief: config.notes || document
      ? { extra: config.notes || "", document, documentName: String(config.documentName || "").replace(/[^\p{L}\p{N} ._()-]/gu, "").slice(0, 80) }
      : null,
  });
  await Promise.all([
    writeFile(join(paths.runPath, "run.json"), JSON.stringify({ url: config.url, niche, generatedAt, fidelityScore: 0, technologies: [] })),
    // prompt.md marca el run como completo para la caché de extracciones recientes.
    writeFile(join(paths.runPath, "prompt.md"), kit.prompt),
  ]);
  await pruneOldRuns(Number(process.env.MAX_RUNS) || 20).catch(() => {});
  await updateRunsIndex();
  log("info", "quickKit", "Kit generado", { run: paths.runName, errors: fingerprint.errors?.length || 0 });
  return { run: paths.runName, url: config.url, niche, generatedAt, prompt: kit.prompt, fingerprint };
}
