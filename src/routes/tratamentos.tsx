import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";
import { ArrowUpRight, Activity, Sparkles, BrainCircuit, ShieldAlert } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import treatmentUrofill from "@/assets/treatment-urofill.jpg";
import treatmentRezum from "@/assets/treatment-rezum.jpg";
import treatmentShockwave from "@/assets/treatment-shockwave.jpg";
import portraitBio from "@/assets/hero-2.jpg"; // fallback or detail image

export const Route = createFileRoute("/tratamentos")({
  head: () => ({
    meta: [
      { title: "Tratamentos & Especialidades — Dr. Giuliano Aita" },
      { name: "description", content: "Conheça os procedimentos avançados do Dr. Giuliano Aita: UroFill®, Rezum, Ondas de Choque, implantes penianos e reposição hormonal masculina." },
    ],
  }),
  component: TratamentosPage,
});

interface Treatment {
  n: string;
  name: string;
  short: string;
  desc: string;
  technicalDesc: string;
  image?: string;
  isFlagship: boolean;
}

const treatmentsData: Treatment[] = [
  {
    n: "01",
    name: "UroFill®",
    short: "Preenchimento / Estética Íntima",
    desc: "Técnica patenteada para engrossamento peniano estético e funcional com ácido hialurônico, realizada em consultório.",
    technicalDesc: "UroFill® é o novo método inovador que oferece aumento do diâmetro do pênis com a utilização de um preenchedor dérmico próprio não-cirúrgico. O resultado é funcional, cosmeticamente atraente e duradouro. Essa técnica patenteada é ao mesmo tempo segura e eficiente. Os fornecedores do UroFill® são urologistas aprovados a treinamentos abrangentes que levam a resultados seguros, previsíveis e de grande êxito. Somente os fornecedores do UroFill® têm a permissão de fazer esse procedimento de aumento do diâmetro peniano no próprio consultório.",
    image: treatmentUrofill,
    isFlagship: true,
  },
  {
    n: "02",
    name: "Rezum",
    short: "Terapia de Próstata a Vapor",
    desc: "Procedimento térmico inovador e minimamente invasivo com vapor d'água para hiperplasia prostática benigna (HPB).",
    technicalDesc: "O Rezum é um tratamento inovador e minimamente invasivo, utilizado para reduzir os sintomas da hiperplasia prostática benigna (HPB), uma condição que afeta a próstata, resultando em seu aumento e causando problemas urinários. A técnica utiliza vapor de água para destruir o tecido prostático em excesso. O procedimento dura cerca de 30 minutos e é realizado em consultório, sob anestesia local. Benefícios: Minimamente invasivo, não requer internação; Preserva a função sexual; Recuperação rápida; Resultados duradouros.",
    image: treatmentRezum,
    isFlagship: true,
  },
  {
    n: "03",
    name: "Ondas de Choque",
    short: "Reabilitação Vascular Peniana",
    desc: "Terapia com ondas acústicas de baixa intensidade de consultório para estimulação vascular da ereção.",
    technicalDesc: "O tratamento com a aplicação de ondas de choque de baixa intensidade tem o potencial de melhorar a espontaneidade das ereções, assim como o suprimento sanguíneo do tecido erétil do pênis. Ele não envolve a utilização de nenhum produto farmacêutico, não provoca efeitos colaterais e nem afeta outros órgãos. Vantagens: não é invasivo, é totalmente indolor e não requer nenhum tipo de preparação, sedação ou anestesia. Tem um alto índice de sucesso, com mais de 70% dos pacientes satisfeitos, e é 100% seguro.",
    image: treatmentShockwave,
    isFlagship: true,
  },
  {
    n: "04",
    name: "Injeção Peniana",
    short: "Terapia Farmacológica Autônoma",
    desc: "Combinação personalizada de medicamentos vasoativos para aplicação imediata e controlada.",
    technicalDesc: "A farmacoterapia intracavernosa popularizou-se como alternativa eficiente e segura no tratamento da disfunção erétil. Está associada a um alto índice de sucesso, sendo efetiva em proporcionar ereções rígidas em cerca de 89% dos homens. Nós utilizamos preferencialmente a combinação de dois ou três medicamentos (bimix e trimix), o que aumenta o índice de sucesso por meio de um sinergismo de ação pró-ereção, ao mesmo tempo que se consegue reduzir os efeitos colaterais. O paciente recebe treinamento detalhado em consultório.",
    isFlagship: false,
  },
  {
    n: "05",
    name: "Implante Peniano",
    short: "Prótese Peniana Maleável e Inflável",
    desc: "Tratamento cirúrgico de alta satisfação para disfunção erétil refratária.",
    technicalDesc: "A cirurgia de implante peniano é o tratamento de escolha para os homens com disfunção erétil refratária ao tratamento conservador com medicamentos ou que desejam uma solução definitiva para o problema. Há dois tipos principais de implantes penianos: o maleável (semirrígido) e o inflável. As próteses infláveis estão associadas a um melhor aspecto cosmético final no seu estado de flacidez e de ereção. Os implantes maleáveis mantêm o pênis em um único estado e representam uma alternativa de excelente custo-benefício. A cirurgia é feita em ambiente hospitalar com índices de satisfação superiores a 90%.",
    isFlagship: false,
  },
  {
    n: "06",
    name: "Reposição de Testosterona",
    short: "Modulação Hormonal Masculina (TRT)",
    desc: "Protocolo individualizado e seguro para deficiência androgênica do envelhecimento (andropausa).",
    technicalDesc: "Níveis reduzidos de testosterona representam um fator de risco cardiovascular, além de afetar a libido, energia e qualidade de vida. A maioria dos estudos científicos associa a terapia de reposição com testosterona a um risco menor ou neutro de eventos cardiovasculares. O tratamento é indicado mediante rigorosa triagem diagnóstica e acompanhamento continuado, devolvendo vitalidade e disposição ao paciente de forma segura.",
    isFlagship: false,
  },
  {
    n: "07",
    name: "Cirurgia Robótica & Uro-Oncologia",
    short: "Tratamento de Próstata e Rim",
    desc: "Procedimentos oncológicos com tecnologia robótica Da Vinci para a máxima preservação funcional.",
    technicalDesc: "A cirurgia robótica representa o padrão ouro no tratamento cirúrgico de tumores de próstata (prostatectomia radical) e tumores renais. Utilizando o sistema robótico Da Vinci, o Dr. Giuliano Aita realiza incisões milimétricas com visão tridimensional ampliada em alta definição e instrumentos articulados de extrema precisão. Isso resulta em menor perda sanguínea, menos dor pós-operatória, menor tempo de internação e, principalmente, uma recuperação significativamente mais rápida do controle urinário e da função erétil.",
    isFlagship: false,
  },
  {
    n: "08",
    name: "Fisioterapia Pélvica & Emsella",
    short: "Tratamento de Incontinência Masculina",
    desc: "Estimulação eletromagnética de alta intensidade para reabilitação do assoalho pélvico.",
    technicalDesc: "A incontinência urinária, além de ser desconfortável, pode impactar a autoestima, a vida social e até os relacionamentos íntimos. A cadeira Emsella utiliza energia eletromagnética focada de alta intensidade (HIFEM) para estimular milhares de contrações supramáximas nos músculos do assoalho pélvico. É uma abordagem totalmente não invasiva, realizada com o paciente vestido, ideal para o tratamento e prevenção da incontinência urinária masculina, além de atuar como coadjuvante no tratamento de dores pélvicas crônicas e disfunções sexuais.",
    isFlagship: false,
  },
];

function TratamentosPage() {
  const [selectedTreatment, setSelectedTreatment] = React.useState<Treatment | null>(null);

  const flagshipTreatments = treatmentsData.filter((t) => t.isFlagship);
  const secondaryTreatments = treatmentsData.filter((t) => !t.isFlagship);

  const handleWhatsappRedirect = (treatmentName: string) => {
    const message = encodeURIComponent(
      `Olá, gostaria de saber mais informações técnicas e agendar uma consulta sobre o procedimento: ${treatmentName}.`
    );
    window.open(`https://wa.me/5511971663688?text=${message}`, "_blank");
  };

  return (
    <div className="bg-background text-foreground font-sans min-h-screen py-16 md:py-24 selection:bg-brass/25 selection:text-ink">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        
        {/* Header */}
        <header className="max-w-3xl mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-brass" />
            <span className="font-serif italic text-brass text-sm md:text-base">
              Portfólio de Procedimentos
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight mb-8">
            Tratamentos & <span className="italic font-normal">Especialidades</span>
          </h1>
          <p className="text-base md:text-lg text-ink/75 leading-relaxed font-light">
            Soluções urológicas e andrológicas de última geração conduzidas com absoluto rigor científico e privacidade. Clique em &quot;Saiba Mais&quot; em qualquer procedimento para consultar a descrição técnica detalhada e agendar sua avaliação.
          </p>
        </header>

        {/* SECTION 1: Carros-chefe (Carousel) */}
        <section className="mb-24 md:mb-32">
          <div className="flex items-center justify-between border-b border-border pb-6 mb-10">
            <div>
              <span className="text-[10px] uppercase tracking-[0.28em] text-brass font-semibold block mb-1">
                Alta Prioridade
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-medium text-ink">
                Procedimentos <span className="italic font-normal">Carros-chefe</span>
              </h2>
            </div>
            <div className="hidden sm:flex gap-2">
              <span className="text-xs text-ink/40 italic">Arraste para navegar</span>
            </div>
          </div>

          <div className="relative px-4 -mx-4 md:px-0 md:mx-0">
            <Carousel opts={{ align: "start", loop: false }} className="w-full">
              <CarouselContent className="-ml-6">
                {flagshipTreatments.map((t) => (
                  <CarouselItem key={t.n} className="pl-6 md:basis-1/2 lg:basis-1/3">
                    <article className="bg-bone-soft/30 border border-border/60 hover:border-brass/40 rounded-lg p-6 h-full flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-md">
                      <div>
                        <div className="overflow-hidden aspect-[4/3] rounded-md mb-6 relative">
                          <img
                            src={t.image}
                            alt={t.name}
                            className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 img-fade-b"
                            loading="lazy"
                          />
                          <span className="absolute top-4 right-4 bg-ink/90 text-brass-soft font-serif text-sm italic px-2.5 py-1 rounded">
                            {t.n}
                          </span>
                        </div>
                        <span className="text-[9px] uppercase tracking-[0.28em] text-brass font-bold mb-2 block">
                          {t.short}
                        </span>
                        <h3 className="font-serif text-2xl font-medium mb-3 text-ink">
                          {t.name}
                        </h3>
                        <p className="text-sm text-ink/70 leading-relaxed font-light mb-8">
                          {t.desc}
                        </p>
                      </div>

                      <Dialog>
                        <DialogTrigger asChild>
                          <button
                            onClick={() => setSelectedTreatment(t)}
                            className="w-full inline-flex items-center justify-between text-left text-xs uppercase tracking-[0.22em] font-semibold text-brass hover:text-ink transition-colors border-t border-border pt-4 mt-auto cursor-pointer"
                          >
                            Saiba Mais
                            <ArrowUpRight className="size-4" />
                          </button>
                        </DialogTrigger>
                        <DialogContent className="w-[92vw] sm:w-full max-w-2xl bg-bone text-ink border-border shadow-2xl p-8 rounded-lg">
                          {selectedTreatment && (
                            <>
                              <DialogHeader className="mb-6">
                                <div className="flex items-center gap-2 mb-2 text-brass uppercase tracking-[0.28em] text-[10px] font-bold">
                                  <Sparkles className="size-3.5" />
                                  <span>{selectedTreatment.short}</span>
                                </div>
                                <DialogTitle className="font-serif text-3xl font-medium text-ink">
                                  {selectedTreatment.name}
                                </DialogTitle>
                              </DialogHeader>
                              <DialogDescription className="text-ink/80 text-base leading-relaxed font-light mb-8">
                                {selectedTreatment.technicalDesc}
                              </DialogDescription>
                              <div className="flex flex-col sm:flex-row gap-4 border-t border-border pt-6">
                                <button
                                  onClick={() => handleWhatsappRedirect(selectedTreatment.name)}
                                  className="flex-1 bg-ink text-bone hover:bg-brass text-center py-4 px-6 text-xs tracking-[0.22em] uppercase font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
                                >
                                  Agendar Avaliação
                                  <ArrowUpRight className="size-4" />
                                </button>
                                <button
                                  onClick={() => window.open("/contato", "_self")}
                                  className="flex-1 ring-1 ring-ink/20 hover:ring-brass text-center py-4 px-6 text-xs tracking-[0.22em] uppercase font-semibold text-ink hover:text-brass transition-all cursor-pointer"
                                >
                                  Pré-Qualificação Completa
                                </button>
                              </div>
                            </>
                          )}
                        </DialogContent>
                      </Dialog>
                    </article>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute top-1/2 -left-4 -translate-y-1/2 hidden md:block">
                <CarouselPrevious className="bg-bone text-ink hover:bg-bone-soft border-border" />
              </div>
              <div className="absolute top-1/2 -right-4 -translate-y-1/2 hidden md:block">
                <CarouselNext className="bg-bone text-ink hover:bg-bone-soft border-border" />
              </div>
            </Carousel>
          </div>
        </section>

        {/* SECTION 2: Demais Especialidades */}
        <section>
          <div className="border-b border-border pb-6 mb-10">
            <span className="text-[10px] uppercase tracking-[0.28em] text-brass font-semibold block mb-1">
              Especialidades Clínicas
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-ink">
              Demais <span className="italic font-normal">Procedimentos & Consultas</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {secondaryTreatments.map((t) => (
              <article
                key={t.n}
                className="bg-bone-soft/10 border border-border/40 hover:border-brass/30 rounded-lg p-6 flex flex-col justify-between transition-all duration-300 shadow-sm"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-serif text-brass text-lg italic">{t.n}</span>
                    <span className="h-px flex-1 bg-border/50" />
                    <Activity className="size-3.5 text-brass" />
                  </div>
                  <h3 className="font-serif text-xl font-medium mb-2 text-ink">
                    {t.name}
                  </h3>
                  <span className="text-[9px] uppercase tracking-[0.22em] text-ink/50 block mb-4">
                    {t.short}
                  </span>
                  <p className="text-sm text-ink/70 leading-relaxed font-light mb-6">
                    {t.desc}
                  </p>
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      onClick={() => setSelectedTreatment(t)}
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brass hover:text-ink transition-colors cursor-pointer border-t border-border/40 pt-4 w-full justify-between"
                    >
                      Saiba Mais
                      <ArrowUpRight className="size-3.5" />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="w-[92vw] sm:w-full max-w-2xl bg-bone text-ink border-border shadow-2xl p-8 rounded-lg">
                    {selectedTreatment && (
                      <>
                        <DialogHeader className="mb-6">
                          <div className="flex items-center gap-2 mb-2 text-brass uppercase tracking-[0.28em] text-[10px] font-bold">
                            <BrainCircuit className="size-3.5" />
                            <span>{selectedTreatment.short}</span>
                          </div>
                          <DialogTitle className="font-serif text-3xl font-medium text-ink">
                            {selectedTreatment.name}
                          </DialogTitle>
                        </DialogHeader>
                        <DialogDescription className="text-ink/80 text-base leading-relaxed font-light mb-8">
                          {selectedTreatment.technicalDesc}
                        </DialogDescription>
                        <div className="flex flex-col sm:flex-row gap-4 border-t border-border pt-6">
                          <button
                            onClick={() => handleWhatsappRedirect(selectedTreatment.name)}
                            className="flex-1 bg-ink text-bone hover:bg-brass text-center py-4 px-6 text-xs tracking-[0.22em] uppercase font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
                          >
                            Agendar Avaliação
                            <ArrowUpRight className="size-4" />
                          </button>
                          <button
                            onClick={() => window.open("/contato", "_self")}
                            className="flex-1 ring-1 ring-ink/20 hover:ring-brass text-center py-4 px-6 text-xs tracking-[0.22em] uppercase font-semibold text-ink hover:text-brass transition-all cursor-pointer"
                          >
                            Pré-Qualificação Completa
                          </button>
                        </div>
                      </>
                    )}
                  </DialogContent>
                </Dialog>
              </article>
            ))}
          </div>
        </section>

        {/* Warning / Clinic Standards Disclaimer */}
        <section className="mt-20 p-6 md:p-8 bg-bone-soft/30 border border-border rounded-lg flex flex-col md:flex-row gap-6 items-start">
          <ShieldAlert className="size-6 text-brass shrink-0 mt-1" />
          <div>
            <h4 className="font-serif text-lg font-medium text-ink mb-2">Responsabilidade Clínica</h4>
            <p className="text-xs text-ink/75 leading-relaxed font-light">
              Todas as informações contidas nesta página são puramente de caráter informativo e educativo. A indicação de qualquer tratamento cirúrgico, medicamentoso ou ambulatorial depende obrigatoriamente de consulta médica presencial individualizada e avaliação diagnóstica detalhada pelo Dr. Giuliano Aita, em conformidade com as diretrizes do Conselho Federal de Medicina (CFM).
            </p>
          </div>
        </section>
        
      </div>
    </div>
  );
}
