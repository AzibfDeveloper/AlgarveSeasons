import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import GeoLandingTemplate from "@/components/GeoLandingTemplate";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

export default function FaroLanding() {
  const serviceAreas = [
    "Faro City Center",
    "Olhão",
    "São Brás de Alportel",
    "Loulé",
    "Almancil",
    "Vilamoura",
  ];

  return (
    <>
      <Helmet>
        <title>Air Conditioning & Solar in Faro | Algarve Seasons</title>
        <meta
          name="description"
          content="Premium HVAC and solar solutions in Faro, Algarve. Daikin installations, solar panels, heat pumps, and Tesla Powerwall. Serving Faro since 2016."
        />
        <meta name="keywords" content="air conditioning Faro, solar energy Faro, heat pumps Faro, HVAC Faro" />
      </Helmet>
      <LocalBusinessSchema
        municipality="Faro"
        description="Algarve Seasons is the leading HVAC and renewable energy provider in Faro. We specialize in Daikin air conditioning installations, solar energy systems, heat pumps, and Tesla Powerwall battery storage. Serving Faro and surrounding areas since 2016."
        serviceAreas={serviceAreas}
      />
      <Layout>
        <GeoLandingTemplate
          municipality="Faro"
          municipalitySlug="faro"
          description="Algarve Seasons is the leading HVAC and renewable energy provider in Faro. We specialize in Daikin air conditioning installations, solar energy systems, heat pumps, and Tesla Powerwall battery storage. Serving Faro and surrounding areas since 2016."
          serviceAreas={serviceAreas}
        />
      </Layout>
    </>
  );
}
