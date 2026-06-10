# Surgical Web Extractor & Prompt Engine

Herramienta local Node.js para inspeccionar una URL de referencia y generar un Master Prompt técnico orientado a construir sitios web premium adaptados a un nicho comercial.

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

## Variables de entorno

Copia `.env.example` a `.env`. Variables disponibles:

| Variable | Default | Descripción |
|----------|---------|-------------|
| `GEMINI_API_KEY` | — | Clave de Gemini para análisis multimedia |
| `VISION_MODEL` | `gemini-2.5-flash` | Modelo de visión |
| `HEADLESS` | `true` | Modo headless del navegador |
| `SCRAPER_TIMEOUT_MS` | `30000` | Timeout del scraper |
| `MAX_CONCURRENT` | `2` | Extracciones simultáneas máximas |
| `MAX_QUEUE` | `10` | Máximo en cola de espera |
| `TRUST_PROXY` | `false` | Confiar en header X-Forwarded-For |
| `AUTH_TOKEN` | — | Token Bearer para proteger el dashboard |

## Salida

El CLI imprime un bloque Markdown con diagnóstico técnico completo del sitio de referencia:

1. Tech Stack & Design Tokens
2. Arquitectura de Conversión & Pushback
3. Ingeniería de Animaciones (GSAP, scroll, WebGL)
4. Adaptación al Nicho
5. Prompt Final Ejecutable

## Legal

Esta herramienta extrae información técnica con Playwright para fines de estudio e inspiración. Respeta robots.txt de cada sitio. Los assets descargados son solo para uso local. No clones contenido protegido. Revisa los Términos de Servicio de cada web antes de extraer. El responsable legal del uso es el operador de la herramienta.
