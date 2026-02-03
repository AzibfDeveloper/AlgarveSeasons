import { Helmet } from "react-helmet-async";

interface LocalBusinessSchemaProps {
  municipality: string;
  region?: string;
  description: string;
  serviceAreas?: string[];
  latitude?: number;
  longitude?: number;
}

export default function LocalBusinessSchema({
  municipality,
  region = "Algarve",
  description,
  serviceAreas = [],
  latitude,
  longitude,
}: LocalBusinessSchemaProps) {
  // Coordinates for major Algarve municipalities
  const coordinatesMap: Record<string, { lat: number; lng: number }> = {
    Faro: { lat: 37.0141, lng: -7.9365 },
    Albufeira: { lat: 37.0883, lng: -8.251 },
    Lagos: { lat: 37.0948, lng: -8.6725 },
    Portimão: { lat: 37.1417, lng: -8.5348 },
    Silves: { lat: 37.1883, lng: -8.4417 },
    Loulé: { lat: 37.1533, lng: -8.0233 },
    Tavira: { lat: 37.1267, lng: -8.1267 },
    Olhão: { lat: 37.0517, lng: -7.8433 },
    "São Brás de Alportel": { lat: 37.0867, lng: -7.8767 },
    Lagoa: { lat: 37.1433, lng: -8.4667 },
    Carriacão: { lat: 37.1, lng: -8.4833 },
    Monchique: { lat: 37.3167, lng: -8.5667 },
    Aljezur: { lat: 37.3167, lng: -8.8167 },
    "Vila do Bispo": { lat: 37.0833, lng: -8.8333 },
    "Castro Marim": { lat: 37.1833, lng: -7.4417 },
    Alcoutim: { lat: 37.4667, lng: -7.4667 },
  };

  const coords = latitude && longitude 
    ? { lat: latitude, lng: longitude }
    : coordinatesMap[municipality] || { lat: 37.0, lng: -8.0 };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://algarveseasons.com/${municipality.toLowerCase().replace(/\s+/g, "-")}`,
    name: `Algarve Seasons - HVAC & Solar Solutions in ${municipality}`,
    description: description,
    url: `https://algarveseasons.com/${municipality.toLowerCase().replace(/\s+/g, "-")}`,
    telephone: "+351910675168",
    email: "info@algarveseasons.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Principal",
      addressLocality: municipality,
      addressRegion: region,
      postalCode: "8000-000",
      addressCountry: "PT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: coords.lat,
      longitude: coords.lng,
    },
    areaServed: [
      {
        "@type": "City",
        name: municipality,
      },
      ...serviceAreas.map((area) => ({
        "@type": "City",
        name: area,
      })),
    ],
    priceRange: "€€",
    image: "https://algarveseasons.com/logo.png",
    logo: {
      "@type": "ImageObject",
      url: "https://algarveseasons.com/logo.png",
      width: 250,
      height: 250,
    },
    sameAs: [
      "https://www.facebook.com/algarveseasons",
      "https://www.instagram.com/algarveseasons",
    ],
    knowsAbout: [
      "Air Conditioning Installation",
      "Air Conditioning Maintenance",
      "Solar Energy Systems",
      "Heat Pumps",
      "Tesla Powerwall Installation",
      "HVAC Services",
      "Renewable Energy",
    ],
    serviceType: [
      "Air Conditioning",
      "Solar Energy",
      "Heat Pumps",
      "Battery Storage",
    ],
    foundingDate: "2016",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "200",
      bestRating: "5",
      worstRating: "1",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "14:00",
      },
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
    </Helmet>
  );
}
