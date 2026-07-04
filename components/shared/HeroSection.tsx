"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export interface HeroAction {
  id: string;
  label: string;
  variant: "primary" | "secondary";
  href: string; // Ditambahkan agar tautan tombol bisa disesuaikan
}

export interface HeroContent {
  badge: {
    iconSrc: string;
    iconAlt: string;
    label: string;
  };
  headline: string;
  subheadline: string;
  description: string;
  actions: HeroAction[];
  image?: {
    src: string;
    alt: string;
  };
  images?: {
    src: string;
    alt: string;
  }[];
  dots?: {
    count: number;
    activeIndex: number;
  };
  imagePosition?: "left" | "right";
  bottomWaveSrc?: string; // Ditambahkan agar gambar gelombang bawah bisa disesuaikan
  customImageRender?: () => React.ReactNode;
}

interface HeroSectionProps {
  content: HeroContent;
}

export default function HeroSection({ content }: HeroSectionProps) {
  const { badge, headline, subheadline, description, actions, image, images, dots, bottomWaveSrc } = content;

  const [currentIndex, setCurrentIndex] = useState(dots?.activeIndex || 0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images]);

  const currentImage = images ? images[currentIndex] : image;
  const dotCount = images ? images.length : (dots?.count || 0);
  const activeDotIndex = images ? currentIndex : (dots?.activeIndex || 0);

  return (
    <section className="relative w-full overflow-hidden bg-white pt-8 pb-20 lg:py-24">
      {/* Background Ornaments */}
      <div className="absolute top-[12%] right-[6%] hidden h-[60px] w-[60px] animate-float opacity-[0.03] lg:block">
        <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30" r="28" stroke="#FFC832" strokeWidth="2" fill="none" />
          <circle cx="30" cy="30" r="14" stroke="#4E0B11" strokeWidth="1.5" fill="none" />
        </svg>
      </div>

      {/* Main Grid: Full width to allow flush-left image */}
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-0">
        
        {/* Column 1: Image */}
        <div className={`flex flex-col items-start w-full gap-5 lg:gap-6 ${content.imagePosition === 'right' ? 'order-1 lg:order-2 lg:items-end' : 'order-1'}`}>
          {content.customImageRender ? (
            content.customImageRender()
          ) : (
            <div 
              className={`relative shrink-0 w-[92%] sm:w-[90%] md:w-[85%] lg:w-[95%] xl:w-[92%] h-[240px] sm:h-[320px] md:h-[380px] lg:h-[420px] xl:h-[460px] min-h-[240px] sm:min-h-[320px] md:min-h-[380px] lg:min-h-[420px] xl:min-h-[460px] overflow-hidden shadow-[0_12px_40px_rgba(78,11,17,0.08),0_4px_12px_rgba(0,0,0,0.04)] ${
                content.imagePosition === 'right' 
                  ? 'rounded-l-full rounded-r-none' 
                  : 'rounded-r-full rounded-l-none'
              }`}
            >
              {currentImage && (
                <Image
                  src={currentImage.src}
                  alt={currentImage.alt}
                  fill
                  className="object-cover transition-opacity duration-500"
                  priority
                />
              )}
              <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-gold/5 via-transparent via-60% to-maroon/3" />
            </div>
          )}
          
          {/* Pagination Dots: Centered under the image */}
          <div className="flex w-[92%] sm:w-[90%] md:w-[85%] lg:w-[95%] xl:w-[92%] justify-center items-center gap-2">
            {Array.from({ length: dotCount }, (_, index) => {
              const isActive = index === activeDotIndex;

              return (
                <span
                  key={index}
                  onClick={() => {
                    if (images) setCurrentIndex(index);
                  }}
                  className={
                    isActive
                      ? "h-2.5 w-7 cursor-pointer rounded-[5px] bg-[#FFC832] opacity-100 transition-all duration-300"
                      : "h-2.5 w-2.5 cursor-pointer rounded-full bg-[#4E0B11] opacity-35 transition-all duration-300 hover:opacity-60"
                  }
                />
              );
            })}
          </div>
        </div>

        {/* Column 2: Text Content */}
        <div className={`w-full px-6 md:px-12 lg:px-0 ${content.imagePosition === 'right' ? 'order-2 lg:order-1 lg:pl-12 xl:pl-24' : 'order-2 lg:pr-12 xl:pr-24'}`}>
          <div className="mx-auto flex max-w-[540px] flex-col items-center text-center lg:mx-0 lg:items-start lg:text-left">
            
            {/* Badge */}
            <div className="inline-flex animate-fade-in-up items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-1.5 shadow-sm transition-all duration-300 hover:border-[#4E0B11] hover:shadow-[0_2px_8px_rgba(78,11,17,0.08)]">
              {badge.iconSrc && (
                <Image
                  src={badge.iconSrc}
                  alt={badge.iconAlt}
                  width={28}
                  height={28}
                  className="h-7 w-7 shrink-0 object-contain"
                />
              )}
              <span className="text-sm font-semibold tracking-wide text-gray-900">
                {badge.label}
              </span>
            </div>

            {/* Headline */}
            <h1 className="mt-6 animate-fade-in-up text-3xl sm:text-[2.5rem] leading-[1.1] font-bold tracking-tight text-black [animation-delay:0.1s] lg:text-[3rem] xl:text-[3.75rem]">
              {headline}
            </h1>

            {/* Subheadline */}
            <p className="mt-3 animate-fade-in-up text-lg sm:text-xl leading-snug font-semibold tracking-tight text-[#4E0B11] [animation-delay:0.2s] md:text-2xl">
              {subheadline}
            </p>

            {/* Description */}
            <p className="mt-4 animate-fade-in-up text-base leading-[1.8] text-gray-600 [animation-delay:0.3s]">
              {description}
            </p>

            {/* Actions */}
            <div className="mt-8 flex w-full flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              {actions.map((action) => {
                const isPrimary = action.variant === "primary";
                return (
                  <a
                    key={action.id}
                    href={action.href}
                    className={
                      isPrimary
                        ? "inline-flex items-center justify-center rounded-full bg-[#4E0B11] px-8 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#3A0810] hover:shadow-lg active:translate-y-0"
                        : "inline-flex items-center justify-center rounded-full border-[1.5px] border-[#4E0B11] bg-white px-8 py-3.5 text-sm font-semibold text-[#4E0B11] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#4E0B11]/5 hover:shadow-md active:translate-y-0"
                    }
                  >
                    {action.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Wave Divider */}
      {bottomWaveSrc && (
        <div className="absolute bottom-0 left-0 z-10 w-full leading-none pointer-events-none">
          <Image
            src={bottomWaveSrc}
            alt="Wave Border"
            width={1440}
            height={81}
            className="w-full h-auto object-cover min-h-[40px]"
            priority
          />
        </div>
      )}
    </section>
  );
}
