"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import GameLayout from "../../../components/permainan/GameLayout";
import { useGame } from "../../../context/GameContext";

// ─── Types ────────────────────────────────────────────────────────────────────
interface KulinerItem {
  id: string;
  nama: string;
  deskripsi: string;
  gambarSrc: string;
}

type Phase = "intro" | "playing" | "done";

// ─── Data ─────────────────────────────────────────────────────────────────────
const KULINER_DATA: KulinerItem[] = [
  { 
    id: "nasi-liwet", 
    nama: "Nasi Liwet", 
    deskripsi: "Nasi gurih santan khas Solo, disajikan dengan telur dan ayam suwir", 
    gambarSrc: "/Assets/Gambar-Kuliner/JawaTengah/nasi-liwet.webp" 
  },
  { 
    id: "rawon", 
    nama: "Rawon", 
    deskripsi: "Sup daging berkuah hitam legam khas Jawa Timur dengan bumbu kluwek", 
    gambarSrc: "/Assets/Gambar-Kuliner/JawaTimur/rawon.webp" 
  },
  { 
    id: "soto", 
    nama: "Soto Lamongan", 
    deskripsi: "Sup berkuah kuning khas Lamongan dengan taburan koya gurih", 
    gambarSrc: "/Assets/Gambar-Kuliner/JawaTimur/soto-lamongan.webp" 
  },
  { 
    id: "empal", 
    nama: "Empal Gentong", 
    deskripsi: "Masakan sejenis gulai berkuah santan khas Cirebon, dimasak di gentong", 
    gambarSrc: "/Assets/Gambar-Kuliner/JawaBarat/empal-gentong.webp" 
  }
];

const POINTS_PER_MATCH = 25;
const WRONG_DELAY_MS = 600;

// Hardcoded randomized order for names to appear on the right
const RANDOM_NAME_ORDER = [2, 0, 3, 1]; // Maps to index in KULINER_DATA

export default function KulinerGamePage() {
  const { updateScore, markCompleted } = useGame();

  const [phase, setPhase] = useState<Phase>("intro");
  const [matches, setMatches] = useState<string[]>([]); // stores IDs of matched items
  const [attempts, setAttempts] = useState(0);
  const [totalScore, setTotalScore] = useState(0);

  // Selection states
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedName, setSelectedName] = useState<string | null>(null);
  const [wrongPair, setWrongPair] = useState<{ img: string, name: string } | null>(null);

  const lockBoard = useRef(false);

  // ─── Initialization ─────────────────────────────────────────────────────────
  const initGame = useCallback(() => {
    setMatches([]);
    setAttempts(0);
    setTotalScore(0);
    setSelectedImage(null);
    setSelectedName(null);
    setWrongPair(null);
    setPhase("playing");
  }, []);

  // ─── Interaction Logic ──────────────────────────────────────────────────────
  const handleSelectImage = (id: string) => {
    if (lockBoard.current || matches.includes(id)) return;
    
    // Toggle off if already selected
    if (selectedImage === id) {
      setSelectedImage(null);
      return;
    }
    
    setSelectedImage(id);
  };

  const handleSelectName = (id: string) => {
    if (lockBoard.current || matches.includes(id)) return;

    // Toggle off if already selected
    if (selectedName === id) {
      setSelectedName(null);
      return;
    }

    setSelectedName(id);
  };

  // Check for match when both are selected
  useEffect(() => {
    if (selectedImage && selectedName && !lockBoard.current) {
      lockBoard.current = true;
      setAttempts((prev) => prev + 1);

      if (selectedImage === selectedName) {
        // MATCH
        setTimeout(() => {
          setMatches((prev) => [...prev, selectedImage]);
          setSelectedImage(null);
          setSelectedName(null);
          lockBoard.current = false;
        }, 300);
      } else {
        // NO MATCH (Wrong)
        setTimeout(() => {
          setWrongPair({ img: selectedImage, name: selectedName });
          setTimeout(() => {
            setWrongPair(null);
            setSelectedImage(null);
            setSelectedName(null);
            lockBoard.current = false;
          }, WRONG_DELAY_MS);
        }, 0);
      }
    }
  }, [selectedImage, selectedName]);

  // ─── Game End Detection ─────────────────────────────────────────────────────
  useEffect(() => {
    if (phase === "playing" && matches.length === KULINER_DATA.length) {
      const baseScore = matches.length * POINTS_PER_MATCH;
      const penalty = Math.max(0, attempts - matches.length) * 2;
      const finalScore = Math.max(0, baseScore - penalty);

      setTimeout(() => {
        setTotalScore(finalScore);
        updateScore("kuliner", finalScore);
        markCompleted("kuliner");
        setPhase("done");
      }, 800);
    }
  }, [matches, attempts, phase, updateScore, markCompleted]);

  // ─── Renders ────────────────────────────────────────────────────────────────
  
  // INTRO SCREEN
  if (phase === "intro") {
    return (
      <GameLayout
        title="Pendhapa Kuliner"
        subtitle="Uji pengetahuanmu tentang masakan tradisional Jawa!"
        pendhapa="kuliner"
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 py-8">
          <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 rounded-full bg-gradient-to-l from-[#2D0F12] to-[#5B0917] flex items-center justify-center shadow-lg border-4 border-[#FFC832]">
            <span className="text-4xl md:text-5xl font-bold text-[#FFC832]">K</span>
          </div>
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#4E0B11] mb-3 md:mb-4 leading-tight">Tebak dari Deskripsi</h2>
            <p className="text-sm md:text-base text-[#4A332B] font-medium leading-relaxed bg-white border border-[#4E0B11]/20 p-4 md:p-5 rounded-xl shadow-sm mb-4 md:mb-6">
              Pilih satu <strong className="text-[#4E0B11]">Gambar Makanan</strong> dan pasangkan dengan <strong className="text-[#4E0B11]">Nama Makanan</strong> yang tepat! Temukan fakta menarik setiap kali berhasil mencocokkannya.
            </p>
            <button
              onClick={initGame}
              className="inline-flex items-center gap-2 bg-[#4E0B11] text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-md hover:bg-[#3A0810] hover:-translate-y-0.5 transition-all duration-200 active:translate-y-0"
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
        title="Pendhapa Kuliner — Selesai!"
        pendhapa="kuliner"
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 py-8">
          
          {/* Left: Message & Icon */}
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="w-16 h-16 rounded-full bg-[#FFC832] flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 text-[#4E0B11]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#4E0B11] leading-tight">Selamat!</h2>
              <p className="text-sm text-[#4A332B] font-medium mt-1 leading-relaxed">
                Kamu ahli masakan tradisional Jawa.
              </p>
            </div>
          </div>

          {/* Right: Score & Actions */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="w-full bg-[#4E0B11] text-white rounded-2xl px-10 py-5 flex flex-col items-center md:items-start gap-1 shadow-md border border-[#5B0917]">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FFC832]">Skor Kuliner</span>
              <span className="text-5xl font-bold tabular-nums text-white">{totalScore}</span>
              <span className="text-[10px] sm:text-xs text-white/70 font-medium">dari {KULINER_DATA.length * POINTS_PER_MATCH} poin maksimal</span>
            </div>

            <div className="w-full text-xs font-semibold text-[#4A332B] bg-white border border-[#FFC832] px-4 py-2 rounded-full text-center">
              Diselesaikan dalam {attempts} langkah
            </div>

            <Link
              href="/permainan"
              className="w-full mt-2 inline-flex justify-center items-center gap-2 bg-[#FFC832] text-[#4E0B11] font-bold text-sm px-8 py-3 rounded-full shadow-md hover:bg-[#e6b42d] hover:-translate-y-0.5 transition-all duration-200"
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
      title="Tebak dari Deskripsi"
      pendhapa="kuliner"
    >
      <div className="flex flex-col gap-6 max-w-4xl mx-auto">
        
        {/* Game Stats */}
        <div className="flex items-center justify-between bg-white border-2 border-[#FFC832]/50 rounded-xl px-4 py-3 shadow-sm">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-bold text-[#4E0B11]/60 tracking-wider">Pasangan</span>
            <span className="text-lg font-bold text-[#4E0B11]">{matches.length} / {KULINER_DATA.length}</span>
          </div>
          <div className="flex flex-col text-right">
            <span className="text-[10px] uppercase font-bold text-[#4E0B11]/60 tracking-wider">Langkah</span>
            <span className="text-lg font-bold text-[#4E0B11]">{attempts}</span>
          </div>
        </div>

        {/* 2-Column Board */}
        <div className="grid grid-cols-2 gap-4 md:gap-8 relative">
          
          {/* Images Column */}
          <div className="flex flex-col gap-3">
            <h3 className="text-center text-xs font-semibold text-[#4E0B11] uppercase tracking-widest mb-2 leading-tight">Gambar</h3>
            {KULINER_DATA.map((item) => {
              const isMatched = matches.includes(item.id);
              const isSelected = selectedImage === item.id;
              const isWrong = wrongPair?.img === item.id;
              
              return (
                <div
                  key={`img-${item.id}`}
                  onClick={() => handleSelectImage(item.id)}
                  className={`relative h-28 sm:h-32 md:h-40 lg:h-48 w-full rounded-xl border-4 overflow-hidden transition-all duration-300 ${
                    isMatched
                      ? "border-[#4CAF50] opacity-80 scale-95"
                      : isWrong
                      ? "border-red-500 animate-shake"
                      : isSelected
                      ? "border-[#FFC832] scale-105 shadow-lg shadow-[#FFC832]/20"
                      : "border-transparent shadow-md cursor-pointer hover:border-[#FFC832]/50"
                  }`}
                >
                  <Image 
                    src={item.gambarSrc} 
                    alt={item.nama}
                    fill
                    className={`object-cover ${isMatched ? "" : ""}`}
                  />
                  {/* Overlay for matched state - showing description */}
                  {isMatched && (
                    <div className="absolute inset-0 bg-[#2D0F12]/90 flex flex-col items-center justify-center p-3 text-center z-10">
                      <svg className="w-6 h-6 text-[#4CAF50] mb-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-white text-[9px] sm:text-[11px] leading-snug font-medium line-clamp-3">
                        {item.deskripsi}
                      </p>
                    </div>
                  )}
                  {isSelected && !isMatched && (
                    <div className="absolute inset-0 ring-inset ring-4 ring-[#FFC832] pointer-events-none" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Names Column */}
          <div className="flex flex-col gap-3">
            <h3 className="text-center text-xs font-semibold text-[#4E0B11] uppercase tracking-widest mb-2 leading-tight">Nama</h3>
            {RANDOM_NAME_ORDER.map((idx) => {
              const item = KULINER_DATA[idx];
              const isMatched = matches.includes(item.id);
              const isSelected = selectedName === item.id;
              const isWrong = wrongPair?.name === item.id;

              return (
                <div
                  key={`name-${item.id}`}
                  onClick={() => handleSelectName(item.id)}
                  className={`relative h-28 sm:h-32 md:h-40 lg:h-48 w-full rounded-xl border-4 flex items-center justify-center p-4 text-center transition-all duration-300 ${
                    isMatched
                      ? "border-[#4CAF50] bg-[#4CAF50]/10 opacity-50 scale-95"
                      : isWrong
                      ? "border-red-500 bg-red-50 animate-shake"
                      : isSelected
                      ? "border-[#FFC832] bg-[#FFC832]/10 scale-105 shadow-lg shadow-[#FFC832]/20"
                      : "border-[#4E0B11]/10 bg-white shadow-md cursor-pointer hover:border-[#FFC832]/50 hover:bg-[#F8F5EE]"
                  }`}
                >
                  <span className={`font-bold text-sm sm:text-base md:text-lg ${isMatched ? "text-[#4CAF50]" : "text-[#4E0B11]"}`}>
                    {item.nama}
                  </span>
                  
                  {isMatched && (
                    <div className="absolute top-2 right-2">
                      <svg className="w-5 h-5 text-[#4CAF50]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>

      {/* Global styles for shake animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .animate-shake {
          animation: shake 0.2s ease-in-out 0s 2;
        }
      `}} />
    </GameLayout>
  );
}
