import { Link } from "@tanstack/react-router";
import { useAppStore } from "@/store/app-store";
import { KNOWLEDGE_DIMS, type KnowledgeDim } from "@/engine/evidence";
import { collectDueReviews, conceptName } from "./domain-utils";

function dimLabel(d: KnowledgeDim): string {
  return KNOWLEDGE_DIMS.find((k) => k.id === d)?.short ?? d;
}

export function ReviewsTab() {
  const srsRecords = useAppStore((s) => s.srsRecords);
  const dues = collectDueReviews(srsRecords);

  const byConcept = new Map<
    string,
    { dim: KnowledgeDim; box: number; overdue: number }[]
  >();
  for (const d of dues) {
    const arr = byConcept.get(d.conceptId) ?? [];
    arr.push({ dim: d.dim, box: d.record.box, overdue: d.overdue });
    byConcept.set(d.conceptId, arr);
  }

  const totalScheduled = Object.values(srsRecords).reduce(
    (acc, group) => acc + Object.keys(group).length,
    0,
  );
  const totalDue = dues.length;

  return (
    <div className="space-y-5">
      <section className="rounded-xl border border-border bg-bg-elevated p-5">
        <p className="text-xs font-medium uppercase tracking-wide text-fg-subtle">
          Fila 4-dimensional
        </p>
        <p className="mt-2 text-sm text-fg-muted">
          {totalScheduled === 0
            ? "Nenhuma dimensão agendada ainda. As caixas surgem conforme você responde os módulos."
            : `${totalDue} dimensão${totalDue === 1 ? "" : "es"} vencida${totalDue === 1 ? "" : "s"} de ${totalScheduled} agendadas.`}
        </p>
      </section>

      {byConcept.size === 0 ? (
        <section className="rounded-xl border border-border bg-bg-elevated p-8 text-center text-sm text-fg-muted">
          Nada para revisar agora. A fila puxa por dimensão, não por conceito
          inteiro — reconhecer bem uma parte não dispensa reconstruir outra.
        </section>
      ) : (
        <ul className="space-y-2">
          {[...byConcept.entries()].map(([cid, items]) => (
            <li
              key={cid}
              className="rounded-lg border border-border bg-bg-elevated p-4"
            >
              <div className="flex items-baseline justify-between gap-2">
                <Link
                  to="/conceito/$conceptId"
                  params={{ conceptId: cid }}
                  className="font-medium text-fg underline-offset-4 hover:underline"
                >
                  {conceptName(cid)}
                </Link>
                <span className="text-xs text-fg-subtle">{items.length} dim</span>
              </div>
              <ul className="mt-2 flex flex-wrap gap-1.5">
                {items.map((it) => (
                  <li
                    key={it.dim}
                    className="rounded-full bg-surface px-2 py-0.5 text-[11px] text-fg-muted"
                  >
                    {dimLabel(it.dim)} · box {it.box}
                    {it.overdue > 0 ? ` · atrasado ${it.overdue}d` : ""}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}

      <section className="rounded-xl border border-border bg-bg-elevated p-5">
        <p className="text-xs font-medium uppercase tracking-wide text-fg-subtle">
          Como a fila decide
        </p>
        <p className="mt-2 text-sm leading-relaxed text-fg-muted">
          A dimensão mais atrasada vem primeiro; a segunda ordem é a caixa mais
          baixa. Reconhecer não substitui explicar; localizar não substitui
          aplicar. Cada dimensão tem sua própria janela.
        </p>
      </section>
    </div>
  );
}
