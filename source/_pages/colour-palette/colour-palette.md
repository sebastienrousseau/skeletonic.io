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
    <div class="flex-6">
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
    <div class="flex-6">
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

```css
$black = #000000;
$white = #ffffff;
$transparent = rgba(0, 0, 0, 0);
$full-black  = rgba(0, 0, 0, 1);
$dark-black  = rgba(0, 0, 0, 0.87);
$lightblack = rgba(0, 0, 0, 0.54);
$min-black   = rgba(0, 0, 0, 0.26);
$faint-black = rgba(0, 0, 0, 0.12);
$full-white  = rgba(255, 255, 255, 1);
$dark-white  = rgba(255, 255, 255, 0.87);
$lightwhite = rgba(255, 255, 255, 0.54);
```

</div>
</section>
<!-- Material Design colours -->
<section class="grid-flex text-left">
    <div class="flex-12" markdown="1">

#### Material Design colours

The background colours are based on <a href="https://material.io/guidelines/style/color.html">Google's Material Design Colour palette</a>.

##### Range of non accent &amp; accent colours

```css
$red-50 to $red-A700;
$pink-50 to $pink-A700;
$purple-50 to $purple-A700;
$deep-purple-50 to $deep-purple-A700;
$indigo-50 to $indigo-A700;
$blue-50 to $blue-A700;
$lightblue-50 to $lightblue-A700;
$cyan-50 to $cyan-A700;
$teal-50 to $teal-A700;
$green-50 to $green-A700;
$lightgreen-50 to $lightgreen-A700;
$lime-50 to $lime-A700;
$yellow-50 to $yellow-A700;
$amber-50 to $amber-A700;
$orange-50 to $orange-A700;
$deep-orange-50 to $deep-orange-A700;
$brown-50 to $brown-A700;
$blue-grey-50 to $blue-grey-A700;
$grey-50 to $grey-A700;
```

</div>
</section>
<section class="grid-flex justify-center text-center">
    <div class="bg-red-a700 color-box">
        <div class="color-labels color-white">
            .bg-red-a700
        </div>
    </div>
    <div class="bg-pink-a700 color-box">
        <div class="color-labels color-white">
            .bg-pink-a700
        </div>
    </div>
    <div class="bg-purple-a700 color-box">
        <div class="color-labels color-white">
            .bg-purple-a700
        </div>
    </div>
    <div class="bg-deep-purple-a700 color-box">
        <div class="color-labels color-white">
            .bg-deep-purple-a700
        </div>
    </div>
    <div class="bg-indigo-a700 color-box">
        <div class="color-labels color-white">
            .bg-indigo-a700
        </div>
    </div>
    <div class="bg-blue-a700 color-box">
        <div class="color-labels color-white">
            .bg-blue-a700
        </div>
    </div>
    <div class="bg-light-blue-a700 color-box">
        <div class="color-labels color-white">
            .bg-light-blue-a700
        </div>
    </div>
    <div class="bg-cyan-a700 color-box">
        <div class="color-labels color-white">
            .bg-cyan-a700
        </div>
    </div>
    <div class="bg-teal-a700 color-box">
        <div class="color-labels color-white">
            .bg-teal-a700
        </div>
    </div>
    <div class="bg-green-a700 color-box">
        <div class="color-labels color-white">
            .bg-green-a700
        </div>
    </div>
    <div class="bg-light-green-a700 color-box">
        <div class="color-labels color-white">
            .bg-light-green-a700
        </div>
    </div>
    <div class="bg-lime-a700 color-box">
        <div class="color-labels color-white">
            .bg-lime-a700
        </div>
    </div>
    <div class="bg-yellow-a700 color-box">
        <div class="color-labels color-white">
            .bg-yellow-a700
        </div>
    </div>
    <div class="bg-amber-a700 color-box">
        <div class="color-labels color-white">
            .bg-amber-a700
        </div>
    </div>
    <div class="bg-orange-a700 color-box">
        <div class="color-labels color-white">
            .bg-orange-a700
        </div>
    </div>
    <div class="bg-deep-orange-a700 color-box">
        <div class="color-labels color-white">
            .bg-deep-orange-a700
        </div>
    </div>
    <div class="bg-brown-900 color-box">
        <div class="color-labels color-white">
            .bg-brown-900
        </div>
    </div>
    <div class="bg-blue-grey-900 color-box">
        <div class="color-labels color-white">
            .bg-blue-grey-900
        </div>
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
        <h5 class="cl-red-a700">Red</h5>
        <ul class="disc">
            <li class="cl-red-50">.cl-red-50</li>
            <li class="cl-red-100">.cl-red-100</li>
            <li class="cl-red-200">.cl-red-200</li>
            <li class="cl-red-300">.cl-red-300</li>
            <li class="cl-red-400">.cl-red-400</li>
            <li class="cl-red-500">.cl-red-500</li>
            <li class="cl-red-600">.cl-red-600</li>
            <li class="cl-red-700">.cl-red-700</li>
            <li class="cl-red-800">.cl-red-800</li>
            <li class="cl-red-900">.cl-red-900</li>
            <li class="cl-red-a100">.cl-red-a100</li>
            <li class="cl-red-a200">.cl-red-a200</li>
            <li class="cl-red-a400">.cl-red-a400</li>
            <li class="cl-red-a700">.cl-red-a700</li>
        </ul>
    </div>
    <div class="flex-3">
        <h5 class="cl-pink-a700">Pink</h5>
        <ul class="disc">
            <li class="cl-pink-50">.cl-pink-50</li>
            <li class="cl-pink-100">.cl-pink-100</li>
            <li class="cl-pink-200">.cl-pink-200</li>
            <li class="cl-pink-300">.cl-pink-300</li>
            <li class="cl-pink-400">.cl-pink-400</li>
            <li class="cl-pink-500">.cl-pink-500</li>
            <li class="cl-pink-600">.cl-pink-600</li>
            <li class="cl-pink-700">.cl-pink-700</li>
            <li class="cl-pink-800">.cl-pink-800</li>
            <li class="cl-pink-900">.cl-pink-900</li>
            <li class="cl-pink-a100">.cl-pink-a100</li>
            <li class="cl-pink-a200">.cl-pink-a200</li>
            <li class="cl-pink-a400">.cl-pink-a400</li>
            <li class="cl-pink-a700">.cl-pink-a700</li>
        </ul>
    </div>
    <div class="flex-3">
        <h5 class="cl-purple-a700">Purple</h5>
        <ul class="disc">
            <li class="cl-purple-50">.cl-purple-50</li>
            <li class="cl-purple-100">.cl-purple-100</li>
            <li class="cl-purple-200">.cl-purple-200</li>
            <li class="cl-purple-300">.cl-purple-300</li>
            <li class="cl-purple-400">.cl-purple-400</li>
            <li class="cl-purple-500">.cl-purple-500</li>
            <li class="cl-purple-600">.cl-purple-600</li>
            <li class="cl-purple-700">.cl-purple-700</li>
            <li class="cl-purple-800">.cl-purple-800</li>
            <li class="cl-purple-900">.cl-purple-900</li>
            <li class="cl-purple-a100">.cl-purple-a100</li>
            <li class="cl-purple-a200">.cl-purple-a200</li>
            <li class="cl-purple-a400">.cl-purple-a400</li>
            <li class="cl-purple-a700">.cl-purple-a700</li>
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
            <li class="cl-deep-purple-a700">Deep Purple</li>
            <li class="cl-indigo-a700">Indigo</li>
            <li class="cl-blue-a700">Blue</li>
            <li class="cl-lightblue-a700">Light Blue</li>
        </ul>
    </div>
    <div class="flex-2">
        <ul class="disc">
            <li class="cl-cyan-a700">Cyan</li>
            <li class="cl-teal-a700">Teal</li>
            <li class="cl-green-a700">Green</li>
            <li class="cl-lightgreen-a700">Light Green</li>
        </ul>
    </div>
    <div class="flex-2">
        <ul class="disc">
            <li class="cl-lime-a700">Lime</li>
            <li class="cl-yellow-a700">Yellow</li>
            <li class="cl-amber-a700">Amber</li>
            <li class="cl-orange-a700">Orange</li>
        </ul>
    </div>
    <div class="flex-2">
        <ul class="disc">
            <li class="cl-deep-orange-700">Deep Orange</li>
            <li class="cl-brown-700">Brown</li>
            <li class="cl-grey-700">Grey</li>
            <li class="cl-blue-grey-700">Blue Grey</li>
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

<section class="grid-flex justify-center text-center">
    <div class="flex-12">
        <div class="bg-tachyons-black color-box">
            <div class="color-labels ">
                .bg-tachyons-black
            </div>
        </div>
        <div class="bg-tachyons-nearblack color-box">
            <div class="color-labels ">
                .bg-tachyons-nearblack
            </div>
        </div>
        <div class="bg-tachyons-darkgray color-box">
            <div class="color-labels ">
                .bg-tachyons-darkgray
            </div>
        </div>
        <div class="bg-tachyons-midgray color-box">
            <div class="color-labels ">
                .bg-tachyons-midgray
            </div>
        </div>
        <div class="bg-tachyons-gray color-box">
            <div class="color-labels ">
                .bg-tachyons-gray
            </div>
        </div>
        <div class="bg-tachyons-silver color-box">
            <div class="color-labels ">
                .bg-tachyons-silver
            </div>
        </div>
        <div class="bg-tachyons-lightsilver color-box">
            <div class="color-labels ">
                .bg-tachyons-lightsilver
            </div>
        </div>
        <div class="bg-tachyons-moongray color-box">
            <div class="color-labels ">
                .bg-tachyons-moongray
            </div>
        </div>
        <div class="bg-tachyons-lightgray color-box">
            <div class="color-labels ">
                .bg-tachyons-lightgray
            </div>
        </div>
        <div class="bg-tachyons-nearwhite color-box">
            <div class="color-labels ">
                .bg-tachyons-nearwhite
            </div>
        </div>
        <div class="bg-tachyons-white color-box">
            <div class="color-labels ">
                .bg-tachyons-white
            </div>
        </div>
        <div class="bg-tachyons-black90 color-box">
            <div class="color-labels ">
                .bg-tachyons-black90
            </div>
        </div>
        <div class="bg-tachyons-black80 color-box">
            <div class="color-labels ">
                .bg-tachyons-black80
            </div>
        </div>
        <div class="bg-tachyons-black70 color-box">
            <div class="color-labels ">
                .bg-tachyons-black70
            </div>
        </div>
        <div class="bg-tachyons-black60 color-box">
            <div class="color-labels ">
                .bg-tachyons-black60
            </div>
        </div>
        <div class="bg-tachyons-black50 color-box">
            <div class="color-labels ">
                .bg-tachyons-black50
            </div>
        </div>
        <div class="bg-tachyons-black40 color-box">
            <div class="color-labels ">
                .bg-tachyons-black40
            </div>
        </div>
        <div class="bg-tachyons-black30 color-box">
            <div class="color-labels ">
                .bg-tachyons-black30
            </div>
        </div>
        <div class="bg-tachyons-black20 color-box">
            <div class="color-labels ">
                .bg-tachyons-black20
            </div>
        </div>
        <div class="bg-tachyons-black10 color-box">
            <div class="color-labels ">
                .bg-tachyons-black10
            </div>
        </div>
        <div class="bg-tachyons-black05 color-box">
            <div class="color-labels ">
                .bg-tachyons-black05
            </div>
        </div>
        <div class="bg-tachyons-black025 color-box">
            <div class="color-labels ">
                .bg-tachyons-black025
            </div>
        </div>
        <div class="bg-tachyons-black0125 color-box">
            <div class="color-labels ">
                .bg-tachyons-black0125
            </div>
        </div>
        <div class="bg-tachyons-white90 color-box">
            <div class="color-labels ">
                .bg-tachyons-white90
            </div>
        </div>
        <div class="bg-tachyons-white80 color-box">
            <div class="color-labels ">
                .bg-tachyons-white80
            </div>
        </div>
        <div class="bg-tachyons-white70 color-box">
            <div class="color-labels ">
                .bg-tachyons-white70
            </div>
        </div>
        <div class="bg-tachyons-white60 color-box">
            <div class="color-labels ">
                .bg-tachyons-white60
            </div>
        </div>
        <div class="bg-tachyons-white50 color-box">
            <div class="color-labels ">
                .bg-tachyons-white50
            </div>
        </div>
        <div class="bg-tachyons-white40 color-box">
            <div class="color-labels ">
                .bg-tachyons-white40
            </div>
        </div>
        <div class="bg-tachyons-white30 color-box">
            <div class="color-labels ">
                .bg-tachyons-white30
            </div>
        </div>
        <div class="bg-tachyons-white20 color-box">
            <div class="color-labels ">
                .bg-tachyons-white20
            </div>
        </div>
        <div class="bg-tachyons-white10 color-box">
            <div class="color-labels ">
                .bg-tachyons-white10
            </div>
        </div>
        <div class="bg-tachyons-white05 color-box">
            <div class="color-labels ">
                .bg-tachyons-white05
            </div>
        </div>
        <div class="bg-tachyons-white025 color-box">
            <div class="color-labels ">
                .bg-tachyons-white025
            </div>
        </div>
        <div class="bg-tachyons-white0125 color-box">
            <div class="color-labels ">
                .bg-tachyons-white0125
            </div>
        </div>
        <div class="bg-tachyons-darkred color-box">
            <div class="color-labels ">
                .bg-tachyons-darkred
            </div>
        </div>
        <div class="bg-tachyons-red color-box">
            <div class="color-labels ">
                .bg-tachyons-red
            </div>
        </div>
        <div class="bg-tachyons-lightred color-box">
            <div class="color-labels ">
                .bg-tachyons-lightred
            </div>
        </div>
        <div class="bg-tachyons-orange color-box">
            <div class="color-labels ">
                .bg-tachyons-orange
            </div>
        </div>
        <div class="bg-tachyons-gold color-box">
            <div class="color-labels ">
                .bg-tachyons-gold
            </div>
        </div>
        <div class="bg-tachyons-yellow color-box">
            <div class="color-labels ">
                .bg-tachyons-yellow
            </div>
        </div>
        <div class="bg-tachyons-lightyellow color-box">
            <div class="color-labels ">
                .bg-tachyons-lightyellow
            </div>
        </div>
        <div class="bg-tachyons-purple color-box">
            <div class="color-labels ">
                .bg-tachyons-purple
            </div>
        </div>
        <div class="bg-tachyons-lightpurple color-box">
            <div class="color-labels ">
                .bg-tachyons-lightpurple
            </div>
        </div>
        <div class="bg-tachyons-darkpink color-box">
            <div class="color-labels ">
                .bg-tachyons-darkpink
            </div>
        </div>
        <div class="bg-tachyons-hotpink color-box">
            <div class="color-labels ">
                .bg-tachyons-hotpink
            </div>
        </div>
        <div class="bg-tachyons-pink color-box">
            <div class="color-labels ">
                .bg-tachyons-pink
            </div>
        </div>
        <div class="bg-tachyons-lightpink color-box">
            <div class="color-labels ">
                .bg-tachyons-lightpink
            </div>
        </div>
        <div class="bg-tachyons-darkgreen color-box">
            <div class="color-labels ">
                .bg-tachyons-darkgreen
            </div>
        </div>
        <div class="bg-tachyons-green color-box">
            <div class="color-labels ">
                .bg-tachyons-green
            </div>
        </div>
        <div class="bg-tachyons-lightgreen color-box">
            <div class="color-labels ">
                .bg-tachyons-lightgreen
            </div>
        </div>
        <div class="bg-tachyons-navy color-box">
            <div class="color-labels ">
                .bg-tachyons-navy
            </div>
        </div>
        <div class="bg-tachyons-darkblue color-box">
            <div class="color-labels ">
                .bg-tachyons-darkblue
            </div>
        </div>
        <div class="bg-tachyons-blue color-box">
            <div class="color-labels ">
                .bg-tachyons-blue
            </div>
        </div>
        <div class="bg-tachyons-lightblue color-box">
            <div class="color-labels ">
                .bg-tachyons-lightblue
            </div>
        </div>
        <div class="bg-tachyons-lightestblue color-box">
            <div class="color-labels ">
                .bg-tachyons-lightestblue
            </div>
        </div>
        <div class="bg-tachyons-washedblue color-box">
            <div class="color-labels ">
                .bg-tachyons-washedblue
            </div>
        </div>
        <div class="bg-tachyons-washedgreen color-box">
            <div class="color-labels ">
                .bg-tachyons-washedgreen
            </div>
        </div>
        <div class="bg-tachyons-washedyellow color-box">
            <div class="color-labels ">
                .bg-tachyons-washedyellow
            </div>
        </div>
        <div class="bg-tachyons-washedred color-box">
            <div class="color-labels ">
                .bg-tachyons-washedred
            </div>
        </div>
    </div>
</section>
<!-- End Tachyons Colour Palette -->