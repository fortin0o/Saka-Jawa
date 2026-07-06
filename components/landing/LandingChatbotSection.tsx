"use client";

// Menggunakan Image dari Next.js secara benar
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function useTypewriter(text: string, speed = 30, trigger = true) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!trigger) return;
    
    // Wrap state resets in setTimeout to prevent synchronous setState within the effect body
    const timeoutId = setTimeout(() => {
      setDisplayed("");
      setDone(false);
    }, 0);
    
    let i = 0;
    const id = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        setDone(true);
        clearInterval(id);
      }
    }, speed);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(id);
    };
  }, [text, speed, trigger]);

  return { displayed, done };
}

export default function LandingChatbotSection() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const heading = "Sugeng Rawuh!";
  const paragraph =
    "Kenalkan, aku Suro pemandumu! Tugas-ku adalah menjaga gerbang ilmu SakaJawa agar tidak lekang oleh waktu. Penasaran dengan makna di balik budaya Jawa?";

  const { displayed: displayedHeading, done: headingDone } = useTypewriter(
    heading,
    70,
    visible
  );
  const { displayed: displayedParagraph, done: paragraphDone } = useTypewriter(
    paragraph,
    20,
    headingDone
  );

  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
        {/* Left Side: Mascot Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-full max-w-[450px] aspect-square">
            <Image
              src="/Assets/maskotChatbot.webp"
              alt="Saka Mascot"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Right Side: Text Card */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <div
            ref={cardRef}
            className="bg-white border-2 border-[#601c23] rounded-3xl p-8 md:p-10 lg:p-12 shadow-sm flex flex-col gap-6 max-w-[550px]"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black tracking-wide min-h-[1.2em]">
              {displayedHeading}
              {visible && !headingDone && (
                <span className="animate-pulse">|</span>
              )}
            </h2>
            <p className="text-gray-800 text-lg md:text-xl leading-relaxed min-h-[6rem]">
              {displayedParagraph}
              {headingDone && !paragraphDone && (
                <span className="animate-pulse">|</span>
              )}
            </p>
            <div className="flex justify-end mt-4 md:mt-8">
              <button
                onClick={() => {
                  window.dispatchEvent(new CustomEvent("open-suro-chat"));
                }}
                className="text-[#f1b434] font-semibold text-lg md:text-xl flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer"
              >
                Tanya Sekarang <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}