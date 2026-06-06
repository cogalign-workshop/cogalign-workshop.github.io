---
layout: page
title: Dates
permalink: /dates/
nav: true
nav_order: 3
description: Tentative important dates for the proposed workshop.
---

# Important Dates

All dates are tentative unless marked otherwise. Deadlines use midnight AoE.

<table>
  <thead>
    <tr>
      <th>Milestone</th>
      <th>Date</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    {% for item in site.data.dates %}
      <tr>
        <td>{{ item.label }}</td>
        <td>{{ item.date }}</td>
        <td>{{ item.status }}</td>
      </tr>
    {% endfor %}
  </tbody>
</table>
