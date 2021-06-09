---
layout: default
key: 49c099da-70577ffd4525-0de2-ad39-70577ffd4525
title: Getting Started
subtitle: Getting Started with Skeletonic CSS
description: Learn how to easily integrate Skeletonic CSS Framework into your website or web app.
keywords: CSS, deadon, framework, front-end, frontend, gettingstarted, gridsystem, lightweight, mobile-first, modern, responsive, semantic, skeletonic, skeletonic.css, style-agnostic, typography
image: /assets/images/backgrounds/bg-getting-started.png
author: Sebastien Rousseau
permalink: /getting-started.html
categories: [content]
section: getting-started
tags: [CSS, deadon, framework, front-end, frontend, gettingstarted, gridsystem, lightweight, mobile-first, modern, responsive, semantic, skeletonic, skeletonic.css, style-agnostic, typography]
status: publish
type: page
published: true
meta: { CSS, deadon, framework, front-end, frontend, gettingstarted, gridsystem, lightweight, mobile-first, modern, responsive, semantic, skeletonic, skeletonic.css, style-agnostic, typography }
date: 2021-06-09T16:08:18.725Z
robots: all
---

<!-- Getting started -->
<section class="grid-flex text-left">
    <div class="flex-12" markdown="1">

#### Intro

New to Skeletonic CSS v{{ site.version | escape }}?  In this version, it's now easy to choose and install just the features you need. And because of its reduced minimum footprint, it integrates quickly to your web app.

Ready to install? We'll walk you through it, step-by-step.

#### Download and install

You can install Skeletonic CSS via NPM or one of our CDN providers. You can also host the distribution files locally if you prefer to.
##### Install from CDN
The easiest way to use the Skeletonic CSS is via CDN. You don't need to install anything. Just add the CSS file to your <head> tag. You can import the compiled files to your site or web app directly from our preferred CDNs:
  
Skip the download with **[unpkg](https://unpkg.com/skeletonic-stylus@{{ site.version | escape }}/css/skeletonic.min.css)** or **[jsDelivr](https://cdn.jsdelivr.net/npm/skeletonic-stylus@{{ site.version | escape }}/css/skeletonic.min.css)** to deliver cached version of Skeletonic’s compiled CSS to your project.
  
<ul class="disc">
    <li><a href="https://unpkg.com/">unpkg</a> is a fast, global content delivery network for everything on npm,</li>
    <li><a href="https://www.jsdelivr.com">JSDelivr</a> is a free public CDN for open-source projects.</li>
</ul>

##### Install with Node.js
You will need [Node.js](https://nodejs.org/en/download/) and [Npm](https://www.npmjs.com/package/skeletonic) to get the pre-built CSS and sourcemaps.

Install Skeletonic CSS v{{ site.version | escape }}

<div class="bd-clipboard"><button type="button" onclick="copyToClipboard(document.getElementById('clipboard-1').innerHTML)" class="button-clipboard primary-outline" title="Copy to clipboard">Copy</button></div>

<code class="padding-3" id="clipboard-1">
npm install skeletonic-stylus
</code>

##### Install with Yarn
Install with [Yarn](https://yarnpkg.com/en/package/skeletonic-stylus) to get the pre-built CSS and sourcemaps. 

<div class="bd-clipboard"><button type="button" onclick="copyToClipboard(document.getElementById('clipboard-2').innerHTML)" class="button-clipboard primary-outline" title="Copy to clipboard">Copy</button></div>

<code class="padding-3" id="clipboard-2">
yarn add skeletonic-stylus
</code>

##### Download the Github release
[Download](https://github.com/sebastienrousseau/skeletonic-stylus/releases/tag/v{{ site.version | escape }}) the the Github release to get all the latest source files. Dropping them into your project will boost your productivity and optimise your development workflow.
##### Clone the GitHub repository
Clone the main repository to get all source files including build scripts:

<div class="bd-clipboard"><button type="button" onclick="copyToClipboard(document.getElementById('clipboard-3').innerHTML)" class="button-clipboard primary-outline" title="Copy to clipboard">Copy</button></div>

<code class="padding-3" id="clipboard-3">
git clone https://github.com/sebastienrousseau/skeletonic-stylus.git
</code>

##### CSS, LESS & SASS distributions
Skeletonic CSS provides a separate repository for a CSS, LESS & SASS only distributions.

<ul class="disc">
    <li>CSS Repository</li>
    <li>LESS Repository</li>
    <li>SASS Repository</li>
</ul>

You can install both CSS and LESS via NPM or download any of them and use them in your project as local files.
#### Whats included

Within the download you'll find all the source files, compiled and minified CSS bundles as well as the [CSS sourcemaps](https://developers.google.com/web/tools/chrome-devtools/javascript/source-maps) grouped into the **dist** folder. 

You'll see something like this:

<pre>
<code class="padding-2">skeletonic-1.0.5
dist
├── README.md
├── css
│   ├── skeletonic-animations.css
│   ├── skeletonic-animations.css.map
│   ├── skeletonic-animations.min.css
│   ├── skeletonic-colors.css
│   ├── skeletonic-colors.css.map
│   ├── skeletonic-colors.min.css
│   ├── skeletonic-fonts.css
│   ├── skeletonic-fonts.css.map
│   ├── skeletonic-fonts.min.css
│   ├── skeletonic.css
│   ├── skeletonic.css.map
│   └── skeletonic.min.css
├── filesize-report.txt
├── images
│   ├── button-primary.svg
│   ├── button-secondary.svg
│   ├── skeletonic-stylus-readme.svg
│   └── skeletonic-stylus.svg
├── package.json
└── stylus
    ├── README.md
    ├── animations
    │   ├── README.md
    │   ├── _contents.styl
    │   ├── bounce.styl
    │   ├── chameleon.styl
    │   ├── fade-in.styl
    │   ├── fade-out.styl
    │   ├── flash.styl
    │   ├── pop-in.styl
    │   ├── pulse.styl
    │   ├── rotation.styl
    │   ├── shake.styl
    │   ├── vanish-in.styl
    │   ├── vanish-out.styl
    │   ├── wobble.styl
    │   └── zoom-in.styl
    ├── base
    │   ├── README.md
    │   ├── _contents.styl
    │   ├── helpers.styl
    │   └── reset.styl
    ├── components
    │   ├── README.md
    │   ├── _contents.styl
    │   ├── card.styl
    │   ├── header.styl
    │   └── navbar.styl
    ├── configurations
    │   ├── README.md
    │   ├── _contents.styl
    │   ├── colors.styl
    │   └── variables.styl
    ├── debugging
    │   ├── base64
    │   └── images
    ├── elements
    │   ├── README.md
    │   ├── _contents.styl
    │   ├── button.styl
    │   ├── clipboard.styl
    │   ├── code.styl
    │   ├── divider.styl
    │   ├── fieldset.styl
    │   ├── form.styl
    │   ├── image.styl
    │   ├── label.styl
    │   ├── link-effects.styl
    │   ├── link.styl
    │   ├── list.styl
    │   ├── margin.styl
    │   ├── padding.styl
    │   └── table.styl
    ├── fonts
    │   ├── README.md
    │   ├── _contents.styl
    │   └── font-face.styl
    ├── layout
    │   ├── README.md
    │   ├── _contents.styl
    │   ├── container.styl
    │   ├── grid.styl
    │   └── media-queries.styl
    ├── palettes
    │   ├── README.md
    │   ├── _contents.styl
    │   ├── material.styl
    │   ├── tachyons.styl
    │   └── websafe.styl
    ├── skeletonic.styl
    └── utilities
        ├── README.md
        ├── _contents.styl
        └── mixins.styl
15 directories, 81 files
</code>
</pre>

Now simply link one of these CSS in your HTML document. In that case, the quickest and easiest way to start using skeletonic is to include a reference to the minified CSS file.

<code class="padding-2" id="clipboard-4">
    &lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;skeletonic@{{ site.version | escape }}.min.css&quot; /&gt;
</code>

The link consists of just a simple line of HTML code that you will need to put in the <>&lt;head&gt;</>  section of your HTML document.

Please feel free to grab the latest:

<code class="padding-2" id="clipboard-5">
    &lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;https://unpkg.com/skeletonic-stylus@{{ site.version | escape }}/css/skeletonic.min.css&quot; /&gt;
</code>

You can also specify a specific version as per below. The latest version as of today is 1.0.5.

<code class="padding-2" id="clipboard-6">
    &lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;https://unpkg.com/skeletonic-stylus@{{ site.version | escape }}/css/skeletonic.min.css&quot; /&gt;
</code>    

##### CSS Colours

<code class="padding-2" id="clipboard-8">
    &lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;skeletonic-colors.min.css&quot; /&gt;
</code>    

##### CSS Animations

<code class="padding-2" id="clipboard-9">
    &lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;skeletonic-animations.min.css&quot; /&gt;
</code>

#### Alternate CDN locations {#alternate-cdn-locations}
The following table lists alternate CDN locations where Skeletonic is hosted.

<table class="size-full-width">
    <thead>
        <tr>
            <th>CDN</th>
            <th>URL</th>
            <th>HTTPS</th>
            <th>Combo</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><a href="https://unpkg.com/">unpkg</a></td>
            <td><a
                    href="https://unpkg.com/skeletonic-stylus@{{ site.version | escape }}/css/skeletonic.min.css">https://unpkg.com/skeletonic-stylus@{{ site.version | escape }}/css/skeletonic.min.css</a>
            </td>
            <td>Yes</td>
            <td>No</td>
        </tr>
        <tr>
            <td><a href="https://www.jsdelivr.com/">jsDelivr</a></td>
            <td><a
                    href="https://cdn.jsdelivr.net/npm/skeletonic-stylus@{{ site.version | escape }}/css/skeletonic.min.css">https://cdn.jsdelivr.net/npm/skeletonic-stylus@{{ site.version | escape }}/css/skeletonic.min.css</a>
            </td>
            <td>Yes</td>
            <td>Yes</td>
        </tr>
    </tbody>
</table>

</div></section>
<!-- End Getting started -->