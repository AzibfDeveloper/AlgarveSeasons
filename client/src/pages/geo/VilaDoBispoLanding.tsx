import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import GeoLandingTemplate from "@/components/GeoLandingTemplate";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

export default function VilaDoBispoLanding() {
  const serviceAreas = [
    "Vila do Bispo City Center",
    "Praia da Luz",
    "Bensafrim",
    "Raposeira",
    "Salema",
    "Budens",
  ];

  return (
    <>
      <Helmet>
        <title>Air Conditioning & Solar in Vila do Bispo | Algarve Seasons</title>
        <meta
          name="description"
          content="Premium HVAC and solar solutions in Vila do Bispo, Algarve. Daikin installations, solar panels, heat pumps, and Tesla Powerwall. Serving Vila do Bispo since 2016."
        />
        <meta name="keywords" content="air conditioning Vila do Bispo, solar energy Vila do Bispo, heat pumps Vila do Bispo, HVAC Vila do Bispo" />
      </Helmet>
      <LocalBusinessSchema
        municipality="Vila do Bispo"
        description="Algarve Seasons is the leading HVAC and renewable energy provider in Vila do Bispo. We specialize in Daikin air conditioning installations, solar energy systems, heat pumps, and Tesla Powerwall battery storage. Serving Vila do Bispo and surrounding areas since 2016."
        serviceAreas={serviceAreas}
      />
      <Layout>
        <GeoLandingTemplate
          municipality="Vila do Bispo"
          municipalitySlug="vila-do-bispo"
          description="Algarve Seasons is the leading HVAC and renewable energy provider in Vila do Bispo. We specialize in Daikin air conditioning installations, solar energy systems, heat pumps, and Tesla Powerwall battery storage. Serving Vila do Bispo and surrounding areas since 2016."
          serviceAreas={serviceAreas}
        />
      </Layout>
    </>
  );
}
