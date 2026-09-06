import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { y as cn } from "./router-BqUbigV-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/progress-meter-C7fdWJG9.js
var import_jsx_runtime = require_jsx_runtime();
function ProgressMeter({ value, label, tone = "accent" }) {
	const v = Math.max(0, Math.min(100, value));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [label && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-1 flex justify-between text-xs text-fg-muted",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "tabular-nums",
			children: [v, "%"]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-2 overflow-hidden rounded-full bg-surface-2",
		role: "progressbar",
		"aria-valuenow": v,
		"aria-valuemin": 0,
		"aria-valuemax": 100,
		"aria-label": label,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("h-full rounded-full transition-[width] duration-300 ease-[var(--ease-out)]", tone === "ok" && "bg-ok", tone === "warn" && "bg-warn", tone === "accent" && "bg-accent"),
			style: { width: `${v}%` }
		})
	})] });
}
//#endregion
export { ProgressMeter as t };
