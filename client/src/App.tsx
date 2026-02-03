import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Suspense, lazy } from "react";
import { Loader2 } from "lucide-react";

// Lazy load pages for code splitting (improves initial load time)
const NotFound = lazy(() => import("@/pages/NotFound"));
const Home = lazy(() => import("@/pages/Home"));
const AirConditioning = lazy(() => import("@/pages/services/AirConditioning"));
const SolarEnergy = lazy(() => import("@/pages/services/SolarEnergy"));
const HeatPumps = lazy(() => import("@/pages/services/HeatPumps"));
const TeslaPowerwall = lazy(() => import("@/pages/services/TeslaPowerwall"));
const Maintenance = lazy(() => import("@/pages/services/Maintenance"));
const Contact = lazy(() => import("@/pages/Contact"));
const About = lazy(() => import("@/pages/About"));
const ServiceAreas = lazy(() => import("@/pages/ServiceAreas"));
const FAQ = lazy(() => import("@/pages/FAQ"));
const QuoteConfirmation = lazy(() => import("@/pages/QuoteConfirmation"));
const AllInOneSolutions = lazy(() => import("@/pages/services/AllInOneSolutions"));
const Testimonials = lazy(() => import("@/pages/Testimonials"));
const ResourcesGuides = lazy(() => import("@/pages/ResourcesGuides"));
const Careers = lazy(() => import("@/pages/Careers"));
const PrivacyTerms = lazy(() => import("@/pages/PrivacyTerms"));

// Portuguese Pages
const HomePT = lazy(() => import("@/pages/pt/HomePT"));
const AirConditioningPT = lazy(() => import("@/pages/pt/services/AirConditioningPT"));
const SolarEnergyPT = lazy(() => import("@/pages/pt/services/SolarEnergyPT"));
const HeatPumpsPT = lazy(() => import("@/pages/pt/services/HeatPumpsPT"));
const TeslaPowerwallPT = lazy(() => import("@/pages/pt/services/TeslaPowerwallPT"));
const SobrePT = lazy(() => import("@/pages/pt/SobrePT"));
const FAQPT = lazy(() => import("@/pages/pt/FAQPT"));
const DepoimentosPT = lazy(() => import("@/pages/pt/DepoimentosPT"));
const RecursosPT = lazy(() => import("@/pages/pt/RecursosPT"));
const CarreirasPT = lazy(() => import("@/pages/pt/CarreirasPT"));
const PrivacidadePT = lazy(() => import("@/pages/pt/PrivacidadePT"));
const SolucoesPT = lazy(() => import("@/pages/pt/SolucoesPT"));
const AreasServicoPT = lazy(() => import("@/pages/pt/AreasServicoPT"));

// Geo-targeted Landing Pages
const FaroLanding = lazy(() => import("@/pages/geo/FaroLanding"));
const AlbufeiraLanding = lazy(() => import("@/pages/geo/AlbufeiraLanding"));
const LagosLanding = lazy(() => import("@/pages/geo/LagosLanding"));
const PortimaoLanding = lazy(() => import("@/pages/geo/PortimaoLanding"));
const SilvesPT = lazy(() => import("@/pages/geo/SilvesPT"));
const LouleLanding = lazy(() => import("@/pages/geo/LouleLanding"));
const TaviraPT = lazy(() => import("@/pages/geo/TaviraPT"));
const OlhaoLanding = lazy(() => import("@/pages/geo/OlhaoLanding"));
const SaoBrasLanding = lazy(() => import("@/pages/geo/SaoBrasLanding"));
const LagoadeLanding = lazy(() => import("@/pages/geo/LagoadeLanding"));
const CarriacaoLanding = lazy(() => import("@/pages/geo/CarriacaoLanding"));
const MonchiqueLanding = lazy(() => import("@/pages/geo/MonchiqueLanding"));
const AljeZurLanding = lazy(() => import("@/pages/geo/AljeZurLanding"));
const VilaDoBispoLanding = lazy(() => import("@/pages/geo/VilaDoBispoLanding"));
const CastroMarimLanding = lazy(() => import("@/pages/geo/CastroMarimLanding"));
const AlcoutimLanding = lazy(() => import("@/pages/geo/AlcoutimLanding"));
const SilvestLanding = lazy(() => import("@/pages/geo/SilvestLanding"));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-50">
    <Loader2 className="w-10 h-10 text-primary animate-spin" />
  </div>
);


function Router() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/services/air-conditioning"} component={AirConditioning} />
        <Route path={"/services/solar-energy"} component={SolarEnergy} />
        <Route path={"/services/heat-pumps"} component={HeatPumps} />
        <Route path={"/services/tesla-powerwall"} component={TeslaPowerwall} />
        <Route path={"/services/maintenance"} component={Maintenance} />
        <Route path="/contact" component={Contact} />
        <Route path="/service-areas" component={ServiceAreas} />
        <Route path="/about" component={About} />
        <Route path="/faq" component={FAQ} />
        <Route path="/quote-confirmation" component={QuoteConfirmation} />
        <Route path="/services/all-in-one" component={AllInOneSolutions} />
        <Route path="/testimonials" component={Testimonials} />
        <Route path="/resources" component={ResourcesGuides} />
        <Route path="/careers" component={Careers} />
        <Route path="/privacy-terms" component={PrivacyTerms} />
        
        {/* Portuguese Routes */}
        <Route path="/pt-pt" component={HomePT} />
        <Route path="/pt-pt/servicos/ar-condicionado" component={AirConditioningPT} />
        <Route path="/pt-pt/servicos/energia-solar" component={SolarEnergyPT} />
        <Route path="/pt-pt/servicos/bombas-calor" component={HeatPumpsPT} />
        <Route path="/pt-pt/servicos/tesla-powerwall" component={TeslaPowerwallPT} />
        <Route path="/pt-pt/sobre" component={SobrePT} />
        <Route path="/pt-pt/faq" component={FAQPT} />
        <Route path="/pt-pt/depoimentos" component={DepoimentosPT} />
        <Route path="/pt-pt/recursos" component={RecursosPT} />
        <Route path="/pt-pt/carreiras" component={CarreirasPT} />
        <Route path="/pt-pt/privacidade" component={PrivacidadePT} />
        <Route path="/pt-pt/servicos/solucoes-integradas" component={SolucoesPT} />
        <Route path="/pt-pt/areas-servico" component={AreasServicoPT} />
        
        {/* Geo-targeted Landing Pages */}
        <Route path="/faro" component={FaroLanding} />
        <Route path="/albufeira" component={AlbufeiraLanding} />
        <Route path="/lagos" component={LagosLanding} />
        <Route path="/portimao" component={PortimaoLanding} />

        <Route path="/loule" component={LouleLanding} />
        <Route path="/tavira" component={TaviraPT} />
        <Route path="/olhao" component={OlhaoLanding} />
        <Route path="/sao-bras" component={SaoBrasLanding} />
        <Route path="/lagoa" component={LagoadeLanding} />
        <Route path="/carriacao" component={CarriacaoLanding} />
        <Route path="/monchique" component={MonchiqueLanding} />
        <Route path="/aljezur" component={AljeZurLanding} />
        <Route path="/vila-do-bispo" component={VilaDoBispoLanding} />
        <Route path="/castro-marim" component={CastroMarimLanding} />
        <Route path="/alcoutim" component={AlcoutimLanding} />
        <Route path="/silves" component={SilvestLanding} />
        
        <Route path={"/404"} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
