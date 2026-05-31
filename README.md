# Surgical Web Extractor & Prompt Engine

Herramienta local Node.js para convertir una URL, un video opcional y un nicho comercial en un Master Prompt tÃ©cnico orientado a construir sitios premium con foco real en conversiÃ³n.

## InstalaciÃ³n

```bash
npm install
npx playwright install chromium
```

## Uso

```bash
npm start -- --url "https://example.com" --niche "estudio premium de arquitectura"
```

## Dashboard web

```bash
npm run web
```

Abre `http://localhost:4173` y ejecuta extracciones desde la interfaz.

Con video:

```bash
npm start -- --url "https://example.com" --video "./referencia.mp4" --niche "marca de lujo sostenible"
```

Modo sin navegar, Ãºtil para probar la generaciÃ³n del prompt:

```bash
npm run demo
```

## Variables de entorno

Copia `.env.example` a `.env` y rellena `GEMINI_API_KEY` si quieres anÃ¡lisis multimedia con Gemini. Si no hay clave, el Vision Engine devuelve un anÃ¡lisis heurÃ­stico y deja explÃ­cito quÃ© faltÃ³.

## Salida

El CLI imprime un Ãºnico bloque Markdown con:

1. Tech Stack & Tokens
2. Arquitectura de ConversiÃ³n & Pushback
3. Desglose de IngenierÃ­a de Animaciones
4. AdaptaciÃ³n al Nicho
5. Prompt Final Ejecutable

## Legal

Este tool extrae informaciÃ³n tÃ©cnica con Playwright para fines de estudio/inspiraciÃ³n. Respeta los robots.txt de cada sitio. Los assets descargados son solo para uso local. No clones contenido protegido. Revisa los Terms of Service de cada web antes de extraer.

