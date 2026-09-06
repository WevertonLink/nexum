import type { ConceptState, QuestionType } from "@/content/types";

export type ConceptScores = {
  comprehension: number;
  recall: number;
  contrast: number;
  application: number;
};

export const DEFAULT_MASTERY_THRESHOLDS = {
  comprehension: 70,
  recall: 70,
  contrast: 70,
  application: 60,
};

export type AnswerEval = {
  correct: boolean;
  type: QuestionType;
  hintsUsed: number;
  confidence: 0 | 1 | 2 | 3 | null;
};

function clamp(n: number) {
  return Math.max(0, Math.min(100, Math.round(n)));
}

export function bucketForType(type: QuestionType): keyof ConceptScores {
  if (type === "recognition" || type === "relation") return "comprehension";
  if (type === "recall") return "recall";
  if (type === "misconception" || type === "limit" || type === "counterfactual")
    return "contrast";
  return "application";
}

export function applyAnswerToScores(
  prev: ConceptScores,
  evalResult: AnswerEval,
): ConceptScores {
  const key = bucketForType(evalResult.type);
  const delta = evalResult.correct
    ? evalResult.hintsUsed === 0
      ? 18
      : evalResult.hintsUsed === 1
        ? 10
        : 6
    : evalResult.hintsUsed >= 2
      ? -8
      : -14;
  return { ...prev, [key]: clamp(prev[key] + delta) };
}

export function masteryScore(scores: ConceptScores): number {
  return clamp(
    scores.comprehension * 0.25 +
      scores.recall * 0.3 +
      scores.contrast * 0.25 +
      scores.application * 0.2,
  );
}

export function meetsMastery(
  scores: ConceptScores,
  thresholds = DEFAULT_MASTERY_THRESHOLDS,
): boolean {
  return (
    scores.comprehension >= thresholds.comprehension &&
    scores.recall >= thresholds.recall &&
    scores.contrast >= thresholds.contrast &&
    scores.application >= thresholds.application
  );
}

export function deriveState(
  prev: ConceptState,
  scores: ConceptScores,
  last: AnswerEval | null,
): ConceptState {
  if (prev === "UNSEEN") return "SEEN";
  if (!last) return prev;
  if (last.correct === false && last.type === "misconception") return "CONFUSED";
  if (last.correct === false) return "RECALL_WEAK";
  if (meetsMastery(scores) && last.hintsUsed === 0) return "MASTERED";
  if (scores.application >= 60 && last.type === "application" && last.correct)
    return "APPLIED";
  if (scores.comprehension >= 50 || scores.recall >= 50) return "UNDERSTOOD";
  return "EXPOSED";
}

export function emptyScores(): ConceptScores {
  return { comprehension: 0, recall: 0, contrast: 0, application: 0 };
}

export function confidencePattern(correct: boolean, confidence: 0 | 1 | 2 | 3 | null) {
  if (confidence === null) return null;
  if (confidence >= 2 && !correct) return "overconfident";
  if (confidence <= 1 && correct) return "inaccessible";
  return "aligned";
}
