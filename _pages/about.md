---
layout: page
title: Overview
permalink: /
nav: false
nav_order: 1
description: Proposed NeurIPS 2026 workshop on human modeling, AI metacognition, and interaction-policy selection.
---

<style>
  .workshop-hero {
    padding: 2rem 0 1.25rem;
  }

  .post > .post-header {
    display: none;
  }

  .workshop-title {
    font-size: clamp(2.3rem, 6vw, 4.5rem);
    line-height: 1;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  .workshop-subtitle {
    font-size: 1.35rem;
    line-height: 1.35;
    margin-bottom: 1rem;
  }

  .workshop-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
    margin: 1rem 0 1.5rem;
  }

  .workshop-meta span,
  .workshop-jump-nav a {
    border: 1px solid var(--global-divider-color);
    border-radius: 0.35rem;
    display: inline-flex;
    line-height: 1.2;
    padding: 0.45rem 0.65rem;
  }

  .workshop-jump-nav {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin: 1.5rem 0;
  }

  .workshop-jump-nav a {
    font-weight: 500;
  }

  .workshop-section {
    border-top: 1px solid var(--global-divider-color);
    margin-top: 2.75rem;
    padding-top: 2.25rem;
    scroll-margin-top: 5rem;
  }

  .workshop-section h2 {
    margin-top: 0;
  }

  .workshop-note {
    font-weight: 500;
  }
</style>

<div class="workshop-hero" id="overview">
  <h1 class="workshop-title">{{ site.data.workshop.title }}</h1>
  <p class="workshop-subtitle">{{ site.data.workshop.subtitle }}</p>
  <p><strong>{{ site.data.workshop.tagline }}</strong></p>

  <div class="workshop-meta" aria-label="Workshop metadata">
    <span>{{ site.data.workshop.status }}</span>
    <span>{{ site.data.workshop.format }}</span>
    <span>Expected Attendance: {{ site.data.workshop.expected_attendance }}</span>
    <span>Workshop Date: {{ site.data.workshop.workshop_date }}</span>
    <span>Location: {{ site.data.workshop.location }}</span>
  </div>

  <nav class="workshop-jump-nav" aria-label="Workshop sections">
    <a href="#cfp">Call for Papers</a>
    <a href="#topics">Topics</a>
    <a href="#schedule">Schedule</a>
    <a href="#dates">Important Dates</a>
    <a href="#speakers">Speakers</a>
    <a href="#organizers">Organizers</a>
    <a href="#diversity">Diversity</a>
    <a href="#logistics">Logistics</a>
    <a href="#ethics">Ethics</a>
    <a href="#faq">FAQ</a>
  </nav>

  <p><strong>Website URL:</strong> <a href="{{ site.data.workshop.url }}">{{ site.data.workshop.url }}</a></p>

  <p>{{ site.data.workshop.description }}</p>
</div>

<section class="workshop-section" id="overview-details">
  <h2>Workshop Overview</h2>

  <p>This proposed NeurIPS 2026 workshop connects machine learning, natural language processing, robotics, human-computer interaction, cognitive science, recommender systems, AI safety, education, healthcare, affective computing, and AI companions.</p>

  <p>The workshop centers on a shared problem across these communities: interactive AI systems must decide not only what output to produce, but what interaction policy is appropriate for a specific human, task, context, and uncertainty profile.</p>

  <h3>Central Question</h3>

  <blockquote>
    <p>{{ site.data.workshop.core_question }}</p>
  </blockquote>

  <h3>Position</h3>

  <blockquote>
    <p>{{ site.data.workshop.core_position }}</p>
  </blockquote>

  <h3>Human Modeling + AI Metacognition</h3>

  <p>Human modeling and AI metacognition are not end goals themselves. They are enabling capabilities for interaction-policy selection: deciding when to answer, ask, explain, retrieve, recommend, teach, collaborate, defer, escalate, negotiate, or act.</p>

  <h3>Why Now</h3>

  <ul>
    <li>Foundation models are becoming increasingly agentic.</li>
    <li>AI systems are moving into high-stakes and long-term interaction settings.</li>
    <li>Human-centered AI research is active but fragmented.</li>
    <li>AI companions, tutors, healthcare assistants, robots, recommender systems, and research assistants expose similar interaction-policy problems.</li>
    <li>There is a need for a shared interdisciplinary research agenda.</li>
  </ul>
</section>

<section class="workshop-section" id="cfp">
  <h2>Call for Papers</h2>

  <p>We invite researchers from machine learning, natural language processing, robotics, human-computer interaction, cognitive science, recommender systems, AI safety, affective computing, education, healthcare, and related areas to submit work on Human Modeling and Cognitive Alignment in Interactive Agents.</p>

  <h3>Submission Types</h3>

  <ul>
    {% for type in site.data.topics.submission_types %}
      <li>{{ type }}</li>
    {% endfor %}
  </ul>

  <h3>Formatting</h3>

  <ul>
    <li>Main text up to 9 pages, excluding references and appendices.</li>
    <li>References do not count toward the page limit.</li>
    <li>Appendices are allowed, but reviewers are not required to read them.</li>
    <li>Double-blind peer review.</li>
    <li>Non-archival proceedings.</li>
    <li>Authors retain the right to submit extended versions to archival venues.</li>
  </ul>

  <h3>Review Criteria</h3>

  <ul>
    {% for criterion in site.data.topics.review_criteria %}
      <li>{{ criterion }}</li>
    {% endfor %}
  </ul>

  <p><strong>Submission site:</strong> TBC</p>
  <p><strong>Contact:</strong> {{ site.data.workshop.contact }}</p>
</section>

<section class="workshop-section" id="topics">
  <h2>Topics</h2>

  <p>We invite submissions related, but not limited, to the following topics:</p>

  <ul>
    {% for topic in site.data.topics.topics %}
      <li>{{ topic }}</li>
    {% endfor %}
  </ul>

  <h3>Representative Domains</h3>

  <div class="row row-cols-1 row-cols-md-2">
    {% for domain in site.data.topics.domains %}
      <div class="col mb-3">
        <div class="card h-100">
          <div class="card-body">
            <h4 class="card-title">{{ domain.name }}</h4>
            <p class="card-text">{{ domain.description }}</p>
          </div>
        </div>
      </div>
    {% endfor %}
  </div>
</section>

<section class="workshop-section" id="schedule">
  <h2>Schedule</h2>

  <p class="workshop-note">Status: {{ site.data.schedule.status }}</p>

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

  <p>Final timing, session titles, and speaker assignments are TBC.</p>
</section>

<section class="workshop-section" id="dates">
  <h2>Important Dates</h2>

  <p>All dates are tentative unless marked otherwise. Deadlines use midnight AoE.</p>

  <table>
    <thead>
      <tr>
        <th>Milestone</th>
        <th>Date</th>
        <th>Time</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {% for item in site.data.dates %}
        <tr>
          <td>{{ item.label }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.time }}</td>
          <td>{{ item.status }}</td>
        </tr>
      {% endfor %}
    </tbody>
  </table>
</section>

<section class="workshop-section" id="speakers">
  <h2>Invited Speakers</h2>

  <p>All listed speakers are <strong>Potential / TBC</strong> by default. No invited speaker is confirmed until this page is updated to state confirmation explicitly.</p>

{% for group in site.data.speakers %}
<h3>{{ group.group }}</h3>
<div class="row row-cols-1 row-cols-md-3">
{% for speaker in group.speakers %}
<div class="col mb-3">
<div class="card h-100">
<div class="card-body">
<h4 class="card-title">{{ speaker.name }}</h4>
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

</section>

<section class="workshop-section" id="organizers">
  <h2>Organizers</h2>

  <p>Organizer details will be updated after confirmations are finalized.</p>

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

  <h3>Program Committee</h3>

  <ul>
    {% for member in site.data.organizers.program_committee %}
      <li>{{ member }}</li>
    {% endfor %}
  </ul>
</section>

<section class="workshop-section" id="diversity">
  <h2>Diversity & Inclusion</h2>

  <p>The workshop is interdisciplinary and aims to promote diversity across research communities, institutions, geography, career stage, gender, and sector. We will seek participation from academia, industry, and public-sector organizations, and we especially welcome students, early-career researchers, and participants from underrepresented groups.</p>

  <table>
    <thead>
      <tr>
        <th>Dimension</th>
        <th>Current status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Gender balance</td>
        <td>{{ site.data.organizers.diversity.gender_balance }}</td>
      </tr>
      <tr>
        <td>Seniority diversity</td>
        <td>{{ site.data.organizers.diversity.seniority_diversity }}</td>
      </tr>
      <tr>
        <td>Geographic diversity</td>
        <td>{{ site.data.organizers.diversity.geographic_diversity }}</td>
      </tr>
      <tr>
        <td>Institutional diversity</td>
        <td>{{ site.data.organizers.diversity.institutional_diversity }}</td>
      </tr>
      <tr>
        <td>Sector diversity</td>
        <td>{{ site.data.organizers.diversity.sector_diversity }}</td>
      </tr>
    </tbody>
  </table>

  <p>Final demographic information will be updated after organizer and speaker confirmations.</p>
</section>

<section class="workshop-section" id="logistics">
  <h2>Logistics</h2>

  <h3>Format and Attendance</h3>

  <ul>
    <li>Expected attendees: approximately {{ site.data.workshop.expected_attendance }}</li>
    <li>Format: {{ site.data.workshop.format | downcase }}</li>
    <li>Workshop date: {{ site.data.workshop.workshop_date }}</li>
    <li>Final location and room assignment: TBC</li>
  </ul>

  <h3>Location Preference</h3>

  <ol>
    {% for location in site.data.workshop.proposal.location_preference %}
      <li>{{ location }}</li>
    {% endfor %}
  </ol>

  <h3>Technical Requirements</h3>

  <ul>
    {% for requirement in site.data.workshop.proposal.special_requirements %}
      <li>{{ requirement }}</li>
    {% endfor %}
  </ul>

  <h3>Concurrent Submissions / Conflicts</h3>

  <ul>
    <li>Concurrent workshop proposal submissions by organizers: {{ site.data.workshop.proposal.concurrent_submissions }}</li>
    <li>Organizer-authored submissions to this workshop: {{ site.data.workshop.proposal.organizer_authored_submissions }}</li>
    <li>The final website should disclose any relevant concurrent submissions or conflicts once confirmed.</li>
    <li>{{ site.data.workshop.proposal.conflict_policy }}</li>
  </ul>
</section>

<section class="workshop-section" id="ethics">
  <h2>Ethics and Responsible Research</h2>

  <p>Human modeling and cognitive alignment raise important questions about privacy, manipulation, autonomy, fairness, emotional dependence, and societal impact. These issues are especially relevant for AI companions, educational systems, healthcare assistants, recommendation systems, and social robots.</p>

  <p>The workshop welcomes work on responsible human modeling, trustworthy personalization, calibrated reliance, transparency, governance, and human autonomy.</p>

  <h3>Expected Outcomes</h3>

  <ul>
    {% for outcome in site.data.topics.outcomes %}
      <li>{{ outcome }}</li>
    {% endfor %}
  </ul>
</section>

<section class="workshop-section" id="related-workshops">
  <h2>How This Workshop Differs from Related Workshops</h2>

  <p>{{ site.data.workshop.proposal.differentiation }}</p>

  <table>
    <thead>
      <tr>
        <th>Workshop area</th>
        <th>Primary focus</th>
      </tr>
    </thead>
    <tbody>
      {% for item in site.data.related_workshops %}
        <tr>
          <td>{{ item.workshop }}</td>
          <td>{{ item.focus }}</td>
        </tr>
      {% endfor %}
    </tbody>
  </table>

  <h3>Relevance for the Community</h3>

  <p>{{ site.data.workshop.proposal.community_relevance }}</p>

  <p>The expected outcome is a clearer shared vocabulary and research agenda for human modeling, AI metacognition, and interaction-level alignment in interactive agents.</p>
</section>

<section class="workshop-section" id="faq">
  <h2>FAQ</h2>

{% for item in site.data.faq %}
<h3>{{ item.question }}</h3>
<p>{{ item.answer }}</p>
{% endfor %}

</section>

<script src="{{ '/assets/js/workshop-single-page.js' | relative_url }}"></script>
