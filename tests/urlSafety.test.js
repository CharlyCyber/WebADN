import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { validatePublicHttpUrl } from "../src/support/urlSafety.js";

describe("validatePublicHttpUrl", () => {
  it("accepts valid https URLs", async () => {
    const result = await validatePublicHttpUrl("https://anubi.io/");
    assert.equal(result, "https://anubi.io/");
  });

  it("accepts valid http URLs", async () => {
    const result = await validatePublicHttpUrl("http://example.com/page");
    assert.ok(result.startsWith("http://example.com"));
  });

  it("rejects file:// protocol", async () => {
    await assert.rejects(
      () => validatePublicHttpUrl("file:///etc/passwd"),
      /Only http and https URLs are allowed/
    );
  });

  it("rejects localhost", async () => {
    await assert.rejects(
      () => validatePublicHttpUrl("http://localhost:3000"),
      /Local and private URLs are blocked/
    );
  });

  it("rejects 127.0.0.1", async () => {
    await assert.rejects(
      () => validatePublicHttpUrl("http://127.0.0.1:8080"),
      /Local and private URLs are blocked/
    );
  });

  it("rejects 192.168.x.x private network", async () => {
    await assert.rejects(
      () => validatePublicHttpUrl("http://192.168.1.1"),
      /Local and private URLs are blocked/
    );
  });

  it("rejects 10.x.x.x private network", async () => {
    await assert.rejects(
      () => validatePublicHttpUrl("http://10.0.0.1"),
      /Local and private URLs are blocked/
    );
  });

  it("rejects 172.16.x.x private network", async () => {
    await assert.rejects(
      () => validatePublicHttpUrl("http://172.16.0.1"),
      /Local and private URLs are blocked/
    );
  });

  it("rejects 169.254.x.x link-local", async () => {
    await assert.rejects(
      () => validatePublicHttpUrl("http://169.254.1.1"),
      /Local and private URLs are blocked/
    );
  });

  it("rejects ftp:// protocol", async () => {
    await assert.rejects(
      () => validatePublicHttpUrl("ftp://files.example.com"),
      /Only http and https URLs are allowed/
    );
  });

  it("normalizes URL output", async () => {
    const result = await validatePublicHttpUrl("https://EXAMPLE.COM/Page");
    assert.ok(result.includes("example.com"));
  });
});

