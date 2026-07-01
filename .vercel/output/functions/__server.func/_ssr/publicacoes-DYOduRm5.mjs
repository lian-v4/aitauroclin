import { r as __toESM } from "../_runtime.mjs";
import { n as clinic_4_default, t as clinic_3_default } from "./clinic-4-k0CSgxjd.mjs";
import { n as clinic_6_default, t as clinic_5_default } from "./clinic-6-DIh9FlNt.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { b as ArrowUpRight, g as Calendar, h as Clock, n as User, o as Search, v as BookOpen } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/publicacoes-DYOduRm5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var articlesData = [
	{
		slug: "urofill-revolucao-estetica-intima",
		title: "A Revolução do UroFill® na Estética Íntima Masculina Moderna",
		excerpt: "Única técnica patenteada internacionalmente para engrossamento peniano estético e funcional com ácido hialurônico e anestesia local.",
		category: "Estética Íntima",
		date: "15 Jun 2026",
		readTime: "6 min de leitura",
		image: clinic_5_default,
		author: "Dr. Giuliano Aita",
		content: "O engrossamento peniano estético e funcional com ácido hialurônico de grau médico tornou-se o procedimento de escolha para homens exigentes que buscam simetria, volume e autoconfiança sem os riscos associados às cirurgias invasivas. O UroFill® destaca-se por ser uma técnica patenteada que distribui o material de forma homogênea por meio de aplicações sequenciais em consultório, oferecendo resultados de altíssima fidelidade estética e estabilidade temporal prolongada."
	},
	{
		slug: "rezum-vapor-agua-hpb",
		title: "Rezum: Tecnologia Térmica a Vapor no Tratamento da HPB",
		excerpt: "Como o uso direcionado de vapor d'água reconfigura a próstata obstrutiva preservando integralmente a ejaculação e a ereção.",
		category: "Próstata",
		date: "28 Mai 2026",
		readTime: "8 min de leitura",
		image: clinic_4_default,
		author: "Dr. Giuliano Aita",
		content: "O sistema térmico Rezum utiliza a energia natural contida no vapor de água injetada diretamente no lobo prostático hipertrofiado. Esse procedimento ambulatorial de minutos induz a apoptose celular localizada; ao longo das semanas, o organismo reabsorve o tecido tratado, desobstruindo a uretra. O grande diferencial reside na preservação funcional, garantindo que o paciente recupere a qualidade urinária sem comprometer sua vida sexual ativa."
	},
	{
		slug: "ondas-de-choque-disfuncao-eretil",
		title: "Ondas de Choque de Baixa Intensidade e Reabilitação Vascular",
		excerpt: "O estímulo à angiogênese atuando diretamente na causa vascular da disfunção erétil, sem a necessidade de fármacos diários.",
		category: "Andrologia",
		date: "12 Mai 2026",
		readTime: "5 min de leitura",
		image: clinic_3_default,
		author: "Dr. Giuliano Aita",
		content: "A terapia acústica por ondas de choque extracorpóreas de baixa intensidade (Li-ESWT) baseia-se na microestimulação mecânica dos corpos cavernosos. Esse estímulo induz a liberação de fatores de crescimento celular e a formação de novos vasos sanguíneos (angiogênese). Ao restabelecer a irrigação sanguínea peniana, o tratamento reabilita a resposta natural do órgão, reduzindo ou eliminando a dependência de medicação oral vasodilatadora."
	},
	{
		slug: "reposicao-testosterona-seguranca",
		title: "Terapia de Reposição de Testosterona (TRT): Mitos e Protocolos",
		excerpt: "Os parâmetros diagnósticos de segurança prostática e cardiovascular no tratamento da deficiência androgênica (andropausa).",
		category: "Saúde Hormonal",
		date: "04 Abr 2026",
		readTime: "7 min de leitura",
		image: clinic_6_default,
		author: "Dr. Giuliano Aita",
		content: "A modulação hormonal na andropausa (DAEM) devolve vitalidade, cognição, libido e composição muscular ao homem. Contudo, a TRT exige rigorosa triagem inicial e acompanhamento continuado. O monitoramento de antígenos prostáticos (PSA), hematócrito e exames lipídicos afasta riscos cardiovasculares e oncológicos, transformando a reposição hormonal em uma terapia segura de alta performance de bem-estar."
	}
];
function PublicacoesPage() {
	const [searchTerm, setSearchTerm] = import_react.useState("");
	const [selectedCategory, setSelectedCategory] = import_react.useState("Todos");
	const [activeArticle, setActiveArticle] = import_react.useState(null);
	const categories = [
		"Todos",
		"Estética Íntima",
		"Próstata",
		"Andrologia",
		"Saúde Hormonal"
	];
	const filteredArticles = articlesData.filter((art) => {
		const matchesSearch = art.title.toLowerCase().includes(searchTerm.toLowerCase()) || art.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
		const matchesCategory = selectedCategory === "Todos" || art.category === selectedCategory;
		return matchesSearch && matchesCategory;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-background text-foreground font-sans min-h-screen py-16 md:py-24 selection:bg-brass/25 selection:text-ink",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-screen-xl mx-auto px-6 lg:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "max-w-3xl mb-12 md:mb-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 mb-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-brass" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-serif italic text-brass text-sm md:text-base",
								children: "Espaço Informativo Premium"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight mb-8",
							children: ["Canal de ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic font-normal",
								children: "Publicações"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-base md:text-lg text-ink/75 leading-relaxed font-light",
							children: "Artigos técnicos e esclarecedores sobre saúde masculina, urologia de alta tecnologia e andrologia clínica, direcionados à informação de qualidade e baseada em evidências científicas."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col md:flex-row gap-6 items-center justify-between border-y border-border py-6 mb-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2 w-full md:w-auto",
						children: categories.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								setSelectedCategory(cat);
								setActiveArticle(null);
							},
							className: `px-4 py-2 text-xs tracking-wider uppercase border transition-all cursor-pointer rounded-full ${selectedCategory === cat ? "bg-ink text-bone border-ink font-semibold" : "bg-transparent text-ink/70 border-border/80 hover:border-brass/50 hover:text-brass"}`,
							children: cat
						}, cat))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative w-full md:w-80",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-ink/40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							placeholder: "Buscar artigos...",
							value: searchTerm,
							onChange: (e) => {
								setSearchTerm(e.target.value);
								setActiveArticle(null);
							},
							className: "w-full bg-bone-soft/30 border border-border rounded-full pl-10 pr-4 py-2.5 text-xs text-ink placeholder:text-ink/40 focus:outline-none focus:border-brass focus:ring-1 focus:ring-brass"
						})]
					})]
				}),
				activeArticle ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "max-w-3xl mx-auto animate-in fade-in duration-500",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setActiveArticle(null),
							className: "text-xs uppercase tracking-widest text-brass hover:text-ink transition-colors mb-8 cursor-pointer inline-flex items-center gap-2",
							children: "← Voltar para a lista"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-[21/9] rounded-lg overflow-hidden mb-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: activeArticle.image,
								alt: activeArticle.title,
								className: "w-full h-full object-cover img-fade-soft"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-6 text-xs text-ink/50 mb-6 uppercase tracking-wider",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-brass font-semibold",
									children: activeArticle.category
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "size-3.5" }), activeArticle.date]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-3.5" }), activeArticle.readTime]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "size-3.5" }),
										"Por ",
										activeArticle.author
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-serif text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight mb-8 text-ink",
							children: activeArticle.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-serif text-lg text-ink/80 italic border-l-2 border-brass pl-6 mb-8 py-1 leading-relaxed",
							children: activeArticle.excerpt
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-base text-ink/75 leading-relaxed font-light space-y-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: activeArticle.content }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Procedimentos diagnósticos e avaliações clínicas individualizadas devem ser agendadas presencialmente em nossos consultórios de São Paulo ou Teresina. A saúde do homem contemporâneo é pautada na prevenção ativa e no emprego de tecnologias de baixo impacto físico e alta resolutividade estética e clínica." })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t border-border mt-12 pt-8 flex justify-between items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-ink/50 italic",
								children: "Publicado por Dr. Giuliano Aita"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => window.open("/contato", "_self"),
								className: "inline-flex items-center gap-2 bg-ink text-bone hover:bg-brass py-3 px-5 text-xs tracking-widest uppercase font-semibold transition-colors cursor-pointer",
								children: ["Agendar Avaliação", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
							})]
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: filteredArticles.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12",
					children: filteredArticles.map((art) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "group bg-bone-soft/20 border border-border/50 hover:border-brass/35 rounded-lg overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "aspect-[16/10] overflow-hidden bg-ink relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: art.image,
								alt: art.title,
								className: "w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-102 transition-all duration-700 img-fade-b",
								loading: "lazy"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute top-4 left-4 bg-ink/90 text-brass-soft text-[9px] uppercase tracking-widest px-2.5 py-1 rounded",
								children: art.category
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-4 text-[10px] uppercase tracking-wider text-ink/50 mb-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: art.date }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: art.readTime })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-serif text-2xl font-medium leading-snug mb-3 text-ink group-hover:text-brass transition-colors",
									children: art.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-ink/70 leading-relaxed font-light mb-4",
									children: art.excerpt
								})
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "px-6 pb-6 pt-2 border-t border-border/40 mt-auto",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => {
									setActiveArticle(art);
									window.scrollTo({
										top: 0,
										behavior: "smooth"
									});
								},
								className: "w-full flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-brass hover:text-ink transition-colors cursor-pointer",
								children: ["Ler Artigo Completo", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
							})
						})]
					}, art.slug))
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center py-20 border border-dashed border-border rounded-lg",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "size-10 text-brass/45 mx-auto mb-4" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-serif text-xl font-medium text-ink mb-1",
							children: "Nenhum artigo encontrado"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-ink/60 font-light",
							children: "Tente alterar os termos de busca ou o filtro por categoria."
						})
					]
				}) })
			]
		})
	});
}
//#endregion
export { PublicacoesPage as component };
