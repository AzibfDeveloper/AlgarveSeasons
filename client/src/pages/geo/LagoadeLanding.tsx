import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import GeoLandingTemplate from "@/components/GeoLandingTemplate";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

export default function LagoadeLanding() {
  const serviceAreas = [
    "Lagoa City Center",
    "Carmo",
    "Ferragudo",
    "Porches",
    "Estômbar",
    "Algoz",
  ];

  return (
    <>
      <Helmet>
        <title>Air Conditioning & Solar in Lagoa | Algarve Seasons</title>
        <meta
          name="description"
          content="Premium HVAC and solar solutions in Lagoa, Algarve. Daikin installations, solar panels, heat pumps, and Tesla Powerwall. Serving Lagoa since 2016."
        />
        <meta name="keywords" content="air conditioning Lagoa, solar energy Lagoa, heat pumps Lagoa, HVAC Lagoa" />
      </Helmet>
      <LocalBusinessSchema
        municipality="Lagoa"
        description="Algarve Seasons is the leading HVAC and renewable energy provider in Lagoa. We specialize in Daikin air conditioning installations, solar energy systems, heat pumps, and Tesla Powerwall battery storage. Serving Lagoa and surrounding areas since 2016."
        serviceAreas={serviceAreas}
      />
      <Layout>
        <GeoLandingTemplate
          municipality="Lagoa"
          municipalitySlug="lagoa"
          description="Algarve Seasons is the leading HVAC and renewable energy provider in Lagoa. We specialize in Daikin air conditioning installations, solar energy systems, heat pumps, and Tesla Powerwall battery storage. Serving Lagoa and surrounding areas since 2016."
          serviceAreas={serviceAreas}
        />
      </Layout>
    </>
  );
}
