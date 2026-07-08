import Image from "next/image";

export default function KulinerQuotesSection() {
  return (
    <section className="relative z-20 bg-[#FFFFFF] py-16 lg:py-0 px-6 md:px-12 lg:px-24">
      <div className="mx-auto w-full max-w-[1400px] grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[450px] lg:min-h-[600px] relative">
        
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
        <div className="hidden md:block"></div>

        {/* Quote text on the right side */}
        <div className="flex flex-col text-center md:text-left justify-center px-4 lg:px-16 z-10 py-16 lg:py-0">
          <blockquote className="text-lg sm:text-xl md:text-3xl lg:text-[34px] font-bold text-[#4e0b11] leading-snug">
            &quot;Ketupat adalah cerminan luhur dari filosofi ngaku lepat dan laku papat yang senantiasa mengingatkan kita untuk berani mengakui kesalahan, ikhlas berbagi, tulus memaafkan, serta menjaga kesucian hati.&quot;
          </blockquote>
        </div>
        
      </div>
    </section>
  );
}
