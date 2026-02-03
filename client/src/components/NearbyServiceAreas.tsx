import { Link } from 'wouter';
import { MapPin, ChevronRight } from 'lucide-react';
import { getNearbyMunicipalities } from '@/lib/municipalityAdjacency';

/**
 * NearbyServiceAreas Component
 * 
 * Displays nearby municipalities on geo-targeted pages to encourage
 * exploration and reduce bounce rates. Shows adjacent service areas
 * with links to their dedicated landing pages.
 * 
 * Design Philosophy:
 * - Subtle call-to-action that doesn't distract from main content
 * - Geographic context helps users understand service coverage
 * - Easy navigation to related pages improves SEO and user engagement
 */

interface NearbyServiceAreasProps {
  currentMunicipality: string;
  municipalityName: string;
  limit?: number;
}

export default function NearbyServiceAreas({
  currentMunicipality,
  municipalityName,
  limit = 4,
}: NearbyServiceAreasProps) {
  const nearbyMunicipalities = getNearbyMunicipalities(currentMunicipality, limit);

  if (nearbyMunicipalities.length === 0) {
    return null;
  }

  return (
    <section className="py-12 bg-slate-50 border-t border-slate-200">
      <div className="container">
        <div className="flex items-center gap-2 mb-6">
          <MapPin className="w-5 h-5 text-primary" />
          <h2 className="text-2xl font-bold text-slate-900">
            Service Areas Near {municipalityName}
          </h2>
        </div>

        <p className="text-slate-600 mb-8 max-w-2xl">
          We also serve nearby municipalities with the same premium HVAC, solar, and heat pump solutions.
          Explore our services in adjacent areas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {nearbyMunicipalities.map((municipality) => (
            <Link key={municipality.slug} href={`/${municipality.slug}`}>
              <div className="group p-4 bg-white rounded-lg border border-slate-200 hover:border-primary hover:shadow-md transition-all cursor-pointer">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-slate-900 group-hover:text-primary transition-colors">
                      {municipality.name}
                    </h3>
                    <p className="text-sm text-slate-500 mt-1">
                      HVAC & Solar Solutions
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/service-areas">
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors">
              View All Service Areas
              <ChevronRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
