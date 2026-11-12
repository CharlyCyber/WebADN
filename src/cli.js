#!/usr/bin/env node

import { runOrchestrator } from "./orchestrator.js";
import { loadLocalEnv } from "./support/env.js";
import { ensureDependencies } from "./support/autoInstall.js";

await ensureDependencies();

loadLocalEnv();

import { readFileSync } from "node:fs";
import { join } from "node:path";
import { RUNS_DIR } from "./support/artifacts.js";

const args = process.argv.slice(2);

// Subcomando: list
if (args[0] === "list") {
  try {
    const indexPath = join(RUNS_DIR, "index.json");
    const indexData = JSON.parse(readFileSync(indexPath, "utf8"));
    if (indexData.length === 0) {
      console.log("No runs found in history.");
    } else {
      console.table(indexData.map(r => ({
        "Domain": r.domain,
        "Niche": r.niche,
        "Date": new Date(r.date).toLocaleString(),
        "Fidelity Score": r.fidelityScore + "%",
        "Technologies": r.technologies.join(", ")
      })));
    }
  } catch (err) {
    console.error("Error listing runs:", err.message);
  }
  process.exit(0);
}

// Subcomando: mcp (servidor MCP por stdio para Claude Code, Cursor, etc.)
if (args[0] === "mcp") {
  const { startMcpServer } = await import("./mcp.js");
  await startMcpServer();
  await new Promise(() => {});
}

// Subcomando: compare --ref <referencia> --build <url>  → mide el build contra la referencia
if (args[0] === "compare" && args.some((a) => a === "--ref" || a === "--build")) {
  const get = (flag) => { const i = args.indexOf(flag); return i >= 0 ? args[i + 1] : undefined; };
  const ref = get("--ref"), buildUrl = get("--build");
  if (!ref || !buildUrl) {
    console.error("Uso: webadn compare --ref <url | fingerprint.json | carpeta kit | run> --build <url> [--ignore color,effects] [--depth fast|standard|surgical] [--out carpeta] [--json] [--min 85]");
    process.exit(1);
  }
  const { runCompare } = await import("./compare.js");
  try {
    const { report, markdown, outDir } = await runCompare({
      ref, buildUrl, outDir: get("--out"), depth: get("--depth"),
      ignore: (get("--ignore") || "").split(",").map((s) => s.trim()).filter(Boolean),
      onProgress: (p) => process.stderr.write(`· ${p.message}\n`)
    });
    process.stdout.write(args.includes("--json") ? JSON.stringify(report, null, 2) + "\n" : markdown);
    process.stderr.write(`\nInforme guardado en: ${outDir}\n`);
    const min = Number(get("--min"));
    process.exit(Number.isFinite(min) && min > 0 && report.score < min ? 2 : 0);
  } catch (err) {
    console.error("WebADN compare falló: " + err.message);
    process.exit(1);
  }
}

// Subcomando: compare <run1> <run2> (metadatos de dos extracciones)
if (args[0] === "compare") {
  const [run1Path, run2Path] = args.slice(1);
  if (!run1Path || !run2Path) {
    console.error("Usage: webadn compare <runFolder1> <runFolder2>");
    process.exit(1);
  }

  try {
    const r1 = JSON.parse(readFileSync(join(RUNS_DIR, run1Path, "evidence.json"), "utf8"));
    const r2 = JSON.parse(readFileSync(join(RUNS_DIR, run2Path, "evidence.json"), "utf8"));

    console.log("\n=== COMPARACION DE RUNS ===");
    console.table([
      {
        Metrica: "Sitio",
        "Run 1": r1.url,
        "Run 2": r2.url
      },
      {
        Metrica: "Fidelity Score",
        "Run 1": (r1.fidelityScore?.overall || 0) + "%",
        "Run 2": (r2.fidelityScore?.overall || 0) + "%"
      },
      {
        Metrica: "Nicho",
        "Run 1": r1.niche,
        "Run 2": r2.niche
      },
      {
        Metrica: "Tecnologias",
        "Run 1": (r1.inspection?.technologies || []).join(", ") || "Ninguna",
        "Run 2": (r2.inspection?.technologies || []).join(", ") || "Ninguna"
      },
      {
        Metrica: "Secciones",
        "Run 1": (r1.inspection?.sections || []).length,
        "Run 2": (r2.inspection?.sections || []).length
      },
      {
        Metrica: "Metricas CDP LCP",
        "Run 1": r1.inspection?.performanceMetrics?.LCP ? r1.inspection.performanceMetrics.LCP + "s" : "N/A",
        "Run 2": r2.inspection?.performanceMetrics?.LCP ? r2.inspection.performanceMetrics.LCP + "s" : "N/A"
      }
    ]);
  } catch (err) {
    console.error("Error comparing runs:", err.message);
  }
  process.exit(0);
}

const options = parseArgs(args);

if (options.help) {
  printHelp();
  process.exit(0);
}

if (!options.url || !options.niche) {
  printHelp();
  process.exitCode = 1;
  process.exit();
}

console.warn('⚠️  AVISO LEGAL: WebADN extrae datos públicos para fines de análisis. El usuario es responsable del uso legal de los sitios generados y del respeto a derechos de autor de las referencias.');

const outputFormat = options.output || "markdown";

runOrchestrator({
  url: options.url,
  niche: options.niche,
  videoPath: options.video,
  dryRun: options.dryRun,
  force: options.force,
  ignoreRobots: options.ignoreRobots,
  headless: String(options.headless).toLowerCase() !== "false",
  timeoutMs: Number(options.timeout),
  preset: options.preset || "standard",
  cro: options.cro !== false,
  generate: options.generate === true,
})
  .then((result) => {
    const output = formatOutput(result, outputFormat);
    process.stdout.write(output + "\n");
    if (result.artifactPath) {
      process.stderr.write("\nArtifacts saved to: " + result.artifactPath + "\n");
    }
    if (result.kit?.path) {
      process.stderr.write("Build kit (PROMPT.md + spec.json + fingerprint.json): " + result.kit.path + "\n");
      process.stderr.write("Verifica tu build con: webadn compare --ref \"" + result.kit.path + "\" --build http://localhost:5173\n");
    }
  })
  .catch((error) => {
    console.error("WebADN extraction failed: " + error.message);
    if (process.env.DEBUG) {
      console.error(error);
    }
    process.exitCode = 1;
  })
  .finally(async () => {
    // Cierra los navegadores del pool: sin esto el proceso queda vivo tras terminar.
    const { drainBrowserPool } = await import("./support/browserPool.js");
    await drainBrowserPool();
  });

function parseArgs(args) {
  const parsed = {
    dryRun: false,
    force: false,
    ignoreRobots: false,
    headless: process.env.HEADLESS ?? "true",
    timeout: process.env.SCRAPER_TIMEOUT_MS ?? "30000"
  };

  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];
    const next = args[index + 1];

    if (arg === "--help" || arg === "-h") parsed.help = true;
    else if (arg === "--dry-run") parsed.dryRun = true;
    else if (arg === "--force" || arg === "-f") parsed.force = true;
    else if (arg === "--ignore-robots") parsed.ignoreRobots = true;
    else if (arg === "--no-cro") parsed.cro = false;
    else if (arg === "--generate") parsed.generate = true;
    else if ((arg === "--url" || arg === "-u") && next) parsed.url = args[++index];
    else if ((arg === "--niche" || arg === "-n") && next) parsed.niche = args[++index];
    else if ((arg === "--video" || arg === "-v") && next) parsed.video = args[++index];
    else if ((arg === "--preset" || arg === "-p") && next) parsed.preset = args[++index];
    else if ((arg === "--output" || arg === "-o") && next) parsed.output = args[++index];
    else if (arg === "--headless" && next) parsed.headless = args[++index];
    else if (arg === "--timeout" && next) parsed.timeout = args[++index];
    else if (arg === "--download-binaries") parsed.downloadBinaries = true;
  }

  return parsed;
}

function printHelp() {
  process.stdout.write("WebADN Surgical Extractor & Context Engine\n\nUsage:\n  node ./src/cli.js --url <url> --niche <niche> [--video <path>] [--dry-run] [--output <format>]\n\nOptions:\n  -u, --url       Reference URL to inspect\n  -n, --niche     Business niche to adapt the design into\n  -v, --video     Optional UI/UX motion reference video\n  -o, --output    Output format: markdown (default, kit prompt), brief (legacy mega-brief), json, html\n      --dry-run   Skip live scraping and use a deterministic local sample\n      --headless  Run browser in headless mode, default true\n      --timeout   Scraper timeout in milliseconds\n      --ignore-robots   Skip robots.txt verification (only if you have owner permission)\n      --force, -f       Ignore recent run cache\n      --download-binaries Enable download of image/font assets (legal warning)\n      --no-cro    Disable CRO block injection (preserve reference section order)\n      --generate  Generate HTML/CSS/JS directly from extracted data (bypass prompt)\n\nSubcommands:\n  compare --ref <url|fingerprint.json|kit|run> --build <url>   Measure a build against the reference (0-100 + fix list)\n  mcp                                                           Start the MCP server (stdio) for Claude Code / Cursor\n  list                                                          List previous runs\n");
}

function formatOutput(result, format) {
  if (format === "json") {
    return JSON.stringify({
      prompt: result.prompt,
      artifactPath: result.artifactPath,
      fidelityScore: result.fidelityScore,
      evidence: result.evidence
    }, null, 2);
  }
  
  if (format === "html") {
    return generateHtmlViewer(result);
  }
  
  if (format === "brief") return result.prompt;

  // Default: el prompt del kit (medido); si no hay kit (modo demo), el brief clásico.
  return result.kit?.prompt || result.prompt;
}

function generateHtmlViewer(result) {
  const { prompt, fidelityScore, evidence } = result;
  const score = fidelityScore?.overall || 0;
  const scoreColor = score >= 80 ? "#22c55e" : score >= 50 ? "#eab308" : "#ef4444";
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Extraction Brief - ${evidence?.url || "Unknown"}</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: system-ui, -apple-system, sans-serif; line-height: 1.6; max-width: 1200px; margin: 0 auto; padding: 2rem; background: #fafafa; color: #1a1a1a; }
    header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 2rem; border-radius: 12px; margin-bottom: 2rem; }
    h1 { font-size: 2rem; margin-bottom: 0.5rem; }
    .meta { display: flex; gap: 2rem; flex-wrap: wrap; }
    .meta-item { background: rgba(255,255,255,0.2); padding: 0.5rem 1rem; border-radius: 6px; }
    .score-badge { display: inline-block; padding: 0.25rem 0.75rem; border-radius: 999px; font-weight: bold; background: ${scoreColor}; color: white; }
    .section { background: white; padding: 1.5rem; margin-bottom: 1.5rem; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
    .section h2 { color: #667eea; border-bottom: 2px solid #eee; padding-bottom: 0.5rem; margin-bottom: 1rem; }
    pre { background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 6px; overflow-x: auto; }
    code { font-family: 'JetBrains Mono', 'Fira Code', monospace; font-size: 0.9rem; }
    .highlight { background: #fef3c7; padding: 0.25rem 0.5rem; border-radius: 3px; }
    .warning { background: #fef3c7; border-left: 4px solid #eab308; padding: 1rem; margin: 1rem 0; }
    .error { background: #fee2e2; border-left: 4px solid #ef4444; padding: 1rem; margin: 1rem 0; }
    footer { text-align: center; padding: 2rem; color: #666; font-size: 0.9rem; }
  </style>
</head>
<body>
  <header>
    <h1>WebADN Extraction Brief</h1>
    <div class="meta">
      <span class="meta-item">📍 ${evidence?.url || "N/A"}</span>
      <span class="meta-item">🏷️ Niche: ${evidence?.niche || "N/A"}</span>
      <span class="meta-item">📊 Fidelity: <span class="score-badge">${score}%</span></span>
      <span class="meta-item">📅 ${new Date().toLocaleDateString()}</span>
    </div>
  </header>
  
  <main>
    <div class="section">
      <h2>📋 Master Prompt</h2>
      <pre><code>${escapeHtml(prompt)}</code></pre>
    </div>
    
    ${evidence?.inspection?.technologies?.length ? `
    <div class="section">
      <h2>🛠️ Technologies Detected</h2>
      <ul>${evidence.inspection.technologies.map(t => `<li><span class="highlight">${escapeHtml(t)}</span></li>`).join("")}</ul>
    </div>
    ` : ""}
    
    ${evidence?.llmInterpretation?.used ? `
    <div class="section">
      <h2>🤖 AI Interpretation (${evidence.llmInterpretation.provider})</h2>
      <p>${escapeHtml(evidence.llmInterpretation.interpretation || "")}</p>
      ${evidence.llmInterpretation.patterns?.length ? `<h3>Inferred Patterns</h3><ul>${evidence.llmInterpretation.patterns.map(p => `<li>${escapeHtml(p)}</li>`).join("")}</ul>` : ""}
      ${evidence.llmInterpretation.gaps?.length ? `<h3>Extraction Gaps</h3><ul>${evidence.llmInterpretation.gaps.map(g => `<li>${escapeHtml(g)}</li>`).join("")}</ul>` : ""}
    </div>
    ` : ""}
  </main>
  
    <footer>
    Generated by WebADN Surgical Extractor &bull; ${new Date().toISOString()}
  </footer>
</body>
</html>`;
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}