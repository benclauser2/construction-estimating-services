# General Contractors: Role and Responsibilities — static page

Built from the content brief "General Contractors: Role and Responsibilities" (HSD content sprint, September 2026), using the components of the other subpages (shell copied from `landscaping/`).
Plain HTML, CSS and JavaScript. No build step and no dependencies.

## Structure

```
index.html            Page markup (all copy from the brief lives here)
css/styles.css        Shared subpage styles; page-only rules at the end ("General contractors page additions")
js/main.js            Interactions (same as landscaping/js/main.js)
```

## Sections

1. Hero: intro (second paragraph behind Read More), two buttons, and the navy coordination card (GC at the center of owner, architect, subs, suppliers, permits, job site).
2. Trust logos and reviews (shared with the other pages).
3. What is a general contractor: lead + accordion (duties during construction, oversight of every stage).
4. Main responsibilities: 7 cards (summary shows; Read More reveals the numbered paragraph) + accordion.
5. Types of contractors: 5 cards + accordion (projects that require a building GC).
6. Benefits: 5 label + description cards + accordion.
7. General contractor vs subcontractor: lead, comparison table (scrolls sideways on small screens), accordion.
8. Licensing and bidding: 2 tabs.
9. About general contractors: 2 tabs (choosing a contractor, project planning).
10. Project coordination: 2 tabs (construction schedules, project changes).

## Notes

- Anchor texts (yellow in the brief): "Quantity Takeoff Services", "Manage Subcontractors" and "Bid Estimating Services" use `href="#"` until real URLs exist.
- The brief ends with a leftover writer note ("That covers every heading in the brief. Send over any section you want revised…"). It is not page copy and was left out.
- Copy is used as written, including the brief's "plus" in place of "and" in the licensing, bidding and planning sections; the writer may want to revise it.
