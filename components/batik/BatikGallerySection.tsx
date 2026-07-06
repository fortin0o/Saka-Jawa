"use client";

import { useState } from "react";
import Image from "next/image";
import GalleryModal from "@/components/shared/GalleryModal";

const batikGallery = [
  { id: 1, title: "Batik Solo", image: "/Assets/Gambar-Batik/Batik-Solo/Solo2.webp" },
  { id: 2, title: "Batik Jogja", image: "/Assets/Gambar-Batik/Batik-Jogja/Jogja2.webp" },
  { id: 3, title: "Batik Pekalongan", image: "/Assets/Gambar-Batik/Batik-Pekalongan/Pekalongan2.webp" },
];

export default function BatikGallerySection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalImages = batikGallery.map((g) => ({
    id: g.id,
    src: g.image,
    alt: g.title,
  }));

  return (
    <section className="bg-[#f9f1e4] py-14 px-4 sm:px-6 md:px-12 lg:px-24 lg:py-20">
      <div className="mx-auto w-full max-w-[var(--container-lg)]">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="text-left space-y-2">
            <h2 className="font-['League_Spartan'] text-3xl sm:text-4xl font-bold text-[#4e0b11]">
              Galeri Batik
            </h2>
            <p className="max-w-[600px] font-['League_Spartan'] text-lg text-stone-700">
              Visualisasi keindahan ragam motif batik dari berbagai daerah di pulau Jawa.
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
          {batikGallery.map((gal) => (
            <div key={gal.id} className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg border border-stone-200">
              <Image
                src={gal.image}
                alt={gal.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
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
        title="Galeri Batik"
      />
    </section>
  );
}
