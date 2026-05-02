---
title: "Про Skeletonic Stylus"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus — це відкрита бібліотека CSS на базі Stylus для доступного, швидкого та модульного стилізування інтерфейсів."
layout: page
language: uk
permalink: https://skeletonic.io/uk/pro-nas/
date: 2026-04-08
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "skeletonic, про нас, stylus, css фреймворк, філософія"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

<p class="badges">
  <img alt="Зірки на GitHub" src="https://img.shields.io/github/stars/sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=Stars" height="28" loading="lazy">
  <img alt="Завантаження за місяць" src="https://img.shields.io/npm/dm/@sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=Downloads" height="28" loading="lazy">
  <img alt="Версія npm" src="https://img.shields.io/npm/v/@sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=npm" height="28" loading="lazy">
  <img alt="Розмір пакета" src="https://img.shields.io/badge/gzip-8.0%20KB-brightgreen?style=for-the-badge" height="28" loading="lazy">
  <img alt="Ліцензія" src="https://img.shields.io/npm/l/@sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=License" height="28" loading="lazy">
  <img alt="WCAG" src="https://img.shields.io/badge/WCAG-2.2%20AA-2e7d32?style=for-the-badge" height="28" loading="lazy">
</p>

## Коротко

**Skeletonic Stylus** — це відкрита бібліотека CSS на базі
[Stylus](https://stylus-lang.com) для доступного, швидкого та модульного
стилізування інтерфейсів.

Проєкт народився у 2018 році як особистий експеримент із **відправки
менше CSS** без втрати зручності повноцінної компонентної бібліотеки.
Через вісім років мета залишається незмінною.

## Що ви отримуєте

<div class="feature-grid">
  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/thunder.min.svg" alt="Блискавка" width="64" height="64" loading="lazy" decoding="async">
    <h3>Блискавична швидкість</h3>
    <p>Проєктуйте та налаштовуйте адаптивні інтерфейси за лічені хвилини. Нативні CSS-змінні, попередньо визначені класи, 12-колонкова сітка, що покриває кожен семантичний HTML-елемент.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/lightweight.min.svg" alt="Перо" width="64" height="64" loading="lazy" decoding="async">
    <h3>Легкість</h3>
    <p>8,3&nbsp;КБ gzip. Сторінки завантажуються швидше. Усі необхідні будівельні блоки на місці.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/responsive.min.svg" alt="Адаптивні пристрої" width="64" height="64" loading="lazy" decoding="async">
    <h3>Адаптивний дизайн</h3>
    <p>Розроблено для десктопу та мобільних. Макети адаптуються до будь-якого пристрою. Оптимізовано для сенсорного керування, семантичний HTML по всьому проєкту.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/accessibility.min.svg" alt="Доступність" width="64" height="64" loading="lazy" decoding="async">
    <h3>Доступність</h3>
    <p>WCAG&nbsp;2.2 вбудовано: кільця focus-visible, контраст AA, skip-link хелпери, клавіатурно-дружні компоненти, підтримка зменшення руху — без додаткової таблиці стилів, без шаблонного коду <code>aria-*</code>.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/components.min.svg" alt="Блоки компонентів" width="64" height="64" loading="lazy" decoding="async">
    <h3>Бібліотека компонентів</h3>
    <p>Модульні CSS-компоненти та Stylus-міксини. Кнопки, форми, картки, сповіщення, значки, палітри та анімації — чисті, модульні, готові до інтеграції.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/github.min.svg" alt="Логотип GitHub" width="64" height="64" loading="lazy" decoding="async">
    <h3>Безкоштовно та з відкритим кодом</h3>
    <p>Спроєктовано, побудовано та підтримується Sebastien Rousseau. Подвійна ліцензія — <strong>MIT</strong> або <strong>Apache&nbsp;2.0</strong>. Без оплати, без ліцензійних витрат, навіть для комерційного використання.</p>
  </article>
</div>

## Як це порівнюється

Одна самостійно розміщена таблиця стилів покриває типографіку, кнопки,
форми, картки, таблиці, палітри, анімації та утиліти. Без JavaScript.
Без обов'язкового кроку збірки. Без залежностей від Bootstrap, Tailwind
чи Bulma.

| Функція | Skeletonic Stylus | Bootstrap 5 | Tailwind CSS | Bulma |
|---|---|---|---|---|
| Розмір gzip | **8,3&nbsp;КБ** | ~30&nbsp;КБ | ~10&nbsp;КБ JIT | ~30&nbsp;КБ |
| Відповідність WCAG 2.2 | **Вбудовано** | Частково | Ручне | Частково |
| Каскадні шари | **Так (`@layer`)** | Ні | Ні | Ні |
| Темний режим | **`prefers-color-scheme`** | Опціонально | На основі класів | Опціонально |
| Потрібен JavaScript | **Ні** | Так (Popper) | Ні | Ні |
| CycloneDX SBOM | **Так** | Ні | Ні | Ні |
| Зменшення руху | **Дотримується** | Частково | Ручне | Частково |
| Ліцензія | MIT або Apache 2.0 | MIT | MIT | MIT |

## Принципи

1. **Доступність — це підлога, а не стеля.** Відповідність WCAG 2.2
   вбудована в кожен компонент, а не прикручена як «тема».
2. **Байти мають значення.** Одна відправлена таблиця стилів не повинна
   перевищувати бюджет ваги сторінки. Обмеження 8&nbsp;КБ gzip
   контролюється в CI.
3. **Каскадні шари перемагають війни специфічності.** Перевизначайте
   будь-що впевнено — без `!important`, без трюків з порядком DOM.
4. **Stylus все ще хороший.** Лаконічний, виразний, і дозволяє
   бібліотеці вміщуватися в ~3000 читабельних рядків.
5. **Нудність — це перевага.** Без JS-залежностей. Без магії збірки.
   Без зламаних перейменувань. CSS-класи роблять саме те, що обіцяють.
6. **Тематизація за секунди.** Нативні CSS-змінні для кольорів,
   відступів, типографіки та радіусів.
7. **Зміцнений ланцюг постачання.** Підписана провенанс npm. Закріплені
   оновлення Dependabot. CVE-2023-44270 виправлено через overrides.

## Версіонування та semver

Skeletonic Stylus дотримується [Семантичного версіонування 2.0](https://semver.org).

| Зміна | Коли | Приклад |
|---|---|---|
| **Major** | Видалення або перейменування публічного класу, міксину чи токена | 1.x → 2.0 |
| **Minor** | Додавання нового компонента, міксину чи токена | 1.1 → 1.2 |
| **Patch** | Виправлення помилок, покращення a11y, продуктивність, безпека | 1.1.6 → 2.0.0 |

Усі публічні імена класів, усі CSS-змінні та всі експортовані
Stylus-міксини є частиною публічного API. Зміна, що ламає сумісність,
отримує major-оновлення та посібник з міграції.

## Управління проєктом

Skeletonic Stylus спроєктовано, побудовано та підтримується
[Sebastien Rousseau](https://sebastienrousseau.com). Подвійна ліцензія —
[MIT](https://opensource.org/licenses/MIT) та
[Apache 2.0](https://opensource.org/licenses/Apache-2.0).

Запитання, ідеї та внески вітаються —
[див. посібник із внеску](/uk/vnesok/).
