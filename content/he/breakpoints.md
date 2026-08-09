---
language: "he"
title: "Breakpoints — Skeletonic Stylus"
name: "Skeletonic Stylus"
description: "Skeletonic doesn't ship the usual xs/sm/md/lg ladder. The container width adapts continuously through 38 min-width media queries from 220 px to 7680 px."
layout: page
permalink: https://skeletonic.io/he/breakpoints/
date: 2026-04-30
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "css breakpoints, responsive design, mobile first, container queries, em breakpoints"
---

> **This documentation is provided in English. A full translation is in progress.** <!-- i18n-summary -->

Most CSS frameworks expose a 4–5 step breakpoint ladder
(`xs`, `sm`, `md`, `lg`, `xl`). Skeletonic does not.

Instead, the `.container` width adapts through **38 `min-width` media
queries** from `13.75em` (220 px) to `480em` (7680 px). The container
gradually settles into a comfortable measure at every viewport size,
so layouts work on phones, tablets, laptops, ultrawide monitors, and
projection walls without you defining a single breakpoint yourself.

<hr class="hr-text" data-content="Why">

## Why so many?

Two reasons:

1. **There is no single "right" breakpoint** for every project. Modern
   container queries finally fix this at the component level, but the
   page-level container still needs to choose a measure. Picking 38
   small steps makes the wrong choice less wrong than picking 4 big
   ones.
2. **`em`-based queries adapt to user preference.** Each query is
   `em`-relative — a user who has set their root font-size to 24 px
   gets larger thresholds automatically, so the layout reflows when
   *their* text needs more room, not when your designer thought it
   would.

<hr class="hr-text" data-content="Use">

## You don't have to think about them

The 38 steps are a default the `.container` uses internally. If you
write your own component CSS, prefer **container queries** for
component-level responsiveness — they're now Baseline (Chrome 105+,
Safari 16+, Firefox 110+):

```css
.card {
  container-type: inline-size;
}

@container (min-width: 30em) {
  .card { padding: 2rem; }
}
```

For page-level responsiveness, the standard breakpoints most teams
reach for are `48em` (≈ 768 px, tablet portrait), `64em` (≈ 1024 px,
laptop), and `80em` (≈ 1280 px, desktop). Skeletonic's 38-step ladder
absorbs all of these, plus the cracks between them.

<hr class="hr-text" data-content="Range">

## The full range

The lowest threshold is `13.75em` (220 px — feature phones, smartwatch
detail views). The highest is `480em` (7680 px — 8K projection or
billboard displays). Between them, every sensible web viewport size
has at least one matching step.

If you need to inspect the exact ladder, it's generated from a single
`for` loop in
[`src/stylus/layout/media-queries.styl`](https://github.com/sebastienrousseau/skeletonic-stylus/blob/main/src/stylus/layout/media-queries.styl).

[Container queries primer (MDN) ↗](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries) ·
[Cascade layers →](/cascade-layers/) ·
[Browse components →](/components/)
