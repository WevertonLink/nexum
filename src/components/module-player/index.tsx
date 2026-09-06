import { HelpCircle, PenLine } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { STAGES } from "@/content/stages";
import { MODULE_BY_ID, orderedQuestions } from "@/content/modules";
import type { ModuleContent } from "@/content/types";
import { EMPTY_MODULE_PROGRESS, moduleOverall } from "@/engine/progress";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/store/app-store";
import { ProgressMeter } from "../progress-meter";
import { QuestionCard } from "../question-card";
import { TermSheet } from "../term-sheet";
import { Button } from "../ui/button";
import { BlockView } from "./block-view";
import { ModuleConclusion } from "./module-conclusion";

export function ModulePlayer({ mod }: { mod: ModuleContent }) {
  const startModule = useAppStore((s) => s.startModule);
  const seeBlock = useAppStore((s) => s.seeBlock);
  const setSessionPhase = useAppStore((s) => s.setSessionPhase);
  const completeModule = useAppStore((s) => s.completeModule);
  const session = useAppStore((s) => s.session);
  const progress = useAppStore((s) => s.modules[mod.id]) ?? EMPTY_MODULE_PROGRESS;
  const settings = useAppStore((s) => s.settings);
  const toggleBookmark = useAppStore((s) => s.toggleBookmark);
  const bookmarks = useAppStore((s) => s.bookmarks);
  const toggleDoubt = useAppStore((s) => s.toggleDoubt);
  const doubts = useAppStore((s) => s.doubts);
  const addNote = useAppStore((s) => s.addNote);
  const allModules = useAppStore((s) => s.modules);

  const [term, setTerm] = useState<string | null>(null);
  const [warning, setWarning] = useState<string | null>(null);
  const [note, setNote] = useState("");
  const [showNote, setShowNote] = useState(false);
  const [layer, setLayer] = useState<1 | 2 | 3>(settings.defaultLayer);
  const [qIndex, setQIndex] = useState(0);
  const [showAlt, setShowAlt] = useState(false);

  const stage = STAGES.find((s) => s.id === mod.stage)!;
  const questions = useMemo(() => orderedQuestions(mod), [mod]);
  const visibleBlocks = useMemo(
    () => mod.blocks.filter((b) => !b.layer || b.layer <= layer),
    [mod.blocks, layer],
  );

  const phase =
    session?.moduleId === mod.id
      ? session.phase
      : progress.completed
        ? "done"
        : progress.content >= 100
          ? "verify"
          : "intro";

  const currentIdx = Math.max(
    0,
    visibleBlocks.findIndex((b) => b.id === (session?.currentBlockId ?? progress.lastBlockId)),
  );
  const [idx, setIdx] = useState(currentIdx < 0 ? 0 : currentIdx);
  const idxRef = useRef(idx);
  idxRef.current = idx;
  const visibleLen = visibleBlocks.length;

  useEffect(() => {
    const w = startModule(mod.id);
    if (w.warning) setWarning(w.warning);
    setQIndex(0);
    setShowAlt(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mod.id]);

  useEffect(() => {
    if (phase !== "content") return;
    const b = visibleBlocks[idx];
    if (b) seeBlock(mod.id, b.id, b.conceptIds);
  }, [idx, mod.id, seeBlock, visibleBlocks, phase]);

  const block = visibleBlocks[idx];
  const bookmarked = bookmarks.some((b) => b.moduleId === mod.id && b.blockId === block?.id);
  const totalMin = mod.estimatedTime.essential + mod.estimatedTime.deepen + mod.estimatedTime.questions;

  function goNext() {
    setShowAlt(false);
    const i = idxRef.current;
    if (i < visibleLen - 1) setIdx(i + 1);
    else setSessionPhase("exposure_done");
  }

  const relatedStudied = mod.relatedModules.filter((id) => allModules[id]?.startedAt);

  return (
    <div className="pb-8">
      <header className="mb-6">
        <p className="text-xs font-medium uppercase tracking-widest text-accent">
          Etapa {mod.stage} · {stage.name}
        </p>
        <p className="mt-1 text-xs text-fg-subtle">
          Módulo {String(mod.number).padStart(2, "0")} · {mod.number} / 32
        </p>
        <h1 className="mt-2 font-display text-3xl leading-tight">{mod.title}</h1>
        <p className="mt-2 text-sm leading-relaxed text-fg-muted">Objetivo: {mod.objective}</p>
        <div className="mt-4">
          <ProgressMeter value={moduleOverall(progress)} label="Progresso deste módulo" />
        </div>
        {(progress.comprehension > 0 || progress.recall > 0) && (
          <dl className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1 text-xs text-fg-muted">
            <div>Conteúdo {progress.content}%</div>
            <div>Compreensão {progress.comprehension}%</div>
            <div>Recuperação {progress.recall}%</div>
            <div>Contraste {progress.contrast}%</div>
            <div>Aplicação {progress.application}%</div>
          </dl>
        )}
      </header>

      {warning && (
        <p className="mb-4 rounded-lg border border-warn/30 bg-warn-soft px-4 py-3 text-sm text-warn">
          {warning} Você pode avançar — o conceito frágil entra nas revisões.
        </p>
      )}

      {mod.stage === 4 && (
        <p className="mb-4 rounded-lg border border-border bg-surface px-4 py-3 text-sm leading-relaxed text-fg-muted">
          Conhecimento sobre mecanismos neurobiológicos não substitui avaliação clínica individual.
        </p>
      )}

      {phase === "intro" && (
        <section className="space-y-5">
          <p className="text-xs font-medium uppercase tracking-wide text-fg-subtle">Por que agora</p>
          <p className="text-base leading-relaxed">{mod.introduction}</p>
          <p className="font-display text-xl leading-snug">{mod.centralQuestion}</p>
          <p className="text-sm text-fg-muted">
            Tempo aproximado para planejamento — não é obrigação: essencial {mod.estimatedTime.essential} min,
            aprofundar {mod.estimatedTime.deepen} min, questões {mod.estimatedTime.questions} min (cerca de {totalMin} min).
          </p>
          {mod.prerequisites.length > 0 && (
            <p className="text-sm text-fg-muted">
              Utiliza:{" "}
              {mod.prerequisites
                .map((id) => MODULE_BY_ID[id]?.shortTitle ?? id)
                .join(", ")}
              .
            </p>
          )}
          {relatedStudied.length > 0 && (
            <p className="text-sm text-fg-muted">
              Você já estudou algo relacionado:{" "}
              {relatedStudied.map((id) => MODULE_BY_ID[id]?.shortTitle ?? id).join(", ")}.
            </p>
          )}
          {progress.lastBlockId && progress.content > 0 && progress.content < 100 && (
            <p className="rounded-lg bg-accent-soft px-4 py-3 text-sm text-accent">
              Você estava neste módulo. Deseja continuar de onde parou?
            </p>
          )}
          <div className="flex flex-col gap-2">
            <Button
              size="lg"
              className="w-full"
              onClick={() => {
                setSessionPhase("content");
                if (progress.lastBlockId) {
                  const i = visibleBlocks.findIndex((b) => b.id === progress.lastBlockId);
                  if (i >= 0) setIdx(i);
                }
              }}
            >
              {progress.content > 0 ? "Continuar de onde parei" : "Começar a exposição"}
            </Button>
            {progress.content >= 100 && (
              <Button variant="secondary" onClick={() => setSessionPhase("verify")}>
                Ir para a verificação
              </Button>
            )}
          </div>
        </section>
      )}

      {phase === "content" && (
        <div className="mb-4 flex gap-2">
          {([1, 2, 3] as const).map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setLayer(n)}
              className={cn(
                "h-11 min-w-11 rounded-md px-3 text-sm",
                layer === n ? "bg-accent text-accent-fg" : "bg-surface text-fg-muted",
              )}
            >
              {n === 1 ? "Essencial" : n === 2 ? "Aprofundar" : "Avançado"}
            </button>
          ))}
        </div>
      )}
      {phase === "content" && (
        <p className="mb-3 text-xs text-fg-subtle">
          A camada avançada não é necessária para terminar o essencial.
        </p>
      )}

      {phase === "content" && block && (
        <BlockView
          block={block}
          onTerm={setTerm}
          bookmarked={bookmarked}
          onBookmark={() => toggleBookmark(mod.id, block.id)}
          showAlt={showAlt}
          onToggleAlt={() => setShowAlt((v) => !v)}
        />
      )}

      {phase === "content" && (
        <div className="mt-6 space-y-3">
          <p className="text-center text-xs tabular-nums text-fg-subtle">
            {idx + 1} / {visibleBlocks.length}
          </p>
          <div className="grid grid-cols-2 gap-3">
            <Button variant="secondary" onClick={() => { setShowAlt(false); setIdx((i) => Math.max(0, i - 1)); }} disabled={idx === 0}>
              Anterior
            </Button>
            <Button onClick={goNext}>
              {idx === visibleBlocks.length - 1 ? "Terminei a exposição" : "Continuar"}
            </Button>
          </div>
        </div>
      )}

      {phase === "exposure_done" && (
        <section className="space-y-5">
          <h2 className="font-display text-2xl">Você terminou a exposição</h2>
          <p className="text-sm leading-relaxed text-fg-muted">
            Isso não significa necessariamente que você dominou o conceito. Ler não é reconstruir.
          </p>
          <div>
            <h3 className="font-medium">O que você deve conseguir fazer agora</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-fg-muted">
              {mod.summary.shouldKnow.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          {mod.misconceptions[0] && (
            <div className="rounded-lg bg-danger-soft px-4 py-3 text-sm">
              <p className="font-medium text-danger">Erro comum</p>
              <p className="mt-1 text-fg">{mod.misconceptions[0].claim}</p>
              <p className="mt-2 text-fg-muted">{mod.misconceptions[0].whyPlausible}</p>
              <p className="mt-2">
                <span className="font-medium">Onde está o problema. </span>
                {mod.misconceptions[0].problem}
              </p>
              <p className="mt-2">
                <span className="font-medium">Modelo mais adequado. </span>
                {mod.misconceptions[0].better}
              </p>
            </div>
          )}
          <div className="flex flex-col gap-2">
            <Button size="lg" onClick={() => { setQIndex(0); setSessionPhase("verify", 0); }}>
              Verificar meu domínio
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                completeModule(mod.id);
                setSessionPhase("done");
              }}
            >
              Avançar mesmo assim
            </Button>
            <p className="text-xs text-fg-subtle">
              Você pode avançar, mas os conceitos deste módulo entram nas revisões até haver reconstrução.
            </p>
          </div>
        </section>
      )}

      {phase === "verify" && (
        <div className="space-y-4">
          <h2 className="font-display text-2xl">Verificação</h2>
          <p className="text-sm text-fg-muted">
            Exposição não é domínio. Tente reconstruir, contrastar e aplicar. Usar pista não é fracasso.
          </p>
          <p className="text-xs tabular-nums text-fg-subtle">
            {qIndex + 1} / {questions.length}
          </p>
          {questions[qIndex] && (
            <QuestionCard
              question={questions[qIndex]!}
              onDone={() => {
                if (qIndex < questions.length - 1) setQIndex(qIndex + 1);
                else setSessionPhase("done");
              }}
            />
          )}
        </div>
      )}

      {phase === "done" && (
        <ModuleConclusion
          mod={mod}
          stageName={stage.name}
          onVerify={() => {
            setQIndex(0);
            setSessionPhase("verify", 0);
          }}
          onFinish={() => completeModule(mod.id)}
        />
      )}

      {!settings.focusMode && (
        <section className="mt-10 space-y-3 rounded-xl border border-border p-4">
          <button
            type="button"
            className="flex items-center gap-2 text-xs font-medium tracking-wide text-fg-subtle"
            onClick={() => setShowNote((v) => !v)}
          >
            <PenLine className="size-4" />
            Anotação
          </button>
          {showNote && (
            <>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Dúvida, observação, explicação própria…"
                className="min-h-20 w-full rounded-md border border-border bg-bg px-3 py-2 text-sm"
              />
              <div className="flex flex-wrap gap-2">
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => {
                    if (!note.trim()) return;
                    addNote({
                      moduleId: mod.id,
                      blockId: block?.id,
                      conceptId: block?.conceptIds?.[0] ?? mod.concepts[0],
                      text: note.trim(),
                    });
                    setNote("");
                  }}
                >
                  Salvar nota
                </Button>
                {mod.concepts[0] && (
                  <Button size="sm" variant="ghost" onClick={() => toggleDoubt(mod.concepts[0]!)}>
                    <HelpCircle className="size-4" />
                    {doubts.includes(mod.concepts[0]!) ? "Dúvida marcada" : "Tenho dúvida"}
                  </Button>
                )}
              </div>
            </>
          )}
        </section>
      )}

      {term && <TermSheet conceptId={term} onClose={() => setTerm(null)} />}
    </div>
  );
}
