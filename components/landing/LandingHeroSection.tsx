"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Link from "next/link";
const heroLayers = {
  base: "/Assets/DasaranHero.webp",
  mountain: "/Assets/GunungHero.svg",
  trees: "/Assets/PepohonanHero.svg",
  gamelan: "/Assets/GamelanHero.svg",
  kelir: "/Assets/KelirWayangHero.webp",
  logo: "/Assets/LogoUtama.svg",
  chatbot: "/Assets/ChatbotAbdiDalem.webp",
};



function LayerImage({
  src,
  className = "",
  eager = false,
}: {
  src: string;
  className?: string;
  eager?: boolean;
}) {
  return (
    <Image
      src={src}
      alt=""
      fill
      sizes="100vw"
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : "auto"}
      className={`pointer-events-none select-none object-cover ${className}`}
    />
  );
}

function ObjectImage({ src, className = "" }: { src: string; className?: string }) {
  return (
    <Image
      src={src}
      alt=""
      width={1920}
      height={1080}
      sizes="(max-width: 768px) 70vw, 45vw"
      loading="eager"
      className={`pointer-events-none h-auto w-full select-none ${className}`}
    />
  );
}

export default function LandingHeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const mountainRef = useRef<HTMLDivElement>(null);
  const gamelanRef = useRef<HTMLDivElement>(null);
  const kelirRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;

    const setLayerTransforms = () => {
      const hero = heroRef.current;

      if (!hero) return;

      const rect = hero.getBoundingClientRect();
      const scrollY = Math.max(0, -rect.top);
      const progress = Math.min(scrollY / Math.max(rect.height, 1), 1);

      if (mountainRef.current) {
        const isMobile = window.innerWidth < 640;
        const translateY = scrollY * (isMobile ? -0.03 : -0.120);
        const scaleVal = 1 + progress * (isMobile ? 1.5 : 1);
        mountainRef.current.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scaleVal})`;
      }

      if (gamelanRef.current) {
        gamelanRef.current.style.transform = `translate3d(0, ${scrollY * 0.3}px, 0)`;
      }

      if (kelirRef.current) {
        kelirRef.current.style.transform = `translate3d(0, ${scrollY * 0.3}px, 0)`;
      }

      if (textRef.current) {
        textRef.current.style.transform = `translate3d(0, ${scrollY}px, 0)`;
      }
    };

    const requestUpdate = () => {
      if (frame) return;

      frame = window.requestAnimationFrame(() => {
        frame = 0;
        setLayerTransforms();
      });
    };

    setLayerTransforms();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative isolate h-[100svh] min-h-[560px] overflow-hidden bg-[#F9F1E4] text-white"
      aria-labelledby="landing-hero-title"
    >
      <div className="pointer-events-none absolute inset-0 z-20 origin-bottom scale-100 sm:scale-100 sm:scale-y-[0.55] lg:scale-y-[0.75]">
        <LayerImage src={heroLayers.base} eager className="object-[60%_bottom] sm:object-bottom" />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(255,244,211,0.75)_0%,rgba(236,197,103,0.34)_28%,rgba(216,169,66,0)_56%)]" />

      <div className="pointer-events-none absolute left-1/2 bottom-[28%] z-10 w-[45vw] max-w-[480px] min-w-[240px] -translate-x-1/2 sm:bottom-[8%] sm:w-[35vw] lg:w-[90vw]">
        <div ref={mountainRef} className="will-change-transform origin-bottom">
          <ObjectImage src={heroLayers.mountain} />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 z-50">
        <LayerImage src={heroLayers.trees} eager className="object-[55%_bottom] sm:object-bottom" />
      </div>

      <div className="pointer-events-none absolute bottom-[-1%] left-[-15%] z-40 w-[76vw] max-w-[520px] hidden sm:block sm:left-[1%] sm:w-[44vw] lg:left-[4%] lg:w-[40vw]">
        <div ref={gamelanRef} className="will-change-transform">
          <ObjectImage src={heroLayers.gamelan} />
        </div>
      </div>

      <div className="pointer-events-none absolute right-[-23%] bottom-[2%] z-30 w-[74vw] max-w-[460px] hidden sm:block sm:right-[-5%] sm:w-[38vw] lg:right-[4%] lg:w-[32vw]">
        <div ref={kelirRef} className="will-change-transform">
          <ObjectImage src={heroLayers.kelir} />
        </div>
      </div>



      <div className="absolute left-1/2 top-[44%] z-0 w-[min(92vw,820px)] -translate-x-1/2 -translate-y-1/2 text-center">
        <div ref={textRef} className="will-change-transform">
          <h1
            id="landing-hero-title"
            className="text-[2.25rem] sm:text-[clamp(2.25rem,4.7vw,4.25rem)] leading-[1] sm:leading-[0.92] font-black text-[#512402] drop-shadow-[0_4px_0_#FFCA98] leading-tight"
          >
            <span className="block sm:hidden">
              Jelajahi Jiwa
              <br />
              Jawa, Rasakan
              <br />
              Warisan Yang
              <br />
              Hidup
            </span>
            <span className="hidden sm:block">
              Jelajahi Jiwa Jawa,
              <br />
              Rasakan Warisan
              <br />
              Yang Hidup
            </span>
          </h1>
          
          <div className="mt-4 flex flex-row items-center justify-center gap-4 sm:gap-4">
            <button 
              onClick={() => document.getElementById('explore-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="rounded-full border-2 border-[#512402] px-6 py-3 text-sm font-bold text-[#512402] shadow-sm transition-colors hover:bg-[#512402] hover:text-[#F9F1E4] md:px-8 md:py-2 md:text-base cursor-pointer active:scale-98 transition-transform duration-300">
              Jelajahi Kami
            </button>
            <Link 
              href="/tentang-kami"
              className="flex items-center justify-center rounded-full border-2 border-[#ffc62e] bg-[#ffc62e] px-6 py-3 text-sm font-bold text-[#5B0917] shadow-sm transition-colors md:px-8 md:py-2 md:text-base hover:scale-103 cursor-pointer active:scale-98 transition-transform duration-300">
              Tentang Kami
            </Link>
          </div>
        </div>
      </div>


    </section>
  );
}
