---
layout: default
title: Categories
section: categories
permalink: /categories/
---

<!-- Categories -->
<section class="grid-flex text-left">
<div class="flex-12" markdown="1">

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
        <a href="/categories/{{ category_name }}" title="Tag name of {{ category_name | capitalize }}">{{ category_name | capitalize }}</a>
    </li>
{% endfor %}
</ul>


</div>
</section>
<!-- End Categories -->