"use client";

import Image from "next/image";
import { useState } from "react";

const batikStories = [
  {
    id: 1,
    title: "Filosofi Sidomukti",
    desc: "Motif keraton Solo yang melambangkan harapan akan kehidupan yang makmur, sejahtera, mulia, dan penuh kebahagiaan.",
    image: "/Assets/Gambar Batik/Batik Solo/Solo 1.avif",
    videoUrl: "https://www.youtube.com/embed/xRozwDefvHE?si=T4kA1bNGtVCJpai4",
  },
  {
    id: 2,
    title: "Makna Truntum",
    desc: "Motif berbentuk taburan bintang atau bunga cengkeh yang bermakna cinta yang tumbuh kembali dan kesetiaan yang tulus dari keraton.",
    image: "/Assets/Gambar Batik/Batik Jogja/Jogja 1.avif",
  },
  {
    id: 3,
    title: "Dinamika Jlamprang",
    desc: "Motif pesisiran Pekalongan yang kaya warna, mencerminkan keberagaman budaya dan sifat adaptif serta ceria masyarakat pesisir.",
    image: "/Assets/Gambar Batik/Batik Pekalongan/Pekalongan 1.avif",
  },
];

export default function BatikCeritaSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <>
      <section className="relative z-40 py-14 px-4 sm:px-6 md:px-12 lg:px-24 lg:py-20 bg-[#3e0b10] text-white">
        <div className="mx-auto w-full max-w-[var(--container-lg)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Header content */}
            <div className="lg:col-span-4 flex flex-col gap-6 text-left">
              <div>
                <h3 className="font-['League_Spartan'] text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                  Cerita Batik Penuh Makna
                </h3>
                <p className="mt-3 md:mt-4 font-['League_Spartan'] text-sm sm:text-base text-white/80 leading-relaxed">
                  Kenali filosofi mendalam di balik setiap goresan canting dan malam pada motif-motif legendaris tanah Jawa.
                </p>
              </div>
              <div>
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ffc832] px-6 py-3 font-semibold text-[#4e0b11] transition-transform hover:scale-105 active:scale-95"
                >
                  <span>Lihat Cerita</span>
                  <svg className="w-5 h-5 fill-current ml-1" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Cards List */}
            <div className="lg:col-span-8 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-3">
              {batikStories.map((story) => (
                <div key={story.id} className="rounded-xl bg-[#F8F5EE] p-4 text-stone-900 shadow-md flex flex-col justify-between min-h-[350px]">
                  <div>
                    {/* Card Image */}
                    <div className="aspect-[4/3] w-full relative rounded-lg overflow-hidden bg-stone-200">
                      <Image
                        src={story.image}
                        alt={story.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    {/* Title */}
                    <h4 className="mt-4 font-['League_Spartan'] text-xl font-bold text-[#4e0b11]">
                      {story.title}
                    </h4>
                    {/* Description */}
                    <p className="mt-2 font-['League_Spartan'] text-sm text-stone-700 leading-relaxed">
                      {story.desc}
                    </p>
                  </div>
                  {/* Actions inside card */}
                  <div className="mt-4 pt-4 border-t border-stone-200 flex items-center justify-between">
                    <span className="font-['League_Spartan'] text-sm font-semibold text-[#4e0b11]">
                      Lihat Selengkapnya
                    </span>
                    <button 
                      onClick={() => story.videoUrl ? setActiveVideo(story.videoUrl) : null}
                      className="w-8 h-8 rounded-full bg-[#4e0b11] text-white flex items-center justify-center transition-transform hover:scale-110"
                    >
                      <svg className="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6" onClick={() => setActiveVideo(null)}>
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <iframe 
              src={`${activeVideo}&autoplay=1`} 
              title="YouTube video player" 
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}
