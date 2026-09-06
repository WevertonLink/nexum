import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { AlertTriangle, Compass, GitBranch, GitCompareArrows, LayoutGrid, ListChecks, Route as RouteIcon } from "lucide-react";
import { useAppStore } from "@/store/app-store";
import { levelFromXp } from "@/engine/level";
import { cn } from "@/lib/utils";
import { TodayTab } from "@/components/domain/today-tab";
import { GuidedSessionBadge } from "@/components/domain/guided-session";

export const Route = createFileRoute("/dominio")({ component: DomainLayout });

const DOMAIN_TABS = [
  { slug: "hoje", label: "Hoje", icon: Compass },
  { slug: "revisar", label: "Revisar", icon: ListChecks },
  { slug: "frageis", label: "Frágeis", icon: AlertTriangle },
  { slug: "contrafactuais", label: "Contrafactuais", icon: GitCompareArrows },
  { slug: "casos", label: "Casos", icon: LayoutGrid },
  { slug: "conexoes", label: "Conexões", icon: GitBranch },
  { slug: "trilhas", label: "Trilhas", icon: RouteIcon },
] as const;

function DomainLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const xp = useAppStore((s) => s.xp);
  const level = levelFromXp(xp);
  const activeSlug = pathname.split("/")[2] || "hoje";
  const isRoot = pathname === "/dominio" || pathname === "/dominio/";

  return (
    <div className="space-y-5 pt-2">
      <header className="space-y-3">
        <div className="flex items-baseline justify-between gap-3">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-accent">
              Modo Domínio
            </p>
            <h1 className="font-display text-3xl leading-tight">
              Sair da leitura e atravessar o que aprendeu
            </h1>
          </div>
          <div className="shrink-0 rounded-full border border-border bg-bg-elevated px-3 py-1.5 text-right text-xs font-medium">
            <span className="text-fg-subtle">Nível</span>{" "}
            <span className="text-fg">{level.level}</span>
            <span className="ml-2 text-fg-subtle">{xp} XP</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-fg-muted">
          <GuidedSessionBadge />
        </div>
      </header>

      <nav
        aria-label="Áreas do Modo Domínio"
        className="-mx-1 overflow-x-auto pb-1"
      >
        <ul className="flex min-w-max gap-1 px-1">
          {DOMAIN_TABS.map((t) => {
            const active = activeSlug === t.slug || (isRoot && t.slug === "hoje");
            const Icon = t.icon;
            return (
              <li key={t.slug}>
                <Link
                  to="/dominio/$tab"
                  params={{ tab: t.slug }}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "inline-flex min-h-11 items-center gap-1.5 whitespace-nowrap rounded-full border px-3 py-2 text-sm",
                    active
                      ? "border-accent bg-accent-soft text-accent"
                      : "border-border bg-bg-elevated text-fg-muted hover:border-border-strong",
                  )}
                >
                  <Icon className="size-4" />
                  {t.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {isRoot ? <TodayTab /> : <Outlet />}
    </div>
  );
}
