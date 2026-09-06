import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { CONCEPTS } from "@/content/concepts";
import { MODULE_BY_ID } from "@/content/modules";
import type { ConceptState, Question, QuestionType } from "@/content/types";
import {
  emptyScores,
  type ConceptScores,
} from "@/engine/mastery";
import {
  emptyModuleProgress,
  isModuleUnlocked,
  type ModuleProgress,
} from "@/engine/progress";
import { getNextAction, type NextAction } from "@/engine/recommendation";
import { DEFAULT_INTERVALS, type IntervalConfig } from "@/engine/review";
import { processAnswer } from "@/engine/answer-pipeline";
import {
  inferDimension,
  recordEvidence,
  topicScope,
  type EvidenceRecord,
  type EvidenceSource,
  type KnowledgeDim,
} from "@/engine/evidence";
import { scheduleDimension, type SrsRecord } from "@/engine/srs";

export type SessionPhase = "intro" | "content" | "exposure_done" | "verify" | "done";

export type SessionState = {
  moduleId: string;
  currentBlockId: string | null;
  startedAt: number;
  lastInteraction: number;
  completed: boolean;
  phase: SessionPhase;
  questionIndex: number;
};

export type ConceptProgress = {
  state: ConceptState;
  scores: ConceptScores;
  nextReviewAt: number;
  intervalDays: number;
  originModule: string;
  seenAt: number | null;
  hintsUsedTotal: number;
  confusionWith: string[];
};

export type AnswerRecord = {
  questionId: string;
  moduleId: string;
  conceptIds: string[];
  type: QuestionType;
  correct: boolean;
  hintsUsed: 0 | 1 | 2 | 3;
  confidence: 0 | 1 | 2 | 3 | null;
  at: number;
  selected?: string;
  freeText?: string;
  selfRating?: "easy" | "medium" | "hard" | "failed";
  source?: EvidenceSource;
  dimension?: KnowledgeDim;
};

export type DimEvidenceMap = Partial<Record<KnowledgeDim, EvidenceRecord>>;
export type DimSrsMap = Partial<Record<KnowledgeDim, SrsRecord>>;

export type DomainItemKind = "counterfactual" | "case";

export type DomainAttempt = {
  at: number;
  correct: boolean;
  selected: number;
  chainCorrect?: boolean;
};

export type DomainItemHistory = {
  attempts: DomainAttempt[];
  bestAt: number | null;
  lastCorrectAt: number | null;
};

export type DomainSessionItem = {
  kind: DomainItemKind;
  id: string;
  status: "pending" | "done";
};

export type DomainSession = {
  id: string;
  startedAt: number;
  finishedAt: number | null;
  items: DomainSessionItem[];
  index: number;
};

export type DomainActivity = {
  at: number;
  kind: DomainItemKind;
  id: string;
  correct: boolean;
};

export type DomainState = {
  counterfactual: Record<string, DomainItemHistory>;
  case: Record<string, DomainItemHistory>;
  currentSession: DomainSession | null;
  activityLog: DomainActivity[];
  sessions: DomainSession[];
};

export type Note = {
  id: string;
  conceptId?: string;
  moduleId?: string;
  blockId?: string;
  text: string;
  at: number;
};

export type Bookmark = {
  id: string;
  moduleId: string;
  blockId: string;
  at: number;
};

export type Settings = {
  focusMode: boolean;
  reduceMotion: boolean;
  defaultLayer: 1 | 2 | 3;
  intervals: IntervalConfig;
};

export type FinalProjectState = {
  caseId: string;
  fields: Record<string, string>;
  selfScores: Record<string, number>;
  submittedAt: number | null;
};

type AppState = {
  _hasHydrated: boolean;
  onboardingComplete: boolean;
  diagnosticDone: boolean;
  diagnosticAnswers: Record<string, string>;
  session: SessionState | null;
  modules: Record<string, ModuleProgress>;
  concepts: Record<string, ConceptProgress>;
  answers: AnswerRecord[];
  notes: Note[];
  bookmarks: Bookmark[];
  doubts: string[];
  settings: Settings;
  searchQuery: string;
  glossaryTerm: string | null;
  finalProject: FinalProjectState | null;
  lastActiveAt: number;
  xp: number;
  /** Per-concept, per-dimension evidence EMA. Concept ID = topic key. */
  evidence: Record<string, DimEvidenceMap>;
  /** Per-concept, per-dimension Leitner schedule. */
  srsRecords: Record<string, DimSrsMap>;
  /** Modo Domínio: per-item history + current guided session queue. */
  domain: DomainState;
  setHydrated: () => void;
  completeOnboarding: () => void;
  saveDiagnostic: (answers: Record<string, string>) => void;
  startModule: (moduleId: string) => { warning?: string };
  seeBlock: (moduleId: string, blockId: string, conceptIds?: string[]) => void;
  setSessionPhase: (phase: SessionState["phase"], questionIndex?: number) => void;
  pauseSession: () => void;
  completeModule: (moduleId: string) => void;
  recordAnswer: (record: Omit<AnswerRecord, "at"> & { confused?: boolean }) => void;
  addNote: (note: Omit<Note, "id" | "at">) => void;
  toggleBookmark: (moduleId: string, blockId: string) => void;
  toggleDoubt: (conceptId: string) => void;
  updateSettings: (partial: Partial<Settings>) => void;
  saveFinalProject: (state: FinalProjectState) => void;
  resetProgress: () => void;
  nextAction: () => NextAction;
  touch: () => void;
  recordDomainAttempt: (input: {
    kind: DomainItemKind;
    id: string;
    correct: boolean;
    selected: number;
    chainCorrect?: boolean;
    conceptIds: string[];
    moduleIds: string[];
  }) => void;
  startGuidedSession: (items: DomainSessionItem[]) => void;
  advanceGuidedSession: () => void;
  endGuidedSession: () => void;
};

/**
 * Guess the evidence source when the caller hasn't set one. Verify path is
 * always a module quiz today; predictions / counterfactuals / cases will pass
 * `source` explicitly once the domain surfaces exist (Fase 3).
 */
function defaultSourceForType(type: QuestionType): EvidenceSource {
  if (type === "application" || type === "integration") return "module-quiz";
  return "mini-quiz";
}

function resolveDimension(record: {
  type: QuestionType;
  dimension?: KnowledgeDim;
  questionId: string;
  moduleId: string;
}): KnowledgeDim {
  if (record.dimension) return record.dimension;
  const mod = MODULE_BY_ID[record.moduleId];
  const q: Question | undefined = mod?.questions.find((x) => x.id === record.questionId);
  if (!q) {
    if (record.type === "counterfactual" || record.type === "misconception") return "causality";
    if (record.type === "application" || record.type === "integration") return "application";
    if (record.type === "recall") return "recognition";
    return "recognition";
  }
  return inferDimension(q.prompt, q.difficulty);
}

/**
 * Fold one answer into the (evidence, srsRecords) slices. Per-answer scheduling
 * mirrors the current single-question flow — Fase 3's Modo Domínio will wrap
 * multi-question activities via `beginEvidenceBatch` to prevent over-promotion.
 */
function applyAnswerToDimensions(
  prevEvidence: Record<string, DimEvidenceMap>,
  prevSrs: Record<string, DimSrsMap>,
  record: Omit<AnswerRecord, "at"> & { confused?: boolean },
  now: number,
): {
  evidence: Record<string, DimEvidenceMap>;
  srsRecords: Record<string, DimSrsMap>;
} {
  if (!record.conceptIds.length) {
    return { evidence: prevEvidence, srsRecords: prevSrs };
  }
  const source = record.source ?? defaultSourceForType(record.type);
  const dim = resolveDimension(record);
  const evidence: Record<string, DimEvidenceMap> = { ...prevEvidence };
  const srsRecords: Record<string, DimSrsMap> = { ...prevSrs };
  const score = record.correct ? 1 : 0;
  for (const cid of record.conceptIds) {
    const scope = topicScope(cid);
    const evGroup: DimEvidenceMap = { ...(evidence[scope] ?? {}) };
    evGroup[dim] = recordEvidence(evGroup[dim] ?? null, score, source, now);
    evidence[scope] = evGroup;
    const srsGroup: DimSrsMap = { ...(srsRecords[cid] ?? {}) };
    srsGroup[dim] = scheduleDimension(srsGroup[dim] ?? null, score, now);
    srsRecords[cid] = srsGroup;
  }
  return { evidence, srsRecords };
}

function emptyConcept(id: string): ConceptProgress {
  const origin = CONCEPTS.find((c) => c.id === id)?.originModule ?? "module_01";
  return {
    state: "UNSEEN",
    scores: emptyScores(),
    nextReviewAt: 0,
    intervalDays: 0,
    originModule: origin,
    seenAt: null,
    hintsUsedTotal: 0,
    confusionWith: [],
  };
}

const initialSettings: Settings = {
  focusMode: false,
  reduceMotion: false,
  defaultLayer: 1,
  intervals: { ...DEFAULT_INTERVALS },
};

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      _hasHydrated: true,
      onboardingComplete: false,
      diagnosticDone: false,
      diagnosticAnswers: {},
      session: null,
      modules: {},
      concepts: {},
      answers: [],
      notes: [],
      bookmarks: [],
      doubts: [],
      settings: initialSettings,
      searchQuery: "",
      glossaryTerm: null,
      finalProject: null,
      lastActiveAt: 0,
      xp: 0,
      evidence: {},
      srsRecords: {},
      domain: {
        counterfactual: {},
        case: {},
        currentSession: null,
        activityLog: [],
        sessions: [],
      },
      setHydrated: () => set({ _hasHydrated: true }),
      touch: () => set({ lastActiveAt: Date.now() }),
      completeOnboarding: () => set({ onboardingComplete: true, lastActiveAt: Date.now() }),
      saveDiagnostic: (answers) => set({ diagnosticDone: true, diagnosticAnswers: answers }),
      startModule: (moduleId) => {
        const modules = { ...get().modules };
        const mod = MODULE_BY_ID[moduleId];
        if (!mod) return { warning: "Módulo inexistente." };
        const unlocked = isModuleUnlocked(moduleId, modules);
        let warning: string | undefined;
        if (!unlocked) {
          warning =
            "Este conteúdo utiliza conceitos que você ainda não consolidou.";
        }
        const prev = modules[moduleId] ?? emptyModuleProgress();
        modules[moduleId] = {
          ...prev,
          startedAt: prev.startedAt ?? Date.now(),
        };
        const concepts = { ...get().concepts };
        for (const cid of mod.concepts) {
          concepts[cid] = concepts[cid] ?? emptyConcept(cid);
          if (concepts[cid].state === "UNSEEN") {
            concepts[cid] = { ...concepts[cid], state: "SEEN", seenAt: Date.now() };
          }
        }
        const existing = get().session;
        const same = existing?.moduleId === moduleId;
        const phase: SessionPhase = same
          ? existing.phase
          : prev.completed
            ? "done"
            : prev.content >= 100
              ? "verify"
              : prev.content > 0
                ? "content"
                : "intro";
        set({
          modules,
          concepts,
          lastActiveAt: Date.now(),
          session: {
            moduleId,
            currentBlockId: prev.lastBlockId ?? mod.blocks[0]?.id ?? null,
            startedAt: same ? existing.startedAt : Date.now(),
            lastInteraction: Date.now(),
            completed: Boolean(prev.completed),
            phase,
            questionIndex: same ? existing.questionIndex : 0,
          },
        });
        return { warning };
      },
      seeBlock: (moduleId, blockId, conceptIds) => {
        const modules = { ...get().modules };
        const mod = MODULE_BY_ID[moduleId];
        const prev = modules[moduleId] ?? emptyModuleProgress();
        const blocksSeen = prev.blocksSeen.includes(blockId)
          ? prev.blocksSeen
          : [...prev.blocksSeen, blockId];
        const total = mod?.blocks.length ?? 1;
        const content = Math.round((blocksSeen.length / total) * 100);
        modules[moduleId] = {
          ...prev,
          blocksSeen,
          content,
          lastBlockId: blockId,
          startedAt: prev.startedAt ?? Date.now(),
        };
        const concepts = { ...get().concepts };
        for (const cid of conceptIds ?? []) {
          const c = concepts[cid] ?? emptyConcept(cid);
          concepts[cid] = {
            ...c,
            state: c.state === "UNSEEN" ? "EXPOSED" : c.state,
            seenAt: c.seenAt ?? Date.now(),
          };
        }
        const session = get().session;
        set({
          modules,
          concepts,
          lastActiveAt: Date.now(),
          session: session
            ? { ...session, currentBlockId: blockId, lastInteraction: Date.now() }
            : session,
        });
      },
      setSessionPhase: (phase, questionIndex) => {
        const session = get().session;
        if (!session) return;
        set({
          lastActiveAt: Date.now(),
          session: {
            ...session,
            phase,
            questionIndex: questionIndex ?? session.questionIndex,
            lastInteraction: Date.now(),
          },
        });
      },
      pauseSession: () => {
        const session = get().session;
        if (!session) return;
        set({ session: { ...session, completed: false, lastInteraction: Date.now() } });
      },
      completeModule: (moduleId) => {
        const modules = { ...get().modules };
        const prev = modules[moduleId] ?? emptyModuleProgress();
        modules[moduleId] = {
          ...prev,
          completed: true,
          content: Math.max(prev.content, 100),
          completedAt: Date.now(),
        };
        const session = get().session;
        set({
          modules,
          lastActiveAt: Date.now(),
          session: session ? { ...session, completed: true, phase: "done" } : session,
        });
      },
      recordAnswer: (record) => {
        const at = Date.now();
        const full: AnswerRecord = { ...record, at };
        const state = get();
        const prevConcepts: Record<string, ConceptProgress> = { ...state.concepts };
        for (const cid of record.conceptIds) {
          prevConcepts[cid] = prevConcepts[cid] ?? emptyConcept(cid);
        }
        const result = processAnswer(
          {
            modules: state.modules,
            concepts: prevConcepts,
            intervals: state.settings.intervals,
          },
          {
            questionId: record.questionId,
            moduleId: record.moduleId,
            conceptIds: record.conceptIds,
            type: record.type,
            correct: record.correct,
            hintsUsed: record.hintsUsed,
            confidence: record.confidence,
            confused: record.confused,
            selfRating: record.selfRating,
          },
          at,
        );
        const mergedConcepts: Record<string, ConceptProgress> = { ...state.concepts };
        for (const [cid, next] of Object.entries(result.concepts)) {
          const base = state.concepts[cid] ?? emptyConcept(cid);
          mergedConcepts[cid] = {
            ...base,
            state: next.state,
            scores: next.scores,
            nextReviewAt: next.nextReviewAt,
            intervalDays: next.intervalDays,
            hintsUsedTotal: next.hintsUsedTotal,
          };
        }
        const { evidence: nextEvidence, srsRecords: nextSrs } = applyAnswerToDimensions(
          state.evidence,
          state.srsRecords,
          record,
          at,
        );
        set({
          answers: [...state.answers, full],
          modules: result.modules,
          concepts: mergedConcepts,
          xp: state.xp + result.xpAwarded,
          evidence: nextEvidence,
          srsRecords: nextSrs,
          lastActiveAt: at,
        });
      },
      addNote: (note) => {
        const id = `n_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
        set({ notes: [{ id, at: Date.now(), ...note }, ...get().notes], lastActiveAt: Date.now() });
      },
      toggleBookmark: (moduleId, blockId) => {
        const existing = get().bookmarks.find(
          (b) => b.moduleId === moduleId && b.blockId === blockId,
        );
        if (existing) {
          set({ bookmarks: get().bookmarks.filter((b) => b.id !== existing.id) });
        } else {
          set({
            bookmarks: [
              {
                id: `b_${Date.now()}`,
                moduleId,
                blockId,
                at: Date.now(),
              },
              ...get().bookmarks,
            ],
          });
        }
      },
      toggleDoubt: (conceptId) => {
        const doubts = get().doubts.includes(conceptId)
          ? get().doubts.filter((d) => d !== conceptId)
          : [...get().doubts, conceptId];
        const concepts = { ...get().concepts };
        const c = concepts[conceptId] ?? emptyConcept(conceptId);
        if (!get().doubts.includes(conceptId)) {
          concepts[conceptId] = {
            ...c,
            nextReviewAt: Date.now(),
            state: c.state === "UNSEEN" ? "EXPOSED" : c.state,
          };
        }
        set({ doubts, concepts });
      },
      updateSettings: (partial) =>
        set({ settings: { ...get().settings, ...partial } }),
      saveFinalProject: (state) => set({ finalProject: state }),
      resetProgress: () =>
        set({
          onboardingComplete: false,
          diagnosticDone: false,
          diagnosticAnswers: {},
          session: null,
          modules: {},
          concepts: {},
          answers: [],
          notes: [],
          bookmarks: [],
          doubts: [],
          finalProject: null,
          lastActiveAt: 0,
          xp: 0,
          evidence: {},
          srsRecords: {},
          domain: {
            counterfactual: {},
            case: {},
            currentSession: null,
            activityLog: [],
            sessions: [],
          },
        }),
      recordDomainAttempt: ({ kind, id, correct, selected, chainCorrect, conceptIds, moduleIds }) => {
        const at = Date.now();
        const state = get();
        const source: EvidenceSource = kind === "counterfactual" ? "counterfactual" : "domain-case";
        const dim: KnowledgeDim = kind === "counterfactual" ? "causality" : "application";
        const evidence: Record<string, DimEvidenceMap> = { ...state.evidence };
        const srsRecords: Record<string, DimSrsMap> = { ...state.srsRecords };
        const score = correct ? 1 : 0;
        for (const cid of conceptIds) {
          const scope = topicScope(cid);
          const group: DimEvidenceMap = { ...(evidence[scope] ?? {}) };
          group[dim] = recordEvidence(group[dim] ?? null, score, source, at);
          evidence[scope] = group;
          const srsGroup: DimSrsMap = { ...(srsRecords[cid] ?? {}) };
          srsGroup[dim] = scheduleDimension(srsGroup[dim] ?? null, score, at);
          srsRecords[cid] = srsGroup;
        }
        const bucket = kind === "counterfactual" ? state.domain.counterfactual : state.domain.case;
        const prev: DomainItemHistory = bucket[id] ?? {
          attempts: [],
          bestAt: null,
          lastCorrectAt: null,
        };
        const nextItem: DomainItemHistory = {
          attempts: [...prev.attempts, { at, correct, selected, chainCorrect }],
          bestAt: correct ? at : prev.bestAt,
          lastCorrectAt: correct ? at : prev.lastCorrectAt,
        };
        const nextBucket = { ...bucket, [id]: nextItem };
        const activity: DomainActivity = { at, kind, id, correct };
        const activityLog = [activity, ...state.domain.activityLog].slice(0, 200);
        let currentSession = state.domain.currentSession;
        if (currentSession) {
          const items = currentSession.items.map((it, i) =>
            i === currentSession!.index && it.kind === kind && it.id === id
              ? { ...it, status: "done" as const }
              : it,
          );
          currentSession = { ...currentSession, items };
        }
        const answerXp = correct ? 25 : 5;
        const chainBonus = chainCorrect ? 6 : 0;
        void moduleIds;
        set({
          evidence,
          srsRecords,
          xp: state.xp + answerXp + chainBonus,
          lastActiveAt: at,
          domain: {
            ...state.domain,
            [kind]: nextBucket,
            activityLog,
            currentSession,
          },
        });
      },
      startGuidedSession: (items) => {
        const session: DomainSession = {
          id: `ds_${Date.now()}`,
          startedAt: Date.now(),
          finishedAt: null,
          items,
          index: 0,
        };
        set({
          lastActiveAt: Date.now(),
          domain: { ...get().domain, currentSession: session },
        });
      },
      advanceGuidedSession: () => {
        const state = get();
        const s = state.domain.currentSession;
        if (!s) return;
        const nextIndex = s.index + 1;
        if (nextIndex >= s.items.length) {
          const finished: DomainSession = { ...s, index: nextIndex, finishedAt: Date.now() };
          set({
            lastActiveAt: Date.now(),
            xp: state.xp + 50,
            domain: {
              ...state.domain,
              currentSession: null,
              sessions: [finished, ...state.domain.sessions].slice(0, 40),
            },
          });
          return;
        }
        set({
          lastActiveAt: Date.now(),
          domain: {
            ...state.domain,
            currentSession: { ...s, index: nextIndex },
          },
        });
      },
      endGuidedSession: () => {
        const s = get().domain.currentSession;
        if (!s) return;
        const finished: DomainSession = { ...s, finishedAt: Date.now() };
        set({
          lastActiveAt: Date.now(),
          domain: {
            ...get().domain,
            currentSession: null,
            sessions: [finished, ...get().domain.sessions].slice(0, 40),
          },
        });
      },
      nextAction: () => {
        const s = get();
        return getNextAction({
          onboardingComplete: s.onboardingComplete,
          session: s.session,
          modules: s.modules,
          concepts: s.concepts,
        });
      },
    }),
    {
      name: "nexum-progress-v1",
      version: 4,
      storage: createJSONStorage(() => localStorage),
      partialize: (s) => ({
        onboardingComplete: s.onboardingComplete,
        diagnosticDone: s.diagnosticDone,
        diagnosticAnswers: s.diagnosticAnswers,
        session: s.session,
        modules: s.modules,
        concepts: s.concepts,
        answers: s.answers,
        notes: s.notes,
        bookmarks: s.bookmarks,
        doubts: s.doubts,
        settings: s.settings,
        finalProject: s.finalProject,
        lastActiveAt: s.lastActiveAt,
        xp: s.xp,
        evidence: s.evidence,
        srsRecords: s.srsRecords,
        domain: s.domain,
      }),
      migrate: (persisted, version) => {
        const s = (persisted ?? {}) as Partial<AppState>;
        if (version < 3) {
          if (!s.evidence) s.evidence = {};
          if (!s.srsRecords) s.srsRecords = {};
        }
        if (version < 4) {
          if (!s.domain) {
            s.domain = {
              counterfactual: {},
              case: {},
              currentSession: null,
              activityLog: [],
              sessions: [],
            };
          }
        }
        return s as AppState;
      },
      onRehydrateStorage: () => () => {
        useAppStore.setState({ _hasHydrated: true });
      },
    },
  ),
);

export { emptyModuleProgress };
export function fragileConceptIds(state?: { concepts: Record<string, ConceptProgress>; doubts: string[] }) {
  const s = state ?? useAppStore.getState();
  const fromState = Object.entries(s.concepts)
    .filter(([, c]) => ["RECALL_WEAK", "CONFUSED"].includes(c.state))
    .map(([id]) => id);
  return Array.from(new Set([...fromState, ...s.doubts]));
}
