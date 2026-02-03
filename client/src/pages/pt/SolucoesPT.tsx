import LayoutPT from "@/components/LayoutPT";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Zap, Sun, Wind, Leaf, TrendingDown, Lightbulb, Shield } from "lucide-react";
import { useLocation } from "wouter";

export default function SolucoesPT() {
  const [, setLocation] = useLocation();

  const bundles = [
    {
      id: 1,
      name: "Pacote Algarve Pronto",
      description: "Ar Condicionado + Aquecimento Solar de Água",
      tagline: "Conforto imediato e custos mais baixos de aquecimento de água",
      price: "A partir de €3.500",
      savings: "Economize até 40% em aquecimento de água",
      features: [
        "Unidade de AC de parede premium Daikin",
        "Sistema de aquecimento solar de água",
        "Instalação profissional",
        "Garantia de 5 anos",
        "Suporte de emergência 24/7",
        "Manutenção anual incluída"
      ],
      icon: Wind,
      color: "bg-blue-50 border-blue-200"
    },
    {
      id: 2,
      name: "Pacote Vida Sustentável",
      description: "Aquecimento Solar de Água + Solar Fotovoltaico",
      tagline: "Economias massivas e vida ecológica",
      price: "A partir de €6.500",
      savings: "Economize até 70% em custos de energia",
      features: [
        "Sistema solar fotovoltaico de 5-10kW",
        "Aquecimento solar de água",
        "Inversor híbrido Huawei",
        "Instalação profissional",
        "Garantia de painéis de 25 anos",
        "App de monitorização incluída",
        "Pronto para armazenamento em bateria"
      ],
      icon: Sun,
      color: "bg-yellow-50 border-yellow-200"
    },
    {
      id: 3,
      name: "Pacote Conforto Máximo",
      description: "AC + Aquecimento Solar + Solar Fotovoltaico",
      tagline: "Economias máximas, conforto e sustentabilidade",
      price: "A partir de €9.500",
      savings: "Economize até 90% em custos de energia",
      features: [
        "Sistema Daikin AC (arrefecimento e aquecimento)",
        "Matriz solar fotovoltaica de 10kW",
        "Aquecimento solar de água",
        "Inversor híbrido Huawei",
        "Armazenamento em bateria Tesla Powerwall",
        "Integração de casa inteligente",
        "Suporte vitalício",
        "Instalação profissional e garantia"
      ],
      icon: Zap,
      color: "bg-purple-50 border-purple-200",
      featured: true
    },
    {
      id: 4,
      name: "Solução Energética Completa",
      description: "AC + Solar + Bomba de Calor + Armazenamento em Bateria",
      tagline: "Independência energética total e conforto durante todo o ano",
      price: "A partir de €12.500",
      savings: "Economize até 90% em custos de energia",
      features: [
        "Sistema Daikin AC (arrefecimento e aquecimento)",
        "Matriz solar de 10kW",
        "Bomba de calor ar-água",
        "Bateria Tesla Powerwall",
        "Integração de casa inteligente",
        "Suporte vitalício",
        "Manutenção ilimitada",
        "Dashboard de monitorização de energia"
      ],
      icon: Leaf,
      color: "bg-green-50 border-green-200"
    }
  ];

  const handleQuoteClick = () => {
    setLocation('/pt-pt/contacto');
  };

  return (
    <LayoutPT>
      <Helmet>
        <title>Soluções Integradas | Pacotes Combinados | Algarve Seasons</title>
        <meta name="description" content="Descubra os nossos pacotes de soluções integradas AVAC e energia renovável. AC + Solar + Bombas de Calor + Armazenamento em bateria para controlo climático completo e independência energética." />
        <meta name="keywords" content="Soluções Integradas, Pacotes, AVAC, Solar, Bombas de Calor, Bateria" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-secondary/10 to-primary/10">
        <div className="container max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl font-display font-bold text-secondary">
            Desbloqueie o Segredo para um Futuro Sustentável
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Serviços abrangentes sob um único teto. Os nossos pacotes de soluções integradas transformam o sol do Algarve em eletricidade gratuita, ar fresco e água quente—reduzindo as suas contas de energia até 90% enquanto contribui para um planeta mais limpo e verde.
          </p>
        </div>
      </section>

      {/* Why Bundle Packages */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-display font-bold text-secondary mb-6 text-center">
            Porque Escolher Pacotes Combinados?
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Não oferecemos apenas soluções solares; fornecemos um ecossistema completo de sistemas eficientes em energia. Todos os componentes funcionam juntos perfeitamente para maximizar as suas economias, conforto e impacto ambiental.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingDown,
                title: "Economize até 90%",
                description: "Reduza drasticamente as suas contas de energia com sistemas integrados que funcionam juntos para máxima eficiência."
              },
              {
                icon: Shield,
                title: "Ponto Único de Suporte",
                description: "Uma empresa trata da instalação, manutenção e suporte de todos os sistemas. Sem dores de cabeça de coordenação."
              },
              {
                icon: Lightbulb,
                title: "Design de Sistema Integrado",
                description: "Os nossos especialistas projetam sistemas que se complementam para desempenho máximo e ótimo."
              }
            ].map((benefit, idx) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={idx} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="pt-8 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg text-secondary">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bundle Packages */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <h2 className="text-4xl font-display font-bold text-secondary mb-12 text-center">
            Os Nossos Pacotes Exclusivos
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {bundles.map((bundle) => {
              const IconComponent = bundle.icon;
              return (
                <Card 
                  key={bundle.id} 
                  className={`relative overflow-hidden transition-all hover:shadow-xl ${bundle.featured ? 'md:col-span-2 lg:col-span-1 ring-2 ring-primary' : ''} ${bundle.color}`}
                >
                  {bundle.featured && (
                    <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold">
                      Mais Popular
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="text-2xl">{bundle.name}</CardTitle>
                    <CardDescription className="text-base font-semibold text-slate-700">{bundle.description}</CardDescription>
                    <p className="text-sm text-slate-600 mt-2 italic">{bundle.tagline}</p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <div className="text-3xl font-bold text-primary">{bundle.price}</div>
                      <p className="text-sm text-green-600 font-semibold mt-2">{bundle.savings}</p>
                    </div>
                    
                    <ul className="space-y-3">
                      {bundle.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      onClick={handleQuoteClick}
                      className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12"
                    >
                      Obtenha Orçamento Gratuito
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sustainability & Impact */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-display font-bold text-secondary mb-12 text-center">
            Impacto Ambiental e Sustentabilidade
          </h2>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-lg border border-green-200">
              <h3 className="text-2xl font-bold text-secondary mb-4">Reduza Drasticamente a Sua Pegada de Carbono</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Ao mudar para os nossos sistemas integrados de energia renovável e controlo climático eficiente, reduzirá drasticamente a sua pegada de carbono enquanto desfruta de conforto sem culpa durante todo o ano. Sinta-se bem por fazer a sua parte pelo planeta.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Leaf className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700"><strong>Energia Solar:</strong> Gere eletricidade limpa do sol do Algarve, eliminando dependência da rede</span>
                </li>
                <li className="flex items-start gap-3">
                  <Wind className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700"><strong>Bombas de Calor:</strong> Substitua caldeiras a gás com sistemas de aquecimento e arrefecimento ecológicos</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700"><strong>Armazenamento em Bateria:</strong> Guarde o excesso de energia solar para usar durante horas de pico ou à noite</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-lg border border-blue-200">
              <h3 className="text-2xl font-bold text-secondary mb-4">Economias Financeiras Imediatas</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Comece a economizar desde o primeiro dia com retornos financeiros claros. Os nossos pacotes combinados oferecem 15-20% de economias em comparação com a compra de sistemas separadamente, mais reduções significativas nos custos de energia em curso.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <TrendingDown className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700"><strong>€1.500-€3.000+ de poupança anual:</strong> Típico para proprietários residenciais</span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingDown className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700"><strong>Período de retorno de 5-8 anos:</strong> Depois disso, a energia é praticamente gratuita</span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingDown className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700"><strong>Proteção contra aumentos de energia:</strong> Bloqueie os seus custos de energia hoje</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-display font-bold mb-6">Pronto para Fazer a Mudança?</h2>
          <p className="text-xl mb-8 opacity-90">
            Obtenha um orçamento gratuito e descubra qual pacote é perfeito para a sua casa.
          </p>
          <Button 
            onClick={handleQuoteClick}
            size="lg" 
            className="bg-white text-primary hover:bg-gray-100 h-14 px-8 text-lg font-bold"
          >
            Solicitar Orçamento Gratuito
          </Button>
        </div>
      </section>
    </LayoutPT>
  );
}
