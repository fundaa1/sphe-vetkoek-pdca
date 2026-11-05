# Workshop handoff — Sphe's Vetkoeks

## Project identity

Source: https://github.com/fundaa1/sphe-vetkoek-v2 at `b424b343198273408c5bb37e42c5238640fec478` (3 July 2026). Working copy: https://github.com/fundaa1/sphe-vetkoek-pdca, branch `main`. Codex selected and completed the improvement. No work was delegated. The commissioner owns acceptance.

## Preview and ordering contract

Run `npm ci --legacy-peer-deps` and `npm run dev -- --host 127.0.0.1 --port 3025 --strictPort`. Open the printed address while the server runs. The catalogue is an illustrative preview until the business confirms menu, prices, availability, hours, delivery and payment information.

When `VITE_WHATSAPP_NUMBER` is unset, malformed or the supplied example `27821234567`, all order entry points navigate to an on-page ordering notice in the same tab. No example phone number is shown. A configured number must use 8–15 digits in international form and start with a nonzero digit. Configuration is a syntactic check, not proof the recipient belongs to the business. Verify ownership independently before publication. If the optional display number does not match the configured digits, the configured digits are shown instead. Vite environment changes require a restart or rebuild.

When configured, an order link opens WhatsApp with an encoded draft and calculated estimated total. Opening the link does not send a message; the visitor controls submission in WhatsApp. No order is sent by this site itself.

## PDCA-STEI cycle

- Plan: prevent sample ordering links from opening WhatsApp with an unconfirmed example destination.
- Do: centralise number validation, route unavailable entry points to a clear notice, remove the fallback display number, and preserve configured draft creation.
- Check: seven automated tests passed, including unset, example, malformed and configured numbers, encoded item totals, and mismatched display numbers. Production build and TypeScript check passed. Browser inspection showed the notice and the menu Order link navigating to it. Configured WhatsApp was tested as generated data, not by sending a message. Commissioner acceptance is pending.
- Act: confirm the real business number and operating details before enabling orders.
- Standardise: use the shared order helper and availability flag for every future order entry point. Never use the example number as a fallback.
- Train: open the preview without configuration, choose Order and read the notice. For a controlled test, configure an authorised number locally and verify the draft recipient and contents without sending.
- Enforce: run `npm test`, `npm run build`, `npx tsc --noEmit -p tsconfig.app.json`, `git diff --check`, and the relevant browser walkthrough before acceptance.
- Improve: confirm actual menu, prices, availability, delivery, hours, payment options, testimonials, image rights and contact details before considering publication.

## Maintenance and reuse

Default `npm ci` failed because the inherited lockfile lacks peer packages under the installed npm version. `npm ci --legacy-peer-deps` succeeded; resolve and validate the lockfile separately before changing install policy. Installation emitted install-script warnings and the build reported old Browserslist data. No live site was deployed. Inspect source licensing and image rights before reuse; no license grant was verified in this work.
