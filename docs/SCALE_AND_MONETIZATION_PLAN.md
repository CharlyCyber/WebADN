# WebADN — Plan de Escalamiento y Monetización

> **Estado:** Aprobado como roadmap fundador (decisión experta, sin bloqueo).
> **Fecha:** 2026-06-20
> **Autor:** Análisis Senior (arch-auditor-pro + auditoría de código completa)
> **Objetivo:** Convertir el motor de extracción local en un producto SaaS/API monetizable de uso público, sin perder el caso de uso CLI local.

---

## 0. Decisiones de producto (tomadas como founder)

Estas decisiones condicionan toda la arquitectura. Están justificadas; si alguna no encaja, se ajusta antes de la Fase 1.

| Eje | Decisión | Por qué |
|---|---|---|
| **Modelo de producto** | **SaaS multi-tenant + API pública B2B (híbrido)** | El motor ya genera el output más valioso (Master Prompt). El SaaS captura agencias/freelancers (volumen, recurrente). La API captura SaaS integradores (margen alto, baja fricción). Lanzar los dos con un mismo backend maximiza LTV y diversifica el riesgo de canal. No elegir solo uno deja dinero en la mesa. |
| **Infra** | **Fly.io** (apps + Postgres + workers + volúmenes) + **Cloudflare R2** (assets/screenshots) | Fly.io: despliegue trivial, escalado por región, precio predecible (~$5–25/mes enearly stage). R2: egress gratis para servir screenshots. Evita AWS/K8s hasta tener tracción. |
| **Equipo** | **Solo yo** (por ahora) | Stack gestionado, observabilidad out-of-the-box, PaaS para no operar infra. |
| **CLI local** | **Se preserva** como distribución open-core (MIT) | Mantener la comunidad/distribución gratuita como top-of-funnel hacia el SaaS de pago. El motor sigue siendo local; el SaaS añade multi-tenancy, almacenamiento, facturación. |
| **Monetización** | **Híbrido:** suscripción freemium + créditos pay-as-you-go para overage y API | Suscripción = ingresos recurrentes predecibles. Créditos = monetizar uso B2B esporádico sin obligar a tier alto. Es el modelo con mejor LTV (referencia: Replicate, Vercel, OpenAI). |
| **Time-to-market** | **MVP cobrable en ~3–4 semanas** | Priorizar "cobrable pero feo" sobre "perfecto pero tarde". Las primeras 3 fases entregan un producto facturable. |

---

## 1. Arquitectura objetivo

### 1.1 Visión de capas

```
┌─────────────────────────────────────────────────────────────┐
│  CANALES DE ENTRADA                                          │
│  ┌──────────────┐  ┌──────────────┐  ┌────────────────────┐ │
│  │  Web App     │  │  Public API  │  │  CLI local (MIT)   │ │
│  │  (Next.js)   │  │  (REST+SSE)  │  │  open-core engine  │ │
│  └──────┬───────┘  └──────┬───────┘  └─────────┬──────────┘ │
└─────────┼─────────────────┼────────────────────┼────────────┘
          │                 │                    │
          ▼                 ▼                    ▼
┌─────────────────────────────────────────────────────────────┐
│  API GATEWAY  (Fastify)                                      │
│  Auth (Clerk/Supabase Auth) · Rate-limit per key · Quota     │
│  Billing guard ( créditos ) · Multi-tenant routing           │
└───────────────────────────┬─────────────────────────────────┘
                            │
            ┌───────────────┼───────────────┐
            ▼               ▼               ▼
   ┌────────────────┐ ┌──────────┐ ┌─────────────────┐
   │  Job Queue     │ │ Core     │ │ Persistence     │
   │  (BullMQ+Redis)│ │ Engine   │ │ Postgres        │
   │  extract worker│ │ (actual  │ │  - users        │
   │  + LLM worker  │ │  25 mods)│ │  - runs         │
   └───────┬────────┘ └────┬─────┘ │  - usage/credits │
           │               │       │  - subscriptions │
           ▼               ▼       └────────┬─────────┘
   ┌──────────────┐ ┌──────────────┐        │
   │ Browser Pool │ │ LLM Abstrac. │        ▼
   │ (Playwright  │ │ (Strategy)   │ ┌──────────────┐
   │  multi-ctx)  │ │ Anthropic /  │ │ Cloudflare R2│
   └──────────────┘ │ OpenAI /     │ │ assets/scrn  │
                    │ OpenRouter / │ └──────────────┘
                    │ Ollama /     │
                    │ Gemini       │
                    └──────────────┘
```

### 1.2 Cambios estructurales obligatorios vs. estado actual

| Problema actual | Arquitectura objetivo |
|---|---|
| FS plano en `runs/` (single-operator) | **Postgres**: tablas `users`, `runs`, `usage_events`, `subscriptions`, `api_keys`. El FS local se conserva solo para el CLI. |
| `127.0.0.1` + sin auth real | **API pública** con auth Bearer + quotas por tenant; la web app usa sesión (Clerk). |
| `MAX_CONCURRENT=2` en proceso | **BullMQ + Redis**: cola de jobs desacoplada del servidor web. Workers escalables horizontalmente. |
| Browser por request (`getBrowser()` aleatorio) | **Browser pool real**: 1 browser Playwright, múltiples `BrowserContext` aislados por job, reciclaje cada N runs para evitar fugas de memoria. |
| Capa LLM sin interfaz (`if (useOpenRouter)`) | **Strategy + Registry**: `interface LlmProvider { chat(): Promise<ChatResult> }` con 5 implementaciones y selección por config/tenant. |
| `briefComposer.js` 1471 líneas | **Split vertical**: separar (a) normalización de evidence, (b) render Markdown, (c) generación de código GSAP/Lenis, en 3 módulos. + fix encoding UTF-8. |
| Config hardcoded (modelos, timeouts, pesos) | **`config/` versionado**: `llm.config.js`, `presets.config.js`, `billing.config.js`. Cambiar modelo = 1 archivo, no deploy. |
| `Plan/` = 2000 líneas muertas | Aplicar el patch (corrige bugs reales) y eliminar el directorio. |

---

## 2. Roadmap por fases (cada fase = checkpoint facturable)

### 🟢 FASE A — Estabilizar el núcleo (Semana 1, ~25 h)
> **Meta:** Cero bugs conocidos, motor refactorizado y testeado. Pre-requisito para abrir a terceros.

**A1. Aplicar el patch de `Plan/` y eliminar el directorio**
- Aplicar `webadn-senior-fix.patch` sobre `public/app.js` (corrige fidelity inflada + AI Studio 404).
- Sustituir `src/modules/fidelityScore.js` por `Plan/fidelityScore.js` (v2 realista).
- Mover `Plan/fidelityScore.realistic.test.js` a `tests/` y verificar que pasa.
- `rm -rf Plan/`.

**A2. Fix de encoding en `briefComposer.js`**
- Reescribir archivo como UTF-8 limpio (eliminar mojibake `â€"`, `â†`, `â€"`).
- Añadir test que detecte caracteres no-UTF-8 en el output.

**A3. Extraer configuración a `src/config/`**
- `llm.config.js` (modelos, timeouts, temperaturas, max_tokens por proveedor).
- `presets.config.js` (fast/standard/surgical: elementos máx., scroll, timeouts).
- `billing.config.js` (coste en créditos por preset, quotas por tier).
- `fidelityWeights.config.js` (pesos del score, con aserción de que suman 1).

**A4. Logger + telemetría**
- Confirmar logger estructurado (ya existe). Añadir emit de eventos de usage (`run.started`, `run.completed`, `tokens.used`) para luego enchufar billing.

**Entregable A:** `npm run verify` verde, `Plan/` borrado, config externalizada.

---

### 🟡 FASE B — Capa LLM abstracta + multi-tenant data (Semana 2, ~30 h)
> **Meta:** Backend capaz de servir múltiples usuarios con aislamiento y costes controlados.

**B1. Refactor LLM con Strategy**
```js
// src/llm/types.js
export interface ChatResult { content: string; provider: string; model: string;
                              tokensIn: number; tokensOut: number; latencyMs: number; }
export interface LlmProvider { name: string; chat(messages, opts): Promise<ChatResult>; }

// src/llm/providers/{anthropic,openai,openrouter,ollama,gemini}.js
// src/llm/registry.js  → new ProviderRegistry().register('anthropic', new AnthropicProvider())
// src/llm/router.js    → elige proveedor por config/tenant con fallback chain
```
- Un parser común `parseLlmResponse(content)` desacoplado del transporte.
- Reintentos con backoff exponencial + clasificación de errores (auth/network/parse/rate-limit).
- Tests por proveedor con mocks (nock/msw).

**B2. Persistencia Postgres (multi-tenant)**
- Schema inicial:
  ```sql
  users(id, email, created_at, plan TEXT, credits_remaining INT)
  runs(id, user_id, url, niche, preset, status, fidelity_score,
       prompt_md TEXT, evidence_json JSONB, created_at, completed_at,
       cost_credits INT, llm_provider TEXT, tokens_in INT, tokens_out INT)
  usage_events(id, user_id, run_id, type, units, ts)
  api_keys(id, user_id, key_hash, label, last_used_at, revoked_at)
  subscriptions(id, user_id, stripe_customer_id, stripe_sub_id,
                tier, status, current_period_end)
  ```
- Migraciones con `node-pg-migrate` (zero-dep, simple).
- Repositorio `src/repositories/` (patrón Repository) que reemplaza el FS en el modo cloud. El CLI local sigue usando FS vía la misma interfaz (`RunRepository` con dos implementaciones: `FsRunRepository` y `PgRunRepository`).

**B3. Browser pool real**
- Reescribir `browserPool.js`: 1 browser, N contexts, reciclaje cada 25 runs, métricas de memoria.
- Test de aislamiento: un job no ve cookies/localStorage de otro.

**B4. Auth + API keys**
- Web app: **Clerk** (auth gestionado, ~$25/mes en early stage, cero mantenimiento).
- API pública: keys tipo `sk_live_...` hasheadas (bcrypt) en `api_keys`.
- Middleware de quota: lee `users.credits_remaining`, rechaza con `402 Payment Required` si ≤ 0.

**Entregable B:** Un backend Fastify con `/v1/extract` (SSE) + `/v1/runs` + `/v1/usage`, autenticado, con Postgres y Redis. El CLI local sigue funcionando sin tocarlo.

---

### 🟠 FASE C — Workers + frontend SaaS + billing (Semanas 3–4, ~40 h)
> **Meta:** MVP cobrable. Usuario se registra, paga, extrae, ve historial.

**C1. Cola de jobs (BullMQ + Redis)**
- `extract-queue`: jobs `{ userId, url, niche, preset }`.
- Worker reutiliza `runOrchestrator` envuelto en accounting (`chargeCredits` pre-run, `refundCredits` on failure).
- Estado del job emitido a la web app vía SSE/WebSocket.

**C2. Web app SaaS (Next.js + App Router)**
- `/` landing (copy orientada a agencias: "Clona el feel de cualquier sitio awwwards en minutos").
- `/app` dashboard: nueva extracción, historial, detalle de run (prompt, screenshots, fidelity score, tokens).
- `/app/settings` API keys + facturación (Stripe Customer Portal embebido).
- Reemplaza el `public/` vanilla actual (que se conserva para el CLI/`npm run web` local).

**C3. Billing con Stripe**
- **Tiers:**
  | Tier | Precio | Incluye | Overage |
  |---|---|---|---|
  | Free | $0 | 5 runs/mes (preset fast), 0 API | — |
  | Pro | $29/mes | 100 runs/mes (cualquier preset) + 5,000 API calls | $0.10/run extra |
  | Agency | $99/mes | 500 runs/mes + 50,000 API calls + 5 seats + prioridad | $0.08/run extra |
  | API-only | $0 + pay-as-you-go | Compra créditos: $20 = 250 créditos (1 fast=1cr, standard=2cr, surgical=5cr) | — |
- Stripe Checkout para upgrades, Stripe Customer Portal para gestión, Webhooks para sincronizar estado a `subscriptions`.
- Guard de crédito pre-extracción (idempotente, transaccional).

**C4. Landing + SEO + analytics**
- PostHog (free tier) para funnels: landing → signup → primer run → pago.
- Documentación API pública con Mintlify/Scalar.

**Entregable C:** Producto desplegado en Fly.io, facturación activa, primer usuario de pago posible.

---

### 🔵 FASE D — Crecimiento y diferenciación (Post-MVP, ~continuo)
- **Plantillas por nicho** (estudio de arquitectura, e-commerce, SaaS B2B…) como upsell.
- **Comparador de fidelity** entre runs (ya existe el subcomando `compare`).
- **Marketplace de prompts** generados por la comunidad (revenue share).
- **SDK/SDK npm** `@webadn/sdk` para integradores.
- **Embeddable widget** (Fase E del roadmap original: integración Framer/Webflow).
- Observabilidad: Sentry + OpenTelemetry → Grafana Cloud free tier.

---

## 3. Stack tecnológico final

| Capa | Tecnología | Coste early-stage |
|---|---|---|
| Web app SaaS | Next.js 15 + Tailwind + shadcn/ui | $0 (Vercel hobby) |
| API + workers | Fastify + BullMQ sobre Node 20+ | $0 (Fly.io free/hobby) |
| DB | Postgres (Fly.io gestionado) | ~$5/mes |
| Cola + cache | Redis (Fly.io / Upstash serverless) | $0 (Upstash free) |
| Object storage | Cloudflare R2 (screenshots, assets) | $0 (10GB + egress gratis) |
| Auth | Clerk | $0 (10k MAU free) → $25/mes |
| Billing | Stripe | 1.4% + €0.25 por cargo (cero fijo) |
| Browser automation | Playwright (ya está) | CPU del worker |
| LLM | Anthropic / OpenAI / OpenRouter / Ollama / Gemini (vía Strategy) | passthrough al precio de cada proveedor |
| Observabilidad | Sentry + PostHog (free tiers) | $0 |
| CI/CD | GitHub Actions (ya existe) + Fly.io deploy action | $0 |

**Coste mensual estimado para los primeros 100 usuarios de pago:** **< $60/mes**. Margen bruto > 85% si el coste LLM se pasa al cliente como crédito.

---

## 4. Modelo de monetización (detalle)

### 4.1 Unidad de valor: el **crédito**
- 1 crédito = 1 unidad de cómputo de extracción.
- Coste por preset: `fast = 1cr`, `standard = 2cr`, `surgical = 5cr`.
- El coste LLM se calcula en runtime (`tokens_in × precio_in + tokens_out × precio_out`) y se convierte a créditos con un margen del **40–60% sobre coste** (markup dinámico en `billing.config.js`).

### 4.2 Streams de ingreso
1. **Suscripción recurrente** (Pro $29, Agency $99) — base predecible.
2. **Overage / pay-as-you-go** — monetiza el exceso sin churnear al usuario.
3. **API B2B** — créditos prepagados, ideal para SaaS integradores (margen alto, soporte bajo).
4. **Plantillas premium** (Fase D) — ingreso one-time de alto margen.

### 4.3 Economía unitaria (estimación conservadora)
| Métrica | Valor |
|---|---|
| Coste LLM por run surgical (Claude Sonnet) | ~$0.015 |
| Coste cómputo browser por run | ~$0.002 |
| **Coste total por run** | **~$0.017** |
| Precio efectivo por run (tier Pro: 100 runs / $29) | $0.29 |
| **Margen bruto** | **~94%** (antes de infra/marketing) |
| LTV estimado (Pro, 8 meses de retención media) | $232 |
| CAC objetivo (< 1/3 LTV) | < $77 |

### 4.4 KPIs a instrumentar desde el día 1
- **Activation:** % signups que completan su primer run < 24h (objetivo > 40%).
- **Conversion:** Free → Pro (objetivo > 5%).
- **Retention D30** por cohort (objetivo > 30%).
- **ARPU** y **MRR** (Stripe + Postgres join).
- **Coste LLM / MRR** (ratio de margen, debe mantenerse < 30%).
- **Fidelity score medio** (calidad de producto, NPS correlaciona).

---

## 5. Plan de refactor del código existente (deuda técnica prioritaria)

Ordenado por **impacto en monetización / riesgo de producción**:

| Prioridad | Tarea | Fase | Esfuerzo |
|---|---|---|---|
| 🔴 P0 | Aplicar patch de `Plan/` + borrar directorio | A1 | 2 h |
| 🔴 P0 | Fix encoding UTF-8 en `briefComposer.js` | A2 | 2 h |
| 🔴 P0 | Extraer config hardcoded a `src/config/` | A3 | 4 h |
| 🔴 P0 | Strategy de LLM providers (5 impls) | B1 | 8 h |
| 🔴 P0 | Repositorio Postgres + migraciones | B2 | 6 h |
| 🟠 P1 | Browser pool real (contexts aislados) | B3 | 4 h |
| 🟠 P1 | Auth Clerk + API keys + quota guard | B4 | 6 h |
| 🟠 P1 | BullMQ workers + accounting | C1 | 6 h |
| 🟡 P2 | Web app Next.js SaaS | C2 | 16 h |
| 🟡 P2 | Stripe billing + tiers + webhooks | C3 | 8 h |
| 🟢 P3 | Landing + docs API + analytics | C4 | 6 h |
| ⚪ P4 | Split `briefComposer.js` (1471→3 módulos) | D | 6 h |
| ⚪ P4 | Tests de servidor, navegación, extractores | D | 8 h |

**Total MVP (Fases A+B+C): ~82 h ≈ 3–4 semanas a tiempo parcial.**

---

## 6. Riesgos y mitigaciones

| Riesgo | Probabilidad | Mitigación |
|---|---|---|
| **Coste LLM se dispara** y erosiona margen | Media | Markup dinámico en config + cap duro de tokens por run + cache de interpretación por dominio (ya existe cache de runs). |
| **Bloqueo/anti-scraping** de sitios populares | Alta | Honrar robots.txt (ya hecho), UA realista, rate-limit por dominio, documentar claramente el uso ético en TOS. |
| **Abuso del free tier** (minería/escrapeo masivo) | Alta | Captcha en signup (Clerk), email verificado, hard cap de 5 runs/mes, ban por dominio repetido. |
| **Fuga de memoria del browser pool** | Media | Reciclaje cada 25 runs + healthcheck + restart automático del worker si RSS > umbral. |
| **Legal: clonación de contenido protegido** | Media-Baja | TOS claro (inspiración, no clonación), output es un *prompt técnico* no el contenido del sitio, disclaimer en cada run. |
| **Vendor lock-in LLM** | Baja | La Strategy de providers hace el cambio trivial. |

---

## 7. Criterios de éxito (definition of done del MVP)

El MVP se considera lanzado y monetizable cuando **todos** estos se cumplen:

- [ ] `npm run verify` verde en CI (Node 20 y 22).
- [ ] `Plan/` borrado; bugs de fidelity y AI Studio corregidos.
- [ ] Encoding UTF-8 limpio en todos los outputs de prompts.
- [ ] Strategy LLM con ≥3 providers funcionando + tests.
- [ ] Postgres con migraciones aplicadas; CLI local sigue funcionando con FS.
- [ ] API `/v1/extract` autenticada con cuota y `402` cuando no hay créditos.
- [ ] Worker BullMQ procesando jobs aislados con browser pool real.
- [ ] Web app SaaS: registro → primer run → ver historial → ver API key.
- [ ] Stripe: checkout Pro + Customer Portal + webhook sincronizando `subscriptions`.
- [ ] Deploy automático a Fly.io desde `main` vía GitHub Actions.
- [ ] Al menos **1 usuario de pago real** (validación de mercado).

---

## 8. Próximos pasos inmediatos (esta semana)

1. **Aprobación de este plan** (ajusta modelo/pricing si lo prefieres).
2. **Ejecutar Fase A** (estabilización) — es la base de todo lo demás y ya está detallada.
3. Provisionar Fly.io + Postgres + R2 (cuentas free/hobby).
4. Crear el repo SaaS separado o una carpeta `cloud/` en este mono-repo.

> **Recomendación de founder:** empieza por la **Fase A** incluso antes de decidir pricing. Es trabajo que vale para cualquier modelo de producto que elijas y elimina bugs que hoy dañarían tu reputación el día que abras a usuarios.
