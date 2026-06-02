---
layout: page
title: Organizers
permalink: /organizers/
nav: true
nav_order: 6
description: Organizer and program committee information.
---

# Organizers

Organizer details will be updated after confirmations are finalized.

<div class="row row-cols-1 row-cols-md-2">
{% for organizer in site.data.organizers.organizers %}
  <div class="col mb-3">
    <div class="card h-100">
      <div class="card-body">
        <h3 class="card-title">{{ organizer.name }}</h3>
        <p><strong>Affiliation:</strong> {{ organizer.affiliation }}</p>
        <p><strong>Role:</strong> {{ organizer.role }}</p>
        <p><strong>Website:</strong> {{ organizer.website }}</p>
        <p><strong>Email:</strong> {{ organizer.email }}</p>
        <p><strong>Bio:</strong> {{ organizer.bio }}</p>
        <p><strong>Status:</strong> {{ organizer.status }}</p>
      </div>
    </div>
  </div>
{% endfor %}
</div>

## Program Committee

{% for member in site.data.organizers.program_committee %}

- {{ member }}
  {% endfor %}
