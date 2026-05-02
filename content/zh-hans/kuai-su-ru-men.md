---
title: "Skeletonic Stylus 快速入门"
name: "Skeletonic Stylus"
description: "通过 npm 或 CDN 安装 Skeletonic Stylus，将其导入到你的 Stylus 构建中，秒级覆盖变量。"
language: zh-hans
layout: page
permalink: https://skeletonic.io/zh-hans/kuai-su-ru-men/
date: 2026-04-08
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "安装 skeletonic, stylus 配置, css cdn, 快速入门"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

## 简介

初次使用 Skeletonic Stylus？在 **v2.0.0** 中，按需选取功能变得前所未有的简单。得益于极小的体积（核心样式表 gzip 后约 7.9&nbsp;KB），它能快速集成到任何 Web 应用——无需 JavaScript 框架，使用 CDN 时也无需构建步骤。

准备好安装了吗？所有路径均在下方说明——选择适合的即可。

## 1. 下载与安装

你可以通过 **pnpm**、**npm** 或 **yarn** 安装 Skeletonic Stylus，也可以直接从 CDN 加载。如果你愿意，还可以将分发文件本地自托管。

### 通过包管理器安装（推荐）

```bash
# pnpm
pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0

# npm
npm install @sebastienrousseau/skeletonic-stylus@2.0.0

# yarn
yarn add @sebastienrousseau/skeletonic-stylus@2.0.0
```

### 通过 CDN 加载

如果你只需要编译后的 CSS，在 `<head>` 中插入以下链接即可：

```html
<!-- jsDelivr -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@2.0.0/css/core/skeletonic.min.css"
  crossorigin="anonymous">

<!-- unpkg -->
<link
  rel="stylesheet"
  href="https://unpkg.com/@sebastienrousseau/skeletonic-stylus@2.0.0/css/core/skeletonic.min.css"
  crossorigin="anonymous">
```

为获得最大完整性保障，请从 v2.0.0 发布说明中复制 **SRI 哈希值**，并添加 `integrity="sha384-…"` 属性。

### 其他 CDN 地址

| CDN | URL | HTTPS | 组合加载 |
|---|---|---|---|
| **jsDelivr** | `https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@2.0.0/css/core/skeletonic.min.css` | 是 | 是 |
| **unpkg** | `https://unpkg.com/@sebastienrousseau/skeletonic-stylus@2.0.0/css/core/skeletonic.min.css` | 是 | 否 |

### 下载 GitHub 发布包

倾向于使用版本化压缩包？从 [github.com/sebastienrousseau/skeletonic-stylus/releases](https://github.com/sebastienrousseau/skeletonic-stylus/releases) 获取最新版本，将 `dist/` 目录的内容直接放入你的项目中。

### 克隆 GitHub 仓库

克隆主仓库以获取所有源文件，包括构建脚本：

```bash
git clone https://github.com/sebastienrousseau/skeletonic-stylus.git
cd skeletonic-stylus
pnpm install
pnpm run build
```

> **提示：** 请签署你的提交——项目在 CI 中强制要求签名提交。
> 使用 `git commit -S -m "..."` 或在全局 git 配置中设置 `commit.gpgsign = true`。

## 2. 使用编译后的 CSS

安装后，库在 `dist/css/` 目录下提供若干预构建包：

| 文件 | 用途 | 体积 (min/gz) |
|---|---|---|
| `core/skeletonic.min.css` | 重置 + 令牌 + 布局 + 元素 + 组件 + 工具类 | 42.3 KB / 7.9 KB |
| `animations/skeletonic-animations.min.css` | 可选动画模块 | 约 18 KB / 约 4 KB |
| `palettes/material/skeletonic-material.min.css` | Material 色板 | 约 8 KB |
| `palettes/tachyons/skeletonic-tachyons.min.css` | Tachyons 工具色板 | 7.3 KB |
| `palettes/websafe/skeletonic-websafe.min.css` | Web 安全色板 | 约 4 KB |

每个模块均独立——选择你需要的最小组合即可。

## 3. 在 Stylus 中使用

如果你已有 Stylus 构建管线，可以导入源模块，让打包工具按需剔除未使用的部分：

```stylus
// styles/main.styl
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/skeletonic'
```

或只导入你需要的模块：

```stylus
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/utilities/variables'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/utilities/mixins'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/elements/buttons'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/components/card'
```

## 4. 覆盖品牌色

Skeletonic 以 **CSS 自定义属性**的形式暴露设计令牌，你无需重新编译 Stylus 即可完成主题定制：

```css
:root {
  --cl-primary:   hsl(210, 100%, 42%);
  --cl-secondary: hsl(195, 100%, 33%);
  --cl-tertiary:  #757c8a;
}
```

就这样——所有使用主色的组件都会跟随变化。

## 5. 验证安装

一个最简"是否安装成功"的检测：

```html
<!doctype html>
<html lang="zh-Hans">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@2.0.0/css/core/skeletonic.min.css">
  </head>
  <body class="container padding-3">
    <h1>安装成功。</h1>
    <a href="#" class="button primary">你好，世界</a>
  </body>
</html>
```

如果标题具有流体字号且按钮呈蓝色胶囊形状，说明安装完成。

## 6. 包含内容

在安装包中，你可以找到所有源文件、编译和压缩后的 CSS 包、Source Map，以及按类别组织的完整 Stylus 目录树：

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
        └── skeletonic.styl  ← 单一入口，导入所有模块
```

每个模块均独立——只引入你需要的包，让 CSS 负载尽可能小。

## 常见问题

**如何安装 Skeletonic Stylus？**
运行 `pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0`。或直接从 CDN 加载编译后的 CSS——无需构建步骤。

**需要 JavaScript 吗？**
不需要。核心样式表是纯 CSS，运行时零开销。所有组件无需任何一行 JS 即可运行。

**支持 WCAG 2.2 吗？**
支持。v2.0.0 默认提供 AA 合规的对比度、focus-visible 焦点环、跳转链接辅助、减弱动效支持和深色模式。

**gzip 后体积是多少？**
42.3&nbsp;KB 压缩后，**gzip 约 7.9&nbsp;KB**，brotli 约 6.8&nbsp;KB（完整核心样式表）。8&nbsp;KB 上限在 CI 中强制执行。

**使用什么许可证？**
双重许可：MIT 和 Apache 2.0——根据项目需要选择。个人和商业用途均免费。

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "如何安装 Skeletonic Stylus？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "运行 pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0。或直接从 CDN 加载编译后的 CSS——无需构建步骤。"
      }
    },
    {
      "@type": "Question",
      "name": "Skeletonic Stylus 需要 JavaScript 吗？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "不需要。核心样式表是纯 CSS，运行时零开销。所有组件无需任何一行 JavaScript 即可运行。"
      }
    },
    {
      "@type": "Question",
      "name": "Skeletonic Stylus 支持 WCAG 2.2 吗？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "支持。v2.0.0 默认提供 AA 合规的对比度、focus-visible 焦点环、跳转链接辅助、减弱动效支持和深色模式。"
      }
    },
    {
      "@type": "Question",
      "name": "Skeletonic Stylus gzip 后体积是多少？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "42.3 KB 压缩后，约 7.9 KB gzip，约 6.8 KB brotli（完整核心样式表）。8 KB 上限在 CI 的每次提交中强制执行。"
      }
    },
    {
      "@type": "Question",
      "name": "Skeletonic Stylus 使用什么许可证？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "双重许可：MIT 和 Apache 2.0——根据项目需要选择。个人和商业用途均免费。"
      }
    }
  ]
}
</script>

[浏览组件 →](/zh-hans/zu-jian/)
