---
title: "動畫"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus v1.1.7 隨附的可選動畫模組——彈跳、脈衝、淡入、縮放、抖動等，全部受 prefers-reduced-motion 控制。"
language: zh-hant
layout: page
permalink: https://skeletonic.io/zh-hant/dong-hua/
date: 2026-04-08
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "css 動畫, keyframes, prefers-reduced-motion, 彈跳, 脈衝, 淡入"
load_animations: true
---

**動畫模組**以獨立的可選檔案形式發佈，以確保核心樣式表保持在 8&nbsp;KB gzip 以下。

```html
<link
  rel="stylesheet"
  href="/css/skeletonic-animations.min.css">
```

在 v1.1.7 中，每個動畫類別都包裹在 **`@media (prefers-reduced-motion: no-preference)`** 區塊中，這意味著在作業系統層級設定了「減少動態效果」的使用者將看不到任何動畫——版面依然正常運作，只是動效被抑制。

<style>
  /*
   * 頁面內示範樣式。skeletonic-animations.min.css 中的動畫類別
   * 僅設定 animation-name，因此示範區透過此 <style> 區塊
   * 補充缺失的 animation-duration / animation-iteration-count /
   * animation-fill-mode 屬性，使 keyframes 得以可見。每個示範
   * 目標是一個實色圓盤，使動態效果在頁面背景上清晰可辨。
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

<hr class="hr-text" data-content="示範">

## 示範

按下任一卡片上的**播放**按鈕即可重播該動畫。動畫類別本身與 `skeletonic-animations.min.css` 中隨附的完全一致——函式庫僅設定 `animation-name`，因此上方的 `<style>` 區塊添加了缺失的 `animation-duration` / `animation-iteration-count` / `animation-fill-mode` 屬性，使 keyframes 得以可見。

<p class="anim-note-rm">
  您的作業系統已啟用「減少動態效果」，因此下方的目標將保持靜止——這正是 v1.1.7 無障礙行為的正確表現。
</p>

<div class="anim-grid">

  <div class="anim-card">
    <h3>bounce</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="bounce"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'bounce')">播放</button>
  </div>

  <div class="anim-card">
    <h3>pulse</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="pulse"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'pulse')">播放</button>
  </div>

  <div class="anim-card">
    <h3>shake</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="shake"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'shake')">播放</button>
  </div>

  <div class="anim-card">
    <h3>wobble</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="wobble"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'wobble')">播放</button>
  </div>

  <div class="anim-card">
    <h3>flash</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="flash"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'flash')">播放</button>
  </div>

  <div class="anim-card">
    <h3>heartbeat</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="heartbeat"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'heartbeat')">播放</button>
  </div>

  <div class="anim-card">
    <h3>jelly</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="jelly"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'jelly')">播放</button>
  </div>

  <div class="anim-card">
    <h3>rubberBand</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="rubberBand"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'rubberBand')">播放</button>
  </div>

  <div class="anim-card">
    <h3>fadeIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeIn')">播放</button>
  </div>

  <div class="anim-card">
    <h3>fadeInDown</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeInDown"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeInDown')">播放</button>
  </div>

  <div class="anim-card">
    <h3>fadeInUp</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeInUp"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeInUp')">播放</button>
  </div>

  <div class="anim-card">
    <h3>popIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="popIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'popIn')">播放</button>
  </div>

  <div class="anim-card">
    <h3>rollIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="rollIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'rollIn')">播放</button>
  </div>

  <div class="anim-card">
    <h3>flipInHorizontal</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="flipInHorizontal"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'flipInHorizontal')">播放</button>
  </div>

  <div class="anim-card">
    <h3>zoomIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="zoomIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'zoomIn')">播放</button>
  </div>

  <div class="anim-card">
    <h3>vanishIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="vanishIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'vanishIn')">播放</button>
  </div>

</div>

<script>
  // v1.1.7 中的動畫類別在選擇器中設定 animation-name。
  // 要重播 keyframe，我們需要移除類別、強制佈局重排，
  // 然後重新添加類別。
  function replayAnim(btn, name){
    var target = btn.closest('.anim-card').querySelector('.anim-target');
    if (!target) return;
    target.className = 'anim-target';
    void target.offsetWidth;
    target.classList.add(name);
  }
  // 首次繪製時自動播放一次，讓訪客無需點擊即可看到效果
  // ——但僅在允許動態效果時才執行。
  if (window.matchMedia && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    document.addEventListener('DOMContentLoaded', function(){
      document.querySelectorAll('.anim-target').forEach(function(t){
        var n = t.getAttribute('data-anim');
        if (n) setTimeout(function(){ t.classList.add(n); }, 200);
      });
    });
  }
</script>

<hr class="hr-text" data-content="類別列表">

## 類別參考

| 類別 | 效果 |
|---|---|
| `.bounce` | 垂直彈跳 |
| `.pulse` | 柔和縮放脈衝 |
| `.shake` | 水平抖動 |
| `.wobble` | 傾斜與復原 |
| `.flash` | 兩段式透明度閃爍 |
| `.heartbeat` | 雙重心跳縮放 |
| `.jelly` | 擠壓與拉伸 |
| `.rubberBand` | 彈性拉伸 |
| `.fadeIn` / `.fadeOut` | 透明度過渡 |
| `.fadeInDown` / `.fadeInUp` / `.fadeInLeft` / `.fadeInRight` | 方向性淡入 |
| `.zoomIn` / `.zoomOut` | 縮放進入/離開視圖 |
| `.popIn` / `.popOut` | 彈簧縮放 + 淡入 |
| `.rollIn` / `.rollOut` | 位移 + 旋轉 |
| `.flipInHorizontal` / `.flipInVertical` | 3D 翻轉 |
| `.vanishIn` / `.vanishOut` | Material 風格顯現 |
| `.chameleonbackground` / `.chameleontext` | 色相循環 |

## 注意——v1.1.7 已知限制

v1.1.7 中的動畫類別僅設定 `animation-name`。要播放動畫，您目前需要自行提供 `animation-duration`、`animation-iteration-count`、`animation-fill-mode` 和 `animation-timing-function`——正如本頁頂部的 `<style>` 區塊所示範的那樣。未來版本將內建合理的預設基礎設定，讓 `<div class="bounce">` 開箱即用。

[查看無障礙說明 →](/zh-hant/wu-zhang-ai/)
