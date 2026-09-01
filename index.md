---
layout: default
title: Home
---

{% include hero.html
  title="East Essex Hackspace"
  lead="A community workshop in Hawkwell where you can use tools you don't have at home, learn new skills and meet people who make things."
  photo="images/hackspace-outside.jpg"
  logo="images/eeh-logo.png"
  cta_solid_text="Visit on a Tuesday evening"
  cta_solid_href="/find-us/"
  cta_outline_text="Join"
  cta_outline_href="/join-us/"
  where="Hawkwell Pavilion, Park Gardens, Hockley, Essex SS5 4HF · run entirely by volunteers · registered charity 1190927"
%}

{% capture what_content %}
## What's a hackspace?

A hackspace is a workshop shared by its members. Ours is run as a charity by volunteers: everyone chips in for the tools, the space and the know-how, so together we can make, fix and learn things that none of us could manage alone in a shed or on the kitchen table.

Don't be put off by the name. "Hack" here is the old-fashioned kind - tinkering, mending, improvising and finding clever ways to make things work. It has nothing to do with breaking into computers.

It's for anyone aged 18 or over: hobbyists, repairers, crafters, students, retired engineers, people with a broken thing and a hunch it could be saved, and people who just want to learn a new skill in good company. You don't need any experience - members are happy to show you the ropes.

Think of it as a shared shed, or a gym membership for tools: instead of buying a lathe, a laser cutter and a 3D printer you'll each use twice a year, we share them - along with the skills to use them safely.
{% endcapture %}
{% include section.html id="what" content=what_content %}

{% capture facilities_content %}
## What you can use

The building is a converted sports pavilion, and the old changing rooms now house a series of well-equipped workshops. There's also a WAZER waterjet cutter that can cut metal, and a refurbished kitchen for hot drinks and warm snacks.

<div class="facilities">
  <figure>
    <img src="images/wood-workshop.jpg" alt="The wood workshop, with a lathe, bandsaw, workbenches and wall-mounted storage">
    <figcaption><strong>Wood workshop</strong> <span>Table saw, lathe, CNC, bandsaw and plenty of hand tools.</span></figcaption>
  </figure>
  <figure>
    <img src="images/metal-workshop.jpg" alt="The metal workshop, with a metalworking lathe and a milling machine">
    <figcaption><strong>Metal workshop</strong> <span>Large machine tools including a lathe and milling machine - kit you're unlikely to find in a typical hobbyist workshop.</span></figcaption>
  </figure>
  <figure>
    <img src="images/laser-cutter.jpg" alt="The CO2 laser cutter in the dedicated laser-cutting room">
    <figcaption><strong>Laser cutting room</strong> <span>A 900&thinsp;mm × 600&thinsp;mm 80&thinsp;W CO₂ laser cutter and a MOPA fibre laser for precision engraving and marking.</span></figcaption>
  </figure>
  <figure>
    <img src="images/3d-printer-lab.jpg" alt="The 3D printing lab, with several 3D printers on benches and shelves">
    <figcaption><strong>3D printing</strong> <span>Four modern FDM 3D printers, three with multi-material capabilities: 2× Bambu X1C, 1× Prusa XL and 1× FLSUN V400.</span></figcaption>
  </figure>
  <figure>
    <img src="images/computer-lab.jpg" alt="The computer lab, with desks, monitors and office chairs">
    <figcaption><strong>Computer lab</strong> <span>PCs for general use, CAD, 3D modelling and working with our 3D printers.</span></figcaption>
  </figure>
  <figure>
    <img src="images/electronics-workbench.jpg" alt="The electronics workbench, with a soldering station, bench power supplies and tool storage">
    <figcaption><strong>Electronics</strong> <span>A fully equipped electronics workbench with everything you need to build, test and repair projects.</span></figcaption>
  </figure>
  <figure>
    <img src="images/social-space.jpg" alt="The social space, set out with tables and chairs for meetings and workshops">
    <figcaption><strong>Social space</strong> <span>A comfortable space to socialise, share ideas, give talks and run workshops and events - with A/V equipment and a hearing loop.</span></figcaption>
  </figure>
  <figure>
    <img src="images/textiles.jpg" alt="Embroidered East Essex Hackspace logo">
    <figcaption><strong>Textiles</strong> <span>Learn to sew, work with leather, weave electronics into clothing, and explore all kinds of textile crafts.</span></figcaption>
  </figure>
</div>

The [wiki](https://wiki.eehack.space/) has the full detail on every workshop, tool and induction.
{: .wiki-note}
{% endcapture %}
{% include section.html id="facilities" wash=true content=facilities_content %}

{% capture get_started_content %}
{% include how-to-join.html %}

<p><a class="btn btn-solid" href="/join-us/">More about joining</a></p>
{% endcapture %}
{% include section.html id="get-started" content=get_started_content %}

{% capture community_content %}
## Repair café and community

We're not just for members. We run a public **repair café** where volunteers help fix broken household items - from lamps and toasters to clothing and toys - rather than see them thrown away. Bring something broken and we'll have a go at mending it together. <!-- VERIFY: repair café frequency — the wiki and current site say "typically every three months, usually on a Sunday"; more recent reports suggest roughly monthly on the last Saturday. Check with the events team before publishing a frequency. --> Check the [event calendar](https://wiki.eehack.space/index.php/Main_Page#Calendar_of_Events) or the [Facebook group](https://www.facebook.com/groups/eastessexhackspace) for the next date.

There's also a **tool library**, plus hackathons, workshops and talks through the year.

The hackspace began with volunteers making face shields and other PPE for local healthcare workers during the 2020 lockdown, and that community spirit has stuck: repair cafés have saved hundreds of items from landfill, and members have refurbished laptops for local schoolchildren.

If you'd like to volunteer at a repair café - fixers, sewers and tea-makers all welcome - [get in touch](mailto:info@eehack.space) or ask on [Discord](https://discord.gg/KftFA5S).
{% endcapture %}
{% include section.html id="community" wash=true content=community_content %}

{% capture support_content %}
## Support the hackspace

East Essex Hackspace is a registered charity run entirely by volunteers. Every pound goes on rent, heating, insurance, consumables and equipment.

### Donate

You can donate through [JustGiving](https://www.justgiving.com/eehackspace). If you're a UK taxpayer, Gift Aid adds 25% to your donation at no cost to you.

### Volunteer

The space is run by its members, for its members - from fixing the plumbing to running inductions. If you'd like to help, come along on a Tuesday or say hello on [Discord](https://discord.gg/KftFA5S).

### Sponsor equipment

If your organisation would like to sponsor a tool, a room or a project, email [info@eehack.space](mailto:info@eehack.space) - we'd love to talk.

<p><a class="btn btn-solid" href="https://www.justgiving.com/eehackspace">Donate on JustGiving</a></p>
{% endcapture %}
{% include section.html id="support" content=support_content %}

{% capture find_content %}
## Find us

<div class="cols cols-photo">
  <div>
    <address class="address">
      East Essex Hackspace CIO<br>
      Hawkwell Pavilion<br>
      Park Gardens<br>
      Hockley, Essex<br>
      SS5 4HF
    </address>
    <ul class="tidy">
      <li>what3words: <a href="https://what3words.com/tripods.normal.outlined">tripods.normal.outlined</a></li>
      <li><a href="https://www.google.com/maps/dir/?api=1&amp;destination=51.596974,0.672686">Directions on Google Maps</a></li>
    </ul>
    <p>We're the white former sports pavilion at Clements Hall recreation ground. There's free parking by the space, and Hockley station is walkable. See <a href="/find-us/">parking, train and cycling notes</a>.</p>
  </div>
  <figure>
    <img src="images/hackspace-ramp.jpg" alt="The white pavilion building from the path, with the East Essex Hackspace logo by the front door and a ramp to the entrance">
    <figcaption>Look for the white pavilion with the red logo by the door.</figcaption>
  </figure>
</div>
{% endcapture %}
{% include section.html id="find" wash=true content=find_content %}
