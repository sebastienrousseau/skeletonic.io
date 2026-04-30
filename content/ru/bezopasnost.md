---
title: "Безопасность и цепочка поставок"
name: "Skeletonic Stylus"
description: "Как Skeletonic Stylus v1.1.7 защищает конвейер сборки, подписывает релизы и поставляет SBOM."
layout: page
permalink: https://skeletonic.io/ru/bezopasnost/
date: 2026-04-08
author: Sebastien Rousseau
language: ru
theme_color: "hsl(210, 100%, 42%)"
keywords: "css безопасность, sbom, cyclonedx, npm провенанс, openssf scorecard, цепочка поставок"
---

## Производительность

- **45,7&nbsp;КБ минифицированный · 8,3&nbsp;КБ gzip · 6,9&nbsp;КБ brotli** для полного основного файла стилей.
- **Без JavaScript** — чистый Stylus → чистый CSS, без затрат времени выполнения.
- **Каскадные слои** — переопределения работают без `!important`.
- **Бюджет `size-limit`** контролируется в CI при каждом коммите.

Производительность — это элемент безопасности. Каждый не отправленный байт — это один байт меньше для аудита, подписания и проверки.

## Краткое резюме по цепочке поставок

| Контроль | Статус v1.1.7 |
|---|---|
| **CycloneDX SBOM** | Генерируется при каждом релизе, включён в `dist/sbom.json` |
| **npm-провенанс** | Включён (`--provenance --access public`) |
| **Подписанные git-теги** | Подписаны SSH-ключом мейнтейнера |
| **Закреплённый Dependabot** | Еженедельные обновления, автоматическая проверка |
| **Бюджеты размера** | `size-limit` — потолок 8 КБ gzip, при превышении CI падает |
| **Линтинг** | `stylelint` + проверки доступности при каждом push |
| **CodeQL** | Включён для `javascript` и конфигурационных файлов |
| **CVE-2023-44270** | **Исправлена** через `pnpm.overrides`, обновляющий `postcss@7` |

<hr class="hr-text" data-content="SBOM">

## CycloneDX SBOM

Каждый опубликованный архив включает CycloneDX SBOM в `dist/sbom.json`. Вы можете проверить свежеустановленный пакет:

```bash
pnpm add @sebastienrousseau/skeletonic-stylus@1.1.7
jq '.metadata.component.version' \
  node_modules/@sebastienrousseau/skeletonic-stylus/dist/sbom.json
# → "1.1.7"
```

SBOM генерируется с помощью `cyclonedx-npm` в процессе публикации.

<hr class="hr-text" data-content="Провенанс">

## npm-провенанс

Опубликованный артефакт подписан с использованием
[npm package provenance](https://docs.npmjs.com/generating-provenance-statements).

Вы можете проверить его после установки:

```bash
npm view @sebastienrousseau/skeletonic-stylus@1.1.7 --json | \
  jq '.dist."npm-signature"'
```

Подписанная аттестация связывает архив с конкретным запуском GitHub Actions, который его создал.

<hr class="hr-text" data-content="CVE">

## Известные CVE и патчи

| CVE | Серьёзность | Статус |
|---|---|---|
| **CVE-2023-44270** (парсинг переноса строки postcss) | Умеренная | **Исправлена** в v1.1.7 через `pnpm.overrides`, обновляющий `postcss` до ≥ 8.4.31 |

База данных рекомендаций Snyk и лента GitHub Security Advisories отслеживаются непрерывно; исправления безопасности поставляются как **патч-релизы**.

<hr class="hr-text" data-content="Отчёты">

## Сообщить об уязвимости

Пожалуйста, **не открывайте** публичный issue на GitHub для отчётов о безопасности. Вместо этого воспользуйтесь приватным каналом:

> [github.com/sebastienrousseau/skeletonic-stylus/security/advisories/new](https://github.com/sebastienrousseau/skeletonic-stylus/security/advisories/new)

Отчёты подтверждаются в течение **72 часов**, исправления выпускаются в течение **14 дней** для умеренных проблем и **48 часов** для критических.

[На главную →](/ru/) · [Читать журнал изменений →](/ru/zhurnal-izmeneniy/)
