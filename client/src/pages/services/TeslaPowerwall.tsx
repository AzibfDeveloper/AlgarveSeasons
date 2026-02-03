import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Check, Battery, Zap, Smartphone, Shield, Home, ArrowRight } from "lucide-react";

export default function TeslaPowerwall() {
  return (
    <Layout>
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
              Certified Installer
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-display font-extrabold leading-tight">
              Tesla <span className="text-green-400">Powerwall 3</span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
              Secure your energy independence with the world's most advanced home battery. Store your solar energy, protect your home from outages, and power your life—day and night.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white font-bold h-14 px-8 text-lg shadow-lg shadow-green-500/20">
                Order Powerwall
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white font-bold h-14 px-8 text-lg hover:bg-white/10">
                View Specs
              </Button>
            </div>
            
            <div className="flex items-center gap-8 text-sm font-medium text-gray-400 pt-4">
               <div className="flex items-center gap-2">
                 <Battery className="w-5 h-5 text-green-400" /> 13.5 kWh Capacity
               </div>
               <div className="flex items-center gap-2">
                 <Shield className="w-5 h-5 text-green-400" /> 10-Year Warranty
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
               <h3 className="text-2xl font-bold text-slate-900">Whole-Home Backup</h3>
               <p className="text-muted-foreground">
                 Powerwall detects grid outages and automatically becomes your home's main energy source. Keep lights, Wi-Fi, and refrigerators running without interruption.
               </p>
             </div>
             
             <div className="space-y-4">
               <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                 <Smartphone className="w-6 h-6 text-green-600" />
               </div>
               <h3 className="text-2xl font-bold text-slate-900">Mobile Control</h3>
               <p className="text-muted-foreground">
                 Monitor your energy production and consumption in real-time with the Tesla app. Set preferences to optimize for energy independence or savings.
               </p>
             </div>
             
             <div className="space-y-4">
               <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                 <Zap className="w-6 h-6 text-green-600" />
               </div>
               <h3 className="text-2xl font-bold text-slate-900">Time-Based Control</h3>
               <p className="text-muted-foreground">
                 If your utility offers time-of-use rates, Powerwall can charge when electricity is cheap and discharge when it's expensive, maximizing your savings.
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
               <h2 className="text-4xl font-display font-bold text-slate-900 mb-6">Powerwall 3 Specifications</h2>
               <p className="text-lg text-muted-foreground mb-8">
                 The latest generation of Powerwall features an integrated solar inverter, higher power output, and simplified installation.
               </p>
               
               <div className="space-y-6">
                 <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                   <span className="font-medium text-slate-600">Energy Capacity</span>
                   <span className="font-bold text-slate-900">13.5 kWh</span>
                 </div>
                 <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                   <span className="font-medium text-slate-600">On-Grid Power</span>
                   <span className="font-bold text-slate-900">11.5 kW continuous</span>
                 </div>
                 <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                   <span className="font-medium text-slate-600">Backup Power</span>
                   <span className="font-bold text-slate-900">11.5 kW continuous</span>
                 </div>
                 <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                   <span className="font-medium text-slate-600">Dimensions</span>
                   <span className="font-bold text-slate-900">1098 x 609 x 193 mm</span>
                 </div>
                 <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                   <span className="font-medium text-slate-600">Weight</span>
                   <span className="font-bold text-slate-900">130 kg</span>
                 </div>
                 <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                   <span className="font-medium text-slate-600">Warranty</span>
                   <span className="font-bold text-slate-900">10 Years</span>
                 </div>
               </div>
             </div>
             
             <div className="bg-slate-900 text-white p-10 rounded-3xl">
               <h3 className="text-2xl font-bold mb-6">Ready to Install?</h3>
               <ul className="space-y-4 mb-8">
                 <li className="flex items-start gap-3">
                   <Check className="w-5 h-5 text-green-400 mt-1" />
                   <span className="text-gray-300">Certified Tesla Installer in Algarve</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <Check className="w-5 h-5 text-green-400 mt-1" />
                   <span className="text-gray-300">Seamless integration with existing solar</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <Check className="w-5 h-5 text-green-400 mt-1" />
                   <span className="text-gray-300">Guidance on Fundo Ambiental incentives</span>
                 </li>
               </ul>
               <Button size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white font-bold h-12">
                 Get a Quote
               </Button>
               <p className="text-center text-xs text-gray-500 mt-4">
                 *Installation timelines vary based on stock availability.
               </p>
             </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
