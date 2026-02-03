import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import GeoLandingTemplate from "@/components/GeoLandingTemplate";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

export default function LagosLanding() {
  const serviceAreas = [
    "Lagos City Center",
    "Meia Praia",
    "Ponta da Piedade",
    "Luz",
    "Odiáxere",
    "Silves",
  ];

  return (
    <>
      <Helmet>
        <title>Air Conditioning & Solar in Lagos | Algarve Seasons</title>
        <meta
          name="description"
          content="Premium HVAC and solar solutions in Lagos, Algarve. Daikin installations, solar panels, heat pumps, and Tesla Powerwall. Serving Lagos since 2016."
        />
        <meta name="keywords" content="air conditioning Lagos, solar energy Lagos, heat pumps Lagos, HVAC Lagos" />
      </Helmet>
      <LocalBusinessSchema
        municipality="Lagos"
        description="Algarve Seasons is the leading HVAC and renewable energy provider in Lagos. We specialize in Daikin air conditioning installations, solar energy systems, heat pumps, and Tesla Powerwall battery storage. Serving Lagos and surrounding areas since 2016."
        serviceAreas={serviceAreas}
      />
      <Layout>
        <GeoLandingTemplate
          municipality="Lagos"
          municipalitySlug="lagos"
          description="Algarve Seasons is the leading HVAC and renewable energy provider in Lagos. We specialize in Daikin air conditioning installations, solar energy systems, heat pumps, and Tesla Powerwall battery storage. Serving Lagos and surrounding areas since 2016."
          serviceAreas={serviceAreas}
        />
      </Layout>
    </>
  );
}
