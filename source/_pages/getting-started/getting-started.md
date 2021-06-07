---
layout: default
key: 49c099da-70577ffd4525-0de2-ad39-70577ffd4525
title: Getting Started
subtitle: Getting Started with Skeletonic CSS
description: Learn how to easily integrate the Skeletonic CSS Framework into your website or web app.
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
date: 2021-05-28T20:25:43.291Z
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
  
Skip the download with **[unpkg](https://unpkg.com/skeletonic@{{ site.version | escape }}/dist/skeletonic.min.css)** or **[jsDelivr](https://registry.npmjs.org/skeletonic/-/skeletonic-{{ site.version | escape }}.tgz)** to deliver cached version of Skeletonic’s compiled CSS to your project.
  
<ul class="disc">
    <li><a href="https://unpkg.com/">unpkg</a> is a fast, global content delivery network for everything on npm,</li>
    <li><a href="https://www.jsdelivr.com">JSDelivr</a> is a free public CDN for open-source projects.</li>
</ul>

##### Install with Node.js
You will need [Node.js](https://nodejs.org/en/download/) and [Npm](https://www.npmjs.com/package/skeletonic) to get the pre-built CSS and sourcemaps. 

Install Skeletonic CSS v{{ site.version | escape }}

<div class="bd-clipboard"><button type="button" onclick="copyToClipboard(document.getElementById('clipboard-1').innerHTML)" class="button-clipboard primary-outline" title="Copy to clipboard">Copy</button></div>

<code class="padding-3" id="clipboard-1">
npm install skeletonic
</code>

##### Install with Yarn
Install with [Yarn](https://yarnpkg.com/en/package/skeletonic) to get the pre-built CSS and sourcemaps. 

<div class="bd-clipboard"><button type="button" onclick="copyToClipboard(document.getElementById('clipboard-2').innerHTML)" class="button-clipboard button-clipboard primary-outline" title="Copy to clipboard">Copy</button></div>

<code class="padding-3" id="clipboard-2">
yarn add skeletonic
</code>

##### Download the Github release
[Download](https://github.com/sebastienrousseau/skeletonic/releases) the the Github release to get all the latest source files. Dropping them into your project will boost your productivity and optimise your development workflow.
##### Clone the GitHub repository
Clone the main repository to get all source files including build scripts: 

<div class="bd-clipboard"><button type="button" onclick="copyToClipboard(document.getElementById('clipboard-3').innerHTML)" class="button-clipboard button-clipboard primary-outline" title="Copy to clipboard">Copy</button></div>

<code class="padding-3" id="clipboard-3">
git clone https://github.com/sebastienrousseau/skeletonic.git
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
<code class="padding-2">skeletonic-1.2.1
├── skeletonic-animations.css
├── skeletonic-animations.css.map
├── skeletonic-animations.min.css
├──  skeletonic-colors.css
├──  skeletonic-colors.css.map
├── skeletonic-colours.min.css
├── skeletonic-fonts.css
├── skeletonic-fonts.css.map
├── skeletonic-fonts.min.css
├── skeletonic-debug-mode.css
├── skeletonic-debug-mode.css.map
├── skeletonic-debug-mode.min.css
├── skeletonic.css
├── skeletonic.css.map
└── skeletonic.min.css
</code>
</pre>

Now simply link one of these CSS in your HTML document. In that case, the quickest and easiest way to start using skeletonic is to include a reference to the minified CSS file.

<code class="padding-2" id="clipboard-4">
    &lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;skeletonic@{{ site.version | escape }}.min.css&quot; /&gt;
</code>

The link consists of just a simple line of HTML code that you will need to put in the <>&lt;head&gt;</>  section of your HTML document.

Please feel free to grab the latest:

<code class="padding-2" id="clipboard-5">
    &lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;https://unpkg.com/skeletonic/dist/skeletonic.min.css&quot; /&gt;
</code>

You can also specify a specific version as per below. The latest version as of today is 1.2.1.

<code class="padding-2" id="clipboard-6">
    &lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;https://unpkg.com/skeletonic@1.2.1/dist/skeletonic.min.css&quot; /&gt;
</code>    

#### Extend

We provide a growing library of extensible CSS module files, utilities, themes and components ready to use as is to fit your web needs.
##### CSS Debug Mode

<code class="padding-2" id="clipboard-7">
    &lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;skeletonic-debug-mode.min.css&quot; /&gt;
</code>

##### CSS Colours

<code class="padding-2" id="clipboard-8">
    &lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;skeletonic-colours.min.css&quot; /&gt;
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
                    href="https://unpkg.com/skeletonic@1.2.1/dist/skeletonic.min.css">https://unpkg.com/skeletonic@1.2.1/dist/skeletonic.min.css</a>
            </td>
            <td>Yes</td>
            <td>No</td>
        </tr>
        <tr>
            <td><a href="https://www.jsdelivr.com/">jsDelivr</a></td>
            <td><a
                    href="https://cdn.jsdelivr.net/npm/skeletonic/dist/skeletonic.min.css">https://cdn.jsdelivr.net/npm/skeletonic/dist/skeletonic.min.css</a>
            </td>
            <td>Yes</td>
            <td>Yes</td>
        </tr>
    </tbody>
</table>

</div></section>
<!-- End Getting started -->