---
title: "Tillganglighet — WCAG 2.2 i v1.1.7"
name: "Skeletonic Stylus"
description: "Vad v1.1.7 levererar direkt for WCAG 2.2-uppfyllnad — fokusringar, kontrast, skip-lankar, rorelse och morkt lage."
layout: page
permalink: https://skeletonic.io/sv/tillganglighet/
date: 2026-04-08
author: Sebastien Rousseau
language: sv
theme_color: "hsl(210, 100%, 42%)"
keywords: "wcag 2.2, tillganglighet, focus visible, skip-lank, prefers reduced motion, kontrast"
---

> **Translation note (2026-04-30).** v1.1.7 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

> **Skeletonic Stylus v1.1.7 levererar WCAG 2.2-uppfyllnad som
> standardbeteende, inte som ett valfritt tema.** Denna sida dokumenterar vad
> som ar inbyggt och vilka mixins du kan valja till for finare kontroll.

<hr class="hr-text" data-content="Direkt ur ladan">

## Vad du far gratis

| WCAG 2.2 SC | Vad v1.1.7 gor | Hur du verifierar |
|---|---|---|
| **1.4.3 Kontrast (Minimum) — AA** | `--cl-primary` och `--cl-secondary` morkade till ≥ 4.5:1 mot vitt | DevTools → kontrastkontroll |
| **1.4.11 Icke-textkontrast — AA** | Formularkantar, knappar, marken alla ≥ 3:1 | Samma |
| **2.4.7 Fokus synligt — AA** | Varje fokuserbart element har en `:focus-visible`-ring (gul pa morka bakgrunder, bla pa ljusa) | `Tab` genom valfri sida |
| **2.4.11 Fokus inte dolt — AA (nytt i 2.2)** | Fast header har reducerad hojd + fokus scroll-margin | `Tab` forbi den fasta headern |
| **2.5.8 Malstorlek — AA (nytt i 2.2)** | Knappar / lankar: ≥ 24x24 CSS px traffyta | DevTools boxmodell |
| **1.4.12 Textavstand — AA** | Alla element respekterar anvandarens radhojds-/teckenavstandsoverskrivningar | Overskriv i DevTools |
| **2.3.3 Animation fran interaktioner — AAA** | Alla animationsklasser ar inlindade i `@media (prefers-reduced-motion: no-preference)` | Reducerad rorelse pa OS-niva |
| **1.4.10 Omflode — AA** | Layouten fungerar vid 320 px utan horisontell scrollning | DevTools smal viewport |
| **Morkt lage** | `prefers-color-scheme: dark` byter tokens automatiskt | OS morkt lage-vaxel |

<hr class="hr-text" data-content="Mixins">

## Stylus-mixins du kan valja till

Om du kompilerar fran kallkod ar foljande mixins tillgangliga i
`src/stylus/utilities/mixins.styl`:

| Mixin | Anvandning |
|---|---|
| `focus-ring()` | Hogkontrastfokusring som respekterar `:focus-visible` |
| `visually-hidden()` | Skarmlasar-exklusiv text som forblir fokuserbar |
| `skip-link()` | Ankare som blir synligt vid fokus |
| `reduced-motion()` | Lindar valfritt block i `prefers-reduced-motion: no-preference` |
| `forced-colors()` | Anpassningar for Windows hogkontrastlage |
| `target-size(24px)` | Paddar valfritt klickbart element till en minsta traffyta |

Exempel:

```stylus
// Applicera en stark fokusring pa en anpassad knapp
.my-button
    focus-ring()
    target-size(28px)
```

<hr class="hr-text" data-content="Skip-lank">

## Skip-lank-hjalpen

Placera detta **forst inuti `<body>`**:

```html
<a href="#main-content" class="skip-link">Hoppa till huvudinnehall</a>
```

Klassen finns **inte** i karn-stylesheetet (sa sidvikten paverkas inte);
det ar en 4-raders kodsnutt du satter ihop sjalv eller anvander den
medfoljande `skip-link()`-mixin. Denna webbplats anvander den — fokusera
sidan och tryck Tab for att se den visas uppe till vanster.

<hr class="hr-text" data-content="Verifiering">

## Verifiera dina egna sidor

Biblioteket levererar ett `a11y-test.mjs`-skript under `scripts/` som kor
[axe-core](https://github.com/dequelabs/axe-core) mot varje URL du anger.

```bash
node scripts/a11y-test.mjs https://example.com
```

CI kor detta skript mot `dist/index.html`-visningssidan vid varje push.

[Las om v1.1.7-releasen →](/sv/andringslogg/) ·
[Se sakerhetssidan →](/sv/sakerhet/)
