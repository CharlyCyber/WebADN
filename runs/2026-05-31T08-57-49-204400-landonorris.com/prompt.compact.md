# 15. Final Agent Prompt

```text
You are an Awwwards-winning frontend developer. Build a premium site for: "Taller de motos".

Reference: https://landonorris.com/

=== DESIGN TOKENS ===
- Design Language: contemporary digital
- Colors: rgba(0, 0, 0, 0), rgb(0, 0, 0), rgb(255, 255, 0), rgb(51, 51, 51), rgb(255, 255, 255), rgb(56, 152, 236), rgba(0, 0, 0, 0.1), rgb(170, 173, 176)
- Fonts: Mona Sans Variable, Arial, sans-serif | Brier, Arial, sans-serif | Brier

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
  --color--grey-on-track: #b9bbad;
  --text--impact: 7.9375rem;
  --grid-spacer: 31.51vh;
  --color--dark-green-tint-1: #3b3c38;
  --padding--small: 2rem;
  --color--grey-1: #ebeee0;
  --color--green-light: #ebeee0;
  --text--h2: 4.5rem;
  --text--h3: 2rem;
  --text--h4: 1.5rem;
  --text--h5: 1.2rem;
  --text--h6: 1rem;
  --padding--mini: 1rem;
  --padding--large: 4rem;
  --radius--small: 1rem;
  --radius--med: 3rem;
  --radius--large: 6.25rem;
  --vh: 1vh;
  --max-vh: 100vh;
  --grid-col: 25.4375rem;
  --oval-side-offset: 3rem;
  --poduim-offset: 4rem;
  --text--reg: 1.6rem;
  --text--med: 2.76rem;
  --text--btn-tertiary: .875px;
  --text--eyebrow: .578125rem;
  --color--cream: #efefe5;
  --color--grey-2: #c8cbbd;
  --color--orange: #ff6b00;
  --cubic-default: cubic-bezier(0.65, 0.05, 0, 1);
  --duration-default: 0.75s;
  --animation-default: var(--duration-default) var(--cubic-default);
  --section-padding: calc(3.5rem + (var(--gap) * 2));
  --container-padding: 2rem;
  --nav-height: calc(3.75rem (var(--gap) * 2));
  --min-width: 320px;
  --max-width: 479px;
  --design-width: 1728;
  --design-unit: 48;
  --scale-factor: 1;
  --fluid-container: clamp(var(--min-width), 100vw, var(--max-width));
  --fluid-font: calc(var(--fluid-container) / var(--design-width) * var(--design-unit) * var(--scale-factor));
  --text-offset: var(--text--btn-nav);
  --mask-url: url('https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67dc3bc14a8d101c9c8ef1b5_ln4-off-track-mask-callout-left.svg');
}
```

=== SECTIONS STRUCTURE BLUEPRINT ===
Section 1: HERO
- Original Tag: <section>
- Classes: `s home-hero`
- Visual Role: hero (confidence: 45%)
- Layout: Block flow
- Content instructions: Rebuild content for "Taller de motos" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 2: HERO
- Original Tag: <section>
- Classes: `s home-marquee`
- Visual Role: hero (confidence: 0%)
- Layout: Block flow
- Content instructions: Rebuild content for "Taller de motos" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 3: CONTACT
- Original Tag: <section>
- Classes: `s`
- Visual Role: contact (confidence: 20%)
- Layout: Block flow
- Content instructions: Rebuild content for "Taller de motos" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 4: HERO
- Original Tag: <section>
- Classes: `s is-horizontal-track`
- Visual Role: hero (confidence: 20%)
- Layout: Block flow
- Content instructions: Rebuild content for "Taller de motos" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 5: PROOF
- Original Tag: <section>
- Classes: `s is-otot-home`
- Visual Role: proof (confidence: 20%)
- Layout: Block flow
- Content instructions: Rebuild content for "Taller de motos" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 6: HERO
- Original Tag: <section>
- Classes: `s is-otot-end`
- Visual Role: hero (confidence: 0%)
- Layout: Block flow
- Content instructions: Rebuild content for "Taller de motos" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 7: TEAM
- Original Tag: <section>
- Classes: `s home-helmets`
- Visual Role: team (confidence: 20%)
- Layout: Block flow
- Content instructions: Rebuild content for "Taller de motos" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 8: HERO
- Original Tag: <section>
- Classes: `s`
- Visual Role: hero (confidence: 15%)
- Layout: Block flow
- Content instructions: Rebuild content for "Taller de motos" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 9: HERO
- Original Tag: <section>
- Classes: `s is-lando-exe`
- Visual Role: hero (confidence: 15%)
- Layout: Block flow
- Content instructions: Rebuild content for "Taller de motos" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 10: CONTACT
- Original Tag: <section>
- Classes: `s is-home-collabs`
- Visual Role: contact (confidence: 35%)
- Layout: Block flow
- Content instructions: Rebuild content for "Taller de motos" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 11: HERO
- Original Tag: <section>
- Classes: `s is-callout-socials`
- Visual Role: hero (confidence: 15%)
- Layout: Block flow
- Content instructions: Rebuild content for "Taller de motos" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 12: FOOTER
- Original Tag: <section>
- Classes: `s is-footer`
- Visual Role: footer (confidence: 40%)
- Layout: Block flow
- Content instructions: Rebuild content for "Taller de motos" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 13: HERO
- Original Tag: <div>
- Classes: `transition-w`
- Visual Role: hero (confidence: 15%)
- Layout: Flexbox
- Content instructions: Rebuild content for "Taller de motos" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 14: HERO
- Original Tag: <div>
- Classes: `transition-rive w-embed`
- Visual Role: hero (confidence: 0%)
- Layout: Block flow
- Content instructions: Rebuild content for "Taller de motos" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 15: HERO
- Original Tag: <div>
- Classes: `page-w`
- Visual Role: hero (confidence: 60%)
- Layout: Block flow
- Content instructions: Rebuild content for "Taller de motos" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 16: HERO
- Original Tag: <div>
- Classes: `taxi-w`
- Visual Role: hero (confidence: 60%)
- Layout: Block flow
- Content instructions: Rebuild content for "Taller de motos" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 17: HERO
- Original Tag: <div>
- Classes: `sticky-track home-hero`
- Visual Role: hero (confidence: 15%)
- Layout: Block flow
- Content instructions: Rebuild content for "Taller de motos" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 18: HERO
- Original Tag: <div>
- Classes: `sticky-item home-hero`
- Visual Role: hero (confidence: 15%)
- Layout: Block flow
- Content instructions: Rebuild content for "Taller de motos" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 19: HERO
- Original Tag: <div>
- Classes: `gl-canvas`
- Visual Role: hero (confidence: 0%)
- Layout: Block flow
- Content instructions: Rebuild content for "Taller de motos" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 20: CONTACT
- Original Tag: <div>
- Classes: `impact-content-w is-home`
- Visual Role: contact (confidence: 20%)
- Layout: Flexbox
- Content instructions: Rebuild content for "Taller de motos" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 21: HERO
- Original Tag: <div>
- Classes: `horizontal-pin-wrap`
- Visual Role: hero (confidence: 20%)
- Layout: Block flow
- Content instructions: Rebuild content for "Taller de motos" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 22: HERO
- Original Tag: <div>
- Classes: `horizontal-pin-spacer`
- Visual Role: hero (confidence: 20%)
- Layout: Block flow
- Content instructions: Rebuild content for "Taller de motos" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 23: HERO
- Original Tag: <div>
- Classes: `horizontal-pin-sticky`
- Visual Role: hero (confidence: 20%)
- Layout: Flexbox
- Content instructions: Rebuild content for "Taller de motos" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 24: HERO
- Original Tag: <div>
- Classes: `horizontal-track`
- Visual Role: hero (confidence: 20%)
- Layout: Flexbox
- Content instructions: Rebuild content for "Taller de motos" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 25: PROCESS
- Original Tag: <div>
- Classes: `horizontal-grid-col large-img is-home1`
- Visual Role: process (confidence: 20%)
- Layout: Flexbox
- Content instructions: Rebuild content for "Taller de motos" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 26: PROOF
- Original Tag: <div>
- Classes: `sticky-track is-home-otot`
- Visual Role: proof (confidence: 20%)
- Layout: Block flow
- Content instructions: Rebuild content for "Taller de motos" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 27: PROOF
- Original Tag: <div>
- Classes: `sticky-item`
- Visual Role: proof (confidence: 20%)
- Layout: Block flow
- Content instructions: Rebuild content for "Taller de motos" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 28: PROOF
- Original Tag: <div>
- Classes: `otot-home-inner`
- Visual Role: proof (confidence: 20%)
- Layout: Flexbox
- Content instructions: Rebuild content for "Taller de motos" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 29: HERO
- Original Tag: <div>
- Classes: `otot-home-bg`
- Visual Role: hero (confidence: 0%)
- Layout: Block flow
- Content instructions: Rebuild content for "Taller de motos" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 30: TEAM
- Original Tag: <div>
- Classes: `s-group bg-black`
- Visual Role: team (confidence: 20%)
- Layout: Block flow
- Content instructions: Rebuild content for "Taller de motos" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 31: HERO
- Original Tag: <div>
- Classes: `w-dyn-list`
- Visual Role: hero (confidence: 0%)
- Layout: Block flow
- Content instructions: Rebuild content for "Taller de motos" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 32: HERO
- Original Tag: <div>
- Classes: `helmet-grid w-dyn-items`
- Visual Role: hero (confidence: 0%)
- Layout: CSS Grid
- Content instructions: Rebuild content for "Taller de motos" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 33: HERO
- Original Tag: <div>
- Classes:

*[truncated for size — see prompt.md for full]*
