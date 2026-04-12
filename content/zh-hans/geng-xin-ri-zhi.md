---
title: "更新日志"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus 发布说明，包含 v1.1.7 完整详情。"
language: zh-hans
layout: page
permalink: https://skeletonic.io/zh-hans/geng-xin-ri-zhi/
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "skeletonic 更新日志, 发布说明, v1.1.7, semver"
---

## v1.1.7 — 2026-04（当前版本）

"发布就绪"审查：无障碍、供应链、仓库整理。

### 无障碍（WCAG 2.2）
- **`$primary` 加深**至 `hsl(210, 100%, 42%)`，满足按钮/徽章/链接中白色文本的 AA 对比度。
- **`$secondary` 加深**至 `hsl(195, 100%, 33%)`。
- 为每个交互元素添加 **focus-visible** 焦点环。
- 为动画模块添加 **`@media (prefers-reduced-motion)`** 包裹。
- 添加 **`prefers-color-scheme: dark`** 令牌切换。
- 添加 **target-size(24px)** 混入以满足 WCAG 2.2 SC 2.5.8。
- 添加 **focus-not-obscured** scroll-margin 辅助，用于固定页头。

### 构建与供应链
- **级联层** — 每个块现在都位于 `@layer skeletonic.{reset,tokens,layout,elements,components,utilities}` 中。
- **CycloneDX SBOM** 作为 npm 压缩包的一部分生成。
- **`size-limit` 预算** 在 CI 中强制执行：核心样式表 8 KB gzip 上限。
- **CVE-2023-44270**（postcss 换行）通过 `pnpm.overrides` 修补。
- npm 发布工作流启用来源验证与签名（`--provenance --access public`）。
- 从代码检查配置中移除已归档的 `stylelint-a11y` 插件。

### 仓库整理与消费者包
- 移除遗留 `package/` 目录；`dist/` 现在是消费者的唯一来源。
- README 重写以反映 v1.1.7 安装路径。
- `dist/` 已提交；`debug/` 按需生成并 gitignore。
- 新的 `.github/workflows/npm-publish.yml` 基于标签驱动。

### Bug 修复（P0）
- **`row $:after` 父选择器回归** — 将 `src/stylus/components/_grid.styl` 中错误的 `$` 替换为 `&`。
- **`.alternate`** 错误地应用了 `animation-direction: reverse` 而非 `alternate`。
- **`.alert-*` 命名空间** — `.alert.success` → `.alert.alert-success`，避免与状态类冲突。

[GitHub 上的完整 v1.1.7 发布说明 ↗](https://github.com/sebastienrousseau/skeletonic-stylus/releases/tag/v1.1.7)

<hr class="hr-text" data-content="历史版本">

## 历史版本

- **v1.1.6** — 内部清理，依赖更新。
- **v1.1.5** — 新增 Material 色板。
- **v1.1.0** — Tachyons 色板 + 栅格重构。
- **v1.0.5** — WCAG 2.2 全面审查前的最后一个"遗留"版本。
- **v1.0.0** — 首个公开发布（2018）。

逐提交历史请查看 [GitHub Releases 页面 ↗](https://github.com/sebastienrousseau/skeletonic-stylus/releases)。
