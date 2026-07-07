"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, MessageCircle } from "lucide-react";

// Lucide-style SVG for Instagram since lucide-react removed brand icons
const InstagramIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

// Lucide-style SVG for YouTube
const YoutubeIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

export default function Footer() {
  const pathname = usePathname();
  // Sembunyikan footer di halaman mini-game (misal: /permainan/batik), tapi tetap tampilkan di /permainan
  if (pathname !== "/permainan" && pathname?.startsWith("/permainan")) return null;

  return (
    <footer className="relative w-full overflow-hidden bg-[#F9F1E4] pt-16 lg:pt-24">
      {/* Top Content */}
      <div className="relative z-10 mx-auto w-full max-w-[var(--container-lg)] px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">

          {/* Brand & Contact Column */}
          <div className="md:col-span-12 lg:col-span-5 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/Assets/LogoUtama.svg"
                alt="SakaJawa Logo"
                width={40}
                height={40}
                className="h-10 w-auto object-contain"
              />
              <span className="text-2xl font-extrabold text-[#FFC832]">SakaJawa</span>
            </div>
            <p className="text-gray-900 font-semibold leading-[1.8] max-w-sm text-sm sm:text-base mb-8">
              Kami hadir untuk menghubungkan generasi muda dengan akar budayanya melalui pengalaman digital yang interaktif dan bermakna.
            </p>
            <div className="flex items-center gap-4">
              <a href="mailto:halo@sakajawa.com" className="p-2 rounded-full bg-[#4E0B11] text-white hover:bg-[#FFC832] hover:text-[#4E0B11] transition-colors" aria-label="Email">
                <Mail size={24} />
              </a>
              <a href="#" className="p-2 rounded-full bg-[#4E0B11] text-white hover:bg-[#FFC832] hover:text-[#4E0B11] transition-colors" aria-label="Instagram">
                <InstagramIcon size={24} />
              </a>
              <a href="#" className="p-2 rounded-full bg-[#4E0B11] text-white hover:bg-[#FFC832] hover:text-[#4E0B11] transition-colors" aria-label="YouTube">
                <YoutubeIcon size={24} />
              </a>
              <a href="#" className="p-2 rounded-full bg-[#4E0B11] text-white hover:bg-[#FFC832] hover:text-[#4E0B11] transition-colors" aria-label="WhatsApp">
                <MessageCircle size={24} />
              </a>
            </div>
          </div>

          {/* Navigation Column 1 - Eksplorasi */}
          <div className="md:col-span-6 lg:col-span-3 lg:col-start-7">
            <h3 className="text-xl font-bold text-[#FFC832] mb-6">Eksplorasi</h3>
            <ul className="space-y-3 text-gray-900 font-semibold text-sm sm:text-base">
              <li><Link href="/" className="hover:text-[#4E0B11] transition-colors">Beranda</Link></li>
              <li><Link href="/tentang-kami" className="hover:text-[#4E0B11] transition-colors">Tentang Kami</Link></li>
              <li><Link href="/permainan" className="hover:text-[#4E0B11] transition-colors">Permainan</Link></li>
            </ul>
          </div>

          {/* Navigation Column 2 - Budaya */}
          <div className="md:col-span-6 lg:col-span-3">
            <h3 className="text-xl font-bold text-[#FFC832] mb-6">Budaya</h3>
            <ul className="space-y-3 text-gray-900 font-semibold text-sm sm:text-base">
              <li><Link href="/batik" className="hover:text-[#4E0B11] transition-colors">Batik Jawa</Link></li>
              <li><Link href="/wayang" className="hover:text-[#4E0B11] transition-colors">Wayang Kulit</Link></li>
              <li><Link href="/gamelan" className="hover:text-[#4E0B11] transition-colors">Gamelan</Link></li>
              <li><Link href="/kuliner" className="hover:text-[#4E0B11] transition-colors">Kuliner Tradisional</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Background SVG and Copyright */}
      <div className="relative w-full mt-10 md:mt-12 lg:mt-16 pointer-events-none flex flex-col items-center">
        {/* Copyright text overlaid on the sky area of the SVG */}
        <div className="absolute -top-[4%] sm:top-[2%] md:top-[6%] lg:top-[8%] left-1/2 -translate-x-1/2 text-center z-10 w-full px-4">
          <p className="text-xs sm:text-sm text-black/80 font-bold leading-loose tracking-wide">
            Developed by <span className="text-[#4E0B11] font-extrabold">Golek Howo Team</span><br />
            © {new Date().getFullYear()} SakaJawa. ALL RIGHTS RESERVED.
          </p>
        </div>

        {/* The Landscape Image */}
        <Image
          src="/Assets/FooterAssets.webp"
          alt="Footer Landscape"
          width={1920}
          height={1080}
          className="w-full h-auto object-cover object-top"
          priority
        />
      </div>
    </footer>
  );
}
