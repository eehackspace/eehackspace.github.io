---
layout: default
title: Home
---
<!-- Banner -->
<section id="banner">
<div class="inner" markdown="1">

# East Essex Hackspace

A Community Workshop Space for Hobbies and Skill Sharing<br />
Clements Hall Sports Pavilion, Park Gardens, Hockley, SS5 4HF

</div>
<!-- <video autoplay loop muted playsinline src="{{ '/images/banner.mp4' | relative_url }}"></video>  -->
</section>

<!-- Highlights -->
<section class="wrapper">
<div class="inner">
<header class="special" markdown="1">

## What is a Hackspace?

A hackspace is a shared space where people can make, build, fix, experiment and tinker with technology and all kinds of other things, simply for the fun of it.

By sharing tools, equipment and knowledge, we can do more together than we could at home - while learning, collaborating and making new friends along the way.

## East Essex Hackspace

East Essex Hackspace is based in an old sports pavilion in [Hawkwell](find-us.md).

We have metalworking and woodworking workshops, a computer lab with electronics workbenches, a 3D printing lab, laser cutting room, WAZER waterjet cutter, textiles and sewing equipment, a social/lecture space and more!

</header>
<div class="highlights">
{% for facility in site.data.facilities %}
<section>
<div class="content">
<header>
<i class="icon {{ facility.icon }}" aria-hidden="true"></i>
<h3>{{ facility.title }}</h3>
</header>
<p>{{ facility.description }}</p>
</div>
</section>
{% endfor %}
</div>
</div>
</section>

<section class="wrapper">
<div class="inner" markdown="1">
<header class="special" markdown="1">

## Workshops & Events

Tuesday evenings are our open night, social night, and when inductions for new members are conducted.

[View the event calendar &raquo;](https://wiki.eehack.space/index.php/Main_Page#Calendar_of_Events)


## Join us!

Come along to one of our Tuesday evening socials (from 7:30pm) to meet some of the members - inductions and tours for new members run from around 8pm.

[Find out how to join &raquo;](join-us.md)

</header>
</div>
</section>
