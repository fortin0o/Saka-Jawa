"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import GameLayout from "../../../components/permainan/GameLayout";
import { useGame } from "../../../context/GameContext";

// ─── Types ────────────────────────────────────────────────────────────────────
interface MotifData {
  id: string;
  namaMotif: string;
  asalDaerah: string;
  gambarSrc: string;
  factSingkat: string;
  factDetail: string;
}

type Phase = "preview" | "puzzle" | "fact" | "done";

// ─── Game Data ────────────────────────────────────────────────────────────────
const MOTIFS: MotifData[] = [
  {
    id: "solo",
    namaMotif: "Batik Parang Rusak",
    asalDaerah: "Surakarta (Solo)",
    gambarSrc: "/Assets/Gambar Batik/Batik Solo/Solo 1.webp",
    factSingkat: "Motif Parang Rusak dari Solo melambangkan kekuatan yang tak terputus — dahulu hanya boleh dikenakan oleh raja dan keluarga keraton.",
    factDetail: "Warna soga cokelat keemasan khas Solo mencerminkan kerendahan hati dan kebijaksanaan penguasa.",
  },
  {
    id: "jogja",
    namaMotif: "Batik Kawung",
    asalDaerah: "Yogyakarta",
    gambarSrc: "/Assets/Gambar Batik/Batik Jogja/Jogja 1.webp",
    factSingkat: "Motif Kawung dari Jogja terinspirasi buah kolang-kaling, melambangkan empat penjuru mata angin dan keseimbangan alam semesta.",
    factDetail: "Warna dasar putih atau hitam tegas mencerminkan ketegasan dan kesucian jiwa dalam tradisi keraton Yogyakarta.",
  },
  {
    id: "pekalongan",
    namaMotif: "Batik Jlamprang",
    asalDaerah: "Pekalongan",
    gambarSrc: "/Assets/Gambar Batik/Batik Pekalongan/Pekalongan 1.webp",
    factSingkat: "Batik Jlamprang dari Pekalongan kaya warna cerah dan motif geometris, merupakan akulturasi indah budaya Jawa dengan pengaruh Arab dan Belanda.",
    factDetail: "Pekalongan dijuluki 'Kota Batik' karena hampir seluruh warganya terlibat dalam industri batik yang penuh warna ini.",
  },
];

// ─── Hardcoded scramble orders (deterministic) ───────────────────────────────
const SCRAMBLES: number[][] = [
  [6, 1, 8, 3, 4, 7, 0, 5, 2], // Solo
  [2, 7, 5, 0, 4, 6, 3, 8, 1], // Jogja
  [4, 2, 6, 7, 0, 3, 8, 1, 5], // Pekalongan
];

const GRID_SIZE = 3;
const TOTAL_PIECES = GRID_SIZE * GRID_SIZE;
const PREVIEW_SECONDS = 5; // how long to show the full image
const TIME_LIMIT = 60;
const SCORE_FAST = 34;
const SCORE_SLOW = 15;

function isSolved(pieces: number[]): boolean {
  return pieces.every((p, i) => p === i);
}

// ─── Progress Dots ────────────────────────────────────────────────────────────
function ProgressDots({ motifIndex }: { motifIndex: number }) {
  return (
    <div className="flex items-center justify-center gap-2">
      {MOTIFS.map((m, i) => (
        <div key={m.id} className="flex flex-col items-center gap-1">
          <div
            className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold transition-all duration-300 ${
              i < motifIndex
                ? "bg-[#FFC832] text-[#4E0B11]"
                : i === motifIndex
                ? "bg-[#4E0B11] text-white ring-2 ring-[#4E0B11] ring-offset-2"
                : "bg-stone-200 text-stone-400"
            }`}
          >
            {i < motifIndex ? (
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              i + 1
            )}
          </div>
          <span className={`text-[9px] font-semibold ${i === motifIndex ? "text-[#4E0B11]" : "text-stone-400"}`}>
            {m.asalDaerah.split(" ")[0]}
          </span>
        </div>
      ))}
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function BatikGamePage() {
  const { updateScore, markCompleted } = useGame();

  const [motifIndex, setMotifIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("preview");
  const [previewCount, setPreviewCount] = useState(PREVIEW_SECONDS);
  const [pieces, setPieces] = useState<number[]>([...SCRAMBLES[0]]);
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);
  const [timerActive, setTimerActive] = useState(false);
  const [solved, setSolved] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [scoreHistory, setScoreHistory] = useState<number[]>([]);

  // drag & tap state
  const [dragSrc, setDragSrc] = useState<number | null>(null);
  const [tapFirst, setTapFirst] = useState<number | null>(null);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const previewRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // ── Start preview for a motif ─────────────────────────────────────────────
  const startPreview = useCallback((index: number) => {
    setPieces([...SCRAMBLES[index]]);
    setTimeLeft(TIME_LIMIT);
    setTimerActive(false);
    setSolved(false);
    setDragSrc(null);
    setTapFirst(null);
    setPreviewCount(PREVIEW_SECONDS);
    setPhase("preview");
  }, []);

  // ── Preview countdown ─────────────────────────────────────────────────────
  useEffect(() => {
    if (phase !== "preview") return;
    previewRef.current = setInterval(() => {
      setPreviewCount((c) => {
        if (c <= 1) {
          clearInterval(previewRef.current!);
          setPhase("puzzle");
          setTimerActive(true);
          return 0;
        }
        return c - 1;
      });
    }, 1000);
    return () => clearInterval(previewRef.current!);
  }, [phase, motifIndex]);

  // ── Puzzle timer ──────────────────────────────────────────────────────────
  useEffect(() => {
    if (phase !== "puzzle" || !timerActive || solved) return;
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timerRef.current!);
          setTimerActive(false);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current!);
  }, [phase, timerActive, solved, motifIndex]);

  // ── Check solved ──────────────────────────────────────────────────────────
  useEffect(() => {
    if (phase !== "puzzle" || solved) return;
    if (isSolved(pieces)) {
      clearInterval(timerRef.current!);
      setTimeout(() => {
        setTimerActive(false);
        setSolved(true);
        const earned = timeLeft > 0 ? SCORE_FAST : SCORE_SLOW;
        setScoreHistory((prev) => [...prev, earned]);
        setTotalScore((prev) => prev + earned);
        setTimeout(() => setPhase("fact"), 600);
      }, 0);
    }
  }, [pieces, phase, solved, timeLeft]);

  // ── Time ran out ──────────────────────────────────────────────────────────
  useEffect(() => {
    if (phase !== "puzzle" || solved || timerActive || timeLeft !== 0) return;
    setTimeout(() => {
      setSolved(true);
      const earned = SCORE_SLOW;
      setScoreHistory((prev) => [...prev, earned]);
      setTotalScore((prev) => prev + earned);
      setTimeout(() => setPhase("fact"), 400);
    }, 0);
  }, [phase, timerActive, solved, timeLeft]);

  // ── Swap pieces ───────────────────────────────────────────────────────────
  const swapPieces = (a: number, b: number) => {
    if (a === b || solved) return;
    setPieces((prev) => {
      const next = [...prev];
      [next[a], next[b]] = [next[b], next[a]];
      return next;
    });
  };

  // Desktop drag
  const handleDragStart = (i: number) => { setDragSrc(i); setTapFirst(null); };
  const handleDrop = (i: number) => {
    if (dragSrc !== null && dragSrc !== i) swapPieces(dragSrc, i);
    setDragSrc(null);
  };

  // Mobile tap-to-swap
  const handleTap = (i: number) => {
    if (solved) return;
    if (tapFirst === null) { setTapFirst(i); }
    else { swapPieces(tapFirst, i); setTapFirst(null); }
  };

  // ── Advance motif ─────────────────────────────────────────────────────────
  const handleNext = () => {
    const next = motifIndex + 1;
    if (next < MOTIFS.length) {
      setMotifIndex(next);
      startPreview(next);
    } else {
      updateScore("batik", Math.min(100, totalScore));
      markCompleted("batik");
      setPhase("done");
    }
  };

  const currentMotif = MOTIFS[motifIndex];
  const timerPct = (timeLeft / TIME_LIMIT) * 100;
  const timerColor = timeLeft > 30 ? "#4E0B11" : timeLeft > 10 ? "#d97706" : "#dc2626";

  // ─── DONE screen ──────────────────────────────────────────────────────────
  if (phase === "done") {
    return (
      <GameLayout
        title="Pendhapa Batik — Selesai!"
        pendhapa="batik"
        nextHref="/permainan"
        nextLabel="Kembali ke Peta Pendhapa"
        canProceed={true}
      >
        <div className="flex flex-col items-center gap-6 py-6 text-center">
          <div className="w-16 h-16 rounded-full bg-[#FFC832] flex items-center justify-center shadow-lg">
            <svg className="w-8 h-8 text-[#4E0B11]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#4E0B11]">Luar Biasa!</h2>
            <p className="text-sm text-[#4A332B] font-medium mt-1">
              Kamu telah menyelesaikan semua motif batik
            </p>
          </div>

          <div className="bg-[#4E0B11] text-white rounded-2xl px-10 py-5 flex flex-col items-center gap-1 shadow-md">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FFC832]">Skor Batik</span>
            <span className="text-5xl font-bold tabular-nums">{Math.min(100, totalScore)}</span>
            <span className="text-xs text-white/60 font-medium">dari 100 poin</span>
          </div>

          <div className="w-full max-w-sm flex flex-col gap-2">
            {MOTIFS.map((m, i) => (
              <div key={m.id} className="flex items-center justify-between bg-white border border-[#4E0B11]/20 rounded-xl px-4 py-3 shadow-sm">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#FFC832] flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-[#4E0B11]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold text-[#4E0B11]">{m.namaMotif}</p>
                    <p className="text-[10px] text-[#4A332B] font-medium">{m.asalDaerah}</p>
                  </div>
                </div>
                <span className="font-bold text-[#4E0B11] tabular-nums">{scoreHistory[i] ?? 0} pts</span>
              </div>
            ))}
          </div>

          <p className="text-xs text-[#4A332B]/70 font-medium max-w-xs">
            Skor ini akan disimpan saat kamu melihat Hasil Akhir.
          </p>
          
          <Link
            href="/permainan"
            className="mt-2 inline-flex items-center gap-2 bg-[#4E0B11] text-white font-bold text-sm px-8 py-3 rounded-full shadow-md hover:bg-[#3A0810] hover:-translate-y-0.5 transition-all duration-200"
          >
            Kembali ke Peta Pendhapa
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </GameLayout>
    );
  }

  // ─── FACT screen ──────────────────────────────────────────────────────────
  if (phase === "fact") {
    const earned = scoreHistory[scoreHistory.length - 1] ?? 0;
    const isFast = earned >= SCORE_FAST;
    return (
      <GameLayout title={currentMotif.namaMotif} pendhapa="batik">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-6 md:gap-10 py-4">
          
          {/* Left Column: Image & Score */}
          <div className="flex flex-col items-center gap-4 shrink-0">
            <div
              className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-bold border ${
                isFast
                  ? "bg-[#FFC832] text-[#4E0B11] border-[#FFC832]"
                  : "bg-[#4E0B11]/10 text-[#4E0B11] border-[#4E0B11]/20"
              }`}
            >
              {isFast ? "Cepat!" : "Selesai"}
              <span className="tabular-nums">+{earned} poin</span>
            </div>

            <div className="w-full max-w-[240px] md:max-w-[280px] rounded-2xl overflow-hidden border-4 border-[#FFC832] shadow-xl aspect-square relative">
              <Image src={currentMotif.gambarSrc} alt={currentMotif.namaMotif} fill className="object-cover" unoptimized />
            </div>
            
            <div className="hidden md:block">
              <ProgressDots motifIndex={motifIndex} />
            </div>
          </div>

          {/* Right Column: Fact Card & Actions */}
          <div className="flex flex-col items-center md:items-start gap-5 flex-1 max-w-sm md:max-w-none">
            <div className="w-full bg-white border border-[#4E0B11]/20 rounded-2xl p-5 shadow-sm text-center md:text-left">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#FFC832] bg-[#4E0B11] rounded-full px-2.5 py-0.5 mb-3">
                Fakta Budaya
              </span>
              <h3 className="text-base font-bold text-[#4E0B11] mb-1">{currentMotif.namaMotif}</h3>
              <p className="text-[11px] sm:text-xs font-semibold text-[#4A332B]/70 mb-2">{currentMotif.asalDaerah}</p>
              <p className="text-xs sm:text-sm text-[#4A332B] font-medium leading-relaxed">{currentMotif.factSingkat}</p>
              <p className="text-xs text-[#4A332B]/70 font-medium leading-relaxed mt-2">{currentMotif.factDetail}</p>
            </div>

            <div className="md:hidden">
              <ProgressDots motifIndex={motifIndex} />
            </div>

            <button
              onClick={handleNext}
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#4E0B11] text-white font-bold text-sm px-8 py-3 rounded-full shadow-md hover:bg-[#3A0810] hover:-translate-y-0.5 transition-all duration-200 active:translate-y-0"
            >
              {motifIndex + 1 < MOTIFS.length
                ? `Motif Berikutnya (${motifIndex + 2}/${MOTIFS.length})`
                : "Lihat Hasil Batik"}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </GameLayout>
    );
  }

  // ─── PREVIEW screen ───────────────────────────────────────────────────────
  if (phase === "preview") {
    return (
      <GameLayout
        title="Susun Motif Batik"
        subtitle={`Motif ${motifIndex + 1} dari ${MOTIFS.length}: ${currentMotif.namaMotif} — ${currentMotif.asalDaerah}`}
        pendhapa="batik"
      >
        <div className="flex flex-col items-center gap-5">
          {/* Instruction banner */}
          <div className="w-full bg-[#4E0B11] text-white rounded-xl px-5 py-3 flex items-center gap-3">
            <div className="shrink-0 w-8 h-8 rounded-full bg-[#FFC832] flex items-center justify-center">
              <svg className="w-4 h-4 text-[#4E0B11]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold text-[#FFC832] uppercase tracking-widest">Hafalkan gambar ini!</p>
              <p className="text-xs text-white/80 font-medium mt-0.5">
                Susun keping acak agar membentuk gambar di bawah. Puzzle dimulai dalam{" "}
                <span className="font-bold text-[#FFC832]">{previewCount}s</span>
              </p>
            </div>
          </div>

          {/* Full motif image */}
          <div className="w-full max-w-[280px] sm:max-w-[320px] aspect-square relative rounded-xl overflow-hidden border-2 border-[#4E0B11]/30 shadow-lg">
            <Image src={currentMotif.gambarSrc} alt={currentMotif.namaMotif} fill className="object-cover" unoptimized />
            {/* Countdown overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#4E0B11]/80 to-transparent p-4 flex items-end justify-between">
              <div>
                <p className="text-white font-bold text-sm">{currentMotif.namaMotif}</p>
                <p className="text-white/70 text-xs font-medium">{currentMotif.asalDaerah}</p>
              </div>
              {/* Countdown ring */}
              <div className="relative w-12 h-12 shrink-0">
                <svg className="w-12 h-12 -rotate-90" viewBox="0 0 48 48">
                  <circle cx="24" cy="24" r="20" stroke="rgba(255,255,255,0.2)" strokeWidth="4" fill="none" />
                  <circle
                    cx="24" cy="24" r="20"
                    stroke="#FFC832"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 20}`}
                    strokeDashoffset={`${2 * Math.PI * 20 * (1 - previewCount / PREVIEW_SECONDS)}`}
                    strokeLinecap="round"
                    style={{ transition: "stroke-dashoffset 1s linear" }}
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm">{previewCount}</span>
              </div>
            </div>
          </div>

          {/* Skip button */}
          <button
            onClick={() => {
              clearInterval(previewRef.current!);
              setPhase("puzzle");
              setTimerActive(true);
            }}
            className="text-xs text-[#4A332B]/60 font-semibold underline underline-offset-2 hover:text-[#4E0B11] transition-colors"
          >
            Lewati, langsung mulai
          </button>

          <ProgressDots motifIndex={motifIndex} />
        </div>
      </GameLayout>
    );
  }

  // ─── PUZZLE screen ────────────────────────────────────────────────────────
  return (
    <GameLayout
      title="Susun Motif Batik"
      subtitle={`Motif ${motifIndex + 1} dari ${MOTIFS.length}: ${currentMotif.namaMotif} — ${currentMotif.asalDaerah}`}
      pendhapa="batik"
    >
      <div className="flex flex-col gap-5">

        {/* Timer row */}
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-xs font-bold text-[#4E0B11] truncate">{currentMotif.namaMotif}</p>
            <p className="text-[10px] text-[#4A332B]/70 font-medium">{currentMotif.asalDaerah}</p>
          </div>
          <div
            className="shrink-0 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-bold tabular-nums transition-colors duration-500"
            style={{ backgroundColor: timerColor + "1a", color: timerColor, border: `1.5px solid ${timerColor}40` }}
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <circle cx="12" cy="12" r="10" />
              <path strokeLinecap="round" d="M12 6v6l4 2" />
            </svg>
            {timeLeft}s
          </div>
        </div>

        {/* Timer bar */}
        <div className="h-1.5 bg-stone-200 rounded-full overflow-hidden -mt-2">
          <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${timerPct}%`, backgroundColor: timerColor }} />
        </div>

        {/* Instruction */}
        <p className="text-xs text-[#4A332B]/70 font-medium text-center">
          {tapFirst !== null
            ? "Pilih keping tujuan untuk menukar"
            : "Drag atau tap dua keping untuk menukarnya"}
        </p>

        {/* Puzzle grid */}
        <div
          className="w-full max-w-[280px] sm:max-w-[320px] mx-auto aspect-square rounded-xl overflow-hidden border-2 border-[#4E0B11]/30 shadow-lg select-none"
          style={{ display: "grid", gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)` }}
        >
          {Array.from({ length: TOTAL_PIECES }, (_, cellIndex) => {
            const pieceIndex = pieces[cellIndex];
            const row = Math.floor(pieceIndex / GRID_SIZE);
            const col = pieceIndex % GRID_SIZE;
            const isSelected = tapFirst === cellIndex;

            return (
              <div
                key={cellIndex}
                className={`relative cursor-grab active:cursor-grabbing overflow-hidden transition-all duration-200 ${
                  isSelected ? "ring-4 ring-[#FFC832] ring-inset" : solved ? "ring-2 ring-[#4E0B11]/10 ring-inset" : ""
                }`}
                style={{ touchAction: "none" }}
                draggable={!solved}
                onDragStart={() => handleDragStart(cellIndex)}
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => handleDrop(cellIndex)}
                onClick={() => handleTap(cellIndex)}
              >
                <div
                  className="absolute pointer-events-none"
                  style={{
                    width: `${GRID_SIZE * 100}%`,
                    height: `${GRID_SIZE * 100}%`,
                    left: `-${col * 100}%`,
                    top: `-${row * 100}%`,
                    opacity: isSelected ? 0.7 : 1,
                    transition: "opacity 0.2s",
                  }}
                >
                  <Image 
                    src={currentMotif.gambarSrc} 
                    alt="" 
                    fill 
                    className="object-cover" 
                    unoptimized 
                  />
                </div>
                <div className="absolute inset-0 border border-white/30 pointer-events-none" />
                <div className="absolute inset-0 hover:bg-white/10 transition-colors duration-100 pointer-events-none" />
                
                {/* Hint number for identical pieces */}
                <div className="absolute top-1 left-1 bg-black/40 text-white/80 text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center pointer-events-none">
                  {pieceIndex + 1}
                </div>

                {solved && cellIndex === Math.floor(TOTAL_PIECES / 2) && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="bg-[#FFC832]/90 rounded-full p-1.5 shadow-md">
                      <svg className="w-4 h-4 text-[#4E0B11]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <ProgressDots motifIndex={motifIndex} />

        {totalScore > 0 && (
          <div className="text-center">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4E0B11] bg-[#FFC832]/20 border border-[#FFC832]/50 rounded-full px-3 py-1">
              Total sejauh ini: {totalScore} poin
            </span>
          </div>
        )}
      </div>
    </GameLayout>
  );
}
