import type { Metadata } from "next";
import LandingNavbar from "@/components/landing/LandingNavbar";
import TentangKamiHeroSection from "@/components/tentang-kami/TentangKamiHeroSection";
import dynamic from "next/dynamic";

const TentangKamiCeritaSection = dynamic(() => import("@/components/tentang-kami/TentangKamiCeritaSection"));
const TentangKamiVisiMisiSection = dynamic(() => import("@/components/tentang-kami/TentangKamiVisiMisiSection"));
const TentangKamiNilaiSection = dynamic(() => import("@/components/tentang-kami/TentangKamiNilaiSection"));
const TentangKamiSDGsSection = dynamic(() => import("@/components/tentang-kami/TentangKamiSDGsSection"));
const TentangKamiTimSection = dynamic(() => import("@/components/tentang-kami/TentangKamiTimSection"));
const TentangKamiCTASection = dynamic(() => import("@/components/tentang-kami/TentangKamiCTASection"));

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
