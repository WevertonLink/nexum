import type { ContentBlock } from "../types.ts";
import type { ModuleId } from "./ids.ts";

/** Blocos pedagógicos extras (consequência, conexão, caso, camada 2/3, modelo de recall). */
export const EXTRA_BLOCKS: Partial<Record<ModuleId, ContentBlock[]>> = {
  module_09: [
    {
      id: "m09-cons",
      kind: "consequence",
      title: "O que essa mudança de escala permite",
      body: "Permite falar de emoção, estresse e recompensa sem apontar para um único território como se ele fosse a função. O sistema tem tempo próprio: milissegundos na sinapse, segundos no autonômico, minutos a horas no endócrino.",
    },
    {
      id: "m09-conn",
      kind: "connection",
      title: "Ainda é o mesmo tecido",
      body: "Nada aqui aposenta a etapa 1. Um sistema é um conjunto de [[circuit|circuitos]] feitos de células com membrana. Subir de escala não é trocar de ontologia.",
      conceptIds: ["circuit"],
    },
    {
      id: "m09-ex",
      kind: "case",
      title: "Caso",
      body: "Uma lesão em um território altera o reconhecimento de faces. Isso mostra um nó crítico. Não mostra que 'o reconhecimento mora ali' com exclusividade, nem que o restante do encéfalo é irrelevante.",
    },
    {
      id: "m09-adv",
      kind: "explain",
      title: "Lesão, estimulação, imagem",
      body: "Três métodos, três inferências. Lesão: necessidade relativa. Estimulação: suficiência em um contexto artificial. Imagem: correlação. Nenhum, sozinho, fecha a função.",
      layer: 3,
    },
  ],
  module_10: [
    {
      id: "m10-cons",
      kind: "consequence",
      title: "O que isso permite perguntar",
      body: "Diante de um episódio afetivo, você pode perguntar: o que foi avaliado? o que o corpo fez? qual tendência de ação? houve sentimento relatável? o que se aprendeu? Nem todo episódio tem todos os componentes.",
    },
    {
      id: "m10-conn",
      kind: "connection",
      title: "Níveis, de novo",
      body: "Chamar o episódio de [[emotion_as_process|processo]] não o torna imaterial. Autonômico, endócrino e circuito continuam no quadro — em outro zoom.",
      conceptIds: ["emotion_as_process", "levels_of_analysis"],
    },
    {
      id: "m10-ex",
      kind: "case",
      title: "Mesmo corpo, outro significado",
      body: "Taquicardia no corredor do hospital e taquicardia ao subir um lance de escadas compartilham efetores. O conteúdo do episódio não se lê no pulso sozinho.",
    },
    {
      id: "m10-alt",
      kind: "explain",
      title: "De outra maneira",
      body: "Pense em uma peça com vários instrumentos. Tirar o oboé muda a música; o oboé não é a sinfonia. Componentes afetivos são instrumentos, não o nome da peça.",
      alt: "Emoção não é um módulo que se liga. É um episódio com peças que às vezes caminham juntas.",
      layer: 2,
    },
  ],
  module_11: [
    {
      id: "m11-cons",
      kind: "consequence",
      title: "O que a formulação precisa",
      body: "Toda frase útil sobre a [[amygdala|amígdala]] contém 'participa' ou 'contribui'. Frases com 'é responsável por' ou 'é o centro de' falham o teste deste módulo.",
      conceptIds: ["amygdala"],
    },
    {
      id: "m11-conn",
      kind: "connection",
      title: "Saídas, não essência",
      body: "Núcleos centrais conversam com [[hypothalamus|hipotálamo]] e tronco. Isso explica padrões autonômicos associados a ameaça — sem transformar a estrutura no sentimento.",
      conceptIds: ["hypothalamus"],
    },
    {
      id: "m11-ex",
      kind: "case",
      title: "O que a lesão mostra",
      body: "Certos aprendizados de ameaça ficam prejudicados. A vida afetiva não desaparece. Participação com especificidade: exatamente o oposto de 'a amígdala é o medo'.",
    },
    {
      id: "m11-adv",
      kind: "explain",
      title: "Saliência também",
      body: "A amígdala responde a estímulos relevantes, inclusive apetitivos, em vários desenhos. Reduzi-la a medo é estreitar o que a evidência já mostrou.",
      layer: 3,
      conceptIds: ["amygdala"],
    },
  ],
  module_12: [
    {
      id: "m12-cons",
      kind: "consequence",
      title: "Por que o córtex não basta",
      body: "Sem um coordenador de temperatura, água, energia e defesa, a 'mente' seria um comentário sobre um corpo que não se sustenta. O [[hypothalamus|hipotálamo]] é um dos grandes acopladores.",
      conceptIds: ["hypothalamus"],
    },
    {
      id: "m12-conn",
      kind: "connection",
      title: "Ponte para o HPA",
      body: "Certos núcleos iniciam a cascata do módulo 13. Já separe três nomes: hipotálamo, cortisol, estresse. Eles não são sinônimos.",
    },
    {
      id: "m12-ex",
      kind: "case",
      title: "Febre",
      body: "A febre é um ajuste coordenado, não um 'instinto' genérico. Um coordenador fisiológico compartilhado não identitifica fome, sede e susto.",
    },
  ],
  module_13: [
    {
      id: "m13-cons",
      kind: "consequence",
      title: "O que o tempo lento permite",
      body: "Mobilização energética, efeitos imunológicos, influência sobre encoding em janelas de dose. Também um ritmo cotidiano que não é drama. O [[cortisol|cortisol]] trabalha mesmo num dia sem susto.",
      conceptIds: ["cortisol"],
    },
    {
      id: "m13-conn",
      kind: "connection",
      title: "Dois efetores, duas escalas",
      body: "Simpático em segundos; [[hpa_axis|HPA]] em minutos a horas. Confundi-los é o mesmo erro de confundir bomba e canal: escala temporal errada.",
      conceptIds: ["hpa_axis", "stress_response"],
    },
    {
      id: "m13-ex",
      kind: "case",
      title: "Um kit de 'nível de cortisol'",
      body: "Um número pontual não é biografia, não é caráter e não diagnostica. Ritmo, contexto, hora do dia e o que o ensaio mede importam — e ainda assim não substituem avaliação clínica.",
    },
    {
      id: "m13-adv",
      kind: "explain",
      title: "Feedback",
      body: "Glicocorticoides regulam a origem da cascata. Isso é fisiologia de eixo, não um interruptor de humor. Dose e tempo viram o sinal: o mesmo hormônio não 'faz' uma única coisa.",
      layer: 3,
    },
  ],
  module_14: [
    {
      id: "m14-cons",
      kind: "consequence",
      title: "O que o slogan impede de ver",
      body: "Movimento (via nigroestriatal), aprendizagem por predição, esforço. Se a [[dopamine|dopamina]] 'é prazer', Parkinson e erro de predição ficam inexplicáveis.",
      conceptIds: ["dopamine"],
    },
    {
      id: "m14-conn",
      kind: "connection",
      title: "Receptor, de novo",
      body: "Você já estudou que o efeito se decide no [[receptor|receptor]] e no circuito — não na molécula como personagem. Este módulo é a mesma regra em escala de sistema.",
      conceptIds: ["receptor", "modulation"],
    },
    {
      id: "m14-ex",
      kind: "case",
      title: "Wanting e liking",
      body: "Em vários desenhos, 'querer' e 'gostar' se separam. Isso não prova uma teoria única da vida mental; prova que o slogan do prazer é estreito demais.",
      layer: 2,
    },
    {
      id: "m14-alt",
      kind: "explain",
      title: "De outra maneira",
      body: "A molécula não carrega um significado psicológico. Ela altera a probabilidade de certas operações em certos circuitos. O significado mora na operação, no contexto e no tempo — não no nome do ligante.",
      layer: 2,
    },
  ],
  module_15: [
    {
      id: "m15-cons",
      kind: "consequence",
      title: "O que a modulação não garante",
      body: "Persistência de alguns aspectos, às vezes. Não fidelidade forense. Não um vídeo. [[memory_emotion|Modulação afetiva]] altera probabilidade, não autentica o conteúdo.",
      conceptIds: ["memory_emotion"],
    },
    {
      id: "m15-conn",
      kind: "connection",
      title: "Amígdala sem voltar ao medo",
      body: "Aqui ela entra como participante de circuitos que modulam consolidação de material relevante — a mesma disciplina do módulo 11.",
      conceptIds: ["amygdala"],
    },
    {
      id: "m15-ex",
      kind: "case",
      title: "Confiança alta",
      body: "Uma lembrança nítida, sentida no corpo, dita com certeza. Nada disso é prova de acurácia. Confiança e fidelidade se separam com frequência.",
    },
  ],
  module_16: [
    {
      id: "m16-cons",
      kind: "consequence",
      title: "O que você deve conseguir contar",
      body: "Informação → circuitos → avaliação → corpo → aprendizagem → comportamento. Sem vilão molecular. Sem centro da alma. Com a etapa 1 ainda visível em cada sinapse.",
    },
    {
      id: "m16-conn",
      kind: "connection",
      title: "Abre a etapa 3",
      body: "Atenção, memória e decisão serão outro nível de descrição — não uma biologia alternativa. O chão celular permanece.",
    },
    {
      id: "m16-ex",
      kind: "case",
      title: "Checklist contra o título",
      body: "'Cientistas encontram a área da criatividade.' Qual tarefa? Qual medida? Qual rede? O que não se pode concluir? Se você já faz essas perguntas, a etapa 2 cumpriu o ofício.",
    },
  ],
  module_17: [
    {
      id: "m17-cons",
      kind: "consequence",
      title: "O que a seleção custa",
      body: "O que entra com fidelidade sai de outro lugar. [[attention|Atenção]] não é um tanque único nem um holofote parietal. É família de processos com metas distintas.",
      conceptIds: ["attention"],
    },
    {
      id: "m17-conn",
      kind: "connection",
      title: "Ainda é circuito",
      body: "Selecionar é descrição cognitiva de operações em redes, com neuromodulação. Outro nível, mesmo organismo — a regra do módulo 1.",
    },
    {
      id: "m17-ex",
      kind: "case",
      title: "Festa barulhenta",
      body: "Não ouvir o próprio nome pode ser competição, carga, meta, sono. Não é, por si, um laudo. Este app não diagnostica.",
    },
    {
      id: "m17-adv",
      kind: "explain",
      title: "Alerta, orientação, controle",
      body: "Uma tríade útil, com dissociações clínicas possíveis. Não transforme a tríade em três áreas exclusivas.",
      layer: 2,
    },
  ],
  module_18: [
    {
      id: "m18-cons",
      kind: "consequence",
      title: "Por que este app testa",
      body: "Porque [[retrieval|recuperar]] é um evento novo que reconstrói. Reconhecer um texto não prova que você reconstrói o mecanismo. Exposição ≠ domínio.",
      conceptIds: ["retrieval"],
    },
    {
      id: "m18-conn",
      kind: "connection",
      title: "A ponte afetiva continua",
      body: "O módulo 15 mostrou modulação. Aqui a arquitetura: trabalho, encoding, sistemas de longo prazo, recuperação. Vivacidade ainda não é acurácia.",
    },
    {
      id: "m18-ex",
      kind: "case",
      title: "Reler o capítulo",
      body: "Familiaridade sobe. A capacidade de explicar o ciclo Na⁺/K⁺ pode não. Este é o motivo de haver recuperação ativa depois de cada conceito.",
    },
    {
      id: "m18-adv",
      kind: "explain",
      title: "O número 7, outra vez",
      body: "7±2 é histórico e contextual. Não é QI, não é lei universal de itens, não é o tamanho da alma.",
      layer: 3,
    },
  ],
  module_19: [
    {
      id: "m19-cons",
      kind: "consequence",
      title: "O que 'o cérebro muda' autoriza",
      body: "Autoriza estudar [[plasticity|plasticidade]] com restrições. Não autoriza milagre, método de 7 dias, nem apagar teto biológico e social.",
      conceptIds: ["plasticity"],
    },
    {
      id: "m19-conn",
      kind: "connection",
      title: "Da sinapse à política de ação",
      body: "Mudança sináptica é um nível. [[learning|Aprendizagem]] tem formas associativas, estatísticas, procedimentais, sociais. LTP não é o dicionário da vida mental.",
      conceptIds: ["learning"],
    },
    {
      id: "m19-ex",
      kind: "case",
      title: "Recuperação como evento de aprendizagem",
      body: "As questões deste app não são só medição. Recuperar e contrastar reorganizam representações. O teste é parte do encoding.",
    },
  ],
  module_20: [
    {
      id: "m20-cons",
      kind: "consequence",
      title: "O que cai quando cai o homúnculo",
      body: "Cai o duelo 'córtex racional versus amígdala emocional'. Ficam políticas de ação em competição: meta, pista, valor, tempo, norma.",
      conceptIds: ["decision_making"],
    },
    {
      id: "m20-conn",
      kind: "connection",
      title: "Dopamina entra como modulador",
      body: "Não como essência do prazer da escolha. Transferência do módulo 14: via, receptor, contexto.",
      conceptIds: ["dopamine"],
    },
    {
      id: "m20-ex",
      kind: "case",
      title: "Pressa",
      body: "Uma escolha ruim sob tempo curto pode ser previsível sem ser um veredito de caráter. Tempo muda qual controlador prevalece.",
    },
  ],
  module_21: [
    {
      id: "m21-cons",
      kind: "consequence",
      title: "Quando o modelo ajuda",
      body: "Para ensinar que processos mais automáticos e mais controlados têm custos diferentes. [[dual_process|Rápido e lento]] é heurística — e deve ser abandonado quando virar anatomia.",
      conceptIds: ["dual_process"],
    },
    {
      id: "m21-conn",
      kind: "connection",
      title: "O triuno fica para trás",
      body: "Evolução não empilha três cérebros prontos. 'Réptil versus humano' hierarquiza emoção como inferior e falha como mapa.",
    },
    {
      id: "m21-ex",
      kind: "case",
      title: "Na reunião",
      body: "'Seu cérebro reptiliano atacou.' Tradução possível: um processo mais automático, talvez defensivo. Sem réptil interno, sem diagnóstico.",
    },
  ],
  module_22: [
    {
      id: "m22-cons",
      kind: "consequence",
      title: "Implicação sem jaleco",
      body: "Mudar pistas e rotinas é mais coerente com o mecanismo do [[habit|hábito]] do que invocar uma substância chamada força de vontade. Isso é coerência conceitual, não prescrição clínica.",
      conceptIds: ["habit"],
    },
    {
      id: "m22-conn",
      kind: "connection",
      title: "Ainda não é vício de dopamina",
      body: "A molécula entra como modulador de aprendizagem, não como essência do hábito cotidiano. Personagem + moral = dois erros de uma vez.",
      conceptIds: ["dopamine"],
    },
    {
      id: "m22-ex",
      kind: "case",
      title: "A mão no aplicativo",
      body: "Às 23h o corpo vai até a mesa. A meta declarada já tinha mudado. A política de ação, gatilhada por pista, não.",
    },
  ],
  module_23: [
    {
      id: "m23-cons",
      kind: "consequence",
      title: "O nome não encerra o caso",
      body: "[[cognitive_bias|Viés]] é desvio sistemático frente a um modelo normativo. Ainda faltam processo, incentivo, dado e a pergunta: a heurística ajuda noutro contexto?",
      conceptIds: ["cognitive_bias"],
    },
    {
      id: "m23-conn",
      kind: "connection",
      title: "O viés do analista",
      body: "Na etapa 4, o mesmo rigor vira ofício: se todas as suas perguntas só confirmam o módulo 22, você está enviesado.",
    },
    {
      id: "m23-ex",
      kind: "case",
      title: "Confirmação",
      body: "Alguém só lê o que confirma a tese. Além do rótulo: quais pistas, incentivos e custos de buscar o contrário estão no ambiente?",
    },
  ],
  module_24: [
    {
      id: "m24-cons",
      kind: "consequence",
      title: "A esteira é didática",
      body: "Informação → atenção → memória → avaliação → decisão → ação → aprendizagem. Na operação, processos se sobrepõem. [[prediction|Predição]] atravessa vários — como princípio, não como religião.",
      conceptIds: ["prediction"],
    },
    {
      id: "m24-conn",
      kind: "connection",
      title: "O hábito fura o relógio",
      body: "A ação pode disparar antes da deliberação terminar. Isso não derruba a cadeia: mostra temporalidades distintas de controladores.",
      conceptIds: ["habit"],
    },
    {
      id: "m24-ex",
      kind: "case",
      title: "Três andares, um prédio",
      body: "Atenção e decisão acontecem em organismos com membranas, circuitos e eixos. A cognição nomeia operações; não apaga o chão.",
    },
  ],
  module_25: [
    {
      id: "m25-cons",
      kind: "consequence",
      title: "Ordem ética e epistêmica",
      body: "Observável → relato → hipótese → teste pequeno. Inverter é o atalho que a etapa 1 já condenou entre níveis. [[listening|Escutar]] impede que a hipótese se vista de fato.",
      conceptIds: ["listening"],
    },
    {
      id: "m25-conn",
      kind: "connection",
      title: "Evidência versus hipótese, agora em pessoa",
      body: "O relato é dado. O mecanismo é proposta. A trilha ensina mecanismos gerais, não a biografia de ninguém.",
      conceptIds: ["evidence_vs_hypothesis"],
    },
    {
      id: "m25-ex",
      kind: "case",
      title: "Atrasos",
      body: "Você pensa 'hábito' ou 'ameaça'. Antes: o que a pessoa descreve? O contexto mudou? Há mais de uma explicação plausível? Não é possível determinar com certeza — e isso pode ser a melhor resposta.",
    },
  ],
  module_26: [
    {
      id: "m26-cons",
      kind: "consequence",
      title: "O que se pode dizer em voz alta",
      body: "'Esta situação é compatível com sinal de ameaça de status.' Não: 'a amígdala dele disparou e por isso tem o transtorno Y.' Três saltos a menos.",
      conceptIds: ["threat_safety"],
    },
    {
      id: "m26-conn",
      kind: "connection",
      title: "Eixos da etapa 2, com freio",
      body: "Avaliação de relevância, autonômico, HPA conforme duração — atravessados por significado cultural. Nenhum esgota o episódio.",
      conceptIds: ["hpa_axis", "amygdala"],
    },
    {
      id: "m26-ex",
      kind: "case",
      title: "Crítica pública",
      body: "Calar-se pode ser ameaça de status, estratégia, cansaço, desacordo, história. Uma intervenção testável: mudar o contexto do feedback (privado, específico) e observar — sem anunciar diagnóstico.",
    },
  ],
  module_27: [
    {
      id: "m27-cons",
      kind: "consequence",
      title: "Como usar sem ontologizar",
      body: "Como checklist de desenho de conversa. [[scarf|SCARF]] não mede o cérebro de ninguém, não substitui direito, cuidado clínico ou escuta. Evidence level: ferramenta.",
      conceptIds: ["scarf"],
    },
    {
      id: "m27-conn",
      kind: "connection",
      title: "Cada dimensão, o ciclo pedido",
      body: "Conceito → situação → possível percepção → efeito comportamental → estratégia de comunicação → limite do modelo. Sem o último passo, a ferramenta vira frenologia de reunião.",
    },
    {
      id: "m27-ex",
      kind: "case",
      title: "Feedback difícil",
      body: "Privado, específico, com clareza de critérios e espaço de resposta. Status + fairness + autonomy como desenho — não como circuito oficial.",
    },
    {
      id: "m27-adv",
      kind: "limit",
      title: "Quando a pessoa não 'cabe'",
      body: "O modelo é incompleto. Volte à escuta. Não force o encaixe. A ferramenta falha; a pessoa não.",
      layer: 2,
    },
  ],
  module_28: [
    {
      id: "m28-cons",
      kind: "consequence",
      title: "Perguntas que poderiam falhar",
      body: "Se a pergunta já contém o diagnóstico, ela só pode confirmar. [[strategic_questions|Perguntas estratégicas]] pedem sequência, exceção e o que não se pode concluir.",
      conceptIds: ["strategic_questions"],
    },
    {
      id: "m28-conn",
      kind: "connection",
      title: "A trilha inteira era isso",
      body: "Cada módulo abriu com uma pergunta que o anterior tornou possível. Agora o ofício é o mesmo, com pessoas: perguntar para ver, não para encaixar.",
    },
    {
      id: "m28-ex",
      kind: "case",
      title: "Troque o rótulo",
      body: "'Você tem TDAH?' → 'O que acontece quando você tenta manter a instrução?' e 'Quando isso não acontece?'. Duas perguntas, zero laudo.",
    },
  ],
  module_29: [
    {
      id: "m29-cons",
      kind: "consequence",
      title: "Timing é intervenção",
      body: "O conteúdo certo no momento errado piora o episódio. Adiar pode regular. [[regulation|Regulação]] inclui o relacional — e não autoriza terapia improvisada.",
      conceptIds: ["regulation"],
    },
    {
      id: "m29-conn",
      kind: "connection",
      title: "Atenção entra",
      body: "Selecionar ou desengajar muda a entrada que sustenta o estado. Não é o único caminho, e não é supressão heroica — ponte do módulo 17.",
      conceptIds: ["attention"],
    },
    {
      id: "m29-ex",
      kind: "case",
      title: "No limite",
      body: "Alguém está visivelmente no limite. Análise agora aumenta a carga. Co-regulação cotidiana: respeito ao timing, dentro do seu papel — não um jaleco.",
    },
  ],
  module_30: [
    {
      id: "m30-cons",
      kind: "consequence",
      title: "Sucesso prático ≠ prova causal",
      body: "Se a [[intervention|intervenção]] 'funcionar', outras variáveis podem ter mudado. A disciplina da etapa 1 permanece: não transforme correlação em causa única.",
      conceptIds: ["intervention"],
    },
    {
      id: "m30-conn",
      kind: "connection",
      title: "A frase proibida",
      body: "'Se a pessoa faz X, provavelmente possui transtorno Y.' Esse comportamento pode ter diversas explicações. Contexto, história, estado — e, quando pertinente, avaliação profissional.",
    },
    {
      id: "m30-ex",
      kind: "case",
      title: "Uma frase que pode falhar",
      body: "Carregar o celular fora do quarto por uma semana e contar as aberturas noturnas. Se não pode falhar, não é teste. Se não houve consentimento, não é responsável.",
    },
  ],
  module_31: [
    {
      id: "m31-cons",
      kind: "consequence",
      title: "Incerteza como qualidade",
      body: "'Há evidências de X, mas não é possível concluir Y apenas com essas informações.' [[limits_of_application|Limites]] não são um anexo jurídico — são domínio.",
      conceptIds: ["limits_of_application"],
    },
    {
      id: "m31-conn",
      kind: "connection",
      title: "Princípio sobre saúde",
      body: "Conhecimento sobre mecanismos neurobiológicos não substitui avaliação clínica individual. A trilha forma raciocínio, não licença.",
    },
    {
      id: "m31-ex",
      kind: "case",
      title: "'Lê o meu cérebro'",
      body: "Recuse o papel. Ofereça perguntas. Se houver sofrimento, sugira cuidado profissional. Não entregue um laudo com amígdala e dopamina.",
    },
  ],
  module_32: [
    {
      id: "m32-cons",
      kind: "consequence",
      title: "O critério de sucesso",
      body: "Reconstruir mecanismos, detectar simplificações, aplicar a situações novas, reconhecer incertezas. Não recitar 32 títulos. A pontuação da rubrica não é inteligência.",
    },
    {
      id: "m32-conn",
      kind: "connection",
      title: "A trilha não acaba",
      body: "Conceitos voltam em revisões. Aprendizagem não é um certificado de 100%. O produto final é uma forma mais precisa de perguntar.",
    },
    {
      id: "m32-ex",
      kind: "case",
      title: "Três slogans que você não usará",
      body: "Amígdala = medo. Dopamina = prazer. Se faz X, tem Y. Se a análise cabe numa palavra, ainda não é o projeto.",
    },
  ],
};

export function blocksFor(moduleId: string, base: ContentBlock[]): ContentBlock[] {
  const extra = (EXTRA_BLOCKS as Record<string, ContentBlock[] | undefined>)[moduleId];
  if (!extra?.length) return base;
  const seen = new Set(base.map((b) => b.id));
  return [...base, ...extra.filter((b) => !seen.has(b.id))];
}
