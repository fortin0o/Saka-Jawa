import Image from "next/image";

export default function KulinerQuotesSection() {
  return (
    <section className="relative z-20 bg-[#FFFFFF] pt-0 md:py-16 lg:py-0 px-6 md:px-12 lg:px-24">
      {/* ===== MOBILE LAYOUT (hidden on md+) ===== */}
      <div className="flex flex-col items-center md:hidden">
        {/* Ketupat di paling atas section — tanpa margin/padding atas */}
        <div className="relative w-full h-[300px] pointer-events-none mt-0">
          <Image
            src="/Assets/Ketupat.svg"
            alt="Ilustrasi Ketupat"
            fill
            className="object-contain object-top"
          />
        </div>
        {/* Teks di bawah ketupat */}
        <div className="flex flex-col text-center justify-center px-4 pb-12 z-10">
          <blockquote className="text-lg sm:text-xl font-bold text-[#4e0b11] leading-snug">
            &quot;Ketupat adalah cerminan luhur dari filosofi ngaku lepat dan laku papat yang senantiasa mengingatkan kita untuk berani mengakui kesalahan, ikhlas berbagi, tulus memaafkan, serta menjaga kesucian hati.&quot;
          </blockquote>
        </div>
      </div>

      {/* ===== DESKTOP LAYOUT (hidden on mobile) — TIDAK DIUBAH ===== */}
      <div className="hidden md:grid mx-auto w-full max-w-[1400px] grid-cols-2 gap-8 items-center min-h-[450px] lg:min-h-[600px] relative">
        
        {/* Graphic sticking to top left */}
        <div className="flex justify-start absolute left-[-20px] lg:left-[-50px] top-0 h-[300px] lg:h-[500px] w-full md:w-1/2 pointer-events-none z-30">
          <Image
            src="/Assets/Ketupat.svg"
            alt="Ilustrasi Ketupat"
            fill
            className="object-contain object-top object-left"
          />
        </div>

        {/* Empty column to push text to the right */}
        <div></div>

        {/* Quote text on the right side */}
        <div className="flex flex-col text-left justify-center px-4 lg:px-16 z-10 py-16 lg:py-0">
          <blockquote className="text-lg sm:text-xl md:text-3xl lg:text-[34px] font-bold text-[#4e0b11] leading-snug">
            &quot;Ketupat adalah cerminan luhur dari filosofi ngaku lepat dan laku papat yang senantiasa mengingatkan kita untuk berani mengakui kesalahan, ikhlas berbagi, tulus memaafkan, serta menjaga kesucian hati.&quot;
          </blockquote>
        </div>
        
      </div>
    </section>
  );
}
