import { Link } from "@tanstack/react-router";
import { CONCEPT_BY_ID } from "@/content/concepts";
import { fragileConceptIds, useAppStore } from "@/store/app-store";

export function FragileTab() {
  const concepts = useAppStore((s) => s.concepts);
  const doubts = useAppStore((s) => s.doubts);
  const ids = fragileConceptIds({ concepts, doubts });

  const grouped = ids.map((id) => {
    const c = concepts[id];
    const reason = doubts.includes(id)
      ? "marcado como dúvida"
      : c?.state === "CONFUSED"
        ? "confundido com outro"
        : c?.state === "RECALL_WEAK"
          ? "recuperação frágil"
          : "vem enfraquecendo";
    return { id, reason, name: CONCEPT_BY_ID[id]?.name ?? id };
  });

  return (
    <div className="space-y-5">
      <section className="rounded-xl border border-border bg-bg-elevated p-5">
        <p className="text-xs font-medium uppercase tracking-wide text-fg-subtle">
          Frágeis do momento
        </p>
        <p className="mt-2 text-sm text-fg-muted">
          Conceitos marcados como dúvida, confundidos com um vizinho ou com
          recuperação instável. Aparecem antes das revisões vencidas em ordem
          natural.
        </p>
      </section>

      {grouped.length === 0 ? (
        <section className="rounded-xl border border-border bg-bg-elevated p-8 text-center text-sm text-fg-muted">
          Nenhum conceito marcado como frágil agora. Erros e dúvidas surgem
          aqui automaticamente.
        </section>
      ) : (
        <ul className="space-y-2">
          {grouped.map((g) => (
            <li key={g.id}>
              <Link
                to="/conceito/$conceptId"
                params={{ conceptId: g.id }}
                className="flex items-baseline justify-between gap-2 rounded-lg border border-border bg-bg-elevated px-4 py-3"
              >
                <span className="font-medium text-fg">{g.name}</span>
                <span className="text-xs text-fg-subtle">{g.reason}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
