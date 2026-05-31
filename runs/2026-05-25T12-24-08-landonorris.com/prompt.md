# 1. Executive Design Diagnosis

**Design Language:** contemporary digital (confidence: 30%)
**Signals:** 
**Sections:** 0 major sections detected
**Motion Complexity:** 0 scroll-linked animations
**CSS Complexity:** 0/100
**Visual Rhythm:** 1 estimated sections; 4 viewport(s) captured

This reference uses a contemporary digital approach with minimal motion choreography and standard CSS effects.

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


**Stack recommendation:** Static HTML/CSS or Astro — effects are simple enough for CSS-only

---

# 6. Section-by-Section Build Spec

No section map available. Build a standard landing with: hero, proof, showcase, contact, footer.

---

# 7. Motion Timeline Recipes

No scroll-linked motion detected. Use subtle reveal animations with cubic-bezier(0.22, 1, 0.36, 1).

---

# 8. Interaction Recipes

No hover interactions probed. Add standard hover states: color shift on links, lift on cards, background change on buttons.

---

# 9. Asset Requirements

- **Images:** 0 detected — plan for hero, content, and decorative images
- **Videos:** 0 detected
- **Fonts:** 0 detected
- **Inline SVGs:** 0
- **Canvases:** 0

**Rule:** Do not copy proprietary assets. Recreate the design language with original, niche-specific content.

---

# 10. Responsive Rules

- Mobile-first breakpoint strategy: 390px, 834px, 1440px
- All three viewports captured
- Navigation collapses to hamburger on mobile
- Full-viewport sections become auto-height on mobile
- WebGL/canvas lazy-loaded and capped at DPR 2 on mobile
- Touch-friendly tap targets (min 44px)


---

# 11. CRO Adaptation

**Paradigm:** Value first, spectacle second.

**Required conversion blocks:**
- Hero with niche-specific offer for Taller de motos, a concise proof point, and one primary CTA.
- Trust block near the first friction point: testimonials, metrics, client logos, or before/after proof.
- Offer explanation section that makes the buying path obvious.
- Conversion-focused contact or booking flow with minimal fields.
- Accessible footer with business identity, navigation, and legal links.

**Pushback:**
- Strengthen the hero H1 so the value proposition is understandable without scrolling.
- Add a primary above-the-fold CTA with concrete commercial intent.
- Correct semantic structure with one main landmark and one clear H1 for SEO and assistive tech.
- Resolve extraction risk: Missing visible H1 in initial DOM.
- Resolve extraction risk: Missing meta description.
- Resolve extraction risk: No obvious CTA detected.
- Resolve extraction risk: Missing semantic main landmark.

**Niche:** Taller de motos
Translate the extracted aesthetic into Taller de motos. Preserve the premium visual grammar, but rewrite structure, copy, proof, and CTAs around the business outcome. The first viewport must communicate who this is for, what measurable value is offered, why the visitor should trust it, and what action to take next.

---

# 12. Performance Budget

- **LCP:** < 2.5s
- **Total load:** < 5s
- **JS:** Keep route-level JS lean; lazy-load WebGL and heavy animation bundles.
- **Motion:** Respect prefers-reduced-motion and pause offscreen animation.


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
- Subtle animations enhance, not distract from, the offer.

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