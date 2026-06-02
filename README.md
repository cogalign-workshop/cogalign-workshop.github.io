# Human Modeling and Cognitive Alignment in Interactive Agents

This repository contains the website for the proposed NeurIPS 2026 workshop **Human Modeling and Cognitive Alignment in Interactive Agents**.

The site is based on the al-folio Jekyll template. The al-folio license and attribution are preserved in this repository.

## Editing Workshop Content

Most workshop content is data-driven. Edit these files first:

- `_data/workshop.yml` - title, subtitle, tagline, proposal metadata, logistics, contact, conflict disclosures
- `_data/dates.yml` - important dates
- `_data/speakers.yml` - potential invited speaker entries
- `_data/organizers.yml` - organizers, program committee, diversity fields
- `_data/schedule.yml` - tentative one-day schedule
- `_data/topics.yml` - CFP topics, domains, review criteria, outcomes
- `_data/faq.yml` - FAQ entries
- `_data/related_workshops.yml` - related-workshop comparison

The public pages are in `_pages/`.

## TBC Fields

The following fields are intentionally marked `TBC` until confirmed:

- Workshop date and final location
- Submission site and contact email
- Organizer details
- Program committee members
- Speaker invitations, affiliations, websites, bios, and talk titles
- Demographic diversity details
- Concurrent workshop proposal submissions and conflict disclosures
- Remote participation, recording, and venue-provided hybrid support

Do not mark potential invited speakers as confirmed until invitations are finalized.

## Local Development

Install dependencies:

```bash
npm ci
bundle install
```

Run locally:

```bash
bundle exec jekyll serve
```

Then open `http://127.0.0.1:4000/`.

## Build

```bash
npm run lint:prettier
npm run lint:style-contract
bundle exec al-folio upgrade audit --no-fail
bundle exec jekyll build
```

The generated site is written to `_site/`.

## GitHub Pages Deployment

The repository includes `.github/workflows/deploy.yml`, which builds the site on pushes to `main` and deploys `_site/` to the `gh-pages` branch.

Manual repository settings:

1. In GitHub repository settings, enable Actions workflow permissions with read/write access.
2. In GitHub Pages settings, choose **Deploy from a branch**.
3. Select branch `gh-pages` and the root folder.
4. Use the default site URL: `https://cogalign-workshop.github.io/`.

## al-folio v1 Boundary Notes

This site customizes starter-owned content and configuration only. Shared runtime behavior, layouts, includes, search assets, icon loading, and other plugin-owned behavior belong to the al-folio v1 plugin gems.
