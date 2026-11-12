import test from "node:test";
import assert from "node:assert/strict";
import { checkPassword, isAuthorized, loginPage, parseCookies, sessionCookie, sessionValue, SESSION_COOKIE } from "../src/support/auth.js";

const TOKEN = "una-contraseña-larga-123";

test("sin AUTH_TOKEN todo está autorizado", () => {
  assert.equal(isAuthorized("", {}), true);
});

test("Bearer correcto autoriza; incorrecto o ausente no", () => {
  assert.equal(isAuthorized(TOKEN, { authorization: `Bearer ${TOKEN}` }), true);
  assert.equal(isAuthorized(TOKEN, { authorization: "Bearer otra" }), false);
  assert.equal(isAuthorized(TOKEN, { authorization: TOKEN }), false);
  assert.equal(isAuthorized(TOKEN, {}), false);
});

test("la cookie de sesión autoriza y no contiene la contraseña", () => {
  const cookie = sessionCookie(TOKEN, { secure: true });
  assert.match(cookie, /HttpOnly/);
  assert.match(cookie, /SameSite=Lax/);
  assert.match(cookie, /Secure/);
  assert.ok(!cookie.includes(TOKEN));
  const value = parseCookies(cookie.split(";")[0])[SESSION_COOKIE];
  assert.equal(value, sessionValue(TOKEN));
  assert.equal(isAuthorized(TOKEN, { cookie: `otra=1; ${SESSION_COOKIE}=${value}` }), true);
  assert.equal(isAuthorized(TOKEN, { cookie: `${SESSION_COOKIE}=${"0".repeat(64)}` }), false);
  // Cambiar la contraseña invalida las sesiones anteriores
  assert.equal(isAuthorized("otra-contraseña-456", { cookie: `${SESSION_COOKIE}=${value}` }), false);
});

test("checkPassword exige coincidencia exacta", () => {
  assert.equal(checkPassword(TOKEN, TOKEN), true);
  assert.equal(checkPassword(TOKEN, TOKEN + "x"), false);
  assert.equal(checkPassword(TOKEN, ""), false);
  assert.equal(checkPassword("", ""), false);
  assert.equal(checkPassword(TOKEN, undefined), false);
});

test("la página de login es un formulario POST sin scripts", () => {
  const html = loginPage({ error: "Contraseña incorrecta." });
  assert.match(html, /<form method="post" action="\/login">/);
  assert.match(html, /Contraseña incorrecta\./);
  assert.doesNotMatch(html, /<script/);
});
