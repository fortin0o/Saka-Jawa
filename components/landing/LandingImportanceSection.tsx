"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

// Characters to scramble through — digits + common symbols
const SCRAMBLE_CHARS = "0123456789#@%!&?";

/** Returns a random char from SCRAMBLE_CHARS */
function randomChar() {
  return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
}

/**
 * useScramble: rapidly cycles random chars per character position,
 * then locks each position to the real character one-by-one.
 * Non-digit / non-alpha chars (e.g. "+", "K") are preserved as-is from the start.
 */
function useScramble(target: string, trigger: boolean, duration = 900) {
  // ✅ Initialize with the real value so SSR & client render match (no hydration error)
  const [display, setDisplay] = useState(target);

  useEffect(() => {
    if (!trigger) return;

    const totalFrames = Math.round((duration / 1000) * 30); // ~30fps
    let frame = 0;
    let rafId: number;

    const tick = () => {
      frame++;
      const progress = frame / totalFrames; // 0 → 1

      // How many chars are "locked" so far (left → right)
      const locked = Math.floor(progress * target.length);

      const next = target
        .split("")
        .map((char, i) => {
          if (i < locked) return char;            // already settled
          if (!/[0-9A-Za-z]/.test(char)) return char; // punctuation: always real
          return randomChar();                    // still scrambling
        })
        .join("");

      setDisplay(next);

      if (frame < totalFrames) {
        rafId = requestAnimationFrame(tick);
      } else {
        setDisplay(target); // guarantee final value
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [target, trigger, duration]);

  return display;
}

function StatCard({
  number,
  title,
  description,
  duration = 900,
}: {
  number: string;
  title: string;
  description: string;
  duration?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  // once:true → fires only the first time it enters view
  const inView = useInView(ref, { once: true, amount: 0.4 });

  const scrambled = useScramble(number, inView, duration);

  return (
    <div ref={ref} className="relative group cursor-pointer min-h-[260px]">
      {/* Shadow Backdrop */}
      <div className="absolute inset-0 bg-[#E8D4D6] rounded-3xl transform translate-x-4 translate-y-4 md:translate-x-5 md:translate-y-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Main Card */}
      <div className="relative bg-[#B4979A]/80 group-hover:bg-[#FFC832] rounded-3xl p-8 md:p-10 text-center flex flex-col items-center justify-center shadow-xl z-10 h-full transition-all duration-300 origin-center group-hover:-rotate-6 group-hover:-translate-y-2 group-hover:-translate-x-1">
        <h3 className="text-4xl md:text-5xl font-extrabold text-[#111] mb-2 tracking-tight min-h-[1.2em] tabular-nums leading-tight">
          {scrambled}
        </h3>
        <h4 className="text-[17px] font-bold text-[#111] mb-6">{title}</h4>
        <p className="text-[13px] md:text-[14px] text-[#222] leading-relaxed font-medium px-2">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function LandingImportanceSection() {
  const cards = [
    {
      number: "200K+",
      title: "Perajin Batik",
      description:
        "Tradisi membatik terus hidup melalui tangan para pengrajin Indonesia",
    },
    {
      number: "3",
      title: "Diakui UNESCO",
      description:
        "Batik, Wayang, dan Gamelan diakui sebagai kekayaan budaya dunia",
    },
    {
      number: "1000+",
      title: "Tahun Tradisi",
      description:
        "Warisan cerita dan filosofi yang bertahan lintas generasi.",
    },
  ];

  return (
    <section
      className="py-24 px-6 md:px-12 lg:px-24 w-full"
      style={{
        background: "radial-gradient(ellipse at 50% 50%, #5B0917 0%, #2D0F12 94%)",
      }}
    >
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-[40px] font-semibold text-white mb-4 text-center leading-tight">
          Mengapa Warisan Budaya Penting?
        </h2>
        <p className="text-white/80 text-center max-w-xl text-[15px] md:text-base leading-relaxed mb-16 font-normal">
          Warisan budaya Jawa tidak hanya hidup dalam tradisi,
          <br className="hidden md:block" />
          tetapi juga diakui dan dihargai oleh dunia.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full max-w-5xl mx-auto">
          {cards.map((card, idx) => (
            <StatCard key={idx} {...card} duration={1500 + idx * 1000} />
          ))}
        </div>
      </div>
    </section>
  );
}
