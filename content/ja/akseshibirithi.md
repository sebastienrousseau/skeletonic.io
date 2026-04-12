---
title: "アクセシビリティ — v1.1.7 における WCAG 2.2"
name: "Skeletonic Stylus"
description: "v1.1.7 が WCAG 2.2 準拠のために標準で提供するもの — フォーカスリング、コントラスト、スキップリンク、モーション、ダークモード。"
layout: page
permalink: https://skeletonic.io/ja/akseshibirithi/
date: 2026-04-08
author: Sebastien Rousseau
language: ja
theme_color: "hsl(210, 100%, 42%)"
keywords: "wcag 2.2, アクセシビリティ, focus visible, スキップリンク, prefers reduced motion, コントラスト"
---

> **Skeletonic Stylus v1.1.7 は、WCAG 2.2 準拠をオプションテーマとしてではなく、デフォルトの動作として提供します。** このページでは、組み込み済みの機能と、より細かい制御のためにオプトインできるミックスインについて説明します。

<hr class="hr-text" data-content="標準装備">

## 標準で得られるもの

| WCAG 2.2 SC | v1.1.7 の対応内容 | 確認方法 |
|---|---|---|
| **1.4.3 コントラスト (最低限) — AA** | `--cl-primary` と `--cl-secondary` を白いテキストに対して 4.5:1 以上に調整 | DevTools → コントラストチェッカー |
| **1.4.11 非テキストコントラスト — AA** | フォームボーダー、ボタン、バッジすべて 3:1 以上 | 同上 |
| **2.4.7 フォーカスの可視性 — AA** | すべてのフォーカス可能な要素に `:focus-visible` リング（暗い背景では黄色、明るい背景では青） | `Tab` キーで任意のページを移動 |
| **2.4.11 フォーカスの非遮蔽 — AA (2.2で新規)** | 固定ヘッダーの高さ縮小 + フォーカス scroll-margin | 固定ヘッダーを越えて `Tab` |
| **2.5.8 ターゲットサイズ — AA (2.2で新規)** | ボタン/リンク: 最小 24×24 CSS px ヒットエリア | DevTools ボックスモデル |
| **1.4.12 テキスト間隔 — AA** | すべての要素がユーザーの line-height / letter-spacing オーバーライドを尊重 | DevTools でオーバーライド |
| **2.3.3 インタラクションによるアニメーション — AAA** | すべてのアニメーションクラスが `@media (prefers-reduced-motion: no-preference)` でラップ | OS レベルのモーション軽減 |
| **1.4.10 リフロー — AA** | 320 px でも水平スクロールなしでレイアウトが機能 | DevTools 狭いビューポート |
| **ダークモード** | `prefers-color-scheme: dark` でトークンを自動切替 | OS のダークモード切替 |

<hr class="hr-text" data-content="ミックスイン">

## オプトインできる Stylus ミックスイン

ソースからコンパイルする場合、以下のミックスインが `src/stylus/utilities/mixins.styl` で利用可能です：

| ミックスイン | 用途 |
|---|---|
| `focus-ring()` | `:focus-visible` を尊重する高コントラストフォーカスリング |
| `visually-hidden()` | フォーカス可能のまま残るスクリーンリーダー専用テキスト |
| `skip-link()` | フォーカス時に表示されるアンカー |
| `reduced-motion()` | 任意のブロックを `prefers-reduced-motion: no-preference` でラップ |
| `forced-colors()` | Windows ハイコントラストモード用の調整 |
| `target-size(24px)` | クリック可能な要素を最小タップターゲットにパディング |

使用例：

```stylus
// カスタムボタンに強いフォーカスリングを適用
.my-button
    focus-ring()
    target-size(28px)
```

<hr class="hr-text" data-content="スキップリンク">

## スキップリンクヘルパー

以下を **`<body>` の最初** に配置してください：

```html
<a href="#main-content" class="skip-link">メインコンテンツへスキップ</a>
```

このクラスはコアスタイルシートには含まれていません（ページ容量に影響しないようにするため）。4行のスニペットを自分で構成するか、含まれている `skip-link()` ミックスインを使用してください。このサイトでも使用しています — ページにフォーカスして Tab を押すと、左上に表示されます。

<hr class="hr-text" data-content="検証">

## 自分のページの検証

ライブラリには `scripts/` 以下に `a11y-test.mjs` スクリプトが含まれており、指定した URL に対して [axe-core](https://github.com/dequelabs/axe-core) を実行します。

```bash
node scripts/a11y-test.mjs https://example.com
```

CI はこのスクリプトを毎プッシュ時に `dist/index.html` ショーケースページに対して実行します。

[v1.1.7 リリースについて読む →](/ja/henkou-rireki/) ·
[セキュリティページを見る →](/ja/sekiyurithi/)
