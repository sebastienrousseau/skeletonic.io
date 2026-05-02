---
title: "Om Skeletonic Stylus"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus ar ett CSS-bibliotek med oppen kallkod byggt i Stylus for tillganglig, snabb och modular UI-styling."
layout: page
permalink: https://skeletonic.io/sv/om-oss/
date: 2026-04-08
author: Sebastien Rousseau
language: sv
theme_color: "hsl(210, 100%, 42%)"
keywords: "skeletonic, om oss, stylus, css ramverk, filosofi"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

<p class="badges">
  <img alt="GitHub-stjarnor" src="https://img.shields.io/github/stars/sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=Stars" height="28" loading="lazy">
  <img alt="Manatliga nedladdningar" src="https://img.shields.io/npm/dm/@sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=Downloads" height="28" loading="lazy">
  <img alt="npm-version" src="https://img.shields.io/npm/v/@sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=npm" height="28" loading="lazy">
  <img alt="Paketstorlek" src="https://img.shields.io/badge/gzip-7.8%20KB-brightgreen?style=for-the-badge" height="28" loading="lazy">
  <img alt="Licens" src="https://img.shields.io/npm/l/@sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=License" height="28" loading="lazy">
  <img alt="WCAG" src="https://img.shields.io/badge/WCAG-2.2%20AA-2e7d32?style=for-the-badge" height="28" loading="lazy">
</p>

## Kortversionen

**Skeletonic Stylus** ar ett [Stylus](https://stylus-lang.com)-CSS-bibliotek med oppen kallkod for tillganglig, snabb och modular UI-styling.

Det foddes 2018 som ett personligt experiment i att **leverera mindre CSS** utan att ge upp ergonomin hos ett riktigt komponentbibliotek. Atta ar senare ar malet oforandrat.

## Vad det ger dig

<div class="feature-grid">
  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/thunder.min.svg" alt="Blixt" width="64" height="64" loading="lazy" decoding="async">
    <h3>Blixtsnabbt</h3>
    <p>Designa och anpassa responsiva granssnitt pa minuter. Nativa CSS-variabler, fordefinierade klasser, ett 12-kolumners rutsystem for varje semantiskt HTML-element.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/lightweight.min.svg" alt="Fjader" width="64" height="64" loading="lazy" decoding="async">
    <h3>Lattiktat</h3>
    <p>8,3&nbsp;KB gzippat. Sidor laddas snabbare. Alla viktiga byggstenar finns kvar.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/responsive.min.svg" alt="Responsiva enheter" width="64" height="64" loading="lazy" decoding="async">
    <h3>Responsiv design</h3>
    <p>Utformat for desktop och mobil. Layouter anpassar sig till alla enheter. Touch-optimerat, genomgaende semantisk HTML.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/accessibility.min.svg" alt="Tillganglighet" width="64" height="64" loading="lazy" decoding="async">
    <h3>Tillganglighet</h3>
    <p>WCAG&nbsp;2.2 inbyggt: focus-visible-ringar, AA-kontrast, skip-link-hjalp, tangentbordsvanliga komponenter, stod for reducerad rorelse — inget extra stylesheet, inget <code>aria-*</code>-boilerplate.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/components.min.svg" alt="Komponentblock" width="64" height="64" loading="lazy" decoding="async">
    <h3>Komponentbibliotek</h3>
    <p>Modulara CSS-komponenter och Stylus-mixins. Knappar, formular, kort, notiser, marken, paletter och animationer — rent, modulart, redo att anvanda.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/github.min.svg" alt="GitHub-logotyp" width="64" height="64" loading="lazy" decoding="async">
    <h3>Fri &amp; oppen kallkod</h3>
    <p>Designat, byggt och underhallet av Sebastien Rousseau. Dubbellicensierat under <strong>MIT</strong> eller <strong>Apache&nbsp;2.0</strong>. Inga avgifter, inga licenskostnader, aven for kommersiellt bruk.</p>
  </article>
</div>

## Jamforelse med alternativ

Ett enda, egenhostat stylesheet tacker typografi, knappar, formular, kort, tabeller, paletter, animationer och utility-klasser. Inget JavaScript. Inget byggsteg kravs. Inga peer-beroenden till Bootstrap, Tailwind eller Bulma.

| Funktion | Skeletonic Stylus | Bootstrap 5 | Tailwind CSS | Bulma |
|---|---|---|---|---|
| Gzippad storlek | **8,3&nbsp;KB** | ~30&nbsp;KB | ~10&nbsp;KB (varies) | ~30&nbsp;KB |
| WCAG 2.2-uppfyllnad | **Inbyggt** | Delvis | Manuellt | Delvis |
| Cascade layers | **Ja (`@layer`)** | Nej | Nej | Nej |
| Morkt lage | **`prefers-color-scheme`** | Opt-in | Klassbaserat | Opt-in |
| JavaScript kravs | **Nej** | Ja (Popper) | Nej | Nej |
| CycloneDX SBOM | **Ja** | Nej | Nej | Nej |
| Reducerad rorelse | **Respekteras** | Delvis | Manuellt | Delvis |
| Licens | MIT eller Apache 2.0 | MIT | MIT | MIT |

## Principer

1. **Tillganglighet ar golvet, inte taket.** WCAG 2.2-uppfyllnad ar inbyggt i varje komponent, inte paklistrat som ett "tema".
2. **Varje byte raknas.** Ett enda utlevererat stylesheet ska inte spranga sidviktsbudgeten. Taket pa 8&nbsp;KB gzippat tillapas i CI.
3. **Cascade layers slar specificitetskrig.** Overskriv vad som helst med sjalvfortroende — inget `!important`, inga DOM-ordningstrick.
4. **Stylus ar fortfarande bra.** Koncist, uttrycksfullt och haller biblioteket pa ~3 000 lasbara rader.
5. **Tradigt ar en funktion.** Inga JS-beroenden. Ingen magi vid byggtid. Inga brotande namnbyten. CSS-klasser som gor exakt det deras namn sager.
6. **Anpassningsbart pa sekunder.** Nativa CSS custom properties for farger, avstand, typografi och radier.
7. **Hardad leveranskedja.** Signerad npm-proveniens. Lasta Dependabot-uppdateringar. CVE-2023-44270 patchad via overrides.

## Versionshantering &amp; semver

Skeletonic Stylus foljer [Semantic Versioning 2.0](https://semver.org).

| Niva | Nar | Exempel |
|---|---|---|
| **Major** | Borttagning eller namnbyte av en offentlig klass, mixin eller token | 1.x → 2.0 |
| **Minor** | Tillagg av en ny komponent, mixin eller token | 1.1 → 1.2 |
| **Patch** | Buggfixar, a11y-finjustering, prestanda, sakerhet | 1.1.6 → 2.0.0 |

Alla offentliga klassnamn, alla CSS custom properties och alla exporterade Stylus-mixins ar del av det offentliga API:et. En brotande andring far en major-bump och en migrationsguide.

## Forvaltning

Skeletonic Stylus ar designat, byggt och underhallet av
[Sebastien Rousseau](https://sebastienrousseau.com). Dubbellicensierat
under [MIT](https://opensource.org/licenses/MIT) och
[Apache 2.0](https://opensource.org/licenses/Apache-2.0).

Arenden, ideer och bidrag ar valkomna —
[se bidragsguiden](/sv/bidra/).
