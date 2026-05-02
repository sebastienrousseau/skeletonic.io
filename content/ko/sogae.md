---
title: "Skeletonic Stylus 소개"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus는 접근성 높고 빠르며 모듈화된 UI 스타일링을 위한 오픈소스 Stylus CSS 라이브러리입니다."
layout: page
permalink: https://skeletonic.io/ko/sogae/
date: 2026-04-08
author: Sebastien Rousseau
language: ko
theme_color: "hsl(210, 100%, 42%)"
keywords: "skeletonic, 소개, stylus, css 프레임워크, 철학"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

<dl class="stat-strip" aria-label="Project facts">
  <div><dt>Version</dt><dd>2.0.0</dd></div>
  <div><dt>Gzip</dt><dd>7.9 KB</dd></div>
  <div><dt>Brotli</dt><dd>6.8 KB</dd></div>
  <div><dt>License</dt><dd>MIT or Apache-2.0</dd></div>
  <div><dt>Standard</dt><dd>WCAG 2.2 AA</dd></div>
</dl>

## 요약

**Skeletonic Stylus**는 접근성 높고 빠르며 모듈화된 UI 스타일링을 위한 오픈소스 [Stylus](https://stylus-lang.com) CSS 라이브러리입니다.

2018년에 실제 컴포넌트 라이브러리의 편의성을 유지하면서 **더 적은 CSS를 전달하기** 위한 개인 실험으로 시작되었습니다. 8년이 지난 지금도 그 목표는 변하지 않았습니다.

## Skeletonic이 제공하는 기능

<div class="feature-grid">
  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/thunder.min.svg" alt="번개" width="64" height="64" loading="lazy" decoding="async">
    <h3>매우 빠른 속도</h3>
    <p>반응형 인터페이스를 몇 분 만에 설계하고 커스터마이징할 수 있습니다. 네이티브 CSS 변수, 사전 정의된 클래스, 모든 시맨틱 HTML 요소를 지원하는 12열 그리드를 제공합니다.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/lightweight.min.svg" alt="깃털" width="64" height="64" loading="lazy" decoding="async">
    <h3>경량</h3>
    <p>약 7.9&nbsp;KB gzipped. 페이지가 더 빠르게 로드됩니다. 모든 필수 구성 요소가 포함되어 있습니다.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/responsive.min.svg" alt="반응형 기기" width="64" height="64" loading="lazy" decoding="async">
    <h3>반응형 디자인</h3>
    <p>데스크톱과 모바일 모두를 위해 제작되었습니다. 레이아웃이 모든 기기에 맞게 적응합니다. 터치 최적화, 시맨틱 HTML 전반 적용.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/accessibility.min.svg" alt="접근성" width="64" height="64" loading="lazy" decoding="async">
    <h3>접근성</h3>
    <p>WCAG&nbsp;2.2 기본 내장: focus-visible 링, AA 대비, 스킵 링크 도우미, 키보드 친화적 구성 요소, 모션 감소 지원 — 추가 스타일시트 불필요, <code>aria-*</code> 보일러플레이트 불필요.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/components.min.svg" alt="구성 요소 블록" width="64" height="64" loading="lazy" decoding="async">
    <h3>구성 요소 라이브러리</h3>
    <p>모듈화된 CSS 구성 요소와 Stylus 믹스인. 버튼, 폼, 카드, 알림, 뱃지, 팔레트 및 애니메이션 — 깔끔하고 모듈화되어 바로 사용할 수 있습니다.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/github.min.svg" alt="GitHub 로고" width="64" height="64" loading="lazy" decoding="async">
    <h3>무료 &amp; 오픈소스</h3>
    <p>Sebastien Rousseau가 설계, 개발 및 유지관리합니다. <strong>MIT</strong> 또는 <strong>Apache&nbsp;2.0</strong> 이중 라이선스. 상업적 사용을 포함하여 수수료나 라이선스 비용이 없습니다.</p>
  </article>
</div>

## 다른 프레임워크와의 비교

하나의 자체 호스팅 스타일시트로 타이포그래피, 버튼, 폼, 카드, 테이블, 팔레트, 애니메이션 및 유틸리티 클래스를 모두 지원합니다. JavaScript 없음. 빌드 단계 불필요. Bootstrap, Tailwind, Bulma에 대한 피어 종속성 없음.

| 기능 | Skeletonic Stylus | Bootstrap 5 | Tailwind CSS | Bulma |
|---|---|---|---|---|
| Gzipped 크기 | **약 7.9&nbsp;KB** | 약 30&nbsp;KB | 약 10&nbsp;KB (varies) | 약 30&nbsp;KB |
| WCAG 2.2 준수 | **기본 내장** | 부분적 | 수동 | 부분적 |
| 캐스케이드 레이어 | **지원 (`@layer`)** | 미지원 | 미지원 | 미지원 |
| 다크 모드 | **`prefers-color-scheme`** | 선택적 | 클래스 기반 | 선택적 |
| JavaScript 필요 | **불필요** | 필요 (Popper) | 불필요 | 불필요 |
| CycloneDX SBOM | **지원** | 미지원 | 미지원 | 미지원 |
| 모션 감소 | **존중** | 부분적 | 수동 | 부분적 |
| 라이선스 | MIT 또는 Apache 2.0 | MIT | MIT | MIT |

## 원칙

1. **접근성은 기본이지 옵션이 아닙니다.** WCAG 2.2 준수가 모든 구성 요소에 내장되어 있으며, "테마"로 추가되는 것이 아닙니다.
2. **바이트가 중요합니다.** 단일 스타일시트가 페이지 용량 예산을 초과해서는 안 됩니다. 8&nbsp;KB gzipped 상한선이 CI에서 강제됩니다.
3. **캐스케이드 레이어가 명시도 전쟁을 이깁니다.** `!important` 없이, DOM 순서 트릭 없이 자신 있게 오버라이드할 수 있습니다.
4. **Stylus는 여전히 훌륭합니다.** 간결하고 표현력이 풍부하며, 라이브러리를 약 3,000줄의 읽기 쉬운 코드로 유지할 수 있습니다.
5. **단조로움은 기능입니다.** JS 종속성 없음. 빌드 시 마법 없음. 호환성 깨는 이름 변경 없음. CSS 클래스는 이름 그대로 동작합니다.
6. **몇 초 만에 테마 적용 가능.** 색상, 간격, 타이포그래피, 둥글기를 위한 네이티브 CSS 커스텀 속성을 지원합니다.
7. **공급망이 강화되었습니다.** 서명된 npm 출처 증명. 고정된 Dependabot 업데이트. CVE-2023-44270이 overrides를 통해 패치되었습니다.

## 버전 관리 &amp; 시맨틱 버전

Skeletonic Stylus는 [Semantic Versioning 2.0](https://semver.org)을 따릅니다.

| 범위 | 시기 | 예시 |
|---|---|---|
| **Major** | 공개 클래스, 믹스인 또는 토큰의 제거 또는 이름 변경 | 1.x → 2.0 |
| **Minor** | 새로운 구성 요소, 믹스인 또는 토큰 추가 | 1.1 → 1.2 |
| **Patch** | 버그 수정, 접근성 개선, 성능, 보안 | 1.1.6 → 2.0.0 |

모든 공개 클래스 이름, 모든 CSS 커스텀 속성 및 모든 내보내진 Stylus 믹스인은 공개 API의 일부입니다. 호환성을 깨는 변경 사항은 메이저 버전 업데이트와 마이그레이션 가이드를 동반합니다.

## 관리

Skeletonic Stylus는 [Sebastien Rousseau](https://sebastienrousseau.com)가 설계, 개발 및 유지관리합니다. [MIT](https://opensource.org/licenses/MIT) 및 [Apache 2.0](https://opensource.org/licenses/Apache-2.0) 이중 라이선스입니다.

이슈, 아이디어 및 기여를 환영합니다 —
[기여 가이드를 확인하십시오](/ko/giyeo/).
