import { i as __toESM } from "../_runtime.mjs";
import { n as CONCEPT_BY_ID, t as CONCEPTS } from "./concepts-DTksM_A0.mjs";
import { i as questionsForConcept, n as MODULE_BY_ID } from "./modules-Cak8tUlb.mjs";
import { b as require_jsx_runtime, v as Link, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as masteryScore, a as useAppStore, g as emptyScores, r as Route$1 } from "./router-BqUbigV-.mjs";
import { t as Button } from "./button-CRWNAEw-.mjs";
import { t as QuestionCard } from "./question-card-IGZGwx5j.mjs";
import { n as LEVEL_LABEL, t as EVIDENCE_LABEL } from "./types-BKB3ttg6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/conceito._conceptId-DnT8eO-y.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ConceptPage() {
	const { conceptId } = Route$1.useParams();
	const c = CONCEPT_BY_ID[conceptId];
	const progress = useAppStore((s) => s.concepts[conceptId]);
	const toggleDoubt = useAppStore((s) => s.toggleDoubt);
	const doubts = useAppStore((s) => s.doubts);
	const notesAll = useAppStore((s) => s.notes);
	const addNote = useAppStore((s) => s.addNote);
	const notes = notesAll.filter((n) => n.conceptId === conceptId);
	const [note, setNote] = (0, import_react.useState)("");
	const [testing, setTesting] = (0, import_react.useState)(false);
	const [qIndex, setQIndex] = (0, import_react.useState)(0);
	const qs = questionsForConcept(conceptId);
	if (!c) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Conceito não encontrado." });
	const scores = progress?.scores ?? emptyScores();
	const observed = c.observed ?? "O que a literatura descreve como regularidade neste nível de análise.";
	const interpretation = c.interpretation ?? c.explanation;
	const limitation = c.limitation ?? "Participação, associação ou um modelo útil não autorizam reduzir o fenômeno a esta entidade, nem diagnosticar uma pessoa.";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 pt-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/conceitos",
				className: "text-sm text-fg-muted",
				children: "← Conceitos"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs uppercase tracking-wide text-fg-subtle",
				children: [
					LEVEL_LABEL[c.level],
					" · ",
					EVIDENCE_LABEL[c.evidenceLevel]
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl",
				children: c.name
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-base leading-relaxed",
				children: c.definition
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-relaxed text-fg-muted",
				children: c.explanation
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-3 rounded-xl border border-border bg-bg-elevated p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xs font-medium uppercase tracking-wide text-fg-subtle",
						children: "Ciência versus interpretação"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm leading-relaxed",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium",
							children: "Evidência. "
						}), observed]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm leading-relaxed text-fg-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-fg",
							children: "Interpretação. "
						}), interpretation]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm leading-relaxed",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium",
							children: "Limitação. "
						}), limitation]
					})
				]
			}),
			c.functions && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xs font-medium uppercase tracking-wide text-fg-subtle",
				children: "Funções (não essências)"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-2 list-disc pl-5 text-sm",
				children: c.functions.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: f }, f))
			})] }),
			c.circuits && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xs font-medium uppercase tracking-wide text-fg-subtle",
				children: "Circuitos"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-2 list-disc pl-5 text-sm",
				children: c.circuits.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: f }, f))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xs font-medium uppercase tracking-wide text-fg-subtle",
				children: "Mitos comuns"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-2 space-y-2",
				children: c.commonErrors.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "rounded-md bg-danger-soft px-3 py-2 text-sm text-danger",
					children: e
				}, e))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xs font-medium uppercase tracking-wide text-fg-subtle",
					children: "Conexões"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 font-display text-lg",
					children: c.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-2 flex flex-wrap gap-2",
					children: c.related.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/conceito/$conceptId",
						params: { conceptId: id },
						className: "rounded-full bg-surface px-3 py-2 text-sm",
						children: CONCEPTS.find((x) => x.id === id)?.name ?? id
					}) }, id))
				}),
				c.prerequisites.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-sm text-fg-muted",
					children: [
						"Pré-requisitos:",
						" ",
						c.prerequisites.map((id) => CONCEPT_BY_ID[id]?.name ?? id).join(", "),
						"."
					]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-fg-muted",
				children: [
					"Origem:",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						className: "text-accent underline-offset-4 hover:underline",
						to: "/modulo/$moduleId",
						params: { moduleId: c.originModule },
						children: MODULE_BY_ID[c.originModule]?.title ?? c.originModule
					}),
					". Abrir o conceito aqui não conclui o módulo."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm",
				children: [
					"Domínio aproximado: ",
					masteryScore(scores),
					" · ",
					labelState(progress?.state ?? "UNSEEN")
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "secondary",
					onClick: () => toggleDoubt(c.id),
					children: doubts.includes(c.id) ? "Remover dúvida" : "Tenho dúvida"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => {
						setTesting(true);
						setQIndex(0);
					},
					children: "Testar este conceito"
				})]
			}),
			testing && qs[qIndex] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuestionCard, {
				question: qs[qIndex],
				review: true,
				onDone: () => {
					if (qIndex < qs.length - 1) setQIndex(qIndex + 1);
					else setTesting(false);
				}
			}),
			testing && qs.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-fg-muted",
				children: "Ainda não há questão ligada a este conceito."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-medium",
					children: "Notas"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					value: note,
					onChange: (e) => setNote(e.target.value),
					className: "mt-2 min-h-20 w-full rounded-md border border-border px-3 py-2 text-sm",
					placeholder: "Ex.: eu confundia potencial de ação com corrente contínua."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					className: "mt-2",
					variant: "secondary",
					onClick: () => {
						if (!note.trim()) return;
						addNote({
							conceptId: c.id,
							text: note.trim()
						});
						setNote("");
					},
					children: "Salvar"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-2",
					children: notes.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "rounded-md bg-surface px-3 py-2 text-sm",
						children: n.text
					}, n.id))
				})
			] })
		]
	});
}
function labelState(s) {
	return {
		UNSEEN: "não visto",
		SEEN: "visto",
		EXPOSED: "exposto",
		UNDERSTOOD: "compreendido",
		RECALL_WEAK: "recuperação frágil",
		CONFUSED: "confusão",
		APPLIED: "aplicado",
		MASTERED: "consolidado"
	}[s] ?? s;
}
//#endregion
export { ConceptPage as component };
