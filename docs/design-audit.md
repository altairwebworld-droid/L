# LYCORE homepage — design audit

Compiled from two design skills: `design:design-critique` (critique framework:
first impression, usability, hierarchy, consistency, accessibility) and
`ui-ux-pro-max` (rule taxonomy: accessibility, touch, performance, style,
layout, typography/colour, animation, forms, navigation).

Severity: 🔴 critical · 🟡 moderate · 🟢 minor

---

## Cross-cutting findings

| # | Finding | Rule | Sev | Status |
|---|---------|------|-----|--------|
| 1 | Container widths inconsistent: `max-w-7xl` on six sections, `max-w-5xl` on Implementation, `max-w-6xl` on Final CTA. Right edge of content visibly shifts while scrolling. | `container-width` | 🟡 | Fixed — shared `Container` |
| 2 | Section header margins inconsistent (`mb-10` / `mb-14` / `mb-16`). | `spacing-scale` | 🟢 | Fixed — shared `SectionHeading` |
| 3 | Every section is `py-24 md:py-32` on flat `#061b42` with no divider or surface change. Page reads as one endless dark scroll with no chapter structure. | `whitespace-balance`, `visual-hierarchy` | 🟡 | Fixed — `Section` adds hairline + alternating tint |
| 4 | Two WebGL contexts on one page (hero was plain video, separate liquid-glass panel mid-page). Doubles GPU cost and splits the signature moment. | `main-thread-budget` | 🔴 | Fixed — merged into hero, panel removed |
| 5 | Every `h2` is the same size (`text-4xl md:text-5xl`). No distinction between major and minor chapters. | `font-scale`, `weight-hierarchy` | 🟢 | Open — deliberate for now; revisit if page grows |
| 6 | Hero used `min-h-screen` (`100vh`), which overflows on mobile browsers with dynamic toolbars. | `viewport-units` | 🟡 | Fixed — `min-h-dvh` |

## Section-by-section

### Hero
- 🔴 **Split composition.** Headline sat pinned near the top; body, CTAs and
  trust badge were `absolute bottom-14`. A dead zone opened in the middle on
  tall screens, and the two clusters collided on short/landscape viewports.
  → Rebuilt as a single centred flow column with consistent `gap` rhythm.
- 🟡 **No liquid glass.** The effect the brand wanted lived in a mid-page panel
  instead of the hero. → Dispatch video now feeds a `THREE.VideoTexture` that
  is refracted through the metaball droplets, so the loop bends through the
  glass. Falls back to the plain video on reduced motion, `<768px`, or no WebGL.
- 🟡 Scrim was `from-bg/75` — thin under the brighter specular highlights the
  metaball adds. → Deepened to `from-bg/80 via-bg/50`, plus a text shadow on
  the `h1`.
- 🟢 Added a scroll cue (desktop only, so it cannot collide on short screens).

### Problem cards
- 🟢 Reads well. Four white tilt cards, one idea each, good scan rhythm.
- 🟢 Icon set is consistent (Lucide, matching stroke weight) — satisfies
  `icon-style-consistent` and `no-emoji-icons`.

### Service modules
- 🟢 Strong. The 5th card spanning two columns gives the grid a deliberate
  terminal beat rather than a ragged orphan.
- 🟢 `Badge` availability chips ("Rolling out", "Long-term direction") are
  honest and add credibility.

### Industry grid
- 🟡 Twelve small cards is dense, but this is intentional — no single trade may
  outrank the others. Kept flat and equal.
- 🟢 Per-industry accent colours give the grid life without breaking the palette.

### Concept carousel
- 🟡 **Images are still the pre-rebrand bail-bonds mockups.** Titles were
  neutralised to "Design direction 01–05" so nothing on the page is factually
  wrong, but the imagery does not match the trades served. → Blocked on the
  five replacement mockups being generated externally.
- 🟢 Cylinder carousel is the right call for a set of equal-weight visuals.

### Implementation steps
- 🟢 Vertical timeline with numbered nodes is the clearest possible read for a
  4-step process.

### Reporting card
- 🟢 The `dl` of real captured fields is the most persuasive block on the page —
  concrete, checkable, no invented dashboard numbers.

### FAQ
- 🟢 Radix accordion gives correct `aria-expanded`, keyboard support and
  animated height. Meets `keyboard-nav` and `state-transition`.

### Final CTA
- 🟢 Light-lines backdrop plus a single primary CTA — satisfies
  `primary-action` (one primary per screen, secondary subordinate).

## What works well

- Consistent Lucide icon family and stroke weight throughout.
- White cards on dark navy give strong figure/ground separation; blue-on-white
  body text clears 4.5:1 comfortably.
- Motion is uniform: `duration 0.4–0.6s`, `ease [0.22, 1, 0.36, 1]`, `once: true`
  viewport triggers, and index-based stagger of 60–80ms — inside the 30–50ms
  guidance band and well under the 500ms ceiling.
- Copy is disciplined: no invented metrics, no guarantees.

## Open items

1. Replace the five carousel mockups once generated (towing, plumbing, HVAC,
   restoration, locksmith) and restore industry-specific titles in
   `src/siteData.ts`.
2. Verify contrast of `text-white/60` on the hero trust badge over the brightest
   frame of the video — may need `/70`.
3. Consider a distinct type scale for major vs minor chapters if more sections
   are added.
4. Live browser pass never ran this session — the preview tool was blocked by a
   platform outage. Everything below the type-check line is unverified visually.
