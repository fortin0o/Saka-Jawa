import type { Metadata } from "next";
import { topicPageMetadata } from "@/data/pages";
import KulinerHeroSection from "@/components/kuliner/KulinerHeroSection";
import dynamic from "next/dynamic";
import SharedNavbar from "@/components/shared/SharedNavbar";

const KulinerAboutSection = dynamic(() => import("@/components/kuliner/KulinerAboutSection"));
const KulinerDaerahSection = dynamic(() => import("@/components/kuliner/KulinerDaerahSection"));
const KulinerQuotesSection = dynamic(() => import("@/components/kuliner/KulinerQuotesSection"));
const KulinerCeritaSection = dynamic(() => import("@/components/kuliner/KulinerCeritaSection"));
const KulinerGallerySection = dynamic(() => import("@/components/kuliner/KulinerGallerySection"));
const KulinerInteractiveMapSection = dynamic(() => import("@/components/kuliner/KulinerInteractiveMapSection"));

export const metadata: Metadata = topicPageMetadata.kuliner;

export default function KulinerPage() {
  return (
    <main>
      <SharedNavbar />
      <KulinerHeroSection />
      <KulinerAboutSection />
      <KulinerDaerahSection />
      <KulinerQuotesSection />
      <KulinerCeritaSection />
      <KulinerGallerySection />
      <KulinerInteractiveMapSection />
    </main>
  );
}

