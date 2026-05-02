---
title: "Skeletonic Stylus をはじめる"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus を npm または CDN からインストールし、Stylus ビルドにインポートして、数秒で変数をオーバーライドする方法を解説します。"
layout: page
permalink: https://skeletonic.io/ja/hajimeni/
date: 2026-04-08
author: Sebastien Rousseau
language: ja
theme_color: "hsl(210, 100%, 42%)"
keywords: "skeletonic インストール, stylus セットアップ, css cdn, はじめに"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

## はじめに

Skeletonic Stylus を初めて使いますか？ **v2.0.0** では、必要な機能だけを選ぶのがこれまで以上に簡単になりました。コアスタイルシートのフットプリントが非常に小さい（gzip圧縮で約7.8&nbsp;KB）ため、どの Web アプリにも素早く統合できます。JavaScript フレームワーク不要、CDN を使えばビルドステップも不要です。

以下にすべての方法を網羅しています。必要なものを選んでください。

## 1. ダウンロードとインストール

Skeletonic Stylus は **pnpm**、**npm**、**yarn** でインストールするか、CDN から直接読み込むことができます。お好みでディストリビューションファイルをローカルにセルフホストすることも可能です。

### パッケージマネージャーから（推奨）

```bash
# pnpm
pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0

# npm
npm install @sebastienrousseau/skeletonic-stylus@2.0.0

# yarn
yarn add @sebastienrousseau/skeletonic-stylus@2.0.0
```

### CDN から

コンパイル済み CSS だけが必要な場合は、以下のいずれかを `<head>` に追加してください：

```html
<!-- jsDelivr -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@2.0.0/dist/css/core/skeletonic.min.css"
  crossorigin="anonymous">

<!-- unpkg -->
<link
  rel="stylesheet"
  href="https://unpkg.com/@sebastienrousseau/skeletonic-stylus@2.0.0/dist/css/core/skeletonic.min.css"
  crossorigin="anonymous">
```

最大限の整合性を確保するには、v2.0.0 リリースノートから **SRI ハッシュ** をコピーし、`integrity="sha384-…"` 属性を追加してください。

### 代替 CDN ロケーション

| CDN | URL | HTTPS | コンボ |
|---|---|---|---|
| **jsDelivr** | `https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@2.0.0/dist/css/core/skeletonic.min.css` | 対応 | 対応 |
| **unpkg** | `https://unpkg.com/@sebastienrousseau/skeletonic-stylus@2.0.0/dist/css/core/skeletonic.min.css` | 対応 | 非対応 |

### GitHub リリースをダウンロード

バージョン付きの tarball をご希望ですか？ [github.com/sebastienrousseau/skeletonic-stylus/releases](https://github.com/sebastienrousseau/skeletonic-stylus/releases) から最新リリースを取得し、`dist/` の中身をそのままプロジェクトにコピーしてください。

### GitHub リポジトリをクローン

ビルドスクリプトを含むすべてのソースファイルを取得するには、メインリポジトリをクローンしてください：

```bash
git clone https://github.com/sebastienrousseau/skeletonic-stylus.git
cd skeletonic-stylus
pnpm install
pnpm run build
```

> **ヒント:** コミットに署名してください — プロジェクトは CI で署名済みコミットを必須としています。`git commit -S -m "..."` を使うか、グローバル git 設定で `commit.gpgsign = true` を設定してください。

## 2. コンパイル済み CSS を使用する

ライブラリはインストール後、`dist/css/` 以下に複数のビルド済みバンドルを含みます：

| ファイル | 用途 | サイズ (min/gz) |
|---|---|---|
| `core/skeletonic.min.css` | リセット + トークン + レイアウト + 要素 + コンポーネント + ユーティリティ | 39.1 KB / 7.8 KB |
| `animations/skeletonic-animations.min.css` | オプションのアニメーションモジュール | 約18 KB / 約4 KB |
| `palettes/material/skeletonic-material.min.css` | Material カラーパレット | 約8 KB |
| `palettes/tachyons/skeletonic-tachyons.min.css` | Tachyons ユーティリティパレット | 7.3 KB |
| `palettes/websafe/skeletonic-websafe.min.css` | ウェブセーフパレット | 約4 KB |

各モジュールは独立しています — 必要最小限の組み合わせを選んでください。

## 3. Stylus から使用する

既に Stylus パイプラインをお持ちの場合は、ソースモジュールをインポートして、バンドラーに未使用部分をツリーシェイクさせることができます：

```stylus
// styles/main.styl
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/skeletonic'
```

必要な部分だけをインポートすることも可能です：

```stylus
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/utilities/variables'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/utilities/mixins'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/elements/buttons'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/components/card'
```

## 4. ブランドカラーのオーバーライド

Skeletonic はデザイントークンを **CSS カスタムプロパティ** として公開しているため、Stylus を再コンパイルせずにテーマを変更できます：

```css
:root {
  --cl-primary:   hsl(210, 100%, 42%);
  --cl-secondary: hsl(195, 100%, 33%);
  --cl-tertiary:  #757c8a;
}
```

これだけです — プライマリカラーを使用するすべてのコンポーネントが追従します。

## 5. インストールの確認

最小限の「動作確認」チェック：

```html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@2.0.0/dist/css/core/skeletonic.min.css">
  </head>
  <body class="container padding-3">
    <h1>動作しています。</h1>
    <a href="#" class="button primary">Hello, world</a>
  </body>
</html>
```

見出しが流動的にサイズ調整され、ボタンが青いピル型になっていれば完了です。

## 6. 含まれているもの

パッケージの中には、すべてのソースファイル、コンパイルおよびミニファイ済み CSS バンドル、ソースマップ、そしてカテゴリ別に整理された完全な Stylus ツリーが含まれています：

```text
@sebastienrousseau/skeletonic-stylus@2.0.0
├── CHANGELOG.md
├── LICENSE-APACHE
├── LICENSE-MIT
├── README.md
├── package.json
├── dist/
│   └── css/
│       ├── core/
│       │   ├── skeletonic.css
│       │   ├── skeletonic.css.map
│       │   └── skeletonic.min.css
│       ├── animations/
│       │   ├── skeletonic-animations.css
│       │   └── skeletonic-animations.min.css
│       └── palettes/
│           ├── material/skeletonic-material.min.css
│           ├── tachyons/skeletonic-tachyons.min.css
│           └── websafe/skeletonic-websafe.min.css
└── src/
    └── stylus/
        ├── animations/      bounce, fade, pulse, shake, vanish, zoom…
        ├── base/            reset, helpers
        ├── components/      card, header, navbar, alert
        ├── configurations/  colors, variables
        ├── elements/        button, form, table, link, list, code…
        ├── fonts/           font-face declarations
        ├── layout/          container, grid, media-queries
        ├── palettes/        material, tachyons, websafe
        ├── utilities/       mixins
        └── skeletonic.styl  ← すべてを読み込む単一インポート
```

各モジュールは独立しています — 必要なバンドルだけを取り込んで、CSS ペイロードを可能な限り小さく保ちましょう。

## よくある質問

**Skeletonic Stylus はどのようにインストールしますか？**
`pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0` を実行してください。または、コンパイル済み CSS を CDN から直接読み込めます — ビルドステップは不要です。

**JavaScript は必要ですか？**
いいえ。コアスタイルシートは純粋な CSS であり、ランタイムコストはゼロです。コンポーネントは JavaScript なしで動作します。

**WCAG 2.2 に対応していますか？**
はい。v2.0.0 では、AA 準拠のコントラスト、focus-visible リング、スキップリンクヘルパー、モーション軽減対応、ダークモードがデフォルトで提供されます。

**gzip圧縮後のサイズは？**
ミニファイ済みで39.1&nbsp;KB、**gzip圧縮で約7.8&nbsp;KB**、brotli で約6.7&nbsp;KB（フルコアスタイルシート）。8&nbsp;KB の上限は CI で強制されています。

**どのライセンスを使用していますか？**
MIT と Apache 2.0 のデュアルライセンスです — プロジェクトに合う方をお選びください。商用・個人利用ともに無料です。

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Skeletonic Stylus はどのようにインストールしますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0 を実行してください。または、コンパイル済み CSS を CDN から直接読み込めます — ビルドステップは不要です。"
      }
    },
    {
      "@type": "Question",
      "name": "Skeletonic Stylus に JavaScript は必要ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "いいえ。コアスタイルシートは純粋な CSS であり、ランタイムコストはゼロです。コンポーネントは JavaScript なしで動作します。"
      }
    },
    {
      "@type": "Question",
      "name": "Skeletonic Stylus は WCAG 2.2 に対応していますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "はい。v2.0.0 では、AA 準拠のコントラスト、focus-visible リング、スキップリンクヘルパー、モーション軽減対応、ダークモードがデフォルトで提供されます。"
      }
    },
    {
      "@type": "Question",
      "name": "Skeletonic Stylus の gzip 圧縮後のサイズは？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ミニファイ済みで 39.1 KB、gzip 圧縮で約 7.8 KB、brotli で約 6.7 KB（フルコアスタイルシート）。8 KB の上限はすべてのコミットで CI により強制されています。"
      }
    },
    {
      "@type": "Question",
      "name": "Skeletonic Stylus はどのライセンスを使用していますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "MIT と Apache 2.0 のデュアルライセンスです — プロジェクトに合う方をお選びください。商用・個人利用ともに無料です。"
      }
    }
  ]
}
</script>

[コンポーネントを見る →](/ja/konponentsu/)
