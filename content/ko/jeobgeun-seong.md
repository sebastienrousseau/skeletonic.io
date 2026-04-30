---
title: "접근성 — v1.1.7의 WCAG 2.2"
name: "Skeletonic Stylus"
description: "v1.1.7이 WCAG 2.2 준수를 위해 기본 제공하는 기능 — 포커스 링, 대비, 스킵 링크, 모션 및 다크 모드."
layout: page
permalink: https://skeletonic.io/ko/jeobgeun-seong/
date: 2026-04-08
author: Sebastien Rousseau
language: ko
theme_color: "hsl(210, 100%, 42%)"
keywords: "wcag 2.2, 접근성, focus visible, 스킵 링크, prefers reduced motion, 대비"
---

> **Translation note (2026-04-30).** v1.1.7 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

> **Skeletonic Stylus v1.1.7은 WCAG 2.2 준수를 선택적 테마가 아닌 기본 동작으로 제공합니다.** 이 페이지에서는 기본 제공 기능과 더 세밀한 제어를 위해 선택할 수 있는 믹스인을 설명합니다.

<hr class="hr-text" data-content="기본 제공">

## 기본으로 제공되는 기능

| WCAG 2.2 SC | v1.1.7의 대응 | 확인 방법 |
|---|---|---|
| **1.4.3 대비 (최소) — AA** | `--cl-primary` 및 `--cl-secondary`가 흰색 대비 4.5:1 이상으로 어둡게 조정됨 | DevTools → 대비 검사기 |
| **1.4.11 비텍스트 대비 — AA** | 폼 테두리, 버튼, 뱃지 모두 3:1 이상 | 동일 |
| **2.4.7 포커스 가시성 — AA** | 모든 포커스 가능 요소에 `:focus-visible` 링 제공 (어두운 배경에서는 노란색, 밝은 배경에서는 파란색) | 모든 페이지에서 `Tab` 키 |
| **2.4.11 포커스 가림 방지 — AA (2.2 신규)** | 고정 헤더의 높이 축소 + focus scroll-margin | 고정 헤더를 지나 `Tab` 키 |
| **2.5.8 대상 크기 — AA (2.2 신규)** | 버튼 / 링크: 24×24 CSS px 이상의 히트 영역 | DevTools 박스 모델 |
| **1.4.12 텍스트 간격 — AA** | 모든 요소가 사용자의 line-height / letter-spacing 재정의를 존중 | DevTools에서 재정의 |
| **2.3.3 인터랙션으로 인한 애니메이션 — AAA** | 모든 애니메이션 클래스가 `@media (prefers-reduced-motion: no-preference)`로 감쌈 | OS 수준 모션 줄이기 |
| **1.4.10 리플로우 — AA** | 320 px에서 가로 스크롤 없이 레이아웃 작동 | DevTools 좁은 뷰포트 |
| **다크 모드** | `prefers-color-scheme: dark`가 토큰을 자동 전환 | OS 다크 모드 토글 |

<hr class="hr-text" data-content="믹스인">

## 선택 가능한 Stylus 믹스인

소스에서 컴파일하는 경우, `src/stylus/utilities/mixins.styl`에서 다음 믹스인을 사용할 수 있습니다:

| 믹스인 | 용도 |
|---|---|
| `focus-ring()` | `:focus-visible`을 존중하는 고대비 포커스 링 |
| `visually-hidden()` | 포커스 가능한 상태를 유지하는 스크린 리더 전용 텍스트 |
| `skip-link()` | 포커스 시 보이는 앵커 |
| `reduced-motion()` | 모든 블록을 `prefers-reduced-motion: no-preference`로 감쌈 |
| `forced-colors()` | Windows 고대비 모드 조정 |
| `target-size(24px)` | 클릭 가능 요소를 최소 탭 대상으로 패딩 |

예시:

```stylus
// 커스텀 버튼에 강한 포커스 링 적용
.my-button
    focus-ring()
    target-size(28px)
```

<hr class="hr-text" data-content="스킵 링크">

## 스킵 링크 도우미

아래를 **`<body>` 내부 맨 처음에** 배치하십시오:

```html
<a href="#main-content" class="skip-link">본문으로 건너뛰기</a>
```

이 클래스는 코어 스타일시트에 포함되어 있지 않으므로 (페이지 용량에 영향 없음) 직접 작성하거나 포함된 `skip-link()` 믹스인을 사용하는 4줄짜리 코드 조각입니다. 이 사이트에서 사용되고 있습니다. 페이지에 포커스를 맞추고 Tab 키를 누르면 왼쪽 상단에 나타나는 것을 확인할 수 있습니다.

<hr class="hr-text" data-content="검증">

## 페이지 검증 방법

라이브러리는 `scripts/` 아래에 [axe-core](https://github.com/dequelabs/axe-core)를 기반으로 하는 `a11y-test.mjs` 스크립트를 제공합니다.

```bash
node scripts/a11y-test.mjs https://example.com
```

CI는 매 푸시마다 `dist/index.html` 쇼케이스 페이지에 대해 이 스크립트를 실행합니다.

[v1.1.7 릴리스 정보 읽기 →](/ko/byeongyeong-ilji/) ·
[보안 페이지 보기 →](/ko/boaan/)
