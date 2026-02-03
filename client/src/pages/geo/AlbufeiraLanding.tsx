import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import GeoLandingTemplate from "@/components/GeoLandingTemplate";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

export default function AlbufeiraLanding() {
  const serviceAreas = [
    "Albufeira Old Town",
    "Praia da Oura",
    "Areias de São João",
    "Guia",
    "Ferreiras",
    "Paderne",
  ];

  return (
    <>
      <Helmet>
        <title>Air Conditioning & Solar in Albufeira | Algarve Seasons</title>
        <meta
          name="description"
          content="Premium HVAC and solar solutions in Albufeira, Algarve. Daikin installations, solar panels, heat pumps, and Tesla Powerwall. Serving Albufeira since 2016."
        />
        <meta name="keywords" content="air conditioning Albufeira, solar energy Albufeira, heat pumps Albufeira, HVAC Albufeira" />
      </Helmet>
      <LocalBusinessSchema
        municipality="Albufeira"
        description="Algarve Seasons is the leading HVAC and renewable energy provider in Albufeira. We specialize in Daikin air conditioning installations, solar energy systems, heat pumps, and Tesla Powerwall battery storage. Serving Albufeira and surrounding areas since 2016."
        serviceAreas={serviceAreas}
      />
      <Layout>
        <GeoLandingTemplate
          municipality="Albufeira"
          municipalitySlug="albufeira"
          description="Algarve Seasons is the leading HVAC and renewable energy provider in Albufeira. We specialize in Daikin air conditioning installations, solar energy systems, heat pumps, and Tesla Powerwall battery storage. Serving Albufeira and surrounding areas since 2016."
          serviceAreas={serviceAreas}
        />
      </Layout>
    </>
  );
}
