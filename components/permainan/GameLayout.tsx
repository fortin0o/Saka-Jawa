"use client";

import Link from "next/link";
import { ReactNode, useState, useEffect } from "react";
import DeviceOrientationOverlay from "./DeviceOrientationOverlay";

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
 */
export default function GameLayout({
  title,
  subtitle,
  pendhapa,
  children,
}: GameLayoutProps) {
  
  // Auto-hide header on scroll down
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="min-h-screen bg-[#F9F1E4]">
      <DeviceOrientationOverlay />
      
      {/* Small floating back button for mobile where header is hidden */}
      <div className="fixed top-3 left-3 z-50 lg:hidden">
        <Link
          href="/permainan"
          className="w-8 h-8 flex items-center justify-center bg-white/90 backdrop-blur rounded-full shadow-md text-[#4E0B11] border border-stone-200"
          title="Kembali ke Peta Pendhapa"
        >
          <svg className="w-4 h-4 pr-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
      </div>

      {/* Progress Bar Area - Fixed & Auto-hide */}
      <div 
        className={`w-full bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-md fixed left-0 right-0 z-50 transition-transform duration-300 hidden lg:block ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-6xl mx-auto px-8 xl:px-12">
          {/* Top Navbar Row */}
          <div className="flex items-center justify-between py-4">
            <Link
              href="/permainan"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#4E0B11] hover:text-[#d97706] transition-colors group"
            >
              <span className="w-8 h-8 flex items-center justify-center bg-[#4E0B11]/8 rounded-full group-hover:bg-[#d97706]/10 transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </span>
              Peta Pendhapa
            </Link>

            {/* Brand right */}
            <div className="flex flex-col items-end gap-0.5">
              <span className="text-base font-extrabold text-[#4E0B11] tracking-wider uppercase">
                Saka Jawa
              </span>
              <span className="text-[11px] font-semibold text-[#4A332B]/50 tracking-widest uppercase">
                Petualangan 4 Pendhapa
              </span>
            </div>
          </div>
        </div>
        {/* Bottom accent line */}
        <div className="h-[3px] bg-gradient-to-r from-transparent via-[#4E0B11]/20 to-transparent" />
      </div>

      {/* Spacer for fixed header (approx 85px) */}
      <div className="h-[80px] hidden lg:block" />

      {/* Main Content */}
      <main className="w-full max-w-3xl mx-auto px-4 py-4 sm:px-6 sm:py-6">
        {/* Header Pendhapa */}
        <header className="flex flex-col gap-1 mb-5">
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
        <div className="h-px bg-[#4E0B11]/10 mb-6" />

        {/* Game Content Area */}
        <section className="pb-32">
          {children}
        </section>
      </main>
    </div>
  );
}
