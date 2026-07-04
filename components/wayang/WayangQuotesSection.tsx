import Image from "next/image";

export default function WayangQuotesSection() {
  return (
    <section className="relative z-20 bg-[#fdfaf4] py-16 lg:py-0 px-6 md:px-12 lg:px-24">
      <div className="mx-auto w-full max-w-[1400px] grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[450px] lg:min-h-[600px] relative">
        {/* Quote text */}
        <div className="flex flex-col text-center justify-center px-4 lg:px-16 z-10 py-16 lg:py-0">
          <blockquote className="font-['League_Spartan'] text-xl sm:text-2xl md:text-3xl lg:text-[42px] font-bold text-[#4e0b11] leading-snug">
            “Wayang bukan sekadar pertunjukan, melainkan cerminan perjalan manusia dalam memilih antara kebaikan dan keburukan.”
          </blockquote>
        </div>
        
        {/* Quote image overflowing to the next section */}
        <div className="flex justify-end absolute right-0 bottom-[-50px] lg:bottom-[-150px] h-[550px] lg:h-[800px] w-full md:w-1/2 pointer-events-none z-30">
          <Image
            src="/Assets/Wayang Quotes.svg"
            alt="Ilustrasi Wayang Quotes"
            fill
            className="object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  );
}
