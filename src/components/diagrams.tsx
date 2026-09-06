import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

function Stepper({
  steps,
  children,
}: {
  steps: { id: string; label: string; body: string }[];
  children?: (i: number) => ReactNode;
}) {
  const [i, setI] = useState(0);
  const step = steps[i]!;
  return (
    <div className="rounded-xl border border-border bg-bg-elevated p-4 shadow-soft">
      <div className="mb-3 flex gap-1" role="tablist" aria-label="Etapas do diagrama">
        {steps.map((s, idx) => (
          <button
            key={s.id}
            type="button"
            aria-selected={idx === i}
            className={cn(
              "h-1.5 flex-1 rounded-full transition-colors duration-200",
              idx <= i ? "bg-accent" : "bg-surface-2",
            )}
            onClick={() => setI(idx)}
          />
        ))}
      </div>
      {children?.(i)}
      <p className="font-display text-lg text-fg">{step.label}</p>
      <p className="mt-1 text-sm leading-relaxed text-fg-muted">{step.body}</p>
      <div className="mt-4 flex gap-2">
        <Button variant="secondary" size="sm" onClick={() => setI((n) => Math.max(0, n - 1))} disabled={i === 0}>
          Anterior
        </Button>
        <Button size="sm" onClick={() => setI((n) => Math.min(steps.length - 1, n + 1))} disabled={i === steps.length - 1}>
          Próxima etapa
        </Button>
      </div>
    </div>
  );
}

export function ActionPotentialDiagram() {
  const steps = [
    { id: "rest", label: "Repouso", body: "Membrana mais permeável a K⁺. Potencial negativo, estável o bastante para esperar." },
    { id: "th", label: "Limiar", body: "Corrente de Na⁺ começa a vencer as que puxam de volta. O ciclo positivo se arma." },
    { id: "na", label: "Na⁺ entra", body: "Canais de sódio dependentes de voltagem abrem. O interior torna-se menos negativo." },
    { id: "dep", label: "Despolarização", body: "O potencial sobe rapidamente. Isso não é uma emoção — é um evento elétrico." },
    { id: "k", label: "K⁺ e inativação", body: "Na⁺ inativa; K⁺ sai. A fase ascendente se encerra." },
    { id: "rep", label: "Repolarização", body: "O potencial volta em direção ao repouso. A bomba não é a causa imediata." },
    { id: "ref", label: "Período refratário", body: "Um novo spike é difícil. Isso dá direção à propagação." },
    { id: "back", label: "Retorno", body: "A membrana está pronta outra vez. Os gradientes foram pouco gastos neste único evento." },
  ];
  return (
    <Stepper steps={steps}>
      {(i) => <SpikeSvg phase={i} />}
    </Stepper>
  );
}

function SpikeSvg({ phase }: { phase: number }) {
  const y = [62, 55, 28, 12, 30, 58, 72, 62][phase] ?? 62;
  return (
    <svg viewBox="0 0 220 90" className="mb-3 w-full text-accent" aria-hidden>
      <line x1="8" y1="62" x2="212" y2="62" stroke="currentColor" strokeOpacity="0.2" />
      <path
        d="M8 62 C40 62, 55 62, 70 50 S95 8, 110 12 S130 70, 150 62 S180 70, 212 62"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx={20 + phase * 26} cy={y} r="5" fill="currentColor" />
    </svg>
  );
}

export function SynapseDiagram() {
  const steps = [
    { id: "ap", label: "Potencial de ação", body: "O sinal regenerativo chega ao terminal. Ainda não houve transmissor na fenda." },
    { id: "term", label: "Terminal axônico", body: "A membrana pré-sináptica despolariza." },
    { id: "ca", label: "Canais de Ca²⁺", body: "Canais dependentes de voltagem se abrem no terminal." },
    { id: "in", label: "Entrada de Ca²⁺", body: "Este é o acoplamento. Sem Ca²⁺, o spike pode ter chegado em vão." },
    { id: "ves", label: "Vesícula", body: "O Ca²⁺ favorece a maquinaria de fusão." },
    { id: "fuse", label: "Fusão", body: "O transmissor é liberado na fenda. Quantizado, em unidades vesiculares." },
    { id: "nt", label: "Neurotransmissor", body: "Ligante, não personagem. Difunde até a membrana seguinte." },
    { id: "rec", label: "Receptor", body: "O efeito — rápido ou lento, excitatório ou não — decide-se aqui." },
  ];
  return (
    <Stepper steps={steps}>
      {(i) => <SynapseSvg phase={i} />}
    </Stepper>
  );
}

function SynapseSvg({ phase }: { phase: number }) {
  return (
    <svg viewBox="0 0 220 90" className="mb-3 w-full" aria-hidden>
      <rect x="8" y="18" width="88" height="54" rx="10" className="fill-accent-soft stroke-accent" strokeWidth="1.5" />
      <text x="52" y="50" textAnchor="middle" className="fill-accent" fontSize="11">
        pré
      </text>
      <rect x="124" y="18" width="88" height="54" rx="10" className="fill-info-soft stroke-info" strokeWidth="1.5" />
      <text x="168" y="50" textAnchor="middle" className="fill-info" fontSize="11">
        pós
      </text>
      {phase >= 2 && <circle cx="96" cy="45" r="4" className="fill-warn" />}
      {phase >= 5 && (
        <>
          <circle cx="110" cy="40" r="3" className="fill-accent" />
          <circle cx="110" cy="52" r="3" className="fill-accent" />
        </>
      )}
      {phase >= 7 && <circle cx="124" cy="45" r="5" className="fill-info" />}
    </svg>
  );
}

export function LevelsDiagram() {
  const levels = [
    "Molecular",
    "Celular",
    "Circuito",
    "Sistema",
    "Cognitivo",
    "Comportamental",
    "Social",
  ];
  return (
    <ol className="overflow-hidden rounded-xl border border-border bg-bg-elevated">
      {levels.map((l, i) => (
        <li
          key={l}
          className="flex items-center gap-3 border-b border-border px-4 py-3 last:border-0"
        >
          <span className="font-mono text-xs tabular-nums text-fg-subtle">{i + 1}</span>
          <span className="font-display text-base">{l}</span>
        </li>
      ))}
    </ol>
  );
}

export function HpaDiagram() {
  const items = [
    { t: "Hipotálamo", d: "CRH, entre outros sinais" },
    { t: "Hipófise", d: "ACTH na circulação" },
    { t: "Adrenal", d: "Glicocorticoides (cortisol)" },
    { t: "Feedback", d: "O produto regula a origem — não um interruptor de humor" },
  ];
  return (
    <ol className="space-y-2">
      {items.map((it, i) => (
        <li key={it.t} className="rounded-lg border border-border bg-bg-elevated px-4 py-3">
          <p className="text-xs font-medium uppercase tracking-wide text-fg-subtle">
            Etapa {i + 1}
          </p>
          <p className="font-display text-lg">{it.t}</p>
          <p className="text-sm text-fg-muted">{it.d}</p>
        </li>
      ))}
    </ol>
  );
}

export function ScarfDiagram() {
  const dims = [
    ["S", "Status", "Posição relativa"],
    ["C", "Certainty", "Previsibilidade"],
    ["A", "Autonomy", "Controle sobre o próprio ato"],
    ["R", "Relatedness", "Vínculo e exclusão"],
    ["F", "Fairness", "Justiça percebida"],
  ];
  return (
    <ul className="grid grid-cols-1 gap-2">
      {dims.map(([k, n, d]) => (
        <li key={k} className="flex gap-3 rounded-lg border border-border bg-bg-elevated px-4 py-3">
          <span className="font-display text-xl text-accent">{k}</span>
          <div>
            <p className="font-medium">{n}</p>
            <p className="text-sm text-fg-muted">{d}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export function Diagram({ kind }: { kind: "action_potential" | "synapse" | "hpa" | "levels" | "scarf" }) {
  if (kind === "action_potential") return <ActionPotentialDiagram />;
  if (kind === "synapse") return <SynapseDiagram />;
  if (kind === "hpa") return <HpaDiagram />;
  if (kind === "scarf") return <ScarfDiagram />;
  return <LevelsDiagram />;
}
