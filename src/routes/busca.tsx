import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { CONCEPTS, CONCEPT_BY_ID } from "@/content/concepts";
import { GLOSSARY } from "@/content/glossary";
import { MODULES } from "@/content/modules";

export const Route = createFileRoute("/busca")({ component: SearchPage });

function SearchPage() {
  const [q, setQ] = useState("");
  const query = q.trim().toLowerCase();
  const results = useMemo(() => {
    if (query.length < 2) return { modules: [], concepts: [], glossary: [], questions: [] };
    return {
      modules: MODULES.filter((m) => {
        const inMeta =
          m.title.toLowerCase().includes(query) ||
          m.objective.toLowerCase().includes(query) ||
          m.shortTitle.toLowerCase().includes(query) ||
          m.centralQuestion.toLowerCase().includes(query);
        const inConcepts = m.concepts.some((id) =>
          (CONCEPT_BY_ID[id]?.name ?? id).toLowerCase().includes(query),
        );
        return inMeta || inConcepts;
      }),
      concepts: CONCEPTS.filter(
        (c) =>
          c.name.toLowerCase().includes(query) ||
          c.definition.toLowerCase().includes(query),
      ),
      glossary: GLOSSARY.filter(
        (g) =>
          g.term.toLowerCase().includes(query) ||
          g.definition.toLowerCase().includes(query),
      ),
      questions: MODULES.flatMap((m) =>
        m.questions
          .filter((qq) => qq.prompt.toLowerCase().includes(query))
          .map((qq) => ({ ...qq, title: m.title })),
      ).slice(0, 8),
    };
  }, [query]);

  return (
    <div className="space-y-6 pt-2">
      <h1 className="font-display text-3xl">Busca</h1>
      <input
        autoFocus
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Módulos, conceitos, termos…"
        className="h-12 w-full rounded-lg border border-border bg-bg-elevated px-4 text-base"
      />
      {query.length >= 2 && (
        <>
          <Section title="Módulos">
            {results.modules.map((m) => (
              <Link key={m.id} to="/modulo/$moduleId" params={{ moduleId: m.id }} className="block py-2">
                Módulo {m.number} — {m.title}
                <span className="block text-sm text-fg-muted">
                  Encontrado em: {STAGES_NAME[m.stage]} · conceitos:{" "}
                  {m.concepts
                    .slice(0, 3)
                    .map((id) => CONCEPT_BY_ID[id]?.name ?? id)
                    .join(", ")}
                </span>
              </Link>
            ))}
            {results.modules.length === 0 && <p className="text-sm text-fg-muted">Nenhum módulo.</p>}
          </Section>
          <Section title="Conceitos">
            {results.concepts.map((c) => (
              <Link key={c.id} to="/conceito/$conceptId" params={{ conceptId: c.id }} className="block py-2">
                {c.name}
                <span className="block text-sm text-fg-muted">
                  Relacionados: {c.related.slice(0, 4).map((id) => CONCEPT_BY_ID[id]?.name ?? id).join(", ")}
                </span>
              </Link>
            ))}
          </Section>
          <Section title="Glossário">
            {results.glossary.map((g) => (
              <p key={g.id} className="py-2">
                <span className="font-medium">{g.term}. </span>
                <span className="text-sm text-fg-muted">{g.definition}</span>
              </p>
            ))}
          </Section>
          <Section title="Perguntas">
            {results.questions.map((qq) => (
              <p key={qq.id} className="py-2 text-sm">
                {qq.prompt}
                <span className="mt-1 block text-xs text-fg-subtle">{qq.title}</span>
              </p>
            ))}
          </Section>
        </>
      )}
    </div>
  );
}

const STAGES_NAME: Record<number, string> = {
  1: "Infraestrutura",
  2: "Sistemas",
  3: "Cognição",
  4: "Intervenção",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xs font-medium uppercase tracking-wide text-fg-subtle">{title}</h2>
      <div className="mt-1 divide-y divide-border">{children}</div>
    </section>
  );
}
