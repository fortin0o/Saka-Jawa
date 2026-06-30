import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#F9F1E4] pt-16 lg:pt-24">
      {/* Top Content */}
      <div className="relative z-10 mx-auto w-full max-w-[var(--container-lg)] px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">

          {/* Brand Column */}
          <div className="md:col-span-12 lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/Assets/Logo Utama.svg"
                alt="SakaJawa Logo"
                width={40}
                height={40}
                className="h-10 w-auto object-contain"
              />
              <span className="text-2xl font-extrabold text-[#FFC832]">SakaJawa</span>
            </div>
            <p className="text-gray-900 font-semibold leading-[1.8] max-w-sm text-sm sm:text-base">
              Kami hadir untuk menghubungkan generasi muda dengan akar budayanya melalui pengalaman digital yang interaktif dan bermakna.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-6 lg:col-span-3 lg:col-start-7">
            <h3 className="text-xl font-bold text-[#FFC832] mb-6">Navigasi</h3>
            <ul className="space-y-4 text-gray-900 font-semibold text-sm sm:text-base">
              <li><Link href="#" className="hover:text-[#4E0B11] transition-colors">Lorem Ipsum</Link></li>
              <li><Link href="#" className="hover:text-[#4E0B11] transition-colors">Lorem Ipsum</Link></li>
              <li><Link href="#" className="hover:text-[#4E0B11] transition-colors">Lorem Ipsum</Link></li>
              <li><Link href="#" className="hover:text-[#4E0B11] transition-colors">Lorem Ipsum</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-6 lg:col-span-3">
            <h3 className="text-xl font-bold text-[#FFC832] mb-6">Kontak</h3>
            <ul className="space-y-4 text-gray-900 font-semibold text-sm sm:text-base">
              <li><Link href="#" className="hover:text-[#4E0B11] transition-colors">Lorem Ipsum</Link></li>
              <li><Link href="#" className="hover:text-[#4E0B11] transition-colors">Lorem Ipsum</Link></li>
              <li><Link href="#" className="hover:text-[#4E0B11] transition-colors">Lorem Ipsum</Link></li>
              <li><Link href="#" className="hover:text-[#4E0B11] transition-colors">Lorem Ipsum</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Background SVG and Copyright */}
      <div className="relative w-full mt-10 md:mt-12 lg:mt-16 pointer-events-none flex flex-col items-center">
        {/* Copyright text overlaid on the sky area of the SVG */}
        <div className="absolute top-[12%] sm:top-[15%] md:top-[18%] lg:top-[22%] left-1/2 -translate-x-1/2 text-center z-10 w-full">
          <p className="text-[10px] md:text-xs text-black/80 font-bold leading-relaxed">
            Develop by Golek Howo Team<br />
            © 2026. ALL RIGHTS RESERVED.
          </p>
        </div>

        {/* The Landscape Image */}
        <Image
          src="/Assets/Footer Assets.webp"
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
