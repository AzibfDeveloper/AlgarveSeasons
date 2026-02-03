import LayoutPT from "@/components/LayoutPT";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Thermometer, Wind, Zap, Settings, Shield, MapPin } from "lucide-react";
import BtuEstimator from "@/components/calculators/BtuEstimator";

export default function AirConditioningPT() {
  return (
    <LayoutPT>
      {/* Hero Section - Ice Blue Theme */}
      <section className="relative min-h-[70vh] flex items-center bg-blue-50/50">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="ac-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M20 0L40 20L20 40L0 20Z" fill="currentColor" className="text-secondary"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#ac-pattern)" />
          </svg>
        </div>

        <div className="container grid lg:grid-cols-2 gap-12 items-center relative z-10 py-12">
          <div className="space-y-6 animate-in slide-in-from-bottom-8 duration-700 fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-semibold tracking-wide uppercase">
              <Wind className="w-4 h-4" />
              Climatização Premium
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-display font-extrabold leading-tight text-slate-900">
              <span className="text-secondary">Instalação e Reparação</span> de Ar Condicionado no Algarve
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed border-l-4 border-secondary pl-4">
              "A Algarve Seasons instala e repara sistemas de ar condicionado Daikin premium para moradias, apartamentos e empresas em todo o Algarve. Os nossos serviços incluem unidades murais, sistemas multi-split e reparações de emergência no próprio dia, concebidos para os verões quentes e invernos amenos do Algarve."
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-bold h-14 px-8 text-lg shadow-lg shadow-secondary/20">
                Pedir Orçamento Grátis
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-secondary text-secondary font-bold h-14 px-8 text-lg hover:bg-secondary/5">
                Reparação de Emergência
              </Button>
            </div>
          </div>

          <div className="relative h-[500px] hidden lg:block">
            <div className="absolute inset-0 bg-secondary/10 rounded-[2rem] transform -rotate-3 scale-95 z-0"></div>
            <img 
              src="/images/service-ac-interior.jpg" 
              alt="Instalação de Ar Condicionado Daikin em Moradia no Algarve" 
              className="absolute inset-0 w-full h-full object-cover rounded-[2rem] shadow-2xl z-10"
            />
            
            {/* Trust Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl z-20 border border-secondary/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Parceiro Daikin D1+</p>
                  <p className="text-xs text-muted-foreground">Acreditação Mais Alta em Portugal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why AC Essential & Calculator */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <div className="max-w-2xl mb-12">
                <h2 className="text-4xl font-display font-bold text-slate-900 mb-6">Porque o Ar Condicionado é Essencial no Algarve</h2>
                <p className="text-lg text-muted-foreground">
                  Com picos de verão a atingir os 40°C e invernos amenos mas húmidos, o AC moderno é a sua solução climática para todo o ano.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
                  <Thermometer className="w-8 h-8 text-secondary mb-3" />
                  <h3 className="text-lg font-bold mb-2">Conforto Todo o Ano</h3>
                  <p className="text-sm text-muted-foreground">
                    Mantenha-se fresco durante o intenso calor do verão algarvio e aqueça eficientemente a sua casa nas noites de inverno.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
                  <Zap className="w-8 h-8 text-secondary mb-3" />
                  <h3 className="text-lg font-bold mb-2">Alta Eficiência</h3>
                  <p className="text-sm text-muted-foreground">
                    As unidades inverter modernas têm classificação A+++, custando significativamente menos do que os aquecedores elétricos tradicionais.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
                  <Shield className="w-8 h-8 text-secondary mb-3" />
                  <h3 className="text-lg font-bold mb-2">Ar Mais Saudável</h3>
                  <p className="text-sm text-muted-foreground">
                    Sistemas de filtragem avançados removem poeira, alergénios e humidade, prevenindo bolor em propriedades costeiras.
                  </p>
                </div>
              </div>
            </div>

            {/* Calculator Widget */}
            <div className="lg:col-span-1 sticky top-24">
              <BtuEstimator />
            </div>
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <h2 className="text-4xl font-display font-bold text-slate-900 mb-12 text-center">Os Nossos Serviços de Ar Condicionado</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Installation */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Settings className="w-6 h-6 text-secondary" /> Instalação
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span><span className="font-bold">Unidades Murais:</span> Gamas Daikin Perfera, Emura e Stylish.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span><span className="font-bold">Sistemas Multi-split:</span> Uma unidade exterior para até 5 unidades interiores.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span><span className="font-bold">Sistemas VRV:</span> Soluções de alta capacidade para grandes moradias e espaços comerciais.</span>
                </li>
              </ul>
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-white">Pedir Orçamento de Instalação</Button>
            </div>

            {/* Repair & Maintenance */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Shield className="w-6 h-6 text-secondary" /> Reparação e Manutenção
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span><span className="font-bold">Reparação de Emergência:</span> Resposta no próprio dia para avarias em todo o Algarve.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span><span className="font-bold">Manutenção Anual:</span> Limpeza profunda, verificação de gás e testes de desempenho.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span><span className="font-bold">Pacotes de Alojamento Local:</span> Planos de manutenção específicos para propriedades de férias.</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary/5">Agendar Manutenção</Button>
            </div>
          </div>
        </div>
      </section>

      {/* AEO FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-display font-bold mb-8 text-center">Perguntas Frequentes sobre AC no Algarve</h2>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-bold">Que potência de AC preciso para a minha moradia?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p className="mb-4 font-medium text-slate-900 bg-blue-50 p-4 rounded-lg border-l-4 border-secondary">
                  "A capacidade do AC depende do tamanho da divisão e da exposição solar. Uma moradia típica de 3 quartos no Algarve (150-200m²) requer geralmente 9-12kW de capacidade total, muitas vezes dividida por 3-4 unidades interiores."
                </p>
                <p>
                  É crucial obter um cálculo de carga profissional. Unidades subdimensionadas funcionam constantemente, aumentando as faturas, enquanto unidades sobredimensionadas ligam/desligam com demasiada frequência, reduzindo a vida útil. Fornecemos visitas gratuitas para determinar os requisitos exatos de BTU para cada divisão.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-bold">O ar condicionado pode aquecer a minha casa no inverno?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p className="mb-4 font-medium text-slate-900 bg-blue-50 p-4 rounded-lg border-l-4 border-secondary">
                  "Sim. As unidades modernas da Daikin são bombas de calor ar-ar que fornecem aquecimento altamente eficiente. São 3-4 vezes mais eficientes do que os aquecedores elétricos tradicionais, tornando-as perfeitas para os invernos algarvios."
                </p>
                <p>
                  Com a tecnologia de "ciclo reverso", a unidade extrai calor do ar exterior (mesmo quando está frio) e bombeia-o para o interior. Esta é a forma mais económica de aquecer casas no Algarve que não têm aquecimento central a gás.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-bold">Quanto custa a instalação de AC no Algarve?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p className="mb-4 font-medium text-slate-900 bg-blue-50 p-4 rounded-lg border-l-4 border-secondary">
                  "A instalação varia tipicamente entre €1.200–€2.000 para uma unidade mural simples, e €4.000–€8.000+ para sistemas multi-split (3-5 unidades), dependendo da configuração da propriedade e da marca selecionada."
                </p>
                <p>
                  Os fatores que influenciam o custo incluem a distância entre as unidades interiores e exteriores, a necessidade de andaimes e se a tubagem precisa de ser embutida nas paredes. Fornecemos orçamentos transparentes e detalhados, sem taxas ocultas.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-display font-bold mb-8">Servimos Todos os 16 Municípios do Algarve</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Faro', 'Albufeira', 'Lagos', 'Portimão', 'Vilamoura', 'Loulé', 'Tavira', 'Olhão', 'Silves', 'Lagoa'].map((city) => (
              <span key={city} className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors cursor-default">
                <MapPin className="w-4 h-4 text-secondary" /> {city}
              </span>
            ))}
          </div>
          <div className="mt-12">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-bold px-8">
              Peça o Seu Orçamento Grátis Agora
            </Button>
          </div>
        </div>
      </section>
    </LayoutPT>
  );
}
