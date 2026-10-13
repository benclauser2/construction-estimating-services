# Cost to Build a House in Delaware — blog page

Built from the content brief "Cost to Build a House in Delaware" (HSD content sprint, September 2026), with the same layout and components as the other blog posts (shell copied from `blog/cost-to-build-a-house-in-arkansas/`). Lives in `blog/`, so links to the rest of the site start `../../`.
Plain HTML, CSS and JavaScript. No build step and no dependencies.

## Sections

1. Hero: "Blog · Delaware cost guide" eyebrow, intro (second paragraph behind Read More), two buttons, and the navy house card (builder-grade $200–$300 and custom $300–$500 per sq ft).
2. Trust logos and reviews (shared with the other pages).
3. Average cost: lead + 2 tiles (2,000 sq ft builder-grade $400,000–$600,000; custom $600,000–$1,000,000).
4. How to estimate: 8 steps, the information-needed question with 8 cards, accordion (estimating without plans).
5. Estimating services: lead, the estimate-contents question with 8 cards, accordion (sitework and subcontractor costs).
6. Cost calculator: lead, accordion (final building cost).
7. Cost per square foot: lead, 3 tiles (builder-grade $200–$300; custom $300–$500; 2,000 sq ft at $200 = $400,000), the factors question with 7 cards, accordion (land costs).
8. 3,000 sq ft homes: lead, 2 tiles ($415,957–$766,080; mid-range ≈ $562,590 at $188/sq ft), second paragraph as `.after-note`, accordion (fixed cost).
9. Trade-by-trade costs: 12 cards (bullet summary shows; Read More reveals the numbered paragraph).
10. Cost factors: 4 tabs (main factors, materials and labor, lot and location, home design), each follow-up question in an accordion.
11. Additional costs: 7 cards, then the closing "What Determines the Final Cost" question.

## Notes

- Navigation: seventh item in the "Blog" dropdown and the drawer's Blog group (posts are alphabetical by state).
- Anchor texts (yellow in the brief):
  - "Construction Estimating Services" links to the home page.
  - "Residential Construction Estimate" links to `../../residential-construction/index.html`.
  - Trade anchors link to existing pages where one exists: Plumbing, Roofing, Painting.
  - Structural Steel, Concrete, Masonry, Electrical, HVAC, Mechanical, Drywall, Sitework and Earthwork use `href="#"` until real URLs exist.
- Bracketed figures in the brief are shown without brackets.
- Figures to confirm with the writer: the 3,000 sq ft range ($415,957–$766,080, about $139–$255 per sq ft) and the $188 mid-range rate come from a different source than the page's $200–$300 builder-grade and $197 mid-range figures, so the numbers don't line up with each other.
