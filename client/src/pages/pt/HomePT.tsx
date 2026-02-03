import LayoutPT from "@/components/LayoutPT";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Wind, Sun, Flame, Check, Star, ArrowRight, Shield, MapPin, Zap } from "lucide-react";
import { Link, useLocation } from "wouter";
import { Helmet } from "react-helmet-async";
import SeasonalHeroText from "@/components/SeasonalHeroText";
import TrustBadges from "@/components/TrustBadges";

export default function HomePT() {
  const [, setLocation] = useLocation();

  const handleContactClick = () => {
    setLocation('/pt-pt/contacto');
  };

  const handleServicesClick = () => {
    setLocation('/pt-pt/servicos/ar-condicionado');
  };

  return (
    <LayoutPT>
      <Helmet>
        <title>AVAC, Solar e Bombas de Calor | Algarve</title>
        <meta name="description" content="Algarve Seasons é o Parceiro Premium Daikin D1+ para ar condicionado, painéis solares e bombas de calor em Faro, Lagos e Albufeira. Obtenha um orçamento gratuito hoje." />
        <meta name="keywords" content="AVAC Algarve, Ar Condicionado Faro, Painéis Solares Portugal, Bombas de Calor Algarve, Instalador Daikin" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-slate-50 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-secondary/10 to-transparent rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
        </div>

        <div className="container grid lg:grid-cols-2 gap-12 items-center relative z-10 py-12">
          <div className="space-y-8 animate-in slide-in-from-bottom-8 duration-700 fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase">
              <Star className="w-4 h-4 fill-primary" />
              #1 Especialista AVAC no Algarve
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-display font-extrabold leading-tight text-slate-900">
              Solução Climática <SeasonalHeroText className="block">Tudo-em-Um</SeasonalHeroText> do Algarve
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
              A Algarve Seasons fornece instalação premium de ar condicionado, sistemas de energia solar e bombas de calor para casas, moradias e empresas em Faro, Albufeira, Lagos e toda a região do Algarve.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold h-14 px-8 text-lg shadow-lg shadow-primary/20" onClick={handleContactClick}>
                Pedir Orçamento Grátis
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-secondary text-secondary font-bold h-14 px-8 text-lg hover:bg-secondary/5" onClick={handleServicesClick}>
                Ver Serviços
              </Button>
            </div>

            <div className="flex items-center gap-6 text-sm font-medium text-slate-600 pt-4">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" /> Parceiro Daikin D1+
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" /> Certificado Tesla
              </div>
            </div>
          </div>

          <div className="relative h-[600px] hidden lg:block">
            <div className="absolute inset-0 bg-slate-200 rounded-[2rem] transform rotate-3 scale-95 z-0"></div>
            <img 
              src="/images/hero-villa-solar.jpg" 
              alt="Moradia Moderna no Algarve com Painéis Solares" 
              className="absolute inset-0 w-full h-full object-cover rounded-[2rem] shadow-2xl z-10"
            />
            
            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-xs">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Qualidade Comprovada</p>
                  <p className="text-xs text-slate-500">200+ Instalações desde 2016</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">Soluções Completas de Climatização & Energia</h2>
            <p className="text-lg text-slate-600">
              Combinamos tecnologia de ponta com experiência local para oferecer conforto e eficiência energética durante todo o ano.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* AC Card */}
            <Link href="/pt-pt/servicos/ar-condicionado">
              <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-slate-100 overflow-hidden h-full">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-secondary/20 group-hover:bg-secondary/10 transition-colors z-10"></div>
                  <img src="/images/service-ac-interior.jpg" alt="Ar Condicionado" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Wind className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-bold text-slate-900">Ar Condicionado</h3>
                  </div>
                  <p className="text-slate-600 mb-4">
                    Instalações premium Daikin e Mitsubishi. Sistemas de parede, canalizados e multi-divisão para controlo climático perfeito.
                  </p>
                  <div className="flex items-center gap-2 text-primary font-bold group-hover:gap-3 transition-all">
                    Saiba Mais <ArrowRight className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Solar Card */}
            <Link href="/pt-pt/servicos/energia-solar">
              <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-slate-100 overflow-hidden h-full">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-secondary/20 group-hover:bg-secondary/10 transition-colors z-10"></div>
                  <img src="/images/service-solar-roof.jpg" alt="Energia Solar" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Sun className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-bold text-slate-900">Energia Solar</h3>
                  </div>
                  <p className="text-slate-600 mb-4">
                    Sistemas fotovoltaicos, armazenamento em bateria Tesla Powerwall e inversores Huawei para maximizar o seu sol do Algarve.
                  </p>
                  <div className="flex items-center gap-2 text-primary font-bold group-hover:gap-3 transition-all">
                    Saiba Mais <ArrowRight className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Heat Pumps Card */}
            <Link href="/pt-pt/servicos/bombas-calor">
              <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-slate-100 overflow-hidden h-full">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-secondary/20 group-hover:bg-secondary/10 transition-colors z-10"></div>
                  <img src="/images/service-heat-pump.jpg" alt="Bombas de Calor" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Flame className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-bold text-slate-900">Bombas de Calor</h3>
                  </div>
                  <p className="text-slate-600 mb-4">
                    Sistemas eficientes de bombas de calor ar-ar e ar-água para conforto durante todo o ano e contas de energia mais baixas.
                  </p>
                  <div className="flex items-center gap-2 text-primary font-bold group-hover:gap-3 transition-all">
                    Saiba Mais <ArrowRight className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <TrustBadges />

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
            <img 
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663308749066/izdDhFLPqQWvkFop.jpg" 
              alt="Técnico Algarve Seasons" 
              className="rounded-2xl shadow-xl relative z-10"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100 z-20 max-w-xs">
              <p className="font-display font-bold text-lg mb-2">Área de Serviço</p>
              <div className="flex flex-wrap gap-2">
                {['Faro', 'Lagos', 'Albufeira', 'Vilamoura', 'Portimão'].map(city => (
                  <span key={city} className="px-2 py-1 bg-gray-100 text-xs font-medium rounded text-gray-600 flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {city}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-display font-bold text-slate-900">Porque Escolhem Algarve Seasons?</h2>
            
            {/* Direct Answer Sentence for AEO */}
            <div className="bg-blue-50 border-l-4 border-primary p-6 rounded-r-lg">
              <p className="text-blue-900 font-medium">
                "Algarve Seasons é um Parceiro Premium Daikin D1+ que fornece instalação de ar condicionado, sistemas de painéis solares e bombas de calor para propriedades residenciais e comerciais em todos os 16 municípios do Algarve desde 2016."
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div className="space-y-2">
                <h4 className="font-bold text-lg flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" /> Especialistas Certificados
                </h4>
                <p className="text-sm text-slate-600">
                  Parceiros oficiais da Daikin, Tesla e Huawei. Não apenas instalamos; somos certificados para manter.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-lg flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" /> Conhecimento Local
                </h4>
                <p className="text-sm text-slate-600">
                  Compreensão profunda do clima do Algarve, tipos de propriedades e necessidades energéticas.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-lg flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" /> Resposta Rápida
                </h4>
                <p className="text-sm text-slate-600">
                  Reparação de emergência de AC dentro de 24 horas nas principais cidades do Algarve.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-lg flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary" /> Serviço 5 Estrelas
                </h4>
                <p className="text-sm text-slate-600">
                  Avaliações consistentemente top-rated de proprietários de vilas e gestores de propriedades.
                </p>
              </div>
            </div>
            
            <Button size="lg" className="mt-4 bg-secondary text-white hover:bg-secondary/90">
              Ler as Nossas Avaliações
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-display font-bold mb-6">Pronto para Atualizar o Clima da Sua Casa?</h2>
          <p className="text-xl mb-8 opacity-90">
            Obtenha um orçamento gratuito e sem compromisso. A nossa equipa avaliará a sua propriedade, recomendará a melhor solução e fornecerá preços transparentes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="h-14 px-8 text-lg font-bold bg-white text-primary hover:bg-gray-100 border-none" onClick={handleContactClick}>
              Solicitar Orçamento Gratuito
            </Button>
            <a href="tel:+351910675168">
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-bold border-2 border-white text-white hover:bg-white/10">
                Ligar Agora: +351 910 675 168
              </Button>
            </a>
          </div>
        </div>
      </section>
    </LayoutPT>
  );
}
