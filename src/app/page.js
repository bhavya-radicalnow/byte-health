import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import OurStorySection from "@/components/ourStorySection";
import MissionSection from "@/components/missionSection";
import ServicesSection from "@/components/servicesSection";
import WallOfImpactSection from "@/components/wallOfImpact";
import ClinicLocationsSection from "@/components/clinicLocationsSection";
import StoriesOfHopeSection from "@/components/stories";
import PlansSection from "@/components/plans";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <OurStorySection />
      <MissionSection />
      <ServicesSection />
      <WallOfImpactSection />
      <ClinicLocationsSection />
      <StoriesOfHopeSection />
      <PlansSection />
      <Footer />
    </>
  );
}
