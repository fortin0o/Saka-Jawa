import Image from "next/image";

export default function BatikQuotesSection() {
  return (
    <section className="relative z-20 bg-[#ffffff] pt-0 md:pt-16 pb-0 lg:py-0 px-6 md:px-12 lg:px-24 overflow-hidden md:overflow-visible">
      {/* ===== MOBILE LAYOUT (hidden on md+) ===== */}
      <div className="flex flex-col items-center md:hidden">
        {/* Asset Batik di paling atas, menggantung */}
        <div className="relative w-full h-[280px] sm:h-[320px] pointer-events-none mt-0 z-10">
          <Image
            src="/Assets/Selendang Batik.webp"
            alt="Ilustrasi Batik Quotes"
            fill
            className="object-contain object-top"
            unoptimized
          />
        </div>
        {/* Teks di bawah asset */}
        <div className="flex flex-col text-center justify-center px-4 pt-4 pb-12 z-20">
          <blockquote className="text-lg sm:text-3xl font-bold text-[#4e0b11] leading-snug drop-shadow-sm">
            “Batik bukan sekadar selembar kain bermotif, melainkan sebuah doa dan harapan yang dilukis dengan malam, menceritakan filosofi kehidupan.”
          </blockquote>
        </div>
      </div>

      {/* ===== DESKTOP LAYOUT (hidden on mobile) — TIDAK DIUBAH ===== */}
      <div className="hidden md:flex mx-auto w-full max-w-[1400px] flex-col md:flex-row items-center justify-between md:min-h-[450px] lg:min-h-[600px] relative">
        {/* Quote text */}
        <div className="flex flex-col text-center md:text-left justify-center w-full md:w-[55%] z-20 py-8 md:py-0">
          <blockquote className="text-lg sm:text-3xl md:text-3xl lg:text-[42px] font-bold text-[#4e0b11] leading-snug drop-shadow-sm">
            “Batik bukan sekadar selembar kain bermotif, melainkan sebuah doa dan harapan yang dilukis dengan malam, menceritakan filosofi kehidupan.”
          </blockquote>
        </div>
        
        {/* Quote image overflowing to the next section on desktop */}
        <div className="relative md:absolute right-0 md:top-0 md:bottom-[-50px] lg:bottom-[-150px] w-full max-w-[300px] sm:max-w-[360px] md:max-w-none md:w-[45%] h-[280px] sm:h-[320px] md:h-[100%] mt-6 md:mt-0 pointer-events-none z-10 self-end md:self-auto">
          <Image
            src="/Assets/Selendang Batik.webp"
            alt="Ilustrasi Batik Quotes"
            fill
            className="object-contain object-bottom md:object-right-bottom"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
