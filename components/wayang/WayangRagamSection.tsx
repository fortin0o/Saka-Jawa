"use client";

import { useState } from "react";
import Image from "next/image";
import DetailGaleri from "../shared/DetailGaleri";

const wayangCharacters = [
  { id: 1, name: "Wayang Kulit", image: "/Assets/Gambar-Wayang/wayangKulit.webp", desc: "Wayang paling ikonik dari Jawa Tengah, Yogyakarta, dan Jawa Timur. Terbuat dari kulit kerbau yang ditatah dan diwarnai, dimainkan dengan bayangan di balik kelir diterangi lampu." }    ,
  { id: 2, name: "Wayang Golek", image: "/Assets/Gambar-Wayang/wayangGolek.webp", desc: "Khas tanah Sunda, Jawa Barat. Berbeda dari wayang kulit, ini boneka kayu tiga dimensi yang bisa dilihat langsung wujudnya tanpa bayangan." },
  { id: 3, name: "Wayang Wong", image: "/Assets/Gambar-Wayang/wayangOrang.webp", desc: "Pertunjukan wayang yang diperankan langsung oleh manusia, lengkap dengan kostum, tarian, dan dialog. Berkembang pesat di lingkungan keraton Surakarta dan Yogyakarta." },
  { id: 4, name: "Wayang Klithik", image: "/Assets/Gambar-Wayang/wayangKlithik.webp", desc: "Terbuat dari kayu pipih, lebih tipis dari wayang golek. Biasa membawakan cerita-cerita pasca-Majapahit seperti Damarwulan. Berkembang di pesisir utara Jawa Timur." },
  { id: 5, name: "Wayang Beber", image: "/Assets/Gambar-Wayang/wayangBeber.webp", desc: "Salah satu bentuk wayang tertua di Jawa, berupa gulungan kertas atau kain panjang bergambar adegan cerita, dibeberkan sedikit demi sedikit sambil dalang bertutur." },
];

export default function WayangRagamSection() {
  const [scrollIndex, setScrollIndex] = useState(0);
  const [selectedWayangId, setSelectedWayangId] = useState<number | null>(null);

  const wayangKulitGallery = [
    { id: "wk-1", src: "/Assets/Gambar-Wayang/Yudhistira.webp", title: "Yudhistira", description: "Putra sulung Pandawa yang berwatak sabar, jujur, adil, dan menjunjung tinggi kebenaran tanpa pernah berbohong." },
    { id: "wk-2", src: "/Assets/Gambar-Wayang/Bima.webp", title: "Bima Sena", description: "Tokoh Pandawa kedua yang gagah berani, berbadan besar, memiliki kuku Pancanaka, dan setia pada kebenaran." },
    { id: "wk-3", src: "/Assets/Gambar-Wayang/Arjuna.webp", title: "Arjuna", description: "Putra penengah Pandawa yang tampan, ahli memanah, dan memiliki pusaka Pasopati serta keris Pulanggeni." },
    { id: "wk-4", src: "/Assets/Gambar-Wayang/Nakula.webp", title: "Nakula", description: "Salah satu dari saudara kembar putra Madrim, ahli dalam pengobatan dan ilmu kesaktian." },
    { id: "wk-5", src: "/Assets/Gambar-Wayang/Sadewa.webp", title: "Sadewa", description: "Saudara kembar Nakula, ahli dalam perbintangan dan memiliki ilmu kesaktian yang luar biasa." },
    { id: "wk-6", src: "/Assets/Gambar-Wayang/gatotkaca.webp", title: "Gatotkaca", description: "Ksatria otot kawat balung wesi, putra Bima yang memiliki kesaktian luar biasa hingga mampu terbang tanpa sayap." },
  ];

  const handleNext = () => {
    if (scrollIndex < wayangCharacters.length - 1) {
      setScrollIndex(scrollIndex + 1);
    }
  };

  const handlePrev = () => {
    if (scrollIndex > 0) {
      setScrollIndex(scrollIndex - 1);
    }
  };

  return (
    <>
      <section id="ragam" className="bg-[#f9f1e4] px-4 py-14 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto w-full max-w-[1210px]">
        
        {/* Header Row */}
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold text-[#4e0b11] sm:text-4xl md:text-5xl leading-tight">
              Ragam Wayang
            </h2>
            <p className="max-w-[700px] text-sm sm:text-lg text-[#4A332B] font-normal leading-relaxed">
              Kenali macam-macam pewayangan dan karakteristik mereka yang penuh makna
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
              disabled={scrollIndex >= wayangCharacters.length - 3}
              className={`flex h-12 w-12 items-center justify-center rounded-lg border border-[#4e0b11] text-xl font-bold transition-all ${
                scrollIndex >= wayangCharacters.length - 3 
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
            {wayangCharacters.map((item) => (
              <article 
                key={item.id}
                className="w-[320px] shrink-0 flex flex-col items-center border border-[#4E0B11] rounded-2xl p-5 md:p-6 text-center bg-transparent"
              >
                {/* Image Container */}
                <div className="w-full aspect-[4/3] bg-[#D9D9D9] rounded-xl overflow-hidden mb-6 relative">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
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
                  onClick={() => {
                    if (item.id === 1) setSelectedWayangId(item.id);
                  }}
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

      {/* Galeri Modal Overlay */}
      {selectedWayangId === 1 && (
        <DetailGaleri 
          initialImageId="wk-1" 
          images={wayangKulitGallery} 
          onClose={() => setSelectedWayangId(null)} 
          category="Wayang Kulit"
        />
      )}
    </>
  );
}
