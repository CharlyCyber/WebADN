import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, resolve, normalize, relative as pathRelative, isAbsolute } from "node:path";
import { fileURLToPath } from "node:url";
import { runOrchestrator } from "./orchestrator.js";
import { PersistentJobQueue } from "./support/persistentJobQueue.js";
import { isSafeUrl } from "./support/urlSafety.js";
import { loadLocalEnv } from "./support/env.js";
import { RUNS_DIR } from "./support/artifacts.js";
import { ensureDependencies } from "./support/autoInstall.js";

// Inicializar dependencias y variables de entorno local
await ensureDependencies();
loadLocalEnv();

const PORT = Number(process.env.PORT || 4173);
// 🔑 Cambiamos default de 127.0.0.1 → 0.0.0.0 para que el SaaS sea accesible publico.
const HOST = process.env.HOST || "0.0.0.0";
const MAX_CONCURRENT = Number(process.env.MAX_CONCURRENT || 2);
const MAX_QUEUE = Number(process.env.MAX_QUEUE || 50);
const AUTH_TOKEN = process.env.AUTH_TOKEN || "";
const TRUST_PROXY = String(process.env.TRUST_PROXY || "false").toLowerCase() === "true";
const PUBLIC_DIR = fileURLToPath(new URL("../public", import.meta.url));

// ───── Job Queue ─────────────────────────────────────────
const queue = new PersistentJobQueue({
  dbPath: process.env.JOBS_DB_PATH || "./data/jobs.db",
  concurrency: MAX_CONCURRENT,
  maxQueue: MAX_QUEUE
});

queue.registerHandler("extract", async (payload, ctx) => {
  const result = await runOrchestrator({
    ...payload,
    onProgress: (p) => ctx.onProgress(p)
  });

  // Limpiar/recortar la evidencia para evitar payloads gigantescos
  if (result) {
    const promptLen = result.prompt ? result.prompt.length : 0;
    return {
      prompt: promptLen > 1_000_000 ? result.prompt.slice(0, 5000) + "\n...[truncated - read from artifactPath]" : result.prompt,
      artifactPath: result.artifactPath,
      truncated: promptLen > 1_000_000,
      evidence: trimEvidenceForSSE(result.evidence),
      fidelityScore: result.fidelityScore,
      generatedAt: new Date().toISOString()
    };
  }
  return result;
});

queue.start();

// ───── Rate limit (por IP, máx 30 peticiones por minuto) ──
const rateLimiter = new Map();
function rateLimitOk(ip, limit = 30, windowMs = 60_000) {
  const now = Date.now();
  const e = rateLimiter.get(ip);
  if (!e || now > e.resetAt) {
    rateLimiter.set(ip, { count: 1, resetAt: now + windowMs });
    return true;
  }
  if (e.count >= limit) return false;
  e.count++;
  return true;
}
function getClientIp(req) {
  if (TRUST_PROXY) {
    const xff = req.headers["x-forwarded-for"];
    if (xff) return String(xff).split(",")[0].trim();
  }
  return req.socket.remoteAddress || "127.0.0.1";
}

// ───── Helpers ───────────────────────────────────────────
function sendJson(res, code, obj) {
  const body = JSON.stringify(obj);
  res.writeHead(code, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
    "X-Content-Type-Options": "nosniff"
  });
  res.end(body);
}
function readBody(req, maxBytes = 64 * 1024) {
  return new Promise((resolve, reject) => {
    const chunks = []; let size = 0;
    req.on("data", c => {
      size += c.length;
      if (size > maxBytes) { req.destroy(); reject(new Error("payload_too_large")); return; }
      chunks.push(c);
    });
    req.on("end", () => {
      try { resolve(JSON.parse(Buffer.concat(chunks).toString("utf8") || "{}")); }
      catch { reject(new Error("invalid_json")); }
    });
    req.on("error", reject);
  });
}
function checkAuth(req) {
  if (!AUTH_TOKEN) return true;
  return req.headers["authorization"] === `Bearer ${AUTH_TOKEN}`;
}

function trimEvidenceForSSE(evidence) {
  if (!evidence) return evidence;
  const trimmed = { ...evidence };
  if (trimmed.inspection) {
    trimmed.inspection = { ...trimmed.inspection };
    delete trimmed.inspection.html;
    delete trimmed.inspection.sectionStructure;
    delete trimmed.inspection.scripts;
    if (trimmed.inspection.styles && Array.isArray(trimmed.inspection.styles.styleRules)) {
      trimmed.inspection.styles = { ...trimmed.inspection.styles, styleRules: trimmed.inspection.styles.styleRules.slice(0, 100) };
    }
  }
  return trimmed;
}

// ───── Handlers ──────────────────────────────────────────

// POST /api/extract  →  202 { jobId }
async function handleExtract(req, res) {
  let body;
  try { body = await readBody(req); }
  catch (e) { return sendJson(res, 400, { error: e.message }); }

  const { url, niche, preset = "standard", videoPath = null,
          headless = true, timeoutMs = 120_000, ignoreRobots = false,
          dryRun = false, force = false } = body;

  if (!url || !niche) return sendJson(res, 400, { error: "url_and_niche_required" });
  if (!isSafeUrl(url))  return sendJson(res, 400, { error: "unsafe_url" });

  try {
    const jobId = queue.enqueue({
      type: "extract",
      userId: req.headers["x-user-id"] || null, // listo para multi-tenant
      payload: { url, niche, preset, videoPath, headless, timeoutMs, ignoreRobots, dryRun, force }
    });
    sendJson(res, 202, { jobId, status: "queued",
                         poll: `/api/jobs/${jobId}`,
                         stream: `/api/jobs/${jobId}/stream` });
  } catch (e) {
    if (e.code === "QUEUE_FULL")
      return sendJson(res, 429, { error: "queue_full" });
    sendJson(res, 500, { error: "internal" });
  }
}

// GET /api/jobs/:id  →  estado completo
function handleJobStatus(res, id) {
  const job = queue.get(id);
  if (!job) return sendJson(res, 404, { error: "not_found" });
  sendJson(res, 200, job);
}

// GET /api/jobs/:id/stream  →  SSE bound a un jobId estable
function handleJobStream(req, res, id) {
  const job = queue.get(id);
  if (!job) return sendJson(res, 404, { error: "not_found" });

  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "X-Accel-Buffering": "no"
  });
  const send = (event, data) =>
    res.write(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`);

  send("snapshot", queue.get(id));

  const onProgress = ({ id: jid, progress }) => { if (jid === id) send("progress", progress); };
  const onDone     = ({ id: jid })           => { if (jid === id) { send("done",    queue.get(id)); res.end(); cleanup(); } };
  const onFailed   = ({ id: jid })           => { if (jid === id) { send("failed",  queue.get(id)); res.end(); cleanup(); } };
  const cleanup = () => {
    queue.off("progress", onProgress);
    queue.off("done",     onDone);
    queue.off("failed",   onFailed);
    clearInterval(hb);
  };
  queue.on("progress", onProgress);
  queue.on("done",     onDone);
  queue.on("failed",   onFailed);

  const hb = setInterval(() => res.write(`: heartbeat\n\n`), 15_000);
  req.on("close", cleanup);
}

// GET /api/runs (mantiene lectura del index.json de ejecuciones pasadas)
async function handleListRuns(req, res) {
  try {
    const indexPath = join(RUNS_DIR, "index.json");
    let runs = [];
    try {
      const data = await readFile(indexPath, "utf8");
      runs = JSON.parse(data);
    } catch {
      // index.json no existe o está corrupto, devolver vacío
    }
    sendJson(res, 200, runs);
  } catch (error) {
    sendJson(res, 500, { error: error.message });
  }
}

// GET /api/screenshots
async function handleServeScreenshot(req, res) {
  try {
    const urlObj = new URL(req.url, `http://${req.headers.host || "127.0.0.1"}`);
    const run = urlObj.searchParams.get("run");
    const file = urlObj.searchParams.get("file");

    if (!run || !file) {
      sendJson(res, 400, { error: "run and file parameters are required." });
      return;
    }

    const filePath = join(RUNS_DIR, run, "screenshots", file);

    const relativePath = pathRelative(RUNS_DIR, filePath);
    if (relativePath.startsWith("..") || isAbsolute(relativePath)) {
      res.writeHead(403);
      res.end("Forbidden");
      return;
    }

    const img = await readFile(filePath);
    res.writeHead(200, { "Content-Type": "image/png" });
    res.end(img);
  } catch {
    res.writeHead(404);
    res.end("Not found");
  }
}

// Static seguro (sin path traversal) ────────────────────
async function serveStatic(req, res) {
  const requestedPath = req.url === "/" ? "/index.html" : req.url;
  const safePath = normalize(requestedPath).replace(/^(\.\.[/\\])+/, "");
  const filePath = join(PUBLIC_DIR, safePath);

  const relativePath = pathRelative(PUBLIC_DIR, filePath);
  if (relativePath.startsWith("..") || isAbsolute(relativePath)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  try {
    const buf = await readFile(filePath);
    const ct = { ".html":"text/html; charset=utf-8",
                 ".js":"application/javascript; charset=utf-8",
                 ".css":"text/css; charset=utf-8",
                 ".json":"application/json; charset=utf-8",
                 ".png":"image/png",
                 ".jpg":"image/jpeg",
                 ".svg":"image/svg+xml"
               }[extname(filePath)] || "application/octet-stream";
    res.writeHead(200, { "Content-Type": ct, "X-Content-Type-Options": "nosniff" });
    res.end(buf);
  } catch {
    res.writeHead(404);
    res.end("Not found");
  }
}

// ───── Router ────────────────────────────────────────────
const server = createServer(async (req, res) => {
  const ip = getClientIp(req);
  if (!rateLimitOk(ip)) return sendJson(res, 429, { error: "rate_limited" });
  if (!checkAuth(req))  return sendJson(res, 401, { error: "unauthorized" });

  const { pathname } = new URL(req.url, "http://x");

  if (req.method === "POST" && pathname === "/api/extract")
    return handleExtract(req, res);

  if (req.method === "GET") {
    let m;
    if ((m = pathname.match(/^\/api\/jobs\/([^/]+)\/stream$/)))
      return handleJobStream(req, res, m[1]);
    if ((m = pathname.match(/^\/api\/jobs\/([^/]+)$/)))
      return handleJobStatus(res, m[1]);
    if (pathname === "/api/runs")
      return handleListRuns(req, res);
    if (pathname === "/api/screenshots")
      return handleServeScreenshot(req, res);
    return serveStatic(req, res);
  }

  sendJson(res, 405, { error: "method_not_allowed" });
});

server.listen(PORT, HOST, () => {
  console.log(`🚀 WebADN SaaS listening on http://${HOST}:${PORT}  (concurrency=${MAX_CONCURRENT}, queue=${MAX_QUEUE})`);
});

// graceful shutdown
process.on("SIGTERM", () => { queue.stop(); server.close(() => process.exit(0)); });
