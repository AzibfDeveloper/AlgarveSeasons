import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function LanguageSwitcher({ currentLang }: { currentLang: "en" | "pt" }) {
  const [location, setLocation] = useLocation();

  const switchLanguage = () => {
    // Define the mapping between English and Portuguese routes
    const routeMap: Record<string, string> = {
      // EN -> PT
      "/": "/pt-pt",
      "/services/air-conditioning": "/pt-pt/ar-condicionado",
      "/services/solar-energy": "/pt-pt/energia-solar",
      "/services/heat-pumps": "/pt-pt/bombas-de-calor",
      "/services/tesla-powerwall": "/pt-pt/tesla-powerwall",
      "/contact": "/pt-pt/contacto", // Assuming contact page will be localized
      
      // PT -> EN
      "/pt-pt": "/",
      "/pt-pt/ar-condicionado": "/services/air-conditioning",
      "/pt-pt/energia-solar": "/services/solar-energy",
      "/pt-pt/bombas-de-calor": "/services/heat-pumps",
      "/pt-pt/tesla-powerwall": "/services/tesla-powerwall",
      "/pt-pt/contacto": "/contact",
    };

    // Find the corresponding route
    // If exact match not found, default to homepage of target language
    let targetRoute = routeMap[location];
    
    if (!targetRoute) {
      targetRoute = currentLang === "en" ? "/pt-pt" : "/";
    }

    setLocation(targetRoute);
  };

  return (
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={switchLanguage}
      className="flex items-center gap-2 px-2 hover:bg-slate-100"
      title={currentLang === "en" ? "Mudar para Português" : "Switch to English"}
    >
      {currentLang === "en" ? (
        <>
          <span className="text-xl">🇵🇹</span>
          <span className="font-medium text-slate-600">PT</span>
        </>
      ) : (
        <>
          <span className="text-xl">🇬🇧</span>
          <span className="font-medium text-slate-600">EN</span>
        </>
      )}
    </Button>
  );
}
