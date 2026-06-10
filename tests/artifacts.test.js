import { describe, it } from "node:test";
import assert from "node:assert/strict";

describe("sanitizePrompt", () => {
  it("redacts API keys in query strings", async () => {
    const { buildCompactPrompt } = await import("../src/support/artifacts.js");
    const text = "https://api.example.com?api_key=sk-abc123&token=xyz";
    // Use savePrompt's internal sanitize indirectly via buildCompactPrompt
    const result = buildCompactPrompt(text, {}, "test", "https://x.com");
    assert.ok(!result.includes("sk-abc123"));
  });

  it("redacts Bearer tokens", async () => {
    const { buildCompactPrompt } = await import("../src/support/artifacts.js");
    const text = "Authorization: Bearer ghp_abcdefghijklmnopqrstuvwxyz1234567890";
    const result = buildCompactPrompt(text, {}, "test", "https://x.com");
    assert.ok(result.includes("REDACTED") || !result.includes("Bearer ghp_"));
  });

  it("handles null input gracefully", async () => {
    const { buildCompactPrompt } = await import("../src/support/artifacts.js");
    const result = buildCompactPrompt(null, {}, "test", "https://x.com");
    assert.ok(typeof result === "string");
  });
});
