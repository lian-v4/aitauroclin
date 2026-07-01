import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { T as CircleQuestionMark, a as Send, b as ArrowUpRight, f as Instagram, l as MapPin, s as Phone, u as Mail } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contato-DGG5xySq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContatoPage() {
	const [formData, setFormData] = import_react.useState({
		nome: "",
		idade: "",
		localizacao: "",
		servico: ""
	});
	const [errors, setErrors] = import_react.useState({
		nome: "",
		idade: "",
		localizacao: "",
		servico: ""
	});
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value
		}));
		setErrors((prev) => ({
			...prev,
			[name]: ""
		}));
	};
	const validateForm = () => {
		let valid = true;
		const newErrors = {
			nome: "",
			idade: "",
			localizacao: "",
			servico: ""
		};
		if (!formData.nome.trim()) {
			newErrors.nome = "Por favor, informe seu nome completo.";
			valid = false;
		}
		if (!formData.idade.trim() || isNaN(Number(formData.idade)) || Number(formData.idade) <= 0) {
			newErrors.idade = "Por favor, informe uma idade válida.";
			valid = false;
		}
		if (!formData.localizacao) {
			newErrors.localizacao = "Selecione o local de atendimento preferencial.";
			valid = false;
		}
		if (!formData.servico) {
			newErrors.servico = "Selecione o serviço ou tipo de consulta.";
			valid = false;
		}
		setErrors(newErrors);
		return valid;
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!validateForm()) return;
		const cleanLocation = formData.localizacao === "sp" ? "São Paulo (Vila Olímpia)" : "Teresina (Euroclin)";
		const messageText = `Olá! Gostaria de agendar um atendimento com o Dr. Giuliano Aita.

Meus dados de Pré-Qualificação:
- Nome Completo: ${formData.nome}\n- Idade: ${formData.idade} anos\n- Unidade de Preferência: ${cleanLocation}\n- Serviço/Interesse: ${formData.servico}`;
		const whatsappUrl = `https://wa.me/551130000000?text=${encodeURIComponent(messageText)}`;
		window.open(whatsappUrl, "_blank");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-background text-foreground font-sans min-h-screen py-16 md:py-24 selection:bg-brass/25 selection:text-ink",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-screen-xl mx-auto px-6 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "max-w-3xl mb-16 md:mb-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 mb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-brass" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-serif italic text-brass text-sm md:text-base",
							children: "Atendimento e Canais"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight mb-8",
						children: ["Agendamento & ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic font-normal",
							children: "Pré-Qualificação"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-base md:text-lg text-ink/75 leading-relaxed font-light",
						children: "Inicie sua jornada de cuidado preenchendo o formulário de pré-qualificação abaixo. Nossa equipe de atendimento receberá seus dados estruturados no WhatsApp para agilizar e personalizar seu agendamento."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-7 bg-bone-soft/30 border border-border/80 rounded-lg p-8 md:p-10 shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-2xl font-medium text-ink mb-6 pb-4 border-b border-border/80",
						children: "Formulário de Pré-Qualificação"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSubmit,
						className: "space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "nome",
										className: "text-xs uppercase tracking-widest text-ink/70 font-semibold",
										children: "Nome Completo"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										id: "nome",
										name: "nome",
										value: formData.nome,
										onChange: handleChange,
										placeholder: "Ex: Carlos Augusto Silva",
										className: "bg-bone border border-border/80 focus:border-brass rounded px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-brass"
									}),
									errors.nome && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-red-600 font-light",
										children: errors.nome
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "idade",
										className: "text-xs uppercase tracking-widest text-ink/70 font-semibold",
										children: "Idade"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										id: "idade",
										name: "idade",
										value: formData.idade,
										onChange: handleChange,
										placeholder: "Ex: 45",
										className: "bg-bone border border-border/80 focus:border-brass rounded px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-brass"
									}),
									errors.idade && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-red-600 font-light",
										children: errors.idade
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "localizacao",
										className: "text-xs uppercase tracking-widest text-ink/70 font-semibold",
										children: "Unidade Preferencial"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										id: "localizacao",
										name: "localizacao",
										value: formData.localizacao,
										onChange: handleChange,
										className: "bg-bone border border-border/80 focus:border-brass rounded px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-brass",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "",
												children: "Selecione a unidade..."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "sp",
												children: "São Paulo - Vila Olímpia"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "pi",
												children: "Teresina - Euroclin"
											})
										]
									}),
									errors.localizacao && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-red-600 font-light",
										children: errors.localizacao
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "servico",
										className: "text-xs uppercase tracking-widest text-ink/70 font-semibold",
										children: "Procedimento ou Consulta de Interesse"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										id: "servico",
										name: "servico",
										value: formData.servico,
										onChange: handleChange,
										className: "bg-bone border border-border/80 focus:border-brass rounded px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-brass",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "",
												children: "Selecione o procedimento..."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "UroFill® (Estética Íntima)",
												children: "UroFill® (Preenchimento Peniano)"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "Rezum (Vapor de Água para Próstata)",
												children: "Rezum (Tratamento de HPB)"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "Ondas de Choque (Saúde Vascular)",
												children: "Ondas de Choque (Disfunção Erétil)"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "Reposição Hormonal (Testosterona/DAEM)",
												children: "Reposição Hormonal (TRT)"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "Outro Procedimento / Implantes",
												children: "Outro Procedimento / Implante Peniano"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "Consulta Geral / Andrologia",
												children: "Consulta Geral & Andrologia"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "Telemedicina (Consulta Online)",
												children: "Telemedicina (Consulta Online)"
											})
										]
									}),
									errors.servico && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-red-600 font-light",
										children: errors.servico
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pt-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "submit",
									className: "w-full bg-ink text-bone hover:bg-brass transition-colors py-4 px-6 text-xs tracking-widest uppercase font-semibold flex items-center justify-center gap-2 rounded shadow-md cursor-pointer",
									children: ["Enviar para o WhatsApp", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-3.5" })]
								})
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "lg:col-span-5 space-y-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-ink text-bone rounded-lg p-8 flex flex-col justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[9px] uppercase tracking-widest text-brass-soft mb-6 block font-bold",
									children: "Canais Diretos"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-serif text-2xl font-medium mb-8 text-bone",
									children: "Outras Formas de Contato"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: "tel:+551130000000",
											className: "flex items-center justify-between border-b border-bone/10 pb-4 hover:border-brass-soft transition-colors",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex items-center gap-3 text-sm font-light",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4 text-brass-soft" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "+55 (11) 3000-0000" })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4 text-bone/40" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: "mailto:contato@giulianoaita.com.br",
											className: "flex items-center justify-between border-b border-bone/10 pb-4 hover:border-brass-soft transition-colors",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex items-center gap-3 text-sm font-light",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4 text-brass-soft" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "contato@giulianoaita.com.br" })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4 text-bone/40" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: "https://instagram.com/dr.giulianoaita",
											target: "_blank",
											rel: "noopener noreferrer",
											className: "flex items-center justify-between border-b border-bone/10 pb-4 hover:border-brass-soft transition-colors",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex items-center gap-3 text-sm font-light",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "size-4 text-brass-soft" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "@dr.giulianoaita" })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4 text-bone/40" })]
										})
									]
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] text-bone/45 leading-relaxed mt-10 font-light",
								children: "Atendimento telefônico disponível de segunda a sexta, das 08h às 19h. Retorno das solicitações digitais em até 24 horas úteis."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-bone-soft/30 border border-border/80 rounded-lg p-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[9px] uppercase tracking-widest text-brass mb-4 block font-bold",
								children: "Localizações Físicas"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4 text-brass" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "font-serif font-bold text-ink text-base",
											children: "São Paulo · SP"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-ink/75 leading-relaxed font-light pl-6",
										children: [
											"Edifício Vila Olímpia Corporate ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"Av. das Nações Unidas, 12.500 ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"Vila Olímpia · CEP 04578-000 ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] uppercase tracking-wider text-brass font-medium block mt-1",
												children: "Estacionamento com manobrista"
											})
										]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2 border-t border-border/50 pt-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4 text-brass" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "font-serif font-bold text-ink text-base",
											children: "Teresina · PI"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-ink/75 leading-relaxed font-light pl-6",
										children: [
											"Euroclin Teresina ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"Av. Dom Severino, 3000 ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"Fátima · CEP 64049-378 ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] uppercase tracking-wider text-brass font-medium block mt-1",
												children: "Clínica de Especialidades"
											})
										]
									})]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-bone-soft/10 border border-border/40 rounded-lg p-6 flex gap-4 items-start",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, { className: "size-5 text-brass shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
								className: "font-serif font-semibold text-ink text-sm mb-1",
								children: "Como funciona a Pré-Qualificação?"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] text-ink/70 leading-relaxed font-light",
								children: "Nosso formulário coleta dados básicos para que a secretária saiba exatamente o seu perfil de interesse, direcionando o fluxo e agilizando a resposta de datas disponíveis e valores de consulta."
							})] })]
						})
					]
				})]
			})]
		})
	});
}
//#endregion
export { ContatoPage as component };
