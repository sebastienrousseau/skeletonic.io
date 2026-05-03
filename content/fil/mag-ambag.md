---
title: "Mag-ambag"
name: "Skeletonic Stylus"
description: "Paano mag-file ng mga isyu, magmungkahi ng mga pagbabago, at magsumite ng pull request sa Skeletonic Stylus."
layout: page
permalink: https://skeletonic.io/fil/mag-ambag/
date: 2026-04-08
author: Sebastien Rousseau
language: fil
theme_color: "hsl(210, 100%, 42%)"
keywords: "mag-ambag, open source, pull request, isyu, convention"
---

Ang Skeletonic Stylus ay isang open-source na proyekto; malugod na tinatanggap ang mga kontribusyon sa lahat ng laki — mula sa pag-aayos ng typo hanggang sa mga bagong component.

<hr class="hr-text" data-content="Mabilis na simula">

## Mabilis na simula

```bash
# 1. Fork &amp; clone
git clone git@github.com:YOUR-USER/skeletonic-stylus.git
cd skeletonic-stylus

# 2. I-install (pnpm via corepack)
corepack enable
pnpm install

# 3. I-build
pnpm run build           # buong pipeline (stylus → prettier → stylelint → autoprefixer → csso)

# 4. Lint &amp; test
pnpm run lint
node scripts/a11y-test.mjs
```

<hr class="hr-text" data-content="Mga Convention">

## Mga Convention

- **Mga pangalan ng branch:** `feat/short-thing`, `fix/short-thing`, `docs/short-thing`.
- **Mga commit:** [Conventional Commits](https://www.conventionalcommits.org).
  Lahat ng commit ay nilalagdaan.
- **Stylus:** 4-space na indent, walang semicolon, mas pinipili ang `$variables` kaysa sa mga magic
  number, bawat public class ay nasa isang cascade layer.
- **Aksesibilidad:** anumang bagong component ay dapat malinaw na nakakatugon sa WCAG 2.2 AA;
  patakbuhin ang `node scripts/a11y-test.mjs` laban sa showcase bago magbukas ng PR.
- **Size budget:** ang core stylesheet ay dapat manatili sa ilalim ng **8 KB gzipped**.
  Kung itutulak ito ng iyong pagbabago, bigyang-katwiran ito sa PR.

<hr class="hr-text" data-content="Mga Pull request">

## Mga Pull request

1. Magbukas muna ng isyu para sa anumang hindi trivial — nakakatipid ng muling paggawa.
2. Panatilihing nakatutok ang mga PR: isang lohikal na pagbabago bawat PR.
3. I-update ang `CHANGELOG.md` sa ilalim ng "Unreleased".
4. Tiyaking berde ang CI bago humiling ng review.
5. Squash-merge ang default; lilinisin ang mga commit message sa merge.

<hr class="hr-text" data-content="Code of conduct">

## Code of conduct

Sa pamamagitan ng paglahok, sumasang-ayon ka na sumunod sa
[Contributor Covenant 2.1](https://www.contributor-covenant.org/version/2/1/code_of_conduct/).
Maging mabait, maging matiyaga, ipagpalagay ang mabuting intensyon.

[Magbukas ng isyu ↗](https://github.com/sebastienrousseau/skeletonic-stylus/issues) ·
[Magbukas ng PR ↗](https://github.com/sebastienrousseau/skeletonic-stylus/pulls)
