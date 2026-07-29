# LYCORE kinetic component plan

## Typed content layer

Create `src/content/` modules that reference preserved source content rather than duplicating integrations:

- `navigation.ts`
- `hero.ts`
- `problems.ts`
- `services.ts`
- `industries.ts`
- `websiteConcepts.ts`
- `implementation.ts`
- `faq.ts`
- `contact.ts`

`src/siteData.ts` remains the canonical legal, metadata, FAQ, contact, social, and route source until a later migration can be verified safely.

## Visual components

- `GeometricFrame` — three SVG geometry variants selected by media behavior; compound filled mask, matte white, no raster frame.
- `HeroMachine` — poster-first WebM/MP4 loop; page-visibility and intersection pause logic.
- `HeroIntro` — one H1, primary and secondary CTA, no essential video-only content.
- `MachineScrollStory` — desktop/tablet pinned GSAP timeline and mobile sticky-preview chapters.
- `StoryChapter` — semantic chapter copy and progress rule.
- `ProblemTrack` — one continuous mechanical plane with focusable problem stops.
- `ServiceModuleSequence` — five labelled sticky service states and `01 / 05` progress.
- `IndustryStage` — accessible single-slide carousel with buttons, keyboard, swipe, and announced count.
- `WebsiteConceptGallery` — editorial 12-column concept sequence using existing images and disclaimer.
- `ImplementationRail` — four connected stations, diagonal desktop and vertical mobile.
- `ReportingMachine` — structural report fields only, no fake figures.
- `FAQAccordion` — ivory rest section, keyboard-native buttons, one-open behavior.
- `LeadReviewCTA` — cobalt final action with machine/card hover response and WhatsApp secondary.
- `ReducedMotionFallback` — normal content flow with static machine and no long pin.

## Motion and utility modules

- `src/lib/gsap.ts` — registered GSAP and ScrollTrigger exports.
- `src/hooks/useDispatchStory.ts` — scoped timeline with matchMedia cleanup.
- `src/hooks/useSmoothScroll.ts` — desktop fine-pointer Lenis integration only.
- `src/hooks/useMediaPlayback.ts` — one active muted video, intersection and visibility pause.
- `src/hooks/useSwipe.ts` — touch-safe carousel gesture without vertical-scroll hijacking.

## Existing systems retained

`Navbar`, `Layout`, `Footer`, `Seo`, `PrivacyControls`, `AuditLeadForm`, `AIChatDemo`, analytics, routing, and server lead handling are preserved and restyled only where required.

## Dependencies and provenance

- GSAP 3.15.0: npm package, standard no-charge license, used for scoped timelines and ScrollTrigger.
- ScrollTrigger: bundled GSAP plugin, explicitly registered to prevent tree-shaking.
- Lenis 1.3.25: npm package, MIT license, desktop fine-pointer only.
- Existing Motion dependency remains for inner-page lightweight transitions; do not run competing scroll animation systems on the same target.
- No Three.js or custom 3D code.

