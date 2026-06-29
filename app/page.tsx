import LandingHeroSection from "@/components/landing/LandingHeroSection";
import LandingNavbar from "@/components/landing/LandingNavbar";
import LandingHeritageSection from "@/components/landing/LandingHeritageSection";
import LandingImportanceSection from "@/components/landing/LandingImportanceSection";
import LandingExploreSection from "@/components/landing/LandingExploreSection";
import LandingMegaMendungSection from "@/components/landing/LandingMegaMendungSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <LandingNavbar />
      <LandingHeroSection />
      <LandingHeritageSection />
      <LandingImportanceSection />
      <LandingExploreSection />
      <LandingMegaMendungSection />
      <section id="kekayaan-alam" className="min-h-[85svh] bg-white" />
      <section id="permainan" className="sr-only" aria-label="Permainan" />
      <section id="tentang-kami" className="sr-only" aria-label="Tentang Kami" />
      <section id="abdi-dalem" className="sr-only" aria-label="Abdi Dalem" />
    </main>
  );
}
