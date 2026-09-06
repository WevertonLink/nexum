import test from "node:test";
import assert from "node:assert/strict";
import { COUNTERFACTUALS } from "../../content/counterfactual.ts";
import { DOMAIN_CASES } from "../../content/domain-case.ts";
import {
  buildTodayQueue,
  counterfactualStatus,
  moduleConnections,
  suggestCases,
  suggestCounterfactuals,
} from "./domain-utils.ts";

test("counterfactualStatus reflects last attempt", () => {
  assert.equal(counterfactualStatus(undefined), "novo");
  assert.equal(
    counterfactualStatus({
      attempts: [{ at: 1, correct: true, selected: 0 }],
      bestAt: 1,
      lastCorrectAt: 1,
    }),
    "consolidado",
  );
  assert.equal(
    counterfactualStatus({
      attempts: [
        { at: 1, correct: true, selected: 0 },
        { at: 2, correct: false, selected: 1 },
      ],
      bestAt: 1,
      lastCorrectAt: 1,
    }),
    "revisar",
    "an error after success flips status to revisar",
  );
});

test("suggestCounterfactuals prefers new items, then revisit, then any", () => {
  const consolidated = COUNTERFACTUALS[0]!;
  const revisit = COUNTERFACTUALS[1]!;
  const history = {
    [consolidated.id]: {
      attempts: [{ at: 1, correct: true, selected: 0 }],
      bestAt: 1,
      lastCorrectAt: 1,
    },
    [revisit.id]: {
      attempts: [{ at: 2, correct: false, selected: 0 }],
      bestAt: null,
      lastCorrectAt: null,
    },
  };
  // Full ordering: novos first, then revisit, then any (which is the whole
  // list). The consolidated item only shows up in that trailing "any" section.
  const full = suggestCounterfactuals(history, COUNTERFACTUALS.length);
  assert.equal(full.length, COUNTERFACTUALS.length);
  const idxRevisit = full.indexOf(revisit.id);
  const idxConsolidated = full.indexOf(consolidated.id);
  assert.ok(idxRevisit < idxConsolidated, "revisit must precede consolidated");
  assert.equal(idxConsolidated, COUNTERFACTUALS.length - 1, "consolidated comes last");
});

test("suggestCases returns up to N unique ids", () => {
  const out = suggestCases({}, 5);
  assert.equal(out.length, Math.min(5, DOMAIN_CASES.length));
  assert.equal(new Set(out).size, out.length, "no dupes");
});

test("buildTodayQueue mixes counterfactuals and cases, cap 4", () => {
  const queue = buildTodayQueue({}, {});
  assert.ok(queue.length <= 4);
  const kinds = new Set(queue.map((q) => q.kind));
  assert.ok(kinds.has("counterfactual"));
  assert.ok(kinds.has("case"));
});

test("moduleConnections returns non-negative shared concepts", () => {
  const conns = moduleConnections();
  for (const c of conns) {
    assert.ok(c.sharedConceptIds.length >= 1);
    assert.notEqual(c.moduleId, c.peerId);
  }
});
