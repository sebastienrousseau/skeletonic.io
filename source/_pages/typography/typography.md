---
layout: page
key: 36fd4a61-115737e657fd-bf21-dd2c-115737e657fd
title: Typography
subtitle: Simply designed to fit your cascading web life.
description: A lightweight, intuitive, accessible and ultra-responsive CSS Framework to streamline your Digital and Mobile Web development needs.
keywords: css, deadon, framework, front-end, frontend, typography, gridsystem, lightweight, mobile-first, modern, responsive, semantic, skeletonic, skeletonic.css, style-agnostic, typography
image: /assets/images/backgrounds/bg-typography.png
author: Sebastien Rousseau
permalink: /typography.html
categories: [content]
section: typography
tags: [css, deadon, framework, front-end, frontend, typography, gridsystem, lightweight, mobile-first, modern, responsive, semantic, skeletonic, skeletonic.css, style-agnostic, typography]
status: publish
type: page
published: true
meta: {css, deadon, framework, front-end, frontend, typography, gridsystem, lightweight, mobile-first, modern, responsive, semantic, skeletonic, skeletonic.css, style-agnostic, typography}
date: 2021-05-25T18:45:18.063Z
robots: all
---
<!-- Fonts -->
<section class="grid-flex text-left">
    <div class="flex-4">
        <nav class="nav-page" aria-label="{{page.title}} Navigation"> 
            <ul class="nav"> 
                <li><a href="#{{'Typography' | downcase | replace: ' ', '-' }}">Typography</a></li>
                <li><a href="#{{'Header' | downcase | replace: ' ', '-' }}">Header</a></li>
                <li><a href="#{{'Font Family' | downcase | replace: ' ', '-' }}">Font Family</a></li>
                <li><a href="#{{'Examples' | downcase | replace: ' ', '-' }}">Examples</a></li>
            </ul> 
        </nav>
    </div>
    <div class="flex-8" markdown="1"> 

#### Typography

Skeletonic CSS v.{{site.version}} sets global typography and headings. The styles can be found within the skeletonic-fonts CSS. You will need to import <strong><a href="https://unpkg.com/skeletonic@{{site.version}}/dist/skeletonic-fonts.min.css">skeletonic-fonts.min.css</a></strong> (v.{{site.version}}) to display the default typography.

#### Header

Skeletonic CSS v.{{site.version}} carefully considered, readable typography. All HTML headers, &lt;h1&gt; through &lt;h6&gt;, are available. .h1 through .h6 classes are also available, for when you want to match the font styling of a heading but still want your text to be displayed inline.
<table>
    <thead>
        <tr>
            <th>Heading</th>
            <th>Display</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>&lt;h1&gt;&lt;/h1&gt;</td>
            <td><h1>Heading 1 (4.6rem)</h1></td>
        </tr>
        <tr>
            <td>&lt;h2&gt;&lt;/h2&gt;</td>
            <td><h2>Heading 2 (3.6rem)</h2></td>
        </tr>
        <tr>
            <td>&lt;h3&gt;&lt;/h3&gt;</td>
            <td><h3>Heading 3 (2.8rem)</h3></td>
        </tr>
        <tr>
            <td>&lt;h4&gt;&lt;/h4&gt;</td>
            <td><h4>Heading 4 (2.2rem)</h4></td>
        </tr>
        <tr>
            <td>&lt;h5&gt;&lt;/h5&gt;</td>
            <td><h5>Heading 5 (1.8rem)</h5></td>
        </tr>
        <tr>
            <td>&lt;h6&gt;&lt;/h6&gt;</td>
            <td><h6>Heading 6 (1.6rem)</h6></td>
        </tr>
    </tbody>
</table>                            

<pre>&lt;h1&gt;Heading 1&lt;/h1&gt;&#10;&lt;span class=&quot;h1&quot;&gt;Heading 1&lt;/span&gt;</pre>

#### Font Family

By default, Skeletonic CSS v.{{site.version}} provides a default web font (Open Sans). You might want to add your own font files into the CSS. <a href="https://www.open-sans.com/">Open Sans</a> is a humanist sans serif typeface designed by Steve Matteson.

#### Examples
<p class="left text-left">Open Sans Light 200</p>
<h5 class="light text-right right font-size ">Open Sans is a humanist sans serif typeface.</h5>
<hr />
<p class="left text-left">Open Sans Light Italic 200</p>
<h5 class="light-italic text-right right font-size ">Open Sans is a humanist sans serif typeface.</h5>
<hr />
<p class="left text-left">Open Sans Regular 400</p>
<h5 class="regular text-right right font-size">Open Sans is a humanist sans serif typeface.</h5>
<hr />
<p class="left text-left">Open Sans Regular Italic 400</p>
<h5><em class="italic text-right right font-size ">Open Sans is a humanist sans serif typeface.</em></h5>
<hr />
<p class="left text-left">Open Sans Bold 700</p>
<h5 class="bold text-right right font-size ">Open Sans is a humanist sans serif typeface.</h5>
<hr />
<p class="left text-left">Open Sans Bold Italic 700</p>
<h5 class="bold-italic text-right right font-size ">Open Sans is a humanist sans serif typeface.</h5>
<hr />
<p class="left text-left">Open Sans Semi Bold 500</p>
<h5 class="semi-bold text-right right font-size ">Open Sans is a humanist sans serif typeface.</h5>
<hr />
<p class="left text-left">Open Sans Semi Bold Italic 500</p>
<h5 class="semi-bold-italic text-right right font-size ">Open Sans is a humanist sans serif typeface.</h5>
<hr />
<p class="left text-left">Open Sans Extra Bold 900</p>
<h5 class="extra-bold text-right right font-size ">Open Sans is a humanist sans serif typeface.</h5>
<hr />
<p class="left text-left">Open Sans Extra Bold Italic 900</p>
<h5 class="extra-bold-italic text-right right font-size ">Open Sans is a humanist sans serif typeface.</h5>
</div>
</section>
<!-- End Fonts -->
