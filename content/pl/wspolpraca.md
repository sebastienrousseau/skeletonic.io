---
title: "Wspolpraca"
name: "Skeletonic Stylus"
description: "Jak zglaszac problemy, proponowac zmiany i przesylac pull requesty do Skeletonic Stylus."
layout: page
permalink: https://skeletonic.io/pl/wspolpraca/
date: 2026-04-08
author: Sebastien Rousseau
language: pl
theme_color: "hsl(210, 100%, 42%)"
keywords: "wspolpraca, open source, pull request, zgloszenie, konwencje"
---

Skeletonic Stylus to projekt open source; wklad kazdego rozmiaru jest mile widziany — od poprawek literowek po nowe komponenty.

<hr class="hr-text" data-content="Szybki start">

## Szybki start

```bash
# 1. Fork i klonowanie
git clone git@github.com:TWOJ-UZYTKOWNIK/skeletonic-stylus.git
cd skeletonic-stylus

# 2. Instalacja (pnpm via corepack)
corepack enable
pnpm install

# 3. Budowanie
pnpm run build           # pelny pipeline (stylus → prettier → stylelint → autoprefixer → csso)

# 4. Lint i testy
pnpm run lint
node scripts/a11y-test.mjs
```

<hr class="hr-text" data-content="Konwencje">

## Konwencje

- **Nazwy galezi:** `feat/krotki-opis`, `fix/krotki-opis`, `docs/krotki-opis`.
- **Commity:** [Conventional Commits](https://www.conventionalcommits.org). Wszystkie commity sa podpisane.
- **Stylus:** 4-spacjowe wciecie, bez srednikow, preferuj `$variables` nad magicznymi liczbami, kazda publiczna klasa zyje w warstwie kaskadowej.
- **Dostepnosc:** kazdy nowy komponent musi wykazywac zgodnosc z WCAG 2.2 AA; uruchom `node scripts/a11y-test.mjs` na stronie showcasowej przed otwarciem PR.
- **Budzet rozmiaru:** glowny arkusz stylow musi pozostac ponizej **8 KB gzipped**. Jesli Twoja zmiana go przekracza, uzasadnij to w PR.

<hr class="hr-text" data-content="Pull requesty">

## Pull requesty

1. Najpierw otworz issue dla wszystkiego, co nie jest trywialne — oszczedzi przerobek.
2. PR powinien byc skupiony: jedna logiczna zmiana na PR.
3. Zaktualizuj `CHANGELOG.md` w sekcji „Unreleased".
4. Upewnij sie, ze CI jest zielone przed proba o review.
5. Squash-merge jest domyslny; wiadomosci commitow beda porzadkowane przy mergowaniu.

<hr class="hr-text" data-content="Kodeks postepowania">

## Kodeks postepowania

Uczestniczac, zgadzasz sie przestrzegac
[Contributor Covenant 2.1](https://www.contributor-covenant.org/version/2/1/code_of_conduct/).
Badz zyczliwy, cierpliwy, zakladaj dobre intencje.

[Otworz issue ↗](https://github.com/sebastienrousseau/skeletonic-stylus/issues) ·
[Otworz PR ↗](https://github.com/sebastienrousseau/skeletonic-stylus/pulls)
