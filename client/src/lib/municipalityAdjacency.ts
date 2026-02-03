/**
 * Municipality Adjacency Map for Algarve
 * 
 * Defines neighboring municipalities for each Algarve municipality.
 * Used to display "Nearby Service Areas" on geo-targeted pages.
 * 
 * Geographic layout (West to East):
 * - Western: Aljezur, Vila do Bispo, Monchique
 * - Central-West: Lagos, Portimão, Silves
 * - Central: Lagoa, Loulé, Carriacão
 * - Central-East: Olhão, Tavira, São Brás
 * - Eastern: Faro, Alcoutim, Castro Marim
 */

export interface Municipality {
  name: string;
  slug: string;
  region: 'western' | 'central-west' | 'central' | 'central-east' | 'eastern';
}

export const municipalities: Record<string, Municipality> = {
  faro: { name: 'Faro', slug: 'faro', region: 'eastern' },
  albufeira: { name: 'Albufeira', slug: 'albufeira', region: 'central-west' },
  lagos: { name: 'Lagos', slug: 'lagos', region: 'central-west' },
  portimao: { name: 'Portimão', slug: 'portimao', region: 'central-west' },
  silves: { name: 'Silves', slug: 'silves', region: 'central-west' },
  loule: { name: 'Loulé', slug: 'loule', region: 'central' },
  tavira: { name: 'Tavira', slug: 'tavira', region: 'central-east' },
  olhao: { name: 'Olhão', slug: 'olhao', region: 'central-east' },
  'sao-bras': { name: 'São Brás', slug: 'sao-bras', region: 'central-east' },
  lagoa: { name: 'Lagoa', slug: 'lagoa', region: 'central' },
  carriacao: { name: 'Carriacão', slug: 'carriacao', region: 'central' },
  monchique: { name: 'Monchique', slug: 'monchique', region: 'western' },
  aljezur: { name: 'Aljezur', slug: 'aljezur', region: 'western' },
  'vila-do-bispo': { name: 'Vila do Bispo', slug: 'vila-do-bispo', region: 'western' },
  'castro-marim': { name: 'Castro Marim', slug: 'castro-marim', region: 'eastern' },
  alcoutim: { name: 'Alcoutim', slug: 'alcoutim', region: 'eastern' },
};

/**
 * Adjacency map defining neighboring municipalities
 * Each municipality lists its adjacent neighbors
 */
export const adjacencyMap: Record<string, string[]> = {
  faro: ['olhao', 'sao-bras', 'loule', 'lagoa'],
  albufeira: ['lagoa', 'loule', 'silves'],
  lagos: ['portimao', 'silves', 'lagoa'],
  portimao: ['lagos', 'silves', 'lagoa', 'monchique'],
  silves: ['portimao', 'lagos', 'lagoa', 'loule', 'carriacao'],
  loule: ['faro', 'olhao', 'sao-bras', 'albufeira', 'silves', 'lagoa', 'carriacao'],
  tavira: ['olhao', 'sao-bras', 'alcoutim', 'castro-marim'],
  olhao: ['faro', 'sao-bras', 'tavira', 'loule'],
  'sao-bras': ['faro', 'olhao', 'loule', 'tavira', 'alcoutim'],
  lagoa: ['albufeira', 'lagos', 'portimao', 'silves', 'loule', 'carriacao'],
  carriacao: ['silves', 'loule', 'lagoa', 'monchique'],
  monchique: ['portimao', 'carriacao', 'aljezur', 'vila-do-bispo'],
  aljezur: ['vila-do-bispo', 'monchique'],
  'vila-do-bispo': ['aljezur', 'monchique'],
  'castro-marim': ['tavira', 'alcoutim'],
  alcoutim: ['tavira', 'sao-bras', 'castro-marim'],
};

/**
 * Get nearby municipalities for a given municipality
 * @param municipalitySlug - The slug of the municipality
 * @param limit - Maximum number of nearby municipalities to return
 * @returns Array of nearby municipality objects
 */
export function getNearbyMunicipalities(municipalitySlug: string, limit: number = 4) {
  const neighbors = adjacencyMap[municipalitySlug] || [];
  return neighbors
    .slice(0, limit)
    .map((slug) => municipalities[slug])
    .filter(Boolean);
}

/**
 * Get all municipalities sorted by region
 * @returns Array of all municipalities
 */
export function getAllMunicipalities() {
  return Object.values(municipalities).sort((a, b) => a.name.localeCompare(b.name));
}

/**
 * Get municipalities by region
 * @param region - The region to filter by
 * @returns Array of municipalities in the specified region
 */
export function getMunicipalitiesByRegion(
  region: 'western' | 'central-west' | 'central' | 'central-east' | 'eastern'
) {
  return Object.values(municipalities)
    .filter((m) => m.region === region)
    .sort((a, b) => a.name.localeCompare(b.name));
}
