import LandingHeroSection from "@/components/landing/LandingHeroSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <LandingHeroSection />
      <section id="kekayaan-alam" className="min-h-[85svh] bg-white" />
      <section id="permainan" className="sr-only" aria-label="Permainan" />
      <section id="tentang-kami" className="sr-only" aria-label="Tentang Kami" />
      <section id="abdi-dalem" className="sr-only" aria-label="Abdi Dalem" />
    </main>
  );
}
