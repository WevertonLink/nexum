import { MODULES } from "../content/modules";
import { STAGES } from "../content/stages";
import { masteryScore, type ConceptScores } from "./mastery";

export type ModuleProgress = {
  content: number;
  comprehension: number;
  recall: number;
  contrast: number;
  application: number;
  blocksSeen: string[];
  questionsAnswered: string[];
  completed: boolean;
  lastBlockId: string | null;
  startedAt: number | null;
  completedAt: number | null;
};

export const EMPTY_MODULE_PROGRESS: ModuleProgress = {
  content: 0,
  comprehension: 0,
  recall: 0,
  contrast: 0,
  application: 0,
  blocksSeen: [],
  questionsAnswered: [],
  completed: false,
  lastBlockId: null,
  startedAt: null,
  completedAt: null,
};

export function emptyModuleProgress(): ModuleProgress {
  return {
    ...EMPTY_MODULE_PROGRESS,
    blocksSeen: [],
    questionsAnswered: [],
  };
}

export function moduleOverall(p: ModuleProgress): number {
  return Math.round(
    p.content * 0.25 +
      p.comprehension * 0.2 +
      p.recall * 0.2 +
      p.contrast * 0.2 +
      p.application * 0.15,
  );
}

export function canAdvanceModule(p: ModuleProgress): boolean {
  return p.content >= 80 && p.questionsAnswered.length >= 2;
}

export function isModuleUnlocked(
  moduleId: string,
  modules: Record<string, ModuleProgress>,
): boolean {
  const mod = MODULES.find((m) => m.id === moduleId);
  if (!mod) return false;
  if (mod.prerequisites.length === 0) return true;
  return mod.prerequisites.every((pre) => {
    const p = modules[pre];
    return p?.completed || (p ? canAdvanceModule(p) : false);
  });
}

export function stageProgress(
  stageId: 1 | 2 | 3 | 4,
  modules: Record<string, ModuleProgress>,
): number {
  const stage = STAGES.find((s) => s.id === stageId);
  if (!stage) return 0;
  const vals = stage.moduleIds.map((id) => moduleOverall(modules[id] ?? emptyModuleProgress()));
  return Math.round(vals.reduce((a, b) => a + b, 0) / vals.length);
}

export function trailProgress(modules: Record<string, ModuleProgress>): number {
  const vals = MODULES.map((m) => moduleOverall(modules[m.id] ?? emptyModuleProgress()));
  return Math.round(vals.reduce((a, b) => a + b, 0) / vals.length);
}

export function conceptualMastery(
  concepts: Record<string, { scores: ConceptScores; state: string }>,
): { mastered: number; fragile: number; total: number; percent: number } {
  const ids = Object.keys(concepts);
  const total = ids.length;
  const mastered = ids.filter((id) => concepts[id]?.state === "MASTERED").length;
  const fragile = ids.filter((id) =>
    ["RECALL_WEAK", "CONFUSED"].includes(concepts[id]?.state ?? ""),
  ).length;
  const avg =
    total === 0
      ? 0
      : Math.round(
          ids.reduce((a, id) => a + masteryScore(concepts[id]!.scores), 0) / total,
        );
  return { mastered, fragile, total, percent: avg };
}
