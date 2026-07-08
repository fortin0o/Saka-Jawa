import Image from "next/image";
import Link from "next/link";

export default function TentangKamiCTASection() {
  return (
    <section className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-16 -mt-8 lg:-mt-12 relative z-20">
      <div className="relative w-full bg-gradient-to-r from-[#4E0B11] to-[#2D0F12] rounded-[32px] overflow-hidden flex flex-col md:flex-row min-h-[280px] lg:min-h-[320px] px-4 md:px-0">
        {/* Decorative Assets */}
        <Image
          src="/Assets/GununganCTAAtas.svg"
          alt=""
          width={350}
          height={350}
          className="absolute -top-6 -right-6 w-[140px] md:w-[200px] lg:w-[250px] h-auto z-0 pointer-events-none rotate-180 opacity-90"
        />
        <Image
          src="/Assets/GununganCTABawah.svg"
          alt=""
          width={250}
          height={250}
          className="absolute -bottom-8 -left-8 w-[35px] md:w-[70px] lg:w-[175px] h-auto z-0 pointer-events-none opacity-90"
        />

        {/* Content */}
        <div className="relative z-10 w-full md:w-[55%] lg:w-[50%] py-10 pl-10 md:py-12 md:pl-16 lg:py-[52px] lg:pl-[100px] pr-4 flex flex-col justify-center items-start gap-4">
          <h2 className="text-3xl md:text-[36px] lg:text-[42px] font-semibold text-white leading-[1.1] font-sans tracking-tight leading-tight">
            Siap Menjelajahi{" "}
            <br />
            Kekayaan{" "}
            <br />
            <span className="text-[#FFC832]">Budaya Jawa?</span>
          </h2>
          <p className="text-white/90 text-xs md:text-sm lg:text-base max-w-[480px] font-medium leading-relaxed mt-2">
            Temukan cerita, filosofi, dan warisan yang hidup dalam setiap
            Pendhapa — batik, wayang, gamelan, dan kuliner menanti Anda.
          </p>
          <Link
            href="/#explore-section"
            className="mt-6 bg-[#FFC832] text-[#3e0b10] font-bold px-6 lg:px-8 py-2.5 lg:py-3 rounded-full flex items-center justify-between gap-8 hover:bg-[#e6b42d] transition-all text-sm lg:text-base w-fit"
          >
            <span>Kembali ke Pendhapa</span>
            <span className="bg-[#3e0b10] text-[#FFC832] rounded-full p-2 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </span>
          </Link>
        </div>

        {/* Right Wayang Image */}
        <div className="absolute z-10 bottom-0 right-[2%] md:right-[4%] lg:right-[6%] w-[75%] md:w-[52%] lg:w-[52%] h-[85%] md:h-[108%] pointer-events-none">
          <Image
            src="/Assets/WayangCTA.svg"
            alt="Wayang"
            fill
            className="object-contain object-bottom transform md:translate-y-4 lg:translate-y-6"
          />
        </div>
      </div>
    </section>
  );
}
