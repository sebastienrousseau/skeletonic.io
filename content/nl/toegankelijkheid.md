---
title: "Toegankelijkheid — WCAG 2.2 in v1.1.7"
name: "Skeletonic Stylus"
description: "Wat v1.1.7 standaard levert voor WCAG 2.2-conformiteit — focusringen, contrast, skip-links, beweging en donkere modus."
layout: page
permalink: https://skeletonic.io/nl/toegankelijkheid/
date: 2026-04-08
author: Sebastien Rousseau
language: nl
theme_color: "hsl(210, 100%, 42%)"
keywords: "wcag 2.2, toegankelijkheid, focus visible, skip link, prefers reduced motion, contrast"
---

> **Translation note (2026-04-30).** v1.1.7 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

> **Skeletonic Stylus v1.1.7 levert WCAG 2.2-conformiteit als standaard
> gedrag, niet als een optioneel thema.** Deze pagina documenteert wat er
> ingebouwd is en welke mixins je kunt activeren voor meer controle.

<hr class="hr-text" data-content="Standaard">

## Wat je standaard krijgt

| WCAG 2.2 SC | Wat v1.1.7 doet | Hoe te verifiëren |
|---|---|---|
| **1.4.3 Contrast (Minimum) — AA** | `--cl-primary` en `--cl-secondary` donkerder gemaakt tot ≥ 4.5:1 tegen wit | DevTools → contrastcontrole |
| **1.4.11 Niet-tekstcontrast — AA** | Formulierranden, knoppen, badges allemaal ≥ 3:1 | Idem |
| **2.4.7 Focus zichtbaar — AA** | Elk focusbaar element heeft een `:focus-visible`-ring (geel op donkere achtergronden, blauw op lichte) | `Tab` door elke pagina |
| **2.4.11 Focus niet bedekt — AA (nieuw in 2.2)** | Vaste header heeft gereduceerde hoogte + focus scroll-margin | `Tab` voorbij de vaste header |
| **2.5.8 Doelgrootte — AA (nieuw in 2.2)** | Knoppen / links: ≥ 24×24 CSS px raakgebied | DevTools boxmodel |
| **1.4.12 Tekstafstand — AA** | Alle elementen respecteren gebruikers-lijnhoogte / letterafstand-overschrijvingen | Overschrijf in DevTools |
| **2.3.3 Animatie van interacties — AAA** | Alle animatieklassen zijn gewikkeld in `@media (prefers-reduced-motion: no-preference)` | OS-niveau beperkte beweging |
| **1.4.10 Reflowing — AA** | Layout werkt op 320 px zonder horizontaal scrollen | DevTools smal viewport |
| **Donkere modus** | `prefers-color-scheme: dark` wisselt tokens automatisch | OS donkere-modus-schakelaar |

<hr class="hr-text" data-content="Mixins">

## Stylus-mixins die je kunt activeren

Als je vanuit broncode compileert, zijn de volgende mixins beschikbaar in
`src/stylus/utilities/mixins.styl`:

| Mixin | Gebruik |
|---|---|
| `focus-ring()` | Contrastrijke focusring die `:focus-visible` respecteert |
| `visually-hidden()` | Tekst alleen voor schermlezers die focusbaar blijft |
| `skip-link()` | Anker dat zichtbaar wordt bij focus |
| `reduced-motion()` | Wikkelt elk blok in `prefers-reduced-motion: no-preference` |
| `forced-colors()` | Aanpassingen voor Windows Hoog Contrast Modus |
| `target-size(24px)` | Vult elk klikbaar element op tot een minimaal raakdoel |

Voorbeeld:

```stylus
// Pas een sterke focusring toe op een aangepaste knop
.my-button
    focus-ring()
    target-size(28px)
```

<hr class="hr-text" data-content="Skip-link">

## De skip-link helper

Plaats dit **als eerste in `<body>`**:

```html
<a href="#main-content" class="skip-link">Naar hoofdinhoud</a>
```

De klasse zit **niet** in het kernstylesheet (zodat het paginagewicht niet
toeneemt); het is een fragment van 4 regels dat je zelf samenstelt of de
meegeleverde `skip-link()` mixin gebruikt. Deze site gebruikt het — focus de
pagina en druk op Tab om het links bovenin te zien verschijnen.

<hr class="hr-text" data-content="Verificatie">

## Je eigen pagina's verifiëren

De bibliotheek levert een `a11y-test.mjs`-script onder `scripts/` dat
[axe-core](https://github.com/dequelabs/axe-core) uitvoert tegen elke URL
die je opgeeft.

```bash
node scripts/a11y-test.mjs https://example.com
```

CI voert dit script uit tegen de `dist/index.html` showcasepagina bij
elke push.

[Lees over de v1.1.7-release →](/nl/wijzigingslogboek/) ·
[Bekijk de beveiligingspagina →](/nl/beveiliging/)
