import { GameProvider } from "../../context/GameContext";
import { ReactNode } from "react";

export const metadata = {
  title: "Petualangan 4 Pendhapa | Saka Jawa",
  description:
    "Game edukasi budaya Jawa — jelajahi 4 Pendhapa: Batik, Wayang, Gamelan, dan Kuliner.",
};

export default function PermainanLayout({ children }: { children: ReactNode }) {
  return (
    <GameProvider>
      {/* Game content */}
      {children}
    </GameProvider>
  );
}
