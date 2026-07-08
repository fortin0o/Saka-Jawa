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
    <header 
      className={`fixed left-1/2 top-6 z-[100] w-fit -translate-x-1/2 transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-[150%] opacity-0"
      }`}
    >
      <nav
        className={`grid grid-cols-[1fr_auto_1fr] items-center rounded-full backdrop-blur-md px-4 sm:px-6 lg:px-10 py-2 shadow-lg text-xs sm:text-[15px] font-semibold ${className || "bg-white/50 border border-white/50 text-black"}`}
        aria-label="Navigasi utama shared"
      >
        <div className="flex items-center justify-end gap-3 sm:gap-8 lg:gap-16 pr-4 sm:pr-8 lg:pr-16">
          {navLeft.map((item) => (
            <Link key={item.label} href={item.href} className="transition-opacity hover:opacity-75 whitespace-nowrap hidden sm:block">
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

        <div className="flex items-center justify-start gap-3 sm:gap-8 lg:gap-16 pl-4 sm:pl-8 lg:pl-16">
          {navRight.map((item) => (
            <Link key={item.label} href={item.href} className="transition-opacity hover:opacity-75 whitespace-nowrap hidden sm:block">
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
