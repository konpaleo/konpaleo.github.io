---
layout: post
title: Oceanwise AI Assistant
permalink: /projects/oceanwise/
date: 2014-07-18
img: oceanwise.png

meta-org: Web2Climate
meta-date: 2024-2025
meta-type: Commercial

description: Oceanwise is a retrieval-augmented chatbot designed to provide a natural way of accessing climate-hazard and risk planning information to port operators and decision-makers. It works over a curated knowledge base of reports, PDFs, scientific papers and other selected sources, with responses grounded in retrieved documents and accompanied by citations.
challenge: There is an identified gap between scientific knowledge and decision-making. Decision-makers often need to access credible research without having the time or expertise to navigate large volumes of scientific literature. The challenge is to make this knowledge accessible and relevant, while keeping the underlying sources transparent and reliable.
methodology: The system combines document ingestion, parsing, chunking, summarization, and embeddings. Elasticsearch provides hybrid retrieval using vector search and BM25, followed by hierarchical retrieval and reranking. Queries are classified before entering the RAG pipeline, while versioned prompts, citation enforcement, and tenant-specific configurations control the generation layer.

tags:
  - RAG
  - LLM
  - Vector Databases
  - Prompt Engineering
  - API Integration
technologies:
  - FastAPI
  - Elasticsearch
  - Jina
gallery:
  - image: /img/projects/shot1.png
    caption: OceanWise screenshot 1
  - image: /img/projects/shot2.png
    caption: OceanWise screenshot 2
---
