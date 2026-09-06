export const LEVEL_THRESHOLDS: readonly number[] = [
  0, 100, 300, 700, 1500, 3100, 6300, 12700,
] as const;

export type LevelInfo = {
  level: number;
  curr: number;
  next: number;
  pct: number;
};

export function levelFromXp(xp: number): LevelInfo {
  const safe = Math.max(0, Math.floor(xp));
  let level = 1;
  for (let i = 0; i < LEVEL_THRESHOLDS.length; i++) {
    if (safe >= LEVEL_THRESHOLDS[i]!) level = i + 1;
    else break;
  }
  const curr = LEVEL_THRESHOLDS[level - 1] ?? 0;
  const next =
    LEVEL_THRESHOLDS[level] ??
    LEVEL_THRESHOLDS[LEVEL_THRESHOLDS.length - 1]! * 2;
  const span = Math.max(1, next - curr);
  const pct = Math.max(0, Math.min(100, Math.round(((safe - curr) / span) * 100)));
  return { level, curr, next, pct };
}
