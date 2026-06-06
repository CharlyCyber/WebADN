import { mkdir, writeFile } from "node:fs/promises";
import { readdirSync, statSync, existsSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const RUNS_DIR = fileURLToPath(new URL("../../runs", import.meta.url));

export function createRunFolder(url) {
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
  const hrSuffix = process.hrtime.bigint().toString().slice(-6);
  const domain = new URL(url).hostname.replace(/[^a-z0-9.-]/gi, "_");
  const runName = `${timestamp}-${hrSuffix}-${domain}`;
  const runPath = join(RUNS_DIR, runName);
  const screenshotsPath = join(runPath, "screenshots");
  const tracesPath = join(runPath, "traces");

  return { runPath, screenshotsPath, tracesPath, runName };
}

export function findRecentRun(url, maxAgeMinutes = 120) {
  try {
    const domain = new URL(url).hostname.replace(/[^a-z0-9.-]/gi, "_");
    
    // Crear el directorio runs si no existe para evitar excepciones
    try {
      readdirSync(RUNS_DIR);
    } catch {
      return null;
    }

    const entries = readdirSync(RUNS_DIR)
      .filter(d => d.includes(domain))
      .map(d => {
        try {
          const stats = statSync(join(RUNS_DIR, d));
          return { name: d, mtime: stats.mtime, isDirectory: stats.isDirectory() };
        } catch {
          return null;
        }
      })
      .filter(Boolean)
      .filter(entry => entry.isDirectory)
      .sort((a, b) => b.mtime.getTime() - a.mtime.getTime());

    if (!entries.length) return null;
    
    const newest = entries[0];
    const ageMs = Date.now() - newest.mtime.getTime();
    if (ageMs < maxAgeMinutes * 60_000) {
      const targetPath = join(RUNS_DIR, newest.name);
      if (existsSync(join(targetPath, "prompt.md"))) {
        return targetPath;
      }
    }
  } catch (err) {
    console.error("Error finding recent run:", err);
  }
  return null;
}

export async function ensureRunFolders(paths) {
  await mkdir(paths.runPath, { recursive: true });
  await mkdir(paths.screenshotsPath, { recursive: true });
  await mkdir(paths.tracesPath, { recursive: true });
  return paths;
}

export async function saveEvidence(runPath, evidence) {
  const replacer = (key, value) => {
    if (Buffer.isBuffer(value)) return `[Buffer:${value.length}b]`;
    if (typeof value === "string" && value.length > 100_000) return value.slice(0, 1000) + "...[truncated]";
    return value;
  };
  const json = JSON.stringify(evidence, replacer, 2);
  console.log("[artifacts] saveEvidence: " + (json.length / 1024 / 1024).toFixed(2) + " MB");
  const filePath = join(runPath, "evidence.json");
  await writeFile(filePath, json, "utf8");
  console.log("[artifacts] saveEvidence: OK");
  return filePath;
}

export async function savePrompt(runPath, prompt, evidence, niche, url) {
  const sanitized = sanitizePrompt(prompt);
  const filePath = join(runPath, "prompt.md");
  await writeFile(filePath, sanitized, "utf8");

  const compactPrompt = buildCompactPrompt(sanitized, evidence, niche, url);
  const compactPath = join(runPath, "prompt.compact.md");
  await writeFile(compactPath, compactPrompt, "utf8");

  const structured = parsePromptSections(sanitized);
  const jsonPath = join(runPath, "prompt.json");
  await writeFile(jsonPath, JSON.stringify(structured), "utf8");

  return filePath;
}

function sanitizePrompt(text) {
  if (!text) return "";
  return text
    .replace(/([?&])(token|key|signature|auth|api_key|secret|password|passwd|pass)=[^&\s"']*/gi, "$1$2=REDACTED")
    .replace(/Bearer\s+[A-Za-z0-9._-]{20,}/g, "Bearer [REDACTED]");
}

export function buildCompactPrompt(fullText, evidence, niche, url) {
  const insp = evidence?.inspection || {};
  const tok = insp.tokens || {};
  const recipes = insp.motionRecipes || [];
  const sections = insp.sections || [];
  const colors = (tok.colors || []).slice(0, 6).join(", ");
  const fonts = (tok.fonts || []).slice(0, 3).join(" | ");
  const cssVars = Object.entries(tok.cssVariables || {}).slice(0, 10);
  const finalPrompt = extractFinalPrompt(fullText);

  const parts = [];

  if (finalPrompt) {
    parts.push(finalPrompt);
  } else {
    parts.push(`# Compact Surgical Prompt\n\nBuild an evidence-matched site for niche: "${niche}".\nReference: ${url}\nEvery visual, motion, typography, and layout decision must map to extracted evidence. Do not invent a generic landing page.\n`);
  }

  const tokenBlock = ["## Design Tokens"];
  if (colors) tokenBlock.push(`- Colors: ${colors}`);
  if (fonts) tokenBlock.push(`- Fonts: ${fonts}`);
  if (cssVars.length) {
    tokenBlock.push("- CSS Variables:");
    for (const [k, v] of cssVars) tokenBlock.push(`  ${k}: ${v}`);
  }
  parts.push(tokenBlock.join("\n"));

  if (recipes.length > 0) {
    const gsapBlock = ["## GSAP Recipes"];
    for (const r of recipes.slice(0, 4)) {
      const range = r.range || "0-100%";
      if (r.type === "scroll-parallax") {
        gsapBlock.push(`- \`${r.target}\`: gsap parallax, y:${r.yDelta || -100}, range ${range}, scrub`);
      } else if (r.type === "sticky-pin") {
        gsapBlock.push(`- \`${r.target}\`: sticky pin, range ${range}, ScrollTrigger pin`);
      } else if (r.type === "scroll-fade") {
        gsapBlock.push(`- \`${r.target}\`: fade ${r.opacityRange || "0->1"}, range ${range}`);
      } else {
        gsapBlock.push(`- \`${r.target}\`: ${r.type} (range ${range})`);
      }
    }
    parts.push(gsapBlock.join("\n"));
  }

  if (sections.length > 0) {
    const sectBlock = ["## Section Skeleton"];
    for (const s of sections.slice(0, 6)) {
      const cls = insp.sectionStructure?.[sections.indexOf(s)]?.classList || "";
      sectBlock.push(`- ${s.role.toUpperCase()}: <${s.tag}> ${cls ? `[.${cls}]` : ""} ${s.isFullViewport ? "100vh" : ""}`);
    }
    parts.push(sectBlock.join("\n"));
  }

  let result = parts.join("\n\n---\n\n");
  if (result.length > 12000) {
    result = result.slice(0, 11500) + "\n\n*[truncated for size — see prompt.md for full]*\n";
  }

  return result;
}

function extractFinalPrompt(text) {
  if (!text || typeof text !== "string") return null;
  if (!text.includes("# 15. Final Agent Prompt")) return null;
  const match = text.match(/# 15\. Final Agent Prompt[\s\S]*?(?=\n#\s+\d|$)/);
  if (match) return match[0].trim();
  const matchAlt = text.match(/# 15\. Final Agent Prompt[\s\S]*/);
  if (matchAlt) return matchAlt[0].trim();
  return null;
}

function parsePromptSections(text) {
  const sections = {};
  if (!text || typeof text !== "string") return sections;
  const regex = /#\s+([^#\n\r]+)/g;
  let match;
  let lastIndex = 0;
  let currentHeader = null;

  const contentMap = {
    "1. Executive": "diagnosis",
    "2. Reference": "dna",
    "3. Design": "tokens",
    "4. CSS": "css",
    "5. Component": "components",
    "6. Section": "sectionsSpec",
    "7. Motion": "motion",
    "8. Interaction": "interactions",
    "9. Asset": "assets",
    "10. Responsive": "responsive",
    "11. CRO": "cro",
    "12. Performance": "performance",
    "13. Accessibility": "accessibility",
    "14. Acceptance": "criteria",
    "15. Final": "finalPrompt",
  };

  while ((match = regex.exec(text)) !== null) {
    if (currentHeader) {
      const sectContent = text.slice(lastIndex, match.index).trim();
      const key = Object.keys(contentMap).find(k => currentHeader.startsWith(k));
      if (key) {
        sections[contentMap[key]] = `# ${currentHeader}\n\n${sectContent}`;
      } else {
        sections[currentHeader.replace(/[^a-z0-9]/gi, "_")] = `# ${currentHeader}\n\n${sectContent}`;
      }
    } else {
      sections["title"] = text.slice(0, match.index).trim();
    }
    currentHeader = match[1].trim();
    lastIndex = match.index + match[0].length;
  }

  if (currentHeader) {
    const sectContent = text.slice(lastIndex).trim();
    const key = Object.keys(contentMap).find(k => currentHeader.startsWith(k));
    if (key) {
      sections[contentMap[key]] = `# ${currentHeader}\n\n${sectContent}`;
    } else {
      sections[currentHeader.replace(/[^a-z0-9]/gi, "_")] = `# ${currentHeader}\n\n${sectContent}`;
    }
  }

  return sections;
}

export async function saveTrace(runPath, name, data) {
  const filePath = join(runPath, "traces", name);
  await writeFile(filePath, typeof data === "string" ? data : JSON.stringify(data, null, 2), "utf8");
  return filePath;
}

export async function pruneOldRuns(maxRuns = 20) {
  try {
    const entries = readdirSync(RUNS_DIR)
      .map(d => {
        try {
          const stats = statSync(join(RUNS_DIR, d));
          return { name: d, mtime: stats.mtime, isDirectory: stats.isDirectory() };
        } catch {
          return null;
        }
      })
      .filter(Boolean)
      .filter(entry => entry.isDirectory)
      .sort((a, b) => a.mtime.getTime() - b.mtime.getTime());

    if (entries.length > maxRuns) {
      const toRemove = entries.slice(0, entries.length - maxRuns);
      const { rm } = await import("node:fs/promises");
      for (const entry of toRemove) {
        try {
          await rm(join(RUNS_DIR, entry.name), { recursive: true, force: true });
          console.log(`LRU Pruned: run antiguo eliminado: ${entry.name}`);
        } catch (err) {
          console.error(`Error pruning run ${entry.name}:`, err);
        }
      }
    }
  } catch (err) {
    console.error("Error in pruneOldRuns:", err);
  }
}

export async function saveRunMeta(runPath, evidence) {
  const meta = {
    url: evidence.url,
    niche: evidence.niche,
    generatedAt: evidence.generatedAt,
    fidelityScore: evidence.fidelityScore?.overall || 0,
    technologies: (evidence.inspection?.technologies || []).slice(0, 5),
  };
  await writeFile(join(runPath, "run.json"), JSON.stringify(meta), "utf8");
}

export async function updateRunsIndex() {
  try {
    const { readdir, readFile, writeFile, stat } = await import("node:fs/promises");
    const dirEntries = await readdir(RUNS_DIR);
    const entries = [];
    for (const d of dirEntries) {
      try {
        const fullPath = join(RUNS_DIR, d);
        const stats = await stat(fullPath);
        if (stats.isDirectory()) {
          entries.push({ name: d, mtime: stats.mtime });
        }
      } catch {
        // ignorar entradas inaccesibles
      }
    }
    entries.sort((a, b) => b.mtime.getTime() - a.mtime.getTime());

    const runs = [];
    for (const entry of entries) {
      try {
        const entryPath = join(RUNS_DIR, entry.name);
        const metaPath = join(entryPath, "run.json");
        const evidencePath = join(entryPath, "evidence.json");

        try {
          const metaRaw = await readFile(metaPath, "utf8");
          const meta = JSON.parse(metaRaw);
          runs.push({
            path: entry.name,
            domain: new URL(meta.url).hostname,
            url: meta.url,
            date: meta.generatedAt || entry.mtime.toISOString(),
            fidelityScore: meta.fidelityScore || 0,
            niche: meta.niche,
            technologies: meta.technologies || [],
          });
        } catch {
          try {
            const evRaw = await readFile(evidencePath, "utf8");
            const ev = JSON.parse(evRaw);
            runs.push({
              path: entry.name,
              domain: new URL(ev.url).hostname,
              url: ev.url,
              date: ev.generatedAt || entry.mtime.toISOString(),
              fidelityScore: ev.fidelityScore?.overall || 0,
              niche: ev.niche,
              technologies: ev.inspection?.technologies?.slice(0, 5) || [],
            });
          } catch {
            // run sin metadatos válidos
          }
        }
      } catch {
        // Ignorar runs corruptos
      }
    }

    await writeFile(join(RUNS_DIR, "index.json"), JSON.stringify(runs, null, 2), "utf8");
  } catch (err) {
    console.error("Error in updateRunsIndex:", err);
  }
}

export { RUNS_DIR };

