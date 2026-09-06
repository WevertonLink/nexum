import { i as __toESM } from "../_runtime.mjs";
import { n as CONCEPT_BY_ID } from "./concepts-DTksM_A0.mjs";
import { n as MODULE_BY_ID, r as orderedQuestions } from "./modules-Cak8tUlb.mjs";
import { b as require_jsx_runtime, v as Link, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { b as BookmarkCheck, t as X, u as PenLine, v as CircleHelp, y as Bookmark } from "../_libs/lucide-react.mjs";
import { a as useAppStore, d as moduleOverall, h as STAGES, n as Route, s as EMPTY_MODULE_PROGRESS, y as cn } from "./router-BqUbigV-.mjs";
import { t as Button } from "./button-CRWNAEw-.mjs";
import { n as RichText, t as QuestionCard } from "./question-card-IGZGwx5j.mjs";
import { n as LEVEL_LABEL, t as EVIDENCE_LABEL } from "./types-BKB3ttg6.mjs";
import { i as FINAL_PROJECT_FIELDS, r as FINAL_CASES } from "./diagnostic-CUORKcUg.mjs";
import { t as ProgressMeter } from "./progress-meter-C7fdWJG9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/modulo._moduleId-CNt_Zils.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var RUBRIC = [
	{
		id: "precision",
		label: "Precisão científica"
	},
	{
		id: "integration",
		label: "Integração entre níveis"
	},
	{
		id: "explanation",
		label: "Qualidade da explicação"
	},
	{
		id: "evidence",
		label: "Distinção evidência / hipótese"
	},
	{
		id: "application",
		label: "Aplicação"
	},
	{
		id: "limits",
		label: "Reconhecimento das limitações"
	}
];
function FinalProject() {
	const saved = useAppStore((s) => s.finalProject);
	const save = useAppStore((s) => s.saveFinalProject);
	const [caseId, setCaseId] = (0, import_react.useState)(saved?.caseId ?? FINAL_CASES[0].id);
	const [fields, setFields] = (0, import_react.useState)(saved?.fields ?? {});
	const [scores, setScores] = (0, import_react.useState)(saved?.selfScores ?? {});
	const total = (0, import_react.useMemo)(() => RUBRIC.reduce((a, r) => a + (scores[r.id] ?? 0), 0), [scores]);
	const caso = FINAL_CASES.find((c) => c.id === caseId);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-relaxed text-fg-muted",
				children: "A pontuação representa a qualidade desta resposta específica — não inteligência. Uma análise que admite incerteza pode ser melhor do que uma certeza inflada."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
					className: "text-xs font-medium uppercase tracking-wide text-fg-subtle",
					children: "Caso"
				}), FINAL_CASES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setCaseId(c.id),
					className: cn("w-full rounded-lg border px-4 py-3 text-left", caseId === c.id ? "border-accent bg-accent-soft" : "border-border bg-bg-elevated"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium",
						children: c.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-fg-muted",
						children: c.body
					})]
				}, c.id))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rounded-lg bg-surface px-4 py-3 text-sm leading-relaxed",
				children: caso.body
			}),
			FINAL_PROJECT_FIELDS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "block",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-lg",
						children: f.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 block text-sm text-fg-muted",
						children: f.prompt
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						value: fields[f.id] ?? "",
						onChange: (e) => setFields({
							...fields,
							[f.id]: e.target.value
						}),
						placeholder: f.placeholder,
						className: "mt-2 min-h-28 w-full rounded-lg border border-border bg-bg-elevated px-3 py-3 text-[15px] leading-relaxed"
					})
				]
			}, f.id)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-xl",
					children: "Autoavaliação (0–4)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-3",
					children: RUBRIC.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm",
						children: r.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 flex gap-1",
						children: [
							0,
							1,
							2,
							3,
							4
						].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setScores({
								...scores,
								[r.id]: n
							}),
							className: cn("size-10 rounded-md border text-sm tabular-nums", (scores[r.id] ?? 0) === n ? "border-accent bg-accent text-accent-fg" : "border-border bg-bg-elevated"),
							children: n
						}, n))
					})] }, r.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 font-display text-2xl tabular-nums",
					children: [
						total,
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-base text-fg-muted",
							children: "/ 24"
						})
					]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "w-full",
				onClick: () => save({
					caseId,
					fields,
					selfScores: scores,
					submittedAt: Date.now()
				}),
				children: "Guardar projeto"
			}),
			saved?.submittedAt && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-ok",
				children: "Guardado neste dispositivo. Revise os limites: o que não pode ser concluído continua sendo o campo mais importante."
			})
		]
	});
}
function Stepper({ steps, children }) {
	const [i, setI] = (0, import_react.useState)(0);
	const step = steps[i];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-bg-elevated p-4 shadow-soft",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-3 flex gap-1",
				role: "tablist",
				"aria-label": "Etapas do diagrama",
				children: steps.map((s, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-selected": idx === i,
					className: cn("h-1.5 flex-1 rounded-full transition-colors duration-200", idx <= i ? "bg-accent" : "bg-surface-2"),
					onClick: () => setI(idx)
				}, s.id))
			}),
			children?.(i),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-lg text-fg",
				children: step.label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm leading-relaxed text-fg-muted",
				children: step.body
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "secondary",
					size: "sm",
					onClick: () => setI((n) => Math.max(0, n - 1)),
					disabled: i === 0,
					children: "Anterior"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					onClick: () => setI((n) => Math.min(steps.length - 1, n + 1)),
					disabled: i === steps.length - 1,
					children: "Próxima etapa"
				})]
			})
		]
	});
}
function ActionPotentialDiagram() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stepper, {
		steps: [
			{
				id: "rest",
				label: "Repouso",
				body: "Membrana mais permeável a K⁺. Potencial negativo, estável o bastante para esperar."
			},
			{
				id: "th",
				label: "Limiar",
				body: "Corrente de Na⁺ começa a vencer as que puxam de volta. O ciclo positivo se arma."
			},
			{
				id: "na",
				label: "Na⁺ entra",
				body: "Canais de sódio dependentes de voltagem abrem. O interior torna-se menos negativo."
			},
			{
				id: "dep",
				label: "Despolarização",
				body: "O potencial sobe rapidamente. Isso não é uma emoção — é um evento elétrico."
			},
			{
				id: "k",
				label: "K⁺ e inativação",
				body: "Na⁺ inativa; K⁺ sai. A fase ascendente se encerra."
			},
			{
				id: "rep",
				label: "Repolarização",
				body: "O potencial volta em direção ao repouso. A bomba não é a causa imediata."
			},
			{
				id: "ref",
				label: "Período refratário",
				body: "Um novo spike é difícil. Isso dá direção à propagação."
			},
			{
				id: "back",
				label: "Retorno",
				body: "A membrana está pronta outra vez. Os gradientes foram pouco gastos neste único evento."
			}
		],
		children: (i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpikeSvg, { phase: i })
	});
}
function SpikeSvg({ phase }) {
	const y = [
		62,
		55,
		28,
		12,
		30,
		58,
		72,
		62
	][phase] ?? 62;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 220 90",
		className: "mb-3 w-full text-accent",
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "8",
				y1: "62",
				x2: "212",
				y2: "62",
				stroke: "currentColor",
				strokeOpacity: "0.2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M8 62 C40 62, 55 62, 70 50 S95 8, 110 12 S130 70, 150 62 S180 70, 212 62",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: 20 + phase * 26,
				cy: y,
				r: "5",
				fill: "currentColor"
			})
		]
	});
}
function SynapseDiagram() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stepper, {
		steps: [
			{
				id: "ap",
				label: "Potencial de ação",
				body: "O sinal regenerativo chega ao terminal. Ainda não houve transmissor na fenda."
			},
			{
				id: "term",
				label: "Terminal axônico",
				body: "A membrana pré-sináptica despolariza."
			},
			{
				id: "ca",
				label: "Canais de Ca²⁺",
				body: "Canais dependentes de voltagem se abrem no terminal."
			},
			{
				id: "in",
				label: "Entrada de Ca²⁺",
				body: "Este é o acoplamento. Sem Ca²⁺, o spike pode ter chegado em vão."
			},
			{
				id: "ves",
				label: "Vesícula",
				body: "O Ca²⁺ favorece a maquinaria de fusão."
			},
			{
				id: "fuse",
				label: "Fusão",
				body: "O transmissor é liberado na fenda. Quantizado, em unidades vesiculares."
			},
			{
				id: "nt",
				label: "Neurotransmissor",
				body: "Ligante, não personagem. Difunde até a membrana seguinte."
			},
			{
				id: "rec",
				label: "Receptor",
				body: "O efeito — rápido ou lento, excitatório ou não — decide-se aqui."
			}
		],
		children: (i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SynapseSvg, { phase: i })
	});
}
function SynapseSvg({ phase }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 220 90",
		className: "mb-3 w-full",
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "8",
				y: "18",
				width: "88",
				height: "54",
				rx: "10",
				className: "fill-accent-soft stroke-accent",
				strokeWidth: "1.5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "52",
				y: "50",
				textAnchor: "middle",
				className: "fill-accent",
				fontSize: "11",
				children: "pré"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "124",
				y: "18",
				width: "88",
				height: "54",
				rx: "10",
				className: "fill-info-soft stroke-info",
				strokeWidth: "1.5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "168",
				y: "50",
				textAnchor: "middle",
				className: "fill-info",
				fontSize: "11",
				children: "pós"
			}),
			phase >= 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "96",
				cy: "45",
				r: "4",
				className: "fill-warn"
			}),
			phase >= 5 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "110",
				cy: "40",
				r: "3",
				className: "fill-accent"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "110",
				cy: "52",
				r: "3",
				className: "fill-accent"
			})] }),
			phase >= 7 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "124",
				cy: "45",
				r: "5",
				className: "fill-info"
			})
		]
	});
}
function LevelsDiagram() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "overflow-hidden rounded-xl border border-border bg-bg-elevated",
		children: [
			"Molecular",
			"Celular",
			"Circuito",
			"Sistema",
			"Cognitivo",
			"Comportamental",
			"Social"
		].map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "flex items-center gap-3 border-b border-border px-4 py-3 last:border-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-xs tabular-nums text-fg-subtle",
				children: i + 1
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-base",
				children: l
			})]
		}, l))
	});
}
function HpaDiagram() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "space-y-2",
		children: [
			{
				t: "Hipotálamo",
				d: "CRH, entre outros sinais"
			},
			{
				t: "Hipófise",
				d: "ACTH na circulação"
			},
			{
				t: "Adrenal",
				d: "Glicocorticoides (cortisol)"
			},
			{
				t: "Feedback",
				d: "O produto regula a origem — não um interruptor de humor"
			}
		].map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "rounded-lg border border-border bg-bg-elevated px-4 py-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs font-medium uppercase tracking-wide text-fg-subtle",
					children: ["Etapa ", i + 1]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-lg",
					children: it.t
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-fg-muted",
					children: it.d
				})
			]
		}, it.t))
	});
}
function ScarfDiagram() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "grid grid-cols-1 gap-2",
		children: [
			[
				"S",
				"Status",
				"Posição relativa"
			],
			[
				"C",
				"Certainty",
				"Previsibilidade"
			],
			[
				"A",
				"Autonomy",
				"Controle sobre o próprio ato"
			],
			[
				"R",
				"Relatedness",
				"Vínculo e exclusão"
			],
			[
				"F",
				"Fairness",
				"Justiça percebida"
			]
		].map(([k, n, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "flex gap-3 rounded-lg border border-border bg-bg-elevated px-4 py-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-xl text-accent",
				children: k
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-medium",
				children: n
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-fg-muted",
				children: d
			})] })]
		}, k))
	});
}
function Diagram({ kind }) {
	if (kind === "action_potential") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionPotentialDiagram, {});
	if (kind === "synapse") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SynapseDiagram, {});
	if (kind === "hpa") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HpaDiagram, {});
	if (kind === "scarf") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScarfDiagram, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LevelsDiagram, {});
}
function TermSheet({ conceptId, onClose }) {
	const c = CONCEPT_BY_ID[conceptId];
	if (!c) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-40 flex items-end justify-center bg-fg/30 p-3 sm:items-center",
		role: "dialog",
		"aria-modal": true,
		"aria-labelledby": "term-title",
		onClick: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-lg rounded-t-2xl border border-border bg-bg-elevated p-5 shadow-soft sm:rounded-2xl",
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs font-medium uppercase tracking-wide text-fg-subtle",
						children: [
							LEVEL_LABEL[c.level],
							" · ",
							EVIDENCE_LABEL[c.evidenceLevel]
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "term-title",
						className: "font-display text-2xl",
						children: c.name
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						onClick: onClose,
						"aria-label": "Fechar",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-[15px] leading-relaxed text-fg",
					children: c.definition
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed text-fg-muted",
					children: c.explanation
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/conceito/$conceptId",
						params: { conceptId: c.id },
						onClick: onClose,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, { children: "Ver conceito" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "secondary",
						onClick: onClose,
						children: "Voltar"
					})]
				})
			]
		})
	});
}
function ModulePlayer({ mod }) {
	const startModule = useAppStore((s) => s.startModule);
	const seeBlock = useAppStore((s) => s.seeBlock);
	const setSessionPhase = useAppStore((s) => s.setSessionPhase);
	const completeModule = useAppStore((s) => s.completeModule);
	const session = useAppStore((s) => s.session);
	const progress = useAppStore((s) => s.modules[mod.id]) ?? EMPTY_MODULE_PROGRESS;
	const settings = useAppStore((s) => s.settings);
	const toggleBookmark = useAppStore((s) => s.toggleBookmark);
	const bookmarks = useAppStore((s) => s.bookmarks);
	const toggleDoubt = useAppStore((s) => s.toggleDoubt);
	const doubts = useAppStore((s) => s.doubts);
	const addNote = useAppStore((s) => s.addNote);
	const allModules = useAppStore((s) => s.modules);
	const [term, setTerm] = (0, import_react.useState)(null);
	const [warning, setWarning] = (0, import_react.useState)(null);
	const [note, setNote] = (0, import_react.useState)("");
	const [showNote, setShowNote] = (0, import_react.useState)(false);
	const [layer, setLayer] = (0, import_react.useState)(settings.defaultLayer);
	const [qIndex, setQIndex] = (0, import_react.useState)(0);
	const [showAlt, setShowAlt] = (0, import_react.useState)(false);
	const stage = STAGES.find((s) => s.id === mod.stage);
	const questions = (0, import_react.useMemo)(() => orderedQuestions(mod), [mod]);
	const visibleBlocks = (0, import_react.useMemo)(() => mod.blocks.filter((b) => !b.layer || b.layer <= layer), [mod.blocks, layer]);
	const phase = session?.moduleId === mod.id ? session.phase : progress.completed ? "done" : progress.content >= 100 ? "verify" : "intro";
	const currentIdx = Math.max(0, visibleBlocks.findIndex((b) => b.id === (session?.currentBlockId ?? progress.lastBlockId)));
	const [idx, setIdx] = (0, import_react.useState)(currentIdx < 0 ? 0 : currentIdx);
	const idxRef = (0, import_react.useRef)(idx);
	idxRef.current = idx;
	const visibleLen = visibleBlocks.length;
	(0, import_react.useEffect)(() => {
		const w = startModule(mod.id);
		if (w.warning) setWarning(w.warning);
		setQIndex(0);
		setShowAlt(false);
	}, [mod.id]);
	(0, import_react.useEffect)(() => {
		if (phase !== "content") return;
		const b = visibleBlocks[idx];
		if (b) seeBlock(mod.id, b.id, b.conceptIds);
	}, [
		idx,
		mod.id,
		seeBlock,
		visibleBlocks,
		phase
	]);
	const block = visibleBlocks[idx];
	const bookmarked = bookmarks.some((b) => b.moduleId === mod.id && b.blockId === block?.id);
	const totalMin = mod.estimatedTime.essential + mod.estimatedTime.deepen + mod.estimatedTime.questions;
	function goNext() {
		setShowAlt(false);
		const i = idxRef.current;
		if (i < visibleLen - 1) setIdx(i + 1);
		else setSessionPhase("exposure_done");
	}
	const relatedStudied = mod.relatedModules.filter((id) => allModules[id]?.startedAt);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pb-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mb-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs font-medium uppercase tracking-widest text-accent",
						children: [
							"Etapa ",
							mod.stage,
							" · ",
							stage.name
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-xs text-fg-subtle",
						children: [
							"Módulo ",
							String(mod.number).padStart(2, "0"),
							" · ",
							mod.number,
							" / 32"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-3xl leading-tight",
						children: mod.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm leading-relaxed text-fg-muted",
						children: ["Objetivo: ", mod.objective]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressMeter, {
							value: moduleOverall(progress),
							label: "Progresso deste módulo"
						})
					}),
					(progress.comprehension > 0 || progress.recall > 0) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-3 grid grid-cols-2 gap-x-3 gap-y-1 text-xs text-fg-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								"Conteúdo ",
								progress.content,
								"%"
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								"Compreensão ",
								progress.comprehension,
								"%"
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								"Recuperação ",
								progress.recall,
								"%"
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								"Contraste ",
								progress.contrast,
								"%"
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								"Aplicação ",
								progress.application,
								"%"
							] })
						]
					})
				]
			}),
			warning && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mb-4 rounded-lg border border-warn/30 bg-warn-soft px-4 py-3 text-sm text-warn",
				children: [warning, " Você pode avançar — o conceito frágil entra nas revisões."]
			}),
			mod.stage === 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-4 rounded-lg border border-border bg-surface px-4 py-3 text-sm leading-relaxed text-fg-muted",
				children: "Conhecimento sobre mecanismos neurobiológicos não substitui avaliação clínica individual."
			}),
			phase === "intro" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-wide text-fg-subtle",
						children: "Por que agora"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-base leading-relaxed",
						children: mod.introduction
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xl leading-snug",
						children: mod.centralQuestion
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-fg-muted",
						children: [
							"Tempo aproximado para planejamento — não é obrigação: essencial ",
							mod.estimatedTime.essential,
							" min, aprofundar ",
							mod.estimatedTime.deepen,
							" min, questões ",
							mod.estimatedTime.questions,
							" min (cerca de ",
							totalMin,
							" min)."
						]
					}),
					mod.prerequisites.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-fg-muted",
						children: [
							"Utiliza:",
							" ",
							mod.prerequisites.map((id) => MODULE_BY_ID[id]?.shortTitle ?? id).join(", "),
							"."
						]
					}),
					relatedStudied.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-fg-muted",
						children: [
							"Você já estudou algo relacionado:",
							" ",
							relatedStudied.map((id) => MODULE_BY_ID[id]?.shortTitle ?? id).join(", "),
							"."
						]
					}),
					progress.lastBlockId && progress.content > 0 && progress.content < 100 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rounded-lg bg-accent-soft px-4 py-3 text-sm text-accent",
						children: "Você estava neste módulo. Deseja continuar de onde parou?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "lg",
							className: "w-full",
							onClick: () => {
								setSessionPhase("content");
								if (progress.lastBlockId) {
									const i = visibleBlocks.findIndex((b) => b.id === progress.lastBlockId);
									if (i >= 0) setIdx(i);
								}
							},
							children: progress.content > 0 ? "Continuar de onde parei" : "Começar a exposição"
						}), progress.content >= 100 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "secondary",
							onClick: () => setSessionPhase("verify"),
							children: "Ir para a verificação"
						})]
					})
				]
			}),
			phase === "content" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-4 flex gap-2",
				children: [
					1,
					2,
					3
				].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setLayer(n),
					className: cn("h-11 min-w-11 rounded-md px-3 text-sm", layer === n ? "bg-accent text-accent-fg" : "bg-surface text-fg-muted"),
					children: n === 1 ? "Essencial" : n === 2 ? "Aprofundar" : "Avançado"
				}, n))
			}),
			phase === "content" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-3 text-xs text-fg-subtle",
				children: "A camada avançada não é necessária para terminar o essencial."
			}),
			phase === "content" && block && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlockView, {
				block,
				onTerm: setTerm,
				bookmarked,
				onBookmark: () => toggleBookmark(mod.id, block.id),
				showAlt,
				onToggleAlt: () => setShowAlt((v) => !v)
			}),
			phase === "content" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-center text-xs tabular-nums text-fg-subtle",
					children: [
						idx + 1,
						" / ",
						visibleBlocks.length
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "secondary",
						onClick: () => {
							setShowAlt(false);
							setIdx((i) => Math.max(0, i - 1));
						},
						disabled: idx === 0,
						children: "Anterior"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: goNext,
						children: idx === visibleBlocks.length - 1 ? "Terminei a exposição" : "Continuar"
					})]
				})]
			}),
			phase === "exposure_done" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "Você terminou a exposição"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-relaxed text-fg-muted",
						children: "Isso não significa necessariamente que você dominou o conceito. Ler não é reconstruir."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-medium",
						children: "O que você deve conseguir fazer agora"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-2 list-disc space-y-1 pl-5 text-sm text-fg-muted",
						children: mod.summary.shouldKnow.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: s }, s))
					})] }),
					mod.misconceptions[0] && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg bg-danger-soft px-4 py-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium text-danger",
								children: "Erro comum"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-fg",
								children: mod.misconceptions[0].claim
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-fg-muted",
								children: mod.misconceptions[0].whyPlausible
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium",
									children: "Onde está o problema. "
								}), mod.misconceptions[0].problem]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium",
									children: "Modelo mais adequado. "
								}), mod.misconceptions[0].better]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "lg",
								onClick: () => {
									setQIndex(0);
									setSessionPhase("verify", 0);
								},
								children: "Verificar meu domínio"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "secondary",
								onClick: () => {
									completeModule(mod.id);
									setSessionPhase("done");
								},
								children: "Avançar mesmo assim"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-fg-subtle",
								children: "Você pode avançar, mas os conceitos deste módulo entram nas revisões até haver reconstrução."
							})
						]
					})
				]
			}),
			phase === "verify" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "Verificação"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-fg-muted",
						children: "Exposição não é domínio. Tente reconstruir, contrastar e aplicar. Usar pista não é fracasso."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs tabular-nums text-fg-subtle",
						children: [
							qIndex + 1,
							" / ",
							questions.length
						]
					}),
					questions[qIndex] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuestionCard, {
						question: questions[qIndex],
						onDone: () => {
							if (qIndex < questions.length - 1) setQIndex(qIndex + 1);
							else setSessionPhase("done");
						}
					})
				]
			}),
			phase === "done" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Conclusion, {
				mod,
				stageName: stage.name,
				onVerify: () => {
					setQIndex(0);
					setSessionPhase("verify", 0);
				},
				onFinish: () => completeModule(mod.id)
			}),
			!settings.focusMode && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10 space-y-3 rounded-xl border border-border p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "flex items-center gap-2 text-xs font-medium tracking-wide text-fg-subtle",
					onClick: () => setShowNote((v) => !v),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, { className: "size-4" }), "Anotação"]
				}), showNote && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					value: note,
					onChange: (e) => setNote(e.target.value),
					placeholder: "Dúvida, observação, explicação própria…",
					className: "min-h-20 w-full rounded-md border border-border bg-bg px-3 py-2 text-sm"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "secondary",
						onClick: () => {
							if (!note.trim()) return;
							addNote({
								moduleId: mod.id,
								blockId: block?.id,
								conceptId: block?.conceptIds?.[0] ?? mod.concepts[0],
								text: note.trim()
							});
							setNote("");
						},
						children: "Salvar nota"
					}), mod.concepts[0] && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						variant: "ghost",
						onClick: () => toggleDoubt(mod.concepts[0]),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleHelp, { className: "size-4" }), doubts.includes(mod.concepts[0]) ? "Dúvida marcada" : "Tenho dúvida"]
					})]
				})] })]
			}),
			term && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TermSheet, {
				conceptId: term,
				onClose: () => setTerm(null)
			})
		]
	});
}
function BlockView({ block, onTerm, bookmarked, onBookmark, showAlt, onToggleAlt }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-xl border border-border bg-bg-elevated p-5 shadow-soft",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-wide text-accent",
					children: {
						question: "Pergunta",
						answer: "Resposta inicial",
						explain: "Explicação",
						mechanism: "Mecanismo",
						consequence: "Consequência",
						connection: "Conexão",
						recall: "Recuperação",
						misconception: "Erro comum",
						level: "Nível",
						diagram: "Diagrama",
						case: "Caso",
						limit: "Limite",
						summary: "Síntese"
					}[block.kind]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onBookmark,
					"aria-label": "Marcar para voltar",
					className: "text-fg-muted",
					children: bookmarked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookmarkCheck, { className: "size-5 text-accent" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: "size-5" })
				})]
			}),
			block.title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-2xl",
				children: block.title
			}),
			block.level && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-fg-subtle",
				children: LEVEL_LABEL[block.level]
			}),
			block.kind === "recall" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecallBody, {
				block,
				onTerm
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-base leading-relaxed text-fg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RichText, {
					text: block.body ?? "",
					onTerm
				})
			}),
			block.alt && block.kind !== "recall" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "sm",
					onClick: onToggleAlt,
					children: showAlt ? "Ocultar outra maneira" : "Explique de outra maneira"
				}), showAlt && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 rounded-lg bg-surface px-4 py-3 text-sm leading-relaxed text-fg-muted",
					children: block.alt
				})]
			}),
			block.steps && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MechanismSteps, { steps: block.steps }),
			block.diagram && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Diagram, { kind: block.diagram })
			})
		]
	});
}
function RecallBody({ block, onTerm }) {
	const [stage, setStage] = (0, import_react.useState)("try");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-3 space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-fg-muted",
				children: "Sem consultar o conteúdo. Tente com suas palavras."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-base leading-relaxed",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RichText, {
					text: block.body ?? "",
					onTerm
				})
			}),
			stage === "hint" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "rounded-lg bg-info-soft px-4 py-3 text-sm text-info",
				children: ["Pista: volte um passo. Qual conceito anterior esta pergunta usa? ", block.alt ? "Depois compare com o modelo." : ""]
			}),
			stage === "model" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rounded-lg bg-surface px-4 py-3 text-sm leading-relaxed",
				children: block.alt ?? "Compare com o modelo científico dos blocos anteriores. Se a sua reconstrução divergir no mecanismo, marque dúvida — isso alimenta a revisão, sem punição."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				children: [stage === "try" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: "secondary",
					onClick: () => setStage("hint"),
					children: "Ver uma pista"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					onClick: () => setStage("model"),
					children: "Ver resposta"
				})] }), stage === "hint" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					onClick: () => setStage("model"),
					children: "Ver resposta"
				})]
			})
		]
	});
}
function MechanismSteps({ steps }) {
	const [shown, setShown] = (0, import_react.useState)(1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-4 space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "space-y-3",
				children: steps.slice(0, shown).map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-lg bg-surface px-4 py-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tabular-nums text-fg-subtle",
							children: i + 1
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-fg-muted",
							children: s.body
						})
					]
				}, s.id))
			}),
			shown < steps.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "sm",
				variant: "secondary",
				onClick: () => setShown((n) => n + 1),
				children: "Próxima etapa"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-fg-subtle",
				children: "Cadeia completa. Volte a qualquer etapa se precisar reconstruir."
			}),
			shown > 1 && shown <= steps.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "text-xs text-accent underline-offset-4 hover:underline",
				onClick: () => setShown(1),
				children: "Recomeçar a cadeia"
			})
		]
	});
}
function Conclusion({ mod, stageName, onVerify, onFinish }) {
	const progress = useAppStore((s) => s.modules[mod.id]) ?? EMPTY_MODULE_PROGRESS;
	const completeModule = useAppStore((s) => s.completeModule);
	const nextNum = mod.number < 32 ? mod.number + 1 : null;
	const next = nextNum ? Object.values(MODULE_BY_ID).find((m) => m.number === nextNum) : void 0;
	const stage = STAGES.find((s) => s.id === mod.stage);
	const lastOfStage = stage.moduleIds[stage.moduleIds.length - 1] === mod.id;
	(0, import_react.useEffect)(() => {
		completeModule(mod.id);
	}, [mod.id]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl",
				children: "Conceito em consolidação"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-fg-muted",
				children: "Você conseguiu expor, e em parte verificar. O conceito continuará aparecendo em revisões futuras. Compreensão não é pontuação."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressMeter, {
						value: progress.content,
						label: "Conteúdo"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressMeter, {
						value: progress.comprehension,
						label: "Compreensão"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressMeter, {
						value: progress.recall,
						label: "Recuperação"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressMeter, {
						value: progress.contrast,
						label: "Contraste"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressMeter, {
						value: progress.application,
						label: "Aplicação"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-relaxed",
				children: mod.integration
			}),
			mod.relatedModules.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium uppercase tracking-wide text-fg-subtle",
				children: "Você já estudou algo relacionado"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-2 flex flex-wrap gap-2",
				children: mod.relatedModules.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/modulo/$moduleId",
					params: { moduleId: id },
					className: "rounded-full bg-surface px-3 py-1 text-sm",
					children: MODULE_BY_ID[id]?.shortTitle ?? id
				}) }, id))
			})] }),
			mod.references.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium uppercase tracking-wide text-fg-subtle",
				children: "Para aprofundar"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-2 space-y-1 text-sm text-fg-muted",
				children: mod.references.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
					r.title,
					r.note ? ` — ${r.note}` : "",
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-fg-subtle",
						children: [" · ", r.kind]
					})
				] }, r.title))
			})] }),
			lastOfStage && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl border border-accent/30 bg-accent-soft px-4 py-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs font-medium uppercase tracking-wide text-accent",
						children: [
							"Etapa ",
							mod.stage,
							" · ",
							stageName
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed",
						children: stage.closingGoal
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/desafios",
						className: "mt-3 inline-block text-sm text-accent underline-offset-4 hover:underline",
						children: "Desafio de integração"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "secondary",
						onClick: onVerify,
						children: "Revisar as questões"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						className: "w-full",
						onClick: () => useAppStore.getState().setSessionPhase("intro"),
						children: "Rever a exposição"
					}),
					next && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/modulo/$moduleId",
						params: { moduleId: next.id },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							className: "w-full",
							children: ["Próximo: ", next.shortTitle]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							className: "w-full",
							onClick: onFinish,
							children: "Voltar ao início"
						})
					})
				]
			})
		]
	});
}
function ModulePage() {
	const { moduleId } = Route.useParams();
	const mod = MODULE_BY_ID[moduleId];
	if (!mod) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pt-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Módulo não encontrado." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/trilha",
			className: "text-accent underline",
			children: "Voltar à trilha"
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/trilha",
			className: "text-sm text-fg-muted hover:text-fg",
			children: "← Trilha"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModulePlayer, { mod })
		}),
		mod.id === "module_32" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-10 border-t border-border pt-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl",
				children: "Os sete campos"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalProject, {})
			})]
		})
	] });
}
//#endregion
export { ModulePage as component };
