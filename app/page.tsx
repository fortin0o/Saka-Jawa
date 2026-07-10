import LandingNavbar from "@/components/landing/LandingNavbar";
import LandingHeroSection from "@/components/landing/LandingHeroSection";
import LandingHeritageSection from "@/components/landing/LandingHeritageSection";
import dynamic from "next/dynamic";

const LandingImportanceSection = dynamic(() => import("@/components/landing/LandingImportanceSection"));
const LandingExploreSection = dynamic(() => import("@/components/landing/LandingExploreSection"));
const LandingQuotesSection = dynamic(() => import("@/components/landing/LandingQuotesSection"));
const LandingChatbotSection = dynamic(() => import("@/components/landing/LandingChatbotSection"));
const LandingCTASection = dynamic(() => import("@/components/landing/LandingCTASection"));
const LandingFloatingChatbot = dynamic(() => import("@/components/landing/LandingFloatingChatbot"));

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
      <LandingFloatingChatbot />
    </main>
  );
}
