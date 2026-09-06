import { i as __toESM } from "../_runtime.mjs";
import { b as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { y as cn } from "./router-BqUbigV-.mjs";
import { t as Button } from "./button-CRWNAEw-.mjs";
import { t as CHALLENGES } from "./diagnostic-CUORKcUg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/desafios-BdRYwUcR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ChallengesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8 pt-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-3xl",
			children: "Desafios"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-fg-muted",
			children: "Misturam módulos. O objetivo é integrar níveis, não reconhecer o contexto da aula."
		})] }), CHALLENGES.map((ch) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChallengeCard, { id: ch.id }, ch.id))]
	});
}
function ChallengeCard({ id }) {
	const ch = CHALLENGES.find((c) => c.id === id);
	const [sel, setSel] = (0, import_react.useState)([]);
	const [done, setDone] = (0, import_react.useState)(false);
	function toggle(oid) {
		setSel((s) => s.includes(oid) ? s.filter((x) => x !== oid) : [...s, oid]);
	}
	const ok = ch.correctIds.length === sel.length && ch.correctIds.every((x) => sel.includes(x));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-xl border border-border bg-bg-elevated p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs uppercase tracking-wide text-fg-subtle",
				children: ["Após etapa ", ch.afterStage]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-1 font-display text-xl",
				children: ch.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-relaxed",
				children: ch.prompt
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 space-y-2",
				children: ch.options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => toggle(o.id),
					className: cn("w-full rounded-lg border px-3 py-2 text-left text-sm", sel.includes(o.id) ? "border-accent bg-accent-soft" : "border-border"),
					children: o.text
				}) }, o.id))
			}),
			!done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "mt-4 w-full",
				onClick: () => setDone(true),
				disabled: sel.length === 0,
				children: "Ver modelo"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 space-y-2 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: ok ? "text-ok" : "text-fg",
					children: ok ? "Você integrou os níveis pertinentes." : "Há uma peça a mais ou a menos. Compare com o modelo — incerteza explícita pode ser parte da resposta certa."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: ch.explanation })]
			})
		]
	});
}
//#endregion
export { ChallengesPage as component };
