import { useEffect, useState } from "react";
import { Download, Plus, Share, Smartphone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NexumMark } from "@/components/nexum-mark";

const DISMISS_KEY = "nexum:install-dismissed";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

type Mode = "off" | "prompt" | "ios" | "manual" | "installed";

function isStandalone() {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    window.matchMedia("(display-mode: fullscreen)").matches ||
    ("standalone" in navigator && Boolean((navigator as { standalone?: boolean }).standalone))
  );
}

function isIos() {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent;
  const iPhone = /iPhone|iPad|iPod/i.test(ua);
  const iPadOs = navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
  return iPhone || iPadOs;
}

export function useInstalledApp() {
  const [installed, setInstalled] = useState(false);
  useEffect(() => {
    const sync = () => setInstalled(isStandalone());
    sync();
    const mq = window.matchMedia("(display-mode: standalone)");
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);
  return installed;
}

export function InstallAppCard() {
  const [mode, setMode] = useState<Mode>("manual");
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (isStandalone()) {
      setMode("installed");
      return;
    }
    if (window.localStorage.getItem(DISMISS_KEY) === "1") {
      setMode("off");
      return;
    }

    let captured: BeforeInstallPromptEvent | null = null;
    const onPrompt = (event: Event) => {
      event.preventDefault();
      captured = event as BeforeInstallPromptEvent;
      setDeferred(captured);
      setMode("prompt");
    };
    window.addEventListener("beforeinstallprompt", onPrompt);

    setMode(isIos() ? "ios" : "manual");

    return () => window.removeEventListener("beforeinstallprompt", onPrompt);
  }, []);

  if (mode === "off" || mode === "installed") return null;

  const dismiss = () => {
    window.localStorage.setItem(DISMISS_KEY, "1");
    setMode("off");
  };

  const install = async () => {
    if (!deferred) return;
    setBusy(true);
    try {
      await deferred.prompt();
      const choice = await deferred.userChoice;
      if (choice.outcome === "accepted") setMode("installed");
    } finally {
      setBusy(false);
    }
  };

  return (
    <section className="relative overflow-hidden rounded-xl border border-border bg-bg-elevated p-5 shadow-soft">
      <button
        type="button"
        onClick={dismiss}
        className="absolute right-3 top-3 grid size-11 place-items-center rounded-md text-fg-subtle hover:bg-surface hover:text-fg"
        aria-label="Dispensar"
      >
        <X className="size-4" />
      </button>
      <div className="flex items-start gap-3 pr-10">
        <NexumMark className="size-14 shrink-0" title="Ícone do Nexum" />
        <div className="min-w-0">
          <p className="text-xs font-medium uppercase tracking-wide text-accent">Tela inicial</p>
          <h2 className="mt-1 font-display text-2xl leading-tight">Instalar o Nexum</h2>
          <p className="mt-1 text-sm leading-relaxed text-fg-muted">
            Abre como aplicativo, com o ícone N verde-escuro na tela inicial. O progresso continua neste aparelho.
          </p>
        </div>
      </div>

      {mode === "prompt" && (
        <Button className="mt-4 w-full" onClick={install} disabled={busy}>
          <Download className="size-4" />
          {busy ? "Aguardando…" : "Instalar no aparelho"}
        </Button>
      )}

      {mode === "ios" && (
        <ol className="mt-4 space-y-3 text-sm leading-relaxed">
          <li className="flex gap-3">
            <Share className="mt-0.5 size-4 shrink-0 text-accent" />
            <span>
              Toque em <strong className="font-medium text-fg">Compartilhar</strong> na barra do Safari.
            </span>
          </li>
          <li className="flex gap-3">
            <Plus className="mt-0.5 size-4 shrink-0 text-accent" />
            <span>
              Escolha <strong className="font-medium text-fg">Adicionar à Tela de Início</strong> e confirme.
            </span>
          </li>
        </ol>
      )}

      {mode === "manual" && (
        <p className="mt-4 flex gap-3 text-sm leading-relaxed text-fg-muted">
          <Smartphone className="mt-0.5 size-4 shrink-0 text-accent" />
          <span>
            No menu do navegador, escolha <strong className="font-medium text-fg">Instalar aplicativo</strong> ou{" "}
            <strong className="font-medium text-fg">Adicionar à tela inicial</strong>.
          </span>
        </p>
      )}
    </section>
  );
}

export function InstalledBadge() {
  const installed = useInstalledApp();
  if (!installed) return null;
  return (
    <p className="flex items-center gap-2 rounded-xl border border-border bg-bg-elevated px-4 py-3 text-sm text-fg-muted">
      <NexumMark className="size-8" />
      Aberto como aplicativo neste aparelho.
    </p>
  );
}
