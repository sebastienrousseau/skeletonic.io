---
title: "애니메이션"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus v1.1.7에 포함된 선택적 애니메이션 모듈 — bounce, pulse, fade, zoom, shake 등, 모두 prefers-reduced-motion 기반으로 제어됩니다."
layout: page
permalink: https://skeletonic.io/ko/aenimeisyeon/
date: 2026-04-08
author: Sebastien Rousseau
language: ko
theme_color: "hsl(210, 100%, 42%)"
keywords: "css 애니메이션, keyframes, prefers-reduced-motion, bounce, pulse, fade"
load_animations: true
---

**애니메이션 모듈**은 코어 스타일시트가 8&nbsp;KB gzipped 미만으로 유지되도록 별도의 선택적 파일로 제공됩니다.

```html
<link
  rel="stylesheet"
  href="/css/skeletonic-animations.min.css">
```

v1.1.7에서 모든 애니메이션 클래스는 **`@media (prefers-reduced-motion: no-preference)`** 블록으로 감싸져 있어, OS 수준에서 "모션 줄이기"를 설정한 사용자에게는 애니메이션이 전혀 표시되지 않습니다. 레이아웃은 그대로 작동하며, 모션만 억제됩니다.

<style>
  /*
   * 페이지 로컬 데모 스타일. skeletonic-animations.min.css에 포함된
   * 애니메이션 클래스는 animation-name만 설정하므로, 이 데모에서는
   * 키프레임이 표시되도록 누락된 duration / iteration-count / fill-mode를
   * 제공합니다. 각 데모 대상은 단색 원반으로, 페이지 배경에서
   * 모션이 잘 보이도록 합니다.
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

<hr class="hr-text" data-content="데모">

## 데모

카드의 **재생** 버튼을 누르면 사각형에서 애니메이션이 다시 재생됩니다. 애니메이션 클래스 자체는 `skeletonic-animations.min.css`에 포함된 것과 정확히 동일하며, 라이브러리는 `animation-name`만 설정하므로 위의 `<style>` 블록에서 누락된 `animation-duration` / `animation-iteration-count` / `animation-fill-mode` 속성을 추가하여 키프레임이 표시됩니다.

<p class="anim-note-rm">
  OS에서 모션 줄이기가 활성화되어 있으므로 아래 대상은 정지해 있습니다.
  이것은 v1.1.7 접근성 동작이 올바르게 작동하는 것입니다.
</p>

<div class="anim-grid">

  <div class="anim-card">
    <h3>bounce</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="bounce"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'bounce')">재생</button>
  </div>

  <div class="anim-card">
    <h3>pulse</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="pulse"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'pulse')">재생</button>
  </div>

  <div class="anim-card">
    <h3>shake</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="shake"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'shake')">재생</button>
  </div>

  <div class="anim-card">
    <h3>wobble</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="wobble"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'wobble')">재생</button>
  </div>

  <div class="anim-card">
    <h3>flash</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="flash"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'flash')">재생</button>
  </div>

  <div class="anim-card">
    <h3>heartbeat</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="heartbeat"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'heartbeat')">재생</button>
  </div>

  <div class="anim-card">
    <h3>jelly</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="jelly"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'jelly')">재생</button>
  </div>

  <div class="anim-card">
    <h3>rubberBand</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="rubberBand"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'rubberBand')">재생</button>
  </div>

  <div class="anim-card">
    <h3>fadeIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeIn')">재생</button>
  </div>

  <div class="anim-card">
    <h3>fadeInDown</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeInDown"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeInDown')">재생</button>
  </div>

  <div class="anim-card">
    <h3>fadeInUp</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeInUp"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeInUp')">재생</button>
  </div>

  <div class="anim-card">
    <h3>popIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="popIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'popIn')">재생</button>
  </div>

  <div class="anim-card">
    <h3>rollIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="rollIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'rollIn')">재생</button>
  </div>

  <div class="anim-card">
    <h3>flipInHorizontal</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="flipInHorizontal"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'flipInHorizontal')">재생</button>
  </div>

  <div class="anim-card">
    <h3>zoomIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="zoomIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'zoomIn')">재생</button>
  </div>

  <div class="anim-card">
    <h3>vanishIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="vanishIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'vanishIn')">재생</button>
  </div>

</div>

<script>
  // v1.1.7에 포함된 애니메이션 클래스는 선택자 자체에서 animation-name을
  // 설정합니다. 키프레임을 다시 재생하려면 클래스를 제거하고, 레이아웃
  // 플러시를 강제한 후, 클래스를 다시 추가해야 합니다.
  function replayAnim(btn, name){
    var target = btn.closest('.anim-card').querySelector('.anim-target');
    if (!target) return;
    target.className = 'anim-target';
    void target.offsetWidth;
    target.classList.add(name);
  }
  // 방문자가 클릭 없이도 무언가 일어나는 것을 볼 수 있도록 첫 렌더링 시
  // 자동 재생합니다. 단, 모션이 허용된 경우에만 해당합니다.
  if (window.matchMedia && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    document.addEventListener('DOMContentLoaded', function(){
      document.querySelectorAll('.anim-target').forEach(function(t){
        var n = t.getAttribute('data-anim');
        if (n) setTimeout(function(){ t.classList.add(n); }, 200);
      });
    });
  }
</script>

<hr class="hr-text" data-content="클래스 목록">

## 클래스 참조

| 클래스 | 기능 |
|---|---|
| `.bounce` | 수직 스프링 스텝 |
| `.pulse` | 부드러운 스케일 펄스 |
| `.shake` | 수평 흔들기 |
| `.wobble` | 기울기 및 복귀 |
| `.flash` | 2단계 투명도 깜빡임 |
| `.heartbeat` | 이중 박동 스케일 |
| `.jelly` | 압축 및 늘이기 |
| `.rubberBand` | 탄성 늘이기 |
| `.fadeIn` / `.fadeOut` | 투명도 전환 |
| `.fadeInDown` / `.fadeInUp` / `.fadeInLeft` / `.fadeInRight` | 방향별 페이드 |
| `.zoomIn` / `.zoomOut` | 뷰 안으로 / 밖으로 스케일 |
| `.popIn` / `.popOut` | 스프링 스케일 + 페이드 |
| `.rollIn` / `.rollOut` | 이동 + 회전 |
| `.flipInHorizontal` / `.flipInVertical` | 3D 플립 |
| `.vanishIn` / `.vanishOut` | Material 스타일 등장 |
| `.chameleonbackground` / `.chameleontext` | 색조 순환 |

## 참고 — 알려진 v1.1.7 제한 사항

v1.1.7의 애니메이션 클래스는 `animation-name`만 설정합니다. 이를 재생하려면 현재 `animation-duration`, `animation-iteration-count`, `animation-fill-mode` 및 `animation-timing-function`을 직접 제공해야 합니다. 이 페이지 상단의 `<style>` 블록이 바로 그 방법을 보여줍니다. 향후 릴리스에서는 합리적인 기본 설정을 인라인으로 포함하여 `<div class="bounce">`가 즉시 작동하도록 할 예정입니다.

[접근성 참고 보기 →](/ko/jeobgeun-seong/)
