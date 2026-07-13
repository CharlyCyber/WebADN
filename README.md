# WebADN — Reverse Engineering & Context Compiler for AI Agents in IDEs

WebADN extrae el contexto profundo y exacto de sitios web de referencia y genera un paquete de archivos estructurado (gran contexto) que será consumido por agentes de IA en IDEs (Cursor, Claude Code) para generar sitios perfectos y adaptados a un nicho.

> ⚠️ **AVISO LEGAL:** WebADN extrae datos públicos y código para fines de análisis e ingeniería inversa. El usuario es el único responsable del uso legal de los sitios generados y del respeto a los derechos de autor de las referencias analizadas.

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

### Cómo usar WebADN con Cursor / Claude Code
```bash
# 1. Extraer el contexto de un sitio de referencia
npm start -- --url "https://example.com" --niche "tu-nicho"

# 2. Copia la carpeta webadn-context-output/ a tu workspace del IDE
#    (contiene manifest.md, design-tokens.json, structure-layout.json, .cursorrules)

# 3. En Cursor: los archivos en webadn-context-output/ sirven como contexto
#    directo para el agente. El archivo .cursorrules ajusta el comportamiento
#    del agente automáticamente.

# 4. En Claude Code: pega el contenido de manifest.md + design-tokens.json
#    como contexto del proyecto, y usa structure-layout.json + animations-behavior.md
#    como referencia durante la generación.
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

# Descargar assets binarios (imágenes y fuentes)
npm start -- --url "https://example.com" --niche "test" --download-binaries
```

### Subcomandos
```bash
# Listar ejecuciones anteriores
webadn list

# Comparar dos ejecuciones
webadn compare <runFolder1> <runFolder2>
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

## Salida Dual

WebADN genera dos formas de output simultáneamente:

### 1. Mega-Brief (`prompt.md`)
El markdown completo con diagnóstico técnico, diseño, animaciones, CRO y prompt final ejecutable.

### 2. Paquete de Contexto Estructurado (`webadn-context-output/`)
Carpeta diseñada para consumo directo por agentes de IA en IDEs:

| Archivo | Propósito |
|---------|-----------|
| `manifest.md` | Resumen ejecutivo, diagnóstico de conversión, nicho objetivo |
| `design-tokens.json` | Paleta exacta, escala de spacing, tipografías, sombras |
| `structure-layout.json` | Grid, proporciones, orden de secciones |
| `animations-behavior.md` | Keyframes, transiciones, lógica GSAP/Three.js |
| `.cursorrules` | Reglas automáticas para Cursor IDE |

Para usar con Cursor: copia la carpeta `webadn-context-output/` a tu workspace. Para Claude Code: usa los archivos como contexto de proyecto.

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
