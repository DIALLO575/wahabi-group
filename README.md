# WAHABI GROUP — Institutional website

Premium editorial static site, in French, based on the first approved corporate mockup. Uses lightweight HTML/CSS/JavaScript and deploys on Vercel without a build step.

## Pages

- / — institutional home
- /groupe/ — identity, vision and principles
- /activites/ — actual activity and project status
- /activites/wahabi-fils/ — WAHABI & FILS (active commerce)
- /activites/darvil/ — DARVIL (in preparation)
- /secteurs/ — active and exploratory sectors
- /actualites/ — only documented updates
- /contact/ — verified corporate email

## Content and media safeguards

See CONTENT_SOURCES.md. Images are editorial illustrative photography, **not** representations of company property. The group header emblem is cropped directly from the approved WAHABI GROUP artwork in Notion, and the group page shows the complete image. The other business logos come from Drive Work. Other business logos are authentic assets from Drive Work.

## Deployment

Static project, root directory '.', no install/build command. Vercel Git integration to DIALLO575/wahabi-group.

## Quality

Test mobile menu, keyboard Escape, homepage links, activity status, email links, console errors and 320/375/768/1440px viewports. Avoid publishing new contact/social links without verifying ownership.

## Image performance

All photographic backgrounds are versioned WebP files in `assets/media/`, served by Vercel with long-lived immutable cache headers. The hero preloads a small portrait crop on phones and a 1500px landscape variant on desktop. Company logos retain original PNG backups while pages show lightweight WebP versions. The photographs are illustrative, not depictions of WAHABI offices or operations. On replacing an asset, increment its filename version to avoid stale cache.
