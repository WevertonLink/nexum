import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { processAnswer } from "./answer-pipeline.ts";
import { DEFAULT_INTERVALS } from "./review.ts";

const T0 = 1_700_000_000_000;

function initial() {
  return {
    modules: {},
    concepts: {},
    intervals: DEFAULT_INTERVALS,
  };
}

/** deriveState clamps UNSEEN→SEEN unconditionally; tests judging state
 * transitions must start from EXPOSED so the answer effect is visible. */
function exposed(cid: string) {
  return {
    modules: {},
    concepts: {
      [cid]: {
        state: "EXPOSED" as const,
        scores: { comprehension: 0, recall: 0, contrast: 0, application: 0 },
        nextReviewAt: 0,
        intervalDays: 0,
        originModule: "module_01",
        seenAt: T0 - 10_000,
        hintsUsedTotal: 0,
        confusionWith: [] as string[],
      },
    },
    intervals: DEFAULT_INTERVALS,
  };
}

describe("processAnswer", () => {
  it("bumps comprehension on correct recognition (no hints)", () => {
    const out = processAnswer(
      exposed("c1"),
      {
        questionId: "q1",
        moduleId: "module_01",
        conceptIds: ["c1"],
        type: "recognition",
        correct: true,
        hintsUsed: 0,
        confidence: 2,
      },
      T0,
    );
    assert.ok(out.modules["module_01"]!.comprehension > 0);
    assert.equal(out.modules["module_01"]!.questionsAnswered.length, 1);
    assert.equal(out.concepts["c1"]!.state, "EXPOSED");
    assert.ok(out.xpAwarded >= 25);
  });

  it("penalises wrong answers with negative delta", () => {
    const out = processAnswer(
      exposed("c1"),
      {
        questionId: "q2",
        moduleId: "module_01",
        conceptIds: ["c1"],
        type: "recall",
        correct: false,
        hintsUsed: 0,
        confidence: 3,
      },
      T0,
    );
    assert.equal(out.modules["module_01"]!.recall, 0);
    assert.equal(out.concepts["c1"]!.state, "RECALL_WEAK");
  });

  it("routes misconception wrong to CONFUSED", () => {
    const out = processAnswer(
      exposed("c1"),
      {
        questionId: "q3",
        moduleId: "module_01",
        conceptIds: ["c1"],
        type: "misconception",
        correct: false,
        hintsUsed: 0,
        confidence: 2,
      },
      T0,
    );
    assert.equal(out.concepts["c1"]!.state, "CONFUSED");
  });

  it("halves the score gain when hints are used", () => {
    const noHint = processAnswer(
      initial(),
      {
        questionId: "q4",
        moduleId: "module_01",
        conceptIds: ["c1"],
        type: "recognition",
        correct: true,
        hintsUsed: 0,
        confidence: 2,
      },
      T0,
    );
    const oneHint = processAnswer(
      initial(),
      {
        questionId: "q4",
        moduleId: "module_01",
        conceptIds: ["c1"],
        type: "recognition",
        correct: true,
        hintsUsed: 1,
        confidence: 2,
      },
      T0,
    );
    assert.ok(
      noHint.concepts["c1"]!.scores.comprehension >
        oneHint.concepts["c1"]!.scores.comprehension,
    );
  });

  it("dedupes questionsAnswered", () => {
    const first = processAnswer(
      initial(),
      {
        questionId: "q5",
        moduleId: "module_01",
        conceptIds: ["c1"],
        type: "recognition",
        correct: true,
        hintsUsed: 0,
        confidence: 2,
      },
      T0,
    );
    const second = processAnswer(
      { ...initial(), modules: first.modules, concepts: first.concepts },
      {
        questionId: "q5",
        moduleId: "module_01",
        conceptIds: ["c1"],
        type: "recognition",
        correct: true,
        hintsUsed: 0,
        confidence: 2,
      },
      T0 + 1000,
    );
    assert.equal(second.modules["module_01"]!.questionsAnswered.length, 1);
  });

  it("advances multiple concepts in one answer", () => {
    const out = processAnswer(
      initial(),
      {
        questionId: "q6",
        moduleId: "module_02",
        conceptIds: ["c1", "c2", "c3"],
        type: "application",
        correct: true,
        hintsUsed: 0,
        confidence: 3,
      },
      T0,
    );
    assert.equal(Object.keys(out.concepts).length, 3);
    for (const id of ["c1", "c2", "c3"]) {
      assert.ok(out.concepts[id]!.scores.application > 0);
    }
  });

  it("tracks hintsUsedTotal per concept across answers", () => {
    const s1 = processAnswer(
      initial(),
      {
        questionId: "q7",
        moduleId: "module_01",
        conceptIds: ["c1"],
        type: "recognition",
        correct: true,
        hintsUsed: 2,
        confidence: 2,
      },
      T0,
    );
    const s2 = processAnswer(
      { ...initial(), modules: s1.modules, concepts: s1.concepts },
      {
        questionId: "q8",
        moduleId: "module_01",
        conceptIds: ["c1"],
        type: "recall",
        correct: true,
        hintsUsed: 1,
        confidence: 2,
      },
      T0 + 5000,
    );
    assert.equal(s2.concepts["c1"]!.hintsUsedTotal, 3);
  });

  it("does not mutate previous state", () => {
    const prev = initial();
    const before = JSON.stringify(prev);
    processAnswer(
      prev,
      {
        questionId: "q9",
        moduleId: "module_01",
        conceptIds: ["c1"],
        type: "recognition",
        correct: true,
        hintsUsed: 0,
        confidence: 2,
      },
      T0,
    );
    assert.equal(JSON.stringify(prev), before);
  });
});
