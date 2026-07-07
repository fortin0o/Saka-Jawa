"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

//halo
const quotes = [
  {
    id: 1,
    name: "Hamengkubuwono X",
    title: "Raja Karaton Yogyakarta",
    quote: "Kekayaan alam Jawa ini bukan warisan nenek moyang untuk dihabiskan, melainkan titipan anak cucu yang harus dirawat. Filosofi 'Hamemayu Hayuning Bawana' menuntut kita untuk menata, memperindah, dan menjaga keseimbangan alam ini agar tetap harmonis.",
    align: "right",
    image: "/Assets/Budayawan/hb-x.avif",
  },
  {
    id: 2,
    name: "R. Ngabehi Ronggowarsito",
    title: "Pujangga Besar Karaton Surakarta",
    quote: "Amenangi zaman edan, ewuh aya ing pambudi... Nanging saresmene, memayu hayuning bawana dadi laku utama amrih slameting urip.",
    align: "left",
    image: "/Assets/Budayawan/ngabehi-ranggawarsita.avif",
  },
  {
    id: 3,
    name: "Sujiwo Tedjo",
    title: "Budayawan dan Seniman Multidimensi",
    quote: "Membaca alam itu lebih utama daripada sekadar membaca buku. Gunung, sawah, dan lautan di tanah Jawa ini tidak pernah berbohong tentang hukum sebab-akibat. Sawah yang kau rawat akan menghidupimu, hutan yang kau gunduli akan menenggelamkanmu.",
    align: "right",
    image: "/Assets/Budayawan/sudjiwo-tejo.avif",
  },
  {
    id: 4,
    name: "Emha Ainun Nadjib",
    title: "Budayawan dan Sastrawan Legendaris",
    quote: "Manusia itu ibarat suami, sedangkan alam ini adalah istri. Tanah Jawa dan seluruh nusantara ini sudah memberikan segalanya—pangan, air, kesuburan. Tugas 'suami' bukan mengeksploitasi atau menyakiti istrinya, melainkan merawat, mengasihi, dan bersinergi dengannya agar tercipta keharmonisan hidup.",
    align: "left",
    image: "/Assets/Budayawan/cak-nun.avif",
  }
];

export default function LandingQuotesSection() {
  const containerRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress for the parallax clouds
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Track scroll progress for the vertical line.
  const { scrollYProgress: lineProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });

  // Karena section ini sekarang tinggi, awan harus menyingkir lebih cepat (di 30% awal scroll)
  // Kita map 0.15 sampai 0.6 ke animasi penuh agar awan segera terbuka setelah sedikit scroll
  const xLeft1 = useTransform(scrollYProgress, [0, 0.4], ["0%", "-110%"]);
  const xLeft2 = useTransform(scrollYProgress, [0.10, 0.4], ["0%", "-105%"]);
  const xLeft3 = useTransform(scrollYProgress, [0.16, 0.5], ["0%", "-100%"]);
  const xLeft4 = useTransform(scrollYProgress, [0.10, 0.4], ["0%", "-105%"]);

  const xRight1 = useTransform(scrollYProgress, [0, 0.4], ["0%", "110%"]);
  const xRight2 = useTransform(scrollYProgress, [0.10, 0.4], ["0%", "105%"]);
  const xRight3 = useTransform(scrollYProgress, [0.16, 0.5], ["0%", "100%"]);
  const xRight4 = useTransform(scrollYProgress, [0.10, 0.4], ["0%", "105%"]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-[150vh] overflow-hidden bg-white -mt-[10px]"
    >
      {/* Background Batik Sejarawan */}
      <div className="absolute top-[3rem] md:top-[12rem] bottom-0 left-4 right-4 md:left-8 md:right-8 opacity-60 rounded-[2rem] md:rounded-[3rem] overflow-hidden">
        <Image
          src="/Assets/BatikSectionSejarawan.svg"
          alt="Batik Background"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* --- MEGA MENDUNG PARALLAX OVERLAY --- */}
      <div className="absolute top-0 left-0 w-full h-[20vh] md:h-[50vh] lg:h-[65vh] z-30 pointer-events-none">
        {/* --- LEFT CLOUDS --- */}
        <motion.div style={{ x: xLeft1 }} className="absolute top-[0%] left-[-5%] w-[65%] h-[73%] z-10">
          <Image src="/Assets/LeftMegaMendung.svg" alt="" fill className="object-cover object-right-top" />
        </motion.div>
        <motion.div style={{ x: xLeft2 }} className="absolute top-[18%] left-[-5%] w-[65%] h-[73%] z-20">
          <Image src="/Assets/LeftMegaMendung.svg" alt="" fill className="object-cover object-right-top" />
        </motion.div>
        <motion.div style={{ x: xLeft3 }} className="absolute top-[38%] left-[-5%] w-[65%] h-[73%] z-10">
          <Image src="/Assets/LeftMegaMendung.svg" alt="" fill className="object-cover object-right-top" />
        </motion.div>
        <motion.div style={{ x: xLeft4 }} className="absolute top-[58%] left-[-5%] w-[65%] h-[73%] z-20 drop-shadow-2xl">
          <Image src="/Assets/LeftMegaMendung.svg" alt="Left Mega Mendung" fill className="object-cover object-right-top" />
        </motion.div>

        {/* --- RIGHT CLOUDS --- */}
        <motion.div style={{ x: xRight1 }} className="absolute top-[0%] right-[-5%] w-[65%] h-[73%] z-10">
          <Image src="/Assets/RightMegaMendung.svg" alt="" fill className="object-cover object-left-top" />
        </motion.div>
        <motion.div style={{ x: xRight2 }} className="absolute top-[18%] right-[-5%] w-[65%] h-[73%] z-20">
          <Image src="/Assets/RightMegaMendung.svg" alt="" fill className="object-cover object-left-top" />
        </motion.div>
        <motion.div style={{ x: xRight3 }} className="absolute top-[38%] right-[-5%] w-[65%] h-[73%] z-10">
          <Image src="/Assets/RightMegaMendung.svg" alt="" fill className="object-cover object-left-top" />
        </motion.div>
        <motion.div style={{ x: xRight4 }} className="absolute top-[58%] right-[-5%] w-[65%] h-[73%] z-20 drop-shadow-2xl">
          <Image src="/Assets/RightMegaMendung.svg" alt="Right Mega Mendung" fill className="object-cover object-left-top" />
        </motion.div>
      </div>


      {/* --- CONTENT SECTION --- */}
      <div className="relative z-20 w-full max-w-5xl mx-auto md:pt-26 pb-32 px-4 mt-20 md:mt-25">
        
        {/* Title Box */}
        <div className="flex justify-center mb-24 mt-16">
          <div className="bg-white px-8 md:px-12 py-4 rounded-3xl border border-[#61452e] shadow-md">
            <h2 className="text-2xl md:text-[34px] font-extrabold text-[#111] tracking-tight text-center">
              Kata Budayawan <br className="block md:hidden" /> Tentang Jawa
            </h2>
          </div>
        </div>

        {/* Timeline Container */}
        <div ref={timelineRef} className="relative w-full h-full pb-8">
          {/* Center Vertical Line */}
          <motion.div 
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[3px] bg-[#61452e] origin-top"
            style={{ scaleY: lineProgress }}
          ></motion.div>
          {/* Top Circle */}
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: false, margin: "0px 0px -50% 0px" }}
            className="absolute left-1/2 -translate-x-1/2 top-0 w-5 h-5 rounded-full bg-[#61452e] z-10"
          ></motion.div>

          {/* Cards */}
          <div className="flex flex-col gap-12 md:gap-16 pt-16">
            {quotes.map((quote, idx) => {
              const isRight = quote.align === "right";
              return (
                <div key={idx} className={`relative flex w-full ${isRight ? 'justify-end' : 'justify-start'}`}>
                  
                  {/* Horizontal Connecting Line */}
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: false, margin: "0px 0px -40% 0px" }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className={`hidden md:block absolute top-[45px] w-[5%] h-[3px] bg-[#61452e] ${isRight ? 'left-1/2 origin-left' : 'right-1/2 origin-right'}`}
                  ></motion.div>

                  {/* Card Element */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "0px 0px -40% 0px" }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className={`relative w-full max-md:w-[90%] max-md:mx-auto md:w-[45%] bg-white rounded-[1.5rem] border border-[#61452e] shadow-sm p-5 md:p-8 ${isRight ? 'md:ml-auto' : 'md:mr-auto'}`}
                  >
                    <div className="flex justify-between items-start mb-4 max-md:mb-3">
                      <div>
                        <h4 className="text-[17px] md:text-2xl font-bold text-[#111] mb-0.5 md:mb-1">{quote.name}</h4>
                        <p className="text-[13px] md:text-base text-gray-500 font-medium">{quote.title}</p>
                      </div>
                      <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden bg-gray-200 shrink-0 max-md:mt-1">
                        {quote.image && (
                          <Image src={quote.image} alt={quote.name} fill className="object-cover" />
                        )}
                      </div>
                    </div>
                    <p className="text-[13px] md:text-base text-[#111] md:text-[#333] font-bold md:font-normal leading-snug md:leading-relaxed">
                      {quote.quote}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
