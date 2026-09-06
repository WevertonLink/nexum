import { CONCEPTS } from "../content/concepts";
import { GLOSSARY } from "../content/glossary";
import { CHALLENGES } from "../content/diagnostic";
import { MODULES } from "../content/modules";
import { STAGES } from "../content/stages";
import { MYTHS } from "../content/myths";

export type ValidationIssue = { severity: "error" | "warn"; message: string };

export function validateContent(): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const moduleIds = new Set(MODULES.map((m) => m.id));
  const conceptIds = new Set(CONCEPTS.map((c) => c.id));

  if (MODULES.length !== 32) {
    issues.push({ severity: "error", message: `Esperados 32 módulos, encontrados ${MODULES.length}` });
  }

  const numbers = MODULES.map((m) => m.number);
  for (let i = 1; i <= 32; i++) {
    if (!numbers.includes(i)) {
      issues.push({ severity: "error", message: `Falta o módulo número ${i}` });
    }
  }

  for (const stage of STAGES) {
    for (const id of stage.moduleIds) {
      if (!moduleIds.has(id)) {
        issues.push({ severity: "error", message: `Etapa ${stage.id} aponta para ${id} inexistente` });
      }
    }
  }

  const adj: Record<string, string[]> = {};
  for (const m of MODULES) {
    if (!m.title) issues.push({ severity: "error", message: `${m.id} sem título` });
    if (!m.objective) issues.push({ severity: "error", message: `${m.id} sem objetivo` });
    if (!m.introduction) issues.push({ severity: "error", message: `${m.id} sem introdução` });
    if (m.questions.length === 0) issues.push({ severity: "error", message: `${m.id} sem questões` });
    if (m.blocks.length === 0) issues.push({ severity: "error", message: `${m.id} sem blocos` });
    adj[m.id] = m.prerequisites;

    const types = new Set(m.questions.map((q) => q.type));
    if (![...types].some((t) => t === "recall")) {
      issues.push({ severity: "warn", message: `${m.id} sem questão de recuperação` });
    }
    if (![...types].some((t) => t === "misconception" || t === "limit" || t === "counterfactual")) {
      issues.push({ severity: "warn", message: `${m.id} sem questão de contraste` });
    }

    for (const pre of m.prerequisites) {
      if (!moduleIds.has(pre)) {
        issues.push({ severity: "error", message: `${m.id} depende de ${pre} inexistente` });
      }
    }
    for (const rel of m.relatedModules) {
      if (!moduleIds.has(rel)) {
        issues.push({ severity: "error", message: `${m.id} relaciona ${rel} inexistente` });
      }
    }
    for (const cid of m.concepts) {
      if (!conceptIds.has(cid)) {
        issues.push({ severity: "error", message: `${m.id} referencia conceito ${cid} inexistente` });
      }
    }
    for (const q of m.questions) {
      if (!q.explanation) {
        issues.push({ severity: "error", message: `Questão ${q.id} sem explicação` });
      }
      if (!q.hint1 || !q.hint2 || !q.hint3) {
        issues.push({ severity: "error", message: `Questão ${q.id} sem as três pistas` });
      }
      for (const cid of q.conceptIds) {
        if (!conceptIds.has(cid)) {
          issues.push({ severity: "error", message: `Questão ${q.id} conceito ${cid} inexistente` });
        }
      }
      if (q.options && q.options.length > 0) {
        const ids = q.options.map((o) => o.id);
        const answers = q.correctAnswer.split(",").map((s) => s.trim());
        for (const a of answers) {
          if (a !== "open" && !ids.includes(a)) {
            issues.push({
              severity: "error",
              message: `Questão ${q.id} correctAnswer "${a}" não existe nas opções`,
            });
          }
        }
      }
    }
  }

  if (hasCycle(adj)) {
    issues.push({ severity: "error", message: "Dependência circular entre módulos" });
  }

  for (const c of CONCEPTS) {
    if (!moduleIds.has(c.originModule)) {
      issues.push({ severity: "error", message: `Conceito ${c.id} origina de módulo inexistente` });
    }
    for (const pre of c.prerequisites) {
      if (!conceptIds.has(pre)) {
        issues.push({ severity: "error", message: `Conceito ${c.id} pré-requisito ${pre} inexistente` });
      }
    }
    for (const rel of c.related) {
      if (!conceptIds.has(rel)) {
        issues.push({ severity: "error", message: `Conceito ${c.id} relacionado ${rel} inexistente` });
      }
    }
  }

  for (const g of GLOSSARY) {
    if (g.conceptId && !conceptIds.has(g.conceptId)) {
      issues.push({ severity: "warn", message: `Glossário ${g.id} aponta para conceito inexistente` });
    }
  }

  for (const myth of MYTHS) {
    for (const cid of myth.conceptIds) {
      if (!conceptIds.has(cid)) {
        issues.push({ severity: "error", message: `Mito ${myth.id} conceito ${cid} inexistente` });
      }
    }
  }

  for (const ch of CHALLENGES) {
    for (const cid of ch.conceptIds) {
      if (!conceptIds.has(cid)) {
        issues.push({ severity: "error", message: `Desafio ${ch.id} conceito ${cid} inexistente` });
      }
    }
  }

  return issues;
}

function hasCycle(adj: Record<string, string[]>): boolean {
  const visiting = new Set<string>();
  const seen = new Set<string>();
  const visit = (n: string): boolean => {
    if (visiting.has(n)) return true;
    if (seen.has(n)) return false;
    visiting.add(n);
    for (const m of adj[n] ?? []) {
      if (visit(m)) return true;
    }
    visiting.delete(n);
    seen.add(n);
    return false;
  };
  return Object.keys(adj).some(visit);
}
