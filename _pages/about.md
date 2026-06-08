---
layout: page
title: Overview
permalink: /
nav: false
nav_order: 1
description: Proposed NeurIPS 2026 workshop on human modeling, AI metacognition, and interaction-policy selection.
---

<style>
  .post > .post-header,
  .post > .post-header * {
    display: none;
  }

  .workshop-page {
    --accent: #9f2436;
    --accent-soft: rgba(159, 36, 54, 0.08);
    --ink-soft: var(--global-text-color-light);
    padding-bottom: 2rem;
  }

  .workshop-hero {
    padding: 1.8rem 0 1rem;
  }

  .workshop-logo {
    display: block;
    height: clamp(3rem, 7vw, 4.7rem);
    margin-bottom: 1rem;
    width: auto;
  }

  .workshop-title {
    font-size: clamp(1.8rem, 3.4vw, 2.85rem);
    line-height: 1.08;
    letter-spacing: 0;
    margin: 0 0 0.8rem;
    max-width: 23ch;
    text-transform: uppercase;
  }

  .workshop-subtitle {
    color: var(--ink-soft);
    font-size: 1.05rem;
    line-height: 1.45;
    margin: 0 0 1rem;
    max-width: 48rem;
  }

  .workshop-tagline {
    border-left: 4px solid var(--accent);
    font-size: 1rem;
    line-height: 1.45;
    margin: 1rem 0;
    max-width: 52rem;
    padding-left: 1rem;
  }

  .workshop-meta {
    color: var(--global-text-color);
    font-size: clamp(1.35rem, 2.8vw, 2rem);
    font-weight: 600;
    line-height: 1.25;
    margin: 1.15rem 0 0;
  }

  .workshop-section {
    border-top: 1px solid var(--global-divider-color);
    margin-top: 2.8rem;
    padding-top: 2.25rem;
    scroll-margin-top: 5rem;
  }

  .workshop-section h2 {
    font-size: 1.65rem;
    margin-top: 0;
  }

  .workshop-lede {
    font-size: 1.05rem;
    line-height: 1.65;
    max-width: 55rem;
  }

  .cfp-details {
    display: grid;
    gap: 0.85rem;
    margin-top: 1.25rem;
    max-width: 55rem;
  }

  .cfp-details p {
    font-size: 1rem;
    line-height: 1.55;
    margin: 0;
  }

  .cfp-details strong {
    color: var(--global-text-color);
    font-weight: 700;
  }

  .scope-copy {
    max-width: 58rem;
  }

  .scope-copy p {
    font-size: 1.08rem;
    line-height: 1.7;
    margin-bottom: 1rem;
  }

  .workshop-table-wrap {
    overflow-x: auto;
  }

  .workshop-table {
    min-width: 34rem;
    width: 100%;
  }

  .workshop-table th {
    white-space: nowrap;
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

  .workshop-small {
    color: var(--ink-soft);
    font-size: 0.95rem;
  }

  @media (max-width: 820px) {
    .person-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 640px) {
    .workshop-title {
      max-width: 14ch;
    }

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

<div class="workshop-page">
  <header class="workshop-hero" id="overview">
    <img class="workshop-logo" src="{{ '/assets/img/cogalign-logo.svg' | relative_url }}" alt="CogAlign Workshop logo" />
    <h1 class="workshop-title">{{ site.data.workshop.title }}</h1>
    <p class="workshop-subtitle">{{ site.data.workshop.subtitle }}</p>
    <p class="workshop-tagline"><strong>{{ site.data.workshop.tagline }}</strong></p>

    <p class="workshop-meta">{{ site.data.workshop.workshop_date }}</p>
  </header>

  <section class="workshop-section" id="scope">
    <h2>Workshop Scope</h2>
    <div class="scope-copy">
      <p>As foundation-model agents become collaborators in real workflows, the central challenge is no longer only whether they can solve a task. It is whether they can understand the human context, recognize the limits of their own knowledge and capabilities, and choose an appropriate way to interact.</p>
      <p>CogAlign brings together human modeling, AI metacognition, and interaction policy: how systems infer goals, preferences, uncertainty, trust, cognitive load, and intent; how they judge evidence, risk, and capability boundaries; and how they decide when to answer, ask, explain, retrieve, recommend, teach, defer, or act.</p>
      <p>The workshop welcomes methods, evaluations, datasets, systems, and position papers that make human-AI interaction more adaptive, calibrated, and accountable across domains such as education, healthcare, robotics, AI companions, scientific discovery, and recommendation.</p>
    </div>
  </section>

  <section class="workshop-section" id="speakers">
    <h2>Invited Speakers and Panelists</h2>
    {% for group in site.data.speakers %}
      <div class="person-grid">
        {% for speaker in group.speakers %}
          <a class="person-card" href="{{ speaker.website }}" aria-label="{{ speaker.name }}">
            <img class="person-photo" src="{{ speaker.image | relative_url }}" alt="{{ speaker.name }}" loading="lazy" />
            <div class="person-name">{{ speaker.name }}</div>
            <p class="person-affiliation">{{ speaker.affiliation }}</p>
          </a>
        {% endfor %}
      </div>
    {% endfor %}
  </section>

  <section class="workshop-section" id="organizers">
    <h2>Organizers</h2>
    <div class="person-grid">
      {% for organizer in site.data.organizers.organizers %}
        <a class="person-card" href="{{ organizer.website }}" aria-label="{{ organizer.name }}">
          <img class="person-photo" src="{{ organizer.image | relative_url }}" alt="{{ organizer.name }}" loading="lazy" />
          <div class="person-name">{{ organizer.name }}</div>
          <p class="person-affiliation">{{ organizer.affiliation }}</p>
        </a>
      {% endfor %}
    </div>

  </section>

  <section class="workshop-section" id="cfp">
    <h2>Call for Papers</h2>
    <p class="workshop-lede">We welcome research papers, benchmark papers, datasets, systems papers, position papers, and interdisciplinary studies on human modeling, AI metacognition, and interaction-level decision making in agentic systems.</p>

    <div class="cfp-details">
      <p><strong>Submission Format:</strong> Main text up to 9 pages, excluding references and appendices. Submissions are double-blind and non-archival.</p>
      <p><strong>Review Focus:</strong> Relevance, scientific quality, novelty, impact, clarity, and evaluation or reproducibility rigor where appropriate.</p>
      <p><strong>Submission Site:</strong> TBC</p>
    </div>
  </section>

  <section class="workshop-section" id="dates">
    <h2>Important Dates</h2>
    <p class="workshop-small">All deadlines are tentative and use midnight AoE.</p>
    <div class="workshop-table-wrap">
      <table class="workshop-table">
        <thead>
          <tr>
            <th>Milestone</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {% for item in site.data.dates %}
            <tr>
              <td>{{ item.label }}</td>
              <td>{{ item.date }}</td>
            </tr>
          {% endfor %}
        </tbody>
      </table>
    </div>
  </section>

  <section class="workshop-section" id="schedule">
    <h2>Schedule</h2>
    <p class="workshop-small">Tentative one-day program.</p>
    <div class="workshop-table-wrap">
      <table class="workshop-table">
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
    </div>
  </section>
</div>

<script src="{{ '/assets/js/workshop-single-page.js' | relative_url }}"></script>
