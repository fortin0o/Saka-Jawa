const visiMisi = [
  {
    type: "Visi",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    title: "Visi",
    body:
      "Menjadi platform digital terdepan yang menghidupkan kembali kecintaan generasi muda terhadap budaya Jawa — melalui pengalaman yang interaktif, mendalam, dan mudah diakses oleh siapa pun, di mana pun.",
  },
  {
    type: "Misi",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <circle cx="12" cy="12" r="6"/>
        <circle cx="12" cy="12" r="2"/>
      </svg>
    ),
    title: "Misi",
    body:
      "Menyajikan konten budaya Jawa (Batik, Wayang, Gamelan, Kuliner) secara visual dan interaktif; membangun ekosistem digital yang mendorong kolaborasi antargenerasi; serta berkontribusi pada pelestarian warisan budaya yang diakui dunia.",
  },
];

export default function TentangKamiVisiMisiSection() {
  return (
    <section
      id="visi-misi"
      className="px-6 py-24 md:px-12 lg:px-24 bg-white"
    >
      <div className="mx-auto w-full max-w-[var(--container-lg)]">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#5B0917] text-sm font-bold tracking-[0.18em] uppercase mb-3 leading-relaxed">
            Arah & Tujuan
          </p>
          <h2 className="text-3xl md:text-[40px] font-semibold text-[#4E0B11] leading-tight">
            Visi & Misi
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visiMisi.map((item) => (
            <div
              key={item.type}
              className="relative bg-[#F8F5EE] rounded-2xl p-8 md:p-10 border-t-4 border-[#FFC832] flex flex-col gap-5"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-[#4E0B11] text-[#FFC832] flex items-center justify-center shrink-0">
                {item.icon}
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-[#4E0B11] mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-[#4A332B] text-[15px] md:text-base leading-relaxed font-normal">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
