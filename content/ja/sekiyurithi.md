---
title: "セキュリティとサプライチェーン"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus v1.1.7 がビルドパイプラインをどのように保護し、リリースに署名し、SBOM を提供するかについて。"
layout: page
permalink: https://skeletonic.io/ja/sekiyurithi/
date: 2026-04-08
author: Sebastien Rousseau
language: ja
theme_color: "hsl(210, 100%, 42%)"
keywords: "css セキュリティ, sbom, cyclonedx, npm プロベナンス, openssf スコアカード, サプライチェーン"
---

## パフォーマンス

- フルコアスタイルシートで **ミニファイ済み 45.7&nbsp;KB · gzip圧縮 8.3&nbsp;KB · brotli 6.9&nbsp;KB**。
- **JavaScript ゼロ** — 純粋な Stylus → 純粋な CSS、ランタイムコストなし。
- **カスケードレイヤー採用** — `!important` なしでオーバーライドが優先されます。
- **`size-limit` バジェット** がすべてのコミットで CI により強制されます。

パフォーマンスはセキュリティコントロールです。配信しないバイトは、監査、署名、検証が不要なバイトです。

## サプライチェーンの要約

| 対策 | v1.1.7 のステータス |
|---|---|
| **CycloneDX SBOM** | リリースごとに生成、`dist/sbom.json` にコミット |
| **npm プロベナンス** | 有効 (`--provenance --access public`) |
| **署名済み git タグ** | メンテナーキーで SSH 署名 |
| **固定された Dependabot** | 週次バンプ、自動レビュー |
| **サイズバジェット** | `size-limit` gzip圧縮 8 KB 上限、回帰で CI が失敗 |
| **リント** | `stylelint` + a11y アサーションを毎プッシュ |
| **CodeQL** | `javascript` と設定ファイルに対して有効 |
| **CVE-2023-44270** | `pnpm.overrides` で `postcss@7` をフラッシュして **パッチ済み** |

<hr class="hr-text" data-content="SBOM">

## CycloneDX SBOM

公開されるすべての tarball には `dist/sbom.json` に CycloneDX SBOM が含まれています。新しくインストールしたパッケージを以下のコマンドで確認できます：

```bash
pnpm add @sebastienrousseau/skeletonic-stylus@1.1.7
jq '.metadata.component.version' \
  node_modules/@sebastienrousseau/skeletonic-stylus/dist/sbom.json
# → "1.1.7"
```

SBOM は公開ワークフロー中に `cyclonedx-npm` で生成されます。

<hr class="hr-text" data-content="プロベナンス">

## npm プロベナンス

公開されたアーティファクトは [npm パッケージプロベナンス](https://docs.npmjs.com/generating-provenance-statements) を使用して署名されています。

インストール後、以下のコマンドで確認できます：

```bash
npm view @sebastienrousseau/skeletonic-stylus@1.1.7 --json | \
  jq '.dist."npm-signature"'
```

署名された証明は、tarball をそれを生成した正確な GitHub Actions 実行に紐づけます。

<hr class="hr-text" data-content="CVE">

## 既知の CVE とパッチ

| CVE | 深刻度 | ステータス |
|---|---|---|
| **CVE-2023-44270** (postcss 改行パーシング) | 中 | `pnpm.overrides` で `postcss` を 8.4.31 以上にアップグレードして v1.1.7 で **パッチ済み** |

Snyk アドバイザリデータベースと GitHub Security Advisories フィードが継続的に監視されています。セキュリティパッチは **パッチレベルリリース** として配信されます。

<hr class="hr-text" data-content="報告">

## 脆弱性の報告

セキュリティレポートに関して、公開 GitHub Issue を作成 **しないでください**。代わりに、以下のプライベートチャネルを使用してください：

> [github.com/sebastienrousseau/skeletonic-stylus/security/advisories/new](https://github.com/sebastienrousseau/skeletonic-stylus/security/advisories/new)

報告は **72時間以内** に確認されます。中程度の問題には **14日以内**、重大な問題には **48時間以内** に修正が配信されます。

[ホームに戻る →](/ja/) · [変更履歴を読む →](/ja/henkou-rireki/)
