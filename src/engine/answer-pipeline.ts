import type { ConceptState, QuestionType } from "../content/types.ts";
import {
  applyAnswerToScores,
  bucketForType,
  deriveState,
  emptyScores,
  meetsMastery,
  type ConceptScores,
} from "./mastery.ts";
import type { ModuleProgress } from "./progress.ts";
import {
  scheduleReview,
  DEFAULT_INTERVALS,
  type IntervalConfig,
} from "./review.ts";
import { xpForEvent } from "./xp.ts";

function freshModuleProgress(): ModuleProgress {
  return {
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
}

export type AnswerPipelineInput = {
  questionId: string;
  moduleId: string;
  conceptIds: string[];
  type: QuestionType;
  correct: boolean;
  hintsUsed: 0 | 1 | 2 | 3;
  confidence: 0 | 1 | 2 | 3 | null;
  confused?: boolean;
  selfRating?: "easy" | "medium" | "hard" | "failed";
};

export type AnswerPipelineConceptState = {
  state: ConceptState;
  scores: ConceptScores;
  nextReviewAt: number;
  intervalDays: number;
  originModule: string;
  seenAt: number | null;
  hintsUsedTotal: number;
  confusionWith: string[];
};

export type AnswerPipelineState = {
  modules: Record<string, ModuleProgress>;
  concepts: Record<string, AnswerPipelineConceptState>;
  intervals: IntervalConfig;
};

export type AnswerPipelineResult = {
  modules: Record<string, ModuleProgress>;
  concepts: Record<string, AnswerPipelineConceptState>;
  xpAwarded: number;
  masteredNow: string[];
};

function emptyConcept(originModule: string): AnswerPipelineConceptState {
  return {
    state: "UNSEEN",
    scores: emptyScores(),
    nextReviewAt: 0,
    intervalDays: 0,
    originModule,
    seenAt: null,
    hintsUsedTotal: 0,
    confusionWith: [],
  };
}

function moduleDeltaFor(input: AnswerPipelineInput): number {
  if (input.correct) return input.hintsUsed === 0 ? 20 : 10;
  return -8;
}

function clampProgress(n: number): number {
  return Math.max(0, Math.min(100, n));
}

/**
 * Pure reducer for an answer event. Returns the modules + concepts slices to be
 * merged into the store, plus derived XP + mastery deltas so the caller can
 * surface toasts / animations without re-deriving them.
 */
export function processAnswer(
  prev: AnswerPipelineState,
  input: AnswerPipelineInput,
  now: number = Date.now(),
): AnswerPipelineResult {
  const modules = { ...prev.modules };
  const prevModule = modules[input.moduleId] ?? freshModuleProgress();
  const questionsAnswered = prevModule.questionsAnswered.includes(input.questionId)
    ? prevModule.questionsAnswered
    : [...prevModule.questionsAnswered, input.questionId];
  const bucket = bucketForType(input.type);
  const delta = moduleDeltaFor(input);
  modules[input.moduleId] = {
    ...prevModule,
    questionsAnswered,
    [bucket]: clampProgress((prevModule[bucket] ?? 0) + delta),
  };

  const intervals = prev.intervals ?? DEFAULT_INTERVALS;
  const scheduleInput = {
    correct: input.correct,
    hintsUsed: input.hintsUsed,
    confidence: input.confidence,
    confused:
      Boolean(input.confused) ||
      (input.type === "misconception" && !input.correct),
    severeError:
      !input.correct && input.hintsUsed === 0 && input.confidence === 3,
    selfRating: input.selfRating,
  };

  const concepts = { ...prev.concepts };
  const masteredNow: string[] = [];
  for (const cid of input.conceptIds) {
    const c = concepts[cid] ?? emptyConcept(input.moduleId);
    const scores = applyAnswerToScores(c.scores, {
      correct: input.correct,
      type: input.type,
      hintsUsed: input.hintsUsed,
      confidence: input.confidence,
    });
    const sched = scheduleReview(scheduleInput, now, intervals, c.intervalDays);
    let state = deriveState(c.state, scores, {
      correct: input.correct,
      type: input.type,
      hintsUsed: input.hintsUsed,
      confidence: input.confidence,
    });
    if (meetsMastery(scores) && input.correct && input.hintsUsed === 0)
      state = "MASTERED";
    if (state === "MASTERED" && c.state !== "MASTERED") masteredNow.push(cid);
    concepts[cid] = {
      ...c,
      scores,
      state,
      nextReviewAt: sched.nextReviewAt,
      intervalDays: sched.intervalDays,
      hintsUsedTotal: c.hintsUsedTotal + input.hintsUsed,
    };
  }

  const xpAwarded =
    xpForEvent("correct", input.correct) + masteredNow.length * xpForEvent("complete");

  return { modules, concepts, xpAwarded, masteredNow };
}
