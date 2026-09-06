import { n as MODULE_BY_ID } from "./modules-Cak8tUlb.mjs";
import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as useAppStore, d as moduleOverall, h as STAGES, l as emptyModuleProgress, u as isModuleUnlocked, y as cn } from "./router-BqUbigV-.mjs";
import { t as ProgressMeter } from "./progress-meter-C7fdWJG9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/trilha-qH0BMImi.js
var import_jsx_runtime = require_jsx_runtime();
function TrailPage() {
	const modules = useAppStore((s) => s.modules);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8 pt-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-3xl",
			children: "Trilha"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-fg-muted",
			children: "Infraestrutura → Sistemas → Cognição → Intervenção. Os módulos bloqueados avisam; não prendem para sempre."
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "space-y-8",
			children: STAGES.map((stage, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs font-medium uppercase tracking-[0.14em] text-accent",
					children: ["Etapa ", stage.id]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: stage.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-fg-muted",
					children: stage.subtitle
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed",
					children: stage.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressMeter, { value: Math.round(stage.moduleIds.reduce((a, id) => a + moduleOverall(modules[id] ?? emptyModuleProgress()), 0) / stage.moduleIds.length) })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2",
					children: stage.moduleIds.map((id) => {
						const m = MODULE_BY_ID[id];
						const p = modules[id] ?? emptyModuleProgress();
						const unlocked = isModuleUnlocked(id, modules);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/modulo/$moduleId",
							params: { moduleId: id },
							className: cn("block rounded-lg border px-4 py-3", p.completed ? "border-ok/30 bg-ok-soft" : "border-border bg-bg-elevated"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-medium",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-mono text-xs text-fg-subtle",
										children: [String(m.number).padStart(2, "0"), " · "]
									}), m.shortTitle]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xs tabular-nums text-fg-subtle",
									children: [moduleOverall(p), "%"]
								})]
							}), !unlocked && !p.startedAt && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-warn",
								children: "Disponível após consolidar os fundamentos necessários. Você ainda pode abrir — com aviso."
							})]
						}) }, id);
					})
				}),
				i < STAGES.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-center text-fg-subtle",
					"aria-hidden": true,
					children: "↓"
				})
			] }, stage.id))
		})]
	});
}
//#endregion
export { TrailPage as component };
