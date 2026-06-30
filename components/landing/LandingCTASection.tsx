import Image from "next/image";
import Link from "next/link";

export default function LandingCTASection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-0">
      <div className="relative w-full bg-[#4A0D15] rounded-[32px] overflow-hidden flex flex-col md:flex-row min-h-[400px] lg:min-h-[480px] shadow-[0_12px_24px_-8px_rgba(0,0,0,0.3)]">
        {/* Decorative Assets */}
        <Image
          src="/Assets/Gunungan CTA Atas.svg"
          alt="Gunungan Atas"
          width={350}
          height={350}
          className="absolute -top-4 -right-4 w-[150px] md:w-[250px] lg:w-[320px] h-auto z-0 pointer-events-none rotate-180"
        />
        <Image
          src="/Assets/Gunungan CTA Bawah.svg"
          alt="Gunungan Bawah"
          width={250}
          height={250}
          className="absolute -bottom-4 -left-4 w-[100px] md:w-[200px] lg:w-[220px] h-auto z-0 pointer-events-none"
        />

        {/* Content */}
        <div className="relative z-10 w-full md:w-[60%] p-10 md:p-0 lg:p-16 lg:pl-24 flex flex-col justify-center items-start gap-3 md:gap-5">
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-[1.1] font-sans">
            Sudah Siap <br />
            Menjelajahi Budaya <br />
            <span className="text-[#f1b434]">Jawa?</span>
          </h2>
          <p className="text-white/95 text-sm md:text-base lg:text-lg max-w-md font-medium leading-relaxed mt-2">
            Temukan Cerita, Filosofi, Dan Warisan Yang Hidup <br /> Dalam Setiap Pendhapa.
          </p>
          <Link
            href="/kuliner"
            className="mt-3 bg-[#f1b434] text-black font-semibold px-6 md:px-8 py-3 lg:py-3.5 rounded-full flex items-center gap-3 hover:bg-[#e0a423] transition-colors text-base md:text-lg shadow-lg"
          >
            Tentang Kuliner 
            <span className="bg-[#6b3b14] text-[#f1b434] rounded-full p-1.5 flex items-center justify-center">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
            </span>
          </Link>
        </div>

        {/* Right Wayang Image */}
        <div className="absolute z-10 bottom-0 right-2 md:right-8 lg:right-16 w-[85%] md:w-[60%] lg:w-[45%] h-[75%] md:h-[95%] pointer-events-none">
          <Image
            src="/Assets/Wayang CTA.svg"
            alt="Wayang CTA"
            fill
            className="object-contain object-bottom md:object-right-bottom"
          />
        </div>
      </div>
    </section>
  );
}
