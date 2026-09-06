import { createFileRoute, Link } from "@tanstack/react-router";
import { MODULE_BY_ID } from "@/content/modules";
import { useAppStore } from "@/store/app-store";

export const Route = createFileRoute("/favoritos")({ component: FavoritesPage });

function FavoritesPage() {
  const bookmarks = useAppStore((s) => s.bookmarks);
  const notes = useAppStore((s) => s.notes);
  return (
    <div className="space-y-8 pt-2">
      <header>
        <h1 className="font-display text-3xl">Marcados</h1>
        <p className="mt-1 text-sm text-fg-muted">Pontos para voltar. Marcar não é domínio.</p>
      </header>
      {bookmarks.length === 0 ? (
        <p className="text-sm text-fg-muted">Nenhum bloco marcado ainda.</p>
      ) : (
        <ul className="space-y-2">
          {bookmarks.map((b) => {
            const m = MODULE_BY_ID[b.moduleId];
            return (
              <li key={b.id}>
                <Link
                  to="/modulo/$moduleId"
                  params={{ moduleId: b.moduleId }}
                  className="block rounded-lg border border-border bg-bg-elevated px-4 py-3"
                >
                  <p className="font-medium">{m?.shortTitle ?? b.moduleId}</p>
                  <p className="text-xs text-fg-subtle">Bloco {b.blockId}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
      <section>
        <h2 className="font-display text-xl">Notas recentes</h2>
        {notes.length === 0 ? (
          <p className="mt-2 text-sm text-fg-muted">Nenhuma nota neste dispositivo.</p>
        ) : (
          <ul className="mt-3 space-y-2">
            {notes.slice(0, 12).map((n) => (
              <li key={n.id} className="rounded-lg bg-surface px-4 py-3 text-sm leading-relaxed">
                {n.text}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
