"use client";

import { useState } from "react";
import Image from "next/image";

const leftDetails = [
  "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
  "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
  "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
];

const instruments = [
  { id: 1, name: "Kenong", image: "/Assets/Pendhopo Gamelan.svg" },
  { id: 2, name: "Gong", image: "/Assets/Pendhopo Gamelan.svg" },
  { id: 3, name: "Saron", image: "/Assets/Pendhopo Gamelan.svg" },
  { id: 4, name: "Bonang", image: "/Assets/Pendhopo Gamelan.svg" },
  { id: 5, name: "Gambang", image: "/Assets/Pendhopo Gamelan.svg" },
];

export default function WayangStorySection() {
  const [scrollIndex, setScrollIndex] = useState(0);

  const handleNext = () => {
    if (scrollIndex < instruments.length - 4) {
      setScrollIndex(scrollIndex + 1);
    }
  };

  const handlePrev = () => {
    if (scrollIndex > 0) {
      setScrollIndex(scrollIndex - 1);
    }
  };

  return (
    <div className="w-full flex flex-col">
      
      {/* SECTION 2: UNESCO & Fact Card Section */}
      <section 
        id="tentang"
        className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-24" 
        style={{ backgroundImage: "linear-gradient(to left, #2d0f12, #5b0917)" }}
      >
        {/* Background Clouds decoration */}
        <div className="absolute top-6 left-6 opacity-30">
          <Image src="/Assets/Left Mega Mendung.svg" alt="" width={150} height={80} className="object-contain" />
        </div>
        <div className="absolute bottom-6 right-6 opacity-30">
          <Image src="/Assets/Right Mega Mendung.svg" alt="" width={150} height={80} className="object-contain" />
        </div>

        <div className="mx-auto w-full max-w-[1210px] relative z-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            
            {/* Left Side: Text and 3 columns */}
            <div className="lg:col-span-6 flex flex-col">
              <h2 className="font-['League_Spartan'] text-4xl font-semibold tracking-wide text-[#ffc832] sm:text-5xl">
                Wayang Kulit Jawa
              </h2>
              
              <p className="mt-6 text-base leading-relaxed text-white/90 sm:text-lg">
                Wayang kulit merupakan bentuk seni adiluhung yang telah diakui UNESCO sebagai Masterpiece of the Oral and Intangible Heritage of Humanity.
              </p>

              {/* 3 Detail Columns */}
              <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
                {leftDetails.map((t, i) => (
                  <div key={i} className="flex flex-col gap-3">
                    <Image 
                      src="/Assets/Daun Kuning.svg" 
                      alt="Ikon daun emas" 
                      width={30} 
                      height={30} 
                      className="h-8 w-8 object-contain"
                    />
                    <p className="font-['League_Spartan'] text-sm leading-relaxed text-white/80">
                      {t}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: Cream Fact Card with mascot */}
            <div className="lg:col-span-6 flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-[500px] p-1.5">
                {/* Yellow Corner Accents */}
                {/* Top-Left Corner Accent */}
                <div className="absolute top-0 left-0 h-10 w-10 border-t-[8px] border-l-[8px] border-[#ffc832] rounded-tl-[10px]" />
                {/* Bottom-Right Corner Accent */}
                <div className="absolute bottom-0 right-0 h-10 w-10 border-b-[8px] border-r-[8px] border-[#ffc832] rounded-br-[10px]" />

                {/* Main Card Body */}
                <div className="rounded-[15px] bg-[#f9f1e4] p-8 pr-32 shadow-xl relative overflow-hidden min-h-[220px] flex flex-col justify-center">
                  
                  {/* Small decorative clouds inside card */}
                  <div className="absolute top-2 left-2 opacity-25">
                    <Image src="/Assets/Left Mega Mendung.svg" alt="" width={60} height={30} />
                  </div>
                  <div className="absolute bottom-2 right-2 opacity-25">
                    <Image src="/Assets/Right Mega Mendung.svg" alt="" width={60} height={30} />
                  </div>

                  <h3 className="font-['League_Spartan'] text-2xl font-bold text-[#4e0b11]">
                    Tahukah Kamu?
                  </h3>
                  <p className="mt-3 font-['League_Spartan'] text-base leading-relaxed text-[#181318]">
                    Dalam satu peringkat gamelan, terdapat lebih dari 40 instrumen yang dimainkan secara bersama-sama tanpa seorang konduktor.
                  </p>
                  
                  {/* Mascot Character overlapping on the right side */}
                  <div className="absolute right-0 bottom-0 h-[220px] w-[130px] flex items-end">
                    <Image 
                      src="/Assets/Sambut Tamu About.svg" 
                      alt="Mascot Saka Jawa" 
                      width={120} 
                      height={200}
                      className="object-contain object-bottom"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: Ragam Wayang Kulit */}
      <section id="ragam" className="bg-[#f9f1e4] px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto w-full max-w-[1210px]">
          
          {/* Header Row */}
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div className="space-y-2">
              <h2 className="font-['League_Spartan'] text-4xl font-bold text-[#4e0b11] sm:text-5xl">
                Ragam Wayang Kulit
              </h2>
              <p className="max-w-[700px] font-['League_Spartan'] text-lg text-[#4A332B]">
                Kenali beberapa instrumen utama dalam gamelan jawa dan perannya dalam menciptakan harmoni
              </p>
            </div>

            {/* Slider Navigation Buttons */}
            <div className="flex gap-4 shrink-0">
              <button
                onClick={handlePrev}
                disabled={scrollIndex === 0}
                className={`flex h-12 w-12 items-center justify-center rounded-lg border border-[#4e0b11] text-xl font-bold transition-all ${
                  scrollIndex === 0 
                    ? "border-stone-300 text-stone-400 bg-transparent cursor-not-allowed" 
                    : "bg-[#4e0b11] text-white hover:bg-[#3d080d]"
                }`}
                aria-label="Previous items"
              >
                &lt;
              </button>
              <button
                onClick={handleNext}
                disabled={scrollIndex >= instruments.length - 4}
                className={`flex h-12 w-12 items-center justify-center rounded-lg border border-[#4e0b11] text-xl font-bold transition-all ${
                  scrollIndex >= instruments.length - 4 
                    ? "border-stone-300 text-stone-400 bg-transparent cursor-not-allowed" 
                    : "bg-[#4e0b11] text-white hover:bg-[#3d080d]"
                }`}
                aria-label="Next items"
              >
                &gt;
              </button>
            </div>
          </div>

          {/* Cards Grid/Carousel */}
          <div className="mt-12 overflow-hidden">
            <div 
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${scrollIndex * 290}px)` }}
            >
              {instruments.map((item) => (
                <div 
                  key={item.id}
                  className="w-[266px] shrink-0 rounded-[15px] border border-[#4e0b11] bg-white p-4 shadow-sm flex flex-col items-center text-center justify-between min-h-[420px]"
                >
                  {/* Greyish image container */}
                  <div className="relative aspect-video w-full overflow-hidden rounded-[10px] bg-[#d9d9d9] flex items-center justify-center">
                    <span className="font-['League_Spartan'] text-stone-500 font-medium">Gambar {item.name}</span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 font-['League_Spartan'] text-2xl font-bold text-[#4e0b11]">
                    {item.name}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 font-['League_Spartan'] text-sm leading-relaxed text-stone-600">
                    Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.
                  </p>

                  {/* Button */}
                  <button className="mt-6 w-full rounded-full border border-[#4e0b11] py-2 font-['League_Spartan'] text-base font-semibold text-[#4e0b11] transition-all hover:bg-[#4e0b11] hover:text-white active:scale-95">
                    Lihat Detail
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

