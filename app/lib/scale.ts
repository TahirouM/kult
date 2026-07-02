// Figma reference canvas width. Every design coordinate is expressed against
// this width so the whole page scales proportionally (pixel-perfect ratios)
// while staying fluid, and is capped at the reference width on large screens.
export const CANVAS = 1728;

/** Convert a Figma pixel value into a viewport-width based length. */
export function vw(px: number): string {
  return `${(px / CANVAS) * 100}vw`;
}

/** Same as vw() but returns a raw number of vw units (for composition). */
export function vwNum(px: number): number {
  return (px / CANVAS) * 100;
}
