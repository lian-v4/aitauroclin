import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";
import { ArrowUpRight, Search, Calendar, User, Clock, BookOpen } from "lucide-react";

import clinic3 from "@/assets/clinic-3.jpg";
import clinic4 from "@/assets/clinic-4.jpg";
import clinic5 from "@/assets/clinic-5.jpg";
import clinic6 from "@/assets/clinic-6.jpg";

import blogImg1 from "@/assets/blog/1780f63bcbf42a376b35abb755c2d712.jpg";
import blogImg2 from "@/assets/blog/5250aaaeea1ef1f7391b8b002906c656.jpg";
import blogImg3 from "@/assets/blog/7880bcc6d02cc936dc1857f6dd8071e5.jpeg";
import blogImg4 from "@/assets/blog/8b433b88528b9e99d812cf62b159d49a.png";
import blogImg5 from "@/assets/blog/bbccec8e7758deaa62824d42afc36097.jpg";
import blogImg6 from "@/assets/blog/0a9f84746f844148a92b808344d9b5ec.png";
import blogImg7 from "@/assets/blog/5858d5d6bbb69d9ea9800676820cf61f.jpg";
import blogImg8 from "@/assets/blog/7da9ab3b062c162c8bba05adea55612c.jpg";

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
    slug: "tecnologia-na-fisioterapia-pelvica",
    title: "Tecnologia na fisioterapia pélvica",
    excerpt: "A incontinência urinária, além de ser desconfortável, pode impactar a autoestima, a vida social e até os relacionamentos íntimos. Felizmente, hoje existe uma forma moderna, prática e indolor de tratar essa condição: a cadeira EmSella.",
    category: "Geral",
    date: "31 Mar 2025",
    readTime: "3 min de leitura",
    image: blogImg1,
    author: "Dr. Giuliano Aita",
    content: "A incontinência urinária, além de ser desconfortável, pode impactar a autoestima, a vida social e até os relacionamentos íntimos. Felizmente, hoje existe uma forma moderna, prática e indolor de tratar essa condição: a cadeira EmSella."
  },
  {
    slug: "rezum-tratamento-minimamente-invasivo-para-hiperplasia-prostatica",
    title: "Rezum: Tratamento minimamente invasivo para hiperplasia prostática",
    excerpt: "A Hiperplasia Prostática Benigna (HPB), também conhecida como aumento benigno da próstata, é uma condição que impacta a vida de milhões de homens acima dos 50 anos.",
    category: "Próstata",
    date: "28 Mar 2025",
    readTime: "4 min de leitura",
    image: blogImg2,
    author: "Dr. Giuliano Aita",
    content: "A Hiperplasia Prostática Benigna (HPB), também conhecida como aumento benigno da próstata, é uma condição que impacta a vida de milhões de homens acima dos 50 anos. Entre os principais sintomas, estão a dificuldade para urinar, jato fraco e aumento da frequência urinária."
  },
  {
    slug: "urofill-a-revolucao-segura-da-estetica-intima-masculina",
    title: "UroFill: A revolução segura da estética íntima masculina",
    excerpt: "A UroFill® é uma técnica não cirúrgica voltada ao engrossamento peniano, patenteada nos Estados Unidos desde 2017 e já utilizada com sucesso em mais de 10.000 pacientes.",
    category: "Estética Íntima",
    date: "24 Abr 2025",
    readTime: "5 min de leitura",
    image: blogImg3,
    author: "Dr. Giuliano Aita",
    content: "A UroFill® é uma técnica não cirúrgica voltada ao engrossamento peniano, patenteada nos Estados Unidos desde 2017 e já utilizada com sucesso em mais de 10.000 pacientes. Seu diferencial está no uso de ácido hialurônico, uma substância que já existe em nosso corpo, proporcionando resultados seguros e naturais."
  },
  {
    slug: "essa-e-a-doenca-que-mais-causa-disfuncao-eretil",
    title: "Essa é a doença que mais causa disfunção erétil",
    excerpt: "A disfunção erétil (DE) é um problema que afeta milhões de homens em todo o mundo e pode ser um dos primeiros sinais de problemas de saúde mais graves, como o diabetes.",
    category: "Andrologia",
    date: "20 Mar 2025",
    readTime: "4 min de leitura",
    image: blogImg4,
    author: "Dr. Giuliano Aita",
    content: "A disfunção erétil (DE) é um problema que afeta milhões de homens em todo o mundo e pode ser um dos primeiros sinais de problemas de saúde mais graves, como o diabetes. A relação entre essas duas condições é complexa, e o controle adequado é fundamental para a saúde sexual."
  },
  {
    slug: "descubra-quantas-vezes-uma-pessoa-saudavel-urina-ao-dia",
    title: "Descubra quantas vezes uma pessoa saudável urina ao dia",
    excerpt: "A frequência urinária é um indicador importante da saúde geral. Urinar muitas ou poucas vezes ao dia pode estar relacionado a diversos fatores, desde o consumo de líquidos até condições de saúde subjacentes.",
    category: "Geral",
    date: "20 Mar 2025",
    readTime: "3 min de leitura",
    image: blogImg5,
    author: "Dr. Giuliano Aita",
    content: "A frequência urinária é um indicador importante da saúde geral. Urinar muitas ou poucas vezes ao dia pode estar relacionado a diversos fatores, desde o consumo de líquidos até condições de saúde subjacentes. Mas afinal, quantas vezes é considerado normal ir ao banheiro diariamente?"
  },
  {
    slug: "conheca-a-cadeira-que-e-a-arma-contra-a-incontinencia-urinaria",
    title: "Conheça a cadeira que é a arma contra a incontinência urinária",
    excerpt: "A incontinência urinária afeta milhões de pessoas em todo o mundo, impactando diretamente a qualidade de vida e o bem-estar emocional.",
    category: "Geral",
    date: "17 Mar 2025",
    readTime: "4 min de leitura",
    image: blogImg6,
    author: "Dr. Giuliano Aita",
    content: "A incontinência urinária afeta milhões de pessoas em todo o mundo, impactando diretamente a qualidade de vida e o bem-estar emocional. O problema pode ocorrer por diversos fatores, como o envelhecimento, o parto, a menopausa ou mesmo cirurgias que afetam a região pélvica."
  },
  {
    slug: "quer-fazer-vasectomia-antes-veja-isso",
    title: "Quer fazer vasectomia? Antes, veja isso!",
    excerpt: "A vasectomia é um dos métodos contraceptivos mais eficazes e procurados pelos homens que desejam uma solução definitiva para o controle da natalidade.",
    category: "Andrologia",
    date: "13 Mar 2025",
    readTime: "5 min de leitura",
    image: blogImg7,
    author: "Dr. Giuliano Aita",
    content: "A vasectomia é um dos métodos contraceptivos mais eficazes e procurados pelos homens que desejam uma solução definitiva para o controle da natalidade. Recentemente, a legislação brasileira passou por atualizações importantes que alteraram os critérios e prazos para a realização."
  },
  {
    slug: "usa-vape-sua-testosterona-pode-cair-ate-50",
    title: "Usa vape? Sua testosterona pode cair até 50%",
    excerpt: "O uso de cigarros eletrônicos tem aumentado nos últimos anos, principalmente entre jovens e adultos que buscam uma alternativa ao tabaco tradicional.",
    category: "Saúde Hormonal",
    date: "27 Ago 2025",
    readTime: "4 min de leitura",
    image: blogImg8,
    author: "Dr. Giuliano Aita",
    content: "O uso de cigarros eletrônicos tem aumentado nos últimos anos, principalmente entre jovens e adultos que buscam uma alternativa ao tabaco tradicional. No entanto, a crença de que os vapes são menos prejudiciais à saúde pode ser enganosa. Mesmo sem os componentes químicos do cigarro comum, o vape tem impacto significativo nos níveis hormonais."
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
