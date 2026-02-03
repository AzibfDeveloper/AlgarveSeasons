import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import GeoLandingTemplate from "@/components/GeoLandingTemplate";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

export default function SilvestLanding() {
  const serviceAreas = [
    "Silves City Center",
    "Armação de Pêra",
    "Porches",
    "Lagoa",
    "Pêra",
    "São Bartolomeu de Messines",
  ];

  return (
    <>
      <Helmet>
        <title>Air Conditioning & Solar in Silves | Algarve Seasons</title>
        <meta
          name="description"
          content="Premium HVAC and solar solutions in Silves, Algarve. Daikin installations, solar panels, heat pumps, and Tesla Powerwall. Serving Silves since 2016."
        />
        <meta name="keywords" content="air conditioning Silves, solar energy Silves, heat pumps Silves, HVAC Silves" />
      </Helmet>
      <LocalBusinessSchema
        municipality="Silves"
        description="Algarve Seasons is the leading HVAC and renewable energy provider in Silves. We specialize in Daikin air conditioning installations, solar energy systems, heat pumps, and Tesla Powerwall battery storage. Serving Silves and surrounding areas since 2016."
        serviceAreas={serviceAreas}
      />
      <Layout>
        <GeoLandingTemplate
          municipality="Silves"
          municipalitySlug="silves"
          description="Algarve Seasons is the leading HVAC and renewable energy provider in Silves. We specialize in Daikin air conditioning installations, solar energy systems, heat pumps, and Tesla Powerwall battery storage. Serving Silves and surrounding areas since 2016."
          serviceAreas={serviceAreas}
        />
      </Layout>
    </>
  );
}
