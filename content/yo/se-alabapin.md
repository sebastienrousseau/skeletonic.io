---
title: "Ṣe Alabapin"
name: "Skeletonic Stylus"
description: "Bawo ni o ṣe le fi awọn ọran silẹ, dabaa awọn iyipada, ati fi awọn ibeere fa silẹ si Skeletonic Stylus."
language: yo
layout: page
permalink: https://skeletonic.io/yo/se-alabapin/
date: 2026-04-08
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "ṣe alabapin, orisun-ṣiṣi, ibeere fa, ọran, awọn apejọ"
---

Skeletonic Stylus jẹ iṣẹ-akanṣe orisun-ṣiṣi; awọn ilowosi gbogbo iwọn
ni a kaabo — lati atunṣe aṣiṣe kikọ si awọn paati tuntun.

<hr class="hr-text" data-content="Ibẹrẹ kiakia">

## Ibẹrẹ kiakia

```bash
# 1. Ṣe Fork ati ṣe daakọ
git clone git@github.com:YOUR-USER/skeletonic-stylus.git
cd skeletonic-stylus

# 2. Fi sori ẹrọ (pnpm nipasẹ corepack)
corepack enable
pnpm install

# 3. Kọ
pnpm run build           # opo pipe (stylus → prettier → stylelint → autoprefixer → csso)

# 4. Lint ati idanwo
pnpm run lint
node scripts/a11y-test.mjs
```

<hr class="hr-text" data-content="Awọn apejọ">

## Awọn apejọ

- **Awọn orukọ ẹka:** `feat/nkan-kukuru`, `fix/nkan-kukuru`, `docs/nkan-kukuru`.
- **Awọn adehun:** [Conventional Commits](https://www.conventionalcommits.org).
  Gbogbo awọn adehun ni a fọwọsi.
- **Stylus:** aye-4 indent, ko si semicolons, fẹ `$variables` ju awọn
  nọmba idan lọ, gbogbo kilasi gbogbo eniyan ngbe ninu ipele cascade.
- **Irayẹ-si:** eyikeyi paati tuntun gbọdọ jẹrisi ibamu WCAG 2.2 AA;
  ṣiṣẹ `node scripts/a11y-test.mjs` si ifihan ṣaaju ṣiṣi PR.
- **Isuna iwọn:** iwe-aṣa ipilẹ gbọdọ wa labẹ **8 KB gzipped**.
  Ti iyipada rẹ ba ti o lọ, ṣe alaye ninu PR.

<hr class="hr-text" data-content="Awọn ibeere fa">

## Awọn ibeere fa

1. Ṣii ọran kan ni akọkọ fun ohunkohun ti kii ṣe kekere — o fi agbara
   pamọ fun atunṣe.
2. Jẹ ki awọn PR dojukọ: iyipada ọgbọn kan fun PR kan.
3. Ṣe imudojuiwọn `CHANGELOG.md` labẹ "Ti a ko ti tu silẹ".
4. Ri daju pe CI jẹ alawọ ewe ṣaaju beere fun atunyẹwo.
5. Squash-merge ni aiyipada; awọn ifiranṣẹ adehun ni a yoo ṣe mimọ ni
   ọna asopọ.

<hr class="hr-text" data-content="Koodu iwa">

## Koodu iwa

Nipa kopa, o gba lati tẹle
[Contributor Covenant 2.1](https://www.contributor-covenant.org/version/2/1/code_of_conduct/).
Jẹ onirẹlẹ, jẹ onisuuru, ro ero rere.

[Ṣii ọran ↗](https://github.com/sebastienrousseau/skeletonic-stylus/issues) ·
[Ṣii PR ↗](https://github.com/sebastienrousseau/skeletonic-stylus/pulls)
