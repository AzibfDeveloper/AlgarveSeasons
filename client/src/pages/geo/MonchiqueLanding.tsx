import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import GeoLandingTemplate from "@/components/GeoLandingTemplate";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

export default function MonchiqueLanding() {
  const serviceAreas = [
    "Monchique City Center",
    "Caldas de Monchique",
    "Picota",
    "Corte do Bispo",
    "Gafanhoeira",
    "Ameixial",
  ];

  return (
    <>
      <Helmet>
        <title>Air Conditioning & Solar in Monchique | Algarve Seasons</title>
        <meta
          name="description"
          content="Premium HVAC and solar solutions in Monchique, Algarve. Daikin installations, solar panels, heat pumps, and Tesla Powerwall. Serving Monchique since 2016."
        />
        <meta name="keywords" content="air conditioning Monchique, solar energy Monchique, heat pumps Monchique, HVAC Monchique" />
      </Helmet>
      <LocalBusinessSchema
        municipality="Monchique"
        description="Algarve Seasons is the leading HVAC and renewable energy provider in Monchique. We specialize in Daikin air conditioning installations, solar energy systems, heat pumps, and Tesla Powerwall battery storage. Serving Monchique and surrounding areas since 2016."
        serviceAreas={serviceAreas}
      />
      <Layout>
        <GeoLandingTemplate
          municipality="Monchique"
          municipalitySlug="monchique"
          description="Algarve Seasons is the leading HVAC and renewable energy provider in Monchique. We specialize in Daikin air conditioning installations, solar energy systems, heat pumps, and Tesla Powerwall battery storage. Serving Monchique and surrounding areas since 2016."
          serviceAreas={serviceAreas}
        />
      </Layout>
    </>
  );
}
