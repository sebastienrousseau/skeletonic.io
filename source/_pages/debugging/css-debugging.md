---
layout: page
key: dbf80a0d-8a1b16f4d1eb-8e42-8b3b-8a1b16f4d1eb
title: Debugging Tools
subtitle: Debug and diagnose CSS stylesheets with ease 
description: Use Skeletonic CSS debugging tools to visually inspect and correct page layout issues.
keywords: baselinegrid, css, cssbaselinegrid, cssdebugging, cssdebuggingtools, cssgridoverlay, debugging, debuggingtools, framework, front-end, frontend, gridoverlays, gridsystem, imagebaselinegrid, lightweight, mobile-first, modern, responsive, semantic, skeletonic, skeletonic.css
image: /assets/images/backgrounds/background-css-debugging.min.svg
author: Sebastien Rousseau
permalink: /css-debugging.html
categories: [layout]
section: css-debugging
tags: [baselinegrid, css, cssbaselinegrid, cssdebugging, cssdebuggingtools, cssgridoverlay, debugging, debuggingtools, framework, front-end, frontend, gridoverlays, gridsystem, imagebaselinegrid, lightweight, mobile-first, modern, responsive, semantic, skeletonic, skeletonic.css]
status: publish
type: page
published: true
meta: {baselinegrid, css, cssbaselinegrid, cssdebugging, cssdebuggingtools, cssgridoverlay, debugging, debuggingtools, framework, front-end, frontend, gridoverlays, gridsystem, imagebaselinegrid, lightweight, mobile-first, modern, responsive, semantic, skeletonic, skeletonic.css}
date: 2021-06-10T21:03:35.706Z
robots: all
---

<!-- Debugging -->

### {{ page.title }}

{{ page.description }}

Skeletonic CSS v.{{site.version}} provides a set of debugging tools to help you quickly find and fix your CSS layout issues.

#### Image baseline grid

The Image baseline grid allows you to use a defined debugging class on any HTML Tags to enable the grid overlay and identify issues in your UI layer.

To begin, set out a base number for your baseline grid.(E.g., 8px/16px/32px/64px).

#### .debug-grid-8

`.debug-grid-8 {&#10;    background: &#10;        transparent &#10;        url(&apos;&#10;            data:image/gif;&#10;            base64,&#10;            encoded_image&apos;) &#10;        repeat &#10;        top &#10;        left;&#10;}</code>`

#### .debug-grid-16

`.debug-grid-16 {&#10;    background: &#10;        transparent &#10;        url(&apos;data:image/gif;&#10;            base64,&#10;            encoded_image&apos;) &#10;        repeat &#10;        top &#10;        left;&#10;}`

#### .debug-grid-32

`.debug-grid-32 {&#10;    background: &#10;        transparent &#10;        url(&apos;data:image/gif;&#10;            base64,&#10;            encoded_image&apos;) &#10;        repeat &#10;        top &#10;        left;&#10;}`

#### .debug-grid-64
`.debug-grid-64 {&#10;    background: &#10;        transparent &#10;        url(&apos;&#10;            data:image/gif;&#10;            base64,&#10;            encoded_image&#10;            &apos;) &#10;        repeat &#10;        top &#10;        left;&#10;}`

#### CSS baseline grid

We also have a smart, responsive, CSS baseline grid overlay version to fit your cascading web life.

To use it, you will need to import [skeletonic-debug-mode.css](https://unpkg.com/skeletonic@{{site.version}}/dist/skeletonic-debug-mode.min.css) to display the CSS Grid overlay automatically in your &lt;body&gt; tag.

<!-- End Debugging -->
