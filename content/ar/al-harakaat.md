---
title: "الحركات"
name: "Skeletonic Stylus"
description: "وحدة الحركات الاختيارية المُشحونة مع Skeletonic Stylus الإصدار 2.0.0 — ارتداد، نبض، تلاشٍ، تكبير، اهتزاز وغيرها، جميعها خلف prefers-reduced-motion."
layout: page
permalink: https://skeletonic.io/ar/al-harakaat/
date: 2026-04-08
author: Sebastien Rousseau
language: ar
theme_color: "hsl(210, 100%, 42%)"
keywords: "حركات css, keyframes, prefers-reduced-motion, ارتداد, نبض, تلاشٍ"
load_animations: true
---

**وحدة الحركات** تُشحن كملف اختياري منفصل حتى تبقى ورقة الأنماط
الأساسية تحت 8&nbsp;كيلوبايت مضغوط.

```html
<link
  rel="stylesheet"
  href="/css/skeletonic-animations.min.css">
```

كل فئة حركة مغلّفة في كتلة
**`@media (prefers-reduced-motion: no-preference)`** في الإصدار 2.0.0،
مما يعني أن المستخدم الذي ضبط "تقليل الحركة" على مستوى نظام التشغيل
لن يرى أي حركة — التخطيط يبقى يعمل، الحركة فقط تُكتم.

<style>
  /*
   * أنماط العرض التوضيحي للصفحة. فئات الحركة المُشحونة في
   * skeletonic-animations.min.css تضبط animation-name فقط، لذا يوفر
   * العرض التوضيحي خصائص animation-duration / iteration-count /
   * fill-mode المفقودة هنا لجعل الإطارات المفتاحية مرئية.
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

<hr class="hr-text" data-content="العروض التوضيحية">

## العروض التوضيحية

اضغط **تشغيل** على أي بطاقة لإعادة تشغيل الحركة على المربع. فئات
الحركة نفسها هي بالضبط ما يُشحن في
`skeletonic-animations.min.css` — فقط `animation-name` تُضبط بواسطة
المكتبة، لذا كتلة `<style>` أعلاه تضيف خصائص `animation-duration` /
`animation-iteration-count` / `animation-fill-mode` المفقودة لجعل
الإطارات المفتاحية مرئية.

<p class="anim-note-rm">
  تقليل الحركة مُفعّل في نظام التشغيل الخاص بك، لذا ستبقى الأهداف
  أدناه ثابتة — هذا هو سلوك إمكانية الوصول في الإصدار 2.0.0 يعمل بشكل صحيح.
</p>

<div class="anim-grid">

  <div class="anim-card">
    <h3>bounce</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="bounce"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'bounce')">تشغيل</button>
  </div>

  <div class="anim-card">
    <h3>pulse</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="pulse"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'pulse')">تشغيل</button>
  </div>

  <div class="anim-card">
    <h3>shake</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="shake"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'shake')">تشغيل</button>
  </div>

  <div class="anim-card">
    <h3>wobble</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="wobble"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'wobble')">تشغيل</button>
  </div>

  <div class="anim-card">
    <h3>flash</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="flash"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'flash')">تشغيل</button>
  </div>

  <div class="anim-card">
    <h3>heartbeat</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="heartbeat"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'heartbeat')">تشغيل</button>
  </div>

  <div class="anim-card">
    <h3>jelly</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="jelly"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'jelly')">تشغيل</button>
  </div>

  <div class="anim-card">
    <h3>rubberBand</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="rubberBand"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'rubberBand')">تشغيل</button>
  </div>

  <div class="anim-card">
    <h3>fadeIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeIn')">تشغيل</button>
  </div>

  <div class="anim-card">
    <h3>fadeInDown</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeInDown"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeInDown')">تشغيل</button>
  </div>

  <div class="anim-card">
    <h3>fadeInUp</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeInUp"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeInUp')">تشغيل</button>
  </div>

  <div class="anim-card">
    <h3>popIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="popIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'popIn')">تشغيل</button>
  </div>

  <div class="anim-card">
    <h3>rollIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="rollIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'rollIn')">تشغيل</button>
  </div>

  <div class="anim-card">
    <h3>flipInHorizontal</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="flipInHorizontal"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'flipInHorizontal')">تشغيل</button>
  </div>

  <div class="anim-card">
    <h3>zoomIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="zoomIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'zoomIn')">تشغيل</button>
  </div>

  <div class="anim-card">
    <h3>vanishIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="vanishIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'vanishIn')">تشغيل</button>
  </div>

</div>

<script>
  // فئات الحركة المُشحونة في الإصدار 2.0.0 تضبط animation-name في
  // المحدّد نفسه. لإعادة تشغيل الإطار المفتاحي يجب إزالة الفئة،
  // وإجبار إعادة حساب التخطيط، ثم إضافة الفئة مجددًا.
  function replayAnim(btn, name){
    var target = btn.closest('.anim-card').querySelector('.anim-target');
    if (!target) return;
    target.className = 'anim-target';
    void target.offsetWidth;
    target.classList.add(name);
  }
  // تشغيل تلقائي عند أول عرض حتى يرى الزائر شيئًا يحدث
  // بدون النقر — لكن فقط إذا كانت الحركة مسموحة.
  if (window.matchMedia && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    document.addEventListener('DOMContentLoaded', function(){
      document.querySelectorAll('.anim-target').forEach(function(t){
        var n = t.getAttribute('data-anim');
        if (n) setTimeout(function(){ t.classList.add(n); }, 200);
      });
    });
  }
</script>

<hr class="hr-text" data-content="قائمة الفئات">

## مرجع الفئات

| الفئة | ما تفعله |
|---|---|
| `.bounce` | خطوة زنبركية عمودية |
| `.pulse` | نبض مقياس ناعم |
| `.shake` | اهتزاز أفقي |
| `.wobble` | ميل واستعادة |
| `.flash` | وميض شفافية من خطوتين |
| `.heartbeat` | نبض مقياس مزدوج |
| `.jelly` | ضغط وتمدد |
| `.rubberBand` | تمدد مرن |
| `.fadeIn` / `.fadeOut` | انتقال الشفافية |
| `.fadeInDown` / `.fadeInUp` / `.fadeInLeft` / `.fadeInRight` | تلاشٍ اتجاهي |
| `.zoomIn` / `.zoomOut` | تكبير للدخول / للخروج من العرض |
| `.popIn` / `.popOut` | مقياس زنبركي + تلاشٍ |
| `.rollIn` / `.rollOut` | إزاحة + دوران |
| `.flipInHorizontal` / `.flipInVertical` | قلب ثلاثي الأبعاد |
| `.vanishIn` / `.vanishOut` | ظهور بنمط Material |
| `.chameleonbackground` / `.chameleontext` | دورة تدرّج اللون |

## تنبيه — تحفّظ معروف في الإصدار 2.0.0

فئات الحركة في الإصدار 2.0.0 تضبط `animation-name` فقط. لتشغيلها
يجب حاليًا توفير `animation-duration` و`animation-iteration-count`
و`animation-fill-mode` و`animation-timing-function` بنفسك — تمامًا
كما توضّح كتلة `<style>` في أعلى هذه الصفحة. إصدار مستقبلي سيضمّن
إعدادًا أساسيًا افتراضيًا معقولًا حتى يعمل `<div class="bounce">`
مباشرة.

[انظر ملاحظات إمكانية الوصول →](/ar/imkaniyyat-al-wusul/)
