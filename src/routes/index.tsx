import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2, Shield, Award, Microscope } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import heroPortrait from "@/assets/dr-aita-hero-transparent.png";
import portraitBio from "@/assets/dr-aita-bio-transparent.png";
import clinicFacade from "@/assets/clinic-facade.jpg";
import clinicEntrance from "@/assets/clinic-entrance.jpg";
import clinicProcedure from "@/assets/clinic-procedure.jpg";
import clinicConsult from "@/assets/clinic-consult.jpg";
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

// Hook para detectar elementos visíveis (scroll animations)
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function Index() {
  return (
    <div className="bg-background text-foreground font-sans antialiased selection:bg-brass/25 selection:text-ink">
      <Hero />
      <Marquee />
      <HomeTreatments />
      <HomeBio />
      <HomeClinic />
      <HomeStats />
      <HomeCTA />
    </div>
  );
}

function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-bone via-bone to-bone-soft/60 min-h-[92vh] flex items-center">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIgZmlsbD0iIzNkMzYyMiIvPjwvc3ZnPg==')] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 md:py-0 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-0 items-center w-full">
        {/* Text column */}
        <div
          className="md:col-span-6 pb-0 md:pb-16 z-10"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.9s ease, transform 0.9s ease",
          }}
        >
          <div className="flex items-center gap-3 mb-7">
            <span className="h-px w-10 bg-brass" />
            <span className="font-serif italic text-brass text-sm md:text-base tracking-wide">
              Urologia Avançada & Andrologia
            </span>
          </div>
          <h1 className="font-serif text-[2.6rem] sm:text-5xl md:text-[4.8rem] leading-[1.04] tracking-[-0.025em] font-medium mb-8 max-w-[18ch]">
            Excelência urológica com{" "}
            <span className="italic font-normal text-brass/90">discrição</span>{" "}
            e precisão absoluta.
          </h1>
          <p className="text-base md:text-lg text-ink/70 leading-relaxed max-w-[48ch] text-pretty mb-10 font-light">
            Centro de referência em saúde masculina sob coordenação do Dr. Giuliano Aita — especialista com atuação nos maiores hospitais do Brasil e reconhecimento científico internacional.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <Link
              to="/contato"
              id="hero-cta-agendar"
              className="group inline-flex items-center gap-3 bg-ink text-bone px-7 py-4 text-xs tracking-[0.22em] uppercase hover:bg-brass transition-colors duration-500"
            >
              Agendar Consulta
              <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              to="/sobre"
              id="hero-cta-conhecer"
              className="text-xs tracking-[0.22em] uppercase text-ink/65 hover:text-brass border-b border-ink/20 hover:border-brass pb-1 transition-colors duration-300"
            >
              Conheça o Dr. Aita
            </Link>
          </div>
        </div>

        {/* Photo column */}
        <div className="md:col-span-6 self-stretch flex justify-center md:justify-end items-end">
          <div
            className="relative w-full max-w-[480px] md:max-w-none md:w-[108%] md:-mr-[8%] lg:w-[115%] lg:-mr-[10%]"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateX(0)" : "translateX(40px)",
              transition: "opacity 1.1s ease 0.15s, transform 1.1s ease 0.15s",
            }}
          >
            <img
              src={heroPortrait}
              alt="Dr. Giuliano Aita — Urologista e Andrologista"
              className="w-full h-auto object-cover object-top max-h-[85vh] md:max-h-[92vh]"
              style={{ objectPosition: "50% 15%" }}
              loading="eager"
            />
            {/* Credencial badge */}
            <div className="absolute bottom-6 left-6 bg-ink/90 backdrop-blur-sm text-bone px-4 py-2.5 rounded flex items-center gap-2">
              <Shield className="size-3.5 text-brass shrink-0" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium">CRM Verificado · SP & PI</span>
            </div>
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
    "Hospital Sírio-Libanês",
    "Vila Nova Star · SP",
  ];
  return (
    <div className="border-y border-border bg-ink py-4 overflow-hidden">
      <div className="flex items-center gap-x-10 text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-bone/50 font-medium whitespace-nowrap animate-marquee-slow">
        {[...items, ...items].map((i, idx) => (
          <span key={idx} className="flex items-center gap-10 shrink-0">
            <span className="size-1 rounded-full bg-brass/60 shrink-0" />
            {i}
          </span>
        ))}
      </div>
    </div>
  );
}

function HomeTreatments() {
  const { ref, inView } = useInView();
  const primaryTreatments = [
    {
      n: "01",
      name: "UroFill®",
      short: "Estética Íntima Masculina",
      desc: "Única técnica patenteada internacionalmente para engrossamento peniano, realizada com segurança e total privacidade em ambiente clínico de alto padrão.",
      image: treatmentUrofill,
      icon: Microscope,
    },
    {
      n: "02",
      name: "Rezum",
      short: "Hiperplasia Prostática Benigna",
      desc: "Tratamento minimamente invasivo com vapor d'água para HPB. Tecnologia de vanguarda que preserva integralmente a função erétil e ejaculatória.",
      image: treatmentRezum,
      icon: Shield,
    },
    {
      n: "03",
      name: "Ondas de Choque",
      short: "Terapia Vascular Peniana",
      desc: "Procedimento ambulatorial não-invasivo para estimulação vascular e restauração da potência erétil espontânea. Sem cirurgia, sem internação.",
      image: treatmentShockwave,
      icon: Award,
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-bone-soft/15 border-b border-border" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div
          className="flex flex-col md:flex-row md:items-end md:justify-between border-b border-border pb-10 mb-14"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <div>
            <span className="text-[11px] tracking-[0.28em] uppercase text-brass font-medium mb-3 block">
              Especialidades Médicas
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-medium leading-none tracking-tight">
              Procedimentos de <span className="italic font-normal">Vanguarda</span>
            </h2>
          </div>
          <Link
            to="/tratamentos"
            id="treatments-ver-portfolio"
            className="text-[11px] uppercase tracking-[0.22em] text-ink/70 hover:text-brass border-b border-ink/20 hover:border-brass pb-1 self-start md:self-end mt-4 md:mt-0 inline-flex items-center gap-2 transition-colors duration-300"
          >
            Ver portfólio completo <ArrowUpRight className="size-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {primaryTreatments.map((t, idx) => (
            <article
              key={t.n}
              className="group flex flex-col"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(32px)",
                transition: `opacity 0.7s ease ${idx * 0.15}s, transform 0.7s ease ${idx * 0.15}s`,
              }}
            >
              <div className="overflow-hidden aspect-[4/3] mb-6 relative">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="flex-1 flex flex-col">
                <div className="flex items-baseline justify-between mb-4">
                  <span className="font-serif italic text-xl text-brass">{t.n}.</span>
                  <span className="text-[9px] uppercase tracking-[0.28em] text-ink/45">
                    {t.short}
                  </span>
                </div>
                <h3 className="font-serif text-2xl mb-4 font-medium tracking-tight text-ink group-hover:text-brass transition-colors duration-300">
                  {t.name}
                </h3>
                <p className="text-sm text-ink/65 leading-relaxed mb-6 font-light flex-1">
                  {t.desc}
                </p>
                <Link
                  to="/tratamentos"
                  className="text-[10px] uppercase tracking-[0.22em] font-semibold text-brass inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
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
  const { ref, inView } = useInView();

  return (
    <section className="pt-24 md:pt-32 pb-0 bg-bone border-b border-border overflow-hidden" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
        {/* Photo */}
        <div
          className="md:col-span-5 self-end flex justify-center items-end"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0)" : "translateX(-40px)",
            transition: "opacity 0.9s ease 0.1s, transform 0.9s ease 0.1s",
          }}
        >
          <div className="relative w-full max-w-[460px] md:max-w-none">
            <img
              src={portraitBio}
              alt="Dr. Giuliano Aita — Urologista"
              className="w-full h-auto object-cover object-top max-h-[600px] md:max-h-[680px]"
              style={{ objectPosition: "50% 10%" }}
              loading="lazy"
            />
          </div>
        </div>

        {/* Text */}
        <div
          className="md:col-span-7 pb-24 md:pb-32"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(32px)",
            transition: "opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s",
          }}
        >
          <span className="text-[11px] tracking-[0.28em] uppercase text-brass font-medium mb-3 block">
            Corpo Clínico
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-medium leading-[1.1] mb-6 tracking-tight">
            Conheça o Dr.{" "}
            <span className="italic font-normal">Giuliano Aita</span>
          </h2>
          <blockquote className="font-serif text-lg md:text-xl italic text-ink/80 leading-relaxed mb-6 border-l-2 border-brass pl-5 py-1">
            "Aliamos inovação tecnológica a um atendimento empático, ético e focado na privacidade integral de cada paciente."
          </blockquote>
          <p className="text-sm md:text-base text-ink/70 leading-relaxed mb-8 font-light max-w-[58ch]">
            Doutor em Ciências pelo AC Camargo Cancer Center, o Dr. Giuliano Aita é urologista e andrologista de referência no Brasil, com mais de 20 anos de experiência. Integra o corpo clínico do Hospital Sírio-Libanês e Vila Nova Star em São Paulo. Membro de sociedades médicas internacionais e conferencista em congressos ao redor do mundo.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {[
              "Doutor em Urologia — AC Camargo Cancer Center",
              "Membro Titular da SBU (Soc. Brasileira de Urologia)",
              "Membro da International Society for Sexual Medicine",
              "Coordenação Nacional da ABEMSS (Biênio 2018-2020)",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 text-xs text-ink/80 font-light">
                <CheckCircle2 className="size-4 text-brass shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <Link
            to="/sobre"
            id="bio-ver-trajetoria"
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
  const { ref, inView } = useInView();

  const clinicImages = [
    { src: clinicFacade, label: "Uroclin · Teresina", caption: "Fachada da clínica" },
    { src: clinicEntrance, label: "Giuliano Aita · Urologia", caption: "Entrada exclusiva" },
    { src: clinicProcedure, label: "Sala de Procedimentos", caption: "Equipamentos de ponta" },
    { src: clinicConsult, label: "Consultório Privativo", caption: "Ambiente reservado" },
  ];

  return (
    <section className="py-24 md:py-32 bg-bone-soft/10 border-b border-border" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div
          className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end mb-14"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <div className="md:col-span-7">
            <span className="text-[11px] tracking-[0.28em] uppercase text-brass font-medium mb-3 block">
              Espaços de Atendimento
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-medium leading-[1.1] tracking-tight">
              Uma estrutura de{" "}
              <span className="italic font-normal text-brass">excelência</span>{" "}
              em duas capitais.
            </h2>
          </div>
          <div className="md:col-span-5 md:pl-8 md:border-l border-border/70">
            <p className="text-sm text-ink/65 leading-relaxed font-light">
              Consultório boutique em São Paulo e sede completa em Teresina — ambos projetados para oferecer sigilo, conforto e a mais avançada estrutura diagnóstica.
            </p>
          </div>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-10">
          {clinicImages.map((img, idx) => (
            <div
              key={img.label}
              className="group relative overflow-hidden aspect-[3/4] bg-ink"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(28px)",
                transition: `opacity 0.7s ease ${idx * 0.1}s, transform 0.7s ease ${idx * 0.1}s`,
              }}
            >
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent flex flex-col justify-end p-4">
                <span className="text-[8px] uppercase tracking-[0.22em] text-brass-soft mb-1 block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {img.caption}
                </span>
                <p className="text-bone text-xs font-serif font-medium leading-tight">{img.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Unidades cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {[
            {
              city: "São Paulo · SP",
              tag: "Unidade Premium",
              detail: "Vila Olímpia Prime Offices (Instituto Giuliano Aita) — entrada discreta, consultório privativo, estacionamento com manobrista.",
            },
            {
              city: "Teresina · PI",
              tag: "Sede Referência",
              detail: "Uroclin Teresina — clínica integrada, sala de procedimentos ambulatoriais e fisioterapia pélvica.",
            },
          ].map((u, idx) => (
            <div
              key={u.city}
              className="border border-border hover:border-brass/40 p-6 md:p-8 transition-colors duration-300 group"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.7s ease ${0.4 + idx * 0.1}s, transform 0.7s ease ${0.4 + idx * 0.1}s`,
              }}
            >
              <span className="text-[9px] uppercase tracking-[0.28em] text-brass font-medium block mb-2">{u.tag}</span>
              <h3 className="font-serif text-2xl font-medium text-ink mb-2 group-hover:text-brass transition-colors duration-300">{u.city}</h3>
              <p className="text-xs text-ink/65 leading-relaxed font-light">{u.detail}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/clinica"
            id="clinic-ver-detalhes"
            className="text-[11px] uppercase tracking-[0.22em] text-ink/75 hover:text-brass border-b border-ink/20 hover:border-brass pb-1 inline-flex items-center gap-2 transition-colors duration-300"
          >
            Ver fotos e detalhes dos consultórios <ArrowUpRight className="size-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function HomeStats() {
  const { ref, inView } = useInView();
  const stats = [
    { value: "20+", label: "Anos de Experiência", desc: "Dedicados à urologia e medicina sexual." },
    { value: "10k+", label: "Pacientes Atendidos", desc: "Casos clínicos e cirúrgicos com excelência." },
    { value: "50+", label: "Publicações", desc: "Produção científica nacional e internacional." },
    { value: "2", label: "Capitais de Atendimento", desc: "São Paulo e Teresina, com o mesmo padrão." },
  ];

  return (
    <section className="py-20 md:py-28 bg-ink text-bone border-b border-border/20" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((s, idx) => (
            <div
              key={s.label}
              className="text-center md:text-left"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.7s ease ${idx * 0.12}s, transform 0.7s ease ${idx * 0.12}s`,
              }}
            >
              <div className="font-serif text-4xl md:text-5xl text-brass mb-2 font-medium tracking-tight">
                {s.value}
              </div>
              <div className="text-[10px] uppercase tracking-[0.22em] font-semibold text-bone/90 mb-1">
                {s.label}
              </div>
              <p className="text-xs text-bone/45 leading-relaxed font-light">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeCTA() {
  const { ref, inView } = useInView();

  return (
    <section className="py-28 md:py-36 bg-bone text-ink text-center relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(180,160,100,0.08)_0%,transparent_65%)] pointer-events-none" />
      <div
        className="max-w-screen-md mx-auto px-6 relative z-10"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(28px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        <span className="text-[11px] tracking-[0.28em] uppercase text-brass font-medium mb-4 block">
          Agendamento Privativo
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-medium leading-[1.1] mb-6 tracking-tight">
          Segurança, discrição e{" "}
          <span className="italic font-normal">excelência</span>{" "}
          em saúde masculina.
        </h2>
        <p className="text-ink/60 text-sm md:text-base leading-relaxed mb-10 max-w-[48ch] mx-auto font-light">
          Agende sua avaliação presencial em São Paulo ou Teresina, ou realize uma consulta por telemedicina com total privacidade e acompanhamento individualizado.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contato"
            id="cta-pre-qualificacao"
            className="group inline-flex items-center justify-center gap-3 bg-ink text-bone px-8 py-4 text-xs tracking-[0.22em] uppercase hover:bg-brass transition-colors duration-500"
          >
            Iniciar Pré-Qualificação
            <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </Link>
          <Link
            to="/clinica"
            id="cta-ver-clinica"
            className="inline-flex items-center justify-center gap-2 border border-ink/25 text-ink px-8 py-4 text-xs tracking-[0.22em] uppercase hover:border-brass hover:text-brass transition-colors duration-300"
          >
            Conhecer a Clínica
          </Link>
        </div>
      </div>
    </section>
  );
}
