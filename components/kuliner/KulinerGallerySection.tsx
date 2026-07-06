"use client";

import { useState } from "react";
import Image from "next/image";
import GalleryModal from "@/components/shared/GalleryModal";

const kulinerGallery = [
  { id: 1, title: "Chef Arnold Masak Rawon", image: "/Assets/Gambar-Kuliner/galeri/Chef-Arnold-Masak-Rawon.avif" },
  { id: 2, title: "Pembuatan Kupat Tahu", image: "/Assets/Gambar-Kuliner/galeri/Pembuatan-Kupat-Tahu.avif" },
  { id: 3, title: "Pembuatan Soto Lamongan", image: "/Assets/Gambar-Kuliner/galeri/Pembuatan-Soto-Lamongan.avif" },
  { id: 4, title: "Sistem Seblak Prasmanan", image: "/Assets/Gambar-Kuliner/galeri/Sistem-Seblak-Prasmanan.avif" },
];

export default function KulinerGallerySection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalImages = kulinerGallery.map((g) => ({
    id: g.id,
    src: g.image,
    alt: g.title,
  }));
  
  return (
    <section className="bg-[#f9f1e4] py-20 px-6 md:px-12 lg:px-24">
      <div className="mx-auto w-full max-w-[var(--container-lg)]">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="text-left space-y-2">
            <h2 className="font-['League_Spartan'] text-4xl font-bold text-[#4e0b11]">
              Galeri Kuliner
            </h2>
            <p className="max-w-[600px] font-['League_Spartan'] text-lg text-stone-700">
              Visualisasi sajian khas, rempah-rempah pilihan, serta suasana budaya kuliner Jawa yang otentik.
            </p>
          </div>
          <div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 rounded-full border border-[#4e0b11] px-6 py-2.5 font-semibold text-[#4e0b11] transition-colors hover:bg-[#4e0b11] hover:text-[#f9f1e4] cursor-pointer"
            >
              <span>Lihat Semua Galeri</span>
              <span>→</span>
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-3">
          {kulinerGallery.slice(0, 3).map((gal) => (
            <div key={gal.id} className="group relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg border border-stone-200">
              <Image
                src={gal.image}
                alt={gal.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 pointer-events-none">
                <h4 className="font-['League_Spartan'] text-xl font-bold text-white">
                  {gal.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

      </div>

      <GalleryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={modalImages}
        title="Galeri Kuliner"
      />
    </section>
  );
}
