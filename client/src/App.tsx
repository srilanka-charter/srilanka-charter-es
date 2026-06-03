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

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/gracias"} component={Thanks} />
      <Route path={"/price"} component={Pricing} />
      <Route path={"/faq"} component={FAQPage} />
      {/* Information articles - Private Driver Guide */}
      <Route path={"/information/guia-conductor-privado/como-contratar-conductor-privado-sri-lanka"} component={PrivateDriverHowToHire} />
      <Route path={"/information/guia-conductor-privado/alquiler-coche-conductor-sri-lanka-guia-completa"} component={CarHireWithDriverGuide} />
      <Route path={"/information/guia-conductor-privado/chofer-guia-sri-lanka-conductor-vs-guia-turistico"} component={ChauffeurGuideDriverVsGuide} />
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
