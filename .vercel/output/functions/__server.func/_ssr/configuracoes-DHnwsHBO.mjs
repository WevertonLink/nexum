import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as useAppStore } from "./router-BqUbigV-.mjs";
import { t as Button } from "./button-CRWNAEw-.mjs";
import { n as InstalledBadge, t as InstallAppCard } from "./install-app-DUye4l2S.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/configuracoes-DHnwsHBO.js
var import_jsx_runtime = require_jsx_runtime();
function SettingsPage() {
	const settings = useAppStore((s) => s.settings);
	const update = useAppStore((s) => s.updateSettings);
	const reset = useAppStore((s) => s.resetProgress);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8 pt-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl",
				children: "Configurações"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InstallAppCard, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InstalledBadge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
				label: "Modo foco",
				desc: "Esconde a navegação inferior durante o estudo.",
				checked: settings.focusMode,
				onChange: (v) => update({ focusMode: v })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
				label: "Reduzir movimento",
				desc: "Além da preferência do sistema.",
				checked: settings.reduceMotion,
				onChange: (v) => update({ reduceMotion: v })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium",
					children: "Camada padrão"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-fg-muted",
					children: "A avançada nunca é exigida para terminar o essencial."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 flex gap-2",
					children: [
						1,
						2,
						3
					].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => update({ defaultLayer: n }),
						className: settings.defaultLayer === n ? "h-10 rounded-md bg-accent px-3 text-sm text-accent-fg" : "h-10 rounded-md bg-surface px-3 text-sm",
						children: n
					}, n))
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium",
					children: "Intervalos de revisão (dias)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-fg-muted",
					children: "Configuráveis, como o manuscrito pede."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "mt-2 space-y-2 text-sm",
					children: [
						["severeErrorDays", "Erro grave"],
						["mildErrorDays", "Erro leve"],
						["hintCorrectDays", "Acerto com pista"],
						["independentCorrectDays", "Acerto independente"],
						["consistentCorrectDays", "Acerto consistente"],
						["masteredDays", "Domínio consolidado"]
					].map(([k, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "number",
							min: 1,
							className: "h-10 w-16 rounded-md border border-border bg-bg px-2 text-right tabular-nums",
							value: settings.intervals[k],
							onChange: (e) => update({ intervals: {
								...settings.intervals,
								[k]: Number(e.target.value) || 1
							} })
						}) })]
					}, k))
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-danger/30 p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium text-danger",
						children: "Recomeçar"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-fg-muted",
						children: "Apaga progresso, notas e revisões neste dispositivo. O conteúdo permanece."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "danger",
						className: "mt-3",
						onClick: () => {
							if (confirm("Apagar todo o progresso neste dispositivo?")) reset();
						},
						children: "Apagar progresso"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs leading-relaxed text-fg-subtle",
				children: "Conhecimento sobre mecanismos neurobiológicos não substitui avaliação clínica individual. Nenhum dado pessoal desnecessário é pedido."
			})
		]
	});
}
function Toggle({ label, desc, checked, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "flex items-start justify-between gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "block font-medium",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-sm text-fg-muted",
			children: desc
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			role: "switch",
			"aria-checked": checked,
			onClick: () => onChange(!checked),
			className: checked ? "h-8 w-14 rounded-full bg-accent p-1" : "h-8 w-14 rounded-full bg-surface-2 p-1",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: checked ? "ml-6 block size-6 rounded-full bg-accent-fg" : "block size-6 rounded-full bg-bg-elevated" })
		})]
	});
}
//#endregion
export { SettingsPage as component };
