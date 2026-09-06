import { t as CONCEPTS } from "./concepts-DTksM_A0.mjs";
import { t as MODULES } from "./modules-Cak8tUlb.mjs";
import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as useAppStore, c as conceptualMastery, d as moduleOverall, f as stageProgress, h as STAGES, l as emptyModuleProgress, p as trailProgress } from "./router-BqUbigV-.mjs";
import { t as ProgressMeter } from "./progress-meter-C7fdWJG9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/progresso-C8X1QwTJ.js
var import_jsx_runtime = require_jsx_runtime();
function ProgressPage() {
	const modules = useAppStore((s) => s.modules);
	const concepts = useAppStore((s) => s.concepts);
	const answers = useAppStore((s) => s.answers);
	const mastery = conceptualMastery(Object.fromEntries(CONCEPTS.map((c) => [c.id, concepts[c.id] ?? {
		scores: {
			comprehension: 0,
			recall: 0,
			contrast: 0,
			application: 0
		},
		state: "UNSEEN"
	}])));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8 pt-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl",
				children: "Progresso"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-fg-muted",
				children: "Percentual de leitura não é domínio. Aqui o retrato é multidimensional."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressMeter, {
				value: trailProgress(modules),
				label: "Trilha"
			}),
			STAGES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressMeter, {
				value: stageProgress(s.id, modules),
				label: `${s.name}`
			}, s.id)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl",
				children: "Domínio conceitual"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-sm text-fg-muted",
				children: [
					mastery.mastered,
					" consolidados · ",
					mastery.fragile,
					" frágeis · ",
					mastery.total,
					" no grafo"
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl",
					children: "Por módulo"
				}), MODULES.map((m) => {
					const p = modules[m.id] ?? emptyModuleProgress();
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-lg border border-border px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								m.number,
								". ",
								m.shortTitle
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "tabular-nums text-fg-subtle",
								children: [moduleOverall(p), "%"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-2 grid grid-cols-2 gap-x-3 gap-y-1 text-xs text-fg-muted",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									"Conteúdo ",
									p.content,
									"%"
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									"Compreensão ",
									p.comprehension,
									"%"
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									"Recuperação ",
									p.recall,
									"%"
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									"Contraste ",
									p.contrast,
									"%"
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									"Aplicação ",
									p.application,
									"%"
								] })
							]
						})]
					}, m.id);
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs text-fg-subtle",
				children: [answers.length, " respostas registradas neste dispositivo."]
			})
		]
	});
}
//#endregion
export { ProgressPage as component };
