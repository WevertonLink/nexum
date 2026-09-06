/* AUTO-GENERATED from neurolab-v2/src/04b-domain-mode.js DOMAIN_COUNTERFACTUALS. Do not edit by hand. Regenerate: npm run migrate:nl */
import type { Counterfactual } from "../counterfactual.ts";

export const NL_COUNTERFACTUALS: Counterfactual[] = [
  {
    "id": "memoria-reconsolidacao",
    "moduleId": "module_18",
    "lessonHint": "3",
    "title": "Reabrir a gravação para poder apagá-la",
    "prompt": "Uma memória antiga e estável é evocada e, logo em seguida, a pessoa recebe algo que bloqueia a síntese de novas proteínas. Qual sequência descreve melhor o efeito?",
    "options": [
      "A evocação reabre o traço a um estado instável; sem novas proteínas para reestabilizá-lo, a memória evocada enfraquece, enquanto as não evocadas seguem intactas.",
      "Nada muda na memória evocada, porque uma memória já consolidada é permanente e nunca mais volta a depender de síntese de proteínas em qualquer situação posterior.",
      "Todas as memórias da pessoa enfraquecem juntas, já que o bloqueio das proteínas apaga o armazenamento de longo prazo de forma global, não só o traço reaberto.",
      "A memória evocada fica mais forte, porque impedir a síntese de proteínas trava o esquecimento e fixa justamente o conteúdo que estava ativo no momento da evocação."
    ],
    "correct": 0,
    "optionFeedback": [
      "Separa reconsolidação de consolidação: evocar devolve o traço a um estado lábil que precisa de novas proteínas para voltar a ser estável.",
      "Trata a memória consolidada como imutável; a evocação pode reabri-la, e é aí que a síntese de proteínas volta a ser necessária.",
      "Confunde efeito específico com global: o bloqueio atinge o traço reaberto pela evocação, não todo o armazenamento de uma vez.",
      "Inverte o papel da síntese: sem novas proteínas o traço reaberto não se reestabiliza, então o bloqueio enfraquece em vez de fortalecer."
    ],
    "explanation": "Evocar uma memória não é só lê-la. Em certas condições ela volta a um estado instável e precisa ser regravada para persistir — a reconsolidação —, e essa regravação depende de síntese de novas proteínas. Bloquear as proteínas logo após a evocação impede a reestabilização, e o traço reaberto enfraquece. Uma memória que não foi evocada não passou por essa janela e não é afetada: o alvo é específico, não global.",
    "chain": [
      "memória estável é evocada",
      "a evocação reabre o traço a um estado lábil",
      "reestabilizar exige síntese de novas proteínas",
      "o bloqueio impede a reestabilização",
      "o traço evocado enfraquece"
    ],
    "extend": {
      "q": "E se a mesma substância fosse dada sem evocar a memória antes?",
      "a": "Aí a memória não é afetada: sem a evocação não há janela de reconsolidação para o bloqueio atingir. É a evocação que reabre o traço."
    }
  },
  {
    "id": "ritmos-fase",
    "moduleId": "module_23",
    "lessonHint": "2",
    "title": "A mesma frequência, mas fora de fase",
    "prompt": "Dois grupos de neurônios oscilam exatamente na mesma frequência, porém em fases opostas: quando um está mais excitável, o outro está menos. Como isso afeta a comunicação entre eles?",
    "options": [
      "A comunicação é máxima, porque compartilhar a mesma frequência já garante que os sinais de um cheguem sempre no melhor momento de excitabilidade do outro grupo.",
      "A comunicação fica prejudicada: os sinais de um chegam quando o outro está menos excitável, então a mesma frequência não basta — a relação de fase é que decide.",
      "A frequência de um dos grupos muda sozinha para corrigir a diferença, de modo que a comunicação nunca depende do momento exato em que o sinal chega ao alvo.",
      "A comunicação some e os dois ritmos param juntos, porque oscilar em fases opostas cancela a atividade elétrica das duas populações no mesmo instante e as silencia."
    ],
    "correct": 1,
    "optionFeedback": [
      "Confunde frequência com fase: dividir a frequência não garante nada se os picos de excitabilidade não coincidirem no tempo.",
      "Acerta o ponto: a janela de excitabilidade do alvo precisa coincidir com a chegada do sinal, e em antifase ela não coincide.",
      "Inventa uma correção automática de fase que não existe; a fase relativa pode se manter oposta e prejudicar a troca.",
      "Exagera para o cancelamento total: estar em antifase desencontra as janelas, mas não faz os osciladores pararem."
    ],
    "explanation": "Comunicar por oscilação não é só bater na mesma frequência: é chegar na hora certa. Cada grupo tem janelas rítmicas em que fica mais excitável, e um sinal rende mais quando chega dentro da janela do alvo. Se dois grupos oscilam na mesma frequência mas em fases opostas, os picos de um caem nos vales do outro: o sinal chega quando o alvo está menos responsivo. Por isso a fase relativa, e não só a frequência, decide se sincronizar vira comunicar.",
    "chain": [
      "dois grupos oscilam na mesma frequência",
      "cada grupo tem janelas rítmicas de excitabilidade",
      "em antifase, o pico de um cai no vale do outro",
      "o sinal chega fora da janela do alvo",
      "a comunicação efetiva cai"
    ],
    "extend": {
      "q": "E se os dois passassem a oscilar em fase, com os picos alinhados?",
      "a": "Aí a comunicação melhora: o sinal de um chega quando o outro está mais excitável. Mesma frequência, fase alinhada — a janela abre no momento certo."
    }
  },
  {
    "id": "esforco-recuperacao",
    "moduleId": "module_21",
    "lessonHint": "0",
    "title": "Reler quatro vezes ou recuperar três",
    "prompt": "Com o mesmo tempo, um aluno relê o capítulo quatro vezes; outro lê uma vez e depois tenta recuperar de memória três vezes. Uma semana depois, o que se espera na prova?",
    "options": [
      "O que recuperou lembra mais: puxar da memória, mesmo com erros, modifica o traço, enquanto reler eleva a fluência do momento sem o mesmo efeito duradouro.",
      "O que releu quatro vezes lembra mais, porque a exposição repetida ao texto é o que consolida a memória, e recuperar sem o material à frente apenas cansa o aluno.",
      "Os dois lembram praticamente o mesmo, já que o tempo total de estudo foi idêntico, e é a quantidade de horas, não o tipo de prática, que fixa a retenção final.",
      "O que releu sente menos confiança na prova, mas acerta mais questões, porque a fluência alta se converte de forma direta em desempenho melhor na hora de recuperar."
    ],
    "correct": 0,
    "optionFeedback": [
      "Nomeia o mecanismo: a recuperação bem-sucedida modifica o traço, enquanto reler dá familiaridade sem a mesma durabilidade.",
      "Toma exposição por aprendizado; releitura reconhece o texto, mas não treina produzir sem ele, que é o que a prova cobra.",
      "Iguala pela conta do tempo e ignora que o tipo de prática, não só as horas, decide o quanto permanece.",
      "Confunde fluência com domínio: sentir-se fluente ao reler não prevê o desempenho de recuperar depois."
    ],
    "explanation": "Reler e recuperar não fazem a mesma coisa com a memória. A releitura mantém o texto à vista e sobe a fluência — a sensação de que já se sabe — sem exigir que a resposta seja produzida sem apoio. Tentar recuperar de memória, ainda que com erros, é justamente o ato de produzir sem a fonte, e é ele que modifica o traço e o torna mais recuperável depois. Com o mesmo tempo, três recuperações batem quatro releituras no prazo de uma semana.",
    "chain": [
      "mesmo tempo de estudo nos dois casos",
      "reler mantém o texto à vista e sobe a fluência",
      "recuperar produz a resposta sem apoio",
      "produzir sem apoio modifica o traço",
      "a retenção uma semana depois é maior no que recuperou"
    ],
    "extend": {
      "q": "E se, depois de cada tentativa de recuperar, o aluno conferisse a resposta no texto?",
      "a": "Melhora ainda mais: a recuperação modifica o traço e o retorno corrige o que saiu errado. Sem conferir, um erro recuperado pode ser treinado como se fosse certo."
    }
  },
  {
    "id": "ilusoes-fluencia",
    "moduleId": "module_22",
    "lessonHint": "0",
    "title": "Fácil de ler, fácil de achar que aprendeu",
    "prompt": "Um material é reformatado para ficar mais fácil e agradável de ler, e os alunos passam a se dizer mais confiantes de que aprenderam. O que essa fluência maior garante sobre a retenção real?",
    "options": [
      "Garante retenção maior: a leitura fácil reduz o esforço, e com menos esforço o conteúdo acaba codificado de forma mais profunda e mais duradoura na memória.",
      "Não garante nada: a fluência é a facilidade do momento e serve de sinal para o julgamento de aprendizado, mas se descola do quanto de fato vai ficar retido depois.",
      "Garante retenção menor, porque todo material fácil de ler produz memória fraca, e dificultar a leitura sempre melhora a lembrança quando a prova finalmente chega.",
      "Garante confiança e retenção ao mesmo tempo, já que a sensação de estar aprendendo e a quantidade aprendida são a mesma medida vista de dois ângulos diferentes."
    ],
    "correct": 1,
    "optionFeedback": [
      "Troca facilidade por profundidade: ler sem esforço não implica codificar melhor, e a fluência não é prova de retenção.",
      "Acerta a distinção: a fluência informa o julgamento de aprendizado, mas não mede o que permanecerá na memória.",
      "Supergeneraliza o oposto: dificultar às vezes ajuda, mas nem sempre, e nem todo material fácil produz memória fraca.",
      "Funde sensação com quantidade: sentir que aprendeu e ter aprendido são medidas diferentes, e é isso que a ilusão explora."
    ],
    "explanation": "A fluência é o quanto algo parece fácil de ler ou processar agora. O cérebro a usa como atalho para julgar o próprio aprendizado — se lê liso, sente que sabe. O problema é que a fluência do momento e a retenção futura se descolam: um texto polido pode dar alta sensação de domínio sem que mais conteúdo fique guardado. Por isso a fluência maior não garante retenção maior; ela é um sinal, e um sinal que engana com frequência.",
    "chain": [
      "o material fica mais fácil de ler",
      "a fluência do momento aumenta",
      "a fluência vira sinal para o julgamento de aprendizado",
      "esse sinal se descola da retenção real",
      "a confiança sobe sem garantia de que ficou retido"
    ],
    "extend": {
      "q": "Então dificultar a leitura sempre faz aprender mais?",
      "a": "Não — esse é o exagero oposto. Dificultar pode ajudar em certas condições, mas o efeito é pequeno e inconstante. A lição segura é outra: a fluência não é medida de aprendizado."
    }
  },
  {
    "id": "saber-ponta-lingua",
    "moduleId": "module_24",
    "lessonHint": "1",
    "title": "Ter o sentido sem a palavra",
    "prompt": "Numa ponta da língua, a pessoa não consegue dizer a palavra, mas afirma saber o significado dela e até quantas sílabas ela tem. O que esse estado revela sobre a memória?",
    "options": [
      "Revela que a palavra foi esquecida por completo, e o que resta é só um palpite: se houvesse memória de verdade, a palavra sairia inteira ou não sairia coisa alguma.",
      "Revela uma falha de atenção momentânea, não de memória; com foco suficiente a palavra apareceria na hora, porque o sentido e a forma são sempre recuperados juntos.",
      "Revela que sentido e forma sonora são acessados por vias em parte separadas: ter um sem o outro só é possível se eles não vierem como um bloco único e indivisível.",
      "Revela que a memória guarda somente o significado das palavras, e que a forma sonora de cada uma é recalculada do zero toda vez que a pessoa tenta finalmente falar."
    ],
    "correct": 2,
    "optionFeedback": [
      "Trata a memória como tudo ou nada; a ponta da língua mostra exatamente um meio-termo estável, com sentido presente e forma ausente.",
      "Reduz a atenção o que é dissociação de vias: ter o sentido sem a forma não é distração, é acesso parcial.",
      "Acerta a leitura: sentido e forma sonora têm vias em parte separadas, e é isso que permite um sem o outro.",
      "Exagera para o recálculo do zero; a forma existe guardada, só não está acessível naquele instante."
    ],
    "explanation": "Na ponta da língua a pessoa tem o significado, sente que a palavra existe e às vezes acessa pedaços da forma — a primeira letra, o número de sílabas — sem conseguir produzir a palavra inteira. Isso só é possível porque sentido e forma sonora não são um bloco único: são acessados por vias em parte separadas. Se viessem sempre juntos, ou tudo apareceria ou nada apareceria. O estado intermediário é a prova da dissociação.",
    "chain": [
      "a pessoa tem o significado da palavra",
      "acessa pedaços da forma, como o número de sílabas",
      "não consegue produzir a palavra inteira",
      "sentido e forma têm vias em parte separadas",
      "o acesso parcial revela a dissociação"
    ],
    "extend": {
      "q": "E se uma pista com o primeiro som fosse dada?",
      "a": "Muitas vezes a palavra destrava: a pista alcança a via da forma, que estava acessível só em parte. É mais evidência de que sentido e forma são recuperados por caminhos distintos."
    }
  },
  {
    "id": "palpite-validade",
    "moduleId": "module_25",
    "lessonHint": "1",
    "title": "Dois especialistas, dois ambientes",
    "prompt": "Dois especialistas com anos de prática: um em xadrez, outro em previsão de ações de longo prazo. Sobre a intuição de cada um, o que a pesquisa leva a esperar?",
    "options": [
      "A dos dois é igualmente confiável, porque anos de prática deliberada produzem intuição válida em qualquer domínio, sem depender de como o ambiente se comporta ao redor.",
      "A do previsor de ações é melhor, já que quanto mais imprevisível o ambiente, mais a longa experiência acumulada se converte em vantagem real sobre quem não a tem.",
      "Nenhuma das duas é confiável: intuição é sempre um viés disfarçado, e a sensação de saber do especialista não se distingue em nada da de um iniciante confiante.",
      "A do enxadrista tende a ser válida e a do previsor, não: intuição confiável exige ambiente regular e retorno claro — condições que o xadrez tem e a bolsa de longo prazo não."
    ],
    "correct": 3,
    "optionFeedback": [
      "Ignora a condição decisiva: prática só vira intuição válida onde o ambiente é regular o bastante para haver padrão a aprender.",
      "Inverte a relação: ambiente mais imprevisível dá menos base para intuição válida, não mais, por mais experiência que se acumule.",
      "Joga fora o caso válido: no xadrez, ambiente regular e retorno claro, a intuição do especialista acerta acima do acaso.",
      "Reúne as duas condições: regularidade do ambiente e retorno claro separam a intuição válida do excesso de confiança."
    ],
    "explanation": "Intuição é reconhecimento de padrão: uma resposta que chega pronta porque a situação se parece com muitas já vistas. Ela é confiável só quando duas condições valem — o ambiente tem regularidade estável o bastante para haver padrão a aprender, e há retorno claro que corrige o aprendizado. O xadrez preenche as duas; a previsão de ações de longo prazo, não. Por isso a mesma quantidade de experiência gera intuição válida num caso e só confiança no outro.",
    "chain": [
      "intuição é reconhecimento de padrão",
      "aprender padrão exige um ambiente regular",
      "corrigir o aprendizado exige retorno claro",
      "o xadrez tem as duas condições e a bolsa não",
      "a mesma experiência gera intuição válida só onde as condições valem"
    ],
    "extend": {
      "q": "E se o previsor tivesse retorno imediato e claro a cada aposta?",
      "a": "Ainda faltaria a regularidade do ambiente: sem padrão estável para aprender, nem o melhor retorno constrói intuição válida. As duas condições precisam valer juntas."
    }
  },
  {
    "id": "neuronio-bomba",
    "moduleId": "module_02",
    "lessonHint": "0",
    "title": "A bomba para, mas os canais continuam ali",
    "prompt": "Se a bomba de sódio-potássio parar enquanto canais de vazamento e canais dependentes de voltagem continuam funcionais, qual sequência descreve melhor a evolução do neurônio?",
    "options": [
      "Os canais ainda operam por algum tempo, mas, sem reposição, os gradientes se reduzem; repouso e disparos perdem estabilidade progressivamente.",
      "Cada potencial de ação deixa de existir no mesmo instante, porque a bomba fornece diretamente a corrente rápida que produz a despolarização.",
      "O potencial de repouso permanece estável, pois a permeabilidade ao potássio determina a voltagem sem depender das concentrações em cada lado da membrana.",
      "A excitabilidade aumenta de forma sustentada, já que a entrada de sódio continua ocorrendo enquanto os mecanismos refratários deixam de limitar novos disparos."
    ],
    "correct": 0,
    "optionFeedback": [
      "Esta opção separa o efeito imediato do efeito cumulativo: os canais geram fluxos, mas a bomba é necessária para restaurar os gradientes ao longo do tempo.",
      "Confunde manutenção dos gradientes com geração instantânea do potencial de ação; a corrente rápida vem dos canais, não da bomba.",
      "Ignora que a permeabilidade só produz uma voltagem de equilíbrio porque existem concentrações diferentes de íons nos dois lados.",
      "Prevê apenas aumento de atividade e desconsidera a perda progressiva dos gradientes e os limites impostos pela refratariedade."
    ],
    "explanation": "A bomba não é o motor do disparo — é a manutenção. O tempo todo há um vazamento: Na⁺ escorrega para dentro e K⁺ para fora, e cada disparo gasta mais um pouco do gradiente. A bomba repõe esse gasto em segundo plano, 3 Na⁺ para fora e 2 K⁺ para dentro, à custa de ATP. Pare a bomba e nada muda no instante: os canais ainda têm gradiente estocado para disparar. Mas o vazamento continua e ninguém mais o compensa — a cada ciclo o gradiente encolhe, o repouso deriva, o limiar fica errático, até o disparo não se sustentar.",
    "chain": [
      "gradiente iônico ainda estocado",
      "fluxos e vazamento consomem o gradiente sem reposição",
      "potencial de repouso sobe",
      "limiar fica errático",
      "disparo deixa de se sustentar"
    ],
    "extend": {
      "q": "E se, em vez da bomba, você bloqueasse os canais de Na⁺ dependentes de voltagem?",
      "a": "Aí o disparo para na hora — porque esses canais são o motor da despolarização, não a manutenção. O contraste fixa a distinção: a bomba é reposição lenta em segundo plano; os canais são a geração imediata do sinal."
    }
  },
  {
    "id": "plasticidade-nmda",
    "moduleId": "module_19",
    "lessonHint": "1",
    "title": "NMDA abre, mas o cálcio quase não entra",
    "prompt": "Em uma sinapse glutamatérgica, o bloqueio por magnésio é removido e o NMDA abre, mas a entrada de cálcio é fortemente reduzida. Qual previsão é mais consistente?",
    "options": [
      "A coincidência entre atividade pré e pós-sináptica basta para fortalecer a sinapse, porque a despolarização substitui todas as funções do cálcio intracelular.",
      "A transmissão rápida mediada por AMPA pode continuar, mas as cascatas que ligam coincidência a inserção de AMPA e mudanças duradouras ficam enfraquecidas.",
      "A redução de cálcio favorece uma LTP mais estável, pois evita que qualquer mecanismo intracelular interfira na resposta ao glutamato.",
      "A abertura do NMDA sem cálcio elimina também a resposta AMPA, já que os dois receptores precisam conduzir o mesmo íon para funcionar."
    ],
    "correct": 1,
    "optionFeedback": [
      "Transforma detecção de coincidência em condição suficiente; falta o sinal intracelular que aciona parte importante das mudanças posteriores.",
      "Esta opção preserva o que ainda funciona e localiza a ruptura entre a coincidência detectada e a plasticidade duradoura.",
      "Inverte o papel do cálcio relevante para a indução de LTP e trata a ausência de sinalização como proteção da memória.",
      "Confunde receptores distintos: AMPA pode sustentar transmissão rápida mesmo quando a sinalização pelo NMDA está prejudicada."
    ],
    "explanation": "O NMDA faz duas coisas ao mesmo tempo, e o exercício separa uma da outra. Ele é a porta lógica E: só abre com glutamato E a membrana já despolarizada — é assim que detecta que o neurônio de antes e o de depois dispararam juntos (a coincidência de Hebb). E, ao abrir, deixa entrar cálcio, que aciona a CaMKII e instala mais receptores AMPA — é isso que fortalece a sinapse. Se a porta abre mas quase não entra cálcio, a coincidência ainda é detectada e a transmissão por AMPA continua, mas falta o mensageiro que transforma coincidência em fortalecimento duradouro. Detectar não é o mesmo que gravar.",
    "chain": [
      "porta E do NMDA se abre",
      "coincidência pré-pós é detectada",
      "entrada de cálcio fica muito reduzida",
      "CaMKII não instala AMPA extra",
      "LTP não se induz"
    ],
    "extend": {
      "q": "E se, em vez de reduzir o cálcio, você removesse a rolha de magnésio do NMDA?",
      "a": "Aí o NMDA abriria com qualquer glutamato, mesmo com a célula em repouso — a porta E viraria uma porta sempre-ligada. Toda sinapse ativa se fortaleceria, coincidindo ou não, e o cérebro perderia a capacidade de distinguir causa de coincidência. É o oposto deste caso: aqui sobra detecção e falta gravação; lá sobraria gravação sem discriminação."
    }
  },
  {
    "id": "recompensa-previsto",
    "moduleId": "module_14",
    "lessonHint": "1",
    "title": "A recompensa chega exatamente como previsto",
    "prompt": "Uma recompensa ocorre no momento e na magnitude já previstos por uma pista aprendida. Qual padrão é mais compatível com erro de previsão de recompensa?",
    "options": [
      "O resultado gera um grande erro positivo porque o valor hedônico da recompensa determina sozinho a resposta fásica de dopamina.",
      "O resultado gera erro negativo porque uma recompensa previsível deixa de ter valor e passa a funcionar como uma perda.",
      "A resposta fásica tende a ser pequena no resultado, enquanto parte do sinal pode já ter se deslocado para a pista que o previu.",
      "A atividade dopaminérgica do circuito inteiro desaparece, pois erro de previsão próximo de zero significa ausência de qualquer função da dopamina."
    ],
    "correct": 2,
    "optionFeedback": [
      "Confunde prazer ou valor consumatório com diferença entre resultado recebido e resultado esperado.",
      "Previsibilidade reduz novidade informativa, mas não transforma automaticamente recompensa em perda.",
      "Esta opção distingue o sinal na pista do sinal no resultado e representa a diferença próxima de zero no momento esperado.",
      "Generaliza um componente fásico específico para toda a atividade dopaminérgica e para todas as funções do sistema."
    ],
    "explanation": "O neurônio de dopamina não sinaliza a recompensa — sinaliza a surpresa: a diferença entre o que veio e o que era esperado. Quando uma pista já aprendida prevê certinho o momento e o tamanho do prêmio, o resultado não traz nada de novo para atualizar, então a resposta fásica no prêmio quase some. E ela não sumiu do circuito: migrou para trás, para a pista que passou a carregar a informação preditiva. Erro de previsão baixo não é dopamina desligada — é previsão já aprendida.",
    "chain": [
      "pista adquire valor preditivo",
      "expectativa se forma antes do resultado",
      "resultado coincide com a previsão",
      "erro no resultado fica pequeno"
    ],
    "extend": {
      "q": "E se, depois de tudo aprendido, o prêmio esperado simplesmente não vier?",
      "a": "A dopamina cai abaixo do basal no exato momento em que ele era esperado — um erro de previsão negativo, o sinal de 'piorou em relação ao previsto'. É a mesma régua (recebido menos esperado) medindo agora uma ausência. Por isso frustração e recompensa surpresa usam o mesmo mecanismo, em direções opostas."
    }
  },
  {
    "id": "decisao-valor-antigo",
    "moduleId": "module_20",
    "lessonHint": "1",
    "title": "O ambiente mudou, mas o valor interno não",
    "prompt": "Uma opção antes vantajosa passou a produzir resultados ruins, porém sua estimativa interna de valor não é atualizada. Qual padrão de escolha é mais provável?",
    "options": [
      "A pessoa identifica o novo resultado, atualiza corretamente o valor, mas falha apenas na execução motora da alternativa escolhida.",
      "A representação visual da opção perde nitidez, porque uma estimativa de valor desatualizada altera diretamente a transdução sensorial.",
      "As escolhas ficam essencialmente aleatórias, pois qualquer valor antigo deixa de influenciar a comparação entre alternativas.",
      "A opção antiga continua favorecida porque a comparação usa uma estimativa que já não representa os resultados atuais."
    ],
    "correct": 3,
    "optionFeedback": [
      "Desloca o problema para execução motora, embora o cenário tenha definido uma falha de atualização de valor.",
      "Confunde avaliação com percepção; a opção pode ser vista normalmente e ainda ser avaliada por um modelo desatualizado.",
      "Subestima a força do valor aprendido: uma estimativa antiga tende a enviesar a escolha, não a torná-la sem direção.",
      "Esta opção mantém percepção e ação possíveis, mas mostra como uma representação desatualizada orienta escolhas persistentes."
    ],
    "explanation": "A escolha não compara os resultados de agora — compara valores estimados, guardados de experiências passadas. Esses valores são corrigidos pelo erro de previsão a cada resultado; se essa atualização falha, a estimativa antiga continua vencendo a comparação mesmo depois de o resultado real ter piorado. A pessoa vê o prejuízo, mas o número interno que guia a decisão ainda é o velho. Escolher mal aqui não é não perceber — é decidir com um valor desatualizado.",
    "chain": [
      "resultado da opção se modifica",
      "estimativa interna não acompanha a mudança",
      "comparação usa valor antigo",
      "escolha persiste apesar do prejuízo"
    ],
    "extend": {
      "q": "E se a atualização de valor funcionasse normalmente?",
      "a": "Cada resultado ruim empurraria a estimativa para baixo, via erro de previsão negativo, e em poucas tentativas a opção deixaria de ser escolhida. É exatamente essa correção que o aprendizado por reforço faz — e é a ausência dela, não falta de percepção, que prende a escolha no valor antigo."
    }
  },
  {
    "id": "atencao-supressao",
    "moduleId": "module_17",
    "lessonHint": "2",
    "title": "A meta permanece, mas os competidores continuam fortes",
    "prompt": "Uma pessoa mantém corretamente a meta na memória de trabalho, porém não consegue reduzir a competição de estímulos irrelevantes. O que melhor distingue essas duas funções?",
    "options": [
      "A intenção continua acessível, mas intrusões e trocas aumentam porque manter a meta não garante proteção eficaz contra competidores.",
      "A execução permanece estável, pois uma meta consciente já contém toda a seleção necessária para impedir interferência.",
      "Os estímulos irrelevantes atrasam a percepção, mas não alteram erros nem alternâncias enquanto a pessoa consegue repetir a meta.",
      "O aumento voluntário de esforço compensa integralmente a falta de supressão, preservando o desempenho em qualquer nível de distração."
    ],
    "correct": 0,
    "optionFeedback": [
      "Esta opção separa manutenção da meta de controle da competição e prevê instabilidade sem apagar a intenção.",
      "Trata processos relacionados como equivalentes e ignora que estímulos concorrentes podem vencer mesmo com a meta ativa.",
      "Reduz a interferência a tempo de resposta e exclui efeitos previsíveis sobre seleção, erros e trocas.",
      "Transforma esforço em compensação ilimitada e desconsidera limites de carga e competição."
    ],
    "explanation": "Manter a meta e proteger a meta são duas operações diferentes. A memória de trabalho pode segurar 'foco nisto' com clareza, enquanto o mecanismo que inclina a competição contra os distratores falha — e aí estímulos irrelevantes continuam fortes e vencem a seleção. Saber o que fazer não impede a intrusão; é preciso um segundo processo que enfraqueça ativamente os concorrentes. Por isso a meta pode estar intacta e a execução, instável.",
    "chain": [
      "meta continua representada",
      "estímulos irrelevantes mantêm força competitiva",
      "seleção sofre intrusões e trocas",
      "execução fica menos estável"
    ],
    "extend": {
      "q": "E se, em vez da meta, fosse a manutenção que falhasse — a meta escorregando da memória de trabalho?",
      "a": "O padrão se inverte: a pessoa se distrai não porque o distrator venceu, mas porque o alvo se apagou e não há mais o que proteger. Até distratores fracos assumem, porque não há meta competindo. Distinguir os dois casos muda a intervenção: reforçar a meta versus reduzir a interferência."
    }
  },
  {
    "id": "emocao-sem-contexto",
    "moduleId": "module_10",
    "lessonHint": "0",
    "title": "A relevância é detectada sem contexto suficiente",
    "prompt": "A amígdala sinaliza que um estímulo é relevante, mas o hipocampo fornece pouco contexto sobre onde e quando ele ocorreu. Qual consequência é mais plausível?",
    "options": [
      "A resposta emocional deixa de surgir, porque a amígdala só pode avaliar relevância depois que o hipocampo reconstrói o episódio completo.",
      "A reação pode ser mobilizada, mas tende a generalizar mais e a se ajustar menos às circunstâncias específicas.",
      "A ausência de contexto torna a resposta mais precisa, pois elimina detalhes episódicos que competiriam com a detecção de ameaça.",
      "A intensidade emocional permanece intacta, mas apenas o rótulo verbal do episódio se perde, já que o hipocampo atua somente sobre linguagem."
    ],
    "correct": 1,
    "optionFeedback": [
      "Coloca o contexto como pré-requisito absoluto para qualquer sinal de relevância e apaga contribuições paralelas.",
      "Esta opção preserva a detecção de relevância e localiza o prejuízo na discriminação contextual.",
      "Confunde rapidez com precisão; remover contexto tende a ampliar generalização, não a torná-la específica.",
      "Restringe o hipocampo à linguagem e ignora seu papel na organização contextual e episódica."
    ],
    "explanation": "A amígdala avalia relevância rápido; o hipocampo fornece o contexto — onde, quando, em que circunstância. São contribuições paralelas, não uma dependente da outra. Se a relevância é sinalizada mas o contexto vem pobre, a resposta ainda dispara, só que sem a etiqueta situacional que diria 'aqui sim, ali não'. O resultado é generalização: a reação vaza para situações apenas parecidas. Não é medo a mais nem a menos — é medo sem endereço.",
    "chain": [
      "relevância é sinalizada",
      "contexto episódico fica incompleto",
      "situações semelhantes são menos discriminadas",
      "resposta tende a generalizar"
    ],
    "extend": {
      "q": "E se fosse o contrário — contexto rico, mas a amígdala pouco reativa?",
      "a": "A pessoa saberia perfeitamente onde e quando algo acontece, mas sem o peso de relevância que faz aquilo importar e mobilizar o corpo. Discriminação boa, prioridade fraca. É o par oposto deste caso: aqui falta o 'onde'; lá faltaria o 'quanto importa'."
    }
  },
  {
    "id": "autonomo-recuperacao",
    "moduleId": "module_13",
    "lessonHint": "2",
    "title": "A ameaça termina, mas a recuperação não acompanha",
    "prompt": "O evento ameaçador terminou, porém a retomada parassimpática permanece reduzida. Qual interpretação distingue fim da ameaça de recuperação corporal?",
    "options": [
      "Os parâmetros corporais retornam ao basal pelo simples desaparecimento do estímulo, sem depender de mecanismos de recuperação.",
      "A ativação persistente demonstra que uma ameaça externa continua presente, mesmo quando o ambiente já foi verificado como seguro.",
      "Frequência cardíaca e outros parâmetros podem permanecer elevados, pois encerrar a mobilização exige regulação ativa.",
      "A alteração afeta apenas a sensação subjetiva; dinâmica cardíaca e respiratória não participam da recuperação autonômica."
    ],
    "correct": 2,
    "optionFeedback": [
      "Trata recuperação como ausência passiva de estímulo e ignora mecanismos que ajudam a restaurar o basal.",
      "Confunde estado corporal persistente com evidência obrigatória de ameaça externa atual.",
      "Esta opção reconhece que mobilização e retorno ao basal são etapas regulatórias distintas.",
      "Separa indevidamente experiência e fisiologia, embora a recuperação autonômica envolva parâmetros corporais mensuráveis."
    ],
    "explanation": "Desligar a mobilização não é o mesmo que ela acabar sozinha quando a ameaça some. O retorno ao basal é ativo: depende da retomada parassimpática — o freio vagal — reduzindo a frequência cardíaca e reativando a recuperação. Se esse freio volta devagar, o corpo continua mobilizado mesmo com o ambiente já seguro. Fim da ameaça e recuperação corporal são etapas separadas: uma é o gatilho parar, a outra é o sistema se recompor.",
    "chain": [
      "ameaça deixa de estar presente",
      "retirada da ativação é insuficiente",
      "recuperação parassimpática permanece fraca",
      "retorno ao basal fica prolongado"
    ],
    "extend": {
      "q": "E se a ameaça continuar, mas o freio parassimpático estiver forte?",
      "a": "A recuperação compete com a mobilização em tempo real — é a base da regulação por respiração lenta, que aumenta o tônus vagal e puxa o corpo de volta mesmo sob estímulo. Mostra que mobilizar e recuperar são vias distintas, que podem operar ao mesmo tempo, e não um interruptor único."
    }
  },
  {
    "id": "sono-fragmentado",
    "moduleId": "module_15",
    "lessonHint": "0",
    "title": "Oito horas no relógio, mas sono interrompido",
    "prompt": "Uma pessoa permanece oito horas na cama, mas desperta repetidamente e interrompe os ciclos. Qual conclusão separa duração de continuidade?",
    "options": [
      "O total de horas compensa as interrupções, pois processos do sono dependem apenas do tempo acumulado em qualquer sequência.",
      "Cada despertar favorece a consolidação ao reiniciar um ciclo completo, mesmo quando os estágios são interrompidos antes de se organizar.",
      "A fragmentação altera somente a lembrança consciente dos sonhos, sem consequências para recuperação ou memória.",
      "A duração pode parecer suficiente, enquanto a continuidade dos estágios e processos de recuperação e consolidação fica prejudicada."
    ],
    "correct": 3,
    "optionFeedback": [
      "Reduz sono a quantidade e desconsidera a organização temporal dos estágios.",
      "Trata reinícios como ciclos completos, embora despertares possam interromper transições e continuidade.",
      "Restringe o efeito a sonhos e exclui processos dependentes da arquitetura do sono.",
      "Esta opção mantém a distinção entre tempo total e qualidade/continuidade da arquitetura do sono."
    ],
    "explanation": "O sono não vale pelo total de horas, e sim pela arquitetura — ciclos de cerca de 90 min encadeando sono profundo (N3) e REM, cada estágio com sua função. Despertar repetido reinicia e interrompe essas transições antes de elas se organizarem; o relógio marca oito horas, mas os estágios não chegam a fazer o trabalho. Duração e continuidade são eixos diferentes. Tempo na cama não é tempo de sono estruturado.",
    "chain": [
      "tempo total parece preservado",
      "despertares interrompem a arquitetura",
      "processos dependentes de continuidade ficam menos estáveis",
      "recuperação e consolidação podem diminuir"
    ],
    "extend": {
      "q": "E se a pessoa dormisse seis horas seguidas, sem interrupção, em vez de oito fragmentadas?",
      "a": "Provavelmente consolidaria mais: ciclos inteiros completam as transições entre N3 e REM que a fragmentação corta. Menos horas contínuas podem render mais que mais horas picadas — porque o que consolida é a estrutura preservada, não o total acumulado."
    }
  },
  {
    "id": "neuroanatomia-conexao",
    "moduleId": "module_09",
    "lessonHint": "3",
    "title": "Os nós permanecem, mas a conexão é interrompida",
    "prompt": "Duas regiões corticais mantêm tecido local relativamente preservado, mas o feixe de substância branca entre elas é lesionado. Qual previsão trata rede e região separadamente?",
    "options": [
      "Processamentos locais podem permanecer, enquanto tarefas que dependem da troca entre as regiões ficam prejudicadas.",
      "As duas regiões perdem todas as funções locais, porque qualquer capacidade cortical fica armazenada no feixe que as conecta.",
      "A tarefa integrada tende a permanecer normal, pois o cérebro substitui de imediato toda via lesionada por uma rota equivalente.",
      "A lesão afeta somente a velocidade de condução, sem modificar precisão, sincronização ou combinação de informações."
    ],
    "correct": 0,
    "optionFeedback": [
      "Esta opção descreve uma síndrome de desconexão: nós preservados não garantem cooperação preservada.",
      "Confunde conteúdo/processamento local com a via que permite comunicação entre regiões.",
      "Transforma compensação possível em substituição imediata e completa.",
      "Reduz conectividade a velocidade e ignora efeitos sobre sincronização e integração."
    ],
    "explanation": "Uma função pode morar na região ou na conexão entre regiões — e lesões dissociam as duas. Se o tecido local de duas áreas está preservado, mas o feixe de substância branca que as liga é cortado, cada área ainda faz o seu; o que quebra é qualquer tarefa que dependa de elas trocarem informação a tempo. Isso é uma síndrome de desconexão: nós intactos, cabo rompido. Preservar as peças não preserva a cooperação entre elas.",
    "chain": [
      "regiões locais permanecem funcionais",
      "via entre elas é interrompida",
      "troca e sincronização se degradam",
      "função integrada fica prejudicada"
    ],
    "extend": {
      "q": "E se, em vez do feixe, um dos nós (uma das regiões) fosse lesado, com as vias intactas?",
      "a": "Aí some a função local daquela região, e não a comunicação em si. O contraste localiza o déficit: dano no nó apaga uma competência específica; dano no cabo preserva as competências, mas impede combiná-las. Mesma rede, dois tipos de falha bem diferentes."
    }
  },
  {
    "id": "sensorial-talamo",
    "moduleId": "module_28",
    "lessonHint": "0",
    "title": "A retina transduz, mas a retransmissão falha",
    "prompt": "A retina converte luz em sinal neural, porém uma retransmissão talâmica importante para a via visual é interrompida. Qual conclusão localiza corretamente a falha?",
    "options": [
      "A retina deixa de transduzir luz por falta de retorno talâmico, de modo que a cadeia falha já no receptor periférico.",
      "A etapa periférica pode permanecer funcional, mas o acesso normal do sinal a redes corticais visuais fica comprometido.",
      "A percepção visual consciente permanece equivalente porque toda informação da retina chega ao córtex por uma rota que dispensa retransmissão.",
      "A interrupção altera apenas reflexos oculares, enquanto percepção consciente e discriminação cortical permanecem preservadas."
    ],
    "correct": 1,
    "optionFeedback": [
      "Move a falha para a retina, embora o cenário preserve explicitamente a transdução periférica.",
      "Esta opção distingue captação do estímulo de retransmissão e processamento cortical.",
      "Generaliza vias alternativas e ignora a importância da retransmissão talâmica para o fluxo visual normal.",
      "Separa reflexo e percepção de forma rígida e subestima o impacto cortical da interrupção da via."
    ],
    "explanation": "Perceber é uma cadeia: transdução (a retina vira luz em sinal), retransmissão (o tálamo, no núcleo geniculado lateral, repassa ao córtex) e processamento cortical. O tálamo não é um fio passivo: é a estação obrigatória que dá acesso ao córtex visual. Se a transdução na retina está intacta mas essa retransmissão falha, o sinal nasce e não chega para virar percepção. Captar luz não é ver — ver depende de o sinal completar o caminho.",
    "chain": [
      "luz é transduzida na retina",
      "sinal entra na via visual",
      "retransmissão é interrompida",
      "processamento cortical normal recebe informação incompleta"
    ],
    "extend": {
      "q": "E se a retina fosse lesada e o tálamo e o córtex ficassem intactos?",
      "a": "A cadeia falharia na entrada: sem transdução, não há sinal para retransmitir, e o córtex visual, perfeito, fica sem matéria-prima. O contraste mostra que cada etapa é necessária — a falha muda de lugar, mas o resultado (percepção incompleta) pode parecer o mesmo por fora. Localizar exige separar as etapas."
    }
  },
  {
    "id": "motor-cerebelo",
    "moduleId": "module_29",
    "lessonHint": "1",
    "title": "O movimento começa, mas a comparação falha",
    "prompt": "O córtex motor inicia uma ação, mas o cerebelo não compara adequadamente o movimento previsto com o realizado. Qual padrão diferencia iniciar de corrigir?",
    "options": [
      "O movimento não chega a começar, pois toda ordem descendente para a medula precisa ser originada no cerebelo.",
      "O gesto mantém precisão e timing, mas apenas demora mais para iniciar porque a comparação cerebelar atua antes do comando motor.",
      "O gesto pode começar, porém acumula erros de timing, trajetória e correção durante a execução.",
      "A força muscular desaparece seletivamente, enquanto coordenação e ajuste permanecem preservados."
    ],
    "correct": 2,
    "optionFeedback": [
      "Transfere a origem do comando cortical para o cerebelo e confunde iniciação com calibração.",
      "Preserva justamente as dimensões mais dependentes de previsão e correção cerebelar.",
      "Esta opção mantém a iniciação e localiza o prejuízo na comparação e nos ajustes em curso.",
      "Confunde coordenação com geração de força e prevê o padrão inverso do esperado."
    ],
    "explanation": "Iniciar um movimento e afiná-lo são trabalhos de estruturas diferentes: o córtex motor dispara o comando; o cerebelo compara o movimento previsto com o realizado e corrige timing e trajetória em tempo real. Se essa comparação falha, o gesto ainda começa — a ordem descendente sai normal — mas vai acumulando erro sem correção, ficando descoordenado. Começar não garante acertar. A coordenação é a calibração contínua, não o disparo inicial.",
    "chain": [
      "comando motor é iniciado",
      "previsão e feedback deixam de ser comparados adequadamente",
      "correções ficam imprecisas",
      "movimento perde coordenação"
    ],
    "extend": {
      "q": "E se, em vez do cerebelo, fosse a via corticoespinhal (o próprio comando) que falhasse?",
      "a": "Aí o movimento nem começaria direito — faltaria força ou iniciação, não coordenação. O contraste separa as contribuições: sem comando, não há gesto; sem cerebelo, há gesto impreciso. Duas falhas que parecem 'não conseguir mover', mas por motivos opostos."
    }
  },
  {
    "id": "desenvolvimento-poda",
    "moduleId": "module_30",
    "lessonHint": "2",
    "title": "A poda remove conexões que ainda carregavam função",
    "prompt": "Durante o desenvolvimento, muitas conexões funcionalmente utilizadas são eliminadas além do necessário. Qual previsão evita tratar poda como benefício automático?",
    "options": [
      "A eficiência aumenta porque qualquer redução no número de sinapses diminui ruído sem custo para a capacidade da rede.",
      "A rede permanece equivalente, pois conexões funcionalmente usadas são intercambiáveis com qualquer sinapse restante.",
      "A perda de caminhos úteis causa falha global imediata, mesmo quando existem rotas redundantes e plasticidade residual.",
      "A rede pode perder flexibilidade ou desempenho, pois eficiência depende de preservar conexões funcionalmente relevantes."
    ],
    "correct": 3,
    "optionFeedback": [
      "Confunde redução com otimização e ignora que o efeito depende de quais conexões foram removidas.",
      "Trata sinapses como unidades substituíveis e desconsidera especialização e padrões de conectividade.",
      "Exagera a consequência para colapso imediato e ignora redundância e compensação parcial.",
      "Esta opção reconhece que poda pode ajudar ou prejudicar conforme preserve os caminhos funcionalmente relevantes."
    ],
    "explanation": "Poda sináptica é seleção, não subtração cega: eliminar conexões pouco usadas refina a rede e reduz ruído. Mas o benefício depende de quais conexões saem. Se a poda remove, em excesso, conexões que ainda carregavam função, a rede perde capacidade e flexibilidade — menos é melhor só até onde o que se corta era realmente dispensável. Eficiência não é ter menos sinapses; é preservar as relevantes. Cortar demais custa tanto quanto não cortar.",
    "chain": [
      "conexões funcionais são removidas",
      "redundância e rotas úteis diminuem",
      "algumas operações perdem suporte",
      "desempenho ou flexibilidade podem cair"
    ],
    "extend": {
      "q": "E se a poda quase não ocorresse, mantendo conexões em excesso?",
      "a": "A rede ficaria ruidosa e pouco especializada — sinal e concorrência misturados, sem o ganho de eficiência da poda seletiva. É o extremo oposto: aqui o problema é cortar demais; lá seria cortar de menos. O ótimo é a seleção certa, não o máximo nem o mínimo de conexões."
    }
  },
  {
    "id": "linguagem-arqueado",
    "moduleId": "module_31",
    "lessonHint": "2",
    "title": "Compreensão e produção existem, mas a ponte falha",
    "prompt": "Redes temporais de compreensão e redes frontais de produção estão relativamente preservadas, mas a conexão dorsal entre elas é lesionada. Qual padrão é mais coerente?",
    "options": [
      "A pessoa pode compreender e produzir fala espontânea, mas tarefas de repetição e transferência fonológica entre as redes ficam especialmente vulneráveis.",
      "A compreensão e a produção desaparecem na mesma intensidade, pois ambas ficam integralmente armazenadas na via de conexão.",
      "A perda principal ocorre na audição periférica, porque o feixe de conexão participa da transdução mecânica na cóclea.",
      "A repetição permanece preservada sempre que o significado é compreendido, pois rotas semânticas substituem completamente a transferência fonológica."
    ],
    "correct": 0,
    "optionFeedback": [
      "Esta opção preserva funções locais e identifica a tarefa que exige comunicação precisa entre as redes.",
      "Confunde via de conexão com armazenamento integral das capacidades de cada região.",
      "Move a lesão cortical para a periferia auditiva, apesar de a transdução não depender desse feixe.",
      "Transforma compensação parcial por outras rotas em preservação completa de repetição."
    ],
    "explanation": "A linguagem é uma rede distribuída, não dois centros: regiões temporais dão conta da compreensão, regiões frontais da produção, e um feixe dorsal (o fascículo arqueado) faz a transferência fonológica precisa entre elas. Se as pontas estão preservadas mas o feixe é lesado, compreensão e fala espontânea seguem — o que despenca é justamente o que exige carregar a forma sonora de uma ponta à outra: repetir. É desconexão, não perda de um 'centro da repetição'. A tarefa que quebra é a que depende do cabo.",
    "chain": [
      "compreensão local permanece relativamente funcional",
      "produção espontânea continua possível",
      "transferência fonológica perde precisão",
      "repetição fica mais prejudicada"
    ],
    "extend": {
      "q": "E se a lesão fosse na região temporal de compreensão, e não no feixe?",
      "a": "Aí a compreensão em si se degradaria, e a fala tenderia a ficar fluente mas sem controle de significado. O contraste mostra por que 'não repetir' e 'não compreender' são déficits distintos: um é o cabo entre redes; o outro é uma das redes. Reduzir tudo a um centro perde essa distinção."
    }
  },
  {
    "id": "clinica-penumbra",
    "moduleId": "module_32",
    "lessonHint": "2",
    "title": "O fluxo retorna ao tecido ainda viável",
    "prompt": "Em uma isquemia, o fluxo é restaurado rapidamente numa região funcionalmente comprometida, mas ainda não irreversivelmente destruída. Qual distinção é essencial?",
    "options": [
      "A reperfusão restaura de modo equivalente todo tecido envolvido, porque núcleo e região em risco diferem apenas na intensidade dos sintomas.",
      "Parte da região em risco pode recuperar função, enquanto tecido já irreversivelmente lesado pode não responder da mesma forma.",
      "O retorno do fluxo modifica somente a expressão clínica momentânea, sem alterar a chance de sobrevivência do tecido ameaçado.",
      "Núcleo e penumbra são definidos por localizações anatômicas fixas, independentemente de tempo, perfusão e demanda metabólica."
    ],
    "correct": 1,
    "optionFeedback": [
      "Apaga diferenças de viabilidade tecidual e trata reperfusão como reversão uniforme.",
      "Esta opção distingue tecido ameaçado e potencialmente recuperável de tecido já irreversivelmente lesionado.",
      "Separa sintoma de tecido e ignora que reperfusão em tempo útil pode preservar células ainda viáveis.",
      "Transforma estados dinâmicos de perfusão e dano em regiões anatômicas invariáveis."
    ],
    "explanation": "Num AVC isquêmico há dois territórios: o núcleo, onde o fluxo caiu tanto que o tecido já morreu, e a penumbra, o tecido em volta que perdeu função mas ainda está vivo, sustentado por fluxo colateral. É a penumbra que a reperfusão em tempo útil pode salvar — o núcleo não responde do mesmo modo. E esses territórios são dinâmicos: dependem de tempo, perfusão e demanda, não de coordenadas fixas. Restaurar o fluxo ajuda quem ainda é viável; por isso 'tempo é cérebro'.",
    "chain": [
      "fluxo reduzido compromete função",
      "parte do tecido permanece viável",
      "reperfusão ocorre em tempo útil",
      "função pode ser preservada nessa região"
    ],
    "extend": {
      "q": "E se o fluxo só voltasse muito depois, com a penumbra já convertida em núcleo?",
      "a": "A reperfusão encontraria tecido já morto e pouca função a recuperar — e ainda poderia lesar por reperfusão. É o mesmo procedimento com resultado oposto, decidido pelo relógio: a viabilidade do alvo, e não o gesto de reabrir o vaso, é o que determina o ganho."
    }
  },
  {
    "id": "farmacologia-receptor",
    "moduleId": "module_27",
    "lessonHint": "1",
    "title": "Mais transmissor, menos receptores disponíveis",
    "prompt": "Uma droga reduz a recaptação de um neurotransmissor, enquanto os receptores responsáveis pelo efeito de interesse estão fortemente bloqueados. Qual resultado separa disponibilidade de resposta?",
    "options": [
      "O aumento na fenda supera o bloqueio por definição, pois concentração do transmissor determina sozinha a intensidade do efeito.",
      "O bloqueio do receptor impede o acúmulo na fenda, porque receptor e transportador são a mesma etapa da transmissão.",
      "A concentração pode aumentar, mas o efeito mediado por esses receptores permanece limitado enquanto eles estiverem indisponíveis.",
      "Nenhum efeito do neurotransmissor ocorre em qualquer circuito, mesmo que existam outros subtipos de receptor e regiões não bloqueadas."
    ],
    "correct": 2,
    "optionFeedback": [
      "Transforma concentração em fator suficiente e ignora afinidade, ocupação e tipo de antagonismo.",
      "Confunde transportador de recaptação com receptor pós-sináptico.",
      "Esta opção separa quantidade de mensageiro da capacidade do alvo de responder.",
      "Generaliza o bloqueio de um conjunto de receptores para todas as ações do neurotransmissor."
    ],
    "explanation": "Ter mais mensageiro na fenda e conseguir entregar a mensagem são etapas separadas. Bloquear a recaptação faz o neurotransmissor se acumular — mas o efeito depende de ele encaixar no receptor que o medeia. Se esse receptor está ocupado por um antagonista, a concentração sobe e a resposta por aquela via continua limitada: a chave sobra, mas a fechadura está tampada. Disponibilidade não é resposta. O gargalo é o alvo, não a quantidade.",
    "chain": [
      "recaptação é reduzida",
      "transmissor permanece mais tempo na fenda",
      "receptores de interesse estão indisponíveis",
      "resposta por essa via fica limitada"
    ],
    "extend": {
      "q": "E se, em vez de bloquear o receptor, a droga o tornasse mais sensível (potencializando a resposta)?",
      "a": "Aí o mesmo acúmulo de transmissor produziria efeito ampliado — disponibilidade e alvo respondendo juntos. O contraste isola as duas alavancas independentes da farmacologia: quanto mensageiro há na fenda e quão capaz o receptor está de responder. Mexer numa não substitui a outra."
    }
  },
  {
    "id": "metodos-eeg-local",
    "moduleId": "module_26",
    "lessonHint": "0",
    "title": "O sinal é rápido, mas as fontes se misturam",
    "prompt": "O EEG detecta uma mudança em milissegundos, porém várias fontes contribuem para o potencial registrado no couro cabeludo. Qual inferência respeita os limites do método?",
    "options": [
      "A origem anatômica fica precisa porque qualquer medida temporal rápida preserva a posição exata da fonte que a gerou.",
      "A localização da atividade não pode ser investigada de modo algum, mesmo com modelos de fonte e informação anatômica complementar.",
      "O registro identifica qual neurotransmissor foi liberado em cada sinapse porque potenciais elétricos carregam a assinatura química da molécula.",
      "O momento da mudança pode ser estimado com alta resolução, enquanto a origem espacial exige inferência e permanece menos determinada."
    ],
    "correct": 3,
    "optionFeedback": [
      "Confunde resolução temporal com resolução espacial.",
      "Substitui uma limitação por impossibilidade total; localização pode ser estimada, mas depende de modelos e hipóteses.",
      "Atribui ao EEG uma especificidade química que o sinal de campo não fornece.",
      "Esta opção distingue o que é medido diretamente no tempo do que precisa ser inferido no espaço."
    ],
    "explanation": "Todo método tem um perfil de resolução, e o do EEG é assimétrico: ótimo no tempo (capta mudanças em milissegundos), fraco no espaço. O potencial no couro cabeludo é a soma de muitas fontes, borrada pela condução através de crânio e tecido — daí localizar a origem ser um problema inverso: muitas configurações internas poderiam gerar o mesmo registro externo. Dá para estimar a fonte com modelos e anatomia, mas com incerteza. Medir quando com precisão não é medir onde com precisão.",
    "chain": [
      "atividade elétrica muda rapidamente",
      "EEG registra o momento com boa resolução",
      "fontes se somam no couro cabeludo",
      "origem espacial precisa ser inferida"
    ],
    "extend": {
      "q": "E se a pergunta fosse 'onde exatamente', e não 'quando'?",
      "a": "Aí o EEG seria a ferramenta errada, e algo como a fMRI — boa no espaço, lenta no tempo — encaixaria melhor. Nenhum método é completo: escolher o método é escolher em qual eixo (tempo ou espaço) você pode confiar. Combinar métodos de perfis opostos é como se cobre a lacuna de cada um."
    }
  }
];
