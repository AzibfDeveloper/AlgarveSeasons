import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import GeoLandingTemplate from "@/components/GeoLandingTemplate";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

export default function CarriacaoLanding() {
  const serviceAreas = [
    "Carriacão",
    "Corte do Bispo",
    "Gafanhoeira",
    "Ameixial",
    "Caldas de Monchique",
    "Picota",
  ];

  return (
    <>
      <Helmet>
        <title>Air Conditioning & Solar in Carriacão | Algarve Seasons</title>
        <meta
          name="description"
          content="Premium HVAC and solar solutions in Carriacão, Algarve. Daikin installations, solar panels, heat pumps, and Tesla Powerwall. Serving Carriacão since 2016."
        />
        <meta name="keywords" content="air conditioning Carriacão, solar energy Carriacão, heat pumps Carriacão, HVAC Carriacão" />
      </Helmet>
      <LocalBusinessSchema
        municipality="Carriacão"
        description="Algarve Seasons is the leading HVAC and renewable energy provider in Carriacão. We specialize in Daikin air conditioning installations, solar energy systems, heat pumps, and Tesla Powerwall battery storage. Serving Carriacão and surrounding areas since 2016."
        serviceAreas={serviceAreas}
      />
      <Layout>
        <GeoLandingTemplate
          municipality="Carriacão"
          municipalitySlug="carriacao"
          description="Algarve Seasons is the leading HVAC and renewable energy provider in Carriacão. We specialize in Daikin air conditioning installations, solar energy systems, heat pumps, and Tesla Powerwall battery storage. Serving Carriacão and surrounding areas since 2016."
          serviceAreas={serviceAreas}
        />
      </Layout>
    </>
  );
}
