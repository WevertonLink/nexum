import { useMemo, useState } from "react";
import { ArrowRight, RefreshCw } from "lucide-react";
import type { Counterfactual } from "@/content/counterfactual";
import { COUNTERFACTUAL_BY_ID } from "@/content/counterfactual";
import { MODULE_BY_ID } from "@/content/modules";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/store/app-store";
import { Button } from "@/components/ui/button";
import { RichText } from "@/components/rich-text";

type Phase = "prompt" | "reveal" | "chain" | "extend" | "done";

/** Shuffle helper — Fisher–Yates with a seeded default. */
function shuffle<T>(items: T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i]!, arr[j]!] = [arr[j]!, arr[i]!];
  }
  return arr;
}

export function CounterfactualPlayer({
  counterfactual,
  onDone,
  onSkip,
}: {
  counterfactual: Counterfactual;
  onDone?: () => void;
  onSkip?: () => void;
}) {
  const cf = counterfactual;
  const conceptIds = useMemo(
    () => MODULE_BY_ID[cf.moduleId]?.concepts ?? [],
    [cf.moduleId],
  );
  const record = useAppStore((s) => s.recordDomainAttempt);
  const [phase, setPhase] = useState<Phase>("prompt");
  const [picked, setPicked] = useState<number | null>(null);
  const [shuffled, setShuffled] = useState<string[]>(() => shuffle(cf.chain));
  const [ordered, setOrdered] = useState<string[]>([]);
  const [chainSubmitted, setChainSubmitted] = useState(false);

  const isCorrect = picked === cf.correct;

  function commit() {
    if (picked === null) return;
    setPhase("reveal");
  }

  function goChain() {
    setPhase("chain");
  }

  function pickStep(step: string) {
    if (ordered.includes(step)) return;
    setOrdered((prev) => [...prev, step]);
    setShuffled((prev) => prev.filter((s) => s !== step));
  }

  function undoLast() {
    if (ordered.length === 0) return;
    const last = ordered[ordered.length - 1]!;
    setOrdered((prev) => prev.slice(0, -1));
    setShuffled((prev) => [...prev, last]);
  }

  function submitChain() {
    setChainSubmitted(true);
    const chainCorrect = ordered.length === cf.chain.length &&
      ordered.every((step, i) => step === cf.chain[i]);
    record({
      kind: "counterfactual",
      id: cf.id,
      correct: isCorrect,
      selected: picked ?? -1,
      chainCorrect,
      conceptIds,
      moduleIds: [cf.moduleId],
    });
  }

  function skipChain() {
    record({
      kind: "counterfactual",
      id: cf.id,
      correct: isCorrect,
      selected: picked ?? -1,
      conceptIds,
      moduleIds: [cf.moduleId],
    });
    setChainSubmitted(true);
    setPhase("extend");
  }

  function goExtend() {
    setPhase("extend");
  }

  function finish() {
    setPhase("done");
    onDone?.();
  }

  const chainMatchesSoFar = ordered.every((step, i) => step === cf.chain[i]);
  const chainComplete = ordered.length === cf.chain.length;
  const chainCorrect = chainSubmitted && chainComplete && chainMatchesSoFar;

  return (
    <article className="rounded-xl border border-border bg-bg-elevated p-5 shadow-soft">
      <header className="flex flex-wrap items-baseline justify-between gap-2">
        <p className="text-xs font-medium uppercase tracking-wide text-accent">Contrafactual</p>
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
      <h2 className="mt-2 font-display text-xl leading-snug text-fg">{cf.title}</h2>
      <p className="mt-3 text-[15px] leading-relaxed text-fg-muted">
        <RichText text={cf.prompt} />
      </p>

      <ul className="mt-5 space-y-2">
        {cf.options.map((opt, i) => {
          const active = picked === i;
          const revealed = phase !== "prompt";
          const isRight = i === cf.correct;
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
                    {cf.optionFeedback[i]}
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
              ? "Boa. A alternativa reconstrói a cadeia causal esperada."
              : "Ainda não. A alternativa correta está destacada em verde acima."}
          </p>
          <p className="text-fg">{cf.explanation}</p>
          <div className="flex flex-wrap gap-2 pt-1">
            <Button onClick={goChain}>
              Reconstruir a cadeia <ArrowRight className="size-4" />
            </Button>
            <Button variant="ghost" onClick={skipChain}>
              Pular reconstrução
            </Button>
          </div>
        </div>
      )}

      {phase === "chain" && (
        <div className="mt-5 space-y-4 border-t border-border pt-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-fg-subtle">
              Reconstrua a cadeia na ordem
            </p>
            <p className="mt-1 text-sm text-fg-muted">
              Toque nos passos abaixo, na ordem em que a cadeia causal se encaixa.
            </p>
          </div>
          {ordered.length > 0 && (
            <ol className="space-y-2">
              {ordered.map((step, i) => (
                <li
                  key={step}
                  className={cn(
                    "flex items-start gap-3 rounded-md border px-3 py-2 text-sm",
                    chainSubmitted
                      ? step === cf.chain[i]
                        ? "border-ok bg-ok-soft"
                        : "border-danger bg-danger-soft"
                      : "border-border bg-bg",
                  )}
                >
                  <span className="mt-0.5 font-mono text-xs text-fg-subtle">{i + 1}</span>
                  <span className="flex-1">{step}</span>
                </li>
              ))}
            </ol>
          )}
          {!chainSubmitted && shuffled.length > 0 && (
            <ul className="space-y-2">
              {shuffled.map((step) => (
                <li key={step}>
                  <button
                    type="button"
                    onClick={() => pickStep(step)}
                    className="min-h-11 w-full rounded-md border border-border bg-bg px-3 py-2 text-left text-sm hover:border-border-strong"
                  >
                    {step}
                  </button>
                </li>
              ))}
            </ul>
          )}
          {!chainSubmitted && (
            <div className="flex flex-wrap gap-2">
              <Button variant="ghost" onClick={undoLast} disabled={ordered.length === 0}>
                <RefreshCw className="size-4" /> Desfazer
              </Button>
              <Button onClick={submitChain} disabled={!chainComplete}>
                Verificar ordem
              </Button>
            </div>
          )}
          {chainSubmitted && (
            <div className="space-y-3">
              <p
                className={cn(
                  "text-sm font-medium",
                  chainCorrect ? "text-ok" : "text-warn",
                )}
              >
                {chainCorrect
                  ? "Cadeia reconstruída na ordem certa."
                  : "A ordem esperada aparece em verde. Compare passo a passo."}
              </p>
              {!chainCorrect && (
                <ol className="space-y-2 rounded-md bg-surface px-3 py-3 text-sm">
                  {cf.chain.map((step, i) => (
                    <li key={step} className="flex gap-3">
                      <span className="font-mono text-xs text-fg-subtle">{i + 1}</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              )}
              <Button onClick={goExtend} className="w-full">
                Continuar <ArrowRight className="size-4" />
              </Button>
            </div>
          )}
        </div>
      )}

      {phase === "extend" && (
        <div className="mt-5 space-y-3 border-t border-border pt-4 text-sm leading-relaxed">
          <p className="text-xs font-medium uppercase tracking-wide text-fg-subtle">
            Um passo a mais
          </p>
          <p className="font-medium text-fg">{cf.extend.q}</p>
          <p className="rounded-md bg-surface px-3 py-3 text-fg-muted">{cf.extend.a}</p>
          <Button className="w-full" onClick={finish}>
            {onDone ? "Continuar" : "Fechar"}
          </Button>
        </div>
      )}

      {phase === "done" && !onDone && (
        <p className="mt-5 border-t border-border pt-4 text-sm text-fg-muted">
          Contrafactual registrado. Volte para escolher outro quando quiser.
        </p>
      )}
    </article>
  );
}

export function CounterfactualPlayerById({
  id,
  onDone,
  onSkip,
}: {
  id: string;
  onDone?: () => void;
  onSkip?: () => void;
}) {
  const cf = COUNTERFACTUAL_BY_ID[id];
  if (!cf) return <p className="text-sm text-fg-muted">Contrafactual não encontrado.</p>;
  return <CounterfactualPlayer counterfactual={cf} onDone={onDone} onSkip={onSkip} />;
}
