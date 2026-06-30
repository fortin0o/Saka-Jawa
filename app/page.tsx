import LandingHeroSection from "@/components/landing/LandingHeroSection";
import LandingNavbar from "@/components/landing/LandingNavbar";
import LandingHeritageSection from "@/components/landing/LandingHeritageSection";
import LandingImportanceSection from "@/components/landing/LandingImportanceSection";
import LandingExploreSection from "@/components/landing/LandingExploreSection";
import LandingQuotesSection from "@/components/landing/LandingQuotesSection";
import LandingChatbotSection from "@/components/landing/LandingChatbotSection";
import LandingCTASection from "@/components/landing/LandingCTASection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <LandingNavbar />
      <LandingHeroSection />
      <LandingHeritageSection />
      <LandingImportanceSection />
      <LandingExploreSection />
      <LandingQuotesSection />
      <LandingChatbotSection />
      <LandingCTASection />
    </main>
  );
}
