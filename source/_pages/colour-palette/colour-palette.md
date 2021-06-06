---
layout: page
key: 05d3428d-76581293113a-5a29-0a37-76581293113a
title: Colour Palette
subtitle: Simply designed to fit your cascading web life.
description: Skeletonic CSS comes with a basic set of custom properties, sometimes referred to as CSS variables or cascading variables.
keywords: colour-palette, css, deadon, framework, front-end, frontend, gridsystem, lightweight, mobile-first, modern, responsive, semantic, skeletonic, skeletonic.css, style-agnostic
image: /assets/images/backgrounds/background-colour-palette.png
author: Sebastien Rousseau
permalink: /colour-palette.html
categories: [components]
section: colour-palette
tags: [colour-palette, css, deadon, framework, front-end, frontend, gridsystem, lightweight, mobile-first, modern, responsive, semantic, skeletonic, skeletonic.css, style-agnostic]
status: publish
type: page
published: true
meta: {colour-palette, css, deadon, framework, front-end, frontend, gridsystem, lightweight, mobile-first, modern, responsive, semantic, skeletonic, skeletonic.css, style-agnostic}
date: 2021-05-28T20:25:43.291Z
robots: all
---

<!-- Tachyons Colour Palette -->
<section class="grid-flex text-left">    
    <div class="flex-12" markdown="1">

### {{ page.title }}
{{ page.description }}

#### Colour Variables

Skeletonic CSS v.{{site.version}} pr    ovides a set of colour palettes and variables as a way to store information that we want to reuse throughout our stylesheet. These are designed to be harmonious, ensure accessible content, and help create contrast between UI elements.


#### Colour Styles available

The Skeletonic CSS v.{{site.version}} colour variables palette has a smooth range of shadows ranging from brightest to darkest

You will need to import <a href="https://unpkg.com/skeletonic@{{site.version}}/dist/skeletonic.min.css"> skeletonic-colors.css</a> to display the colours.


<section class="grid-flex text-left">
    <div class="flex-6 padding-3">
        <table class="size-full-width">
            <thead>
                <tr>
                    <th>Primary palette</th>
                    <th>Weight class</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Most far away</td>
                    <td>50</td>
                </tr>
                <tr>
                    <td>Far far away</td>
                    <td>100</td>
                </tr>
                <tr>
                    <td>Far away</td>
                    <td>200</td>
                </tr>
                <tr>
                    <td>Middle far</td>
                    <td>300</td>
                </tr>
                <tr>
                    <td>Middle</td>
                    <td>400</td>
                </tr>
                <tr>
                    <td>Middle close</td>
                    <td>500</td>
                </tr>
                <tr>
                    <td>Close</td>
                    <td>600</td>
                </tr>
                <tr>
                    <td>Very close</td>
                    <td>700</td>
                </tr>
                <tr>
                    <td>Very very close</td>
                    <td>800</td>
                </tr>
                <tr>
                    <td>Closest</td>
                    <td>900</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="flex-6 padding-3">
        <table class="size-full-width">
            <thead>
                <tr>
                    <th>Accent palette</th>
                    <th>Weight class</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Most far</td>
                    <td>A100</td>
                </tr>
                <tr>
                    <td>Middle</td>
                    <td>A200</td>
                </tr>
                <tr>
                    <td>Close</td>
                    <td>A400</td>
                </tr>
                <tr>
                    <td>Closest</td>
                    <td>A700</td>
                </tr>
            </tbody>
        </table>
    </div>
</section>        
    
<section class="grid-flex text-left">
    <div class="size-full-width" markdown="1">

##### Basic colours 

<code>$black = #000000;&#10;$white = #ffffff;&#10;$transparent = rgba(0, 0, 0, 0);&#10;$full-black  = rgba(0, 0, 0, 1);&#10;$dark-black  = rgba(0, 0, 0, 0.87);&#10;$lightblack = rgba(0, 0, 0, 0.54);&#10;$min-black   = rgba(0, 0, 0, 0.26);&#10;$faint-black = rgba(0, 0, 0, 0.12);&#10;$full-white  = rgba(255, 255, 255, 1);&#10;$dark-white  = rgba(255, 255, 255, 0.87);&#10;$lightwhite = rgba(255, 255, 255, 0.54);</code>
</div>
<div class="size-full-width" markdown="1">

##### Range of non accent &amp; accent colours

<code>$red-50 to $red-A700;&#10;$pink-50 to $pink-A700;&#10;$purple-50 to $purple-A700;&#10;$deep-purple-50 to $deep-purple-A700;&#10;$indigo-50 to $indigo-A700;&#10;$blue-50 to $blue-A700;&#10;$lightblue-50 to $lightblue-A700;&#10;$cyan-50 to $cyan-A700;&#10;$teal-50 to $teal-A700;&#10;$green-50 to $green-A700;&#10;$lightgreen-50 to $lightgreen-A700;&#10;$lime-50 to $lime-A700;&#10;$yellow-50 to $yellow-A700;&#10;$amber-50 to $amber-A700;&#10;$orange-50 to $orange-A700;&#10;$deep-orange-50 to $deep-orange-A700;&#10;$brown-50 to $brown-A700;&#10;$blue-grey-50 to $blue-grey-A700;&#10;$grey-50 to $grey-A700;</code>
</div>
</section>        
<!-- Material Design colours -->
<section class="grid-flex text-left">
    <div class="flex-12" markdown="1">

#### Material Design colours

The background colours are based on <a href="https://material.io/guidelines/style/color.html">Google's Material Design Colour palette</a>.

</div>
</section>
<section class="card grid-flex text-left">
    <div class="flex-3">
        <p class="background-color-red-a700 color-white" style=" padding: 1rem;">.background-color-red-a700</p>
        <p class="background-color-pink-a700 color-white" style=" padding: 1rem;">.background-color-pink-a700
        </p>
        <p class="background-color-purple-a700 color-white" style=" padding: 1rem;">
            .background-color-purple-a700</p>
        <p class="background-color-deep-purple-a700 color-white" style=" padding: 1rem;">
            .background-color-deep-purple-a700</p>
        <p class="background-color-indigo-a700 color-white" style=" padding: 1rem;">
            .background-color-indigo-a700</p>
        <p class="background-color-blue-a700 color-white" style=" padding: 1rem;">.background-color-blue-a700
        </p>
    </div>
    <div class="flex-3">
        <p class="background-color-light-blue-a700 color-white" style=" padding: 1rem;">
            .background-color-light-blue-a700</p>
        <p class="background-color-cyan-a700 color-white" style=" padding: 1rem;">.background-color-cyan-a700
        </p>
        <p class="background-color-teal-a700 color-white" style=" padding: 1rem;">.background-color-teal-a700
        </p>
        <p class="background-color-green-a700 color-white" style=" padding: 1rem;">.background-color-green-a700
        </p>
        <p class="background-color-light-green-700 color-white" style=" padding: 1rem;">
            .background-color-light-green-700</p>
        <p class="background-color-lime-a700 color-white" style=" padding: 1rem;">.background-color-lime-a700
        </p>
    </div>
    <div class="flex-3">
        <p class="background-color-yellow-a700 color-white" style=" padding: 1rem;">
            .background-color-yellow-a700</p>
        <p class="background-color-amber-a700 color-white" style=" padding: 1rem;">.background-color-amber-a700
        </p>
        <p class="background-color-orange-a700 color-white" style=" padding: 1rem;">
            .background-color-orange-a700</p>
        <p class="background-color-deep-orange-a700 color-white" style=" padding: 1rem;">
            .background-color-deep-orange-a700</p>
        <p class="background-color-brown-900 color-white" style=" padding: 1rem;">.background-color-brown-900
        </p>
        <p class="background-color-blue-grey-900 color-white" style=" padding: 1rem;">
            .background-color-blue-grey-900</p>
    </div>
</section>
<!-- End Material Design colours -->

<!-- Text colours -->
<section class="grid-flex text-left">
    <div class="flex-12" markdown="1">

#### Text colours

</div>
</section>
<section class="card grid-flex text-left">
    <div class="flex-3">
        <h5 class="color-red-a700">Red</h5>
        <ul class="disc">
            <li class="color-red-50">.color-red-50</li>
            <li class="color-red-100">.color-red-100</li>
            <li class="color-red-200">.color-red-200</li>
            <li class="color-red-300">.color-red-300</li>
            <li class="color-red-400">.color-red-400</li>
            <li class="color-red-500">.color-red-500</li>
            <li class="color-red-600">.color-red-600</li>
            <li class="color-red-700">.color-red-700</li>
            <li class="color-red-800">.color-red-800</li>
            <li class="color-red-900">.color-red-900</li>
            <li class="color-red-a100">.color-red-a100</li>
            <li class="color-red-a200">.color-red-a200</li>
            <li class="color-red-a400">.color-red-a400</li>
            <li class="color-red-a700">.color-red-a700</li>
        </ul>
    </div>
    <div class="flex-3">
        <h5 class="color-pink-a700">Pink</h5>
        <ul class="disc">
            <li class="color-pink-50">.color-pink-50</li>
            <li class="color-pink-100">.color-pink-100</li>
            <li class="color-pink-200">.color-pink-200</li>
            <li class="color-pink-300">.color-pink-300</li>
            <li class="color-pink-400">.color-pink-400</li>
            <li class="color-pink-500">.color-pink-500</li>
            <li class="color-pink-600">.color-pink-600</li>
            <li class="color-pink-700">.color-pink-700</li>
            <li class="color-pink-800">.color-pink-800</li>
            <li class="color-pink-900">.color-pink-900</li>
            <li class="color-pink-a100">.color-pink-a100</li>
            <li class="color-pink-a200">.color-pink-a200</li>
            <li class="color-pink-a400">.color-pink-a400</li>
            <li class="color-pink-a700">.color-pink-a700</li>
        </ul>
    </div>
    <div class="flex-3">
        <h5 class="color-purple-a700">Purple</h5>
        <ul class="disc">
            <li class="color-purple-50">.color-purple-50</li>
            <li class="color-purple-100">.color-purple-100</li>
            <li class="color-purple-200">.color-purple-200</li>
            <li class="color-purple-300">.color-purple-300</li>
            <li class="color-purple-400">.color-purple-400</li>
            <li class="color-purple-500">.color-purple-500</li>
            <li class="color-purple-600">.color-purple-600</li>
            <li class="color-purple-700">.color-purple-700</li>
            <li class="color-purple-800">.color-purple-800</li>
            <li class="color-purple-900">.color-purple-900</li>
            <li class="color-purple-a100">.color-purple-a100</li>
            <li class="color-purple-a200">.color-purple-a200</li>
            <li class="color-purple-a400">.color-purple-a400</li>
            <li class="color-purple-a700">.color-purple-a700</li>
        </ul>
    </div>
</section>
<section class="grid-flex text-left">
    <div class="flex-12" markdown="1">

#### Other colours available

</div>
</section>
<section class="grid-flex text-left">
    <div class="flex-2">
        <ul class="disc">
            <li class="color-deeli-purple-a700">Deep Purple</li>
            <li class="color-indigo-a700">Indigo</li>
            <li class="color-blue-a700">Blue</li>
            <li class="color-lightblue-a700">Light Blue</li>
        </ul>
    </div>
    <div class="flex-2">
        <ul class="disc">
            <li class="color-cyan-a700">Cyan</li>
            <li class="color-teal-a700">Teal</li>
            <li class="color-green-a700">Green</li>
            <li class="color-lightgreen-a700">Light Green</li>
        </ul>
    </div>
    <div class="flex-2">
        <ul class="disc">
            <li class="color-lime-a700">Lime</li>
            <li class="color-yellow-a700">Yellow</li>
            <li class="color-amber-a700">Amber</li>
            <li class="color-orange-a700">Orange</li>
        </ul>
    </div>
    <div class="flex-2">
        <ul class="disc">
            <li class="color-deep-orange-700">Deep Orange</li>
            <li class="color-brown-700">Brown</li>
            <li class="color-grey-700">Grey</li>
            <li class="color-blue-grey-700">Blue Grey</li>
        </ul>
    </div>
</section>
<!-- End Text colours -->
<section class="grid-flex text-left">
    <div class="flex-12" markdown="1">

#### Tachyons Colour Palette
        
You will need to import <b> skeletonic-colors.css</b> to display the colours. The background colours are based on the <a href="http://tachyons.io/">Tachyons - CSS Colour palette.

A Palette of Particles.
    
</div>
</section>

<section class="card padding-2 grid-flex text-left">
    <div class="flex-12">


<section class="grid-flex text-left">
    <div style="border-radius: 1.618rem;border:0.30rem solid black;" class="background-color-tachyons-black flex-1 padding-1 color-white margin-bottom-1">
        <p><strong style="color:white">black</strong><br />#000</p>
    </div>
    <div style="border-radius: 1.618rem;border:0.30rem solid black;" class="background-color-tachyons-nearblack flex-1 padding-1 color-white margin-bottom-1">
        <p><strong style="color:white">nearblack</strong><br />#111</p>
    </div>
    <div style="border-radius: 1.618rem;border:0.30rem solid black;" class="background-color-tachyons-darkgray flex-1 padding-1 color-white margin-bottom-1">
        <p><strong style="color:white">darkgray</strong><br />#333</p>
    </div>
    <div style="border-radius: 1.618rem;border:0.30rem solid black;" class="background-color-tachyons-midgray flex-1 padding-1 color-white margin-bottom-1">
        <p><strong style="color:white">midgray</strong><br />#555</p>
    </div>
    <div style="border-radius: 1.618rem;border:0.30rem solid black;" class="background-color-tachyons-gray flex-1 padding-1 color-white margin-bottom-1">
        <p><strong style="color:white">gray</strong><br />#777</p>
    </div>
    <div style="border-radius: 1.618rem;border:0.30rem solid black;" class="background-color-tachyons-silver flex-1 padding-1 color-white margin-bottom-1">
        <p><strong style="color:white">silver</strong><br />#999</p>
    </div>
</section>
<section class="grid-flex text-left">
    <div style="border-radius: 1.618rem;border:0.30rem solid black;" class="background-color-tachyons-lightsilver flex-1 padding-1 margin-bottom-1">
        <p><strong>lightsilver</strong><br />#aaa</p>
    </div>
    <div style="border-radius: 1.618rem;border:0.30rem solid black;" class="background-color-tachyons-moongray flex-1 padding-1 margin-bottom-1">
        <p><strong>moongray</strong><br />#ccc</p>
    </div>
    <div style="border-radius: 1.618rem;border:0.30rem solid black;" class="background-color-tachyons-lightgray flex-1 padding-1 margin-bottom-1">
        <p><strong>lightgray</strong><br />#eee</p>
    </div>
    <div style="border-radius: 1.618rem;border:0.30rem solid black;" class="background-color-tachyons-nearwhite flex-1 padding-1 margin-bottom-1">
        <p><strong>nearwhite</strong><br />#f4f4f4</p>
    </div>
    <div style="border-radius: 1.618rem;border:0.30rem solid black;" class="background-color-tachyons-white flex-1 padding-1 margin-bottom-1">
        <p><strong>white</strong><br />#fff</p>
    </div>
    <div style="border-radius: 1.618rem;border:0.30rem solid black;" class="background-color-tachyons-black90 flex-1 padding-1 color-white margin-bottom-1">
        <p><strong style="color:white">black90</strong><br />rgba(0,0,0,.9)</p>
    </div>
</section>
<section class="grid-flex text-left">
    <div style="border-radius: 1.618rem;border:0.30rem solid black;" class="background-color-tachyons-black80 flex-1 padding-1 color-white margin-bottom-1">
        <p><strong style="color:white">black80</strong><br />rgba(0,0,0,.8)</p>
    </div>
    <div style="border-radius: 1.618rem;border:0.30rem solid black;" class="background-color-tachyons-black70 flex-1 padding-1 color-white margin-bottom-1">
        <p><strong style="color:white">black70</strong><br />rgba(0,0,0,.7)</p>
    </div>
    <div style="border-radius: 1.618rem;border:0.30rem solid black;" class="background-color-tachyons-black60 flex-1 padding-1 color-white margin-bottom-1">
        <p><strong style="color:white">black60</strong><br />rgba(0,0,0,.6)</p>
    </div>
    <div style="border-radius: 1.618rem;border:0.30rem solid black;" class="background-color-tachyons-black50 flex-1 padding-1 color-white margin-bottom-1">
        <p><strong style="color:white">black50</strong><br />rgba(0,0,0,.5)</p>
    </div>
    <div style="border-radius: 1.618rem;border:0.30rem solid black;" class="background-color-tachyons-black40 flex-1 padding-1 color-white margin-bottom-1">
        <p><strong style="color:white">black40</strong><br />rgba(0,0,0,.4)</p>
    </div>
    <div style="border-radius: 1.618rem;border:0.30rem solid black;" class="background-color-tachyons-black30 flex-1 padding-1 margin-bottom-1">
        <p><strong>black30</strong><br />rgba(0,0,0,.3)</p>
    </div>
</section>
<section class="grid-flex text-left">
    <div style="border-radius: 1.618rem;border:0.30rem solid black;" class="background-color-tachyons-black20 flex-1 padding-1 margin-bottom-1">
        <p><strong>black20</strong><br />rgba(0,0,0,.2)</p>
    </div>
    <div style="border-radius: 1.618rem;border:0.30rem solid black;" class="background-color-tachyons-black10 flex-1 padding-1 margin-bottom-1">
        <p><strong>black10</strong><br />rgba(0,0,0,.1)</p>
    </div>
    <div style="border-radius: 1.618rem;border:0.30rem solid black;" class="background-color-tachyons-black05 flex-1 padding-1 margin-bottom-1">
        <p><strong>black05</strong><br />rgba(0,0,0,.05)</p>
    </div>
    <div style="border-radius: 1.618rem;border:0.30rem solid black;" class="background-color-tachyons-black025 flex-1 padding-1 margin-bottom-1">
        <p><strong>black025</strong><br />rgba(0,0,0,.025)</p>
    </div>
    <div style="border-radius: 1.618rem;border:0.30rem solid black;" class="background-color-tachyons-black0125 flex-1 padding-1 margin-bottom-1">
        <p><strong>black0125</strong><br />rgba(0,0,0,.0125)</p>
    </div>
    <div style="border-radius: 1.618rem;border:0.30rem solid black;" class="background-color-tachyons-white90 flex-1 padding-1 margin-bottom-1">
        <p><strong>white90</strong><br />rgba(255,255,255,.9)</p>
    </div>
</section>
<section class="grid-flex text-left">
    <div style="border-radius: 1.618rem;border:0.30rem solid black;" class="background-color-tachyons-white80 flex-1 padding-1 margin-bottom-1">
        <p><strong>white80</strong><br />rgba(255,255,255,.8)</p>
    </div>
    <div style="border-radius: 1.618rem;border:0.30rem solid black;" class="background-color-tachyons-white70 flex-1 padding-1 margin-bottom-1">
        <p><strong>white70</strong><br />rgba(255,255,255,.7)</p>
    </div>
    <div style="border-radius: 1.618rem;border:0.30rem solid black;" class="background-color-tachyons-white60 flex-1 padding-1 margin-bottom-1">
        <p><strong>white60</strong><br />rgba(255,255,255,.6)</p>
    </div>
    <div style="border-radius: 1.618rem;border:0.30rem solid black;" class="background-color-tachyons-white50 flex-1 padding-1 margin-bottom-1">
        <p><strong>white50</strong><br />rgba(255,255,255,.5)</p>
    </div>
    <div style="border-radius: 1.618rem;border:0.30rem solid black;" class="background-color-tachyons-white40 flex-1 padding-1 margin-bottom-1">
        <p><strong>white40</strong><br />rgba(255,255,255,.4)</p>
    </div>
    <div style="border-radius: 1.618rem;border:0.30rem solid black;" class="background-color-tachyons-white30 flex-1 padding-1 margin-bottom-1">
        <p><strong>white30</strong><br />rgba(255,255,255,.3)</p>
    </div>
</section>
<section class="grid-flex text-left">
    <div style="border-radius: 1.618rem;border:0.30rem solid black;" class="background-color-tachyons-white20 flex-1 padding-1 margin-bottom-1">
        <p><strong>white20</strong><br />rgba(255,255,255,.2)</p>
    </div>
    <div style="border-radius: 1.618rem;border:0.30rem solid black;" class="background-color-tachyons-white10 flex-1 padding-1 margin-bottom-1">
        <p><strong>white10</strong><br />rgba(255,255,255,.1)</p>
    </div>
    <div style="border-radius: 1.618rem;border:0.30rem solid black;" class="background-color-tachyons-white05 flex-1 padding-1 margin-bottom-1">
        <p><strong>white05</strong><br />rgba(255,255,255,.05)</p>
    </div>
    <div style="border-radius: 1.618rem;border:0.30rem solid black;" class="background-color-tachyons-white025 flex-1 padding-1 margin-bottom-1">
        <p><strong>white025</strong><br />rgba(255,255,255,.025)</p>
    </div>
    <div style="border-radius: 1.618rem;border:0.30rem solid black;" class="background-color-tachyons-white0125 flex-1 padding-1 margin-bottom-1">
        <p><strong>white0125</strong><br />rgba(255,255,255,.013)</p>
    </div>
    <div style="border-radius: 1.618rem;border:0.30rem solid black;" class="background-color-tachyons-darkred flex-1 padding-1 color-white margin-bottom-1">
        <p><strong>darkred</strong><br />#e7040f</p>
    </div>
</section>
<section class="grid-flex text-left">
    <div style="border-radius: 1.618rem;border:0.30rem solid black;" class="background-color-tachyons-red flex-1 padding-1 color-white margin-bottom-1">
        <p><strong>red</strong><br />#ff4136</p>
    </div>
    <div style="border-radius: 1.618rem;border:0.30rem solid black;" class="background-color-tachyons-lightred flex-1 padding-1 color-white margin-bottom-1">
        <p><strong>lightred</strong><br />#ff725c</p>
    </div>
    <div style="border-radius: 1.618rem;border:0.30rem solid black;" class="background-color-tachyons-orange flex-1 padding-1 color-white margin-bottom-1">
        <p><strong>orange</strong><br />#ff6300</p>
    </div>
    <div style="border-radius: 1.618rem;border:0.30rem solid black;" class="background-color-tachyons-gold flex-1 padding-1 color-white margin-bottom-1">
        <p><strong>gold</strong><br />#ffb700</p>
    </div>
    <div style="border-radius: 1.618rem;border:0.30rem solid black;" class="background-color-tachyons-yellow flex-1 padding-1 color-white margin-bottom-1">
        <p><strong>yellow</strong><br />#ffd700</p>
    </div>
    <div style="border-radius: 1.618rem;border:0.30rem solid black;" class="background-color-tachyons-lightyellow flex-1 padding-1 color-white margin-bottom-1">
        <p><strong>lightyellow</strong><br />#fbf1a9</p>
    </div>
</section>
<section class="grid-flex text-left">
    <div style="border-radius: 1.618rem;border:0.30rem solid black;" class="background-color-tachyons-purple flex-1 padding-1 color-white margin-bottom-1">
        <p><strong>purple</strong><br />#5e2ca5</p>
    </div>
    <div style="border-radius: 1.618rem;border:0.30rem solid black;" class="background-color-tachyons-lightpurple flex-1 padding-1 color-white margin-bottom-1">
        <p><strong>lightpurple</strong><br />#a463f2</p>
    </div>
    <div style="border-radius: 1.618rem;border:0.30rem solid black;" class="background-color-tachyons-darkpink flex-1 padding-1 color-white margin-bottom-1">
        <p><strong>darkpink</strong><br />#d5008f</p>
    </div>
    <div style="border-radius: 1.618rem;border:0.30rem solid black;" class="background-color-tachyons-hotpink flex-1 padding-1 color-white margin-bottom-1">
        <p><strong>hotpink</strong><br />#ff41b4</p>
    </div>
    <div style="border-radius: 1.618rem;border:0.30rem solid black;" class="background-color-tachyons-pink flex-1 padding-1 color-white margin-bottom-1">
        <p><strong>pink</strong><br />#ff80cc</p>
    </div>
    <div style="border-radius: 1.618rem;border:0.30rem solid black;" class="background-color-tachyons-lightpink flex-1 padding-1 color-white margin-bottom-1">
        <p><strong>lightpink</strong><br />#ffa3d7</p>
    </div>
</section>
<section class="grid-flex text-left">
    <div style="border-radius: 1.618rem;border:0.30rem solid black;" class="background-color-tachyons-darkgreen flex-1 padding-1 color-white margin-bottom-1">
        <p><strong>darkgreen</strong><br />#137752</p>
    </div>
    <div style="border-radius: 1.618rem;border:0.30rem solid black;" class="background-color-tachyons-green flex-1 padding-1 color-white margin-bottom-1">
        <p><strong>green</strong><br />#19a974</p>
    </div>
    <div style="border-radius: 1.618rem;border:0.30rem solid black;" class="background-color-tachyons-lightgreen flex-1 padding-1 color-white margin-bottom-1">
        <p><strong>lightgreen</strong><br />#9eebcf</p>
    </div>
    <div style="border-radius: 1.618rem;border:0.30rem solid black;" class="background-color-tachyons-navy flex-1 padding-1 color-white margin-bottom-1">
        <p><strong style="color:white">navy</strong><br />#001b44</p>
    </div>
    <div style="border-radius: 1.618rem;border:0.30rem solid black;" class="background-color-tachyons-darkblue flex-1 padding-1 color-white margin-bottom-1">
        <p><strong style="color:white">darkblue</strong><br />#00449e</p>
    </div>
    <div style="border-radius: 1.618rem;border:0.30rem solid black;" class="background-color-tachyons-blue flex-1 padding-1 margin-bottom-1">
        <p><strong>blue</strong><br />#357edd</p>
    </div>
</section>
<section class="grid-flex text-left">
    <div style="border-radius: 1.618rem;border:0.30rem solid black;" class="background-color-tachyons-lightblue padding-1 flex-1 margin-bottom-1">
        <p><strong>lightblue</strong><br />#96ccff</p>
    </div>
    <div style="border-radius: 1.618rem;border:0.30rem solid black;" class="background-color-tachyons-lightestblue padding-1 flex-1 margin-bottom-1">
        <p><strong>lightestblue</strong><br />#cdecff</p>
    </div>
    <div style="border-radius: 1.618rem;border:0.30rem solid black;" class="background-color-tachyons-washedblue padding-1 flex-1 margin-bottom-1">
        <p><strong>washedblue</strong><br />#f6fffe</p>
    </div>
    <div style="border-radius: 1.618rem;border:0.30rem solid black;" class="background-color-tachyons-washedgreen padding-1 flex-1 margin-bottom-1">
        <p><strong>washedgreen</strong><br />#e8fdf5</p>
    </div>
    <div style="border-radius: 1.618rem;border:0.30rem solid black;" class="background-color-tachyons-washedyellow padding-1 flex-1 margin-bottom-1">
        <p><strong>washedyellow</strong><br />#fffceb</p>
    </div>
    <div style="border-radius: 1.618rem;border:0.30rem solid black;" class="background-color-tachyons-washedred padding-1 flex-1 margin-bottom-1">
        <p><strong>washedred</strong><br />#ffdfdf</p>
    </div>
</section>
    </div>
</section>

<!-- End Tachyons Colour Palette -->