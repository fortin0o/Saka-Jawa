import type { Metadata } from "next";
import BatikHeroSection from "@/components/batik/BatikHeroSection";
import BatikAboutSection from "@/components/batik/BatikAboutSection";
import BatikMotifSection from "@/components/batik/BatikMotifSection";
import { topicPageMetadata } from "@/data/pages";

export const metadata: Metadata = topicPageMetadata.batik;

export default function BatikPage() {
  return (
    <main>
      <BatikHeroSection />
      <BatikAboutSection />
      <BatikMotifSection />
    </main>
  );
}
