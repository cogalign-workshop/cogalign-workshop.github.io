---
layout: page
title: Schedule
permalink: /schedule/
nav: true
nav_order: 6
description: Tentative one-day workshop schedule.
---

# Schedule

Status: **{{ site.data.schedule.status }}**

<table>
  <thead>
    <tr>
      <th>Time</th>
      <th>Session</th>
    </tr>
  </thead>
  <tbody>
    {% for item in site.data.schedule.items %}
      <tr>
        <td>{{ item.time }}</td>
        <td>{{ item.title }}</td>
      </tr>
    {% endfor %}
  </tbody>
</table>

Final timing and speaker assignments are TBC.
