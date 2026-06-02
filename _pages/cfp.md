---
layout: page
title: CFP
permalink: /cfp/
nav: true
nav_order: 2
description: Call for papers for the proposed workshop.
---

# Call for Papers

We invite researchers from machine learning, natural language processing, robotics, human-computer interaction, cognitive science, recommender systems, AI safety, affective computing, education, healthcare, and related areas to submit work on Human Modeling and Cognitive Alignment in Interactive Agents.

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
- References do not count toward the page limit.
- Appendices are allowed, but reviewers are not required to read them.
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
