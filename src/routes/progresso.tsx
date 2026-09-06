import { createFileRoute } from "@tanstack/react-router";
import { CONCEPTS } from "@/content/concepts";
import { MODULES } from "@/content/modules";
import { STAGES } from "@/content/stages";
import { conceptualMastery, moduleOverall, stageProgress, trailProgress } from "@/engine/progress";
import { ProgressMeter } from "@/components/progress-meter";
import { emptyModuleProgress, useAppStore } from "@/store/app-store";

export const Route = createFileRoute("/progresso")({ component: ProgressPage });

function ProgressPage() {
  const modules = useAppStore((s) => s.modules);
  const concepts = useAppStore((s) => s.concepts);
  const answers = useAppStore((s) => s.answers);
  const mastery = conceptualMastery(
    Object.fromEntries(
      CONCEPTS.map((c) => [
        c.id,
        concepts[c.id] ?? { scores: { comprehension: 0, recall: 0, contrast: 0, application: 0 }, state: "UNSEEN" },
      ]),
    ),
  );

  return (
    <div className="space-y-8 pt-2">
      <header>
        <h1 className="font-display text-3xl">Progresso</h1>
        <p className="mt-1 text-sm text-fg-muted">
          Percentual de leitura não é domínio. Aqui o retrato é multidimensional.
        </p>
      </header>
      <ProgressMeter value={trailProgress(modules)} label="Trilha" />
      {STAGES.map((s) => (
        <ProgressMeter key={s.id} value={stageProgress(s.id, modules)} label={`${s.name}`} />
      ))}
      <section>
        <h2 className="font-display text-xl">Domínio conceitual</h2>
        <p className="mt-1 text-sm text-fg-muted">
          {mastery.mastered} consolidados · {mastery.fragile} frágeis · {mastery.total} no grafo
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="font-display text-xl">Por módulo</h2>
        {MODULES.map((m) => {
          const p = modules[m.id] ?? emptyModuleProgress();
          return (
            <article key={m.id} className="rounded-lg border border-border px-4 py-3">
              <div className="flex justify-between text-sm">
                <span>
                  {m.number}. {m.shortTitle}
                </span>
                <span className="tabular-nums text-fg-subtle">{moduleOverall(p)}%</span>
              </div>
              <dl className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1 text-xs text-fg-muted">
                <div>Conteúdo {p.content}%</div>
                <div>Compreensão {p.comprehension}%</div>
                <div>Recuperação {p.recall}%</div>
                <div>Contraste {p.contrast}%</div>
                <div>Aplicação {p.application}%</div>
              </dl>
            </article>
          );
        })}
      </section>
      <p className="text-xs text-fg-subtle">{answers.length} respostas registradas neste dispositivo.</p>
    </div>
  );
}
