import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import GeoLandingTemplate from "@/components/GeoLandingTemplate";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

export default function OlhaoLanding() {
  const serviceAreas = [
    "Olhão City Center",
    "Fuseta",
    "Moncarapacho",
    "Pechão",
    "Quelfes",
    "Tunes",
  ];

  return (
    <>
      <Helmet>
        <title>Air Conditioning & Solar in Olhão | Algarve Seasons</title>
        <meta
          name="description"
          content="Premium HVAC and solar solutions in Olhão, Algarve. Daikin installations, solar panels, heat pumps, and Tesla Powerwall. Serving Olhão since 2016."
        />
        <meta name="keywords" content="air conditioning Olhão, solar energy Olhão, heat pumps Olhão, HVAC Olhão" />
      </Helmet>
      <LocalBusinessSchema
        municipality="Olhão"
        description="Algarve Seasons is the leading HVAC and renewable energy provider in Olhão. We specialize in Daikin air conditioning installations, solar energy systems, heat pumps, and Tesla Powerwall battery storage. Serving Olhão and surrounding areas since 2016."
        serviceAreas={serviceAreas}
      />
      <Layout>
        <GeoLandingTemplate
          municipality="Olhão"
          municipalitySlug="olhao"
          description="Algarve Seasons is the leading HVAC and renewable energy provider in Olhão. We specialize in Daikin air conditioning installations, solar energy systems, heat pumps, and Tesla Powerwall battery storage. Serving Olhão and surrounding areas since 2016."
          serviceAreas={serviceAreas}
        />
      </Layout>
    </>
  );
}
