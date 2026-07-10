import Image from "next/image";

export default function GamelanQuotesSection() {
  return (
    <section className="relative z-20 bg-[#FFFFFF] pt-12 pb-0 md:py-16 lg:py-0 px-6 md:px-12 lg:px-24">
      {/* ===== MOBILE LAYOUT (hidden on md+) ===== */}
      <div className="flex flex-col items-center md:hidden">
        {/* Teks di atas */}
        <div className="flex flex-col text-center justify-center px-4 pb-8 z-10">
          <blockquote className="text-lg sm:text-xl font-bold text-[#4e0b11] leading-snug">
            &ldquo;Gamelan adalah bahasa jiwa yang melampaui kata-kata — menyatukan hati manusia dengan keagungan alam semesta dan leluhur.&rdquo;
          </blockquote>
        </div>
        {/* Gamelan di bawah teks (digeser sedikit ke kanan agar center secara visual) */}
        <div className="relative w-full h-[280px] pointer-events-none -mt-6 mb-6 translate-x-6">
          <Image
            src="/Assets/Gong Quotes.webp"
            alt="Ilustrasi Gamelan"
            fill
            className="object-contain object-bottom"
          />
        </div>
      </div>

      {/* ===== DESKTOP LAYOUT (hidden on mobile) — TIDAK DIUBAH ===== */}
      <div className="hidden md:grid mx-auto w-full max-w-[1400px] grid-cols-2 gap-8 items-center min-h-[450px] lg:min-h-[600px] relative">
        {/* Gamelan.svg graphic sticking to the LEFT */}
        <div className="flex justify-start absolute left-[-15px] lg:left-[-30px] top-8 lg:top-4 h-[250px] lg:h-[500px] w-full md:w-1/2 pointer-events-none z-30">
          <Image
            src="/Assets/Gong Quotes.webp"
            alt="Ilustrasi Gamelan"
            fill
            className="object-contain object-top object-left"
          />
        </div>

        {/* Empty column to push text to the right */}
        <div></div>

        {/* Quote text on the RIGHT side */}
        <div className="flex flex-col text-left justify-center px-4 lg:px-16 z-10 py-16 lg:py-0">
          <blockquote className="text-lg sm:text-xl md:text-3xl lg:text-[34px] font-bold text-[#4e0b11] leading-snug">
            &ldquo;Gamelan adalah bahasa jiwa yang melampaui kata-kata — menyatukan hati manusia dengan keagungan alam semesta dan leluhur.&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
}
