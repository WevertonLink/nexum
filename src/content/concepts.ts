import type { Concept } from "./types.ts";

export const CONCEPTS: Concept[] = [
  {
    id: "levels_of_analysis",
    name: "Níveis de análise",
    definition:
      "Escalas distintas de descrição (molecular, celular, circuito, sistema, cognitivo, comportamental, social) que não se substituem automaticamente.",
    explanation:
      "Um fenômeno pode ser descrito em vários níveis. Explicar canais iônicos não esgota a atenção; descrever um comportamento não explica o potencial de ação. O erro comum é tratar um nível como causa completa de outro.",
    prerequisites: [],
    originModule: "module_01",
    related: ["nervous_system", "circuit", "emotion_as_process"],
    commonErrors: [
      "Tratar uma área cerebral como explicação suficiente de um comportamento.",
      "Confundir correlação entre níveis com redução causal completa.",
    ],
    applications: [
      "Perguntar em que nível uma afirmação está operando antes de aceitá-la.",
    ],
    evidenceLevel: "well_established",
    level: "system",
  },
  {
    id: "nervous_system",
    name: "Sistema nervoso",
    definition:
      "Sistema biológico de células especializadas em receber, integrar e transmitir informação, acoplado ao restante do organismo.",
    explanation:
      "O sistema nervoso não é um computador abstrato. É tecido vivo: consome energia, depende de membranas, íons, glia, vascularização e contexto corporal.",
    prerequisites: ["levels_of_analysis"],
    originModule: "module_01",
    related: ["neuron", "glia"],
    commonErrors: ["Tratar o cérebro como órgão isolado do corpo."],
    applications: ["Situar qualquer função em um organismo, não em um diagrama solto."],
    evidenceLevel: "well_established",
    level: "system",
  },
  {
    id: "neuron",
    name: "Neurônio",
    definition:
      "Célula polarizada, especializada em receber sinais em dendritos e soma, e transmitir um sinal elétrico ao longo do axônio até terminais.",
    explanation:
      "A forma do neurônio não é decorativa: dendritos aumentam superfície de recepção; o axônio conduz a longa distância; o terminal é o sítio de comunicação química.",
    prerequisites: ["nervous_system"],
    originModule: "module_02",
    related: ["dendrite", "axon", "membrane", "glia"],
    commonErrors: ["Imaginar o neurônio como um fio simples, sem polaridade funcional."],
    applications: ["Relacionar estrutura celular à direção do fluxo de informação."],
    evidenceLevel: "well_established",
    level: "cellular",
  },
  {
    id: "dendrite",
    name: "Dendrito",
    definition: "Prolongamento neuronal especializado em receber e integrar entradas sinápticas.",
    explanation:
      "Dendritos não são meros 'cabos de entrada'. Sua geometria e canais influenciam se e como potenciais pós-sinápticos alcançam o soma.",
    prerequisites: ["neuron"],
    originModule: "module_02",
    related: ["soma", "integration"],
    commonErrors: ["Tratar dendritos como passivos e irrelevantes para o cálculo celular."],
    applications: ["Explicar integração espacial de entradas."],
    evidenceLevel: "well_established",
    level: "cellular",
  },
  {
    id: "soma",
    name: "Corpo celular",
    definition: "Região do neurônio que contém o núcleo e a maquinaria metabólica, e participa da integração de sinais.",
    explanation:
      "O soma mantém a célula e contribui para somar influências sinápticas antes da decisão de disparar ou não um potencial de ação.",
    prerequisites: ["neuron"],
    originModule: "module_02",
    related: ["dendrite", "axon"],
    commonErrors: ["Reduzir o neurônio ao corpo celular, ignorando polaridade."],
    applications: ["Localizar síntese proteica e integração."],
    evidenceLevel: "well_established",
    level: "cellular",
  },
  {
    id: "axon",
    name: "Axônio",
    definition: "Prolongamento especializado em conduzir o potencial de ação até os terminais.",
    explanation:
      "O axônio é uma estrutura ativa: sua membrana, diâmetro e mielinização alteram velocidade e fidelidade da condução.",
    prerequisites: ["neuron"],
    originModule: "module_02",
    related: ["action_potential", "myelin", "axon_terminal"],
    commonErrors: ["Tratar o axônio como um fio passivo de cobre."],
    applications: ["Explicar por que lesões axonais interrompem comunicação a distância."],
    evidenceLevel: "well_established",
    level: "cellular",
  },
  {
    id: "axon_terminal",
    name: "Terminal axônico",
    definition: "Região final do axônio onde o potencial de ação pode desencadear liberação de neurotransmissor.",
    explanation:
      "No terminal, o sinal elétrico é convertido em um evento químico dependente de cálcio. Sem essa conversão, a célula seguinte não recebe o recado da mesma forma.",
    prerequisites: ["axon"],
    originModule: "module_02",
    related: ["synapse", "calcium_channels", "neurotransmitter"],
    commonErrors: ["Achar que o potencial de ação 'pula' diretamente para a próxima célula."],
    applications: ["Identificar o sítio em que Ca²⁺ se torna crítico."],
    evidenceLevel: "well_established",
    level: "cellular",
  },
  {
    id: "membrane",
    name: "Membrana neuronal",
    definition:
      "Bicamada lipídica com proteínas (canais, bombas, receptores) que controla o fluxo de íons e, com isso, o potencial elétrico da célula.",
    explanation:
      "A membrana é o palco da eletricidade biológica. Sem seletividade iônica e sem assimetria de concentrações, não haveria potencial de repouso nem de ação.",
    prerequisites: ["neuron"],
    originModule: "module_03",
    related: ["ion_gradient", "membrane_potential"],
    commonErrors: ["Pensar a membrana como saco inerte, não como máquina de transporte."],
    applications: ["Explicar por que fármacos que ligam canais alteram excitabilidade."],
    evidenceLevel: "well_established",
    level: "molecular",
  },
  {
    id: "glia",
    name: "Glia",
    definition:
      "Células não neuronais que sustentam, isolam, modulam e participam da fisiologia do tecido nervoso.",
    explanation:
      "Astrócitos, oligodendrócitos, microglia e outras células gliais não são 'cola'. Participam de mielinização, homeostase iônica, metabolismo e respostas imunes.",
    prerequisites: ["nervous_system"],
    originModule: "module_02",
    related: ["myelin", "synapse"],
    commonErrors: ["Ignorar a glia ao explicar comunicação neural."],
    applications: ["Incluir mielina e suporte metabólico em modelos de condução."],
    evidenceLevel: "well_established",
    level: "cellular",
  },
  {
    id: "ion_gradient",
    name: "Gradiente iônico",
    definition:
      "Diferença de concentração de íons entre os dois lados da membrana, mantida a custo energético.",
    explanation:
      "Sódio está mais concentrado fora; potássio, dentro. Esses gradientes são energia potencial. Canais permitem que essa energia se converta em corrente.",
    prerequisites: ["membrane"],
    originModule: "module_03",
    related: ["sodium_potassium_pump", "membrane_potential"],
    commonErrors: ["Achar que íons se distribuem igualmente e que a eletricidade 'aparece' sem assimetria."],
    applications: ["Prever direção de fluxo iônico se um canal se abrir."],
    evidenceLevel: "well_established",
    level: "molecular",
  },
  {
    id: "sodium_potassium_pump",
    name: "Bomba sódio-potássio",
    definition:
      "ATPase de membrana que exporta Na⁺ e importa K⁺, mantendo gradientes iônicos a custo de ATP.",
    explanation:
      "A bomba não 'dispara' o potencial de ação. Ela restabelece e preserva as assimetrias sem as quais os canais não produziriam correntes úteis ao longo do tempo.",
    prerequisites: ["ion_gradient"],
    originModule: "module_03",
    related: ["resting_potential"],
    commonErrors: ["Atribuir o potencial de ação diretamente à bomba."],
    applications: ["Explicar por que falha energética compromete excitabilidade."],
    evidenceLevel: "well_established",
    level: "molecular",
  },
  {
    id: "membrane_potential",
    name: "Potencial de membrana",
    definition:
      "Diferença de potencial elétrico entre o interior e o exterior da célula, determinada por gradientes e permeabilidades iônicas.",
    explanation:
      "O potencial de membrana é uma variável instantânea. Muda quando a permeabilidade relativa a diferentes íons muda.",
    prerequisites: ["ion_gradient"],
    originModule: "module_03",
    related: ["resting_potential", "depolarization"],
    commonErrors: ["Tratar o potencial como um número fixo, independente de canais."],
    applications: ["Ler um traçado e dizer o que uma deflexão significa fisicamente."],
    evidenceLevel: "well_established",
    level: "cellular",
  },
  {
    id: "resting_potential",
    name: "Potencial de repouso",
    definition:
      "Valor típico do potencial de membrana quando a célula não está disparando, próximo ao equilíbrio do potássio, mas não idêntico a ele.",
    explanation:
      "No repouso a membrana é mais permeável a K⁺ do que a Na⁺. O potencial resulta de um compromisso entre íons, não de um único íon isolado, e depende também da bomba.",
    prerequisites: ["membrane_potential", "sodium_potassium_pump"],
    originModule: "module_03",
    related: ["electrochemical_equilibrium", "threshold"],
    commonErrors: ["Dizer que o interior é negativo 'porque tem proteínas negativas' como explicação única."],
    applications: ["Explicar de onde surge a diferença elétrica."],
    evidenceLevel: "well_established",
    level: "cellular",
  },
  {
    id: "electrochemical_equilibrium",
    name: "Equilíbrio eletroquímico",
    definition:
      "Ponto em que a força química de um íon é equilibrada pela força elétrica, e o fluxo líquido daquele íon cessa.",
    explanation:
      "Cada íon tem um potencial de equilíbrio (Nernst). O potencial de membrana da célula é uma média ponderada pelas permeabilidades (Goldman), não o equilíbrio de um único íon.",
    prerequisites: ["ion_gradient", "membrane_potential"],
    originModule: "module_03",
    related: ["resting_potential"],
    commonErrors: ["Confundir equilíbrio de um íon com o potencial de repouso da célula."],
    applications: ["Prever se Na⁺ entra ou sai a um dado potencial."],
    evidenceLevel: "well_established",
    level: "molecular",
  },
  {
    id: "threshold",
    name: "Limiar",
    definition:
      "Faixa de potencial em que a abertura regenerativa de canais de Na⁺ dependentes de voltagem se torna auto-sustentada.",
    explanation:
      "O limiar não é uma linha mágica desenhada na membrana. É o ponto em que a corrente de Na⁺ entra em ciclo positivo e supera as correntes que puxam de volta ao repouso.",
    prerequisites: ["resting_potential", "sodium_channels"],
    originModule: "module_04",
    related: ["action_potential", "all_or_none"],
    commonErrors: ["Tratar limiar como um número idêntico em todos os neurônios e em todos os momentos."],
    applications: ["Explicar por que entradas sublimiares não disparam o axônio."],
    evidenceLevel: "well_established",
    level: "cellular",
  },
  {
    id: "sodium_channels",
    name: "Canais de sódio dependentes de voltagem",
    definition:
      "Proteínas de membrana que se abrem com despolarização e permitem influxo rápido de Na⁺, sustentando a fase ascendente do potencial de ação.",
    explanation:
      "Após abrir, inativam-se rapidamente. Essa inativação é parte do motivo pelo qual o potencial de ação é breve e pelo qual existe período refratário.",
    prerequisites: ["membrane"],
    originModule: "module_04",
    related: ["depolarization", "refractory_period"],
    commonErrors: ["Achar que Na⁺ entra porque 'quer equilibrar cargas' sem o papel da voltagem e da seletividade."],
    applications: ["Contrafactual: sem esses canais, não há potencial de ação clássico."],
    evidenceLevel: "well_established",
    level: "molecular",
  },
  {
    id: "depolarization",
    name: "Despolarização",
    definition:
      "Alteração do potencial de membrana em direção a valores menos negativos (ou positivos).",
    explanation:
      "Despolarizar não significa 'ativar uma emoção'. É um evento elétrico. Pode ser local e sublimiar ou fazer parte do potencial de ação.",
    prerequisites: ["membrane_potential"],
    originModule: "module_04",
    related: ["sodium_channels", "threshold"],
    commonErrors: ["Usar despolarização como sinônimo de excitação psicológica."],
    applications: ["Descrever a fase ascendente do potencial de ação."],
    evidenceLevel: "well_established",
    level: "cellular",
  },
  {
    id: "potassium_channels",
    name: "Canais de potássio dependentes de voltagem",
    definition:
      "Canais que, ao se abrirem com a despolarização, permitem efluxo de K⁺ e contribuem para a repolarização.",
    explanation:
      "A diversidade de canais de K⁺ molda a duração do potencial de ação e a frequência de disparo. Não há 'o' canal de potássio único.",
    prerequisites: ["membrane"],
    originModule: "module_04",
    related: ["repolarization", "hyperpolarization"],
    commonErrors: ["Reduzir toda a repolarização a um único tipo de canal."],
    applications: ["Explicar a fase descendente e a hiperpolarização pós-potencial."],
    evidenceLevel: "well_established",
    level: "molecular",
  },
  {
    id: "repolarization",
    name: "Repolarização",
    definition:
      "Retorno do potencial de membrana em direção ao valor de repouso após a despolarização.",
    explanation:
      "Resulta principalmente da inativação dos canais de Na⁺ e da abertura de canais de K⁺. Não é a bomba 'desligando o sinal'.",
    prerequisites: ["depolarization", "potassium_channels"],
    originModule: "module_04",
    related: ["hyperpolarization", "action_potential"],
    commonErrors: ["Atribuir a repolarização à bomba Na⁺/K⁺ como mecanismo imediato."],
    applications: ["Ordenar as fases do potencial de ação."],
    evidenceLevel: "well_established",
    level: "cellular",
  },
  {
    id: "hyperpolarization",
    name: "Hiperpolarização",
    definition:
      "Desvio do potencial para valores mais negativos do que o de repouso, tornando a célula temporariamente menos excitável.",
    explanation:
      "Pode ocorrer após o potencial de ação (pós-potencial) ou por entradas inibitórias. É um estado elétrico, não um 'desligamento' da célula.",
    prerequisites: ["repolarization"],
    originModule: "module_04",
    related: ["refractory_period", "inhibition"],
    commonErrors: ["Confundir hiperpolarização com morte celular ou silêncio permanente."],
    applications: ["Relacionar inibição sináptica a mudanças de potencial."],
    evidenceLevel: "well_established",
    level: "cellular",
  },
  {
    id: "refractory_period",
    name: "Período refratário",
    definition:
      "Intervalo após um potencial de ação em que um novo disparo é impossível ou mais difícil, em parte pela inativação de canais de Na⁺.",
    explanation:
      "O período refratário limita a frequência máxima de disparo e dá direção à propagação: a membrana recém-ativa não pode ser imediatamente reexcitada.",
    prerequisites: ["sodium_channels", "action_potential"],
    originModule: "module_04",
    related: ["propagation", "all_or_none"],
    commonErrors: ["Explicar a direcionalidade só pela 'vontade' do sinal de ir para frente."],
    applications: ["Explicar por que o potencial de ação não reverbera eternamente no mesmo ponto."],
    evidenceLevel: "well_established",
    level: "cellular",
  },
  {
    id: "all_or_none",
    name: "Tudo-ou-nada",
    definition:
      "Propriedade do potencial de ação clássico: uma vez no limiar, a amplitude do evento regenerativo não escala com a intensidade do estímulo que o disparou.",
    explanation:
      "Isso não significa que o neurônio só tem dois estados possíveis na vida. Entradas graduadas existem. O tudo-ou-nada refere-se ao evento regenerativo no axônio, não a toda a fisiologia celular.",
    prerequisites: ["threshold", "action_potential"],
    originModule: "module_04",
    related: ["integration"],
    commonErrors: ["Achar que neurônios não têm sinais graduados."],
    applications: ["Distinguir potencial pós-sináptico (graduado) de potencial de ação."],
    evidenceLevel: "well_established",
    level: "cellular",
  },
  {
    id: "action_potential",
    name: "Potencial de ação",
    definition:
      "Evento elétrico regenerativo, breve, em que a membrana despolariza rapidamente e depois repolariza, permitindo sinalização a longa distância.",
    explanation:
      "É um ciclo de canais dependentes de voltagem, não um 'choque' genérico. Permite que um sinal atravesse o axônio sem decair como um potencial passivo.",
    prerequisites: ["threshold", "sodium_channels", "potassium_channels"],
    originModule: "module_04",
    related: ["propagation", "synapse", "all_or_none"],
    commonErrors: [
      "Confundir potencial de ação com potencial de repouso.",
      "Tratar o potencial de ação como corrente contínua.",
    ],
    applications: ["Reconstruir por que um sinal chega ao terminal."],
    evidenceLevel: "well_established",
    level: "cellular",
  },
  {
    id: "propagation",
    name: "Propagação axônica",
    definition:
      "Reconstrução sucessiva do potencial de ação ao longo da membrana do axônio.",
    explanation:
      "O evento em um trecho despolariza o trecho vizinho até o limiar. Não é um elétron viajando pelo citoplasma como em um fio metálico.",
    prerequisites: ["action_potential", "axon"],
    originModule: "module_05",
    related: ["myelin", "saltatory_conduction"],
    commonErrors: ["Modelo de fio de cobre: corrente viajando intacta pelo interior."],
    applications: ["Explicar por que mielina e diâmetro alteram velocidade."],
    evidenceLevel: "well_established",
    level: "cellular",
  },
  {
    id: "myelin",
    name: "Mielina",
    definition:
      "Envoltório multilamelar formado por glia que aumenta a resistência transmembrana e reduz a capacitância em trechos do axônio.",
    explanation:
      "A mielina não 'acelera a eletricidade' de forma mágica. Ela muda propriedades de cabo, permitindo que a despolarização salte entre nódulos.",
    prerequisites: ["glia", "axon"],
    originModule: "module_05",
    related: ["nodes_of_ranvier", "saltatory_conduction"],
    commonErrors: ["Dizer que mielina é apenas um isolante de plástico, sem consequências para capacitância."],
    applications: ["Relacionar desmielinização a falhas de condução."],
    evidenceLevel: "well_established",
    level: "cellular",
  },
  {
    id: "nodes_of_ranvier",
    name: "Nódulos de Ranvier",
    definition:
      "Interrupções da mielina ricas em canais de Na⁺ dependentes de voltagem, onde o potencial de ação é regenerado.",
    explanation:
      "Sem nódulos, o modelo de condução saltatória não se sustenta. É ali que a membrana 'reconstroi' o sinal.",
    prerequisites: ["myelin", "sodium_channels"],
    originModule: "module_05",
    related: ["saltatory_conduction"],
    commonErrors: ["Imaginar o sinal saltando no vazio, sem regeneração nodal."],
    applications: ["Localizar onde a regeneração ocorre no axônio mielinizado."],
    evidenceLevel: "well_established",
    level: "cellular",
  },
  {
    id: "saltatory_conduction",
    name: "Condução saltatória",
    definition:
      "Modo de propagação em axônios mielinizados no qual o potencial de ação é regenerado nos nódulos, avançando de nódulo a nódulo.",
    explanation:
      "Saltatória descreve o padrão de regeneração, não um salto literal do íon pelo espaço extracelular entre nódulos distantes como se não houvesse corrente local.",
    prerequisites: ["myelin", "nodes_of_ranvier", "propagation"],
    originModule: "module_05",
    related: ["action_potential"],
    commonErrors: ["Literalizar o 'salto' e esquecer a eletrotônica entre nódulos."],
    applications: ["Comparar velocidade em fibras mielinizadas e amielínicas."],
    evidenceLevel: "well_established",
    level: "cellular",
  },
  {
    id: "synapse",
    name: "Sinapse",
    definition:
      "Zona de comunicação entre células, na maioria das vezes química, em que um sinal pré-sináptico influencia a célula seguinte.",
    explanation:
      "A sinapse química introduz um atraso, amplificação, polaridade e enorme capacidade de modulação. Não é um fio contínuo.",
    prerequisites: ["axon_terminal", "action_potential"],
    originModule: "module_06",
    related: ["calcium_channels", "neurotransmitter", "receptor"],
    commonErrors: ["Tratar a sinapse como contato elétrico obrigatório."],
    applications: ["Identificar a etapa afetada se Ca²⁺ não entrar."],
    evidenceLevel: "well_established",
    level: "cellular",
  },
  {
    id: "calcium_channels",
    name: "Canais de cálcio no terminal",
    definition:
      "Canais dependentes de voltagem no terminal pré-sináptico cuja abertura permite entrada de Ca²⁺, necessária à fusão vesicular.",
    explanation:
      "O Ca²⁺ é o acoplamento entre despolarização do terminal e liberação. Sem ele, o potencial de ação pode chegar e mesmo assim não haver neurotransmissor na fenda.",
    prerequisites: ["axon_terminal"],
    originModule: "module_06",
    related: ["vesicles", "neurotransmitter"],
    commonErrors: ["Achar que o Na⁺ do potencial de ação libera o transmissor diretamente."],
    applications: ["Contrafactual clássico da liberação sináptica."],
    evidenceLevel: "well_established",
    level: "molecular",
  },
  {
    id: "vesicles",
    name: "Vesículas sinápticas",
    definition:
      "Organelas que armazenam neurotransmissor e se fundem à membrana pré-sináptica de modo dependente de Ca²⁺.",
    explanation:
      "A quantização da liberação vem, em grande parte, dessas unidades. Reciclagem vesicular é parte da sustentabilidade da sinapse.",
    prerequisites: ["synapse"],
    originModule: "module_06",
    related: ["calcium_channels", "neurotransmitter"],
    commonErrors: ["Imaginar o transmissor atravessando a membrana por difusão livre do citoplasma."],
    applications: ["Explicar por que toxinas que impedem fusão silenciam a sinapse."],
    evidenceLevel: "well_established",
    level: "molecular",
  },
  {
    id: "neurotransmitter",
    name: "Neurotransmissor",
    definition:
      "Molécula liberada por uma célula que, ao interagir com receptores, altera o estado da célula-alvo.",
    explanation:
      "O neurotransmissor não 'é' uma função psicológica. Seu efeito depende do receptor, do circuito e do contexto. A mesma molécula pode excitar, inibir ou modular.",
    prerequisites: ["synapse"],
    originModule: "module_06",
    related: ["receptor", "dopamine"],
    commonErrors: [
      "Transformar neurotransmissores em personagens ('molécula da felicidade').",
    ],
    applications: ["Recusar explicações do tipo molécula = emoção."],
    evidenceLevel: "well_established",
    level: "molecular",
  },
  {
    id: "synaptic_cleft",
    name: "Fenda sináptica",
    definition: "Espaço entre as membranas pré e pós-sináptica por onde o neurotransmissor difunde.",
    explanation:
      "A geometria da fenda e os mecanismos de remoção determinam a duração e a precisão do sinal químico.",
    prerequisites: ["synapse"],
    originModule: "module_06",
    related: ["reuptake", "receptor"],
    commonErrors: ["Ignorar que o transmissor precisa ser removido para o sinal terminar."],
    applications: ["Relacionar recaptação à temporalidade do sinal."],
    evidenceLevel: "well_established",
    level: "cellular",
  },
  {
    id: "receptor",
    name: "Receptor",
    definition:
      "Proteína que reconhece um ligante e transduz essa ligação em mudança celular — iônica ou via segundos mensageiros.",
    explanation:
      "O receptor, não o transmissor sozinho, define o tipo de efeito. Por isso a mesma molécula pode ter papéis opostos em sinapses diferentes.",
    prerequisites: ["neurotransmitter"],
    originModule: "module_07",
    related: ["ionotropic", "metabotropic"],
    commonErrors: ["Atribuir o efeito ao nome do transmissor, ignorando o receptor."],
    applications: ["Perguntar 'qual receptor?' antes de inferir o efeito."],
    evidenceLevel: "well_established",
    level: "molecular",
  },
  {
    id: "ionotropic",
    name: "Receptor ionotrópico",
    definition:
      "Canal iônico gated por ligante: a ligação abre ou modula um poro e muda o potencial de forma relativamente rápida.",
    explanation:
      "Adequado a transmissão rápida. Não é 'simples demais': subunidades, dessensibilização e localização alteram o efeito.",
    prerequisites: ["receptor"],
    originModule: "module_07",
    related: ["excitation", "inhibition"],
    commonErrors: ["Achar que toda sinapse é lenta e metabólica."],
    applications: ["Distinguir latência de efeitos iônicos vs. metabólicos."],
    evidenceLevel: "well_established",
    level: "molecular",
  },
  {
    id: "metabotropic",
    name: "Receptor metabotrópico",
    definition:
      "Receptor acoplado a proteínas G (ou vias semelhantes) que inicia cascatas intracelulares, com efeitos frequentemente mais lentos e amplos.",
    explanation:
      "Pode alterar canais, transcrição, sensibilidades. É central à modulação — não um 'extra' opcional da fisiologia.",
    prerequisites: ["receptor"],
    originModule: "module_07",
    related: ["modulation"],
    commonErrors: ["Tratar metabotrópicos como meros detalhes avançados, irrelevantes ao comportamento."],
    applications: ["Explicar por que alguns efeitos de um transmissor duram segundos a minutos."],
    evidenceLevel: "well_established",
    level: "molecular",
  },
  {
    id: "excitation",
    name: "Excitação",
    definition:
      "Influência que aproxima o neurônio pós-sináptico do limiar de disparo, frequentemente via despolarização.",
    explanation:
      "Excitação é relativa ao estado da célula-alvo. Não é um sinônimo de 'ativar um comportamento'.",
    prerequisites: ["ionotropic", "membrane_potential"],
    originModule: "module_07",
    related: ["inhibition", "integration"],
    commonErrors: ["Mapear excitação celular diretamente a um ato observável."],
    applications: ["Ler um EPSP como contribuição, não como decisão."],
    evidenceLevel: "well_established",
    level: "cellular",
  },
  {
    id: "inhibition",
    name: "Inibição",
    definition:
      "Influência que reduz a probabilidade de disparo, por hiperpolarização, aumento de condutância ou outros mecanismos.",
    explanation:
      "Inibição não é ausência de atividade no sistema. É um componente ativo do cálculo neural — recortes, ganhos, ritmos, seleção.",
    prerequisites: ["receptor"],
    originModule: "module_07",
    related: ["excitation", "integration"],
    commonErrors: ["Tratar inibição como 'desligar o cérebro'."],
    applications: ["Explicar por que circuitos precisam de inibição para funcionar."],
    evidenceLevel: "well_established",
    level: "cellular",
  },
  {
    id: "modulation",
    name: "Modulação",
    definition:
      "Alteração do ganho, da plasticidade ou do estado de um circuito, frequentemente por sistemas de neurotransmissores de ação mais difusa.",
    explanation:
      "Modular não é o mesmo que transmitir um bit de informação pontual. É mudar as regras de como o circuito responde.",
    prerequisites: ["metabotropic"],
    originModule: "module_07",
    related: ["dopamine", "attention"],
    commonErrors: ["Confundir neuromodulação com um 'comando' único de comportamento."],
    applications: ["Situar dopamina e noradrenalina como moduladores, não como essências."],
    evidenceLevel: "strong_evidence",
    level: "circuit",
  },
  {
    id: "reuptake",
    name: "Recaptação",
    definition:
      "Transporte do neurotransmissor de volta à célula pré-sináptica ou à glia, encerrando ou moldando o sinal na fenda.",
    explanation:
      "A recaptação é um dos destinos do transmissor, ao lado de degradação enzimática e difusão. Fármacos que a bloqueiam mudam a temporalidade do sinal, não 'criam' o transmissor.",
    prerequisites: ["neurotransmitter", "synaptic_cleft"],
    originModule: "module_07",
    related: ["modulation"],
    commonErrors: ["Achar que bloquear recaptação equivale a 'aumentar a felicidade'."],
    applications: ["Explicar mecanismo de alguns antidepressivos sem reduzir a depressão a um transmissor."],
    evidenceLevel: "well_established",
    level: "molecular",
  },
  {
    id: "integration",
    name: "Integração neuronal",
    definition:
      "Soma espacial e temporal de influências sinápticas que determina se o neurônio dispara, com que frequência e em que padrão.",
    explanation:
      "O neurônio é um integrador, não um relé. A decisão de disparar é local e depende de geometria, história recente e modulação.",
    prerequisites: ["excitation", "inhibition", "threshold"],
    originModule: "module_08",
    related: ["circuit", "all_or_none"],
    commonErrors: ["Pensar que cada sinapse dispara o neurônio sozinha."],
    applications: ["Ligar o microscópico (sinapse) ao mesoscópico (circuito)."],
    evidenceLevel: "well_established",
    level: "cellular",
  },
  {
    id: "circuit",
    name: "Circuito neural",
    definition:
      "Conjunto de neurônios interconectados cuja dinâmica conjunta, e não uma célula isolada, realiza uma operação.",
    explanation:
      "Funções não moram em neurônios avulsos. Emergem de padrões de conexão, inibição, ritmos e plasticidade.",
    prerequisites: ["integration"],
    originModule: "module_08",
    related: ["distributed_systems", "neuron"],
    commonErrors: ["Atribuir uma função complexa a um único neurônio 'daquela função'."],
    applications: ["Passar do neurônio ao sistema sem saltar etapas."],
    evidenceLevel: "well_established",
    level: "circuit",
  },
  {
    id: "distributed_systems",
    name: "Sistemas distribuídos",
    definition:
      "Organização em que uma função depende de múltiplas regiões e circuitos interagindo, não de um centro único.",
    explanation:
      "Localizar uma lesão que prejudica uma função não prova que a função 'mora' só ali. Participação não é suficiência nem exclusividade.",
    prerequisites: ["circuit"],
    originModule: "module_09",
    related: ["emotion_as_process", "levels_of_analysis"],
    commonErrors: ["Mapa frenológico moderno: uma área = uma função."],
    applications: ["Ler neuroimagem com cautela causal."],
    evidenceLevel: "well_established",
    level: "system",
  },
  {
    id: "emotion_as_process",
    name: "Emoção como processo",
    definition:
      "Conjunto de avaliações, alterações corporais, tendências de ação, sentimentos e aprendizagens — distribuído, não uma 'área da emoção'.",
    explanation:
      "Emoções não são um módulo cerebral que se liga. Envolvem interocepção, avaliação, memória, contexto social e regulação. Reduzi-las a uma estrutura é um erro de escala.",
    prerequisites: ["distributed_systems", "levels_of_analysis"],
    originModule: "module_10",
    related: ["amygdala", "hypothalamus", "memory_emotion"],
    commonErrors: ["'A amígdala é o centro do medo'."],
    applications: ["Analisar um episódio emocional em vários níveis."],
    evidenceLevel: "supported_model",
    level: "system",
  },
  {
    id: "amygdala",
    name: "Amígdala",
    definition:
      "Conjunto de núcleos no lobo temporal medial que participa de circuitos de aprendizagem e processamento de estímulos biologicamente relevantes.",
    explanation:
      "A amígdala não 'é o medo'. Em certas situações, sua atividade contribui para respostas associadas a ameaça, mas também a saliência, aprendizagem e outros processos. Lesão e estimulação mostram participação, não monopolização.",
    prerequisites: ["emotion_as_process", "circuit"],
    originModule: "module_11",
    related: ["memory_emotion", "threat_safety"],
    commonErrors: [
      "Localização funcional absoluta: amígdala = medo.",
      "Tratar ativação em fMRI como prova de uma emoção específica.",
    ],
    applications: ["Corrigir o neuromito da 'área do medo'."],
    evidenceLevel: "strong_evidence",
    level: "system",
    functions: [
      "Aprendizagem associativa de relevância",
      "Modulação de memória",
      "Coordenação com respostas autonômicas via conexões a hipotálamo e tronco",
    ],
    circuits: ["circuitos de ameaça", "circuitos de saliência", "modulação da consolidação"],
    observed:
      "Lesões e registros mostram contribuição a certos aprendizados de ameaça e à atribuição de relevância; núcleos distintos têm papéis distintos.",
    interpretation:
      "A estrutura participa de circuitos de relevância e aprendizagem — em algumas situações, de respostas associadas a ameaça.",
    limitation:
      "Participação não implica que o medo como experiência 'seja' a amígdala, nem que um sinal de fMRI identifique o conteúdo subjetivo.",
  },
  {
    id: "hypothalamus",
    name: "Hipotálamo",
    definition:
      "Conjunto de núcleos que coordena funções homeostáticas e endócrinas, acoplando estado interno a respostas autonômicas e hormonais.",
    explanation:
      "O hipotálamo não é 'o centro da emoção', mas é crucial para traduzir necessidades e estados internos em padrões fisiológicos (temperatura, fome, defesa, reprodução, eixo HPA).",
    prerequisites: ["distributed_systems"],
    originModule: "module_12",
    related: ["hpa_axis", "allostasis"],
    commonErrors: ["Tratar o hipotálamo como um botão único de instintos."],
    applications: ["Ligar comportamento a regulação corporal."],
    evidenceLevel: "well_established",
    level: "system",
  },
  {
    id: "hpa_axis",
    name: "Eixo HPA",
    definition:
      "Cascata hipotálamo–hipófise–adrenal que, entre outras ações, regula a liberação de glicocorticoides como o cortisol.",
    explanation:
      "O eixo HPA é um sistema de coordenação temporal lenta, comparado à sinalização autonômica. Não é 'o estresse'; é um dos efetores da resposta a desafios. Feedback negativo e contexto modulam sua ativação.",
    prerequisites: ["hypothalamus"],
    originModule: "module_13",
    related: ["cortisol", "stress_response"],
    commonErrors: ["Igualar qualquer estresse a 'eixo HPA ligado'."],
    applications: ["Distinguir resposta aguda de adaptações crônicas."],
    evidenceLevel: "well_established",
    level: "system",
  },
  {
    id: "cortisol",
    name: "Cortisol",
    definition:
      "Glicocorticoide que participa da mobilização energética, da regulação imune e de múltiplos efeitos no sistema nervoso — não 'o hormônio do estresse' como personagem.",
    explanation:
      "O cortisol tem ritmo circadiano, ações permissivas e efeitos dependentes de dose e tempo. Reduzi-lo a vilão do estresse apaga sua função fisiológica cotidiana.",
    prerequisites: ["hpa_axis"],
    originModule: "module_13",
    related: ["stress_response"],
    commonErrors: ["'Cortisol é o hormônio do estresse' como modelo final."],
    applications: ["Ler um achado de cortisol sem concluir causalidade emocional."],
    evidenceLevel: "well_established",
    level: "molecular",
    observed:
      "Há ritmo circadiano, ações metabólicas e imunológicas, e elevação em muitos desafios; o eixo HPA é uma cascata mensurável.",
    interpretation:
      "Glicocorticoide com ações amplas que também participa de respostas a desafios.",
    limitation:
      "Um valor pontual não é biografia, caráter, nem diagnóstico. Cortisol não 'é' o estresse.",
  },
  {
    id: "stress_response",
    name: "Resposta ao estresse",
    definition:
      "Conjunto de ajustes autonômicos, endócrinos, imunológicos e comportamentais diante de um desafio real ou interpretado.",
    explanation:
      "Não existe um único 'modo estresse'. Há múltiplos eixos (simpático, HPA, comportamental) com temporalidades diferentes. Estresse crônico não é apenas 'agudo repetido'.",
    prerequisites: ["hpa_axis", "hypothalamus"],
    originModule: "module_13",
    related: ["allostasis", "threat_safety"],
    commonErrors: ["Modelo único: estresse = cortisol = dano."],
    applications: ["Separar o que é observado (fisiologia) do que é inferido (sofrimento)."],
    evidenceLevel: "strong_evidence",
    level: "system",
  },
  {
    id: "allostasis",
    name: "Alostase",
    definition:
      "Modelo em que o organismo antecipa e ajusta parâmetros internos para enfrentar demandas, em vez de apenas restabelecer um set-point fixo.",
    explanation:
      "É um modelo sustentado, não um órgão. Ajuda a pensar custo cumulativo (carga alostática) sem transformar todo desvio em patologia automática.",
    prerequisites: ["stress_response"],
    originModule: "module_13",
    related: ["hypothalamus"],
    commonErrors: ["Usar alostase como sinônimo vago de 'estresse ruim'."],
    applications: ["Discutir adaptação versus desgaste sem moralizar o hormônio."],
    evidenceLevel: "supported_model",
    level: "system",
  },
  {
    id: "dopamine",
    name: "Dopamina",
    definition:
      "Neuromodulador que participa de múltiplos circuitos (movimento, motivação, aprendizagem, esforço, predição), com efeitos dependentes de receptor, via e contexto.",
    explanation:
      "A dopamina não é a molécula do prazer. Uma formulação mais precisa envolve erro de predição de recompensa, atribuição de saliência, invigoração e aprendizagem — em circuitos distintos (nigroestriatal, mesolímbico, mesocortical).",
    prerequisites: ["neurotransmitter", "modulation"],
    originModule: "module_14",
    related: ["reward_prediction_error", "habit", "decision_making"],
    commonErrors: [
      "Dopamina = prazer.",
      "Dopamina só participa da motivação.",
    ],
    applications: ["Corrigir o neuromito mais comum da divulgação científica."],
    evidenceLevel: "strong_evidence",
    level: "circuit",
    functions: ["modulação de aprendizagem", "invigoração", "controle motor"],
    circuits: ["mesolímbico", "nigroestriatal", "mesocortical"],
    observed:
      "Padrões de disparo em neurônios dopaminérgicos acompanham, em vários paradigmas, a diferença entre recompensa obtida e esperada; vias distintas sustentam movimento e aprendizagem.",
    interpretation:
      "Um modelo útil é o de erro de predição e de modulador de vigor/valor — não uma essência psicológica.",
    limitation:
      "Isso não identifica a dopamina com prazer, vício cotidiano ou um único circuito da motivação.",
  },
  {
    id: "reward_prediction_error",
    name: "Erro de predição de recompensa",
    definition:
      "Sinal (observado em padrões de disparo de neurônios dopaminérgicos) proporcional à diferença entre recompensa obtida e recompensa esperada.",
    explanation:
      "É um modelo poderoso e bem evidenciado em certos paradigmas, não uma teoria de toda a vida mental. Ausência de recompensa esperada pode diminuir o sinal; recompensa inesperada pode aumentá-lo.",
    prerequisites: ["dopamine"],
    originModule: "module_14",
    related: ["learning", "decision_making"],
    commonErrors: ["Tratar cada pico de dopamina como prova de prazer sentido."],
    applications: ["Explicar aprendizagem por surpresa, não por 'gosto' isolado."],
    evidenceLevel: "strong_evidence",
    level: "circuit",
  },
  {
    id: "ventral_striatum",
    name: "Estriado ventral",
    definition:
      "Território dos gânglios da base (incluindo núcleo accumbens) que participa de circuitos de valorização, esforço e aprendizagem de preditores.",
    explanation:
      "Não é o 'centro do prazer'. É um nó em circuitos cortico-estriatais cuja contribuição depende da tarefa e das aferências (incluindo dopaminérgicas).",
    prerequisites: ["dopamine", "circuit"],
    originModule: "module_14",
    related: ["habit", "decision_making"],
    commonErrors: ["Núcleo accumbens = prazer."],
    applications: ["Situar recompensa em circuito, não em uma estrutura-rótulo."],
    evidenceLevel: "strong_evidence",
    level: "system",
  },
  {
    id: "memory_emotion",
    name: "Modulação emocional da memória",
    definition:
      "Influência de estados afetivos e de arousal sobre encoding e consolidação, envolvendo, entre outros, amígdala e glicocorticoides — sem garantir veracidade da lembrança.",
    explanation:
      "Eventos emocionalmente salientes tendem a ser melhor lembrados em alguns aspectos, mas a memória continua reconstrutiva e falível. Emoção não 'grava um vídeo'.",
    prerequisites: ["amygdala"],
    originModule: "module_15",
    related: ["long_term_memory", "cortisol"],
    commonErrors: ["Memória traumática como registro fotográfico infalível."],
    applications: ["Separar vivacidade de acurácia."],
    evidenceLevel: "strong_evidence",
    level: "cognitive",
  },
  {
    id: "attention",
    name: "Atenção",
    definition:
      "Conjunto de processos que selecionam informação, sustentam foco e distribuem recursos limitados — não um holofote único no cérebro.",
    explanation:
      "Há múltiplos sistemas atencionais (alerta, orientação, controle executivo). Atenção interage com predição, saliência e metas. Não é um músculo simples nem um tanque de combustível.",
    prerequisites: ["levels_of_analysis"],
    originModule: "module_17",
    related: ["working_memory", "prediction"],
    commonErrors: ["Atenção como recurso único e localizado em um lobo."],
    applications: ["Analisar uma falha atencional sem diagnosticar o usuário."],
    evidenceLevel: "strong_evidence",
    level: "cognitive",
  },
  {
    id: "working_memory",
    name: "Memória de trabalho",
    definition:
      "Capacidade limitada de manter e manipular informação por curto prazo para guiar a ação presente.",
    explanation:
      "Não é um 'HD temporário' isolado. Interage com atenção e com representações de longo prazo. Interferência e carga alteram o desempenho.",
    prerequisites: ["attention"],
    originModule: "module_18",
    related: ["encoding", "decision_making"],
    commonErrors: ["Igualar memória de trabalho a QI ou a um número mágico de 7 itens universais."],
    applications: ["Explicar por que instruções longas falham em contextos de carga."],
    evidenceLevel: "strong_evidence",
    level: "cognitive",
  },
  {
    id: "encoding",
    name: "Codificação",
    definition: "Conjunto de processos pelos quais um episódio ou conteúdo se torna uma traço potencialmente recuperável.",
    explanation:
      "Codificar não é copiar o mundo. É construir uma representação influenciada por atenção, conhecimento prévio e estado.",
    prerequisites: ["attention"],
    originModule: "module_18",
    related: ["retrieval", "long_term_memory"],
    commonErrors: ["Modelo de arquivo: o evento entra intacto."],
    applications: ["Melhorar aprendizagem via elaboração, não via reler passivamente."],
    evidenceLevel: "well_established",
    level: "cognitive",
  },
  {
    id: "retrieval",
    name: "Recuperação",
    definition:
      "Reconstrução de uma representação a partir de pistas, estado e conhecimento atual — não a leitura de um arquivo intacto.",
    explanation:
      "A recuperação é um evento novo. Pode fortalecer, distorcer ou falhar. Por isso este aplicativo usa recuperação ativa como ferramenta de aprendizagem.",
    prerequisites: ["encoding"],
    originModule: "module_18",
    related: ["long_term_memory", "working_memory"],
    commonErrors: ["Lembrar = reproduzir fielmente o original."],
    applications: ["Usar testes como aprendizagem, não só como medição."],
    evidenceLevel: "well_established",
    level: "cognitive",
  },
  {
    id: "long_term_memory",
    name: "Memória de longo prazo",
    definition:
      "Família de sistemas (episódica, semântica, procedimental, entre outras) com durações e dependências neurais distintas.",
    explanation:
      "Não há um único 'armazém'. Sistemas diferentes suportam 'saber que', 'lembrar quando' e 'saber como', com dissociações clínicas importantes.",
    prerequisites: ["encoding"],
    originModule: "module_18",
    related: ["habit", "memory_emotion"],
    commonErrors: ["Um único tipo de memória, um único lugar no cérebro."],
    applications: ["Distinguir amnésia episódica de preservação procedimental."],
    evidenceLevel: "well_established",
    level: "cognitive",
  },
  {
    id: "plasticity",
    name: "Plasticidade",
    definition:
      "Capacidade do sistema nervoso de alterar força sináptica, excitabilidade e, em certos casos, estrutura, em função da experiência e do estado.",
    explanation:
      "Plasticidade não é ilimitada nem sempre benéfica. Há janelas, restrições, custos. 'O cérebro muda' não autoriza qualquer intervenção milagrosa.",
    prerequisites: ["synapse", "learning"],
    originModule: "module_19",
    related: ["learning", "habit"],
    commonErrors: ["Neuroplasticidade como superpoder irrestrito."],
    applications: ["Separar mudança biológica real de marketing de autoajuda."],
    evidenceLevel: "strong_evidence",
    level: "cellular",
    observed:
      "Força sináptica, excitabilidade e, em certos casos, estrutura mudam com experiência, com restrições de tempo, dose e contexto.",
    interpretation:
      "Capacidade real e limitada de mudança — inclusive desadaptativa.",
    limitation:
      "'O cérebro muda' não autoriza qualquer método, prazo milagroso ou ausência de teto biológico e social.",
  },
  {
    id: "learning",
    name: "Aprendizagem",
    definition:
      "Mudança relativamente duradoura em um organismo, decorrente da experiência, observável em desempenho, tendência de ação ou representação.",
    explanation:
      "Aprendizagem não se reduz a um único mecanismo (LTP, dopamina, ensaio). Há múltiplas formas: associativa, estatística, procedimental, social.",
    prerequisites: ["plasticity"],
    originModule: "module_19",
    related: ["reward_prediction_error", "habit"],
    commonErrors: ["Aprendizagem = memorizar texto."],
    applications: ["Desenhar prática de recuperação e contraste."],
    evidenceLevel: "well_established",
    level: "cognitive",
  },
  {
    id: "decision_making",
    name: "Tomada de decisão",
    definition:
      "Processos que selecionam uma ação entre alternativas, integrando valor, incerteza, custo, tempo e normas — em mais de um sistema.",
    explanation:
      "Não há um único 'decisor' racional no córtex frontal. Modelos de múltiplos sistemas (habitual, deliberativo, pavloviano) são mais adequados do que a lenda do cérebro racional versus emocional.",
    prerequisites: ["working_memory", "dopamine"],
    originModule: "module_20",
    related: ["dual_process", "habit"],
    commonErrors: ["Hemisfério esquerdo decide, direito sente."],
    applications: ["Analisar uma escolha ruim sem moralizar o decisor."],
    evidenceLevel: "strong_evidence",
    level: "cognitive",
  },
  {
    id: "dual_process",
    name: "Processamento rápido e lento",
    definition:
      "Família de modelos que distingue operações mais automáticas e rápidas de operações mais controladas e lentas — como heurística didática, não como anatomia literal.",
    explanation:
      "É um modelo. Não implica dois cérebros, nem que o rápido é 'reptiliano' e o lento é 'humano'. Ambos podem errar e ambos podem ser adaptativos.",
    prerequisites: ["decision_making"],
    originModule: "module_21",
    related: ["cognitive_bias", "habit"],
    commonErrors: ["Cérebro triuno: réptil, mamífero, racional."],
    applications: ["Usar a distinção sem ontologizá-la."],
    evidenceLevel: "supported_model",
    level: "cognitive",
  },
  {
    id: "habit",
    name: "Hábito",
    definition:
      "Controle de ação relativamente insensível à meta atual, adquirido por repetição em contextos estáveis, com forte envolvimento de circuitos cortico-estriatais.",
    explanation:
      "Hábito não é preguiça moral. É uma solução computacional para regularidade. Pode ser útil ou problemático conforme o ambiente muda.",
    prerequisites: ["learning", "ventral_striatum"],
    originModule: "module_22",
    related: ["decision_making", "dopamine"],
    commonErrors: ["Hábito como falha de caráter; ou como 'vício de dopamina'."],
    applications: ["Mudar contexto e pistas, não apenas 'força de vontade' como substância."],
    evidenceLevel: "strong_evidence",
    level: "behavioral",
  },
  {
    id: "cognitive_bias",
    name: "Viés cognitivo",
    definition:
      "Desvio sistemático em relação a um modelo normativo de julgamento, muitas vezes derivado de heurísticas úteis em outros contextos.",
    explanation:
      "Vieses não provam estupidez. São padrões. Nem todo erro é um viés nomeado, e nomear um viés não explica o mecanismo.",
    prerequisites: ["decision_making", "dual_process"],
    originModule: "module_23",
    related: ["prediction"],
    commonErrors: ["Colecionar nomes de vieses como se fossem diagnóstico."],
    applications: ["Perguntar qual processo produziu o padrão, não só o rótulo."],
    evidenceLevel: "strong_evidence",
    level: "cognitive",
  },
  {
    id: "prediction",
    name: "Predição",
    definition:
      "Geração de expectativas sobre entradas futuras; erros de predição atualizam modelos internos em vários níveis.",
    explanation:
      "O sistema nervoso não apenas reage: antecipa. Isso atravessa percepção, ação, interocepção e aprendizagem. É um princípio organizador, não uma região.",
    prerequisites: ["learning", "attention"],
    originModule: "module_24",
    related: ["reward_prediction_error"],
    commonErrors: ["Reduzir toda a mente a um único algoritmo preditivo como dogma."],
    applications: ["Ler surpresa como informação, não só como emoção."],
    evidenceLevel: "supported_model",
    level: "cognitive",
  },
  {
    id: "listening",
    name: "Escuta",
    definition:
      "Prática de colher o fenômeno, o contexto e a interpretação da outra pessoa antes de impor um modelo ou uma intervenção.",
    explanation:
      "Escutar não é técnica de venda. No uso responsável de conhecimento neurocientífico, a escuta reduz o risco de encaixar a pessoa em um neuromito ou em um diagnóstico improvisado.",
    prerequisites: ["levels_of_analysis"],
    originModule: "module_25",
    related: ["strategic_questions", "intervention"],
    commonErrors: ["Ouvir só para aplicar o rótulo que já se tinha."],
    applications: ["Começar por 'o que está acontecendo, na visão desta pessoa?'."],
    evidenceLevel: "supported_model",
    level: "social",
  },
  {
    id: "threat_safety",
    name: "Ameaça e segurança",
    definition:
      "Avaliações de risco e de segurança social que alteram fisiologia, atenção e abertura à interação — sem que isso autorize diagnóstico.",
    explanation:
      "Sinais de ameaça social (status, exclusão, imprevisibilidade) podem recrutar os mesmos eixos de defesa estudados na etapa 2, mas o conteúdo é relacional e cultural.",
    prerequisites: ["stress_response", "emotion_as_process"],
    originModule: "module_26",
    related: ["scarf", "amygdala"],
    commonErrors: ["Ler qualquer desconforto social como 'amígdala disparada'."],
    applications: ["Desenhar conversas que reduzam ameaça desnecessária."],
    evidenceLevel: "supported_model",
    level: "social",
  },
  {
    id: "scarf",
    name: "Modelo SCARF",
    definition:
      "Heurística prática (Status, Certainty, Autonomy, Relatedness, Fairness) para pensar ameaças e recompensas sociais em interações — não um mapa literal do cérebro.",
    explanation:
      "SCARF é uma ferramenta de comunicação. Cada dimensão pode ligar-se a literaturas distintas. Não deve ser ontologizado como 'os cinco circuitos sociais'.",
    prerequisites: ["threat_safety"],
    originModule: "module_27",
    related: ["listening", "intervention"],
    commonErrors: ["Usar SCARF como se fosse anatomia."],
    applications: ["Preparar um feedback difícil cobrindo as cinco dimensões."],
    evidenceLevel: "hypothesis",
    level: "social",
    observed:
      "Dimensões sociais como status, previsibilidade, autonomia, vínculo e justiça percebida alteram o curso de muitas interações — isso é descrição de campo, não um exame de imagem.",
    interpretation:
      "Checklist útil para desenhar conversas com menos ameaça desnecessária.",
    limitation:
      "Não é mapa dos cinco circuitos sociais. Não substitui escuta, direito nem cuidado clínico.",
  },
  {
    id: "strategic_questions",
    name: "Perguntas estratégicas",
    definition:
      "Perguntas que revelam mecanismo, contexto e hipótese, em vez de forçar uma resposta única ou um rótulo.",
    explanation:
      "No lugar de 'você está ansioso?', perguntas do tipo 'o que acontece imediatamente antes?' e 'o que isso permite concluir?' treinam o mesmo rigor da trilha.",
    prerequisites: ["listening"],
    originModule: "module_28",
    related: ["evidence_vs_hypothesis"],
    commonErrors: ["Perguntas que já contém o diagnóstico."],
    applications: ["Entrevista de caso sem fechar causalidade cedo demais."],
    evidenceLevel: "supported_model",
    level: "social",
  },
  {
    id: "regulation",
    name: "Regulação",
    definition:
      "Processos pelos quais um organismo altera a intensidade, a duração ou a expressão de um estado — incluindo estratégias cognitivas, relacionais e corporais.",
    explanation:
      "Regulação não é supressão heroica. Pode ser externa (co-regulação), atencional, reavaliativa. Comunicação pode ajudar ou piorar a regulação.",
    prerequisites: ["emotion_as_process", "attention"],
    originModule: "module_29",
    related: ["threat_safety", "intervention"],
    commonErrors: ["'Controle-se' como se regulação fosse um interruptor."],
    applications: ["Escolher o momento de uma conversa difícil."],
    evidenceLevel: "strong_evidence",
    level: "cognitive",
  },
  {
    id: "intervention",
    name: "Intervenção responsável",
    definition:
      "Ação testável sobre um contexto, uma comunicação ou um hábito, formulada como hipótese, com critério de avaliação e limites éticos.",
    explanation:
      "Intervir não é diagnosticar. É mudar uma variável, observar, revisar. Conhecimento de mecanismos não autoriza tratamento clínico.",
    prerequisites: ["listening", "evidence_vs_hypothesis"],
    originModule: "module_30",
    related: ["limits_of_application", "strategic_questions"],
    commonErrors: ["Se a pessoa faz X, tem o transtorno Y."],
    applications: ["Transformar um insight em um teste pequeno e reversível."],
    evidenceLevel: "supported_model",
    level: "behavioral",
  },
  {
    id: "limits_of_application",
    name: "Limites da aplicação",
    definition:
      "Reconhecimento do que o conhecimento neurocientífico desta trilha não autoriza: diagnóstico, prescrição, certeza sobre a mente alheia.",
    explanation:
      "A trilha forma raciocínio, não licença clínica. Uma boa resposta frequentemente é: há evidências de X, mas não se pode concluir Y.",
    prerequisites: ["evidence_vs_hypothesis"],
    originModule: "module_31",
    related: ["intervention", "levels_of_analysis"],
    commonErrors: ["Usar um módulo para explicar a vida inteira de alguém."],
    applications: ["Encerrar um caso com limitações explícitas."],
    evidenceLevel: "well_established",
    level: "social",
  },
  {
    id: "evidence_vs_hypothesis",
    name: "Evidência versus hipótese",
    definition:
      "Distinção entre o que foi observado, o que se interpreta, e o que ainda não se pode concluir.",
    explanation:
      "Ciência não é sempre achar a resposta única. Incerteza bem formulada é habilidade, não fraqueza.",
    prerequisites: ["levels_of_analysis"],
    originModule: "module_01",
    related: ["limits_of_application", "cognitive_bias"],
    commonErrors: ["Confundir uma narrativa fluida com evidência."],
    applications: ["Rubrica do projeto final."],
    evidenceLevel: "well_established",
    level: "cognitive",
  },
];

export const CONCEPT_BY_ID = Object.fromEntries(CONCEPTS.map((c) => [c.id, c]));
