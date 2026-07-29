/**
 * LYCORE accent system.
 *
 * The page runs on a deep cobalt/indigo/navy base. Accents distinguish
 * *industries and states* from one another — a plumbing call should not read
 * the same as a bail-bonds call — so each accent carries meaning rather than
 * decoration. Saturation stays under ~80% so everything sits in one
 * temperature family instead of competing.
 */

export const accents = {
  cyan: '#5ec8d8',
  amber: '#e8a54b',
  coral: '#e8785c',
  violet: '#8b7ce8',
  teal: '#4fb0a4',
  gold: '#d9b04e',
  cobalt: '#4b8df8',
  green: '#5cb185',
} as const;

export type AccentName = keyof typeof accents;

/** Ordered ring used where a sequence needs distinct-but-related colors. */
const ACCENT_RING: string[] = [
  accents.cyan,
  accents.amber,
  accents.coral,
  accents.violet,
  accents.teal,
  accents.gold,
];

export function accentFor(index: number = 0): string {
  return ACCENT_RING[index % ACCENT_RING.length];
}

/** The one accent used for brand-level emphasis (CTAs, active nav, focus). */
export const signalAccent = accents.amber;

/** Surface tokens, so components stop inventing their own hexes. */
export const surfaces = {
  night: '#061b42',
  deep: '#08295f',
  cobalt: '#0b3478',
  cream: '#f4efe4',
  creamInk: '#092f69',
  creamInkMuted: '#4a5f8a',
} as const;
