import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CONCEPT_BY_ID } from "@/content/concepts";
import { DIAGNOSTIC } from "@/content/diagnostic";
import { MODULE_BY_ID, MODULES } from "@/content/modules";
import { APP_PRINCIPLE, STAGES } from "@/content/stages";
import { conceptualMastery, stageProgress, trailProgress } from "@/engine/progress";
import { levelFromXp } from "@/engine/level";
import { ProgressMeter } from "@/components/progress-meter";
import { InstallAppCard } from "@/components/install-app";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { fragileConceptIds, useAppStore } from "@/store/app-store";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const onboarding = useAppStore((s) => s.onboardingComplete);
  if (!onboarding) return <Onboarding />;
  return <Dashboard />;
}

function Onboarding() {
  const complete = useAppStore((s) => s.completeOnboarding);
  const diagnosticDone = useAppStore((s) => s.diagnosticDone);
  const saveDiagnostic = useAppStore((s) => s.saveDiagnostic);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [q, setQ] = useState(0);

  if (step === 0) {
    return (
      <section className="flex min-h-[62dvh] flex-col justify-end gap-6 pb-8 pt-10">
        <p className="text-xs font-medium uppercase tracking-widest text-accent">Trilha progressiva</p>
        <h1 className="font-display text-4xl leading-tight">
          Do neurônio à compreensão do comportamento
        </h1>
        <p className="text-base leading-relaxed text-fg-muted">{APP_PRINCIPLE}</p>
        <Button size="lg" className="w-full" onClick={() => setStep(1)}>
          Começar
        </Button>
      </section>
    );
  }

  if (step === 1) {
    return (
      <section className="space-y-5 pt-6">
        <h1 className="font-display text-3xl leading-tight">Cinco coisas que não são a mesma</h1>
        <ul className="space-y-3">
          {["Exposição", "Compreensão", "Recuperação", "Domínio", "Aplicação"].map((x, i) => (
            <li key={x} className="rounded-lg border border-border bg-bg-elevated px-4 py-3">
              <span className="font-mono text-xs text-fg-subtle">{i + 1}</span>
              <p className="font-display text-xl">{x}</p>
            </li>
          ))}
        </ul>
        <p className="text-sm leading-relaxed text-fg-muted">
          Ler um módulo não o conclui. Você vai reconstruir, contrastar e aplicar. Erros alimentam a revisão — nunca uma punição.
        </p>
        <Button className="w-full" onClick={() => setStep(2)}>
          Entendi
        </Button>
      </section>
    );
  }

  if (step === 2 && !diagnosticDone) {
    const item = DIAGNOSTIC[q]!;
    return (
      <section className="space-y-5 pt-6">
        <p className="text-xs uppercase tracking-wide text-fg-subtle">
          Diagnóstico opcional · {q + 1}/{DIAGNOSTIC.length}
        </p>
        <h1 className="font-display text-2xl leading-snug">{item.prompt}</h1>
        <ul className="space-y-2">
          {item.options.map((o) => (
            <li key={o.id}>
              <button
                type="button"
                onClick={() => {
                  const next = { ...answers, [item.id]: o.id };
                  setAnswers(next);
                  if (q < DIAGNOSTIC.length - 1) setQ(q + 1);
                  else {
                    saveDiagnostic(next);
                    setStep(3);
                  }
                }}
                className="min-h-11 w-full rounded-lg border border-border bg-bg-elevated px-4 py-3 text-left text-sm leading-snug hover:border-border-strong"
              >
                {o.text}
              </button>
            </li>
          ))}
        </ul>
        <Button
          variant="ghost"
          className="w-full"
          onClick={() => {
            complete();
          }}
        >
          Pular diagnóstico e começar pelo módulo 1
        </Button>
      </section>
    );
  }

  const correct = DIAGNOSTIC.filter((d) => answers[d.id] === d.correctAnswer).length;
  return (
    <section className="space-y-5 pt-6">
      <h1 className="font-display text-3xl">Olá. Vamos continuar?</h1>
      {diagnosticDone && (
        <p className="text-sm text-fg-muted">
          Você acertou {correct} de {DIAGNOSTIC.length} no diagnóstico. Não é uma reprovação — é um retrato inicial. Recomendamos começar pelos fundamentos (módulos 1–4), mesmo que algumas respostas já estejam sólidas.
        </p>
      )}
      <Button size="lg" className="w-full" onClick={() => complete()}>
        Entrar na trilha
      </Button>
    </section>
  );
}

function Dashboard() {
  const session = useAppStore((s) => s.session);
  const modules = useAppStore((s) => s.modules);
  const concepts = useAppStore((s) => s.concepts);
  const lastActiveAt = useAppStore((s) => s.lastActiveAt);
  const nextAction = useAppStore((s) => s.nextAction);
  const xp = useAppStore((s) => s.xp);
  const domainSession = useAppStore((s) => s.domain.currentSession);
  const action = nextAction();
  const trail = trailProgress(modules);
  const mastery = conceptualMastery(concepts);
  const fragile = fragileConceptIds({ concepts, doubts: useAppStore.getState().doubts });
  const longAbsence = lastActiveAt > 0 && Date.now() - lastActiveAt > 14 * 24 * 60 * 60 * 1000;
  const level = levelFromXp(xp);
  const completedCount = Object.values(modules).filter((m) => m.completed).length;

  const continueTarget = useMemo(() => {
    if (action.type === "resume_session" || action.type === "continue_module" || action.type === "start_module") {
      return MODULE_BY_ID[action.moduleId];
    }
    if (action.type === "fragile_prereq") return MODULE_BY_ID[action.moduleId];
    if (session?.moduleId) return MODULE_BY_ID[session.moduleId];
    return MODULES.find((m) => !(modules[m.id]?.completed)) ?? MODULES[0];
  }, [action, session, modules]);

  const dueReviews = Object.entries(concepts).filter(
    ([, c]) => c.nextReviewAt && c.nextReviewAt <= Date.now(),
  ).length;

  const prev = continueTarget
    ? MODULES.find((m) => m.number === continueTarget.number - 1)
    : undefined;

  return (
    <div className="space-y-6 pt-2">
      <header className="space-y-3">
        <div className="flex items-baseline justify-between gap-3">
          <div>
            <p className="text-sm text-fg-muted">Olá. Vamos continuar?</p>
            <h1 className="font-display text-3xl leading-tight tracking-tight">
              Próxima atividade
            </h1>
          </div>
          <div className="shrink-0 rounded-full border border-border bg-bg-elevated px-3 py-1.5 text-right text-xs font-medium">
            <span className="text-fg-subtle">Nível</span>{" "}
            <span className="text-fg">{level.level}</span>
            <span className="ml-2 text-fg-subtle">{xp} XP</span>
          </div>
        </div>
      </header>

      {(completedCount > 0 || domainSession) && (
        <section className="rounded-xl border border-accent/25 bg-accent-soft/40 p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-accent">
            Modo Domínio
          </p>
          <p className="mt-1 text-sm text-fg">
            {domainSession
              ? `Sessão em curso: item ${domainSession.index + 1} de ${domainSession.items.length}.`
              : "Contrafactuais, casos integrados e revisão dimensional em um lugar só."}
          </p>
          <Link to="/dominio" className="mt-3 block">
            <Button className="w-full" variant="secondary">
              {domainSession ? "Retomar sessão" : "Continuar no Domínio"}
            </Button>
          </Link>
        </section>
      )}

      {longAbsence && (
        <section className="rounded-xl border border-warn/30 bg-warn-soft px-4 py-4 text-sm text-warn">
          <p className="font-medium">Alguns fundamentos podem ter enfraquecido.</p>
          <p className="mt-1">
            Não reiniciamos tudo. Uma revisão curta reconstrói o que ainda está acessível.
          </p>
          <Link to="/revisoes" className="mt-3 block">
            <Button variant="secondary" className="w-full">
              Avaliação de retomada
            </Button>
          </Link>
        </section>
      )}

      <section className="rounded-xl border border-border bg-bg-elevated p-5 shadow-soft">
        <p className="text-xs font-medium uppercase tracking-wide text-accent">Continuar</p>
        {action.type === "review" && CONCEPT_BY_ID[action.conceptId] ? (
          <>
            <h2 className="mt-2 font-display text-2xl leading-tight">
              Revisar: {CONCEPT_BY_ID[action.conceptId]!.name}
            </h2>
            <p className="mt-1 text-sm text-fg-muted">{action.reason}</p>
            <Link to="/revisoes" className="mt-4 block">
              <Button className="w-full">
                Abrir revisão <ArrowRight className="size-4" />
              </Button>
            </Link>
          </>
        ) : action.type === "fragile_prereq" ? (
          <>
            <h2 className="mt-2 font-display text-2xl leading-tight">
              Um pré-requisito ainda está frágil
            </h2>
            <p className="mt-1 text-sm text-fg-muted">
              {CONCEPT_BY_ID[action.conceptId]?.name ?? "Este conceito"} ainda precisa de consolidação antes de aprofundar{" "}
              {MODULE_BY_ID[action.moduleId]?.shortTitle}. Você pode avançar — o aviso permanece.
            </p>
            <Link to="/conceito/$conceptId" params={{ conceptId: action.conceptId }} className="mt-4 block">
              <Button className="w-full">Revisar a diferença</Button>
            </Link>
          </>
        ) : continueTarget ? (
          <>
            <h2 className="mt-2 font-display text-2xl leading-tight">{continueTarget.title}</h2>
            <p className="mt-1 text-sm text-fg-muted">
              Módulo {continueTarget.number} · {STAGES[continueTarget.stage - 1]?.name}. Você concluiu{" "}
              {modules[continueTarget.id]?.content ?? 0}% da exposição.
            </p>
            {prev && (modules[prev.id]?.completed || (modules[prev.id]?.content ?? 0) > 50) && (
              <p className="mt-3 text-sm leading-relaxed">{prev.integration}</p>
            )}
            {action.type === "resume_session" && (
              <p className="mt-2 text-sm text-accent">
                Você estava estudando o módulo {continueTarget.number}. Deseja continuar?
              </p>
            )}
            <Link to="/modulo/$moduleId" params={{ moduleId: continueTarget.id }} className="mt-4 block">
              <Button className="w-full">
                Continuar <ArrowRight className="size-4" />
              </Button>
            </Link>
          </>
        ) : (
          <p className="mt-2 text-sm text-fg-muted">A trilha está aberta à exploração.</p>
        )}
      </section>

      <section className="rounded-xl border border-border bg-bg-elevated p-5">
        <p className="text-xs font-medium uppercase tracking-wide text-fg-subtle">Revisar</p>
        {dueReviews > 0 || fragile.length > 0 ? (
          <>
            <p className="mt-2 text-sm">
              {dueReviews > 0
                ? `Você possui ${dueReviews} conceito${dueReviews === 1 ? "" : "s"} para revisar hoje.`
                : "Há conceitos que pedem atenção."}
            </p>
            <ul className="mt-3 space-y-1">
              {fragile.slice(0, 4).map((id) => (
                <li key={id}>
                  <Link
                    to="/conceito/$conceptId"
                    params={{ conceptId: id }}
                    className="text-sm text-fg-muted underline-offset-4 hover:underline"
                  >
                    {CONCEPT_BY_ID[id]?.name ?? id}
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="/revisoes" className="mt-4 block">
              <Button variant="secondary" className="w-full">
                Abrir revisões
              </Button>
            </Link>
          </>
        ) : (
          <p className="mt-2 text-sm text-fg-muted">
            Nenhuma revisão vencida. Quando um conceito enfraquecer, ele volta para cá.
          </p>
        )}
      </section>

      <section className="rounded-xl border border-border bg-bg-elevated p-5">
        <p className="text-xs font-medium uppercase tracking-wide text-fg-subtle">Progresso</p>
        <div className="mt-3 space-y-3">
          <ProgressMeter value={trail} label="Trilha" />
          {STAGES.map((s) => (
            <ProgressMeter
              key={s.id}
              value={stageProgress(s.id, modules)}
              label={`Etapa ${s.id} · ${s.name}`}
            />
          ))}
        </div>
        <p className="mt-3 text-sm text-fg-muted">
          Domínio conceitual: {mastery.mastered} consolidados, {mastery.fragile} frágeis.
          O indicador principal não é o tempo estudado — é o que você reconstrói e aplica.
        </p>
        <Link to="/progresso" className="mt-3 inline-block text-sm text-accent underline-offset-4 hover:underline">
          Ver detalhes
        </Link>
      </section>

      <section className="rounded-xl border border-border bg-bg-elevated p-5">
        <p className="text-xs font-medium uppercase tracking-wide text-fg-subtle">Explorar</p>
        <p className="mt-2 text-sm text-fg-muted">
          A trilha é sequencial. A biblioteca é livre — visualizar um conceito não conclui o módulo.
        </p>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <Link className={cn("rounded-lg bg-surface px-3 py-3 text-sm")} to="/trilha">
            Mapa da trilha
          </Link>
          <Link className="rounded-lg bg-surface px-3 py-3 text-sm" to="/conceitos">
            Conceitos
          </Link>
          <Link className="rounded-lg bg-surface px-3 py-3 text-sm" to="/mitos">
            Mitos
          </Link>
          <Link className="rounded-lg bg-surface px-3 py-3 text-sm" to="/desafios">
            Desafios
          </Link>
        </div>
      </section>

      <InstallAppCard />
    </div>
  );
}
