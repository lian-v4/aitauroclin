import { n as clinic_2_default, t as clinic_1_default } from "./clinic-2-BwMqf-og.mjs";
import { n as clinic_4_default, t as clinic_3_default } from "./clinic-4-k0CSgxjd.mjs";
import { n as clinic_6_default, t as clinic_5_default } from "./clinic-6-DIh9FlNt.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { h as Clock, l as MapPin, m as ExternalLink, r as ShieldCheck, s as Phone } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/clinica-tkbEjGH3.js
var import_jsx_runtime = require_jsx_runtime();
var clinic_7_default = "/assets/clinic-7-DXk2NVNi.jpg";
function ClinicaPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-background text-foreground font-sans min-h-screen py-16 md:py-24 selection:bg-brass/25 selection:text-ink",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-screen-xl mx-auto px-6 lg:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "max-w-3xl mb-16 md:mb-24",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 mb-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-brass" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-serif italic text-brass text-sm md:text-base",
								children: "Nossos Espaços"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight mb-8",
							children: ["Estrutura & ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic font-normal",
								children: "Multilocalidade"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-base md:text-lg text-ink/75 leading-relaxed font-light",
							children: "Ambientes cirúrgicos e ambulatoriais projetados para proporcionar conforto absoluto, sigilo incondicional e as melhores tecnologias diagnósticas em duas capitais do país."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-24 md:space-y-32",
					children: [{
						id: "sp",
						title: "São Paulo · SP",
						subtitle: "Unidade Premium Vila Olímpia",
						description: "Localizado no Edifício Vila Olímpia Corporate, nosso consultório em São Paulo foi inteiramente projetado sob o conceito de atendimento boutique. Oferecemos infraestrutura de ponta, consultório privativo para discussões diagnósticas e facilidades como estacionamento com manobrista (valet), além de fluxos de entrada e saída pensados para assegurar a máxima privacidade aos pacientes.",
						address: "Av. das Nações Unidas, 12.500 - Vila Olímpia, São Paulo - SP",
						phone: "+55 (11) 3000-0000",
						hours: "Segunda a Sexta, das 08h às 19h",
						mapUrl: "https://maps.google.com/?q=Av.+das+Nacoes+Unidas,+12500+Vila+Olimpia+Sao+Paulo",
						amenities: [
							"Estacionamento com manobrista",
							"Privacidade acústica absoluta",
							"Fluxo exclusivo de atendimento",
							"Próximo à estação de trem CPTM"
						],
						images: [
							clinic_1_default,
							clinic_2_default,
							clinic_3_default,
							clinic_4_default
						]
					}, {
						id: "pi",
						title: "Teresina · PI",
						subtitle: "Euroclin Teresina",
						description: "A Euroclin é a nossa sede de referência no Nordeste, situada em região estratégica de Teresina. Um espaço clínico amplo e moderno que conta com salas equipadas para a realização de exames diagnósticos, fisioterapia pélvica e procedimentos urológicos ambulatoriais com total segurança e o mesmo padrão de atendimento premium de São Paulo.",
						address: "Av. Dom Severino, 3000 - Fátima, Teresina - PI",
						phone: "+55 (86) 3000-0000",
						hours: "Segunda a Sexta, das 08h às 19h",
						mapUrl: "https://maps.google.com/?q=Av.+Dom+Severino,+3000+Fatima+Teresina",
						amenities: [
							"Clínica integrada multiespecialidades",
							"Sala de pequenos procedimentos",
							"Acessibilidade completa",
							"Estacionamento privativo"
						],
						images: [
							clinic_5_default,
							clinic_6_default,
							clinic_7_default
						]
					}].map((office, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: `grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-border pt-16 ${idx % 2 === 1 ? "lg:flex-row-reverse" : ""}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-5 space-y-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] uppercase tracking-[0.28em] text-brass font-bold block mb-1",
									children: office.subtitle
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-serif text-3xl md:text-4xl font-medium text-ink",
									children: office.title
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm md:text-base text-ink/75 leading-relaxed font-light",
									children: office.description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-4 py-4 border-y border-border",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-start gap-3 text-xs text-ink/80",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4 text-brass shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
													className: "block font-semibold",
													children: "Endereço:"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: office.address }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
													href: office.mapUrl,
													target: "_blank",
													rel: "noopener noreferrer",
													className: "inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.15em] text-brass hover:text-ink font-semibold ml-2",
													children: ["Ver no mapa ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-2.5" })]
												})
											] })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-start gap-3 text-xs text-ink/80",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4 text-brass shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "block font-semibold",
												children: "Contato:"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: office.phone })] })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-start gap-3 text-xs text-ink/80",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-4 text-brass shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "block font-semibold",
												children: "Horário:"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: office.hours })] })]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "block text-xs uppercase tracking-[0.22em] text-ink/60 font-bold mb-3",
										children: "Diferenciais do Espaço"
									}), office.amenities.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-xs text-ink/75 font-light",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-4 text-brass shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
									}, item))]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "pt-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/contato",
										className: "inline-flex items-center gap-2 bg-ink text-bone hover:bg-brass px-6 py-3.5 text-xs tracking-[0.22em] uppercase font-semibold transition-colors duration-300",
										children: ["Agendar nesta Unidade", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5" })]
									})
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "lg:col-span-7 grid grid-cols-2 gap-4",
							children: office.images.map((img, imgIdx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `overflow-hidden rounded-lg relative group bg-ink ${office.images.length % 2 === 1 && imgIdx === office.images.length - 1 ? "col-span-2 aspect-[21/9]" : "aspect-[4/3]"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: img,
									alt: `Ambiente ${office.title}`,
									className: "w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-102 transition-all duration-700 img-fade-soft",
									loading: "lazy"
								})
							}, imgIdx))
						})]
					}, office.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "mt-28 p-8 md:p-16 bg-bone-soft/30 border border-border/80 rounded-lg text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl mx-auto",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] uppercase tracking-[0.28em] text-brass mb-3 block",
								children: "Atendimento por Telemedicina"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-serif text-2xl md:text-3xl font-medium text-ink mb-4",
								children: "Está fora de São Paulo ou Teresina?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-ink/70 text-xs md:text-sm leading-relaxed mb-8 font-light",
								children: "Oferecemos consultas à distância por meio de telemedicina segura e criptografada de alta definição. Ideal para segundas opiniões urológicas, análise de exames e acompanhamento."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/contato",
								className: "inline-flex items-center gap-2 bg-ink text-bone hover:bg-brass px-6 py-3 text-xs tracking-[0.22em] uppercase font-semibold transition-colors",
								children: ["Agendar Telemedicina", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-4" })]
							})
						]
					})
				})
			]
		})
	});
}
//#endregion
export { ClinicaPage as component };
