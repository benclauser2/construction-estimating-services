# Cost to Build a House in Alaska — blog page

Built from the content brief "Cost to Build a House in Alaska" (HSD content sprint, September 2026), with the same layout and components as the Alabama post (shell copied from `blog/cost-to-build-a-house-in-alabama/`). Lives in `blog/`, so links to the rest of the site start `../../`.
Plain HTML, CSS and JavaScript. No build step and no dependencies.

## Structure

```
index.html            Page markup (all copy from the brief lives here)
css/styles.css        Same stylesheet as the Alabama post
js/main.js            Interactions (same as the Alabama post)
```

## Sections

1. Hero: "Blog · Alaska cost guide" eyebrow, intro (second paragraph behind Read More), two buttons, and the navy card (house on pilings above permafrost; about $650,000 for 2,000 sq ft, $250–$500 per sq ft).
2. Trust logos and reviews (shared with the other pages).
3. Average cost: lead + 2 rate tiles ($400,000–$1,000,000 statewide; about $650,000 for 2,000 sq ft at $325).
4. How to estimate: 9 steps, the information-needed question with 8 cards, accordion (estimating without plans).
5. Estimating services: lead, the estimate-contents question with 7 cards and a closing line, accordion (sitework and subcontractor costs).
6. Cost calculator: lead, rate tile ($250–$400 base figure), accordion (final building cost).
7. Cost per square foot: lead, 2 rate tiles, the factors question with 7 cards, accordion (land costs).
8. 3,000 sq ft homes: lead, rate tile ($750,000–$1,500,000), accordion (fixed cost).
9. Trade-by-trade costs: 12 cards (bullet summary shows; Read More reveals the numbered paragraph).
10. Cost factors: 4 tabs (main factors, materials and labor, lot and location, home design), each follow-up question in an accordion.
11. Additional costs: 7 cards, then the closing "What Determines the Final Cost" question.

## Notes

- Navigation: second item in the "Blog" dropdown and the drawer's Blog group.
- Anchor texts (yellow in the brief):
  - "Construction Estimating Services" links to the home page.
  - "Residential Construction Estimate" links to `../../residential-construction/index.html`.
  - Trade anchors link to existing pages where one exists: Plumbing, Roofing, Painting.
  - Structural Steel, Concrete, Masonry, Electrical, HVAC, Mechanical, Drywall, Sitework and Earthwork use `href="#"` until real URLs exist.
- Bracketed figures in the brief (including "$[250] to $[400]") are shown without brackets.
- The cost-per-square-foot "Labor" bullet has a strikethrough in the brief ("~~availability of skilled trades shift the labor portion of~~"). Applying the deletion leaves "Regional wage differences and the per-square-foot figure", which is not a sentence, so the original wording is kept. The writer should supply the intended edit.
