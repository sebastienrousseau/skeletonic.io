---
layout: page
key: 05d3428d-76581293113a-5a29-0a37-76581293113a
title: Colors
subtitle: Simply designed to fit your cascading web life.
description: Skeletonic CSS comes with a basic set of custom properties, sometimes referred to as CSS variables or cascading variables.
keywords: colors, color-palette, css, deadon, framework, front-end, frontend, gridsystem, lightweight, mobile-first, modern, responsive, semantic, skeletonic, skeletonic.css, style-agnostic
image: /assets/images/backgrounds/background-color-palette.png
author: Sebastien Rousseau
permalink: /colors.html
categories: [colors]
section: colors
tags: [colors, color-palette, css, deadon, framework, front-end, frontend, gridsystem, lightweight, mobile-first, modern, responsive, semantic, skeletonic, skeletonic.css, style-agnostic]
status: publish
type: page
published: true
meta: {colors,color-palette, css, deadon, framework, front-end, frontend, gridsystem, lightweight, mobile-first, modern, responsive, semantic, skeletonic, skeletonic.css, style-agnostic}
date: 2021-06-10T15:27:18.897Z
robots: all
---

<!-- Color Palette -->

<section class="grid-flex justify-center text-left">
    <div class="flex-12" markdown="1">

### {{ page.title }}

{{ page.description }}

#### Color Variables

Skeletonic CSS v.{{site.version}} pr    ovides a set of color palettes and variables as a way to store information that we want to reuse throughout our stylesheet. These are designed to be harmonious, ensure accessible content, and help create contrast between UI elements.

#### Color Styles available

The Skeletonic CSS v.{{site.version}} color variables palette has a smooth range of shadows ranging from brightest to darkest

You will need to import [skeletonic-colors.css](https://unpkg.com/skeletonic-stylus@{{site.version}}/css/skeletonic-colors.min.css) to display the colors.

##### Primary palette

|Primary palette|Weight class|
|--- |--- |
|Most far away|50|
|Far far away|100|
|Far away|200|
|Middle far|300|
|Middle|400|
|Middle close|500|
|Close|600|
|Very close|700|
|Very very close|800|
|Closest|900|
{: class="size-full-width"}

##### Accent palette

|Accent palette|Weight class|
|--- |--- |
|Most far|A100|
|Middle|A200|
|Close|A400|
|Closest|A700|
{: class="size-full-width"}

##### Basic colors

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

<!-- Material Design colors -->

#### Material Design colors

The background colors are based on [Google's Material Design Color palette](https://material.io/guidelines/style/color.html).

##### Range of non accent &amp; accent colors

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
<!-- End Material Design colors -->

<!-- Text colors -->
<section class="grid-flex text-left">
    <div class="flex-12" markdown="1">

#### Text colors

</div>
</section>
<section class="grid-flex justify-center text-left">
    <div class="flex-2">
        <ul class="disc">
            <li class="cl-red-a700">Red</li>
            <li class="cl-pink-a700">Pink</li>
            <li class="cl-purple-a700">Purple</li>
            <li class="cl-deep-purple-a700">Deep Purple</li>
            <li class="cl-indigo-a700">Indigo</li>
            <li class="cl-blue-a700">Blue</li>            
        </ul>
    </div>
    <div class="flex-2">
        <ul class="disc">
            <li class="cl-light-blue-a700">Light Blue</li>
            <li class="cl-cyan-a700">Cyan</li>
            <li class="cl-teal-a700">Teal</li>
            <li class="cl-green-a700">Green</li>
            <li class="cl-light-green-a700">Light Green</li>
            <li class="cl-lime-a700">Lime</li>
        </ul>
    </div>
    <div class="flex-2">
        <ul class="disc">
            <li class="cl-yellow-a700">Yellow</li>
            <li class="cl-amber-a700">Amber</li>
            <li class="cl-orange-a700">Orange</li>
            <li class="cl-deep-orange-700">Deep Orange</li>
            <li class="cl-brown-700">Brown</li>
            <li class="cl-grey-700">Grey</li>
            <li class="cl-blue-grey-700">Blue Grey</li>
        </ul>
    </div>
</section>
<!-- End Text colors -->

<!-- Tachyons Color Palette -->
<section class="grid-flex justify-center text-left">
    <div class="flex-12" markdown="1">

#### Tachyons Color Palette

You will need to import [skeletonic-colors.css](https://unpkg.com/skeletonic-stylus@{{site.version}}/css/skeletonic-colors.min.css) to display the colors. The background colors are based on the <a href="http://tachyons.io/">Tachyons - CSS Color palette.

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
<!-- End Tachyons Color Palette -->