---
layout: page
id: 99ccf654-cec627f7ac5d-0579-924a-cec627f7ac5d
title: Button Groups
subtitle: Simply designed to fit your cascading web life.
description: A lightweight, intuitive, accessible and ultra-responsive CSS Framework to streamline your Digital and Mobile Web development needs.
keywords: button-groups, css, deadon, framework, front-end, frontend, gridsystem, lightweight, mobile-first, modern, responsive, semantic, skeletonic, skeletonic.css, style-agnostic
image: /assets/images/backgrounds/bg-button-groups.png
author: Sebastien Rousseau
permalink: /button-groups.html
categories: [components]
section: button-groups
tags: [button-groups, css, deadon, framework, front-end, frontend, gridsystem, lightweight, mobile-first, modern, responsive, semantic, skeletonic, skeletonic.css, style-agnostic]
status: publish
type: page
published: true
meta: {button-groups, css, deadon, framework, front-end, frontend, gridsystem, lightweight, mobile-first, modern, responsive, semantic, skeletonic, skeletonic.css, style-agnostic}
date: May 25, 2021
robots: all
---

<!-- Buttons -->
<section class="grid-flex text-left">
    <div class="flex-4">
        <nav class="nav-page" aria-label="{{page.title}} Navigation"> 
            <ul class="nav"> 
                <li><a href="#{{'Default buttons style' | downcase | replace: ' ', '-' }}">Default buttons style</a></li>
                <li><a href="#{{'Button states' | downcase | replace: ' ', '-' }}">Button states</a></li>
                <li><a href="#{{'Outline Button states' | downcase | replace: ' ', '-' }}">Outline Button states</a></li>                
                <li><a href="#{{'Button Groups' | downcase | replace: ' ', '-' }}">Button Groups</a></li>
            </ul> 
        </nav>
    </div>
    <div class="flex-8" markdown="1"> 

### Buttons

##### Default buttons style

[Download skeletonic.css](https://github.com/sebastienrousseau/skeletonic/archive/refs/tags/v{{ site.version | escape }}.zip){:target="_blank" rel="nofollow" title="a link to download skeletonic.css" class="button primary"}                        
#### Button states

Multiple buttons states.

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

Multiple buttons states.

<button type="button" class="primary-outline">Primary Outline</button>
<button type="button" class="secondary-outline">Secondary Outline</button>
<button type="button" class="success-outline">Success Outline</button>
<button type="button" class="error-outline">Error Outline</button>
<button type="button" class="warning-outline">Warning Outline</button>

<code>&lt;button type=&quot;button&quot; class=&quot;primary-outline&quot;&gt;Primary Outline&lt;/button&gt;&#10;&lt;button type=&quot;button&quot; class=&quot;secondary-outline&quot;&gt;Secondary Outline&lt;/button&gt;&#10;&lt;button type=&quot;button&quot; class=&quot;success-outline&quot;&gt;Success Outline&lt;/button&gt;&#10;&lt;button type=&quot;button&quot; class=&quot;error-outline&quot;&gt;Error Outline&lt;/button&gt;&#10;&lt;button type=&quot;button&quot; class=&quot;warning-outline&quot;&gt;Warning Outline&lt;/button&gt;
</code>

#### Button Groups

Group multiple buttons together on a single line.

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