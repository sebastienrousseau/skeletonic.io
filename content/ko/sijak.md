---
title: "Skeletonic Stylus 시작하기"
name: "Skeletonic Stylus"
description: "npm 또는 CDN에서 Skeletonic Stylus를 설치하고 Stylus 빌드에 가져온 후 몇 초 만에 변수를 재정의하는 방법을 안내합니다."
layout: page
permalink: https://skeletonic.io/ko/sijak/
date: 2026-04-08
author: Sebastien Rousseau
language: ko
theme_color: "hsl(210, 100%, 42%)"
keywords: "skeletonic 설치, stylus 설정, css cdn, 시작하기"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

## 소개

Skeletonic Stylus를 처음 사용하시나요? **v2.0.0**에서는 필요한 기능만 선택하는 것이 그 어느 때보다 쉬워졌습니다. 작은 크기(코어 스타일시트 약 7.9&nbsp;KB gzipped) 덕분에 어떤 웹 앱에든 빠르게 통합할 수 있습니다. JavaScript 프레임워크 불필요, CDN 사용 시 빌드 단계도 불필요합니다.

아래에 모든 경로가 설명되어 있습니다. 필요한 것을 선택하십시오.

## 1. 다운로드 및 설치

**pnpm**, **npm** 또는 **yarn**을 통해 Skeletonic Stylus를 설치하거나 CDN에서 직접 로드할 수 있습니다. 원하시면 배포 파일을 로컬에 직접 호스팅할 수도 있습니다.

### 패키지 관리자를 통한 설치 (권장)

```bash
# pnpm
pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0

# npm
npm install @sebastienrousseau/skeletonic-stylus@2.0.0

# yarn
yarn add @sebastienrousseau/skeletonic-stylus@2.0.0
```

### CDN을 통한 설치

컴파일된 CSS만 필요한 경우, 아래 중 하나를 `<head>`에 추가하십시오:

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

최대한의 무결성을 위해 v2.0.0 릴리스 노트에서 **SRI 해시**를 복사하여 `integrity="sha384-…"` 속성을 추가하십시오.

### 대체 CDN 경로

| CDN | URL | HTTPS | Combo |
|---|---|---|---|
| **jsDelivr** | `https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@2.0.0/css/core/skeletonic.min.css` | 예 | 예 |
| **unpkg** | `https://unpkg.com/@sebastienrousseau/skeletonic-stylus@2.0.0/css/core/skeletonic.min.css` | 예 | 아니오 |

### GitHub 릴리스 다운로드

버전별 tarball을 원하시면
[github.com/sebastienrousseau/skeletonic-stylus/releases](https://github.com/sebastienrousseau/skeletonic-stylus/releases)에서 최신 릴리스를 다운로드하고 `dist/` 내용을 프로젝트에 직접 복사하십시오.

### GitHub 저장소 클론

모든 소스 파일과 빌드 스크립트를 포함한 메인 저장소를 클론하십시오:

```bash
git clone https://github.com/sebastienrousseau/skeletonic-stylus.git
cd skeletonic-stylus
pnpm install
pnpm run build
```

> **팁:** 커밋에 서명하십시오. 이 프로젝트는 CI에서 서명된 커밋을 요구합니다. `git commit -S -m "..."`을 사용하거나 글로벌 Git 설정에서 `commit.gpgsign = true`를 설정하십시오.

## 2. 컴파일된 CSS 사용

설치 후 `dist/css/` 아래에 여러 사전 빌드된 번들이 포함되어 있습니다:

| 파일 | 용도 | 크기 (min/gz) |
|---|---|---|
| `core/skeletonic.min.css` | 리셋 + 토큰 + 레이아웃 + 요소 + 구성 요소 + 유틸리티 | 42.3 KB / 7.9 KB |
| `animations/skeletonic-animations.min.css` | 선택적 애니메이션 모듈 | 약 18 KB / 약 4 KB |
| `palettes/material/skeletonic-material.min.css` | Material 색상 팔레트 | 약 8 KB |
| `palettes/tachyons/skeletonic-tachyons.min.css` | Tachyons 유틸리티 팔레트 | 7.3 KB |
| `palettes/websafe/skeletonic-websafe.min.css` | 웹 안전 팔레트 | 약 4 KB |

각 모듈은 독립적입니다. 필요한 최소 조합을 선택하십시오.

## 3. Stylus에서 사용

이미 Stylus 파이프라인이 있다면 소스 모듈을 가져와 번들러가 사용하지 않는 부분을 트리 쉐이킹하도록 할 수 있습니다:

```stylus
// styles/main.styl
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/skeletonic'
```

또는 필요한 부분만 선택적으로 가져올 수 있습니다:

```stylus
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/utilities/variables'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/utilities/mixins'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/elements/buttons'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/components/card'
```

## 4. 브랜드 색상 재정의

Skeletonic은 디자인 토큰을 **CSS 커스텀 속성**으로 노출하므로 Stylus를 다시 컴파일하지 않고도 테마를 적용할 수 있습니다:

```css
:root {
  --cl-primary:   hsl(210, 100%, 42%);
  --cl-secondary: hsl(195, 100%, 33%);
  --cl-tertiary:  #757c8a;
}
```

그것으로 끝입니다. 주 색상을 사용하는 모든 구성 요소가 자동으로 따라갑니다.

## 5. 설치 확인

최소한의 동작 확인 테스트:

```html
<!doctype html>
<html lang="ko">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@2.0.0/css/core/skeletonic.min.css">
  </head>
  <body class="container padding-3">
    <h1>작동합니다.</h1>
    <a href="#" class="button primary">안녕하세요</a>
  </body>
</html>
```

제목이 유동적으로 크기 조절되고 버튼이 파란색 알약 모양이라면 설정이 완료된 것입니다.

## 6. 포함 내용

패키지에는 모든 소스 파일, 컴파일 및 최소화된 CSS 번들, 소스 맵, 카테고리별로 구성된 전체 Stylus 트리가 포함되어 있습니다:

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
        └── skeletonic.styl  ← 모든 것을 가져오는 단일 임포트
```

각 모듈은 독립적입니다. 필요한 번들만 포함하여 CSS 페이로드를 최소한으로 유지하십시오.

## 자주 묻는 질문

**Skeletonic Stylus는 어떻게 설치합니까?**
`pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0`을 실행하십시오. 또는 컴파일된 CSS를 CDN에서 직접 로드할 수 있습니다. 빌드 단계가 필요하지 않습니다.

**JavaScript가 필요합니까?**
아닙니다. 코어 스타일시트는 순수 CSS이며 런타임 비용이 없습니다. 모든 구성 요소가 JavaScript 한 줄 없이 작동합니다.

**WCAG 2.2을 준수합니까?**
예. v2.0.0은 AA 준수 대비, focus-visible 링, 스킵 링크 도우미, 모션 감소 지원 및 다크 모드를 기본으로 제공합니다.

**gzipped 크기는 얼마입니까?**
42.3&nbsp;KB 최소화, **약 7.9&nbsp;KB gzipped**, 약 6.8&nbsp;KB brotli (전체 코어 스타일시트 기준). 8&nbsp;KB 상한선이 CI에서 매 커밋마다 적용됩니다.

**어떤 라이선스를 사용합니까?**
MIT와 Apache 2.0 이중 라이선스입니다. 프로젝트에 적합한 라이선스를 선택하십시오. 상업적 및 개인적 용도 모두 무료입니다.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Skeletonic Stylus는 어떻게 설치합니까?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0을 실행하십시오. 또는 컴파일된 CSS를 CDN에서 직접 로드할 수 있습니다. 빌드 단계가 필요하지 않습니다."
      }
    },
    {
      "@type": "Question",
      "name": "Skeletonic Stylus에 JavaScript가 필요합니까?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "아닙니다. 코어 스타일시트는 순수 CSS이며 런타임 비용이 없습니다. 모든 구성 요소가 JavaScript 한 줄 없이 작동합니다."
      }
    },
    {
      "@type": "Question",
      "name": "Skeletonic Stylus는 WCAG 2.2을 준수합니까?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "예. v2.0.0은 AA 준수 대비, focus-visible 링, 스킵 링크 도우미, 모션 감소 지원 및 다크 모드를 기본으로 제공합니다."
      }
    },
    {
      "@type": "Question",
      "name": "Skeletonic Stylus의 gzipped 크기는 얼마입니까?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "42.3 KB 최소화, 약 7.9 KB gzipped, 약 6.8 KB brotli (전체 코어 스타일시트 기준). 8 KB 상한선이 CI에서 매 커밋마다 적용됩니다."
      }
    },
    {
      "@type": "Question",
      "name": "Skeletonic Stylus는 어떤 라이선스를 사용합니까?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "MIT와 Apache 2.0 이중 라이선스입니다. 프로젝트에 적합한 라이선스를 선택하십시오. 상업적 및 개인적 용도 모두 무료입니다."
      }
    }
  ]
}
</script>

[구성 요소 둘러보기 →](/ko/kuseong-yoso/)
