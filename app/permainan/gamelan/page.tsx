"use client";

import GameLayout from "../../../components/permainan/GameLayout";

export default function GamelanGamePage() {
  return (
    <GameLayout
      title="Harmoni Gamelan Jawa"
      subtitle="Dengarkan, kenali, dan jawab tantangan seputar instrumen ansambel gamelan Jawa."
      pendhapa="gamelan"
      nextHref="/permainan/kuliner"
      nextLabel="Lanjut ke Kuliner"
    >
      {/* ── PLACEHOLDER — mini-game akan diisi di sini ── */}
      <div className="flex flex-col items-center justify-center min-h-[300px] sm:min-h-[360px] rounded-xl sm:rounded-2xl border-2 border-dashed border-[#4E0B11]/30 bg-white/60 p-6 sm:p-10 text-center gap-4">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#4E0B11]/10 flex items-center justify-center text-3xl sm:text-4xl">
          🎶
        </div>
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-[#4E0B11]">
            Mini-Game Gamelan
          </h2>
          <p className="text-xs sm:text-sm text-[#4A332B] font-medium mt-1.5 max-w-xs mx-auto leading-relaxed">
            Area permainan akan dibangun di sini. Tebak nama instrumen gamelan
            dan fungsinya dalam ansambel!
          </p>
        </div>
        <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-[#FFC832] bg-[#4E0B11] rounded-full px-3 py-1">
          🚧 Segera Hadir
        </span>
      </div>
    </GameLayout>
  );
}
