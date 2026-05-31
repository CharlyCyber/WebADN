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

---

## Design Tokens
- Colors: #0d0f12, #d8ff66, #f4f1ea, rgb(255, 255, 255)
- Fonts: Inter, sans-serif | Instrument Serif, serif
- CSS Variables:
  --color-background: #0d0f12
  --color-accent: #d8ff66
  --space-section: 120px

---

## Section Skeleton
- HERO: <section> [.hero dark-theme] 100vh
- PROOF: <section> [.proof-section] 
- SHOWCASE: <section> [.showcase] 100vh
- CONTACT: <section> [.contact] 
- FOOTER: <footer>  