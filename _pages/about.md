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

  .workshop-meta,
  .workshop-nav {
    display: flex;
    flex-wrap: wrap;
    gap: 0.55rem;
  }

  .workshop-meta {
    margin: 0.9rem 0 1.1rem;
  }

  .workshop-meta span,
  .workshop-nav a {
    border: 1px solid var(--global-divider-color);
    border-radius: 0.35rem;
    display: inline-flex;
    line-height: 1.2;
    padding: 0.48rem 0.68rem;
  }

  .workshop-nav {
    margin: 1.1rem 0 0;
  }

  .workshop-nav a {
    color: var(--global-text-color);
    font-weight: 600;
    text-decoration: none;
  }

  .workshop-nav a:hover {
    border-color: var(--accent);
    color: var(--accent);
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

  .workshop-question {
    background: var(--accent-soft);
    border-left: 4px solid var(--accent);
    font-size: 1.08rem;
    line-height: 1.5;
    margin: 1.4rem 0 0;
    padding: 1rem 1.1rem;
  }

  .workshop-grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(13.5rem, 1fr));
    margin-top: 1.1rem;
  }

  .workshop-panel {
    border: 1px solid var(--global-divider-color);
    border-radius: 0.35rem;
    padding: 1rem;
  }

  .workshop-panel h3 {
    font-size: 1.08rem;
    margin: 0 0 0.45rem;
  }

  .workshop-panel p {
    margin-bottom: 0;
  }

  .workshop-list {
    columns: 2;
    column-gap: 2rem;
    margin-top: 1rem;
  }

  .workshop-list li {
    break-inside: avoid;
    margin-bottom: 0.45rem;
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

    .workshop-list {
      columns: 1;
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

    <div class="workshop-meta" aria-label="Workshop metadata">
      <span>{{ site.data.workshop.status }}</span>
      <span>{{ site.data.workshop.format }}</span>
      <span>{{ site.data.workshop.workshop_date }}</span>
      <span>{{ site.data.workshop.expected_attendance }} expected attendees</span>
    </div>

    <nav class="workshop-nav" aria-label="Workshop sections">
      <a href="#scope">Scope</a>
      <a href="#speakers">Speakers</a>
      <a href="#organizers">Organizers</a>
      <a href="#cfp">CFP</a>
      <a href="#dates">Dates</a>
      <a href="#schedule">Schedule</a>
    </nav>
  </header>

  <section class="workshop-section" id="scope">
    <h2>Workshop Scope</h2>
    <p class="workshop-lede">{{ site.data.workshop.description }}</p>
    <div class="workshop-question">
      <strong>Central question:</strong> {{ site.data.workshop.core_question }}
    </div>

    <div class="workshop-grid">
      <div class="workshop-panel">
        <h3>Human Modeling</h3>
        <p>Inferring goals, preferences, knowledge, trust, uncertainty, cognitive load, intent, and emotional needs.</p>
      </div>
      <div class="workshop-panel">
        <h3>AI Metacognition</h3>
        <p>Estimating capability boundaries, evidence strength, risk, reliability, and when the system should not act alone.</p>
      </div>
      <div class="workshop-panel">
        <h3>Interaction Policies</h3>
        <p>Choosing when to answer, ask, explain, retrieve, recommend, teach, collaborate, escalate, defer, or act.</p>
      </div>
    </div>

    <ul class="workshop-list">
      {% for topic in site.data.topics.topics %}
        <li>{{ topic }}</li>
      {% endfor %}
    </ul>
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

    <p class="workshop-small">Contact: <a href="mailto:{{ site.data.workshop.contact }}">{{ site.data.workshop.contact }}</a></p>
  </section>

  <section class="workshop-section" id="cfp">
    <h2>Call for Papers</h2>
    <p class="workshop-lede">We welcome research papers, benchmark papers, datasets, systems papers, position papers, and interdisciplinary studies on human modeling, AI metacognition, and interaction-level decision making in agentic systems.</p>

    <div class="workshop-grid">
      <div class="workshop-panel">
        <h3>Submission Format</h3>
        <p>Main text up to 9 pages, excluding references and appendices. Submissions are double-blind and non-archival.</p>
      </div>
      <div class="workshop-panel">
        <h3>Review Focus</h3>
        <p>Relevance, scientific quality, novelty, impact, clarity, and evaluation or reproducibility rigor where appropriate.</p>
      </div>
      <div class="workshop-panel">
        <h3>Submission Site</h3>
        <p>TBC</p>
      </div>
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
