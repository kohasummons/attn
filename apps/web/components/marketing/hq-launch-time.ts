// October 5 begins at midnight in Lagos (UTC+1).
export const hqLaunchAt = Date.parse("2026-10-04T23:00:00Z");
const dayMs = 24 * 60 * 60 * 1000;

export function hqLaunchBadgeText(now: number) {
  const days = Math.ceil((hqLaunchAt - now) / dayMs);
  if (days <= 0) return "Attention HQ is coming";
  return `Attention HQ Opens in ${days} ${days === 1 ? "Day" : "Days"}`;
}
