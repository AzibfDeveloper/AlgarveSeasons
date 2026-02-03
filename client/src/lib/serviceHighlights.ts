/**
 * Service Highlights Data
 * 
 * Provides tailored service recommendations and insights for each municipality
 * based on local climate, property types, and energy characteristics.
 */

export interface ServiceHighlight {
  title: string;
  description: string;
  icon: string;
  benefit: string;
  relevance: "high" | "medium" | "low";
}

export interface MunicipalityHighlights {
  municipality: string;
  region: string;
  climate: string;
  highlights: {
    airConditioning: ServiceHighlight;
    solar: ServiceHighlight;
    heatPumps: ServiceHighlight;
  };
  localInsight: string;
  propertyTypes: string[];
  averageTemperature: string;
}

export const serviceHighlightsData: Record<string, MunicipalityHighlights> = {
  faro: {
    municipality: "Faro",
    region: "Eastern Algarve",
    climate: "Hot summers, mild winters with coastal influence",
    highlights: {
      airConditioning: {
        title: "Essential Year-Round Cooling",
        description: "Faro experiences the hottest summers in the Algarve with temperatures exceeding 35°C. Premium Daikin systems keep your home comfortable while managing humidity from coastal proximity.",
        icon: "❄️",
        benefit: "Reduce indoor temperatures by 10-15°C",
        relevance: "high",
      },
      solar: {
        title: "Maximum Solar Potential",
        description: "With 300+ sunny days annually, Faro is ideal for solar installations. Capture abundant sunshine to power your AC and heating systems year-round.",
        icon: "☀️",
        benefit: "Generate 4,500+ kWh annually per 5kW system",
        relevance: "high",
      },
      heatPumps: {
        title: "Efficient Winter Heating",
        description: "While winters are mild, air-to-water heat pumps provide efficient, eco-friendly heating for villas and apartments. Perfect complement to solar systems.",
        icon: "🌡️",
        benefit: "Reduce heating costs by 60-70%",
        relevance: "medium",
      },
    },
    localInsight: "Faro's coastal properties benefit greatly from integrated climate solutions. Many villa owners combine AC for summer comfort with solar systems for year-round energy independence.",
    propertyTypes: ["Villas", "Apartments", "Commercial properties", "Holiday rentals"],
    averageTemperature: "Summer: 32°C | Winter: 12°C",
  },
  lagos: {
    municipality: "Lagos",
    region: "Western Algarve",
    climate: "Warm summers, mild winters with Atlantic exposure",
    highlights: {
      airConditioning: {
        title: "Coastal Comfort Solutions",
        description: "Lagos' Atlantic-facing location brings refreshing breezes but intense summer heat. Daikin systems maintain perfect indoor climate for beachfront properties.",
        icon: "❄️",
        benefit: "Maintain 22-24°C indoors during 35°C+ heat",
        relevance: "high",
      },
      solar: {
        title: "Reliable Solar Generation",
        description: "Lagos benefits from consistent sunshine with minimal cloud cover. Solar panels generate excellent returns, especially for holiday rental properties.",
        icon: "☀️",
        benefit: "Offset 80-90% of annual electricity costs",
        relevance: "high",
      },
      heatPumps: {
        title: "Sustainable Heating",
        description: "Modern heat pumps provide efficient heating during mild winters while working synergistically with solar systems for maximum energy efficiency.",
        icon: "🌡️",
        benefit: "Achieve net-zero energy homes",
        relevance: "medium",
      },
    },
    localInsight: "Lagos' thriving tourism sector means many properties are holiday rentals. Integrated climate and energy solutions significantly boost rental appeal and profitability.",
    propertyTypes: ["Beachfront villas", "Holiday rentals", "Apartments", "Boutique hotels"],
    averageTemperature: "Summer: 31°C | Winter: 11°C",
  },
  albufeira: {
    municipality: "Albufeira",
    region: "Central-West Algarve",
    climate: "Hot summers, mild winters with Mediterranean influence",
    highlights: {
      airConditioning: {
        title: "Premium Cooling for Busy Season",
        description: "Albufeira's summer tourist season demands reliable AC. Daikin systems ensure guest comfort and property value protection during peak temperatures.",
        icon: "❄️",
        benefit: "Maintain consistent comfort for guests",
        relevance: "high",
      },
      solar: {
        title: "Energy Independence for Properties",
        description: "Albufeira's high solar irradiance makes it perfect for solar investments. Reduce operational costs for rental properties significantly.",
        icon: "☀️",
        benefit: "Save €2,000-3,000 annually on electricity",
        relevance: "high",
      },
      heatPumps: {
        title: "Off-Season Heating",
        description: "Heat pumps provide efficient, quiet heating during shoulder seasons when properties may be occupied by owners or guests.",
        icon: "🌡️",
        benefit: "Reduce heating bills by 50-60%",
        relevance: "medium",
      },
    },
    localInsight: "Albufeira's property market is dominated by vacation rentals and investment properties. Climate control and solar systems directly impact rental income and guest satisfaction.",
    propertyTypes: ["Vacation rentals", "Investment villas", "Apartments", "Resorts"],
    averageTemperature: "Summer: 32°C | Winter: 12°C",
  },
  portimao: {
    municipality: "Portimão",
    region: "Central-West Algarve",
    climate: "Warm summers, mild winters with river valley influence",
    highlights: {
      airConditioning: {
        title: "Comfort for Riverside Properties",
        description: "Portimão's riverside location creates unique microclimates. Daikin systems adapt perfectly to local conditions, ensuring comfort in villas and apartments.",
        icon: "❄️",
        benefit: "Adapt to local humidity and temperature variations",
        relevance: "high",
      },
      solar: {
        title: "Strong Solar Output",
        description: "Portimão's elevation and clear skies provide excellent solar potential. Ideal for powering both AC and heating systems efficiently.",
        icon: "☀️",
        benefit: "Generate 4,200+ kWh annually per 5kW system",
        relevance: "high",
      },
      heatPumps: {
        title: "Efficient Climate Control",
        description: "Heat pumps work excellently in Portimão's moderate climate, providing both heating and cooling in one integrated system.",
        icon: "🌡️",
        benefit: "Single system for year-round comfort",
        relevance: "high",
      },
    },
    localInsight: "Portimão's mix of residential and commercial properties benefits from integrated climate solutions. Many businesses use heat pumps for energy-efficient operations.",
    propertyTypes: ["Residential villas", "Commercial properties", "Apartments", "Mixed-use buildings"],
    averageTemperature: "Summer: 30°C | Winter: 11°C",
  },
  silves: {
    municipality: "Silves",
    region: "Central Algarve",
    climate: "Hot summers, mild winters with inland characteristics",
    highlights: {
      airConditioning: {
        title: "Interior Climate Control",
        description: "Silves' inland location experiences intense summer heat. Daikin systems maintain comfortable indoor environments for homes and businesses.",
        icon: "❄️",
        benefit: "Combat 35°C+ summer temperatures",
        relevance: "high",
      },
      solar: {
        title: "Abundant Solar Resource",
        description: "Silves' inland position means less cloud cover and excellent solar potential. Perfect for energy-independent properties.",
        icon: "☀️",
        benefit: "Achieve 90%+ energy self-sufficiency",
        relevance: "high",
      },
      heatPumps: {
        title: "Sustainable Heating Solution",
        description: "Modern heat pumps provide efficient heating during mild winters while complementing solar systems perfectly.",
        icon: "🌡️",
        benefit: "Reduce carbon footprint by 70%",
        relevance: "medium",
      },
    },
    localInsight: "Silves' agricultural heritage means many properties are rural estates. Integrated climate and solar solutions are increasingly popular for sustainable farming operations.",
    propertyTypes: ["Rural estates", "Farmhouses", "Residential properties", "Agricultural buildings"],
    averageTemperature: "Summer: 31°C | Winter: 10°C",
  },
  loule: {
    municipality: "Loulé",
    region: "Central Algarve",
    climate: "Hot summers, cool winters with mountain influence",
    highlights: {
      airConditioning: {
        title: "Summer Heat Management",
        description: "Loulé's mountain elevation brings cooler air, but summers still require effective AC. Daikin systems maintain comfort efficiently.",
        icon: "❄️",
        benefit: "Maintain comfort during peak summer",
        relevance: "high",
      },
      solar: {
        title: "Excellent Solar Conditions",
        description: "Loulé's elevation and clear skies provide outstanding solar irradiance. Ideal for maximum energy generation.",
        icon: "☀️",
        benefit: "Generate 4,300+ kWh annually per 5kW system",
        relevance: "high",
      },
      heatPumps: {
        title: "Winter Heating Essential",
        description: "Loulé's cooler winters make heat pumps particularly valuable. Provide efficient, comfortable heating without gas.",
        icon: "🌡️",
        benefit: "Reduce winter heating costs by 65%",
        relevance: "high",
      },
    },
    localInsight: "Loulé's mountain communities increasingly adopt renewable energy solutions. Heat pumps and solar systems are perfect for sustainable living in this region.",
    propertyTypes: ["Mountain villas", "Rural homes", "Residential properties", "Eco-lodges"],
    averageTemperature: "Summer: 29°C | Winter: 9°C",
  },
  tavira: {
    municipality: "Tavira",
    region: "Central-East Algarve",
    climate: "Warm summers, cool winters with high elevation",
    highlights: {
      airConditioning: {
        title: "Elevation-Adjusted Cooling",
        description: "Tavira's high elevation creates unique climate conditions. Daikin systems optimize for local temperature patterns.",
        icon: "❄️",
        benefit: "Adapt to elevation-specific climate needs",
        relevance: "medium",
      },
      solar: {
        title: "Premium Solar Location",
        description: "Tavira's elevation and clear skies provide exceptional solar potential. One of the best locations in Algarve for solar installations.",
        icon: "☀️",
        benefit: "Generate 4,400+ kWh annually per 5kW system",
        relevance: "high",
      },
      heatPumps: {
        title: "Efficient Winter Heating",
        description: "Cooler winters at elevation make heat pumps ideal. Provide comfortable, efficient heating for mountain properties.",
        icon: "🌡️",
        benefit: "Reduce heating costs by 60%",
        relevance: "high",
      },
    },
    localInsight: "Tavira's mountain setting attracts eco-conscious residents. Integrated renewable energy solutions are highly valued for sustainable mountain living.",
    propertyTypes: ["Mountain properties", "Eco-homes", "Residential villas", "Retreat centers"],
    averageTemperature: "Summer: 28°C | Winter: 8°C",
  },
  olhao: {
    municipality: "Olhão",
    region: "Central-East Algarve",
    climate: "Hot summers, mild winters with coastal lagoon influence",
    highlights: {
      airConditioning: {
        title: "Humidity Management",
        description: "Olhão's lagoon location brings high humidity. Daikin systems excel at humidity control while maintaining comfort.",
        icon: "❄️",
        benefit: "Reduce indoor humidity by 40-50%",
        relevance: "high",
      },
      solar: {
        title: "Consistent Solar Generation",
        description: "Olhão's coastal position provides reliable solar potential. Excellent for powering AC and heating systems.",
        icon: "☀️",
        benefit: "Generate 4,100+ kWh annually per 5kW system",
        relevance: "high",
      },
      heatPumps: {
        title: "Efficient Heating Solution",
        description: "Heat pumps provide efficient heating during mild winters while working perfectly with solar systems.",
        icon: "🌡️",
        benefit: "Achieve 70% energy savings",
        relevance: "medium",
      },
    },
    localInsight: "Olhão's fishing heritage and lagoon ecosystem make it attractive for eco-conscious property owners. Sustainable climate solutions are increasingly popular.",
    propertyTypes: ["Waterfront properties", "Fishing village homes", "Apartments", "Eco-properties"],
    averageTemperature: "Summer: 31°C | Winter: 11°C",
  },
  "sao-bras": {
    municipality: "São Brás",
    region: "Central-East Algarve",
    climate: "Warm summers, cool winters with mountain plateau characteristics",
    highlights: {
      airConditioning: {
        title: "Plateau Climate Cooling",
        description: "São Brás' plateau location creates unique climate patterns. Daikin systems adapt to local conditions for optimal comfort.",
        icon: "❄️",
        benefit: "Maintain comfort in plateau climate",
        relevance: "medium",
      },
      solar: {
        title: "Excellent Solar Potential",
        description: "São Brás' plateau elevation and clear skies provide outstanding solar irradiance for maximum energy generation.",
        icon: "☀️",
        benefit: "Generate 4,350+ kWh annually per 5kW system",
        relevance: "high",
      },
      heatPumps: {
        title: "Winter Heating Efficiency",
        description: "Cooler plateau winters make heat pumps particularly valuable. Provide efficient, sustainable heating.",
        icon: "🌡️",
        benefit: "Reduce heating costs by 65%",
        relevance: "high",
      },
    },
    localInsight: "São Brás' quiet, rural character attracts families seeking sustainable living. Renewable energy solutions are highly valued here.",
    propertyTypes: ["Rural homes", "Family villas", "Farmhouses", "Residential properties"],
    averageTemperature: "Summer: 29°C | Winter: 9°C",
  },
  lagoa: {
    municipality: "Lagoa",
    region: "Central Algarve",
    climate: "Hot summers, mild winters with inland characteristics",
    highlights: {
      airConditioning: {
        title: "Summer Comfort Essential",
        description: "Lagoa's inland location experiences intense summer heat. Daikin systems ensure comfort for homes and businesses.",
        icon: "❄️",
        benefit: "Maintain 22-24°C indoors",
        relevance: "high",
      },
      solar: {
        title: "Strong Solar Output",
        description: "Lagoa's clear skies and inland position provide excellent solar potential. Ideal for energy-independent properties.",
        icon: "☀️",
        benefit: "Generate 4,250+ kWh annually per 5kW system",
        relevance: "high",
      },
      heatPumps: {
        title: "Sustainable Heating",
        description: "Heat pumps provide efficient heating during mild winters while complementing solar systems perfectly.",
        icon: "🌡️",
        benefit: "Reduce heating costs by 55%",
        relevance: "medium",
      },
    },
    localInsight: "Lagoa's wine region and agricultural heritage make it attractive for sustainable property development. Integrated climate solutions support eco-friendly operations.",
    propertyTypes: ["Wine estates", "Agricultural properties", "Residential villas", "Agritourism"],
    averageTemperature: "Summer: 31°C | Winter: 10°C",
  },
  carriacao: {
    municipality: "Carriacão",
    region: "Central Algarve",
    climate: "Warm summers, cool winters with rural characteristics",
    highlights: {
      airConditioning: {
        title: "Rural Property Cooling",
        description: "Carriacão's rural setting experiences warm summers. Daikin systems provide efficient cooling for homes and agricultural buildings.",
        icon: "❄️",
        benefit: "Maintain comfort in rural properties",
        relevance: "medium",
      },
      solar: {
        title: "Abundant Solar Resource",
        description: "Carriacão's rural location with clear skies provides excellent solar potential for energy-independent properties.",
        icon: "☀️",
        benefit: "Generate 4,200+ kWh annually per 5kW system",
        relevance: "high",
      },
      heatPumps: {
        title: "Efficient Heating Solution",
        description: "Heat pumps provide efficient heating for rural properties while reducing dependence on traditional heating methods.",
        icon: "🌡️",
        benefit: "Reduce heating costs by 60%",
        relevance: "high",
      },
    },
    localInsight: "Carriacão's rural community increasingly adopts sustainable solutions. Solar and heat pump systems are perfect for agricultural and residential properties.",
    propertyTypes: ["Farmhouses", "Rural estates", "Agricultural buildings", "Residential homes"],
    averageTemperature: "Summer: 30°C | Winter: 9°C",
  },
  monchique: {
    municipality: "Monchique",
    region: "Western Algarve",
    climate: "Warm summers, cool winters with mountain characteristics",
    highlights: {
      airConditioning: {
        title: "Mountain Climate Cooling",
        description: "Monchique's mountain location creates cooler summers. Daikin systems maintain comfort efficiently in this unique climate.",
        icon: "❄️",
        benefit: "Adapt to mountain climate conditions",
        relevance: "medium",
      },
      solar: {
        title: "Excellent Mountain Solar",
        description: "Monchique's elevation and clear skies provide outstanding solar potential. Ideal for sustainable mountain living.",
        icon: "☀️",
        benefit: "Generate 4,300+ kWh annually per 5kW system",
        relevance: "high",
      },
      heatPumps: {
        title: "Essential Winter Heating",
        description: "Monchique's cooler winters make heat pumps particularly valuable. Provide efficient, eco-friendly heating.",
        icon: "🌡️",
        benefit: "Reduce heating costs by 70%",
        relevance: "high",
      },
    },
    localInsight: "Monchique's mountain communities value sustainability. Integrated climate and solar solutions are increasingly popular for eco-conscious residents.",
    propertyTypes: ["Mountain villas", "Eco-homes", "Retreat centers", "Rural properties"],
    averageTemperature: "Summer: 27°C | Winter: 7°C",
  },
  aljezur: {
    municipality: "Aljezur",
    region: "Western Algarve",
    climate: "Warm summers, cool winters with Atlantic exposure",
    highlights: {
      airConditioning: {
        title: "Atlantic Coastal Cooling",
        description: "Aljezur's Atlantic location brings refreshing breezes but warm summers. Daikin systems maintain perfect indoor climate.",
        icon: "❄️",
        benefit: "Maintain comfort during warm season",
        relevance: "high",
      },
      solar: {
        title: "Reliable Solar Generation",
        description: "Aljezur's coastal position provides consistent solar potential. Ideal for energy-independent properties.",
        icon: "☀️",
        benefit: "Generate 4,150+ kWh annually per 5kW system",
        relevance: "high",
      },
      heatPumps: {
        title: "Efficient Winter Heating",
        description: "Heat pumps provide efficient heating during cool Atlantic winters while complementing solar systems.",
        icon: "🌡️",
        benefit: "Reduce heating costs by 60%",
        relevance: "high",
      },
    },
    localInsight: "Aljezur's remote, pristine location attracts eco-conscious residents. Integrated renewable energy solutions are highly valued for sustainable coastal living.",
    propertyTypes: ["Coastal properties", "Eco-homes", "Retreat centers", "Rural villas"],
    averageTemperature: "Summer: 28°C | Winter: 8°C",
  },
  "vila-do-bispo": {
    municipality: "Vila do Bispo",
    region: "Western Algarve",
    climate: "Warm summers, cool winters with Atlantic influence",
    highlights: {
      airConditioning: {
        title: "Coastal Property Cooling",
        description: "Vila do Bispo's Atlantic location brings unique climate patterns. Daikin systems maintain comfort for coastal properties.",
        icon: "❄️",
        benefit: "Manage coastal humidity and temperature",
        relevance: "high",
      },
      solar: {
        title: "Strong Solar Potential",
        description: "Vila do Bispo's coastal position provides excellent solar potential. Ideal for powering climate control systems.",
        icon: "☀️",
        benefit: "Generate 4,100+ kWh annually per 5kW system",
        relevance: "high",
      },
      heatPumps: {
        title: "Sustainable Heating",
        description: "Heat pumps provide efficient heating during cool winters while working perfectly with solar systems.",
        icon: "🌡️",
        benefit: "Achieve net-zero energy homes",
        relevance: "high",
      },
    },
    localInsight: "Vila do Bispo's coastal communities increasingly adopt renewable energy. Integrated climate and solar solutions are perfect for sustainable coastal living.",
    propertyTypes: ["Coastal villas", "Beachfront properties", "Eco-homes", "Residential properties"],
    averageTemperature: "Summer: 28°C | Winter: 8°C",
  },
  "castro-marim": {
    municipality: "Castro Marim",
    region: "Eastern Algarve",
    climate: "Hot summers, mild winters with salt marsh influence",
    highlights: {
      airConditioning: {
        title: "Salt Marsh Climate Control",
        description: "Castro Marim's salt marsh location creates unique humidity patterns. Daikin systems excel at humidity management.",
        icon: "❄️",
        benefit: "Reduce indoor humidity by 45%",
        relevance: "high",
      },
      solar: {
        title: "Excellent Solar Output",
        description: "Castro Marim's clear skies and coastal position provide excellent solar potential for energy generation.",
        icon: "☀️",
        benefit: "Generate 4,200+ kWh annually per 5kW system",
        relevance: "high",
      },
      heatPumps: {
        title: "Efficient Heating Solution",
        description: "Heat pumps provide efficient heating during mild winters while complementing solar systems perfectly.",
        icon: "🌡️",
        benefit: "Reduce heating costs by 55%",
        relevance: "medium",
      },
    },
    localInsight: "Castro Marim's nature reserve location makes it attractive for eco-conscious property owners. Sustainable climate solutions are highly valued.",
    propertyTypes: ["Nature reserve properties", "Eco-homes", "Residential properties", "Agritourism"],
    averageTemperature: "Summer: 31°C | Winter: 11°C",
  },
  alcoutim: {
    municipality: "Alcoutim",
    region: "Eastern Algarve",
    climate: "Warm summers, cool winters with river valley characteristics",
    highlights: {
      airConditioning: {
        title: "River Valley Cooling",
        description: "Alcoutim's river valley location creates unique microclimates. Daikin systems adapt to local conditions efficiently.",
        icon: "❄️",
        benefit: "Maintain comfort in valley climate",
        relevance: "medium",
      },
      solar: {
        title: "Strong Solar Potential",
        description: "Alcoutim's clear skies and inland position provide excellent solar potential for energy-independent properties.",
        icon: "☀️",
        benefit: "Generate 4,250+ kWh annually per 5kW system",
        relevance: "high",
      },
      heatPumps: {
        title: "Efficient Winter Heating",
        description: "Heat pumps provide efficient heating during cool winters while reducing dependence on traditional methods.",
        icon: "🌡️",
        benefit: "Reduce heating costs by 60%",
        relevance: "high",
      },
    },
    localInsight: "Alcoutim's remote river valley setting attracts residents seeking sustainable living. Integrated renewable energy solutions are increasingly popular.",
    propertyTypes: ["River valley properties", "Eco-homes", "Rural estates", "Residential properties"],
    averageTemperature: "Summer: 30°C | Winter: 9°C",
  },
};

export function getServiceHighlights(municipalitySlug: string): MunicipalityHighlights | null {
  return serviceHighlightsData[municipalitySlug] || null;
}

export function getAllMunicipalityHighlights(): MunicipalityHighlights[] {
  return Object.values(serviceHighlightsData);
}

export function getHighlightsByRegion(region: string): MunicipalityHighlights[] {
  return Object.values(serviceHighlightsData).filter((h) => h.region === region);
}
