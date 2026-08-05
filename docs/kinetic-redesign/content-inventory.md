# LYCORE kinetic redesign content inventory

## Business and conversion truth

- Business: LYCORE GROUP LLC, customer communication and workflow systems for service businesses.
- Primary promise: answer calls 24/7, build phone-first websites, and handle follow-up so service businesses stop losing jobs to missed calls.
- Primary action: **Get a Free Lead System Review** (`/contact`).
- Secondary actions: **See What We Build** (`/what-we-build`), book a strategy call (`/book`), WhatsApp (`https://wa.me/19178145066`), and email (`services@lycore.org`).
- Verified address: 1209 Mountain Road Pl NE, Ste N, Albuquerque, NM 87110, US.
- Claim boundaries: no ranking, revenue, call-volume, conversion, or client-outcome guarantees.

## Dispatch narrative

The approved machine maps to five editable HTML chapters:

1. Capture — answer calls day or night; record caller details, service type, location, and urgency; deliver a summary.
2. Qualify — structure caller name, location, requested service, urgency, and lead source.
3. Book — connect qualified opportunities to appointment scheduling without claiming a booking outcome.
4. Follow Up — send confirmations, reminders, callbacks, and team routing; feature is currently rolling out.
5. Grow — connect phone-first websites, Google Business Profile, reporting, and the longer-term business-systems direction.

## Homepage problems

1. The 2 a.m. call nobody answered.
2. A website that just sits there instead of making the call action obvious.
3. No clear view of which source or marketing path produced the lead.
4. Follow-up that depends on memory.

These are rendered on one mechanical plane, not four equal cards.

## Service modules

1. 24/7 Receptionist.
2. Websites That Convert Callers.
3. Google Business Profile.
4. Intake and Follow-Up Automation — rolling out.
5. Business Systems — longer-term direction, not currently sold as a finished product.

## Industries

The complete preserved list is auto repair, bail bonds, electrical, HVAC, locksmiths, pest control, plumbing, restaurants, restoration, roofing, towing, and urgent care.

The canonical directory is `/industries`. Every industry receives equal visual weight, industry-specific pain points, a tailored call path, and a clear outcome. The former towing and bail-bonds routes permanently redirect to the directory.

## Website concepts

Five existing concept entries and images are preserved:

- towing company homepage with tap-to-call;
- plumbing service landing page;
- HVAC repair conversion-focused hero;
- restoration company service page;
- locksmith premium brand page.

The existing disclaimer remains: these are design directions, not client performance claims.

## Implementation route

1. Review the current call, website, and follow-up system.
2. Configure the receptionist and phone-first website around business rules.
3. Route every lead with useful caller, service, location, urgency, and source context.
4. Measure answered calls, booked opportunities, and lead sources at 30, 60, and 90 days.

## Reporting fields

Only real structured fields are shown: caller name, lead source, service requested, urgency, call status, booking status, and follow-up status. No fictional totals or conversion metrics are permitted.

## FAQ and legal content

- Eleven existing FAQs remain sourced from `src/siteData.ts`.
- Privacy Policy, Terms of Use, Data Deletion, consent controls, AI disclosure, claim limitations, and Jotform privacy-request link remain unchanged in meaning.

## Forms and integrations to preserve

- Review form state, fields, consent, honeypot, inline status, and `/api/leads` submission.
- CRM/Jotform/webhook routing and attribution payload.
- `VITE_BOOKING_URL` booking embed/fallback.
- GA4 optional-consent initialization and tracked CTA/form/scroll events.
- WhatsApp, email, social profiles, chat, privacy controls, SEO metadata, sitemap, and structured data.

## Media inventory

- `public/lycore-dispatch-carousel.mp4`: H.264, 1920×1074, 24 fps, 5.04 seconds, 1.32 MB.
- `public/lycore-dispatch-poster.webp`: static hero and reduced-motion fallback.
- Five existing concept images under `public/showcase/`.
- Required addition: a WebM transcode of the supplied loop; MP4 remains the fallback.
