---
title: "パレット"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus v1.1.7 に付属する Material、Tachyons、ウェブセーフのカラーパレット。"
layout: page
permalink: https://skeletonic.io/ja/paretto/
date: 2026-04-08
author: Sebastien Rousseau
language: ja
theme_color: "hsl(210, 100%, 42%)"
keywords: "css パレット, material, tachyons, ウェブセーフ, デザイントークン"
---

Skeletonic Stylus v1.1.7 には **3つのオプションカラーパレット** が付属しており、それぞれ独立したミニファイ済みスタイルシートとして配布されるため、使用するものだけにコストを支払います。

| パレット | ファイル | サイズ (min) |
|---|---|---|
| Material | `dist/css/palettes/material/skeletonic-material.min.css` | 約8 KB |
| Tachyons | `dist/css/palettes/tachyons/skeletonic-tachyons.min.css` | 7.3 KB |
| ウェブセーフ | `dist/css/palettes/websafe/skeletonic-websafe.min.css` | 約4 KB |

このページは **Tachyons** パレットを読み込んでいるため、以下のカラーユーティリティクラスが正しくレンダリングされます。

<hr class="hr-text" data-content="グレー">

## Skeletonic コアグレー

コアスタイルシートには、`--cl-grey-100` … `--cl-grey-1000` として公開されるアクセシブルな11段階のグレースケールが含まれています。

<div class="row">
  <div class="flex-3 padding-3 text-center" style="background-color: var(--cl-grey-100);">
    100
  </div>
  <div class="flex-3 padding-3 text-center" style="background-color: var(--cl-grey-300);">
    300
  </div>
  <div class="flex-3 padding-3 text-center" style="background-color: var(--cl-grey-500); color: #fff;">
    500
  </div>
  <div class="flex-3 padding-3 text-center" style="background-color: var(--cl-grey-700); color: #fff;">
    700
  </div>
</div>

<div class="row">
  <div class="flex-3 padding-3 text-center" style="background-color: var(--cl-grey-200);">
    200
  </div>
  <div class="flex-3 padding-3 text-center" style="background-color: var(--cl-grey-400);">
    400
  </div>
  <div class="flex-3 padding-3 text-center" style="background-color: var(--cl-grey-600); color: #fff;">
    600
  </div>
  <div class="flex-3 padding-3 text-center" style="background-color: var(--cl-grey-900); color: #fff;">
    900
  </div>
</div>

<hr class="hr-text" data-content="ブランド">

## ブランドカラー (v1.1.7 — AA コントラスト)

v1.1.7 では、プライマリとセカンダリのトークンが暗くなり、白いテキストに対して **WCAG 4.5:1** コントラストをそのまま満たすようになりました。

<div class="row margin-top-3">
  <div class="flex-4 padding-3 text-center" style="background-color: hsl(210, 100%, 42%); color: #fff;">
    <strong>--cl-primary</strong><br>hsl(210 100% 42%)
  </div>
  <div class="flex-4 padding-3 text-center" style="background-color: hsl(195, 100%, 33%); color: #fff;">
    <strong>--cl-secondary</strong><br>hsl(195 100% 33%)
  </div>
  <div class="flex-4 padding-3 text-center" style="background-color: #757c8a; color: #fff;">
    <strong>--cl-tertiary</strong><br>#757c8a
  </div>
</div>

> **注意.** `--cl-tertiary` (#757c8a) は白に対して 4.71:1 のコントラスト比を
> 達成します。**大きなテキスト**（≥ 18 px 太字 / ≥ 24 px 標準）には
> AA 準拠ですが、本文テキストには適合しません。暗い背景と組み合わせるか、
> 装飾的な非必須要素にのみ使用してください。

<hr class="hr-text" data-content="Tachyons">

## Tachyons パレットユーティリティクラス

`skeletonic-tachyons.min.css` を読み込むと、単一目的のカラークラス一式が使えるようになります — 同じ配信アーティファクト、オプトインモジュールです。

```html
<span class="bg-blue white pa2">.bg-blue .white</span>
<span class="bg-light-green dark-green pa2">.bg-light-green .dark-green</span>
<span class="bg-washed-yellow dark-gray pa2">.bg-washed-yellow .dark-gray</span>
```

完全な Tachyons パレット仕様は [tachyons.io/docs/themes/colors](https://tachyons.io/docs/themes/colors/) に文書化されています。ここで配信されるバージョンは Skeletonic がコンパイルしたものです。

[コンポーネントに戻る →](/ja/konponentsu/)
