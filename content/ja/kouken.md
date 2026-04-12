---
title: "コントリビューション"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus への Issue の報告、変更の提案、プルリクエストの提出方法。"
layout: page
permalink: https://skeletonic.io/ja/kouken/
date: 2026-04-08
author: Sebastien Rousseau
language: ja
theme_color: "hsl(210, 100%, 42%)"
keywords: "コントリビューション, オープンソース, プルリクエスト, issue, 規約"
---

Skeletonic Stylus はオープンソースプロジェクトです。タイプミスの修正から新しいコンポーネントまで、あらゆる規模のコントリビューションを歓迎します。

<hr class="hr-text" data-content="クイックスタート">

## クイックスタート

```bash
# 1. フォーク＆クローン
git clone git@github.com:YOUR-USER/skeletonic-stylus.git
cd skeletonic-stylus

# 2. インストール（corepack 経由で pnpm を使用）
corepack enable
pnpm install

# 3. ビルド
pnpm run build           # フルパイプライン (stylus → prettier → stylelint → autoprefixer → csso)

# 4. リント＆テスト
pnpm run lint
node scripts/a11y-test.mjs
```

<hr class="hr-text" data-content="規約">

## 規約

- **ブランチ名:** `feat/short-thing`、`fix/short-thing`、`docs/short-thing`。
- **コミット:** [Conventional Commits](https://www.conventionalcommits.org)。すべてのコミットは署名されます。
- **Stylus:** 4スペースインデント、セミコロンなし、マジックナンバーより `$variables` を優先、すべてのパブリッククラスはカスケードレイヤーに配置。
- **アクセシビリティ:** 新しいコンポーネントは WCAG 2.2 AA を実証的に満たす必要があります。PR を開く前に `node scripts/a11y-test.mjs` をショーケースに対して実行してください。
- **サイズバジェット:** コアスタイルシートは **gzip圧縮 8 KB** 以下を維持する必要があります。変更が上限を超える場合は、PR で理由を説明してください。

<hr class="hr-text" data-content="プルリクエスト">

## プルリクエスト

1. 些細でない変更については、まず Issue を開いてください — 手戻りを防げます。
2. PR は焦点を絞ってください：1つの論理的な変更につき1つの PR。
3. 「Unreleased」の下の `CHANGELOG.md` を更新してください。
4. レビューをリクエストする前に CI がグリーンであることを確認してください。
5. スカッシュマージがデフォルトです。マージ時にコミットメッセージが整理されます。

<hr class="hr-text" data-content="行動規範">

## 行動規範

参加することで、[Contributor Covenant 2.1](https://www.contributor-covenant.org/version/2/1/code_of_conduct/) に従うことに同意するものとします。親切に、忍耐強く、善意を前提としてください。

[Issue を開く ↗](https://github.com/sebastienrousseau/skeletonic-stylus/issues) ·
[PR を開く ↗](https://github.com/sebastienrousseau/skeletonic-stylus/pulls)
