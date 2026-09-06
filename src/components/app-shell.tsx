import { Link, useRouterState } from "@tanstack/react-router";
import { Compass, GitBranch, Home, MoreHorizontal, RotateCcw } from "lucide-react";
import { NexumMark } from "@/components/nexum-mark";
import { SkipLink } from "@/components/nav/skip-link";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/store/app-store";

const NAV = [
  { to: "/", label: "Início", icon: Home },
  { to: "/trilha", label: "Trilha", icon: GitBranch },
  { to: "/dominio", label: "Domínio", icon: Compass },
  { to: "/revisoes", label: "Revisar", icon: RotateCcw },
  { to: "/mais", label: "Mais", icon: MoreHorizontal },
] as const;

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const focus = useAppStore((s) => s.settings.focusMode);
  const onboarding = useAppStore((s) => s.onboardingComplete);
  const hideNav = focus || pathname.startsWith("/modulo/") || !onboarding;

  return (
    <div className="paper-grain min-h-dvh bg-bg text-fg">
      <SkipLink />
      <div className="mx-auto flex min-h-dvh w-full max-w-lg flex-col md:max-w-2xl">
        <header className="flex items-center justify-between px-5 pb-2 pt-[max(1rem,env(safe-area-inset-top))]">
          <Link to="/" className="flex items-center gap-2.5" aria-label="Nexum, início">
            <NexumMark className="size-7" />
            <span className="flex items-baseline gap-2">
              <span className="font-display text-xl tracking-tight">Nexum</span>
              <span className="text-xs text-fg-subtle">neurociência</span>
            </span>
          </Link>
          <Link
            to="/busca"
            className="text-sm text-fg-muted underline-offset-4 hover:text-fg hover:underline"
          >
            Buscar
          </Link>
        </header>
        <main id="main-content" className={cn("flex-1 px-5 pb-32", hideNav && "pb-8")}>{children}</main>
        {!hideNav && (
          <nav
            className="fixed bottom-0 left-0 right-0 z-30 border-t border-border-strong bg-bg-elevated shadow-[0_-8px_24px_-16px_color-mix(in_oklab,var(--color-fg)_28%,transparent)]"
            aria-label="Principal"
          >
            <div className="mx-auto grid max-w-lg grid-cols-5 px-2 pb-[max(0.35rem,env(safe-area-inset-bottom))] pt-1 md:max-w-2xl">
              {NAV.map((item) => {
                const active =
                  item.to === "/"
                    ? pathname === "/"
                    : pathname === item.to || pathname.startsWith(`${item.to}/`);
                const Icon = item.icon;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "flex min-h-14 flex-col items-center justify-center gap-0.5 text-[11px] font-medium",
                      active ? "text-accent" : "text-fg-subtle",
                    )}
                  >
                    <Icon className="size-5" strokeWidth={active ? 2.2 : 1.7} />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </nav>
        )}
      </div>
    </div>
  );
}
