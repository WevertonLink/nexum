/**
 * Evidence batching, ported from NL v2's `beginEvidenceBatch` /
 * `bufferEvidence` / `commitEvidenceBatch`. Recording individual answers
 * inside a multi-question activity (mini-quiz, review round) would over-
 * promote a topic — one late correct answer would push the box forward as
 * many times as questions asked. Instead, we buffer per (scope, dim), average
 * at commit, and schedule ONCE per dimension.
 *
 * `M:` (module) scopes are intentionally dropped at commit: they measure
 * modules but must not feed the topic-level SRS queue.
 */
import type { KnowledgeDim } from "./evidence.ts";
import type { SrsRecord } from "./srs.ts";
import { scheduleDimension } from "./srs.ts";

type Bucket = { sum: number; n: number };

export type EvidenceBatch = {
  buckets: Record<string, Partial<Record<KnowledgeDim, Bucket>>>;
};

export function beginEvidenceBatch(): EvidenceBatch {
  return { buckets: {} };
}

export function bufferEvidence(
  batch: EvidenceBatch | null,
  scope: string,
  dim: KnowledgeDim,
  result: number | boolean,
): void {
  if (!batch || !scope) return;
  const r = typeof result === "boolean" ? (result ? 1 : 0) : Math.max(0, Math.min(1, Number(result) || 0));
  const group = batch.buckets[scope] ?? (batch.buckets[scope] = {});
  const bucket = group[dim] ?? (group[dim] = { sum: 0, n: 0 });
  bucket.sum += r;
  bucket.n += 1;
}

export type BatchCommit = {
  /** Aggregated (topicKey, dim, avgScore) tuples, one per dim per topic. */
  aggregated: Array<{ key: string; dim: KnowledgeDim; score: number }>;
  /** Fresh SRS records per (topicKey, dim), for callers to persist. */
  scheduled: Array<{ key: string; dim: KnowledgeDim; record: SrsRecord }>;
};

/**
 * Commit averaged evidence to the SRS scheduler. Callers pass a `prevFor(key, dim)`
 * lookup so the scheduler can promote/demote from the previous record. Only
 * `T:` scopes reach the queue.
 */
export function commitEvidenceBatch(
  batch: EvidenceBatch,
  prevFor: (key: string, dim: KnowledgeDim) => SrsRecord | null,
  now: number = Date.now(),
): BatchCommit {
  const aggregated: BatchCommit["aggregated"] = [];
  const scheduled: BatchCommit["scheduled"] = [];
  for (const scope of Object.keys(batch.buckets)) {
    if (!scope.startsWith("T:")) continue;
    const key = scope.slice(2);
    const group = batch.buckets[scope];
    for (const dim of Object.keys(group) as KnowledgeDim[]) {
      const bucket = group[dim];
      if (!bucket || bucket.n === 0) continue;
      const score = bucket.sum / bucket.n;
      aggregated.push({ key, dim, score });
      const prev = prevFor(key, dim);
      const record = scheduleDimension(prev, score, now);
      scheduled.push({ key, dim, record });
    }
  }
  return { aggregated, scheduled };
}
