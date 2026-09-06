import { t as GLOSSARY } from "./glossary-DYRGtmah.mjs";
import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/glossario-Bq2lF1w8.js
var import_jsx_runtime = require_jsx_runtime();
function GlossaryPage() {
	const sorted = [...GLOSSARY].sort((a, b) => a.term.localeCompare(b.term, "pt"));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4 pt-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl",
				children: "Glossário"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-fg-muted",
				children: "Acessível sem abandonar o estudo — os termos na trilha também abrem no lugar."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "divide-y divide-border rounded-xl border border-border bg-bg-elevated",
				children: sorted.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "px-4 py-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: g.term
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-fg-muted",
							children: g.definition
						}),
						g.conceptId && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/conceito/$conceptId",
							params: { conceptId: g.conceptId },
							className: "mt-1 inline-block text-sm text-accent",
							children: "Ver conceito"
						})
					]
				}, g.id))
			})
		]
	});
}
//#endregion
export { GlossaryPage as component };
