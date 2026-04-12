---
title: "Prispejte — Skeletonic Stylus"
name: "Skeletonic Stylus"
description: "Jak nahlasite problemy, navrhnout zmeny a odeslat pull requesty do Skeletonic Stylus."
layout: page
permalink: https://skeletonic.io/cs/prispet/
date: 2026-04-08
author: Sebastien Rousseau
language: cs
theme_color: "hsl(210, 100%, 42%)"
keywords: "prispet, open source, pull request, issue, konvence"
---

Skeletonic Stylus je open-source projekt; prispevky vsech velikosti
jsou vitany — od oprav preklepu po nove komponenty.

<hr class="hr-text" data-content="Rychly start">

## Rychly start

```bash
# 1. Fork &amp; klonovani
git clone git@github.com:YOUR-USER/skeletonic-stylus.git
cd skeletonic-stylus

# 2. Instalace (pnpm via corepack)
corepack enable
pnpm install

# 3. Build
pnpm run build           # kompletni pipeline (stylus → prettier → stylelint → autoprefixer → csso)

# 4. Lint &amp; testy
pnpm run lint
node scripts/a11y-test.mjs
```

<hr class="hr-text" data-content="Konvence">

## Konvence

- **Nazvy vetvi:** `feat/kratka-vec`, `fix/kratka-vec`, `docs/kratka-vec`.
- **Commity:** [Conventional Commits](https://www.conventionalcommits.org).
  Vsechny commity jsou podepsane.
- **Stylus:** 4mezerove odsazeni, zadne stredniky, preferujte `$variables`
  pred magickymi cisly, kazda verejna trida zije v kaskadove vrstve.
- **Pristupnost:** kazda nova komponenta musi prokazatelne splnovat
  WCAG 2.2 AA; pred otevrenim PR spustte
  `node scripts/a11y-test.mjs` na ukazkove strance.
- **Rozpocet velikosti:** zakladni stylesheet musi zustat pod **8 KB gzipped**.
  Pokud vase zmena tento limit prekroci, oduvodnete to v PR.

<hr class="hr-text" data-content="Pull requesty">

## Pull requesty

1. Nejprve otevrete issue pro cokoli netrivialniho — usetri to prepracovavani.
2. PR mějte fokusovane: jedna logicka zmena na PR.
3. Aktualizujte `CHANGELOG.md` v sekci „Unreleased".
4. Pred zadosti o kontrolu se ujistete, ze CI projde.
5. Vychozi je squash-merge; zpravy commitu budou upreny pri mergi.

<hr class="hr-text" data-content="Kodex chovani">

## Kodex chovani

Svou ucasti souhlasíte s dodrzovanim
[Contributor Covenant 2.1](https://www.contributor-covenant.org/version/2/1/code_of_conduct/).
Budte laskaví, trpelivi a predpokladejte dobry umysl.

[Otevrit issue ↗](https://github.com/sebastienrousseau/skeletonic-stylus/issues) ·
[Otevrit PR ↗](https://github.com/sebastienrousseau/skeletonic-stylus/pulls)
