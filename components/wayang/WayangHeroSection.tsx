"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slideImages = [
  "/Assets/kulinerHeroAsset.avif",
  "/Assets/wayangHeroAsset.avif",
  "/Assets/gamelanHeroAsset.avif",
  "/Assets/batikHeroAsset.avif",
];

export default function WayangHeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex w-full flex-col items-center bg-white px-4 pt-6 pb-16 sm:px-6 md:pb-20 lg:px-8">
      {/* Container for content */}
      <div className="mx-auto flex w-full max-w-[1210px] flex-col gap-10 md:gap-14 lg:gap-16">
        
        {/* Navigation Bar */}
        <nav className="relative mx-auto flex h-[71px] w-full max-w-[1210px] items-center justify-between rounded-[100px] border-[6px] border-[#80472c] bg-[#572c19] px-6 shadow-[0_18px_45px_rgba(87,44,25,0.25)] sm:px-12">
          {/* Logo Center */}
          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
            <Image
              src="/Assets/Logo Utama.svg"
              alt="Logo Saka Jawa"
              width={45}
              height={45}
              className="h-11 w-11 object-contain"
            />
          </div>

          {/* Left Navigation */}
          <div className="flex items-center gap-6 sm:gap-10">
            <a
              href="/"
              className="font-['League_Spartan'] text-base font-medium text-white/90 transition hover:text-white sm:text-lg"
            >
              Beranda
            </a>
            <a
              href="/wayang"
              className="relative font-['League_Spartan'] text-base font-medium text-white sm:text-lg"
            >
              <span>Museum</span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-[#ffc832] rounded-full" />
            </a>
          </div>

          {/* Right Navigation */}
          <div className="flex items-center gap-6 sm:gap-10">
            <a
              href="/permainan"
              className="font-['League_Spartan'] text-base font-medium text-white/90 transition hover:text-white sm:text-lg"
            >
              Permainan
            </a>
            <a
              href="/tentang-kami"
              className="font-['League_Spartan'] text-base font-medium text-white/90 transition hover:text-white sm:text-lg"
            >
              Tentang Kami
            </a>
          </div>
        </nav>

        {/* Hero Grid */}
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 xl:gap-16">
          
          {/* Left Side: Leaf/Semi-Capsule Image Container */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="relative w-full max-w-[620px] overflow-hidden rounded-r-[180px] rounded-l-[20px] border border-stone-200/50 bg-stone-50 p-2 shadow-[0_20px_50px_rgba(78,11,17,0.12)]">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-r-[170px] rounded-l-[15px]">
                <Image
                  src={slideImages[currentSlide]}
                  alt="Saka Jawa Museum Slideshow"
                  fill
                  className="object-cover transition-all duration-700 ease-in-out"
                  priority
                />
              </div>
            </div>

            {/* Slider Dots */}
            <div className="mt-6 flex items-center justify-center gap-2.5 pl-4">
              {slideImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2.5 transition-all duration-300 rounded-full ${
                    currentSlide === index
                      ? "w-10 bg-[#FFC832]"
                      : "w-2.5 bg-[#4E0B11]"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Side: Text & Content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {/* Pendhapa Wayang Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#4e0b11] bg-[#fdfaf4] px-4 py-1.5 text-sm font-semibold text-[#4e0b11] shadow-sm">
              <Image
                src="/Assets/Pendhopo Wayang.svg"
                alt="Ikon pendhapa wayang"
                width={20}
                height={20}
                className="h-5 w-5 object-contain"
              />
              <span className="font-['League_Spartan'] text-base tracking-wide font-medium">Pendhapa Wayang</span>
            </div>

            {/* Headings */}
            <div className="mt-5 space-y-2">
              <h1 className="font-['League_Spartan'] text-4xl font-bold leading-[1.1] tracking-tight text-[#181318] sm:text-5xl lg:text-6xl">
                Seni Wayang Kulit
              </h1>
              <p className="font-['League_Spartan'] text-lg font-semibold tracking-wide text-[#5b0917] sm:text-xl md:text-2xl">
                Karakter, Cerita, dan Bayangan Kehidupan
              </p>
            </div>

            {/* Description */}
            <p className="mt-5 max-w-[500px] font-['League_Spartan'] text-base leading-relaxed text-[#4A332B] sm:text-lg">
              Di balik setiap guratan tokoh wayang, tersimpan filosofi mendalam dan nilai kehidupan masyarakat Jawa.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#tentang"
                className="inline-flex items-center justify-center rounded-full bg-[#5b0917] px-8 py-3.5 font-['League_Spartan'] text-base font-semibold text-white shadow-md transition-all duration-200 hover:bg-[#4E0B11] hover:shadow-lg active:scale-95"
              >
                Tentang Wayang
              </a>
              <a
                href="#ragam"
                className="inline-flex items-center justify-center rounded-full border border-[#5b0917] bg-transparent px-8 py-3.5 font-['League_Spartan'] text-base font-semibold text-[#5b0917] transition-all duration-200 hover:bg-[#5b0917]/5 active:scale-95"
              >
                Jelajahi Tokoh
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Decorative Wavy Border at the Bottom */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-8 w-full"
        style={{
          backgroundImage: "url('/Assets/Batik Sambungan.svg')",
          backgroundRepeat: 'repeat-x',
          backgroundPosition: 'bottom center',
          backgroundSize: 'auto 32px',
        }}
      />
    </section>
  );
}
