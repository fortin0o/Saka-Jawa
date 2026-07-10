import type { Metadata } from "next";
import WayangHeroSection from "@/components/wayang/WayangHeroSection";
import dynamic from "next/dynamic";
import { topicPageMetadata } from "@/data/pages";
import SharedNavbar from "@/components/shared/SharedNavbar";

const WayangAboutSection = dynamic(() => import("@/components/wayang/WayangAboutSection"));
const WayangRagamSection = dynamic(() => import("@/components/wayang/WayangRagamSection"));
const WayangQuotesSection = dynamic(() => import("@/components/wayang/WayangQuotesSection"));
const WayangCeritaSection = dynamic(() => import("@/components/wayang/WayangCeritaSection"));
const WayangGallerySection = dynamic(() => import("@/components/wayang/WayangGallerySection"));
const WayangInteractiveMapSection = dynamic(() => import("@/components/wayang/WayangInteractiveMapSection"));

export const metadata: Metadata = topicPageMetadata.wayang;

export default function WayangPage() {
  return (
    <main>
      <SharedNavbar />
      <WayangHeroSection />
      <WayangAboutSection />
      <WayangRagamSection />
      <WayangQuotesSection />
      <WayangCeritaSection />
      <WayangGallerySection />
      <WayangInteractiveMapSection />
    </main>
  );
}
