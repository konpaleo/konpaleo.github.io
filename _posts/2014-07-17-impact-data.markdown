---
layout: post
title: Impact Data Extraction Framework
permalink: /projects/impact-data/
date: 2014-07-17
img: impact-data.png

meta-org: Web2Climate
meta-date: 2024-2026
meta-type: Commercial

category: Disaster Impact Data
description: Impact Data Intelligence is a framework for transforming unstructured information about natural-hazard events into structured, reusable datasets. It collects information from sources such as news websites, Wikipedia, and scientific publications, and extracts both quantitative and qualitative impacts using LLMs.
challenge: Impact information is scattered across sources and usually appears as narrative text. The system needs to handle differences in terminology, dates, locations, languages, and levels of detail while identifying duplicate reports of the same event. It also needs to remain independent of any single LLM provider.
methodology: The pipeline handles HTML and PDF ingestion, text preprocessing, location extraction, translation, summarization, and structured extraction through LLM function calling. Extracted events are validated, standardized, deduplicated, aggregated, and georeferenced using Nominatim. PostgreSQL, SQLAlchemy, and PostGIS provide storage, while Redis and Celery support asynchronous processing. A manually labelled dataset provides a basis for evaluating and comparing LLM performance..

tags:
    - LLM
    - Web Scraping
    - Data Structuring
    - Prompt Engineering
    - Georeferencing
    - Model Evaluation
technologies:
    - FastAPI
    - Pandas
    - Celery
    - Redis
    - PostgreSQL
    - Nominatim
gallery:
  - image: /img/projects/impact-data-flowchart.png
    caption: Tool architecture overview
  - image: /img/projects/georeferencing.png
    caption: Geolocation disambiguation flowchart
  - image: /img/projects/model-evaluation-flowchart.png
    caption: LLM evaluation framework flowchart
---
