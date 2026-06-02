---
layout: page
title: Overview
permalink: /
nav: false
nav_order: 1
description: Proposed NeurIPS 2026 workshop on human modeling, AI metacognition, and interaction-policy selection.
---

# {{ site.data.workshop.title }}

## {{ site.data.workshop.subtitle }}

**{{ site.data.workshop.tagline }}**

`{{ site.data.workshop.status }}` `{{ site.data.workshop.format }}` `Expected Attendance: {{ site.data.workshop.expected_attendance }}` `Workshop Date: {{ site.data.workshop.workshop_date }}` `Location: {{ site.data.workshop.location }}`

[Call for Papers]({{ '/cfp/' | relative_url }}){: .btn .btn-primary}
[Important Dates]({{ '/dates/' | relative_url }}){: .btn .btn-outline-primary}
[Tentative Schedule]({{ '/schedule/' | relative_url }}){: .btn .btn-outline-primary}
[Contact / Organizer information TBC]({{ '/organizers/' | relative_url }}){: .btn .btn-outline-primary}

**Website URL:** [{{ site.data.workshop.url }}]({{ site.data.workshop.url }})

{{ site.data.workshop.description }}

## Workshop Overview

This proposed NeurIPS 2026 workshop connects machine learning, natural language processing, robotics, human-computer interaction, cognitive science, recommender systems, AI safety, education, healthcare, affective computing, and AI companions.

The workshop centers on a shared problem across these communities: interactive AI systems must decide not only what output to produce, but what interaction policy is appropriate for a specific human, task, context, and uncertainty profile.

## Central Question

> {{ site.data.workshop.core_question }}

## Position

> {{ site.data.workshop.core_position }}

## Human Modeling + AI Metacognition

Human modeling and AI metacognition are not end goals themselves. They are enabling capabilities for interaction-policy selection: deciding when to answer, ask, explain, retrieve, recommend, teach, collaborate, defer, escalate, negotiate, or act.

## Why Now

- Foundation models are becoming increasingly agentic.
- AI systems are moving into high-stakes and long-term interaction settings.
- Human-centered AI research is active but fragmented.
- AI companions, tutors, healthcare assistants, robots, recommender systems, and research assistants expose similar interaction-policy problems.
- There is a need for a shared interdisciplinary research agenda.

## Representative Domains

<div class="row row-cols-1 row-cols-md-2">
{% for domain in site.data.topics.domains %}
  <div class="col mb-3">
    <div class="card h-100">
      <div class="card-body">
        <h3 class="card-title">{{ domain.name }}</h3>
        <p class="card-text">{{ domain.description }}</p>
      </div>
    </div>
  </div>
{% endfor %}
</div>

## How This Workshop Differs from Related Workshops

{{ site.data.workshop.proposal.differentiation }}

<table>
  <thead>
    <tr>
      <th>Workshop area</th>
      <th>Primary focus</th>
    </tr>
  </thead>
  <tbody>
    {% for item in site.data.related_workshops %}
      <tr>
        <td>{{ item.workshop }}</td>
        <td>{{ item.focus }}</td>
      </tr>
    {% endfor %}
  </tbody>
</table>

## Relevance for the Community

{{ site.data.workshop.proposal.community_relevance }}

The expected outcome is a clearer shared vocabulary and research agenda for human modeling, AI metacognition, and interaction-level alignment in interactive agents.
