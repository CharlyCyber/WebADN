import { createServer } from "node:http";
import { mkdir, readFile, readdir, stat, writeFile } from "node:fs/promises";
import { basename, extname, join, normalize, relative as pathRelative, isAbsolute } from "node:path";
import { fileURLToPath } from "node:url";
import { runQuickKit, loadRun } from "./quickKit.js";
import { loadLocalEnv } from "./support/env.js";
import { validatePublicHttpUrl } from "./support/urlSafety.js";
import { RUNS_DIR } from "./support/artifacts.js";
import { Semaphore } from "./support/jobQueue.js";
import { ensureDependencies } from "./support/autoInstall.js";
import { runCompare } from "./compare.js";
import { checkPassword, clearSessionCookie, isAuthorized, loginPage, sessionCookie } from "./support/auth.js";
import { KIT_DIR, zipKit } from "./modules/buildKit.js";
import { DIMENSIONS, DIMENSION_LABELS } from "./modules/fingerprintCompare.js";

await ensureDependencies();

loadLocalEnv();

const PORT = Number(process.env.PORT || 4173);
const MAX_CONCURRENT = Number(process.env.MAX_CONCURRENT || 2);
const MAX_QUEUE = Number(process.env.MAX_QUEUE || 10);
const TRUST_PROXY = String(process.env.TRUST_PROXY || "false").toLowerCase() === "true";
const AUTH_TOKEN = process.env.AUTH_TOKEN || "";
// HOST=0.0.0.0 abre el dashboard a la red local (p. ej. para usarlo desde el móvil).
const HOST = process.env.HOST || "127.0.0.1";
const IS_LOCAL_ONLY = ["127.0.0.1", "localhost", "::1"].includes(HOST);
const flag = (name, fallback) => (process.env[name] === undefined ? fallback : String(process.env[name]).toLowerCase() === "true");
// Comparar contra http://localhost:PUERTO es el caso normal en tu máquina, pero en un
// servidor expuesto permitiría sondear la red interna: ahí hay que activarlo a propósito.
const ALLOW_LOCAL_BUILDS = flag("ALLOW_LOCAL_BUILDS", IS_LOCAL_ONLY);
const ALLOW_EMBED = flag("ALLOW_EMBED", false);
const DEFAULT_PRESET = ["fast", "standard", "surgical"].includes(process.env.DEFAULT_PRESET) ? process.env.DEFAULT_PRESET : "standard";

// En un hosting público sin contraseña cualquiera con la URL podría lanzar navegadores
// en tu servidor: mejor no arrancar que arrancar abierto.
if (process.env.RENDER && !AUTH_TOKEN) {
  console.error("Falta AUTH_TOKEN: define la contraseña del dashboard en las variables de entorno de Render.");
  process.exit(1);
}
if (AUTH_TOKEN && !IS_LOCAL_ONLY && AUTH_TOKEN.length < 12) {
  console.warn("Aviso: AUTH_TOKEN tiene menos de 12 caracteres; usa una contraseña más larga.");
}
const extractionSemaphore = new Semaphore(MAX_CONCURRENT);
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
// Periodic cleanup instead of per-request scan to prevent O(n) per request
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of rateLimiter) {
    if (now > entry.resetAt) rateLimiter.delete(key);
  }
}, 60_000).unref();

function getClientIp(request) {
  if (TRUST_PROXY) {
    const xff = request.headers["x-forwarded-for"];
    if (xff) {
      const ips = String(xff).split(",").map(s => s.trim());
      return ips[ips.length - 1];
    }
  }
  return request.socket.remoteAddress || "127.0.0.1";
}

function checkRateLimit(ip) {
  const now = Date.now();
  const entry = rateLimiter.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimiter.set(ip, { count: 1, resetAt: now + 60_000 });
    return;
  }
  if (entry.count >= 5) {
    throw new Error("Rate limit: máximo 5 extracciones por minuto.");
  }
  entry.count++;
}

const SECURITY_HEADERS = {
  "Content-Security-Policy": "default-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data:; connect-src 'self'; font-src 'self' https://fonts.gstatic.com; script-src 'self'",
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "no-referrer",
  ...(ALLOW_EMBED ? {} : { "X-Frame-Options": "DENY" }),
};

function setSecurityHeaders(response) {
  for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
    response.setHeader(key, value);
  }
}

const server = createServer(async (request, response) => {
  try {
    setSecurityHeaders(response);

    const urlObj = new URL(request.url, `http://${request.headers.host || "127.0.0.1"}`);
    const pathname = urlObj.pathname;

    const clientIp = getClientIp(request);

    // Comprobación de vida para el hosting (sin datos, sin autenticación).
    if (pathname === "/healthz") {
      sendJson(response, 200, { ok: true });
      return;
    }

    if (AUTH_TOKEN) {
      if (pathname === "/login") {
        await handleLogin(request, response, clientIp);
        return;
      }
      if (pathname === "/logout") {
        response.writeHead(303, { Location: "/login", "Set-Cookie": clearSessionCookie() });
        response.end();
        return;
      }
      if (!isAuthorized(AUTH_TOKEN, request.headers)) {
        const wantsHtml = request.method === "GET" && !pathname.startsWith("/api/") && String(request.headers.accept || "").includes("text/html");
        if (wantsHtml) {
          response.writeHead(303, { Location: "/login" });
          response.end();
        } else {
          sendJson(response, 401, { error: "unauthorized" });
        }
        return;
      }
    }

    // El rate limit protege la extracción (operación cara, POST). Las rutas de
    // solo lectura (/api/runs, /api/screenshots) pueden generar ráfagas legítimas
    // —p. ej. la galería de screenshots carga una <img> por viewport/scroll— y no
    // deben agotar el cupo de 5/min, o las imágenes renderizarian como rotas (429).
    if (pathname.startsWith("/api/") && request.method === "POST") {
      try {
        checkRateLimit(clientIp);
      } catch (rateError) {
        sendJson(response, 429, { error: rateError.message });
        return;
      }
    }

    if (request.method === "POST" && pathname === "/api/extract") {
      await handleExtract(request, response);
      return;
    }

    if (request.method === "POST" && pathname === "/api/compare") {
      await handleCompare(request, response);
      return;
    }

    if (request.method === "POST" && pathname === "/api/shutdown") {
      // Apagar el servidor solo se permite desde la propia máquina.
      const remote = request.socket.remoteAddress || "";
      const fromLoopback = remote === "127.0.0.1" || remote === "::1" || remote === "::ffff:127.0.0.1";
      if (!IS_LOCAL_ONLY || !fromLoopback || request.headers["x-forwarded-for"]) {
        sendJson(response, 403, { error: "Solo disponible desde la máquina que ejecuta WebADN." });
        return;
      }
      handleShutdown(response);
      return;
    }

    if (request.method === "GET") {
      if (pathname === "/api/runs") {
        await handleListRuns(request, response);
        return;
      }
      if (pathname === "/api/config") {
        sendJson(response, 200, { localOnly: IS_LOCAL_ONLY, auth: Boolean(AUTH_TOKEN), allowLocalBuilds: ALLOW_LOCAL_BUILDS, dimensions: DIMENSION_LABELS });
        return;
      }
      if (pathname === "/api/run") {
        await handleGetRun(urlObj, response);
        return;
      }
      if (pathname === "/api/kit") {
        await handleKit(urlObj, response);
        return;
      }
      if (pathname === "/api/screenshots") {
        await handleServeScreenshot(request, response);
        return;
      }
      if (pathname.startsWith("/vendor/pdfjs/")) {
        await serveVendor(pathname, response);
        return;
      }
      await serveStatic(request, response);
      return;
    }

    sendJson(response, 405, { error: "Method not allowed" });
  } catch (error) {
    if (error.status) {
      sendJson(response, error.status, { error: error.message });
    } else {
      sendJson(response, 500, { error: error.message });
    }
  }
});

function sendHtml(response, statusCode, html) {
  response.writeHead(statusCode, { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" });
  response.end(html);
}

async function handleLogin(request, response, clientIp) {
  if (request.method === "GET") {
    if (isAuthorized(AUTH_TOKEN, request.headers)) {
      response.writeHead(303, { Location: "/" });
      response.end();
      return;
    }
    sendHtml(response, 200, loginPage());
    return;
  }
  if (request.method !== "POST") {
    sendJson(response, 405, { error: "Method not allowed" });
    return;
  }
  // Mismo cupo que las extracciones: 5 intentos por minuto e IP.
  try {
    checkRateLimit(`login:${clientIp}`);
  } catch {
    sendHtml(response, 429, loginPage({ error: "Demasiados intentos. Espera un minuto." }));
    return;
  }
  const raw = await readRawBody(request, 4096);
  const password = new URLSearchParams(raw).get("password") || "";
  if (!checkPassword(AUTH_TOKEN, password)) {
    sendHtml(response, 401, loginPage({ error: "Contraseña incorrecta." }));
    return;
  }
  const secure = request.headers["x-forwarded-proto"] === "https" || Boolean(request.socket.encrypted);
  response.writeHead(303, { Location: "/", "Set-Cookie": sessionCookie(AUTH_TOKEN, { secure }) });
  response.end();
}

function readRawBody(request, limit) {
  return new Promise((resolve, reject) => {
    let raw = "";
    request.on("data", (chunk) => {
      raw += chunk;
      if (raw.length > limit) {
        request.destroy();
        const err = new Error("Payload too large.");
        err.status = 413;
        reject(err);
      }
    });
    request.on("end", () => resolve(raw));
    request.on("error", reject);
  });
}

// Mantener despierta la instancia gratuita de Render: se duerme tras 15 min sin tráfico
// entrante, así que el propio servicio visita su URL pública cada 10 min.
// KEEP_AWAKE=false lo desactiva (p. ej. para no gastar las horas gratuitas del mes).
function startKeepAwake() {
  const base = process.env.RENDER_EXTERNAL_URL;
  if (!base || !flag("KEEP_AWAKE", true)) return;
  const ping = () => fetch(`${base}/healthz`, { signal: AbortSignal.timeout(20_000) }).catch(() => {});
  setInterval(ping, 10 * 60_000).unref();
  console.log(`Keep-awake activo: ${base}/healthz cada 10 min.`);
}

server.listen(PORT, HOST, () => {
  startKeepAwake();
  console.log(`Dashboard ready at http://${IS_LOCAL_ONLY ? "127.0.0.1" : HOST}:${PORT}`);
  if (!IS_LOCAL_ONLY && !AUTH_TOKEN) {
    console.log("Aviso: el dashboard es accesible desde la red (HOST=" + HOST + ") sin AUTH_TOKEN.");
  }
});

/**
 * Detiene el servidor de forma limpia. El listener vive solo en 127.0.0.1,
 * así que este endpoint únicamente es alcanzable desde la propia máquina.
 * Pensado para el botón "Stop server" del dashboard cuando node arranca
 * oculto vía VBS y no hay ventana de terminal que cerrar.
 */
function handleShutdown(response) {
  sendJson(response, 200, { ok: true });
  // Da tiempo a que la respuesta se vacíe antes de cortar conexiones.
  setImmediate(() => {
    try { server.close(); } catch { /* ya cerrado */ }
    process.exit(0);
  });
}

async function handleExtract(request, response) {
  const body = await readJsonBody(request);

  const documentText = typeof body.document === "string" ? body.document.slice(0, 60_000) : "";
  if (!body.url || (!String(body.niche || "").trim() && !documentText.trim())) {
    sendJson(response, 400, { error: "Hacen falta la web de referencia y tu nicho (o un PDF con la información del negocio)." });
    return;
  }

  let validatedUrl;
  try {
    validatedUrl = await validatePublicHttpUrl(body.url);
  } catch (error) {
    sendJson(response, 400, { error: error.message });
    return;
  }

  if (extractionSemaphore.waiters.length >= MAX_QUEUE) {
    sendJson(response, 429, { error: "Servidor ocupado. Inténtalo en unos minutos." });
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

  if (extractionSemaphore.active >= MAX_CONCURRENT) {
    sendEvent("progress", { step: "queued", message: "En cola, esperando un slot de extracción..." });
  }

  const heartbeat = setInterval(() => {
    try {
      response.write(`: keep-alive ${Date.now()}\n\n`);
    } catch {
    }
  }, 10_000);
  if (typeof heartbeat.unref === "function") heartbeat.unref();

  try {
    const result = await extractionSemaphore.run(() => runQuickKit({
      url: validatedUrl,
      niche: String(body.niche || "").slice(0, 200),
      document: documentText,
      documentName: typeof body.documentName === "string" ? body.documentName.slice(0, 120) : "",
      preset: ["fast", "standard", "surgical"].includes(body.preset) ? body.preset : DEFAULT_PRESET,
      notes: typeof body.notes === "string" ? body.notes.slice(0, 4000) : "",
      force: body.force === true,
      ignoreRobots: body.ignoreRobots === true,
      timeoutMs: 60000,
      onProgress
    }));

    response.socket?.setNoDelay(true);
    const payload = JSON.stringify(result);

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

function isSafeRunName(run) {
  return typeof run === "string" && /^[A-Za-z0-9._-]{1,200}$/.test(run) && !run.includes("..");
}

/** GET /api/run?run=<run> → resultado guardado de una extracción (para el historial). */
async function handleGetRun(urlObj, response) {
  const run = urlObj.searchParams.get("run");
  if (!isSafeRunName(run)) {
    sendJson(response, 400, { error: "Parámetro run no válido." });
    return;
  }
  try {
    sendJson(response, 200, await loadRun(run));
  } catch {
    sendJson(response, 404, { error: "Run no encontrado." });
  }
}

/** GET /api/kit?run=<run>[&format=prompt|zip|compares] */
async function handleKit(urlObj, response) {
  const run = urlObj.searchParams.get("run");
  const format = urlObj.searchParams.get("format") || "zip";
  if (!isSafeRunName(run)) {
    sendJson(response, 400, { error: "Parámetro run no válido." });
    return;
  }
  const runPath = join(RUNS_DIR, run);
  try {
    if (format === "prompt") {
      sendJson(response, 200, { run, prompt: await readFile(join(runPath, KIT_DIR, "PROMPT.md"), "utf8") });
      return;
    }
    if (format === "compares") {
      let names = [];
      try { names = (await readdir(join(runPath, "compares"))).sort().reverse().slice(0, 20); } catch { /* aún sin mediciones */ }
      const reports = [];
      for (const name of names) {
        try { reports.push({ id: name, report: JSON.parse(await readFile(join(runPath, "compares", name, "report.json"), "utf8")) }); } catch { /* incompleto */ }
      }
      sendJson(response, 200, { run, compares: reports });
      return;
    }
    const zip = await zipKit(runPath);
    response.writeHead(200, {
      "Content-Type": "application/zip",
      "Content-Length": zip.length,
      "Content-Disposition": `attachment; filename="webadn-kit-${run.slice(0, 60)}.zip"`
    });
    response.end(zip);
  } catch (error) {
    sendJson(response, 404, { error: error.code === "ENOENT" ? "Este run no tiene kit." : error.message });
  }
}

/** POST /api/compare {run, buildUrl, ignore[]} → SSE con progreso e informe de fidelidad. */
async function handleCompare(request, response) {
  const body = await readJsonBody(request);
  if (!isSafeRunName(body.run) || !body.buildUrl) {
    sendJson(response, 400, { error: "Hacen falta el run de referencia y la URL del build." });
    return;
  }
  let buildUrl;
  try {
    const parsed = new URL(String(body.buildUrl));
    if (!["http:", "https:"].includes(parsed.protocol)) throw new Error("La URL del build debe ser http(s).");
    buildUrl = ALLOW_LOCAL_BUILDS ? parsed.toString() : await validatePublicHttpUrl(parsed.toString());
  } catch (error) {
    const hint = ALLOW_LOCAL_BUILDS ? "" : " Este servidor solo mide URLs públicas (ALLOW_LOCAL_BUILDS=true para permitir localhost).";
    sendJson(response, 400, { error: error.message + hint });
    return;
  }
  const ignore = Array.isArray(body.ignore) ? body.ignore.filter((d) => DIMENSIONS.includes(d)) : [];

  // Sin disco persistente el run puede haberse perdido en un reinicio: el navegador
  // guarda la huella y la reenvía para poder seguir midiendo.
  const fingerprintPath = join(RUNS_DIR, body.run, KIT_DIR, "fingerprint.json");
  const exists = await stat(fingerprintPath).then(() => true, () => false);
  if (!exists) {
    const fp = body.fingerprint;
    if (!fp || typeof fp !== "object" || !fp.viewports || typeof fp.viewports !== "object") {
      sendJson(response, 404, { error: "La referencia ya no está en el servidor. Vuelve a extraerla." });
      return;
    }
    await mkdir(join(RUNS_DIR, body.run, KIT_DIR), { recursive: true });
    await writeFile(fingerprintPath, JSON.stringify(fp));
  }
  if (extractionSemaphore.waiters.length >= MAX_QUEUE) {
    sendJson(response, 429, { error: "Servidor ocupado. Inténtalo en unos minutos." });
    return;
  }

  response.writeHead(200, { "Content-Type": "text/event-stream", "Cache-Control": "no-cache", Connection: "keep-alive", "X-Accel-Buffering": "no" });
  const send = (event, data) => { try { response.write(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`); } catch { /* cliente desconectado */ } };
  const heartbeat = setInterval(() => { try { response.write(`: keep-alive ${Date.now()}\n\n`); } catch { /* idem */ } }, 10_000);
  heartbeat.unref?.();
  try {
    const { report, markdown } = await extractionSemaphore.run(() => runCompare({
      ref: join(RUNS_DIR, body.run), buildUrl, ignore, onProgress: (info) => send("progress", info)
    }));
    send("result", { run: body.run, report, markdown });
  } catch (error) {
    send("error", { message: error.message });
  } finally {
    clearInterval(heartbeat);
    response.end();
  }
}

// Lector de PDF para el navegador (el texto se extrae en el dispositivo; el archivo no se sube).
const PDFJS_DIR = fileURLToPath(new URL("../node_modules/pdfjs-dist/legacy/build", import.meta.url));
const PDFJS_FILES = new Set(["pdf.min.mjs", "pdf.worker.min.mjs"]);

async function serveVendor(pathname, response) {
  const file = pathname.slice("/vendor/pdfjs/".length);
  if (!PDFJS_FILES.has(file)) {
    sendJson(response, 404, { error: "Not found" });
    return;
  }
  try {
    const content = await readFile(join(PDFJS_DIR, file));
    response.writeHead(200, { "Content-Type": "text/javascript; charset=utf-8", "Cache-Control": "public, max-age=604800, immutable" });
    response.end(content);
  } catch {
    sendJson(response, 404, { error: "Lector de PDF no instalado (ejecuta npm install)." });
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
      if (raw.length > 3_000_000) {
        request.destroy();
        const err = new Error("Payload too large.");
        err.status = 413;
        reject(err);
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

    // Prevent path traversal outside screenshots/ and enforce .png extension
    const safe = isSafeScreenshotPath(run, file);
    if (!safe.allowed) {
      response.writeHead(403);
      response.end("Forbidden");
      return;
    }

    const img = await readFile(safe.filePath);
    response.writeHead(200, { "Content-Type": "image/png" });
    response.end(img);
  } catch (error) {
    response.writeHead(404);
    response.end("Not found");
  }
}

/**
 * Validates that a screenshot request stays within run/screenshots/ and has .png extension.
 * Exported for testing.
 */
export function isSafeScreenshotPath(run, file) {
  // Block path traversal components in the run identifier
  if (run.includes("..") || run.includes("/") || run.includes("\\") || run === "." || run === "..") {
    return { allowed: false };
  }
  // Block path traversal components in the filename
  if (file.includes("..") || file.includes("/") || file.includes("\\")) {
    return { allowed: false };
  }
  // Only allow .png extension
  if (extname(file).toLowerCase() !== ".png") {
    return { allowed: false };
  }
  // Build the expected path and verify it stays within RUNS_DIR
  const filePath = join(RUNS_DIR, run, "screenshots", file);
  const relativePath = pathRelative(RUNS_DIR, filePath);
  if (relativePath.startsWith("..") || isAbsolute(relativePath)) {
    return { allowed: false };
  }
  // Verify the resolved path is inside run/screenshots/
  // Normalize separators to / for cross-platform consistency (Windows uses \)
  const normalizedRelative = relativePath.replace(/\\/g, "/");
  const expectedPrefix = join(run, "screenshots").replace(/\\/g, "/");
  if (!normalizedRelative.startsWith(expectedPrefix)) {
    return { allowed: false };
  }
  return { allowed: true, filePath };
}
