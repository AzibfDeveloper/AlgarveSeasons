/**
 * FAQ Data Structure
 * 
 * Organized by category with comprehensive Q&A content
 * optimized for SEO and user engagement
 */

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface FAQCategory {
  name: string;
  description: string;
  icon: string;
  items: FAQItem[];
}

export const faqCategories: FAQCategory[] = [
  {
    name: "Air Conditioning",
    description: "Questions about AC installation, maintenance, and cooling systems",
    icon: "Wind",
    items: [
      {
        id: "ac-1",
        question: "What are the benefits of a Daikin air conditioning system?",
        answer: "Daikin systems offer superior energy efficiency, whisper-quiet operation, advanced air purification, and precise temperature control. As a Daikin D1+ Premium Partner, we install systems that reduce energy consumption by up to 40% compared to older models while maintaining optimal comfort year-round. Daikin's inverter technology adjusts cooling capacity based on demand, saving you money on electricity bills.",
        category: "Air Conditioning",
      },
      {
        id: "ac-2",
        question: "How much does air conditioning installation cost in Algarve?",
        answer: "AC installation costs vary based on system type, property size, and complexity. Wall-mounted single-split systems typically range from €1,500-€3,000, while multi-split systems for larger properties cost €3,500-€8,000+. We provide free, no-obligation quotes after assessing your property. Our pricing includes professional installation, testing, and a 5-year warranty on labor.",
        category: "Air Conditioning",
      },
      {
        id: "ac-3",
        question: "What's the difference between wall-mounted, ducted, and multi-split AC systems?",
        answer: "Wall-mounted (split) systems are ideal for single rooms or open-plan spaces, offering easy installation and lower costs. Ducted systems distribute cool air through hidden ducts throughout your property, providing uniform cooling but requiring structural modifications. Multi-split systems connect multiple indoor units to one outdoor unit, allowing different rooms to have independent temperature control. We recommend multi-split for villas and ducted for larger properties.",
        category: "Air Conditioning",
      },
      {
        id: "ac-4",
        question: "How often should I service my air conditioning system?",
        answer: "We recommend professional AC maintenance twice yearly: before summer (May) and before winter (October). Regular servicing includes filter cleaning, refrigerant checks, and system diagnostics. This prevents breakdowns during peak seasons, maintains energy efficiency, and extends system lifespan to 15+ years. We offer maintenance packages starting at €150 per visit.",
        category: "Air Conditioning",
      },
      {
        id: "ac-5",
        question: "Do you offer 24/7 emergency AC repair services?",
        answer: "Yes! We provide emergency AC repair within 24 hours across Faro, Lagos, Albufeira, and other major Algarve municipalities. Our technicians are available for urgent cooling failures during summer months. Emergency call-out fees apply, but we prioritize rapid response to restore your comfort. Call +351 910 675 168 for immediate assistance.",
        category: "Air Conditioning",
      },
    ],
  },
  {
    name: "Solar Energy",
    description: "Questions about solar panel installation, efficiency, and savings",
    icon: "Sun",
    items: [
      {
        id: "solar-1",
        question: "How much can I save with a solar panel system in Algarve?",
        answer: "Algarve receives 300+ sunny days annually, making it ideal for solar. A typical 5kW residential system generates 4,500-5,500 kWh annually, reducing electricity bills by 60-80% depending on consumption patterns. With current energy prices, most systems pay for themselves in 6-8 years, then provide free electricity for 25+ years. Combined with a Tesla Powerwall battery, you achieve near-total energy independence.",
        category: "Solar Energy",
      },
      {
        id: "solar-2",
        question: "What is the cost of installing solar panels?",
        answer: "A 5kW solar system typically costs €8,000-€12,000 installed, including panels, inverter, and labor. Adding a Tesla Powerwall battery storage adds €7,000-€9,000. Many customers qualify for Portuguese government incentives and tax deductions that reduce net costs by 20-30%. We provide detailed ROI calculations in our free quote. Financing options are available.",
        category: "Solar Energy",
      },
      {
        id: "solar-3",
        question: "Do solar panels work on cloudy days or in winter?",
        answer: "Solar panels generate electricity on cloudy days, though at reduced capacity (20-30% of sunny day output). Even in winter, Algarve's mild climate and frequent sunshine ensure consistent generation. Modern panels are highly efficient across light spectrums. Combining solar with a battery system (Tesla Powerwall) ensures power availability during low-production periods.",
        category: "Solar Energy",
      },
      {
        id: "solar-4",
        question: "What maintenance do solar panels require?",
        answer: "Solar panels require minimal maintenance—typically just annual cleaning to remove dust and pollen buildup. We recommend professional cleaning 1-2 times yearly to maintain peak efficiency. Inverters and electrical connections should be inspected annually. Most systems operate maintenance-free for 25+ years with proper installation.",
        category: "Solar Energy",
      },
      {
        id: "solar-5",
        question: "Can I sell excess solar energy back to the grid?",
        answer: "Yes! Portugal's net metering program allows you to export excess solar energy to the grid and receive credits on your electricity bill. With a properly configured system and grid connection agreement, you can offset consumption during low-production periods. We handle all paperwork and grid connection coordination.",
        category: "Solar Energy",
      },
    ],
  },
  {
    name: "Heat Pumps",
    description: "Questions about heat pump systems, efficiency, and heating",
    icon: "Zap",
    items: [
      {
        id: "hp-1",
        question: "How do heat pumps work and why are they more efficient than gas boilers?",
        answer: "Heat pumps extract thermal energy from the air or ground and transfer it indoors for heating (or reverse the process for cooling). They're 3-4 times more efficient than gas boilers because they move heat rather than generate it through combustion. A heat pump uses 1 kWh of electricity to deliver 3-4 kWh of heating energy. This efficiency reduces heating costs by 60-70% while eliminating carbon emissions.",
        category: "Heat Pumps",
      },
      {
        id: "hp-2",
        question: "Are heat pumps suitable for Algarve's mild winters?",
        answer: "Absolutely! Algarve's average winter temperatures (10-15°C) are ideal for heat pump efficiency. Air-to-water heat pumps perform excellently in mild climates, providing comfortable heating while maintaining low operating costs. Many villa owners combine heat pumps with solar systems for maximum energy independence and minimal heating expenses.",
        category: "Heat Pumps",
      },
      {
        id: "hp-3",
        question: "What's the difference between air-to-air and air-to-water heat pumps?",
        answer: "Air-to-air heat pumps heat/cool indoor air directly and are ideal for single-zone comfort. Air-to-water heat pumps heat water for radiators or underfloor heating systems, providing whole-home climate control. Air-to-water systems integrate seamlessly with existing heating infrastructure and work well with solar thermal systems. We recommend air-to-water for comprehensive heating solutions.",
        category: "Heat Pumps",
      },
      {
        id: "hp-4",
        question: "How much does a heat pump system cost?",
        answer: "A residential air-to-water heat pump system typically costs €4,500-€7,500 installed, depending on property size and existing infrastructure. Installation includes outdoor unit placement, piping, controls, and integration with your heating system. Many customers qualify for Portuguese renewable energy grants covering 20-30% of costs. We provide free assessments and financing options.",
        category: "Heat Pumps",
      },
      {
        id: "hp-5",
        question: "Can I replace my gas boiler with a heat pump?",
        answer: "Yes! Heat pumps can replace gas boilers in most properties. If you have radiators, an air-to-water heat pump connects directly to your existing system. For underfloor heating, heat pumps are even more efficient. We assess your current system and recommend the best replacement strategy. The transition typically takes 2-3 days with minimal disruption.",
        category: "Heat Pumps",
      },
    ],
  },
  {
    name: "Installation & Warranty",
    description: "Questions about installation process, timelines, and warranty coverage",
    icon: "Shield",
    items: [
      {
        id: "warranty-1",
        question: "What warranty do you provide on installations?",
        answer: "We offer comprehensive 5-year labor warranty on all installations, covering parts and service. Daikin systems include manufacturer's 10-year compressor warranty and 5-year parts warranty. Tesla Powerwall batteries include 10-year warranty. Solar panels come with 25-year performance warranty (80% minimum output). All warranties are fully transferable if you sell your property.",
        category: "Installation & Warranty",
      },
      {
        id: "warranty-2",
        question: "How long does installation typically take?",
        answer: "AC installation usually takes 1-2 days depending on system complexity. Solar installations take 2-4 days including electrical work and grid connection. Heat pump installation typically takes 2-3 days. We schedule installations at your convenience and maintain clean, professional work sites. Most customers can use their systems immediately after completion.",
        category: "Installation & Warranty",
      },
      {
        id: "warranty-3",
        question: "Do I need planning permission for solar panels or heat pumps?",
        answer: "Solar panels on residential roofs typically don't require planning permission in Portugal. Heat pump outdoor units may require approval depending on your municipality and HOA rules. We handle all necessary paperwork and coordinate with local authorities. Our team ensures full compliance with Portuguese building regulations and local requirements.",
        category: "Installation & Warranty",
      },
      {
        id: "warranty-4",
        question: "What happens if something breaks during the warranty period?",
        answer: "If your system malfunctions during the warranty period, we provide free repair or replacement at no cost. Simply call us at +351 910 675 168, and we'll schedule service within 24-48 hours. Our technicians diagnose the issue and implement repairs using genuine parts. Emergency repairs outside business hours incur a call-out fee but are covered under warranty.",
        category: "Installation & Warranty",
      },
      {
        id: "warranty-5",
        question: "Can I extend my warranty beyond the standard period?",
        answer: "Yes! We offer extended warranty packages covering 7, 10, or 15 years with optional maintenance plans. Extended warranties include priority service, annual inspections, and parts replacement. Pricing depends on system type and coverage level. Contact us for personalized warranty extension quotes.",
        category: "Installation & Warranty",
      },
    ],
  },
  {
    name: "General & Service Areas",
    description: "Questions about service coverage, availability, and general inquiries",
    icon: "MapPin",
    items: [
      {
        id: "general-1",
        question: "Which areas of Algarve do you serve?",
        answer: "We provide services across all 16 Algarve municipalities: Faro, Lagos, Albufeira, Portimão, Loulé, Silves, Tavira, Olhão, São Brás, Lagoa, Carriacão, Monchique, Aljezur, Vila do Bispo, Castro Marim, and Alcoutim. We maintain local expertise in each region and offer rapid response times. For areas outside Algarve, contact us for availability.",
        category: "General & Service Areas",
      },
      {
        id: "general-2",
        question: "How do I get a free quote?",
        answer: "Getting a free quote is simple! Call us at +351 910 675 168, fill out our online contact form, or visit our office. We'll schedule a convenient time to assess your property, discuss your needs, and provide a detailed, no-obligation quote. Most assessments take 30-45 minutes. You'll receive your quote within 24 hours.",
        category: "General & Service Areas",
      },
      {
        id: "general-3",
        question: "Are you certified installers for Daikin, Tesla, and Huawei?",
        answer: "Yes! We are official Daikin D1+ Premium Partners, Tesla Powerwall certified installers, and Huawei authorized partners. These certifications ensure we meet manufacturer standards for installation, maintenance, and warranty support. Our technicians undergo regular training to stay current with latest technologies and best practices.",
        category: "General & Service Areas",
      },
      {
        id: "general-4",
        question: "Can you design a combined AC, solar, and heat pump system?",
        answer: "Absolutely! We specialize in integrated climate solutions combining air conditioning, solar energy, and heat pumps. This approach maximizes energy efficiency, reduces costs, and provides year-round comfort. Our engineers design systems tailored to your property's specific needs, climate zone, and budget. We'll show you projected energy savings and ROI.",
        category: "General & Service Areas",
      },
      {
        id: "general-5",
        question: "Do you offer financing options for large installations?",
        answer: "Yes! We partner with Portuguese banks and financing companies to offer flexible payment plans. Most customers finance systems over 5-10 years with competitive interest rates. Monthly payments often cost less than current energy bills, so you save money immediately. We handle all financing paperwork and coordination.",
        category: "General & Service Areas",
      },
    ],
  },
];

export const getAllFAQs = (): FAQItem[] => {
  return faqCategories.flatMap(category => category.items);
};

export const getFAQsByCategory = (categoryName: string): FAQItem[] => {
  const category = faqCategories.find(cat => cat.name === categoryName);
  return category ? category.items : [];
};
