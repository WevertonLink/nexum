import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  beginEvidenceBatch,
  bufferEvidence,
  commitEvidenceBatch,
} from "./batch.ts";
import { moduleScope, topicScope } from "./evidence.ts";
import type { SrsRecord } from "./srs.ts";

const T0 = 1_700_000_000_000;

describe("evidence batch", () => {
  it("aggregates multi-question activities into ONE schedule per (topic, dim)", () => {
    const batch = beginEvidenceBatch();
    const scope = topicScope("neuronio-0");
    bufferEvidence(batch, scope, "recognition", 1);
    bufferEvidence(batch, scope, "recognition", 1);
    bufferEvidence(batch, scope, "recognition", 1);
    const { aggregated, scheduled } = commitEvidenceBatch(batch, () => null, T0);
    assert.equal(aggregated.length, 1);
    assert.equal(aggregated[0].score, 1);
    assert.equal(scheduled.length, 1);
    assert.equal(scheduled[0].record.reps, 1);
    assert.equal(scheduled[0].record.box, 0);
  });

  it("averages mixed pass/fail results before scheduling", () => {
    const batch = beginEvidenceBatch();
    const scope = topicScope("neuronio-0");
    bufferEvidence(batch, scope, "causality", 1);
    bufferEvidence(batch, scope, "causality", 0);
    const { aggregated } = commitEvidenceBatch(batch, () => null, T0);
    assert.equal(aggregated[0].score, 0.5);
  });

  it("drops M: (module) scopes from the SRS queue by design", () => {
    const batch = beginEvidenceBatch();
    bufferEvidence(batch, moduleScope("module_01"), "recognition", 1);
    bufferEvidence(batch, topicScope("neuronio-0"), "recognition", 1);
    const { aggregated } = commitEvidenceBatch(batch, () => null, T0);
    assert.equal(aggregated.length, 1);
    assert.equal(aggregated[0].key, "neuronio-0");
  });

  it("promotes from an existing SRS record when passed a lookup", () => {
    const prev: SrsRecord = {
      box: 0,
      due: T0 - 86_400_000,
      reps: 1,
      lapses: 0,
      lastScore: 1,
      reason: "first",
      weakDim: null,
      updatedAt: T0 - 86_400_000,
    };
    const batch = beginEvidenceBatch();
    bufferEvidence(batch, topicScope("neuronio-0"), "recognition", 1);
    const { scheduled } = commitEvidenceBatch(
      batch,
      (key, dim) => (key === "neuronio-0" && dim === "recognition" ? prev : null),
      T0,
    );
    assert.equal(scheduled[0].record.box, 1);
    assert.equal(scheduled[0].record.reason, "interval");
  });

  it("empty batch commits to nothing without throwing", () => {
    const batch = beginEvidenceBatch();
    const { aggregated, scheduled } = commitEvidenceBatch(batch, () => null, T0);
    assert.deepEqual(aggregated, []);
    assert.deepEqual(scheduled, []);
  });

  it("buffering without a batch is a no-op (safe when no activity is open)", () => {
    assert.doesNotThrow(() => bufferEvidence(null, "T:x", "recognition", 1));
  });
});
