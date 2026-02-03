import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Menu, Phone, Sun, ChevronDown, Home, Wrench, MapPin, Info, BookOpen, HelpCircle, Mail } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { Link, useLocation } from "wouter";
import { useState } from "react";
import { ScrollToTop } from "./ScrollToTop";
import { WhatsAppButton } from "./WhatsAppButton";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const majorTowns = [
    { href: "/faro", label: "Faro" },
    { href: "/lagos", label: "Lagos" },
    { href: "/albufeira", label: "Albufeira" },
    { href: "/portimao", label: "Portimão" },
    { href: "/loule", label: "Loulé" },
  ];

  const allTowns = [
    { href: "/faro", label: "Faro" },
    { href: "/lagos", label: "Lagos" },
    { href: "/albufeira", label: "Albufeira" },
    { href: "/portimao", label: "Portimão" },
    { href: "/loule", label: "Loulé" },
    { href: "/silves", label: "Silves" },
    { href: "/tavira", label: "Tavira" },
    { href: "/olhao", label: "Olhão" },
    { href: "/sao-bras", label: "São Brás" },
    { href: "/lagoa", label: "Lagoa" },
    { href: "/carriacao", label: "Carriacão" },
    { href: "/monchique", label: "Monchique" },
    { href: "/aljezur", label: "Aljezur" },
    { href: "/vila-do-bispo", label: "Vila do Bispo" },
    { href: "/castro-marim", label: "Castro Marim" },
    { href: "/alcoutim", label: "Alcoutim" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground">
      {/* Top Bar - Contact Info */}
      <div className="bg-secondary text-secondary-foreground py-2 text-sm hidden md:block">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> +351 910 675 168
            </span>
            <span>Serving the entire Algarve region</span>
          </div>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/algarveseasons" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Facebook</a>
            <a href="https://www.instagram.com/algarveseasons" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram</a>
            <div className="border-l border-slate-300 pl-4 ml-2">
              <LanguageSwitcher currentLang="en" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <img src="/images/logo.png" alt="Algarve Seasons Logo" className="h-16 w-auto object-contain" />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {/* Home */}
            <Link href="/">
              <div className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary cursor-pointer rounded-md ${
                location === "/" ? "text-primary bg-primary/10" : "text-muted-foreground"
              }`}>
                Home
              </div>
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="px-3 py-2 text-sm font-medium transition-colors hover:text-primary text-muted-foreground rounded-md flex items-center gap-1">
                Services
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link href="/services/air-conditioning">
                  <div className="px-4 py-2 hover:bg-primary/10 hover:text-primary cursor-pointer text-sm text-slate-700 first:rounded-t-lg">
                    Air Conditioning
                  </div>
                </Link>
                <Link href="/services/solar-energy">
                  <div className="px-4 py-2 hover:bg-primary/10 hover:text-primary cursor-pointer text-sm text-slate-700">
                    Solar Energy Systems
                  </div>
                </Link>
                <Link href="/services/heat-pumps">
                  <div className="px-4 py-2 hover:bg-primary/10 hover:text-primary cursor-pointer text-sm text-slate-700">
                    Heat Pumps
                  </div>
                </Link>
                <Link href="/services/all-in-one">
                  <div className="px-4 py-2 hover:bg-primary/10 hover:text-primary cursor-pointer text-sm text-slate-700 last:rounded-b-lg font-semibold border-t border-slate-200">
                    All-In-One Solutions
                  </div>
                </Link>
              </div>
            </div>

            {/* Service Areas Dropdown */}
            <div className="relative group">
              <button className="px-3 py-2 text-sm font-medium transition-colors hover:text-primary text-muted-foreground rounded-md flex items-center gap-1">
                Service Areas
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-0 w-56 bg-white rounded-lg shadow-lg border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 p-2">
                <div className="grid grid-cols-2 gap-1 max-h-64 overflow-y-auto">
                  {allTowns.map((town) => (
                    <Link key={town.href} href={town.href}>
                      <div className="px-3 py-2 hover:bg-primary/10 hover:text-primary cursor-pointer text-sm text-slate-700 rounded">
                        {town.label}
                      </div>
                    </Link>
                  ))}
                </div>
                <Link href="/service-areas">
                  <div className="px-3 py-2 hover:bg-primary/10 hover:text-primary cursor-pointer text-sm text-slate-700 font-semibold border-t border-slate-200 mt-2 pt-2">
                    View All Areas →
                  </div>
                </Link>
              </div>
            </div>

            {/* About */}
            <Link href="/about">
              <div className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary cursor-pointer rounded-md ${
                location === "/about" ? "text-primary bg-primary/10" : "text-muted-foreground"
              }`}>
                About
              </div>
            </Link>

            {/* Resources */}
            <Link href="/resources">
              <div className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary cursor-pointer rounded-md ${
                location === "/resources" ? "text-primary bg-primary/10" : "text-muted-foreground"
              }`}>
                Resources
              </div>
            </Link>

            {/* FAQ */}
            <Link href="/faq">
              <div className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary cursor-pointer rounded-md ${
                location === "/faq" ? "text-primary bg-primary/10" : "text-muted-foreground"
              }`}>
                FAQ
              </div>
            </Link>

            {/* Contact */}
            <Link href="/contact">
              <div className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary cursor-pointer rounded-md ${
                location === "/contact" ? "text-primary bg-primary/10" : "text-muted-foreground"
              }`}>
                Contact
              </div>
            </Link>

            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-white font-bold rounded-md shadow-md ml-2">
                Get Free Quote
              </Button>
            </Link>
          </nav>

          {/* Mobile Nav */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-80">
              <div className="sr-only">
                <SheetTitle>Mobile Navigation Menu</SheetTitle>
                <SheetDescription>Access site sections and services</SheetDescription>
              </div>
              <nav className="flex flex-col gap-4 mt-10">
                <Link href="/">
                  <div className="flex items-center gap-3 text-lg font-medium hover:text-primary cursor-pointer pr-4">
                    <Home className="w-5 h-5" />
                    Home
                  </div>
                </Link>

                {/* Services */}
                <div>
                  <button onClick={() => setOpenDropdown(openDropdown === 'services' ? null : 'services')} className="w-full text-left text-lg font-medium hover:text-primary flex items-center justify-between">
                    <span className="flex items-center gap-3">
                      <Wrench className="w-5 h-5" />
                      Services
                    </span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'services' ? 'rotate-180' : ''}`} />
                  </button>
                  {openDropdown === 'services' && (
                    <div className="pl-4 space-y-2 mt-2">
                      <Link href="/services/air-conditioning">
                        <div className="text-base text-slate-600 hover:text-primary cursor-pointer pr-4">Air Conditioning</div>
                      </Link>
                      <Link href="/services/solar-energy">
                        <div className="text-base text-slate-600 hover:text-primary cursor-pointer pr-4">Solar Energy</div>
                      </Link>
                      <Link href="/services/heat-pumps">
                        <div className="text-base text-slate-600 hover:text-primary cursor-pointer pr-4">Heat Pumps</div>
                      </Link>
                      <Link href="/services/all-in-one">
                        <div className="text-base text-slate-600 hover:text-primary cursor-pointer font-semibold pr-4">All-In-One Solutions</div>
                      </Link>
                    </div>
                  )}
                </div>

                {/* Service Areas */}
                <div>
                  <button onClick={() => setOpenDropdown(openDropdown === 'areas' ? null : 'areas')} className="w-full text-left text-lg font-medium hover:text-primary flex items-center justify-between">
                    <span className="flex items-center gap-3">
                      <MapPin className="w-5 h-5" />
                      Service Areas
                    </span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'areas' ? 'rotate-180' : ''}`} />
                  </button>
                  {openDropdown === 'areas' && (
                    <div className="pl-4 space-y-2 mt-2 grid grid-cols-2 gap-2">
                      {majorTowns.map((town) => (
                        <Link key={town.href} href={town.href}>
                          <div className="text-sm text-slate-600 hover:text-primary cursor-pointer pr-4">{town.label}</div>
                        </Link>
                      ))}
                      <Link href="/service-areas" className="col-span-2">
                        <div className="text-sm text-primary font-semibold hover:underline cursor-pointer pr-4">View All →</div>
                      </Link>
                    </div>
                  )}
                </div>

                <Link href="/about">
                  <div className="flex items-center gap-3 text-lg font-medium hover:text-primary cursor-pointer pr-4">
                    <Info className="w-5 h-5" />
                    About
                  </div>
                </Link>

                <Link href="/resources">
                  <div className="flex items-center gap-3 text-lg font-medium hover:text-primary cursor-pointer pr-4">
                    <BookOpen className="w-5 h-5" />
                    Resources
                  </div>
                </Link>

                <Link href="/faq">
                  <div className="flex items-center gap-3 text-lg font-medium hover:text-primary cursor-pointer pr-4">
                    <HelpCircle className="w-5 h-5" />
                    FAQ
                  </div>
                </Link>

                <Link href="/contact">
                  <div className="flex items-center gap-3 text-lg font-medium hover:text-primary cursor-pointer">
                    <Mail className="w-5 h-5" />
                    Contact
                  </div>
                </Link>

                <div className="pt-4 border-t border-slate-100">
                  <LanguageSwitcher currentLang="en" />
                </div>

                <Link href="/contact">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold mt-4">
                    Get Free Quote
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Floating Action Buttons */}
      <WhatsAppButton />
      <ScrollToTop />

      {/* Footer */}
      <footer className="bg-slate-50 text-slate-600 py-12 border-t border-slate-200">
        <div className="container grid md:grid-cols-5 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-display font-bold text-xl">
              <img src="/images/logo.png" alt="Algarve Seasons Logo" className="h-12 w-auto object-contain" />
            </div>
            <p className="text-sm text-slate-500">
              The Algarve's All-In-One HVAC Solution Provider. Premium Daikin, Tesla, and Huawei partners.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-slate-900">Services</h3>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><Link href="/services/air-conditioning"><div className="hover:text-primary cursor-pointer">Air Conditioning</div></Link></li>
              <li><Link href="/services/solar-energy"><div className="hover:text-primary cursor-pointer">Solar Energy</div></Link></li>
              <li><Link href="/services/heat-pumps"><div className="hover:text-primary cursor-pointer">Heat Pumps</div></Link></li>
              <li><Link href="/services/all-in-one"><div className="hover:text-primary cursor-pointer">All-In-One Solutions</div></Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-slate-900">Resources</h3>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><Link href="/faq"><div className="hover:text-primary cursor-pointer">FAQ Hub</div></Link></li>
              <li><Link href="/testimonials"><div className="hover:text-primary cursor-pointer">Testimonials</div></Link></li>
              <li><Link href="/resources"><div className="hover:text-primary cursor-pointer">Guides & Resources</div></Link></li>
              <li><Link href="/careers"><div className="hover:text-primary cursor-pointer">Careers</div></Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-slate-900">Service Areas</h3>
            <ul className="space-y-2 text-sm text-slate-500">
              {majorTowns.map((town) => (
                <li key={town.href}><Link href={town.href}><div className="hover:text-primary cursor-pointer transition-colors">{town.label}</div></Link></li>
              ))}
              <li className="pt-2 border-t border-slate-300">
                <Link href="/service-areas">
                  <div className="hover:text-primary cursor-pointer font-semibold text-xs">View All 16 Areas →</div>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-slate-900">Contact</h3>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a href="tel:+351910675168" className="hover:text-primary transition-colors">+351 910 675 168</a></li>
              <li><a href="mailto:Dan@algarveseasons.com" className="hover:text-primary transition-colors">Dan@algarveseasons.com</a></li>
              <li>Mon-Sat: 9am - 6pm</li>
              <li className="pt-4 border-t border-slate-300">
                <Link href="/privacy-terms"><div className="hover:text-primary cursor-pointer text-xs">Privacy & Terms</div></Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mt-12 pt-8 border-t border-slate-200 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Algarve Seasons. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
