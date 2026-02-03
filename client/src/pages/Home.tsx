import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, MapPin, Shield, Star, Sun, Wind, Zap } from "lucide-react";
import { Link, useLocation } from "wouter";
import { Helmet } from "react-helmet-async";
import Reviews from "@/components/Reviews";
import SeasonalHeroText from "@/components/SeasonalHeroText";
import TrustBadges from "@/components/TrustBadges";

export default function Home() {
  const [, setLocation] = useLocation();

  const handleContactClick = () => {
    setLocation('/contact');
  };

  const handleServicesClick = () => {
    setLocation('/services/air-conditioning');
  };

  const handleReviewsClick = () => {
    window.open('https://www.google.com/search?q=Algarve+Seasons+reviews', '_blank');
  };

  return (
    <Layout>
      <Helmet>
        <title>HVAC, Solar & Heat Pumps | Algarve</title>
        <meta name="description" content="Algarve Seasons is the premium Daikin D1+ Partner for air conditioning, solar panels, and heat pumps in Faro, Lagos, and Albufeira. Get a free quote today." />
        <meta name="keywords" content="HVAC Algarve, Air Conditioning Faro, Solar Panels Portugal, Heat Pumps Algarve, Daikin Installer" />
        <link rel="canonical" href="https://algarveseasons.com/" />
      </Helmet>
      {/* Hero Section - Asymmetric Split */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-background">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="solar-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="currentColor" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#solar-pattern)" />
          </svg>
        </div>

        <div className="container grid lg:grid-cols-2 gap-12 items-center relative z-10 py-12 lg:py-0">
          <div className="space-y-8 animate-in slide-in-from-bottom-8 duration-700 fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase">
              <Star className="w-4 h-4 fill-primary" />
              #1 HVAC Specialist in Algarve
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-display font-extrabold leading-[1.1] text-secondary">
              Algarve's <SeasonalHeroText className="block">All-In-One</SeasonalHeroText> Climate Solution
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
              Algarve Seasons provides premium air conditioning installation, solar energy systems, and heat pumps for homes, villas, and businesses across Faro, Albufeira, Lagos, and the entire Algarve region.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold h-14 px-8 text-lg shadow-lg shadow-primary/20" onClick={handleContactClick}>
                Get Free Quote
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-secondary text-secondary font-bold h-14 px-8 text-lg hover:bg-secondary/5" onClick={handleServicesClick}>
                View Services
              </Button>
            </div>

            <div className="flex items-center gap-6 text-sm font-medium text-muted-foreground pt-4">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" /> Daikin Premium Partner
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" /> Tesla Certified
              </div>
            </div>
          </div>

          <div className="relative h-[600px] hidden lg:block animate-in slide-in-from-right-8 duration-1000 fade-in delay-200">
            <div className="absolute inset-0 bg-secondary/10 rounded-[2rem] transform rotate-3 scale-95 z-0"></div>
            <img 
              src="/images/hero-villa-solar.jpg" 
              alt="Luxury Algarve Villa with Solar Panels" 
              fetchPriority="high"
              width="600"
              height="600"
              className="absolute inset-0 w-full h-full object-cover rounded-[2rem] shadow-2xl z-10"
            />
            
            {/* Floating Glass Card */}
            <div className="absolute bottom-12 -left-12 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-xl z-20 max-w-xs border border-white/50">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-bold text-secondary">Trusted Quality</p>
                  <p className="text-xs text-muted-foreground">200+ Installations since 2016</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Masonry Grid */}
      <section className="py-24 bg-secondary/5">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl font-display font-bold text-secondary">Complete Climate & Energy Solutions</h2>
            <p className="text-lg text-muted-foreground">
              From cooling your villa in summer to heating it efficiently in winter, we offer integrated systems that work together to lower your bills and increase comfort.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1: Air Conditioning */}
            <Link href="/services/air-conditioning">
              <div className="group block relative h-[500px] overflow-hidden rounded-2xl shadow-lg transition-transform hover:-translate-y-2 cursor-pointer">
                <img 
                  src="/images/service-ac-interior.jpg" 
                  alt="Air Conditioning Installation Algarve" 
                  loading="lazy"
                  width="400"
                  height="500"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
                    <Wind className="w-6 h-6 text-[#7ACCC8]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Air Conditioning</h3>
                  <p className="text-gray-200 mb-4 line-clamp-2">
                    Premium Daikin & Mitsubishi installations. Wall-mounted, ducted, and multi-split systems for perfect climate control.
                  </p>
                  <span className="text-primary font-bold flex items-center gap-2">Learn More <span className="text-xl">→</span></span>
                </div>
              </div>
            </Link>

            {/* Service 2: Solar Energy */}
            <Link href="/services/solar-energy">
              <div className="group block relative h-[500px] overflow-hidden rounded-2xl shadow-lg transition-transform hover:-translate-y-2 md:-mt-12 cursor-pointer">
                <img 
                  src="/images/service-solar-roof.jpg" 
                  alt="Solar Panels Algarve" 
                  loading="lazy"
                  width="400"
                  height="500"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
                    <Sun className="w-6 h-6 text-[#FF9900]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Solar Energy</h3>
                  <p className="text-gray-200 mb-4 line-clamp-2">
                    Turn Algarve sunshine into free electricity. Photovoltaic systems, Tesla Powerwall storage, and Huawei inverters.
                  </p>
                  <span className="text-primary font-bold flex items-center gap-2">Learn More <span className="text-xl">→</span></span>
                </div>
              </div>
            </Link>

            {/* Service 3: Heat Pumps */}
            <Link href="/services/heat-pumps">
              <div className="group block relative h-[500px] overflow-hidden rounded-2xl shadow-lg transition-transform hover:-translate-y-2 cursor-pointer">
                <img 
                  src="/images/service-heatpump-garden.jpg" 
                  alt="Heat Pump Installation Algarve" 
                  loading="lazy"
                  width="400"
                  height="500"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-[#C02626]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Heat Pumps</h3>
                  <p className="text-gray-200 mb-4 line-clamp-2">
                    Efficient heating & cooling. Replace your gas boiler with an eco-friendly air-to-water heat pump system.
                  </p>
                  <span className="text-primary font-bold flex items-center gap-2">Learn More <span className="text-xl">→</span></span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <TrustBadges />

      <Reviews />

      {/* Trust & Local Presence - AEO Optimized Text */}
      <section className="py-24 bg-white">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
             <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
             <img 
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663308749066/izdDhFLPqQWvkFop.jpg" 
              alt="Algarve Seasons HVAC Technician" 
              className="rounded-2xl shadow-xl relative z-10"
             />
             <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100 z-20 max-w-xs">
                <p className="font-display font-bold text-lg mb-2">Service Area</p>
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
            <h2 className="text-4xl font-display font-bold text-secondary">Why Algarve Homeowners Choose Us?</h2>
            
            {/* Direct Answer Sentence for AEO */}
            <div className="bg-blue-50 border-l-4 border-primary p-6 rounded-r-lg">
              <p className="text-blue-900 font-medium">
                "Algarve Seasons is a Daikin D1+ Premium Partner providing air conditioning installation, solar panel systems, and heat pumps for residential and commercial properties across all 16 Algarve municipalities since 2016."
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div className="space-y-2">
                <h4 className="font-bold text-lg flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" /> Certified Experts
                </h4>
                <p className="text-sm text-muted-foreground">
                  Official partners for Daikin, Tesla, and Huawei. We don't just install; we are certified to maintain.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-lg flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" /> Local Knowledge
                </h4>
                <p className="text-sm text-muted-foreground">
                  Deep understanding of the Algarve climate, property types, and energy needs.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-lg flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" /> Rapid Response
                </h4>
                <p className="text-sm text-muted-foreground">
                  Emergency AC repair within 24 hours across key Algarve towns.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-lg flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary" /> 5-Star Service
                </h4>
                <p className="text-sm text-muted-foreground">
                  Consistent top-rated reviews from villa owners and property managers.
                </p>
              </div>
            </div>
            
            <Button size="lg" className="mt-4 bg-secondary text-white hover:bg-secondary/90" onClick={handleReviewsClick}>
              Read Our Reviews
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-display font-bold mb-6">Ready to Upgrade Your Home's Climate?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get a free, no-obligation quote. Our team will assess your property, recommend the best solution, and provide transparent pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="h-14 px-8 text-lg font-bold bg-white text-primary hover:bg-gray-100 border-none" onClick={handleContactClick}>
              Request Free Quote
            </Button>
            <a href="tel:+351910675168">
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-bold border-2 border-white text-white hover:bg-white/10">
                Call Now: +351 910 675 168
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
