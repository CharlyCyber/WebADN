#!/usr/bin/env node

import { runOrchestrator } from "./orchestrator.js";
import { loadLocalEnv } from "./support/env.js";

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

// Subcomando: compare
if (args[0] === "compare") {
  const [run1Path, run2Path] = args.slice(1);
  if (!run1Path || !run2Path) {
    console.error("Usage: surgical-extractor compare <runFolder1> <runFolder2>");
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

runOrchestrator({
  url: options.url,
  niche: options.niche,
  videoPath: options.video,
  dryRun: options.dryRun,
  force: options.force,
  ignoreRobots: options.ignoreRobots,
  headless: String(options.headless).toLowerCase() !== "false",
  timeoutMs: Number(options.timeout),
  preset: options.preset || "standard"
})
  .then((result) => {
    process.stdout.write(result.prompt + "\n");
    if (result.artifactPath) {
      process.stderr.write("\nArtifacts saved to: " + result.artifactPath + "\n");
    }
  })
  .catch((error) => {
    console.error("Extractor failed: " + error.message);
    if (process.env.DEBUG) {
      console.error(error);
    }
    process.exitCode = 1;
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
    else if ((arg === "--url" || arg === "-u") && next) parsed.url = args[++index];
    else if ((arg === "--niche" || arg === "-n") && next) parsed.niche = args[++index];
    else if ((arg === "--video" || arg === "-v") && next) parsed.video = args[++index];
    else if ((arg === "--preset" || arg === "-p") && next) parsed.preset = args[++index];
    else if (arg === "--headless" && next) parsed.headless = args[++index];
    else if (arg === "--timeout" && next) parsed.timeout = args[++index];
  }

  return parsed;
}

function printHelp() {
  process.stdout.write("Surgical Web Extractor & Prompt Engine\n\nUsage:\n  node ./src/cli.js --url <url> --niche <niche> [--video <path>] [--dry-run]\n\nOptions:\n  -u, --url       Reference URL to inspect\n  -n, --niche     Business niche to adapt the design into\n  -v, --video     Optional UI/UX motion reference video\n      --dry-run   Skip live scraping and use a deterministic local sample\n      --headless  Run browser in headless mode, default true\n      --timeout   Scraper timeout in milliseconds\n      --ignore-robots   Skip robots.txt verification (only if you have owner permission)\n      --force, -f       Ignore recent run cache\n");
}