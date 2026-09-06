/**
 * Shared selectors and queue builders for Modo Domínio tabs. Keeping the
 * data-shaping here means every tab reads from the same source of truth —
 * the store slice stays lean and the queue heuristics don't drift per tab.
 */
import { COUNTERFACTUALS } from "../../content/counterfactual.ts";
import { DOMAIN_CASES } from "../../content/domain-case.ts";
import { CONCEPT_BY_ID } from "../../content/concepts.ts";
import { MODULES, MODULE_BY_ID } from "../../content/modules/index.ts";
import type { DomainItemHistory, DomainSessionItem } from "../../store/app-store.ts";
import type { KnowledgeDim } from "../../engine/evidence.ts";
import { KNOWLEDGE_DIMS } from "../../engine/evidence.ts";
import { isDue, overdueDays, type SrsRecord } from "../../engine/srs.ts";

export type DueReview = {
  conceptId: string;
  dim: KnowledgeDim;
  record: SrsRecord;
  overdue: number;
};

export function collectDueReviews(
  srsRecords: Record<string, Partial<Record<KnowledgeDim, SrsRecord>>>,
  now: number = Date.now(),
): DueReview[] {
  const out: DueReview[] = [];
  for (const [conceptId, group] of Object.entries(srsRecords)) {
    for (const dim of KNOWLEDGE_DIMS) {
      const rec = group[dim.id];
      if (!rec) continue;
      if (isDue(rec, now)) {
        out.push({ conceptId, dim: dim.id, record: rec, overdue: overdueDays(rec, now) });
      }
    }
  }
  out.sort((a, b) => b.overdue - a.overdue || a.record.box - b.record.box);
  return out;
}

export type CounterfactualStatus = "novo" | "consolidado" | "revisar";

export function counterfactualStatus(history?: DomainItemHistory): CounterfactualStatus {
  if (!history || history.attempts.length === 0) return "novo";
  const last = history.attempts[history.attempts.length - 1]!;
  if (last.correct) return "consolidado";
  return "revisar";
}

export function caseStatus(history?: DomainItemHistory): CounterfactualStatus {
  return counterfactualStatus(history);
}

/**
 * Pick a small set of counterfactuals / cases that best serve today: newly
 * unseen items first, then items previously errored. Falls back to any item.
 */
export function suggestCounterfactuals(
  history: Record<string, DomainItemHistory>,
  n: number,
): string[] {
  const newIds = COUNTERFACTUALS.filter((cf) => !history[cf.id]).map((cf) => cf.id);
  const revisitIds = COUNTERFACTUALS.filter(
    (cf) => counterfactualStatus(history[cf.id]) === "revisar",
  ).map((cf) => cf.id);
  return [...newIds, ...revisitIds, ...COUNTERFACTUALS.map((cf) => cf.id)]
    .filter((id, i, all) => all.indexOf(id) === i)
    .slice(0, n);
}

export function suggestCases(
  history: Record<string, DomainItemHistory>,
  n: number,
): string[] {
  const newIds = DOMAIN_CASES.filter((c) => !history[c.id]).map((c) => c.id);
  const revisitIds = DOMAIN_CASES.filter(
    (c) => counterfactualStatus(history[c.id]) === "revisar",
  ).map((c) => c.id);
  return [...newIds, ...revisitIds, ...DOMAIN_CASES.map((c) => c.id)]
    .filter((id, i, all) => all.indexOf(id) === i)
    .slice(0, n);
}

/** 4-item mixed queue: 2 counterfactuals + 2 cases (or fills what's available). */
export function buildTodayQueue(
  counterHistory: Record<string, DomainItemHistory>,
  caseHistory: Record<string, DomainItemHistory>,
): DomainSessionItem[] {
  const cfs = suggestCounterfactuals(counterHistory, 2).map<DomainSessionItem>((id) => ({
    kind: "counterfactual",
    id,
    status: "pending",
  }));
  const cs = suggestCases(caseHistory, 2).map<DomainSessionItem>((id) => ({
    kind: "case",
    id,
    status: "pending",
  }));
  const out: DomainSessionItem[] = [];
  const maxLen = Math.max(cfs.length, cs.length);
  for (let i = 0; i < maxLen; i++) {
    if (cfs[i]) out.push(cfs[i]!);
    if (cs[i]) out.push(cs[i]!);
  }
  return out.slice(0, 4);
}

export type ModuleConnection = {
  moduleId: string;
  peerId: string;
  sharedConceptIds: string[];
};

/** Build module ↔ module edges from concept overlap (≥1 shared concept). */
export function moduleConnections(): ModuleConnection[] {
  const out: ModuleConnection[] = [];
  for (let i = 0; i < MODULES.length; i++) {
    const m = MODULES[i]!;
    for (let j = i + 1; j < MODULES.length; j++) {
      const p = MODULES[j]!;
      const shared = m.concepts.filter((cid) => p.concepts.includes(cid));
      if (shared.length === 0) continue;
      out.push({ moduleId: m.id, peerId: p.id, sharedConceptIds: shared });
    }
  }
  out.sort((a, b) => b.sharedConceptIds.length - a.sharedConceptIds.length);
  return out;
}

export function conceptName(id: string): string {
  return CONCEPT_BY_ID[id]?.name ?? id;
}

export function moduleShort(id: string): string {
  const m = MODULE_BY_ID[id];
  return m ? `M${m.number} · ${m.shortTitle}` : id;
}
