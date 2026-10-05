/** Weekends of AI publishes a recurring Saturday 17:00 UTC / 18:00 WAT session. */
export function nextSession(now: number): Date {
  const date = new Date(now);
  const daysUntilSaturday = (6 - date.getUTCDay() + 7) % 7;
  const next = new Date(
    Date.UTC(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate() + daysUntilSaturday,
      17,
    ),
  );
  if (next.getTime() <= now) next.setUTCDate(next.getUTCDate() + 7);
  return next;
}

export function remainingTime(now: number, target: number) {
  const seconds = Math.max(0, Math.floor((target - now) / 1000));
  return [
    Math.floor(seconds / 86400),
    Math.floor(seconds / 3600) % 24,
    Math.floor(seconds / 60) % 60,
    seconds % 60,
  ];
}
