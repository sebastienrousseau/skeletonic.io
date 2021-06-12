---
layout: page
key: 679d8cdb-687a1cfd870f-019a-44ff-687a1cfd870f
title: Cards
subtitle: Responsive, flexible containers for your page's contents
description: CSS cards provide convenient flexbox layouts for different types of content like title, images etc.
keywords: card layout, cards, containers, content, css, css cards, flexible, flexbox layout, framework, front-end, front end, grid system, light weight, mobile-first, modern, responsive, skeletonic, skeletonic.css
image: /assets/images/components/cards.min.svg
author: Sebastien Rousseau
permalink: /cards.html
api: /api/v1/cards/
categories: [components]
section: cards
tags: [card layout, cards, containers, content, css, css cards, flexible, flexbox layout, framework, front-end, front end, grid system, light weight, mobile-first, modern, responsive, skeletonic, skeletonic.css]
status: publish
type: page
published: true
meta: {card layout, cards, containers, content, css, css cards, flexible, flexbox layout, framework, front-end, front end, grid system, light weight, mobile-first, modern, responsive, skeletonic, skeletonic.css}
date: 2021-06-12T11:12:10.595Z
robots: all
---

<!-- Cards -->
<section class="grid-flex text-left">
    <div class="flex-12" markdown="1">

### {{ page.title }}
{{ page.description }}

#### Basic syntax

In order to create a basic card, you will need to:

<ul class="disc">
    <li>Use .card with a div tag to create the outer container</li>
    <li>Add the .card-content class to an inner div tag to create the card content</li>
</ul>

These are the basic elements that constitute a basic card layout, as we can see from the following example:

<div class=" flex-12">
    <div class="card">
        <div class="card-content">
<h4>Title</h4> 
<p>Lorem ipsum.</p>
        </div>
    </div>
</div>
<div class="flex-12">
<pre><code class="size-full-width">
&lt;div class=&quot;card&quot;&gt;&#10;    &lt;div class=&quot;card-content&quot;&gt;&#10;        &lt;h4&gt;Title&lt;/h4&gt;&#10;        &lt;p&gt;Lorem ipsum.&lt;/p&gt;&#10;    &lt;/div&gt;&#10;&lt;/div&gt;
</code></pre>
</div>

#### Image Card

In the same way, we can add an image to our card element.

<section class="cards flex-12">
    <div class="card flex-4">
        <picture>
<img src="./assets/images/backgrounds/patrick-tomasso-472279.jpg"
    alt="Photo by Patrick Tomasso on Unsplash" class="rdt">
        </picture>
        <div class="card-content text-left">
<h4>Top image</h4>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
<p><button class="info center size-full-width">Button 1</button></p>
        </div>
    </div>
    <div class="card flex-4">
        <div class="card-content text-left">
<h4>Center padding</h4>
<picture>
    <img src="./assets/images/backgrounds/fernando-reyes-241702.jpg"
         alt="Photo by Fernando Reyes on Unsplash"
         class="img-responsive rd" />
</picture>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
<p><button class="info center size-full-width">Button 3</button></p>
        </div>
    </div>
    <div class="card flex-4">
        <div class="card-content text-left">
<h4>Bottom image</h4>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
<p><button class="info center size-full-width">Button 2</button></p>
        </div>
        <picture>
<img src="./assets/images/backgrounds/marion-michele-457471.jpg"
    alt="Photo by Marion Michele on Unsplash" class="rdb">
        </picture>
    </div>
</section>

#### Card colours

Cards can be used to display specific messages to users. You can use the .warning class to display a yellow warning card or, if you need to display an error message to your users, you can use the .error class to display a red error card.

<section class="cards flex-12 grid-flex">
<div class="card primary flex-2 padding-1">
    <div class="card-content text-left">
        <h4>Primary</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p><button class="primary center size-full-width">Button 4</button></p>
    </div>
</div>
<div class="card secondary flex-2 padding-1">
    <div class="card-content text-left">
        <h4>Secondary</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button class="secondary center size-full-width">Button 4</button>
    </div>
</div>
<div class="card success flex-2 padding-1">
    <div class="card-content text-left">
        <h4>Success</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button class="success center size-full-width">Button 4</button>
    </div>
</div>
<div class="card info flex-2 padding-1">
    <div class="card-content text-left">
        <h4>Info</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button class="info center size-full-width">Button 4</button>
    </div>
</div>
<div class="card warning flex-2 padding-1">
    <div class="card-content text-left">
        <h4>Warning</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button class="warning center size-full-width">Button 4</button>
    </div>
</div>
<div class="card error flex-2 padding-1">
    <div class="card-content text-left">
        <h4>Error </h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button class="error center size-full-width">Button 5</button>
    </div>
</div>
</section>

#### Sample code

```html
<div class="card error flex-1 padding-1">
    <div class="card-content text-left">
        <h4 class="error">Error</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button class="error center size-full-width">Button 5</button>
    </div>
</div>
```

<!-- End Cards -->