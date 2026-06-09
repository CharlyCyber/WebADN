import { execSync } from "node:child_process";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("../../", import.meta.url));

export async function ensureDependencies() {
  const nodeModules = join(ROOT, "node_modules");
  const playwrightDir = join(nodeModules, "playwright");

  if (existsSync(playwrightDir)) return;

  console.log("📦 Instalando dependencias necesarias...");
  try {
    execSync("npm install", { cwd: ROOT, stdio: "inherit" });
  } catch {
    console.error("Error al instalar dependencias. Ejecuta 'npm install' manualmente.");
    process.exit(1);
  }

  console.log("🌐 Instalando Chromium para Playwright...");
  try {
    execSync("npx playwright install chromium", { cwd: ROOT, stdio: "inherit" });
  } catch {
    console.error("Error al instalar Chromium. Ejecuta 'npx playwright install chromium' manualmente.");
    process.exit(1);
  }

  console.log("✅ Listo.");
}
