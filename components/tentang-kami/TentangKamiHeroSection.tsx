import Image from "next/image";

export default function TentangKamiHeroSection() {
  return (
    <section
      id="tentang-kami-hero"
      className="relative overflow-hidden px-6 py-32 md:px-12 lg:px-24 lg:py-44 flex flex-col items-center justify-center text-center"
      style={{
        background: "radial-gradient(ellipse at 50% 50%, #5B0917 0%, #2D0F12 94%)",
      }}
      aria-labelledby="tentang-kami-title"
    >
      {/* Decorative Flowers */}
      <div className="absolute top-0 left-0 w-48 h-48 md:w-72 md:h-72 pointer-events-none -translate-x-1/4 -translate-y-1/4 opacity-80">
        <Image
          src="/Assets/BungaKuning.webp"
          alt=""
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute top-0 right-0 w-48 h-48 md:w-80 md:h-80 pointer-events-none translate-x-1/4 -translate-y-1/4 opacity-80">
        <Image
          src="/Assets/BungaKuning2.webp"
          alt=""
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-40 h-40 md:w-64 md:h-64 pointer-events-none -translate-x-1/4 translate-y-1/4 opacity-50 rotate-180">
        <Image
          src="/Assets/BungaKuning2.webp"
          alt=""
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute bottom-0 right-0 w-40 h-40 md:w-64 md:h-64 pointer-events-none translate-x-1/4 translate-y-1/4 opacity-50 rotate-180">
        <Image
          src="/Assets/BungaKuning.webp"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[var(--container-md)] mx-auto">
        <p className="text-[#FFC832] text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-4 leading-relaxed">
          Tim Golek Howo
        </p>
        <h1
          id="tentang-kami-title"
          className="text-4xl md:text-[52px] lg:text-[60px] font-bold text-white leading-[1.1] mb-6 leading-tight"
        >
          Menjaga Akar,{" "}
          <span className="text-[#FFC832]">Merawat Warisan</span>{" "}
          Jawa
        </h1>
        <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
          Di tengah derasnya arus modernisasi, banyak generasi muda yang mulai
          kehilangan jejak warisan leluhurnya sendiri. Bahasa, seni, dan filosofi
          Jawa kian terasa asing — bukan karena tak berharga, melainkan karena
          belum ada jembatan yang cukup kokoh untuk menyeberanginya.
        </p>
      </div>
    </section>
  );
}
