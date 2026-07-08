"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export interface GalleryImage {
  id: string | number;
  src: string;
  alt: string;
}

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: GalleryImage[];
  title?: string;
}

export default function GalleryModal({ 
  isOpen, 
  onClose, 
  images, 
  title = "Semua Galeri" 
}: GalleryModalProps) {
  // Prevent scrolling on the body when the modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-fade-in">
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-6xl max-h-[90vh] rounded-[2rem] overflow-hidden shadow-2xl flex flex-col animate-scale-in"
        style={{ backgroundColor: "#F9F1E4" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 md:px-8 border-b border-maroon/10 shrink-0">
          <h2 className="text-2xl md:text-3xl font-semibold text-maroon leading-tight">{title}</h2>
          <button 
            onClick={onClose}
            className="flex items-center justify-center w-10 h-10 bg-[#3E0B10] rounded-full hover:bg-[#3E0B10] transition-colors shadow-sm focus:outline-none focus:ring-4 focus:ring-red-500/30 group"
            aria-label="Tutup Galeri"
          >
            <X className="w-5 h-5 text-white group-hover:rotate-90 transition-transform duration-300" strokeWidth={2.5} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {images.map((img) => (
              <div 
                key={img.id} 
                className="relative aspect-square rounded-2xl overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-300 bg-black/5"
              >
                <Image 
                  src={img.src} 
                  alt={img.alt} 
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                {/* Optional overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-medium text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 leading-relaxed">
                    {img.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {images.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-maroon/60 h-full">
              <p className="text-lg font-normal leading-relaxed">Belum ada gambar yang tersedia.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
