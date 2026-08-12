import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";
import { Phone, MapPin, Instagram, Mail, ArrowUpRight, Send, HelpCircle, Loader2 } from "lucide-react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Agendamento & Pré-Qualificação — Dr. Giuliano Aita" },
      { name: "description", content: "Agende sua consulta ou procedimento com o Dr. Giuliano Aita. Preencha os campos de pré-qualificação para direcionamento ao WhatsApp." },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formData, setFormData] = React.useState({
    nome: "",
    idade: "",
    localizacao: "",
    servico: "",
  });

  const [errors, setErrors] = React.useState({
    nome: "",
    idade: "",
    localizacao: "",
    servico: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { nome: "", idade: "", localizacao: "", servico: "" };

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Build the formatted WhatsApp message
    const cleanLocation = formData.localizacao === "sp" ? "São Paulo (Instituto Giuliano Aita)" : "Teresina (Uroclin)";
    const messageText = `Olá! Gostaria de agendar um atendimento com o Dr. Giuliano Aita.\n\n` +
      `Meus dados de Pré-Qualificação:\n` +
      `- Nome Completo: ${formData.nome}\n` +
      `- Idade: ${formData.idade} anos\n` +
      `- Unidade de Preferência: ${cleanLocation}\n` +
      `- Serviço/Interesse: ${formData.servico}`;

    const encodedMessage = encodeURIComponent(messageText);
    
    // Redirect URL (using a default number, can be adjusted)
    const whatsappUrl = `https://wa.me/5511971663688?text=${encodedMessage}`;
    
    // Simulate processing for better UX
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="bg-background text-foreground font-sans min-h-screen py-16 md:py-24 selection:bg-brass/25 selection:text-ink">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        
        {/* Header */}
        <header className="max-w-3xl mb-16 md:mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-brass" />
            <span className="font-serif italic text-brass text-sm md:text-base">
              Atendimento e Canais
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight mb-8">
            Agendamento & <span className="italic font-normal">Pré-Qualificação</span>
          </h1>
          <p className="text-base md:text-lg text-ink/75 leading-relaxed font-light">
            Inicie sua jornada de cuidado preenchendo o formulário de pré-qualificação abaixo. Nossa equipe de atendimento receberá seus dados estruturados no WhatsApp para agilizar e personalizar seu agendamento.
          </p>
        </header>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Form Column Left */}
          <div className="lg:col-span-7 bg-bone-soft/30 border border-border/80 rounded-lg p-8 md:p-10 shadow-sm">
            <h2 className="font-serif text-2xl font-medium text-ink mb-6 pb-4 border-b border-border/80">
              Formulário de Pré-Qualificação
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Nome */}
              <div className="flex flex-col gap-2">
                <label htmlFor="nome" className="text-xs uppercase tracking-widest text-ink/70 font-semibold">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Ex: Carlos Augusto Silva"
                  className="bg-bone border border-border/80 focus:border-brass rounded px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-brass"
                />
                {errors.nome && <span className="text-xs text-red-600 font-light">{errors.nome}</span>}
              </div>

              {/* Idade */}
              <div className="flex flex-col gap-2">
                <label htmlFor="idade" className="text-xs uppercase tracking-widest text-ink/70 font-semibold">
                  Idade
                </label>
                <input
                  type="text"
                  id="idade"
                  name="idade"
                  value={formData.idade}
                  onChange={handleChange}
                  placeholder="Ex: 45"
                  className="bg-bone border border-border/80 focus:border-brass rounded px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-brass"
                />
                {errors.idade && <span className="text-xs text-red-600 font-light">{errors.idade}</span>}
              </div>

              {/* Localização de Atendimento */}
              <div className="flex flex-col gap-2">
                <label htmlFor="localizacao" className="text-xs uppercase tracking-widest text-ink/70 font-semibold">
                  Unidade Preferencial
                </label>
                <select
                  id="localizacao"
                  name="localizacao"
                  value={formData.localizacao}
                  onChange={handleChange}
                  className="bg-bone border border-border/80 focus:border-brass rounded px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-brass"
                >
                  <option value="">Selecione a unidade...</option>
                  <option value="sp">São Paulo - Instituto Giuliano Aita (Vila Olímpia)</option>
                  <option value="pi">Teresina - Uroclin</option>
                </select>
                {errors.localizacao && <span className="text-xs text-red-600 font-light">{errors.localizacao}</span>}
              </div>

              {/* Tipo de Serviço / Interesse */}
              <div className="flex flex-col gap-2">
                <label htmlFor="servico" className="text-xs uppercase tracking-widest text-ink/70 font-semibold">
                  Procedimento ou Consulta de Interesse
                </label>
                <select
                  id="servico"
                  name="servico"
                  value={formData.servico}
                  onChange={handleChange}
                  className="bg-bone border border-border/80 focus:border-brass rounded px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-brass"
                >
                  <option value="">Selecione o procedimento...</option>
                  <option value="UroFill® (Estética Íntima)">UroFill® (Preenchimento Peniano)</option>
                  <option value="Rezum (Vapor de Água para Próstata)">Rezum (Tratamento de HPB)</option>
                  <option value="Ondas de Choque (Saúde Vascular)">Ondas de Choque (Disfunção Erétil)</option>
                  <option value="Reposição Hormonal (Testosterona/DAEM)">Reposição Hormonal (TRT)</option>
                  <option value="Outro Procedimento / Implantes">Outro Procedimento / Implante Peniano</option>
                  <option value="Consulta Geral / Andrologia">Consulta Geral & Andrologia</option>
                  <option value="Telemedicina (Consulta Online)">Telemedicina (Consulta Online)</option>
                </select>
                {errors.servico && <span className="text-xs text-red-600 font-light">{errors.servico}</span>}
              </div>

              <div className="pt-4 flex flex-col gap-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-ink text-bone hover:bg-brass transition-colors py-4 px-6 text-xs tracking-widest uppercase font-semibold flex items-center justify-center gap-2 rounded shadow-md cursor-pointer disabled:opacity-80 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      Preparando Atendimento...
                      <Loader2 className="size-4 animate-spin" />
                    </>
                  ) : (
                    <>
                      Enviar para o WhatsApp
                      <Send className="size-3.5" />
                    </>
                  )}
                </button>
                {isSubmitting && (
                  <p className="text-center text-xs text-ink/60 animate-pulse mt-2">
                    Redirecionando para o ambiente seguro do WhatsApp...
                  </p>
                )}
              </div>

            </form>
          </div>

          {/* Contact Details Right */}
          <aside className="lg:col-span-5 space-y-8">
            
            {/* Direct Contact Channels */}
            <div className="bg-ink text-bone rounded-lg p-8 flex flex-col justify-between">
              <div>
                <span className="text-[9px] uppercase tracking-widest text-brass-soft mb-6 block font-bold">Canais Diretos</span>
                <h3 className="font-serif text-2xl font-medium mb-8 text-bone">Outras Formas de Contato</h3>
                
                <div className="space-y-6">
                  <a href="tel:+5511971663688" className="flex items-center justify-between border-b border-bone/10 pb-4 hover:border-brass-soft transition-colors">
                    <span className="flex items-center gap-3 text-sm font-light">
                      <Phone className="size-4 text-brass-soft" />
                      <span>SP: +55 (11) 97166-3688</span>
                    </span>
                    <ArrowUpRight className="size-4 text-bone/40" />
                  </a>
                  <a href="tel:+5586994153688" className="flex items-center justify-between border-b border-bone/10 pb-4 hover:border-brass-soft transition-colors">
                    <span className="flex items-center gap-3 text-sm font-light">
                      <Phone className="size-4 text-brass-soft" />
                      <span>PI: +55 (86) 99415-3688</span>
                    </span>
                    <ArrowUpRight className="size-4 text-bone/40" />
                  </a>
                  <a href="mailto:giuliano@giulianoaita.com.br" className="flex items-center justify-between border-b border-bone/10 pb-4 hover:border-brass-soft transition-colors">
                    <span className="flex items-center gap-3 text-sm font-light">
                      <Mail className="size-4 text-brass-soft" />
                      <span>giuliano@giulianoaita.com.br</span>
                    </span>
                    <ArrowUpRight className="size-4 text-bone/40" />
                  </a>
                  <a href="https://instagram.com/dr.giulianoaita" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between border-b border-bone/10 pb-4 hover:border-brass-soft transition-colors">
                    <span className="flex items-center gap-3 text-sm font-light">
                      <Instagram className="size-4 text-brass-soft" />
                      <span>@dr.giulianoaita</span>
                    </span>
                    <ArrowUpRight className="size-4 text-bone/40" />
                  </a>
                </div>
              </div>

              <p className="text-[10px] text-bone/45 leading-relaxed mt-10 font-light">
                Atendimento telefônico disponível de segunda a sexta, das 08h às 19h. Retorno das solicitações digitais em até 24 horas úteis.
              </p>
            </div>

            {/* Clinic Addresses Detail */}
            <div className="bg-bone-soft/30 border border-border/80 rounded-lg p-8">
              <span className="text-[9px] uppercase tracking-widest text-brass mb-4 block font-bold">Localizações Físicas</span>
              <div className="space-y-6">
                
                {/* SP */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="size-4 text-brass" />
                    <h4 className="font-serif font-bold text-ink text-base">São Paulo · SP</h4>
                  </div>
                  <p className="text-xs text-ink/75 leading-relaxed font-light pl-6">
                    Instituto Giuliano Aita <br />
                    Rua Alvorada, 1289 - Conj. 1608 <br />
                    Vila Olimpia · CEP 04550-004 <br />
                    <span className="text-[10px] uppercase tracking-wider text-brass font-medium block mt-1">Estacionamento com manobrista</span>
                  </p>
                </div>

                {/* PI */}
                <div className="space-y-2 border-t border-border/50 pt-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="size-4 text-brass" />
                    <h4 className="font-serif font-bold text-ink text-base">Teresina · PI</h4>
                  </div>
                  <p className="text-xs text-ink/75 leading-relaxed font-light pl-6">
                    Uroclin <br />
                    R. Des. Pires de Castro, 186 <br />
                    Centro - Norte · CEP 64000-390 <br />
                    <span className="text-[10px] uppercase tracking-wider text-brass font-medium block mt-1">Clínica de Especialidades</span>
                  </p>
                </div>

              </div>
            </div>

            {/* FAQ quick notice */}
            <div className="bg-bone-soft/10 border border-border/40 rounded-lg p-6 flex gap-4 items-start">
              <HelpCircle className="size-5 text-brass shrink-0 mt-0.5" />
              <div>
                <h5 className="font-serif font-semibold text-ink text-sm mb-1">Como funciona a Pré-Qualificação?</h5>
                <p className="text-[11px] text-ink/70 leading-relaxed font-light">
                  Nosso formulário coleta dados básicos para que a secretária saiba exatamente o seu perfil de interesse, direcionando o fluxo e agilizando a resposta de datas disponíveis e valores de consulta.
                </p>
              </div>
            </div>

          </aside>

        </div>

      </div>
    </div>
  );
}
