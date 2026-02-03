import LayoutPT from "@/components/LayoutPT";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Flame, Zap, Droplets, Gauge, MapPin, ArrowRight } from "lucide-react";

export default function HeatPumpsPT() {
  return (
    <LayoutPT>
      {/* Hero Section - Leaf Red Theme */}
      <section className="relative min-h-[70vh] flex items-center bg-red-50/50">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="heat-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M20 0C31 0 40 9 40 20C40 31 31 40 20 40C9 40 0 31 0 20C0 9 9 0 20 0Z" fill="currentColor" className="text-accent"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#heat-pattern)" />
          </svg>
        </div>

        <div className="container grid lg:grid-cols-2 gap-12 items-center relative z-10 py-12">
          <div className="space-y-6 animate-in slide-in-from-bottom-8 duration-700 fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold tracking-wide uppercase">
              <Flame className="w-4 h-4" />
              Aquecimento e Arrefecimento Eficiente
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-display font-extrabold leading-tight text-slate-900">
              Bombas de Calor <span className="text-accent">Aquecimento e Arrefecimento</span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed border-l-4 border-accent pl-4">
              "Substitua a sua caldeira a gás por uma bomba de calor ar-água ecológica. Desfrute de conforto todo o ano com um único sistema que fornece piso radiante eficiente, águas quentes sanitárias e arrefecimento no verão."
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold h-14 px-8 text-lg shadow-lg shadow-accent/20">
                Pedir Orçamento
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-accent text-accent font-bold h-14 px-8 text-lg hover:bg-accent/5">
                Como Funciona
              </Button>
            </div>
          </div>

          <div className="relative h-[500px] hidden lg:block">
            <div className="absolute inset-0 bg-accent/10 rounded-[2rem] transform rotate-3 scale-95 z-0"></div>
            <img 
              src="/images/service-heatpump-garden.jpg" 
              alt="Unidade Exterior de Bomba de Calor Daikin Altherma" 
              className="absolute inset-0 w-full h-full object-cover rounded-[2rem] shadow-2xl z-10"
            />
            
            {/* Trust Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl z-20 border border-accent/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Eficiência A+++</p>
                  <p className="text-xs text-muted-foreground">300-400% Eficiente</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Heat Pumps */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-6">Porquê Escolher uma Bomba de Calor no Algarve?</h2>
            <p className="text-lg text-muted-foreground">
              As bombas de calor são o futuro do conforto doméstico, oferecendo eficiência superior em comparação com caldeiras tradicionais a gás ou elétricas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
              <Gauge className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">Eficiência Inigualável</h3>
              <p className="text-muted-foreground">
                Por cada 1kW de eletricidade usada, uma bomba de calor gera 3-4kW de energia térmica (COP 3-4), reduzindo drasticamente as faturas.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
              <Droplets className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">Sistema Tudo-em-Um</h3>
              <p className="text-muted-foreground">
                Um sistema gere o seu piso radiante, radiadores, águas quentes sanitárias e até ar condicionado no verão.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
              <Zap className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">Compatível com Solar</h3>
              <p className="text-muted-foreground">
                Idealmente emparelhado com painéis solares. Use a sua eletricidade solar gratuita para aquecimento a custo virtualmente zero.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <h2 className="text-4xl font-display font-bold text-slate-900 mb-12 text-center">As Nossas Soluções de Bombas de Calor</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Air-to-Water */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Droplets className="w-6 h-6 text-accent" /> Sistemas Ar-Água
              </h3>
              <p className="text-muted-foreground mb-6">
                Perfeito para renovações e novas construções. Liga-se a piso radiante, radiadores e depósitos de água quente.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span><span className="font-bold">Daikin Altherma 3:</span> Saída de alta temperatura (até 65°C), ideal para substituir caldeiras.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span><span className="font-bold">Depósito Integrado:</span> Unidades interiores compactas com depósito de água quente em aço inoxidável embutido.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span><span className="font-bold">Controlo Inteligente:</span> Gira horários de aquecimento e água quente via app de smartphone.</span>
                </li>
              </ul>
              <Button className="w-full bg-accent hover:bg-accent/90 text-white">Pedir Orçamento</Button>
            </div>

            {/* Pool Heating */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Flame className="w-6 h-6 text-accent" /> Aquecimento de Piscina
              </h3>
              <p className="text-muted-foreground mb-6">
                Estenda a sua época balnear por meses com uma bomba de calor dedicada para piscina.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span><span className="font-bold">Permutadores de Titânio:</span> Design resistente à corrosão para piscinas de água salgada e cloro.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span><span className="font-bold">Operação Silenciosa:</span> Baixos níveis de ruído adequados para áreas residenciais.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span><span className="font-bold">Tecnologia Inverter:</span> Ajusta a potência para manter a temperatura eficientemente.</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent/5">Ver Soluções para Piscina</Button>
            </div>
          </div>
        </div>
      </section>

      {/* AEO FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-display font-bold mb-8 text-center">Perguntas Frequentes sobre Bombas de Calor</h2>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-bold">Uma bomba de calor é adequada para uma casa antiga?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p className="mb-4 font-medium text-slate-900 bg-red-50 p-4 rounded-lg border-l-4 border-accent">
                  "Sim. Bombas de calor de alta temperatura como a Daikin Altherma 3 HT são desenhadas especificamente para propriedades antigas. Podem aquecer água até 70°C, tornando-as compatíveis com radiadores de ferro fundido existentes sem necessidade de substituir a tubagem."
                </p>
                <p>
                  No entanto, melhorar o isolamento é sempre recomendado para maximizar a eficiência e reduzir o tamanho da unidade necessária.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-bold">Quanto espaço precisa uma bomba de calor?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p className="mb-4 font-medium text-slate-900 bg-red-50 p-4 rounded-lg border-l-4 border-accent">
                  "Um sistema de bomba de calor ar-água consiste numa unidade exterior (tamanho semelhante a uma unidade de AC grande) e uma unidade interior. A unidade interior tem tipicamente o tamanho de um frigorífico (pegada de 60x60cm) se incluir um depósito de água quente integrado."
                </p>
                <p>
                  Se tiver espaço interior limitado, podemos instalar um sistema 'monobloco' onde todos os componentes estão no exterior, poupando espaço interior valioso.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-bold">Uma bomba de calor pode arrefecer a minha casa no verão?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p className="mb-4 font-medium text-slate-900 bg-red-50 p-4 rounded-lg border-l-4 border-accent">
                  "Sim, se tiver piso radiante ou ventiloconvetores. A bomba de calor pode funcionar em reverso para circular água fresca através do chão ou ventiloconvetores, baixando suavemente a temperatura interior."
                </p>
                <p>
                  Note que o arrefecimento via piso radiante é limitado pelo ponto de orvalho (para prevenir condensação no chão), por isso fornece 'arrefecimento de conforto' em vez do ar frio intenso de uma unidade de AC tradicional.
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
                <MapPin className="w-4 h-4 text-accent" /> {city}
              </span>
            ))}
          </div>
          <div className="mt-12">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold px-8">
              Peça o Seu Orçamento Grátis Agora
            </Button>
          </div>
        </div>
      </section>
    </LayoutPT>
  );
}
