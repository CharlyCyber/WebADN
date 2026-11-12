# Desplegar WebADN en Render (plan gratuito)

El dashboard queda en una URL fija (`https://<nombre>.onrender.com`) y lo usas desde el celular
sin tener tu PC encendido.

## Pasos

1. En Render: **New + → Blueprint** → elige el repositorio `WebADN`.
2. Escribe un valor para **`AUTH_TOKEN`**: es la contraseña con la que entrarás (16+ caracteres).
3. **Apply**. El primer despliegue tarda varios minutos (la imagen incluye Chromium).
4. Abre la URL en el celular, pon la contraseña y, si quieres, "Añadir a pantalla de inicio".

No hay nada más que configurar: el resto de valores vienen en el `Dockerfile`.

## Qué esperar del plan gratuito

- **Memoria (512 MB).** El servidor arranca en modo de bajo consumo (`LOW_MEMORY=true`): una sola
  medición a la vez y Chromium sin proceso de GPU. En pruebas con una página sencilla el pico fue
  de ~400 MB. Sitios pesados (WebGL, vídeo, páginas muy largas) pueden agotar la memoria: el
  servicio se reinicia solo y el dashboard te avisa de que la conexión se cortó. Sin GPU, los
  lienzos WebGL pueden salir en blanco en las capturas.
- **Se mantiene despierto.** Render duerme los servicios gratuitos tras 15 minutos sin visitas; el
  servidor visita su propia URL cada 10 minutos para evitarlo (`KEEP_AWAKE=true`). Tras un
  despliegue o un reinicio, la primera carga sí tarda alrededor de un minuto.
- **Horas gratuitas.** Render da un cupo mensual de horas gratuitas compartido entre todos los
  servicios web gratuitos de tu cuenta (750 h al escribir esto; confírmalo en render.com/pricing).
  Un servicio despierto todo el mes consume casi todo el cupo. Si tus otros proyectos también son
  servicios web gratuitos, pon `KEEP_AWAKE=false` en Environment para que este duerma cuando no lo
  uses; si se agota el cupo, Render suspende los servicios gratuitos hasta el mes siguiente.
- **Sin disco.** El historial del servidor se borra en cada reinicio o despliegue. Por eso el
  dashboard guarda tus últimos kits en el propio celular: puedes seguir copiando el prompt y
  midiendo aunque el servidor se haya reiniciado. Lo que sí se pierde son las capturas y el `.zip`;
  descárgalo al terminar si lo quieres.

## Diferencias respecto a usarlo en tu PC

- **"Medir" necesita una URL pública.** El servidor no puede abrir `localhost`. Publica tu sitio
  (Render Static Site, Vercel, Netlify…) y pega esa URL.
- Algunos sitios bloquean el tráfico que viene de centros de datos; si una referencia no carga en
  Render pero sí desde tu PC, es por eso.

## Acceso

- Navegador: contraseña en `/login`; la sesión dura 30 días. Cambiar `AUTH_TOKEN` cierra todas las
  sesiones. 5 intentos por minuto.
- Scripts / API: cabecera `Authorization: Bearer <AUTH_TOKEN>`.

## Si quieres más margen

Con un plan de pago de 2 GB o más: en Environment pon `LOW_MEMORY=false` (recupera WebGL) y
`KEEP_AWAKE=false` (ya no se duerme), y añade un disco montado en `/data` para conservar el
historial.

## Si actualizas Playwright

La etiqueta de la imagen en la primera línea del `Dockerfile` (`v1.60.0`) debe coincidir con la
versión de `playwright` en `package-lock.json`; si no, el navegador no arranca.
