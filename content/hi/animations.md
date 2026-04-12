---
title: "एनिमेशन"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus v1.1.7 के साथ शिप वैकल्पिक एनिमेशन मॉड्यूल — bounce, pulse, fade, zoom, shake, और अन्य, सब prefers-reduced-motion के पीछे।"
layout: page
permalink: https://skeletonic.io/hi/animations/
date: 2026-04-08
author: Sebastien Rousseau
language: hi
theme_color: "hsl(210, 100%, 42%)"
keywords: "css एनिमेशन, keyframes, prefers-reduced-motion, bounce, pulse, fade"
load_animations: true
---

**एनिमेशन मॉड्यूल** एक अलग वैकल्पिक फ़ाइल के रूप में शिप होता है
ताकि कोर स्टाइलशीट 8&nbsp;KB gzipped से नीचे रहे।

```html
<link
  rel="stylesheet"
  href="/css/skeletonic-animations.min.css">
```

v1.1.7 में हर एनिमेशन क्लास
**`@media (prefers-reduced-motion: no-preference)`** ब्लॉक में लपेटा
हुआ है, जिसका मतलब है कि जिस उपयोगकर्ता ने OS स्तर पर "reduce
motion" सेट किया है, उसे कोई एनिमेशन नहीं दिखेगा — लेआउट फिर भी काम
करता है, बस मोशन दबा दिया जाता है।

<style>
  /*
   * पेज-लोकल डेमो स्टाइल। skeletonic-animations.min.css में शिप
   * एनिमेशन क्लास केवल animation-name सेट करती हैं, इसलिए डेमो
   * यहाँ लापता duration / iteration-count / fill-mode प्रदान करता है
   * ताकि keyframes दिखें। हर डेमो टार्गेट एक ठोस रंग डिस्क है
   * ताकि मोशन पेज बैकग्राउंड के विरुद्ध स्पष्ट हो।
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

<hr class="hr-text" data-content="डेमो">

## डेमो

किसी भी कार्ड पर **चलाएँ** दबाएँ ताकि एनिमेशन वर्ग पर फिर से चले।
एनिमेशन क्लास ठीक वही हैं जो `skeletonic-animations.min.css` में शिप
होती हैं — लाइब्रेरी केवल `animation-name` सेट करती है, इसलिए ऊपर
दिया गया `<style>` ब्लॉक keyframes को दृश्य बनाने के लिए लापता
`animation-duration` / `animation-iteration-count` / `animation-fill-mode`
प्रॉपर्टीज़ जोड़ता है।

<p class="anim-note-rm">
  Reduce Motion आपके OS में सक्षम है, इसलिए नीचे के टार्गेट स्थिर
  रहेंगे — यह v1.1.7 का सुलभता व्यवहार सही ढंग से काम कर रहा है।
</p>

<div class="anim-grid">

  <div class="anim-card">
    <h3>bounce</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="bounce"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'bounce')">चलाएँ</button>
  </div>

  <div class="anim-card">
    <h3>pulse</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="pulse"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'pulse')">चलाएँ</button>
  </div>

  <div class="anim-card">
    <h3>shake</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="shake"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'shake')">चलाएँ</button>
  </div>

  <div class="anim-card">
    <h3>wobble</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="wobble"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'wobble')">चलाएँ</button>
  </div>

  <div class="anim-card">
    <h3>flash</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="flash"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'flash')">चलाएँ</button>
  </div>

  <div class="anim-card">
    <h3>heartbeat</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="heartbeat"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'heartbeat')">चलाएँ</button>
  </div>

  <div class="anim-card">
    <h3>jelly</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="jelly"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'jelly')">चलाएँ</button>
  </div>

  <div class="anim-card">
    <h3>rubberBand</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="rubberBand"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'rubberBand')">चलाएँ</button>
  </div>

  <div class="anim-card">
    <h3>fadeIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeIn')">चलाएँ</button>
  </div>

  <div class="anim-card">
    <h3>fadeInDown</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeInDown"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeInDown')">चलाएँ</button>
  </div>

  <div class="anim-card">
    <h3>fadeInUp</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeInUp"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeInUp')">चलाएँ</button>
  </div>

  <div class="anim-card">
    <h3>popIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="popIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'popIn')">चलाएँ</button>
  </div>

  <div class="anim-card">
    <h3>rollIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="rollIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'rollIn')">चलाएँ</button>
  </div>

  <div class="anim-card">
    <h3>flipInHorizontal</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="flipInHorizontal"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'flipInHorizontal')">चलाएँ</button>
  </div>

  <div class="anim-card">
    <h3>zoomIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="zoomIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'zoomIn')">चलाएँ</button>
  </div>

  <div class="anim-card">
    <h3>vanishIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="vanishIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'vanishIn')">चलाएँ</button>
  </div>

</div>

<script>
  function replayAnim(btn, name){
    var target = btn.closest('.anim-card').querySelector('.anim-target');
    if (!target) return;
    target.className = 'anim-target';
    void target.offsetWidth;
    target.classList.add(name);
  }
  if (window.matchMedia && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    document.addEventListener('DOMContentLoaded', function(){
      document.querySelectorAll('.anim-target').forEach(function(t){
        var n = t.getAttribute('data-anim');
        if (n) setTimeout(function(){ t.classList.add(n); }, 200);
      });
    });
  }
</script>

<hr class="hr-text" data-content="क्लास सूची">

## क्लास संदर्भ

| क्लास | क्या करती है |
|---|---|
| `.bounce` | ऊर्ध्वाधर स्प्रिंग स्टेप |
| `.pulse` | हल्का स्केल पल्स |
| `.shake` | क्षैतिज हिलना |
| `.wobble` | झुकना और सम्हलना |
| `.flash` | दो-चरण opacity ब्लिंक |
| `.heartbeat` | डबल-बीट स्केल |
| `.jelly` | स्क्वैश और स्ट्रेच |
| `.rubberBand` | इलास्टिक स्ट्रेच |
| `.fadeIn` / `.fadeOut` | Opacity ट्रांज़िशन |
| `.fadeInDown` / `.fadeInUp` / `.fadeInLeft` / `.fadeInRight` | दिशात्मक फ़ेड |
| `.zoomIn` / `.zoomOut` | दृश्य में / से बाहर स्केल |
| `.popIn` / `.popOut` | स्प्रिंग स्केल + फ़ेड |
| `.rollIn` / `.rollOut` | Translate + rotate |
| `.flipInHorizontal` / `.flipInVertical` | 3-D फ़्लिप |
| `.vanishIn` / `.vanishOut` | Material-style प्रकट |
| `.chameleonbackground` / `.chameleontext` | Hue साइकिल |

## ध्यान दें — ज्ञात v1.1.7 सीमा

v1.1.7 में एनिमेशन क्लास केवल `animation-name` सेट करती हैं। उन्हें
चलाने के लिए आपको वर्तमान में अपना `animation-duration`,
`animation-iteration-count`, `animation-fill-mode` और
`animation-timing-function` प्रदान करना होगा — ठीक वैसे जैसे इस पेज
के शीर्ष पर `<style>` ब्लॉक दिखाता है। भविष्य की रिलीज़ में एक समझदार
डिफ़ॉल्ट बेस सेटअप इनलाइन होगा ताकि `<div class="bounce">` सीधे काम
करे।

[सुलभता नोट्स देखें →](/hi/sulabhata/)
