import { Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { STAGES } from "@/content/stages";
import { MODULE_BY_ID } from "@/content/modules";
import type { ModuleContent } from "@/content/types";
import { EMPTY_MODULE_PROGRESS } from "@/engine/progress";
import { useAppStore } from "@/store/app-store";
import { ProgressMeter } from "../progress-meter";
import { Button } from "../ui/button";

export function ModuleConclusion({
  mod,
  stageName,
  onVerify,
  onFinish,
}: {
  mod: ModuleContent;
  stageName: string;
  onVerify: () => void;
  onFinish: () => void;
}) {
  const progress = useAppStore((s) => s.modules[mod.id]) ?? EMPTY_MODULE_PROGRESS;
  const completeModule = useAppStore((s) => s.completeModule);
  const nextNum = mod.number < 32 ? mod.number + 1 : null;
  const next = nextNum ? Object.values(MODULE_BY_ID).find((m) => m.number === nextNum) : undefined;
  const stage = STAGES.find((s) => s.id === mod.stage)!;
  const lastOfStage = stage.moduleIds[stage.moduleIds.length - 1] === mod.id;

  useEffect(() => {
    completeModule(mod.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mod.id]);

  return (
    <div className="space-y-5">
      <h2 className="font-display text-2xl">Conceito em consolidação</h2>
      <p className="text-sm text-fg-muted">
        Você conseguiu expor, e em parte verificar. O conceito continuará aparecendo em revisões futuras.
        Compreensão não é pontuação.
      </p>
      <div className="space-y-2">
        <ProgressMeter value={progress.content} label="Conteúdo" />
        <ProgressMeter value={progress.comprehension} label="Compreensão" />
        <ProgressMeter value={progress.recall} label="Recuperação" />
        <ProgressMeter value={progress.contrast} label="Contraste" />
        <ProgressMeter value={progress.application} label="Aplicação" />
      </div>
      <p className="text-sm leading-relaxed">{mod.integration}</p>
      {mod.relatedModules.length > 0 && (
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-fg-subtle">Você já estudou algo relacionado</p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {mod.relatedModules.map((id) => (
              <li key={id}>
                <Link
                  to="/modulo/$moduleId"
                  params={{ moduleId: id }}
                  className="rounded-full bg-surface px-3 py-1 text-sm"
                >
                  {MODULE_BY_ID[id]?.shortTitle ?? id}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      {mod.references.length > 0 && (
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-fg-subtle">Para aprofundar</p>
          <ul className="mt-2 space-y-1 text-sm text-fg-muted">
            {mod.references.map((r) => (
              <li key={r.title}>
                {r.title}
                {r.note ? ` — ${r.note}` : ""}
                <span className="text-fg-subtle"> · {r.kind}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      {lastOfStage && (
        <section className="rounded-xl border border-accent/30 bg-accent-soft px-4 py-4">
          <p className="text-xs font-medium uppercase tracking-wide text-accent">Etapa {mod.stage} · {stageName}</p>
          <p className="mt-2 text-sm leading-relaxed">{stage.closingGoal}</p>
          <Link to="/desafios" className="mt-3 inline-block text-sm text-accent underline-offset-4 hover:underline">
            Desafio de integração
          </Link>
        </section>
      )}
      <div className="flex flex-col gap-2">
        <Button variant="secondary" onClick={onVerify}>
          Revisar as questões
        </Button>
        <Button variant="ghost" className="w-full" onClick={() => useAppStore.getState().setSessionPhase("intro")}>
          Rever a exposição
        </Button>
        {next && (
          <Link to="/modulo/$moduleId" params={{ moduleId: next.id }}>
            <Button className="w-full">
              Próximo: {next.shortTitle}
            </Button>
          </Link>
        )}
        <Link to="/">
          <Button variant="ghost" className="w-full" onClick={onFinish}>
            Voltar ao início
          </Button>
        </Link>
      </div>
    </div>
  );
}
