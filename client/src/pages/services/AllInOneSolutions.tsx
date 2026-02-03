import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Zap, Sun, Wind, Leaf, TrendingDown, Lightbulb, Shield } from "lucide-react";
import { useLocation } from "wouter";

export default function AllInOneSolutions() {
  const [, setLocation] = useLocation();

  const bundles = [
    {
      id: 1,
      name: "Algarve Ready Bundle",
      description: "Air Conditioning + Solar Water Heating",
      tagline: "Instant comfort & lower water heating costs",
      price: "From €3,500",
      savings: "Save up to 40% on water heating",
      features: [
        "Daikin premium wall-mounted AC unit",
        "Solar thermal water heating system",
        "Professional installation",
        "5-year warranty",
        "24/7 emergency support",
        "Annual maintenance included"
      ],
      icon: Wind,
      color: "bg-blue-50 border-blue-200"
    },
    {
      id: 2,
      name: "Sustainable Living Bundle",
      description: "Solar Water Heating + Solar Photovoltaic",
      tagline: "Massive savings & eco-friendly living",
      price: "From €6,500",
      savings: "Save up to 70% on energy costs",
      features: [
        "5-10kW solar photovoltaic system",
        "Solar thermal water heating",
        "Huawei hybrid inverter",
        "Professional installation",
        "25-year panel warranty",
        "Monitoring app included",
        "Battery storage ready"
      ],
      icon: Sun,
      color: "bg-yellow-50 border-yellow-200"
    },
    {
      id: 3,
      name: "Ultimate Home Comfort Bundle",
      description: "AC + Solar Water Heating + Solar Photovoltaic",
      tagline: "Maximum savings, comfort & sustainability",
      price: "From €9,500",
      savings: "Save up to 90% on energy costs",
      features: [
        "Daikin AC system (cooling & heating)",
        "10kW solar photovoltaic array",
        "Solar thermal water heating",
        "Huawei hybrid inverter",
        "Tesla Powerwall battery storage",
        "Smart home integration",
        "Lifetime support",
        "Professional installation & warranty"
      ],
      icon: Zap,
      color: "bg-purple-50 border-purple-200",
      featured: true
    },
    {
      id: 4,
      name: "Complete Energy Solution",
      description: "AC + Solar + Heat Pump + Battery Storage",
      tagline: "Full energy independence & year-round comfort",
      price: "From €12,500",
      savings: "Save up to 90% on energy costs",
      features: [
        "Daikin AC system (cooling & heating)",
        "10kW solar array",
        "Air-to-water heat pump",
        "Tesla Powerwall battery",
        "Smart home integration",
        "Lifetime support",
        "Unlimited maintenance",
        "Energy monitoring dashboard"
      ],
      icon: Leaf,
      color: "bg-green-50 border-green-200"
    }
  ];

  const handleQuoteClick = () => {
    setLocation('/contact');
  };

  return (
    <Layout>
      <Helmet>
        <title>All-In-One Solutions | Bundle Packages | Algarve Seasons</title>
        <meta name="description" content="Discover our all-in-one HVAC and renewable energy bundle packages. AC + Solar + Heat Pumps + Battery storage for complete climate control and energy independence." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-secondary/10 to-primary/10">
        <div className="container max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl font-display font-bold text-secondary">
            Unlock the Secret to a Sustainable Future
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive services under one roof. Our integrated bundle packages turn Algarve sunshine into free electricity, cool air, and hot water—slashing your energy bills by up to 90% while contributing to a cleaner, greener planet.
          </p>
        </div>
      </section>

      {/* Why Bundle Packages */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-display font-bold text-secondary mb-6 text-center">
            Why Choose Bundle Packages?
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            We don't just offer solar solutions; we provide a complete ecosystem of energy-efficient systems. All components work together seamlessly to maximize your savings, comfort, and environmental impact.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingDown,
                title: "Save Up to 90%",
                description: "Slash your energy bills dramatically with integrated systems that work together for maximum efficiency."
              },
              {
                icon: Shield,
                title: "Single Point of Support",
                description: "One company handles installation, maintenance, and support for all systems. No coordination headaches."
              },
              {
                icon: Lightbulb,
                title: "Integrated System Design",
                description: "Our experts design systems that complement each other for peak efficiency and optimal performance."
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
            Our Exclusive Bundle Packages
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
                      Most Popular
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
                      Get Free Quote
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
            Environmental Impact & Sustainability
          </h2>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-lg border border-green-200">
              <h3 className="text-2xl font-bold text-secondary mb-4">Dramatically Reduce Your Carbon Footprint</h3>
              <p className="text-lg text-muted-foreground mb-4">
                By switching to our integrated renewable energy and efficient climate control systems, you'll dramatically reduce your carbon footprint while enjoying guilt-free comfort all year round. Feel good about doing your part for the planet.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Leaf className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700"><strong>Solar Power:</strong> Generate clean electricity from the Algarve sun, eliminating grid dependency</span>
                </li>
                <li className="flex items-start gap-3">
                  <Wind className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700"><strong>Heat Pumps:</strong> Replace gas boilers with eco-friendly heating and cooling systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700"><strong>Battery Storage:</strong> Store excess solar energy for use during peak hours or at night</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-lg border border-blue-200">
              <h3 className="text-2xl font-bold text-secondary mb-4">Immediate Financial Savings</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Start saving from day one with clear financial returns. Our bundle packages offer 15-20% savings compared to purchasing systems separately, plus significant ongoing energy cost reductions.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded border border-blue-100">
                  <p className="text-sm text-muted-foreground mb-2">Average Annual Savings</p>
                  <p className="text-3xl font-bold text-primary">€1,500 - €3,000+</p>
                </div>
                <div className="bg-white p-4 rounded border border-blue-100">
                  <p className="text-sm text-muted-foreground mb-2">Payback Period</p>
                  <p className="text-3xl font-bold text-primary">5-8 Years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Smart Homeowners Choose Us */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-display font-bold text-secondary mb-12 text-center">
            Why Smart Homeowners Choose Algarve Seasons
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Authority & Expertise",
                description: "Trusted by hundreds of Algarve homeowners since 2016. Rated 5-stars on Google Reviews with 200+ installations."
              },
              {
                title: "Convenience & Simplicity",
                description: "All-in-one installation, maintenance, and warranty. No hassle. No headaches. One company handles everything."
              },
              {
                title: "Environmental Impact",
                description: "Dramatically reduce your carbon footprint. Feel good about doing your part for the planet."
              },
              {
                title: "Flexible Financing",
                description: "Spread costs over time with our flexible payment plans and financing options tailored to your budget."
              },
              {
                title: "Future-Proof Investment",
                description: "Scalable systems that grow with your needs. Add solar or storage later as your requirements evolve."
              },
              {
                title: "Certified Partners",
                description: "Official Daikin D1+ Premium Partner, Tesla Powerwall Authorized Dealer, and Huawei certified installer."
              }
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-lg text-secondary mb-2">✓ {benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonial */}
      <section className="py-20 bg-white">
        <div className="container max-w-3xl">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-12 rounded-lg border border-primary/20">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-2xl text-yellow-400">★</span>
              ))}
            </div>
            <p className="text-xl text-slate-700 mb-6 italic">
              "Dan spent time with us to help get the right configuration of air cons for our needs in both the winter and summer seasons. On the day of installation, Dan and his team were extremely professional: the quality of the work, the attention to detail, and their tidiness were second to none. Highly recommend this company!"
            </p>
            <p className="font-bold text-lg text-secondary">Rachel Wilson</p>
            <p className="text-muted-foreground">5-Star Google Review</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary to-primary text-white">
        <div className="container max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-display font-bold">
            Join the Algarve Solar Revolution
          </h2>
          <p className="text-xl text-white/90">
            Hundreds of your neighbours have already upgraded their homes with our bundled solutions. They've stopped throwing money away and started investing in their homes' future. Don't be left behind paying unnecessary bills.
          </p>
          <Button 
            onClick={handleQuoteClick}
            className="bg-white text-primary hover:bg-white/90 font-bold h-12 px-8 text-lg"
          >
            Get Your Free Quote Today
          </Button>
        </div>
      </section>
    </Layout>
  );
}
