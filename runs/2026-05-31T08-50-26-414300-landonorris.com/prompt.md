# 1. Executive Design Diagnosis

**Design Language:** luxury minimal (confidence: 85%)
**Signals:** light palette, low CSS complexity, no WebGL
**Sections:** 40 major sections detected
**Motion Complexity:** 25 scroll-linked animations
**CSS Complexity:** 0/100
**Visual Rhythm:** 4 viewport(s) captured

This reference uses a luxury minimal approach with heavy motion choreography and standard CSS effects.

---

# 2. Reference DNA Summary

**Stack:** GSAP, Lenis Scroll
**Layout:** Flexbox-dominant composition
**Typography:** Mona Sans Variable, Arial, sans-serif, Brier, Arial, sans-serif, Brier
**Palette:** rgba(0, 0, 0, 0), rgb(0, 0, 0), rgb(255, 255, 0), rgb(51, 51, 51), rgb(255, 255, 255), rgb(56, 152, 236), rgba(0, 0, 0, 0.1), rgb(170, 173, 176)
**Design Language:** luxury minimal
**Key Differentiators:** light palette, low CSS complexity, no WebGL

---

# 3. Design Token System

## Color Palette
- **Background:** rgb(244, 244, 237), rgb(40, 44, 32), rgb(17, 17, 18), rgb(210, 255, 0)
- **Text:** rgb(83, 84, 80), rgb(221, 225, 210), rgb(0, 0, 0), rgb(178, 199, 58)
- **Token:** #ebeee0

## Typography
| Element | Size | Weight | Line-Height | Letter-Spacing |
|---------|------|--------|-------------|----------------|
| `h2` | 60px | 700 | 53.16px | -1.66667px |
| `p` | 16.6667px | 400 | 20.8333px | -0.166667px |
| `a` | 14px | 400 | 20px | â€” |
| `button` | 14px | 400 | 20px | â€” |
| `span` | 60px | 700 | 53.16px | -1.66667px |

## Spacing Scale
- 16.6667px
- 8.33333px
- 4.16667px
- auto
- 33.3333px
- 26.6667px
- 50px
- 25px
- 80px
- 160px
- 77px
- 156.75px
- 92.62px
- 18.37px
- 194.016px
- 237.562px
- 89.87px
- 660.562px
- 12.87px
- 88px
- 648.562px
- 22px
- 144.844px
- 29.37px

## CSS Variables
--large: :after { border-width: 5px;
--vertical: :after { border-width: 4px;
--color--dark-green: #282c20;
--color--white: #f4f4ed;
--padding--container: 1.25rem;
--gap: 1.25rem;
--on-t-nav-spacer: 5.375rem;
--color--black: #111112;
--text--h1: 4rem;
--padding--xlarge: 5rem;
--padding--med: 3rem;
--color--lime-off: #b2c73a;
--color--lime: #d2ff00;
--color--green-off-white-1: #dde1d2;
--color--lime-zero: #d2ff0000;
--text--btn-primary: 1rem;
--text--btn-nav: 1.25rem;
--text--btn-footer: 1.875rem;
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
/* ... and 25 more variables */


---

# 4. CSS Architecture (full extraction)

## Extracted Stylesheets
- **Total CSS rules:** 1330
- **External stylesheets:** 1
- **Unique selectors:** 1294
- **Keyframe animations:** 3
- **Media queries:** 30
- **@font-face declarations:** 3

## Keyframe Animations
```css
@keyframes spin { 
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
```
```css
@keyframes translateXLeft { 
  100% { transform: translateX(-100%); }
}
```
```css
@keyframes translateXRight { 
  100% { transform: translateX(100%); }
}
```

## Media Queries
- `screen and (max-width: 991px)` — 16 rule(s)
  - `.w-container` { max-width: 728px }
  - `.w-hidden-main` { display: inherit }
  - `.w-hidden-medium` { display: none }
  - `.w-col-medium-1` { width: 8.33333% }
  - `.w-col-medium-2` { width: 16.6667% }
  - `.w-col-medium-3` { width: 25% }
  - `.w-col-medium-4` { width: 33.3333% }
  - `.w-col-medium-5` { width: 41.6667% }
  - `.w-col-medium-6` { width: 50% }
  - `.w-col-medium-7` { width: 58.3333% }
- `screen and (max-width: 767px)` — 16 rule(s)
  - `.w-hidden-main, .w-hidden-medium` { display: inherit }
  - `.w-hidden-small` { display: none }
  - `.w-row, .w-container .w-row` { margin-left: 0px; margin-right: 0px }
  - `.w-col` { width: 100%; left: auto; right: auto }
  - `.w-col-small-1` { width: 8.33333% }
  - `.w-col-small-2` { width: 16.6667% }
  - `.w-col-small-3` { width: 25% }
  - `.w-col-small-4` { width: 33.3333% }
  - `.w-col-small-5` { width: 41.6667% }
  - `.w-col-small-6` { width: 50% }
- `screen and (max-width: 479px)` — 16 rule(s)
  - `.w-container` { max-width: none }
  - `.w-hidden-main, .w-hidden-medium, .w-hidden-small` { display: inherit }
  - `.w-hidden-tiny` { display: none }
  - `.w-col` { width: 100% }
  - `.w-col-tiny-1` { width: 8.33333% }
  - `.w-col-tiny-2` { width: 16.6667% }
  - `.w-col-tiny-3` { width: 25% }
  - `.w-col-tiny-4` { width: 33.3333% }
  - `.w-col-tiny-5` { width: 41.6667% }
  - `.w-col-tiny-6` { width: 50% }
- `screen and (max-width: 767px)` — 1 rule(s)
  - `.w-nav-brand` { padding-left: 10px }
- `(min-width: 768px)` — 8 rule(s)
  - `.w-lightbox-content` { height: 96vh; margin-top: 2vh }
  - `.w-lightbox-view, .w-lightbox-view::before` { height: 96vh }
  - `.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view::before` { height: 84vh }
  - `.w-lightbox-image` { max-width: 96vw; max-height: 96vh }
  - `.w-lightbox-group .w-lightbox-image` { max-width: 82.3vw; max-height: 84vh }
  - `.w-lightbox-left, .w-lightbox-right` { opacity: 0.5; display: block }
  - `.w-lightbox-close` { opacity: 0.8 }
  - `.w-lightbox-control:hover` { opacity: 1 }
- `screen and (max-width: 991px)` — 2 rule(s)
  - `.w-nav[data-collapse="medium"] .w-nav-menu` { display: none }
  - `.w-nav[data-collapse="medium"] .w-nav-button` { display: block }
- `screen and (max-width: 767px)` — 3 rule(s)
  - `.w-nav[data-collapse="small"] .w-nav-menu` { display: none }
  - `.w-nav[data-collapse="small"] .w-nav-button` { display: block }
  - `.w-nav-brand` { padding-left: 10px }
- `screen and (max-width: 479px)` — 2 rule(s)
  - `.w-nav[data-collapse="tiny"] .w-nav-menu` { display: none }
  - `.w-nav[data-collapse="tiny"] .w-nav-button` { display: block }
- `screen and (max-width: 479px)` — 1 rule(s)
  - `.w-tab-link` { display: block }
- `screen and (max-width: 991px)` — 104 rule(s)
  - `body` { --color--dark-green: #282c20; --color--white: #f4f4ed; --padding--container: 1.25rem; --gap: 1.25rem; --on-t-nav-spacer: 5.375rem }
  - `li` { font-size: 1.25rem }
  - `label` { font-size: 0.8rem }
  - `blockquote` { font-size: 1.2rem }
  - `.c.home-hero` { justify-content: center; align-items: flex-start }
  - `.c.is-lando-exe` { padding-right: var(--gap); padding-left: var(--gap) }
  - `.styleguide__item` { justify-content: flex-start; align-items: flex-start; display: flex }
  - `.rich-text p` { font-size: 1.25rem }
  - `.rich-text h1` { font-size: 3.28rem }
  - `.rich-text h2` { font-size: 2.5rem }
- `screen and (max-width: 767px)` — 14 rule(s)
  - `.styleguide__item` { flex-direction: column; flex-wrap: nowrap; justify-content: flex-start; align-items: flex-start }
  - `.text-eyebrow` { font-size: 1rem }
  - `.text-body-reg-mona` { font-size: 1.75rem }
  - `.horizontal-item-w.is-home-8.neg-margin, .horizontal-item-img-w.is-home8` { max-width: 100% }
  - `.text-title-small-label, .text-title-small-label.text, .text-title-small-label.date` { font-size: 1.3rem }
  - `.callout-socials-card-w` { width: 15rem }
  - `.footer-legal-links-w` { column-gap: var(--gap); row-gap: var(--gap); flex-direction: row-reverse; flex-wrap: nowrap; justify-content: center }
  - `.text-body-sm-mona` { font-size: 1.5rem }
  - `.off-t-camp-hero-layout` { justify-content: center; align-items: center }
  - `.camp-info-col.is-col2` { flex-direction: row; flex-wrap: nowrap }
- `screen and (max-width: 479px)` — 317 rule(s)
  - `.c.is-marquee` { height: 100svh; min-height: auto }
  - `.c.home-helmets` { padding-top: calc(var(--gap) * 1) }
  - `.c.is-on-track-home` { --color--dark-green: #282c20; --color--white: #f4f4ed; --padding--container: 1rem; --gap: 1.25rem; --on-t-nav-spacer: 6.375rem }
  - `.c.is-on-track-countdown` { padding-bottom: 10rem }
  - `.c.is-calendar-hero` { --color--dark-green: #282c20; --color--white: #f4f4ed; --padding--container: 1rem; --gap: 1.25rem; --on-t-nav-spacer: 6.375rem }
  - `.h1` { font-size: 4rem }
  - `.text-title-lg-mona` { font-size: 2.6rem }
  - `.text-title-lg-mona.text-vertical.z-10` { writing-mode: inherit; transform: rotate(0deg) }
  - `.text-title-lg-mona.on-t-career` { order: 1 }
  - `.text-cta-short-intro` { font-size: 2rem }
- `screen and (max-width: 991px)` — 1 rule(s)
  - `#w-node-_8734ac60-bf7c-ac47-bf21-501caa438859-0b17a7eb, #w-node-_04f46b3f-5093-ef67-5316-1ae3df93be8d-0b17a7eb, #w-node-e77657ec-ff17-bc21-98b5-30fdd8e171c8-5f7c7c5b, #w-node-_8734ac60-bf7c-ac47-bf21-501caa438859-5f7c7c5b, #w-node-_04f46b3f-5093-ef67-5316-1ae3df93be8d-4bd20f1f` { grid-column-start: span 2; grid-column-end: span 2 }
- `screen and (max-width: 479px)` — 16 rule(s)
  - `#w-node-_5d5ac04e-626f-e2bd-ba2c-8a1157b2eda4-0b17a7eb, #w-node-_8734ac60-bf7c-ac47-bf21-501caa438859-0b17a7eb, #w-node-_10049719-af3a-791f-b004-78a94b8f2fac-0b17a7eb, #w-node-_04f46b3f-5093-ef67-5316-1ae3df93be8d-0b17a7eb` { grid-column-start: span 1; grid-column-end: span 1 }
  - `#w-node-b6f341ed-fd53-0ac8-b7cc-7ff8d6d8a57c-5f7c7c5b` { grid-row-start: span 1; grid-column-start: span 2; grid-row-end: span 1; grid-column-end: span 2 }
  - `#w-node-_4eaad92f-9012-c100-dccc-e3361c20d2af-5f7c7c5b` { grid-column-start: 1 }
  - `#w-node-e77657ec-ff17-bc21-98b5-30fdd8e171c2-5f7c7c5b, #w-node-e77657ec-ff17-bc21-98b5-30fdd8e171c8-5f7c7c5b` { grid-column-start: span 1; grid-column-end: span 1 }
  - `#w-node-b8524681-f28e-9f44-e6a2-4b1ff56d75fc-5f7c7c5b` { grid-row-start: span 1; grid-column-start: span 1; grid-row-end: span 1; grid-column-end: span 1 }
  - `#w-node-_7e66a639-1a37-e098-bd9b-f9147ab37e70-5f7c7c5b` { grid-column-start: span 1; grid-column-end: span 1 }
  - `#w-node-_924c1ab4-f6ca-fd53-1cf2-32303cf4d88f-5f7c7c5b` { grid-row-start: span 1; grid-column-start: span 1; grid-row-end: span 1; grid-column-end: span 1 }
  - `#w-node-_26cf4267-3a90-03b0-7d88-cf98de04701c-5f7c7c5b, #w-node-d3d728c8-0307-9ec9-8997-b794991c520d-5f7c7c5b` { grid-column-start: span 1; grid-column-end: span 1 }
  - `#w-node-a0f28f49-591b-0ded-0b8a-e2d94bc7e287-5f7c7c5b` { grid-row-start: span 1; grid-column-start: span 1; grid-row-end: span 1; grid-column-end: span 1 }
  - `#w-node-_5d5ac04e-626f-e2bd-ba2c-8a1157b2eda4-5f7c7c5b, #w-node-_8734ac60-bf7c-ac47-bf21-501caa438859-5f7c7c5b` { grid-column-start: span 1; grid-column-end: span 1 }
- `screen and (max-width: 991px)` — 1 rule(s)
  - `:root` { --min-width: 768px; --max-width: 991px; --design-width: 1728; --design-unit: 20 }
- `screen and (max-width: 767px)` — 1 rule(s)
  - `:root` { --min-width: 480px; --max-width: 767px }
- `screen and (max-width: 479px)` — 1 rule(s)
  - `:root` { --min-width: 320px; --max-width: 479px; --design-unit: 48 }
- `screen and (max-width: 991px)` — 1 rule(s)
  - `.impact-content-w .text-impact-lg-mona strong` { font-size: inherit }
- `only screen and (max-width: 479px)` — 1 rule(s)
  - `.footer-layout-clip` { --mask-url: url('https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e4213817c888515fa4855b_ln4-footer-mask-mobile.svg') }
- `only screen and (max-width: 479px)` — 1 rule(s)
  - `[data-helmet-item]` { --mask-url: url('https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67eea130c0f25ef68ac8889e_ln4-helm-mob-refactor-lime-fill.svg') }
- `(min-width: 1920px)` — 1 rule(s)
  - `.marquee-offest-w` { mask-image: linear-gradient(90deg, rgba(255, 255, 255, 0), white 7.5%, white 92.5%, rgba(255, 255, 255, 0)); mask-repeat: no-repeat; mask-size: 100% 100% }
- `only screen and (min-width: 992px)` — 5 rule(s)
  - `.f1-highlight-grid:not(.is-history):hover .f1-highlight-grid-line` { display: none }
  - `.f1-highlight-grid:hover .calendar-row-head-line` { display: none }
  - `.f1-highlight-grid:not(.is-history):hover .text-on-t-stat-label-sm` { color: inherit }
  - `.f1-highlight-grid:not(.is-history):hover .f1-highlight-item-round-w` { color: var(--color--black) }
  - `.f1-highlight-grid:hover .f1-highlight-round-svg` { color: var(--color--grey-off-track) }
- `only screen and (min-width: 992px)` — 1 rule(s)
  - `.calendar-dropdown-item:hover .calendar-dropdown-chevron` { color: var(--color--black) }
- `only screen and (min-width: 992px)` — 1 rule(s)
  - `.calendar-dropdown-item.is-open .calendar-dropdown-trigger .image.is-trophy, .f1-highlight-grid:not(.is-history):hover .image.is-trophy, .f1-highlight-grid.is-highlights:hover .image.is-trophy` { filter: invert(100%) grayscale(100%) }
- `screen and (max-width: 497px)` — 2 rule(s)
  - `.part-i-rich-text h3` { font-size: 3.6rem; line-height: 90.6%; font-variation-settings: "wght" 660, "wdth" 93; letter-spacing: -0.0625rem; text-transform: uppercase }
  - `.part-i-rich-text h3 strong` { font-family: Brier; font-size: 3.6rem; line-height: 83%; letter-spacing: -0.1875rem; color: var(--color--green-off-white-2) }
- `only screen and (min-width: 992px)` — 1 rule(s)
  - `[data-hide="d"]` { display: none }
- `only screen and (max-width: 991px)` — 1 rule(s)
  - `[data-hide="t"]` { display: none }
- `screen and (max-width: 767px)` — 1 rule(s)
  - `[data-hide="ml"]` { display: none }
- `screen and (max-width: 497px)` — 1 rule(s)
  - `[data-hide="m"]` { display: none }
- `only screen and (max-width: 479px)` — 2 rule(s)
  - `.is-safari .footer-layout-clip` { aspect-ratio: 382.94 / 627.49 }
  - `.is-iphone .footer-layout-clip` { aspect-ratio: 382.94 / 627.49 }

## @font-face Declarations
```css
@font-face { font-family: webflow-icons; src: url("data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBiUAAAC8AAAAYGNtYXDpP+a4AAABHAAAAFxnYXNwAAAAEAAAAXgAAAAIZ2x5ZmhS2XEAAAGAAAADHGhlYWQTFw3HAAAEnAAAADZoaGVhCXYFgQAABNQAAAAkaG10eCe4A1oAAAT4AAAAMGxvY2EDtALGAAAFKAAAABptYXhwABAAPgAABUQAAAAgbmFtZSoCsMsAAAVkAAABznBvc3QAAwAAAAAHNAAAACAAAwP4AZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpAwPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAQAAAAAwACAACAAQAAQAg5gPpA//9//8AAAAAACDmAOkA//3//wAB/+MaBBcIAAMAAQAAAAAAAAAAAAAAAAABAAH//wAPAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEBIAAAAyADgAAFAAAJAQcJARcDIP5AQAGA/oBAAcABwED+gP6AQAABAOAAAALgA4AABQAAEwEXCQEH4AHAQP6AAYBAAcABwED+gP6AQAAAAwDAAOADQALAAA8AHwAvAAABISIGHQEUFjMhMjY9ATQmByEiBh0BFBYzITI2PQE0JgchIgYdARQWMyEyNj0BNCYDIP3ADRMTDQJADRMTDf3ADRMTDQJADRMTDf3ADRMTDQJADRMTAsATDSANExMNIA0TwBMNIA0TEw0gDRPAEw0gDRMTDSANEwAAAAABAJ0AtAOBApUABQAACQIHCQEDJP7r/upcAXEBcgKU/usBFVz+fAGEAAAAAAL//f+9BAMDwwAEAAkAABcBJwEXAwE3AQdpA5ps/GZsbAOabPxmbEMDmmz8ZmwDmvxmbAOabAAAAgAA/8AEAAPAAB0AOwAABSInLgEnJjU0Nz4BNzYzMTIXHgEXFhUUBw4BBwYjNTI3PgE3NjU0Jy4BJyYjMSIHDgEHBhUUFx4BFxYzAgBqXV6LKCgoKIteXWpqXV6LKCgoKIteXWpVSktvICEhIG9LSlVVSktvICEhIG9LSlVAKCiLXl1qal1eiygoKCiLXl1qal1eiygoZiEgb0tKVVVKS28gISEgb0tKVVVKS28gIQABAAABwAIAA8AAEgAAEzQ3PgE3NjMxFSIHDgEHBhUxIwAoKIteXWpVSktvICFmAcBqXV6LKChmISBvS0pVAAAAAgAA/8AFtgPAADIAOgAAARYXHgEXFhUUBw4BBwYHIxUhIicuAScmNTQ3PgE3NjMxOAExNDc+ATc2MzIXHgEXFhcVATMJATMVMzUEjD83NlAXFxYXTjU1PQL8kz01Nk8XFxcXTzY1PSIjd1BQWlJJSXInJw3+mdv+2/7c25MCUQYcHFg5OUA/ODlXHBwIAhcXTzY1PTw1Nk8XF1tQUHcjIhwcYUNDTgL+3QFt/pOTkwABAAAAAQAAmM7nP18PPPUACwQAAAAAANciZKUAAAAA1yJkpf/9/70FtgPDAAAACAACAAAAAAAAAAEAAAPA/8AAAAW3//3//QW2AAEAAAAAAAAAAAAAAAAAAAAMBAAAAAAAAAAAAAAAAgAAAAQAASAEAADgBAAAwAQAAJ0EAP/9BAAAAAQAAAAFtwAAAAAAAAAKABQAHgAyAEYAjACiAL4BFgE2AY4AAAABAAAADAA8AAMAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEADQAAAAEAAAAAAAIABwCWAAEAAAAAAAMADQBIAAEAAAAAAAQADQCrAAEAAAAAAAUACwAnAAEAAAAAAAYADQBvAAEAAAAAAAoAGgDSAAMAAQQJAAEAGgANAAMAAQQJAAIADgCdAAMAAQQJAAMAGgBVAAMAAQQJAAQAGgC4AAMAAQQJAAUAFgAyAAMAAQQJAAYAGgB8AAMAAQQJAAoANADsd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQByd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==") format("truetype"); font-weight: normal; font-style: normal; }
```
```css
@font-face { font-family: Brier; src: url("https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67b6113a220f85ad6497495a_Brier-Bold.woff2") format("woff2"); font-weight: 700; font-style: normal; font-display: swap; }
```
```css
@font-face { font-family: "Mona Sans Variable"; src: url("https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67bc6274c5b4108b123aa4d5_MonaSans-VariableFont_wdth%2Cwght.woff2") format("woff2"); font-weight: 200 900; font-style: normal; font-display: swap; }
```

## Key Selectors (1294 shown)

`html` {
  text-size-adjust: 100%;
  font-family: sans-serif;
}

`body` {
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
}

`article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary` {
  display: block;
}

`audio, canvas, progress, video` {
  vertical-align: baseline;
  display: inline-block;
}

`audio:not([controls])` {
  height: 0px;
  display: none;
}

`[hidden], template` {
  display: none;
}

`a` {
  background-color: rgba(0, 0, 0, 0);
}

`a:active, a:hover` {
  outline-color: initial;
  outline-style: initial;
  outline-width: 0px;
}

`abbr[title]` {
  border-bottom-width: 1px;
  border-bottom-style: dotted;
  border-bottom-color: currentcolor;
}

`b, strong` {
  font-weight: bold;
}

`dfn` {
  font-style: italic;
}

`h1` {
  margin-top: 0.67em;
  margin-right: 0px;
  margin-bottom: 0.67em;
  margin-left: 0px;
  font-size: 2em;
}

`mark` {
  color: rgb(0, 0, 0);
  background-image: initial;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: rgb(255, 255, 0);
}

`small` {
  font-size: 80%;
}

`sub, sup` {
  vertical-align: baseline;
  font-size: 75%;
  line-height: 0;
  position: relative;
}

`sup` {
  top: -0.5em;
}

`sub` {
  bottom: -0.25em;
}

`img` {
  border-top-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
  border-left-width: 0px;
  border-top-style: none;
  border-right-style: none;
  border-bottom-style: none;
  border-left-style: none;
  border-top-color: currentcolor;
  border-right-color: currentcolor;
  border-bottom-color: currentcolor;
  border-left-color: currentcolor;
  border-image-source: initial;
  border-image-slice: initial;
  border-image-width: initial;
  border-image-outset: initial;
  border-image-repeat: initial;
}

`svg:not(:root)` {
  overflow-x: hidden;
  overflow-y: hidden;
}

`hr` {
  box-sizing: content-box;
  height: 0px;
}

`pre` {
  overflow-x: auto;
  overflow-y: auto;
}

`code, kbd, pre, samp` {
  font-family: monospace;
  font-size: 1em;
}

`button, input, optgroup, select, textarea` {
  color: inherit;
  font-style: inherit;
  font-variant-ligatures: inherit;
  font-variant-caps: inherit;
  font-variant-numeric: inherit;
  font-variant-east-asian: inherit;
  font-variant-alternates: inherit;
  font-variant-position: inherit;
  font-variant-emoji: inherit;
  font-weight: inherit;
  font-stretch: inherit;
  font-size: inherit;
  line-height: inherit;
  font-family: inherit;
  font-optical-sizing: inherit;
  font-size-adjust: inherit;
  font-kerning: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  font-language-override: inherit;
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
}

`button` {
  overflow-x: visible;
  overflow-y: visible;
}

`button, select` {
  text-transform: none;
}

`button, html input[type="button"], input[type="reset"]` {
  appearance: button;
  cursor: pointer;
}

`button[disabled], html input[disabled]` {
  cursor: default;
}

`input` {
  line-height: normal;
}

`input[type="checkbox"], input[type="radio"]` {
  box-sizing: border-box;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`input[type="number"]::-webkit-inner-spin-button, input[type="number"]::-webkit-outer-spin-button` {
  height: auto;
}

`input[type="search"]` {
  appearance: none;
}

`input[type="search"]::-webkit-search-cancel-button, input[type="search"]::-webkit-search-decoration` {
  appearance: none;
}

`legend` {
  border-top-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
  border-left-width: 0px;
  border-top-style: none;
  border-right-style: none;
  border-bottom-style: none;
  border-left-style: none;
  border-top-color: currentcolor;
  border-right-color: currentcolor;
  border-bottom-color: currentcolor;
  border-left-color: currentcolor;
  border-image-source: initial;
  border-image-slice: initial;
  border-image-width: initial;
  border-image-outset: initial;
  border-image-repeat: initial;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`textarea` {
  overflow-x: auto;
  overflow-y: auto;
}

`optgroup` {
  font-weight: bold;
}

`table` {
  border-collapse: collapse;
  -webkit-border-horizontal-spacing: 0px;
  -webkit-border-vertical-spacing: 0px;
}

`td, th` {
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`[class^="w-icon-"], [class*=" w-icon-"]` {
  speak: none;
  font-variant-ligatures: normal;
  font-variant-caps: normal;
  font-variant-numeric: normal;
  font-variant-east-asian: normal;
  font-variant-alternates: normal;
  font-variant-position: normal;
  font-variant-emoji: normal;
  text-transform: none;
  -webkit-font-smoothing: antialiased;
  font-style: normal;
  font-weight: normal;
  line-height: 1;
  font-family: webflow-icons;
}

`.w-icon-slider-right::before` {
  content: "";
}

`.w-icon-slider-left::before` {
  content: "";
}

`.w-icon-nav-menu::before` {
  content: "";
}

`.w-icon-arrow-down::before, .w-icon-dropdown-toggle::before` {
  content: "";
}

`.w-icon-file-upload-remove::before` {
  content: "";
}

`.w-icon-file-upload-icon::before` {
  content: "";
}

`*` {
  box-sizing: border-box;
}

`html` {
  height: 100%;
}

`body` {
  color: rgb(51, 51, 51);
  background-color: rgb(255, 255, 255);
  min-height: 100%;
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  font-family: Arial, sans-serif;
  font-size: 14px;
  line-height: 20px;
}

`img` {
  vertical-align: middle;
  max-width: 100%;
  display: inline-block;
}

`html.w-mod-touch *` {
  background-attachment: scroll;
}

`.w-block` {
  display: block;
}

`.w-inline-block` {
  max-width: 100%;
  display: inline-block;
}

`.w-clearfix::before, .w-clearfix::after` {
  content: " ";
  grid-row-start: 1;
  grid-column-start: 1;
  grid-row-end: 2;
  grid-column-end: 2;
  display: table;
}

`.w-clearfix::after` {
  clear: both;
}

`.w-hidden` {
  display: none;
}

`.w-button` {
  color: rgb(255, 255, 255);
  line-height: inherit;
  cursor: pointer;
  background-color: rgb(56, 152, 236);
  border-top-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
  border-left-width: 0px;
  border-top-style: none;
  border-right-style: none;
  border-bottom-style: none;
  border-left-style: none;
  border-top-color: currentcolor;
  border-right-color: currentcolor;
  border-bottom-color: currentcolor;
  border-left-color: currentcolor;
  border-image-source: initial;
  border-image-slice: initial;
  border-image-width: initial;
  border-image-outset: initial;
  border-image-repeat: initial;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
  padding-top: 9px;
  padding-right: 15px;
  padding-bottom: 9px;
  padding-left: 15px;
  text-decoration-line: none;
  text-decoration-thickness: initial;
  text-decoration-style: initial;
  text-decoration-color: initial;
  display: inline-block;
}

`input.w-button` {
  appearance: button;
}

`html[data-w-dynpage] [data-w-cloak]` {
  color: rgba(0, 0, 0, 0);
}

`.w-code-block` {
  margin-top: unset;
  margin-right: unset;
  margin-bottom: unset;
  margin-left: unset;
}

`pre.w-code-block code` {
  all: inherit;
}

`pre.w-code-block code > span` {
  display: block;
}

`.w-optimization` {
  display: contents;
}

`.w-webflow-badge, .w-webflow-badge > img` {
  box-sizing: unset;
  width: unset;
  height: unset;
  max-height: unset;
  max-width: unset;
  min-height: unset;
  min-width: unset;
  margin-top: unset;
  margin-right: unset;
  margin-bottom: unset;
  margin-left: unset;
  padding-top: unset;
  padding-right: unset;
  padding-bottom: unset;
  padding-left: unset;
  float: unset;
  clear: unset;
  border-top-color: unset;
  border-top-style: unset;
  border-top-width: unset;
  border-right-color: unset;
  border-right-style: unset;
  border-right-width: unset;
  border-bottom-color: unset;
  border-bottom-style: unset;
  border-bottom-width: unset;
  border-left-color: unset;
  border-left-style: unset;
  border-left-width: unset;
  border-image-source: unset;
  border-image-slice: unset;
  border-image-width: unset;
  border-image-outset: unset;
  border-image-repeat: unset;
  border-top-left-radius: unset;
  border-top-right-radius: unset;
  border-bottom-right-radius: unset;
  border-bottom-left-radius: unset;
  background-image: unset;
  background-position-x: unset;
  background-position-y: unset;
  background-size: unset;
  background-repeat: unset;
  background-origin: unset;
  background-clip: unset;
  background-attachment: unset;
  background-color: unset;
  box-shadow: unset;
  transform: unset;
  direction: unset;
  font-family: unset;
  font-weight: unset;
  color: unset;
  font-size: unset;
  line-height: unset;
  font-style: unset;
  font-variant-ligatures: unset;
  font-variant-caps: unset;
  font-variant-alternates: unset;
  font-variant-numeric: unset;
  font-variant-east-asian: unset;
  font-variant-position: unset;
  font-variant-emoji: unset;
  text-align: unset;
  letter-spacing: unset;
  text-decoration-line: unset;
  text-decoration-thickness: unset;
  text-decoration-style: unset;
  text-decoration-color: unset;
  text-indent: unset;
  text-transform: unset;
  list-style-type: unset;
  text-shadow: unset;
  vertical-align: unset;
  cursor: unset;
  white-space-collapse: unset;
  text-wrap-mode: unset;
  word-break: unset;
  word-spacing: unset;
  overflow-wrap: unset;
  transition-property: unset;
  transition-duration: unset;
  transition-timing-function: unset;
  transition-delay: unset;
  transition-behavior: unset;
}

`.w-webflow-badge` {
  white-space-collapse: collapse;
  text-wrap-mode: nowrap;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 1px 3px;
  visibility: visible;
  opacity: 1;
  z-index: 2147483647;
  color: rgb(170, 173, 176);
  width: auto;
  height: auto;
  overflow-x: unset;
  overflow-y: unset;
  background-color: rgb(255, 255, 255);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  padding-top: 6px;
  padding-right: 6px;
  padding-bottom: 6px;
  padding-left: 6px;
  font-size: 12px;
  line-height: 14px;
  text-decoration-line: none;
  text-decoration-thickness: initial;
  text-decoration-style: initial;
  text-decoration-color: initial;
  display: inline-block;
  position: fixed;
  top: auto;
  right: 12px;
  bottom: 12px;
  left: auto;
  transform: none;
}

`.w-webflow-badge > img` {
  position: unset;
  visibility: unset;
  opacity: 1;
  vertical-align: middle;
  display: inline-block;
}

`h1, h2, h3, h4, h5, h6` {
  margin-bottom: 10px;
  font-weight: bold;
}

`h1` {
  margin-top: 20px;
  font-size: 38px;
  line-height: 44px;
}

`h2` {
  margin-top: 20px;
  font-size: 32px;
  line-height: 36px;
}

`h3` {
  margin-top: 20px;
  font-size: 24px;
  line-height: 30px;
}

`h4` {
  margin-top: 10px;
  font-size: 18px;
  line-height: 24px;
}

`h5` {
  margin-top: 10px;
  font-size: 14px;
  line-height: 20px;
}

`h6` {
  margin-top: 10px;
  font-size: 12px;
  line-height: 18px;
}

`p` {
  margin-top: 0px;
  margin-bottom: 10px;
}

`blockquote` {
  border-left-width: 5px;
  border-left-style: solid;
  border-left-color: rgb(226, 226, 226);
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 10px;
  margin-left: 0px;
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-left: 20px;
  font-size: 18px;
  line-height: 22px;
}

`figure` {
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 10px;
  margin-left: 0px;
}

`figcaption` {
  text-align: center;
  margin-top: 5px;
}

`ul, ol` {
  margin-top: 0px;
  margin-bottom: 10px;
  padding-left: 40px;
}

`.w-list-unstyled` {
  padding-left: 0px;
  list-style-position: initial;
  list-style-image: initial;
  list-style-type: none;
}

`.w-embed::before, .w-embed::after` {
  content: " ";
  grid-row-start: 1;
  grid-column-start: 1;
  grid-row-end: 2;
  grid-column-end: 2;
  display: table;
}

`.w-embed::after` {
  clear: both;
}

`.w-video` {
  width: 100%;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  position: relative;
}

`.w-video iframe, .w-video object, .w-video embed` {
  border-top-width: medium;
  border-right-width: medium;
  border-bottom-width: medium;
  border-left-width: medium;
  border-top-style: none;
  border-right-style: none;
  border-bottom-style: none;
  border-left-style: none;
  border-top-color: currentcolor;
  border-right-color: currentcolor;
  border-bottom-color: currentcolor;
  border-left-color: currentcolor;
  border-image-source: initial;
  border-image-slice: initial;
  border-image-width: initial;
  border-image-outset: initial;
  border-image-repeat: initial;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
}

`fieldset` {
  border-top-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
  border-left-width: 0px;
  border-top-style: none;
  border-right-style: none;
  border-bottom-style: none;
  border-left-style: none;
  border-top-color: currentcolor;
  border-right-color: currentcolor;
  border-bottom-color: currentcolor;
  border-left-color: currentcolor;
  border-image-source: initial;
  border-image-slice: initial;
  border-image-width: initial;
  border-image-outset: initial;
  border-image-repeat: initial;
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`button, [type="button"], [type="reset"]` {
  cursor: pointer;
  appearance: button;
  border-top-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
  border-left-width: 0px;
  border-top-style: none;
  border-right-style: none;
  border-bottom-style: none;
  border-left-style: none;
  border-top-color: currentcolor;
  border-right-color: currentcolor;
  border-bottom-color: currentcolor;
  border-left-color: currentcolor;
  border-image-source: initial;
  border-image-slice: initial;
  border-image-width: initial;
  border-image-outset: initial;
  border-image-repeat: initial;
}

`.w-form` {
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 15px;
  margin-left: 0px;
}

`.w-form-done` {
  text-align: center;
  background-color: rgb(221, 221, 221);
  padding-top: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  display: none;
}

`.w-form-fail` {
  background-color: rgb(255, 222, 222);
  margin-top: 10px;
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  display: none;
}

`label` {
  margin-bottom: 5px;
  font-weight: bold;
  display: block;
}

`.w-input, .w-select` {
  color: rgb(51, 51, 51);
  vertical-align: middle;
  background-color: rgb(255, 255, 255);
  border-top-width: 1px;
  border-right-width: 1px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-top-style: solid;
  border-right-style: solid;
  border-bottom-style: solid;
  border-left-style: solid;
  border-top-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-image-source: initial;
  border-image-slice: initial;
  border-image-width: initial;
  border-image-outset: initial;
  border-image-repeat: initial;
  width: 100%;
  height: 38px;
  margin-bottom: 10px;
  padding-top: 8px;
  padding-right: 12px;
  padding-bottom: 8px;
  padding-left: 12px;
  font-size: 14px;
  line-height: 1.42857;
  display: block;
}

`.w-input::placeholder, .w-select::placeholder` {
  color: rgb(153, 153, 153);
}

`.w-input:focus, .w-select:focus` {
  border-top-color: rgb(56, 152, 236);
  border-right-color: rgb(56, 152, 236);
  border-bottom-color: rgb(56, 152, 236);
  border-left-color: rgb(56, 152, 236);
  outline-color: initial;
  outline-style: initial;
  outline-width: 0px;
}

`.w-input[disabled], .w-select[disabled], .w-input[readonly], .w-select[readonly], fieldset[disabled] .w-input, fieldset[disabled] .w-select` {
  cursor: not-allowed;
}

`.w-input[disabled]:not(.w-input-disabled), .w-select[disabled]:not(.w-input-disabled), .w-input[readonly], .w-select[readonly], fieldset[disabled]:not(.w-input-disabled) .w-input, fieldset[disabled]:not(.w-input-disabled) .w-select` {
  background-color: rgb(238, 238, 238);
}

`textarea.w-input, textarea.w-select` {
  height: auto;
}

`.w-select` {
  background-color: rgb(243, 243, 243);
}

`.w-select[multiple]` {
  height: auto;
}

`.w-form-label` {
  cursor: pointer;
  margin-bottom: 0px;
  font-weight: normal;
  display: inline-block;
}

`.w-radio` {
  margin-bottom: 5px;
  padding-left: 20px;
  display: block;
}

`.w-radio::before, .w-radio::after` {
  content: " ";
  grid-row-start: 1;
  grid-column-start: 1;
  grid-row-end: 2;
  grid-column-end: 2;
  display: table;
}

`.w-radio::after` {
  clear: both;
}

`.w-radio-input` {
  float: left;
  margin-top: 3px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: -20px;
  line-height: normal;
}

`.w-file-upload` {
  margin-bottom: 10px;
  display: block;
}

`.w-file-upload-input` {
  opacity: 0;
  z-index: -100;
  width: 0.1px;
  height: 0.1px;
  position: absolute;
  overflow-x: hidden;
  overflow-y: hidden;
}

`.w-file-upload-default, .w-file-upload-uploading, .w-file-upload-success` {
  color: rgb(51, 51, 51);
  display: inline-block;
}

`.w-file-upload-error` {
  margin-top: 10px;
  display: block;
}

`.w-file-upload-default.w-hidden, .w-file-upload-uploading.w-hidden, .w-file-upload-error.w-hidden, .w-file-upload-success.w-hidden` {
  display: none;
}

`.w-file-upload-uploading-btn` {
  cursor: pointer;
  background-color: rgb(250, 250, 250);
  border-top-width: 1px;
  border-right-width: 1px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-top-style: solid;
  border-right-style: solid;
  border-bottom-style: solid;
  border-left-style: solid;
  border-top-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-image-source: initial;
  border-image-slice: initial;
  border-image-width: initial;
  border-image-outset: initial;
  border-image-repeat: initial;
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  padding-top: 8px;
  padding-right: 12px;
  padding-bottom: 8px;
  padding-left: 12px;
  font-size: 14px;
  font-weight: normal;
  display: flex;
}

`.w-file-upload-file` {
  background-color: rgb(250, 250, 250);
  border-top-width: 1px;
  border-right-width: 1px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-top-style: solid;
  border-right-style: solid;
  border-bottom-style: solid;
  border-left-style: solid;
  border-top-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-image-source: initial;
  border-image-slice: initial;
  border-image-width: initial;
  border-image-outset: initial;
  border-image-repeat: initial;
  flex-grow: 1;
  justify-content: space-between;
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  padding-top: 8px;
  padding-right: 9px;
  padding-bottom: 8px;
  padding-left: 11px;
  display: flex;
}

`.w-file-upload-file-name` {
  font-size: 14px;
  font-weight: normal;
  display: block;
}

`.w-file-remove-link` {
  cursor: pointer;
  width: auto;
  height: auto;
  margin-top: 3px;
  margin-left: 10px;
  padding-top: 3px;
  padding-right: 3px;
  padding-bottom: 3px;
  padding-left: 3px;
  display: block;
}

`.w-icon-file-upload-remove` {
  margin-top: auto;
  margin-right: auto;
  margin-bottom: auto;
  margin-left: auto;
  font-size: 10px;
}

`.w-file-upload-error-msg` {
  color: rgb(234, 56, 76);
  padding-top: 2px;
  padding-right: 0px;
  padding-bottom: 2px;
  padding-left: 0px;
  display: inline-block;
}

`.w-file-upload-info` {
  padding-top: 0px;
  padding-right: 12px;
  padding-bottom: 0px;
  padding-left: 12px;
  line-height: 38px;
  display: inline-block;
}

`.w-file-upload-label` {
  cursor: pointer;
  background-color: rgb(250, 250, 250);
  border-top-width: 1px;
  border-right-width: 1px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-top-style: solid;
  border-right-style: solid;
  border-bottom-style: solid;
  border-left-style: solid;
  border-top-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-image-source: initial;
  border-image-slice: initial;
  border-image-width: initial;
  border-image-outset: initial;
  border-image-repeat: initial;
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  padding-top: 8px;
  padding-right: 12px;
  padding-bottom: 8px;
  padding-left: 12px;
  font-size: 14px;
  font-weight: normal;
  display: inline-block;
}

`.w-icon-file-upload-icon, .w-icon-file-upload-uploading` {
  width: 20px;
  margin-right: 8px;
  display: inline-block;
}

`.w-icon-file-upload-uploading` {
  height: 20px;
}

`.w-container` {
  max-width: 940px;
  margin-left: auto;
  margin-right: auto;
}

`.w-container::before, .w-container::after` {
  content: " ";
  grid-row-start: 1;
  grid-column-start: 1;
  grid-row-end: 2;
  grid-column-end: 2;
  display: table;
}

`.w-container::after` {
  clear: both;
}

`.w-container .w-row` {
  margin-left: -10px;
  margin-right: -10px;
}

`.w-row::before, .w-row::after` {
  content: " ";
  grid-row-start: 1;
  grid-column-start: 1;
  grid-row-end: 2;
  grid-column-end: 2;
  display: table;
}

`.w-row::after` {
  clear: both;
}

`.w-row .w-row` {
  margin-left: 0px;
  margin-right: 0px;
}

`.w-col` {
  float: left;
  width: 100%;
  min-height: 1px;
  padding-left: 10px;
  padding-right: 10px;
  position: relative;
}

`.w-col .w-col` {
  padding-left: 0px;
  padding-right: 0px;
}

`.w-col-1` {
  width: 8.33333%;
}

`.w-col-2` {
  width: 16.6667%;
}

`.w-col-3` {
  width: 25%;
}

`.w-col-4` {
  width: 33.3333%;
}

`.w-col-5` {
  width: 41.6667%;
}

`.w-col-6` {
  width: 50%;
}

`.w-col-7` {
  width: 58.3333%;
}

`.w-col-8` {
  width: 66.6667%;
}

`.w-col-9` {
  width: 75%;
}

`.w-col-10` {
  width: 83.3333%;
}

`.w-col-11` {
  width: 91.6667%;
}

`.w-col-12` {
  width: 100%;
}

`.w-hidden-main` {
  display: none;
}

`.w-widget` {
  position: relative;
}

`.w-widget-map` {
  width: 100%;
  height: 400px;
}

`.w-widget-map label` {
  width: auto;
  display: inline;
}

`.w-widget-map img` {
  max-width: inherit;
}

`.w-widget-map .gm-style-iw` {
  text-align: center;
}

`.w-widget-map .gm-style-iw > button` {
  display: none;
}

`.w-widget-twitter` {
  overflow-x: hidden;
  overflow-y: hidden;
}

`.w-widget-twitter-count-shim` {
  vertical-align: top;
  text-align: center;
  background-image: initial;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: rgb(255, 255, 255);
  border-top-width: 1px;
  border-right-width: 1px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-top-style: solid;
  border-right-style: solid;
  border-bottom-style: solid;
  border-left-style: solid;
  border-top-color: rgb(117, 134, 150);
  border-right-color: rgb(117, 134, 150);
  border-bottom-color: rgb(117, 134, 150);
  border-left-color: rgb(117, 134, 150);
  border-image-source: initial;
  border-image-slice: initial;
  border-image-width: initial;
  border-image-outset: initial;
  border-image-repeat: initial;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  width: 28px;
  height: 20px;
  display: inline-block;
  position: relative;
}

`.w-widget-twitter-count-shim *` {
  pointer-events: none;
  user-select: none;
}

`.w-widget-twitter-count-shim .w-widget-twitter-count-inner` {
  text-align: center;
  color: rgb(153, 153, 153);
  font-family: serif;
  font-size: 15px;
  line-height: 12px;
  position: relative;
}

`.w-widget-twitter-count-shim .w-widget-twitter-count-clear` {
  display: block;
  position: relative;
}

`.w-widget-twitter-count-shim.w--large` {
  width: 36px;
  height: 28px;
}

`.w-widget-twitter-count-shim.w--large .w-widget-twitter-count-inner` {
  font-size: 18px;
  line-height: 18px;
}

`.w-widget-twitter-count-shim:not(.w--vertical)` {
  margin-left: 5px;
  margin-right: 8px;
}

`.w-widget-twitter-count-shim:not(.w--vertical).w--large` {
  margin-left: 6px;
}

`.w-widget-twitter-count-shim:not(.w--vertical)::before, .w-widget-twitter-count-shim:not(.w--vertical)::after` {
  content: " ";
  pointer-events: none;
  border-top-width: medium;
  border-right-width: medium;
  border-bottom-width: medium;
  border-left-width: medium;
  border-top-style: solid;
  border-right-style: solid;
  border-bottom-style: solid;
  border-left-style: solid;
  border-top-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-image-source: initial;
  border-image-slice: initial;
  border-image-width: initial;
  border-image-outset: initial;
  border-image-repeat: initial;
  width: 0px;
  height: 0px;
  position: absolute;
  top: 50%;
  left: 0px;
}

`.w-widget-twitter-count-shim:not(.w--vertical)::before` {
  border-top-width: 4px;
  border-right-width: 4px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-top-color: rgba(117, 134, 150, 0);
  border-right-color: rgb(93, 108, 123);
  border-bottom-color: rgba(117, 134, 150, 0);
  border-left-color: rgba(117, 134, 150, 0);
  margin-top: -4px;
  margin-left: -9px;
}

`.w-widget-twitter-count-shim:not(.w--vertical).w--large::before` {
  border-top-width: 5px;
  border-right-width: 5px;
  border-bottom-width: 5px;
  border-left-width: 5px;
  margin-top: -5px;
  margin-left: -10px;
}

`.w-widget-twitter-count-shim:not(.w--vertical)::after` {
  border-top-width: 4px;
  border-right-width: 4px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-top-color: rgba(255, 255, 255, 0);
  border-right-color: rgb(255, 255, 255);
  border-bottom-color: rgba(255, 255, 255, 0);
  border-left-color: rgba(255, 255, 255, 0);
  margin-top: -4px;
  margin-left: -8px;
}

`.w-widget-twitter-count-shim:not(.w--vertical).w--large::after` {
  border-top-width: 5px;
  border-right-width: 5px;
  border-bottom-width: 5px;
  border-left-width: 5px;
  margin-top: -5px;
  margin-left: -9px;
}

`.w-widget-twitter-count-shim.w--vertical` {
  width: 61px;
  height: 33px;
  margin-bottom: 8px;
}

`.w-widget-twitter-count-shim.w--vertical::before, .w-widget-twitter-count-shim.w--vertical::after` {
  content: " ";
  pointer-events: none;
  border-top-width: medium;
  border-right-width: medium;
  border-bottom-width: medium;
  border-left-width: medium;
  border-top-style: solid;
  border-right-style: solid;
  border-bottom-style: solid;
  border-left-style: solid;
  border-top-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-image-source: initial;
  border-image-slice: initial;
  border-image-width: initial;
  border-image-outset: initial;
  border-image-repeat: initial;
  width: 0px;
  height: 0px;
  position: absolute;
  top: 100%;
  left: 50%;
}

`.w-widget-twitter-count-shim.w--vertical::before` {
  border-top-width: 5px;
  border-right-width: 5px;
  border-bottom-width: 5px;
  border-left-width: 5px;
  border-top-color: rgb(93, 108, 123);
  border-right-color: rgba(117, 134, 150, 0);
  border-bottom-color: rgba(117, 134, 150, 0);
  border-left-color: rgba(117, 134, 150, 0);
  margin-left: -5px;
}

`.w-widget-twitter-count-shim.w--vertical::after` {
  border-top-width: 4px;
  border-right-width: 4px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-top-color: rgb(255, 255, 255);
  border-right-color: rgba(255, 255, 255, 0);
  border-bottom-color: rgba(255, 255, 255, 0);
  border-left-color: rgba(255, 255, 255, 0);
  margin-left: -4px;
}

`.w-widget-twitter-count-shim.w--vertical .w-widget-twitter-count-inner` {
  font-size: 18px;
  line-height: 22px;
}

`.w-widget-twitter-count-shim.w--vertical.w--large` {
  width: 76px;
}

`.w-background-video` {
  color: rgb(255, 255, 255);
  height: 500px;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
}

`.w-background-video > video` {
  object-fit: cover;
  z-index: -100;
  background-position-x: 50%;
  background-position-y: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  margin-top: auto;
  margin-right: auto;
  margin-bottom: auto;
  margin-left: auto;
  position: absolute;
  top: -100%;
  right: -100%;
  bottom: -100%;
  left: -100%;
}

`.w-background-video > video::-webkit-media-controls-start-playback-button` {
  appearance: none;
  display: none;
}

`.w-background-video--control` {
  background-color: rgba(0, 0, 0, 0);
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  position: absolute;
  bottom: 1em;
  right: 1em;
}

`.w-background-video--control > [hidden]` {
  display: none;
}

`.w-slider` {
  text-align: center;
  clear: both;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background-image: initial;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: rgb(221, 221, 221);
  height: 300px;
  position: relative;
}

`.w-slider-mask` {
  z-index: 1;
  white-space-collapse: collapse;
  text-wrap-mode: nowrap;
  height: 100%;
  display: block;
  position: relative;
  left: 0px;
  right: 0px;
  overflow-x: hidden;
  overflow-y: hidden;
}

`.w-slide` {
  vertical-align: top;
  white-space-collapse: collapse;
  text-wrap-mode: wrap;
  text-align: left;
  width: 100%;
  height: 100%;
  display: inline-block;
  position: relative;
}

`.w-slider-nav` {
  z-index: 2;
  text-align: center;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  height: 40px;
  margin-top: auto;
  margin-right: auto;
  margin-bottom: auto;
  margin-left: auto;
  padding-top: 10px;
  position: absolute;
  top: auto;
  right: 0px;
  bottom: 0px;
  left: 0px;
}

`.w-slider-nav.w-round > div` {
  border-top-left-radius: 100%;
  border-top-right-radius: 100%;
  border-bottom-right-radius: 100%;
  border-bottom-left-radius: 100%;
}

`.w-slider-nav.w-num > div` {
  width: auto;
  height: auto;
  font-size: inherit;
  line-height: inherit;
  padding-top: 0.2em;
  padding-right: 0.5em;
  padding-bottom: 0.2em;
  padding-left: 0.5em;
}

`.w-slider-nav.w-shadow > div` {
  box-shadow: rgba(51, 51, 51, 0.4) 0px 0px 3px;
}

`.w-slider-nav-invert` {
  color: rgb(255, 255, 255);
}

`.w-slider-nav-invert > div` {
  background-color: rgba(34, 34, 34, 0.4);
}

`.w-slider-nav-invert > div.w-active` {
  background-color: rgb(34, 34, 34);
}

`.w-slider-dot` {
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.4);
  width: 1em;
  height: 1em;
  margin-top: 0px;
  margin-right: 3px;
  margin-bottom: 0.5em;
  margin-left: 3px;
  transition-behavior: normal, normal;
  transition-duration: 0.1s, 0.1s;
  transition-timing-function: ease, ease;
  transition-delay: 0s, 0s;
  transition-property: background-color, color;
  display: inline-block;
  position: relative;
}

`.w-slider-dot.w-active` {
  background-color: rgb(255, 255, 255);
}

`.w-slider-dot:focus` {
  outline-color: initial;
  outline-style: none;
  outline-width: initial;
  box-shadow: rgb(255, 255, 255) 0px 0px 0px 2px;
}

`.w-slider-dot:focus.w-active` {
  box-shadow: none;
}

`.w-slider-arrow-left, .w-slider-arrow-right` {
  cursor: pointer;
  color: rgb(255, 255, 255);
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  user-select: none;
  width: 80px;
  margin-top: auto;
  margin-right: auto;
  margin-bottom: auto;
  margin-left: auto;
  font-size: 40px;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  overflow-x: hidden;
  overflow-y: hidden;
}

`.w-slider-arrow-left [class^="w-icon-"], .w-slider-arrow-right [class^="w-icon-"], .w-slider-arrow-left [class*=" w-icon-"], .w-slider-arrow-right [class*=" w-icon-"]` {
  position: absolute;
}

`.w-slider-arrow-left:focus, .w-slider-arrow-right:focus` {
  outline-color: initial;
  outline-style: initial;
  outline-width: 0px;
}

`.w-slider-arrow-left` {
  z-index: 3;
  right: auto;
}

`.w-slider-arrow-right` {
  z-index: 4;
  left: auto;
}

`.w-icon-slider-left, .w-icon-slider-right` {
  width: 1em;
  height: 1em;
  margin-top: auto;
  margin-right: auto;
  margin-bottom: auto;
  margin-left: auto;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
}

`.w-slider-aria-label` {
  clip: rect(0px, 0px, 0px, 0px);
  border-top-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
  border-left-width: 0px;
  border-top-style: none;
  border-right-style: none;
  border-bottom-style: none;
  border-left-style: none;
  border-top-color: currentcolor;
  border-right-color: currentcolor;
  border-bottom-color: currentcolor;
  border-left-color: currentcolor;
  border-image-source: initial;
  border-image-slice: initial;
  border-image-width: initial;
  border-image-outset: initial;
  border-image-repeat: initial;
  width: 1px;
  height: 1px;
  margin-top: -1px;
  margin-right: -1px;
  margin-bottom: -1px;
  margin-left: -1px;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  position: absolute;
  overflow-x: hidden;
  overflow-y: hidden;
}

`.w-slider-force-show` {
  display: block;
}

`.w-dropdown` {
  text-align: left;
  z-index: 900;
  margin-left: auto;
  margin-right: auto;
  display: inline-block;
  position: relative;
}

`.w-dropdown-btn, .w-dropdown-toggle, .w-dropdown-link` {
  vertical-align: top;
  color: rgb(34, 34, 34);
  text-align: left;
  white-space-collapse: collapse;
  text-wrap-mode: nowrap;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  text-decoration-line: none;
  text-decoration-thickness: initial;
  text-decoration-style: initial;
  text-decoration-color: initial;
  position: relative;
}

`.w-dropdown-toggle` {
  user-select: none;
  cursor: pointer;
  padding-right: 40px;
  display: inline-block;
}

`.w-dropdown-toggle:focus` {
  outline-color: initial;
  outline-style: initial;
  outline-width: 0px;
}

`.w-icon-dropdown-toggle` {
  width: 1em;
  height: 1em;
  margin-top: auto;
  margin-right: 20px;
  margin-bottom: auto;
  margin-left: auto;
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 0px;
}

`.w-dropdown-list` {
  background-image: initial;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: rgb(221, 221, 221);
  min-width: 100%;
  display: none;
  position: absolute;
}

`.w-dropdown-list.w--open` {
  display: block;
}

`.w-dropdown-link` {
  color: rgb(34, 34, 34);
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-left: 20px;
  display: block;
}

`.w-dropdown-link.w--current` {
  color: rgb(0, 130, 243);
}

`.w-dropdown-link:focus` {
  outline-color: initial;
  outline-style: initial;
  outline-width: 0px;
}

`.w-lightbox-backdrop` {
  cursor: auto;
  letter-spacing: normal;
  text-indent: 0px;
  text-shadow: none;
  text-transform: none;
  visibility: visible;
  white-space-collapse: collapse;
  text-wrap-mode: wrap;
  word-break: normal;
  word-spacing: normal;
  overflow-wrap: normal;
  color: rgb(255, 255, 255);
  text-align: center;
  z-index: 2000;
  opacity: 0;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  background-image: initial;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: rgba(0, 0, 0, 0.9);
  outline-color: initial;
  outline-style: initial;
  outline-width: 0px;
  font-family: "Helvetica Neue", Helvetica, Ubuntu, "Segoe UI", Verdana, sans-serif;
  font-size: 17px;
  font-style: normal;
  font-weight: 300;
  line-height: 1.2;
  list-style-position: initial;
  list-style-image: initial;
  list-style-type: disc;
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  transform: translate(0px);
}

`.w-lightbox-backdrop, .w-lightbox-container` {
  height: 100%;
  overflow-x: auto;
  overflow-y: auto;
}

`.w-lightbox-content` {
  height: 100vh;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
}

`.w-lightbox-view` {
  opacity: 0;
  width: 100vw;
  height: 100vh;
  position: absolute;
}

`.w-lightbox-view::before` {
  content: "";
  height: 100vh;
}

`.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view::before` {
  height: 86vh;
}

`.w-lightbox-frame, .w-lightbox-view::before` {
  vertical-align: middle;
  display: inline-block;
}

`.w-lightbox-figure` {
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  position: relative;
}

`.w-lightbox-group .w-lightbox-figure` {
  cursor: pointer;
}

`.w-lightbox-img` {
  width: auto;
  max-width: none;
  height: auto;
}

`.w-lightbox-image` {
  float: none;
  max-width: 100vw;
  max-height: 100vh;
  display: block;
}

`.w-lightbox-group .w-lightbox-image` {
  max-height: 86vh;
}

`.w-lightbox-caption` {
  text-align: left;
  text-overflow: ellipsis;
  white-space-collapse: collapse;
  text-wrap-mode: nowrap;
  background-image: initial;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: rgba(0, 0, 0, 0.4);
  padding-top: 0.5em;
  padding-right: 1em;
  padding-bottom: 0.5em;
  padding-left: 1em;
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  overflow-x: hidden;
  overflow-y: hidden;
}

`.w-lightbox-embed` {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
}

`.w-lightbox-control` {
  cursor: pointer;
  background-position-x: center;
  background-position-y: center;
  background-repeat: no-repeat;
  background-size: 24px;
  width: 4em;
  transition-behavior: normal;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  transition-delay: 0s;
  transition-property: all;
  position: absolute;
  top: 0px;
}

`.w-lightbox-left` {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0yMCAwIDI0IDQwIiB3aWR0aD0iMjQiIGhlaWdodD0iNDAiPjxnIHRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHBhdGggZD0ibTAgMGg1djIzaDIzdjVoLTI4eiIgb3BhY2l0eT0iLjQiLz48cGF0aCBkPSJtMSAxaDN2MjNoMjN2M2gtMjZ6IiBmaWxsPSIjZmZmIi8+PC9nPjwvc3ZnPg==");
  display: none;
  bottom: 0px;
  left: 0px;
}

`.w-lightbox-right` {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii00IDAgMjQgNDAiIHdpZHRoPSIyNCIgaGVpZ2h0PSI0MCI+PGcgdHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJtMC0waDI4djI4aC01di0yM2gtMjN6IiBvcGFjaXR5PSIuNCIvPjxwYXRoIGQ9Im0xIDFoMjZ2MjZoLTN2LTIzaC0yM3oiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+");
  display: none;
  bottom: 0px;
  right: 0px;
}

`.w-lightbox-close` {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii00IDAgMTggMTciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNyI+PGcgdHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJtMCAwaDd2LTdoNXY3aDd2NWgtN3Y3aC01di03aC03eiIgb3BhY2l0eT0iLjQiLz48cGF0aCBkPSJtMSAxaDd2LTdoM3Y3aDd2M2gtN3Y3aC0zdi03aC03eiIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4=");
  background-size: 18px;
  height: 2.6em;
  right: 0px;
}

`.w-lightbox-strip` {
  white-space-collapse: collapse;
  text-wrap-mode: nowrap;
  padding-top: 0px;
  padding-right: 1vh;
  padding-bottom: 0px;
  padding-left: 1vh;
  line-height: 0;
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  overflow-x: auto;
  overflow-y: hidden;
}

`.w-lightbox-item` {
  box-sizing: content-box;
  cursor: pointer;
  width: 10vh;
  padding-top: 2vh;
  padding-right: 1vh;
  padding-bottom: 2vh;
  padding-left: 1vh;
  display: inline-block;
  transform: translate3d(0px, 0px, 0px);
}

`.w-lightbox-active` {
  opacity: 0.3;
}

`.w-lightbox-thumbnail` {
  background-image: initial;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: rgb(34, 34, 34);
  height: 10vh;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
}

`.w-lightbox-thumbnail-image` {
  position: absolute;
  top: 0px;
  left: 0px;
}

`.w-lightbox-thumbnail .w-lightbox-tall` {
  width: 100%;
  top: 50%;
  transform: translate(0px, -50%);
}

`.w-lightbox-thumbnail .w-lightbox-wide` {
  height: 100%;
  left: 50%;
  transform: translate(-50%);
}

`.w-lightbox-spinner` {
  box-sizing: border-box;
  border-top-width: 5px;
  border-right-width: 5px;
  border-bottom-width: 5px;
  border-left-width: 5px;
  border-top-style: solid;
  border-right-style: solid;
  border-bottom-style: solid;
  border-left-style: solid;
  border-top-color: rgba(0, 0, 0, 0.4);
  border-right-color: rgba(0, 0, 0, 0.4);
  border-bottom-color: rgba(0, 0, 0, 0.4);
  border-left-color: rgba(0, 0, 0, 0.4);
  border-image-source: initial;
  border-image-slice: initial;
  border-image-width: initial;
  border-image-outset: initial;
  border-image-repeat: initial;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
  border-bottom-left-radius: 50%;
  width: 40px;
  height: 40px;
  margin-top: -20px;
  margin-left: -20px;
  animation-duration: 0.8s;
  animation-timing-function: linear;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: spin;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
  position: absolute;
  top: 50%;
  left: 50%;
}

`.w-lightbox-spinner::after` {
  content: "";
  border-top-width: 3px;
  border-right-width: 3px;
  border-bottom-width: 3px;
  border-left-width: 3px;
  border-top-style: solid;
  border-right-style: solid;
  border-bottom-style: solid;
  border-left-style: solid;
  border-top-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-image-source: initial;
  border-image-slice: initial;
  border-image-width: initial;
  border-image-outset: initial;
  border-image-repeat: initial;
  border-bottom-color: rgb(255, 255, 255);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
  border-bottom-left-radius: 50%;
  position: absolute;
  top: -4px;
  right: -4px;
  bottom: -4px;
  left: -4px;
}

`.w-lightbox-hide` {
  display: none;
}

`.w-lightbox-noscroll` {
  overflow-x: hidden;
  overflow-y: hidden;
}

`.w-lightbox-inactive, .w-lightbox-inactive:hover` {
  opacity: 0;
}

`.w-richtext::before, .w-richtext::after` {
  content: " ";
  grid-row-start: 1;
  grid-column-start: 1;
  grid-row-end: 2;
  grid-column-end: 2;
  display: table;
}

`.w-richtext::after` {
  clear: both;
}

`.w-richtext[contenteditable="true"]::before, .w-richtext[contenteditable="true"]::after` {
  white-space-collapse: initial;
  text-wrap-mode: initial;
}

`.w-richtext ol, .w-richtext ul` {
  overflow-x: hidden;
  overflow-y: hidden;
}

`.w-richtext .w-richtext-figure-selected.w-richtext-figure-type-video div::after, .w-richtext .w-richtext-figure-selected[data-rt-type="video"] div::after, .w-richtext .w-richtext-figure-selected.w-richtext-figure-type-image div, .w-richtext .w-richtext-figure-selected[data-rt-type="image"] div` {
  outline-color: rgb(40, 149, 247);
  outline-style: solid;
  outline-width: 2px;
}

`.w-richtext figure.w-richtext-figure-type-video > div::after, .w-richtext figure[data-rt-type="video"] > div::after` {
  content: "";
  display: none;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
}

`.w-richtext figure` {
  max-width: 60%;
  position: relative;
}

`.w-richtext figure > div::before` {
  cursor: default;
}

`.w-richtext figure img` {
  width: 100%;
}

`.w-richtext figure figcaption.w-richtext-figcaption-placeholder` {
  opacity: 0.6;
}

`.w-richtext figure div` {
  color: rgba(0, 0, 0, 0);
  font-size: 0px;
}

`.w-richtext figure.w-richtext-figure-type-image, .w-richtext figure[data-rt-type="image"]` {
  display: table;
}

`.w-richtext figure.w-richtext-figure-type-image > div, .w-richtext figure[data-rt-type="image"] > div` {
  display: inline-block;
}

`.w-richtext figure.w-richtext-figure-type-image > figcaption, .w-richtext figure[data-rt-type="image"] > figcaption` {
  caption-side: bottom;
  display: table-caption;
}

`.w-richtext figure.w-richtext-figure-type-video, .w-richtext figure[data-rt-type="video"]` {
  width: 60%;
  height: 0px;
}

`.w-richtext figure.w-richtext-figure-type-video iframe, .w-richtext figure[data-rt-type="video"] iframe` {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
}

`.w-richtext figure.w-richtext-figure-type-video > div, .w-richtext figure[data-rt-type="video"] > div` {
  width: 100%;
}

`.w-richtext figure.w-richtext-align-center` {
  clear: both;
  margin-left: auto;
  margin-right: auto;
}

`.w-richtext figure.w-richtext-align-center.w-richtext-figure-type-image > div, .w-richtext figure.w-richtext-align-center[data-rt-type="image"] > div` {
  max-width: 100%;
}

`.w-richtext figure.w-richtext-align-normal` {
  clear: both;
}

`.w-richtext figure.w-richtext-align-fullwidth` {
  text-align: center;
  clear: both;
  width: 100%;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: block;
}

`.w-richtext figure.w-richtext-align-fullwidth > div` {
  padding-bottom: inherit;
  display: inline-block;
}

`.w-richtext figure.w-richtext-align-fullwidth > figcaption` {
  display: block;
}

`.w-richtext figure.w-richtext-align-floatleft` {
  float: left;
  clear: none;
  margin-right: 15px;
}

`.w-richtext figure.w-richtext-align-floatright` {
  float: right;
  clear: none;
  margin-left: 15px;
}

`.w-nav` {
  z-index: 1000;
  background-image: initial;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: rgb(221, 221, 221);
  position: relative;
}

`.w-nav::before, .w-nav::after` {
  content: " ";
  grid-row-start: 1;
  grid-column-start: 1;
  grid-row-end: 2;
  grid-column-end: 2;
  display: table;
}

`.w-nav::after` {
  clear: both;
}

`.w-nav-brand` {
  float: left;
  color: rgb(51, 51, 51);
  text-decoration-line: none;
  text-decoration-thickness: initial;
  text-decoration-style: initial;
  text-decoration-color: initial;
  position: relative;
}

`.w-nav-link` {
  vertical-align: top;
  color: rgb(34, 34, 34);
  text-align: left;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  text-decoration-line: none;
  text-decoration-thickness: initial;
  text-decoration-style: initial;
  text-decoration-color: initial;
  display: inline-block;
  position: relative;
}

`.w-nav-link.w--current` {
  color: rgb(0, 130, 243);
}

`.w-nav-menu` {
  float: right;
  position: relative;
}

`[data-nav-menu-open]` {
  text-align: center;
  background-image: initial;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: rgb(200, 200, 200);
  min-width: 200px;
  position: absolute;
  top: 100%;
  left: 0px;
  right: 0px;
  overflow-x: visible;
  overflow-y: visible;
  display: block;
}

`.w--nav-link-open` {
  display: block;
  position: relative;
}

`.w-nav-overlay` {
  width: 100%;
  display: none;
  position: absolute;
  top: 100%;
  left: 0px;
  right: 0px;
  overflow-x: hidden;
  overflow-y: hidden;
}

`.w-nav-overlay [data-nav-menu-open]` {
  top: 0px;
}

`.w-nav[data-animation="over-left"] .w-nav-overlay` {
  width: auto;
}

`.w-nav[data-animation="over-left"] .w-nav-overlay, .w-nav[data-animation="over-left"] [data-nav-menu-open]` {
  z-index: 1;
  top: 0px;
  right: auto;
}

`.w-nav[data-animation="over-right"] .w-nav-overlay` {
  width: auto;
}

`.w-nav[data-animation="over-right"] .w-nav-overlay, .w-nav[data-animation="over-right"] [data-nav-menu-open]` {
  z-index: 1;
  top: 0px;
  left: auto;
}

`.w-nav-button` {
  float: right;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  user-select: none;
  padding-top: 18px;
  padding-right: 18px;
  padding-bottom: 18px;
  padding-left: 18px;
  font-size: 24px;
  display: none;
  position: relative;
}

`.w-nav-button:focus` {
  outline-color: initial;
  outline-style: initial;
  outline-width: 0px;
}

`.w-nav-button.w--open` {
  color: rgb(255, 255, 255);
  background-color: rgb(200, 200, 200);
}

`.w-nav[data-collapse="all"] .w-nav-menu` {
  display: none;
}

`.w-nav[data-collapse="all"] .w-nav-button, .w--nav-dropdown-open, .w--nav-dropdown-toggle-open` {
  display: block;
}

`.w--nav-dropdown-list-open` {
  position: static;
}

`.w-tabs` {
  position: relative;
}

`.w-tabs::before, .w-tabs::after` {
  content: " ";
  grid-row-start: 1;
  grid-column-start: 1;
  grid-row-end: 2;
  grid-column-end: 2;
  display: table;
}

`.w-tabs::after` {
  clear: both;
}

`.w-tab-menu` {
  position: relative;
}

`.w-tab-link` {
  vertical-align: top;
  text-align: left;
  cursor: pointer;
  color: rgb(34, 34, 34);
  background-color: rgb(221, 221, 221);
  padding-top: 9px;
  padding-right: 30px;
  padding-bottom: 9px;
  padding-left: 30px;
  text-decoration-line: none;
  text-decoration-thickness: initial;
  text-decoration-style: initial;
  text-decoration-color: initial;
  display: inline-block;
  position: relative;
}

`.w-tab-link.w--current` {
  background-color: rgb(200, 200, 200);
}

`.w-tab-link:focus` {
  outline-color: initial;
  outline-style: initial;
  outline-width: 0px;
}

`.w-tab-content` {
  display: block;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
}

`.w-tab-pane` {
  display: none;
  position: relative;
}

`.w--tab-active` {
  display: block;
}

`.w-ix-emptyfix::after` {
  content: "";
}

`.w-dyn-empty` {
  background-color: rgb(221, 221, 221);
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
}

`.w-dyn-hide, .w-dyn-bind-empty, .w-condition-invisible` {
  display: none;
}

`.wf-layout-layout` {
  display: grid;
}

`.w-layout-grid` {
  row-gap: 16px;
  column-gap: 16px;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 1fr;
  display: grid;
}

`:root` {
  --color--dark-green: #282c20;
  --color--white: #f4f4ed;
  --padding--container: 1.25rem;
  --gap: 1.25rem;
  --on-t-nav-spacer: 5.375rem;
  --color--black: #111112;
  --text--h1: 4rem;
  --padding--xlarge: 5rem;
  --padding--med: 3rem;
  --gap--med<deleted|variable-196f1660-85b7-2eda-5ec8-e43ca0f5032d>: 2rem;
  --color--lime-off: #b2c73a;
  --color--lime: #d2ff00;
  --color--green-off-white-1: #dde1d2;
  --color--lime-zero: #d2ff0000;
  --text--btn-primary: 1rem;
  --text--btn-nav: 1.25rem;
  --text--btn-footer: 1.875rem;
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
  --poduim-offset: -17.5rem;
  --text--reg: 1.6rem;
  --text--med: 2.76rem;
  --text--btn-tertiary: .875px;
  --text--eyebrow: .578125rem;
  --color--cream: #efefe5;
  --color--grey-2: #c8cbbd;
  --color--orange: #ff6b00;
}

`body` {
  background-color: var(--color--dark-green);
  color: var(--color--white);
  font-family: "Mona Sans Variable", Arial, sans-serif;
}

`h1` {
  text-transform: uppercase;
  margin-top: 0px;
  margin-bottom: 0px;
}

`h2` {
  font-variation-settings: "wght" 750, "wdth" 93;
  text-transform: uppercase;
  margin-top: 0px;
  margin-bottom: 0px;
}

`h3, h4, h5, h6` {
  text-transform: uppercase;
  margin-top: 0px;
  margin-bottom: 0px;
}

`p` {
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.25;
}

`a` {
  text-decoration-line: none;
  text-decoration-thickness: initial;
  text-decoration-style: initial;
  text-decoration-color: initial;
}

`ul` {
  margin-top: 0px;
  margin-bottom: 10px;
  padding-left: 40px;
}

`li` {
  font-size: 1em;
  list-style-type: disc;
}

`label` {
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 0.4rem;
  display: block;
}

`blockquote` {
  border-left-width: 0.3em;
  border-left-style: solid;
  border-left-color: rgb(226, 226, 226);
  margin-bottom: 1em;
  padding-top: 1em;
  padding-right: 2em;
  padding-bottom: 1em;
  padding-left: 1.7em;
  font-size: 1.2em;
  line-height: 1.6;
}

`.c` {
  width: 100%;
  padding-right: var(--padding--container);
  padding-left: var(--padding--container);
  max-width: var(--fluid-container);
  margin-left: auto;
  margin-right: auto;
}

`.c.is-guides` {
  outline-offset: 0px;
  outline-color: rgb(255, 236, 181);
  outline-style: solid;
  outline-width: 3px;
  height: 100%;
}

`.c.is-taxi-test` {
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  display: flex;
}

`.c.home-hero` {
  justify-content: center;
  align-items: center;
  max-width: none;
  min-height: 100vh;
  display: flex;
  position: relative;
}

`.c.is-marquee` {
  min-height: calc(var(--vh, 1vh) * 100);
  justify-content: center;
  align-items: center;
  max-width: none;
  padding-left: 0px;
  padding-right: 0px;
  display: flex;
}

`.c.is-horiz-scroll` {
  max-width: none;
  padding-left: 0px;
  padding-right: 0px;
  position: sticky;
  top: 0px;
}

`.c.is-otot-home` {
  max-width: none;
  position: relative;
}

`.c.home-helmets` {
  padding-bottom: var(--gap);
  padding-top: calc(var(--gap) * 2);
  position: relative;
}

`.c.is-callout` {
  justify-content: center;
  align-items: center;
  padding-top: 12rem;
  padding-bottom: 8.75rem;
  display: flex;
}

`.c.is-lando-exe` {
  z-index: 1;
  padding-left: 11rem;
  padding-right: 11rem;
  position: relative;
}

`.c.is-footer` {
  z-index: 5;
  padding-top: var(--gap);
  padding-bottom: var(--gap);
  position: relative;
}

`.c.is-home-collabs` {
  z-index: 5;
  position: relative;
}

`.c.is-on-track-home` {
  padding-top: var(--on-t-nav-spacer);
  height: min(calc(var(--vh, 1vh) * 100), max(1200px));
  flex-direction: column;
  flex-wrap: nowrap;
  display: flex;
  position: relative;
}

`.c.is-f1-highlight-outer` {
  padding-left: 0px;
  padding-right: 0px;
}

`.c.is-on-track-countdown` {
  padding-bottom: 26rem;
}

`.c.is-camp-hero` {
  padding-bottom: var(--gap);
}

`.c.is-off-t-hero-scroll-media` {
  padding-top: var(--gap);
  padding-bottom: var(--gap);
}

`.c.part-i-video` {
  padding-left: 0px;
  padding-right: 0px;
  position: relative;
}

`.c.is-part-i-next` {
  z-index: 5;
  position: relative;
}

`.styleguide__item` {
  column-gap: var(--gap);
  row-gap: var(--gap);
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  display: flex;
}

`.rich-text p` {
  margin-top: 0px;
  margin-bottom: 1.4rem;
}

`.rich-text h1` {
  margin-top: 0px;
  margin-bottom: 0.4rem;
  font-family: Brier, Arial, sans-serif;
}

`.rich-text h2` {
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-family: Brier, Arial, sans-serif;
}

`.rich-text h3, .rich-text h4, .rich-text h5, .rich-text h6` {
  margin-top: 2em;
  margin-bottom: 1rem;
  font-family: Brier, Arial, sans-serif;
}

`.rich-text a` {
  font-weight: 600;
  text-decoration-line: underline;
  text-decoration-thickness: initial;
  text-decoration-style: initial;
  text-decoration-color: initial;
}

`.rich-text blockquote` {
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding-top: 1rem;
  padding-right: 1.5rem;
  padding-bottom: 1rem;
  padding-left: 1.5rem;
}

`.rich-text ul` {
  padding-left: 2em;
}

`.s.home-marquee` {
  user-select: none;
  width: 100%;
  position: absolute;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
}

`.s.home-hero` {
  z-index: 10;
  position: relative;
}

`.s.is-horizontal-track` {
  position: relative;
}

`.s.is-otot-home` {
  color: var(--color--dark-green);
}

`.s.is-otot-end` {
  z-index: 10;
  position: relative;
}

`.s.home-helmets` {
  z-index: 6;
  position: relative;
}

`.s.is-lando-exe` {
  color: var(--color--dark-green);
  position: relative;
}

`.s.is-callout-socials` {
  z-index: 5;
  color: var(--color--black);
  position: relative;
}

`.s.is-callout-socials:where(.w-variant-e346e922-20ab-515b-71b3-89708ab15e58)` {
  color: var(--color--white);
  background-color: var(--color--black);
}

`.s.is-footer` {
  z-index: 0;
  color: var(--color--dark-green);
  position: relative;
}

`.s.is-home-collabs, .s.is-part-i-next` {
  color: var(--color--dark-green);
  position: relative;
}

`.s.is-on-t-calendar` {
  z-index: 15;
  position: relative;
}

`.page-w` {
  width: 100%;
  position: relative;
  overflow-x: clip;
  overflow-y: clip;
}

`.page-w.style-guide` {
  color: var(--color--black);
}

`.h1` {
  font-size: var(--text--h1);
  line-height: 1.2;
}

`.text-title-lg-mona` {
  font-variation-settings: "wght" 750, "wdth" 93;
  letter-spacing: -0.125rem;
  text-transform: uppercase;
  font-size: 4.5rem;
  line-height: 0.886;
}

`.text-title-lg-mona.text-vertical` {
  writing-mode: vertical-lr;
  transform: rotate(180deg);
}

`.text-title-lg-mona.text-vertical.z-10` {
  z-index: 10;
  position: relative;
}

`.text-title-lg-mona.on-t-career.is-mw-25` {
  max-width: 25rem;
}

`.text-title-lg-mona.split-flex` {
  justify-content: flex-start;
  align-items: flex-start;
}

`.text-title-lg-mona.split-flex.is-center` {
  justify-content: flex-start;
  align-items: center;
}

`.text-title-lg-mona.split-flex.is-wrap` {
  flex-direction: row;
  flex-wrap: wrap;
}

`.text-cta-short-intro` {
  letter-spacing: 0.040625rem;
  font-size: 2rem;
  line-height: 1.04;
}

`.text-cta-short-intro.font-brier` {
  letter-spacing: 0.05rem;
}

`.style__item--block` {
  padding-top: var(--padding--xlarge);
  padding-bottom: var(--padding--med);
  row-gap: var(--gap);
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

`.guides` {
  z-index: 10;
  justify-content: flex-start;
  align-items: stretch;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0%;
  right: 0%;
  bottom: auto;
  left: 0%;
}

`.grid-main` {
  column-gap: var(--gap);
  grid-template-rows: auto;
  grid-template-columns: 23.55% 23.55% 23.55% 23.55%;
  grid-auto-columns: 1fr;
  width: 100%;
  display: grid;
}

`.grid-main.is-overlay` {
  height: 100%;
}

`.grid-block` {
  background-color: var(--color--lime-off);
  width: 100%;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`.css-breakpoints` {
  width: 0px;
  height: 0px;
  display: none;
  position: fixed;
  top: 0%;
  right: 0%;
  bottom: auto;
  left: 0%;
  overflow-x: hidden;
  overflow-y: hidden;
}

`.text-eyebrow` {
  font-variation-settings: "wght" 700, "wdth" 100;
  letter-spacing: 0px;
  text-transform: uppercase;
  font-family: "Mona Sans Variable", Arial, sans-serif;
  font-size: 0.625rem;
  font-weight: 400;
  line-height: 1;
}

`.text-eyebrow.large` {
  font-variation-settings: "wght" 812, "wdth" 81.3;
  letter-spacing: -0.01rem;
  font-size: 1.125rem;
}

`.text-eyebrow.auto-left` {
  margin-left: auto;
}

`.text-eyebrow.flex` {
  column-gap: calc(var(--gap) * .1);
  row-gap: calc(var(--gap) * .1);
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

`.text-eyebrow.mob-only` {
  display: none;
}

`.text-eyebrow.dt-only` {
  display: block;
}

`.taxi-w.style-guide` {
  background-color: var(--color--white);
  color: var(--color--black);
}

`.taxi-w.on-track` {
  background-color: var(--color--black);
  color: var(--color--white);
}

`.taxi-w.off-track` {
  background-color: var(--color--white);
  color: var(--color--dark-green);
}

`.taxi-w.legal` {
  background-color: var(--color--dark-green);
  color: var(--color--white);
}

`.taxi-w.calendar` {
  background-color: var(--color--black);
  color: var(--color--white);
}

`.taxi-w.not-found` {
  flex-direction: column;
  flex-wrap: nowrap;
  display: flex;
}

`.css-editmode, .css-utils` {
  width: 0px;
  height: 0px;
  display: none;
  position: fixed;
  top: 0%;
  right: 0%;
  bottom: auto;
  left: 0%;
  overflow-x: hidden;
  overflow-y: hidden;
}

`.utility__page--w` {
  width: 100vw;
  max-height: 100%;
  max-width: var(--fluid-container);
  justify-content: center;
  align-items: center;
  height: 100svh;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  position: relative;
}

`.utility__content--w` {
  width: 62.5rem;
  color: var(--color--lime);
  text-align: center;
  text-transform: uppercase;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  display: flex;
  position: relative;
}

`.utility__content--w.pass` {
  width: auto;
}

`.utility__form--w` {
  column-gap: var(--gap);
  row-gap: var(--gap);
  flex-direction: column;
  align-items: stretch;
  display: flex;
}

`.nav` {
  z-index: 120;
  pointer-events: none;
  justify-content: space-between;
  align-items: center;
  display: flex;
  position: fixed;
  top: 0%;
  right: 0%;
  bottom: auto;
  left: 0%;
}

`.scroll-indicator` {
  z-index: 10;
  mix-blend-mode: difference;
  visibility: hidden;
  background-color: rgba(255, 255, 255, 0);
  border-top-left-radius: 1em;
  border-top-right-radius: 1em;
  border-bottom-right-radius: 1em;
  border-bottom-left-radius: 1em;
  width: 0.4em;
  height: 80vh;
  position: fixed;
  top: 10vh;
  right: 0px;
  bottom: 0%;
  left: auto;
}

`.scroll-indicator-bar` {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  border-bottom-right-radius: inherit;
  border-bottom-left-radius: inherit;
  background-color: rgba(255, 255, 255, 0.75);
  width: 100%;
  height: 30%;
  transition-property: height;
  transition-duration: 0.2s;
  transition-timing-function: ease;
  position: absolute;
  top: 0%;
  right: 0%;
  bottom: auto;
  left: 0%;
}

`.css-root, .css-lenis` {
  width: 0px;
  height: 0px;
  display: none;
  position: fixed;
  top: 0%;
  right: 0%;
  bottom: auto;
  left: 0%;
  overflow-x: hidden;
  overflow-y: hidden;
}

`.style-line` {
  background-color: var(--color--green-off-white-1);
  width: 100%;
  height: 1px;
}

`.styleguide-heading-layout` {
  column-gap: 1em;
  row-gap: 1em;
  display: flex;
}

`.css-split-type` {
  width: 0px;
  height: 0px;
  display: none;
  position: fixed;
  top: 0%;
  right: 0%;
  bottom: auto;
  left: 0%;
  overflow-x: hidden;
  overflow-y: hidden;
}

`.font-brier` {
  font-family: Brier, Arial, sans-serif;
}

`.btn-layout` {
  column-gap: var(--gap);
  row-gap: var(--gap);
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

`.btn-layout.is-nav` {
  pointer-events: auto;
  perspective-origin: 100% 0px;
  transform-origin: 100% 0px;
  column-gap: calc(var(--gap) * .5);
  row-gap: calc(var(--gap) * .5);
}

`.btn-w` {
  border-top-color: ;
  border-top-style: ;
  border-top-width: ;
  border-right-color: ;
  border-right-style: ;
  border-right-width: ;
  border-bottom-color: ;
  border-bottom-style: ;
  border-bottom-width: ;
  border-left-color: ;
  border-left-style: ;
  border-left-width: ;
  border-image-source: ;
  border-image-slice: ;
  border-image-width: ;
  border-image-outset: ;
  border-image-repeat: ;
  background-color: var(--color--lime);
  height: 3rem;
  color: var(--color--dark-green);
  border-top-left-radius: 0.54rem;
  border-top-right-radius: 0.54rem;
  border-bottom-right-radius: 0.54rem;
  border-bottom-left-radius: 0.54rem;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  justify-content: center;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
}

`.btn-w.icon-only` {
  aspect-ratio: 1 / 1;
  width: 3.75rem;
  height: 3.75rem;
}

`.btn-w.is-nav` {
  height: 3.75rem;
}

`.btn-w.tertiary` {
  background-color: var(--color--lime-zero);
  color: currentcolor;
  border-top-color: currentcolor;
  border-right-color: currentcolor;
  border-bottom-color: currentcolor;
  border-left-color: currentcolor;
  border-top-left-radius: 0.411875rem;
  border-top-right-radius: 0.411875rem;
  border-bottom-right-radius: 0.411875rem;
  border-bottom-left-radius: 0.411875rem;
  height: 2.5rem;
}

`.btn-w.is-touch-swipe` {
  aspect-ratio: 1 / 1;
  width: 3.75rem;
  height: 3.75rem;
}

`.btn-inner` {
  column-gap: calc(var(--gap) * .5);
  row-gap: calc(var(--gap) * .5);
  justify-content: center;
  align-items: center;
  display: flex;
}

`.btn-inner:where(.w-variant-3506eb9e-fb47-e850-4366-d611cf6abb90)` {
  flex-direction: row-reverse;
  flex-wrap: nowrap;
}

`.btn-text` {
  font-family: "Mona Sans Variable", Arial, sans-serif;
  font-size: var(--text--btn-primary);
  font-variation-settings: "wdth" 86;
  text-transform: uppercase;
  font-weight: 800;
  line-height: 1;
}

`.btn-text.is-nav` {
  font-size: var(--text--btn-nav);
}

`.btn-text.is-footer` {
  font-size: var(--text--btn-footer);
}

`.btn-icon-w` {
  aspect-ratio: 1 / 1;
  justify-content: center;
  align-items: center;
  width: 1.2rem;
  display: flex;
  position: relative;
}

`.btn-icon-svg` {
  height: 0.78125rem;
  display: flex;
}

`.btn-icon-svg.is-large` {
  height: 1.2rem;
}

`.nav-ham` {
  aspect-ratio: 1 / 1;
  width: 3.75rem;
  height: 3.75rem;
  color: var(--color--black);
  border-top-left-radius: 0.74rem;
  border-top-right-radius: 0.74rem;
  border-bottom-right-radius: 0.74rem;
  border-bottom-left-radius: 0.74rem;
  justify-content: center;
  align-items: center;
  display: flex;
}

`.nav-brand` {
  height: 3.75rem;
}

`.nav-middle` {
  pointer-events: auto;
  column-gap: var(--gap);
  row-gap: var(--gap);
  justify-content: center;
  align-items: center;
  display: flex;
}

`.nav-inner` {
  z-index: 50;
  width: 100%;
  padding-left: var(--gap);
  padding-right: var(--gap);
  padding-top: var(--gap);
  padding-bottom: var(--gap);
  justify-content: space-between;
  align-items: center;
  display: flex;
  position: relative;
  top: 0%;
  right: 0%;
  bottom: auto;
  left: 0%;
}

`.nav-brand-link` {
  pointer-events: auto;
  transform-origin: 0px 0px;
  mix-blend-mode: normal;
}

`.nav-brand-link.w--current` {
  perspective-origin: 0px 0px;
  transform-origin: 0px 0px;
}

`.eyebrow-w` {
  column-gap: calc(var(--gap) * .5);
  row-gap: calc(var(--gap) * .5);
  display: flex;
  overflow-x: clip;
  overflow-y: clip;
}

`.eyebrow-w.c-green-off-white-2` {
  color: var(--color--green-off-white-2);
}

`.eyebrow-w.c-dark-green-tint-2` {
  color: var(--color--dark-green-tint-2);
}

`.eyebrow-w.hero-next-race` {
  text-align: center;
  justify-content: center;
  align-items: flex-start;
  max-width: 80%;
}

`.eyebrow-w.c-grey-on-track` {
  color: var(--color--grey-on-track);
}

`.eyebrow-w.c-grey-on-track.calendar-track-eb` {
  column-gap: calc(var(--gap) * .25);
  row-gap: calc(var(--gap) * .25);
}

`.eyebrow-w.on-t-ui-stats-box1-row-2` {
  text-align: left;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 6rem;
}

`.eyebrow-w.on-t-ui-stats-box1-row-3` {
  text-align: left;
  column-gap: calc(var(--gap) * .25);
  row-gap: calc(var(--gap) * .25);
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 6rem;
}

`.eyebrow-w.on-t-ui-stats-box1-row-3.is-alt` {
  text-align: center;
  justify-content: center;
  align-items: flex-start;
}

`.eyebrow-w.f1-car-item, .eyebrow-w.pre-f1-car-item` {
  z-index: 5;
  max-width: 6.8125rem;
  position: relative;
}

`.eyebrow-w.gap0-25` {
  column-gap: calc(var(--gap) * .25);
  row-gap: calc(var(--gap) * .25);
}

`.text-body-reg-mona` {
  font-variation-settings: "wght" 500, "wdth" 100;
  letter-spacing: -0.0125rem;
  text-transform: none;
  font-size: 1.25rem;
  line-height: 1.25;
}

`.text-body-reg-mona.c-grey-on-track` {
  color: var(--color--grey-on-track);
}

`.text-impact-lg-mona` {
  font-size: var(--text--impact);
  font-variation-settings: "wght" 660, "wdth" 93;
  letter-spacing: -0.0625rem;
  text-transform: uppercase;
  line-height: 90.6%;
}

`.text-impact-lg-mona.marquee-adv` {
  white-space-collapse: collapse;
  text-wrap-mode: nowrap;
  margin-right: 2rem;
}

`.text-impact-lg-mona.reduce` {
  font-variation-settings: "wght" 750, "wdth" 93;
  letter-spacing: -0.25rem;
  font-size: 7rem;
  line-height: 0.816;
}

`.text-impact-lg-mona.impact-on-track` {
  margin-bottom: 6.25rem;
}

`.text-impact-lg-brier` {
  letter-spacing: -0.1875rem;
  font-family: Brier, Arial, sans-serif;
  font-size: 8.25rem;
  line-height: 83%;
}

`.text-impact-lg-brier.c-lime-off` {
  color: var(--color--lime-off);
}

`.text-impact-lg-brier.c-grey-on-track` {
  color: var(--color--grey-on-track);
}

`.text-impact-lg-brier.c-green-off-white-2` {
  color: var(--color--green-off-white-2);
}

`.base-helmet-rive` {
  aspect-ratio: 6.0625 / 3.1875;
  width: 6.0625rem;
  height: 3.1875rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  position: relative;
}

`.base-helmet-rive.off-track-impact` {
  width: 8rem;
  height: auto;
  transform: scale(1.3);
}

`.impact-icon-w` {
  column-gap: var(--gap);
  row-gap: var(--gap);
  flex-direction: column;
  flex-wrap: nowrap;
  display: flex;
  position: relative;
}

`.impact-icon-w.is-off-t` {
  z-index: 30;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
}

`.impact-content-w` {
  max-width: 80rem;
  color: var(--color--green-off-white-1);
  text-align: center;
  column-gap: calc(3 * var(--gap));
  row-gap: calc(3 * var(--gap));
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding-top: 6rem;
  padding-bottom: 12rem;
  display: flex;
}

`.impact-content-w.on-track` {
  max-width: 78rem;
  padding-top: 18rem;
  padding-bottom: 0px;
}

`.impact-content-w.off-track` {
  max-width: 78rem;
  padding-top: 17rem;
}

`.impact-content-w.part-i` {
  max-width: 90rem;
  padding-top: 12rem;
}

`.impact-content-w.is-home` {
  max-width: 80.1rem;
}

`.marquee-adv-scroll` {
  will-change: transform;
  width: 100%;
  display: flex;
  position: relative;
}

`.marquee-adv-item` {
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  justify-content: flex-start;
  align-items: center;
  font-size: max(4em, 8vw);
  display: flex;
}

`.marquee-adv-collection` {
  will-change: transform;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  display: flex;
  position: relative;
}

`.marquee-adv-row` {
  z-index: 5;
  width: 100vw;
  position: relative;
}

`.marquee-adv-row.is-camp` {
  margin-top: var(--gap);
  width: 100%;
}

`.marqee-adv-layout` {
  width: 100%;
  height: 15rem;
  position: relative;
}

`.marqee-adv-layout.part-i` {
  position: absolute;
}

`.page-ln4-pos` {
  z-index: 1;
  pointer-events: none;
  justify-content: center;
  align-items: center;
  height: 100%;
  display: flex;
  position: absolute;
  top: 0%;
  right: 0%;
  bottom: auto;
  left: 0%;
}

`.marquee-gl-target-w` {
  z-index: 10;
  pointer-events: none;
  justify-content: center;
  align-items: center;
  width: 100vw;
  display: flex;
  position: absolute;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
}

`.marquee-gl-target` {
  outline-color: var(--color--lime);
  outline-offset: -2px;
  outline-width: 1px;
  outline-style: none;
  justify-content: center;
  align-items: center;
  width: 35.375rem;
  height: 22.875rem;
  display: flex;
}

`.sticky-track.home-hero` {
  height: 200vh;
  position: relative;
}

`.sticky-track.is-home-otot` {
  position: relative;
}

`.sticky-item` {
  position: sticky;
  top: 0px;
}

`.sticky-item.home-hero` {
  position: sticky;
}

`.gl-canvas` {
  z-index: 10;
  transform-origin: 50% center;
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
  position: absolute;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
}

`.css-nav` {
  width: 0px;
  height: 0px;
  display: none;
  position: fixed;
  top: 0%;
  right: 0%;
  bottom: auto;
  left: 0%;
  overflow-x: hidden;
  overflow-y: hidden;
}

`.hero-nav-theme` {
  position: absolute;
  top: 0%;
  right: auto;
  bottom: auto;
  left: 0%;
}

`.hero-nav-theme.is-1` {
  height: 10vh;
}

`.hero-nav-theme.is-2` {
  height: 90vh;
  top: 10vh;
}

`.marquee-adv-top-w` {
  justify-content: center;
  align-items: flex-start;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  position: absolute;
  top: -15rem;
  right: 0%;
  bottom: auto;
  left: 0%;
}

`.image` {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

`.image.is-horizontal-scroll` {
  pointer-events: none;
  transform-origin: 0% center;
  object-fit: cover;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  width: calc(100% + 4rem);
  max-width: none;
  height: calc(100% + 4rem);
  max-height: none;
}

`.image.is-otot-home-end` {
  height: calc(var(--vh, 1vh) * 120);
  position: absolute;
}

`.image.is-exe-scroll` {
  object-fit: cover;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  width: 100%;
  max-width: none;
  height: calc(100% + 4rem);
}

`.image.is-exe-scroll.is-clip, .image.is-exe-sticker, .image.is-collab-placeholder` {
  object-fit: contain;
}

`.image.is-home-marquee-sig-img:where(.w-variant-88b83061-c887-c094-eb94-cbb8cabca5e0)` {
  display: none;
}

`.image.is-visor-scroll` {
  clip-path: ellipse(120% 120% at 50% 0%);
}

`.image.is-camp` {
  width: 120%;
  max-width: none;
  height: 120%;
}

`.image.is-part-i-video` {
  position: absolute;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
}

`.image.is-trophy` {
  object-fit: contain;
  height: 90%;
}

`.image.is-social-card` {
  z-index: 10;
  position: absolute;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
}

`.image.is-ln4-logo` {
  width: 1.875rem;
  height: 2.125rem;
  display: none;
}

`.image.is-ln4-logo:where(.w-variant-88b83061-c887-c094-eb94-cbb8cabca5e0)` {
  display: inline-block;
}

`.image.is-collab-force` {
  aspect-ratio: 407 / 411;
}

`.image.is-clip-fix` {
  width: 102%;
  max-width: 102%;
  height: 102%;
  margin-top: -1%;
  margin-left: -1%;
}

`.marquee-signature-w` {
  outline-color: var(--color--lime);
  outline-offset: -2px;
  outline-width: 1px;
  outline-style: none;
  width: 4.95rem;
  height: 2.28438rem;
}

`.marquee-adv-top-layout` {
  column-gap: var(--gap);
  row-gap: var(--gap);
  text-align: center;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  display: flex;
}

`.top-marker` {
  pointer-events: none;
  height: 10vh;
  position: absolute;
  top: 0%;
  right: auto;
  bottom: auto;
  left: 0%;
}

`.css-main` {
  display: none;
  position: fixed;
  top: 0%;
  right: 0%;
  bottom: auto;
  left: 0%;
}

`.horizontal-track` {
  padding-right: var(--gap);
  height: calc(var(--vh, 1vh) * 100);
  padding-left: 75vw;
  padding-top: calc(var(--vh, 1vh) * 7);
  padding-bottom: calc(var(--gap) * 2);
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  display: flex;
}

`.horizontal-grid-col` {
  flex-direction: column;
  flex-wrap: nowrap;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  justify-content: flex-start;
  align-items: flex-start;
  width: auto;
  height: 100%;
  display: flex;
}

`.horizontal-grid-col.center` {
  justify-content: center;
  align-items: flex-start;
}

`.horizontal-item-w` {
  position: relative;
}

`.horizontal-item-w.is-2` {
  margin-top: auto;
  margin-bottom: calc(var(--vh, 1vh) * 8.42);
  left: calc(var(--vh, 1vh) * 14.42);
}

`.horizontal-item-w.is--3` {
  margin-top: auto;
}

`.horizontal-item-w.is-text-callout` {
  max-width: 17.375rem;
}

`.horizontal-item-w.is-text-callout.callout-2` {
  max-width: 30rem;
  margin-top: auto;
  margin-bottom: calc(var(--vh, 1vh) * 2.67);
}

`.horizontal-item-w.is-text-callout.callout-1` {
  margin-top: calc(var(--vh, 1vh) * 1.67);
}

`.horizontal-item-w.is-text-callout.is-home-callout-2` {
  max-width: 30rem;
  margin-top: auto;
  margin-bottom: calc(var(--vh, 1vh) * 2.67);
}

`.horizontal-item-w.is-4` {
  left: calc(var(--grid-spacer) * -.5);
}

`.horizontal-item-w.is-5` {
  margin-top: auto;
  margin-left: 0px;
  margin-bottom: calc(var(--vh, 1vh) * 8.17);
}

`.horizontal-item-w.is-6` {
  margin-top: auto;
  margin-bottom: calc(var(--vh, 1vh) * 1.17);
}

`.horizontal-item-w.is-7` {
  margin-bottom: auto;
  margin-top: calc(var(--vh, 1vh) * 8);
}

`.horizontal-item-w.is-8` {
  margin-top: calc(var(--vh, 1vh) * 2);
}

`.horizontal-item-w.is-9` {
  left: calc(var(--grid-spacer) * -.5);
  margin-top: auto;
  margin-bottom: calc(var(--gap) * 2);
}

`.horizontal-item-w.is-10` {
  margin-left: 0px;
  margin-top: calc(var(--vh, 1vh) * 14.92);
}

`.horizontal-item-w.is-title-mid` {
  margin-top: auto;
  margin-bottom: calc(var(--vh, 1vh) * 50.5);
}

`.horizontal-item-w.is-title-top` {
  margin-top: calc(var(--vh, 1vh) * 1.67);
}

`.horizontal-item-w.is-h-large` {
  margin-top: auto;
}

`.horizontal-item-w.is-h-large.top` {
  margin-top: 0px;
  margin-bottom: auto;
}

`.horizontal-item-w.is-h8` {
  margin-top: auto;
  margin-bottom: calc(var(--vh, 1vh) * 8.42);
  left: calc(var(--vh, 1vh) * 14.42);
}

`.horizontal-item-w.is-home9` {
  left: calc(var(--grid-spacer) * -.5);
  margin-top: auto;
  margin-bottom: calc(var(--gap) * 2);
}

`.horizontal-item-w.is-home3` {
  margin-top: auto;
}

`.horizontal-item-w.is-home4` {
  left: calc(var(--grid-spacer) * -.5);
}

`.horizontal-item-w.is-home6` {
  margin-top: auto;
  margin-bottom: calc(var(--vh, 1vh) * 1.17);
}

`.horizontal-item-w.is-home8` {
  margin-top: calc(var(--vh, 1vh) * 2);
}

`.horizontal-item-w.is-home10` {
  margin-left: 0px;
  margin-top: calc(var(--vh, 1vh) * 14.92);
}

`.horizontal-item-w.is-on-t-5` {
  margin-top: auto;
  margin-left: 0px;
  margin-bottom: calc(var(--vh, 1vh) * 8.17);
}

`.horizontal-item-w.is-on-t-4` {
  left: calc(var(--grid-spacer) * -.5);
}

`.horizontal-item-w.is-offt3, .horizontal-item-w.is-offt4` {
  margin-top: auto;
  margin-bottom: calc(var(--vh, 1vh) * 8.42);
  left: calc(var(--vh, 1vh) * 14.42);
}

`.horizontal-item-w.is-offt7` {
  left: calc(var(--grid-spacer) * -.5);
  margin-top: auto;
  margin-bottom: calc(var(--gap) * 2);
}

`.horizontal-item-w.is-offt8, .horizontal-item-w.is-part-i-2` {
  margin-top: auto;
  margin-bottom: calc(var(--vh, 1vh) * 8.42);
  left: calc(var(--vh, 1vh) * 14.42);
}

`.horizontal-item-w.is-part-i-3` {
  margin-top: calc(var(--vh, 1vh) * 2);
}

`.horizontal-item-w.is-part-i-4` {
  left: calc(var(--grid-spacer) * -.5);
}

`.horizontal-item-w.is-part-i-5, .horizontal-item-w.is-part-i-6` {
  margin-top: auto;
  margin-bottom: calc(var(--vh, 1vh) * 1.17);
}

`.horizontal-item-w.is-part-i-7` {
  margin-bottom: auto;
  margin-top: calc(var(--vh, 1vh) * 8);
}

`.horizontal-item-w.is-part-i-8` {
  margin-top: auto;
}

`.horizontal-item-w.is-part-i-9` {
  left: calc(var(--grid-spacer) * -.5);
  margin-top: auto;
  margin-bottom: calc(var(--gap) * 2);
}

`.horizontal-item-w.is-part-i-10` {
  margin-left: 0px;
  margin-top: calc(var(--vh, 1vh) * 14.92);
}

`.horizontal-item-w.is-home-2` {
  margin-top: auto;
  margin-bottom: calc(var(--vh, 1vh) * 8.42);
  left: calc(var(--vh, 1vh) * 14.42);
}

`.horizontal-item-w.is-home-4` {
  left: calc(var(--grid-spacer) * -.5);
}

`.horizontal-item-w.is-home-6` {
  margin-top: auto;
  margin-bottom: calc(var(--vh, 1vh) * 1.17);
}

`.horizontal-item-w.is-home-7` {
  margin-bottom: auto;
  margin-top: calc(var(--vh, 1vh) * 8);
}

`.horizontal-item-w.is-home-8` {
  margin-top: calc(var(--vh, 1vh) * 2);
}

`.horizontal-item-w.is-on-t-2` {
  margin-top: auto;
  margin-bottom: calc(var(--vh, 1vh) * 8.42);
  left: calc(var(--vh, 1vh) * 14.42);
}

`.horizontal-item-layout` {
  column-gap: var(--gap);
  row-gap: var(--gap);
  flex-direction: column;
  flex-wrap: nowrap;
  display: flex;
}

`.horizontal-item-img-w` {
  justify-content: flex-end;
  align-items: center;
  display: flex;
  overflow-x: clip;
  overflow-y: clip;
}

`.horizontal-item-img-w.is-1` {
  width: calc(var(--vh, 1vh) * 27);
  height: calc(var(--vh, 1vh) * 33.46);
}

`.horizontal-item-img-w.is-2` {
  width: calc(var(--vh, 1vh) * 29.3);
  height: calc(var(--vh, 1vh) * 29.3);
}

`.horizontal-item-img-w.is-3` {
  width: calc(var(--vh, 1vh) * 65.48);
  height: calc(var(--vh, 1vh) * 59.48);
}

`.horizontal-item-img-w.is-4` {
  height: calc(var(--vh, 1vh) * 20.96);
  width: calc(var(--vh, 1vh) * 21.98);
}

`.horizontal-item-img-w.is-on-t-5` {
  width: calc(var(--vh, 1vh) * 31.75);
  height: calc(var(--vh, 1vh) * 28.75);
}

`.horizontal-item-img-w.is-6` {
  width: calc(var(--vh, 1vh) * 21.38);
  height: calc(var(--vh, 1vh) * 26.48);
}

`.horizontal-item-img-w.is-7` {
  width: calc(var(--vh, 1vh) * 20.74);
  height: calc(var(--vh, 1vh) * 20.74);
}

`.horizontal-item-img-w.is-8` {
  width: calc(var(--vh, 1vh) * 60.95);
  height: calc(var(--vh, 1vh) * 60.95);
}

`.horizontal-item-img-w.is-9` {
  height: calc(var(--vh, 1vh) * 24.91);
  width: calc(var(--vh, 1vh) * 27.42);
}

`.horizontal-item-img-w.is-10` {
  width: calc(var(--vh, 1vh) * 31.69);
  height: calc(var(--vh, 1vh) * 30.9);
}

`.horizontal-item-img-w.is-h1` {
  width: calc(var(--vh, 1vh) * 36.44);
  height: calc(var(--vh, 1vh) * 40.91);
  margin-top: calc(var(--vh, 1vh) * 8.42);
}

`.horizontal-item-img-w.is-h3` {
  width: calc(var(--vh, 1vh) * 23.61);
  height: calc(var(--vh, 1vh) * 23.61);
}

`.horizontal-item-img-w.is-h-large` {
  width: calc(var(--vh, 1vh) * 65.48);
  height: calc(var(--vh, 1vh) * 59.48);
}

`.horizontal-item-img-w.is-h4` {
  width: calc(var(--vh, 1vh) * 34.11);
  height: calc(var(--vh, 1vh) * 30.95);
}

`.horizontal-item-img-w.is-h5` {
  height: calc(var(--vh, 1vh) * 26.77);
  width: calc(var(--vh, 1vh) * 29.46);
}

`.horizontal-item-img-w.is-h6` {
  width: calc(var(--vh, 1vh) * 34.05);
  height: calc(var(--vh, 1vh) * 30.9);
}

`.horizontal-item-img-w.is-h7` {
  width: calc(var(--vh, 1vh) * 23.61);
  height: calc(var(--vh, 1vh) * 23.61);
}

`.horizontal-item-img-w.is-h8` {
  width: calc(var(--vh, 1vh) * 34.11);
  height: calc(var(--vh, 1vh) * 30.95);
}

`.horizontal-item-img-w.is-home1` {
  width: calc(var(--vh, 1vh) * 27);
  height: calc(var(--vh, 1vh) * 33.46);
}

`.horizontal-item-img-w.is-home2` {
  width: calc(var(--vh, 1vh) * 29.3);
  height: calc(var(--vh, 1vh) * 29.3);
}

`.horizontal-item-img-w.is-home3` {
  width: calc(var(--vh, 1vh) * 65.48);
  height: calc(var(--vh, 1vh) * 59.48);
}

`.horizontal-item-img-w.is-home5` {
  width: calc(var(--vh, 1vh) * 31.75);
  height: calc(var(--vh, 1vh) * 28.75);
}

`.horizontal-item-img-w.is-home4` {
  height: calc(var(--vh, 1vh) * 20.96);
  width: calc(var(--vh, 1vh) * 21.98);
}

`.horizontal-item-img-w.is-home8` {
  width: calc(var(--vh, 1vh) * 60.95);
  height: calc(var(--vh, 1vh) * 60.95);
}

`.horizontal-item-img-w.is-home10` {
  width: calc(var(--vh, 1vh) * 31.69);
  height: calc(var(--vh, 1vh) * 30.9);
}

`.horizontal-item-img-w.is-home9` {
  height: calc(var(--vh, 1vh) * 24.91);
  width: calc(var(--vh, 1vh) * 27.42);
}

`.horizontal-item-img-w.is-ont1` {
  width: calc(var(--vh, 1vh) * 27);
  height: calc(var(--vh, 1vh) * 33.46);
}

`.horizontal-item-img-w.is-ont2` {
  width: calc(var(--vh, 1vh) * 29.3);
  height: calc(var(--vh, 1vh) * 29.3);
}

`.horizontal-item-img-w.is-ont3` {
  width: calc(var(--vh, 1vh) * 65.48);
  height: calc(var(--vh, 1vh) * 59.48);
}

`.horizontal-item-img-w.is-ont4` {
  height: calc(var(--vh, 1vh) * 20.96);
  width: calc(var(--vh, 1vh) * 21.98);
}

`.horizontal-item-img-w.is-offt1` {
  width: calc(var(--vh, 1vh) * 36.44);
  height: calc(var(--vh, 1vh) * 40.91);
  margin-top: calc(var(--vh, 1vh) * 8.42);
}

`.horizontal-item-img-w.is-offt3` {
  width: calc(var(--vh, 1vh) * 23.61);
  height: calc(var(--vh, 1vh) * 23.61);
}

`.horizontal-item-img-w.is-offt4` {
  width: calc(var(--vh, 1vh) * 34.11);
  height: calc(var(--vh, 1vh) * 30.95);
}

`.horizontal-item-img-w.is-offt6` {
  width: calc(var(--vh, 1vh) * 34.05);
  height: calc(var(--vh, 1vh) * 30.9);
}

`.horizontal-item-img-w.is-offt7` {
  height: calc(var(--vh, 1vh) * 26.77);
  width: calc(var(--vh, 1vh) * 29.46);
}

`.horizontal-item-img-w.is-offt8` {
  width: calc(var(--vh, 1vh) * 23.61);
  height: calc(var(--vh, 1vh) * 23.61);
}

`.horizontal-item-img-w.is-part-i-3` {
  width: calc(var(--vh, 1vh) * 65.48);
  height: calc(var(--vh, 1vh) * 59.48);
}

`.horizontal-item-img-w.is-part-i-2` {
  width: calc(var(--vh, 1vh) * 29.3);
  height: calc(var(--vh, 1vh) * 29.3);
}

`.horizontal-item-img-w.is-part-i-5` {
  width: calc(var(--vh, 1vh) * 31.75);
  height: calc(var(--vh, 1vh) * 28.75);
}

`.horizontal-item-img-w.is-home-2` {
  width: calc(var(--vh, 1vh) * 29.3);
  height: calc(var(--vh, 1vh) * 29.3);
}

`.horizontal-item-img-w.is-home-4` {
  width: calc(var(--vh, 1vh) * 31.75);
  height: calc(var(--vh, 1vh) * 28.75);
}

`.horizontal-item-img-w.is-home-1` {
  width: calc(var(--vh, 1vh) * 27);
  height: calc(var(--vh, 1vh) * 33.46);
}

`.horizontal-item-img-w.is-home-7` {
  width: calc(var(--vh, 1vh) * 20.74);
  height: calc(var(--vh, 1vh) * 20.74);
}

`.horizontal-item-img-w.is-home-6` {
  width: calc(var(--vh, 1vh) * 21.38);
  height: calc(var(--vh, 1vh) * 26.48);
}

`.horizontal-item-img-w.is-home-5` {
  height: calc(var(--vh, 1vh) * 20.96);
  width: calc(var(--vh, 1vh) * 21.98);
}

`.horizontal-item-text-layout` {
  column-gap: var(--gap);
  row-gap: var(--gap);
  flex-direction: column;
  flex-wrap: nowrap;
  display: flex;
}

`.horizontal-item-text-layout.mob-offset.op-0` {
  opacity: 0;
}

`.horizontal-grid-spacer` {
  width: var(--grid-spacer);
  pointer-events: auto;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
}

`.horizontal-grid-spacer.half` {
  width: calc(var(--grid-spacer) * .5);
}

`.horizontal-grid-spacer.quarter` {
  pointer-events: auto;
  width: calc(var(--grid-spacer) * .25);
}

`.horizontal-item-text` {
  color: var(--color--green-off-white-2);
  letter-spacing: 0.05rem;
  font-family: Brier, Arial, sans-serif;
  font-size: 1.5rem;
  line-height: 94.6%;
}

`.horizontal-item-text.c-dark-green-tint-1, .horizontal-item-text.c-dark-green-tint-2` {
  color: var(--color--dark-green-tint-2);
}

`.span-green-off-white-1` {
  color: var(--color--green-off-white-1);
}

`.horizontal-rive-placeholder` {
  width: 4.125rem;
  height: 1.875rem;
}

`.horizontal-item-pill-w` {
  display: flex;
}

`.horizontal-item-pill-w.c-grey-on-track` {
  color: var(--color--grey-on-track);
}

`.horizontal-item-pill` {
  border-top-style: solid;
  border-top-width: 0.5px;
  border-top-color: var(--color--green-off-white-2);
  border-right-style: solid;
  border-right-width: 0.5px;
  border-right-color: var(--color--green-off-white-2);
  border-bottom-style: solid;
  border-bottom-width: 0.5px;
  border-bottom-color: var(--color--green-off-white-2);
  border-left-style: solid;
  border-left-width: 0.5px;
  border-left-color: var(--color--green-off-white-2);
  height: calc(var(--vh, 1vh) * 4.44);
  border-top-left-radius: 0.2rem;
  border-top-right-radius: 0.2rem;
  border-bottom-right-radius: 0.2rem;
  border-bottom-left-radius: 0.2rem;
  display: flex;
}

`.horizontal-item-pill.on-track` {
  border-top-color: inherit;
  border-right-color: inherit;
  border-bottom-color: inherit;
  border-left-color: inherit;
}

`.horizontal-item-pill.c-dark-green-tint-2` {
  border-top-color: ;
  border-right-color: ;
  border-bottom-color: ;
  border-left-color: ;
  color: var(--color--dark-green-tint-2);
}

`.horizontal-pill-box` {
  justify-content: center;
  align-items: center;
  width: 3.25rem;
  display: flex;
}

`.horizontal-pill-box.is-side` {
  border-right-width: ;
  border-right-style: ;
  border-right-color: ;
  justify-content: center;
  align-items: center;
}

`.horizontal-pill-text` {
  color: var(--color--green-off-white-2);
  font-size: 1.5rem;
  line-height: 1;
}

`.horizontal-pill-text.on-track` {
  color: var(--color--grey-on-track);
}

`.horizontal-pill-text.c-dark-green-tint-2` {
  color: var(--color--dark-green-tint-2);
}

`.horizontal-pill-icon` {
  max-width: 80%;
}

`.horizontal-pill-icon.c-dark-green-tint-2` {
  color: var(--color--dark-green-tint-2);
}

`.horizontal-pin-sticky` {
  display: flex;
  position: sticky;
  top: 0px;
}

`.horizontal-pin-spacer` {
  position: relative;
}

`.otot-home-inner` {
  z-index: 10;
  min-height: calc(var(--vh, 1vh) * 100);
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
}

`.otot-home-bg` {
  z-index: 0;
  position: absolute;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
}

`.otot-home-img-w` {
  max-width: 27.625rem;
  height: calc(var(--vh, 1vh) * 82.67);
  width: calc(var(--vh, 1vh) * 34.75);
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
  position: absolute;
  top: auto;
  right: auto;
  bottom: 0%;
  left: 0%;
}

`.otot-home-img-w.is-1` {
  aspect-ratio: 834 / 1984;
  width: auto;
  max-width: none;
  height: calc(var(--vh, 1vh) * 90.67);
  justify-content: flex-end;
  align-items: flex-start;
}

`.otot-home-img-w.is-2` {
  aspect-ratio: 898 / 1984;
  width: auto;
  max-width: none;
  height: calc(var(--vh, 1vh) * 90.67);
  top: auto;
  right: 0%;
  bottom: 0%;
  left: auto;
}

`.otot-home-img` {
  object-fit: cover;
  width: 100%;
  max-width: none;
  height: 100%;
}

`.otot-home-layout` {
  column-gap: calc(var(--gap) * 3);
  row-gap: calc(var(--gap) * 3);
  display: flex;
}

`.otot-home-text-col` {
  column-gap: calc(var(--gap) * 1);
  row-gap: calc(var(--gap) * 1);
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: stretch;
  display: flex;
}

`.otot-home-text-col.is-1` {
  text-align: right;
  justify-content: flex-start;
  align-items: flex-end;
}

`.otot-home-text-col.is-2` {
  text-align: left;
  justify-content: flex-start;
  align-items: flex-start;
}

`.otot-home-p-w` {
  width: 21rem;
  margin-top: var(--gap);
  flex-direction: column;
  flex-wrap: nowrap;
  display: flex;
}

`.otot-home-p-w.is-2` {
  justify-content: flex-start;
  align-items: flex-start;
}

`.otot-home-p-w.is-1` {
  justify-content: flex-start;
  align-items: flex-end;
}

`.span-font-brier` {
  font-family: Brier, Arial, sans-serif;
}

`.span-font-brier.otot` {
  line-height: 81%;
}

`.otot-home-end-img-w` {
  min-height: calc(var(--vh, 1vh) * 100);
  justify-content: center;
  align-items: flex-start;
  display: flex;
  position: relative;
  overflow-x: clip;
  overflow-y: clip;
}

`.helmet-grid-frame` {
  aspect-ratio: 406.89 / 411;
  width: 100%;
  display: flex;
}

`.helmet-grid-frame.is-overlay` {
  z-index: 10;
  opacity: 0;
  position: absolute;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
}

`.helmet-grid-frame.is-base` {
  color: var(--color--dark-green-tint-2);
}

`.helmet-grid-item` {
  aspect-ratio: 406.89 / 411;
  width: 100%;
  display: flex;
  position: relative;
}

`.helmet-grid` {
  column-gap: var(--gap);
  row-gap: var(--gap);
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-columns: 1fr;
  display: grid;
}

`.helmet-grid-frame-w` {
  z-index: 10;
  pointer-events: none;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
}

`.helmet-grid-frame-w.mobile` {
  display: none;
}

`.helmet-grid-item-img-w` {
  z-index: 0;
  justify-content: center;
  align-items: center;
  display: flex;
  position: absolute;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
}

`.helmet-grid-item-img-helmet` {
  width: 100%;
  height: 100%;
  position: relative;
  top: 0%;
  right: auto;
  bottom: auto;
  left: 0%;
}

`.helmet-grid-item-reveal-img` {
  clip-path: ellipse(100% 0% at 50% 0%);
  background-image: url("https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68ea48448e634fcc425b0e28_transp.webp");
  background-position-x: 50%;
  background-position-y: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  transform: scale(1.05);
}

`.title-headline-w` {
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

`.title-headline-w.img-below` {
  column-gap: calc(var(--gap) * 4);
  row-gap: calc(var(--gap) * 4);
  flex-direction: column;
  flex-wrap: nowrap;
}

`.title-headline-w.flex` {
  flex-direction: column;
  flex-wrap: nowrap;
}

`.title-headline-w.mw-calendar` {
  max-width: 38rem;
}

`.title-para-w.c-grey-on-track` {
  color: var(--color--grey-on-track);
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
}

`.title-para-w.mw` {
  max-width: 25rem;
  display: flex;
}

`.title-para-w.mw.flex-2` {
  column-gap: calc(var(--gap) * 2);
  row-gap: calc(var(--gap) * 2);
  flex-direction: column;
  flex-wrap: nowrap;
  display: flex;
}

`.title-para-w.mw.flex-1` {
  column-gap: calc(var(--gap) * 1);
  row-gap: calc(var(--gap) * 1);
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

`.title-para-w.mw-2` {
  max-width: 16.25rem;
}

`.title-para-w.part-i-section2-text-w` {
  column-gap: calc(var(--gap) * 1);
  row-gap: calc(var(--gap) * 1);
  flex-direction: column;
  flex-wrap: nowrap;
  max-width: 80%;
  display: flex;
}

`.spacer._8-75rem` {
  height: 8.75rem;
}

`.spacer._8rem` {
  height: 8rem;
}

`.spacer._14rem` {
  height: 14rem;
}

`.spacer._20rem` {
  height: 20rem;
}

`.spacer._2rem` {
  height: 2rem;
}

`.spacer.on-t-hero` {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0px;
  min-height: 4rem;
  max-height: 8rem;
}

`.spacer._10rem` {
  height: 10rem;
}

`.spacer._5rem` {
  height: 5rem;
}

`.spacer.calendar-item` {
  width: 9rem;
}

`.spacer.is-partnerships-hero` {
  height: 12rem;
  min-height: 8rem;
}

`.spacer._12rem` {
  height: 12rem;
}

`.spacer._4rem` {
  height: 4rem;
}

`.spacer._6rem` {
  height: 6rem;
}

`.spacer.is-calendar-hero` {
  height: 12rem;
  min-height: 8rem;
}

`.spacer.is-exe` {
  height: 8rem;
}

`.spacer.off-t-hero` {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0px;
  min-height: 4rem;
  max-height: 8rem;
}

`.spacer.is-subpage-hero` {
  height: 12rem;
  min-height: 8rem;
}

`.helmet-grid-item-text-w` {
  z-index: 5;
  justify-content: flex-end;
  align-items: center;
  width: auto;
  max-width: none;
  height: 2rem;
  display: flex;
  position: absolute;
  top: auto;
  right: 0%;
  bottom: 0%;
  left: auto;
}

`.helmet-grid-item-w` {
  position: relative;
}

`.text-title-small-label` {
  text-transform: none;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1.25;
}

`.text-title-small-label.text` {
  font-size: 0.9rem;
}

`.text-title-small-label.date` {
  color: var(--color--lime);
  font-size: 0.9rem;
  font-weight: 700;
}

`.text-title-small-label.date.c-lime-off` {
  color: var(--color--lime-off);
}

`.text-title-small-label.bold` {
  font-weight: 800;
}

`.helmet-grid-item-date-w` {
  justify-content: flex-end;
  align-items: center;
  margin-left: 0.8rem;
  display: flex;
}

`.s-group.bg-black` {
  background-color: var(--color--black);
}

`.s-group.z-0` {
  z-index: 0;
  position: relative;
}

`.s-group.z-10` {
  z-index: 10;
  position: relative;
}

`.callout-icon` {
  width: 5.625rem;
  color: var(--color--lime);
  margin-left: auto;
  margin-right: auto;
  display: flex;
  position: relative;
}

`.callout-icon.icon-ball` {
  width: 3.5rem;
  height: 3.5rem;
}

`.callout-icon.off-t-hero` {
  width: 2.3125rem;
  height: 2.3125rem;
}

`.callout-layout` {
  column-gap: calc(var(--gap) * 2);
  row-gap: calc(var(--gap) * 2);
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  display: flex;
}

`.callout-text-w` {
  text-align: center;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  max-width: 32.5rem;
}

`.btn-inner-text-w` {
  overflow-x: clip;
  overflow-y: clip;
}

`.g-title-layout` {
  z-index: 5;
  column-gap: calc(var(--gap) * 1.5);
  row-gap: calc(var(--gap) * 1.5);
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
  position: relative;
}

`.eyebrow-icon-w` {
  aspect-ratio: 1 / 1;
  justify-content: center;
  align-items: center;
  width: 1rem;
  display: flex;
}

`.g-text-para-w` {
  max-width: 32.4375rem;
}

`.exe-cta-img-w` {
  height: 52.0625rem;
  position: relative;
}

`.exe-cta-img-w.is-1` {
  justify-content: center;
  align-items: flex-start;
  width: 39.375rem;
  display: flex;
  top: -4rem;
  overflow-x: clip;
  overflow-y: clip;
}

`.exe-cta-img-w.is-2` {
  justify-content: center;
  align-items: flex-start;
  width: 25rem;
  height: 17.875rem;
  display: flex;
  position: absolute;
  top: 8rem;
  right: -16rem;
  bottom: auto;
  left: auto;
  overflow-x: clip;
  overflow-y: clip;
}

`.exe-cta-img-w.is-3` {
  justify-content: center;
  align-items: flex-start;
  width: 14.1875rem;
  height: 18.125rem;
  display: flex;
  position: absolute;
  top: auto;
  right: auto;
  bottom: -8rem;
  left: -11.3rem;
  overflow-x: clip;
  overflow-y: clip;
}

`.exe-cta-img-w.is-4` {
  z-index: 0;
  justify-content: center;
  align-items: flex-start;
  width: 16.375rem;
  height: 11.875rem;
  display: flex;
  position: absolute;
  top: auto;
  right: auto;
  bottom: -8rem;
  left: -14rem;
  overflow-x: clip;
  overflow-y: clip;
}

`.exe-text-w, .exe-col-2` {
  position: relative;
}

`.exe-cta-sticker-w` {
  width: 15.1875rem;
  height: 11.5rem;
  position: absolute;
  top: auto;
  right: 8rem;
  bottom: -2rem;
  left: auto;
}

`.exe-top-visor` {
  z-index: 0;
  background-color: var(--color--black);
  clip-path: ellipse(70% 100% at 50% 0%);
  height: 8rem;
  position: absolute;
  top: -1px;
  right: 0%;
  bottom: auto;
  left: 0%;
}

`.callout-socials-inner` {
  justify-content: center;
  align-items: center;
  display: flex;
}

`.callout-socials-layout` {
  text-align: center;
  column-gap: calc(var(--gap) * 2);
  row-gap: calc(var(--gap) * 2);
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  display: flex;
}

`.callout-socials-card-layout` {
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 80rem;
  height: 36rem;
  display: flex;
  position: relative;
}

`.callout-socials-card-w` {
  z-index: 0;
  backface-visibility: hidden;
  will-change: transform;
  border-top-left-radius: 3.31625rem;
  border-top-right-radius: 3.31625rem;
  border-bottom-right-radius: 3.31625rem;
  border-bottom-left-radius: 3.31625rem;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  width: 20rem;
  height: 35rem;
  position: absolute;
  overflow-x: clip;
  overflow-y: clip;
}

`.callout-socials-links-layout` {
  column-gap: calc(var(--gap) * 1.5);
  row-gap: calc(var(--gap) * 1.5);
  display: flex;
}

`.text-link-w.c-lime` {
  color: var(--color--lime);
}

`.text-link-w.c-lime.is-hidden` {
  opacity: 0;
  pointer-events: none;
}

`.footer-bg-gradient` {
  background-image: radial-gradient(circle farthest-corner at 50% -190%, var(--color--lime-zero) 68%, var(--color--lime) 83%);
  pointer-events: none;
  transform-origin: 50% 100%;
  height: 100%;
  position: absolute;
  top: auto;
  right: 0%;
  bottom: 0%;
  left: 0%;
  overflow-x: clip;
  overflow-y: clip;
}

`.footer-layout-w` {
  position: relative;
}

`.footer-layout-clip` {
  aspect-ratio: 1688 / 896;
  background-color: var(--color--dark-green);
  width: 100%;
  color: var(--color--white);
  position: relative;
}

`.text-quote` {
  letter-spacing: -0.03125rem;
  font-family: Brier, Arial, sans-serif;
  font-size: 1.5rem;
  line-height: 0.95;
}

`.text-impact-reg-mona` {
  font-variation-settings: "wght" 750, "wdth" 93;
  letter-spacing: -0.25rem;
  text-transform: uppercase;
  font-size: 7rem;
  line-height: 0.816;
}

`.text-impact-reg-mona.line-increase` {
  line-height: 0.85;
}

`.text-impact-reg-brier` {
  letter-spacing: -0.21875rem;
  text-transform: uppercase;
  font-family: Brier, Arial, sans-serif;
  font-size: 7.3125rem;
  font-weight: 700;
  line-height: 0.81;
}

`.text-impact-reg-brier.c-lime-off` {
  color: var(--color--lime-off);
}

`.text-title-lg-brier` {
  font-family: Brier, Arial, sans-serif;
  font-size: 4.6875rem;
  font-weight: 700;
  line-height: 0.886;
}

`.text-title-lg-brier.c-lime-off` {
  color: var(--color--lime-off);
}

`.text-title-lg-brier.c-grey-on-track` {
  color: var(--color--grey-on-track);
}

`.text-title-reg-mona` {
  letter-spacing: -0.125rem;
  font-size: 2.625rem;
  line-height: 0.886;
}

`.text-title-reg-brier` {
  letter-spacing: -0.125rem;
  font-family: Brier, Arial, sans-serif;
  font-size: 2.75rem;
  font-weight: 700;
  line-height: 0.886;
}

`.text-title-reg-brier.c-lime-off` {
  color: var(--color--lime-off);
}

`.text-impact-sm-mona` {
  font-variation-settings: "wght" 660, "wdth" 93;
  letter-spacing: -0.0625px;
  text-transform: uppercase;
  font-size: 5.25rem;
  line-height: 0.856;
}

`.text-impact-sm-brier` {
  letter-spacing: -0.125rem;
  text-transform: uppercase;
  font-family: Brier, Arial, sans-serif;
  font-size: 5.4375rem;
  font-weight: 700;
  line-height: 0.856;
}

`.text-impact-sm-brier.c-lime-off` {
  color: var(--color--lime-off);
}

`.text-body-lg-mona` {
  font-variation-settings: "wght" 500, "wdth" 100;
  letter-spacing: -0.0625rem;
  text-transform: none;
  font-size: 2.25rem;
  line-height: 1.1;
}

`.text-body-lg-brier` {
  letter-spacing: -0.0625rem;
  font-family: Brier, Arial, sans-serif;
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 1.1;
}

`.text-body-lg-brier.c-lime-off` {
  color: var(--color--lime-off);
}

`.text-body-lg-brier.c-lime` {
  color: var(--color--lime);
}

`.text-body-lg-brier.c-green-off-white-2` {
  color: var(--color--green-off-white-2);
}

`.text-citation` {
  font-variation-settings: "wght" 700, "wdth" 100;
  letter-spacing: 0px;
  font-family: "Mona Sans Variable", Arial, sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.3;
}

`.footer-marquee-logo-w` {
  color: var(--color--lime);
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  justify-content: center;
  align-items: center;
  display: flex;
}

`.footer-marquee-svg` {
  width: 100%;
  height: 2.625rem;
  display: flex;
}

`.footer-marquee` {
  z-index: -1;
  column-gap: calc(var(--gap) * 2);
  row-gap: calc(var(--gap) * 2);
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  height: 2.625rem;
  display: flex;
  position: absolute;
  top: auto;
  right: 0%;
  bottom: 3.75rem;
  left: 0%;
  overflow-x: clip;
  overflow-y: clip;
}

`.footer-marquee-item` {
  column-gap: calc(var(--gap) * 2);
  row-gap: calc(var(--gap) * 2);
  flex-direction: row;
  flex-wrap: nowrap;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  display: flex;
  position: relative;
}

`.gl-wrap` {
  z-index: -1;
  position: fixed;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
}

`.gl-wrap.on-track` {
  z-index: 5;
  pointer-events: none;
}

`.gl-wrap.not-found` {
  z-index: 20;
}

`.gl-background` {
  z-index: -1;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
}

`.callout-socials-intro-w` {
  margin-top: calc(var(--gap) * 3);
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
}

`.home-collab-logo-w` {
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  justify-content: center;
  align-items: center;
  display: flex;
}

`.home-collab-marquee-svg` {
  width: 100%;
  height: 5.125rem;
  display: flex;
}

`.home-collab-marquee-svg.edit` {
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  height: 3.4375rem;
}

`.collab-marquee-item` {
  flex-direction: row;
  flex-wrap: nowrap;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  display: flex;
  position: relative;
}

`.home-collab-rive-w` {
  z-index: -1;
  width: 79.625rem;
  height: 49.875rem;
  position: absolute;
  top: 4rem;
  right: 0%;
  bottom: 0%;
  left: -9rem;
}

`.footer-bg-helmet-w` {
  z-index: 5;
  pointer-events: none;
  justify-content: center;
  align-items: flex-end;
  display: flex;
  position: absolute;
  top: auto;
  right: 0%;
  bottom: 0%;
  left: 0%;
}

`.footer-bg-img` {
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  width: 48.75rem;
  height: 39.875rem;
  position: relative;
  bottom: -3rem;
}

`.footer-bg-helmet-layout` {
  justify-content: center;
  align-items: flex-end;
  display: flex;
  position: relative;
}

`.footer-bg-bottom-btn-w` {
  pointer-events: auto;
  position: absolute;
  bottom: 1.75rem;
}

`.footer-links-w` {
  justify-content: space-between;
  width: 100%;
  margin-top: auto;
  margin-bottom: 14rem;
  padding-left: 12.8rem;
  padding-right: 12.8rem;
  display: flex;
  position: relative;
}

`.footer-inner-layout` {
  flex-direction: column;
  flex-wrap: nowrap;
  height: 100%;
  display: flex;
}

`.footer-links-col` {
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  display: flex;
}

`.footer-links-layout` {
  column-gap: calc(var(--gap) * .2);
  row-gap: calc(var(--gap) * .2);
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 2rem;
  display: flex;
}

`.footer-statement-w` {
  text-align: center;
  justify-content: center;
  align-items: flex-start;
  display: flex;
  position: absolute;
  top: 12rem;
  right: 0%;
  bottom: auto;
  left: 0%;
}

`.footer-statement-layout` {
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 48rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  position: relative;
}

`.footer-rive-w` {
  z-index: 5;
  width: 13.0625rem;
  height: 8.5rem;
  position: absolute;
  top: -6.8rem;
}

`.footer-bg-pattern-w` {
  z-index: -1;
  opacity: 0.12;
  position: absolute;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
}

`.hero-eyebrow-tracker` {
  pointer-events: none;
  width: 1px;
  height: 30vh;
  position: absolute;
  top: auto;
  right: auto;
  bottom: 0px;
  left: 0%;
}

`.hero-rive-tracker` {
  pointer-events: none;
  width: 10px;
  height: 100vh;
  position: absolute;
  top: auto;
  right: auto;
  bottom: 0px;
  left: 0%;
}

`.marquee-gl-rive-target` {
  z-index: 5;
  aspect-ratio: 70 / 50;
  pointer-events: auto;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  width: 70rem;
  max-width: 800px;
  position: relative;
}

`.marquee-gl-rive-w` {
  width: 100%;
  height: 100%;
}

`.base-helmet-rive-w, .callout-rive-w, .callout-socials-rive-w` {
  position: relative;
}

`.home-hero-next-race-w` {
  left: var(--gap);
  top: auto;
  right: auto;
  bottom: var(--gap);
  z-index: 10;
  width: 7.4375rem;
  height: 15.25rem;
  color: var(--color--dark-green-tint-2);
  clip-path: ellipse(100% 120% at 50% 0%);
  position: absolute;
}

`.home-hero-next-race-w.hidden` {
  clip-path: ellipse(100% 0% at 50% 0%);
}

`.home-hero-next-race-outline` {
  z-index: -1;
  position: absolute;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
}

`.home-hero-next-race-top` {
  justify-content: flex-start;
  align-items: flex-start;
  height: 1.3rem;
  display: flex;
  position: relative;
}

`.home-hero-next-race-row` {
  column-gap: calc(var(--gap) * .5);
  row-gap: calc(var(--gap) * .5);
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  height: 6.9rem;
  display: flex;
}

`.home-hero-next-race-row.is-1` {
  column-gap: calc(var(--gap) * .5);
  row-gap: calc(var(--gap) * .5);
  justify-content: flex-start;
  align-items: center;
}

`.home-hero-next-race-line` {
  background-color: currentcolor;
  width: 80%;
  height: 0.0625rem;
  margin-left: auto;
  margin-right: auto;
}

`.home-hero-next-race-rive` {
  width: 5.5rem;
  height: 4.7rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  position: relative;
}

`.home-hero-next-race-rive-w` {
  height: 4.7rem;
  position: relative;
}

`.footer-legal-links-w` {
  justify-content: space-between;
  display: flex;
  position: absolute;
  top: auto;
  right: 0%;
  bottom: 0%;
  left: 0%;
}

`.footer-legal-links-col` {
  column-gap: var(--gap);
  row-gap: var(--gap);
  display: flex;
}

`.title-para-layout` {
  column-gap: calc(var(--gap) * 2);
  row-gap: calc(var(--gap) * 2);
  display: flex;
}

`.title-para-layout.part-i-hero` {
  column-gap: calc(var(--gap) * 4);
  row-gap: calc(var(--gap) * 4);
}

`.btn-rive-w` {
  aspect-ratio: 1 / 1;
  height: 0.78125rem;
  display: flex;
}

`.btn-rive-w.is-large, .btn-rive-w.is-touch-swipe` {
  pointer-events: none;
  height: 1rem;
}

`.css-buttons` {
  width: 0px;
  height: 0px;
  display: none;
  position: fixed;
  top: 0%;
  right: 0%;
  bottom: auto;
  left: 0%;
  overflow-x: hidden;
  overflow-y: hidden;
}

`.nav-rive-w` {
  width: 3.75rem;
  height: 3.75rem;
}

`.base-signature-rive` {
  aspect-ratio: 133 / 72;
  height: 4.5rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  position: relative;
}

`.base-signature-rive.scale` {
  transform: scale(1.3);
}

`.on-track-impact-text-w` {
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  display: flex;
}

`.on-track-impact-reef-rive-w` {
  position: relative;
}

`.on-track-impact-reef-rive` {
  aspect-ratio: 184 / 81;
  width: 11.5rem;
  color: var(--color--lime);
  margin-left: auto;
  margin-right: auto;
  display: flex;
  position: relative;
}

`.on-t-hero-title-w` {
  justify-content: flex-end;
  align-items: center;
  display: flex;
  position: relative;
}

`.text-on-t-hero-heading` {
  font-variation-settings: "wdth" 95, "wght" 700;
  letter-spacing: -0.1875rem;
  text-transform: uppercase;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  font-family: "Mona Sans Variable", Arial, sans-serif;
  font-size: 22.3rem;
  line-height: 0.886;
}

`.on-t-hero-title-rive-w` {
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 16.75rem;
  display: flex;
  position: relative;
}

`.on-t-hero-title-rive` {
  z-index: 10;
  width: 46.0625rem;
  height: 32.75rem;
  transform-style: preserve-3d;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  display: flex;
  position: absolute;
  bottom: -6rem;
  left: -4rem;
}

`.on-t-hero-title-layout` {
  height: 100%;
  padding-bottom: var(--gap);
  flex-direction: column;
  flex-wrap: nowrap;
  display: flex;
}

`.on-t-hero-sub-w` {
  column-gap: var(--gap);
  row-gap: var(--gap);
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 1fr;
  display: grid;
}

`.text-on-t-stat-label-large` {
  font-variation-settings: "wght" 700, "wdth" 75;
  text-transform: uppercase;
  font-size: 2.75rem;
  line-height: 0.97;
}

`.text-on-t-stat-label-large.c-grey-on-track` {
  color: var(--color--grey-on-track);
}

`.text-on-t-stat-label-large.c-green-off-white` {
  color: var(--color--green-off-white-1);
}

`.text-on-t-stat-label-large.c-lime` {
  color: var(--color--lime);
}

`.text-on-t-stat-label-reg` {
  font-variation-settings: "wght" 700, "wdth" 75;
  letter-spacing: -0.00625rem;
  text-transform: uppercase;
  font-size: 2.0625rem;
  line-height: 0.97;
}

`.text-on-t-stat-label-reg.c-grey-on-track` {
  color: var(--color--grey-on-track);
}

`.on-t-hero-sub-col` {
  justify-content: space-between;
  display: flex;
}

`.on-t-hero-sub-col.is-grid` {
  column-gap: 16px;
  row-gap: 16px;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 1fr;
  display: grid;
}

`.on-t-stat-label-flex` {
  column-gap: calc(var(--gap) * .5);
  row-gap: calc(var(--gap) * .5);
  display: flex;
}

`.flag-w` {
  border-top-left-radius: 0.2rem;
  border-top-right-radius: 0.2rem;
  border-bottom-right-radius: 0.2rem;
  border-bottom-left-radius: 0.2rem;
  height: auto;
  display: flex;
}

`.flag-w.is-sm` {
  height: 0.9175rem;
}

`.flag-w.is-sm.is-hero` {
  position: relative;
  top: 0.2rem;
}

`.flag-w.is-md` {
  width: 2.12438rem;
  height: 1.3125rem;
  overflow-x: clip;
  overflow-y: clip;
}

`.flag-w.is-md.is-f1-hl` {
  height: 1.4125rem;
  position: relative;
  top: 0.4rem;
}

`.flag-w.is-md.is-ui` {
  justify-content: flex-start;
  align-items: flex-start;
  width: 2.12438rem;
  height: 1.27438rem;
  position: relative;
  top: -1rem;
  left: 0.4rem;
}

`.on-t-hero-stats-grid` {
  margin-top: auto;
  position: relative;
}

`.on-t-hero-stats-grid.grid-main` {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0%;
  height: 100%;
}

`.on-t-hero-stats-w` {
  column-gap: 16px;
  row-gap: 16px;
  flex-direction: column;
  flex-wrap: nowrap;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 1fr;
  justify-content: flex-end;
  align-items: flex-start;
  display: flex;
}

`.on-t-hero-stats-layout` {
  column-gap: var(--gap);
  row-gap: var(--gap);
  flex-direction: column;
  flex-wrap: nowrap;
  display: flex;
}

`.on-t-hero-stats-para-w` {
  max-width: 41rem;
}

`.on-t-hero-stats-ui-w` {
  height: 15.1875rem;
  margin-top: calc(var(--gap) * 2);
  display: flex;
  position: relative;
}

`.on-t-hero-stats-ui-sec` {
  z-index: 10;
  aspect-ratio: 119 / 244;
  width: 7.4375rem;
  height: 15.25rem;
  color: var(--color--dark-green-tint-1);
  clip-path: ellipse(100% 120% at 50% 0%);
  position: relative;
}

`.on-t-hero-stats-ui-sec1-top` {
  height: 1.3rem;
  color: var(--color--grey-on-track);
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
  position: relative;
}

`.on-t-hero-stats-ui-sec1-top.abs-left-top` {
  position: absolute;
  top: 0%;
  right: auto;
  bottom: auto;
  left: 0%;
}

`.on-t-hero-stats-ui-sec1-top.abs-left-top.is-gap` {
  left: var(--gap);
  top: var(--gap);
}

`.on-t-hero-stats-ui-sec1-row` {
  height: 6.9rem;
  color: var(--color--white);
  column-gap: calc(var(--gap) * .5);
  row-gap: calc(var(--gap) * .5);
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  display: flex;
}

`.on-t-hero-stats-ui-sec1-row.is-1` {
  column-gap: calc(var(--gap) * .5);
  row-gap: calc(var(--gap) * .5);
  justify-content: flex-start;
  align-items: center;
}

`.on-t-hero-stats-ui-img-fill` {
  background-image: url("https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d864ec2ce7efa1414e36a6_ln4-ui-pattern.webp");
  background-position-x: 50%;
  background-position-y: center;
  background-repeat: no-repeat;
  background-size: auto 130%;
  position: relative;
}

`.on-t-hero-stats-ui-img-fill.is-1` {
  width: var(--gap);
  border-top-width: ;
  border-top-style: ;
  border-top-color: ;
  border-bottom-width: ;
  border-bottom-style: ;
  border-bottom-color: ;
}

`.on-t-hero-stats-ui-img-fill.is-2` {
  z-index: -1;
  border-right-width: ;
  border-right-style: ;
  border-right-color: ;
  background-size: 220%;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
}

`.on-t-hero-stats-ui-img-fill.is-3` {
  width: var(--gap);
  border-top-width: ;
  border-top-style: ;
  border-top-color: ;
  border-right-width: ;
  border-right-style: ;
  border-right-color: ;
  border-bottom-width: ;
  border-bottom-style: ;
  border-bottom-color: ;
  border-top-right-radius: 0.375rem;
  border-bottom-right-radius: 0.375rem;
}

`.on-t-hero-stats-ui-box1-w` {
  width: 17.2188rem;
  margin-left: var(--gap);
  aspect-ratio: 275.5 / 244;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  display: flex;
  position: relative;
}

`.on-t-hero-stats-ui-box1-frame` {
  z-index: 2;
  pointer-events: none;
  color: var(--color--dark-green-tint-1);
  display: flex;
  position: absolute;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
}

`.on-t-hero-stats-ui-box1-layout` {
  width: 100%;
  height: 100%;
  position: absolute;
}

`.css-home, .css-on-track` {
  width: 0px;
  height: 0px;
  display: none;
  position: fixed;
  top: 0%;
  right: 0%;
  bottom: auto;
  left: 0%;
  overflow-x: hidden;
  overflow-y: hidden;
}

`.on-t-hero-stats-ui-box1-row` {
  border-bottom-width: ;
  border-bottom-style: ;
  border-bottom-color: ;
  width: 100%;
  height: 7.5rem;
  display: flex;
}

`.on-t-hero-stats-ui-box1-row.is-2` {
  column-gap: var(--gap);
  row-gap: var(--gap);
  justify-content: center;
  align-items: center;
  height: calc(100% - 7.5rem);
}

`.on-t-hero-stats-ui-box1-item.is-1` {
  justify-content: center;
  align-items: center;
  width: 8.7rem;
  padding-top: 0.8rem;
  display: flex;
  position: relative;
  overflow-x: clip;
  overflow-y: clip;
}

`.on-t-hero-stats-ui-box1-item.is-2` {
  column-gap: calc(var(--gap) * .5);
  row-gap: calc(var(--gap) * .5);
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  width: 8.7rem;
  display: flex;
  overflow-x: clip;
  overflow-y: clip;
}

`.text-on-t-stat-label-major` {
  font-variation-settings: "wght" 700, "wdth" 75;
  text-transform: uppercase;
  font-size: 4.375rem;
  line-height: 0.93;
}

`.text-on-t-stat-label-major.c-lime` {
  color: var(--color--lime);
}

`.text-on-t-stat-label-major.c-green-off-white-1` {
  color: var(--color--green-off-white-1);
}

`.on-t-hero-stats-ui-box2-w` {
  border-top-color: ;
  border-top-style: ;
  border-top-width: ;
  border-right-color: ;
  border-right-style: ;
  border-right-width: ;
  border-bottom-color: ;
  border-bottom-style: ;
  border-bottom-width: ;
  border-left-color: ;
  border-left-style: ;
  border-left-width: ;
  border-image-source: ;
  border-image-slice: ;
  border-image-width: ;
  border-image-outset: ;
  border-image-repeat: ;
  width: 24rem;
  height: 100%;
  display: flex;
  position: relative;
}

`.on-t-hero-stats-ui-box2-col-1` {
  column-gap: var(--gap);
  row-gap: var(--gap);
  border-right-width: ;
  border-right-style: ;
  border-right-color: ;
  flex-direction: column;
  flex-wrap: nowrap;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  justify-content: center;
  align-items: center;
  width: 16.1875rem;
  display: flex;
}

`.on-t-hero-stats-ui-box2-col-1.is-alt` {
  width: 12rem;
}

`.on-t-hero-stats-ui-box2-rive-w` {
  width: 80%;
  height: 60%;
  position: relative;
}

`.on-t-hero-stats-ui-box2-rive` {
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  position: relative;
}

`.on-t-hero-stats-ui-box2-col-1-flag` {
  column-gap: var(--gap);
  row-gap: var(--gap);
  display: flex;
}

`.on-t-hero-stats-ui-box2-col-1-flag.is-alt` {
  text-align: center;
}

`.on-t-hero-stats-ui-box2-col-2` {
  width: 100%;
}

`.on-t-hero-stats-ui-box2-col-2-row` {
  justify-content: center;
  align-items: center;
  display: flex;
}

`.on-t-hero-stats-ui-box2-col-2-row.is-1` {
  border-bottom-width: ;
  border-bottom-style: ;
  border-bottom-color: ;
  height: 60%;
  color: var(--color--lime);
}

`.on-t-hero-stats-ui-box2-col-2-row.is-2` {
  height: 40%;
}

`.on-t-hero-stats-ui-box2-col-2-svg` {
  height: 3.125rem;
  display: flex;
}

`.text-on-t-stat-label-gigantic` {
  font-variation-settings: "wght" 700, "wdth" 75;
  text-transform: uppercase;
  font-size: 122rem;
  line-height: 0.85;
}

`.text-on-t-stat-label-gigantic.is-flex` {
  display: flex;
}

`.text-on-t-stat-label-gigantic.is-flex:where(.w-variant-cd6da4a0-6006-84fd-f49b-7e29ea7757c3)` {
  font-size: 114rem;
}

`.on-t-podium-text-layout` {
  column-gap: 0px;
  row-gap: 0px;
  pointer-events: auto;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 1fr;
  justify-content: flex-start;
  align-items: flex-end;
  display: grid;
  position: relative;
}

`.on-t-podium-text-col` {
  flex-direction: column;
  flex-wrap: nowrap;
  padding-bottom: 4.5rem;
  display: flex;
  position: absolute;
  top: auto;
  left: auto;
  right: 0%;
}

`.text-on-t-large-number` {
  font-variation-settings: "wght" 700, "wdth" 75;
  letter-spacing: -0.1rem;
  text-transform: uppercase;
  font-size: 17.5rem;
  line-height: 0.8;
}

`.text-on-t-large-number.is-podium` {
  font-variation-settings: "wght" 693, "wdth" 75;
  letter-spacing: -0.225rem;
}

`.text-on-t-large-number.unit` {
  color: var(--color--dark-green-tint-2);
}

`.text-on-t-large-number.seconds` {
  width: 16rem;
}

`.text-on-t-large-number.fixed-width` {
  width: 8.1rem;
}

`.text-on-t-large-number.fixed-width.double-digit` {
  width: 14rem;
}

`.f1-car-stats-grid` {
  column-gap: var(--gap);
  row-gap: calc(var(--gap) * 6);
  grid-template-rows: auto auto;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 1fr;
  display: grid;
}

`.f1-car-stats-item` {
  column-gap: var(--gap);
  row-gap: var(--gap);
  flex-direction: column;
  flex-wrap: nowrap;
  display: flex;
}

`.text-descriptor` {
  font-variation-settings: "wght" 800, "wdth" 87.5;
  letter-spacing: 0px;
  text-transform: uppercase;
  font-family: "Mona Sans Variable", Arial, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 0.97;
}

`.text-descriptor.c-grey-on-track` {
  color: var(--color--grey-on-track);
}

`.text-descriptor.is-stat-offset` {
  color: var(--color--grey-on-track);
  position: relative;
  top: 0.1rem;
  left: 0.1rem;
}

`.f1-car-stats-large-num-w` {
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
}

`.f1-car-stats-large-num-w.flex-top` {
  column-gap: calc(var(--gap) * .25);
  row-gap: calc(var(--gap) * .25);
  justify-content: flex-start;
  align-items: flex-start;
}

`.f1-car-stats-win-rive` {
  aspect-ratio: 1 / 1;
  pointer-events: none;
  width: 13.5625rem;
  transform-style: preserve-3d;
  display: flex;
  position: absolute;
}

`.f1-car-stat-label-w` {
  display: flex;
  position: relative;
  top: 0.8rem;
}

`.f1-highlight-collection` {
  pointer-events: auto;
  margin-top: calc(var(--gap) * 2);
  position: relative;
}

`.f1-highlight-list` {
  flex-direction: column;
  flex-wrap: nowrap;
  display: flex;
  position: relative;
}

`.f1-highlight-grid` {
  padding-right: var(--padding--container);
  padding-left: var(--padding--container);
  column-gap: var(--gap);
  row-gap: var(--gap);
  border-top-style: none;
  border-top-width: 1px;
  border-top-color: var(--color--dark-green);
  padding-top: calc(var(--gap) * .5);
  padding-bottom: calc(var(--gap) * .5);
  grid-template-rows: auto;
  grid-template-columns: 11.775% 35.325% 23.55% 1fr 1fr;
  grid-auto-columns: 1fr;
  display: grid;
  position: relative;
}

`.f1-highlight-grid:hover` {
  background-color: var(--color--lime);
  color: var(--color--black);
}

`.f1-highlight-grid.top` {
  border-top-style: none;
}

`.f1-highlight-grid.top:hover` {
  background-color: var(--color--lime-zero);
}

`.f1-highlight-grid.top.dropdown-top` {
  margin-bottom: var(--gap);
}

`.f1-highlight-grid.top.dropdown-item` {
  padding-top: calc(var(--gap) * 1.5);
}

`.f1-highlight-grid.is-schedule` {
  cursor: pointer;
}

`.f1-highlight-grid.is-schedule:hover` {
  background-color: var(--color--dark-green);
  color: var(--color--lime);
}

`.f1-highlight-grid.is-previous.is-history:hover` {
  color: var(--color--white);
  background-color: rgba(0, 0, 0, 0);
}

`.f1-highlight-grid.is-active` {
  background-color: var(--color--dark-green);
}

`.f1-highlight-grid-item` {
  column-gap: calc(var(--gap) * .5);
  row-gap: calc(var(--gap) * .5);
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
  position: relative;
}

`.text-on-t-stat-label-sm` {
  font-variation-settings: "wght" 700, "wdth" 75;
  text-transform: uppercase;
  font-size: 1.5rem;
  line-height: 1;
}

`.text-on-t-stat-label-sm.c-grey-on-track` {
  color: var(--color--grey-on-track);
}

`.text-on-t-stat-label-sm.c-lime` {
  color: var(--color--lime);
}

`.text-on-t-stat-label-sm.is-super` {
  position: relative;
  top: 0.4rem;
  right: -0.2rem;
}

`.text-on-t-stat-label-sm.c-green-off-white` {
  color: var(--color--green-off-white-1);
}

`.text-on-t-stat-label-sm.c-green-off-white.calendar` {
  position: relative;
  bottom: 0.2rem;
}

`.f1-highlight-grid-item-text-layout` {
  column-gap: calc(var(--gap) * .25);
  row-gap: calc(var(--gap) * .25);
  display: flex;
  position: relative;
}

`.f1-highlight-grid-item-text-layout.is-gap` {
  justify-content: flex-start;
  align-items: flex-end;
}

`.f1-highlight-trophy-w` {
  aspect-ratio: 1 / 1;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  display: flex;
  position: absolute;
  top: 0%;
  right: auto;
  bottom: auto;
  left: -5.6rem;
}

`.f1-highlight-trophy-w.is-grey` {
  filter: saturate(0%);
}

`.f1-highlight-trophy-w.is-bronze` {
  filter: saturate(69%) hue-rotate(295deg);
}

`.f1-car-img-w` {
  aspect-ratio: 407 / 457;
  height: 28.5625rem;
  overflow-x: clip;
  overflow-y: clip;
}

`.f1-car-img-w.mobile` {
  display: none;
}

`.pre-f1-car-stats-grid` {
  column-gap: var(--gap);
  row-gap: calc(var(--gap) * 2);
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 1fr;
  display: grid;
}

`.pre-f1-car-stats-item` {
  column-gap: var(--gap);
  row-gap: var(--gap);
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

`.icon-svg-closed-reef` {
  display: flex;
}

`.icon-svg-closed-reef.pre-f1-car` {
  aspect-ratio: 1 / 1;
  height: 3.75rem;
  color: var(--color--lime);
  position: absolute;
  transform: translate(-5.25rem);
}

`.icon-svg-closed-reef.pre-f1-car.c-grey-on-track` {
  color: var(--color--grey-on-track);
}

`.icon-svg-closed-reef.pre-f1-car.is-2nd` {
  display: none;
}

`.icon-svg-closed-reef.pre-f1-car.is-2nd:where(.w-variant-cd124f6d-02a9-fb35-f3d6-11ada301c998)` {
  display: block;
}

`.icon-svg-closed-reef.pre-f1-car.is-2nd.is-history` {
  display: block;
  transform: none;
}

`.icon-svg-closed-reef.pre-f1-car.is-1st:where(.w-variant-cd124f6d-02a9-fb35-f3d6-11ada301c998), .icon-svg-closed-reef.pre-f1-car.is-1st:where(.w-variant-24b16bae-afa4-935a-2df9-9e3aa096f5f9)` {
  display: none;
}

`.icon-svg-closed-reef.pre-f1-car.is-1st.is-history` {
  transform: none;
}

`.pre-f1-car-stats-text-w` {
  column-gap: calc(var(--gap) * .5);
  row-gap: calc(var(--gap) * .5);
  flex-direction: column;
  flex-wrap: nowrap;
  max-width: 12rem;
  display: flex;
}

`.on-t-countdown-inner` {
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  display: flex;
}

`.on-t-countdown-track-rive-w` {
  position: relative;
}

`.on-t-countdown-eyebrow-layout` {
  z-index: 5;
  column-gap: var(--gap);
  row-gap: var(--gap);
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  display: flex;
  position: relative;
}

`.on-t-countdown-digits-w` {
  column-gap: var(--gap);
  row-gap: var(--gap);
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-columns: 1fr;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin-top: 4rem;
  display: flex;
  position: relative;
}

`.on-t-countdown-digits-item` {
  color: var(--color--green-off-white-1);
  display: flex;
}

`.on-t-countdown-phrase-rive-w` {
  z-index: 5;
  justify-content: center;
  align-items: center;
  display: flex;
  position: absolute;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
}

`.on-t-countdown-phrase-rive` {
  pointer-events: none;
  width: 57rem;
  height: 35.125rem;
  position: relative;
  transform: none;
}

`.calendar-track-w` {
  z-index: 5;
  margin-bottom: calc(var(--gap) * 2);
  position: relative;
}

`.calendar-track-mask` {
  aspect-ratio: 1867.5 / 917.5;
  width: 100%;
  position: relative;
}

`.ln-calendar-track-frame` {
  z-index: 5;
  pointer-events: none;
  color: var(--color--lime);
  position: relative;
}

`.calendar-track-title-w` {
  z-index: 5;
  width: 4.7rem;
  min-height: 29.3rem;
  position: absolute;
  top: 0%;
  right: auto;
  bottom: auto;
  left: 0%;
}

`.calendar-track-frame-segment` {
  position: absolute;
  top: auto;
  right: 0%;
  bottom: -7.4rem;
  left: auto;
}

`.calendar-track-title-layout` {
  z-index: 5;
  column-gap: var(--gap);
  row-gap: var(--gap);
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
  position: relative;
}

`.calendar-f1-logo` {
  left: var(--gap);
  top: auto;
  right: auto;
  bottom: var(--gap);
  z-index: 5;
  position: absolute;
}

`.calendar-f1-logo-svg` {
  width: 6.75rem;
  height: 1.6875rem;
  display: flex;
}

`.calendar-track-controls-w` {
  column-gap: calc(var(--gap) * .5);
  row-gap: calc(var(--gap) * .5);
  flex-direction: column;
  flex-wrap: nowrap;
  display: flex;
  position: absolute;
  top: auto;
  right: 0%;
  bottom: 0%;
  left: auto;
}

`.calendar-track-info-pos` {
  z-index: 10;
  height: auto;
  padding-top: var(--gap);
  padding-right: var(--gap);
  padding-left: var(--gap);
  width: calc(100% - 4.6rem);
  position: absolute;
  top: 0%;
  right: 0%;
  bottom: auto;
  left: auto;
}

`.calendar-track-info-layout` {
  pointer-events: none;
  justify-content: space-between;
  display: flex;
}

`.calendar-track-info-item` {
  pointer-events: auto;
  column-gap: calc(var(--gap) * .5);
  row-gap: calc(var(--gap) * .5);
  flex-direction: column;
  flex-wrap: nowrap;
  min-width: 11rem;
  display: flex;
}

`.calendar-track-info-item.hero` {
  min-width: auto;
}

`.calendar-track-info-left-w` {
  pointer-events: none;
  display: flex;
}

`.calendar-track-info-left-row` {
  column-gap: calc(var(--gap) * .5);
  row-gap: calc(var(--gap) * .5);
  justify-content: flex-start;
  align-items: flex-end;
  display: flex;
}

`.calendar-track-info-left-row.is-mh` {
  justify-content: flex-start;
  align-items: flex-start;
  min-height: 4rem;
}

`.calendar-track-info-col` {
  flex-direction: column;
  flex-wrap: nowrap;
  display: flex;
}

`.calendar-track-info-left-group` {
  min-width: 10rem;
  margin-right: var(--gap);
  column-gap: var(--gap);
  row-gap: var(--gap);
  flex-direction: column;
  flex-wrap: nowrap;
  display: flex;
}

`.calendar-track-info-right-w` {
  column-gap: calc(var(--gap) * 2);
  row-gap: calc(var(--gap) * 2);
  flex-direction: column;
  flex-wrap: nowrap;
  width: 100%;
  max-width: 21.0625rem;
  display: flex;
}

`.text-body-sm-mona` {
  letter-spacing: -0.0125rem;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.3;
}

`.text-body-sm-mona-bold` {
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.3;
}

`.text-body-sm-mona-bold.c-lime-off` {
  color: var(--color--lime-off);
}

`.calendar-track-info-right-item` {
  pointer-events: auto;
  column-gap: calc(var(--gap) * .5);
  row-gap: calc(var(--gap) * .5);
  flex-direction: column;
  flex-wrap: nowrap;
  display: flex;
}

`.calendar-track-schedule-row` {
  column-gap: 16px;
  row-gap: 16px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: rgba(244, 244, 237, 0.09);
  grid-template-rows: auto;
  grid-template-columns: minmax(0px, 2fr) minmax(0px, 1fr) minmax(0px, 1fr);
  grid-auto-columns: 1fr;
  margin-bottom: 0.3rem;
  padding-bottom: 0.3rem;
  display: grid;
}

`.calendar-track-schedule-row.race` {
  color: var(--color--lime);
  grid-template-columns: minmax(0px, 2fr) minmax(0px, 1fr) minmax(0px, 1fr);
}

`.calendar-track-schedule-row.last` {
  padding-top: calc(var(--gap) * .5);
  border-bottom-style: none;
}

`.calendar-track-schedule-row.is-top` {
  margin-bottom: 0px;
}

`.calendar-schedule-standings-w` {
  column-gap: 6rem;
  row-gap: 6rem;
  display: flex;
}

`.f1-highlight-grid-line` {
  background-color: var(--color--dark-green);
  height: 1px;
  width: calc(100% - calc(var(--gap) * 2));
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  top: 0%;
  right: 0%;
  bottom: auto;
  left: 0%;
}

`.f1-highlight-mouse-over-w` {
  z-index: 10;
  pointer-events: auto;
  width: 20.6rem;
  height: 24.6rem;
  position: absolute;
  top: 0%;
  right: auto;
  bottom: auto;
  left: 0%;
}

`.f1-highlight-mouse-over-w.is-circuits` {
  width: 16.6875rem;
  height: 16rem;
}

`.f1-highlight-mouse-over-reveal` {
  z-index: 2;
  background-color: var(--color--lime);
  opacity: 0;
  position: absolute;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
}

`.menu-img-no-blend` {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

`.menu-img-no-blend.is-2` {
  background-image: url("https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d963fb414eee985ba72cb6_pre-f1-car-img.webp");
}

`.nav-menu-img-w` {
  clip-path: ellipse(120% 100% at 50% 20%);
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  width: 23rem;
  height: 25rem;
  position: relative;
}

`.menu-img-blends-w` {
  z-index: 5;
  width: 100%;
  height: 100%;
  position: relative;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
}

`.menu-img-blend-3` {
  opacity: 0.4;
  background-color: rgb(52, 58, 38);
  position: absolute;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
}

`.menu-img-blend-2` {
  mix-blend-mode: plus-lighter;
  background-color: rgb(40, 44, 32);
  position: absolute;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
}

`.menu-img-blend-1` {
  mix-blend-mode: saturation;
  background-color: rgb(0, 0, 0);
  position: absolute;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
}

`.menu-img-top` {
  z-index: 10;
  opacity: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
}

`.menu-img-top.is-2` {
  background-image: url("https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d963fb414eee985ba72cb6_pre-f1-car-img.webp");
}

`.nav-menu-w` {
  z-index: 25;
  background-color: var(--color--dark-green);
  pointer-events: auto;
  width: 100vw;
  color: var(--color--white);
  height: calc(var(--vh, 1vh) * 100);
  clip-path: ellipse(120% 100% at 50% 20%);
  justify-content: center;
  align-items: center;
  display: none;
  position: fixed;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  overflow-x: clip;
  overflow-y: clip;
}

`.nav-menu-inner` {
  height: 100%;
  padding-top: 1.25rem;
  padding-right: 1.25rem;
  padding-bottom: 1.25rem;
  padding-left: 1.25rem;
  display: flex;
}

`.nav-menu-inner.c` {
  justify-content: center;
  align-items: center;
  max-height: 80rem;
  margin-top: auto;
  margin-bottom: auto;
  padding-top: 2.5rem;
  padding-bottom: 2rem;
}

`.nav-menu-grid` {
  column-gap: var(--gap);
  row-gap: var(--gap);
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 1fr;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding-left: 2.25rem;
  padding-right: 8rem;
  display: flex;
}

`.nav-menu-links-w` {
  text-align: center;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  display: flex;
}

`.nav-menu-links-list` {
  color: var(--color--green-off-white-1);
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  display: flex;
}

`.nav-menu-links-col` {
  column-gap: calc(var(--gap) * 2);
  row-gap: calc(var(--gap) * 2);
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  display: flex;
}

`.nav-menu-link-w` {
  cursor: pointer;
  position: relative;
  overflow-x: clip;
  overflow-y: clip;
}

`.nav-menu-link-w:hover` {
  color: var(--color--lime-off);
}

`.nav-menu-link-w.w--current` {
  pointer-events: none;
  color: var(--color--green-off-white-2);
  cursor: auto;
}

`.text-nav-link` {
  font-variation-settings: "wght" 660, "wdth" 93;
  text-transform: uppercase;
  text-shadow: 0px 5.25rem;
  font-size: 5.25rem;
  line-height: 0.94;
  transition-property: color;
  transition-duration: 0.6s;
  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
}

`.nav-menu-social-w` {
  column-gap: var(--padding--small);
  row-gap: var(--padding--small);
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  display: flex;
}

`.nav-helmet-rive-w` {
  color: var(--color--green-off-white-2);
  column-gap: var(--gap);
  row-gap: var(--gap);
  flex-direction: column;
  flex-wrap: nowrap;
  display: flex;
  position: relative;
}

`.nav-menu-images-w` {
  max-height: 100%;
  height: calc(calc(var(--vh, 1vh) * 100)  - var(--gap) * 2);
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
  position: relative;
}

`.nav-menu-images-track` {
  column-gap: calc(var(--gap) * 3);
  row-gap: calc(var(--gap) * 3);
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  max-height: 100%;
  display: flex;
}

`.nav-menu-images-col` {
  column-gap: calc(var(--gap) * 3);
  row-gap: calc(var(--gap) * 3);
  flex-direction: column;
  flex-wrap: nowrap;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  justify-content: center;
  align-items: center;
  height: auto;
  display: flex;
}

`.nav-menu-spacer` {
  height: 1.25rem;
}

`.f1-highlight-circuit-rive-w` {
  justify-content: center;
  align-items: center;
  width: 16.6875rem;
  height: 16rem;
  display: flex;
}

`.f1-highlight-circuit-rive-bg` {
  position: absolute;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
}

`.f1-highlight-circuit-rive` {
  z-index: 10;
  width: 11.5rem;
  height: 11.5rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  position: relative;
}

`.nav-menu-bg` {
  z-index: -1;
  opacity: 0.12;
  background-image: url("https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67dbeb1e708b818bc15a8d17_blobs_nav.svg");
  background-position-x: 50%;
  background-position-y: center;
  background-repeat: repeat-x;
  background-size: auto 170%;
  position: absolute;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
}

`.nav-menu-link-current-svg` {
  z-index: 5;
  color: var(--color--lime);
  position: absolute;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
}

`.text-on-t-hero-heading-mona` {
  font-family: Brier, Arial, sans-serif;
  font-size: 23.6438rem;
}

`.text-on-t-hero-heading-mona.margin` {
  margin-right: 0.4rem;
  font-size: 23.2rem;
}

`.off-t-hero-title-w` {
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
}

`.off-t-hero-sub-w` {
  column-gap: var(--gap);
  row-gap: var(--gap);
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 1fr;
  display: grid;
}

`.off-track-hero-signature-rive` {
  aspect-ratio: 133 / 72;
  height: 4.5rem;
  margin-right: auto;
  display: flex;
  position: relative;
}

`.off-track-hero-signature-rive.scale` {
  transform: scale(1.3);
}

`.off-t-hero-stats-layout` {
  column-gap: var(--gap);
  row-gap: var(--gap);
  flex-direction: column;
  flex-wrap: nowrap;
  display: flex;
}

`.off-t-hero-stats-grid` {
  margin-top: auto;
  position: relative;
}

`.off-t-hero-stats-grid.grid-main` {
  row-gap: var(--gap);
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0%;
  height: 100%;
}

`.off-t-hero-title-layout` {
  height: 100%;
  padding-bottom: var(--gap);
  flex-direction: column;
  flex-wrap: nowrap;
  display: flex;
}

`.off-t-hero-stats-w` {
  column-gap: 16px;
  row-gap: 16px;
  flex-direction: column;
  flex-wrap: nowrap;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 1fr;
  justify-content: flex-end;
  align-items: flex-start;
  display: flex;
}

`.off-t-hero-sub-para-w.grid-main` {
  grid-template-columns: 47.1% 47.1%;
}

`.off-t-hero-sub-para-mw` {
  max-width: 16.375rem;
}

`.css-tracks` {
  width: 0px;
  height: 0px;
  display: none;
  position: fixed;
  top: 0%;
  right: 0%;
  bottom: auto;
  left: 0%;
  overflow-x: hidden;
  overflow-y: hidden;
}

`.off-t-hero-img-slot` {
  position: relative;
  right: -1rem;
}

`.off-t-hero-img` {
  background-image: url("https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67dc366b25025ea1a39995c4_ln4-off-t-hero-img.webp");
  background-position-x: 50%;
  background-position-y: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 52.125rem;
  height: 60rem;
  position: absolute;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
}

`.impact-text-w` {
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
}

`.impact-text-w.is-off-track, .impact-text-w.is-partnership` {
  color: var(--color--dark-green);
}

`.css-off-track` {
  width: 0px;
  height: 0px;
  display: none;
  position: fixed;
  top: 0%;
  right: 0%;
  bottom: auto;
  left: 0%;
  overflow-x: hidden;
  overflow-y: hidden;
}

`.off-t-camp-hero-layout` {
  column-gap: var(--gap);
  row-gap: var(--gap);
  display: flex;
  position: relative;
}

`.off-t-camp-hero-item` {
  background-color: var(--color--lime-off);
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  justify-content: center;
  align-items: center;
  width: 52.125rem;
  height: 45.3125rem;
  display: flex;
  position: relative;
}

`.camp-list` {
  column-gap: var(--gap);
  row-gap: var(--gap);
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: rgba(40, 44, 32, 0.15);
  flex-direction: column;
  flex-wrap: nowrap;
  display: flex;
}

`.camp-list.is-next` {
  border-bottom-style: none;
}

`.camp-item` {
  padding-top: var(--gap);
  padding-bottom: var(--gap);
  column-gap: var(--gap);
  row-gap: var(--gap);
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: rgba(40, 44, 32, 0.15);
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-columns: 1fr;
  display: grid;
}

`.camp-item-img-w` {
  aspect-ratio: 407 / 411;
  width: 100%;
  position: relative;
}

`.camp-info-grid` {
  column-gap: var(--gap);
  row-gap: var(--gap);
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 1fr;
  display: grid;
}

`.camp-info-col` {
  column-gap: calc(var(--gap) * 2);
  row-gap: calc(var(--gap) * 2);
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

`.off-t-impact-img-pos` {
  z-index: 10;
  width: 22rem;
  height: 25rem;
  position: absolute;
  transform: translate(0px, 10rem);
}

`.f1-highlight-schedule-w` {
  position: relative;
}

`.f1-highlight-schedule-grad` {
  background-image: linear-gradient(180deg, #11111200, #111112c9 58%, var(--color--black));
  pointer-events: none;
  justify-content: center;
  align-items: flex-end;
  height: 20rem;
  display: flex;
  position: absolute;
  top: auto;
  right: 0%;
  bottom: 0%;
  left: 0%;
}

`.off-t-camp-rive-w` {
  z-index: 1;
  aspect-ratio: 1575 / 1177.16;
  pointer-events: none;
  width: 100%;
  position: absolute;
  top: auto;
  right: 0%;
  bottom: -11.4rem;
  left: -5rem;
}

`.off-t-impact-img-pos2` {
  aspect-ratio: 9 / 10;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  width: 7rem;
  height: auto;
  position: absolute;
}

`.off-t-hero-img-w` {
  justify-content: center;
  align-items: center;
  width: 52.125rem;
  height: 60rem;
  display: flex;
  position: absolute;
  top: -12rem;
  right: auto;
  bottom: auto;
  left: 0%;
}

`.page-ln4-w` {
  pointer-events: auto;
  color: var(--color--dark-green);
  column-gap: var(--gap);
  row-gap: var(--gap);
  justify-content: center;
  align-items: center;
  display: flex;
}

`.page-ln4-svg` {
  color: currentcolor;
  width: 2.75rem;
  height: 2.75rem;
}

`.off-t-hero-scroll-meda-w` {
  column-gap: var(--gap);
  row-gap: var(--gap);
  flex-direction: column;
  flex-wrap: nowrap;
  margin-top: 14rem;
  display: none;
}

`.off-t-hero-scroll-meda` {
  column-gap: var(--gap);
  row-gap: var(--gap);
  flex-direction: row;
  flex-wrap: wrap;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-auto-columns: 1fr;
  display: grid;
}

`.sticky-track-theme-change` {
  height: calc(var(--vh, 1vh) * 10);
  top: auto;
  left: 0%;
  right: auto;
  bottom: calc(calc(var(--vh, 1vh) * 10) * -1);
  position: absolute;
}

`.helmet-nav-theme-target` {
  height: 100vh;
  position: absolute;
  top: auto;
  right: auto;
  bottom: 0%;
  left: 0%;
}

`.transition-w` {
  z-index: 9999;
  background-color: var(--color--lime);
  pointer-events: auto;
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
  justify-content: center;
  align-items: flex-end;
  display: none;
  position: fixed;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
}

`.transition-rive` {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
}

`.transition-btn` {
  bottom: var(--gap);
  z-index: 10;
  position: relative;
}

`.js__embed` {
  display: none;
}

`.partnerships-hero-layout` {
  text-align: center;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  display: flex;
}

`.partnerships-t-camp-rive-w` {
  z-index: 1;
  aspect-ratio: 1575 / 1177.16;
  pointer-events: none;
  width: 80rem;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  top: -20rem;
  right: 0%;
  bottom: auto;
  left: 0%;
  transform: none;
}

`.partnerships-hero-title-w` {
  z-index: 20;
  position: relative;
}

`.partnership-i-hero-layout` {
  column-gap: var(--gap);
  row-gap: var(--gap);
  text-align: left;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

`.partnership-i-camp-rive-w` {
  z-index: 1;
  aspect-ratio: 1575 / 1177.16;
  pointer-events: none;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  top: auto;
  right: 0%;
  bottom: auto;
  left: 0%;
  transform: none;
}

`.part-i-hero-eyebrow-col, .part-i-hero-eyebrow-w` {
  display: flex;
}

`.part-i-partner-logo-hero` {
  max-height: 3rem;
}

`.part-i-video-layout` {
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
}

`.part-i-video-w` {
  z-index: 10;
  aspect-ratio: 68.25 / 36.5625;
  background-image: url("https://d3e54v103j8qbb.cloudfront.net/img/background-image.svg");
  background-position-x: 50%;
  background-position-y: center;
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: center;
  align-items: center;
  height: 36.5625rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  position: relative;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
}

`.part-i-video-ui-w` {
  z-index: 20;
  position: relative;
}

`.css-partnerships` {
  width: 0px;
  height: 0px;
  display: none;
  position: fixed;
  top: 0%;
  right: 0%;
  bottom: auto;
  left: 0%;
  overflow-x: hidden;
  overflow-y: hidden;
}

`.part-i-rich-text.is-impact` {
  justify-content: center;
  align-items: flex-start;
  display: block;
}

`.empty-state` {
  color: var(--color--white);
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
}

`.empty-state.text-body-sm-mona` {
  background-color: var(--color--grey-1);
  text-align: center;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
}

`.on-t-stat-dash-item` {
  column-gap: var(--gap);
  row-gap: var(--gap);
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 1fr;
  justify-content: flex-start;
  align-items: center;
  display: flex;
}

`.on-t-stat-dash-list` {
  column-gap: var(--gap);
  row-gap: var(--gap);
  flex-direction: row;
  flex-wrap: nowrap;
  display: flex;
}

`.on-t-stat-dash-w` {
  column-gap: var(--gap);
  row-gap: var(--gap);
  flex-direction: column;
  flex-wrap: nowrap;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-columns: 1fr;
  display: grid;
}

`.on-t-hero-stats-ui-box2-ix-list, .on-t-hero-stats-ui-box2-ix-item` {
  height: 100%;
}

`.on-t-stat-dash-list-stats` {
  column-gap: calc(var(--gap) * .25);
  row-gap: calc(var(--gap) * .25);
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

`.f1-highlight-collection-w` {
  pointer-events: none;
  position: relative;
}

`.on-t-stat-track-dash-stats` {
  column-gap: calc(var(--gap) * .25);
  row-gap: calc(var(--gap) * .25);
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  display: none;
}

`.on-track-inner-w` {
  z-index: 3;
  position: relative;
}

`.calendar-track-gl-target` {
  z-index: 0;
  position: absolute;
  top: 20%;
  right: 5%;
  bottom: 0%;
  left: 5%;
}

`.empty-div` {
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`.flag-img` {
  aspect-ratio: 33.99 / 20.39;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  width: 100%;
  height: 100%;
}

`.on-t-impact-text-inner` {
  justify-content: center;
  align-items: center;
  display: flex;
}

`.on-t-helm-scroll-pos2` {
  width: 32rem;
  height: 27.625rem;
  position: absolute;
  transform: translate(0px, -13rem);
}

`.on-t-helm-scroll-pos1` {
  pointer-events: auto;
  width: 77.5625rem;
  height: 66rem;
  position: absolute;
  top: -14rem;
  right: auto;
  bottom: auto;
  left: -29rem;
}

`.on-t-helm-scroll-object` {
  pointer-events: none;
  width: 100%;
  height: 100%;
  position: absolute;
}

`.on-t-helm-scroll-pos3` {
  z-index: 10;
  position: absolute;
  top: 0%;
  right: 20%;
  bottom: 0%;
  left: 20%;
  transform: translate(0px, -1rem);
}

`.text-clip-w` {
  clip-path: polygon(0px -2%, 0px 94%, 100% 94%, 100% -2%);
}

`.f1-car-stat-past-w` {
  column-gap: var(--gap);
  row-gap: var(--gap);
  flex-direction: column;
  flex-wrap: nowrap;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-columns: 1fr;
  display: flex;
}

`.f1-car-stat-past-grid` {
  column-gap: var(--gap);
  row-gap: var(--gap);
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-columns: 1fr;
  display: grid;
}

`.f1-car-stat-past-grid-item` {
  column-gap: var(--gap);
  row-gap: var(--gap);
  flex-direction: column;
  flex-wrap: nowrap;
  display: flex;
}

`.f1-car-stat-past-grid-text-w` {
  column-gap: calc(var(--gap) * .1);
  row-gap: calc(var(--gap) * .1);
  display: flex;
}

`.body-utility` {
  background-color: var(--color--black);
}

`.input` {
  background-color: var(--color--green-light);
  color: var(--color--dark-green);
  border-top-left-radius: 0.6rem;
  border-top-right-radius: 0.6rem;
  border-bottom-right-radius: 0.6rem;
  border-bottom-left-radius: 0.6rem;
  font-size: 1.2rem;
  font-weight: 500;
}

`.input.center` {
  border-top-style: solid;
  border-top-width: 1px;
  border-top-color: var(--color--lime-off);
  border-right-style: solid;
  border-right-width: 1px;
  border-right-color: var(--color--lime-off);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: var(--color--lime-off);
  border-left-style: solid;
  border-left-width: 1px;
  border-left-color: var(--color--lime-off);
  background-color: var(--color--black);
  min-height: 3rem;
  color: var(--color--white);
  text-align: center;
  caret-color: var(--color--lime);
  padding-top: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.5rem;
}

`.legal-content-w` {
  flex-direction: column;
  flex-wrap: nowrap;
  max-width: 70rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
}

`.f1-car-stat-past-v2-w` {
  flex-direction: column;
  flex-wrap: nowrap;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-columns: 1fr;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

`.f1-car-stat-past-v2-grid-item` {
  column-gap: var(--gap);
  row-gap: var(--gap);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: var(--color--dark-green);
  width: 100%;
  padding-bottom: calc(var(--gap) * .5);
  padding-top: calc(var(--gap) * .5);
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-columns: 1fr;
  display: grid;
}

`.f1-car-stat-past-v2-grid-item.top` {
  padding-bottom: calc(var(--gap) * 1.5);
  padding-top: calc(var(--gap) * 1.5);
}

`.f1-car-stat-past-v2-grid-w` {
  width: 100%;
  margin-bottom: calc(var(--gap) * 2);
}

`.f1-car-stat-past-v2-grid-inner` {
  display: flex;
}

`.f1-car-stat-past-v2-grid-inner.gap-0-1` {
  column-gap: calc(var(--gap) * .1);
  row-gap: calc(var(--gap) * .1);
}

`.calendar-hero-layout` {
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
}

`.calendar-hero-rive-w` {
  aspect-ratio: 579 / 387;
  width: 36.1875rem;
  position: absolute;
}

`.calendar-hero-rive` {
  width: 100%;
  height: 100%;
}

`.f1-highlight-item-round-w` {
  min-width: 3.4rem;
  color: var(--color--grey-on-track);
  justify-content: flex-start;
  align-items: center;
  display: flex;
  position: relative;
}

`.f1-highlight-item-round-w.cal-previous` {
  justify-content: center;
  align-items: center;
}

`.f1-highlight-round-svg` {
  width: 110%;
  color: var(--color--lime);
  display: flex;
  position: absolute;
}

`.helmet-grid-extender` {
  z-index: -1;
  justify-content: flex-start;
  align-items: flex-start;
  width: 13.9375rem;
  height: 2.5rem;
  display: none;
  position: absolute;
  top: auto;
  right: auto;
  bottom: 0%;
  left: -11rem;
}

`.helmet-grid-extender-img` {
  z-index: 1;
  max-width: none;
  height: 100%;
  color: var(--color--dark-green-tint-2);
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  position: relative;
}

`.helmet-grid-extender-img.is-overlay` {
  z-index: 3;
  opacity: 0;
  width: 100%;
  position: absolute;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
}

`.helmet-grid-extender-img-svg` {
  aspect-ratio: 223 / 39;
  width: 100%;
  height: 100%;
  position: absolute;
}

`.calendar-mobile-frame` {
  display: none;
}

`.mob-landscape-block` {
  z-index: 99999;
  background-color: var(--color--lime);
  pointer-events: auto;
  color: var(--color--black);
  text-align: center;
  column-gap: calc(var(--gap) * 3);
  row-gap: calc(var(--gap) * 3);
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  display: none;
  position: fixed;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
}

`.mob-landscape-rive` {
  aspect-ratio: 1 / 1;
  height: 40vh;
}

`.calendar-dropdown-content` {
  display: none;
  position: relative;
  overflow-x: clip;
  overflow-y: clip;
}

`.calendar-dropdown-trigger` {
  cursor: pointer;
}

`.calendar-dropdown-chevron` {
  width: 1.4375rem;
  height: 1.4375rem;
  color: var(--color--lime);
  justify-content: center;
  align-items: center;
  display: flex;
  transform: rotate(180deg);
}

`.calendar-dropdown-list` {
  pointer-events: auto;
}

`.off-t-rive-w` {
  aspect-ratio: 1 / 1;
  width: 3.5rem;
  height: 3.5rem;
}

`.off-t-horiz-title-w` {
  column-gap: var(--gap);
  row-gap: var(--gap);
  flex-direction: column;
  flex-wrap: nowrap;
  display: flex;
}

`.off-t-horiz-title-w.mob-grid.title-mw-19` {
  max-width: 19rem;
}

`.home-hero-tablet-hero-text` {
  display: none;
}

`.marquee-offest-w` {
  width: 100vw;
  left: calc(var(--gap) * -1);
  max-width: var(--fluid-container);
  position: relative;
  overflow-x: clip;
  overflow-y: clip;
}

`.marquee-offest-w.z-10` {
  z-index: 10;
}

`.marquee-offest-w.z-20` {
  z-index: 20;
  margin-top: 2rem;
}

`.marquee-offest-w.tm-gap` {
  margin-top: var(--gap);
}

`.marquee-offest-w.tm-gap.x2` {
  margin-top: calc(var(--gap) * 2);
}

`.utility__text--w` {
  z-index: 40;
  margin-right: auto;
  margin-bottom: var(--gap);
  margin-left: auto;
  position: absolute;
  top: auto;
  right: auto;
  bottom: 0%;
  left: auto;
}

`.utility__content-inner` {
  text-align: center;
  text-transform: uppercase;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: min(100svh, 1200px);
  display: flex;
  position: relative;
}

`.utility__4-svg` {
  aspect-ratio: 256.86 / 347;
  height: 21.6875rem;
  display: none;
  position: relative;
}

`.utility__gl--pos` {
  z-index: 10;
  justify-content: center;
  align-items: center;
  display: flex;
  position: absolute;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
}

`.utility__gl` {
  aspect-ratio: 1 / 1;
  width: 80%;
}

`.home-collab-rive` {
  width: 100%;
  height: 100%;
}

`.marquee-css` {
  color: rgb(239, 238, 236);
  width: 100%;
  max-width: 100%;
  display: flex;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
}

`.marquee-css.right` {
  justify-content: flex-end;
  align-items: center;
}

`.marquee-css__list` {
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  align-items: center;
  display: flex;
  position: relative;
}

`.marquee-css__list.right` {
  justify-content: flex-end;
  align-items: center;
}

`.marquee-css__item` {
  column-gap: 1em;
  row-gap: 1em;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: 0%;
  align-items: center;
  padding-top: 1em;
  padding-bottom: 1em;
  padding-right: 1em;
  display: flex;
}

`.marquee-css__item-p` {
  white-space-collapse: collapse;
  text-wrap-mode: nowrap;
  margin-bottom: 0px;
  font-size: 1.5em;
  line-height: 1;
}

`.marquee-css__item-svg` {
  width: 1em;
}

`.off-t-collabs-rive` {
  width: 100%;
  height: 100%;
}

`.gl-carousel` {
  position: absolute;
  top: 50%;
  right: 0%;
  bottom: auto;
  left: 0%;
}

`.utility__switcher--w` {
  right: var(--gap);
  z-index: 40;
  background-color: var(--color--white);
  border-top-left-radius: 0.625rem;
  border-top-right-radius: 0.625rem;
  border-bottom-right-radius: 0.625rem;
  border-bottom-left-radius: 0.625rem;
  flex-direction: column;
  flex-wrap: nowrap;
  display: flex;
  position: absolute;
  overflow-x: clip;
  overflow-y: clip;
}

`.utility-switcher-btn` {
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: var(--color--green-light);
  width: 3.75rem;
  height: 3.75rem;
  color: var(--color--dark-green);
  cursor: pointer;
  column-gap: calc(var(--gap) * .25);
  row-gap: calc(var(--gap) * .25);
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  display: flex;
}

`.utility-switcher-btn:hover` {
  background-color: var(--color--green-off-white-1);
}

`.utility-switcher-btn.is-active` {
  border-bottom-color: var(--color--lime);
  background-color: var(--color--lime);
}

`.utility-switcher-icon` {
  aspect-ratio: 24 / 27.65;
  height: 1.6rem;
  display: flex;
}

`.video-stream-w` {
  width: 10rem;
  height: 10rem;
  position: relative;
  overflow-x: clip;
  overflow-y: clip;
}

`.video-stream` {
  position: absolute;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
}

`.f1-grid-row-head-line` {
  left: var(--gap);
  top: auto;
  right: var(--gap);
  background-color: var(--color--dark-green);
  height: 1px;
  position: absolute;
  bottom: 0%;
}

`.otot-home-text-w` {
  position: relative;
}

`.otot-home-text-rive` {
  z-index: 10;
  width: 15.9412rem;
  height: 12.125rem;
  position: absolute;
  top: 0%;
  right: -1rem;
  bottom: 0%;
  left: auto;
}

`.marquee-spacer` {
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  width: 7rem;
  height: 0px;
}

`.marquee-spacer.footer` {
  width: calc(var(--gap) * 2);
}

`.marquee-advanced__scroll` {
  will-change: transform;
  width: 100%;
  display: flex;
  position: relative;
}

`.osmo-icon-svg` {
  color: rgb(255, 76, 36);
  width: 50%;
}

`.marquee-advanced__item-width` {
  background-color: rgb(19, 19, 19);
  border-top-left-radius: 1vw;
  border-top-right-radius: 1vw;
  border-bottom-right-radius: 1vw;
  border-bottom-left-radius: 1vw;
  justify-content: center;
  align-items: center;
  width: 18vw;
  height: 18vw;
  margin-top: 1vw;
  margin-right: 1vw;
  margin-bottom: 1vw;
  margin-left: 1vw;
  display: flex;
}

`.marquee__advanced__p` {
  white-space-collapse: collapse;
  text-wrap-mode: nowrap;
  margin-bottom: 0px;
  margin-right: 0.25em;
  font-size: 1em;
}

`.section-resource` {
  column-gap: 2em;
  row-gap: 2em;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  display: flex;
}

`.marquee__advanced__arrow-svg` {
  color: rgb(255, 76, 36);
  width: 1em;
  margin-right: 0.25em;
  position: relative;
}

`.marquee-advanced__item` {
  justify-content: flex-start;
  align-items: center;
  font-size: max(4em, 8vw);
  display: flex;
}

`.marquee-advanced__collection` {
  will-change: transform;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  display: flex;
  position: relative;
}

`.marquee-advanced` {
  width: 100vw;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
}

`.partnership-back-btn-w` {
  left: var(--gap);
  top: var(--gap);
  z-index: 10;
  position: absolute;
  bottom: auto;
  right: auto;
}

`.partnership-back-btn-w.not-found` {
  z-index: 40;
}

`.css-safari` {
  width: 0px;
  height: 0px;
  display: none;
  position: fixed;
  top: 0%;
  right: 0%;
  bottom: auto;
  left: 0%;
  overflow-x: hidden;
  overflow-y: hidden;
}

`.nr-list` {
  width: 100%;
}

`.sub-hero-layout` {
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
}

`.impact-line` {
  position: relative;
}

`.impact-reveal` {
  background-color: var(--color--lime-off);
  position: absolute;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
}

`.part-i-img-w` {
  width: 25.5rem;
}

`.parti-section2-sub-w` {
  max-width: 80%;
}

`.home-hero-touch-controls-w` {
  display: none;
}

`.title-para-flex` {
  column-gap: calc(var(--gap) * .25);
  row-gap: calc(var(--gap) * .25);
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

`.home-title-w` {
  color: var(--color--black);
  position: absolute;
  top: 0%;
  right: auto;
  bottom: auto;
  left: 0%;
}

`.split-flex` {
  flex-direction: column;
  flex-wrap: nowrap;
  display: flex;
}

`.empty-state-text` {
  color: var(--color--white);
}

`#w-node-_5d5ac04e-626f-e2bd-ba2c-8a1157b2eda4-0b17a7eb` {
  grid-column-start: span 2;
  grid-column-end: span 2;
}

`#w-node-_8734ac60-bf7c-ac47-bf21-501caa438859-0b17a7eb` {
  grid-column-start: span 1;
  grid-column-end: span 1;
}

`#w-node-ae7312fc-adb8-42d6-db91-b6f52466ac51-0b17a7eb` {
  grid-row-start: span 1;
  grid-column-start: span 2;
  grid-row-end: span 1;
  grid-column-end: span 2;
  align-self: center;
}

`#w-node-cdf8cae6-890c-0da2-d4ce-f7de7c4f7866-0b17a7eb` {
  grid-row-start: span 1;
  grid-column-start: span 2;
  grid-row-end: span 1;
  grid-column-end: span 2;
}

`#w-node-_10049719-af3a-791f-b004-78a94b8f2fac-0b17a7eb, #w-node-_04f46b3f-5093-ef67-5316-1ae3df93be8d-0b17a7eb` {
  grid-column-start: span 2;
  grid-column-end: span 2;
}

`#w-node-d38115e1-cbcb-e8d7-fdcd-2280ce4d6775-5f7c7c5b` {
  grid-row-start: 1;
  grid-column-start: 3;
  grid-row-end: 2;
  grid-column-end: 5;
}

`#w-node-_11721cd2-515c-d657-a60b-407032999dd8-5f7c7c5b` {
  justify-self: start;
}

`#w-node-_4eaad92f-9012-c100-dccc-e3361c20d2af-5f7c7c5b` {
  grid-row-start: 1;
  grid-column-start: 3;
  grid-row-end: 2;
  grid-column-end: 5;
}

`#w-node-_3f014e94-dd27-efa0-671a-6bf2df74c1ac-5f7c7c5b, #w-node-_4658ea02-c46c-e8e0-3f05-f157ea87ef94-5f7c7c5b` {
  grid-column-start: span 2;
  grid-column-end: span 2;
}

`#w-node-_2ab69dc4-b2e8-572b-3043-245da1d775a7-5f7c7c5b, #w-node-_0e765cc1-15ef-ff7d-3cd5-acc0b8631f47-5f7c7c5b, #w-node-_2e2badd0-edd4-79a3-98d6-d0015899b834-5f7c7c5b, #w-node-da3f9e36-55b8-e2f4-75a4-93b4299d711f-5f7c7c5b` {
  justify-self: start;
}

`#w-node-f4e413b5-5bad-3f37-eaf1-33dce243f1f5-5f7c7c5b, #w-node-_509fc3b9-0d9f-c7fb-45b7-27d46b8e99bf-5f7c7c5b` {
  grid-row-start: span 1;
  grid-column-start: span 2;
  grid-row-end: span 1;
  grid-column-end: span 2;
}

`#w-node-e77657ec-ff17-bc21-98b5-30fdd8e171c2-5f7c7c5b` {
  grid-column-start: span 2;
  grid-column-end: span 2;
}

`#w-node-e77657ec-ff17-bc21-98b5-30fdd8e171c8-5f7c7c5b` {
  grid-column-start: span 1;
  grid-column-end: span 1;
}

`#w-node-_7e66a639-1a37-e098-bd9b-f9147ab37e70-5f7c7c5b, #w-node-_3b13b201-1c48-e0e0-db72-80f0a491f668-5f7c7c5b, #w-node-_3b13b201-1c48-e0e0-db72-80f0a491f671-5f7c7c5b` {
  grid-column-start: span 2;
  grid-column-end: span 2;
}

`#w-node-_3b13b201-1c48-e0e0-db72-80f0a491f676-5f7c7c5b, #w-node-c285c8ee-adfc-2d87-6651-74320d154718-5f7c7c5b, #w-node-_06790580-4b9a-ecfb-6ba3-02f4a753ad6c-5f7c7c5b, #w-node-c9b0daf0-b689-622f-1a7d-50c6e904a249-5f7c7c5b, #w-node-_0c6af839-14b6-a0c1-a7fe-6831acd6432a-5f7c7c5b, #w-node-_501d26bd-6097-5712-862f-448610ae4c0c-5f7c7c5b, #w-node-e117171d-8d1c-4a99-9489-fe33b006c86a-5f7c7c5b, #w-node-_99243bcc-935d-15f2-1815-ed4443f76624-5f7c7c5b` {
  justify-self: start;
}

`#w-node-_924c1ab4-f6ca-fd53-1cf2-32303cf4d891-5f7c7c5b` {
  grid-row-start: span 1;
  grid-column-start: span 1;
  grid-row-end: span 1;
  grid-column-end: span 1;
}

`#w-node-_26cf4267-3a90-03b0-7d88-cf98de04701c-5f7c7c5b, #w-node-d3d728c8-0307-9ec9-8997-b794991c520d-5f7c7c5b` {
  grid-column-start: span 2;
  grid-column-end: span 2;
}

`#w-node-_86680e93-351c-59a1-0067-b2d57c13896f-5f7c7c5b` {
  grid-row-start: span 1;
  grid-column-start: span 5;
  grid-row-end: span 1;
  grid-column-end: span 5;
}

`#w-node-_5d5ac04e-626f-e2bd-ba2c-8a1157b2eda4-5f7c7c5b` {
  grid-column-start: span 2;
  grid-column-end: span 2;
}

`#w-node-_8734ac60-bf7c-ac47-bf21-501caa438859-5f7c7c5b` {
  grid-column-start: span 1;
  grid-column-end: span 1;
}

`#w-node-fd90c382-1486-6d59-724c-5b84d4616719-d4616718, #w-node-f8c63d18-44f5-0268-dcf1-6075f8aea797-4bd20f1f` {
  grid-row-start: span 1;
  grid-column-start: span 2;
  grid-row-end: span 1;
  grid-column-end: span 2;
}

`#w-node-f8c63d18-44f5-0268-dcf1-6075f8aea798-4bd20f1f, #w-node-f8c63d18-44f5-0268-dcf1-6075f8aea79d-4bd20f1f` {
  justify-self: start;
}

`#w-node-f8c63d18-44f5-0268-dcf1-6075f8aea7a2-4bd20f1f` {
  grid-row-start: 2;
  grid-column-start: 3;
  grid-row-end: 3;
  grid-column-end: 5;
}

`#w-node-f8c63d18-44f5-0268-dcf1-6075f8aea7a3-4bd20f1f` {
  grid-row-start: span 1;
  grid-column-start: span 2;
  grid-row-end: span 1;
  grid-column-end: span 2;
}

`#w-node-d7141cd2-775f-07dc-3bd4-0a8762cb4221-4bd20f1f` {
  grid-row-start: 1;
  grid-column-start: 2;
  grid-row-end: 2;
  grid-column-end: 3;
}

`#w-node-_9a57061a-1a0c-95f7-29fb-b275e62d70dc-4bd20f1f, #w-node-_10049719-af3a-791f-b004-78a94b8f2fac-4bd20f1f, #w-node-_04f46b3f-5093-ef67-5316-1ae3df93be8d-4bd20f1f` {
  grid-column-start: span 2;
  grid-column-end: span 2;
}

`#w-node-e293c79f-165c-d2e3-a2ab-c806e9e14129-4bd20f1f` {
  grid-row-start: span 1;
  grid-column-start: span 2;
  grid-row-end: span 1;
  grid-column-end: span 2;
}

`#w-node-_0a8d1411-8edd-4853-d531-ea8c0602db3e-45fd5b3f, #w-node-_0a8d1411-8edd-4853-d531-ea8c0602db45-45fd5b3f` {
  grid-column-start: span 2;
  grid-column-end: span 2;
}

`#w-node-b8b679a5-ee4e-947a-903b-e7f03351e821-45fd5b3f` {
  grid-row-start: span 1;
  grid-column-start: span 1;
  grid-row-end: span 1;
  grid-column-end: span 1;
}

`#w-node-_3765c89f-18a0-4ef0-4b26-c9a08819e148-45fd5b3f` {
  grid-row-start: span 1;
  grid-column-start: span 5;
  grid-row-end: span 1;
  grid-column-end: span 5;
}

`#w-node-_5d98d550-9063-e0bb-1926-95d45e83dc63-45fd5b3f` {
  grid-row-start: span 1;
  grid-column-start: span 1;
  grid-row-end: span 1;
  grid-column-end: span 1;
}

`#w-node-c6be3a87-ed37-f85c-8805-29e7120e3334-45fd5b3f` {
  grid-row-start: span 1;
  grid-column-start: span 5;
  grid-row-end: span 1;
  grid-column-end: span 5;
}

`#w-node-_69f2c3ee-1b73-ac90-efdc-7d70eb7adf60-45fd5b3f, #w-node-_69f2c3ee-1b73-ac90-efdc-7d70eb7adf67-45fd5b3f` {
  grid-column-start: span 2;
  grid-column-end: span 2;
}

`#w-node-_626de594-3e10-cc2b-9d4e-ecf5d2d8d012-45fd5b3f` {
  grid-row-start: span 1;
  grid-column-start: span 2;
  grid-row-end: span 1;
  grid-column-end: span 2;
}

`#w-node-_2337f9f5-8a5b-8cec-b6bc-ef6354bc858b-45fd5b3f` {
  align-self: center;
}

`#w-node-d228dea3-f309-0384-a5be-92e53070e7b9-45fd5b3f, #w-node-e524b83d-a4e3-c97a-d66c-12233e07ff00-45fd5b3f` {
  grid-row-start: span 1;
  grid-column-start: span 2;
  grid-row-end: span 1;
  grid-column-end: span 2;
}

`#w-node-a5090fa2-033c-3b18-6377-e26636438332-45fd5b3f` {
  align-self: center;
}

`#w-node-a5090fa2-033c-3b18-6377-e26636438334-45fd5b3f, #w-node-a5090fa2-033c-3b18-6377-e26636438346-45fd5b3f` {
  grid-row-start: span 1;
  grid-column-start: span 2;
  grid-row-end: span 1;
  grid-column-end: span 2;
}

`#w-node-ca406da8-336a-2108-699f-f5872ced6a51-45fd5b3f` {
  align-self: center;
}

`#w-node-ca406da8-336a-2108-699f-f5872ced6a53-45fd5b3f, #w-node-ca406da8-336a-2108-699f-f5872ced6a62-45fd5b3f` {
  grid-row-start: span 1;
  grid-column-start: span 2;
  grid-row-end: span 1;
  grid-column-end: span 2;
}

`#w-node-_9702ccf7-4160-1787-6689-a403f344178c-45fd5b3f` {
  align-self: center;
}

`#w-node-_9702ccf7-4160-1787-6689-a403f344178e-45fd5b3f, #w-node-_9702ccf7-4160-1787-6689-a403f344179d-45fd5b3f` {
  grid-row-start: span 1;
  grid-column-start: span 2;
  grid-row-end: span 1;
  grid-column-end: span 2;
}

`#w-node-ae492d7c-0ee7-9497-bd19-e56af98934ea-45fd5b3f` {
  align-self: center;
}

`#w-node-ae492d7c-0ee7-9497-bd19-e56af98934ec-45fd5b3f, #w-node-ae492d7c-0ee7-9497-bd19-e56af98934fb-45fd5b3f` {
  grid-row-start: span 1;
  grid-column-start: span 2;
  grid-row-end: span 1;
  grid-column-end: span 2;
}

`#w-node-_97261608-057d-a3f3-e754-cefc40031a9e-45fd5b3f` {
  align-self: center;
}

`#w-node-_97261608-057d-a3f3-e754-cefc40031aa0-45fd5b3f, #w-node-_97261608-057d-a3f3-e754-cefc40031aaf-45fd5b3f` {
  grid-row-start: span 1;
  grid-column-start: span 2;
  grid-row-end: span 1;
  grid-column-end: span 2;
}

`#w-node-_98fbe5b1-f605-2a5b-4f6c-a5d08be6447b-45fd5b3f` {
  align-self: center;
}

`#w-node-_98fbe5b1-f605-2a5b-4f6c-a5d08be6447d-45fd5b3f, #w-node-_98fbe5b1-f605-2a5b-4f6c-a5d08be6448c-45fd5b3f` {
  grid-row-start: span 1;
  grid-column-start: span 2;
  grid-row-end: span 1;
  grid-column-end: span 2;
}

`.w-webflow-badge` {
  display: none;
}

`.transition-w` {
  display: flex;
}

`:root` {
  --cubic-default: cubic-bezier(0.65, 0.05, 0, 1);
  --duration-default: 0.75s;
  --animation-default: var(--duration-default) var(--cubic-default);
  --section-padding: calc(3.5rem + (var(--gap) * 2));
  --container-padding: 2rem;
  --nav-height: calc(3.75rem (var(--gap) * 2));
}

`:root` {
  --min-width: 992px;
  --max-width: 1920px;
  --design-width: 1728;
  --design-unit: 16;
  --scale-factor: 1;
  --fluid-container: clamp(var(--min-width), 100vw, var(--max-width));
  --fluid-font: calc(var(--fluid-container) / var(--design-width) * var(--design-unit) * var(--scale-factor));
}

`html` {
  font-size: var(--fluid-font);
  scroll-behavior: initial;
}

`body` {
  min-height: 0vw;
}

`*` {
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`::before, ::after` {
  box-sizing: inherit;
}

`[data-theme="dark"]` {
  background-color: var(--color--dark-green);
  color: var(--color--white);
}

`[data-theme="light"] .nav` {
  color: var(--color--black);
}

`[data-theme="light"] .nav-brand path, [data-theme="light"] .nav-ln4-svg path` {
  fill: currentcolor;
}

`a` {
  color: inherit;
}

`::selection` {
  background-color: var(--color--lime);
  color: var(--color--black);
  text-shadow: none;
}

`[data-theme="lime"] ::selection` {
  background-color: var(--color--black);
  color: var(--color--lime);
  text-shadow: none;
}

`img::selection, svg::selection` {
  background-image: initial;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: transparent;
}

`.display-none, [display-none]` {
  display: none;
}

`.visibility-hidden, [visibility-hidden]` {
  visibility: hidden;
}

`:where(svg)` {
  height: 100%;
  width: 100%;
  max-width: none;
  box-sizing: border-box;
  vertical-align: middle;
}

`:where(:focus-visible)` {
  outline-color: ;
  outline-style: ;
  outline-width: ;
  outline-offset: 2px;
}

`:where(button)` {
  background-color: transparent;
}

`:where([screen-reader]:not(:focus, :active, :focus-within), .screen-reader:not(:focus, :active, :focus-within))` {
  clip-path: inset(50%);
  height: 1px;
  width: 1px;
  overflow-x: hidden;
  overflow-y: hidden;
  position: absolute;
  white-space-collapse: collapse;
  text-wrap-mode: nowrap;
  border-top-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
  border-left-width: 0px;
  border-top-style: none;
  border-right-style: none;
  border-bottom-style: none;
  border-left-style: none;
  border-top-color: currentcolor;
  border-right-color: currentcolor;
  border-bottom-color: currentcolor;
  border-left-color: currentcolor;
  border-image-source: initial;
  border-image-slice: initial;
  border-image-width: initial;
  border-image-outset: initial;
  border-image-repeat: initial;
}

`.w-lightbox-close` {
  right: 5em;
  height: 5em;
  outline-color: transparent;
  outline-style: initial;
  outline-width: initial;
}

`body ::-webkit-scrollbar, body::-webkit-scrollbar` {
  display: none;
}

`body` {
}

`html` {
  scrollbar-width: none;
}

`[pointer-none]` {
  pointer-events: none;
  user-select: none;
}

`[pointer-auto]` {
  pointer-events: auto;
}

`[overflow-clip="x"]` {
  overflow-x: clip;
}

`[overflow-clip="y"]` {
  overflow-y: clip;
}

`p, .text-small, .text-regular, .text-medium, .text-large, .text-xlarge` {
  text-wrap-mode: initial;
  text-wrap-style: pretty;
}

`textarea` {
  resize: vertical;
}

`[tabindex]:focus-visible, input[type="file"]:focus-visible` {
  outline-color: ;
  outline-style: ;
  outline-width: ;
  outline-offset: 0.1em;
}

`.rich-text p, .rich-text ol, .rich-text li` {
  line-height: 1.6;
}

`.rich-text strong` {
}

`.rich-text .w-embed` {
}

`.rich-text a` {
  text-decoration-line: none;
  text-decoration-thickness: initial;
  text-decoration-style: initial;
  text-decoration-color: initial;
}

`.rich-text a:hover` {
  text-decoration-line: underline;
  text-decoration-thickness: initial;
  text-decoration-style: initial;
  text-decoration-color: initial;
}

`[data-video-stream]` {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  background-color: rgb(0, 0, 0);
}

`[data-video-stream-wrap] .iframe-wrapper` {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
}

`[data-video-stream] iframe` {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  border-top-width: medium;
  border-right-width: medium;
  border-bottom-width: medium;
  border-left-width: medium;
  border-top-style: none;
  border-right-style: none;
  border-bottom-style: none;
  border-left-style: none;
  border-top-color: currentcolor;
  border-right-color: currentcolor;
  border-bottom-color: currentcolor;
  border-left-color: currentcolor;
  border-image-source: initial;
  border-image-slice: initial;
  border-image-width: initial;
  border-image-outset: initial;
  border-image-repeat: initial;
}

`.btn-text` {
  --text-offset: var(--text--btn-primary);
}

`.btn-text.is-footer` {
  --text-offset: var(--text--btn-footer);
}

`.btn-text.is-nav` {
  --text-offset: var(--text--btn-nav);
}

`[split-text].btn-text` {
  text-shadow: 0px var(--text-offset) currentColor;
}

`[data-anim-high] .line` {
  width: auto;
  display: inline-block;
}

`.text-eyebrow.flex .line` {
  display: flex;
}

`[split-text] .char` {
  display: inline-block;
}

`.impact-content-w.is-home .text-impact-lg-mona strong` {
  color: var(--color--lime-off);
  font-family: Brier;
  font-size: 8.25rem;
  line-height: 83%;
  letter-spacing: -0.1875rem;
}

`.impact-content-w.on-track .text-impact-lg-mona strong` {
  color: var(--color--grey-on-track);
  font-family: Brier;
  font-size: 8.25rem;
  line-height: 83%;
  letter-spacing: -0.1875rem;
}

`.impact-content-w.off-track .text-impact-lg-mona strong` {
  color: var(--color--green-off-white-2);
  font-family: Brier;
  font-size: 8.25rem;
  line-height: 83%;
  letter-spacing: -0.1875rem;
}

`[split-text]` {
  white-space-collapse: preserve-breaks;
  text-wrap-mode: wrap;
}

`html.lenis, html.lenis body` {
  height: auto;
}

`.lenis.lenis-smooth [data-lenis-prevent]` {
  overscroll-behavior-x: contain;
  overscroll-behavior-y: contain;
}

`.lenis.lenis-stopped` {
  overflow-x: clip;
  overflow-y: clip;
}

`.lenis.lenis-smooth iframe` {
  pointer-events: none;
}

`[data-nav-theme] .nav-brand path` {
  transition-property: ;
  transition-duration: ;
  transition-timing-function: ;
  transition-delay: ;
  transition-behavior: ;
}

`[data-nav-theme="light"] .nav-brand [nav-brand-path="1"]` {
  fill: var(--color--grey-2);
}

`[data-nav-theme="light"] .nav-brand [nav-brand-path="2"]` {
  fill: var(--color--grey-1);
}

`[data-nav-theme="dark"] .nav-brand [nav-brand-path="1"]` {
  fill: var(--color--dark-green);
}

`[data-nav-theme="dark"] .nav-brand [nav-brand-path="2"]` {
  fill: var(--color--dark-green);
}

`.nav-middle` {
  transition-property: ;
  transition-duration: ;
  transition-timing-function: ;
  transition-delay: ;
  transition-behavior: ;
}

`[data-nav-theme="light"] .nav-middle` {
  color: var(--color--white);
}

`[data-nav-theme="dark"] .nav-middle` {
  color: var(--color--dark-green);
}

`.nav-ham` {
  transition-property: ;
  transition-duration: ;
  transition-timing-function: ;
  transition-delay: ;
  transition-behavior: ;
}

`[data-nav-theme="dark"] .nav-ham` {
  border-top-color: ;
  border-right-color: ;
  border-bottom-color: ;
  border-left-color: ;
  background-color: transparent;
}

`[data-nav-theme="light"] .nav-ham` {
  border-top-color: ;
  border-right-color: ;
  border-bottom-color: ;
  border-left-color: ;
}

`[data-nav-wrap] canvas` {
  width: 100%;
  height: 100%;
}

`.nav-menu-link-current-svg` {
  visibility: hidden;
}

`.nav-menu-link-w.w--current .nav-menu-link-current-svg` {
  visibility: visible;
}

`.footer-layout-clip` {
  --mask-url: url('https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d2dd47cfe84bed1dce9542_ln4-footer-mask-desktop.svg');
  mask-image: var(--mask-url);
  mask-size: cover;
  mask-repeat: no-repeat;
  -webkit-mask-position-x: center;
  -webkit-mask-position-y: center;
}

`[data-footer-theme="white"]` {
  background-color: var(--color--white);
}

`[data-footer-theme="black"]` {
  background-color: var(--color--black);
}

`[data-footer-theme="black"] .footer-layout-clip` {
  background-color: var(--color--black);
}

`[data-footer-theme="green"]` {
  background-color: var(--color--dark-green);
}

`.kl-teaser-XpbhAP` {
  opacity: 0;
  pointer-events: none;
}

`[data-btn-rive-rotate="true"] .btn-rive-w` {
  transform: rotate(180deg);
}

`[data-btn-rive-rotate="90"] .btn-rive-w` {
  transform: rotate(90deg);
}

`[data-rive-btn-invert="true"] .btn-icon-w` {
  filter: invert(1);
}

`[data-helmet-item]` {
  --mask-url: url('https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e2c781c4c953cd9e74eda5_ln4-2-helm-mask-fill.svg');
  mask-image: var(--mask-url);
  mask-size: cover;
  mask-repeat: no-repeat;
  -webkit-mask-position-x: center;
  -webkit-mask-position-y: center;
}

`.home-hero-next-race-w` {
  transition-property: ;
  transition-duration: ;
  transition-timing-function: ;
  transition-delay: ;
  transition-behavior: ;
}

`.helmet-grid-item-reveal-img` {
  transition-property: ;
  transition-duration: ;
  transition-timing-function: ;
  transition-delay: ;
  transition-behavior: ;
}

`[data-helmet-item]:hover .helmet-grid-item-reveal-img` {
  clip-path: ellipse(100% 120% at 50% 0%);
  transform: scale(1);
}

`.helmet-grid-item-img-helmet` {
  transition-property: ;
  transition-duration: ;
  transition-timing-function: ;
  transition-delay: ;
  transition-behavior: ;
}

`.helmet-grid-item-w:hover .helmet-grid-item-img-helmet` {
  transform: scale(1.1);
}

`.helmet-grid-frame.is-overlay, .helmet-grid-extender-img.is-overlay` {
  transition-property: ;
  transition-duration: ;
  transition-timing-function: ;
  transition-delay: ;
  transition-behavior: ;
}

`.helmet-grid-extender-img` {
  transition-property: ;
  transition-duration: ;
  transition-timing-function: ;
  transition-delay: ;
  transition-behavior: ;
}

`.helmet-grid-item-w:hover .helmet-grid-extender-img` {
  color: var(--color--lime);
}

`.helmet-grid-item-w:hover .helmet-grid-frame.is-overlay, .helmet-grid-item-w:hover .helmet-grid-extender-img.is-overlay` {
  opacity: 1;
}

`canvas[data-rive-object], canvas[data-rive-primary]` {
  width: 100%;
  height: 100%;
}

`[data-css-marquee-list="left"]` {
  animation-duration: 30s;
  animation-timing-function: linear;
  animation-delay: 0s;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-name: translateXLeft;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
  animation-iteration-count: infinite;
  animation-play-state: paused;
}

`[data-css-marquee-list="right"]` {
  animation-duration: 30s;
  animation-timing-function: linear;
  animation-delay: 0s;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-name: translateXRight;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
  animation-iteration-count: infinite;
  animation-play-state: paused;
  justify-content: flex-end;
}

`.c.home-hero` {
  min-height: 100vh;
}

`.on-t-hero-stats-ui-box1-layout` {
  --mask-url: url('https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d86a1dced2fe748052517c_on-t-hero-stats-ui-box1-fill-c.svg');
  mask-image: var(--mask-url);
  mask-size: cover;
  mask-repeat: no-repeat;
  -webkit-mask-position-x: center;
  -webkit-mask-position-y: center;
}

`.calendar-track-mask` {
  --mask-url: url('https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d9a2eb367e13f117c827e5_ln-calendar-track-mask.svg');
  mask-image: var(--mask-url);
  mask-size: cover;
  mask-repeat: no-repeat;
  -webkit-mask-position-x: center;
  -webkit-mask-position-y: center;
}

`.calendar-rich-text p` {
  font-size: 1rem;
  line-height: 1.3;
  font-weight: 500;
  letter-spacing: -0.0125rem;
}

`.calendar-rich-text p strong` {
  font-size: 1rem;
  line-height: 1.3;
  font-weight: 700;
  letter-spacing: -0.0125rem;
  color: var(--color--lime-off);
}

`.calendar-dropdown-item.is-open .calendar-dropdown-trigger` {
  background-image: ;
  background-position-x: ;
  background-position-y: ;
  background-size: ;
  background-repeat: ;
  background-attachment: ;
  background-origin: ;
  background-clip: ;
  background-color: ;
  color: var(--color--black);
}

`.calendar-dropdown-item.is-open .calendar-dropdown-chevron` {
  color: var(--color--black);
  transform: rotate(0deg);
}

`.calendar-dropdown-item.is-open .calendar-row-head-line` {
  display: none;
}

`.calendar-track-title-layout .cal-target-wrapper` {
  display: flex;
}

`[data-mask-case-left]` {
  --mask-url: url('https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67dc3bc1e532f9b3f9fa140a_ln4-off-track-mask-case-left.svg');
  mask-image: var(--mask-url);
  mask-size: cover;
  mask-repeat: no-repeat;
  -webkit-mask-position-x: center;
  -webkit-mask-position-y: center;
}

`[data-mask-case-right]` {
  --mask-url: url('https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67dc3bc10751fc4431f3f2de_ln4-off-track-mask-case-right.svg');
  mask-image: var(--mask-url);
  mask-size: cover;
  mask-repeat: no-repeat;
  -webkit-mask-position-x: center;
  -webkit-mask-position-y: center;
}

`[data-mask-callout-left]` {
  --mask-url: url('https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67dc3bc14c14c40132cd0e39_ln4-off-track-mask-callout-right.svg');
  mask-image: var(--mask-url);
  mask-size: cover;
  mask-repeat: no-repeat;
  -webkit-mask-position-x: center;
  -webkit-mask-position-y: center;
}

`[data-mask-callout-right]` {
  --mask-url: url('https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67dc3bc14a8d101c9c8ef1b5_ln4-off-track-mask-callout-left.svg');
  mask-image: var(--mask-url);
  mask-size: cover;
  mask-repeat: no-repeat;
  -webkit-mask-position-x: center;
  -webkit-mask-position-y: center;
}

`.wf-design-mode .off-t-hero-scroll-meda-w .text-body-sm-mona` {
  visibility: visible;
  display: block;
}

`.wf-design-mode .off-t-hero-scroll-meda-w` {
  visibility: visible;
  display: flex;
}

`.camp-list .camp-item:last-child` {
  padding-bottom: calc(var(--gap) * 2);
}

`.part-i-video-w` {
  transition-property: ;
  transition-duration: ;
  transition-timing-function: ;
  transition-delay: ;
  transition-behavior: ;
  clip-path: ellipse(100% 50% at 50% 50%);
}

`.part-i-video-w:hover` {
  clip-path: ellipse(80% 50% at 50% 50%);
  transition-property: ;
  transition-duration: ;
  transition-timing-function: ;
  transition-delay: ;
  transition-behavior: ;
}

`.part-i-rich-text h3` {
  font-size: var(--text--impact);
  line-height: 90.6%;
  font-variation-settings: "wght" 660, "wdth" 93;
  letter-spacing: -0.0625rem;
  text-transform: uppercase;
}

`.part-i-rich-text h3 strong` {
  font-family: Brier;
  font-size: 8.25rem;
  line-height: 83%;
  letter-spacing: -0.1875rem;
  color: var(--color--green-off-white-2);
}

`.part-i-rich-text p` {
  font-size: 2.25rem;
  line-height: 1.1;
  font-variation-settings: "wght" 500, "wdth" 100;
  letter-spacing: -0.0625rem;
  text-transform: none;
}

`.part-i-rich-text p strong` {
  font-family: Brier;
  font-size: 2.25rem;
  line-height: 1.1;
  font-weight: 700;
  letter-spacing: -0.0625rem;
  color: var(--color--green-off-white-2);
}

`.wf-design-mode .image.is-horizontal-scroll` {
  pointer-events: auto;
}

`.wf-design-mode [data-designmode-white]` {
  background-color: var(--color--white);
}

`.wf-design-mode [data-rive-object]` {
  outline-color: red;
  outline-style: solid;
  outline-width: 2px;
}

`.wf-design-mode .transition-w` {
  pointer-events: none;
}

`[data-rive-placeholder]` {
  position: absolute;
  left: 0%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  display: none;
  pointer-events: none;
}

`.wf-design-mode [data-rive-placeholder]` {
  display: block;
}

`.wf-design-mode .callout-socials-card-layout` {
  flex-wrap: wrap;
  height: auto;
}

`.wf-design-mode .callout-socials-card-w` {
  position: relative;
}

`[data-edit="true"] .s.home-marquee` {
  position: relative;
}

`[data-edit="true"] .horizontal-track, [data-edit="true"] .horizontal-pin-sticky` {
  overflow-x: auto;
  overflow-y: auto;
}

`[data-edit="true"] .horizontal-track` {
  outline-color: var(--color--lime);
  outline-offset: -1px;
  outline-style: solid;
  outline-width: 1px;
}

`[data-edit="true"] [data-nav-theme-target]` {
  outline-color: blue;
  outline-offset: -2px;
  outline-style: solid;
  outline-width: 3px;
}

`[data-edit="true"] [data-sticky-hero]` {
  outline-color: blue;
  outline-offset: -2px;
  outline-style: solid;
  outline-width: 3px;
}

`[data-edit="true"] .utility__gl` {
  outline-color: blue;
  outline-offset: -2px;
  outline-style: solid;
  outline-width: 3px;
}

`[data-edit="true"] .marquee-gl-target-w` {
  outline-color: pink;
  outline-offset: -2px;
  outline-style: solid;
  outline-width: 3px;
}

`.c.is-off-t-hero-scroll-media` {
  display: none;
}

`.wf-design-mode .c.is-off-t-hero-scroll-media` {
  display: block;
}

`[data-edit="true"] .f1-highlight-mouse-over-w` {
  display: none;
}

`[data-components="true"] .nav` {
  position: relative;
  display: flex;
  flex-direction: column;
}

`[data-components="true"] .nav-menu-w` {
  position: relative;
  display: flex;
}

`.wf-design-mode .calendar-dropdown-content` {
  display: block;
}

`.wf-design-mode .touch-desc-inner` {
  position: relative;
  color: black;
}

`.is-safari` {
}

`.is-iphone` {
}

`.is-safari .footer-marquee-svg, .is-iphone .footer-marquee-svg` {
  width: 6rem;
}

`.is-safari .home-collab-marquee-svg, .is-iphone .home-collab-marquee-svg` {
  width: 9rem;
}

`.is-safari .marquee-spacer, .is-iphone .marquee-spacer` {
  width: 5rem;
}

`.is-safari .nav-brand` {
  width: 8.2rem;
}



---

# 5. Component Architecture

Build these components:
- Hero section (full viewport)
- Proof/trust block (metrics, logos, testimonials)
- Team/about section
- Contact/booking form
- Footer (business identity, legal)
- WebGL/canvas layer (lazy-loaded, non-critical)

**Stack recommendation:** Static HTML/CSS or Astro â€” effects are simple enough for CSS-only

---

# 6. Section-by-Section Build Spec (40 sections detected, full detail)

## Section 1: Hero
- **Confidence:** 45%
- **Tag:** section
- **Classes:** `s home-hero`
- **Size:** full viewport height
- **CTAs:** Monacogp
- **Media:** 1 image(s), 2 canvas(es), 3 SVG(s)
- **Animations:**
  - `div`.c: transition: all
  - `div`.gl-canvas: transition: all
  - `div`.home-hero-next-race-w: transition: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1)
  - `div`.home-hero-next-race-outline: transition: all
  - `svg`: transition: all
  - `div`.home-hero-next-race-row: transition: all
  - `div`.home-hero-next-race-row: transition: all
  - `div`.nr-list: transition: all
  - `div`.w-dyn-item: transition: all
  - `div`.base-helmet-rive-w: transition: all
  - `div`.base-helmet-rive: transition: all
  - `div`.home-hero-next-race-top: transition: all
  - `div`.eyebrow-w: transition: all
  - `div`.text-eyebrow: transition: all
  - `div`.text-eyebrow: transition: all
  - `div`.home-hero-next-race-line: transition: all
  - `div`.home-hero-tablet-hero-text: transition: all
  - `div`.home-hero-touch-controls-w: transition: all
  - `div`.home-hero-tablet-text-w: transition: all
  - `div`.eyebrow-w: transition: all
  - `button`.btn-w: transition: all
  - `div`.home-hero-touch-desc-w: transition: all
  - `img`.image: transition: all
  - `div`.text-eyebrow: transition: all
  - `div`.btn-inner: transition: all
  - `div`.touch-desc-inner: transition: all
  - `div`.touch-desc-inner: transition: all
  - `div`.btn-icon-w: transition: all
  - `div`.text-eyebrow: transition: all
  - `div`.text-eyebrow: transition: all

### Element Style Blueprint

- **`<div>`** .c.home-hero
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1440px | padding: 0px 16.6667px | opacity: 1
  - anim: all
  - text: "Next Race Monacogp mclaren f1 since 2019mclaren f1 since 2019 tap to lockBack to scroll"

- **`<div>`** .gl-canvas
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all

- **`<div>`** .home-hero-next-race-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | lh: 20px | text-align: start | border: 0px none rgb(83, 84, 80) | display: block | width: 99.1562px | opacity: 1
  - anim: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1)
  - text: "Next Race Monacogp mclaren f1 since 2019"

- **`<div>`** .home-hero-next-race-outline.w-embed
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | lh: 20px | text-align: start | border: 0px none rgb(83, 84, 80) | display: block | width: 99.1562px | opacity: 1
  - anim: all

- **`<svg>`**
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | lh: 20px | text-align: start | border: 0px none rgb(83, 84, 80) | display: inline | width: 99.1562px | opacity: 1
  - anim: all

- **`<div>`** .home-hero-next-race-row.is-1
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | lh: 20px | text-align: start | border: 0px none rgb(83, 84, 80) | display: flex | width: 99.1562px | opacity: 1
  - anim: all
  - text: "Monacogp"

- **`<div>`** .home-hero-next-race-row.is-2
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | lh: 20px | text-align: start | border: 0px none rgb(83, 84, 80) | display: flex | width: 99.1562px | opacity: 1
  - anim: all
  - text: "mclaren f1 since 2019"

- **`<div>`** .nr-list.w-dyn-items
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | lh: 20px | text-align: start | border: 0px none rgb(83, 84, 80) | display: block | width: 99.1562px | opacity: 1
  - anim: all
  - text: "Monacogp"

- **`<div>`** .w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | lh: 20px | text-align: start | border: 0px none rgb(83, 84, 80) | display: block | width: 99.1562px | opacity: 1
  - anim: all
  - text: "Monacogp"

- **`<div>`** .base-helmet-rive-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | lh: 20px | text-align: start | border: 0px none rgb(83, 84, 80) | display: block | width: 80.8281px | opacity: 1
  - anim: all

- **`<div>`** .base-helmet-rive.w-embed
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | lh: 20px | text-align: start | border: 0px none rgb(83, 84, 80) | display: flex | width: 80.8281px | opacity: 1
  - anim: all

- **`<div>`** .home-hero-next-race-top
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | lh: 20px | text-align: start | border: 0px none rgb(83, 84, 80) | display: flex | width: 99.1562px | opacity: 1
  - anim: all
  - text: "Next Race"

- **`<div>`** .eyebrow-w.hero-next-race
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | lh: 20px | text-align: center | border: 0px none rgb(83, 84, 80) | display: flex | width: 79.3125px | opacity: 1
  - anim: all
  - text: "mclaren f1 since 2019"

- **`<div>`** .text-eyebrow
  - font: 8.33333px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | lh: 8.33333px | text-transform: uppercase | text-align: center | border: 0px none rgb(83, 84, 80) | display: block | width: 79.3125px | opacity: 1
  - anim: all
  - text: "mclaren f1 since 2019"

- **`<div>`** .text-eyebrow
  - font: 8.33333px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | lh: 8.33333px | text-transform: uppercase | text-align: start | border: 0px none rgb(83, 84, 80) | display: block | width: 49.0781px | opacity: 1
  - anim: all
  - text: "Next Race"

- **`<div>`** .home-hero-next-race-line
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | lh: 20px | text-align: start | bg: rgb(83, 84, 80) | border: 0px none rgb(83, 84, 80) | display: block | width: 79.3125px | margin: 0px 9.92188px | opacity: 1
  - anim: all

- **`<div>`** .home-hero-tablet-hero-text
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | opacity: 1
  - anim: all
  - text: "mclaren f1 since 2019"

- **`<div>`** .home-hero-touch-controls-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | opacity: 1
  - anim: all
  - text: "tap to lockBack to scroll"

- **`<div>`** .home-hero-tablet-text-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | opacity: 1
  - anim: all

- **`<div>`** .eyebrow-w.hero-next-race
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: center | border: 0px none rgb(244, 244, 237) | display: flex | opacity: 1
  - anim: all
  - text: "mclaren f1 since 2019"

- **`<button>`** .btn-w.is-touch-swipe
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: center | bg: rgb(210, 255, 0) | radius: 7.2px | border: 1px solid rgb(210, 255, 0) | display: flex | width: 50px | padding: 0px 13.3333px | opacity: 1
  - anim: all

- **`<div>`** .home-hero-touch-desc-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | opacity: 1
  - anim: all
  - text: "tap to lockBack to scroll"

- **`<img>`** .image
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: inline-block | width: 100% | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e968a40345883f8ccc1b05_ln4-lando-norris-text-mobile.svg

- **`<div>`** .text-eyebrow
  - font: 8.33333px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 8.33333px | text-transform: uppercase | text-align: center | border: 0px none rgb(244, 244, 237) | display: block | opacity: 1
  - anim: all
  - text: "mclaren f1 since 2019"

- **`<div>`** .btn-inner.is-touch-swipe
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: center | border: 0px none rgb(40, 44, 32) | display: flex | opacity: 1
  - anim: all

- **`<div>`** .touch-desc-inner
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | opacity: 1
  - anim: all
  - text: "tap to lock"

- **`<div>`** .touch-desc-inner
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | opacity: 1
  - anim: all
  - text: "Back to scroll"

- **`<div>`** .btn-icon-w.is-touch-swipe
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: center | border: 0px none rgb(40, 44, 32) | display: flex | width: 16px | opacity: 1
  - anim: all

- **`<div>`** .text-eyebrow.touch-desc
  - font: 8.33333px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 8.33333px | text-transform: uppercase | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | opacity: 1
  - anim: all
  - text: "tap to lock"

- **`<div>`** .text-eyebrow.touch-desc
  - font: 8.33333px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 8.33333px | text-transform: uppercase | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | opacity: 1
  - anim: all
  - text: "Back to scroll"

### HTML Structure

```html
<section data-hero-animation-container="" class="s home-hero"><div class="c home-hero"><div data-gl="head" data-sticky-hero="canvas" class="gl-canvas"></div><div class="home-hero-next-race-w"><div class="home-hero-next-race-outline w-embed"><svg width="119" height="244" viewBox="0 0 119 244" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M118.5 6v232a5.5 5.5 0 0 1-5.5 5.5H6A5.5 5.5 0 0 1 .5 238V25A5.5 5.5 0 0 1 6 19.5h46.346c4.695 0 9.167-2 12.297-5.498l7.46-8.337A15.5 15.5 0 0 1 83.653.5H113a5.5 5.5 0 0 1 5.5 5.5Z" stroke="currentColor"></path>
</svg></div><div class="home-hero-next-race-top"><div data-anim-high="right, lime" split-text="lines" class="text-eyebrow">Next Race</div></div><div class="home-hero-next-race-row is-1 w-dyn-list"><div role="list" class="nr-list w-dyn-items"><div role="listitem" class="w-dyn-item"><a href="/calendar" class="home-hero-next-race-row w-inline-block"><div class="home-hero-next-race-rive-w"><div class="home-hero-next-race-rive w-embed"><!-- data-rive-circuit-hover="true"
-- looks for all [data-rive-circuit-hover-target] elements on page
-- changes the data-rive-input-track to the value of that hovered attribute
--> 
<canvas data-rive-object="" data-rive-file="circuits" data-rive-artboard="circuits" data-rive-state-machine="circuits" data-rive-input-track="monaco" data-rive-input-color="" data-rive-input-weight="" data-rive-fit="contain" data-rive-circuit-hover="">
</canvas></div></div><div class="eyebrow-w gap0-25"><div data-anim-high="right, lime" split-text="lines" class="text-eyebrow">Monaco</div><div data-anim-high="right, lime" split-text="lines" class="text-eyebrow">gp</div></div></a></div></div></div><div class="home-hero-next-race-line"></div><div data-gl-helmet="hover" class="home-hero-next-race-row is-2"><div class="base-helmet-rive-w"><div class="base-helmet-rive w-embed"><canvas data-rive-object="" data-rive-file="reef" data-rive-artboard="helmet-reef" data-rive-state-machine="helmet-reef_play" data-rive-input="" data-rive-instant-play="true" data-rive-fit="contain" data-rive-scrolltrigger-target="" data-rive-scrolltrigger-start="" data-rive-scrolltrigger-end="">
</canvas></div></div><div class="eyebrow-w hero-next-race"><div data-anim-high="right, lime" split-text="lines" class="text-eyebrow">mclaren f1 since 2019</div></div></div></div><div class="home-hero-tablet-hero-text"><div data-hero-anim="mob1" class="home-hero-tablet-text-w"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e968a40345883f8ccc1b05_ln4-lando-norris-text-mobile.svg" loading="eager" alt="Lando Norris Text" class="image"></div><div data-hero-anim="mob2" class="eyebrow-w hero-next-race"><div data-anim-high="right, lime" split-text="lines,chars" class="text-eyebrow">mclaren f1 since 2019</div></div></div><div data-home-swipe-wrap="" class="home-hero-touch-controls-w"><button title="Toggle Swipe" data-home-swipe-toggle="" class="btn-w is-touch-swipe"><div class="btn-inner is-touch-swipe"><div class="btn-icon-w is-touch-swipe"><div class="btn-rive-w is-touch-swipe is-unlocked w-embed"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.51 15.32">
  <g>
    <path d="M4.9 15.32c-.37 0-.73-.07-1.07-.2s-.65-.34-.92-.61L.12 10.58a.747.747 0 0 1 .2-1.02l1.17-.8c.22-.22.52-.22.81-.13L2.27.77c0-.22.08-.4.23-.55S2.84 0 3.05 0s.39.07.54.22c.14.15.22.33.22.55v10.22s.02 1.13.02 1.55.28 1.26 1.08 1.26h4.78c.61 0 1.14-.2 1.57-.61.49-.47.73-1.15.73-1.83V7.15c0-.22.08-.4.23-.55s.34-.22.55-.22.39.07.54.22c.14.15.22.33.22.55v4.34c0 1.07-.37 1.98-1.11 2.72s-1.65 1.11-2.72 1.11H4.9Z" fill="currentColor"></path>
    <path d="M5.51 7.92V3.83c0-.22.08-.4.23-.55.15-.14.34-.22.55-.22s.39.07.54.22c.14.15.22.33.22.55v4.09H5.51ZM8.73 7.92V5.11c0-.22.08-.4.23-.55s.34-.22.55-.22.39.07.54.22c.14.15.22.33.22.55v2.81H8.73Z" fill="currentColor"></path>
  </g>
</svg></div><div class="btn-rive-w is-touch-swipe is-locked w-embed"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.51 8.51">
<g><path d="M7.89 7.89.63.63M.63 7.89 7.89.63" stroke="currentColor" stroke-width="0.17rem"></path>
</g></svg></div></div></div></button><div class="home-hero-touch-desc-w"><div data-home-swipe-desc="unlocked" class="touch-desc-inner"><div class="text-eyebrow touch-desc">tap to lock</div></div><div data-home-swipe-desc="locked" class="touch-desc-inner"><div class="text-eyebrow touch-desc">Back to scroll</div></div></div></div></div></section>
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 2: Hero
- **Confidence:** 0%
- **Tag:** section
- **Classes:** `s home-marquee`
- **Size:** full viewport height
- **Media:** 2 image(s), 1 canvas(es)
- **Animations:**
  - `div`.c: transition: all
  - `div`.marquee-gl-rive-target: transition: all
  - `div`.marqee-adv-layout: transition: all
  - `div`.marquee-gl-target-w: transition: all
  - `div`.marquee-gl-target: transition: all
  - `div`.marquee-adv-top-w: transition: all
  - `div`.marquee-adv-top-layout: transition: all
  - `div`.marquee-signature-w: transition: all
  - `div`.eyebrow-w: transition: all
  - `div`.gl-carousel: transition: all

### Element Style Blueprint

- **`<div>`** .c.is-marquee
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1440px | opacity: 1
  - anim: all
  - text: "Message from lando"

- **`<div>`** .marquee-gl-rive-target
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 800px | opacity: 1
  - anim: all

- **`<div>`** .marqee-adv-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all
  - text: "Message from lando"

- **`<div>`** .marquee-gl-target-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1440px | opacity: 1
  - anim: all

- **`<div>`** .marquee-gl-target
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 471.656px | opacity: 1
  - anim: all

- **`<div>`** .marquee-adv-top-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1440px | opacity: 1
  - anim: all
  - text: "Message from lando"

- **`<div>`** .marquee-adv-top-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: center | border: 0px none rgb(244, 244, 237) | display: flex | width: 102.172px | opacity: 1
  - anim: all
  - text: "Message from lando"

- **`<div>`** .marquee-signature-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: center | border: 0px none rgb(244, 244, 237) | display: block | width: 66px | opacity: 1
  - anim: all

- **`<div>`** .eyebrow-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: center | border: 0px none rgb(244, 244, 237) | display: flex | width: 102.172px | opacity: 1
  - anim: all
  - text: "Message from lando"

- **`<div>`** .gl-carousel
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all

### HTML Structure

```html
<section class="s home-marquee"><div class="c is-marquee"><div class="marqee-adv-layout"><div class="marquee-adv-top-w"><div class="marquee-adv-top-layout"><div class="marquee-signature-w"><div data-wf--c-home-hero-icon--variant="ln4" class="home-hero-logo-wrap"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67cecea4e9d311047dcb51e5_ln4-hw-signature2.svg" loading="eager" data-hero-anim="img" alt="Lando's signature in lime color" class="image is-home-marquee-sig-img w-variant-88b83061-c887-c094-eb94-cbb8cabca5e0 is-1"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67f517cdc5bb460c3c3b8e5b_ln4-LN-logo-svg.svg" loading="eager" data-hero-anim="img" alt="" class="image is-home-marquee-sig-img w-variant-88b83061-c887-c094-eb94-cbb8cabca5e0 is-ln4-logo"></div></div><div class="eyebrow-w"><div split-text="chars" data-hero-anim="msg" class="text-eyebrow">Message from lando</div></div></div></div><div class="marquee-gl-target-w"><div data-sticky-hero="target" class="marquee-gl-target"><div class="marquee-gl-rive-target"><div class="marquee-gl-rive-w w-embed"><canvas data-rive-object="" data-rive-file="signature" data-rive-artboard="signature" data-rive-state-machine="signature_scroll" data-rive-input="color_lime" data-rive-fit="contain" data-rive-scrolltrigger-target=".hero-rive-tracker" data-rive-scrolltrigger-start="top center" data-rive-scrolltrigger-end="bottom 80%">
</canvas></div></div></div></div><div data-gl="carousel" class="gl-carousel"></div></div></div></section>
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 3: Contact
- **Confidence:** 20%
- **Tag:** section
- **Classes:** `s`
- **Size:** full viewport height
- **Media:** 1 canvas(es), 1 SVG(s)
- **Animations:**
  - `div`.c: transition: all
  - `div`.impact-content-w: transition: all
  - `div`.text-impact-lg-mona: transition: all
  - `div`.impact-icon-w: transition: all
  - `div`.base-helmet-rive-w: transition: all
  - `div`.base-helmet-rive: transition: all
  - `div`.text-eyebrow: transition: all
  - `div`.base-helmet-rive: transition: all

### Element Style Blueprint

- **`<div>`** .c
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | padding: 0px 16.6667px | opacity: 1
  - anim: all
  - text: "mclaren f1 since 2019Redefining limits, fighting for wins, bringing it all in all ways. Defining a legacy in Formula 1 on and off the track."

- **`<div>`** .impact-content-w.is-home
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(221, 225, 210) | lh: 20px | text-align: center | border: 0px none rgb(221, 225, 210) | display: flex | width: 1068px | padding: 80px 0px 160px | margin: 0px 169.344px | opacity: 1
  - anim: all
  - text: "mclaren f1 since 2019Redefining limits, fighting for wins, bringing it all in all ways. Defining a legacy in Formula 1 on and off the track."

- **`<div>`** .text-impact-lg-mona
  - font: 105.833px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(221, 225, 210) | lh: 95.25px | ls: -0.833333px | text-transform: uppercase | text-align: center | border: 0px none rgb(221, 225, 210) | display: block | width: 1068px | opacity: 1
  - anim: all
  - text: "Redefining limits, fighting for wins, bringing it all in all ways. Defining a legacy in Formula 1 on and off the track."

- **`<div>`** .impact-icon-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(221, 225, 210) | lh: 20px | text-align: center | border: 0px none rgb(221, 225, 210) | display: flex | width: 101.906px | opacity: 1
  - anim: all
  - text: "mclaren f1 since 2019"

- **`<div>`** .base-helmet-rive-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(221, 225, 210) | lh: 20px | text-align: center | border: 0px none rgb(221, 225, 210) | display: block | width: 101.906px | opacity: 1
  - anim: all

- **`<div>`** .base-helmet-rive.w-embed
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(221, 225, 210) | lh: 20px | text-align: center | border: 0px none rgb(221, 225, 210) | display: flex | width: 80.8281px | margin: 0px 10.5469px 0px 10.5312px | opacity: 1
  - anim: all

- **`<div>`** .text-eyebrow
  - font: 8.33333px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(221, 225, 210) | lh: 8.33333px | text-transform: uppercase | text-align: center | border: 0px none rgb(221, 225, 210) | display: block | width: 101.906px | opacity: 1
  - anim: all
  - text: "mclaren f1 since 2019"

- **`<div>`** .base-helmet-rive.w-embed
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(221, 225, 210) | lh: 20px | text-align: center | border: 0px none rgb(221, 225, 210) | width: 80.8333px | margin: 0px auto | opacity: 1
  - anim: all

### HTML Structure

```html
<section class="s"><div class="c"><div class="impact-content-w is-home"><div class="impact-icon-w"><div class="base-helmet-rive-w"><div data-rive-placeholder="" class="base-helmet-rive w-embed"><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 97 50.1">
  <path d="M.4 27.6s3 .9 6.1 5.9c-.4-1.1-.6-2.2-.8-3.4C1.5 27.8 1.1 25.7.8 22c.2 1 3.2 2.4 3.6 4 .4 1.3.8 2.5 1.3 3.1 0-1-.1-2 0-3v-.5c-1.3-1.1-4.3-4.3-3.5-9.1.5 1.2 3 1.6 3.7 7.4.2-1.1.5-2.1.8-3.2C5.5 19.2 3.5 15 5.6 7.9c.3 1.2 2.5 5.7 2 8.3-.2.8-.2 1.7-.3 2.6 0-.2.1-.4.2-.6.3-.9.7-1.8 1.2-2.7 0-1.4-.2-2.8-.8-4.1-.3-.6-.4-1.3-.4-2s.4-1.3.8-1.8c.6-.8.8-2.8.8-2.8s2.2 3.4 0 9.8c.4-.7.9-1.5 1.4-2.1.4-1 .4-2 .2-3.1-.4-1.8-.7-4.5 2.2-7.7-.3 1.5.4 4.2-.1 6-.4 1.3-.9 2.6-1.5 3.8.5-.6 1.1-1.2 1.7-1.8.3-1 .2-2.5.8-4.9.7-2.9 2.2-3.3 2.8-4.8.5 3.3-1 6.7-2.4 8.6l.4-.3c.4-.3.8-.6 1.1-1 .4-1.8 1.2-3.5 2.4-5 .8-.9 2.7-1.4 3-2.2-.3 3.3-2.3 5.1-4 6.3.9-.5 1.9-.7 2.9-.7s2 .4 2.8 1c0 0-2.2 1.3-3.7 1.1-1.5-.2-2.1-.5-3-.2-.3.3-.7.6-1.1.9 2.2-.6 4.8 1 5.8 2-1.9.9-3.5.3-4.3-.6-.7-.7-1.8-.4-2.3-.8-.7.6-1.3 1.2-2 1.8-.7.7-1.3 1.5-1.9 2.4 1.4-1.3 3.7-2.7 6-2.2-.3.9-1.8 2.5-3.4 3.1-1.4.4-2.7.4-3.6.9-.6 1-1 2.1-1.4 3.3 2.1-3.1 6.3-3.9 7.3-3.7 0 0-2 .9-2.4 2.4-.5 1.6-2.2 2.1-3.6 2.2-.7.1-1.4.5-1.9 1-.4 1.4-.8 2.9-1 4.4 1.9-6.5 6.4-5.5 6.4-5.5-.6.3-1 .9-1.2 1.5-.4 1.1-.9 2-2.6 3.2-1.2.8-2.2 2.1-2.7 3.5 0 1.8.4 3.5.9 5.2-.3-2.2-.2-5.2 1.4-7.4-.2 1.5 1.5 4.1 1.1 5.9-.3 1.5-1.4 3.4-1.2 4.8.2.4.4.8.6 1.1 0-1 .5-2.3.5-3.3.3.9.2 3 .2 4.4.5.8 1.1 1.5 1.7 2.2-1.3-2.4-1.4-6-.4-9 1 1.5 2.1 4.4 1.8 6.4-.2 1.5 0 2.9.4 4.3l.3.3c.3.3.7.6 1 .8-1.5-2.1-1.3-5.3-1-6.7 1.8 2 3.3 6 3.2 8.1l1.2.6c1.6.7 3.4 1.1 5.1.6v.2l.1.2v.4c-1.8.5-3.8 0-5.5-.7l-1.8-.9c-1.1 1.1-3.4 1.8-4.8 1.4-1.3-.4-2.6-1.4-3.6-1.3 1.7-1.8 3.9-1.9 5.2-1.1 1.2.7 2 1 2.7.8-.8-.5-1.6-1.1-2.3-1.7l-.3-.3c-1.9.7-4 0-5.3-.8-1.5-.9-1.7-2.6-2.8-3.5 3.5-.1 5 1.4 5.6 2.3.5.7 1.2 1.3 2 1.5-1.1-1.1-2.1-2.2-2.9-3.5-.9-.2-3 0-4.1-1.5 1.5-.1 2.6 0 3.4.5-.2-.4-.4-.8-.6-1.1-1.1-.2-3.1 0-4.4-1.1-1.1-1.1-2.2-2.3-3.1-3.6 0 0 2.5.5 3.8 1.1-1.1-1-3.8-5.7-3.8-5.8ZM96.4 27.3s-3 1-6 6c.3-1.1.6-2.2.7-3.4 4.3-2.4 4.6-4.5 4.9-8.2-.2 1-3.1 2.5-3.6 4.1-.4 1.3-.8 2.5-1.2 3.2v-3.5c1.3-1.1 4.2-4.4 3.3-9.1-.4 1.2-3 1.6-3.6 7.5-.2-1.1-.5-2.1-.8-3.2 1.2-1.5 3.1-5.8.9-12.8-.3 1.2-2.4 5.7-1.9 8.3.2.8.3 1.7.3 2.6 0-.2-.1-.4-.2-.6L88 15.5c0-1.4.2-2.8.7-4.1.3-.6.4-1.3.3-2 0-.7-.4-1.3-.9-1.8-.6-.8-.9-2.8-.9-2.8s-2.1 3.5.2 9.8c-.4-.7-.9-1.4-1.5-2.1-.4-1-.5-2-.3-3.1.4-1.8.6-4.5-2.3-7.7.3 1.5-.4 4.2.2 6 .4 1.3.9 2.5 1.5 3.8-.5-.6-1.1-1.2-1.8-1.7-.3-1-.2-2.5-.8-4.9-.8-2.9-2.2-3.2-2.9-4.8-.4 3.3 1.1 6.7 2.5 8.6l-.4-.3-1.2-.9c-.4-1.8-1.3-3.5-2.5-5-.8-.9-2.8-1.3-3-2.2.3 3.3 2.4 5 4.1 6.3-.9-.5-1.9-.7-2.9-.6-1 0-2 .4-2.8 1 0 0 2.2 1.2 3.7 1 1.5-.2 2.1-.5 3-.2.3.3.7.6 1.1.9-2.2-.6-4.8 1.1-5.8 2.1 2 .9 3.5.2 4.3-.6.7-.7 1.7-.5 2.3-.9.7.6 1.4 1.1 2 1.8.7.7 1.3 1.5 1.9 2.3-1.4-1.2-3.7-2.6-6-2.1.3.9 1.8 2.5 3.5 3 1.4.4 2.7.4 3.6.8.6 1 1.1 2.1 1.5 3.2-2.2-3.1-6.4-3.7-7.4-3.6 0 0 2 .8 2.5 2.4.5 1.6 2.2 2 3.7 2.2.7 0 1.4.4 1.9 1 .5 1.4.8 2.9 1.1 4.4-2-6.4-6.5-5.4-6.5-5.4.6.3 1 .9 1.2 1.5.4 1.1.9 2 2.7 3.2 1.3.8 2.2 2 2.8 3.4 0 1.8-.3 3.5-.8 5.2.3-2.2.1-5.2-1.5-7.4.2 1.5-1.5 4.1-1 5.9.4 1.5 1.5 3.4 1.3 4.8l-.6 1.2c0-1-.5-2.3-.5-3.3-.3.9-.1 3-.2 4.4-.5.8-1 1.5-1.6 2.2 1.2-2.5 1.3-6 .2-9-1 1.5-2 4.5-1.7 6.5.2 1.5.1 2.9-.3 4.3l-.3.3c-.3.3-.7.6-1 .9 1.5-2.2 1.2-5.3.9-6.7-1.8 2-3.2 6-3 8.1-.4.2-.8.4-1.1.6-1.6.7-3.4 1.2-5.1.7v.8c1.9.5 3.8 0 5.5-.8.6-.3 1.2-.6 1.8-1 1.1 1.1 3.5 1.7 4.8 1.3 1.3-.4 2.6-1.5 3.6-1.4-1.7-1.7-4-1.8-5.2-1-1.1.7-1.9 1.1-2.7.8.8-.5 1.6-1.1 2.3-1.8l.3-.3c1.9.6 4 0 5.3-.9 1.4-.9 1.7-2.6 2.8-3.6-3.5 0-4.9 1.5-5.5 2.4-.5.7-1.2 1.3-2 1.5 1.1-1.1 2-2.3 2.9-3.5.9-.2 3-.1 4.1-1.6-1.5-.1-2.6 0-3.4.5l.6-1.2c1.1-.2 3.1 0 4.4-1.2 1.1-1.1 2.1-2.3 3-3.6 0 0-2.5.5-3.7 1.2 1.1-1 3.7-5.8 3.7-5.9ZM67.3 20.4zM67.2 20.8zM67.3 20.4zM67.3 20.4zM67.2 20.8zM68.4 33.8c.1-.7.3-1.4.4-2.3 1.1-6.1.4-11.8-2-17-2.9-6.2-9.3-12.9-18.3-13.1-9.1 0-15.6 6.4-18.7 12.6-2.6 5.1-3.4 10.8-2.4 17 .1.9.3 1.6.4 2.3 0 .5.1.9.3 1.4.1.6.3 1.2.4 1.7v.2c.1.5.3 1 .4 1.5.3 1 .5 1.5.8 1.9 0 .2.2.4.3.7l.3.9v.3c0 .3.1.5.2.8 0 1.4.7 2.2 1.5 3.3.9 1.1 1.6 1.3 2.9 1.5.9.1 1.4.2 3 .6l2 .4c2.3.8 4.6 1.3 7.9 1.3h.4c3.1 0 5.2-.4 7.5-1.1s1.9-.4 1.9-.4c1.6-.3 2.2-.4 3.1-.5 1.3-.2 2-.3 3-1.5.9-1 1.5-1.8 1.6-3.2.1-.3.2-.5.3-.8V42c0-.4.2-.7.3-.9.1-.3.2-.5.3-.7.3-.5.5-.9.8-1.9.1-.5.3-1 .4-1.5v-.2c.1-.5.3-1.1.4-1.7.2-.4.3-.9.3-1.4Zm-1-.2v.2c0 .3-.1.6-.2.9-.4 1.2-1.6 2.1-3.5 2.8.1-.3.2-.6.3-1 .4.1.9.2 1.4-.1.3-.2.4-.5.6-.8.1-.3.2-.6.3-1 .2-.7.3-1.7.6-2.8 0 .2 0 .4.2.6.1.2.3.2.5.3 0 .3-.1.7-.2 1ZM47.9 46.5c-7.3 0-13.6-1.7-16.1-4.1.1-.1.3-.3.6-.4 4.8 2.5 12.5 2.8 15.4 2.9h.7c3.3 0 10.4-.3 14.9-2.5.3.1.5.3.6.4-2.6 2.3-8.9 3.8-16.1 3.7ZM28.7 33.3v-.2c0-.3-.1-.6-.2-1 .4 0 .6-.4.7-.8.2.8.3 1.5.4 2 .2 1.4.4 2.2 1 2.6.3.2.6.3.8.3h.5c0 .3.1.7.2 1-1.9-.7-3-1.7-3.4-2.9 0-.3-.1-.6-.2-.9Zm1.8-18.5c.2-.2.4-.4.6-.5-.4.6-.9 1.3-1.2 2 .2-.5.4-.9.6-1.4Zm35.6.5c.2.5.4 1 .6 1.4-.4-.7-.8-1.4-1.2-2 .2.2.4.3.6.6ZM68 30.4h-.2c-.2 0-.5 0-.6.3.2-.9.4-1.5.5-1.9.2-.6.3-.8.5-.9 0 .9-.2 1.8-.3 2.8Zm-4.6 10.9h-.1c-.3-.1-.7-.2-1.1-.3 1.4-.4 2.6-.9 3.4-1.5-.5.7-1.3 1.3-2.3 1.8Zm-29.4.4c1.2-.2 2.5-.2 2.6-.2 3 .5 6.8.9 11.4.9h1.3c4.2 0 7.6-.3 10.4-.8 0 0 1.1.2 2.3.4-3.7 1.4-9.1 2-14 1.9-4.9 0-10.3-.7-13.9-2.2Zm-3.7-2.6c.9.6 2 1.2 3.4 1.6-.4 0-.8.1-1.1.2h-.1c-.9-.5-1.7-1.2-2.2-1.9Zm17.6 2.3c-10.6-.1-17.1-1.8-18.4-4.7 1.2.9 3 1.6 5.4 2.1 3.9.8 8.9.9 12.9.9h3.9c3.2 0 6.6-.1 9.5-.6 2.4-.4 4.2-1.1 5.4-2-1.4 2.9-8 4.4-18.6 4.2ZM33 35.3c0-.1 0-.3.4-.4.6-.1 1.1-.2 1.6-.2.6 0 1-.1 1.5-.3.4-.2.7 0 .7 0h.1v.8c0 .1-.1.3-.1.5v1c-.2.2-.2.2-1.1.2h-.3c-.7 0-1 .1-1.3.3-.2 0-.3.2-.6.2-.5 0-.7-1.3-.8-2.1Zm30.1.4Zm0 0Zm-4.1-1Zm-11 3.4v.5-.5s-.9 0-3.7-.4c.1-.1.2-.2.3-.4.4-.6 0-1.8 0-2 0-.1 0-.2-.2-.3 1 0 2.2 0 3.5.1h3.6s-.1.2-.2.3c0 .2-.5 1.4-.1 1.9.1.3.2.4.3.5-2.8.3-3.7.3-3.7.3Zm-7-2.6c.6.1 1.3.3 2.1.4h.3v.4h-.2c-.8-.1-2.3-.6-3.2-1.1.3 0 .7.1 1 .2Zm11.7 1v-.4h.3c.8 0 1.5-.2 2.1-.3.4 0 .7-.1 1-.2-.9.4-2.4.9-3.2 1h-.2Zm-16.8 1.4c.9 0 1.4 0 1.9-.6.2-.3.3-.6.3-.8 1.3.9 3.6 1.7 5.6 2.1-2.7 0-5.5-.3-8-.7h.2Zm22-1.1c0 .3 0 .6.3.8.5.6 1 .6 1.9.6h.2c-2.5.4-5.3.5-8 .5 2-.3 4.3-1.1 5.7-2Zm2.2.4c-.8 0-.9 0-1.1-.2-.1-.2 0-.4 0-.7V36c0-.2 0-.4-.1-.5s0-.1 0-.3v-.4h.7c.4.2.9.3 1.4.3.5 0 1 .1 1.7.3.3 0 .3.2.4.2v.1c-.1.8-.4 2.1-.8 2.1-.3 0-.4 0-.6-.2-.3-.2-.6-.3-1.3-.3h-.3Zm5.1-2.9v.4c-.3.3-.5.4-.5.4 0-.4-.4-1-1.6-1.3-.7-.2-1.3-.3-1.7-.3-.5 0-.8 0-1.1-.2-.6-.3-1.1-.2-1.4 0L58 33h-.2s-2.4.8-9.6.7c-7.3 0-9.5-.9-9.6-.9h-.2l-.9.2c-.3-.1-.8-.2-1.4 0-.3.1-.7.2-1.1.2-.5 0-1.1 0-1.8.3-1.1.3-1.5.9-1.6 1.3 0 0-.2 0-.5-.4 0-.3-.1-.7-.2-1.1-.1-.7-.3-1.5-.5-2.4-.1-.6-.3-1.1-.4-1.5-.4-1.6-.5-2.3-1.2-2.8-.4-.3-.2-1.3 0-2v-.2c.2-1.1.3-1.8.3-2.6 0-.7.2-1.4.2-1.4V20c0-.2-.1-.4-.2-.5.6 0 .6 0 .7.3v.4c0 .6.2 1.2.4 2.2.3 1.2.7 1.2 3.4 1.1h1c3.8-.2 6.2-.2 13.5 0 7.6 0 10.1.1 13.9.4.9 0 1.6.1 2.2.1h1.2c.3 0 .6-.2.8-.4.2-.2.2-.5.3-.7.3-1.1.4-1.9.5-2.5v-.2h.6v2.1c0 .8 0 1.5.2 2.6 0 .5.2 1 .2 1.5 0 .4-.1.6-.2.7-.5.3-.7.8-.9 1.4-.2.6-.4 1.5-.7 2.8-.4 1.3-.6 2.4-.7 3.2Zm-37-4.4c-.1-.9-.2-1.8-.2-2.8.4.3.5.7.8 2.2 0 .2.1.5.2.7 0 0 0-.1-.1-.1-.2-.1-.3-.2-.5-.2h-.2ZM52.5 6.2c-.4.7-.8 1.5-1.1 2.3-1-.2-1.9-.3-3-.3-1 0-2 0-3 .2-.3-.8-.7-1.6-1.1-2.3 1.3-.3 2.7-.5 4.1-.5 1.4 0 2.7.2 4.1.6Zm-4.3 3h.2c.9 0 1.8.1 2.6.2-.3.8-.6 1.7-.8 2.6h-3.6c-.2-.9-.5-1.7-.8-2.6.8-.1 1.6-.2 2.4-.2Zm17.5 11.4c-1.4-2-3.2-3.8-5.3-5.1.3-.3.6-.6.9-.8 1.9 1.8 3.4 3.9 4.4 5.8ZM49.9 13c-.2.7-.3 1.5-.5 2.2h-2.2c-.1-.8-.3-1.5-.4-2.2h3.1Zm-1.6 3.2h1c-.1.7-.2 1.4-.3 2.2h-1.4c0-.7-.1-1.5-.2-2.2h1Zm15.3 5.9c-1.4-1-3.1-1.9-5.3-2.5.1-.5.3-1 .5-1.5 2.1.9 3.8 2.3 5.2 4h-.4Zm-15.5-.5h-.4c0-.8 0-1.5-.1-2.3h1.2c0 .7-.1 1.5-.2 2.3H48Zm-8.6-.1c0-.5-.1-1-.2-1.4 1.2-.3 2.6-.4 4.3-.6.1.7.2 1.3.3 2.1h-4.3Zm-1 0h-3.7c1-.5 2.1-1 3.5-1.3 0 .4.1.8.2 1.2Zm6.3.1c0-.7-.2-1.4-.3-2.1h2c0 .7 0 1.5.1 2.2h-1.9Zm5.1-2.2c.7 0 1.4 0 2 .1l-.3 2.1h-1.9c0-.8.1-1.5.2-2.2Zm3 .2c1.6.2 3 .4 4.2.7 0 .5-.2.9-.2 1.4h-4.3c0-.7.2-1.4.3-2Zm5.2.9c1.3.4 2.5.9 3.5 1.4-.9 0-1.9-.1-3.1-.2h-.6c0-.4.1-.8.2-1.2Zm-.7-1.2c-1.2-.3-2.6-.5-4.3-.7.2-.7.
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 4: Hero
- **Confidence:** 20%
- **Tag:** section
- **Classes:** `s is-horizontal-track`
- **Size:** full viewport height
- **Media:** 13 image(s)
- **Sticky elements:** 2
- **Animations:**
  - `div`.horizontal-track: transition: all
  - `div`.c: transition: all
  - `div`.horizontal-pin-wrap: transition: all
  - `div`.horizontal-pin-spacer: transition: all
  - `div`.horizontal-pin-sticky: transition: all
  - `div`.sticky-track-theme-change: transition: all

### Element Style Blueprint

- **`<div>`** .horizontal-track
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 5357.2px | padding: 77px 16.6667px 33.3333px 1080px | opacity: 1
  - anim: all
  - text: "Qatar, 2024FIA Prize Giving, 2024It doesn’t matter where you start, it’s how you progress from there.Miami GP, 2024Monaco, 2023Britain, 20251Battersea"

- **`<div>`** .c.is-horiz-scroll
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all
  - text: "Qatar, 2024FIA Prize Giving, 2024It doesn’t matter where you start, it’s how you progress from there.Miami GP, 2024Monaco, 2023Britain, 20251Battersea"

- **`<div>`** .horizontal-pin-wrap
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all
  - text: "Qatar, 2024FIA Prize Giving, 2024It doesn’t matter where you start, it’s how you progress from there.Miami GP, 2024Monaco, 2023Britain, 20251Battersea"

- **`<div>`** .horizontal-pin-spacer
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all
  - text: "Qatar, 2024FIA Prize Giving, 2024It doesn’t matter where you start, it’s how you progress from there.Miami GP, 2024Monaco, 2023Britain, 20251Battersea"

- **`<div>`** .horizontal-pin-sticky
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1440px | opacity: 1
  - anim: all
  - text: "Qatar, 2024FIA Prize Giving, 2024It doesn’t matter where you start, it’s how you progress from there.Miami GP, 2024Monaco, 2023Britain, 20251Battersea"

- **`<div>`** .sticky-track-theme-change
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | opacity: 1
  - anim: all

### HTML Structure

```html
<section data-gl-change-to="white, dark-green-tint-1-low" data-horizontal-section="" data-h-color-from="dark-green" data-h-color-to="white" data-gl-change-track="" data-gl-change-from="dark-green, dark-green-tint-1" class="s is-horizontal-track"><div class="c is-horiz-scroll"><div class="horizontal-pin-wrap"><div class="horizontal-pin-spacer"><div class="horizontal-pin-sticky"><div class="horizontal-track"><div class="horizontal-grid-col"><div class="horizontal-item-w is-home-1"><div class="horizontal-item-layout is-home-1"><div class="eyebrow-w c-green-off-white-2"><div split-text="lines" class="text-eyebrow">Qatar, 2024</div></div><div class="horizontal-item-img-w is-home-1"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa04b14a1ca33c0b25_ln-home-horiz-1.webp" loading="eager" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa04b14a1ca33c0b25_ln-home-horiz-1-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa04b14a1ca33c0b25_ln-home-horiz-1.webp 649w" alt="Lando in casual clothes walking through paddock" class="image is-horizontal-scroll"></div></div></div><div class="horizontal-item-w is-home-2"><div class="horizontal-item-layout is-home-2"><div class="eyebrow-w c-green-off-white-2"><div split-text="lines" class="text-eyebrow">FIA Prize Giving, 2024</div></div><div class="horizontal-item-img-w is-home-2"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baab12220595c8223b3_ln-home-horiz-2.webp" loading="eager" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baab12220595c8223b3_ln-home-horiz-2-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baab12220595c8223b3_ln-home-horiz-2.webp 656w" alt="Lando lifting trophy in tux" class="image is-horizontal-scroll"></div></div></div></div><div class="horizontal-grid-spacer"></div><div class="horizontal-grid-col large-img is-home1"><div class="horizontal-item-w is-text-callout callout-1"><div class="horizontal-item-layout"><div class="horizontal-item-text-layout"><div split-text="lines" class="horizontal-item-text">It doesn’t matter <span class="span-green-off-white-1">where</span> you start, it’s <span class="span-green-off-white-1">how</span> you progress from there.</div><div class="horizontal-rive-placeholder"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67cecea4e9d311047dcb51e5_ln4-hw-signature2.svg" loading="eager" alt="Lando's signature in lime color" class="image"></div></div></div></div><div class="horizontal-item-w is-home3"><div class="horizontal-item-layout"><div class="eyebrow-w c-green-off-white-2"><div split-text="lines" class="text-eyebrow">Miami GP, 2024</div></div><div class="horizontal-item-img-w is-home3"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3.webp" loading="eager" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3-p-1080.webp 1080w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3.webp 1464w" alt="Lando lifting tophy" class="image is-horizontal-scroll"></div></div></div></div><div class="horizontal-grid-spacer"></div><div class="horizontal-grid-col is-home-flip neg-margin"><div class="horizontal-item-w is-home-4 neg-margin"><div class="horizontal-item-layout"><div class="eyebrow-w c-green-off-white-2"><div split-text="lines" class="text-eyebrow">Monaco, 2023</div></div><div class="horizontal-item-img-w is-home-5"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa798e2cc6e02ac38a_ln-home-horiz-4.webp" loading="eager" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa798e2cc6e02ac38a_ln-home-horiz-4-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa798e2cc6e02ac38a_ln-home-horiz-4.webp 529w" alt="Lando playing golf" class="image is-horizontal-scroll"></div></div></div><div class="horizontal-item-w is-5"><div class="horizontal-item-layout is-home-5"><div class="eyebrow-w c-green-off-white-2"><div split-text="lines" class="text-eyebrow">Britain, 2025</div></div><div class="horizontal-item-img-w is-home-4"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68da85d632bfefc552a0faac_Britain-25%20(1).webp" loading="eager" width="Auto" alt="Lando in f1 car" class="image is-horizontal-scroll"></div><div data-hide="m" class="horizontal-item-pill-w"><div class="horizontal-item-pill"><div class="horizontal-pill-box is-side"><div class="horizontal-pill-text">1</div></div><div class="horizontal-pill-box"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/680cbcfdbc4bdc0ef619369f_ln-icon-crossed-flags2.svg" loading="eager" alt="" class="horizontal-pill-icon"></div></div></div></div></div></div><div class="horizontal-grid-spacer half"></div><div class="horizontal-grid-col"><div class="horizontal-item-w is-home-6"><div class="horizontal-item-layout"><div class="eyebrow-w c-dark-green-tint-2"><div split-text="lines" class="text-eyebrow">Battersea, 2024</div></div><div class="horizontal-item-img-w is-home-6"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa14a96f3cdd2f9a95_ln-home-horiz-6.webp" loading="eager" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa14a96f3cdd2f9a95_ln-home-horiz-6-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa14a96f3cdd2f9a95_ln-home-horiz-6.webp 642w" alt="Lando holding dog smiling" class="image is-horizontal-scroll"></div></div></div></div><div class="horizontal-grid-col"><div class="horizontal-item-w is-home-7"><div class="horizontal-item-layout is-home-7"><div class="eyebrow-w c-dark-green-tint-2"><div split-text="lines" class="text-eyebrow">High Performance Gala, 2024</div></div><div class="horizontal-item-img-w is-home-7"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302bab3ee6e26b1f434a7d_ln-home-horiz-7.webp" loading="eager" alt="Lando in tux" class="image is-horizontal-scroll"></div></div></div></div><div class="horizontal-grid-spacer half"></div><div class="horizontal-grid-col"><div class="horizontal-item-w is-home-8 neg-margin"><div class="horizontal-item-layout"><div class="eyebrow-w c-dark-green-tint-2"><div split-text="lines" class="text-eyebrow">Barcelona, 2024</div></div><div class="horizontal-item-img-w is-home8"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baaedf821dd2e3a7c74_ln-home-horiz-8.webp" loading="eager" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baaedf821dd2e3a7c74_ln-home-horiz-8-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baaedf821dd2e3a7c74_ln-home-horiz-8-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baaedf821dd2e3a7c74_ln-home-horiz-8-p-1080.webp 1080w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baaedf821dd2e3a7c74_ln-home-horiz-8.webp 1461w" alt="Lando taking photo out of a plane" class="image is-horizontal-scroll"></div></div></div><div class="horizontal-item-w is-text-callout is-home-callout-2"><div class="horizontal-item-layout"><div class="horizontal-item-text-layout"><div split-text="lines" class="horizontal-item-text c-dark-green-tint-1">Since I was 7 years old and had my first experience with kart racing, I’ve worked tirelessly to make that dream come true.</div><div class="horizontal-rive-placeholder"><img src="https://cdn.prod.website-files.com/67b5a02dc5d
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 5: Proof
- **Confidence:** 20%
- **Tag:** section
- **Classes:** `s is-otot-home`
- **Size:** full viewport height
- **Headings:** H2: "ON"; H2: "TRACK"; H2: "OFF"; H2: "TRACK"
- **Media:** 2 image(s), 3 canvas(es)
- **Animations:**
  - `div`.c: transition: all
  - `div`.otot-home-bg: transition: all
  - `div`.otot-home-inner: transition: all
  - `div`.otot-home-img-w: transition: all
  - `img`.otot-home-img: transition: all
  - `div`.otot-home-img-w: transition: all
  - `img`.otot-home-img: transition: all
  - `div`.otot-home-layout: transition: all
  - `div`.otot-home-text-col: transition: all
  - `div`.otot-home-text-col: transition: all
  - `div`.otot-home-text-w: transition: all
  - `div`.otot-home-text-w: transition: all
  - `div`.otot-home-p-w: transition: all
  - `div`.otot-home-p-w: transition: all
  - `div`.btn-auto-top: transition: all
  - `div`: transition: all

### Element Style Blueprint

- **`<div>`** .c.is-otot-home
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1440px | padding: 0px 16.6667px | opacity: 1
  - anim: all
  - text: "ONTRACK Most recent results, career stats and photos from trackside. OFFTRACKCampaigns, shoots and other such promotional materials for fans"

- **`<div>`** .otot-home-bg
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1440px | opacity: 1
  - anim: all

- **`<div>`** .otot-home-inner
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 1406.69px | opacity: 1
  - anim: all
  - text: "ONTRACK Most recent results, career stats and photos from trackside. OFFTRACKCampaigns, shoots and other such promotional materials for fans"

- **`<div>`** .otot-home-img-w.is-2
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 451.422px | opacity: 1
  - anim: all

- **`<img>`** .otot-home-img
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 451.422px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e56_ln4-hp-lando-head.webp

- **`<div>`** .otot-home-img-w.is-1
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 419.25px | opacity: 1
  - anim: all

- **`<img>`** .otot-home-img.is-helmet
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 419.25px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e53_ln4-hp-lando-helmet.webp

- **`<div>`** .otot-home-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 617px | opacity: 1
  - anim: all
  - text: "ONTRACK Most recent results, career stats and photos from trackside. OFFTRACKCampaigns, shoots and other such promotional materials for fans"

- **`<div>`** .otot-home-text-col.is-1
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: right | border: 0px none rgb(40, 44, 32) | display: flex | width: 283.5px | opacity: 1
  - anim: all
  - text: "ONTRACK Most recent results, career stats and photos from trackside."

- **`<div>`** .otot-home-text-col.is-2
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: left | border: 0px none rgb(40, 44, 32) | display: flex | width: 283.5px | opacity: 1
  - anim: all
  - text: "OFFTRACKCampaigns, shoots and other such promotional materials for fans"

- **`<div>`** .otot-home-text-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: right | border: 0px none rgb(40, 44, 32) | display: block | width: 283.5px | opacity: 1
  - anim: all
  - text: "ONTRACK"

- **`<div>`** .otot-home-text-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: left | border: 0px none rgb(40, 44, 32) | display: block | width: 283.5px | opacity: 1
  - anim: all
  - text: "OFFTRACK"

- **`<div>`** .otot-home-p-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: right | border: 0px none rgb(40, 44, 32) | display: flex | width: 280px | margin: 16.6667px 0px 0px | opacity: 1
  - anim: all
  - text: "Most recent results, career stats and photos from trackside."

- **`<div>`** .otot-home-p-w.is-2
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: left | border: 0px none rgb(40, 44, 32) | display: flex | width: 280px | margin: 16.6667px 0px 0px | opacity: 1
  - anim: all
  - text: "Campaigns, shoots and other such promotional materials for fans"

- **`<div>`** .btn-auto-top
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: right | border: 0px none rgb(40, 44, 32) | display: block | width: 50px | opacity: 1
  - anim: all

- **`<div>`**
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: left | border: 0px none rgb(40, 44, 32) | display: block | width: 50px | opacity: 1
  - anim: all

### HTML Structure

```html
<section data-otot-top="" data-designmode-white="" class="s is-otot-home"><div class="c is-otot-home"><div class="otot-home-inner"><div class="otot-home-layout"><div class="otot-home-text-col is-1"><div class="otot-home-text-w"><h2 data-anim-high="right, dark-green-tint-1" split-text="lines" class="text-impact-reg-brier">ON<br></h2><h2 data-anim-high="right, dark-green-tint-1" split-text="lines" class="text-impact-reg-mona line-increase">TRACK</h2><div class="otot-home-text-rive w-embed"><canvas data-rive-object="" data-rive-file="phrases" data-rive-artboard="phrase_on" data-rive-state-machine="phrase_on" data-rive-fit="contain" data-rive-scrolltrigger="true" data-rive-scrolltrigger-start="top center">
</canvas></div></div><div class="otot-home-p-w"><p split-text="lines" data-anim-high="right, dark-green-tint-1, 200" class="text-body-reg-mona">Most recent <strong>results</strong>, career stats and photos from trackside.</p></div><div class="btn-auto-top"><a title="On Track page" data-btn-rive-rotate="true" data-btn-rive-hover="" href="/on-track" class="btn-w icon-only w-inline-block"><div class="btn-inner"><div class="btn-icon-w"><div class="btn-rive-w is-large w-embed"><canvas data-rive-object="" data-rive-file="btn-ui" data-rive-artboard="arrow" data-rive-state-machine="arrow" data-rive-hover="false" data-rive-fit="contain">
</canvas></div></div></div></a></div></div><div class="otot-home-text-col is-2"><div class="otot-home-text-w"><h2 data-anim-high="left, dark-green-tint-1" split-text="lines" class="text-impact-reg-brier">OFF<br></h2><h2 data-anim-high="left, dark-green-tint-1" split-text="lines" class="text-impact-reg-mona line-increase">TRACK</h2></div><div class="otot-home-p-w is-2"><p split-text="lines" data-anim-high="left, dark-green-tint-1, 200" class="text-body-reg-mona"><strong>Campaigns</strong>, shoots and other such promotional materials for fans</p></div><div><a title="Off Track Page" data-btn-rive-rotate="false" data-btn-rive-hover="" href="/off-track" class="btn-w icon-only w-inline-block"><div class="btn-inner"><div class="btn-icon-w"><div class="btn-rive-w is-large w-embed"><canvas data-rive-object="" data-rive-file="btn-ui" data-rive-artboard="arrow" data-rive-state-machine="arrow" data-rive-hover="false" data-rive-fit="contain">
</canvas></div></div></div></a></div></div></div></div><div class="otot-home-bg"><div class="otot-home-img-w is-1"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e53_ln4-hp-lando-helmet.webp" loading="eager" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e53_ln4-hp-lando-helmet-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e53_ln4-hp-lando-helmet.webp 834w" alt="Lando Norris wearing a lime helmet, side profile" class="otot-home-img is-helmet"></div><div class="otot-home-img-w is-2"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e56_ln4-hp-lando-head.webp" loading="eager" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e56_ln4-hp-lando-head-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e56_ln4-hp-lando-head-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e56_ln4-hp-lando-head.webp 898w" alt="Lando Norris wearing a fleece side profile" class="otot-home-img"></div></div></div></section>
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 6: Hero
- **Confidence:** 0%
- **Tag:** section
- **Classes:** `s is-otot-end`
- **Size:** full viewport height
- **Media:** 1 image(s)
- **Animations:**
  - `img`.image: transition: all
  - `div`.otot-home-end-img-w: transition: all

### Element Style Blueprint

- **`<img>`** .image.is-otot-home-end
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302ff5ff89a9a4afb8c19e_ln-home-helm-large.webp

- **`<div>`** .otot-home-end-img-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1440px | opacity: 1
  - anim: all

### HTML Structure

```html
<section data-otot-bottom="" class="s is-otot-end"><div class="otot-home-end-img-w"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302ff5ff89a9a4afb8c19e_ln-home-helm-large.webp" loading="eager" alt="Lando lifting helmet up" class="image is-otot-home-end"></div></section>
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 7: Team
- **Confidence:** 20%
- **Tag:** section
- **Classes:** `s home-helmets`
- **Size:** full viewport height
- **Headings:** H2: "Helmets"; H2: "Hall of Fame"; H3: "Season"; H3: "Discoball"; H3: "Dark Glitter"; H3: "Season"; H3: "Porcelain"; H3: "Japan"; H3: "GIF"; H3: "Dark Mode"; H3: "Race"; H3: "Las Vegas"; H3: "Chrome"; H3: "Beachball"; H3: "Basketball"; H3: "Season"; H3: "Silverstone"; H3: "Season"
- **Media:** 64 image(s), 64 SVG(s)
- **Animations:**
  - `div`.c: transition: all
  - `div`.w-dyn-list: transition: all
  - `div`.helmet-grid: transition: all
  - `div`.spacer: transition: all
  - `div`.title-layout: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all

### Element Style Blueprint

- **`<div>`** .c.home-helmets
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | padding: 33.3333px 16.6667px 16.6667px | opacity: 1
  - anim: all
  - text: "HelmetsHall of FameFrom his iconic blobs to innovative one-off designs, Lando has always been passionate about designing innovative and memorable helm"

- **`<div>`** .w-dyn-list
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1406.69px | opacity: 1
  - anim: all
  - text: "Season2025 Discoball2025 Dark Glitter2025 Season2024 Porcelain2024 Japan2024 GIF2024 Dark Mode2024 Race2023 Las Vegas2023 Chrome2023 Beachball2023 Bas"

- **`<div>`** .helmet-grid.w-dyn-items
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: grid | width: 1406.69px | opacity: 1
  - anim: all
  - text: "Season2025 Discoball2025 Dark Glitter2025 Season2024 Porcelain2024 Japan2024 GIF2024 Dark Mode2024 Race2023 Las Vegas2023 Chrome2023 Beachball2023 Bas"

- **`<div>`** .spacer._8-75rem
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1406.69px | opacity: 1
  - anim: all

- **`<div>`** .title-layout.grid-main
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: grid | width: 1406.69px | opacity: 1
  - anim: all
  - text: "HelmetsHall of FameFrom his iconic blobs to innovative one-off designs, Lando has always been passionate about designing innovative and memorable helm"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Discoball2025"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Season2024"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Japan2024"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Dark Mode2024"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Las Vegas2023"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Beachball2023"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Season2021"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Season2019"

- **`<div>`** .helmet-grid-item-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Discoball2025"

- **`<div>`** .helmet-grid-item-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Season2024"

- **`<div>`** .helmet-grid-item-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Japan2024"

- **`<div>`** .helmet-grid-item-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Dark Mode2024"

- **`<div>`** .helmet-grid-item-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Las Vegas2023"

- **`<div>`** .helmet-grid-item-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Beachball2023"

- **`<div>`** .helmet-grid-item-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Season2021"

- **`<div>`** .helmet-grid-item-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Season2019"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.172px | opacity: 1
  - anim: all
  - text: "Season2025"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.172px | opacity: 1
  - anim: all
  - text: "Dark Glitter2025"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.172px | opacity: 1
  - anim: all
  - text: "Porcelain2024"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.172px | opacity: 1
  - anim: all
  - text: "GIF2024"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.172px | opacity: 1
  - anim: all
  - text: "Race2023"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.172px | opacity: 1
  - anim: all
  - text: "Chrome2023"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.172px | opacity: 1
  - anim: all
  - text: "Basketball2022"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.172px | opacity: 1
  - anim: all
  - text: "Silverstone2020"

- **`<div>`** .helmet-grid-item-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.172px | opacity: 1
  - anim: all
  - text: "Season2025"

### HTML Structure

```html
<section class="s home-helmets"><div class="c home-helmets"><div class="title-layout grid-main"><div id="w-node-_5d5ac04e-626f-e2bd-ba2c-8a1157b2eda4-0b17a7eb" class="title-headline-w flex"><h2 data-anim-high="" split-text="lines" class="text-title-lg-mona">Helmets<br></h2><h2 data-anim-high="" split-text="lines" class="text-title-lg-mona"><span class="text-title-lg-brier c-lime-off">Hall of Fame</span></h2></div><div id="w-node-_8734ac60-bf7c-ac47-bf21-501caa438859-0b17a7eb" class="title-para-w c-grey-on-track"><p data-anim-high="right, lime, 200" split-text="lines" class="text-body-reg-mona">From his iconic blobs to innovative one-off designs, Lando has always been passionate about designing innovative and memorable helmets.</p></div></div><div class="spacer _8-75rem m-6rem"></div><div class="w-dyn-list"><div data-helmet-grid="" role="list" class="helmet-grid w-dyn-items"><div role="listitem" class="helmet-grid-item-w w-dyn-item"><div class="helmet-grid-item-w"><div data-helmet-item="" class="helmet-grid-item"><div class="helmet-grid-frame-w destop"><div class="helmet-grid-frame is-overlay w-embed"><svg width="100%" height="100%" viewBox="0 0 407 411" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1h390.89a7 7 0 0 1 7 7v356.983a7 7 0 0 1-7 7H263.329a23.999 23.999 0 0 0-18.766 9.038l-16.499 20.694A21.999 21.999 0 0 1 210.862 410H8a7 7 0 0 1-7-7V8a7 7 0 0 1 7-7Z" stroke="var(--color--lime)" stroke-width="2"></path>
</svg></div><div class="helmet-grid-frame is-base w-embed"><svg width="100%" height="100%" viewBox="0 0 407 411" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 .5h390.89a7.5 7.5 0 0 1 7.5 7.5v356.983a7.5 7.5 0 0 1-7.5 7.5H263.329a23.502 23.502 0 0 0-18.375 8.849l-16.499 20.695a22.502 22.502 0 0 1-17.593 8.473H8A7.5 7.5 0 0 1 .5 403V8A7.5 7.5 0 0 1 8 .5Z" stroke="currentColor" stroke-width="2" vector-effect="non-scaling-stroke"></path>
</svg></div></div><div class="helmet-grid-frame-w mobile"><div class="helmet-grid-frame is-overlay w-embed"><svg width="100%" height="100%" viewBox="0 0 187 188" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 .5h170.12a7.5 7.5 0 0 1 7.5 7.5v154.61a7.5 7.5 0 0 1-7.5 7.5H60.681a10.5 10.5 0 0 0-8.21 3.954l-7.86 9.858a9.5 9.5 0 0 1-7.427 3.578H8A7.5 7.5 0 0 1 .5 180V8A7.5 7.5 0 0 1 8 .5Z" stroke="var(--color--lime)" stroke-width="2"></path></svg></div><div class="helmet-grid-frame is-base w-embed"><svg width="100%" height="100%" viewBox="0 0 187 188" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 .5h170.12a7.5 7.5 0 0 1 7.5 7.5v154.61a7.5 7.5 0 0 1-7.5 7.5H60.681a10.5 10.5 0 0 0-8.21 3.954l-7.86 9.858a9.5 9.5 0 0 1-7.427 3.578H8A7.5 7.5 0 0 1 .5 180V8A7.5 7.5 0 0 1 8 .5Z" stroke="currentColor" stroke-width="1"></path></svg></div></div><div class="helmet-grid-item-img-w"><div class="helmet-grid-item-img-helmet-w"><img src="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b3e6c7ab86033cf172c_In-helm-2025-Season-base.webp" loading="eager" alt="" sizes="100vw" srcset="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b3e6c7ab86033cf172c_In-helm-2025-Season-base-p-500.webp 500w, https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b3e6c7ab86033cf172c_In-helm-2025-Season-base-p-800.webp 800w, https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b3e6c7ab86033cf172c_In-helm-2025-Season-base.webp 823w" class="helmet-grid-item-img-helmet"></div><img src="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b411c575b2f777125f6_In-helm-2025-Season-hover.webp" loading="eager" alt="" sizes="100vw" srcset="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b411c575b2f777125f6_In-helm-2025-Season-hover-p-500.webp 500w, https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b411c575b2f777125f6_In-helm-2025-Season-hover.webp 823w" class="helmet-grid-item-reveal-img"></div></div><div class="helmet-grid-item-text-w"><h3 class="text-title-small-label text">Season</h3><div class="helmet-grid-item-date-w"><div class="text-title-small-label date">2025</div></div><div class="helmet-grid-extender"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e41c00f127bc68e2462635_ln4-2-helm-mask-extender-grey-fade.png" loading="eager" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e41c00f127bc68e2462635_ln4-2-helm-mask-extender-grey-fade-p-500.png 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e41c00f127bc68e2462635_ln4-2-helm-mask-extender-grey-fade.png 669w" alt="" class="helmet-grid-extender-img"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e41235ad69136bdc861b67_ln4-2-helm-mask-extender-lime-fade.png" loading="eager" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e41235ad69136bdc861b67_ln4-2-helm-mask-extender-lime-fade-p-500.png 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e41235ad69136bdc861b67_ln4-2-helm-mask-extender-lime-fade.png 669w" alt="" class="helmet-grid-extender-img is-overlay"></div></div></div></div><div role="listitem" class="helmet-grid-item-w w-dyn-item"><div class="helmet-grid-item-w"><div data-helmet-item="" class="helmet-grid-item"><div class="helmet-grid-frame-w destop"><div class="helmet-grid-frame is-overlay w-embed"><svg width="100%" height="100%" viewBox="0 0 407 411" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1h390.89a7 7 0 0 1 7 7v356.983a7 7 0 0 1-7 7H263.329a23.999 23.999 0 0 0-18.766 9.038l-16.499 20.694A21.999 21.999 0 0 1 210.862 410H8a7 7 0 0 1-7-7V8a7 7 0 0 1 7-7Z" stroke="var(--color--lime)" stroke-width="2"></path>
</svg></div><div class="helmet-grid-frame is-base w-embed"><svg width="100%" height="100%" viewBox="0 0 407 411" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 .5h390.89a7.5 7.5 0 0 1 7.5 7.5v356.983a7.5 7.5 0 0 1-7.5 7.5H263.329a23.502 23.502 0 0 0-18.375 8.849l-16.499 20.695a22.502 22.502 0 0 1-17.593 8.473H8A7.5 7.5 0 0 1 .5 403V8A7.5 7.5 0 0 1 8 .5Z" stroke="currentColor" stroke-width="2" vector-effect="non-scaling-stroke"></path>
</svg></div></div><div class="helmet-grid-frame-w mobile"><div class="helmet-grid-frame is-overlay w-embed"><svg width="100%" height="100%" viewBox="0 0 187 188" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 .5h170.12a7.5 7.5 0 0 1 7.5 7.5v154.61a7.5 7.5 0 0 1-7.5 7.5H60.681a10.5 10.5 0 0 0-8.21 3.954l-7.86 9.858a9.5 9.5 0 0 1-7.427 3.578H8A7.5 7.5 0 0 1 .5 180V8A7.5 7.5 0 0 1 8 .5Z" stroke="var(--color--lime)" stroke-width="2"></path></svg></div><div class="helmet-grid-frame is-base w-embed"><svg width="100%" height="100%" viewBox="0 0 187 188" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 .5h170.12a7.5 7.5 0 0 1 7.5 7.5v154.61a7.5 7.5 0 0 1-7.5 7.5H60.681a10.5 10.5 0 0 0-8.21 3.954l-7.86 9.858a9.5 9.5 0 0 1-7.427 3.578H8A7.5 7.5 0 0 1 .5 180V8A7.5 7.5 0 0 1 8 .5Z" stroke="currentColor" stroke-width="1"></path></svg></div></div><div class="helmet-grid-item-img-w"><div class="helmet-grid-item-img-helmet-w"><img src="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b2259159e5170d2b923_In-helm-2025-Discoball-base.webp" loading="eager" alt="" sizes="100vw" srcset="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b2259159e5170d2b923_In-helm-2025-Discoball-base-p-500.webp 500w, https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b2259159e5170d2b923_In-helm-2025-Discoball-base-p-800.webp 800w, https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b2259159e5170d2b923_In-helm-2025-Discoball-base.webp 823w" class="helmet-grid-item-img-helmet"></div><img src="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b24037a1e7681195c20_In-helm-2025-Discoball-hover.webp" loading="eager" alt="" sizes="100vw" srcset="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b24037a1e7681195c20_In-helm-2025-Discoball-hover-p-500.webp 500w, https://cd
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 8: Hero
- **Confidence:** 15%
- **Tag:** section
- **Classes:** `s`
- **Size:** 476px height
- **CTAs:** view on track
- **Media:** 2 canvas(es), 1 SVG(s)
- **Animations:**
  - `div`.c: transition: all
  - `div`.callout-layout: transition: all
  - `div`.callout-text-w: transition: all
  - `div`.text-cta-short-intro: transition: all
  - `a`.btn-w: transition: all
  - `div`.callout-rive-w: transition: all
  - `div`.callout-icon: transition: all
  - `canvas`: transition: all
  - `div`.btn-inner: transition: all
  - `div`.btn-inner-text-w: transition: all
  - `div`.btn-icon-w: transition: all
  - `div`.callout-icon: transition: all
  - `svg`: transition: all

### Element Style Blueprint

- **`<div>`** .c.is-callout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1440px | padding: 160px 16.6667px 116.667px | opacity: 1
  - anim: all
  - text: "See more helmets and highlights from Lando on the trackview on track"

- **`<div>`** .callout-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 433.328px | opacity: 1
  - anim: all
  - text: "See more helmets and highlights from Lando on the trackview on track"

- **`<div>`** .callout-text-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: center | border: 0px none rgb(244, 244, 237) | display: block | width: 433.328px | opacity: 1
  - anim: all
  - text: "See more helmets and highlights from Lando on the track"

- **`<div>`** .text-cta-short-intro.font-brier
  - font: 26.6667px 400 Brier, Arial, sans-serif | color: rgb(244, 244, 237) | lh: 27.7333px | ls: 0.666667px | text-align: center | border: 0px none rgb(244, 244, 237) | display: block | width: 433.328px | opacity: 1
  - anim: all
  - text: "See more helmets and highlights from Lando on the track"

- **`<a>`** .btn-w.w-inline-block
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | bg: rgb(210, 255, 0) | radius: 7.2px | border: 1px solid rgb(210, 255, 0) | display: flex | width: 142.047px | padding: 0px 13.3333px | opacity: 1
  - anim: all
  - href: https://landonorris.com/on-track
  - text: "view on track"

- **`<div>`** .callout-rive-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 75px | opacity: 1
  - anim: all

- **`<div>`** .callout-icon.w-embed
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(210, 255, 0) | lh: 20px | text-align: start | border: 0px none rgb(210, 255, 0) | display: flex | width: 75px | opacity: 1
  - anim: all

- **`<canvas>`**
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(210, 255, 0) | lh: 20px | text-align: start | border: 0px none rgb(210, 255, 0) | display: block | width: 75px | opacity: 1
  - anim: all

- **`<div>`** .btn-inner
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 113.391px | opacity: 1
  - anim: all
  - text: "view on track"

- **`<div>`** .btn-inner-text-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 89.0625px | opacity: 1
  - anim: all
  - text: "view on track"

- **`<div>`** .btn-icon-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 16px | opacity: 1
  - anim: all

- **`<div>`** .callout-icon.w-embed
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(210, 255, 0) | lh: 20px | text-align: start | border: 0px none rgb(210, 255, 0) | width: 75px | margin: 0px auto | opacity: 1
  - anim: all

- **`<svg>`** #Layer_1
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(210, 255, 0) | lh: 20px | text-align: start | border: 0px none rgb(210, 255, 0) | display: inline | width: 100% | opacity: 1
  - anim: all

### HTML Structure

```html
<section data-nav-theme-target="light" class="s"><div class="c is-callout"><div class="callout-layout"><div class="callout-rive-w"><div class="callout-icon w-embed"><canvas data-rive-object="" data-rive-file="reef" data-rive-artboard="helmet-reef" data-rive-state-machine="helmet-reef_scroll" data-rive-input="color_lime" data-rive-fit="contain" data-rive-scrolltrigger-target=".c.is-callout" data-rive-scrolltrigger-start="top bottom" data-rive-scrolltrigger-end="bottom center">
</canvas></div><div data-rive-placeholder="" class="callout-icon w-embed"><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 97 50.1">
  <path d="M.4 27.6s3 .9 6.1 5.9c-.4-1.1-.6-2.2-.8-3.4C1.5 27.8 1.1 25.7.8 22c.2 1 3.2 2.4 3.6 4 .4 1.3.8 2.5 1.3 3.1 0-1-.1-2 0-3v-.5c-1.3-1.1-4.3-4.3-3.5-9.1.5 1.2 3 1.6 3.7 7.4.2-1.1.5-2.1.8-3.2C5.5 19.2 3.5 15 5.6 7.9c.3 1.2 2.5 5.7 2 8.3-.2.8-.2 1.7-.3 2.6 0-.2.1-.4.2-.6.3-.9.7-1.8 1.2-2.7 0-1.4-.2-2.8-.8-4.1-.3-.6-.4-1.3-.4-2s.4-1.3.8-1.8c.6-.8.8-2.8.8-2.8s2.2 3.4 0 9.8c.4-.7.9-1.5 1.4-2.1.4-1 .4-2 .2-3.1-.4-1.8-.7-4.5 2.2-7.7-.3 1.5.4 4.2-.1 6-.4 1.3-.9 2.6-1.5 3.8.5-.6 1.1-1.2 1.7-1.8.3-1 .2-2.5.8-4.9.7-2.9 2.2-3.3 2.8-4.8.5 3.3-1 6.7-2.4 8.6l.4-.3c.4-.3.8-.6 1.1-1 .4-1.8 1.2-3.5 2.4-5 .8-.9 2.7-1.4 3-2.2-.3 3.3-2.3 5.1-4 6.3.9-.5 1.9-.7 2.9-.7s2 .4 2.8 1c0 0-2.2 1.3-3.7 1.1-1.5-.2-2.1-.5-3-.2-.3.3-.7.6-1.1.9 2.2-.6 4.8 1 5.8 2-1.9.9-3.5.3-4.3-.6-.7-.7-1.8-.4-2.3-.8-.7.6-1.3 1.2-2 1.8-.7.7-1.3 1.5-1.9 2.4 1.4-1.3 3.7-2.7 6-2.2-.3.9-1.8 2.5-3.4 3.1-1.4.4-2.7.4-3.6.9-.6 1-1 2.1-1.4 3.3 2.1-3.1 6.3-3.9 7.3-3.7 0 0-2 .9-2.4 2.4-.5 1.6-2.2 2.1-3.6 2.2-.7.1-1.4.5-1.9 1-.4 1.4-.8 2.9-1 4.4 1.9-6.5 6.4-5.5 6.4-5.5-.6.3-1 .9-1.2 1.5-.4 1.1-.9 2-2.6 3.2-1.2.8-2.2 2.1-2.7 3.5 0 1.8.4 3.5.9 5.2-.3-2.2-.2-5.2 1.4-7.4-.2 1.5 1.5 4.1 1.1 5.9-.3 1.5-1.4 3.4-1.2 4.8.2.4.4.8.6 1.1 0-1 .5-2.3.5-3.3.3.9.2 3 .2 4.4.5.8 1.1 1.5 1.7 2.2-1.3-2.4-1.4-6-.4-9 1 1.5 2.1 4.4 1.8 6.4-.2 1.5 0 2.9.4 4.3l.3.3c.3.3.7.6 1 .8-1.5-2.1-1.3-5.3-1-6.7 1.8 2 3.3 6 3.2 8.1l1.2.6c1.6.7 3.4 1.1 5.1.6v.2l.1.2v.4c-1.8.5-3.8 0-5.5-.7l-1.8-.9c-1.1 1.1-3.4 1.8-4.8 1.4-1.3-.4-2.6-1.4-3.6-1.3 1.7-1.8 3.9-1.9 5.2-1.1 1.2.7 2 1 2.7.8-.8-.5-1.6-1.1-2.3-1.7l-.3-.3c-1.9.7-4 0-5.3-.8-1.5-.9-1.7-2.6-2.8-3.5 3.5-.1 5 1.4 5.6 2.3.5.7 1.2 1.3 2 1.5-1.1-1.1-2.1-2.2-2.9-3.5-.9-.2-3 0-4.1-1.5 1.5-.1 2.6 0 3.4.5-.2-.4-.4-.8-.6-1.1-1.1-.2-3.1 0-4.4-1.1-1.1-1.1-2.2-2.3-3.1-3.6 0 0 2.5.5 3.8 1.1-1.1-1-3.8-5.7-3.8-5.8ZM96.4 27.3s-3 1-6 6c.3-1.1.6-2.2.7-3.4 4.3-2.4 4.6-4.5 4.9-8.2-.2 1-3.1 2.5-3.6 4.1-.4 1.3-.8 2.5-1.2 3.2v-3.5c1.3-1.1 4.2-4.4 3.3-9.1-.4 1.2-3 1.6-3.6 7.5-.2-1.1-.5-2.1-.8-3.2 1.2-1.5 3.1-5.8.9-12.8-.3 1.2-2.4 5.7-1.9 8.3.2.8.3 1.7.3 2.6 0-.2-.1-.4-.2-.6L88 15.5c0-1.4.2-2.8.7-4.1.3-.6.4-1.3.3-2 0-.7-.4-1.3-.9-1.8-.6-.8-.9-2.8-.9-2.8s-2.1 3.5.2 9.8c-.4-.7-.9-1.4-1.5-2.1-.4-1-.5-2-.3-3.1.4-1.8.6-4.5-2.3-7.7.3 1.5-.4 4.2.2 6 .4 1.3.9 2.5 1.5 3.8-.5-.6-1.1-1.2-1.8-1.7-.3-1-.2-2.5-.8-4.9-.8-2.9-2.2-3.2-2.9-4.8-.4 3.3 1.1 6.7 2.5 8.6l-.4-.3-1.2-.9c-.4-1.8-1.3-3.5-2.5-5-.8-.9-2.8-1.3-3-2.2.3 3.3 2.4 5 4.1 6.3-.9-.5-1.9-.7-2.9-.6-1 0-2 .4-2.8 1 0 0 2.2 1.2 3.7 1 1.5-.2 2.1-.5 3-.2.3.3.7.6 1.1.9-2.2-.6-4.8 1.1-5.8 2.1 2 .9 3.5.2 4.3-.6.7-.7 1.7-.5 2.3-.9.7.6 1.4 1.1 2 1.8.7.7 1.3 1.5 1.9 2.3-1.4-1.2-3.7-2.6-6-2.1.3.9 1.8 2.5 3.5 3 1.4.4 2.7.4 3.6.8.6 1 1.1 2.1 1.5 3.2-2.2-3.1-6.4-3.7-7.4-3.6 0 0 2 .8 2.5 2.4.5 1.6 2.2 2 3.7 2.2.7 0 1.4.4 1.9 1 .5 1.4.8 2.9 1.1 4.4-2-6.4-6.5-5.4-6.5-5.4.6.3 1 .9 1.2 1.5.4 1.1.9 2 2.7 3.2 1.3.8 2.2 2 2.8 3.4 0 1.8-.3 3.5-.8 5.2.3-2.2.1-5.2-1.5-7.4.2 1.5-1.5 4.1-1 5.9.4 1.5 1.5 3.4 1.3 4.8l-.6 1.2c0-1-.5-2.3-.5-3.3-.3.9-.1 3-.2 4.4-.5.8-1 1.5-1.6 2.2 1.2-2.5 1.3-6 .2-9-1 1.5-2 4.5-1.7 6.5.2 1.5.1 2.9-.3 4.3l-.3.3c-.3.3-.7.6-1 .9 1.5-2.2 1.2-5.3.9-6.7-1.8 2-3.2 6-3 8.1-.4.2-.8.4-1.1.6-1.6.7-3.4 1.2-5.1.7v.8c1.9.5 3.8 0 5.5-.8.6-.3 1.2-.6 1.8-1 1.1 1.1 3.5 1.7 4.8 1.3 1.3-.4 2.6-1.5 3.6-1.4-1.7-1.7-4-1.8-5.2-1-1.1.7-1.9 1.1-2.7.8.8-.5 1.6-1.1 2.3-1.8l.3-.3c1.9.6 4 0 5.3-.9 1.4-.9 1.7-2.6 2.8-3.6-3.5 0-4.9 1.5-5.5 2.4-.5.7-1.2 1.3-2 1.5 1.1-1.1 2-2.3 2.9-3.5.9-.2 3-.1 4.1-1.6-1.5-.1-2.6 0-3.4.5l.6-1.2c1.1-.2 3.1 0 4.4-1.2 1.1-1.1 2.1-2.3 3-3.6 0 0-2.5.5-3.7 1.2 1.1-1 3.7-5.8 3.7-5.9ZM67.3 20.4zM67.2 20.8zM67.3 20.4zM67.3 20.4zM67.2 20.8zM68.4 33.8c.1-.7.3-1.4.4-2.3 1.1-6.1.4-11.8-2-17-2.9-6.2-9.3-12.9-18.3-13.1-9.1 0-15.6 6.4-18.7 12.6-2.6 5.1-3.4 10.8-2.4 17 .1.9.3 1.6.4 2.3 0 .5.1.9.3 1.4.1.6.3 1.2.4 1.7v.2c.1.5.3 1 .4 1.5.3 1 .5 1.5.8 1.9 0 .2.2.4.3.7l.3.9v.3c0 .3.1.5.2.8 0 1.4.7 2.2 1.5 3.3.9 1.1 1.6 1.3 2.9 1.5.9.1 1.4.2 3 .6l2 .4c2.3.8 4.6 1.3 7.9 1.3h.4c3.1 0 5.2-.4 7.5-1.1s1.9-.4 1.9-.4c1.6-.3 2.2-.4 3.1-.5 1.3-.2 2-.3 3-1.5.9-1 1.5-1.8 1.6-3.2.1-.3.2-.5.3-.8V42c0-.4.2-.7.3-.9.1-.3.2-.5.3-.7.3-.5.5-.9.8-1.9.1-.5.3-1 .4-1.5v-.2c.1-.5.3-1.1.4-1.7.2-.4.3-.9.3-1.4Zm-1-.2v.2c0 .3-.1.6-.2.9-.4 1.2-1.6 2.1-3.5 2.8.1-.3.2-.6.3-1 .4.1.9.2 1.4-.1.3-.2.4-.5.6-.8.1-.3.2-.6.3-1 .2-.7.3-1.7.6-2.8 0 .2 0 .4.2.6.1.2.3.2.5.3 0 .3-.1.7-.2 1ZM47.9 46.5c-7.3 0-13.6-1.7-16.1-4.1.1-.1.3-.3.6-.4 4.8 2.5 12.5 2.8 15.4 2.9h.7c3.3 0 10.4-.3 14.9-2.5.3.1.5.3.6.4-2.6 2.3-8.9 3.8-16.1 3.7ZM28.7 33.3v-.2c0-.3-.1-.6-.2-1 .4 0 .6-.4.7-.8.2.8.3 1.5.4 2 .2 1.4.4 2.2 1 2.6.3.2.6.3.8.3h.5c0 .3.1.7.2 1-1.9-.7-3-1.7-3.4-2.9 0-.3-.1-.6-.2-.9Zm1.8-18.5c.2-.2.4-.4.6-.5-.4.6-.9 1.3-1.2 2 .2-.5.4-.9.6-1.4Zm35.6.5c.2.5.4 1 .6 1.4-.4-.7-.8-1.4-1.2-2 .2.2.4.3.6.6ZM68 30.4h-.2c-.2 0-.5 0-.6.3.2-.9.4-1.5.5-1.9.2-.6.3-.8.5-.9 0 .9-.2 1.8-.3 2.8Zm-4.6 10.9h-.1c-.3-.1-.7-.2-1.1-.3 1.4-.4 2.6-.9 3.4-1.5-.5.7-1.3 1.3-2.3 1.8Zm-29.4.4c1.2-.2 2.5-.2 2.6-.2 3 .5 6.8.9 11.4.9h1.3c4.2 0 7.6-.3 10.4-.8 0 0 1.1.2 2.3.4-3.7 1.4-9.1 2-14 1.9-4.9 0-10.3-.7-13.9-2.2Zm-3.7-2.6c.9.6 2 1.2 3.4 1.6-.4 0-.8.1-1.1.2h-.1c-.9-.5-1.7-1.2-2.2-1.9Zm17.6 2.3c-10.6-.1-17.1-1.8-18.4-4.7 1.2.9 3 1.6 5.4 2.1 3.9.8 8.9.9 12.9.9h3.9c3.2 0 6.6-.1 9.5-.6 2.4-.4 4.2-1.1 5.4-2-1.4 2.9-8 4.4-18.6 4.2ZM33 35.3c0-.1 0-.3.4-.4.6-.1 1.1-.2 1.6-.2.6 0 1-.1 1.5-.3.4-.2.7 0 .7 0h.1v.8c0 .1-.1.3-.1.5v1c-.2.2-.2.2-1.1.2h-.3c-.7 0-1 .1-1.3.3-.2 0-.3.2-.6.2-.5 0-.7-1.3-.8-2.1Zm30.1.4Zm0 0Zm-4.1-1Zm-11 3.4v.5-.5s-.9 0-3.7-.4c.1-.1.2-.2.3-.4.4-.6 0-1.8 0-2 0-.1 0-.2-.2-.3 1 0 2.2 0 3.5.1h3.6s-.1.2-.2.3c0 .2-.5 1.4-.1 1.9.1.3.2.4.3.5-2.8.3-3.7.3-3.7.3Zm-7-2.6c.6.1 1.3.3 2.1.4h.3v.4h-.2c-.8-.1-2.3-.6-3.2-1.1.3 0 .7.1 1 .2Zm11.7 1v-.4h.3c.8 0 1.5-.2 2.1-.3.4 0 .7-.1 1-.2-.9.4-2.4.9-3.2 1h-.2Zm-16.8 1.4c.9 0 1.4 0 1.9-.6.2-.3.3-.6.3-.8 1.3.9 3.6 1.7 5.6 2.1-2.7 0-5.5-.3-8-.7h.2Zm22-1.1c0 .3 0 .6.3.8.5.6 1 .6 1.9.6h.2c-2.5.4-5.3.5-8 .5 2-.3 4.3-1.1 5.7-2Zm2.2.4c-.8 0-.9 0-1.1-.2-.1-.2 0-.4 0-.7V36c0-.2 0-.4-.1-.5s0-.1 0-.3v-.4h.7c.4.2.9.3 1.4.3.5 0 1 .1 1.7.3.3 0 .3.2.4.2v.1c-.1.8-.4 2.1-.8 2.1-.3 0-.4 0-.6-.2-.3-.2-.6-.3-1.3-.3h-.3Zm5.1-2.9v.4c-.3.3-.5.4-.5.4 0-.4-.4-1-1.6-1.3-.7-.2-1.3-.3-1.7-.3-.5 0-.8 0-1.1-.2-.6-.3-1.1-.2-1.4 0L58 33h-.2s-2.4.8-9.6.7c-7.3 0-9.5-.9-9.6-.9h-.2l-.9.2c-.3-.1-.8-.2-1.4 0-.3.1-.7.2-1.1.2-.5 0-1.1 0-1.8.3-1.1.3-1.5.9-1.6 1.3 0 0-.2 0-.5-.4 0-.3-.1-.7-.2-1.1-.1-.7-.3-1.5-.5-2.4-.1-.6-.3-1.1-.4-1.5-.4-1.6-.5-2.3-1.2-2.8-.4-.3-.2-1.3 0-2v-.2c.2-1.1.3-1.8.3-2.6 0-.7.2-1.4.2-1.4V20c0-.2-.1-.4-.2-.5.6 0 .6 0 .7.3v.4c0 .6.2 1.2.4 2.2.3 1.2.7 1.2 3.4 1.1h1c3.8-.2 6.2-.2 13.5 0 7.6 0 10.1.1 13.9.4.9 0 1.6.1 2.2.1h1.2c.3 0 .6-.2.8-.4.2-.2.2-.5.3-.7.3-1.1.4-1.9.5-2.5v-.2h.6v2.1c0 .8 0 1.5.2 2.6 0 .5.2 1 .2 1.5 0 .4-.1.6-.2.7-.5.3-.7.8-.9 1.4-.2.6-.4 1.5-.7 2.8-.4 1.3-.6 2.4-.7 3.2Zm-37-4.4c-.1-.9-.2-1.8-.2-2.8.4.3.5.7.8 2.2 0 .2.1.5.2.7 0 0 0-.1-.1-.1-.2-.1-.3-.2-.5-.2h-.2ZM52.5 6.2c-.4.7-.8 1.5-1.1 2.3-1-.2-1.9-.3-3-.3-1 0-2 0-3 .2-.3-.8-.7-1.6-1.1-2.3 1.3-.3 2.7-.5 4.1-.5 1.4 0 2.7.2 4.1.6Zm-4.3 3h.2c.9 0 1.8.1 2.6.2-.3.8-.6 1.7-.8 2.6h-3.6c-.2-.9-.5-1.7-.8-2.6.8-.1 1.6-.2 2.4-.2Zm17.5 11.4c-1.4-2-3.2-3.8-5.3-5.1.3-.3.6-.6.9-.8 1.9 1.8 3.4 3.9 4.4 5.8ZM49.9 13c-.2.7-.3 1.5-.5 2.2h-2.2c-.1-.8-.3-1.5-.4-2.2h3.1Zm-1.6 3.2h1c-.1.7-.2 1.4-.3 2.2h-1.4c0-.7-.1-1.5-.2-2.2h1Zm15.3 5.9c-1.4-1-3.1-1.9-5.3-2.5.1-.5.3-1 .5-1.5 2.1.9 3.8 2.3 5.2 4h-.4Zm-15.5-.5h-.4c0-.8 0-1.5-.1-2.3h1.2c0 .7-.1 1.5-.2 2.3H48Zm-8.6-.1c0-.5-.1-1-
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 9: Hero
- **Confidence:** 15%
- **Tag:** section
- **Classes:** `s is-lando-exe`
- **Size:** 907px height
- **Headings:** H2: "World Drivers' Champion"
- **CTAs:** Visit the store
- **Media:** 5 image(s), 1 canvas(es), 1 SVG(s)
- **Animations:**
  - `div`.c: transition: all
  - `div`.grid-main: transition: all
  - `img`.image: transition: all
  - `div`.exe-col-2: transition: all
  - `div`.exe-cta-img-w: transition: all
  - `div`.exe-text-w: transition: all
  - `div`.g-title-layout: transition: all
  - `div`.exe-top-visor: transition: all
  - `div`.g-text-headline-w: transition: all
  - `div`.spacer: transition: all
  - `div`.spacer: transition: all
  - `img`.image: transition: all
  - `div`.exe-cta-img-w: transition: all
  - `img`.image: transition: all
  - `img`.image: transition: all
  - `div`.exe-cta-img-w: transition: all
  - `div`.exe-cta-img-w: transition: all
  - `div`.exe-cta-sticker-w: transition: all
  - `img`.image: transition: all
  - `div`.g-text-para-w: transition: all
  - `a`.btn-w: transition: all
  - `div`.eyebrow-w: transition: all

### Element Style Blueprint

- **`<div>`** .c.is-lando-exe
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1440px | padding: 0px 146.667px | opacity: 1
  - anim: all
  - text: "LANDO STOREWorld Drivers' ChampionCelebrate this incredible moment with a collection designed for the fans who never stopped believing. Wear it, frame"

- **`<div>`** .grid-main.exe-grid
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: grid | width: 1146.69px | opacity: 1
  - anim: all
  - text: "LANDO STOREWorld Drivers' ChampionCelebrate this incredible moment with a collection designed for the fans who never stopped believing. Wear it, frame"

- **`<img>`** .image.is-exe-scroll
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 525px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/69458be7e803d4123abb47dd_lando-store-gold-5.webp

- **`<div>`** .exe-col-2 #w-node-cdf8cae6-890c-0da2-d4ce-f7de7c4f7866-0b17a7eb
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 556.719px | opacity: 1
  - anim: all

- **`<div>`** .exe-cta-img-w.is-1
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 525px | opacity: 1
  - anim: all

- **`<div>`** .exe-text-w #w-node-ae7312fc-adb8-42d6-db91-b6f52466ac51-0b17a7eb
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 556.719px | opacity: 1
  - anim: all
  - text: "LANDO STOREWorld Drivers' ChampionCelebrate this incredible moment with a collection designed for the fans who never stopped believing. Wear it, frame"

- **`<div>`** .g-title-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 556.719px | opacity: 1
  - anim: all
  - text: "LANDO STOREWorld Drivers' ChampionCelebrate this incredible moment with a collection designed for the fans who never stopped believing. Wear it, frame"

- **`<div>`** .exe-top-visor
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | bg: rgb(17, 17, 18) | border: 0px none rgb(40, 44, 32) | display: block | width: 1440px | opacity: 1
  - anim: all

- **`<div>`** .g-text-headline-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 556.719px | opacity: 1
  - anim: all
  - text: "World Drivers' Champion"

- **`<div>`** .spacer.is-exe
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1146.69px | opacity: 1
  - anim: all

- **`<div>`** .spacer._8rem
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1146.69px | opacity: 1
  - anim: all

- **`<img>`** .image.is-exe-scroll
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 333.328px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/69458be8f7e939c143a9bed6_lando-store-gold-3.webp

- **`<div>`** .exe-cta-img-w.is-2
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 333.328px | opacity: 1
  - anim: all

- **`<img>`** .image.is-exe-scroll
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 189.156px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/69458be7e4ccfdba84b69d27_lando-store-gold-1.webp

- **`<img>`** .image.is-exe-scroll
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 218.328px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/69458be88faa89137717632c_lando-store-gold-2.webp

- **`<div>`** .exe-cta-img-w.is-3
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 189.156px | opacity: 1
  - anim: all

- **`<div>`** .exe-cta-img-w.is-4
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 218.328px | opacity: 1
  - anim: all

- **`<div>`** .exe-cta-sticker-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 202.5px | opacity: 1
  - anim: all

- **`<img>`** .image.is-exe-sticker
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: inline-block | width: 202.5px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/69458c78c9825ebb795d2e81_LN1.webp

- **`<div>`** .g-text-para-w.is-exe
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 432.5px | opacity: 1
  - anim: all
  - text: "Celebrate this incredible moment with a collection designed for the fans who never stopped believing. Wear it, frame it, treasure it forever."

- **`<a>`** .btn-w.w-inline-block
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | bg: rgb(210, 255, 0) | radius: 7.2px | border: 1px solid rgb(210, 255, 0) | display: flex | width: 144.312px | padding: 0px 13.3333px | opacity: 1
  - anim: all
  - href: https://landonorris.store/
  - text: "Visit the store"

- **`<div>`** .eyebrow-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 99.7188px | opacity: 1
  - anim: all
  - text: "LANDO STORE"

### HTML Structure

```html
<section data-exe-section="" data-nav-theme-target="dark" data-designmode-white="" class="s is-lando-exe"><div data-exe-visor="" class="exe-top-visor"></div><div class="c is-lando-exe"><div class="spacer is-exe"></div><div class="grid-main exe-grid"><div id="w-node-ae7312fc-adb8-42d6-db91-b6f52466ac51-0b17a7eb" class="exe-text-w"><div class="g-title-layout"><div data-hide="t" class="eyebrow-w"><div class="eyebrow-icon-w"><div class="btn-icon-svg is-large w-embed"><svg width="100%" height="100%" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="m10.931 5.783-.759.812c-1.132 1.212-2.89 1.212-4.022 0l-.76-.812C4.313 4.637 2.568 5.29 2.275 6.928l-1.238 7.18c-.227 1.318.652 2.543 1.838 2.543h10.588c1.185 0 2.064-1.225 1.838-2.544l-1.239-7.179c-.28-1.638-2.037-2.29-3.116-1.145h-.014ZM10.839 3.048 9.84 1.849C8.894.717 7.43.717 6.484 1.85l-1 1.199" stroke="currentColor" stroke-width="1.949" stroke-miterlimit="10"></path>
</svg></div></div><div data-anim-high="right, dark-green-tint-1" split-text="lines" class="text-eyebrow large">LANDO STORE</div></div><div class="g-text-headline-w"><h2 data-anim-high="right, dark-green-tint-1" split-text="lines" class="text-impact-lg-mona reduce">World Drivers' <span class="span-font-brier otot">Champion</span></h2></div><div class="g-text-para-w is-exe"><p data-anim-high="right, dark-green-tint-1, 200" split-text="lines" class="text-body-reg-mona">Celebrate this incredible moment with a collection designed for the fans who never stopped believing. Wear it, frame it, treasure it forever.</p></div><a data-btn-rive-rotate="false" data-anim="text-hover" data-btn-rive-hover="" data-theme="lime" data-wf--button-primary--variant="base" href="https://landonorris.store/" target="_blank" class="btn-w w-inline-block"><div class="btn-inner"><div class="btn-inner-text-w"><div split-text="chars" class="btn-text">Visit the store</div></div><div class="btn-icon-w"><div class="btn-rive-w w-embed"><canvas data-rive-object="" data-rive-file="btn-ui" data-rive-artboard="arrow" data-rive-state-machine="arrow" data-rive-hover="false" data-rive-fit="contain">
</canvas></div></div></div></a></div><div class="exe-cta-img-w is-4"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/69458be88faa89137717632c_lando-store-gold-2.webp" loading="eager" alt="" class="image is-exe-scroll"></div></div><div id="w-node-cdf8cae6-890c-0da2-d4ce-f7de7c4f7866-0b17a7eb" class="exe-col-2"><div class="exe-cta-img-w is-1"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/69458be7e803d4123abb47dd_lando-store-gold-5.webp" loading="eager" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/69458be7e803d4123abb47dd_lando-store-gold-5-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/69458be7e803d4123abb47dd_lando-store-gold-5-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/69458be7e803d4123abb47dd_lando-store-gold-5-p-1080.webp 1080w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/69458be7e803d4123abb47dd_lando-store-gold-5.webp 1260w" alt="" class="image is-exe-scroll"></div><div class="exe-cta-img-w is-2"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/69458be8f7e939c143a9bed6_lando-store-gold-3.webp" loading="eager" width="Auto" sizes="100vw" alt="" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/69458be8f7e939c143a9bed6_lando-store-gold-3-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/69458be8f7e939c143a9bed6_lando-store-gold-3.webp 796w" class="image is-exe-scroll is-clip"></div><div class="exe-cta-img-w is-3"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/69458be7e4ccfdba84b69d27_lando-store-gold-1.webp" loading="eager" alt="" class="image is-exe-scroll"></div><div class="exe-cta-sticker-w"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/69458c78c9825ebb795d2e81_LN1.webp" loading="eager" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/69458c78c9825ebb795d2e81_LN1-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/69458c78c9825ebb795d2e81_LN1-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/69458c78c9825ebb795d2e81_LN1.webp 945w" alt="" class="image is-exe-sticker"></div></div></div><div class="spacer _8rem"></div></div></section>
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 10: Contact
- **Confidence:** 35%
- **Tag:** section
- **Classes:** `s is-home-collabs`
- **Size:** 795px height
- **Headings:** H2: "partners"; H2: "&campaigns"
- **CTAs:** view partnerships
- **Media:** 18 image(s), 2 canvas(es)
- **Animations:**
  - `div`.c: transition: all
  - `div`.home-collab-rive-w: transition: all
  - `div`.home-collab-rive: transition: all
  - `canvas`: transition: all
  - `div`.spacer: transition: all
  - `div`.spacer: transition: all
  - `div`.title-layout: transition: all
  - `div`.spacer: transition: all
  - `div`.title-headline-w: transition: all
  - `div`.title-para-layout: transition: all
  - `div`.marquee-offest-w: transition: all
  - `div`.marquee-advanced: transition: all
  - `div`.marquee-advanced__scroll: transition: all
  - `div`.marquee-advanced__collection: transition: all
  - `div`.title-para-w: transition: all
  - `span`.text-title-lg-brier: transition: all
  - `p`.text-body-reg-mona: transition: all
  - `h2`.text-title-lg-mona: transition: all
  - `h2`.text-title-lg-mona: transition: all
  - `div`.marquee-css: transition: all
  - `img`.image: transition: all
  - `div`.display-none: transition: all
  - `div`.marquee-css__list: animation: 30s linear infinite paused translateXLeft; transition: all
  - `a`.btn-w: transition: all
  - `div`.marquee-adv-item: transition: all

### Element Style Blueprint

- **`<div>`** .c.is-home-collabs
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1440px | padding: 0px 16.6667px | opacity: 1
  - anim: all
  - text: "partners&campaignsLando is proud to collaborate with a range of partners, who share his passion for performance across a range of industries.view part"

- **`<div>`** .home-collab-rive-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1061.66px | opacity: 1
  - anim: all

- **`<div>`** .home-collab-rive.w-embed
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1061.66px | opacity: 1
  - anim: all

- **`<canvas>`**
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: inline-block | width: 1061.66px | opacity: 1
  - anim: all

- **`<div>`** .spacer._20rem
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1440px | opacity: 1
  - anim: all

- **`<div>`** .spacer._20rem
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1406.69px | opacity: 1
  - anim: all

- **`<div>`** .title-layout.grid-main
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: grid | width: 1406.69px | opacity: 1
  - anim: all
  - text: "partners&campaignsLando is proud to collaborate with a range of partners, who share his passion for performance across a range of industries.view part"

- **`<div>`** .spacer._8rem
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1406.69px | opacity: 1
  - anim: all

- **`<div>`** .title-headline-w.flex #w-node-_10049719-af3a-791f-b004-78a94b8f2fac-0b17a7eb
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 679.188px | opacity: 1
  - anim: all
  - text: "partners&campaigns"

- **`<div>`** .title-para-layout.tablet-wrap #w-node-_04f46b3f-5093-ef67-5316-1ae3df93be8d-0b17a7eb
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 679.188px | opacity: 1
  - anim: all
  - text: "Lando is proud to collaborate with a range of partners, who share his passion for performance across a range of industries.view partnerships"

- **`<div>`** .marquee-offest-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1440px | opacity: 1
  - anim: all

- **`<div>`** .marquee-advanced
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1440px | opacity: 1
  - anim: all

- **`<div>`** .marquee-advanced__scroll
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 1440px | opacity: 1
  - anim: all

- **`<div>`** .marquee-advanced__collection
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 933.281px | opacity: 1
  - anim: all

- **`<div>`** .title-para-w.mw
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 333.328px | opacity: 1
  - anim: all
  - text: "Lando is proud to collaborate with a range of partners, who share his passion for performance across a range of industries."

- **`<span>`** .text-title-lg-brier
  - font: 62.5px 700 Brier, Arial, sans-serif | color: rgb(40, 44, 32) | lh: 55.375px | ls: -1.66667px | text-transform: uppercase | text-align: start | border: 0px none rgb(40, 44, 32) | display: inline | opacity: 1
  - anim: all
  - text: "&campaigns"

- **`<p>`** .text-body-reg-mona
  - font: 16.6667px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20.8333px | ls: -0.166667px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 333.328px | opacity: 1
  - anim: all
  - text: "Lando is proud to collaborate with a range of partners, who share his passion for performance across a range of industries."

- **`<h2>`** .text-title-lg-mona
  - font: 60px 700 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 53.16px | ls: -1.66667px | text-transform: uppercase | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 363.844px | opacity: 1
  - anim: all
  - text: "&campaigns"

- **`<h2>`** .text-title-lg-mona
  - font: 60px 700 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 53.16px | ls: -1.66667px | text-transform: uppercase | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 285.516px | opacity: 1
  - anim: all
  - text: "partners"

- **`<div>`** .marquee-css
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(239, 238, 236) | lh: 20px | text-align: start | border: 0px none rgb(239, 238, 236) | width: 100% | opacity: 1
  - anim: all

- **`<img>`** .image.is-collab-placeholder
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | width: 100% | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d43b0fcd3d4512a46df889_ln-collabs-rive-placeholder.svg

- **`<div>`** .display-none
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | opacity: 1
  - anim: all
  - text: "view partnerships"

- **`<div>`** .marquee-css__list
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(239, 238, 236) | lh: 20px | text-align: start | border: 0px none rgb(239, 238, 236) | display: flex | opacity: 1
  - anim: 30s linear infinite paused translateXLeft | all

- **`<a>`** .btn-w.w-inline-block
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | bg: rgb(210, 255, 0) | radius: 7.2px | border: 1px solid rgb(210, 255, 0) | display: flex | padding: 0px 13.3333px | opacity: 1
  - anim: all
  - href: https://landonorris.com/partnerships
  - text: "view partnerships"

- **`<div>`** .marquee-adv-item.w-dyn-list
  - font: 115.2px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(239, 238, 236) | lh: 20px | text-align: start | border: 0px none rgb(239, 238, 236) | display: flex | opacity: 1
  - anim: all

### HTML Structure

```html
<section data-gl-change-trigger-start="top bottom" data-nav-theme-target="dark" data-gl-change-track="" data-gl-change-from="white, dark-green-tint-1-low" data-gl-change-to="white, white" data-designmode-white="" class="s is-home-collabs"><div class="c is-home-collabs"><div class="spacer _20rem tablet-reduce"></div><div class="title-layout grid-main"><div id="w-node-_10049719-af3a-791f-b004-78a94b8f2fac-0b17a7eb" class="title-headline-w flex"><h2 data-anim-high="right, dark-green-tint-1" split-text="lines" class="text-title-lg-mona">partners</h2><h2 data-anim-high="right, dark-green-tint-1" split-text="lines" class="text-title-lg-mona"><span class="text-title-lg-brier">&amp;campaigns</span></h2></div><div id="w-node-_04f46b3f-5093-ef67-5316-1ae3df93be8d-0b17a7eb" class="title-para-layout tablet-wrap"><div class="title-para-w mw flex-1"><p data-anim-high="right, dark-green-tint-1" split-text="lines" class="text-body-reg-mona">Lando is proud to collaborate with a range of partners, who share his passion for performance across a range of industries.</p></div><div class="display-none"><a data-btn-rive-rotate="false" data-anim="text-hover" data-btn-rive-hover="" data-theme="lime" data-wf--button-primary--variant="base" href="/partnerships" class="btn-w w-inline-block"><div class="btn-inner"><div class="btn-inner-text-w"><div split-text="chars" class="btn-text">view partnerships</div></div><div class="btn-icon-w"><div class="btn-rive-w w-embed"><canvas data-rive-object="" data-rive-file="btn-ui" data-rive-artboard="arrow" data-rive-state-machine="arrow" data-rive-hover="false" data-rive-fit="contain">
</canvas></div></div></div></a></div></div></div><div class="spacer _8rem"></div><div class="marquee-offest-w"><div data-marquee-duplicate="4" data-marquee-scroll-direction-target="" data-marquee-direction="right" data-marquee-status="normal" data-marquee-speed="40" data-marquee-scroll-speed="10" class="marquee-advanced"><div data-marquee-scroll-target="" class="marquee-advanced__scroll"><div data-marquee-collection-target="" class="marquee-advanced__collection"><div class="marquee-advanced__item"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d4349e00e6b7904f3746a3_ln4-ln4-collab-logo-ralph.svg" loading="eager" alt="" class="home-collab-marquee-svg edit"><div class="marquee-spacer"></div></div><div class="marquee-advanced__item display-none"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d435767c599270fb721513_ln4-ln4-collab-logo-mind.svg" loading="eager" alt="" class="home-collab-marquee-svg edit"><div class="marquee-spacer"></div></div><div class="marquee-advanced__item"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67efc88cf1d78e3e7624d5e3_ln4-ln4-collab-logo-ps4.svg" loading="eager" alt="" class="home-collab-marquee-svg edit"><div class="marquee-spacer"></div></div><div class="marquee-advanced__item"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67efc88c532235956e5d267a_ln4-ln4-collab-logo-quadrant.svg" loading="eager" alt="" class="home-collab-marquee-svg edit"><div class="marquee-spacer"></div></div><div class="marquee-advanced__item"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67efc88cb3373daa7ba240d6_ln4-ln4-collab-logo-tumi.svg" loading="eager" alt="" class="home-collab-marquee-svg edit"><div class="marquee-spacer"></div></div><div class="marquee-advanced__item"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67efc88c1939bc87931c2599_ln4-ln4-collab-logo-hilton.svg" loading="eager" alt="" class="home-collab-marquee-svg edit"><div class="marquee-spacer"></div></div><div class="marquee-advanced__item"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d294a99b218abd71dc0764_ln4-ln4-collab-logo-uber.svg" loading="eager" alt="" class="home-collab-marquee-svg edit"><div class="marquee-spacer"></div></div><div class="marquee-advanced__item"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68dbd5d7e14222573f46ebdb_ln4-ln4-collab-lnkart.svg" loading="eager" alt="" class="home-collab-marquee-svg edit"><div class="marquee-spacer"></div></div><div class="marquee-advanced__item"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68dbd5d72c50967c2195c702_ln4-ln4-collab-bell-helmets.svg" loading="eager" alt="" class="home-collab-marquee-svg edit"><div class="marquee-spacer"></div></div><div class="marquee-advanced__item"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68dbd5d718fcdbf76afbcc45_ln4-ln4-collab-pure-electric.svg" loading="eager" alt="" class="home-collab-marquee-svg edit"><div class="marquee-spacer"></div></div><div class="marquee-advanced__item"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68dbd5d7a8a302c07e91904d_ln4-ln4-collab-google.svg" loading="eager" alt="" class="home-collab-marquee-svg edit"><div class="marquee-spacer"></div></div></div></div></div><div display-none="" data-css-marquee="" class="marquee-css"><div data-css-marquee-list="left" class="marquee-css__list"><div class="marquee-adv-item w-dyn-list"><div role="list" class="collab-marquee-item w-dyn-items"><div role="listitem" class="home-collab-logo-w w-dyn-item"><img loading="eager" src="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/67ded2d59a2773f9b6518792_ln4-ln4-collab-logo-quadrant.svg" alt="" class="home-collab-marquee-svg"><div class="marquee-spacer"></div></div><div role="listitem" class="home-collab-logo-w w-dyn-item"><img loading="eager" src="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/67ded30422d52b417b838a96_ln4-ln4-collab-logo-mind.svg" alt="" class="home-collab-marquee-svg"><div class="marquee-spacer"></div></div><div role="listitem" class="home-collab-logo-w w-dyn-item"><img loading="eager" src="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/67ded2eb42843bae575a6892_ln4-ln4-collab-logo-tumi.svg" alt="" class="home-collab-marquee-svg"><div class="marquee-spacer"></div></div><div role="listitem" class="home-collab-logo-w w-dyn-item"><img loading="eager" src="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/67ded2d59a2773f9b6518792_ln4-ln4-collab-logo-quadrant.svg" alt="" class="home-collab-marquee-svg"><div class="marquee-spacer"></div></div><div role="listitem" class="home-collab-logo-w w-dyn-item"><img loading="eager" src="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/67ded2c281ae5431777106b2_ln4-ln4-collab-logo-ralph.svg" alt="" class="home-collab-marquee-svg"><div class="marquee-spacer"></div></div><div role="listitem" class="home-collab-logo-w w-dyn-item"><img loading="eager" src="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/67ded2a099f418db1d37323c_ln4-ln4-collab-logo-ps4.svg" alt="" class="home-collab-marquee-svg"><div class="marquee-spacer"></div></div></div></div></div></div></div><div class="home-collab-rive-w"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d43b0fcd3d4512a46df889_ln-collabs-rive-placeholder.svg" loading="eager" data-rive-placeholder="" alt="" class="image is-collab-placeholder"><div class="home-collab-rive w-embed"><canvas data-rive-object="" data-rive-file="phrases" data-rive-artboard="collabs" data-rive-state-machine="page_home" data-rive-fit="contain" data-rive-scrolltrigger="true" data-rive-scrolltrigger-start="top center">
</canvas></div></div></div><div class="spacer _20rem tablet-reduce"></div></section>
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 11: Hero
- **Confidence:** 15%
- **Tag:** section
- **Classes:** `s is-callout-socials`
- **Size:** full viewport height
- **Headings:** H2: "what’s upOn Socials"
- **CTAs:** tiktok, instagram, Youtube, Twitch
- **Media:** 7 image(s), 1 canvas(es)
- **Animations:**
  - `div`.c: transition: all
  - `div`.callout-socials-inner: transition: all
  - `div`.callout-socials-layout: transition: all
  - `div`.callout-socials-card-layout: transition: all
  - `div`.spacer: transition: all
  - `div`.callout-socials-card-w: transition: all
  - `div`.callout-socials-card-w: transition: all
  - `div`.callout-socials-card-w: transition: all
  - `div`.callout-socials-card-w: transition: all
  - `div`.callout-socials-card-w: transition: all
  - `div`.callout-socials-card-w: transition: all
  - `div`.callout-socials-card-w: transition: all
  - `h2`.text-title-lg-mona: transition: all
  - `span`.span-font-brier: transition: all
  - `span`: transition: all
  - `div`.callout-socials-intro-w: transition: all
  - `div`.text-cta-short-intro: transition: all
  - `div`.callout-socials-links-layout: transition: all
  - `div`.callout-socials-rive-w: transition: all
  - `div`.callout-icon: transition: all
  - `a`.text-link-w: transition: all
  - `a`.text-link-w: transition: all
  - `a`.text-link-w: transition: all
  - `a`.text-link-w: transition: all

### Element Style Blueprint

- **`<div>`** .c.is-callout-socials
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: start | border: 0px none rgb(17, 17, 18) | display: block | width: 1440px | padding: 0px 16.6667px | opacity: 1
  - anim: all
  - text: "what’s upOn SocialsFollow Lando on social mediatiktokinstagramYoutubeTwitch"

- **`<div>`** .callout-socials-inner
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: start | border: 0px none rgb(17, 17, 18) | display: flex | width: 1406.69px | opacity: 1
  - anim: all
  - text: "what’s upOn SocialsFollow Lando on social mediatiktokinstagramYoutubeTwitch"

- **`<div>`** .callout-socials-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | border: 0px none rgb(17, 17, 18) | display: flex | width: 1406.69px | opacity: 1
  - anim: all
  - text: "what’s upOn SocialsFollow Lando on social mediatiktokinstagramYoutubeTwitch"

- **`<div>`** .callout-socials-card-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | border: 0px none rgb(17, 17, 18) | display: flex | width: 1066.66px | opacity: 1
  - anim: all

- **`<div>`** .spacer._8rem
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: start | border: 0px none rgb(17, 17, 18) | display: block | width: 1406.69px | opacity: 1
  - anim: all

- **`<div>`** .callout-socials-card-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | radius: 44.2167px | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<div>`** .callout-socials-card-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | radius: 44.2167px | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<div>`** .callout-socials-card-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | radius: 44.2167px | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<div>`** .callout-socials-card-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | radius: 44.2167px | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<div>`** .callout-socials-card-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | radius: 44.2167px | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<div>`** .callout-socials-card-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | radius: 44.2167px | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<div>`** .callout-socials-card-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | radius: 44.2167px | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<h2>`** .text-title-lg-mona.split-flex
  - font: 60px 700 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 53.16px | ls: -1.66667px | text-transform: uppercase | text-align: center | border: 0px none rgb(17, 17, 18) | display: flex | width: 321.5px | opacity: 1
  - anim: all
  - text: "what’s upOn Socials"

- **`<span>`** .span-font-brier
  - font: 60px 700 Brier, Arial, sans-serif | color: rgb(17, 17, 18) | lh: 53.16px | ls: -1.66667px | text-transform: uppercase | text-align: center | border: 0px none rgb(17, 17, 18) | display: block | width: 321.5px | opacity: 1
  - anim: all
  - text: "On Socials"

- **`<span>`**
  - font: 60px 700 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 53.16px | ls: -1.66667px | text-transform: uppercase | text-align: center | border: 0px none rgb(17, 17, 18) | display: block | width: 291.281px | opacity: 1
  - anim: all
  - text: "what’s up"

- **`<div>`** .callout-socials-intro-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | border: 0px none rgb(17, 17, 18) | display: block | width: 380.656px | margin: 50px 0px 0px | opacity: 1
  - anim: all
  - text: "Follow Lando on social media"

- **`<div>`** .text-cta-short-intro.font-brier
  - font: 26.6667px 400 Brier, Arial, sans-serif | color: rgb(17, 17, 18) | lh: 27.7333px | ls: 0.666667px | text-align: center | border: 0px none rgb(17, 17, 18) | display: block | width: 380.656px | opacity: 1
  - anim: all
  - text: "Follow Lando on social media"

- **`<div>`** .callout-socials-links-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | border: 0px none rgb(17, 17, 18) | display: flex | width: 279.734px | opacity: 1
  - anim: all
  - text: "tiktokinstagramYoutubeTwitch"

- **`<div>`** .callout-socials-rive-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | border: 0px none rgb(17, 17, 18) | display: block | width: 46.6562px | opacity: 1
  - anim: all

- **`<div>`** .callout-icon.icon-ball
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(210, 255, 0) | lh: 20px | text-align: center | border: 0px none rgb(210, 255, 0) | display: flex | width: 46.6562px | opacity: 1
  - anim: all

- **`<a>`** .text-link-w.w-inline-block
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | border: 0px none rgb(17, 17, 18) | display: block | width: 66.9375px | opacity: 1
  - anim: all
  - href: https://www.instagram.com/lando
  - text: "instagram"

- **`<a>`** .text-link-w.w-inline-block
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | border: 0px none rgb(17, 17, 18) | display: block | width: 52.4688px | opacity: 1
  - anim: all
  - href: https://www.youtube.com/@LandoNorris
  - text: "Youtube"

- **`<a>`** .text-link-w.w-inline-block
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | border: 0px none rgb(17, 17, 18) | display: block | width: 44.5625px | opacity: 1
  - anim: all
  - href: https://www.twitch.tv/landonorris
  - text: "Twitch"

- **`<a>`** .text-link-w.w-inline-block
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | border: 0px none rgb(17, 17, 18) | display: block | width: 40.7656px | opacity: 1
  - anim: all
  - href: https://www.tiktok.com/@landonorris
  - text: "tiktok"

### HTML Structure

```html
<section data-designmode-white="" data-nav-theme-target="dark" data-wf--section-socials--variant="light-mode" class="s is-callout-socials"><div class="c is-callout-socials"><div class="spacer _8rem"></div><div class="callout-socials-inner"><div class="callout-socials-layout"><div class="callout-socials-rive-w"><div class="callout-icon icon-ball w-embed"><canvas data-rive-object="" data-rive-file="reef" data-rive-artboard="off-icons" data-rive-state-machine="off-icons" data-rive-input="color_green-off-white-2" data-rive-fit="contain" data-rive-scrolltrigger-target="" data-rive-scrolltrigger-start="" data-rive-scrolltrigger-end="">
</canvas></div></div><h2 data-oval-scroll="" split-text="lines" class="text-title-lg-mona split-flex is-center"><span>what’s up</span><span class="span-font-brier">On Socials</span></h2><div data-social-callout="wrap" class="callout-socials-card-layout"><div data-video-stream-wrap="" class="callout-socials-card-w"><div data-stream-hover="true" data-video-stream="" data-stream-url="824804225" data-stream-muted="true" data-stream-loop="true" data-stream-autoplay="true" class="video-stream"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba846e593e52541fb7a8_Lando-6-on-track.webp" loading="eager" data-video-stream-placeholder="" alt="" sizes="(max-width: 767px) 100vw, 637.9948120117188px" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba846e593e52541fb7a8_Lando-6-on-track-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba846e593e52541fb7a8_Lando-6-on-track-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba846e593e52541fb7a8_Lando-6-on-track.webp 1080w" class="image is-social-card"></div></div><div data-video-stream-wrap="" class="callout-socials-card-w"><div data-stream-hover="true" data-video-stream="" data-stream-url="824804225" data-stream-muted="true" data-stream-loop="true" data-stream-autoplay="true" class="video-stream"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/6830302d42237886d0c4b24c_ln-social-img-2.webp" loading="eager" data-video-stream-placeholder="" alt="" sizes="(max-width: 767px) 100vw, 637.9948120117188px" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/6830302d42237886d0c4b24c_ln-social-img-2-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/6830302d42237886d0c4b24c_ln-social-img-2.webp 638w" class="image is-social-card"></div></div><div data-video-stream-wrap="" class="callout-socials-card-w"><div data-stream-hover="true" data-video-stream="" data-stream-url="824804225" data-stream-muted="true" data-stream-loop="true" data-stream-autoplay="true" class="video-stream"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba8463e72a95c2d8a0ba_Lando-4-off-track.webp" loading="eager" data-video-stream-placeholder="" alt="" sizes="(max-width: 767px) 100vw, 637.9948120117188px" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba8463e72a95c2d8a0ba_Lando-4-off-track-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba8463e72a95c2d8a0ba_Lando-4-off-track-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba8463e72a95c2d8a0ba_Lando-4-off-track.webp 1080w" class="image is-social-card"></div></div><div data-video-stream-wrap="" class="callout-socials-card-w"><div data-stream-hover="true" data-video-stream="" data-stream-url="824804225" data-stream-muted="true" data-stream-loop="true" data-stream-autoplay="true" class="video-stream"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba848fb98d1ca68eb6c8_Lando-5-off-track.webp" loading="eager" data-video-stream-placeholder="" alt="" sizes="(max-width: 767px) 100vw, 637.9948120117188px" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba848fb98d1ca68eb6c8_Lando-5-off-track-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba848fb98d1ca68eb6c8_Lando-5-off-track-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba848fb98d1ca68eb6c8_Lando-5-off-track.webp 1080w" class="image is-social-card"></div></div><div data-video-stream-wrap="" class="callout-socials-card-w"><div data-stream-hover="true" data-video-stream="" data-stream-url="824804225" data-stream-muted="true" data-stream-loop="true" data-stream-autoplay="true" class="video-stream"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba8449f0506fbaad037b_Lano-5-on-track.webp" loading="eager" data-video-stream-placeholder="" alt="" sizes="(max-width: 767px) 100vw, 637.9948120117188px" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba8449f0506fbaad037b_Lano-5-on-track-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba8449f0506fbaad037b_Lano-5-on-track-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba8449f0506fbaad037b_Lano-5-on-track.webp 1080w" class="image is-social-card"></div></div><div data-video-stream-wrap="" class="callout-socials-card-w"><div data-stream-hover="true" data-video-stream="" data-stream-url="824804225" data-stream-muted="true" data-stream-loop="true" data-stream-autoplay="true" class="video-stream"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/6830302dadd0727e6ac034dd_ln-social-img-6.webp" loading="eager" data-video-stream-placeholder="" alt="" sizes="(max-width: 767px) 100vw, 637.9948120117188px" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/6830302dadd0727e6ac034dd_ln-social-img-6-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/6830302dadd0727e6ac034dd_ln-social-img-6.webp 637w" class="image is-social-card"></div></div><div data-video-stream-wrap="" class="callout-socials-card-w"><div data-stream-hover="true" data-video-stream="" data-stream-url="824804225" data-stream-muted="true" data-stream-loop="true" data-stream-autoplay="true" class="video-stream"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba83f162f4d2f4e78442_Lando-6-off-track.webp" loading="eager" data-video-stream-placeholder="" alt="" sizes="(max-width: 767px) 100vw, 637.9948120117188px" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba83f162f4d2f4e78442_Lando-6-off-track-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba83f162f4d2f4e78442_Lando-6-off-track-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba83f162f4d2f4e78442_Lando-6-off-track.webp 1080w" class="image is-social-card"></div></div></div><div class="callout-socials-intro-w"><div data-anim-high="right, dark-green-tint-1" split-text="lines" class="text-cta-short-intro font-brier">Follow Lando on social media</div></div><div class="callout-socials-links-layout"><a data-anim="text-hover" href="https://www.tiktok.com/@landonorris" target="_blank" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, dark-green-tint-1" split-text="lines,chars" class="btn-text">tiktok</div></div></a><a data-anim="text-hover" href="https://www.instagram.com/lando" target="_blank" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, dark-green-tint-1" split-text="lines,chars" class="btn-text">instagram</div></div></a><a data-anim="text-hover" href="https://www.youtube.com/@LandoNorris" target="_blank" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, dark-green-tint-1" split-text="lines,chars" class="btn-text">Youtube</div></div></a><a data-anim="text-hover" href="https://www.twitch.tv/landonorris" target="_blank" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, dark-green-tint-1" split-text="lines,chars" class="btn-text">Twitch</div></div></a></div></div></di
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 12: Footer
- **Confidence:** 40%
- **Tag:** section
- **Classes:** `s is-footer`
- **Size:** full viewport height
- **Background color:** rgb(244, 244, 237)
- **Headings:** H2: "Always bringing the fight."
- **CTAs:** Home, On Track, Off Track, Partnerships, Calendar
- **Media:** 10 image(s), 2 canvas(es), 8 SVG(s)
- **Animations:**
  - `div`.footer-bg-gradient: transition: all
  - `div`.c: transition: all
  - `div`.footer-layout-w: transition: all
  - `div`.footer-layout-clip: transition: all
  - `div`.footer-inner-layout: transition: all
  - `div`.footer-bg-pattern-w: transition: all
  - `div`.footer-bg-helmet-w: transition: all
  - `div`.spacer: transition: all
  - `div`.footer-links-w: transition: all
  - `div`.footer-statement-w: transition: all
  - `div`.footer-marquee: transition: all
  - `div`.footer-legal-links-w: transition: all
  - `div`.footer-legal-links-col: transition: all
  - `div`.text-title-small-label: transition: all
  - `div`.footer-legal-links-col: transition: all
  - `a`.text-link-w: transition: all
  - `a`.text-link-w: transition: all

### Element Style Blueprint

- **`<div>`** .footer-bg-gradient
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1440px | opacity: 1
  - anim: all

- **`<div>`** .c.is-footer
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1440px | padding: 16.6667px | opacity: 1
  - anim: all
  - text: "pagesHomeOn TrackOff TrackPartnershipsCalendarStoreFollow OnTiktokInstagramYoutubeTwitchSign Up Always bringing the fight.business enquiries © 2026 La"

- **`<div>`** .footer-layout-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1406.69px | opacity: 1
  - anim: all
  - text: "pagesHomeOn TrackOff TrackPartnershipsCalendarStoreFollow OnTiktokInstagramYoutubeTwitchSign Up Always bringing the fight.business enquiries © 2026 La"

- **`<div>`** .footer-layout-clip
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | bg: rgb(40, 44, 32) | border: 0px none rgb(244, 244, 237) | display: block | width: 1406.69px | opacity: 1
  - anim: all
  - text: "pagesHomeOn TrackOff TrackPartnershipsCalendarStoreFollow OnTiktokInstagramYoutubeTwitchSign Up Always bringing the fight.business enquiries"

- **`<div>`** .footer-inner-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1406.69px | opacity: 1
  - anim: all
  - text: "pagesHomeOn TrackOff TrackPartnershipsCalendarStoreFollow OnTiktokInstagramYoutubeTwitchSign Up Always bringing the fight.business enquiries"

- **`<div>`** .footer-bg-pattern-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1406.69px | opacity: 0.12
  - anim: all

- **`<div>`** .footer-bg-helmet-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1406.69px | opacity: 1
  - anim: all
  - text: "business enquiries"

- **`<div>`** .spacer._14rem
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1440px | opacity: 1
  - anim: all

- **`<div>`** .footer-links-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1406.69px | padding: 0px 170.667px | margin: 385.047px 0px 186.667px | opacity: 1
  - anim: all
  - text: "pagesHomeOn TrackOff TrackPartnershipsCalendarStoreFollow OnTiktokInstagramYoutubeTwitchSign Up"

- **`<div>`** .footer-statement-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: center | border: 0px none rgb(244, 244, 237) | display: flex | width: 1406.69px | opacity: 1
  - anim: all
  - text: "Always bringing the fight."

- **`<div>`** .footer-marquee
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1406.69px | opacity: 1
  - anim: all

- **`<div>`** .footer-legal-links-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 1406.69px | opacity: 1
  - anim: all
  - text: "© 2026 Lando Norris. All rights reservedPrivacy PolicyTerms"

- **`<div>`** .footer-legal-links-col
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 191.688px | opacity: 1
  - anim: all
  - text: "© 2026 Lando Norris. All rights reserved"

- **`<div>`** .text-title-small-label
  - font: 10px 600 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 12.5px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 191.688px | opacity: 1
  - anim: all
  - text: "© 2026 Lando Norris. All rights reserved"

- **`<div>`** .footer-legal-links-col
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 147.344px | opacity: 1
  - anim: all
  - text: "Privacy PolicyTerms"

- **`<a>`** .text-link-w.w-inline-block
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 92.4688px | opacity: 1
  - anim: all
  - href: https://landonorris.com/legal/privacy-policy
  - text: "Privacy Policy"

- **`<a>`** .text-link-w.w-inline-block
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 38.2188px | opacity: 1
  - anim: all
  - href: https://landonorris.com/legal/terms-conditions
  - text: "Terms"

### HTML Structure

```html
<section data-footer-theme="white" data-nav-theme-target="dark" class="s is-footer"><div class="spacer _14rem"></div><div class="c is-footer"><div class="footer-layout-w"><div data-nav-theme-target="light" class="footer-layout-clip"><div class="footer-inner-layout"><div class="footer-links-w"><div class="footer-links-col"><div class="eyebrow-w c-green-off-white-2"><div class="text-eyebrow">pages</div></div><div class="footer-links-layout"><a data-anim="text-hover" href="/" aria-current="page" class="text-link-w w-inline-block w--current"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">Home</div></div></a><a data-anim="text-hover" href="/on-track" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">On Track</div></div></a><a data-anim="text-hover" href="/off-track" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">Off Track</div></div></a><a data-anim="text-hover" href="/partnerships" class="text-link-w display-none w-inline-block"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">Partnerships</div></div></a><a data-anim="text-hover" href="/calendar" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">Calendar</div></div></a></div><a data-anim="text-hover" href="https://store.landonorris.com/" target="_blank" class="text-link-w c-lime w-inline-block"><div class="text-clip-w"><div data-anim-high="right, dark-green-tint-1" split-text="lines,chars" class="btn-text is-nav">Store</div></div></a></div><div class="footer-links-col"><div class="eyebrow-w c-green-off-white-2"><div class="text-eyebrow">Follow On</div></div><div class="footer-links-layout"><a data-anim="text-hover" href="https://www.tiktok.com/@landonorris" target="_blank" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">Tiktok</div></div></a><a data-anim="text-hover" href="https://www.instagram.com/lando" target="_blank" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">Instagram</div></div></a><a data-anim="text-hover" href="https://www.youtube.com/@LandoNorris" target="_blank" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">Youtube</div></div></a><a data-anim="text-hover" href="https://www.twitch.tv/landonorris" target="_blank" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">Twitch</div></div></a></div><a data-signup-trigger="" data-anim="text-hover" href="#" class="text-link-w c-lime is-hidden w-inline-block"><div class="text-clip-w"><div data-anim-high="right, dark-green-tint-1" split-text="lines,chars" class="btn-text is-nav">Sign&nbsp;Up</div></div></a></div></div><div class="footer-statement-w"><div class="footer-statement-layout"><div class="footer-rive-w"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d443bc774ddcd37b3d8d4d_ln4-footer-rive-placeholder.svg" loading="eager" data-rive-placeholder="" alt="" class="image is-footer-rive"><div class="marquee-gl-rive-w w-embed"><canvas data-rive-object="" data-rive-file="signature" data-rive-artboard="signature" data-rive-state-machine="signature_play" data-rive-input="color_lime" data-rive-fit="contain" data-rive-scrolltrigger-target="" data-rive-scrolltrigger-start="" data-rive-scrolltrigger-end="">
</canvas></div></div><h2 data-anim-high="right,lime-off" split-text="lines" class="text-impact-sm-mona footer">Always <span class="text-impact-sm-brier c-lime-off">bringing</span> the <span class="text-impact-sm-brier c-lime-off">fight</span>.</h2></div></div><div class="footer-bg-helmet-w"><div class="footer-bg-helmet-layout"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d43d6e276c436a378a1da6_ln-360-helm-1.webp" loading="eager" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d43d6e276c436a378a1da6_ln-360-helm-1-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d43d6e276c436a378a1da6_ln-360-helm-1-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d43d6e276c436a378a1da6_ln-360-helm-1-p-1080.webp 1080w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d43d6e276c436a378a1da6_ln-360-helm-1.webp 1560w" alt="" class="footer-bg-img"><div class="footer-bg-bottom-btn-w"><a data-btn-rive-rotate="false" data-anim="text-hover" data-btn-rive-hover="" data-theme="lime" data-wf--button-primary--variant="base" href="mailto:business@landonorris.com" class="btn-w w-inline-block"><div class="btn-inner"><div class="btn-inner-text-w"><div split-text="chars" class="btn-text">business enquiries</div></div><div class="btn-icon-w"><div class="btn-rive-w w-embed"><canvas data-rive-object="" data-rive-file="btn-ui" data-rive-artboard="arrow" data-rive-state-machine="arrow" data-rive-hover="false" data-rive-fit="contain">
</canvas></div></div></div></a></div></div></div><div aria-hidden="true" class="footer-marquee"><div data-marquee-duplicate="3" data-marquee-scroll-direction-target="" data-marquee-direction="left" data-marquee-status="normal" data-marquee-speed="30" data-marquee-scroll-speed="5" class="marquee-adv-row"><div data-marquee-scroll-target="" class="marquee-adv-scroll"><div data-marquee-collection-target="" class="marquee-adv-collection"><div class="marquee-adv-item"><div class="footer-marquee-item"><div class="footer-marquee-logo-w"><div class="footer-marquee-svg w-embed"><svg width="100%" height="100%" viewBox="0 0 97 42" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="m2.04 15.998 2.249 8.218 2.354-8.218h3.045l2.355 8.188 2.249-8.188h2.026l-2.881 9.748h-2.745l-2.519-8.338-2.52 8.338H2.895L0 15.998h2.04ZM16.377 20.843c0-2.937 1.725-4.993 5.339-4.993 3.164 0 5.039 1.814 5.039 5.008v.48h-8.248c.134 1.65 1.094 2.79 3.224 2.79 1.724 0 2.46-.78 2.64-1.515l.03-.088h2.25l-.015.09c-.285 1.8-1.89 3.284-4.934 3.284-3.6 0-5.324-2.054-5.324-5.039l-.001-.017Zm8.263-.99-.015-.03c-.223-1.41-1.287-2.204-2.999-2.204-1.785 0-2.73.885-3.03 2.235h6.044ZM35.317 24.263c-1.005 1.11-2.444 1.634-4.184 1.634-2.01 0-3.494-.704-3.494-2.505 0-1.859 1.44-2.653 3.584-2.879l2.294-.24c1.575-.165 2.685-.3 2.837-1.14l-.016.152.016-.104c.195-1.064-.6-1.605-2.325-1.605-1.814 0-2.849.557-3.15 2.127l-.03.138h-2.042l.03-.136c.495-2.43 2.16-3.853 5.339-3.853 3.284 0 4.604 1.454 4.11 3.778l-1.304 6.117h-1.98l.315-1.484Zm-3.734.136c2.026 0 3.854-.93 4.439-3.36v-.029l.045-.21c-.42.524-1.335.81-2.49.915l-1.934.223c-1.5.152-1.934.63-1.934 1.29 0 .766.674 1.17 1.874 1.17ZM42.26 17.544c.75-1.05 1.874-1.694 3.315-1.694 2.31 0 3.569 1.92 2.85 4.544l-.18.615H46.16l.165-.615c.42-1.485.045-2.79-1.605-2.79-1.694 0-2.64 1.14-3 2.505l-1.199 5.638h-2.04L40.55 16h2.04l-.33 1.545ZM54.933 15.85c3.674 0 5.115 2.219 4.589 5.053l-.076.435h-8.082c-.03 1.695 1.14 2.79 3.09 2.79 1.409 0 2.338-.585 2.698-1.44l.09-.165h2.055l-.06.18c-.615 1.83-2.145 3.194-4.92 3.194-3.568 0-5.563-2.431-4.873-5.804.45-2.009 2.085-4.243 5.489-4.243Zm2.654 3.973v-.06c.075-1.334-.9-2.144-2.564-2.144-1.98 0-2.938 1.14-3.36 2.204h5.924ZM69.18 24.367c-.525.72-1.605 1.53-3.434 1.53-3.075 0-4.95-2.127-4.95-5.008v-.03c0-2.91 1.935-5.01 4.905-5.01 1.829 0 2.954.825 3.479 1.53V16h2.025v9.703c0 2.325-.855 3.647-3.539 3.647h-6.33v-1.76h6.06c1.484 0 1.784-.644 1.784-2.127v-1.095Zm-3.147-.24c2.114 0 3.15-1.439 3.15-3.224v-.06c0-1.784-1.02-3.224-3.15-3.224-2.19 0-3.15 1.5-3.15 3.242v.03c-.002 1.722.972 3.237 
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 13: Hero
- **Confidence:** 15%
- **Tag:** div
- **Classes:** `transition-w`
- **Size:** full viewport height
- **Background color:** rgb(210, 255, 0)
- **CTAs:** Load Norris
- **Media:** 1 canvas(es)
- **Flex:** direction: row, wrap: nowrap, gap: normal
- **Align items:** flex-end
- **Justify:** center
- **Animations:**
  - `div`.transition-rive: transition: all
  - `canvas`: transition: all
  - `div`.transition-btn: transition: all
  - `a`.btn-w: transition: all
  - `div`.btn-inner: transition: all
  - `div`.btn-inner-text-w: transition: all
  - `div`.btn-text: transition: all
  - `div`.js__embed: transition: all

### Element Style Blueprint

- **`<div>`** .transition-rive.w-embed
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all

- **`<canvas>`**
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: inline-block | width: 1440px | opacity: 1
  - anim: all

- **`<div>`** .transition-btn
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 103.797px | opacity: 1
  - anim: all
  - text: "Load Norris"

- **`<a>`** .btn-w.w-inline-block
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | bg: rgb(210, 255, 0) | radius: 7.2px | border: 1px solid rgb(210, 255, 0) | display: flex | width: 103.797px | padding: 0px 13.3333px | opacity: 1
  - anim: all
  - href: https://landonorris.com/#
  - text: "Load Norris"

- **`<div>`** .btn-inner
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 75.1406px | opacity: 1
  - anim: all
  - text: "Load Norris"

- **`<div>`** .btn-inner-text-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 75.1406px | opacity: 1
  - anim: all
  - text: "Load Norris"

- **`<div>`** .btn-text
  - font: 13.3333px 800 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 13.3333px | text-transform: uppercase | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 75.1406px | opacity: 1
  - anim: all
  - text: "Load Norris"

- **`<div>`** .js__embed.w-embed
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | opacity: 1
  - anim: all

### HTML Structure

```html
<div class="transition-w"><div class="transition-rive w-embed"><canvas data-rive-primary=""></canvas></div><div class="transition-btn"><a data-btn-rive-rotate="false" data-anim="text-hover" data-btn-rive-hover="" data-theme="lime" data-wf--button-primary--variant="base" href="#" class="btn-w w-inline-block"><div class="btn-inner"><div class="btn-inner-text-w"><div split-text="chars" class="btn-text">Load Norris</div></div></div></a></div><div class="js__embed w-embed w-script"><!--
<script src="https://assets.itsoffbrand.io/lando/dev-js/transitions-rive-isolate.js"></script>
--></div></div>
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 14: Hero
- **Confidence:** 0%
- **Tag:** div
- **Classes:** `transition-rive w-embed`
- **Size:** full viewport height
- **Media:** 1 canvas(es)
- **Animations:**
  - `canvas`: transition: all

### Element Style Blueprint

- **`<canvas>`**
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: inline-block | width: 1440px | opacity: 1
  - anim: all

### HTML Structure

```html
<div class="transition-rive w-embed"><canvas data-rive-primary=""></canvas></div>
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 15: Hero
- **Confidence:** 60%
- **Tag:** div
- **Classes:** `page-w`
- **Size:** full viewport height
- **Headings:** H1: "Lando Norris"; H2: "2025 Mclaren Formula 1 Driver"; H2: "ON"; H2: "TRACK"; H2: "OFF"; H2: "TRACK"; H2: "Helmets"; H2: "Hall of Fame"; H3: "Season"; H3: "Discoball"; H3: "Dark Glitter"; H3: "Season"; H3: "Porcelain"; H3: "Japan"; H3: "GIF"; H3: "Dark Mode"; H3: "Race"; H3: "Las Vegas"; H3: "Chrome"; H3: "Beachball"; H3: "Basketball"; H3: "Season"; H3: "Silverstone"; H3: "Season"; H2: "World Drivers' Champion"; H2: "partners"; H2: "&campaigns"; H2: "what’s upOn Socials"; H2: "Always bringing the fight."
- **CTAs:** Monacogp, view on track, Visit the store, view partnerships, tiktok
- **Media:** 123 image(s), 15 canvas(es), 78 SVG(s)
- **Sticky elements:** 4
- **Fixed elements:** 2
- **Animations:**
  - `div`.taxi-w: transition: all
  - `div`.sticky-track: transition: all
  - `div`.sticky-track: transition: all
  - `div`.s-group: transition: all
  - `div`.c: transition: all
  - `div`.gl-wrap: transition: all
  - `div`.gl-background: transition: all
  - `div`.sticky-item: transition: all
  - `div`.c: transition: all
  - `div`.sticky-item: transition: all
  - `div`.horizontal-pin-wrap: transition: all
  - `div`.otot-home-end-img-w: transition: all
  - `div`.c: transition: all
  - `div`.footer-bg-gradient: transition: all
  - `div`.c: transition: all
  - `div`.c: transition: all
  - `div`.callout-socials-inner: transition: all
  - `div`.c: transition: all
  - `div`.impact-content-w: transition: all
  - `div`.footer-layout-w: transition: all
  - `div`.grid-main: transition: all
  - `div`.c: transition: all
  - `div`.home-collab-rive-w: transition: all
  - `div`.c: transition: all
  - `div`.spacer: transition: all
  - `div`.spacer: transition: all
  - `div`.spacer: transition: all
  - `div`.title-layout: transition: all
  - `div`.exe-top-visor: transition: all
  - `div`.spacer: transition: all

### Element Style Blueprint

- **`<div>`** .taxi-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all
  - text: "Lando Norris2025 Mclaren Formula 1 Driver Next Race Monacogp mclaren f1 since 2019mclaren f1 since 2019 tap to lockBack to scrollMessage from lando mc"

- **`<div>`** .sticky-track.home-hero
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all
  - text: "Next Race Monacogp mclaren f1 since 2019mclaren f1 since 2019 tap to lockBack to scrollMessage from lando"

- **`<div>`** .sticky-track.is-home-otot
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all
  - text: "ONTRACK Most recent results, career stats and photos from trackside. OFFTRACKCampaigns, shoots and other such promotional materials for fans"

- **`<div>`** .s-group.bg-black
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | bg: rgb(17, 17, 18) | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all
  - text: "HelmetsHall of FameFrom his iconic blobs to innovative one-off designs, Lando has always been passionate about designing innovative and memorable helm"

- **`<div>`** .c.home-helmets
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | padding: 33.3333px 16.6667px 16.6667px | opacity: 1
  - anim: all
  - text: "HelmetsHall of FameFrom his iconic blobs to innovative one-off designs, Lando has always been passionate about designing innovative and memorable helm"

- **`<div>`** .gl-wrap.w-embed
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all

- **`<div>`** .gl-background
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all

- **`<div>`** .sticky-item.home-hero
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all
  - text: "Next Race Monacogp mclaren f1 since 2019mclaren f1 since 2019 tap to lockBack to scrollMessage from lando"

- **`<div>`** .c.is-horiz-scroll
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all
  - text: "Qatar, 2024FIA Prize Giving, 2024It doesn’t matter where you start, it’s how you progress from there.Miami GP, 2024Monaco, 2023Britain, 20251Battersea"

- **`<div>`** .sticky-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all
  - text: "ONTRACK Most recent results, career stats and photos from trackside. OFFTRACKCampaigns, shoots and other such promotional materials for fans"

- **`<div>`** .horizontal-pin-wrap
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all
  - text: "Qatar, 2024FIA Prize Giving, 2024It doesn’t matter where you start, it’s how you progress from there.Miami GP, 2024Monaco, 2023Britain, 20251Battersea"

- **`<div>`** .otot-home-end-img-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1440px | opacity: 1
  - anim: all

- **`<div>`** .c
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | padding: 0px 16.6667px | opacity: 1
  - anim: all
  - text: "mclaren f1 since 2019Redefining limits, fighting for wins, bringing it all in all ways. Defining a legacy in Formula 1 on and off the track."

- **`<div>`** .footer-bg-gradient
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1440px | opacity: 1
  - anim: all

- **`<div>`** .c.is-callout-socials
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: start | border: 0px none rgb(17, 17, 18) | display: block | width: 1440px | padding: 0px 16.6667px | opacity: 1
  - anim: all
  - text: "what’s upOn SocialsFollow Lando on social mediatiktokinstagramYoutubeTwitch"

- **`<div>`** .c.is-lando-exe
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1440px | padding: 0px 146.667px | opacity: 1
  - anim: all
  - text: "LANDO STOREWorld Drivers' ChampionCelebrate this incredible moment with a collection designed for the fans who never stopped believing. Wear it, frame"

- **`<div>`** .callout-socials-inner
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: start | border: 0px none rgb(17, 17, 18) | display: flex | width: 1406.69px | opacity: 1
  - anim: all
  - text: "what’s upOn SocialsFollow Lando on social mediatiktokinstagramYoutubeTwitch"

- **`<div>`** .c.is-footer
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1440px | padding: 16.6667px | opacity: 1
  - anim: all
  - text: "pagesHomeOn TrackOff TrackPartnershipsCalendarStoreFollow OnTiktokInstagramYoutubeTwitchSign Up Always bringing the fight.business enquiries © 2026 La"

- **`<div>`** .impact-content-w.is-home
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(221, 225, 210) | lh: 20px | text-align: center | border: 0px none rgb(221, 225, 210) | display: flex | width: 1068px | padding: 80px 0px 160px | margin: 0px 169.344px | opacity: 1
  - anim: all
  - text: "mclaren f1 since 2019Redefining limits, fighting for wins, bringing it all in all ways. Defining a legacy in Formula 1 on and off the track."

- **`<div>`** .footer-layout-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1406.69px | opacity: 1
  - anim: all
  - text: "pagesHomeOn TrackOff TrackPartnershipsCalendarStoreFollow OnTiktokInstagramYoutubeTwitchSign Up Always bringing the fight.business enquiries © 2026 La"

- **`<div>`** .grid-main.exe-grid
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: grid | width: 1146.69px | opacity: 1
  - anim: all
  - text: "LANDO STOREWorld Drivers' ChampionCelebrate this incredible moment with a collection designed for the fans who never stopped believing. Wear it, frame"

- **`<div>`** .c.is-home-collabs
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1440px | padding: 0px 16.6667px | opacity: 1
  - anim: all
  - text: "partners&campaignsLando is proud to collaborate with a range of partners, who share his passion for performance across a range of industries.view part"

- **`<div>`** .home-collab-rive-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1061.66px | opacity: 1
  - anim: all

- **`<div>`** .c.is-callout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1440px | padding: 160px 16.6667px 116.667px | opacity: 1
  - anim: all
  - text: "See more helmets and highlights from Lando on the trackview on track"

- **`<div>`** .spacer._20rem
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1440px | opacity: 1
  - anim: all

- **`<div>`** .spacer._20rem
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1406.69px | opacity: 1
  - anim: all

- **`<div>`** .spacer._14rem
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1440px | opacity: 1
  - anim: all

- **`<div>`** .title-layout.grid-main
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: grid | width: 1406.69px | opacity: 1
  - anim: all
  - text: "partners&campaignsLando is proud to collaborate with a range of partners, who share his passion for performance across a range of industries.view part"

- **`<div>`** .exe-top-visor
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | bg: rgb(17, 17, 18) | border: 0px none rgb(40, 44, 32) | display: block | width: 1440px | opacity: 1
  - anim: all

- **`<div>`** .spacer._8rem
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1406.69px | opacity: 1
  - anim: all

### HTML Structure

```html
<div data-start="hidden" overflow-clip="x" class="page-w"><main data-taxi="" class="main-w"><div data-page="home" data-taxi-view="" class="taxi-w"><div class="home-title-w"><h1 class="screen-reader">Lando Norris</h1><h2 class="screen-reader">2025 Mclaren Formula 1 Driver</h2></div><div data-designmode-white="" data-sticky-hero="track" data-gl-track="head" class="sticky-track home-hero"><div class="sticky-item home-hero"><section data-hero-animation-container="" class="s home-hero"><div class="c home-hero"><div data-gl="head" data-sticky-hero="canvas" class="gl-canvas"></div><div class="home-hero-next-race-w"><div class="home-hero-next-race-outline w-embed"><svg width="119" height="244" viewBox="0 0 119 244" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M118.5 6v232a5.5 5.5 0 0 1-5.5 5.5H6A5.5 5.5 0 0 1 .5 238V25A5.5 5.5 0 0 1 6 19.5h46.346c4.695 0 9.167-2 12.297-5.498l7.46-8.337A15.5 15.5 0 0 1 83.653.5H113a5.5 5.5 0 0 1 5.5 5.5Z" stroke="currentColor"></path>
</svg></div><div class="home-hero-next-race-top"><div data-anim-high="right, lime" split-text="lines" class="text-eyebrow">Next Race</div></div><div class="home-hero-next-race-row is-1 w-dyn-list"><div role="list" class="nr-list w-dyn-items"><div role="listitem" class="w-dyn-item"><a href="/calendar" class="home-hero-next-race-row w-inline-block"><div class="home-hero-next-race-rive-w"><div class="home-hero-next-race-rive w-embed"><!-- data-rive-circuit-hover="true"
-- looks for all [data-rive-circuit-hover-target] elements on page
-- changes the data-rive-input-track to the value of that hovered attribute
--> 
<canvas data-rive-object="" data-rive-file="circuits" data-rive-artboard="circuits" data-rive-state-machine="circuits" data-rive-input-track="monaco" data-rive-input-color="" data-rive-input-weight="" data-rive-fit="contain" data-rive-circuit-hover="">
</canvas></div></div><div class="eyebrow-w gap0-25"><div data-anim-high="right, lime" split-text="lines" class="text-eyebrow">Monaco</div><div data-anim-high="right, lime" split-text="lines" class="text-eyebrow">gp</div></div></a></div></div></div><div class="home-hero-next-race-line"></div><div data-gl-helmet="hover" class="home-hero-next-race-row is-2"><div class="base-helmet-rive-w"><div class="base-helmet-rive w-embed"><canvas data-rive-object="" data-rive-file="reef" data-rive-artboard="helmet-reef" data-rive-state-machine="helmet-reef_play" data-rive-input="" data-rive-instant-play="true" data-rive-fit="contain" data-rive-scrolltrigger-target="" data-rive-scrolltrigger-start="" data-rive-scrolltrigger-end="">
</canvas></div></div><div class="eyebrow-w hero-next-race"><div data-anim-high="right, lime" split-text="lines" class="text-eyebrow">mclaren f1 since 2019</div></div></div></div><div class="home-hero-tablet-hero-text"><div data-hero-anim="mob1" class="home-hero-tablet-text-w"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e968a40345883f8ccc1b05_ln4-lando-norris-text-mobile.svg" loading="eager" alt="Lando Norris Text" class="image"></div><div data-hero-anim="mob2" class="eyebrow-w hero-next-race"><div data-anim-high="right, lime" split-text="lines,chars" class="text-eyebrow">mclaren f1 since 2019</div></div></div><div data-home-swipe-wrap="" class="home-hero-touch-controls-w"><button title="Toggle Swipe" data-home-swipe-toggle="" class="btn-w is-touch-swipe"><div class="btn-inner is-touch-swipe"><div class="btn-icon-w is-touch-swipe"><div class="btn-rive-w is-touch-swipe is-unlocked w-embed"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.51 15.32">
  <g>
    <path d="M4.9 15.32c-.37 0-.73-.07-1.07-.2s-.65-.34-.92-.61L.12 10.58a.747.747 0 0 1 .2-1.02l1.17-.8c.22-.22.52-.22.81-.13L2.27.77c0-.22.08-.4.23-.55S2.84 0 3.05 0s.39.07.54.22c.14.15.22.33.22.55v10.22s.02 1.13.02 1.55.28 1.26 1.08 1.26h4.78c.61 0 1.14-.2 1.57-.61.49-.47.73-1.15.73-1.83V7.15c0-.22.08-.4.23-.55s.34-.22.55-.22.39.07.54.22c.14.15.22.33.22.55v4.34c0 1.07-.37 1.98-1.11 2.72s-1.65 1.11-2.72 1.11H4.9Z" fill="currentColor"></path>
    <path d="M5.51 7.92V3.83c0-.22.08-.4.23-.55.15-.14.34-.22.55-.22s.39.07.54.22c.14.15.22.33.22.55v4.09H5.51ZM8.73 7.92V5.11c0-.22.08-.4.23-.55s.34-.22.55-.22.39.07.54.22c.14.15.22.33.22.55v2.81H8.73Z" fill="currentColor"></path>
  </g>
</svg></div><div class="btn-rive-w is-touch-swipe is-locked w-embed"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.51 8.51">
<g><path d="M7.89 7.89.63.63M.63 7.89 7.89.63" stroke="currentColor" stroke-width="0.17rem"></path>
</g></svg></div></div></div></button><div class="home-hero-touch-desc-w"><div data-home-swipe-desc="unlocked" class="touch-desc-inner"><div class="text-eyebrow touch-desc">tap to lock</div></div><div data-home-swipe-desc="locked" class="touch-desc-inner"><div class="text-eyebrow touch-desc">Back to scroll</div></div></div></div></div></section><section class="s home-marquee"><div class="c is-marquee"><div class="marqee-adv-layout"><div class="marquee-adv-top-w"><div class="marquee-adv-top-layout"><div class="marquee-signature-w"><div data-wf--c-home-hero-icon--variant="ln4" class="home-hero-logo-wrap"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67cecea4e9d311047dcb51e5_ln4-hw-signature2.svg" loading="eager" data-hero-anim="img" alt="Lando's signature in lime color" class="image is-home-marquee-sig-img w-variant-88b83061-c887-c094-eb94-cbb8cabca5e0 is-1"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67f517cdc5bb460c3c3b8e5b_ln4-LN-logo-svg.svg" loading="eager" data-hero-anim="img" alt="" class="image is-home-marquee-sig-img w-variant-88b83061-c887-c094-eb94-cbb8cabca5e0 is-ln4-logo"></div></div><div class="eyebrow-w"><div split-text="chars" data-hero-anim="msg" class="text-eyebrow">Message from lando</div></div></div></div><div class="marquee-gl-target-w"><div data-sticky-hero="target" class="marquee-gl-target"><div class="marquee-gl-rive-target"><div class="marquee-gl-rive-w w-embed"><canvas data-rive-object="" data-rive-file="signature" data-rive-artboard="signature" data-rive-state-machine="signature_scroll" data-rive-input="color_lime" data-rive-fit="contain" data-rive-scrolltrigger-target=".hero-rive-tracker" data-rive-scrolltrigger-start="top center" data-rive-scrolltrigger-end="bottom 80%">
</canvas></div></div></div></div><div data-gl="carousel" class="gl-carousel"></div></div></div></section></div><div data-nav-theme-target="dark" class="hero-nav-theme is-1"></div><div data-nav-theme-target="light" class="hero-nav-theme is-2"></div><div data-hero-rive-tracker="" class="hero-eyebrow-tracker"></div><div data-hero-rive-tracker="" class="hero-rive-tracker"></div></div><section class="s"><div class="c"><div class="impact-content-w is-home"><div class="impact-icon-w"><div class="base-helmet-rive-w"><div data-rive-placeholder="" class="base-helmet-rive w-embed"><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 97 50.1">
  <path d="M.4 27.6s3 .9 6.1 5.9c-.4-1.1-.6-2.2-.8-3.4C1.5 27.8 1.1 25.7.8 22c.2 1 3.2 2.4 3.6 4 .4 1.3.8 2.5 1.3 3.1 0-1-.1-2 0-3v-.5c-1.3-1.1-4.3-4.3-3.5-9.1.5 1.2 3 1.6 3.7 7.4.2-1.1.5-2.1.8-3.2C5.5 19.2 3.5 15 5.6 7.9c.3 1.2 2.5 5.7 2 8.3-.2.8-.2 1.7-.3 2.6 0-.2.1-.4.2-.6.3-.9.7-1.8 1.2-2.7 0-1.4-.2-2.8-.8-4.1-.3-.6-.4-1.3-.4-2s.4-1.3.8-1.8c.6-.8.8-2.8.8-2.8s2.2 3.4 0 9.8c.4-.7.9-1.5 1.4-2.1.4-1 .4-2 .2-3.1-.4-1.8-.7-4.5 2.2-7.7-.3 1.5.4 4.2-.1 6-.4 1.3-.9 2.6-1.5 3.8.5-.6 1.1-1.2 1.7-1.8.3-1 .2-2.5.8-4.9.7-2.9 2.2-3.3 2.8-4.8.5 3.3-1 6.7-2.4 8.6l.4-.3c.4-.3.8-.6 1.1-1 .4-1.8 1.2-3.5 2.4-5 .8-.9 2.7-1.4 3-2.2-.3 3.3-2.3 5.1-4 6.3.9-.5 1.9-.7 2.9-.7s2 .4 2.8 1c0 0-2.2 1.3-3.7 1.1-1.5-.2-2.1-.5-3-.2-.3.3-.7.6-1.1.9 2.2-.6 4.8 1 5.8 2-1.9.9-3.5.3-4.3-.6-.7-.7-1.8-.4-2.3-.8-.7.6-1.3 1.2-2 1.8-.7.7-1.3 1.5-1.9 2.4 1.4-1.3 3.7-2.7 6-2.2-.3.9-1.8 2.5-3.4 3.1-1.4.4-2.7.4-3.6.9-.6 1-1 2.1-1.4 3.3 2.1-3.1 6.3-3.9 7.3-3.7 0 0-2 .9-2.4 2.4-.5 1.6-2.2 2.1-3.6 2.2-.7.1-1.4.5-1.9 1-.4 1.4-.8 2.9-1 4.4 1.9-6.5 6.4-5.5 6.4-5.5-.6.3-1 .9-1.2 1.5-.4 
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 16: Hero
- **Confidence:** 60%
- **Tag:** div
- **Classes:** `taxi-w`
- **Size:** full viewport height
- **Headings:** H1: "Lando Norris"; H2: "2025 Mclaren Formula 1 Driver"; H2: "ON"; H2: "TRACK"; H2: "OFF"; H2: "TRACK"; H2: "Helmets"; H2: "Hall of Fame"; H3: "Season"; H3: "Discoball"; H3: "Dark Glitter"; H3: "Season"; H3: "Porcelain"; H3: "Japan"; H3: "GIF"; H3: "Dark Mode"; H3: "Race"; H3: "Las Vegas"; H3: "Chrome"; H3: "Beachball"; H3: "Basketball"; H3: "Season"; H3: "Silverstone"; H3: "Season"; H2: "World Drivers' Champion"; H2: "partners"; H2: "&campaigns"; H2: "what’s upOn Socials"; H2: "Always bringing the fight."
- **CTAs:** Monacogp, view on track, Visit the store, view partnerships, tiktok
- **Media:** 123 image(s), 15 canvas(es), 78 SVG(s)
- **Sticky elements:** 4
- **Fixed elements:** 2
- **Animations:**
  - `div`.sticky-track: transition: all
  - `div`.sticky-track: transition: all
  - `div`.s-group: transition: all
  - `div`.c: transition: all
  - `div`.w-dyn-list: transition: all
  - `div`.helmet-grid: transition: all
  - `img`.image: transition: all
  - `div`.gl-wrap: transition: all
  - `div`.gl-background: transition: all
  - `div`.sticky-item: transition: all
  - `div`.c: transition: all
  - `div`.sticky-item: transition: all
  - `div`.horizontal-pin-wrap: transition: all
  - `div`.otot-home-end-img-w: transition: all
  - `div`.c: transition: all
  - `div`.c: transition: all
  - `div`.horizontal-pin-spacer: transition: all
  - `div`.c: transition: all
  - `div`.gl-canvas: transition: all
  - `div`.horizontal-pin-sticky: transition: all
  - `div`.otot-home-bg: transition: all
  - `div`.otot-home-inner: transition: all
  - `div`.c: transition: all
  - `div`.footer-bg-gradient: transition: all
  - `div`.c: transition: all
  - `div`.c: transition: all
  - `div`.callout-socials-inner: transition: all
  - `div`.callout-socials-layout: transition: all
  - `div`.c: transition: all
  - `div`.impact-content-w: transition: all

### Element Style Blueprint

- **`<div>`** .sticky-track.home-hero
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all
  - text: "Next Race Monacogp mclaren f1 since 2019mclaren f1 since 2019 tap to lockBack to scrollMessage from lando"

- **`<div>`** .sticky-track.is-home-otot
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all
  - text: "ONTRACK Most recent results, career stats and photos from trackside. OFFTRACKCampaigns, shoots and other such promotional materials for fans"

- **`<div>`** .s-group.bg-black
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | bg: rgb(17, 17, 18) | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all
  - text: "HelmetsHall of FameFrom his iconic blobs to innovative one-off designs, Lando has always been passionate about designing innovative and memorable helm"

- **`<div>`** .c.home-helmets
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | padding: 33.3333px 16.6667px 16.6667px | opacity: 1
  - anim: all
  - text: "HelmetsHall of FameFrom his iconic blobs to innovative one-off designs, Lando has always been passionate about designing innovative and memorable helm"

- **`<div>`** .w-dyn-list
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1406.69px | opacity: 1
  - anim: all
  - text: "Season2025 Discoball2025 Dark Glitter2025 Season2024 Porcelain2024 Japan2024 GIF2024 Dark Mode2024 Race2023 Las Vegas2023 Chrome2023 Beachball2023 Bas"

- **`<div>`** .helmet-grid.w-dyn-items
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: grid | width: 1406.69px | opacity: 1
  - anim: all
  - text: "Season2025 Discoball2025 Dark Glitter2025 Season2024 Porcelain2024 Japan2024 GIF2024 Dark Mode2024 Race2023 Las Vegas2023 Chrome2023 Beachball2023 Bas"

- **`<img>`** .image.is-otot-home-end
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302ff5ff89a9a4afb8c19e_ln-home-helm-large.webp

- **`<div>`** .gl-wrap.w-embed
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all

- **`<div>`** .gl-background
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all

- **`<div>`** .sticky-item.home-hero
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all
  - text: "Next Race Monacogp mclaren f1 since 2019mclaren f1 since 2019 tap to lockBack to scrollMessage from lando"

- **`<div>`** .c.is-horiz-scroll
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all
  - text: "Qatar, 2024FIA Prize Giving, 2024It doesn’t matter where you start, it’s how you progress from there.Miami GP, 2024Monaco, 2023Britain, 20251Battersea"

- **`<div>`** .sticky-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all
  - text: "ONTRACK Most recent results, career stats and photos from trackside. OFFTRACKCampaigns, shoots and other such promotional materials for fans"

- **`<div>`** .horizontal-pin-wrap
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all
  - text: "Qatar, 2024FIA Prize Giving, 2024It doesn’t matter where you start, it’s how you progress from there.Miami GP, 2024Monaco, 2023Britain, 20251Battersea"

- **`<div>`** .otot-home-end-img-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1440px | opacity: 1
  - anim: all

- **`<div>`** .c.home-hero
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1440px | padding: 0px 16.6667px | opacity: 1
  - anim: all
  - text: "Next Race Monacogp mclaren f1 since 2019mclaren f1 since 2019 tap to lockBack to scroll"

- **`<div>`** .c.is-marquee
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1440px | opacity: 1
  - anim: all
  - text: "Message from lando"

- **`<div>`** .horizontal-pin-spacer
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all
  - text: "Qatar, 2024FIA Prize Giving, 2024It doesn’t matter where you start, it’s how you progress from there.Miami GP, 2024Monaco, 2023Britain, 20251Battersea"

- **`<div>`** .c.is-otot-home
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1440px | padding: 0px 16.6667px | opacity: 1
  - anim: all
  - text: "ONTRACK Most recent results, career stats and photos from trackside. OFFTRACKCampaigns, shoots and other such promotional materials for fans"

- **`<div>`** .gl-canvas
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all

- **`<div>`** .horizontal-pin-sticky
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1440px | opacity: 1
  - anim: all
  - text: "Qatar, 2024FIA Prize Giving, 2024It doesn’t matter where you start, it’s how you progress from there.Miami GP, 2024Monaco, 2023Britain, 20251Battersea"

- **`<div>`** .otot-home-bg
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1440px | opacity: 1
  - anim: all

- **`<div>`** .otot-home-inner
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 1406.69px | opacity: 1
  - anim: all
  - text: "ONTRACK Most recent results, career stats and photos from trackside. OFFTRACKCampaigns, shoots and other such promotional materials for fans"

- **`<div>`** .c
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | padding: 0px 16.6667px | opacity: 1
  - anim: all
  - text: "mclaren f1 since 2019Redefining limits, fighting for wins, bringing it all in all ways. Defining a legacy in Formula 1 on and off the track."

- **`<div>`** .footer-bg-gradient
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1440px | opacity: 1
  - anim: all

- **`<div>`** .c.is-callout-socials
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: start | border: 0px none rgb(17, 17, 18) | display: block | width: 1440px | padding: 0px 16.6667px | opacity: 1
  - anim: all
  - text: "what’s upOn SocialsFollow Lando on social mediatiktokinstagramYoutubeTwitch"

- **`<div>`** .c.is-lando-exe
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1440px | padding: 0px 146.667px | opacity: 1
  - anim: all
  - text: "LANDO STOREWorld Drivers' ChampionCelebrate this incredible moment with a collection designed for the fans who never stopped believing. Wear it, frame"

- **`<div>`** .callout-socials-inner
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: start | border: 0px none rgb(17, 17, 18) | display: flex | width: 1406.69px | opacity: 1
  - anim: all
  - text: "what’s upOn SocialsFollow Lando on social mediatiktokinstagramYoutubeTwitch"

- **`<div>`** .callout-socials-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | border: 0px none rgb(17, 17, 18) | display: flex | width: 1406.69px | opacity: 1
  - anim: all
  - text: "what’s upOn SocialsFollow Lando on social mediatiktokinstagramYoutubeTwitch"

- **`<div>`** .c.is-footer
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1440px | padding: 16.6667px | opacity: 1
  - anim: all
  - text: "pagesHomeOn TrackOff TrackPartnershipsCalendarStoreFollow OnTiktokInstagramYoutubeTwitchSign Up Always bringing the fight.business enquiries © 2026 La"

- **`<div>`** .impact-content-w.is-home
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(221, 225, 210) | lh: 20px | text-align: center | border: 0px none rgb(221, 225, 210) | display: flex | width: 1068px | padding: 80px 0px 160px | margin: 0px 169.344px | opacity: 1
  - anim: all
  - text: "mclaren f1 since 2019Redefining limits, fighting for wins, bringing it all in all ways. Defining a legacy in Formula 1 on and off the track."

### HTML Structure

```html
<div data-page="home" data-taxi-view="" class="taxi-w"><div class="home-title-w"><h1 class="screen-reader">Lando Norris</h1><h2 class="screen-reader">2025 Mclaren Formula 1 Driver</h2></div><div data-designmode-white="" data-sticky-hero="track" data-gl-track="head" class="sticky-track home-hero"><div class="sticky-item home-hero"><section data-hero-animation-container="" class="s home-hero"><div class="c home-hero"><div data-gl="head" data-sticky-hero="canvas" class="gl-canvas"></div><div class="home-hero-next-race-w"><div class="home-hero-next-race-outline w-embed"><svg width="119" height="244" viewBox="0 0 119 244" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M118.5 6v232a5.5 5.5 0 0 1-5.5 5.5H6A5.5 5.5 0 0 1 .5 238V25A5.5 5.5 0 0 1 6 19.5h46.346c4.695 0 9.167-2 12.297-5.498l7.46-8.337A15.5 15.5 0 0 1 83.653.5H113a5.5 5.5 0 0 1 5.5 5.5Z" stroke="currentColor"></path>
</svg></div><div class="home-hero-next-race-top"><div data-anim-high="right, lime" split-text="lines" class="text-eyebrow">Next Race</div></div><div class="home-hero-next-race-row is-1 w-dyn-list"><div role="list" class="nr-list w-dyn-items"><div role="listitem" class="w-dyn-item"><a href="/calendar" class="home-hero-next-race-row w-inline-block"><div class="home-hero-next-race-rive-w"><div class="home-hero-next-race-rive w-embed"><!-- data-rive-circuit-hover="true"
-- looks for all [data-rive-circuit-hover-target] elements on page
-- changes the data-rive-input-track to the value of that hovered attribute
--> 
<canvas data-rive-object="" data-rive-file="circuits" data-rive-artboard="circuits" data-rive-state-machine="circuits" data-rive-input-track="monaco" data-rive-input-color="" data-rive-input-weight="" data-rive-fit="contain" data-rive-circuit-hover="">
</canvas></div></div><div class="eyebrow-w gap0-25"><div data-anim-high="right, lime" split-text="lines" class="text-eyebrow">Monaco</div><div data-anim-high="right, lime" split-text="lines" class="text-eyebrow">gp</div></div></a></div></div></div><div class="home-hero-next-race-line"></div><div data-gl-helmet="hover" class="home-hero-next-race-row is-2"><div class="base-helmet-rive-w"><div class="base-helmet-rive w-embed"><canvas data-rive-object="" data-rive-file="reef" data-rive-artboard="helmet-reef" data-rive-state-machine="helmet-reef_play" data-rive-input="" data-rive-instant-play="true" data-rive-fit="contain" data-rive-scrolltrigger-target="" data-rive-scrolltrigger-start="" data-rive-scrolltrigger-end="">
</canvas></div></div><div class="eyebrow-w hero-next-race"><div data-anim-high="right, lime" split-text="lines" class="text-eyebrow">mclaren f1 since 2019</div></div></div></div><div class="home-hero-tablet-hero-text"><div data-hero-anim="mob1" class="home-hero-tablet-text-w"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e968a40345883f8ccc1b05_ln4-lando-norris-text-mobile.svg" loading="eager" alt="Lando Norris Text" class="image"></div><div data-hero-anim="mob2" class="eyebrow-w hero-next-race"><div data-anim-high="right, lime" split-text="lines,chars" class="text-eyebrow">mclaren f1 since 2019</div></div></div><div data-home-swipe-wrap="" class="home-hero-touch-controls-w"><button title="Toggle Swipe" data-home-swipe-toggle="" class="btn-w is-touch-swipe"><div class="btn-inner is-touch-swipe"><div class="btn-icon-w is-touch-swipe"><div class="btn-rive-w is-touch-swipe is-unlocked w-embed"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.51 15.32">
  <g>
    <path d="M4.9 15.32c-.37 0-.73-.07-1.07-.2s-.65-.34-.92-.61L.12 10.58a.747.747 0 0 1 .2-1.02l1.17-.8c.22-.22.52-.22.81-.13L2.27.77c0-.22.08-.4.23-.55S2.84 0 3.05 0s.39.07.54.22c.14.15.22.33.22.55v10.22s.02 1.13.02 1.55.28 1.26 1.08 1.26h4.78c.61 0 1.14-.2 1.57-.61.49-.47.73-1.15.73-1.83V7.15c0-.22.08-.4.23-.55s.34-.22.55-.22.39.07.54.22c.14.15.22.33.22.55v4.34c0 1.07-.37 1.98-1.11 2.72s-1.65 1.11-2.72 1.11H4.9Z" fill="currentColor"></path>
    <path d="M5.51 7.92V3.83c0-.22.08-.4.23-.55.15-.14.34-.22.55-.22s.39.07.54.22c.14.15.22.33.22.55v4.09H5.51ZM8.73 7.92V5.11c0-.22.08-.4.23-.55s.34-.22.55-.22.39.07.54.22c.14.15.22.33.22.55v2.81H8.73Z" fill="currentColor"></path>
  </g>
</svg></div><div class="btn-rive-w is-touch-swipe is-locked w-embed"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.51 8.51">
<g><path d="M7.89 7.89.63.63M.63 7.89 7.89.63" stroke="currentColor" stroke-width="0.17rem"></path>
</g></svg></div></div></div></button><div class="home-hero-touch-desc-w"><div data-home-swipe-desc="unlocked" class="touch-desc-inner"><div class="text-eyebrow touch-desc">tap to lock</div></div><div data-home-swipe-desc="locked" class="touch-desc-inner"><div class="text-eyebrow touch-desc">Back to scroll</div></div></div></div></div></section><section class="s home-marquee"><div class="c is-marquee"><div class="marqee-adv-layout"><div class="marquee-adv-top-w"><div class="marquee-adv-top-layout"><div class="marquee-signature-w"><div data-wf--c-home-hero-icon--variant="ln4" class="home-hero-logo-wrap"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67cecea4e9d311047dcb51e5_ln4-hw-signature2.svg" loading="eager" data-hero-anim="img" alt="Lando's signature in lime color" class="image is-home-marquee-sig-img w-variant-88b83061-c887-c094-eb94-cbb8cabca5e0 is-1"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67f517cdc5bb460c3c3b8e5b_ln4-LN-logo-svg.svg" loading="eager" data-hero-anim="img" alt="" class="image is-home-marquee-sig-img w-variant-88b83061-c887-c094-eb94-cbb8cabca5e0 is-ln4-logo"></div></div><div class="eyebrow-w"><div split-text="chars" data-hero-anim="msg" class="text-eyebrow">Message from lando</div></div></div></div><div class="marquee-gl-target-w"><div data-sticky-hero="target" class="marquee-gl-target"><div class="marquee-gl-rive-target"><div class="marquee-gl-rive-w w-embed"><canvas data-rive-object="" data-rive-file="signature" data-rive-artboard="signature" data-rive-state-machine="signature_scroll" data-rive-input="color_lime" data-rive-fit="contain" data-rive-scrolltrigger-target=".hero-rive-tracker" data-rive-scrolltrigger-start="top center" data-rive-scrolltrigger-end="bottom 80%">
</canvas></div></div></div></div><div data-gl="carousel" class="gl-carousel"></div></div></div></section></div><div data-nav-theme-target="dark" class="hero-nav-theme is-1"></div><div data-nav-theme-target="light" class="hero-nav-theme is-2"></div><div data-hero-rive-tracker="" class="hero-eyebrow-tracker"></div><div data-hero-rive-tracker="" class="hero-rive-tracker"></div></div><section class="s"><div class="c"><div class="impact-content-w is-home"><div class="impact-icon-w"><div class="base-helmet-rive-w"><div data-rive-placeholder="" class="base-helmet-rive w-embed"><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 97 50.1">
  <path d="M.4 27.6s3 .9 6.1 5.9c-.4-1.1-.6-2.2-.8-3.4C1.5 27.8 1.1 25.7.8 22c.2 1 3.2 2.4 3.6 4 .4 1.3.8 2.5 1.3 3.1 0-1-.1-2 0-3v-.5c-1.3-1.1-4.3-4.3-3.5-9.1.5 1.2 3 1.6 3.7 7.4.2-1.1.5-2.1.8-3.2C5.5 19.2 3.5 15 5.6 7.9c.3 1.2 2.5 5.7 2 8.3-.2.8-.2 1.7-.3 2.6 0-.2.1-.4.2-.6.3-.9.7-1.8 1.2-2.7 0-1.4-.2-2.8-.8-4.1-.3-.6-.4-1.3-.4-2s.4-1.3.8-1.8c.6-.8.8-2.8.8-2.8s2.2 3.4 0 9.8c.4-.7.9-1.5 1.4-2.1.4-1 .4-2 .2-3.1-.4-1.8-.7-4.5 2.2-7.7-.3 1.5.4 4.2-.1 6-.4 1.3-.9 2.6-1.5 3.8.5-.6 1.1-1.2 1.7-1.8.3-1 .2-2.5.8-4.9.7-2.9 2.2-3.3 2.8-4.8.5 3.3-1 6.7-2.4 8.6l.4-.3c.4-.3.8-.6 1.1-1 .4-1.8 1.2-3.5 2.4-5 .8-.9 2.7-1.4 3-2.2-.3 3.3-2.3 5.1-4 6.3.9-.5 1.9-.7 2.9-.7s2 .4 2.8 1c0 0-2.2 1.3-3.7 1.1-1.5-.2-2.1-.5-3-.2-.3.3-.7.6-1.1.9 2.2-.6 4.8 1 5.8 2-1.9.9-3.5.3-4.3-.6-.7-.7-1.8-.4-2.3-.8-.7.6-1.3 1.2-2 1.8-.7.7-1.3 1.5-1.9 2.4 1.4-1.3 3.7-2.7 6-2.2-.3.9-1.8 2.5-3.4 3.1-1.4.4-2.7.4-3.6.9-.6 1-1 2.1-1.4 3.3 2.1-3.1 6.3-3.9 7.3-3.7 0 0-2 .9-2.4 2.4-.5 1.6-2.2 2.1-3.6 2.2-.7.1-1.4.5-1.9 1-.4 1.4-.8 2.9-1 4.4 1.9-6.5 6.4-5.5 6.4-5.5-.6.3-1 .9-1.2 1.5-.4 1.1-.9 2-2.6 3.2-1.2.8-2.2 2.1-2.7 3.5 0 1.8.4 3.5.9 5.2-.3-2.2-.2-5.2 1.4-7.4-.2 1.5 1.5 4.
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 17: Hero
- **Confidence:** 15%
- **Tag:** div
- **Classes:** `sticky-track home-hero`
- **Size:** full viewport height
- **CTAs:** Monacogp
- **Media:** 3 image(s), 3 canvas(es), 3 SVG(s)
- **Sticky elements:** 1
- **Animations:**
  - `div`.sticky-item: transition: all
  - `div`.c: transition: all
  - `div`.c: transition: all
  - `div`.gl-canvas: transition: all
  - `div`.marqee-adv-layout: transition: all
  - `div`.marquee-gl-target-w: transition: all
  - `div`.marquee-adv-top-w: transition: all
  - `div`.home-hero-next-race-w: transition: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1)
  - `div`.home-hero-next-race-outline: transition: all
  - `div`.hero-rive-tracker: transition: all
  - `div`.home-hero-next-race-row: transition: all
  - `div`.home-hero-next-race-row: transition: all
  - `div`.home-hero-next-race-top: transition: all
  - `div`.hero-eyebrow-tracker: transition: all
  - `div`.home-hero-next-race-line: transition: all
  - `div`.hero-nav-theme: transition: all
  - `div`.hero-nav-theme: transition: all
  - `div`.home-hero-tablet-hero-text: transition: all
  - `div`.home-hero-touch-controls-w: transition: all
  - `div`.home-hero-tablet-text-w: transition: all
  - `div`.eyebrow-w: transition: all
  - `button`.btn-w: transition: all
  - `div`.home-hero-touch-desc-w: transition: all
  - `div`.gl-carousel: transition: all

### Element Style Blueprint

- **`<div>`** .sticky-item.home-hero
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all
  - text: "Next Race Monacogp mclaren f1 since 2019mclaren f1 since 2019 tap to lockBack to scrollMessage from lando"

- **`<div>`** .c.home-hero
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1440px | padding: 0px 16.6667px | opacity: 1
  - anim: all
  - text: "Next Race Monacogp mclaren f1 since 2019mclaren f1 since 2019 tap to lockBack to scroll"

- **`<div>`** .c.is-marquee
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1440px | opacity: 1
  - anim: all
  - text: "Message from lando"

- **`<div>`** .gl-canvas
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all

- **`<div>`** .marqee-adv-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all
  - text: "Message from lando"

- **`<div>`** .marquee-gl-target-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1440px | opacity: 1
  - anim: all

- **`<div>`** .marquee-adv-top-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1440px | opacity: 1
  - anim: all
  - text: "Message from lando"

- **`<div>`** .home-hero-next-race-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | lh: 20px | text-align: start | border: 0px none rgb(83, 84, 80) | display: block | width: 99.1562px | opacity: 1
  - anim: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1)
  - text: "Next Race Monacogp mclaren f1 since 2019"

- **`<div>`** .home-hero-next-race-outline.w-embed
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | lh: 20px | text-align: start | border: 0px none rgb(83, 84, 80) | display: block | width: 99.1562px | opacity: 1
  - anim: all

- **`<div>`** .hero-rive-tracker
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 10px | opacity: 1
  - anim: all

- **`<div>`** .home-hero-next-race-row.is-1
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | lh: 20px | text-align: start | border: 0px none rgb(83, 84, 80) | display: flex | width: 99.1562px | opacity: 1
  - anim: all
  - text: "Monacogp"

- **`<div>`** .home-hero-next-race-row.is-2
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | lh: 20px | text-align: start | border: 0px none rgb(83, 84, 80) | display: flex | width: 99.1562px | opacity: 1
  - anim: all
  - text: "mclaren f1 since 2019"

- **`<div>`** .home-hero-next-race-top
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | lh: 20px | text-align: start | border: 0px none rgb(83, 84, 80) | display: flex | width: 99.1562px | opacity: 1
  - anim: all
  - text: "Next Race"

- **`<div>`** .hero-eyebrow-tracker
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1px | opacity: 1
  - anim: all

- **`<div>`** .home-hero-next-race-line
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | lh: 20px | text-align: start | bg: rgb(83, 84, 80) | border: 0px none rgb(83, 84, 80) | display: block | width: 79.3125px | margin: 0px 9.92188px | opacity: 1
  - anim: all

- **`<div>`** .hero-nav-theme.is-1
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | opacity: 1
  - anim: all

- **`<div>`** .hero-nav-theme.is-2
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | opacity: 1
  - anim: all

- **`<div>`** .home-hero-tablet-hero-text
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | opacity: 1
  - anim: all
  - text: "mclaren f1 since 2019"

- **`<div>`** .home-hero-touch-controls-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | opacity: 1
  - anim: all
  - text: "tap to lockBack to scroll"

- **`<div>`** .home-hero-tablet-text-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | opacity: 1
  - anim: all

- **`<div>`** .eyebrow-w.hero-next-race
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: center | border: 0px none rgb(244, 244, 237) | display: flex | opacity: 1
  - anim: all
  - text: "mclaren f1 since 2019"

- **`<button>`** .btn-w.is-touch-swipe
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: center | bg: rgb(210, 255, 0) | radius: 7.2px | border: 1px solid rgb(210, 255, 0) | display: flex | width: 50px | padding: 0px 13.3333px | opacity: 1
  - anim: all

- **`<div>`** .home-hero-touch-desc-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | opacity: 1
  - anim: all
  - text: "tap to lockBack to scroll"

- **`<div>`** .gl-carousel
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all

### HTML Structure

```html
<div data-designmode-white="" data-sticky-hero="track" data-gl-track="head" class="sticky-track home-hero"><div class="sticky-item home-hero"><section data-hero-animation-container="" class="s home-hero"><div class="c home-hero"><div data-gl="head" data-sticky-hero="canvas" class="gl-canvas"></div><div class="home-hero-next-race-w"><div class="home-hero-next-race-outline w-embed"><svg width="119" height="244" viewBox="0 0 119 244" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M118.5 6v232a5.5 5.5 0 0 1-5.5 5.5H6A5.5 5.5 0 0 1 .5 238V25A5.5 5.5 0 0 1 6 19.5h46.346c4.695 0 9.167-2 12.297-5.498l7.46-8.337A15.5 15.5 0 0 1 83.653.5H113a5.5 5.5 0 0 1 5.5 5.5Z" stroke="currentColor"></path>
</svg></div><div class="home-hero-next-race-top"><div data-anim-high="right, lime" split-text="lines" class="text-eyebrow">Next Race</div></div><div class="home-hero-next-race-row is-1 w-dyn-list"><div role="list" class="nr-list w-dyn-items"><div role="listitem" class="w-dyn-item"><a href="/calendar" class="home-hero-next-race-row w-inline-block"><div class="home-hero-next-race-rive-w"><div class="home-hero-next-race-rive w-embed"><!-- data-rive-circuit-hover="true"
-- looks for all [data-rive-circuit-hover-target] elements on page
-- changes the data-rive-input-track to the value of that hovered attribute
--> 
<canvas data-rive-object="" data-rive-file="circuits" data-rive-artboard="circuits" data-rive-state-machine="circuits" data-rive-input-track="monaco" data-rive-input-color="" data-rive-input-weight="" data-rive-fit="contain" data-rive-circuit-hover="">
</canvas></div></div><div class="eyebrow-w gap0-25"><div data-anim-high="right, lime" split-text="lines" class="text-eyebrow">Monaco</div><div data-anim-high="right, lime" split-text="lines" class="text-eyebrow">gp</div></div></a></div></div></div><div class="home-hero-next-race-line"></div><div data-gl-helmet="hover" class="home-hero-next-race-row is-2"><div class="base-helmet-rive-w"><div class="base-helmet-rive w-embed"><canvas data-rive-object="" data-rive-file="reef" data-rive-artboard="helmet-reef" data-rive-state-machine="helmet-reef_play" data-rive-input="" data-rive-instant-play="true" data-rive-fit="contain" data-rive-scrolltrigger-target="" data-rive-scrolltrigger-start="" data-rive-scrolltrigger-end="">
</canvas></div></div><div class="eyebrow-w hero-next-race"><div data-anim-high="right, lime" split-text="lines" class="text-eyebrow">mclaren f1 since 2019</div></div></div></div><div class="home-hero-tablet-hero-text"><div data-hero-anim="mob1" class="home-hero-tablet-text-w"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e968a40345883f8ccc1b05_ln4-lando-norris-text-mobile.svg" loading="eager" alt="Lando Norris Text" class="image"></div><div data-hero-anim="mob2" class="eyebrow-w hero-next-race"><div data-anim-high="right, lime" split-text="lines,chars" class="text-eyebrow">mclaren f1 since 2019</div></div></div><div data-home-swipe-wrap="" class="home-hero-touch-controls-w"><button title="Toggle Swipe" data-home-swipe-toggle="" class="btn-w is-touch-swipe"><div class="btn-inner is-touch-swipe"><div class="btn-icon-w is-touch-swipe"><div class="btn-rive-w is-touch-swipe is-unlocked w-embed"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.51 15.32">
  <g>
    <path d="M4.9 15.32c-.37 0-.73-.07-1.07-.2s-.65-.34-.92-.61L.12 10.58a.747.747 0 0 1 .2-1.02l1.17-.8c.22-.22.52-.22.81-.13L2.27.77c0-.22.08-.4.23-.55S2.84 0 3.05 0s.39.07.54.22c.14.15.22.33.22.55v10.22s.02 1.13.02 1.55.28 1.26 1.08 1.26h4.78c.61 0 1.14-.2 1.57-.61.49-.47.73-1.15.73-1.83V7.15c0-.22.08-.4.23-.55s.34-.22.55-.22.39.07.54.22c.14.15.22.33.22.55v4.34c0 1.07-.37 1.98-1.11 2.72s-1.65 1.11-2.72 1.11H4.9Z" fill="currentColor"></path>
    <path d="M5.51 7.92V3.83c0-.22.08-.4.23-.55.15-.14.34-.22.55-.22s.39.07.54.22c.14.15.22.33.22.55v4.09H5.51ZM8.73 7.92V5.11c0-.22.08-.4.23-.55s.34-.22.55-.22.39.07.54.22c.14.15.22.33.22.55v2.81H8.73Z" fill="currentColor"></path>
  </g>
</svg></div><div class="btn-rive-w is-touch-swipe is-locked w-embed"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.51 8.51">
<g><path d="M7.89 7.89.63.63M.63 7.89 7.89.63" stroke="currentColor" stroke-width="0.17rem"></path>
</g></svg></div></div></div></button><div class="home-hero-touch-desc-w"><div data-home-swipe-desc="unlocked" class="touch-desc-inner"><div class="text-eyebrow touch-desc">tap to lock</div></div><div data-home-swipe-desc="locked" class="touch-desc-inner"><div class="text-eyebrow touch-desc">Back to scroll</div></div></div></div></div></section><section class="s home-marquee"><div class="c is-marquee"><div class="marqee-adv-layout"><div class="marquee-adv-top-w"><div class="marquee-adv-top-layout"><div class="marquee-signature-w"><div data-wf--c-home-hero-icon--variant="ln4" class="home-hero-logo-wrap"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67cecea4e9d311047dcb51e5_ln4-hw-signature2.svg" loading="eager" data-hero-anim="img" alt="Lando's signature in lime color" class="image is-home-marquee-sig-img w-variant-88b83061-c887-c094-eb94-cbb8cabca5e0 is-1"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67f517cdc5bb460c3c3b8e5b_ln4-LN-logo-svg.svg" loading="eager" data-hero-anim="img" alt="" class="image is-home-marquee-sig-img w-variant-88b83061-c887-c094-eb94-cbb8cabca5e0 is-ln4-logo"></div></div><div class="eyebrow-w"><div split-text="chars" data-hero-anim="msg" class="text-eyebrow">Message from lando</div></div></div></div><div class="marquee-gl-target-w"><div data-sticky-hero="target" class="marquee-gl-target"><div class="marquee-gl-rive-target"><div class="marquee-gl-rive-w w-embed"><canvas data-rive-object="" data-rive-file="signature" data-rive-artboard="signature" data-rive-state-machine="signature_scroll" data-rive-input="color_lime" data-rive-fit="contain" data-rive-scrolltrigger-target=".hero-rive-tracker" data-rive-scrolltrigger-start="top center" data-rive-scrolltrigger-end="bottom 80%">
</canvas></div></div></div></div><div data-gl="carousel" class="gl-carousel"></div></div></div></section></div><div data-nav-theme-target="dark" class="hero-nav-theme is-1"></div><div data-nav-theme-target="light" class="hero-nav-theme is-2"></div><div data-hero-rive-tracker="" class="hero-eyebrow-tracker"></div><div data-hero-rive-tracker="" class="hero-rive-tracker"></div></div>
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 18: Hero
- **Confidence:** 15%
- **Tag:** div
- **Classes:** `sticky-item home-hero`
- **Size:** full viewport height
- **CTAs:** Monacogp
- **Media:** 3 image(s), 3 canvas(es), 3 SVG(s)
- **Animations:**
  - `div`.c: transition: all
  - `div`.c: transition: all
  - `div`.gl-canvas: transition: all
  - `div`.marqee-adv-layout: transition: all
  - `div`.marquee-gl-target-w: transition: all
  - `div`.marquee-gl-target: transition: all
  - `div`.marquee-adv-top-w: transition: all
  - `div`.home-hero-next-race-w: transition: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1)
  - `div`.home-hero-next-race-outline: transition: all
  - `svg`: transition: all
  - `div`.home-hero-next-race-row: transition: all
  - `div`.home-hero-next-race-row: transition: all
  - `div`.nr-list: transition: all
  - `div`.marquee-adv-top-layout: transition: all
  - `div`.base-helmet-rive-w: transition: all
  - `div`.home-hero-next-race-top: transition: all
  - `div`.eyebrow-w: transition: all
  - `div`.text-eyebrow: transition: all
  - `div`.home-hero-next-race-line: transition: all
  - `div`.home-hero-tablet-hero-text: transition: all
  - `div`.home-hero-touch-controls-w: transition: all
  - `div`.home-hero-tablet-text-w: transition: all
  - `div`.eyebrow-w: transition: all
  - `button`.btn-w: transition: all
  - `div`.home-hero-touch-desc-w: transition: all
  - `div`.gl-carousel: transition: all
  - `img`.image: transition: all
  - `div`.text-eyebrow: transition: all
  - `div`.btn-inner: transition: all
  - `div`.touch-desc-inner: transition: all

### Element Style Blueprint

- **`<div>`** .c.home-hero
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1440px | padding: 0px 16.6667px | opacity: 1
  - anim: all
  - text: "Next Race Monacogp mclaren f1 since 2019mclaren f1 since 2019 tap to lockBack to scroll"

- **`<div>`** .c.is-marquee
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1440px | opacity: 1
  - anim: all
  - text: "Message from lando"

- **`<div>`** .gl-canvas
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all

- **`<div>`** .marqee-adv-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all
  - text: "Message from lando"

- **`<div>`** .marquee-gl-target-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1440px | opacity: 1
  - anim: all

- **`<div>`** .marquee-gl-target
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 471.656px | opacity: 1
  - anim: all

- **`<div>`** .marquee-adv-top-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1440px | opacity: 1
  - anim: all
  - text: "Message from lando"

- **`<div>`** .home-hero-next-race-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | lh: 20px | text-align: start | border: 0px none rgb(83, 84, 80) | display: block | width: 99.1562px | opacity: 1
  - anim: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1)
  - text: "Next Race Monacogp mclaren f1 since 2019"

- **`<div>`** .home-hero-next-race-outline.w-embed
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | lh: 20px | text-align: start | border: 0px none rgb(83, 84, 80) | display: block | width: 99.1562px | opacity: 1
  - anim: all

- **`<svg>`**
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | lh: 20px | text-align: start | border: 0px none rgb(83, 84, 80) | display: inline | width: 99.1562px | opacity: 1
  - anim: all

- **`<div>`** .home-hero-next-race-row.is-1
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | lh: 20px | text-align: start | border: 0px none rgb(83, 84, 80) | display: flex | width: 99.1562px | opacity: 1
  - anim: all
  - text: "Monacogp"

- **`<div>`** .home-hero-next-race-row.is-2
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | lh: 20px | text-align: start | border: 0px none rgb(83, 84, 80) | display: flex | width: 99.1562px | opacity: 1
  - anim: all
  - text: "mclaren f1 since 2019"

- **`<div>`** .nr-list.w-dyn-items
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | lh: 20px | text-align: start | border: 0px none rgb(83, 84, 80) | display: block | width: 99.1562px | opacity: 1
  - anim: all
  - text: "Monacogp"

- **`<div>`** .marquee-adv-top-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: center | border: 0px none rgb(244, 244, 237) | display: flex | width: 102.172px | opacity: 1
  - anim: all
  - text: "Message from lando"

- **`<div>`** .base-helmet-rive-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | lh: 20px | text-align: start | border: 0px none rgb(83, 84, 80) | display: block | width: 80.8281px | opacity: 1
  - anim: all

- **`<div>`** .home-hero-next-race-top
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | lh: 20px | text-align: start | border: 0px none rgb(83, 84, 80) | display: flex | width: 99.1562px | opacity: 1
  - anim: all
  - text: "Next Race"

- **`<div>`** .eyebrow-w.hero-next-race
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | lh: 20px | text-align: center | border: 0px none rgb(83, 84, 80) | display: flex | width: 79.3125px | opacity: 1
  - anim: all
  - text: "mclaren f1 since 2019"

- **`<div>`** .text-eyebrow
  - font: 8.33333px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | lh: 8.33333px | text-transform: uppercase | text-align: start | border: 0px none rgb(83, 84, 80) | display: block | width: 49.0781px | opacity: 1
  - anim: all
  - text: "Next Race"

- **`<div>`** .home-hero-next-race-line
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | lh: 20px | text-align: start | bg: rgb(83, 84, 80) | border: 0px none rgb(83, 84, 80) | display: block | width: 79.3125px | margin: 0px 9.92188px | opacity: 1
  - anim: all

- **`<div>`** .home-hero-tablet-hero-text
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | opacity: 1
  - anim: all
  - text: "mclaren f1 since 2019"

- **`<div>`** .home-hero-touch-controls-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | opacity: 1
  - anim: all
  - text: "tap to lockBack to scroll"

- **`<div>`** .home-hero-tablet-text-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | opacity: 1
  - anim: all

- **`<div>`** .eyebrow-w.hero-next-race
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: center | border: 0px none rgb(244, 244, 237) | display: flex | opacity: 1
  - anim: all
  - text: "mclaren f1 since 2019"

- **`<button>`** .btn-w.is-touch-swipe
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: center | bg: rgb(210, 255, 0) | radius: 7.2px | border: 1px solid rgb(210, 255, 0) | display: flex | width: 50px | padding: 0px 13.3333px | opacity: 1
  - anim: all

- **`<div>`** .home-hero-touch-desc-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | opacity: 1
  - anim: all
  - text: "tap to lockBack to scroll"

- **`<div>`** .gl-carousel
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all

- **`<img>`** .image
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: inline-block | width: 100% | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e968a40345883f8ccc1b05_ln4-lando-norris-text-mobile.svg

- **`<div>`** .text-eyebrow
  - font: 8.33333px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 8.33333px | text-transform: uppercase | text-align: center | border: 0px none rgb(244, 244, 237) | display: block | opacity: 1
  - anim: all
  - text: "mclaren f1 since 2019"

- **`<div>`** .btn-inner.is-touch-swipe
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: center | border: 0px none rgb(40, 44, 32) | display: flex | opacity: 1
  - anim: all

- **`<div>`** .touch-desc-inner
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | opacity: 1
  - anim: all
  - text: "tap to lock"

### HTML Structure

```html
<div class="sticky-item home-hero"><section data-hero-animation-container="" class="s home-hero"><div class="c home-hero"><div data-gl="head" data-sticky-hero="canvas" class="gl-canvas"></div><div class="home-hero-next-race-w"><div class="home-hero-next-race-outline w-embed"><svg width="119" height="244" viewBox="0 0 119 244" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M118.5 6v232a5.5 5.5 0 0 1-5.5 5.5H6A5.5 5.5 0 0 1 .5 238V25A5.5 5.5 0 0 1 6 19.5h46.346c4.695 0 9.167-2 12.297-5.498l7.46-8.337A15.5 15.5 0 0 1 83.653.5H113a5.5 5.5 0 0 1 5.5 5.5Z" stroke="currentColor"></path>
</svg></div><div class="home-hero-next-race-top"><div data-anim-high="right, lime" split-text="lines" class="text-eyebrow">Next Race</div></div><div class="home-hero-next-race-row is-1 w-dyn-list"><div role="list" class="nr-list w-dyn-items"><div role="listitem" class="w-dyn-item"><a href="/calendar" class="home-hero-next-race-row w-inline-block"><div class="home-hero-next-race-rive-w"><div class="home-hero-next-race-rive w-embed"><!-- data-rive-circuit-hover="true"
-- looks for all [data-rive-circuit-hover-target] elements on page
-- changes the data-rive-input-track to the value of that hovered attribute
--> 
<canvas data-rive-object="" data-rive-file="circuits" data-rive-artboard="circuits" data-rive-state-machine="circuits" data-rive-input-track="monaco" data-rive-input-color="" data-rive-input-weight="" data-rive-fit="contain" data-rive-circuit-hover="">
</canvas></div></div><div class="eyebrow-w gap0-25"><div data-anim-high="right, lime" split-text="lines" class="text-eyebrow">Monaco</div><div data-anim-high="right, lime" split-text="lines" class="text-eyebrow">gp</div></div></a></div></div></div><div class="home-hero-next-race-line"></div><div data-gl-helmet="hover" class="home-hero-next-race-row is-2"><div class="base-helmet-rive-w"><div class="base-helmet-rive w-embed"><canvas data-rive-object="" data-rive-file="reef" data-rive-artboard="helmet-reef" data-rive-state-machine="helmet-reef_play" data-rive-input="" data-rive-instant-play="true" data-rive-fit="contain" data-rive-scrolltrigger-target="" data-rive-scrolltrigger-start="" data-rive-scrolltrigger-end="">
</canvas></div></div><div class="eyebrow-w hero-next-race"><div data-anim-high="right, lime" split-text="lines" class="text-eyebrow">mclaren f1 since 2019</div></div></div></div><div class="home-hero-tablet-hero-text"><div data-hero-anim="mob1" class="home-hero-tablet-text-w"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e968a40345883f8ccc1b05_ln4-lando-norris-text-mobile.svg" loading="eager" alt="Lando Norris Text" class="image"></div><div data-hero-anim="mob2" class="eyebrow-w hero-next-race"><div data-anim-high="right, lime" split-text="lines,chars" class="text-eyebrow">mclaren f1 since 2019</div></div></div><div data-home-swipe-wrap="" class="home-hero-touch-controls-w"><button title="Toggle Swipe" data-home-swipe-toggle="" class="btn-w is-touch-swipe"><div class="btn-inner is-touch-swipe"><div class="btn-icon-w is-touch-swipe"><div class="btn-rive-w is-touch-swipe is-unlocked w-embed"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.51 15.32">
  <g>
    <path d="M4.9 15.32c-.37 0-.73-.07-1.07-.2s-.65-.34-.92-.61L.12 10.58a.747.747 0 0 1 .2-1.02l1.17-.8c.22-.22.52-.22.81-.13L2.27.77c0-.22.08-.4.23-.55S2.84 0 3.05 0s.39.07.54.22c.14.15.22.33.22.55v10.22s.02 1.13.02 1.55.28 1.26 1.08 1.26h4.78c.61 0 1.14-.2 1.57-.61.49-.47.73-1.15.73-1.83V7.15c0-.22.08-.4.23-.55s.34-.22.55-.22.39.07.54.22c.14.15.22.33.22.55v4.34c0 1.07-.37 1.98-1.11 2.72s-1.65 1.11-2.72 1.11H4.9Z" fill="currentColor"></path>
    <path d="M5.51 7.92V3.83c0-.22.08-.4.23-.55.15-.14.34-.22.55-.22s.39.07.54.22c.14.15.22.33.22.55v4.09H5.51ZM8.73 7.92V5.11c0-.22.08-.4.23-.55s.34-.22.55-.22.39.07.54.22c.14.15.22.33.22.55v2.81H8.73Z" fill="currentColor"></path>
  </g>
</svg></div><div class="btn-rive-w is-touch-swipe is-locked w-embed"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.51 8.51">
<g><path d="M7.89 7.89.63.63M.63 7.89 7.89.63" stroke="currentColor" stroke-width="0.17rem"></path>
</g></svg></div></div></div></button><div class="home-hero-touch-desc-w"><div data-home-swipe-desc="unlocked" class="touch-desc-inner"><div class="text-eyebrow touch-desc">tap to lock</div></div><div data-home-swipe-desc="locked" class="touch-desc-inner"><div class="text-eyebrow touch-desc">Back to scroll</div></div></div></div></div></section><section class="s home-marquee"><div class="c is-marquee"><div class="marqee-adv-layout"><div class="marquee-adv-top-w"><div class="marquee-adv-top-layout"><div class="marquee-signature-w"><div data-wf--c-home-hero-icon--variant="ln4" class="home-hero-logo-wrap"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67cecea4e9d311047dcb51e5_ln4-hw-signature2.svg" loading="eager" data-hero-anim="img" alt="Lando's signature in lime color" class="image is-home-marquee-sig-img w-variant-88b83061-c887-c094-eb94-cbb8cabca5e0 is-1"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67f517cdc5bb460c3c3b8e5b_ln4-LN-logo-svg.svg" loading="eager" data-hero-anim="img" alt="" class="image is-home-marquee-sig-img w-variant-88b83061-c887-c094-eb94-cbb8cabca5e0 is-ln4-logo"></div></div><div class="eyebrow-w"><div split-text="chars" data-hero-anim="msg" class="text-eyebrow">Message from lando</div></div></div></div><div class="marquee-gl-target-w"><div data-sticky-hero="target" class="marquee-gl-target"><div class="marquee-gl-rive-target"><div class="marquee-gl-rive-w w-embed"><canvas data-rive-object="" data-rive-file="signature" data-rive-artboard="signature" data-rive-state-machine="signature_scroll" data-rive-input="color_lime" data-rive-fit="contain" data-rive-scrolltrigger-target=".hero-rive-tracker" data-rive-scrolltrigger-start="top center" data-rive-scrolltrigger-end="bottom 80%">
</canvas></div></div></div></div><div data-gl="carousel" class="gl-carousel"></div></div></div></section></div>
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 19: Hero
- **Confidence:** 0%
- **Tag:** div
- **Classes:** `gl-canvas`
- **Size:** full viewport height
### HTML Structure

```html
<div data-gl="head" data-sticky-hero="canvas" class="gl-canvas"></div>
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 20: Contact
- **Confidence:** 20%
- **Tag:** div
- **Classes:** `impact-content-w is-home`
- **Size:** full viewport height
- **Padding:** 80px 0px 160px
- **Media:** 1 canvas(es), 1 SVG(s)
- **Flex:** direction: column, wrap: nowrap, gap: 50px
- **Align items:** center
- **Justify:** flex-start
- **Animations:**
  - `div`.text-impact-lg-mona: transition: all
  - `div`.impact-icon-w: transition: all
  - `div`.base-helmet-rive-w: transition: all
  - `div`.base-helmet-rive: transition: all
  - `canvas`: transition: all
  - `div`.text-eyebrow: transition: all
  - `div`.base-helmet-rive: transition: all
  - `svg`: transition: all

### Element Style Blueprint

- **`<div>`** .text-impact-lg-mona
  - font: 105.833px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(221, 225, 210) | lh: 95.25px | ls: -0.833333px | text-transform: uppercase | text-align: center | border: 0px none rgb(221, 225, 210) | display: block | width: 1068px | opacity: 1
  - anim: all
  - text: "Redefining limits, fighting for wins, bringing it all in all ways. Defining a legacy in Formula 1 on and off the track."

- **`<div>`** .impact-icon-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(221, 225, 210) | lh: 20px | text-align: center | border: 0px none rgb(221, 225, 210) | display: flex | width: 101.906px | opacity: 1
  - anim: all
  - text: "mclaren f1 since 2019"

- **`<div>`** .base-helmet-rive-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(221, 225, 210) | lh: 20px | text-align: center | border: 0px none rgb(221, 225, 210) | display: block | width: 101.906px | opacity: 1
  - anim: all

- **`<div>`** .base-helmet-rive.w-embed
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(221, 225, 210) | lh: 20px | text-align: center | border: 0px none rgb(221, 225, 210) | display: flex | width: 80.8281px | margin: 0px 10.5469px 0px 10.5312px | opacity: 1
  - anim: all

- **`<canvas>`**
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(221, 225, 210) | lh: 20px | text-align: center | border: 0px none rgb(221, 225, 210) | display: block | width: 80.8281px | opacity: 1
  - anim: all

- **`<div>`** .text-eyebrow
  - font: 8.33333px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(221, 225, 210) | lh: 8.33333px | text-transform: uppercase | text-align: center | border: 0px none rgb(221, 225, 210) | display: block | width: 101.906px | opacity: 1
  - anim: all
  - text: "mclaren f1 since 2019"

- **`<div>`** .base-helmet-rive.w-embed
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(221, 225, 210) | lh: 20px | text-align: center | border: 0px none rgb(221, 225, 210) | width: 80.8333px | margin: 0px auto | opacity: 1
  - anim: all

- **`<svg>`** #Layer_1
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(221, 225, 210) | lh: 20px | text-align: center | border: 0px none rgb(221, 225, 210) | display: inline | width: 100% | opacity: 1
  - anim: all

### HTML Structure

```html
<div class="impact-content-w is-home"><div class="impact-icon-w"><div class="base-helmet-rive-w"><div data-rive-placeholder="" class="base-helmet-rive w-embed"><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 97 50.1">
  <path d="M.4 27.6s3 .9 6.1 5.9c-.4-1.1-.6-2.2-.8-3.4C1.5 27.8 1.1 25.7.8 22c.2 1 3.2 2.4 3.6 4 .4 1.3.8 2.5 1.3 3.1 0-1-.1-2 0-3v-.5c-1.3-1.1-4.3-4.3-3.5-9.1.5 1.2 3 1.6 3.7 7.4.2-1.1.5-2.1.8-3.2C5.5 19.2 3.5 15 5.6 7.9c.3 1.2 2.5 5.7 2 8.3-.2.8-.2 1.7-.3 2.6 0-.2.1-.4.2-.6.3-.9.7-1.8 1.2-2.7 0-1.4-.2-2.8-.8-4.1-.3-.6-.4-1.3-.4-2s.4-1.3.8-1.8c.6-.8.8-2.8.8-2.8s2.2 3.4 0 9.8c.4-.7.9-1.5 1.4-2.1.4-1 .4-2 .2-3.1-.4-1.8-.7-4.5 2.2-7.7-.3 1.5.4 4.2-.1 6-.4 1.3-.9 2.6-1.5 3.8.5-.6 1.1-1.2 1.7-1.8.3-1 .2-2.5.8-4.9.7-2.9 2.2-3.3 2.8-4.8.5 3.3-1 6.7-2.4 8.6l.4-.3c.4-.3.8-.6 1.1-1 .4-1.8 1.2-3.5 2.4-5 .8-.9 2.7-1.4 3-2.2-.3 3.3-2.3 5.1-4 6.3.9-.5 1.9-.7 2.9-.7s2 .4 2.8 1c0 0-2.2 1.3-3.7 1.1-1.5-.2-2.1-.5-3-.2-.3.3-.7.6-1.1.9 2.2-.6 4.8 1 5.8 2-1.9.9-3.5.3-4.3-.6-.7-.7-1.8-.4-2.3-.8-.7.6-1.3 1.2-2 1.8-.7.7-1.3 1.5-1.9 2.4 1.4-1.3 3.7-2.7 6-2.2-.3.9-1.8 2.5-3.4 3.1-1.4.4-2.7.4-3.6.9-.6 1-1 2.1-1.4 3.3 2.1-3.1 6.3-3.9 7.3-3.7 0 0-2 .9-2.4 2.4-.5 1.6-2.2 2.1-3.6 2.2-.7.1-1.4.5-1.9 1-.4 1.4-.8 2.9-1 4.4 1.9-6.5 6.4-5.5 6.4-5.5-.6.3-1 .9-1.2 1.5-.4 1.1-.9 2-2.6 3.2-1.2.8-2.2 2.1-2.7 3.5 0 1.8.4 3.5.9 5.2-.3-2.2-.2-5.2 1.4-7.4-.2 1.5 1.5 4.1 1.1 5.9-.3 1.5-1.4 3.4-1.2 4.8.2.4.4.8.6 1.1 0-1 .5-2.3.5-3.3.3.9.2 3 .2 4.4.5.8 1.1 1.5 1.7 2.2-1.3-2.4-1.4-6-.4-9 1 1.5 2.1 4.4 1.8 6.4-.2 1.5 0 2.9.4 4.3l.3.3c.3.3.7.6 1 .8-1.5-2.1-1.3-5.3-1-6.7 1.8 2 3.3 6 3.2 8.1l1.2.6c1.6.7 3.4 1.1 5.1.6v.2l.1.2v.4c-1.8.5-3.8 0-5.5-.7l-1.8-.9c-1.1 1.1-3.4 1.8-4.8 1.4-1.3-.4-2.6-1.4-3.6-1.3 1.7-1.8 3.9-1.9 5.2-1.1 1.2.7 2 1 2.7.8-.8-.5-1.6-1.1-2.3-1.7l-.3-.3c-1.9.7-4 0-5.3-.8-1.5-.9-1.7-2.6-2.8-3.5 3.5-.1 5 1.4 5.6 2.3.5.7 1.2 1.3 2 1.5-1.1-1.1-2.1-2.2-2.9-3.5-.9-.2-3 0-4.1-1.5 1.5-.1 2.6 0 3.4.5-.2-.4-.4-.8-.6-1.1-1.1-.2-3.1 0-4.4-1.1-1.1-1.1-2.2-2.3-3.1-3.6 0 0 2.5.5 3.8 1.1-1.1-1-3.8-5.7-3.8-5.8ZM96.4 27.3s-3 1-6 6c.3-1.1.6-2.2.7-3.4 4.3-2.4 4.6-4.5 4.9-8.2-.2 1-3.1 2.5-3.6 4.1-.4 1.3-.8 2.5-1.2 3.2v-3.5c1.3-1.1 4.2-4.4 3.3-9.1-.4 1.2-3 1.6-3.6 7.5-.2-1.1-.5-2.1-.8-3.2 1.2-1.5 3.1-5.8.9-12.8-.3 1.2-2.4 5.7-1.9 8.3.2.8.3 1.7.3 2.6 0-.2-.1-.4-.2-.6L88 15.5c0-1.4.2-2.8.7-4.1.3-.6.4-1.3.3-2 0-.7-.4-1.3-.9-1.8-.6-.8-.9-2.8-.9-2.8s-2.1 3.5.2 9.8c-.4-.7-.9-1.4-1.5-2.1-.4-1-.5-2-.3-3.1.4-1.8.6-4.5-2.3-7.7.3 1.5-.4 4.2.2 6 .4 1.3.9 2.5 1.5 3.8-.5-.6-1.1-1.2-1.8-1.7-.3-1-.2-2.5-.8-4.9-.8-2.9-2.2-3.2-2.9-4.8-.4 3.3 1.1 6.7 2.5 8.6l-.4-.3-1.2-.9c-.4-1.8-1.3-3.5-2.5-5-.8-.9-2.8-1.3-3-2.2.3 3.3 2.4 5 4.1 6.3-.9-.5-1.9-.7-2.9-.6-1 0-2 .4-2.8 1 0 0 2.2 1.2 3.7 1 1.5-.2 2.1-.5 3-.2.3.3.7.6 1.1.9-2.2-.6-4.8 1.1-5.8 2.1 2 .9 3.5.2 4.3-.6.7-.7 1.7-.5 2.3-.9.7.6 1.4 1.1 2 1.8.7.7 1.3 1.5 1.9 2.3-1.4-1.2-3.7-2.6-6-2.1.3.9 1.8 2.5 3.5 3 1.4.4 2.7.4 3.6.8.6 1 1.1 2.1 1.5 3.2-2.2-3.1-6.4-3.7-7.4-3.6 0 0 2 .8 2.5 2.4.5 1.6 2.2 2 3.7 2.2.7 0 1.4.4 1.9 1 .5 1.4.8 2.9 1.1 4.4-2-6.4-6.5-5.4-6.5-5.4.6.3 1 .9 1.2 1.5.4 1.1.9 2 2.7 3.2 1.3.8 2.2 2 2.8 3.4 0 1.8-.3 3.5-.8 5.2.3-2.2.1-5.2-1.5-7.4.2 1.5-1.5 4.1-1 5.9.4 1.5 1.5 3.4 1.3 4.8l-.6 1.2c0-1-.5-2.3-.5-3.3-.3.9-.1 3-.2 4.4-.5.8-1 1.5-1.6 2.2 1.2-2.5 1.3-6 .2-9-1 1.5-2 4.5-1.7 6.5.2 1.5.1 2.9-.3 4.3l-.3.3c-.3.3-.7.6-1 .9 1.5-2.2 1.2-5.3.9-6.7-1.8 2-3.2 6-3 8.1-.4.2-.8.4-1.1.6-1.6.7-3.4 1.2-5.1.7v.8c1.9.5 3.8 0 5.5-.8.6-.3 1.2-.6 1.8-1 1.1 1.1 3.5 1.7 4.8 1.3 1.3-.4 2.6-1.5 3.6-1.4-1.7-1.7-4-1.8-5.2-1-1.1.7-1.9 1.1-2.7.8.8-.5 1.6-1.1 2.3-1.8l.3-.3c1.9.6 4 0 5.3-.9 1.4-.9 1.7-2.6 2.8-3.6-3.5 0-4.9 1.5-5.5 2.4-.5.7-1.2 1.3-2 1.5 1.1-1.1 2-2.3 2.9-3.5.9-.2 3-.1 4.1-1.6-1.5-.1-2.6 0-3.4.5l.6-1.2c1.1-.2 3.1 0 4.4-1.2 1.1-1.1 2.1-2.3 3-3.6 0 0-2.5.5-3.7 1.2 1.1-1 3.7-5.8 3.7-5.9ZM67.3 20.4zM67.2 20.8zM67.3 20.4zM67.3 20.4zM67.2 20.8zM68.4 33.8c.1-.7.3-1.4.4-2.3 1.1-6.1.4-11.8-2-17-2.9-6.2-9.3-12.9-18.3-13.1-9.1 0-15.6 6.4-18.7 12.6-2.6 5.1-3.4 10.8-2.4 17 .1.9.3 1.6.4 2.3 0 .5.1.9.3 1.4.1.6.3 1.2.4 1.7v.2c.1.5.3 1 .4 1.5.3 1 .5 1.5.8 1.9 0 .2.2.4.3.7l.3.9v.3c0 .3.1.5.2.8 0 1.4.7 2.2 1.5 3.3.9 1.1 1.6 1.3 2.9 1.5.9.1 1.4.2 3 .6l2 .4c2.3.8 4.6 1.3 7.9 1.3h.4c3.1 0 5.2-.4 7.5-1.1s1.9-.4 1.9-.4c1.6-.3 2.2-.4 3.1-.5 1.3-.2 2-.3 3-1.5.9-1 1.5-1.8 1.6-3.2.1-.3.2-.5.3-.8V42c0-.4.2-.7.3-.9.1-.3.2-.5.3-.7.3-.5.5-.9.8-1.9.1-.5.3-1 .4-1.5v-.2c.1-.5.3-1.1.4-1.7.2-.4.3-.9.3-1.4Zm-1-.2v.2c0 .3-.1.6-.2.9-.4 1.2-1.6 2.1-3.5 2.8.1-.3.2-.6.3-1 .4.1.9.2 1.4-.1.3-.2.4-.5.6-.8.1-.3.2-.6.3-1 .2-.7.3-1.7.6-2.8 0 .2 0 .4.2.6.1.2.3.2.5.3 0 .3-.1.7-.2 1ZM47.9 46.5c-7.3 0-13.6-1.7-16.1-4.1.1-.1.3-.3.6-.4 4.8 2.5 12.5 2.8 15.4 2.9h.7c3.3 0 10.4-.3 14.9-2.5.3.1.5.3.6.4-2.6 2.3-8.9 3.8-16.1 3.7ZM28.7 33.3v-.2c0-.3-.1-.6-.2-1 .4 0 .6-.4.7-.8.2.8.3 1.5.4 2 .2 1.4.4 2.2 1 2.6.3.2.6.3.8.3h.5c0 .3.1.7.2 1-1.9-.7-3-1.7-3.4-2.9 0-.3-.1-.6-.2-.9Zm1.8-18.5c.2-.2.4-.4.6-.5-.4.6-.9 1.3-1.2 2 .2-.5.4-.9.6-1.4Zm35.6.5c.2.5.4 1 .6 1.4-.4-.7-.8-1.4-1.2-2 .2.2.4.3.6.6ZM68 30.4h-.2c-.2 0-.5 0-.6.3.2-.9.4-1.5.5-1.9.2-.6.3-.8.5-.9 0 .9-.2 1.8-.3 2.8Zm-4.6 10.9h-.1c-.3-.1-.7-.2-1.1-.3 1.4-.4 2.6-.9 3.4-1.5-.5.7-1.3 1.3-2.3 1.8Zm-29.4.4c1.2-.2 2.5-.2 2.6-.2 3 .5 6.8.9 11.4.9h1.3c4.2 0 7.6-.3 10.4-.8 0 0 1.1.2 2.3.4-3.7 1.4-9.1 2-14 1.9-4.9 0-10.3-.7-13.9-2.2Zm-3.7-2.6c.9.6 2 1.2 3.4 1.6-.4 0-.8.1-1.1.2h-.1c-.9-.5-1.7-1.2-2.2-1.9Zm17.6 2.3c-10.6-.1-17.1-1.8-18.4-4.7 1.2.9 3 1.6 5.4 2.1 3.9.8 8.9.9 12.9.9h3.9c3.2 0 6.6-.1 9.5-.6 2.4-.4 4.2-1.1 5.4-2-1.4 2.9-8 4.4-18.6 4.2ZM33 35.3c0-.1 0-.3.4-.4.6-.1 1.1-.2 1.6-.2.6 0 1-.1 1.5-.3.4-.2.7 0 .7 0h.1v.8c0 .1-.1.3-.1.5v1c-.2.2-.2.2-1.1.2h-.3c-.7 0-1 .1-1.3.3-.2 0-.3.2-.6.2-.5 0-.7-1.3-.8-2.1Zm30.1.4Zm0 0Zm-4.1-1Zm-11 3.4v.5-.5s-.9 0-3.7-.4c.1-.1.2-.2.3-.4.4-.6 0-1.8 0-2 0-.1 0-.2-.2-.3 1 0 2.2 0 3.5.1h3.6s-.1.2-.2.3c0 .2-.5 1.4-.1 1.9.1.3.2.4.3.5-2.8.3-3.7.3-3.7.3Zm-7-2.6c.6.1 1.3.3 2.1.4h.3v.4h-.2c-.8-.1-2.3-.6-3.2-1.1.3 0 .7.1 1 .2Zm11.7 1v-.4h.3c.8 0 1.5-.2 2.1-.3.4 0 .7-.1 1-.2-.9.4-2.4.9-3.2 1h-.2Zm-16.8 1.4c.9 0 1.4 0 1.9-.6.2-.3.3-.6.3-.8 1.3.9 3.6 1.7 5.6 2.1-2.7 0-5.5-.3-8-.7h.2Zm22-1.1c0 .3 0 .6.3.8.5.6 1 .6 1.9.6h.2c-2.5.4-5.3.5-8 .5 2-.3 4.3-1.1 5.7-2Zm2.2.4c-.8 0-.9 0-1.1-.2-.1-.2 0-.4 0-.7V36c0-.2 0-.4-.1-.5s0-.1 0-.3v-.4h.7c.4.2.9.3 1.4.3.5 0 1 .1 1.7.3.3 0 .3.2.4.2v.1c-.1.8-.4 2.1-.8 2.1-.3 0-.4 0-.6-.2-.3-.2-.6-.3-1.3-.3h-.3Zm5.1-2.9v.4c-.3.3-.5.4-.5.4 0-.4-.4-1-1.6-1.3-.7-.2-1.3-.3-1.7-.3-.5 0-.8 0-1.1-.2-.6-.3-1.1-.2-1.4 0L58 33h-.2s-2.4.8-9.6.7c-7.3 0-9.5-.9-9.6-.9h-.2l-.9.2c-.3-.1-.8-.2-1.4 0-.3.1-.7.2-1.1.2-.5 0-1.1 0-1.8.3-1.1.3-1.5.9-1.6 1.3 0 0-.2 0-.5-.4 0-.3-.1-.7-.2-1.1-.1-.7-.3-1.5-.5-2.4-.1-.6-.3-1.1-.4-1.5-.4-1.6-.5-2.3-1.2-2.8-.4-.3-.2-1.3 0-2v-.2c.2-1.1.3-1.8.3-2.6 0-.7.2-1.4.2-1.4V20c0-.2-.1-.4-.2-.5.6 0 .6 0 .7.3v.4c0 .6.2 1.2.4 2.2.3 1.2.7 1.2 3.4 1.1h1c3.8-.2 6.2-.2 13.5 0 7.6 0 10.1.1 13.9.4.9 0 1.6.1 2.2.1h1.2c.3 0 .6-.2.8-.4.2-.2.2-.5.3-.7.3-1.1.4-1.9.5-2.5v-.2h.6v2.1c0 .8 0 1.5.2 2.6 0 .5.2 1 .2 1.5 0 .4-.1.6-.2.7-.5.3-.7.8-.9 1.4-.2.6-.4 1.5-.7 2.8-.4 1.3-.6 2.4-.7 3.2Zm-37-4.4c-.1-.9-.2-1.8-.2-2.8.4.3.5.7.8 2.2 0 .2.1.5.2.7 0 0 0-.1-.1-.1-.2-.1-.3-.2-.5-.2h-.2ZM52.5 6.2c-.4.7-.8 1.5-1.1 2.3-1-.2-1.9-.3-3-.3-1 0-2 0-3 .2-.3-.8-.7-1.6-1.1-2.3 1.3-.3 2.7-.5 4.1-.5 1.4 0 2.7.2 4.1.6Zm-4.3 3h.2c.9 0 1.8.1 2.6.2-.3.8-.6 1.7-.8 2.6h-3.6c-.2-.9-.5-1.7-.8-2.6.8-.1 1.6-.2 2.4-.2Zm17.5 11.4c-1.4-2-3.2-3.8-5.3-5.1.3-.3.6-.6.9-.8 1.9 1.8 3.4 3.9 4.4 5.8ZM49.9 13c-.2.7-.3 1.5-.5 2.2h-2.2c-.1-.8-.3-1.5-.4-2.2h3.1Zm-1.6 3.2h1c-.1.7-.2 1.4-.3 2.2h-1.4c0-.7-.1-1.5-.2-2.2h1Zm15.3 5.9c-1.4-1-3.1-1.9-5.3-2.5.1-.5.3-1 .5-1.5 2.1.9 3.8 2.3 5.2 4h-.4Zm-15.5-.5h-.4c0-.8 0-1.5-.1-2.3h1.2c0 .7-.1 1.5-.2 2.3H48Zm-8.6-.1c0-.5-.1-1-.2-1.4 1.2-.3 2.6-.4 4.3-.6.1.7.2 1.3.3 2.1h-4.3Zm-1 0h-3.7c1-.5 2.1-1 3.5-1.3 0 .4.1.8.2 1.2Zm6.3.1c0-.7-.2-1.4-.3-2.1h2c0 .7 0 1.5.1 2.2h-1.9Zm5.1-2.2c.7 0 1.4 0 2 .1l-.3 2.1h-1.9c0-.8.1-1.5.2-2.2Zm3 .2c1.6.2 3 .4 4.2.7 0 .5-.2.9-.2 1.4h-4.3c0-.7.2-1.4.3-2Zm5.2.9c1.3.4 2.5.9 3.5 1.4-.9 0-1.9-.1-3.1-.2h-.6c0-.4.1-.8.2-1.2Zm-.7-1.2c-1.2-.3-2.6-.5-4.3-.7.2-.7.3-1.4.5-2 1.6.2 3 .6 4.3 1.1-.2.5-
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 21: Hero
- **Confidence:** 20%
- **Tag:** div
- **Classes:** `horizontal-pin-wrap`
- **Size:** full viewport height
- **Media:** 13 image(s)
- **Sticky elements:** 1
- **Animations:**
  - `div`.horizontal-track: transition: all
  - `div`.horizontal-pin-spacer: transition: all
  - `div`.horizontal-pin-sticky: transition: all
  - `div`.horizontal-grid-col: transition: all
  - `div`.horizontal-grid-col: transition: all
  - `div`.horizontal-item-w: transition: all
  - `div`.horizontal-item-w: transition: all
  - `div`.horizontal-grid-col: transition: all
  - `div`.horizontal-grid-col: transition: all
  - `div`.horizontal-grid-spacer: transition: all
  - `div`.horizontal-grid-spacer: transition: all
  - `div`.horizontal-grid-spacer: transition: all
  - `div`.horizontal-grid-col: transition: all
  - `div`.horizontal-grid-col: transition: all
  - `div`.horizontal-grid-col: transition: all
  - `div`.horizontal-grid-spacer: transition: all
  - `div`.horizontal-grid-spacer: transition: all
  - `div`.horizontal-item-w: transition: all
  - `div`.horizontal-item-w: transition: all
  - `div`.horizontal-item-w: transition: all
  - `div`.horizontal-item-w: transition: all
  - `div`.horizontal-item-w: transition: all
  - `div`.horizontal-item-w: transition: all
  - `div`.horizontal-item-w: transition: all
  - `div`.horizontal-item-w: transition: all
  - `div`.horizontal-item-w: transition: all
  - `div`.horizontal-item-w: transition: all

### Element Style Blueprint

- **`<div>`** .horizontal-track
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 5357.2px | padding: 77px 16.6667px 33.3333px 1080px | opacity: 1
  - anim: all
  - text: "Qatar, 2024FIA Prize Giving, 2024It doesn’t matter where you start, it’s how you progress from there.Miami GP, 2024Monaco, 2023Britain, 20251Battersea"

- **`<div>`** .horizontal-pin-spacer
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all
  - text: "Qatar, 2024FIA Prize Giving, 2024It doesn’t matter where you start, it’s how you progress from there.Miami GP, 2024Monaco, 2023Britain, 20251Battersea"

- **`<div>`** .horizontal-pin-sticky
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1440px | opacity: 1
  - anim: all
  - text: "Qatar, 2024FIA Prize Giving, 2024It doesn’t matter where you start, it’s how you progress from there.Miami GP, 2024Monaco, 2023Britain, 20251Battersea"

- **`<div>`** .horizontal-grid-col.large-img
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 720.266px | opacity: 1
  - anim: all
  - text: "It doesn’t matter where you start, it’s how you progress from there.Miami GP, 2024"

- **`<div>`** .horizontal-grid-col
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 670.438px | opacity: 1
  - anim: all
  - text: "Barcelona, 2024Since I was 7 years old and had my first experience with kart racing, I’ve worked tirelessly to make that dream come true."

- **`<div>`** .horizontal-item-w.is-home3
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 720.266px | margin: 194.016px 0px 0px | opacity: 1
  - anim: all
  - text: "Miami GP, 2024"

- **`<div>`** .horizontal-item-w.is-home-8
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 670.438px | margin: 22px 0px 0px | opacity: 1
  - anim: all
  - text: "Barcelona, 2024"

- **`<div>`** .horizontal-grid-col.is-home-flip
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 349.25px | opacity: 1
  - anim: all
  - text: "Monaco, 2023Britain, 20251"

- **`<div>`** .horizontal-grid-col.neg-margin
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 348.578px | opacity: 1
  - anim: all
  - text: "austria, 2020US, 2024"

- **`<div>`** .horizontal-grid-spacer
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 346.609px | opacity: 1
  - anim: all

- **`<div>`** .horizontal-grid-spacer
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 346.609px | opacity: 1
  - anim: all

- **`<div>`** .horizontal-grid-spacer
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 346.609px | opacity: 1
  - anim: all

- **`<div>`** .horizontal-grid-col
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 322.297px | opacity: 1
  - anim: all
  - text: "Qatar, 2024FIA Prize Giving, 2024"

- **`<div>`** .horizontal-grid-col
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 235.172px | opacity: 1
  - anim: all
  - text: "Battersea, 2024"

- **`<div>`** .horizontal-grid-col
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 228.125px | opacity: 1
  - anim: all
  - text: "High Performance Gala, 2024"

- **`<div>`** .horizontal-grid-spacer.half
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 173.297px | opacity: 1
  - anim: all

- **`<div>`** .horizontal-grid-spacer.half
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 173.297px | opacity: 1
  - anim: all

- **`<div>`** .horizontal-item-w.is-5
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 349.25px | margin: 237.562px 0px 89.87px | opacity: 1
  - anim: all
  - text: "Britain, 20251"

- **`<div>`** .horizontal-item-w.is-home10
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 348.578px | margin: 164.12px 0px 0px | opacity: 1
  - anim: all
  - text: "austria, 2020"

- **`<div>`** .horizontal-item-w.is-home-1
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 297px | opacity: 1
  - anim: all
  - text: "Qatar, 2024"

- **`<div>`** .horizontal-item-w.is-home-2
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 322.297px | margin: 156.75px 0px 92.62px | opacity: 1
  - anim: all
  - text: "FIA Prize Giving, 2024"

- **`<div>`** .horizontal-item-w.is-home9
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 301.609px | margin: 128.375px 0px 33.3333px | opacity: 1
  - anim: all
  - text: "US, 2024"

- **`<div>`** .horizontal-item-w.is-home-6
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 235.172px | margin: 660.562px 0px 12.87px | opacity: 1
  - anim: all
  - text: "Battersea, 2024"

- **`<div>`** .horizontal-item-w.is-home-4
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 241.766px | opacity: 1
  - anim: all
  - text: "Monaco, 2023"

- **`<div>`** .horizontal-item-w.is-home-7
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 228.125px | margin: 88px 0px 648.562px | opacity: 1
  - anim: all
  - text: "High Performance Gala, 2024"

- **`<div>`** .horizontal-item-w.is-text-callout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 400px | margin: 144.844px 0px 29.37px | opacity: 1
  - anim: all
  - text: "Since I was 7 years old and had my first experience with kart racing, I’ve worked tirelessly to make that dream come true."

- **`<div>`** .horizontal-item-w.is-text-callout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 231.656px | margin: 18.37px 0px 0px | opacity: 1
  - anim: all
  - text: "It doesn’t matter where you start, it’s how you progress from there."

### HTML Structure

```html
<div class="horizontal-pin-wrap"><div class="horizontal-pin-spacer"><div class="horizontal-pin-sticky"><div class="horizontal-track"><div class="horizontal-grid-col"><div class="horizontal-item-w is-home-1"><div class="horizontal-item-layout is-home-1"><div class="eyebrow-w c-green-off-white-2"><div split-text="lines" class="text-eyebrow">Qatar, 2024</div></div><div class="horizontal-item-img-w is-home-1"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa04b14a1ca33c0b25_ln-home-horiz-1.webp" loading="eager" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa04b14a1ca33c0b25_ln-home-horiz-1-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa04b14a1ca33c0b25_ln-home-horiz-1.webp 649w" alt="Lando in casual clothes walking through paddock" class="image is-horizontal-scroll"></div></div></div><div class="horizontal-item-w is-home-2"><div class="horizontal-item-layout is-home-2"><div class="eyebrow-w c-green-off-white-2"><div split-text="lines" class="text-eyebrow">FIA Prize Giving, 2024</div></div><div class="horizontal-item-img-w is-home-2"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baab12220595c8223b3_ln-home-horiz-2.webp" loading="eager" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baab12220595c8223b3_ln-home-horiz-2-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baab12220595c8223b3_ln-home-horiz-2.webp 656w" alt="Lando lifting trophy in tux" class="image is-horizontal-scroll"></div></div></div></div><div class="horizontal-grid-spacer"></div><div class="horizontal-grid-col large-img is-home1"><div class="horizontal-item-w is-text-callout callout-1"><div class="horizontal-item-layout"><div class="horizontal-item-text-layout"><div split-text="lines" class="horizontal-item-text">It doesn’t matter <span class="span-green-off-white-1">where</span> you start, it’s <span class="span-green-off-white-1">how</span> you progress from there.</div><div class="horizontal-rive-placeholder"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67cecea4e9d311047dcb51e5_ln4-hw-signature2.svg" loading="eager" alt="Lando's signature in lime color" class="image"></div></div></div></div><div class="horizontal-item-w is-home3"><div class="horizontal-item-layout"><div class="eyebrow-w c-green-off-white-2"><div split-text="lines" class="text-eyebrow">Miami GP, 2024</div></div><div class="horizontal-item-img-w is-home3"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3.webp" loading="eager" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3-p-1080.webp 1080w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3.webp 1464w" alt="Lando lifting tophy" class="image is-horizontal-scroll"></div></div></div></div><div class="horizontal-grid-spacer"></div><div class="horizontal-grid-col is-home-flip neg-margin"><div class="horizontal-item-w is-home-4 neg-margin"><div class="horizontal-item-layout"><div class="eyebrow-w c-green-off-white-2"><div split-text="lines" class="text-eyebrow">Monaco, 2023</div></div><div class="horizontal-item-img-w is-home-5"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa798e2cc6e02ac38a_ln-home-horiz-4.webp" loading="eager" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa798e2cc6e02ac38a_ln-home-horiz-4-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa798e2cc6e02ac38a_ln-home-horiz-4.webp 529w" alt="Lando playing golf" class="image is-horizontal-scroll"></div></div></div><div class="horizontal-item-w is-5"><div class="horizontal-item-layout is-home-5"><div class="eyebrow-w c-green-off-white-2"><div split-text="lines" class="text-eyebrow">Britain, 2025</div></div><div class="horizontal-item-img-w is-home-4"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68da85d632bfefc552a0faac_Britain-25%20(1).webp" loading="eager" width="Auto" alt="Lando in f1 car" class="image is-horizontal-scroll"></div><div data-hide="m" class="horizontal-item-pill-w"><div class="horizontal-item-pill"><div class="horizontal-pill-box is-side"><div class="horizontal-pill-text">1</div></div><div class="horizontal-pill-box"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/680cbcfdbc4bdc0ef619369f_ln-icon-crossed-flags2.svg" loading="eager" alt="" class="horizontal-pill-icon"></div></div></div></div></div></div><div class="horizontal-grid-spacer half"></div><div class="horizontal-grid-col"><div class="horizontal-item-w is-home-6"><div class="horizontal-item-layout"><div class="eyebrow-w c-dark-green-tint-2"><div split-text="lines" class="text-eyebrow">Battersea, 2024</div></div><div class="horizontal-item-img-w is-home-6"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa14a96f3cdd2f9a95_ln-home-horiz-6.webp" loading="eager" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa14a96f3cdd2f9a95_ln-home-horiz-6-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa14a96f3cdd2f9a95_ln-home-horiz-6.webp 642w" alt="Lando holding dog smiling" class="image is-horizontal-scroll"></div></div></div></div><div class="horizontal-grid-col"><div class="horizontal-item-w is-home-7"><div class="horizontal-item-layout is-home-7"><div class="eyebrow-w c-dark-green-tint-2"><div split-text="lines" class="text-eyebrow">High Performance Gala, 2024</div></div><div class="horizontal-item-img-w is-home-7"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302bab3ee6e26b1f434a7d_ln-home-horiz-7.webp" loading="eager" alt="Lando in tux" class="image is-horizontal-scroll"></div></div></div></div><div class="horizontal-grid-spacer half"></div><div class="horizontal-grid-col"><div class="horizontal-item-w is-home-8 neg-margin"><div class="horizontal-item-layout"><div class="eyebrow-w c-dark-green-tint-2"><div split-text="lines" class="text-eyebrow">Barcelona, 2024</div></div><div class="horizontal-item-img-w is-home8"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baaedf821dd2e3a7c74_ln-home-horiz-8.webp" loading="eager" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baaedf821dd2e3a7c74_ln-home-horiz-8-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baaedf821dd2e3a7c74_ln-home-horiz-8-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baaedf821dd2e3a7c74_ln-home-horiz-8-p-1080.webp 1080w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baaedf821dd2e3a7c74_ln-home-horiz-8.webp 1461w" alt="Lando taking photo out of a plane" class="image is-horizontal-scroll"></div></div></div><div class="horizontal-item-w is-text-callout is-home-callout-2"><div class="horizontal-item-layout"><div class="horizontal-item-text-layout"><div split-text="lines" class="horizontal-item-text c-dark-green-tint-1">Since I was 7 years old and had my first experience with kart racing, I’ve worked tirelessly to make that dream come true.</div><div class="horizontal-rive-placeholder"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e7eeaf67d51519b546828d_ln4-signature-dark-green.webp" loading="eager" alt="" class="image"></div></div></div></div></div><div class="horizontal-grid-spacer"></div><div class="horizontal-grid-col neg-margin"><div class="horizontal-item-w is-home10"><div class="h
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 22: Hero
- **Confidence:** 20%
- **Tag:** div
- **Classes:** `horizontal-pin-spacer`
- **Size:** full viewport height
- **Media:** 13 image(s)
- **Sticky elements:** 1
- **Animations:**
  - `div`.horizontal-track: transition: all
  - `div`.horizontal-pin-sticky: transition: all
  - `div`.horizontal-grid-col: transition: all
  - `div`.horizontal-grid-col: transition: all
  - `div`.horizontal-item-w: transition: all
  - `div`.horizontal-item-layout: transition: all
  - `div`.horizontal-item-w: transition: all
  - `div`.horizontal-item-layout: transition: all
  - `div`.horizontal-grid-col: transition: all
  - `div`.horizontal-grid-col: transition: all
  - `div`.horizontal-grid-spacer: transition: all
  - `div`.horizontal-grid-spacer: transition: all
  - `div`.horizontal-grid-spacer: transition: all
  - `div`.horizontal-grid-col: transition: all
  - `div`.horizontal-grid-col: transition: all
  - `div`.horizontal-grid-col: transition: all
  - `div`.horizontal-grid-spacer: transition: all
  - `div`.horizontal-grid-spacer: transition: all
  - `div`.horizontal-item-w: transition: all
  - `div`.horizontal-item-layout: transition: all
  - `div`.horizontal-item-w: transition: all
  - `div`.horizontal-item-layout: transition: all
  - `div`.horizontal-item-w: transition: all
  - `div`.horizontal-item-layout: transition: all
  - `div`.horizontal-item-w: transition: all
  - `div`.horizontal-item-layout: transition: all
  - `div`.horizontal-item-w: transition: all
  - `div`.horizontal-item-layout: transition: all
  - `div`.horizontal-item-w: transition: all
  - `div`.horizontal-item-layout: transition: all

### Element Style Blueprint

- **`<div>`** .horizontal-track
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 5357.2px | padding: 77px 16.6667px 33.3333px 1080px | opacity: 1
  - anim: all
  - text: "Qatar, 2024FIA Prize Giving, 2024It doesn’t matter where you start, it’s how you progress from there.Miami GP, 2024Monaco, 2023Britain, 20251Battersea"

- **`<div>`** .horizontal-pin-sticky
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1440px | opacity: 1
  - anim: all
  - text: "Qatar, 2024FIA Prize Giving, 2024It doesn’t matter where you start, it’s how you progress from there.Miami GP, 2024Monaco, 2023Britain, 20251Battersea"

- **`<div>`** .horizontal-grid-col.large-img
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 720.266px | opacity: 1
  - anim: all
  - text: "It doesn’t matter where you start, it’s how you progress from there.Miami GP, 2024"

- **`<div>`** .horizontal-grid-col
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 670.438px | opacity: 1
  - anim: all
  - text: "Barcelona, 2024Since I was 7 years old and had my first experience with kart racing, I’ve worked tirelessly to make that dream come true."

- **`<div>`** .horizontal-item-w.is-home3
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 720.266px | margin: 194.016px 0px 0px | opacity: 1
  - anim: all
  - text: "Miami GP, 2024"

- **`<div>`** .horizontal-item-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 720.266px | opacity: 1
  - anim: all
  - text: "Miami GP, 2024"

- **`<div>`** .horizontal-item-w.is-home-8
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 670.438px | margin: 22px 0px 0px | opacity: 1
  - anim: all
  - text: "Barcelona, 2024"

- **`<div>`** .horizontal-item-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 670.438px | opacity: 1
  - anim: all
  - text: "Barcelona, 2024"

- **`<div>`** .horizontal-grid-col.is-home-flip
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 349.25px | opacity: 1
  - anim: all
  - text: "Monaco, 2023Britain, 20251"

- **`<div>`** .horizontal-grid-col.neg-margin
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 348.578px | opacity: 1
  - anim: all
  - text: "austria, 2020US, 2024"

- **`<div>`** .horizontal-grid-spacer
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 346.609px | opacity: 1
  - anim: all

- **`<div>`** .horizontal-grid-spacer
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 346.609px | opacity: 1
  - anim: all

- **`<div>`** .horizontal-grid-spacer
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 346.609px | opacity: 1
  - anim: all

- **`<div>`** .horizontal-grid-col
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 322.297px | opacity: 1
  - anim: all
  - text: "Qatar, 2024FIA Prize Giving, 2024"

- **`<div>`** .horizontal-grid-col
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 235.172px | opacity: 1
  - anim: all
  - text: "Battersea, 2024"

- **`<div>`** .horizontal-grid-col
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 228.125px | opacity: 1
  - anim: all
  - text: "High Performance Gala, 2024"

- **`<div>`** .horizontal-grid-spacer.half
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 173.297px | opacity: 1
  - anim: all

- **`<div>`** .horizontal-grid-spacer.half
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 173.297px | opacity: 1
  - anim: all

- **`<div>`** .horizontal-item-w.is-5
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 349.25px | margin: 237.562px 0px 89.87px | opacity: 1
  - anim: all
  - text: "Britain, 20251"

- **`<div>`** .horizontal-item-layout.is-home-5
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 349.25px | opacity: 1
  - anim: all
  - text: "Britain, 20251"

- **`<div>`** .horizontal-item-w.is-home10
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 348.578px | margin: 164.12px 0px 0px | opacity: 1
  - anim: all
  - text: "austria, 2020"

- **`<div>`** .horizontal-item-layout.is-home10
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 348.578px | opacity: 1
  - anim: all
  - text: "austria, 2020"

- **`<div>`** .horizontal-item-w.is-home-1
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 297px | opacity: 1
  - anim: all
  - text: "Qatar, 2024"

- **`<div>`** .horizontal-item-layout.is-home-1
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 297px | opacity: 1
  - anim: all
  - text: "Qatar, 2024"

- **`<div>`** .horizontal-item-w.is-home-2
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 322.297px | margin: 156.75px 0px 92.62px | opacity: 1
  - anim: all
  - text: "FIA Prize Giving, 2024"

- **`<div>`** .horizontal-item-layout.is-home-2
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 322.297px | opacity: 1
  - anim: all
  - text: "FIA Prize Giving, 2024"

- **`<div>`** .horizontal-item-w.is-home9
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 301.609px | margin: 128.375px 0px 33.3333px | opacity: 1
  - anim: all
  - text: "US, 2024"

- **`<div>`** .horizontal-item-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 301.609px | opacity: 1
  - anim: all
  - text: "US, 2024"

- **`<div>`** .horizontal-item-w.is-home-6
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 235.172px | margin: 660.562px 0px 12.87px | opacity: 1
  - anim: all
  - text: "Battersea, 2024"

- **`<div>`** .horizontal-item-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 235.172px | opacity: 1
  - anim: all
  - text: "Battersea, 2024"

### HTML Structure

```html
<div class="horizontal-pin-spacer"><div class="horizontal-pin-sticky"><div class="horizontal-track"><div class="horizontal-grid-col"><div class="horizontal-item-w is-home-1"><div class="horizontal-item-layout is-home-1"><div class="eyebrow-w c-green-off-white-2"><div split-text="lines" class="text-eyebrow">Qatar, 2024</div></div><div class="horizontal-item-img-w is-home-1"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa04b14a1ca33c0b25_ln-home-horiz-1.webp" loading="eager" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa04b14a1ca33c0b25_ln-home-horiz-1-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa04b14a1ca33c0b25_ln-home-horiz-1.webp 649w" alt="Lando in casual clothes walking through paddock" class="image is-horizontal-scroll"></div></div></div><div class="horizontal-item-w is-home-2"><div class="horizontal-item-layout is-home-2"><div class="eyebrow-w c-green-off-white-2"><div split-text="lines" class="text-eyebrow">FIA Prize Giving, 2024</div></div><div class="horizontal-item-img-w is-home-2"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baab12220595c8223b3_ln-home-horiz-2.webp" loading="eager" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baab12220595c8223b3_ln-home-horiz-2-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baab12220595c8223b3_ln-home-horiz-2.webp 656w" alt="Lando lifting trophy in tux" class="image is-horizontal-scroll"></div></div></div></div><div class="horizontal-grid-spacer"></div><div class="horizontal-grid-col large-img is-home1"><div class="horizontal-item-w is-text-callout callout-1"><div class="horizontal-item-layout"><div class="horizontal-item-text-layout"><div split-text="lines" class="horizontal-item-text">It doesn’t matter <span class="span-green-off-white-1">where</span> you start, it’s <span class="span-green-off-white-1">how</span> you progress from there.</div><div class="horizontal-rive-placeholder"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67cecea4e9d311047dcb51e5_ln4-hw-signature2.svg" loading="eager" alt="Lando's signature in lime color" class="image"></div></div></div></div><div class="horizontal-item-w is-home3"><div class="horizontal-item-layout"><div class="eyebrow-w c-green-off-white-2"><div split-text="lines" class="text-eyebrow">Miami GP, 2024</div></div><div class="horizontal-item-img-w is-home3"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3.webp" loading="eager" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3-p-1080.webp 1080w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3.webp 1464w" alt="Lando lifting tophy" class="image is-horizontal-scroll"></div></div></div></div><div class="horizontal-grid-spacer"></div><div class="horizontal-grid-col is-home-flip neg-margin"><div class="horizontal-item-w is-home-4 neg-margin"><div class="horizontal-item-layout"><div class="eyebrow-w c-green-off-white-2"><div split-text="lines" class="text-eyebrow">Monaco, 2023</div></div><div class="horizontal-item-img-w is-home-5"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa798e2cc6e02ac38a_ln-home-horiz-4.webp" loading="eager" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa798e2cc6e02ac38a_ln-home-horiz-4-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa798e2cc6e02ac38a_ln-home-horiz-4.webp 529w" alt="Lando playing golf" class="image is-horizontal-scroll"></div></div></div><div class="horizontal-item-w is-5"><div class="horizontal-item-layout is-home-5"><div class="eyebrow-w c-green-off-white-2"><div split-text="lines" class="text-eyebrow">Britain, 2025</div></div><div class="horizontal-item-img-w is-home-4"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68da85d632bfefc552a0faac_Britain-25%20(1).webp" loading="eager" width="Auto" alt="Lando in f1 car" class="image is-horizontal-scroll"></div><div data-hide="m" class="horizontal-item-pill-w"><div class="horizontal-item-pill"><div class="horizontal-pill-box is-side"><div class="horizontal-pill-text">1</div></div><div class="horizontal-pill-box"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/680cbcfdbc4bdc0ef619369f_ln-icon-crossed-flags2.svg" loading="eager" alt="" class="horizontal-pill-icon"></div></div></div></div></div></div><div class="horizontal-grid-spacer half"></div><div class="horizontal-grid-col"><div class="horizontal-item-w is-home-6"><div class="horizontal-item-layout"><div class="eyebrow-w c-dark-green-tint-2"><div split-text="lines" class="text-eyebrow">Battersea, 2024</div></div><div class="horizontal-item-img-w is-home-6"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa14a96f3cdd2f9a95_ln-home-horiz-6.webp" loading="eager" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa14a96f3cdd2f9a95_ln-home-horiz-6-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa14a96f3cdd2f9a95_ln-home-horiz-6.webp 642w" alt="Lando holding dog smiling" class="image is-horizontal-scroll"></div></div></div></div><div class="horizontal-grid-col"><div class="horizontal-item-w is-home-7"><div class="horizontal-item-layout is-home-7"><div class="eyebrow-w c-dark-green-tint-2"><div split-text="lines" class="text-eyebrow">High Performance Gala, 2024</div></div><div class="horizontal-item-img-w is-home-7"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302bab3ee6e26b1f434a7d_ln-home-horiz-7.webp" loading="eager" alt="Lando in tux" class="image is-horizontal-scroll"></div></div></div></div><div class="horizontal-grid-spacer half"></div><div class="horizontal-grid-col"><div class="horizontal-item-w is-home-8 neg-margin"><div class="horizontal-item-layout"><div class="eyebrow-w c-dark-green-tint-2"><div split-text="lines" class="text-eyebrow">Barcelona, 2024</div></div><div class="horizontal-item-img-w is-home8"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baaedf821dd2e3a7c74_ln-home-horiz-8.webp" loading="eager" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baaedf821dd2e3a7c74_ln-home-horiz-8-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baaedf821dd2e3a7c74_ln-home-horiz-8-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baaedf821dd2e3a7c74_ln-home-horiz-8-p-1080.webp 1080w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baaedf821dd2e3a7c74_ln-home-horiz-8.webp 1461w" alt="Lando taking photo out of a plane" class="image is-horizontal-scroll"></div></div></div><div class="horizontal-item-w is-text-callout is-home-callout-2"><div class="horizontal-item-layout"><div class="horizontal-item-text-layout"><div split-text="lines" class="horizontal-item-text c-dark-green-tint-1">Since I was 7 years old and had my first experience with kart racing, I’ve worked tirelessly to make that dream come true.</div><div class="horizontal-rive-placeholder"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e7eeaf67d51519b546828d_ln4-signature-dark-green.webp" loading="eager" alt="" class="image"></div></div></div></div></div><div class="horizontal-grid-spacer"></div><div class="horizontal-grid-col neg-margin"><div class="horizontal-item-w is-home10"><div class="horizontal-item-layout is-home10">
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 23: Hero
- **Confidence:** 20%
- **Tag:** div
- **Classes:** `horizontal-pin-sticky`
- **Size:** full viewport height
- **Media:** 13 image(s)
- **Flex:** direction: row, wrap: nowrap, gap: normal
- **Align items:** normal
- **Justify:** normal
- **Animations:**
  - `div`.horizontal-track: transition: all
  - `div`.horizontal-grid-col: transition: all
  - `div`.horizontal-grid-col: transition: all
  - `div`.horizontal-item-w: transition: all
  - `div`.horizontal-item-layout: transition: all
  - `div`.horizontal-item-img-w: transition: all
  - `div`.horizontal-item-w: transition: all
  - `div`.horizontal-item-layout: transition: all
  - `div`.horizontal-item-img-w: transition: all
  - `div`.horizontal-grid-col: transition: all
  - `div`.horizontal-grid-col: transition: all
  - `div`.horizontal-grid-spacer: transition: all
  - `div`.horizontal-grid-spacer: transition: all
  - `div`.horizontal-grid-spacer: transition: all
  - `div`.horizontal-grid-col: transition: all
  - `div`.horizontal-grid-col: transition: all
  - `div`.horizontal-grid-col: transition: all
  - `div`.horizontal-grid-spacer: transition: all
  - `div`.horizontal-grid-spacer: transition: all
  - `div`.horizontal-item-w: transition: all
  - `div`.horizontal-item-layout: transition: all
  - `div`.horizontal-item-w: transition: all
  - `div`.horizontal-item-layout: transition: all
  - `div`.horizontal-item-img-w: transition: all
  - `div`.horizontal-item-w: transition: all
  - `div`.horizontal-item-layout: transition: all
  - `div`.horizontal-item-w: transition: all
  - `div`.horizontal-item-layout: transition: all
  - `div`.horizontal-item-img-w: transition: all
  - `div`.horizontal-item-img-w: transition: all

### Element Style Blueprint

- **`<div>`** .horizontal-track
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 5357.2px | padding: 77px 16.6667px 33.3333px 1080px | opacity: 1
  - anim: all
  - text: "Qatar, 2024FIA Prize Giving, 2024It doesn’t matter where you start, it’s how you progress from there.Miami GP, 2024Monaco, 2023Britain, 20251Battersea"

- **`<div>`** .horizontal-grid-col.large-img
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 720.266px | opacity: 1
  - anim: all
  - text: "It doesn’t matter where you start, it’s how you progress from there.Miami GP, 2024"

- **`<div>`** .horizontal-grid-col
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 670.438px | opacity: 1
  - anim: all
  - text: "Barcelona, 2024Since I was 7 years old and had my first experience with kart racing, I’ve worked tirelessly to make that dream come true."

- **`<div>`** .horizontal-item-w.is-home3
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 720.266px | margin: 194.016px 0px 0px | opacity: 1
  - anim: all
  - text: "Miami GP, 2024"

- **`<div>`** .horizontal-item-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 720.266px | opacity: 1
  - anim: all
  - text: "Miami GP, 2024"

- **`<div>`** .horizontal-item-img-w.is-home3
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 720.266px | opacity: 1
  - anim: all

- **`<div>`** .horizontal-item-w.is-home-8
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 670.438px | margin: 22px 0px 0px | opacity: 1
  - anim: all
  - text: "Barcelona, 2024"

- **`<div>`** .horizontal-item-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 670.438px | opacity: 1
  - anim: all
  - text: "Barcelona, 2024"

- **`<div>`** .horizontal-item-img-w.is-home8
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 670.438px | opacity: 1
  - anim: all

- **`<div>`** .horizontal-grid-col.is-home-flip
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 349.25px | opacity: 1
  - anim: all
  - text: "Monaco, 2023Britain, 20251"

- **`<div>`** .horizontal-grid-col.neg-margin
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 348.578px | opacity: 1
  - anim: all
  - text: "austria, 2020US, 2024"

- **`<div>`** .horizontal-grid-spacer
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 346.609px | opacity: 1
  - anim: all

- **`<div>`** .horizontal-grid-spacer
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 346.609px | opacity: 1
  - anim: all

- **`<div>`** .horizontal-grid-spacer
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 346.609px | opacity: 1
  - anim: all

- **`<div>`** .horizontal-grid-col
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 322.297px | opacity: 1
  - anim: all
  - text: "Qatar, 2024FIA Prize Giving, 2024"

- **`<div>`** .horizontal-grid-col
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 235.172px | opacity: 1
  - anim: all
  - text: "Battersea, 2024"

- **`<div>`** .horizontal-grid-col
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 228.125px | opacity: 1
  - anim: all
  - text: "High Performance Gala, 2024"

- **`<div>`** .horizontal-grid-spacer.half
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 173.297px | opacity: 1
  - anim: all

- **`<div>`** .horizontal-grid-spacer.half
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 173.297px | opacity: 1
  - anim: all

- **`<div>`** .horizontal-item-w.is-5
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 349.25px | margin: 237.562px 0px 89.87px | opacity: 1
  - anim: all
  - text: "Britain, 20251"

- **`<div>`** .horizontal-item-layout.is-home-5
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 349.25px | opacity: 1
  - anim: all
  - text: "Britain, 20251"

- **`<div>`** .horizontal-item-w.is-home10
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 348.578px | margin: 164.12px 0px 0px | opacity: 1
  - anim: all
  - text: "austria, 2020"

- **`<div>`** .horizontal-item-layout.is-home10
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 348.578px | opacity: 1
  - anim: all
  - text: "austria, 2020"

- **`<div>`** .horizontal-item-img-w.is-home10
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 348.578px | opacity: 1
  - anim: all

- **`<div>`** .horizontal-item-w.is-home-1
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 297px | opacity: 1
  - anim: all
  - text: "Qatar, 2024"

- **`<div>`** .horizontal-item-layout.is-home-1
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 297px | opacity: 1
  - anim: all
  - text: "Qatar, 2024"

- **`<div>`** .horizontal-item-w.is-home-2
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 322.297px | margin: 156.75px 0px 92.62px | opacity: 1
  - anim: all
  - text: "FIA Prize Giving, 2024"

- **`<div>`** .horizontal-item-layout.is-home-2
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 322.297px | opacity: 1
  - anim: all
  - text: "FIA Prize Giving, 2024"

- **`<div>`** .horizontal-item-img-w.is-home-4
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 349.25px | opacity: 1
  - anim: all

- **`<div>`** .horizontal-item-img-w.is-home-1
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 297px | opacity: 1
  - anim: all

### HTML Structure

```html
<div class="horizontal-pin-sticky"><div class="horizontal-track"><div class="horizontal-grid-col"><div class="horizontal-item-w is-home-1"><div class="horizontal-item-layout is-home-1"><div class="eyebrow-w c-green-off-white-2"><div split-text="lines" class="text-eyebrow">Qatar, 2024</div></div><div class="horizontal-item-img-w is-home-1"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa04b14a1ca33c0b25_ln-home-horiz-1.webp" loading="eager" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa04b14a1ca33c0b25_ln-home-horiz-1-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa04b14a1ca33c0b25_ln-home-horiz-1.webp 649w" alt="Lando in casual clothes walking through paddock" class="image is-horizontal-scroll"></div></div></div><div class="horizontal-item-w is-home-2"><div class="horizontal-item-layout is-home-2"><div class="eyebrow-w c-green-off-white-2"><div split-text="lines" class="text-eyebrow">FIA Prize Giving, 2024</div></div><div class="horizontal-item-img-w is-home-2"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baab12220595c8223b3_ln-home-horiz-2.webp" loading="eager" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baab12220595c8223b3_ln-home-horiz-2-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baab12220595c8223b3_ln-home-horiz-2.webp 656w" alt="Lando lifting trophy in tux" class="image is-horizontal-scroll"></div></div></div></div><div class="horizontal-grid-spacer"></div><div class="horizontal-grid-col large-img is-home1"><div class="horizontal-item-w is-text-callout callout-1"><div class="horizontal-item-layout"><div class="horizontal-item-text-layout"><div split-text="lines" class="horizontal-item-text">It doesn’t matter <span class="span-green-off-white-1">where</span> you start, it’s <span class="span-green-off-white-1">how</span> you progress from there.</div><div class="horizontal-rive-placeholder"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67cecea4e9d311047dcb51e5_ln4-hw-signature2.svg" loading="eager" alt="Lando's signature in lime color" class="image"></div></div></div></div><div class="horizontal-item-w is-home3"><div class="horizontal-item-layout"><div class="eyebrow-w c-green-off-white-2"><div split-text="lines" class="text-eyebrow">Miami GP, 2024</div></div><div class="horizontal-item-img-w is-home3"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3.webp" loading="eager" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3-p-1080.webp 1080w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3.webp 1464w" alt="Lando lifting tophy" class="image is-horizontal-scroll"></div></div></div></div><div class="horizontal-grid-spacer"></div><div class="horizontal-grid-col is-home-flip neg-margin"><div class="horizontal-item-w is-home-4 neg-margin"><div class="horizontal-item-layout"><div class="eyebrow-w c-green-off-white-2"><div split-text="lines" class="text-eyebrow">Monaco, 2023</div></div><div class="horizontal-item-img-w is-home-5"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa798e2cc6e02ac38a_ln-home-horiz-4.webp" loading="eager" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa798e2cc6e02ac38a_ln-home-horiz-4-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa798e2cc6e02ac38a_ln-home-horiz-4.webp 529w" alt="Lando playing golf" class="image is-horizontal-scroll"></div></div></div><div class="horizontal-item-w is-5"><div class="horizontal-item-layout is-home-5"><div class="eyebrow-w c-green-off-white-2"><div split-text="lines" class="text-eyebrow">Britain, 2025</div></div><div class="horizontal-item-img-w is-home-4"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68da85d632bfefc552a0faac_Britain-25%20(1).webp" loading="eager" width="Auto" alt="Lando in f1 car" class="image is-horizontal-scroll"></div><div data-hide="m" class="horizontal-item-pill-w"><div class="horizontal-item-pill"><div class="horizontal-pill-box is-side"><div class="horizontal-pill-text">1</div></div><div class="horizontal-pill-box"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/680cbcfdbc4bdc0ef619369f_ln-icon-crossed-flags2.svg" loading="eager" alt="" class="horizontal-pill-icon"></div></div></div></div></div></div><div class="horizontal-grid-spacer half"></div><div class="horizontal-grid-col"><div class="horizontal-item-w is-home-6"><div class="horizontal-item-layout"><div class="eyebrow-w c-dark-green-tint-2"><div split-text="lines" class="text-eyebrow">Battersea, 2024</div></div><div class="horizontal-item-img-w is-home-6"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa14a96f3cdd2f9a95_ln-home-horiz-6.webp" loading="eager" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa14a96f3cdd2f9a95_ln-home-horiz-6-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa14a96f3cdd2f9a95_ln-home-horiz-6.webp 642w" alt="Lando holding dog smiling" class="image is-horizontal-scroll"></div></div></div></div><div class="horizontal-grid-col"><div class="horizontal-item-w is-home-7"><div class="horizontal-item-layout is-home-7"><div class="eyebrow-w c-dark-green-tint-2"><div split-text="lines" class="text-eyebrow">High Performance Gala, 2024</div></div><div class="horizontal-item-img-w is-home-7"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302bab3ee6e26b1f434a7d_ln-home-horiz-7.webp" loading="eager" alt="Lando in tux" class="image is-horizontal-scroll"></div></div></div></div><div class="horizontal-grid-spacer half"></div><div class="horizontal-grid-col"><div class="horizontal-item-w is-home-8 neg-margin"><div class="horizontal-item-layout"><div class="eyebrow-w c-dark-green-tint-2"><div split-text="lines" class="text-eyebrow">Barcelona, 2024</div></div><div class="horizontal-item-img-w is-home8"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baaedf821dd2e3a7c74_ln-home-horiz-8.webp" loading="eager" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baaedf821dd2e3a7c74_ln-home-horiz-8-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baaedf821dd2e3a7c74_ln-home-horiz-8-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baaedf821dd2e3a7c74_ln-home-horiz-8-p-1080.webp 1080w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baaedf821dd2e3a7c74_ln-home-horiz-8.webp 1461w" alt="Lando taking photo out of a plane" class="image is-horizontal-scroll"></div></div></div><div class="horizontal-item-w is-text-callout is-home-callout-2"><div class="horizontal-item-layout"><div class="horizontal-item-text-layout"><div split-text="lines" class="horizontal-item-text c-dark-green-tint-1">Since I was 7 years old and had my first experience with kart racing, I’ve worked tirelessly to make that dream come true.</div><div class="horizontal-rive-placeholder"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e7eeaf67d51519b546828d_ln4-signature-dark-green.webp" loading="eager" alt="" class="image"></div></div></div></div></div><div class="horizontal-grid-spacer"></div><div class="horizontal-grid-col neg-margin"><div class="horizontal-item-w is-home10"><div class="horizontal-item-layout is-home10"><div class="eyebrow-w c-dark-green-
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 24: Hero
- **Confidence:** 20%
- **Tag:** div
- **Classes:** `horizontal-track`
- **Size:** full viewport height
- **Padding:** 77px 16.6667px 33.3333px 1080px
- **Media:** 13 image(s)
- **Flex:** direction: row, wrap: nowrap, gap: normal
- **Align items:** normal
- **Justify:** normal
- **Animations:**
  - `div`.horizontal-grid-col: transition: all
  - `div`.horizontal-grid-col: transition: all
  - `img`.image: transition: all
  - `img`.image: transition: all
  - `div`.horizontal-item-w: transition: all
  - `div`.horizontal-item-layout: transition: all
  - `div`.horizontal-item-img-w: transition: all
  - `div`.horizontal-item-w: transition: all
  - `div`.horizontal-item-layout: transition: all
  - `div`.horizontal-item-img-w: transition: all
  - `div`.horizontal-grid-col: transition: all
  - `div`.horizontal-grid-col: transition: all
  - `div`.horizontal-grid-spacer: transition: all
  - `div`.horizontal-grid-spacer: transition: all
  - `div`.horizontal-grid-spacer: transition: all
  - `div`.horizontal-grid-col: transition: all
  - `div`.horizontal-grid-col: transition: all
  - `div`.horizontal-grid-col: transition: all
  - `div`.horizontal-grid-spacer: transition: all
  - `div`.horizontal-grid-spacer: transition: all
  - `img`.image: transition: all
  - `img`.image: transition: all
  - `img`.image: transition: all
  - `div`.horizontal-item-w: transition: all
  - `div`.horizontal-item-layout: transition: all
  - `img`.image: transition: all
  - `div`.horizontal-item-w: transition: all
  - `div`.horizontal-item-layout: transition: all
  - `div`.horizontal-item-img-w: transition: all
  - `div`.horizontal-item-w: transition: all

### Element Style Blueprint

- **`<div>`** .horizontal-grid-col.large-img
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 720.266px | opacity: 1
  - anim: all
  - text: "It doesn’t matter where you start, it’s how you progress from there.Miami GP, 2024"

- **`<div>`** .horizontal-grid-col
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 670.438px | opacity: 1
  - anim: all
  - text: "Barcelona, 2024Since I was 7 years old and had my first experience with kart racing, I’ve worked tirelessly to make that dream come true."

- **`<img>`** .image.is-horizontal-scroll
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 773.594px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3.webp

- **`<img>`** .image.is-horizontal-scroll
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 723.766px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baaedf821dd2e3a7c74_ln-home-horiz-8.webp

- **`<div>`** .horizontal-item-w.is-home3
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 720.266px | margin: 194.016px 0px 0px | opacity: 1
  - anim: all
  - text: "Miami GP, 2024"

- **`<div>`** .horizontal-item-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 720.266px | opacity: 1
  - anim: all
  - text: "Miami GP, 2024"

- **`<div>`** .horizontal-item-img-w.is-home3
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 720.266px | opacity: 1
  - anim: all

- **`<div>`** .horizontal-item-w.is-home-8
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 670.438px | margin: 22px 0px 0px | opacity: 1
  - anim: all
  - text: "Barcelona, 2024"

- **`<div>`** .horizontal-item-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 670.438px | opacity: 1
  - anim: all
  - text: "Barcelona, 2024"

- **`<div>`** .horizontal-item-img-w.is-home8
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 670.438px | opacity: 1
  - anim: all

- **`<div>`** .horizontal-grid-col.is-home-flip
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 349.25px | opacity: 1
  - anim: all
  - text: "Monaco, 2023Britain, 20251"

- **`<div>`** .horizontal-grid-col.neg-margin
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 348.578px | opacity: 1
  - anim: all
  - text: "austria, 2020US, 2024"

- **`<div>`** .horizontal-grid-spacer
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 346.609px | opacity: 1
  - anim: all

- **`<div>`** .horizontal-grid-spacer
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 346.609px | opacity: 1
  - anim: all

- **`<div>`** .horizontal-grid-spacer
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 346.609px | opacity: 1
  - anim: all

- **`<div>`** .horizontal-grid-col
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 322.297px | opacity: 1
  - anim: all
  - text: "Qatar, 2024FIA Prize Giving, 2024"

- **`<div>`** .horizontal-grid-col
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 235.172px | opacity: 1
  - anim: all
  - text: "Battersea, 2024"

- **`<div>`** .horizontal-grid-col
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 228.125px | opacity: 1
  - anim: all
  - text: "High Performance Gala, 2024"

- **`<div>`** .horizontal-grid-spacer.half
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 173.297px | opacity: 1
  - anim: all

- **`<div>`** .horizontal-grid-spacer.half
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 173.297px | opacity: 1
  - anim: all

- **`<img>`** .image.is-horizontal-scroll
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 401.906px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babb87c5f19ec131093_ln-home-horiz-9.webp

- **`<img>`** .image.is-horizontal-scroll
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 402.578px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68da85d632bfefc552a0faac_Britain-25%20(1).webp

- **`<img>`** .image.is-horizontal-scroll
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 350.328px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa04b14a1ca33c0b25_ln-home-horiz-1.webp

- **`<div>`** .horizontal-item-w.is-5
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 349.25px | margin: 237.562px 0px 89.87px | opacity: 1
  - anim: all
  - text: "Britain, 20251"

- **`<div>`** .horizontal-item-layout.is-home-5
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 349.25px | opacity: 1
  - anim: all
  - text: "Britain, 20251"

- **`<img>`** .image.is-horizontal-scroll
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 375.625px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baab12220595c8223b3_ln-home-horiz-2.webp

- **`<div>`** .horizontal-item-w.is-home10
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 348.578px | margin: 164.12px 0px 0px | opacity: 1
  - anim: all
  - text: "austria, 2020"

- **`<div>`** .horizontal-item-layout.is-home10
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 348.578px | opacity: 1
  - anim: all
  - text: "austria, 2020"

- **`<div>`** .horizontal-item-img-w.is-home10
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 348.578px | opacity: 1
  - anim: all

- **`<div>`** .horizontal-item-w.is-home-1
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 297px | opacity: 1
  - anim: all
  - text: "Qatar, 2024"

### HTML Structure

```html
<div class="horizontal-track"><div class="horizontal-grid-col"><div class="horizontal-item-w is-home-1"><div class="horizontal-item-layout is-home-1"><div class="eyebrow-w c-green-off-white-2"><div split-text="lines" class="text-eyebrow">Qatar, 2024</div></div><div class="horizontal-item-img-w is-home-1"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa04b14a1ca33c0b25_ln-home-horiz-1.webp" loading="eager" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa04b14a1ca33c0b25_ln-home-horiz-1-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa04b14a1ca33c0b25_ln-home-horiz-1.webp 649w" alt="Lando in casual clothes walking through paddock" class="image is-horizontal-scroll"></div></div></div><div class="horizontal-item-w is-home-2"><div class="horizontal-item-layout is-home-2"><div class="eyebrow-w c-green-off-white-2"><div split-text="lines" class="text-eyebrow">FIA Prize Giving, 2024</div></div><div class="horizontal-item-img-w is-home-2"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baab12220595c8223b3_ln-home-horiz-2.webp" loading="eager" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baab12220595c8223b3_ln-home-horiz-2-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baab12220595c8223b3_ln-home-horiz-2.webp 656w" alt="Lando lifting trophy in tux" class="image is-horizontal-scroll"></div></div></div></div><div class="horizontal-grid-spacer"></div><div class="horizontal-grid-col large-img is-home1"><div class="horizontal-item-w is-text-callout callout-1"><div class="horizontal-item-layout"><div class="horizontal-item-text-layout"><div split-text="lines" class="horizontal-item-text">It doesn’t matter <span class="span-green-off-white-1">where</span> you start, it’s <span class="span-green-off-white-1">how</span> you progress from there.</div><div class="horizontal-rive-placeholder"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67cecea4e9d311047dcb51e5_ln4-hw-signature2.svg" loading="eager" alt="Lando's signature in lime color" class="image"></div></div></div></div><div class="horizontal-item-w is-home3"><div class="horizontal-item-layout"><div class="eyebrow-w c-green-off-white-2"><div split-text="lines" class="text-eyebrow">Miami GP, 2024</div></div><div class="horizontal-item-img-w is-home3"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3.webp" loading="eager" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3-p-1080.webp 1080w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3.webp 1464w" alt="Lando lifting tophy" class="image is-horizontal-scroll"></div></div></div></div><div class="horizontal-grid-spacer"></div><div class="horizontal-grid-col is-home-flip neg-margin"><div class="horizontal-item-w is-home-4 neg-margin"><div class="horizontal-item-layout"><div class="eyebrow-w c-green-off-white-2"><div split-text="lines" class="text-eyebrow">Monaco, 2023</div></div><div class="horizontal-item-img-w is-home-5"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa798e2cc6e02ac38a_ln-home-horiz-4.webp" loading="eager" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa798e2cc6e02ac38a_ln-home-horiz-4-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa798e2cc6e02ac38a_ln-home-horiz-4.webp 529w" alt="Lando playing golf" class="image is-horizontal-scroll"></div></div></div><div class="horizontal-item-w is-5"><div class="horizontal-item-layout is-home-5"><div class="eyebrow-w c-green-off-white-2"><div split-text="lines" class="text-eyebrow">Britain, 2025</div></div><div class="horizontal-item-img-w is-home-4"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68da85d632bfefc552a0faac_Britain-25%20(1).webp" loading="eager" width="Auto" alt="Lando in f1 car" class="image is-horizontal-scroll"></div><div data-hide="m" class="horizontal-item-pill-w"><div class="horizontal-item-pill"><div class="horizontal-pill-box is-side"><div class="horizontal-pill-text">1</div></div><div class="horizontal-pill-box"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/680cbcfdbc4bdc0ef619369f_ln-icon-crossed-flags2.svg" loading="eager" alt="" class="horizontal-pill-icon"></div></div></div></div></div></div><div class="horizontal-grid-spacer half"></div><div class="horizontal-grid-col"><div class="horizontal-item-w is-home-6"><div class="horizontal-item-layout"><div class="eyebrow-w c-dark-green-tint-2"><div split-text="lines" class="text-eyebrow">Battersea, 2024</div></div><div class="horizontal-item-img-w is-home-6"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa14a96f3cdd2f9a95_ln-home-horiz-6.webp" loading="eager" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa14a96f3cdd2f9a95_ln-home-horiz-6-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa14a96f3cdd2f9a95_ln-home-horiz-6.webp 642w" alt="Lando holding dog smiling" class="image is-horizontal-scroll"></div></div></div></div><div class="horizontal-grid-col"><div class="horizontal-item-w is-home-7"><div class="horizontal-item-layout is-home-7"><div class="eyebrow-w c-dark-green-tint-2"><div split-text="lines" class="text-eyebrow">High Performance Gala, 2024</div></div><div class="horizontal-item-img-w is-home-7"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302bab3ee6e26b1f434a7d_ln-home-horiz-7.webp" loading="eager" alt="Lando in tux" class="image is-horizontal-scroll"></div></div></div></div><div class="horizontal-grid-spacer half"></div><div class="horizontal-grid-col"><div class="horizontal-item-w is-home-8 neg-margin"><div class="horizontal-item-layout"><div class="eyebrow-w c-dark-green-tint-2"><div split-text="lines" class="text-eyebrow">Barcelona, 2024</div></div><div class="horizontal-item-img-w is-home8"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baaedf821dd2e3a7c74_ln-home-horiz-8.webp" loading="eager" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baaedf821dd2e3a7c74_ln-home-horiz-8-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baaedf821dd2e3a7c74_ln-home-horiz-8-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baaedf821dd2e3a7c74_ln-home-horiz-8-p-1080.webp 1080w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baaedf821dd2e3a7c74_ln-home-horiz-8.webp 1461w" alt="Lando taking photo out of a plane" class="image is-horizontal-scroll"></div></div></div><div class="horizontal-item-w is-text-callout is-home-callout-2"><div class="horizontal-item-layout"><div class="horizontal-item-text-layout"><div split-text="lines" class="horizontal-item-text c-dark-green-tint-1">Since I was 7 years old and had my first experience with kart racing, I’ve worked tirelessly to make that dream come true.</div><div class="horizontal-rive-placeholder"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e7eeaf67d51519b546828d_ln4-signature-dark-green.webp" loading="eager" alt="" class="image"></div></div></div></div></div><div class="horizontal-grid-spacer"></div><div class="horizontal-grid-col neg-margin"><div class="horizontal-item-w is-home10"><div class="horizontal-item-layout is-home10"><div class="eyebrow-w c-dark-green-tint-2"><div split-text="lines" cla
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 25: Process
- **Confidence:** 20%
- **Tag:** div
- **Classes:** `horizontal-grid-col large-img is-home1`
- **Size:** full viewport height
- **Media:** 2 image(s)
- **Flex:** direction: column, wrap: nowrap, gap: normal
- **Align items:** flex-start
- **Justify:** flex-start
- **Animations:**
  - `img`.image: transition: all
  - `div`.horizontal-item-w: transition: all
  - `div`.horizontal-item-layout: transition: all
  - `div`.horizontal-item-img-w: transition: all
  - `div`.horizontal-item-w: transition: all
  - `div`.horizontal-item-layout: transition: all
  - `div`.horizontal-item-text-layout: transition: all
  - `div`.horizontal-item-text: transition: all
  - `div`.eyebrow-w: transition: all
  - `span`.span-green-off-white-1: transition: all
  - `div`.horizontal-rive-placeholder: transition: all
  - `img`.image: transition: all
  - `span`.span-green-off-white-1: transition: all
  - `div`.text-eyebrow: transition: all

### Element Style Blueprint

- **`<img>`** .image.is-horizontal-scroll
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 773.594px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3.webp

- **`<div>`** .horizontal-item-w.is-home3
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 720.266px | margin: 194.016px 0px 0px | opacity: 1
  - anim: all
  - text: "Miami GP, 2024"

- **`<div>`** .horizontal-item-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 720.266px | opacity: 1
  - anim: all
  - text: "Miami GP, 2024"

- **`<div>`** .horizontal-item-img-w.is-home3
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 720.266px | opacity: 1
  - anim: all

- **`<div>`** .horizontal-item-w.is-text-callout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 231.656px | margin: 18.37px 0px 0px | opacity: 1
  - anim: all
  - text: "It doesn’t matter where you start, it’s how you progress from there."

- **`<div>`** .horizontal-item-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 231.656px | opacity: 1
  - anim: all
  - text: "It doesn’t matter where you start, it’s how you progress from there."

- **`<div>`** .horizontal-item-text-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 231.656px | opacity: 1
  - anim: all
  - text: "It doesn’t matter where you start, it’s how you progress from there."

- **`<div>`** .horizontal-item-text
  - font: 20px 400 Brier, Arial, sans-serif | color: rgb(180, 184, 165) | lh: 18.8px | ls: 0.666667px | text-align: start | border: 0px none rgb(180, 184, 165) | display: block | width: 231.656px | opacity: 1
  - anim: all
  - text: "It doesn’t matter where you start, it’s how you progress from there."

- **`<div>`** .eyebrow-w.c-green-off-white-2
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(180, 184, 165) | lh: 20px | text-align: start | border: 0px none rgb(180, 184, 165) | display: flex | width: 720.266px | opacity: 1
  - anim: all
  - text: "Miami GP, 2024"

- **`<span>`** .span-green-off-white-1
  - font: 20px 400 Brier, Arial, sans-serif | color: rgb(221, 225, 210) | lh: 18.8px | ls: 0.666667px | text-align: start | border: 0px none rgb(221, 225, 210) | display: inline | opacity: 1
  - anim: all
  - text: "where"

- **`<div>`** .horizontal-rive-placeholder
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 55px | opacity: 1
  - anim: all

- **`<img>`** .image
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: inline-block | width: 55px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67cecea4e9d311047dcb51e5_ln4-hw-signature2.svg

- **`<span>`** .span-green-off-white-1
  - font: 20px 400 Brier, Arial, sans-serif | color: rgb(221, 225, 210) | lh: 18.8px | ls: 0.666667px | text-align: start | border: 0px none rgb(221, 225, 210) | display: inline | opacity: 1
  - anim: all
  - text: "how"

- **`<div>`** .text-eyebrow
  - font: 8.33333px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(180, 184, 165) | lh: 8.33333px | text-transform: uppercase | text-align: start | border: 0px none rgb(180, 184, 165) | display: block | width: 63.2344px | opacity: 1
  - anim: all
  - text: "Miami GP, 2024"

### HTML Structure

```html
<div class="horizontal-grid-col large-img is-home1"><div class="horizontal-item-w is-text-callout callout-1"><div class="horizontal-item-layout"><div class="horizontal-item-text-layout"><div split-text="lines" class="horizontal-item-text">It doesn’t matter <span class="span-green-off-white-1">where</span> you start, it’s <span class="span-green-off-white-1">how</span> you progress from there.</div><div class="horizontal-rive-placeholder"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67cecea4e9d311047dcb51e5_ln4-hw-signature2.svg" loading="eager" alt="Lando's signature in lime color" class="image"></div></div></div></div><div class="horizontal-item-w is-home3"><div class="horizontal-item-layout"><div class="eyebrow-w c-green-off-white-2"><div split-text="lines" class="text-eyebrow">Miami GP, 2024</div></div><div class="horizontal-item-img-w is-home3"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3.webp" loading="eager" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3-p-1080.webp 1080w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3.webp 1464w" alt="Lando lifting tophy" class="image is-horizontal-scroll"></div></div></div></div>
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 26: Proof
- **Confidence:** 20%
- **Tag:** div
- **Classes:** `sticky-track is-home-otot`
- **Size:** full viewport height
- **Headings:** H2: "ON"; H2: "TRACK"; H2: "OFF"; H2: "TRACK"
- **Media:** 3 image(s), 3 canvas(es)
- **Sticky elements:** 1
- **Animations:**
  - `img`.image: transition: all
  - `div`.sticky-item: transition: all
  - `div`.otot-home-end-img-w: transition: all
  - `div`.c: transition: all
  - `div`.otot-home-bg: transition: all
  - `div`.otot-home-inner: transition: all
  - `div`.otot-home-img-w: transition: all
  - `div`.otot-home-img-w: transition: all
  - `div`.otot-home-layout: transition: all

### Element Style Blueprint

- **`<img>`** .image.is-otot-home-end
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302ff5ff89a9a4afb8c19e_ln-home-helm-large.webp

- **`<div>`** .sticky-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all
  - text: "ONTRACK Most recent results, career stats and photos from trackside. OFFTRACKCampaigns, shoots and other such promotional materials for fans"

- **`<div>`** .otot-home-end-img-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1440px | opacity: 1
  - anim: all

- **`<div>`** .c.is-otot-home
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1440px | padding: 0px 16.6667px | opacity: 1
  - anim: all
  - text: "ONTRACK Most recent results, career stats and photos from trackside. OFFTRACKCampaigns, shoots and other such promotional materials for fans"

- **`<div>`** .otot-home-bg
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1440px | opacity: 1
  - anim: all

- **`<div>`** .otot-home-inner
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 1406.69px | opacity: 1
  - anim: all
  - text: "ONTRACK Most recent results, career stats and photos from trackside. OFFTRACKCampaigns, shoots and other such promotional materials for fans"

- **`<div>`** .otot-home-img-w.is-2
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 451.422px | opacity: 1
  - anim: all

- **`<div>`** .otot-home-img-w.is-1
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 419.25px | opacity: 1
  - anim: all

- **`<div>`** .otot-home-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 617px | opacity: 1
  - anim: all
  - text: "ONTRACK Most recent results, career stats and photos from trackside. OFFTRACKCampaigns, shoots and other such promotional materials for fans"

### HTML Structure

```html
<div data-otot-section="" class="sticky-track is-home-otot"><div class="sticky-item"><section data-otot-top="" data-designmode-white="" class="s is-otot-home"><div class="c is-otot-home"><div class="otot-home-inner"><div class="otot-home-layout"><div class="otot-home-text-col is-1"><div class="otot-home-text-w"><h2 data-anim-high="right, dark-green-tint-1" split-text="lines" class="text-impact-reg-brier">ON<br></h2><h2 data-anim-high="right, dark-green-tint-1" split-text="lines" class="text-impact-reg-mona line-increase">TRACK</h2><div class="otot-home-text-rive w-embed"><canvas data-rive-object="" data-rive-file="phrases" data-rive-artboard="phrase_on" data-rive-state-machine="phrase_on" data-rive-fit="contain" data-rive-scrolltrigger="true" data-rive-scrolltrigger-start="top center">
</canvas></div></div><div class="otot-home-p-w"><p split-text="lines" data-anim-high="right, dark-green-tint-1, 200" class="text-body-reg-mona">Most recent <strong>results</strong>, career stats and photos from trackside.</p></div><div class="btn-auto-top"><a title="On Track page" data-btn-rive-rotate="true" data-btn-rive-hover="" href="/on-track" class="btn-w icon-only w-inline-block"><div class="btn-inner"><div class="btn-icon-w"><div class="btn-rive-w is-large w-embed"><canvas data-rive-object="" data-rive-file="btn-ui" data-rive-artboard="arrow" data-rive-state-machine="arrow" data-rive-hover="false" data-rive-fit="contain">
</canvas></div></div></div></a></div></div><div class="otot-home-text-col is-2"><div class="otot-home-text-w"><h2 data-anim-high="left, dark-green-tint-1" split-text="lines" class="text-impact-reg-brier">OFF<br></h2><h2 data-anim-high="left, dark-green-tint-1" split-text="lines" class="text-impact-reg-mona line-increase">TRACK</h2></div><div class="otot-home-p-w is-2"><p split-text="lines" data-anim-high="left, dark-green-tint-1, 200" class="text-body-reg-mona"><strong>Campaigns</strong>, shoots and other such promotional materials for fans</p></div><div><a title="Off Track Page" data-btn-rive-rotate="false" data-btn-rive-hover="" href="/off-track" class="btn-w icon-only w-inline-block"><div class="btn-inner"><div class="btn-icon-w"><div class="btn-rive-w is-large w-embed"><canvas data-rive-object="" data-rive-file="btn-ui" data-rive-artboard="arrow" data-rive-state-machine="arrow" data-rive-hover="false" data-rive-fit="contain">
</canvas></div></div></div></a></div></div></div></div><div class="otot-home-bg"><div class="otot-home-img-w is-1"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e53_ln4-hp-lando-helmet.webp" loading="eager" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e53_ln4-hp-lando-helmet-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e53_ln4-hp-lando-helmet.webp 834w" alt="Lando Norris wearing a lime helmet, side profile" class="otot-home-img is-helmet"></div><div class="otot-home-img-w is-2"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e56_ln4-hp-lando-head.webp" loading="eager" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e56_ln4-hp-lando-head-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e56_ln4-hp-lando-head-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e56_ln4-hp-lando-head.webp 898w" alt="Lando Norris wearing a fleece side profile" class="otot-home-img"></div></div></div></section></div><section data-otot-bottom="" class="s is-otot-end"><div class="otot-home-end-img-w"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302ff5ff89a9a4afb8c19e_ln-home-helm-large.webp" loading="eager" alt="Lando lifting helmet up" class="image is-otot-home-end"></div></section></div>
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 27: Proof
- **Confidence:** 20%
- **Tag:** div
- **Classes:** `sticky-item`
- **Size:** full viewport height
- **Headings:** H2: "ON"; H2: "TRACK"; H2: "OFF"; H2: "TRACK"
- **Media:** 2 image(s), 3 canvas(es)
- **Animations:**
  - `div`.c: transition: all
  - `div`.otot-home-bg: transition: all
  - `div`.otot-home-inner: transition: all
  - `div`.otot-home-img-w: transition: all
  - `img`.otot-home-img: transition: all
  - `div`.otot-home-img-w: transition: all
  - `img`.otot-home-img: transition: all
  - `div`.otot-home-layout: transition: all
  - `div`.otot-home-text-col: transition: all
  - `div`.otot-home-text-col: transition: all

### Element Style Blueprint

- **`<div>`** .c.is-otot-home
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1440px | padding: 0px 16.6667px | opacity: 1
  - anim: all
  - text: "ONTRACK Most recent results, career stats and photos from trackside. OFFTRACKCampaigns, shoots and other such promotional materials for fans"

- **`<div>`** .otot-home-bg
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1440px | opacity: 1
  - anim: all

- **`<div>`** .otot-home-inner
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 1406.69px | opacity: 1
  - anim: all
  - text: "ONTRACK Most recent results, career stats and photos from trackside. OFFTRACKCampaigns, shoots and other such promotional materials for fans"

- **`<div>`** .otot-home-img-w.is-2
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 451.422px | opacity: 1
  - anim: all

- **`<img>`** .otot-home-img
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 451.422px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e56_ln4-hp-lando-head.webp

- **`<div>`** .otot-home-img-w.is-1
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 419.25px | opacity: 1
  - anim: all

- **`<img>`** .otot-home-img.is-helmet
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 419.25px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e53_ln4-hp-lando-helmet.webp

- **`<div>`** .otot-home-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 617px | opacity: 1
  - anim: all
  - text: "ONTRACK Most recent results, career stats and photos from trackside. OFFTRACKCampaigns, shoots and other such promotional materials for fans"

- **`<div>`** .otot-home-text-col.is-1
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: right | border: 0px none rgb(40, 44, 32) | display: flex | width: 283.5px | opacity: 1
  - anim: all
  - text: "ONTRACK Most recent results, career stats and photos from trackside."

- **`<div>`** .otot-home-text-col.is-2
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: left | border: 0px none rgb(40, 44, 32) | display: flex | width: 283.5px | opacity: 1
  - anim: all
  - text: "OFFTRACKCampaigns, shoots and other such promotional materials for fans"

### HTML Structure

```html
<div class="sticky-item"><section data-otot-top="" data-designmode-white="" class="s is-otot-home"><div class="c is-otot-home"><div class="otot-home-inner"><div class="otot-home-layout"><div class="otot-home-text-col is-1"><div class="otot-home-text-w"><h2 data-anim-high="right, dark-green-tint-1" split-text="lines" class="text-impact-reg-brier">ON<br></h2><h2 data-anim-high="right, dark-green-tint-1" split-text="lines" class="text-impact-reg-mona line-increase">TRACK</h2><div class="otot-home-text-rive w-embed"><canvas data-rive-object="" data-rive-file="phrases" data-rive-artboard="phrase_on" data-rive-state-machine="phrase_on" data-rive-fit="contain" data-rive-scrolltrigger="true" data-rive-scrolltrigger-start="top center">
</canvas></div></div><div class="otot-home-p-w"><p split-text="lines" data-anim-high="right, dark-green-tint-1, 200" class="text-body-reg-mona">Most recent <strong>results</strong>, career stats and photos from trackside.</p></div><div class="btn-auto-top"><a title="On Track page" data-btn-rive-rotate="true" data-btn-rive-hover="" href="/on-track" class="btn-w icon-only w-inline-block"><div class="btn-inner"><div class="btn-icon-w"><div class="btn-rive-w is-large w-embed"><canvas data-rive-object="" data-rive-file="btn-ui" data-rive-artboard="arrow" data-rive-state-machine="arrow" data-rive-hover="false" data-rive-fit="contain">
</canvas></div></div></div></a></div></div><div class="otot-home-text-col is-2"><div class="otot-home-text-w"><h2 data-anim-high="left, dark-green-tint-1" split-text="lines" class="text-impact-reg-brier">OFF<br></h2><h2 data-anim-high="left, dark-green-tint-1" split-text="lines" class="text-impact-reg-mona line-increase">TRACK</h2></div><div class="otot-home-p-w is-2"><p split-text="lines" data-anim-high="left, dark-green-tint-1, 200" class="text-body-reg-mona"><strong>Campaigns</strong>, shoots and other such promotional materials for fans</p></div><div><a title="Off Track Page" data-btn-rive-rotate="false" data-btn-rive-hover="" href="/off-track" class="btn-w icon-only w-inline-block"><div class="btn-inner"><div class="btn-icon-w"><div class="btn-rive-w is-large w-embed"><canvas data-rive-object="" data-rive-file="btn-ui" data-rive-artboard="arrow" data-rive-state-machine="arrow" data-rive-hover="false" data-rive-fit="contain">
</canvas></div></div></div></a></div></div></div></div><div class="otot-home-bg"><div class="otot-home-img-w is-1"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e53_ln4-hp-lando-helmet.webp" loading="eager" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e53_ln4-hp-lando-helmet-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e53_ln4-hp-lando-helmet.webp 834w" alt="Lando Norris wearing a lime helmet, side profile" class="otot-home-img is-helmet"></div><div class="otot-home-img-w is-2"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e56_ln4-hp-lando-head.webp" loading="eager" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e56_ln4-hp-lando-head-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e56_ln4-hp-lando-head-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e56_ln4-hp-lando-head.webp 898w" alt="Lando Norris wearing a fleece side profile" class="otot-home-img"></div></div></div></section></div>
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 28: Proof
- **Confidence:** 20%
- **Tag:** div
- **Classes:** `otot-home-inner`
- **Size:** full viewport height
- **Headings:** H2: "ON"; H2: "TRACK"; H2: "OFF"; H2: "TRACK"
- **Media:** 3 canvas(es)
- **Flex:** direction: row, wrap: nowrap, gap: normal
- **Align items:** center
- **Justify:** center
- **Animations:**
  - `div`.otot-home-layout: transition: all
  - `div`.otot-home-text-col: transition: all
  - `div`.otot-home-text-col: transition: all
  - `div`.otot-home-text-w: transition: all
  - `div`.otot-home-text-w: transition: all
  - `div`.otot-home-text-rive: transition: all
  - `canvas`: transition: all
  - `h2`.text-impact-reg-mona: transition: all
  - `h2`.text-impact-reg-mona: transition: all
  - `h2`.text-impact-reg-brier: transition: all
  - `h2`.text-impact-reg-brier: transition: all
  - `div`.otot-home-p-w: transition: all
  - `div`.otot-home-p-w: transition: all
  - `p`.text-body-reg-mona: transition: all
  - `p`.text-body-reg-mona: transition: all
  - `div`.btn-auto-top: transition: all
  - `div`: transition: all
  - `a`.btn-w: transition: all
  - `a`.btn-w: transition: all
  - `div`.btn-inner: transition: all
  - `div`.btn-inner: transition: all

### Element Style Blueprint

- **`<div>`** .otot-home-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 617px | opacity: 1
  - anim: all
  - text: "ONTRACK Most recent results, career stats and photos from trackside. OFFTRACKCampaigns, shoots and other such promotional materials for fans"

- **`<div>`** .otot-home-text-col.is-1
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: right | border: 0px none rgb(40, 44, 32) | display: flex | width: 283.5px | opacity: 1
  - anim: all
  - text: "ONTRACK Most recent results, career stats and photos from trackside."

- **`<div>`** .otot-home-text-col.is-2
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: left | border: 0px none rgb(40, 44, 32) | display: flex | width: 283.5px | opacity: 1
  - anim: all
  - text: "OFFTRACKCampaigns, shoots and other such promotional materials for fans"

- **`<div>`** .otot-home-text-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: right | border: 0px none rgb(40, 44, 32) | display: block | width: 283.5px | opacity: 1
  - anim: all
  - text: "ONTRACK"

- **`<div>`** .otot-home-text-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: left | border: 0px none rgb(40, 44, 32) | display: block | width: 283.5px | opacity: 1
  - anim: all
  - text: "OFFTRACK"

- **`<div>`** .otot-home-text-rive.w-embed
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: right | border: 0px none rgb(40, 44, 32) | display: block | width: 212.547px | opacity: 1
  - anim: all

- **`<canvas>`**
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: right | border: 0px none rgb(40, 44, 32) | display: inline-block | width: 212.547px | opacity: 1
  - anim: all

- **`<h2>`** .text-impact-reg-mona.line-increase
  - font: 93.3333px 700 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 79.3333px | ls: -3.33333px | text-transform: uppercase | text-align: right | border: 0px none rgb(40, 44, 32) | display: block | width: 283.5px | opacity: 1
  - anim: all
  - text: "TRACK"

- **`<h2>`** .text-impact-reg-mona.line-increase
  - font: 93.3333px 700 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 79.3333px | ls: -3.33333px | text-transform: uppercase | text-align: left | border: 0px none rgb(40, 44, 32) | display: block | width: 283.5px | opacity: 1
  - anim: all
  - text: "TRACK"

- **`<h2>`** .text-impact-reg-brier
  - font: 97.5px 700 Brier, Arial, sans-serif | color: rgb(40, 44, 32) | lh: 78.975px | ls: -2.91667px | text-transform: uppercase | text-align: right | border: 0px none rgb(40, 44, 32) | display: block | width: 283.5px | opacity: 1
  - anim: all

- **`<h2>`** .text-impact-reg-brier
  - font: 97.5px 700 Brier, Arial, sans-serif | color: rgb(40, 44, 32) | lh: 78.975px | ls: -2.91667px | text-transform: uppercase | text-align: left | border: 0px none rgb(40, 44, 32) | display: block | width: 283.5px | opacity: 1
  - anim: all
  - text: "OFF"

- **`<div>`** .otot-home-p-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: right | border: 0px none rgb(40, 44, 32) | display: flex | width: 280px | margin: 16.6667px 0px 0px | opacity: 1
  - anim: all
  - text: "Most recent results, career stats and photos from trackside."

- **`<div>`** .otot-home-p-w.is-2
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: left | border: 0px none rgb(40, 44, 32) | display: flex | width: 280px | margin: 16.6667px 0px 0px | opacity: 1
  - anim: all
  - text: "Campaigns, shoots and other such promotional materials for fans"

- **`<p>`** .text-body-reg-mona
  - font: 16.6667px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20.8333px | ls: -0.166667px | text-align: right | border: 0px none rgb(40, 44, 32) | display: block | width: 280px | opacity: 1
  - anim: all
  - text: "Most recent results, career stats and photos from trackside."

- **`<p>`** .text-body-reg-mona
  - font: 16.6667px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20.8333px | ls: -0.166667px | text-align: left | border: 0px none rgb(40, 44, 32) | display: block | width: 280px | opacity: 1
  - anim: all
  - text: "Campaigns, shoots and other such promotional materials for fans"

- **`<div>`** .btn-auto-top
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: right | border: 0px none rgb(40, 44, 32) | display: block | width: 50px | opacity: 1
  - anim: all

- **`<div>`**
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: left | border: 0px none rgb(40, 44, 32) | display: block | width: 50px | opacity: 1
  - anim: all

- **`<a>`** .btn-w.icon-only
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: right | bg: rgb(210, 255, 0) | radius: 7.2px | border: 1px solid rgb(210, 255, 0) | display: flex | width: 50px | padding: 0px 13.3333px | opacity: 1
  - anim: all
  - href: https://landonorris.com/on-track

- **`<a>`** .btn-w.icon-only
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: left | bg: rgb(210, 255, 0) | radius: 7.2px | border: 1px solid rgb(210, 255, 0) | display: flex | width: 50px | padding: 0px 13.3333px | opacity: 1
  - anim: all
  - href: https://landonorris.com/off-track

- **`<div>`** .btn-inner
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: right | border: 0px none rgb(40, 44, 32) | display: flex | width: 16px | opacity: 1
  - anim: all

- **`<div>`** .btn-inner
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: left | border: 0px none rgb(40, 44, 32) | display: flex | width: 16px | opacity: 1
  - anim: all

### HTML Structure

```html
<div class="otot-home-inner"><div class="otot-home-layout"><div class="otot-home-text-col is-1"><div class="otot-home-text-w"><h2 data-anim-high="right, dark-green-tint-1" split-text="lines" class="text-impact-reg-brier">ON<br></h2><h2 data-anim-high="right, dark-green-tint-1" split-text="lines" class="text-impact-reg-mona line-increase">TRACK</h2><div class="otot-home-text-rive w-embed"><canvas data-rive-object="" data-rive-file="phrases" data-rive-artboard="phrase_on" data-rive-state-machine="phrase_on" data-rive-fit="contain" data-rive-scrolltrigger="true" data-rive-scrolltrigger-start="top center">
</canvas></div></div><div class="otot-home-p-w"><p split-text="lines" data-anim-high="right, dark-green-tint-1, 200" class="text-body-reg-mona">Most recent <strong>results</strong>, career stats and photos from trackside.</p></div><div class="btn-auto-top"><a title="On Track page" data-btn-rive-rotate="true" data-btn-rive-hover="" href="/on-track" class="btn-w icon-only w-inline-block"><div class="btn-inner"><div class="btn-icon-w"><div class="btn-rive-w is-large w-embed"><canvas data-rive-object="" data-rive-file="btn-ui" data-rive-artboard="arrow" data-rive-state-machine="arrow" data-rive-hover="false" data-rive-fit="contain">
</canvas></div></div></div></a></div></div><div class="otot-home-text-col is-2"><div class="otot-home-text-w"><h2 data-anim-high="left, dark-green-tint-1" split-text="lines" class="text-impact-reg-brier">OFF<br></h2><h2 data-anim-high="left, dark-green-tint-1" split-text="lines" class="text-impact-reg-mona line-increase">TRACK</h2></div><div class="otot-home-p-w is-2"><p split-text="lines" data-anim-high="left, dark-green-tint-1, 200" class="text-body-reg-mona"><strong>Campaigns</strong>, shoots and other such promotional materials for fans</p></div><div><a title="Off Track Page" data-btn-rive-rotate="false" data-btn-rive-hover="" href="/off-track" class="btn-w icon-only w-inline-block"><div class="btn-inner"><div class="btn-icon-w"><div class="btn-rive-w is-large w-embed"><canvas data-rive-object="" data-rive-file="btn-ui" data-rive-artboard="arrow" data-rive-state-machine="arrow" data-rive-hover="false" data-rive-fit="contain">
</canvas></div></div></div></a></div></div></div></div>
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 29: Hero
- **Confidence:** 0%
- **Tag:** div
- **Classes:** `otot-home-bg`
- **Size:** full viewport height
- **Media:** 2 image(s)
- **Animations:**
  - `div`.otot-home-img-w: transition: all
  - `img`.otot-home-img: transition: all
  - `div`.otot-home-img-w: transition: all
  - `img`.otot-home-img: transition: all

### Element Style Blueprint

- **`<div>`** .otot-home-img-w.is-2
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 451.422px | opacity: 1
  - anim: all

- **`<img>`** .otot-home-img
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 451.422px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e56_ln4-hp-lando-head.webp

- **`<div>`** .otot-home-img-w.is-1
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 419.25px | opacity: 1
  - anim: all

- **`<img>`** .otot-home-img.is-helmet
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 419.25px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e53_ln4-hp-lando-helmet.webp

### HTML Structure

```html
<div class="otot-home-bg"><div class="otot-home-img-w is-1"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e53_ln4-hp-lando-helmet.webp" loading="eager" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e53_ln4-hp-lando-helmet-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e53_ln4-hp-lando-helmet.webp 834w" alt="Lando Norris wearing a lime helmet, side profile" class="otot-home-img is-helmet"></div><div class="otot-home-img-w is-2"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e56_ln4-hp-lando-head.webp" loading="eager" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e56_ln4-hp-lando-head-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e56_ln4-hp-lando-head-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e56_ln4-hp-lando-head.webp 898w" alt="Lando Norris wearing a fleece side profile" class="otot-home-img"></div></div>
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 30: Team
- **Confidence:** 20%
- **Tag:** div
- **Classes:** `s-group bg-black`
- **Size:** full viewport height
- **Background color:** rgb(17, 17, 18)
- **Headings:** H2: "Helmets"; H2: "Hall of Fame"; H3: "Season"; H3: "Discoball"; H3: "Dark Glitter"; H3: "Season"; H3: "Porcelain"; H3: "Japan"; H3: "GIF"; H3: "Dark Mode"; H3: "Race"; H3: "Las Vegas"; H3: "Chrome"; H3: "Beachball"; H3: "Basketball"; H3: "Season"; H3: "Silverstone"; H3: "Season"
- **CTAs:** view on track
- **Media:** 64 image(s), 2 canvas(es), 65 SVG(s)
- **Animations:**
  - `div`.c: transition: all
  - `div`.w-dyn-list: transition: all
  - `div`.helmet-grid: transition: all
  - `div`.c: transition: all
  - `div`.spacer: transition: all
  - `div`.title-layout: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.callout-layout: transition: all
  - `div`.title-headline-w: transition: all
  - `div`.title-para-w: transition: all
  - `p`.text-body-reg-mona: transition: all
  - `div`.callout-text-w: transition: all
  - `div`.text-cta-short-intro: transition: all
  - `h2`.text-title-lg-mona: transition: all
  - `h2`.text-title-lg-mona: transition: all

### Element Style Blueprint

- **`<div>`** .c.home-helmets
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | padding: 33.3333px 16.6667px 16.6667px | opacity: 1
  - anim: all
  - text: "HelmetsHall of FameFrom his iconic blobs to innovative one-off designs, Lando has always been passionate about designing innovative and memorable helm"

- **`<div>`** .w-dyn-list
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1406.69px | opacity: 1
  - anim: all
  - text: "Season2025 Discoball2025 Dark Glitter2025 Season2024 Porcelain2024 Japan2024 GIF2024 Dark Mode2024 Race2023 Las Vegas2023 Chrome2023 Beachball2023 Bas"

- **`<div>`** .helmet-grid.w-dyn-items
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: grid | width: 1406.69px | opacity: 1
  - anim: all
  - text: "Season2025 Discoball2025 Dark Glitter2025 Season2024 Porcelain2024 Japan2024 GIF2024 Dark Mode2024 Race2023 Las Vegas2023 Chrome2023 Beachball2023 Bas"

- **`<div>`** .c.is-callout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1440px | padding: 160px 16.6667px 116.667px | opacity: 1
  - anim: all
  - text: "See more helmets and highlights from Lando on the trackview on track"

- **`<div>`** .spacer._8-75rem
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1406.69px | opacity: 1
  - anim: all

- **`<div>`** .title-layout.grid-main
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: grid | width: 1406.69px | opacity: 1
  - anim: all
  - text: "HelmetsHall of FameFrom his iconic blobs to innovative one-off designs, Lando has always been passionate about designing innovative and memorable helm"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Discoball2025"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Season2024"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Japan2024"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Dark Mode2024"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Las Vegas2023"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Beachball2023"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Season2021"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Season2019"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.172px | opacity: 1
  - anim: all
  - text: "Season2025"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.172px | opacity: 1
  - anim: all
  - text: "Dark Glitter2025"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.172px | opacity: 1
  - anim: all
  - text: "Porcelain2024"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.172px | opacity: 1
  - anim: all
  - text: "GIF2024"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.172px | opacity: 1
  - anim: all
  - text: "Race2023"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.172px | opacity: 1
  - anim: all
  - text: "Chrome2023"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.172px | opacity: 1
  - anim: all
  - text: "Basketball2022"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.172px | opacity: 1
  - anim: all
  - text: "Silverstone2020"

- **`<div>`** .callout-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 433.328px | opacity: 1
  - anim: all
  - text: "See more helmets and highlights from Lando on the trackview on track"

- **`<div>`** .title-headline-w.flex #w-node-_5d5ac04e-626f-e2bd-ba2c-8a1157b2eda4-0b17a7eb
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 679.188px | opacity: 1
  - anim: all
  - text: "HelmetsHall of Fame"

- **`<div>`** .title-para-w.c-grey-on-track #w-node-_8734ac60-bf7c-ac47-bf21-501caa438859-0b17a7eb
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(185, 187, 173) | lh: 20px | text-align: start | border: 0px none rgb(185, 187, 173) | display: block | width: 331.266px | opacity: 1
  - anim: all
  - text: "From his iconic blobs to innovative one-off designs, Lando has always been passionate about designing innovative and memorable helmets."

- **`<p>`** .text-body-reg-mona
  - font: 16.6667px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(185, 187, 173) | lh: 20.8333px | ls: -0.166667px | text-align: start | border: 0px none rgb(185, 187, 173) | display: block | width: 331.266px | opacity: 1
  - anim: all
  - text: "From his iconic blobs to innovative one-off designs, Lando has always been passionate about designing innovative and memorable helmets."

- **`<div>`** .callout-text-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: center | border: 0px none rgb(244, 244, 237) | display: block | width: 433.328px | opacity: 1
  - anim: all
  - text: "See more helmets and highlights from Lando on the track"

- **`<div>`** .text-cta-short-intro.font-brier
  - font: 26.6667px 400 Brier, Arial, sans-serif | color: rgb(244, 244, 237) | lh: 27.7333px | ls: 0.666667px | text-align: center | border: 0px none rgb(244, 244, 237) | display: block | width: 433.328px | opacity: 1
  - anim: all
  - text: "See more helmets and highlights from Lando on the track"

- **`<h2>`** .text-title-lg-mona
  - font: 60px 700 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 53.16px | ls: -1.66667px | text-transform: uppercase | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 411.766px | opacity: 1
  - anim: all
  - text: "Hall of Fame"

- **`<h2>`** .text-title-lg-mona
  - font: 60px 700 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 53.16px | ls: -1.66667px | text-transform: uppercase | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 249.062px | opacity: 1
  - anim: all
  - text: "Helmets"

### HTML Structure

```html
<div data-nav-theme-target="light" class="s-group bg-black"><section class="s home-helmets"><div class="c home-helmets"><div class="title-layout grid-main"><div id="w-node-_5d5ac04e-626f-e2bd-ba2c-8a1157b2eda4-0b17a7eb" class="title-headline-w flex"><h2 data-anim-high="" split-text="lines" class="text-title-lg-mona">Helmets<br></h2><h2 data-anim-high="" split-text="lines" class="text-title-lg-mona"><span class="text-title-lg-brier c-lime-off">Hall of Fame</span></h2></div><div id="w-node-_8734ac60-bf7c-ac47-bf21-501caa438859-0b17a7eb" class="title-para-w c-grey-on-track"><p data-anim-high="right, lime, 200" split-text="lines" class="text-body-reg-mona">From his iconic blobs to innovative one-off designs, Lando has always been passionate about designing innovative and memorable helmets.</p></div></div><div class="spacer _8-75rem m-6rem"></div><div class="w-dyn-list"><div data-helmet-grid="" role="list" class="helmet-grid w-dyn-items"><div role="listitem" class="helmet-grid-item-w w-dyn-item"><div class="helmet-grid-item-w"><div data-helmet-item="" class="helmet-grid-item"><div class="helmet-grid-frame-w destop"><div class="helmet-grid-frame is-overlay w-embed"><svg width="100%" height="100%" viewBox="0 0 407 411" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1h390.89a7 7 0 0 1 7 7v356.983a7 7 0 0 1-7 7H263.329a23.999 23.999 0 0 0-18.766 9.038l-16.499 20.694A21.999 21.999 0 0 1 210.862 410H8a7 7 0 0 1-7-7V8a7 7 0 0 1 7-7Z" stroke="var(--color--lime)" stroke-width="2"></path>
</svg></div><div class="helmet-grid-frame is-base w-embed"><svg width="100%" height="100%" viewBox="0 0 407 411" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 .5h390.89a7.5 7.5 0 0 1 7.5 7.5v356.983a7.5 7.5 0 0 1-7.5 7.5H263.329a23.502 23.502 0 0 0-18.375 8.849l-16.499 20.695a22.502 22.502 0 0 1-17.593 8.473H8A7.5 7.5 0 0 1 .5 403V8A7.5 7.5 0 0 1 8 .5Z" stroke="currentColor" stroke-width="2" vector-effect="non-scaling-stroke"></path>
</svg></div></div><div class="helmet-grid-frame-w mobile"><div class="helmet-grid-frame is-overlay w-embed"><svg width="100%" height="100%" viewBox="0 0 187 188" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 .5h170.12a7.5 7.5 0 0 1 7.5 7.5v154.61a7.5 7.5 0 0 1-7.5 7.5H60.681a10.5 10.5 0 0 0-8.21 3.954l-7.86 9.858a9.5 9.5 0 0 1-7.427 3.578H8A7.5 7.5 0 0 1 .5 180V8A7.5 7.5 0 0 1 8 .5Z" stroke="var(--color--lime)" stroke-width="2"></path></svg></div><div class="helmet-grid-frame is-base w-embed"><svg width="100%" height="100%" viewBox="0 0 187 188" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 .5h170.12a7.5 7.5 0 0 1 7.5 7.5v154.61a7.5 7.5 0 0 1-7.5 7.5H60.681a10.5 10.5 0 0 0-8.21 3.954l-7.86 9.858a9.5 9.5 0 0 1-7.427 3.578H8A7.5 7.5 0 0 1 .5 180V8A7.5 7.5 0 0 1 8 .5Z" stroke="currentColor" stroke-width="1"></path></svg></div></div><div class="helmet-grid-item-img-w"><div class="helmet-grid-item-img-helmet-w"><img src="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b3e6c7ab86033cf172c_In-helm-2025-Season-base.webp" loading="eager" alt="" sizes="100vw" srcset="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b3e6c7ab86033cf172c_In-helm-2025-Season-base-p-500.webp 500w, https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b3e6c7ab86033cf172c_In-helm-2025-Season-base-p-800.webp 800w, https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b3e6c7ab86033cf172c_In-helm-2025-Season-base.webp 823w" class="helmet-grid-item-img-helmet"></div><img src="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b411c575b2f777125f6_In-helm-2025-Season-hover.webp" loading="eager" alt="" sizes="100vw" srcset="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b411c575b2f777125f6_In-helm-2025-Season-hover-p-500.webp 500w, https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b411c575b2f777125f6_In-helm-2025-Season-hover.webp 823w" class="helmet-grid-item-reveal-img"></div></div><div class="helmet-grid-item-text-w"><h3 class="text-title-small-label text">Season</h3><div class="helmet-grid-item-date-w"><div class="text-title-small-label date">2025</div></div><div class="helmet-grid-extender"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e41c00f127bc68e2462635_ln4-2-helm-mask-extender-grey-fade.png" loading="eager" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e41c00f127bc68e2462635_ln4-2-helm-mask-extender-grey-fade-p-500.png 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e41c00f127bc68e2462635_ln4-2-helm-mask-extender-grey-fade.png 669w" alt="" class="helmet-grid-extender-img"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e41235ad69136bdc861b67_ln4-2-helm-mask-extender-lime-fade.png" loading="eager" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e41235ad69136bdc861b67_ln4-2-helm-mask-extender-lime-fade-p-500.png 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e41235ad69136bdc861b67_ln4-2-helm-mask-extender-lime-fade.png 669w" alt="" class="helmet-grid-extender-img is-overlay"></div></div></div></div><div role="listitem" class="helmet-grid-item-w w-dyn-item"><div class="helmet-grid-item-w"><div data-helmet-item="" class="helmet-grid-item"><div class="helmet-grid-frame-w destop"><div class="helmet-grid-frame is-overlay w-embed"><svg width="100%" height="100%" viewBox="0 0 407 411" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1h390.89a7 7 0 0 1 7 7v356.983a7 7 0 0 1-7 7H263.329a23.999 23.999 0 0 0-18.766 9.038l-16.499 20.694A21.999 21.999 0 0 1 210.862 410H8a7 7 0 0 1-7-7V8a7 7 0 0 1 7-7Z" stroke="var(--color--lime)" stroke-width="2"></path>
</svg></div><div class="helmet-grid-frame is-base w-embed"><svg width="100%" height="100%" viewBox="0 0 407 411" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 .5h390.89a7.5 7.5 0 0 1 7.5 7.5v356.983a7.5 7.5 0 0 1-7.5 7.5H263.329a23.502 23.502 0 0 0-18.375 8.849l-16.499 20.695a22.502 22.502 0 0 1-17.593 8.473H8A7.5 7.5 0 0 1 .5 403V8A7.5 7.5 0 0 1 8 .5Z" stroke="currentColor" stroke-width="2" vector-effect="non-scaling-stroke"></path>
</svg></div></div><div class="helmet-grid-frame-w mobile"><div class="helmet-grid-frame is-overlay w-embed"><svg width="100%" height="100%" viewBox="0 0 187 188" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 .5h170.12a7.5 7.5 0 0 1 7.5 7.5v154.61a7.5 7.5 0 0 1-7.5 7.5H60.681a10.5 10.5 0 0 0-8.21 3.954l-7.86 9.858a9.5 9.5 0 0 1-7.427 3.578H8A7.5 7.5 0 0 1 .5 180V8A7.5 7.5 0 0 1 8 .5Z" stroke="var(--color--lime)" stroke-width="2"></path></svg></div><div class="helmet-grid-frame is-base w-embed"><svg width="100%" height="100%" viewBox="0 0 187 188" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 .5h170.12a7.5 7.5 0 0 1 7.5 7.5v154.61a7.5 7.5 0 0 1-7.5 7.5H60.681a10.5 10.5 0 0 0-8.21 3.954l-7.86 9.858a9.5 9.5 0 0 1-7.427 3.578H8A7.5 7.5 0 0 1 .5 180V8A7.5 7.5 0 0 1 8 .5Z" stroke="currentColor" stroke-width="1"></path></svg></div></div><div class="helmet-grid-item-img-w"><div class="helmet-grid-item-img-helmet-w"><img src="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b2259159e5170d2b923_In-helm-2025-Discoball-base.webp" loading="eager" alt="" sizes="100vw" srcset="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b2259159e5170d2b923_In-helm-2025-Discoball-base-p-500.webp 500w, https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b2259159e5170d2b923_In-helm-2025-Discoball-base-p-800.webp 800w, https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b2259159e5170d2b923_In-helm-2025-Discoball-base.webp 823w" class="helmet-grid-item-img-helmet"></div><img src="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b24037a1e7681195c20_In-helm-2025-Discoball-hover.webp" loading="eager" alt="" sizes="100vw" srcset="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b24037a1e7681195
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 31: Hero
- **Confidence:** 0%
- **Tag:** div
- **Classes:** `w-dyn-list`
- **Size:** full viewport height
- **Headings:** H3: "Season"; H3: "Discoball"; H3: "Dark Glitter"; H3: "Season"; H3: "Porcelain"; H3: "Japan"; H3: "GIF"; H3: "Dark Mode"; H3: "Race"; H3: "Las Vegas"; H3: "Chrome"; H3: "Beachball"; H3: "Basketball"; H3: "Season"; H3: "Silverstone"; H3: "Season"
- **Media:** 64 image(s), 64 SVG(s)
- **Animations:**
  - `div`.helmet-grid: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item: transition: all
  - `div`.helmet-grid-item: transition: all
  - `div`.helmet-grid-item: transition: all
  - `div`.helmet-grid-item: transition: all
  - `div`.helmet-grid-item: transition: all
  - `div`.helmet-grid-item: transition: all
  - `div`.helmet-grid-item: transition: all
  - `div`.helmet-grid-item: transition: all
  - `div`.helmet-grid-frame-w: transition: all
  - `div`.helmet-grid-item-img-w: transition: all
  - `div`.helmet-grid-frame-w: transition: all
  - `div`.helmet-grid-item-img-w: transition: all
  - `div`.helmet-grid-frame-w: transition: all

### Element Style Blueprint

- **`<div>`** .helmet-grid.w-dyn-items
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: grid | width: 1406.69px | opacity: 1
  - anim: all
  - text: "Season2025 Discoball2025 Dark Glitter2025 Season2024 Porcelain2024 Japan2024 GIF2024 Dark Mode2024 Race2023 Las Vegas2023 Chrome2023 Beachball2023 Bas"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Discoball2025"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Season2024"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Japan2024"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Dark Mode2024"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Las Vegas2023"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Beachball2023"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Season2021"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Season2019"

- **`<div>`** .helmet-grid-item-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Discoball2025"

- **`<div>`** .helmet-grid-item-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Season2024"

- **`<div>`** .helmet-grid-item-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Japan2024"

- **`<div>`** .helmet-grid-item-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Dark Mode2024"

- **`<div>`** .helmet-grid-item-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Las Vegas2023"

- **`<div>`** .helmet-grid-item-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Beachball2023"

- **`<div>`** .helmet-grid-item-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Season2021"

- **`<div>`** .helmet-grid-item-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Season2019"

- **`<div>`** .helmet-grid-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 339.188px | opacity: 1
  - anim: all

- **`<div>`** .helmet-grid-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 339.188px | opacity: 1
  - anim: all

- **`<div>`** .helmet-grid-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 339.188px | opacity: 1
  - anim: all

- **`<div>`** .helmet-grid-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 339.188px | opacity: 1
  - anim: all

- **`<div>`** .helmet-grid-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 339.188px | opacity: 1
  - anim: all

- **`<div>`** .helmet-grid-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 339.188px | opacity: 1
  - anim: all

- **`<div>`** .helmet-grid-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 339.188px | opacity: 1
  - anim: all

- **`<div>`** .helmet-grid-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 339.188px | opacity: 1
  - anim: all

- **`<div>`** .helmet-grid-frame-w.destop
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 339.188px | opacity: 1
  - anim: all

- **`<div>`** .helmet-grid-item-img-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 339.188px | opacity: 1
  - anim: all

- **`<div>`** .helmet-grid-frame-w.destop
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 339.188px | opacity: 1
  - anim: all

- **`<div>`** .helmet-grid-item-img-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 339.188px | opacity: 1
  - anim: all

- **`<div>`** .helmet-grid-frame-w.destop
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 339.188px | opacity: 1
  - anim: all

### HTML Structure

```html
<div class="w-dyn-list"><div data-helmet-grid="" role="list" class="helmet-grid w-dyn-items"><div role="listitem" class="helmet-grid-item-w w-dyn-item"><div class="helmet-grid-item-w"><div data-helmet-item="" class="helmet-grid-item"><div class="helmet-grid-frame-w destop"><div class="helmet-grid-frame is-overlay w-embed"><svg width="100%" height="100%" viewBox="0 0 407 411" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1h390.89a7 7 0 0 1 7 7v356.983a7 7 0 0 1-7 7H263.329a23.999 23.999 0 0 0-18.766 9.038l-16.499 20.694A21.999 21.999 0 0 1 210.862 410H8a7 7 0 0 1-7-7V8a7 7 0 0 1 7-7Z" stroke="var(--color--lime)" stroke-width="2"></path>
</svg></div><div class="helmet-grid-frame is-base w-embed"><svg width="100%" height="100%" viewBox="0 0 407 411" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 .5h390.89a7.5 7.5 0 0 1 7.5 7.5v356.983a7.5 7.5 0 0 1-7.5 7.5H263.329a23.502 23.502 0 0 0-18.375 8.849l-16.499 20.695a22.502 22.502 0 0 1-17.593 8.473H8A7.5 7.5 0 0 1 .5 403V8A7.5 7.5 0 0 1 8 .5Z" stroke="currentColor" stroke-width="2" vector-effect="non-scaling-stroke"></path>
</svg></div></div><div class="helmet-grid-frame-w mobile"><div class="helmet-grid-frame is-overlay w-embed"><svg width="100%" height="100%" viewBox="0 0 187 188" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 .5h170.12a7.5 7.5 0 0 1 7.5 7.5v154.61a7.5 7.5 0 0 1-7.5 7.5H60.681a10.5 10.5 0 0 0-8.21 3.954l-7.86 9.858a9.5 9.5 0 0 1-7.427 3.578H8A7.5 7.5 0 0 1 .5 180V8A7.5 7.5 0 0 1 8 .5Z" stroke="var(--color--lime)" stroke-width="2"></path></svg></div><div class="helmet-grid-frame is-base w-embed"><svg width="100%" height="100%" viewBox="0 0 187 188" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 .5h170.12a7.5 7.5 0 0 1 7.5 7.5v154.61a7.5 7.5 0 0 1-7.5 7.5H60.681a10.5 10.5 0 0 0-8.21 3.954l-7.86 9.858a9.5 9.5 0 0 1-7.427 3.578H8A7.5 7.5 0 0 1 .5 180V8A7.5 7.5 0 0 1 8 .5Z" stroke="currentColor" stroke-width="1"></path></svg></div></div><div class="helmet-grid-item-img-w"><div class="helmet-grid-item-img-helmet-w"><img src="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b3e6c7ab86033cf172c_In-helm-2025-Season-base.webp" loading="eager" alt="" sizes="100vw" srcset="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b3e6c7ab86033cf172c_In-helm-2025-Season-base-p-500.webp 500w, https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b3e6c7ab86033cf172c_In-helm-2025-Season-base-p-800.webp 800w, https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b3e6c7ab86033cf172c_In-helm-2025-Season-base.webp 823w" class="helmet-grid-item-img-helmet"></div><img src="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b411c575b2f777125f6_In-helm-2025-Season-hover.webp" loading="eager" alt="" sizes="100vw" srcset="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b411c575b2f777125f6_In-helm-2025-Season-hover-p-500.webp 500w, https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b411c575b2f777125f6_In-helm-2025-Season-hover.webp 823w" class="helmet-grid-item-reveal-img"></div></div><div class="helmet-grid-item-text-w"><h3 class="text-title-small-label text">Season</h3><div class="helmet-grid-item-date-w"><div class="text-title-small-label date">2025</div></div><div class="helmet-grid-extender"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e41c00f127bc68e2462635_ln4-2-helm-mask-extender-grey-fade.png" loading="eager" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e41c00f127bc68e2462635_ln4-2-helm-mask-extender-grey-fade-p-500.png 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e41c00f127bc68e2462635_ln4-2-helm-mask-extender-grey-fade.png 669w" alt="" class="helmet-grid-extender-img"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e41235ad69136bdc861b67_ln4-2-helm-mask-extender-lime-fade.png" loading="eager" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e41235ad69136bdc861b67_ln4-2-helm-mask-extender-lime-fade-p-500.png 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e41235ad69136bdc861b67_ln4-2-helm-mask-extender-lime-fade.png 669w" alt="" class="helmet-grid-extender-img is-overlay"></div></div></div></div><div role="listitem" class="helmet-grid-item-w w-dyn-item"><div class="helmet-grid-item-w"><div data-helmet-item="" class="helmet-grid-item"><div class="helmet-grid-frame-w destop"><div class="helmet-grid-frame is-overlay w-embed"><svg width="100%" height="100%" viewBox="0 0 407 411" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1h390.89a7 7 0 0 1 7 7v356.983a7 7 0 0 1-7 7H263.329a23.999 23.999 0 0 0-18.766 9.038l-16.499 20.694A21.999 21.999 0 0 1 210.862 410H8a7 7 0 0 1-7-7V8a7 7 0 0 1 7-7Z" stroke="var(--color--lime)" stroke-width="2"></path>
</svg></div><div class="helmet-grid-frame is-base w-embed"><svg width="100%" height="100%" viewBox="0 0 407 411" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 .5h390.89a7.5 7.5 0 0 1 7.5 7.5v356.983a7.5 7.5 0 0 1-7.5 7.5H263.329a23.502 23.502 0 0 0-18.375 8.849l-16.499 20.695a22.502 22.502 0 0 1-17.593 8.473H8A7.5 7.5 0 0 1 .5 403V8A7.5 7.5 0 0 1 8 .5Z" stroke="currentColor" stroke-width="2" vector-effect="non-scaling-stroke"></path>
</svg></div></div><div class="helmet-grid-frame-w mobile"><div class="helmet-grid-frame is-overlay w-embed"><svg width="100%" height="100%" viewBox="0 0 187 188" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 .5h170.12a7.5 7.5 0 0 1 7.5 7.5v154.61a7.5 7.5 0 0 1-7.5 7.5H60.681a10.5 10.5 0 0 0-8.21 3.954l-7.86 9.858a9.5 9.5 0 0 1-7.427 3.578H8A7.5 7.5 0 0 1 .5 180V8A7.5 7.5 0 0 1 8 .5Z" stroke="var(--color--lime)" stroke-width="2"></path></svg></div><div class="helmet-grid-frame is-base w-embed"><svg width="100%" height="100%" viewBox="0 0 187 188" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 .5h170.12a7.5 7.5 0 0 1 7.5 7.5v154.61a7.5 7.5 0 0 1-7.5 7.5H60.681a10.5 10.5 0 0 0-8.21 3.954l-7.86 9.858a9.5 9.5 0 0 1-7.427 3.578H8A7.5 7.5 0 0 1 .5 180V8A7.5 7.5 0 0 1 8 .5Z" stroke="currentColor" stroke-width="1"></path></svg></div></div><div class="helmet-grid-item-img-w"><div class="helmet-grid-item-img-helmet-w"><img src="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b2259159e5170d2b923_In-helm-2025-Discoball-base.webp" loading="eager" alt="" sizes="100vw" srcset="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b2259159e5170d2b923_In-helm-2025-Discoball-base-p-500.webp 500w, https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b2259159e5170d2b923_In-helm-2025-Discoball-base-p-800.webp 800w, https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b2259159e5170d2b923_In-helm-2025-Discoball-base.webp 823w" class="helmet-grid-item-img-helmet"></div><img src="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b24037a1e7681195c20_In-helm-2025-Discoball-hover.webp" loading="eager" alt="" sizes="100vw" srcset="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b24037a1e7681195c20_In-helm-2025-Discoball-hover-p-500.webp 500w, https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b24037a1e7681195c20_In-helm-2025-Discoball-hover-p-800.webp 800w, https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b24037a1e7681195c20_In-helm-2025-Discoball-hover.webp 823w" class="helmet-grid-item-reveal-img"></div></div><div class="helmet-grid-item-text-w"><h3 class="text-title-small-label text">Discoball</h3><div class="helmet-grid-item-date-w"><div class="text-title-small-label date">2025</div></div><div class="helmet-grid-extender"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e41c00f127bc68e2462635_ln4-2-helm-mask-extender-grey-fade.png" loading="eager" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e41c00f127bc68e2462635_ln4-2-helm-mask-extende
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 32: Hero
- **Confidence:** 0%
- **Tag:** div
- **Classes:** `helmet-grid w-dyn-items`
- **Size:** full viewport height
- **Headings:** H3: "Season"; H3: "Discoball"; H3: "Dark Glitter"; H3: "Season"; H3: "Porcelain"; H3: "Japan"; H3: "GIF"; H3: "Dark Mode"; H3: "Race"; H3: "Las Vegas"; H3: "Chrome"; H3: "Beachball"; H3: "Basketball"; H3: "Season"; H3: "Silverstone"; H3: "Season"
- **Media:** 64 image(s), 64 SVG(s)
- **Grid:** 339.172px 339.188px 339.172px 339.188px / 342.609px 342.609px 342.609px 342.609px, gap: 16.6667px
- **Align items:** normal
- **Justify:** normal
- **Animations:**
  - `img`.helmet-grid-item-reveal-img: transition: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1), transform 0.75s cubic-bezier(0.65, 0.05, 0, 1); transform: matrix(1.05, 0, 0, 1.05, 0, 0)
  - `img`.helmet-grid-item-reveal-img: transition: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1), transform 0.75s cubic-bezier(0.65, 0.05, 0, 1); transform: matrix(1.05, 0, 0, 1.05, 0, 0)
  - `img`.helmet-grid-item-reveal-img: transition: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1), transform 0.75s cubic-bezier(0.65, 0.05, 0, 1); transform: matrix(1.05, 0, 0, 1.05, 0, 0)
  - `img`.helmet-grid-item-reveal-img: transition: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1), transform 0.75s cubic-bezier(0.65, 0.05, 0, 1); transform: matrix(1.05, 0, 0, 1.05, 0, 0)
  - `img`.helmet-grid-item-reveal-img: transition: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1), transform 0.75s cubic-bezier(0.65, 0.05, 0, 1); transform: matrix(1.05, 0, 0, 1.05, 0, 0)
  - `img`.helmet-grid-item-reveal-img: transition: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1), transform 0.75s cubic-bezier(0.65, 0.05, 0, 1); transform: matrix(1.05, 0, 0, 1.05, 0, 0)
  - `img`.helmet-grid-item-reveal-img: transition: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1), transform 0.75s cubic-bezier(0.65, 0.05, 0, 1); transform: matrix(1.05, 0, 0, 1.05, 0, 0)
  - `img`.helmet-grid-item-reveal-img: transition: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1), transform 0.75s cubic-bezier(0.65, 0.05, 0, 1); transform: matrix(1.05, 0, 0, 1.05, 0, 0)
  - `img`.helmet-grid-item-reveal-img: transition: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1), transform 0.75s cubic-bezier(0.65, 0.05, 0, 1); transform: matrix(1.05, 0, 0, 1.05, 0, 0)
  - `img`.helmet-grid-item-reveal-img: transition: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1), transform 0.75s cubic-bezier(0.65, 0.05, 0, 1); transform: matrix(1.05, 0, 0, 1.05, 0, 0)
  - `img`.helmet-grid-item-reveal-img: transition: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1), transform 0.75s cubic-bezier(0.65, 0.05, 0, 1); transform: matrix(1.05, 0, 0, 1.05, 0, 0)
  - `img`.helmet-grid-item-reveal-img: transition: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1), transform 0.75s cubic-bezier(0.65, 0.05, 0, 1); transform: matrix(1.05, 0, 0, 1.05, 0, 0)
  - `img`.helmet-grid-item-reveal-img: transition: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1), transform 0.75s cubic-bezier(0.65, 0.05, 0, 1); transform: matrix(1.05, 0, 0, 1.05, 0, 0)
  - `img`.helmet-grid-item-reveal-img: transition: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1), transform 0.75s cubic-bezier(0.65, 0.05, 0, 1); transform: matrix(1.05, 0, 0, 1.05, 0, 0)
  - `img`.helmet-grid-item-reveal-img: transition: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1), transform 0.75s cubic-bezier(0.65, 0.05, 0, 1); transform: matrix(1.05, 0, 0, 1.05, 0, 0)
  - `img`.helmet-grid-item-reveal-img: transition: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1), transform 0.75s cubic-bezier(0.65, 0.05, 0, 1); transform: matrix(1.05, 0, 0, 1.05, 0, 0)
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all

### Element Style Blueprint

- **`<img>`** .helmet-grid-item-reveal-img
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1), transform 0.75s cubic-bezier(0.65, 0.05, 0, 1) | matrix(1.05, 0, 0, 1.05, 0, 0)
  - src: https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b24037a1e7681195c20_In-helm-2025-Discoball-hover.webp

- **`<img>`** .helmet-grid-item-reveal-img
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1), transform 0.75s cubic-bezier(0.65, 0.05, 0, 1) | matrix(1.05, 0, 0, 1.05, 0, 0)
  - src: https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305af56183c37dfd14ff3f_In-helm-2024-Season-hover.webp

- **`<img>`** .helmet-grid-item-reveal-img
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1), transform 0.75s cubic-bezier(0.65, 0.05, 0, 1) | matrix(1.05, 0, 0, 1.05, 0, 0)
  - src: https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305a9b1716264ea006064b_In-helm-2024-Japan-hover.webp

- **`<img>`** .helmet-grid-item-reveal-img
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1), transform 0.75s cubic-bezier(0.65, 0.05, 0, 1) | matrix(1.05, 0, 0, 1.05, 0, 0)
  - src: https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305a5cdaa389d0c080afc7_In-helm-2024-DarkMode-hover.webp

- **`<img>`** .helmet-grid-item-reveal-img
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1), transform 0.75s cubic-bezier(0.65, 0.05, 0, 1) | matrix(1.05, 0, 0, 1.05, 0, 0)
  - src: https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305a3053985f797745cdfc_In-helm-2023-Las%20Vegas-hover.webp

- **`<img>`** .helmet-grid-item-reveal-img
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1), transform 0.75s cubic-bezier(0.65, 0.05, 0, 1) | matrix(1.05, 0, 0, 1.05, 0, 0)
  - src: https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/683053fb6e004f8218de7f11_In-helm-2023-Beach%20Ball-hover.webp

- **`<img>`** .helmet-grid-item-reveal-img
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1), transform 0.75s cubic-bezier(0.65, 0.05, 0, 1) | matrix(1.05, 0, 0, 1.05, 0, 0)
  - src: https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b57817f019bc368a7b6_ln-helm-2021-hover.webp

- **`<img>`** .helmet-grid-item-reveal-img
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1), transform 0.75s cubic-bezier(0.65, 0.05, 0, 1) | matrix(1.05, 0, 0, 1.05, 0, 0)
  - src: https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/6830513c652a87f862917de3_In-helm-2019-hover.webp

- **`<img>`** .helmet-grid-item-reveal-img
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.172px | opacity: 1
  - anim: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1), transform 0.75s cubic-bezier(0.65, 0.05, 0, 1) | matrix(1.05, 0, 0, 1.05, 0, 0)
  - src: https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b411c575b2f777125f6_In-helm-2025-Season-hover.webp

- **`<img>`** .helmet-grid-item-reveal-img
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.172px | opacity: 1
  - anim: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1), transform 0.75s cubic-bezier(0.65, 0.05, 0, 1) | matrix(1.05, 0, 0, 1.05, 0, 0)
  - src: https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b03644c91f0a8de407b_In-helm-2025-DarkGlitter-hover.webp

- **`<img>`** .helmet-grid-item-reveal-img
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.172px | opacity: 1
  - anim: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1), transform 0.75s cubic-bezier(0.65, 0.05, 0, 1) | matrix(1.05, 0, 0, 1.05, 0, 0)
  - src: https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305ad3a594ec37bd1d32cb_In-helm-2024-Porcelain-hover.webp

- **`<img>`** .helmet-grid-item-reveal-img
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.172px | opacity: 1
  - anim: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1), transform 0.75s cubic-bezier(0.65, 0.05, 0, 1) | matrix(1.05, 0, 0, 1.05, 0, 0)
  - src: https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305a8e13a9b59a5e99cafe_In-helm-2024-GIF%20Helmet-hover.webp

- **`<img>`** .helmet-grid-item-reveal-img
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.172px | opacity: 1
  - anim: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1), transform 0.75s cubic-bezier(0.65, 0.05, 0, 1) | matrix(1.05, 0, 0, 1.05, 0, 0)
  - src: https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305a47417d51c0a58c28a6_In-helm-2023-Race%20100-hover.webp

- **`<img>`** .helmet-grid-item-reveal-img
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.172px | opacity: 1
  - anim: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1), transform 0.75s cubic-bezier(0.65, 0.05, 0, 1) | matrix(1.05, 0, 0, 1.05, 0, 0)
  - src: https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305a175a720573cbd3000f_In-helm-2023-Chrome-hover.webp

- **`<img>`** .helmet-grid-item-reveal-img
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.172px | opacity: 1
  - anim: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1), transform 0.75s cubic-bezier(0.65, 0.05, 0, 1) | matrix(1.05, 0, 0, 1.05, 0, 0)
  - src: https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/683052ab1073a33331767d2a_In-helm-2022-Basketball-hover.webp

- **`<img>`** .helmet-grid-item-reveal-img
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.172px | opacity: 1
  - anim: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1), transform 0.75s cubic-bezier(0.65, 0.05, 0, 1) | matrix(1.05, 0, 0, 1.05, 0, 0)
  - src: https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305223cddca8f1ea359a7a_In-helm-2020-Silverstone-hover.webp

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Discoball2025"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Season2024"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Japan2024"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Dark Mode2024"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Las Vegas2023"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Beachball2023"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Season2021"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Season2019"

- **`<div>`** .helmet-grid-item-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Discoball2025"

- **`<div>`** .helmet-grid-item-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Season2024"

- **`<div>`** .helmet-grid-item-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Japan2024"

- **`<div>`** .helmet-grid-item-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Dark Mode2024"

- **`<div>`** .helmet-grid-item-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Las Vegas2023"

- **`<div>`** .helmet-grid-item-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Beachball2023"

### HTML Structure

```html
<div data-helmet-grid="" role="list" class="helmet-grid w-dyn-items"><div role="listitem" class="helmet-grid-item-w w-dyn-item"><div class="helmet-grid-item-w"><div data-helmet-item="" class="helmet-grid-item"><div class="helmet-grid-frame-w destop"><div class="helmet-grid-frame is-overlay w-embed"><svg width="100%" height="100%" viewBox="0 0 407 411" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1h390.89a7 7 0 0 1 7 7v356.983a7 7 0 0 1-7 7H263.329a23.999 23.999 0 0 0-18.766 9.038l-16.499 20.694A21.999 21.999 0 0 1 210.862 410H8a7 7 0 0 1-7-7V8a7 7 0 0 1 7-7Z" stroke="var(--color--lime)" stroke-width="2"></path>
</svg></div><div class="helmet-grid-frame is-base w-embed"><svg width="100%" height="100%" viewBox="0 0 407 411" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 .5h390.89a7.5 7.5 0 0 1 7.5 7.5v356.983a7.5 7.5 0 0 1-7.5 7.5H263.329a23.502 23.502 0 0 0-18.375 8.849l-16.499 20.695a22.502 22.502 0 0 1-17.593 8.473H8A7.5 7.5 0 0 1 .5 403V8A7.5 7.5 0 0 1 8 .5Z" stroke="currentColor" stroke-width="2" vector-effect="non-scaling-stroke"></path>
</svg></div></div><div class="helmet-grid-frame-w mobile"><div class="helmet-grid-frame is-overlay w-embed"><svg width="100%" height="100%" viewBox="0 0 187 188" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 .5h170.12a7.5 7.5 0 0 1 7.5 7.5v154.61a7.5 7.5 0 0 1-7.5 7.5H60.681a10.5 10.5 0 0 0-8.21 3.954l-7.86 9.858a9.5 9.5 0 0 1-7.427 3.578H8A7.5 7.5 0 0 1 .5 180V8A7.5 7.5 0 0 1 8 .5Z" stroke="var(--color--lime)" stroke-width="2"></path></svg></div><div class="helmet-grid-frame is-base w-embed"><svg width="100%" height="100%" viewBox="0 0 187 188" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 .5h170.12a7.5 7.5 0 0 1 7.5 7.5v154.61a7.5 7.5 0 0 1-7.5 7.5H60.681a10.5 10.5 0 0 0-8.21 3.954l-7.86 9.858a9.5 9.5 0 0 1-7.427 3.578H8A7.5 7.5 0 0 1 .5 180V8A7.5 7.5 0 0 1 8 .5Z" stroke="currentColor" stroke-width="1"></path></svg></div></div><div class="helmet-grid-item-img-w"><div class="helmet-grid-item-img-helmet-w"><img src="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b3e6c7ab86033cf172c_In-helm-2025-Season-base.webp" loading="eager" alt="" sizes="100vw" srcset="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b3e6c7ab86033cf172c_In-helm-2025-Season-base-p-500.webp 500w, https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b3e6c7ab86033cf172c_In-helm-2025-Season-base-p-800.webp 800w, https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b3e6c7ab86033cf172c_In-helm-2025-Season-base.webp 823w" class="helmet-grid-item-img-helmet"></div><img src="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b411c575b2f777125f6_In-helm-2025-Season-hover.webp" loading="eager" alt="" sizes="100vw" srcset="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b411c575b2f777125f6_In-helm-2025-Season-hover-p-500.webp 500w, https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b411c575b2f777125f6_In-helm-2025-Season-hover.webp 823w" class="helmet-grid-item-reveal-img"></div></div><div class="helmet-grid-item-text-w"><h3 class="text-title-small-label text">Season</h3><div class="helmet-grid-item-date-w"><div class="text-title-small-label date">2025</div></div><div class="helmet-grid-extender"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e41c00f127bc68e2462635_ln4-2-helm-mask-extender-grey-fade.png" loading="eager" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e41c00f127bc68e2462635_ln4-2-helm-mask-extender-grey-fade-p-500.png 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e41c00f127bc68e2462635_ln4-2-helm-mask-extender-grey-fade.png 669w" alt="" class="helmet-grid-extender-img"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e41235ad69136bdc861b67_ln4-2-helm-mask-extender-lime-fade.png" loading="eager" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e41235ad69136bdc861b67_ln4-2-helm-mask-extender-lime-fade-p-500.png 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e41235ad69136bdc861b67_ln4-2-helm-mask-extender-lime-fade.png 669w" alt="" class="helmet-grid-extender-img is-overlay"></div></div></div></div><div role="listitem" class="helmet-grid-item-w w-dyn-item"><div class="helmet-grid-item-w"><div data-helmet-item="" class="helmet-grid-item"><div class="helmet-grid-frame-w destop"><div class="helmet-grid-frame is-overlay w-embed"><svg width="100%" height="100%" viewBox="0 0 407 411" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1h390.89a7 7 0 0 1 7 7v356.983a7 7 0 0 1-7 7H263.329a23.999 23.999 0 0 0-18.766 9.038l-16.499 20.694A21.999 21.999 0 0 1 210.862 410H8a7 7 0 0 1-7-7V8a7 7 0 0 1 7-7Z" stroke="var(--color--lime)" stroke-width="2"></path>
</svg></div><div class="helmet-grid-frame is-base w-embed"><svg width="100%" height="100%" viewBox="0 0 407 411" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 .5h390.89a7.5 7.5 0 0 1 7.5 7.5v356.983a7.5 7.5 0 0 1-7.5 7.5H263.329a23.502 23.502 0 0 0-18.375 8.849l-16.499 20.695a22.502 22.502 0 0 1-17.593 8.473H8A7.5 7.5 0 0 1 .5 403V8A7.5 7.5 0 0 1 8 .5Z" stroke="currentColor" stroke-width="2" vector-effect="non-scaling-stroke"></path>
</svg></div></div><div class="helmet-grid-frame-w mobile"><div class="helmet-grid-frame is-overlay w-embed"><svg width="100%" height="100%" viewBox="0 0 187 188" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 .5h170.12a7.5 7.5 0 0 1 7.5 7.5v154.61a7.5 7.5 0 0 1-7.5 7.5H60.681a10.5 10.5 0 0 0-8.21 3.954l-7.86 9.858a9.5 9.5 0 0 1-7.427 3.578H8A7.5 7.5 0 0 1 .5 180V8A7.5 7.5 0 0 1 8 .5Z" stroke="var(--color--lime)" stroke-width="2"></path></svg></div><div class="helmet-grid-frame is-base w-embed"><svg width="100%" height="100%" viewBox="0 0 187 188" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 .5h170.12a7.5 7.5 0 0 1 7.5 7.5v154.61a7.5 7.5 0 0 1-7.5 7.5H60.681a10.5 10.5 0 0 0-8.21 3.954l-7.86 9.858a9.5 9.5 0 0 1-7.427 3.578H8A7.5 7.5 0 0 1 .5 180V8A7.5 7.5 0 0 1 8 .5Z" stroke="currentColor" stroke-width="1"></path></svg></div></div><div class="helmet-grid-item-img-w"><div class="helmet-grid-item-img-helmet-w"><img src="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b2259159e5170d2b923_In-helm-2025-Discoball-base.webp" loading="eager" alt="" sizes="100vw" srcset="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b2259159e5170d2b923_In-helm-2025-Discoball-base-p-500.webp 500w, https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b2259159e5170d2b923_In-helm-2025-Discoball-base-p-800.webp 800w, https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b2259159e5170d2b923_In-helm-2025-Discoball-base.webp 823w" class="helmet-grid-item-img-helmet"></div><img src="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b24037a1e7681195c20_In-helm-2025-Discoball-hover.webp" loading="eager" alt="" sizes="100vw" srcset="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b24037a1e7681195c20_In-helm-2025-Discoball-hover-p-500.webp 500w, https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b24037a1e7681195c20_In-helm-2025-Discoball-hover-p-800.webp 800w, https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b24037a1e7681195c20_In-helm-2025-Discoball-hover.webp 823w" class="helmet-grid-item-reveal-img"></div></div><div class="helmet-grid-item-text-w"><h3 class="text-title-small-label text">Discoball</h3><div class="helmet-grid-item-date-w"><div class="text-title-small-label date">2025</div></div><div class="helmet-grid-extender"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e41c00f127bc68e2462635_ln4-2-helm-mask-extender-grey-fade.png" loading="eager" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e41c00f127bc68e2462635_ln4-2-helm-mask-extender-grey-fade-p-500.png 50
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 33: Hero
- **Confidence:** 15%
- **Tag:** div
- **Classes:** `callout-socials-inner`
- **Size:** 857px height
- **Headings:** H2: "what’s upOn Socials"
- **CTAs:** tiktok, instagram, Youtube, Twitch
- **Media:** 7 image(s), 1 canvas(es)
- **Flex:** direction: row, wrap: nowrap, gap: normal
- **Align items:** center
- **Justify:** center
- **Animations:**
  - `div`.callout-socials-layout: transition: all
  - `div`.callout-socials-card-layout: transition: all
  - `div`.callout-socials-card-w: transition: all
  - `div`.callout-socials-card-w: transition: all
  - `div`.callout-socials-card-w: transition: all
  - `div`.callout-socials-card-w: transition: all
  - `div`.callout-socials-card-w: transition: all
  - `div`.callout-socials-card-w: transition: all
  - `div`.callout-socials-card-w: transition: all
  - `div`.video-stream: transition: all
  - `div`.video-stream: transition: all
  - `div`.video-stream: transition: all
  - `div`.video-stream: transition: all
  - `div`.video-stream: transition: all
  - `div`.video-stream: transition: all
  - `div`.video-stream: transition: all
  - `img`.image: transition: all
  - `img`.image: transition: all
  - `img`.image: transition: all
  - `img`.image: transition: all
  - `img`.image: transition: all
  - `img`.image: transition: all
  - `img`.image: transition: all
  - `h2`.text-title-lg-mona: transition: all
  - `span`.span-font-brier: transition: all
  - `span`: transition: all
  - `div`.callout-socials-intro-w: transition: all
  - `div`.text-cta-short-intro: transition: all
  - `div`.callout-socials-links-layout: transition: all
  - `div`.callout-socials-rive-w: transition: all

### Element Style Blueprint

- **`<div>`** .callout-socials-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | border: 0px none rgb(17, 17, 18) | display: flex | width: 1406.69px | opacity: 1
  - anim: all
  - text: "what’s upOn SocialsFollow Lando on social mediatiktokinstagramYoutubeTwitch"

- **`<div>`** .callout-socials-card-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | border: 0px none rgb(17, 17, 18) | display: flex | width: 1066.66px | opacity: 1
  - anim: all

- **`<div>`** .callout-socials-card-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | radius: 44.2167px | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<div>`** .callout-socials-card-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | radius: 44.2167px | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<div>`** .callout-socials-card-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | radius: 44.2167px | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<div>`** .callout-socials-card-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | radius: 44.2167px | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<div>`** .callout-socials-card-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | radius: 44.2167px | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<div>`** .callout-socials-card-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | radius: 44.2167px | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<div>`** .callout-socials-card-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | radius: 44.2167px | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<div>`** .video-stream
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | bg: rgb(0, 0, 0) | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<div>`** .video-stream
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | bg: rgb(0, 0, 0) | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<div>`** .video-stream
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | bg: rgb(0, 0, 0) | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<div>`** .video-stream
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | bg: rgb(0, 0, 0) | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<div>`** .video-stream
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | bg: rgb(0, 0, 0) | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<div>`** .video-stream
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | bg: rgb(0, 0, 0) | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<div>`** .video-stream
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | bg: rgb(0, 0, 0) | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<img>`** .image.is-social-card
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba846e593e52541fb7a8_Lando-6-on-track.webp

- **`<img>`** .image.is-social-card
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/6830302d42237886d0c4b24c_ln-social-img-2.webp

- **`<img>`** .image.is-social-card
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba8463e72a95c2d8a0ba_Lando-4-off-track.webp

- **`<img>`** .image.is-social-card
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba848fb98d1ca68eb6c8_Lando-5-off-track.webp

- **`<img>`** .image.is-social-card
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba8449f0506fbaad037b_Lano-5-on-track.webp

- **`<img>`** .image.is-social-card
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/6830302dadd0727e6ac034dd_ln-social-img-6.webp

- **`<img>`** .image.is-social-card
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba83f162f4d2f4e78442_Lando-6-off-track.webp

- **`<h2>`** .text-title-lg-mona.split-flex
  - font: 60px 700 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 53.16px | ls: -1.66667px | text-transform: uppercase | text-align: center | border: 0px none rgb(17, 17, 18) | display: flex | width: 321.5px | opacity: 1
  - anim: all
  - text: "what’s upOn Socials"

- **`<span>`** .span-font-brier
  - font: 60px 700 Brier, Arial, sans-serif | color: rgb(17, 17, 18) | lh: 53.16px | ls: -1.66667px | text-transform: uppercase | text-align: center | border: 0px none rgb(17, 17, 18) | display: block | width: 321.5px | opacity: 1
  - anim: all
  - text: "On Socials"

- **`<span>`**
  - font: 60px 700 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 53.16px | ls: -1.66667px | text-transform: uppercase | text-align: center | border: 0px none rgb(17, 17, 18) | display: block | width: 291.281px | opacity: 1
  - anim: all
  - text: "what’s up"

- **`<div>`** .callout-socials-intro-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | border: 0px none rgb(17, 17, 18) | display: block | width: 380.656px | margin: 50px 0px 0px | opacity: 1
  - anim: all
  - text: "Follow Lando on social media"

- **`<div>`** .text-cta-short-intro.font-brier
  - font: 26.6667px 400 Brier, Arial, sans-serif | color: rgb(17, 17, 18) | lh: 27.7333px | ls: 0.666667px | text-align: center | border: 0px none rgb(17, 17, 18) | display: block | width: 380.656px | opacity: 1
  - anim: all
  - text: "Follow Lando on social media"

- **`<div>`** .callout-socials-links-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | border: 0px none rgb(17, 17, 18) | display: flex | width: 279.734px | opacity: 1
  - anim: all
  - text: "tiktokinstagramYoutubeTwitch"

- **`<div>`** .callout-socials-rive-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | border: 0px none rgb(17, 17, 18) | display: block | width: 46.6562px | opacity: 1
  - anim: all

### HTML Structure

```html
<div class="callout-socials-inner"><div class="callout-socials-layout"><div class="callout-socials-rive-w"><div class="callout-icon icon-ball w-embed"><canvas data-rive-object="" data-rive-file="reef" data-rive-artboard="off-icons" data-rive-state-machine="off-icons" data-rive-input="color_green-off-white-2" data-rive-fit="contain" data-rive-scrolltrigger-target="" data-rive-scrolltrigger-start="" data-rive-scrolltrigger-end="">
</canvas></div></div><h2 data-oval-scroll="" split-text="lines" class="text-title-lg-mona split-flex is-center"><span>what’s up</span><span class="span-font-brier">On Socials</span></h2><div data-social-callout="wrap" class="callout-socials-card-layout"><div data-video-stream-wrap="" class="callout-socials-card-w"><div data-stream-hover="true" data-video-stream="" data-stream-url="824804225" data-stream-muted="true" data-stream-loop="true" data-stream-autoplay="true" class="video-stream"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba846e593e52541fb7a8_Lando-6-on-track.webp" loading="eager" data-video-stream-placeholder="" alt="" sizes="(max-width: 767px) 100vw, 637.9948120117188px" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba846e593e52541fb7a8_Lando-6-on-track-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba846e593e52541fb7a8_Lando-6-on-track-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba846e593e52541fb7a8_Lando-6-on-track.webp 1080w" class="image is-social-card"></div></div><div data-video-stream-wrap="" class="callout-socials-card-w"><div data-stream-hover="true" data-video-stream="" data-stream-url="824804225" data-stream-muted="true" data-stream-loop="true" data-stream-autoplay="true" class="video-stream"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/6830302d42237886d0c4b24c_ln-social-img-2.webp" loading="eager" data-video-stream-placeholder="" alt="" sizes="(max-width: 767px) 100vw, 637.9948120117188px" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/6830302d42237886d0c4b24c_ln-social-img-2-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/6830302d42237886d0c4b24c_ln-social-img-2.webp 638w" class="image is-social-card"></div></div><div data-video-stream-wrap="" class="callout-socials-card-w"><div data-stream-hover="true" data-video-stream="" data-stream-url="824804225" data-stream-muted="true" data-stream-loop="true" data-stream-autoplay="true" class="video-stream"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba8463e72a95c2d8a0ba_Lando-4-off-track.webp" loading="eager" data-video-stream-placeholder="" alt="" sizes="(max-width: 767px) 100vw, 637.9948120117188px" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba8463e72a95c2d8a0ba_Lando-4-off-track-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba8463e72a95c2d8a0ba_Lando-4-off-track-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba8463e72a95c2d8a0ba_Lando-4-off-track.webp 1080w" class="image is-social-card"></div></div><div data-video-stream-wrap="" class="callout-socials-card-w"><div data-stream-hover="true" data-video-stream="" data-stream-url="824804225" data-stream-muted="true" data-stream-loop="true" data-stream-autoplay="true" class="video-stream"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba848fb98d1ca68eb6c8_Lando-5-off-track.webp" loading="eager" data-video-stream-placeholder="" alt="" sizes="(max-width: 767px) 100vw, 637.9948120117188px" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba848fb98d1ca68eb6c8_Lando-5-off-track-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba848fb98d1ca68eb6c8_Lando-5-off-track-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba848fb98d1ca68eb6c8_Lando-5-off-track.webp 1080w" class="image is-social-card"></div></div><div data-video-stream-wrap="" class="callout-socials-card-w"><div data-stream-hover="true" data-video-stream="" data-stream-url="824804225" data-stream-muted="true" data-stream-loop="true" data-stream-autoplay="true" class="video-stream"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba8449f0506fbaad037b_Lano-5-on-track.webp" loading="eager" data-video-stream-placeholder="" alt="" sizes="(max-width: 767px) 100vw, 637.9948120117188px" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba8449f0506fbaad037b_Lano-5-on-track-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba8449f0506fbaad037b_Lano-5-on-track-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba8449f0506fbaad037b_Lano-5-on-track.webp 1080w" class="image is-social-card"></div></div><div data-video-stream-wrap="" class="callout-socials-card-w"><div data-stream-hover="true" data-video-stream="" data-stream-url="824804225" data-stream-muted="true" data-stream-loop="true" data-stream-autoplay="true" class="video-stream"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/6830302dadd0727e6ac034dd_ln-social-img-6.webp" loading="eager" data-video-stream-placeholder="" alt="" sizes="(max-width: 767px) 100vw, 637.9948120117188px" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/6830302dadd0727e6ac034dd_ln-social-img-6-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/6830302dadd0727e6ac034dd_ln-social-img-6.webp 637w" class="image is-social-card"></div></div><div data-video-stream-wrap="" class="callout-socials-card-w"><div data-stream-hover="true" data-video-stream="" data-stream-url="824804225" data-stream-muted="true" data-stream-loop="true" data-stream-autoplay="true" class="video-stream"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba83f162f4d2f4e78442_Lando-6-off-track.webp" loading="eager" data-video-stream-placeholder="" alt="" sizes="(max-width: 767px) 100vw, 637.9948120117188px" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba83f162f4d2f4e78442_Lando-6-off-track-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba83f162f4d2f4e78442_Lando-6-off-track-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba83f162f4d2f4e78442_Lando-6-off-track.webp 1080w" class="image is-social-card"></div></div></div><div class="callout-socials-intro-w"><div data-anim-high="right, dark-green-tint-1" split-text="lines" class="text-cta-short-intro font-brier">Follow Lando on social media</div></div><div class="callout-socials-links-layout"><a data-anim="text-hover" href="https://www.tiktok.com/@landonorris" target="_blank" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, dark-green-tint-1" split-text="lines,chars" class="btn-text">tiktok</div></div></a><a data-anim="text-hover" href="https://www.instagram.com/lando" target="_blank" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, dark-green-tint-1" split-text="lines,chars" class="btn-text">instagram</div></div></a><a data-anim="text-hover" href="https://www.youtube.com/@LandoNorris" target="_blank" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, dark-green-tint-1" split-text="lines,chars" class="btn-text">Youtube</div></div></a><a data-anim="text-hover" href="https://www.twitch.tv/landonorris" target="_blank" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, dark-green-tint-1" split-text="lines,chars" class="btn-text">Twitch</div></div></a></div></div></div>
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 34: Hero
- **Confidence:** 15%
- **Tag:** div
- **Classes:** `callout-socials-layout`
- **Size:** 857px height
- **Headings:** H2: "what’s upOn Socials"
- **CTAs:** tiktok, instagram, Youtube, Twitch
- **Media:** 7 image(s), 1 canvas(es)
- **Flex:** direction: column, wrap: nowrap, gap: 33.3333px
- **Align items:** center
- **Justify:** flex-start
- **Animations:**
  - `div`.callout-socials-card-layout: transition: all
  - `div`.callout-socials-card-w: transition: all
  - `div`.callout-socials-card-w: transition: all
  - `div`.callout-socials-card-w: transition: all
  - `div`.callout-socials-card-w: transition: all
  - `div`.callout-socials-card-w: transition: all
  - `div`.callout-socials-card-w: transition: all
  - `div`.callout-socials-card-w: transition: all
  - `div`.video-stream: transition: all
  - `div`.video-stream: transition: all
  - `div`.video-stream: transition: all
  - `div`.video-stream: transition: all
  - `div`.video-stream: transition: all
  - `div`.video-stream: transition: all
  - `div`.video-stream: transition: all
  - `img`.image: transition: all
  - `img`.image: transition: all
  - `img`.image: transition: all
  - `img`.image: transition: all
  - `img`.image: transition: all
  - `img`.image: transition: all
  - `img`.image: transition: all
  - `h2`.text-title-lg-mona: transition: all
  - `span`.span-font-brier: transition: all
  - `span`: transition: all
  - `div`.callout-socials-intro-w: transition: all
  - `div`.text-cta-short-intro: transition: all
  - `div`.callout-socials-links-layout: transition: all
  - `div`.callout-socials-rive-w: transition: all
  - `div`.callout-icon: transition: all

### Element Style Blueprint

- **`<div>`** .callout-socials-card-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | border: 0px none rgb(17, 17, 18) | display: flex | width: 1066.66px | opacity: 1
  - anim: all

- **`<div>`** .callout-socials-card-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | radius: 44.2167px | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<div>`** .callout-socials-card-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | radius: 44.2167px | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<div>`** .callout-socials-card-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | radius: 44.2167px | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<div>`** .callout-socials-card-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | radius: 44.2167px | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<div>`** .callout-socials-card-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | radius: 44.2167px | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<div>`** .callout-socials-card-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | radius: 44.2167px | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<div>`** .callout-socials-card-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | radius: 44.2167px | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<div>`** .video-stream
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | bg: rgb(0, 0, 0) | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<div>`** .video-stream
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | bg: rgb(0, 0, 0) | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<div>`** .video-stream
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | bg: rgb(0, 0, 0) | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<div>`** .video-stream
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | bg: rgb(0, 0, 0) | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<div>`** .video-stream
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | bg: rgb(0, 0, 0) | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<div>`** .video-stream
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | bg: rgb(0, 0, 0) | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<div>`** .video-stream
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | bg: rgb(0, 0, 0) | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<img>`** .image.is-social-card
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba846e593e52541fb7a8_Lando-6-on-track.webp

- **`<img>`** .image.is-social-card
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/6830302d42237886d0c4b24c_ln-social-img-2.webp

- **`<img>`** .image.is-social-card
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba8463e72a95c2d8a0ba_Lando-4-off-track.webp

- **`<img>`** .image.is-social-card
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba848fb98d1ca68eb6c8_Lando-5-off-track.webp

- **`<img>`** .image.is-social-card
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba8449f0506fbaad037b_Lano-5-on-track.webp

- **`<img>`** .image.is-social-card
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/6830302dadd0727e6ac034dd_ln-social-img-6.webp

- **`<img>`** .image.is-social-card
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba83f162f4d2f4e78442_Lando-6-off-track.webp

- **`<h2>`** .text-title-lg-mona.split-flex
  - font: 60px 700 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 53.16px | ls: -1.66667px | text-transform: uppercase | text-align: center | border: 0px none rgb(17, 17, 18) | display: flex | width: 321.5px | opacity: 1
  - anim: all
  - text: "what’s upOn Socials"

- **`<span>`** .span-font-brier
  - font: 60px 700 Brier, Arial, sans-serif | color: rgb(17, 17, 18) | lh: 53.16px | ls: -1.66667px | text-transform: uppercase | text-align: center | border: 0px none rgb(17, 17, 18) | display: block | width: 321.5px | opacity: 1
  - anim: all
  - text: "On Socials"

- **`<span>`**
  - font: 60px 700 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 53.16px | ls: -1.66667px | text-transform: uppercase | text-align: center | border: 0px none rgb(17, 17, 18) | display: block | width: 291.281px | opacity: 1
  - anim: all
  - text: "what’s up"

- **`<div>`** .callout-socials-intro-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | border: 0px none rgb(17, 17, 18) | display: block | width: 380.656px | margin: 50px 0px 0px | opacity: 1
  - anim: all
  - text: "Follow Lando on social media"

- **`<div>`** .text-cta-short-intro.font-brier
  - font: 26.6667px 400 Brier, Arial, sans-serif | color: rgb(17, 17, 18) | lh: 27.7333px | ls: 0.666667px | text-align: center | border: 0px none rgb(17, 17, 18) | display: block | width: 380.656px | opacity: 1
  - anim: all
  - text: "Follow Lando on social media"

- **`<div>`** .callout-socials-links-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | border: 0px none rgb(17, 17, 18) | display: flex | width: 279.734px | opacity: 1
  - anim: all
  - text: "tiktokinstagramYoutubeTwitch"

- **`<div>`** .callout-socials-rive-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | border: 0px none rgb(17, 17, 18) | display: block | width: 46.6562px | opacity: 1
  - anim: all

- **`<div>`** .callout-icon.icon-ball
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(210, 255, 0) | lh: 20px | text-align: center | border: 0px none rgb(210, 255, 0) | display: flex | width: 46.6562px | opacity: 1
  - anim: all

### HTML Structure

```html
<div class="callout-socials-layout"><div class="callout-socials-rive-w"><div class="callout-icon icon-ball w-embed"><canvas data-rive-object="" data-rive-file="reef" data-rive-artboard="off-icons" data-rive-state-machine="off-icons" data-rive-input="color_green-off-white-2" data-rive-fit="contain" data-rive-scrolltrigger-target="" data-rive-scrolltrigger-start="" data-rive-scrolltrigger-end="">
</canvas></div></div><h2 data-oval-scroll="" split-text="lines" class="text-title-lg-mona split-flex is-center"><span>what’s up</span><span class="span-font-brier">On Socials</span></h2><div data-social-callout="wrap" class="callout-socials-card-layout"><div data-video-stream-wrap="" class="callout-socials-card-w"><div data-stream-hover="true" data-video-stream="" data-stream-url="824804225" data-stream-muted="true" data-stream-loop="true" data-stream-autoplay="true" class="video-stream"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba846e593e52541fb7a8_Lando-6-on-track.webp" loading="eager" data-video-stream-placeholder="" alt="" sizes="(max-width: 767px) 100vw, 637.9948120117188px" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba846e593e52541fb7a8_Lando-6-on-track-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba846e593e52541fb7a8_Lando-6-on-track-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba846e593e52541fb7a8_Lando-6-on-track.webp 1080w" class="image is-social-card"></div></div><div data-video-stream-wrap="" class="callout-socials-card-w"><div data-stream-hover="true" data-video-stream="" data-stream-url="824804225" data-stream-muted="true" data-stream-loop="true" data-stream-autoplay="true" class="video-stream"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/6830302d42237886d0c4b24c_ln-social-img-2.webp" loading="eager" data-video-stream-placeholder="" alt="" sizes="(max-width: 767px) 100vw, 637.9948120117188px" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/6830302d42237886d0c4b24c_ln-social-img-2-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/6830302d42237886d0c4b24c_ln-social-img-2.webp 638w" class="image is-social-card"></div></div><div data-video-stream-wrap="" class="callout-socials-card-w"><div data-stream-hover="true" data-video-stream="" data-stream-url="824804225" data-stream-muted="true" data-stream-loop="true" data-stream-autoplay="true" class="video-stream"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba8463e72a95c2d8a0ba_Lando-4-off-track.webp" loading="eager" data-video-stream-placeholder="" alt="" sizes="(max-width: 767px) 100vw, 637.9948120117188px" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba8463e72a95c2d8a0ba_Lando-4-off-track-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba8463e72a95c2d8a0ba_Lando-4-off-track-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba8463e72a95c2d8a0ba_Lando-4-off-track.webp 1080w" class="image is-social-card"></div></div><div data-video-stream-wrap="" class="callout-socials-card-w"><div data-stream-hover="true" data-video-stream="" data-stream-url="824804225" data-stream-muted="true" data-stream-loop="true" data-stream-autoplay="true" class="video-stream"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba848fb98d1ca68eb6c8_Lando-5-off-track.webp" loading="eager" data-video-stream-placeholder="" alt="" sizes="(max-width: 767px) 100vw, 637.9948120117188px" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba848fb98d1ca68eb6c8_Lando-5-off-track-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba848fb98d1ca68eb6c8_Lando-5-off-track-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba848fb98d1ca68eb6c8_Lando-5-off-track.webp 1080w" class="image is-social-card"></div></div><div data-video-stream-wrap="" class="callout-socials-card-w"><div data-stream-hover="true" data-video-stream="" data-stream-url="824804225" data-stream-muted="true" data-stream-loop="true" data-stream-autoplay="true" class="video-stream"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba8449f0506fbaad037b_Lano-5-on-track.webp" loading="eager" data-video-stream-placeholder="" alt="" sizes="(max-width: 767px) 100vw, 637.9948120117188px" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba8449f0506fbaad037b_Lano-5-on-track-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba8449f0506fbaad037b_Lano-5-on-track-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba8449f0506fbaad037b_Lano-5-on-track.webp 1080w" class="image is-social-card"></div></div><div data-video-stream-wrap="" class="callout-socials-card-w"><div data-stream-hover="true" data-video-stream="" data-stream-url="824804225" data-stream-muted="true" data-stream-loop="true" data-stream-autoplay="true" class="video-stream"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/6830302dadd0727e6ac034dd_ln-social-img-6.webp" loading="eager" data-video-stream-placeholder="" alt="" sizes="(max-width: 767px) 100vw, 637.9948120117188px" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/6830302dadd0727e6ac034dd_ln-social-img-6-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/6830302dadd0727e6ac034dd_ln-social-img-6.webp 637w" class="image is-social-card"></div></div><div data-video-stream-wrap="" class="callout-socials-card-w"><div data-stream-hover="true" data-video-stream="" data-stream-url="824804225" data-stream-muted="true" data-stream-loop="true" data-stream-autoplay="true" class="video-stream"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba83f162f4d2f4e78442_Lando-6-off-track.webp" loading="eager" data-video-stream-placeholder="" alt="" sizes="(max-width: 767px) 100vw, 637.9948120117188px" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba83f162f4d2f4e78442_Lando-6-off-track-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba83f162f4d2f4e78442_Lando-6-off-track-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba83f162f4d2f4e78442_Lando-6-off-track.webp 1080w" class="image is-social-card"></div></div></div><div class="callout-socials-intro-w"><div data-anim-high="right, dark-green-tint-1" split-text="lines" class="text-cta-short-intro font-brier">Follow Lando on social media</div></div><div class="callout-socials-links-layout"><a data-anim="text-hover" href="https://www.tiktok.com/@landonorris" target="_blank" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, dark-green-tint-1" split-text="lines,chars" class="btn-text">tiktok</div></div></a><a data-anim="text-hover" href="https://www.instagram.com/lando" target="_blank" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, dark-green-tint-1" split-text="lines,chars" class="btn-text">instagram</div></div></a><a data-anim="text-hover" href="https://www.youtube.com/@LandoNorris" target="_blank" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, dark-green-tint-1" split-text="lines,chars" class="btn-text">Youtube</div></div></a><a data-anim="text-hover" href="https://www.twitch.tv/landonorris" target="_blank" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, dark-green-tint-1" split-text="lines,chars" class="btn-text">Twitch</div></div></a></div></div>
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 35: Footer
- **Confidence:** 40%
- **Tag:** div
- **Classes:** `footer-layout-w`
- **Size:** 747px height
- **Headings:** H2: "Always bringing the fight."
- **CTAs:** Home, On Track, Off Track, Partnerships, Calendar
- **Media:** 10 image(s), 2 canvas(es), 8 SVG(s)
- **Animations:**
  - `div`.footer-layout-clip: transition: all
  - `div`.footer-inner-layout: transition: all
  - `div`.footer-bg-pattern-w: transition: all
  - `img`.image: transition: all
  - `div`.footer-bg-helmet-w: transition: all
  - `div`.footer-bg-helmet-layout: transition: all
  - `img`.footer-bg-img: transition: all
  - `div`.footer-links-w: transition: all
  - `div`.footer-statement-w: transition: all
  - `div`.footer-statement-layout: transition: all
  - `h2`.text-impact-sm-mona: transition: all
  - `div`.footer-marquee: transition: all
  - `div`.marquee-adv-row: transition: all
  - `div`.marquee-adv-scroll: transition: all
  - `div`.footer-links-col: transition: all
  - `div`.footer-links-col: transition: all
  - `div`.footer-rive-w: transition: all
  - `div`.footer-legal-links-w: transition: all
  - `div`.footer-links-layout: transition: all
  - `div`.footer-links-layout: transition: all
  - `div`.footer-bg-bottom-btn-w: transition: all
  - `div`.footer-legal-links-col: transition: all
  - `div`.text-title-small-label: transition: all
  - `div`.footer-legal-links-col: transition: all
  - `span`.text-title-small-label: transition: all
  - `a`.text-link-w: transition: all
  - `div`.text-clip-w: transition: all
  - `div`.btn-text: transition: all
  - `a`.text-link-w: transition: all
  - `a`.text-link-w: transition: all

### Element Style Blueprint

- **`<div>`** .footer-layout-clip
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | bg: rgb(40, 44, 32) | border: 0px none rgb(244, 244, 237) | display: block | width: 1406.69px | opacity: 1
  - anim: all
  - text: "pagesHomeOn TrackOff TrackPartnershipsCalendarStoreFollow OnTiktokInstagramYoutubeTwitchSign Up Always bringing the fight.business enquiries"

- **`<div>`** .footer-inner-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1406.69px | opacity: 1
  - anim: all
  - text: "pagesHomeOn TrackOff TrackPartnershipsCalendarStoreFollow OnTiktokInstagramYoutubeTwitchSign Up Always bringing the fight.business enquiries"

- **`<div>`** .footer-bg-pattern-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1406.69px | opacity: 0.12
  - anim: all

- **`<img>`** .image
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: inline-block | width: 1406.69px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67dbeba158707fa1cd5e5e45_blobs_footer_1.svg

- **`<div>`** .footer-bg-helmet-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1406.69px | opacity: 1
  - anim: all
  - text: "business enquiries"

- **`<div>`** .footer-bg-helmet-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 650px | opacity: 1
  - anim: all
  - text: "business enquiries"

- **`<img>`** .footer-bg-img
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 650px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d43d6e276c436a378a1da6_ln-360-helm-1.webp

- **`<div>`** .footer-links-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1406.69px | padding: 0px 170.667px | margin: 385.047px 0px 186.667px | opacity: 1
  - anim: all
  - text: "pagesHomeOn TrackOff TrackPartnershipsCalendarStoreFollow OnTiktokInstagramYoutubeTwitchSign Up"

- **`<div>`** .footer-statement-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: center | border: 0px none rgb(244, 244, 237) | display: flex | width: 1406.69px | opacity: 1
  - anim: all
  - text: "Always bringing the fight."

- **`<div>`** .footer-statement-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: center | border: 0px none rgb(244, 244, 237) | display: flex | width: 640px | margin: 0px 383.344px | opacity: 1
  - anim: all
  - text: "Always bringing the fight."

- **`<h2>`** .text-impact-sm-mona.footer
  - font: 70px 700 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 59.92px | ls: -0.0625px | text-transform: uppercase | text-align: center | border: 0px none rgb(244, 244, 237) | display: block | width: 640px | opacity: 1
  - anim: all
  - text: "Always bringing the fight."

- **`<div>`** .footer-marquee
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1406.69px | opacity: 1
  - anim: all

- **`<div>`** .marquee-adv-row
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1406.69px | opacity: 1
  - anim: all

- **`<div>`** .marquee-adv-scroll
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1406.69px | opacity: 1
  - anim: all

- **`<div>`** .footer-links-col
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 125.531px | opacity: 1
  - anim: all
  - text: "Follow OnTiktokInstagramYoutubeTwitchSign Up"

- **`<div>`** .footer-links-col
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 115.703px | opacity: 1
  - anim: all
  - text: "pagesHomeOn TrackOff TrackPartnershipsCalendarStore"

- **`<div>`** .footer-rive-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: center | border: 0px none rgb(244, 244, 237) | display: block | width: 174.156px | opacity: 1
  - anim: all

- **`<div>`** .footer-legal-links-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 1406.69px | opacity: 1
  - anim: all
  - text: "© 2026 Lando Norris. All rights reservedPrivacy PolicyTerms"

- **`<div>`** .footer-links-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 125.531px | margin: 13.3333px 0px 26.6667px | opacity: 1
  - anim: all
  - text: "TiktokInstagramYoutubeTwitch"

- **`<div>`** .footer-links-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 115.703px | margin: 13.3333px 0px 26.6667px | opacity: 1
  - anim: all
  - text: "HomeOn TrackOff TrackPartnershipsCalendar"

- **`<div>`** .footer-bg-bottom-btn-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 170.953px | opacity: 1
  - anim: all
  - text: "business enquiries"

- **`<div>`** .footer-legal-links-col
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 191.688px | opacity: 1
  - anim: all
  - text: "© 2026 Lando Norris. All rights reserved"

- **`<div>`** .text-title-small-label
  - font: 10px 600 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 12.5px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 191.688px | opacity: 1
  - anim: all
  - text: "© 2026 Lando Norris. All rights reserved"

- **`<div>`** .footer-legal-links-col
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 147.344px | opacity: 1
  - anim: all
  - text: "Privacy PolicyTerms"

- **`<span>`** .text-title-small-label.bold
  - font: 10px 800 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 12.5px | text-align: start | border: 0px none rgb(40, 44, 32) | display: inline | opacity: 1
  - anim: all
  - text: "© 2026 Lando Norris."

- **`<a>`** .text-link-w.w-inline-block
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 92.4688px | opacity: 1
  - anim: all
  - href: https://landonorris.com/legal/privacy-policy
  - text: "Privacy Policy"

- **`<div>`** .text-clip-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 92.4688px | opacity: 1
  - anim: all
  - text: "Privacy Policy"

- **`<div>`** .btn-text
  - font: 13.3333px 800 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 13.3333px | text-transform: uppercase | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 92.4688px | opacity: 1
  - anim: all
  - text: "Privacy Policy"

- **`<a>`** .text-link-w.c-lime
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(210, 255, 0) | lh: 20px | text-align: start | border: 0px none rgb(210, 255, 0) | display: block | width: 56.4375px | opacity: 0
  - anim: all
  - href: https://landonorris.com/#
  - text: "Sign Up"

- **`<a>`** .text-link-w.c-lime
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(210, 255, 0) | lh: 20px | text-align: start | border: 0px none rgb(210, 255, 0) | display: block | width: 45.2344px | opacity: 1
  - anim: all
  - href: https://store.landonorris.com/
  - text: "Store"

### HTML Structure

```html
<div class="footer-layout-w"><div data-nav-theme-target="light" class="footer-layout-clip"><div class="footer-inner-layout"><div class="footer-links-w"><div class="footer-links-col"><div class="eyebrow-w c-green-off-white-2"><div class="text-eyebrow">pages</div></div><div class="footer-links-layout"><a data-anim="text-hover" href="/" aria-current="page" class="text-link-w w-inline-block w--current"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">Home</div></div></a><a data-anim="text-hover" href="/on-track" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">On Track</div></div></a><a data-anim="text-hover" href="/off-track" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">Off Track</div></div></a><a data-anim="text-hover" href="/partnerships" class="text-link-w display-none w-inline-block"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">Partnerships</div></div></a><a data-anim="text-hover" href="/calendar" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">Calendar</div></div></a></div><a data-anim="text-hover" href="https://store.landonorris.com/" target="_blank" class="text-link-w c-lime w-inline-block"><div class="text-clip-w"><div data-anim-high="right, dark-green-tint-1" split-text="lines,chars" class="btn-text is-nav">Store</div></div></a></div><div class="footer-links-col"><div class="eyebrow-w c-green-off-white-2"><div class="text-eyebrow">Follow On</div></div><div class="footer-links-layout"><a data-anim="text-hover" href="https://www.tiktok.com/@landonorris" target="_blank" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">Tiktok</div></div></a><a data-anim="text-hover" href="https://www.instagram.com/lando" target="_blank" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">Instagram</div></div></a><a data-anim="text-hover" href="https://www.youtube.com/@LandoNorris" target="_blank" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">Youtube</div></div></a><a data-anim="text-hover" href="https://www.twitch.tv/landonorris" target="_blank" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">Twitch</div></div></a></div><a data-signup-trigger="" data-anim="text-hover" href="#" class="text-link-w c-lime is-hidden w-inline-block"><div class="text-clip-w"><div data-anim-high="right, dark-green-tint-1" split-text="lines,chars" class="btn-text is-nav">Sign&nbsp;Up</div></div></a></div></div><div class="footer-statement-w"><div class="footer-statement-layout"><div class="footer-rive-w"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d443bc774ddcd37b3d8d4d_ln4-footer-rive-placeholder.svg" loading="eager" data-rive-placeholder="" alt="" class="image is-footer-rive"><div class="marquee-gl-rive-w w-embed"><canvas data-rive-object="" data-rive-file="signature" data-rive-artboard="signature" data-rive-state-machine="signature_play" data-rive-input="color_lime" data-rive-fit="contain" data-rive-scrolltrigger-target="" data-rive-scrolltrigger-start="" data-rive-scrolltrigger-end="">
</canvas></div></div><h2 data-anim-high="right,lime-off" split-text="lines" class="text-impact-sm-mona footer">Always <span class="text-impact-sm-brier c-lime-off">bringing</span> the <span class="text-impact-sm-brier c-lime-off">fight</span>.</h2></div></div><div class="footer-bg-helmet-w"><div class="footer-bg-helmet-layout"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d43d6e276c436a378a1da6_ln-360-helm-1.webp" loading="eager" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d43d6e276c436a378a1da6_ln-360-helm-1-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d43d6e276c436a378a1da6_ln-360-helm-1-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d43d6e276c436a378a1da6_ln-360-helm-1-p-1080.webp 1080w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d43d6e276c436a378a1da6_ln-360-helm-1.webp 1560w" alt="" class="footer-bg-img"><div class="footer-bg-bottom-btn-w"><a data-btn-rive-rotate="false" data-anim="text-hover" data-btn-rive-hover="" data-theme="lime" data-wf--button-primary--variant="base" href="mailto:business@landonorris.com" class="btn-w w-inline-block"><div class="btn-inner"><div class="btn-inner-text-w"><div split-text="chars" class="btn-text">business enquiries</div></div><div class="btn-icon-w"><div class="btn-rive-w w-embed"><canvas data-rive-object="" data-rive-file="btn-ui" data-rive-artboard="arrow" data-rive-state-machine="arrow" data-rive-hover="false" data-rive-fit="contain">
</canvas></div></div></div></a></div></div></div><div aria-hidden="true" class="footer-marquee"><div data-marquee-duplicate="3" data-marquee-scroll-direction-target="" data-marquee-direction="left" data-marquee-status="normal" data-marquee-speed="30" data-marquee-scroll-speed="5" class="marquee-adv-row"><div data-marquee-scroll-target="" class="marquee-adv-scroll"><div data-marquee-collection-target="" class="marquee-adv-collection"><div class="marquee-adv-item"><div class="footer-marquee-item"><div class="footer-marquee-logo-w"><div class="footer-marquee-svg w-embed"><svg width="100%" height="100%" viewBox="0 0 97 42" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="m2.04 15.998 2.249 8.218 2.354-8.218h3.045l2.355 8.188 2.249-8.188h2.026l-2.881 9.748h-2.745l-2.519-8.338-2.52 8.338H2.895L0 15.998h2.04ZM16.377 20.843c0-2.937 1.725-4.993 5.339-4.993 3.164 0 5.039 1.814 5.039 5.008v.48h-8.248c.134 1.65 1.094 2.79 3.224 2.79 1.724 0 2.46-.78 2.64-1.515l.03-.088h2.25l-.015.09c-.285 1.8-1.89 3.284-4.934 3.284-3.6 0-5.324-2.054-5.324-5.039l-.001-.017Zm8.263-.99-.015-.03c-.223-1.41-1.287-2.204-2.999-2.204-1.785 0-2.73.885-3.03 2.235h6.044ZM35.317 24.263c-1.005 1.11-2.444 1.634-4.184 1.634-2.01 0-3.494-.704-3.494-2.505 0-1.859 1.44-2.653 3.584-2.879l2.294-.24c1.575-.165 2.685-.3 2.837-1.14l-.016.152.016-.104c.195-1.064-.6-1.605-2.325-1.605-1.814 0-2.849.557-3.15 2.127l-.03.138h-2.042l.03-.136c.495-2.43 2.16-3.853 5.339-3.853 3.284 0 4.604 1.454 4.11 3.778l-1.304 6.117h-1.98l.315-1.484Zm-3.734.136c2.026 0 3.854-.93 4.439-3.36v-.029l.045-.21c-.42.524-1.335.81-2.49.915l-1.934.223c-1.5.152-1.934.63-1.934 1.29 0 .766.674 1.17 1.874 1.17ZM42.26 17.544c.75-1.05 1.874-1.694 3.315-1.694 2.31 0 3.569 1.92 2.85 4.544l-.18.615H46.16l.165-.615c.42-1.485.045-2.79-1.605-2.79-1.694 0-2.64 1.14-3 2.505l-1.199 5.638h-2.04L40.55 16h2.04l-.33 1.545ZM54.933 15.85c3.674 0 5.115 2.219 4.589 5.053l-.076.435h-8.082c-.03 1.695 1.14 2.79 3.09 2.79 1.409 0 2.338-.585 2.698-1.44l.09-.165h2.055l-.06.18c-.615 1.83-2.145 3.194-4.92 3.194-3.568 0-5.563-2.431-4.873-5.804.45-2.009 2.085-4.243 5.489-4.243Zm2.654 3.973v-.06c.075-1.334-.9-2.144-2.564-2.144-1.98 0-2.938 1.14-3.36 2.204h5.924ZM69.18 24.367c-.525.72-1.605 1.53-3.434 1.53-3.075 0-4.95-2.127-4.95-5.008v-.03c0-2.91 1.935-5.01 4.905-5.01 1.829 0 2.954.825 3.479 1.53V16h2.025v9.703c0 2.325-.855 3.647-3.539 3.647h-6.33v-1.76h6.06c1.484 0 1.784-.644 1.784-2.127v-1.095Zm-3.147-.24c2.114 0 3.15-1.439 3.15-3.224v-.06c0-1.784-1.02-3.224-3.15-3.224-2.19 0-3.15 1.5-3.15 3.242v.03c-.002 1.722.972 3.237 3.15 3.237ZM74.7 17.754c.45-1.035 1.71-1.904 3.314-1.904 1.92 0 3.45 1.02 3.45 3.748v1.095h-2.1v-1.034c0-1.29-.54-2.055-1.95-2.055-2.04 0-2.71
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 36: Hero
- **Confidence:** 15%
- **Tag:** div
- **Classes:** `footer-layout-clip`
- **Size:** 747px height
- **Background color:** rgb(40, 44, 32)
- **Headings:** H2: "Always bringing the fight."
- **CTAs:** Home, On Track, Off Track, Partnerships, Calendar
- **Media:** 10 image(s), 2 canvas(es), 8 SVG(s)
- **Animations:**
  - `div`.footer-inner-layout: transition: all
  - `div`.footer-bg-pattern-w: transition: all
  - `img`.image: transition: all
  - `div`.footer-bg-helmet-w: transition: all
  - `div`.footer-bg-helmet-layout: transition: all
  - `img`.footer-bg-img: transition: all
  - `div`.footer-links-w: transition: all
  - `div`.footer-statement-w: transition: all
  - `div`.footer-statement-layout: transition: all
  - `h2`.text-impact-sm-mona: transition: all
  - `div`.marquee-adv-collection: transition: all
  - `div`.footer-marquee: transition: all
  - `div`.marquee-adv-row: transition: all
  - `div`.marquee-adv-scroll: transition: all
  - `span`.text-impact-sm-brier: transition: all
  - `div`.footer-links-col: transition: all
  - `div`.footer-links-col: transition: all
  - `div`.footer-rive-w: transition: all
  - `div`.marquee-gl-rive-w: transition: all
  - `span`.text-impact-sm-brier: transition: all
  - `div`.footer-links-layout: transition: all
  - `div`.footer-links-layout: transition: all
  - `div`.footer-bg-bottom-btn-w: transition: all
  - `a`.btn-w: transition: all
  - `a`.text-link-w: transition: all
  - `a`.text-link-w: transition: all
  - `a`.text-link-w: transition: all
  - `a`.text-link-w: transition: all
  - `a`.text-link-w: transition: all
  - `a`.text-link-w: transition: all

### Element Style Blueprint

- **`<div>`** .footer-inner-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1406.69px | opacity: 1
  - anim: all
  - text: "pagesHomeOn TrackOff TrackPartnershipsCalendarStoreFollow OnTiktokInstagramYoutubeTwitchSign Up Always bringing the fight.business enquiries"

- **`<div>`** .footer-bg-pattern-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1406.69px | opacity: 0.12
  - anim: all

- **`<img>`** .image
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: inline-block | width: 1406.69px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67dbeba158707fa1cd5e5e45_blobs_footer_1.svg

- **`<div>`** .footer-bg-helmet-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1406.69px | opacity: 1
  - anim: all
  - text: "business enquiries"

- **`<div>`** .footer-bg-helmet-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 650px | opacity: 1
  - anim: all
  - text: "business enquiries"

- **`<img>`** .footer-bg-img
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 650px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d43d6e276c436a378a1da6_ln-360-helm-1.webp

- **`<div>`** .footer-links-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1406.69px | padding: 0px 170.667px | margin: 385.047px 0px 186.667px | opacity: 1
  - anim: all
  - text: "pagesHomeOn TrackOff TrackPartnershipsCalendarStoreFollow OnTiktokInstagramYoutubeTwitchSign Up"

- **`<div>`** .footer-statement-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: center | border: 0px none rgb(244, 244, 237) | display: flex | width: 1406.69px | opacity: 1
  - anim: all
  - text: "Always bringing the fight."

- **`<div>`** .footer-statement-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: center | border: 0px none rgb(244, 244, 237) | display: flex | width: 640px | margin: 0px 383.344px | opacity: 1
  - anim: all
  - text: "Always bringing the fight."

- **`<h2>`** .text-impact-sm-mona.footer
  - font: 70px 700 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 59.92px | ls: -0.0625px | text-transform: uppercase | text-align: center | border: 0px none rgb(244, 244, 237) | display: block | width: 640px | opacity: 1
  - anim: all
  - text: "Always bringing the fight."

- **`<div>`** .marquee-adv-collection
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1458.14px | opacity: 1
  - anim: all

- **`<div>`** .footer-marquee
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1406.69px | opacity: 1
  - anim: all

- **`<div>`** .marquee-adv-row
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1406.69px | opacity: 1
  - anim: all

- **`<div>`** .marquee-adv-scroll
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1406.69px | opacity: 1
  - anim: all

- **`<span>`** .text-impact-sm-brier.c-lime-off
  - font: 72.5px 700 Brier, Arial, sans-serif | color: rgb(178, 199, 58) | lh: 62.06px | ls: -1.66667px | text-transform: uppercase | text-align: center | border: 0px none rgb(178, 199, 58) | display: inline | opacity: 1
  - anim: all
  - text: "bringing"

- **`<div>`** .footer-links-col
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 125.531px | opacity: 1
  - anim: all
  - text: "Follow OnTiktokInstagramYoutubeTwitchSign Up"

- **`<div>`** .footer-links-col
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 115.703px | opacity: 1
  - anim: all
  - text: "pagesHomeOn TrackOff TrackPartnershipsCalendarStore"

- **`<div>`** .footer-rive-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: center | border: 0px none rgb(244, 244, 237) | display: block | width: 174.156px | opacity: 1
  - anim: all

- **`<div>`** .marquee-gl-rive-w.w-embed
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: center | border: 0px none rgb(244, 244, 237) | display: block | width: 174.156px | opacity: 1
  - anim: all

- **`<span>`** .text-impact-sm-brier.c-lime-off
  - font: 72.5px 700 Brier, Arial, sans-serif | color: rgb(178, 199, 58) | lh: 62.06px | ls: -1.66667px | text-transform: uppercase | text-align: center | border: 0px none rgb(178, 199, 58) | display: inline | opacity: 1
  - anim: all
  - text: "fight"

- **`<div>`** .footer-links-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 125.531px | margin: 13.3333px 0px 26.6667px | opacity: 1
  - anim: all
  - text: "TiktokInstagramYoutubeTwitch"

- **`<div>`** .footer-links-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 115.703px | margin: 13.3333px 0px 26.6667px | opacity: 1
  - anim: all
  - text: "HomeOn TrackOff TrackPartnershipsCalendar"

- **`<div>`** .footer-bg-bottom-btn-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 170.953px | opacity: 1
  - anim: all
  - text: "business enquiries"

- **`<a>`** .btn-w.w-inline-block
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | bg: rgb(210, 255, 0) | radius: 7.2px | border: 1px solid rgb(210, 255, 0) | display: flex | width: 170.953px | padding: 0px 13.3333px | opacity: 1
  - anim: all
  - href: mailto:business@landonorris.com
  - text: "business enquiries"

- **`<a>`** .text-link-w.w-inline-block
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 125.531px | opacity: 1
  - anim: all
  - href: https://www.instagram.com/lando
  - text: "Instagram"

- **`<a>`** .text-link-w.w-inline-block
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 115.703px | opacity: 1
  - anim: all
  - href: https://landonorris.com/off-track
  - text: "Off Track"

- **`<a>`** .text-link-w.w-inline-block
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 112.781px | opacity: 1
  - anim: all
  - href: https://landonorris.com/calendar
  - text: "Calendar"

- **`<a>`** .text-link-w.w-inline-block
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 107.125px | opacity: 1
  - anim: all
  - href: https://landonorris.com/on-track
  - text: "On Track"

- **`<a>`** .text-link-w.w-inline-block
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 98.3906px | opacity: 1
  - anim: all
  - href: https://www.youtube.com/@LandoNorris
  - text: "Youtube"

- **`<a>`** .text-link-w.w-inline-block
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 83.5781px | opacity: 1
  - anim: all
  - href: https://www.twitch.tv/landonorris
  - text: "Twitch"

### HTML Structure

```html
<div data-nav-theme-target="light" class="footer-layout-clip"><div class="footer-inner-layout"><div class="footer-links-w"><div class="footer-links-col"><div class="eyebrow-w c-green-off-white-2"><div class="text-eyebrow">pages</div></div><div class="footer-links-layout"><a data-anim="text-hover" href="/" aria-current="page" class="text-link-w w-inline-block w--current"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">Home</div></div></a><a data-anim="text-hover" href="/on-track" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">On Track</div></div></a><a data-anim="text-hover" href="/off-track" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">Off Track</div></div></a><a data-anim="text-hover" href="/partnerships" class="text-link-w display-none w-inline-block"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">Partnerships</div></div></a><a data-anim="text-hover" href="/calendar" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">Calendar</div></div></a></div><a data-anim="text-hover" href="https://store.landonorris.com/" target="_blank" class="text-link-w c-lime w-inline-block"><div class="text-clip-w"><div data-anim-high="right, dark-green-tint-1" split-text="lines,chars" class="btn-text is-nav">Store</div></div></a></div><div class="footer-links-col"><div class="eyebrow-w c-green-off-white-2"><div class="text-eyebrow">Follow On</div></div><div class="footer-links-layout"><a data-anim="text-hover" href="https://www.tiktok.com/@landonorris" target="_blank" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">Tiktok</div></div></a><a data-anim="text-hover" href="https://www.instagram.com/lando" target="_blank" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">Instagram</div></div></a><a data-anim="text-hover" href="https://www.youtube.com/@LandoNorris" target="_blank" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">Youtube</div></div></a><a data-anim="text-hover" href="https://www.twitch.tv/landonorris" target="_blank" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">Twitch</div></div></a></div><a data-signup-trigger="" data-anim="text-hover" href="#" class="text-link-w c-lime is-hidden w-inline-block"><div class="text-clip-w"><div data-anim-high="right, dark-green-tint-1" split-text="lines,chars" class="btn-text is-nav">Sign&nbsp;Up</div></div></a></div></div><div class="footer-statement-w"><div class="footer-statement-layout"><div class="footer-rive-w"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d443bc774ddcd37b3d8d4d_ln4-footer-rive-placeholder.svg" loading="eager" data-rive-placeholder="" alt="" class="image is-footer-rive"><div class="marquee-gl-rive-w w-embed"><canvas data-rive-object="" data-rive-file="signature" data-rive-artboard="signature" data-rive-state-machine="signature_play" data-rive-input="color_lime" data-rive-fit="contain" data-rive-scrolltrigger-target="" data-rive-scrolltrigger-start="" data-rive-scrolltrigger-end="">
</canvas></div></div><h2 data-anim-high="right,lime-off" split-text="lines" class="text-impact-sm-mona footer">Always <span class="text-impact-sm-brier c-lime-off">bringing</span> the <span class="text-impact-sm-brier c-lime-off">fight</span>.</h2></div></div><div class="footer-bg-helmet-w"><div class="footer-bg-helmet-layout"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d43d6e276c436a378a1da6_ln-360-helm-1.webp" loading="eager" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d43d6e276c436a378a1da6_ln-360-helm-1-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d43d6e276c436a378a1da6_ln-360-helm-1-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d43d6e276c436a378a1da6_ln-360-helm-1-p-1080.webp 1080w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d43d6e276c436a378a1da6_ln-360-helm-1.webp 1560w" alt="" class="footer-bg-img"><div class="footer-bg-bottom-btn-w"><a data-btn-rive-rotate="false" data-anim="text-hover" data-btn-rive-hover="" data-theme="lime" data-wf--button-primary--variant="base" href="mailto:business@landonorris.com" class="btn-w w-inline-block"><div class="btn-inner"><div class="btn-inner-text-w"><div split-text="chars" class="btn-text">business enquiries</div></div><div class="btn-icon-w"><div class="btn-rive-w w-embed"><canvas data-rive-object="" data-rive-file="btn-ui" data-rive-artboard="arrow" data-rive-state-machine="arrow" data-rive-hover="false" data-rive-fit="contain">
</canvas></div></div></div></a></div></div></div><div aria-hidden="true" class="footer-marquee"><div data-marquee-duplicate="3" data-marquee-scroll-direction-target="" data-marquee-direction="left" data-marquee-status="normal" data-marquee-speed="30" data-marquee-scroll-speed="5" class="marquee-adv-row"><div data-marquee-scroll-target="" class="marquee-adv-scroll"><div data-marquee-collection-target="" class="marquee-adv-collection"><div class="marquee-adv-item"><div class="footer-marquee-item"><div class="footer-marquee-logo-w"><div class="footer-marquee-svg w-embed"><svg width="100%" height="100%" viewBox="0 0 97 42" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="m2.04 15.998 2.249 8.218 2.354-8.218h3.045l2.355 8.188 2.249-8.188h2.026l-2.881 9.748h-2.745l-2.519-8.338-2.52 8.338H2.895L0 15.998h2.04ZM16.377 20.843c0-2.937 1.725-4.993 5.339-4.993 3.164 0 5.039 1.814 5.039 5.008v.48h-8.248c.134 1.65 1.094 2.79 3.224 2.79 1.724 0 2.46-.78 2.64-1.515l.03-.088h2.25l-.015.09c-.285 1.8-1.89 3.284-4.934 3.284-3.6 0-5.324-2.054-5.324-5.039l-.001-.017Zm8.263-.99-.015-.03c-.223-1.41-1.287-2.204-2.999-2.204-1.785 0-2.73.885-3.03 2.235h6.044ZM35.317 24.263c-1.005 1.11-2.444 1.634-4.184 1.634-2.01 0-3.494-.704-3.494-2.505 0-1.859 1.44-2.653 3.584-2.879l2.294-.24c1.575-.165 2.685-.3 2.837-1.14l-.016.152.016-.104c.195-1.064-.6-1.605-2.325-1.605-1.814 0-2.849.557-3.15 2.127l-.03.138h-2.042l.03-.136c.495-2.43 2.16-3.853 5.339-3.853 3.284 0 4.604 1.454 4.11 3.778l-1.304 6.117h-1.98l.315-1.484Zm-3.734.136c2.026 0 3.854-.93 4.439-3.36v-.029l.045-.21c-.42.524-1.335.81-2.49.915l-1.934.223c-1.5.152-1.934.63-1.934 1.29 0 .766.674 1.17 1.874 1.17ZM42.26 17.544c.75-1.05 1.874-1.694 3.315-1.694 2.31 0 3.569 1.92 2.85 4.544l-.18.615H46.16l.165-.615c.42-1.485.045-2.79-1.605-2.79-1.694 0-2.64 1.14-3 2.505l-1.199 5.638h-2.04L40.55 16h2.04l-.33 1.545ZM54.933 15.85c3.674 0 5.115 2.219 4.589 5.053l-.076.435h-8.082c-.03 1.695 1.14 2.79 3.09 2.79 1.409 0 2.338-.585 2.698-1.44l.09-.165h2.055l-.06.18c-.615 1.83-2.145 3.194-4.92 3.194-3.568 0-5.563-2.431-4.873-5.804.45-2.009 2.085-4.243 5.489-4.243Zm2.654 3.973v-.06c.075-1.334-.9-2.144-2.564-2.144-1.98 0-2.938 1.14-3.36 2.204h5.924ZM69.18 24.367c-.525.72-1.605 1.53-3.434 1.53-3.075 0-4.95-2.127-4.95-5.008v-.03c0-2.91 1.935-5.01 4.905-5.01 1.829 0 2.954.825 3.479 1.53V16h2.025v9.703c0 2.325-.855 3.647-3.539 3.647h-6.33v-1.76h6.06c1.484 0 1.784-.644 1.784-2.127v-1.095Zm-3.147-.24c2.114 0 3.15-1.439 3.15-3.224v-.06c0-1.784-1.02-3.224-3.15-3.224-2.19 0-3.15 1.5-3.15 3.242v.03c-.002 1.722.972 3.237 3.15 3.237ZM74.7 17.754c.45-1.035 1.71-1.904 3.314-1.904 1.92 0 3.45 1.02 3.45 3.748v1.095h-2.1v-1.034c0-1.29-.54-2.055-1.95-2.055-2.04 0-2.714 1.5-2.714 2.595v5.548h-2.04
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 37: Hero
- **Confidence:** 15%
- **Tag:** div
- **Classes:** `footer-inner-layout`
- **Size:** 747px height
- **Headings:** H2: "Always bringing the fight."
- **CTAs:** Home, On Track, Off Track, Partnerships, Calendar
- **Media:** 10 image(s), 2 canvas(es), 8 SVG(s)
- **Flex:** direction: column, wrap: nowrap, gap: normal
- **Align items:** normal
- **Justify:** normal
- **Animations:**
  - `div`.footer-bg-pattern-w: transition: all
  - `img`.image: transition: all
  - `div`.footer-bg-helmet-w: transition: all
  - `div`.footer-bg-helmet-layout: transition: all
  - `img`.footer-bg-img: transition: all
  - `div`.footer-links-w: transition: all
  - `div`.footer-statement-w: transition: all
  - `div`.footer-statement-layout: transition: all
  - `h2`.text-impact-sm-mona: transition: all
  - `div`.marquee-adv-collection: transition: all
  - `div`.marquee-adv-item: transition: all
  - `div`.footer-marquee: transition: all
  - `div`.marquee-adv-row: transition: all
  - `div`.marquee-adv-scroll: transition: all
  - `span`.text-impact-sm-brier: transition: all
  - `div`.footer-links-col: transition: all
  - `div`.footer-links-col: transition: all
  - `div`.footer-rive-w: transition: all
  - `div`.marquee-gl-rive-w: transition: all
  - `canvas`: transition: all
  - `span`.text-impact-sm-brier: transition: all
  - `div`.footer-links-layout: transition: all
  - `div`.footer-links-layout: transition: all
  - `div`.footer-bg-bottom-btn-w: transition: all
  - `a`.btn-w: transition: all
  - `a`.text-link-w: transition: all
  - `div`.text-clip-w: transition: all
  - `a`.text-link-w: transition: all
  - `div`.text-clip-w: transition: all
  - `a`.text-link-w: transition: all

### Element Style Blueprint

- **`<div>`** .footer-bg-pattern-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1406.69px | opacity: 0.12
  - anim: all

- **`<img>`** .image
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: inline-block | width: 1406.69px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67dbeba158707fa1cd5e5e45_blobs_footer_1.svg

- **`<div>`** .footer-bg-helmet-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1406.69px | opacity: 1
  - anim: all
  - text: "business enquiries"

- **`<div>`** .footer-bg-helmet-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 650px | opacity: 1
  - anim: all
  - text: "business enquiries"

- **`<img>`** .footer-bg-img
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 650px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d43d6e276c436a378a1da6_ln-360-helm-1.webp

- **`<div>`** .footer-links-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1406.69px | padding: 0px 170.667px | margin: 385.047px 0px 186.667px | opacity: 1
  - anim: all
  - text: "pagesHomeOn TrackOff TrackPartnershipsCalendarStoreFollow OnTiktokInstagramYoutubeTwitchSign Up"

- **`<div>`** .footer-statement-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: center | border: 0px none rgb(244, 244, 237) | display: flex | width: 1406.69px | opacity: 1
  - anim: all
  - text: "Always bringing the fight."

- **`<div>`** .footer-statement-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: center | border: 0px none rgb(244, 244, 237) | display: flex | width: 640px | margin: 0px 383.344px | opacity: 1
  - anim: all
  - text: "Always bringing the fight."

- **`<h2>`** .text-impact-sm-mona.footer
  - font: 70px 700 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 59.92px | ls: -0.0625px | text-transform: uppercase | text-align: center | border: 0px none rgb(244, 244, 237) | display: block | width: 640px | opacity: 1
  - anim: all
  - text: "Always bringing the fight."

- **`<div>`** .marquee-adv-collection
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1458.14px | opacity: 1
  - anim: all

- **`<div>`** .marquee-adv-item
  - font: 115.2px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1458.14px | opacity: 1
  - anim: all

- **`<div>`** .footer-marquee
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1406.69px | opacity: 1
  - anim: all

- **`<div>`** .marquee-adv-row
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1406.69px | opacity: 1
  - anim: all

- **`<div>`** .marquee-adv-scroll
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1406.69px | opacity: 1
  - anim: all

- **`<span>`** .text-impact-sm-brier.c-lime-off
  - font: 72.5px 700 Brier, Arial, sans-serif | color: rgb(178, 199, 58) | lh: 62.06px | ls: -1.66667px | text-transform: uppercase | text-align: center | border: 0px none rgb(178, 199, 58) | display: inline | opacity: 1
  - anim: all
  - text: "bringing"

- **`<div>`** .footer-links-col
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 125.531px | opacity: 1
  - anim: all
  - text: "Follow OnTiktokInstagramYoutubeTwitchSign Up"

- **`<div>`** .footer-links-col
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 115.703px | opacity: 1
  - anim: all
  - text: "pagesHomeOn TrackOff TrackPartnershipsCalendarStore"

- **`<div>`** .footer-rive-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: center | border: 0px none rgb(244, 244, 237) | display: block | width: 174.156px | opacity: 1
  - anim: all

- **`<div>`** .marquee-gl-rive-w.w-embed
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: center | border: 0px none rgb(244, 244, 237) | display: block | width: 174.156px | opacity: 1
  - anim: all

- **`<canvas>`**
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: center | border: 0px none rgb(244, 244, 237) | display: inline-block | width: 174.156px | opacity: 1
  - anim: all

- **`<span>`** .text-impact-sm-brier.c-lime-off
  - font: 72.5px 700 Brier, Arial, sans-serif | color: rgb(178, 199, 58) | lh: 62.06px | ls: -1.66667px | text-transform: uppercase | text-align: center | border: 0px none rgb(178, 199, 58) | display: inline | opacity: 1
  - anim: all
  - text: "fight"

- **`<div>`** .footer-links-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 125.531px | margin: 13.3333px 0px 26.6667px | opacity: 1
  - anim: all
  - text: "TiktokInstagramYoutubeTwitch"

- **`<div>`** .footer-links-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 115.703px | margin: 13.3333px 0px 26.6667px | opacity: 1
  - anim: all
  - text: "HomeOn TrackOff TrackPartnershipsCalendar"

- **`<div>`** .footer-bg-bottom-btn-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 170.953px | opacity: 1
  - anim: all
  - text: "business enquiries"

- **`<a>`** .btn-w.w-inline-block
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | bg: rgb(210, 255, 0) | radius: 7.2px | border: 1px solid rgb(210, 255, 0) | display: flex | width: 170.953px | padding: 0px 13.3333px | opacity: 1
  - anim: all
  - href: mailto:business@landonorris.com
  - text: "business enquiries"

- **`<a>`** .text-link-w.w-inline-block
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 125.531px | opacity: 1
  - anim: all
  - href: https://www.instagram.com/lando
  - text: "Instagram"

- **`<div>`** .text-clip-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 125.531px | opacity: 1
  - anim: all
  - text: "Instagram"

- **`<a>`** .text-link-w.w-inline-block
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 115.703px | opacity: 1
  - anim: all
  - href: https://landonorris.com/off-track
  - text: "Off Track"

- **`<div>`** .text-clip-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 115.703px | opacity: 1
  - anim: all
  - text: "Off Track"

- **`<a>`** .text-link-w.w-inline-block
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 112.781px | opacity: 1
  - anim: all
  - href: https://landonorris.com/calendar
  - text: "Calendar"

### HTML Structure

```html
<div class="footer-inner-layout"><div class="footer-links-w"><div class="footer-links-col"><div class="eyebrow-w c-green-off-white-2"><div class="text-eyebrow">pages</div></div><div class="footer-links-layout"><a data-anim="text-hover" href="/" aria-current="page" class="text-link-w w-inline-block w--current"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">Home</div></div></a><a data-anim="text-hover" href="/on-track" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">On Track</div></div></a><a data-anim="text-hover" href="/off-track" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">Off Track</div></div></a><a data-anim="text-hover" href="/partnerships" class="text-link-w display-none w-inline-block"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">Partnerships</div></div></a><a data-anim="text-hover" href="/calendar" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">Calendar</div></div></a></div><a data-anim="text-hover" href="https://store.landonorris.com/" target="_blank" class="text-link-w c-lime w-inline-block"><div class="text-clip-w"><div data-anim-high="right, dark-green-tint-1" split-text="lines,chars" class="btn-text is-nav">Store</div></div></a></div><div class="footer-links-col"><div class="eyebrow-w c-green-off-white-2"><div class="text-eyebrow">Follow On</div></div><div class="footer-links-layout"><a data-anim="text-hover" href="https://www.tiktok.com/@landonorris" target="_blank" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">Tiktok</div></div></a><a data-anim="text-hover" href="https://www.instagram.com/lando" target="_blank" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">Instagram</div></div></a><a data-anim="text-hover" href="https://www.youtube.com/@LandoNorris" target="_blank" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">Youtube</div></div></a><a data-anim="text-hover" href="https://www.twitch.tv/landonorris" target="_blank" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">Twitch</div></div></a></div><a data-signup-trigger="" data-anim="text-hover" href="#" class="text-link-w c-lime is-hidden w-inline-block"><div class="text-clip-w"><div data-anim-high="right, dark-green-tint-1" split-text="lines,chars" class="btn-text is-nav">Sign&nbsp;Up</div></div></a></div></div><div class="footer-statement-w"><div class="footer-statement-layout"><div class="footer-rive-w"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d443bc774ddcd37b3d8d4d_ln4-footer-rive-placeholder.svg" loading="eager" data-rive-placeholder="" alt="" class="image is-footer-rive"><div class="marquee-gl-rive-w w-embed"><canvas data-rive-object="" data-rive-file="signature" data-rive-artboard="signature" data-rive-state-machine="signature_play" data-rive-input="color_lime" data-rive-fit="contain" data-rive-scrolltrigger-target="" data-rive-scrolltrigger-start="" data-rive-scrolltrigger-end="">
</canvas></div></div><h2 data-anim-high="right,lime-off" split-text="lines" class="text-impact-sm-mona footer">Always <span class="text-impact-sm-brier c-lime-off">bringing</span> the <span class="text-impact-sm-brier c-lime-off">fight</span>.</h2></div></div><div class="footer-bg-helmet-w"><div class="footer-bg-helmet-layout"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d43d6e276c436a378a1da6_ln-360-helm-1.webp" loading="eager" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d43d6e276c436a378a1da6_ln-360-helm-1-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d43d6e276c436a378a1da6_ln-360-helm-1-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d43d6e276c436a378a1da6_ln-360-helm-1-p-1080.webp 1080w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d43d6e276c436a378a1da6_ln-360-helm-1.webp 1560w" alt="" class="footer-bg-img"><div class="footer-bg-bottom-btn-w"><a data-btn-rive-rotate="false" data-anim="text-hover" data-btn-rive-hover="" data-theme="lime" data-wf--button-primary--variant="base" href="mailto:business@landonorris.com" class="btn-w w-inline-block"><div class="btn-inner"><div class="btn-inner-text-w"><div split-text="chars" class="btn-text">business enquiries</div></div><div class="btn-icon-w"><div class="btn-rive-w w-embed"><canvas data-rive-object="" data-rive-file="btn-ui" data-rive-artboard="arrow" data-rive-state-machine="arrow" data-rive-hover="false" data-rive-fit="contain">
</canvas></div></div></div></a></div></div></div><div aria-hidden="true" class="footer-marquee"><div data-marquee-duplicate="3" data-marquee-scroll-direction-target="" data-marquee-direction="left" data-marquee-status="normal" data-marquee-speed="30" data-marquee-scroll-speed="5" class="marquee-adv-row"><div data-marquee-scroll-target="" class="marquee-adv-scroll"><div data-marquee-collection-target="" class="marquee-adv-collection"><div class="marquee-adv-item"><div class="footer-marquee-item"><div class="footer-marquee-logo-w"><div class="footer-marquee-svg w-embed"><svg width="100%" height="100%" viewBox="0 0 97 42" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="m2.04 15.998 2.249 8.218 2.354-8.218h3.045l2.355 8.188 2.249-8.188h2.026l-2.881 9.748h-2.745l-2.519-8.338-2.52 8.338H2.895L0 15.998h2.04ZM16.377 20.843c0-2.937 1.725-4.993 5.339-4.993 3.164 0 5.039 1.814 5.039 5.008v.48h-8.248c.134 1.65 1.094 2.79 3.224 2.79 1.724 0 2.46-.78 2.64-1.515l.03-.088h2.25l-.015.09c-.285 1.8-1.89 3.284-4.934 3.284-3.6 0-5.324-2.054-5.324-5.039l-.001-.017Zm8.263-.99-.015-.03c-.223-1.41-1.287-2.204-2.999-2.204-1.785 0-2.73.885-3.03 2.235h6.044ZM35.317 24.263c-1.005 1.11-2.444 1.634-4.184 1.634-2.01 0-3.494-.704-3.494-2.505 0-1.859 1.44-2.653 3.584-2.879l2.294-.24c1.575-.165 2.685-.3 2.837-1.14l-.016.152.016-.104c.195-1.064-.6-1.605-2.325-1.605-1.814 0-2.849.557-3.15 2.127l-.03.138h-2.042l.03-.136c.495-2.43 2.16-3.853 5.339-3.853 3.284 0 4.604 1.454 4.11 3.778l-1.304 6.117h-1.98l.315-1.484Zm-3.734.136c2.026 0 3.854-.93 4.439-3.36v-.029l.045-.21c-.42.524-1.335.81-2.49.915l-1.934.223c-1.5.152-1.934.63-1.934 1.29 0 .766.674 1.17 1.874 1.17ZM42.26 17.544c.75-1.05 1.874-1.694 3.315-1.694 2.31 0 3.569 1.92 2.85 4.544l-.18.615H46.16l.165-.615c.42-1.485.045-2.79-1.605-2.79-1.694 0-2.64 1.14-3 2.505l-1.199 5.638h-2.04L40.55 16h2.04l-.33 1.545ZM54.933 15.85c3.674 0 5.115 2.219 4.589 5.053l-.076.435h-8.082c-.03 1.695 1.14 2.79 3.09 2.79 1.409 0 2.338-.585 2.698-1.44l.09-.165h2.055l-.06.18c-.615 1.83-2.145 3.194-4.92 3.194-3.568 0-5.563-2.431-4.873-5.804.45-2.009 2.085-4.243 5.489-4.243Zm2.654 3.973v-.06c.075-1.334-.9-2.144-2.564-2.144-1.98 0-2.938 1.14-3.36 2.204h5.924ZM69.18 24.367c-.525.72-1.605 1.53-3.434 1.53-3.075 0-4.95-2.127-4.95-5.008v-.03c0-2.91 1.935-5.01 4.905-5.01 1.829 0 2.954.825 3.479 1.53V16h2.025v9.703c0 2.325-.855 3.647-3.539 3.647h-6.33v-1.76h6.06c1.484 0 1.784-.644 1.784-2.127v-1.095Zm-3.147-.24c2.114 0 3.15-1.439 3.15-3.224v-.06c0-1.784-1.02-3.224-3.15-3.224-2.19 0-3.15 1.5-3.15 3.242v.03c-.002 1.722.972 3.237 3.15 3.237ZM74.7 17.754c.45-1.035 1.71-1.904 3.314-1.904 1.92 0 3.45 1.02 3.45 3.748v1.095h-2.1v-1.034c0-1.29-.54-2.055-1.95-2.055-2.04 0-2.714 1.5-2.714 2.595v5.548h-2.04V16h2.04v1.755ZM83.726 13c.855 0 1.29.42 1.29 1.035 0 .585-.43
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 38: Hero
- **Confidence:** 0%
- **Tag:** div
- **Classes:** `footer-bg-pattern-w`
- **Size:** 747px height
- **Media:** 1 image(s)
- **Animations:**
  - `img`.image: transition: all

### Element Style Blueprint

- **`<img>`** .image
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: inline-block | width: 1406.69px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67dbeba158707fa1cd5e5e45_blobs_footer_1.svg

### HTML Structure

```html
<div class="footer-bg-pattern-w"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67dbeba158707fa1cd5e5e45_blobs_footer_1.svg" loading="eager" alt="" class="image"></div>
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 39: Hero
- **Confidence:** 0%
- **Tag:** div
- **Classes:** `gl-wrap w-embed`
- **Size:** full viewport height
### HTML Structure

```html
<div class="gl-wrap w-embed"><!--
<canvas class="gl"></canvas>
--></div>
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 40: Footer
- **Confidence:** 30%
- **Tag:** div
- **Classes:** `gl-background`
- **Size:** full viewport height
### HTML Structure

```html
<div data-gl="background" class="gl-background"></div>
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.


---

# 7. Motion Timeline Recipes

25 motion pattern(s) detected:

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

- **Type:** scroll-translate
  Target: `div.home-helmets` (div)
  Range: 0-100%
  Y movement: -11233px
  Parallax ratio: 1
  Implementation: Scroll-linked transform with requestAnimationFrame

- **Type:** scroll-translate
  Target: `div.w-dyn-list:nth-child(3)` (div)
  Range: 0-100%
  Y movement: -10133px
  Parallax ratio: 0.9
  Implementation: Scroll-linked transform with requestAnimationFrame

- **Type:** scroll-translate
  Target: `div.helmet-grid.w-dyn-items` (div)
  Range: 0-100%
  Y movement: -11233px
  Parallax ratio: 1
  Implementation: Scroll-linked transform with requestAnimationFrame

- **Type:** scroll-translate
  Target: `img.image.is-otot-home-end` (img)
  Range: 0-100%
  Y movement: -11233px
  Parallax ratio: 1
  Implementation: Scroll-linked transform with requestAnimationFrame

- **Type:** sticky-pin
  Target: `div.sticky-item.home-hero:nth-child(1)` (div)
  Range: 0-100%
  Y movement: -10133px
  Parallax ratio: 0.9
  Implementation: CSS position: sticky with scroll-linked animation

- **Type:** scroll-translate
  Target: `section.home-hero:nth-child(1)` (section)
  Range: 0-100%
  Y movement: -10133px
  Parallax ratio: 0.9
  Implementation: Scroll-linked transform with requestAnimationFrame

- **Type:** scroll-translate
  Target: `div.home-hero` (div)
  Range: 0-100%
  Y movement: -11233px
  Parallax ratio: 1
  Implementation: Scroll-linked transform with requestAnimationFrame

- **Type:** scroll-translate
  Target: `div.gl-canvas:nth-child(1)` (div)
  Range: 0-100%
  Y movement: -10133px
  Parallax ratio: 0.9
  Implementation: Scroll-linked transform with requestAnimationFrame

- **Type:** scroll-translate
  Target: `section.home-marquee:nth-child(2)` (section)
  Range: 0-100%
  Y movement: -10133px
  Parallax ratio: 0.9
  Implementation: Scroll-linked transform with requestAnimationFrame

- **Type:** scroll-translate
  Target: `div.is-marquee` (div)
  Range: 0-100%
  Y movement: -10133px
  Parallax ratio: 0.9
  Implementation: Scroll-linked transform with requestAnimationFrame

- **Type:** sticky-pin
  Target: `div.is-horiz-scroll:nth-child(1)` (div)
  Range: 0-100%
  Y movement: -11233px
  Parallax ratio: 1
  Implementation: CSS position: sticky with scroll-linked animation

- **Type:** scroll-translate
  Target: `div.horizontal-pin-wrap` (div)
  Range: 0-100%
  Y movement: -11233px
  Parallax ratio: 1
  Implementation: Scroll-linked transform with requestAnimationFrame

- **Type:** scroll-translate
  Target: `div.horizontal-pin-spacer` (div)
  Range: 0-100%
  Y movement: -11233px
  Parallax ratio: 1
  Implementation: Scroll-linked transform with requestAnimationFrame

- **Type:** sticky-pin
  Target: `div.horizontal-pin-sticky` (div)
  Range: 0-100%
  Y movement: -11233px
  Parallax ratio: 1
  Implementation: CSS position: sticky with scroll-linked animation

- **Type:** sticky-pin
  Target: `div.sticky-item` (div)
  Range: 0-100%
  Y movement: -10133px
  Parallax ratio: 0.9
  Implementation: CSS position: sticky with scroll-linked animation

- **Type:** scroll-translate
  Target: `section.is-otot-home` (section)
  Range: 0-100%
  Y movement: -10133px
  Parallax ratio: 0.9
  Implementation: Scroll-linked transform with requestAnimationFrame

- **Type:** scroll-translate
  Target: `div.is-otot-home` (div)
  Range: 0-100%
  Y movement: -10133px
  Parallax ratio: 0.9
  Implementation: Scroll-linked transform with requestAnimationFrame

- **Type:** scroll-translate
  Target: `div.otot-home-bg:nth-child(2)` (div)
  Range: 0-100%
  Y movement: -10133px
  Parallax ratio: 0.9
  Implementation: Scroll-linked transform with requestAnimationFrame

- **Type:** scroll-translate
  Target: `section.is-otot-end` (section)
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

- **Images:** 76 detected â€” plan for hero, content, and decorative images
- **Videos:** 0 detected
- **Fonts:** 3 detected
- **Inline SVGs:** 86
- **Canvases:** 20

**Rule:** Do not copy proprietary assets. Recreate the design language with original, niche-specific content.

---

# 10. Responsive Rules

- Mobile-first breakpoint strategy: 390px, 834px, 1440px
- All three viewports captured
- desktop@0%: H1: "Lando Norris"; H2: "2025 Mclaren Formula 1 Driver"
- desktop@50%: H2: "TRACK"; H2: "OFF"; H2: "TRACK"
- desktop signals: opacity-based effects
- tablet@0%: H1: "Lando Norris"; H2: "2025 Mclaren Formula 1 Driver"
- tablet@50%: H2: "TRACK"; H2: "OFF"; H2: "TRACK"
- tablet signals: opacity-based effects
- mobile@0%: H1: "Lando Norris"; H2: "2025 Mclaren Formula 1 Driver"
- mobile@50%: H2: "TRACK"; H2: "OFF"; H2: "TRACK"
- mobile signals: opacity-based effects
- wide@0%: H1: "Lando Norris"; H2: "2025 Mclaren Formula 1 Driver"
- wide@50%: H2: "Helmets"; H2: "Hall of Fame"; H3: "Season"
- wide signals: opacity-based effects
- Navigation collapses to hamburger on mobile
- Full-viewport sections become auto-height on mobile
- WebGL/canvas lazy-loaded and capped at DPR 2 on mobile
- Touch-friendly tap targets (min 44px)


---

# 11. CRO Adaptation

**Paradigm:** undefined

**Required conversion blocks:**


**Pushback:**


**Niche:** Taller de motos
Translate the extracted aesthetic into Taller de motos. Preserve the premium visual grammar, but rewrite structure, copy, proof, and CTAs around the business outcome. The first viewport must communicate who this is for, what measurable value is offered, why the visitor should trust it, and what action to take next.

---

### Niche Content Translation Table

Edit the [____] fields below with your copy for "Taller de motos". All styling, classes, and animations are preserved automatically.

# Nicho: "Taller de motos" — Template de Traducción de Contenido

> Instrucciones: Rellena los campos [____] con tu copy de Taller de motos. Preserva todas las clases CSS, animaciones y estilos visuales extraídos.

## Sección 1: Hero — First impression, value prop, primary CTA
**Clases:** `.s .home-hero`

  **<button/a>** original: "Monacogp"
  → **Tu CTA:** [________________________________________]
  *Preserva: clase y hover effect*

  **Layout:** block
  **Fondo:** rgba(0, 0, 0, 0)

## Sección 2: Hero — First impression, value prop, primary CTA
**Clases:** `.s .home-marquee`

  **Layout:** block
  **Fondo:** rgba(0, 0, 0, 0)

## Sección 3: Contact/Booking — Form, calendar, CTA
**Clases:** `.s`

  **Layout:** block
  **Fondo:** rgba(0, 0, 0, 0)

## Sección 4: Hero — First impression, value prop, primary CTA
**Clases:** `.s .is-horizontal-track`

  **<div>** original: "Qatar, 2024FIA Prize Giving, 2024It doesn’t matter where you..."
  → **Tu CTA:** [________________________________________]
  *Preserva: class="horizontal-track" | hover: all | color: rgb(244, 244, 237)*

  **Layout:** block
  **Fondo:** rgba(0, 0, 0, 0)

## Sección 5: Proof/Trust — Metrics, testimonials, logos, results
**Clases:** `.s .is-otot-home`

  **<H2>** original: "ON"
  → **Tu H2:** [________________________________________]
  *Preserva: estilo y clase*

  **<H2>** original: "TRACK"
  → **Tu H2:** [________________________________________]
  *Preserva: estilo y clase*

  **<H2>** original: "OFF"
  → **Tu H2:** [________________________________________]
  *Preserva: estilo y clase*

  **Layout:** block
  **Fondo:** rgba(0, 0, 0, 0)

## Sección 6: Hero — First impression, value prop, primary CTA
**Clases:** `.s .is-otot-end`

  **Layout:** block
  **Fondo:** rgba(0, 0, 0, 0)

## Sección 7: Team/About — Who we are, mission, culture
**Clases:** `.s .home-helmets`

  **<H2>** original: "Helmets"
  → **Tu H2:** [________________________________________]
  *Preserva: estilo y clase*

  **<H2>** original: "Hall of Fame"
  → **Tu H2:** [________________________________________]
  *Preserva: estilo y clase*

  **<H3>** original: "Season"
  → **Tu H3:** [________________________________________]
  *Preserva: estilo y clase*

  **<div>** original: "HelmetsHall of FameFrom his iconic blobs to innovative one-o..."
  → **Tu CTA:** [________________________________________]
  *Preserva: class="c home-helmets" | hover: all | color: rgb(244, 244, 237)*

  **Layout:** block
  **Fondo:** rgba(0, 0, 0, 0)

## Sección 8: Hero — First impression, value prop, primary CTA
**Clases:** `.s`

  **<button/a>** original: "view on track"
  → **Tu CTA:** [________________________________________]
  *Preserva: clase y hover effect*

  **<div>** original: "See more helmets and highlights from Lando on the trackview ..."
  → **Tu CTA:** [________________________________________]
  *Preserva: class="c is-callout" | hover: all | color: rgb(244, 244, 237)*

  **Layout:** block
  **Fondo:** rgba(0, 0, 0, 0)

## Sección 9: Hero — First impression, value prop, primary CTA
**Clases:** `.s .is-lando-exe`

  **<H2>** original: "World Drivers' Champion"
  → **Tu H2:** [________________________________________]
  *Preserva: estilo y clase*

  **<button/a>** original: "Visit the store"
  → **Tu CTA:** [________________________________________]
  *Preserva: clase y hover effect*

  **<div>** original: "LANDO STOREWorld Drivers' ChampionCelebrate this incredible ..."
  → **Tu CTA:** [________________________________________]
  *Preserva: class="c is-lando-exe" | hover: all | color: rgb(40, 44, 32)*

  **Layout:** block
  **Fondo:** rgba(0, 0, 0, 0)

## Sección 10: Contact/Booking — Form, calendar, CTA
**Clases:** `.s .is-home-collabs`

  **<H2>** original: "partners"
  → **Tu H2:** [________________________________________]
  *Preserva: estilo y clase*

  **<H2>** original: "&campaigns"
  → **Tu H2:** [________________________________________]
  *Preserva: estilo y clase*

  **<button/a>** original: "view partnerships"
  → **Tu CTA:** [________________________________________]
  *Preserva: clase y hover effect*

  **<div>** original: "partners&campaignsLando is proud to collaborate with a range..."
  → **Tu CTA:** [________________________________________]
  *Preserva: class="c is-home-collabs" | hover: all | color: rgb(40, 44, 32)*

  **<p>** texto original: "Lando is proud to collaborate with a range of partners, who ..."
  → **Tu texto:** [________________________________________]
  *Preserva color: rgb(40, 44, 32)*

  **Layout:** block
  **Fondo:** rgba(0, 0, 0, 0)

## Sección 11: Hero — First impression, value prop, primary CTA
**Clases:** `.s .is-callout-socials`

  **<H2>** original: "what’s upOn Socials"
  → **Tu H2:** [________________________________________]
  *Preserva: estilo y clase*

  **<button/a>** original: "tiktok"
  → **Tu CTA:** [________________________________________]
  *Preserva: clase y hover effect*

  **<button/a>** original: "instagram"
  → **Tu CTA:** [________________________________________]
  *Preserva: clase y hover effect*

  **Layout:** block
  **Fondo:** rgba(0, 0, 0, 0)

## Sección 12: Footer — Links, legal, social, brand
**Clases:** `.s .is-footer`

  **<H2>** original: "Always bringing the fight."
  → **Tu H2:** [________________________________________]
  *Preserva: estilo y clase*

  **<button/a>** original: "Home"
  → **Tu CTA:** [________________________________________]
  *Preserva: clase y hover effect*

  **<button/a>** original: "On Track"
  → **Tu CTA:** [________________________________________]
  *Preserva: clase y hover effect*

  **Layout:** block
  **Fondo:** rgb(244, 244, 237)

## Sección 13: Hero — First impression, value prop, primary CTA
**Clases:** `.transition-w`

  **<button/a>** original: "Load Norris"
  → **Tu CTA:** [________________________________________]
  *Preserva: clase y hover effect*

  **Layout:** flex, direction: row, gap: normal
  **Fondo:** rgb(210, 255, 0)

## Sección 14: Hero — First impression, value prop, primary CTA
**Clases:** `.transition-rive .w-embed`

  **Layout:** block
  **Fondo:** rgba(0, 0, 0, 0)

## Sección 15: Hero — First impression, value prop, primary CTA
**Clases:** `.page-w`

  **<H1>** original: "Lando Norris"
  → **Tu H1:** [________________________________________]
  *Preserva: estilo y clase*

  **<H2>** original: "2025 Mclaren Formula 1 Driver"
  → **Tu H2:** [________________________________________]
  *Preserva: estilo y clase*

  **<H2>** original: "ON"
  → **Tu H2:** [________________________________________]
  *Preserva: estilo y clase*

  **<button/a>** original: "Monacogp"
  → **Tu CTA:** [________________________________________]
  *Preserva: clase y hover effect*

  **<button/a>** original: "view on track"
  → **Tu CTA:** [________________________________________]
  *Preserva: clase y hover effect*

  **Layout:** block
  **Fondo:** rgba(0, 0, 0, 0)

## Sección 16: Hero — First impression, value prop, primary CTA
**Clases:** `.taxi-w`

  **<H1>** original: "Lando Norris"
  → **Tu H1:** [________________________________________]
  *Preserva: estilo y clase*

  **<H2>** original: "2025 Mclaren Formula 1 Driver"
  → **Tu H2:** [________________________________________]
  *Preserva: estilo y clase*

  **<H2>** original: "ON"
  → **Tu H2:** [________________________________________]
  *Preserva: estilo y clase*

  **<button/a>** original: "Monacogp"
  → **Tu CTA:** [________________________________________]
  *Preserva: clase y hover effect*

  **<button/a>** original: "view on track"
  → **Tu CTA:** [________________________________________]
  *Preserva: clase y hover effect*

  **Layout:** block
  **Fondo:** rgba(0, 0, 0, 0)

## Sección 17: Hero — First impression, value prop, primary CTA
**Clases:** `.sticky-track .home-hero`

  **<button/a>** original: "Monacogp"
  → **Tu CTA:** [________________________________________]
  *Preserva: clase y hover effect*

  **Layout:** block
  **Fondo:** rgba(0, 0, 0, 0)

## Sección 18: Hero — First impression, value prop, primary CTA
**Clases:** `.sticky-item .home-hero`

  **<button/a>** original: "Monacogp"
  → **Tu CTA:** [________________________________________]
  *Preserva: clase y hover effect*

  **Layout:** block
  **Fondo:** rgba(0, 0, 0, 0)

## Sección 19: Hero — First impression, value prop, primary CTA
**Clases:** `.gl-canvas`

  **Layout:** block
  **Fondo:** rgba(0, 0, 0, 0)

## Sección 20: Contact/Booking — Form, calendar, CTA
**Clases:** `.impact-content-w .is-home`

  **Layout:** flex, direction: column, gap: 50px
  **Fondo:** rgba(0, 0, 0, 0)

## Sección 21: Hero — First impression, value prop, primary CTA
**Clases:** `.horizontal-pin-wrap`

  **<div>** original: "Qatar, 2024FIA Prize Giving, 2024It doesn’t matter where you..."
  → **Tu CTA:** [________________________________________]
  *Preserva: class="horizontal-track" | hover: all | color: rgb(244, 244, 237)*

  **<div>** original: "It doesn’t matter where you start, it’s how you progress fro..."
  → **Tu CTA:** [________________________________________]
  *Preserva: class="horizontal-grid-col large-img is-home1" | hover: all | color: rgb(244, 244, 237)*

  **Layout:** block
  **Fondo:** rgba(0, 0, 0, 0)

## Sección 22: Hero — First impression, value prop, primary CTA
**Clases:** `.horizontal-pin-spacer`

  **<div>** original: "Qatar, 2024FIA Prize Giving, 2024It doesn’t matter where you..."
  → **Tu CTA:** [________________________________________]
  *Preserva: class="horizontal-track" | hover: all | color: rgb(244, 244, 237)*

  **<div>** original: "It doesn’t matter where you start, it’s how you progress fro..."
  → **Tu CTA:** [________________________________________]
  *Preserva: class="horizontal-grid-col large-img is-home1" | hover: all | color: rgb(244, 244, 237)*

  **Layout:** block
  **Fondo:** rgba(0, 0, 0, 0)

## Sección 23: Hero — First impression, value prop, primary CTA
**Clases:** `.horizontal-pin-sticky`

  **<div>** original: "Qatar, 2024FIA Prize Giving, 2024It doesn’t matter where you..."
  → **Tu CTA:** [________________________________________]
  *Preserva: class="horizontal-track" | hover: all | color: rgb(244, 244, 237)*

  **<div>** original: "It doesn’t matter where you start, it’s how you progress fro..."
  → **Tu CTA:** [________________________________________]
  *Preserva: class="horizontal-grid-col large-img is-home1" | hover: all | color: rgb(244, 244, 237)*

  **Layout:** flex, direction: row, gap: normal
  **Fondo:** rgba(0, 0, 0, 0)

## Sección 24: Hero — First impression, value prop, primary CTA
**Clases:** `.horizontal-track`

  **<div>** original: "It doesn’t matter where you start, it’s how you progress fro..."
  → **Tu CTA:** [________________________________________]
  *Preserva: class="horizontal-grid-col large-img is-home1" | hover: all | color: rgb(244, 244, 237)*

  **Layout:** flex, direction: row, gap: normal
  **Fondo:** rgba(0, 0, 0, 0)

## Sección 25: Process — Methodology, steps, timeline
**Clases:** `.horizontal-grid-col .large-img .is-home1`

  **<div>** original: "It doesn’t matter where you start, it’s how you progress fro..."
  → **Tu CTA:** [________________________________________]
  *Preserva: class="horizontal-item-w is-text-callout callout-1" | hover: all | color: rgb(244, 244, 237)*

  **Layout:** flex, direction: column, gap: normal
  **Fondo:** rgba(0, 0, 0, 0)

## Sección 26: Proof/Trust — Metrics, testimonials, logos, results
**Clases:** `.sticky-track .is-home-otot`

  **<H2>** original: "ON"
  → **Tu H2:** [________________________________________]
  *Preserva: estilo y clase*

  **<H2>** original: "TRACK"
  → **Tu H2:** [________________________________________]
  *Preserva: estilo y clase*

  **<H2>** original: "OFF"
  → **Tu H2:** [________________________________________]
  *Preserva: estilo y clase*

  **Layout:** block
  **Fondo:** rgba(0, 0, 0, 0)

## Sección 27: Proof/Trust — Metrics, testimonials, logos, results
**Clases:** `.sticky-item`

  **<H2>** original: "ON"
  → **Tu H2:** [________________________________________]
  *Preserva: estilo y clase*

  **<H2>** original: "TRACK"
  → **Tu H2:** [________________________________________]
  *Preserva: estilo y clase*

  **<H2>** original: "OFF"
  → **Tu H2:** [________________________________________]
  *Preserva: estilo y clase*

  **Layout:** block
  **Fondo:** rgba(0, 0, 0, 0)

## Sección 28: Proof/Trust — Metrics, testimonials, logos, results
**Clases:** `.otot-home-inner`

  **<H2>** original: "ON"
  → **Tu H2:** [________________________________________]
  *Preserva: estilo y clase*

  **<H2>** original: "TRACK"
  → **Tu H2:** [________________________________________]
  *Preserva: estilo y clase*

  **<H2>** original: "OFF"
  → **Tu H2:** [________________________________________]
  *Preserva: estilo y clase*

  **<p>** texto original: "Most recent results, career stats and photos from trackside."
  → **Tu texto:** [________________________________________]
  *Preserva color: rgb(40, 44, 32)*

  **<p>** texto original: "Campaigns, shoots and other such promotional materials for f..."
  → **Tu texto:** [________________________________________]
  *Preserva color: rgb(40, 44, 32)*

  **Layout:** flex, direction: row, gap: normal
  **Fondo:** rgba(0, 0, 0, 0)

## Sección 29: Hero — First impression, value prop, primary CTA
**Clases:** `.otot-home-bg`

  **Layout:** block
  **Fondo:** rgba(0, 0, 0, 0)

## Sección 30: Team/About — Who we are, mission, culture
**Clases:** `.s-group .bg-black`

  **<H2>** original: "Helmets"
  → **Tu H2:** [________________________________________]
  *Preserva: estilo y clase*

  **<H2>** original: "Hall of Fame"
  → **Tu H2:** [________________________________________]
  *Preserva: estilo y clase*

  **<H3>** original: "Season"
  → **Tu H3:** [________________________________________]
  *Preserva: estilo y clase*

  **<button/a>** original: "view on track"
  → **Tu CTA:** [________________________________________]
  *Preserva: clase y hover effect*

  **<div>** original: "HelmetsHall of FameFrom his iconic blobs to innovative one-o..."
  → **Tu CTA:** [________________________________________]
  *Preserva: class="c home-helmets" | hover: all | color: rgb(244, 244, 237)*

  **<p>** texto original: "From his iconic blobs to innovative one-off designs, Lando h..."
  → **Tu texto:** [________________________________________]
  *Preserva color: rgb(185, 187, 173)*

  **Layout:** block
  **Fondo:** rgb(17, 17, 18)

## Sección 31: Hero — First impression, value prop, primary CTA
**Clases:** `.w-dyn-list`

  **<H3>** original: "Season"
  → **Tu H3:** [________________________________________]
  *Preserva: estilo y clase*

  **<H3>** original: "Discoball"
  → **Tu H3:** [________________________________________]
  *Preserva: estilo y clase*

  **<H3>** original: "Dark Glitter"
  → **Tu H3:** [________________________________________]
  *Preserva: estilo y clase*

  **Layout:** block
  **Fondo:** rgba(0, 0, 0, 0)

## Sección 32: Hero — First impression, value prop, primary CTA
**Clases:** `.helmet-grid .w-dyn-items`

  **<H3>** original: "Season"
  → **Tu H3:** [________________________________________]
  *Preserva: estilo y clase*

  **<H3>** original: "Discoball"
  → **Tu H3:** [________________________________________]
  *Preserva: estilo y clase*

  **<H3>** original: "Dark Glitter"
  → **Tu H3:** [________________________________________]
  *Preserva: estilo y clase*

  **Layout:** grid, gap: 16.6667px
  **Fondo:** rgba(0, 0, 0, 0)

## Sección 33: Hero — First impression, value prop, primary CTA
**Clases:** `.callout-socials-inner`

  **<H2>** original: "what’s upOn Socials"
  → **Tu H2:** [________________________________________]
  *Preserva: estilo y clase*

  **<button/a>** original: "tiktok"
  → **Tu CTA:** [________________________________________]
  *Preserva: clase y hover effect*

  **<button/a>** original: "instagram"
  → **Tu CTA:** [________________________________________]
  *Preserva: clase y hover effect*

  **Layout:** flex, direction: row, gap: normal
  **Fondo:** rgba(0, 0, 0, 0)

## Sección 34: Hero — First impression, value prop, primary CTA
**Clases:** `.callout-socials-layout`

  **<H2>** original: "what’s upOn Socials"
  → **Tu H2:** [________________________________________]
  *Preserva: estilo y clase*

  **<button/a>** original: "tiktok"
  → **Tu CTA:** [________________________________________]
  *Preserva: clase y hover effect*

  **<button/a>** original: "instagram"
  → **Tu CTA:** [________________________________________]
  *Preserva: clase y hover effect*

  **Layout:** flex, direction: column, gap: 33.3333px
  **Fondo:** rgba(0, 0, 0, 0)

## Sección 35: Footer — Links, legal, social, brand
**Clases:** `.footer-layout-w`

  **<H2>** original: "Always bringing the fight."
  → **Tu H2:** [________________________________________]
  *Preserva: estilo y clase*

  **<button/a>** original: "Home"
  → **Tu CTA:** [________________________________________]
  *Preserva: clase y hover effect*

  **<button/a>** original: "On Track"
  → **Tu CTA:** [________________________________________]
  *Preserva: clase y hover effect*

  **Layout:** block
  **Fondo:** rgba(0, 0, 0, 0)

## Sección 36: Hero — First impression, value prop, primary CTA
**Clases:** `.footer-layout-clip`

  **<H2>** original: "Always bringing the fight."
  → **Tu H2:** [________________________________________]
  *Preserva: estilo y clase*

  **<button/a>** original: "Home"
  → **Tu CTA:** [________________________________________]
  *Preserva: clase y hover effect*

  **<button/a>** original: "On Track"
  → **Tu CTA:** [________________________________________]
  *Preserva: clase y hover effect*

  **Layout:** block
  **Fondo:** rgb(40, 44, 32)

## Sección 37: Hero — First impression, value prop, primary CTA
**Clases:** `.footer-inner-layout`

  **<H2>** original: "Always bringing the fight."
  → **Tu H2:** [________________________________________]
  *Preserva: estilo y clase*

  **<button/a>** original: "Home"
  → **Tu CTA:** [________________________________________]
  *Preserva: clase y hover effect*

  **<button/a>** original: "On Track"
  → **Tu CTA:** [________________________________________]
  *Preserva: clase y hover effect*

  **Layout:** flex, direction: column, gap: normal
  **Fondo:** rgba(0, 0, 0, 0)

## Sección 38: Hero — First impression, value prop, primary CTA
**Clases:** `.footer-bg-pattern-w`

  **Layout:** block
  **Fondo:** rgba(0, 0, 0, 0)

## Sección 39: Hero — First impression, value prop, primary CTA
**Clases:** `.gl-wrap .w-embed`

  **Layout:** block
  **Fondo:** rgba(0, 0, 0, 0)

## Sección 40: Footer — Links, legal, social, brand
**Clases:** `.gl-background`

  **Layout:** block
  **Fondo:** rgba(0, 0, 0, 0)


---

# 12. Performance Budget

- **LCP:** < 2.5s
- **Total load:** < 5s
- **JS:** Keep route-level JS lean; lazy-load WebGL and heavy animation bundles
- **Motion:** Respect prefers-reduced-motion and pause offscreen animation

**Performance risk:** medium
- Multiple canvases (20) - potential rendering overhead


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
- All 40 sections match the extracted layout rhythm.
- All scroll animations have reduced-motion alternatives.
- No blocking render resources on initial paint.
- Primary CTA is visible above the fold on desktop and mobile.
- WCAG AA contrast maintained on all text surfaces.
- Page loads in under 5 seconds on 3G Fast.
- All 25 motion patterns are recreated with equivalent feel.

---

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
- Classes: `callout-socials-inner`
- Visual Role: hero (confidence: 15%)
- Layout: Flexbox
- Content instructions: Rebuild content for "Taller de motos" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 34: HERO
- Original Tag: <div>
- Classes: `callout-socials-layout`
- Visual Role: hero (confidence: 15%)
- Layout: Flexbox
- Content instructions: Rebuild content for "Taller de motos" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 35: FOOTER
- Original Tag: <div>
- Classes: `footer-layout-w`
- Visual Role: footer (confidence: 40%)
- Layout: Block flow
- Content instructions: Rebuild content for "Taller de motos" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 36: HERO
- Original Tag: <div>
- Classes: `footer-layout-clip`
- Visual Role: hero (confidence: 15%)
- Layout: Block flow
- Content instructions: Rebuild content for "Taller de motos" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 37: HERO
- Original Tag: <div>
- Classes: `footer-inner-layout`
- Visual Role: hero (confidence: 15%)
- Layout: Flexbox
- Content instructions: Rebuild content for "Taller de motos" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 38: HERO
- Original Tag: <div>
- Classes: `footer-bg-pattern-w`
- Visual Role: hero (confidence: 0%)
- Layout: Block flow
- Content instructions: Rebuild content for "Taller de motos" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 39: HERO
- Original Tag: <div>
- Classes: `gl-wrap w-embed`
- Visual Role: hero (confidence: 0%)
- Layout: Block flow
- Content instructions: Rebuild content for "Taller de motos" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 40: FOOTER
- Original Tag: <div>
- Classes: `gl-background`
- Visual Role: footer (confidence: 30%)
- Layout: Block flow
- Content instructions: Rebuild content for "Taller de motos" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.



=== MOTION TIMELINE & GSAP RECIPES ===
Recipe 1: SCROLL-TRANSLATE
- Target: `div.page-w:nth-child(6)` (div)
- Scroll Range: 0-100%
```javascript
gsap.to("div.page-w:nth-child(6)", {
  y: -11233,
  ease: "none",
  scrollTrigger: {
    trigger: "div.page-w:nth-child(6)",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});
```

Recipe 2: SCROLL-TRANSLATE
- Target: `main.main-w` (main)
- Scroll Range: 0-100%
```javascript
gsap.to("main.main-w", {
  y: -11233,
  ease: "none",
  scrollTrigger: {
    trigger: "main.main-w",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});
```

Recipe 3: SCROLL-TRANSLATE
- Target: `div.taxi-w` (div)
- Scroll Range: 0-100%
```javascript
gsap.to("div.taxi-w", {
  y: -11233,
  ease: "none",
  scrollTrigger: {
    trigger: "div.taxi-w",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});
```

Recipe 4: SCROLL-TRANSLATE
- Target: `div.horizontal-track` (div)
- Scroll Range: 0-100%
```javascript
gsap.to("div.horizontal-track", {
  y: -11233,
  ease: "none",
  scrollTrigger: {
    trigger: "div.horizontal-track",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});
```

Recipe 5: SCROLL-TRANSLATE
- Target: `div.sticky-track.home-hero:nth-child(2)` (div)
- Scroll Range: 0-100%
```javascript
gsap.to("div.sticky-track.home-hero:nth-child(2)", {
  y: -11233,
  ease: "none",
  scrollTrigger: {
    trigger: "div.sticky-track.home-hero:nth-child(2)",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});
```

Recipe 6: SCROLL-TRANSLATE
- Target: `section.home-helmets:nth-child(1)` (section)
- Scroll Range: 0-100%
```javascript
gsap.to("section.home-helmets:nth-child(1)", {
  y: -11233,
  ease: "none",
  scrollTrigger: {
    trigger: "section.home-helmets:nth-child(1)",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});
```

Recipe 7: SCROLL-TRANSLATE
- Target: `div.home-helmets` (div)
- Scroll Range: 0-100%
```javascript
gsap.to("div.home-helmets", {
  y: -11233,
  ease: "none",
  scrollTrigger: {
    trigger: "div.home-helmets",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});
```

Recipe 8: SCROLL-TRANSLATE
- Target: `div.w-dyn-list:nth-child(3)` (div)
- Scroll Range: 0-100%
```javascript
gsap.to("div.w-dyn-list:nth-child(3)", {
  y: -10133,
  ease: "none",
  scrollTrigger: {
    trigger: "div.w-dyn-list:nth-child(3)",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});
```

Recipe 9: SCROLL-TRANSLATE
- Target: `div.helmet-grid.w-dyn-items` (div)
- Scroll Range: 0-100%
```javascript
gsap.to("div.helmet-grid.w-dyn-items", {
  y: -11233,
  ease: "none",
  scrollTrigger: {
    trigger: "div.helmet-grid.w-dyn-items",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});
```

Recipe 10: SCROLL-TRANSLATE
- Target: `img.image.is-otot-home-end` (img)
- Scroll Range: 0-100%
```javascript
gsap.to("img.image.is-otot-home-end", {
  y: -11233,
  ease: "none",
  scrollTrigger: {
    trigger: "img.image.is-otot-home-end",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});
```

Recipe 11: STICKY-PIN
- Target: `div.sticky-item.home-hero:nth-child(1)` (div)
- Scroll Range: 0-100%
```javascript
ScrollTrigger.create({
  trigger: "div.sticky-item.home-hero:nth-child(1)",
  pin: true,
  start: "top top",
  end: "bottom 100%",
  scrub: 1,
  markers: false
});
```

Recipe 12: SCROLL-TRANSLATE
- Target: `section.home-hero:nth-child(1)` (section)
- Scroll Range: 0-100%
```javascript
gsap.to("section.home-hero:nth-child(1)", {
  y: -10133,
  ease: "none",
  scrollTrigger: {
    trigger: "section.home-hero:nth-child(1)",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});
```

Recipe 13: SCROLL-TRANSLATE
- Target: `div.home-hero` (div)
- Scroll Range: 0-100%
```javascript
gsap.to("div.home-hero", {
  y: -11233,
  ease: "none",
  scrollTrigger: {
    trigger: "div.home-hero",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});
```

Recipe 14: SCROLL-TRANSLATE
- Target: `div.gl-canvas:nth-child(1)` (div)
- Scroll Range: 0-100%
```javascript
gsap.to("div.gl-canvas:nth-child(1)", {
  y: -10133,
  ease: "none",
  scrollTrigger: {
    trigger: "div.gl-canvas:nth-child(1)",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});
```

Recipe 15: SCROLL-TRANSLATE
- Target: `section.home-marquee:nth-child(2)` (section)
- Scroll Range: 0-100%
```javascript
gsap.to("section.home-marquee:nth-child(2)", {
  y: -10133,
  ease: "none",
  scrollTrigger: {
    trigger: "section.home-marquee:nth-child(2)",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});
```

Recipe 16: SCROLL-TRANSLATE
- Target: `div.is-marquee` (div)
- Scroll Range: 0-100%
```javascript
gsap.to("div.is-marquee", {
  y: -10133,
  ease: "none",
  scrollTrigger: {
    trigger: "div.is-marquee",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});
```

Recipe 17: STICKY-PIN
- Target: `div.is-horiz-scroll:nth-child(1)` (div)
- Scroll Range: 0-100%
```javascript
ScrollTrigger.create({
  trigger: "div.is-horiz-scroll:nth-child(1)",
  pin: true,
  start: "top top",
  end: "bottom 100%",
  scrub: 1,
  markers: false
});
```

Recipe 18: SCROLL-TRANSLATE
- Target: `div.horizontal-pin-wrap` (div)
- Scroll Range: 0-100%
```javascript
gsap.to("div.horizontal-pin-wrap", {
  y: -11233,
  ease: "none",
  scrollTrigger: {
    trigger: "div.horizontal-pin-wrap",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});
```

Recipe 19: SCROLL-TRANSLATE
- Target: `div.horizontal-pin-spacer` (div)
- Scroll Range: 0-100%
```javascript
gsap.to("div.horizontal-pin-spacer", {
  y: -11233,
  ease: "none",
  scrollTrigger: {
    trigger: "div.horizontal-pin-spacer",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});
```

Recipe 20: STICKY-PIN
- Target: `div.horizontal-pin-sticky` (div)
- Scroll Range: 0-100%
```javascript
ScrollTrigger.create({
  trigger: "div.horizontal-pin-sticky",
  pin: true,
  start: "top top",
  end: "bottom 100%",
  scrub: 1,
  markers: false
});
```

Recipe 21: STICKY-PIN
- Target: `div.sticky-item` (div)
- Scroll Range: 0-100%
```javascript
ScrollTrigger.create({
  trigger: "div.sticky-item",
  pin: true,
  start: "top top",
  end: "bottom 100%",
  scrub: 1,
  markers: false
});
```

Recipe 22: SCROLL-TRANSLATE
- Target: `section.is-otot-home` (section)
- Scroll Range: 0-100%
```javascript
gsap.to("section.is-otot-home", {
  y: -10133,
  ease: "none",
  scrollTrigger: {
    trigger: "section.is-otot-home",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});
```

Recipe 23: SCROLL-TRANSLATE
- Target: `div.is-otot-home` (div)
- Scroll Range: 0-100%
```javascript
gsap.to("div.is-otot-home", {
  y: -10133,
  ease: "none",
  scrollTrigger: {
    trigger: "div.is-otot-home",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});
```

Recipe 24: SCROLL-TRANSLATE
- Target: `div.otot-home-bg:nth-child(2)` (div)
- Scroll Range: 0-100%
```javascript
gsap.to("div.otot-home-bg:nth-child(2)", {
  y: -10133,
  ease: "none",
  scrollTrigger: {
    trigger: "div.otot-home-bg:nth-child(2)",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});
```

Recipe 25: SCROLL-TRANSLATE
- Target: `section.is-otot-end` (section)
- Scroll Range: 0-100%
```javascript
gsap.to("section.is-otot-end", {
  y: -11233,
  ease: "none",
  scrollTrigger: {
    trigger: "section.is-otot-end",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});
```



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
8. Do not copy original text — adapt all copy to "Taller de motos" while preserving class structure and visual styling.
```
