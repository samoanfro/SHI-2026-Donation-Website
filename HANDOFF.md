# SHI 2026 Donation Campaign — Phase 1 handoff

Completed October 26, 2026. Local preview only. No deployment, domain changes, or live donation activation performed.

## Delivered

A dependency-free, standalone HTML/CSS/JavaScript website with the original six main sections, donor FAQs, and a full footer: campaign homepage, Why Social Health, Our Story, Use of Funds, Connection Challenge, and Donate. The design uses warm cream, deep teal, coral, system fonts, an original abstract SVG illustration, an original favicon, and a 1200 × 630 PNG sharing image. No third-party stock photography or font requests are used. David’s portrait is explicitly a placeholder.

Responsive navigation includes a mobile menu, Escape dismissal, in-page links, visible focus indicators, a skip link, reduced-motion support, and semantic headings. Story and privacy disclosures are keyboard-accessible native details elements.

The budget is validated against $250,000 and 100%. It is expressly proposed and pending board approval; no progress bar or funded-results claims are made. All narrative is draft campaign copy based on the supplied brief, not independent fact verification.

Donation handling fails closed: no checkout href exists in the shipped preview. The official link, account verification, and activation approval must all be configured before it becomes actionable. Only HTTPS www.paypal.com/donate or /donate/ checkout paths are accepted; management/editor paths are rejected; no payment API, credentials, custom recurring billing, or donor storage exists. Monthly giving stays disabled until account support is confirmed. When enabled, the visitor must make the final frequency selection on PayPal; the website does not rewrite the owner’s hosted URL or promise a preset frequency.

Sharing uses native share or clipboard with a text fallback, plus an email invitation link. It requires an approved siteUrl and siteLive true so visitors cannot accidentally share localhost or a site that is not yet live. Analytics are off; an optional cookieless Plausible-compatible script loads only when enabled with a URL, domain, and privacy disclosure.

## Files and configuration

- `index.html`: content, semantic sections, static fallback, metadata.
- `styles.css`: responsive styling and accessibility states.
- `app.js`: navigation, configured content, sharing, checkout state, optional analytics.
- `config.js`: public settings for approved site URL, proposed domain, PayPal, goal/allocation, contact, legal disclosure, official links, analytics. Never insert secrets.
- `rules.js`: shared URL and activation checks.
- `assets/`: original local illustrations and sharing image.
- `scripts/build.mjs`: validates budget and copies only website assets into `dist/`; generates metadata and indexing files.
- `scripts/check.mjs`: preview safety and functional assertions.
- `scripts/serve.mjs`: local-only preview server.

The owner approved give.socialhealthmarketplace.com on October 26, 2026. Approval is recorded in config.js (domainApproved). DNS and hosting have not been configured. siteUrl is set to the approved domain for canonical and sharing-image metadata; siteLive remains false, so public sharing stays paused. Set siteUrl to the owner-approved HTTPS origin (with a trailing slash), not a placeholder. Canonical, Open Graph URL/image, Twitter image, and sitemap use this value at build time. Preview is deliberately noindex with robots disallow; launchApproved changes indexing only. It is not a payment activation switch or access control.

## Run locally

Requires Node.js 18 or newer. No dependency installation required.

```sh
npm run build
npm run check
npm run dev
```

Open http://127.0.0.1:4173. Stop with Ctrl+C. Rebuild after editing source; the server serves `dist/`. ES modules require HTTP, so do not double-click index.html. Use the local preview server for review; it is not a public deployment.

## Verification completed

- Build passed (`npm run build`).
- Functional checks passed (`npm run check`): $250,000 / 100% totals, percentage-to-dollar consistency during build, all section/fragment targets, local asset existence, preview noindex, missing checkout link, disabled analytics, PayPal host/protocol/path validation, and activation approval gating.
- Browser review confirmed all six sections and footer render, with no reported JavaScript warnings or errors.
- Desktop, tablet, and narrow mobile browser layouts checked. Actual CSS viewport widths were 1200, 853, and 325 pixels (browser zoom affected requested viewport sizes); page width equaled viewport width at all three sizes, with no horizontal overflow.
- Mobile menu opens, Donate navigates to its section, and menu closes. Donation remains disabled with no href; monthly remains disabled. Missing-domain sharing produces an explanatory status message.
- Original illustration and mobile donation section visually reviewed. Approved photography, real PayPal flow, actual social-network preview scraping, production hosting, and analytics delivery cannot be verified without approved configuration. This is not a full assistive-technology audit.

## Unresolved launch blockers

1. Owner-provided official PayPal hosted donation URL; verify destination organization/account, currency, receipts, one-time and monthly capabilities. Obtain explicit approval before setting accountVerified and activationApproved to true.
2. Approve the proposed $250,000 goal and allocation. Keep the proposed labels until board approval. If changed, update config and corresponding static fallback copy/chart in index.html so the no-JavaScript view remains accurate.
3. Approve David’s introduction and provide verified, consented Kirsty and Quit Trip’n origin stories. Replace marked placeholders only with approved material.
4. Supply legal nonprofit disclosure, contact/privacy contact, and verified official channels. No EIN or tax-deductibility statement has been invented. Review the final privacy text for the selected hosting and optional analytics services.
5. Custom domain approved by owner: give.socialhealthmarketplace.com. Select the deployment destination and configure DNS; deployment is still pending. Set siteUrl and review generated social metadata. Supply licensed photography if desired, including David’s portrait and permissions.

## Deployment instructions — approval required

Any static host can serve `dist/`; no backend, database, account system, or serverless functions are needed. Build command: `npm run build`. Publish directory: `dist`. Serve `.js` as JavaScript and `.svg` as image/svg+xml. Configure HTTPS. Configure the proposed custom domain through the chosen host only after owner approval. Do not upload the entire project or put credentials in public configuration.

After content/legal approval and explicit deployment authorization, set launchApproved true and approved siteUrl, rebuild, and publish the output folder. Review canonical/share image URLs, navigation, privacy, mobile layout, and hosted asset delivery. A private preview should use host-level access control; robots directives alone do not make a site private.

Payment activation is a separate authorized step. Use only the exact owner-verified hosted URL; keep supportsMonthly false until verified. Review the final PayPal destination without submitting a payment. Configure analytics only if requested and after updating privacy information. The current check script intentionally asserts a disabled, noindex preview; update these specific expected-state assertions when an approved launch changes them, retaining URL guard and budget tests.

Future edits should remain small and static. Ambassador dashboards, CRM, email automation, custom billing, corporate portals, and advanced analytics are excluded from Phase 1.

## Owner update — October 26, 2026

Custom domain approved. This does not resolve the outstanding hosted donation URL, account verification, legal/content approvals, or deployment destination. Venmo is supported by PayPal nonprofit donation solutions, but availability in SHI’s specific checkout remains unverified. Obtain the official hosted donation link and inspect available payment methods before advertising Venmo support.

## Build continuation after PayPal setup review

- Owner chose to keep the PayPal donation page saved and unpublished. No public donor URL has been provided; no URL was reconstructed from the editor address.
- Screenshots show Social Health Initiative as the recipient, USD, any-amount giving, optional fee coverage, and recurring-giving controls. Venmo appears in the setup preview. This is evidence of draft configuration, not verification of a published checkout or charity status.
- Added donor FAQs covering optional challenge participation, hosted payment processing, unverified Venmo/monthly availability, proposed uses of funds, and pending tax disclosures.
- Approved domain now supplies build-time canonical and social image metadata. siteLive must remain false until DNS/HTTPS and the deployed site are checked; launchApproved and payment activation remain false.
- Checkout validation now rejects PayPal editor and management URLs. Automated tests cover this and the separation between approved-domain metadata and public sharing.
- Rebuilt and passed functional checks. Next launch inputs remain approved story/legal/contact details, hosting/DNS destination, board decision on the budget, and a published owner-verified donation link when the owner is ready.

## Homepage redesign — October 27, 2026

Presentation/content update within the existing static HTML/CSS/JS project. Existing palette, Georgia/Arial typography, navigation hooks, sharing behavior, payment configuration, and safety guards remain intact. No new dependencies or external media requests.

- Replaced the abstract hero illustration with a large, clearly labeled documentary photograph placeholder. No licensed participant photography was supplied, so no real or synthetic person is represented as an SHI participant. The original artwork file remains available but is no longer used in the hero.
- Applied the requested headline: “We're more connected than ever. So why do so many people feel alone?” Kept “Connection Changes Everything” as the campaign tagline, with a prominent Donate to SHI CTA and See Our Mission anchor.
- Expanded the explanation of social health as a third, complementary health pillar, grounded in everyday relationship skills and SHI’s stated vision. No statistics or health outcomes added.
- Created a featured David Kozlowski video area with an explicitly unavailable-video state, not a fake play control. Preserve this state until approved footage, captions, and transcript are available. Existing Kirsty and Quit Trip’n approval placeholders remain.
- Added two clearly marked participant story/photo placeholders. Neither is a testimonial; no names, quotes, or results were invented. Replace only with verified, consented participant accounts and licensed photos.
- Expanded all five budget descriptions with proposed uses and added a nearby support CTA. Updated both config.js descriptions and static HTML fallback. The goal and allocation remain proposed/pending board approval, totaling $250,000 and 100%.
- Adjusted desktop and mobile typography, spacing, media proportions, and section sequencing. Checked browser rendering at actual CSS widths of 1200px and 325px with no horizontal overflow; visually reviewed the hero and mobile video area. See Our Mission correctly navigates to #why. Browser reported no warnings/errors, and checkout remained disabled.
- `npm run build` and `npm run check` passed. No donation link, account activation, publication, or DNS changes were made.

### Media replacement notes

Hero: replace the contents of `.photo-placeholder` with a licensed documentary image of authentic everyday connection, using descriptive alt text and responsive object-fit sizing. Remove the placeholder caption only when the asset and usage permissions are approved. Avoid using a stock photo as evidence of SHI participation.

Video: replace `.video-placeholder` with an accessible approved video player, preserving #david-video and its heading; supply captions and a transcript, and do not autoplay. Story cards: replace each photo and placeholder copy together after consent and factual review. The existing social-sharing graphic remains campaign-branded; it can be refreshed with approved photography later.

## Website 2.0 — October 27, 2026

### Restore checkpoint

Before any Website 2.0 edits, initialized this previously unversioned project and committed its existing source/assets/documentation. Checkpoint commit: `e2facf1`; tag: `pre-website-2.0`. The generated `dist/` is ignored and reproducible with `npm run build`.

For a safe, separate copy of the old site without overwriting current work, run from this project:

```sh
mkdir -p checkpoint-preview
git archive pre-website-2.0 | tar -x -C checkpoint-preview
cd checkpoint-preview
npm run build
```

Use that extracted copy to inspect/restore selected files; do not use a destructive Git reset on later work.

### Final changes

- Preserved the static HTML/CSS/JS codebase, system typography, forest/cream/terracotta palette, payment guards, sharing configuration, budget values, and existing interaction hooks. No packages, paid services, backend, or integrations added.
- Added sticky navigation with the requested section labels and mobile anchor clearance.
- Replaced the hero headline and supporting copy with the exact Website 2.0 wording; added Help Build Connection and Discover Social Health CTAs. Retained a prominent documentary-photo area explicitly marked as a placeholder.
- Added a relatable problem narrative and concrete daily examples for physical, mental, and social health.
- Reworked David’s introduction into a substantial editorial section beside a portrait/video placeholder. David’s vision is based on the supplied brief. His professional experience, biography, Kirsty’s inspiration, and Quit Trip’n history remain explicitly pending verification; no credentials or quotations were invented.
- Added Learn it / Live it / Pass it on and a concise set of proposed initiatives for schools, families, first responders, and communities. These are campaign proposals, not claims of existing programs or partnerships.
- Consolidated repetitive empty participant-story cards into one clearly labeled pending-voices note.
- Strengthened the donation appeal and preserved donor-friendly explanations of every proposed budget category. $250,000 / 100% reconciles; all allocation and goal approval labels remain visible.
- Contact, legal disclosures, and social links still use existing honest placeholders; no invented contact details, EIN, tax claims, donations, or results.

### Verification and preview

`npm run build` and `npm run check` passed. Browser review confirmed Website 2.0 content is served at http://127.0.0.1:4173/. Reused the existing local server after a new launch attempt reported the port already occupied; the browser verified the current build, rather than starting another server.

Desktop (1200 CSS px), tablet (853 CSS px), and narrow mobile (325 CSS px) had no horizontal overflow. Mobile menu opens, Your Impact navigates to #funds and closes the menu, the sticky header clears the destination heading, and all fragment targets exist. Checkout still has no href and remains disabled. No live PayPal activation or deployment was performed.

### Outstanding assets and launch blockers

- Licensed/approved documentary hero photo; approved David portrait/video, captions, transcript, and biography; verified origin details and consented participant stories.
- Owner/board review of new proposed initiative language, especially first-responder scope, and approval of the proposed goal/allocation.
- Verified contact, legal/privacy disclosures, and official social links.
- Hosting/DNS setup for the already approved domain and explicit deployment authorization.
- Published, owner-verified PayPal donor URL and confirmation of available payment/recurring options when the owner decides to open giving. PayPal remains saved/unpublished per the last owner direction; accountVerified, activationApproved, siteLive, and launchApproved remain false.

## Shared GitHub repository

Owner-provided repository: https://github.com/samoanfro/SHI-2026-Donation-Website. It was empty and public when inspected. This repository is the shared source/handoff location for cross-platform work; pushing source does not deploy or activate the website. README.md provides setup, file map, collaboration conventions, and approval boundaries. The pre-Website-2.0 tag is retained for restoration. Pull current main before continuing work; do not overwrite parallel changes or commit private data.
