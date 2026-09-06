import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CHALLENGES } from "@/content/diagnostic";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/desafios")({ component: ChallengesPage });

function ChallengesPage() {
  return (
    <div className="space-y-8 pt-2">
      <header>
        <h1 className="font-display text-3xl">Desafios</h1>
        <p className="mt-1 text-sm text-fg-muted">
          Misturam módulos. O objetivo é integrar níveis, não reconhecer o contexto da aula.
        </p>
      </header>
      {CHALLENGES.map((ch) => (
        <ChallengeCard key={ch.id} id={ch.id} />
      ))}
    </div>
  );
}

function ChallengeCard({ id }: { id: string }) {
  const ch = CHALLENGES.find((c) => c.id === id)!;
  const [sel, setSel] = useState<string[]>([]);
  const [done, setDone] = useState(false);
  function toggle(oid: string) {
    setSel((s) => (s.includes(oid) ? s.filter((x) => x !== oid) : [...s, oid]));
  }
  const ok =
    ch.correctIds.length === sel.length && ch.correctIds.every((x) => sel.includes(x));
  return (
    <article className="rounded-xl border border-border bg-bg-elevated p-5">
      <p className="text-xs uppercase tracking-wide text-fg-subtle">Após etapa {ch.afterStage}</p>
      <h2 className="mt-1 font-display text-xl">{ch.title}</h2>
      <p className="mt-2 text-sm leading-relaxed">{ch.prompt}</p>
      <ul className="mt-4 space-y-2">
        {ch.options.map((o) => (
          <li key={o.id}>
            <button
              type="button"
              onClick={() => toggle(o.id)}
              className={cn(
                "w-full rounded-lg border px-3 py-2 text-left text-sm",
                sel.includes(o.id) ? "border-accent bg-accent-soft" : "border-border",
              )}
            >
              {o.text}
            </button>
          </li>
        ))}
      </ul>
      {!done ? (
        <Button className="mt-4 w-full" onClick={() => setDone(true)} disabled={sel.length === 0}>
          Ver modelo
        </Button>
      ) : (
        <div className="mt-4 space-y-2 text-sm">
          <p className={ok ? "text-ok" : "text-fg"}>
            {ok
              ? "Você integrou os níveis pertinentes."
              : "Há uma peça a mais ou a menos. Compare com o modelo — incerteza explícita pode ser parte da resposta certa."}
          </p>
          <p>{ch.explanation}</p>
        </div>
      )}
    </article>
  );
}
