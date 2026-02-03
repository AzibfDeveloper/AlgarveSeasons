import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Thermometer, Wind, Zap, Settings, Shield, MapPin, Home, Building, Briefcase, Droplet } from "lucide-react";
import BtuEstimator from "@/components/calculators/BtuEstimator";
import { Helmet } from "react-helmet-async";

export default function AirConditioning() {
  return (
    <Layout>
      <Helmet>
        <title>Air Conditioning Installation & Repair Algarve | Daikin D1+ Partner | Algarve Seasons</title>
        <meta name="description" content="Expert air conditioning installation and repair in the Algarve. Daikin D1+ Premium Partners offering wall-mounted, multi-split, and VRV systems for villas, apartments, and businesses. Same-day emergency repair. Free quotes." />
        <meta name="keywords" content="air conditioning installation Algarve, AC repair Algarve, Daikin air conditioning Algarve, emergency AC repair, multi-room AC, villa air conditioning, AC installation cost Algarve" />
        <link rel="canonical" href="https://algarveseasons.com/services/air-conditioning" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Air Conditioning Installation & Repair",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Algarve Seasons",
              "image": "https://algarveseasons.com/images/logo.png",
              "telephone": "+351910675168",
              "url": "https://algarveseasons.com"
            },
            "areaServed": "Algarve, Portugal",
            "serviceType": "Air Conditioning Installation, Repair, and Maintenance",
            "description": "Professional air conditioning installation, repair, and maintenance services across all 16 Algarve municipalities"
          }
        `}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-blue-50/50">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="ac-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M20 0L40 20L20 40L0 20Z" fill="currentColor" className="text-secondary"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#ac-pattern)" />
          </svg>
        </div>

        <div className="container grid lg:grid-cols-2 gap-12 items-center relative z-10 py-12">
          <div className="space-y-6 animate-in slide-in-from-bottom-8 duration-700 fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-semibold tracking-wide uppercase">
              <Wind className="w-4 h-4" />
              Premium Cooling & Heating
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-display font-extrabold leading-tight text-slate-900">
              Air Conditioning <span className="text-secondary">Installation & Repair</span> in the Algarve
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed border-l-4 border-secondary pl-4">
              Algarve Seasons installs and repairs Daikin premium air conditioning systems for villas, apartments, and businesses across the Algarve. Our services include wall-mounted units, multi-room systems, emergency same-day repairs, and energy-efficient inverter AC designed for the Algarve's hot summers and mild winters. Serving Faro, Albufeira, Lagos, Vilamoura, Portimão, and all 16 Algarve municipalities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="/contact" className="inline-flex items-center justify-center">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-bold h-14 px-8 text-lg shadow-lg shadow-secondary/20">
                  Get Free AC Quote
                </Button>
              </a>
              <a href="tel:+351910675168" className="inline-flex items-center justify-center">
                <Button size="lg" variant="outline" className="border-2 border-secondary text-secondary font-bold h-14 px-8 text-lg hover:bg-secondary/5">
                  Emergency Repair: Call Now
                </Button>
              </a>
            </div>
          </div>

          <div className="relative h-[500px] hidden lg:block">
            <div className="absolute inset-0 bg-secondary/10 rounded-[2rem] transform -rotate-3 scale-95 z-0"></div>
            <img 
              src="/images/service-ac-interior.jpg" 
              alt="Daikin Air Conditioning Installation in Algarve Villa" 
              className="absolute inset-0 w-full h-full object-cover rounded-[2rem] shadow-2xl z-10"
            />
            
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl z-20 border border-secondary/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Daikin D1+ Partner</p>
                  <p className="text-xs text-muted-foreground">Highest Accreditation in Portugal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why AC Essential & Calculator */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <div className="max-w-2xl mb-12">
                <h2 className="text-4xl font-display font-bold text-slate-900 mb-6">Why Air Conditioning is Essential in the Algarve</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  The Algarve experiences hot summers with temperatures reaching 30–40°C, combined with mild winters and high humidity levels, especially in coastal areas. Modern air conditioning is essential for comfort in villas, apartments, and holiday rentals throughout the region.
                </p>
                <p className="text-lg text-muted-foreground">
                  Modern AC units provide both cooling and heating functionality, making them year-round climate solutions. Consider combining air conditioning with <a href="/services/solar-energy" className="text-secondary font-semibold hover:underline">solar energy systems</a> and <a href="/services/heat-pumps" className="text-secondary font-semibold hover:underline">heat pump technology</a> for <a href="/services/all-in-one" className="text-secondary font-semibold hover:underline">integrated climate and energy solutions</a> across your property.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
                  <Thermometer className="w-8 h-8 text-secondary mb-3" />
                  <h3 className="text-lg font-bold mb-2">Year-Round Comfort</h3>
                  <p className="text-sm text-muted-foreground">
                    Stay cool during the intense Algarve summer heat (30–40°C) and efficiently warm your home during winter evenings and mornings.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
                  <Zap className="w-8 h-8 text-secondary mb-3" />
                  <h3 className="text-lg font-bold mb-2">High Efficiency</h3>
                  <p className="text-sm text-muted-foreground">
                    Modern inverter units are A+++ rated and 3–4 times more efficient than traditional electric heaters, costing significantly less to run.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
                  <Droplet className="w-8 h-8 text-secondary mb-3" />
                  <h3 className="text-lg font-bold mb-2">Healthier Air</h3>
                  <p className="text-sm text-muted-foreground">
                    Advanced filtration systems remove dust, allergens, and humidity, preventing mold in coastal properties and improving indoor air quality.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
                  <Shield className="w-8 h-8 text-secondary mb-3" />
                  <h3 className="text-lg font-bold mb-2">Property Value</h3>
                  <p className="text-sm text-muted-foreground">
                    Modern climate control systems increase property value and rental appeal for holiday rental properties across the Algarve.
                  </p>
                </div>
              </div>
            </div>

            {/* Calculator Widget */}
            <div className="lg:col-span-1 sticky top-24">
              <BtuEstimator />
            </div>
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <h2 className="text-4xl font-display font-bold text-slate-900 mb-12 text-center">Our Air Conditioning Services Across the Algarve</h2>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Installation */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Settings className="w-6 h-6 text-secondary" /> Installation
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span><span className="font-bold">Wall-mounted units:</span> Daikin Perfera, Ururu Sarara, Emura, and Stylish ranges.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span><span className="font-bold">Floor-standing units:</span> For under-window or low-ceiling spaces.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span><span className="font-bold">Multi-room systems:</span> One outdoor unit connecting up to 5 indoor units.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span><span className="font-bold">VRV systems:</span> High-capacity solutions for large villas and commercial spaces.</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mb-4">Full site survey, load calculations, and transparent quotes. Installation typically completed in 1–2 days.</p>
              <a href="/contact" className="block">
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-white">Request Installation Quote</Button>
              </a>
            </div>

            {/* Emergency Repair */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Shield className="w-6 h-6 text-secondary" /> Emergency Repair
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span><span className="font-bold">Same-day response:</span> 24-hour emergency service across the Algarve.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span><span className="font-bold">Common issues:</span> AC not cooling, weak airflow, strange noises, leaks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span><span className="font-bold">Full diagnostics:</span> Repair, refrigerant top-up, compressor replacement.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span><span className="font-bold">Preventative contracts:</span> Annual maintenance plans available.</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mb-4">Rapid response to keep your home comfortable year-round.</p>
              <a href="tel:+351910675168" className="block">
                <Button variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary/5">Call for Emergency Repair</Button>
              </a>
            </div>

            {/* Maintenance */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Zap className="w-6 h-6 text-secondary" /> Maintenance & Servicing
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span><span className="font-bold">Annual servicing:</span> Recommended for optimal efficiency.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span><span className="font-bold">Comprehensive checks:</span> Filter cleaning, coil inspection, refrigerant check.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span><span className="font-bold">Benefits:</span> Extends lifespan, reduces energy bills, prevents breakdowns.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span><span className="font-bold">Rental packages:</span> Maintenance plans for holiday rental properties.</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mb-4">Keep your system running efficiently all year.</p>
              <a href="/contact" className="block">
                <Button variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary/5">Schedule Maintenance</Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Choosing the Right AC */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-display font-bold text-slate-900 mb-12 text-center">Choosing the Right AC System for Your Algarve Home or Business</h2>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-bold py-4">What size AC do I need for my Algarve villa?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                <p className="mb-4 font-medium text-slate-900 bg-blue-50 p-4 rounded-lg border-l-4 border-secondary">
                  AC capacity depends on villa size, ceiling height, insulation, sun exposure, and number of rooms. A typical 3-bedroom Algarve villa (150–200m²) requires 9–12kW total capacity, often split across 3–4 indoor units for multi-room coverage.
                </p>
                <p className="mb-4">
                  It's crucial to get a professional load calculation. Undersized units run constantly, driving up bills, while oversized units cycle on/off too frequently, reducing lifespan. We provide free site surveys to determine the exact BTU requirements for each room based on:
                </p>
                <ul className="space-y-2 ml-4">
                  <li>• Room size and ceiling height</li>
                  <li>• Sun exposure and window orientation</li>
                  <li>• Insulation quality and building materials</li>
                  <li>• Number of occupants and heat-generating equipment</li>
                  <li>• Typical configurations: bedrooms 2.5kW each, open-plan living 5kW+</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-bold py-4">Can air conditioning heat my home in winter?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                <p className="mb-4 font-medium text-slate-900 bg-blue-50 p-4 rounded-lg border-l-4 border-secondary">
                  Yes. Modern air conditioning units, also known as air-to-air heat pumps, provide both cooling and heating. Daikin systems can efficiently heat Algarve homes during mild winters, with heating efficiency 3–4 times higher than electric heaters.
                </p>
                <p className="mb-4">
                  With reverse-cycle operation, the unit extracts heat from the outside air (even when it's cold) and pumps it inside. This is the most cost-effective way to heat Algarve homes that don't have gas central heating. The technology is:
                </p>
                <ul className="space-y-2 ml-4">
                  <li>• Highly efficient during Algarve's mild winters (10–18°C)</li>
                  <li>• Perfect for evening and morning heating needs</li>
                  <li>• Significantly cheaper than electric radiators</li>
                  <li>• Not limited by Algarve's climate (very cold winters are not an issue)</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-bold py-4">How much does AC installation cost in the Algarve?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                <p className="mb-4 font-medium text-slate-900 bg-blue-50 p-4 rounded-lg border-l-4 border-secondary">
                  Air conditioning installation costs in the Algarve range from €1,200–€2,000 for a single wall-mounted unit (including equipment and installation), and €4,000–€8,000+ for multi-room systems (3–5 indoor units) depending on property size, unit type, and complexity.
                </p>
                <p className="mb-4">Costs vary based on:</p>
                <div className="overflow-x-auto mb-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-300">
                        <th className="text-left py-2 px-2 font-bold">System Type</th>
                        <th className="text-left py-2 px-2 font-bold">Typical Cost</th>
                        <th className="text-left py-2 px-2 font-bold">Best For</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-200">
                        <td className="py-2 px-2">Single wall-mounted unit</td>
                        <td className="py-2 px-2">€1,200–€2,000</td>
                        <td className="py-2 px-2">1-bed apartment, single room</td>
                      </tr>
                      <tr className="border-b border-slate-200">
                        <td className="py-2 px-2">2-unit multi-split</td>
                        <td className="py-2 px-2">€3,000–€4,500</td>
                        <td className="py-2 px-2">2-bed apartment, small villa</td>
                      </tr>
                      <tr className="border-b border-slate-200">
                        <td className="py-2 px-2">3-5 unit multi-split</td>
                        <td className="py-2 px-2">€5,000–€8,000+</td>
                        <td className="py-2 px-2">3-4 bed villa, holiday rental</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-2">VRV commercial system</td>
                        <td className="py-2 px-2">€10,000+</td>
                        <td className="py-2 px-2">Large villas, businesses, hotels</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>Factors influencing cost include distance between indoor/outdoor units, need for scaffolding, wall chasing requirements, and brand selection. We provide transparent, itemized quotes with no hidden fees.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-bold py-4">Which AC brand is best for the Algarve?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                <p className="mb-4 font-medium text-slate-900 bg-blue-50 p-4 rounded-lg border-l-4 border-secondary">
                  Daikin is the premium choice for the Algarve, offering energy-efficient inverter technology, quiet operation, robust performance in high heat, and excellent after-sales support. Algarve Seasons is a Daikin D1+ Premium Partner, the highest accreditation in Portugal.
                </p>
                <p className="mb-4">Why Daikin stands out in the Algarve climate:</p>
                <ul className="space-y-2 ml-4">
                  <li>• Inverter technology saves 30–50% energy vs. non-inverter models</li>
                  <li>• Proven reliability in coastal/salty environments</li>
                  <li>• Excellent warranty and parts availability across Portugal</li>
                  <li>• Quiet operation (ideal for villas and apartments)</li>
                  <li>• Premium build quality justifies the investment for Algarve's demanding climate</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-bold py-4">How can I reduce my AC running costs in the Algarve?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                <p className="mb-4 font-medium text-slate-900 bg-blue-50 p-4 rounded-lg border-l-4 border-secondary">
                  To reduce AC costs: set the thermostat to 24°C (not lower), keep windows/doors closed, use fans to circulate air, close curtains during peak sun, clean filters monthly, and schedule annual professional maintenance. Inverter AC units save 30–50% energy vs. older models.
                </p>
                <p className="mb-4">Additional cost-saving strategies:</p>
                <ul className="space-y-2 ml-4">
                  <li>• Shade the outdoor unit from direct sun</li>
                  <li>• Use timers to avoid running AC when away</li>
                  <li>• Enable zone control to cool only occupied rooms</li>
                  <li>• Avoid constant thermostat adjustments</li>
                  <li>• Combine AC with solar panels for renewable energy</li>
                  <li>• Schedule annual maintenance to maintain peak efficiency</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Property-Specific Solutions */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <h2 className="text-4xl font-display font-bold text-slate-900 mb-12 text-center">Air Conditioning Solutions for Algarve Villas, Apartments & Businesses</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Home className="w-6 h-6 text-secondary" /> Villas & Detached Homes
              </h3>
              <p className="text-muted-foreground mb-4">
                Multi-room systems with outdoor unit placement in gardens or roof terraces. Zone control allows separate temperature settings for bedrooms vs. living areas. Aesthetic considerations include concealed units to maintain villa aesthetics while integrating with pools and outdoor spaces.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span>Multi-zone control for different areas</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span>Flexible outdoor unit placement options</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span>Concealed indoor units available</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Building className="w-6 h-6 text-secondary" /> Apartments & Condominiums
              </h3>
              <p className="text-muted-foreground mb-4">
                Compact wall-mounted units with installation restrictions due to building codes and shared walls. Noise considerations are important in multi-unit buildings. Energy-efficient single or dual-split systems provide optimal performance in space-constrained environments.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span>Compact wall-mounted units</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span>Quiet operation for shared buildings</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span>Building code compliant installation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-secondary" /> Holiday Rentals & Investment Properties
              </h3>
              <p className="text-muted-foreground mb-4">
                Reliable, low-maintenance systems with guest-friendly controls. Energy monitoring helps track usage and costs. Quick response repair service during peak season is essential. Multiple-property maintenance contracts ensure consistent performance across your portfolio.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span>Reliable, low-maintenance systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span>Energy monitoring and reporting</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span>Priority emergency repair service</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Settings className="w-6 h-6 text-secondary" /> Commercial & Office Spaces
              </h3>
              <p className="text-muted-foreground mb-4">
                VRV systems for large spaces with centralized control. High-capacity units handle demanding commercial environments. Integration with existing HVAC systems ensures minimal disruption during installation and operation.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span>VRV systems for large spaces</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span>Centralized control and monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span>Minimal disruption installation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Algarve Climate */}
      <section className="py-20 bg-white">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-display font-bold text-slate-900 mb-8 text-center">Understanding the Algarve Climate: Why Standard AC Isn't Always Enough</h2>
          
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              The Algarve experiences two distinct seasons that require specialized climate control solutions. Understanding these patterns helps you choose the right AC system for your property.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-secondary">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Summer: 28–40°C with High Humidity</h3>
              <p>
                Summer temperatures regularly exceed 30°C, with peaks reaching 35–40°C. Coastal properties face additional challenges from high humidity and salt-laden air that can corrode standard AC units. Open-plan villa layouts require zoned cooling to maintain comfort across multiple rooms efficiently.
              </p>
            </div>

            <div className="bg-amber-50 p-6 rounded-xl border-l-4 border-amber-500">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Winter: 10–18°C with Heating Needs</h3>
              <p>
                Winter temperatures range from 10–18°C, with evenings and mornings requiring heating. Modern AC units with heat pump functionality provide efficient heating without gas central heating infrastructure. This makes air-to-air heat pumps the most cost-effective solution for Algarve homes.
              </p>
            </div>

            <p>
              <span className="font-bold">Coastal vs. Inland Considerations:</span> Coastal properties face salt corrosion challenges requiring premium-grade systems like Daikin's D1+ certified units. Inland properties experience higher temperature swings between day and night, necessitating responsive climate control systems.
            </p>

            <p>
              Why inverter technology and heat pump functionality matter in the Algarve climate: Inverter compressors adjust output based on demand, reducing energy consumption by 30–50% compared to traditional on/off systems. Heat pump functionality ensures year-round comfort without requiring separate heating infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-display font-bold text-slate-900 mb-12 text-center">How We Install Your Air Conditioning System</h2>
          
          <div className="space-y-4">
            {[
              { num: 1, title: "Free Site Survey & Consultation", desc: "In-person or virtual consultation to understand your property and climate needs." },
              { num: 2, title: "Load Calculation & Recommendation", desc: "Professional assessment determines exact system capacity and configuration for your property." },
              { num: 3, title: "Transparent Quote", desc: "Itemized quote includes equipment, installation, and optional maintenance plan with no hidden fees." },
              { num: 4, title: "Scheduling", desc: "Installation typically scheduled within 1–2 weeks. Most installations complete in 1–2 days." },
              { num: 5, title: "Professional Installation", desc: "Certified technicians handle all installation work using industry best practices." },
              { num: 6, title: "System Testing & Training", desc: "Complete system testing, user training on controls, and warranty registration." },
              { num: 7, title: "Optional Maintenance Contract", desc: "Enroll in annual maintenance plans to keep your system running efficiently." }
            ].map((step) => (
              <div key={step.num} className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center font-bold shrink-0">
                  {step.num}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-display font-bold mb-6">AC Installation & Repair Across the Algarve</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Algarve Seasons provides air conditioning services in all 16 Algarve municipalities, including Faro, Albufeira, Portimão, Lagos, Vilamoura, Loulé, Quarteira, Tavira, Silves, Alvor, Carvoeiro, Olhão, and surrounding areas. Our mobile service vans and regional technicians ensure fast response times for installations and emergency repairs across the entire region.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              { name: 'Faro', href: '/faro' },
              { name: 'Albufeira', href: '/albufeira' },
              { name: 'Lagos', href: '/lagos' },
              { name: 'Portimão', href: '/portimao' },
              { name: 'Loulé', href: '/loule' },
              { name: 'Tavira', href: '/tavira' },
              { name: 'Olhão', href: '/olhao' },
              { name: 'Silves', href: '/silves' },
              { name: 'Lagoa', href: '/lagoa' },
              { name: 'Carriacão', href: '/carriacao' },
              { name: 'Monchique', href: '/monchique' },
              { name: 'Aljezur', href: '/aljezur' },
              { name: 'Vila do Bispo', href: '/vila-do-bispo' },
              { name: 'Castro Marim', href: '/castro-marim' },
              { name: 'Alcoutim', href: '/alcoutim' },
              { name: 'São Brás', href: '/sao-bras' }
            ].map((city) => (
              <a key={city.href} href={city.href} className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors">
                <MapPin className="w-4 h-4 text-secondary" /> {city.name}
              </a>
            ))}
          </div>
          <a href="/service-areas" className="inline-block mb-8">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              View All Service Areas
            </Button>
          </a>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-secondary text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-display font-bold mb-6">Get Your Free Air Conditioning Quote Today</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Ready to stay cool all summer and warm in winter? Algarve Seasons offers free, no-obligation quotes for AC installation, repair, and maintenance across the Algarve. Contact us today for expert advice and transparent pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-flex items-center justify-center">
              <Button size="lg" className="bg-white text-secondary hover:bg-gray-100 font-bold h-14 px-8 text-lg">
                Request Free Quote
              </Button>
            </a>
            <a href="tel:+351910675168" className="inline-flex items-center justify-center">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-bold h-14 px-8 text-lg">
                Call for Emergency Repair
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
