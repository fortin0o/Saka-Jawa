import Image from "next/image";
import Link from "next/link";

export default function KulinerInteractiveMapSection() {
  return (
    <section className="bg-[#f9f1e4] py-16 px-6 md:px-12 lg:px-24">
      <div className="mx-auto w-full max-w-[var(--container-lg)] flex flex-col gap-8">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <h3 className="font-['League_Spartan'] text-3xl font-bold text-[#4e0b11]">
            Telusuri Pendhapa Lainnya
          </h3>
          <div>
            <a
              href="/wayang"
              className="inline-flex items-center gap-3 rounded-full bg-[#ffc832] px-6 py-3 font-semibold text-[#4e0b11] shadow-md transition-all hover:scale-105 active:scale-95"
            >
              <span className="font-['League_Spartan'] text-lg">Selanjutnya</span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#4e0b11] text-white">→</span>
            </a>
          </div>
        </div>

                {/* Interactive Map */}
        <div className="relative w-full max-w-[1000px] aspect-[16/5] mx-auto mt-8 mb-8">
          {/* Base Map */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/Assets/Tanah Pendhopo.svg"
              alt="Peta Tanah Pendhopo"
              fill
              className="object-contain"
              priority
            />
          </div>

          <Link
            href="/batik"
            className="absolute top-[3%] left-[8%] w-[28%] aspect-[6/3] cursor-pointer hover:-translate-y-2 hover:scale-105 transition-all duration-300 origin-bottom z-10 drop-shadow-2xl group flex flex-col items-center"
          >
            <div className="relative w-full h-full">
              <Image
                src="/Assets/Pendhopo Batik.svg"
                alt="Pendhopo Batik"
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap z-30 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
               <span className="font-['League_Spartan'] text-sm sm:text-base font-bold bg-[#5b0917] text-white px-3 py-1 rounded-full shadow">
                  Pendhapa Batik
               </span>
            </div>
          </Link>

          <Link
            href="/kuliner"
            className="absolute top-[-5%] left-[42%] w-[28%] aspect-[6/3] cursor-pointer hover:-translate-y-2 hover:scale-105 transition-all duration-300 origin-bottom z-20 drop-shadow-2xl group flex flex-col items-center"
          >
            <div className="absolute -top-[50%] left-1/2 -translate-x-1/2 w-[30%] aspect-square animate-bounce z-30 pointer-events-none">
              <Image src="/Assets/User Location.svg" alt="Lokasi Anda" fill className="object-contain" />
            </div>
            <div className="relative w-full h-full z-10 drop-shadow-[0_0_20px_rgba(255,200,50,0.8)] scale-110">
              <Image
                src="/Assets/Pendhopo Kuliner.svg"
                alt="Pendhopo Kuliner"
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap z-30 pointer-events-none">
               <span className="font-['League_Spartan'] text-sm sm:text-base font-bold bg-[#ffc832] text-[#4e0b11] px-3 py-1 rounded-full shadow">
                  Pendhapa Kuliner (Anda di Sini)
               </span>
            </div>
          </Link>

          <Link
            href="/wayang"
            className="absolute top-[35%] left-[29%] w-[28%] aspect-[6/3] cursor-pointer hover:-translate-y-2 hover:scale-105 transition-all duration-300 origin-bottom z-10 drop-shadow-2xl group flex flex-col items-center"
          >
            <div className="relative w-full h-full">
              <Image
                src="/Assets/Pendhopo Wayang.svg"
                alt="Pendhopo Wayang"
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap z-30 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
               <span className="font-['League_Spartan'] text-sm sm:text-base font-bold bg-[#5b0917] text-white px-3 py-1 rounded-full shadow">
                  Pendhapa Wayang
               </span>
            </div>
          </Link>

          <Link
            href="/gamelan"
            className="absolute top-[44%] left-[62%] w-[28%] aspect-[6/3] cursor-pointer hover:-translate-y-2 hover:scale-105 transition-all duration-300 origin-bottom z-10 drop-shadow-2xl group flex flex-col items-center"
          >
            <div className="relative w-full h-full">
              <Image
                src="/Assets/Pendhopo Gamelan.svg"
                alt="Pendhopo Gamelan"
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap z-30 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
               <span className="font-['League_Spartan'] text-sm sm:text-base font-bold bg-[#5b0917] text-white px-3 py-1 rounded-full shadow">
                  Pendhapa Gamelan
               </span>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}
