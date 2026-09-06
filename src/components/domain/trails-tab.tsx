import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MODULES } from "@/content/modules";
import { COUNTERFACTUAL_BY_ID } from "@/content/counterfactual";
import { DOMAIN_CASE_BY_ID } from "@/content/domain-case";
import { useAppStore } from "@/store/app-store";
import type { DomainSessionItem } from "@/store/app-store";

type Trail = {
  id: string;
  title: string;
  synopsis: string;
  moduleIds: string[];
  counterfactualIds: string[];
  caseIds: string[];
};

const TRAILS: Trail[] = [
  {
    id: "fundamentos",
    title: "Fundamentos — do neurônio ao circuito",
    synopsis:
      "Base biológica que sustenta tudo o mais: célula, membrana, potencial de ação, sinapse.",
    moduleIds: ["module_01", "module_02", "module_03", "module_04", "module_05", "module_06"],
    counterfactualIds: [],
    caseIds: [],
  },
  {
    id: "motivacao",
    title: "Motivação e recompensa",
    synopsis:
      "Dopamina como sinal de erro de previsão, aprendizado por recompensa e as armadilhas de motivação.",
    moduleIds: ["module_14"],
    counterfactualIds: ["esforco-recuperacao"],
    caseIds: ["sentia-pronto"],
  },
  {
    id: "memoria",
    title: "Memória — do disparo à lembrança que dura",
    synopsis:
      "Plasticidade, LTP, consolidação e reconsolidação. O sono não é pausa; é parte do que grava.",
    moduleIds: ["module_18", "module_19", "module_15"],
    counterfactualIds: ["memoria-reconsolidacao"],
    caseIds: ["disparo-a-lembranca", "noite-que-grava"],
  },
  {
    id: "ritmos",
    title: "Ritmos e comunicação",
    synopsis:
      "Frequência e fase, janelas de excitabilidade e sincronia que vira comunicação efetiva.",
    moduleIds: ["module_23", "module_17"],
    counterfactualIds: ["ritmos-fase"],
    caseIds: [],
  },
];

export function TrailsTab() {
  const start = useAppStore((s) => s.startGuidedSession);

  function startTrail(t: Trail) {
    const items: DomainSessionItem[] = [];
    for (const id of t.counterfactualIds) {
      if (COUNTERFACTUAL_BY_ID[id]) {
        items.push({ kind: "counterfactual", id, status: "pending" });
      }
    }
    for (const id of t.caseIds) {
      if (DOMAIN_CASE_BY_ID[id]) {
        items.push({ kind: "case", id, status: "pending" });
      }
    }
    if (items.length === 0) return;
    start(items);
  }

  return (
    <div className="space-y-5">
      <section className="rounded-xl border border-border bg-bg-elevated p-5">
        <p className="text-xs font-medium uppercase tracking-wide text-fg-subtle">
          Trilhas curadas
        </p>
        <p className="mt-2 text-sm text-fg-muted">
          Recortes que atravessam módulos com um fio narrativo. Cada trilha pode
          virar uma sessão guiada quando tem contrafactuais ou casos ligados.
        </p>
      </section>

      <ul className="space-y-3">
        {TRAILS.map((t) => (
          <li
            key={t.id}
            className="rounded-xl border border-border bg-bg-elevated p-5"
          >
            <p className="text-xs font-medium uppercase tracking-wide text-accent">
              Trilha
            </p>
            <h3 className="mt-1 font-display text-xl leading-tight">{t.title}</h3>
            <p className="mt-2 text-sm text-fg-muted">{t.synopsis}</p>

            <ul className="mt-3 flex flex-wrap gap-1.5">
              {t.moduleIds.map((mid) => {
                const m = MODULES.find((x) => x.id === mid);
                if (!m) return null;
                return (
                  <li key={mid}>
                    <Link
                      to="/modulo/$moduleId"
                      params={{ moduleId: mid }}
                      className="rounded-full bg-surface px-2 py-0.5 text-[11px] text-fg-muted hover:text-fg"
                    >
                      M{m.number} · {m.shortTitle}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {(t.counterfactualIds.length > 0 || t.caseIds.length > 0) && (
              <Button
                variant="secondary"
                className="mt-4 w-full"
                onClick={() => startTrail(t)}
              >
                Iniciar sessão da trilha
                <ArrowRight className="size-4" />
              </Button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
