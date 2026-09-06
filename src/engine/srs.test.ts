import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  DAY_MS,
  SRS_INTERVALS,
  SRS_LAPSE_CAP,
  SRS_PASS,
  emptySrsRecord,
  isDue,
  overdueDays,
  scheduleDimension,
  srsJitteredDays,
} from "./srs.ts";

const T0 = 1_700_000_000_000;
const seededRng = (v: number) => () => v;

describe("srs constants", () => {
  it("uses NL v2 Leitner spacing verbatim", () => {
    assert.deepEqual([...SRS_INTERVALS], [1, 3, 7, 14, 30, 60, 120, 240]);
    assert.equal(SRS_PASS, 0.8);
    assert.equal(SRS_LAPSE_CAP, 2);
  });
});

describe("srsJitteredDays", () => {
  it("returns 1 unchanged (first box must land tomorrow)", () => {
    assert.equal(srsJitteredDays(1, () => 0.5), 1);
  });
  it("applies ±15% jitter to > 1 day intervals", () => {
    const low = srsJitteredDays(30, seededRng(0));
    const high = srsJitteredDays(30, seededRng(0.999));
    assert.ok(low >= Math.round(30 * 0.85));
    assert.ok(high <= Math.round(30 * 1.15));
  });
  it("never dips below 1 day", () => {
    assert.ok(srsJitteredDays(2, seededRng(0)) >= 1);
  });
});

describe("scheduleDimension — first attempt", () => {
  it("passes → box 0, due tomorrow, reason 'first'", () => {
    const rec = scheduleDimension(null, 1, T0);
    assert.equal(rec.box, 0);
    assert.equal(rec.reason, "first");
    assert.equal(rec.reps, 1);
    assert.equal(rec.lapses, 0);
    assert.ok(rec.due > T0);
    assert.ok(rec.due <= T0 + 2 * DAY_MS);
  });
});

describe("scheduleDimension — promotion", () => {
  it("passing while due advances one box", () => {
    const first = scheduleDimension(null, 1, T0);
    const later = first.due + DAY_MS;
    const second = scheduleDimension(first, 1, later);
    assert.equal(second.box, 1);
    assert.equal(second.reason, "interval");
  });
  it("passing BEFORE due does NOT promote", () => {
    const first = scheduleDimension(null, 1, T0);
    const early = first.due - DAY_MS;
    const second = scheduleDimension(first, 1, early);
    assert.equal(second.box, first.box);
    assert.equal(second.reps, 2);
  });
  it("does not advance past the last box", () => {
    let rec = scheduleDimension(null, 1, T0);
    let now = T0;
    for (let i = 0; i < SRS_INTERVALS.length + 3; i++) {
      now = rec.due + DAY_MS;
      rec = scheduleDimension(rec, 1, now);
    }
    assert.equal(rec.box, SRS_INTERVALS.length - 1);
  });
});

describe("scheduleDimension — lapses", () => {
  it("failure drops one box and caps at SRS_LAPSE_CAP", () => {
    let rec = scheduleDimension(null, 1, T0);
    let now = T0;
    for (let i = 0; i < 5; i++) {
      now = rec.due + DAY_MS;
      rec = scheduleDimension(rec, 1, now);
    }
    assert.ok(rec.box > SRS_LAPSE_CAP);
    now = rec.due + DAY_MS;
    const dropped = scheduleDimension(rec, 0, now);
    assert.equal(dropped.box, SRS_LAPSE_CAP);
    assert.equal(dropped.reason, "lapse");
    assert.equal(dropped.lapses, 1);
  });
  it("failing at box 0 keeps box 0 (no negative box) and no lapse counter bump", () => {
    const first = scheduleDimension(null, 1, T0);
    const failed = scheduleDimension(first, 0, first.due + DAY_MS);
    assert.equal(failed.box, 0);
    assert.equal(failed.lapses, 0);
    assert.equal(failed.reason, "lapse");
  });
  it("boolean false = failed", () => {
    const first = scheduleDimension(null, 1, T0);
    const rec = scheduleDimension(first, false, first.due + DAY_MS);
    assert.equal(rec.reason, "lapse");
  });
});

describe("isDue", () => {
  it("null → false", () => {
    assert.equal(isDue(null, T0), false);
  });
  it("due in the past → true", () => {
    const rec = emptySrsRecord();
    rec.due = T0 - DAY_MS;
    assert.equal(isDue(rec, T0), true);
  });
  it("due tomorrow → false", () => {
    const rec = emptySrsRecord();
    rec.due = T0 + DAY_MS;
    assert.equal(isDue(rec, T0), false);
  });
});

describe("overdueDays", () => {
  it("0 when not yet due", () => {
    const rec = emptySrsRecord();
    rec.due = T0 + 2 * DAY_MS;
    assert.equal(overdueDays(rec, T0), 0);
  });
  it("counts days past the due date", () => {
    const rec = emptySrsRecord();
    rec.due = T0 - 3 * DAY_MS;
    assert.ok(overdueDays(rec, T0) >= 2);
  });
});
