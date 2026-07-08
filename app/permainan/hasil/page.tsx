"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useGame } from "../../../context/GameContext";

const MAX_SCORE = 660; // 300 (Batik) + 100 (Wayang) + 160 (Gamelan) + 100 (Kuliner)

interface ConfettiItem {
  id: number;
  left: string;
  animDuration: string;
  delay: string;
  bg: string;
}

export default function HasilAkhirPage() {
  const router = useRouter();
  const { scores, completed, totalScore, resetGame, PENDHAPAS } = useGame();
  const [mounted, setMounted] = useState(false);
  const [confettiItems, setConfettiItems] = useState<ConfettiItem[]>([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);

    // Generate confetti values once after mounting to avoid Math.random in render/hydration mismatch
    const items = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100 + "%",
      animDuration: Math.random() * 3 + 2 + "s",
      delay: Math.random() * 2 + "s",
      bg: Math.random() > 0.5 ? "#FFC832" : "#FFF8E7",
    }));
    setConfettiItems(items);
  }, []);

  if (!mounted) return null; // Prevent hydration mismatch

  // Check if all are completed
  const firstIncomplete = PENDHAPAS.find((p) => !completed[p as keyof typeof completed]);
  if (firstIncomplete) {
    const pendhapaName = firstIncomplete.charAt(0).toUpperCase() + firstIncomplete.slice(1);
    return (
      <div className="min-h-screen bg-[#F9F1E4] flex flex-col items-center justify-center p-6 text-center">
        <div className="bg-white border-2 border-[#4E0B11] rounded-2xl p-8 max-w-md shadow-2xl relative overflow-hidden">
          {/* Accent decoration */}
          <div className="absolute top-0 left-0 w-full h-2 bg-[#FFC832]" />
          <div className="w-20 h-20 bg-[#4E0B11] text-[#FFC832] rounded-full flex items-center justify-center mx-auto mb-6 text-4xl shadow-inner font-bold">
            !
          </div>
          <h1 className="text-2xl font-bold text-[#4E0B11] mb-2 leading-tight">Petualangan Belum Selesai!</h1>
          <p className="text-[#4A332B] mb-6 font-medium leading-relaxed">
            Kamu belum menyelesaikan <strong className="text-[#4E0B11]">Pendhapa {pendhapaName}</strong>. Mari selesaikan seluruh tantangan sebelum melihat hasil akhir gelar budayamu!
          </p>
          <Link
            href={`/permainan/${firstIncomplete}`}
            className="inline-flex justify-center items-center gap-2 bg-[#4E0B11] text-[#FFC832] font-bold text-sm px-8 py-3.5 rounded-full shadow-md hover:bg-[#3A0810] hover:-translate-y-0.5 transition-all duration-200"
          >
            Lanjutkan ke Pendhapa {pendhapaName}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    );
  }

  // Determine Title
  const pct = totalScore / MAX_SCORE;
  let title = "";
  let desc = "";
  let icon = "";

  if (pct >= 0.9) {
    title = "Sinuwun Budaya";
    desc = "Luar biasa! Pengetahuanmu tentang budaya Jawa sungguh mendalam bagaikan seorang raja. Kamu pantas menjadi penjaga kelestarian kearifan lokal.";
    icon = "SB";
  } else if (pct >= 0.7) {
    title = "Pangeran Nusantara";
    desc = "Hebat! Kamu memiliki pemahaman yang kuat tentang seni dan tradisi kita. Sedikit lagi menuju tingkat pemahaman yang sempurna.";
    icon = "PN";
  } else if (pct >= 0.5) {
    title = "Kadang Pendhapa";
    desc = "Bagus! Kamu sudah mulai mengenali berbagai rupa kebudayaan Jawa. Terus tingkatkan minatmu untuk mendalami warisan leluhur.";
    icon = "KP";
  } else {
    title = "Bocah Sinau";
    desc = "Setiap ahli bermula dari pemula. Teruslah berpetualang dan tingkatkan wawasanmu tentang budaya kita yang kaya!";
    icon = "BS";
  }

  const handleMainLagi = () => {
    resetGame();
    router.push("/permainan");
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-[#4E0B11] to-[#2D0F12] relative overflow-hidden flex flex-col items-center justify-center p-4 sm:p-6">
      
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#FFC832 2px, transparent 2px)", backgroundSize: "30px 30px" }} />
      
      {/* CSS Confetti (Only for >50%) */}
      {pct >= 0.5 && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          {confettiItems.map((item) => (
            <div
              key={item.id}
              className="absolute top-[-10%] w-2 h-6 animate-confetti rounded-sm"
              style={{
                left: item.left,
                backgroundColor: item.bg,
                animationDuration: item.animDuration,
                animationDelay: item.delay,
                animationTimingFunction: "linear",
                animationIterationCount: "infinite"
              }}
            />
          ))}
        </div>
      )}

      {/* Main Content Card */}
      <div className="relative z-10 w-full max-w-2xl bg-[#F9F1E4] rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-[#FFC832]/30 overflow-hidden text-center mt-8 mb-8 flex flex-col items-center animate-fade-in-up">
        
        {/* Card Header Pattern */}
        <div className="w-full bg-[#FFC832] h-3 shadow-inner" />
        
        <div className="px-6 py-10 sm:px-12 sm:py-12 flex flex-col items-center w-full">
          
          <span className="text-[10px] font-bold text-[#FFC832] bg-[#4E0B11] px-4 py-1.5 rounded-full uppercase tracking-[0.2em] mb-6 shadow-sm">
            Hasil Akhir Petualangan
          </span>

          <div className="text-6xl sm:text-7xl mb-4 bg-white w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center shadow-lg border-4 border-[#FFC832] animate-bounce-slow">
            {icon}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#4E0B11] mb-3 drop-shadow-sm leading-tight">
            {title}
          </h1>

          <p className="text-sm sm:text-base text-[#4A332B] font-medium max-w-md leading-relaxed mb-8">
            {desc}
          </p>

          {/* Score Box */}
          <div className="w-full bg-[#4E0B11] rounded-2xl p-6 sm:p-8 shadow-inner border border-[#2D0F12] relative overflow-hidden mb-10">
            {/* Inner decor */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFC832] opacity-5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#FFC832] opacity-5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4" />
            
            <h2 className="text-[#FFC832] text-xs font-semibold uppercase tracking-[0.2em] mb-2 relative z-10 leading-tight">
              Total Skor Keseluruhan
            </h2>
            <div className="flex items-end justify-center gap-2 relative z-10">
              <span className="text-6xl sm:text-7xl font-black text-white leading-none tabular-nums drop-shadow-md">
                {totalScore}
              </span>
              <span className="text-[#FFC832] font-bold text-lg sm:text-xl mb-1.5">
                pts
              </span>
            </div>
          </div>

          {/* Breakdown List */}
          <div className="w-full">
            <h3 className="text-left text-sm font-semibold text-[#4E0B11] uppercase tracking-wider mb-4 border-b-2 border-[#4E0B11]/10 pb-2 leading-tight">
              Rincian Perjalananmu
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full text-left">
              {[
                { key: "batik", label: "Pendhapa Batik", max: 300, icon: "B" },
                { key: "wayang", label: "Pendhapa Wayang", max: 100, icon: "W" },
                { key: "gamelan", label: "Pendhapa Gamelan", max: 160, icon: "G" },
                { key: "kuliner", label: "Pendhapa Kuliner", max: 100, icon: "K" }
              ].map((item) => {
                const s = scores[item.key as keyof typeof scores];
                return (
                  <div key={item.key} className="flex items-center justify-between bg-white border border-[#4E0B11]/15 rounded-xl p-3 sm:p-4 shadow-sm hover:-translate-y-0.5 transition-transform duration-200">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#FFC832]/20 flex items-center justify-center text-lg">
                        {item.icon}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs sm:text-sm font-bold text-[#4E0B11]">{item.label}</span>
                        <span className="text-[10px] text-[#4A332B]/70 font-medium uppercase">Maks: {item.max}</span>
                      </div>
                    </div>
                    <span className="font-bold text-[#4E0B11] text-lg tabular-nums">
                      {s}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="w-full bg-white border-t border-[#4E0B11]/10 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleMainLagi}
            className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-white text-[#4E0B11] border-2 border-[#4E0B11] font-bold text-sm px-8 py-3.5 rounded-full shadow-sm hover:bg-[#4E0B11] hover:text-[#FFC832] transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Main Lagi
          </button>
          <Link
            href="/permainan"
            className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-[#4E0B11] text-[#FFC832] font-bold text-sm px-8 py-3.5 rounded-full shadow-md hover:bg-[#3A0810] hover:-translate-y-0.5 transition-all duration-200"
          >
            Kembali ke Peta Pendhapa
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Styles for Animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes confetti {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
        }
        .animate-confetti {
          animation-name: confetti;
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}} />
    </div>
  );
}
