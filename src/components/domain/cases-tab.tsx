import { CheckCircle2, Circle, RotateCcw } from "lucide-react";
import { DOMAIN_CASES } from "@/content/domain-case";
import { MODULE_BY_ID } from "@/content/modules";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/store/app-store";
import { caseStatus } from "./domain-utils";

export function CasesTab() {
  const history = useAppStore((s) => s.domain.case);
  const start = useAppStore((s) => s.startGuidedSession);

  const withMeta = DOMAIN_CASES.map((c) => ({
    c,
    status: caseStatus(history[c.id]),
  }));

  const summary = {
    done: withMeta.filter((x) => x.status === "consolidado").length,
    revisit: withMeta.filter((x) => x.status === "revisar").length,
    novos: withMeta.filter((x) => x.status === "novo").length,
  };

  return (
    <div className="space-y-5">
      <section className="rounded-xl border border-border bg-bg-elevated p-5">
        <p className="text-xs font-medium uppercase tracking-wide text-fg-subtle">
          12 casos integrados
        </p>
        <p className="mt-2 text-sm text-fg-muted">
          Cada caso cruza pelo menos três módulos. O objetivo não é testar um
          módulo isolado — é forçar a leitura que junta as peças.
        </p>
        <p className="mt-2 text-xs text-fg-subtle">
          {summary.done} consolidado{summary.done === 1 ? "" : "s"} · {summary.revisit} para revisar · {summary.novos} novo{summary.novos === 1 ? "" : "s"}
        </p>
      </section>

      <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
        {withMeta.map(({ c, status }) => (
          <li key={c.id}>
            <button
              type="button"
              onClick={() => start([{ kind: "case", id: c.id, status: "pending" }])}
              className={cn(
                "flex w-full flex-col gap-1 rounded-lg border px-4 py-3 text-left transition-colors",
                status === "consolidado" && "border-ok/40 bg-ok-soft/40",
                status === "revisar" && "border-warn/40 bg-warn-soft/40",
                status === "novo" && "border-border bg-bg-elevated hover:border-border-strong",
              )}
            >
              <span className="flex items-baseline justify-between gap-2">
                <span className="text-xs font-medium uppercase tracking-wide text-fg-subtle">
                  {c.modules.length} módulos
                </span>
                <StatusIcon status={status} />
              </span>
              <span className="font-display text-base leading-tight">{c.title}</span>
              <span className="mt-1 flex flex-wrap gap-1">
                {c.modules.map((mid) => {
                  const m = MODULE_BY_ID[mid];
                  if (!m) return null;
                  return (
                    <span
                      key={mid}
                      className="rounded-full bg-surface px-1.5 py-0.5 text-[10px] text-fg-muted"
                    >
                      M{m.number}
                    </span>
                  );
                })}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function StatusIcon({ status }: { status: "novo" | "consolidado" | "revisar" }) {
  if (status === "consolidado") return <CheckCircle2 className="size-4 text-ok" />;
  if (status === "revisar") return <RotateCcw className="size-4 text-warn" />;
  return <Circle className="size-4 text-fg-subtle" />;
}
