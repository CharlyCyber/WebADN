// Flujo de comparación: resuelve la referencia, mide el build, compara y guarda el informe.

import { mkdir, stat, writeFile } from "node:fs/promises";
import { basename, dirname, isAbsolute, join, resolve } from "node:path";
import { captureFingerprint, loadFingerprint } from "./modules/siteProbe.js";
import { compareFingerprints, renderReportMarkdown } from "./modules/fingerprintCompare.js";
import { KIT_DIR } from "./modules/buildKit.js";
import { RUNS_DIR } from "./support/artifacts.js";
import { launchBrowser } from "./support/launchBrowser.js";

const isUrl = (s) => /^https?:\/\//i.test(s);

/** Acepta: URL, ruta a fingerprint.json/spec.json, carpeta de kit, carpeta de run o nombre de run. */
export async function resolveReference(ref) {
  if (isUrl(ref)) return { kind: "url", url: ref };
  const candidates = [];
  const base = isAbsolute(ref) ? ref : resolve(process.cwd(), ref);
  for (const root of [base, join(RUNS_DIR, ref)]) {
    candidates.push(root, join(root, "fingerprint.json"), join(root, KIT_DIR, "fingerprint.json"));
  }
  for (const path of candidates) {
    try {
      const st = await stat(path);
      if (st.isFile()) {
        const runPath = basename(dirname(path)) === KIT_DIR ? dirname(dirname(path)) : null;
        return { kind: "file", path, runPath };
      }
    } catch { /* siguiente */ }
  }
  throw new Error(`No encuentro la referencia "${ref}". Usa una URL, un fingerprint.json, la carpeta del kit o el nombre de un run.`);
}

/**
 * @param {{ref:string, buildUrl:string, outDir?:string, depth?:string, ignore?:string[], viewports?:string[], browser?:any, onProgress?:Function}} opts
 */
export async function runCompare(opts) {
  if (!opts.buildUrl || !isUrl(opts.buildUrl)) throw new Error("Falta la URL del build (http://… o https://…).");
  const source = await resolveReference(opts.ref);
  const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
  const outDir = opts.outDir || (source.runPath ? join(source.runPath, "compares", stamp) : join(RUNS_DIR, `compare-${stamp}`));
  const shotsDir = source.runPath ? join(source.runPath, "screenshots") : join(outDir, "screenshots");
  const buildPrefix = `build-${stamp}-`;
  await mkdir(outDir, { recursive: true });

  const ownBrowser = !opts.browser;
  const browser = opts.browser || (await launchBrowser());
  try {
    let reference;
    if (source.kind === "url") {
      opts.onProgress?.({ step: "probe-reference", message: "Midiendo la referencia..." });
      reference = await captureFingerprint({ url: source.url, browser, shotsDir, prefix: "ref-", depth: opts.depth, viewports: opts.viewports, onProgress: opts.onProgress });
      await writeFile(join(outDir, "reference.fingerprint.json"), JSON.stringify(reference));
    } else {
      reference = await loadFingerprint(source.path);
    }
    opts.onProgress?.({ step: "probe-build", message: "Midiendo tu build..." });
    const build = await captureFingerprint({
      url: opts.buildUrl, browser, shotsDir, prefix: buildPrefix, depth: opts.depth || reference.depth,
      viewports: opts.viewports || Object.keys(reference.viewports), onProgress: opts.onProgress,
    });
    opts.onProgress?.({ step: "compare", message: "Comparando..." });
    const report = compareFingerprints(reference, build, { ignore: opts.ignore || [] });
    const markdown = renderReportMarkdown(report);
    await Promise.all([
      writeFile(join(outDir, "report.json"), JSON.stringify(report, null, 1)),
      writeFile(join(outDir, "REPORT.md"), markdown),
      writeFile(join(outDir, "build.fingerprint.json"), JSON.stringify(build)),
    ]);
    return { report, markdown, outDir, shotsDir };
  } finally {
    if (ownBrowser) await browser.close().catch(() => {});
  }
}
