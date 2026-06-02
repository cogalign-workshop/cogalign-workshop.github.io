---
layout: page
title: FAQ
permalink: /faq/
nav: true
nav_order: 10
description: Frequently asked questions.
---

# FAQ

{% for item in site.data.faq %}

## {{ item.question }}

{{ item.answer }}
{% endfor %}
