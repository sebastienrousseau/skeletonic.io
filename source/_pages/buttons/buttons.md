---
layout: page
key: 99ccf654-cec627f7ac5d-0579-924a-cec627f7ac5d
title: Buttons
subtitle:  Unique, styled and responsive CSS for buttons, href attributes and input elements.
description: A suite of modern button styling options you can use to make user interaction even more engaging. 
keywords: buttons, css, deadon, framework, front-end, frontend, gridsystem, lightweight, mobile-first, modern, responsive, semantic, skeletonic, skeletonic.css, style-agnostic
image: /assets/images/components/buttons.min.svg
author: Sebastien Rousseau
permalink: /buttons.html
api: /api/v1/buttons/
categories: [elements]
section: buttons
tags: [buttons, css, deadon, framework, front-end, frontend, gridsystem, lightweight, mobile-first, modern, responsive, semantic, skeletonic, skeletonic.css, style-agnostic]
status: publish
type: page
published: true
meta: {buttons, css, deadon, framework, front-end, frontend, gridsystem, lightweight, mobile-first, modern, responsive, semantic, skeletonic, skeletonic.css, style-agnostic}
date: 2021-06-12T11:12:10.595Z
robots: all
---

<!-- Buttons -->
<section class="grid-flex text-left">
    <div class="flex-12" markdown="1"> 

### {{ page.title }}
{{ page.description }}

#### Button Styles

Skeletonic CSS v{{ site.version | escape }} provides different styles of buttons:

##### Default buttons style

<button type="button" class="primary">Default</button>

#### Button states

Skeletonic CSS has the following classes for multiple buttons states. The button classes can be used on an &lt;a&gt;, &lt;button&gt;, or &lt;input&gt; element.

<ul class="disc">
    <li>.primary</li>
    <li>.secondary</li>
    <li>.active</li>
    <li>.success</li>
    <li>.info</li>
    <li>.warning</li>
    <li>.danger</li>
    <li>.link</li>
</ul>

<button type="button" class="primary">Primary</button>
<button type="button" class="secondary">Secondary</button>
<button type="button" class="active">Active</button>
<button type="button" disabled="">Disabled</button>
<button type="button" class="success">Success</button>
<button type="button" class="info">Info</button>
<button type="button" class="error">Error</button>
<button type="button" class="warning">Warning</button>
<button type="button" class="link">Link button</button>

<code>
    &lt;button type=&quot;button&quot; class=&quot;primary&quot;&gt;Primary&lt;/button&gt; &#10;                    &lt;button type=&quot;button&quot; class=&quot;secondary&quot;&gt;Secondary&lt;/button&gt;&#10;                    &lt;button type=&quot;button&quot; disabled=&quot;&quot;&gt;Disabled&lt;/button&gt;&#10;                    &lt;button type=&quot;button&quot; class=&quot;success&quot;&gt;Success&lt;/button&gt;&#10;                    &lt;button type=&quot;button&quot; class=&quot;info&quot;&gt;Info&lt;/button&gt;&#10;                    &lt;button type=&quot;button&quot; class=&quot;error&quot;&gt;Error&lt;/button&gt;&#10;                    &lt;button type=&quot;button&quot; class=&quot;warning&quot;&gt;Warning&lt;/button&gt;&#10;                    &lt;button type=&quot;button&quot; class=&quot;link&quot;&gt;Link button&lt;/button&gt;
</code>

#### Outline Button states

Skeletonic CSS has the following classes for multiple outline buttons states. The button classes can be used on an &lt;a&gt;, &lt;button&gt;, or &lt;input&gt; element.

<ul class="disc">
    <li>.primary-outline</li>
    <li>.secondary-outline</li>
    <li>.success-outline</li>
    <li>.info-outline</li>
    <li>.warning-outline</li>
    <li>.danger-outline</li>
    <li>.link-outline</li>
</ul>


<button type="button" class="primary-outline">Primary Outline</button>
<button type="button" class="secondary-outline">Secondary Outline</button>
<button type="button" class="success-outline">Success Outline</button>
<button type="button" class="error-outline">Error Outline</button>
<button type="button" class="warning-outline">Warning Outline</button>

<code>&lt;button type=&quot;button&quot; class=&quot;primary-outline&quot;&gt;Primary Outline&lt;/button&gt;&#10;&lt;button type=&quot;button&quot; class=&quot;secondary-outline&quot;&gt;Secondary Outline&lt;/button&gt;&#10;&lt;button type=&quot;button&quot; class=&quot;success-outline&quot;&gt;Success Outline&lt;/button&gt;&#10;&lt;button type=&quot;button&quot; class=&quot;error-outline&quot;&gt;Error Outline&lt;/button&gt;&#10;&lt;button type=&quot;button&quot; class=&quot;warning-outline&quot;&gt;Warning Outline&lt;/button&gt;
</code>

#### Button Groups

Skeletonic CSS allows you to group multiple buttons together on a single line. Use an element of your choice with class *.button-group* to create a button group:

<p class="button-group">
    <button class="active">Button 0</button>
    <button>Button 1</button>
    <button>Button 2</button>
</p>

<code>
    &lt;p class=&quot;button-group&quot;&gt;&#10;
        &lt;button class=&quot;active&quot;&gt;Button 0&lt;/button&gt;&#10;
        &lt;button&gt;Button 1&lt;/button&gt;&#10;
        &lt;button&gt;Button 2&lt;/button&gt;&#10;
    &lt;/p&gt;
</code>
</div>
</section>
<!-- End Buttons -->