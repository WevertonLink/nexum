import { createFileRoute, Link } from "@tanstack/react-router";
import { QuestionCard } from "@/components/question-card";
import { CONCEPT_BY_ID, CONCEPTS } from "@/content/concepts";
import { questionsForConcept, MODULE_BY_ID } from "@/content/modules";
import { EVIDENCE_LABEL, LEVEL_LABEL } from "@/content/types";
import { emptyScores, masteryScore } from "@/engine/mastery";
import { Button } from "@/components/ui/button";
import { useAppStore } from "@/store/app-store";
import { useState } from "react";

export const Route = createFileRoute("/conceito/$conceptId")({
  component: ConceptPage,
});

function ConceptPage() {
  const { conceptId } = Route.useParams();
  const c = CONCEPT_BY_ID[conceptId];
  const progress = useAppStore((s) => s.concepts[conceptId]);
  const toggleDoubt = useAppStore((s) => s.toggleDoubt);
  const doubts = useAppStore((s) => s.doubts);
  const notesAll = useAppStore((s) => s.notes);
  const addNote = useAppStore((s) => s.addNote);
  const notes = notesAll.filter((n) => n.conceptId === conceptId);
  const [note, setNote] = useState("");
  const [testing, setTesting] = useState(false);
  const [qIndex, setQIndex] = useState(0);
  const qs = questionsForConcept(conceptId);

  if (!c) return <p>Conceito não encontrado.</p>;
  const scores = progress?.scores ?? emptyScores();
  const observed = c.observed ?? "O que a literatura descreve como regularidade neste nível de análise.";
  const interpretation = c.interpretation ?? c.explanation;
  const limitation =
    c.limitation ??
    "Participação, associação ou um modelo útil não autorizam reduzir o fenômeno a esta entidade, nem diagnosticar uma pessoa.";

  return (
    <div className="space-y-6 pt-2">
      <Link to="/conceitos" className="text-sm text-fg-muted">
        ← Conceitos
      </Link>
      <header>
        <p className="text-xs uppercase tracking-wide text-fg-subtle">
          {LEVEL_LABEL[c.level]} · {EVIDENCE_LABEL[c.evidenceLevel]}
        </p>
        <h1 className="font-display text-3xl">{c.name}</h1>
      </header>
      <p className="text-base leading-relaxed">{c.definition}</p>
      <p className="text-sm leading-relaxed text-fg-muted">{c.explanation}</p>

      <section className="space-y-3 rounded-xl border border-border bg-bg-elevated p-4">
        <h2 className="text-xs font-medium uppercase tracking-wide text-fg-subtle">
          Ciência versus interpretação
        </h2>
        <p className="text-sm leading-relaxed">
          <span className="font-medium">Evidência. </span>
          {observed}
        </p>
        <p className="text-sm leading-relaxed text-fg-muted">
          <span className="font-medium text-fg">Interpretação. </span>
          {interpretation}
        </p>
        <p className="text-sm leading-relaxed">
          <span className="font-medium">Limitação. </span>
          {limitation}
        </p>
      </section>

      {c.functions && (
        <div>
          <h2 className="text-xs font-medium uppercase tracking-wide text-fg-subtle">Funções (não essências)</h2>
          <ul className="mt-2 list-disc pl-5 text-sm">
            {c.functions.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
      )}
      {c.circuits && (
        <div>
          <h2 className="text-xs font-medium uppercase tracking-wide text-fg-subtle">Circuitos</h2>
          <ul className="mt-2 list-disc pl-5 text-sm">
            {c.circuits.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
      )}

      <div>
        <h2 className="text-xs font-medium uppercase tracking-wide text-fg-subtle">Mitos comuns</h2>
        <ul className="mt-2 space-y-2">
          {c.commonErrors.map((e) => (
            <li key={e} className="rounded-md bg-danger-soft px-3 py-2 text-sm text-danger">
              {e}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-xs font-medium uppercase tracking-wide text-fg-subtle">Conexões</h2>
        <p className="mt-1 font-display text-lg">{c.name}</p>
        <ul className="mt-2 flex flex-wrap gap-2">
          {c.related.map((id) => (
            <li key={id}>
              <Link
                to="/conceito/$conceptId"
                params={{ conceptId: id }}
                className="rounded-full bg-surface px-3 py-2 text-sm"
              >
                {CONCEPTS.find((x) => x.id === id)?.name ?? id}
              </Link>
            </li>
          ))}
        </ul>
        {c.prerequisites.length > 0 && (
          <p className="mt-3 text-sm text-fg-muted">
            Pré-requisitos:{" "}
            {c.prerequisites.map((id) => CONCEPT_BY_ID[id]?.name ?? id).join(", ")}.
          </p>
        )}
      </div>

      <p className="text-sm text-fg-muted">
        Origem:{" "}
        <Link
          className="text-accent underline-offset-4 hover:underline"
          to="/modulo/$moduleId"
          params={{ moduleId: c.originModule }}
        >
          {MODULE_BY_ID[c.originModule]?.title ?? c.originModule}
        </Link>
        . Abrir o conceito aqui não conclui o módulo.
      </p>

      <p className="text-sm">
        Domínio aproximado: {masteryScore(scores)} · {labelState(progress?.state ?? "UNSEEN")}
      </p>

      <div className="flex flex-wrap gap-2">
        <Button variant="secondary" onClick={() => toggleDoubt(c.id)}>
          {doubts.includes(c.id) ? "Remover dúvida" : "Tenho dúvida"}
        </Button>
        <Button
          onClick={() => {
            setTesting(true);
            setQIndex(0);
          }}
        >
          Testar este conceito
        </Button>
      </div>

      {testing && qs[qIndex] && (
        <QuestionCard
          question={qs[qIndex]!}
          review
          onDone={() => {
            if (qIndex < qs.length - 1) setQIndex(qIndex + 1);
            else setTesting(false);
          }}
        />
      )}
      {testing && qs.length === 0 && (
        <p className="text-sm text-fg-muted">Ainda não há questão ligada a este conceito.</p>
      )}

      <div>
        <h2 className="font-medium">Notas</h2>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="mt-2 min-h-20 w-full rounded-md border border-border px-3 py-2 text-sm"
          placeholder="Ex.: eu confundia potencial de ação com corrente contínua."
        />
        <Button
          size="sm"
          className="mt-2"
          variant="secondary"
          onClick={() => {
            if (!note.trim()) return;
            addNote({ conceptId: c.id, text: note.trim() });
            setNote("");
          }}
        >
          Salvar
        </Button>
        <ul className="mt-3 space-y-2">
          {notes.map((n) => (
            <li key={n.id} className="rounded-md bg-surface px-3 py-2 text-sm">
              {n.text}
            </li>
          ))}
        </ul>
      </div>
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
