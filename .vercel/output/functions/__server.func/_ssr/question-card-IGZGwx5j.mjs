import { i as __toESM } from "../_runtime.mjs";
import { n as CONCEPT_BY_ID } from "./concepts-DTksM_A0.mjs";
import { b as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as useAppStore, y as cn } from "./router-BqUbigV-.mjs";
import { t as Button } from "./button-CRWNAEw-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/question-card-IGZGwx5j.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TOKEN = /(\[\[([a-z0-9_]+)(?:\|([^\]]+))?\]\]|\*\*([^*]+)\*\*)/g;
function RichText({ text, className, onTerm }) {
	const parts = [];
	let last = 0;
	let i = 0;
	let m;
	const src = text;
	const matcher = new RegExp(TOKEN.source, "g");
	while (m = matcher.exec(src)) {
		if (m.index > last) parts.push(src.slice(last, m.index));
		if (m[2]) {
			const id = m[2];
			const concept = CONCEPT_BY_ID[id];
			const label = m[3] || concept?.name || id;
			parts.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "term-link",
				onClick: () => onTerm?.(id),
				children: label
			}, `t${i++}`));
		} else if (m[4]) parts.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
			className: "font-semibold text-fg",
			children: m[4]
		}, `b${i++}`));
		last = m.index + m[0].length;
	}
	if (last < src.length) parts.push(src.slice(last));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("leading-relaxed", className),
		children: parts
	});
}
var CONF = [
	{
		v: 0,
		l: "Não sabia"
	},
	{
		v: 1,
		l: "Pouco confiante"
	},
	{
		v: 2,
		l: "Razoavelmente"
	},
	{
		v: 3,
		l: "Muito confiante"
	}
];
function QuestionCard({ question, onDone, review }) {
	const recordAnswer = useAppStore((s) => s.recordAnswer);
	const [picked, setPicked] = (0, import_react.useState)(null);
	const [free, setFree] = (0, import_react.useState)("");
	const [revealed, setRevealed] = (0, import_react.useState)(false);
	const [hints, setHints] = (0, import_react.useState)(0);
	const [confidence, setConfidence] = (0, import_react.useState)(null);
	const [self, setSelf] = (0, import_react.useState)(null);
	const [saved, setSaved] = (0, import_react.useState)(false);
	const isOpen = !question.options || question.options.length === 0;
	const multi = question.correctAnswer.includes(",");
	const correctIds = question.correctAnswer.split(",").map((s) => s.trim());
	const isCorrect = () => {
		if (isOpen) return self !== "failed" && self !== null;
		if (multi) {
			const sel = new Set((picked ?? "").split(",").filter(Boolean));
			return correctIds.length === sel.size && correctIds.every((id) => sel.has(id));
		}
		return picked === question.correctAnswer;
	};
	function toggleMulti(id) {
		const cur = new Set((picked ?? "").split(",").filter(Boolean));
		if (cur.has(id)) cur.delete(id);
		else cur.add(id);
		setPicked([...cur].join(","));
	}
	function commit() {
		const ok = isOpen ? self !== "failed" : isCorrect();
		recordAnswer({
			questionId: question.id,
			moduleId: question.moduleId,
			conceptIds: question.conceptIds,
			type: question.type,
			correct: Boolean(ok),
			hintsUsed: hints,
			confidence,
			selected: picked ?? void 0,
			freeText: free || void 0,
			confused: question.type === "misconception" && !ok,
			selfRating: self ?? void 0
		});
		setSaved(true);
	}
	const ok = revealed && isCorrect();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-xl border border-border bg-bg-elevated p-5 shadow-soft",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs font-medium uppercase tracking-wide text-fg-subtle",
				children: [labelType(question.type), review ? " · revisão" : ""]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-xl leading-snug text-fg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RichText, { text: question.prompt })
			}),
			question.options && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 space-y-2",
				children: question.options.map((o) => {
					const selected = multi ? (picked ?? "").split(",").includes(o.id) : picked === o.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						disabled: revealed,
						onClick: () => multi ? toggleMulti(o.id) : setPicked(o.id),
						className: cn("min-h-11 w-full rounded-lg border px-4 py-3 text-left text-sm leading-snug transition-colors duration-150", selected ? "border-accent bg-accent-soft" : "border-border bg-bg hover:border-border-strong", revealed && correctIds.includes(o.id) && "border-ok bg-ok-soft", revealed && selected && !correctIds.includes(o.id) && "border-danger bg-danger-soft"),
						children: [o.text, revealed && correctIds.includes(o.id) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block text-xs text-ok",
							children: "Formulação mais adequada"
						})]
					}) }, o.id);
				})
			}),
			isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				value: free,
				onChange: (e) => setFree(e.target.value),
				placeholder: "Tente com suas palavras. Depois compare com o modelo.",
				className: "mt-4 min-h-28 w-full rounded-lg border border-border bg-bg px-3 py-3 text-base leading-relaxed text-fg placeholder:text-fg-subtle"
			}),
			hints > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 space-y-2 rounded-lg bg-info-soft px-4 py-3 text-sm text-info",
				children: [
					hints >= 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium",
						children: "Pista 1. "
					}), question.hint1] }),
					hints >= 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium",
						children: "Pista 2. "
					}), question.hint2] }),
					hints >= 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium",
						children: "Pista 3. "
					}), question.hint3] })
				]
			}),
			!revealed && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "secondary",
					size: "sm",
					onClick: () => setHints((h) => h < 3 ? h + 1 : h),
					disabled: hints >= 3,
					children: hints === 0 ? "Ver uma pista" : hints < 3 ? "Próxima pista" : "Pistas esgotadas"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					onClick: () => setRevealed(true),
					disabled: !isOpen && !picked,
					children: isOpen ? "Ver resposta" : "Confirmar"
				})]
			}),
			revealed && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 space-y-3 border-t border-border pt-4 text-sm leading-relaxed",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-fg",
						children: isOpen ? "Compare com o modelo científico." : ok ? "Boa reconstrução. Você identificou o mecanismo ou a formulação mais precisa." : "Esse conceito ainda precisa de consolidação. Você identificou parte, ou confundiu uma etapa — vamos precisar revê-la."
					}),
					question.whyPlausible && !ok && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium",
						children: "Por que essa resposta parece plausível. "
					}), question.whyPlausible] }),
					question.misconception && !ok && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium",
						children: "Onde está o problema. "
					}), question.misconception] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium",
						children: "Qual modelo é mais adequado. "
					}), question.explanation] }),
					question.modelAnswer && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "rounded-md bg-surface px-3 py-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium",
							children: "Modelo. "
						}), question.modelAnswer]
					}),
					question.errorKind && !ok && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-fg-subtle",
						children: [
							"Tipo de erro: ",
							labelError(question.errorKind),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
							className: "text-xs font-medium uppercase tracking-wide text-fg-subtle",
							children: "Como foi?"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 gap-2",
							children: [
								"easy",
								"medium",
								"hard",
								"failed"
							].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setSelf(k),
								className: cn("min-h-11 rounded-md border px-3 py-2 text-sm", self === k ? "border-accent bg-accent-soft" : "border-border"),
								children: {
									easy: "Fácil",
									medium: "Médio",
									hard: "Difícil",
									failed: "Não consegui"
								}[k]
							}, k))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
						className: "text-xs font-medium uppercase tracking-wide text-fg-subtle",
						children: "Quão confiante você estava?"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 grid grid-cols-2 gap-2",
						children: CONF.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setConfidence(c.v),
							className: cn("min-h-11 rounded-md border px-3 py-2 text-sm", confidence === c.v ? "border-accent bg-accent-soft" : "border-border"),
							children: c.l
						}, c.v))
					})] }),
					confidence === 3 && revealed && !ok && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rounded-md bg-warn-soft px-3 py-2 text-sm text-warn",
						children: "Alta confiança com erro: possível falsa sensação de domínio. Esse item volta cedo na revisão."
					}),
					confidence !== null && confidence <= 1 && ok && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rounded-md bg-info-soft px-3 py-2 text-sm text-info",
						children: "Acerto com baixa confiança: o conhecimento ainda pode estar pouco acessível. Revisaremos."
					}),
					!saved && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "w-full",
						onClick: commit,
						disabled: isOpen && !self,
						children: "Registrar"
					}),
					saved && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-ok",
							children: "Registrado. O erro, se houve, alimenta a revisão — sem punição."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "w-full",
							onClick: () => onDone?.(),
							children: "Continuar"
						})]
					})
				]
			})
		]
	});
}
function labelType(t) {
	return {
		recognition: "Reconhecimento",
		recall: "Recuperação",
		relation: "Relação",
		counterfactual: "Contrafactual",
		misconception: "Contraste",
		application: "Aplicação",
		integration: "Integração",
		limit: "Limite"
	}[t];
}
function labelError(k) {
	return {
		factual: "factual — a informação ainda não está disponível",
		causal: "causal — os elementos estão lá, a relação não",
		scale: "de escala — um nível foi tratado como se esgotasse outro",
		generalization: "de generalização — uma associação virou regra",
		language: "de linguagem — a ideia está próxima, a formulação não"
	}[k];
}
//#endregion
export { RichText as n, QuestionCard as t };
