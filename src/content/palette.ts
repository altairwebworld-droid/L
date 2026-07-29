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
  cyan: '#f8dbb9',
  amber: '#ff6b22',
  coral: '#ff915a',
  violet: '#cfc7bc',
  teal: '#f1b47f',
  gold: '#ffb15c',
  cobalt: '#ff6b22',
  green: '#d8cfc3',
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
  night: '#090909',
  deep: '#121212',
  cobalt: '#1a1918',
  cream: '#f4efe4',
  creamInk: '#171513',
  creamInkMuted: '#665f58',
} as const;
