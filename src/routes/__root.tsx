import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Página não encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A página que você está procurando não existe ou foi movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Voltar para o início
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Ocorreu um erro ao carregar a página
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Algo deu errado do nosso lado. Você pode tentar recarregar ou voltar ao início.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Tentar novamente
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Ir para o início
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Dr. Giuliano Aita — Urologia & Saúde do Homem" },
      { name: "description", content: "Centro de excelência em urologia, andrologia e saúde sexual masculina. Atendimento de alta precisão pelo Dr. Giuliano Aita." },
      { name: "author", content: "Dr. Giuliano Aita" },
      { property: "og:title", content: "Dr. Giuliano Aita — Urologia & Saúde do Homem" },
      { property: "og:description", content: "Centro de excelência em urologia, andrologia e saúde sexual masculina. Atendimento de alta precisão pelo Dr. Giuliano Aita." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@drgiulianoaita" },
    ],
    links: [
      { rel: "apple-touch-icon", sizes: "180x180", href: "/images/favicon/apple-touch-icon.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/images/favicon/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/images/favicon/favicon-16x16.png" },
      { rel: "shortcut icon", href: "/favicon.ico" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=Hanken+Grotesk:wght@300;400;500;600&display=swap" },
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "canonical",
        href: "https://www.giulianoaita.com.br",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Dr. Giuliano Aita - Urologia & Saúde do Homem",
    "image": "https://www.giulianoaita.com.br/og-image.jpg",
    "url": "https://www.giulianoaita.com.br",
    "telephone": "+5511971663688",
    "medicalSpecialty": ["Urologic", "Andrologic"],
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "Rua Alvorada, 1289 - Conj. 1608 - Vila Olimpia",
        "addressLocality": "São Paulo",
        "addressRegion": "SP",
        "postalCode": "04550-004",
        "addressCountry": "BR"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "R. Des. Pires de Castro, 186 - Centro - Norte",
        "addressLocality": "Teresina",
        "addressRegion": "PI",
        "postalCode": "64000-390",
        "addressCountry": "BR"
      }
    ]
  };

  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-background text-foreground font-sans antialiased selection:bg-brass/25 selection:text-ink min-h-screen flex flex-col">
        {/* Navigation */}
        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
            <Link to="/" className="font-serif text-xl tracking-tight font-medium text-ink leading-none">
              Giuliano <span className="italic text-brass">Aita</span>
              <span className="block text-[9px] font-sans uppercase tracking-[0.28em] text-muted-foreground mt-1">
                Urologia · Saúde Masculina
              </span>
            </Link>

            <nav className="hidden md:flex gap-9 items-center text-[11px] tracking-[0.18em] uppercase font-medium text-ink/80">
              <Link to="/tratamentos" className="hover:text-brass transition-colors" activeProps={{ className: "text-brass font-semibold" }}>Tratamentos</Link>
              <Link to="/sobre" className="hover:text-brass transition-colors" activeProps={{ className: "text-brass font-semibold" }}>Conheça o Dr.</Link>
              <Link to="/clinica" className="hover:text-brass transition-colors" activeProps={{ className: "text-brass font-semibold" }}>A Clínica</Link>
              <Link to="/publicacoes" className="hover:text-brass transition-colors" activeProps={{ className: "text-brass font-semibold" }}>Publicações</Link>
              <Link
                to="/contato"
                className="px-5 py-2.5 ring-1 ring-ink/15 hover:ring-brass/60 hover:text-brass transition-colors"
                activeProps={{ className: "ring-brass/60 text-brass font-semibold" }}
              >
                Agendar Consulta
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-ink hover:text-brass transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>

          {/* Mobile Navigation Dropdown */}
          {mobileMenuOpen && (
            <nav className="md:hidden border-t border-border bg-background py-6 px-6 flex flex-col gap-5 text-[11px] tracking-[0.18em] uppercase font-medium text-ink/80 animate-in fade-in slide-in-from-top-5 duration-200">
              <Link
                to="/tratamentos"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-brass transition-colors py-2 border-b border-border/50"
                activeProps={{ className: "text-brass font-semibold" }}
              >
                Tratamentos
              </Link>
              <Link
                to="/sobre"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-brass transition-colors py-2 border-b border-border/50"
                activeProps={{ className: "text-brass font-semibold" }}
              >
                Conheça o Dr.
              </Link>
              <Link
                to="/clinica"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-brass transition-colors py-2 border-b border-border/50"
                activeProps={{ className: "text-brass font-semibold" }}
              >
                A Clínica
              </Link>
              <Link
                to="/publicacoes"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-brass transition-colors py-2 border-b border-border/50"
                activeProps={{ className: "text-brass font-semibold" }}
              >
                Publicações
              </Link>
              <Link
                to="/contato"
                onClick={() => setMobileMenuOpen(false)}
                className="px-5 py-3 text-center ring-1 ring-ink/15 hover:ring-brass/60 hover:text-brass transition-colors mt-2"
                activeProps={{ className: "ring-brass/60 text-brass font-semibold" }}
              >
                Agendar Consulta
              </Link>
            </nav>
          )}
        </header>

        {/* Content Area */}
        <main className="flex-grow">
          <Outlet />
        </main>

        {/* Footer */}
        <footer className="bg-ink text-bone py-16 border-t border-bone/5">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
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
                <Link to="/tratamentos" className="hover:text-brass-soft transition-colors">Tratamentos</Link>
                <Link to="/sobre" className="hover:text-brass-soft transition-colors">Sobre</Link>
                <Link to="/clinica" className="hover:text-brass-soft transition-colors">Clínica</Link>
                <Link to="/publicacoes" className="hover:text-brass-soft transition-colors">Publicações</Link>
                <Link to="/contato" className="hover:text-brass-soft transition-colors">Contato</Link>
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
      </div>
    </QueryClientProvider>
  );
}
