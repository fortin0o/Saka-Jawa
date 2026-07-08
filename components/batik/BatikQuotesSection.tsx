import Image from "next/image";

export default function BatikQuotesSection() {
  return (
    <section className="relative z-20 bg-[#ffffff] pt-16 pb-0 lg:py-0 px-6 md:px-12 lg:px-24 overflow-hidden md:overflow-visible">
      <div className="mx-auto w-full max-w-[1400px] flex flex-col md:flex-row items-center justify-between md:min-h-[450px] lg:min-h-[600px] relative">
        {/* Quote text */}
        <div className="flex flex-col text-center md:text-left justify-center w-full md:w-[55%] z-20 py-8 md:py-0">
          <blockquote className="text-2xl sm:text-3xl md:text-3xl lg:text-[42px] font-bold text-[#4e0b11] leading-relaxed drop-shadow-sm">
            “Batik bukan sekadar selembar kain bermotif, melainkan sebuah doa dan harapan yang dilukis dengan malam, menceritakan filosofi kehidupan.”
          </blockquote>
        </div>
        
        {/* Quote image overflowing to the next section on desktop */}
        <div className="relative md:absolute right-0 md:top-0 md:bottom-[-50px] lg:bottom-[-150px] w-full max-w-[300px] sm:max-w-[360px] md:max-w-none md:w-[45%] h-[280px] sm:h-[320px] md:h-auto mt-6 md:mt-0 pointer-events-none z-10 self-end md:self-auto">
          <Image
            src="/Assets/BatikQuotes.webp"
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
