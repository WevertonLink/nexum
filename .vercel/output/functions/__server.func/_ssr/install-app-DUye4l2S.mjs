import { i as __toESM } from "../_runtime.mjs";
import { b as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as Download, a as Share, l as Plus, r as Smartphone, t as X } from "../_libs/lucide-react.mjs";
import { v as NexumMark } from "./router-BqUbigV-.mjs";
import { t as Button } from "./button-CRWNAEw-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/install-app-DUye4l2S.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var DISMISS_KEY = "nexum:install-dismissed";
function isStandalone() {
	if (typeof window === "undefined") return false;
	return window.matchMedia("(display-mode: standalone)").matches || window.matchMedia("(display-mode: fullscreen)").matches || "standalone" in navigator && Boolean(navigator.standalone);
}
function isIos() {
	if (typeof navigator === "undefined") return false;
	const ua = navigator.userAgent;
	const iPhone = /iPhone|iPad|iPod/i.test(ua);
	const iPadOs = navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
	return iPhone || iPadOs;
}
function useInstalledApp() {
	const [installed, setInstalled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const sync = () => setInstalled(isStandalone());
		sync();
		const mq = window.matchMedia("(display-mode: standalone)");
		mq.addEventListener("change", sync);
		return () => mq.removeEventListener("change", sync);
	}, []);
	return installed;
}
function InstallAppCard() {
	const [mode, setMode] = (0, import_react.useState)("manual");
	const [deferred, setDeferred] = (0, import_react.useState)(null);
	const [busy, setBusy] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (isStandalone()) {
			setMode("installed");
			return;
		}
		if (window.localStorage.getItem(DISMISS_KEY) === "1") {
			setMode("off");
			return;
		}
		let captured = null;
		const onPrompt = (event) => {
			event.preventDefault();
			captured = event;
			setDeferred(captured);
			setMode("prompt");
		};
		window.addEventListener("beforeinstallprompt", onPrompt);
		setMode(isIos() ? "ios" : "manual");
		return () => window.removeEventListener("beforeinstallprompt", onPrompt);
	}, []);
	if (mode === "off" || mode === "installed") return null;
	const dismiss = () => {
		window.localStorage.setItem(DISMISS_KEY, "1");
		setMode("off");
	};
	const install = async () => {
		if (!deferred) return;
		setBusy(true);
		try {
			await deferred.prompt();
			if ((await deferred.userChoice).outcome === "accepted") setMode("installed");
		} finally {
			setBusy(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden rounded-xl border border-border bg-bg-elevated p-5 shadow-soft",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: dismiss,
				className: "absolute right-3 top-3 grid size-11 place-items-center rounded-md text-fg-subtle hover:bg-surface hover:text-fg",
				"aria-label": "Dispensar",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-3 pr-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NexumMark, {
					className: "size-14 shrink-0",
					title: "Ícone do Nexum"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium uppercase tracking-wide text-accent",
							children: "Tela inicial"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-1 font-display text-2xl leading-tight",
							children: "Instalar o Nexum"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm leading-relaxed text-fg-muted",
							children: "Abre como aplicativo, com o ícone N verde-escuro na tela inicial. O progresso continua neste aparelho."
						})
					]
				})]
			}),
			mode === "prompt" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				className: "mt-4 w-full",
				onClick: install,
				disabled: busy,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), busy ? "Aguardando…" : "Instalar no aparelho"]
			}),
			mode === "ios" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
				className: "mt-4 space-y-3 text-sm leading-relaxed",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share, { className: "mt-0.5 size-4 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						"Toque em ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "font-medium text-fg",
							children: "Compartilhar"
						}),
						" na barra do Safari."
					] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mt-0.5 size-4 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						"Escolha ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "font-medium text-fg",
							children: "Adicionar à Tela de Início"
						}),
						" e confirme."
					] })]
				})]
			}),
			mode === "manual" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 flex gap-3 text-sm leading-relaxed text-fg-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smartphone, { className: "mt-0.5 size-4 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"No menu do navegador, escolha ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: "font-medium text-fg",
						children: "Instalar aplicativo"
					}),
					" ou",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: "font-medium text-fg",
						children: "Adicionar à tela inicial"
					}),
					"."
				] })]
			})
		]
	});
}
function InstalledBadge() {
	if (!useInstalledApp()) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "flex items-center gap-2 rounded-xl border border-border bg-bg-elevated px-4 py-3 text-sm text-fg-muted",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NexumMark, { className: "size-8" }), "Aberto como aplicativo neste aparelho."]
	});
}
//#endregion
export { InstalledBadge as n, InstallAppCard as t };
