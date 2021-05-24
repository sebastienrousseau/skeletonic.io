---
layout: page
id: 679d8cdb-687a1cfd870f-019a-44ff-687a1cfd870f
title: CSS Cards
subtitle: Responsive, flexible containers for your page's contents
description: CSS Cards provide a convenient Flexbox Layout that help you present your information.
keywords: card layout, cards, containers, content, css, css cards, flexible, flexbox layout, framework, front-end, front end, grid system, light weight, mobile-first, modern, responsive, skeletonic, skeletonic.css
image: /assets/images/backgrounds/bg-cards.png
author: Sebastien Rousseau
permalink: /cards.html
categories: [components]
section: cards
tags: [card layout, cards, containers, content, css, css cards, flexible, flexbox layout, framework, front-end, front end, grid system, light weight, mobile-first, modern, responsive, skeletonic, skeletonic.css]
status: publish
type: page
published: true
meta: {card layout, cards, containers, content, css, css cards, flexible, flexbox layout, framework, front-end, front end, grid system, light weight, mobile-first, modern, responsive, skeletonic, skeletonic.css}
date: May 25, 2021
robots: all
---

<!-- Cards -->
<section class="grid-flex text-left">
    <div class="flex-4">
        <nav class="nav-page" aria-label="{{page.title}} Navigation"> 
            <ul class="nav"> 
                <li><a href="#{{'Cards' | downcase | replace: ' ', '-' }}">Cards</a></li>
                <li><a href="#{{'Basic syntax' | downcase | replace: ' ', '-' }}">Basic syntax</a></li>
                <li><a href="#{{'Image Card' | downcase | replace: ' ', '-' }}">Image Card</a></li>
                <li><a href="#{{'Card colours' | downcase | replace: ' ', '-' }}">Card colours</a></li>
                <li><a href="#{{'Sample code' | downcase | replace: ' ', '-' }}">Sample code</a></li>
            </ul> 
        </nav>
    </div>
    <div class="flex-8" markdown="1">     

#### Cards

Cards are a convenient means of displaying content composed of different types of content like title, content, images etc. 

#### Basic syntax

In order to create a basic card, you will need to:

<ul class="disc">
    <li>Use .card with a div tag to create the outer container</li>
    <li>Add the .card-content class to an inner div tag to create the card content</li>
</ul>

These are the basic elements that constitute a basic card layout, as we can see from the following example:

<div class=" flex-1">
    <div class="card">
        <div class="card-content">
            <h4>Title</h4> 
            <p>Lorem ipsum.</p>
        </div>
    </div>
</div>
<div class="flex-1">
    <pre>&lt;div class=&quot;card&quot;&gt;&#10;    &lt;div class=&quot;card-content&quot;&gt;&#10;        &lt;h4&gt;Title&lt;/h4&gt;&#10;        &lt;p&gt;Lorem ipsum.&lt;/p&gt;&#10;    &lt;/div&gt;&#10;&lt;/div&gt;</pre>
</div>

#### Image Card

In the same way, we can add an image to our card element.

<section class="cards">
    <div class="card flex-2">
        <picture>
            <img src="./assets/images/backgrounds/patrick-tomasso-472279.jpg"
                alt="Photo by Patrick Tomasso on Unsplash">
        </picture>
        <div class="card-content text-left">
            <h4>Top image</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p><button class="info right">Button 1</button></p>
        </div>
    </div>
    <div class="card flex-2">
        <div class="card-content text-left">
            <h4>Bottom image</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p><button class="info right">Button 2</button></p>
        </div>
        <picture>
            <img src="./assets/images/backgrounds/marion-michele-457471.jpg"
                alt="Photo by Marion Michele on Unsplash">
        </picture>        
    </div>
    <div class="card flex-2">
        <div class="card-content text-left">
            <h4>Center padding</h4>
            <picture>
                <img src="./assets/images/backgrounds/fernando-reyes-241702.jpg"
                     alt="Photo by Fernando Reyes on Unsplash"
                     class="img-responsive" />
            </picture>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>            
            <p><button class="info right">Button 3</button></p>            
        </div>            
    </div>
</section>

#### Card colours

Cards can be used to display specific messages to users. You can use the .warning class to display a yellow warning card or, if you need to display an error message to your users, you can use the .error class to display a red error card.

<section class="cards grid-flex">
<div class="card primary flex-1 padding-1">
    <div class="card-content text-left">
        <h4 class="primary">Primary Card</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>            
        <p><button class="primary right">Button 4</button></p>            
    </div>            
</div>
<div class="card secondary flex-1 padding-1">
    <div class="card-content text-left">
        <h4 class="secondary">Secondary Card</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>            
        <button class="secondary right">Button 4</button>
    </div>            
</div>
<div class="card success flex-1 padding-1">
    <div class="card-content text-left">
        <h4 class="success">Success Card</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>            
        <button class="success right">Button 4</button>
    </div>            
</div>
<div class="card info flex-1 padding-1">
    <div class="card-content text-left">
        <h4 class="info">Info Card</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>            
        <button class="info right">Button 4</button>
    </div>            
</div>
<div class="card warning flex-1 padding-1">
    <div class="card-content text-left">
        <h4 class="warning">Warning Card</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>            
        <button class="warning right">Button 4</button>
    </div>            
</div>
<div class="card error flex-1 padding-1">
    <div class="card-content text-left">
        <h4 class="error">Error Card</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>            
        <button class="error right">Button 5</button>
    </div>            
</div>
</section>

#### Sample code

```html
<div class="card error flex-1 padding-1">
    <div class="card-content text-left">
        <h4 class="error">Error Card</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>            
        <button class="error right">Button 5</button>
    </div>            
</div>
```

<!-- End Cards -->