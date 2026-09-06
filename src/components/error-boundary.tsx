import { Component, type ReactNode } from "react";

type Props = { children: ReactNode };
type State = { error: Error | null };

export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error): void {
    if (typeof console !== "undefined") console.error("[ErrorBoundary]", error);
  }

  handleReset = () => this.setState({ error: null });

  render() {
    if (!this.state.error) return this.props.children;
    return (
      <div className="mx-auto max-w-lg space-y-4 px-5 py-10">
        <h1 className="font-display text-2xl">Algo interrompeu esta tela.</h1>
        <p className="text-sm text-fg-muted">
          O erro foi registrado localmente. Você pode tentar recarregar ou voltar para o início.
        </p>
        <pre className="max-h-40 overflow-auto rounded-lg bg-surface p-3 text-xs text-fg-muted">
          {this.state.error.message}
        </pre>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={this.handleReset}
            className="rounded-md bg-accent px-4 py-2 text-sm text-accent-fg"
          >
            Tentar novamente
          </button>
          <a href="/" className="rounded-md bg-surface px-4 py-2 text-sm">
            Voltar ao início
          </a>
        </div>
      </div>
    );
  }
}
