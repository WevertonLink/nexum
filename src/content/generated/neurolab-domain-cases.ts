/* AUTO-GENERATED from neurolab-v2/src/04b-domain-mode.js DOMAIN_CASES. Do not edit by hand. Regenerate: npm run migrate:nl */
import type { DomainCase } from "../domain-case.ts";

export const NL_DOMAIN_CASES: DomainCase[] = [
  {
    "id": "disparo-a-lembranca",
    "title": "Do disparo à lembrança que dura",
    "modules": [
      "module_02",
      "module_19",
      "module_18"
    ],
    "scenario": "Depois de uma tarde de estudo intenso, alguém lembra bem do conteúdo no dia seguinte; semanas depois a lembrança continua lá, mesmo sem o hipocampo ser tão necessário para acessá-la.",
    "question": "Qual modelo liga o que acontece na sinapse ao que torna a memória durável e cada vez menos dependente do hipocampo?",
    "options": [
      "Atividade coordenada fortalece sinapses (LTP) e forma um traço inicial ligado ao hipocampo; com tempo e sono, a consolidação sistêmica redistribui a memória para redes corticais.",
      "A memória nasce pronta e permanente já na primeira exposição, sem qualquer mudança sináptica, e o hipocampo apenas copia esse traço intacto para o córtex sem alterá-lo em nada.",
      "O fortalecimento da sinapse e a consolidação são o mesmo evento no mesmo instante da experiência, e por isso nenhuma memória chega a depender do hipocampo em momento algum.",
      "A durabilidade vem só da repetição consciente nos dias seguintes; sem repetir de propósito, nenhuma sinapse muda e nenhuma memória se estabiliza em redes fora do hipocampo."
    ],
    "correct": 0,
    "optionFeedback": [
      "Liga os dois andares: a mudança sináptica forma o traço e a consolidação sistêmica o redistribui ao córtex ao longo do tempo.",
      "Trata a memória como cópia pronta e ignora que ela nasce de mudança sináptica e é remodelada na consolidação.",
      "Funde sinapse e sistema num só instante e apaga o papel inicial do hipocampo, que o caso descreve.",
      "Reduz a durabilidade a repetir de propósito e ignora a consolidação que ocorre com o tempo e o sono."
    ],
    "explanation": "O caso atravessa dois andares. No de baixo, atividade coordenada entre neurônios fortalece sinapses — a potenciação de longo prazo — e monta o traço inicial, que depende do hipocampo para ser acessado. No de cima, ao longo de dias e com a ajuda do sono, a consolidação sistêmica reorganiza essa memória em redes corticais, e o hipocampo vai deixando de ser indispensável. Uma coisa não substitui a outra: a mudança sináptica cria, a consolidação sistêmica estabiliza e realoca.",
    "chain": [
      "atividade coordenada fortalece sinapses",
      "forma-se um traço inicial dependente do hipocampo",
      "sono e tempo movem a consolidação sistêmica",
      "a memória se redistribui para redes corticais",
      "o acesso deixa de depender tanto do hipocampo"
    ],
    "extend": {
      "q": "E se o hipocampo fosse lesado logo após o aprendizado?",
      "a": "As memórias muito recentes, ainda dependentes dele, seriam as mais prejudicadas, enquanto as já consolidadas em redes corticais tenderiam a sobreviver. O contraste mostra que o papel do hipocampo é maior no início e diminui com a consolidação."
    }
  },
  {
    "id": "sentia-pronto",
    "title": "O aluno que se sentia pronto",
    "modules": [
      "module_21",
      "module_22",
      "module_24"
    ],
    "scenario": "Um estudante relê a matéria até tudo parecer óbvio, sente-se pronto na véspera e, na prova, trava em questões que jurava dominar.",
    "question": "Qual modelo explica melhor por que a sensação de estar pronto não se converteu em desempenho?",
    "options": [
      "A matéria foi de fato aprendida e o único problema foi a ansiedade na prova; sem o nervosismo, o desempenho teria correspondido exatamente à alta confiança sentida na véspera.",
      "A releitura elevou a fluência, que virou um julgamento de aprendizado alto sem medir a retenção; faltou recuperar sem apoio, e a confiança se apoiou num sinal que engana.",
      "A confiança da véspera prova que o conteúdo estava retido; se o aluno travou, foi porque a prova cobrava algo que simplesmente não constava do material que ele releu.",
      "Reler é a forma mais eficiente de estudar, e o travamento indica só que faltou reler mais vezes; com o dobro de releituras, a fluência teria garantido o acerto na hora."
    ],
    "correct": 1,
    "optionFeedback": [
      "Joga tudo na ansiedade e ignora que a confiança se formou a partir da fluência, não da retenção medida.",
      "Nomeia o mecanismo: fluência vira julgamento de aprendizado, e sem recuperar sem apoio a confiança fica sem lastro.",
      "Toma a confiança como prova de retenção, que é justamente a ilusão que o caso descreve.",
      "Confunde reler com aprender e propõe mais do mesmo, sem a recuperação que modifica o traço."
    ],
    "explanation": "Três peças se encaixam. Reler deixa a matéria fluente, fácil de reconhecer — e o cérebro lê essa fluência como um julgamento de que aprendeu. Mas fluência mede a facilidade do momento, não o que ficará retido, e o aluno nunca chegou a recuperar o conteúdo sem o texto à frente, que é o que a prova cobra. A confiança da véspera era real como sensação e falsa como previsão: apoiava-se num sinal que engana. Faltou o esforço de recuperar, não mais releitura.",
    "chain": [
      "reler eleva a fluência da matéria",
      "a fluência vira julgamento de aprendizado alto",
      "falta recuperar o conteúdo sem apoio",
      "a confiança se descola da retenção real",
      "o desempenho na prova fica abaixo da confiança"
    ],
    "extend": {
      "q": "O que teria mudado se ele testasse a si mesmo sem o texto na véspera?",
      "a": "O próprio ato de recuperar teria fortalecido o traço e, de quebra, revelado o que ainda não sabia — corrigindo a confiança para um valor mais honesto. Testar-se é ao mesmo tempo estudo e medida."
    }
  },
  {
    "id": "noite-que-grava",
    "title": "A noite que grava",
    "modules": [
      "module_23",
      "module_15",
      "module_18"
    ],
    "scenario": "Depois de aprender algo novo, a pessoa dorme bem numa noite e, na outra, tem o sono profundo repetidamente interrompido. A retenção do que aprendeu difere entre as duas manhãs.",
    "question": "Qual modelo liga o que acontece durante o sono à consolidação do que foi aprendido?",
    "options": [
      "O sono é um período de inatividade em que nada acontece com a memória; a diferença entre as manhãs vem apenas de a pessoa estar mais ou menos descansada para fazer o teste.",
      "A consolidação ocorre inteiramente na vigília e o sono só serve para evitar novas informações; interromper o sono profundo não afeta em nada o que já havia sido aprendido antes.",
      "No sono profundo, ondas lentas, fusos e ripples do hipocampo se sincronizam e reativam o que foi aprendido, favorecendo a consolidação; cortar esse sono reduz essa reativação.",
      "Qualquer estágio do sono serve igualmente e só o total de horas importa; a estrutura do sono e os ritmos específicos não têm papel nenhum na consolidação da memória nova."
    ],
    "correct": 2,
    "optionFeedback": [
      "Trata o sono como inatividade e ignora a reativação coordenada que ocorre nele, no centro do caso.",
      "Confina a consolidação à vigília e desconsidera o papel do sono profundo que o caso manipula.",
      "Integra ritmos e sistemas: ondas lentas, fusos e ripples sincronizam a reativação que consolida.",
      "Reduz tudo a horas de sono e apaga a estrutura e os ritmos que fazem a consolidação acontecer."
    ],
    "explanation": "Dormir não é pausa para a memória. No sono profundo, ondas lentas corticais, fusos gerados pelo tálamo e ripples do hipocampo se encaixam no tempo, e nessas janelas as sequências do que foi aprendido são reativadas num diálogo entre hipocampo e córtex — o passo que estabiliza o traço. Interromper repetidamente o sono profundo desfaz essa sincronia e reduz a reativação, então menos se consolida. Por isso a mesma quantidade de estudo rende retenção diferente conforme a estrutura da noite.",
    "chain": [
      "o aprendizado deixa um traço recente",
      "no sono profundo ondas lentas, fusos e ripples se sincronizam",
      "as sequências aprendidas são reativadas",
      "hipocampo e córtex consolidam o traço",
      "interromper o sono profundo reduz a consolidação"
    ],
    "extend": {
      "q": "E se a pessoa tirasse um cochilo com sono profundo em vez da noite interrompida?",
      "a": "Mesmo curto, um sono com fases profundas pode oferecer janelas de reativação e ajudar a consolidar — sinal de que o que importa é a estrutura do sono, e não só o número de horas na cama."
    }
  },
  {
    "id": "confiar-no-palpite",
    "title": "Quando confiar no palpite",
    "modules": [
      "module_25",
      "module_20",
      "module_17"
    ],
    "scenario": "Diante de uma decisão rápida, a pessoa tem um palpite forte. Numa versão do caso ela é enxadrista escolhendo um lance; na outra, aposta no preço de uma ação para o ano seguinte.",
    "question": "Qual modelo diz melhor quando esse palpite deve ser levado a sério?",
    "options": [
      "O palpite deve ser seguido nas duas situações por igual, porque a força da intuição que a pessoa sente é, por si só, um indicador confiável de que a resposta encontrada está certa.",
      "O palpite não deve ser seguido em nenhuma das duas, já que toda intuição é um viés e decisões boas exigem sempre cálculo deliberado e explícito, sem qualquer exceção possível.",
      "O palpite da aposta é o mais confiável, porque quanto mais incerto o domínio, mais os anos de experiência acumulada se transformam em vantagem intuitiva sobre quem decide sem ela.",
      "O do enxadrista merece peso e o da aposta não: intuição é confiável onde o ambiente é regular e há retorno claro — o xadrez oferece isso, a bolsa de longo prazo não oferece."
    ],
    "correct": 3,
    "optionFeedback": [
      "Toma a força sentida como prova de acerto e ignora que ela vale só onde há padrão a aprender.",
      "Descarta a intuição inteira e joga fora o caso do xadrez, onde ela de fato acerta acima do acaso.",
      "Inverte a relação: ambiente mais incerto dá menos base para intuição válida, não mais.",
      "Aplica as duas condições: regularidade do ambiente e retorno claro separam intuição válida de confiança vazia."
    ],
    "explanation": "O palpite é reconhecimento de padrão: uma resposta que chega pronta porque a cena lembra muitas já vividas. Ele merece peso quando duas condições valem juntas — o ambiente é regular o bastante para haver padrão estável a aprender, e existe retorno claro que corrige o aprendizado. O xadrez preenche as duas: posições se repetem e o resultado ensina. A previsão de ações de longo prazo não: o ambiente é ruidoso e o retorno chega tarde e confuso. A mesma sensação de certeza, portanto, vale nas duas apenas por fora.",
    "chain": [
      "o palpite é reconhecimento de padrão",
      "aprender padrão exige ambiente regular",
      "corrigir o aprendizado exige retorno claro",
      "o xadrez tem as duas condições e a bolsa não",
      "só onde as condições valem o palpite merece peso"
    ],
    "extend": {
      "q": "Como a pessoa poderia saber, por dentro, se o próprio palpite é dos confiáveis?",
      "a": "Não dá para saber pela força sentida, que é igual nos dois casos. O caminho é olhar o ambiente: ele tem regularidade e retorno claro? Se sim, confie mais; se não, trate o palpite como hipótese a checar."
    }
  },
  {
    "id": "noite-decisao",
    "title": "Decidir depois de uma noite ruim",
    "modules": [
      "module_15",
      "module_17",
      "module_10",
      "module_20"
    ],
    "scenario": "Uma pessoa dormiu pouco, chega sob pressão a uma escolha importante e passa a favorecer uma recompensa imediata, embora consiga descrever as consequências futuras.",
    "question": "Qual modelo explica melhor por que conhecer as consequências não garante que elas orientem a escolha naquele momento?",
    "options": [
      "O sono insuficiente torna vigilância e memória de trabalho menos estáveis; sob pressão, manter a meta futura compete pior com sinais imediatos, que ganham peso na avaliação.",
      "A escolha muda principalmente porque as consequências futuras deixam de ser recuperadas da memória episódica; atenção, controle e avaliação de valor permanecem preservados.",
      "O estresse aumenta a ativação e melhora a manutenção da meta, mas a recompensa imediata vence porque produz uma resposta dopaminérgica maior, independentemente do sono.",
      "A recompensa imediata se torna mais saliente, e essa mudança isolada basta para determinar a escolha mesmo quando metas, estado e interferência permanecem equivalentes."
    ],
    "correct": 0,
    "optionFeedback": [
      "Esta opção integra estado, manutenção de metas, competição atencional e avaliação sem exigir que o conhecimento tenha desaparecido.",
      "Reduz o caso a recuperação de memória e ignora que a pessoa ainda consegue descrever as consequências.",
      "Usa aumento de ativação como melhora uniforme de controle e transforma dopamina em causa independente do contexto.",
      "Identifica saliência, mas a trata como causa suficiente e remove justamente as interações propostas pelo caso."
    ],
    "explanation": "O caso separa ter o conhecimento de conseguir usá-lo na hora. As consequências futuras a pessoa sabe descrever — o conteúdo está lá. Mas manter uma meta futura viva durante a decisão depende do controle pré-frontal e da memória de trabalho, e sono curto somado à pressão deixa esses sistemas menos estáveis. Com a meta futura enfraquecida na competição, os sinais de recompensa imediata ganham peso relativo e vencem. Não é ignorância nem falta de valor da meta: é a meta competindo em desvantagem por causa do estado.",
    "chain": [
      "sono e pressão alteram o estado",
      "manutenção da meta futura fica menos estável",
      "sinais imediatos competem com maior vantagem",
      "avaliação se orienta mais para o presente"
    ],
    "extend": {
      "q": "E se a mesma pessoa decidisse descansada e sem pressão?",
      "a": "A meta futura se manteria estável na memória de trabalho e competiria de igual para igual — ou com vantagem — contra o imediato, e a escolha provavelmente mudaria. Mostra que o conhecimento era o mesmo; o que mudou foi a estabilidade do controle, um fator de estado, não de saber."
    }
  },
  {
    "id": "estudo-maratona",
    "title": "A maratona que pareceu eficiente",
    "modules": [
      "module_19",
      "module_17",
      "module_15"
    ],
    "scenario": "Um estudante relê o mesmo conteúdo por seis horas, reconhece quase todas as frases no fim da noite, dorme pouco e dois dias depois não consegue reconstruir os mecanismos.",
    "question": "Qual explicação distingue desempenho durante o estudo de retenção futura?",
    "options": [
      "O reconhecimento final demonstra que a memória já estava consolidada; a falha posterior indica apenas que o conteúdo tinha complexidade excessiva.",
      "A releitura aumentou familiaridade, mas ofereceu pouca recuperação; fadiga e sono curto reduziram estabilização e acesso posterior.",
      "O estudo concentrado e o espaçado produzem o mesmo traço quando o tempo total é igual; o sono influencia somente disposição, não retenção.",
      "A vantagem do espaçamento vem principalmente de renovar motivação, enquanto recuperação ativa e sono têm pouca relação com a durabilidade da memória."
    ],
    "correct": 1,
    "optionFeedback": [
      "Confunde sensação de familiaridade com capacidade de recuperar e explicar depois de um intervalo.",
      "Esta opção integra prática de recuperação, queda de atenção e sono sem transformar nenhum fator em explicação única.",
      "Iguala formas de prática e reduz sono a energia subjetiva, ignorando processos ligados à memória.",
      "Reduz o espaçamento a motivação e retira o mecanismo central de recuperação entre intervalos."
    ],
    "explanation": "O caso separa duas coisas que parecem a mesma: ir bem durante o estudo e reter depois. Reconhecer quase todas as frases no fim da noite mede familiaridade — o material está recente e cheio de pistas na tela. Mas reter e reconstruir dois dias depois exige recuperação independente, sem pistas, e isso a releitura quase não treinou. Somam-se dois fatores de estado: a atenção caiu ao longo de seis horas, degradando a codificação, e o sono curto cortou a consolidação que estabilizaria o traço à noite. Não é um fator só — é familiaridade confundida com memória, sobre uma base mal codificada e não consolidada.",
    "chain": [
      "familiaridade imediata sobe com a releitura",
      "recuperação ativa quase não ocorre",
      "atenção cai e a codificação piora",
      "sono curto corta a consolidação noturna",
      "reconstrução sem pistas falha depois"
    ],
    "extend": {
      "q": "E se ele trocasse duas das seis horas por recuperações espaçadas em três dias, dormindo bem?",
      "a": "Reconheceria menos frases no calor da hora, mas reconstruiria mais dois dias depois. Cada recuperação no limiar do esquecimento reengaja a maquinaria de consolidação, e o sono entre as sessões estabiliza o traço. É o princípio da própria fila de revisão do NeuroLab: menos brilho imediato, mais memória durável."
    }
  },
  {
    "id": "habito-deixa",
    "title": "O comportamento continua sem a antiga recompensa",
    "modules": [
      "module_14",
      "module_20",
      "module_29"
    ],
    "scenario": "Um comportamento foi aprendido porque produzia recompensa. Meses depois, a recompensa perdeu valor, mas uma deixa ambiental ainda dispara a sequência com pouca deliberação.",
    "question": "Qual interpretação explica a persistência sem assumir que o resultado ainda é avaliado do mesmo modo?",
    "options": [
      "A deixa apenas recorda a recompensa; antes de cada ação, o sistema recalcula o resultado atual com a mesma profundidade da fase inicial de aprendizagem.",
      "O sistema motor passa a produzir motivação por conta própria, de modo que a história de reforço deixa de contribuir para a sequência.",
      "Com repetição, o controle pode se tornar mais dependente da associação deixa–resposta e menos da reavaliação do resultado a cada ocorrência.",
      "A redução do valor da recompensa deveria desfazer rapidamente a sequência; sua persistência indica que a recompensa continua subjetivamente idêntica."
    ],
    "correct": 2,
    "optionFeedback": [
      "Preserva reavaliação detalhada e, por isso, não explica a menor sensibilidade ao resultado atual.",
      "Isola o sistema motor da aprendizagem que construiu e estabilizou a sequência.",
      "Esta opção descreve a mudança de controle de ação orientada por resultado para resposta mais dependente da deixa.",
      "Trata desvalorização como extinção imediata e ignora que hábitos podem persistir apesar da mudança do resultado."
    ],
    "explanation": "Um comportamento pode ser adquirido pela recompensa sem continuar sendo consultado por ela a cada execução. Com a repetição, o controle migra de ação orientada por resultado (estriado ventral, 'vale a pena?') para resposta disparada por deixa (estriado dorsal, 'aconteceu o gatilho, execute'). Por isso a sequência persiste mesmo depois de o prêmio perder valor: quem a dispara agora é a deixa ambiental, não uma reavaliação do resultado. O hábito não é falta de vontade — é controle que deixou de passar pela recompensa.",
    "chain": [
      "recompensa favorece a aprendizagem inicial",
      "repetição estabiliza a sequência",
      "deixa ganha controle sobre a resposta",
      "ação ocorre com menor reavaliação do resultado"
    ],
    "extend": {
      "q": "E se, em vez de esperar a força de vontade, a pessoa removesse a deixa do ambiente?",
      "a": "A sequência tende a não disparar, porque o que a sustenta é o gatilho, não o valor do prêmio. Mudar o ambiente ataca o controle onde ele realmente está (a deixa), em vez de brigar com a reavaliação, que já não comanda a ação. É a intervenção que o modelo do hábito prevê."
    }
  },
  {
    "id": "fala-repeticao",
    "title": "Compreende, fala, mas não consegue repetir",
    "modules": [
      "module_31",
      "module_09",
      "module_26"
    ],
    "scenario": "Uma pessoa entende frases simples e produz fala espontânea, mas falha de forma marcante ao repetir palavras ou sequências ouvidas.",
    "question": "Qual hipótese e estratégia de investigação combinam melhor com o perfil sem reduzir linguagem a centros isolados?",
    "options": [
      "O padrão aponta primeiro para perda auditiva periférica; um exame temporal rápido basta para localizar o axônio responsável pela dificuldade de repetição.",
      "A produção espontânea preservada torna improvável qualquer participação frontal, de modo que a hipótese deve ficar restrita a armazenamento semântico temporal.",
      "A repetição falha porque palavras ficam armazenadas na substância branca; uma imagem estrutural pode mostrar diretamente qual representação lexical foi perdida.",
      "Uma dificuldade de comunicação entre redes temporais e frontais é plausível; medidas estruturais e de conectividade podem testar a via junto do perfil comportamental."
    ],
    "correct": 3,
    "optionFeedback": [
      "Move o problema para a periferia apesar da compreensão preservada e atribui precisão anatômica excessiva a uma medida temporal.",
      "Conclui que preservação parcial exclui participação de redes frontais, em vez de considerar tarefas diferentes.",
      "Confunde conexão com armazenamento do conteúdo lexical e promete leitura direta da representação.",
      "Esta opção formula uma hipótese de rede e combina método anatômico com comportamento, sem tratar o exame como resposta completa."
    ],
    "explanation": "O perfil — compreende, fala espontaneamente, mas falha ao repetir — aponta para uma falha de cooperação entre redes, não para um centro perdido. Compreensão (temporal) e produção (frontal) estão preservadas; repetir exige carregar a forma sonora de uma à outra pela via dorsal, e é essa transferência que fica vulnerável. A boa hipótese é de conectividade, e a boa investigação combina método (imagem estrutural ou de difusão para testar a via) com o padrão comportamental — nenhum exame sozinho 'lê' o déficit. Rede, não caixa isolada.",
    "chain": [
      "compreensão permanece relativamente funcional",
      "produção espontânea continua possível",
      "repetição exige transferência fonológica precisa",
      "conectividade frontal-temporal vira hipótese testável"
    ],
    "extend": {
      "q": "E se a imagem de difusão mostrasse o feixe dorsal intacto?",
      "a": "A hipótese de desconexão enfraqueceria, e valeria olhar para as próprias redes ou para o timing entre elas. É assim que método e comportamento se corrigem: o exame testa a hipótese, mas é o padrão comportamental que dá sentido ao achado — e um resultado negativo redireciona, não encerra."
    }
  },
  {
    "id": "movimento-farmaco",
    "title": "Uma intervenção química altera o portão motor",
    "modules": [
      "module_27",
      "module_29",
      "module_32"
    ],
    "scenario": "Uma substância reduz fortemente a sinalização dopaminérgica em receptores envolvidos nos gânglios da base, e a pessoa apresenta lentificação e rigidez.",
    "question": "Qual cadeia interpreta o efeito sem transformar um mecanismo farmacológico em diagnóstico automático?",
    "options": [
      "O bloqueio pode alterar o equilíbrio dos gânglios da base e dificultar seleção do movimento; o diagnóstico ainda exige contexto clínico.",
      "A dopamina participa principalmente de recompensa, portanto o efeito motor deve ser explicado por sedação geral e não pelo circuito dos gânglios da base.",
      "O aparecimento de lentificação e rigidez identifica por si só uma doença neurodegenerativa, independentemente do momento de uso da substância.",
      "A redução do sinal dopaminérgico deveria facilitar a ação porque diminui uma influência inibitória; rigidez indicaria lesão medular não relacionada."
    ],
    "correct": 0,
    "optionFeedback": [
      "Esta opção conecta receptor, circuito e sinal motor, mas mantém aberta a distinção entre efeito farmacológico e diagnóstico clínico.",
      "Restringe dopamina a uma função e ignora circuitos motores dopaminérgicos.",
      "Confunde semelhança fenotípica com identidade etiológica e desconsidera a intervenção recente.",
      "Usa uma leitura linear de inibição e ignora a organização relativa das vias dos gânglios da base."
    ],
    "explanation": "A mesma molécula — dopamina — participa de circuitos diferentes, então um efeito motor não aponta sozinho para uma doença. Bloquear receptores dopaminérgicos nos gânglios da base desequilibra as vias que selecionam e iniciam o movimento, produzindo lentificação e rigidez parecidas com parkinsonismo. Mas isso é o mecanismo farmacológico; o diagnóstico exige contexto (a substância foi usada há pouco?). Semelhança de sintoma não é identidade de causa. Ler o efeito é conectar receptor, circuito e sinal, sem pular para o rótulo clínico.",
    "chain": [
      "receptores dopaminérgicos são bloqueados",
      "equilíbrio das vias dos gânglios da base se modifica",
      "seleção e iniciação ficam mais difíceis",
      "sinais motores surgem e requerem contexto"
    ],
    "extend": {
      "q": "E se os mesmos sinais aparecessem sem nenhuma droga envolvida?",
      "a": "Aí a hipótese se desloca para uma alteração própria do circuito dopaminérgico (como na doença de Parkinson), e o contexto passa a favorecer causa neurodegenerativa. Mesmo fenótipo motor, etiologias diferentes — o que separa é o contexto, não o sintoma. Por isso o mecanismo não vira diagnóstico automático."
    }
  },
  {
    "id": "avc-sensorial",
    "title": "O estímulo chega, mas a percepção corporal muda",
    "modules": [
      "module_28",
      "module_09",
      "module_32"
    ],
    "scenario": "Após uma lesão vascular focal, receptores da pele continuam respondendo, mas a percepção consciente de estímulos em parte de um lado do corpo fica reduzida.",
    "question": "Qual explicação localiza a falha sem confundir transdução, transmissão e percepção?",
    "options": [
      "A resposta dos receptores mostra que toda a cadeia sensorial está preservada; a dificuldade deve refletir apenas menor atenção voluntária ao lado afetado.",
      "A transdução periférica pode continuar, enquanto uma lesão em vias centrais ou mapas corticais reduz a contribuição do sinal para a percepção consciente.",
      "A perda consciente exige morte simultânea dos nervos periféricos daquele lado, mesmo quando potenciais receptores ainda são registrados.",
      "A lesão cortical altera somente a decisão de relatar o estímulo; processamento sensorial e representação corporal permanecem equivalentes."
    ],
    "correct": 1,
    "optionFeedback": [
      "Trata a primeira etapa como prova da cadeia inteira e fecha cedo demais a localização.",
      "Esta opção preserva o receptor e posiciona a ruptura em etapas centrais necessárias à percepção.",
      "Contradiz a evidência de transdução periférica preservada e exige uma lesão mais ampla que o cenário.",
      "Reduz percepção a resposta verbal e ignora alterações reais em vias e mapas sensoriais."
    ],
    "explanation": "A percepção consciente é o fim de uma cadeia: receptores da pele transduzem, vias centrais transmitem e mapas corticais processam. Se os receptores ainda respondem mas uma lesão vascular atinge vias centrais ou o mapa cortical, o sinal nasce e não completa o caminho até virar experiência. Por isso a perda é real mesmo com a periferia intacta — e não se explica por 'menos atenção' nem por morte dos nervos periféricos. Transdução, transmissão e percepção são etapas distintas; a falha aqui é central.",
    "chain": [
      "receptores periféricos transduzem o estímulo",
      "sinal inicia a transmissão",
      "via ou mapa central é lesionado",
      "percepção consciente fica incompleta"
    ],
    "extend": {
      "q": "E se a lesão poupasse o mapa cortical e atingisse só uma via de passagem?",
      "a": "A percepção ainda cairia, porque o sinal não chegaria ao mapa — mas a área de destino estaria pronta, o que muda o prognóstico e a reabilitação. Localizar a ruptura na cadeia (via versus mapa) importa: o sintoma pode ser parecido, o alvo terapêutico não."
    }
  },
  {
    "id": "adolescencia-risco",
    "title": "Recompensa imediata em um cérebro em desenvolvimento",
    "modules": [
      "module_30",
      "module_14",
      "module_20"
    ],
    "scenario": "Um adolescente compreende verbalmente um risco futuro, mas, diante dos amigos, escolhe uma recompensa imediata socialmente valorizada.",
    "question": "Qual leitura integra desenvolvimento e contexto sem concluir incapacidade nem destino inevitável?",
    "options": [
      "Redes em desenvolvimento tornam escolhas futuras indisponíveis, portanto explicações, experiência e consequências têm pouca capacidade de modificar o comportamento.",
      "Como o risco foi compreendido verbalmente, qualquer influência do grupo deixa de ser relevante; a escolha prova que o conhecimento era insincero.",
      "Redes de controle e avaliação social continuam se refinando; o grupo pode alterar o peso relativo das opções, sem eliminar aprendizagem ou possibilidade de mudança.",
      "O sistema de recompensa já está maduro, então diferenças de desenvolvimento não participam da decisão; apenas normas culturais explicam o episódio."
    ],
    "correct": 2,
    "optionFeedback": [
      "Transforma tendência de desenvolvimento em incapacidade fixa e retira plasticidade e aprendizagem.",
      "Confunde conhecimento declarativo com controle estável em qualquer contexto.",
      "Esta opção trata desenvolvimento como mudança de probabilidades e incorpora o valor social da situação.",
      "Separa biologia e contexto como alternativas excludentes, quando ambos podem interagir."
    ],
    "explanation": "O adolescente compreende o risco — o conhecimento declarativo existe. Mas a decisão acontece num cérebro em que as redes de controle ainda se refinam enquanto a sensibilidade à recompensa e ao valor social está alta; diante dos amigos, o peso da recompensa imediata sobe e desloca a competição entre as opções. Isso muda probabilidades, não determina incapacidade nem destino: experiência, consequências e contexto continuam capazes de alterar a escolha. Nem 'não sabe', nem 'não tem jeito' — é a balança momentaneamente inclinada.",
    "chain": [
      "redes de controle e valor ainda se refinam",
      "contexto social aumenta o valor imediato",
      "competição entre opções se desloca",
      "escolha muda, mas permanece modificável"
    ],
    "extend": {
      "q": "E se a mesma decisão fosse tomada sozinho, sem a plateia dos amigos?",
      "a": "O valor social imediato cai, a balança se reequilibra e o controle em desenvolvimento tem mais chance de prevalecer. Mostra que o fator decisivo foi o contexto somado ao estágio de desenvolvimento — não uma incapacidade fixa. O mesmo cérebro escolhe diferente quando o peso social muda."
    }
  },
  {
    "id": "apresentacao-estresse",
    "title": "O conhecimento existe, mas não aparece na apresentação",
    "modules": [
      "module_10",
      "module_13",
      "module_17",
      "module_19"
    ],
    "scenario": "Uma pessoa explica bem o tema em casa. Diante de uma plateia, percebe ativação corporal intensa, atenção estreita e dificuldade de recuperar a sequência.",
    "question": "Qual modelo separa armazenamento do conhecimento de acesso e organização durante o estado de estresse?",
    "options": [
      "A ativação autonômica desfaz rapidamente as mudanças sinápticas formadas no estudo, exigindo reaprender o conteúdo depois da apresentação.",
      "O desempenho ruim demonstra que a aprendizagem em casa era apenas aparente; conhecimento consolidado deveria ser recuperado do mesmo modo em qualquer estado.",
      "O aumento da frequência cardíaca bloqueia diretamente os programas motores da linguagem, enquanto atenção e avaliação de ameaça pouco contribuem.",
      "A ameaça aumenta ativação e competição atencional; o conhecimento permanece, mas recuperação e organização ficam menos estáveis."
    ],
    "correct": 3,
    "optionFeedback": [
      "Confunde dificuldade de acesso momentânea com reversão da plasticidade que sustentava o conhecimento.",
      "Trata recuperação como invariável ao estado e usa desempenho como medida completa de armazenamento.",
      "Isola um parâmetro corporal como causa direta e exclui processos atencionais e de ameaça.",
      "Esta opção distingue armazenamento de desempenho e integra estado corporal, atenção e recuperação."
    ],
    "explanation": "O caso separa armazenar o conhecimento de acessá-lo e organizá-lo sob estresse. Em casa a pessoa explica bem — a plasticidade que sustenta o conteúdo está lá. Diante da plateia, a ameaça dispara ativação autonômica intensa e estreita a atenção; recuperar e sequenciar as ideias, que depende de controle e memória de trabalho, fica menos estável. O conteúdo não foi apagado — o acesso ficou instável. Saber, acessar e expressar são etapas relacionadas, mas não a mesma coisa.",
    "chain": [
      "situação é avaliada como ameaçadora",
      "ativação autonômica e competição aumentam",
      "atenção e sequência ficam menos estáveis",
      "recuperação organizada se deteriora"
    ],
    "extend": {
      "q": "E se a pessoa reduzisse a ativação antes de começar — respiração lenta, reavaliação da situação?",
      "a": "O estado muda a montante: menos ativação e ameaça liberam atenção e memória de trabalho, e o mesmo conhecimento volta a ser acessível e organizável. Confirma que o gargalo era o acesso dependente de estado, não o armazenamento — regular o estado é parte de recuperar o que já se sabe."
    }
  }
];
