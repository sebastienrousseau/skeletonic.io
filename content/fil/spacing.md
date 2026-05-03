---
language: "fil"
title: "Spacing — Skeletonic Stylus"
name: "Skeletonic Stylus"
description: "Skeletonic's spacing scale uses five t-shirt-sized steps (xs / sm / md / lg / xl) derived from the golden ratio. Padding and margin utilities map to one ladder."
layout: page
permalink: https://skeletonic.io/fil/spacing/
date: 2026-05-02
author: Sebastien Rousseau
theme_color: "oklch(0.55 0.2 250)"
keywords: "css spacing scale, golden ratio, padding utility, margin utility, layout system"
---

> **This documentation is provided in English. A full translation is in progress.** <!-- i18n-summary -->

The padding and margin utility classes in Skeletonic share a single
**five-step golden-ratio scale**. Each step is rooted at
`--gr-fsb` (1.62 rem, the body font size) and scales up or down by
factors of Φ. The result is layout that breathes consistently from
inline buttons all the way to hero sections.

<hr class="hr-text" data-content="Scale">

## The five steps

| Class | Value | Token | Use it for |
|---|---:|---|---|
| `xs` | ~0.38&nbsp;rem | `var(--gr-small)rem` | Pill icons, badge inset, very tight clusters |
| `sm` | ~0.62&nbsp;rem | `var(--gr-large)rem` | Inline form gaps, button-group separators |
| `md` | 1.62&nbsp;rem | `var(--gr-fsb)rem` | Default body / card padding |
| `lg` | ~2.62&nbsp;rem | `calc(var(--gr-fsb) × Φ)` | Section breathing room |
| `xl` | ~4.24&nbsp;rem | `calc(var(--gr-fsb) × Φ²)` | Hero / landmark separation |

Values are emitted as **`rem` units** so they scale with the user's
root font-size — perfect for accessibility and for matching the type
scale exactly.

<hr class="hr-text" data-content="Visual">

## Visual ladder

<style>
  .spacing-row{
    display:flex;
    align-items:center;
    gap:1rem;
    margin:.25rem 0;
    font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
    font-size:.875rem;
  }
  .spacing-row code{
    flex: 0 0 7.5rem;
    text-align:right;
  }
  .spacing-bar{
    background: oklch(0.55 0.2 250);
    height: 1rem;
    border-radius: 2px;
  }
</style>

<div class="spacing-row"><code>.padding-xs</code><div class="spacing-bar" style="width: 0.38rem"></div></div>
<div class="spacing-row"><code>.padding-sm</code><div class="spacing-bar" style="width: 0.62rem"></div></div>
<div class="spacing-row"><code>.padding-md</code><div class="spacing-bar" style="width: 1.62rem"></div></div>
<div class="spacing-row"><code>.padding-lg</code><div class="spacing-bar" style="width: 2.62rem"></div></div>
<div class="spacing-row"><code>.padding-xl</code><div class="spacing-bar" style="width: 4.24rem"></div></div>

<hr class="hr-text" data-content="Forms">

## Available class forms

For every step (`xs` / `sm` / `md` / `lg` / `xl`) the library emits:

```text
.padding-{size}            .margin-{size}
.padding-top-{size}        .margin-top-{size}
.padding-bottom-{size}     .margin-bottom-{size}

.padding-start-{size}      .margin-start-{size}     ← logical, RTL-aware
.padding-end-{size}        .margin-end-{size}       ← logical, RTL-aware
                           .margin-auto             ← centring helper
```

The logical (`-start` / `-end`) forms compile to `padding-inline-start`
/ `padding-inline-end` (or `margin-inline-*`) so they auto-flip in
`<html dir="rtl">`. Pair them with the t-shirt size to get
`padding-start-md`, `margin-end-lg`, etc.

> **v1.x → v2.0 migration.** The numeric scale (`.padding-0` through
> `.padding-11`, percentage-based) was replaced with this five-step
> rem-based scale. The new system is shorter, more predictable, and
> easier to reason about. See the [changelog](/changelog/) for the
> full migration list.

[Browse utility classes →](/utilities/) ·
[Design tokens →](/tokens/)
