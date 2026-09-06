import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { applyAnswerToScores, emptyScores, meetsMastery, masteryScore } from "./mastery";
import { scheduleReview } from "./review";
import { validateContent } from "./validate";

describe("mastery", () => {
  it("increases scores on independent correct answers", () => {
    const next = applyAnswerToScores(emptyScores(), {
      correct: true,
      type: "recall",
      hintsUsed: 0,
      confidence: 3,
    });
    assert.ok(next.recall > 0);
  });

  it("does not claim mastery on empty scores", () => {
    assert.equal(meetsMastery(emptyScores()), false);
    assert.equal(masteryScore(emptyScores()), 0);
  });
});

describe("review schedule", () => {
  it("schedules severe errors sooner than independent hits", () => {
    const now = 1_700_000_000_000;
    const bad = scheduleReview(
      { correct: false, hintsUsed: 0, confidence: 3, confused: false, severeError: true },
      now,
    );
    const good = scheduleReview(
      { correct: true, hintsUsed: 0, confidence: 2, confused: false, severeError: false },
      now,
    );
    assert.ok(bad.nextReviewAt < good.nextReviewAt);
    assert.equal(bad.state, "RECALL_WEAK");
  });
});

describe("content validation", () => {
  it("has 32 modules with valid references", () => {
    const issues = validateContent().filter((i) => i.severity === "error");
    assert.deepEqual(issues, []);
  });
});
