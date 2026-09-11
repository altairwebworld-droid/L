# Search visibility setup

## Before launch

1. Verify `https://www.lycore.org` in Google Search Console using the existing verification method.
2. Verify the same canonical domain in Bing Webmaster Tools.
3. Submit `https://www.lycore.org/sitemap.xml` to both tools.
4. Confirm that the canonical domain redirects `lycore.org` to `www.lycore.org`.
5. Review the Coverage or Pages report after the new URLs are crawled.

## After publishing a meaningful page change

- Confirm the page returns HTTP 200 and has the expected canonical URL, title, description, and index directive.
- Regenerate the production build so static page metadata and the sitemap stay aligned with the route inventory. Set a page's `updatedAt` value only when its public content changes materially.
- Use URL Inspection in Search Console for priority pages; request indexing only for genuinely new or materially changed pages.
- Do not submit URLs repeatedly or change sitemap `lastmod` without a meaningful content change.

## Measurement

The site tracks conversion-oriented events including audit CTA clicks, form starts and submissions, booking clicks, phone and email clicks, service-page views, integration-page views, and industry-page views. Review GA4 referral data for Google, Bing, social channels, and any AI referral that is available in referrer data. Do not treat a missing AI referrer as proof that no AI system mentioned the site.

## IndexNow

IndexNow is not enabled because this static deployment has no trusted publication hook or secret-management flow for a key. Add it only when a content publishing pipeline can submit a small set of changed canonical URLs after deployment. Do not add a public secret key to this repository.
