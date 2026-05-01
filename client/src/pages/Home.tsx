import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HeroContactSection from "@/components/HeroContactSection";
import ContactSection from "@/components/ContactSection";
import PricingPreview from "@/components/PricingPreview";
import {
  WhySection,
  ConcernsSection,
  PlansSection,
  ItinerariesSection,
  DestinationsSection,
  VehiclesSection,
  ReviewsSection,
  FaqSection,
  Footer,
} from "@/components/Sections";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0e0e0e]">
      <Navbar />
      <HeroSection />
      <HeroContactSection />
      <WhySection />
      <ConcernsSection />
      <PlansSection />
      <ItinerariesSection />
      <DestinationsSection />
      <PricingPreview />
      <VehiclesSection />
      <ReviewsSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
