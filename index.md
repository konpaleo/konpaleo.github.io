---
layout: home
title: Home
---

<section class="hero">
  <div class="hero-copy">
    <p class="eyebrow">Portfolio &amp; experiments</p>
    <h1>Hi, I’m <span>{{ site.author.name }}</span>.</h1>
    <p class="hero-text">I’m a curious person who enjoys turning ideas into useful, thoughtful projects. This is a place to share what I’m working on.</p>
    <div class="hero-actions">
      <a class="button" href="{{ '/projects/' | relative_url }}">Explore my projects</a>
      <a class="button button-secondary" href="{{ '/about/' | relative_url }}">More about me</a>
    </div>
  </div>
  <div class="hero-mark" aria-hidden="true">
    <span></span><span></span><span></span>
  </div>
</section>

<section class="section">
  <div class="section-heading">
    <div>
      <p class="eyebrow">Selected work</p>
      <h2>A few things I’ve made</h2>
    </div>
    <a class="text-link" href="{{ '/projects/' | relative_url }}">See all projects <span aria-hidden="true">&rarr;</span></a>
  </div>
  <div class="project-grid">
    {% assign featured_projects = site.data.projects | where: "featured", true %}
    {% for project in featured_projects %}
      {% include project-card.html project=project %}
    {% endfor %}
  </div>
</section>

<section class="callout">
  <p class="eyebrow">Let’s connect</p>
  <h2>Have an idea or want to say hello?</h2>
  <p>Replace this text with a short invitation and your preferred contact details.</p>
  <a class="text-link" href="mailto:{{ site.author.email }}">Send me an email <span aria-hidden="true">&rarr;</span></a>
</section>
