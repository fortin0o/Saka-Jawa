"use client";

import Image from "next/image";
import Link from "next/link";
import { useLenis } from "lenis/react";

export default function LandingCTASection() {
  const lenis = useLenis();

  const handleScrollToExplore = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const target = document.getElementById("explore-section");
    if (target && lenis) {
      lenis.scrollTo(target, { offset: -80, duration: 1.5 });
    } else if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="w-full max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-16 -mt-8 lg:-mt-12 relative z-20">
      <div className="relative w-full bg-gradient-to-r from-[#4E0B11] to-[#2D0F12] rounded-[32px] overflow-hidden flex flex-col md:flex-row min-h-[280px] lg:min-h-[320px] shadow-[0_12px_24px_-8px_rgba(0,0,0,0.3)]">
        {/* Decorative Assets */}
        <Image
          src="/Assets/Gunungan CTA Atas.svg"
          alt="Gunungan Atas"
          width={350}
          height={350}
          className="absolute -top-6 -right-6 w-[140px] md:w-[200px] lg:w-[250px] h-auto z-0 pointer-events-none rotate-180 opacity-90"
        />
        <Image
          src="/Assets/Gunungan CTA Bawah.svg"
          alt="Gunungan Bawah"
          width={40}
          height={40}
          className="absolute -bottom-8 -left-8 w-[35px] md:w-[70px] lg:w-[175px] h-auto z-0 pointer-events-none opacity-90"
        />

        {/* Content */}
        <div className="relative z-10 w-full md:w-[65%] lg:w-[60%] p-8 md:py-12 md:pl-16 lg:py-[48px] lg:pl-[80px] flex flex-col justify-center items-start gap-4">
          <h2 className="text-3xl md:text-[36px] lg:text-[42px] font-bold text-white leading-[1.1] font-sans tracking-tight">
            Sudah Siap <br />
            Menjelajahi Budaya <br />
            <span className="text-[#ffc832]">Jawa?</span>
          </h2>
          <p className="text-white/95 text-xs md:text-sm lg:text-base max-w-[480px] font-medium leading-relaxed mt-2">
            Temukan Cerita, Filosofi, Dan Warisan Yang Hidup <br className="hidden md:block" /> Dalam Setiap Pendhapa.
          </p>
          <Link
            href="#explore-section"
            className="mt-6 bg-[#ffc832] text-[#3e0b10] font-bold px-6 lg:px-8 py-2.5 lg:py-3 rounded-full flex items-center justify-between gap-8 hover:bg-[#e6b42d] transition-all text-sm lg:text-base shadow-lg w-fit"
          >
            <span>Mulai Jelajahi</span>
            <span className="bg-[#3e0b10] text-[#ffc832] rounded-full p-2 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7" /><path d="M7 7h10v10" /></svg>
            </span>
          </Link>
        </div>

        {/* Right Wayang Image */}
        <div className="absolute z-10 bottom-0 right-0 w-[80%] md:w-[60%] lg:w-[65%] h-[80%] md:h-[105%] pointer-events-none flex justify-end">
          <Image
            src="/Assets/Wayang CTA.svg"
            alt="Wayang CTA"
            fill
            className="object-contain object-right-bottom md:object-right-bottom transform md:translate-y-4 lg:translate-y-6 lg:translate-x-4"
          />
        </div>
      </div>
    </section>
  );
}
