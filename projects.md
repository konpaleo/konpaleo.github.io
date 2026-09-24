---
layout: default
title: Projects
permalink: /projects/
---

<section class="page-heading">
  <p class="eyebrow">Selected work</p>
  <h1>Projects and experiments</h1>
  <p>A growing collection of things I’ve built, explored, and learned from.</p>
</section>

<div class="project-grid project-grid-all">
  {% for project in site.data.projects %}
    {% include project-card.html project=project %}
  {% endfor %}
</div>
