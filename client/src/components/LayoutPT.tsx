import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Menu, Phone, ChevronDown } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { Link, useLocation } from "wouter";
import { useState } from "react";
import { ScrollToTop } from "./ScrollToTop";
import { WhatsAppButton } from "./WhatsAppButton";

export default function LayoutPT({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const serviceLinks = [
    { href: "/pt-pt/servicos/ar-condicionado", label: "Ar Condicionado" },
    { href: "/pt-pt/servicos/energia-solar", label: "Energia Solar" },
    { href: "/pt-pt/servicos/bombas-calor", label: "Bombas de Calor" },
    { href: "/pt-pt/servicos/solucoes-integradas", label: "Soluções Integradas" },
  ];

  const serviceAreas = [
    { href: "/pt-pt/faro", label: "Faro" },
    { href: "/pt-pt/albufeira", label: "Albufeira" },
    { href: "/pt-pt/lagos", label: "Lagos" },
    { href: "/pt-pt/portimao", label: "Portimão" },
    { href: "/pt-pt/loule", label: "Loulé" },
    { href: "/pt-pt/tavira", label: "Tavira" },
    { href: "/pt-pt/olhao", label: "Olhão" },
    { href: "/pt-pt/silves", label: "Silves" },
    { href: "/pt-pt/lagoa", label: "Lagoa" },
    { href: "/pt-pt/carriacao", label: "Carriacão" },
    { href: "/pt-pt/monchique", label: "Monchique" },
    { href: "/pt-pt/aljezur", label: "Aljezur" },
    { href: "/pt-pt/vila-do-bispo", label: "Vila do Bispo" },
    { href: "/pt-pt/castro-marim", label: "Castro Marim" },
    { href: "/pt-pt/alcoutim", label: "Alcoutim" },
    { href: "/pt-pt/sao-bras", label: "São Brás" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground">
      {/* Top Bar - Contact Info */}
      <div className="bg-secondary text-secondary-foreground py-2 text-sm hidden md:block">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href="tel:+351910675168" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" /> +351 910 675 168
            </a>
            <span>Servindo toda a região do Algarve</span>
          </div>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram</a>
            <div className="border-l border-slate-300 pl-4 ml-2">
              <LanguageSwitcher currentLang="pt" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <Link href="/pt-pt">
            <div className="flex items-center gap-2 cursor-pointer">
              <img src="/images/logo.png" alt="Algarve Seasons Logo" className="h-16 w-auto object-contain" />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            <Link href="/pt-pt">
              <div className={`px-4 py-2 text-sm font-medium transition-colors hover:text-primary cursor-pointer ${
                location === "/pt-pt" ? "text-primary" : "text-muted-foreground"
              }`}>
                Início
              </div>
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                Serviços
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white border border-slate-100 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {serviceLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <div className="px-4 py-3 text-sm hover:bg-slate-50 hover:text-primary cursor-pointer border-b border-slate-50 last:border-b-0">
                      {link.label}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Service Areas Dropdown */}
            <div className="relative group">
              <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                Áreas de Serviço
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-0 w-56 bg-white border border-slate-100 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 grid grid-cols-2 gap-0">
                {serviceAreas.map((area) => (
                  <Link key={area.href} href={area.href}>
                    <div className="px-4 py-2 text-sm hover:bg-slate-50 hover:text-primary cursor-pointer border-b border-slate-50">
                      {area.label}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/pt-pt/sobre">
              <div className={`px-4 py-2 text-sm font-medium transition-colors hover:text-primary cursor-pointer ${
                location === "/pt-pt/sobre" ? "text-primary" : "text-muted-foreground"
              }`}>
                Sobre Nós
              </div>
            </Link>

            <Link href="/pt-pt/recursos">
              <div className={`px-4 py-2 text-sm font-medium transition-colors hover:text-primary cursor-pointer ${
                location === "/pt-pt/recursos" ? "text-primary" : "text-muted-foreground"
              }`}>
                Recursos
              </div>
            </Link>

            <Link href="/pt-pt/faq">
              <div className={`px-4 py-2 text-sm font-medium transition-colors hover:text-primary cursor-pointer ${
                location === "/pt-pt/faq" ? "text-primary" : "text-muted-foreground"
              }`}>
                FAQ
              </div>
            </Link>

            <Link href="/pt-pt/contacto">
              <div className={`px-4 py-2 text-sm font-medium transition-colors hover:text-primary cursor-pointer ${
                location === "/pt-pt/contacto" ? "text-primary" : "text-muted-foreground"
              }`}>
                Contacto
              </div>
            </Link>

            <Button className="bg-primary hover:bg-primary/90 text-white font-bold rounded-md shadow-md ml-4">
              Pedir Orçamento
            </Button>
          </nav>

          {/* Mobile Nav */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="sr-only">
                <SheetTitle>Menu de Navegação</SheetTitle>
                <SheetDescription>Aceda às secções e serviços do site</SheetDescription>
              </div>
              <nav className="flex flex-col gap-4 mt-10">
                <Link href="/pt-pt">
                  <div className="text-lg font-medium hover:text-primary cursor-pointer">Início</div>
                </Link>

                {/* Mobile Services */}
                <div>
                  <button 
                    onClick={() => setOpenDropdown(openDropdown === "services" ? null : "services")}
                    className="text-lg font-medium hover:text-primary cursor-pointer flex items-center gap-2 w-full"
                  >
                    Serviços
                    <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === "services" ? "rotate-180" : ""}`} />
                  </button>
                  {openDropdown === "services" && (
                    <div className="pl-4 mt-2 space-y-2">
                      {serviceLinks.map((link) => (
                        <Link key={link.href} href={link.href}>
                          <div className="text-sm hover:text-primary cursor-pointer">{link.label}</div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Mobile Service Areas */}
                <div>
                  <button 
                    onClick={() => setOpenDropdown(openDropdown === "areas" ? null : "areas")}
                    className="text-lg font-medium hover:text-primary cursor-pointer flex items-center gap-2 w-full"
                  >
                    Áreas de Serviço
                    <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === "areas" ? "rotate-180" : ""}`} />
                  </button>
                  {openDropdown === "areas" && (
                    <div className="pl-4 mt-2 space-y-2 grid grid-cols-2 gap-2">
                      {serviceAreas.map((area) => (
                        <Link key={area.href} href={area.href}>
                          <div className="text-sm hover:text-primary cursor-pointer">{area.label}</div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link href="/pt-pt/sobre">
                  <div className="text-lg font-medium hover:text-primary cursor-pointer">Sobre Nós</div>
                </Link>

                <Link href="/pt-pt/recursos">
                  <div className="text-lg font-medium hover:text-primary cursor-pointer">Recursos</div>
                </Link>

                <Link href="/pt-pt/faq">
                  <div className="text-lg font-medium hover:text-primary cursor-pointer">FAQ</div>
                </Link>

                <Link href="/pt-pt/contacto">
                  <div className="text-lg font-medium hover:text-primary cursor-pointer">Contacto</div>
                </Link>

                <div className="pt-4 border-t border-slate-100">
                  <LanguageSwitcher currentLang="pt" />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold mt-4">
                  Pedir Orçamento
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 text-slate-600 py-12 border-t border-slate-200">
        <div className="container grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-display font-bold text-xl">
              <img src="/images/logo.png" alt="Algarve Seasons Logo" className="h-12 w-auto object-contain" />
            </div>
            <p className="text-sm text-slate-500">
              O fornecedor de soluções AVAC "Tudo-em-Um" do Algarve. Parceiros Premium Daikin, Tesla e Huawei.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-slate-900">Serviços</h3>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><Link href="/pt-pt/servicos/ar-condicionado"><div className="hover:text-primary cursor-pointer">Ar Condicionado</div></Link></li>
              <li><Link href="/pt-pt/servicos/energia-solar"><div className="hover:text-primary cursor-pointer">Energia Solar</div></Link></li>
              <li><Link href="/pt-pt/servicos/bombas-calor"><div className="hover:text-primary cursor-pointer">Bombas de Calor</div></Link></li>
              <li><Link href="/pt-pt/servicos/solucoes-integradas"><div className="hover:text-primary cursor-pointer">Soluções Integradas</div></Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-slate-900">Recursos</h3>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><Link href="/pt-pt/faq"><div className="hover:text-primary cursor-pointer">FAQ</div></Link></li>
              <li><Link href="/pt-pt/depoimentos"><div className="hover:text-primary cursor-pointer">Depoimentos</div></Link></li>
              <li><Link href="/pt-pt/recursos"><div className="hover:text-primary cursor-pointer">Guias & Recursos</div></Link></li>
              <li><Link href="/pt-pt/carreiras"><div className="hover:text-primary cursor-pointer">Carreiras</div></Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-slate-900">Contacto</h3>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a href="tel:+351910675168" className="hover:text-primary cursor-pointer">+351 910 675 168</a></li>
              <li><a href="mailto:Dan@algarveseasons.com" className="hover:text-primary cursor-pointer">Dan@algarveseasons.com</a></li>
              <li>Seg-Sáb: 9h - 18h</li>
              <li><Link href="/pt-pt/privacidade"><div className="hover:text-primary cursor-pointer">Privacidade & Termos</div></Link></li>
            </ul>
          </div>
        </div>
        <div className="container mt-12 pt-8 border-t border-slate-200 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Algarve Seasons. Todos os direitos reservados.
        </div>
      </footer>

      <ScrollToTop />
      <WhatsAppButton />
    </div>
  );
}
