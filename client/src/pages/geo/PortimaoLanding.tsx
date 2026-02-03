import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import GeoLandingTemplate from "@/components/GeoLandingTemplate";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

export default function PortimaoLanding() {
  const serviceAreas = [
    "Portimão City Center",
    "Praia da Rocha",
    "Alvor",
    "Ferragudo",
    "Lagoa",
    "Carmo",
  ];

  return (
    <>
      <Helmet>
        <title>Air Conditioning & Solar in Portimão | Algarve Seasons</title>
        <meta
          name="description"
          content="Premium HVAC and solar solutions in Portimão, Algarve. Daikin installations, solar panels, heat pumps, and Tesla Powerwall. Serving Portimão since 2016."
        />
        <meta name="keywords" content="air conditioning Portimão, solar energy Portimão, heat pumps Portimão, HVAC Portimão" />
      </Helmet>
      <LocalBusinessSchema
        municipality="Portimão"
        description="Algarve Seasons is the leading HVAC and renewable energy provider in Portimão. We specialize in Daikin air conditioning installations, solar energy systems, heat pumps, and Tesla Powerwall battery storage. Serving Portimão and surrounding areas since 2016."
        serviceAreas={serviceAreas}
      />
      <Layout>
        <GeoLandingTemplate
          municipality="Portimão"
          municipalitySlug="portimao"
          description="Algarve Seasons is the leading HVAC and renewable energy provider in Portimão. We specialize in Daikin air conditioning installations, solar energy systems, heat pumps, and Tesla Powerwall battery storage. Serving Portimão and surrounding areas since 2016."
          serviceAreas={serviceAreas}
        />
      </Layout>
    </>
  );
}
