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
date: May 25, 2021
robots: all
---

<!-- Tachyons Colour Palette -->
<section class="grid-flex text-left">
    <div class="flex-4">
    <nav class="nav-page" aria-label="{{page.title}} Navigation"> 
        <ul class="nav"> 
            <li><a href="#{{'Colour Variables' | downcase | replace: ' ', '-' }}">Colour Variables</a></li>
            <li><a href="#{{'Colour Styles available' | downcase | replace: ' ', '-' }}">Colour Styles available</a></li>      
            <li><a href="#{{'Material Design colours' | downcase | replace: ' ', '-' }}">Material Design colours</a></li>
            <li><a href="#{{'Text colours' | downcase | replace: ' ', '-' }}">Text colours</a></li>
            <li><a href="#{{'Other colours available' | downcase | replace: ' ', '-' }}">Other colours available</a></li>            
            <li><a href="#{{'Tachyons Colour Palette' | downcase | replace: ' ', '-' }}">Tachyons Colour Palette</a></li>            
        </ul> 
    </nav>
</div>
<div class="flex-8" markdown="1">

### {{ page.title }}
{{ page.description }}

#### Colour Variables

Skeletonic CSS v.{{site.version}} provides a set of colour palettes and variables as a way to store information that we want to reuse throughout our stylesheet. These are designed to be harmonious, ensure accessible content, and help create contrast between UI elements.


#### Colour Styles available

The Skeletonic CSS v.{{site.version}} colour variables palette has a smooth range of shadows ranging from brightest to darkest

You will need to import <a href="https://unpkg.com/skeletonic@{{site.version}}/dist/skeletonic.min.css">skeletonic-colours.css</a> to display the colours.

<section class="grid-flex text-left">
    <div class="flex-6 padding-1">
        <table>
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
    <div class="flex-6 padding-1">
        <table>
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
    <div class="card flex-6 padding-1" markdown="1">

##### Basic colours 

$black = #000000;

$white = #ffffff;

$transparent = rgba(0, 0, 0, 0);

$full-black  = rgba(0, 0, 0, 1);

$dark-black  = rgba(0, 0, 0, 0.87);

$light-black = rgba(0, 0, 0, 0.54);

$min-black   = rgba(0, 0, 0, 0.26);

$faint-black = rgba(0, 0, 0, 0.12);

$full-white  = rgba(255, 255, 255, 1);

$dark-white  = rgba(255, 255, 255, 0.87);

$light-white = rgba(255, 255, 255, 0.54);

</div>
<div class="card flex-6 padding-1" markdown="1">

##### Range of non accent &amp; accent colours

$red-50 to $red-A700;

$pink-50 to $pink-A700;

$purple-50 to $purple-A700;

$deep-purple-50 to $deep-purple-A700;

$indigo-50 to $indigo-A700;

$blue-50 to $blue-A700;

$light-blue-50 to $light-blue-A700;

$cyan-50 to $cyan-A700;

$teal-50 to $teal-A700;

$green-50 to $green-A700;

$light-green-50 to $light-green-A700;

$lime-50 to $lime-A700;

$yellow-50 to $yellow-A700;

$amber-50 to $amber-A700;

$orange-50 to $orange-A700;

$deep-orange-50 to $deep-orange-A700;

$brown-50 to $brown-A700;

$blue-grey-50 to $blue-grey-A700;

$grey-50 to $grey-A700;

</div>
</section>        
<!-- Material Design colours -->
<section class="grid-flex text-left">
    <div class="flex-12" markdown="1">

#### Material Design colours

The background colours are based on <a href="https://material.io/guidelines/style/color.html">Google's Material Design Colour palette</a>.

</div>
</section>
<section class="grid-flex text-left">
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
        <p class="background-color-light-green-a700 color-white" style=" padding: 1rem;">
            .background-color-light-green-a700</p>
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
<section class="grid-flex text-left">
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
        <h5 class="color-purple-a700">purple</h5>
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
            <li class="color-light-blue-a700">Light Blue</li>
        </ul>
    </div>
    <div class="flex-2">
        <ul class="disc">
            <li class="color-cyan-a700">Cyan</li>
            <li class="color-teal-a700">Teal</li>
            <li class="color-green-a700">Green</li>
            <li class="color-light-green-a700">Light Green</li>
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
            <li class="color-deep-orange-a700">Deep Orange</li>
            <li class="color-brown-a700">Brown</li>
            <li class="color-grey-a700">Grey</li>
            <li class="color-blue-grey-a700">Blue Grey</li>
        </ul>
    </div>
</section>
<!-- End Text colours -->
<section class="grid-flex text-left">
    <div class="flex-12" markdown="1">

#### Tachyons Colour Palette
        
You will need to import <b>skeletonic-colours.css</b> to display the colours. The background colours are based on the <a href="http://tachyons.io/">Tachyons - CSS Colour palette.

A Palette of Particles.
    </div>
</section>
<section class="grid-flex text-left">
    <div class="background-color-tachyons-black flex-1 padding-1 color-white">
        <p><strong class="color-white">black</strong><br />#000</p>
    </div>
    <div class="background-color-tachyons-near-black flex-1 padding-1 color-white">
        <p><strong class="color-white">near-black</strong><br />#111</p>
    </div>
    <div class="background-color-tachyons-dark-gray flex-1 padding-1 color-white">
        <p><strong class="color-white">dark-gray</strong><br />#333</p>
    </div>
    <div class="background-color-tachyons-mid-gray flex-1 padding-1 color-white">
        <p><strong class="color-white">mid-gray</strong><br />#555</p>
    </div>
    <div class="background-color-tachyons-gray flex-1 padding-1 color-white">
        <p><strong class="color-white">gray</strong><br />#777</p>
    </div>
    <div class="background-color-tachyons-silver flex-1 padding-1 color-white">
        <p><strong class="color-white">silver</strong><br />#999</p>
    </div>
</section>
<section class="grid-flex text-left">
    <div class="background-color-tachyons-light-silver flex-1 padding-1">
        <p><strong>light-silver</strong><br />#aaa</p>
    </div>
    <div class="background-color-tachyons-moon-gray flex-1 padding-1">
        <p><strong>moon-gray</strong><br />#ccc</p>
    </div>
    <div class="background-color-tachyons-light-gray flex-1 padding-1">
        <p><strong>light-gray</strong><br />#eee</p>
    </div>
    <div class="background-color-tachyons-near-white flex-1 padding-1">
        <p><strong>near-white</strong><br />#f4f4f4</p>
    </div>
    <div class="background-color-tachyons-white flex-1 padding-1">
        <p><strong>white</strong><br />#fff</p>
    </div>
    <div class="background-color-tachyons-black-90 flex-1 padding-1 color-white">
        <p><strong class="color-white">black-90</strong><br />rgba(0,0,0,.9)</p>
    </div>
</section>
<section class="grid-flex text-left">
    <div class="background-color-tachyons-black-80 flex-1 padding-1 color-white">
        <p><strong class="color-white">black-80</strong><br /></p>
    </div>
    <div class="background-color-tachyons-black-70 flex-1 padding-1 color-white">
        <p><strong class="color-white">black-70</strong><br /></p>
    </div>
    <div class="background-color-tachyons-black-60 flex-1 padding-1 color-white">
        <p><strong class="color-white">black-60</strong><br /></p>
    </div>
    <div class="background-color-tachyons-black-50 flex-1 padding-1 color-white">
        <p><strong class="color-white">black-50</strong><br /></p>
    </div>
    <div class="background-color-tachyons-black-40 flex-1 padding-1 color-white">
        <p><strong class="color-white">black-40</strong><br /></p>
    </div>
    <div class="background-color-tachyons-black-30 flex-1 padding-1">
        <p><strong>black-30</strong><br />rgba(0,0,0,.3)</p>
    </div>
</section>
<section class="grid-flex text-left">
    <div class="background-color-tachyons-black-20 flex-1 padding-1">
        <p><strong>black-20</strong><br /></p>
    </div>
    <div class="background-color-tachyons-black-10 flex-1 padding-1">
        <p><strong>black-10</strong><br /></p>
    </div>
    <div class="background-color-tachyons-black-05 flex-1 padding-1">
        <p><strong>black-05</strong><br /></p>
    </div>
    <div class="background-color-tachyons-black-025 flex-1 padding-1">
        <p><strong>black-025</strong><br /></p>
    </div>
    <div class="background-color-tachyons-black-0125 flex-1 padding-1">
        <p><strong>black-0125</strong><br /></p>
    </div>
    <div class="background-color-tachyons-white-90 flex-1 padding-1">
        <p><strong>white-90</strong><br /></p>
    </div>
</section>
<section class="grid-flex text-left">
    <div class="background-color-tachyons-white-80 flex-1 padding-1">
        <p><strong>white-80</strong><br /></p>
    </div>
    <div class="background-color-tachyons-white-70 flex-1 padding-1">
        <p><strong>white-70</strong><br /></p>
    </div>
    <div class="background-color-tachyons-white-60 flex-1 padding-1">
        <p><strong>white-60</strong><br /></p>
    </div>
    <div class="background-color-tachyons-white-50 flex-1 padding-1">
        <p><strong>white-50</strong><br /></p>
    </div>
    <div class="background-color-tachyons-white-40 flex-1 padding-1">
        <p><strong>white-40</strong><br /></p>
    </div>
    <div class="background-color-tachyons-white-30 flex-1 padding-1">
        <p><strong>white-30</strong><br /></p>
    </div>
</section>
<section class="grid-flex text-left">
    <div class="background-color-tachyons-white-20 flex-1 padding-1">
        <p><strong>white-20</strong><br /></p>
    </div>
    <div class="background-color-tachyons-white-10 flex-1 padding-1">
        <p><strong>white-10</strong><br /></p>
    </div>
    <div class="background-color-tachyons-white-05 flex-1 padding-1">
        <p><strong>white-05</strong><br /></p>
    </div>
    <div class="background-color-tachyons-white-025 flex-1 padding-1">
        <p><strong>white-025</strong><br /></p>
    </div>
    <div class="background-color-tachyons-white-0125 flex-1 padding-1">
        <p><strong>white-0125</strong><br /></p>
    </div>
    <div class="background-color-tachyons-dark-red flex-1 padding-1 color-white">
        <p><strong>dark-red</strong><br />#e7040f</p>
    </div>
</section>
<section class="grid-flex text-left">
    <div class="background-color-tachyons-red flex-1 padding-1 color-white">
        <p><strong>red</strong><br />#ff4136</p>
    </div>
    <div class="background-color-tachyons-light-red flex-1 padding-1 color-white">
        <p><strong>light-red</strong><br />#ff725c</p>
    </div>
    <div class="background-color-tachyons-orange flex-1 padding-1 color-white">
        <p><strong>orange</strong><br />#ff6300</p>
    </div>
    <div class="background-color-tachyons-gold flex-1 padding-1 color-white">
        <p><strong>gold</strong><br />#ffb700</p>
    </div>
    <div class="background-color-tachyons-yellow flex-1 padding-1 color-white">
        <p><strong>yellow</strong><br />#ffd700</p>
    </div>
    <div class="background-color-tachyons-light-yellow flex-1 padding-1 color-white">
        <p><strong>light-yellow</strong><br />#fbf1a9</p>
    </div>
</section>
<section class="grid-flex text-left">
    <div class="background-color-tachyons-purple flex-1 padding-1 color-white">
        <p><strong>purple</strong><br />#5e2ca5</p>
    </div>
    <div class="background-color-tachyons-light-purple flex-1 padding-1 color-white">
        <p><strong>light-purple</strong><br />#a463f2</p>
    </div>
    <div class="background-color-tachyons-dark-pink flex-1 padding-1 color-white">
        <p><strong>dark-pink</strong><br />#d5008f</p>
    </div>
    <div class="background-color-tachyons-hot-pink flex-1 padding-1 color-white">
        <p><strong>hot-pink</strong><br />#ff41b4</p>
    </div>
    <div class="background-color-tachyons-pink flex-1 padding-1 color-white">
        <p><strong>pink</strong><br />#ff80cc</p>
    </div>
    <div class="background-color-tachyons-light-pink flex-1 padding-1 color-white">
        <p><strong>light-pink</strong><br />#ffa3d7</p>
    </div>
</section>
<section class="grid-flex text-left">
    <div class="background-color-tachyons-dark-green flex-1 padding-1 color-white">
        <p><strong>dark-green</strong><br />#137752</p>
    </div>
    <div class="background-color-tachyons-green flex-1 padding-1 color-white">
        <p><strong>green</strong><br />#19a974</p>
    </div>
    <div class="background-color-tachyons-light-green flex-1 padding-1 color-white">
        <p><strong>light-green</strong><br />#9eebcf</p>
    </div>
    <div class="background-color-tachyons-navy flex-1 padding-1 color-white">
        <p><strong class="color-white">navy</strong><br />#001b44</p>
    </div>
    <div class="background-color-tachyons-dark-blue flex-1 padding-1 color-white">
        <p><strong class="color-white">dark-blue</strong><br />#00449e</p>
    </div>
    <div class="background-color-tachyons-blue flex-1 padding-1">
        <p><strong>blue</strong><br />#357edd</p>
    </div>
</section>
<section class="grid-flex text-left">
    <div class="background-color-tachyons-light-blue padding-1 flex-1">
        <p><strong>light-blue</strong><br />#96ccff</p>
    </div>
    <div class="background-color-tachyons-lightest-blue padding-1 flex-1">
        <p><strong>lightest-blue</strong><br />#cdecff</p>
    </div>
    <div class="background-color-tachyons-washed-blue padding-1 flex-1">
        <p><strong>washed-blue</strong><br />#f6fffe</p>
    </div>
    <div class="background-color-tachyons-washed-green padding-1 flex-1">
        <p><strong>washed-green</strong><br />#e8fdf5</p>
    </div>
    <div class="background-color-tachyons-washed-yellow padding-1 flex-1">
        <p><strong>washed-yellow</strong><br />#fffceb</p>
    </div>
    <div class="background-color-tachyons-washed-red padding-1 flex-1">
        <p><strong>washed-red</strong><br />#ffdfdf</p>
    </div>
</section>
<!-- End Tachyons Colour Palette -->