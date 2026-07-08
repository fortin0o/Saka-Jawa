const nilaiNilai = [
  {
    label: "Pelestarian",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
      </svg>
    ),
    description: "Melestarikan warisan leluhur Jawa agar tidak terkikis zaman",
  },
  {
    label: "Edukasi",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
    description: "Menyebarkan pengetahuan budaya secara menarik dan mudah dipahami",
  },
  {
    label: "Interaktif",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    description: "Menghadirkan pengalaman digital yang hidup, visual, dan engaging",
  },
  {
    label: "Kolaboratif",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    description: "Membangun sinergi antara komunitas, seniman, dan generasi muda",
  },
];

export default function TentangKamiNilaiSection() {
  return (
    <section
      id="nilai-nilai"
      className="relative overflow-hidden px-6 py-24 md:px-12 lg:px-24"
      style={{
        background: "radial-gradient(ellipse at 50% 50%, #5B0917 0%, #2D0F12 94%)",
      }}
    >
      <div className="mx-auto w-full max-w-[var(--container-lg)]">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#FFC832] text-sm font-bold tracking-[0.18em] uppercase mb-3 leading-relaxed">
            Pondasi Kami
          </p>
          <h2 className="text-3xl md:text-[40px] font-semibold text-white leading-tight">
            Nilai-Nilai Kami
          </h2>
          <p className="text-white/70 text-base mt-3 max-w-xl mx-auto leading-relaxed font-normal">
            Empat prinsip utama yang menjadi landasan setiap langkah Tim Golek Howo
          </p>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          {nilaiNilai.map((nilai) => (
            <div key={nilai.label} className="flex flex-col items-center text-center gap-4">
              {/* Circle Badge */}
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-[#FFC832]/15 border-2 border-[#FFC832]/40 flex items-center justify-center text-[#FFC832] shrink-0 hover:bg-[#FFC832]/25 hover:scale-105 transition-all duration-300 cursor-default">
                {nilai.icon}
              </div>
              <div>
                <p className="text-white font-bold text-base md:text-lg mb-1 leading-relaxed">
                  {nilai.label}
                </p>
                <p className="text-white/60 text-[13px] leading-relaxed max-w-[160px] mx-auto font-normal">
                  {nilai.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
