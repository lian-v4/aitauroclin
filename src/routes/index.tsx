import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Phone, MapPin, Instagram } from "lucide-react";

import heroPortrait from "@/assets/hero-3.jpg";
import portraitBio from "@/assets/hero-2.jpg";
import clinic1 from "@/assets/clinic-1.jpg";
import clinic2 from "@/assets/clinic-2.jpg";
import clinic3 from "@/assets/clinic-3.jpg";
import clinic4 from "@/assets/clinic-4.jpg";
import clinic5 from "@/assets/clinic-5.jpg";
import clinic6 from "@/assets/clinic-6.jpg";
import clinic7 from "@/assets/clinic-7.jpg";
import treatmentUrofill from "@/assets/treatment-urofill.jpg";
import treatmentRezum from "@/assets/treatment-rezum.jpg";
import treatmentShockwave from "@/assets/treatment-shockwave.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Giuliano Aita — Urologia & Saúde do Homem" },
      { name: "description", content: "Centro de excelência em urologia, andrologia e saúde sexual masculina. Atendimento de alta precisão pelo Dr. Giuliano Aita em São Paulo." },
      { property: "og:title", content: "Dr. Giuliano Aita — Urologia & Saúde do Homem" },
      { property: "og:description", content: "Centro de excelência em urologia, andrologia e saúde sexual masculina. Atendimento de alta precisão em São Paulo." },
      { property: "og:image", content: heroPortrait },
      { name: "twitter:image", content: heroPortrait },
    ],
  }),
  component: Index,
});

const featuredTreatments = [
  {
    n: "01",
    name: "UroFill®",
    short: "Engrossamento Peniano",
    desc: "Primeira e única técnica patenteada no mundo para engrossamento peniano. Não cirúrgica, segura e comprovada por mais de 10.000 procedimentos.",
    image: treatmentUrofill,
  },
  {
    n: "02",
    name: "Rezum",
    short: "Hiperplasia Prostática",
    desc: "Tratamento minimamente invasivo para a hiperplasia prostática benigna com vapor d'água. Recuperação rápida e preservação da função sexual.",
    image: treatmentRezum,
  },
  {
    n: "03",
    name: "Ondas de Choque",
    short: "Disfunção Erétil",
    desc: "Aplicação de ondas de baixa intensidade que estimulam neovascularização do tecido erétil e devolvem espontaneidade às ereções.",
    image: treatmentShockwave,
  },
];

const secondaryProcedures = [
  {
    n: "04",
    name: "Injeção Peniana",
    desc: "Combinação sinérgica de dois ou três medicamentos vasoativos, aumentando o índice de sucesso e reduzindo efeitos colaterais.",
  },
  {
    n: "05",
    name: "Implante Peniano",
    desc: "Tratamento de escolha para disfunção erétil refratária ou para pacientes que desejam uma solução definitiva e de alta satisfação.",
  },
  {
    n: "06",
    name: "Reposição de Testosterona",
    desc: "Protocolo individualizado para deficiência androgênica, com monitoramento cardiovascular e metabólico contínuo.",
  },
];

const news = [
  {
    date: "31 Mar 2025",
    cat: "Reabilitação",
    title: "Tecnologia na fisioterapia pélvica",
    excerpt:
      "A cadeira EmSella representa uma forma moderna, prática e indolor de tratar a incontinência urinária — devolvendo autoestima e qualidade de vida.",
    image: clinic3,
  },
  {
    date: "28 Mar 2025",
    cat: "Próstata",
    title: "Rezum: minimamente invasivo para HPB",
    excerpt:
      "A Hiperplasia Prostática Benigna afeta milhões de homens acima dos 50. O Rezum oferece alívio sintomático com preservação da função sexual.",
    image: clinic4,
  },
  {
    date: "23 Mar 2025",
    cat: "Andrologia",
    title: "UroFill: revolução segura da estética íntima",
    excerpt:
      "Técnica não cirúrgica patenteada nos EUA desde 2017, utilizada em mais de 10.000 pacientes com ácido hialurônico de grau médico.",
    image: clinic5,
  },
];

const galleryImages = [clinic1, clinic2, clinic7, clinic6, clinic5, clinic4];

function Index() {
  return (
    <div className="bg-background text-foreground font-sans antialiased selection:bg-brass/25 selection:text-ink">
      <Nav />
      <Hero />
      <Marquee />
      <TreatmentsFeatured />
      <ProceduresList />
      <Bio />
      <NewsSection />
      <Gallery />
      <Contact />
      <SiteFooter />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="font-serif text-xl tracking-tight font-medium text-ink leading-none">
          Giuliano <span className="italic text-brass">Aita</span>
          <span className="block text-[9px] font-sans uppercase tracking-[0.28em] text-muted-foreground mt-1">
            Urologia · Saúde Masculina
          </span>
        </a>
        <nav className="hidden md:flex gap-9 items-center text-[11px] tracking-[0.18em] uppercase font-medium text-ink/80">
          <a href="#tratamentos" className="hover:text-brass transition-colors">Tratamentos</a>
          <a href="#especialista" className="hover:text-brass transition-colors">O Especialista</a>
          <a href="#publicacoes" className="hover:text-brass transition-colors">Publicações</a>
          <a href="#clinica" className="hover:text-brass transition-colors">A Clínica</a>
          <a
            href="#contato"
            className="px-5 py-2.5 ring-1 ring-ink/15 hover:ring-brass/60 hover:text-brass transition-colors"
          >
            Agendar Consulta
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 pt-14 md:pt-24 pb-20 md:pb-32 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-end">
        <div className="md:col-span-7 lg:col-span-7">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-10 bg-brass" />
            <span className="font-serif italic text-brass text-base md:text-lg">
              Referência em Saúde Masculina
            </span>
          </div>
          <h1 className="font-serif text-[2.75rem] sm:text-6xl md:text-[5.25rem] leading-[0.95] tracking-[-0.02em] text-balance font-medium mb-10 max-w-[16ch]">
            A excelência médica pautada pela{" "}
            <span className="italic font-normal">discrição</span> e precisão.
          </h1>
          <p className="text-lg md:text-xl text-ink/65 leading-relaxed max-w-[52ch] text-pretty mb-10 font-light">
            Centro de excelência em urologia e saúde sexual, o Dr. Giuliano Aita
            combina rigor acadêmico internacional a um atendimento personalizado
            em ambiente projetado para o conforto absoluto.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="#contato"
              className="group inline-flex items-center gap-3 bg-ink text-bone px-7 py-4 text-xs tracking-[0.22em] uppercase hover:bg-brass transition-colors duration-500"
            >
              Agendar Consulta
              <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#especialista"
              className="text-xs tracking-[0.22em] uppercase text-ink/70 hover:text-brass border-b border-ink/20 hover:border-brass pb-1 transition-colors"
            >
              Conheça o Médico
            </a>
          </div>
        </div>
        <div className="md:col-span-5 lg:col-span-5">
          <figure className="relative">
            <span
              aria-hidden
              className="absolute -left-6 top-8 font-serif italic text-brass/40 text-sm tracking-[0.18em] rotate-[-90deg] origin-top-left hidden md:block"
            >
              Dr. Giuliano Aita · CRM-SP
            </span>
            <img
              src={heroPortrait}
              alt="Dr. Giuliano Aita — urologista"
              className="relative w-full aspect-[4/5] object-cover [object-position:18%_18%] img-fade-radial"
              loading="eager"
            />
          </figure>
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
    <div className="border-y border-border bg-bone-soft/60">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-6 flex flex-wrap items-center gap-x-10 gap-y-3 text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-ink/55 font-medium">
        <span className="text-brass">Formação & Filiações</span>
        {items.map((i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="size-1 rounded-full bg-ink/25" />
            {i}
          </span>
        ))}
      </div>
    </div>
  );
}

function TreatmentsFeatured() {
  return (
    <section id="tratamentos" className="py-24 md:py-32 bg-ink text-bone">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-12 items-end gap-10 border-b border-bone/10 pb-14 mb-16">
          <div className="md:col-span-7">
            <span className="text-[11px] tracking-[0.28em] uppercase text-brass-soft font-medium mb-5 block">
              01 — Tratamentos em Destaque
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.05] tracking-[-0.01em] text-balance">
              Procedimentos definidos pela{" "}
              <span className="italic font-normal text-brass-soft">evidência</span>,
              executados com técnica.
            </h2>
          </div>
          <div className="md:col-span-5 md:pl-8 md:border-l md:border-bone/10">
            <p className="text-sm md:text-base text-bone/55 leading-relaxed max-w-[40ch] font-light">
              Protocolos exclusivos desenvolvidos sob as mais recentes diretrizes
              das principais sociedades internacionais de urologia e medicina sexual.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
          {featuredTreatments.map((t) => (
            <article key={t.n} className="group flex flex-col">
              <div className="overflow-hidden aspect-[4/3] mb-8">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1200ms] ease-out img-fade-b"
                  loading="lazy"
                />
              </div>
              <div className="flex-1 flex flex-col">
                <div className="flex items-baseline justify-between mb-8">
                  <span className="font-serif italic text-2xl text-brass-soft">{t.n}.</span>
                  <span className="text-[10px] uppercase tracking-[0.28em] text-bone/40">
                    {t.short}
                  </span>
                </div>
                <h3 className="font-serif text-3xl mb-5 font-medium tracking-[-0.01em]">{t.name}</h3>
                <p className="text-sm text-bone/55 leading-relaxed mb-10 max-w-[34ch] font-light flex-1">
                  {t.desc}
                </p>
                <a
                  href="#contato"
                  className="text-[11px] uppercase tracking-[0.22em] font-medium text-brass-soft inline-flex items-center gap-3 group-hover:gap-5 transition-all"
                >
                  Saiba Mais
                  <ArrowUpRight className="size-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProceduresList() {
  return (
    <section className="py-24 md:py-32 bg-bone">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <span className="text-[11px] tracking-[0.28em] uppercase text-brass font-medium mb-5 block">
            02 — Demais Especialidades
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.05] tracking-[-0.01em] text-balance">
            Cuidado integral em <span className="italic">andrologia</span>.
          </h2>
          <p className="mt-8 text-base text-ink/65 leading-relaxed max-w-[36ch] font-light">
            Cada protocolo é desenhado sob medida — da disfunção erétil à
            reposição hormonal — sempre com a tecnologia a serviço do bem-estar
            individual.
          </p>
        </div>
        <div className="md:col-span-8 divide-y divide-border border-y border-border">
          {secondaryProcedures.map((p) => (
            <div
              key={p.n}
              className="grid grid-cols-12 gap-6 py-8 group hover:bg-bone-soft/60 transition-colors px-4 -mx-4"
            >
              <span className="col-span-2 md:col-span-1 font-serif italic text-2xl text-brass">
                {p.n}
              </span>
              <h3 className="col-span-10 md:col-span-4 font-serif text-2xl font-medium tracking-tight">
                {p.name}
              </h3>
              <p className="col-span-12 md:col-span-6 text-sm text-ink/65 leading-relaxed font-light max-w-[50ch]">
                {p.desc}
              </p>
              <span className="hidden md:flex col-span-1 justify-end items-center text-brass opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="size-5" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Bio() {
  return (
    <section id="especialista" className="py-24 md:py-32 bg-bone-soft/60">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
        <aside className="md:col-span-4">
          <div className="md:sticky md:top-32">
            <span className="text-[11px] tracking-[0.28em] uppercase text-brass font-medium mb-6 block">
              03 — O Especialista
            </span>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] font-medium mb-10 tracking-[-0.01em]">
              Dr. Giuliano <span className="italic">Aita</span>
            </h2>
            <img
              src={portraitBio}
              alt="Dr. Giuliano Aita"
              className="w-full aspect-[4/5] object-cover [object-position:82%_15%] mb-8 img-fade-b"
              loading="lazy"
            />
            <dl className="space-y-5 border-t border-border pt-8 text-sm">
              {[
                ["Doutorado", "AC Camargo Cancer Center · SP"],
                ["Titular", "Sociedade Brasileira de Urologia"],
                ["Membro", "International Society for Sexual Medicine"],
                ["Diretoria", "ABEMSS — Saúde Sexual"],
              ].map(([k, v]) => (
                <div key={k} className="flex flex-col gap-1">
                  <dt className="text-[10px] uppercase tracking-[0.22em] text-brass">{k}</dt>
                  <dd className="text-ink/80 leading-snug">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </aside>

        <div className="md:col-span-8 md:pl-8 md:border-l md:border-border">
          <blockquote className="font-serif text-3xl md:text-4xl italic text-ink/85 leading-[1.25] mb-14 max-w-[28ch] text-balance">
            “A medicina urológica de excelência não se limita ao diagnóstico —
            ela reside na compreensão profunda da jornada de cada paciente.”
          </blockquote>

          <div className="space-y-7 text-lg text-ink/70 leading-[1.7] text-pretty font-light max-w-[58ch]">
            <p>
              Com mais de duas décadas dedicadas à urologia e à saúde do homem,
              o Dr. Giuliano Aita consolidou-se como uma das principais
              referências na medicina sexual masculina contemporânea no Brasil.
              Sua atuação combina pesquisa acadêmica, prática cirúrgica de
              ponta e diálogo aberto com o paciente.
            </p>
            <p>
              Doutor em Ciências pelo AC Camargo Cancer Center, é conferencista
              ativo nos principais eventos urológicos nacionais e
              internacionais, ocupando posições de destaque em sociedades
              científicas como a Associação Brasileira de Estudos em Medicina
              e Saúde Sexual (ABEMSS) e a International Society for Sexual
              Medicine (ISSM).
            </p>
            <p>
              O instituto foi concebido para oferecer não apenas tratamentos,
              mas uma experiência integral de cuidado — onde privacidade,
              hospitalidade e rigor técnico são pilares inegociáveis de cada
              consulta, exame e procedimento.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-8 border-t border-border pt-10">
            {[
              ["20+", "Anos de Atuação"],
              ["10k+", "Pacientes Atendidos"],
              ["50+", "Publicações & Palestras"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-serif text-4xl md:text-5xl text-ink mb-2 tracking-tight">
                  {n}
                </div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-ink/55">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function NewsSection() {
  return (
    <section id="publicacoes" className="py-24 md:py-32 bg-bone">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 border-b border-border pb-10">
          <div>
            <span className="text-[11px] tracking-[0.28em] uppercase text-brass font-medium mb-5 block">
              04 — Publicações
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.05] tracking-[-0.01em] max-w-[18ch] text-balance">
              Conhecimento que <span className="italic">circula</span>.
            </h2>
          </div>
          <a
            href="#"
            className="text-[11px] uppercase tracking-[0.22em] text-ink/70 hover:text-brass border-b border-ink/20 hover:border-brass pb-1 self-start md:self-end inline-flex items-center gap-2"
          >
            Todas as Publicações <ArrowUpRight className="size-3.5" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {news.map((n) => (
            <article key={n.title} className="group flex flex-col">
              <div className="aspect-[4/3] overflow-hidden mb-6">
                <img
                  src={n.image}
                  alt={n.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-[1200ms] ease-out img-fade-b"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.22em] text-ink/50 mb-4">
                <span className="text-brass">{n.cat}</span>
                <span className="size-1 rounded-full bg-ink/20" />
                <span>{n.date}</span>
              </div>
              <h3 className="font-serif text-2xl font-medium leading-snug mb-4 tracking-tight group-hover:text-brass transition-colors">
                {n.title}
              </h3>
              <p className="text-sm text-ink/65 leading-relaxed font-light flex-1">
                {n.excerpt}
              </p>
              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] font-medium text-ink/80 group-hover:text-brass group-hover:gap-4 transition-all"
              >
                Ler artigo <ArrowUpRight className="size-3.5" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="clinica" className="py-24 md:py-32 bg-ink text-bone">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-12 gap-10 mb-16 items-end">
          <div className="md:col-span-7">
            <span className="text-[11px] tracking-[0.28em] uppercase text-brass-soft font-medium mb-5 block">
              05 — A Clínica
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.05] tracking-[-0.01em] max-w-[18ch] text-balance">
              Um espaço pensado para o{" "}
              <span className="italic font-normal text-brass-soft">cuidado</span>.
            </h2>
          </div>
          <p className="md:col-span-5 md:pl-8 md:border-l md:border-bone/10 text-sm md:text-base text-bone/55 leading-relaxed font-light max-w-[42ch]">
            Ambiente clínico projetado para oferecer privacidade absoluta,
            tecnologia de ponta e hospitalidade — do primeiro contato ao
            acompanhamento pós-procedimento.
          </p>
        </div>

        <div className="grid grid-cols-6 gap-6 md:gap-10">
          <img src={galleryImages[0]} alt="Clínica" className="col-span-6 md:col-span-4 aspect-[16/10] object-cover img-fade-soft" loading="lazy" />
          <img src={galleryImages[1]} alt="Clínica" className="col-span-3 md:col-span-2 aspect-square object-cover img-fade-soft" loading="lazy" />
          <img src={galleryImages[2]} alt="Clínica" className="col-span-3 md:col-span-2 aspect-square object-cover img-fade-soft" loading="lazy" />
          <img src={galleryImages[3]} alt="Clínica" className="col-span-3 md:col-span-2 aspect-[4/5] object-cover img-fade-soft" loading="lazy" />
          <img src={galleryImages[4]} alt="Clínica" className="col-span-3 md:col-span-2 aspect-[4/5] object-cover img-fade-soft" loading="lazy" />
          <img src={galleryImages[5]} alt="Clínica" className="col-span-6 md:col-span-2 aspect-[4/5] object-cover img-fade-soft" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contato" className="py-24 md:py-32 bg-bone-soft/60">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-7">
          <span className="text-[11px] tracking-[0.28em] uppercase text-brass font-medium mb-5 block">
            06 — Contato
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-medium leading-[1.02] tracking-[-0.01em] text-balance mb-10">
            Inicie sua jornada de <span className="italic">cuidado</span>.
          </h2>
          <p className="text-ink/65 text-lg leading-relaxed max-w-[44ch] mb-12 font-light">
            Agendamentos privativos disponíveis para consultas presenciais e
            telemedicina de alta resolução. Nossa equipe responde em até
            24 horas úteis.
          </p>

          <div className="space-y-5">
            <a
              href="tel:+551130000000"
              className="group flex items-center justify-between border-b border-ink/15 py-5 hover:border-brass transition-colors"
            >
              <span className="flex items-center gap-4">
                <Phone className="size-4 text-brass" />
                <span className="font-serif text-2xl md:text-3xl text-ink group-hover:text-brass transition-colors">
                  +55 (11) 3000-0000
                </span>
              </span>
              <ArrowUpRight className="size-5 text-ink/40 group-hover:text-brass transition-colors" />
            </a>
            <a
              href="mailto:contato@giulianoaita.com.br"
              className="group flex items-center justify-between border-b border-ink/15 py-5 hover:border-brass transition-colors"
            >
              <span className="font-serif text-xl md:text-2xl text-ink/85 group-hover:text-brass transition-colors">
                contato@giulianoaita.com.br
              </span>
              <ArrowUpRight className="size-5 text-ink/40 group-hover:text-brass transition-colors" />
            </a>
            <a
              href="https://www.instagram.com/dr.giulianoaita/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between border-b border-ink/15 py-5 hover:border-brass transition-colors"
            >
              <span className="flex items-center gap-4">
                <Instagram className="size-4 text-brass" />
                <span className="font-serif text-xl md:text-2xl text-ink/85 group-hover:text-brass transition-colors">
                  @dr.giulianoaita
                </span>
              </span>
              <ArrowUpRight className="size-5 text-ink/40 group-hover:text-brass transition-colors" />
            </a>
          </div>
        </div>

        <aside className="md:col-span-5">
          <div className="bg-ink text-bone p-10 md:p-12 h-full flex flex-col">
            <span className="text-[11px] uppercase tracking-[0.28em] text-brass-soft font-medium mb-8">
              Localização
            </span>
            <p className="font-serif text-2xl md:text-3xl leading-tight mb-3 tracking-tight">
              Edifício Vila Olímpia Corporate
            </p>
            <p className="text-bone/55 leading-relaxed mb-10 font-light">
              Av. das Nações Unidas, 12.500
              <br />
              Vila Olímpia · São Paulo · SP
            </p>
            <div className="border-t border-bone/15 pt-8 mt-auto space-y-5">
              <div className="flex items-center gap-3 text-bone/70">
                <MapPin className="size-4 text-brass-soft" />
                <span className="text-sm font-light">
                  Estacionamento com manobrista
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-[0.22em] text-bone/55">
                  Seg — Sex, 08h às 19h
                </span>
                <span className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-brass-soft">
                  <span className="size-1.5 rounded-full bg-brass-soft animate-pulse" />
                  Atendendo
                </span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="bg-ink text-bone py-16 border-t border-bone/5">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-14">
          <div>
            <div className="font-serif text-3xl md:text-4xl leading-none tracking-tight">
              Giuliano <span className="italic text-brass-soft">Aita</span>
            </div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-bone/45 mt-3">
              Urologia · Andrologia · Saúde Sexual Masculina
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-[11px] uppercase tracking-[0.22em] text-bone/60">
            <a href="#tratamentos" className="hover:text-brass-soft transition-colors">Tratamentos</a>
            <a href="#especialista" className="hover:text-brass-soft transition-colors">Especialista</a>
            <a href="#publicacoes" className="hover:text-brass-soft transition-colors">Publicações</a>
            <a href="#clinica" className="hover:text-brass-soft transition-colors">Clínica</a>
            <a href="#contato" className="hover:text-brass-soft transition-colors">Contato</a>
          </nav>
        </div>
        <div className="pt-8 border-t border-bone/10 flex flex-col md:flex-row justify-between gap-6 text-[10px] uppercase tracking-[0.22em] text-bone/35">
          <p>© {new Date().getFullYear()} Dr. Giuliano Aita · CRM-SP — Todos os direitos reservados</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brass-soft">Privacidade</a>
            <a href="#" className="hover:text-brass-soft">Termos</a>
            <a href="#" className="hover:text-brass-soft">Responsabilidade Clínica</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
