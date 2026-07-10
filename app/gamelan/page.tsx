import type { Metadata } from "next";
import { topicPageMetadata } from "@/data/pages";
import GamelanHeroSection from "@/components/gamelan/GamelanHeroSection";
import dynamic from "next/dynamic";
import SharedNavbar from "@/components/shared/SharedNavbar";

const GamelanAboutSection = dynamic(() => import("@/components/gamelan/GamelanAboutSection"));
const GamelanInstrumenSection = dynamic(() => import("@/components/gamelan/GamelanInstrumenSection"));
const GamelanQuotesSection = dynamic(() => import("@/components/gamelan/GamelanQuotesSection"));
const GamelanCeritaSection = dynamic(() => import("@/components/gamelan/GamelanCeritaSection"));
const GamelanGallerySection = dynamic(() => import("@/components/gamelan/GamelanGallerySection"));
const GamelanInteractiveMapSection = dynamic(() => import("@/components/gamelan/GamelanInteractiveMapSection"));

export const metadata: Metadata = topicPageMetadata.gamelan;

export default function GamelanPage() {
  return (
    <main>
      <SharedNavbar />
      <GamelanHeroSection />
      <GamelanAboutSection />
      <GamelanInstrumenSection />
      <GamelanQuotesSection />
      <GamelanCeritaSection />
      <GamelanGallerySection />
      <GamelanInteractiveMapSection />
    </main>
  );
}
