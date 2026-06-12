import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Thanks from "./pages/Thanks";
import Pricing from "./pages/Pricing";
import FAQPage from "./pages/FAQPage";
import PrivateDriverHowToHire from "./pages/info/PrivateDriverHowToHire";
import CarHireWithDriverGuide from "./pages/info/CarHireWithDriverGuide";
import ChauffeurGuideDriverVsGuide from "./pages/info/ChauffeurGuideDriverVsGuide";
import PrivateDriverGuideCategory from "./pages/info/PrivateDriverGuideCategory";
import CostBookingGuideCategory from "./pages/info/CostBookingGuideCategory";
import FamilyGroupTravelCategory from "./pages/info/FamilyGroupTravelCategory";
import ItinerariosCategory from "./pages/info/ItinerariosCategory";
import DriverHireCostsChecklist from "./pages/info/DriverHireCostsChecklist";
import VanHireFamiliesGroups from "./pages/info/VanHireFamiliesGroups";
import Itinerary4N5D from "./pages/info/Itinerary4N5D";
import Itinerary5N6D from "./pages/info/Itinerary5N6D";
import Itinerary6N7D from "./pages/info/Itinerary6N7D";
import ItineraryTriangle from "./pages/info/ItineraryTriangle";
import Itinerary10Days from "./pages/info/Itinerary10Days";
import BestTimeToVisit from "./pages/info/BestTimeToVisit";
import TravelTipsSafetyCategory from "./pages/info/TravelTipsSafetyCategory";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/gracias"} component={Thanks} />
      <Route path={"/price"} component={Pricing} />
      <Route path={"/faq"} component={FAQPage} />
      {/* Information category pages */}
      <Route path={"/information/guia-conductor-privado"} component={PrivateDriverGuideCategory} />
      <Route path={"/information/guia-costes-reserva"} component={CostBookingGuideCategory} />
      <Route path={"/information/viajes-familia-grupos"} component={FamilyGroupTravelCategory} />
      <Route path={"/information/itinerarios"} component={ItinerariosCategory} />
      {/* Information articles - Private Driver Guide */}
      <Route path={"/information/guia-conductor-privado/como-contratar-conductor-privado-sri-lanka"} component={PrivateDriverHowToHire} />
      <Route path={"/information/guia-conductor-privado/alquiler-coche-conductor-sri-lanka-guia-completa"} component={CarHireWithDriverGuide} />
      <Route path={"/information/guia-conductor-privado/chofer-guia-sri-lanka-conductor-vs-guia-turistico"} component={ChauffeurGuideDriverVsGuide} />
      {/* Information articles - Cost & Booking Guide */}
      <Route path={"/information/guia-costes-reserva/contratar-conductor-sri-lanka-costes-seguridad-checklist"} component={DriverHireCostsChecklist} />
      {/* Information articles - Family & Group Travel */}
      <Route path={"/information/viajes-familia-grupos/alquiler-furgoneta-conductor-sri-lanka-familias-grupos"} component={VanHireFamiliesGroups} />
      {/* Information articles - Itinerarios */}
      <Route path={"/information/itinerarios/itinerario-sri-lanka-4-noches-5-dias"} component={Itinerary4N5D} />
      <Route path={"/information/itinerarios/itinerario-sri-lanka-5-noches-6-dias"} component={Itinerary5N6D} />
      <Route path={"/information/itinerarios/itinerario-sri-lanka-6-noches-7-dias"} component={Itinerary6N7D} />
      <Route path={"/information/itinerarios/ruta-triangulo-cultural-sri-lanka"} component={ItineraryTriangle} />
      <Route path={"/information/itinerarios/itinerario-sri-lanka-10-dias-2-semanas"} component={Itinerary10Days} />
      {/* Information category - Travel Tips & Safety */}
      <Route path={"/information/consejos-viaje-seguridad"} component={TravelTipsSafetyCategory} />
      {/* Information articles - Travel Tips & Safety */}
      <Route path={"/information/consejos-viaje-seguridad/mejor-epoca-para-visitar-sri-lanka"} component={BestTimeToVisit} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
