---
title: "Журнал змін"
name: "Skeletonic Stylus"
description: "Примітки до релізів Skeletonic Stylus з повним описом v1.1.7."
layout: page
language: uk
permalink: https://skeletonic.io/uk/zhurnal-zmin/
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "skeletonic журнал змін, примітки до релізу, v1.1.7, semver"
---

## v1.1.7 — 2026-04 (поточний)

Прохід «готовність до релізу»: a11y, ланцюг постачання, гігієна
репозиторію.

### Доступність (WCAG 2.2)
- **`$primary` затемнено** до `hsl(210, 100%, 42%)` для контрасту AA
  відносно білого тексту в кнопках / значках / посиланнях.
- **`$secondary` затемнено** до `hsl(195, 100%, 33%)`.
- Додано **кільця focus-visible** на кожному інтерактивному елементі.
- Додано обгортку **`@media (prefers-reduced-motion)`** навколо модуля
  анімацій.
- Додано **`prefers-color-scheme: dark`** — автоматичну заміну токенів.
- Додано міксин **target-size(24px)** для відповідності WCAG 2.2
  SC 2.5.8.
- Додано хелпери **focus-not-obscured** зі scroll-margin для липких
  заголовків.

### Збірка та ланцюг постачання
- **Каскадні шари** — кожен блок тепер знаходиться в
  `@layer skeletonic.{reset,tokens,layout,elements,components,utilities}`.
- **CycloneDX SBOM** генерується як частина npm-архіву.
- **Бюджети `size-limit`** контролюються в CI: обмеження 8 КБ gzip
  для основної таблиці стилів.
- **CVE-2023-44270** (postcss — переноси рядків) виправлено через
  `pnpm.overrides`.
- Провенанс + підпис у робочому процесі npm publish
  (`--provenance --access public`).
- Видалено архівний плагін `stylelint-a11y` з конфігурації лінтинга.

### Гігієна репозиторію та споживчий пакет
- Застарілий каталог `package/` видалено; `dist/` тепер єдине джерело
  істини для споживачів.
- README переписано відповідно до шляхів встановлення v1.1.7.
- `dist/` фіксується; `debug/` генерується та додано до gitignore.
- Новий `.github/workflows/npm-publish.yml` працює за тегами.

### Виправлення помилок (P0)
- **Регресія батьківського селектора `row $:after`** — помилковий `$`
  замінено на `&` у `src/stylus/components/_grid.styl`.
- **`.alternate`** помилково застосовувався
  `animation-direction: reverse` замість `alternate`.
- **Простір імен `.alert-*`** — `.alert.success` → `.alert.alert-success`
  для уникнення конфліктів із класами стану.

[Повні примітки до релізу v1.1.7 на GitHub ↗](https://github.com/sebastienrousseau/skeletonic-stylus/releases/tag/v1.1.7)

<hr class="hr-text" data-content="Історія">

## Попередні релізи

- **v1.1.6** — внутрішнє очищення, оновлення залежностей.
- **v1.1.5** — додано палітру Material.
- **v1.1.0** — палітра Tachyons + рефакторинг сітки.
- **v1.0.5** — останній «класичний» реліз перед проходом WCAG 2.2.
- **v1.0.0** — перший публічний реліз (2018).

Для покомітної історії дивіться
[сторінку релізів на GitHub ↗](https://github.com/sebastienrousseau/skeletonic-stylus/releases).
