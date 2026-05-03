---
title: "Contribuie"
name: "Skeletonic Stylus"
description: "Cum să raportezi probleme, să propui modificări și să trimiți pull request-uri către Skeletonic Stylus."
layout: page
permalink: https://skeletonic.io/ro/contribuie/
date: 2026-04-08
author: Sebastien Rousseau
language: ro
theme_color: "hsl(210, 100%, 42%)"
keywords: "contribuie, open source, pull request, issue, convenții"
---

Skeletonic Stylus este un proiect open-source; contribuțiile de toate dimensiunile sunt binevenite — de la corectarea unei greșeli de tipar până la componente noi.

<hr class="hr-text" data-content="Start rapid">

## Start rapid

```bash
# 1. Fork &amp; clonare
git clone git@github.com:YOUR-USER/skeletonic-stylus.git
cd skeletonic-stylus

# 2. Instalare (pnpm via corepack)
corepack enable
pnpm install

# 3. Build
pnpm run build           # pipeline complet (stylus → prettier → stylelint → autoprefixer → csso)

# 4. Lint &amp; testare
pnpm run lint
node scripts/a11y-test.mjs
```

<hr class="hr-text" data-content="Convenții">

## Convenții

- **Nume de branch-uri:** `feat/scurt-descriere`, `fix/scurt-descriere`, `docs/scurt-descriere`.
- **Commit-uri:** [Conventional Commits](https://www.conventionalcommits.org).
  Toate commit-urile sunt semnate.
- **Stylus:** indentare cu 4 spații, fără punct și virgulă, preferă `$variables` în loc de numere magice, fiecare clasă publică este într-un cascade layer.
- **Accesibilitate:** orice componentă nouă trebuie să demonstreze conformitate WCAG 2.2 AA; rulează `node scripts/a11y-test.mjs` pe pagina showcase înainte de a deschide un PR.
- **Buget de dimensiune:** stylesheet-ul principal trebuie să rămână sub **8 KB gzipped**. Dacă modificarea ta depășește limita, justifică în PR.

<hr class="hr-text" data-content="Pull request-uri">

## Pull request-uri

1. Deschide mai întâi un issue pentru orice lucru non-trivial — economisește timp și efort.
2. Menține PR-urile focalizate: o singură modificare logică per PR.
3. Actualizează `CHANGELOG.md` la secțiunea „Unreleased".
4. Asigură-te că CI este verde înainte de a solicita review.
5. Squash-merge este metoda implicită; mesajele de commit vor fi curățate la merge.

<hr class="hr-text" data-content="Cod de conduită">

## Cod de conduită

Prin participare, accepți să respecți
[Contributor Covenant 2.1](https://www.contributor-covenant.org/version/2/1/code_of_conduct/).
Fii amabil, fii răbdător, presupune intenție bună.

[Deschide un issue ↗](https://github.com/sebastienrousseau/skeletonic-stylus/issues) ·
[Deschide un PR ↗](https://github.com/sebastienrousseau/skeletonic-stylus/pulls)
