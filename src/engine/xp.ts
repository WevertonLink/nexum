export const XP = {
  lesson: 15,
  correct: 25,
  wrong: 5,
  complete: 50,
  mini: 12,
  review: 10,
  predict: 4,
} as const;

export type XpEvent = keyof typeof XP;

export function xpForEvent(event: XpEvent, correct?: boolean): number {
  if (event === "correct" || event === "wrong") {
    return correct ? XP.correct : XP.wrong;
  }
  return XP[event];
}
