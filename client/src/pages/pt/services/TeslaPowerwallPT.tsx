import LayoutPT from "@/components/LayoutPT";
import { Button } from "@/components/ui/button";
import { Check, Battery, Zap, Smartphone, Shield, Home, ArrowRight } from "lucide-react";

export default function TeslaPowerwallPT() {
  return (
    <LayoutPT>
      {/* Hero Section - Tesla/Tech Theme */}
      <section className="relative min-h-[80vh] flex items-center bg-slate-900 text-white overflow-hidden">
        {/* Abstract Tech Background */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
           <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="tech-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#48BB78" stopOpacity="0.2"/>
                <stop offset="100%" stopColor="#48BB78" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#tech-grad)"/>
            <path d="M0 100 L100 0" stroke="#48BB78" strokeWidth="0.5" strokeOpacity="0.3"/>
            <path d="M20 100 L120 0" stroke="#48BB78" strokeWidth="0.5" strokeOpacity="0.3"/>
            <path d="M40 100 L140 0" stroke="#48BB78" strokeWidth="0.5" strokeOpacity="0.3"/>
          </svg>
        </div>

        <div className="container grid lg:grid-cols-2 gap-16 items-center relative z-10 py-12">
          <div className="space-y-8 animate-in slide-in-from-bottom-8 duration-700 fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm font-semibold tracking-wide uppercase border border-green-500/30">
              <Zap className="w-4 h-4" />
              Instalador Certificado
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-display font-extrabold leading-tight">
              Tesla <span className="text-green-400">Powerwall 3</span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
              Garanta a sua independência energética com a bateria doméstica mais avançada do mundo. Armazene a sua energia solar, proteja a sua casa de falhas de energia e alimente a sua vida—dia e noite.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white font-bold h-14 px-8 text-lg shadow-lg shadow-green-500/20">
                Encomendar Powerwall
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white font-bold h-14 px-8 text-lg hover:bg-white/10">
                Ver Especificações
              </Button>
            </div>
            
            <div className="flex items-center gap-8 text-sm font-medium text-gray-400 pt-4">
               <div className="flex items-center gap-2">
                 <Battery className="w-5 h-5 text-green-400" /> Capacidade 13.5 kWh
               </div>
               <div className="flex items-center gap-2">
                 <Shield className="w-5 h-5 text-green-400" /> Garantia de 10 Anos
               </div>
            </div>
          </div>

          <div className="relative h-[600px] hidden lg:flex items-center justify-center">
             {/* Powerwall Visualization Placeholder - In real project, use actual product image */}
             <div className="relative w-64 h-[400px] bg-white rounded-lg shadow-[0_0_50px_rgba(72,187,120,0.3)] flex flex-col items-center justify-center z-10">
                <div className="absolute top-0 w-full h-full bg-gradient-to-br from-white to-gray-100 rounded-lg"></div>
                <div className="z-10 text-slate-900 font-display font-bold text-2xl tracking-widest">TESLA</div>
                <div className="absolute right-0 top-10 h-32 w-1 bg-green-500 shadow-[0_0_15px_#48BB78]"></div>
             </div>
             
             {/* Glow Effect */}
             <div className="absolute inset-0 bg-green-500/10 blur-3xl rounded-full z-0"></div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container">
           <div className="grid md:grid-cols-3 gap-12">
             <div className="space-y-4">
               <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                 <Home className="w-6 h-6 text-green-600" />
               </div>
               <h3 className="text-2xl font-bold text-slate-900">Backup Total da Casa</h3>
               <p className="text-muted-foreground">
                 A Powerwall deteta falhas na rede e torna-se automaticamente a principal fonte de energia da sua casa. Mantenha luzes, Wi-Fi e frigoríficos a funcionar sem interrupção.
               </p>
             </div>
             
             <div className="space-y-4">
               <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                 <Smartphone className="w-6 h-6 text-green-600" />
               </div>
               <h3 className="text-2xl font-bold text-slate-900">Controlo Móvel</h3>
               <p className="text-muted-foreground">
                 Monitorize a sua produção e consumo de energia em tempo real com a app Tesla. Defina preferências para otimizar a independência energética ou a poupança.
               </p>
             </div>
             
             <div className="space-y-4">
               <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                 <Zap className="w-6 h-6 text-green-600" />
               </div>
               <h3 className="text-2xl font-bold text-slate-900">Controlo Baseado no Tempo</h3>
               <p className="text-muted-foreground">
                 Se o seu fornecedor oferece tarifas bi-horárias, a Powerwall pode carregar quando a eletricidade é barata e descarregar quando é cara, maximizando a sua poupança.
               </p>
             </div>
           </div>
        </div>
      </section>

      {/* Tech Specs */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div>
               <h2 className="text-4xl font-display font-bold text-slate-900 mb-6">Especificações Powerwall 3</h2>
               <p className="text-lg text-muted-foreground mb-8">
                 A última geração da Powerwall apresenta um inversor solar integrado, maior potência de saída e instalação simplificada.
               </p>
               
               <div className="space-y-6">
                 <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                   <span className="font-medium text-slate-600">Capacidade Energética</span>
                   <span className="font-bold text-slate-900">13.5 kWh</span>
                 </div>
                 <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                   <span className="font-medium text-slate-600">Potência na Rede</span>
                   <span className="font-bold text-slate-900">11.5 kW contínuos</span>
                 </div>
                 <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                   <span className="font-medium text-slate-600">Potência de Backup</span>
                   <span className="font-bold text-slate-900">11.5 kW contínuos</span>
                 </div>
                 <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                   <span className="font-medium text-slate-600">Dimensões</span>
                   <span className="font-bold text-slate-900">1098 x 609 x 193 mm</span>
                 </div>
                 <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                   <span className="font-medium text-slate-600">Peso</span>
                   <span className="font-bold text-slate-900">130 kg</span>
                 </div>
                 <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                   <span className="font-medium text-slate-600">Garantia</span>
                   <span className="font-bold text-slate-900">10 Anos</span>
                 </div>
               </div>
             </div>
             
             <div className="bg-slate-900 text-white p-10 rounded-3xl">
               <h3 className="text-2xl font-bold mb-6">Pronto para Instalar?</h3>
               <ul className="space-y-4 mb-8">
                 <li className="flex items-start gap-3">
                   <Check className="w-5 h-5 text-green-400 mt-1" />
                   <span className="text-gray-300">Instalador Certificado Tesla no Algarve</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <Check className="w-5 h-5 text-green-400 mt-1" />
                   <span className="text-gray-300">Integração perfeita com solar existente</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <Check className="w-5 h-5 text-green-400 mt-1" />
                   <span className="text-gray-300">Orientação sobre incentivos do Fundo Ambiental</span>
                 </li>
               </ul>
               <Button size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white font-bold h-12">
                 Pedir Orçamento
               </Button>
               <p className="text-center text-xs text-gray-500 mt-4">
                 *Os prazos de instalação variam consoante a disponibilidade de stock.
               </p>
             </div>
          </div>
        </div>
      </section>
    </LayoutPT>
  );
}
