import { Link } from "@tanstack/react-router";
import { X } from "lucide-react";
import { CONCEPT_BY_ID } from "@/content/concepts";
import { EVIDENCE_LABEL, LEVEL_LABEL } from "@/content/types";
import { Button } from "./ui/button";

export function TermSheet({
  conceptId,
  onClose,
}: {
  conceptId: string;
  onClose: () => void;
}) {
  const c = CONCEPT_BY_ID[conceptId];
  if (!c) return null;
  return (
    <div
      className="fixed inset-0 z-40 flex items-end justify-center bg-fg/30 p-3 sm:items-center"
      role="dialog"
      aria-modal
      aria-labelledby="term-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-t-2xl border border-border bg-bg-elevated p-5 shadow-soft sm:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-fg-subtle">
              {LEVEL_LABEL[c.level]} · {EVIDENCE_LABEL[c.evidenceLevel]}
            </p>
            <h2 id="term-title" className="font-display text-2xl">
              {c.name}
            </h2>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} aria-label="Fechar">
            <X className="size-5" />
          </Button>
        </div>
        <p className="mt-3 text-[15px] leading-relaxed text-fg">{c.definition}</p>
        <p className="mt-2 text-sm leading-relaxed text-fg-muted">{c.explanation}</p>
        <div className="mt-5 flex gap-2">
          <Link to="/conceito/$conceptId" params={{ conceptId: c.id }} onClick={onClose}>
            <Button>Ver conceito</Button>
          </Link>
          <Button variant="secondary" onClick={onClose}>
            Voltar
          </Button>
        </div>
      </div>
    </div>
  );
}
