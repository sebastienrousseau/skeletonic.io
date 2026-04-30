---
title: "Компоненты"
name: "Skeletonic Stylus"
description: "Живые HTML-примеры каждого компонента Skeletonic Stylus — сгруппированные, с якорями, отрисованные тем же файлом стилей, который демонстрируется."
layout: page
permalink: https://skeletonic.io/ru/komponenty/
date: 2026-04-08
author: Sebastien Rousseau
language: ru
theme_color: "hsl(210, 100%, 42%)"
keywords: "компоненты skeletonic, кнопки, карточки, формы, уведомления, бейджи, заголовок, навигация, css-only гамбургер"
---

> **Translation note (2026-04-30).** v1.1.7 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

Каждый пример ниже **отрисован тем же файлом стилей, который демонстрируется**. Без препроцессора. Без JavaScript. Без дополнительных зависимостей. Скопируйте любой фрагмент в чистый HTML-файл — и он работает.

<nav aria-label="На этой странице">
<p><strong>На этой странице</strong></p>
<ul>
<li><strong>Элементы ввода</strong> — <a href="#buttons">Кнопки</a> · <a href="#badges">Бейджи</a></li>
<li><strong>Обратная связь</strong> — <a href="#alerts">Уведомления</a></li>
<li><strong>Поверхности</strong> — <a href="#cards">Карточки</a></li>
<li><strong>Формы</strong> — <a href="#form-fields">Поля форм</a></li>
<li><strong>Макет</strong> — <a href="#grid">Сетка</a> · <a href="#header">Заголовок и навигация-гамбургер</a></li>
</ul>
</nav>

<hr class="hr-text" data-content="Элементы ввода">

<h2 id="inputs">Элементы ввода</h2>

Интерактивные элементы, которые посетитель нажимает, касается или фокусирует для управления страницей.

<h3 id="buttons">Кнопки</h3>

Семантический, настраиваемый элемент действия. Сплошные и контурные варианты поставляются в шести фирменных цветах каждый.

```html
<a href="#" class="button primary">Primary</a>
<a href="#" class="button secondary">Secondary</a>
<a href="#" class="button tertiary">Tertiary</a>
```

<section aria-labelledby="buttons">
<p>
  <a href="#" class="button primary">Primary</a>
  <a href="#" class="button secondary">Secondary</a>
  <a href="#" class="button tertiary">Tertiary</a>
</p>
</section>

Контурные варианты:

```html
<a href="#" class="button primary-outline">Outline</a>
<a href="#" class="button secondary-outline">Outline</a>
```

<p>
  <a href="#" class="button primary-outline">Outline</a>
  <a href="#" class="button secondary-outline">Outline</a>
</p>

> **Примечание о доступности.** Каждый вариант `.button` имеет кольцо
> `:focus-visible` и **минимальную область нажатия 24×24&nbsp;px**
> (WCAG&nbsp;2.2 SC&nbsp;2.5.8). Используйте `<button type="button">` для
> действий на странице и `<a href>` только для навигации.

<h3 id="badges">Бейджи</h3>

Компактная метка для статуса, счётчика или категории. Размер текста фиксирован, чтобы бейджи выравнивались с окружающим текстом.

```html
<span class="badge">Default</span>
<span class="badge primary">Primary</span>
<span class="badge success">Success</span>
<span class="badge warning">Warning</span>
<span class="badge danger">Danger</span>
```

<section aria-labelledby="badges">
<p>
  <span class="badge">Default</span>
  <span class="badge primary">Primary</span>
  <span class="badge success">Success</span>
  <span class="badge warning">Warning</span>
  <span class="badge danger">Danger</span>
</p>
</section>

> **Примечание о доступности.** Бейджи по умолчанию декоративны. Когда
> бейдж несёт единственный сигнал (например, счётчик непрочитанных),
> оберните его в визуально скрытый хелпер: `<span class="visually-hidden">3
> непрочитанных сообщения</span>`.

<hr class="hr-text" data-content="Обратная связь">

<h2 id="feedback">Обратная связь</h2>

Поверхности, сообщающие посетителю, что что-то произошло — или вот-вот произойдёт.

<h3 id="alerts">Уведомления</h3>

Статусные сообщения с семантическим назначением. **В v1.1.7 каждый вариант явно
указан в пространстве имён** `.alert-{primary,secondary,info,success,warning,error}`,
чтобы класс варианта не конфликтовал с классами состояний в других местах страницы.

```html
<div class="alert alert-primary" role="alert">
  <strong>Внимание.</strong> Это основное уведомление.
</div>
<div class="alert alert-success" role="status">
  <strong>Сохранено.</strong> Ваши изменения сохранены.
</div>
<div class="alert alert-warning" role="alert">
  <strong>Осторожно.</strong> Это действие влияет на общее состояние.
</div>
<div class="alert alert-error" role="alert">
  <strong>Ошибка.</strong> Не удалось сохранить форму.
</div>
```

<section aria-labelledby="alerts">
<div class="alert alert-primary" role="alert">
<strong>Внимание.</strong> Это основное уведомление.
</div>

<div class="alert alert-success" role="status">
<strong>Сохранено.</strong> Ваши изменения сохранены.
</div>

<div class="alert alert-warning" role="alert">
<strong>Осторожно.</strong> Это действие влияет на общее состояние.
</div>

<div class="alert alert-error" role="alert">
<strong>Ошибка.</strong> Не удалось сохранить форму.
</div>
</section>

> **Примечание о доступности.** Используйте `role="alert"` для сообщений,
> требующих немедленного внимания (ошибки, предупреждения), и `role="status"`
> для неcрочных подтверждений. Оба варианта передают сообщение
> вспомогательным технологиям в момент появления.

<hr class="hr-text" data-content="Поверхности">

<h2 id="surface">Поверхности</h2>

Контейнеры, обрамляющие и группирующие связанный контент.

<h3 id="cards">Карточки</h3>

Контейнер с рамкой и отступами для одного связного блока. Сочетайте с сеткой `flex-N` для адаптивных стен из карточек.

```html
<section class="row">
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Lightweight</h3>
      <p>45.7 KB minified, 8.3 KB gzipped.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Accessible</h3>
      <p>WCAG 2.2 conformant out of the box.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Modular</h3>
      <p>Cascade-layered for easy overrides.</p>
    </div>
  </article>
</section>
```

<section class="row" aria-labelledby="cards">
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Легковесный</h3>
      <p>45,7&nbsp;КБ минифицированный, 8,3&nbsp;КБ gzip.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Доступный</h3>
      <p>Соответствует WCAG&nbsp;2.2 прямо из коробки.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Модульный</h3>
      <p>Каскадные слои для простого переопределения.</p>
    </div>
  </article>
</section>

> **Примечание о доступности.** Оберните каждую карточку в семантический
> ориентир (`<article>`, `<section>`) и начните её содержимое с заголовка
> (`<h3>`). Пользователи экранных читалок смогут перемещаться по списку
> карточек как по полноценным навигационным областям.

<hr class="hr-text" data-content="Формы">

<h2 id="forms">Формы</h2>

Поля ввода, метки и группировки для сбора пользовательских данных.

<h3 id="form-fields">Поля форм</h3>

Метки, текстовые поля, текстовые области, fieldset и legend — всё согласовано по размерам с остальной дизайн-системой.

```html
<form>
  <label for="name">Имя</label>
  <input id="name" type="text" required>

  <label for="email">Email</label>
  <input id="email" type="email" required class="input-primary">

  <label for="msg">Сообщение</label>
  <textarea id="msg" rows="4"></textarea>

  <button type="submit" class="button primary">Отправить</button>
</form>
```

<section aria-labelledby="form-fields">
<form>
  <label for="demo-name">Имя</label>
  <input id="demo-name" type="text">

  <label for="demo-email">Email</label>
  <input id="demo-email" type="email" class="input-primary">

  <label for="demo-msg">Сообщение</label>
  <textarea id="demo-msg" rows="4"></textarea>

  <p><button type="button" class="button primary">Отправить (демо)</button></p>
</form>
</section>

> **Примечание о доступности.** Каждое поле ввода должно иметь программно
> связанный `<label for="…">`. Группируйте связанные элементы внутри
> `<fieldset>` с `<legend>`. Отмечайте обязательные поля атрибутом
> `required` (и видимой звёздочкой в тексте метки).

<hr class="hr-text" data-content="Макет">

<h2 id="layout">Макет</h2>

Структурные примитивы — сетка, контейнер, заголовок — формирующие всю страницу.

<h3 id="grid">Сетка</h3>

Адаптивная сетка `flex-N` (от 1 до 12 колонок) на основе flexbox. Родительский элемент `.row` автоматически задаёт промежутки и перенос.

```html
<div class="row">
  <div class="flex-6">Половина</div>
  <div class="flex-6">Половина</div>
</div>
<div class="row">
  <div class="flex-4">Треть</div>
  <div class="flex-4">Треть</div>
  <div class="flex-4">Треть</div>
</div>
```

<section aria-labelledby="grid">
<div style="display:flex;flex-wrap:wrap;gap:.5rem;">
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">Половина</div>
  <div style="flex:1 1 0;padding:.75rem;background:#e4e4e7;border-radius:.25rem;text-align:center;">Половина</div>
</div>

<div style="display:flex;flex-wrap:wrap;gap:.5rem;margin-top:.5rem;">
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">Треть</div>
  <div style="flex:1 1 0;padding:.75rem;background:#e4e4e7;border-radius:.25rem;text-align:center;">Треть</div>
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">Треть</div>
</div>
</section>

> **Примечание о доступности.** Визуальный порядок должен соответствовать
> порядку в DOM. Избегайте изменения порядка строк с помощью
> `flex-direction: row-reverse` или `order:` — экранные читалки и
> пользователи клавиатуры следуют исходному коду, а не отрисовке.

<h3 id="header">Заголовок и навигация-гамбургер</h3>

Полноценный заголовок на чистом CSS с адаптивным переключателем-гамбургером. **Без JavaScript.** Скопируйте фрагмент ниже в чистый HTML-файл, уже подключающий `skeletonic.min.css`, — и меню сворачивается, раскрывается и корректно удерживает фокус самостоятельно.

```html
<style>
  .sk-header{position:relative;display:flex;align-items:center;gap:1rem;padding:.75rem 1rem;border:1px solid #e4e4e7;border-radius:.5rem;background:#fff;}
  .sk-header .sk-brand{font-weight:600;color:#0a0a0a;text-decoration:none;}
  .sk-header .sk-toggle{position:absolute;left:-9999px;}
  .sk-header .sk-burger{display:none;margin-left:auto;cursor:pointer;padding:.625rem .75rem;border:1px solid #e4e4e7;border-radius:.375rem;font-size:1.125rem;line-height:1;min-width:2.75rem;min-height:2.75rem;}
  .sk-header .sk-burger:focus-within,.sk-header .sk-toggle:focus-visible+.sk-burger{outline:2px solid hsl(210,100%,42%);outline-offset:2px;}
  .sk-header .sk-menu{list-style:none;display:flex;gap:.25rem;margin:0 0 0 auto;padding:0;}
  .sk-header .sk-menu a{display:inline-flex;align-items:center;min-height:2.75rem;padding:.5rem .875rem;border-radius:.375rem;color:#1a1a1a;text-decoration:none;}
  .sk-header .sk-menu a:hover{background:#f4f4f5;}
  @media (max-width:640px){
    .sk-header .sk-burger{display:inline-flex;align-items:center;justify-content:center;}
    .sk-header .sk-menu{display:none;flex-direction:column;gap:0;position:absolute;top:calc(100% + .25rem);left:0;right:0;background:#fff;border:1px solid #e4e4e7;border-radius:.5rem;padding:.375rem;box-shadow:0 4px 24px rgba(0,0,0,.08);z-index:10;}
    .sk-header .sk-menu a{padding:.75rem 1rem;border-bottom:1px solid #f4f4f5;}
    .sk-header .sk-menu li:last-child a{border-bottom:0;}
    .sk-header .sk-toggle:checked ~ .sk-menu{display:flex;}
  }
</style>
<header class="sk-header">
  <a class="sk-brand" href="#">Бренд</a>
  <input class="sk-toggle" id="sk-nav-toggle" type="checkbox" aria-label="Переключить навигацию">
  <label class="sk-burger" for="sk-nav-toggle" aria-hidden="true">☰</label>
  <ul class="sk-menu">
    <li><a href="#">Главная</a></li>
    <li><a href="#">Документация</a></li>
    <li><a href="#">Компоненты</a></li>
    <li><a href="#">О проекте</a></li>
  </ul>
</header>
```

<section aria-labelledby="header">
<style>
  .sk-header{position:relative;display:flex;align-items:center;gap:1rem;padding:.75rem 1rem;border:1px solid #e4e4e7;border-radius:.5rem;background:#fff;}
  .sk-header .sk-brand{font-weight:600;color:#0a0a0a;text-decoration:none;}
  .sk-header .sk-toggle{position:absolute;left:-9999px;}
  .sk-header .sk-burger{display:none;margin-left:auto;cursor:pointer;padding:.625rem .75rem;border:1px solid #e4e4e7;border-radius:.375rem;font-size:1.125rem;line-height:1;min-width:2.75rem;min-height:2.75rem;}
  .sk-header .sk-burger:focus-within,.sk-header .sk-toggle:focus-visible+.sk-burger{outline:2px solid hsl(210,100%,42%);outline-offset:2px;}
  .sk-header .sk-menu{list-style:none;display:flex;gap:.25rem;margin:0 0 0 auto;padding:0;}
  .sk-header .sk-menu a{display:inline-flex;align-items:center;min-height:2.75rem;padding:.5rem .875rem;border-radius:.375rem;color:#1a1a1a;text-decoration:none;}
  .sk-header .sk-menu a:hover{background:#f4f4f5;}
  @media (max-width:640px){
    .sk-header .sk-burger{display:inline-flex;align-items:center;justify-content:center;}
    .sk-header .sk-menu{display:none;flex-direction:column;gap:0;position:absolute;top:calc(100% + .25rem);left:0;right:0;background:#fff;border:1px solid #e4e4e7;border-radius:.5rem;padding:.375rem;box-shadow:0 4px 24px rgba(0,0,0,.08);z-index:10;}
    .sk-header .sk-menu a{padding:.75rem 1rem;border-bottom:1px solid #f4f4f5;}
    .sk-header .sk-menu li:last-child a{border-bottom:0;}
    .sk-header .sk-toggle:checked ~ .sk-menu{display:flex;}
  }
</style>
<header class="sk-header">
  <a class="sk-brand" href="#">Бренд</a>
  <input class="sk-toggle" id="sk-nav-toggle" type="checkbox" aria-label="Переключить навигацию">
  <label class="sk-burger" for="sk-nav-toggle" aria-hidden="true">☰</label>
  <ul class="sk-menu">
    <li><a href="#">Главная</a></li>
    <li><a href="#">Документация</a></li>
    <li><a href="#">Компоненты</a></li>
    <li><a href="#">О проекте</a></li>
  </ul>
</header>
</section>

> **Примечание о доступности.** Скрытый чекбокс остаётся в порядке
> табуляции, поэтому пользователи клавиатуры могут открыть меню клавишами
> `Space` или `Enter`. `<label>` имеет `aria-hidden`, потому что сам
> чекбокс является источником доступного имени. Уменьшите окно ниже
> 640&nbsp;px, чтобы увидеть, как переключатель-гамбургер берёт управление.

[Полные заметки о доступности →](/ru/dostupnost/) · [Просмотреть палитры →](/ru/palitry/)

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Компоненты Skeletonic Stylus",
  "description": "Все компоненты, входящие в Skeletonic Stylus v1.1.7.",
  "itemListOrder": "https://schema.org/ItemListOrderAscending",
  "numberOfItems": 7,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Кнопки",
      "url": "https://skeletonic.io/ru/komponenty/#buttons"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Бейджи",
      "url": "https://skeletonic.io/ru/komponenty/#badges"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Уведомления",
      "url": "https://skeletonic.io/ru/komponenty/#alerts"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Карточки",
      "url": "https://skeletonic.io/ru/komponenty/#cards"
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "Поля форм",
      "url": "https://skeletonic.io/ru/komponenty/#form-fields"
    },
    {
      "@type": "ListItem",
      "position": 6,
      "name": "Сетка",
      "url": "https://skeletonic.io/ru/komponenty/#grid"
    },
    {
      "@type": "ListItem",
      "position": 7,
      "name": "Заголовок и навигация-гамбургер",
      "url": "https://skeletonic.io/ru/komponenty/#header"
    }
  ]
}
</script>
