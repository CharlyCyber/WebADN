// src/modules/llmInterpreter.js
// Intérprete LLM central para análisis de evidencia técnica
// Soporta Claude (Anthropic) y OpenRouter como fallback

export async function interpretEvidence({ evidence, niche, knowledgeMatrix }) {
  const apiKey = process.env.ANTHROPIC_API_KEY || process.env.OPENROUTER_API_KEY;
  
  if (!apiKey) {
    return {
      used: false,
      reason: "No API key configured (ANTHROPIC_API_KEY or OPENROUTER_API_KEY)",
      interpretation: null,
      confidence: 0,
      gaps: []
    };
  }

  const useOpenRouter = !!process.env.OPENROUTER_API_KEY && !process.env.ANTHROPIC_API_KEY;
  const endpoint = useOpenRouter
    ? "https://openrouter.ai/api/v1/chat/completions"
    : "https://api.anthropic.com/v1/messages";

  const evidenceSummary = buildEvidenceSummary(evidence, knowledgeMatrix);
  const prompt = buildInterpretationPrompt(evidenceSummary, niche);

  try {
    const headers = {
      "Content-Type": "application/json"
    };

    if (useOpenRouter) {
      headers["Authorization"] = `Bearer ${apiKey}`;
      headers["HTTP-Referer"] = "https://github.com/premium-extractor";
      headers["X-Title"] = "Premium Extractor";
    } else {
      headers["x-api-key"] = apiKey;
      headers["anthropic-version"] = "2023-06-01";
    }

    const body = useOpenRouter
      ? {
          model: process.env.OPENROUTER_MODEL || "anthropic/claude-sonnet-4-20250514",
          messages: [
            { role: "user", content: prompt }
          ],
          max_tokens: 2000,
          temperature: 0.3
        }
      : {
          model: "claude-sonnet-4-20250514",
          max_tokens: 2000,
          system: "Eres un arquitecto senior de experiencias web premium especializado en ingeniería inversa de sitios Awwwards.",
          messages: [
            { role: "user", content: prompt }
          ]
        };

    const response = await fetch(endpoint, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(30000)
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => "Unknown error");
      return {
        used: false,
        reason: `API error ${response.status}: ${errorText}`,
        interpretation: null,
        confidence: 0,
        gaps: []
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
        gaps: []
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
      ...parsed
    };

  } catch (error) {
    return {
      used: false,
      reason: error.code === "ABORT_ERR" ? "Timeout (30s)" : error.message,
      interpretation: null,
      confidence: 0,
      gaps: []
    };
  }
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

function buildInterpretationPrompt(evidenceSummary, niche) {
  return `Eres un arquitecto senior de experiencias web premium.
Tienes la siguiente evidencia técnica extraída de un sitio de referencia.
Tu objetivo: interpretar lo que Playwright PUDO y NO PUDO capturar,
inferir patrones premium no visibles en el DOM, y generar directivas
técnicas específicas para recrear el nivel de experiencia en el nicho: "${niche}".

EVIDENCIA EXTRAÍDA:
${evidenceSummary}

Responde con ESTRICTAMENTE esta estructura:

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
    confidence: 0.7,
    gaps: [],
    rawContent
  };
  
  let currentSection = null;
  let buffer = [];
  
  for (const line of lines) {
    const trimmed = line.trim();
    
    if (trimmed.startsWith("## INTERPRETACIÓN TÉCNICA") || trimmed.startsWith("## INTERPRETACION TECNICA")) {
      if (currentSection && buffer.length) {
        saveSection(result, currentSection, buffer);
      }
      currentSection = "interpretation";
      buffer = [];
    } else if (trimmed.startsWith("## PATRONES INFERIDOS")) {
      if (currentSection && buffer.length) {
        saveSection(result, currentSection, buffer);
      }
      currentSection = "patterns";
      buffer = [];
    } else if (trimmed.startsWith("## DIRECTIVAS DE NICHO")) {
      if (currentSection && buffer.length) {
        saveSection(result, currentSection, buffer);
      }
      currentSection = "directives";
      buffer = [];
    } else if (trimmed.startsWith("## GAPS DE EXTRACCIÓN") || trimmed.startsWith("## GAPS DE EXTRACCION")) {
      if (currentSection && buffer.length) {
        saveSection(result, currentSection, buffer);
      }
      currentSection = "gaps";
      buffer = [];
    } else if (trimmed.startsWith("##")) {
      if (currentSection && buffer.length) {
        saveSection(result, currentSection, buffer);
      }
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
  if (result.interpretation) confidenceScore += 0.15;
  if (result.patterns && result.patterns.length > 0) confidenceScore += 0.15;
  if (result.directives && result.directives.length > 0) confidenceScore += 0.1;
  if (result.gaps && result.gaps.length > 0) confidenceScore += 0.1;
  
  result.confidence = Math.min(0.95, confidenceScore);
  
  return result;
}

function saveSection(result, sectionName, buffer) {
  const content = buffer.join("\n").trim();
  if (!content) return;
  
  if (sectionName === "interpretation") {
    result.interpretation = content;
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
  const { evidence, niche, knowledgeMatrix } = config;
  return await interpretEvidence({ evidence, niche, knowledgeMatrix });
}
