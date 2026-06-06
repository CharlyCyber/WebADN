import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize, relative as pathRelative, isAbsolute } from "node:path";
import { fileURLToPath } from "node:url";
import { runOrchestrator } from "./orchestrator.js";
import { loadLocalEnv } from "./support/env.js";
import { validatePublicHttpUrl } from "./support/urlSafety.js";
import { RUNS_DIR } from "./support/artifacts.js";

loadLocalEnv();

const PORT = Number(process.env.PORT || 4173);
const PUBLIC_DIR = fileURLToPath(new URL("../public", import.meta.url));

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml"
};

// Rate limiter map (ip -> { count, resetAt })
const rateLimiter = new Map();

function checkRateLimit(ip) {
  const now = Date.now();
  const entry = rateLimiter.get(ip) || { count: 0, resetAt: now + 60_000 };
  if (now > entry.resetAt) {
    entry.count = 0;
    entry.resetAt = now + 60_000;
  }
  if (entry.count >= 5) {
    throw new Error("Rate limit: máximo 5 extracciones por minuto.");
  }
  entry.count++;
  rateLimiter.set(ip, entry);
}

const server = createServer(async (request, response) => {
  try {
    const urlObj = new URL(request.url, `http://${request.headers.host || "127.0.0.1"}`);
    const pathname = urlObj.pathname;

    if (request.method === "POST" && pathname === "/api/extract") {
      const clientIp = request.headers["x-forwarded-for"] || request.socket.remoteAddress || "127.0.0.1";
      try {
        checkRateLimit(clientIp);
      } catch (rateError) {
        sendJson(response, 429, { error: rateError.message });
        return;
      }
      await handleExtract(request, response);
      return;
    }

    if (request.method === "GET") {
      if (pathname === "/api/runs") {
        await handleListRuns(request, response);
        return;
      }
      if (pathname === "/api/screenshots") {
        await handleServeScreenshot(request, response);
        return;
      }
      await serveStatic(request, response);
      return;
    }

    sendJson(response, 405, { error: "Method not allowed" });
  } catch (error) {
    sendJson(response, 500, { error: error.message });
  }
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`Dashboard ready at http://127.0.0.1:${PORT}`);
});

async function handleExtract(request, response) {
  const body = await readJsonBody(request);

  if (!body.url || !body.niche) {
    sendJson(response, 400, { error: "URL and niche are required." });
    return;
  }

  let validatedUrl;
  try {
    validatedUrl = await validatePublicHttpUrl(body.url);
  } catch (error) {
    sendJson(response, 400, { error: error.message });
    return;
  }

  response.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
    "X-Accel-Buffering": "no"
  });

  const sendEvent = (event, data) => {
    try {
      const payload = `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`;
      response.write(payload);
    } catch {
      // Si falla el envío, el catch superior lo manejará
    }
  };

  const onProgress = (info) => {
    sendEvent("progress", info);
  };

  const heartbeat = setInterval(() => {
    try {
      response.write(`: keep-alive ${Date.now()}\n\n`);
    } catch {
    }
  }, 10_000);
  if (typeof heartbeat.unref === "function") heartbeat.unref();

  try {
    const masterPrompt = await runOrchestrator({
      url: validatedUrl,
      niche: body.niche,
      headless: true,
      timeoutMs: 120000,
      preset: body.preset || "standard",
      force: body.force,
      onProgress
    });

    const payload = JSON.stringify({
      prompt: masterPrompt.prompt,
      artifactPath: masterPrompt.artifactPath,
      evidence: trimEvidenceForSSE(masterPrompt.evidence),
      fidelityScore: masterPrompt.fidelityScore,
      generatedAt: new Date().toISOString()
    });

    const ok = response.write(`event: result\ndata: ${payload}\n\n`);
    if (!ok) {
      await new Promise(resolve => response.once("drain", resolve));
    }
  } catch (error) {
    try {
      response.write(`event: error\ndata: ${JSON.stringify({ message: error.message })}\n\n`);
    } catch {
      // Intento mínimo de notificar error
    }
  } finally {
    clearInterval(heartbeat);
    response.end();
  }
}

async function serveStatic(request, response) {
  const url = new URL(request.url, `http://127.0.0.1:${PORT}`);
  const requestedPath = url.pathname === "/" ? "/index.html" : url.pathname;
  const safePath = normalize(requestedPath).replace(/^(\.\.[/\\])+/, "");
  const filePath = join(PUBLIC_DIR, safePath);

  // Robust path traversal check using path.relative
  const relativePath = pathRelative(PUBLIC_DIR, filePath);
  if (relativePath.startsWith("..") || isAbsolute(relativePath)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  try {
    const file = await readFile(filePath);
    response.writeHead(200, {
      "Content-Type": mimeTypes[extname(filePath)] || "application/octet-stream"
    });
    response.end(file);
  } catch {
    response.writeHead(404);
    response.end("Not found");
  }
}

function readJsonBody(request) {
  return new Promise((resolve, reject) => {
    let raw = "";
    request.on("data", (chunk) => {
      raw += chunk;
      if (raw.length > 1_000_000) {
        request.destroy();
        reject(new Error("Payload too large."));
      }
    });
    request.on("end", () => {
      try {
        resolve(raw ? JSON.parse(raw) : {});
      } catch {
        reject(new Error("Invalid JSON payload."));
      }
    });
    request.on("error", reject);
  });
}

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, { "Content-Type": "application/json; charset=utf-8" });
  response.end(JSON.stringify(payload));
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

async function handleListRuns(request, response) {
  try {
    const indexPath = join(RUNS_DIR, "index.json");
    let runs = [];
    try {
      const data = await readFile(indexPath, "utf8");
      runs = JSON.parse(data);
    } catch {
      // index.json no existe o está corrupto, devolver vacío
    }
    sendJson(response, 200, runs);
  } catch (error) {
    sendJson(response, 500, { error: error.message });
  }
}

async function handleServeScreenshot(request, response) {
  try {
    const urlObj = new URL(request.url, `http://${request.headers.host || "127.0.0.1"}`);
    const run = urlObj.searchParams.get("run");
    const file = urlObj.searchParams.get("file");

    if (!run || !file) {
      sendJson(response, 400, { error: "run and file parameters are required." });
      return;
    }

    // Ruta física para la captura
    const filePath = join(RUNS_DIR, run, "screenshots", file);

    // Prevención de path traversal
    const relativePath = pathRelative(RUNS_DIR, filePath);
    if (relativePath.startsWith("..") || isAbsolute(relativePath)) {
      response.writeHead(403);
      response.end("Forbidden");
      return;
    }

    const img = await readFile(filePath);
    response.writeHead(200, { "Content-Type": "image/png" });
    response.end(img);
  } catch (error) {
    response.writeHead(404);
    response.end("Not found");
  }
}
