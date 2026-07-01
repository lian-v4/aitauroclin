import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";
import { ArrowUpRight, Search, Calendar, User, Clock, BookOpen } from "lucide-react";

import clinic3 from "@/assets/clinic-3.jpg";
import clinic4 from "@/assets/clinic-4.jpg";
import clinic5 from "@/assets/clinic-5.jpg";
import clinic6 from "@/assets/clinic-6.jpg";

export const Route = createFileRoute("/publicacoes")({
  head: () => ({
    meta: [
      { title: "Publicações & Canal de Informação — Dr. Giuliano Aita" },
      { name: "description", content: "Artigos científicos e informativos sobre saúde sexual masculina, urologia de vanguarda, andropausa e inovações tecnológicas urológicas." },
    ],
  }),
  component: PublicacoesPage,
});

interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
  content: string;
}

const articlesData: Article[] = [
  {
    slug: "urofill-revolucao-estetica-intima",
    title: "A Revolução do UroFill® na Estética Íntima Masculina Moderna",
    excerpt: "Única técnica patenteada internacionalmente para engrossamento peniano estético e funcional com ácido hialurônico e anestesia local.",
    category: "Estética Íntima",
    date: "15 Jun 2026",
    readTime: "6 min de leitura",
    image: clinic5,
    author: "Dr. Giuliano Aita",
    content: "O engrossamento peniano estético e funcional com ácido hialurônico de grau médico tornou-se o procedimento de escolha para homens exigentes que buscam simetria, volume e autoconfiança sem os riscos associados às cirurgias invasivas. O UroFill® destaca-se por ser uma técnica patenteada que distribui o material de forma homogênea por meio de aplicações sequenciais em consultório, oferecendo resultados de altíssima fidelidade estética e estabilidade temporal prolongada."
  },
  {
    slug: "rezum-vapor-agua-hpb",
    title: "Rezum: Tecnologia Térmica a Vapor no Tratamento da HPB",
    excerpt: "Como o uso direcionado de vapor d'água reconfigura a próstata obstrutiva preservando integralmente a ejaculação e a ereção.",
    category: "Próstata",
    date: "28 Mai 2026",
    readTime: "8 min de leitura",
    image: clinic4,
    author: "Dr. Giuliano Aita",
    content: "O sistema térmico Rezum utiliza a energia natural contida no vapor de água injetada diretamente no lobo prostático hipertrofiado. Esse procedimento ambulatorial de minutos induz a apoptose celular localizada; ao longo das semanas, o organismo reabsorve o tecido tratado, desobstruindo a uretra. O grande diferencial reside na preservação funcional, garantindo que o paciente recupere a qualidade urinária sem comprometer sua vida sexual ativa."
  },
  {
    slug: "ondas-de-choque-disfuncao-eretil",
    title: "Ondas de Choque de Baixa Intensidade e Reabilitação Vascular",
    excerpt: "O estímulo à angiogênese atuando diretamente na causa vascular da disfunção erétil, sem a necessidade de fármacos diários.",
    category: "Andrologia",
    date: "12 Mai 2026",
    readTime: "5 min de leitura",
    image: clinic3,
    author: "Dr. Giuliano Aita",
    content: "A terapia acústica por ondas de choque extracorpóreas de baixa intensidade (Li-ESWT) baseia-se na microestimulação mecânica dos corpos cavernosos. Esse estímulo induz a liberação de fatores de crescimento celular e a formação de novos vasos sanguíneos (angiogênese). Ao restabelecer a irrigação sanguínea peniana, o tratamento reabilita a resposta natural do órgão, reduzindo ou eliminando a dependência de medicação oral vasodilatadora."
  },
  {
    slug: "reposicao-testosterona-seguranca",
    title: "Terapia de Reposição de Testosterona (TRT): Mitos e Protocolos",
    excerpt: "Os parâmetros diagnósticos de segurança prostática e cardiovascular no tratamento da deficiência androgênica (andropausa).",
    category: "Saúde Hormonal",
    date: "04 Abr 2026",
    readTime: "7 min de leitura",
    image: clinic6,
    author: "Dr. Giuliano Aita",
    content: "A modulação hormonal na andropausa (DAEM) devolve vitalidade, cognição, libido e composição muscular ao homem. Contudo, a TRT exige rigorosa triagem inicial e acompanhamento continuado. O monitoramento de antígenos prostáticos (PSA), hematócrito e exames lipídicos afasta riscos cardiovasculares e oncológicos, transformando a reposição hormonal em uma terapia segura de alta performance de bem-estar."
  }
];

function PublicacoesPage() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("Todos");
  const [activeArticle, setActiveArticle] = React.useState<Article | null>(null);

  const categories = ["Todos", "Estética Íntima", "Próstata", "Andrologia", "Saúde Hormonal"];

  const filteredArticles = articlesData.filter((art) => {
    const matchesSearch = art.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          art.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Todos" || art.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-background text-foreground font-sans min-h-screen py-16 md:py-24 selection:bg-brass/25 selection:text-ink">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        
        {/* Header */}
        <header className="max-w-3xl mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-brass" />
            <span className="font-serif italic text-brass text-sm md:text-base">
              Espaço Informativo Premium
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight mb-8">
            Canal de <span className="italic font-normal">Publicações</span>
          </h1>
          <p className="text-base md:text-lg text-ink/75 leading-relaxed font-light">
            Artigos técnicos e esclarecedores sobre saúde masculina, urologia de alta tecnologia e andrologia clínica, direcionados à informação de qualidade e baseada em evidências científicas.
          </p>
        </header>

        {/* Search & Categories Bar */}
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between border-y border-border py-6 mb-12">
          
          {/* Categories Selector */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setActiveArticle(null);
                }}
                className={`px-4 py-2 text-xs tracking-wider uppercase border transition-all cursor-pointer rounded-full ${
                  selectedCategory === cat
                    ? "bg-ink text-bone border-ink font-semibold"
                    : "bg-transparent text-ink/70 border-border/80 hover:border-brass/50 hover:text-brass"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-ink/40" />
            <input
              type="text"
              placeholder="Buscar artigos..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setActiveArticle(null);
              }}
              className="w-full bg-bone-soft/30 border border-border rounded-full pl-10 pr-4 py-2.5 text-xs text-ink placeholder:text-ink/40 focus:outline-none focus:border-brass focus:ring-1 focus:ring-brass"
            />
          </div>

        </div>

        {/* Main Content Layout */}
        {activeArticle ? (
          
          /* Single Article Reader View */
          <article className="max-w-3xl mx-auto animate-in fade-in duration-500">
            <button 
              onClick={() => setActiveArticle(null)}
              className="text-xs uppercase tracking-widest text-brass hover:text-ink transition-colors mb-8 cursor-pointer inline-flex items-center gap-2"
            >
              ← Voltar para a lista
            </button>
            
            <div className="aspect-[21/9] rounded-lg overflow-hidden mb-8">
              <img 
                src={activeArticle.image} 
                alt={activeArticle.title} 
                className="w-full h-full object-cover img-fade-soft"
              />
            </div>

            <div className="flex flex-wrap items-center gap-6 text-xs text-ink/50 mb-6 uppercase tracking-wider">
              <span className="text-brass font-semibold">{activeArticle.category}</span>
              <span className="flex items-center gap-1.5"><Calendar className="size-3.5" />{activeArticle.date}</span>
              <span className="flex items-center gap-1.5"><Clock className="size-3.5" />{activeArticle.readTime}</span>
              <span className="flex items-center gap-1.5"><User className="size-3.5" />Por {activeArticle.author}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight mb-8 text-ink">
              {activeArticle.title}
            </h2>

            <div className="font-serif text-lg text-ink/80 italic border-l-2 border-brass pl-6 mb-8 py-1 leading-relaxed">
              {activeArticle.excerpt}
            </div>

            <div className="text-base text-ink/75 leading-relaxed font-light space-y-6">
              <p>{activeArticle.content}</p>
              <p>
                Procedimentos diagnósticos e avaliações clínicas individualizadas devem ser agendadas presencialmente em nossos consultórios de São Paulo ou Teresina. A saúde do homem contemporâneo é pautada na prevenção ativa e no emprego de tecnologias de baixo impacto físico e alta resolutividade estética e clínica.
              </p>
            </div>
            
            <div className="border-t border-border mt-12 pt-8 flex justify-between items-center">
              <span className="text-xs text-ink/50 italic">Publicado por Dr. Giuliano Aita</span>
              <button 
                onClick={() => window.open("/contato", "_self")}
                className="inline-flex items-center gap-2 bg-ink text-bone hover:bg-brass py-3 px-5 text-xs tracking-widest uppercase font-semibold transition-colors cursor-pointer"
              >
                Agendar Avaliação
                <ArrowUpRight className="size-4" />
              </button>
            </div>
          </article>

        ) : (
          
          /* Articles Feed List View */
          <div>
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {filteredArticles.map((art) => (
                  <article 
                    key={art.slug} 
                    className="group bg-bone-soft/20 border border-border/50 hover:border-brass/35 rounded-lg overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow"
                  >
                    <div>
                      <div className="aspect-[16/10] overflow-hidden bg-ink relative">
                        <img 
                          src={art.image} 
                          alt={art.title} 
                          className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-102 transition-all duration-700 img-fade-b"
                          loading="lazy"
                        />
                        <span className="absolute top-4 left-4 bg-ink/90 text-brass-soft text-[9px] uppercase tracking-widest px-2.5 py-1 rounded">
                          {art.category}
                        </span>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-[10px] uppercase tracking-wider text-ink/50 mb-3">
                          <span>{art.date}</span>
                          <span>•</span>
                          <span>{art.readTime}</span>
                        </div>
                        <h3 className="font-serif text-2xl font-medium leading-snug mb-3 text-ink group-hover:text-brass transition-colors">
                          {art.title}
                        </h3>
                        <p className="text-sm text-ink/70 leading-relaxed font-light mb-4">
                          {art.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="px-6 pb-6 pt-2 border-t border-border/40 mt-auto">
                      <button
                        onClick={() => {
                          setActiveArticle(art);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="w-full flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-brass hover:text-ink transition-colors cursor-pointer"
                      >
                        Ler Artigo Completo
                        <ArrowUpRight className="size-4" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 border border-dashed border-border rounded-lg">
                <BookOpen className="size-10 text-brass/45 mx-auto mb-4" />
                <h3 className="font-serif text-xl font-medium text-ink mb-1">Nenhum artigo encontrado</h3>
                <p className="text-xs text-ink/60 font-light">Tente alterar os termos de busca ou o filtro por categoria.</p>
              </div>
            )}
          </div>

        )}

      </div>
    </div>
  );
}
