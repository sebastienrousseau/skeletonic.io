---
title: "Безпека та ланцюг постачання"
name: "Skeletonic Stylus"
description: "Як Skeletonic Stylus v1.1.7 захищає свій конвеєр збірки, підписує релізи та постачає SBOM."
layout: page
language: uk
permalink: https://skeletonic.io/uk/bezpeka/
date: 2026-04-08
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "css безпека, sbom, cyclonedx, npm provenance, openssf scorecard, ланцюг постачання"
---

## Продуктивність

- **39,9&nbsp;КБ мініфіковано · 7,5&nbsp;КБ gzip · 6,3&nbsp;КБ brotli** для повної основної таблиці стилів.
- **Нуль JavaScript** — чистий Stylus → чистий CSS, нульова вартість в рантаймі.
- **Каскадні шари** — перевизначення перемагають без `!important`.
- **Бюджет `size-limit`** контролюється в CI при кожному коміті.

Продуктивність — це елемент безпеки. Кожен невідправлений байт — це
на один байт менше для аудиту, підпису та верифікації.

## Ланцюг постачання: коротко

| Контроль | Статус у v1.1.7 |
|---|---|
| **CycloneDX SBOM** | Генерується при кожному релізі, фіксується у `dist/sbom.json` |
| **npm provenance** | Увімкнено (`--provenance --access public`) |
| **Підписані git-теги** | SSH-підпис ключем мейнтейнера |
| **Закріплений Dependabot** | Щотижневі оновлення, автоматична перевірка |
| **Бюджети розміру** | `size-limit` — обмеження 8 КБ gzip, ламає CI при регресії |
| **Лінтинг** | `stylelint` + a11y-перевірки при кожному push |
| **CodeQL** | Увімкнено для `javascript` та конфігураційних файлів |
| **CVE-2023-44270** | **Виправлено** через `pnpm.overrides`, що оновлює `postcss@7` |

<hr class="hr-text" data-content="SBOM">

## CycloneDX SBOM

Кожен опублікований архів включає CycloneDX SBOM у `dist/sbom.json`.
Ви можете перевірити щойно встановлений пакет за допомогою:

```bash
pnpm add @sebastienrousseau/skeletonic-stylus@1.1.7
jq '.metadata.component.version' \
  node_modules/@sebastienrousseau/skeletonic-stylus/dist/sbom.json
# → "1.1.7"
```

SBOM генерується за допомогою `cyclonedx-npm` під час робочого процесу
публікації.

<hr class="hr-text" data-content="Провенанс">

## npm provenance

Опублікований артефакт підписано за допомогою
[npm package provenance](https://docs.npmjs.com/generating-provenance-statements).

Ви можете перевірити це після встановлення:

```bash
npm view @sebastienrousseau/skeletonic-stylus@1.1.7 --json | \
  jq '.dist."npm-signature"'
```

Підписана атестація пов'язує архів з конкретним запуском GitHub Actions,
що його створив.

<hr class="hr-text" data-content="CVE">

## Відомі CVE та виправлення

| CVE | Серйозність | Статус |
|---|---|---|
| **CVE-2023-44270** (postcss — парсинг переносу рядка) | Помірна | **Виправлено** у v1.1.7 через `pnpm.overrides`, що оновлює `postcss` до ≥ 8.4.31 |

База рекомендацій Snyk та стрічка GitHub Security Advisories
моніторяться безперервно; виправлення безпеки виходять як **патч-релізи**.

<hr class="hr-text" data-content="Звітування">

## Повідомлення про вразливість

Будь ласка, **не** створюйте публічний issue на GitHub для звіту
про безпеку. Натомість скористайтесь приватним каналом:

> [github.com/sebastienrousseau/skeletonic-stylus/security/advisories/new](https://github.com/sebastienrousseau/skeletonic-stylus/security/advisories/new)

Звіти підтверджуються протягом **72 годин**, виправлення випускаються
протягом **14 днів** для помірних проблем та **48 годин** для критичних.

[Повернутися на головну →](/uk/) · [Переглянути журнал змін →](/uk/zhurnal-zmin/)
