// Acceso al dashboard cuando está expuesto (AUTH_TOKEN definido):
//  - API / scripts: cabecera  Authorization: Bearer <AUTH_TOKEN>
//  - Navegador: formulario en /login que deja una cookie de sesión firmada.
// La cookie es un HMAC derivado del token: no hay estado en el servidor, sobrevive a
// reinicios y deja de valer en cuanto se cambia AUTH_TOKEN.

import { createHmac, timingSafeEqual } from "node:crypto";

export const SESSION_COOKIE = "webadn_session";
const SESSION_MAX_AGE_S = 60 * 60 * 24 * 30;

function safeEqual(a, b) {
  const x = Buffer.from(String(a));
  const y = Buffer.from(String(b));
  return x.length === y.length && timingSafeEqual(x, y);
}

export function sessionValue(token) {
  return createHmac("sha256", String(token)).update("webadn-dashboard-session-v1").digest("hex");
}

export function parseCookies(header = "") {
  const out = {};
  for (const part of String(header).split(";")) {
    const i = part.indexOf("=");
    if (i > 0) out[part.slice(0, i).trim()] = part.slice(i + 1).trim();
  }
  return out;
}

export function checkPassword(token, candidate) {
  return Boolean(token) && typeof candidate === "string" && safeEqual(candidate, token);
}

/** ¿La petición trae credenciales válidas (Bearer o cookie de sesión)? */
export function isAuthorized(token, headers = {}) {
  if (!token) return true;
  const auth = headers.authorization;
  if (typeof auth === "string" && auth.startsWith("Bearer ") && safeEqual(auth.slice(7), token)) return true;
  const cookie = parseCookies(headers.cookie)[SESSION_COOKIE];
  return Boolean(cookie) && safeEqual(cookie, sessionValue(token));
}

export function sessionCookie(token, { secure = false } = {}) {
  return `${SESSION_COOKIE}=${sessionValue(token)}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${SESSION_MAX_AGE_S}${secure ? "; Secure" : ""}`;
}

export function clearSessionCookie() {
  return `${SESSION_COOKIE}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`;
}

export function loginPage({ error = "" } = {}) {
  return `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="robots" content="noindex" />
<meta name="theme-color" content="#121212" />
<title>WebADN — acceso</title>
<style>
  * { box-sizing: border-box; }
  body { margin: 0; min-height: 100dvh; display: grid; place-items: center; padding: 20px; background: #121212; color: #fff; font-family: system-ui, -apple-system, "Segoe UI", sans-serif; }
  form { width: min(100%, 380px); display: grid; gap: 16px; padding: 28px 24px; background: #1e1e1e; border: 1px solid #2a2a2a; border-radius: 12px; }
  h1 { margin: 0; font-size: 1.35rem; }
  p { margin: 0; color: #b0b0b0; font-size: 0.9rem; line-height: 1.5; }
  label { display: grid; gap: 8px; font-size: 0.8rem; color: #b0b0b0; }
  input { min-height: 48px; padding: 0 14px; font-size: 16px; color: #fff; background: #181818; border: 1px solid #3a3a3a; border-radius: 8px; }
  input:focus-visible, button:focus-visible { outline: 2px solid #e07b30; outline-offset: 2px; }
  button { min-height: 50px; font-size: 1rem; font-weight: 600; color: #fff; background: #d2691e; border: 0; border-radius: 8px; cursor: pointer; }
  .error { color: #ff8a8a; }
</style>
</head>
<body>
<form method="post" action="/login">
  <h1>WebADN</h1>
  <p>Este dashboard es privado. Introduce la contraseña.</p>
  <label>Contraseña
    <input type="password" name="password" autocomplete="current-password" required autofocus />
  </label>
  ${error ? `<p class="error" role="alert">${error}</p>` : ""}
  <button type="submit">Entrar</button>
</form>
</body>
</html>`;
}
