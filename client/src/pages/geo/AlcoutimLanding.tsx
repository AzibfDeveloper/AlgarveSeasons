import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import GeoLandingTemplate from "@/components/GeoLandingTemplate";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

export default function AlcoutimLanding() {
  const serviceAreas = [
    "Alcoutim City Center",
    "Giões",
    "Pereiro",
    "Martins Longo",
    "Vaqueiros",
    "Junqueira",
  ];

  return (
    <>
      <Helmet>
        <title>Air Conditioning & Solar in Alcoutim | Algarve Seasons</title>
        <meta
          name="description"
          content="Premium HVAC and solar solutions in Alcoutim, Algarve. Daikin installations, solar panels, heat pumps, and Tesla Powerwall. Serving Alcoutim since 2016."
        />
        <meta name="keywords" content="air conditioning Alcoutim, solar energy Alcoutim, heat pumps Alcoutim, HVAC Alcoutim" />
      </Helmet>
      <LocalBusinessSchema
        municipality="Alcoutim"
        description="Algarve Seasons is the leading HVAC and renewable energy provider in Alcoutim. We specialize in Daikin air conditioning installations, solar energy systems, heat pumps, and Tesla Powerwall battery storage. Serving Alcoutim and surrounding areas since 2016."
        serviceAreas={serviceAreas}
      />
      <Layout>
        <GeoLandingTemplate
          municipality="Alcoutim"
          municipalitySlug="alcoutim"
          description="Algarve Seasons is the leading HVAC and renewable energy provider in Alcoutim. We specialize in Daikin air conditioning installations, solar energy systems, heat pumps, and Tesla Powerwall battery storage. Serving Alcoutim and surrounding areas since 2016."
          serviceAreas={serviceAreas}
        />
      </Layout>
    </>
  );
}
