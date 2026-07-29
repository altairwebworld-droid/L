# LYCORE kinetic redesign implementation sequence

## Backup

Baseline commit: `885eb4b Refine LYCORE visual system and page flow`.

Backup branch: `codex/pre-kinetic-dispatch-redesign-20260717`, pushed to `origin` before production edits.

## Stage 1 — foundation

1. Add and document GSAP/ScrollTrigger and Lenis.
2. Add typed homepage content modules.
3. Add animation/media hooks with cleanup and reduced-motion behavior.
4. Establish the 12-column grid, cobalt/ivory tokens, typography, focus, and button grammar.
5. Capture desktop, tablet, and mobile foundation screenshots.

## Stage 2 — hero and dispatch narrative

1. Build three coded SVG frame variants.
2. Convert the existing MP4 to WebM and retain MP4 fallback.
3. Build hero intro, ambient playback, and poster state.
4. Build desktop/tablet GSAP pinned timeline and mobile sticky chapters.
5. Verify forward/reverse scroll, resize cleanup, tab/offscreen pause, and reduced motion.
6. Capture desktop, tablet, and mobile hero/story screenshots.

## Stage 3 — homepage chapters

1. Build mechanical problem track.
2. Build sticky service module sequence.
3. Build accessible industry stage.
4. Build concept gallery, implementation rail, reporting machine, FAQ, and final CTA.
5. Capture desktop, tablet, and mobile chapter screenshots.

## Stage 4 — preservation and release

1. Restyle shared navigation/footer/forms only where the new system requires it.
2. Verify every existing route, metadata title, form field, action link, redirect, analytics event, and integration boundary.
3. Run TypeScript, production build, implementation validation, visual browser matrix, keyboard checks, reduced motion, resource/error checks, and the advanced-site audit.
4. Repair only identified defects and recapture affected viewports.
5. Commit verified files directly to `main` and push `origin/main` per repository workflow.

