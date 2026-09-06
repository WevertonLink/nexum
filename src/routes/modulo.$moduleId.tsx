import { createFileRoute, Link } from "@tanstack/react-router";
import { FinalProject } from "@/components/final-project";
import { ModulePlayer } from "@/components/module-player";
import { MODULE_BY_ID } from "@/content/modules";

export const Route = createFileRoute("/modulo/$moduleId")({
  component: ModulePage,
});

function ModulePage() {
  const { moduleId } = Route.useParams();
  const mod = MODULE_BY_ID[moduleId];
  if (!mod) {
    return (
      <div className="pt-10">
        <p>Módulo não encontrado.</p>
        <Link to="/trilha" className="text-accent underline">
          Voltar à trilha
        </Link>
      </div>
    );
  }
  return (
    <div>
      <Link to="/trilha" className="text-sm text-fg-muted hover:text-fg">
        ← Trilha
      </Link>
      <div className="mt-4">
        <ModulePlayer mod={mod} />
      </div>
      {mod.id === "module_32" && (
        <section className="mt-10 border-t border-border pt-8">
          <h2 className="font-display text-2xl">Os sete campos</h2>
          <div className="mt-4">
            <FinalProject />
          </div>
        </section>
      )}
    </div>
  );
}
