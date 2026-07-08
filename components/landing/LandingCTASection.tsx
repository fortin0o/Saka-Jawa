"use client";

import Image from "next/image";
import Link from "next/link";

export default function LandingCTASection() {
  return (
    <section className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-16 -mt-8 lg:-mt-12 relative z-20">
      <div className="relative w-full bg-gradient-to-r from-[#4E0B11] to-[#2D0F12] rounded-[32px] overflow-hidden flex flex-col md:flex-row min-h-[280px] lg:min-h-[320px] shadow-[0_12px_24px_-8px_rgba(0,0,0,0.3)] px-4 md:px-0">
        {/* Decorative Assets */}
        <Image
          src="/Assets/GununganCTAAtas.svg"
          alt="Gunungan Atas"
          width={350}
          height={350}
          className="absolute -top-5 -right-7 w-[140px] md:w-[200px] lg:w-[250px] h-auto z-0 pointer-events-none rotate-180 opacity-90"
        />
        <Image
          src="/Assets/GununganCTABawah.svg"
          alt="Gunungan Bawah"
          width={40}
          height={40}
          className="absolute -bottom-4 -left-4 md:-bottom-8 md:-left-8 max-md:w-[140px] md:w-[70px] lg:w-[175px] h-auto z-0 pointer-events-none opacity-90"
        />

        {/* Content */}
        <div className="relative z-10 w-full md:w-[55%] lg:w-[50%] max-md:pt-13 max-md:pb-10 px-4 md:py-12 md:pl-16 lg:py-[52px] lg:pl-[100px] md:pr-4 flex flex-col justify-center max-md:items-center md:items-start gap-4">
          <h2 className="text-3xl md:text-[36px] lg:text-[42px] font-semibold text-white leading-[1.1] font-sans tracking-tight max-md:text-center leading-tight">
            Sudah Siap <br />
            Menjelajahi Budaya <br />
            <span className="text-[#ffc832]">Jawa?</span>
          </h2>

          {/* Wayang Image for Mobile */}
          <div className="relative md:hidden w-full h-[220px] my-2 pointer-events-none">
            <Image
              src="/Assets/WayangCTA.svg"
              alt="Wayang CTA Mobile"
              fill
              className="object-contain object-center"
            />
          </div>

          <p className="text-white/95 text-xs md:text-sm lg:text-base max-w-[480px] font-medium leading-relaxed mt-2 max-md:text-center max-md:px-2">
            Temukan Cerita, Filosofi, Dan Warisan Yang Hidup <br className="hidden md:block" /> Dalam Setiap Pendhapa.
          </p>
          <Link
            href="#explore-section"
            className="mt-2 md:mt-6 bg-[#ffc832] text-[#3e0b10] font-bold px-6 lg:px-8 py-2.5 lg:py-3 rounded-full flex items-center justify-between gap-8 hover:bg-[#e6b42d] transition-all text-sm lg:text-base shadow-lg w-fit"
          >
            <span>Mulai Jelajahi</span>
            <span className="bg-[#3e0b10] text-[#ffc832] rounded-full p-2 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7" /><path d="M7 7h10v10" /></svg>
            </span>
          </Link>
        </div>

        {/* Right Wayang Image (Desktop) */}
        <div className="hidden md:block absolute z-10 bottom-0 right-[2%] md:right-[4%] lg:right-[6%] w-[75%] md:w-[52%] lg:w-[52%] h-[85%] md:h-[108%] pointer-events-none">
          <Image
            src="/Assets/WayangCTA.svg"
            alt="Wayang CTA"
            fill
            className="object-contain object-bottom transform md:translate-y-4 lg:translate-y-6"
          />
        </div>
      </div>
    </section>
  );
}
