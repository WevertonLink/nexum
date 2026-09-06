import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { QuestionCard } from "@/components/question-card";
import { CONCEPT_BY_ID } from "@/content/concepts";
import { questionsForConcept } from "@/content/modules";
import { isOverdue } from "@/engine/review";
import { fragileConceptIds, useAppStore } from "@/store/app-store";

export const Route = createFileRoute("/revisoes")({ component: ReviewPage });

function ReviewPage() {
  const concepts = useAppStore((s) => s.concepts);
  const doubts = useAppStore((s) => s.doubts);
  const fragile = fragileConceptIds({ concepts, doubts });
  const due = Object.entries(concepts)
    .filter(([, c]) => c.nextReviewAt && isOverdue(c.nextReviewAt))
    .map(([id]) => id);
  const queue = Array.from(new Set([...due, ...fragile]));
  const [i, setI] = useState(0);
  const current = queue[i];
  const q = useMemo(
    () => (current ? questionsForConcept(current)[0] : undefined),
    [current],
  );

  return (
    <div className="space-y-6 pt-2">
      <header>
        <h1 className="font-display text-3xl">Revisão</h1>
        <p className="mt-1 text-sm text-fg-muted">
          Sem distrações. Tentar lembrar não é fracasso; usar pista só registra que houve mais suporte.
        </p>
      </header>

      <section>
        <h2 className="text-xs font-medium uppercase tracking-wide text-fg-subtle">
          Conceitos que precisam de atenção
        </h2>
        {queue.length === 0 ? (
          <p className="mt-3 text-sm text-fg-muted">
            Nada vencido agora. Continue a trilha — as revisões aparecem com o tempo e com os erros.
          </p>
        ) : (
          <ol className="mt-3 space-y-2">
            {queue.map((id) => (
              <li key={id}>
                <Link
                  to="/conceito/$conceptId"
                  params={{ conceptId: id }}
                  className="block rounded-lg border border-border bg-bg-elevated px-4 py-3"
                >
                  {CONCEPT_BY_ID[id]?.name ?? id}
                </Link>
              </li>
            ))}
          </ol>
        )}
      </section>

      {current && q && (
        <section>
          <p className="text-xs uppercase tracking-wide text-fg-subtle">
            Conceito: {CONCEPT_BY_ID[current]?.name}
          </p>
          <div className="mt-3">
            <QuestionCard
              question={q}
              review
              onDone={() => setI((n) => Math.min(queue.length - 1, n + 1))}
            />
          </div>
        </section>
      )}
    </div>
  );
}
