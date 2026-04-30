---
title: "Jurnal de modificări"
name: "Skeletonic Stylus"
description: "Note de lansare pentru Skeletonic Stylus, cu v1.1.7 detaliat complet."
layout: page
permalink: https://skeletonic.io/ro/jurnal-modificari/
author: Sebastien Rousseau
language: ro
theme_color: "hsl(210, 100%, 42%)"
keywords: "jurnal de modificări skeletonic, note de lansare, v1.1.7, semver"
---

> **Translation note (2026-04-30).** v1.1.7 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

## v1.1.7 — 2026-04 (curent)

Runda de „pregătire pentru lansare": accesibilitate, lanț de aprovizionare, igienă depozit.

### Accesibilitate (WCAG 2.2)
- **`$primary` întunecat** la `hsl(210, 100%, 42%)` pentru contrast AA pe text alb în butoane / badge-uri / linkuri.
- **`$secondary` întunecat** la `hsl(195, 100%, 33%)`.
- Adăugat inele **focus-visible** pe fiecare element interactiv.
- Adăugat wrapper **`@media (prefers-reduced-motion)`** în jurul modulului de animații.
- Adăugat comutare token **`prefers-color-scheme: dark`**.
- Adăugat mixin **target-size(24px)** pentru conformitate WCAG 2.2 SC 2.5.8.
- Adăugat helpere **focus-not-obscured** scroll-margin pentru headere sticky.

### Build &amp; lanț de aprovizionare
- **Cascade layers** — fiecare bloc locuiește acum în
  `@layer skeletonic.{reset,tokens,layout,elements,components,utilities}`.
- **CycloneDX SBOM** generat ca parte a tarball-ului npm.
- **Bugete `size-limit`** impuse în CI: limită 8 KB gzipped pe stylesheet-ul principal.
- **CVE-2023-44270** (linie nouă postcss) rezolvat prin `pnpm.overrides`.
- Proveniență + semnare pe workflow-ul de publicare npm
  (`--provenance --access public`).
- Eliminat plugin-ul arhivat `stylelint-a11y` din configurația de lint.

### Igienă depozit &amp; pachet consumator
- Directorul legacy `package/` eliminat; `dist/` este acum singura sursă de adevăr pentru consumatori.
- README rescris pentru a reflecta căile de instalare v1.1.7.
- `dist/` este commis; `debug/` este generat și gitignored.
- Noul `.github/workflows/npm-publish.yml` este bazat pe tag-uri.

### Remedieri de erori (P0)
- **Regresie selectorului părinte `row $:after`** — `$` înlocuit cu `&` în `src/stylus/components/_grid.styl`.
- **`.alternate`** aplica eronat `animation-direction: reverse` în loc de `alternate`.
- **Prefixare `.alert-*`** — `.alert.success` → `.alert.alert-success` pentru a evita coliziunile cu clasele de stare.

[Note complete lansare v1.1.7 pe GitHub ↗](https://github.com/sebastienrousseau/skeletonic-stylus/releases/tag/v1.1.7)

<hr class="hr-text" data-content="Istoric">

## Lansări anterioare

- **v1.1.6** — curățenie internă, actualizări dependențe.
- **v1.1.5** — adăugată paleta Material.
- **v1.1.0** — paleta Tachyons + refactorizare grid.
- **v1.0.5** — ultima lansare „legacy" înaintea revizuirii WCAG 2.2.
- **v1.0.0** — lansarea publică inițială (2018).

Pentru un istoric commit cu commit, vezi
[pagina GitHub Releases ↗](https://github.com/sebastienrousseau/skeletonic-stylus/releases).
