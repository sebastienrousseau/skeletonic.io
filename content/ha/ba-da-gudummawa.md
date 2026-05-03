---
title: "Ba da gudummawa"
name: "Skeletonic Stylus"
description: "Yadda ake shigar da matsaloli, ba da shawarar canje-canje, da aika buƙatun jawo zuwa Skeletonic Stylus."
layout: page
permalink: https://skeletonic.io/ha/ba-da-gudummawa/
date: 2026-04-08
author: Sebastien Rousseau
language: ha
theme_color: "hsl(210, 100%, 42%)"
keywords: "ba da gudummawa, buɗaɗɗen tushe, buƙatar jawo, matsala, al'adu"
---

Skeletonic Stylus aikin buɗaɗɗen tushe ne; ana maraba da gudummawar kowane girma — daga gyaran kuskuren bugu zuwa sababbin abubuwan hadi.

<hr class="hr-text" data-content="Saurin farawa">

## Saurin farawa

```bash
# 1. Yi fork &amp; clone
git clone git@github.com:YOUR-USER/skeletonic-stylus.git
cd skeletonic-stylus

# 2. Shigar (pnpm via corepack)
corepack enable
pnpm install

# 3. Gina
pnpm run build           # cikakken bututu (stylus → prettier → stylelint → autoprefixer → csso)

# 4. Lint &amp; gwaji
pnpm run lint
node scripts/a11y-test.mjs
```

<hr class="hr-text" data-content="Al'adu">

## Al'adu

- **Sunayen reshe:** `feat/short-thing`, `fix/short-thing`, `docs/short-thing`.
- **Commits:** [Conventional Commits](https://www.conventionalcommits.org). An sanya hannu a kan duk commits.
- **Stylus:** indent na sararin samaniya 4, babu semicolons, fifita `$variables` akan lambobin sihiri, kowane aji na jama'a yana cikin cascade layer.
- **Samun dama:** duk sabon abun hadi dole ne ya nuna cewa ya cika WCAG 2.2 AA; gudanar da `node scripts/a11y-test.mjs` akan shafin nunin kafin buɗe PR.
- **Kasafin girma:** dole ne stylesheet na tushe ya kasance ƙasa da **8 KB gzipped**. Idan canjin ku ya tura shi sama, bayyana a cikin PR.

<hr class="hr-text" data-content="Buƙatun jawo">

## Buƙatun jawo

1. Buɗe matsala da farko don duk abin da ba ƙarami ba — yana adana sake aiki.
2. Ci gaba da mayar da hankali kan PR: canjin tunani guda ɗaya a kowanne PR.
3. Sabunta `CHANGELOG.md` a ƙarƙashin "Ba a saki ba".
4. Tabbatar cewa CI kore ne kafin neman bita.
5. Squash-merge shi ne tsoho; za a tsaftace saƙonnin commit a lokacin haɗawa.

<hr class="hr-text" data-content="Ƙa'idar hali">

## Ƙa'idar hali

Ta hanyar shiga, kun yarda ku bi [Alkawarin Mai Gudummawa 2.1](https://www.contributor-covenant.org/version/2/1/code_of_conduct/). Ku kasance masu alheri, ku kasance masu haƙuri, ku ɗauka kyakkyawan niyya.

[Buɗe matsala ↗](https://github.com/sebastienrousseau/skeletonic-stylus/issues) ·
[Buɗe PR ↗](https://github.com/sebastienrousseau/skeletonic-stylus/pulls)
