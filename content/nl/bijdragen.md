---
title: "Bijdragen"
name: "Skeletonic Stylus"
description: "Hoe je issues kunt indienen, wijzigingen kunt voorstellen en pull requests kunt insturen voor Skeletonic Stylus."
layout: page
permalink: https://skeletonic.io/nl/bijdragen/
date: 2026-04-08
author: Sebastien Rousseau
language: nl
theme_color: "hsl(210, 100%, 42%)"
keywords: "bijdragen, open source, pull request, issue, conventies"
---

Skeletonic Stylus is een open-sourceproject; bijdragen van elke omvang
zijn welkom — van typecorrecties tot nieuwe componenten.

<hr class="hr-text" data-content="Snel starten">

## Snel starten

```bash
# 1. Fork &amp; kloon
git clone git@github.com:JOUW-GEBRUIKER/skeletonic-stylus.git
cd skeletonic-stylus

# 2. Installeren (pnpm via corepack)
corepack enable
pnpm install

# 3. Bouwen
pnpm run build           # volledige pipeline (stylus → prettier → stylelint → autoprefixer → csso)

# 4. Linten &amp; testen
pnpm run lint
node scripts/a11y-test.mjs
```

<hr class="hr-text" data-content="Conventies">

## Conventies

- **Branchnamen:** `feat/korte-omschrijving`, `fix/korte-omschrijving`, `docs/korte-omschrijving`.
- **Commits:** [Conventional Commits](https://www.conventionalcommits.org).
  Alle commits worden ondertekend.
- **Stylus:** 4-spatie-inspringing, geen puntkomma's, voorkeur voor `$variables` boven
  magische getallen, elke publieke klasse bevindt zich in een cascade layer.
- **Toegankelijkheid:** elke nieuwe component moet aantoonbaar voldoen aan WCAG 2.2 AA;
  voer `node scripts/a11y-test.mjs` uit tegen de showcase voordat je een PR opent.
- **Groottebudget:** het kernstylesheet moet onder **8 KB gzipped** blijven.
  Als je wijziging dit overschrijdt, onderbouw het in de PR.

<hr class="hr-text" data-content="Pull requests">

## Pull requests

1. Open eerst een issue voor alles wat niet triviaal is — bespaart herwerk.
2. Houd PR's gefocust: één logische wijziging per PR.
3. Werk de `CHANGELOG.md` bij onder "Unreleased".
4. Zorg dat CI groen is voordat je een review aanvraagt.
5. Squash-merge is de standaard; commitberichten worden opgeschoond bij merge.

<hr class="hr-text" data-content="Gedragscode">

## Gedragscode

Door deel te nemen, ga je akkoord met de
[Contributor Covenant 2.1](https://www.contributor-covenant.org/version/2/1/code_of_conduct/).
Wees vriendelijk, wees geduldig, ga uit van goede bedoelingen.

[Open een issue ↗](https://github.com/sebastienrousseau/skeletonic-stylus/issues) ·
[Open een PR ↗](https://github.com/sebastienrousseau/skeletonic-stylus/pulls)
