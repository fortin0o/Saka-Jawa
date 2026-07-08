import Image from "next/image";

export default function BatikAboutSection() {
  const points = [
    {
      desc: "Ambatik berarti menulis titik. Keahlian menulis motif halus menggunakan lilin malam panas.",
    },
    {
      desc: "Diakui UNESCO sebagai Masterpiece of the Oral and Intangible Heritage of Humanity.",
    },
    {
      desc: "Setiap guratan motif memuat doa, ketabahan, ajaran hidup, dan berkah spiritual pemakainya.",
    },
  ];

  return (
    <section
      className="relative overflow-hidden px-4 py-16 sm:px-6 md:px-12 lg:px-24 lg:py-32 bg-linear-to-r from-[#2D0F12] to-[#5B0917]"
      id="batik-about"
    >
      {/* Decorative Flowers */}
      <div className="absolute top-0 left-0 w-56 h-56 md:w-80 md:h-80 pointer-events-none -translate-x-1/4 -translate-y-1/4 opacity-90">
        <Image
          src="/Assets/BungaKuning.svg"
          alt="Bunga Kuning"
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute top-0 right-0 w-56 h-56 md:w-96 md:h-96 pointer-events-none translate-x-1/4 -translate-y-1/4 opacity-90">
        <Image
          src="/Assets/BungaKuning2.svg"
          alt="Bunga Kuning 2"
          fill
          className="object-contain"
        />
      </div>

      <div className="mx-auto w-full max-w-[var(--container-lg)] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col text-white pt-10">
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-semibold text-[#FFC832] mb-4 md:mb-6 leading-tight">
              Seni Batik Jawa
            </h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-100 max-w-lg mb-8 md:mb-12 font-normal">
              Seni batik Jawa bukan sekadar keterampilan mewarnai tekstil, melainkan bentuk peradaban spiritual. Di masa lampau, membatik merupakan aktivitas luhur yang dilakukan dengan iringan doa, keheningan rasa, dan ketabahan hati.
            </p>

            {/* 3 Icons Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pr-4">
              {points.map((p, index) => (
                <div key={index} className="flex flex-col items-center sm:items-start text-center sm:text-left gap-4">
                  <div className="h-10 w-12 relative opacity-90 flex justify-center sm:justify-start">
                    <Image
                      src="/Assets/DaunKuning.svg"
                      alt="Ikon daun"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-[13px] text-gray-200 leading-relaxed font-normal">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Fact Card */}
          <div className="lg:col-span-6 relative w-full max-w-[540px] mx-auto lg:ml-auto mt-12 lg:mt-4">
            {/* Yellow Angle Accents */}
            <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-16 h-16 md:w-24 md:h-24 border-t-[8px] border-l-[8px] md:border-t-[12px] md:border-l-[12px] border-[#FFC832] rounded-tl-xl z-0"></div>
            <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 w-16 h-16 md:w-24 md:h-24 border-b-[8px] border-r-[8px] md:border-b-[12px] md:border-r-[12px] border-[#FFC832] rounded-br-xl z-0"></div>

            {/* Main Card */}
            <div className="relative z-10 bg-[#F8F5EE] rounded-xl p-6 md:p-8 md:pr-[160px] pr-[110px] shadow-2xl flex flex-col justify-center min-h-[260px]">
              
              {/* Left Content inside Card */}
              <div className="relative z-10 flex flex-col justify-center">
                <div className="w-16 h-8 md:w-20 md:h-10 relative -ml-2 mb-2">
                  <Image src="/Assets/LeftMegaMendung.svg" alt="Mega Mendung" fill className="object-contain object-left-top" />
                </div>
                
                <h3 className="text-2xl md:text-[32px] font-semibold text-[#4E0B11] mb-4 leading-tight">
                  Tahukah Kamu?
                </h3>
                
                <p className="text-[13px] md:text-[14px] font-medium text-gray-800 leading-relaxed mb-4">
                  Pembuatan kain batik tulis halus tradisional dapat memakan waktu antara 2 hingga 6 bulan. Setiap goresan lilin panas membutuhkan ketenangan pikiran dan kesabaran.
                </p>

                <div className="w-16 h-8 md:w-20 md:h-10 relative ml-auto mr-4 md:mr-12">
                  <Image src="/Assets/RightMegaMendung.svg" alt="Mega Mendung" fill className="object-contain object-right-bottom" />
                </div>
              </div>

              {/* Character Image */}
              <div className="absolute top-1/2 -translate-y-1/2 right-6 md:right-4 w-[120px] md:w-[180px] flex items-center justify-center pointer-events-none z-20">
                <Image 
                  src="/Assets/SambutTamuAbout.svg" 
                  alt="Karakter Mascot" 
                  width={200} 
                  height={320} 
                  className="object-contain object-center h-[200px] md:h-[280px] w-auto drop-shadow-xl"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
