---
layout: page
title: Speakers
permalink: /speakers/
nav: true
nav_order: 2
description: Invited speakers and panelists.
---

# Invited Speakers and Panelists

{% for group in site.data.speakers %}

{% for speaker in group.speakers %}

## [{{ speaker.name }}]({{ speaker.website }})

**{{ speaker.affiliation }}** · {{ speaker.area }}

{{ speaker.connection }}

{% endfor %}
{% endfor %}
