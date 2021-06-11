---
layout: default
title: Tags
section: tags
permalink: /tags/
api: /api/v1/tags/
---
<!-- Tags -->
<section class="grid-flex text-left">
    <div class="flex-12" markdown="1">

{% for page in site.pages %}
    {% for tag in page.tags %}
        {% assign tagcloud = tagcloud | append:tag | append:', ' %}
    {% endfor %} 
{% endfor %} 

{% assign tagcloud = tagcloud | split:", " | uniq | sort %}

<ul class="disc">
{% for tag in tagcloud %}
    {% capture tag_name %}{{ tag }}{% endcapture %}
    <li>
        <a href="/tags/{{ tag_name }}" title="Tag name of {{ tag_name }}">{{ tag_name }}</a>
    </li>
{% endfor %}
</ul>


</div></section>
<!-- End Tags -->