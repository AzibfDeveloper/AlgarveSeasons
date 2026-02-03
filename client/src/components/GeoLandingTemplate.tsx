import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Wind, Sun, Flame, Zap, Star, MapPin, Phone } from "lucide-react";
import { Link } from "wouter";
import Reviews from "@/components/Reviews";
import NearbyServiceAreas from "@/components/NearbyServiceAreas";
import GeoQuoteForm from "@/components/GeoQuoteForm";

interface GeoLandingProps {
  municipality: string;
  municipalitySlug: string;
  region?: string;
  description: string;
  serviceAreas?: string[];
}

export default function GeoLandingTemplate({
  municipality,
  municipalitySlug,
  region = "Algarve",
  description,
  serviceAreas = [],
}: GeoLandingProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-r from-slate-50 to-blue-50 border-b border-slate-200">
        <div className="container max-w-6xl">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 text-sm text-orange-600 font-semibold">
              <MapPin className="w-4 h-4" />
              Serving {municipality} & Surrounding Areas
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
              HVAC & Solar Solutions in <span className="text-orange-600">{municipality}</span>
            </h1>
            <p className="text-lg text-slate-700 max-w-2xl">
              {description} Explore our <a href="/service-areas" className="text-orange-600 font-semibold hover:underline">complete service areas</a> or learn about our <a href="/faq" className="text-orange-600 font-semibold hover:underline">frequently asked questions</a>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <GeoQuoteForm
                municipality={municipality}
                municipalitySlug={municipalitySlug}
                triggerText={`Get Free Quote in ${municipality}`}
                triggerVariant="default"
                triggerSize="lg"
              />
              <Link href="/services/air-conditioning">
                <Button size="lg" variant="outline" className="border-slate-300">
                  View Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-6xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">
            Why Choose Algarve Seasons in {municipality}?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-slate-200">
              <CardContent className="pt-6">
                <Star className="w-10 h-10 text-orange-600 mb-4" />
                <h3 className="font-bold text-lg text-slate-900 mb-2">Local Expertise</h3>
                <p className="text-slate-600">
                  Over 8 years serving {municipality} with trusted, reliable service.
                </p>
              </CardContent>
            </Card>
            <Card className="border-slate-200">
              <CardContent className="pt-6">
                <Phone className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="font-bold text-lg text-slate-900 mb-2">Fast Response</h3>
                <p className="text-slate-600">
                  Emergency service available. Same-day appointments in {municipality}.
                </p>
              </CardContent>
            </Card>
            <Card className="border-slate-200">
              <CardContent className="pt-6">
                <MapPin className="w-10 h-10 text-green-600 mb-4" />
                <h3 className="font-bold text-lg text-slate-900 mb-2">Premium Brands</h3>
                <p className="text-slate-600">
                  Daikin D1+ Partner. Tesla Powerwall certified installer.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container max-w-6xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">
            Our Services in {municipality}
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Link href="/services/air-conditioning">
              <Card className="cursor-pointer hover:shadow-lg transition-shadow border-slate-200">
                <CardContent className="pt-6 text-center">
                  <Wind className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-bold text-slate-900 mb-2">Air Conditioning</h3>
                  <p className="text-sm text-slate-600">
                    Daikin installations & maintenance
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/services/solar-energy">
              <Card className="cursor-pointer hover:shadow-lg transition-shadow border-slate-200">
                <CardContent className="pt-6 text-center">
                  <Sun className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="font-bold text-slate-900 mb-2">Solar Energy</h3>
                  <p className="text-sm text-slate-600">
                    Save on energy costs
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/services/heat-pumps">
              <Card className="cursor-pointer hover:shadow-lg transition-shadow border-slate-200">
                <CardContent className="pt-6 text-center">
                  <Flame className="w-12 h-12 text-red-600 mx-auto mb-4" />
                  <h3 className="font-bold text-slate-900 mb-2">Heat Pumps</h3>
                  <p className="text-sm text-slate-600">
                    Efficient heating & cooling
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/services/tesla-powerwall">
              <Card className="cursor-pointer hover:shadow-lg transition-shadow border-slate-200">
                <CardContent className="pt-6 text-center">
                  <Zap className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-bold text-slate-900 mb-2">Tesla Powerwall</h3>
                  <p className="text-sm text-slate-600">
                    Battery backup & storage
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      {serviceAreas.length > 0 && (
        <section className="py-16 md:py-24 bg-white">
          <div className="container max-w-6xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Service Areas Near {municipality}
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {serviceAreas.map((area) => {
                const areaSlug = area.toLowerCase().replace(/\s+/g, '-').replace(/ã/g, 'a').replace(/é/g, 'e');
                return (
                  <Link key={area} href={`/${areaSlug}`}>
                    <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200 hover:bg-slate-100 hover:border-orange-300 cursor-pointer transition-colors">
                      <MapPin className="w-5 h-5 text-orange-600 flex-shrink-0" />
                      <span className="text-slate-700">{area}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Nearby Service Areas */}
      <NearbyServiceAreas currentMunicipality={municipalitySlug} municipalityName={municipality} />

      {/* Reviews */}
      <Reviews />

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="container max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Upgrade Your Climate Control?
          </h2>
          <p className="text-lg text-orange-100 mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation quote for <a href="/services/air-conditioning" className="text-white font-semibold hover:underline">air conditioning</a>, <a href="/services/solar-energy" className="text-white font-semibold hover:underline">solar</a>, <a href="/services/heat-pumps" className="text-white font-semibold hover:underline">heat pumps</a>, or <a href="/services/tesla-powerwall" className="text-white font-semibold hover:underline">battery storage</a> in {municipality}.
          </p>
          <Link href={`/contact?municipality=${municipality}`}>
            <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50">
              Get Your Free Quote Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
