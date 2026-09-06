/**
 * Leitner-style spaced repetition scheduler ported from NeuroLab v2's
 * `04-learning-model.js` + `scheduleDimension` in `05-app.js`. Eight boxes,
 * one record per (topic, dimension) — recognizing well makes that dimension
 * disappear from the queue while the still-fragile dimensions keep coming
 * back. A lapse walks the box down (never zeroes it) capped by
 * `SRS_LAPSE_CAP`, so a stumble on box 5 lands on 2, not on 0.
 */
import type { KnowledgeDim } from "./evidence.ts";

export const DAY_MS = 86_400_000;

/** Days between reviews for boxes 0..7. Matches NL v2 exactly. */
export const SRS_INTERVALS = [1, 3, 7, 14, 30, 60, 120, 240] as const;
export const SRS_PASS = 0.8;
/** Lapse cap: box after error can go no higher than 2 (reconstruction box). */
export const SRS_LAPSE_CAP = 2;

export type SrsBox = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

export type SrsReason = "first" | "interval" | "lapse" | "overdue";

export type SrsRecord = {
  box: SrsBox;
  due: number;
  reps: number;
  lapses: number;
  lastScore: number | null;
  reason: SrsReason;
  weakDim: KnowledgeDim | null;
  updatedAt: number;
};

export function emptySrsRecord(): SrsRecord {
  return {
    box: 0,
    due: 0,
    reps: 0,
    lapses: 0,
    lastScore: null,
    reason: "first",
    weakDim: null,
    updatedAt: 0,
  };
}

function startOfDay(ts: number): number {
  const d = new Date(ts);
  d.setHours(0, 0, 0, 0);
  return d.getTime();
}

/**
 * Spread same-box dues by ±15%. Box 0 (1 day) is left alone so the first
 * review still lands tomorrow. Injectable RNG so tests can pin the value.
 */
export function srsJitteredDays(days: number, rng: () => number = Math.random): number {
  if (days <= 1) return days;
  const factor = 0.85 + rng() * 0.3;
  return Math.max(1, Math.round(days * factor));
}

function clampScore(v: number | boolean): number {
  const n = typeof v === "boolean" ? (v ? 1 : 0) : Number(v);
  if (!isFinite(n)) return 0;
  return Math.max(0, Math.min(1, n));
}

function clampBox(n: number): SrsBox {
  const b = Math.max(0, Math.min(SRS_INTERVALS.length - 1, Math.round(n)));
  return b as SrsBox;
}

/**
 * Advance / demote a dimension's box based on a review score.
 *
 * - First-ever attempt: box 0, due tomorrow, reason `"first"`.
 * - Failure (< SRS_PASS): box drops one but caps at `SRS_LAPSE_CAP`, lapses++.
 * - Pass on an unseen dim: goes to box 0 (bootstrap).
 * - Pass while due: box advances one (never past the last box).
 * - Pass while NOT due: no promotion (studying before schedule doesn't help).
 *
 * `now` and `rng` are injected so tests can be deterministic.
 */
export function scheduleDimension(
  prev: SrsRecord | null,
  score: number | boolean,
  now: number = Date.now(),
  rng: () => number = Math.random,
): SrsRecord {
  const s = clampScore(score);
  const passed = s >= SRS_PASS;
  const isNew = !prev;
  const cur: SrsRecord = prev ? { ...prev } : emptySrsRecord();
  const wasDue = now >= (cur.due || 0);

  cur.reps = (cur.reps || 0) + 1;
  cur.updatedAt = now;
  cur.lastScore = s;

  if (!passed) {
    if ((cur.box || 0) > 0) cur.lapses = (cur.lapses || 0) + 1;
    cur.box = clampBox(Math.min((cur.box || 0) - 1, SRS_LAPSE_CAP));
    cur.due = startOfDay(now) + srsJitteredDays(SRS_INTERVALS[cur.box], rng) * DAY_MS;
    cur.reason = "lapse";
  } else if (isNew) {
    cur.box = 0;
    cur.due = startOfDay(now) + SRS_INTERVALS[0] * DAY_MS;
    cur.reason = "first";
  } else if (wasDue) {
    cur.box = clampBox((cur.box || 0) + 1);
    cur.due = startOfDay(now) + srsJitteredDays(SRS_INTERVALS[cur.box], rng) * DAY_MS;
    cur.reason = "interval";
  }
  return cur;
}

/** True when the box is due for review (start-of-day granularity). */
export function isDue(rec: SrsRecord | null | undefined, now: number = Date.now()): boolean {
  if (!rec) return false;
  return startOfDay(now) >= (rec.due || 0);
}

/** Days overdue (0 if not yet due). Useful for review-queue sorting. */
export function overdueDays(rec: SrsRecord, now: number = Date.now()): number {
  const today = startOfDay(now);
  if (today < rec.due) return 0;
  return Math.round((today - rec.due) / DAY_MS);
}
