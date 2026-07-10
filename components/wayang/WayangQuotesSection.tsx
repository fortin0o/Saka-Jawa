import Image from "next/image";

export default function WayangQuotesSection() {
  return (
    <section className="relative z-20 bg-[#ffffff] pt-16 pb-0 md:py-16 lg:py-0 px-6 md:px-12 lg:px-24">
      <div className="mx-auto w-full max-w-[1400px] flex flex-col md:grid md:grid-cols-2 gap-0 md:gap-8 items-center min-h-0 md:min-h-[450px] lg:min-h-[600px] relative">
        {/* Quote text */}
        <div className="flex flex-col text-center justify-center px-4 lg:px-16 z-10 pt-8 pb-12 md:py-16 lg:py-0">
          <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-[42px] font-bold text-[#4e0b11] leading-snug">
            “Wayang bukan sekadar pertunjukan, melainkan cerminan perjalan manusia dalam memilih antara kebaikan dan keburukan.”
          </blockquote>
        </div>
        
        {/* Quote image overflowing to the next section */}
        <div className="flex justify-center md:justify-end relative md:absolute md:right-0 md:bottom-[-50px] lg:bottom-[-150px] h-[450px] md:h-[550px] lg:h-[800px] w-full md:w-1/2 pointer-events-none z-30 -mb-[50px] md:mb-0">
          <Image
            src="/Assets/WayangQuotes.webp"
            alt="Ilustrasi Wayang Quotes"
            fill
            className="object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  );
}
