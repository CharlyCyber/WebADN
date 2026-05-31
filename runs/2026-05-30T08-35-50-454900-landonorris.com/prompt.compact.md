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
**Typography:** Mona Sans Variable, Arial, sans-serif, Brier, Arial, sans-serif, Brier
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


**Niche:** Arquitecto Digital y Especialista IA
Translate the extracted aesthetic into Arquitecto Digital y Especialista IA. Preserve the premium visual grammar, but rewrite structure, copy, proof, and CTAs around the business outcome. The first viewport must communicate who this is for, what measurable value is offered, why the visitor should trust it, and what action to take next.

---

---

# 14. Acceptance Criteria

The implementation is not accepted unless:
- The hero communicates value without scrolling.
- All 12 sections match the extracted layout rhythm.
- All scroll animations have reduced-motion alternatives.
- WebGL/canvas is lazy-loaded and never contains critical text.
- Primary CTA is visible above the fold on desktop and mobile.
- WCAG AA contrast maintained on all text surfaces.
- Page loads in under 5 seconds on 3G Fast.
- All 6 motion patterns are recreated with equivalent feel.

---

---

# 15. Final Agent Prompt

```text
You are an Awwwards-winning frontend developer, senior full-stack product engineer, and conversion-focused designer.
Build a premium, highly interactive and high-performance website for the niche: "Arquitecto Digital y Especialista IA".
Your primary goal is to recreate the high-end design language, structural rhythm, and animation complexity of the reference site: "https://landonorris.com" but fully adapted to the niche: "Arquitecto Digital y Especialista IA".

=== AESTHETIC & BRAND DIRECTIVES ===
- Reference Design Language: contemporary digital
- Extracted Color Palette: rgba(0, 0, 0, 0), rgb(0, 0, 0), rgb(255, 255, 0), rgb(51, 51, 51), rgb(255, 255, 255), rgb(56, 152, 236), rgba(0, 0, 0, 0.1), rgb(170, 173, 176)
- Typography Signals: Mona Sans Variable, Arial, sans-serif | Brier, Arial, sans-serif | Brier

=== DESIGN TOKENS (CSS VARIABLES) ===
```css
:root {
  --large: :after { border-width: 5px;
  --vertical: :after { border-width: 4px;
  --color--dark-green: #282c20;
  --color--white: #f4f4ed;
  --padding--container: 1rem;
  --gap: 1.25rem;
  --on-t-nav-spacer: 6.375rem;
  --color--black: #111112;
  --text--h1: 4rem;
  --padding--xlarge: 5rem;
  --padding--med: 3rem;
  --color--lime-off: #b2c73a;
  --color--lime: #d2ff00;
  --color--green-off-white-1: #dde1d2;
  --color--lime-zero: #d2ff0000;
  --text--btn-primary: 1rem;
  --text--btn-nav: 1.7rem;
  --text--btn-footer: 1.6rem;
  --color--green-off-white-2: #b4b8a5;
  --color--dark-green-tint-2: #535450;
}
```

=== SECTIONS STRUCTURE BLUEPRINT ===
Section 1: HERO
- Original Tag: <section>
- Classes: `s home-hero`
- Visual Role: hero (confidence: 45%)
- Layout: Block flow
- Content instructions for "Arquitecto Digital y Especialista IA": Rebuild this section's content completely to target "Arquitecto Digital y Especialista IA" but strictly maintain the classes, visual styling, backgrounds, and layout hierarchy.

Section 2: HERO
- Original Tag: <section>
- Classes: `s home-marquee`
- Visual Role: hero (confidence: 0%)
- Layout: Block flow
- Content instructions for "Arquitecto Digital y Especialista IA": Rebuild this section's content completely to target "Arquitecto Digital y Especialista IA" but strictly maintain the classes, visual styling, backgrounds, and layout hierarchy.

Section 3: CONTACT
- Original Tag: <section>
- Classes: `s`
- Visual Role: contact (confidence: 20%)
- Layout: Block flow
- Content instructions for "Arquitecto Digital y Especialista IA": Rebuild this section's content completely to target "Arquitecto Digital y Especialista IA" but strictly maintain the classes, visual styling, backgrounds, and layout hierarchy.

Section 4: HERO
- Original Tag: <section>
- Classes: `s is-horizontal-track`
- Visual Role: hero (confidence: 20%)
- Layout: Block flow
- Content instructions for "Arquitecto Digital y Especialista IA": Rebuild this section's content completely to target "Arquitecto Digital y Especialista IA" but strictly maintain the classes, visual styling, backgrounds, and layout hierarchy.

Section 5: PROOF
- Original Tag: <section>
- Classes: `s is-otot-home`
- Visual Role: proof (confidence: 20%)
- Layout: Block flow
- Content instructions for "Arquitecto Digital y Especialista IA": Rebuild this section's content completely to target "Arquitecto Digital y Especialista IA" but strictly maintain the classes, visual styling, backgrounds, and layout hierarchy.

Section 6: HERO
- Original Tag: <section>
- Classes: ``
- Visual Role: hero (confidence: 0%)
- Layout: Block flow
- Content instructions for "Arquitecto Digital y Especialista IA": Rebuild this section's content completely to target "Arquitecto Digital y Especialista IA" but strictly maintain the classes, visual styling, backgrounds, and layout hierarchy.

Section 7: TEAM
- Original Tag: <section>
- Classes: ``
- Visual Role: team (confidence: 20%)
- Layout: Block flow
- Content instructions for "Arquitecto Digital y Especialista IA": Rebuild this section's content completely to target "Arquitecto Digital y Especialista IA" but strictly maintain the classes, visual styling, backgrounds, and layout hierarchy.

Section 8: HERO
- Original Tag: <section>
- Classes: ``
- Visual Role: hero (confidence: 15%)
- Layout: Block flow
- Content instructions for "Arquitecto Digital y Especialista IA": Rebuild this section's content completely to target "Arquitecto Digital y Especialista IA" but strictly maintain the classes, visual styling, backgrounds, and layout hierarchy.

Section 9: HERO
- Original Tag: <section>
- Classes: ``
- Visual Role: hero (confidence: 15%)
- Layout: Block flow
- Content instructions for "Arquitecto Digital y Especialista IA": Rebuild this section's content completely to target "Arquitecto Digital y Especialista IA" but strictly maintain the classes, visual styling, backgrounds, and layout hierarchy.

Section 10: CONTACT
- Original Tag: <section>
- Classes: ``
- Visual Role: contact (confidence: 35%)
- Layout: Block flow
- Content instructions for "Arquitecto Digital y Especialista IA": Rebuild this section's content completely to target "Arquitecto Digital y Especialista IA" but strictly maintain the classes, visual styling, backgrounds, and layout hierarchy.

Section 11: HERO
- Original Tag: <section>
- Classes: ``
- Visual Role: hero (confidence: 15%)
- Layout: Block flow
- Content instructions for "Arquitecto Digital y Especialista IA": Rebuild this section's content completely to target "Arquitecto Digital y Especialista IA" but strictly maintain the classes, visual styling, backgrounds, and layout hierarchy.

Section 12: FOOTER
- Original Tag: <section>
- Classes: ``
- Visual Role: footer (confidence: 40%)
- Layout: Block flow
- Content instructions for "Arquitecto Digital y Especialista IA": Rebuild this section's content completely to target "Arquitecto Digital y Especialista IA" but strictly maintain the classes, visual styling, backgrounds, and layout hierarchy.


=== MOTION TIMELINE & GSAP RECIPES ===
Recipe 1: SCROLL-TRANSLATE
- Target Selector: `div.page-w:nth-child(6)` (div)
- Active Scroll Range: 0-100%
- Suggested Code Implementation:
```javascript
// Implement scroll animation matching: Scroll-linked transform with requestAnimationFrame
```

Recipe 2: SCROLL-TRANSLATE
- Target Selector: `main.main-w` (main)
- Active Scroll Range: 0-100%
- Suggested Code Implementation:
```javascript
// Implement scroll animation matching: Scroll-linked transform with requestAnimationFrame
```

Recipe 3: SCROLL-TRANSLATE
- Target Selector: `div.taxi-w` (div)
- Active Scroll Range: 0-100%
- Suggested Code Implementation:
```javascript
// Implement scroll animation matching: Scroll-linked transform with requestAnimationFrame
```

Recipe 4: SCROLL-TRANSLATE
- Target Selector: `div.horizontal-track` (div)
- Active Scroll Range: 0-100%
- Suggested Code Implementation:
```javascript
// Implement scroll animation matching: Scroll-linked transform with requestAnimationFrame
```

Recipe 5: SCROLL-TRANSLATE
- Target Selector: `div.sticky-track.home-hero:nth-child(2)` (div)
- Active Scroll Range: 0-100%
- Suggested Code Implementation:
```javascript
// Implement scroll animation matching: Scroll-linked transform with requestAnimationFrame
```

Recipe 6: SCROLL-TRANSLATE
- Target Selector: `section.home-helmets:nth-child(1)` (section)
- Active Scroll Range: 0-100%
- Suggested Code Implementation:
```javascript
// Implement scroll animation matching: Scroll-linked transform with requestAnimationFrame
```



=== CRITICAL ANIMATION & DEVELOPMENT LAWS ===
1. **GSAP Auto-setup**: You must use GSAP (GreenSock Animation Platform) for all complex, high-fidelity choreographies and timelines:
   - Run 'npm install gsap' (this includes all baseline capabilities and ScrollTrigger).
   - Import and register plugins:
     import { gsap } from "gsap";
     import { ScrollTrigger } from "gsap/ScrollTrigger";
     gsap.registerPlugin(ScrollTrigger);
2. **Scroll Choreography**: Implement smooth parallax, sticky-pinning, and scroll reveals using the specific GSAP recipes provided above. 
3. **WebGL/Three.js**: If WebGL canvases or Three.js signatures are detected, lazy-load all 3D assets and cap Device Pixel Ratio (DPR) at 2 on mobile to maximize performance. Provide beautiful 2D static fallbacks for devices without WebGL support.
4. **Performance First**: Ensure the page is completely responsive (390px, 834px, 1440px). Crucial value propositions and primary CTAs must load in under 2.5s (LCP).
5. **Reduced Motion**: Respect 'prefers-reduced-motion' media query. Disable heavy parallax or rotational animations when the user has this preference enabled, replacing them with simple, clean transitions.
6. **CRO Adaptation**: Do not copy the original text. Maintain the original class structure and layout blocks exactly as mapped, but write highly engaging, professional, and commercial copy adapted specifically to the value proposition of "Arquitecto Digital y Especialista IA".

Deliver a fully functional, production-ready, beautiful responsive codebase. Prioritize visual wow-factor, smooth interactive performance, and conversion.
```