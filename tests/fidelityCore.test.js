import test from "node:test";
import assert from "node:assert/strict";
import { inflateRawSync } from "node:zlib";
import { readFileSync } from "node:fs";
import { createZip, crc32 } from "../src/support/zip.js";
import { compareFingerprints, renderReportMarkdown, colorSim, easingSim } from "../src/modules/fingerprintCompare.js";
import { composeKitPrompt, toSpec } from "../src/modules/buildKit.js";
import { handleMessage, TOOLS } from "../src/mcp.js";

const load = (name) => JSON.parse(readFileSync(new URL(`./fixtures/fingerprints/${name}.json`, import.meta.url), "utf8"));
// Huellas reales medidas sobre tests/fixtures/sites/reference.html y build-bad.html
const fingerprint = () => load("reference");

test("crc32 coincide con el vector de referencia", () => {
  assert.equal(crc32(Buffer.from("123456789")), 0xcbf43926);
});

test("createZip genera un zip legible con contenido íntegro", () => {
  const text = "hola WebADN ".repeat(200);
  const zip = createZip([{ name: "a/PROMPT.md", data: Buffer.from(text) }, { name: "b.png", data: Buffer.from([1, 2, 3, 4]) }]);
  assert.equal(zip.readUInt32LE(0), 0x04034b50);
  // Fin de directorio central: 2 entradas
  const eocd = zip.lastIndexOf(Buffer.from([0x50, 0x4b, 0x05, 0x06]));
  assert.ok(eocd > 0);
  assert.equal(zip.readUInt16LE(eocd + 10), 2);
  // Primera entrada: descomprimir y comparar
  const method = zip.readUInt16LE(8);
  const compSize = zip.readUInt32LE(18);
  const nameLen = zip.readUInt16LE(26);
  const extraLen = zip.readUInt16LE(28);
  const body = zip.subarray(30 + nameLen + extraLen, 30 + nameLen + extraLen + compSize);
  const out = method === 8 ? inflateRawSync(body) : body;
  assert.equal(out.toString(), text);
  assert.ok(compSize < text.length, "el texto se comprime");
});

test("un fingerprint comparado consigo mismo puntúa 100 sin diferencias", () => {
  const fp = fingerprint();
  const report = compareFingerprints(fp, structuredClone(fp));
  assert.equal(report.score, 100);
  assert.equal(report.issues.length, 0);
});

test("un build con otro sistema visual puntúa bajo y lista qué corregir", () => {
  const report = compareFingerprints(fingerprint(), load("build-bad"));
  assert.ok(report.score < 65, `score ${report.score}`);
  assert.ok(report.dimensions.color < 40, `color ${report.dimensions.color}`);
  assert.ok(report.dimensions.motion < 50, `motion ${report.dimensions.motion}`);
  assert.ok(report.issues.length > 10);
  assert.ok(report.issues.every((i) => i.title && i.dimension));
  for (let i = 1; i < report.issues.length; i++) assert.ok(report.issues[i - 1].impact >= report.issues[i].impact, "ordenado por impacto");
  const md = renderReportMarkdown(report);
  assert.match(md, /informe de fidelidad/);
  assert.match(md, /#ffffff/);
});

test("ignore excluye una dimensión de la nota", () => {
  const full = compareFingerprints(fingerprint(), load("build-bad"));
  const ignored = compareFingerprints(fingerprint(), load("build-bad"), { ignore: ["color"] });
  assert.ok(ignored.score > full.score);
  assert.deepEqual(ignored.ignored, ["color"]);
});

test("colorSim y easingSim: idénticos = 1, opuestos bajos", () => {
  assert.equal(colorSim("#d8ff66", "#d8ff66"), 1);
  assert.ok(colorSim("#000000", "#ffffff") < 0.2);
  assert.equal(easingSim("cubic-bezier(0.22, 1, 0.36, 1)", "cubic-bezier(0.22, 1, 0.36, 1)"), 1);
  assert.ok(easingSim("linear", "cubic-bezier(0.22, 1, 0.36, 1)") < 1);
});

test("el prompt del kit contiene nicho, valores medidos y el comando de verificación", () => {
  const fp = fingerprint();
  const prompt = composeKitPrompt({ fingerprint: fp, niche: "clínica dental", url: fp.url });
  assert.match(prompt, /clínica dental/);
  assert.match(prompt, /800\s?ms/);
  assert.match(prompt, /#0d0f12/);
  assert.match(prompt, /#d8ff66/);
  assert.match(prompt, /webadn compare --ref/);
  assert.doesNotMatch(prompt, /undefined|\[object Object\]|NaN/);
  const spec = toSpec(fp, { niche: "clínica dental" });
  assert.ok(spec.viewports.desktop.sections.length >= 5);
  assert.ok(JSON.stringify(spec).length < JSON.stringify(fp).length, "spec más ligero que la huella");
});

test("MCP: initialize, tools/list y tools/call responden según el protocolo", async () => {
  const init = await handleMessage({ jsonrpc: "2.0", id: 1, method: "initialize", params: { protocolVersion: "2024-11-05" } });
  assert.equal(init.result.serverInfo.name, "webadn");
  assert.equal(await handleMessage({ jsonrpc: "2.0", method: "notifications/initialized" }), null);
  const list = await handleMessage({ jsonrpc: "2.0", id: 2, method: "tools/list" });
  assert.deepEqual(list.result.tools.map((t) => t.name), TOOLS.map((t) => t.name));
  const ok = await handleMessage({ jsonrpc: "2.0", id: 3, method: "tools/call", params: { name: "x", arguments: { a: 1 } } }, async (n, a) => `${n}:${a.a}`);
  assert.equal(ok.result.content[0].text, "x:1");
  const bad = await handleMessage({ jsonrpc: "2.0", id: 4, method: "tools/call", params: { name: "x" } }, async () => { throw new Error("boom"); });
  assert.equal(bad.result.isError, true);
  const unknown = await handleMessage({ jsonrpc: "2.0", id: 5, method: "nope" });
  assert.equal(unknown.error.code, -32601);
});
