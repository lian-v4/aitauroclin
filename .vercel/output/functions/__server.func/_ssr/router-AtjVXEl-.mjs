import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { M as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { c as Menu, t as X } from "../_libs/lucide-react.mjs";
import { t as hero_3_default } from "./hero-3-BUKCMg6i.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-AtjVXEl-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-CWl1SdA8.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Página não encontrada"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "A página que você está procurando não existe ou foi movida."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Voltar para o início"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "Ocorreu um erro ao carregar a página"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Algo deu errado do nosso lado. Você pode tentar recarregar ou voltar ao início."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Tentar novamente"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Ir para o início"
					})]
				})
			]
		})
	});
}
var Route$6 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Dr. Giuliano Aita — Urologia & Saúde do Homem" },
			{
				name: "description",
				content: "Centro de excelência em urologia, andrologia e saúde sexual masculina. Atendimento de alta precisão pelo Dr. Giuliano Aita."
			},
			{
				name: "author",
				content: "Dr. Giuliano Aita"
			},
			{
				property: "og:title",
				content: "Dr. Giuliano Aita — Urologia & Saúde do Homem"
			},
			{
				property: "og:description",
				content: "Centro de excelência em urologia, andrologia e saúde sexual masculina. Atendimento de alta precisão pelo Dr. Giuliano Aita."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary"
			},
			{
				name: "twitter:site",
				content: "@drgiulianoaita"
			}
		],
		links: [
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
				href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=Hanken+Grotesk:wght@300;400;500;600&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "pt-BR",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$6.useRouteContext();
	const [mobileMenuOpen, setMobileMenuOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-background text-foreground font-sans antialiased selection:bg-brass/25 selection:text-ink min-h-screen flex flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-screen-xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/",
								className: "font-serif text-xl tracking-tight font-medium text-ink leading-none",
								children: [
									"Giuliano ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "italic text-brass",
										children: "Aita"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-[9px] font-sans uppercase tracking-[0.28em] text-muted-foreground mt-1",
										children: "Urologia · Saúde Masculina"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
								className: "hidden md:flex gap-9 items-center text-[11px] tracking-[0.18em] uppercase font-medium text-ink/80",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/tratamentos",
										className: "hover:text-brass transition-colors",
										activeProps: { className: "text-brass font-semibold" },
										children: "Tratamentos"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/sobre",
										className: "hover:text-brass transition-colors",
										activeProps: { className: "text-brass font-semibold" },
										children: "Conheça o Dr."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/clinica",
										className: "hover:text-brass transition-colors",
										activeProps: { className: "text-brass font-semibold" },
										children: "A Clínica"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/publicacoes",
										className: "hover:text-brass transition-colors",
										activeProps: { className: "text-brass font-semibold" },
										children: "Publicações"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/contato",
										className: "px-5 py-2.5 ring-1 ring-ink/15 hover:ring-brass/60 hover:text-brass transition-colors",
										activeProps: { className: "ring-brass/60 text-brass font-semibold" },
										children: "Agendar Consulta"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setMobileMenuOpen(!mobileMenuOpen),
								className: "md:hidden p-2 text-ink hover:text-brass transition-colors",
								"aria-label": "Toggle menu",
								children: mobileMenuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-6" })
							})
						]
					}), mobileMenuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "md:hidden border-t border-border bg-background py-6 px-6 flex flex-col gap-5 text-[11px] tracking-[0.18em] uppercase font-medium text-ink/80 animate-in fade-in slide-in-from-top-5 duration-200",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/tratamentos",
								onClick: () => setMobileMenuOpen(false),
								className: "hover:text-brass transition-colors py-2 border-b border-border/50",
								activeProps: { className: "text-brass font-semibold" },
								children: "Tratamentos"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/sobre",
								onClick: () => setMobileMenuOpen(false),
								className: "hover:text-brass transition-colors py-2 border-b border-border/50",
								activeProps: { className: "text-brass font-semibold" },
								children: "Conheça o Dr."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/clinica",
								onClick: () => setMobileMenuOpen(false),
								className: "hover:text-brass transition-colors py-2 border-b border-border/50",
								activeProps: { className: "text-brass font-semibold" },
								children: "A Clínica"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/publicacoes",
								onClick: () => setMobileMenuOpen(false),
								className: "hover:text-brass transition-colors py-2 border-b border-border/50",
								activeProps: { className: "text-brass font-semibold" },
								children: "Publicações"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contato",
								onClick: () => setMobileMenuOpen(false),
								className: "px-5 py-3 text-center ring-1 ring-ink/15 hover:ring-brass/60 hover:text-brass transition-colors mt-2",
								activeProps: { className: "ring-brass/60 text-brass font-semibold" },
								children: "Agendar Consulta"
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-grow",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
					className: "bg-ink text-bone py-16 border-t border-bone/5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-screen-xl mx-auto px-6 lg:px-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col md:flex-row md:items-end justify-between gap-10 mb-14",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "font-serif text-3xl md:text-4xl leading-none tracking-tight",
								children: ["Giuliano ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic text-brass-soft",
									children: "Aita"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] uppercase tracking-[0.28em] text-bone/45 mt-3",
								children: "Urologia · Andrologia · Saúde Sexual Masculina"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
								className: "flex flex-wrap gap-x-8 gap-y-3 text-[11px] uppercase tracking-[0.22em] text-bone/60",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/tratamentos",
										className: "hover:text-brass-soft transition-colors",
										children: "Tratamentos"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/sobre",
										className: "hover:text-brass-soft transition-colors",
										children: "Sobre"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/clinica",
										className: "hover:text-brass-soft transition-colors",
										children: "Clínica"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/publicacoes",
										className: "hover:text-brass-soft transition-colors",
										children: "Publicações"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/contato",
										className: "hover:text-brass-soft transition-colors",
										children: "Contato"
									})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pt-8 border-t border-bone/10 flex flex-col md:flex-row justify-between gap-6 text-[10px] uppercase tracking-[0.22em] text-bone/35",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"© ",
								(/* @__PURE__ */ new Date()).getFullYear(),
								" Dr. Giuliano Aita · CRM-SP — Todos os direitos reservados"
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#",
										className: "hover:text-brass-soft",
										children: "Privacidade"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#",
										className: "hover:text-brass-soft",
										children: "Termos"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#",
										className: "hover:text-brass-soft",
										children: "Responsabilidade Clínica"
									})
								]
							})]
						})]
					})
				})
			]
		})
	});
}
var $$splitComponentImporter$5 = () => import("./tratamentos-BzItCr5M.mjs");
var Route$5 = createFileRoute("/tratamentos")({
	head: () => ({ meta: [{ title: "Tratamentos & Especialidades — Dr. Giuliano Aita" }, {
		name: "description",
		content: "Conheça os procedimentos avançados do Dr. Giuliano Aita: UroFill®, Rezum, Ondas de Choque, implantes penianos e reposição hormonal masculina."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./sobre-BAqGUj14.mjs");
var Route$4 = createFileRoute("/sobre")({
	head: () => ({ meta: [{ title: "Sobre o Dr. Giuliano Aita — Urologista & Andrologista" }, {
		name: "description",
		content: "Conheça a trajetória do Dr. Giuliano Aita, doutor em ciências pelo AC Camargo Cancer Center, especialista em saúde do homem e medicina sexual."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./publicacoes-DYOduRm5.mjs");
var Route$3 = createFileRoute("/publicacoes")({
	head: () => ({ meta: [{ title: "Publicações & Canal de Informação — Dr. Giuliano Aita" }, {
		name: "description",
		content: "Artigos científicos e informativos sobre saúde sexual masculina, urologia de vanguarda, andropausa e inovações tecnológicas urológicas."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./contato-DGG5xySq.mjs");
var Route$2 = createFileRoute("/contato")({
	head: () => ({ meta: [{ title: "Agendamento & Pré-Qualificação — Dr. Giuliano Aita" }, {
		name: "description",
		content: "Agende sua consulta ou procedimento com o Dr. Giuliano Aita. Preencha os campos de pré-qualificação para direcionamento ao WhatsApp."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./clinica-tkbEjGH3.mjs");
var Route$1 = createFileRoute("/clinica")({
	head: () => ({ meta: [{ title: "A Clínica & Multilocalidade — Dr. Giuliano Aita" }, {
		name: "description",
		content: "Conheça as sedes de atendimento do Dr. Giuliano Aita: Euroclin (Teresina) e Consultório de São Paulo (Vila Olímpia). Espaços planejados para o seu bem-estar."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-5wUL-Ry_.mjs");
var Route = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Dr. Giuliano Aita — Urologia de Alta Precisão & Saúde Sexual" },
		{
			name: "description",
			content: "Clínica de urologia, andrologia e saúde sexual do homem. Tratamentos avançados UroFill®, Rezum e Ondas de Choque com discrição absoluta."
		},
		{
			property: "og:title",
			content: "Dr. Giuliano Aita — Urologia de Alta Precisão & Saúde Sexual"
		},
		{
			property: "og:description",
			content: "Clínica de urologia, andrologia e saúde sexual do homem. Tratamentos avançados UroFill®, Rezum e Ondas de Choque."
		},
		{
			property: "og:image",
			content: hero_3_default
		},
		{
			name: "twitter:image",
			content: hero_3_default
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var TratamentosRoute = Route$5.update({
	id: "/tratamentos",
	path: "/tratamentos",
	getParentRoute: () => Route$6
});
var SobreRoute = Route$4.update({
	id: "/sobre",
	path: "/sobre",
	getParentRoute: () => Route$6
});
var PublicacoesRoute = Route$3.update({
	id: "/publicacoes",
	path: "/publicacoes",
	getParentRoute: () => Route$6
});
var ContatoRoute = Route$2.update({
	id: "/contato",
	path: "/contato",
	getParentRoute: () => Route$6
});
var ClinicaRoute = Route$1.update({
	id: "/clinica",
	path: "/clinica",
	getParentRoute: () => Route$6
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$6
	}),
	ClinicaRoute,
	ContatoRoute,
	PublicacoesRoute,
	SobreRoute,
	TratamentosRoute
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
