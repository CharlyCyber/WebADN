# 1. Executive Design Diagnosis

**Design Language:** luxury minimal (confidence: 85%)
**Signals:** light palette, low CSS complexity, no WebGL
**Sections:** 5 major sections detected
**Motion Complexity:** 0 scroll-linked animations
**CSS Complexity:** 0/100
**Visual Rhythm:** basic layout

This reference uses a luxury minimal approach with minimal motion choreography and standard CSS effects.

---

# 2. Reference DNA Summary

**Stack:** GSAP, Three.js, Lenis Scroll
**Layout:** Flexbox-dominant composition
**Typography:** Inter, sans-serif, Instrument Serif, serif
**Palette:** #0d0f12, #d8ff66, #f4f1ea, rgb(255, 255, 255)
**Design Language:** luxury minimal
**Key Differentiators:** light palette, low CSS complexity, no WebGL

---

# 3. Design Token System

## Color Palette
- **Background:** #0d0f12, #1a1d22
- **Text:** #f4f1ea, rgba(244,241,234,0.7), rgba(244,241,234,0.5)
- **Accent:** #d8ff66

## Typography
| Element | Size | Weight | Line-Height | Letter-Spacing |
|---------|------|--------|-------------|----------------|
| `h1` | clamp(3rem,8vw,6rem) | 800 | 1.1 | -0.03em |
| `h2` | 2.5rem | 700 | â€” | â€” |
| `p` | 1.25rem | â€” | 1.6 | â€” |
| `button` | â€” | 600 | â€” | â€” |

## Spacing Scale
- 8px
- 16px
- 24px
- 48px
- 120px

## CSS Variables
- `--color-background`: #0d0f12
- `--color-accent`: #d8ff66
- `--space-section`: 120px


---

# 4. CSS Architecture

No style rules extracted. Use standard CSS architecture with custom properties and a mobile-first approach.

---

# 5. Component Architecture

Build these components:
- Hero section (full viewport)
- Proof/trust block (metrics, logos, testimonials)
- Showcase/gallery (portfolio, projects)
- Contact/booking form
- Footer (business identity, legal)

**Stack recommendation:** Static HTML/CSS or Astro â€” effects are simple enough for CSS-only

---

# 6. Section-by-Section Build Spec (5 sections detected, full detail)

## Section 1: Hero
- **Confidence:** 86%
- **Tag:** section
- **Classes:** `hero dark-theme`
- **Size:** full viewport height
- **Background color:** #0d0f12
- **Padding:** 2rem
- **Headings:** H1: "Transform digital presence into demand"
- **CTAs:** Book a strategy call
- **Flex:** direction: column, wrap: nowrap, gap: 0
- **Align items:** center
- **Justify:** center
- **Animations:**
  - `button`.primary-cta: transition: all 0.3s ease

### Element Style Blueprint

- **`<h1>`**
  - color: #f4f1ea | lh: 1.1 | ls: -0.03em | text-align: center
  - text: "Transform digital presence into demand"

- **`<p>`**
  - color: rgba(244,241,234,0.7) | lh: 1.6 | text-align: center | margin: 1.5rem auto
  - text: "We build award-winning digital experiences..."

- **`<button>`** .primary-cta
  - color: #0d0f12 | radius: 4px | border: none | padding: 1rem 2.5rem
  - anim: all 0.3s ease
  - text: "Book a strategy call"

### HTML Structure

```html
<section class="hero dark-theme" style="display:flex;flex-direction:column;justify-content:center;align-items:center;min-height:100vh;background:#0d0f12;padding:2rem;"><div style="max-width:1200px;text-align:center;"><h1 style="font-size:clamp(3rem,8vw,6rem);font-weight:800;color:#f4f1ea;letter-spacing:-0.03em;line-height:1.1;">Transform digital presence into demand</h1><p style="font-size:1.25rem;color:rgba(244,241,234,0.7);max-width:36rem;margin:1.5rem auto;line-height:1.6;">We build award-winning digital experiences that drive measurable business growth.</p><button style="background:#d8ff66;color:#0d0f12;border:none;border-radius:4px;padding:1rem 2.5rem;font-size:1rem;font-weight:600;cursor:pointer;">Book a strategy call</button></div></section>
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 2: Proof
- **Confidence:** 72%
- **Tag:** section
- **Classes:** `proof-section`
- **Size:** 600px height
- **Background color:** #1a1d22
- **Padding:** 4rem 2rem
- **Headings:** H2: "Trusted by industry leaders"

### Element Style Blueprint

- **`<h2>`**
  - color: #f4f1ea | text-align: center
  - text: "Trusted by industry leaders"

### HTML Structure

```html
<section class="proof-section" style="padding:4rem 2rem;background:#1a1d22;"><div style="max-width:1200px;margin:0 auto;"><h2 style="font-size:2.5rem;font-weight:700;color:#f4f1ea;text-align:center;margin-bottom:3rem;">Trusted by industry leaders</h2><div style="display:flex;gap:2rem;justify-content:center;flex-wrap:wrap;"><div class="metric" style="text-align:center;"><span style="font-size:3rem;font-weight:800;color:#d8ff66;">250+</span><p style="color:rgba(244,241,234,0.6);">Projects delivered</p></div></div></div></section>
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 3: Showcase
- **Confidence:** 68%
- **Tag:** section
- **Classes:** `showcase`
- **Size:** full viewport height
- **Background color:** #0d0f12
- **Padding:** 4rem 2rem
- **Headings:** H2: "Selected work"
- **CTAs:** View project
- **Animations:**
  - `div`.project-card: transition: transform 0.3s ease, box-shadow 0.3s ease; transform: scale(1)

### Element Style Blueprint

- **`<h2>`**
  - color: #f4f1ea | text-align: center
  - text: "Selected work"

- **`<div>`** .project-card
  - radius: 12px | padding: 2rem
  - anim: transform 0.3s ease, box-shadow 0.3s ease | scale(1)

### HTML Structure

```html
<section class="showcase" style="padding:4rem 2rem;background:#0d0f12;"><h2 style="font-size:2.5rem;font-weight:700;color:#f4f1ea;text-align:center;">Selected work</h2><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:2rem;max-width:1200px;margin:2rem auto;"><div class="project-card" style="background:#1a1d22;border-radius:12px;padding:2rem;"><h3 style="font-size:1.5rem;color:#f4f1ea;">Project Alpha</h3></div></div></section>
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 4: Contact
- **Confidence:** 75%
- **Tag:** section
- **Classes:** `contact`
- **Size:** 500px height
- **Background color:** #1a1d22
- **Padding:** 4rem 2rem
- **Headings:** H2: "Get in touch"
- **CTAs:** Send message

### Element Style Blueprint

- **`<h2>`**
  - color: #f4f1ea | text-align: center
  - text: "Get in touch"

- **`<input>`**
  - color: #f4f1ea | radius: 4px | border: 1px solid rgba(255,255,255,0.1) | width: 100% | padding: 1rem

- **`<button>`**
  - color: #0d0f12 | radius: 4px | border: none | width: 100% | padding: 1rem
  - text: "Send message"

### HTML Structure

```html
<section class="contact" style="padding:4rem 2rem;background:#1a1d22;"><h2 style="font-size:2.5rem;font-weight:700;color:#f4f1ea;text-align:center;">Get in touch</h2><form style="max-width:480px;margin:2rem auto;"><input type="email" placeholder="Your email" style="width:100%;padding:1rem;border:1px solid rgba(255,255,255,0.1);border-radius:4px;background:#0d0f12;color:#f4f1ea;"><button type="submit" style="width:100%;padding:1rem;margin-top:1rem;background:#d8ff66;color:#0d0f12;border:none;border-radius:4px;font-weight:600;">Send message</button></form></section>
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 5: Footer
- **Confidence:** 90%
- **Tag:** footer
- **Classes:** `footer`
- **Size:** 400px height
- **Background color:** #0d0f12
- **Padding:** 2rem

### Element Style Blueprint

- **`<p>`**
  - color: rgba(244,241,234,0.5) | text-align: center
  - text: "© 2025 Company. All rights reserved."

### HTML Structure

```html
<footer style="padding:2rem;text-align:center;background:#0d0f12;color:rgba(244,241,234,0.5);font-size:0.875rem;"><p>&copy; 2025 Company. All rights reserved.</p></footer>
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.


---

# 7. Motion Timeline Recipes

**DOM Animation Hints:** transform-driven motion, sticky scroll choreography, backdrop-filter layering

**Math:** Use lerp next = current + (target - current) * alpha with alpha 0.08-0.18.
**Easing:** cubic-bezier(0.22, 1, 0.36, 1) for premium reveals.
**Rule:** Respect prefers-reduced-motion.


---

# 8. Interaction Recipes

No hover interactions probed. Add standard hover states: color shift on links, lift on cards, background change on buttons.

---

# 9. Asset Requirements

No asset manifest available. Plan for: hero image, 3-5 content images, logo SVG, 2 web fonts, background textures if needed.

---

# 10. Responsive Rules

- Mobile-first breakpoint strategy: 390px, 834px, 1440px
- Only desktop captured â€” test mobile manually
- Navigation collapses to hamburger on mobile
- Full-viewport sections become auto-height on mobile
- WebGL/canvas lazy-loaded and capped at DPR 2 on mobile
- Touch-friendly tap targets (min 44px)


---

# 11. CRO Adaptation

**Paradigm:** undefined

**Required conversion blocks:**


**Pushback:**


**Niche:** tienda de arte digital premium
Translate the extracted aesthetic into tienda de arte digital premium. Preserve the premium visual grammar, but rewrite structure, copy, proof, and CTAs around the business outcome. The first viewport must communicate who this is for, what measurable value is offered, why the visitor should trust it, and what action to take next.

---

### Niche Content Translation Table

Edit the [____] fields below with your copy for "tienda de arte digital premium". All styling, classes, and animations are preserved automatically.

# Nicho: "tienda de arte digital premium" — Template de Traducción de Contenido

> Instrucciones: Rellena los campos [____] con tu copy de tienda de arte digital premium. Preserva todas las clases CSS, animaciones y estilos visuales extraídos.

## Sección 1: Hero — First impression, value prop, primary CTA
**Clases:** `.hero .dark-theme`

  **<H1>** original: "Transform digital presence into demand"
  → **Tu H1:** [________________________________________]
  *Preserva: estilo y clase*

  **<button/a>** original: "Book a strategy call"
  → **Tu CTA:** [________________________________________]
  *Preserva: clase y hover effect*

  **<p>** texto original: "We build award-winning digital experiences..."
  → **Tu texto:** [________________________________________]
  *Preserva color: rgba(244,241,234,0.7)*

  **Layout:** flex, direction: column
  **Fondo:** #0d0f12

## Sección 2: Proof/Trust — Metrics, testimonials, logos, results
**Clases:** `.proof-section`

  **<H2>** original: "Trusted by industry leaders"
  → **Tu H2:** [________________________________________]
  *Preserva: estilo y clase*

  **<h2>** original: "Trusted by industry leaders"
  → **Tu CTA:** [________________________________________]
  *Preserva: color: #f4f1ea*

  **Layout:** block
  **Fondo:** #1a1d22

## Sección 3: Showcase — Portfolio, projects, featured work
**Clases:** `.showcase`

  **<H2>** original: "Selected work"
  → **Tu H2:** [________________________________________]
  *Preserva: estilo y clase*

  **<button/a>** original: "View project"
  → **Tu CTA:** [________________________________________]
  *Preserva: clase y hover effect*

  **Layout:** block
  **Fondo:** #0d0f12

## Sección 4: Contact/Booking — Form, calendar, CTA
**Clases:** `.contact`

  **<H2>** original: "Get in touch"
  → **Tu H2:** [________________________________________]
  *Preserva: estilo y clase*

  **<button/a>** original: "Send message"
  → **Tu CTA:** [________________________________________]
  *Preserva: clase y hover effect*

  **<h2>** original: "Get in touch"
  → **Tu CTA:** [________________________________________]
  *Preserva: color: #f4f1ea*

  **Layout:** block
  **Fondo:** #1a1d22

## Sección 5: Footer — Links, legal, social, brand
**Clases:** `.footer`

  **<p>** original: "© 2025 Company. All rights reserved."
  → **Tu CTA:** [________________________________________]
  *Preserva: color: rgba(244,241,234,0.5)*

  **<p>** texto original: "© 2025 Company. All rights reserved."
  → **Tu texto:** [________________________________________]
  *Preserva color: rgba(244,241,234,0.5)*

  **Layout:** block
  **Fondo:** #0d0f12


---

# 12. Performance Budget

- **LCP:** < 2.5s
- **Total load:** < 5s
- **JS:** Keep route-level JS lean; lazy-load WebGL and heavy animation bundles
- **Motion:** Respect prefers-reduced-motion and pause offscreen animation


---

# 13. Accessibility Constraints

- Use semantic HTML landmarks and descriptive accessible names.
- Maintain WCAG AA contrast for text over glass, video, gradients, and WebGL canvases.
- Keyboard states must be visible and match hover affordances.
- Provide reduced-motion alternatives for scroll-linked animation.

---

# 14. Acceptance Criteria

The implementation is not accepted unless:
- The hero communicates value without scrolling.
- All 5 sections match the extracted layout rhythm.
- All scroll animations have reduced-motion alternatives.
- No blocking render resources on initial paint.
- Primary CTA is visible above the fold on desktop and mobile.
- WCAG AA contrast maintained on all text surfaces.
- Page loads in under 5 seconds on 3G Fast.
- Subtle animations enhance, not distract from, the offer.

---

# 15. Final Agent Prompt

```text
You are an Awwwards-winning frontend developer. Build a premium site for: "tienda de arte digital premium".

Reference: https://example.com

=== DESIGN TOKENS ===
- Design Language: luxury minimal
- Colors: #0d0f12, #d8ff66, #f4f1ea, rgb(255, 255, 255)
- Fonts: Inter, sans-serif | Instrument Serif, serif

=== DESIGN TOKENS (CSS VARIABLES) ===
```css
:root {
  --color-background: #0d0f12;
  --color-accent: #d8ff66;
  --space-section: 120px;
}
```

=== SECTIONS STRUCTURE BLUEPRINT ===
Section 1: HERO
- Original Tag: <section>
- Classes: `hero dark-theme`
- Visual Role: hero (confidence: 86%)
- Layout: standard
- Content instructions: Rebuild content for "tienda de arte digital premium" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 2: PROOF
- Original Tag: <section>
- Classes: `proof-section`
- Visual Role: proof (confidence: 72%)
- Layout: standard
- Content instructions: Rebuild content for "tienda de arte digital premium" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 3: SHOWCASE
- Original Tag: <section>
- Classes: `showcase`
- Visual Role: showcase (confidence: 68%)
- Layout: standard
- Content instructions: Rebuild content for "tienda de arte digital premium" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 4: CONTACT
- Original Tag: <section>
- Classes: `contact`
- Visual Role: contact (confidence: 75%)
- Layout: standard
- Content instructions: Rebuild content for "tienda de arte digital premium" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 5: FOOTER
- Original Tag: <footer>
- Classes: ``
- Visual Role: footer (confidence: 90%)
- Layout: standard
- Content instructions: Rebuild content for "tienda de arte digital premium" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.





=== BOILERPLATE SETUP ===
```bash
npm install gsap lenis
```

```javascript
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { MotionPathPlugin } from "gsap/MotionPathPlugin";
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);


// Lenis smooth scroll detected — use:
import Lenis from "lenis";
const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);
```

=== DEVELOPMENT LAWS ===
1. Use transform/opacity for all animations (GPU-composited).
2. Respect prefers-reduced-motion — disable parallax/stagger, keep simple fades.
3. Lazy-load WebGL/Three.js bundles; cap DPR at 2 on mobile.
4. Responsive: 390px, 834px, 1440px. CTA visible above fold on all.
5. WCAG AA contrast on all text surfaces.
6. Primary easing: cubic-bezier(0.22, 1, 0.36, 1).
7. Scroll-linked animations use scrub:1 unless noted otherwise.
8. Do not copy original text — adapt all copy to "tienda de arte digital premium" while preserving class structure and visual styling.
```
