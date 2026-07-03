"use client";

import Link from "next/link";
import GameProgress from "./GameProgress";
import { useGame } from "../../context/GameContext";
import { ReactNode } from "react";

interface GameLayoutProps {
  title: string;
  subtitle?: string;
  pendhapa?: string;
  nextHref?: string;
  nextLabel?: string;
  onNext?: () => void;
  children: ReactNode;
  canProceed?: boolean;
}

/**
 * GameLayout — wrapper konsisten untuk tiap halaman mini-game.
 * Menerima:
 *   - title: nama pendhapa (mis. "Pendhapa Batik")
 *   - subtitle: instruksi singkat
 *   - pendhapa: key ("batik"|"wayang"|"gamelan"|"kuliner")
 *   - nextHref: path halaman berikutnya
 *   - nextLabel: label tombol lanjut (default "Lanjut →")
 *   - onNext: callback opsional sebelum navigasi
 *   - children: area konten game
 *   - canProceed: apakah tombol "Lanjut" boleh diklik (default true)
 */
export default function GameLayout({
  title,
  subtitle,
  pendhapa,
  nextHref,
  nextLabel = "Lanjut →",
  onNext,
  children,
  canProceed = true,
}: GameLayoutProps) {
  const { completed } = useGame();

  return (
    <div className="min-h-screen bg-[#F9F1E4] flex flex-col">
      {/* Progress Bar Area */}
      <div className="w-full bg-white border-b border-stone-200 shadow-sm sticky top-0 z-40">
        <div className="max-w-3xl mx-auto px-4 py-3 sm:px-6 sm:py-4">
          <GameProgress completed={completed} />
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-3xl mx-auto px-4 py-8 sm:px-6 sm:py-10 flex flex-col gap-6">
        {/* Header Pendhapa */}
        <header className="flex flex-col gap-1">
          {/* Breadcrumb / tag pendhapa */}
          <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#FFC832] bg-[#4E0B11] rounded-full px-3 py-1 w-fit">
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
            </svg>
            Pendhapa {pendhapa ? pendhapa.charAt(0).toUpperCase() + pendhapa.slice(1) : ""}
          </span>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#4E0B11] leading-tight mt-1">
            {title}
          </h1>

          {subtitle && (
            <p className="text-sm sm:text-base text-[#4A332B] font-medium leading-relaxed mt-1 max-w-xl">
              {subtitle}
            </p>
          )}
        </header>

        {/* Divider */}
        <div className="h-px bg-[#4E0B11]/10" />

        {/* Game Content Area */}
        <section className="flex-1">
          {children}
        </section>

        {/* Divider */}
        <div className="h-px bg-[#4E0B11]/10" />

        {/* Navigation Footer */}
        <footer className="flex items-center justify-between gap-4 pt-2 pb-4">
          {/* Kembali */}
          <Link
            href="/permainan"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#4A332B] hover:text-[#4E0B11] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            <span className="hidden sm:inline">Kembali ke Peta</span>
            <span className="sm:hidden">Peta</span>
          </Link>

          {/* Lanjut */}
          {nextHref && (
            canProceed ? (
              <Link
                href={nextHref}
                onClick={onNext}
                className="inline-flex items-center gap-2 bg-[#4E0B11] text-white text-sm font-bold px-5 sm:px-7 py-2.5 rounded-full shadow-md hover:bg-[#3A0810] hover:-translate-y-0.5 transition-all duration-200 active:translate-y-0"
              >
                <span>{nextLabel}</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ) : (
              <button
                disabled
                className="inline-flex items-center gap-2 bg-stone-300 text-stone-500 text-sm font-bold px-5 sm:px-7 py-2.5 rounded-full cursor-not-allowed"
              >
                <span>{nextLabel}</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )
          )}
        </footer>
      </main>
    </div>
  );
}
