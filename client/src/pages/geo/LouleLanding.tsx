import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import GeoLandingTemplate from "@/components/GeoLandingTemplate";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

export default function LouleLanding() {
  const serviceAreas = [
    "Loulé City Center",
    "Almancil",
    "Vilamoura",
    "Quarteira",
    "Boliqueime",
    "Salir",
  ];

  return (
    <>
      <Helmet>
        <title>Air Conditioning & Solar in Loulé | Algarve Seasons</title>
        <meta
          name="description"
          content="Premium HVAC and solar solutions in Loulé, Algarve. Daikin installations, solar panels, heat pumps, and Tesla Powerwall. Serving Loulé since 2016."
        />
        <meta name="keywords" content="air conditioning Loulé, solar energy Loulé, heat pumps Loulé, HVAC Loulé" />
      </Helmet>
      <LocalBusinessSchema
        municipality="Loulé"
        description="Algarve Seasons is the leading HVAC and renewable energy provider in Loulé. We specialize in Daikin air conditioning installations, solar energy systems, heat pumps, and Tesla Powerwall battery storage. Serving Loulé and surrounding areas since 2016."
        serviceAreas={serviceAreas}
      />
      <Layout>
        <GeoLandingTemplate
          municipality="Loulé"
          municipalitySlug="loule"
          description="Algarve Seasons is the leading HVAC and renewable energy provider in Loulé. We specialize in Daikin air conditioning installations, solar energy systems, heat pumps, and Tesla Powerwall battery storage. Serving Loulé and surrounding areas since 2016."
          serviceAreas={serviceAreas}
        />
      </Layout>
    </>
  );
}
