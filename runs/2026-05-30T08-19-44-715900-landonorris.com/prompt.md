# 1. Executive Design Diagnosis

**Design Language:** contemporary digital (confidence: 30%)
**Signals:** 
**Sections:** 0 major sections detected
**Motion Complexity:** 6 scroll-linked animations
**CSS Complexity:** 0/100
**Visual Rhythm:** 2 viewport(s) captured

This reference uses a contemporary digital approach with heavy motion choreography and standard CSS effects.

---

# 2. Reference DNA Summary

**Stack:** No explicit framework signatures; build lean
**Layout:** Static or custom positioned layout
**Typography:** Premium sans/serif pairing recommended
**Palette:** Restrained neutral base with one accent
**Design Language:** contemporary digital
**Key Differentiators:** Clean, structured layout with subtle enhancements

---

# 3. Design Token System

## Colors
- Define a restrained palette with accessible contrast

## Typography
- Use a performant premium serif/sans pairing

## Spacing Scale
- Use an 8px-based scale with fluid section spacing


---

# 4. CSS Architecture

## Extracted Stylesheets
- **Total CSS rules:** 0
- **External stylesheets:** 0
- **Unique selectors:** 0
- **Keyframe animations:** 0
- **Media queries:** 0
- **@font-face declarations:** 0

## Key Selectors (first 0)



---

# 5. Component Architecture

Build these components:


**Stack recommendation:** Static HTML/CSS or Astro â€” effects are simple enough for CSS-only

---

# 6. Section-by-Section Build Spec

No section map available. Build a standard landing with: hero, proof, showcase, contact, footer.

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
  Parallax ratio: 1
  Implementation: Scroll-linked transform with requestAnimationFrame

- **Type:** scroll-translate
  Target: `div.taxi-w` (div)
  Range: 0-100%
  Y movement: -11233px
  Parallax ratio: 1
  Implementation: Scroll-linked transform with requestAnimationFrame

- **Type:** scroll-translate
  Target: `div.horizontal-track` (div)
  Range: 0-100%
  Y movement: -11233px
  Parallax ratio: 1
  Implementation: Scroll-linked transform with requestAnimationFrame

- **Type:** scroll-translate
  Target: `div.sticky-track.home-hero:nth-child(2)` (div)
  Range: 0-100%
  Y movement: -11233px
  Parallax ratio: 1
  Implementation: Scroll-linked transform with requestAnimationFrame

- **Type:** scroll-translate
  Target: `section.home-helmets:nth-child(1)` (section)
  Range: 0-100%
  Y movement: -11233px
  Parallax ratio: 1
  Implementation: Scroll-linked transform with requestAnimationFrame

**Math:** Use lerp next = current + (target - current) * alpha with alpha 0.08-0.18.
**Easing:** cubic-bezier(0.22, 1, 0.36, 1) for premium reveals.
**Rule:** Respect prefers-reduced-motion.


---

# 8. Interaction Recipes

No hover interactions probed. Add standard hover states: color shift on links, lift on cards, background change on buttons.

---

# 9. Asset Requirements

- **Images:** 2 detected â€” plan for hero, content, and decorative images
- **Videos:** 0 detected
- **Fonts:** 0 detected
- **Inline SVGs:** 0
- **Canvases:** 0

**Rule:** Do not copy proprietary assets. Recreate the design language with original, niche-specific content.

---

# 10. Responsive Rules

- Mobile-first breakpoint strategy: 390px, 834px, 1440px
- Desktop and mobile captured
- desktop@0%: H1: "Lando Norris"; H2: "2025 Mclaren Formula 1 Driver"
- desktop@50%: H2: "TRACK"; H2: "OFF"; H2: "TRACK"
- desktop signals: opacity-based effects
- mobile@0%: H1: "Lando Norris"; H2: "2025 Mclaren Formula 1 Driver"
- mobile signals: opacity-based effects
- Navigation collapses to hamburger on mobile
- Full-viewport sections become auto-height on mobile
- WebGL/canvas lazy-loaded and capped at DPR 2 on mobile
- Touch-friendly tap targets (min 44px)


---

# 11. CRO Adaptation

**Paradigm:** undefined

**Required conversion blocks:**


**Pushback:**


**Niche:** Arquitecto Digital y Especialista IA
Translate the extracted aesthetic into Arquitecto Digital y Especialista IA. Preserve the premium visual grammar, but rewrite structure, copy, proof, and CTAs around the business outcome. The first viewport must communicate who this is for, what measurable value is offered, why the visitor should trust it, and what action to take next.

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
- Desktop and mobile match the reference layout rhythm.
- All scroll animations have reduced-motion alternatives.
- No blocking render resources on initial paint.
- Primary CTA is visible above the fold on desktop and mobile.
- WCAG AA contrast maintained on all text surfaces.
- Page loads in under 5 seconds on 3G Fast.
- All 6 motion patterns are recreated with equivalent feel.

---

# 15. Final Agent Prompt

```text
You are a senior full-stack product engineer and conversion-focused web designer.

Build a premium, high-performance website for: "Arquitecto Digital y Especialista IA".

Reference: https://landonorris.com
Design language: contemporary digital

LEGAL AND ETHICAL POLICY: Use this reference as inspiration for structure, interaction patterns, and quality bar. Do not copy proprietary assets, brand identity, exact copy, source code, trademarks, or unique protected illustrations. Recreate the design language with original assets and niche-specific content.

Follow all sections above (1-15) as your build specification. Every directive, token, recipe, and constraint in this brief is mandatory.

Deliver a production-ready responsive site with modular components, tokenized styles, and concise conversion copy adapted to "Arquitecto Digital y Especialista IA".
```