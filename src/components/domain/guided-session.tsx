import { useMemo } from "react";
import { CircleCheck, CircleDashed, X } from "lucide-react";
import { CounterfactualPlayerById } from "./counterfactual-player";
import { CasePlayerById } from "./case-player";
import { Button } from "@/components/ui/button";
import { useAppStore } from "@/store/app-store";
import { cn } from "@/lib/utils";

export function GuidedSession() {
  const session = useAppStore((s) => s.domain.currentSession);
  const advance = useAppStore((s) => s.advanceGuidedSession);
  const end = useAppStore((s) => s.endGuidedSession);
  const item = useMemo(() => session?.items[session.index] ?? null, [session]);

  if (!session) return null;
  const finished = !item;

  return (
    <section className="space-y-4">
      <header className="flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-accent">
            Sessão guiada
          </p>
          <p className="mt-1 text-sm text-fg-muted">
            Item {Math.min(session.index + 1, session.items.length)} de {session.items.length}
          </p>
        </div>
        <button
          type="button"
          onClick={end}
          className="inline-flex items-center gap-1 text-xs text-fg-subtle underline-offset-4 hover:text-fg-muted hover:underline"
        >
          <X className="size-3" /> Encerrar sessão
        </button>
      </header>

      <ol className="flex gap-1.5" aria-label="Progresso da sessão">
        {session.items.map((it, i) => (
          <li
            key={i}
            className={cn(
              "h-1.5 flex-1 rounded-full",
              it.status === "done"
                ? "bg-accent"
                : i === session.index
                  ? "bg-fg-subtle"
                  : "bg-border",
            )}
          />
        ))}
      </ol>

      {!finished && item && (
        <div>
          {item.kind === "counterfactual" ? (
            <CounterfactualPlayerById id={item.id} onDone={advance} onSkip={advance} />
          ) : (
            <CasePlayerById id={item.id} onDone={advance} onSkip={advance} />
          )}
        </div>
      )}

      {finished && (
        <div className="rounded-xl border border-border bg-bg-elevated p-5 text-center">
          <CircleCheck className="mx-auto size-8 text-ok" />
          <p className="mt-3 font-display text-xl">Sessão concluída</p>
          <p className="mt-1 text-sm text-fg-muted">
            A sequência entra no seu histórico e a evidência foi atualizada.
          </p>
          <Button className="mt-4 w-full" onClick={end}>
            Fechar
          </Button>
        </div>
      )}
    </section>
  );
}

/** Small badge used inside tab lists to indicate session state. */
export function GuidedSessionBadge() {
  const session = useAppStore((s) => s.domain.currentSession);
  if (!session) return null;
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-accent-soft px-2 py-0.5 text-[11px] font-medium text-accent">
      <CircleDashed className="size-3" /> sessão em curso · {session.index + 1}/{session.items.length}
    </span>
  );
}
