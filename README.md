# Intense Nut

Single-page site for Intense Nut, a small-batch roasted nut company in Seattle, WA.
Three flavors, each with its own palette, hero and copy. Picking one in the nav
repaints the whole page.

## Running it

It's static. Any file server will do:

    python3 -m http.server 8000

Then open http://localhost:8000.

## Share previews

The Open Graph tags point at `https://intensenut.com`, so previews only resolve
once that domain serves the site over HTTPS. Scrapers cache aggressively: if a
link is shared before the certificate is live, the failed fetch can stick. Force
a refresh with Facebook's Sharing Debugger and LinkedIn's Post Inspector.

## Deploying

Upload the repo root as-is to any static host (Netlify, Cloudflare Pages, S3,
GitHub Pages). No build step, no dependencies to install. `assets/originals/` is
gitignored and doesn't need to ship.

## Files

| File | What it does |
| --- | --- |
| `index.html` | All three flavor cards. Only the active one is visible. |
| `styles.css` | Layout and type. Flavor palettes are CSS custom properties on `[data-flavor]`, which matches both `<body>` and each card. `--band` is that flavor's label-rule graphic. |
| `app.js` | Flavor switcher, ~20 lines. |
| `icons.js` | `<in-icon>` custom element. Draws every ingredient icon, the round badge and the social marks as inline SVG. |
| `assets/` | Hero photos as WebP, 600px wide, plus the 1200x630 `social-card.jpg` used for `og:image`. Full-size originals live in `assets/originals/` (gitignored). |

### Adding a flavor

Copy a `<article class="card">` block, change its `data-flavor`, add a matching
palette block at the top of `styles.css` (including a `--band` gradient for the
label rule) and a `<button class="flavor-tab">` in the nav. Nothing else knows
about the flavor list.

### Replacing a hero photo

Drop the new full-size file in `assets/originals/`, then crop it to its alpha
bounding box, resize to 600px wide, and save as WebP at quality 85. Update the
`width`/`height` on the `<img>` to match, since the crop changes the aspect
ratio. `social-card.jpg` is the cashew hero flattened onto its field colour at
1200x630, because a transparent image used as `og:image` renders on black in
some clients.

### Icons

`<in-icon name="chipotle" size="44" accent="#E0562A">`. Names are the keys of
`ICONS` in `icons.js`, plus `badge`. The badge takes a `label`, set
around the top of its circumference, and a `heat` of 1 to 3. It always draws three
flames in the middle and fills that many, leaving the rest as outlines so the
scale reads without comparing flavors. Icons sit next to visible text labels, so
they're marked `aria-hidden`; the badge's heat rating is real product info, so
each one is paired with an `.sr-only` span stating it.

## Not done yet

**Checkout isn't wired.** The ADD TO CART buttons carry a `data-sku` and currently
only log it. Point the handler at the bottom of `app.js` at whatever store you end
up using. The nav's cart control is `disabled` and its count is hardcoded to 0.
Drop the attribute and update `.cart-count` once there's a real cart behind it.

The instagram.com and facebook.com links are guesses at the real handles. Check
them before launch.
