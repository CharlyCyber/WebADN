// Punto único de lanzamiento de Chromium.
// CHROMIUM_PATH permite usar un Chromium/Chrome ya instalado (útil en Termux,
// Docker, CI o máquinas donde `npx playwright install` no está disponible).

const BASE_ARGS = ["--disable-dev-shm-usage", "--no-sandbox"];

export function browserLaunchOptions({ headless = true, extraArgs = [] } = {}) {
  const options = { headless, args: [...BASE_ARGS, ...extraArgs] };
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
