---
language: "pl"
title: "Utilities — Skeletonic Stylus"
name: "Skeletonic Stylus"
description: "Every utility class in Skeletonic Stylus, with the equivalent HTML attribute form. Layout, flex, text, sizing, visibility, spacing — class or attribute, your choice."
layout: page
permalink: https://skeletonic.io/pl/utilities/
date: 2026-04-30
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "css utilities, attribute selector, html data attributes, flex utilities, text utilities, css classes vs attributes"
---

> **Szczegółowa dokumentacja dla tej sekcji jest obecnie dostępna poniżej w języku angielskim. Pracujemy nad pełnym tłumaczeniem.** <!-- i18n-summary -->

Skeletonic ships a small, opinionated set of utility classes — and
**every one of them has an equivalent HTML attribute form**.

```html
<div class="center flex justify-center">…</div>
<div center flex justify-center>…</div>
```

Both selectors are emitted from the same Stylus source and produce the
same CSS rules. Pick whichever your team finds more readable. The
attribute form is especially nice for hand-written HTML and AI-generated
markup, where extra `class=" "` quotes add visual noise.

<hr class="hr-text" data-content="Layout">

## Layout

| Class | Attribute | Effect |
|---|---|---|
| `.centered` | `[centered]` | Fixed-position centred (50%, 50%) |
| `.center` | `[center]` | Flex column, items + content centred |
| `.left` | `[left]` | Flex column, items + content flex-start |
| `.right` | `[right]` | Flex column, items + content flex-end |

## Flexbox

| Class | Attribute | Effect |
|---|---|---|
| `.flex` | `[flex]` | `display: flex` |
| `.justify-start` | `[justify-start]` | `justify-content: flex-start` |
| `.justify-center` | `[justify-center]` | `justify-content: center` |
| `.justify-end` | `[justify-end]` | `justify-content: flex-end` |
| `.align-start` | `[align-start]` | `align-items: flex-start` |
| `.align-center` | `[align-center]` | `align-items: center` |
| `.align-end` | `[align-end]` | `align-items: flex-end` |
| `.direction-vertical` | `[direction-vertical]` | `flex-direction: column` |
| `.direction-horizontal` | `[direction-horizontal]` | `flex-direction: row` |

## Text alignment & casing

| Class | Attribute | Effect |
|---|---|---|
| `.text-start`, `.text-left` | — | `text-align: start` (RTL-aware) |
| `.text-center` | — | `text-align: center` |
| `.text-end`, `.text-right` | — | `text-align: end` (RTL-aware) |
| `.text-uppercase`, `.uppercase` | `[uppercase]` | `text-transform: uppercase` |
| `.text-lowercase`, `.lowercase` | `[lowercase]` | `text-transform: lowercase` |
| `.capitalized` | `[capitalized]` | `text-transform: capitalize` |
| `.italic` | `[italic]` | `font-style: italic` |

## Sizing

| Class | Attribute | Effect |
|---|---|---|
| `.size-full-width` | — | `width: 100%` |
| `.size-full-height` | — | `min-height: 100vh` |
| `.size-full` | — | both — full viewport |

## Box reset

| Class | Attribute | Effect |
|---|---|---|
| `.nomargin` | `[nomargin]` | `margin: 0` |
| `.nopadding` | `[nopadding]` | `padding: 0` |

## Border radius

All values use the golden-ratio constant (`var(--gr) ≈ 1.62rem`).

| Class | Attribute | Effect |
|---|---|---|
| `.radius` | `[radius]` | All four corners rounded |
| `.radius-top` | `[radius-top]` | Top two corners only |
| `.radius-bottom` | `[radius-bottom]` | Bottom two corners only |

## Visibility

| Class | Attribute | Effect |
|---|---|---|
| `.hidden` | `[hidden]` | `display: none` (also matches the native HTML `hidden` attribute) |

## Spacing — physical and logical

The spacing utilities follow a five-step golden-ratio scale
(`xs`, `sm`, `md`, `lg`, `xl`). See [the spacing ladder](/spacing/) for
each step's resolved value. Logical (`-start`, `-end`) forms auto-flip
in `<html dir="rtl">`.

```text
.padding-{size}            .margin-{size}
.padding-top-{size}        .margin-top-{size}
.padding-bottom-{size}     .margin-bottom-{size}

.padding-start-{size}      .margin-start-{size}     ← logical (RTL-aware)
.padding-end-{size}        .margin-end-{size}       ← logical (RTL-aware)
                           .margin-auto             ← centring helper
```

Where `{size}` is `xs` / `sm` / `md` / `lg` / `xl`. So `.padding-start-md`
produces `padding-inline-start: 1.62rem` and auto-flips to
`padding-inline-end` when the container's writing direction is RTL.

## Group / clearfix

| Class | Effect |
|---|---|
| `.group` | Adds a `::after` clearfix pseudo-element |

<hr class="hr-text" data-content="Why both?">

## Why class **and** attribute selectors?

Three reasons:

1. **Authoring readability.** `<div center flex>` is shorter and easier
   to scan than `<div class="center flex">`. For pages with many
   utility-driven elements, the attribute form keeps `class` free for
   semantic state classes.
2. **AI-generated HTML.** LLMs produce attributes more reliably than
   long `class=" "` lists. Attributes are harder to typo.
3. **No runtime cost.** Both forms compile to the same selectors in
   the same CSS rules — no JavaScript, no preprocessor toggles. Pick
   either or both, freely mix.

The attribute selectors are valid HTML — they are *custom data
attributes* in the HTML5 sense. They render correctly, they round-trip
through `outerHTML`, and they don't trigger any validator warnings.

[Browse design tokens →](/tokens/) ·
[Spacing ladder →](/spacing/) ·
[Cascade layers →](/cascade-layers/)
