# Cost to Build a House in Connecticut — blog page

Built from the content brief "Cost to Build a House in Connecticut" (HSD content sprint, September 2026), with the same layout and components as the other blog posts (shell copied from `blog/cost-to-build-a-house-in-arkansas/`). Lives in `blog/`, so links to the rest of the site start `../../`.
Plain HTML, CSS and JavaScript. No build step and no dependencies.

## Sections

1. Hero: "Blog · Connecticut cost guide" eyebrow, intro (second paragraph behind Read More), two buttons, and the navy house card (standard $172–$240 and custom up to $600+ per sq ft).
2. Trust logos and reviews (shared with the other pages).
3. Average cost: lead, 3 rate tiles (basic $200–$275; mid-range custom $275–$400; high-end custom $400–$600+ per sq ft), follow-up paragraph as `.after-note`.
4. How to estimate: 8 steps, the information-needed question with 7 cards, accordion (estimating without plans).
5. Estimating services: lead, the estimate-contents question with 8 cards, closing sentence as `.after-note`, accordion (sitework and subcontractor costs).
6. Cost calculator: lead, second paragraph as `.after-note`, accordion (final building cost).
7. Cost per square foot: lead, 3 rate tiles ($195–$275 standard; $172–$400+ reported range; 2,000 sq ft at $240 = $480,000), second paragraph as `.after-note`, the factors question with 7 cards, accordion (land costs).
8. 3,000 sq ft homes: lead, 2 tiles ($585,000–$825,000; $195–$275 per sq ft), second paragraph as `.after-note`, accordion (fixed cost).
9. Trade-by-trade costs: 12 cards (bullet summary shows; Read More reveals the numbered paragraph).
10. Cost factors: 4 tabs (main factors, materials and labor, lot and location, home design). Two-paragraph answers use `.clamp-group` + `.reveal-all` so Read More reveals the second paragraph; each follow-up question in an accordion.
11. Additional costs: 7 cards, then the closing "What Determines the Final Cost" question (two paragraphs).

## Notes

- Navigation: sixth item in the "Blog" dropdown and the drawer's Blog group (posts are alphabetical by state).
- Anchor texts (yellow in the brief):
  - "Construction Estimating Services" links to the home page.
  - "Residential Construction Estimate" links to `../../residential-construction/index.html`.
  - Trade anchors (lowercase in this brief, kept as written) link to existing pages where one exists: Plumbing, Roofing, Painting.
  - Structural Steel, Concrete, Masonry, Electrical, HVAC, Mechanical, Drywall, Sitework and Earthwork use `href="#"` until real URLs exist.
- Bracketed figures in the brief are shown without brackets.
- Brief fix: "Finish level affects the budget by selecting basic, standard, premium, or custom materials" reworded to "through the selection of basic, standard, premium, or custom materials".
