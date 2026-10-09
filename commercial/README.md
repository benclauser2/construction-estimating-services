# Commercial Construction Estimating Costs — static page

Built from the Figma file (Commercial page: desktop 1440, tablet 768, mobile 375).
Plain HTML, CSS and JavaScript. No build step and no dependencies.

## Structure

```
index.html            Page markup (all copy from the brief lives here)
css/styles.css        Styles, mobile-first, tokens in :root
js/main.js            Interactions (vanilla JS, loaded with defer)
assets/logos/*.svg    Trust logos exported from Figma
```

Open `index.html` directly, or serve the folder (for example `npx serve .`).

## Breakpoints

| Width        | Layout                                                        |
|--------------|---------------------------------------------------------------|
| < 768px      | Mobile: single column, stacked cards, logo marquee            |
| 768–1199px   | Tablet: 2-column grids, logo marquee                          |
| ≥ 1200px     | Desktop: 3/4-column grids, static logo row                    |
| > 1250px     | Full header nav (below this, the menu button opens a drawer)  |

The header, mobile drawer and footer are copied from the home page (`../index.html`, `../style.css`)
and use its desktop-first breakpoints. Keep them in sync with the home page.

## Interactions (js/main.js)

- **Read More**: any `button[data-read-more]` expands the `.clamp` text right before it.
  `data-reveal="id"` also shows a hidden element (hero paragraph 2). The button hides itself when the text isn't clamped.
- **Tabs**: any `[data-tabs]` wrapper with a `role="tablist"`. Follows the WAI-ARIA tabs pattern (arrow keys, Home and End keys, roving tabindex).
- **Tooltips**: any element with `data-tooltip="…"`. One shared floating tooltip that opens on hover or focus, toggles on tap, and closes with Escape, on scroll or on an outside click.
- **Trade carousel**: arrow buttons scroll the pill row (`[data-carousel]`).
- **FAQ accordion**: native `<details>`/`<summary>`, so it works without JS.
- **Logo marquee**: CSS-only. It pauses on hover or focus and switches off for `prefers-reduced-motion`.
- **Calculator form**: validates the selects and dispatches a `calculator:submit` event with the values. Connect it to your backend there.

## Text clamp utilities

`.clamp` plus `.lines-2` to `.lines-6` sets the number of visible lines.
`.clamp-md` clamps only below 1200px (5 lines on mobile, 4 on tablet). It's used for the tab panel paragraphs.

## Notes

- The header phone ("Add phone number") is a placeholder carried over from the reference site.
- Links marked `href="#"` (anchor-text phrases and legal links) need real URLs.
- Calculator select options are placeholders until the real inputs are defined.
