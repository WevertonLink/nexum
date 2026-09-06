import { CheckCircle2, Circle, RotateCcw } from "lucide-react";
import { COUNTERFACTUALS } from "@/content/counterfactual";
import { MODULE_BY_ID } from "@/content/modules";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/store/app-store";
import { counterfactualStatus } from "./domain-utils";

export function CounterfactualsTab() {
  const history = useAppStore((s) => s.domain.counterfactual);
  const start = useAppStore((s) => s.startGuidedSession);

  const withMeta = COUNTERFACTUALS.map((cf) => ({
    cf,
    status: counterfactualStatus(history[cf.id]),
    module: MODULE_BY_ID[cf.moduleId],
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
          22 contrafactuais
        </p>
        <p className="mt-2 text-sm text-fg-muted">
          Cada item força uma reconstrução causal: se X tivesse ocorrido de
          outro modo, o que quebra e por quê. A cadeia de passos é o produto.
        </p>
        <p className="mt-2 text-xs text-fg-subtle">
          {summary.done} consolidado{summary.done === 1 ? "" : "s"} · {summary.revisit} para revisar · {summary.novos} novo{summary.novos === 1 ? "" : "s"}
        </p>
      </section>

      <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
        {withMeta.map(({ cf, status, module }) => (
          <li key={cf.id}>
            <button
              type="button"
              onClick={() =>
                start([{ kind: "counterfactual", id: cf.id, status: "pending" }])
              }
              className={cn(
                "flex w-full flex-col gap-1 rounded-lg border px-4 py-3 text-left transition-colors",
                status === "consolidado" && "border-ok/40 bg-ok-soft/40",
                status === "revisar" && "border-warn/40 bg-warn-soft/40",
                status === "novo" && "border-border bg-bg-elevated hover:border-border-strong",
              )}
            >
              <span className="flex items-baseline justify-between gap-2">
                <span className="text-xs font-medium uppercase tracking-wide text-fg-subtle">
                  {module ? `M${module.number}` : "?"} · {module?.shortTitle ?? cf.moduleId}
                </span>
                <StatusIcon status={status} />
              </span>
              <span className="font-display text-base leading-tight">{cf.title}</span>
              <span className="text-xs text-fg-muted line-clamp-2">
                {cf.prompt.slice(0, 130)}
                {cf.prompt.length > 130 ? "…" : ""}
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
