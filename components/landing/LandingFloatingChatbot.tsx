import Image from "next/image";
import Link from "next/link";

export default function LandingFloatingChatbot() {
  return (
    <Link
      href="#abdi-dalem"
      className="fixed right-0 bottom-6 sm:bottom-10 z-[99999] flex items-center transition-transform duration-300 hover:scale-105"
    >
      <div className="relative flex items-center">
        {/* Yellow Pill */}
        <div className="rounded-l-full bg-[#ffc62e] pl-8 pr-20 py-3 sm:pl-8 sm:pr-19 sm:py-2 text-left shadow-[-4px_4px_15px_rgba(0,0,0,0.15)]">
          <span className="block text-[0.85rem] sm:text-[1rem] leading-tight font-medium text-black">
            Tanya Kepada
          </span>
          <span className="block text-[1.3rem] sm:text-[1.6rem] leading-none font-black text-black tracking-wide mt-0.5">
            ABDI DALEM
          </span>
        </div>

        {/* Mascot */}
        <div className="absolute right-2 sm:right-5 top-1/3 -translate-y-3/5 h-[80px] w-[40px] sm:h-[110px] sm:w-[60px] z-10">
          <Image
            src="/Assets/Chatbot Abdi Dalem.svg"
            alt="Mascot Abdi Dalem"
            fill
            sizes="80px"
            loading="eager"
            unoptimized
            className="object-contain"
          />
        </div>
      </div>
    </Link>
  );
}
