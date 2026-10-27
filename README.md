# Social Health Initiative — 2026 Donation Website

**Connection Changes Everything**

Standalone fundraising website presenting social health as a third pillar alongside physical and mental health. Built with static HTML, CSS, and JavaScript, without runtime dependencies or a backend.

## Current state

Website 2.0 is implemented and locally reviewed. **Not deployed. Donations are disabled.** The approved domain is `give.socialhealthmarketplace.com`; DNS and hosting remain pending. The $250,000 fundraising goal and allocation are proposed, pending board approval.

Read [HANDOFF.md](HANDOFF.md) first when continuing this project from another platform. It records completed work, validation, approval status, media needs, and launch blockers.

## Local development

Node.js 18+ required. No package installation needed.

```sh
npm run build
npm run check
npm run dev
```

Open http://127.0.0.1:4173/. Rebuild after source changes; the preview serves `dist/`.

## Source map

- `index.html`: page content and static fallback.
- `styles.css`: responsive editorial design.
- `app.js`: navigation, configured content, sharing, and donation state.
- `config.js`: public settings, proposed budget, and approval flags. Never add credentials.
- `rules.js`: donation URL, analytics, and sharing guards.
- `assets/`: existing original graphics; approved photography/video still pending.
- `scripts/`: dependency-free build, checks, and local server.

## Working across platforms

Pull the latest `main` before editing. Read the handoff and preserve existing changes. Use branches for parallel changes and review before merging. Update HANDOFF.md with completed work and remaining blockers, then run the build and checks before committing. Do not force-push or overwrite another platform's work.

This repository is public: do not commit donor information, credentials, private documents, or unapproved personal stories. Configuration is shipped to the browser and must contain public values only.

## Approval boundaries

Do not deploy or activate PayPal without owner approval. The PayPal page is saved/unpublished, and no verified donor URL has been provided. Keep unverified checkout inactive. Do not fabricate statistics, testimonials, biography, impact results, tax claims, or links. Use approved/licensed media or clearly labeled placeholders.

## Restore checkpoint

The tag `pre-website-2.0` preserves the version before Website 2.0. See HANDOFF.md for a safe extraction method. Generated `dist/` is ignored; rebuild it from source.
