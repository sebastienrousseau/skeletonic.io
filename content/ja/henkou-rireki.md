---
title: "変更履歴"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus のリリースノート。v1.1.7 の詳細を掲載しています。"
layout: page
permalink: https://skeletonic.io/ja/henkou-rireki/
author: Sebastien Rousseau
language: ja
theme_color: "hsl(210, 100%, 42%)"
keywords: "skeletonic 変更履歴, リリースノート, v1.1.7, semver"
---

> **Translation note (2026-04-30).** v1.1.7 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

## v1.1.7 — 2026-04 (現行)

「リリース準備」パス：a11y、サプライチェーン、リポジトリの整備。

### アクセシビリティ (WCAG 2.2)
- **`$primary` を暗く調整** — `hsl(210, 100%, 42%)` に変更し、ボタン/バッジ/リンクの白いテキストに対する AA コントラストを確保。
- **`$secondary` を暗く調整** — `hsl(195, 100%, 33%)` に変更。
- すべてのインタラクティブ要素に **focus-visible** リングを追加。
- アニメーションモジュールに **`@media (prefers-reduced-motion)`** ラッパーを追加。
- **`prefers-color-scheme: dark`** トークン切替を追加。
- WCAG 2.2 SC 2.5.8 を満たす **target-size(24px)** ミックスインを追加。
- 固定ヘッダー用の **focus-not-obscured** scroll-margin ヘルパーを追加。

### ビルドとサプライチェーン
- **カスケードレイヤー** — すべてのブロックが `@layer skeletonic.{reset,tokens,layout,elements,components,utilities}` に配置。
- npm tarball の一部として **CycloneDX SBOM** を生成。
- CI で **`size-limit` バジェット** を強制：コアスタイルシートの gzip圧縮 8 KB 上限。
- **CVE-2023-44270** (postcss 改行) を `pnpm.overrides` でパッチ。
- npm 公開ワークフローでプロベナンス＋署名 (`--provenance --access public`)。
- アーカイブ済みの `stylelint-a11y` プラグインをリント設定から削除。

### リポジトリの整備とコンシューマーパッケージ
- レガシーの `package/` ディレクトリを削除。`dist/` がコンシューマー向けの唯一の真実のソースに。
- v1.1.7 のインストールパスを反映するよう README を書き直し。
- `dist/` はコミット済み、`debug/` は生成されて gitignore されます。
- 新しい `.github/workflows/npm-publish.yml` はタグ駆動。

### バグ修正 (P0)
- **`row $:after` 親セレクターの回帰** — `src/stylus/components/_grid.styl` で誤った `$` を `&` に置換。
- **`.alternate`** が `alternate` ではなく `animation-direction: reverse` を誤って適用していた問題を修正。
- **`.alert-*` の名前空間化** — `.alert.success` → `.alert.alert-success` に変更し、ステートクラスとの衝突を回避。

[GitHub で v1.1.7 の完全なリリースノートを見る ↗](https://github.com/sebastienrousseau/skeletonic-stylus/releases/tag/v1.1.7)

<hr class="hr-text" data-content="履歴">

## 過去のリリース

- **v1.1.6** — 内部クリーンアップ、依存関係のバンプ。
- **v1.1.5** — Material パレットを追加。
- **v1.1.0** — Tachyons パレット + グリッドのリファクタリング。
- **v1.0.5** — WCAG 2.2 一括対応前の最後の「レガシー」リリース。
- **v1.0.0** — 初回公開リリース (2018)。

コミットごとの履歴は [GitHub リリースページ ↗](https://github.com/sebastienrousseau/skeletonic-stylus/releases) をご覧ください。
