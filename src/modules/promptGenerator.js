import { composeMegaBrief } from "./briefComposer.js";

export async function generateMasterPrompt({ url, niche, inspection, motionAnalysis, conversionPlan, knowledgeMatrix, evidence, clientBrief, llmInterpretation }) {
  const fidelityLevel = evidence.fidelityLevel || "standard";
  const briefEvidence = {
    inspection,
    visualRhythm: evidence.visualRhythm || null,
    conversionPlan,
    knowledgeMatrix,
    niche,
    url,
    clientBrief: clientBrief || evidence.clientBrief || null,
    llmInterpretation: llmInterpretation || null,
    fidelityScore: evidence.fidelityScore || null,
    designLanguage: evidence.designLanguage || null,
    pixelPalette: evidence.pixelPalette || null,
    spacing: evidence.spacing || null,
  };
  return await composeMegaBrief(briefEvidence, fidelityLevel);
}
