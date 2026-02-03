import LayoutPT from "@/components/LayoutPT";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Sun, Battery, Coins, Zap, BarChart3, MapPin } from "lucide-react";
import SolarCalculator from "@/components/calculators/SolarCalculator";

export default function SolarEnergyPT() {
  return (
    <LayoutPT>
      {/* Hero Section - Sun Orange Theme */}
      <section className="relative min-h-[70vh] flex items-center bg-orange-50/50">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="solar-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="10" fill="currentColor" className="text-primary"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#solar-pattern)" />
          </svg>
        </div>

        <div className="container grid lg:grid-cols-2 gap-12 items-center relative z-10 py-12">
          <div className="space-y-6 animate-in slide-in-from-bottom-8 duration-700 fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase">
              <Sun className="w-4 h-4" />
              Especialistas em Solar no Algarve
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-display font-extrabold leading-tight text-slate-900">
              Energia Solar <span className="text-primary">Sistemas e Baterias</span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed border-l-4 border-primary pl-4">
              "Transforme o sol do Algarve em eletricidade gratuita. Desenhamos e instalamos sistemas fotovoltaicos de alto desempenho com baterias Tesla Powerwall e Huawei para máxima independência energética e poupança."
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold h-14 px-8 text-lg shadow-lg shadow-primary/20">
                Pedir Orçamento Solar
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary font-bold h-14 px-8 text-lg hover:bg-primary/5">
                Calcular Poupança
              </Button>
            </div>
          </div>

          <div className="relative h-[500px] hidden lg:block">
            <div className="absolute inset-0 bg-primary/10 rounded-[2rem] transform rotate-3 scale-95 z-0"></div>
            <img 
              src="/images/service-solar-roof.jpg" 
              alt="Painéis Solares em Telhado de Moradia no Algarve" 
              className="absolute inset-0 w-full h-full object-cover rounded-[2rem] shadow-2xl z-10"
            />
            
            {/* Trust Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl z-20 border border-primary/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Battery className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Certificado Tesla</p>
                  <p className="text-xs text-muted-foreground">Instalador Powerwall</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Solar & Calculator */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <div className="max-w-2xl mb-12">
                <h2 className="text-4xl font-display font-bold text-slate-900 mb-6">Porque o Solar é um Investimento Inteligente no Algarve</h2>
                <p className="text-lg text-muted-foreground">
                  Com mais de 300 dias de sol por ano, o Algarve é um dos melhores locais da Europa para produção de energia solar.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
                  <Coins className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-lg font-bold mb-2">Reduza as Faturas de Energia</h3>
                  <p className="text-sm text-muted-foreground">
                    Corte os custos de eletricidade até 70% gerando a sua própria energia para AC, aquecimento de piscina e eletrodomésticos.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
                  <Battery className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-lg font-bold mb-2">Independência Energética</h3>
                  <p className="text-sm text-muted-foreground">
                    Adicione uma bateria para armazenar o excesso de energia diurna para usar à noite, protegendo-o do aumento dos preços da rede.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
                  <BarChart3 className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-lg font-bold mb-2">Incentivos Governamentais</h3>
                  <p className="text-sm text-muted-foreground">
                    Beneficie de IVA reduzido (6%) e potencial apoio do Fundo Ambiental (até €7.500) para melhorias renováveis.
                  </p>
                </div>
              </div>
            </div>

            {/* Calculator Widget */}
            <div className="lg:col-span-1 sticky top-24">
              <SolarCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <h2 className="text-4xl font-display font-bold text-slate-900 mb-12 text-center">As Nossas Soluções de Energia Solar</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* PV Systems */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Sun className="w-6 h-6 text-primary" /> Sistemas Fotovoltaicos
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span><span className="font-bold">Painéis de Alta Eficiência:</span> Painéis monocristalinos Tier-1 otimizados para alto desempenho no calor.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span><span className="font-bold">Inversores Inteligentes:</span> Inversores Huawei e Fronius com monitorização por app.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span><span className="font-bold">Design Personalizado:</span> Opções de montagem em telhado, solo ou integração em pérgolas.</span>
                </li>
              </ul>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">Pedir Orçamento Solar</Button>
            </div>

            {/* Battery Storage */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Battery className="w-6 h-6 text-primary" /> Armazenamento em Bateria
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span><span className="font-bold">Tesla Powerwall:</span> Capacidade de 13.5kWh, backup integrado e design elegante.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span><span className="font-bold">Huawei Luna:</span> Sistema de bateria modular escalável de 5kWh a 30kWh.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span><span className="font-bold">Energia de Backup:</span> Mantenha luzes e eletrodomésticos essenciais a funcionar durante falhas de energia.</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/5">Saber Mais Sobre Baterias</Button>
            </div>
          </div>
        </div>
      </section>

      {/* AEO FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-display font-bold mb-8 text-center">Perguntas Frequentes sobre Solar em Portugal</h2>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-bold">Qual é o período de retorno para solar no Algarve?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p className="mb-4 font-medium text-slate-900 bg-orange-50 p-4 rounded-lg border-l-4 border-primary">
                  "Devido aos altos preços da eletricidade e excelente exposição solar, o período típico de retorno para um sistema solar residencial no Algarve é de 3 a 5 anos, oferecendo um ROI de 15-20%."
                </p>
                <p>
                  Isto é significativamente mais rápido do que no Norte da Europa. Após o período de retorno, a eletricidade que gera é essencialmente gratuita durante os restantes 20+ anos de vida útil dos painéis.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-bold">Existem incentivos governamentais para painéis solares em 2026?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p className="mb-4 font-medium text-slate-900 bg-orange-50 p-4 rounded-lg border-l-4 border-primary">
                  "Sim. O 'Fundo Ambiental' oferece apoio até €7.500 para melhorias de energia renovável, cobrindo até 85% dos custos. Além disso, o equipamento solar é taxado a uma taxa de IVA reduzida de 6%."
                </p>
                <p>
                  A nossa equipa trata da orientação burocrática para o ajudar a maximizar estes benefícios. Note que os fundos são limitados e libertados em fases, por isso é melhor candidatar-se cedo.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-bold">Preciso de uma bateria para o meu sistema solar?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p className="mb-4 font-medium text-slate-900 bg-orange-50 p-4 rounded-lg border-l-4 border-primary">
                  "Embora não seja obrigatório, uma bateria é altamente recomendada para casas no Algarve. Permite-lhe armazenar o excesso de energia solar diurna para alimentar o seu AC e luzes à noite, aumentando o seu autoconsumo de ~30% para mais de 70%."
                </p>
                <p>
                  Sem uma bateria, qualquer excesso de energia que gere durante o dia é enviado de volta para a rede (muitas vezes por pouco ou nenhum pagamento). Uma bateria garante que usa a energia que produz.
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
                <MapPin className="w-4 h-4 text-primary" /> {city}
              </span>
            ))}
          </div>
          <div className="mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold px-8">
              Peça o Seu Orçamento Grátis Agora
            </Button>
          </div>
        </div>
      </section>
    </LayoutPT>
  );
}
