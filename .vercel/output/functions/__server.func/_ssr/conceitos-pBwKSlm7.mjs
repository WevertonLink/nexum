import { t as CONCEPTS } from "./concepts-DTksM_A0.mjs";
import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as useAppStore } from "./router-BqUbigV-.mjs";
import { n as LEVEL_LABEL } from "./types-BKB3ttg6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/conceitos-pBwKSlm7.js
var import_jsx_runtime = require_jsx_runtime();
function ConceptsPage() {
	const concepts = useAppStore((s) => s.concepts);
	const grouped = CONCEPTS.reduce((acc, c) => {
		(acc[c.level] ??= []).push(c);
		return acc;
	}, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8 pt-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-3xl",
			children: "Conceitos"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-fg-muted",
			children: "Biblioteca navegável. Abrir aqui não marca o módulo como concluído."
		})] }), Object.entries(grouped).map(([level, list]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-xs font-medium uppercase tracking-wide text-fg-subtle",
			children: LEVEL_LABEL[level]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-2 divide-y divide-border rounded-xl border border-border bg-bg-elevated",
			children: list.map((c) => {
				const st = concepts[c.id]?.state ?? "UNSEEN";
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/conceito/$conceptId",
					params: { conceptId: c.id },
					className: "flex items-baseline justify-between gap-3 px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: c.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-fg-subtle",
						children: labelState(st)
					})]
				}) }, c.id);
			})
		})] }, level))]
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
export { ConceptsPage as component };
