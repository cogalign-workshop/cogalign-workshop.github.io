---
layout: page
title: Ethics
permalink: /ethics/
nav: false
nav_order: 9
description: Ethics, responsible research, and expected workshop outcomes.
---

# Ethics and Responsible Research

Human modeling and cognitive alignment raise important questions about privacy, manipulation, autonomy, fairness, emotional dependence, and societal impact. These issues are especially relevant for AI companions, educational systems, healthcare assistants, recommendation systems, and social robots.

The workshop welcomes work on responsible human modeling, trustworthy personalization, calibrated reliance, transparency, governance, and human autonomy.

## Expected Outcomes

{% for outcome in site.data.topics.outcomes %}

- {{ outcome }}
  {% endfor %}
