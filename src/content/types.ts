export type ExplanationLevel =
  | "molecular"
  | "cellular"
  | "circuit"
  | "system"
  | "cognitive"
  | "behavioral"
  | "social";

export const LEVEL_LABEL: Record<ExplanationLevel, string> = {
  molecular: "Nível molecular",
  cellular: "Nível celular",
  circuit: "Nível de circuito",
  system: "Nível de sistema",
  cognitive: "Nível cognitivo",
  behavioral: "Nível comportamental",
  social: "Nível social",
};

export type EvidenceLevel =
  | "well_established"
  | "strong_evidence"
  | "supported_model"
  | "active_research"
  | "hypothesis";

export const EVIDENCE_LABEL: Record<EvidenceLevel, string> = {
  well_established: "Bem estabelecido",
  strong_evidence: "Evidência forte",
  supported_model: "Modelo sustentado",
  active_research: "Pesquisa ativa",
  hypothesis: "Hipótese",
};

export type ConceptState =
  | "UNSEEN"
  | "SEEN"
  | "EXPOSED"
  | "UNDERSTOOD"
  | "RECALL_WEAK"
  | "CONFUSED"
  | "APPLIED"
  | "MASTERED";

export type BlockKind =
  | "question"
  | "answer"
  | "explain"
  | "mechanism"
  | "consequence"
  | "connection"
  | "recall"
  | "misconception"
  | "level"
  | "diagram"
  | "case"
  | "limit"
  | "summary"
  | "prediction"
  | "chain"
  | "counterfactual_ref"
  | "case_ref";

export type ContentLayer = 1 | 2 | 3;

export type MechanismStep = {
  id: string;
  title: string;
  body: string;
};

export type ContentBlock = {
  id: string;
  kind: BlockKind;
  title?: string;
  body?: string;
  /** Explicação alternativa, cientificamente equivalente. */
  alt?: string;
  steps?: MechanismStep[];
  layer?: ContentLayer;
  conceptIds?: string[];
  level?: ExplanationLevel;
  diagram?: "action_potential" | "synapse" | "hpa" | "levels" | "scarf";
  /** Prediction prompt: leitor tenta prever antes de conferir a resposta. */
  predict?: { q: string; a: string };
  /** Cadeia causal (para blocos `chain`). */
  chain?: string[];
  /** Referência a Counterfactual/DomainCase por id. */
  refId?: string;
};

export type QuestionType =
  | "recognition"
  | "recall"
  | "relation"
  | "counterfactual"
  | "misconception"
  | "application"
  | "integration"
  | "limit";

export type ErrorKind =
  | "factual"
  | "causal"
  | "scale"
  | "generalization"
  | "language";

export type QuestionOption = {
  id: string;
  text: string;
};

export type Question = {
  id: string;
  moduleId: string;
  conceptIds: string[];
  type: QuestionType;
  difficulty: 1 | 2 | 3;
  prompt: string;
  options?: QuestionOption[];
  correctAnswer: string;
  explanation: string;
  misconception?: string;
  whyPlausible?: string;
  hint1: string;
  hint2: string;
  hint3: string;
  errorKind?: ErrorKind;
  modelAnswer?: string;
};

export type Concept = {
  id: string;
  name: string;
  definition: string;
  explanation: string;
  prerequisites: string[];
  originModule: string;
  related: string[];
  commonErrors: string[];
  applications: string[];
  evidenceLevel: EvidenceLevel;
  level: ExplanationLevel;
  functions?: string[];
  circuits?: string[];
  /** O que a evidência permite concluir — separado da interpretação. */
  observed?: string;
  interpretation?: string;
  limitation?: string;
};

export type GlossaryEntry = {
  id: string;
  term: string;
  definition: string;
  conceptId?: string;
};

export type ModuleMisconception = {
  claim: string;
  whyPlausible: string;
  problem: string;
  better: string;
};

export type ModuleReference = {
  title: string;
  kind: "livro" | "artigo" | "revisao" | "instituicao";
  note?: string;
};

export type ModuleContent = {
  id: string;
  stage: 1 | 2 | 3 | 4;
  number: number;
  title: string;
  shortTitle: string;
  objective: string;
  centralQuestion: string;
  prerequisites: string[];
  estimatedTime: {
    essential: number;
    deepen: number;
    questions: number;
  };
  concepts: string[];
  introduction: string;
  blocks: ContentBlock[];
  misconceptions: ModuleMisconception[];
  integration: string;
  relatedModules: string[];
  questions: Question[];
  summary: {
    shouldKnow: string[];
    acquiredConcepts: string[];
  };
  masteryCriteria: {
    comprehension: number;
    recall: number;
    contrast: number;
    application: number;
  };
  references: ModuleReference[];
  contentVersion: string;
};

export type StageInfo = {
  id: 1 | 2 | 3 | 4;
  name: string;
  subtitle: string;
  description: string;
  closingGoal: string;
  moduleIds: string[];
};

export type Myth = {
  id: string;
  claim: string;
  verdict: string;
  why: string;
  better: string;
  conceptIds: string[];
};

export type DiagnosticItem = {
  id: string;
  prompt: string;
  options: QuestionOption[];
  correctAnswer: string;
  conceptIds: string[];
  explanation: string;
};

export type FinalProjectField = {
  id: string;
  title: string;
  prompt: string;
  placeholder: string;
};

export type Challenge = {
  id: string;
  title: string;
  prompt: string;
  afterStage: 1 | 2 | 3 | 4;
  conceptIds: string[];
  options: QuestionOption[];
  correctIds: string[];
  explanation: string;
  allowUncertainty?: boolean;
};
