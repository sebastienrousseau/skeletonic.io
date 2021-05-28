---
layout: page
key: dbf80a0d-8a1b16f4d1eb-8e42-8b3b-8a1b16f4d1eb
title: Debugging Tools
subtitle: Debug and diagnose CSS stylesheets with ease 
description: Use Skeletonic CSS debugging tools to visually inspect and correct page layout issues.
keywords: baselinegrid, css, cssbaselinegrid, cssdebugging, cssdebuggingtools, cssgridoverlay, debugging, debuggingtools, framework, front-end, frontend, gridoverlays, gridsystem, imagebaselinegrid, lightweight, mobile-first, modern, responsive, semantic, skeletonic, skeletonic.css
image: /assets/images/backgrounds/background-css-debugging.png
author: Sebastien Rousseau
permalink: /css-debugging.html
categories: [layout]
section: css-debugging
tags: [baselinegrid, css, cssbaselinegrid, cssdebugging, cssdebuggingtools, cssgridoverlay, debugging, debuggingtools, framework, front-end, frontend, gridoverlays, gridsystem, imagebaselinegrid, lightweight, mobile-first, modern, responsive, semantic, skeletonic, skeletonic.css]
status: publish
type: page
published: true
meta: {baselinegrid, css, cssbaselinegrid, cssdebugging, cssdebuggingtools, cssgridoverlay, debugging, debuggingtools, framework, front-end, frontend, gridoverlays, gridsystem, imagebaselinegrid, lightweight, mobile-first, modern, responsive, semantic, skeletonic, skeletonic.css}
date: 2021-05-28T20:25:43.291Z
robots: all
---

<!-- Debugging -->
<section class="grid-flex text-left">
    <div class="flex-12"> 

<h3>{{ page.title }}</h3>

<p>{{ page.description }}</p>

<p>Skeletonic CSS v.{{site.version}} provides a set of debugging tools to help you quickly find and fix your CSS layout issues.</p>

<h4>Image baseline grid</h4>

<p>The Image baseline grid allows you to use a defined debugging class on any HTML Tags to enable the grid overlay and identify issues in your UI layer.</p> 

<p>To begin, set out a base number for your baseline grid.(E.g., 8px/16px/32px/64px).</p>

<div class="grid-flex"> 

<div class="flex-1"> 
<h4>.debug-grid-8</h4>
    
<code>.debug-grid-8 {&#10;    background: &#10;        transparent &#10;        url(&apos;&#10;            data:image/gif;&#10;            base64,&#10;            encoded_image&apos;) &#10;        repeat &#10;        top &#10;        left;&#10;}</code>
</div>
<div class="flex-1"> 
<h4>.debug-grid-16</h4>

<code>.debug-grid-16 {&#10;    background: &#10;        transparent &#10;        url(&apos;data:image/gif;&#10;            base64,&#10;            encoded_image&apos;) &#10;        repeat &#10;        top &#10;        left;&#10;}</code>
</div>
<div class="flex-1"> 
<h4>.debug-grid-32</h4>

<code>.debug-grid-32 {&#10;    background: &#10;        transparent &#10;        url(&apos;data:image/gif;&#10;            base64,&#10;            encoded_image&apos;) &#10;        repeat &#10;        top &#10;        left;&#10;}</code>
</div>

<div class="flex-1"> 
<h4>.debug-grid-64</h4>

<code>.debug-grid-64 {&#10;    background: &#10;        transparent &#10;        url(&apos;&#10;            data:image/gif;&#10;            base64,&#10;            encoded_image&#10;            &apos;) &#10;        repeat &#10;        top &#10;        left;&#10;}</code>
</div>

</div>

<h4>CSS baseline grid</h4>

<p>We also have a smart, responsive, CSS baseline grid overlay version to fit your cascading web life.</p>

<p>To use it, you will need to import [skeletonic-debug-mode.css](https://unpkg.com/skeletonic@{{site.version}}/dist/skeletonic-debug-mode.min.css) to display the CSS Grid overlay automatically in your &lt;body&gt; tag.</p>

</div>
</section>
<!-- End Debugging -->