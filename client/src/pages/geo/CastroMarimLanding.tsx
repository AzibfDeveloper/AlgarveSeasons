import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import GeoLandingTemplate from "@/components/GeoLandingTemplate";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

export default function CastroMarimLanding() {
  const serviceAreas = [
    "Castro Marim City Center",
    "Altura",
    "Cacela",
    "Conceição",
    "Odeleite",
    "Azinhal",
  ];

  return (
    <>
      <Helmet>
        <title>Air Conditioning & Solar in Castro Marim | Algarve Seasons</title>
        <meta
          name="description"
          content="Premium HVAC and solar solutions in Castro Marim, Algarve. Daikin installations, solar panels, heat pumps, and Tesla Powerwall. Serving Castro Marim since 2016."
        />
        <meta name="keywords" content="air conditioning Castro Marim, solar energy Castro Marim, heat pumps Castro Marim, HVAC Castro Marim" />
      </Helmet>
      <LocalBusinessSchema
        municipality="Castro Marim"
        description="Algarve Seasons is the leading HVAC and renewable energy provider in Castro Marim. We specialize in Daikin air conditioning installations, solar energy systems, heat pumps, and Tesla Powerwall battery storage. Serving Castro Marim and surrounding areas since 2016."
        serviceAreas={serviceAreas}
      />
      <Layout>
        <GeoLandingTemplate
          municipality="Castro Marim"
          municipalitySlug="castro-marim"
          description="Algarve Seasons is the leading HVAC and renewable energy provider in Castro Marim. We specialize in Daikin air conditioning installations, solar energy systems, heat pumps, and Tesla Powerwall battery storage. Serving Castro Marim and surrounding areas since 2016."
          serviceAreas={serviceAreas}
        />
      </Layout>
    </>
  );
}
