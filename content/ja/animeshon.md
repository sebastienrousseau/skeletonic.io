---
title: "アニメーション"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus v2.0.0 に付属するオプションのアニメーションモジュール — バウンス、パルス、フェード、ズーム、シェイクなど、すべて prefers-reduced-motion で制御。"
layout: page
permalink: https://skeletonic.io/ja/animeshon/
date: 2026-04-08
author: Sebastien Rousseau
language: ja
theme_color: "hsl(210, 100%, 42%)"
keywords: "css アニメーション, キーフレーム, prefers-reduced-motion, バウンス, パルス, フェード"
load_animations: true
---

**アニメーションモジュール** は、コアスタイルシートが gzip 圧縮で8&nbsp;KB未満に収まるよう、別のオプションファイルとして配信されます。

```html
<link
  rel="stylesheet"
  href="/css/skeletonic-animations.min.css">
```

v2.0.0 では、すべてのアニメーションクラスが **`@media (prefers-reduced-motion: no-preference)`** ブロックで囲まれています。これは、OS レベルで「モーションの軽減」を設定しているユーザーにはアニメーションがまったく表示されないことを意味します — レイアウトは正常に動作し、モーションのみが抑制されます。

<style>
  /*
   * ページローカルのデモスタイル。skeletonic-animations.min.css に
   * 含まれるアニメーションクラスは animation-name のみを設定するため、
   * デモではキーフレームが見えるように不足している
   * animation-duration / animation-iteration-count / animation-fill-mode
   * をここで提供しています。各デモターゲットは、ページ背景に対して
   * モーションが明確に分かるように単色の円です。
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

<hr class="hr-text" data-content="デモ">

## デモ

任意のカードの **再生** を押すと、その四角でアニメーションが再生されます。アニメーションクラス自体は `skeletonic-animations.min.css` に含まれるそのものです — ライブラリは `animation-name` のみを設定するため、上の `<style>` ブロックがキーフレームを表示するために不足している `animation-duration` / `animation-iteration-count` / `animation-fill-mode` プロパティを追加しています。

<p class="anim-note-rm">
  お使いの OS でモーション軽減が有効になっているため、以下のターゲットは静止したままです — これは v2.0.0 のアクセシビリティ動作が正しく機能していることを示しています。
</p>

<div class="anim-grid">

  <div class="anim-card">
    <h3>bounce</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="bounce"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'bounce')">再生</button>
  </div>

  <div class="anim-card">
    <h3>pulse</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="pulse"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'pulse')">再生</button>
  </div>

  <div class="anim-card">
    <h3>shake</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="shake"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'shake')">再生</button>
  </div>

  <div class="anim-card">
    <h3>wobble</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="wobble"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'wobble')">再生</button>
  </div>

  <div class="anim-card">
    <h3>flash</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="flash"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'flash')">再生</button>
  </div>

  <div class="anim-card">
    <h3>heartbeat</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="heartbeat"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'heartbeat')">再生</button>
  </div>

  <div class="anim-card">
    <h3>jelly</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="jelly"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'jelly')">再生</button>
  </div>

  <div class="anim-card">
    <h3>rubberBand</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="rubberBand"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'rubberBand')">再生</button>
  </div>

  <div class="anim-card">
    <h3>fadeIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeIn')">再生</button>
  </div>

  <div class="anim-card">
    <h3>fadeInDown</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeInDown"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeInDown')">再生</button>
  </div>

  <div class="anim-card">
    <h3>fadeInUp</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeInUp"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeInUp')">再生</button>
  </div>

  <div class="anim-card">
    <h3>popIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="popIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'popIn')">再生</button>
  </div>

  <div class="anim-card">
    <h3>rollIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="rollIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'rollIn')">再生</button>
  </div>

  <div class="anim-card">
    <h3>flipInHorizontal</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="flipInHorizontal"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'flipInHorizontal')">再生</button>
  </div>

  <div class="anim-card">
    <h3>zoomIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="zoomIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'zoomIn')">再生</button>
  </div>

  <div class="anim-card">
    <h3>vanishIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="vanishIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'vanishIn')">再生</button>
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

<hr class="hr-text" data-content="クラス一覧">

## クラスリファレンス

| クラス | 動作 |
|---|---|
| `.bounce` | 垂直方向のバネステップ |
| `.pulse` | 穏やかなスケールパルス |
| `.shake` | 水平方向のシェイク |
| `.wobble` | 傾きと回復 |
| `.flash` | 2段階の不透明度ブリンク |
| `.heartbeat` | ダブルビートスケール |
| `.jelly` | スクォッシュ＆ストレッチ |
| `.rubberBand` | 弾性ストレッチ |
| `.fadeIn` / `.fadeOut` | 不透明度トランジション |
| `.fadeInDown` / `.fadeInUp` / `.fadeInLeft` / `.fadeInRight` | 方向付きフェード |
| `.zoomIn` / `.zoomOut` | ビューへのスケールイン/アウト |
| `.popIn` / `.popOut` | バネスケール＋フェード |
| `.rollIn` / `.rollOut` | 移動＋回転 |
| `.flipInHorizontal` / `.flipInVertical` | 3Dフリップ |
| `.vanishIn` / `.vanishOut` | Material スタイルの出現 |
| `.chameleonbackground` / `.chameleontext` | 色相サイクル |

## 注意事項 — v2.0.0 の既知の制約

v2.0.0 のアニメーションクラスは `animation-name` のみを設定します。再生するには、現在のところ `animation-duration`、`animation-iteration-count`、`animation-fill-mode`、`animation-timing-function` を自分で指定する必要があります — このページの上部にある `<style>` ブロックがまさにそのデモです。将来のリリースでは、`<div class="bounce">` がそのまま動作するよう、適切なデフォルトベース設定をインライン化する予定です。

[アクセシビリティの注記を見る →](/ja/akseshibirithi/)
