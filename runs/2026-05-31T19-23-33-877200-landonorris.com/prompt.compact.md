# 15. Final Agent Prompt

```text
You are an Awwwards-winning frontend developer. Build a premium site for: "Taller de motos".

Reference: https://landonorris.com/

=== DESIGN TOKENS ===
- Design Language: luxury minimal
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
- Layout: {"display":"block"}
- Background/layering: transparent/layered
- Full viewport: yes
- Media: {"images":1,"videos":0,"canvases":2,"svgs":3}
- Representative elements: <div>.c.home-hero 14px rgb(244, 244, 237); <div>.gl-canvas 14px rgb(244, 244, 237); <div>.home-hero-next-race-w 14px rgb(83, 84, 80); <div>.home-hero-next-race-outline.w-embed 14px rgb(83, 84, 80); <svg> 14px rgb(83, 84, 80)
- Adaptation: replace copy/assets for "Taller de motos", but preserve silhouette, spacing, layer order, visual density, class-driven styling, and scroll position behavior.

Section 2: HERO
- Original Tag: <section>
- Classes: `s home-marquee`
- Visual Role: hero (confidence: 0%)
- Layout: {"display":"block"}
- Background/layering: transparent/layered
- Full viewport: yes
- Media: {"images":2,"videos":0,"canvases":1,"svgs":0}
- Representative elements: <div>.c.is-marquee 14px rgb(244, 244, 237); <div>.marquee-gl-rive-target 14px rgb(244, 244, 237); <div>.marqee-adv-layout 14px rgb(244, 244, 237); <div>.marquee-gl-target-w 14px rgb(244, 244, 237); <div>.marquee-gl-target 14px rgb(244, 244, 237)
- Adaptation: replace copy/assets for "Taller de motos", but preserve silhouette, spacing, layer order, visual density, class-driven styling, and scroll position behavior.

Section 3: CONTACT
- Original Tag: <section>
- Classes: `s`
- Visual Role: contact (confidence: 20%)
- Layout: {"display":"block"}
- Background/layering: transparent/layered
- Full viewport: yes
- Media: {"images":0,"videos":0,"canvases":1,"svgs":1}
- Representative elements: <div>.c 14px rgb(244, 244, 237); <div>.impact-content-w.is-home 14px rgb(221, 225, 210); <div>.text-impact-lg-mona 105.833px rgb(221, 225, 210); <div>.impact-icon-w 14px rgb(221, 225, 210); <div>.base-helmet-rive-w 14px rgb(221, 225, 210)
- Adaptation: replace copy/assets for "Taller de motos", but preserve silhouette, spacing, layer order, visual density, class-driven styling, and scroll position behavior.

Section 4: HERO
- Original Tag: <section>
- Classes: `s is-horizontal-track`
- Visual Role: hero (confidence: 20%)
- Layout: {"display":"block"}
- Background/layering: transparent/layered
- Full viewport: yes
- Media: {"images":13,"videos":0,"canvases":0,"svgs":0}
- Representative elements: <div>.horizontal-track 14px rgb(244, 244, 237); <div>.c.is-horiz-scroll 14px rgb(244, 244, 237); <div>.horizontal-pin-wrap 14px rgb(244, 244, 237); <div>.horizontal-pin-spacer 14px rgb(244, 244, 237); <div>.horizontal-pin-sticky 14px rgb(244, 244, 237)
- Adaptation: replace copy/assets for "Taller de motos", but preserve silhouette, spacing, layer order, visual density, class-driven styling, and scroll position behavior.

Section 5: PROOF
- Original Tag: <section>
- Classes: `s is-otot-home`
- Visual Role: proof (confidence: 20%)
- Layout: {"display":"block"}
- Background/layering: transparent/layered
- Full viewport: yes
- Media: {"images":2,"videos":0,"canvases":3,"svgs":0}
- Representative elements: <div>.c.is-otot-home 14px rgb(40, 44, 32); <div>.otot-home-bg 14px rgb(40, 44, 32); <div>.otot-home-inner 14px rgb(40, 44, 32); <div>.otot-home-img-w.is-2 14px rgb(40, 44, 32); <img>.otot-home-img 14px rgb(40, 44, 32)
- Adaptation: replace copy/assets for "Taller de motos", but preserve silhouette, spacing, layer order, visual density, class-driven styling, and scroll position behavior.

Section 6: HERO
- Original Tag: <section>
- Classes: `s is-otot-end`
- Visual Role: hero (confidence: 0%)
- Layout: {"display":"block"}
- Background/layering: transparent/layered
- Full viewport: yes
- Media: {"images":1,"videos":0,"canvases":0,"svgs":0}
- Representative elements: <img>.image.is-otot-home-end 14px rgb(244, 244, 237); <div>.otot-home-end-img-w 14px rgb(244, 244, 237)
- Adaptation: replace copy/assets for "Taller de motos", but preserve silhouette, spacing, layer order, visual density, class-driven styling, and scroll position behavior.

Section 7: TEAM
- Original Tag: <section>
- Classes: `s home-helmets`
- Visual Role: team (confidence: 20%)
- Layout: {"display":"block"}
- Background/layering: transparent/layered
- Full viewport: yes
- Media: {"images":64,"videos":0,"canvases":0,"svgs":64}
- Representative elements: <div>.c.home-helmets 14px rgb(244, 244, 237); <div>.w-dyn-list 14px rgb(244, 244, 237); <div>.helmet-grid.w-dyn-items 14px rgb(244, 244, 237); <div>.spacer._8-75rem 14px rgb(244, 244, 237); <div>.title-layout.grid-main 14px rgb(244, 244, 237)
- Adaptation: replace copy/assets for "Taller de motos", but preserve silhouette, spacing, layer order, visual density, class-driven styling, and scroll position behavior.

Section 8: HERO
- Original Tag: <section>
- Classes: `s`
- Visual Role: hero (confidence: 15%)
- Layout: {"display":"block"}
- Background/layering: transparent/layered
- Full viewport: no
- Media: {"images":0,"videos":0,"canvases":2,"svgs":1}
- Representative elements: <div>.c.is-callout 14px rgb(244, 244, 237); <div>.callout-layout 14px rgb(244, 244, 237); <div>.callout-text-w 14px rgb(244, 244, 237); <div>.text-cta-short-intro.font-brier 26.6667px rgb(244, 244, 237); <a>.btn-w.w-inline-block 14px rgb(40, 44, 32)
- Adaptation: replace copy/assets for "Taller de motos", but preserve silhouette, spacing, layer order, visual density, class-driven styling, and scroll position behavior.

Section 9: HERO
- Original Tag: <section>
- Classes: `s is-lando-exe`
- Visual Role: hero (confidence: 15%)
- Layout: {"display":"block"}
- Background/layering: transparent/layered
- Full viewport: no
- Media: {"images":5,"videos":0,"canvases":1,"svgs":1}
- Representative elements: <div>.c.is-lando-exe 14px rgb(40, 44, 32); <div>.grid-main.exe-grid 14px rgb(40, 44, 32); <img>.image.is-exe-scroll 14px rgb(40, 44, 32); <div>.exe-col-2 14px rgb(40, 44, 32); <div>.exe-cta-img-w.is-1 14px rgb(40, 44, 32)
- Adaptation: replace copy/assets for "Taller de motos", but preserve silhouette, spacing, layer order, visual density, class-driven styling, and scroll position behavior.

Section 10: CONTACT
- Original Tag: <section>
- Classes: `s is-home-collabs`
- Visual Role: contact (confidence: 35%)
- Layout: {"display":"block"}
- Background/layering: transparent/layered
- Full viewport: no
- Media: {"images":18,"videos":0,"canvases":2,"svgs":0}
- Representative elements: <div>.c.is-home-collabs 14px rgb(40, 44, 32); <div>.home-collab-rive-w 14px rgb(40, 44, 32); <div>.home-collab-rive.w-embed 14px rgb(40, 44, 32); <canvas> 14px rgb(40, 44, 32); <div>.spacer._20rem 14px rgb(40, 44, 32)
- Adaptation: replace copy/assets for "Taller de motos", but preserve silhouette, spacing, layer order, visual density, class-driven styling, and scroll position behavior.

Section 11: HERO
- Original Tag: <section>
- Classes: `s is-callout-socials`
- Visual Role: hero (confidence: 15%)
- Layout: {"display":"block"}
- Background/layering: transparent/layered
- Full viewport: yes
- Media: {"images":7,"videos":0,"canvases":1,"svgs":0}
- Representative elements: <div>.c.is-callout-socials 14px rgb(17, 17, 18); <div>.callout-socials-inner 14px rgb(17, 17, 18); <div>.callout-socials-layout 14px rgb(17, 17, 18); <div>.callout-socials-card-layout 14px rgb(17, 17, 18); <div>.spacer._8rem 14px rgb(17, 17, 18)
- Adaptation: replace copy/assets for "Taller de motos", but preserve silhouette, spacing, layer order, visual density, class-driven styling, and scroll position behavior.

Section 12: FOOTER
- Original Tag: <section>
- Classes: `s is-footer`
- Visual Role: footer (confidence: 40%)
- Layout: {"display":"block"}
- Background/layering: rgb(244, 244, 237)
- Full viewport: yes
- Media: {"images":10,"videos":0,"canvases":2,"svgs":8}
- Representative elements: <div>.footer-bg-gradient 14px rgb(40, 44, 32); <div>.c.is-footer 14px rgb(40, 44, 32); <div>.footer-layout-w 14px rgb(40, 44, 32); <div>.footer-layout-clip 14px rgb(244, 244, 237); <div>.footer-inner-layout 14px rgb(244, 244, 237)
- Adaptation: replace copy/assets for "Taller de motos", but preserve silhouette, spacing, layer order, visual density, class-driven styling, and scroll position behavior.

Section 13: HERO
- Original Tag: <div>
- Classes: `transition-w`
- Visual Role: hero (confidence: 15%)
- Layout: {"display":"flex","flexDirection":"row","flexWrap":"nowrap","alignItems":"flex-end","justifyContent":"center","gap":"normal"}
- Background/layering: rgb(210, 255, 0)
- Full viewport: yes
- Media: {"images":0,"videos":0,"canvases":1,"svgs":0}
- Representative elements: <div>.transition-rive.w-embed 14px rgb(244, 244, 237); <canvas> 14px rgb(244, 244, 237); <div>.transition-btn 14px rgb(244, 244, 237); <a>.btn-w.w-inline-block 14px rgb(40, 44, 32); <div>.btn-inner 14px rgb(40, 44, 32)
- Adaptation: replace copy/assets for "Taller

*[truncated for size — see prompt.md for full]*
