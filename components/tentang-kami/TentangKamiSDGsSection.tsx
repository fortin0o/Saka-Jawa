const sdgs = [
  {
    number: "8",
    color: "#A13D2B",
    label: "Pekerjaan Layak & Pertumbuhan Ekonomi",
    description:
      "Mendukung penghidupan perajin batik, dalang, dan pengrajin tradisional dengan membuka akses pasar dan apresiasi yang lebih luas terhadap karya mereka.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
  },
  {
    number: "11",
    color: "#6B4A2F",
    label: "Kota & Komunitas Berkelanjutan",
    description:
      "Dengan mempromosikan warisan budaya lokal, Saka Jawa berkontribusi pada pembangunan komunitas yang inklusif, berkelanjutan, dan memiliki identitas budaya yang kuat di tengah modernisasi.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    number: "15",
    color: "#5C7A5E",
    label: "Ekosistem daratan",
    description:
      "Turut menjaga pengetahuan tradisional tentang bahan alami, seperti pewarna batik dari tumbuhan, yang selama ini menopang kelestarian lingkungan sekitar.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
];

export default function TentangKamiSDGsSection() {
  return (
    <section
      id="sdgs"
      className="px-6 py-24 md:px-12 lg:px-24"
      style={{ background: "var(--color-cream)" }}
    >
      <div className="mx-auto w-full max-w-[var(--container-lg)]">
        {/* Header */}
        <div className="text-center mb-4">
          <p className="text-[#5B0917] text-sm font-bold tracking-[0.18em] uppercase mb-3">
            Global Goals
          </p>
          <h2 className="text-3xl md:text-[40px] font-bold text-[#4E0B11] mb-4">
            Kontribusi terhadap SDGs
          </h2>
          <p className="text-[#4A332B] text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
           Saka Jawa mendukung tiga tujuan pembangunan berkelanjutan melalui pelestarian budaya, penghidupan perajin, 
           dan pengetahuan tradisional yang selaras dengan alam.
          </p>
        </div>

        {/* SDG Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          {sdgs.map((sdg) => (
            <div
              key={sdg.number}
              className="group relative bg-white rounded-2xl p-8 border border-[#E8D4D6] hover:-translate-y-2 transition-transform duration-300 flex flex-col gap-4"
              style={{ borderTop: `5px solid ${sdg.color}` }}
            >
              {/* Number */}
              <div
                className="text-7xl md:text-8xl font-black leading-none"
                style={{ color: sdg.color, opacity: 0.15 }}
                aria-hidden="true"
              >
                {sdg.number}
              </div>

              {/* Icon + Label row */}
              <div className="flex items-center gap-3 -mt-10">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0"
                  style={{ backgroundColor: sdg.color }}
                >
                  {sdg.icon}
                </div>
                <div>
                  <p className="text-[11px] font-bold tracking-widest uppercase text-[#888]">
                    SDG {sdg.number}
                  </p>
                  <p className="font-bold text-[#1A1A1A] text-[15px] leading-tight">
                    {sdg.label}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-[#4A332B] text-[14px] leading-relaxed">
                {sdg.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
