---
language: "th"
title: "Cascade-layers — Skeletonic Stylus"
name: "Skeletonic Stylus"
description: "Skeletonic ships inside @layer skeletonic so any CSS you write outside that layer wins, regardless of selector specificity. No more !important, no more order tricks."
layout: page
permalink: https://skeletonic.io/th/cascade-layers/
date: 2026-04-30
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "css cascade layers, @layer, css specificity, !important, override css, framework override"
---

> **This documentation is provided in English. A full translation is in progress.** <!-- i18n-summary -->

Every rule shipped by Skeletonic is wrapped in a single CSS
[cascade layer](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer).
The compiled `skeletonic.min.css` starts with this declaration:

```css
@layer skeletonic.reset, skeletonic.tokens, skeletonic.layout,
       skeletonic.elements, skeletonic.components, skeletonic.utilities;
@layer skeletonic { /* …everything else… */ }
```

Inside the layer, the cascade order matches the conceptual stack:
reset → tokens → layout → elements → components → utilities.

<hr class="hr-text" data-content="Why">

## Why this matters

**Anything you write outside a layer always wins.** That includes
your component CSS, your dark-mode tweaks, your one-off page styles —
they take effect without specificity tricks, without `!important`,
without trying to out-specify the framework's selectors.

Try it. Drop this into any page that already loads Skeletonic:

```css
.button {
  background: hot pink;
  border-radius: 0;
}
```

The button override applies — even though Skeletonic's own `.button`
selector targets exactly the same element. The unlayered rule wins
because **the unlayered cascade tier is always above any named layer**.

<hr class="hr-text" data-content="Sub-layers">

## Sub-layers

Skeletonic's six sub-layers let you target the framework with surgical
precision. To override only the spacing tokens but leave the components
alone:

```css
@layer skeletonic.tokens {
  :root {
    --gr-h1: 5rem;
    --cl-primary: hsl(280, 80%, 45%);
  }
}
```

Or to ship your own component layer that participates in the cascade
*above* Skeletonic's components but *below* its utilities:

```css
@layer skeletonic, app-components, skeletonic.utilities;

@layer app-components {
  .my-card { /* … */ }
}
```

<hr class="hr-text" data-content="Browser support">

## Browser support

Cascade layers are a 2022 feature. Baseline support: Chrome 99,
Firefox 97, Safari 15.4. **All evergreen browsers and the last two
years of Safari ship layer support.** Skeletonic's
`.browserslistrc` targets `> 0.5%, last 2 versions, Firefox ESR, not
dead`, all of which support `@layer`.

In the unlikely case you need to support an older browser, an
unsupported browser will see Skeletonic's rules with their natural
specificity — the rules still apply, you just can't override with
unlayered CSS. That's a graceful degradation, not a breakage.

[Read the @layer spec on MDN ↗](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer) ·
[Design tokens →](/tokens/) ·
[Browse the components →](/components/)
