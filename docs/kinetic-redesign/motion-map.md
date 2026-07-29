# LYCORE kinetic motion map

## Motion grammar

- Mechanical: cards, rails, module changes, routing paths; deliberate transform movement.
- Editorial: headings and copy; opacity, clip, and 16–48px translations.
- Atmospheric: one very slow hero light falloff; no particles or cursor glow.
- Functional: buttons, accordions, carousel controls, focus, and validation; 100–280ms.

## Hero and dispatch story

| State | Scroll range | Machine | Copy and environment | Purpose |
| --- | --- | --- | --- | --- |
| Intro | 0–8% | Scale 1 → 1.06; ambient video pauses | Word opacity 1 → .16; intro copy exits | Move from promise to explanation. |
| Capture | 8–22% | Translate centre toward 34vw | Capture chapter enters right in three short beats | Explain answer-and-record behavior. |
| Qualify | 22–38% | Advance crop/state without layout jump | Capture exits 24px up; structured intake fields crossfade | Explain what makes a lead actionable. |
| Book | 38–54% | Advance to Book | Scheduling copy plus lightweight SVG calendar line | Explain the calendar handoff. |
| Follow Up | 54–70% | Shift another 2–3vw left; one active-card pulse | Confirmation/reminder/callback chapter | Explain continuity after intake. |
| Grow | 70–88% | Advance to output | Background brightens slightly; web/GBP/reporting chapter | Connect the machine to broader systems without claims. |
| Release | 88–100% | Scale to .88; output card travels downward | Right copy fades; next mechanical plane receives the card | Preserve visual continuity into the problem section. |

Desktop trigger: story top reaches viewport top. Pin duration: `+=520%`; scrub `0.65`; labels `intro`, `capture`, `qualify`, `book`, `followUp`, `grow`, `release`. Timeline reverses naturally.

Tablet trigger: same narrative with `+=380%`; machine translations reduced 25%; copy may occupy lower/right third.

Mobile: no desktop pin. Use a sticky static/video preview above five normal chapters across approximately 260vh; active state changes when each chapter crosses the viewport centre. Machine movement remains under 12vw.

Reduced motion: no pin, scrub, zoom, smooth scrolling, or autoplay. Static poster plus all five chapters in normal document flow.

## Remaining homepage sequences

- Problem track: scrubbed rail fill; individual focus/hover lifts 6px and rotates no more than 1.5 degrees.
- Services: sticky title/description at left; five modules advance on scroll; current module moves 40–70px; labelled `01 / 05` progress.
- Industry stage: user-controlled 600–800ms staged transitions; copy clip, then module accent, then background. No vertical scroll hijacking.
- Concepts: image scale 1 → 1.025 and crop drift under 2%; below-fold images lazy load.
- Implementation rail: station scale .94 → 1 and progressive SVG/CSS rail fill.
- Reporting: report sheet moves vertically; real rows reveal sequentially.
- FAQ: one-open height/opacity transition; icon rotates 45 degrees; no decorative scroll sequence.
- Final CTA: hover advances blank card 16px, activates indicator, and moves arrow 4px; no bounce.

## Runtime rules

- Scope GSAP contexts to components and revert on unmount.
- Use `gsap.matchMedia()` for desktop/tablet/mobile/reduced-motion setups.
- Refresh ScrollTrigger after fonts and hero metadata settle.
- Lenis runs only for `(pointer: fine)` and no reduced-motion preference; anchors enabled.
- Pause video when its section is offscreen or `document.hidden`; never play more than one video.
- Use transforms and opacity; set `will-change` only while a timeline is active.

