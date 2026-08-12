import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Phone, Clock, ShieldCheck, ExternalLink } from "lucide-react";

import clinicFacade from "@/assets/clinic-facade.jpg";
import clinicWaiting from "@/assets/clinic-waiting.jpg";
import clinicReception from "@/assets/clinic-reception.jpg";

import spImage1 from "@/assets/Giuliano-9.jpg.jpeg";
import spImage2 from "@/assets/Giuliano-41.jpg.jpeg";
import spImage3 from "@/assets/Giuliano-52.jpg.jpeg";

export const Route = createFileRoute("/clinica")({
  head: () => ({
    meta: [
      { title: "A Clínica & Multilocalidade — Dr. Giuliano Aita" },
      { name: "description", content: "Conheça as sedes de atendimento do Dr. Giuliano Aita: Uroclin (Teresina) e Instituto Giuliano Aita (São Paulo - Vila Olímpia). Espaços planejados para o seu bem-estar." },
    ],
  }),
  component: ClinicaPage,
});

function ClinicaPage() {
  const offices = [
    {
      id: "sp",
      title: "São Paulo · SP",
      subtitle: "Instituto Giuliano Aita",
      description: "Localizado no Vila Olímpia Prime Offices, nosso consultório em São Paulo foi inteiramente projetado sob o conceito de atendimento boutique. Oferecemos infraestrutura de ponta, consultório privativo para discussões diagnósticas e facilidades como estacionamento com manobrista (valet), além de fluxos de entrada e saída pensados para assegurar a máxima privacidade aos pacientes.",
      address: "Rua Alvorada, 1289 - Conj. 1608 - Vila Olimpia, São Paulo - SP, CEP 04550-004",
      phone: "+55 (11) 97166-3688",
      hours: "Segunda a Sexta, das 08h às 19h",
      mapUrl: "https://maps.google.com/?q=Rua+Alvorada,+1289+Vila+Olimpia+Prime+Offices+Sao+Paulo+SP+04550-004",
      amenities: ["Estacionamento com manobrista", "Privacidade acústica absoluta", "Fluxo exclusivo de atendimento", "Próximo à estação de trem CPTM"],
      images: [spImage1, spImage2, spImage3]
    },
    {
      id: "pi",
      title: "Teresina · PI",
      subtitle: "Uroclin",
      description: "A Uroclin é a nossa sede de referência no Nordeste, situada em região estratégica de Teresina. Um espaço clínico amplo e moderno que conta com salas equipadas para a realização de exames diagnósticos, fisioterapia pélvica e procedimentos urológicos ambulatoriais com total segurança e o mesmo padrão de atendimento premium.",
      address: "R. Des. Pires de Castro, 186 - Centro - Norte, Teresina - PI, CEP 64000-390",
      phone: "+55 (86) 99415-3688",
      hours: "Segunda a Sexta, das 08h às 19h",
      mapUrl: "https://maps.google.com/?q=Rua+Desembargador+Pires+de+Castro,+186+Centro+Norte+Teresina+PI+64000-390",
      amenities: ["Clínica integrada multiespecialidades", "Sala de pequenos procedimentos", "Acessibilidade completa", "Estacionamento privativo"],
      images: [clinicFacade, clinicReception, clinicWaiting]
    }
  ];

  return (
    <div className="bg-background text-foreground font-sans min-h-screen py-16 md:py-24 selection:bg-brass/25 selection:text-ink">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        
        {/* Header */}
        <header className="max-w-3xl mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-brass" />
            <span className="font-serif italic text-brass text-sm md:text-base">
              Nossos Espaços
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight mb-8">
            Estrutura & <span className="italic font-normal">Multilocalidade</span>
          </h1>
          <p className="text-base md:text-lg text-ink/75 leading-relaxed font-light">
            Ambientes cirúrgicos e ambulatoriais projetados para proporcionar conforto absoluto, sigilo incondicional e as melhores tecnologias diagnósticas em duas capitais do país.
          </p>
        </header>

        {/* Office Sections */}
        <div className="space-y-24 md:space-y-32">
          {offices.map((office, idx) => (
            <section 
              key={office.id} 
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-border pt-16"
            >
              
              {/* Text detail */}
              <div className={`lg:col-span-5 space-y-6 ${idx % 2 === 1 ? 'lg:order-last' : ''}`}>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.28em] text-brass font-bold block mb-1">
                    {office.subtitle}
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl font-medium text-ink">
                    {office.title}
                  </h2>
                </div>
                
                <p className="text-sm md:text-base text-ink/75 leading-relaxed font-light">
                  {office.description}
                </p>

                {/* Practical details list */}
                <div className="space-y-4 py-4 border-y border-border">
                  <div className="flex items-start gap-3 text-xs text-ink/80">
                    <MapPin className="size-4 text-brass shrink-0 mt-0.5" />
                    <div>
                      <strong className="block font-semibold">Endereço:</strong>
                      <span>{office.address}</span>
                      <a 
                        href={office.mapUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.15em] text-brass hover:text-ink font-semibold ml-2"
                      >
                        Ver no mapa <ExternalLink className="size-2.5" />
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-ink/80">
                    <Phone className="size-4 text-brass shrink-0 mt-0.5" />
                    <div>
                      <strong className="block font-semibold">Contato:</strong>
                      <span>{office.phone}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-ink/80">
                    <Clock className="size-4 text-brass shrink-0 mt-0.5" />
                    <div>
                      <strong className="block font-semibold">Horário:</strong>
                      <span>{office.hours}</span>
                    </div>
                  </div>
                </div>

                {/* Amenities checklist */}
                <div className="space-y-2.5">
                  <strong className="block text-xs uppercase tracking-[0.22em] text-ink/60 font-bold mb-3">Diferenciais do Espaço</strong>
                  {office.amenities.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-ink/75 font-light">
                      <ShieldCheck className="size-4 text-brass shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link
                    to="/contato"
                    className="inline-flex items-center gap-2 bg-ink text-bone hover:bg-brass px-6 py-3.5 text-xs tracking-[0.22em] uppercase font-semibold transition-colors duration-300"
                  >
                    Agendar nesta Unidade
                    <ExternalLink className="size-3.5" />
                  </Link>
                </div>
              </div>

              {/* Gallery Grid */}
              <div className="lg:col-span-7 grid grid-cols-2 gap-4">
                {office.images.map((img, imgIdx) => (
                  <div 
                    key={imgIdx} 
                    className={`overflow-hidden rounded-lg relative group bg-ink ${
                      office.images.length % 2 === 1 && imgIdx === office.images.length - 1 
                        ? 'col-span-2 aspect-[21/9]' 
                        : 'aspect-[4/3]'
                    }`}
                  >
                    <img 
                      src={img} 
                      alt={`Ambiente ${office.title}`} 
                      className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-102 transition-all duration-700 img-fade-soft"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>

            </section>
          ))}
        </div>

        {/* CTA section */}
        <section className="mt-28 p-8 md:p-16 bg-bone-soft/30 border border-border/80 rounded-lg text-center">
          <div className="max-w-2xl mx-auto">
            <span className="text-[10px] uppercase tracking-[0.28em] text-brass mb-3 block">Atendimento por Telemedicina</span>
            <h3 className="font-serif text-2xl md:text-3xl font-medium text-ink mb-4">Está fora de São Paulo ou Teresina?</h3>
            <p className="text-ink/70 text-xs md:text-sm leading-relaxed mb-8 font-light">
              Oferecemos consultas à distância por meio de telemedicina segura e criptografada de alta definição. Ideal para segundas opiniões urológicas, análise de exames e acompanhamento.
            </p>
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 bg-ink text-bone hover:bg-brass px-6 py-3 text-xs tracking-[0.22em] uppercase font-semibold transition-colors"
            >
              Agendar Telemedicina
              <Clock className="size-4" />
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
