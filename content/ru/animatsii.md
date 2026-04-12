---
title: "Анимации"
name: "Skeletonic Stylus"
description: "Опциональный модуль анимаций, поставляемый с Skeletonic Stylus v1.1.7 — bounce, pulse, fade, zoom, shake и другие, все под защитой prefers-reduced-motion."
layout: page
permalink: https://skeletonic.io/ru/animatsii/
date: 2026-04-08
author: Sebastien Rousseau
language: ru
theme_color: "hsl(210, 100%, 42%)"
keywords: "css анимации, keyframes, prefers-reduced-motion, bounce, pulse, fade"
load_animations: true
---

**Модуль анимаций** поставляется как отдельный опциональный файл, чтобы основной файл стилей оставался менее 8&nbsp;КБ gzip.

```html
<link
  rel="stylesheet"
  href="/css/skeletonic-animations.min.css">
```

Каждый класс анимации в v1.1.7 обёрнут в блок
**`@media (prefers-reduced-motion: no-preference)`**, что означает: если пользователь включил «уменьшить движение» на уровне ОС, анимация не будет воспроизводиться вовсе — макет продолжит работать, движение просто подавляется.

<style>
  /*
   * Локальные демо-стили для страницы. Классы анимаций из
   * skeletonic-animations.min.css задают только animation-name, поэтому
   * демо добавляет недостающие animation-duration / animation-iteration-count
   * / animation-fill-mode, чтобы ключевые кадры были видны. Каждый
   * демо-объект — цветной круг, чтобы движение было заметно на фоне страницы.
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

<hr class="hr-text" data-content="Демонстрации">

## Демонстрации

Нажмите **Воспроизвести** на любой карточке, чтобы повторить анимацию на фигуре. Классы анимаций полностью соответствуют тем, что поставляются в
`skeletonic-animations.min.css` — только `animation-name` задан библиотекой, поэтому блок `<style>` выше добавляет недостающие свойства `animation-duration` / `animation-iteration-count` / `animation-fill-mode`, чтобы ключевые кадры были видимы.

<p class="anim-note-rm">
  На вашей ОС включён режим уменьшенного движения, поэтому объекты ниже
  останутся неподвижными — так работает поведение доступности v1.1.7.
</p>

<div class="anim-grid">

  <div class="anim-card">
    <h3>bounce</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="bounce"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'bounce')">Воспроизвести</button>
  </div>

  <div class="anim-card">
    <h3>pulse</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="pulse"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'pulse')">Воспроизвести</button>
  </div>

  <div class="anim-card">
    <h3>shake</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="shake"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'shake')">Воспроизвести</button>
  </div>

  <div class="anim-card">
    <h3>wobble</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="wobble"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'wobble')">Воспроизвести</button>
  </div>

  <div class="anim-card">
    <h3>flash</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="flash"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'flash')">Воспроизвести</button>
  </div>

  <div class="anim-card">
    <h3>heartbeat</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="heartbeat"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'heartbeat')">Воспроизвести</button>
  </div>

  <div class="anim-card">
    <h3>jelly</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="jelly"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'jelly')">Воспроизвести</button>
  </div>

  <div class="anim-card">
    <h3>rubberBand</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="rubberBand"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'rubberBand')">Воспроизвести</button>
  </div>

  <div class="anim-card">
    <h3>fadeIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeIn')">Воспроизвести</button>
  </div>

  <div class="anim-card">
    <h3>fadeInDown</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeInDown"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeInDown')">Воспроизвести</button>
  </div>

  <div class="anim-card">
    <h3>fadeInUp</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeInUp"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeInUp')">Воспроизвести</button>
  </div>

  <div class="anim-card">
    <h3>popIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="popIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'popIn')">Воспроизвести</button>
  </div>

  <div class="anim-card">
    <h3>rollIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="rollIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'rollIn')">Воспроизвести</button>
  </div>

  <div class="anim-card">
    <h3>flipInHorizontal</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="flipInHorizontal"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'flipInHorizontal')">Воспроизвести</button>
  </div>

  <div class="anim-card">
    <h3>zoomIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="zoomIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'zoomIn')">Воспроизвести</button>
  </div>

  <div class="anim-card">
    <h3>vanishIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="vanishIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'vanishIn')">Воспроизвести</button>
  </div>

</div>

<script>
  // Классы анимаций v1.1.7 задают animation-name в самом селекторе.
  // Для повторного воспроизведения нужно удалить класс, принудительно
  // выполнить перерисовку, а затем добавить класс снова.
  function replayAnim(btn, name){
    var target = btn.closest('.anim-card').querySelector('.anim-target');
    if (!target) return;
    target.className = 'anim-target';
    void target.offsetWidth;
    target.classList.add(name);
  }
  // Автовоспроизведение при первой отрисовке, чтобы посетитель увидел
  // результат без нажатия — но только если движение разрешено.
  if (window.matchMedia && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    document.addEventListener('DOMContentLoaded', function(){
      document.querySelectorAll('.anim-target').forEach(function(t){
        var n = t.getAttribute('data-anim');
        if (n) setTimeout(function(){ t.classList.add(n); }, 200);
      });
    });
  }
</script>

<hr class="hr-text" data-content="Список классов">

## Справочник классов

| Класс | Что делает |
|---|---|
| `.bounce` | Вертикальный пружинящий шаг |
| `.pulse` | Мягкая пульсация масштабом |
| `.shake` | Горизонтальная тряска |
| `.wobble` | Наклон с возвратом |
| `.flash` | Двухступенчатое мигание прозрачностью |
| `.heartbeat` | Двойной удар масштабом |
| `.jelly` | Сжатие и растяжение |
| `.rubberBand` | Эластичное растяжение |
| `.fadeIn` / `.fadeOut` | Переход прозрачности |
| `.fadeInDown` / `.fadeInUp` / `.fadeInLeft` / `.fadeInRight` | Направленное появление |
| `.zoomIn` / `.zoomOut` | Масштабирование в/из вида |
| `.popIn` / `.popOut` | Пружинящее масштабирование + появление |
| `.rollIn` / `.rollOut` | Сдвиг + вращение |
| `.flipInHorizontal` / `.flipInVertical` | 3D-переворот |
| `.vanishIn` / `.vanishOut` | Появление в стиле Material |
| `.chameleonbackground` / `.chameleontext` | Циклическая смена оттенка |

## Известная особенность v1.1.7

Классы анимаций в v1.1.7 задают только `animation-name`. Для их воспроизведения вам потребуется самостоятельно указать `animation-duration`, `animation-iteration-count`, `animation-fill-mode` и `animation-timing-function` — как это демонстрирует блок `<style>` в начале этой страницы. В будущих релизах базовые настройки будут встроены, чтобы `<div class="bounce">` работал сразу из коробки.

[Заметки о доступности →](/ru/dostupnost/)
