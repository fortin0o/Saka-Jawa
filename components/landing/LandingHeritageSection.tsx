"use client";

import Image from "next/image";
import { useState } from "react";

export default function LandingHeritageSection() {
  const [flippedCard, setFlippedCard] = useState<string | null>(null);

  const handlePointerEnter = (e: React.PointerEvent, alt: string) => {
    if (e.pointerType === 'mouse') {
      setFlippedCard(alt);
    }
  };

  const handlePointerLeave = (e: React.PointerEvent, alt: string) => {
    if (e.pointerType === 'mouse') {
      setFlippedCard((prev) => (prev === alt ? null : prev));
    }
  };

  const handleClick = (alt: string) => {
    setFlippedCard((prev) => (prev === alt ? null : alt));
  };
  const images = [
    {
      src: "/Assets/kulinerHeroAsset.webp",
      alt: "Kuliner Tradisional",
      desc: "Cita rasa warisan leluhur yang kaya rempah dan sarat akan cerita sejarah.",
      className: "w-[240px] md:w-[280px] h-[340px] md:h-[420px]",
    },
    {
      src: "/Assets/gamelanHeroAsset.webp",
      alt: "Gamelan",
      desc: "Alat musik ansambel tradisional Jawa yang menciptakan harmoni dan ketenangan.",
      className: "w-[240px] md:w-[280px] h-[280px] md:h-[360px]",
    },
    {
      src: "/Assets/wayangHeroAsset.webp",
      alt: "Wayang",
      desc: "Seni pertunjukan epik yang membawa pesan moral dan filosofi kehidupan secara mendalam.",
      className: "w-[240px] md:w-[280px] h-[240px] md:h-[280px]",
    },
    {
      src: "/Assets/batikHeroAsset.webp",
      alt: "Batik",
      desc: "Mahakarya lukis di atas kain dengan motif indah yang memiliki makna filosofis khas Nusantara.",
      className: "w-[240px] md:w-[280px] h-[300px] md:h-[400px]",
    },
  ];

  return (
    <section className="bg-white pt-20 pb-10 w-full overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black max-w-lg leading-tight tracking-tight">
            Bukan Hanya<br />Peninggalan Masa Lalu
          </h2>
          <div className="max-w-[280px] flex gap-4 text-gray-800">
            <span className="text-7xl text-gray-400 font-serif leading-none mt-[-20px]">“</span>
            <p className="text-[19px] font-medium leading-relaxed">
              Budaya Jawa bukan hanya sejarah, tetapi identitas yang masih hidup hingga hari ini.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full relative group">
        <div className={`flex w-max animate-[scroll_25s_linear_infinite] items-start ${flippedCard ? '[animation-play-state:paused]' : 'group-hover:[animation-play-state:paused]'}`}>
          {/* First set */}
          <div className="flex gap-4 md:gap-6 pr-4 md:pr-6 items-start ml-6 md:ml-12 lg:ml-24">
            {images.map((img, idx) => (
              <div 
                key={`set1-${idx}`} 
                className={`${img.className} group/card [perspective:1000px] shrink-0 cursor-pointer`}
                onClick={() => handleClick(img.alt)}
                onPointerEnter={(e) => handlePointerEnter(e, img.alt)}
                onPointerLeave={(e) => handlePointerLeave(e, img.alt)}
              >
                <div className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${flippedCard === img.alt ? '[transform:rotateY(180deg)]' : ''}`}>
                  {/* Front Card */}
                  <div className="absolute inset-0 [backface-visibility:hidden] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg">
                    <Image src={img.src} fill sizes="(max-width: 768px) 240px, 280px" className="object-cover" alt={img.alt} />
                  </div>
                  {/* Back Card */}
                  <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg bg-[#F9F1E4] border border-[#E5D5C1] p-6 flex flex-col justify-center items-center text-center">
                    <h3 className="text-2xl font-semibold text-[var(--color-maroon)] mb-3 leading-tight" style={{ fontFamily: 'var(--font-league-spartan)' }}>{img.alt}</h3>
                    <p className="text-[15px] font-medium text-gray-700 leading-relaxed">{img.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Second set for seamless loop */}
          <div className="flex gap-4 md:gap-6 pr-4 md:pr-6 items-start">
            {images.map((img, idx) => (
              <div 
                key={`set2-${idx}`} 
                className={`${img.className} group/card [perspective:1000px] shrink-0 cursor-pointer`}
                onClick={() => handleClick(img.alt)}
                onPointerEnter={(e) => handlePointerEnter(e, img.alt)}
                onPointerLeave={(e) => handlePointerLeave(e, img.alt)}
              >
                <div className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${flippedCard === img.alt ? '[transform:rotateY(180deg)]' : ''}`}>
                  {/* Front Card */}
                  <div className="absolute inset-0 [backface-visibility:hidden] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg">
                    <Image src={img.src} fill sizes="(max-width: 768px) 240px, 280px" className="object-cover" alt={img.alt} />
                  </div>
                  {/* Back Card */}
                  <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg bg-[#F9F1E4] border border-[#E5D5C1] p-6 flex flex-col justify-center items-center text-center">
                    <h3 className="text-2xl font-semibold text-[var(--color-maroon)] mb-3 leading-tight" style={{ fontFamily: 'var(--font-league-spartan)' }}>{img.alt}</h3>
                    <p className="text-[15px] font-medium text-gray-700 leading-relaxed">{img.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}} />
      </div>
    </section>
  );
}
