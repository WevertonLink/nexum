import { createFileRoute, Link } from "@tanstack/react-router";
import { MYTHS } from "@/content/myths";

export const Route = createFileRoute("/mitos")({ component: MythsPage });

function MythsPage() {
  return (
    <div className="space-y-6 pt-2">
      <header>
        <h1 className="font-display text-3xl">Mitos</h1>
        <p className="mt-1 text-sm text-fg-muted">
          Simplificações que o curso recusa. O veredito não é um insulto — é um ajuste de modelo.
        </p>
      </header>
      {MYTHS.map((m) => (
        <article key={m.id} className="rounded-xl border border-border bg-bg-elevated p-5">
          <p className="text-xs font-medium uppercase tracking-wide text-danger">Mito</p>
          <h2 className="mt-1 font-display text-xl leading-snug">“{m.claim}”</h2>
          <p className="mt-3 text-xs font-medium uppercase tracking-wide text-ok">Veredito</p>
          <p className="text-sm">{m.verdict}</p>
          <p className="mt-3 text-sm leading-relaxed text-fg-muted">
            <span className="font-medium text-fg">Por quê. </span>
            {m.why}
          </p>
          <p className="mt-2 text-sm leading-relaxed">
            <span className="font-medium">Modelo mais adequado. </span>
            {m.better}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {m.conceptIds.map((id) => (
              <Link
                key={id}
                to="/conceito/$conceptId"
                params={{ conceptId: id }}
                className="text-sm text-accent underline-offset-4 hover:underline"
              >
                ver conceito
              </Link>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
