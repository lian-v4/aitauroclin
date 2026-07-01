import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, GraduationCap, Award, Landmark, BookOpen } from "lucide-react";

import portraitBio from "@/assets/hero-2.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre o Dr. Giuliano Aita — Urologista & Andrologista" },
      { name: "description", content: "Conheça a trajetória do Dr. Giuliano Aita, doutor em ciências pelo AC Camargo Cancer Center, especialista em saúde do homem e medicina sexual." },
    ],
  }),
  component: SobrePage,
});

function SobrePage() {
  const stats = [
    { value: "20+", label: "Anos de Experiência", desc: "Dedicados integralmente à urologia e saúde sexual." },
    { value: "10k+", label: "Pacientes Atendidos", desc: "Casos clínicos e cirúrgicos tratados com excelência." },
    { value: "50+", label: "Artigos & Palestras", desc: "Produção científica nacional e internacional." },
    { value: "4+", label: "Sociedades Médicas", desc: "Membro das principais entidades de urologia e andrologia." },
  ];

  const credentials = [
    {
      icon: GraduationCap,
      title: "Doutorado em Ciências",
      institution: "AC Camargo Cancer Center · São Paulo",
      details: "Tese defendida na área de oncologia/urologia, unindo pesquisa acadêmica avançada e prática clínica de alta precisão."
    },
    {
      icon: Award,
      title: "Membro Titular",
      institution: "Sociedade Brasileira de Urologia (SBU)",
      details: "Especialista certificado, atuando ativamente nas comissões científicas e de formação profissional contínua."
    },
    {
      icon: Landmark,
      title: "Membro Internacional",
      institution: "International Society for Sexual Medicine (ISSM)",
      details: "Alinhamento com as mais recentes diretrizes e protocolos globais para reabilitação sexual e cirurgia reconstrutiva."
    },
    {
      icon: BookOpen,
      title: "Diretoria Nacional",
      institution: "ABEMSS (Saúde Sexual)",
      details: "Associação Brasileira de Estudos em Medicina e Saúde Sexual. Atuação no desenvolvimento da especialidade no país."
    }
  ];

  return (
    <div className="bg-background text-foreground font-sans min-h-screen py-16 md:py-24 selection:bg-brass/25 selection:text-ink">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        
        {/* Intro */}
        <header className="max-w-3xl mb-16 md:mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-brass" />
            <span className="font-serif italic text-brass text-sm md:text-base">
              Corpo Clínico
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight mb-8">
            Conheça o <span className="italic font-normal">Dr. Giuliano Aita</span>
          </h1>
          <p className="text-base md:text-lg text-ink/75 leading-relaxed font-light">
            Trajetória dedicada à excelência médica, unindo a precisão da técnica cirúrgica ao acolhimento integral do paciente.
          </p>
        </header>

        {/* Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 mb-24">
          
          {/* Sidebar Left: Picture and Fast Credentials */}
          <aside className="md:col-span-4 flex flex-col">
            <div className="md:sticky md:top-28">
              <figure className="relative mb-8 rounded-lg overflow-hidden">
                <img
                  src={portraitBio}
                  alt="Dr. Giuliano Aita"
                  className="w-full aspect-[4/5] object-cover [object-position:82%_15%] img-fade-b"
                  loading="eager"
                />
                <figcaption className="absolute bottom-4 left-4 bg-ink/90 text-bone text-[10px] uppercase tracking-[0.22em] px-3 py-1.5 rounded">
                  Dr. Giuliano Aita · CRM-SP 123.456
                </figcaption>
              </figure>

              <div className="bg-bone-soft/30 border border-border/60 rounded-lg p-6">
                <h3 className="font-serif text-lg font-medium text-ink mb-4 border-b border-border/80 pb-2">Unidades de Atendimento</h3>
                <ul className="space-y-4 text-xs font-light text-ink/80">
                  <li>
                    <strong className="block text-brass font-serif italic text-sm mb-0.5">São Paulo · SP</strong>
                    Vila Olímpia Corporate <br />
                    Av. das Nações Unidas, 12.500
                  </li>
                  <li>
                    <strong className="block text-brass font-serif italic text-sm mb-0.5">Teresina · PI</strong>
                    Euroclin Teresina <br />
                    Av. Dom Severino, 3000
                  </li>
                </ul>
              </div>
            </div>
          </aside>

          {/* Main Body Right: Biography and Quote */}
          <div className="md:col-span-8 flex flex-col justify-between">
            <div className="space-y-8">
              <blockquote className="font-serif text-2xl md:text-3xl italic text-ink/85 leading-relaxed border-l-2 border-brass pl-6 py-2">
                “A medicina urológica de excelência não se limita ao diagnóstico preciso — ela reside no profundo respeito à individualidade e ao bem-estar do homem em todas as fases da vida.”
              </blockquote>

              <div className="space-y-6 text-base text-ink/75 leading-relaxed font-light text-pretty">
                <p>
                  Com mais de duas décadas dedicadas à medicina, o <strong>Dr. Giuliano Aita</strong> consolidou-se como uma das principais referências brasileiras em urologia geral, andrologia e medicina sexual masculina contemporânea. Sua atuação integra de forma harmônica a excelência da pesquisa acadêmica com uma prática cirúrgica altamente qualificada.
                </p>
                <p>
                  Obteve o título de <strong>Doutor em Ciências</strong> pelo renomado <strong>AC Camargo Cancer Center</strong> em São Paulo, onde desenvolveu pesquisas na área oncológica e de reabilitação. É conferencista ativo nos principais congressos nacionais e internacionais da área, compartilhando avanços e refinamentos técnicos em procedimentos de alta complexidade.
                </p>
                <p>
                  Além da prática de consultório, o Dr. Giuliano Aita desempenha papel estratégico em entidades médicas de vanguarda. É membro titular da <strong>Sociedade Brasileira de Urologia (SBU)</strong>, da <strong>International Society for Sexual Medicine (ISSM)</strong> e compõe a diretoria nacional da <strong>Associação Brasileira de Estudos em Medicina e Saúde Sexual (ABEMSS)</strong>.
                </p>
                <p>
                  Seus consultórios em São Paulo e Teresina foram projetados especificamente para oferecer uma experiência clínica única: um porto seguro onde privacidade absoluta, hospitalidade premium e rigor técnico são os pilares de cada atendimento.
                </p>
              </div>
            </div>

            {/* Certifications grid */}
            <div className="mt-16 border-t border-border pt-12">
              <h2 className="font-serif text-2xl font-medium text-ink mb-8">Qualificações Acadêmicas</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {credentials.map((cred) => {
                  const Icon = cred.icon;
                  return (
                    <div key={cred.title} className="p-5 border border-border/50 rounded-lg hover:border-brass/35 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-bone-soft rounded-full text-brass shrink-0">
                          <Icon className="size-4" />
                        </div>
                        <h3 className="font-serif text-base font-semibold text-ink leading-tight">
                          {cred.title}
                        </h3>
                      </div>
                      <p className="text-[10px] uppercase tracking-[0.22em] text-brass-soft mb-2 font-medium">{cred.institution}</p>
                      <p className="text-xs text-ink/70 leading-relaxed font-light">{cred.details}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            
          </div>
        </div>

        {/* SECTION 3: Counters / Infographics */}
        <section className="border-t border-border pt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="p-6 bg-bone-soft/30 border border-border/50 rounded-lg hover:shadow-sm transition-all duration-300">
                <div className="font-serif text-4xl sm:text-5xl text-brass mb-2 tracking-tight font-medium">
                  {s.value}
                </div>
                <div className="text-[10px] uppercase tracking-[0.22em] font-bold text-ink mb-1">
                  {s.label}
                </div>
                <p className="text-xs text-ink/65 leading-relaxed font-light">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA section bottom */}
        <section className="mt-24 p-8 md:p-12 bg-ink text-bone text-center rounded-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(95,89,70,0.1)_0%,transparent_75%)] pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-[10px] uppercase tracking-[0.28em] text-brass-soft mb-3 block">Agendamento de Consultas</span>
            <h3 className="font-serif text-2xl md:text-3xl font-medium mb-4">Deseja agendar uma avaliação com o Dr. Giuliano?</h3>
            <p className="text-bone/60 text-xs md:text-sm leading-relaxed mb-8 font-light max-w-[46ch] mx-auto">
              Realize sua consulta presencial com total discrição ou opte pelo atendimento online via telemedicina de alta resolução.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contato"
                className="inline-flex items-center justify-center gap-2 bg-bone text-ink px-6 py-3 text-xs tracking-[0.22em] uppercase hover:bg-brass-soft hover:text-ink transition-colors font-semibold"
              >
                Formulário de Pré-Qualificação
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
