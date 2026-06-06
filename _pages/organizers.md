---
layout: page
title: Organizers
permalink: /organizers/
nav: true
nav_order: 6
description: Organizer and program committee information.
---

# Organizers

{% for organizer in site.data.organizers.organizers %}

## [{{ organizer.name }}]({{ organizer.website }})

**{{ organizer.affiliation }}** · [{{ organizer.email }}](mailto:{{ organizer.email }})

{{ organizer.bio }}

{% endfor %}

## Program Committee

{% for member in site.data.organizers.program_committee %}

- {{ member }}
  {% endfor %}
