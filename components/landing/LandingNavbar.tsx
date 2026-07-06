"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLenis } from "lenis/react";

const navLeft = [
  { label: "Beranda", href: "/" },
];

const navRight = [
  { label: "Permainan", href: "/permainan" },
  { label: "Tentang Kami", href: "/tentang-kami" },
];

const NavContent = ({ onKekayaanBudayaClick }: { onKekayaanBudayaClick: () => void }) => (
  <>
    <div className="flex min-w-0 flex-wrap items-center justify-end gap-x-6 gap-y-2 sm:gap-x-16">
      {navLeft.map((item) => (
        <Link key={item.label} href={item.href} className="transition-opacity hover:opacity-75">
          {item.label}
        </Link>
      ))}
      <button
        onClick={onKekayaanBudayaClick}
        className="transition-opacity hover:opacity-75 cursor-pointer bg-transparent border-none p-0 font-inherit text-inherit"
      >
        Kekayaan Budaya
      </button>
    </div>

    <Link
      href="/"
      aria-label="Saka Jawa"
      className="relative block h-[38px] w-[34px] sm:h-[50px] sm:w-[44px]"
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

    <div className="flex min-w-0 flex-wrap items-center justify-start gap-x-6 gap-y-2 sm:gap-x-16">
      {navRight.map((item) => (
        <Link key={item.label} href={item.href} className="transition-opacity hover:opacity-75">
          {item.label}
        </Link>
      ))}
    </div>
  </>
);

export default function LandingNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const lenis = useLenis();

  const handleScrollToExplore = useCallback(() => {
    const target = document.getElementById("explore-section");
    if (target && lenis) {
      lenis.scrollTo(target, { offset: -80, duration: 1.5 });
    } else if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [lenis]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Threshold to show the glass navbar (after hero section)
      const heroHeight = window.innerHeight;
      if (currentScrollY > heroHeight - 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide glass navbar on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > heroHeight) {
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
    <>
      <header className="absolute left-1/2 top-5 z-[100] w-full max-w-[1024px] -translate-x-1/2 px-5 sm:top-8 pointer-events-none">
        <nav
          className="grid grid-cols-[1fr_auto_1fr] items-center gap-8 sm:gap-16 text-[0.8rem] font-bold text-black sm:text-base pointer-events-auto"
          aria-label="Navigasi utama statis"
        >
          <NavContent onKekayaanBudayaClick={handleScrollToExplore} />
        </nav>
      </header>

      {/* 2. Glass Navbar (Fixed, shows after scrolling down past hero) */}
      <header
        className={`fixed left-1/2 top-6 z-[100] w-fit -translate-x-1/2 transition-all duration-500 pointer-events-none ${
          isScrolled && isVisible ? "translate-y-0 opacity-100" : "-translate-y-[150%] opacity-0"
        }`}
      >
        <nav
          className="grid grid-cols-[1fr_auto_1fr] items-center rounded-full bg-[#8b8b8b]/40 backdrop-blur-md border border-white/20 px-10 py-2 shadow-lg text-sm sm:text-[15px] font-semibold text-black pointer-events-auto"
          aria-label="Navigasi utama scroll"
        >
          <div className="flex items-center justify-end gap-6 sm:gap-16 pr-8 sm:pr-16">
            {navLeft.map((item) => (
              <Link key={item.label} href={item.href} className="transition-opacity hover:opacity-75 whitespace-nowrap">
                {item.label}
              </Link>
            ))}
            <button
              onClick={handleScrollToExplore}
              className="transition-opacity hover:opacity-75 whitespace-nowrap cursor-pointer bg-transparent border-none p-0 font-inherit text-inherit"
            >
              Kekayaan Budaya
            </button>
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

          <div className="flex items-center justify-start gap-6 sm:gap-16 pl-8 sm:pl-16">
            {navRight.map((item) => (
              <Link key={item.label} href={item.href} className="transition-opacity hover:opacity-75 whitespace-nowrap">
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
}
