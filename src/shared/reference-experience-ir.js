export function createEmptyReferenceExperienceIR({ url, niche }) {
  return {
    version: "1.0.0",
    url,
    niche,
    generatedAt: new Date().toISOString(),
    sections: [],
    globalTokens: {},
    responsive: {},
    motion: [],
    interactions: [],
    assets: [],
    legalPolicy: {
      copyText: false,
      copyAssets: false,
      copyClassNames: false,
      copyCssVerbatim: false
    }
  };
}
