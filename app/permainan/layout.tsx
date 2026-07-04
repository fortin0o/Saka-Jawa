import Image from "next/image";
import Link from "next/link";
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
      {/* Header khusus game — menggantikan Navbar utama */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          {/* Logo + nama game */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group shrink-0"
            aria-label="Kembali ke beranda Saka Jawa"
          >
            <div className="relative w-7 h-8 sm:w-8 sm:h-9 shrink-0">
              <Image
                src="/Assets/Logo Utama.svg"
                alt="Saka Jawa"
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </div>
            <div className="leading-tight">
              <p className="text-[10px] sm:text-[11px] font-bold text-[#4E0B11] uppercase tracking-widest">
                Saka Jawa
              </p>
              <p className="text-[9px] sm:text-[10px] text-[#4A332B] font-medium hidden xs:block">
                Petualangan 4 Pendhapa
              </p>
            </div>
          </Link>

          {/* Tengah: label game — hanya desktop */}
          <span className="hidden md:block text-sm font-bold text-[#4E0B11] tracking-wide">
            🎮 Petualangan 4 Pendhapa
          </span>

          {/* Kanan: tombol kembaali ke beranda */}
          <Link
            href="/"
            className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#4A332B] border border-[#4E0B11]/30 rounded-full px-3 sm:px-4 py-1.5 hover:bg-[#4E0B11] hover:text-white hover:border-[#4E0B11] transition-all duration-200 shrink-0"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span>Beranda</span>
          </Link>
        </div>
      </div>

      {/* Spacer untuk fixed header */}
      <div className="h-14" />

      {/* Konten halaman game */}
      {children}
    </GameProvider>
  );
}
