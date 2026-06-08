---
layout: page
title: Organizers
permalink: /organizers/
nav: true
nav_order: 3
description: Workshop organizer information.
---

<style>
  .post {
    --accent: #9f2436;
  }

  .person-grid {
    display: grid;
    gap: 2.4rem 1.4rem;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    margin: 1.5rem 0 0;
  }

  .person-card {
    color: var(--global-text-color);
    display: block;
    text-align: center;
    text-decoration: none;
  }

  .person-card:hover {
    color: var(--global-text-color);
    text-decoration: none;
  }

  .person-card:hover .person-name {
    color: var(--accent);
  }

  .person-photo {
    aspect-ratio: 1 / 1;
    background: var(--global-card-bg-color);
    border: 1px solid var(--global-divider-color);
    border-radius: 50%;
    display: block;
    height: auto;
    margin: 0 auto 1rem;
    object-fit: cover;
    width: min(11rem, 62vw);
  }

  .person-name {
    color: #b9dcff;
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 1.25;
    margin-bottom: 0.35rem;
  }

  html[data-theme="light"] .person-name {
    color: var(--accent);
  }

  .person-affiliation {
    color: var(--global-text-color-light);
    font-size: 0.98rem;
    line-height: 1.35;
    margin: 0 auto;
    max-width: 17rem;
  }

  @media (max-width: 820px) {
    .person-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 640px) {
    .person-grid {
      gap: 2rem 1rem;
    }

    .person-photo {
      width: min(8.5rem, 58vw);
    }

    .person-name {
      font-size: 1.05rem;
    }

    .person-affiliation {
      font-size: 0.92rem;
    }
  }

  @media (max-width: 360px) {
    .person-grid {
      grid-template-columns: 1fr;
    }
  }
</style>

# Organizers

<div class="person-grid">
  {% for organizer in site.data.organizers.organizers %}
    <a class="person-card" href="{{ organizer.website }}" aria-label="{{ organizer.name }}">
      <img class="person-photo" src="{{ organizer.image | relative_url }}" alt="{{ organizer.name }}" loading="lazy" />
      <div class="person-name">{{ organizer.name }}</div>
      <p class="person-affiliation">{{ organizer.affiliation }}</p>
    </a>
  {% endfor %}
</div>

Contact: [{{ site.data.workshop.contact }}](mailto:{{ site.data.workshop.contact }})
