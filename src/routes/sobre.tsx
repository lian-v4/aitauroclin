import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, GraduationCap, Award, Landmark, BookOpen } from "lucide-react";

import portraitBio from "@/assets/dr-aita-sobre-transparent.png";

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
    { value: "4+", label: "Sociedades Médicas", desc: "Membro das principais entidades de urologia andrologia." },
  ];

  const credentials = [
    {
      icon: GraduationCap,
      title: "Mestrado & Doutorado em Urologia",
      institution: "Formação Acadêmica de Alto Nível",
      details: "Estudos voltados à inovação apresentados nos congressos mundiais da SIU (Glasgow, 2014) e AUA (San Diego, 2016)."
    },
    {
      icon: Award,
      title: "Uro-Oncologia",
      institution: "Moffitt Cancer Center · EUA",
      details: "Estágio de aperfeiçoamento em 2019 em um dos mais renomados e prestigiados centros oncológicos dos Estados Unidos."
    },
    {
      icon: Landmark,
      title: "Liderança na Andrologia",
      institution: "Sociedade Brasileira de Urologia",
      details: "Coordenação Nacional do Departamento de Andrologia da Sociedade Brasileira de Urologia no biênio 2018-2020."
    },
    {
      icon: BookOpen,
      title: "Atuação em São Paulo",
      institution: "Sírio-Libanês & Vila Nova Star",
      details: "Integra o corpo clínico urológico de dois dos hospitais de maior prestígio e alta complexidade do Brasil."
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
            Trajetória de mais de 20 anos marcada pela sólida formação acadêmica, inovação tecnológica, produção científica e liderança na urologia.
          </p>
        </header>

        {/* Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 mb-24">
          
          {/* Sidebar Left: Picture and Fast Credentials */}
          <aside className="md:col-span-4 flex flex-col">
            <div className="md:sticky md:top-28">
              <div className="relative mb-8 overflow-hidden rounded-lg bg-bone-soft/20" style={{aspectRatio: "3/4"}}>
                <img
                  src={portraitBio}
                  alt="Dr. Giuliano Aita"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                <span className="absolute bottom-4 left-4 bg-ink/90 backdrop-blur-sm text-bone text-[10px] uppercase tracking-[0.22em] px-3 py-1.5 rounded flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-brass inline-block" />
                  Dr. Giuliano Aita · CRM Verificado
                </span>
              </div>

              <div className="bg-bone-soft/30 border border-border/60 rounded-lg p-6">
                <h3 className="font-serif text-lg font-medium text-ink mb-4 border-b border-border/80 pb-2">Unidades de Atendimento</h3>
                <ul className="space-y-4 text-xs font-light text-ink/80">
                  <li>
                    <strong className="block text-brass font-serif italic text-sm mb-0.5">São Paulo · SP</strong>
                    Instituto Giuliano Aita <br />
                    Rua Alvorada, 1289 - Conjuntos 1607-1608 <br />
                    Vila Olímpia Prime Offices
                  </li>
                  <li>
                    <strong className="block text-brass font-serif italic text-sm mb-0.5">Teresina · PI</strong>
                    Uroclin <br />
                    Rua Desembargador Pires de Castro, 186 <br />
                    Centro Norte
                  </li>
                </ul>
              </div>
            </div>
          </aside>

          {/* Main Body Right: Biography and Quote */}
          <div className="md:col-span-8 flex flex-col justify-between">
            <div className="space-y-8">
              <blockquote className="font-serif text-2xl md:text-3xl italic text-ink/85 leading-relaxed border-l-2 border-brass pl-6 py-2">
                “Mais do que acompanhar a evolução da urologia, nosso compromisso é contribuir ativamente para construí-la de forma ética e segura.”
              </blockquote>

              <div className="space-y-6 text-base text-ink/75 leading-relaxed font-light text-pretty">
                <p>
                  Eu sou natural de Goiânia-GO, onde residi até os 6 anos de idade. Mudei-me para o Rio de Janeiro e em 1990 vim com minha família para o Piauí, terra natal de meus familiares maternos. Conclui o ensino médio no Instituto Dom Barreto e graduei-me em Medicina na Universidade Federal do Piauí, em 1999, quando tive a honra de ser o orador da turma. Em 2005, conclui as residências médicas de Cirurgia Geral e Urologia no Instituto de Assistência Médica do Servidor Público Estadual de São Paulo-SP (IAMSPE-SP).
                </p>
                <p>
                  Foi neste mesmo ano que retornei ao Piauí para exercer a Urologia, após ter recebido o título de especialista, emitido pela Associação Médica Brasileira. Já em 2005, realizamos as primeiras cirurgias uro-oncológicas por videolaparoscopia e muito contribui para a difusão das técnicas minimamente invasivas no tratamento dos cálculos urinários no estado do Piauí. Em 2007, inspirado no modelo de atendimento e estrutura de alto padrão existente em São Paulo e em centros de excelência no exterior, inaugurei a Clínica Uroclin.
                </p>
                <p>
                  O trabalho e dedicação intensos na Urologia me proporcionaram ocupar a coordenação do Serviço de Urologia do Hospital São Marcos, onde permaneci até 2014, ano em que passei a atuar no Hospital Universitário da Universidade Federal do Piauí (HU-UFPI), mediante concurso público em que fui o primeiro colocado. Neste hospital, atuei até o ano de 2018. Em 2012, Teresina sediou o Congresso Norte Nordeste de Urologia, evento presidido por mim e que contou com a presença de chefes dos maiores serviços de Urologia do país e do exterior.
                </p>
                <p>
                  Em 2014, fui agraciado com o título de cidadão piauiense pela Assembleia Legislativa do Estado do Piauí. Neste mesmo ano, recebi o título de Mestre em Ciências, pelo AC Camargo Cancer Center-SP, com um estudo sobre neoplasia de pênis que foi apresentado no Congresso da Societe Internationale d'Urologie (Glasgow, 2014) e na American Urological Association (San Diego, 2016). Em 2016, recebi a maior comenda da Associação Médica Brasileira seccional Piauí, a medalha do Mérito São Lucas.
                </p>
                <p>
                  Desde 2015, tenho concentrado a minha atuação urológica na área de Andrologia e Medicina Sexual masculina. Integrei o grupo de especialistas do Departamento de Andrologia da Sociedade Brasileira de Urologia (2016-2018) e assumi a coordenação deste mesmo Departamento nos dois anos seguintes. Em 2019, cumpri período como observership no Moffitt Cancer Center, na Flórida (EUA). Participo ativamente como conferencista nos principais eventos urológicos, além de ocupar posições de destaque em agremiações como a ABEMSS e a ISSM. Em 2022, recebi o título de Doutor em Ciências pelo AC Camargo Cancer Center-SP.
                </p>
              </div>
            </div>

            {/* Pioneering Section */}
            <div className="mt-16 border-t border-border pt-12">
              <h2 className="font-serif text-2xl font-medium text-ink mb-6">Pioneirismo & Avanços Tecnológicos</h2>
              <p className="text-xs md:text-sm text-ink/70 leading-relaxed font-light mb-8">
                Ao longo de sua carreira, liderou a introdução de importantes marcos tecnológicos e tratamentos minimamente invasivos:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-5 border border-border/50 rounded-lg hover:border-brass/35 transition-colors">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-brass mb-2 block font-semibold">Tecnologia Cirúrgica</span>
                  <p className="text-xs text-ink/80 leading-relaxed font-light">
                    Realizou a <strong>primeira nefrectomia radical por videolaparoscopia</strong> do Piauí e liderou a implementação de cirurgias renais percutâneas e endoscópicas.
                  </p>
                </div>
                <div className="p-5 border border-border/50 rounded-lg hover:border-brass/35 transition-colors">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-brass mb-2 block font-semibold">Endourologia & Laser</span>
                  <p className="text-xs text-ink/80 leading-relaxed font-light">
                    Pioneiro na utilização do laser em <strong>ureteroscopia flexível</strong> para tratamento de cálculos urinários no estado do Piauí.
                  </p>
                </div>
                <div className="p-5 border border-border/50 rounded-lg hover:border-brass/35 transition-colors">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-brass mb-2 block font-semibold">Tratamento de Próstata (HPB)</span>
                  <p className="text-xs text-ink/80 leading-relaxed font-light">
                    Introduziu pioneiramente a vaporização da próstata e a moderna terapia com vapor de água <strong>(Rezum)</strong> para Hiperplasia Prostática Benigna.
                  </p>
                </div>
                <div className="p-5 border border-border/50 rounded-lg hover:border-brass/35 transition-colors">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-brass mb-2 block font-semibold">Medicina Sexual & Regenerativa</span>
                  <p className="text-xs text-ink/80 leading-relaxed font-light">
                    Pioneiro na incorporação de <strong>ondas de choque de baixa intensidade</strong> para disfunção erétil no Brasil e da tecnologia <strong>Emsella</strong> para reabilitação pélvica.
                  </p>
                </div>
              </div>
            </div>

            {/* Ensino e Formação */}
            <div className="mt-16 border-t border-border pt-12">
              <h2 className="font-serif text-2xl font-medium text-ink mb-6">Educação Médica & Formação Científica</h2>
              <div className="space-y-4 text-xs md:text-sm text-ink/75 leading-relaxed font-light">
                <p>
                  Dr. Giuliano Aita demonstra forte compromisso com a formação de novas gerações de especialistas. Organizou o primeiro <strong>Stone Free Day</strong> no Piauí, voltado ao treinamento prático em Endourologia, e atua constantemente como palestrante em congressos nacionais e internacionais, instrutor em cursos de atualização médica e revisor científico de periódicos urológicos especializados.
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
