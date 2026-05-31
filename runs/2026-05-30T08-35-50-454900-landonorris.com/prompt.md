# 1. Executive Design Diagnosis

**Design Language:** contemporary digital (confidence: 30%)
**Signals:** 
**Sections:** 12 major sections detected
**Motion Complexity:** 6 scroll-linked animations
**CSS Complexity:** 0/100
**Visual Rhythm:** 2 viewport(s) captured

This reference uses a contemporary digital approach with heavy motion choreography and standard CSS effects.

---

# 2. Reference DNA Summary

**Stack:** GSAP, Lenis Scroll
**Layout:** Flexbox-dominant composition
**Typography:** Mona Sans Variable, Arial, sans-serif, Brier, Arial, sans-serif, Brier
**Palette:** rgba(0, 0, 0, 0), rgb(0, 0, 0), rgb(255, 255, 0), rgb(51, 51, 51), rgb(255, 255, 255), rgb(56, 152, 236), rgba(0, 0, 0, 0.1), rgb(170, 173, 176)
**Design Language:** contemporary digital
**Key Differentiators:** Clean, structured layout with subtle enhancements

---

# 3. Design Token System

## Color Palette
- **Text:** rgb(244, 244, 237), rgb(40, 44, 32), rgb(83, 84, 80), rgb(221, 225, 210)
- **Token:** #282c20, #f4f4ed, #111112, #b2c73a

## Typography
- Mona Sans Variable, Arial, sans-serif
- Brier, Arial, sans-serif
- Brier

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
--gap--med<deleted|variable-196f1660-85b7-2eda-5ec8-e43ca0f5032d>: 2rem;
--color--grey-on-track: #b9bbad;


---

# 4. CSS Architecture

## Extracted Stylesheets
- **Total CSS rules:** 1476
- **External stylesheets:** 1
- **Unique selectors:** 30
- **Keyframe animations:** 3
- **Media queries:** 8
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
- `screen and (max-width: 991px)` â€” 16 rule(s)
- `screen and (max-width: 767px)` â€” 16 rule(s)
- `screen and (max-width: 479px)` â€” 16 rule(s)
- `screen and (max-width: 767px)` â€” 1 rule(s)
- `(min-width: 768px)` â€” 8 rule(s)
- `screen and (max-width: 991px)` â€” 2 rule(s)
- `screen and (max-width: 767px)` â€” 3 rule(s)
- `screen and (max-width: 479px)` â€” 2 rule(s)

## @font-face Declarations
```css
@font-face { font-family: webflow-icons; src: url("data:application/x-font-ttf;charset=utf-8;base64,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") format("truetype"); font-weight: normal; font-style: normal; }
```
```css
@font-face { font-family: Brier; src: url("https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67b6113a220f85ad6497495a_Brier-Bold.woff2") format("woff2"); font-weight: 700; font-style: normal; font-display: swap; }
```
```css
@font-face { font-family: "Mona Sans Variable"; src: url("https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67bc6274c5b4108b123aa4d5_MonaSans-VariableFont_wdth%2Cwght.woff2") format("woff2"); font-weight: 200 900; font-style: normal; font-display: swap; }
```

## Key Selectors (first 30)

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
  /* + 7 more properties */
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
  /* + 14 more properties */
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

# 6. Section-by-Section Build Spec

12 sections detected:

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

### Element Style Blueprint

- **`<div>`** .c.home-hero
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | display: flex | padding: 0px 16.6667px
  - anim: all
  - text: "Next Race Monacogp mclaren f1 since 2019mclaren f1 since 2019 tap to lockBack to"

- **`<div>`** .gl-canvas
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | display: block
  - anim: all

- **`<div>`** .home-hero-next-race-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | display: block
  - anim: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1)
  - text: "Next Race Monacogp mclaren f1 since 2019"

- **`<div>`** .home-hero-next-race-outline.w-embed
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | display: block
  - anim: all

- **`<svg>`**
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | display: inline
  - anim: all

- **`<div>`** .home-hero-next-race-row.is-1
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | display: flex
  - anim: all
  - text: "Monacogp"

- **`<div>`** .home-hero-next-race-row.is-2
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | display: flex
  - anim: all
  - text: "mclaren f1 since 2019"

- **`<div>`** .nr-list.w-dyn-items
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | display: block
  - anim: all
  - text: "Monacogp"

- **`<div>`** .w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | display: block
  - anim: all
  - text: "Monacogp"

- **`<div>`** .base-helmet-rive-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | display: block
  - anim: all

- **`<div>`** .base-helmet-rive.w-embed
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | display: flex
  - anim: all

- **`<div>`** .home-hero-next-race-top
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | display: flex
  - anim: all
  - text: "Next Race"

- **`<div>`** .eyebrow-w.hero-next-race
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | display: flex
  - anim: all
  - text: "mclaren f1 since 2019"

- **`<div>`** .text-eyebrow
  - font: 8.33333px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | display: block
  - anim: all
  - text: "mclaren f1 since 2019"

- **`<div>`** .text-eyebrow
  - font: 8.33333px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | display: block
  - anim: all
  - text: "Next Race"

### HTML Structure

```html
<section data-hero-animation-container="" class="s home-hero"><div class="c home-hero"><div data-gl="head" data-sticky-hero="canvas" class="gl-canvas"></div><div class="home-hero-next-race-w"><div class="home-hero-next-race-outline w-embed"><svg width="119" height="244" viewBox="0 0 119 244" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M118.5 6v232a5.5 5.5 0 0 1-5.5 5.5H6A5.5 5.5 0 0 1 .5 238V25A5.5 5.5 0 0 1 6 19.5h46.346c4.695 0 9.167-2 12.297-5.498l7.46-8.337A15.5 15.5 0 0 1 83.653.5H113a5.5 5.5 0 0 1 5.5 5.5Z" stroke="currentColor"></path>
</svg></div><div class="home-hero-next-race-top"><div data-anim-high="right, lime" split-text="lines" class="text-eyebrow">Next Race</div></div><div class="home-hero-next-race-row is-1 w-dyn-list"><div role="list" class="nr-list w-dyn-items"><div role="listitem" class="w-dyn-item"><a href="/calendar" class="home-hero-next-race-row w-inline-block"><div class="home-hero-next-race-rive-w"><div class="home-hero-next-race-rive w-embed"><!-- data-rive-circuit-hover="true"
-- looks for all [data-rive-circuit-hover-target] elements on page
-- changes the data-rive-input-track to the value of that hovered attribute
--> 
<canvas data-rive-o
/* Snippet truncated for clarity */

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
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | display: flex
  - anim: all
  - text: "Message from lando"

- **`<div>`** .marquee-gl-rive-target
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | display: block
  - anim: all

- **`<div>`** .marqee-adv-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | display: block
  - anim: all
  - text: "Message from lando"

- **`<div>`** .marquee-gl-target-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | display: flex
  - anim: all

- **`<div>`** .marquee-gl-target
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | display: flex
  - anim: all

- **`<div>`** .marquee-adv-top-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | display: flex
  - anim: all
  - text: "Message from lando"

- **`<div>`** .marquee-adv-top-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | display: flex
  - anim: all
  - text: "Message from lando"

- **`<div>`** .marquee-signature-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | display: block
  - anim: all

- **`<div>`** .eyebrow-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | display: flex
  - anim: all
  - text: "Message from lando"

- **`<div>`** .gl-carousel
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | display: block
  - anim: all

### HTML Structure

```html
<section class="s home-marquee"><div class="c is-marquee"><div class="marqee-adv-layout"><div class="marquee-adv-top-w"><div class="marquee-adv-top-layout"><div class="marquee-signature-w"><div data-wf--c-home-hero-icon--variant="ln4" class="home-hero-logo-wrap"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67cecea4e9d311047dcb51e5_ln4-hw-signature2.svg" loading="eager" data-hero-anim="img" alt="Lando's signature in lime color" class="image is-home-marquee-sig-img w-variant-88b83061-c887-c094-eb94-cbb8cabca5e0 is-1"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67f517cdc5bb460c3c3b8e5b_ln4-LN-logo-svg.svg" loading="eager" data-hero-anim="img" alt="" class="image is-home-marquee-sig-img w-variant-88b83061-c887-c094-eb94-cbb8cabca5e0 is-ln4-logo"></div></div><div class="eyebrow-w"><div split-text="chars" data-hero-anim="msg" class="text-eyebrow">Message from lando</div></div></div></div><div class="marquee-gl-target-w"><div data-sticky-hero="target" class="marquee-gl-target"><div class="marquee-gl-rive-target"><div class="marquee-gl-rive-w w-embed"><canvas data-rive-object="" data-rive-file="signature" data-rive-artboard="signature" dat
/* Snippet truncated for clarity */

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
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | display: block | padding: 0px 16.6667px
  - anim: all
  - text: "mclaren f1 since 2019Redefining limits, fighting for wins, bringing it all in al"

- **`<div>`** .impact-content-w.is-home
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(221, 225, 210) | display: flex | padding: 80px 0px 160px | margin: 0px 169.344px
  - anim: all
  - text: "mclaren f1 since 2019Redefining limits, fighting for wins, bringing it all in al"

- **`<div>`** .text-impact-lg-mona
  - font: 105.833px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(221, 225, 210) | display: block
  - anim: all
  - text: "Redefining limits, fighting for wins, bringing it all in all ways. Defining a le"

- **`<div>`** .impact-icon-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(221, 225, 210) | display: flex
  - anim: all
  - text: "mclaren f1 since 2019"

- **`<div>`** .base-helmet-rive-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(221, 225, 210) | display: block
  - anim: all

- **`<div>`** .base-helmet-rive.w-embed
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(221, 225, 210) | display: flex | margin: 0px 10.5469px 0px 10.5312px
  - anim: all

- **`<div>`** .text-eyebrow
  - font: 8.33333px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(221, 225, 210) | display: block
  - anim: all
  - text: "mclaren f1 since 2019"

- **`<div>`** .base-helmet-rive.w-embed
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(221, 225, 210) | margin: 0px auto
  - anim: all

### HTML Structure

```html
<section class="s"><div class="c"><div class="impact-content-w is-home"><div class="impact-icon-w"><div class="base-helmet-rive-w"><div data-rive-placeholder="" class="base-helmet-rive w-embed"><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 97 50.1">
  <path d="M.4 27.6s3 .9 6.1 5.9c-.4-1.1-.6-2.2-.8-3.4C1.5 27.8 1.1 25.7.8 22c.2 1 3.2 2.4 3.6 4 .4 1.3.8 2.5 1.3 3.1 0-1-.1-2 0-3v-.5c-1.3-1.1-4.3-4.3-3.5-9.1.5 1.2 3 1.6 3.7 7.4.2-1.1.5-2.1.8-3.2C5.5 19.2 3.5 15 5.6 7.9c.3 1.2 2.5 5.7 2 8.3-.2.8-.2 1.7-.3 2.6 0-.2.1-.4.2-.6.3-.9.7-1.8 1.2-2.7 0-1.4-.2-2.8-.8-4.1-.3-.6-.4-1.3-.4-2s.4-1.3.8-1.8c.6-.8.8-2.8.8-2.8s2.2 3.4 0 9.8c.4-.7.9-1.5 1.4-2.1.4-1 .4-2 .2-3.1-.4-1.8-.7-4.5 2.2-7.7-.3 1.5.4 4.2-.1 6-.4 1.3-.9 2.6-1.5 3.8.5-.6 1.1-1.2 1.7-1.8.3-1 .2-2.5.8-4.9.7-2.9 2.2-3.3 2.8-4.8.5 3.3-1 6.7-2.4 8.6l.4-.3c.4-.3.8-.6 1.1-1 .4-1.8 1.2-3.5 2.4-5 .8-.9 2.7-1.4 3-2.2-.3 3.3-2.3 5.1-4 6.3.9-.5 1.9-.7 2.9-.7s2 .4 2.8 1c0 0-2.2 1.3-3.7 1.1-1.5-.2-2.1-.5-3-.2-.3.3-.7.6-1.1.9 2.2-.6 4.8 1 5.8 2-1.9.9-3.5.3-4.3-.6-.7-.7-1.8-.4-2.3-.8-.7.6-1.3 1.2-2 1.8-.7.7-1.3 1.5-1.9 2.4 1.4-1.3 3.7-2.7 6-2.2-.3.9-1.8 2.5-3.4 3.1-1.4.4-2.7.4-3.6.9-.6 1-1 2.1-1.4 3.3 2.1-3.1 6.3
/* Snippet truncated for clarity */

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
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | display: flex | padding: 77px 16.6667px 33.3333px 1080px
  - anim: all
  - text: "Qatar, 2024FIA Prize Giving, 2024It doesn’t matter where you start, it’s how you"

- **`<div>`** .c.is-horiz-scroll
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | display: block
  - anim: all
  - text: "Qatar, 2024FIA Prize Giving, 2024It doesn’t matter where you start, it’s how you"

- **`<div>`** .horizontal-pin-wrap
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | display: block
  - anim: all
  - text: "Qatar, 2024FIA Prize Giving, 2024It doesn’t matter where you start, it’s how you"

- **`<div>`** .horizontal-pin-spacer
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | display: block
  - anim: all
  - text: "Qatar, 2024FIA Prize Giving, 2024It doesn’t matter where you start, it’s how you"

- **`<div>`** .horizontal-pin-sticky
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | display: flex
  - anim: all
  - text: "Qatar, 2024FIA Prize Giving, 2024It doesn’t matter where you start, it’s how you"

- **`<div>`** .sticky-track-theme-change
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | display: block
  - anim: all

### HTML Structure

```html
<section data-gl-change-to="white, dark-green-tint-1-low" data-horizontal-section="" data-h-color-from="dark-green" data-h-color-to="white" data-gl-change-track="" data-gl-change-from="dark-green, dark-green-tint-1" class="s is-horizontal-track"><div class="c is-horiz-scroll"><div class="horizontal-pin-wrap"><div class="horizontal-pin-spacer"><div class="horizontal-pin-sticky"><div class="horizontal-track"><div class="horizontal-grid-col"><div class="horizontal-item-w is-home-1"><div class="horizontal-item-layout is-home-1"><div class="eyebrow-w c-green-off-white-2"><div split-text="lines" class="text-eyebrow">Qatar, 2024</div></div><div class="horizontal-item-img-w is-home-1"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa04b14a1ca33c0b25_ln-home-horiz-1.webp" loading="eager" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa04b14a1ca33c0b25_ln-home-horiz-1-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa04b14a1ca33c0b25_ln-home-horiz-1.webp 649w" alt="Lando in casual clothes walking through paddock" class="image is-horizontal-scroll"></div></div></div><div class="horizontal
/* Snippet truncated for clarity */

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

### Element Style Blueprint

- **`<div>`** .c.is-otot-home
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | display: block | padding: 0px 16.6667px
  - anim: all
  - text: "ONTRACK Most recent results, career stats and photos from trackside. OFFTRACKCam"

- **`<div>`** .otot-home-bg
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | display: block
  - anim: all

- **`<div>`** .otot-home-inner
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | display: flex
  - anim: all
  - text: "ONTRACK Most recent results, career stats and photos from trackside. OFFTRACKCam"

- **`<div>`** .otot-home-img-w.is-2
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | display: flex
  - anim: all

- **`<img>`** .otot-home-img
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | display: block
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e56_ln4-hp-lando-head.webp

- **`<div>`** .otot-home-img-w.is-1
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | display: flex
  - anim: all

- **`<img>`** .otot-home-img.is-helmet
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | display: block
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e53_ln4-hp-lando-helmet.webp

- **`<div>`** .otot-home-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | display: flex
  - anim: all
  - text: "ONTRACK Most recent results, career stats and photos from trackside. OFFTRACKCam"

- **`<div>`** .otot-home-text-col.is-1
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | display: flex
  - anim: all
  - text: "ONTRACK Most recent results, career stats and photos from trackside."

- **`<div>`** .otot-home-text-col.is-2
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | display: flex
  - anim: all
  - text: "OFFTRACKCampaigns, shoots and other such promotional materials for fans"

- **`<div>`** .otot-home-text-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | display: block
  - anim: all
  - text: "ONTRACK"

- **`<div>`** .otot-home-text-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | display: block
  - anim: all
  - text: "OFFTRACK"

- **`<div>`** .otot-home-p-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | display: flex | margin: 16.6667px 0px 0px
  - anim: all
  - text: "Most recent results, career stats and photos from trackside."

- **`<div>`** .otot-home-p-w.is-2
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | display: flex | margin: 16.6667px 0px 0px
  - anim: all
  - text: "Campaigns, shoots and other such promotional materials for fans"

- **`<div>`** .btn-auto-top
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | display: block
  - anim: all

### HTML Structure

```html
<section data-otot-top="" data-designmode-white="" class="s is-otot-home"><div class="c is-otot-home"><div class="otot-home-inner"><div class="otot-home-layout"><div class="otot-home-text-col is-1"><div class="otot-home-text-w"><h2 data-anim-high="right, dark-green-tint-1" split-text="lines" class="text-impact-reg-brier">ON<br></h2><h2 data-anim-high="right, dark-green-tint-1" split-text="lines" class="text-impact-reg-mona line-increase">TRACK</h2><div class="otot-home-text-rive w-embed"><canvas data-rive-object="" data-rive-file="phrases" data-rive-artboard="phrase_on" data-rive-state-machine="phrase_on" data-rive-fit="contain" data-rive-scrolltrigger="true" data-rive-scrolltrigger-start="top center">
</canvas></div></div><div class="otot-home-p-w"><p split-text="lines" data-anim-high="right, dark-green-tint-1, 200" class="text-body-reg-mona">Most recent <strong>results</strong>, career stats and photos from trackside.</p></div><div class="btn-auto-top"><a title="On Track page" data-btn-rive-rotate="true" data-btn-rive-hover="" href="/on-track" class="btn-w icon-only w-inline-block"><div class="btn-inner"><div class="btn-icon-w"><div class="btn-rive-w is-large w-embed"><canvas dat
/* Snippet truncated for clarity */

```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 6: Hero
- **Confidence:** 0%
- **Tag:** section
- **Classes:** `section`
- **Size:** full viewport height
- **Media:** 1 image(s)
**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 7: Team
- **Confidence:** 20%
- **Tag:** section
- **Classes:** `section`
- **Size:** full viewport height
- **Headings:** H2: "Helmets"; H2: "Hall of Fame"; H3: "Season"; H3: "Discoball"; H3: "Dark Glitter"; H3: "Season"; H3: "Porcelain"; H3: "Japan"; H3: "GIF"; H3: "Dark Mode"; H3: "Race"; H3: "Las Vegas"; H3: "Chrome"; H3: "Beachball"; H3: "Basketball"; H3: "Season"; H3: "Silverstone"; H3: "Season"
- **Media:** 64 image(s), 64 SVG(s)
**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 8: Hero
- **Confidence:** 15%
- **Tag:** section
- **Classes:** `section`
- **Size:** 476px height
- **CTAs:** view on track
- **Media:** 2 canvas(es), 1 SVG(s)
**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 9: Hero
- **Confidence:** 15%
- **Tag:** section
- **Classes:** `section`
- **Size:** 907px height
- **Headings:** H2: "World Drivers' Champion"
- **CTAs:** Visit the store
- **Media:** 5 image(s), 1 canvas(es), 1 SVG(s)
**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 10: Contact
- **Confidence:** 35%
- **Tag:** section
- **Classes:** `section`
- **Size:** 795px height
- **Headings:** H2: "partners"; H2: "&campaigns"
- **CTAs:** view partnerships
- **Media:** 18 image(s), 2 canvas(es)
**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 11: Hero
- **Confidence:** 15%
- **Tag:** section
- **Classes:** `section`
- **Size:** full viewport height
- **Headings:** H2: "what’s upOn Socials"
- **CTAs:** tiktok, instagram, Youtube, Twitch
- **Media:** 7 image(s), 1 canvas(es)
**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 12: Footer
- **Confidence:** 40%
- **Tag:** section
- **Classes:** `section`
- **Size:** full viewport height
- **Background color:** rgb(244, 244, 237)
- **Headings:** H2: "Always bringing the fight."
- **CTAs:** Home, On Track, Off Track, Partnerships, Calendar
- **Media:** 10 image(s), 2 canvas(es), 8 SVG(s)
**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.


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

- **Images:** 10 detected â€” plan for hero, content, and decorative images
- **Videos:** 0 detected
- **Fonts:** 3 detected
- **Inline SVGs:** 86
- **Canvases:** 20

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

**Performance risk:** medium
- WebGL context detected - may impact mobile performance
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
- All 12 sections match the extracted layout rhythm.
- All scroll animations have reduced-motion alternatives.
- WebGL/canvas is lazy-loaded and never contains critical text.
- Primary CTA is visible above the fold on desktop and mobile.
- WCAG AA contrast maintained on all text surfaces.
- Page loads in under 5 seconds on 3G Fast.
- All 6 motion patterns are recreated with equivalent feel.

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
