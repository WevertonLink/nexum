import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as Layers, h as Flag, i as ShieldAlert, o as Settings, s as Search, x as BookMarked, y as Bookmark } from "../_libs/lucide-react.mjs";
import { n as InstalledBadge, t as InstallAppCard } from "./install-app-DUye4l2S.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/mais-BPYVyk-s.js
var import_jsx_runtime = require_jsx_runtime();
var LINKS = [
	{
		to: "/progresso",
		label: "Progresso",
		desc: "Trilha e domínio conceitual",
		icon: Flag
	},
	{
		to: "/desafios",
		label: "Desafios",
		desc: "Integração entre módulos",
		icon: Layers
	},
	{
		to: "/mitos",
		label: "Mitos",
		desc: "Simplificações que o curso recusa",
		icon: ShieldAlert
	},
	{
		to: "/glossario",
		label: "Glossário",
		desc: "Termos sem sair do estudo",
		icon: BookMarked
	},
	{
		to: "/favoritos",
		label: "Marcados",
		desc: "Pontos para voltar e notas",
		icon: Bookmark
	},
	{
		to: "/busca",
		label: "Busca",
		desc: "Módulos, conceitos, perguntas",
		icon: Search
	},
	{
		to: "/configuracoes",
		label: "Configurações",
		desc: "Foco, intervalos, recomeçar",
		icon: Settings
	}
];
function MorePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 pt-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl",
				children: "Mais"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-relaxed text-fg-muted",
				children: "Conhecimento sobre mecanismos neurobiológicos não substitui avaliação clínica individual."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InstallAppCard, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InstalledBadge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "divide-y divide-border rounded-xl border border-border bg-bg-elevated",
				children: LINKS.map((l) => {
					const Icon = l.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: l.to,
						className: "flex min-h-14 items-center gap-3 px-4 py-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-medium",
							children: l.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-fg-muted",
							children: l.desc
						})] })]
					}) }, l.to);
				})
			})
		]
	});
}
//#endregion
export { MorePage as component };
