---
title: "コンポーネント"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus の全コンポーネントのライブ HTML サンプル。グループ化、アンカー付き、デモ対象のスタイルシートでレンダリングされています。"
layout: page
permalink: https://skeletonic.io/ja/konponentsu/
date: 2026-04-08
author: Sebastien Rousseau
language: ja
theme_color: "hsl(210, 100%, 42%)"
keywords: "skeletonic コンポーネント, ボタン, カード, フォーム, アラート, バッジ, ヘッダー, ナビバー, css ハンバーガー"
---

以下のすべてのサンプルは、**デモ対象のスタイルシートそのもの** でレンダリングされています。プリプロセッサ不要。JavaScript 不要。追加の依存関係不要。どのスニペットも新しい HTML ファイルにコピーするだけで動作します。

<nav aria-label="このページの内容">
<p><strong>このページの内容</strong></p>
<ul>
<li><strong>入力</strong> — <a href="#buttons">ボタン</a> · <a href="#badges">バッジ</a></li>
<li><strong>フィードバック</strong> — <a href="#alerts">アラート</a></li>
<li><strong>サーフェス</strong> — <a href="#cards">カード</a></li>
<li><strong>フォーム</strong> — <a href="#form-fields">フォームフィールド</a></li>
<li><strong>レイアウト</strong> — <a href="#grid">グリッド</a> · <a href="#header">ヘッダーとハンバーガーナビ</a></li>
</ul>
</nav>

<hr class="hr-text" data-content="入力">

<h2 id="inputs">入力</h2>

訪問者がクリック、タップ、またはフォーカスしてページを操作するインタラクティブ要素です。

<h3 id="buttons">ボタン</h3>

セマンティックでテーマ設定可能なアクショントリガーです。ソリッドとアウトラインのバリアントがそれぞれ6つのブランドカラーで提供されます。

```html
<a href="#" class="button primary">Primary</a>
<a href="#" class="button secondary">Secondary</a>
<a href="#" class="button tertiary">Tertiary</a>
```

<section aria-labelledby="buttons">
<p>
  <a href="#" class="button primary">Primary</a>
  <a href="#" class="button secondary">Secondary</a>
  <a href="#" class="button tertiary">Tertiary</a>
</p>
</section>

アウトラインバリアント：

```html
<a href="#" class="button primary-outline">Outline</a>
<a href="#" class="button secondary-outline">Outline</a>
```

<p>
  <a href="#" class="button primary-outline">Outline</a>
  <a href="#" class="button secondary-outline">Outline</a>
</p>

> **アクセシビリティに関する注記。** すべての `.button` バリアントには `:focus-visible` リングと **24×24&nbsp;px の最小ヒットエリア** (WCAG&nbsp;2.2 SC&nbsp;2.5.8) が備わっています。ページ内のアクションには `<button type="button">` を、ナビゲーションには `<a href>` のみを使用してください。

<h3 id="badges">バッジ</h3>

ステータス、カウント、カテゴリ用のコンパクトなラベルです。テキストサイズは固定されているため、バッジは周囲のテキストと揃います。

```html
<span class="badge">Default</span>
<span class="badge primary">Primary</span>
<span class="badge success">Success</span>
<span class="badge warning">Warning</span>
<span class="badge danger">Danger</span>
```

<section aria-labelledby="badges">
<p>
  <span class="badge">Default</span>
  <span class="badge primary">Primary</span>
  <span class="badge success">Success</span>
  <span class="badge warning">Warning</span>
  <span class="badge danger">Danger</span>
</p>
</section>

> **アクセシビリティに関する注記。** バッジはデフォルトで装飾的です。バッジが唯一のシグナル（例：未読数）を伝える場合は、視覚的に隠されたヘルパーでラップしてください：`<span class="visually-hidden">未読メッセージ3件</span>`。

<hr class="hr-text" data-content="フィードバック">

<h2 id="feedback">フィードバック</h2>

訪問者に何かが起こった、または起こりそうであることを伝えるサーフェスです。

<h3 id="alerts">アラート</h3>

セマンティックな意図を持つステータスメッセージです。**v1.1.7 ではすべてのバリアントが `.alert-{primary,secondary,info,success,warning,error}` の下に明示的に名前空間化されている** ため、バリアントクラスがページ上の他のステートクラスと衝突することはありません。

```html
<div class="alert alert-primary" role="alert">
  <strong>お知らせ。</strong> これはプライマリアラートです。
</div>
<div class="alert alert-success" role="status">
  <strong>保存完了。</strong> 変更が保存されました。
</div>
<div class="alert alert-warning" role="alert">
  <strong>注意。</strong> この操作は共有状態に影響します。
</div>
<div class="alert alert-error" role="alert">
  <strong>エラー。</strong> フォームを保存できませんでした。
</div>
```

<section aria-labelledby="alerts">
<div class="alert alert-primary" role="alert">
<strong>お知らせ。</strong> これはプライマリアラートです。
</div>

<div class="alert alert-success" role="status">
<strong>保存完了。</strong> 変更が保存されました。
</div>

<div class="alert alert-warning" role="alert">
<strong>注意。</strong> この操作は共有状態に影響します。
</div>

<div class="alert alert-error" role="alert">
<strong>エラー。</strong> フォームを保存できませんでした。
</div>
</section>

> **アクセシビリティに関する注記。** 即時の注意が必要なメッセージ（エラー、警告）には `role="alert"` を、緊急でない確認には `role="status"` を使用してください。どちらもメッセージが表示された瞬間に支援技術に公開されます。

<hr class="hr-text" data-content="サーフェス">

<h2 id="surface">サーフェス</h2>

関連するコンテンツをフレーム化し、グループ化するコンテナです。

<h3 id="cards">カード</h3>

単一のまとまったユニット用のボーダー付きパディングコンテナです。`flex-N` グリッドと組み合わせてレスポンシブなカードウォールを作成できます。

```html
<section class="row">
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">軽量</h3>
      <p>ミニファイ済み 39.9 KB、gzip圧縮 7.5 KB。</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">アクセシブル</h3>
      <p>WCAG 2.2 準拠。そのまま使えます。</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">モジュール式</h3>
      <p>カスケードレイヤーで簡単にオーバーライド。</p>
    </div>
  </article>
</section>
```

<section class="row" aria-labelledby="cards">
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">軽量</h3>
      <p>ミニファイ済み 39.9&nbsp;KB、gzip圧縮 7.5&nbsp;KB。</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">アクセシブル</h3>
      <p>WCAG&nbsp;2.2 準拠。そのまま使えます。</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">モジュール式</h3>
      <p>カスケードレイヤーで簡単にオーバーライド。</p>
    </div>
  </article>
</section>

> **アクセシビリティに関する注記。** 各カードをセマンティックなランドマーク（`<article>`、`<section>`）でラップし、コンテンツを見出し（`<h3>`）で始めてください。スクリーンリーダーのユーザーは、カードリストをファーストクラスのナビゲーション可能な領域として移動できます。

<hr class="hr-text" data-content="フォーム">

<h2 id="forms">フォーム</h2>

ユーザーデータを収集するための入力、ラベル、グループ化です。

<h3 id="form-fields">フォームフィールド</h3>

ラベル、テキスト入力、テキストエリア、フィールドセット、レジェンド — すべてデザインシステムの他の部分と一貫したサイズで提供されます。

```html
<form>
  <label for="name">お名前</label>
  <input id="name" type="text" required>

  <label for="email">メールアドレス</label>
  <input id="email" type="email" required class="input-primary">

  <label for="msg">メッセージ</label>
  <textarea id="msg" rows="4"></textarea>

  <button type="submit" class="button primary">送信</button>
</form>
```

<section aria-labelledby="form-fields">
<form>
  <label for="demo-name">お名前</label>
  <input id="demo-name" type="text">

  <label for="demo-email">メールアドレス</label>
  <input id="demo-email" type="email" class="input-primary">

  <label for="demo-msg">メッセージ</label>
  <textarea id="demo-msg" rows="4"></textarea>

  <p><button type="button" class="button primary">送信（デモ）</button></p>
</form>
</section>

> **アクセシビリティに関する注記。** すべての入力にはプログラム的に関連付けられた `<label for="…">` が必要です。関連するコントロールは `<fieldset>` と `<legend>` でグループ化してください。必須フィールドは `required` 属性（およびラベルテキスト内の目に見えるアスタリスク）で示してください。

<hr class="hr-text" data-content="レイアウト">

<h2 id="layout">レイアウト</h2>

グリッド、コンテナ、ヘッダーなど、ページ全体の構造を形成する構造プリミティブです。

<h3 id="grid">グリッド</h3>

flexbox ベースのレスポンシブ `flex-N` グリッド（1 → 12カラム）。`.row` 親要素がギャップとラップを自動的に処理します。

```html
<div class="row">
  <div class="flex-6">半分</div>
  <div class="flex-6">半分</div>
</div>
<div class="row">
  <div class="flex-4">3分の1</div>
  <div class="flex-4">3分の1</div>
  <div class="flex-4">3分の1</div>
</div>
```

<section aria-labelledby="grid">
<div style="display:flex;flex-wrap:wrap;gap:.5rem;">
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">半分</div>
  <div style="flex:1 1 0;padding:.75rem;background:#e4e4e7;border-radius:.25rem;text-align:center;">半分</div>
</div>

<div style="display:flex;flex-wrap:wrap;gap:.5rem;margin-top:.5rem;">
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">3分の1</div>
  <div style="flex:1 1 0;padding:.75rem;background:#e4e4e7;border-radius:.25rem;text-align:center;">3分の1</div>
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">3分の1</div>
</div>
</section>

> **アクセシビリティに関する注記。** 視覚的な順序は DOM の順序と一致させてください。`flex-direction: row-reverse` や `order:` で行を並び替えるのは避けてください — スクリーンリーダーとキーボードユーザーは描画ではなくソースに従います。

<h3 id="header">ヘッダーとハンバーガーナビ</h3>

レスポンシブなハンバーガートグル付きの完全な CSS のみのヘッダーです。**JavaScript ゼロ。** 以下のスニペットを、既に `skeletonic.min.css` を読み込んでいる新しい HTML ページにコピーするだけで、メニューが正しく折りたたみ、展開、フォーカストラップを行います。

```html
<style>
  .sk-header{position:relative;display:flex;align-items:center;gap:1rem;padding:.75rem 1rem;border:1px solid #e4e4e7;border-radius:.5rem;background:#fff;}
  .sk-header .sk-brand{font-weight:600;color:#0a0a0a;text-decoration:none;}
  .sk-header .sk-toggle{position:absolute;left:-9999px;}
  .sk-header .sk-burger{display:none;margin-left:auto;cursor:pointer;padding:.625rem .75rem;border:1px solid #e4e4e7;border-radius:.375rem;font-size:1.125rem;line-height:1;min-width:2.75rem;min-height:2.75rem;}
  .sk-header .sk-burger:focus-within,.sk-header .sk-toggle:focus-visible+.sk-burger{outline:2px solid hsl(210,100%,42%);outline-offset:2px;}
  .sk-header .sk-menu{list-style:none;display:flex;gap:.25rem;margin:0 0 0 auto;padding:0;}
  .sk-header .sk-menu a{display:inline-flex;align-items:center;min-height:2.75rem;padding:.5rem .875rem;border-radius:.375rem;color:#1a1a1a;text-decoration:none;}
  .sk-header .sk-menu a:hover{background:#f4f4f5;}
  @media (max-width:640px){
    .sk-header .sk-burger{display:inline-flex;align-items:center;justify-content:center;}
    .sk-header .sk-menu{display:none;flex-direction:column;gap:0;position:absolute;top:calc(100% + .25rem);left:0;right:0;background:#fff;border:1px solid #e4e4e7;border-radius:.5rem;padding:.375rem;box-shadow:0 4px 24px rgba(0,0,0,.08);z-index:10;}
    .sk-header .sk-menu a{padding:.75rem 1rem;border-bottom:1px solid #f4f4f5;}
    .sk-header .sk-menu li:last-child a{border-bottom:0;}
    .sk-header .sk-toggle:checked ~ .sk-menu{display:flex;}
  }
</style>
<header class="sk-header">
  <a class="sk-brand" href="#">ブランド</a>
  <input class="sk-toggle" id="sk-nav-toggle" type="checkbox" aria-label="ナビゲーション切替">
  <label class="sk-burger" for="sk-nav-toggle" aria-hidden="true">☰</label>
  <ul class="sk-menu">
    <li><a href="#">ホーム</a></li>
    <li><a href="#">ドキュメント</a></li>
    <li><a href="#">コンポーネント</a></li>
    <li><a href="#">概要</a></li>
  </ul>
</header>
```

<section aria-labelledby="header">
<style>
  .sk-header{position:relative;display:flex;align-items:center;gap:1rem;padding:.75rem 1rem;border:1px solid #e4e4e7;border-radius:.5rem;background:#fff;}
  .sk-header .sk-brand{font-weight:600;color:#0a0a0a;text-decoration:none;}
  .sk-header .sk-toggle{position:absolute;left:-9999px;}
  .sk-header .sk-burger{display:none;margin-left:auto;cursor:pointer;padding:.625rem .75rem;border:1px solid #e4e4e7;border-radius:.375rem;font-size:1.125rem;line-height:1;min-width:2.75rem;min-height:2.75rem;}
  .sk-header .sk-burger:focus-within,.sk-header .sk-toggle:focus-visible+.sk-burger{outline:2px solid hsl(210,100%,42%);outline-offset:2px;}
  .sk-header .sk-menu{list-style:none;display:flex;gap:.25rem;margin:0 0 0 auto;padding:0;}
  .sk-header .sk-menu a{display:inline-flex;align-items:center;min-height:2.75rem;padding:.5rem .875rem;border-radius:.375rem;color:#1a1a1a;text-decoration:none;}
  .sk-header .sk-menu a:hover{background:#f4f4f5;}
  @media (max-width:640px){
    .sk-header .sk-burger{display:inline-flex;align-items:center;justify-content:center;}
    .sk-header .sk-menu{display:none;flex-direction:column;gap:0;position:absolute;top:calc(100% + .25rem);left:0;right:0;background:#fff;border:1px solid #e4e4e7;border-radius:.5rem;padding:.375rem;box-shadow:0 4px 24px rgba(0,0,0,.08);z-index:10;}
    .sk-header .sk-menu a{padding:.75rem 1rem;border-bottom:1px solid #f4f4f5;}
    .sk-header .sk-menu li:last-child a{border-bottom:0;}
    .sk-header .sk-toggle:checked ~ .sk-menu{display:flex;}
  }
</style>
<header class="sk-header">
  <a class="sk-brand" href="#">ブランド</a>
  <input class="sk-toggle" id="sk-nav-toggle" type="checkbox" aria-label="ナビゲーション切替">
  <label class="sk-burger" for="sk-nav-toggle" aria-hidden="true">☰</label>
  <ul class="sk-menu">
    <li><a href="#">ホーム</a></li>
    <li><a href="#">ドキュメント</a></li>
    <li><a href="#">コンポーネント</a></li>
    <li><a href="#">概要</a></li>
  </ul>
</header>
</section>

> **アクセシビリティに関する注記。** 非表示のチェックボックスはタブ順序に残るため、キーボードユーザーは `Space` または `Enter` でメニューを開けます。`<label>` はチェックボックス自体がアクセシブルな名前のソースであるため `aria-hidden` を持ちます。ウィンドウを640&nbsp;px以下に縮小すると、ハンバーガートグルが表示されます。

[a11y の詳細を見る →](/ja/akseshibirithi/) · [パレットを見る →](/ja/paretto/)

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Skeletonic Stylus コンポーネント",
  "description": "Skeletonic Stylus v1.1.7 に含まれるすべてのコンポーネント。",
  "itemListOrder": "https://schema.org/ItemListOrderAscending",
  "numberOfItems": 7,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "ボタン",
      "url": "https://skeletonic.io/ja/konponentsu/#buttons"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "バッジ",
      "url": "https://skeletonic.io/ja/konponentsu/#badges"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "アラート",
      "url": "https://skeletonic.io/ja/konponentsu/#alerts"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "カード",
      "url": "https://skeletonic.io/ja/konponentsu/#cards"
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "フォームフィールド",
      "url": "https://skeletonic.io/ja/konponentsu/#form-fields"
    },
    {
      "@type": "ListItem",
      "position": 6,
      "name": "グリッド",
      "url": "https://skeletonic.io/ja/konponentsu/#grid"
    },
    {
      "@type": "ListItem",
      "position": 7,
      "name": "ヘッダーとハンバーガーナビ",
      "url": "https://skeletonic.io/ja/konponentsu/#header"
    }
  ]
}
</script>
