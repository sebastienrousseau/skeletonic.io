---
title: "About Skeletonic Stylus"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus is an open-source Stylus CSS library for accessible, fast, modular UI styling."
layout: page
permalink: https://skeletonic.io/about/
date: 2026-04-08
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "skeletonic, about, stylus, css framework, philosophy"
---

<p class="badges">
  <img alt="GitHub Stars" src="https://img.shields.io/github/stars/sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=Stars" height="28" loading="lazy">
  <img alt="Monthly Downloads" src="https://img.shields.io/npm/dm/@sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=Downloads" height="28" loading="lazy">
  <img alt="npm Version" src="https://img.shields.io/npm/v/@sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=npm" height="28" loading="lazy">
  <img alt="Bundle Size" src="https://img.shields.io/badge/gzipped-7.5%20KB-brightgreen?style=for-the-badge" height="28" loading="lazy">
  <img alt="License" src="https://img.shields.io/npm/l/@sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=License" height="28" loading="lazy">
  <img alt="WCAG" src="https://img.shields.io/badge/WCAG-2.2%20AA-2e7d32?style=for-the-badge" height="28" loading="lazy">
</p>

## The short version

**Skeletonic Stylus** is an open-source [Stylus](https://stylus-lang.com)
CSS library for accessible, fast, modular UI styling.

Born in 2018 as a personal experiment in **shipping less CSS** without
giving up the ergonomics of a real component library. Eight years later,
the goal is unchanged.

## What it gives you

<div class="feature-grid">
  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/thunder.min.svg" alt="Lightning bolt" width="64" height="64" loading="lazy" decoding="async">
    <h3>Lightning fast</h3>
    <p>Design and customise responsive interfaces in minutes. Native CSS variables, predefined classes, a 12-column grid covering every semantic HTML element.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/lightweight.min.svg" alt="Feather" width="64" height="64" loading="lazy" decoding="async">
    <h3>Lightweight</h3>
    <p>~7.5&nbsp;KB gzipped. Pages load faster. Every essential building block stays in.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/responsive.min.svg" alt="Responsive devices" width="64" height="64" loading="lazy" decoding="async">
    <h3>Responsive design</h3>
    <p>Crafted for desktop and mobile. Layouts adapt to any device. Touch-optimised, semantic HTML throughout.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/accessibility.min.svg" alt="Accessibility person" width="64" height="64" loading="lazy" decoding="async">
    <h3>Accessibility</h3>
    <p>WCAG&nbsp;2.2 baked in: focus-visible rings, AA contrast, skip-link helpers, keyboard-friendly components, reduced-motion support — no extra stylesheet, no <code>aria-*</code> boilerplate.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/components.min.svg" alt="Component blocks" width="64" height="64" loading="lazy" decoding="async">
    <h3>Component library</h3>
    <p>Modular CSS components and Stylus mixins. Buttons, forms, cards, alerts, badges, palettes and animations — clean, modular, ready to drop in.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/github.min.svg" alt="GitHub mark" width="64" height="64" loading="lazy" decoding="async">
    <h3>Free &amp; open source</h3>
    <p>Designed, built and maintained by Sebastien Rousseau. Dual-licensed under <strong>MIT</strong> or <strong>Apache&nbsp;2.0</strong>. No fees, no licensing costs, even for commercial use.</p>
  </article>
</div>

## How it compares

One self-hosted stylesheet covers typography, buttons, forms, cards,
tables, palettes, animations and utility classes. No JavaScript. No
build step required. No peer dependencies on Bootstrap, Tailwind or
Bulma.

| Feature | Skeletonic Stylus | Bootstrap 5 | Tailwind CSS | Bulma |
|---|---|---|---|---|
| Gzipped size | **~7.5&nbsp;KB** | ~30&nbsp;KB | ~10&nbsp;KB (varies) | ~30&nbsp;KB |
| WCAG 2.2 conformance | **Built-in** | Partial | Manual | Partial |
| Cascade layers | **Yes (`@layer`)** | No | No | No |
| Dark mode | **`prefers-color-scheme`** | Opt-in | Class-based | Opt-in |
| JavaScript required | **No** | Yes (Popper) | No | No |
| CycloneDX SBOM | **Yes** | No | No | No |
| Reduced-motion | **Honoured** | Partial | Manual | Partial |
| License | MIT or Apache 2.0 | MIT | MIT | MIT |

## Principles

1. **Accessibility is the floor, not the ceiling.** WCAG 2.2 conformance
   is baked into every component, never bolted on as a "theme".
2. **Bytes matter.** A single shipped stylesheet should not blow your
   page-weight budget. The 8&nbsp;KB gzipped ceiling is enforced in CI.
3. **Cascade layers beat specificity wars.** Override anything with
   confidence — no `!important`, no DOM-order tricks.
4. **Stylus is still good.** Terse, expressive, and lets the library
   stay in ~3,000 readable lines.
5. **Boring is a feature.** No JS dependencies. No build-time magic.
   No breaking renames. CSS classes that do exactly what they say.
6. **Themeable in seconds.** Native CSS custom properties for colours,
   spacing, type and radii.
7. **Supply-chain hardened.** Signed npm provenance. Pinned Dependabot
   updates. CVE-2023-44270 patched via overrides.

## Versioning &amp; semver

Skeletonic Stylus follows [Semantic Versioning 2.0](https://semver.org).

| Bump | When | Example |
|---|---|---|
| **Major** | Removing or renaming a public class, mixin, or token | 1.x → 2.0 |
| **Minor** | Adding a new component, mixin, or token | 1.1 → 1.2 |
| **Patch** | Bug fixes, a11y polish, performance, security | 1.1.6 → 1.1.7 |

All public class names, all CSS custom properties, and all exported
Stylus mixins are part of the public API. A breaking change earns a
major bump and a migration guide.

## Stewardship

Skeletonic Stylus is designed, built, and maintained by
[Sebastien Rousseau](https://sebastienrousseau.com). Dual-licensed
under [MIT](https://opensource.org/licenses/MIT) and
[Apache 2.0](https://opensource.org/licenses/Apache-2.0).

Issues, ideas, and contributions welcome —
[see the contribution guide](/contribute/).
