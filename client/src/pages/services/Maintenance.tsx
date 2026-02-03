import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Check, PenTool, Calendar, Shield, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Maintenance() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/90 z-0"></div>
        <div className="absolute inset-0 bg-[url('/images/service-ac-interior.jpg')] bg-cover bg-center opacity-20 z-0"></div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm font-semibold tracking-wide uppercase mb-6 border border-blue-500/30">
              <PenTool className="w-4 h-4" />
              Service & Repair
            </div>
            <h1 className="text-5xl font-display font-bold mb-6 leading-tight">
              Protect Your Investment with <span className="text-blue-400">Pro Maintenance</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Regular maintenance ensures your HVAC systems run efficiently, last longer, and keep your air clean. We offer comprehensive service plans for homes and businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact?service=Maintenance">
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white font-bold h-14 px-8 text-lg">
                  Book a Service
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Plans */}
      <section className="py-24 bg-slate-50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Maintenance Packages</h2>
            <p className="text-muted-foreground text-lg">
              Choose the right level of care for your system. Regular servicing prevents costly breakdowns and maintains your warranty.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-blue-200 transition-colors">
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-6">
                <Calendar className="w-6 h-6 text-slate-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">One-Off Service</h3>
              <p className="text-slate-500 mb-6">Perfect for annual check-ups or specific repairs.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm text-slate-600">
                  <Check className="w-4 h-4 text-blue-500 mt-1" /> Deep cleaning of filters
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-600">
                  <Check className="w-4 h-4 text-blue-500 mt-1" /> Gas pressure check
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-600">
                  <Check className="w-4 h-4 text-blue-500 mt-1" /> Drain line clearing
                </li>
              </ul>
              <Link href="/contact?service=Maintenance&plan=One-Off">
                <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white">
                  Get Quote
                </Button>
              </Link>
            </div>

            {/* Standard Plan */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-blue-500 relative transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                Most Popular
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Annual Contract</h3>
              <p className="text-slate-500 mb-6">Complete peace of mind with scheduled visits.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm text-slate-600">
                  <Check className="w-4 h-4 text-blue-500 mt-1" /> 2 Scheduled visits per year
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-600">
                  <Check className="w-4 h-4 text-blue-500 mt-1" /> Priority breakdown response
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-600">
                  <Check className="w-4 h-4 text-blue-500 mt-1" /> 10% Discount on parts
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-600">
                  <Check className="w-4 h-4 text-blue-500 mt-1" /> Full system health report
                </li>
              </ul>
              <Link href="/contact?service=Maintenance&plan=Annual">
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold shadow-lg shadow-blue-500/20">
                  Get Quote
                </Button>
              </Link>
            </div>

            {/* Commercial Plan */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-blue-200 transition-colors">
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-6">
                <PenTool className="w-6 h-6 text-slate-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Commercial</h3>
              <p className="text-slate-500 mb-6">Tailored solutions for offices and hotels.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm text-slate-600">
                  <Check className="w-4 h-4 text-blue-500 mt-1" /> Monthly/Quarterly visits
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-600">
                  <Check className="w-4 h-4 text-blue-500 mt-1" /> Emergency 24/7 callout
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-600">
                  <Check className="w-4 h-4 text-blue-500 mt-1" /> Compliance certification
                </li>
              </ul>
              <Link href="/contact?service=Commercial">
                <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
