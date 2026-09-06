import type { ConceptState } from "@/content/types";

export type ReviewInput = {
  correct: boolean;
  hintsUsed: 0 | 1 | 2 | 3;
  confidence: 0 | 1 | 2 | 3 | null;
  selfRating?: "easy" | "medium" | "hard" | "failed";
  confused: boolean;
  severeError: boolean;
};

export type ReviewSchedule = {
  nextReviewAt: number;
  intervalDays: number;
  state: ConceptState;
  priority: number;
};

const DAY = 24 * 60 * 60 * 1000;

export const DEFAULT_INTERVALS = {
  severeErrorDays: 1,
  mildErrorDays: 2,
  hintCorrectDays: 3,
  independentCorrectDays: 5,
  consistentCorrectDays: 10,
  masteredDays: 24,
} as const;

export type IntervalConfig = typeof DEFAULT_INTERVALS;

export function scheduleReview(
  input: ReviewInput,
  now = Date.now(),
  config: IntervalConfig = DEFAULT_INTERVALS,
  previousIntervalDays = 0,
): ReviewSchedule {
  if (input.confused || input.selfRating === "failed") {
    return {
      nextReviewAt: now + config.severeErrorDays * DAY,
      intervalDays: config.severeErrorDays,
      state: input.confused ? "CONFUSED" : "RECALL_WEAK",
      priority: 95,
    };
  }

  if (!input.correct || input.severeError) {
    const days = input.severeError ? config.severeErrorDays : config.mildErrorDays;
    return {
      nextReviewAt: now + days * DAY,
      intervalDays: days,
      state: "RECALL_WEAK",
      priority: input.severeError ? 90 : 75,
    };
  }

  if (input.selfRating === "hard" || input.hintsUsed >= 2) {
    return {
      nextReviewAt: now + config.hintCorrectDays * DAY,
      intervalDays: config.hintCorrectDays,
      state: "UNDERSTOOD",
      priority: 55,
    };
  }

  if (input.hintsUsed === 1 || input.selfRating === "medium") {
    return {
      nextReviewAt: now + config.hintCorrectDays * DAY,
      intervalDays: config.hintCorrectDays,
      state: "UNDERSTOOD",
      priority: 45,
    };
  }

  if (previousIntervalDays >= config.consistentCorrectDays && input.hintsUsed === 0) {
    return {
      nextReviewAt: now + config.masteredDays * DAY,
      intervalDays: config.masteredDays,
      state: "MASTERED",
      priority: 15,
    };
  }

  if (previousIntervalDays >= config.independentCorrectDays) {
    return {
      nextReviewAt: now + config.consistentCorrectDays * DAY,
      intervalDays: config.consistentCorrectDays,
      state: "APPLIED",
      priority: 25,
    };
  }

  const highConfidenceError =
    input.confidence === 3 && !input.correct; /* unreachable but kept for callers */
  void highConfidenceError;

  return {
    nextReviewAt: now + config.independentCorrectDays * DAY,
    intervalDays: config.independentCorrectDays,
    state: "UNDERSTOOD",
    priority: 35,
  };
}

export function isOverdue(nextReviewAt: number, now = Date.now()) {
  return nextReviewAt <= now;
}
