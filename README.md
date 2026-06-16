# Surgical Web Extractor & Prompt Engine

Herramienta local Node.js para inspeccionar una URL de referencia y generar un Master Prompt técnico orientado a construir sitios web premium adaptados a un nicho comercial.

![Demo](https://media.giphy.com/media/v1.Y2lkYT1yZWNvcmQmYXNwZWN0PXJhdGlvJmN0PWc/giphy.gif)

## Instalación

```bash
npm install
npm run setup
```

## Uso CLI

### Extracción básica
```bash
npm start -- --url "https://example.com" --niche "estudio premium de arquitectura"
```

### Presets de extracción
```bash
# fast — extracción rápida, menos datos (ideal para pruebas)
--preset fast

# standard — equilibrio (default)
--preset standard

# surgical — máxima profundidad: scroll completo, animaciones, WebGL, hovers
--preset surgical
```

### Otras opciones
```bash
# Con video de referencia
npm start -- --url "https://example.com" --video "./referencia.mp4" --niche "marca de lujo sostenible"

# Modo demo (sin navegación real)
npm run demo

# Ignorar robots.txt (solo con permiso del dueño)
npm start -- --url "https://example.com" --niche "test" --ignore-robots

# Forzar re-extracción (ignorar caché)
npm start -- --url "https://example.com" --niche "test" --force

# Output en diferentes formatos
npm start -- --url "https://example.com" --niche "test" --output json    # JSON estructurado
npm start -- --url "https://example.com" --niche "test" --output html    # Viewer HTML visual
npm start -- --url "https://example.com" --niche "test" --output markdown # Markdown (default)
```

### Subcomandos
```bash
# Listar ejecuciones anteriores
surgical-extractor list

# Comparar dos ejecuciones
surgical-extractor compare <runFolder1> <runFolder2>
```

## Dashboard web

```bash
npm run web
```

Abre `http://127.0.0.1:4173` y ejecuta extracciones desde la interfaz gráfica.

### Seguridad del dashboard
- Escucha solo en `127.0.0.1` (no accesible desde la red).
- Opcional: define `AUTH_TOKEN=tu-token` en `.env` para proteger los endpoints.
- Rate limit: máximo 5 peticiones por minuto por IP.
- Streaming SSE en tiempo real para ver el progreso de extracción.

## Variables de entorno

Copia `.env.example` a `.env`. Variables disponibles:

| Variable | Default | Descripción |
|----------|---------|-------------|
| `ANTHROPIC_API_KEY` | — | Clave de Claude API directo |
| `OPENROUTER_API_KEY` | — | Clave de OpenRouter (acceso a Gemini, GPT-4, etc.) |
| `OPENROUTER_MODEL` | `anthropic/claude-sonnet-4-20250514` | Modelo a usar via OpenRouter |
| `GEMINI_API_KEY` | — | Clave de Gemini para análisis multimedia |
| `VISION_MODEL` | `gemini-2.5-flash` | Modelo de visión |
| `OLLAMA_MODEL` | `qwen2.5-coder:7b` | Modelo local para fallback offline |
| `OLLAMA_HOST` | `http://localhost:11434` | Host de Ollama |
| `HEADLESS` | `true` | Modo headless del navegador |
| `SCRAPER_TIMEOUT_MS` | `30000` | Timeout del scraper |
| `MAX_CONCURRENT` | `2` | Extracciones simultáneas máximas |
| `MAX_QUEUE` | `10` | Máximo en cola de espera |
| `TRUST_PROXY` | `false` | Confiar en header X-Forwarded-For |
| `AUTH_TOKEN` | — | Token Bearer para proteger el dashboard |

## Salida

El CLI imprime un bloque Markdown con diagnóstico técnico completo del sitio de referencia:

1. Executive Design Diagnosis (con interpretación LLM si está disponible)
2. Tech Stack & Design Tokens
3. Arquitectura de Conversión & Pushback
4. Ingeniería de Animaciones (GSAP, scroll, WebGL)
5. Adaptación al Nicho
6. Prompt Final Ejecutable

### Ejemplo de output (Nicho: Estudio de Arquitectura Premium)

````markdown
# 1. Executive Design Diagnosis

**Design Language:** Minimalist Brutalism (confidence: 87%)
**Signals:** Large typography, high contrast, grid-based layout, generous whitespace
**Sections:** 8 major sections detected
**Motion Complexity:** 12 scroll-linked animations
**CSS Complexity:** 72/100
**Visual Rhythm:** 8 estimated sections; sticky scenes present; 5 major transition(s)

This reference uses a Minimalist Brutalism approach with heavy motion choreography and advanced CSS effects.

---

# 2. Fidelity Target

Recreate the exact visual weight and spatial rhythm of the reference site...
````

## Qué puede y qué no puede detectar

### ✅ Puede detectar:
- **Tech Stack**: Frameworks JS, librerías de animación (GSAP, Three.js), CMS
- **Design Tokens**: Colores, tipografías, spacing, breakpoints
- **Animaciones**: Timelines de GSAP, scroll triggers, keyframes CSS
- **Estructura**: Secciones, CTAs, jerarquía semántica
- **Assets**: Imágenes, videos, fuentes, modelos 3D
- **Performance**: LCP, CLS, FCP vía Chrome DevTools Protocol
- **WebGL**: Shaders, uniforms, canvas contexts, animaciones time-based
- **Patrones Premium**: Técnicas inferidas mediante IA cuando no son visibles en el DOM

### ❌ No puede detectar:
- **Lógica backend**: APIs privadas, bases de datos, autenticación
- **Contenido dinámico behind auth**: Sitios que requieren login
- **Animaciones trigger-by-user complejo**: Interacciones que requieren gestos específicos
- **Shaders GLSL completos**: Solo detecta presencia y uniforms básicos
- **Decisiones de diseño intencionales**: Por qué se eligió X color o Y layout (la IA puede inferir, pero no conoce el brief original)

## Legal

Esta herramienta extrae información técnica con Playwright para fines de estudio e inspiración. Respeta robots.txt de cada sitio. Los assets descargados son solo para uso local. No clones contenido protegido. Revisa los Términos de Servicio de cada web antes de extraer. El responsable legal del uso es el operador de la herramienta.

## Tests

```bash
npm test
```

Incluye tests de integración para:
- Extracción básica de tecnologías
- Detección de secciones y estructura
- Análisis de tokens de diseño
- Cálculo de fidelity score
- Composición del mega brief
