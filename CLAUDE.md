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

## Architecture

Two independent pages, each with its **own** stylesheet, script, and design tokens. They do not share CSS or JS.

| Page | Files | Font | Tokens |
|------|-------|------|--------|
| Home (`/`) | `index.html`, `style.css`, `script.js` | Plus Jakarta Sans (`@import` in `style.css`) | `--navy-dark`, `--orange-primary`, `--text-*`, `--bg-*` … |
| Residential (`/residential-construction/`) | `residential-construction/index.html`, `styles.css`, `script.js` | Inter (`<link>` in HTML) | `--navy`, `--orange`, `--gray`, `--tint` … (from Figma "Reference" page) |

Note the filename difference: root uses `style.css`, subpage uses `styles.css`. Don't assume a token from one page exists in the other.

### Home page (`index.html` + `script.js`)

- Single long page of `<section id="...">` blocks; nav links are in-page anchors (`#services`, `#why-choose`, `#request-estimate`, …).
- `script.js` is one `DOMContentLoaded` handler containing numbered `init*` functions (countdown, read-more toggles, mobile drawer, FAQ accordion, file upload label, ZIP finder, CSI table tabs, form submit, reviews carousel, FAQ category tabs). Section numbers in comments are out of order (2B/2E appear after 9) — find blocks by name, not number.
- Many "Read More" expanders work by toggling the `hidden` class on `.card-extra-text` spans next to a `.card-expand-btn` / `.read-more-inline` button.
- The estimate form handler targets `#constructionEstimateForm`, which does not currently exist in `index.html` (only `#stateSelectorForm` does); even when present it only shows an `alert()` — no backend submission.
- Header phone number is a placeholder (`tel:+18005550199`, text "Add phone number").
- Responsive breakpoints live at the bottom of `style.css` (1600/1250/1200/991/768/576/480px).

### Residential page (`residential-construction/`)

- `script.js` is an IIFE, `"use strict"`, no dependencies. Built around a generic ARIA tabs helper (`initTablist`) that wires any `[role=tablist]` whose tabs use `aria-controls` → `[role=tabpanel]`, with arrow/Home/End keyboard support. Selectable cards, FAQ tabs and trade pills all reuse it — add new tab UIs via markup, not new JS.
- Mobile behavior keyed off `matchMedia("(max-width: 600px)")`.
- More accessibility-oriented than the home page; keep new work to that standard.

### Assets

`assets/` holds SVGs (favicon, hero illustration, US coverage map) used by the home page.
