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
date: 2021-05-25T18:45:18.063Z
robots: all
---

<!-- Debugging -->
<section class="grid-flex text-left">
    <div class="flex-3">
        <nav class="nav-page" aria-label="{{page.title}} Navigation"> 
            <ul class="disc"> 
                <li><a href="#{{page.title | downcase | replace: ' ', '-' }}">{{page.title}}</a></li>
                <li><a href="#{{'Image baseline grid' | downcase | replace: ' ', '-' }}">Image baseline grid</a></li>
                <li><a href="#{{'CSS baseline grid' | downcase | replace: ' ', '-' }}">CSS baseline grid</a></li>        
            </ul> 
        </nav>
    </div>
    <div class="flex-9" markdown="1">

#### {{ page.title }}

Skeletonic CSS v.{{site.version}} provides a set of debugging tools to help you quickly find and fix your CSS layout issues.

#### Image baseline grid

The Image baseline grid allows you to use a defined debugging class on any HTML Tags to enable the grid overlay and identify issues in your UI layer. 

To begin, set out a base number for your baseline grid.(E.g., 8px/16px/32px/64px).

##### .debug-grid-8                
                
<pre class="debug-grid-8">.debug-grid-8
{
    background: transparent url('data:image/gif;base64,encoded_image') repeat top left;
}</pre>

##### .debug-grid-16

<pre class="debug-grid-16">.debug-grid-16
{
    background: transparent url('data:image/gif;base64,encoded_image') repeat top left;
}</pre>

##### .debug-grid-32

<pre class="debug-grid-32">.debug-grid-32
{
    background: transparent url('data:image/gif;base64,encoded_image') repeat top left;
}</pre>

##### .debug-grid-64

<pre class="debug-grid-64">.debug-grid-64
{
    background: transparent url('data:image/gif;base64,encoded_image') repeat top left;
}</pre>

#### CSS baseline grid

We also have a smart, responsive, CSS baseline grid overlay version to fit your cascading web life.

To use it, you will need to import [skeletonic-debug-mode.css](https://unpkg.com/skeletonic@{{site.version}}/dist/skeletonic-debug-mode.min.css) to display the CSS Grid overlay automatically in your &lt;body&gt; tag.

<pre>body
{
    box-sizing: content-box;
    text-overflow: clip;
    border: none;
    background: linear-gradient(0deg, #fff 2px, rgba(0,0,0,0) 2px), linear-gradient(90deg, #fff 2px, rgba(0,0,0,0) 2px), linear-gradient(0deg, rgba(255,255,255,.298) 1px, rgba(0,0,0,0) 1px), linear-gradient(90deg, rgba(255,255,255,.298) 1px, rgba(0,0,0,0) 1px), rgba(105,105,105,.2);
    background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
    background-clip: border-box;
    background-origin: padding-box;
    background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
}</pre>

</div></section>
<!-- End Debugging -->