import { n as MODULE_BY_ID } from "./modules-Cak8tUlb.mjs";
import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as useAppStore } from "./router-BqUbigV-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/favoritos-B5bAdz-J.js
var import_jsx_runtime = require_jsx_runtime();
function FavoritesPage() {
	const bookmarks = useAppStore((s) => s.bookmarks);
	const notes = useAppStore((s) => s.notes);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8 pt-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl",
				children: "Marcados"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-fg-muted",
				children: "Pontos para voltar. Marcar não é domínio."
			})] }),
			bookmarks.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-fg-muted",
				children: "Nenhum bloco marcado ainda."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-2",
				children: bookmarks.map((b) => {
					const m = MODULE_BY_ID[b.moduleId];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/modulo/$moduleId",
						params: { moduleId: b.moduleId },
						className: "block rounded-lg border border-border bg-bg-elevated px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: m?.shortTitle ?? b.moduleId
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-fg-subtle",
							children: ["Bloco ", b.blockId]
						})]
					}) }, b.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl",
				children: "Notas recentes"
			}), notes.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-fg-muted",
				children: "Nenhuma nota neste dispositivo."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 space-y-2",
				children: notes.slice(0, 12).map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "rounded-lg bg-surface px-4 py-3 text-sm leading-relaxed",
					children: n.text
				}, n.id))
			})] })
		]
	});
}
//#endregion
export { FavoritesPage as component };
