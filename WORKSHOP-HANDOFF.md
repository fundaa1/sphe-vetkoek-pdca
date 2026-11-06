# Workshop handoff — Sphe's Vetkoeks

## Project identity

Source: https://github.com/fundaa1/sphe-vetkoek-v2 at `b424b343198273408c5bb37e42c5238640fec478` (3 July 2026). Working copy: https://github.com/fundaa1/sphe-vetkoek-pdca, branch `main`. Codex selected and completed the improvement. No work was delegated. The commissioner owns acceptance.

## Preview and ordering contract

Run `npm ci --legacy-peer-deps` and `npm run dev -- --host 127.0.0.1 --port 3025 --strictPort`. Open the printed address while the server runs. The catalogue is an illustrative preview until the business confirms menu, prices, availability, hours, delivery and payment information.

The commissioner supplied +27 83 124 5678 as the default contact. When an explicit `VITE_WHATSAPP_NUMBER` override is blank, malformed or the old example `27821234567`, all order entry points navigate to an on-page ordering notice in the same tab. The footer shows the configured business number. A configured number must use 8–15 digits in international form and start with a nonzero digit. Configuration is a syntactic check, not proof the recipient belongs to the business. Verify ownership independently before publication. If the optional display number does not match the configured digits, the configured digits are shown instead. Vite environment changes require a restart or rebuild.

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

## Mixed-order improvement cycle

- Plan: allow visitors to prepare a mixed order and see an estimated total.
- Do: add per-item quantity controls, a summary, clear action and a draft link that uses the existing WhatsApp destination guard.
- Check: production build and TypeScript check passed. In the browser, two plain and one polony produced R33; removing one plain produced R23, and clearing returned to the empty state. A mixed-message unit check verifies both lines and total. The actual WhatsApp handoff was not exercised because the previous preview had no configured business number. Commissioner acceptance is pending.
- Act: confirm menu, prices, delivery charges and business contact before accepting real orders.
- Standardise: quantities range from 0 to 99 per item, exist only while the page is open and are cleared on reload. The estimate excludes delivery and is subject to business confirmation. The visitor must review and send any WhatsApp message themselves.
- Train: add items with the plus controls, adjust with minus, review the summary and clear when finished.
- Enforce: run tests, production build, TypeScript check and a browser walkthrough before acceptance.
- Improve: consider persistence, confirmed prices and delivery calculations after the operating model is agreed.
- Work: Codex implemented and checked the change. No work was delegated.

## WhatsApp contact update cycle

- Plan: connect the seven annotated ordering controls to the number supplied by the commissioner and clarify the ordering steps.
- Do: use +27 83 124 5678 as the default business contact, retain validation for explicit overrides and the old example, and explain selecting, reviewing and sending a draft.
- Check: nine automated tests, production build, TypeScript and whitespace checks passed. Browser inspection confirmed the hero and six quick-order links target the supplied number with their respective item details; a mixed order displayed both lines and R23 in its link. No message was sent and actual WhatsApp account registration or delivery was not checked.
- Act: commissioner can review the draft and confirm business prices, delivery fees, hours and fulfilment details.
- Standardise: the recipient is public site configuration. An explicit invalid or blank override routes to the ordering notice. A syntactically valid number does not establish account ownership.
- Train: choose an item or quantities, open the prepared draft, add delivery details, review and choose whether to send.
- Enforce: verify the recipient and each entry point after contact configuration changes, without sending test messages unless authorised.
- Improve: confirm pricing and fulfilment details before public deployment. Existing delivery and testimonial claims remain unverified.
- Work: Codex implemented and checked the change. No work was delegated.
## Delivery details improvement cycle

- Plan: let visitors add delivery details to a mixed order before reviewing the WhatsApp draft.
- Do: add optional area or address and preferred-time fields to the mixed-order summary and include them in the encoded draft.
- Check: browser inspection confirmed sample values and the estimated total appear in the generated link, and Clear order cleared the sample. The order helper test covers special characters and blank defaults. The real WhatsApp handoff was not exercised and no message was sent.
- Act: commissioner reviews the flow and confirms delivery terms and prices.
- Standardise: fields and quantities exist only in page state and are cleared together. Entered details are included in the WhatsApp link when the visitor opens it; the visitor reviews and sends the message in WhatsApp. A blank field retains a prompt for completion.
- Train: select products, optionally fill in area and time, then choose Review in WhatsApp.
- Enforce: verify encoding, blank values, clear behavior, recipient and browser flow before acceptance.
- Improve: confirm actual fulfilment and delivery charges before public launch.
- Work: Codex implemented and checked this change. No work was delegated.

## Ordering-information clarification cycle

- Plan: make clear which ordering and fulfilment details still need confirmation.
- Do: replace unverified availability, delivery-time, delivery-area, hours and payment assertions in the menu, hero, delivery section and footer with prompts to confirm them via WhatsApp.
- Check: production build, TypeScript, ten automated tests and whitespace checks passed. Browser inspection confirmed the updated labels and the configured WhatsApp links. No message was sent.
- Act: the commissioner can supply confirmed hours, areas, timing and payment methods for a future update.
- Standardise: menu prices remain estimates and availability is confirmed with the business. Existing source details remain in Git history, but were not verified as current.
- Train: select an order and use the WhatsApp draft to ask about fulfilment and payment.
- Enforce: review business-provided details before presenting them as current facts.
- Improve: confirm remaining inherited product descriptions, claims, testimonials and pricing before public launch.
- Work: Codex implemented and verified this change. No work was delegated; commissioner acceptance is pending.

## Mobile navigation cycle

- Plan: provide access to the Menu, How It Works and Story sections on small screens.
- Do: add a labelled mobile menu with an expanded state, section links and Escape dismissal.
- Check: production build, TypeScript, ten automated tests and whitespace checks passed. In the browser, the menu opened, Escape closed it and returned focus to the control, and How It Works navigated and closed the menu. Commissioner acceptance remains pending.
- Act: invite commissioner review on a phone.
- Standardise: desktop links remain available at the existing breakpoint; the mobile menu closes when a link is selected.
- Train: choose the menu icon on a narrow screen, then select a section or press Escape.
- Enforce: check keyboard and touch navigation when modifying the header.
- Improve: add a clear way to reach the mixed-order summary after selecting items on a phone. Confirm actual business details before public launch.
- Work: Codex implemented and checked the change. No work was delegated.
