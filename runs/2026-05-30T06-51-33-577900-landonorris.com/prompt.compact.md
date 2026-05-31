# 1. Executive Design Diagnosis

**Design Language:** contemporary digital (confidence: 30%)
**Signals:** 
**Sections:** 12 major sections detected
**Motion Complexity:** 6 scroll-linked animations
**CSS Complexity:** 0/100
**Visual Rhythm:** 2 viewport(s) captured

This reference uses a contemporary digital approach with heavy motion choreography and standard CSS effects.

---

---

# 2. Reference DNA Summary

**Stack:** GSAP, Lenis Scroll
**Layout:** Flexbox-dominant composition
**Typography:** "Mona Sans Variable", Arial, sans-serif, Brier, Arial, sans-serif, Brier
**Palette:** rgba(0, 0, 0, 0), rgb(0, 0, 0), rgb(255, 255, 0), rgb(51, 51, 51), rgb(255, 255, 255), rgb(56, 152, 236), rgba(0, 0, 0, 0.1), rgb(170, 173, 176)
**Design Language:** contemporary digital
**Key Differentiators:** Clean, structured layout with subtle enhancements

---

---

# 3. Design Token System

#

---

# 5. Component Architecture

Build these components:
- Hero section (full viewport)
- Proof/trust block (metrics, logos, testimonials)
- Team/about section
- Contact/booking form
- Footer (business identity, legal)
- WebGL/canvas layer (lazy-loaded, non-critical)

*... and more components (see prompt.md)*

---

# 7. Motion Timeline Recipes

6 motion pattern(s) detected:

- **Type:** scroll-translate
  Target: `div.page-w:nth-child(6)` (div)
  Range: 0-100%
  Y movement: -11233px
  Parallax ratio: 1
  Implementation: Scroll-linked transform with requestAnimationFrame

- **Type:** scroll-translate
  Target: `main.main-w` (main)
  Range: 0-100%
  Y movement: -11233px
*... motion timeline truncated (see prompt.md)*

---

# 11. CRO Adaptation

**Paradigm:** undefined

**Required conversion blocks:**


**Pushback:**


**Niche:** Taller de motos
Translate the extracted aesthetic into Taller de motos. Preserve the premium visual grammar, but rewrite structure, copy, proof, and CTAs around the business outcome. The first viewport must communicate who this is for, what measurable value is offered, why the visitor should trust it, and what action to take next.

---

---

# 14. Acceptance Criteria

The implementation is not accepted unless:
- The hero communicates value without scrolling.
- All 12 sections match the extracted layout rhythm.
- All scroll animations have reduced-motion alternatives.
- No blocking render resources on initial paint.
- Primary CTA is visible above the fold on desktop and mobile.
- WCAG AA contrast maintained on all text surfaces.
- Page loads in under 5 seconds on 3G Fast.
- All 6 motion patterns are recreated with equivalent feel.

---

---

# 15. Final Agent Prompt

```text
You are a senior full-stack product engineer and conversion-focused web designer.

Build a premium, high-performance website for: "Taller de motos".

Reference: https://landonorris.com/
Design language: contemporary digital

LEGAL AND ETHICAL POLICY: Use this reference as inspiration for structure, interaction patterns, and quality bar. Do not copy proprietary assets, brand identity, exact copy, source code, trademarks, or unique protected illustrations. Recreate the design language with original assets and niche-specific content.

Follow all sections above (1-15) as your build specification. Every directive, token, recipe, and constraint in this brief is mandatory.

Deliver a production-ready responsive site with modular components, tokenized styles, and concise conversion copy adapted to "Taller de motos".
```