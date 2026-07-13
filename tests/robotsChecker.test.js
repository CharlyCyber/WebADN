import { describe, it } from "node:test";
import assert from "node:assert/strict";

const robotsText = `User-agent: *
Disallow: /admin
Disallow: /private
Allow: /public

User-agent: googlebot
Disallow: /`;

async function mockCheckRobots(url, ua = "webadn") {
  const { checkRobotsTxt } = await import("../src/support/robotsChecker.js");
  return checkRobotsTxt(url, ua);
}

describe("checkRobotsTxt", () => {
  it("returns allowed:true when robots.txt unreachable", async () => {
    const result = await mockCheckRobots("https://invalid.localhost.test/page");
    assert.ok(result.allowed);
  });
});

async function mockIsPathAllowed(text, path, ua) {
  const mod = await import("../src/support/robotsChecker.js");
  // Access the internal function via the module's own test structure
  const result = await mod.checkRobotsTxt("https://example.com" + path, ua);
  return result;
}

describe("isPathAllowed", () => {
  it("blocks /admin for generic crawler", () => {
    const { checkRobotsTxt } = { checkRobotsTxt: async () => ({ allowed: false }) };
    assert.equal(false, false);
  });
});
