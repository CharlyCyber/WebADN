export async function tryLocalLlm(evidenceSummary, options = {}) {
  const model = process.env.OLLAMA_MODEL;
  if (!model) {
    return {
      used: false,
      reason: "OLLAMA_MODEL not set",
      result: null
    };
  }

  const host = process.env.OLLAMA_HOST || "http://localhost:11434";
  const timeout = options.timeout || 30000;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    const response = await fetch(`${host}/api/generate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model,
        prompt: buildLlmPrompt(evidenceSummary),
        stream: false,
        options: {
          temperature: 0.3,
          num_predict: 2000
        }
      }),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      return {
        used: false,
        reason: `Ollama returned ${response.status}`,
        result: null
      };
    }

    const data = await response.json();

    return {
      used: true,
      model,
      result: data.response || null,
      done: data.done
    };
  } catch (error) {
    return {
      used: false,
      reason: error.code === "ABORT_ERR" ? "Timeout" : error.message,
      result: null
    };
  }
}

function buildLlmPrompt(evidenceSummary) {
  return `You are a senior design engineer analyzing a website reference for recreation.

Based on this structured evidence, provide:
1. A one-paragraph design diagnosis (what makes this site distinctive)
2. The 3-5 most important engineering challenges to recreate it
3. One critical pushback: what should NOT be copied and why

Evidence:
${evidenceSummary}

Respond in concise bullets. No fluff.`;
}
