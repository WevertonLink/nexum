import { useState } from "react";
import type { Question } from "@/content/types";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/store/app-store";
import { RichText } from "./rich-text";
import { Button } from "./ui/button";

const CONF = [
  { v: 0 as const, l: "Não sabia" },
  { v: 1 as const, l: "Pouco confiante" },
  { v: 2 as const, l: "Razoavelmente" },
  { v: 3 as const, l: "Muito confiante" },
];

export function QuestionCard({
  question,
  onDone,
  review,
}: {
  question: Question;
  onDone?: () => void;
  review?: boolean;
}) {
  const recordAnswer = useAppStore((s) => s.recordAnswer);
  const [picked, setPicked] = useState<string | null>(null);
  const [free, setFree] = useState("");
  const [revealed, setRevealed] = useState(false);
  const [hints, setHints] = useState<0 | 1 | 2 | 3>(0);
  const [confidence, setConfidence] = useState<0 | 1 | 2 | 3 | null>(null);
  const [self, setSelf] = useState<"easy" | "medium" | "hard" | "failed" | null>(null);
  const [saved, setSaved] = useState(false);

  const isOpen = !question.options || question.options.length === 0;
  const multi = question.correctAnswer.includes(",");
  const correctIds = question.correctAnswer.split(",").map((s) => s.trim());

  const isCorrect = () => {
    if (isOpen) return self !== "failed" && self !== null;
    if (multi) {
      const sel = new Set((picked ?? "").split(",").filter(Boolean));
      return correctIds.length === sel.size && correctIds.every((id) => sel.has(id));
    }
    return picked === question.correctAnswer;
  };

  function toggleMulti(id: string) {
    const cur = new Set((picked ?? "").split(",").filter(Boolean));
    if (cur.has(id)) cur.delete(id);
    else cur.add(id);
    setPicked([...cur].join(","));
  }

  function commit() {
    const ok = isOpen ? self !== "failed" : isCorrect();
    recordAnswer({
      questionId: question.id,
      moduleId: question.moduleId,
      conceptIds: question.conceptIds,
      type: question.type,
      correct: Boolean(ok),
      hintsUsed: hints,
      confidence,
      selected: picked ?? undefined,
      freeText: free || undefined,
      confused: question.type === "misconception" && !ok,
      selfRating: self ?? undefined,
    });
    setSaved(true);
  }

  const ok = revealed && isCorrect();

  return (
    <article className="rounded-xl border border-border bg-bg-elevated p-5 shadow-soft">
      <p className="text-xs font-medium uppercase tracking-wide text-fg-subtle">
        {labelType(question.type)}
        {review ? " · revisão" : ""}
      </p>
      <h2 className="mt-2 font-display text-xl leading-snug text-fg">
        <RichText text={question.prompt} />
      </h2>

      {question.options && (
        <ul className="mt-4 space-y-2">
          {question.options.map((o) => {
            const selected = multi
              ? (picked ?? "").split(",").includes(o.id)
              : picked === o.id;
            return (
              <li key={o.id}>
                <button
                  type="button"
                  disabled={revealed}
                  onClick={() => (multi ? toggleMulti(o.id) : setPicked(o.id))}
                  className={cn(
                    "min-h-11 w-full rounded-lg border px-4 py-3 text-left text-sm leading-snug transition-colors duration-150",
                    selected ? "border-accent bg-accent-soft" : "border-border bg-bg hover:border-border-strong",
                    revealed && correctIds.includes(o.id) && "border-ok bg-ok-soft",
                    revealed && selected && !correctIds.includes(o.id) && "border-danger bg-danger-soft",
                  )}
                >
                  {o.text}
                  {revealed && correctIds.includes(o.id) && (
                    <span className="mt-1 block text-xs text-ok">Formulação mais adequada</span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      )}

      {isOpen && (
        <textarea
          value={free}
          onChange={(e) => setFree(e.target.value)}
          placeholder="Tente com suas palavras. Depois compare com o modelo."
          className="mt-4 min-h-28 w-full rounded-lg border border-border bg-bg px-3 py-3 text-base leading-relaxed text-fg placeholder:text-fg-subtle"
        />
      )}

      {hints > 0 && (
        <div className="mt-4 space-y-2 rounded-lg bg-info-soft px-4 py-3 text-sm text-info">
          {hints >= 1 && (
            <p>
              <span className="font-medium">Pista 1. </span>
              {question.hint1}
            </p>
          )}
          {hints >= 2 && (
            <p>
              <span className="font-medium">Pista 2. </span>
              {question.hint2}
            </p>
          )}
          {hints >= 3 && (
            <p>
              <span className="font-medium">Pista 3. </span>
              {question.hint3}
            </p>
          )}
        </div>
      )}

      {!revealed && (
        <div className="mt-4 flex flex-wrap gap-2">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setHints((h) => (h < 3 ? ((h + 1) as 1 | 2 | 3) : h))}
            disabled={hints >= 3}
          >
            {hints === 0 ? "Ver uma pista" : hints < 3 ? "Próxima pista" : "Pistas esgotadas"}
          </Button>
          <Button size="sm" onClick={() => setRevealed(true)} disabled={!isOpen && !picked}>
            {isOpen ? "Ver resposta" : "Confirmar"}
          </Button>
        </div>
      )}

      {revealed && (
        <div className="mt-5 space-y-3 border-t border-border pt-4 text-sm leading-relaxed">
          <p className="text-fg">
            {isOpen
              ? "Compare com o modelo científico."
              : ok
                ? "Boa reconstrução. Você identificou o mecanismo ou a formulação mais precisa."
                : "Esse conceito ainda precisa de consolidação. Você identificou parte, ou confundiu uma etapa — vamos precisar revê-la."}
          </p>
          {question.whyPlausible && !ok && (
            <p>
              <span className="font-medium">Por que essa resposta parece plausível. </span>
              {question.whyPlausible}
            </p>
          )}
          {question.misconception && !ok && (
            <p>
              <span className="font-medium">Onde está o problema. </span>
              {question.misconception}
            </p>
          )}
          <p>
            <span className="font-medium">Qual modelo é mais adequado. </span>
            {question.explanation}
          </p>
          {question.modelAnswer && (
            <p className="rounded-md bg-surface px-3 py-2">
              <span className="font-medium">Modelo. </span>
              {question.modelAnswer}
            </p>
          )}
          {question.errorKind && !ok && (
            <p className="text-xs text-fg-subtle">Tipo de erro: {labelError(question.errorKind)}.</p>
          )}

          <fieldset className="space-y-2">
            <legend className="text-xs font-medium uppercase tracking-wide text-fg-subtle">
              Como foi?
            </legend>
            <div className="grid grid-cols-2 gap-2">
              {(["easy", "medium", "hard", "failed"] as const).map((k) => (
                <button
                  key={k}
                  type="button"
                  onClick={() => setSelf(k)}
                  className={cn(
                    "min-h-11 rounded-md border px-3 py-2 text-sm",
                    self === k ? "border-accent bg-accent-soft" : "border-border",
                  )}
                >
                  {{ easy: "Fácil", medium: "Médio", hard: "Difícil", failed: "Não consegui" }[k]}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-xs font-medium uppercase tracking-wide text-fg-subtle">
              Quão confiante você estava?
            </legend>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {CONF.map((c) => (
                <button
                  key={c.v}
                  type="button"
                  onClick={() => setConfidence(c.v)}
                  className={cn(
                    "min-h-11 rounded-md border px-3 py-2 text-sm",
                    confidence === c.v ? "border-accent bg-accent-soft" : "border-border",
                  )}
                >
                  {c.l}
                </button>
              ))}
            </div>
          </fieldset>

          {confidence === 3 && revealed && !ok && (
            <p className="rounded-md bg-warn-soft px-3 py-2 text-sm text-warn">
              Alta confiança com erro: possível falsa sensação de domínio. Esse item volta cedo na revisão.
            </p>
          )}
          {confidence !== null && confidence <= 1 && ok && (
            <p className="rounded-md bg-info-soft px-3 py-2 text-sm text-info">
              Acerto com baixa confiança: o conhecimento ainda pode estar pouco acessível. Revisaremos.
            </p>
          )}

          {!saved && (
            <Button className="w-full" onClick={commit} disabled={isOpen && !self}>
              Registrar
            </Button>
          )}
          {saved && (
            <div className="space-y-2">
              <p className="text-ok">
                Registrado. O erro, se houve, alimenta a revisão — sem punição.
              </p>
              <Button className="w-full" onClick={() => onDone?.()}>
                Continuar
              </Button>
            </div>
          )}
        </div>
      )}
    </article>
  );
}

function labelType(t: Question["type"]) {
  const map: Record<Question["type"], string> = {
    recognition: "Reconhecimento",
    recall: "Recuperação",
    relation: "Relação",
    counterfactual: "Contrafactual",
    misconception: "Contraste",
    application: "Aplicação",
    integration: "Integração",
    limit: "Limite",
  };
  return map[t];
}

function labelError(k: NonNullable<Question["errorKind"]>) {
  const map = {
    factual: "factual — a informação ainda não está disponível",
    causal: "causal — os elementos estão lá, a relação não",
    scale: "de escala — um nível foi tratado como se esgotasse outro",
    generalization: "de generalização — uma associação virou regra",
    language: "de linguagem — a ideia está próxima, a formulação não",
  };
  return map[k];
}
