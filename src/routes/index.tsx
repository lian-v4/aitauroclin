import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

import heroPortrait from "@/assets/FAB_0010.jpg_2K_202607101340.png";
import portraitBio from "@/assets/hero-2-semfundo.png";
import clinic1 from "@/assets/clinic-1.jpg";
import clinic2 from "@/assets/clinic-2.jpg";
import clinic3 from "@/assets/clinic-3.jpg";
import clinic4 from "@/assets/clinic-4.jpg";
import clinic5 from "@/assets/clinic-5.jpg";
import treatmentUrofill from "@/assets/treatment-urofill.jpg";
import treatmentRezum from "@/assets/treatment-rezum.jpg";
import treatmentShockwave from "@/assets/treatment-shockwave.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Giuliano Aita — Urologia de Alta Precisão & Saúde Sexual" },
      { name: "description", content: "Clínica de urologia, andrologia e saúde sexual do homem. Tratamentos avançados UroFill®, Rezum e Ondas de Choque com discrição absoluta." },
      { property: "og:title", content: "Dr. Giuliano Aita — Urologia de Alta Precisão & Saúde Sexual" },
      { property: "og:description", content: "Clínica de urologia, andrologia e saúde sexual do homem. Tratamentos avançados UroFill®, Rezum e Ondas de Choque." },
      { property: "og:image", content: heroPortrait },
      { name: "twitter:image", content: heroPortrait },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background text-foreground font-sans antialiased selection:bg-brass/25 selection:text-ink">
      <Hero />
      <Marquee />
      <HomeTreatments />
      <HomeBio />
      <HomeClinic />
      <HomeNews />
      <HomeCTA />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-bone via-bone to-bone-soft/40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-10 md:pt-20 pb-0 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">
        <div className="md:col-span-6 pb-20 md:pb-28">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-brass" />
            <span className="font-serif italic text-brass text-sm md:text-base">
              Urologia Avançada & Andrologia
            </span>
          </div>
          <h1 className="font-serif text-[2.5rem] sm:text-5xl md:text-[4.5rem] leading-[1.05] tracking-[-0.02em] font-medium mb-8 max-w-[20ch]">
            Urologia de alta precisão pautada pela <span className="italic font-normal">discrição</span>.
          </h1>
          <p className="text-base md:text-lg text-ink/75 leading-relaxed max-w-[50ch] text-pretty mb-10 font-light">
            Centro de excelência médica sob coordenação do Dr. Giuliano Aita. Oferecemos soluções urológicas e andrológicas inovadoras em ambientes planejados para a sua total privacidade.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link
              to="/contato"
              className="group inline-flex items-center gap-3 bg-ink text-bone px-7 py-4 text-xs tracking-[0.22em] uppercase hover:bg-brass transition-colors duration-500"
            >
              Agendar Consulta
              <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              to="/sobre"
              className="text-xs tracking-[0.22em] uppercase text-ink/70 hover:text-brass border-b border-ink/20 hover:border-brass pb-1 transition-colors"
            >
              Conheça o Dr.
            </Link>
          </div>
        </div>
        <div className="md:col-span-6 self-end flex justify-center md:justify-end">
          <div className="relative w-full max-w-[500px] md:max-w-none md:w-[125%] md:-mr-[15%] lg:w-[135%] lg:-mr-[25%]">
            <img
              src={heroPortrait}
              alt="Dr. Giuliano Aita"
              className="w-full h-auto object-contain max-h-[550px] md:max-h-[700px] scale-110 md:scale-125 origin-bottom translate-y-1"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "AC Camargo Cancer Center",
    "ABEMSS · Membro Titular",
    "International Society for Sexual Medicine",
    "American Urological Association",
    "Sociedade Brasileira de Urologia",
  ];
  return (
    <div className="border-y border-border bg-bone-soft/40 py-5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-ink/60 font-medium">
        <span className="text-brass">Formação & Filiações</span>
        {items.map((i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="size-1 rounded-full bg-ink/20" />
            {i}
          </span>
        ))}
      </div>
    </div>
  );
}

function HomeTreatments() {
  const primaryTreatments = [
    {
      n: "01",
      name: "UroFill®",
      short: "Estética Íntima Masculina",
      desc: "Única técnica patenteada internacionalmente para engrossamento peniano, realizada sob anestesia local em ambiente clínico privativo.",
      image: treatmentUrofill,
    },
    {
      n: "02",
      name: "Rezum",
      short: "Hiperplasia Prostática",
      desc: "Tratamento de ponta com vapor d'água para redução benigna da próstata, com preservação da função erétil e ejaculatória.",
      image: treatmentRezum,
    },
    {
      n: "03",
      name: "Ondas de Choque",
      short: "Terapia de Ondas acústicas",
      desc: "Procedimento não invasivo de consultório para estimulação vascular peniana, restaurando a espontaneidade das ereções.",
      image: treatmentShockwave,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-bone-soft/20 border-b border-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between border-b border-border pb-10 mb-12">
          <div>
            <span className="text-[11px] tracking-[0.28em] uppercase text-brass font-medium mb-3 block">
              Especialidades Médicas
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-medium leading-none tracking-tight">
              Procedimentos de <span className="italic">Vanguarda</span>
            </h2>
          </div>
          <Link
            to="/tratamentos"
            className="text-[11px] uppercase tracking-[0.22em] text-ink/75 hover:text-brass border-b border-ink/20 hover:border-brass pb-1 self-start md:self-end mt-4 md:mt-0 inline-flex items-center gap-2"
          >
            Ver portfólio completo <ArrowUpRight className="size-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {primaryTreatments.map((t) => (
            <article key={t.n} className="group flex flex-col">
              <div className="overflow-hidden aspect-[4/3] mb-6">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-all duration-700 img-fade-b"
                  loading="lazy"
                />
              </div>
              <div className="flex-1 flex flex-col">
                <div className="flex items-baseline justify-between mb-4">
                  <span className="font-serif italic text-xl text-brass">{t.n}.</span>
                  <span className="text-[9px] uppercase tracking-[0.28em] text-ink/50">
                    {t.short}
                  </span>
                </div>
                <h3 className="font-serif text-2xl mb-4 font-medium tracking-tight text-ink group-hover:text-brass transition-colors">
                  {t.name}
                </h3>
                <p className="text-sm text-ink/70 leading-relaxed mb-6 font-light flex-1">
                  {t.desc}
                </p>
                <Link
                  to="/tratamentos"
                  className="text-[10px] uppercase tracking-[0.22em] font-medium text-brass inline-flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Saber mais
                  <ArrowUpRight className="size-3" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeBio() {
  return (
    <section className="pt-20 md:pt-28 pb-0 bg-bone border-b border-border overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5 self-end flex justify-center items-end">
          <div className="relative w-full max-w-[480px] md:max-w-none md:w-[125%] md:-ml-[15%] lg:w-[135%] lg:-ml-[25%]">
            <img
              src={portraitBio}
              alt="Dr. Giuliano Aita"
              className="w-full h-auto object-contain max-h-[550px] md:max-h-[700px] scale-110 md:scale-125 origin-bottom translate-y-1"
              loading="lazy"
            />
          </div>
        </div>
        <div className="md:col-span-7 pb-20 md:pb-28">
          <span className="text-[11px] tracking-[0.28em] uppercase text-brass font-medium mb-3 block">
            Corpo Clínico
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-medium leading-[1.1] mb-6 tracking-tight">
            Conheça o Dr. <span className="italic font-normal">Giuliano Aita</span>
          </h2>
          <blockquote className="font-serif text-lg md:text-xl italic text-ink/80 leading-relaxed mb-6 border-l-2 border-brass pl-5 py-1">
            “Aliamos inovação tecnológica a um atendimento empático e focado na privacidade integral do paciente.”
          </blockquote>
          <p className="text-sm md:text-base text-ink/75 leading-relaxed mb-8 font-light max-w-[60ch]">
            Doutor em Ciências pelo AC Camargo Cancer Center, o Dr. Giuliano Aita é urologista e andrologista de referência no país, com ampla atuação em medicina sexual masculina contemporânea. É membro de sociedades de renome internacional e conferencista regular em congressos urológicos.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {[
              "Doutor em Urologia pela USP/AC Camargo",
              "Membro Titular da SBU (Sociedade Br. de Urologia)",
              "Membro da International Society for Sexual Medicine",
              "Diretoria da ABEMSS (Saúde Sexual)",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 text-xs text-ink/80">
                <CheckCircle2 className="size-4 text-brass shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <Link
            to="/sobre"
            className="inline-flex items-center gap-2 bg-ink text-bone px-6 py-3.5 text-[11px] tracking-[0.22em] uppercase hover:bg-brass transition-colors duration-500"
          >
            Ver trajetória completa
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function HomeClinic() {
  return (
    <section className="py-20 md:py-28 bg-bone-soft/10 border-b border-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end mb-12">
          <div className="md:col-span-7">
            <span className="text-[11px] tracking-[0.28em] uppercase text-brass font-medium mb-3 block">
              Espaços de Atendimento
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-medium leading-[1.1] tracking-tight">
              Uma estrutura de <span className="italic font-normal text-brass">excelência</span> em duas capitais.
            </h2>
          </div>
          <div className="md:col-span-5 md:pl-6 md:border-l border-border/80">
            <p className="text-sm text-ink/70 leading-relaxed font-light">
              Oferecemos atendimento sofisticado na Euroclin em Teresina e em consultório privativo em São Paulo, garantindo sofisticação, sigilo e conforto.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="group relative overflow-hidden aspect-[16/10] bg-ink">
            <img
              src={clinic1}
              alt="Consultório São Paulo"
              className="w-full h-full object-cover opacity-80 group-hover:scale-102 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent p-6 md:p-8 flex flex-col justify-end">
              <span className="text-[9px] uppercase tracking-[0.28em] text-brass-soft mb-2 block">Unidade Premium</span>
              <h3 className="font-serif text-2xl text-bone mb-1 font-medium">São Paulo · SP</h3>
              <p className="text-xs text-bone/60 font-light">Edifício Vila Olímpia Corporate</p>
            </div>
          </div>
          <div className="group relative overflow-hidden aspect-[16/10] bg-ink">
            <img
              src={clinic2}
              alt="Euroclin Teresina"
              className="w-full h-full object-cover opacity-80 group-hover:scale-102 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent p-6 md:p-8 flex flex-col justify-end">
              <span className="text-[9px] uppercase tracking-[0.28em] text-brass-soft mb-2 block">Unidade Referência</span>
              <h3 className="font-serif text-2xl text-bone mb-1 font-medium">Teresina · PI</h3>
              <p className="text-xs text-bone/60 font-light">Euroclin Teresina</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/clinica"
            className="text-[11px] uppercase tracking-[0.22em] text-ink/80 hover:text-brass border-b border-ink/20 hover:border-brass pb-1 inline-flex items-center gap-2"
          >
            Ver fotos e detalhes dos consultórios <ArrowUpRight className="size-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function HomeNews() {
  const news = [
    {
      cat: "Reabilitação",
      title: "Tecnologia na fisioterapia pélvica",
      excerpt: "O papel moderno de tratamentos não invasivos para incontinência e saúde pélvica de alta resolução.",
      image: clinic3,
    },
    {
      cat: "Próstata",
      title: "Rezum: tecnologia com vapor d'água para HPB",
      excerpt: "Entenda como o Rezum trata a hiperplasia de próstata preservando a função sexual.",
      image: clinic4,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-bone border-b border-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between border-b border-border pb-10 mb-12">
          <div>
            <span className="text-[11px] tracking-[0.28em] uppercase text-brass font-medium mb-3 block">
              Artigos & Novidades
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-medium leading-none tracking-tight">
              Canal de <span className="italic font-normal">Informação</span>
            </h2>
          </div>
          <Link
            to="/publicacoes"
            className="text-[11px] uppercase tracking-[0.22em] text-ink/75 hover:text-brass border-b border-ink/20 hover:border-brass pb-1 self-start md:self-end mt-4 md:mt-0 inline-flex items-center gap-2"
          >
            Ir para o Blog <ArrowUpRight className="size-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {news.map((n) => (
            <article key={n.title} className="group flex flex-col sm:flex-row gap-6 items-center">
              <div className="aspect-[4/3] w-full sm:w-48 shrink-0 overflow-hidden">
                <img
                  src={n.image}
                  alt={n.title}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="flex-1">
                <span className="text-[9px] uppercase tracking-[0.28em] text-brass mb-2 block">{n.cat}</span>
                <h3 className="font-serif text-xl font-medium leading-snug mb-2 text-ink group-hover:text-brass transition-colors">
                  {n.title}
                </h3>
                <p className="text-xs text-ink/70 leading-relaxed font-light mb-4">
                  {n.excerpt}
                </p>
                <Link
                  to="/publicacoes"
                  className="text-[10px] uppercase tracking-[0.22em] font-medium text-ink/80 hover:text-brass inline-flex items-center gap-2"
                >
                  Ler artigo <ArrowUpRight className="size-3" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeCTA() {
  return (
    <section className="py-20 md:py-28 bg-ink text-bone text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(95,89,70,0.15)_0%,transparent_70%)] pointer-events-none" />
      <div className="max-w-screen-md mx-auto px-6 relative z-10">
        <span className="text-[11px] tracking-[0.28em] uppercase text-brass-soft font-medium mb-4 block">
          Agendamento Privativo
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-medium leading-tight mb-6 tracking-tight">
          Segurança, discrição e excelência em saúde masculina.
        </h2>
        <p className="text-bone/60 text-sm md:text-base leading-relaxed mb-10 max-w-[50ch] mx-auto font-light">
          Agende sua avaliação clínica presencial ou realize uma consulta por telemedicina com total privacidade e acompanhamento individualizado.
        </p>
        <Link
          to="/contato"
          className="group inline-flex items-center gap-3 bg-bone text-ink px-8 py-4 text-xs tracking-[0.22em] uppercase hover:bg-brass-soft hover:text-ink transition-colors duration-500"
        >
          Iniciar Pré-Qualificação
          <ArrowUpRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
