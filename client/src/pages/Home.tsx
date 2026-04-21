import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ContactSection from "@/components/ContactSection";
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
      <WhySection />
      <ConcernsSection />
      <PlansSection />
      <ItinerariesSection />
      <DestinationsSection />
      <VehiclesSection />
      <ReviewsSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
