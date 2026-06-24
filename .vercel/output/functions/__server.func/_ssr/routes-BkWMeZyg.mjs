import { t as hero_3_default } from "./hero-3-BUKCMg6i.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as ArrowUpRight, n as MapPin, r as Instagram, t as Phone } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BkWMeZyg.js
var import_jsx_runtime = require_jsx_runtime();
var hero_2_default = "/assets/hero-2-C7PJnvSY.jpg";
var clinic_1_default = "/assets/clinic-1-BTve1pQK.jpg";
var clinic_2_default = "/assets/clinic-2-CT4K5tOk.jpg";
var clinic_3_default = "/assets/clinic-3-9owbXTd_.jpg";
var clinic_4_default = "/assets/clinic-4-C9w6BwS7.jpg";
var clinic_5_default = "/assets/clinic-5-B1eNauxD.jpg";
var clinic_6_default = "/assets/clinic-6-pLQJD0E0.jpg";
var clinic_7_default = "/assets/clinic-7-DXk2NVNi.jpg";
var featuredTreatments = [
	{
		n: "01",
		name: "UroFill®",
		short: "Engrossamento Peniano",
		desc: "Primeira e única técnica patenteada no mundo para engrossamento peniano. Não cirúrgica, segura e comprovada por mais de 10.000 procedimentos.",
		image: "/assets/treatment-urofill-DUhx6Il7.jpg"
	},
	{
		n: "02",
		name: "Rezum",
		short: "Hiperplasia Prostática",
		desc: "Tratamento minimamente invasivo para a hiperplasia prostática benigna com vapor d'água. Recuperação rápida e preservação da função sexual.",
		image: "/assets/treatment-rezum-DYeAhsfR.jpg"
	},
	{
		n: "03",
		name: "Ondas de Choque",
		short: "Disfunção Erétil",
		desc: "Aplicação de ondas de baixa intensidade que estimulam neovascularização do tecido erétil e devolvem espontaneidade às ereções.",
		image: "/assets/treatment-shockwave-lK5WUxrt.jpg"
	}
];
var secondaryProcedures = [
	{
		n: "04",
		name: "Injeção Peniana",
		desc: "Combinação sinérgica de dois ou três medicamentos vasoativos, aumentando o índice de sucesso e reduzindo efeitos colaterais."
	},
	{
		n: "05",
		name: "Implante Peniano",
		desc: "Tratamento de escolha para disfunção erétil refratária ou para pacientes que desejam uma solução definitiva e de alta satisfação."
	},
	{
		n: "06",
		name: "Reposição de Testosterona",
		desc: "Protocolo individualizado para deficiência androgênica, com monitoramento cardiovascular e metabólico contínuo."
	}
];
var news = [
	{
		date: "31 Mar 2025",
		cat: "Reabilitação",
		title: "Tecnologia na fisioterapia pélvica",
		excerpt: "A cadeira EmSella representa uma forma moderna, prática e indolor de tratar a incontinência urinária — devolvendo autoestima e qualidade de vida.",
		image: clinic_3_default
	},
	{
		date: "28 Mar 2025",
		cat: "Próstata",
		title: "Rezum: minimamente invasivo para HPB",
		excerpt: "A Hiperplasia Prostática Benigna afeta milhões de homens acima dos 50. O Rezum oferece alívio sintomático com preservação da função sexual.",
		image: clinic_4_default
	},
	{
		date: "23 Mar 2025",
		cat: "Andrologia",
		title: "UroFill: revolução segura da estética íntima",
		excerpt: "Técnica não cirúrgica patenteada nos EUA desde 2017, utilizada em mais de 10.000 pacientes com ácido hialurônico de grau médico.",
		image: clinic_5_default
	}
];
var galleryImages = [
	clinic_1_default,
	clinic_2_default,
	clinic_7_default,
	clinic_6_default,
	clinic_5_default,
	clinic_4_default
];
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-background text-foreground font-sans antialiased selection:bg-brass/25 selection:text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TreatmentsFeatured, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProceduresList, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bio, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewsSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
function Nav() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-screen-xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "#top",
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
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "hidden md:flex gap-9 items-center text-[11px] tracking-[0.18em] uppercase font-medium text-ink/80",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#tratamentos",
						className: "hover:text-brass transition-colors",
						children: "Tratamentos"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#especialista",
						className: "hover:text-brass transition-colors",
						children: "O Especialista"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#publicacoes",
						className: "hover:text-brass transition-colors",
						children: "Publicações"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#clinica",
						className: "hover:text-brass transition-colors",
						children: "A Clínica"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#contato",
						className: "px-5 py-2.5 ring-1 ring-ink/15 hover:ring-brass/60 hover:text-brass transition-colors",
						children: "Agendar Consulta"
					})
				]
			})]
		})
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "top",
		className: "relative overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-screen-xl mx-auto px-6 lg:px-10 pt-14 md:pt-24 pb-20 md:pb-32 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-end",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-7 lg:col-span-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 mb-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-10 bg-brass" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-serif italic text-brass text-base md:text-lg",
							children: "Referência em Saúde Masculina"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "font-serif text-[2.75rem] sm:text-6xl md:text-[5.25rem] leading-[0.95] tracking-[-0.02em] text-balance font-medium mb-10 max-w-[16ch]",
						children: [
							"A excelência médica pautada pela",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic font-normal",
								children: "discrição"
							}),
							" e precisão."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg md:text-xl text-ink/65 leading-relaxed max-w-[52ch] text-pretty mb-10 font-light",
						children: "Centro de excelência em urologia e saúde sexual, o Dr. Giuliano Aita combina rigor acadêmico internacional a um atendimento personalizado em ambiente projetado para o conforto absoluto."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#contato",
							className: "group inline-flex items-center gap-3 bg-ink text-bone px-7 py-4 text-xs tracking-[0.22em] uppercase hover:bg-brass transition-colors duration-500",
							children: ["Agendar Consulta", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#especialista",
							className: "text-xs tracking-[0.22em] uppercase text-ink/70 hover:text-brass border-b border-ink/20 hover:border-brass pb-1 transition-colors",
							children: "Conheça o Médico"
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "md:col-span-5 lg:col-span-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": true,
						className: "absolute -left-6 top-8 font-serif italic text-brass/40 text-sm tracking-[0.18em] rotate-[-90deg] origin-top-left hidden md:block",
						children: "Dr. Giuliano Aita · CRM-SP"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: hero_3_default,
						alt: "Dr. Giuliano Aita — urologista",
						className: "relative w-full aspect-[4/5] object-cover [object-position:18%_18%] img-fade-radial",
						loading: "eager"
					})]
				})
			})]
		})
	});
}
function Marquee() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "border-y border-border bg-bone-soft/60",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-screen-xl mx-auto px-6 lg:px-10 py-6 flex flex-wrap items-center gap-x-10 gap-y-3 text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-ink/55 font-medium",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-brass",
				children: "Formação & Filiações"
			}), [
				"AC Camargo Cancer Center",
				"ABEMSS · Membro Titular",
				"International Society for Sexual Medicine",
				"American Urological Association",
				"Sociedade Brasileira de Urologia"
			].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1 rounded-full bg-ink/25" }), i]
			}, i))]
		})
	});
}
function TreatmentsFeatured() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "tratamentos",
		className: "py-24 md:py-32 bg-ink text-bone",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-screen-xl mx-auto px-6 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid md:grid-cols-12 items-end gap-10 border-b border-bone/10 pb-14 mb-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] tracking-[0.28em] uppercase text-brass-soft font-medium mb-5 block",
						children: "01 — Tratamentos em Destaque"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.05] tracking-[-0.01em] text-balance",
						children: [
							"Procedimentos definidos pela",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic font-normal text-brass-soft",
								children: "evidência"
							}),
							", executados com técnica."
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "md:col-span-5 md:pl-8 md:border-l md:border-bone/10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm md:text-base text-bone/55 leading-relaxed max-w-[40ch] font-light",
						children: "Protocolos exclusivos desenvolvidos sob as mais recentes diretrizes das principais sociedades internacionais de urologia e medicina sexual."
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14",
				children: featuredTreatments.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "group flex flex-col",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden aspect-[4/3] mb-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: t.image,
							alt: t.name,
							className: "w-full h-full object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1200ms] ease-out img-fade-b",
							loading: "lazy"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 flex flex-col",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline justify-between mb-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-serif italic text-2xl text-brass-soft",
									children: [t.n, "."]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] uppercase tracking-[0.28em] text-bone/40",
									children: t.short
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-serif text-3xl mb-5 font-medium tracking-[-0.01em]",
								children: t.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-bone/55 leading-relaxed mb-10 max-w-[34ch] font-light flex-1",
								children: t.desc
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#contato",
								className: "text-[11px] uppercase tracking-[0.22em] font-medium text-brass-soft inline-flex items-center gap-3 group-hover:gap-5 transition-all",
								children: ["Saiba Mais", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
							})
						]
					})]
				}, t.n))
			})]
		})
	});
}
function ProceduresList() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 md:py-32 bg-bone",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-screen-xl mx-auto px-6 lg:px-10 grid md:grid-cols-12 gap-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] tracking-[0.28em] uppercase text-brass font-medium mb-5 block",
						children: "02 — Demais Especialidades"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-serif text-4xl md:text-5xl font-medium leading-[1.05] tracking-[-0.01em] text-balance",
						children: [
							"Cuidado integral em ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic",
								children: "andrologia"
							}),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 text-base text-ink/65 leading-relaxed max-w-[36ch] font-light",
						children: "Cada protocolo é desenhado sob medida — da disfunção erétil à reposição hormonal — sempre com a tecnologia a serviço do bem-estar individual."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "md:col-span-8 divide-y divide-border border-y border-border",
				children: secondaryProcedures.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-12 gap-6 py-8 group hover:bg-bone-soft/60 transition-colors px-4 -mx-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "col-span-2 md:col-span-1 font-serif italic text-2xl text-brass",
							children: p.n
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "col-span-10 md:col-span-4 font-serif text-2xl font-medium tracking-tight",
							children: p.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "col-span-12 md:col-span-6 text-sm text-ink/65 leading-relaxed font-light max-w-[50ch]",
							children: p.desc
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden md:flex col-span-1 justify-end items-center text-brass opacity-0 group-hover:opacity-100 transition-opacity",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-5" })
						})
					]
				}, p.n))
			})]
		})
	});
}
function Bio() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "especialista",
		className: "py-24 md:py-32 bg-bone-soft/60",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-screen-xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
				className: "md:col-span-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:sticky md:top-32",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] tracking-[0.28em] uppercase text-brass font-medium mb-6 block",
							children: "03 — O Especialista"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-serif text-4xl md:text-5xl leading-[1.05] font-medium mb-10 tracking-[-0.01em]",
							children: ["Dr. Giuliano ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic",
								children: "Aita"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: hero_2_default,
							alt: "Dr. Giuliano Aita",
							className: "w-full aspect-[4/5] object-cover [object-position:82%_15%] mb-8 img-fade-b",
							loading: "lazy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
							className: "space-y-5 border-t border-border pt-8 text-sm",
							children: [
								["Doutorado", "AC Camargo Cancer Center · SP"],
								["Titular", "Sociedade Brasileira de Urologia"],
								["Membro", "International Society for Sexual Medicine"],
								["Diretoria", "ABEMSS — Saúde Sexual"]
							].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-[10px] uppercase tracking-[0.22em] text-brass",
									children: k
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "text-ink/80 leading-snug",
									children: v
								})]
							}, k))
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-8 md:pl-8 md:border-l md:border-border",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
						className: "font-serif text-3xl md:text-4xl italic text-ink/85 leading-[1.25] mb-14 max-w-[28ch] text-balance",
						children: "“A medicina urológica de excelência não se limita ao diagnóstico — ela reside na compreensão profunda da jornada de cada paciente.”"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-7 text-lg text-ink/70 leading-[1.7] text-pretty font-light max-w-[58ch]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Com mais de duas décadas dedicadas à urologia e à saúde do homem, o Dr. Giuliano Aita consolidou-se como uma das principais referências na medicina sexual masculina contemporânea no Brasil. Sua atuação combina pesquisa acadêmica, prática cirúrgica de ponta e diálogo aberto com o paciente." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Doutor em Ciências pelo AC Camargo Cancer Center, é conferencista ativo nos principais eventos urológicos nacionais e internacionais, ocupando posições de destaque em sociedades científicas como a Associação Brasileira de Estudos em Medicina e Saúde Sexual (ABEMSS) e a International Society for Sexual Medicine (ISSM)." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "O instituto foi concebido para oferecer não apenas tratamentos, mas uma experiência integral de cuidado — onde privacidade, hospitalidade e rigor técnico são pilares inegociáveis de cada consulta, exame e procedimento." })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-14 grid grid-cols-3 gap-8 border-t border-border pt-10",
						children: [
							["20+", "Anos de Atuação"],
							["10k+", "Pacientes Atendidos"],
							["50+", "Publicações & Palestras"]
						].map(([n, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-serif text-4xl md:text-5xl text-ink mb-2 tracking-tight",
							children: n
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] uppercase tracking-[0.22em] text-ink/55",
							children: l
						})] }, l))
					})
				]
			})]
		})
	});
}
function NewsSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "publicacoes",
		className: "py-24 md:py-32 bg-bone",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-screen-xl mx-auto px-6 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 border-b border-border pb-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[11px] tracking-[0.28em] uppercase text-brass font-medium mb-5 block",
					children: "04 — Publicações"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-serif text-4xl md:text-5xl font-medium leading-[1.05] tracking-[-0.01em] max-w-[18ch] text-balance",
					children: [
						"Conhecimento que ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic",
							children: "circula"
						}),
						"."
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#",
					className: "text-[11px] uppercase tracking-[0.22em] text-ink/70 hover:text-brass border-b border-ink/20 hover:border-brass pb-1 self-start md:self-end inline-flex items-center gap-2",
					children: ["Todas as Publicações ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid md:grid-cols-3 gap-8 lg:gap-12",
				children: news.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "group flex flex-col",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-[4/3] overflow-hidden mb-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: n.image,
								alt: n.title,
								className: "w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-[1200ms] ease-out img-fade-b",
								loading: "lazy"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4 text-[10px] uppercase tracking-[0.22em] text-ink/50 mb-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-brass",
									children: n.cat
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1 rounded-full bg-ink/20" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: n.date })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-serif text-2xl font-medium leading-snug mb-4 tracking-tight group-hover:text-brass transition-colors",
							children: n.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-ink/65 leading-relaxed font-light flex-1",
							children: n.excerpt
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#",
							className: "mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] font-medium text-ink/80 group-hover:text-brass group-hover:gap-4 transition-all",
							children: ["Ler artigo ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
						})
					]
				}, n.title))
			})]
		})
	});
}
function Gallery() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "clinica",
		className: "py-24 md:py-32 bg-ink text-bone",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-screen-xl mx-auto px-6 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid md:grid-cols-12 gap-10 mb-16 items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] tracking-[0.28em] uppercase text-brass-soft font-medium mb-5 block",
						children: "05 — A Clínica"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.05] tracking-[-0.01em] max-w-[18ch] text-balance",
						children: [
							"Um espaço pensado para o",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic font-normal text-brass-soft",
								children: "cuidado"
							}),
							"."
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "md:col-span-5 md:pl-8 md:border-l md:border-bone/10 text-sm md:text-base text-bone/55 leading-relaxed font-light max-w-[42ch]",
					children: "Ambiente clínico projetado para oferecer privacidade absoluta, tecnologia de ponta e hospitalidade — do primeiro contato ao acompanhamento pós-procedimento."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-6 gap-6 md:gap-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: galleryImages[0],
						alt: "Clínica",
						className: "col-span-6 md:col-span-4 aspect-[16/10] object-cover img-fade-soft",
						loading: "lazy"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: galleryImages[1],
						alt: "Clínica",
						className: "col-span-3 md:col-span-2 aspect-square object-cover img-fade-soft",
						loading: "lazy"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: galleryImages[2],
						alt: "Clínica",
						className: "col-span-3 md:col-span-2 aspect-square object-cover img-fade-soft",
						loading: "lazy"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: galleryImages[3],
						alt: "Clínica",
						className: "col-span-3 md:col-span-2 aspect-[4/5] object-cover img-fade-soft",
						loading: "lazy"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: galleryImages[4],
						alt: "Clínica",
						className: "col-span-3 md:col-span-2 aspect-[4/5] object-cover img-fade-soft",
						loading: "lazy"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: galleryImages[5],
						alt: "Clínica",
						className: "col-span-6 md:col-span-2 aspect-[4/5] object-cover img-fade-soft",
						loading: "lazy"
					})
				]
			})]
		})
	});
}
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contato",
		className: "py-24 md:py-32 bg-bone-soft/60",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-screen-xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-12 gap-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] tracking-[0.28em] uppercase text-brass font-medium mb-5 block",
						children: "06 — Contato"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-serif text-4xl md:text-6xl font-medium leading-[1.02] tracking-[-0.01em] text-balance mb-10",
						children: [
							"Inicie sua jornada de ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic",
								children: "cuidado"
							}),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-ink/65 text-lg leading-relaxed max-w-[44ch] mb-12 font-light",
						children: "Agendamentos privativos disponíveis para consultas presenciais e telemedicina de alta resolução. Nossa equipe responde em até 24 horas úteis."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "tel:+551130000000",
								className: "group flex items-center justify-between border-b border-ink/15 py-5 hover:border-brass transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4 text-brass" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-serif text-2xl md:text-3xl text-ink group-hover:text-brass transition-colors",
										children: "+55 (11) 3000-0000"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-5 text-ink/40 group-hover:text-brass transition-colors" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "mailto:contato@giulianoaita.com.br",
								className: "group flex items-center justify-between border-b border-ink/15 py-5 hover:border-brass transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-serif text-xl md:text-2xl text-ink/85 group-hover:text-brass transition-colors",
									children: "contato@giulianoaita.com.br"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-5 text-ink/40 group-hover:text-brass transition-colors" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "https://www.instagram.com/dr.giulianoaita/",
								target: "_blank",
								rel: "noreferrer",
								className: "group flex items-center justify-between border-b border-ink/15 py-5 hover:border-brass transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "size-4 text-brass" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-serif text-xl md:text-2xl text-ink/85 group-hover:text-brass transition-colors",
										children: "@dr.giulianoaita"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-5 text-ink/40 group-hover:text-brass transition-colors" })]
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
				className: "md:col-span-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-ink text-bone p-10 md:p-12 h-full flex flex-col",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] uppercase tracking-[0.28em] text-brass-soft font-medium mb-8",
							children: "Localização"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-serif text-2xl md:text-3xl leading-tight mb-3 tracking-tight",
							children: "Edifício Vila Olímpia Corporate"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-bone/55 leading-relaxed mb-10 font-light",
							children: [
								"Av. das Nações Unidas, 12.500",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Vila Olímpia · São Paulo · SP"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t border-bone/15 pt-8 mt-auto space-y-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 text-bone/70",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4 text-brass-soft" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-light",
									children: "Estacionamento com manobrista"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] uppercase tracking-[0.22em] text-bone/55",
									children: "Seg — Sex, 08h às 19h"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-brass-soft",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-brass-soft animate-pulse" }), "Atendendo"]
								})]
							})]
						})
					]
				})
			})]
		})
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
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
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#tratamentos",
							className: "hover:text-brass-soft transition-colors",
							children: "Tratamentos"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#especialista",
							className: "hover:text-brass-soft transition-colors",
							children: "Especialista"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#publicacoes",
							className: "hover:text-brass-soft transition-colors",
							children: "Publicações"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#clinica",
							className: "hover:text-brass-soft transition-colors",
							children: "Clínica"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#contato",
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
	});
}
//#endregion
export { Index as component };
