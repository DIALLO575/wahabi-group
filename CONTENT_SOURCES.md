# Public content provenance — WAHABI GROUP

Verified on 9 November 2026 against internal Notion and Drive.

- WAHABI GROUP corporate identity and palette: Notion https://app.notion.com/p/40763a5022e481aca3e5d99ff4d35529. Approved group emblem extracted from Notion artwork `WAHABI_GROUP_Metallic_Corporate_Emblem.png`; header uses a cropped version of the exact original image and group page includes a complete version, both optimized to WEBP. The original Notion image is the source of truth; vector master still needs final production preparation.
- WAHABI & FILS active commercial organization: https://app.notion.com/p/3f763a5022e48183a756f466ba1da57f ; actual Drive photo of company logo explicitly states Quincaillerie — Électricité — Plomberie. Image: Drive file 1AoqEMG7rJfgOobVOf7Qqr35Sc5RqiEM1.
- DARVIL project in preparation, not an incorporated independent company: https://app.notion.com/p/41363a5022e481a5a0f4decab16c0219 ; logo: Drive file 19EEEFdigwI5nqPrSy0aAXQRgz7cU-AzN.
- Public email contact@wahabifils.com: https://app.notion.com/p/40e63a5022e481e79a00cc2b68836ced ; DNS records observed but mailbox deliverability not guaranteed.
- Historical domain wahabifils.com is used for mail; this repository does not claim ownership of wahabigroup.com.
- Editorial photographs are sourced from Unsplash, optimized as WebP and stored locally under `assets/media/` in the public repository rather than fetched live from Unsplash. Original photo IDs: `photo-1486406146926-c627a92ad1ab`, `photo-1497366811353-6870744d04b2`, `photo-1586528116311-ad8dd3c8310d`, `photo-1494412519320-aa613dfb7738` (source: unsplash.com; Unsplash License). **They are not photos of WAHABI premises, clients, staff or documented operations.** Replace with owned, approved photography when available.
- No invented revenue, team size, addresses, offices, clients, partners, or achievements.

Content review required before further public claims, activation of product commerce, or publication of legal status.

## Performance treatment — 9 November 2026

- Store and serve WebP background photographs and optimized copies of approved activity logos from the Git repository on Vercel; the original PNGs remain in `assets/` as source backups.
- Desktop hero `hero-v1.webp` 115,234 B; mobile cropped hero `hero-mobile-v1.webp` 55,416 B; supporting backgrounds `about-v1.webp`, `trade-v1.webp` and `shipping-v1.webp` total 246,050 B. The vision background reuses the hero asset.
- Converted logos `logo-darvil-v1.webp` 11,396 B and `logo-wahabi-fils-v1.webp` 21,716 B.
- Versioned local image files use immutable cache-control for improved return visits; homepage preloads only the hero matching the screen size.
