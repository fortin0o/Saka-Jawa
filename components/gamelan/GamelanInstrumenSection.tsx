"use client";

import { useState } from "react";
import Image from "next/image";
import DetailGaleri from "../shared/DetailGaleri";

const gamelanInstruments = [
  {
    id: 1,
    name: "Gong Ageng",
    image: "/Assets/Gambar-Gamelan/Gong.webp",
    desc: "Instrumen terbesar dalam gamelan yang menandai awal dan akhir sebuah gendhing, melambangkan keagungan dan kesempurnaan.",
  },
  {
    id: 2,
    name: "Kendang",
    image: "/Assets/Gambar-Gamelan/Kendang.webp",
    desc: "Drum dua sisi yang berfungsi sebagai pemimpin tempo dan irama, menghubungkan seluruh instrumen menjadi satu kesatuan harmonis.",
  },
  {
    id: 3,
    name: "Bonang",
    image: "/Assets/Gambar-Gamelan/Bonang.webp",
    desc: "Rangkaian gong kecil yang dimainkan dengan pemukul lunak, menghasilkan melodi utama yang mengalun indah dan merdu.",
  },
  {
    id: 4,
    name: "Saron",
    image: "/Assets/Gambar-Gamelan/Saron.webp",
    desc: "Instrumen bilah logam yang dipukul untuk menghasilkan nada pokok, menjadi fondasi melodi dalam keseluruhan ansambel.",
  },
  {
    id: 5,
    name: "Gender",
    image: "/Assets/Gambar-Gamelan/Gender.webp",
    desc: "Bilah logam tipis yang digantung di atas tabung resonator, menghasilkan suara lembut dan mistis yang khas gamelan Jawa.",
  },
];

const gongGalleryImages = [
  { id: 1, src: "/Assets/Gambar-Gamelan/Gamelan1.webp", title: "Gamelan 1", description: "Potret instrumen Gamelan Jawa.Instrumen terbesar dalam gamelan yang menandai awal dan akhir sebuah gendhing, melambangkan keagungan dan kesempurnaan" },
  { id: 2, src: "/Assets/Gambar-Gamelan/Gamelan2.webp", title: "Gamelan 2", description: "Detail perangkat Gamelan." },
  { id: 3, src: "/Assets/Gambar-Gamelan/Gamelan3.webp", title: "Gamelan 3", description: "Keindahan seni ukir pada tiang Gamelan." },
  { id: 4, src: "/Assets/Gambar-Gamelan/Gamelan4.webp", title: "Gamelan 4", description: "Suasana ansambel Gamelan." },
  { id: 5, src: "/Assets/Gambar-Gamelan/Gamelan5.webp", title: "Gamelan 5", description: "Berbagai instrumen yang melengkapi Gamelan." },
];

export default function GamelanInstrumenSection() {
  const [scrollIndex, setScrollIndex] = useState(0);
  const [showGongGallery, setShowGongGallery] = useState(false);

  const handleNext = () => {
    if (scrollIndex < gamelanInstruments.length - 1) {
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
        category="Gong Ageng"
      />
    );
  }

  return (
    <section id="instrumen" className="bg-[#f9f1e4] px-4 py-14 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto w-full max-w-[1210px]">

        {/* Header Row */}
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold text-[#4e0b11] sm:text-4xl md:text-5xl leading-tight">
              Ragam Instrumen Gamelan
            </h2>
            <p className="max-w-[700px] text-sm sm:text-lg text-[#4A332B] font-normal leading-relaxed">
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
              disabled={scrollIndex >= gamelanInstruments.length - 3}
              className={`flex h-12 w-12 items-center justify-center rounded-lg border border-[#4e0b11] text-xl font-bold transition-all ${
                scrollIndex >= gamelanInstruments.length - 3
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
            style={{ transform: `translateX(-${scrollIndex * 344}px)` }}
          >
            {gamelanInstruments.map((item) => (
              <article
                key={item.id}
                className="w-[320px] shrink-0 flex flex-col items-center border border-[#4E0B11] rounded-2xl p-5 md:p-6 text-center bg-transparent"
              >
                {/* Image Container */}
                <div className="w-full aspect-[4/3] bg-[#D9D9D9] rounded-xl overflow-hidden mb-6 relative">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    unoptimized={item.image.endsWith('.webp') || item.image.endsWith('.jpg') || item.image.endsWith('.png')}
                  />
                </div>

                {/* Text Details */}
                <h3 className="text-xl font-semibold text-[#4E0B11] mb-3 leading-tight">
                  {item.name}
                </h3>
                
                <p className="text-[13px] md:text-[14px] font-medium text-gray-800 leading-relaxed mb-8 px-2">
                  {item.desc}
                </p>

                {/* Detail Button */}
                <button 
                  onClick={() => { if (item.id === 1) setShowGongGallery(true); }}
                  className="mt-auto px-8 py-2.5 border border-[#4E0B11] text-[#4E0B11] font-bold rounded-full text-sm hover:bg-[#4E0B11] hover:text-[#F9F1E4] transition-colors"
                >
                  Lihat Detail
                </button>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
