import { i as __toESM } from "../_runtime.mjs";
import { t as CONCEPTS } from "./concepts-DTksM_A0.mjs";
import { n as MODULE_BY_ID, t as MODULES } from "./modules-Cak8tUlb.mjs";
import { _ as createRootRoute, b as require_jsx_runtime, d as useRouterState, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link, y as useRouter, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { c as RotateCcw, d as Library, g as Ellipsis, m as GitBranch, n as TriangleAlert, p as House } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { n as persist, r as create, t as createJSONStorage } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/utils-C_uf36nf.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-BqUbigV-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: error.message || "An unexpected error occurred. Try reloading the page."
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	if (typeof window === "undefined") return () => {};
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	const parentOrigin = resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		if (envelope.data.type === "hello") {
			if (!HelloSchema.safeParse(event.data).success) return;
			announce();
			return;
		}
		if (envelope.data.type === "navigate") {
			const parsed = NavigateSchema.safeParse(event.data);
			if (!parsed.success) return;
			navigate(parsed.data.path);
			queueMicrotask(reportLocation);
			return;
		}
		if (envelope.data.type === "history") {
			const parsed = HistorySchema.safeParse(event.data);
			if (!parsed.success) return;
			if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
			window.history.go(parsed.data.delta);
		}
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
/** Shared N mark — same geometry as favicon.svg / PWA icons. */
function NexumMark({ className, title }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 32 32",
		className: cn("text-accent", className),
		role: title ? "img" : "presentation",
		"aria-hidden": title ? void 0 : true,
		"aria-label": title,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			width: "32",
			height: "32",
			rx: "6",
			fill: "currentColor"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "var(--color-bg)",
			d: "M8 6h5v20H8zm11 0h5v20h-5zM12 6h5L24 26h-5z"
		})]
	});
}
var DEFAULT_MASTERY_THRESHOLDS = {
	comprehension: 70,
	recall: 70,
	contrast: 70,
	application: 60
};
function clamp(n) {
	return Math.max(0, Math.min(100, Math.round(n)));
}
function bucket(type) {
	if (type === "recognition" || type === "relation") return "comprehension";
	if (type === "recall") return "recall";
	if (type === "misconception" || type === "limit" || type === "counterfactual") return "contrast";
	return "application";
}
function applyAnswerToScores(prev, evalResult) {
	const key = bucket(evalResult.type);
	const delta = evalResult.correct ? evalResult.hintsUsed === 0 ? 18 : evalResult.hintsUsed === 1 ? 10 : 6 : evalResult.hintsUsed >= 2 ? -8 : -14;
	return {
		...prev,
		[key]: clamp(prev[key] + delta)
	};
}
function masteryScore(scores) {
	return clamp(scores.comprehension * .25 + scores.recall * .3 + scores.contrast * .25 + scores.application * .2);
}
function meetsMastery(scores, thresholds = DEFAULT_MASTERY_THRESHOLDS) {
	return scores.comprehension >= thresholds.comprehension && scores.recall >= thresholds.recall && scores.contrast >= thresholds.contrast && scores.application >= thresholds.application;
}
function deriveState(prev, scores, last) {
	if (prev === "UNSEEN") return "SEEN";
	if (!last) return prev;
	if (last.correct === false && last.type === "misconception") return "CONFUSED";
	if (last.correct === false) return "RECALL_WEAK";
	if (meetsMastery(scores) && last.hintsUsed === 0) return "MASTERED";
	if (scores.application >= 60 && last.type === "application" && last.correct) return "APPLIED";
	if (scores.comprehension >= 50 || scores.recall >= 50) return "UNDERSTOOD";
	return "EXPOSED";
}
function emptyScores() {
	return {
		comprehension: 0,
		recall: 0,
		contrast: 0,
		application: 0
	};
}
var STAGES = [
	{
		id: 1,
		name: "Infraestrutura",
		subtitle: "Biologia celular e comunicação neural",
		description: "Como uma célula nervosa produz, propaga e transmite um sinal — sem saltar do íon para o comportamento.",
		closingGoal: "Reconstruir a cadeia: gradiente iônico → potencial de membrana → potencial de ação → propagação → Ca²⁺ → neurotransmissor → receptor.",
		moduleIds: [
			"module_01",
			"module_02",
			"module_03",
			"module_04",
			"module_05",
			"module_06",
			"module_07",
			"module_08"
		]
	},
	{
		id: 2,
		name: "Sistemas",
		subtitle: "Neurobiologia sistêmica",
		description: "Do circuito ao sistema: emoção, estresse, recompensa e memória como processos distribuídos — não como 'áreas'.",
		closingGoal: "Explicar informação → circuitos → avaliação → alterações corporais → aprendizagem → comportamento, sem reduzir emoção a uma região.",
		moduleIds: [
			"module_09",
			"module_10",
			"module_11",
			"module_12",
			"module_13",
			"module_14",
			"module_15",
			"module_16"
		]
	},
	{
		id: 3,
		name: "Cognição",
		subtitle: "Psicologia cognitiva e comportamento",
		description: "Atenção, memória, decisão, hábitos e vieses como outro nível de descrição — não como substituto da biologia.",
		closingGoal: "Integrar informação → atenção → memória → avaliação → decisão → ação → aprendizagem, reconhecendo processos simultâneos.",
		moduleIds: [
			"module_17",
			"module_18",
			"module_19",
			"module_20",
			"module_21",
			"module_22",
			"module_23",
			"module_24"
		]
	},
	{
		id: 4,
		name: "Intervenção",
		subtitle: "Comunicação, escuta e aplicação",
		description: "Aplicar o conhecimento com responsabilidade: escutar, formular hipótese, comunicar, testar — e reconhecer limites.",
		closingGoal: "Analisar pessoa → contexto → estado → interpretação → comunicação → comportamento → possível intervenção, sem ultrapassar a formação.",
		moduleIds: [
			"module_25",
			"module_26",
			"module_27",
			"module_28",
			"module_29",
			"module_30",
			"module_31",
			"module_32"
		]
	}
];
var APP_PRINCIPLE = "Aprender não é apenas reconhecer uma informação. Aprender significa conseguir reconstruí-la, diferenciá-la de explicações incorretas e utilizá-la adequadamente em um novo contexto.";
var EMPTY_MODULE_PROGRESS = {
	content: 0,
	comprehension: 0,
	recall: 0,
	contrast: 0,
	application: 0,
	blocksSeen: [],
	questionsAnswered: [],
	completed: false,
	lastBlockId: null,
	startedAt: null,
	completedAt: null
};
function emptyModuleProgress() {
	return {
		...EMPTY_MODULE_PROGRESS,
		blocksSeen: [],
		questionsAnswered: []
	};
}
function moduleOverall(p) {
	return Math.round(p.content * .25 + p.comprehension * .2 + p.recall * .2 + p.contrast * .2 + p.application * .15);
}
function canAdvanceModule(p) {
	return p.content >= 80 && p.questionsAnswered.length >= 2;
}
function isModuleUnlocked(moduleId, modules) {
	const mod = MODULES.find((m) => m.id === moduleId);
	if (!mod) return false;
	if (mod.prerequisites.length === 0) return true;
	return mod.prerequisites.every((pre) => {
		const p = modules[pre];
		return p?.completed || (p ? canAdvanceModule(p) : false);
	});
}
function stageProgress(stageId, modules) {
	const stage = STAGES.find((s) => s.id === stageId);
	if (!stage) return 0;
	const vals = stage.moduleIds.map((id) => moduleOverall(modules[id] ?? emptyModuleProgress()));
	return Math.round(vals.reduce((a, b) => a + b, 0) / vals.length);
}
function trailProgress(modules) {
	const vals = MODULES.map((m) => moduleOverall(modules[m.id] ?? emptyModuleProgress()));
	return Math.round(vals.reduce((a, b) => a + b, 0) / vals.length);
}
function conceptualMastery(concepts) {
	const ids = Object.keys(concepts);
	const total = ids.length;
	return {
		mastered: ids.filter((id) => concepts[id]?.state === "MASTERED").length,
		fragile: ids.filter((id) => ["RECALL_WEAK", "CONFUSED"].includes(concepts[id]?.state ?? "")).length,
		total,
		percent: total === 0 ? 0 : Math.round(ids.reduce((a, id) => a + masteryScore(concepts[id].scores), 0) / total)
	};
}
var DAY = 864e5;
var DEFAULT_INTERVALS = {
	severeErrorDays: 1,
	mildErrorDays: 2,
	hintCorrectDays: 3,
	independentCorrectDays: 5,
	consistentCorrectDays: 10,
	masteredDays: 24
};
function scheduleReview(input, now = Date.now(), config = DEFAULT_INTERVALS, previousIntervalDays = 0) {
	if (input.confused || input.selfRating === "failed") return {
		nextReviewAt: now + config.severeErrorDays * DAY,
		intervalDays: config.severeErrorDays,
		state: input.confused ? "CONFUSED" : "RECALL_WEAK",
		priority: 95
	};
	if (!input.correct || input.severeError) {
		const days = input.severeError ? config.severeErrorDays : config.mildErrorDays;
		return {
			nextReviewAt: now + days * DAY,
			intervalDays: days,
			state: "RECALL_WEAK",
			priority: input.severeError ? 90 : 75
		};
	}
	if (input.selfRating === "hard" || input.hintsUsed >= 2) return {
		nextReviewAt: now + config.hintCorrectDays * DAY,
		intervalDays: config.hintCorrectDays,
		state: "UNDERSTOOD",
		priority: 55
	};
	if (input.hintsUsed === 1 || input.selfRating === "medium") return {
		nextReviewAt: now + config.hintCorrectDays * DAY,
		intervalDays: config.hintCorrectDays,
		state: "UNDERSTOOD",
		priority: 45
	};
	if (previousIntervalDays >= config.consistentCorrectDays && input.hintsUsed === 0) return {
		nextReviewAt: now + config.masteredDays * DAY,
		intervalDays: config.masteredDays,
		state: "MASTERED",
		priority: 15
	};
	if (previousIntervalDays >= config.independentCorrectDays) return {
		nextReviewAt: now + config.consistentCorrectDays * DAY,
		intervalDays: config.consistentCorrectDays,
		state: "APPLIED",
		priority: 25
	};
	input.confidence === 3 && input.correct;
	return {
		nextReviewAt: now + config.independentCorrectDays * DAY,
		intervalDays: config.independentCorrectDays,
		state: "UNDERSTOOD",
		priority: 35
	};
}
function isOverdue(nextReviewAt, now = Date.now()) {
	return nextReviewAt <= now;
}
function getNextAction(input) {
	const now = input.now ?? Date.now();
	if (!input.onboardingComplete) return { type: "onboarding" };
	if (input.session && !input.session.completed) return {
		type: "resume_session",
		moduleId: input.session.moduleId,
		blockId: input.session.currentBlockId
	};
	const overdue = Object.entries(input.concepts).filter(([, c]) => c.nextReviewAt > 0 && isOverdue(c.nextReviewAt, now)).sort((a, b) => a[1].nextReviewAt - b[1].nextReviewAt);
	const importantOverdue = overdue.find(([, c]) => [
		"RECALL_WEAK",
		"CONFUSED",
		"EXPOSED"
	].includes(c.state));
	if (importantOverdue) return {
		type: "review",
		conceptId: importantOverdue[0],
		reason: "Revisão vencida de um conceito que ainda precisa de consolidação.",
		priority: 1
	};
	const current = currentModule(input.modules);
	if (current) {
		const fragilePre = current.concepts.find((cid) => {
			const st = input.concepts[cid]?.state;
			return st === "RECALL_WEAK" || st === "CONFUSED";
		});
		if (fragilePre && (input.modules[current.id]?.content ?? 0) < 40) return {
			type: "fragile_prereq",
			conceptId: fragilePre,
			moduleId: current.id
		};
		if (!(input.modules[current.id] ?? emptyModuleProgress()).completed) return {
			type: "continue_module",
			moduleId: current.id
		};
	}
	if (overdue[0]) return {
		type: "review",
		conceptId: overdue[0][0],
		reason: "Há uma revisão no prazo.",
		priority: 4
	};
	const next = MODULES.find((m) => isModuleUnlocked(m.id, input.modules) && !input.modules[m.id]?.completed);
	if (next) return {
		type: "start_module",
		moduleId: next.id
	};
	return { type: "explore" };
}
function currentModule(modules) {
	const inProgress = MODULES.find((m) => {
		const p = modules[m.id];
		return p && !p.completed && (p.content > 0 || p.startedAt);
	});
	if (inProgress) return inProgress;
	return MODULES.find((m) => isModuleUnlocked(m.id, modules) && !modules[m.id]?.completed) ?? null;
}
function emptyConcept(id) {
	const origin = CONCEPTS.find((c) => c.id === id)?.originModule ?? "module_01";
	return {
		state: "UNSEEN",
		scores: emptyScores(),
		nextReviewAt: 0,
		intervalDays: 0,
		originModule: origin,
		seenAt: null,
		hintsUsedTotal: 0,
		confusionWith: []
	};
}
var initialSettings = {
	focusMode: false,
	reduceMotion: false,
	defaultLayer: 1,
	intervals: { ...DEFAULT_INTERVALS }
};
var useAppStore = create()(persist((set, get) => ({
	_hasHydrated: true,
	onboardingComplete: false,
	diagnosticDone: false,
	diagnosticAnswers: {},
	session: null,
	modules: {},
	concepts: {},
	answers: [],
	notes: [],
	bookmarks: [],
	doubts: [],
	settings: initialSettings,
	searchQuery: "",
	glossaryTerm: null,
	finalProject: null,
	lastActiveAt: 0,
	setHydrated: () => set({ _hasHydrated: true }),
	touch: () => set({ lastActiveAt: Date.now() }),
	completeOnboarding: () => set({
		onboardingComplete: true,
		lastActiveAt: Date.now()
	}),
	saveDiagnostic: (answers) => set({
		diagnosticDone: true,
		diagnosticAnswers: answers
	}),
	startModule: (moduleId) => {
		const modules = { ...get().modules };
		const mod = MODULE_BY_ID[moduleId];
		if (!mod) return { warning: "Módulo inexistente." };
		const unlocked = isModuleUnlocked(moduleId, modules);
		let warning;
		if (!unlocked) warning = "Este conteúdo utiliza conceitos que você ainda não consolidou.";
		const prev = modules[moduleId] ?? emptyModuleProgress();
		modules[moduleId] = {
			...prev,
			startedAt: prev.startedAt ?? Date.now()
		};
		const concepts = { ...get().concepts };
		for (const cid of mod.concepts) {
			concepts[cid] = concepts[cid] ?? emptyConcept(cid);
			if (concepts[cid].state === "UNSEEN") concepts[cid] = {
				...concepts[cid],
				state: "SEEN",
				seenAt: Date.now()
			};
		}
		const existing = get().session;
		const same = existing?.moduleId === moduleId;
		const phase = same ? existing.phase : prev.completed ? "done" : prev.content >= 100 ? "verify" : prev.content > 0 ? "content" : "intro";
		set({
			modules,
			concepts,
			lastActiveAt: Date.now(),
			session: {
				moduleId,
				currentBlockId: prev.lastBlockId ?? mod.blocks[0]?.id ?? null,
				startedAt: same ? existing.startedAt : Date.now(),
				lastInteraction: Date.now(),
				completed: Boolean(prev.completed),
				phase,
				questionIndex: same ? existing.questionIndex : 0
			}
		});
		return { warning };
	},
	seeBlock: (moduleId, blockId, conceptIds) => {
		const modules = { ...get().modules };
		const mod = MODULE_BY_ID[moduleId];
		const prev = modules[moduleId] ?? emptyModuleProgress();
		const blocksSeen = prev.blocksSeen.includes(blockId) ? prev.blocksSeen : [...prev.blocksSeen, blockId];
		const total = mod?.blocks.length ?? 1;
		const content = Math.round(blocksSeen.length / total * 100);
		modules[moduleId] = {
			...prev,
			blocksSeen,
			content,
			lastBlockId: blockId,
			startedAt: prev.startedAt ?? Date.now()
		};
		const concepts = { ...get().concepts };
		for (const cid of conceptIds ?? []) {
			const c = concepts[cid] ?? emptyConcept(cid);
			concepts[cid] = {
				...c,
				state: c.state === "UNSEEN" ? "EXPOSED" : c.state,
				seenAt: c.seenAt ?? Date.now()
			};
		}
		const session = get().session;
		set({
			modules,
			concepts,
			lastActiveAt: Date.now(),
			session: session ? {
				...session,
				currentBlockId: blockId,
				lastInteraction: Date.now()
			} : session
		});
	},
	setSessionPhase: (phase, questionIndex) => {
		const session = get().session;
		if (!session) return;
		set({
			lastActiveAt: Date.now(),
			session: {
				...session,
				phase,
				questionIndex: questionIndex ?? session.questionIndex,
				lastInteraction: Date.now()
			}
		});
	},
	pauseSession: () => {
		const session = get().session;
		if (!session) return;
		set({ session: {
			...session,
			completed: false,
			lastInteraction: Date.now()
		} });
	},
	completeModule: (moduleId) => {
		const modules = { ...get().modules };
		const prev = modules[moduleId] ?? emptyModuleProgress();
		modules[moduleId] = {
			...prev,
			completed: true,
			content: Math.max(prev.content, 100),
			completedAt: Date.now()
		};
		const session = get().session;
		set({
			modules,
			lastActiveAt: Date.now(),
			session: session ? {
				...session,
				completed: true,
				phase: "done"
			} : session
		});
	},
	recordAnswer: (record) => {
		const at = Date.now();
		const full = {
			...record,
			at
		};
		const answers = [...get().answers, full];
		const modules = { ...get().modules };
		const prevM = modules[record.moduleId] ?? emptyModuleProgress();
		const questionsAnswered = prevM.questionsAnswered.includes(record.questionId) ? prevM.questionsAnswered : [...prevM.questionsAnswered, record.questionId];
		const dim = record.type === "recall" ? "recall" : record.type === "misconception" || record.type === "limit" || record.type === "counterfactual" ? "contrast" : record.type === "application" || record.type === "integration" ? "application" : "comprehension";
		const delta = record.correct ? record.hintsUsed === 0 ? 20 : 10 : -8;
		const nextVal = Math.max(0, Math.min(100, (prevM[dim] ?? 0) + delta));
		modules[record.moduleId] = {
			...prevM,
			questionsAnswered,
			[dim]: nextVal
		};
		const concepts = { ...get().concepts };
		const scheduleInput = {
			correct: record.correct,
			hintsUsed: record.hintsUsed,
			confidence: record.confidence,
			confused: Boolean(record.confused) || record.type === "misconception" && !record.correct,
			severeError: !record.correct && record.hintsUsed === 0 && record.confidence === 3,
			selfRating: record.selfRating
		};
		for (const cid of record.conceptIds) {
			const c = concepts[cid] ?? emptyConcept(cid);
			const scores = applyAnswerToScores(c.scores, {
				correct: record.correct,
				type: record.type,
				hintsUsed: record.hintsUsed,
				confidence: record.confidence
			});
			const sched = scheduleReview(scheduleInput, at, get().settings.intervals, c.intervalDays);
			let state = deriveState(c.state, scores, {
				correct: record.correct,
				type: record.type,
				hintsUsed: record.hintsUsed,
				confidence: record.confidence
			});
			if (meetsMastery(scores) && record.correct && record.hintsUsed === 0) state = "MASTERED";
			concepts[cid] = {
				...c,
				scores,
				state,
				nextReviewAt: sched.nextReviewAt,
				intervalDays: sched.intervalDays,
				hintsUsedTotal: c.hintsUsedTotal + record.hintsUsed
			};
		}
		set({
			answers,
			modules,
			concepts,
			lastActiveAt: at
		});
	},
	addNote: (note) => {
		set({
			notes: [{
				id: `n_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
				at: Date.now(),
				...note
			}, ...get().notes],
			lastActiveAt: Date.now()
		});
	},
	toggleBookmark: (moduleId, blockId) => {
		const existing = get().bookmarks.find((b) => b.moduleId === moduleId && b.blockId === blockId);
		if (existing) set({ bookmarks: get().bookmarks.filter((b) => b.id !== existing.id) });
		else set({ bookmarks: [{
			id: `b_${Date.now()}`,
			moduleId,
			blockId,
			at: Date.now()
		}, ...get().bookmarks] });
	},
	toggleDoubt: (conceptId) => {
		const doubts = get().doubts.includes(conceptId) ? get().doubts.filter((d) => d !== conceptId) : [...get().doubts, conceptId];
		const concepts = { ...get().concepts };
		const c = concepts[conceptId] ?? emptyConcept(conceptId);
		if (!get().doubts.includes(conceptId)) concepts[conceptId] = {
			...c,
			nextReviewAt: Date.now(),
			state: c.state === "UNSEEN" ? "EXPOSED" : c.state
		};
		set({
			doubts,
			concepts
		});
	},
	updateSettings: (partial) => set({ settings: {
		...get().settings,
		...partial
	} }),
	saveFinalProject: (state) => set({ finalProject: state }),
	resetProgress: () => set({
		onboardingComplete: false,
		diagnosticDone: false,
		diagnosticAnswers: {},
		session: null,
		modules: {},
		concepts: {},
		answers: [],
		notes: [],
		bookmarks: [],
		doubts: [],
		finalProject: null,
		lastActiveAt: 0
	}),
	nextAction: () => {
		const s = get();
		return getNextAction({
			onboardingComplete: s.onboardingComplete,
			session: s.session,
			modules: s.modules,
			concepts: s.concepts
		});
	}
}), {
	name: "nexum-progress-v1",
	version: 2,
	storage: createJSONStorage(() => localStorage),
	partialize: (s) => ({
		onboardingComplete: s.onboardingComplete,
		diagnosticDone: s.diagnosticDone,
		diagnosticAnswers: s.diagnosticAnswers,
		session: s.session,
		modules: s.modules,
		concepts: s.concepts,
		answers: s.answers,
		notes: s.notes,
		bookmarks: s.bookmarks,
		doubts: s.doubts,
		settings: s.settings,
		finalProject: s.finalProject,
		lastActiveAt: s.lastActiveAt
	}),
	onRehydrateStorage: () => () => {
		useAppStore.setState({ _hasHydrated: true });
	}
}));
function fragileConceptIds(state) {
	const s = state ?? useAppStore.getState();
	const fromState = Object.entries(s.concepts).filter(([, c]) => ["RECALL_WEAK", "CONFUSED"].includes(c.state)).map(([id]) => id);
	return Array.from(/* @__PURE__ */ new Set([...fromState, ...s.doubts]));
}
var NAV = [
	{
		to: "/",
		label: "Início",
		icon: House
	},
	{
		to: "/trilha",
		label: "Trilha",
		icon: GitBranch
	},
	{
		to: "/revisoes",
		label: "Revisar",
		icon: RotateCcw
	},
	{
		to: "/conceitos",
		label: "Conceitos",
		icon: Library
	},
	{
		to: "/mais",
		label: "Mais",
		icon: Ellipsis
	}
];
function AppShell({ children }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const focus = useAppStore((s) => s.settings.focusMode);
	const onboarding = useAppStore((s) => s.onboardingComplete);
	const hideNav = focus || pathname.startsWith("/modulo/") || !onboarding;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "paper-grain min-h-dvh bg-bg text-fg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex min-h-dvh w-full max-w-lg flex-col md:max-w-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "flex items-center justify-between px-5 pb-2 pt-[max(1rem,env(safe-area-inset-top))]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex items-center gap-2.5",
						"aria-label": "Nexum, início",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NexumMark, { className: "size-7" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-baseline gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-xl tracking-tight",
								children: "Nexum"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-fg-subtle",
								children: "neurociência"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/busca",
						className: "text-sm text-fg-muted underline-offset-4 hover:text-fg hover:underline",
						children: "Buscar"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: cn("flex-1 px-5 pb-32", hideNav && "pb-8"),
					children
				}),
				!hideNav && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "fixed bottom-0 left-0 right-0 z-30 border-t border-border-strong bg-bg-elevated shadow-[0_-8px_24px_-16px_color-mix(in_oklab,var(--color-fg)_28%,transparent)]",
					"aria-label": "Principal",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto grid max-w-lg grid-cols-5 px-2 pb-[max(0.35rem,env(safe-area-inset-bottom))] pt-1 md:max-w-2xl",
						children: NAV.map((item) => {
							const active = item.to === "/" ? pathname === "/" : pathname === item.to || pathname.startsWith(`${item.to}/`);
							const Icon = item.icon;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: item.to,
								className: cn("flex min-h-14 flex-col items-center justify-center gap-0.5 text-[11px] font-medium", active ? "text-accent" : "text-fg-subtle"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "size-5",
									strokeWidth: active ? 2.2 : 1.7
								}), item.label]
							}, item.to);
						})
					})
				})
			]
		})
	});
}
var styles_default = "/assets/styles-CLS6elC5.css";
var APP_NAME = "Nexum";
var Route$14 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1, viewport-fit=cover"
			},
			{ title: APP_NAME },
			{
				name: "theme-color",
				content: "#245A4A"
			},
			{
				name: "description",
				content: "Trilha progressiva de neurociência: do neurônio à compreensão do comportamento."
			},
			{
				name: "apple-mobile-web-app-title",
				content: APP_NAME
			},
			{
				name: "apple-mobile-web-app-status-bar-style",
				content: "default"
			},
			{
				name: "application-name",
				content: APP_NAME
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "192x192",
				href: "/icon-192.png"
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "512x512",
				href: "/icon-512.png"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "apple-touch-icon",
				href: "/icon-180.png",
				sizes: "180x180"
			},
			{
				rel: "manifest",
				href: "/manifest.json",
				type: "application/manifest+json"
			},
			{
				rel: "manifest",
				href: "/manifest.webmanifest",
				type: "application/manifest+json"
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600&family=Source+Sans+3:ital,wght@0,400;0,500;0,600;1,400&display=swap"
			}
		]
	}),
	component: Root
});
function Root() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "pt-BR",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PersistBoot, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	});
}
function PersistBoot({ children }) {
	const reduce = useAppStore((s) => s.settings.reduceMotion);
	(0, import_react.useEffect)(() => {
		document.documentElement.classList.toggle("reduce-motion", reduce);
	}, [reduce]);
	(0, import_react.useEffect)(() => {
		const sync = () => {
			const standalone = window.matchMedia("(display-mode: standalone)").matches || window.matchMedia("(display-mode: fullscreen)").matches || "standalone" in navigator && Boolean(navigator.standalone);
			document.documentElement.classList.toggle("standalone", standalone);
		};
		sync();
		const mq = window.matchMedia("(display-mode: standalone)");
		mq.addEventListener("change", sync);
		return () => mq.removeEventListener("change", sync);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var $$splitComponentImporter$13 = () => import("./routes-jvuo9Sc0.mjs");
var Route$13 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$13, "component") });
var $$splitComponentImporter$12 = () => import("./busca-DF4mvXRF.mjs");
var Route$12 = createFileRoute("/busca")({ component: lazyRouteComponent($$splitComponentImporter$12, "component") });
var $$splitComponentImporter$11 = () => import("./conceitos-pBwKSlm7.mjs");
var Route$11 = createFileRoute("/conceitos")({ component: lazyRouteComponent($$splitComponentImporter$11, "component") });
var $$splitComponentImporter$10 = () => import("./configuracoes-DHnwsHBO.mjs");
var Route$10 = createFileRoute("/configuracoes")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
var $$splitComponentImporter$9 = () => import("./desafios-BdRYwUcR.mjs");
var Route$9 = createFileRoute("/desafios")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./favoritos-B5bAdz-J.mjs");
var Route$8 = createFileRoute("/favoritos")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./glossario-Bq2lF1w8.mjs");
var Route$7 = createFileRoute("/glossario")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./mais-BPYVyk-s.mjs");
var Route$6 = createFileRoute("/mais")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./mitos-LJpPOihQ.mjs");
var Route$5 = createFileRoute("/mitos")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./progresso-C8X1QwTJ.mjs");
var Route$4 = createFileRoute("/progresso")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./revisoes-1iB9GeVz.mjs");
var Route$3 = createFileRoute("/revisoes")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./trilha-qH0BMImi.mjs");
var Route$2 = createFileRoute("/trilha")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./conceito._conceptId-DnT8eO-y.mjs");
var Route$1 = createFileRoute("/conceito/$conceptId")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./modulo._moduleId-CNt_Zils.mjs");
var Route = createFileRoute("/modulo/$moduleId")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var rootRouteChildren = {
	IndexRoute: Route$13.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$14
	}),
	BuscaRoute: Route$12.update({
		id: "/busca",
		path: "/busca",
		getParentRoute: () => Route$14
	}),
	ConceitosRoute: Route$11.update({
		id: "/conceitos",
		path: "/conceitos",
		getParentRoute: () => Route$14
	}),
	ConfiguracoesRoute: Route$10.update({
		id: "/configuracoes",
		path: "/configuracoes",
		getParentRoute: () => Route$14
	}),
	DesafiosRoute: Route$9.update({
		id: "/desafios",
		path: "/desafios",
		getParentRoute: () => Route$14
	}),
	FavoritosRoute: Route$8.update({
		id: "/favoritos",
		path: "/favoritos",
		getParentRoute: () => Route$14
	}),
	GlossarioRoute: Route$7.update({
		id: "/glossario",
		path: "/glossario",
		getParentRoute: () => Route$14
	}),
	MaisRoute: Route$6.update({
		id: "/mais",
		path: "/mais",
		getParentRoute: () => Route$14
	}),
	MitosRoute: Route$5.update({
		id: "/mitos",
		path: "/mitos",
		getParentRoute: () => Route$14
	}),
	ProgressoRoute: Route$4.update({
		id: "/progresso",
		path: "/progresso",
		getParentRoute: () => Route$14
	}),
	RevisoesRoute: Route$3.update({
		id: "/revisoes",
		path: "/revisoes",
		getParentRoute: () => Route$14
	}),
	TrilhaRoute: Route$2.update({
		id: "/trilha",
		path: "/trilha",
		getParentRoute: () => Route$14
	}),
	ConceitoConceptIdRoute: Route$1.update({
		id: "/conceito/$conceptId",
		path: "/conceito/$conceptId",
		getParentRoute: () => Route$14
	}),
	ModuloModuleIdRoute: Route.update({
		id: "/modulo/$moduleId",
		path: "/modulo/$moduleId",
		getParentRoute: () => Route$14
	})
};
var routeTree = Route$14._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { masteryScore as _, useAppStore as a, conceptualMastery as c, moduleOverall as d, stageProgress as f, emptyScores as g, STAGES as h, fragileConceptIds as i, emptyModuleProgress as l, APP_PRINCIPLE as m, Route as n, isOverdue as o, trailProgress as p, Route$1 as r, EMPTY_MODULE_PROGRESS as s, router_exports as t, isModuleUnlocked as u, NexumMark as v, cn as y };
