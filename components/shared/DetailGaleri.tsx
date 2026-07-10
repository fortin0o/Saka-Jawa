"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export interface GalleryImage {
  id: string | number;
  src: string;
  title: string;
  description: string;
  category?: string;
}

interface DetailGaleriProps {
  initialImageId?: string | number;
  images: GalleryImage[];
  onClose?: () => void;
  category?: string;
}

const Frame = ({
  image,
  className,
  onClick,
  fit = "cover",
}: {
  image?: GalleryImage;
  className?: string;
  onClick?: () => void;
  fit?: "cover" | "contain";
}) => (
  <div
    className={`relative bg-[#E0E0E0] p-2 md:p-3 rounded-2xl md:rounded-3xl shadow-2xl flex flex-col items-center group ${onClick ? 'cursor-pointer hover:bg-white transition-colors duration-300' : ''} ${className}`}
    onClick={onClick}
  >
    <div className="w-full flex-1 bg-gray-400 rounded-xl md:rounded-2xl overflow-hidden relative">
      {image ? (
        <Image
          src={image.src}
          alt={image.title}
          fill
          className={`transition-transform duration-700 group-hover:scale-105 ${
            fit === "contain" ? "object-contain" : "object-cover object-top"
          }`}
        />
      ) : (
        <div className="w-full h-full bg-gray-400" />
      )}
    </div>
    <div className="h-3 md:h-4 w-12 md:w-16 bg-gray-400 group-hover:bg-gray-300 rounded-full mt-2 md:mt-3 mb-1 shrink-0 transition-colors"></div>
  </div>
);

export default function DetailGaleri({ initialImageId, images, onClose, category }: DetailGaleriProps) {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [activeImageId, setActiveImageId] = useState(initialImageId || (images.length > 0 ? images[0].id : ""));
  const [prevInitialImageId, setPrevInitialImageId] = useState(initialImageId);

  if (initialImageId !== prevInitialImageId) {
    setPrevInitialImageId(initialImageId);
    if (initialImageId) setActiveImageId(initialImageId);
  }

  const currentIdx = images.findIndex((img) => img.id === activeImageId);
  const currentImage = currentIdx !== -1 ? images[currentIdx] : images[0];
  const otherImages = images.filter((img) => img.id !== currentImage?.id).slice(0, 4);

  useEffect(() => {
    // Kunci scroll halaman sepenuhnya saat DetailGaleri terbuka
    const html = document.documentElement;
    const body = document.body;
    const scrollY = window.scrollY;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    // Trick agar halaman tidak loncat saat overflow hidden diterapkan
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";

    const handleWheel = (e: WheelEvent) => {
      if (containerRef.current) {
        e.preventDefault();
        containerRef.current.scrollLeft += e.deltaY;
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      // Kembalikan scroll ke posisi semula saat DetailGaleri ditutup
      html.style.overflow = "";
      body.style.overflow = "";
      body.style.position = "";
      body.style.top = "";
      body.style.width = "";
      window.scrollTo(0, scrollY);

      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  const handleBack = useCallback(() => {
    if (onClose) {
      onClose();
    } else {
      router.back();
    }
  }, [onClose, router]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleBack();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [handleBack]);

  const handleImageClick = (id: string | number) => {
    setActiveImageId(id);
    // Auto scroll back to the start to see the main image
    if (containerRef.current) {
      containerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  if (!images || images.length === 0) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-[#4E0B11] overflow-x-auto overflow-y-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      style={{ msOverflowStyle: "none" }}
    >

      {/* Back Button */}
      <motion.button 
        initial={{ opacity: 0, x: -20 }} 
        animate={{ opacity: 1, x: 0 }} 
        className="fixed top-6 left-6 z-50 flex items-center px-6 py-2.5 bg-black/20 hover:bg-black/40 backdrop-blur-sm border border-white/10 text-white rounded-full shadow-lg transition-all"
        onClick={handleBack}
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Kembali
      </motion.button>

      {/* Horizontal Container */}
      <div className="flex h-full min-w-max pr-24">
        
        {/* Section 1: Main Content */}
        <motion.div
          key={`main-${activeImageId}`} // Force re-render animation when changing image
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-screen h-full flex items-center justify-center p-12 shrink-0"
        >
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 max-w-6xl w-full">
            {/* Featured Image Frame */}
            <div className="w-full max-w-[460px] aspect-square shrink-0">
              <Frame image={currentImage} className="w-full h-full" />
            </div>

            {/* Description */}
            <div className="flex-1 text-white max-w-xl">
              {/* Category Chip */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/50 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#FFC832]"></span>
                <span className="text-sm font-medium text-white tracking-wide">
                  {currentImage?.category || category || "Galeri Budaya"}
                </span>
              </div>

              <h1 className="text-4xl lg:text-[44px] font-extrabold mb-6 text-[#FFC832] leading-tight">
                {currentImage?.title}
              </h1>
              
              <p className="text-white/95 leading-relaxed mb-12 text-sm lg:text-[15px] font-medium">
                {currentImage?.description}
              </p>

              {/* Scroll hint */}
              <div className="flex items-center gap-4 text-white/90 mt-8">
                <span className="text-sm font-medium tracking-wide">Scroll ke kanan untuk melihat galeri lainnya</span>
                <motion.div
                  animate={{ x: [0, 15, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-12 h-[2px] bg-[#FFC832] rounded-full"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section 2: Gallery Grid */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-full flex items-center shrink-0 pl-12"
        >
          {/* Custom layout matching Figma exactly */}
          <div className="relative w-[1160px] h-[600px]">
            {/* Box 1: Top Left (Wide) */}
            {otherImages[0] && (
              <div className="absolute top-0 left-0 w-[440px] h-[280px]">
                <Frame image={otherImages[0]} className="w-full h-full" onClick={() => handleImageClick(otherImages[0].id)} />
              </div>
            )}

            {/* Box 2: Top Center (Smaller) */}
            {otherImages[1] && (
              <div className="absolute top-0 left-[460px] w-[320px] h-[280px]">
                <Frame image={otherImages[1]} className="w-full h-full" onClick={() => handleImageClick(otherImages[1].id)} />
              </div>
            )}

            {/* Box 3: Bottom Left (Very Wide) */}
            {otherImages[2] && (
              <div className="absolute top-[300px] left-0 w-[780px] h-[300px]">
                <Frame image={otherImages[2]} className="w-full h-full" onClick={() => handleImageClick(otherImages[2].id)} />
              </div>
            )}

            {/* Box 4: Right (Tall) */}
            {otherImages[3] && (
              <div className="absolute top-0 left-[800px] w-[360px] h-[600px]">
                <Frame image={otherImages[3]} className="w-full h-full" onClick={() => handleImageClick(otherImages[3].id)} />
              </div>
            )}
          </div>
        </motion.div>

      </div>
    </div>
  );
}