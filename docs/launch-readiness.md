# Redesign launch review — 5 October 2026

## Routes staying live
- `/`: redesigned homepage.
- `/about`: redesigned About page, original published company/story/mission copy in existing slots.
- `/labs`: redesigned experiments page.
- `/privacy-policy`: complete published privacy policy, dated 22 August 2026, in new legal layout.
- `/terms-of-service`: complete published Terms of Use, same date, in new legal layout.
- `/contact` and `/contact-us`: temporary redirect to `/#contact`, opening the existing redesigned contact modal.
- `/legal/privacy-policy` and `/legal/terms-of-service`: redirect to new legal URLs.

## Temporarily redirected to home (307)
All `/services/*`, `/v2/*` except aliases to finished pages, `/team`, `/guide/*`, `/playbooks/*`, `/organizations/*`, `/courses/*`, `/blog/*`, `/intelligence/*`, `/community/*`, `/brand/*`, `/ai-archetype/*`, `/events/*`, `/workshops/*`. Unknown page routes also return home via the not-found component. APIs and static assets are not included in these configured redirects.
Service actions in the header/footer and service cards return to `/#top`. Article/resource links return home. External learning, product, and Weekends of AI destinations remain external.

## Content sources (text only)
- https://www.attentionfactory.io/about
- https://www.attentionfactory.io/contact
- https://www.attentionfactory.io/legal/privacy-policy
- https://www.attentionfactory.io/legal/terms-of-service
No old-site styling, page components, or scripts were imported. Existing new-design artwork, layouts, animations, and legal contents controls remain. Draft legal notices were removed because the complete published documents replaced the drafts. No legal clauses were newly authored.
The source legal paragraphs, list items, and subheadings were checked against rendered pages: privacy 173 blocks, terms 198 blocks, no omissions.

## Before launch
1. Contact email: the linked Vercel redesign project currently has no environment variables. Add `RESEND_API_KEY` for production and ensure `hello@attentionfactory.io` is a verified sender. The API sends to `hello@attentionfactory.io`. Complete a delivery test after configuration; none was sent during this review.
2. The original About page includes founder biographies, a results paragraph after metrics, and a final choose-a-path section. These have no corresponding section in the new design; they were not added as new layouts. The longer original contact explainer sections likewise are not part of the modal design.
3. Services, team, courses, resources/playbooks, intelligence, blog, community and archetype pages have no finished new-design template and are temporarily unavailable via redirects.
4. Labs still marks unreleased experiments as previews; their destinations are not wired. Homepage article cards still use repeated design sample titles and now lead home pending a redesigned article template.
5. Review date-specific homepage HQ/cohort copy now that 5 October has arrived. The hero countdown already switches to its open state automatically.
6. Check the retained external membership URL `https://app.attentionfactory.io/attnhq-waitlist` before launch; it was previously changed by domain replacement. The hero badge separately uses the explicitly requested academy URL.
7. Publish only when requested. These October content/routing changes have not been deployed. Moving the main custom domain from the old site is a separate release action.

## Validation
Local route HTTP checks (five retained pages 200, representative redirects 307); full legal block comparison; TypeScript check; browser verification of contact alias and service top navigation. No real contact submission or production configuration changes made.

## Campaign preservation correction
Standalone campaign pages are preserved: `/launch`, `/university`, `/superrad`, `/superrad/upgrade`, `/free-audit`. These are restored from the original project, including artwork, fonts, video media and animation dependencies. Broad `/v2/*` and other marketing redirects were removed. Only `/services/*` and `/v2/services/*` redirect home; legal/contact aliases still point to their redesigned equivalents. Unknown URLs now show a normal not-found page. Existing marketing URLs for courses, organizations, playbooks, blog, intelligence, community, brand and archetype render their existing pages using internal rewrites. Earlier blanket-redirect statements above are superseded by this correction. Campaign text and dates have been preserved rather than rewritten. No deployment has been made.


## Main integration — 5 October 2026

The PR targets `kohasummons/attn:main`. Main's canonical route migration is retained: campaign and content pages live at their root URLs, with legacy `/v2` redirects and asset rewrites. This supersedes the earlier note about rewrites into `/v2`. The redesign serves `/`, `/about`, `/labs`, `/privacy-policy`, and `/terms-of-service`; `/the-lab` resolves to `/labs`. Contact aliases open the redesigned modal, and service routes return home.

Production build, TypeScript, both countdown tests, and HTTP checks of the redesigned pages, campaign pages, playbooks, and redirects passed. Browser visual verification is still outstanding. Contact delivery still requires Resend configuration and a delivery test; no email was sent. DialKit controls are hidden.
