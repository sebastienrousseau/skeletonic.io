---
title: "Анімації"
name: "Skeletonic Stylus"
description: "Опціональний модуль анімацій Skeletonic Stylus v2.0.0 — bounce, pulse, fade, zoom, shake та інші, всі за перевіркою prefers-reduced-motion."
layout: page
language: uk
permalink: https://skeletonic.io/uk/animatsii/
date: 2026-04-08
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "css анімації, keyframes, prefers-reduced-motion, bounce, pulse, fade"
load_animations: true
---

**Модуль анімацій** постачається як окремий опціональний файл, щоб
основна таблиця стилів залишалася менше 8&nbsp;КБ gzip.

```html
<link
  rel="stylesheet"
  href="/css/skeletonic-animations.min.css">
```

Кожен клас анімації загорнуто в блок
**`@media (prefers-reduced-motion: no-preference)`** у v2.0.0, що
означає: якщо користувач увімкнув «зменшити рух» на рівні ОС, він не
побачить жодної анімації — макет працюватиме, просто рух буде
придушений.

<style>
  /*
   * Локальні демо-стилі сторінки. Класи анімацій із
   * skeletonic-animations.min.css встановлюють лише animation-name,
   * тому демо додає відсутні animation-duration / animation-iteration-count
   * / animation-fill-mode для видимості ключових кадрів.
   */
  .anim-grid{
    display:grid;
    grid-template-columns:repeat(auto-fill,minmax(160px,1fr));
    gap:1.25rem;
    margin:1.5rem 0;
  }
  .anim-card{
    text-align:center;
  }
  .anim-card h3{
    margin:0 0 .75rem;
    font-size:1rem;
    font-weight:600;
    letter-spacing:.01em;
    color:var(--c-heading,#0a0a0a);
  }
  .anim-stage{
    display:flex;
    align-items:center;
    justify-content:center;
    height:96px;
    margin-bottom:.75rem;
  }
  .anim-target{
    display:inline-block;
    width:64px;
    height:64px;
    border-radius:50%;
    background:hsl(210,100%,42%);
    animation-duration:1.2s;
    animation-iteration-count:1;
    animation-fill-mode:both;
    animation-timing-function:ease-in-out;
  }
  .anim-card button{
    margin-top:.25rem;
  }
  @media (prefers-reduced-motion:reduce){
    .anim-target{animation:none !important}
    .anim-note-rm{display:block;color:var(--c-secondary,#52525b);font-style:italic;margin-top:1rem}
  }
  .anim-note-rm{display:none}
</style>

<hr class="hr-text" data-content="Демо">

## Демонстрації

Натисніть **Відтворити** на будь-якій картці, щоб повторити анімацію
на фігурі. Класи анімацій — це саме те, що постачається в
`skeletonic-animations.min.css` — лише `animation-name` задається
бібліотекою, тому блок `<style>` вище додає відсутні властивості
`animation-duration` / `animation-iteration-count` /
`animation-fill-mode` для видимості ключових кадрів.

<p class="anim-note-rm">
  На вашій ОС увімкнено режим зменшення руху, тому елементи нижче
  залишатимуться нерухомими — саме так працює доступність у v2.0.0.
</p>

<div class="anim-grid">

  <div class="anim-card">
    <h3>bounce</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="bounce"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'bounce')">Відтворити</button>
  </div>

  <div class="anim-card">
    <h3>pulse</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="pulse"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'pulse')">Відтворити</button>
  </div>

  <div class="anim-card">
    <h3>shake</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="shake"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'shake')">Відтворити</button>
  </div>

  <div class="anim-card">
    <h3>wobble</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="wobble"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'wobble')">Відтворити</button>
  </div>

  <div class="anim-card">
    <h3>flash</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="flash"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'flash')">Відтворити</button>
  </div>

  <div class="anim-card">
    <h3>heartbeat</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="heartbeat"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'heartbeat')">Відтворити</button>
  </div>

  <div class="anim-card">
    <h3>jelly</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="jelly"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'jelly')">Відтворити</button>
  </div>

  <div class="anim-card">
    <h3>rubberBand</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="rubberBand"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'rubberBand')">Відтворити</button>
  </div>

  <div class="anim-card">
    <h3>fadeIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeIn')">Відтворити</button>
  </div>

  <div class="anim-card">
    <h3>fadeInDown</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeInDown"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeInDown')">Відтворити</button>
  </div>

  <div class="anim-card">
    <h3>fadeInUp</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeInUp"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeInUp')">Відтворити</button>
  </div>

  <div class="anim-card">
    <h3>popIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="popIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'popIn')">Відтворити</button>
  </div>

  <div class="anim-card">
    <h3>rollIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="rollIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'rollIn')">Відтворити</button>
  </div>

  <div class="anim-card">
    <h3>flipInHorizontal</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="flipInHorizontal"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'flipInHorizontal')">Відтворити</button>
  </div>

  <div class="anim-card">
    <h3>zoomIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="zoomIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'zoomIn')">Відтворити</button>
  </div>

  <div class="anim-card">
    <h3>vanishIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="vanishIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'vanishIn')">Відтворити</button>
  </div>

</div>

<script>
  // Класи анімацій v2.0.0 встановлюють animation-name у самому
  // селекторі. Для повторного відтворення ключових кадрів потрібно
  // видалити клас, примусово оновити макет, а потім додати клас знову.
  function replayAnim(btn, name){
    var target = btn.closest('.anim-card').querySelector('.anim-target');
    if (!target) return;
    target.className = 'anim-target';
    void target.offsetWidth;
    target.classList.add(name);
  }
  // Автоматичне відтворення при першому відображенні, щоб відвідувач
  // побачив щось без кліку — але лише якщо рух дозволено.
  if (window.matchMedia && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    document.addEventListener('DOMContentLoaded', function(){
      document.querySelectorAll('.anim-target').forEach(function(t){
        var n = t.getAttribute('data-anim');
        if (n) setTimeout(function(){ t.classList.add(n); }, 200);
      });
    });
  }
</script>

<hr class="hr-text" data-content="Список класів">

## Довідка з класів

| Клас | Що робить |
|---|---|
| `.bounce` | Вертикальний пружинний крок |
| `.pulse` | М'яке пульсуюче масштабування |
| `.shake` | Горизонтальне тремтіння |
| `.wobble` | Нахил і відновлення |
| `.flash` | Двоетапне миготіння прозорості |
| `.heartbeat` | Подвійний удар масштабування |
| `.jelly` | Стиснення та розтягнення |
| `.rubberBand` | Еластичне розтягнення |
| `.fadeIn` / `.fadeOut` | Перехід прозорості |
| `.fadeInDown` / `.fadeInUp` / `.fadeInLeft` / `.fadeInRight` | Направлене згасання |
| `.zoomIn` / `.zoomOut` | Масштабування в поле зору / з поля зору |
| `.popIn` / `.popOut` | Пружинне масштабування + згасання |
| `.rollIn` / `.rollOut` | Зсув + обертання |
| `.flipInHorizontal` / `.flipInVertical` | 3D-переворот |
| `.vanishIn` / `.vanishOut` | Поява у стилі Material |
| `.chameleonbackground` / `.chameleontext` | Циклічна зміна відтінку |

## Увага — відоме обмеження v2.0.0

Класи анімацій у v2.0.0 встановлюють лише `animation-name`. Для їх
відтворення наразі потрібно самостійно вказати `animation-duration`,
`animation-iteration-count`, `animation-fill-mode` та
`animation-timing-function` — саме так, як демонструє блок `<style>`
на початку цієї сторінки. У майбутньому релізі буде додано розумні
базові налаштування, щоб `<div class="bounce">` працював із коробки.

[Переглянути примітки щодо доступності →](/uk/dostupnist/)
