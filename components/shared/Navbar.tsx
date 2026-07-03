"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLeft = [
  { label: "Beranda", href: "/" },
  { label: "Kekayaan Budaya", href: "/#explore-section" },
];

const navRight = [
  { label: "Permainan", href: "/permainan" },
  { label: "Tentang Kami", href: "/tentang-kami" },
];

const NavContent = () => (
  <>
    <div className="flex min-w-0 flex-wrap items-center justify-end gap-x-6 gap-y-2 sm:gap-x-16">
      {navLeft.map((item) => (
        <Link key={item.label} href={item.href} className="transition-opacity hover:opacity-75">
          {item.label}
        </Link>
      ))}
    </div>

    <Link
      href="/"
      aria-label="Saka Jawa"
      className="relative block h-[38px] w-[34px] sm:h-[50px] sm:w-[44px]"
    >
      <Image
        src="/Assets/Logo Utama.svg"
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

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Threshold to show the glass navbar (after hero section)
      // If not on home page, show it sooner or just keep same threshold
      const heroHeight = pathname === "/" ? window.innerHeight : 200;
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
  }, [lastScrollY, pathname]);

  // Text color logic: black on all pages because hero sections have light backgrounds
  const staticNavTextColor = "text-black";

  return (
    <>
      <header className="absolute left-1/2 top-5 z-[100] w-full max-w-[1024px] -translate-x-1/2 px-5 sm:top-8 pointer-events-none">
        <nav
          className={`grid grid-cols-[1fr_auto_1fr] items-center gap-8 sm:gap-16 text-[0.8rem] font-bold ${staticNavTextColor} sm:text-base pointer-events-auto`}
          aria-label="Navigasi utama statis"
        >
          <NavContent />
        </nav>
      </header>

      {/* 2. Glass Navbar (Fixed, shows after scrolling down past hero) */}
      <header
        className={`fixed left-1/2 top-6 z-[100] w-full max-w-[1024px] -translate-x-1/2 px-5 transition-all duration-500 pointer-events-none ${isScrolled && isVisible ? "translate-y-0 opacity-100" : "-translate-y-[150%] opacity-0"
          }`}
      >
        <nav
          className="bg-black/60 backdrop-blur-md border border-white/10 rounded-[40px] px-8 py-3 drop-shadow-2xl grid grid-cols-[1fr_auto_1fr] items-center gap-8 sm:gap-16 text-[0.8rem] font-bold text-white sm:text-base pointer-events-auto"
          aria-label="Navigasi utama scroll"
        >
          <NavContent />
        </nav>
      </header>
    </>
  );
}
