/**
 * Domain-mode counterfactuals: NL v2's `DOMAIN_COUNTERFACTUALS`. Each item is
 * a "if X had gone differently, what breaks" prompt — four alternatives, per-
 * option feedback, and a chain-reconstruction step that surfaces the causal
 * story the learner is expected to build. `extend` is a follow-up Q/A shown
 * after the chain step commits, so a correct answer isn't the end.
 */
export type Counterfactual = {
  id: string;
  moduleId: string;
  /** Optional pointer to the lesson/topic the item originally belonged to. */
  lessonHint?: string;
  title: string;
  prompt: string;
  options: string[];
  correct: number;
  optionFeedback: string[];
  explanation: string;
  chain: string[];
  extend: { q: string; a: string };
};

import { NL_COUNTERFACTUALS } from "./generated/neurolab-counterfactuals.ts";

export const COUNTERFACTUALS: Counterfactual[] = [...NL_COUNTERFACTUALS];

export const COUNTERFACTUAL_BY_ID: Record<string, Counterfactual> =
  Object.fromEntries(COUNTERFACTUALS.map((c) => [c.id, c]));

export function counterfactualsForModule(moduleId: string): Counterfactual[] {
  return COUNTERFACTUALS.filter((c) => c.moduleId === moduleId);
}
