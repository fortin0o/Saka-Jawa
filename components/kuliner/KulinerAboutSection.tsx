import Image from "next/image";

export default function KulinerAboutSection() {
  const points = [
    {
      desc: "Nasi Liwet khas Solo melambangkan penolakan bala dan rasa syukur yang mendalam kepada Sang Pencipta.",
    },
    {
      desc: "Gudeg Jogja dimasak berjam-jam untuk menghasilkan rasa manis, mencerminkan kesabaran dan ketenangan.",
    },
    {
      desc: "Tumpeng kuning sering disajikan saat perayaan sebagai simbol gunung suci yang menghubungkan manusia dan Tuhan.",
    },
  ];

  return (
    <section
      className="relative overflow-hidden px-4 py-16 sm:px-6 md:px-12 lg:px-24 lg:py-32 bg-gradient-to-l from-[#2D0F12] to-[#5B0917]"
      id="tentang"
    >
      {/* Decorative Flowers (Optional, similar to Batik) */}
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
          
          {/* Left Column: Tahukah Kamu Card */}
          <div className="lg:col-span-6 relative w-full max-w-[540px] mx-auto lg:mr-auto mt-12 lg:mt-4">
            {/* Yellow Angle Accents (Flipped for left side: top-right and bottom-left) */}
            <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-16 h-16 md:w-24 md:h-24 border-t-[8px] border-r-[8px] md:border-t-[12px] md:border-r-[12px] border-[#FFC832] rounded-tr-xl z-0"></div>
            <div className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4 w-16 h-16 md:w-24 md:h-24 border-b-[8px] border-l-[8px] md:border-b-[12px] md:border-l-[12px] border-[#FFC832] rounded-bl-xl z-0"></div>

            {/* Main Card */}
            <div className="relative z-10 bg-[#F8F5EE] rounded-xl p-6 md:p-8 md:pl-[160px] pl-[110px] shadow-2xl flex flex-col justify-center min-h-[260px]">
              
              {/* Character Image (Positioned on the Left) */}
              <div className="absolute top-1/2 -translate-y-1/2 left-6 md:left-4 w-[120px] md:w-[180px] flex items-center justify-center pointer-events-none z-20">
                <Image 
                  src="/Assets/SambutTamuAbout.svg" 
                  alt="Karakter Mascot" 
                  width={200} 
                  height={320} 
                  className="object-contain object-center h-[200px] md:h-[280px] w-auto drop-shadow-xl scale-x-[-1]"
                />
              </div>

              {/* Right Content inside Card */}
              <div className="relative z-10 flex flex-col justify-center text-right">
                <div className="w-16 h-8 md:w-20 md:h-10 relative ml-auto -mr-2 mb-2">
                  <Image src="/Assets/RightMegaMendung.svg" alt="Mega Mendung" fill className="object-contain object-right-top" />
                </div>
                
                <h3 className="text-2xl md:text-[32px] font-bold text-[#4E0B11] mb-4">
                  Tahukah Kamu?
                </h3>
                
                <p className="text-[13px] md:text-[14px] font-medium text-gray-800 leading-relaxed mb-4">
                  Selain cita rasa yang lezat, setiap komponen dalam sajian Tumpeng melambangkan hubungan vertikal manusia dengan Tuhan dan hubungan horizontal dengan sesama.
                </p>

                <div className="w-16 h-8 md:w-20 md:h-10 relative mr-auto ml-4 md:ml-12">
                  <Image src="/Assets/LeftMegaMendung.svg" alt="Mega Mendung" fill className="object-contain object-left-bottom" />
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Aneka Kuliner Jawa */}
          <div className="lg:col-span-6 flex flex-col text-white pt-10">
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-[#FFC832] mb-4 md:mb-6 text-center lg:text-right">
              Aneka Kuliner Jawa
            </h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-100 max-w-lg mb-8 md:mb-12 text-center lg:text-right ml-auto">
              Kuliner Jawa bukan sekadar hidangan pengisi perut, melainkan karya seni yang memadukan kekayaan rempah Nusantara dengan warisan leluhur yang tak lekang oleh waktu. Setiap resep adalah warisan budaya yang penuh filosofi.
            </p>

            {/* 3 Icons Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pl-4">
              {points.map((p, index) => (
                <div key={index} className="flex flex-col items-center lg:items-end text-center lg:text-right gap-4">
                  <div className="h-10 w-12 relative opacity-90 flex justify-center lg:justify-end">
                    <Image
                      src="/Assets/DaunKuning.svg"
                      alt="Ikon daun"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-[13px] text-gray-200 leading-relaxed font-['League_Spartan']">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
