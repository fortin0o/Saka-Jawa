"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const heroLayers = {
  base: "/Assets/Dasaran Hero.svg",
  mountain: "/Assets/Gunung Hero.svg",
  trees: "/Assets/Pepohonan Hero.svg",
  gamelan: "/Assets/Gamelan Hero.svg",
  kelir: "/Assets/Kelir Wayang Hero.svg",
  logo: "/Assets/Logo Utama.svg",
  chatbot: "/Assets/Chatbot Abdi Dalem.svg",
};

const navLeft = [
  { label: "Beranda", href: "/" },
  { label: "Kekayaan Alam", href: "#kekayaan-alam" },
];

const navRight = [
  { label: "Permainan", href: "#permainan" },
  { label: "Tentang Kami", href: "#tentang-kami" },
];

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
      unoptimized
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
      unoptimized
      className={`pointer-events-none h-auto w-full select-none ${className}`}
    />
  );
}

export default function LandingHeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const mountainRef = useRef<HTMLDivElement>(null);
  const gamelanRef = useRef<HTMLDivElement>(null);
  const kelirRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;

    const setLayerTransforms = () => {
      const hero = heroRef.current;

      if (!hero) return;

      const rect = hero.getBoundingClientRect();
      const progress = Math.min(
        Math.max(-rect.top / Math.max(rect.height, 1), 0),
        1,
      );

      if (mountainRef.current) {
        mountainRef.current.style.transform = `translate3d(0, ${progress * -34}px, 0) scale(${
          1 + progress * 0.025
        })`;
      }

      if (gamelanRef.current) {
        gamelanRef.current.style.transform = `translate3d(${progress * -30}px, ${
          progress * -74
        }px, 0) scale(${1 + progress * 0.04})`;
      }

      if (kelirRef.current) {
        kelirRef.current.style.transform = `translate3d(${progress * 28}px, ${
          progress * -86
        }px, 0) scale(${1 + progress * 0.045})`;
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
      className="relative isolate h-[92svh] min-h-[560px] overflow-hidden bg-[#d8a942] text-white"
      aria-labelledby="landing-hero-title"
    >
      <div className="absolute inset-0 z-0">
        <LayerImage src={heroLayers.base} eager />
      </div>

      <div className="absolute inset-0 z-5 bg-[radial-gradient(circle_at_50%_42%,rgba(255,244,211,0.75)_0%,rgba(236,197,103,0.34)_28%,rgba(216,169,66,0)_56%)]" />

      <div className="absolute left-1/2 bottom-[28%] z-10 w-[30vw] max-w-[320px] min-w-[160px] -translate-x-1/2 sm:bottom-[29%] sm:w-[22vw]">
        <div ref={mountainRef} className="will-change-transform">
          <ObjectImage src={heroLayers.mountain} />
        </div>
      </div>

      <div className="absolute inset-0 z-20">
        <LayerImage src={heroLayers.trees} eager />
      </div>

      <div className="absolute bottom-[4%] left-[-15%] z-30 w-[76vw] max-w-[520px] sm:left-[1%] sm:w-[44vw] lg:left-[4%] lg:w-[40vw]">
        <div ref={gamelanRef} className="will-change-transform">
          <ObjectImage src={heroLayers.gamelan} />
        </div>
      </div>

      <div className="absolute right-[-23%] bottom-[2%] z-40 w-[82vw] max-w-[500px] sm:right-[-5%] sm:w-[43vw] lg:right-[-1%] lg:w-[36vw]">
        <div ref={kelirRef} className="will-change-transform">
          <ObjectImage src={heroLayers.kelir} />
        </div>
      </div>

      <header className="absolute left-1/2 top-5 z-60 w-full max-w-[860px] -translate-x-1/2 px-5 sm:top-8">
        <nav
          className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 text-[0.8rem] font-bold text-white drop-shadow-[0_2px_8px_rgba(72,33,8,0.35)] sm:text-base"
          aria-label="Navigasi utama"
        >
          <div className="flex min-w-0 flex-wrap items-center justify-end gap-x-5 gap-y-2 sm:gap-x-10">
            {navLeft.map((item) => (
              <Link key={item.label} href={item.href} className="transition-opacity hover:opacity-75">
                {item.label}
              </Link>
            ))}
          </div>

          <Link
            href="/"
            aria-label="Saka Jawa"
            className="relative block h-[54px] w-[48px] sm:h-[70px] sm:w-[61px]"
          >
            <Image
              src={heroLayers.logo}
              alt="Saka Jawa"
              fill
              sizes="64px"
              loading="eager"
              fetchPriority="high"
              unoptimized
              className="object-contain"
            />
          </Link>

          <div className="flex min-w-0 flex-wrap items-center justify-start gap-x-5 gap-y-2 sm:gap-x-10">
            {navRight.map((item) => (
              <Link key={item.label} href={item.href} className="transition-opacity hover:opacity-75">
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      <div className="absolute left-1/2 top-[43%] z-50 w-[min(92vw,820px)] -translate-x-1/2 -translate-y-1/2 text-center">
        <h1
          id="landing-hero-title"
          className="text-[clamp(2.25rem,4.7vw,4.25rem)] leading-[0.92] font-black text-[#5a1020] drop-shadow-[0_3px_0_rgba(255,218,133,0.2)]"
        >
          Jelajahi Jiwa Jawa,
          <br />
          Rasakan Warisan
          <br />
          Yang Hidup
        </h1>
      </div>

      <Link
        href="#abdi-dalem"
        className="absolute right-[3.5%] bottom-[3.5%] z-60 flex items-end transition-transform duration-300 hover:-translate-y-1"
      >
        <span className="mb-3 rounded-full bg-[#ffc62e] px-6 py-2.5 text-center text-[0.72rem] leading-none font-bold text-[#3a0810] shadow-[0_10px_24px_rgba(80,38,9,0.22)] sm:text-sm">
          Tanya Kepada
          <span className="block text-[1.1rem] leading-none font-black sm:text-[1.45rem]">
            ABDI DALEM
          </span>
        </span>
        <span className="relative -ml-3 block h-[78px] w-[45px] sm:h-[104px] sm:w-[60px]">
          <Image
            src={heroLayers.chatbot}
            alt=""
            fill
            sizes="64px"
            loading="eager"
            unoptimized
            className="object-contain"
          />
        </span>
      </Link>
    </section>
  );
}
