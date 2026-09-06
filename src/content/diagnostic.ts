import type { Challenge, DiagnosticItem, FinalProjectField } from "./types";

export const DIAGNOSTIC: DiagnosticItem[] = [
  {
    id: "d1",
    prompt: "Qual formulação descreve melhor o papel da amígdala?",
    options: [
      { id: "a", text: "É o centro do medo no cérebro." },
      { id: "b", text: "Participa de circuitos envolvidos em aprendizagem e no processamento de estímulos biologicamente relevantes." },
      { id: "c", text: "Produz todas as emoções humanas." },
    ],
    correctAnswer: "b",
    conceptIds: ["amygdala"],
    explanation:
      "Participação em circuitos não equivale a ser 'o centro' de uma experiência complexa.",
  },
  {
    id: "d2",
    prompt: "O potencial de ação ocorre principalmente porque:",
    options: [
      { id: "a", text: "A bomba de sódio-potássio dispara um choque." },
      { id: "b", text: "Canais dependentes de voltagem mudam a permeabilidade iônica de forma regenerativa." },
      { id: "c", text: "O neurônio se esvazia de eletricidade." },
    ],
    correctAnswer: "b",
    conceptIds: ["action_potential"],
    explanation:
      "A bomba mantém gradientes a longo prazo; o evento rápido é um ciclo de canais.",
  },
  {
    id: "d3",
    prompt: "A dopamina, em uma formulação mais precisa:",
    options: [
      { id: "a", text: "É a molécula do prazer." },
      { id: "b", text: "Participa de diferentes processos; o efeito depende de circuito, receptor e contexto." },
      { id: "c", text: "Só existe no núcleo accumbens." },
    ],
    correctAnswer: "b",
    conceptIds: ["dopamine"],
    explanation: "Personificar um neuromodulador apaga a diversidade de seus circuitos.",
  },
  {
    id: "d4",
    prompt: "Se uma estrutura participa de um processo, podemos concluir que ela é suficiente para produzi-lo?",
    options: [
      { id: "a", text: "Sim — participação implica suficiência." },
      { id: "b", text: "Não necessariamente. Participação não implica suficiência nem exclusividade." },
      { id: "c", text: "Sim, desde que a estrutura 'acenda' em um exame." },
    ],
    correctAnswer: "b",
    conceptIds: ["levels_of_analysis", "evidence_vs_hypothesis"],
    explanation: "Esta é uma pergunta de limite: evita o salto de correlação para causa exclusiva.",
  },
  {
    id: "d5",
    prompt: "Qual afirmação sobre memória é mais adequada?",
    options: [
      { id: "a", text: "Lembrar é reproduzir um arquivo intacto." },
      { id: "b", text: "A recuperação é uma reconstrução influenciada por pistas e pelo estado atual." },
      { id: "c", text: "Toda memória fica em um único lugar do cérebro." },
    ],
    correctAnswer: "b",
    conceptIds: ["retrieval"],
    explanation: "A reconstrução explica tanto a aprendizagem quanto os erros de memória.",
  },
  {
    id: "d6",
    prompt: "O cortisol:",
    options: [
      { id: "a", text: "É o hormônio do estresse e sua presença prova sofrimento." },
      { id: "b", text: "É um glicocorticoide com ações cotidianas e também participa de respostas a desafios." },
      { id: "c", text: "Só é liberado em pânico." },
    ],
    correctAnswer: "b",
    conceptIds: ["cortisol"],
    explanation: "Ritmo circadiano e funções metabólicas impedem a personificação.",
  },
  {
    id: "d7",
    prompt: "Uma boa intervenção baseada nesta trilha deve:",
    options: [
      { id: "a", text: "Diagnosticar o transtorno da pessoa a partir de um comportamento." },
      { id: "b", text: "Formular uma hipótese testável, considerar contexto e reconhecer limites." },
      { id: "c", text: "Aplicar um rótulo neural para encerrar a conversa." },
    ],
    correctAnswer: "b",
    conceptIds: ["intervention", "limits_of_application"],
    explanation: "Conhecimento de mecanismos não substitui avaliação clínica nem autoriza diagnóstico leigo.",
  },
  {
    id: "d8",
    prompt: "Explicar um comportamento só com canais iônicos é um erro principalmente de:",
    options: [
      { id: "a", text: "Ortografia." },
      { id: "b", text: "Escala — um nível não substitui automaticamente outro." },
      { id: "c", text: "Falta de entusiasmo." },
    ],
    correctAnswer: "b",
    conceptIds: ["levels_of_analysis"],
    explanation: "A trilha ensina a nomear o nível em que se está falando.",
  },
];

export const CHALLENGES: Challenge[] = [
  {
    id: "challenge_stage1",
    title: "Integração da infraestrutura",
    afterStage: 1,
    prompt:
      "Um potencial de ação chega ao terminal. Ordene mentalmente a cadeia até a célula seguinte ser influenciada. Quais elementos participam diretamente?",
    conceptIds: ["action_potential", "calcium_channels", "neurotransmitter", "receptor"],
    options: [
      { id: "a", text: "Canais de Ca²⁺ no terminal" },
      { id: "b", text: "Fusão de vesículas" },
      { id: "c", text: "A bomba Na⁺/K⁺ como causa imediata da liberação" },
      { id: "d", text: "Interação com receptores pós-sinápticos" },
      { id: "e", text: "A amígdala decidindo o significado do sinal" },
    ],
    correctIds: ["a", "b", "d"],
    explanation:
      "A bomba preserva gradientes a longo prazo; não é o gatilho da exocitose. A amígdala é outro nível: um evento sináptico não 'é' uma emoção.",
  },
  {
    id: "challenge_stage2",
    title: "Integração sistêmica",
    afterStage: 2,
    prompt:
      "Uma pessoa vê um estímulo inesperado e seu coração acelera. Quais níveis podem participar da explicação, sem reduzir o episódio a uma área?",
    conceptIds: ["emotion_as_process", "hpa_axis", "amygdala", "levels_of_analysis"],
    options: [
      { id: "a", text: "Circuitos de avaliação de relevância" },
      { id: "b", text: "Ajustes autonômicos e, conforme duração, eixo HPA" },
      { id: "c", text: "Apenas 'a amígdala do medo'" },
      { id: "d", text: "Aprendizagem e memória do contexto" },
      { id: "e", text: "Interpretação e contexto da situação" },
    ],
    correctIds: ["a", "b", "d", "e"],
    explanation:
      "O item C é o neuromito. O episódio atravessa circuito, sistema corporal, aprendizagem e significado.",
  },
  {
    id: "challenge_stage3",
    title: "Integração cognitiva",
    afterStage: 3,
    prompt:
      "Alguém repete o mesmo caminho até o trabalho e um dia, mudando de meta, ainda assim sai no desvio antigo. O que é mais pertinente?",
    conceptIds: ["habit", "decision_making", "attention"],
    options: [
      { id: "a", text: "Controle habitual relativamente insensível à meta atual" },
      { id: "b", text: "Falha moral de 'falta de dopamina'" },
      { id: "c", text: "Pistas de contexto disparando uma política de ação aprendida" },
      { id: "d", text: "Possível competição com controle deliberativo sob baixa atenção" },
    ],
    correctIds: ["a", "c", "d"],
    explanation:
      "Hábito é uma solução computacional, não um veredito de caráter. Dopamina personificada não explica o desvio.",
  },
  {
    id: "challenge_stage4",
    title: "Caso de intervenção",
    afterStage: 4,
    prompt:
      "Um colega se cala após uma crítica pública. Qual análise é mais responsável?",
    conceptIds: ["listening", "scarf", "limits_of_application"],
    options: [
      { id: "a", text: "Ele tem um transtorno de ansiedade — a amígdala disparou." },
      { id: "b", text: "A situação pode ter sinalizado ameaça de status e de justiça; vale escutar antes de intervir." },
      { id: "c", text: "Uma hipótese testável é mudar o contexto do feedback e observar o efeito." },
      { id: "d", text: "Não é possível diagnosticar a pessoa com essas informações." },
    ],
    correctIds: ["b", "c", "d"],
    explanation:
      "O item A ultrapassa a evidência e a formação. Incerteza explícita é uma boa resposta.",
    allowUncertainty: true,
  },
];

export const FINAL_PROJECT_FIELDS: FinalProjectField[] = [
  {
    id: "phenomenon",
    title: "Fenômeno observado",
    prompt: "O que está acontecendo? Descreva o observável, não a teoria.",
    placeholder: "O que se vê, se ouve, se mede — separado da interpretação.",
  },
  {
    id: "hypotheses",
    title: "Hipóteses",
    prompt: "Quais mecanismos podem estar envolvidos? Formule mais de uma.",
    placeholder: "Pelo menos duas hipóteses concorrentes.",
  },
  {
    id: "biological",
    title: "Nível biológico",
    prompt: "Quais mecanismos neurobiológicos são relevantes — e em que escala?",
    placeholder: "Circuito, sistema, moduladores… sem personificar moléculas.",
  },
  {
    id: "cognitive",
    title: "Nível cognitivo",
    prompt: "Quais processos mentais podem participar?",
    placeholder: "Atenção, memória, avaliação, hábito, decisão…",
  },
  {
    id: "context",
    title: "Contexto",
    prompt: "Quais fatores ambientais ou sociais podem influenciar?",
    placeholder: "Pessoa, ambiente, história, normas, ameaça/segurança.",
  },
  {
    id: "intervention",
    title: "Intervenção",
    prompt: "O que poderia ser testado? Pequeno, ético, reversível.",
    placeholder: "Uma mudança observável, com critério de avaliação.",
  },
  {
    id: "limits",
    title: "Limitações",
    prompt: "O que não pode ser concluído?",
    placeholder: "O que seria excesso de interpretação ou diagnóstico indevido.",
  },
];

export const FINAL_CASES = [
  {
    id: "case_meeting",
    title: "A reunião que desandou",
    body: "Numa reunião, alguém interrompe repetidamente. Outra pessoa se cala, o tom sobe, e ao final ninguém lembra o acordo. Você não conhece o histórico clínico de ninguém.",
  },
  {
    id: "case_study",
    title: "O estudo que não gruda",
    body: "Um estudante relê o mesmo capítulo várias noites, sente que 'já sabe', mas na hora de explicar o mecanismo trava e confunde potencial de ação com potencial de repouso.",
  },
  {
    id: "case_habit",
    title: "O caminho automático",
    body: "Alguém decide reduzir o uso noturno do celular. Às 23h, o corpo vai até a mesa, a mão abre o aplicativo, e só depois surge a frase 'eu não queria isso agora'.",
  },
];
