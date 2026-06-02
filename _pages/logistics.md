---
layout: page
title: Logistics
permalink: /logistics/
nav: true
nav_order: 8
description: Attendance, location preference, technical needs, and conflict disclosures.
---

# Logistics

## Format and Attendance

- Expected attendees: approximately {{ site.data.workshop.expected_attendance }}
- Format: {{ site.data.workshop.format | downcase }}
- Workshop date: {{ site.data.workshop.workshop_date }}
- Final location and room assignment: TBC

## Location Preference

From most preferred to least preferred:

{% for location in site.data.workshop.proposal.location_preference %}
{{ forloop.index }}. {{ location }}
{% endfor %}

## Technical Requirements

{% for requirement in site.data.workshop.proposal.special_requirements %}

- {{ requirement }}
  {% endfor %}

## Concurrent Submissions / Conflicts

- Concurrent workshop proposal submissions by organizers: {{ site.data.workshop.proposal.concurrent_submissions }}
- Organizer-authored submissions to this workshop: {{ site.data.workshop.proposal.organizer_authored_submissions }}
- The final website should disclose any relevant concurrent submissions or conflicts once confirmed.
- {{ site.data.workshop.proposal.conflict_policy }}
