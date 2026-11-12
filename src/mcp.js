// Servidor MCP mínimo (JSON-RPC 2.0 por stdio, sin dependencias).
// Da "ojos y regla" al agente que construye: extraer la referencia y medir su build.

import { createInterface } from "node:readline";
import { readFileSync } from "node:fs";
import { runOrchestrator } from "./orchestrator.js";
import { runCompare } from "./compare.js";

const VERSION = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8").replace(/^\uFEFF/, "")).version;

export const TOOLS = [
  {
    name: "webadn_extract",
    description: "Mide un sitio web de referencia en un navegador real (secciones, tipografía, color, animaciones, scroll, hovers, en escritorio y móvil) y devuelve el encargo de construcción adaptado a un nicho, más la ruta del kit (PROMPT.md, spec.json, fingerprint.json, capturas). Tarda 1-5 minutos.",
    inputSchema: {
      type: "object",
      properties: {
        url: { type: "string", description: "URL pública del sitio de referencia" },
        niche: { type: "string", description: "Nicho o tipo de negocio al que se adapta el diseño" },
        preset: { type: "string", enum: ["fast", "standard", "surgical"], description: "Profundidad de medición (por defecto standard)" },
        force: { type: "boolean", description: "Ignorar la caché de extracciones recientes" },
      },
      required: ["url", "niche"],
    },
  },
  {
    name: "webadn_compare",
    description: "Mide un build (normalmente http://localhost:PUERTO) con la misma sonda que la referencia y devuelve la puntuación de fidelidad 0-100 por dimensión y la lista de diferencias ordenada por impacto. Úsalo tras cada iteración hasta llegar a ≥ 85.",
    inputSchema: {
      type: "object",
      properties: {
        reference: { type: "string", description: "Ruta del kit o de fingerprint.json devuelta por webadn_extract, nombre del run, o URL de la referencia" },
        build_url: { type: "string", description: "URL donde está servido el build" },
        ignore: { type: "array", items: { type: "string", enum: ["structure", "layout", "typography", "color", "motion", "interaction", "effects", "perceptual"] }, description: "Dimensiones a excluir (p. ej. color si el nicho usa paleta propia)" },
      },
      required: ["reference", "build_url"],
    },
  },
];

export async function callTool(name, args = {}) {
  if (name === "webadn_extract") {
    const result = await runOrchestrator({ url: args.url, niche: args.niche, preset: args.preset || "standard", force: args.force === true, headless: true, timeoutMs: 60000 });
    const head = result.kit?.path
      ? `Kit guardado en: ${result.kit.path}\nPara medir el build: webadn_compare con reference="${result.kit.path}".\n\n`
      : "No se pudo medir la huella; se devuelve el brief clásico.\n\n";
    return head + (result.kit?.prompt || result.prompt);
  }
  if (name === "webadn_compare") {
    const { markdown, outDir } = await runCompare({ ref: args.reference, buildUrl: args.build_url, ignore: args.ignore || [] });
    return `${markdown}\nInforme completo y capturas: ${outDir}\n`;
  }
  throw new Error(`Herramienta desconocida: ${name}`);
}

export async function handleMessage(msg, call = callTool) {
  if (!msg || msg.jsonrpc !== "2.0") return null;
  const reply = (result) => ({ jsonrpc: "2.0", id: msg.id, result });
  const fail = (code, message) => ({ jsonrpc: "2.0", id: msg.id, error: { code, message } });
  if (msg.id === undefined) return null; // notificación
  switch (msg.method) {
    case "initialize":
      return reply({ protocolVersion: msg.params?.protocolVersion || "2024-11-05", capabilities: { tools: {} }, serverInfo: { name: "webadn", version: VERSION } });
    case "ping":
      return reply({});
    case "tools/list":
      return reply({ tools: TOOLS });
    case "tools/call":
      try {
        const text = await call(msg.params?.name, msg.params?.arguments || {});
        return reply({ content: [{ type: "text", text }] });
      } catch (err) {
        return reply({ content: [{ type: "text", text: `Error: ${err.message}` }], isError: true });
      }
    default:
      return fail(-32601, `Método no soportado: ${msg.method}`);
  }
}

export async function startMcpServer() {
  // stdout es el canal JSON-RPC: cualquier console.log accidental va a stderr.
  console.log = (...a) => process.stderr.write(a.join(" ") + "\n");
  const rl = createInterface({ input: process.stdin });
  rl.on("line", async (line) => {
    if (!line.trim()) return;
    let msg;
    try { msg = JSON.parse(line); } catch { process.stdout.write(JSON.stringify({ jsonrpc: "2.0", id: null, error: { code: -32700, message: "Parse error" } }) + "\n"); return; }
    const out = await handleMessage(msg);
    if (out) process.stdout.write(JSON.stringify(out) + "\n");
  });
  rl.on("close", () => process.exit(0));
}
