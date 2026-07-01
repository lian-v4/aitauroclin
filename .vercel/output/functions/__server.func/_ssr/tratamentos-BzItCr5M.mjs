import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as DialogOverlay$1, c as DialogTrigger$1, i as DialogDescription$1, l as Slot, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { C as Activity, S as ArrowLeft, _ as BrainCircuit, b as ArrowUpRight, i as ShieldAlert, t as X, w as Sparkles, x as ArrowRight } from "../_libs/lucide-react.mjs";
import { n as treatment_shockwave_default, r as treatment_urofill_default, t as treatment_rezum_default } from "./treatment-shockwave-CZTUY4r5.mjs";
import { t as useEmblaCarousel } from "../_libs/embla-carousel-react+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tratamentos-BzItCr5M.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var CarouselContext = import_react.createContext(null);
function useCarousel() {
	const context = import_react.useContext(CarouselContext);
	if (!context) throw new Error("useCarousel must be used within a <Carousel />");
	return context;
}
var Carousel = import_react.forwardRef(({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
	const [carouselRef, api] = useEmblaCarousel({
		...opts,
		axis: orientation === "horizontal" ? "x" : "y"
	}, plugins);
	const [canScrollPrev, setCanScrollPrev] = import_react.useState(false);
	const [canScrollNext, setCanScrollNext] = import_react.useState(false);
	const onSelect = import_react.useCallback((api) => {
		if (!api) return;
		setCanScrollPrev(api.canScrollPrev());
		setCanScrollNext(api.canScrollNext());
	}, []);
	const scrollPrev = import_react.useCallback(() => {
		api?.scrollPrev();
	}, [api]);
	const scrollNext = import_react.useCallback(() => {
		api?.scrollNext();
	}, [api]);
	const handleKeyDown = import_react.useCallback((event) => {
		if (event.key === "ArrowLeft") {
			event.preventDefault();
			scrollPrev();
		} else if (event.key === "ArrowRight") {
			event.preventDefault();
			scrollNext();
		}
	}, [scrollPrev, scrollNext]);
	import_react.useEffect(() => {
		if (!api || !setApi) return;
		setApi(api);
	}, [api, setApi]);
	import_react.useEffect(() => {
		if (!api) return;
		onSelect(api);
		api.on("reInit", onSelect);
		api.on("select", onSelect);
		return () => {
			api?.off("select", onSelect);
		};
	}, [api, onSelect]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselContext.Provider, {
		value: {
			carouselRef,
			api,
			opts,
			orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
			scrollPrev,
			scrollNext,
			canScrollPrev,
			canScrollNext
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref,
			onKeyDownCapture: handleKeyDown,
			className: cn("relative", className),
			role: "region",
			"aria-roledescription": "carousel",
			...props,
			children
		})
	});
});
Carousel.displayName = "Carousel";
var CarouselContent = import_react.forwardRef(({ className, ...props }, ref) => {
	const { carouselRef, orientation } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: carouselRef,
		className: "overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref,
			className: cn("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className),
			...props
		})
	});
});
CarouselContent.displayName = "CarouselContent";
var CarouselItem = import_react.forwardRef(({ className, ...props }, ref) => {
	const { orientation } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		role: "group",
		"aria-roledescription": "slide",
		className: cn("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "pl-4" : "pt-4", className),
		...props
	});
});
CarouselItem.displayName = "CarouselItem";
var CarouselPrevious = import_react.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
	const { orientation, scrollPrev, canScrollPrev } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		ref,
		variant,
		size,
		className: cn("absolute  h-8 w-8 rounded-full", orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90", className),
		disabled: !canScrollPrev,
		onClick: scrollPrev,
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Previous slide"
		})]
	});
});
CarouselPrevious.displayName = "CarouselPrevious";
var CarouselNext = import_react.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
	const { orientation, scrollNext, canScrollNext } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		ref,
		variant,
		size,
		className: cn("absolute h-8 w-8 rounded-full", orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", className),
		disabled: !canScrollNext,
		onClick: scrollNext,
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Next slide"
		})]
	});
});
CarouselNext.displayName = "CarouselNext";
var Dialog = Dialog$1;
var DialogTrigger = DialogTrigger$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var treatmentsData = [
	{
		n: "01",
		name: "UroFill®",
		short: "Preenchimento / Estética Íntima",
		desc: "Técnica patenteada mundialmente para engrossamento peniano estético e funcional com ácido hialurônico, realizada em consultório.",
		technicalDesc: "O UroFill® é um procedimento patenteado desenvolvido nos Estados Unidos, amplamente testado e aprovado, focado no engrossamento peniano estético e funcional. Utiliza um ácido hialurônico de alta densidade e grau médico especificamente desenvolvido para esta aplicação. O tratamento é realizado inteiramente no consultório médico, sob anestesia local tópica e sem necessidade de cirurgia, internação ou afastamento das atividades cotidianas. O ganho de diâmetro é gradual e distribuído de forma homogênea por meio de aplicações sequenciais, resultando em um aspecto extremamente natural, proporcional e estável.",
		image: treatment_urofill_default,
		isFlagship: true
	},
	{
		n: "02",
		name: "Rezum",
		short: "Terapia de Próstata a Vapor",
		desc: "Procedimento térmico inovador e minimamente invasivo com vapor d'água para hiperplasia prostática benigna (HPB).",
		technicalDesc: "O Rezum é um sistema revolucionário de terapia térmica com vapor d'água para o tratamento da Hiperplasia Prostática Benigna (HPB). O procedimento utiliza a energia térmica contida em uma pequena quantidade de vapor d'água injetada diretamente no tecido prostático obstrutivo sob sedação leve. Em poucas semanas, o corpo absorve naturalmente o tecido tratado, reduzindo o volume da próstata e desobstruindo a uretra. A grande vantagem do Rezum é a realização ambulatorial (sem internação), recuperação extremamente rápida e, fundamentalmente, a preservação da função sexual e ejaculatória, diferentemente das cirurgias tradicionais.",
		image: treatment_rezum_default,
		isFlagship: true
	},
	{
		n: "03",
		name: "Ondas de Choque",
		short: "Reabilitação Vascular Peniana",
		desc: "Terapia com ondas acústicas de baixa intensidade de consultório para estimulação vascular da ereção.",
		technicalDesc: "A Terapia por Ondas de Choque Extracorpóreas de Baixa Intensidade (Li-ESWT) é o tratamento de vanguarda para a disfunção erétil de origem vascular. O procedimento consiste na aplicação de ondas acústicas de baixa intensidade diretamente no tecido peniano, estimulando o processo de angiogênese (formação de novos vasos sanguíneos) e reabilitando o tecido erétil. Trata-se de um protocolo indolor, realizado em consultório em poucas sessões, sem necessidade de anestesia ou medicação prévia. Atua diretamente na causa física da disfunção, devolvendo a espontaneidade e a rigidez às ereções.",
		image: treatment_shockwave_default,
		isFlagship: true
	},
	{
		n: "04",
		name: "Injeção Peniana",
		short: "Terapia Farmacológica Autônoma",
		desc: "Combinação personalizada de medicamentos vasoativos para aplicação imediata e controlada.",
		technicalDesc: "A terapia com injeções intracavernosas vasoativas consiste na autoaplicação de doses personalizadas de substâncias vasodilatadoras diretamente no corpo cavernoso do pênis, minutos antes da relação sexual. É uma solução sob medida de altíssima eficácia para casos em que os comprimidos orais não trouxeram o resultado desejado ou são contraindicados. O protocolo é customizado pelo Dr. Giuliano Aita, combinando diferentes agentes vasoativos para otimizar os resultados e mitigar efeitos colaterais. O paciente recebe treinamento detalhado em consultório para garantir a máxima autonomia, conforto e segurança.",
		isFlagship: false
	},
	{
		n: "05",
		name: "Implante Peniano",
		short: "Prótese Peniana Maleável e Inflável",
		desc: "Tratamento cirúrgico de alta satisfação para disfunção erétil refratária.",
		technicalDesc: "O implante de prótese peniana é um procedimento cirúrgico altamente eficaz, indicado principalmente para disfunção erétil severa que não respondeu a tratamentos clínicos, ou para pacientes que buscam uma solução definitiva e espontânea. As próteses podem ser maleáveis (semi-rígidas) ou infláveis (de 2 ou 3 volumes), sendo estas últimas as que proporcionam o resultado estético e funcional mais discreto, natural e semelhante ao estado fisiológico. A cirurgia é realizada em ambiente hospitalar, com altíssimo índice de satisfação tanto do paciente quanto de sua parceria.",
		isFlagship: false
	},
	{
		n: "06",
		name: "Reposição de Testosterona",
		short: "Modulação Hormonal Masculina (TRT)",
		desc: "Protocolo individualizado e seguro para deficiência androgênica do envelhecimento (andropausa).",
		technicalDesc: "A terapia de reposição de testosterona (TRT) é indicada para homens diagnosticados com Deficiência Androgênica do Envelhecimento Masculino (DAEM), popularmente conhecida como andropausa. Sob supervisão cuidadosa, o protocolo inicia com uma avaliação diagnóstica minuciosa de hormônios e exames metabólicos e cardiovasculares. A reposição pode ser feita por via transdérmica (géis aplicados na pele) ou injetável de curta ou longa duração. O monitoramento clínico regular garante a segurança prostática, cardiovascular e a melhora significativa da disposição, libido, cognição e composição corporal.",
		isFlagship: false
	},
	{
		n: "07",
		name: "Cirurgia Robótica & Uro-Oncologia",
		short: "Tratamento de Próstata e Rim",
		desc: "Procedimentos oncológicos com tecnologia robótica Da Vinci para a máxima preservação funcional.",
		technicalDesc: "A cirurgia robótica representa o padrão ouro no tratamento cirúrgico de tumores de próstata (prostatectomia radical) e tumores renais. Utilizando o sistema robótico Da Vinci, o Dr. Giuliano Aita realiza incisões milimétricas com visão tridimensional ampliada em alta definição e instrumentos articulados de extrema precisão. Isso resulta em menor perda sanguínea, menos dor pós-operatória, menor tempo de internação e, principalmente, uma recuperação significativamente mais rápida do controle urinário e da função erétil.",
		isFlagship: false
	},
	{
		n: "08",
		name: "Fisioterapia Pélvica & Emsella",
		short: "Tratamento de Incontinência Masculina",
		desc: "Estimulação eletromagnética de alta intensidade para reabilitação do assoalho pélvico.",
		technicalDesc: "A reabilitação pélvica moderna combina fisioterapia especializada a tecnologias de vanguarda, como a cadeira Emsella, que utiliza energia eletromagnética focada de alta intensidade (HIFEM) para estimular milhares de contrações supramáximas nos músculos do assoalho pélvico. É uma abordagem totalmente não invasiva, realizada com o paciente vestido, ideal para o tratamento e prevenção da incontinência urinária masculina (comum após cirurgias de próstata), além de atuar como coadjuvante no tratamento de dores pélvicas crônicas e disfunções sexuais.",
		isFlagship: false
	}
];
function TratamentosPage() {
	const [selectedTreatment, setSelectedTreatment] = import_react.useState(null);
	const flagshipTreatments = treatmentsData.filter((t) => t.isFlagship);
	const secondaryTreatments = treatmentsData.filter((t) => !t.isFlagship);
	const handleWhatsappRedirect = (treatmentName) => {
		const message = encodeURIComponent(`Olá, gostaria de saber mais informações técnicas e agendar uma consulta sobre o procedimento: ${treatmentName}.`);
		window.open(`https://wa.me/551130000000?text=${message}`, "_blank");
	};
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
								children: "Portfólio de Procedimentos"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight mb-8",
							children: ["Tratamentos & ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic font-normal",
								children: "Especialidades"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-base md:text-lg text-ink/75 leading-relaxed font-light",
							children: "Soluções urológicas e andrológicas de última geração conduzidas com absoluto rigor científico e privacidade. Clique em \"Saiba Mais\" em qualquer procedimento para consultar a descrição técnica detalhada e agendar sua avaliação."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mb-24 md:mb-32",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between border-b border-border pb-6 mb-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] uppercase tracking-[0.28em] text-brass font-semibold block mb-1",
							children: "Alta Prioridade"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-serif text-2xl md:text-3xl font-medium text-ink",
							children: ["Procedimentos ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic font-normal",
								children: "Carros-chefe"
							})]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hidden sm:flex gap-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-ink/40 italic",
								children: "Arraste para navegar"
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative px-4 -mx-4 md:px-0 md:mx-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Carousel, {
							opts: {
								align: "start",
								loop: false
							},
							className: "w-full",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselContent, {
									className: "-ml-6",
									children: flagshipTreatments.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselItem, {
										className: "pl-6 md:basis-1/2 lg:basis-1/3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
											className: "bg-bone-soft/30 border border-border/60 hover:border-brass/40 rounded-lg p-6 h-full flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-md",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "overflow-hidden aspect-[4/3] rounded-md mb-6 relative",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
														src: t.image,
														alt: t.name,
														className: "w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 img-fade-b",
														loading: "lazy"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "absolute top-4 right-4 bg-ink/90 text-brass-soft font-serif text-sm italic px-2.5 py-1 rounded",
														children: t.n
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[9px] uppercase tracking-[0.28em] text-brass font-bold mb-2 block",
													children: t.short
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "font-serif text-2xl font-medium mb-3 text-ink",
													children: t.name
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-sm text-ink/70 leading-relaxed font-light mb-8",
													children: t.desc
												})
											] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
												asChild: true,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													onClick: () => setSelectedTreatment(t),
													className: "w-full inline-flex items-center justify-between text-left text-xs uppercase tracking-[0.22em] font-semibold text-brass hover:text-ink transition-colors border-t border-border pt-4 mt-auto cursor-pointer",
													children: ["Saiba Mais", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
												className: "max-w-2xl bg-bone text-ink border-border shadow-2xl p-8 rounded-lg",
												children: selectedTreatment && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
														className: "mb-6",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-center gap-2 mb-2 text-brass uppercase tracking-[0.28em] text-[10px] font-bold",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: selectedTreatment.short })]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
															className: "font-serif text-3xl font-medium text-ink",
															children: selectedTreatment.name
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
														className: "text-ink/80 text-base leading-relaxed font-light mb-8",
														children: selectedTreatment.technicalDesc
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex flex-col sm:flex-row gap-4 border-t border-border pt-6",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
															onClick: () => handleWhatsappRedirect(selectedTreatment.name),
															className: "flex-1 bg-ink text-bone hover:bg-brass text-center py-4 px-6 text-xs tracking-[0.22em] uppercase font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer",
															children: ["Agendar Avaliação", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															onClick: () => window.open("/contato", "_self"),
															className: "flex-1 ring-1 ring-ink/20 hover:ring-brass text-center py-4 px-6 text-xs tracking-[0.22em] uppercase font-semibold text-ink hover:text-brass transition-all cursor-pointer",
															children: "Pré-Qualificação Completa"
														})]
													})
												] })
											})] })]
										})
									}, t.n))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute top-1/2 -left-4 -translate-y-1/2 hidden md:block",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselPrevious, { className: "bg-bone text-ink hover:bg-bone-soft border-border" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute top-1/2 -right-4 -translate-y-1/2 hidden md:block",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselNext, { className: "bg-bone text-ink hover:bg-bone-soft border-border" })
								})
							]
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-b border-border pb-6 mb-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px] uppercase tracking-[0.28em] text-brass font-semibold block mb-1",
						children: "Especialidades Clínicas"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-serif text-2xl md:text-3xl font-medium text-ink",
						children: ["Demais ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic font-normal",
							children: "Procedimentos & Consultas"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
					children: secondaryTreatments.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "bg-bone-soft/10 border border-border/40 hover:border-brass/30 rounded-lg p-6 flex flex-col justify-between transition-all duration-300 shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 mb-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-serif text-brass text-lg italic",
										children: t.n
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-border/50" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "size-3.5 text-brass" })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-serif text-xl font-medium mb-2 text-ink",
								children: t.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[9px] uppercase tracking-[0.22em] text-ink/50 block mb-4",
								children: t.short
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-ink/70 leading-relaxed font-light mb-6",
								children: t.desc
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setSelectedTreatment(t),
								className: "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brass hover:text-ink transition-colors cursor-pointer border-t border-border/40 pt-4 w-full justify-between",
								children: ["Saiba Mais", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
							className: "max-w-2xl bg-bone text-ink border-border shadow-2xl p-8 rounded-lg",
							children: selectedTreatment && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
									className: "mb-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 mb-2 text-brass uppercase tracking-[0.28em] text-[10px] font-bold",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrainCircuit, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: selectedTreatment.short })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
										className: "font-serif text-3xl font-medium text-ink",
										children: selectedTreatment.name
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
									className: "text-ink/80 text-base leading-relaxed font-light mb-8",
									children: selectedTreatment.technicalDesc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col sm:flex-row gap-4 border-t border-border pt-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => handleWhatsappRedirect(selectedTreatment.name),
										className: "flex-1 bg-ink text-bone hover:bg-brass text-center py-4 px-6 text-xs tracking-[0.22em] uppercase font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer",
										children: ["Agendar Avaliação", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => window.open("/contato", "_self"),
										className: "flex-1 ring-1 ring-ink/20 hover:ring-brass text-center py-4 px-6 text-xs tracking-[0.22em] uppercase font-semibold text-ink hover:text-brass transition-all cursor-pointer",
										children: "Pré-Qualificação Completa"
									})]
								})
							] })
						})] })]
					}, t.n))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-20 p-6 md:p-8 bg-bone-soft/30 border border-border rounded-lg flex flex-col md:flex-row gap-6 items-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "size-6 text-brass shrink-0 mt-1" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "font-serif text-lg font-medium text-ink mb-2",
						children: "Responsabilidade Clínica"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-ink/75 leading-relaxed font-light",
						children: "Todas as informações contidas nesta página são puramente de caráter informativo e educativo. A indicação de qualquer tratamento cirúrgico, medicamentoso ou ambulatorial depende obrigatoriamente de consulta médica presencial individualizada e avaliação diagnóstica detalhada pelo Dr. Giuliano Aita, em conformidade com as diretrizes do Conselho Federal de Medicina (CFM)."
					})] })]
				})
			]
		})
	});
}
//#endregion
export { TratamentosPage as component };
