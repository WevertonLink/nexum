import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import type { DomainCase } from "@/content/domain-case";
import { DOMAIN_CASE_BY_ID } from "@/content/domain-case";
import { MODULE_BY_ID } from "@/content/modules";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/store/app-store";
import { Button } from "@/components/ui/button";
import { RichText } from "@/components/rich-text";

type Phase = "prompt" | "reveal" | "chain" | "extend" | "done";

export function CasePlayer({
  domainCase,
  onDone,
  onSkip,
}: {
  domainCase: DomainCase;
  onDone?: () => void;
  onSkip?: () => void;
}) {
  const c = domainCase;
  const conceptIds = useMemo(
    () =>
      Array.from(
        new Set(c.modules.flatMap((mid) => MODULE_BY_ID[mid]?.concepts ?? [])),
      ),
    [c.modules],
  );
  const record = useAppStore((s) => s.recordDomainAttempt);
  const [phase, setPhase] = useState<Phase>("prompt");
  const [picked, setPicked] = useState<number | null>(null);
  const [committed, setCommitted] = useState(false);
  const isCorrect = picked === c.correct;

  function commit() {
    if (picked === null) return;
    setPhase("reveal");
    record({
      kind: "case",
      id: c.id,
      correct: isCorrect,
      selected: picked,
      conceptIds,
      moduleIds: c.modules,
    });
    setCommitted(true);
  }

  function finish() {
    setPhase("done");
    onDone?.();
  }

  void committed;
  return (
    <article className="rounded-xl border border-border bg-bg-elevated p-5 shadow-soft">
      <header className="flex flex-wrap items-baseline justify-between gap-2">
        <p className="text-xs font-medium uppercase tracking-wide text-accent">Caso integrado</p>
        {onSkip && phase === "prompt" && (
          <button
            type="button"
            onClick={onSkip}
            className="text-xs text-fg-subtle underline-offset-4 hover:text-fg-muted hover:underline"
          >
            Pular
          </button>
        )}
      </header>
      <h2 className="mt-2 font-display text-xl leading-snug text-fg">{c.title}</h2>
      <ul className="mt-2 flex flex-wrap gap-1.5">
        {c.modules.map((mid) => {
          const mod = MODULE_BY_ID[mid];
          if (!mod) return null;
          return (
            <li
              key={mid}
              className="rounded-full bg-surface px-2 py-0.5 text-[11px] font-medium text-fg-muted"
            >
              M{mod.number} · {mod.shortTitle}
            </li>
          );
        })}
      </ul>
      <p className="mt-4 text-[15px] leading-relaxed text-fg-muted">
        <RichText text={c.scenario} />
      </p>
      <p className="mt-3 text-[15px] leading-relaxed text-fg">{c.question}</p>

      <ul className="mt-5 space-y-2">
        {c.options.map((opt, i) => {
          const active = picked === i;
          const revealed = phase !== "prompt";
          const isRight = i === c.correct;
          return (
            <li key={i}>
              <button
                type="button"
                disabled={phase !== "prompt"}
                onClick={() => setPicked(i)}
                className={cn(
                  "min-h-11 w-full rounded-lg border px-4 py-3 text-left text-sm leading-snug transition-colors duration-150",
                  active && !revealed && "border-accent bg-accent-soft",
                  !active && !revealed && "border-border bg-bg hover:border-border-strong",
                  revealed && isRight && "border-ok bg-ok-soft",
                  revealed && active && !isRight && "border-danger bg-danger-soft",
                  revealed && !isRight && !active && "border-border bg-bg opacity-70",
                )}
              >
                {opt}
                {revealed && (
                  <span
                    className={cn(
                      "mt-2 block text-xs",
                      isRight ? "text-ok" : active ? "text-danger" : "text-fg-subtle",
                    )}
                  >
                    {c.optionFeedback[i]}
                  </span>
                )}
              </button>
            </li>
          );
        })}
      </ul>

      {phase === "prompt" && (
        <div className="mt-5 flex justify-end">
          <Button onClick={commit} disabled={picked === null}>
            Confirmar
          </Button>
        </div>
      )}

      {phase === "reveal" && (
        <div className="mt-5 space-y-3 border-t border-border pt-4 text-sm leading-relaxed">
          <p className={cn("text-sm font-medium", isCorrect ? "text-ok" : "text-warn")}>
            {isCorrect
              ? "Boa. A leitura reúne os módulos que o caso atravessa."
              : "Ainda não. A alternativa correta aparece em verde acima."}
          </p>
          <p className="text-fg">{c.explanation}</p>
          <details className="rounded-md border border-border bg-surface px-3 py-2 text-sm">
            <summary className="cursor-pointer text-xs font-medium uppercase tracking-wide text-fg-subtle">
              Cadeia esperada
            </summary>
            <ol className="mt-3 space-y-2">
              {c.chain.map((step, i) => (
                <li key={step} className="flex gap-3">
                  <span className="font-mono text-xs text-fg-subtle">{i + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </details>
          <Button onClick={() => setPhase("extend")} className="w-full">
            Um passo a mais <ArrowRight className="size-4" />
          </Button>
        </div>
      )}

      {phase === "extend" && (
        <div className="mt-5 space-y-3 border-t border-border pt-4 text-sm leading-relaxed">
          <p className="text-xs font-medium uppercase tracking-wide text-fg-subtle">Extensão</p>
          <p className="font-medium text-fg">{c.extend.q}</p>
          <p className="rounded-md bg-surface px-3 py-3 text-fg-muted">{c.extend.a}</p>
          <Button className="w-full" onClick={finish}>
            {onDone ? "Continuar" : "Fechar"}
          </Button>
        </div>
      )}

      {phase === "done" && !onDone && (
        <p className="mt-5 border-t border-border pt-4 text-sm text-fg-muted">
          Caso registrado. Escolha outro para seguir atravessando módulos.
        </p>
      )}
    </article>
  );
}

export function CasePlayerById({
  id,
  onDone,
  onSkip,
}: {
  id: string;
  onDone?: () => void;
  onSkip?: () => void;
}) {
  const c = DOMAIN_CASE_BY_ID[id];
  if (!c) return <p className="text-sm text-fg-muted">Caso não encontrado.</p>;
  return <CasePlayer domainCase={c} onDone={onDone} onSkip={onSkip} />;
}
