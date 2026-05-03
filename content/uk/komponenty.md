---
title: "Компоненти"
name: "Skeletonic Stylus"
description: "Живі HTML-приклади кожного компонента Skeletonic Stylus — згруповані, з якорями та відрендерені тією самою таблицею стилів, що демонструється."
layout: page
language: uk
permalink: https://skeletonic.io/uk/komponenty/
date: 2026-04-08
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "компоненти skeletonic, кнопки, картки, форми, сповіщення, значки, заголовок, навігація, css-only гамбургер"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

Кожен приклад нижче **відрендерений тією самою таблицею стилів, що
демонструється**. Без препроцесора. Без JavaScript. Без додаткових
залежностей. Скопіюйте будь-який фрагмент у свіжий HTML-файл — і він
працюватиме.

<nav aria-label="На цій сторінці">
<p><strong>На цій сторінці</strong></p>
<ul>
<li><strong>Елементи введення</strong> — <a href="#buttons">Кнопки</a> · <a href="#badges">Значки</a></li>
<li><strong>Зворотний зв'язок</strong> — <a href="#alerts">Сповіщення</a></li>
<li><strong>Поверхні</strong> — <a href="#cards">Картки</a></li>
<li><strong>Форми</strong> — <a href="#form-fields">Поля форми</a></li>
<li><strong>Макет</strong> — <a href="#grid">Сітка</a> · <a href="#header">Заголовок та гамбургер-навігація</a></li>
</ul>
</nav>

<hr class="hr-text" data-content="Елементи введення">

<h2 id="inputs">Елементи введення</h2>

Інтерактивні елементи, на які відвідувач натискає, торкається або
фокусується для керування сторінкою.

<h3 id="buttons">Кнопки</h3>

Семантичний, тематизований тригер дії. Суцільний та контурний варіанти
постачаються в шести фірмових кольорах кожний.

```html
<a href="#" class="button primary">Primary</a>
<a href="#" class="button secondary">Secondary</a>
<a href="#" class="button tertiary">Tertiary</a>
```

<section aria-labelledby="buttons">
<p>
  <a href="#" class="button primary">Основна</a>
  <a href="#" class="button secondary">Вторинна</a>
  <a href="#" class="button tertiary">Третинна</a>
</p>
</section>

Контурні варіанти:

```html
<a href="#" class="button primary-outline">Outline</a>
<a href="#" class="button secondary-outline">Outline</a>
```

<p>
  <a href="#" class="button primary-outline">Контур</a>
  <a href="#" class="button secondary-outline">Контур</a>
</p>

> **Примітка щодо доступності.** Кожен варіант `.button` постачається з
> кільцем `:focus-visible` та **мінімальною зоною дотику 24×24&nbsp;пкс**
> (WCAG&nbsp;2.2 SC&nbsp;2.5.8). Використовуйте `<button type="button">` для
> дій на сторінці, а `<a href>` — лише для навігації.

<h3 id="badges">Значки</h3>

Компактна мітка для статусу, лічильника або категорії. Розмір тексту
фіксований, тому значки вирівнюються з навколишнім текстом.

```html
<span class="badge">Default</span>
<span class="badge primary">Primary</span>
<span class="badge success">Success</span>
<span class="badge warning">Warning</span>
<span class="badge danger">Danger</span>
```

<section aria-labelledby="badges">
<p>
  <span class="badge">За замовчуванням</span>
  <span class="badge primary">Основний</span>
  <span class="badge success">Успіх</span>
  <span class="badge warning">Попередження</span>
  <span class="badge danger">Небезпека</span>
</p>
</section>

> **Примітка щодо доступності.** Значки за замовчуванням є декоративними.
> Коли значок несе єдиний сигнал (наприклад, лічильник непрочитаних),
> оберніть його у хелпер для прихованого тексту:
> `<span class="visually-hidden">3 непрочитані повідомлення</span>`.

<hr class="hr-text" data-content="Зворотний зв'язок">

<h2 id="feedback">Зворотний зв'язок</h2>

Поверхні, що повідомляють відвідувачу про те, що щось сталося — або
збирається статися.

<h3 id="alerts">Сповіщення</h3>

Повідомлення про статус із семантичним призначенням. **У v2.0.0 кожен
варіант явно виділено в простір імен** під
`.alert-{primary,secondary,info,success,warning,error}`, тож клас
варіанту не може конфліктувати з класами стану в інших місцях сторінки.

```html
<div class="alert alert-primary" role="alert">
  <strong>Heads up.</strong> This is a primary alert.
</div>
<div class="alert alert-success" role="status">
  <strong>Saved.</strong> Your changes are persisted.
</div>
<div class="alert alert-warning" role="alert">
  <strong>Careful.</strong> This action affects shared state.
</div>
<div class="alert alert-error" role="alert">
  <strong>Error.</strong> Could not save the form.
</div>
```

<section aria-labelledby="alerts">
<div class="alert alert-primary" role="alert">
<strong>Зверніть увагу.</strong> Це основне сповіщення.
</div>

<div class="alert alert-success" role="status">
<strong>Збережено.</strong> Ваші зміни застосовано.
</div>

<div class="alert alert-warning" role="alert">
<strong>Обережно.</strong> Ця дія впливає на спільний стан.
</div>

<div class="alert alert-error" role="alert">
<strong>Помилка.</strong> Не вдалося зберегти форму.
</div>
</section>

> **Примітка щодо доступності.** Використовуйте `role="alert"` для
> повідомлень, що потребують негайної уваги (помилки, попередження),
> та `role="status"` для несрочних підтверджень. Обидві ролі передають
> повідомлення допоміжним технологіям у момент його появи.

<hr class="hr-text" data-content="Поверхні">

<h2 id="surface">Поверхні</h2>

Контейнери, що обрамлюють та групують пов'язаний вміст.

<h3 id="cards">Картки</h3>

Контейнер з рамкою та відступами для єдиного логічного блоку. Поєднуйте
із сіткою `flex-N` для адаптивних стін із карток.

```html
<section class="row">
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Lightweight</h3>
      <p>38.8 KB minified, 7.7 KB gzipped.</p>
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
      <h3 class="card-title">Легкість</h3>
      <p>45,7&nbsp;КБ мініфіковано, 8,3&nbsp;КБ gzip.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Доступність</h3>
      <p>Відповідність WCAG&nbsp;2.2 із коробки.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Модульність</h3>
      <p>Каскадні шари для легкого перевизначення.</p>
    </div>
  </article>
</section>

> **Примітка щодо доступності.** Оберніть кожну картку в семантичний
> елемент (`<article>`, `<section>`) і почніть її вміст із заголовка
> (`<h3>`). Користувачі скрінрідерів зможуть переміщуватися по списку
> карток як по повноцінних навігаційних регіонах.

<hr class="hr-text" data-content="Форми">

<h2 id="forms">Форми</h2>

Поля введення, мітки та групування для збору даних користувача.

<h3 id="form-fields">Поля форми</h3>

Мітки, текстові поля, textarea, fieldset і legend — все масштабовано
однаково з рештою дизайн-системи.

```html
<form>
  <label for="name">Name</label>
  <input id="name" type="text" required>

  <label for="email">Email</label>
  <input id="email" type="email" required class="input-primary">

  <label for="msg">Message</label>
  <textarea id="msg" rows="4"></textarea>

  <button type="submit" class="button primary">Send</button>
</form>
```

<section aria-labelledby="form-fields">
<div role="group" aria-label="Form fields demo">
  <label for="demo-name">Ім'я</label>
  <input id="demo-name" type="text">

  <label for="demo-email">Електронна пошта</label>
  <input id="demo-email" type="email" class="input-primary">

  <label for="demo-msg">Повідомлення</label>
  <textarea id="demo-msg" rows="4"></textarea>

  <p><button type="button" class="button primary">Надіслати (демо)</button></p>
</div>
</section>

> **Примітка щодо доступності.** Кожне поле введення повинно мати
> програмно пов'язаний `<label for="…">`. Групуйте пов'язані елементи
> управління всередині `<fieldset>` з `<legend>`. Позначайте обов'язкові
> поля атрибутом `required` (та видимою зірочкою в тексті мітки).

<hr class="hr-text" data-content="Макет">

<h2 id="layout">Макет</h2>

Структурні примітиви — сітка, контейнер, заголовок — що формують
каркас всієї сторінки.

<h3 id="grid">Сітка</h3>

Адаптивна сітка `flex-N` (від 1 до 12 колонок) на основі flexbox.
Батьківський елемент `.row` автоматично додає відступи та перенос.

```html
<div class="row">
  <div class="flex-6">Half</div>
  <div class="flex-6">Half</div>
</div>
<div class="row">
  <div class="flex-4">Third</div>
  <div class="flex-4">Third</div>
  <div class="flex-4">Third</div>
</div>
```

<section aria-labelledby="grid">
<div style="display:flex;flex-wrap:wrap;gap:.5rem;">
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">Половина</div>
  <div style="flex:1 1 0;padding:.75rem;background:#e4e4e7;border-radius:.25rem;text-align:center;">Половина</div>
</div>

<div style="display:flex;flex-wrap:wrap;gap:.5rem;margin-top:.5rem;">
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">Третина</div>
  <div style="flex:1 1 0;padding:.75rem;background:#e4e4e7;border-radius:.25rem;text-align:center;">Третина</div>
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">Третина</div>
</div>
</section>

> **Примітка щодо доступності.** Візуальний порядок повинен відповідати
> порядку DOM. Уникайте перегрупування рядків за допомогою
> `flex-direction: row-reverse` або `order:` — скрінрідери та користувачі
> клавіатури слідують за вихідним кодом, а не за відображенням.

<h3 id="header">Заголовок та гамбургер-навігація</h3>

Повноцінний заголовок на чистому CSS з адаптивним гамбургер-перемикачем.
**Нуль JavaScript.** Скопіюйте наведений фрагмент у свіжу HTML-сторінку,
що вже завантажує `skeletonic.min.css`, — і меню згортається,
розгортається та утримує фокус коректно саме по собі.

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
  <a class="sk-brand" href="#">Brand</a>
  <input class="sk-toggle" id="sk-nav-toggle" type="checkbox" aria-label="Toggle navigation">
  <label class="sk-burger" for="sk-nav-toggle" aria-hidden="true">☰</label>
  <ul class="sk-menu">
    <li><a href="#">Home</a></li>
    <li><a href="#">Docs</a></li>
    <li><a href="#">Components</a></li>
    <li><a href="#">About</a></li>
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
  <input class="sk-toggle" id="sk-nav-toggle" type="checkbox" aria-label="Перемкнути навігацію">
  <label class="sk-burger" for="sk-nav-toggle" aria-hidden="true">☰</label>
  <ul class="sk-menu">
    <li><a href="#">Головна</a></li>
    <li><a href="#">Документація</a></li>
    <li><a href="#">Компоненти</a></li>
    <li><a href="#">Про нас</a></li>
  </ul>
</header>
</section>

> **Примітка щодо доступності.** Прихований чекбокс залишається в
> порядку табуляції, тож користувачі клавіатури можуть відкрити меню
> клавішами `Space` або `Enter`. Елемент `<label>` має `aria-hidden`,
> оскільки сам чекбокс є джерелом доступного імені. Зменште ширину
> вікна нижче 640&nbsp;пкс, щоб побачити гамбургер-перемикач у дії.

[Дивіться повні примітки з a11y →](/uk/dostupnist/) · [Переглянути палітри →](/uk/palitry/)

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Компоненти Skeletonic Stylus",
  "description": "Усі компоненти, що постачаються зі Skeletonic Stylus v2.0.0.",
  "itemListOrder": "https://schema.org/ItemListOrderAscending",
  "numberOfItems": 7,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Кнопки",
      "url": "https://skeletonic.io/uk/komponenty/#buttons"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Значки",
      "url": "https://skeletonic.io/uk/komponenty/#badges"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Сповіщення",
      "url": "https://skeletonic.io/uk/komponenty/#alerts"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Картки",
      "url": "https://skeletonic.io/uk/komponenty/#cards"
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "Поля форми",
      "url": "https://skeletonic.io/uk/komponenty/#form-fields"
    },
    {
      "@type": "ListItem",
      "position": 6,
      "name": "Сітка",
      "url": "https://skeletonic.io/uk/komponenty/#grid"
    },
    {
      "@type": "ListItem",
      "position": 7,
      "name": "Заголовок та гамбургер-навігація",
      "url": "https://skeletonic.io/uk/komponenty/#header"
    }
  ]
}
</script>
