import { createFileRoute, Link } from "@tanstack/react-router";
import { MODULE_BY_ID } from "@/content/modules";
import { STAGES } from "@/content/stages";
import { isModuleUnlocked, moduleOverall } from "@/engine/progress";
import { ProgressMeter } from "@/components/progress-meter";
import { emptyModuleProgress, useAppStore } from "@/store/app-store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/trilha")({ component: TrailPage });

function TrailPage() {
  const modules = useAppStore((s) => s.modules);
  return (
    <div className="space-y-8 pt-2">
      <header>
        <h1 className="font-display text-3xl">Trilha</h1>
        <p className="mt-1 text-sm text-fg-muted">
          Infraestrutura → Sistemas → Cognição → Intervenção. Os módulos bloqueados avisam; não prendem para sempre.
        </p>
      </header>
      <ol className="space-y-8">
        {STAGES.map((stage, i) => (
          <li key={stage.id}>
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">Etapa {stage.id}</p>
            <h2 className="font-display text-2xl">{stage.name}</h2>
            <p className="text-sm text-fg-muted">{stage.subtitle}</p>
            <p className="mt-2 text-sm leading-relaxed">{stage.description}</p>
            <div className="mt-3">
              <ProgressMeter
                value={Math.round(
                  stage.moduleIds.reduce(
                    (a, id) => a + moduleOverall(modules[id] ?? emptyModuleProgress()),
                    0,
                  ) / stage.moduleIds.length,
                )}
              />
            </div>
            <ul className="mt-4 space-y-2">
              {stage.moduleIds.map((id) => {
                const m = MODULE_BY_ID[id]!;
                const p = modules[id] ?? emptyModuleProgress();
                const unlocked = isModuleUnlocked(id, modules);
                return (
                  <li key={id}>
                    <Link
                      to="/modulo/$moduleId"
                      params={{ moduleId: id }}
                      className={cn(
                        "block rounded-lg border px-4 py-3",
                        p.completed ? "border-ok/30 bg-ok-soft" : "border-border bg-bg-elevated",
                      )}
                    >
                      <div className="flex items-baseline justify-between gap-3">
                        <p className="font-medium">
                          <span className="font-mono text-xs text-fg-subtle">{String(m.number).padStart(2, "0")} · </span>
                          {m.shortTitle}
                        </p>
                        <span className="text-xs tabular-nums text-fg-subtle">{moduleOverall(p)}%</span>
                      </div>
                      {!unlocked && !p.startedAt && (
                        <p className="mt-1 text-xs text-warn">
                          Disponível após consolidar os fundamentos necessários. Você ainda pode abrir — com aviso.
                        </p>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
            {i < STAGES.length - 1 && (
              <p className="mt-4 text-center text-fg-subtle" aria-hidden>
                ↓
              </p>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
