"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const quotes = [
  {
    id: 1,
    name: "Hilmi Azzam",
    title: "Bukan Ahli Gizi",
    quote: "Karena jawa adalah kunci kemenangan kayaknya ya, soalnya aku surakarta. bapak ahmad kebelet pipis, anciss",
    align: "right",
  },
  {
    id: 2,
    name: "Gusti Moeng",
    title: "Ibu Suri Karaton",
    quote: "Asal Hangabehi rajanya, aku tidak akan gentar untuk menjatuhkan purbaya, dasar wanita kampung dan purbaya kemplo",
    align: "left",
  },
  {
    id: 3,
    name: "Hilmi Azzam",
    title: "Bukan Ahli Gizi",
    quote: "Karena jawa adalah kunci kemenangan kayaknya ya, soalnya aku surakarta. bapak ahmad kebelet pipis, anciss",
    align: "right",
  },
  {
    id: 4,
    name: "Gusti Moeng",
    title: "Ibu Suri Karaton",
    quote: "Asal Hangabehi rajanya, aku tidak akan gentar untuk menjatuhkan purbaya, dasar wanita kampung dan purbaya kemplo",
    align: "left",
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

  // Track scroll progress for the vertical line
  const { scrollYProgress: lineProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });

  // Karena section ini sekarang tinggi, awan harus menyingkir lebih cepat (di 30% awal scroll)
  // Kita map 0 sampai 0.4 ke animasi penuh agar awan segera terbuka
  const xLeft1 = useTransform(scrollYProgress, [0, 0.6], ["0%", "-150%"]);
  const xLeft2 = useTransform(scrollYProgress, [0, 0.6], ["0%", "-130%"]);
  const xLeft3 = useTransform(scrollYProgress, [0, 0.6], ["0%", "-115%"]);
  const xLeft4 = useTransform(scrollYProgress, [0, 0.6], ["0%", "-100%"]);

  const xRight1 = useTransform(scrollYProgress, [0, 0.6], ["0%", "150%"]);
  const xRight2 = useTransform(scrollYProgress, [0, 0.6], ["0%", "130%"]);
  const xRight3 = useTransform(scrollYProgress, [0, 0.6], ["0%", "115%"]);
  const xRight4 = useTransform(scrollYProgress, [0, 0.6], ["0%", "100%"]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-[150vh] overflow-hidden bg-white -mt-[10px]"
    >
      {/* Background Batik Sejarawan */}
      <div className="absolute top-[10rem] bottom-0 left-4 right-4 md:left-8 md:right-8 opacity-60 rounded-[2rem] md:rounded-[3rem] overflow-hidden">
        <Image
          src="/Assets/Batik%20Section%20Sejarawan.svg"
          alt="Batik Background"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* --- MEGA MENDUNG PARALLAX OVERLAY --- */}
      <div className="absolute top-0 left-0 w-full h-[40vh] md:h-[50vh] lg:h-[60vh] z-30 pointer-events-none">
        {/* --- LEFT CLOUDS --- */}
        <motion.div style={{ x: xLeft1 }} className="absolute top-[0%] left-[-10%] w-[55%] h-[60%] z-10">
          <Image src="/Assets/Left%20Mega%20Mendung.svg" alt="" fill className="object-cover object-right-top opacity-80" />
        </motion.div>
        <motion.div style={{ x: xLeft2 }} className="absolute top-[18%] left-[-5%] w-[58%] h-[65%] z-20">
          <Image src="/Assets/Left%20Mega%20Mendung.svg" alt="" fill className="object-cover object-right-top opacity-90" />
        </motion.div>
        <motion.div style={{ x: xLeft3 }} className="absolute top-[38%] left-[0%] w-[60%] h-[70%] z-30">
          <Image src="/Assets/Left%20Mega%20Mendung.svg" alt="" fill className="object-cover object-right-top opacity-95" />
        </motion.div>
        <motion.div style={{ x: xLeft4 }} className="absolute top-[58%] left-[3%] w-[65%] h-[80%] z-40 drop-shadow-2xl">
          <Image src="/Assets/Left%20Mega%20Mendung.svg" alt="Left Mega Mendung" fill className="object-cover object-right-top" />
        </motion.div>

        {/* --- RIGHT CLOUDS --- */}
        <motion.div style={{ x: xRight1 }} className="absolute top-[0%] right-[-10%] w-[55%] h-[60%] z-10">
          <Image src="/Assets/Right%20Mega%20Mendung.svg" alt="" fill className="object-cover object-left-top opacity-80" />
        </motion.div>
        <motion.div style={{ x: xRight2 }} className="absolute top-[18%] right-[-5%] w-[58%] h-[65%] z-20">
          <Image src="/Assets/Right%20Mega%20Mendung.svg" alt="" fill className="object-cover object-left-top opacity-90" />
        </motion.div>
        <motion.div style={{ x: xRight3 }} className="absolute top-[38%] right-[0%] w-[60%] h-[70%] z-30">
          <Image src="/Assets/Right%20Mega%20Mendung.svg" alt="" fill className="object-cover object-left-top opacity-95" />
        </motion.div>
        <motion.div style={{ x: xRight4 }} className="absolute top-[58%] right-[3%] w-[65%] h-[80%] z-40 drop-shadow-2xl">
          <Image src="/Assets/Right%20Mega%20Mendung.svg" alt="Right Mega Mendung" fill className="object-cover object-left-top" />
        </motion.div>
      </div>


      {/* --- CONTENT SECTION --- */}
      <div className="relative z-20 w-full max-w-5xl mx-auto pt-20 md:pt-28 pb-32 px-4 mt-50">
        
        {/* Title Box */}
        <div className="flex justify-center mb-24">
          <div className="bg-white px-8 md:px-12 py-4 rounded-full border border-gray-300 shadow-md">
            <h2 className="text-2xl md:text-[34px] font-extrabold text-[#111] tracking-tight">
              Kata Budayawan Tentang Jawa
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
                    className={`relative w-full md:w-[45%] bg-white rounded-[1.5rem] border border-gray-300 shadow-sm p-6 md:p-8 ${isRight ? 'md:ml-auto' : 'md:mr-auto'}`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-xl md:text-2xl font-bold text-[#111] mb-1">{quote.name}</h4>
                        <p className="text-sm md:text-base text-gray-500 font-medium">{quote.title}</p>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-gray-200 shrink-0"></div>
                    </div>
                    <p className="text-[15px] md:text-base text-[#333] leading-relaxed">
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
