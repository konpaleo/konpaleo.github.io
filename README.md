# Freelancer Jekyll portfolio

This is a Jekyll portfolio site based on the Freelancer Bootstrap theme.
Projects are stored as posts and published as standalone pages.

Jekyll theme based on [Freelancer bootstrap theme ](http://startbootstrap.com/template-overviews/freelancer/)

## Run locally

```bash
bundle install
bundle exec jekyll serve --livereload
```

Open <http://localhost:4000>.

## Add a project

1. Add its hero image to `img/projects/`.
2. Create a dated file in `_posts/`.
3. Use `layout: post` and provide a title, image, description, and project metadata. Challenge, methodology, keywords, and technologies are optional:

```txt
---
layout: post
title: Project title
date: 2026-01-01
img: cabin.png
alt: image-alt
project-date: January 2026
category: Project category
description: The description of the project
challenge: The challenge addressed by the project
methodology: The approach used to address the challenge
tags:
  - Project keyword
technologies:
  - Technology or framework
repository: https://github.com/your-name/your-project
gallery:
  - image: /img/projects/screenshot.png
    alt: Project dashboard screenshot
    caption: Dashboard showing project results
---
```

The filename date and slug determine the project URL, for example
`/2026/01/01/project-title/`. Set `permalink` in the post front matter when a
different stable URL is required.

The project page presents the description as its Overview, followed by the
Challenge and Methodology when provided. Keywords (`tags`) and technologies
appear as matching tag lists; the Technologies section is omitted when its
list is empty. Add `gallery` entries to show screenshots or figures below the
project details; place those files under `img/projects/`. Gallery images can be
clicked to open a larger preview. The repository button appears when a project
has a `repository` URL.
