"use client";

import React, { useState } from "react";
import Image from "next/image";
import DetailGaleri from "../shared/DetailGaleri";

export default function BatikMotifSection() {
  const [selectedMotifId, setSelectedMotifId] = useState<string | null>(null);

  const motifs = [
    {
      id: "solo",
      title: "Motif Solo",
      desc: "Batik keraton Solo memiliki ciri khas warna soga (cokelat keemasan) yang hangat, melambangkan kerendahan hati dan kesederhanaan.",
      imageSrc: "/Assets/Gambar Batik/Batik Solo/Solo 1.webp",
    },
    {
      id: "jogja",
      title: "Motif Jogja",
      desc: "Batik Jogja dikenal dengan warna dasar putih bersih atau hitam tegas, mencerminkan ketegasan karakter, keberanian, dan kesucian jiwa.",
      imageSrc: "/Assets/Gambar Batik/Batik Jogja/Jogja 1.webp",
    },
    {
      id: "pekalongan",
      title: "Motif Pekalongan",
      desc: "Batik pesisiran kaya akan warna cerah dan motif flora fauna dinamis, melambangkan keterbukaan dan akulturasi budaya yang indah.",
      imageSrc: "/Assets/Gambar Batik/Batik Pekalongan/Pekalongan 1.webp",
    },
  ];

  // Data galeri per kota
  const galleryData: Record<string, typeof motifs[0] & { gallery: { id: string; src: string; title: string; description: string }[] }> = {
    solo: {
      ...motifs[0],
      gallery: [
        { id: "solo-1", src: "/Assets/Gambar Batik/Batik Solo/Solo 1.webp", title: "Batik Solo - Corak 1", description: motifs[0].desc },
        { id: "solo-2", src: "/Assets/Gambar Batik/Batik Solo/Solo 2.webp", title: "Batik Solo - Corak 2", description: motifs[0].desc },
        { id: "solo-3", src: "/Assets/Gambar Batik/Batik Solo/Solo 3.webp", title: "Batik Solo - Corak 3", description: motifs[0].desc },
        { id: "solo-4", src: "/Assets/Gambar Batik/Batik Solo/Solo 4.webp", title: "Batik Solo - Corak 4", description: motifs[0].desc },
        { id: "solo-5", src: "/Assets/Gambar Batik/Batik Solo/Solo 1.webp", title: "Batik Solo - Corak Utama", description: motifs[0].desc },
      ],
    },
    jogja: {
      ...motifs[1],
      gallery: [
        { id: "jogja-1", src: "/Assets/Gambar Batik/Batik Jogja/Jogja 1.webp", title: "Batik Jogja - Corak 1", description: motifs[1].desc },
        { id: "jogja-2", src: "/Assets/Gambar Batik/Batik Jogja/Jogja 2.webp", title: "Batik Jogja - Corak 2", description: motifs[1].desc },
        { id: "jogja-3", src: "/Assets/Gambar Batik/Batik Jogja/Jogja 3.webp", title: "Batik Jogja - Corak 3", description: motifs[1].desc },
        { id: "jogja-4", src: "/Assets/Gambar Batik/Batik Jogja/Jogja 4.webp", title: "Batik Jogja - Corak 4", description: motifs[1].desc },
        { id: "jogja-5", src: "/Assets/Gambar Batik/Batik Jogja/Jogja 1.webp", title: "Batik Jogja - Corak Utama", description: motifs[1].desc },
      ],
    },
    pekalongan: {
      ...motifs[2],
      gallery: [
        { id: "pekalongan-1", src: "/Assets/Gambar Batik/Batik Pekalongan/Pekalongan 1.webp", title: "Batik Pekalongan - Corak 1", description: motifs[2].desc },
        { id: "pekalongan-2", src: "/Assets/Gambar Batik/Batik Pekalongan/Pekalongan 2.webp", title: "Batik Pekalongan - Corak 2", description: motifs[2].desc },
        { id: "pekalongan-3", src: "/Assets/Gambar Batik/Batik Pekalongan/Pekalongan 3.webp", title: "Batik Pekalongan - Corak 3", description: motifs[2].desc },
        { id: "pekalongan-4", src: "/Assets/Gambar Batik/Batik Pekalongan/Pekalongan 4.webp", title: "Batik Pekalongan - Corak 4", description: motifs[2].desc },
        { id: "pekalongan-5", src: "/Assets/Gambar Batik/Batik Pekalongan/Pekalongan 1.webp", title: "Batik Pekalongan - Corak Utama", description: motifs[2].desc },
      ],
    },
  };

  return (
    <>
      <section
        className="relative overflow-hidden px-4 py-14 sm:px-6 bg-[#F9F1E4] md:px-12 lg:px-24 lg:py-28"
        id="batik-motif"
      >
        <div className="mx-auto w-full max-w-[var(--container-lg)] relative z-10">
          
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-[#4E0B11] mb-3">
              Ragam Motif Batik
            </h2>
            <p className="text-sm sm:text-base font-medium text-gray-800 max-w-2xl">
              Kenali beberapa motif khas dari berbagai daerah di pulau Jawa dan pesonanya dalam menciptakan harmoni budaya
            </p>
          </div>

          {/* Motifs Grid - Exactly 3 Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {motifs.map((motif) => (
              <article
                key={motif.id}
                className="flex flex-col items-center border border-[#4E0B11] rounded-2xl p-5 md:p-6 text-center bg-transparent"
              >
                {/* Image Container */}
                <div className="w-full aspect-[4/3] bg-[#D9D9D9] rounded-xl overflow-hidden mb-6 relative">
                  <Image
                    src={motif.imageSrc}
                    alt={motif.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>

                {/* Text Details */}
                <h3 className="text-xl font-bold text-[#4E0B11] mb-3">
                  {motif.title}
                </h3>
                
                <p className="text-[13px] md:text-[14px] font-medium text-gray-800 leading-relaxed mb-8 px-2">
                  {motif.desc}
                </p>

                {/* Detail Button */}
                <button 
                  onClick={() => setSelectedMotifId(motif.id)}
                  className="mt-auto px-8 py-2.5 border border-[#4E0B11] text-[#4E0B11] font-bold rounded-full text-sm hover:bg-[#4E0B11] hover:text-[#F9F1E4] transition-colors"
                >
                  Lihat Detail
                </button>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* Galeri Modal Overlay */}
      {selectedMotifId && (
        <DetailGaleri 
          initialImageId={`${selectedMotifId}-1`} 
          images={galleryData[selectedMotifId]?.gallery || []} 
          onClose={() => setSelectedMotifId(null)} 
        />
      )}
    </>
  );
}
