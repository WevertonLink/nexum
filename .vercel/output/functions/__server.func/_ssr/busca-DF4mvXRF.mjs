import { i as __toESM } from "../_runtime.mjs";
import { n as CONCEPT_BY_ID, t as CONCEPTS } from "./concepts-DTksM_A0.mjs";
import { t as MODULES } from "./modules-Cak8tUlb.mjs";
import { t as GLOSSARY } from "./glossary-DYRGtmah.mjs";
import { b as require_jsx_runtime, v as Link, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/busca-DF4mvXRF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SearchPage() {
	const [q, setQ] = (0, import_react.useState)("");
	const query = q.trim().toLowerCase();
	const results = (0, import_react.useMemo)(() => {
		if (query.length < 2) return {
			modules: [],
			concepts: [],
			glossary: [],
			questions: []
		};
		return {
			modules: MODULES.filter((m) => {
				const inMeta = m.title.toLowerCase().includes(query) || m.objective.toLowerCase().includes(query) || m.shortTitle.toLowerCase().includes(query) || m.centralQuestion.toLowerCase().includes(query);
				const inConcepts = m.concepts.some((id) => (CONCEPT_BY_ID[id]?.name ?? id).toLowerCase().includes(query));
				return inMeta || inConcepts;
			}),
			concepts: CONCEPTS.filter((c) => c.name.toLowerCase().includes(query) || c.definition.toLowerCase().includes(query)),
			glossary: GLOSSARY.filter((g) => g.term.toLowerCase().includes(query) || g.definition.toLowerCase().includes(query)),
			questions: MODULES.flatMap((m) => m.questions.filter((qq) => qq.prompt.toLowerCase().includes(query)).map((qq) => ({
				...qq,
				title: m.title
			}))).slice(0, 8)
		};
	}, [query]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 pt-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl",
				children: "Busca"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				autoFocus: true,
				value: q,
				onChange: (e) => setQ(e.target.value),
				placeholder: "Módulos, conceitos, termos…",
				className: "h-12 w-full rounded-lg border border-border bg-bg-elevated px-4 text-base"
			}),
			query.length >= 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
					title: "Módulos",
					children: [results.modules.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/modulo/$moduleId",
						params: { moduleId: m.id },
						className: "block py-2",
						children: [
							"Módulo ",
							m.number,
							" — ",
							m.title,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "block text-sm text-fg-muted",
								children: [
									"Encontrado em: ",
									STAGES_NAME[m.stage],
									" · conceitos:",
									" ",
									m.concepts.slice(0, 3).map((id) => CONCEPT_BY_ID[id]?.name ?? id).join(", ")
								]
							})
						]
					}, m.id)), results.modules.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-fg-muted",
						children: "Nenhum módulo."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					title: "Conceitos",
					children: results.concepts.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/conceito/$conceptId",
						params: { conceptId: c.id },
						className: "block py-2",
						children: [c.name, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "block text-sm text-fg-muted",
							children: ["Relacionados: ", c.related.slice(0, 4).map((id) => CONCEPT_BY_ID[id]?.name ?? id).join(", ")]
						})]
					}, c.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					title: "Glossário",
					children: results.glossary.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "py-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-medium",
							children: [g.term, ". "]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-fg-muted",
							children: g.definition
						})]
					}, g.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					title: "Perguntas",
					children: results.questions.map((qq) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "py-2 text-sm",
						children: [qq.prompt, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block text-xs text-fg-subtle",
							children: qq.title
						})]
					}, qq.id))
				})
			] })
		]
	});
}
var STAGES_NAME = {
	1: "Infraestrutura",
	2: "Sistemas",
	3: "Cognição",
	4: "Intervenção"
};
function Section({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: "text-xs font-medium uppercase tracking-wide text-fg-subtle",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-1 divide-y divide-border",
		children
	})] });
}
//#endregion
export { SearchPage as component };
