import { createFileRoute, Link } from "@tanstack/react-router";
import { CONCEPTS } from "@/content/concepts";
import { LEVEL_LABEL } from "@/content/types";
import { useAppStore } from "@/store/app-store";

export const Route = createFileRoute("/conceitos")({ component: ConceptsPage });

function ConceptsPage() {
  const concepts = useAppStore((s) => s.concepts);
  const grouped = CONCEPTS.reduce<Record<string, typeof CONCEPTS>>((acc, c) => {
    (acc[c.level] ??= []).push(c);
    return acc;
  }, {});
  return (
    <div className="space-y-8 pt-2">
      <header>
        <h1 className="font-display text-3xl">Conceitos</h1>
        <p className="mt-1 text-sm text-fg-muted">
          Biblioteca navegável. Abrir aqui não marca o módulo como concluído.
        </p>
      </header>
      {Object.entries(grouped).map(([level, list]) => (
        <section key={level}>
          <h2 className="text-xs font-medium uppercase tracking-wide text-fg-subtle">
            {LEVEL_LABEL[level as keyof typeof LEVEL_LABEL]}
          </h2>
          <ul className="mt-2 divide-y divide-border rounded-xl border border-border bg-bg-elevated">
            {list.map((c) => {
              const st = concepts[c.id]?.state ?? "UNSEEN";
              return (
                <li key={c.id}>
                  <Link
                    to="/conceito/$conceptId"
                    params={{ conceptId: c.id }}
                    className="flex items-baseline justify-between gap-3 px-4 py-3"
                  >
                    <span>{c.name}</span>
                    <span className="text-xs text-fg-subtle">{labelState(st)}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}

function labelState(s: string) {
  const map: Record<string, string> = {
    UNSEEN: "não visto",
    SEEN: "visto",
    EXPOSED: "exposto",
    UNDERSTOOD: "compreendido",
    RECALL_WEAK: "recuperação frágil",
    CONFUSED: "confusão",
    APPLIED: "aplicado",
    MASTERED: "consolidado",
  };
  return map[s] ?? s;
}
