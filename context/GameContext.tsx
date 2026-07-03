"use client";

import { createContext, useContext, useState, ReactNode } from "react";

/**
 * GameContext — menyimpan state game "Petualangan 4 Pendhapa"
 * Hidup selama sesi browser, reset saat halaman di-refresh (by design).
 * Tidak ada localStorage, sessionStorage, atau API call.
 */

const PENDHAPAS = ["batik", "wayang", "gamelan", "kuliner"] as const;
export type Pendhapa = typeof PENDHAPAS[number];

const defaultScores: Record<Pendhapa, number> = { batik: 0, wayang: 0, gamelan: 0, kuliner: 0 };
const defaultCompleted: Record<Pendhapa, boolean> = { batik: false, wayang: false, gamelan: false, kuliner: false };

interface GameContextType {
  scores: Record<Pendhapa, number>;
  completed: Record<Pendhapa, boolean>;
  totalScore: number;
  completedCount: number;
  updateScore: (pendhapa: Pendhapa, score: number) => void;
  markCompleted: (pendhapa: Pendhapa) => void;
  resetGame: () => void;
  PENDHAPAS: readonly string[];
}

const GameContext = createContext<GameContextType | null>(null);

export function GameProvider({ children }: { children: ReactNode }) {
  const [scores, setScores] = useState(defaultScores);
  const [completed, setCompleted] = useState(defaultCompleted);

  /** Update skor satu pendhapa. Skor baru menggantikan lama (tidak diakumulasi). */
  const updateScore = (pendhapa: Pendhapa, score: number) => {
    if (!PENDHAPAS.includes(pendhapa as any)) return;
    setScores((prev) => ({ ...prev, [pendhapa]: score }));
  };

  /** Tandai pendhapa sebagai selesai. */
  const markCompleted = (pendhapa: Pendhapa) => {
    if (!PENDHAPAS.includes(pendhapa as any)) return;
    setCompleted((prev) => ({ ...prev, [pendhapa]: true }));
  };

  /** Reset seluruh progres ke kondisi awal. */
  const resetGame = () => {
    setScores(defaultScores);
    setCompleted(defaultCompleted);
  };

  /** Total skor dari semua pendhapa. */
  const totalScore = Object.values(scores).reduce((acc, s) => acc + s, 0);

  /** Jumlah pendhapa yang sudah diselesaikan. */
  const completedCount = Object.values(completed).filter(Boolean).length;

  return (
    <GameContext.Provider
      value={{
        scores,
        completed,
        totalScore,
        completedCount,
        updateScore,
        markCompleted,
        resetGame,
        PENDHAPAS,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

/** Hook untuk mengakses GameContext. Harus dipakai di dalam <GameProvider>. */
export function useGame() {
  const ctx = useContext(GameContext);
  if (!ctx) {
    throw new Error("useGame harus digunakan di dalam <GameProvider>");
  }
  return ctx;
}

export default GameContext;
