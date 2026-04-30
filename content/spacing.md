---
title: "Spacing scale — 12 stops, golden-ratio progression"
name: "Skeletonic Stylus"
description: "Skeletonic's spacing scale uses 12 percentage stops derived from the golden ratio (Φ ≈ 1.62). Padding and margin utilities map to this single ladder."
layout: page
permalink: https://skeletonic.io/spacing/
date: 2026-04-30
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "css spacing scale, golden ratio, padding utility, margin utility, layout system"
---

The padding and margin utility classes in Skeletonic share a single
**12-stop percentage scale** derived from the golden ratio. Each step
is roughly Φ × the previous one, which gives the layout a visual
rhythm without ever feeling mechanical.

<hr class="hr-text" data-content="Scale">

## The 12 stops

| `N` | Value | `.padding-N` produces |
|---:|---:|---|
| 0 | 0% | `padding: 0` |
| 1 | 0.81% | tight gap |
| 2 | 1.32% | small gap |
| 3 | 2.13% | comfortable gap |
| 4 | 3.44% | section breathing room |
| 5 | 5.57% | distinct section padding |
| 6 | 9.02% | hero-card padding |
| 7 | 14.59% | container inset |
| 8 | 23.61% | wide column gutter |
| 9 | 38.20% | half-page gutter |
| 10 | 61.80% | three-column row spacer |
| 11 | 100% | full-bleed |

Percentage values mean the spacing scales naturally with the parent's
inline size — `.padding-3` inside a 800-px container is bigger than
the same class inside a 320-px sidebar.

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
    background: hsl(210, 100%, 42%);
    height: 1rem;
    border-radius: 2px;
  }
</style>

<div class="spacing-row"><code>.padding-0</code><div class="spacing-bar" style="width: 0.0%"></div></div>
<div class="spacing-row"><code>.padding-1</code><div class="spacing-bar" style="width: 0.81%"></div></div>
<div class="spacing-row"><code>.padding-2</code><div class="spacing-bar" style="width: 1.32%"></div></div>
<div class="spacing-row"><code>.padding-3</code><div class="spacing-bar" style="width: 2.13%"></div></div>
<div class="spacing-row"><code>.padding-4</code><div class="spacing-bar" style="width: 3.44%"></div></div>
<div class="spacing-row"><code>.padding-5</code><div class="spacing-bar" style="width: 5.57%"></div></div>
<div class="spacing-row"><code>.padding-6</code><div class="spacing-bar" style="width: 9.02%"></div></div>
<div class="spacing-row"><code>.padding-7</code><div class="spacing-bar" style="width: 14.59%"></div></div>
<div class="spacing-row"><code>.padding-8</code><div class="spacing-bar" style="width: 23.61%"></div></div>
<div class="spacing-row"><code>.padding-9</code><div class="spacing-bar" style="width: 38.20%"></div></div>
<div class="spacing-row"><code>.padding-10</code><div class="spacing-bar" style="width: 61.80%"></div></div>
<div class="spacing-row"><code>.padding-11</code><div class="spacing-bar" style="width: 100%"></div></div>

<hr class="hr-text" data-content="Forms">

## Available class forms

For every step `N` (0–11) the library emits these utility classes:

```text
.padding-N            .margin-N
.padding-top-N        .margin-top-N
.padding-bottom-N     .margin-bottom-N

.padding-start-N      .margin-start-N      ← logical, RTL-aware
.padding-end-N        .margin-end-N        ← logical, RTL-aware
.padding-left-N       .margin-left-N       ← physical
.padding-right-N      .margin-right-N      ← physical
                      .margin-auto         ← centring helper
```

The logical (`-start` / `-end`) forms compile to `padding-inline-start`
/ `padding-inline-end` (or `margin-inline-*`) so they auto-flip in
`<html dir="rtl">`. The physical (`-left` / `-right`) forms always
behave as their name suggests, regardless of writing direction — use
them when you specifically need a physical-side outcome (e.g. icon
positioning that should not flip).

[Browse utility classes →](/utilities/) ·
[Design tokens →](/tokens/)
