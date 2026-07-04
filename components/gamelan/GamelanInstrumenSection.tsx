"use client";

import { useState } from "react";
import Image from "next/image";
import DetailGaleri from "../shared/DetailGaleri";

const gamelanInstruments = [
  {
    id: 1,
    name: "Gong Ageng",
    image: "/Assets/Gambar Gamelan/Gong.jpg",
    desc: "Instrumen terbesar dalam gamelan yang menandai awal dan akhir sebuah gendhing, melambangkan keagungan dan kesempurnaan.",
  },
  {
    id: 2,
    name: "Kendang",
    image: "/Assets/Gambar Gamelan/Kendang.jpg",
    desc: "Drum dua sisi yang berfungsi sebagai pemimpin tempo dan irama, menghubungkan seluruh instrumen menjadi satu kesatuan harmonis.",
  },
  {
    id: 3,
    name: "Bonang",
    image: "/Assets/Gambar Gamelan/Bonang.jpg",
    desc: "Rangkaian gong kecil yang dimainkan dengan pemukul lunak, menghasilkan melodi utama yang mengalun indah dan merdu.",
  },
  {
    id: 4,
    name: "Saron",
    image: "/Assets/Gambar Gamelan/Saron.jpg",
    desc: "Instrumen bilah logam yang dipukul untuk menghasilkan nada pokok, menjadi fondasi melodi dalam keseluruhan ansambel.",
  },
  {
    id: 5,
    name: "Gender",
    image: "/Assets/Gambar Gamelan/Gender.jpg",
    desc: "Bilah logam tipis yang digantung di atas tabung resonator, menghasilkan suara lembut dan mistis yang khas gamelan Jawa.",
  },
];

const gongGalleryImages = [
  { id: 1, src: "/Assets/Gambar Gamelan/Gamelan 1.jpg", title: "Gamelan 1", description: "Potret instrumen Gamelan Jawa.Instrumen terbesar dalam gamelan yang menandai awal dan akhir sebuah gendhing, melambangkan keagungan dan kesempurnaan" },
  { id: 2, src: "/Assets/Gambar Gamelan/Gamelan 2.jpg", title: "Gamelan 2", description: "Detail perangkat Gamelan." },
  { id: 3, src: "/Assets/Gambar Gamelan/Gamelan 3.jpg", title: "Gamelan 3", description: "Keindahan seni ukir pada tiang Gamelan." },
  { id: 4, src: "/Assets/Gambar Gamelan/Gamelan 4.jpg", title: "Gamelan 4", description: "Suasana ansambel Gamelan." },
  { id: 5, src: "/Assets/Gambar Gamelan/Gamelan 5.jpg", title: "Gamelan 5", description: "Berbagai instrumen yang melengkapi Gamelan." },
];

export default function GamelanInstrumenSection() {
  const [scrollIndex, setScrollIndex] = useState(0);
  const [showGongGallery, setShowGongGallery] = useState(false);

  const handleNext = () => {
    if (scrollIndex < gamelanInstruments.length - 4) {
      setScrollIndex(scrollIndex + 1);
    }
  };

  const handlePrev = () => {
    if (scrollIndex > 0) {
      setScrollIndex(scrollIndex - 1);
    }
  };

  if (showGongGallery) {
    return (
      <DetailGaleri 
        images={gongGalleryImages} 
        onClose={() => setShowGongGallery(false)} 
        initialImageId={1} 
      />
    );
  }

  return (
    <section id="instrumen" className="bg-[#f9f1e4] px-4 py-14 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto w-full max-w-[1210px]">

        {/* Header Row */}
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="space-y-2">
            <h2 className="font-['League_Spartan'] text-3xl font-bold text-[#4e0b11] sm:text-4xl md:text-5xl">
              Ragam Instrumen Gamelan
            </h2>
            <p className="max-w-[700px] font-['League_Spartan'] text-sm sm:text-lg text-[#4A332B]">
              Kenali instrumen-instrumen utama dalam ansambel gamelan Jawa beserta peran dan filosofinya
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
              disabled={scrollIndex >= gamelanInstruments.length - 4}
              className={`flex h-12 w-12 items-center justify-center rounded-lg border border-[#4e0b11] text-xl font-bold transition-all ${
                scrollIndex >= gamelanInstruments.length - 4
                  ? "border-stone-300 text-stone-400 bg-transparent cursor-not-allowed"
                  : "bg-[#4e0b11] text-white hover:bg-[#3d080d]"
              }`}
              aria-label="Next items"
            >
              &gt;
            </button>
          </div>
        </div>

        {/* Cards Carousel */}
        <div className="mt-12 overflow-hidden pb-8 pt-4 -mx-4 px-4">
          <div
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${scrollIndex * 290}px)` }}
          >
            {gamelanInstruments.map((item) => (
              <div
                key={item.id}
                className="w-[266px] shrink-0 rounded-[15px] border border-[#4e0b11] bg-white p-4 shadow-sm flex flex-col items-center text-center justify-between min-h-[420px]"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[10px] bg-[#d9d9d9] flex items-center justify-center">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>

                <h3 className="mt-6 font-['League_Spartan'] text-2xl font-bold text-[#4e0b11]">
                  {item.name}
                </h3>

                <p className="mt-3 font-['League_Spartan'] text-sm leading-relaxed text-stone-600">
                  {item.desc}
                </p>

                <button 
                  onClick={() => { if (item.id === 1) setShowGongGallery(true); }}
                  className="mt-6 w-full rounded-full border border-[#4e0b11] py-2 font-['League_Spartan'] text-base font-semibold text-[#4e0b11] transition-all hover:bg-[#4e0b11] hover:text-white active:scale-95"
                >
                  Lihat Detail
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
