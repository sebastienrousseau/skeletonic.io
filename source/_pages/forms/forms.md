---
layout: page
key: 1f2038a5-a83527134605-5231-2d44-a83527134605
title: Forms
subtitle: Simply designed to fit your cascading web life.
description: A lightweight, intuitive, accessible and ultra-responsive CSS Framework to streamline your Digital and Mobile Web development needs.
keywords: forms, css, deadon, framework, front-end, frontend, gridsystem, lightweight, mobile-first, modern, responsive, semantic, skeletonic, skeletonic.css, style-agnostic
image: /assets/images/components/forms.min.svg
author: Sebastien Rousseau
permalink: /forms.html
api: /api/v1/forms/
categories: [elements]
section: forms
tags: [forms, css, deadon, framework, front-end, frontend, gridsystem, lightweight, mobile-first, modern, responsive, semantic, skeletonic, skeletonic.css, style-agnostic]
status: publish
type: page
published: true
meta: {forms, css, deadon, framework, front-end, frontend, gridsystem, lightweight, mobile-first, modern, responsive, semantic, skeletonic, skeletonic.css, style-agnostic}
date: 2021-06-12T11:12:10.595Z
robots: all
---

<!-- Forms -->
<section class="grid-flex text-left">
    <div class="flex-12" markdown="1">

#### Forms

Form elements are different types of input elements, like text fields, checkboxes, radio buttons, submit buttons, and more.

#### Input

<label for="input">Input</label>
<input type="text" name="input" id="input" placeholder="Text..." />

#### Input Primary Color

<label for="input1">Input Primary</label>
<input type="text" class="input-primary" name="input1" id="input1" placeholder="Text..." />

#### Input Secondary Color

<label for="input2">Input Secondary</label>
<input type="text" class="input-secondary" name="input2" id="input2" placeholder="Text..." />

#### Input Success Color

<label for="input3">Input Success</label>
<input type="text" class="input-success" name="input3" id="input3" placeholder="Text..." />

#### Input Info Color

<label for="input4">Input Info</label>
<input type="text" class="input-info" name="input4" id="input4" placeholder="Text..." />

#### Input Warning Color
<label for="input5">Input Warning</label>
<input type="text" class="input-warning" name="input5" id="input5" placeholder="Text..." />

#### Input Error Color
<label for="input6">Input Error</label>
<input type="text" class="input-error" name="input6" id="input6" placeholder="Text..." />

#### Textarea
<label for="textarea">Textarea</label>
<textarea name="textarea" id="textarea" placeholder="Text..."></textarea>

</div>
</section>

<section class="grid-flex text-left">
<div class="flex-12">
<h4 id="select">Select</h4>
<label for="select">Select</label>
<select name="select" id="select">
    <option value="">Choose an item...</option>
    <optgroup label="Original CSS">
        <option value="">skeletonic.css</option>
        <option value="">skeletonic-debug-mode.css</option>
    </optgroup>
    <optgroup label="Minified CSS">
        <option value="">skeletonic.min.css (v.{{site.version}})</option>
        <option value="">skeletonic-debug-mode.min.css (v.{{site.version}})</option>
    </optgroup>
</select>
<code>
    &lt;label for=&quot;input&quot;&gt;Input&lt;/label&gt;&#10;                    &lt;input type=&quot;text&quot; name=&quot;input&quot; id=&quot;input&quot; placeholder=&quot;Text...&quot; /&gt;&#10;&#10;                    &lt;label for=&quot;textarea&quot;&gt;Textarea&lt;/label&gt;&#10;                    &lt;textarea name=&quot;textarea&quot; id=&quot;textarea&quot; placeholder=&quot;Text...&quot;&gt;&lt;/textarea&gt;                    &#10;                    &#10;                    &lt;label for=&quot;select&quot;&gt;Select&lt;/label&gt;&#10;                    &lt;select name=&quot;select&quot; id=&quot;select&quot;&gt;&#10;                        &lt;option value=&quot;&quot;&gt;Choose an item...&lt;/option&gt;&#10;                        &lt;optgroup label=&quot;Original CSS&quot;&gt;&#10;                            &lt;option value=&quot;&quot;&gt;skeletonic.css&lt;/option&gt;&#10;                            &lt;option value=&quot;&quot;&gt;skeletonic-debug-mode.css&lt;/option&gt;&#10;                        &lt;/optgroup&gt;&#10;                        &lt;optgroup label=&quot;Minified CSS&quot;&gt;&#10;                            &lt;option value=&quot;&quot;&gt;skeletonic.min.css&lt;/option&gt;&#10;                            &lt;option value=&quot;&quot;&gt;skeletonic-debug-mode.min.css&lt;/option&gt;&#10;                        &lt;/optgroup&gt;&#10;                    &lt;/select&gt;
</code>
</div>
</section>
<!-- End Forms -->