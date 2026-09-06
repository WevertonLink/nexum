import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  EVIDENCE_WEIGHTS,
  KNOWLEDGE_DIM_IDS,
  emptyEvidence,
  evidenceWeight,
  inferDimension,
  moduleScope,
  recordEvidence,
  topicScope,
  weakestDimension,
} from "./evidence.ts";

describe("evidence weights", () => {
  it("assigns per-source weights ported verbatim from NL v2", () => {
    assert.equal(EVIDENCE_WEIGHTS.review, 0.48);
    assert.equal(EVIDENCE_WEIGHTS["mini-quiz"], 0.38);
    assert.equal(EVIDENCE_WEIGHTS.prediction, 0.34);
    assert.equal(EVIDENCE_WEIGHTS["self-rate"], 0.22);
  });
  it("unknown source falls back to a default weight", () => {
    assert.ok(evidenceWeight("banana") > 0);
    assert.ok(evidenceWeight("banana") < 0.5);
  });
});

describe("recordEvidence", () => {
  it("first attempt seeds the score directly", () => {
    const rec = recordEvidence(null, 1, "review", 100);
    assert.equal(rec.attempts, 1);
    assert.equal(rec.score, 1);
    assert.equal(rec.best, 1);
    assert.equal(rec.sources.review, 1);
  });
  it("subsequent attempts blend via EMA weight", () => {
    const first = recordEvidence(null, 0, "review", 100);
    const second = recordEvidence(first, 1, "review", 200);
    assert.ok(second.score > 0);
    assert.ok(second.score < 1);
    assert.equal(second.attempts, 2);
  });
  it("clamps result to [0,1]", () => {
    const rec = recordEvidence(null, 5, "mini-quiz", 100);
    assert.equal(rec.score, 1);
  });
  it("tracks source counters cumulatively", () => {
    let rec = recordEvidence(null, 1, "review", 100);
    rec = recordEvidence(rec, 1, "review", 200);
    rec = recordEvidence(rec, 1, "mini-quiz", 300);
    assert.equal(rec.sources.review, 2);
    assert.equal(rec.sources["mini-quiz"], 1);
  });
});

describe("inferDimension", () => {
  it("routes 'onde fica' to location", () => {
    assert.equal(inferDimension("Onde fica o hipocampo?"), "location");
  });
  it("routes 'por que' to causality", () => {
    assert.equal(inferDimension("Por que a dopamina sinaliza erro de previsão?"), "causality");
  });
  it("routes 'em um paciente' to application", () => {
    assert.equal(inferDimension("Em um paciente com lesão frontal, o que esperar?"), "application");
  });
  it("falls back to recognition for plain definitional prompts", () => {
    assert.equal(inferDimension("O que significa neurônio?"), "recognition");
  });
  it("respects q.dim if the prompt lacks strong signals — difficulty 2 → causality", () => {
    assert.equal(inferDimension("Sobre o tópico", 2), "causality");
  });
  it("does NOT trigger location on 'codifica' (past regression)", () => {
    assert.notEqual(inferDimension("O que codifica o DNA?"), "location");
  });
});

describe("scope helpers", () => {
  it("prefixes with T: and M:", () => {
    assert.equal(topicScope("neuronio-0"), "T:neuronio-0");
    assert.equal(moduleScope("module_01"), "M:module_01");
  });
});

describe("weakestDimension", () => {
  it("returns first dim with null when nothing has been tried", () => {
    const scores: Record<string, number | null> = {};
    for (const d of KNOWLEDGE_DIM_IDS) scores[d] = null;
    const res = weakestDimension(scores);
    assert.equal(res.score, null);
    assert.equal(res.dim, KNOWLEDGE_DIM_IDS[0]);
  });
  it("returns the lowest-scoring tried dimension", () => {
    const res = weakestDimension({
      recognition: 0.9,
      location: 0.4,
      causality: 0.7,
      application: null,
    });
    assert.equal(res.dim, "location");
    assert.equal(res.score, 0.4);
  });
});

describe("emptyEvidence", () => {
  it("has zero attempts and empty sources", () => {
    const e = emptyEvidence();
    assert.equal(e.attempts, 0);
    assert.deepEqual(e.sources, {});
  });
});
