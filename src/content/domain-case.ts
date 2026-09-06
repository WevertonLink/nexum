/**
 * Integrated domain cases: NL v2's `DOMAIN_CASES`. Each case crosses ≥3
 * modules — the point is to force learners to bring pieces from different
 * areas together, not to test one module in isolation. Same structural
 * shape as `Counterfactual`, but with a `modules[]` array and no
 * `lessonHint`: cases don't belong to a single lesson.
 */
export type DomainCase = {
  id: string;
  title: string;
  /** Module ids this case spans — ≥3 by design. */
  modules: string[];
  scenario: string;
  question: string;
  options: string[];
  correct: number;
  optionFeedback: string[];
  explanation: string;
  chain: string[];
  extend: { q: string; a: string };
};

import { NL_DOMAIN_CASES } from "./generated/neurolab-domain-cases.ts";

export const DOMAIN_CASES: DomainCase[] = [...NL_DOMAIN_CASES];

export const DOMAIN_CASE_BY_ID: Record<string, DomainCase> =
  Object.fromEntries(DOMAIN_CASES.map((c) => [c.id, c]));

export function casesForModule(moduleId: string): DomainCase[] {
  return DOMAIN_CASES.filter((c) => c.modules.includes(moduleId));
}

export function casesForConcepts(_conceptIds: string[]): DomainCase[] {
  return DOMAIN_CASES;
}
