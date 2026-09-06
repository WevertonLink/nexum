import { i as __toESM } from "../_runtime.mjs";
import { n as CONCEPT_BY_ID } from "./concepts-DTksM_A0.mjs";
import { n as MODULE_BY_ID, t as MODULES } from "./modules-Cak8tUlb.mjs";
import { b as require_jsx_runtime, v as Link, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as ArrowRight } from "../_libs/lucide-react.mjs";
import { a as useAppStore, c as conceptualMastery, f as stageProgress, h as STAGES, i as fragileConceptIds, m as APP_PRINCIPLE, p as trailProgress, y as cn } from "./router-BqUbigV-.mjs";
import { t as Button } from "./button-CRWNAEw-.mjs";
import { t as InstallAppCard } from "./install-app-DUye4l2S.mjs";
import { n as DIAGNOSTIC } from "./diagnostic-CUORKcUg.mjs";
import { t as ProgressMeter } from "./progress-meter-C7fdWJG9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-jvuo9Sc0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	if (!useAppStore((s) => s.onboardingComplete)) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Onboarding, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dashboard, {});
}
function Onboarding() {
	const complete = useAppStore((s) => s.completeOnboarding);
	const diagnosticDone = useAppStore((s) => s.diagnosticDone);
	const saveDiagnostic = useAppStore((s) => s.saveDiagnostic);
	const [step, setStep] = (0, import_react.useState)(0);
	const [answers, setAnswers] = (0, import_react.useState)({});
	const [q, setQ] = (0, import_react.useState)(0);
	if (step === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "flex min-h-[62dvh] flex-col justify-end gap-6 pb-8 pt-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium uppercase tracking-widest text-accent",
				children: "Trilha progressiva"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl leading-tight",
				children: "Do neurônio à compreensão do comportamento"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-base leading-relaxed text-fg-muted",
				children: APP_PRINCIPLE
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "lg",
				className: "w-full",
				onClick: () => setStep(1),
				children: "Começar"
			})
		]
	});
	if (step === 1) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "space-y-5 pt-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl leading-tight",
				children: "Cinco coisas que não são a mesma"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-3",
				children: [
					"Exposição",
					"Compreensão",
					"Recuperação",
					"Domínio",
					"Aplicação"
				].map((x, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-lg border border-border bg-bg-elevated px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-xs text-fg-subtle",
						children: i + 1
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xl",
						children: x
					})]
				}, x))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-relaxed text-fg-muted",
				children: "Ler um módulo não o conclui. Você vai reconstruir, contrastar e aplicar. Erros alimentam a revisão — nunca uma punição."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "w-full",
				onClick: () => setStep(2),
				children: "Entendi"
			})
		]
	});
	if (step === 2 && !diagnosticDone) {
		const item = DIAGNOSTIC[q];
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "space-y-5 pt-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs uppercase tracking-wide text-fg-subtle",
					children: [
						"Diagnóstico opcional · ",
						q + 1,
						"/",
						DIAGNOSTIC.length
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-2xl leading-snug",
					children: item.prompt
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-2",
					children: item.options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							const next = {
								...answers,
								[item.id]: o.id
							};
							setAnswers(next);
							if (q < DIAGNOSTIC.length - 1) setQ(q + 1);
							else {
								saveDiagnostic(next);
								setStep(3);
							}
						},
						className: "min-h-11 w-full rounded-lg border border-border bg-bg-elevated px-4 py-3 text-left text-sm leading-snug hover:border-border-strong",
						children: o.text
					}) }, o.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					className: "w-full",
					onClick: () => {
						complete();
					},
					children: "Pular diagnóstico e começar pelo módulo 1"
				})
			]
		});
	}
	const correct = DIAGNOSTIC.filter((d) => answers[d.id] === d.correctAnswer).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "space-y-5 pt-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl",
				children: "Olá. Vamos continuar?"
			}),
			diagnosticDone && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-fg-muted",
				children: [
					"Você acertou ",
					correct,
					" de ",
					DIAGNOSTIC.length,
					" no diagnóstico. Não é uma reprovação — é um retrato inicial. Recomendamos começar pelos fundamentos (módulos 1–4), mesmo que algumas respostas já estejam sólidas."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "lg",
				className: "w-full",
				onClick: () => complete(),
				children: "Entrar na trilha"
			})
		]
	});
}
function Dashboard() {
	const session = useAppStore((s) => s.session);
	const modules = useAppStore((s) => s.modules);
	const concepts = useAppStore((s) => s.concepts);
	const lastActiveAt = useAppStore((s) => s.lastActiveAt);
	const action = useAppStore((s) => s.nextAction)();
	const trail = trailProgress(modules);
	const mastery = conceptualMastery(concepts);
	const fragile = fragileConceptIds({
		concepts,
		doubts: useAppStore.getState().doubts
	});
	const longAbsence = lastActiveAt > 0 && Date.now() - lastActiveAt > 12096e5;
	const continueTarget = (0, import_react.useMemo)(() => {
		if (action.type === "resume_session" || action.type === "continue_module" || action.type === "start_module") return MODULE_BY_ID[action.moduleId];
		if (action.type === "fragile_prereq") return MODULE_BY_ID[action.moduleId];
		if (session?.moduleId) return MODULE_BY_ID[session.moduleId];
		return MODULES.find((m) => !modules[m.id]?.completed) ?? MODULES[0];
	}, [
		action,
		session,
		modules
	]);
	const dueReviews = Object.entries(concepts).filter(([, c]) => c.nextReviewAt && c.nextReviewAt <= Date.now()).length;
	const prev = continueTarget ? MODULES.find((m) => m.number === continueTarget.number - 1) : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 pt-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-fg-muted",
				children: "Olá. Vamos continuar?"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl leading-tight tracking-tight",
				children: "Próxima atividade"
			})] }),
			longAbsence && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl border border-warn/30 bg-warn-soft px-4 py-4 text-sm text-warn",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium",
						children: "Alguns fundamentos podem ter enfraquecido."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1",
						children: "Não reiniciamos tudo. Uma revisão curta reconstrói o que ainda está acessível."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/revisoes",
						className: "mt-3 block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "secondary",
							className: "w-full",
							children: "Avaliação de retomada"
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl border border-border bg-bg-elevated p-5 shadow-soft",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-wide text-accent",
					children: "Continuar"
				}), action.type === "review" && CONCEPT_BY_ID[action.conceptId] ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-2 font-display text-2xl leading-tight",
						children: ["Revisar: ", CONCEPT_BY_ID[action.conceptId].name]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-fg-muted",
						children: action.reason
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/revisoes",
						className: "mt-4 block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							className: "w-full",
							children: ["Abrir revisão ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})
					})
				] }) : action.type === "fragile_prereq" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-2xl leading-tight",
						children: "Um pré-requisito ainda está frágil"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-fg-muted",
						children: [
							CONCEPT_BY_ID[action.conceptId]?.name ?? "Este conceito",
							" ainda precisa de consolidação antes de aprofundar",
							" ",
							MODULE_BY_ID[action.moduleId]?.shortTitle,
							". Você pode avançar — o aviso permanece."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/conceito/$conceptId",
						params: { conceptId: action.conceptId },
						className: "mt-4 block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "w-full",
							children: "Revisar a diferença"
						})
					})
				] }) : continueTarget ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-2xl leading-tight",
						children: continueTarget.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-fg-muted",
						children: [
							"Módulo ",
							continueTarget.number,
							" · ",
							STAGES[continueTarget.stage - 1]?.name,
							". Você concluiu",
							" ",
							modules[continueTarget.id]?.content ?? 0,
							"% da exposição."
						]
					}),
					prev && (modules[prev.id]?.completed || (modules[prev.id]?.content ?? 0) > 50) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed",
						children: prev.integration
					}),
					action.type === "resume_session" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-accent",
						children: [
							"Você estava estudando o módulo ",
							continueTarget.number,
							". Deseja continuar?"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/modulo/$moduleId",
						params: { moduleId: continueTarget.id },
						className: "mt-4 block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							className: "w-full",
							children: ["Continuar ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})
					})
				] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-fg-muted",
					children: "A trilha está aberta à exploração."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl border border-border bg-bg-elevated p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-wide text-fg-subtle",
					children: "Revisar"
				}), dueReviews > 0 || fragile.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm",
						children: dueReviews > 0 ? `Você possui ${dueReviews} conceito${dueReviews === 1 ? "" : "s"} para revisar hoje.` : "Há conceitos que pedem atenção."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-1",
						children: fragile.slice(0, 4).map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/conceito/$conceptId",
							params: { conceptId: id },
							className: "text-sm text-fg-muted underline-offset-4 hover:underline",
							children: CONCEPT_BY_ID[id]?.name ?? id
						}) }, id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/revisoes",
						className: "mt-4 block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "secondary",
							className: "w-full",
							children: "Abrir revisões"
						})
					})
				] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-fg-muted",
					children: "Nenhuma revisão vencida. Quando um conceito enfraquecer, ele volta para cá."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl border border-border bg-bg-elevated p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-wide text-fg-subtle",
						children: "Progresso"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressMeter, {
							value: trail,
							label: "Trilha"
						}), STAGES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressMeter, {
							value: stageProgress(s.id, modules),
							label: `Etapa ${s.id} · ${s.name}`
						}, s.id))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm text-fg-muted",
						children: [
							"Domínio conceitual: ",
							mastery.mastered,
							" consolidados, ",
							mastery.fragile,
							" frágeis. O indicador principal não é o tempo estudado — é o que você reconstrói e aplica."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/progresso",
						className: "mt-3 inline-block text-sm text-accent underline-offset-4 hover:underline",
						children: "Ver detalhes"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl border border-border bg-bg-elevated p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-wide text-fg-subtle",
						children: "Explorar"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-fg-muted",
						children: "A trilha é sequencial. A biblioteca é livre — visualizar um conceito não conclui o módulo."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 grid grid-cols-2 gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								className: cn("rounded-lg bg-surface px-3 py-3 text-sm"),
								to: "/trilha",
								children: "Mapa da trilha"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								className: "rounded-lg bg-surface px-3 py-3 text-sm",
								to: "/conceitos",
								children: "Conceitos"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								className: "rounded-lg bg-surface px-3 py-3 text-sm",
								to: "/mitos",
								children: "Mitos"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								className: "rounded-lg bg-surface px-3 py-3 text-sm",
								to: "/desafios",
								children: "Desafios"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InstallAppCard, {})
		]
	});
}
//#endregion
export { Home as component };
