# Website analytics

Provider: Umami Cloud. Website ID: `df2b0b04-1c2f-4e6f-abec-4202da3c4c30`. The owner supplied the tracking snippet for `https://cloud.umami.is/script.js`. Sign in at [Umami Cloud](https://cloud.umami.is/) and open the idyeah website to monitor it. The dashboard stays private; no public share link is enabled by this integration.

The six studio HTML pages load the shared integration with this website ID. It is public configuration, not an API credential. Never put an account password, API key, or authentication token in the website. Deploy changes through the normal feature → develop → main workflow. New studio pages should include the same `script[data-idyeah-analytics]` tag; client prototypes should not.

## What to monitor

- Overview: visitors, page views, popular pages, referrers, and campaign sources. Use UTM parameters in social links to distinguish campaigns.
- Location: approximate country, region, and city inferred by the provider, rather than precise GPS location.
- Technology: browser, operating system, device, screen size, and language.
- Events: call and email links, audit requests, opening strips or the archive, sharing controls, downloads, full-size artwork, transcripts, and outbound domains.
- Engagement: active-time milestones at 15, 30, 60, 120, and 300 seconds; scroll milestones at 50% and 90% of page height.

Click events measure intent. A call-link click does not confirm a Calendly booking, a share click does not confirm a published social post, and a copy/download click does not confirm completion. Event data distinguishes strip numbers and the placement of call links where useful.

Active time counts while a page is visible and focused, with activity in the last 30 seconds. It is an estimate: idle and background time pause counting, and a reader who stays still for longer than 30 seconds may be undercounted. Each milestone fires once per page load. Use these events to compare engagement; they are not an exact average time-on-page. Umami's native visit-duration and bounce metrics follow its own definitions, and engagement events can affect them.

## Collection boundaries

`assets/idyeah/analytics.js` runs only on `idyeah.studio` and `www.idyeah.studio`. Local previews, Vercel preview domains, and the Mosaix subdomain are excluded. Browser Do Not Track and Global Privacy Control disable collection. To exclude your own browser, run `localStorage.setItem('umami.disabled', '1')` in that browser's console on the production site and reload; remove the key to opt back in.

The integration sends no form contents, mailto contents, or user identity. URL queries are limited to `utm_source`, `utm_medium`, `utm_campaign`, and `utm_content`; fragments and other query parameters are stripped. External referrers and outbound destinations are reduced to their site origin/domain. Do not put personal information in campaign parameters. Session recording and precise geolocation are not enabled.

Blocked or unavailable analytics must not affect navigation or sharing. Ad blockers and opt-outs mean reports will not include every visit. Collection starts only after activation; there is no historical backfill. Page views, custom events, and event properties consume the provider's plan allowance, so monitor usage in the account.

## Validation

Run `node --test scripts/analytics.test.cjs` for configuration, opt-outs, URL filtering, click categorization, active-time/scroll behavior, and unavailable-tracker handling. Run `git diff --check` before publishing. After activation, verify a fresh production visit in Umami, including a call/share click and a reading milestone; avoid interpreting that verification visit as organic traffic.
