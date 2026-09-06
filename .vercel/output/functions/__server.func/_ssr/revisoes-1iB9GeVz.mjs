import { i as __toESM } from "../_runtime.mjs";
import { n as CONCEPT_BY_ID } from "./concepts-DTksM_A0.mjs";
import { i as questionsForConcept } from "./modules-Cak8tUlb.mjs";
import { b as require_jsx_runtime, v as Link, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as useAppStore, i as fragileConceptIds, o as isOverdue } from "./router-BqUbigV-.mjs";
import { t as QuestionCard } from "./question-card-IGZGwx5j.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/revisoes-1iB9GeVz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ReviewPage() {
	const concepts = useAppStore((s) => s.concepts);
	const doubts = useAppStore((s) => s.doubts);
	const fragile = fragileConceptIds({
		concepts,
		doubts
	});
	const due = Object.entries(concepts).filter(([, c]) => c.nextReviewAt && isOverdue(c.nextReviewAt)).map(([id]) => id);
	const queue = Array.from(/* @__PURE__ */ new Set([...due, ...fragile]));
	const [i, setI] = (0, import_react.useState)(0);
	const current = queue[i];
	const q = (0, import_react.useMemo)(() => current ? questionsForConcept(current)[0] : void 0, [current]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 pt-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl",
				children: "Revisão"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-fg-muted",
				children: "Sem distrações. Tentar lembrar não é fracasso; usar pista só registra que houve mais suporte."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xs font-medium uppercase tracking-wide text-fg-subtle",
				children: "Conceitos que precisam de atenção"
			}), queue.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-fg-muted",
				children: "Nada vencido agora. Continue a trilha — as revisões aparecem com o tempo e com os erros."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-3 space-y-2",
				children: queue.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/conceito/$conceptId",
					params: { conceptId: id },
					className: "block rounded-lg border border-border bg-bg-elevated px-4 py-3",
					children: CONCEPT_BY_ID[id]?.name ?? id
				}) }, id))
			})] }),
			current && q && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs uppercase tracking-wide text-fg-subtle",
				children: ["Conceito: ", CONCEPT_BY_ID[current]?.name]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuestionCard, {
					question: q,
					review: true,
					onDone: () => setI((n) => Math.min(queue.length - 1, n + 1))
				})
			})] })
		]
	});
}
//#endregion
export { ReviewPage as component };
