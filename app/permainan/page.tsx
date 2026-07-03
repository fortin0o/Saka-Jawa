import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Petualangan 4 Pendhapa | Saka Jawa",
  description:
    "Mulai petualangan budaya Jawa — jelajahi 4 Pendhapa: Batik, Wayang, Gamelan, dan Kuliner bersama Saka Jawa.",
};

const pendhapas = [
  {
    key: "batik",
    label: "Pendhapa Batik",
    color: "#FFC832",
    desc: "Motif & filosofi kain Jawa",
    icon: "🪡",
  },
  {
    key: "wayang",
    label: "Pendhapa Wayang",
    color: "#FFC832",
    desc: "Tokoh & cerita pewayangan",
    icon: "🎭",
  },
  {
    key: "gamelan",
    label: "Pendhapa Gamelan",
    color: "#FFC832",
    desc: "Instrumen & harmoni musik",
    icon: "🎶",
  },
  {
    key: "kuliner",
    label: "Pendhapa Kuliner",
    color: "#FFC832",
    desc: "Cita rasa masakan tradisional",
    icon: "🍲",
  },
];

export default function PermainanIntroPage() {
  return (
    <div className="min-h-screen bg-[#F9F1E4] overflow-hidden">
      {/* ── Hero Section ─────────────────────────────── */}
      <section className="relative w-full bg-gradient-to-br from-[#4E0B11] to-[#2D0F12] overflow-hidden">
        {/* Decorative gunungan kanan */}
        <div className="absolute -right-12 -top-8 w-56 sm:w-72 md:w-96 h-auto opacity-10 pointer-events-none">
          <Image
            src="/Assets/Gunungan CTA Atas.svg"
            alt=""
            width={400}
            height={500}
            className="object-contain rotate-180 w-full h-auto"
            unoptimized
          />
        </div>
        {/* Decorative gunungan kiri bawah */}
        <div className="absolute -left-10 -bottom-10 w-40 sm:w-56 md:w-72 opacity-10 pointer-events-none">
          <Image
            src="/Assets/Gunungan CTA Bawah.svg"
            alt=""
            width={300}
            height={400}
            className="object-contain w-full h-auto"
            unoptimized
          />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24 text-center">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#4E0B11] bg-[#FFC832] rounded-full px-4 py-1.5 mb-6">
            🎮 Game Edukasi
          </span>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
            Petualangan
            <br />
            <span className="text-[#FFC832]">4 Pendhapa</span>
          </h1>

          {/* Sub */}
          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-white/80 font-medium leading-relaxed max-w-xl mx-auto">
            Jelajahi empat pendhapa penuh cerita dan kearifan. Jawab tantangan
            di setiap pendhapa untuk mengungkap kekayaan budaya Jawa!
          </p>

          {/* CTA */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/permainan/batik"
              id="btn-mulai-petualangan"
              className="inline-flex items-center gap-3 bg-[#FFC832] text-[#4E0B11] font-bold text-sm sm:text-base px-7 sm:px-9 py-3 sm:py-3.5 rounded-full shadow-lg hover:bg-[#e6b42d] hover:-translate-y-0.5 transition-all duration-200 active:translate-y-0 w-full sm:w-auto justify-center"
            >
              <span>Mulai Petualangan</span>
              <span className="bg-[#4E0B11] text-[#FFC832] rounded-full w-6 h-6 flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </Link>

            <Link
              href="/#explore-section"
              className="inline-flex items-center gap-2 text-white/80 text-sm font-semibold border border-white/30 rounded-full px-6 py-3 hover:bg-white/10 transition-all duration-200 w-full sm:w-auto justify-center"
            >
              Lihat Peta Budaya
            </Link>
          </div>
        </div>
      </section>

      {/* ── Info 4 Pendhapa ───────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Label section */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#4E0B11]">
            4 Pendhapa Menantimu
          </h2>
          <p className="text-sm sm:text-base text-[#4A332B] font-medium mt-2">
            Selesaikan semua pendhapa untuk meraih gelar Penjaga Budaya Jawa
          </p>
        </div>

        {/* Grid pendhapa */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {pendhapas.map((p, i) => (
            <div
              key={p.key}
              className="flex flex-col items-center text-center gap-2 bg-white rounded-xl sm:rounded-2xl border border-[#4E0B11]/20 p-4 sm:p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              {/* Nomor + ikon */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#4E0B11] flex items-center justify-center text-xl sm:text-2xl shrink-0">
                {p.icon}
              </div>
              {/* Nomor urut */}
              <span className="text-[10px] sm:text-xs font-bold text-[#FFC832] uppercase tracking-widest">
                #{i + 1}
              </span>
              <h3 className="text-xs sm:text-sm font-bold text-[#4E0B11] leading-tight">
                {p.label}
              </h3>
              <p className="text-[10px] sm:text-xs text-[#4A332B] font-medium leading-snug">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Info cara bermain */}
        <div className="mt-8 sm:mt-10 bg-white border border-[#4E0B11]/20 rounded-xl sm:rounded-2xl p-5 sm:p-6">
          <h3 className="text-base sm:text-lg font-bold text-[#4E0B11] mb-3 sm:mb-4">
            📜 Cara Bermain
          </h3>
          <ol className="space-y-2.5">
            {[
              "Kunjungi setiap pendhapa secara berurutan, dari Batik hingga Kuliner.",
              "Jawab tantangan atau kuis di setiap pendhapa untuk mendapatkan skor.",
              "Kumpulkan skor terbaik di semua pendhapa.",
              "Lihat hasil akhirmu dan raih gelar Penjaga Budaya Jawa!",
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#4E0B11] text-[#FFC832] flex items-center justify-center text-[10px] sm:text-xs font-bold shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span className="text-xs sm:text-sm text-[#4A332B] font-medium leading-relaxed">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </div>

        {/* CTA bawah */}
        <div className="mt-8 text-center">
          <Link
            href="/permainan/batik"
            className="inline-flex items-center gap-2 bg-[#4E0B11] text-white font-bold text-sm sm:text-base px-8 sm:px-10 py-3 sm:py-3.5 rounded-full shadow-md hover:bg-[#3A0810] hover:-translate-y-0.5 transition-all duration-200 active:translate-y-0"
          >
            Mulai dari Pendhapa Batik
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
