import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Thermometer, Zap, Home, Building, Droplet, MapPin, TrendingDown, Wind, Waves } from "lucide-react";
import { Link } from "wouter";

export default function HeatPumps() {
  const heatPumpFaqs = [
    {
      question: "Do heat pumps work in the Algarve climate?",
      answer: "Yes, heat pumps are highly efficient in the Algarve's mild climate. Modern air-source heat pumps operate effectively down to -15°C, and the Algarve rarely drops below 10°C in winter. Heat pumps are ideal for year-round comfort: cooling in summer, heating in winter."
    },
    {
      question: "Can heat pumps cool as well as heat?",
      answer: "Yes, most heat pumps can both heat and cool by reversing their refrigeration cycle. Air-to-air heat pumps (also known as air conditioners) are particularly effective for cooling, while air-to-water heat pumps can cool via fan coil units or underfloor cooling systems."
    },
    {
      question: "How much does a heat pump cost in the Algarve?",
      answer: "Air-to-water heat pump systems for Algarve homes cost €6,000–€12,000 (including equipment and installation) for a typical 3-4 bedroom villa. Air-to-air heat pumps (AC systems) range from €3,000–€8,000 depending on number of rooms. Government incentives can reduce costs by up to €7,500."
    },
    {
      question: "Do heat pumps work with radiators?",
      answer: "Yes, heat pumps work with radiators, though some older radiators may need upgrading to larger models for optimal efficiency. Heat pumps operate at lower flow temperatures (45–55°C) than gas boilers (70–80°C), so radiator surface area may need to increase for the same heat output."
    },
    {
      question: "How much do heat pumps save on energy bills?",
      answer: "Heat pumps typically save 50–70% on heating costs compared to electric heaters and 30–50% compared to gas boilers. For a typical Algarve villa, annual savings range from €500–€1,500 depending on current heating system, insulation, and usage patterns. When powered by solar panels, running costs approach zero."
    }
  ];

  const municipalities = [
    { name: "Faro", href: "/faro" },
    { name: "Albufeira", href: "/albufeira" },
    { name: "Lagos", href: "/lagos" },
    { name: "Portimão", href: "/portimao" },
    { name: "Loulé", href: "/loule" },
    { name: "Tavira", href: "/tavira" },
    { name: "Olhão", href: "/olhao" },
    { name: "Silves", href: "/silves" },
    { name: "Lagoa", href: "/lagoa" },
    { name: "Carriacão", href: "/carriacão" },
    { name: "Monchique", href: "/monchique" },
    { name: "Aljezur", href: "/aljezur" },
    { name: "Vila do Bispo", href: "/vila-do-bispo" },
    { name: "Castro Marim", href: "/castro-marim" },
    { name: "Alcoutim", href: "/alcoutim" },
    { name: "São Brás", href: "/sao-bras" }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  ❄️ YEAR-ROUND COMFORT
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                  Heat Pump Installation & Systems in the <span className="text-blue-500">Algarve</span>
                </h1>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Algarve Seasons installs air-to-water and air-to-air heat pumps for year-round heating, cooling, and hot water in Algarve villas, apartments, and businesses. Heat pumps are 300–400% more energy-efficient than traditional electric heating, ideal for the Algarve's mild winters and hot summers. We serve all 16 Algarve municipalities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
                    Get Free Heat Pump Quote
                  </Button>
                  <Button variant="outline" className="px-8 py-6 text-lg">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-200 to-cyan-200 rounded-2xl p-8 h-96 flex items-center justify-center">
                  <Thermometer className="w-48 h-48 text-blue-600 opacity-20" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is a Heat Pump Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">What is a Heat Pump and How Does It Work?</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Heat pumps transfer heat rather than generate it (unlike boilers or electric heaters). They extract heat from air (air-source) or ground (ground-source), compress and transfer it indoors. Heat pumps can reverse cycle: heat in winter, cool in summer.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Wind className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900">Air-to-Water Heat Pumps</h3>
                      <p className="text-gray-700">For radiators, underfloor heating, and hot water tanks</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Waves className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900">Air-to-Air Heat Pumps</h3>
                      <p className="text-gray-700">For direct room heating and cooling (also called AC)</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>300–400% efficiency:</strong> For every 1kW electricity, generate 3–4kW heat</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>A+++ energy ratings</strong> available for maximum efficiency</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Ideal for Algarve:</strong> Efficient in mild climates, works year-round</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Reverse cycle:</strong> Heat in winter, cool in summer</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Complete Heat Pump Solutions for Algarve Homes & Businesses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border-l-4 border-blue-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Air-to-Water Heat Pumps</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">For central heating (radiators, underfloor heating) and domestic hot water</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Replace or supplement gas boilers and electric water heaters</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Daikin Altherma range with 6–16kW for residential</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Underfloor heating ideal pairing (low-temperature distribution)</span>
                  </li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Request Air-to-Water Quote</Button>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-8 rounded-xl border-l-4 border-cyan-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Air-to-Air Heat Pumps (AC Systems)</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Direct room heating and cooling via wall/floor/ceiling units</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Faster response than radiators, zone control available</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Daikin Multi, Perfera, Emura ranges available</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Ideal for Algarve properties without central heating</span>
                  </li>
                </ul>
                <Button className="w-full bg-cyan-600 hover:bg-cyan-700">Explore Air-to-Air Heat Pumps</Button>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl border-l-4 border-purple-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Heat Pump + Solar PV Integration</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Solar panels power heat pump for near-zero running costs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Battery storage for 24/7 solar-powered heating/cooling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Maximum energy independence and sustainability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Government incentives for combined systems</span>
                  </li>
                </ul>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Learn About Solar + Heat Pump</Button>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl border-l-4 border-orange-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Pool & Spa Heating</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Efficient pool heating vs. electric/gas heaters</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Extend swimming season (Oct–May mild Algarve weather)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Integration with solar thermal or PV systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">80% savings vs. electric pool heaters</span>
                  </li>
                </ul>
                <Button className="w-full bg-orange-600 hover:bg-orange-700">Get Pool Heat Pump Quote</Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Heat Pump FAQs for Algarve Homeowners</h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {heatPumpFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="bg-white border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-blue-600">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    <p className="font-semibold text-blue-600 mb-2">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Property Types Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Heat Pump Solutions for Algarve Villas, Apartments & Pools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-8 rounded-xl">
                <Home className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Whole-Home Heating & Cooling</h3>
                <p className="text-gray-700 mb-4">Air-to-water for radiator/underfloor systems, air-to-air multi-room for zone control, integrated hot water production, and smart thermostats with app control.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Central heating solution for entire property</li>
                  <li>✓ Smart thermostat integration</li>
                  <li>✓ Integrated hot water production</li>
                </ul>
              </div>

              <div className="bg-green-50 p-8 rounded-xl">
                <Building className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Retrofit & Replacement</h3>
                <p className="text-gray-700 mb-4">Replace old electric heaters and gas boilers, upgrade from basic AC to heat pump AC, with minimal disruption installation.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Replace existing heating systems</li>
                  <li>✓ Upgrade to modern heat pump technology</li>
                  <li>✓ Minimal installation disruption</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-8 rounded-xl">
                <Droplet className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Pool & Spa Heating</h3>
                <p className="text-gray-700 mb-4">Extend swimming season year-round with 80% savings vs. electric pool heaters, integration with solar thermal or PV systems.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Extend swimming season</li>
                  <li>✓ 80% energy savings</li>
                  <li>✓ Solar integration available</li>
                </ul>
              </div>

              <div className="bg-orange-50 p-8 rounded-xl">
                <Building className="w-12 h-12 text-orange-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Commercial & Hospitality</h3>
                <p className="text-gray-700 mb-4">Hotels, resorts, restaurants, offices with VRV heat pump systems for large buildings, hot water for guest rooms and kitchens.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Large-scale VRV systems</li>
                  <li>✓ Commercial incentives available</li>
                  <li>✓ Hot water for hospitality</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Installation Process */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">How We Install Your Heat Pump System</h2>
            <div className="space-y-6">
              {[
                { step: 1, title: "Free Home Assessment", desc: "Heating/cooling needs analysis, existing system review" },
                { step: 2, title: "System Design", desc: "Heat pump sizing, emitter compatibility (radiators/underfloor), hot water integration" },
                { step: 3, title: "Transparent Quote", desc: "Equipment, installation, optional solar integration, incentives explained" },
                { step: 4, title: "Scheduling", desc: "Typical installation 2–3 days for air-to-water, 1–2 days for air-to-air" },
                { step: 5, title: "Professional Installation", desc: "Certified heat pump engineers, minimal disruption" },
                { step: 6, title: "Commissioning & Training", desc: "System testing, thermostat setup, user guide provided" },
                { step: 7, title: "Warranty & Maintenance", desc: "Registration, annual service plans, warranty support" }
              ].map((item) => (
                <div key={item.step} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white font-bold text-lg">
                      {item.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                    <p className="text-gray-700 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Heat Pump Installation Across the Algarve</h2>
            <p className="text-lg text-gray-700 mb-8">Algarve Seasons installs heat pumps in all 16 Algarve municipalities. Click any municipality below to learn about local heat pump solutions and installation details.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {municipalities.map((city) => (
                <Link key={city.name} href={city.href}>
                  <a className="block p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-lg transition-all text-center font-semibold text-gray-900 hover:text-blue-600">
                    {city.name}
                  </a>
                </Link>
              ))}
            </div>
            <Button className="w-full mt-8 bg-blue-600 hover:bg-blue-700 py-6 text-lg">View All Service Areas</Button>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Upgrade to Energy-Efficient Heat Pump Heating & Cooling</h2>
            <p className="text-lg text-white mb-8">Reduce your energy bills by 50–70% with a Daikin heat pump from Algarve Seasons. Get a free assessment, transparent quote, and expert installation. Contact us today to discover your savings potential.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg font-bold">Get Free Heat Pump Quote</Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/20 px-8 py-6 text-lg font-bold">Call Now</Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
