import { GameProvider } from "../../context/GameContext";

export const metadata = {
  title: "Petualangan 4 Pendhapa | Saka Jawa",
  description:
    "Game edukasi budaya Jawa — jelajahi 4 Pendhapa: Batik, Wayang, Gamelan, dan Kuliner.",
};

export default function PermainanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GameProvider>

      {/* Konten halaman game */}
      {children}
    </GameProvider>
  );
}
