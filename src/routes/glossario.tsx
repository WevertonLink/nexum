import { createFileRoute, Link } from "@tanstack/react-router";
import { GLOSSARY } from "@/content/glossary";

export const Route = createFileRoute("/glossario")({ component: GlossaryPage });

function GlossaryPage() {
  const sorted = [...GLOSSARY].sort((a, b) => a.term.localeCompare(b.term, "pt"));
  return (
    <div className="space-y-4 pt-2">
      <h1 className="font-display text-3xl">Glossário</h1>
      <p className="text-sm text-fg-muted">Acessível sem abandonar o estudo — os termos na trilha também abrem no lugar.</p>
      <ul className="divide-y divide-border rounded-xl border border-border bg-bg-elevated">
        {sorted.map((g) => (
          <li key={g.id} className="px-4 py-3">
            <p className="font-medium">{g.term}</p>
            <p className="text-sm text-fg-muted">{g.definition}</p>
            {g.conceptId && (
              <Link
                to="/conceito/$conceptId"
                params={{ conceptId: g.conceptId }}
                className="mt-1 inline-block text-sm text-accent"
              >
                Ver conceito
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
