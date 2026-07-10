"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lenis = useLenis();
  const pathname = usePathname();
  const router = useRouter();

  const isAltTheme = pathname?.startsWith("/permainan") || pathname?.startsWith("/tentang-kami");
  const staticTextClass = isAltTheme ? "text-white" : "text-black";
  const glassBgClass = "bg-white/50 border-white/50 text-black";
  const isOnLandingPage = pathname === "/";

  const handleScrollToExplore = useCallback(() => {
    if (!isOnLandingPage) {
      router.push("/#explore-section");
      return;
    }
    const target = document.getElementById("explore-section");
    if (target && lenis) {
      lenis.scrollTo(target, { offset: -80, duration: 1.5 });
    } else if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [lenis, isOnLandingPage, router]);

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
      {/* 1. Static Navbar (Hero Section) */}
      <header className="absolute left-1/2 top-5 z-[100] w-full max-w-[1024px] -translate-x-1/2 px-5 sm:top-8 pointer-events-none">
        {/* Desktop */}
        <nav
          className={`hidden md:grid grid-cols-[1fr_auto_1fr] items-center gap-8 sm:gap-16 text-[0.8rem] font-bold sm:text-base pointer-events-auto ${staticTextClass}`}
          aria-label="Navigasi utama statis desktop"
        >
          <NavContent onKekayaanBudayaClick={handleScrollToExplore} />
        </nav>

        {/* Mobile */}
        <nav
          className={`md:hidden flex items-center justify-between w-full pointer-events-auto ${staticTextClass}`}
          aria-label="Navigasi utama statis mobile"
        >
          <Link href="/" aria-label="Saka Jawa" className="flex items-center gap-2">
            <div className="relative h-[34px] w-[30px]">
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
            <span className="text-xl font-bold tracking-tight">SakaJawa</span>
          </Link>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Menu" className="p-2 -mr-2 cursor-pointer transition-transform hover:scale-105 active:scale-95">
            <div className="flex flex-col items-end justify-between w-6 h-[16px]">
              <span className="block h-[2.5px] w-full bg-current rounded-full" />
              <span className="block h-[2.5px] w-4.5 bg-current rounded-full" />
              <span className="block h-[2.5px] w-3 bg-current rounded-full" />
            </div>
          </button>
        </nav>
      </header>

      {/* 2. Glass Navbar (Fixed, shows after scrolling down past hero) */}
      <header
        className={`fixed left-1/2 top-4 sm:top-6 z-[100] w-[calc(100%-2.5rem)] sm:w-fit -translate-x-1/2 transition-all duration-500 pointer-events-none ${
          isScrolled && isVisible ? "translate-y-0 opacity-100" : "-translate-y-[150%] opacity-0"
        }`}
      >
        {/* Desktop */}
        <nav
          className={`hidden md:grid grid-cols-[1fr_auto_1fr] items-center rounded-full backdrop-blur-md border px-10 py-2 shadow-lg text-sm sm:text-[15px] font-semibold pointer-events-auto ${glassBgClass}`}
          aria-label="Navigasi utama scroll desktop"
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

        {/* Mobile */}
        <nav
          className={`md:hidden flex items-center justify-between w-full rounded-full backdrop-blur-md border px-6 py-2.5 shadow-lg pointer-events-auto ${glassBgClass}`}
          aria-label="Navigasi utama scroll mobile"
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
            <span className="text-lg font-bold tracking-tight">SakaJawa</span>
          </Link>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Menu" className="p-2 -mr-1 cursor-pointer transition-transform hover:scale-105 active:scale-95">
            <div className="flex flex-col items-end justify-between w-6 h-[16px]">
              <span className="block h-[2.5px] w-full bg-current rounded-full" />
              <span className="block h-[2.5px] w-4.5 bg-current rounded-full" />
              <span className="block h-[2.5px] w-3 bg-current rounded-full" />
            </div>
          </button>
        </nav>
      </header>

      {/* 3. Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-[190] md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
      
      <div 
        className={`fixed left-1/2 top-[80px] sm:top-[90px] z-[200] w-[calc(100%-2.5rem)] max-w-[400px] -translate-x-1/2 flex flex-col items-center gap-6 rounded-[2.5rem] backdrop-blur-md border px-6 py-8 shadow-lg transition-all duration-300 pointer-events-auto md:hidden text-lg font-semibold ${glassBgClass} ${
          isMobileMenuOpen ? "translate-y-0 opacity-100 visible" : "-translate-y-4 opacity-0 invisible"
        }`}
      >
        {navLeft.map((item) => (
          <Link key={item.label} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="transition-opacity hover:opacity-75">
            {item.label}
          </Link>
        ))}
        <button 
          onClick={() => { handleScrollToExplore(); setIsMobileMenuOpen(false); }} 
          className="transition-opacity hover:opacity-75 font-inherit text-inherit"
        >
          Kekayaan Budaya
        </button>
        {navRight.map((item) => (
          <Link key={item.label} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="transition-opacity hover:opacity-75">
            {item.label}
          </Link>
        ))}
      </div>
    </>
  );
}
