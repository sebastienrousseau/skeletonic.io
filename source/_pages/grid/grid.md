---
layout: page
key: ff9b191a-b2a608ba3475-40a1-660d-b2a608ba3475
title: Grid System
subtitle: A fully responsive, 12 column grid-based layout system making it easier to design web pages.
description: A responsive CSS grid using flexbox for desktop, tablet and mobile viewports.
keywords: 12column, columns, container, css, cssflexbox, cssgrid, cssgridsystem, flexbox, framework, front-end, frontend, fullyresponsive, gridsystem, light-weight, mobile-first, modern, responsive, robust, rows, semantic, simplecssgridsystem, skeletonic, skeletonic.css
image: /assets/images/components/grid.min.svg
author: Sebastien Rousseau
permalink: /grid.html
api: /api/v1/grid/
categories: [layout]
section: grid
tags: [12column, columns, container, css, cssflexbox, cssgrid, cssgridsystem, flexbox, framework, front-end, frontend, fullyresponsive, gridsystem, light-weight, mobile-first, modern, responsive, robust, rows, semantic, simplecssgridsystem, skeletonic, skeletonic.css]
status: publish
type: page
published: true
meta: { 12column, columns, container, css, cssflexbox, cssgrid, cssgridsystem, flexbox, framework, front-end, frontend, fullyresponsive, gridsystem, light-weight, mobile-first, modern, responsive, robust, rows, semantic, simplecssgridsystem, skeletonic, skeletonic.css }
date: 2021-06-12T11:12:10.595Z
robots: all
---

<!-- Grid system -->
<section class="grid-flex text-left">
    <div class="flex-12" markdown="1">

#### {{ page.title }}

The Skeletonic CSS grid system is the fastest and easy way to create responsive web page layout.

#### Overview

Skeletonic CSS v.{{site.version}} has a simple, fluid, mobile-first, CSS flexbox based, responsive grid that collapses at small viewport.

It is based on a 12-columns fluid grid and constitutes the geometric foundation of all the visual elements of the Skeletonic CSS framework, from typography to forms, tables and visual components.

#### Container

The Container is the main layout element and is required when using the Skeletonic CSS v.{{site.version}} default grid system. The Container provides a means to center and horizontally pad the site’s content. The box-sizing property guarantees that the content box shrinks seamlessly to make space for padding and borders.

<code><pre>
&lt;style&gt;        &#10;    .container&#10;    {&#10;        position: relative;&#10;        box-sizing: border-box;&#10;        width: 96%;&#10;        margin: 0 auto;&#10;        padding: 0 24.270509831248425 rem;&#10;    }   &#10;&lt;/style&gt;        &#10;&#10;&lt;div class=&quot;container&quot;&gt;&#10;  &lt;!-- Content here --&gt;&#10;&lt;/div&gt;
        </pre></code>

#### The Grid system

Skeletonic CSS v.{{site.version}} grid system uses a series of container, rows, and columns to layout and align your content. Below is a basic example of how the grid comes together. The columns are centered in the page with the parent Container class <strong>.container</strong>, the layout is governed by Flex class <strong>.flex-#</strong> properties. Each Flex column has pre-defined horizontal padding (called a gutter) for controlling the space between them.

</div>
</section>

<section class="grid-flex">
    <div class="background-color-grey-100 border-color-grey-900 flex-1 text-center margin-bottom-1">
        <p class="color-black">flex-1</p>
    </div>
    <div class="background-color-grey-100 border-color-grey-900  flex-11 text-center margin-bottom-1">
        <p class="color-black">flex-11</p>
    </div>
</section>
<section class="grid-flex">
    <div class="background-color-grey-100 border-color-grey-900  flex-2 text-center margin-bottom-1">
        <p class="color-black">flex-2</p>
    </div>
    <div class="background-color-grey-100 border-color-grey-900  flex-10 text-center margin-bottom-1">
        <p class="color-black">flex-10</p>
    </div>
</section>
<section class="grid-flex">
    <div class="background-color-grey-100 border-color-grey-900  flex-3 text-center margin-bottom-1">
        <p class="color-black">flex-3</p>
    </div>
    <div class="background-color-grey-100 border-color-grey-900  flex-9 text-center margin-bottom-1">
        <p class="color-black">flex-9</p>
    </div>
</section>
<section class="grid-flex">
    <div class="background-color-grey-100 border-color-grey-900  flex-4 text-center margin-bottom-1">
        <p class="color-black">flex-4</p>
    </div>
    <div class="background-color-grey-100 border-color-grey-900  flex-8 text-center margin-bottom-1">
        <p class="color-black">flex-8</p>
    </div>
</section>
<section class="grid-flex">
    <div class="background-color-grey-100 border-color-grey-900  flex-5 text-center margin-bottom-1">
        <p class="color-black">flex-5</p>
    </div>
    <div class="background-color-grey-100 border-color-grey-900  flex-7 text-center margin-bottom-1">
        <p class="color-black">flex-7</p>
    </div>
</section>
<section class="grid-flex">
    <div class="background-color-grey-100 border-color-grey-900  flex-6 text-center margin-bottom-1">
        <p class="color-black">flex-6</p>
    </div>
    <div class="background-color-grey-100 border-color-grey-900  flex-6 text-center margin-bottom-1">
        <p class="color-black">flex-6</p>
    </div>
</section>
<section class="grid-flex">
    <div class="background-color-grey-100 border-color-grey-900  flex-7 text-center margin-bottom-1">
        <p class="color-black">flex-7</p>
    </div>
    <div class="background-color-grey-100 border-color-grey-900  flex-5 text-center margin-bottom-1">
        <p class="color-black">flex-5</p>
    </div>
</section>
<section class="grid-flex">
    <div class="background-color-grey-100 border-color-grey-900  flex-8 text-center margin-bottom-1">
        <p class="color-black">flex-8</p>
    </div>
    <div class="background-color-grey-100 border-color-grey-900  flex-4 text-center margin-bottom-1">
        <p class="color-black">flex-4</p>
    </div>
</section>
<section class="grid-flex">
    <div class="background-color-grey-100 border-color-grey-900  flex-9 text-center margin-bottom-1">
        <p class="color-black">flex-9</p>
    </div>
    <div class="background-color-grey-100 border-color-grey-900  flex-3 text-center margin-bottom-1">
        <p class="color-black">flex-3</p>
    </div>
</section>
<section class="grid-flex">
    <div class="background-color-grey-100 border-color-grey-900  flex-10 text-center margin-bottom-1">
        <p class="color-black">flex-10</p>
    </div>
    <div class="background-color-grey-100 border-color-grey-900  flex-2 text-center margin-bottom-1">
        <p class="color-black">flex-2</p>
    </div>
</section>
<section class="grid-flex">
    <div class="background-color-grey-100 border-color-grey-900  flex-11 text-center margin-bottom-1">
        <p class="color-black">flex-11</p>
    </div>
    <div class="background-color-grey-100 border-color-grey-900  flex-1 text-center margin-bottom-1">
        <p class="color-black">flex-1</p>
    </div>
</section>
<section class="grid-flex">
    <div class="background-color-grey-100 border-color-grey-900  flex-12 text-center margin-bottom-1">
        <p class="color-black">flex-12</p>
    </div>
</section>

<section class="grid-flex text-left">
    <div class="flex-12" markdown="1">

#### How it works

Flex classes indicate the number of columns you’d like to use out of the possible 12 per row. So, if you want a two column responsive layout, where your page will display two equal-width columns across, you can simply use the class <strong>.flex-6.</strong>

</div>
</section>

<section class="grid-flex">
    <div class="flex-12 text-left">
        <h5>Twelve Column Responsive Layout</h5>
        <p>Twelve equal-width columns across the page.</p>
    </div>
</section>

<section class="grid-flex">
    <div class="background-color-grey-100 border-color-grey-900  flex-1 text-center margin-bottom-1">
        <p class="color-black">flex-1</p>
    </div>
    <div class="background-color-grey-100 border-color-grey-900  flex-1 text-center margin-bottom-1">
        <p class="color-black">flex-1</p>
    </div>
    <div class="background-color-grey-100 border-color-grey-900  flex-1 text-center margin-bottom-1">
        <p class="color-black">flex-1</p>
    </div>
    <div class="background-color-grey-100 border-color-grey-900  flex-1 text-center margin-bottom-1">
        <p class="color-black">flex-1</p>
    </div>
    <div class="background-color-grey-100 border-color-grey-900  flex-1 text-center margin-bottom-1">
        <p class="color-black">flex-1</p>
    </div>
    <div class="background-color-grey-100 border-color-grey-900  flex-1 text-center margin-bottom-1">
        <p class="color-black">flex-1</p>
    </div>
    <div class="background-color-grey-100 border-color-grey-900  flex-1 text-center margin-bottom-1">
        <p class="color-black">flex-1</p>
    </div>
    <div class="background-color-grey-100 border-color-grey-900  flex-1 text-center margin-bottom-1">
        <p class="color-black">flex-1</p>
    </div>
    <div class="background-color-grey-100 border-color-grey-900  flex-1 text-center margin-bottom-1">
        <p class="color-black">flex-1</p>
    </div>
    <div class="background-color-grey-100 border-color-grey-900  flex-1 text-center margin-bottom-1">
        <p class="color-black">flex-1</p>
    </div>
    <div class="background-color-grey-100 border-color-grey-900  flex-1 text-center margin-bottom-1">
        <p class="color-black">flex-1</p>
    </div>
    <div class="background-color-grey-100 border-color-grey-900  flex-1 text-center margin-bottom-1">
        <p class="color-black">flex-1</p>
    </div>
</section>
<section class="grid-flex">
    <div class="flex-12 text-left">
        <h5>Six Column Responsive Layout</h5>
        <p>Six equal-width columns across the page.</p>
    </div>
</section>
<section class="grid-flex">
    <div class="background-color-grey-100 border-color-grey-900  flex-2 text-center">
        <p class="color-black">flex-2</p>
    </div>
    <div class="background-color-grey-100 border-color-grey-900  flex-2 text-center">
        <p class="color-black">flex-2</p>
    </div>
    <div class="background-color-grey-100 border-color-grey-900  flex-2 text-center">
        <p class="color-black">flex-2</p>
    </div>
    <div class="background-color-grey-100 border-color-grey-900  flex-2 text-center">
        <p class="color-black">flex-2</p>
    </div>
    <div class="background-color-grey-100 border-color-grey-900  flex-2 text-center">
        <p class="color-black">flex-2</p>
    </div>
    <div class="background-color-grey-100 border-color-grey-900  flex-2 text-center">
        <p class="color-black">flex-2</p>
    </div>
</section>
<section class="grid-flex">
    <div class="flex-12 text-left">
        <h5>Four Column Responsive Layout</h5>
        <p>Four equal-width columns across the page.</p>
    </div>
</section>
<section class="grid-flex">
    <div class="background-color-grey-100 border-color-grey-900  flex-3 text-center">
        <p class="color-black">flex-3</p>
    </div>
    <div class="background-color-grey-100 border-color-grey-900  flex-3 text-center">
        <p class="color-black">flex-3</p>
    </div>
    <div class="background-color-grey-100 border-color-grey-900  flex-3 text-center">
        <p class="color-black">flex-3</p>
    </div>
    <div class="background-color-grey-100 border-color-grey-900  flex-3 text-center">
        <p class="color-black">flex-3</p>
    </div>
</section>
<section class="grid-flex">
    <div class="flex-12 text-left">
        <h5>Three Column Responsive Layout</h5>
        <p>Three equal-width columns across the page.</p>
    </div>
</section>
<section class="grid-flex">
    <div class="background-color-grey-100 border-color-grey-900  flex-4 text-center">
        <p class="color-black">flex-4</p>
    </div>
    <div class="background-color-grey-100 border-color-grey-900  flex-4 text-center">
        <p class="color-black">flex-4</p>
    </div>
    <div class="background-color-grey-100 border-color-grey-900  flex-4 text-center">
        <p class="color-black">flex-4</p>
    </div>
</section>
<section class="grid-flex">
    <div class="flex-12 text-left">
        <h5>Two Column Responsive Layout</h5>
        <p>Two equal-width columns across the page.</p>
    </div>
</section>
<section class="grid-flex">
    <div class="background-color-grey-100 border-color-grey-900  flex-6 text-center">
        <p class="color-black">flex-6</p>
    </div>
    <div class="background-color-grey-100 border-color-grey-900  flex-6 text-center">
        <p class="color-black">flex-6</p>
    </div>
</section>
<section class="grid-flex">
    <div class="flex-12 text-left">
        <h5>One Column Responsive Layout</h5>
        <p>One column width across the page.</p>
    </div>
</section>
<section class="grid-flex">
    <div class="background-color-grey-100 border-color-grey-900  flex-12 text-center">
        <p class="color-black">flex-12</p>
    </div>
</section>
<section class="grid-flex text-left">
    <row class="flex-10">
        <code><pre>
&lt;section class=&quot;grid-flex&quot;&gt;
    &lt;row class=&quot;background-color-red-100 flex-1&quot;&gt;&lt;p&gt;flex-1&lt;/p&gt;&lt;/row&gt;
    &lt;row class=&quot;background-color-red-100 flex-11&quot;&gt;&lt;p&gt;flex-11&lt;/p&gt;&lt;/row&gt;
&lt;/section&gt;

&lt;section class=&quot;grid-flex&quot;&gt;
    &lt;row class=&quot;background-color-pink-100 flex-2&quot;&gt;&lt;p&gt;flex-2&lt;/p&gt;&lt;/row&gt;
    &lt;row class=&quot;background-color-pink-100
    flex-10&quot;&gt;&lt;p&gt;flex-10&lt;/p&gt;&lt;/row&gt;
&lt;/section&gt;

&lt;section class=&quot;grid-flex&quot;&gt;
    &lt;row class=&quot;background-color-purple-100
    flex-3&quot;&gt;&lt;p&gt;flex-3&lt;/p&gt;&lt;/row&gt;
    &lt;row class=&quot;background-color-purple-100
    flex-9&quot;&gt;&lt;p&gt;flex-9&lt;/p&gt;&lt;/row&gt;
&lt;/section&gt;

&lt;section class=&quot;grid-flex&quot;&gt;
    &lt;row class=&quot;background-color-deep-purple-100
    flex-4&quot;&gt;&lt;p&gt;flex-4&lt;/p&gt;&lt;/row&gt;
    &lt;row class=&quot;background-color-deep-purple-100
    flex-8&quot;&gt;&lt;p&gt;flex-8&lt;/p&gt;&lt;/row&gt;
&lt;/section&gt;

&lt;section class=&quot;grid-flex&quot;&gt;
    &lt;row class=&quot;background-color-indigo-100
    flex-5&quot;&gt;&lt;p&gt;flex-5&lt;/p&gt;&lt;/row&gt;
    &lt;row class=&quot;background-color-indigo-100
    flex-7&quot;&gt;&lt;p&gt;flex-7&lt;/p&gt;&lt;/row&gt;
&lt;/section&gt;

&lt;section class=&quot;grid-flex&quot;&gt;
    &lt;row class=&quot;background-color-blue-100 flex-6&quot;&gt;&lt;p&gt;flex-6&lt;/p&gt;&lt;/row&gt;
    &lt;row class=&quot;background-color-blue-100 flex-6&quot;&gt;&lt;p&gt;flex-6&lt;/p&gt;&lt;/row&gt;
&lt;/section&gt;

&lt;section class=&quot;grid-flex&quot;&gt;
    &lt;row class=&quot;background-color-light-blue-100
    flex-7&quot;&gt;&lt;p&gt;flex-7&lt;/p&gt;&lt;/row&gt;
    &lt;row class=&quot;background-color-light-blue-100
    flex-5&quot;&gt;&lt;p&gt;flex-5&lt;/p&gt;&lt;/row&gt;
&lt;/section&gt;

&lt;section class=&quot;grid-flex&quot;&gt;
    &lt;row class=&quot;background-color-cyan-100 flex-8&quot;&gt;&lt;p&gt;flex-8&lt;/p&gt;&lt;/row&gt;
    &lt;row class=&quot;background-color-cyan-100 flex-4&quot;&gt;&lt;p&gt;flex-4&lt;/p&gt;&lt;/row&gt;
&lt;/section&gt;

&lt;section class=&quot;grid-flex&quot;&gt;
    &lt;row class=&quot;background-color-teal-100 flex-9&quot;&gt;&lt;p&gt;flex-9&lt;/p&gt;&lt;/row&gt;
    &lt;row class=&quot;background-color-teal-100 flex-3&quot;&gt;&lt;p&gt;flex-3&lt;/p&gt;&lt;/row&gt;
&lt;/section&gt;

&lt;section class=&quot;grid-flex&quot;&gt;
    &lt;row class=&quot;background-color-green-100
    flex-10&quot;&gt;&lt;p&gt;flex-10&lt;/p&gt;&lt;/row&gt;
    &lt;row class=&quot;background-color-green-100 flex-2&quot;&gt;&lt;p&gt;flex-2&lt;/p&gt;&lt;/row&gt;
&lt;/section&gt;

&lt;section class=&quot;grid-flex&quot;&gt;
    &lt;row class=&quot;background-color-light-green-100
    flex-11&quot;&gt;&lt;p&gt;flex-11&lt;/p&gt;&lt;/row&gt;
    &lt;row class=&quot;background-color-light-green-100
    flex-1&quot;&gt;&lt;p&gt;flex-1&lt;/p&gt;&lt;/row&gt;
&lt;/section&gt;

&lt;section class=&quot;grid-flex&quot;&gt;
    &lt;row class=&quot;background-color-lime-100
    flex-12&quot;&gt;&lt;p&gt;flex-12&lt;/p&gt;&lt;/row&gt;
&lt;/section&gt;
        </pre></code>
    </row>
</section>
<section class="grid-flex text-left">
    <div class="flex-12" markdown="1">

#### Grid options

Skeletonic CSS v.{{site.version}} Flexbox Layout aims at providing a more efficient way to lay out, align and distribute space among items in a container.

#### grid-flex

The flex-wrap CSS property sets the direction that lines are stacked. The flex-wrap: wrap property will allow our items to wrap as the parent container shrinks or is constrained.

<code><pre>
.grid-flex&#10;{&#10;    align-items: center;&#10;    flex-wrap: wrap;&#10;}
</pre></code>

</div>
</section>
<!-- End The Grid -->