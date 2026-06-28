import Image from "next/image";
import { batikHeroContent } from "./batik-hero-content";

export default function BatikHeroSection() {
  const { badge, headline, subheadline, description, actions, image, dots } =
    batikHeroContent;

  return (
    <section
      className="relative w-full overflow-hidden bg-white pt-8 pb-20 lg:py-24"
      id="batik-hero"
    >
      {/* Background Ornaments */}
      <div className="absolute top-[12%] right-[6%] hidden h-[60px] w-[60px] animate-float opacity-[0.03] lg:block">
        <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30" r="28" stroke="#FFC832" strokeWidth="2" fill="none" />
          <circle cx="30" cy="30" r="14" stroke="#4E0B11" strokeWidth="1.5" fill="none" />
        </svg>
      </div>

      {/* Main Grid: Full width to allow flush-left image */}
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-0">
        
        {/* Column 1: Image (Flush left) */}
        <div className="flex flex-col items-start w-full gap-5 order-1 lg:gap-6">
          <div className="relative w-[92%] sm:w-[85%] md:w-[75%] lg:w-[85%] xl:w-[80%] h-[240px] sm:h-[320px] md:h-[380px] lg:h-[400px] xl:h-[460px] overflow-hidden rounded-tr-[100px] rounded-br-[100px] md:rounded-tr-[160px] md:rounded-br-[160px] lg:rounded-tr-[200px] lg:rounded-br-[200px] rounded-l-none shadow-[0_12px_40px_rgba(78,11,17,0.08),0_4px_12px_rgba(0,0,0,0.04)]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-gold/5 via-transparent via-60% to-maroon/3" />
          </div>
          
          {/* Pagination Dots: Centered under the image */}
          <div className="flex w-[92%] sm:w-[85%] md:w-[75%] lg:w-[85%] xl:w-[80%] justify-center items-center gap-2">
            {Array.from({ length: dots.count }, (_, index) => {
              const isActive = index === dots.activeIndex;

              return (
                <span
                  key={index}
                  className={
                    isActive
                      ? "h-2.5 w-7 cursor-pointer rounded-[5px] bg-[#FFC832] opacity-100 transition-all duration-300"
                      : "h-2.5 w-2.5 cursor-pointer rounded-full bg-[#4E0B11] opacity-35 transition-all duration-300 hover:opacity-60"
                  }
                />
              );
            })}
          </div>
        </div>

        {/* Column 2: Text Content */}
        <div className="flex flex-col items-center text-center px-6 order-2 md:px-12 lg:items-start lg:text-left lg:pl-16 lg:pr-10 xl:pl-24">
          <div className="w-full max-w-[540px] flex flex-col items-center lg:items-start">
            {/* Badge */}
            <div className="inline-flex animate-fade-in-up items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-1.5 shadow-sm transition-all duration-300 hover:border-[#4E0B11] hover:shadow-[0_2px_8px_rgba(78,11,17,0.08)]">
              {badge.iconSrc && (
                <Image
                  src={badge.iconSrc}
                  alt={badge.iconAlt}
                  width={28}
                  height={28}
                  className="h-7 w-7 shrink-0 object-contain"
                />
              )}
              <span className="text-sm font-semibold tracking-wide text-gray-900">
                {badge.label}
              </span>
            </div>

            {/* Headline */}
            <h1 className="mt-6 animate-fade-in-up text-[2.5rem] leading-[1.08] font-bold tracking-tight text-black [animation-delay:0.1s] sm:text-[3rem] xl:text-[3.75rem]">
              {headline}
            </h1>

            {/* Subheadline */}
            <p className="mt-3 animate-fade-in-up text-xl leading-snug font-semibold tracking-tight text-[#4E0B11] [animation-delay:0.2s] sm:text-2xl">
              {subheadline}
            </p>

            {/* Description */}
            <p className="mt-4 animate-fade-in-up text-base leading-[1.8] text-gray-600 [animation-delay:0.3s]">
              {description}
            </p>

            {/* Actions */}
            <div className="mt-8 flex w-full flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              {actions.map((action) => {
                const isPrimary = action.variant === "primary";
                return (
                  <a
                    key={action.id}
                    href={isPrimary ? "#batik-about" : "#batik-motif"}
                    className={
                      isPrimary
                        ? "inline-flex items-center justify-center rounded-full bg-[#4E0B11] px-8 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#3A0810] hover:shadow-lg active:translate-y-0"
                        : "inline-flex items-center justify-center rounded-full border-[1.5px] border-[#4E0B11] bg-white px-8 py-3.5 text-sm font-semibold text-[#4E0B11] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#4E0B11]/5 hover:shadow-md active:translate-y-0"
                    }
                  >
                    {action.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Wave Divider */}
      <div className="absolute bottom-0 left-0 z-10 w-full leading-none pointer-events-none">
        <Image
          src="/Assets/Batik Sambungan.svg"
          alt="Batik Sambungan Border"
          width={1440}
          height={81}
          className="w-full h-auto object-cover min-h-[40px]"
          priority
        />
      </div>
    </section>
  );
}
