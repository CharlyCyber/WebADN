// Punto único de lanzamiento de Chromium.
// CHROMIUM_PATH permite usar un Chromium/Chrome ya instalado (útil en Termux,
// Docker, CI o máquinas donde `npx playwright install` no está disponible).

const BASE_ARGS = ["--disable-dev-shm-usage", "--no-sandbox"];

// LOW_MEMORY=true: menos procesos de Chromium para caber en instancias de 512 MB.
// Coste: los iframes de terceros comparten proceso con la página (irrelevante al medir)
// y, sin proceso de GPU, los lienzos WebGL pueden capturarse en blanco.
const LOW_MEMORY_ARGS = [
  "--renderer-process-limit=1",
  "--disable-features=IsolateOrigins,site-per-process,Translate,BackForwardCache,MediaRouter",
  "--disable-extensions",
  "--disable-background-networking",
  "--disable-component-update",
  "--disable-sync",
  "--mute-audio",
  "--js-flags=--max-old-space-size=256",
  "--disable-gpu",
];
const lowMemory = () => String(process.env.LOW_MEMORY || "").toLowerCase() === "true";

export function browserLaunchOptions({ headless = true, extraArgs = [] } = {}) {
  const options = { headless, args: [...BASE_ARGS, ...(lowMemory() ? LOW_MEMORY_ARGS : []), ...extraArgs] };
  const custom = process.env.CHROMIUM_PATH;
  if (custom) {
    options.executablePath = custom;
    // Sin GPU real: SwiftShader mantiene WebGL funcionando en headless.
    options.args.push("--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader");
  }
  return options;
}

export async function launchBrowser(opts = {}) {
  const { chromium } = await import("playwright");
  return chromium.launch(browserLaunchOptions(opts));
}
