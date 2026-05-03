---
title: "Mitwirken"
name: "Skeletonic Stylus"
description: "Issues melden, Aenderungen vorschlagen und Pull Requests fuer Skeletonic Stylus einreichen."
layout: page
language: de
permalink: https://skeletonic.io/de/mitwirken/
date: 2026-04-08
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "mitwirken, open source, pull request, issue, konventionen"
---

Skeletonic Stylus ist ein Open-Source-Projekt; Beitraege jeder Groesse sind willkommen — von Tippfehler-Korrekturen bis hin zu neuen Komponenten.

<hr class="hr-text" data-content="Schnellstart">

## Schnellstart

```bash
# 1. Fork & Clone
git clone git@github.com:YOUR-USER/skeletonic-stylus.git
cd skeletonic-stylus

# 2. Installation (pnpm via Corepack)
corepack enable
pnpm install

# 3. Build
pnpm run build           # vollstaendige Pipeline (stylus → prettier → stylelint → autoprefixer → csso)

# 4. Lint & Test
pnpm run lint
node scripts/a11y-test.mjs
```

<hr class="hr-text" data-content="Konventionen">

## Konventionen

- **Branch-Namen:** `feat/short-thing`, `fix/short-thing`, `docs/short-thing`.
- **Commits:** [Conventional Commits](https://www.conventionalcommits.org).
  Alle Commits werden signiert.
- **Stylus:** 4 Leerzeichen Einrueckung, keine Semikolons, `$variables` statt
  Magic Numbers bevorzugen, jede oeffentliche Klasse lebt in einem Cascade Layer.
- **Barrierefreiheit:** Jede neue Komponente muss nachweislich WCAG 2.2 AA erfuellen;
  `node scripts/a11y-test.mjs` gegen den Showcase ausfuehren, bevor ein PR geoeffnet wird.
- **Groessenbudget:** Das Core-Stylesheet muss unter **8 KB gzipped** bleiben.
  Falls die Aenderung dieses Limit ueberschreitet, ist eine Begruendung im PR erforderlich.

<hr class="hr-text" data-content="Pull Requests">

## Pull Requests

1. Zuerst ein Issue eroeffnen fuer alles, was nicht trivial ist — spart Nacharbeit.
2. PRs fokussiert halten: eine logische Aenderung pro PR.
3. Das `CHANGELOG.md` unter "Unreleased" aktualisieren.
4. Sicherstellen, dass CI gruen ist, bevor ein Review angefordert wird.
5. Squash-Merge ist der Standard; Commit-Nachrichten werden beim Merge bereinigt.

<hr class="hr-text" data-content="Verhaltenskodex">

## Verhaltenskodex

Durch die Teilnahme erklaert sich jeder mit dem
[Contributor Covenant 2.1](https://www.contributor-covenant.org/version/2/1/code_of_conduct/) einverstanden.
Freundlich sein, geduldig sein, gute Absichten unterstellen.

[Issue eroeffnen](https://github.com/sebastienrousseau/skeletonic-stylus/issues) ·
[PR eroeffnen](https://github.com/sebastienrousseau/skeletonic-stylus/pulls)
