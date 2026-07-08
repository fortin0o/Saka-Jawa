"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navLeft = [
  { label: "Batik", href: "/batik" },
  { label: "Gamelan", href: "/gamelan" },
];

const navRight = [
  { label: "Kuliner", href: "/kuliner" },
  { label: "Wayang", href: "/wayang" },
];

export default function SharedNavbar({ className }: { className?: string }) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // scroll down and past 50px
        setIsVisible(false);
      } else {
        // scroll up or top
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`fixed left-1/2 top-4 sm:top-6 z-[100] w-[calc(100%-2.5rem)] sm:w-fit -translate-x-1/2 transition-all duration-500 pointer-events-none ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-[150%] opacity-0"
        }`}
      >
        {/* Desktop */}
        <nav
          className={`hidden md:grid grid-cols-[1fr_auto_1fr] items-center rounded-full backdrop-blur-md px-10 py-2 shadow-lg text-sm sm:text-[15px] font-medium pointer-events-auto ${className || "bg-white/50 border border-white/50 text-black"}`}
          aria-label="Navigasi utama shared desktop"
        >
          <div className="flex items-center justify-end gap-6 sm:gap-8 pr-8 sm:pr-16">
            {navLeft.map((item) => (
              <Link key={item.label} href={item.href} className="transition-opacity hover:opacity-75 whitespace-nowrap">
                {item.label}
              </Link>
            ))}
          </div>

          <Link
            href="/"
            aria-label="Saka Jawa"
            className="relative block h-[28px] w-[25px] sm:h-[34px] sm:w-[30px] shrink-0"
          >
            <Image
              src="/Assets/LogoUtama.svg"
              alt="Saka Jawa"
              fill
              sizes="64px"
              loading="eager"
              fetchPriority="high"
              unoptimized
              className="object-contain"
            />
          </Link>

          <div className="flex items-center justify-start gap-6 sm:gap-8 pl-8 sm:pl-16">
            {navRight.map((item) => (
              <Link key={item.label} href={item.href} className="transition-opacity hover:opacity-75 whitespace-nowrap">
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Mobile */}
        <nav
          className={`md:hidden flex items-center justify-between w-full rounded-full backdrop-blur-md px-6 py-2.5 shadow-lg pointer-events-auto ${className || "bg-white/50 border border-white/50 text-black"}`}
          aria-label="Navigasi utama shared mobile"
        >
          <Link href="/" aria-label="Saka Jawa" className="flex items-center gap-2">
            <div className="relative h-[28px] w-[25px]">
              <Image
                src="/Assets/LogoUtama.svg"
                alt="Saka Jawa"
                fill
                sizes="64px"
                loading="eager"
                fetchPriority="high"
                unoptimized
                className="object-contain"
              />
            </div>
            <span className="text-lg font-bold text-black tracking-tight">SakaJawa</span>
          </Link>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Menu" className="p-2 -mr-1 cursor-pointer transition-transform hover:scale-105 active:scale-95 text-black">
            <div className="flex flex-col items-end justify-between w-6 h-[16px]">
              <span className="block h-[2.5px] w-full bg-current rounded-full" />
              <span className="block h-[2.5px] w-4.5 bg-current rounded-full" />
              <span className="block h-[2.5px] w-3 bg-current rounded-full" />
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-[190] md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
      
      <div 
        className={`fixed left-1/2 top-[80px] sm:top-[90px] z-[200] w-[calc(100%-2.5rem)] max-w-[400px] -translate-x-1/2 flex flex-col items-center gap-6 sm:gap-8 rounded-[2.5rem] backdrop-blur-md px-6 py-8 shadow-lg transition-all duration-300 pointer-events-auto md:hidden text-lg font-medium ${className || "bg-white/50 border border-white/50 text-black"} ${
          isMobileMenuOpen ? "translate-y-0 opacity-100 visible" : "-translate-y-4 opacity-0 invisible"
        }`}
      >
        {navLeft.map((item) => (
          <Link key={item.label} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="transition-opacity hover:opacity-75">
            {item.label}
          </Link>
        ))}
        {navRight.map((item) => (
          <Link key={item.label} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="transition-opacity hover:opacity-75">
            {item.label}
          </Link>
        ))}
      </div>
    </>
  );
}
