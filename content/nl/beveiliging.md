---
title: "Beveiliging &amp; toeleveringsketen"
name: "Skeletonic Stylus"
description: "Hoe Skeletonic Stylus v1.1.7 zijn buildpipeline beveiligt, releases ondertekent en een SBOM levert."
layout: page
permalink: https://skeletonic.io/nl/beveiliging/
date: 2026-04-08
author: Sebastien Rousseau
language: nl
theme_color: "hsl(210, 100%, 42%)"
keywords: "css beveiliging, sbom, cyclonedx, npm herkomst, openssf scorecard, toeleveringsketen"
---

## Prestaties

- **39,9&nbsp;KB geminificeerd · 7,5&nbsp;KB gzipped · 6,3&nbsp;KB brotli** voor het volledige kernstylesheet.
- **Geen JavaScript** — pure Stylus → pure CSS, geen runtime-kosten.
- **Cascade-layered** — overschrijvingen winnen zonder `!important`.
- **`size-limit`-budget afgedwongen** in CI bij elke commit.

Prestaties zijn een beveiligingsmaatregel. Elke byte die niet wordt verstuurd
is een byte minder om te auditen, ondertekenen en verifiëren.

## Toeleveringsketen samenvatting

| Maatregel | v1.1.7-status |
|---|---|
| **CycloneDX SBOM** | Gegenereerd bij elke release, opgenomen onder `dist/sbom.json` |
| **npm-herkomst** | Ingeschakeld (`--provenance --access public`) |
| **Ondertekende git-tags** | SSH-ondertekend door de beheerder |
| **Vastgepinde Dependabot** | Wekelijkse updates, automatisch beoordeeld |
| **Groottebudgetten** | `size-limit` 8 KB gzipped-plafond, faalt CI bij regressie |
| **Lint** | `stylelint` + a11y-controles bij elke push |
| **CodeQL** | Ingeschakeld voor `javascript` en configuratiebestanden |
| **CVE-2023-44270** | **Gepatcht** via `pnpm.overrides` die `postcss@7` verwijdert |

<hr class="hr-text" data-content="SBOM">

## CycloneDX SBOM

Elk gepubliceerd tarball bevat een CycloneDX SBOM op `dist/sbom.json`.
Je kunt een vers geïnstalleerd pakket verifiëren met:

```bash
pnpm add @sebastienrousseau/skeletonic-stylus@1.1.7
jq '.metadata.component.version' \
  node_modules/@sebastienrousseau/skeletonic-stylus/dist/sbom.json
# → "1.1.7"
```

De SBOM wordt gegenereerd met `cyclonedx-npm` tijdens de publicatieworkflow.

<hr class="hr-text" data-content="Herkomst">

## npm-herkomst

Het gepubliceerde artefact wordt ondertekend met behulp van
[npm-pakketherkomst](https://docs.npmjs.com/generating-provenance-statements).

Je kunt het na installatie verifiëren met:

```bash
npm view @sebastienrousseau/skeletonic-stylus@1.1.7 --json | \
  jq '.dist."npm-signature"'
```

De ondertekende attestatie koppelt het tarball terug aan de exacte GitHub
Actions-run die het heeft geproduceerd.

<hr class="hr-text" data-content="CVE's">

## Bekende CVE's &amp; patches

| CVE | Ernst | Status |
|---|---|---|
| **CVE-2023-44270** (postcss regelterugloop-parsing) | Gemiddeld | **Gepatcht** in v1.1.7 via `pnpm.overrides` die `postcss` upgradet naar ≥ 8.4.31 |

De Snyk-adviesdatabase en de GitHub Security Advisories-feed worden continu gemonitord;
beveiligingspatches worden geleverd als **patch-level releases**.

<hr class="hr-text" data-content="Melden">

## Een kwetsbaarheid melden

Open **geen** openbaar GitHub-issue voor een beveiligingsrapport.
Gebruik in plaats daarvan het privékanaal op:

> [github.com/sebastienrousseau/skeletonic-stylus/security/advisories/new](https://github.com/sebastienrousseau/skeletonic-stylus/security/advisories/new)

Meldingen worden binnen **72 uur** bevestigd. Een fix wordt geleverd
binnen **14 dagen** voor gemiddelde problemen, **48 uur** voor
kritieke problemen.

[Terug naar home →](/nl/) · [Lees het wijzigingslogboek →](/nl/wijzigingslogboek/)
