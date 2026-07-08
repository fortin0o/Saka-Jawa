import type { Metadata } from "next";
import LandingNavbar from "@/components/landing/LandingNavbar";
import TentangKamiHeroSection from "@/components/tentang-kami/TentangKamiHeroSection";
import TentangKamiCeritaSection from "@/components/tentang-kami/TentangKamiCeritaSection";
import TentangKamiVisiMisiSection from "@/components/tentang-kami/TentangKamiVisiMisiSection";
import TentangKamiNilaiSection from "@/components/tentang-kami/TentangKamiNilaiSection";
import TentangKamiSDGsSection from "@/components/tentang-kami/TentangKamiSDGsSection";
import TentangKamiTimSection from "@/components/tentang-kami/TentangKamiTimSection";
import TentangKamiCTASection from "@/components/tentang-kami/TentangKamiCTASection";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Kenali Tim Golek Howo dan kisah di balik Saka Jawa — platform pelestarian budaya Jawa yang interaktif, edukatif, dan kolaboratif untuk generasi muda.",
  openGraph: {
    title: "Tentang Kami | Saka Jawa",
    description:
      "Kenali Tim Golek Howo dan kisah di balik Saka Jawa — platform pelestarian budaya Jawa.",
  },
};

export default function TentangKamiPage() {
  return (
    <main>
      <LandingNavbar />
      <TentangKamiHeroSection />
      <TentangKamiCeritaSection />
      <TentangKamiVisiMisiSection />
      <TentangKamiNilaiSection />
      <TentangKamiSDGsSection />
      <TentangKamiTimSection />
      <TentangKamiCTASection />
    </main>
  );
}
