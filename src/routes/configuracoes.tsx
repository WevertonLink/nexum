import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { InstallAppCard, InstalledBadge } from "@/components/install-app";
import { useAppStore } from "@/store/app-store";

export const Route = createFileRoute("/configuracoes")({ component: SettingsPage });

function SettingsPage() {
  const settings = useAppStore((s) => s.settings);
  const update = useAppStore((s) => s.updateSettings);
  const reset = useAppStore((s) => s.resetProgress);

  return (
    <div className="space-y-8 pt-2">
      <h1 className="font-display text-3xl">Configurações</h1>
      <InstallAppCard />
      <InstalledBadge />
      <Toggle
        label="Modo foco"
        desc="Esconde a navegação inferior durante o estudo."
        checked={settings.focusMode}
        onChange={(v) => update({ focusMode: v })}
      />
      <Toggle
        label="Reduzir movimento"
        desc="Além da preferência do sistema."
        checked={settings.reduceMotion}
        onChange={(v) => update({ reduceMotion: v })}
      />
      <div>
        <p className="font-medium">Camada padrão</p>
        <p className="text-sm text-fg-muted">A avançada nunca é exigida para terminar o essencial.</p>
        <div className="mt-2 flex gap-2">
          {([1, 2, 3] as const).map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => update({ defaultLayer: n })}
              className={
                settings.defaultLayer === n
                  ? "h-10 rounded-md bg-accent px-3 text-sm text-accent-fg"
                  : "h-10 rounded-md bg-surface px-3 text-sm"
              }
            >
              {n}
            </button>
          ))}
        </div>
      </div>
      <div>
        <p className="font-medium">Intervalos de revisão (dias)</p>
        <p className="text-sm text-fg-muted">Configuráveis, como o manuscrito pede.</p>
        <dl className="mt-2 space-y-2 text-sm">
          {(
            [
              ["severeErrorDays", "Erro grave"],
              ["mildErrorDays", "Erro leve"],
              ["hintCorrectDays", "Acerto com pista"],
              ["independentCorrectDays", "Acerto independente"],
              ["consistentCorrectDays", "Acerto consistente"],
              ["masteredDays", "Domínio consolidado"],
            ] as const
          ).map(([k, label]) => (
            <div key={k} className="flex items-center justify-between gap-3">
              <dt>{label}</dt>
              <dd>
                <input
                  type="number"
                  min={1}
                  className="h-10 w-16 rounded-md border border-border bg-bg px-2 text-right tabular-nums"
                  value={settings.intervals[k]}
                  onChange={(e) =>
                    update({
                      intervals: { ...settings.intervals, [k]: Number(e.target.value) || 1 },
                    })
                  }
                />
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="rounded-xl border border-danger/30 p-4">
        <p className="font-medium text-danger">Recomeçar</p>
        <p className="mt-1 text-sm text-fg-muted">
          Apaga progresso, notas e revisões neste dispositivo. O conteúdo permanece.
        </p>
        <Button
          variant="danger"
          className="mt-3"
          onClick={() => {
            if (confirm("Apagar todo o progresso neste dispositivo?")) reset();
          }}
        >
          Apagar progresso
        </Button>
      </div>
      <p className="text-xs leading-relaxed text-fg-subtle">
        Conhecimento sobre mecanismos neurobiológicos não substitui avaliação clínica individual. Nenhum dado pessoal desnecessário é pedido.
      </p>
    </div>
  );
}

function Toggle({
  label,
  desc,
  checked,
  onChange,
}: {
  label: string;
  desc: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label className="flex items-start justify-between gap-4">
      <span>
        <span className="block font-medium">{label}</span>
        <span className="text-sm text-fg-muted">{desc}</span>
      </span>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={
          checked
            ? "h-8 w-14 rounded-full bg-accent p-1"
            : "h-8 w-14 rounded-full bg-surface-2 p-1"
        }
      >
        <span
          className={
            checked
              ? "ml-6 block size-6 rounded-full bg-accent-fg"
              : "block size-6 rounded-full bg-bg-elevated"
          }
        />
      </button>
    </label>
  );
}
