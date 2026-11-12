# Imagen oficial de Playwright: trae Chromium y todas sus librerías de sistema.
# La versión debe coincidir con la de "playwright" en package-lock.json.
FROM mcr.microsoft.com/playwright:v1.60.0-noble

WORKDIR /app
ENV NODE_ENV=production \
    HOST=0.0.0.0 \
    TRUST_PROXY=true \
    MAX_CONCURRENT=1 \
    MAX_QUEUE=3 \
    LOW_MEMORY=true \
    KEEP_AWAKE=true \
    MAX_RUNS=8 \
    NODE_OPTIONS=--max-old-space-size=256

COPY package.json package-lock.json ./
# --omit=optional: pdfjs-dist solo se sirve al navegador; su binario de canvas para Node no hace falta.
RUN npm ci --omit=dev --omit=optional --ignore-scripts

COPY src ./src
COPY public ./public

# Las extracciones se guardan aquí (se pierden al reiniciar salvo que montes un disco en /data).
ENV RUNS_DIR=/data/runs
# Se ejecuta como root a propósito: los discos de Render se montan como root y
# Chromium ya corre con --no-sandbox dentro del contenedor.
RUN mkdir -p /data/runs

EXPOSE 10000
ENV PORT=10000
CMD ["node", "src/server.js"]
