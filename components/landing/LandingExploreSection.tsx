import Image from "next/image";
import Link from "next/link";

export default function LandingExploreSection() {
  return (
    <section className="bg-white pt-24 pb-4 px-6 md:px-12 w-full flex flex-col items-center overflow-hidden">
      <div className="max-w-[1200px] w-full flex flex-col items-center">
        <h2 className="text-[32px] md:text-[42px] font-extrabold text-[#111] mb-2 text-center tracking-tight">
          Jelajahi Kekayaan Budaya Jawa
        </h2>
        <p className="text-[#555] text-center text-[15px] md:text-[17px] mb-12">
          Tekan salah satu Pendhapa dan jelajahi sepuas mungkin!
        </p>

        {/* Map Container */}
        <div className="relative w-full max-w-[1000px] aspect-[16/5] mx-auto">
          {/* Base Map */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/Assets/Tanah Pendhopo.svg"
              alt="Peta Pendhopo"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Pendhopo 1: Top Left */}
          <Link
            href="/batik"
            className="absolute top-[3%] left-[8%] w-[28%] aspect-[6/3] cursor-pointer hover:-translate-y-2 hover:scale-105 transition-all duration-300 origin-bottom z-10 drop-shadow-2xl"
          >
            <Image
              src="/Assets/Pendhopo Batik.svg"
              alt="Pendhopo Batik"
              fill
              className="object-contain"
            />
          </Link>

          {/* Pendhopo 2: Top Middle/Right */}
          <Link
            href="/kuliner"
            className="absolute top-[-5%] left-[42%] w-[28%] aspect-[7/3] cursor-pointer hover:-translate-y-2 hover:scale-105 transition-all duration-300 origin-bottom z-10 drop-shadow-2xl"
          >
            <Image
              src="/Assets/Pendhopo Kuliner.svg"
              alt="Pendhopo Kuliner"
              fill
              className="object-contain"
            />
          </Link>

          {/* Pendhopo 3: Bottom Middle */}
          <Link
            href="/wayang"
            className="absolute top-[35%] left-[29%] w-[28%] aspect-[6/3] cursor-pointer hover:-translate-y-2 hover:scale-105 transition-all duration-300 origin-bottom z-20 drop-shadow-2xl"
          >
            <Image
              src="/Assets/Pendhopo Wayang.svg"
              alt="Pendhopo Wayang"
              fill
              className="object-contain"
            />
          </Link>

          {/* Pendhopo 4: Bottom Right */}
          <Link
            href="/gamelan"
            className="absolute top-[44%] left-[62%] w-[28%] aspect-[7/3] cursor-pointer hover:-translate-y-2 hover:scale-105 transition-all duration-300 origin-bottom z-20 drop-shadow-2xl"
          >
            <Image
              src="/Assets/Pendhopo Gamelan.svg"
              alt="Pendhopo Gamelan"
              fill
              className="object-contain"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
