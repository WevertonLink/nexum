import { Bookmark, BookmarkCheck } from "lucide-react";
import { useState } from "react";
import type { ContentBlock } from "@/content/types";
import { LEVEL_LABEL } from "@/content/types";
import { Diagram } from "../diagrams";
import { RichText } from "../rich-text";
import { Button } from "../ui/button";

const KIND_LABEL: Record<ContentBlock["kind"], string> = {
  question: "Pergunta",
  answer: "Resposta inicial",
  explain: "Explicação",
  mechanism: "Mecanismo",
  consequence: "Consequência",
  connection: "Conexão",
  recall: "Recuperação",
  misconception: "Erro comum",
  level: "Nível",
  diagram: "Diagrama",
  case: "Caso",
  limit: "Limite",
  summary: "Síntese",
  prediction: "Previsão",
  chain: "Cadeia causal",
  counterfactual_ref: "Contrafactual",
  case_ref: "Caso integrado",
};

export function BlockView({
  block,
  onTerm,
  bookmarked,
  onBookmark,
  showAlt,
  onToggleAlt,
}: {
  block: ContentBlock;
  onTerm: (id: string) => void;
  bookmarked: boolean;
  onBookmark: () => void;
  showAlt: boolean;
  onToggleAlt: () => void;
}) {
  return (
    <article className="rounded-xl border border-border bg-bg-elevated p-5 shadow-soft">
      <div className="flex items-start justify-between gap-3">
        <p className="text-xs font-medium uppercase tracking-wide text-accent">{KIND_LABEL[block.kind]}</p>
        <button type="button" onClick={onBookmark} aria-label="Marcar para voltar" className="text-fg-muted">
          {bookmarked ? <BookmarkCheck className="size-5 text-accent" /> : <Bookmark className="size-5" />}
        </button>
      </div>
      {block.title && <h2 className="mt-2 font-display text-2xl">{block.title}</h2>}
      {block.level && <p className="mt-1 text-xs text-fg-subtle">{LEVEL_LABEL[block.level]}</p>}

      {block.kind === "recall" ? (
        <RecallBody block={block} onTerm={onTerm} />
      ) : (
        <p className="mt-3 text-base leading-relaxed text-fg">
          <RichText text={block.body ?? ""} onTerm={onTerm} />
        </p>
      )}

      {block.alt && block.kind !== "recall" && (
        <div className="mt-4">
          <Button variant="ghost" size="sm" onClick={onToggleAlt}>
            {showAlt ? "Ocultar outra maneira" : "Explique de outra maneira"}
          </Button>
          {showAlt && (
            <p className="mt-2 rounded-lg bg-surface px-4 py-3 text-sm leading-relaxed text-fg-muted">
              {block.alt}
            </p>
          )}
        </div>
      )}

      {block.steps && <MechanismSteps steps={block.steps} />}

      {block.diagram && (
        <div className="mt-4">
          <Diagram kind={block.diagram} />
        </div>
      )}
    </article>
  );
}

function RecallBody({ block, onTerm }: { block: ContentBlock; onTerm: (id: string) => void }) {
  const [stage, setStage] = useState<"try" | "hint" | "model">("try");
  return (
    <div className="mt-3 space-y-3">
      <p className="text-sm text-fg-muted">Sem consultar o conteúdo. Tente com suas palavras.</p>
      <p className="text-base leading-relaxed">
        <RichText text={block.body ?? ""} onTerm={onTerm} />
      </p>
      {stage === "hint" && (
        <p className="rounded-lg bg-info-soft px-4 py-3 text-sm text-info">
          Pista: volte um passo. Qual conceito anterior esta pergunta usa? {block.alt ? "Depois compare com o modelo." : ""}
        </p>
      )}
      {stage === "model" && (
        <p className="rounded-lg bg-surface px-4 py-3 text-sm leading-relaxed">
          {block.alt ??
            "Compare com o modelo científico dos blocos anteriores. Se a sua reconstrução divergir no mecanismo, marque dúvida — isso alimenta a revisão, sem punição."}
        </p>
      )}
      <div className="flex flex-wrap gap-2">
        {stage === "try" && (
          <>
            <Button size="sm" variant="secondary" onClick={() => setStage("hint")}>
              Ver uma pista
            </Button>
            <Button size="sm" onClick={() => setStage("model")}>
              Ver resposta
            </Button>
          </>
        )}
        {stage === "hint" && (
          <Button size="sm" onClick={() => setStage("model")}>
            Ver resposta
          </Button>
        )}
      </div>
    </div>
  );
}

function MechanismSteps({ steps }: { steps: NonNullable<ContentBlock["steps"]> }) {
  const [shown, setShown] = useState(1);
  return (
    <div className="mt-4 space-y-3">
      <ol className="space-y-3">
        {steps.slice(0, shown).map((s, i) => (
          <li key={s.id} className="rounded-lg bg-surface px-4 py-3">
            <p className="text-xs tabular-nums text-fg-subtle">{i + 1}</p>
            <p className="font-medium">{s.title}</p>
            <p className="text-sm text-fg-muted">{s.body}</p>
          </li>
        ))}
      </ol>
      {shown < steps.length ? (
        <Button size="sm" variant="secondary" onClick={() => setShown((n) => n + 1)}>
          Próxima etapa
        </Button>
      ) : (
        <p className="text-xs text-fg-subtle">Cadeia completa. Volte a qualquer etapa se precisar reconstruir.</p>
      )}
      {shown > 1 && shown <= steps.length && (
        <button
          type="button"
          className="text-xs text-accent underline-offset-4 hover:underline"
          onClick={() => setShown(1)}
        >
          Recomeçar a cadeia
        </button>
      )}
    </div>
  );
}
