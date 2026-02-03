import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import GeoLandingTemplate from "@/components/GeoLandingTemplate";

export default function TaviraPT() {
  const serviceAreas = [
    "Tavira City Center",
    "Cacela",
    "Conceição",
    "Santa Catarina da Fonte do Bispo",
    "Luz de Tavira",
    "Cabanas",
  ];

  return (
    <>
      <Helmet>
        <title>Air Conditioning & Solar in Tavira | Algarve Seasons</title>
        <meta
          name="description"
          content="Premium HVAC and solar solutions in Tavira, Algarve. Daikin installations, solar panels, heat pumps, and Tesla Powerwall. Serving Tavira since 2016."
        />
        <meta name="keywords" content="air conditioning Tavira, solar energy Tavira, heat pumps Tavira, HVAC Tavira" />
      </Helmet>
      <Layout>
        <GeoLandingTemplate
          municipality="Tavira"
          municipalitySlug="tavira"
          description="Algarve Seasons is the leading HVAC and renewable energy provider in Tavira. We specialize in Daikin air conditioning installations, solar energy systems, heat pumps, and Tesla Powerwall battery storage. Serving Tavira and surrounding areas since 2016."
          serviceAreas={serviceAreas}
        />
      </Layout>
    </>
  );
}
