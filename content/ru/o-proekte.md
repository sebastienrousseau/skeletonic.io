---
title: "О проекте Skeletonic Stylus"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus — это CSS-библиотека с открытым исходным кодом на Stylus, созданная для простой, быстрой и модульной стилизации интерфейсов с поддержкой доступности."
layout: page
permalink: https://skeletonic.io/ru/o-proekte/
date: 2026-04-08
author: Sebastien Rousseau
language: ru
theme_color: "hsl(210, 100%, 42%)"
keywords: "skeletonic, о проекте, stylus, css фреймворк, философия"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

<p class="badges">
  <img alt="Звёзды на GitHub" src="https://img.shields.io/github/stars/sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=Stars" height="28" loading="lazy">
  <img alt="Загрузки в месяц" src="https://img.shields.io/npm/dm/@sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=Downloads" height="28" loading="lazy">
  <img alt="Версия npm" src="https://img.shields.io/npm/v/@sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=npm" height="28" loading="lazy">
  <img alt="Размер бандла" src="https://img.shields.io/badge/gzip-7.8%20KB-brightgreen?style=for-the-badge" height="28" loading="lazy">
  <img alt="Лицензия" src="https://img.shields.io/npm/l/@sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=License" height="28" loading="lazy">
  <img alt="WCAG" src="https://img.shields.io/badge/WCAG-2.2%20AA-2e7d32?style=for-the-badge" height="28" loading="lazy">
</p>

## Коротко о главном

**Skeletonic Stylus** — это CSS-библиотека с открытым исходным кодом на [Stylus](https://stylus-lang.com), для доступной, быстрой и модульной стилизации интерфейсов.

Проект появился в 2018 году как личный эксперимент по **уменьшению объёма CSS** без потери удобства полноценной компонентной библиотеки. Восемь лет спустя цель не изменилась.

## Что вы получаете

<div class="feature-grid">
  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/thunder.min.svg" alt="Молния" width="64" height="64" loading="lazy" decoding="async">
    <h3>Молниеносная скорость</h3>
    <p>Проектируйте и настраивайте адаптивные интерфейсы за минуты. Нативные CSS-переменные, готовые классы, 12-колоночная сетка для любого семантического HTML-элемента.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/lightweight.min.svg" alt="Перо" width="64" height="64" loading="lazy" decoding="async">
    <h3>Легковесность</h3>
    <p>8,3&nbsp;КБ в gzip. Страницы загружаются быстрее. Все основные строительные блоки на месте.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/responsive.min.svg" alt="Адаптивные устройства" width="64" height="64" loading="lazy" decoding="async">
    <h3>Адаптивный дизайн</h3>
    <p>Разработано для настольных и мобильных устройств. Макеты подстраиваются под любое устройство. Оптимизировано для сенсорных экранов, семантический HTML повсюду.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/accessibility.min.svg" alt="Доступность" width="64" height="64" loading="lazy" decoding="async">
    <h3>Доступность</h3>
    <p>WCAG&nbsp;2.2 встроен: кольца focus-visible, контраст AA, skip-link хелперы, компоненты, удобные для клавиатуры, поддержка уменьшенного движения — без дополнительных стилей, без шаблонного <code>aria-*</code>.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/components.min.svg" alt="Блоки компонентов" width="64" height="64" loading="lazy" decoding="async">
    <h3>Библиотека компонентов</h3>
    <p>Модульные CSS-компоненты и Stylus-миксины. Кнопки, формы, карточки, уведомления, бейджи, палитры и анимации — чисто, модульно, готово к использованию.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/github.min.svg" alt="Логотип GitHub" width="64" height="64" loading="lazy" decoding="async">
    <h3>Бесплатно и с открытым кодом</h3>
    <p>Спроектировано, разработано и поддерживается Себастьеном Руссо. Двойная лицензия: <strong>MIT</strong> или <strong>Apache&nbsp;2.0</strong>. Без сборов, без лицензионных платежей, в том числе для коммерческого использования.</p>
  </article>
</div>

## Сравнение с альтернативами

Один самостоятельно размещаемый файл стилей покрывает типографику, кнопки, формы, карточки, таблицы, палитры, анимации и утилитарные классы. Без JavaScript. Без обязательного этапа сборки. Без зависимостей от Bootstrap, Tailwind или Bulma.

| Характеристика | Skeletonic Stylus | Bootstrap 5 | Tailwind CSS | Bulma |
|---|---|---|---|---|
| Размер в gzip | **8,3&nbsp;КБ** | ~30&nbsp;КБ | ~10&nbsp;КБ JIT | ~30&nbsp;КБ |
| Соответствие WCAG 2.2 | **Встроено** | Частично | Вручную | Частично |
| Каскадные слои | **Да (`@layer`)** | Нет | Нет | Нет |
| Тёмная тема | **`prefers-color-scheme`** | Опционально | На основе классов | Опционально |
| Требуется JavaScript | **Нет** | Да (Popper) | Нет | Нет |
| CycloneDX SBOM | **Да** | Нет | Нет | Нет |
| Уменьшенное движение | **Учитывается** | Частично | Вручную | Частично |
| Лицензия | MIT или Apache 2.0 | MIT | MIT | MIT |

## Принципы

1. **Доступность — это основа, а не надстройка.** Соответствие WCAG 2.2 встроено в каждый компонент, а не добавлено как отдельная «тема».
2. **Каждый байт на счету.** Один файл стилей не должен раздувать бюджет страницы. Лимит в 8&nbsp;КБ gzip контролируется в CI.
3. **Каскадные слои побеждают войны специфичности.** Переопределяйте что угодно с уверенностью — без `!important`, без трюков с порядком DOM.
4. **Stylus по-прежнему хорош.** Лаконичный, выразительный, позволяет уместить библиотеку в ~3 000 читаемых строк.
5. **Скучное — это преимущество.** Без JS-зависимостей. Без магии на этапе сборки. Без ломающих переименований. CSS-классы делают именно то, что говорит их название.
6. **Настройка за секунды.** Нативные CSS Custom Properties для цветов, отступов, типографики и радиусов.
7. **Защищённая цепочка поставок.** Подписанный npm-провенанс. Закреплённые обновления Dependabot. CVE-2023-44270 исправлена через overrides.

## Версионирование и semver

Skeletonic Stylus следует [Semantic Versioning 2.0](https://semver.org).

| Уровень | Когда | Пример |
|---|---|---|
| **Major** | Удаление или переименование публичного класса, миксина или токена | 1.x → 2.0 |
| **Minor** | Добавление нового компонента, миксина или токена | 1.1 → 1.2 |
| **Patch** | Исправление ошибок, доработка a11y, производительность, безопасность | 1.1.6 → 2.0.0 |

Все публичные имена классов, все CSS Custom Properties и все экспортируемые Stylus-миксины являются частью публичного API. Ломающее изменение получает major-версию и руководство по миграции.

## Сопровождение

Skeletonic Stylus спроектирован, разработан и поддерживается
[Себастьеном Руссо](https://sebastienrousseau.com). Двойная лицензия:
[MIT](https://opensource.org/licenses/MIT) и
[Apache 2.0](https://opensource.org/licenses/Apache-2.0).

Вопросы, идеи и вклад приветствуются —
[руководство по участию](/ru/vklad/).
