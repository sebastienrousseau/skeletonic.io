---
layout: page
key: 2740210a-fb32217e7626-0c5c-86ed-fb32217e7626
title: Dividers
subtitle: Simple Styles for Horizontal Rules.
description: The Skeletonic CSS Dividers are created based on the HTML hr tag element.
keywords: blurreddivider, css, dasheddivider, divider, dotteddivider, doubledivider, framework, front-end, frontend, gridsystem, hiddendivider, horizontaldivider, horizontalrule, icondivider, lightweight, mobile-first, skeletonic, skeletonic.css, smalldivider, soliddivider, standarddivider, verticaldivider
image: /assets/images/backgrounds/bg-divider.png
author: Sebastien Rousseau
permalink: /divider.html
categories: [content]
section: divider
tags: [blurreddivider, css, dasheddivider, divider, dotteddivider, doubledivider, framework, front-end, frontend, gridsystem, hiddendivider, horizontaldivider, horizontalrule, icondivider, lightweight, mobile-first, skeletonic, skeletonic.css, smalldivider, soliddivider, standarddivider, verticaldivider]
status: publish
type: page
published: true
meta: {blurreddivider, css, dasheddivider, divider, dotteddivider, doubledivider, framework, front-end, frontend, gridsystem, hiddendivider, horizontaldivider, horizontalrule, icondivider, lightweight, mobile-first, skeletonic, skeletonic.css, smalldivider, soliddivider, standarddivider, verticaldivider}
date: 2021-05-25T18:45:18.063Z
robots: all
---

<!-- Divider -->
<section class="grid-flex text-left">
    <div class="flex-3">
    <nav class="nav-page" aria-label="{{page.title}} Navigation"> 
        <ul class="disc"> 
            <li><a href="#{{page.title | downcase | replace: ' ', '-' }}">{{page.title}}</a></li>
            <li><a href="#{{'Divider styles' | downcase | replace: ' ', '-' }}">Divider styles</a></li>            
        </ul> 
    </nav>
</div>
<div class="flex-9" markdown="1">

#### {{ page.title }}

The &lt;hr&gt; tag defines a thematic break in an HTML page, and is most often displayed as a horizontal rule. The Skeletonic CSS Divider is created based on the &lt;hr&gt; element.
#### Divider styles

The dividers are created using several techniques, including styling pseudo-elements, using gradients and inserting SVG graphics with responsiveness in mind.

##### Divider
A standard divider. The &lt;hr&gt; element is used to separate content (or define a change) in an HTML page.

##### Dashed Divider

<hr class="hr-dashed" />

```html
<h1>This is heading 1</h1>
<p>This is some text.</p>
<hr class="hr-dashed" />
```

##### Double Divider

<hr class="hr-doubled" />

```html
<h1>This is heading 1</h1>
<p>This is some text.</p>
<hr class="hr-doubled" />
```
##### Dotted Divider

<hr class="hr-dotted" />

```html
<h1>This is heading 1</h1>
<p>This is some text.</p>
<hr class="hr-dotted" />
```

##### Blurred Divider

<hr class="hr-blurred" />

```html
<h1>This is heading 1</h1>
<p>This is some text.</p>
<hr class="hr-blurred" />
```
##### Solid Divider

<hr class="hr-solid" />

```html
<h1>This is heading 1</h1>
<p>This is some text.</p>
<hr class="hr-solid" />
```
##### Horizontal Divider

A divider can segment content horizontally

<hr class="hr-text" data-content="Skeletonic" />

```html
<h1>This is heading 1</h1>
<p>This is some text.</p>
<hr class="hr-text" data-content="Skeletonic" />
```
##### Icon Divider

<hr class="hr-icon" />

```html
<h1>This is heading 1</h1>
<p>This is some text.</p>
##### Icon Divider
<hr class="hr-icon" />
```

##### Rounded Divider

<hr class="hr-rounded" />

```html
<h1>This is heading 1</h1>
<p>This is some text.</p>
##### Rounded Divider
<hr class="hr-rounded" />
```

##### Small Divider

<hr class="hr-small">

```html
<h1>This is heading 1</h1>
<p>This is some text.</p>
<hr class="hr-small">
```

##### Vertical Divider

A divider can segment content vertically

<hr class="hr-vertical">

```html
<h1>This is heading 1</h1>
<p>This is some text.</p>
<hr class="hr-vertical">
```

##### Hidden Divider

A hidden divider divides content without creating a dividing line

<hr class="hr-hidden">

```html
<h1>This is heading 1</h1>
<p>This is some text.</p>
<hr class="hr-hidden">
```

</div>
</section>
<!-- End Divider -->