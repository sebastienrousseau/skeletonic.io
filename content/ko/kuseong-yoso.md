---
title: "구성 요소"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus의 모든 구성 요소에 대한 라이브 HTML 예제. 그룹화, 앵커 처리되어 있으며 데모 대상 스타일시트로 직접 렌더링됩니다."
layout: page
permalink: https://skeletonic.io/ko/kuseong-yoso/
date: 2026-04-08
author: Sebastien Rousseau
language: ko
theme_color: "hsl(210, 100%, 42%)"
keywords: "skeletonic 구성 요소, 버튼, 카드, 폼, 알림, 뱃지, 헤더, 네비게이션 바, css 전용 햄버거"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

아래의 모든 예제는 **데모 대상인 스타일시트 자체로 렌더링됩니다**. 전처리기 없음. JavaScript 없음. 추가 종속성 없음. 어떤 코드 조각이든 새 HTML 파일에 복사하면 바로 작동합니다.

<nav aria-label="이 페이지에서">
<p><strong>이 페이지에서</strong></p>
<ul>
<li><strong>입력</strong> — <a href="#buttons">버튼</a> · <a href="#badges">뱃지</a></li>
<li><strong>피드백</strong> — <a href="#alerts">알림</a></li>
<li><strong>표면</strong> — <a href="#cards">카드</a></li>
<li><strong>폼</strong> — <a href="#form-fields">폼 필드</a></li>
<li><strong>레이아웃</strong> — <a href="#grid">그리드</a> · <a href="#header">헤더 &amp; 햄버거 네비게이션</a></li>
</ul>
</nav>

<hr class="hr-text" data-content="입력">

<h2 id="inputs">입력</h2>

방문자가 클릭, 탭 또는 포커스하여 페이지를 조작하는 인터랙티브 요소입니다.

<h3 id="buttons">버튼</h3>

시맨틱하고 테마 적용 가능한 액션 트리거입니다. 솔리드 및 아웃라인 변형이 각각 6가지 브랜드 색상을 제공합니다.

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

아웃라인 변형:

```html
<a href="#" class="button primary-outline">Outline</a>
<a href="#" class="button secondary-outline">Outline</a>
```

<p>
  <a href="#" class="button primary-outline">Outline</a>
  <a href="#" class="button secondary-outline">Outline</a>
</p>

> **접근성 참고.** 모든 `.button` 변형에는 `:focus-visible` 링과 **24×24&nbsp;px 최소 히트 영역**(WCAG&nbsp;2.2 SC&nbsp;2.5.8)이 포함되어 있습니다. 페이지 내 액션에는 `<button type="button">`을, 네비게이션에는 `<a href>`만 사용하십시오.

<h3 id="badges">뱃지</h3>

상태, 개수 또는 카테고리를 위한 소형 라벨입니다. 텍스트 크기가 고정되어 있어 뱃지가 주변 텍스트와 정렬됩니다.

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

> **접근성 참고.** 뱃지는 기본적으로 장식용입니다. 뱃지가 유일한 신호(예: 읽지 않은 개수)를 전달하는 경우, 시각적으로 숨겨진 도우미로 감싸십시오: `<span class="visually-hidden">읽지 않은 메시지 3개</span>`.

<hr class="hr-text" data-content="피드백">

<h2 id="feedback">피드백</h2>

방문자에게 무언가가 발생했거나 발생하려 한다는 것을 알려주는 표면입니다.

<h3 id="alerts">알림</h3>

시맨틱 의도를 가진 상태 메시지입니다. **v2.0.0에서 모든 변형은 명시적으로** `.alert-{primary,secondary,info,success,warning,error}` 하에 네임스페이스화되어 변형 클래스가 페이지의 다른 상태 클래스와 충돌하지 않습니다.

```html
<div class="alert alert-primary" role="alert">
  <strong>알림.</strong> 이것은 기본 알림입니다.
</div>
<div class="alert alert-success" role="status">
  <strong>저장됨.</strong> 변경 사항이 저장되었습니다.
</div>
<div class="alert alert-warning" role="alert">
  <strong>주의.</strong> 이 작업은 공유 상태에 영향을 줍니다.
</div>
<div class="alert alert-error" role="alert">
  <strong>오류.</strong> 폼을 저장할 수 없습니다.
</div>
```

<section aria-labelledby="alerts">
<div class="alert alert-primary" role="alert">
<strong>알림.</strong> 이것은 기본 알림입니다.
</div>

<div class="alert alert-success" role="status">
<strong>저장됨.</strong> 변경 사항이 저장되었습니다.
</div>

<div class="alert alert-warning" role="alert">
<strong>주의.</strong> 이 작업은 공유 상태에 영향을 줍니다.
</div>

<div class="alert alert-error" role="alert">
<strong>오류.</strong> 폼을 저장할 수 없습니다.
</div>
</section>

> **접근성 참고.** 즉각적인 주의가 필요한 메시지(오류, 경고)에는 `role="alert"`을, 긴급하지 않은 확인에는 `role="status"`를 사용하십시오. 둘 다 메시지가 나타나는 즉시 보조 기술에 노출됩니다.

<hr class="hr-text" data-content="표면">

<h2 id="surface">표면</h2>

관련 콘텐츠를 프레임화하고 그룹화하는 컨테이너입니다.

<h3 id="cards">카드</h3>

단일 일관된 단위를 위한 테두리와 패딩이 있는 컨테이너입니다. `flex-N` 그리드와 함께 사용하여 반응형 카드 벽을 만드십시오.

```html
<section class="row">
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Lightweight</h3>
      <p>39.1 KB minified, 7.8 KB gzipped.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Accessible</h3>
      <p>WCAG 2.2 conformant out of the box.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Modular</h3>
      <p>Cascade-layered for easy overrides.</p>
    </div>
  </article>
</section>
```

<section class="row" aria-labelledby="cards">
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">경량</h3>
      <p>39.1&nbsp;KB 최소화, 7.8&nbsp;KB gzipped.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">접근성</h3>
      <p>WCAG&nbsp;2.2 기본 준수.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">모듈형</h3>
      <p>간편한 오버라이드를 위한 캐스케이드 레이어.</p>
    </div>
  </article>
</section>

> **접근성 참고.** 각 카드를 시맨틱 랜드마크(`<article>`, `<section>`)로 감싸고 콘텐츠를 제목(`<h3>`)으로 시작하십시오. 스크린 리더 사용자가 카드 목록을 탐색 가능한 영역으로 활용할 수 있습니다.

<hr class="hr-text" data-content="폼">

<h2 id="forms">폼</h2>

사용자 데이터를 수집하기 위한 입력, 라벨 및 그룹화입니다.

<h3 id="form-fields">폼 필드</h3>

라벨, 텍스트 입력, 텍스트 영역, 필드셋 및 레전드 — 모두 디자인 시스템의 나머지와 일관된 크기로 제공됩니다.

```html
<form>
  <label for="name">이름</label>
  <input id="name" type="text" required>

  <label for="email">이메일</label>
  <input id="email" type="email" required class="input-primary">

  <label for="msg">메시지</label>
  <textarea id="msg" rows="4"></textarea>

  <button type="submit" class="button primary">보내기</button>
</form>
```

<section aria-labelledby="form-fields">
<form>
  <label for="demo-name">이름</label>
  <input id="demo-name" type="text">

  <label for="demo-email">이메일</label>
  <input id="demo-email" type="email" class="input-primary">

  <label for="demo-msg">메시지</label>
  <textarea id="demo-msg" rows="4"></textarea>

  <p><button type="button" class="button primary">보내기 (데모)</button></p>
</form>
</section>

> **접근성 참고.** 모든 입력에는 프로그래밍적으로 연결된 `<label for="…">`이 있어야 합니다. 관련 컨트롤을 `<fieldset>` 안에 `<legend>`와 함께 그룹화하십시오. 필수 필드는 `required`(및 라벨 텍스트에 보이는 별표)로 표시하십시오.

<hr class="hr-text" data-content="레이아웃">

<h2 id="layout">레이아웃</h2>

전체 페이지를 프레임화하는 구조적 프리미티브 — 그리드, 컨테이너, 헤더.

<h3 id="grid">그리드</h3>

Flexbox 기반의 반응형 `flex-N` 그리드(1 → 12열)입니다. `.row` 부모가 자동으로 간격을 두고 줄바꿈합니다.

```html
<div class="row">
  <div class="flex-6">반</div>
  <div class="flex-6">반</div>
</div>
<div class="row">
  <div class="flex-4">3분의 1</div>
  <div class="flex-4">3분의 1</div>
  <div class="flex-4">3분의 1</div>
</div>
```

<section aria-labelledby="grid">
<div style="display:flex;flex-wrap:wrap;gap:.5rem;">
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">반</div>
  <div style="flex:1 1 0;padding:.75rem;background:#e4e4e7;border-radius:.25rem;text-align:center;">반</div>
</div>

<div style="display:flex;flex-wrap:wrap;gap:.5rem;margin-top:.5rem;">
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">3분의 1</div>
  <div style="flex:1 1 0;padding:.75rem;background:#e4e4e7;border-radius:.25rem;text-align:center;">3분의 1</div>
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">3분의 1</div>
</div>
</section>

> **접근성 참고.** 시각적 순서는 DOM 순서와 일치해야 합니다. `flex-direction: row-reverse` 또는 `order:`로 행을 재정렬하지 마십시오. 스크린 리더와 키보드 사용자는 렌더링이 아닌 소스를 따릅니다.

<h3 id="header">헤더 &amp; 햄버거 네비게이션</h3>

반응형 햄버거 토글이 포함된 완전한 CSS 전용 헤더입니다. **JavaScript 없음.** 아래 코드 조각을 `skeletonic.min.css`가 이미 로드된 새 HTML 페이지에 복사하면 메뉴가 접히고, 펼쳐지며, 포커스를 올바르게 트랩합니다.

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
  <a class="sk-brand" href="#">브랜드</a>
  <input class="sk-toggle" id="sk-nav-toggle" type="checkbox" aria-label="네비게이션 토글">
  <label class="sk-burger" for="sk-nav-toggle" aria-hidden="true">☰</label>
  <ul class="sk-menu">
    <li><a href="#">홈</a></li>
    <li><a href="#">문서</a></li>
    <li><a href="#">구성 요소</a></li>
    <li><a href="#">소개</a></li>
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
  <a class="sk-brand" href="#">브랜드</a>
  <input class="sk-toggle" id="sk-nav-toggle" type="checkbox" aria-label="네비게이션 토글">
  <label class="sk-burger" for="sk-nav-toggle" aria-hidden="true">☰</label>
  <ul class="sk-menu">
    <li><a href="#">홈</a></li>
    <li><a href="#">문서</a></li>
    <li><a href="#">구성 요소</a></li>
    <li><a href="#">소개</a></li>
  </ul>
</header>
</section>

> **접근성 참고.** 숨겨진 체크박스는 탭 순서에 남아 있어 키보드 사용자가 `Space` 또는 `Enter`로 메뉴를 열 수 있습니다. `<label>`은 `aria-hidden`을 가지는데, 체크박스 자체가 접근 가능한 이름 소스이기 때문입니다. 창을 640&nbsp;px 이하로 축소하면 햄버거 토글이 작동하는 것을 확인할 수 있습니다.

[전체 접근성 참고 보기 →](/ko/jeobgeun-seong/) · [팔레트 둘러보기 →](/ko/palleteu/)

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Skeletonic Stylus 구성 요소",
  "description": "Skeletonic Stylus v2.0.0에 포함된 모든 구성 요소입니다.",
  "itemListOrder": "https://schema.org/ItemListOrderAscending",
  "numberOfItems": 7,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "버튼",
      "url": "https://skeletonic.io/ko/kuseong-yoso/#buttons"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "뱃지",
      "url": "https://skeletonic.io/ko/kuseong-yoso/#badges"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "알림",
      "url": "https://skeletonic.io/ko/kuseong-yoso/#alerts"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "카드",
      "url": "https://skeletonic.io/ko/kuseong-yoso/#cards"
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "폼 필드",
      "url": "https://skeletonic.io/ko/kuseong-yoso/#form-fields"
    },
    {
      "@type": "ListItem",
      "position": 6,
      "name": "그리드",
      "url": "https://skeletonic.io/ko/kuseong-yoso/#grid"
    },
    {
      "@type": "ListItem",
      "position": 7,
      "name": "헤더 & 햄버거 네비게이션",
      "url": "https://skeletonic.io/ko/kuseong-yoso/#header"
    }
  ]
}
</script>
