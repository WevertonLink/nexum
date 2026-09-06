import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BookMarked,
  Bookmark,
  Flag,
  Layers,
  Library,
  Search,
  Settings,
  ShieldAlert,
} from "lucide-react";
import { InstallAppCard, InstalledBadge } from "@/components/install-app";

export const Route = createFileRoute("/mais")({ component: MorePage });

const LINKS = [
  { to: "/conceitos", label: "Conceitos", desc: "Biblioteca livre de exploração", icon: Library },
  { to: "/progresso", label: "Progresso", desc: "Trilha e domínio conceitual", icon: Flag },
  { to: "/desafios", label: "Desafios", desc: "Integração entre módulos", icon: Layers },
  { to: "/mitos", label: "Mitos", desc: "Simplificações que o curso recusa", icon: ShieldAlert },
  { to: "/glossario", label: "Glossário", desc: "Termos sem sair do estudo", icon: BookMarked },
  { to: "/favoritos", label: "Marcados", desc: "Pontos para voltar e notas", icon: Bookmark },
  { to: "/busca", label: "Busca", desc: "Módulos, conceitos, perguntas", icon: Search },
  { to: "/configuracoes", label: "Configurações", desc: "Foco, intervalos, recomeçar", icon: Settings },
] as const;

function MorePage() {
  return (
    <div className="space-y-6 pt-2">
      <h1 className="font-display text-3xl">Mais</h1>
      <p className="text-sm leading-relaxed text-fg-muted">
        Conhecimento sobre mecanismos neurobiológicos não substitui avaliação clínica individual.
      </p>
      <InstallAppCard />
      <InstalledBadge />
      <ul className="divide-y divide-border rounded-xl border border-border bg-bg-elevated">
        {LINKS.map((l) => {
          const Icon = l.icon;
          return (
            <li key={l.to}>
              <Link to={l.to} className="flex min-h-14 items-center gap-3 px-4 py-4">
                <Icon className="size-5 text-accent" />
                <span>
                  <span className="block font-medium">{l.label}</span>
                  <span className="text-sm text-fg-muted">{l.desc}</span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
