"use client";

import Link from "next/link";
import { useGame, Pendhapa } from "../../../context/GameContext";
import GameProgress from "../../../components/permainan/GameProgress";

const PENDHAPAS_META: { key: Pendhapa; label: string; icon: string; href: string; maxScore: number }[] = [
  { key: "batik", label: "Batik", icon: "🪡", href: "/permainan/batik", maxScore: 100 },
  { key: "wayang", label: "Wayang", icon: "🎭", href: "/permainan/wayang", maxScore: 100 },
  { key: "gamelan", label: "Gamelan", icon: "🎶", href: "/permainan/gamelan", maxScore: 100 },
  { key: "kuliner", label: "Kuliner", icon: "🍲", href: "/permainan/kuliner", maxScore: 100 },
];

const MAX_TOTAL = PENDHAPAS_META.reduce((acc, p) => acc + p.maxScore, 0);

function getGrade(pct: number) {
  if (pct >= 90) return { label: "Penjaga Budaya Utama", emoji: "🏆", color: "#FFC832", msg: "Luar biasa! Kamu benar-benar menguasai kekayaan budaya Jawa." };
  if (pct >= 75) return { label: "Penjaga Budaya Jawa", emoji: "⭐", color: "#FFC832", msg: "Hebat! Pengetahuanmu tentang budaya Jawa sangat mengesankan." };
  if (pct >= 50) return { label: "Penjelajah Budaya", emoji: "🌟", color: "#FFC832", msg: "Bagus! Teruslah belajar dan jelajahi kekayaan budaya Jawa." };
  return { label: "Pelajar Budaya", emoji: "📚", color: "#FFC832", msg: "Jangan menyerah! Setiap langkah adalah awal petualangan baru." };
}

export default function HasilPage() {
  const { scores, completed, totalScore, completedCount, resetGame } = useGame();
  const pct = MAX_TOTAL > 0 ? Math.round((totalScore / MAX_TOTAL) * 100) : 0;
  const grade = getGrade(pct);

  return (
    <div className="min-h-screen bg-[#F9F1E4] flex flex-col">
      {/* Progress bar sticky */}
      <div className="w-full bg-white border-b border-stone-200 shadow-sm sticky top-0 z-40">
        <div className="max-w-3xl mx-auto px-4 py-3 sm:px-6 sm:py-4">
          <GameProgress completed={completed} />
        </div>
      </div>

      <main className="flex-1 w-full max-w-3xl mx-auto px-4 py-8 sm:px-6 sm:py-12 flex flex-col gap-6 sm:gap-8">

        {/* ── Hero Hasil ─────────────────────────────── */}
        <section className="relative bg-gradient-to-br from-[#4E0B11] to-[#2D0F12] rounded-2xl sm:rounded-3xl overflow-hidden text-white text-center px-6 py-10 sm:py-14 shadow-xl">
          {/* Decorative dots */}
          <div className="absolute top-4 left-4 w-16 h-16 rounded-full border border-white/10" />
          <div className="absolute bottom-4 right-4 w-24 h-24 rounded-full border border-white/10" />

          <div className="relative z-10">
            <div className="text-5xl sm:text-6xl mb-3">{grade.emoji}</div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
              Petualanganmu Selesai!
            </h1>
            <p className="mt-2 text-white/70 text-sm sm:text-base font-medium">
              {grade.msg}
            </p>

            {/* Skor total */}
            <div className="mt-6 inline-flex flex-col items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-8 py-4 gap-1">
              <span className="text-xs sm:text-sm font-semibold text-white/60 uppercase tracking-widest">
                Total Skor
              </span>
              <span className="text-4xl sm:text-5xl font-bold text-[#FFC832] tabular-nums">
                {totalScore}
              </span>
              <span className="text-xs text-white/50 font-medium">
                dari {MAX_TOTAL} poin
              </span>
            </div>

            {/* Progress bar total */}
            <div className="mt-5 max-w-xs mx-auto">
              <div className="h-2.5 sm:h-3 bg-white/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#FFC832] rounded-full transition-all duration-1000"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <p className="mt-1.5 text-xs text-white/60 font-medium text-right">{pct}%</p>
            </div>

            {/* Badge gelar */}
            <div className="mt-4">
              <span className="inline-flex items-center gap-2 bg-[#FFC832] text-[#4E0B11] text-xs sm:text-sm font-bold rounded-full px-4 py-1.5">
                🏅 {grade.label}
              </span>
            </div>
          </div>
        </section>

        {/* ── Skor Per Pendhapa ─────────────────────── */}
        <section>
          <h2 className="text-base sm:text-lg font-bold text-[#4E0B11] mb-3 sm:mb-4">
            Rincian Skor Per Pendhapa
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {PENDHAPAS_META.map((p) => {
              const score = scores[p.key] || 0;
              const isPendhapaDone = completed[p.key];
              const barPct = p.maxScore > 0 ? Math.round((score / p.maxScore) * 100) : 0;

              return (
                <div
                  key={p.key}
                  className="bg-white rounded-xl border border-[#4E0B11]/20 p-4 sm:p-5 shadow-sm flex flex-col gap-3"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#4E0B11]/10 flex items-center justify-center text-lg sm:text-xl shrink-0">
                        {p.icon}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#4E0B11] leading-tight">
                          {p.label}
                        </p>
                        <p className="text-[10px] sm:text-xs text-[#4A332B] font-medium">
                          {isPendhapaDone ? "✅ Selesai" : "⏳ Belum diselesaikan"}
                        </p>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-xl sm:text-2xl font-bold text-[#4E0B11] tabular-nums">
                        {score}
                      </span>
                      <span className="text-[10px] sm:text-xs text-[#4A332B] font-medium block">
                        / {p.maxScore}
                      </span>
                    </div>
                  </div>

                  {/* Bar per pendhapa */}
                  <div className="h-2 bg-[#F9F1E4] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: `${barPct}%`,
                        backgroundColor: isPendhapaDone ? "#FFC832" : "#4E0B11",
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Statistik Singkat ─────────────────────── */}
        <section className="grid grid-cols-3 gap-3 sm:gap-4">
          {[
            { label: "Pendhapa Selesai", value: `${completedCount}/4`, icon: "🏛️" },
            { label: "Total Poin", value: totalScore, icon: "⭐" },
            { label: "Akurasi", value: `${pct}%`, icon: "🎯" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-xl border border-[#4E0B11]/20 p-3 sm:p-4 text-center shadow-sm flex flex-col items-center gap-1.5"
            >
              <span className="text-xl sm:text-2xl">{stat.icon}</span>
              <span className="text-lg sm:text-2xl font-bold text-[#4E0B11] tabular-nums">
                {stat.value}
              </span>
              <span className="text-[10px] sm:text-xs text-[#4A332B] font-medium leading-tight text-center">
                {stat.label}
              </span>
            </div>
          ))}
        </section>

        {/* ── CTA Buttons ───────────────────────────── */}
        <section className="flex flex-col sm:flex-row gap-3 pt-2 pb-6">
          <Link
            href="/permainan/batik"
            onClick={resetGame}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-[#4E0B11] text-white font-bold text-sm sm:text-base px-6 py-3 sm:py-3.5 rounded-full shadow-md hover:bg-[#3A0810] hover:-translate-y-0.5 transition-all duration-200 active:translate-y-0"
          >
            🔄 Main Lagi
          </Link>
          <Link
            href="/"
            className="flex-1 inline-flex items-center justify-center gap-2 border border-[#4E0B11] text-[#4E0B11] font-bold text-sm sm:text-base px-6 py-3 sm:py-3.5 rounded-full hover:bg-[#4E0B11] hover:text-white transition-all duration-200"
          >
            🏠 Kembali ke Beranda
          </Link>
          <Link
            href="/#explore-section"
            className="flex-1 inline-flex items-center justify-center gap-2 border border-[#4E0B11]/30 text-[#4A332B] font-bold text-sm sm:text-base px-6 py-3 sm:py-3.5 rounded-full hover:bg-[#4E0B11]/5 transition-all duration-200"
          >
            🗺️ Jelajahi Peta
          </Link>
        </section>

      </main>
    </div>
  );
}
