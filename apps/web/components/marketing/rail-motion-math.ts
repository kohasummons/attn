export const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value));

/** Reflect at each endpoint immediately; there is no hold or clamped plateau. */
export function getCycleProgress(phase: number) {
  const cycle = ((phase % 1) + 1) % 1;
  return 1 - Math.abs(2 * cycle - 1);
}

/** Each neighbor has its own turnaround phase, with bounded speed variation.
 * The offset repeats every cycle, so small differences never accumulate drift.
 */
export function getNeighborPhase(
  phase: number,
  index: number,
  differencePercent: number,
  phasePercent: number,
) {
  const neighbor = index - 1;
  const variation = clamp(differencePercent, 0, 10) / 100;
  const offset = clamp(phasePercent, -4, 4) / 100;
  return phase + neighbor * (
    offset + variation * Math.sin(phase * Math.PI * 2) / (Math.PI * 2)
  );
}

/** Map each box's own progress into its safe, inset travel range. */
export function getSquarePosition({
  progress,
  start,
  end,
  topInset,
  bottomInset,
}: {
  progress: number;
  start: number;
  end: number;
  topInset: number;
  bottomInset: number;
}) {
  const p = clamp(progress, 0, 1);
  const distance = Math.max(0, end - start);
  const from = start + distance * clamp(topInset, 0, 45) / 100;
  const to = end - distance * clamp(bottomInset, 0, 45) / 100;
  return from + (to - from) * p;
}
