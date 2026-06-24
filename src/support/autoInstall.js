import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("../../", import.meta.url));

export async function ensureDependencies() {
  if (process.env.NODE_ENV === "production") {
    console.error("Dependencies missing. Run 'npm ci' manually.");
    process.exit(1);
  }

  const nodeModules = join(ROOT, "node_modules");
  const playwrightDir = join(nodeModules, "playwright");

  if (existsSync(playwrightDir)) return;

  console.log("Installing dependencies...");
  try {
    execFileSync("npm", ["install"], { cwd: ROOT, stdio: "inherit" });
  } catch {
    console.error("Error installing deps. Run 'npm install' manually.");
    process.exit(1);
  }

  console.log("Installing Chromium for Playwright...");
  try {
    execFileSync("npx", ["playwright", "install", "chromium"], { cwd: ROOT, stdio: "inherit" });
  } catch {
    console.error("Error installing Chromium. Run 'npx playwright install chromium' manually.");
    process.exit(1);
  }
}
