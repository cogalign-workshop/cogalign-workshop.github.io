---
layout: page
title: Organizers
permalink: /organizers/
nav: true
nav_order: 3
description: Workshop organizer information.
---

# Organizers

{% for organizer in site.data.organizers.organizers %}

## [{{ organizer.name }}]({{ organizer.website }})

**{{ organizer.affiliation }}** · [{{ organizer.email }}](mailto:{{ organizer.email }})

{{ organizer.bio }}

{% endfor %}

Contact: [{{ site.data.workshop.contact }}](mailto:{{ site.data.workshop.contact }})
