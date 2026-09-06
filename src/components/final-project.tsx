import { useMemo, useState } from "react";
import { FINAL_CASES, FINAL_PROJECT_FIELDS } from "@/content/diagnostic";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/store/app-store";
import { Button } from "./ui/button";

const RUBRIC = [
  { id: "precision", label: "Precisão científica" },
  { id: "integration", label: "Integração entre níveis" },
  { id: "explanation", label: "Qualidade da explicação" },
  { id: "evidence", label: "Distinção evidência / hipótese" },
  { id: "application", label: "Aplicação" },
  { id: "limits", label: "Reconhecimento das limitações" },
];

export function FinalProject() {
  const saved = useAppStore((s) => s.finalProject);
  const save = useAppStore((s) => s.saveFinalProject);
  const [caseId, setCaseId] = useState(saved?.caseId ?? FINAL_CASES[0]!.id);
  const [fields, setFields] = useState<Record<string, string>>(saved?.fields ?? {});
  const [scores, setScores] = useState<Record<string, number>>(saved?.selfScores ?? {});

  const total = useMemo(
    () => RUBRIC.reduce((a, r) => a + (scores[r.id] ?? 0), 0),
    [scores],
  );
  const caso = FINAL_CASES.find((c) => c.id === caseId)!;

  return (
    <div className="space-y-6">
      <p className="text-sm leading-relaxed text-fg-muted">
        A pontuação representa a qualidade desta resposta específica — não inteligência.
        Uma análise que admite incerteza pode ser melhor do que uma certeza inflada.
      </p>
      <fieldset className="space-y-2">
        <legend className="text-xs font-medium uppercase tracking-wide text-fg-subtle">Caso</legend>
        {FINAL_CASES.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setCaseId(c.id)}
            className={cn(
              "w-full rounded-lg border px-4 py-3 text-left",
              caseId === c.id ? "border-accent bg-accent-soft" : "border-border bg-bg-elevated",
            )}
          >
            <p className="font-medium">{c.title}</p>
            <p className="mt-1 text-sm text-fg-muted">{c.body}</p>
          </button>
        ))}
      </fieldset>
      <p className="rounded-lg bg-surface px-4 py-3 text-sm leading-relaxed">{caso.body}</p>
      {FINAL_PROJECT_FIELDS.map((f) => (
        <label key={f.id} className="block">
          <span className="font-display text-lg">{f.title}</span>
          <span className="mt-1 block text-sm text-fg-muted">{f.prompt}</span>
          <textarea
            value={fields[f.id] ?? ""}
            onChange={(e) => setFields({ ...fields, [f.id]: e.target.value })}
            placeholder={f.placeholder}
            className="mt-2 min-h-28 w-full rounded-lg border border-border bg-bg-elevated px-3 py-3 text-[15px] leading-relaxed"
          />
        </label>
      ))}
      <div>
        <h3 className="font-display text-xl">Autoavaliação (0–4)</h3>
        <ul className="mt-3 space-y-3">
          {RUBRIC.map((r) => (
            <li key={r.id}>
              <p className="text-sm">{r.label}</p>
              <div className="mt-1 flex gap-1">
                {[0, 1, 2, 3, 4].map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setScores({ ...scores, [r.id]: n })}
                    className={cn(
                      "size-10 rounded-md border text-sm tabular-nums",
                      (scores[r.id] ?? 0) === n
                        ? "border-accent bg-accent text-accent-fg"
                        : "border-border bg-bg-elevated",
                    )}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-4 font-display text-2xl tabular-nums">
          {total} <span className="text-base text-fg-muted">/ 24</span>
        </p>
      </div>
      <Button
        className="w-full"
        onClick={() =>
          save({ caseId, fields, selfScores: scores, submittedAt: Date.now() })
        }
      >
        Guardar projeto
      </Button>
      {saved?.submittedAt && (
        <p className="text-sm text-ok">
          Guardado neste dispositivo. Revise os limites: o que não pode ser concluído continua sendo o campo mais importante.
        </p>
      )}
    </div>
  );
}
