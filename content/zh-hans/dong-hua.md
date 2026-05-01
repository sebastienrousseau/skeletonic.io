---
title: "动画"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus v2.0.0 附带的可选动画模块——弹跳、脉冲、淡入、缩放、抖动等，均受 prefers-reduced-motion 控制。"
language: zh-hans
layout: page
permalink: https://skeletonic.io/zh-hans/dong-hua/
date: 2026-04-08
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "css 动画, keyframes, prefers-reduced-motion, 弹跳, 脉冲, 淡入"
load_animations: true
---

**动画模块**作为独立的可选文件分发，以确保核心样式表保持在 8&nbsp;KB gzip 以下。

```html
<link
  rel="stylesheet"
  href="/css/skeletonic-animations.min.css">
```

在 v2.0.0 中，每个动画类都包裹在 **`@media (prefers-reduced-motion: no-preference)`** 块中，这意味着在操作系统层面设置了"减弱动效"的用户将看不到任何动画——布局依然正常，动效只是被抑制了。

<style>
  /*
   * 页面内演示样式。skeletonic-animations.min.css 中的动画类仅设置
   * animation-name，因此演示区提供缺失的 duration / iteration-count /
   * fill-mode 使关键帧可见。每个演示目标是一个纯色圆盘，以便在页面
   * 背景上清晰展示动效。
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

<hr class="hr-text" data-content="演示">

## 演示

点击任意卡片上的**播放**按钮即可重播动画。动画类本身与 `skeletonic-animations.min.css` 中的完全一致——仅设置了 `animation-name`，上方的 `<style>` 块添加了缺失的 `animation-duration` / `animation-iteration-count` / `animation-fill-mode` 属性以使关键帧可见。

<p class="anim-note-rm">
  你的操作系统已启用减弱动效，因此以下目标将保持静止——这正是 v2.0.0 无障碍行为的正确表现。
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
  // v2.0.0 中的动画类在选择器中设置 animation-name。要重播关键帧，
  // 需要先移除类名，强制布局刷新，然后重新添加。
  function replayAnim(btn, name){
    var target = btn.closest('.anim-card').querySelector('.anim-target');
    if (!target) return;
    target.className = 'anim-target';
    void target.offsetWidth;
    target.classList.add(name);
  }
  // 首次渲染时自动播放一次，让访客立即看到效果——仅在允许动效时生效。
  if (window.matchMedia && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    document.addEventListener('DOMContentLoaded', function(){
      document.querySelectorAll('.anim-target').forEach(function(t){
        var n = t.getAttribute('data-anim');
        if (n) setTimeout(function(){ t.classList.add(n); }, 200);
      });
    });
  }
</script>

<hr class="hr-text" data-content="类名列表">

## 类名参考

| 类名 | 效果 |
|---|---|
| `.bounce` | 垂直弹跳 |
| `.pulse` | 柔和缩放脉冲 |
| `.shake` | 水平抖动 |
| `.wobble` | 倾斜并恢复 |
| `.flash` | 两步透明度闪烁 |
| `.heartbeat` | 双重心跳缩放 |
| `.jelly` | 挤压与拉伸 |
| `.rubberBand` | 弹性拉伸 |
| `.fadeIn` / `.fadeOut` | 透明度过渡 |
| `.fadeInDown` / `.fadeInUp` / `.fadeInLeft` / `.fadeInRight` | 方向性淡入 |
| `.zoomIn` / `.zoomOut` | 缩放进入/离开视图 |
| `.popIn` / `.popOut` | 弹性缩放 + 淡入 |
| `.rollIn` / `.rollOut` | 平移 + 旋转 |
| `.flipInHorizontal` / `.flipInVertical` | 3D 翻转 |
| `.vanishIn` / `.vanishOut` | Material 风格出现 |
| `.chameleonbackground` / `.chameleontext` | 色相循环 |

## 注意 — v2.0.0 已知限制

v2.0.0 中的动画类仅设置 `animation-name`。要播放它们，你目前需要自行提供 `animation-duration`、`animation-iteration-count`、`animation-fill-mode` 和 `animation-timing-function`——正如本页顶部的 `<style>` 块所演示的。未来版本将内联合理的默认基础配置，使 `<div class="bounce">` 开箱即用。

[查看无障碍说明 →](/zh-hans/wu-zhang-ai/)
