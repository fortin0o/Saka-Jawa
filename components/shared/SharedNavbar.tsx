"use client";

import Image from "next/image";
import Link from "next/link";

const navLeft = [
  { label: "Beranda", href: "/" },
  { label: "Kekayaan Budaya", href: "/#explore-section" },
];

const navRight = [
  { label: "Permainan", href: "/permainan" },
  { label: "Tentang Kami", href: "/tentang-kami" },
];

export default function SharedNavbar() {

  return (
    <header className="fixed left-1/2 top-6 z-[100] w-fit -translate-x-1/2">
      <nav
        className="grid grid-cols-[1fr_auto_1fr] items-center rounded-full bg-[#8b8b8b]/40 backdrop-blur-md border border-white/20 px-10 py-2 shadow-lg text-sm sm:text-[15px] font-semibold text-black"
        aria-label="Navigasi utama shared"
      >
        <div className="flex items-center justify-end gap-6 sm:gap-16 pr-8 sm:pr-16">
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

        <div className="flex items-center justify-start gap-6 sm:gap-16 pl-8 sm:pl-16">
          {navRight.map((item) => (
            <Link key={item.label} href={item.href} className="transition-opacity hover:opacity-75 whitespace-nowrap">
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
