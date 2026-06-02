---
layout: page
title: Speakers
permalink: /speakers/
nav: true
nav_order: 4
description: Potential invited speakers. All entries are TBC until confirmed.
---

# Speakers

All listed speakers are **Potential / TBC** by default. No invited speaker is confirmed until this page is updated to state confirmation explicitly.

{% for group in site.data.speakers %}

## {{ group.group }}

<div class="row row-cols-1 row-cols-md-3">
{% for speaker in group.speakers %}
  <div class="col mb-3">
    <div class="card h-100">
      <div class="card-body">
        <h3 class="card-title">{{ speaker.name }}</h3>
        <p><strong>Area:</strong> {{ speaker.area }}</p>
        <p><strong>Affiliation:</strong> {{ speaker.affiliation }}</p>
        <p><strong>Status:</strong> {{ speaker.status }}</p>
        <p><strong>Website:</strong> {{ speaker.website }}</p>
        <p><strong>Bio:</strong> {{ speaker.bio }}</p>
        <p><strong>Talk title:</strong> {{ speaker.talk_title }}</p>
      </div>
    </div>
  </div>
{% endfor %}
</div>
{% endfor %}
