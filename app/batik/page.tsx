import type { Metadata } from "next";
import BatikHeroSection from "@/components/batik/BatikHeroSection";
import dynamic from "next/dynamic";
import { topicPageMetadata } from "@/data/pages";
import SharedNavbar from "@/components/shared/SharedNavbar";

const BatikAboutSection = dynamic(() => import("@/components/batik/BatikAboutSection"));
const BatikMotifSection = dynamic(() => import("@/components/batik/BatikMotifSection"));
const BatikQuotesSection = dynamic(() => import("@/components/batik/BatikQuotesSection"));
const BatikCeritaSection = dynamic(() => import("@/components/batik/BatikCeritaSection"));
const BatikGallerySection = dynamic(() => import("@/components/batik/BatikGallerySection"));
const BatikInteractiveMapSection = dynamic(() => import("@/components/batik/BatikInteractiveMapSection"));

export const metadata: Metadata = topicPageMetadata.batik;

export default function BatikPage() {
  return (
    <main>
      <SharedNavbar />
      <BatikHeroSection />
      <BatikAboutSection />
      <BatikMotifSection />
      <BatikQuotesSection />
      <BatikCeritaSection />
      <BatikGallerySection />
      <BatikInteractiveMapSection />
    </main>
  );
}
