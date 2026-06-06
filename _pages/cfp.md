---
layout: page
title: CFP
permalink: /cfp/
nav: true
nav_order: 4
description: Call for papers for the proposed workshop.
---

# Call for Papers

We welcome research papers, benchmark papers, datasets, systems papers, position papers, and interdisciplinary studies on human modeling, AI metacognition, and interaction-level decision making in agentic systems.

## Central Question

> {{ site.data.workshop.core_question }}

## Topics of Interest

{% for topic in site.data.topics.topics %}

- {{ topic }}
  {% endfor %}

## Submission Types

{% for type in site.data.topics.submission_types %}

- {{ type }}
  {% endfor %}

## Formatting

- Main text up to 9 pages, excluding references and appendices.
- Double-blind peer review.
- Non-archival proceedings.
- Authors retain the right to submit extended versions to archival venues.

## Review Criteria

{% for criterion in site.data.topics.review_criteria %}

- {{ criterion }}
  {% endfor %}

## Submission Site

TBC

## Contact

{{ site.data.workshop.contact }}
