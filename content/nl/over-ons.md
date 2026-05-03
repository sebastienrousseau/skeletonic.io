---
title: "Over Skeletonic Stylus"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus is een open-source Stylus CSS-bibliotheek voor toegankelijke, snelle en modulaire UI-styling."
layout: page
permalink: https://skeletonic.io/nl/over-ons/
date: 2026-04-08
author: Sebastien Rousseau
language: nl
theme_color: "hsl(210, 100%, 42%)"
keywords: "skeletonic, over ons, stylus, css framework, filosofie"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

<dl class="stat-strip" aria-label="Project facts">
  <div><dt>Version</dt><dd>2.0.0</dd></div>
  <div><dt>Gzip</dt><dd>7.7 KB</dd></div>
  <div><dt>Brotli</dt><dd>6.7 KB</dd></div>
  <div><dt>License</dt><dd>MIT or Apache-2.0</dd></div>
  <div><dt>Standard</dt><dd>WCAG 2.2 AA</dd></div>
</dl>

## De korte versie

**Skeletonic Stylus** is een open-source [Stylus](https://stylus-lang.com) CSS-bibliotheek voor toegankelijke, snelle en modulaire UI-styling.

Ontstaan in 2018 als een persoonlijk experiment in **minder CSS leveren** zonder de ergonomie van een echte componentenbibliotheek op te geven. Acht jaar later is het doel onveranderd.

## Wat het je biedt

<div class="feature-grid">
  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/thunder.min.svg" alt="Bliksemschicht" width="64" height="64" loading="lazy" decoding="async">
    <h3>Razend snel</h3>
    <p>Ontwerp en pas responsieve interfaces aan in minuten. Native CSS-variabelen, voorgedefinieerde klassen, een 12-koloms grid voor elk semantisch HTML-element.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/lightweight.min.svg" alt="Veer" width="64" height="64" loading="lazy" decoding="async">
    <h3>Lichtgewicht</h3>
    <p>8,3&nbsp;KB gzipped. Pagina's laden sneller. Alle essentieel bouwstenen blijven aanwezig.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/responsive.min.svg" alt="Responsieve apparaten" width="64" height="64" loading="lazy" decoding="async">
    <h3>Responsief ontwerp</h3>
    <p>Gebouwd voor desktop en mobiel. Layouts passen zich aan elk apparaat aan. Geoptimaliseerd voor aanraking, doorlopend semantische HTML.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/accessibility.min.svg" alt="Toegankelijkheid" width="64" height="64" loading="lazy" decoding="async">
    <h3>Toegankelijkheid</h3>
    <p>WCAG&nbsp;2.2 ingebouwd: focus-visible-ringen, AA-contrast, skip-link-helpers, toetsenbordvriendelijke componenten, ondersteuning voor beperkte beweging — geen extra stylesheet, geen <code>aria-*</code>-boilerplate.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/components.min.svg" alt="Componentblokken" width="64" height="64" loading="lazy" decoding="async">
    <h3>Componentenbibliotheek</h3>
    <p>Modulaire CSS-componenten en Stylus-mixins. Knoppen, formulieren, kaarten, meldingen, badges, paletten en animaties — schoon, modulair, direct inzetbaar.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/github.min.svg" alt="GitHub-logo" width="64" height="64" loading="lazy" decoding="async">
    <h3>Gratis &amp; open source</h3>
    <p>Ontworpen, gebouwd en onderhouden door Sebastien Rousseau. Dubbel gelicentieerd onder <strong>MIT</strong> of <strong>Apache&nbsp;2.0</strong>. Geen kosten, geen licentiekosten, ook niet voor commercieel gebruik.</p>
  </article>
</div>

## Hoe het zich verhoudt

Eén zelfgehost stylesheet dekt typografie, knoppen, formulieren, kaarten, tabellen, paletten, animaties en utility-klassen. Geen JavaScript. Geen buildstap vereist. Geen peer-afhankelijkheden van Bootstrap, Tailwind of Bulma.

| Kenmerk | Skeletonic Stylus | Bootstrap 5 | Tailwind CSS | Bulma |
|---|---|---|---|---|
| Gzipped-grootte | **8,3&nbsp;KB** | ~30&nbsp;KB | ~10&nbsp;KB (varies) | ~30&nbsp;KB |
| WCAG-2.2-conformiteit | **Ingebouwd** | Gedeeltelijk | Handmatig | Gedeeltelijk |
| Cascade Layers | **Ja (`@layer`)** | Nee | Nee | Nee |
| Donkere modus | **`prefers-color-scheme`** | Opt-in | Klassegebaseerd | Opt-in |
| JavaScript vereist | **Nee** | Ja (Popper) | Nee | Nee |
| CycloneDX SBOM | **Ja** | Nee | Nee | Nee |
| Beperkte beweging | **Gerespecteerd** | Gedeeltelijk | Handmatig | Gedeeltelijk |
| Licentie | MIT of Apache 2.0 | MIT | MIT | MIT |

## Principes

1. **Toegankelijkheid is de basis, niet de luxe.** WCAG-2.2-conformiteit is in elke component ingebouwd, nooit als een "thema" achteraf toegevoegd.
2. **Elke byte telt.** Een enkel geleverd stylesheet mag het paginagewicht-budget niet overschrijden. Het 8&nbsp;KB-gzipped-plafond wordt afgedwongen in CI.
3. **Cascade Layers verslaan specificiteitsoorlogen.** Overschrijf alles met vertrouwen — geen `!important`, geen DOM-volgorde-trucs.
4. **Stylus is nog steeds een goede keuze.** Beknopt, expressief en houdt de bibliotheek op ~3.000 leesbare regels.
5. **Saai is een feature.** Geen JS-afhankelijkheden. Geen build-time-magie. Geen brekende hernoemingen. CSS-klassen die precies doen wat ze zeggen.
6. **Binnen seconden aanpasbaar.** Native CSS custom properties voor kleuren, afstanden, typografie en radii.
7. **Geharde toeleveringsketen.** Ondertekende npm-herkomst. Vastgepinde Dependabot-updates. CVE-2023-44270 gepatcht via overrides.

## Versiebeheer &amp; semver

Skeletonic Stylus volgt [Semantic Versioning 2.0](https://semver.org).

| Stap | Wanneer | Voorbeeld |
|---|---|---|
| **Major** | Verwijderen of hernoemen van een publieke klasse, mixin of token | 1.x → 2.0 |
| **Minor** | Toevoegen van een nieuwe component, mixin of token | 1.1 → 1.2 |
| **Patch** | Bugfixes, a11y-verbeteringen, prestaties, beveiliging | 1.1.6 → 2.0.0 |

Alle publieke klassenamen, alle CSS custom properties en alle geëxporteerde Stylus-mixins maken deel uit van de publieke API. Een brekende wijziging verdient een major-bump en een migratiegids.

## Beheer

Skeletonic Stylus wordt ontworpen, gebouwd en onderhouden door
[Sebastien Rousseau](https://sebastienrousseau.com). Dubbel gelicentieerd
onder [MIT](https://opensource.org/licenses/MIT) en
[Apache 2.0](https://opensource.org/licenses/Apache-2.0).

Issues, ideeën en bijdragen zijn welkom —
[bekijk de bijdragegids](/nl/bijdragen/).
