export function analyzeScreenshotPixels(sample) {
  if (!sample || !Array.isArray(sample.colors) || sample.colors.length === 0) {
    return { valid: false, reason: "NO_PIXEL_SAMPLE" };
  }

  const unique = new Set(sample.colors.map(c => c.toLowerCase()));
  const dominantRatio = sample.dominantRatio ?? 1;

  if (unique.size <= 2 && dominantRatio > 0.96) {
    return { valid: false, reason: "FLAT_COLOR_SCREEN" };
  }

  return { valid: true, reason: "OK" };
}
