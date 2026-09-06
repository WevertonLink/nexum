/**
 * TS entry for `audit-content.mjs`. Kept as a separate file so ESM
 * --experimental-strip-types can parse it (relative imports need `.ts`).
 * Uses direct file imports (not `@/` alias) — tsconfig paths aren't
 * resolved by plain node.
 */
import { CONCEPTS } from "../src/content/concepts.ts";
import { MODULES, MODULE_BY_ID } from "../src/content/modules/index.ts";
import { COUNTERFACTUALS } from "../src/content/counterfactual.ts";
import { DOMAIN_CASES } from "../src/content/domain-case.ts";

type Issue = { severity: "error" | "warning"; msg: string };
const issues: Issue[] = [];
const err = (msg: string) => issues.push({ severity: "error", msg });
const warn = (msg: string) => issues.push({ severity: "warning", msg });

const conceptIds = new Set(CONCEPTS.map((c) => c.id));
const moduleIds = new Set(MODULES.map((m) => m.id));

// Duplicates.
const cSeen = new Set<string>();
for (const c of CONCEPTS) {
  if (cSeen.has(c.id)) err(`Duplicate concept id: ${c.id}`);
  cSeen.add(c.id);
}
const mSeen = new Set<string>();
for (const m of MODULES) {
  if (mSeen.has(m.id)) err(`Duplicate module id: ${m.id}`);
  mSeen.add(m.id);
}

// Module → concept + module refs.
for (const m of MODULES) {
  for (const cid of m.concepts) {
    if (!conceptIds.has(cid)) err(`Module ${m.id}: concept "${cid}" not found`);
  }
  for (const pid of m.prerequisites) {
    if (!moduleIds.has(pid)) err(`Module ${m.id}: prerequisite "${pid}" not found`);
  }
  for (const rid of m.relatedModules ?? []) {
    if (!moduleIds.has(rid)) warn(`Module ${m.id}: related module "${rid}" not found`);
  }
  for (const b of m.blocks) {
    for (const cid of b.conceptIds ?? []) {
      if (!conceptIds.has(cid)) err(`Module ${m.id} block ${b.id}: concept "${cid}" not found`);
    }
  }
  for (const q of m.questions) {
    if (q.moduleId !== m.id) err(`Question ${q.id}: moduleId=${q.moduleId} inside ${m.id}`);
    for (const cid of q.conceptIds) {
      if (!conceptIds.has(cid)) err(`Question ${q.id}: concept "${cid}" not found`);
    }
  }
  if (m.questions.length < 5) {
    warn(`Module ${m.id}: only ${m.questions.length} questions (want ≥5)`);
  }
}

// Concept → prereq + originModule.
for (const c of CONCEPTS) {
  if (c.originModule && !moduleIds.has(c.originModule)) {
    warn(`Concept ${c.id}: originModule "${c.originModule}" not found`);
  }
  for (const p of c.prerequisites) {
    if (!conceptIds.has(p)) warn(`Concept ${c.id}: prereq "${p}" not found`);
  }
}

// Counterfactual + case refs (allow unknown_* ids from migration fallback).
for (const cf of COUNTERFACTUALS) {
  if (cf.moduleId.startsWith("unknown_")) {
    warn(`Counterfactual ${cf.id}: unmapped module "${cf.moduleId}"`);
    continue;
  }
  if (!MODULE_BY_ID[cf.moduleId]) warn(`Counterfactual ${cf.id}: module "${cf.moduleId}" not found`);
}
for (const dc of DOMAIN_CASES) {
  for (const mid of dc.modules) {
    if (mid.startsWith("unknown_")) {
      warn(`Case ${dc.id}: unmapped module "${mid}"`);
      continue;
    }
    if (!MODULE_BY_ID[mid]) warn(`Case ${dc.id}: module "${mid}" not found`);
  }
}

const errors = issues.filter((i) => i.severity === "error");
const warnings = issues.filter((i) => i.severity === "warning");
for (const w of warnings) console.log(`  warning: ${w.msg}`);
for (const e of errors) console.log(`  error:   ${e.msg}`);
console.log(
  `[audit:content] modules=${MODULES.length} concepts=${CONCEPTS.length} counterfactuals=${COUNTERFACTUALS.length} cases=${DOMAIN_CASES.length}`,
);
console.log(`[audit:content] ${errors.length} errors, ${warnings.length} warnings`);
if (errors.length > 0) process.exit(1);
