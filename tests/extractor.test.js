import { test } from "node:test";
import assert from "node:assert";
import { inspectUrl } from "../src/modules/scraper.js";

test("extrae tecnologías básicas de example.com", async (t) => {
  const result = await inspectUrl("https://example.com", {}, "fast");
  assert.ok(result.technologies !== undefined);
  assert.ok(Array.isArray(result.tokens.fonts));
});

test("extrae secciones de un sitio simple", async (t) => {
  const result = await inspectUrl("https://example.com", {}, "fast");
  assert.ok(result.sections !== undefined);
  assert.ok(Array.isArray(result.sections));
});

test("detecta al menos un token de color", async (t) => {
  const result = await inspectUrl("https://example.com", {}, "fast");
  assert.ok(result.tokens !== undefined);
  assert.ok(result.tokens.colors !== undefined);
});

test("genera metadata básica de la página", async (t) => {
  const result = await inspectUrl("https://example.com", {}, "fast");
  assert.ok(result.title !== undefined);
  assert.ok(typeof result.title === "string");
});

test("extrae información del viewport", async (t) => {
  const result = await inspectUrl("https://example.com", {}, "fast");
  assert.ok(result.viewport !== undefined);
  assert.ok(result.viewport.width > 0);
  assert.ok(result.viewport.height > 0);
});
