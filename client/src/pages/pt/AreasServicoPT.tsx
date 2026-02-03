import LayoutPT from "@/components/LayoutPT";
import { Link } from "wouter";
import { MapPin, ChevronRight, Zap, Sun, Thermometer } from "lucide-react";
import { getAllMunicipalities, getMunicipalitiesByRegion } from "@/lib/municipalityAdjacency";
import { getServiceHighlights } from "@/lib/serviceHighlights";
import ServiceHighlightCard from "@/components/ServiceHighlightCard";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

/**
 * Service Areas Directory Page - Portuguese Version
 * 
 * Showcases all 16 Algarve municipalities with organized sections
 * by geographic region. Includes dynamic service highlights tailored
 * to each municipality's climate and property characteristics.
 */

export default function AreasServicoPT() {
  const westernRegion = getMunicipalitiesByRegion("western");
  const centralWestRegion = getMunicipalitiesByRegion("central-west");
  const centralRegion = getMunicipalitiesByRegion("central");
  const centralEastRegion = getMunicipalitiesByRegion("central-east");
  const easternRegion = getMunicipalitiesByRegion("eastern");

  const [selectedMunicipality, setSelectedMunicipality] = useState<string | null>(null);
  const [expandedRegion, setExpandedRegion] = useState<string | null>(null);

  const regions = [
    { name: "Algarve Ocidental", municipalities: westernRegion, color: "from-purple-50 to-purple-100", regionKey: "western" },
    { name: "Algarve Centro-Oeste", municipalities: centralWestRegion, color: "from-blue-50 to-blue-100", regionKey: "central-west" },
    { name: "Algarve Central", municipalities: centralRegion, color: "from-green-50 to-green-100", regionKey: "central" },
    { name: "Algarve Centro-Este", municipalities: centralEastRegion, color: "from-yellow-50 to-yellow-100", regionKey: "central-east" },
    { name: "Algarve Oriental", municipalities: easternRegion, color: "from-orange-50 to-orange-100", regionKey: "eastern" },
  ];

  const selectedHighlights = selectedMunicipality ? Object.values(getServiceHighlights(selectedMunicipality) || {}) : null;

  const municipalityPageMap: Record<string, string> = {
    "Faro": "/pt-pt/faro",
    "Lagos": "/pt-pt/lagos",
    "Albufeira": "/pt-pt/albufeira",
    "Loulé": "/pt-pt/loule",
    "Portimão": "/pt-pt/portimao",
    "Tavira": "/pt-pt/tavira",
    "Olhão": "/pt-pt/olhao",
    "Silves": "/pt-pt/silves",
    "Lagoa": "/pt-pt/lagoa",
    "Carriacão": "/pt-pt/carriacao",
    "Monchique": "/pt-pt/monchique",
    "Aljezur": "/pt-pt/aljezur",
    "Vila do Bispo": "/pt-pt/vila-do-bispo",
    "Castro Marim": "/pt-pt/castro-marim",
    "Alcoutim": "/pt-pt/alcoutim",
    "São Brás": "/pt-pt/sao-bras",
  };

  return (
    <>
      <Helmet>
        <title>Áreas de Serviço | Algarve Seasons - Todos os 16 Municípios</title>
        <meta
          name="description"
          content="Explore todos os 16 municípios do Algarve servidos pela Algarve Seasons. Soluções premium AVAC, energia solar e bombas de calor em Faro, Lagos, Albufeira e muito mais."
        />
        <meta name="keywords" content="Áreas de serviço Algarve, municípios, AVAC Algarve, energia solar Algarve, bombas de calor" />
      </Helmet>
      <LayoutPT>
        <div className="min-h-screen bg-white">
          {/* Hero Section */}
          <section className="py-16 md:py-24 bg-gradient-to-r from-slate-50 to-blue-50 border-b border-slate-200">
            <div className="container max-w-6xl">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-2 text-sm text-primary font-semibold">
                  <MapPin className="w-4 h-4" />
                  Cobertura Completa
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
                  Servindo Todos os 16 Municípios do Algarve
                </h1>
                <p className="text-lg text-slate-700 max-w-2xl">
                  A Algarve Seasons fornece soluções premium AVAC, energia solar e bombas de calor em toda a região do Algarve. 
                  Encontre o seu município abaixo e descubra serviços personalizados para a sua área.
                </p>
              </div>
            </div>
          </section>

          {/* Dynamic Highlights Section */}
          {selectedHighlights && (
            <section className="py-12 md:py-16 bg-gradient-to-r from-primary/5 to-primary/10 border-b border-primary/20">
              <div className="container max-w-6xl">
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">Destaques de Serviço para {selectedMunicipality}</h2>
                    <p className="text-slate-600">Soluções personalizadas para as características únicas da sua área</p>
                  </div>
                  <button
                    onClick={() => setSelectedMunicipality(null)}
                    className="text-primary hover:text-primary/80 font-semibold"
                  >
                    Limpar
                  </button>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  {selectedHighlights.map((highlight: any, idx: number) => (
                    <ServiceHighlightCard key={idx} service={highlight} serviceName={selectedMunicipality || ''} />
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Regions Grid */}
          <section className="py-16 md:py-24">
            <div className="container max-w-6xl">
              <div className="space-y-12">
                {regions.map((region) => (
                  <div key={region.regionKey}>
                    <button
                      onClick={() => setExpandedRegion(expandedRegion === region.regionKey ? null : region.regionKey)}
                      className="w-full flex items-center justify-between p-6 bg-gradient-to-r rounded-lg hover:shadow-md transition-shadow"
                      style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}
                    >
                      <div className="flex items-center gap-4">
                        <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                        <div className="text-left">
                          <h3 className="text-2xl font-bold text-slate-900">{region.name}</h3>
                          <p className="text-sm text-slate-600">{region.municipalities.length} municípios</p>
                        </div>
                      </div>
                      <ChevronRight
                        className={`w-6 h-6 text-slate-600 transition-transform ${
                          expandedRegion === region.regionKey ? "rotate-90" : ""
                        }`}
                      />
                    </button>

                    {expandedRegion === region.regionKey && (
                      <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {region.municipalities.map((municipality: any) => {
                          const pageUrl = municipalityPageMap[municipality] || "#";
                          return (
                            <Link key={municipality} href={pageUrl}>
                              <button
                                onClick={() => setSelectedMunicipality(municipality)}
                                className="w-full p-4 bg-white border-2 border-slate-200 rounded-lg hover:border-primary hover:shadow-md transition-all text-left group"
                              >
                                <div className="flex items-center justify-between">
                                  <span className="font-semibold text-slate-900 group-hover:text-primary transition-colors">
                                    {municipality}
                                  </span>
                                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-primary transition-colors" />
                                </div>
                              </button>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Quick Stats */}
          <section className="py-16 md:py-24 bg-slate-50">
            <div className="container max-w-6xl">
              <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Porque Escolher Algarve Seasons?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-lg border border-slate-200">
                  <Sun className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Cobertura Regional Completa</h3>
                  <p className="text-slate-600">
                    Servimos todos os 16 municípios do Algarve com a mesma qualidade e profissionalismo.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg border border-slate-200">
                  <Zap className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Resposta Rápida</h3>
                  <p className="text-slate-600">
                    Reparação de emergência dentro de 24 horas nas principais cidades do Algarve.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg border border-slate-200">
                  <Thermometer className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Expertise Local</h3>
                  <p className="text-slate-600">
                    Compreensão profunda do clima único do Algarve e necessidades das propriedades.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 md:py-24 bg-primary text-white text-center">
            <div className="container max-w-4xl">
              <h2 className="text-4xl font-bold mb-6">Pronto para Começar?</h2>
              <p className="text-xl mb-8 opacity-90">
                Contacte-nos para um orçamento gratuito na sua área.
              </p>
              <a href="tel:+351910675168" className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                Contacte-nos Agora
              </a>
            </div>
          </section>
        </div>
      </LayoutPT>
    </>
  );
}
