import React from "react";

export default function BatikMotifSection() {
  const motifs = [
    {
      title: "Motif Solo",
      desc: "Batik keraton Solo memiliki ciri khas warna soga (cokelat keemasan) yang hangat, melambangkan kerendahan hati dan kesederhanaan.",
      imageSrc: "https://placehold.co/400x300/D9D9D9/888888?text=Batik+Solo",
    },
    {
      title: "Motif Jogja",
      desc: "Batik Jogja dikenal dengan warna dasar putih bersih atau hitam tegas, mencerminkan ketegasan karakter, keberanian, dan kesucian jiwa.",
      imageSrc: "https://placehold.co/400x300/D9D9D9/888888?text=Batik+Jogja",
    },
    {
      title: "Motif Pekalongan",
      desc: "Batik pesisiran kaya akan warna cerah dan motif flora fauna dinamis, melambangkan keterbukaan dan akulturasi budaya yang indah.",
      imageSrc: "https://placehold.co/400x300/D9D9D9/888888?text=Batik+Pekalongan",
    },
  ];

  return (
    <section
      className="relative overflow-hidden px-6 py-20 bg-[#F9F1E4] md:px-12 lg:px-24 lg:py-28"
      id="batik-motif"
    >
      <div className="mx-auto w-full max-w-[var(--container-lg)] relative z-10">
        
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-[42px] font-extrabold text-[#4E0B11] mb-3">
            Ragam Motif Batik
          </h2>
          <p className="text-base font-medium text-gray-800 max-w-2xl">
            Kenali beberapa motif khas dari berbagai daerah di pulau Jawa dan pesonanya dalam menciptakan harmoni budaya
          </p>
        </div>

        {/* Motifs Grid - Exactly 3 Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {motifs.map((motif, index) => (
            <article
              key={index}
              className="flex flex-col items-center border border-[#4E0B11] rounded-2xl p-5 md:p-6 text-center bg-transparent"
            >
              {/* Image Container */}
              <div className="w-full aspect-[4/3] bg-[#D9D9D9] rounded-xl overflow-hidden mb-6 relative">
                {/* Menggunakan tag img standar agar link external placehold.co tidak diblokir config domain Next.js */}
                <img
                  src={motif.imageSrc}
                  alt={motif.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Details */}
              <h3 className="text-xl font-bold text-[#4E0B11] mb-3">
                {motif.title}
              </h3>
              
              <p className="text-[13px] md:text-[14px] font-medium text-gray-800 leading-relaxed mb-8 px-2">
                {motif.desc}
              </p>

              {/* Detail Button */}
              <button className="mt-auto px-8 py-2.5 border border-[#4E0B11] text-[#4E0B11] font-bold rounded-full text-sm hover:bg-[#4E0B11] hover:text-[#F9F1E4] transition-colors">
                Lihat Detail
              </button>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
