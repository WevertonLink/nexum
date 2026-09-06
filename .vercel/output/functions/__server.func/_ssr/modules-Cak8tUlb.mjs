//#region node_modules/.nitro/vite/services/ssr/assets/modules-Cak8tUlb.js
var mastery$3 = {
	comprehension: 70,
	recall: 70,
	contrast: 70,
	application: 60
};
var STAGE_1_MODULES = [
	{
		id: "module_01",
		stage: 1,
		number: 1,
		title: "O sistema nervoso como sistema biológico",
		shortTitle: "Sistema biológico",
		objective: "Compreender o sistema nervoso como tecido vivo organizado em níveis, não como um mapa de 'uma área para cada função'.",
		centralQuestion: "Como uma estrutura biológica composta por células consegue produzir percepção, movimento, memória e comportamento?",
		prerequisites: [],
		estimatedTime: {
			essential: 8,
			deepen: 6,
			questions: 5
		},
		concepts: [
			"nervous_system",
			"levels_of_analysis",
			"evidence_vs_hypothesis"
		],
		introduction: "Antes de nomear estruturas, precisamos de uma pergunta melhor do que 'qual parte faz o quê?'. Este módulo estabelece a escala em que vamos pensar: do íon à interação social, sem fingir que um nível explica automaticamente o outro.",
		blocks: [
			{
				id: "m01-q",
				kind: "question",
				body: "Como uma estrutura biológica composta por células consegue produzir percepção, movimento, memória e comportamento?"
			},
			{
				id: "m01-a",
				kind: "answer",
				title: "Resposta inicial",
				body: "Não porque existe uma parte do cérebro para cada função. Porque células especializadas organizam-se em circuitos e sistemas, em várias escalas, acopladas a um corpo e a um contexto."
			},
			{
				id: "m01-e",
				kind: "explain",
				title: "Organização em escalas",
				body: "Uma afirmação sobre [[levels_of_analysis|níveis de análise]] precisa declarar em que escala opera. Íons não 'são' decisões. Decisões não substituem canais. O salto indevido entre escalas é uma das fontes mais comuns de neuromitos.",
				conceptIds: ["levels_of_analysis"],
				level: "system"
			},
			{
				id: "m01-levels",
				kind: "diagram",
				title: "Sete níveis que não se fundem",
				body: "Molecular · celular · circuito · sistema · cognitivo · comportamental · social. Cada um responde a perguntas diferentes. Nenhum é 'mais verdadeiro' por ser menor.",
				diagram: "levels",
				conceptIds: ["levels_of_analysis"]
			},
			{
				id: "m01-bio",
				kind: "explain",
				title: "Tecido vivo, não hardware",
				body: "O [[nervous_system|sistema nervoso]] consome energia, depende de membranas, de glia, de sangue, de hormônios. Modelos de informação são úteis, mas o órgão não é um computador de silício. Quando o modelo ajudar, diremos que é um modelo.",
				conceptIds: ["nervous_system"],
				level: "system"
			},
			{
				id: "m01-recall",
				kind: "recall",
				title: "Pare por alguns segundos",
				body: "O que você acabou de estabelecer que a trilha inteira vai recusar? Tente dizer com suas palavras, sem olhar o bloco anterior."
			},
			{
				id: "m01-ev",
				kind: "limit",
				title: "Observado, inferido, hipotético",
				body: "Toda afirmação importante deve distinguir: o que foi observado, o que se interpreta, e o que ainda não se pode concluir. [[evidence_vs_hypothesis|Evidência versus hipótese]] é uma habilidade, não um detalhe acadêmico.",
				conceptIds: ["evidence_vs_hypothesis"],
				layer: 2
			},
			{
				id: "m01-adv",
				kind: "explain",
				title: "Por que isso importa agora",
				body: "Se começarmos localizando funções em áreas, cada módulo seguinte vai parecer uma lista. Se começarmos por mecanismos e níveis, cada módulo seguinte responde a uma pergunta que o anterior abriu.",
				layer: 3
			}
		],
		misconceptions: [{
			claim: "Existe uma parte do cérebro para cada função.",
			whyPlausible: "Lesões e exames mostram especialização, e mapas coloridos são fáceis de lembrar.",
			problem: "Especialização relativa não é exclusividade. Participação não é suficiência. Funções complexas são distribuídas.",
			better: "Redes e circuitos contribuem de modos distintos; localizar uma contribuição não esgota a função."
		}],
		integration: "Este módulo não ensina ainda o neurônio. Ensina a recusar o atalho. O próximo pergunta: que célula torna a sinalização possível?",
		relatedModules: [
			"module_02",
			"module_09",
			"module_10"
		],
		questions: [
			{
				id: "m01-q1",
				moduleId: "module_01",
				conceptIds: ["levels_of_analysis"],
				type: "misconception",
				difficulty: 1,
				prompt: "Qual formulação é mais cientificamente adequada?",
				options: [
					{
						id: "a",
						text: "Cada função humana tem uma área exclusiva responsável por ela."
					},
					{
						id: "b",
						text: "Funções podem ser descritas em vários níveis; uma estrutura pode participar sem ser suficiente."
					},
					{
						id: "c",
						text: "Se uma área acende no exame, ela é a causa da experiência."
					}
				],
				correctAnswer: "b",
				whyPlausible: "Mapas e cores sugerem um dicionário área–função.",
				misconception: "Localização absoluta.",
				explanation: "A opção B preserva especialização sem transformar participação em causa exclusiva. A opção C confunde correlação hemodinâmica com causalidade.",
				hint1: "Pense na diferença entre participar e ser suficiente.",
				hint2: "Um nível de descrição não substitui outro.",
				hint3: "A frase útil contém 'participa' e 'não é suficiente'.",
				errorKind: "scale"
			},
			{
				id: "m01-q2",
				moduleId: "module_01",
				conceptIds: ["evidence_vs_hypothesis"],
				type: "limit",
				difficulty: 2,
				prompt: "Se uma estrutura participa de um processo, podemos concluir que ela é suficiente para produzi-lo?",
				options: [{
					id: "a",
					text: "Sim, participação implica suficiência."
				}, {
					id: "b",
					text: "Não necessariamente. Participação não implica suficiência."
				}],
				correctAnswer: "b",
				explanation: "Esta pergunta de limite reaparece na trilha. É uma das defesas contra neuromitologia.",
				hint1: "Lesão que prejudica uma função não prova que só aquela estrutura a realiza.",
				hint2: "Pense em uma orquestra: tirar o oboé muda a peça; o oboé não é a sinfonia.",
				hint3: "A resposta correta recusa o salto.",
				errorKind: "causal"
			},
			{
				id: "m01-q3",
				moduleId: "module_01",
				conceptIds: ["nervous_system"],
				type: "recall",
				difficulty: 1,
				prompt: "Por que não basta tratar o sistema nervoso como um computador abstrato?",
				hint1: "O que um tecido vivo precisa que um diagrama de fluxo não precisa?",
				hint2: "Energia, membranas, glia, corpo.",
				hint3: "É biológico antes de ser 'informacional'.",
				correctAnswer: "open",
				modelAnswer: "Porque é tecido vivo: depende de energia, íons, células de suporte e do organismo. Modelos de informação ajudam, mas não substituem a biologia.",
				explanation: "O modelo computacional pode ser útil se for marcado como modelo. O erro é ontologizá-lo."
			},
			{
				id: "m01-q4",
				moduleId: "module_01",
				conceptIds: ["levels_of_analysis"],
				type: "application",
				difficulty: 2,
				prompt: "Alguém diz: 'ele gritou porque o sódio entrou no neurônio'. Qual é o problema principal dessa frase?",
				options: [
					{
						id: "a",
						text: "Sódio nunca entra em neurônios."
					},
					{
						id: "b",
						text: "Ela salta do nível molecular/celular para o comportamental como se fosse a mesma explicação."
					},
					{
						id: "c",
						text: "Gritos não envolvem o sistema nervoso."
					}
				],
				correctAnswer: "b",
				explanation: "Pode haver influxo de Na⁺ em muitos disparos; isso não constitui uma explicação do episódio social. É um erro de escala.",
				hint1: "A frase mistura dois níveis distantes.",
				hint2: "Não é que o sódio seja irrelevante em algum sentido físico.",
				hint3: "O problema é tratar um nível como causa completa de outro.",
				errorKind: "scale"
			}
		],
		summary: {
			shouldKnow: [
				"Explicar o que é um nível de análise e por que níveis não se substituem.",
				"Recusar o mapa 'uma área = uma função' como modelo final.",
				"Distinguir observado, inferido e hipotético."
			],
			acquiredConcepts: [
				"levels_of_analysis",
				"nervous_system",
				"evidence_vs_hypothesis"
			]
		},
		masteryCriteria: mastery$3,
		references: [{
			title: "Kandel et al., Principles of Neural Science",
			kind: "livro",
			note: "visão sistêmica e celular"
		}, {
			title: "Craver, Explaining the Brain",
			kind: "livro",
			note: "níveis e mecanismos"
		}],
		contentVersion: "1.0"
	},
	{
		id: "module_02",
		stage: 1,
		number: 2,
		title: "O neurônio",
		shortTitle: "Neurônio",
		objective: "Relacionar a forma do neurônio (dendritos, soma, axônio, terminal) à direção do fluxo de sinais.",
		centralQuestion: "Como a estrutura de uma célula permite receber e transmitir sinais?",
		prerequisites: ["module_01"],
		estimatedTime: {
			essential: 8,
			deepen: 6,
			questions: 5
		},
		concepts: [
			"neuron",
			"dendrite",
			"soma",
			"axon",
			"axon_terminal",
			"glia"
		],
		introduction: "Você já tem a pergunta da escala. Agora olhamos a célula que torna a sinalização elétrica e química possível. A forma não é enfeite: é restrição funcional.",
		blocks: [
			{
				id: "m02-q",
				kind: "question",
				body: "Como a estrutura de uma célula permite receber e transmitir sinais?"
			},
			{
				id: "m02-a",
				kind: "answer",
				title: "Resposta inicial",
				body: "O [[neuron|neurônio]] é polarizado: recebe em dendritos e soma, conduz pelo [[axon|axônio]], comunica no [[axon_terminal|terminal]]. Essa assimetria espacial é o começo da direção da informação.",
				conceptIds: ["neuron"]
			},
			{
				id: "m02-parts",
				kind: "mechanism",
				title: "Partes e papéis",
				conceptIds: [
					"dendrite",
					"soma",
					"axon",
					"axon_terminal"
				],
				steps: [
					{
						id: "d",
						title: "Dendritos",
						body: "Aumentam superfície de recepção. Entradas sinápticas chegam aqui com mais frequência."
					},
					{
						id: "s",
						title: "Soma",
						body: "Núcleo, metabolismo e parte da integração. Não é 'o neurônio inteiro'."
					},
					{
						id: "a",
						title: "Axônio",
						body: "Condução a distância. Diâmetro e mielina mudam a velocidade."
					},
					{
						id: "t",
						title: "Terminal",
						body: "Conversão de sinal elétrico em evento químico, na maioria das sinapses."
					}
				]
			},
			{
				id: "m02-glia",
				kind: "explain",
				title: "A glia não é cola",
				body: "[[glia|Células gliais]] mielinizam, sustentam metabolismo, participam de homeostase iônica e de respostas imunes. Ignorá-las empobrece qualquer modelo de condução ou de sinapse.",
				conceptIds: ["glia"],
				layer: 2
			},
			{
				id: "m02-recall",
				kind: "recall",
				body: "Se você desenhasse um neurônio agora, o que cada prolongamento estaria fazendo — não só como se chama?"
			},
			{
				id: "m02-div",
				kind: "explain",
				title: "Diversidade",
				body: "Não existe 'o' neurônio típico universal. Há células de projeção, interneurônios, células sensoriais. O esquema polarizado é um modelo de partida, não a fotografia de todas as células.",
				layer: 3
			}
		],
		misconceptions: [{
			claim: "O neurônio é um fio que leva eletricidade como cobre.",
			whyPlausible: "Falamos em 'impulsos' e desenhos escolares parecem cabos.",
			problem: "A condução é um evento de membrana, regenerativo, com metabolismo e polaridade química no terminal.",
			better: "É uma célula cuja membrana produz e propaga um sinal, e cujo terminal em geral libera transmissor."
		}],
		integration: "A forma aponta para a membrana: é nela que a diferença elétrica vai nascer. O próximo módulo pergunta de onde vem essa diferença.",
		relatedModules: [
			"module_03",
			"module_05",
			"module_06"
		],
		questions: [
			{
				id: "m02-q1",
				moduleId: "module_02",
				conceptIds: ["neuron"],
				type: "relation",
				difficulty: 1,
				prompt: "Qual sequência descreve melhor a polaridade típica de um neurônio de projeção?",
				options: [
					{
						id: "a",
						text: "Terminal → axônio → dendritos"
					},
					{
						id: "b",
						text: "Dendritos/soma recebem; axônio conduz; terminal comunica"
					},
					{
						id: "c",
						text: "O soma dispara luz que o axônio reflete"
					}
				],
				correctAnswer: "b",
				explanation: "A polaridade espacial é o primeiro modelo da direção do sinal.",
				hint1: "Onde costumam chegar as sinapses de entrada?",
				hint2: "O axônio é o caminho longo.",
				hint3: "O terminal é o fim daquele caminho."
			},
			{
				id: "m02-q2",
				moduleId: "module_02",
				conceptIds: ["axon_terminal"],
				type: "recall",
				difficulty: 1,
				prompt: "O que o terminal axônico permite que o axônio, sozinho, não realiza na sinapse química típica?",
				correctAnswer: "open",
				modelAnswer: "Converter o sinal elétrico em liberação química (em geral dependente de Ca²⁺) para influenciar outra célula.",
				explanation: "O axônio propaga; o terminal transduz.",
				hint1: "Pense em conversão de código, não em mais comprimento.",
				hint2: "Elétrico → químico.",
				hint3: "Vesículas e transmissor entram na história no terminal."
			},
			{
				id: "m02-q3",
				moduleId: "module_02",
				conceptIds: ["glia"],
				type: "misconception",
				difficulty: 2,
				prompt: "Qual afirmação sobre a glia é mais adequada?",
				options: [
					{
						id: "a",
						text: "É apenas enchimento entre neurônios."
					},
					{
						id: "b",
						text: "Participa de mielinização, suporte metabólico e homeostase, entre outras funções."
					},
					{
						id: "c",
						text: "Substitui os neurônios em todas as funções cognitivas."
					}
				],
				correctAnswer: "b",
				explanation: "Nem cola, nem protagonista exclusivo. Participação específica.",
				hint1: "O nome histórico 'glue' é o erro.",
				hint2: "Mielina é feita por glia.",
				hint3: "Escolha a participação concreta.",
				errorKind: "factual"
			},
			{
				id: "m02-q4",
				moduleId: "module_02",
				conceptIds: ["neuron"],
				type: "counterfactual",
				difficulty: 2,
				prompt: "Se um neurônio perdesse a polaridade espacial (sinapses de entrada e saída misturadas sem axônio definido), o que seria imediatamente prejudicado?",
				options: [
					{
						id: "a",
						text: "A possibilidade de conduzir um sinal a distância de forma dirigida"
					},
					{
						id: "b",
						text: "A existência de DNA no núcleo"
					},
					{
						id: "c",
						text: "A gravidade sobre o encéfalo"
					}
				],
				correctAnswer: "a",
				explanation: "A forma é restrição da direção. Sem ela, o modelo de 'receber aqui, enviar ali' desaba.",
				hint1: "O que a assimetria espacial garante?",
				hint2: "Não é o metabolismo básico.",
				hint3: "Condução dirigida a distância.",
				errorKind: "causal"
			}
		],
		summary: {
			shouldKnow: [
				"Nomear dendrito, soma, axônio e terminal pelo papel, não só pelo desenho.",
				"Incluir a glia no modelo de tecido nervoso.",
				"Tratar a polaridade como condição da comunicação a distância."
			],
			acquiredConcepts: [
				"neuron",
				"dendrite",
				"soma",
				"axon",
				"axon_terminal",
				"glia"
			]
		},
		masteryCriteria: mastery$3,
		references: [{
			title: "Kandel et al., Principles of Neural Science",
			kind: "livro"
		}, {
			title: "Purves et al., Neuroscience",
			kind: "livro"
		}],
		contentVersion: "1.0"
	},
	{
		id: "module_03",
		stage: 1,
		number: 3,
		title: "Membrana e potencial de repouso",
		shortTitle: "Potencial de repouso",
		objective: "Explicar de onde surge a diferença elétrica através da membrana, sem atribuí-la a um único íon ou à bomba como 'choque'.",
		centralQuestion: "De onde surge a diferença elétrica?",
		prerequisites: ["module_02"],
		estimatedTime: {
			essential: 10,
			deepen: 7,
			questions: 5
		},
		concepts: [
			"membrane",
			"ion_gradient",
			"sodium_potassium_pump",
			"membrane_potential",
			"resting_potential",
			"electrochemical_equilibrium"
		],
		introduction: "Até aqui, a célula tem forma. Agora precisamos da física da membrana: assimetrias de íons, permeabilidade seletiva e um potencial em repouso. Sem isso, o potencial de ação não tem palco.",
		blocks: [
			{
				id: "m03-q",
				kind: "question",
				body: "De onde surge a diferença elétrica entre os dois lados da membrana?"
			},
			{
				id: "m03-a",
				kind: "answer",
				title: "Resposta inicial",
				body: "De [[ion_gradient|gradientes iônicos]] mantidos a custo energético e da permeabilidade seletiva da [[membrane|membrana]]. O potencial não é um 'fluido elétrico' estocado no citoplasma.",
				conceptIds: ["ion_gradient", "membrane"]
			},
			{
				id: "m03-mech",
				kind: "mechanism",
				title: "O que precisa existir",
				steps: [
					{
						id: "g",
						title: "Assimetria",
						body: "Na⁺ mais fora, K⁺ mais dentro — energia potencial química."
					},
					{
						id: "p",
						title: "Permeabilidade",
						body: "No repouso, a membrana é mais permeável a K⁺ do que a Na⁺."
					},
					{
						id: "e",
						title: "Equilíbrio de um íon",
						body: "Cada íon tem um potencial de equilíbrio (Nernst). Não confundir com o potencial da célula."
					},
					{
						id: "r",
						title: "Repouso",
						body: "O potencial de repouso é um compromisso ponderado pelas permeabilidades, com contribuição da bomba."
					}
				],
				conceptIds: ["electrochemical_equilibrium", "resting_potential"]
			},
			{
				id: "m03-pump",
				kind: "explain",
				title: "O que a bomba faz — e o que não faz",
				body: "A [[sodium_potassium_pump|bomba Na⁺/K⁺]] restabelece gradientes. Ela não é o gerador instantâneo do potencial de ação. Confundi-las é um erro causal clássico.",
				conceptIds: ["sodium_potassium_pump"]
			},
			{
				id: "m03-recall",
				kind: "recall",
				body: "Se os canais de K⁺ de repouso deixassem de existir, o potencial da célula continuaria idêntico? Por quê?"
			},
			{
				id: "m03-goldman",
				kind: "explain",
				title: "Goldman, em uma frase",
				body: "O potencial da membrana é uma média ponderada dos potenciais de equilíbrio dos íons, pesos = permeabilidades. Mude a permeabilidade, e o potencial se move — essa será a lógica do módulo 4.",
				layer: 2,
				conceptIds: ["membrane_potential"]
			}
		],
		misconceptions: [{
			claim: "O interior é negativo só porque há proteínas negativas.",
			whyPlausible: "Há ânions orgânicos impermeáveis, e isso conta.",
			problem: "Sem gradientes e sem permeabilidades seletivas, essa observação não explica o valor do potencial nem sua dinâmica.",
			better: "O potencial resulta de assimetrias iônicas e de permeabilidades; ânions impermeáveis entram no quadro, mas não o esgotam."
		}],
		integration: "A membrana mantém diferenças. O próximo módulo pergunta o que acontece quando essas diferenças deixam de permanecer estáveis e a membrana muda rapidamente de estado.",
		relatedModules: ["module_04", "module_07"],
		questions: [
			{
				id: "m03-q1",
				moduleId: "module_03",
				conceptIds: ["resting_potential"],
				type: "recognition",
				difficulty: 1,
				prompt: "O potencial de repouso é melhor descrito como:",
				options: [
					{
						id: "a",
						text: "O equilíbrio exclusivo do sódio."
					},
					{
						id: "b",
						text: "Um compromisso determinado por gradientes e permeabilidades, próximo ao equilíbrio do potássio, mas não idêntico a ele."
					},
					{
						id: "c",
						text: "A voltagem da bomba disparando o tempo todo como um gerador."
					}
				],
				correctAnswer: "b",
				explanation: "Próximo ao K⁺, não idêntico. A bomba contribui, mas não 'é' o potencial instantâneo.",
				hint1: "Qual íon tem maior permeabilidade no repouso?",
				hint2: "Não escolha um único íon como dono do número.",
				hint3: "Compromisso, não identidade."
			},
			{
				id: "m03-q2",
				moduleId: "module_03",
				conceptIds: ["sodium_potassium_pump"],
				type: "misconception",
				difficulty: 2,
				prompt: "Qual papel da bomba é o mais preciso neste módulo?",
				options: [
					{
						id: "a",
						text: "Ela produz cada potencial de ação."
					},
					{
						id: "b",
						text: "Ela mantém os gradientes sem os quais as correntes de canal não se sustentam ao longo do tempo."
					},
					{
						id: "c",
						text: "Ela é irrelevante porque os canais fazem tudo."
					}
				],
				correctAnswer: "b",
				explanation: "Manutenção versus evento rápido: duas escalas temporais.",
				hint1: "ATP entra na história da manutenção.",
				hint2: "O evento de milissegundos é canal, não bomba.",
				hint3: "Gradientes, não o spike.",
				errorKind: "causal"
			},
			{
				id: "m03-q3",
				moduleId: "module_03",
				conceptIds: ["electrochemical_equilibrium"],
				type: "counterfactual",
				difficulty: 2,
				prompt: "Se a membrana se tornasse igualmente permeável a Na⁺ e K⁺ de repente, o potencial de repouso típico:",
				options: [
					{
						id: "a",
						text: "Permaneceria exatamente o mesmo, porque os gradientes não mudaram ainda."
					},
					{
						id: "b",
						text: "Deslocaria-se, porque o potencial depende das permeabilidades relativas, não só das concentrações."
					},
					{
						id: "c",
						text: "A célula explodiria imediatamente por falta de DNA."
					}
				],
				correctAnswer: "b",
				explanation: "Concentrações ainda estariam lá; os pesos da média mudaram. Esse é o germe do potencial de ação.",
				hint1: "Goldman: pesos = permeabilidades.",
				hint2: "O módulo 4 vai usar exatamente essa ideia.",
				hint3: "O potencial se move se a permeabilidade se move.",
				errorKind: "causal"
			},
			{
				id: "m03-q4",
				moduleId: "module_03",
				conceptIds: ["ion_gradient"],
				type: "recall",
				difficulty: 1,
				prompt: "Explique, sem consultar, de onde surge a diferença elétrica.",
				correctAnswer: "open",
				modelAnswer: "De assimetrias de concentração iônica mantidas a custo energético e da permeabilidade seletiva da membrana, que permitem fluxos líquidos até um potencial de compromisso.",
				explanation: "Se a resposta citar só 'proteínas negativas' ou só 'a bomba dispara', o modelo ainda está incompleto.",
				hint1: "Dois ingredientes: assimetria e seletividade.",
				hint2: "A bomba mantém; os canais deixam fluir.",
				hint3: "Potencial = compromisso."
			}
		],
		summary: {
			shouldKnow: [
				"Separar potencial de equilíbrio de um íon e potencial de repouso da célula.",
				"Dizer o que a bomba faz e o que ela não faz.",
				"Antecipar que mudar permeabilidade muda o potencial."
			],
			acquiredConcepts: [
				"membrane",
				"ion_gradient",
				"sodium_potassium_pump",
				"membrane_potential",
				"resting_potential",
				"electrochemical_equilibrium"
			]
		},
		masteryCriteria: mastery$3,
		references: [{
			title: "Hodgkin & Huxley, 1952 (base histórica)",
			kind: "artigo"
		}, {
			title: "Boron & Boulpaep, Medical Physiology",
			kind: "livro"
		}],
		contentVersion: "1.0"
	},
	{
		id: "module_04",
		stage: 1,
		number: 4,
		title: "Como o sinal elétrico se origina",
		shortTitle: "Potencial de ação",
		objective: "Compreender como alterações na membrana produzem o potencial de ação: limiar, Na⁺, despolarização, K⁺, repolarização, refratário, tudo-ou-nada.",
		centralQuestion: "O que acontece quando a diferença elétrica muda rapidamente?",
		prerequisites: ["module_02", "module_03"],
		estimatedTime: {
			essential: 10,
			deepen: 7,
			questions: 6
		},
		concepts: [
			"threshold",
			"depolarization",
			"sodium_channels",
			"repolarization",
			"potassium_channels",
			"hyperpolarization",
			"refractory_period",
			"all_or_none",
			"action_potential"
		],
		introduction: "Até aqui, você aprendeu que a membrana mantém diferenças de concentração entre os dois lados. Agora precisamos entender o que acontece quando essas diferenças deixam de permanecer estáveis e a membrana muda rapidamente de estado.",
		blocks: [
			{
				id: "m04-q",
				kind: "question",
				body: "Como uma célula consegue produzir um sinal elétrico?"
			},
			{
				id: "m04-a",
				kind: "answer",
				title: "Resposta inicial",
				body: "Abrindo, de forma dependente de voltagem, [[sodium_channels|canais de Na⁺]] quando o potencial se aproxima de um [[threshold|limiar]]. A entrada de Na⁺ despolariza mais, o que abre mais canais — um ciclo regenerativo chamado [[action_potential|potencial de ação]].",
				alt: "De outra maneira: o estímulo não 'injeta eletricidade' como um cabo. Ele muda a probabilidade de canais de Na⁺ se abrirem. Quando essa corrente vence as que puxam ao repouso, o evento se sustenta sozinho por uns instantes.",
				conceptIds: ["action_potential"]
			},
			{
				id: "m04-diag",
				kind: "diagram",
				title: "As fases, pausáveis",
				body: "Repouso → limiar → Na⁺ entra → despolarização → K⁺ e inativação de Na⁺ → repolarização → período refratário → retorno. Toque cada etapa.",
				diagram: "action_potential"
			},
			{
				id: "m04-mech",
				kind: "mechanism",
				title: "O que muda fisicamente",
				steps: [
					{
						id: "t",
						title: "Limiar",
						body: "Corrente de Na⁺ vence as correntes que puxam ao repouso."
					},
					{
						id: "na",
						title: "Despolarização",
						body: "Influxo de Na⁺ torna o interior menos negativo, eventualmente positivo."
					},
					{
						id: "in",
						title: "Inativação",
						body: "Canais de Na⁺ inativam; o ciclo positivo se encerra."
					},
					{
						id: "k",
						title: "Repolarização",
						body: "K⁺ sai por canais que se abriram com a despolarização."
					},
					{
						id: "r",
						title: "Refratário",
						body: "Enquanto Na⁺ está inativado, um novo spike é impossível ou difícil — e a propagação ganha direção."
					}
				]
			},
			{
				id: "m04-all",
				kind: "explain",
				title: "Tudo-ou-nada, com cuidado",
				body: "Uma vez no limiar, a amplitude do evento regenerativo não escala com o estímulo que o disparou. Isso não apaga potenciais graduados em dendritos. [[all_or_none|Tudo-ou-nada]] descreve o spike axônico clássico, não a vida inteira da célula.",
				conceptIds: ["all_or_none"]
			},
			{
				id: "m04-recall",
				kind: "recall",
				body: "Sem consultar: por que a bomba não é a causa imediata da fase ascendente?"
			},
			{
				id: "m04-hyp",
				kind: "explain",
				title: "Hiperpolarização pós-potencial",
				body: "Às vezes o potencial ultrapassa o repouso ([[hyperpolarization|hiperpolarização]]). Isso é um estado elétrico transitório, não um desligamento da célula.",
				conceptIds: ["hyperpolarization"],
				layer: 2
			}
		],
		misconceptions: [{
			claim: "O potencial de ação é a bomba ligando e desligando.",
			whyPlausible: "A bomba é famosa e envolve Na⁺ e K⁺, os mesmos íons do spike.",
			problem: "Escala temporal e mecanismo: o spike é canal dependente de voltagem; a bomba é manutenção.",
			better: "Canais de Na⁺ e K⁺ dependentes de voltagem geram o evento; a bomba preserva os gradientes."
		}],
		integration: "O sinal nasceu. Ainda não viajou. O módulo 5 pergunta como essa mudança chega ao final do axônio.",
		relatedModules: [
			"module_03",
			"module_05",
			"module_06"
		],
		questions: [
			{
				id: "m04-q1",
				moduleId: "module_04",
				conceptIds: ["action_potential", "sodium_channels"],
				type: "counterfactual",
				difficulty: 2,
				prompt: "Se a membrana não possuísse canais de Na⁺ dependentes de voltagem funcionais, o que aconteceria com a geração do potencial de ação clássico?",
				options: [
					{
						id: "a",
						text: "Nada: a bomba compensaria na hora."
					},
					{
						id: "b",
						text: "O ciclo regenerativo da fase ascendente não se sustentaria."
					},
					{
						id: "c",
						text: "O neurônio se tornaria uma célula muscular."
					}
				],
				correctAnswer: "b",
				explanation: "Sem I_Na regenerativo, não há spike clássico. Há outros eventos elétricos possíveis, mas não esse mecanismo.",
				hint1: "Qual corrente sobe a fase ascendente?",
				hint2: "A bomba não substitui o canal na milissegundo.",
				hint3: "Sem Na⁺ voltage-gated, sem ciclo positivo.",
				errorKind: "causal"
			},
			{
				id: "m04-q2",
				moduleId: "module_04",
				conceptIds: ["refractory_period"],
				type: "relation",
				difficulty: 2,
				prompt: "O período refratário importa para a propagação porque:",
				options: [
					{
						id: "a",
						text: "Impede que o trecho recém-ativo seja imediatamente reexcitado, contribuindo para a direção do sinal."
					},
					{
						id: "b",
						text: "É o momento em que a dopamina é liberada no axônio."
					},
					{
						id: "c",
						text: "Apaga a memória da pessoa."
					}
				],
				correctAnswer: "a",
				explanation: "Inativação de Na⁺ + condutância de K⁺ = janela em que um novo spike falha. Isso dá seta ao avanço.",
				hint1: "Pense no trecho que acabou de disparar.",
				hint2: "Ele pode ser reexcitado imediatamente?",
				hint3: "Direção, não humor."
			},
			{
				id: "m04-q3",
				moduleId: "module_04",
				conceptIds: ["all_or_none"],
				type: "misconception",
				difficulty: 2,
				prompt: "Tudo-ou-nada significa que:",
				options: [
					{
						id: "a",
						text: "Neurônios não têm nenhum sinal graduado."
					},
					{
						id: "b",
						text: "O evento regenerativo axônico clássico, uma vez no limiar, não escala sua amplitude com a força do estímulo disparador."
					},
					{
						id: "c",
						text: "A pessoa ou está 100% atenta ou 0%."
					}
				],
				correctAnswer: "b",
				explanation: "EPSPs são graduados. O erro é expandir a propriedade do spike para toda a fisiologia e para a psicologia.",
				hint1: "Qual evento exatamente é tudo-ou-nada?",
				hint2: "Dendritos ainda somam entradas graduadas.",
				hint3: "Spike axônico, não a vida mental.",
				errorKind: "generalization"
			},
			{
				id: "m04-q4",
				moduleId: "module_04",
				conceptIds: ["action_potential"],
				type: "recall",
				difficulty: 2,
				prompt: "Reconstrua as fases do potencial de ação a partir do limiar.",
				correctAnswer: "open",
				modelAnswer: "Limiar → abertura de canais de Na⁺ e influxo → despolarização → inativação de Na⁺ e abertura de K⁺ → repolarização → período refratário → retorno ao repouso (às vezes com hiperpolarização).",
				explanation: "A ordem é o mecanismo. Se inverter Na⁺ e K⁺, o modelo quebra.",
				hint1: "Quem sobe? Quem desce?",
				hint2: "Na⁺ depois inativa; K⁺ contribui para descer.",
				hint3: "Termine no refratário."
			},
			{
				id: "m04-q5",
				moduleId: "module_04",
				conceptIds: ["repolarization"],
				type: "recognition",
				difficulty: 1,
				prompt: "A repolarização imediata deve-se principalmente a:",
				options: [
					{
						id: "a",
						text: "A bomba desligar o neurônio."
					},
					{
						id: "b",
						text: "Inativação dos canais de Na⁺ e efluxo de K⁺."
					},
					{
						id: "c",
						text: "Entrada de neurotransmissor no axônio."
					}
				],
				correctAnswer: "b",
				explanation: "De novo a distinção manutenção versus evento.",
				hint1: "Milissegundos, não minutos.",
				hint2: "Canais, não ATPase como causa imediata.",
				hint3: "Na⁺ inativa, K⁺ sai.",
				errorKind: "causal"
			}
		],
		summary: {
			shouldKnow: [
				"Reconstruir o ciclo Na⁺/K⁺ do spike.",
				"Explicar limiar, refratário e tudo-ou-nada sem expandi-los indevidamente.",
				"Separar bomba e canais no tempo."
			],
			acquiredConcepts: [
				"threshold",
				"depolarization",
				"sodium_channels",
				"repolarization",
				"potassium_channels",
				"hyperpolarization",
				"refractory_period",
				"all_or_none",
				"action_potential"
			]
		},
		masteryCriteria: mastery$3,
		references: [{
			title: "Hodgkin & Huxley, 1952",
			kind: "artigo"
		}, {
			title: "Kandel et al., Principles of Neural Science",
			kind: "livro"
		}],
		contentVersion: "1.0"
	},
	{
		id: "module_05",
		stage: 1,
		number: 5,
		title: "Como o sinal chega ao fim do axônio",
		shortTitle: "Propagação",
		objective: "Explicar a propagação como reconstrução sucessiva do potencial de ação, e o papel de mielina e nódulos.",
		centralQuestion: "Como essa mudança chega ao final do axônio?",
		prerequisites: ["module_04"],
		estimatedTime: {
			essential: 8,
			deepen: 6,
			questions: 5
		},
		concepts: [
			"propagation",
			"myelin",
			"nodes_of_ranvier",
			"saltatory_conduction"
		],
		introduction: "O potencial de ação é um evento local de membrana. Se ficasse no ponto em que nasceu, o terminal nunca ficaria sabendo. Este módulo trata do deslocamento — sem o mito do fio de cobre.",
		blocks: [
			{
				id: "m05-q",
				kind: "question",
				body: "Como um evento de membrana em um ponto influencia o ponto vizinho?"
			},
			{
				id: "m05-a",
				kind: "answer",
				body: "Correntes locais despolarizam o trecho adjacente até o limiar, e o spike é reconstruído. [[propagation|Propagação]] é regeneração em série, não um elétron viajando intacto pelo axoplasma.",
				conceptIds: ["propagation"]
			},
			{
				id: "m05-my",
				kind: "explain",
				title: "Mielina muda o cabo",
				body: "[[myelin|Mielina]] aumenta resistência transmembrana e reduz capacitância nos internódulos. O sinal regenera nos [[nodes_of_ranvier|nódulos de Ranvier]], ricos em canais de Na⁺ — [[saltatory_conduction|condução saltatória]].",
				conceptIds: [
					"myelin",
					"nodes_of_ranvier",
					"saltatory_conduction"
				]
			},
			{
				id: "m05-mech",
				kind: "mechanism",
				title: "O que a mielina não é",
				steps: [
					{
						id: "n",
						title: "Não é mágica",
						body: "Não 'acelera eletricidade' como slogan. Altera propriedades de cabo."
					},
					{
						id: "s",
						title: "Salto",
						body: "O 'salto' é o padrão de regeneração nodal, não um íon teletransportado."
					},
					{
						id: "d",
						title: "Desmielinização",
						body: "Pode falhar a chegada a tempo, ou falhar de vez — consequência clínica real."
					}
				]
			},
			{
				id: "m05-recall",
				kind: "recall",
				body: "Por que o período refratário, visto no módulo 4, ajuda o sinal a não ficar ecoando no mesmo ponto?"
			},
			{
				id: "m05-speed",
				kind: "explain",
				title: "Velocidade",
				body: "Diâmetro maior e mielina aumentam velocidade. Fibras diferentes servem demandas diferentes (dor lenta versus propriocepção rápida, em linhas gerais). Não transforme isso em hierarquia moral de 'fibras melhores'.",
				layer: 2
			}
		],
		misconceptions: [{
			claim: "O axônio é um fio; a corrente segue pelo interior como em cobre.",
			whyPlausible: "A analogia elétrica é tentadora e parcialmente útil.",
			problem: "O evento é transmembrana e regenerativo. O interior participa de correntes locais, mas o 'sinal' não é um elétron livre viajando a cabo intacto.",
			better: "Modelo de cabo ativo: trechos de membrana reconstroem o spike."
		}],
		integration: "O spike chegou ao terminal. Surge a pergunta: como esse sinal atravessa o espaço entre duas células?",
		relatedModules: ["module_04", "module_06"],
		questions: [
			{
				id: "m05-q1",
				moduleId: "module_05",
				conceptIds: ["propagation"],
				type: "recognition",
				difficulty: 1,
				prompt: "Propagação axônica é melhor descrita como:",
				options: [
					{
						id: "a",
						text: "Um elétron único viajando pelo citoplasma até o terminal."
					},
					{
						id: "b",
						text: "Reconstrução sucessiva do potencial de ação ao longo da membrana."
					},
					{
						id: "c",
						text: "A bomba empurrando cargas como uma mangueira."
					}
				],
				correctAnswer: "b",
				explanation: "Regeneração em série. Essa frase deve sobreviver a qualquer analogia.",
				hint1: "O spike é um evento de membrana.",
				hint2: "O trecho vizinho precisa chegar ao limiar.",
				hint3: "Reconstrução, não viagem de um elétron."
			},
			{
				id: "m05-q2",
				moduleId: "module_05",
				conceptIds: ["saltatory_conduction"],
				type: "misconception",
				difficulty: 2,
				prompt: "Condução saltatória significa que:",
				options: [
					{
						id: "a",
						text: "O potencial de ação é regenerado nos nódulos, avançando de nódulo a nódulo."
					},
					{
						id: "b",
						text: "Íons saltam no ar entre neurônios distantes."
					},
					{
						id: "c",
						text: "A mielina é desnecessária se a pessoa se concentrar."
					}
				],
				correctAnswer: "a",
				explanation: "Literalizar o salto é o erro. Nódulos são o lugar da regeneração.",
				hint1: "Onde estão os canais de Na⁺ densos no axônio mielinizado?",
				hint2: "Internódulo versus nódulo.",
				hint3: "Regeneração nodal.",
				errorKind: "language"
			},
			{
				id: "m05-q3",
				moduleId: "module_05",
				conceptIds: ["myelin"],
				type: "counterfactual",
				difficulty: 2,
				prompt: "Se os nódulos de Ranvier perdessem os canais de Na⁺ dependentes de voltagem, a condução saltatória:",
				options: [
					{
						id: "a",
						text: "Continuaria igual, porque a mielina basta."
					},
					{
						id: "b",
						text: "Falharia a regeneração nodal, comprometendo a chegada fidedigna do sinal."
					},
					{
						id: "c",
						text: "O dendrito assumiria a condução."
					}
				],
				correctAnswer: "b",
				explanation: "Mielina sem regeneração não é o mecanismo saltatório.",
				hint1: "O que o nódulo faz que o internódulo não faz?",
				hint2: "Spike precisa de I_Na.",
				hint3: "Sem canal nodal, sem regeneração.",
				errorKind: "causal"
			},
			{
				id: "m05-q4",
				moduleId: "module_05",
				conceptIds: ["propagation"],
				type: "recall",
				difficulty: 1,
				prompt: "Por que o modelo do fio de cobre é insuficiente?",
				correctAnswer: "open",
				modelAnswer: "Porque o sinal é um evento regenerativo de membrana, dependente de canais, e não uma corrente metálica contínua pelo interior da célula.",
				explanation: "A analogia pode introduzir o conceito de cabo; não pode ser o modelo final.",
				hint1: "Onde está o evento: interior ou membrana?",
				hint2: "Canais.",
				hint3: "Regeneração."
			}
		],
		summary: {
			shouldKnow: [
				"Descrever propagação como regeneração.",
				"Explicar mielina e nódulos sem literalizar o salto.",
				"Relacionar refratário à direção."
			],
			acquiredConcepts: [
				"propagation",
				"myelin",
				"nodes_of_ranvier",
				"saltatory_conduction"
			]
		},
		masteryCriteria: mastery$3,
		references: [{
			title: "Waxman, Clinical neuroanatomy of conduction",
			kind: "revisao"
		}, {
			title: "Kandel et al.",
			kind: "livro"
		}],
		contentVersion: "1.0"
	},
	{
		id: "module_06",
		stage: 1,
		number: 6,
		title: "A sinapse",
		shortTitle: "Sinapse",
		objective: "Reconstruir a cadeia do potencial no terminal até o receptor, com o Ca²⁺ no centro da liberação.",
		centralQuestion: "Como esse sinal consegue atravessar o espaço entre duas células?",
		prerequisites: ["module_04", "module_05"],
		estimatedTime: {
			essential: 10,
			deepen: 6,
			questions: 6
		},
		concepts: [
			"synapse",
			"calcium_channels",
			"vesicles",
			"neurotransmitter",
			"synaptic_cleft",
			"receptor"
		],
		introduction: "Agora que sabemos como o potencial de ação chega ao terminal axônico, surge uma pergunta: como esse sinal influencia outra célula? Na maior parte das sinapses centrais, a resposta é química.",
		blocks: [
			{
				id: "m06-q",
				kind: "question",
				body: "Qual etapa depende diretamente da entrada de Ca²⁺ no terminal?"
			},
			{
				id: "m06-a",
				kind: "answer",
				body: "A fusão das [[vesicles|vesículas]] e a liberação de [[neurotransmitter|neurotransmissor]] na [[synaptic_cleft|fenda]]. O spike pode chegar e, sem Ca²⁺, a mensagem química não sai.",
				conceptIds: ["calcium_channels", "vesicles"]
			},
			{
				id: "m06-diag",
				kind: "diagram",
				title: "Cadeia da sinapse química",
				diagram: "synapse",
				body: "Potencial de ação → terminal → canais de Ca²⁺ → entrada de Ca²⁺ → vesícula → fusão → transmissor → receptor."
			},
			{
				id: "m06-mech",
				kind: "mechanism",
				title: "Passo a passo",
				steps: [
					{
						id: "1",
						title: "O potencial chega ao terminal",
						body: "Despolarização da membrana pré-sináptica."
					},
					{
						id: "2",
						title: "Canais de Ca²⁺ se abrem",
						body: "Dependentes de voltagem, no terminal."
					},
					{
						id: "3",
						title: "Ca²⁺ entra",
						body: "O íon é o acoplamento eletroquímico."
					},
					{
						id: "4",
						title: "Vesículas liberam transmissor",
						body: "Fusão dependente de Ca²⁺."
					},
					{
						id: "5",
						title: "O transmissor encontra receptores",
						body: "O efeito ainda não está decidido: depende do receptor."
					}
				],
				conceptIds: ["synapse"]
			},
			{
				id: "m06-nt",
				kind: "explain",
				title: "O transmissor não é um personagem",
				body: "A molécula na fenda não 'é' uma emoção. Ela é um ligante. O próximo módulo mostra que o [[receptor|receptor]] define o tipo de efeito.",
				conceptIds: ["neurotransmitter", "receptor"]
			},
			{
				id: "m06-recall",
				kind: "recall",
				body: "Sem consultar o conteúdo: explique por que a entrada de Ca²⁺ no terminal axônico favorece a liberação de neurotransmissores."
			},
			{
				id: "m06-elec",
				kind: "explain",
				title: "Também existem sinapses elétricas",
				body: "Junções comunicantes permitem fluxo iônico direto. São importantes em certos circuitos. O modelo químico não é o único; é o mais didático para a cadeia que estamos construindo.",
				layer: 3
			}
		],
		misconceptions: [{
			claim: "O potencial de ação atravessa a fenda como eletricidade contínua.",
			whyPlausible: "A palavra 'impulso' sugere um fio.",
			problem: "Na sinapse química há transdução: elétrico → químico → (de novo) elétrico ou metabólico na célula seguinte.",
			better: "O Ca²⁺ acopla despolarização à exocitose; o receptor lê o ligante."
		}],
		integration: "Você já estudou algo relacionado: receptores vão detalhar o 'e depois?'. Relaciona-se também com dopamina (módulo 14) — outra molécula, mesmos cuidados.",
		relatedModules: [
			"module_04",
			"module_07",
			"module_14"
		],
		questions: [
			{
				id: "m06-q1",
				moduleId: "module_06",
				conceptIds: ["calcium_channels"],
				type: "counterfactual",
				difficulty: 2,
				prompt: "Se a entrada de Ca²⁺ no terminal pré-sináptico fosse impedida, qual etapa seria diretamente afetada?",
				options: [
					{
						id: "a",
						text: "A chegada do potencial de ação ao axônio, em geral"
					},
					{
						id: "b",
						text: "A fusão vesicular e a liberação de transmissor"
					},
					{
						id: "c",
						text: "A transcrição do DNA no soma, no mesmo milissegundo"
					}
				],
				correctAnswer: "b",
				explanation: "O spike pode ocorrer; a exocitose falha. Esse contrafactual é o coração do módulo.",
				hint1: "O Ca²⁺ acopla o quê a quê?",
				hint2: "Despolarização do terminal → ? → transmissor na fenda.",
				hint3: "Fusão vesicular.",
				errorKind: "causal"
			},
			{
				id: "m06-q2",
				moduleId: "module_06",
				conceptIds: ["neurotransmitter"],
				type: "misconception",
				difficulty: 1,
				prompt: "Qual afirmação descreve melhor um neurotransmissor?",
				options: [
					{
						id: "a",
						text: "Uma molécula que é, por si só, uma emoção."
					},
					{
						id: "b",
						text: "Um ligante cujo efeito depende do receptor, do circuito e do contexto."
					},
					{
						id: "c",
						text: "Um elétron que salta a fenda."
					}
				],
				correctAnswer: "b",
				explanation: "Anti-personificação. O módulo 7 aprofunda o receptor.",
				hint1: "A mesma molécula pode ter efeitos opostos.",
				hint2: "Quem define o efeito imediato?",
				hint3: "O receptor.",
				errorKind: "generalization"
			},
			{
				id: "m06-q3",
				moduleId: "module_06",
				conceptIds: ["calcium_channels"],
				type: "recall",
				difficulty: 2,
				prompt: "Por que o Ca²⁺ é importante na liberação de neurotransmissores?",
				correctAnswer: "open",
				modelAnswer: "Porque a despolarização do terminal abre canais de Ca²⁺ dependentes de voltagem; a entrada de Ca²⁺ é o sinal que favorece a fusão das vesículas e a liberação do transmissor.",
				explanation: "Se a resposta pular para 'prazer' ou 'emoção', houve salto de nível.",
				hint1: "O que acontece quando o potencial de ação chega ao terminal?",
				hint2: "Qual íon entra através de canais dependentes de voltagem?",
				hint3: "Ca²⁺ → fusão vesicular."
			},
			{
				id: "m06-q4",
				moduleId: "module_06",
				conceptIds: ["synapse"],
				type: "application",
				difficulty: 2,
				prompt: "Uma toxina impede a fusão das vesículas. O axônio ainda dispara. O que você espera na célula seguinte, na sinapse química típica?",
				options: [
					{
						id: "a",
						text: "Transmissão química drasticamente reduzida ou ausente."
					},
					{
						id: "b",
						text: "Potenciais de ação mais rápidos no axônio pré-sináptico."
					},
					{
						id: "c",
						text: "Aumento automático de mielina."
					}
				],
				correctAnswer: "a",
				explanation: "Dissociação clássica: spike presente, mensagem química ausente.",
				hint1: "Qual etapa a toxina corta?",
				hint2: "O spike não é suficiente sem exocitose.",
				hint3: "A pós-sináptica não recebe o ligante.",
				errorKind: "causal"
			}
		],
		summary: {
			shouldKnow: [
				"Reconstruir a cadeia até o receptor.",
				"Isolar o Ca²⁺ como acoplamento da liberação.",
				"Recusar a personificação do transmissor."
			],
			acquiredConcepts: [
				"synapse",
				"calcium_channels",
				"vesicles",
				"neurotransmitter",
				"synaptic_cleft",
				"receptor"
			]
		},
		masteryCriteria: mastery$3,
		references: [{
			title: "Südhof, neurotransmitter release",
			kind: "revisao"
		}, {
			title: "Kandel et al.",
			kind: "livro"
		}],
		contentVersion: "1.0"
	},
	{
		id: "module_07",
		stage: 1,
		number: 7,
		title: "Receptores e efeitos sinápticos",
		shortTitle: "Receptores",
		objective: "Distinguir ionotrópicos e metabotrópicos, excitação, inibição, modulação, recaptação e degradação — sempre pelo receptor, não pelo nome da molécula.",
		centralQuestion: "O que o ligante faz depois de chegar — e quem decide o efeito?",
		prerequisites: ["module_06"],
		estimatedTime: {
			essential: 9,
			deepen: 7,
			questions: 5
		},
		concepts: [
			"receptor",
			"ionotropic",
			"metabotropic",
			"excitation",
			"inhibition",
			"modulation",
			"reuptake"
		],
		introduction: "A fenda já tem transmissor. Se pararmos aqui, a tentação é nomear a molécula como se ela fosse o efeito. Este módulo desloca o centro para o receptor e para o destino do ligante.",
		blocks: [
			{
				id: "m07-q",
				kind: "question",
				body: "Por que a mesma molécula pode excitar uma célula e inibir outra?"
			},
			{
				id: "m07-a",
				kind: "answer",
				body: "Porque o [[receptor|receptor]] — e o íon ou a cascata que ele aciona — define o efeito. O nome do transmissor não basta.",
				conceptIds: ["receptor"]
			},
			{
				id: "m07-ion",
				kind: "explain",
				title: "Dois grandes modos",
				body: "[[ionotropic|Ionotrópico]]: canal gated por ligante, efeito relativamente rápido no potencial. [[metabotropic|Metabotrópico]]: vias intracelulares, frequentemente mais lentas e amplas, centrais à [[modulation|modulação]].",
				conceptIds: [
					"ionotropic",
					"metabotropic",
					"modulation"
				]
			},
			{
				id: "m07-ei",
				kind: "explain",
				title: "Excitação e inibição são relativas",
				body: "[[excitation|Excitação]] aproxima do limiar; [[inhibition|inibição]] reduz a probabilidade de disparo (por potencial ou por condutância). Nenhuma das duas é um comportamento. Inibição é cálculo, não 'desligar o cérebro'.",
				conceptIds: ["excitation", "inhibition"]
			},
			{
				id: "m07-end",
				kind: "mechanism",
				title: "Como o sinal termina",
				steps: [
					{
						id: "r",
						title: "Recaptação",
						body: "Transportadores na pré-sináptica ou na glia."
					},
					{
						id: "d",
						title: "Degradação",
						body: "Enzimas na fenda ou na célula."
					},
					{
						id: "f",
						title: "Difusão",
						body: "O ligante se vai. A geometria importa."
					}
				],
				conceptIds: ["reuptake"]
			},
			{
				id: "m07-recall",
				kind: "recall",
				body: "Complete: o efeito de um transmissor não está escrito no nome da molécula, está escrito no…"
			},
			{
				id: "m07-pharm",
				kind: "explain",
				title: "Fármacos mudam temporalidade",
				body: "Bloquear recaptação não 'cria felicidade'. Muda quanto tempo o ligante permanece disponível. O efeito clínico, quando existe, atravessa circuitos, tempo e contexto — e não autoriza diagnóstico por este app.",
				layer: 2
			}
		],
		misconceptions: [{
			claim: "O transmissor determina o efeito; o receptor é detalhe.",
			whyPlausible: "Falamos 'gabaérgico' e 'glutamatérgico' como se o nome bastasse.",
			problem: "Há receptores com ações distintas para o mesmo ligante. A abreviação didática vira erro se for ontologizada.",
			better: "Pergunte sempre: qual receptor, em qual célula, em qual circuito."
		}],
		integration: "Com receptores, o neurônio pode ser excitado, inibido ou modulado. O módulo 8 pergunta como isso vira um circuito.",
		relatedModules: [
			"module_06",
			"module_08",
			"module_14"
		],
		questions: [
			{
				id: "m07-q1",
				moduleId: "module_07",
				conceptIds: ["receptor"],
				type: "recognition",
				difficulty: 1,
				prompt: "O efeito imediato de um neurotransmissor depende principalmente:",
				options: [
					{
						id: "a",
						text: "Do nome popular da molécula ('felicidade', 'medo')."
					},
					{
						id: "b",
						text: "Do receptor e do contexto celular em que ele está."
					},
					{
						id: "c",
						text: "Do hemisfério cerebral em que a pessoa 'é mais forte'."
					}
				],
				correctAnswer: "b",
				explanation: "Regra de ouro da etapa 1, que a etapa 2 vai reutilizar na dopamina.",
				hint1: "A mesma molécula, dois efeitos.",
				hint2: "Quem transduz a ligação?",
				hint3: "Receptor."
			},
			{
				id: "m07-q2",
				moduleId: "module_07",
				conceptIds: ["metabotropic"],
				type: "relation",
				difficulty: 2,
				prompt: "Receptores metabotrópicos são especialmente importantes para:",
				options: [
					{
						id: "a",
						text: "Apenas o potencial de ação no nódulo de Ranvier."
					},
					{
						id: "b",
						text: "Modulação de estado, ganho e, frequentemente, efeitos mais lentos."
					},
					{
						id: "c",
						text: "Substituir a mielina."
					}
				],
				correctAnswer: "b",
				explanation: "Não são um luxo avançado. São parte do cálculo de circuitos reais.",
				hint1: "Pense em segundos a minutos, não só em 1 ms.",
				hint2: "Cascata, não necessariamente poro imediato.",
				hint3: "Modulação."
			},
			{
				id: "m07-q3",
				moduleId: "module_07",
				conceptIds: ["inhibition"],
				type: "misconception",
				difficulty: 2,
				prompt: "Inibição sináptica significa:",
				options: [
					{
						id: "a",
						text: "O cérebro desliga."
					},
					{
						id: "b",
						text: "Uma influência que reduz a probabilidade de disparo da célula-alvo — componente ativo do cálculo neural."
					},
					{
						id: "c",
						text: "A pessoa ficou triste."
					}
				],
				correctAnswer: "b",
				explanation: "Erro de escala clássico: inibição celular ≠ estado psicológico.",
				hint1: "É sobre a célula-alvo.",
				hint2: "Pode ser hiperpolarização ou shunt.",
				hint3: "Cálculo, não humor.",
				errorKind: "scale"
			},
			{
				id: "m07-q4",
				moduleId: "module_07",
				conceptIds: ["reuptake"],
				type: "application",
				difficulty: 2,
				prompt: "Um fármaco bloqueia a recaptação de um transmissor. Qual descrição é mais cuidadosa?",
				options: [
					{
						id: "a",
						text: "O fármaco fabrica a emoção correspondente à molécula."
					},
					{
						id: "b",
						text: "O fármaco altera a temporalidade e a disponibilidade do ligante na fenda; o efeito depende de circuitos e contexto."
					},
					{
						id: "c",
						text: "O fármaco prova que a pessoa tinha falta daquela molécula como causa única."
					}
				],
				correctAnswer: "b",
				explanation: "Mecanismo local ≠ etiologia de um transtorno. Este app não diagnostica.",
				hint1: "O que a recaptação faz no tempo do sinal?",
				hint2: "Disponibilidade na fenda.",
				hint3: "Não salte para a biografia da pessoa.",
				errorKind: "causal"
			}
		],
		summary: {
			shouldKnow: [
				"Deixar o receptor no centro do efeito.",
				"Distinguir ionotrópico e metabotrópico.",
				"Tratar inibição como cálculo e recaptação como temporalidade."
			],
			acquiredConcepts: [
				"receptor",
				"ionotropic",
				"metabotropic",
				"excitation",
				"inhibition",
				"modulation",
				"reuptake"
			]
		},
		masteryCriteria: mastery$3,
		references: [{
			title: "Purves et al., Neuroscience",
			kind: "livro"
		}, {
			title: "Nestler, Hyman & Malenka, Molecular Neuropharmacology",
			kind: "livro"
		}],
		contentVersion: "1.0"
	},
	{
		id: "module_08",
		stage: 1,
		number: 8,
		title: "Do neurônio ao circuito",
		shortTitle: "Integração",
		objective: "Mostrar como alterações microscópicas na membrana contribuem para a comunicação entre circuitos — fechando a etapa 1 sem saltar para o comportamento.",
		centralQuestion: "Como alterações microscópicas na membrana de um neurônio podem contribuir para a comunicação entre circuitos?",
		prerequisites: ["module_06", "module_07"],
		estimatedTime: {
			essential: 8,
			deepen: 6,
			questions: 5
		},
		concepts: ["integration", "circuit"],
		introduction: "Você tem peças: gradiente, spike, sinapse, receptor. Este módulo não acrescenta um transmissor novo. Integra. O neurônio soma. O circuito opera. O comportamento ainda não foi explicado — e essa recusa é o ponto.",
		blocks: [
			{
				id: "m08-q",
				kind: "question",
				body: "Uma sinapse isolada 'decide' o comportamento?"
			},
			{
				id: "m08-a",
				kind: "answer",
				body: "Não. O neurônio faz [[integration|integração]] espacial e temporal de muitas entradas. Um [[circuit|circuito]] é a dinâmica de muitos neurônios. Comportamento é ainda outro nível.",
				conceptIds: ["integration", "circuit"]
			},
			{
				id: "m08-chain",
				kind: "mechanism",
				title: "A cadeia que você deve reconstruir",
				steps: [
					{
						id: "1",
						title: "Gradientes iônicos",
						body: "Energia potencial química."
					},
					{
						id: "2",
						title: "Potencial de membrana",
						body: "Compromisso de permeabilidades."
					},
					{
						id: "3",
						title: "Limiar e canais",
						body: "Na⁺ e K⁺ voltage-gated."
					},
					{
						id: "4",
						title: "Propagação",
						body: "Regeneração, mielina, nódulos."
					},
					{
						id: "5",
						title: "Terminal e Ca²⁺",
						body: "Acoplamento à exocitose."
					},
					{
						id: "6",
						title: "Receptor",
						body: "Efeito na célula seguinte."
					},
					{
						id: "7",
						title: "Integração e circuito",
						body: "Muitas células, uma operação."
					}
				]
			},
			{
				id: "m08-limit",
				kind: "limit",
				title: "O que esta etapa não concluiu",
				body: "Não concluímos o que é uma emoção, um hábito ou uma decisão. Concluímos o chão sobre o qual essas descrições podem ser construídas sem virar mágica."
			},
			{
				id: "m08-recall",
				kind: "recall",
				body: "Recite a cadeia da etapa 1 em voz alta. Onde você trava? Esse ponto volta na revisão."
			}
		],
		misconceptions: [{
			claim: "Já entendemos o comportamento, porque entendemos o neurônio.",
			whyPlausible: "A tentação reducionista: o menor nível parece o mais 'científico'.",
			problem: "É um erro de escala. O neurônio é necessário ao modelo, não suficiente para o fenômeno social.",
			better: "Levamos os mecanismos adiante como fundamento, não como substituto."
		}],
		integration: "A etapa 2 começa no circuito e recusa a ideia de que emoção é uma área. Os mecanismos celulares continuam valendo.",
		relatedModules: [
			"module_01",
			"module_09",
			"module_16"
		],
		questions: [
			{
				id: "m08-q1",
				moduleId: "module_08",
				conceptIds: ["integration"],
				type: "recognition",
				difficulty: 1,
				prompt: "Integração neuronal é:",
				options: [
					{
						id: "a",
						text: "Cada sinapse dispara sozinha o comportamento."
					},
					{
						id: "b",
						text: "A soma espacial e temporal de influências que molda o padrão de disparo."
					},
					{
						id: "c",
						text: "A união dos hemisférios pela força de vontade."
					}
				],
				correctAnswer: "b",
				explanation: "O neurônio é integrador, não relé de uma única entrada.",
				hint1: "Muitas entradas, uma decisão de disparo.",
				hint2: "Espaço e tempo.",
				hint3: "Soma, não relé."
			},
			{
				id: "m08-q2",
				moduleId: "module_08",
				conceptIds: ["circuit", "levels_of_analysis"],
				type: "limit",
				difficulty: 2,
				prompt: "Compreender a membrana de um neurônio autoriza explicar um hábito social?",
				options: [{
					id: "a",
					text: "Sim, porque tudo é sódio."
				}, {
					id: "b",
					text: "Não automaticamente. Há níveis intermediários (circuito, sistema, cognição, contexto) que não podem ser saltados."
				}],
				correctAnswer: "b",
				explanation: "Fecho da etapa 1. A etapa 4 vai repetir isso na intervenção.",
				hint1: "Volte ao módulo 1.",
				hint2: "Participação versus suficiência, agora entre níveis.",
				hint3: "Não pule a escada.",
				errorKind: "scale"
			},
			{
				id: "m08-q3",
				moduleId: "module_08",
				conceptIds: ["circuit"],
				type: "integration",
				difficulty: 2,
				prompt: "Relacione: alteração de permeabilidade na membrana → ? → comunicação entre células → ?",
				options: [
					{
						id: "a",
						text: "Potencial de ação / influência sináptica em um circuito"
					},
					{
						id: "b",
						text: "Felicidade / destreza"
					},
					{
						id: "c",
						text: "Hemisfério direito / hemisfério esquerdo"
					}
				],
				correctAnswer: "a",
				explanation: "A cadeia conceitual, não a cadeia de slogans.",
				hint1: "Use só o vocabulário da etapa 1.",
				hint2: "Spike, depois sinapse.",
				hint3: "Circuito no fim."
			},
			{
				id: "m08-q4",
				moduleId: "module_08",
				conceptIds: ["integration"],
				type: "recall",
				difficulty: 2,
				prompt: "Reconstrua, em uma cadeia, o caminho do gradiente iônico até o circuito.",
				correctAnswer: "open",
				modelAnswer: "Gradiente → potencial de membrana → limiar → potencial de ação → propagação → Ca²⁺ no terminal → transmissor → receptor → integração → circuito.",
				explanation: "Se faltar o Ca²⁺ ou o receptor, a cadeia está furada. Se aparecer 'medo' no meio, houve salto.",
				hint1: "Comece no íon, termine no conjunto de células.",
				hint2: "Não pule a sinapse.",
				hint3: "Ca²⁺ está no meio."
			}
		],
		summary: {
			shouldKnow: [
				"Recitar a cadeia da etapa 1.",
				"Definir integração e circuito.",
				"Recusar o salto ao comportamento."
			],
			acquiredConcepts: ["integration", "circuit"]
		},
		masteryCriteria: mastery$3,
		references: [{
			title: "Shepherd, The Synaptic Organization of the Brain",
			kind: "livro"
		}, {
			title: "Craver, Explaining the Brain",
			kind: "livro"
		}],
		contentVersion: "1.0"
	}
];
var mastery$2 = {
	comprehension: 70,
	recall: 70,
	contrast: 70,
	application: 60
};
var refs$2 = [
	{
		title: "Kandel et al., Principles of Neural Science",
		kind: "livro"
	},
	{
		title: "Sapolsky, Why Zebras Don't Get Ulcers",
		kind: "livro",
		note: "estresse como sistema, com ressalvas de divulgação"
	},
	{
		title: "LeDoux, Anxious / The Emotional Brain",
		kind: "livro",
		note: "ameaça ≠ sentimento de medo"
	}
];
function q$2(partial) {
	return partial;
}
var STAGE_2_MODULES = [
	{
		id: "module_09",
		stage: 2,
		number: 9,
		title: "Do circuito ao sistema",
		shortTitle: "Sistemas",
		objective: "Passar do circuito local a sistemas distribuídos sem localizar funções em um único centro.",
		centralQuestion: "Quando muitos circuitos trabalham juntos, o que muda na explicação?",
		prerequisites: ["module_08"],
		estimatedTime: {
			essential: 8,
			deepen: 6,
			questions: 5
		},
		concepts: ["distributed_systems", "circuit"],
		introduction: "A etapa 1 terminou no circuito. A tentação agora é apontar para uma região e chamá-la de função. Este módulo ensina a subir de escala sem voltar à frenologia.",
		blocks: [
			{
				id: "m09-q",
				kind: "question",
				body: "Se uma lesão em um território altera uma função, a função mora ali?"
			},
			{
				id: "m09-a",
				kind: "answer",
				body: "Não necessariamente. [[distributed_systems|Sistemas distribuídos]] admitem nós críticos sem exclusividade. Participação ≠ suficiência ≠ localização da experiência."
			},
			{
				id: "m09-e",
				kind: "explain",
				title: "O que um sistema acrescenta",
				body: "Um sistema tem dinâmica temporal própria, múltiplos efetores (neural, autonômico, endócrino) e dependência de contexto. Não é um circuito maior desenhado com a mesma caneta."
			},
			{
				id: "m09-r",
				kind: "recall",
				body: "Dê um exemplo em que remover uma peça muda a música sem que a peça seja a música."
			},
			{
				id: "m09-l",
				kind: "limit",
				title: "Neuroimagem",
				body: "Um mapa BOLD é consistente com participação em uma tarefa. Não é a fotografia de uma faculdade mental.",
				layer: 2
			}
		],
		misconceptions: [{
			claim: "Cada função tem um centro.",
			whyPlausible: "Nomes de áreas e cores de exames.",
			problem: "Erro de exclusividade.",
			better: "Redes com especialização relativa."
		}],
		integration: "O próximo módulo aplica isso à emoção — o exemplo mais maltratado pela divulgação.",
		relatedModules: [
			"module_01",
			"module_10",
			"module_16"
		],
		questions: [
			q$2({
				id: "m09-q1",
				moduleId: "module_09",
				conceptIds: ["distributed_systems"],
				type: "misconception",
				difficulty: 1,
				prompt: "Qual formulação é melhor?",
				options: [{
					id: "a",
					text: "A função X mora na área Y."
				}, {
					id: "b",
					text: "A área Y participa de redes envolvidas em X; isso não esgota X."
				}],
				correctAnswer: "b",
				explanation: "Participação sem exclusividade.",
				hint1: "Módulo 1, de novo.",
				hint2: "Suficiência.",
				hint3: "Redes.",
				errorKind: "scale"
			}),
			q$2({
				id: "m09-q2",
				moduleId: "module_09",
				conceptIds: ["distributed_systems"],
				type: "limit",
				difficulty: 2,
				prompt: "Uma região 'acende' em um exame durante medo relatado. Podemos concluir que a região é o medo?",
				options: [{
					id: "a",
					text: "Sim, ativação prova identidade."
				}, {
					id: "b",
					text: "Não. Ativação é correlata, lenta e ambígua; medo é um processo com vários componentes."
				}],
				correctAnswer: "b",
				explanation: "Correlação hemodinâmica ≠ identidade do fenômeno.",
				hint1: "O que o sinal BOLD mede?",
				hint2: "Proxy, não o sentimento.",
				hint3: "Não identifique.",
				errorKind: "causal"
			}),
			q$2({
				id: "m09-q3",
				moduleId: "module_09",
				conceptIds: ["circuit"],
				type: "recall",
				difficulty: 1,
				prompt: "O que um sistema tem que um único circuito local pode não ter?",
				correctAnswer: "open",
				modelAnswer: "Múltiplos territórios, efetores de temporalidades distintas (neural rápido, endócrino lento) e dependência de contexto corporal e social.",
				explanation: "Escala e tempo.",
				hint1: "Tempo e efetores.",
				hint2: "Hormônio versus sinapse.",
				hint3: "Distribuição."
			}),
			q$2({
				id: "m09-q4",
				moduleId: "module_09",
				conceptIds: ["distributed_systems"],
				type: "application",
				difficulty: 2,
				prompt: "Um título de divulgação diz: 'cientistas encontram a área da criatividade'. Qual pergunta você faz primeiro?",
				options: [{
					id: "a",
					text: "Qual tarefa, qual medida, qual rede, o que não se pode concluir?"
				}, {
					id: "b",
					text: "Como compro o curso para ativar essa área?"
				}],
				correctAnswer: "a",
				explanation: "Hábito científico contra o título.",
				hint1: "Tarefa e medida.",
				hint2: "Rede, não área.",
				hint3: "Limite.",
				errorKind: "generalization"
			})
		],
		summary: {
			shouldKnow: ["Definir sistema distribuído.", "Ler lesão e imagem com cautela causal."],
			acquiredConcepts: ["distributed_systems"]
		},
		masteryCriteria: mastery$2,
		references: refs$2,
		contentVersion: "1.0"
	},
	{
		id: "module_10",
		stage: 2,
		number: 10,
		title: "Emoção não é uma área",
		shortTitle: "Emoção",
		objective: "Tratar emoção como processo distribuído: avaliação, corpo, ação, sentimento, aprendizagem.",
		centralQuestion: "Se emoção não mora em um lugar, como descrevê-la sem esvaziá-la?",
		prerequisites: ["module_09"],
		estimatedTime: {
			essential: 8,
			deepen: 6,
			questions: 5
		},
		concepts: ["emotion_as_process"],
		introduction: "A divulgação ama centros emocionais. A trilha recusa. Emoção atravessa níveis: do autonômico ao significado social.",
		blocks: [
			{
				id: "m10-q",
				kind: "question",
				body: "O que está acontecendo em um episódio chamado 'medo' — e em quais níveis?"
			},
			{
				id: "m10-a",
				kind: "answer",
				body: "Pode haver avaliação de relevância, alterações corporais, tendência de ação, sentimento e aprendizagem. [[emotion_as_process|Emoção como processo]] não é um módulo que se liga."
			},
			{
				id: "m10-m",
				kind: "mechanism",
				title: "Componentes possíveis (não obrigatórios todos)",
				steps: [
					{
						id: "v",
						title: "Avaliação",
						body: "O que isso prediz para o organismo?"
					},
					{
						id: "b",
						title: "Corpo",
						body: "Autonômico, endócrino, interocepção."
					},
					{
						id: "a",
						title: "Ação",
						body: "Preparar, evitar, aproximar, congelar — tendências, não destino."
					},
					{
						id: "s",
						title: "Sentimento",
						body: "A experiência relatável, que não se reduz ao circuito."
					},
					{
						id: "l",
						title: "Aprendizagem",
						body: "O episódio atualiza previsões."
					}
				]
			},
			{
				id: "m10-r",
				kind: "recall",
				body: "Liste três componentes de um episódio afetivo sem usar o nome de uma área."
			},
			{
				id: "m10-c",
				kind: "limit",
				title: "Não há uma teoria única",
				body: "Há debates (construcionismo, teorias de emoções básicas, avaliação). O app não escolhe um vencedor: escolhe não localizar o fenômeno em um núcleo.",
				layer: 2
			}
		],
		misconceptions: [{
			claim: "Emoção é o sistema límbico.",
			whyPlausible: "O rótulo 'límbico' pegou.",
			problem: "O conjunto 'límbico' é historicamente instável e não é um órgão da emoção.",
			better: "Processos afetivos recrutam redes amplas, incluindo córtex, tronco e corpo."
		}],
		integration: "Agora podemos falar da amígdala com o vocabulário certo: participação, não identidade.",
		relatedModules: [
			"module_11",
			"module_15",
			"module_26"
		],
		questions: [
			q$2({
				id: "m10-q1",
				moduleId: "module_10",
				conceptIds: ["emotion_as_process"],
				type: "misconception",
				difficulty: 1,
				prompt: "Emoção é melhor descrita como:",
				options: [{
					id: "a",
					text: "Uma área que se liga."
				}, {
					id: "b",
					text: "Um processo com componentes avaliativos, corporais, de ação e, por vezes, de sentimento e aprendizagem."
				}],
				correctAnswer: "b",
				explanation: "Processo, não lugar.",
				hint1: "Vários componentes.",
				hint2: "Corpo incluso.",
				hint3: "Não uma área.",
				errorKind: "scale"
			}),
			q$2({
				id: "m10-q2",
				moduleId: "module_10",
				conceptIds: ["emotion_as_process"],
				type: "application",
				difficulty: 2,
				prompt: "Alguém treme antes de falar em público. Qual análise é mais precisa?",
				options: [{
					id: "a",
					text: "A área do medo ligou."
				}, {
					id: "b",
					text: "Há avaliação de ameaça social, ajustes corporais e, possivelmente, aprendizagem de episódios anteriores — sem que isso diagnostique um transtorno."
				}],
				correctAnswer: "b",
				explanation: "Níveis + limite clínico.",
				hint1: "Não nomeie uma área como causa.",
				hint2: "Inclua o social.",
				hint3: "Não diagnostique.",
				errorKind: "scale"
			}),
			q$2({
				id: "m10-q3",
				moduleId: "module_10",
				conceptIds: ["emotion_as_process"],
				type: "recall",
				difficulty: 1,
				prompt: "Por que 'emoção não é uma área' não significa 'emoção não é biológica'?",
				correctAnswer: "open",
				modelAnswer: "Porque processos distribuídos ainda são biológicos. Distribuído ≠ imaterial. O erro é a localização exclusiva, não a biologia.",
				explanation: "Anti-dualismo e anti-frenologia ao mesmo tempo.",
				hint1: "Distribuído ainda é corpo.",
				hint2: "Várias redes.",
				hint3: "Não é alma versus cérebro."
			}),
			q$2({
				id: "m10-q4",
				moduleId: "module_10",
				conceptIds: ["levels_of_analysis"],
				type: "limit",
				difficulty: 2,
				prompt: "Uma alteração autonômica prova o conteúdo da experiência relatada?",
				options: [{
					id: "a",
					text: "Sim, taquicardia é medo."
				}, {
					id: "b",
					text: "Não. O mesmo ajuste corporal entra em vários episódios; o conteúdo exige contexto e, quando houver, relato."
				}],
				correctAnswer: "b",
				explanation: "Fisiologia não é um dicionário de sentimentos.",
				hint1: "Correr também acelera o coração.",
				hint2: "Ambiguidade.",
				hint3: "Contexto.",
				errorKind: "causal"
			})
		],
		summary: {
			shouldKnow: ["Listar componentes de um episódio afetivo.", "Recusar o centro emocional."],
			acquiredConcepts: ["emotion_as_process"]
		},
		masteryCriteria: mastery$2,
		references: refs$2,
		contentVersion: "1.0"
	},
	{
		id: "module_11",
		stage: 2,
		number: 11,
		title: "Amígdala",
		shortTitle: "Amígdala",
		objective: "Situar a amígdala em circuitos de relevância e aprendizagem, sem transformá-la no medo.",
		centralQuestion: "O que a amígdala faz — e o que não podemos concluir daí?",
		prerequisites: ["module_10"],
		estimatedTime: {
			essential: 8,
			deepen: 6,
			questions: 5
		},
		concepts: ["amygdala"],
		introduction: "Depois de recusar o centro da emoção, podemos estudar um nó famoso com precisão. A amígdala é um conjunto de núcleos, não um botão.",
		blocks: [
			{
				id: "m11-q",
				kind: "question",
				body: "Se a amígdala participa de respostas a ameaça, ela 'é' o medo?"
			},
			{
				id: "m11-a",
				kind: "answer",
				body: "Não. A [[amygdala|amígdala]] participa de circuitos envolvidos na aprendizagem e no processamento de estímulos biologicamente relevantes. Em determinadas situações, sua atividade contribui para respostas associadas à ameaça."
			},
			{
				id: "m11-e",
				kind: "explain",
				title: "O que a evidência mostra",
				body: "Lesões alteram certos aprendizados de ameaça e a atribuição de relevância. Isso é participação. Pessoas com lesão ainda têm vida afetiva. Núcleos diferentes fazem coisas diferentes."
			},
			{
				id: "m11-r",
				kind: "recall",
				body: "Reescreva 'a amígdala é o medo' na formulação do manuscrito."
			},
			{
				id: "m11-d",
				kind: "explain",
				title: "Detalhe de núcleos",
				body: "Lateral, basal, central: portas de entrada, integração e saídas para hipotálamo e tronco, em linhas gerais. Útil no aprofundamento; não necessário para o modelo essencial.",
				layer: 2
			}
		],
		misconceptions: [{
			claim: "A amígdala é responsável pelo medo.",
			whyPlausible: "Resumo escolar e títulos.",
			problem: "Função única para estrutura complexa; confunde detecção de relevância, aprendizagem e experiência.",
			better: "Participa de circuitos de relevância e aprendizagem; o medo como experiência é mais amplo."
		}],
		integration: "Saídas da amígdala conversam com hipotálamo — próximo módulo — sem que isso funda as duas estruturas em 'o emocional'.",
		relatedModules: [
			"module_10",
			"module_12",
			"module_15",
			"module_26"
		],
		questions: [
			q$2({
				id: "m11-q1",
				moduleId: "module_11",
				conceptIds: ["amygdala"],
				type: "misconception",
				difficulty: 1,
				prompt: "Qual formulação é mais adequada?",
				options: [{
					id: "a",
					text: "A amígdala é responsável pelo medo."
				}, {
					id: "b",
					text: "A amígdala participa de circuitos envolvidos na aprendizagem e no processamento de estímulos biologicamente relevantes."
				}],
				correctAnswer: "b",
				explanation: "A frase-guia do projeto.",
				hint1: "Participe, não seja.",
				hint2: "Relevância, não só medo.",
				hint3: "A opção longa é a precisa.",
				errorKind: "language"
			}),
			q$2({
				id: "m11-q2",
				moduleId: "module_11",
				conceptIds: ["amygdala"],
				type: "limit",
				difficulty: 2,
				prompt: "Ativação da amígdala em fMRI durante uma foto prova que a pessoa sentiu medo?",
				options: [{
					id: "a",
					text: "Sim."
				}, {
					id: "b",
					text: "Não. O sinal não identifica o conteúdo subjetivo nem a suficiência da estrutura."
				}],
				correctAnswer: "b",
				explanation: "Mesmo nó, mesma cautela da imagem.",
				hint1: "Saliência também recruta.",
				hint2: "Proxy.",
				hint3: "Não prova o sentimento.",
				errorKind: "causal"
			}),
			q$2({
				id: "m11-q3",
				moduleId: "module_11",
				conceptIds: ["amygdala"],
				type: "recall",
				difficulty: 1,
				prompt: "O que uma lesão amigdaliana permite e o que não permite concluir?",
				correctAnswer: "open",
				modelAnswer: "Permite concluir que certos aprendizados e respostas dependem da integridade da estrutura. Não permite concluir que toda emoção ou todo medo 'são' a amígdala.",
				explanation: "Participação versus identidade.",
				hint1: "O que some versus o que resta.",
				hint2: "Aprendizado de ameaça.",
				hint3: "Não a vida afetiva inteira."
			}),
			q$2({
				id: "m11-q4",
				moduleId: "module_11",
				conceptIds: ["amygdala"],
				type: "application",
				difficulty: 2,
				prompt: "Um texto de autoajuda diz: 'desligue sua amígdala para negociar melhor'. O problema é:",
				options: [{
					id: "a",
					text: "A amígdala não existe."
				}, {
					id: "b",
					text: "Trata uma estrutura como interruptor de desempenho e ignora contexto, avaliação e limites da intervenção."
				}],
				correctAnswer: "b",
				explanation: "Prévia da etapa 4: não transformar anatomia em botão.",
				hint1: "Interruptor.",
				hint2: "Não se desliga como um app.",
				hint3: "Contexto.",
				errorKind: "generalization"
			})
		],
		summary: {
			shouldKnow: ["Usar a formulação de participação.", "Separar aprendizagem de ameaça e sentimento de medo."],
			acquiredConcepts: ["amygdala"]
		},
		masteryCriteria: mastery$2,
		references: refs$2,
		contentVersion: "1.0"
	},
	{
		id: "module_12",
		stage: 2,
		number: 12,
		title: "Hipotálamo",
		shortTitle: "Hipotálamo",
		objective: "Ver o hipotálamo como coordenador de homeostase e saídas autonômico-endócrinas, não como centro dos instintos.",
		centralQuestion: "Como o estado interno do corpo entra na história neural?",
		prerequisites: ["module_09"],
		estimatedTime: {
			essential: 7,
			deepen: 5,
			questions: 4
		},
		concepts: ["hypothalamus"],
		introduction: "Circuitos de avaliação precisam de um corpo que tenha temperatura, glicose, água, defesa. O hipotálamo é um dos grandes acopladores.",
		blocks: [
			{
				id: "m12-q",
				kind: "question",
				body: "Por que um 'mapa só de córtex' não explica fome, febre ou defesa?"
			},
			{
				id: "m12-a",
				kind: "answer",
				body: "Porque o [[hypothalamus|hipotálamo]] coordena funções homeostáticas e endócrinas: liga estado interno a padrões autonômicos e hormonais."
			},
			{
				id: "m12-e",
				kind: "explain",
				title: "Núcleos, não um botão",
				body: "Há especialização (térmico, hídrico, energético, defensivo, reprodutivo, entre outros). Chamar tudo de 'instinto' apaga essa partição e a regulação contextual."
			},
			{
				id: "m12-r",
				kind: "recall",
				body: "Em uma frase: o hipotálamo acopla o quê a quê?"
			},
			{
				id: "m12-l",
				kind: "connection",
				title: "Ponte para o HPA",
				body: "Certos núcleos hipotalâmicos iniciam a cascata que o módulo 13 chama de eixo HPA. Já separe: hipotálamo ≠ cortisol ≠ 'estresse'."
			}
		],
		misconceptions: [{
			claim: "O hipotálamo é o botão dos instintos.",
			whyPlausible: "Estimulação em animais produz padrões dramáticos.",
			problem: "Padrões de estimulação não são a ontologia da vida motivada humana.",
			better: "Coordenador de homeostase e de saídas fisiológicas, em diálogo com córtex, amígdala, tronco e órgãos."
		}],
		integration: "O eixo HPA é um efetor lento dessa coordenação.",
		relatedModules: ["module_11", "module_13"],
		questions: [
			q$2({
				id: "m12-q1",
				moduleId: "module_12",
				conceptIds: ["hypothalamus"],
				type: "recognition",
				difficulty: 1,
				prompt: "O hipotálamo é melhor descrito como:",
				options: [{
					id: "a",
					text: "O centro único da emoção."
				}, {
					id: "b",
					text: "Conjunto de núcleos que coordena homeostase e saídas autonômico-endócrinas."
				}],
				correctAnswer: "b",
				explanation: "Acoplador, não essência afetiva.",
				hint1: "Corpo interno.",
				hint2: "Hormônio e autonômico.",
				hint3: "Núcleos."
			}),
			q$2({
				id: "m12-q2",
				moduleId: "module_12",
				conceptIds: ["hypothalamus"],
				type: "counterfactual",
				difficulty: 2,
				prompt: "Se o hipotálamo não pudesse acionar saídas endócrinas, o que seria afetado mais diretamente?",
				options: [{
					id: "a",
					text: "A condução saltatória nos nódulos de Ranvier."
				}, {
					id: "b",
					text: "A coordenação lenta de eixos como o HPA."
				}],
				correctAnswer: "b",
				explanation: "Efetor lento versus condução axônica (outro nível).",
				hint1: "Hormônio.",
				hint2: "Tempo de minutos a horas.",
				hint3: "HPA.",
				errorKind: "causal"
			}),
			q$2({
				id: "m12-q3",
				moduleId: "module_12",
				conceptIds: ["hypothalamus"],
				type: "recall",
				difficulty: 1,
				prompt: "Por que não reduzir o hipotálamo a 'instinto'?",
				correctAnswer: "open",
				modelAnswer: "Porque ele particiona funções homeostáticas e trabalha em rede; 'instinto' é um rótulo que apaga mecanismo, contexto e diversidade de núcleos.",
				explanation: "Rótulo versus mecanismo.",
				hint1: "Vários núcleos.",
				hint2: "Homeostase.",
				hint3: "Contexto."
			}),
			q$2({
				id: "m12-q4",
				moduleId: "module_12",
				conceptIds: ["hypothalamus"],
				type: "application",
				difficulty: 2,
				prompt: "Febre, sede e um susto compartilham o hipotálamo. Isso prova que são a mesma emoção?",
				options: [{
					id: "a",
					text: "Sim, tudo é o mesmo centro."
				}, {
					id: "b",
					text: "Não. Compartilhar um coordenador fisiológico não identitifica os fenômenos."
				}],
				correctAnswer: "b",
				explanation: "Mesma moral: participação ≠ identidade.",
				hint1: "Um aeroporto não é todas as viagens.",
				hint2: "Núcleos distintos.",
				hint3: "Não identifique.",
				errorKind: "generalization"
			})
		],
		summary: {
			shouldKnow: ["Acoplar estado interno a saídas.", "Preparar o eixo HPA sem personificá-lo."],
			acquiredConcepts: ["hypothalamus"]
		},
		masteryCriteria: mastery$2,
		references: refs$2,
		contentVersion: "1.0"
	},
	{
		id: "module_13",
		stage: 2,
		number: 13,
		title: "Estresse e eixo HPA",
		shortTitle: "Eixo HPA",
		objective: "Descrever a cascata HPA e o cortisol sem personificá-los como 'o estresse'.",
		centralQuestion: "O que a resposta a um desafio faz no tempo lento — e o que isso não prova?",
		prerequisites: ["module_12"],
		estimatedTime: {
			essential: 9,
			deepen: 6,
			questions: 5
		},
		concepts: [
			"hpa_axis",
			"cortisol",
			"stress_response",
			"allostasis"
		],
		introduction: "Estresse virou palavra-coringa. Aqui separamos resposta aguda, eixo HPA, cortisol cotidiano e modelos de alostase.",
		blocks: [
			{
				id: "m13-q",
				kind: "question",
				body: "Todo desafio 'é' cortisol?"
			},
			{
				id: "m13-a",
				kind: "answer",
				body: "Não. A [[stress_response|resposta a desafios]] inclui simpático (rápido) e [[hpa_axis|eixo HPA]] (mais lento). O [[cortisol|cortisol]] tem ritmo diário e ações metabólicas mesmo fora do drama."
			},
			{
				id: "m13-d",
				kind: "diagram",
				diagram: "hpa",
				title: "Cascata",
				body: "Hipotálamo (CRH) → hipófise (ACTH) → adrenal (glicocorticoides) → feedback."
			},
			{
				id: "m13-m",
				kind: "mechanism",
				title: "Tempos diferentes",
				steps: [
					{
						id: "s",
						title: "Segundos",
						body: "Autonômico: frequência cardíaca, pupilas, broncodilatação possível."
					},
					{
						id: "m",
						title: "Minutos–horas",
						body: "HPA e mobilização energética."
					},
					{
						id: "c",
						title: "Crônico",
						body: "Não é só 'agudo repetido'. Há adaptação, custo, contexto. [[allostasis|Alostase]] é um modelo, não um órgão."
					}
				]
			},
			{
				id: "m13-r",
				kind: "recall",
				body: "Cite uma função do cortisol que não é 'fazer a pessoa estressada'."
			},
			{
				id: "m13-h",
				kind: "limit",
				title: "Saúde",
				body: "Conhecimento do eixo não diagnostica seu cansaço nem substitui avaliação clínica. Cuidado com kits de 'nível de cortisol' como veredito de caráter.",
				layer: 1
			}
		],
		misconceptions: [{
			claim: "Cortisol é o hormônio do estresse.",
			whyPlausible: "Sobe em muitos desafios.",
			problem: "Personificação; ignora ritmo circadiano e funções permissivas.",
			better: "Glicocorticoide com ações amplas; o HPA é um efetor, não o sinônimo de estresse."
		}],
		integration: "Da defesa passamos à valorização e à aprendizagem: dopamina, sem o mito do prazer.",
		relatedModules: [
			"module_12",
			"module_14",
			"module_26"
		],
		questions: [
			q$2({
				id: "m13-q1",
				moduleId: "module_13",
				conceptIds: ["cortisol"],
				type: "misconception",
				difficulty: 1,
				prompt: "Qual formulação é melhor?",
				options: [{
					id: "a",
					text: "Cortisol é o hormônio do estresse."
				}, {
					id: "b",
					text: "Cortisol é um glicocorticoide com ações cotidianas que também participa de respostas a desafios."
				}],
				correctAnswer: "b",
				explanation: "Anti-personificação.",
				hint1: "Ritmo circadiano.",
				hint2: "Metabolismo.",
				hint3: "Participa, não é.",
				errorKind: "language"
			}),
			q$2({
				id: "m13-q2",
				moduleId: "module_13",
				conceptIds: ["hpa_axis"],
				type: "relation",
				difficulty: 1,
				prompt: "A ordem típica do eixo HPA é:",
				options: [{
					id: "a",
					text: "Adrenal → córtex visual → amígdala."
				}, {
					id: "b",
					text: "Hipotálamo → hipófise → adrenal."
				}],
				correctAnswer: "b",
				explanation: "A sigla é o mapa.",
				hint1: "H-P-A.",
				hint2: "Hormônios em cascata.",
				hint3: "CRH/ACTH/cortisol em linhas gerais."
			}),
			q$2({
				id: "m13-q3",
				moduleId: "module_13",
				conceptIds: ["stress_response"],
				type: "counterfactual",
				difficulty: 2,
				prompt: "Se apenas o eixo HPA fosse bloqueado, a resposta a um susto imediato:",
				options: [{
					id: "a",
					text: "Desapareceria por completo, porque estresse é só cortisol."
				}, {
					id: "b",
					text: "Manteria componentes autonômicos rápidos; a coordenação endócrina lenta estaria comprometida."
				}],
				correctAnswer: "b",
				explanation: "Múltiplos efetores, múltiplos tempos.",
				hint1: "Simpático ainda existe.",
				hint2: "Segundos versus minutos.",
				hint3: "Não é um único modo.",
				errorKind: "causal"
			}),
			q$2({
				id: "m13-q4",
				moduleId: "module_13",
				conceptIds: ["allostasis"],
				type: "application",
				difficulty: 2,
				prompt: "Usar 'alostase' como sinônimo de 'estresse ruim' é um erro porque:",
				options: [{
					id: "a",
					text: "Alostase é um modelo de ajuste antecipatório, não um veredito moral."
				}, {
					id: "b",
					text: "Alostase é um osso do crânio."
				}],
				correctAnswer: "a",
				explanation: "Modelo versus insulto.",
				hint1: "Antecipação.",
				hint2: "Custo pode existir, mas não é o nome.",
				hint3: "Não moralize.",
				errorKind: "language"
			})
		],
		summary: {
			shouldKnow: [
				"Desenhar HPA.",
				"Separar simpático e endócrino.",
				"Falar de cortisol sem vilania."
			],
			acquiredConcepts: [
				"hpa_axis",
				"cortisol",
				"stress_response",
				"allostasis"
			]
		},
		masteryCriteria: mastery$2,
		references: refs$2,
		contentVersion: "1.0"
	},
	{
		id: "module_14",
		stage: 2,
		number: 14,
		title: "Recompensa e dopamina",
		shortTitle: "Dopamina",
		objective: "Substituir 'molécula do prazer' por circuito, receptor, contexto e erro de predição.",
		centralQuestion: "Se não é prazer, o que a dopamina ajuda a fazer?",
		prerequisites: ["module_07", "module_09"],
		estimatedTime: {
			essential: 9,
			deepen: 7,
			questions: 6
		},
		concepts: [
			"dopamine",
			"reward_prediction_error",
			"ventral_striatum"
		],
		introduction: "Poucas moléculas foram tão maltratadas. Este módulo usa tudo que você já sabe: receptor, circuito, nível de análise.",
		blocks: [
			{
				id: "m14-q",
				kind: "question",
				body: "A dopamina é responsável pelo prazer?"
			},
			{
				id: "m14-a",
				kind: "answer",
				body: "Não como modelo final. A [[dopamine|dopamina]] participa de diferentes processos; o efeito depende do circuito, do receptor e do contexto. Em certos paradigmas, o sinal acompanha [[reward_prediction_error|erro de predição de recompensa]]."
			},
			{
				id: "m14-c",
				kind: "explain",
				title: "Três vias, no essencial",
				body: "Nigroestriatal (movimento), mesolímbica (valorização/aprendizagem), mesocortical (funções executivas, entre outras). Uma molécula, operações distintas. O [[ventral_striatum|estriado ventral]] é um nó — não o centro do prazer."
			},
			{
				id: "m14-rpe",
				kind: "mechanism",
				title: "Erro de predição, em três linhas",
				steps: [
					{
						id: "e",
						title: "Esperado",
						body: "O sistema prediz."
					},
					{
						id: "o",
						title: "Obtido",
						body: "O mundo entrega ou não."
					},
					{
						id: "d",
						title: "Diferença",
						body: "O sinal pode subir com surpresa melhor que o previsto e cair com decepção. Isso ensina, não 'é' o gosto."
					}
				]
			},
			{
				id: "m14-r",
				kind: "recall",
				body: "Reescreva 'dopamina = prazer' em uma frase que sobreviveria a uma revisão por pares."
			},
			{
				id: "m14-l",
				kind: "limit",
				title: "Pesquisa ativa",
				body: "Há debate sobre saliência, invigoração, esforço e prazer. O app ensina a recusar o slogan; não fecha a literatura.",
				layer: 2
			}
		],
		misconceptions: [{
			claim: "A dopamina é a molécula do prazer.",
			whyPlausible: "Drogas, títulos, metáforas de 'disparo de recompensa'.",
			problem: "Prazer, wanting, aprendizagem e movimento se separam experimentalmente em vários desenhos.",
			better: "Neuromodulador de vários circuitos; em alguns, sinal de erro de predição."
		}],
		integration: "Relaciona-se com receptores (7), memória (15), decisão (20) e hábitos (22).",
		relatedModules: [
			"module_07",
			"module_15",
			"module_20",
			"module_22"
		],
		questions: [
			q$2({
				id: "m14-q1",
				moduleId: "module_14",
				conceptIds: ["dopamine"],
				type: "misconception",
				difficulty: 1,
				prompt: "Qual afirmação descreve melhor a dopamina?",
				options: [
					{
						id: "a",
						text: "É a molécula responsável pelo prazer."
					},
					{
						id: "b",
						text: "Participa de diferentes processos; o efeito depende de circuito, receptor e contexto."
					},
					{
						id: "c",
						text: "Só participa da motivação."
					}
				],
				correctAnswer: "b",
				explanation: "Os distratores são os erros reais do manuscrito.",
				hint1: "Anti-personagem.",
				hint2: "Movimento também.",
				hint3: "Circuito e receptor.",
				errorKind: "generalization"
			}),
			q$2({
				id: "m14-q2",
				moduleId: "module_14",
				conceptIds: ["reward_prediction_error"],
				type: "recognition",
				difficulty: 2,
				prompt: "Erro de predição de recompensa é:",
				options: [{
					id: "a",
					text: "A prova de que a pessoa sentiu prazer."
				}, {
					id: "b",
					text: "Uma diferença entre obtido e esperado, observada em certos padrões dopaminérgicos, útil para aprendizagem."
				}],
				correctAnswer: "b",
				explanation: "Sinal de aprendizagem, não dicionário de sentimento.",
				hint1: "Esperado versus obtido.",
				hint2: "Surpresa.",
				hint3: "Não é o gosto.",
				errorKind: "causal"
			}),
			q$2({
				id: "m14-q3",
				moduleId: "module_14",
				conceptIds: ["dopamine"],
				type: "counterfactual",
				difficulty: 2,
				prompt: "Se a dopamina fosse apenas 'prazer', a via nigroestriatal e o Parkinson seriam…",
				options: [{
					id: "a",
					text: "Irrelevantes para o modelo, o que mostra que o slogan é estreito demais."
				}, {
					id: "b",
					text: "A prova de que prazer mora no movimento."
				}],
				correctAnswer: "a",
				explanation: "A diversidade de vias mata o personagem único.",
				hint1: "Movimento.",
				hint2: "Mais de uma via.",
				hint3: "Slogan estreito.",
				errorKind: "generalization"
			}),
			q$2({
				id: "m14-q4",
				moduleId: "module_14",
				conceptIds: ["ventral_striatum"],
				type: "application",
				difficulty: 2,
				prompt: "Um anúncio diz que um produto 'libera dopamina no accumbens, portanto vicia'. O problema principal:",
				options: [{
					id: "a",
					text: "O accumbens não existe."
				}, {
					id: "b",
					text: "Liberações e nós de circuito não equivalem a um veredito de vício nem ao prazer como essência."
				}],
				correctAnswer: "b",
				explanation: "Salto de nível + marketing.",
				hint1: "Mecanismo local ≠ diagnóstico.",
				hint2: "Não personifique.",
				hint3: "Vício é fenômeno complexo.",
				errorKind: "scale"
			}),
			q$2({
				id: "m14-q5",
				moduleId: "module_14",
				conceptIds: ["dopamine"],
				type: "recall",
				difficulty: 2,
				prompt: "Explique, com suas palavras, por que 'dopamina é prazer' falha.",
				correctAnswer: "open",
				modelAnswer: "Porque a molécula opera em circuitos de movimento, aprendizagem e esforço, via receptores distintos; padrões associados a predição não se identificam com o sentimento de prazer.",
				explanation: "Se a resposta só disser 'é mais complicado', peça o mecanismo.",
				hint1: "Vias.",
				hint2: "Predição.",
				hint3: "Receptor."
			})
		],
		summary: {
			shouldKnow: [
				"Recusar o slogan.",
				"Citar pelo menos duas vias.",
				"Definir erro de predição sem ontologizá-lo."
			],
			acquiredConcepts: [
				"dopamine",
				"reward_prediction_error",
				"ventral_striatum"
			]
		},
		masteryCriteria: mastery$2,
		references: [{
			title: "Schultz, dopaminergic reward prediction error",
			kind: "revisao"
		}, {
			title: "Berridge, wanting vs liking",
			kind: "revisao"
		}],
		contentVersion: "1.0"
	},
	{
		id: "module_15",
		stage: 2,
		number: 15,
		title: "Memória e emoção",
		shortTitle: "Memória e emoção",
		objective: "Explicar a modulação afetiva da memória sem transformar vivacidade em verdade.",
		centralQuestion: "Por que alguns episódios grudam — e por que isso não os torna infalíveis?",
		prerequisites: ["module_11", "module_14"],
		estimatedTime: {
			essential: 8,
			deepen: 5,
			questions: 4
		},
		concepts: ["memory_emotion"],
		introduction: "Amígdala, arousal e glicocorticoides podem modular consolidação. A memória continua reconstrutiva. Este módulo impede o mito da gravação em HD.",
		blocks: [
			{
				id: "m15-q",
				kind: "question",
				body: "Um episódio intenso é uma fita intacta?"
			},
			{
				id: "m15-a",
				kind: "answer",
				body: "Não. A [[memory_emotion|modulação emocional]] pode favorecer encoding e consolidação de alguns aspectos. Recuperação ainda reconstrói. Vivacidade ≠ acurácia."
			},
			{
				id: "m15-e",
				kind: "explain",
				title: "O que pode estar acontecendo",
				body: "Arousal, noradrenalina, glicocorticoides em janelas de dose e tempo, e circuitos que incluem amígdala e hipocampo, em linhas gerais, modulam a probabilidade de persistência. 'Em linhas gerais' importa: não é uma lei do tipo sempre-grava."
			},
			{
				id: "m15-r",
				kind: "recall",
				body: "Separe em duas colunas: o que a emoção pode fazer pela memória, e o que ela não garante."
			},
			{
				id: "m15-l",
				kind: "limit",
				title: "Relatos e trauma",
				body: "Este app não trata, diagnostica nem interpreta trauma clínico. A lição é epistêmica: intensidade subjetiva não é prova forense.",
				layer: 1
			}
		],
		misconceptions: [{
			claim: "Memória emocional é fotográfica.",
			whyPlausible: "Detalhes vívidos convencem.",
			problem: "Confunde confiança e riqueza fenomênica com fidelidade.",
			better: "Modulação de persistência + reconstrução falível."
		}],
		integration: "A etapa 3 vai separar sistemas de memória com mais granularidade. Aqui o ponto é a ponte afetiva.",
		relatedModules: [
			"module_11",
			"module_13",
			"module_18"
		],
		questions: [
			q$2({
				id: "m15-q1",
				moduleId: "module_15",
				conceptIds: ["memory_emotion"],
				type: "misconception",
				difficulty: 1,
				prompt: "Qual é mais adequada?",
				options: [{
					id: "a",
					text: "Eventos emocionais gravam um vídeo infalível."
				}, {
					id: "b",
					text: "Estados afetivos podem modular encoding e consolidação; a lembrança permanece reconstrutiva."
				}],
				correctAnswer: "b",
				explanation: "Vivacidade ≠ verdade.",
				hint1: "Reconstrução.",
				hint2: "Modula, não sela.",
				hint3: "Falível.",
				errorKind: "generalization"
			}),
			q$2({
				id: "m15-q2",
				moduleId: "module_15",
				conceptIds: ["memory_emotion"],
				type: "limit",
				difficulty: 2,
				prompt: "Alta confiança em uma lembrança intensa autoriza tratá-la como registro literal?",
				options: [{
					id: "a",
					text: "Sim, confiança é acurácia."
				}, {
					id: "b",
					text: "Não. Confiança e acurácia se separam com frequência."
				}],
				correctAnswer: "b",
				explanation: "Pergunta de limite.",
				hint1: "Testemunho.",
				hint2: "Dissociação.",
				hint3: "Não identifique.",
				errorKind: "causal"
			}),
			q$2({
				id: "m15-q3",
				moduleId: "module_15",
				conceptIds: ["memory_emotion"],
				type: "recall",
				difficulty: 1,
				prompt: "Como a amígdala entra nesta história sem voltar a ser 'o medo'?",
				correctAnswer: "open",
				modelAnswer: "Como participante de circuitos que modulam a consolidação de material relevante, não como gravador da experiência nem como essência do afeto.",
				explanation: "Participação outra vez.",
				hint1: "Modulação.",
				hint2: "Relevância.",
				hint3: "Não identidade."
			}),
			q$2({
				id: "m15-q4",
				moduleId: "module_15",
				conceptIds: ["memory_emotion"],
				type: "application",
				difficulty: 2,
				prompt: "Um estudante só estuda quando está em pânico, porque 'emociona e grava'. O risco conceitual:",
				options: [{
					id: "a",
					text: "Confundir arousal com método infalível e ignorar custo, foco estreito e reconstrução."
				}, {
					id: "b",
					text: "Nenhum: pânico é a técnica ideal."
				}],
				correctAnswer: "a",
				explanation: "Aplicação pedagógica honesta.",
				hint1: "Custo.",
				hint2: "Atenção estreita.",
				hint3: "Não é HD.",
				errorKind: "generalization"
			})
		],
		summary: {
			shouldKnow: ["Separar vivacidade e acurácia.", "Falar de modulação, não de fita."],
			acquiredConcepts: ["memory_emotion"]
		},
		masteryCriteria: mastery$2,
		references: refs$2,
		contentVersion: "1.0"
	},
	{
		id: "module_16",
		stage: 2,
		number: 16,
		title: "Integração sistêmica",
		shortTitle: "Integração 2",
		objective: "Fechar a etapa 2 com a cadeia informação → circuitos → avaliação → corpo → aprendizagem → comportamento, sem reduzir emoção a uma região.",
		centralQuestion: "Como as peças sistêmicas se encaixam sem virar um único órgão da alma?",
		prerequisites: [
			"module_13",
			"module_14",
			"module_15"
		],
		estimatedTime: {
			essential: 7,
			deepen: 5,
			questions: 4
		},
		concepts: ["distributed_systems", "emotion_as_process"],
		introduction: "Não há conceito novo obrigatório. Há um mapa: o que você deve conseguir contar a alguém sem usar 'centro de'.",
		blocks: [
			{
				id: "m16-q",
				kind: "question",
				body: "Conte a cadeia da etapa 2 sem nomear um vilão molecular."
			},
			{
				id: "m16-a",
				kind: "answer",
				body: "Informação → circuitos → avaliação de relevância → alterações corporais (autonômicas e, conforme o tempo, HPA) → aprendizagem (incluindo predição) → comportamento. Emoção atravessa essa cadeia; não a inicia como um botão."
			},
			{
				id: "m16-m",
				kind: "mechanism",
				title: "Checklist de recusas",
				steps: [
					{
						id: "1",
						title: "Não uma área",
						body: "Emoção como processo."
					},
					{
						id: "2",
						title: "Não um personagem",
						body: "Dopamina e cortisol sem essência psicológica."
					},
					{
						id: "3",
						title: "Não uma fita",
						body: "Memória modulada e reconstrutiva."
					},
					{
						id: "4",
						title: "Não um diagnóstico",
						body: "Mecanismo geral ≠ a sua biografia."
					}
				]
			},
			{
				id: "m16-r",
				kind: "recall",
				body: "Onde, nesta cadeia, os mecanismos da etapa 1 ainda estão presentes?"
			}
		],
		misconceptions: [{
			claim: "Etapa 2 substitui a etapa 1.",
			whyPlausible: "Falamos de sistemas e o celular parece distante.",
			problem: "Sem membrana, não há circuito real.",
			better: "Os mecanismos celulares continuam como fundamento."
		}],
		integration: "A etapa 3 descreve atenção, memória e decisão como outro nível — não como biologia alternativa.",
		relatedModules: ["module_08", "module_24"],
		questions: [
			q$2({
				id: "m16-q1",
				moduleId: "module_16",
				conceptIds: ["emotion_as_process"],
				type: "integration",
				difficulty: 2,
				prompt: "Qual cadeia é a mais fiel à etapa 2?",
				options: [{
					id: "a",
					text: "Amígdala → medo → comportamento, sempre."
				}, {
					id: "b",
					text: "Informação → circuitos → avaliação → corpo → aprendizagem → comportamento."
				}],
				correctAnswer: "b",
				explanation: "O fecho pedido pelo manuscrito.",
				hint1: "Não comece numa área.",
				hint2: "Inclua corpo e aprendizagem.",
				hint3: "A opção longa."
			}),
			q$2({
				id: "m16-q2",
				moduleId: "module_16",
				conceptIds: ["distributed_systems"],
				type: "limit",
				difficulty: 1,
				prompt: "Podemos reduzir emoção a uma região?",
				options: [{
					id: "a",
					text: "Sim, para simplificar sempre."
				}, {
					id: "b",
					text: "Não. Simplificar no início pode ser didático; o modelo final recusa a redução."
				}],
				correctAnswer: "b",
				explanation: "O manuscrito permite simplificação inicial, não o modelo final.",
				hint1: "Modelo final.",
				hint2: "Recusa.",
				hint3: "Distribuído."
			}),
			q$2({
				id: "m16-q3",
				moduleId: "module_16",
				conceptIds: ["dopamine", "cortisol"],
				type: "misconception",
				difficulty: 2,
				prompt: "O que dopamina e cortisol têm em comum neste curso?",
				options: [{
					id: "a",
					text: "Ambos são personagens de estados mentais."
				}, {
					id: "b",
					text: "Ambos exigem circuito, tempo, dose e contexto — e recusam personificação."
				}],
				correctAnswer: "b",
				explanation: "Transferência de habilidade, não de slogan.",
				hint1: "Anti-personagem.",
				hint2: "Contexto.",
				hint3: "Dois exemplos da mesma regra.",
				errorKind: "language"
			}),
			q$2({
				id: "m16-q4",
				moduleId: "module_16",
				conceptIds: ["levels_of_analysis"],
				type: "recall",
				difficulty: 2,
				prompt: "Onde a etapa 1 permanece visível na etapa 2?",
				correctAnswer: "open",
				modelAnswer: "Em cada sinapse dos circuitos, na transdução autonômica e na ação de neuromoduladores via receptores — o chão celular não foi aposentado.",
				explanation: "Fundamento, não substituição.",
				hint1: "Receptores.",
				hint2: "Circuitos são células.",
				hint3: "Não aposentou."
			})
		],
		summary: {
			shouldKnow: ["Recitar a cadeia sistêmica.", "Manter as recusas (área, personagem, fita, diagnóstico)."],
			acquiredConcepts: ["distributed_systems", "emotion_as_process"]
		},
		masteryCriteria: mastery$2,
		references: refs$2,
		contentVersion: "1.0"
	}
];
var mastery$1 = {
	comprehension: 70,
	recall: 70,
	contrast: 70,
	application: 60
};
var refs$1 = [
	{
		title: "Baddeley, Eysenck & Anderson, Memory",
		kind: "livro"
	},
	{
		title: "Kahneman, Thinking, Fast and Slow",
		kind: "livro",
		note: "modelo didático; não ontologizar"
	},
	{
		title: "Gazzaniga, Ivry & Mangun, Cognitive Neuroscience",
		kind: "livro"
	}
];
function q$1(p) {
	return p;
}
var STAGE_3_MODULES = [
	{
		id: "module_17",
		stage: 3,
		number: 17,
		title: "Atenção",
		shortTitle: "Atenção",
		objective: "Tratar atenção como família de processos seletivos, não como holofote único nem como tanque de combustível.",
		centralQuestion: "O que está sendo selecionado — e às custas de quê?",
		prerequisites: ["module_16"],
		estimatedTime: {
			essential: 8,
			deepen: 6,
			questions: 4
		},
		concepts: ["attention"],
		introduction: "A etapa 3 descreve fenômenos cognitivos como outro nível, não como substituto da biologia. Atenção é o primeiro: seleção, não magia.",
		blocks: [
			{
				id: "m17-q",
				kind: "question",
				body: "Atenção é um holofote no lobo parietal?"
			},
			{
				id: "m17-a",
				kind: "answer",
				body: "Não. [[attention|Atenção]] reúne processos de alerta, orientação e controle que selecionam informação e alocam recursos limitados. Redes distintas, metas distintas."
			},
			{
				id: "m17-e",
				kind: "explain",
				title: "Limitação sem mistério",
				body: "Não processamos tudo com a mesma fidelidade. Isso não prova um tanque único. Interferência, predição e saliência mudam o que entra."
			},
			{
				id: "m17-r",
				kind: "recall",
				body: "Nomeie dois processos atencionais que não são a mesma coisa (por exemplo alerta versus seleção)."
			},
			{
				id: "m17-l",
				kind: "limit",
				title: "Não diagnostique",
				body: "Dificuldade atencional cotidiana não autoriza um rótulo clínico neste app.",
				layer: 1
			}
		],
		misconceptions: [{
			claim: "Atenção é um músculo único no córtex.",
			whyPlausible: "Falamos 'presta atenção' no singular.",
			problem: "Família de sistemas; lesões dissociam componentes.",
			better: "Alerta, orientação, controle — no mínimo uma tríade útil."
		}],
		integration: "A memória de trabalho vai herdar essa limitação.",
		relatedModules: [
			"module_18",
			"module_21",
			"module_29"
		],
		questions: [
			q$1({
				id: "m17-q1",
				moduleId: "module_17",
				conceptIds: ["attention"],
				type: "misconception",
				difficulty: 1,
				prompt: "Atenção é melhor descrita como:",
				options: [{
					id: "a",
					text: "Um holofote único localizado numa área."
				}, {
					id: "b",
					text: "Família de processos que selecionam informação e alocam recursos."
				}],
				correctAnswer: "b",
				explanation: "Pluralidade.",
				hint1: "Mais de um sistema.",
				hint2: "Seleção.",
				hint3: "Não um lugar.",
				errorKind: "scale"
			}),
			q$1({
				id: "m17-q2",
				moduleId: "module_17",
				conceptIds: ["attention"],
				type: "application",
				difficulty: 2,
				prompt: "Alguém não ouve o nome numa festa barulhenta. A análise mais útil:",
				options: [{
					id: "a",
					text: "Diagnóstico imediato."
				}, {
					id: "b",
					text: "Seleção em ambiente de competição; carga, predição e meta importam — sem fechar um laudo."
				}],
				correctAnswer: "b",
				explanation: "Aplicação + limite.",
				hint1: "Competição.",
				hint2: "Não laude.",
				hint3: "Contexto.",
				errorKind: "generalization"
			}),
			q$1({
				id: "m17-q3",
				moduleId: "module_17",
				conceptIds: ["attention"],
				type: "recall",
				difficulty: 1,
				prompt: "Por que atenção não substitui a biologia da etapa 1?",
				correctAnswer: "open",
				modelAnswer: "Porque seleção é descrição cognitiva de operações que ainda acontecem em circuitos, com neuromodulação e restrições celulares. É outro nível, não outro mundo.",
				explanation: "Níveis.",
				hint1: "Outro nível.",
				hint2: "Circuitos ainda existem.",
				hint3: "Não substitui."
			}),
			q$1({
				id: "m17-q4",
				moduleId: "module_17",
				conceptIds: ["attention"],
				type: "limit",
				difficulty: 2,
				prompt: "Falhar numa tarefa de atenção prova ausência de uma área?",
				options: [{
					id: "a",
					text: "Sim, sempre."
				}, {
					id: "b",
					text: "Não. Tarefas são compostas; sono, meta, ruído e estratégia também pesam."
				}],
				correctAnswer: "b",
				explanation: "Tarefa ≠ faculdade isolada.",
				hint1: "Composição.",
				hint2: "Estado.",
				hint3: "Não isole.",
				errorKind: "causal"
			})
		],
		summary: {
			shouldKnow: ["Falar de atenção no plural.", "Não diagnosticar a partir de um lapso."],
			acquiredConcepts: ["attention"]
		},
		masteryCriteria: mastery$1,
		references: refs$1,
		contentVersion: "1.0"
	},
	{
		id: "module_18",
		stage: 3,
		number: 18,
		title: "Memória",
		shortTitle: "Memória",
		objective: "Separar memória de trabalho, encoding, recuperação e sistemas de longo prazo — com reconstrução no centro.",
		centralQuestion: "Lembrar é copiar ou reconstruir?",
		prerequisites: ["module_17"],
		estimatedTime: {
			essential: 9,
			deepen: 6,
			questions: 5
		},
		concepts: [
			"working_memory",
			"encoding",
			"retrieval",
			"long_term_memory"
		],
		introduction: "A etapa 2 mostrou modulação afetiva. Agora a arquitetura: não há um armazém único, e recuperar é um evento novo. Por isso este app testa em vez de só exibir.",
		blocks: [
			{
				id: "m18-q",
				kind: "question",
				body: "Por que reler não é o mesmo que conseguir explicar?"
			},
			{
				id: "m18-a",
				kind: "answer",
				body: "Porque [[encoding|codificar]] não copia o mundo, e [[retrieval|recuperar]] reconstrói com pistas. Reconhecer um texto não prova que você reconstrói o mecanismo."
			},
			{
				id: "m18-m",
				kind: "mechanism",
				title: "Famílias",
				steps: [
					{
						id: "w",
						title: "Trabalho",
						body: "[[working_memory|Manter e manipular]] com capacidade limitada, em diálogo com atenção."
					},
					{
						id: "e",
						title: "Episódica / semântica / procedimental",
						body: "[[long_term_memory|Sistemas]] distintos, com dissociações clínicas."
					},
					{
						id: "r",
						title: "Recuperação",
						body: "Evento novo. Pode fortalecer ou distorcer."
					}
				]
			},
			{
				id: "m18-r",
				kind: "recall",
				body: "Sem olhar: por que este aplicativo insiste em recuperação ativa?"
			},
			{
				id: "m18-l",
				kind: "explain",
				title: "O número 7",
				body: "O '7±2' é histórico e contextual. Não transforme em QI nem em lei universal de itens.",
				layer: 2
			}
		],
		misconceptions: [{
			claim: "Memória é um arquivo intacto num único lugar.",
			whyPlausible: "Metáfora do computador.",
			problem: "Sistemas múltiplos + reconstrução.",
			better: "Família de sistemas; lembrar é um ato."
		}],
		integration: "Plasticidade vai dizer como a experiência deixa traço — com limites.",
		relatedModules: [
			"module_15",
			"module_19",
			"module_01"
		],
		questions: [
			q$1({
				id: "m18-q1",
				moduleId: "module_18",
				conceptIds: ["retrieval"],
				type: "misconception",
				difficulty: 1,
				prompt: "Lembrar é:",
				options: [{
					id: "a",
					text: "Ler um arquivo intacto."
				}, {
					id: "b",
					text: "Reconstruir a partir de pistas, estado e conhecimento atual."
				}],
				correctAnswer: "b",
				explanation: "Núcleo pedagógico do app.",
				hint1: "Evento novo.",
				hint2: "Pistas.",
				hint3: "Reconstrução.",
				errorKind: "generalization"
			}),
			q$1({
				id: "m18-q2",
				moduleId: "module_18",
				conceptIds: ["working_memory"],
				type: "application",
				difficulty: 2,
				prompt: "Instruções longas falham no meio do ruído. Mecanismo mais pertinente:",
				options: [{
					id: "a",
					text: "Falta de caráter."
				}, {
					id: "b",
					text: "Capacidade limitada de manter e manipular, em competição atencional."
				}],
				correctAnswer: "b",
				explanation: "Carga, não moral.",
				hint1: "Limite.",
				hint2: "Atenção.",
				hint3: "Não moralize.",
				errorKind: "scale"
			}),
			q$1({
				id: "m18-q3",
				moduleId: "module_18",
				conceptIds: ["long_term_memory"],
				type: "relation",
				difficulty: 2,
				prompt: "Dissociações clínicas (perder episódios e preservar procedimentos) sugerem:",
				options: [{
					id: "a",
					text: "Um único armazém com dois rótulos."
				}, {
					id: "b",
					text: "Sistemas parcialmente separáveis."
				}],
				correctAnswer: "b",
				explanation: "Argumento clássico de múltiplos sistemas.",
				hint1: "Saber como versus lembrar quando.",
				hint2: "Separáveis.",
				hint3: "Não um HD."
			}),
			q$1({
				id: "m18-q4",
				moduleId: "module_18",
				conceptIds: ["encoding"],
				type: "recall",
				difficulty: 1,
				prompt: "O que a codificação faz que a mera exposição não garante?",
				correctAnswer: "open",
				modelAnswer: "Constrói uma representação influenciada por atenção e conhecimento prévio, potencialmente recuperável — exposição passiva pode não criar essa representacão utilizável.",
				explanation: "Por isso blocos curtos + pergunta.",
				hint1: "Construção.",
				hint2: "Atenção.",
				hint3: "Não cópia."
			}),
			q$1({
				id: "m18-q5",
				moduleId: "module_18",
				conceptIds: ["retrieval"],
				type: "limit",
				difficulty: 2,
				prompt: "Uma lembrança vívida de um conteúdo estudado prova domínio do mecanismo?",
				options: [{
					id: "a",
					text: "Sim, familiaridade é domínio."
				}, {
					id: "b",
					text: "Não. Familiaridade pode ser reconhecimento sem reconstrução."
				}],
				correctAnswer: "b",
				explanation: "exposição ≠ domínio.",
				hint1: "Princípio do produto.",
				hint2: "Reconhecer versus explicar.",
				hint3: "Não prova.",
				errorKind: "causal"
			})
		],
		summary: {
			shouldKnow: [
				"Separar sistemas.",
				"Defender recuperação ativa.",
				"Recusar o arquivo."
			],
			acquiredConcepts: [
				"working_memory",
				"encoding",
				"retrieval",
				"long_term_memory"
			]
		},
		masteryCriteria: mastery$1,
		references: refs$1,
		contentVersion: "1.0"
	},
	{
		id: "module_19",
		stage: 3,
		number: 19,
		title: "Aprendizagem e plasticidade",
		shortTitle: "Plasticidade",
		objective: "Ligar aprendizagem a plasticidade sem vender neuroplasticidade ilimitada.",
		centralQuestion: "O que muda com a experiência — e o que não é milagre?",
		prerequisites: ["module_18", "module_06"],
		estimatedTime: {
			essential: 8,
			deepen: 6,
			questions: 4
		},
		concepts: ["plasticity", "learning"],
		introduction: "Sinapses mudam. Isso é verdadeiro e foi transformado em slogan. Aqui devolvemos o termo ao chão: restrições, custos, múltiplas formas de aprender.",
		blocks: [
			{
				id: "m19-q",
				kind: "question",
				body: "'O cérebro muda' autoriza qualquer método?"
			},
			{
				id: "m19-a",
				kind: "answer",
				body: "Não. [[plasticity|Plasticidade]] é capacidade real e limitada. [[learning|Aprendizagem]] tem formas associativas, estatísticas, procedimentais, sociais — não um único LTP mágico."
			},
			{
				id: "m19-e",
				kind: "explain",
				title: "Dois cuidados",
				body: "1) Plasticidade pode ser desadaptativa. 2) Mudança sináptica não é o único nível (excitabilidade, glia, rede). O essencial: experiência deixa traço sob restrições."
			},
			{
				id: "m19-r",
				kind: "recall",
				body: "Cite uma restrição da plasticidade (janela, custo, ou especificidade)."
			},
			{
				id: "m19-l",
				kind: "limit",
				title: "Marketing",
				body: "Produtos que vendem 'reprograme seu cérebro em 7 dias' usam um fato verdadeiro como cheque em branco.",
				layer: 1
			}
		],
		misconceptions: [{
			claim: "Neuroplasticidade é ilimitada.",
			whyPlausible: "Histórias de recuperação são reais e comoventes.",
			problem: "Anedota ≠ ausência de teto biológico e social.",
			better: "Capacidade restrita, dependente de dose, tempo e contexto."
		}],
		integration: "Decisão e hábito vão usar aprendizagem com políticas de ação diferentes.",
		relatedModules: ["module_14", "module_22"],
		questions: [
			q$1({
				id: "m19-q1",
				moduleId: "module_19",
				conceptIds: ["plasticity"],
				type: "misconception",
				difficulty: 1,
				prompt: "Plasticidade:",
				options: [{
					id: "a",
					text: "É um superpoder irrestrito."
				}, {
					id: "b",
					text: "É capacidade real de mudança, com restrições, custos e possíveis efeitos desadaptativos."
				}],
				correctAnswer: "b",
				explanation: "Anti-milagre.",
				hint1: "Restrição.",
				hint2: "Custo.",
				hint3: "Não ilimitada.",
				errorKind: "generalization"
			}),
			q$1({
				id: "m19-q2",
				moduleId: "module_19",
				conceptIds: ["learning"],
				type: "relation",
				difficulty: 2,
				prompt: "Aprendizagem se reduz a um único mecanismo celular?",
				options: [{
					id: "a",
					text: "Sim, LTP explica tudo."
				}, {
					id: "b",
					text: "Não. Há múltiplas formas e níveis; LTP é um mecanismo estudado, não o dicionário da vida mental."
				}],
				correctAnswer: "b",
				explanation: "Erro de escala outra vez.",
				hint1: "Múltiplas formas.",
				hint2: "Nível celular ≠ fenômeno.",
				hint3: "Não reduza.",
				errorKind: "scale"
			}),
			q$1({
				id: "m19-q3",
				moduleId: "module_19",
				conceptIds: ["learning"],
				type: "recall",
				difficulty: 1,
				prompt: "Por que recuperação e contraste, neste app, são aprendizagem e não só medição?",
				correctAnswer: "open",
				modelAnswer: "Porque recuperar e diferenciar fortalecem e reorganizam representações; o teste é um evento de encoding/retrieval, não apenas uma nota.",
				explanation: "Pedagogia baseada no módulo 18–19.",
				hint1: "Teste como evento.",
				hint2: "Reconstrução.",
				hint3: "Não só nota."
			}),
			q$1({
				id: "m19-q4",
				moduleId: "module_19",
				conceptIds: ["plasticity"],
				type: "application",
				difficulty: 2,
				prompt: "Um curso promete 'ativar plasticidade' com um exercício de 3 minutos. Sua pergunta:",
				options: [{
					id: "a",
					text: "Qual mudança, em qual sistema, com qual evidência — e o que não se pode concluir?"
				}, {
					id: "b",
					text: "Nada: plasticidade é sempre boa e imediata."
				}],
				correctAnswer: "a",
				explanation: "Checklist científico.",
				hint1: "Qual sistema.",
				hint2: "Evidência.",
				hint3: "Limite.",
				errorKind: "generalization"
			})
		],
		summary: {
			shouldKnow: ["Definir plasticidade com teto.", "Pluralizar aprendizagem."],
			acquiredConcepts: ["plasticity", "learning"]
		},
		masteryCriteria: mastery$1,
		references: refs$1,
		contentVersion: "1.0"
	},
	{
		id: "module_20",
		stage: 3,
		number: 20,
		title: "Tomada de decisão",
		shortTitle: "Decisão",
		objective: "Descrever decisão como integração de valor, incerteza e custo em mais de um sistema — sem cérebro racional versus emocional.",
		centralQuestion: "Quem decide — e por que essa pergunta já começa mal?",
		prerequisites: ["module_18", "module_14"],
		estimatedTime: {
			essential: 8,
			deepen: 6,
			questions: 4
		},
		concepts: ["decision_making"],
		introduction: "Não há um homúnculo no córtex frontal. Há políticas de ação em competição, com tempo, incerteza e normas.",
		blocks: [
			{
				id: "m20-q",
				kind: "question",
				body: "O córtex decide e a amígdala atrapalha?"
			},
			{
				id: "m20-a",
				kind: "answer",
				body: "Essa história é um neuromito útil para filmes. [[decision_making|Decidir]] integra evidência, valor, esforço e normas em sistemas que incluem, entre outros, circuitos cortico-estriatais e neuromodulação."
			},
			{
				id: "m20-e",
				kind: "explain",
				title: "Múltiplos controladores",
				body: "Modelos distinguem, por exemplo, controle deliberativo (sensível a metas e modelos) e habitual (sensível a pistas). Não é razão versus emoção como essências."
			},
			{
				id: "m20-r",
				kind: "recall",
				body: "Substitua 'o cérebro racional perdeu para o emocional' por uma frase com sistemas de controle."
			}
		],
		misconceptions: [{
			claim: "Hemisfério esquerdo decide, direito sente.",
			whyPlausible: "Assimetrias reais viram personalidade.",
			problem: "Erro de escala e de evidência.",
			better: "Redes bilaterais; a dicotomia não explica a escolha."
		}],
		integration: "O próximo módulo oferece um modelo didático de rápido/lento — marcado como modelo.",
		relatedModules: [
			"module_21",
			"module_22",
			"module_14"
		],
		questions: [
			q$1({
				id: "m20-q1",
				moduleId: "module_20",
				conceptIds: ["decision_making"],
				type: "misconception",
				difficulty: 1,
				prompt: "Qual formulação é melhor?",
				options: [{
					id: "a",
					text: "O córtex racional luta contra o cérebro emocional."
				}, {
					id: "b",
					text: "Sistemas de controle com sensibilidades diferentes (meta, pista, valor, tempo) competem e cooperam."
				}],
				correctAnswer: "b",
				explanation: "Anti-dualismo neural.",
				hint1: "Sistemas.",
				hint2: "Não essências.",
				hint3: "Competem e cooperam.",
				errorKind: "scale"
			}),
			q$1({
				id: "m20-q2",
				moduleId: "module_20",
				conceptIds: ["decision_making"],
				type: "application",
				difficulty: 2,
				prompt: "Uma escolha ruim sob pressa. Análise mais pertinente:",
				options: [{
					id: "a",
					text: "A pessoa é irracional por natureza."
				}, {
					id: "b",
					text: "Tempo, incerteza e custo mudam qual controlador prevalece; o erro pode ser previsível sem ser um veredito de caráter."
				}],
				correctAnswer: "b",
				explanation: "Mecanismo, não moral.",
				hint1: "Tempo.",
				hint2: "Controladores.",
				hint3: "Não caráter.",
				errorKind: "generalization"
			}),
			q$1({
				id: "m20-q3",
				moduleId: "module_20",
				conceptIds: ["decision_making"],
				type: "recall",
				difficulty: 1,
				prompt: "Por que 'quem decide?' é uma pergunta mal feita?",
				correctAnswer: "open",
				modelAnswer: "Porque sugere um único decisor. A descrição melhor é de processos e políticas de ação distribuídos no tempo.",
				explanation: "Homúnculo.",
				hint1: "Homúnculo.",
				hint2: "Distribuído.",
				hint3: "Processos."
			}),
			q$1({
				id: "m20-q4",
				moduleId: "module_20",
				conceptIds: ["dopamine"],
				type: "relation",
				difficulty: 2,
				prompt: "A dopamina entra na decisão principalmente como:",
				options: [{
					id: "a",
					text: "A essência do prazer da escolha."
				}, {
					id: "b",
					text: "Neuromodulação de aprendizagem e de vigor/valor em circuitos — dependente de via e contexto."
				}],
				correctAnswer: "b",
				explanation: "Transferência do módulo 14.",
				hint1: "Módulo 14.",
				hint2: "Não prazer.",
				hint3: "Modulação.",
				errorKind: "language"
			})
		],
		summary: {
			shouldKnow: ["Recusar o duelo razão/emoção.", "Falar de controladores e restrições."],
			acquiredConcepts: ["decision_making"]
		},
		masteryCriteria: mastery$1,
		references: refs$1,
		contentVersion: "1.0"
	},
	{
		id: "module_21",
		stage: 3,
		number: 21,
		title: "Processamento rápido e lento",
		shortTitle: "Rápido e lento",
		objective: "Usar a distinção rápido/lento como heurística didática, abandonando o cérebro triuno.",
		centralQuestion: "Quando o modelo de dois sistemas ajuda — e quando vira anatomia falsa?",
		prerequisites: ["module_20"],
		estimatedTime: {
			essential: 7,
			deepen: 5,
			questions: 4
		},
		concepts: ["dual_process"],
		introduction: "Modelos de dois processos são úteis para ensinar vieses e hábitos. Tornam-se lixo quando viram réptil versus humano.",
		blocks: [
			{
				id: "m21-q",
				kind: "question",
				body: "Temos um cérebro reptiliano que sabota o racional?"
			},
			{
				id: "m21-a",
				kind: "answer",
				body: "Não. [[dual_process|Rápido e lento]] é uma família de modelos cognitivos. Não é um empilhamento evolutivo de três cérebros."
			},
			{
				id: "m21-e",
				kind: "explain",
				title: "Como usar o modelo",
				body: "Rápido: mais automático, menor custo consciente. Lento: mais controlado, mais custoso. Ambos erram e ambos acertam. Marque: é um modelo."
			},
			{
				id: "m21-r",
				kind: "recall",
				body: "Diga em voz alta: 'isto é um modelo, não um mapa do encéfalo'."
			}
		],
		misconceptions: [{
			claim: "Cérebro triuno: réptil, mamífero, racional.",
			whyPlausible: "Didática antiga e livros populares.",
			problem: "Evolução não empilha cérebros prontos; o modelo hierarquiza emoção como inferior.",
			better: "Sistemas integrados; rápido/lento como descrição, não como anatomia."
		}],
		integration: "Hábitos são um caso em que o controle rápido (em relação à meta atual) é exatamente o esperado.",
		relatedModules: ["module_22", "module_23"],
		questions: [
			q$1({
				id: "m21-q1",
				moduleId: "module_21",
				conceptIds: ["dual_process"],
				type: "misconception",
				difficulty: 1,
				prompt: "O cérebro triuno:",
				options: [{
					id: "a",
					text: "É a anatomia oficial."
				}, {
					id: "b",
					text: "É um modelo didático ultrapassado e enganoso se ontologizado."
				}],
				correctAnswer: "b",
				explanation: "Neuromito nomeado no manuscrito.",
				hint1: "Empilhamento falso.",
				hint2: "Não ontologize.",
				hint3: "Ultrapassado.",
				errorKind: "factual"
			}),
			q$1({
				id: "m21-q2",
				moduleId: "module_21",
				conceptIds: ["dual_process"],
				type: "limit",
				difficulty: 2,
				prompt: "Quando o modelo rápido/lento deixa de funcionar bem?",
				options: [{
					id: "a",
					text: "Quando vira dois cérebros e moraliza o rápido como inferior."
				}, {
					id: "b",
					text: "Nunca: é a verdade literal."
				}],
				correctAnswer: "a",
				explanation: "Pergunta de limite do modelo.",
				hint1: "Ontologizar.",
				hint2: "Moralizar.",
				hint3: "Dois cérebros.",
				errorKind: "language"
			}),
			q$1({
				id: "m21-q3",
				moduleId: "module_21",
				conceptIds: ["dual_process"],
				type: "recall",
				difficulty: 1,
				prompt: "Como o app pede que metáforas e modelos sejam tratados?",
				correctAnswer: "open",
				modelAnswer: "Como apoios opcionais que não substituem o mecanismo, não introduzem relações falsas, e devem ser abandonados quando geram confusão.",
				explanation: "Seção de metáforas do manuscrito.",
				hint1: "Não substituem.",
				hint2: "Abandonar se confundem.",
				hint3: "Modelo ≠ realidade."
			}),
			q$1({
				id: "m21-q4",
				moduleId: "module_21",
				conceptIds: ["dual_process"],
				type: "application",
				difficulty: 2,
				prompt: "Um gestor diz: 'seu cérebro reptiliano atacou na reunião'. Sua correção:",
				options: [{
					id: "a",
					text: "Há um processo mais automático em jogo, possivelmente defensivo; isso não é um réptil interno nem um diagnóstico."
				}, {
					id: "b",
					text: "Concordo: é preciso treinar o neo-córtex para dominar o lagarto."
				}],
				correctAnswer: "a",
				explanation: "Traduzir sem ontologizar.",
				hint1: "Traduza.",
				hint2: "Sem réptil.",
				hint3: "Sem diagnóstico.",
				errorKind: "language"
			})
		],
		summary: {
			shouldKnow: ["Usar rápido/lento como modelo.", "Enterrar o triuno."],
			acquiredConcepts: ["dual_process"]
		},
		masteryCriteria: mastery$1,
		references: refs$1,
		contentVersion: "1.0"
	},
	{
		id: "module_22",
		stage: 3,
		number: 22,
		title: "Hábitos",
		shortTitle: "Hábitos",
		objective: "Definir hábito como controle relativamente insensível à meta atual, adquirido por repetição — sem moral nem 'vício de dopamina'.",
		centralQuestion: "Por que a mão faz o caminho antigo quando a meta já mudou?",
		prerequisites: ["module_20", "module_19"],
		estimatedTime: {
			essential: 8,
			deepen: 5,
			questions: 4
		},
		concepts: ["habit"],
		introduction: "Hábito não é preguiça. É uma solução para regularidade. Vira problema quando o ambiente muda e a política de ação não.",
		blocks: [
			{
				id: "m22-q",
				kind: "question",
				body: "Se eu 'não queria', por que fiz?"
			},
			{
				id: "m22-a",
				kind: "answer",
				body: "Porque um [[habit|hábito]] é relativamente insensível à meta declarada agora. Pistas de contexto disparam uma política aprendida em circuitos cortico-estriatais, em linhas gerais."
			},
			{
				id: "m22-e",
				kind: "explain",
				title: "Implicação prática",
				body: "Mudar pistas e rotinas costuma ser mais coerente com o mecanismo do que invocar uma substância chamada força de vontade. Isso não é conselho clínico; é coerência conceitual."
			},
			{
				id: "m22-r",
				kind: "recall",
				body: "Complete: hábito é insensível à ____ atual e sensível a ____ de contexto."
			}
		],
		misconceptions: [{
			claim: "Hábito é falha de caráter ou 'vício de dopamina'.",
			whyPlausible: "A cultura moraliza repetição.",
			problem: "Apaga o mecanismo e personifica a molécula.",
			better: "Política de ação aprendida; a dopamina entra como modulador de aprendizagem, não como essência do vício cotidiano."
		}],
		integration: "Vieses vão generalizar o tema: padrões sistemáticos, não estupidez.",
		relatedModules: [
			"module_14",
			"module_20",
			"module_30"
		],
		questions: [
			q$1({
				id: "m22-q1",
				moduleId: "module_22",
				conceptIds: ["habit"],
				type: "recognition",
				difficulty: 1,
				prompt: "Hábito, neste curso:",
				options: [{
					id: "a",
					text: "É preguiça."
				}, {
					id: "b",
					text: "É controle de ação relativamente insensível à meta atual, ligado a pistas estáveis."
				}],
				correctAnswer: "b",
				explanation: "Definição operacional.",
				hint1: "Meta atual.",
				hint2: "Pistas.",
				hint3: "Não moral."
			}),
			q$1({
				id: "m22-q2",
				moduleId: "module_22",
				conceptIds: ["habit"],
				type: "application",
				difficulty: 2,
				prompt: "Alguém abre o app à noite 'sem querer'. Intervenção conceitualmente alinhada:",
				options: [{
					id: "a",
					text: "Apenas se envergonhar mais."
				}, {
					id: "b",
					text: "Alterar pistas e a rotina de contexto; tratar como política aprendida, não como laudo."
				}],
				correctAnswer: "b",
				explanation: "Prévia da etapa 4, ainda sem prescrever terapia.",
				hint1: "Pistas.",
				hint2: "Contexto.",
				hint3: "Não laude.",
				errorKind: "causal"
			}),
			q$1({
				id: "m22-q3",
				moduleId: "module_22",
				conceptIds: ["habit"],
				type: "counterfactual",
				difficulty: 2,
				prompt: "Se o contexto de pistas mudasse completamente, o hábito:",
				options: [{
					id: "a",
					text: "Permaneceria idêntico, porque hábito é essência da pessoa."
				}, {
					id: "b",
					text: "Tenderia a se expressar menos naquele formato — a política é gatilhada por pistas."
				}],
				correctAnswer: "b",
				explanation: "Sensibilidade a contexto.",
				hint1: "Gatilho.",
				hint2: "Não essência.",
				hint3: "Pistas.",
				errorKind: "causal"
			}),
			q$1({
				id: "m22-q4",
				moduleId: "module_22",
				conceptIds: ["dopamine"],
				type: "misconception",
				difficulty: 2,
				prompt: "Chamar todo hábito de 'loop de dopamina' é um problema porque:",
				options: [{
					id: "a",
					text: "A dopamina não existe."
				}, {
					id: "b",
					text: "Reduz um fenômeno de controle de ação a uma molécula-personagem e apaga pista, meta e circuito."
				}],
				correctAnswer: "b",
				explanation: "Regra anti-personagem + hábito.",
				hint1: "Personagem.",
				hint2: "Circuito.",
				hint3: "Pista.",
				errorKind: "language"
			})
		],
		summary: {
			shouldKnow: ["Definir hábito sem moral.", "Ligar a pistas e insensibilidade à meta."],
			acquiredConcepts: ["habit"]
		},
		masteryCriteria: mastery$1,
		references: refs$1,
		contentVersion: "1.0"
	},
	{
		id: "module_23",
		stage: 3,
		number: 23,
		title: "Vieses cognitivos",
		shortTitle: "Vieses",
		objective: "Tratar vieses como desvios sistemáticos de um modelo normativo — heurísticas, não coleção de insultos.",
		centralQuestion: "Nomear um viés explica o mecanismo?",
		prerequisites: ["module_21"],
		estimatedTime: {
			essential: 7,
			deepen: 5,
			questions: 4
		},
		concepts: ["cognitive_bias"],
		introduction: "Listas de vieses viralizam. O curso pede o contrário: o padrão, o contexto em que a heurística ajuda, e o que o nome não explica.",
		blocks: [
			{
				id: "m23-q",
				kind: "question",
				body: "Se eu disser 'isso é viés de confirmação', expliquei o caso?"
			},
			{
				id: "m23-a",
				kind: "answer",
				body: "Quase nunca. [[cognitive_bias|Viés]] é um desvio sistemático. O nome é um rótulo. Ainda faltam processo, incentivo e dados."
			},
			{
				id: "m23-e",
				kind: "explain",
				title: "Heurística útil noutro lugar",
				body: "Muitos vieses são o verso de atalhos que funcionam sob tempo e informação limitada. Tratar o atalho como estupidez é outro erro."
			},
			{
				id: "m23-r",
				kind: "recall",
				body: "Dê um exemplo em que um atalho acerta no cotidiano e falha num teste de laboratório."
			}
		],
		misconceptions: [{
			claim: "Colecionar nomes de vieses é compreender julgamento.",
			whyPlausible: "A lista parece expertise.",
			problem: "Rótulo sem mecanismo.",
			better: "Pergunte qual processo produziu o padrão."
		}],
		integration: "Predição, no módulo seguinte, oferece um princípio que atravessa percepção, ação e aprendizagem — ainda como modelo.",
		relatedModules: ["module_21", "module_24"],
		questions: [
			q$1({
				id: "m23-q1",
				moduleId: "module_23",
				conceptIds: ["cognitive_bias"],
				type: "misconception",
				difficulty: 1,
				prompt: "Um viés cognitivo é:",
				options: [{
					id: "a",
					text: "Prova de que a pessoa é pouco inteligente."
				}, {
					id: "b",
					text: "Um desvio sistemático em relação a um modelo normativo, muitas vezes ligado a heurísticas."
				}],
				correctAnswer: "b",
				explanation: "Sistemático ≠ estúpido.",
				hint1: "Sistemático.",
				hint2: "Normativo.",
				hint3: "Não QI.",
				errorKind: "generalization"
			}),
			q$1({
				id: "m23-q2",
				moduleId: "module_23",
				conceptIds: ["cognitive_bias"],
				type: "limit",
				difficulty: 2,
				prompt: "Nomear o viés basta como análise de um caso?",
				options: [{
					id: "a",
					text: "Sim."
				}, {
					id: "b",
					text: "Não. Faltam processo, evidência e, muitas vezes, mais de uma explicação possível."
				}],
				correctAnswer: "b",
				explanation: "Rótulo ≠ mecanismo.",
				hint1: "Mecanismo.",
				hint2: "Alternativas.",
				hint3: "Não basta.",
				errorKind: "language"
			}),
			q$1({
				id: "m23-q3",
				moduleId: "module_23",
				conceptIds: ["cognitive_bias"],
				type: "application",
				difficulty: 2,
				prompt: "Alguém só lê o que confirma a tese. Além do rótulo, o que perguntar?",
				options: [{
					id: "a",
					text: "Quais pistas, incentivos e custos de buscar o contrário estão no ambiente?"
				}, {
					id: "b",
					text: "Nada: o nome encerra o caso."
				}],
				correctAnswer: "a",
				explanation: "Ambiente e processo.",
				hint1: "Incentivo.",
				hint2: "Custo.",
				hint3: "Ambiente.",
				errorKind: "causal"
			}),
			q$1({
				id: "m23-q4",
				moduleId: "module_23",
				conceptIds: ["cognitive_bias"],
				type: "recall",
				difficulty: 1,
				prompt: "Por que nem todo erro é um viés nomeado?",
				correctAnswer: "open",
				modelAnswer: "Porque há ruído, falta de informação, fadiga e erros não sistemáticos. Viés implica padrão. Forçar um nome é falsa precisão.",
				explanation: "Falsos positivos de rótulo.",
				hint1: "Sistemático.",
				hint2: "Ruído.",
				hint3: "Falsa precisão."
			})
		],
		summary: {
			shouldKnow: ["Definir viés sem insulto.", "Não parar no nome."],
			acquiredConcepts: ["cognitive_bias"]
		},
		masteryCriteria: mastery$1,
		references: refs$1,
		contentVersion: "1.0"
	},
	{
		id: "module_24",
		stage: 3,
		number: 24,
		title: "Integração cognitiva",
		shortTitle: "Integração 3",
		objective: "Fechar a etapa 3 com informação → atenção → memória → avaliação → decisão → ação → aprendizagem, admitindo simultaneidade.",
		centralQuestion: "Como esses processos ocorrem juntos sem virar uma fila de montagem?",
		prerequisites: [
			"module_17",
			"module_18",
			"module_20",
			"module_22"
		],
		estimatedTime: {
			essential: 7,
			deepen: 4,
			questions: 4
		},
		concepts: [
			"prediction",
			"attention",
			"decision_making"
		],
		introduction: "Não ensinar conceito novo obrigatório, salvo um princípio organizador: predição. E marcar que é modelo sustentado, não dogma.",
		blocks: [
			{
				id: "m24-q",
				kind: "question",
				body: "A mente é uma esteira: primeiro atenta, depois memoriza, depois decide?"
			},
			{
				id: "m24-a",
				kind: "answer",
				body: "Não. A cadeia didática ajuda a estudar. Na operação real, processos se sobrepõem. [[prediction|Predição]] atravessa vários deles: o sistema antecipa, e o erro atualiza."
			},
			{
				id: "m24-m",
				kind: "mechanism",
				title: "Cadeia de estudo, não de relógio",
				steps: [
					{
						id: "i",
						title: "Informação",
						body: "Entradas e contexto."
					},
					{
						id: "a",
						title: "Atenção",
						body: "Seleção."
					},
					{
						id: "m",
						title: "Memória",
						body: "Manutenção e traços."
					},
					{
						id: "v",
						title: "Avaliação",
						body: "Valor e relevância."
					},
					{
						id: "d",
						title: "Decisão e ação",
						body: "Políticas em competição, inclusive hábito."
					},
					{
						id: "l",
						title: "Aprendizagem",
						body: "Atualização — o fim que já estava no começo."
					}
				]
			},
			{
				id: "m24-r",
				kind: "recall",
				body: "Onde o hábito fura a esteira deliberativa?"
			}
		],
		misconceptions: [{
			claim: "Cognição substitui biologia.",
			whyPlausible: "Falamos em processos mentais.",
			problem: "Outro nível, mesmo organismo.",
			better: "Descrição cognitiva sobre fundamento biológico."
		}],
		integration: "A etapa 4 aplica o raciocínio a pessoas reais, com o freio ético puxado.",
		relatedModules: ["module_16", "module_32"],
		questions: [
			q$1({
				id: "m24-q1",
				moduleId: "module_24",
				conceptIds: ["prediction"],
				type: "integration",
				difficulty: 2,
				prompt: "A cadeia cognitiva do curso é:",
				options: [{
					id: "a",
					text: "Uma esteira literal no encéfalo."
				}, {
					id: "b",
					text: "Um mapa de estudo; processos podem ocorrer simultaneamente, com predição atravessando níveis."
				}],
				correctAnswer: "b",
				explanation: "Didática versus ontologia.",
				hint1: "Mapa de estudo.",
				hint2: "Simultâneo.",
				hint3: "Predição."
			}),
			q$1({
				id: "m24-q2",
				moduleId: "module_24",
				conceptIds: ["habit"],
				type: "application",
				difficulty: 2,
				prompt: "A ação dispara antes da deliberação terminar. Isso invalida a cadeia?",
				options: [{
					id: "a",
					text: "Sim, o curso inteiro cai."
				}, {
					id: "b",
					text: "Não: mostra que controladores distintos têm temporalidades distintas — a cadeia não é um relógio único."
				}],
				correctAnswer: "b",
				explanation: "Hábito como furo produtivo.",
				hint1: "Temporalidades.",
				hint2: "Hábito.",
				hint3: "Não relógio."
			}),
			q$1({
				id: "m24-q3",
				moduleId: "module_24",
				conceptIds: ["prediction"],
				type: "limit",
				difficulty: 2,
				prompt: "Devemos reduzir toda a mente a um algoritmo preditivo?",
				options: [{
					id: "a",
					text: "Sim, é dogma."
				}, {
					id: "b",
					text: "Não. É um princípio organizador útil; transformá-lo em religião é o mesmo erro de qualquer slogan."
				}],
				correctAnswer: "b",
				explanation: "Modelo sustentado, não dogma.",
				hint1: "Princípio, não religião.",
				hint2: "Cuidado com slogans.",
				hint3: "Não reduza.",
				errorKind: "generalization"
			}),
			q$1({
				id: "m24-q4",
				moduleId: "module_24",
				conceptIds: ["levels_of_analysis"],
				type: "recall",
				difficulty: 2,
				prompt: "Como a etapa 3 se relaciona com a 1 e a 2 sem substituí-las?",
				correctAnswer: "open",
				modelAnswer: "Como outro nível de descrição: atenção e decisão acontecem em organismos com membranas, circuitos e eixos. A cognição nomeia operações; não apaga o chão.",
				explanation: "Três andares, um prédio.",
				hint1: "Nível.",
				hint2: "Não substitui.",
				hint3: "Mesmo organismo."
			})
		],
		summary: {
			shouldKnow: [
				"Recitar a cadeia cognitiva.",
				"Admitir simultaneidade.",
				"Usar predição com modestia."
			],
			acquiredConcepts: ["prediction"]
		},
		masteryCriteria: mastery$1,
		references: refs$1,
		contentVersion: "1.0"
	}
];
var mastery = {
	comprehension: 70,
	recall: 70,
	contrast: 70,
	application: 60
};
var refs = [
	{
		title: "Rock, SCARF (NeuroLeadership Journal) — ferramenta, não anatomia",
		kind: "artigo"
	},
	{
		title: "Porges / literatura de ameaça social — ler com cautela de divulgação",
		kind: "revisao"
	},
	{
		title: "Código de ética profissional da sua área (quando houver)",
		kind: "instituicao"
	}
];
function q(p) {
	return p;
}
var STAGE_4_MODULES = [
	{
		id: "module_25",
		stage: 4,
		number: 25,
		title: "Escuta antes da intervenção",
		shortTitle: "Escuta",
		objective: "Colocar a escuta como primeiro ato: fenômeno, contexto e interpretação da outra pessoa antes do modelo.",
		centralQuestion: "O que está acontecendo, na visão desta pessoa?",
		prerequisites: ["module_24"],
		estimatedTime: {
			essential: 7,
			deepen: 5,
			questions: 4
		},
		concepts: ["listening"],
		introduction: "A etapa 4 aplica o raciocínio a situações humanas. O primeiro erro é chegar com o rótulo neural. Escutar não é técnica de venda; é recusar o encaixe precoce.",
		blocks: [
			{
				id: "m25-q",
				kind: "question",
				body: "Por que um modelo bom pode estragar uma conversa?"
			},
			{
				id: "m25-a",
				kind: "answer",
				body: "Porque [[listening|escutar]] colhe o fenômeno e o significado alheio. Sem isso, o modelo vira um molde. A trilha ensina mecanismos gerais, não a biografia de ninguém."
			},
			{
				id: "m25-e",
				kind: "explain",
				title: "Ordem",
				body: "Observável → relato → hipótese → só então teste pequeno. Inverter a ordem é o atalho que a etapa 1 já condenou entre níveis."
			},
			{
				id: "m25-r",
				kind: "recall",
				body: "Qual pergunta abre qualquer caso neste curso?"
			},
			{
				id: "m25-c",
				kind: "case",
				title: "Caso breve",
				body: "Alguém atrasa entregas. Você pensa 'hábito' ou 'ameaça'. Antes: o que a pessoa descreve? O contexto mudou? Há mais de uma explicação plausível?"
			}
		],
		misconceptions: [{
			claim: "Se eu sei neurociência, já sei o que a pessoa precisa.",
			whyPlausible: "O conhecimento dá confiança.",
			problem: "Confiança + modelo ≠ evidência sobre aquele indivíduo.",
			better: "Mecanismos gerais informam perguntas, não laudos."
		}],
		integration: "Ameaça e segurança social vão explicar por que alguém se fecha — ainda sem diagnóstico.",
		relatedModules: [
			"module_26",
			"module_28",
			"module_31"
		],
		questions: [
			q({
				id: "m25-q1",
				moduleId: "module_25",
				conceptIds: ["listening"],
				type: "recognition",
				difficulty: 1,
				prompt: "O primeiro ato responsável é:",
				options: [{
					id: "a",
					text: "Aplicar o rótulo neural."
				}, {
					id: "b",
					text: "Escutar fenômeno, contexto e interpretação da pessoa."
				}],
				correctAnswer: "b",
				explanation: "Ordem ética e epistêmica.",
				hint1: "Antes do modelo.",
				hint2: "Relato.",
				hint3: "Escuta."
			}),
			q({
				id: "m25-q2",
				moduleId: "module_25",
				conceptIds: ["listening"],
				type: "misconception",
				difficulty: 2,
				prompt: "Usar a trilha para explicar a vida inteira de alguém é um erro porque:",
				options: [{
					id: "a",
					text: "A trilha é falsa."
				}, {
					id: "b",
					text: "Generaliza um mecanismo e ultrapassa o que a evidência daquele caso permite."
				}],
				correctAnswer: "b",
				explanation: "Limite de aplicação, já no primeiro módulo da etapa.",
				hint1: "Aquele caso.",
				hint2: "Evidência.",
				hint3: "Não a vida inteira.",
				errorKind: "generalization"
			}),
			q({
				id: "m25-q3",
				moduleId: "module_25",
				conceptIds: ["listening"],
				type: "application",
				difficulty: 2,
				prompt: "Na reunião que desandou, o passo 1 é:",
				options: [{
					id: "a",
					text: "Diagnosticar ansiedade social."
				}, {
					id: "b",
					text: "Descrever o observável e ouvir como cada um interpretou, antes de hipotetizar mecanismos."
				}],
				correctAnswer: "b",
				explanation: "Caso do projeto final, em miniatura.",
				hint1: "Observável.",
				hint2: "Interpretação.",
				hint3: "Depois hipótese.",
				errorKind: "scale"
			}),
			q({
				id: "m25-q4",
				moduleId: "module_25",
				conceptIds: ["listening"],
				type: "recall",
				difficulty: 1,
				prompt: "Como a escuta se relaciona com 'evidência versus hipótese'?",
				correctAnswer: "open",
				modelAnswer: "O relato e o observável são o que se tem; o mecanismo é hipótese até haver mais. Escutar impede que a hipótese se vista de fato.",
				explanation: "Transferência do módulo 1.",
				hint1: "Fato versus hipótese.",
				hint2: "Relato é dado.",
				hint3: "Mecanismo é proposta."
			})
		],
		summary: {
			shouldKnow: ["Abrir com o fenômeno.", "Não encaixar a pessoa no módulo favorito."],
			acquiredConcepts: ["listening"]
		},
		masteryCriteria: mastery,
		references: refs,
		contentVersion: "1.0"
	},
	{
		id: "module_26",
		stage: 4,
		number: 26,
		title: "Ameaça, segurança e interação social",
		shortTitle: "Ameaça e segurança",
		objective: "Ligar avaliação de risco social a fisiologia e abertura, sem ler desconforto como 'amígdala disparada'.",
		centralQuestion: "O que uma crítica pública pode estar sinalizando — além do conteúdo literal?",
		prerequisites: ["module_25", "module_13"],
		estimatedTime: {
			essential: 8,
			deepen: 5,
			questions: 4
		},
		concepts: ["threat_safety"],
		introduction: "Status, exclusão e imprevisibilidade podem recrutar defesas que você já estudou. O conteúdo agora é relacional. O erro é o atalho anatômico.",
		blocks: [
			{
				id: "m26-q",
				kind: "question",
				body: "Calar-se após uma crítica pública é prova de um transtorno?"
			},
			{
				id: "m26-a",
				kind: "answer",
				body: "Não. [[threat_safety|Ameaça e segurança]] sociais alteram atenção, fisiologia e fala. Há muitas explicações. Sem história e contexto, o laudo é excesso."
			},
			{
				id: "m26-e",
				kind: "explain",
				title: "O que se pode dizer",
				body: "Pode-se dizer: esta situação é compatível com sinal de ameaça de status. Não se pode dizer: a amígdala dele disparou e por isso tem o transtorno Y."
			},
			{
				id: "m26-r",
				kind: "recall",
				body: "Traduza um desconforto social em níveis (social, cognitivo, sistêmico) sem fechar causa única."
			}
		],
		misconceptions: [{
			claim: "Desconforto social = amígdala disparada = transtorno.",
			whyPlausible: "A cadeia parece científica.",
			problem: "Três saltos: de situação a estrutura, de estrutura a diagnóstico.",
			better: "Compatível com avaliação de ameaça; hipóteses em aberto."
		}],
		integration: "SCARF vai oferecer uma heurística prática para desenhar a conversa — marcada como ferramenta.",
		relatedModules: [
			"module_11",
			"module_13",
			"module_27"
		],
		questions: [
			q({
				id: "m26-q1",
				moduleId: "module_26",
				conceptIds: ["threat_safety"],
				type: "misconception",
				difficulty: 1,
				prompt: "A melhor leitura de um silêncio após crítica pública:",
				options: [{
					id: "a",
					text: "Transtorno de ansiedade, amígdala disparada."
				}, {
					id: "b",
					text: "Possível sinal de ameaça de status; várias explicações; sem base para diagnóstico."
				}],
				correctAnswer: "b",
				explanation: "Regra contra diagnóstico leigo.",
				hint1: "Possível.",
				hint2: "Várias.",
				hint3: "Sem laudo.",
				errorKind: "causal"
			}),
			q({
				id: "m26-q2",
				moduleId: "module_26",
				conceptIds: ["threat_safety"],
				type: "application",
				difficulty: 2,
				prompt: "O que poderia ser testado, eticamente, nesse cenário de reunião?",
				options: [{
					id: "a",
					text: "Mudar o contexto do feedback (privado, específico) e observar."
				}, {
					id: "b",
					text: "Anunciar o diagnóstico no grupo."
				}],
				correctAnswer: "a",
				explanation: "Intervenção pequena e reversível.",
				hint1: "Contexto.",
				hint2: "Observar.",
				hint3: "Não diagnostique.",
				errorKind: "generalization"
			}),
			q({
				id: "m26-q3",
				moduleId: "module_26",
				conceptIds: ["amygdala"],
				type: "limit",
				difficulty: 2,
				prompt: "Por que 'sua amígdala disparou' é má comunicação e má ciência aqui?",
				options: [{
					id: "a",
					text: "Porque localiza, personifica e não é observável na conversa."
				}, {
					id: "b",
					text: "Porque a amígdala não participa de nada social."
				}],
				correctAnswer: "a",
				explanation: "Mesmo que circuitos de relevância participem em geral, a frase na reunião é um salto.",
				hint1: "Não observável.",
				hint2: "Localiza.",
				hint3: "Personifica.",
				errorKind: "scale"
			}),
			q({
				id: "m26-q4",
				moduleId: "module_26",
				conceptIds: ["threat_safety"],
				type: "recall",
				difficulty: 1,
				prompt: "Que eixos da etapa 2 podem participar de uma defesa social, sem serem a explicação completa?",
				correctAnswer: "open",
				modelAnswer: "Avaliação de relevância, ajustes autonômicos e, conforme duração, HPA — sempre atravessados por significado cultural e história. Nenhum deles esgota o episódio.",
				explanation: "Integração 2+4.",
				hint1: "Autonômico.",
				hint2: "HPA.",
				hint3: "Significado."
			})
		],
		summary: {
			shouldKnow: ["Ler ameaça social sem anatomizar a pessoa.", "Manter hipóteses múltiplas."],
			acquiredConcepts: ["threat_safety"]
		},
		masteryCriteria: mastery,
		references: refs,
		contentVersion: "1.0"
	},
	{
		id: "module_27",
		stage: 4,
		number: 27,
		title: "Modelo SCARF",
		shortTitle: "SCARF",
		objective: "Ensinar SCARF como ferramenta de comunicação, não como mapa literal do cérebro.",
		centralQuestion: "Como preparar uma conversa difícil sem fingir anatomia?",
		prerequisites: ["module_26"],
		estimatedTime: {
			essential: 9,
			deepen: 6,
			questions: 5
		},
		concepts: ["scarf"],
		introduction: "SCARF agrupa Status, Certainty, Autonomy, Relatedness e Fairness. É heurística. Cada dimensão tem literatura distinta. Não ontologize.",
		blocks: [
			{
				id: "m27-q",
				kind: "question",
				body: "SCARF é um mapa dos cinco circuitos sociais?"
			},
			{
				id: "m27-a",
				kind: "answer",
				body: "Não. [[scarf|SCARF]] é uma ferramenta prática. Útil para desenhar interações; perigosa se virar frenologia de reunião."
			},
			{
				id: "m27-d",
				kind: "diagram",
				diagram: "scarf",
				title: "Cinco dimensões",
				body: "Para cada uma: conceito → situação → possível percepção → efeito → estratégia → limite do modelo."
			},
			{
				id: "m27-m",
				kind: "mechanism",
				title: "As cinco, em modo ferramenta",
				steps: [
					{
						id: "s",
						title: "Status",
						body: "Posição relativa. Crítica pública ameaça; reconhecimento específico pode reduzir a ameaça — sem manipular."
					},
					{
						id: "c",
						title: "Certainty",
						body: "Previsibilidade. Ambiguidade crônica custa. Clareza de processo ajuda."
					},
					{
						id: "a",
						title: "Autonomy",
						body: "Sensação de controle sobre o próprio ato. Microescolhas versus microgestão."
					},
					{
						id: "r",
						title: "Relatedness",
						body: "Pertencer versus exclusão."
					},
					{
						id: "f",
						title: "Fairness",
						body: "Justiça percebida. Regras opacas queimam confiança."
					}
				]
			},
			{
				id: "m27-l",
				kind: "limit",
				title: "Limite do modelo",
				body: "SCARF não mede o cérebro de ninguém. Não substitui direito trabalhista, cuidado clínico ou escuta. Evidence level: hipótese / ferramenta.",
				layer: 1
			},
			{
				id: "m27-r",
				kind: "recall",
				body: "Escolha uma dimensão e complete: situação → percepção possível → o que você não pode concluir."
			}
		],
		misconceptions: [{
			claim: "SCARF descreve os cinco circuitos sociais oficiais.",
			whyPlausible: "A sigla é limpa e 'neural'.",
			problem: "Ferramenta ontologizada.",
			better: "Checklist de desenho de conversa, com limites explícitos."
		}],
		integration: "Perguntas estratégicas operacionalizam a escuta dentro (ou fora) dessas dimensões.",
		relatedModules: [
			"module_25",
			"module_28",
			"module_31"
		],
		questions: [
			q({
				id: "m27-q1",
				moduleId: "module_27",
				conceptIds: ["scarf"],
				type: "misconception",
				difficulty: 1,
				prompt: "SCARF é:",
				options: [{
					id: "a",
					text: "Um mapa literal do cérebro social."
				}, {
					id: "b",
					text: "Uma heurística de comunicação (status, certeza, autonomia, vínculo, justiça)."
				}],
				correctAnswer: "b",
				explanation: "Ferramenta, não anatomia.",
				hint1: "Heurística.",
				hint2: "Cinco palavras.",
				hint3: "Não mapa.",
				errorKind: "language"
			}),
			q({
				id: "m27-q2",
				moduleId: "module_27",
				conceptIds: ["scarf"],
				type: "application",
				difficulty: 2,
				prompt: "Feedback difícil alinhado ao modelo (sem manipulação):",
				options: [{
					id: "a",
					text: "Público, vago, sem direito a resposta."
				}, {
					id: "b",
					text: "Privado, específico, com clareza de critérios e espaço de resposta."
				}],
				correctAnswer: "b",
				explanation: "Status + fairness + autonomy, como desenho, não como circuito.",
				hint1: "Privado.",
				hint2: "Específico.",
				hint3: "Critérios."
			}),
			q({
				id: "m27-q3",
				moduleId: "module_27",
				conceptIds: ["scarf"],
				type: "limit",
				difficulty: 2,
				prompt: "Se a pessoa não reagir como o SCARF 'prevê':",
				options: [{
					id: "a",
					text: "O cérebro dela está errado."
				}, {
					id: "b",
					text: "O modelo é incompleto; volte à escuta. Não force o encaixe."
				}],
				correctAnswer: "b",
				explanation: "Ferramentas falham. A pessoa não.",
				hint1: "Incompleto.",
				hint2: "Escuta.",
				hint3: "Não force.",
				errorKind: "generalization"
			}),
			q({
				id: "m27-q4",
				moduleId: "module_27",
				conceptIds: ["scarf"],
				type: "recall",
				difficulty: 1,
				prompt: "Liste as cinco dimensões e diga, para uma delas, um limite.",
				correctAnswer: "open",
				modelAnswer: "Status, Certainty, Autonomy, Relatedness, Fairness. Ex.: Status — reconhecimento não substitui justiça estrutural; não use a dimensão para lisonjear e calar crítica legítima.",
				explanation: "Conceito + limite, como o manuscrito pede.",
				hint1: "A sigla.",
				hint2: "Um limite ético.",
				hint3: "Não manipule."
			}),
			q({
				id: "m27-q5",
				moduleId: "module_27",
				conceptIds: ["evidence_vs_hypothesis"],
				type: "relation",
				difficulty: 2,
				prompt: "O nível de evidência do SCARF neste app é tratado como:",
				options: [{
					id: "a",
					text: "Bem estabelecido como anatomia."
				}, {
					id: "b",
					text: "Ferramenta / hipótese prática, separada do que é bem estabelecido em fisiologia."
				}],
				correctAnswer: "b",
				explanation: "Camada de confiança científica.",
				hint1: "Ferramenta.",
				hint2: "Não anatomia.",
				hint3: "Separe."
			})
		],
		summary: {
			shouldKnow: [
				"Recitar SCARF.",
				"Usar como checklist.",
				"Declarar o limite."
			],
			acquiredConcepts: ["scarf"]
		},
		masteryCriteria: mastery,
		references: refs,
		contentVersion: "1.0"
	},
	{
		id: "module_28",
		stage: 4,
		number: 28,
		title: "Perguntas estratégicas",
		shortTitle: "Perguntas",
		objective: "Formar perguntas que revelam mecanismo e contexto, em vez de perguntas que já contêm o diagnóstico.",
		centralQuestion: "Que pergunta abre o mecanismo sem fechar a pessoa?",
		prerequisites: ["module_25"],
		estimatedTime: {
			essential: 7,
			deepen: 5,
			questions: 4
		},
		concepts: ["strategic_questions"],
		introduction: "A trilha inteira é uma pedagogia da pergunta. Agora ela vira ofício: perguntar para ver, não para confirmar o módulo favorito.",
		blocks: [
			{
				id: "m28-q",
				kind: "question",
				body: "'Você está ansioso?' é uma boa primeira pergunta?"
			},
			{
				id: "m28-a",
				kind: "answer",
				body: "Em geral, não. Já entrega o rótulo. [[strategic_questions|Perguntas estratégicas]] pedem sequência, contexto, exceção e o que se pode concluir."
			},
			{
				id: "m28-m",
				kind: "mechanism",
				title: "Família útil",
				steps: [
					{
						id: "o",
						title: "Observável",
						body: "O que acontece, concretamente?"
					},
					{
						id: "t",
						title: "Tempo",
						body: "O que vem imediatamente antes e depois?"
					},
					{
						id: "x",
						title: "Exceção",
						body: "Quando isso não acontece?"
					},
					{
						id: "h",
						title: "Hipótese",
						body: "O que isso permite — e o que não permite — concluir?"
					}
				]
			},
			{
				id: "m28-r",
				kind: "recall",
				body: "Transforme 'você tem TDAH?' em duas perguntas que não diagnostiquem."
			}
		],
		misconceptions: [{
			claim: "Perguntas boas já contêm a resposta certa.",
			whyPlausible: "Eficiência.",
			problem: "Viés de confirmação com jaleco.",
			better: "Perguntas que poderiam falsificar a hipótese favorita."
		}],
		integration: "Regulação entra quando a conversa precisa de timing, não só de conteúdo.",
		relatedModules: [
			"module_23",
			"module_25",
			"module_29"
		],
		questions: [
			q({
				id: "m28-q1",
				moduleId: "module_28",
				conceptIds: ["strategic_questions"],
				type: "recognition",
				difficulty: 1,
				prompt: "Uma pergunta estratégica:",
				options: [{
					id: "a",
					text: "Já inclui o diagnóstico."
				}, {
					id: "b",
					text: "Revela sequência, contexto ou limite do que se pode concluir."
				}],
				correctAnswer: "b",
				explanation: "Abrir, não fechar.",
				hint1: "Sequência.",
				hint2: "Limite.",
				hint3: "Não rótulo."
			}),
			q({
				id: "m28-q2",
				moduleId: "module_28",
				conceptIds: ["strategic_questions"],
				type: "application",
				difficulty: 2,
				prompt: "Melhor par de perguntas para o estudo que 'não gruda':",
				options: [{
					id: "a",
					text: "'Você é preguiçoso?' / 'Tem déficit de dopamina?'"
				}, {
					id: "b",
					text: "'O que você faz quando estuda?' / 'Consegue reconstruir o mecanismo sem olhar?'"
				}],
				correctAnswer: "b",
				explanation: "Processo observável versus essência.",
				hint1: "Comportamento de estudo.",
				hint2: "Reconstrução.",
				hint3: "Não essência.",
				errorKind: "language"
			}),
			q({
				id: "m28-q3",
				moduleId: "module_28",
				conceptIds: ["strategic_questions"],
				type: "recall",
				difficulty: 1,
				prompt: "Por que perguntar pela exceção é poderoso?",
				correctAnswer: "open",
				modelAnswer: "Porque uma hipótese que não sobrevive à exceção era generalização. A exceção revela contexto e falsifica o 'sempre'.",
				explanation: "Anti-generalização.",
				hint1: "Sempre.",
				hint2: "Falsificar.",
				hint3: "Contexto."
			}),
			q({
				id: "m28-q4",
				moduleId: "module_28",
				conceptIds: ["cognitive_bias"],
				type: "limit",
				difficulty: 2,
				prompt: "Se todas as suas perguntas só podem confirmar o módulo 22 (hábito):",
				options: [{
					id: "a",
					text: "Você está sendo eficiente."
				}, {
					id: "b",
					text: "Você está enviesado: falte uma pergunta que poderia mostrar outra explicação."
				}],
				correctAnswer: "b",
				explanation: "O viés agora é do analista.",
				hint1: "Confirmação.",
				hint2: "Outra explicação.",
				hint3: "Falte a pergunta.",
				errorKind: "generalization"
			})
		],
		summary: {
			shouldKnow: ["Trocar rótulo por sequência.", "Incluir exceção e limite."],
			acquiredConcepts: ["strategic_questions"]
		},
		masteryCriteria: mastery,
		references: refs,
		contentVersion: "1.0"
	},
	{
		id: "module_29",
		stage: 4,
		number: 29,
		title: "Comunicação e regulação",
		shortTitle: "Regulação",
		objective: "Ver a comunicação como capaz de ajudar ou piorar a regulação — timing e ameaça, não 'controle-se'.",
		centralQuestion: "Esta conversa, neste momento, regula ou desregula?",
		prerequisites: ["module_26", "module_17"],
		estimatedTime: {
			essential: 7,
			deepen: 5,
			questions: 4
		},
		concepts: ["regulation"],
		introduction: "Regulação não é um interruptor moral. Pode ser atencional, reavaliativa, corporal, relacional (co-regulação). A conversa é parte do sistema.",
		blocks: [
			{
				id: "m29-q",
				kind: "question",
				body: "'Controle-se' descreve um mecanismo?"
			},
			{
				id: "m29-a",
				kind: "answer",
				body: "Não. [[regulation|Regular]] é alterar intensidade, duração ou expressão de um estado. A ordem 'controle-se' ignora carga, ameaça e timing."
			},
			{
				id: "m29-e",
				kind: "explain",
				title: "Implicação",
				body: "Às vezes o conteúdo certo no momento errado piora o episódio. Adiar cinco minutos pode ser a intervenção. Isso não é manipulação se for transparente e respeitoso."
			},
			{
				id: "m29-r",
				kind: "recall",
				body: "Dê um exemplo de co-regulação que não é aconselhamento clínico."
			}
		],
		misconceptions: [{
			claim: "Regulação é força de vontade pura.",
			whyPlausible: "A cultura ama o herói.",
			problem: "Apaga atenção, contexto e o outro.",
			better: "Processos múltiplos, inclusive relacionais."
		}],
		integration: "Agora podemos transformar conhecimento em intervenção testável — ainda sem jaleco.",
		relatedModules: [
			"module_17",
			"module_26",
			"module_30"
		],
		questions: [
			q({
				id: "m29-q1",
				moduleId: "module_29",
				conceptIds: ["regulation"],
				type: "misconception",
				difficulty: 1,
				prompt: "Regulação é:",
				options: [{
					id: "a",
					text: "Um interruptor de caráter."
				}, {
					id: "b",
					text: "Processos que alteram intensidade, duração ou expressão de um estado, inclusive relacionais."
				}],
				correctAnswer: "b",
				explanation: "Plural e relacional.",
				hint1: "Processos.",
				hint2: "Inclui o outro.",
				hint3: "Não interruptor.",
				errorKind: "language"
			}),
			q({
				id: "m29-q2",
				moduleId: "module_29",
				conceptIds: ["regulation"],
				type: "application",
				difficulty: 2,
				prompt: "Alguém está visivelmente no limite. Conteúdo analítico agora:",
				options: [{
					id: "a",
					text: "Pode aumentar a carga; timing é parte da regulação."
				}, {
					id: "b",
					text: "Sempre ajuda, porque verdade acalma automaticamente."
				}],
				correctAnswer: "a",
				explanation: "Timing.",
				hint1: "Carga.",
				hint2: "Agora versus depois.",
				hint3: "Não sempre.",
				errorKind: "causal"
			}),
			q({
				id: "m29-q3",
				moduleId: "module_29",
				conceptIds: ["regulation"],
				type: "recall",
				difficulty: 1,
				prompt: "Como atenção entra na regulação?",
				correctAnswer: "open",
				modelAnswer: "Selecionar ou desengajar de um conteúdo muda a entrada que sustenta o estado. Não é o único caminho, e não é supressão heroica.",
				explanation: "Ponte módulo 17.",
				hint1: "Seleção.",
				hint2: "Entrada.",
				hint3: "Não o único."
			}),
			q({
				id: "m29-q4",
				moduleId: "module_29",
				conceptIds: ["regulation"],
				type: "limit",
				difficulty: 2,
				prompt: "Co-regulação neste curso autoriza terapia improvisada?",
				options: [{
					id: "a",
					text: "Sim, agora você é terapeuta."
				}, {
					id: "b",
					text: "Não. Autoriza respeito ao timing e à ameaça numa conversa cotidiana, dentro do seu papel."
				}],
				correctAnswer: "b",
				explanation: "Papel e limite.",
				hint1: "Papel.",
				hint2: "Cotidiano.",
				hint3: "Não terapeuta.",
				errorKind: "generalization"
			})
		],
		summary: {
			shouldKnow: ["Definir regulação sem moral.", "Incluir timing na comunicação."],
			acquiredConcepts: ["regulation"]
		},
		masteryCriteria: mastery,
		references: refs,
		contentVersion: "1.0"
	},
	{
		id: "module_30",
		stage: 4,
		number: 30,
		title: "Transformando conhecimento em intervenção",
		shortTitle: "Intervenção",
		objective: "Formular uma ação testável, ética e reversível — hipótese, não laudo.",
		centralQuestion: "O que poderia ser testado, e como saberíamos se ajudou?",
		prerequisites: ["module_25", "module_28"],
		estimatedTime: {
			essential: 8,
			deepen: 5,
			questions: 4
		},
		concepts: ["intervention"],
		introduction: "Intervir é mudar uma variável e observar. Não é diagnosticar. O conhecimento de mecanismos sugere variáveis, não destinos.",
		blocks: [
			{
				id: "m30-q",
				kind: "question",
				body: "Se a pessoa faz X, ela tem o transtorno Y?"
			},
			{
				id: "m30-a",
				kind: "answer",
				body: "Não. Esse comportamento pode ter diversas explicações. É necessário considerar contexto, história, estado atual e, quando pertinente, avaliação profissional. [[intervention|Intervenção responsável]] é um teste, não um veredito."
			},
			{
				id: "m30-m",
				kind: "mechanism",
				title: "Receita mínima",
				steps: [
					{
						id: "v",
						title: "Variável",
						body: "Uma mudança pequena (pista, horário, formato do feedback)."
					},
					{
						id: "c",
						title: "Critério",
						body: "O que contaria como melhora observável."
					},
					{
						id: "t",
						title: "Tempo",
						body: "Quando rever."
					},
					{
						id: "r",
						title: "Reversibilidade e consentimento",
						body: "Dá para voltar atrás? A pessoa concordou?"
					}
				]
			},
			{
				id: "m30-r",
				kind: "recall",
				body: "Escreva uma intervenção de uma frase que poderia falhar — se não pode falhar, não é teste."
			}
		],
		misconceptions: [{
			claim: "Se faz X, tem Y.",
			whyPlausible: "Atalho clínico de corredor.",
			problem: "Comportamento ≠ transtorno; falta base.",
			better: "Hipóteses múltiplas + encaminhamento quando couber."
		}],
		integration: "O próximo módulo é só sobre o que você não pode fazer.",
		relatedModules: [
			"module_31",
			"module_32",
			"module_22"
		],
		questions: [
			q({
				id: "m30-q1",
				moduleId: "module_30",
				conceptIds: ["intervention"],
				type: "misconception",
				difficulty: 1,
				prompt: "A frase proibida do manuscrito é do tipo:",
				options: [{
					id: "a",
					text: "'Se a pessoa faz X, provavelmente possui transtorno Y.'"
				}, {
					id: "b",
					text: "'Esse comportamento pode ter diversas explicações.'"
				}],
				correctAnswer: "a",
				explanation: "A opção A é exatamente o que evitar. A pergunta pede identificar a proibida.",
				hint1: "Diagnóstico leigo.",
				hint2: "Provavelmente possui.",
				hint3: "A primeira.",
				errorKind: "generalization"
			}),
			q({
				id: "m30-q2",
				moduleId: "module_30",
				conceptIds: ["intervention"],
				type: "application",
				difficulty: 2,
				prompt: "Para o caminho automático do celular, uma intervenção alinhada:",
				options: [{
					id: "a",
					text: "Mudar a pista (carregar fora do quarto) e combinar um critério de uma semana."
				}, {
					id: "b",
					text: "Diagnosticar adição e anunciar na família."
				}],
				correctAnswer: "a",
				explanation: "Pista + critério, sem laudo.",
				hint1: "Hábito.",
				hint2: "Pista.",
				hint3: "Critério."
			}),
			q({
				id: "m30-q3",
				moduleId: "module_30",
				conceptIds: ["intervention"],
				type: "limit",
				difficulty: 2,
				prompt: "Se a intervenção 'funcionar', isso prova o mecanismo hipotetizado?",
				options: [{
					id: "a",
					text: "Sim, causa única encontrada."
				}, {
					id: "b",
					text: "Não necessariamente. Outras variáveis podem ter mudado; sucesso prático ≠ prova causal completa."
				}],
				correctAnswer: "b",
				explanation: "Mesma disciplina da etapa 1.",
				hint1: "Causa.",
				hint2: "Outras variáveis.",
				hint3: "Não necessariamente.",
				errorKind: "causal"
			}),
			q({
				id: "m30-q4",
				moduleId: "module_30",
				conceptIds: ["intervention"],
				type: "recall",
				difficulty: 1,
				prompt: "Quais quatro ingredientes mínimos de uma intervenção responsável?",
				correctAnswer: "open",
				modelAnswer: "Variável pequena, critério observável, horizonte de revisão, consentimento/reversibilidade. Sem diagnóstico.",
				explanation: "Receita.",
				hint1: "Variável.",
				hint2: "Critério.",
				hint3: "Consentimento."
			})
		],
		summary: {
			shouldKnow: ["Recusar o se X então transtorno Y.", "Montar um teste pequeno."],
			acquiredConcepts: ["intervention"]
		},
		masteryCriteria: mastery,
		references: refs,
		contentVersion: "1.0"
	},
	{
		id: "module_31",
		stage: 4,
		number: 31,
		title: "Limites da aplicação",
		shortTitle: "Limites",
		objective: "Deixar explícito o que a trilha não autoriza: diagnóstico, prescrição, certeza sobre a mente alheia.",
		centralQuestion: "O que não pode ser concluído?",
		prerequisites: ["module_30"],
		estimatedTime: {
			essential: 7,
			deepen: 4,
			questions: 4
		},
		concepts: ["limits_of_application", "evidence_vs_hypothesis"],
		introduction: "Uma boa resposta pode ser: há evidências de X, mas não é possível concluir Y. Isso é habilidade, não fraqueza. Saúde: mecanismos não substituem avaliação clínica individual.",
		blocks: [
			{
				id: "m31-q",
				kind: "question",
				body: "Qual é o produto desta trilha?"
			},
			{
				id: "m31-a",
				kind: "answer",
				body: "Raciocínio neurocientífico, não licença clínica. [[limits_of_application|Limites]] são parte do domínio, não um anexo jurídico."
			},
			{
				id: "m31-m",
				kind: "mechanism",
				title: "Lista de não",
				steps: [
					{
						id: "d",
						title: "Não diagnosticar",
						body: "Nem a si, nem ao outro, a partir destes módulos."
					},
					{
						id: "p",
						title: "Não prescrever",
						body: "Fármaco, protocolo terapêutico, laudo."
					},
					{
						id: "c",
						title: "Não ler mentes",
						body: "Circuitos gerais ≠ o que esta pessoa é."
					},
					{
						id: "s",
						title: "Não vender milagre",
						body: "Plasticidade, dopamina, SCARF — nenhum é varinha."
					}
				]
			},
			{
				id: "m31-h",
				kind: "explain",
				title: "Princípio sobre saúde",
				body: "Conhecimento sobre mecanismos neurobiológicos não substitui avaliação clínica individual."
			},
			{
				id: "m31-r",
				kind: "recall",
				body: "Escreva uma frase de incerteza que seria uma boa resposta num caso ambíguo."
			}
		],
		misconceptions: [{
			claim: "Ciência é sempre achar a resposta única.",
			whyPlausible: "A escola premia certeza.",
			problem: "Casos humanos são subdeterminados.",
			better: "Incerteza bem formada é critério de qualidade."
		}],
		integration: "O projeto final pede exatamente essa disciplina em sete campos.",
		relatedModules: [
			"module_01",
			"module_30",
			"module_32"
		],
		questions: [
			q({
				id: "m31-q1",
				moduleId: "module_31",
				conceptIds: ["limits_of_application"],
				type: "limit",
				difficulty: 1,
				prompt: "Este aplicativo autoriza diagnóstico?",
				options: [{
					id: "a",
					text: "Sim, ao terminar a trilha."
				}, {
					id: "b",
					text: "Não. Forma raciocínio; não concede licença clínica."
				}],
				correctAnswer: "b",
				explanation: "Linha vermelha.",
				hint1: "Licença.",
				hint2: "Raciocínio.",
				hint3: "Não."
			}),
			q({
				id: "m31-q2",
				moduleId: "module_31",
				conceptIds: ["evidence_vs_hypothesis"],
				type: "recognition",
				difficulty: 1,
				prompt: "Uma boa resposta pode ser:",
				options: [{
					id: "a",
					text: "'Há evidências de X, mas não é possível concluir Y apenas com essas informações.'"
				}, {
					id: "b",
					text: "'Tenho certeza absoluta porque li um módulo.'"
				}],
				correctAnswer: "a",
				explanation: "Incerteza como habilidade.",
				hint1: "Manuscrito §119.",
				hint2: "X versus Y.",
				hint3: "A primeira."
			}),
			q({
				id: "m31-q3",
				moduleId: "module_31",
				conceptIds: ["limits_of_application"],
				type: "application",
				difficulty: 2,
				prompt: "Um amigo pede que você 'leia o cérebro dele' depois deste curso. Você:",
				options: [{
					id: "a",
					text: "Recusa o papel, oferece perguntas e, se houver sofrimento, sugere cuidado profissional."
				}, {
					id: "b",
					text: "Entrega um laudo com amígdala e dopamina."
				}],
				correctAnswer: "a",
				explanation: "Papel.",
				hint1: "Recuse o jaleco.",
				hint2: "Perguntas.",
				hint3: "Cuidado profissional.",
				errorKind: "generalization"
			}),
			q({
				id: "m31-q4",
				moduleId: "module_31",
				conceptIds: ["limits_of_application"],
				type: "recall",
				difficulty: 1,
				prompt: "Complete: conhecimento de mecanismos não substitui ____.",
				correctAnswer: "open",
				modelAnswer: "Avaliação clínica individual (nem o consentimento, nem o contexto, nem os limites da sua formação).",
				explanation: "Frase do manuscrito.",
				hint1: "Clínica.",
				hint2: "Individual.",
				hint3: "Avaliação."
			})
		],
		summary: {
			shouldKnow: ["Recusar diagnóstico e prescrição.", "Valorizar incerteza explícita."],
			acquiredConcepts: ["limits_of_application"]
		},
		masteryCriteria: mastery,
		references: refs,
		contentVersion: "1.0"
	},
	{
		id: "module_32",
		stage: 4,
		number: 32,
		title: "Projeto final",
		shortTitle: "Projeto final",
		objective: "Integrar a trilha numa situação complexa: sete campos e uma rubrica de 24 pontos — qualidade da resposta, não inteligência.",
		centralQuestion: "Diante de um caso ambíguo, você reconstrói, diferencia e reconhece limites?",
		prerequisites: ["module_31"],
		estimatedTime: {
			essential: 8,
			deepen: 4,
			questions: 3
		},
		concepts: [
			"evidence_vs_hypothesis",
			"levels_of_analysis",
			"limits_of_application"
		],
		introduction: "Não queremos que você apenas saiba a resposta. Queremos que consiga reconstruir por que ela faz sentido e reconhecer quando deixa de fazer. Escolha um caso, preencha os sete campos, e não fuja da incerteza.",
		blocks: [
			{
				id: "m32-q",
				kind: "question",
				body: "Qual caso resiste a uma palavra-chave única?"
			},
			{
				id: "m32-a",
				kind: "answer",
				body: "Qualquer um dos três oferecidos. Se a sua análise cabe numa palavra ('amígdala', 'dopamina', 'hábito'), ela ainda não é o projeto."
			},
			{
				id: "m32-m",
				kind: "mechanism",
				title: "Sete campos",
				steps: [
					{
						id: "1",
						title: "Fenômeno",
						body: "O observável."
					},
					{
						id: "2",
						title: "Hipóteses",
						body: "Mais de uma."
					},
					{
						id: "3",
						title: "Biológico",
						body: "Escala declarada."
					},
					{
						id: "4",
						title: "Cognitivo",
						body: "Processos, não slogans."
					},
					{
						id: "5",
						title: "Contexto",
						body: "Social e ambiental."
					},
					{
						id: "6",
						title: "Intervenção",
						body: "Teste pequeno."
					},
					{
						id: "7",
						title: "Limitações",
						body: "O que não se conclui."
					}
				]
			},
			{
				id: "m32-rub",
				kind: "explain",
				title: "Rubrica (0–4 cada, total 24)",
				body: "Precisão científica · Integração entre níveis · Qualidade da explicação · Distinção evidência/hipótese · Aplicação · Reconhecimento das limitações. A pontuação não representa inteligência."
			},
			{
				id: "m32-r",
				kind: "recall",
				body: "Antes de escrever: recuse três slogans que você não usará."
			}
		],
		misconceptions: [{
			claim: "O projeto pede a resposta certa única.",
			whyPlausible: "Provas escolares.",
			problem: "O caso é feito para impedir a palavra-chave.",
			better: "Qualidade do raciocínio e dos limites."
		}],
		integration: "Ao terminar, a trilha não acaba: conceitos voltam em revisões. Aprendizagem não é um certificado de 100%.",
		relatedModules: [
			"module_01",
			"module_16",
			"module_24",
			"module_31"
		],
		questions: [
			q({
				id: "m32-q1",
				moduleId: "module_32",
				conceptIds: ["levels_of_analysis"],
				type: "integration",
				difficulty: 3,
				prompt: "Uma análise só com uma molécula, no projeto final:",
				options: [{
					id: "a",
					text: "É o ouro da precisão."
				}, {
					id: "b",
					text: "Falha em integração entre níveis e provavelmente em limites."
				}],
				correctAnswer: "b",
				explanation: "Rubrica: integração.",
				hint1: "Níveis.",
				hint2: "Integração.",
				hint3: "Não uma molécula."
			}),
			q({
				id: "m32-q2",
				moduleId: "module_32",
				conceptIds: ["evidence_vs_hypothesis"],
				type: "limit",
				difficulty: 2,
				prompt: "No campo limitações, uma boa frase:",
				options: [{
					id: "a",
					text: "'Não há limitações porque terminei o curso.'"
				}, {
					id: "b",
					text: "'Não é possível diagnosticar nem atribuir causa única com o que foi dado.'"
				}],
				correctAnswer: "b",
				explanation: "Campo 7 não pode estar vazio de conteúdo.",
				hint1: "Diagnóstico.",
				hint2: "Causa única.",
				hint3: "O que foi dado."
			}),
			q({
				id: "m32-q3",
				moduleId: "module_32",
				conceptIds: ["limits_of_application"],
				type: "application",
				difficulty: 3,
				prompt: "O critério definitivo de sucesso da trilha inclui:",
				options: [{
					id: "a",
					text: "Recitar 32 títulos."
				}, {
					id: "b",
					text: "Reconstruir mecanismos, detectar simplificações, aplicar a situações novas e reconhecer incertezas."
				}],
				correctAnswer: "b",
				explanation: "§172 do manuscrito.",
				hint1: "Reconstruir.",
				hint2: "Incerteza.",
				hint3: "Não recitar."
			})
		],
		summary: {
			shouldKnow: ["Preencher sete campos sem palavra-chave.", "Usar a rubrica como autoavaliação, não como QI."],
			acquiredConcepts: ["evidence_vs_hypothesis", "limits_of_application"]
		},
		masteryCriteria: mastery,
		references: refs,
		contentVersion: "1.0"
	}
];
/** Blocos pedagógicos extras (consequência, conexão, caso, camada 2/3, modelo de recall). */
var EXTRA_BLOCKS = {
	module_09: [
		{
			id: "m09-cons",
			kind: "consequence",
			title: "O que essa mudança de escala permite",
			body: "Permite falar de emoção, estresse e recompensa sem apontar para um único território como se ele fosse a função. O sistema tem tempo próprio: milissegundos na sinapse, segundos no autonômico, minutos a horas no endócrino."
		},
		{
			id: "m09-conn",
			kind: "connection",
			title: "Ainda é o mesmo tecido",
			body: "Nada aqui aposenta a etapa 1. Um sistema é um conjunto de [[circuit|circuitos]] feitos de células com membrana. Subir de escala não é trocar de ontologia.",
			conceptIds: ["circuit"]
		},
		{
			id: "m09-ex",
			kind: "case",
			title: "Caso",
			body: "Uma lesão em um território altera o reconhecimento de faces. Isso mostra um nó crítico. Não mostra que 'o reconhecimento mora ali' com exclusividade, nem que o restante do encéfalo é irrelevante."
		},
		{
			id: "m09-adv",
			kind: "explain",
			title: "Lesão, estimulação, imagem",
			body: "Três métodos, três inferências. Lesão: necessidade relativa. Estimulação: suficiência em um contexto artificial. Imagem: correlação. Nenhum, sozinho, fecha a função.",
			layer: 3
		}
	],
	module_10: [
		{
			id: "m10-cons",
			kind: "consequence",
			title: "O que isso permite perguntar",
			body: "Diante de um episódio afetivo, você pode perguntar: o que foi avaliado? o que o corpo fez? qual tendência de ação? houve sentimento relatável? o que se aprendeu? Nem todo episódio tem todos os componentes."
		},
		{
			id: "m10-conn",
			kind: "connection",
			title: "Níveis, de novo",
			body: "Chamar o episódio de [[emotion_as_process|processo]] não o torna imaterial. Autonômico, endócrino e circuito continuam no quadro — em outro zoom.",
			conceptIds: ["emotion_as_process", "levels_of_analysis"]
		},
		{
			id: "m10-ex",
			kind: "case",
			title: "Mesmo corpo, outro significado",
			body: "Taquicardia no corredor do hospital e taquicardia ao subir um lance de escadas compartilham efetores. O conteúdo do episódio não se lê no pulso sozinho."
		},
		{
			id: "m10-alt",
			kind: "explain",
			title: "De outra maneira",
			body: "Pense em uma peça com vários instrumentos. Tirar o oboé muda a música; o oboé não é a sinfonia. Componentes afetivos são instrumentos, não o nome da peça.",
			alt: "Emoção não é um módulo que se liga. É um episódio com peças que às vezes caminham juntas.",
			layer: 2
		}
	],
	module_11: [
		{
			id: "m11-cons",
			kind: "consequence",
			title: "O que a formulação precisa",
			body: "Toda frase útil sobre a [[amygdala|amígdala]] contém 'participa' ou 'contribui'. Frases com 'é responsável por' ou 'é o centro de' falham o teste deste módulo.",
			conceptIds: ["amygdala"]
		},
		{
			id: "m11-conn",
			kind: "connection",
			title: "Saídas, não essência",
			body: "Núcleos centrais conversam com [[hypothalamus|hipotálamo]] e tronco. Isso explica padrões autonômicos associados a ameaça — sem transformar a estrutura no sentimento.",
			conceptIds: ["hypothalamus"]
		},
		{
			id: "m11-ex",
			kind: "case",
			title: "O que a lesão mostra",
			body: "Certos aprendizados de ameaça ficam prejudicados. A vida afetiva não desaparece. Participação com especificidade: exatamente o oposto de 'a amígdala é o medo'."
		},
		{
			id: "m11-adv",
			kind: "explain",
			title: "Saliência também",
			body: "A amígdala responde a estímulos relevantes, inclusive apetitivos, em vários desenhos. Reduzi-la a medo é estreitar o que a evidência já mostrou.",
			layer: 3,
			conceptIds: ["amygdala"]
		}
	],
	module_12: [
		{
			id: "m12-cons",
			kind: "consequence",
			title: "Por que o córtex não basta",
			body: "Sem um coordenador de temperatura, água, energia e defesa, a 'mente' seria um comentário sobre um corpo que não se sustenta. O [[hypothalamus|hipotálamo]] é um dos grandes acopladores.",
			conceptIds: ["hypothalamus"]
		},
		{
			id: "m12-conn",
			kind: "connection",
			title: "Ponte para o HPA",
			body: "Certos núcleos iniciam a cascata do módulo 13. Já separe três nomes: hipotálamo, cortisol, estresse. Eles não são sinônimos."
		},
		{
			id: "m12-ex",
			kind: "case",
			title: "Febre",
			body: "A febre é um ajuste coordenado, não um 'instinto' genérico. Um coordenador fisiológico compartilhado não identitifica fome, sede e susto."
		}
	],
	module_13: [
		{
			id: "m13-cons",
			kind: "consequence",
			title: "O que o tempo lento permite",
			body: "Mobilização energética, efeitos imunológicos, influência sobre encoding em janelas de dose. Também um ritmo cotidiano que não é drama. O [[cortisol|cortisol]] trabalha mesmo num dia sem susto.",
			conceptIds: ["cortisol"]
		},
		{
			id: "m13-conn",
			kind: "connection",
			title: "Dois efetores, duas escalas",
			body: "Simpático em segundos; [[hpa_axis|HPA]] em minutos a horas. Confundi-los é o mesmo erro de confundir bomba e canal: escala temporal errada.",
			conceptIds: ["hpa_axis", "stress_response"]
		},
		{
			id: "m13-ex",
			kind: "case",
			title: "Um kit de 'nível de cortisol'",
			body: "Um número pontual não é biografia, não é caráter e não diagnostica. Ritmo, contexto, hora do dia e o que o ensaio mede importam — e ainda assim não substituem avaliação clínica."
		},
		{
			id: "m13-adv",
			kind: "explain",
			title: "Feedback",
			body: "Glicocorticoides regulam a origem da cascata. Isso é fisiologia de eixo, não um interruptor de humor. Dose e tempo viram o sinal: o mesmo hormônio não 'faz' uma única coisa.",
			layer: 3
		}
	],
	module_14: [
		{
			id: "m14-cons",
			kind: "consequence",
			title: "O que o slogan impede de ver",
			body: "Movimento (via nigroestriatal), aprendizagem por predição, esforço. Se a [[dopamine|dopamina]] 'é prazer', Parkinson e erro de predição ficam inexplicáveis.",
			conceptIds: ["dopamine"]
		},
		{
			id: "m14-conn",
			kind: "connection",
			title: "Receptor, de novo",
			body: "Você já estudou que o efeito se decide no [[receptor|receptor]] e no circuito — não na molécula como personagem. Este módulo é a mesma regra em escala de sistema.",
			conceptIds: ["receptor", "modulation"]
		},
		{
			id: "m14-ex",
			kind: "case",
			title: "Wanting e liking",
			body: "Em vários desenhos, 'querer' e 'gostar' se separam. Isso não prova uma teoria única da vida mental; prova que o slogan do prazer é estreito demais.",
			layer: 2
		},
		{
			id: "m14-alt",
			kind: "explain",
			title: "De outra maneira",
			body: "A molécula não carrega um significado psicológico. Ela altera a probabilidade de certas operações em certos circuitos. O significado mora na operação, no contexto e no tempo — não no nome do ligante.",
			layer: 2
		}
	],
	module_15: [
		{
			id: "m15-cons",
			kind: "consequence",
			title: "O que a modulação não garante",
			body: "Persistência de alguns aspectos, às vezes. Não fidelidade forense. Não um vídeo. [[memory_emotion|Modulação afetiva]] altera probabilidade, não autentica o conteúdo.",
			conceptIds: ["memory_emotion"]
		},
		{
			id: "m15-conn",
			kind: "connection",
			title: "Amígdala sem voltar ao medo",
			body: "Aqui ela entra como participante de circuitos que modulam consolidação de material relevante — a mesma disciplina do módulo 11.",
			conceptIds: ["amygdala"]
		},
		{
			id: "m15-ex",
			kind: "case",
			title: "Confiança alta",
			body: "Uma lembrança nítida, sentida no corpo, dita com certeza. Nada disso é prova de acurácia. Confiança e fidelidade se separam com frequência."
		}
	],
	module_16: [
		{
			id: "m16-cons",
			kind: "consequence",
			title: "O que você deve conseguir contar",
			body: "Informação → circuitos → avaliação → corpo → aprendizagem → comportamento. Sem vilão molecular. Sem centro da alma. Com a etapa 1 ainda visível em cada sinapse."
		},
		{
			id: "m16-conn",
			kind: "connection",
			title: "Abre a etapa 3",
			body: "Atenção, memória e decisão serão outro nível de descrição — não uma biologia alternativa. O chão celular permanece."
		},
		{
			id: "m16-ex",
			kind: "case",
			title: "Checklist contra o título",
			body: "'Cientistas encontram a área da criatividade.' Qual tarefa? Qual medida? Qual rede? O que não se pode concluir? Se você já faz essas perguntas, a etapa 2 cumpriu o ofício."
		}
	],
	module_17: [
		{
			id: "m17-cons",
			kind: "consequence",
			title: "O que a seleção custa",
			body: "O que entra com fidelidade sai de outro lugar. [[attention|Atenção]] não é um tanque único nem um holofote parietal. É família de processos com metas distintas.",
			conceptIds: ["attention"]
		},
		{
			id: "m17-conn",
			kind: "connection",
			title: "Ainda é circuito",
			body: "Selecionar é descrição cognitiva de operações em redes, com neuromodulação. Outro nível, mesmo organismo — a regra do módulo 1."
		},
		{
			id: "m17-ex",
			kind: "case",
			title: "Festa barulhenta",
			body: "Não ouvir o próprio nome pode ser competição, carga, meta, sono. Não é, por si, um laudo. Este app não diagnostica."
		},
		{
			id: "m17-adv",
			kind: "explain",
			title: "Alerta, orientação, controle",
			body: "Uma tríade útil, com dissociações clínicas possíveis. Não transforme a tríade em três áreas exclusivas.",
			layer: 2
		}
	],
	module_18: [
		{
			id: "m18-cons",
			kind: "consequence",
			title: "Por que este app testa",
			body: "Porque [[retrieval|recuperar]] é um evento novo que reconstrói. Reconhecer um texto não prova que você reconstrói o mecanismo. Exposição ≠ domínio.",
			conceptIds: ["retrieval"]
		},
		{
			id: "m18-conn",
			kind: "connection",
			title: "A ponte afetiva continua",
			body: "O módulo 15 mostrou modulação. Aqui a arquitetura: trabalho, encoding, sistemas de longo prazo, recuperação. Vivacidade ainda não é acurácia."
		},
		{
			id: "m18-ex",
			kind: "case",
			title: "Reler o capítulo",
			body: "Familiaridade sobe. A capacidade de explicar o ciclo Na⁺/K⁺ pode não. Este é o motivo de haver recuperação ativa depois de cada conceito."
		},
		{
			id: "m18-adv",
			kind: "explain",
			title: "O número 7, outra vez",
			body: "7±2 é histórico e contextual. Não é QI, não é lei universal de itens, não é o tamanho da alma.",
			layer: 3
		}
	],
	module_19: [
		{
			id: "m19-cons",
			kind: "consequence",
			title: "O que 'o cérebro muda' autoriza",
			body: "Autoriza estudar [[plasticity|plasticidade]] com restrições. Não autoriza milagre, método de 7 dias, nem apagar teto biológico e social.",
			conceptIds: ["plasticity"]
		},
		{
			id: "m19-conn",
			kind: "connection",
			title: "Da sinapse à política de ação",
			body: "Mudança sináptica é um nível. [[learning|Aprendizagem]] tem formas associativas, estatísticas, procedimentais, sociais. LTP não é o dicionário da vida mental.",
			conceptIds: ["learning"]
		},
		{
			id: "m19-ex",
			kind: "case",
			title: "Recuperação como evento de aprendizagem",
			body: "As questões deste app não são só medição. Recuperar e contrastar reorganizam representações. O teste é parte do encoding."
		}
	],
	module_20: [
		{
			id: "m20-cons",
			kind: "consequence",
			title: "O que cai quando cai o homúnculo",
			body: "Cai o duelo 'córtex racional versus amígdala emocional'. Ficam políticas de ação em competição: meta, pista, valor, tempo, norma.",
			conceptIds: ["decision_making"]
		},
		{
			id: "m20-conn",
			kind: "connection",
			title: "Dopamina entra como modulador",
			body: "Não como essência do prazer da escolha. Transferência do módulo 14: via, receptor, contexto.",
			conceptIds: ["dopamine"]
		},
		{
			id: "m20-ex",
			kind: "case",
			title: "Pressa",
			body: "Uma escolha ruim sob tempo curto pode ser previsível sem ser um veredito de caráter. Tempo muda qual controlador prevalece."
		}
	],
	module_21: [
		{
			id: "m21-cons",
			kind: "consequence",
			title: "Quando o modelo ajuda",
			body: "Para ensinar que processos mais automáticos e mais controlados têm custos diferentes. [[dual_process|Rápido e lento]] é heurística — e deve ser abandonado quando virar anatomia.",
			conceptIds: ["dual_process"]
		},
		{
			id: "m21-conn",
			kind: "connection",
			title: "O triuno fica para trás",
			body: "Evolução não empilha três cérebros prontos. 'Réptil versus humano' hierarquiza emoção como inferior e falha como mapa."
		},
		{
			id: "m21-ex",
			kind: "case",
			title: "Na reunião",
			body: "'Seu cérebro reptiliano atacou.' Tradução possível: um processo mais automático, talvez defensivo. Sem réptil interno, sem diagnóstico."
		}
	],
	module_22: [
		{
			id: "m22-cons",
			kind: "consequence",
			title: "Implicação sem jaleco",
			body: "Mudar pistas e rotinas é mais coerente com o mecanismo do [[habit|hábito]] do que invocar uma substância chamada força de vontade. Isso é coerência conceitual, não prescrição clínica.",
			conceptIds: ["habit"]
		},
		{
			id: "m22-conn",
			kind: "connection",
			title: "Ainda não é vício de dopamina",
			body: "A molécula entra como modulador de aprendizagem, não como essência do hábito cotidiano. Personagem + moral = dois erros de uma vez.",
			conceptIds: ["dopamine"]
		},
		{
			id: "m22-ex",
			kind: "case",
			title: "A mão no aplicativo",
			body: "Às 23h o corpo vai até a mesa. A meta declarada já tinha mudado. A política de ação, gatilhada por pista, não."
		}
	],
	module_23: [
		{
			id: "m23-cons",
			kind: "consequence",
			title: "O nome não encerra o caso",
			body: "[[cognitive_bias|Viés]] é desvio sistemático frente a um modelo normativo. Ainda faltam processo, incentivo, dado e a pergunta: a heurística ajuda noutro contexto?",
			conceptIds: ["cognitive_bias"]
		},
		{
			id: "m23-conn",
			kind: "connection",
			title: "O viés do analista",
			body: "Na etapa 4, o mesmo rigor vira ofício: se todas as suas perguntas só confirmam o módulo 22, você está enviesado."
		},
		{
			id: "m23-ex",
			kind: "case",
			title: "Confirmação",
			body: "Alguém só lê o que confirma a tese. Além do rótulo: quais pistas, incentivos e custos de buscar o contrário estão no ambiente?"
		}
	],
	module_24: [
		{
			id: "m24-cons",
			kind: "consequence",
			title: "A esteira é didática",
			body: "Informação → atenção → memória → avaliação → decisão → ação → aprendizagem. Na operação, processos se sobrepõem. [[prediction|Predição]] atravessa vários — como princípio, não como religião.",
			conceptIds: ["prediction"]
		},
		{
			id: "m24-conn",
			kind: "connection",
			title: "O hábito fura o relógio",
			body: "A ação pode disparar antes da deliberação terminar. Isso não derruba a cadeia: mostra temporalidades distintas de controladores.",
			conceptIds: ["habit"]
		},
		{
			id: "m24-ex",
			kind: "case",
			title: "Três andares, um prédio",
			body: "Atenção e decisão acontecem em organismos com membranas, circuitos e eixos. A cognição nomeia operações; não apaga o chão."
		}
	],
	module_25: [
		{
			id: "m25-cons",
			kind: "consequence",
			title: "Ordem ética e epistêmica",
			body: "Observável → relato → hipótese → teste pequeno. Inverter é o atalho que a etapa 1 já condenou entre níveis. [[listening|Escutar]] impede que a hipótese se vista de fato.",
			conceptIds: ["listening"]
		},
		{
			id: "m25-conn",
			kind: "connection",
			title: "Evidência versus hipótese, agora em pessoa",
			body: "O relato é dado. O mecanismo é proposta. A trilha ensina mecanismos gerais, não a biografia de ninguém.",
			conceptIds: ["evidence_vs_hypothesis"]
		},
		{
			id: "m25-ex",
			kind: "case",
			title: "Atrasos",
			body: "Você pensa 'hábito' ou 'ameaça'. Antes: o que a pessoa descreve? O contexto mudou? Há mais de uma explicação plausível? Não é possível determinar com certeza — e isso pode ser a melhor resposta."
		}
	],
	module_26: [
		{
			id: "m26-cons",
			kind: "consequence",
			title: "O que se pode dizer em voz alta",
			body: "'Esta situação é compatível com sinal de ameaça de status.' Não: 'a amígdala dele disparou e por isso tem o transtorno Y.' Três saltos a menos.",
			conceptIds: ["threat_safety"]
		},
		{
			id: "m26-conn",
			kind: "connection",
			title: "Eixos da etapa 2, com freio",
			body: "Avaliação de relevância, autonômico, HPA conforme duração — atravessados por significado cultural. Nenhum esgota o episódio.",
			conceptIds: ["hpa_axis", "amygdala"]
		},
		{
			id: "m26-ex",
			kind: "case",
			title: "Crítica pública",
			body: "Calar-se pode ser ameaça de status, estratégia, cansaço, desacordo, história. Uma intervenção testável: mudar o contexto do feedback (privado, específico) e observar — sem anunciar diagnóstico."
		}
	],
	module_27: [
		{
			id: "m27-cons",
			kind: "consequence",
			title: "Como usar sem ontologizar",
			body: "Como checklist de desenho de conversa. [[scarf|SCARF]] não mede o cérebro de ninguém, não substitui direito, cuidado clínico ou escuta. Evidence level: ferramenta.",
			conceptIds: ["scarf"]
		},
		{
			id: "m27-conn",
			kind: "connection",
			title: "Cada dimensão, o ciclo pedido",
			body: "Conceito → situação → possível percepção → efeito comportamental → estratégia de comunicação → limite do modelo. Sem o último passo, a ferramenta vira frenologia de reunião."
		},
		{
			id: "m27-ex",
			kind: "case",
			title: "Feedback difícil",
			body: "Privado, específico, com clareza de critérios e espaço de resposta. Status + fairness + autonomy como desenho — não como circuito oficial."
		},
		{
			id: "m27-adv",
			kind: "limit",
			title: "Quando a pessoa não 'cabe'",
			body: "O modelo é incompleto. Volte à escuta. Não force o encaixe. A ferramenta falha; a pessoa não.",
			layer: 2
		}
	],
	module_28: [
		{
			id: "m28-cons",
			kind: "consequence",
			title: "Perguntas que poderiam falhar",
			body: "Se a pergunta já contém o diagnóstico, ela só pode confirmar. [[strategic_questions|Perguntas estratégicas]] pedem sequência, exceção e o que não se pode concluir.",
			conceptIds: ["strategic_questions"]
		},
		{
			id: "m28-conn",
			kind: "connection",
			title: "A trilha inteira era isso",
			body: "Cada módulo abriu com uma pergunta que o anterior tornou possível. Agora o ofício é o mesmo, com pessoas: perguntar para ver, não para encaixar."
		},
		{
			id: "m28-ex",
			kind: "case",
			title: "Troque o rótulo",
			body: "'Você tem TDAH?' → 'O que acontece quando você tenta manter a instrução?' e 'Quando isso não acontece?'. Duas perguntas, zero laudo."
		}
	],
	module_29: [
		{
			id: "m29-cons",
			kind: "consequence",
			title: "Timing é intervenção",
			body: "O conteúdo certo no momento errado piora o episódio. Adiar pode regular. [[regulation|Regulação]] inclui o relacional — e não autoriza terapia improvisada.",
			conceptIds: ["regulation"]
		},
		{
			id: "m29-conn",
			kind: "connection",
			title: "Atenção entra",
			body: "Selecionar ou desengajar muda a entrada que sustenta o estado. Não é o único caminho, e não é supressão heroica — ponte do módulo 17.",
			conceptIds: ["attention"]
		},
		{
			id: "m29-ex",
			kind: "case",
			title: "No limite",
			body: "Alguém está visivelmente no limite. Análise agora aumenta a carga. Co-regulação cotidiana: respeito ao timing, dentro do seu papel — não um jaleco."
		}
	],
	module_30: [
		{
			id: "m30-cons",
			kind: "consequence",
			title: "Sucesso prático ≠ prova causal",
			body: "Se a [[intervention|intervenção]] 'funcionar', outras variáveis podem ter mudado. A disciplina da etapa 1 permanece: não transforme correlação em causa única.",
			conceptIds: ["intervention"]
		},
		{
			id: "m30-conn",
			kind: "connection",
			title: "A frase proibida",
			body: "'Se a pessoa faz X, provavelmente possui transtorno Y.' Esse comportamento pode ter diversas explicações. Contexto, história, estado — e, quando pertinente, avaliação profissional."
		},
		{
			id: "m30-ex",
			kind: "case",
			title: "Uma frase que pode falhar",
			body: "Carregar o celular fora do quarto por uma semana e contar as aberturas noturnas. Se não pode falhar, não é teste. Se não houve consentimento, não é responsável."
		}
	],
	module_31: [
		{
			id: "m31-cons",
			kind: "consequence",
			title: "Incerteza como qualidade",
			body: "'Há evidências de X, mas não é possível concluir Y apenas com essas informações.' [[limits_of_application|Limites]] não são um anexo jurídico — são domínio.",
			conceptIds: ["limits_of_application"]
		},
		{
			id: "m31-conn",
			kind: "connection",
			title: "Princípio sobre saúde",
			body: "Conhecimento sobre mecanismos neurobiológicos não substitui avaliação clínica individual. A trilha forma raciocínio, não licença."
		},
		{
			id: "m31-ex",
			kind: "case",
			title: "'Lê o meu cérebro'",
			body: "Recuse o papel. Ofereça perguntas. Se houver sofrimento, sugira cuidado profissional. Não entregue um laudo com amígdala e dopamina."
		}
	],
	module_32: [
		{
			id: "m32-cons",
			kind: "consequence",
			title: "O critério de sucesso",
			body: "Reconstruir mecanismos, detectar simplificações, aplicar a situações novas, reconhecer incertezas. Não recitar 32 títulos. A pontuação da rubrica não é inteligência."
		},
		{
			id: "m32-conn",
			kind: "connection",
			title: "A trilha não acaba",
			body: "Conceitos voltam em revisões. Aprendizagem não é um certificado de 100%. O produto final é uma forma mais precisa de perguntar."
		},
		{
			id: "m32-ex",
			kind: "case",
			title: "Três slogans que você não usará",
			body: "Amígdala = medo. Dopamina = prazer. Se faz X, tem Y. Se a análise cabe numa palavra, ainda não é o projeto."
		}
	]
};
function blocksFor(moduleId, base) {
	const extra = EXTRA_BLOCKS[moduleId];
	if (!extra?.length) return base;
	const seen = new Set(base.map((b) => b.id));
	return [...base, ...extra.filter((b) => !seen.has(b.id))];
}
var MODULES = [
	...STAGE_1_MODULES,
	...STAGE_2_MODULES,
	...STAGE_3_MODULES,
	...STAGE_4_MODULES
].map((m) => ({
	...m,
	blocks: blocksFor(m.id, m.blocks)
}));
var MODULE_BY_ID = Object.fromEntries(MODULES.map((m) => [m.id, m]));
var ALL_QUESTIONS = MODULES.flatMap((m) => m.questions);
function questionsForConcept(conceptId) {
	return ALL_QUESTIONS.filter((q) => q.conceptIds.includes(conceptId));
}
var TYPE_ORDER = {
	recall: 0,
	recognition: 1,
	relation: 2,
	misconception: 3,
	counterfactual: 4,
	limit: 5,
	application: 6,
	integration: 7
};
function orderedQuestions(mod) {
	return [...mod.questions].sort((a, b) => (TYPE_ORDER[a.type] ?? 9) - (TYPE_ORDER[b.type] ?? 9));
}
//#endregion
export { questionsForConcept as i, MODULE_BY_ID as n, orderedQuestions as r, MODULES as t };
