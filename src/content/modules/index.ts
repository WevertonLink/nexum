import type { ModuleContent, Question } from "../types.ts";
import { STAGE_1_MODULES } from "./stage-1.ts";
import { STAGE_2_MODULES } from "./stage-2.ts";
import { STAGE_3_MODULES } from "./stage-3.ts";
import { STAGE_4_MODULES } from "./stage-4.ts";
import { blocksFor } from "./extras.ts";

export { MODULE_IDS } from "./ids.ts";
export type { ModuleId } from "./ids.ts";

export const MODULES: ModuleContent[] = [
  ...STAGE_1_MODULES,
  ...STAGE_2_MODULES,
  ...STAGE_3_MODULES,
  ...STAGE_4_MODULES,
].map((m) => ({ ...m, blocks: blocksFor(m.id, m.blocks) }));

export const MODULE_BY_ID: Record<string, ModuleContent> = Object.fromEntries(
  MODULES.map((m) => [m.id, m]),
);

if (MODULES.length !== 32) {
  throw new Error(
    `Nexum content invariant broken: expected 32 modules, found ${MODULES.length}. ` +
      `Check STAGE_{1..4}_MODULES exports.`,
  );
}

export const ALL_QUESTIONS: Question[] = MODULES.flatMap((m) => m.questions);

export function questionsForConcept(conceptId: string): Question[] {
  return ALL_QUESTIONS.filter((q) => q.conceptIds.includes(conceptId));
}

export function moduleByNumber(n: number): ModuleContent | undefined {
  return MODULES.find((m) => m.number === n);
}

const TYPE_ORDER: Record<string, number> = {
  recall: 0,
  recognition: 1,
  relation: 2,
  misconception: 3,
  counterfactual: 4,
  limit: 5,
  application: 6,
  integration: 7,
};

export function orderedQuestions(mod: ModuleContent): Question[] {
  return [...mod.questions].sort(
    (a, b) => (TYPE_ORDER[a.type] ?? 9) - (TYPE_ORDER[b.type] ?? 9),
  );
}
