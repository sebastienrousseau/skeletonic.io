---
title: "אנימציות"
name: "Skeletonic Stylus"
description: "מודול אנימציות אופציונלי הנשלח עם Skeletonic Stylus v2.0.0 — קפיצה, פעימה, דעיכה, זום, רעידה ועוד, הכול מאחורי prefers-reduced-motion."
layout: page
permalink: https://skeletonic.io/he/animatsyot/
date: 2026-04-08
author: Sebastien Rousseau
language: he
theme_color: "hsl(210, 100%, 42%)"
keywords: "אנימציות css, keyframes, prefers-reduced-motion, bounce, pulse, fade"
load_animations: true
---

**מודול האנימציות** נשלח כקובץ אופציונלי נפרד כך שגיליון הסגנונות
הליבתי נשאר מתחת ל-8&nbsp;KB בדחיסת gzip.

```html
<link
  rel="stylesheet"
  href="/css/skeletonic-animations.min.css">
```

כל מחלקת אנימציה עטופה בבלוק
**`@media (prefers-reduced-motion: no-preference)`** ב-v2.0.0, מה
שאומר שמשתמש שהגדיר "הפחתת תנועה" ברמת מערכת ההפעלה לא יראה
אנימציה כלל — הפריסה עדיין עובדת, רק התנועה מדוכאת.

<style>
  /*
   * סגנונות הדגמה מקומיים לדף. מחלקות האנימציה הנשלחות ב-
   * skeletonic-animations.min.css מגדירות animation-name בלבד, אז
   * ההדגמה מספקת את animation-duration / animation-iteration-count /
   * animation-fill-mode החסרים כאן כדי שה-keyframes יהיו גלויים.
   * כל יעד הדגמה הוא דיסק צבעוני אחיד כדי שהתנועה תהיה ברורה
   * על רקע הדף.
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

<hr class="hr-text" data-content="הדגמות">

## הדגמות

לחצו על **הפעל** בכל כרטיס כדי להפעיל מחדש את האנימציה על הריבוע.
מחלקות האנימציה עצמן הן בדיוק מה שנשלח ב-
`skeletonic-animations.min.css` — רק `animation-name` מוגדר על ידי
הספרייה, אז בלוק ה-`<style>` למעלה מוסיף את מאפייני
`animation-duration` / `animation-iteration-count` / `animation-fill-mode`
החסרים כדי שה-keyframes יהיו גלויים.

<p class="anim-note-rm">
  הפחתת תנועה מופעלת במערכת ההפעלה שלכם, אז היעדים למטה יישארו
  ללא תנועה — זו התנהגות הנגישות של v2.0.0 שעובדת כראוי.
</p>

<div class="anim-grid">

  <div class="anim-card">
    <h3>bounce</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="bounce"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'bounce')">הפעל</button>
  </div>

  <div class="anim-card">
    <h3>pulse</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="pulse"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'pulse')">הפעל</button>
  </div>

  <div class="anim-card">
    <h3>shake</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="shake"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'shake')">הפעל</button>
  </div>

  <div class="anim-card">
    <h3>wobble</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="wobble"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'wobble')">הפעל</button>
  </div>

  <div class="anim-card">
    <h3>flash</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="flash"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'flash')">הפעל</button>
  </div>

  <div class="anim-card">
    <h3>heartbeat</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="heartbeat"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'heartbeat')">הפעל</button>
  </div>

  <div class="anim-card">
    <h3>jelly</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="jelly"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'jelly')">הפעל</button>
  </div>

  <div class="anim-card">
    <h3>rubberBand</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="rubberBand"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'rubberBand')">הפעל</button>
  </div>

  <div class="anim-card">
    <h3>fadeIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeIn')">הפעל</button>
  </div>

  <div class="anim-card">
    <h3>fadeInDown</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeInDown"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeInDown')">הפעל</button>
  </div>

  <div class="anim-card">
    <h3>fadeInUp</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeInUp"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeInUp')">הפעל</button>
  </div>

  <div class="anim-card">
    <h3>popIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="popIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'popIn')">הפעל</button>
  </div>

  <div class="anim-card">
    <h3>rollIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="rollIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'rollIn')">הפעל</button>
  </div>

  <div class="anim-card">
    <h3>flipInHorizontal</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="flipInHorizontal"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'flipInHorizontal')">הפעל</button>
  </div>

  <div class="anim-card">
    <h3>zoomIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="zoomIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'zoomIn')">הפעל</button>
  </div>

  <div class="anim-card">
    <h3>vanishIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="vanishIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'vanishIn')">הפעל</button>
  </div>

</div>

<script>
  // מחלקות האנימציה הנשלחות ב-v2.0.0 מגדירות animation-name בבורר
  // עצמו. כדי להפעיל מחדש את ה-keyframe צריך להסיר את המחלקה,
  // לאלץ flush של הפריסה, ואז להוסיף את המחלקה בחזרה.
  function replayAnim(btn, name){
    var target = btn.closest('.anim-card').querySelector('.anim-target');
    if (!target) return;
    target.className = 'anim-target';
    void target.offsetWidth;
    target.classList.add(name);
  }
  // הפעלה אוטומטית פעם אחת בציור הראשון כדי שהמבקר יראה משהו
  // קורה בלי ללחוץ — אבל רק אם תנועה מותרת.
  if (window.matchMedia && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    document.addEventListener('DOMContentLoaded', function(){
      document.querySelectorAll('.anim-target').forEach(function(t){
        var n = t.getAttribute('data-anim');
        if (n) setTimeout(function(){ t.classList.add(n); }, 200);
      });
    });
  }
</script>

<hr class="hr-text" data-content="רשימת מחלקות">

## עיון במחלקות

| מחלקה | מה היא עושה |
|---|---|
| `.bounce` | קפיצה אנכית קפיצית |
| `.pulse` | פעימת שינוי גודל עדינה |
| `.shake` | רעידה אופקית |
| `.wobble` | הטייה והתאוששות |
| `.flash` | הבהוב שקיפות דו-שלבי |
| `.heartbeat` | פעימת לב בשינוי גודל כפול |
| `.jelly` | מעיכה ומתיחה |
| `.rubberBand` | מתיחה אלסטית |
| `.fadeIn` / `.fadeOut` | מעבר שקיפות |
| `.fadeInDown` / `.fadeInUp` / `.fadeInLeft` / `.fadeInRight` | דעיכה כיוונית |
| `.zoomIn` / `.zoomOut` | שינוי גודל לתוך / מתוך תצוגה |
| `.popIn` / `.popOut` | שינוי גודל קפיצי + דעיכה |
| `.rollIn` / `.rollOut` | הזזה + סיבוב |
| `.flipInHorizontal` / `.flipInVertical` | היפוך תלת-ממדי |
| `.vanishIn` / `.vanishOut` | הופעה בסגנון Material |
| `.chameleonbackground` / `.chameleontext` | מחזור גוון |

## שימו לב — סייג ידוע של v2.0.0

מחלקות האנימציה ב-v2.0.0 מגדירות `animation-name` בלבד. כדי להפעיל
אותן עליכם כרגע לספק בעצמכם `animation-duration`,
`animation-iteration-count`, `animation-fill-mode`
ו-`animation-timing-function` — בדיוק כפי שבלוק ה-`<style>` בראש
דף זה מדגים. שחרור עתידי ישלב הגדרת בסיס ברירת מחדל סבירה כך
ש-`<div class="bounce">` יעבוד ישירות מהקופסה.

[ראו הערות נגישות &larr;](/he/negishut/)
