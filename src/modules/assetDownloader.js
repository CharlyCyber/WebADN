import { writeFile, mkdir } from "node:fs/promises";
import { join, extname } from "node:path";
import { isHostPublic } from "../support/urlSafety.js";

export async function downloadLocalAssets(assets, downloadPath, onProgress) {
  const downloaded = { images: [], fonts: [] };

  await mkdir(downloadPath, { recursive: true });
  const imageDir = join(downloadPath, "images");
  const fontDir = join(downloadPath, "fonts");
  await mkdir(imageDir, { recursive: true });
  await mkdir(fontDir, { recursive: true });

  const globalAbort = new AbortController();
  const globalTimer = setTimeout(() => {
    globalAbort.abort();
    onProgress?.({ step: "download-warn", message: "Tiempo de descarga agotado. Las URLs originales se usan en el prompt." });
  }, 20000);

  try {
    const imageUrls = (assets.images || []).slice(0, 10);
    await runBatch(imageUrls, 3, async (url, idx) => {
      if (globalAbort.signal.aborted) return;
      onProgress?.({ step: "download", message: `Descargando assets... (${idx + 1}/${imageUrls.length} imágenes)` });
      const data = await safeFetch(url, globalAbort.signal);
      if (!data) return;
      const ext = extname(new URL(url).pathname) || ".jpg";
      const name = `img-${downloaded.images.length}${ext}`;
      const filePath = join(imageDir, name);
      await writeFile(filePath, data);
      downloaded.images.push({ url, localPath: filePath, name });
    });

    const fontUrls = (assets.fonts || []).slice(0, 8);
    await runBatch(fontUrls, 3, async (url, idx) => {
      if (globalAbort.signal.aborted) return;
      onProgress?.({ step: "download", message: `Descargando assets... (${idx + 1}/${fontUrls.length} fuentes)` });
      const data = await safeFetch(url, globalAbort.signal);
      if (!data) return;
      const ext = extname(new URL(url).pathname) || ".woff2";
      const name = `font-${downloaded.fonts.length}${ext}`;
      const filePath = join(fontDir, name);
      await writeFile(filePath, data);
      downloaded.fonts.push({ url, localPath: filePath, name });
    });
  } finally {
    clearTimeout(globalTimer);
  }

  return downloaded;
}

async function runBatch(items, concurrency, fn) {
  for (let i = 0; i < items.length; i += concurrency) {
    const batch = items.slice(i, i + concurrency);
    await Promise.allSettled(batch.map((item, bi) => fn(item, i + bi)));
  }
}

async function safeFetch(url, signal) {
  if (signal?.aborted) return null;
  try {
    const u = new URL(url);
    if (!["http:", "https:"].includes(u.protocol)) return null;
    if (!(await isHostPublic(u.hostname))) return null;
  } catch {
    return null;
  }
  const controller = new AbortController();
  const onAbort = () => { try { controller.abort(); } catch {} };
  signal?.addEventListener("abort", onAbort);
  const timer = setTimeout(() => { try { controller.abort(); } catch {} }, 5000);

  try {
    const response = await fetch(url, { signal: controller.signal, redirect: "error" });
    if (!response.ok) { clearTimeout(timer); signal?.removeEventListener("abort", onAbort); return null; }
    const buf = await response.arrayBuffer();
    clearTimeout(timer);
    signal?.removeEventListener("abort", onAbort);
    return Buffer.from(buf);
  } catch {
    clearTimeout(timer);
    signal?.removeEventListener("abort", onAbort);
    return null;
  }
}
