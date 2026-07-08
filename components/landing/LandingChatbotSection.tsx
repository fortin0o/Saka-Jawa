"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
  const [visible, setVisible] = useState(false);

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
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-center gap-9 w-full">
        {/* Left Side: Mascot Image */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full md:w-[400px] lg:w-[450px] flex justify-center shrink-0"
        >
          <div className="relative w-full max-w-[450px] aspect-square">
            <Image
              src="/Assets/maskotChatbot.webp"
              alt="Saka Mascot"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>

        {/* Right Side: Text Card */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          onViewportEnter={() => setVisible(true)}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="w-full md:w-[500px] lg:w-[550px] flex justify-center shrink-0"
        >
          <div
            className="bg-white border-2 border-[#601c23] rounded-3xl p-8 md:p-10 lg:p-12 shadow-sm flex flex-col gap-6 w-full"
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-black tracking-wide min-h-[1.2em] leading-tight">
              {displayedHeading}
              {visible && !headingDone && (
                <span className="animate-pulse">|</span>
              )}
            </h2>
            <p className="text-gray-800 text-lg md:text-xl leading-relaxed min-h-[6rem] font-normal">
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
        </motion.div>
      </div>
    </section>
  );
}