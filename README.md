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

### El flujo: extraer → construir → medir

```bash
# 1. Extraer: mide la referencia y genera el kit en runs/<run>/kit/
npm start -- --url "https://sitio-awwwards.com" --niche "clínica dental premium"

# 2. Construir: dale kit/PROMPT.md a tu IA (pegado en un chat, o la carpeta kit/
#    entera en Cursor / Claude Code) y sirve el resultado en local.

# 3. Medir: la misma sonda mide tu build y devuelve nota 0-100 + qué corregir
node src/cli.js compare --ref runs/<run>/kit --build http://localhost:5173

# 4. Pega el informe a tu IA y repite 3-4 hasta ≥ 85.
```

`npm link` deja el comando `webadn` disponible globalmente (`webadn compare ...`).

Opciones de `compare`: `--ignore color,typography` (no puntuar dimensiones que tu nicho cambia a
propósito), `--min 85` (exit code 2 si no llega: útil en CI o en bucles de agente), `--json`,
`--depth fast|standard|surgical`, `--out carpeta`. `--ref` acepta una URL, un `fingerprint.json`,
la carpeta del kit o el nombre de un run.

### Como herramienta MCP (Claude Code, Cursor…)

El agente extrae y se mide solo, sin que copies nada:

```json
{ "mcpServers": { "webadn": { "command": "node", "args": ["/ruta/a/WebADN/src/cli.js", "mcp"] } } }
```

Herramientas: `webadn_extract(url, niche)` y `webadn_compare(reference, build_url, ignore?)`.

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

# Medir un build contra una referencia (ver arriba)
webadn compare --ref <kit|run|fingerprint.json|url> --build <url>

# Tabular los metadatos de dos extracciones
webadn compare <runFolder1> <runFolder2>

# Servidor MCP por stdio
webadn mcp
```

## Dashboard web

```bash
npm run web
```

Abre `http://127.0.0.1:4173`. Son tres pasos: **Extraer** (URL + nicho), **Kit** (copiar el
prompt o descargar el `.zip`) y **Medir** (nota de fidelidad, correcciones para pegar a tu IA y
capturas lado a lado). La interfaz es responsive y guarda los últimos kits en el navegador.

En **Extraer** eliges cómo describir tu negocio: **Escribir nicho** (una frase) o **Adjuntar PDF**
con su información (servicios, textos, contacto). El texto del PDF se lee en tu dispositivo —el
archivo no se sube— y se usa solo como contenido: ni el nicho ni el PDF cambian lo medido en la
referencia. El prompt incluye además un **plano por sección** (posición, ancho, tipografía y
agrupación de cada elemento en escritorio y móvil) y las fuentes web detectadas.

El dashboard usa una extracción ligera (solo la sonda de huella y el kit). El pipeline clásico
completo, con el brief largo, sigue disponible desde el CLI.

### Usarlo desde el móvil

```bash
HOST=0.0.0.0 npm run web     # luego abre http://<IP-de-tu-PC>:4173 en el móvil
```

El navegador que mide corre en el PC; el móvil solo es la pantalla. Por eso, en "URL de tu
build", `localhost` significa el PC.

### Usarlo sin tu PC (Render)

El repo incluye `Dockerfile` y `render.yaml` para el plan gratuito: New + → Blueprint → Apply.
Guía y límites en
[`docs/deploy-render.md`](docs/deploy-render.md).

### Seguridad del dashboard
- Por defecto escucha solo en `127.0.0.1`. Con `HOST=0.0.0.0` queda accesible a toda tu red:
  úsalo solo en redes de confianza.
- Medir URLs locales/privadas solo está permitido por defecto cuando el servidor es local
  (`ALLOW_LOCAL_BUILDS`); en un servidor expuesto permitiría sondear la red interna.
- `/api/shutdown` solo responde a la propia máquina.
- `AUTH_TOKEN` es la contraseña del dashboard: el navegador entra por `/login` (cookie de sesión
  firmada, 30 días) y los scripts con `Authorization: Bearer <AUTH_TOKEN>`.
- Rate limit: máximo 5 peticiones POST por minuto por IP.

**Despliegue seguro:** cualquier despliegue accesible fuera de `127.0.0.1` requiere `AUTH_TOKEN` de al menos 16 caracteres. Si falta o es demasiado corto, el servidor no arranca. Para acceso desde otros dispositivos de tu red local, configura también una contraseña antes de usar `HOST=0.0.0.0`.

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
| `HOST` | `127.0.0.1` | Interfaz de escucha (`0.0.0.0` para la red local / móvil) |
| `ALLOW_LOCAL_BUILDS` | `true` si HOST es local | Permitir medir builds en localhost/red privada |
| `ALLOW_EMBED` | `false` | Quitar `X-Frame-Options: DENY` (dashboard dentro de un iframe) |
| `RUNS_DIR` | `./runs` | Carpeta de extracciones (p. ej. un disco persistente) |
| `LOW_MEMORY` | `false` | Chromium con menos procesos y sin GPU (instancias de 512 MB) |
| `KEEP_AWAKE` | `true` en Render | El servicio visita su URL cada 10 min para no dormirse |
| `DEFAULT_PRESET` | `standard` | Profundidad de medición del dashboard |
| `CHROMIUM_PATH` | — | Usar un Chromium ya instalado en vez del de Playwright |

## Salida: el Build Kit

Cada extracción escribe `runs/<run>/kit/`:

| Archivo | Para quién | Qué es |
|---------|-----------|--------|
| `PROMPT.md` | La IA que construye | Encargo autocontenido: reglas, sistema de diseño, tabla tipográfica, cada sección con su layout y sus animaciones (propiedades, duración, retardo, easing, stagger), scroll (pins, parallax), hovers y criterios de aceptación. Se puede pegar tal cual en un chat. |
| `spec.json` | Agentes con acceso a archivos | Las mismas medidas completas y exactas, por viewport (escritorio 1440 y móvil 390). Fuente de verdad. |
| `screenshots/` | Modelos con visión | Una captura por sección, escritorio y móvil. |
| `fingerprint.json` | `webadn compare` | La huella contra la que se mide tu build. |
| `extras/brief.md` | Opcional | El mega-brief clásico (CRO, stack detectado, assets). |

Por qué este formato: un prompt solo pierde precisión (los modelos redondean números en prosa) y
un JSON solo no le dice al modelo qué hacer. El prompt dirige, el JSON precisa, las capturas
desambiguan y la huella permite **verificar**.

### Cómo se calcula la fidelidad

`compare` mide el build con la misma sonda y puntúa 8 dimensiones en escritorio (65 %) y móvil
(35 %): estructura 12 %, layout 18 %, tipografía 18 %, color 12 %, animación y scroll 18 %,
hover 7 %, efectos 5 %, composición visual 10 %. No compara textos ni imágenes, así que adaptar
el contenido a tu nicho no baja la nota. Es una medida del sistema visual y de movimiento, no un
juicio estético: ≥ 85 significa que las medidas coinciden, no que el sitio sea igual de bueno.

Límites conocidos: el contenido WebGL/canvas se detecta y se captura, pero no se puede medir por
dentro; animaciones que dependen de interacción compleja (arrastre, audio) no se disparan; sitios
con protección anti-bot pueden no cargar.

En `runs/<run>/` siguen estando `prompt.md`, `evidence.json` y `webadn-context-output/` de la
versión anterior.

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


## Autor

Desarrollado por **Charli Rodríguez — Charli AI**.

- Portafolio: https://charli-ai-portfolio.vercel.app
- GitHub: https://github.com/CharlyCyber
