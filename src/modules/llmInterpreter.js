// src/modules/llmInterpreter.js
// Intérprete LLM central para análisis de evidencia técnica
// Soporta Claude (Anthropic) y OpenRouter como fallback.
//
// MULTIMODAL: si hay screenshots disponibles, se envían como base64 a Claude
// Sonnet 4 (multimodal) para extraer una DESCRIPCIÓN VISUAL del sitio original
// (composición, jerarquía, tratamiento tipográfico, paleta percibida, mood,
// estilo de imagery, layering). El resultado se destila a TEXTO en el brief →
// el modelo downstream NO necesita ver las imágenes. Cumple el requisito de
// "multimodal completo sin subir imágenes".

import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";

// Máximo de imágenes que enviamos a visión (control de costo/latencia).
const MAX_VISION_IMAGES = 5;
// Tamaño máximo de cada screenshot en bytes para enviar (~1.5MB; los PNG de
// Playwright suelen ser 200-800KB). Si supera, se omite para no explotar.
const MAX_IMAGE_BYTES = 2_000_000;

export async function interpretEvidence({ evidence, niche, knowledgeMatrix, screenshotsPath = null }) {
  const apiKey = process.env.ANTHROPIC_API_KEY || process.env.OPENROUTER_API_KEY;

  if (!apiKey) {
    return {
      used: false,
      reason: "No API key configured (ANTHROPIC_API_KEY or OPENROUTER_API_KEY)",
      interpretation: null,
      confidence: 0,
      gaps: [],
      visualDescription: null
    };
  }

  const useOpenRouter = !!process.env.OPENROUTER_API_KEY && !process.env.ANTHROPIC_API_KEY;
  const evidenceSummary = buildEvidenceSummary(evidence, knowledgeMatrix);

  // --- FASE 1B: capturar screenshots para análisis visual multimodal ---
  // Solo Claude nativo (Anthropic directo) soporta visión fiable aquí; OpenRouter
  // también lo soporta vía el mismo esquema de messages pero mantemos path simple.
  let visionImages = [];
  let visualDescription = null;
  if (screenshotsPath) {
    visionImages = await selectKeyScreenshots(screenshotsPath);
  }

  const prompt = buildInterpretationPrompt(evidenceSummary, niche, visionImages.length > 0);

  try {
    const headers = { "Content-Type": "application/json" };

    let body;
    if (useOpenRouter) {
      headers["Authorization"] = `Bearer ${apiKey}`;
      headers["HTTP-Referer"] = "https://github.com/premium-extractor";
      headers["X-Title"] = "Premium Extractor";
      const content = [{ type: "text", text: prompt }];
      for (const img of visionImages) {
        content.push({ type: "image_url", image_url: { url: `data:${img.mediaType};base64,${img.data}` } });
      }
      body = {
        model: process.env.OPENROUTER_MODEL || "anthropic/claude-sonnet-4-20250514",
        messages: [{ role: "user", content }],
        max_tokens: 3000,
        temperature: 0.3
      };
    } else {
      headers["x-api-key"] = apiKey;
      headers["anthropic-version"] = "2023-06-01";
      const content = [{ type: "text", text: prompt }];
      for (const img of visionImages) {
        content.push({
          type: "image",
          source: { type: "base64", media_type: img.mediaType, data: img.data }
        });
      }
      body = {
        model: "claude-sonnet-4-20250514",
        max_tokens: 3000,
        system: "Eres un arquitecto senior de experiencias web premium especializado en ingeniería inversa de sitios Awwwards. Analizas capturas para extraer el ADN visual exacto.",
        messages: [{ role: "user", content }]
      };
    }

    const endpoint = useOpenRouter
      ? "https://openrouter.ai/api/v1/chat/completions"
      : "https://api.anthropic.com/v1/messages";

    const response = await fetch(endpoint, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(45000)
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => "Unknown error");
      return {
        used: false,
        reason: `API error ${response.status}: ${errorText}`,
        interpretation: null,
        confidence: 0,
        gaps: [],
        visualDescription: null
      };
    }

    const data = await response.json();

    let rawContent;
    if (useOpenRouter) {
      rawContent = data.choices?.[0]?.message?.content || "";
    } else {
      rawContent = data.content?.find(c => c.type === "text")?.text ||
                   data.content?.[0]?.text ||
                   "";
    }

    if (!rawContent) {
      return {
        used: false,
        reason: "Empty response from LLM",
        interpretation: null,
        confidence: 0,
        gaps: [],
        visualDescription: null
      };
    }

    // Parsear la respuesta estructurada
    const parsed = parseLlmResponse(rawContent);

    return {
      used: true,
      provider: useOpenRouter ? "openrouter" : "anthropic",
      model: useOpenRouter
        ? (process.env.OPENROUTER_MODEL || "unknown")
        : "claude-sonnet-4-20250514",
      multimodal: visionImages.length > 0,
      visionImageCount: visionImages.length,
      ...parsed
    };

  } catch (error) {
    return {
      used: false,
      reason: error.code === "ABORT_ERR" ? "Timeout (45s)" : error.message,
      interpretation: null,
      confidence: 0,
      gaps: [],
      visualDescription: null
    };
  }
}

// ---------------------------------------------------------------------------
// Selección de screenshots clave para visión
// ---------------------------------------------------------------------------

/**
 * Elige 3-5 screenshots representativos: hero desktop @0%, una sección media,
 * y hero mobile. Esto basta para describir composición/mood sin enviar todo.
 */
async function selectKeyScreenshots(screenshotsPath) {
  let files;
  try {
    files = await readdir(screenshotsPath);
  } catch {
    return [];
  }

  const pngs = files.filter((f) => f.toLowerCase().endsWith(".png"));

  // Prioridad: hero desktop (desktop-000), sección media (desktop-050), hero
  // mobile (mobile-000), y un wide si existe. Tomamos hasta MAX_VISION_IMAGES.
  const priorityPatterns = [
    /^desktop-000\.png$/i,
    /^desktop-050\.png$/i,
    /^mobile-000\.png$/i,
    /^desktop-025\.png$/i,
    /^desktop-075\.png$/i,
    /^wide-000\.png$/i
  ];

  const selected = [];
  const used = new Set();
  for (const pattern of priorityPatterns) {
    if (selected.length >= MAX_VISION_IMAGES) break;
    const match = pngs.find((f) => pattern.test(f) && !used.has(f));
    if (match) {
      selected.push(match);
      used.add(match);
    }
  }
  // Rellenar con cualquier PNG restante si aún hay hueco.
  for (const f of pngs) {
    if (selected.length >= MAX_VISION_IMAGES) break;
    if (!used.has(f)) { selected.push(f); used.add(f); }
  }

  const result = [];
  for (const name of selected) {
    const path = join(screenshotsPath, name);
    try {
      const buffer = await readFile(path);
      if (buffer.length > MAX_IMAGE_BYTES) continue; // omitir imágenes enormes
      result.push({
        name,
        mediaType: "image/png",
        data: buffer.toString("base64")
      });
    } catch {
      continue;
    }
  }
  return result;
}

function buildEvidenceSummary(evidence, knowledgeMatrix) {
  const insp = evidence.inspection || evidence || {};

  const sections = Array.isArray(insp.sections) ? insp.sections : [];
  const motionRecipes = Array.isArray(insp.motionRecipes) ? insp.motionRecipes : [];
  const hoverEffects = Array.isArray(insp.hoverEffects) ? insp.hoverEffects : [];
  const technologies = Array.isArray(insp.technologies) ? insp.technologies : [];
  const tokens = insp.tokens || {};
  const cssFeatures = insp.cssFeatures || {};
  const visualEvidence = Array.isArray(insp.visualEvidence) ? insp.visualEvidence : [];
  const assets = insp.assets || {};
  const webgl = insp.webgl || null;

  const summary = [];

  summary.push(`TECNOLOGÍAS DETECTADAS: ${technologies.join(", ") || "Ninguna específica"}`);
  summary.push(`SECCIONES: ${sections.length} secciones mayores`);
  summary.push(`MOTION RECIPES: ${motionRecipes.length} animaciones scroll-linked`);
  summary.push(`HOVER EFFECTS: ${hoverEffects.length} interacciones hover detectadas`);

  if (tokens.colors?.length) {
    summary.push(`COLORES: ${tokens.colors.slice(0, 8).join(", ")} (${tokens.colors.length} total)`);
  }
  if (tokens.fonts?.length) {
    summary.push(`FUENTES: ${tokens.fonts.join(", ")}`);
  }
  if (tokens.cssVariables && Object.keys(tokens.cssVariables).length > 0) {
    const varCount = Object.keys(tokens.cssVariables).length;
    summary.push(`CSS VARIABLES: ${varCount} definidas`);
  }

  if (cssFeatures.complexityScore) {
    summary.push(`CSS COMPLEXITY: ${cssFeatures.complexityScore}/100`);
  }
  if (cssFeatures.effects?.length) {
    const effects = cssFeatures.effects.map(e => `${e.feature}(${e.count})`).slice(0, 6);
    summary.push(`EFECTOS CSS: ${effects.join(", ")}`);
  }

  if (webgl?.webglCount > 0) {
    summary.push(`WEBGL: ${webgl.webglCount} canvas WebGL detectados`);
    if (webgl.shaders?.length) {
      summary.push(`SHADERS: ${webgl.shaders.length} fragment/vertex shaders identificados`);
    }
    if (webgl.uniforms?.length) {
      summary.push(`UNIFORMS: ${webgl.uniforms.join(", ")}`);
    }
  }

  if (assets.images?.length) {
    summary.push(`IMÁGENES: ${assets.images.length} recursos`);
  }
  if (assets.videos?.length) {
    summary.push(`VIDEOS: ${assets.videos.length} recursos`);
  }
  if (assets.scripts?.length) {
    summary.push(`SCRIPTS: ${assets.scripts.length} archivos JS`);
  }

  if (visualEvidence.length > 0) {
    const viewports = new Set(visualEvidence.map(e => e.viewport));
    summary.push(`VIEWPORTS CAPTURADOS: ${Array.from(viewports).join(", ")}`);
  }

  if (insp.layout?.dominant) {
    summary.push(`LAYOUT DOMINANTE: ${insp.layout.dominant}`);
  }

  if (insp.designLanguage?.label) {
    summary.push(`DISEÑO: ${insp.designLanguage.label} (${Math.round(insp.designLanguage.confidence * 100)}% confianza)`);
  }

  if (insp.fidelityScore?.overall) {
    summary.push(`FIDELITY SCORE: ${Math.round(insp.fidelityScore.overall)}/100`);
  }

  return summary.join("\n");
}

function buildInterpretationPrompt(evidenceSummary, niche, hasImages) {
  const visionBlock = hasImages ? `
Se adjuntan ${hasImages ? "capturas" : "capturas"} REALES del sitio (hero desktop, sección media, mobile). Úsalas como GROUND TRUTH VISUAL. Descríbelas con precisión de ingeniero inverso.
` : "";

  return `Eres un arquitecto senior de experiencias web premium.
Tienes evidencia técnica extraída de un sitio de referencia${hasImages ? " MÁS capturas reales del mismo" : ""}.
Tu objetivo: interpretar lo que Playwright PUDO y NO PUDO capturar,
inferir patrones premium no visibles en el DOM, y generar directivas
técnicas específicas para recrear el nivel de experiencia en el nicho: "${niche}".
${visionBlock}
EVIDENCIA EXTRAÍDA:
${evidenceSummary}

Responde con ESTRICTAMENTE esta estructura:

## DESCRIPCIÓN VISUAL
[Solo si hay capturas. Descripción EXACTA y técnica de lo que ves, en estos puntos:]
- Composición general del hero (grid implícito, alineación, peso visual, asimetría/simetría)
- Tratamiento tipográfico del título principal (tamaño relativo al viewport, peso, tracking aparente, alineación, si ocupa múltiples líneas, mixed serif/sans)
- Paleta PERCIBIDA (background dominante, color de acento, mood general: claro/oscuro/cálido/frío)
- Estilo de imagery (fotografía editorial / 3D / ilustración / minimal / texturas / video)
- Layering y profundidad (overlap, parallax aparente, blur layers, sombras)
- Transición visual entre hero y segunda sección (corte seco / gradiente / overlay)
- Mood / atmención emocional objetivo (lujo, tech, natural, editorial, brutalista...)
- Cualquier detalle distintivo que NO se pueda inferir del DOM (custom cursor, textura, tratamiento de borde)

## INTERPRETACIÓN TÉCNICA
[qué hace realmente este sitio más allá del DOM visible - 2-3 párrafos técnicos]

## PATRONES INFERIDOS
- [técnica premium probable #1 no visible en DOM pero inferida del stack]
- [técnica premium probable #2]
- [técnica premium probable #3]
- [continuación según sea necesario...]

## DIRECTIVAS DE NICHO: ${niche}
- [cómo adaptar patrón #1 específicamente para ${niche}]
- [cómo adaptar patrón #2 específicamente para ${niche}]
- [continuación...]

## GAPS DE EXTRACCIÓN
- [qué no pudiste ver y por qué importa #1]
- [qué no pudiste ver y por qué importa #2]
- [continuación...]

Sé específico, técnico, ejecutable. Sin frases genéricas. Usa terminología de ingeniería frontend senior.`;
}

function parseLlmResponse(rawContent) {
  const lines = rawContent.split("\n");

  const result = {
    interpretation: "",
    visualDescription: "",
    confidence: 0.7,
    gaps: [],
    rawContent
  };

  let currentSection = null;
  let buffer = [];

  for (const line of lines) {
    const trimmed = line.trim();

    if (trimmed.startsWith("## DESCRIPCIÓN VISUAL")) {
      if (currentSection && buffer.length) saveSection(result, currentSection, buffer);
      currentSection = "visualDescription";
      buffer = [];
    } else if (trimmed.startsWith("## INTERPRETACIÓN TÉCNICA") || trimmed.startsWith("## INTERPRETACION TECNICA")) {
      if (currentSection && buffer.length) saveSection(result, currentSection, buffer);
      currentSection = "interpretation";
      buffer = [];
    } else if (trimmed.startsWith("## PATRONES INFERIDOS")) {
      if (currentSection && buffer.length) saveSection(result, currentSection, buffer);
      currentSection = "patterns";
      buffer = [];
    } else if (trimmed.startsWith("## DIRECTIVAS DE NICHO")) {
      if (currentSection && buffer.length) saveSection(result, currentSection, buffer);
      currentSection = "directives";
      buffer = [];
    } else if (trimmed.startsWith("## GAPS DE EXTRACCIÓN") || trimmed.startsWith("## GAPS DE EXTRACCION")) {
      if (currentSection && buffer.length) saveSection(result, currentSection, buffer);
      currentSection = "gaps";
      buffer = [];
    } else if (trimmed.startsWith("##")) {
      if (currentSection && buffer.length) saveSection(result, currentSection, buffer);
      currentSection = "unknown";
      buffer = [];
    } else if (currentSection) {
      buffer.push(line);
    }
  }

  if (currentSection && buffer.length) {
    saveSection(result, currentSection, buffer);
  }

  // Calcular confianza basada en completitud
  let confidenceScore = 0.5;
  if (result.interpretation) confidenceScore += 0.12;
  if (result.visualDescription) confidenceScore += 0.15;
  if (result.patterns && result.patterns.length > 0) confidenceScore += 0.12;
  if (result.directives && result.directives.length > 0) confidenceScore += 0.06;
  if (result.gaps && result.gaps.length > 0) confidenceScore += 0.05;

  result.confidence = Math.min(0.95, confidenceScore);

  return result;
}

function saveSection(result, sectionName, buffer) {
  const content = buffer.join("\n").trim();
  if (!content) return;

  if (sectionName === "interpretation") {
    result.interpretation = content;
  } else if (sectionName === "visualDescription") {
    result.visualDescription = content;
  } else if (sectionName === "patterns") {
    result.patterns = content.split("\n")
      .filter(l => l.trim().startsWith("-"))
      .map(l => l.replace(/^-\s*/, "").trim())
      .filter(l => l.length > 0);
  } else if (sectionName === "directives") {
    result.directives = content.split("\n")
      .filter(l => l.trim().startsWith("-"))
      .map(l => l.replace(/^-\s*/, "").trim())
      .filter(l => l.length > 0);
  } else if (sectionName === "gaps") {
    result.gaps = content.split("\n")
      .filter(l => l.trim().startsWith("-"))
      .map(l => l.replace(/^-\s*/, "").trim())
      .filter(l => l.length > 0);
  }
}

// Función helper para integración con orchestrator
export async function tryLlmInterpret(config) {
  const { evidence, niche, knowledgeMatrix, screenshotsPath } = config;
  return await interpretEvidence({ evidence, niche, knowledgeMatrix, screenshotsPath });
}
