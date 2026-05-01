---
title: "변경 이력"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus의 릴리스 노트, v2.0.0 전체 내용 포함."
layout: page
permalink: https://skeletonic.io/ko/byeongyeong-ilji/
author: Sebastien Rousseau
language: ko
theme_color: "hsl(210, 100%, 42%)"
keywords: "skeletonic 변경 이력, 릴리스 노트, v2.0.0, 시맨틱 버전"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

## v2.0.0 — 2026-04 (현재)

"릴리스 준비" 패스: 접근성, 공급망, 저장소 정리.

### 접근성 (WCAG 2.2)
- **`$primary` 어둡게 조정** — 버튼 / 뱃지 / 링크에서 흰색 텍스트에 대한 AA 대비를 위해 `hsl(210, 100%, 42%)`로 변경.
- **`$secondary` 어둡게 조정** — `hsl(195, 100%, 33%)`로 변경.
- 모든 인터랙티브 요소에 **focus-visible** 링 추가.
- 애니메이션 모듈에 **`@media (prefers-reduced-motion)`** 래퍼 추가.
- **`prefers-color-scheme: dark`** 토큰 전환 추가.
- WCAG 2.2 SC 2.5.8을 충족하기 위한 **target-size(24px)** 믹스인 추가.
- 고정 헤더를 위한 **focus-not-obscured** scroll-margin 도우미 추가.

### 빌드 &amp; 공급망
- **캐스케이드 레이어** — 모든 블록이 `@layer skeletonic.{reset,tokens,layout,elements,components,utilities}` 내에 위치.
- **CycloneDX SBOM** — npm tarball의 일부로 생성.
- **`size-limit` 예산** — CI에서 적용: 코어 스타일시트 8 KB gzipped 상한선.
- **CVE-2023-44270** (postcss 줄바꿈) — `pnpm.overrides`를 통해 패치.
- npm 게시 워크플로우에서 출처 증명 + 서명 (`--provenance --access public`).
- 보관된 `stylelint-a11y` 플러그인을 린트 설정에서 제거.

### 저장소 정리 &amp; 소비자 패키지
- 레거시 `package/` 디렉토리 제거; `dist/`가 이제 소비자를 위한 단일 소스.
- v2.0.0 설치 경로를 반영하여 README 재작성.
- `dist/`는 커밋됨; `debug/`는 생성되며 gitignore 처리.
- 새로운 `.github/workflows/npm-publish.yml`은 태그 기반.

### 버그 수정 (P0)
- **`row $:after` 부모 선택자 회귀** — `src/stylus/components/_grid.styl`에서 잘못된 `$`를 `&`로 교체.
- **`.alternate`** — `animation-direction: reverse` 대신 올바르게 `alternate` 적용.
- **`.alert-*` 네임스페이스화** — `.alert.success` → `.alert.alert-success`로 변경하여 상태 클래스와의 충돌 방지.

[GitHub의 전체 v2.0.0 릴리스 노트 ↗](https://github.com/sebastienrousseau/skeletonic-stylus/releases)

<hr class="hr-text" data-content="이력">

## 이전 릴리스

- **v1.1.6** — 내부 정리, 종속성 업데이트.
- **v1.1.5** — Material 팔레트 추가.
- **v1.1.0** — Tachyons 팔레트 + 그리드 리팩터링.
- **v1.0.5** — WCAG 2.2 전면 적용 이전의 마지막 "레거시" 릴리스.
- **v1.0.0** — 최초 공개 릴리스 (2018).

커밋별 이력은
[GitHub Releases 페이지 ↗](https://github.com/sebastienrousseau/skeletonic-stylus/releases)에서 확인할 수 있습니다.
