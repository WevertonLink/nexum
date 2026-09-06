/**
 * 4-dimensional knowledge evidence, ported from NeuroLab v2's
 * `04-learning-model.js`. Each (scope, dimension) tracks an EMA of results
 * weighted by source — a review answer moves the needle harder than a
 * self-rating, and prediction on a pre-read topic doesn't outweigh a real
 * quiz. The scope naming (`T:` for topic, `M:` for module) matters at commit
 * time: only `T:` scopes reach the SRS scheduler.
 */

export const KNOWLEDGE_DIMS = [
  {
    id: "recognition",
    label: "Reconhecimento",
    short: "Reconhecer",
    desc: "Identificar termos, definições e distinções básicas.",
  },
  {
    id: "location",
    label: "Localização",
    short: "Localizar",
    desc: "Saber onde uma estrutura, célula ou processo se encontra.",
  },
  {
    id: "causality",
    label: "Explicação causal",
    short: "Explicar",
    desc: "Reconstruir por que uma etapa leva à seguinte.",
  },
  {
    id: "application",
    label: "Aplicação",
    short: "Aplicar",
    desc: "Usar o conhecimento em uma situação nova.",
  },
] as const;

export type KnowledgeDim = (typeof KNOWLEDGE_DIMS)[number]["id"];
export const KNOWLEDGE_DIM_IDS: readonly KnowledgeDim[] = KNOWLEDGE_DIMS.map((d) => d.id);

export type EvidenceSource =
  | "review"
  | "mini-quiz"
  | "diagram"
  | "module-quiz"
  | "prediction"
  | "counterfactual"
  | "domain-case"
  | "self-rate";

/**
 * Prediction is .34 (not .16) because in NL v2 it fires during review, not as
 * a blind pre-test — errors there ARE evidence of failed retrieval. Kept
 * verbatim to preserve calibration.
 */
export const EVIDENCE_WEIGHTS: Record<EvidenceSource, number> = {
  review: 0.48,
  "mini-quiz": 0.38,
  diagram: 0.38,
  "module-quiz": 0.34,
  prediction: 0.34,
  counterfactual: 0.32,
  "domain-case": 0.3,
  "self-rate": 0.22,
};

const DEFAULT_WEIGHT = 0.28;

export function evidenceWeight(source: EvidenceSource | string): number {
  return (EVIDENCE_WEIGHTS as Record<string, number>)[source] ?? DEFAULT_WEIGHT;
}

export type EvidenceRecord = {
  score: number;
  attempts: number;
  correct: number;
  best: number;
  last: number;
  updatedAt: number;
  sources: Partial<Record<EvidenceSource, number>>;
};

export function emptyEvidence(): EvidenceRecord {
  return { score: 0, attempts: 0, correct: 0, best: 0, last: 0, updatedAt: 0, sources: {} };
}

function clampKnowledge(v: number | boolean): number {
  const n = typeof v === "boolean" ? (v ? 1 : 0) : Number(v);
  if (!isFinite(n)) return 0;
  return Math.max(0, Math.min(1, n));
}

/**
 * EMA update: first attempt seeds the score, subsequent attempts blend with
 * the source weight. Sources counter tracks *where* evidence came from — the
 * UI uses it to justify a score ("mostly from mini-quizzes, one review").
 */
export function recordEvidence(
  prev: EvidenceRecord | null,
  result: number | boolean,
  source: EvidenceSource,
  now: number = Date.now(),
): EvidenceRecord {
  const cur: EvidenceRecord = prev ? { ...prev, sources: { ...prev.sources } } : emptyEvidence();
  const r = clampKnowledge(result);
  const w = evidenceWeight(source);
  cur.score = cur.attempts === 0 ? r : cur.score * (1 - w) + r * w;
  cur.attempts += 1;
  cur.correct += r;
  cur.best = Math.max(cur.best, r);
  cur.last = r;
  cur.updatedAt = now;
  cur.sources[source] = (cur.sources[source] ?? 0) + 1;
  return cur;
}

/**
 * Guess a question's dimension from prompt text. Regex ported verbatim from
 * NL v2 — the boundary anchors on `\bfica\b` and `\bdepende\b` fix 6 questions
 * that used to route to the wrong dimension (`fica` matched inside `codifica`,
 * `depende` inside `dependente`). Do not "clean up" without re-running the
 * ported test suite.
 */
export function inferDimension(prompt: string, difficulty: number = 0): KnowledgeDim {
  const t = String(prompt || "")
    .replace(/<[^>]*>/g, " ")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
  const strongLocation =
    /(onde\b|em qual (?:regiao|estrutura|lobo|nucleo|parte|area)|qual estrutura|localizad|\bfica\b|membrana (?:pre|pos)|pre-sinaptic|pos-sinaptic)/;
  const causal =
    /(por que|porque|mecanismo|caus|consequ|o que acontece|o que ocorr|se .*?(?:bloque|inib|les|aument|diminu|remov)|leva a|resulta|permite|\bdepende\b|sequencia|primeiro.*depois|feedback|erro de previsao|como .*? produz)/;
  const application =
    /(caso\b|cenario|paciente|uma pessoa|durante\b|situacao|qual seria|prever|aplicar|exemplo|comparad|tende a|diante de|ao encontrar|na pratica)/;
  if (strongLocation.test(t)) return "location";
  if (causal.test(t)) return "causality";
  if (application.test(t)) return "application";
  const lvl = Number(difficulty) || 0;
  if (lvl >= 2) return "causality";
  if (lvl === 1) return "application";
  return "recognition";
}

export type EvidenceScope = `T:${string}` | `M:${string}`;

export function topicScope(key: string): `T:${string}` {
  return `T:${key}`;
}

export function moduleScope(id: string): `M:${string}` {
  return `M:${id}`;
}

/** Weakest tried dimension, useful to prioritize which one to test next. */
export function weakestDimension(
  scores: Partial<Record<KnowledgeDim, number | null>>,
): { dim: KnowledgeDim; score: number | null } {
  const tried = KNOWLEDGE_DIM_IDS.filter((d) => scores[d] !== null && scores[d] !== undefined);
  if (!tried.length) return { dim: KNOWLEDGE_DIM_IDS[0], score: null };
  const sorted = [...tried].sort((a, b) => (scores[a] ?? 1) - (scores[b] ?? 1));
  return { dim: sorted[0], score: scores[sorted[0]] ?? null };
}
