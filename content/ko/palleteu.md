---
title: "팔레트"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus v1.1.7에 포함된 Material, Tachyons 및 웹 안전 색상 팔레트입니다."
layout: page
permalink: https://skeletonic.io/ko/palleteu/
date: 2026-04-08
author: Sebastien Rousseau
language: ko
theme_color: "hsl(210, 100%, 42%)"
keywords: "css 팔레트, material, tachyons, 웹 안전, 디자인 토큰"
---

Skeletonic Stylus v1.1.7은 **3가지 선택적 색상 팔레트**를 제공하며, 각각 독립된 최소화 스타일시트로 배포되므로 사용하는 것만 로드하면 됩니다.

| 팔레트 | 파일 | 크기 (min) |
|---|---|---|
| Material | `dist/css/palettes/material/skeletonic-material.min.css` | 약 8 KB |
| Tachyons | `dist/css/palettes/tachyons/skeletonic-tachyons.min.css` | 7.3 KB |
| 웹 안전 | `dist/css/palettes/websafe/skeletonic-websafe.min.css` | 약 4 KB |

이 페이지는 **Tachyons** 팔레트를 로드하고 있으므로 아래의 색상 유틸리티 클래스가 올바르게 렌더링됩니다.

<hr class="hr-text" data-content="그레이">

## Skeletonic 코어 그레이

코어 스타일시트는 `--cl-grey-100` … `--cl-grey-1000`으로 노출되는 접근성 높은 11단계 그레이 스케일을 제공합니다.

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

<hr class="hr-text" data-content="브랜드">

## 브랜드 색상 (v1.1.7 — AA 대비)

v1.1.7에서 주 색상과 보조 색상 토큰이 흰색 텍스트에 대해 **WCAG 4.5:1** 대비를 기본으로 충족하도록 어둡게 조정되었습니다.

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

> **참고.** `--cl-tertiary` (#757c8a)는 흰색 대비 4.71:1의 대비율을
> 달성합니다. **큰 텍스트**(≥ 18 px 굵게 / ≥ 24 px 일반)에는
> AA 준수이지만 본문 텍스트에는 적합하지 않습니다. 어두운 배경과
> 조합하거나 비필수 장식 요소에만 사용하십시오.

<hr class="hr-text" data-content="Tachyons">

## Tachyons 팔레트 유틸리티 클래스

`skeletonic-tachyons.min.css`를 로드하면 단일 목적 색상 클래스의 전체 세트를 사용할 수 있습니다. 동일한 배포 산출물이며, 선택적 모듈입니다.

```html
<span class="bg-blue white pa2">.bg-blue .white</span>
<span class="bg-light-green dark-green pa2">.bg-light-green .dark-green</span>
<span class="bg-washed-yellow dark-gray pa2">.bg-washed-yellow .dark-gray</span>
```

전체 Tachyons 팔레트 사양은
[tachyons.io/docs/themes/skins](https://tachyons.io/docs/themes/skins/)에서 문서화되어 있으며, 여기에 포함된 버전은 Skeletonic이 컴파일한 버전입니다.

[구성 요소로 돌아가기 →](/ko/kuseong-yoso/)
