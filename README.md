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

1. Add its image to `img/portfolio/`.
2. Create a dated file in `_posts/`.
3. Use `layout: post` and provide a title, image, description, and project metadata:

```txt
---
layout: post
title: Project title
date: 2026-01-01
img: cabin.png
alt: image-alt
project-date: January 2026
client: The Client
category: Web Development
description: The description of the project
repository: https://github.com/your-name/your-project
gallery:
  - image: /img/projects/screenshot.png
    alt: Project dashboard screenshot
    caption: Dashboard showing project results
---

## Overview

Add a structured project description here using Markdown headings and paragraphs.

## Approach

Describe the approach and results in another section.
```

The filename date and slug determine the project URL, for example
`/2026/01/01/project-title/`. Set `permalink` in the post front matter when a
different stable URL is required.

The Markdown body becomes the project description and supports headings and
paragraphs. Add `gallery` entries to show smaller screenshots or figures below
the description; place those files under `img/projects/`. Gallery images can be
clicked to open a larger preview. The repository button appears when a project
has a `repository` URL.
