import { MODULES } from "../content/modules";
import { isOverdue } from "./review";
import {
  canAdvanceModule,
  emptyModuleProgress,
  isModuleUnlocked,
  type ModuleProgress,
} from "./progress";

export type NextAction =
  | { type: "onboarding" }
  | { type: "resume_session"; moduleId: string; blockId: string | null }
  | { type: "review"; conceptId: string; reason: string; priority: number }
  | { type: "continue_module"; moduleId: string }
  | { type: "start_module"; moduleId: string }
  | { type: "fragile_prereq"; conceptId: string; moduleId: string }
  | { type: "explore" };

export type RecInput = {
  onboardingComplete: boolean;
  session: { moduleId: string; currentBlockId: string | null; completed: boolean } | null;
  modules: Record<string, ModuleProgress>;
  concepts: Record<
    string,
    { state: string; nextReviewAt: number; originModule: string }
  >;
  now?: number;
};

export function getNextAction(input: RecInput): NextAction {
  const now = input.now ?? Date.now();

  if (!input.onboardingComplete) return { type: "onboarding" };

  if (input.session && !input.session.completed) {
    return {
      type: "resume_session",
      moduleId: input.session.moduleId,
      blockId: input.session.currentBlockId,
    };
  }

  const overdue = Object.entries(input.concepts)
    .filter(([, c]) => c.nextReviewAt > 0 && isOverdue(c.nextReviewAt, now))
    .sort((a, b) => a[1].nextReviewAt - b[1].nextReviewAt);

  const importantOverdue = overdue.find(([, c]) =>
    ["RECALL_WEAK", "CONFUSED", "EXPOSED"].includes(c.state),
  );
  if (importantOverdue) {
    return {
      type: "review",
      conceptId: importantOverdue[0],
      reason: "Revisão vencida de um conceito que ainda precisa de consolidação.",
      priority: 1,
    };
  }

  const current = currentModule(input.modules);
  if (current) {
    const fragilePre = current.concepts.find((cid) => {
      const st = input.concepts[cid]?.state;
      return st === "RECALL_WEAK" || st === "CONFUSED";
    });
    if (fragilePre && (input.modules[current.id]?.content ?? 0) < 40) {
      return {
        type: "fragile_prereq",
        conceptId: fragilePre,
        moduleId: current.id,
      };
    }

    const p = input.modules[current.id] ?? emptyModuleProgress();
    if (!p.completed) {
      return { type: "continue_module", moduleId: current.id };
    }
  }

  if (overdue[0]) {
    return {
      type: "review",
      conceptId: overdue[0][0],
      reason: "Há uma revisão no prazo.",
      priority: 4,
    };
  }

  const next = MODULES.find(
    (m) =>
      isModuleUnlocked(m.id, input.modules) &&
      !(input.modules[m.id]?.completed),
  );
  if (next) return { type: "start_module", moduleId: next.id };

  return { type: "explore" };
}

export function currentModule(modules: Record<string, ModuleProgress>) {
  const inProgress = MODULES.find((m) => {
    const p = modules[m.id];
    return p && !p.completed && (p.content > 0 || p.startedAt);
  });
  if (inProgress) return inProgress;
  return MODULES.find((m) => isModuleUnlocked(m.id, modules) && !modules[m.id]?.completed) ?? null;
}

export function nextUnlockedModule(modules: Record<string, ModuleProgress>) {
  return (
    MODULES.find(
      (m) => isModuleUnlocked(m.id, modules) && !canAdvanceModule(modules[m.id] ?? emptyModuleProgress()),
    ) ?? null
  );
}
