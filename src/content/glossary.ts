import { CONCEPTS } from "./concepts";
import type { GlossaryEntry } from "./types";

const extras: GlossaryEntry[] = [
  {
    id: "crh",
    term: "CRH",
    definition:
      "Hormônio liberador de corticotrofina, sinal hipotalâmico que participa do início da cascata do eixo HPA.",
    conceptId: "hpa_axis",
  },
  {
    id: "acth",
    term: "ACTH",
    definition: "Hormônio adrenocorticotrófico liberado pela hipófise, intermediário do eixo HPA.",
    conceptId: "hpa_axis",
  },
  {
    id: "epsp",
    term: "EPSP",
    definition:
      "Potencial pós-sináptico excitatório: despolarização graduada que aproxima a célula do limiar, sem ser um spike.",
    conceptId: "excitation",
  },
  {
    id: "ipsp",
    term: "IPSP",
    definition:
      "Potencial pós-sináptico inibitório: alteração que afasta ou estabiliza o potencial longe do limiar de disparo.",
    conceptId: "inhibition",
  },
  {
    id: "bold",
    term: "Sinal BOLD",
    definition:
      "Proxy hemodinâmica usada em fMRI. É lenta e ambígua; consistência com uma tarefa não prova identidade de uma faculdade mental.",
    conceptId: "distributed_systems",
  },
  {
    id: "wanting_liking",
    term: "Wanting e liking",
    definition:
      "Distinção, em certos paradigmas, entre 'querer' (invigoração/busca) e 'gostar' (componente hedônico). Ajuda a não reduzir dopamina a prazer.",
    conceptId: "dopamine",
  },
];

const fromConcepts: GlossaryEntry[] = CONCEPTS.map((c) => ({
  id: c.id,
  term: c.name,
  definition: c.definition,
  conceptId: c.id,
}));

const seen = new Set<string>();
export const GLOSSARY: GlossaryEntry[] = [...fromConcepts, ...extras].filter((g) => {
  if (seen.has(g.id)) return false;
  seen.add(g.id);
  return true;
});
