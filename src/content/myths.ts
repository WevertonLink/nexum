import type { Myth } from "./types";

export const MYTHS: Myth[] = [
  {
    id: "dopamine_pleasure",
    claim: "A dopamina é a molécula do prazer.",
    verdict: "Simplificação inadequada.",
    why: "A dopamina participa de aprendizagem, esforço, movimento e predição em circuitos distintos. Picos associados a recompensa inesperada não equivalem ao sentimento de prazer, e prazer pode ocorrer com padrões dopaminérgicos diversos.",
    better:
      "A dopamina é um neuromodulador cujo efeito depende do circuito, do receptor e do contexto. Em alguns paradigmas, seu sinal acompanha erro de predição de recompensa.",
    conceptIds: ["dopamine", "reward_prediction_error"],
  },
  {
    id: "amygdala_fear",
    claim: "A amígdala é o centro do medo.",
    verdict: "Localização funcional absoluta — incorreta.",
    why: "A amígdala participa de circuitos de aprendizagem e de processamento de estímulos relevantes. Medo, como experiência e como conjunto de respostas, envolve múltiplos sistemas. Lesão da amígdala altera certos aprendizados de ameaça; isso mostra participação, não monopolização.",
    better:
      "A amígdala participa de circuitos envolvidos em aprendizagem e no processamento de estímulos biologicamente relevantes. Em determinadas situações, sua atividade contribui para respostas associadas à ameaça.",
    conceptIds: ["amygdala", "emotion_as_process"],
  },
  {
    id: "cortisol_stress_hormone",
    claim: "O cortisol é o hormônio do estresse.",
    verdict: "Personificação enganosa.",
    why: "O cortisol tem ritmo circadiano, ações metabólicas e imunológicas cotidianas. Participa de respostas a desafios, mas não 'é' o estresse, nem todo estresse se reduz a ele.",
    better:
      "O cortisol é um glicocorticoide que participa da mobilização energética e de múltiplos ajustes. O eixo HPA é um dos efetores da resposta a desafios, não o sinônimo de estresse.",
    conceptIds: ["cortisol", "hpa_axis"],
  },
  {
    id: "left_right_brain",
    claim: "O hemisfério esquerdo é racional e o direito é emocional.",
    verdict: "Neuromito clássico.",
    why: "Há assimetrias, mas funções complexas são distribuídas. Tratar personalidade ou criatividade como 'lado' é um erro de escala e de evidência.",
    better:
      "Há especializações relativas, mas decisão, linguagem e afeto recrutam redes bilaterais. Lado esquerdo/direito não é uma explicação global do comportamento.",
    conceptIds: ["distributed_systems", "decision_making"],
  },
  {
    id: "triune",
    claim: "Temos um cérebro reptiliano, um límbico e um racional empilhados.",
    verdict: "Modelo didático ultrapassado e biologicamente enganoso.",
    why: "A evolução do encéfalo de mamíferos não ocorreu por empilhamento de cérebros prontos. Estruturas 'antigas' foram reorganizadas. O modelo triuno vira facilmente desculpa para hierarquizar emoção versus razão.",
    better:
      "O encéfalo é um sistema integrado, com circuitos que cruzam tronco, diencéfalo e córtex. Processos rápidos e lentos existem como descrição cognitiva, não como anatomia de três cérebros.",
    conceptIds: ["dual_process", "distributed_systems"],
  },
  {
    id: "unlimited_plasticity",
    claim: "A neuroplasticidade é ilimitada: você pode reprogramar o cérebro à vontade.",
    verdict: "Exagero de divulgação.",
    why: "Há plasticidade real, com restrições, janelas, custos e falhas. 'O cérebro muda' não autoriza qualquer método milagroso nem apaga limites biológicos e sociais.",
    better:
      "O sistema nervoso pode alterar sinapses e, em certos casos, estrutura, de modo dependente da experiência — dentro de restrições.",
    conceptIds: ["plasticity", "learning"],
  },
  {
    id: "fmri_emotion",
    claim: "Se uma área 'acende' no exame, aquela emoção está acontecendo ali.",
    verdict: "Confusão entre correlação, localização e causa.",
    why: "Sinal BOLD é uma proxy hemodinâmica, lenta e ambígua. Ativação não identifica uma emoção específica nem prova que a região é suficiente ou necessária.",
    better:
      "Neuroimagem pode ser consistente com a participação de uma rede em uma tarefa. Não substitui causalidade nem define o conteúdo subjetivo.",
    conceptIds: ["distributed_systems", "emotion_as_process"],
  },
  {
    id: "serotonin_happiness",
    claim: "A serotonina é o neurotransmissor da felicidade.",
    verdict: "Personificação.",
    why: "Sistemas serotoninérgicos participam de múltiplas funções (sono, apetite, impulsividade, humor) via muitos receptores. Reduzir humor a um transmissor ignora circuito, desenvolvimento e contexto.",
    better:
      "A serotonina é um neuromodulador com ações diversas. Nenhuma molécula 'é' um estado psicológico.",
    conceptIds: ["neurotransmitter", "modulation"],
  },
  {
    id: "use_10_percent",
    claim: "Usamos apenas 10% do cérebro.",
    verdict: "Falso.",
    why: "Lesões pequenas podem ter efeitos grandes; metabolismo e registros mostram atividade ampla. O mito sobrevive como motivação, não como fisiologia.",
    better:
      "Diferentes redes são recrutadas conforme a demanda, mas o tecido nervoso é metabolicamente caro e amplamente utilizado ao longo do tempo.",
    conceptIds: ["nervous_system"],
  },
  {
    id: "learning_styles",
    claim: "Cada pessoa tem um estilo de aprendizagem (visual, auditivo, cinestésico) que deve ditar o ensino.",
    verdict: "Não sustentado como prescrição.",
    why: "Preferências existem; a evidência de que ensinar no 'estilo' melhora aprendizagem é fraca. Recuperação ativa, espaço e elaboração têm base mais sólida.",
    better:
      "Adapte exemplos e carga cognitiva; não prenda o conteúdo a um canal sensorial como se fosse um tipo sanguíneo cognitivo.",
    conceptIds: ["learning", "retrieval"],
  },
];
