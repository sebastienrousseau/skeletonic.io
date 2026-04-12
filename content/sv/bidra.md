---
title: "Bidra"
name: "Skeletonic Stylus"
description: "Hur du rapporterar arenden, foreslar andringar och skickar pull requests till Skeletonic Stylus."
layout: page
permalink: https://skeletonic.io/sv/bidra/
date: 2026-04-08
author: Sebastien Rousseau
language: sv
theme_color: "hsl(210, 100%, 42%)"
keywords: "bidra, oppen kallkod, pull request, arende, konventioner"
---

Skeletonic Stylus ar ett projekt med oppen kallkod; bidrag av alla storlekar
ar valkomna — fran stavfelsrattningar till nya komponenter.

<hr class="hr-text" data-content="Snabbstart">

## Snabbstart

```bash
# 1. Forka &amp; klona
git clone git@github.com:YOUR-USER/skeletonic-stylus.git
cd skeletonic-stylus

# 2. Installera (pnpm via corepack)
corepack enable
pnpm install

# 3. Bygg
pnpm run build           # full pipeline (stylus → prettier → stylelint → autoprefixer → csso)

# 4. Linta &amp; testa
pnpm run lint
node scripts/a11y-test.mjs
```

<hr class="hr-text" data-content="Konventioner">

## Konventioner

- **Grennamn:** `feat/kort-beskrivning`, `fix/kort-beskrivning`, `docs/kort-beskrivning`.
- **Commits:** [Conventional Commits](https://www.conventionalcommits.org).
  Alla commits ar signerade.
- **Stylus:** 4-mellanslags indrag, inga semikolon, foredra `$variables` framfor magiska
  tal, varje offentlig klass lever i ett cascade layer.
- **Tillganglighet:** varje ny komponent maste bevisligen uppfylla WCAG 2.2 AA;
  kor `node scripts/a11y-test.mjs` mot visningssidan innan du oppnar en PR.
- **Storleksbudget:** karn-stylesheetet maste halla sig under **8 KB gzippat**.
  Om din andring overskrider det, motivera det i PR:en.

<hr class="hr-text" data-content="Pull requests">

## Pull requests

1. Oppna ett arende forst for allt som inte ar trivialt — sparar omarbete.
2. Hall PR:er fokuserade: en logisk andring per PR.
3. Uppdatera `CHANGELOG.md` under "Unreleased".
4. Se till att CI ar gront innan du begjar granskning.
5. Squash-merge ar standard; commit-meddelanden rensar upp vid merge.

<hr class="hr-text" data-content="Uppforandekod">

## Uppforandekod

Genom att delta godkanner du att folja
[Contributor Covenant 2.1](https://www.contributor-covenant.org/version/2/1/code_of_conduct/).
Var vanlig, ha talamrod, anta goda avsikter.

[Oppna ett arende ↗](https://github.com/sebastienrousseau/skeletonic-stylus/issues) ·
[Oppna en PR ↗](https://github.com/sebastienrousseau/skeletonic-stylus/pulls)
