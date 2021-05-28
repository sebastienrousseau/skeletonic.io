---
layout: page
key: 44866a28-3adeca5337ec-28e8-8af9-3adeca5337ec
title: Categories
subtitle: Content categories, which describe common rules shared by many CSS elements.
description: Every Skeletonic CSS element is a member of one or more content categories — these categories group elements that share common characteristics.
keywords: categories, cards, containers, content, css, css cards, flexible, flexbox layout, framework, front-end, front end, grid system, light weight, mobile-first, modern, responsive, skeletonic, skeletonic.css
image: /assets/images/backgrounds/bg-categories.png
author: Sebastien Rousseau
permalink: /categories.html
section: categories
tags: [categories, cards, containers, content, css, css cards, flexible, flexbox layout, framework, front-end, front end, grid system, light weight, mobile-first, modern, responsive, skeletonic, skeletonic.css]
status: publish
type: page
published: true
meta: {categories, cards, containers, content, css, css cards, flexible, flexbox layout, framework, front-end, front end, grid system, light weight, mobile-first, modern, responsive, skeletonic, skeletonic.css}
date: 2021-05-28T20:25:43.291Z
robots: all
---

<!-- Categories -->
<section class="grid-flex text-left">
<div class="flex-12" markdown="1">

This is a list of all the categories in {{site.title}}. 

{% for page in site.pages %}
    {% for category in page.categories %}
        {% assign categorycloud = categorycloud | append:category | append:', ' %}
    {% endfor %} 
{% endfor %} 

{% assign categorycloud = categorycloud | split:", " | uniq | sort %}

<ul class="disc">
{% for category in categorycloud %}
    {% capture category_name %}{{ category }}{% endcapture %}
    <li>
        <a href="{{ site_url }}/categories/{{ category_name }}" title="Tag name of {{ category_name | capitalize }}">{{ category_name | capitalize }}</a>
    </li>
{% endfor %}
</ul>

</div>
</section>
<!-- End Categories -->