# DARVIL — standalone website

Separate Vercel project built from this monorepo's `darvil-site/` root. Static HTML/CSS/JS with zero dependencies.

Domain: https://darvil.wahabifils.com

Sections: home, 6 supplier profiles under /fournisseurs/, services, method, about, inquiry form.

Source of supplier data: manual public subset of existing WAHABI GROUP Notion records. Not a live sync or commercial validation. Do not publish private phone numbers, emails, order values, supplier quotes or internal workspace links.

The inquiry form composes a local mailto message only. It does not send or store data.

Editorial shipping photo illustration is not an operational photograph. Logo & image blob are duplicated by reference within the Git repository.

Content and publication approval required before treating this as an active commercial offer.

## Transport directory & lean catalog (12 November 2026)

- New `/transitaires/` directory plus three detail pages, sourced from WAHABI GROUP Notion ENTERPRISE: Mame Cargo (air, Guangzhou–Conakry), Media7 Cargo (sea, Foshan–Conakry) and JFK Cargo (inactive, location/mode not established).
- Detail pages explicitly distinguish confirmed *internal Notion status* from public operational verification. Do not publish personal staff contact numbers or undisclosed rates.
- Supplier and transport pages show facts / searchable cards with minimal narrative; the home page carries the brand/story.
- **Static** public snapshot. Contact links are a client-side email draft, no order-taking or live availability.

## Official brand marks — 12 November 2026

Logo URLs taken from company-owned sites, used only as nominative identifiers. Logos are displayed on relevant supplier cards and detail pages; not endorsements or partnership validation.

- HANBON: https://www.hanbontools.com/aboutus.html — https://iororwxhlmmolq5m-static.micyjz.com/cloud/poBpnKklloSRqlpkiqnkkp/logo.png (source-owned image)
- HBAPOS / HBA Intelligent Technology: https://hbapos.com/ — https://hbapos.com/wp-content/uploads/2026/03/hba-logo.png (source-owned image)
- Million Plastics / Linyi Million Plastic Products: https://milliontarpaulin.com/ — https://ecdn6.globalso.com/upload/p/997/image_other/2026-02/logo1.png (source-owned image; company identity also corroborated by industry directory)

Media7 Cargo: Media7plus visual mark (white stylized 7 in orange circle) shown on the group store https://media7engros.com/. Founder confirmed Media7 Cargo and Media7plus belong to the same group on 2026-11-13. Asset displayed by reference: https://cdn3.take.app/media/cmbat1fc9000604js4wmaegti.jpeg?width=640. Treat as group identity, not a cargo-specific certification or proof of delivery performance. The old media7cargo.com site currently renders Not Found; the carrier profile links to the group's retail store with an accurate label.

Unconfirmed/not found: Zhongshan Dashunda, Linyi Xinda, Guangzhou Rising, Mame Cargo, JFK Cargo. Keep their initials instead of substituting an unrelated brand or an unverified third-party logo. No logos found in the searched work/personal Drive image filenames or linked Notion image fields. A historical JFK poster exists in Notion but contains personal phone numbers and is not appropriate to publish unedited.

Implementation: direct official-site assets (not self-hosted yet), lazy loaded with a fallback monogram if the source URL stops working. For robust long-term hosting, request a high-quality logo file from the supplier or secure a verified source file suitable for storing locally.
