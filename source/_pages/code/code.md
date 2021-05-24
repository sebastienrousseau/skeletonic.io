---
layout: page
key: 4bfb70db-b36ffe5c8951-af4b-3083-b36ffe5c8951
title: Code
subtitle: Simply designed to fit your cascading web life.
description: A lightweight, intuitive, accessible and ultra-responsive CSS Framework to streamline your Digital and Mobile Web development needs.
keywords: code, css, deadon, framework, front-end, frontend, gridsystem, lightweight, mobile-first, modern, responsive, semantic, skeletonic, skeletonic.css, style-agnostic
image: /assets/images/backgrounds/bg-code.png
author: Sebastien Rousseau
permalink: /code.html
categories: [content]
section: code
tags: [code, css, deadon, framework, front-end, frontend, gridsystem, lightweight, mobile-first, modern, responsive, semantic, skeletonic, skeletonic.css, style-agnostic]
status: publish
type: page
published: true
meta: {code, css, deadon, framework, front-end, frontend, gridsystem, lightweight, mobile-first, modern, responsive, semantic, skeletonic, skeletonic.css, style-agnostic}
date: May 25, 2021
robots: all
---

<!-- Code -->
<section class="grid-flex text-left">
    <div class="flex-4">
    <nav class="nav-page" aria-label="{{page.title}} Navigation"> 
        <ul class="nav"> 
            <li><a href="#{{page.title | downcase | replace: ' ', '-' }}">{{page.title}}</a></li>
            <li><a href="#{{'HTML Code Element' | downcase | replace: ' ', '-' }}">HTML Code Element</a></li>
            <li><a href="#{{'Code block' | downcase | replace: ' ', '-' }}">Code block</a></li>
            <li><a href="#{{'Code block colours' | downcase | replace: ' ', '-' }}">Code block colours</a></li>
            <li><a href="#{{'HTML Code Element' | downcase | replace: ' ', '-' }}">HTML Code Element</a></li>
        </ul> 
    </nav>
</div>
<div class="flex-8" markdown="1">

#### {{ page.title }}

 The HTML &lt;code&gt; element displays its contents styled in a fashion intended to indicate that the text is a short fragment of computer code.

#### HTML Code Element

The HTML &lt;code&gt; element  is used to define a piece of computer code. The content inside is displayed in the browser's default monospace font.

For inline code, you can use the &lt;code&gt; element.

<code>&lt;code&gt;import "skeletonic"void main() {print("Hello Skeletonic")}&lt;/code&gt;</code>

#### Code block

The &lt;code&gt; element does not preserve extra whitespace and line-breaks.To fix this, you can put the &lt;code&gt; element inside a &lt;pre&gt; element:
<code>
    <pre>
&lt;code&gt;&#10;    &lt;pre&gt;&#10;    import &quot;skeletonic&quot;&#10;        void main() {&#10;            print(&quot;Hello Skeletonic&quot;)&#10;        }&#10;    &lt;/pre&gt;&#10;&lt;/code&gt;                    
    </pre>
</code>                

#### Code block colours

<code class="primary">Primary</code>                
<code class="secondary">Secondary</code>                
<code class="success">Success</code>                
<code class="info">Info</code>                
<code class="warning">Warning</code>                
<code class="error">Error</code>                

#### HTML var Element for variables

The HTML &lt;var&gt; element is used to define a variable in programming or in a mathematical expression. The content inside is typically displayed in italic.
                
<code>Skeletonic CSS Version: &lt;var&gt;v&lt;var&gt; where v is equal to: {{site.version}}</code>                
    
</div>
</section>
<!-- End Code -->