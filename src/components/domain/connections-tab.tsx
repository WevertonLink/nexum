import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { MODULES } from "@/content/modules";
import { CONCEPT_BY_ID } from "@/content/concepts";
import { cn } from "@/lib/utils";
import { moduleConnections, moduleShort } from "./domain-utils";

export function ConnectionsTab() {
  const connections = useMemo(() => moduleConnections(), []);
  const [selected, setSelected] = useState<string>(MODULES[0]?.id ?? "");

  const outgoing = connections.filter(
    (c) => c.moduleId === selected || c.peerId === selected,
  );

  return (
    <div className="space-y-5">
      <section className="rounded-xl border border-border bg-bg-elevated p-5">
        <p className="text-xs font-medium uppercase tracking-wide text-fg-subtle">
          Conexões entre módulos
        </p>
        <p className="mt-2 text-sm text-fg-muted">
          Cada aresta mostra quantos conceitos os dois módulos compartilham.
          Nomes iguais entre módulos são o esqueleto do currículo.
        </p>
      </section>

      <div>
        <label className="block text-xs font-medium uppercase tracking-wide text-fg-subtle">
          Ver conexões de
        </label>
        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className="mt-2 min-h-11 w-full rounded-md border border-border bg-bg-elevated px-3 text-sm"
        >
          {MODULES.map((m) => (
            <option key={m.id} value={m.id}>
              M{m.number} · {m.title}
            </option>
          ))}
        </select>
      </div>

      <ul className="space-y-2">
        {outgoing.length === 0 && (
          <li className="rounded-lg border border-border bg-bg-elevated p-6 text-center text-sm text-fg-muted">
            Nenhuma conexão direta detectada.
          </li>
        )}
        {outgoing.map((c) => {
          const peer = c.moduleId === selected ? c.peerId : c.moduleId;
          return (
            <li key={`${c.moduleId}-${c.peerId}`}>
              <Link
                to="/modulo/$moduleId"
                params={{ moduleId: peer }}
                className={cn(
                  "block rounded-lg border border-border bg-bg-elevated px-4 py-3",
                )}
              >
                <div className="flex items-baseline justify-between gap-2">
                  <span className="font-medium">{moduleShort(peer)}</span>
                  <span className="text-xs text-fg-subtle">
                    {c.sharedConceptIds.length} conceito
                    {c.sharedConceptIds.length === 1 ? "" : "s"}
                  </span>
                </div>
                <ul className="mt-2 flex flex-wrap gap-1.5">
                  {c.sharedConceptIds.slice(0, 8).map((cid) => (
                    <li
                      key={cid}
                      className="rounded-full bg-surface px-2 py-0.5 text-[11px] text-fg-muted"
                    >
                      {CONCEPT_BY_ID[cid]?.name ?? cid}
                    </li>
                  ))}
                  {c.sharedConceptIds.length > 8 && (
                    <li className="text-[11px] text-fg-subtle">
                      +{c.sharedConceptIds.length - 8}
                    </li>
                  )}
                </ul>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
