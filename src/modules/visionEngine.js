import { readFile } from "node:fs/promises";
import { basename } from "node:path";

export async function analyzeMotionReference({ videoPath, knowledgeMatrix }) {
  if (!videoPath) {
    return {
      enabled: false,
      source: "none",
      findings: [
        "No video supplied. Motion guidance is inferred from DOM animation hints and the knowledge matrix."
      ],
      mappedTechniques: ["lerp", "premiumEase", "requestAnimationFrame"]
    };
  }

  if (!process.env.GEMINI_API_KEY) {
    return {
      enabled: false,
      source: videoPath,
      findings: [
        `Video ${basename(videoPath)} was provided, but GEMINI_API_KEY is not configured.`,
        "Keep the video as human reference and map visible scroll/hover motion manually into the generated build brief."
      ],
      mappedTechniques: ["scrollDamping", "dynamicClipPaths", "shaderUniforms"]
    };
  }

  const { GoogleGenerativeAI } = await import("@google/generative-ai");
  const modelName = process.env.VISION_MODEL || "gemini-2.5-flash";
  const client = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = client.getGenerativeModel({ model: modelName });
  const videoBytes = await readFile(videoPath);

  let text;
  try {
    const result = await model.generateContent([
      { inlineData: { data: videoBytes.toString("base64"), mimeType: inferMimeType(videoPath) } },
      { text: buildVisionPrompt(knowledgeMatrix) }
    ]);
    text = result.response.text();
  } catch (err) {
    return {
      enabled: false,
      source: videoPath,
      findings: [
        `Fallo al analizar el vídeo con ${modelName}: ${err.message}`,
        "Verifica GEMINI_API_KEY (free tier de Google AI Studio) y VISION_MODEL."
      ],
      mappedTechniques: ["scrollDamping", "dynamicClipPaths", "shaderUniforms"]
    };
  }

  return {
    enabled: true,
    source: videoPath,
    findings: text.split("\n").map((line) => line.trim()).filter(Boolean).slice(0, 18),
    mappedTechniques: extractMappedTechniques(text)
  };
}

function buildVisionPrompt(knowledgeMatrix) {
  return [
    "Analyze this UI/UX motion reference video frame by frame.",
    "Identify scroll, hover, pointer, reveal, parallax, 3D, shader, and transition behaviors.",
    "Translate each behavior into frontend engineering terms.",
    "Use this vocabulary when relevant:",
    JSON.stringify(knowledgeMatrix.animationMath),
    JSON.stringify(knowledgeMatrix.interactions),
    "Return concise bullets. Include physics relationships such as lerp alpha, easing, velocity mapping, and trigger timing when inferable."
  ].join("\n");
}

function inferMimeType(videoPath) {
  if (videoPath.endsWith(".webm")) return "video/webm";
  if (videoPath.endsWith(".mov")) return "video/quicktime";
  return "video/mp4";
}

function extractMappedTechniques(text) {
  const candidates = ["lerp", "cubic-bezier", "ScrollTrigger", "shader", "clip-path", "parallax", "requestAnimationFrame"];
  return candidates.filter((candidate) => text.toLowerCase().includes(candidate.toLowerCase()));
}
