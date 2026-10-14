# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static marketing site for a construction estimating service, deployed to Netlify (`https://construction-estimating-services.netlify.app/`, per the canonical tag). Plain HTML/CSS/vanilla JS — no build step, no package manager, no tests, no linter.

## Design reference

Live site https://construction-estimating-services.netlify.app/ is the design reference. Match its look (layout, spacing, typography, colors, components) when building or changing pages, including the residential subpage. Check it with Playwright/WebFetch before making visual decisions.

## Running locally

Open `index.html` directly, or serve the folder so relative paths and the subpage resolve:

```sh
npx serve .            # or: python -m http.server 8000
```

## Links

Site is opened straight from disk and hosted on GitHub Pages (served under a `/construction-estimating-services/` subpath). Internal links must be relative and point at the file explicitly: `../index.html#services`, `../commercial/index.html`, never `../#services`, `/` or `commercial/` (folder links show a directory listing on `file://`). `.nojekyll` keeps Pages from running Jekyll.

The header "Services" dropdown and its mobile-drawer sub-list (all subpages) are styled/driven by shared `assets/site-nav.css` + `assets/site-nav.js`, linked from every page. Adding a service subpage means adding it to that list in every header + drawer (18 pages incl. roofing, renovation, flooring, painting, warehouse, excavation, landscaping, general-contractors, apartment-building, plumbing). Blog posts live in `blog/<slug>/` (two folders deep, so their links start `../../`); each post is just an `index.html` that links the shared `../../assets/blog.css` + `../../assets/subpage.js` (no per-post css/js folders, so a new post needs no new CSS/JS file; style changes go in `assets/blog.css` and apply to every post). `assets/subpage.js` is also linked (as `../assets/subpage.js`) by apartment-building, excavation, flooring, general-contractors, landscaping, plumbing and warehouse; the other subpages still have their own `js/main.js` and every service subpage keeps its own `css/styles.css`. Posts go in the separate "Blog" dropdown (`#blogMenu`) and the drawer's Blog group (`#drawerBlogLabel`), not under Services. Posts (alphabetical by state): `blog/cost-to-build-a-house-in-alabama/`, `blog/cost-to-build-a-house-in-alaska/`, `blog/cost-to-build-a-house-in-arizona/`, `blog/cost-to-build-a-house-in-arkansas/`, `blog/cost-to-build-a-house-in-california/`, `blog/cost-to-build-a-house-in-colorado/`, `blog/cost-to-build-a-house-in-connecticut/`, `blog/cost-to-build-a-house-in-delaware/`, `blog/cost-to-build-a-house-in-florida/`, `blog/cost-to-build-a-house-in-georgia/`, `blog/cost-to-build-a-house-in-hawaii/`, `blog/cost-to-build-a-house-in-idaho/`, `blog/cost-to-build-a-house-in-illinois/`, `blog/cost-to-build-a-house-in-indiana/`, `blog/cost-to-build-a-house-in-iowa/`, `blog/cost-to-build-a-house-in-kansas/`, `blog/cost-to-build-a-house-in-kentucky/`, `blog/cost-to-build-a-house-in-louisiana/`, `blog/cost-to-build-a-house-in-maine/`, `blog/cost-to-build-a-house-in-maryland/`, `blog/cost-to-build-a-house-in-massachusetts/`, `blog/cost-to-build-a-house-in-michigan/`, `blog/cost-to-build-a-house-in-minnesota/`, `blog/cost-to-build-a-house-in-mississippi/`, `blog/cost-to-build-a-house-in-missouri/`, `blog/cost-to-build-a-house-in-montana/`, `blog/cost-to-build-a-house-in-nebraska/`, `blog/cost-to-build-a-house-in-nevada/`, `blog/cost-to-build-a-house-in-new-hampshire/`, `blog/cost-to-build-a-house-in-new-jersey/`, `blog/cost-to-build-a-house-in-new-mexico/`, `blog/cost-to-build-a-house-in-new-york/`, `blog/cost-to-build-a-house-in-north-carolina/`, `blog/cost-to-build-a-house-in-north-dakota/`, `blog/cost-to-build-a-house-in-ohio/`, `blog/cost-to-build-a-house-in-oklahoma/`, `blog/cost-to-build-a-house-in-oregon/`, `blog/cost-to-build-a-house-in-pennsylvania/`, `blog/cost-to-build-a-house-in-rhode-island/`, `blog/cost-to-build-a-house-in-south-carolina/`, `blog/cost-to-build-a-house-in-south-dakota/`, `blog/cost-to-build-a-house-in-tennessee/`, `blog/cost-to-build-a-house-in-texas/`, `blog/cost-to-build-a-house-in-utah/`. Blog post heading levels follow the content brief's outline (visual size comes from classes, not tags): H1 title; H2 for Average Cost, How to Estimate, Estimating Services, Cost per Sq Ft, Construction Costs, Cost Factors, Additional Costs and the closing "What Determines the Final Cost" (`<h2 class="h3 section-sub">`); H3 for the subsections incl. the Calculator and 3,000 sq ft questions (`<h3 class="h2">`), the 12 trade cards and the three cost-factor tabs; H4 for every accordion question (`<summary><h4 class="acc__title">…</h4></summary>`). List-item titles are `<p class="term__title">` (headwords, not headings) and the "Main Factors Affecting…" tab label is `<div class="h3">`. The Blog dropdown (`#blogMenu`) is a centred 3-column, 940px-wide menu (rules at the end of the dropdown block in `site-nav.css`) so all posts stay on screen; at ~16 rows per column (≈48 posts) it reaches the bottom of a 768px-tall screen, so switch to 4 columns then. Below 1440px the header phone link is icon-only and below 1300px the drawer replaces the desktop nav (rules in `site-nav.css`).

## Architecture

Two independent pages, each with its **own** stylesheet, script, and design tokens. They do not share CSS or JS.

| Page | Files | Font | Tokens |
|------|-------|------|--------|
| Home (`/`) | `index.html`, `style.css`, `script.js` | Plus Jakarta Sans (`@import` in `style.css`) | `--navy-dark`, `--orange-primary`, `--text-*`, `--bg-*` … |
| Residential (`/residential-construction/`) | `residential-construction/index.html`, `styles.css`, `script.js` | Plus Jakarta Sans (`<link>` in HTML) | `--navy`, `--orange`, `--gray`, `--tint` … (type scale/colors match the other subpages) |
| Commercial (`/commercial/`) | `commercial/index.html`, `css/styles.css`, `js/main.js` (see `commercial/README.md`) | Plus Jakarta Sans | `--navy`, `--orange`, `--text`, `--muted` … (mobile-first) |
| Industrial (`/industrial/`) | `industrial/index.html`, `css/styles.css`, `js/main.js` (see `industrial/README.md`) | Plus Jakarta Sans | same base as commercial |

**Shared header/footer:** all subpages copy the home page's header, mobile drawer (`#mobileNavDrawer`) and footer markup, with links rewritten to `../#section`. Their CSS is copied into each subpage stylesheet with the home tokens scoped to `.header, .mobile-nav-drawer, .nav-overlay, .footer` (the subpages reuse names like `--navy-dark` with different values). On commercial and industrial, home `.btn` rules are wrapped in `:where(.header, .mobile-nav-drawer)` because that page has its own `.btn`. A change to the home header/footer must be repeated in every subpage.

Note the filename difference: root uses `style.css`, subpage uses `styles.css`. Don't assume a token from one page exists in the other.

### Home page (`index.html` + `script.js`)

- Single long page of `<section id="...">` blocks; nav links are in-page anchors (`#services`, `#why-choose`, `#request-estimate`, …).
- `script.js` is one `DOMContentLoaded` handler containing numbered `init*` functions (countdown, read-more toggles, mobile drawer, FAQ accordion, file upload label, ZIP finder, CSI table tabs, form submit, reviews carousel, FAQ category tabs). Section numbers in comments are out of order (2B/2E appear after 9) — find blocks by name, not number.
- Many "Read More" expanders work by toggling the `hidden` class on `.card-extra-text` spans next to a `.card-expand-btn` / `.read-more-inline` button.
- The estimate form handler targets `#constructionEstimateForm`, which does not currently exist in `index.html` (only `#stateSelectorForm` does); even when present it only shows an `alert()` — no backend submission.
- Header phone number is a placeholder (`tel:+18005550199`, text "Add phone number").
- Responsive breakpoints live at the bottom of `style.css` (1600/1250/1200/991/768/576/480px).

### Residential page (`residential-construction/`)

- `script.js` is an IIFE, `"use strict"`, no dependencies. Built around a generic ARIA tabs helper (`initTablist`) that wires any `[role=tablist]` whose tabs use `aria-controls` → `[role=tabpanel]`, with arrow/Home/End keyboard support. Estimate-scope tabs, FAQ tabs and trade pills all reuse it — add new tab UIs via markup, not new JS. Cards, pill tabs (`.tablist` / `.tab`) and `<details class="acc">` accordions use the same markup and look as the other subpages; card Read More uses `data-expand` on a `.clamp-group` (summary `.clamp` + hidden `.reveal-all` detail).
- Mobile behavior keyed off `matchMedia("(max-width: 600px)")`.
- More accessibility-oriented than the home page; keep new work to that standard.

### Assets

`assets/` holds SVGs (favicon, hero illustration, US coverage map) used by the home page.
