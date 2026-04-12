---
title: "Contribuire"
name: "Skeletonic Stylus"
description: "Come segnalare problemi, proporre modifiche e inviare pull request a Skeletonic Stylus."
layout: page
permalink: https://skeletonic.io/it/contribuire/
date: 2026-04-08
author: Sebastien Rousseau
language: it
theme_color: "hsl(210, 100%, 42%)"
keywords: "contribuire, open source, pull request, issue, convenzioni"
---

Skeletonic Stylus e un progetto open source; contributi di qualsiasi dimensione sono benvenuti — dalla correzione di errori di battitura ai nuovi componenti.

<hr class="hr-text" data-content="Avvio rapido">

## Avvio rapido

```bash
# 1. Fork &amp; clone
git clone git@github.com:YOUR-USER/skeletonic-stylus.git
cd skeletonic-stylus

# 2. Installa (pnpm via corepack)
corepack enable
pnpm install

# 3. Build
pnpm run build           # pipeline completa (stylus → prettier → stylelint → autoprefixer → csso)

# 4. Lint &amp; test
pnpm run lint
node scripts/a11y-test.mjs
```

<hr class="hr-text" data-content="Convenzioni">

## Convenzioni

- **Nomi dei branch:** `feat/breve-descrizione`, `fix/breve-descrizione`, `docs/breve-descrizione`.
- **Commit:** [Conventional Commits](https://www.conventionalcommits.org).
  Tutti i commit sono firmati.
- **Stylus:** indentazione a 4 spazi, niente punti e virgola, preferire `$variables` ai numeri magici, ogni classe pubblica risiede in un cascade layer.
- **Accessibilita:** ogni nuovo componente deve dimostrabilmente soddisfare WCAG 2.2 AA; esegui `node scripts/a11y-test.mjs` sulla pagina showcase prima di aprire una PR.
- **Budget di dimensione:** il foglio di stile principale deve restare sotto gli **8 KB gzipped**. Se la tua modifica lo supera, giustificalo nella PR.

<hr class="hr-text" data-content="Pull request">

## Pull request

1. Apri prima una issue per qualsiasi modifica non banale — evita lavoro inutile.
2. Mantieni le PR focalizzate: una modifica logica per PR.
3. Aggiorna il `CHANGELOG.md` sotto "Unreleased".
4. Assicurati che la CI sia verde prima di richiedere la review.
5. Lo squash-merge e il default; i messaggi di commit verranno ripuliti al merge.

<hr class="hr-text" data-content="Codice di condotta">

## Codice di condotta

Partecipando, accetti di rispettare il
[Contributor Covenant 2.1](https://www.contributor-covenant.org/version/2/1/code_of_conduct/).
Sii gentile, sii paziente, presumi buone intenzioni.

[Apri una issue ↗](https://github.com/sebastienrousseau/skeletonic-stylus/issues) ·
[Apri una PR ↗](https://github.com/sebastienrousseau/skeletonic-stylus/pulls)
