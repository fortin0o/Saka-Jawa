"use client";

import { useState } from "react";
import Image from "next/image";
import GalleryModal from "@/components/shared/GalleryModal";

const wayangGallery = [
  { id: 1, title: "Silsilah Pandawa & Kurawa", image: "/Assets/Gambar-Wayang/silsilahWayang.webp" },
  { id: 2, title: "Pewayangan", image: "/Assets/Gambar-Wayang/wayang1.webp" },
  { id: 3, title: "Wayang-wayang", image: "/Assets/Gambar-Wayang/wayang2.webp" },
  { id: 4, title: "Wayang Golek", image: "/Assets/Gambar-Wayang/wayangGolek.webp" },
];

export default function WayangGallerySection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalImages = wayangGallery.map((g) => ({
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
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#4e0b11] leading-tight">
              Galeri Wayang
            </h2>
            <p className="max-w-[600px] text-lg text-stone-700 font-normal leading-relaxed">
              Visualisasi pertunjukan, pusaka, serta tokoh-tokoh agung seni wayang kulit Jawa.
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
          {wayangGallery.slice(0, 3).map((gal) => (
            <div
              key={gal.id}
              className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg border border-stone-200 bg-gradient-to-br from-[#4e0b11] to-[#2a0608]"
            >
              <Image
                src={gal.image}
                alt={gal.title}
                fill
                className="object-cover object-top transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 pointer-events-none">
                <h4 className="text-xl font-bold text-white">
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
        title="Galeri Wayang"
      />
    </section>
  );
}