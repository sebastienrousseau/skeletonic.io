---
title: "অ্যানিমেশন — v1.1.7-এ prefers-reduced-motion"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus v1.1.7-এর সাথে শিপ করা ঐচ্ছিক অ্যানিমেশন মডিউল — bounce, pulse, fade, zoom, shake এবং আরও অনেক, সবই prefers-reduced-motion দ্বারা নিয়ন্ত্রিত।"
layout: page
permalink: https://skeletonic.io/bn/animations/
date: 2026-04-08
author: Sebastien Rousseau
language: bn
theme_color: "hsl(210, 100%, 42%)"
keywords: "css animations, keyframes, prefers-reduced-motion, bounce, pulse, fade"
load_animations: true
---

**অ্যানিমেশন মডিউল** একটি পৃথক ঐচ্ছিক ফাইল হিসেবে শিপ করা হয়
যাতে মূল স্টাইলশিট ৮&nbsp;KB gzipped-এর নিচে থাকে।

```html
<link
  rel="stylesheet"
  href="/css/skeletonic-animations.min.css">
```

v1.1.7-এ প্রতিটি অ্যানিমেশন ক্লাস একটি
**`@media (prefers-reduced-motion: no-preference)`** ব্লকে মোড়ানো,
অর্থাৎ যে ব্যবহারকারী OS স্তরে "reduce motion" সেট করেছেন তিনি
কোনো অ্যানিমেশনই দেখবেন না — লেআউট এখনও কাজ করে, শুধু মোশন দমন করা হয়।

<style>
  /*
   * পেজ-লোকাল ডেমো স্টাইল। skeletonic-animations.min.css-এ শিপ করা
   * অ্যানিমেশন ক্লাস শুধু animation-name সেট করে, তাই ডেমো
   * নিচে অনুপস্থিত duration / iteration-count / fill-mode যোগ করে
   * যাতে keyframes দৃশ্যমান হয়।
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

<hr class="hr-text" data-content="ডেমো">

## ডেমো

অ্যানিমেশন রিপ্লে করতে যেকোনো কার্ডে **চালান** চাপুন। অ্যানিমেশন
ক্লাসগুলো হুবহু `skeletonic-animations.min.css`-এ যা শিপ করা হয় —
শুধু `animation-name` লাইব্রেরি দ্বারা সেট করা হয়, তাই উপরের `<style>`
ব্লক keyframes দৃশ্যমান করতে অনুপস্থিত `animation-duration` /
`animation-iteration-count` / `animation-fill-mode` প্রপার্টি যোগ করে।

<p class="anim-note-rm">
  আপনার OS-এ Reduce Motion সক্রিয়, তাই নিচের টার্গেট স্থির থাকবে
  — এটি v1.1.7-এর প্রবেশাধিকার আচরণ সঠিকভাবে কাজ করছে।
</p>

<div class="anim-grid">

  <div class="anim-card">
    <h3>bounce</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="bounce"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'bounce')">চালান</button>
  </div>

  <div class="anim-card">
    <h3>pulse</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="pulse"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'pulse')">চালান</button>
  </div>

  <div class="anim-card">
    <h3>shake</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="shake"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'shake')">চালান</button>
  </div>

  <div class="anim-card">
    <h3>wobble</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="wobble"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'wobble')">চালান</button>
  </div>

  <div class="anim-card">
    <h3>flash</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="flash"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'flash')">চালান</button>
  </div>

  <div class="anim-card">
    <h3>heartbeat</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="heartbeat"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'heartbeat')">চালান</button>
  </div>

  <div class="anim-card">
    <h3>jelly</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="jelly"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'jelly')">চালান</button>
  </div>

  <div class="anim-card">
    <h3>rubberBand</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="rubberBand"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'rubberBand')">চালান</button>
  </div>

  <div class="anim-card">
    <h3>fadeIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeIn')">চালান</button>
  </div>

  <div class="anim-card">
    <h3>fadeInDown</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeInDown"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeInDown')">চালান</button>
  </div>

  <div class="anim-card">
    <h3>fadeInUp</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeInUp"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeInUp')">চালান</button>
  </div>

  <div class="anim-card">
    <h3>popIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="popIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'popIn')">চালান</button>
  </div>

  <div class="anim-card">
    <h3>rollIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="rollIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'rollIn')">চালান</button>
  </div>

  <div class="anim-card">
    <h3>flipInHorizontal</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="flipInHorizontal"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'flipInHorizontal')">চালান</button>
  </div>

  <div class="anim-card">
    <h3>zoomIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="zoomIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'zoomIn')">চালান</button>
  </div>

  <div class="anim-card">
    <h3>vanishIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="vanishIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'vanishIn')">চালান</button>
  </div>

</div>

<script>
  // v1.1.7-এ শিপ করা অ্যানিমেশন ক্লাস সিলেক্টরে animation-name সেট করে।
  // keyframe রিপ্লে করতে ক্লাস মুছে, লেআউট ফ্লাশ জোর করে, তারপর ক্লাস ফেরত যোগ করতে হয়।
  function replayAnim(btn, name){
    var target = btn.closest('.anim-card').querySelector('.anim-target');
    if (!target) return;
    target.className = 'anim-target';
    void target.offsetWidth;
    target.classList.add(name);
  }
  // প্রথম পেইন্টে স্বয়ংক্রিয়ভাবে চালান যাতে ভিজিটর ক্লিক ছাড়াই কিছু দেখে
  // — তবে শুধু মোশন অনুমোদিত হলে।
  if (window.matchMedia && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    document.addEventListener('DOMContentLoaded', function(){
      document.querySelectorAll('.anim-target').forEach(function(t){
        var n = t.getAttribute('data-anim');
        if (n) setTimeout(function(){ t.classList.add(n); }, 200);
      });
    });
  }
</script>

<hr class="hr-text" data-content="ক্লাস তালিকা">

## ক্লাস রেফারেন্স

| ক্লাস | কী করে |
|---|---|
| `.bounce` | উল্লম্ব স্প্রিং স্টেপ |
| `.pulse` | নরম স্কেল পালস |
| `.shake` | অনুভূমিক শেক |
| `.wobble` | কাত ও পুনরুদ্ধার |
| `.flash` | দুই-ধাপ অপাসিটি ব্লিংক |
| `.heartbeat` | ডাবল-বিট স্কেল |
| `.jelly` | স্কোয়াশ ও স্ট্রেচ |
| `.rubberBand` | ইলাস্টিক স্ট্রেচ |
| `.fadeIn` / `.fadeOut` | অপাসিটি ট্রানজিশন |
| `.fadeInDown` / `.fadeInUp` / `.fadeInLeft` / `.fadeInRight` | দিকমুখী ফেড |
| `.zoomIn` / `.zoomOut` | ভিউয়ে স্কেল ইন / আউট |
| `.popIn` / `.popOut` | স্প্রিং স্কেল + ফেড |
| `.rollIn` / `.rollOut` | ট্রান্সলেট + রোটেট |
| `.flipInHorizontal` / `.flipInVertical` | 3-D ফ্লিপ |
| `.vanishIn` / `.vanishOut` | Material-স্টাইল আবির্ভাব |
| `.chameleonbackground` / `.chameleontext` | হিউ সাইকেল |

## মাথায় রাখুন — পরিচিত v1.1.7 সীমাবদ্ধতা

v1.1.7-এ অ্যানিমেশন ক্লাস শুধু `animation-name` সেট করে। সেগুলো
চালাতে আপনাকে বর্তমানে নিজের `animation-duration`,
`animation-iteration-count`, `animation-fill-mode` ও
`animation-timing-function` দিতে হবে — ঠিক যেমন এই পেজের শীর্ষে
`<style>` ব্লক দেখায়। একটি ভবিষ্যৎ রিলিজ একটি যুক্তিসঙ্গত ডিফল্ট
বেস সেটআপ ইনলাইন করবে যাতে `<div class="bounce">` সরাসরি কাজ করে।

[প্রবেশাধিকার নোট দেখুন →](/bn/probeshadhikar/)
