import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import GeoLandingTemplate from "@/components/GeoLandingTemplate";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

export default function SaoBrasLanding() {
  const serviceAreas = [
    "São Brás de Alportel",
    "Estômbar",
    "Sesmarias",
    "Porches",
    "Algoz",
    "Tunes",
  ];

  return (
    <>
      <Helmet>
        <title>Air Conditioning & Solar in São Brás | Algarve Seasons</title>
        <meta
          name="description"
          content="Premium HVAC and solar solutions in São Brás de Alportel, Algarve. Daikin installations, solar panels, heat pumps, and Tesla Powerwall. Serving São Brás since 2016."
        />
        <meta name="keywords" content="air conditioning São Brás, solar energy São Brás, heat pumps São Brás, HVAC São Brás" />
      </Helmet>
      <LocalBusinessSchema
        municipality="São Brás de Alportel"
        description="Algarve Seasons is the leading HVAC and renewable energy provider in São Brás de Alportel. We specialize in Daikin air conditioning installations, solar energy systems, heat pumps, and Tesla Powerwall battery storage. Serving São Brás de Alportel and surrounding areas since 2016."
        serviceAreas={serviceAreas}
      />
      <Layout>
        <GeoLandingTemplate
          municipality="São Brás de Alportel"
          municipalitySlug="sao-bras"
          description="Algarve Seasons is the leading HVAC and renewable energy provider in São Brás de Alportel. We specialize in Daikin air conditioning installations, solar energy systems, heat pumps, and Tesla Powerwall battery storage. Serving São Brás and surrounding areas since 2016."
          serviceAreas={serviceAreas}
        />
      </Layout>
    </>
  );
}
