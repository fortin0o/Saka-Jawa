"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import GameLayout from "../../../components/permainan/GameLayout";
import { useGame } from "../../../context/GameContext";

// ─── Types ────────────────────────────────────────────────────────────────────
interface WayangChar {
  id: string;
  nama: string;
  ciriKhas: string;
  gambarSrc: string;
}

interface Card {
  uid: string; // unique id per card instance
  charId: string;
  type: "image" | "text";
  data: WayangChar;
  isFlipped: boolean;
  isMatched: boolean;
}

type Phase = "intro" | "playing" | "done";

// ─── Data ─────────────────────────────────────────────────────────────────────
const WAYANG_DATA: WayangChar[] = [
  {
    id: "yudhistira",
    nama: "Yudhistira",
    ciriKhas: "Sifat jujur & bijaksana, sulung Pandawa",
    gambarSrc: "/Assets/Gambar-Wayang/Yudhistira.webp",
  },
  {
    id: "bima",
    nama: "Bima Sena",
    ciriKhas: "Kekuatan besar, bersenjata gada Rujakpala",
    gambarSrc: "/Assets/Gambar-Wayang/Bima.webp",
  },
  {
    id: "arjuna",
    nama: "Arjuna",
    ciriKhas: "Ksatria pemanah ulung berparas tampan",
    gambarSrc: "/Assets/Gambar-Wayang/Arjuna.webp",
  },
  {
    id: "gatotkaca",
    nama: "Gatotkaca",
    ciriKhas: "Bisa terbang, dijuluki Otot Kawat Tulang Besi",
    gambarSrc: "/Assets/Gambar-Wayang/gatotkaca.webp",
  },
];

const POINTS_PER_MATCH = 25;
const FLIP_DELAY_MS = 800;

// ─── Component ────────────────────────────────────────────────────────────────
export default function WayangGamePage() {
  const { updateScore, markCompleted } = useGame();

  const [phase, setPhase] = useState<Phase>("intro");
  const [cards, setCards] = useState<Card[]>([]);
  
  // Game State
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const [matches, setMatches] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [totalScore, setTotalScore] = useState(0);

  const lockBoard = useRef(false);

  // ─── Initialization ─────────────────────────────────────────────────────────
  const initGame = useCallback(() => {
    // Buat array kartu (2 per tokoh: 1 gambar siluet, 1 teks ciri khas)
    const newCards: Card[] = [];
    WAYANG_DATA.forEach((char) => {
      newCards.push({
        uid: `${char.id}-img`,
        charId: char.id,
        type: "image",
        data: char,
        isFlipped: false,
        isMatched: false,
      });
      newCards.push({
        uid: `${char.id}-txt`,
        charId: char.id,
        type: "text",
        data: char,
        isFlipped: false,
        isMatched: false,
      });
    });

    // Shuffle cards randomly
    for (let i = newCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newCards[i], newCards[j]] = [newCards[j], newCards[i]];
    }

    setCards(newCards);
    setFlippedIndices([]);
    setMatches(0);
    setAttempts(0);
    setTotalScore(0);
    setPhase("playing");
  }, []);

  // ─── Card Click Logic ───────────────────────────────────────────────────────
  const handleCardClick = (index: number) => {
    if (lockBoard.current) return;
    if (cards[index].isFlipped || cards[index].isMatched) return;

    // Flip the clicked card
    const newCards = [...cards];
    newCards[index].isFlipped = true;
    setCards(newCards);

    const newFlipped = [...flippedIndices, index];
    setFlippedIndices(newFlipped);

    // If two cards are flipped, check for match
    if (newFlipped.length === 2) {
      lockBoard.current = true;
      setAttempts((prev) => prev + 1);

      const [firstIdx, secondIdx] = newFlipped;
      const firstCard = newCards[firstIdx];
      const secondCard = newCards[secondIdx];

      if (firstCard.charId === secondCard.charId) {
        // MATCH
        setTimeout(() => {
          setCards((prev) => {
            const matchedCards = [...prev];
            matchedCards[firstIdx].isMatched = true;
            matchedCards[secondIdx].isMatched = true;
            return matchedCards;
          });
          setMatches((prev) => prev + 1);
          setFlippedIndices([]);
          lockBoard.current = false;
        }, 300); // short delay for success animation
      } else {
        // NO MATCH
        setTimeout(() => {
          setCards((prev) => {
            const unflippedCards = [...prev];
            unflippedCards[firstIdx].isFlipped = false;
            unflippedCards[secondIdx].isFlipped = false;
            return unflippedCards;
          });
          setFlippedIndices([]);
          lockBoard.current = false;
        }, FLIP_DELAY_MS);
      }
    }
  };

  // ─── Game End Detection ─────────────────────────────────────────────────────
  useEffect(() => {
    if (phase === "playing" && matches === WAYANG_DATA.length) {
      // Game over, hitung skor
      const baseScore = matches * POINTS_PER_MATCH;
      const penalty = Math.max(0, attempts - matches) * 2;
      const finalScore = Math.max(0, baseScore - penalty);

      setTimeout(() => {
        setTotalScore(finalScore);
        updateScore("wayang", finalScore);
        markCompleted("wayang");
        setPhase("done");
      }, 800);
    }
  }, [matches, attempts, phase, updateScore, markCompleted]);

  // ─── Renders ────────────────────────────────────────────────────────────────
  
  // INTRO SCREEN
  if (phase === "intro") {
    return (
      <GameLayout
        title="Pendhapa Wayang"
        subtitle="Uji pengetahuanmu tentang tokoh perwayangan Jawa!"
        pendhapa="wayang"
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 py-8">
          <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 rounded-full bg-[#3e2723] flex items-center justify-center shadow-lg border-4 border-[#d7ccc8]">
            {/* Simple Wayang Icon */}
            <svg className="w-12 h-12 md:w-16 md:h-16 text-[#d7ccc8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <ellipse cx="12" cy="8" rx="4" ry="5" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 13c-3 2-4 5-4 8h16c0-3-1-6-4-8" />
            </svg>
          </div>
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#3e2723] mb-3 md:mb-4 leading-tight">Cocokkan Siluet Tokoh</h2>
            <p className="text-sm md:text-base text-[#5d4037] font-medium leading-relaxed bg-white border border-[#8d6e63]/30 p-4 md:p-5 rounded-xl shadow-sm mb-4 md:mb-6">
              Temukan pasangan yang tepat! Cocokkan <strong className="text-[#3e2723]">Gambar Siluet</strong> dengan <strong className="text-[#3e2723]">Nama & Ciri Khas</strong> tokoh wayangnya. Semakin sedikit tebakan salah, semakin besar bonus skormu!
            </p>
            <button
              onClick={initGame}
              className="inline-flex items-center gap-2 bg-[#3e2723] text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-md hover:bg-[#2b1b18] hover:-translate-y-0.5 transition-all duration-200 active:translate-y-0"
            >
              Mulai Bermain
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </GameLayout>
    );
  }

  // DONE SCREEN
  if (phase === "done") {
    return (
      <GameLayout
        title="Pendhapa Wayang — Selesai!"
        pendhapa="wayang"
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 py-8">
          
          {/* Left: Message & Icon */}
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="w-16 h-16 rounded-full bg-[#8d6e63] flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#3e2723] leading-tight">Luar Biasa!</h2>
              <p className="text-sm text-[#5d4037] font-medium mt-1 leading-relaxed">
                Kamu berhasil mencocokkan semua tokoh.
              </p>
            </div>
          </div>

          {/* Right: Score & Actions */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="w-full bg-[#3e2723] text-white rounded-2xl px-10 py-5 flex flex-col items-center md:items-start gap-1 shadow-md border border-[#5d4037]">
              <span className="text-xs font-bold uppercase tracking-widest text-[#d7ccc8]">Skor Wayang</span>
              <span className="text-5xl font-bold tabular-nums text-[#ffb300]">{totalScore}</span>
              <span className="text-[10px] sm:text-xs text-white/70 font-medium">dari {WAYANG_DATA.length * POINTS_PER_MATCH} poin maksimal</span>
            </div>

            <div className="w-full text-xs font-semibold text-[#5d4037] bg-white border border-[#d7ccc8] px-4 py-2 rounded-full text-center">
              Diselesaikan dalam {attempts} langkah
            </div>

            <Link
              href="/permainan"
              className="w-full mt-2 inline-flex justify-center items-center gap-2 bg-[#3e2723] text-[#ffb300] font-bold text-sm px-8 py-3 rounded-full shadow-md hover:bg-[#2b1b18] hover:-translate-y-0.5 transition-all duration-200"
            >
              Kembali ke Peta Pendhapa
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

        </div>
      </GameLayout>
    );
  }

  // PLAYING SCREEN
  return (
    <GameLayout
      title="Cocokkan Siluet Tokoh"
      pendhapa="wayang"
    >
      <div className="flex flex-col gap-6">
        
        {/* Game Stats */}
        <div className="flex items-center justify-between bg-white border-2 border-[#d7ccc8] rounded-xl px-4 py-3 shadow-sm">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-bold text-[#8d6e63] tracking-wider">Pasangan</span>
            <span className="text-lg font-bold text-[#3e2723]">{matches} / {WAYANG_DATA.length}</span>
          </div>
          <div className="flex flex-col text-right">
            <span className="text-[10px] uppercase font-bold text-[#8d6e63] tracking-wider">Langkah</span>
            <span className="text-lg font-bold text-[#3e2723]">{attempts}</span>
          </div>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-5 [perspective:1000px] max-w-4xl mx-auto w-full">
          {cards.map((card, idx) => {
            const isVisible = card.isFlipped || card.isMatched;

            return (
              <div
                key={card.uid}
                className="relative h-32 sm:h-40 md:h-44 lg:h-48 cursor-pointer [transform-style:preserve-3d] transition-transform duration-500 ease-out"
                style={{
                  transform: isVisible ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
                onClick={() => handleCardClick(idx)}
              >
                {/* ── FRONT (Tertutup) ── */}
                <div 
                  className={`absolute inset-0 [backface-visibility:hidden] rounded-xl border-2 shadow-md flex items-center justify-center bg-[#5d4037] border-[#3e2723] transition-colors hover:bg-[#4e342e]`}
                  style={{
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%233e2723' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\")"
                  }}
                >
                  <svg className="w-10 h-10 text-[#8d6e63]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 13c-3 2-4 5-4 8h16c0-3-1-6-4-8" />
                    <ellipse cx="12" cy="8" rx="4" ry="5" />
                  </svg>
                </div>

                {/* ── BACK (Terbuka) ── */}
                <div 
                  className={`absolute inset-0 [backface-visibility:hidden] rounded-xl shadow-md border-2 overflow-hidden flex flex-col justify-center items-center p-3 text-center transition-all ${
                    card.isMatched 
                      ? "bg-[#fff8e1] border-[#ffb300]" 
                      : "bg-white border-[#d7ccc8]"
                  }`}
                  style={{ transform: "rotateY(180deg)" }}
                >
                  {card.type === "image" ? (
                    // Tampilkan Gambar Siluet
                    <div className="relative w-full h-full p-2 flex items-center justify-center">
                      <Image 
                        src={card.data.gambarSrc} 
                        alt="Siluet Wayang" 
                        fill 
                        className={`object-contain transition-all duration-300 ${card.isMatched ? "brightness-100 opacity-100" : "grayscale opacity-40 contrast-125 brightness-75"}`}
                      />
                    </div>
                  ) : (
                    // Tampilkan Teks (Nama & Ciri)
                    <div className="flex flex-col items-center gap-1 sm:gap-2">
                      <span className={`text-[8px] sm:text-[10px] font-bold uppercase tracking-widest ${card.isMatched ? "text-[#ffb300]" : "text-[#8d6e63]"}`}>
                        Siapakah Aku?
                      </span>
                      <h3 className={`text-xs sm:text-base font-bold leading-tight ${card.isMatched ? "text-[#3e2723]" : "text-[#5d4037]"}`}>
                        {card.data.nama}
                      </h3>
                      <p className="text-[8px] sm:text-[10px] leading-tight font-medium text-[#795548]">
                        {card.data.ciriKhas}
                      </p>
                    </div>
                  )}

                  {/* Match Indicator */}
                  {card.isMatched && (
                    <div className="absolute top-2 right-2 text-[#ffb300]">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </GameLayout>
  );
}
