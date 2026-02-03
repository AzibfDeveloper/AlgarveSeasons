import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Sun, Zap, Home, Building, Leaf, MapPin, TrendingUp, Battery, Lightbulb } from "lucide-react";
import { Link } from "wouter";

export default function SolarEnergy() {
  const solarFaqs = [
    {
      question: "How many solar panels do I need for my Algarve villa?",
      answer: "A typical 3-bedroom Algarve villa consuming 4,000–6,000 kWh annually requires a 4–6kW solar system, which is approximately 10–15 panels (each 400–450W). Actual requirements depend on energy consumption, roof size, orientation, and desired self-sufficiency level."
    },
    {
      question: "How much do solar panels cost in the Algarve?",
      answer: "Residential solar panel installation in the Algarve costs €4,000–€6,000 for a 4kW system (without battery) and €7,000–€10,000 for a 6kW system with battery storage, before government incentives. With Portugal's up to €7,500 reimbursement (85% of costs), net costs can be as low as €2,500–€5,000."
    },
    {
      question: "What is the solar panel payback period in the Algarve?",
      answer: "Solar panel payback periods in the Algarve typically range from 5–8 years, thanks to high sun exposure, government incentives (up to €7,500 reimbursement and 6% VAT), and rising electricity costs. After payback, panels generate free electricity for 15–20+ additional years."
    },
    {
      question: "Do I need a south-facing roof for solar panels?",
      answer: "A south-facing roof is optimal for solar panels in the Algarve, but east- and west-facing roofs are also effective, producing about 80–90% of south-facing output. North-facing roofs are not recommended."
    },
    {
      question: "How do I apply for Portugal's solar panel incentives?",
      answer: "To claim Portugal's solar incentives, apply through the Energy Efficiency Home Support Program (open application windows typically August–October). You can receive up to €7,500 reimbursement (85% of costs) for solar panels and batteries. Algarve Seasons assists clients with application guidance and required documentation."
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
                <div className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  ☀️ RENEWABLE ENERGY SOLUTIONS
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                  Solar Panel Installation & Energy Systems in the <span className="text-yellow-500">Algarve</span>
                </h1>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Algarve Seasons designs and installs residential and commercial solar photovoltaic (PV) systems across the Algarve, helping homeowners and businesses reduce energy bills and achieve energy independence. With Portugal's 6% VAT on solar equipment, up to €7,500 government support, and the Algarve's exceptional sun exposure, solar payback periods are 5–8 years. We serve all 16 Algarve municipalities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-6 text-lg">
                    Get Free Solar Quote
                  </Button>
                  <Button variant="outline" className="px-8 py-6 text-lg">
                    Calculate Your Savings
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-yellow-200 to-orange-200 rounded-2xl p-8 h-96 flex items-center justify-center">
                  <Sun className="w-48 h-48 text-yellow-600 opacity-20" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Solar Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Why Solar Energy Makes Perfect Sense in the Algarve</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-blue-50 p-8 rounded-xl">
                <Sun className="w-12 h-12 text-yellow-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Europe's Highest Solar Irradiation</h3>
                <p className="text-gray-700">The Algarve receives more sunlight than almost any other region in Europe, with 300+ sunny days per year and exceptional solar irradiation levels.</p>
              </div>
              <div className="bg-green-50 p-8 rounded-xl">
                <Leaf className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Government Support</h3>
                <p className="text-gray-700">6% VAT (vs. 23% standard), up to €7,500 reimbursement (85% of costs for equipment up to €3,000 with battery storage).</p>
              </div>
              <div className="bg-indigo-50 p-8 rounded-xl">
                <Zap className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Energy Independence</h3>
                <p className="text-gray-700">Reduce reliance on the grid, hedge against rising electricity prices, and achieve true energy independence.</p>
              </div>
              <div className="bg-purple-50 p-8 rounded-xl">
                <TrendingUp className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Property Value Increase</h3>
                <p className="text-gray-700">Solar systems increase villa and apartment resale value and appeal to eco-conscious buyers and holiday rental guests.</p>
              </div>
              <div className="bg-orange-50 p-8 rounded-xl">
                <Home className="w-12 h-12 text-orange-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Ideal for Algarve Properties</h3>
                <p className="text-gray-700">Perfect for Algarve villas with large roofs, holiday rentals, and commercial properties seeking sustainable solutions.</p>
              </div>
              <div className="bg-teal-50 p-8 rounded-xl">
                <Lightbulb className="w-12 h-12 text-teal-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Environmental Impact</h3>
                <p className="text-gray-700">Reduce your carbon footprint and align with Portugal's 2050 carbon neutrality goal and renewable energy targets.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Complete Solar PV Solutions for Algarve Homes & Businesses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border-l-4 border-blue-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Residential Solar Panel Installation</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Roof-mounted systems for villas, townhouses, apartments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Monocrystalline panels (highest efficiency for limited roof space)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">System sizing: 2kW (small apartments) to 10kW+ (large villas)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Grid-tied, off-grid, or hybrid configurations</span>
                  </li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Request Residential Solar Quote</Button>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl border-l-4 border-green-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Commercial Solar Installations</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Large-scale systems for hotels, resorts, offices, retail</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Roof and ground-mount options</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Energy consumption profiling and ROI modeling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Commercial incentives and tax benefits</span>
                  </li>
                </ul>
                <Button className="w-full bg-green-600 hover:bg-green-700">Get Commercial Solar Assessment</Button>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl border-l-4 border-purple-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Battery Storage Systems</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Maximize self-consumption (capture 80% vs. 30% without storage)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Energy security during grid outages</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Lithium-ion technology with capacity sizing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Government support: €3,000 for solar + battery</span>
                  </li>
                </ul>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Add Battery Storage to Your System</Button>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl border-l-4 border-orange-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Solar + Heat Pump Integration</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Combined solar PV + heat pump for maximum energy independence</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Solar powers heat pump for heating, cooling, hot water</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Algarve's mild winters make this combination highly efficient</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Near-zero energy bills after payback</span>
                  </li>
                </ul>
                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  Explore All-in-One Solutions
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Solar Panel FAQs for Algarve Homeowners</h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {solarFaqs.map((faq, index) => (
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
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Solar Solutions for Algarve Villas, Apartments & Holiday Rentals</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-8 rounded-xl">
                <Home className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Villas & Detached Homes</h3>
                <p className="text-gray-700 mb-4">Large roof areas ideal for 6–10kW+ systems. Pool heating integration, garden lighting, EV charging, and battery storage for energy independence.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Aesthetic options: in-roof vs. on-roof mounting</li>
                  <li>✓ Maximum energy savings potential</li>
                  <li>✓ Full system integration available</li>
                </ul>
              </div>

              <div className="bg-green-50 p-8 rounded-xl">
                <Building className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Apartments & Townhouses</h3>
                <p className="text-gray-700 mb-4">Smaller systems (2–4kW) with limited roof space. Shared roof considerations, balcony-mounted micro-systems, and community solar options.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Condominium permission assistance</li>
                  <li>✓ Flexible installation options</li>
                  <li>✓ Community solar programs available</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-8 rounded-xl">
                <Sun className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Holiday Rentals & Investment Properties</h3>
                <p className="text-gray-700 mb-4">Solar as value-add amenity for eco-conscious guests. Reduce operating costs, increase rental margins, and ensure uninterrupted guest experience.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Battery backup for reliability</li>
                  <li>✓ Monitoring and maintenance contracts</li>
                  <li>✓ Marketing advantage for bookings</li>
                </ul>
              </div>

              <div className="bg-orange-50 p-8 rounded-xl">
                <Zap className="w-12 h-12 text-orange-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Commercial Properties</h3>
                <p className="text-gray-700 mb-4">Large roof/ground space for high-capacity systems. Offset daytime business consumption and achieve corporate sustainability goals.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Commercial incentives available</li>
                  <li>✓ Accelerated depreciation benefits</li>
                  <li>✓ ROI optimization modeling</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Government Incentives Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Government Incentives for Solar Energy in Portugal (2026)</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-lg font-bold text-gray-900 mb-2">6% VAT on Renewable Equipment</h3>
                <p className="text-gray-700">Extended beyond Jan 2026, likely permanent. Significant savings compared to standard 23% VAT.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Energy Efficiency Home Support Program</h3>
                <p className="text-gray-700">Up to €7,500 reimbursement, 85% of costs. €1,000 for solar-only or €3,000 for solar+battery. Regional bonus (+10% outside Lisbon/Porto = benefits Algarve).</p>
              </div>
              <div className="bg-white p-6 rounded-lg border-l-4 border-purple-500">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Smart Export Guarantee (SEG)</h3>
                <p className="text-gray-700">Earn credits for excess energy exported to grid. Maximize returns on your solar investment.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border-l-4 border-orange-500">
                <h3 className="text-lg font-bold text-gray-900 mb-2">National Renewable Targets</h3>
                <p className="text-gray-700">5.7 GW additional solar by 2026. Portugal's carbon neutrality goal by 2050 supports continued solar incentives.</p>
              </div>
            </div>
            <Button className="w-full mt-8 bg-green-600 hover:bg-green-700 py-6 text-lg">Get Help with Solar Incentives</Button>
          </div>
        </section>

        {/* Installation Process */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">How We Install Your Solar Energy System</h2>
            <div className="space-y-6">
              {[
                { step: 1, title: "Free Consultation", desc: "Assess property, roof survey, energy consumption analysis" },
                { step: 2, title: "System Design", desc: "Optimal panel placement, inverter selection, battery sizing" },
                { step: 3, title: "Transparent Quote", desc: "Equipment, installation, permits, DNO fees, incentives explained" },
                { step: 4, title: "Permitting & DNO", desc: "Handle all paperwork and Distribution Network Operator notifications" },
                { step: 5, title: "Professional Installation", desc: "1–2 days for typical residential systems, minimal disruption" },
                { step: 6, title: "Inspection & Activation", desc: "System testing, grid connection, SEG setup with energy supplier" },
                { step: 7, title: "Warranty & Support", desc: "Registration, performance monitoring, annual maintenance plans" }
              ].map((item) => (
                <div key={item.step} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white font-bold text-lg">
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Solar Installation Across the Algarve</h2>
            <p className="text-lg text-gray-700 mb-8">Algarve Seasons installs solar systems in all 16 Algarve municipalities. Click any municipality below to learn about local solar incentives and installation details.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {municipalities.map((city) => (
                <Link key={city.name} href={city.href}>
                  <a className="block p-4 bg-white border border-gray-200 rounded-lg hover:border-yellow-500 hover:shadow-lg transition-all text-center font-semibold text-gray-900 hover:text-yellow-600">
                    {city.name}
                  </a>
                </Link>
              ))}
            </div>
            <Button className="w-full mt-8 bg-yellow-500 hover:bg-yellow-600 py-6 text-lg">View All Service Areas</Button>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-500 to-orange-500">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Start Your Solar Journey Today</h2>
            <p className="text-lg text-white mb-8">Reduce your energy bills by 50–70% with solar panels from Algarve Seasons. Get a free assessment, transparent quote, and expert installation. Contact us today to discover your savings potential.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-yellow-600 hover:bg-gray-100 px-8 py-6 text-lg font-bold">Get Free Solar Quote</Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/20 px-8 py-6 text-lg font-bold">Call Now</Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
