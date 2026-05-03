---
title: "Журнал изменений"
name: "Skeletonic Stylus"
description: "Заметки о релизах Skeletonic Stylus с полным описанием v2.0.0."
layout: page
permalink: https://skeletonic.io/ru/zhurnal-izmeneniy/
author: Sebastien Rousseau
language: ru
theme_color: "hsl(210, 100%, 42%)"
keywords: "skeletonic журнал изменений, заметки о релизах, v2.0.0, semver"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

## v2.0.0 — 2026-04 (текущая)

Проход «готовность к публикации»: доступность, цепочка поставок, гигиена репозитория.

### Доступность (WCAG 2.2)
- **`$primary` затемнён** до `hsl(210, 100%, 42%)` для контраста AA на белом тексте в кнопках / бейджах / ссылках.
- **`$secondary` затемнён** до `hsl(195, 100%, 33%)`.
- Добавлены **focus-visible** кольца на каждый интерактивный элемент.
- Добавлена **обёртка `@media (prefers-reduced-motion)`** вокруг модуля анимаций.
- Добавлена **автоматическая замена токенов `prefers-color-scheme: dark`**.
- Добавлен **миксин target-size(24px)** для соответствия WCAG 2.2 SC 2.5.8.
- Добавлены **хелперы scroll-margin для focus-not-obscured** для фиксированных заголовков.

### Сборка и цепочка поставок
- **Каскадные слои** — каждый блок теперь находится в
  `@layer skeletonic.{reset,tokens,layout,elements,components,utilities}`.
- **CycloneDX SBOM** генерируется как часть npm-архива.
- **Бюджеты `size-limit`** контролируются в CI: потолок 8 КБ gzip для основного файла стилей.
- **CVE-2023-44270** (парсинг переноса строки postcss) исправлена через `pnpm.overrides`.
- Провенанс + подписание в процессе npm-публикации (`--provenance --access public`).
- Удалён архивированный плагин `stylelint-a11y` из конфигурации линтинга.

### Гигиена репозитория и потребительский пакет
- Устаревший каталог `package/` удалён; `dist/` теперь единственный источник для потребителей.
- README переписан с учётом путей установки v2.0.0.
- `dist/` коммитится; `debug/` генерируется и добавлен в gitignore.
- Новый `.github/workflows/npm-publish.yml` управляется тегами.

### Исправления ошибок (P0)
- **Регрессия родительского селектора `row $:after`** — заменён ошибочный `$` на `&` в `src/stylus/components/_grid.styl`.
- **`.alternate`** ошибочно применял `animation-direction: reverse` вместо `alternate`.
- **Пространство имён `.alert-*`** — `.alert.success` → `.alert.alert-success` для предотвращения конфликтов с классами состояний.

[Полные заметки о релизе v2.0.0 на GitHub ↗](https://github.com/sebastienrousseau/skeletonic-stylus/releases)

<hr class="hr-text" data-content="История">

## Предыдущие релизы

- **v1.1.6** — внутренняя очистка, обновление зависимостей.
- **v1.1.5** — добавлена палитра Material.
- **v1.1.0** — палитра Tachyons + рефакторинг сетки.
- **v1.0.5** — последний «устаревший» релиз перед обновлением WCAG 2.2.
- **v1.0.0** — первый публичный релиз (2018).

Для истории коммит за коммитом смотрите
[страницу релизов на GitHub ↗](https://github.com/sebastienrousseau/skeletonic-stylus/releases).
