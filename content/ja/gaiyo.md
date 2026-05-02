---
title: "Skeletonic Stylus について"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus は、アクセシブルで高速、モジュール式の UI スタイリングのためのオープンソース Stylus CSS ライブラリです。"
layout: page
permalink: https://skeletonic.io/ja/gaiyo/
date: 2026-04-08
author: Sebastien Rousseau
language: ja
theme_color: "hsl(210, 100%, 42%)"
keywords: "skeletonic, 概要, stylus, css フレームワーク, 理念"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

<p class="badges">
  <img alt="GitHub スター数" src="https://img.shields.io/github/stars/sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=Stars" height="28" loading="lazy">
  <img alt="月間ダウンロード数" src="https://img.shields.io/npm/dm/@sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=Downloads" height="28" loading="lazy">
  <img alt="npm バージョン" src="https://img.shields.io/npm/v/@sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=npm" height="28" loading="lazy">
  <img alt="バンドルサイズ" src="https://img.shields.io/badge/gzip-8.0%20KB-brightgreen?style=for-the-badge" height="28" loading="lazy">
  <img alt="ライセンス" src="https://img.shields.io/npm/l/@sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=License" height="28" loading="lazy">
  <img alt="WCAG" src="https://img.shields.io/badge/WCAG-2.2%20AA-2e7d32?style=for-the-badge" height="28" loading="lazy">
</p>

## 概要

**Skeletonic Stylus** は、アクセシブルで高速、モジュール式の UI スタイリングのためのオープンソース [Stylus](https://stylus-lang.com) CSS ライブラリです。

2018年に **少ない CSS を配信する** という個人的な実験として誕生しました。本格的なコンポーネントライブラリの利便性を損なうことなく。8年経った今も、目標は変わっていません。

## Skeletonic が提供するもの

<div class="feature-grid">
  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/thunder.min.svg" alt="稲妻" width="64" height="64" loading="lazy" decoding="async">
    <h3>超高速</h3>
    <p>レスポンシブなインターフェースを数分でデザイン・カスタマイズ。ネイティブ CSS 変数、定義済みクラス、すべてのセマンティック HTML 要素に対応した12カラムグリッド。</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/lightweight.min.svg" alt="羽" width="64" height="64" loading="lazy" decoding="async">
    <h3>軽量</h3>
    <p>gzip圧縮で約8.0&nbsp;KB。ページの読み込みが速くなります。必要なビルディングブロックはすべて含まれています。</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/responsive.min.svg" alt="レスポンシブデバイス" width="64" height="64" loading="lazy" decoding="async">
    <h3>レスポンシブデザイン</h3>
    <p>デスクトップとモバイルのために設計。レイアウトはあらゆるデバイスに適応します。タッチ最適化、全体を通してセマンティック HTML。</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/accessibility.min.svg" alt="アクセシビリティ" width="64" height="64" loading="lazy" decoding="async">
    <h3>アクセシビリティ</h3>
    <p>WCAG&nbsp;2.2 を組み込み済み: focus-visible リング、AA コントラスト、スキップリンクヘルパー、キーボード対応コンポーネント、モーション軽減対応 — 追加のスタイルシートも <code>aria-*</code> ボイラープレートも不要です。</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/components.min.svg" alt="コンポーネントブロック" width="64" height="64" loading="lazy" decoding="async">
    <h3>コンポーネントライブラリ</h3>
    <p>モジュール式 CSS コンポーネントと Stylus ミックスイン。ボタン、フォーム、カード、アラート、バッジ、パレット、アニメーション — クリーンでモジュール式、すぐに使えます。</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/github.min.svg" alt="GitHub マーク" width="64" height="64" loading="lazy" decoding="async">
    <h3>無料＆オープンソース</h3>
    <p>Sebastien Rousseau が設計・開発・保守しています。<strong>MIT</strong> または <strong>Apache&nbsp;2.0</strong> のデュアルライセンス。商用利用を含め、料金もライセンスコストもかかりません。</p>
  </article>
</div>

## 他のフレームワークとの比較

セルフホスト型のスタイルシート1つで、タイポグラフィ、ボタン、フォーム、カード、テーブル、パレット、アニメーション、ユーティリティクラスをカバーします。JavaScript 不要。ビルドステップ不要。Bootstrap、Tailwind、Bulma へのピア依存関係もありません。

| 機能 | Skeletonic Stylus | Bootstrap 5 | Tailwind CSS | Bulma |
|---|---|---|---|---|
| gzip圧縮サイズ | **約8.0&nbsp;KB** | 約30&nbsp;KB | 約10&nbsp;KB (varies) | 約30&nbsp;KB |
| WCAG 2.2 準拠 | **組み込み済み** | 部分的 | 手動 | 部分的 |
| カスケードレイヤー | **対応 (`@layer`)** | 非対応 | 非対応 | 非対応 |
| ダークモード | **`prefers-color-scheme`** | オプトイン | クラスベース | オプトイン |
| JavaScript 必須 | **不要** | 必要 (Popper) | 不要 | 不要 |
| CycloneDX SBOM | **対応** | 非対応 | 非対応 | 非対応 |
| モーション軽減 | **尊重** | 部分的 | 手動 | 部分的 |
| ライセンス | MIT または Apache 2.0 | MIT | MIT | MIT |

## 原則

1. **アクセシビリティは基盤であり、付加機能ではありません。** WCAG 2.2 準拠はすべてのコンポーネントに組み込まれており、「テーマ」として後付けされるものではありません。
2. **1バイトも無駄にしません。** 配信するスタイルシート1つでページ容量の予算を超えるべきではありません。gzip圧縮で8&nbsp;KB の上限が CI で強制されています。
3. **カスケードレイヤーが詳細度の争いに勝ります。** `!important` も DOM 順序のトリックも不要で、確実にオーバーライドできます。
4. **Stylus は今でも優れた選択肢です。** 簡潔で表現力豊かで、ライブラリを約3,000行の読みやすいコードに収められます。
5. **退屈であることは美点です。** JS 依存関係なし。ビルド時のマジックなし。互換性を壊すリネームなし。CSS クラスは名前の通りに動作します。
6. **数秒でテーマ設定可能。** 色、スペーシング、タイポグラフィ、角丸のためのネイティブ CSS カスタムプロパティ。
7. **サプライチェーンの強化。** 署名された npm プロベナンス。固定された Dependabot 更新。CVE-2023-44270 はオーバーライドでパッチ済み。

## バージョニングとセマンティックバージョニング

Skeletonic Stylus は [Semantic Versioning 2.0](https://semver.org) に従います。

| レベル | 変更時期 | 例 |
|---|---|---|
| **メジャー** | パブリッククラス、ミックスイン、またはトークンの削除・リネーム時 | 1.x → 2.0 |
| **マイナー** | 新しいコンポーネント、ミックスイン、またはトークンの追加時 | 1.1 → 1.2 |
| **パッチ** | バグ修正、a11y の改善、パフォーマンス、セキュリティ | 1.1.6 → 2.0.0 |

すべてのパブリッククラス名、すべての CSS カスタムプロパティ、およびすべてのエクスポートされた Stylus ミックスインはパブリック API の一部です。互換性を壊す変更にはメジャーバンプとマイグレーションガイドが付きます。

## 運営

Skeletonic Stylus は [Sebastien Rousseau](https://sebastienrousseau.com) が設計、開発、保守しています。[MIT](https://opensource.org/licenses/MIT) と [Apache 2.0](https://opensource.org/licenses/Apache-2.0) のデュアルライセンスです。

Issue、アイデア、コントリビューションを歓迎します — [コントリビューションガイドをご覧ください](/ja/kouken/)。
