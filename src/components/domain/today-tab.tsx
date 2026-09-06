import { Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COUNTERFACTUAL_BY_ID } from "@/content/counterfactual";
import { DOMAIN_CASE_BY_ID } from "@/content/domain-case";
import { useAppStore } from "@/store/app-store";
import { GuidedSession } from "./guided-session";
import {
  buildTodayQueue,
  collectDueReviews,
  conceptName,
  suggestCases,
  suggestCounterfactuals,
} from "./domain-utils";

export function TodayTab() {
  const domain = useAppStore((s) => s.domain);
  const srsRecords = useAppStore((s) => s.srsRecords);
  const start = useAppStore((s) => s.startGuidedSession);

  if (domain.currentSession) return <GuidedSession />;

  const dues = collectDueReviews(srsRecords).slice(0, 6);
  const suggestedCf = suggestCounterfactuals(domain.counterfactual, 1)[0];
  const suggestedCase = suggestCases(domain.case, 1)[0];
  const cf = suggestedCf ? COUNTERFACTUAL_BY_ID[suggestedCf] : undefined;
  const cs = suggestedCase ? DOMAIN_CASE_BY_ID[suggestedCase] : undefined;

  const queue = buildTodayQueue(domain.counterfactual, domain.case);

  return (
    <div className="space-y-5">
      <section className="rounded-xl border border-border bg-bg-elevated p-5 shadow-soft">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-accent">
              Sessão guiada
            </p>
            <h2 className="mt-1 font-display text-2xl leading-tight">
              4 itens · contrafactuais e casos
            </h2>
            <p className="mt-1 text-sm text-fg-muted">
              Mistura calibrada: reconstruir cadeias causais e atravessar módulos.
            </p>
          </div>
          <Sparkles className="size-6 text-accent" />
        </div>
        <Button
          className="mt-4 w-full"
          onClick={() => start(queue)}
          disabled={queue.length === 0}
        >
          <Play className="size-4" /> Começar sessão
        </Button>
      </section>

      {cf && (
        <section className="rounded-xl border border-border bg-bg-elevated p-5">
          <p className="text-xs font-medium uppercase tracking-wide text-fg-subtle">
            Contrafactual sugerido
          </p>
          <h3 className="mt-1 font-display text-lg leading-tight">{cf.title}</h3>
          <p className="mt-1 text-sm text-fg-muted">
            {cf.prompt.slice(0, 140)}
            {cf.prompt.length > 140 ? "…" : ""}
          </p>
          <Button
            variant="secondary"
            className="mt-3 w-full"
            onClick={() =>
              start([{ kind: "counterfactual", id: cf.id, status: "pending" }])
            }
          >
            Abrir contrafactual
          </Button>
        </section>
      )}

      {cs && (
        <section className="rounded-xl border border-border bg-bg-elevated p-5">
          <p className="text-xs font-medium uppercase tracking-wide text-fg-subtle">
            Caso integrado sugerido
          </p>
          <h3 className="mt-1 font-display text-lg leading-tight">{cs.title}</h3>
          <p className="mt-1 text-sm text-fg-muted">
            {cs.scenario.slice(0, 140)}
            {cs.scenario.length > 140 ? "…" : ""}
          </p>
          <Button
            variant="secondary"
            className="mt-3 w-full"
            onClick={() => start([{ kind: "case", id: cs.id, status: "pending" }])}
          >
            Abrir caso
          </Button>
        </section>
      )}

      <section className="rounded-xl border border-border bg-bg-elevated p-5">
        <p className="text-xs font-medium uppercase tracking-wide text-fg-subtle">
          Revisões dimensionais para hoje
        </p>
        {dues.length === 0 ? (
          <p className="mt-2 text-sm text-fg-muted">
            Nada vencido no schedule 4-dim. Volte após responder alguns módulos.
          </p>
        ) : (
          <ul className="mt-3 space-y-1.5">
            {dues.map((d) => (
              <li
                key={`${d.conceptId}-${d.dim}`}
                className="flex items-baseline justify-between gap-2 text-sm"
              >
                <span>{conceptName(d.conceptId)}</span>
                <span className="text-xs text-fg-subtle">
                  {d.dim} · box {d.record.box}
                  {d.overdue > 0 ? ` · atrasado ${d.overdue}d` : ""}
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
