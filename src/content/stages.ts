import type { StageInfo } from "./types";

export const STAGES: StageInfo[] = [
  {
    id: 1,
    name: "Infraestrutura",
    subtitle: "Biologia celular e comunicação neural",
    description:
      "Como uma célula nervosa produz, propaga e transmite um sinal — sem saltar do íon para o comportamento.",
    closingGoal:
      "Reconstruir a cadeia: gradiente iônico → potencial de membrana → potencial de ação → propagação → Ca²⁺ → neurotransmissor → receptor.",
    moduleIds: [
      "module_01",
      "module_02",
      "module_03",
      "module_04",
      "module_05",
      "module_06",
      "module_07",
      "module_08",
    ],
  },
  {
    id: 2,
    name: "Sistemas",
    subtitle: "Neurobiologia sistêmica",
    description:
      "Do circuito ao sistema: emoção, estresse, recompensa e memória como processos distribuídos — não como 'áreas'.",
    closingGoal:
      "Explicar informação → circuitos → avaliação → alterações corporais → aprendizagem → comportamento, sem reduzir emoção a uma região.",
    moduleIds: [
      "module_09",
      "module_10",
      "module_11",
      "module_12",
      "module_13",
      "module_14",
      "module_15",
      "module_16",
    ],
  },
  {
    id: 3,
    name: "Cognição",
    subtitle: "Psicologia cognitiva e comportamento",
    description:
      "Atenção, memória, decisão, hábitos e vieses como outro nível de descrição — não como substituto da biologia.",
    closingGoal:
      "Integrar informação → atenção → memória → avaliação → decisão → ação → aprendizagem, reconhecendo processos simultâneos.",
    moduleIds: [
      "module_17",
      "module_18",
      "module_19",
      "module_20",
      "module_21",
      "module_22",
      "module_23",
      "module_24",
    ],
  },
  {
    id: 4,
    name: "Intervenção",
    subtitle: "Comunicação, escuta e aplicação",
    description:
      "Aplicar o conhecimento com responsabilidade: escutar, formular hipótese, comunicar, testar — e reconhecer limites.",
    closingGoal:
      "Analisar pessoa → contexto → estado → interpretação → comunicação → comportamento → possível intervenção, sem ultrapassar a formação.",
    moduleIds: [
      "module_25",
      "module_26",
      "module_27",
      "module_28",
      "module_29",
      "module_30",
      "module_31",
      "module_32",
    ],
  },
];

export const APP_NAME = "Nexum";
export const APP_TAGLINE = "Do neurônio à compreensão do comportamento";
export const APP_PRINCIPLE =
  "Aprender não é apenas reconhecer uma informação. Aprender significa conseguir reconstruí-la, diferenciá-la de explicações incorretas e utilizá-la adequadamente em um novo contexto.";
