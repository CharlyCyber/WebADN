# Desplegar WebADN en Render

Con esto el dashboard vive en una URL fija (`https://<nombre>.onrender.com`) y lo usas desde el
celular sin tener tu PC encendido.

## Pasos

1. Asegúrate de que `Dockerfile` y `render.yaml` están en la rama `main` de GitHub.
2. En Render: **New + → Blueprint** → elige el repositorio `WebADN`.
3. Render te pedirá el valor de **`AUTH_TOKEN`**: es la contraseña del dashboard. Usa una larga
   (16+ caracteres); es lo único que protege el servicio. Sin ella el servidor se niega a arrancar.
4. **Apply**. El primer despliegue tarda varios minutos (la imagen incluye Chromium).
5. Abre la URL en el celular, introduce la contraseña y, si quieres, "Añadir a pantalla de inicio".

Para hacerlo sin Blueprint: **New + → Web Service → Docker**, health check `/healthz`, y añade la
variable `AUTH_TOKEN` a mano.

## Qué plan elegir

Una extracción en profundidad estándar de una página de prueba muy sencilla llegó a **~480 MB**
de memoria (Node + Chromium). Un sitio real con WebGL y vídeo usará más.

| Plan de Render | RAM | Qué esperar |
|---|---|---|
| Free / Starter | 512 MB | Lo más probable es que el servicio se reinicie por falta de memoria a mitad de extracción. Free además se duerme tras 15 min sin uso y no admite disco. |
| Standard | 2 GB | El recomendado; es el que trae `render.yaml`. |

Los precios cambian: confírmalos en render.com/pricing. Si quieres probar gratis de todos modos,
cambia `plan: free` en `render.yaml`, borra el bloque `disk:` y usa la profundidad "Rápida".

## Historial y kits

`render.yaml` monta un disco de 1 GB en `/data`; las extracciones se guardan en `/data/runs`
(variable `RUNS_DIR`) y sobreviven a reinicios y despliegues. Sin disco, el historial se pierde en
cada reinicio: descarga el kit en `.zip` al terminar.

## Diferencias respecto a usarlo en tu PC

- **"Medir build" necesita una URL pública.** El servidor no puede abrir el `localhost` de tu PC
  ni de tu celular. Despliega tu build (Render Static Site, Vercel, Netlify…) y pega esa URL.
- Por seguridad, el servidor no mide direcciones privadas ni locales.
- Una sola extracción a la vez (`MAX_CONCURRENT=1`); las demás esperan en cola.
- Algunos sitios bloquean el tráfico que viene de centros de datos; si una referencia no carga en
  Render pero sí desde tu PC, es por eso.

## Acceso

- Navegador: formulario de contraseña en `/login`; la sesión dura 30 días (`/logout` para salir).
  Cambiar `AUTH_TOKEN` cierra todas las sesiones.
- Scripts / API: cabecera `Authorization: Bearer <AUTH_TOKEN>`.
- 5 intentos de contraseña por minuto.

## Variables

| Variable | Valor en Render | Para qué |
|---|---|---|
| `AUTH_TOKEN` | (la defines tú) | Contraseña del dashboard. Obligatoria. |
| `RUNS_DIR` | `/data/runs` | Dónde se guardan las extracciones. |
| `MAX_CONCURRENT` | `1` | Extracciones simultáneas. |
| `PORT`, `HOST`, `TRUST_PROXY` | ya definidas en el `Dockerfile` | No hace falta tocarlas. |

## Si actualizas Playwright

La etiqueta de la imagen en la primera línea del `Dockerfile` (`v1.60.0`) debe coincidir con la
versión de `playwright` en `package-lock.json`; si no, el navegador no arranca.
