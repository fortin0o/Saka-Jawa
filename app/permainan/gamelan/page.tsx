"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import GameLayout from "../../../components/permainan/GameLayout";
import { useGame } from "../../../context/GameContext";

// --- Types ---
interface Instrumen {
  id: string;
  nama: string;
  warna: string;
  warnaGlow: string;
  warnaText: string;
  suaraLabel: string;
  gambarSrc: string;
  deskripsi: string;
}

type Phase = "intro" | "playing" | "done";
type SubPhase = "idle" | "showing" | "input" | "correct" | "wrong";

// --- Game Constants ---
const MAX_PATTERN_LENGTH = 8;
const MIN_ROUND_TO_WIN = 4;
const POINTS_PER_ROUND = 20;
const MAX_REPLAYS_PER_ROUND = 2;
const SHOW_INTERVAL_MS = 700;
const SHOW_GAP_MS = 300;
const FEEDBACK_MS = 800;

// --- Instrument Data ---
// Warna diambil dari palet web utama (#4E0B11 maroon, #FFC832 gold)
const INSTRUMEN: Instrumen[] = [
  {
    id: "gong",
    nama: "Gong Ageng",
    warna: "#4E0B11",
    warnaGlow: "rgba(78,11,17,0.45)",
    warnaText: "#FFC832",
    suaraLabel: "GONG",
    gambarSrc: "/Assets/Gambar Gamelan/Gong.jpg",
    deskripsi: "Menandai awal & akhir gendhing",
  },
  {
    id: "kendang",
    nama: "Kendang",
    warna: "#7C3A1E",
    warnaGlow: "rgba(124,58,30,0.45)",
    warnaText: "#FFF8E7",
    suaraLabel: "DUG TAK",
    gambarSrc: "/Assets/Gambar Gamelan/Kendang.jpg",
    deskripsi: "Pemimpin tempo & irama",
  },
  {
    id: "bonang",
    nama: "Bonang",
    warna: "#B5820A",
    warnaGlow: "rgba(181,130,10,0.45)",
    warnaText: "#1A1A1A",
    suaraLabel: "TING",
    gambarSrc: "/Assets/Gambar Gamelan/Bonang.jpg",
    deskripsi: "Melodi utama gong kecil",
  },
  {
    id: "saron",
    nama: "Saron",
    warna: "#4A332B",
    warnaGlow: "rgba(74,51,43,0.45)",
    warnaText: "#FFC832",
    suaraLabel: "NDANG",
    gambarSrc: "/Assets/Gambar Gamelan/Saron.jpg",
    deskripsi: "Fondasi nada pokok bilah logam",
  },
];

// --- Audio Helper (Web Audio API) ---
// TODO: Ganti dengan file audio asli saat tersedia di /Assets/Audio/gamelan/
//       Contoh: new Audio("/Assets/Audio/gamelan/gong.mp3").play()
//       Saat ini menggunakan oscillator sebagai placeholder bunyi sederhana.
function playTone(instrumenId: string, audioCtx: AudioContext | null): void {
  if (!audioCtx) return;
  try {
    const freqMap: Record<string, number> = {
      gong: 80,
      kendang: 160,
      bonang: 440,
      saron: 330,
    };
    const freq = freqMap[instrumenId] ?? 220;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.type = instrumenId === "kendang" ? "square" : "sine";
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.25, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.6);
    osc.start(audioCtx.currentTime);
    osc.stop(audioCtx.currentTime + 0.65);
  } catch {
    // Abaikan error audio (mis. autoplay policy)
  }
}

function generatePattern(length: number): number[] {
  return Array.from({ length }, () => Math.floor(Math.random() * INSTRUMEN.length));
}

// --- Component ---
export default function GamelanGamePage() {
  const { updateScore, markCompleted } = useGame();

  const [phase, setPhase] = useState<Phase>("intro");
  const [subPhase, setSubPhase] = useState<SubPhase>("idle");

  const [round, setRound] = useState(1);
  const [pattern, setPattern] = useState<number[]>([]);
  const [userInput, setUserInput] = useState<number[]>([]);
  const [totalScore, setTotalScore] = useState(0);
  const [replayCount, setReplayCount] = useState(0);

  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [wrongIdx, setWrongIdx] = useState<number | null>(null);
  const [correctFlash, setCorrectFlash] = useState(false);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const [audioReady, setAudioReady] = useState(false);
  const [soundWarningDismissed, setSoundWarningDismissed] = useState(false);

  const showTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Unused effect suppressor
  useEffect(() => {
    // intentionally empty — placeholder for future effects
  }, [phase]);

  const initAudio = useCallback(() => {
    if (audioCtxRef.current) return;
    try {
      type ExtWindow = Window & { webkitAudioContext?: typeof AudioContext };
      const Ctx = window.AudioContext || (window as ExtWindow).webkitAudioContext;
      if (Ctx) {
        audioCtxRef.current = new Ctx();
        setAudioReady(true);
      }
    } catch {
      // AudioContext not supported
    }
  }, []);

  const clearTimers = useCallback(() => {
    if (showTimeoutRef.current) {
      clearTimeout(showTimeoutRef.current);
      showTimeoutRef.current = null;
    }
  }, []);

  useEffect(() => () => clearTimers(), [clearTimers]);

  const showPattern = useCallback((pat: number[]) => {
    setSubPhase("showing");
    setUserInput([]);
    setActiveIdx(null);
    setWrongIdx(null);

    let i = 0;
    const step = () => {
      if (i >= pat.length) {
        showTimeoutRef.current = setTimeout(() => {
          setActiveIdx(null);
          setSubPhase("input");
        }, SHOW_GAP_MS);
        return;
      }
      setActiveIdx(pat[i]);
      playTone(INSTRUMEN[pat[i]].id, audioCtxRef.current);
      showTimeoutRef.current = setTimeout(() => {
        setActiveIdx(null);
        showTimeoutRef.current = setTimeout(() => {
          i++;
          step();
        }, SHOW_GAP_MS);
      }, SHOW_INTERVAL_MS);
    };
    step();
  }, []);

  const startGame = useCallback(() => {
    initAudio();
    const firstPattern = generatePattern(1);
    setRound(1);
    setPattern(firstPattern);
    setUserInput([]);
    setTotalScore(0);
    setReplayCount(0);
    setActiveIdx(null);
    setWrongIdx(null);
    setCorrectFlash(false);
    setPhase("playing");
    showTimeoutRef.current = setTimeout(() => {
      showPattern(firstPattern);
    }, 600);
  }, [initAudio, showPattern]);

  const handleReplay = useCallback(() => {
    if (subPhase !== "input" || replayCount >= MAX_REPLAYS_PER_ROUND) return;
    setReplayCount((c) => c + 1);
    showPattern(pattern);
  }, [subPhase, replayCount, pattern, showPattern]);

  const handleInstrumenClick = useCallback(
    (instrIdx: number) => {
      if (subPhase !== "input") return;
      initAudio();
      playTone(INSTRUMEN[instrIdx].id, audioCtxRef.current);

      const newInput = [...userInput, instrIdx];
      const currentStep = newInput.length - 1;

      setActiveIdx(instrIdx);
      setTimeout(() => setActiveIdx(null), 180);

      if (newInput[currentStep] !== pattern[currentStep]) {
        setWrongIdx(instrIdx);
        setSubPhase("wrong");
        setTimeout(() => {
          setWrongIdx(null);
          updateScore("gamelan", totalScore);
          markCompleted("gamelan");
          setPhase("done");
        }, FEEDBACK_MS * 1.5);
        return;
      }

      setUserInput(newInput);

      if (newInput.length === pattern.length) {
        setSubPhase("correct");
        setCorrectFlash(true);
        const newScore = totalScore + POINTS_PER_ROUND;
        setTotalScore(newScore);
        setTimeout(() => {
          setCorrectFlash(false);
          const nextRound = round + 1;
          if (nextRound > MAX_PATTERN_LENGTH) {
            updateScore("gamelan", newScore);
            markCompleted("gamelan");
            setPhase("done");
            return;
          }
          const nextPat = generatePattern(nextRound);
          setRound(nextRound);
          setPattern(nextPat);
          setReplayCount(0);
          setTimeout(() => showPattern(nextPat), 400);
        }, FEEDBACK_MS);
      }
    },
    [subPhase, userInput, pattern, round, totalScore, initAudio, updateScore, markCompleted, showPattern]
  );

  const isGameOver = phase === "done";
  const isWin = isGameOver && round > MIN_ROUND_TO_WIN;
  const reachedTarget = round > MIN_ROUND_TO_WIN;
  const replayDisabled = subPhase !== "input" || replayCount >= MAX_REPLAYS_PER_ROUND;
  const isShowingPattern = subPhase === "showing";
  const isInputPhase = subPhase === "input";

  // suppress unused audioReady warning
  void audioReady;

  // ════ INTRO ════
  if (phase === "intro") {
    return (
      <GameLayout
        title="Ritme Pendhapa"
        subtitle="Simon Says versi Gamelan Jawa — ingat pola bunyi dan ulangi!"
        pendhapa="gamelan"
      >
        {!soundWarningDismissed && (
          <div className="mb-5 flex items-start gap-3 bg-[#FFC832]/15 border border-[#FFC832]/50 rounded-xl px-4 py-3 shadow-sm">
            <span className="text-xl shrink-0 mt-0.5 font-bold text-[#FFC832] bg-[#4E0B11] w-8 h-8 flex items-center justify-center rounded-full">!</span>
            <div className="flex-1">
              <p className="text-sm font-bold text-[#4E0B11]">Aktifkan Suara!</p>
              <p className="text-xs text-[#4A332B] mt-0.5 leading-relaxed">
                Game ini menggunakan efek suara untuk membantu mengingat pola ritme. Pastikan volume perangkat Anda sudah dinyalakan sebelum mulai bermain.
              </p>
            </div>
            <button
              onClick={() => setSoundWarningDismissed(true)}
              className="shrink-0 text-[#4E0B11]/50 hover:text-[#4E0B11] transition-colors"
              aria-label="Tutup peringatan"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 py-4">
          <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 rounded-full bg-[#4E0B11] flex items-center justify-center shadow-lg border-4 border-[#FFC832]/40">
            <span className="text-5xl font-bold text-[#FFC832]">G</span>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-lg gap-4 md:gap-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#4E0B11]">Cara Bermain</h2>
            <ul className="text-sm md:text-base text-[#4A332B] leading-relaxed space-y-2 bg-white border border-[#4E0B11]/20 rounded-xl p-4 md:p-5 shadow-sm w-full text-left">
              <li className="flex gap-2"><span className="text-[#FFC832] font-bold shrink-0">1.</span>Perhatikan instrumen mana yang menyala secara berurutan.</li>
              <li className="flex gap-2"><span className="text-[#FFC832] font-bold shrink-0">2.</span>Setelah selesai, tekan instrumen dalam urutan yang <strong>sama persis</strong>.</li>
              <li className="flex gap-2"><span className="text-[#FFC832] font-bold shrink-0">3.</span>Setiap ronde berhasil, pola bertambah 1 instrumen dan kamu dapat <strong>+20 poin</strong>.</li>
              <li className="flex gap-2"><span className="text-[#FFC832] font-bold shrink-0">4.</span>Gunakan tombol <strong>&quot;Ulangi Pola&quot;</strong> maksimal 2&times; per ronde jika lupa urutan.</li>
              <li className="flex gap-2"><span className="text-[#FFC832] font-bold shrink-0">5.</span>Capai ronde ke-4 untuk menyelesaikan Pendhapa Gamelan!</li>
            </ul>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 w-full">
              {INSTRUMEN.map((ins) => (
                <div key={ins.id} className="flex flex-col items-center gap-1.5 bg-white border border-[#4E0B11]/15 rounded-xl p-2 shadow-sm">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#4E0B11]/20">
                    <Image src={ins.gambarSrc} alt={ins.nama} width={40} height={40} className="object-cover w-full h-full" unoptimized />
                  </div>
                  <span className="text-[9px] font-bold text-[#4E0B11] text-center leading-tight">{ins.nama}</span>
                  <span className="text-[8px] font-bold text-[#FFC832] bg-[#4E0B11] px-1.5 py-0.5 rounded-full">{ins.suaraLabel}</span>
                </div>
              ))}
            </div>

            <button
              id="btn-mulai-gamelan"
              onClick={startGame}
              className="inline-flex items-center gap-2 bg-[#4E0B11] text-[#FFC832] font-bold text-sm px-8 py-3.5 rounded-full shadow-md hover:bg-[#3A0810] hover:-translate-y-0.5 transition-all duration-200 active:translate-y-0"
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

  // ════ DONE ════
  if (phase === "done") {
    return (
      <GameLayout title="Ritme Pendhapa — Selesai!" pendhapa="gamelan">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 py-8">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className={`w-20 h-20 rounded-full flex items-center justify-center shadow-lg text-4xl ${isWin ? "bg-[#FFC832]" : "bg-[#4E0B11]"}`}>
              {isWin ? "!" : "G"}
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#4E0B11]">
                {isWin ? "Luar Biasa!" : "Game Over!"}
              </h2>
              <p className="text-sm text-[#4A332B] font-medium mt-1 max-w-[200px]">
                {isWin
                  ? `Kamu berhasil melewati ${round - 1} ronde penuh!`
                  : `Kamu sampai di ronde ${round}. Pola yang benar ada ${pattern.length} langkah.`}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start gap-4 w-full max-w-xs">
            <div className="w-full bg-[#4E0B11] text-white rounded-2xl px-8 py-5 flex flex-col items-center md:items-start gap-1 shadow-md border border-[#7C3A1E]">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FFC832]">Skor Gamelan</span>
              <span className="text-5xl font-bold tabular-nums text-[#FFC832]">{totalScore}</span>
              <span className="text-[10px] sm:text-xs text-white/70 font-medium">
                dari {MAX_PATTERN_LENGTH * POINTS_PER_ROUND} poin maksimal
              </span>
            </div>

            <div className="w-full text-xs font-semibold text-[#4A332B] bg-white border border-[#4E0B11]/20 px-4 py-2.5 rounded-xl text-center">
              Ronde selesai:{" "}
              <span className="font-bold text-[#4E0B11]">{Math.max(0, round - 1)}</span> / {MAX_PATTERN_LENGTH}
              {reachedTarget && (
                <span className="ml-2 inline-flex items-center gap-1 text-[#4E0B11] bg-[#FFC832] px-2 py-0.5 rounded-full text-[10px] font-bold">
                  ✓ Target Tercapai!
                </span>
              )}
            </div>

            <button
              id="btn-ulangi-gamelan"
              onClick={() => { setPhase("intro"); setRound(1); setTotalScore(0); }}
              className="w-full inline-flex justify-center items-center gap-2 bg-white text-[#4E0B11] border-2 border-[#4E0B11] font-bold text-sm px-6 py-3 rounded-full hover:bg-[#4E0B11]/5 transition-all"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Main Lagi
            </button>

            <Link
              id="btn-lanjut-kuliner"
              href="/permainan"
              className="w-full mt-1 inline-flex justify-center items-center gap-2 bg-[#4E0B11] text-[#FFC832] font-bold text-sm px-8 py-3 rounded-full shadow-md hover:bg-[#3A0810] hover:-translate-y-0.5 transition-all duration-200"
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

  // ════ PLAYING ════
  return (
    <GameLayout title="Ritme Pendhapa" pendhapa="gamelan">
      <div className="flex flex-col gap-4">

        {/* Sound warning compact */}
        {!soundWarningDismissed && (
          <div className="flex items-center gap-2 bg-[#FFC832]/20 border border-[#FFC832]/60 rounded-lg px-3 py-2 text-xs font-semibold text-[#4E0B11]">
            <span className="font-bold">!</span>
            <span>Nyalakan volume perangkat untuk mendengar bunyi gamelan!</span>
            <button onClick={() => setSoundWarningDismissed(true)} className="ml-auto text-[#4E0B11]/50 hover:text-[#4E0B11]">✕</button>
          </div>
        )}

        {/* Status Bar */}
        <div className="flex items-center justify-between bg-white border-2 border-[#4E0B11]/20 rounded-xl px-4 py-3 shadow-sm gap-3">
          <div className="flex flex-col items-center">
            <span className="text-[10px] uppercase font-bold text-[#4E0B11]/60 tracking-wider">Ronde</span>
            <span className="text-xl font-bold text-[#4E0B11] tabular-nums">{round}</span>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="flex items-center gap-1 flex-wrap justify-center">
              {Array.from({ length: pattern.length }).map((_, i) => {
                const isInputted = i < userInput.length;
                const isCorrect = isInputted && userInput[i] === pattern[i];
                return (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-full border transition-all duration-300 ${
                      isInputted
                        ? isCorrect
                          ? "bg-[#4E0B11] border-[#4E0B11]"
                          : "bg-red-500 border-red-500"
                        : "bg-white border-[#4E0B11]/30"
                    }`}
                  />
                );
              })}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[10px] uppercase font-bold text-[#4E0B11]/60 tracking-wider">Skor</span>
            <span className="text-xl font-bold text-[#4E0B11] tabular-nums">{totalScore}</span>
          </div>
        </div>

        {/* Status Message */}
        <div
          className={`text-center py-2.5 px-4 rounded-xl text-sm font-bold transition-all duration-300 ${
            correctFlash
              ? "bg-[#FFC832] text-[#4E0B11]"
              : subPhase === "wrong"
              ? "bg-red-100 text-red-700"
              : isShowingPattern
              ? "bg-[#4E0B11] text-[#FFC832]"
              : isInputPhase
              ? "bg-[#F9F1E4] text-[#4E0B11] border border-[#4E0B11]/20"
              : "bg-[#F9F1E4] text-[#4A332B]"
          }`}
        >
          {correctFlash && "✓ Benar! Lanjut ke ronde berikutnya…"}
          {subPhase === "wrong" && !correctFlash && "✗ Salah! Permainan selesai."}
          {isShowingPattern && !correctFlash && `Perhatikan pola… (${pattern.length} langkah)`}
          {isInputPhase && !correctFlash && `Tekan ${pattern.length - userInput.length} instrumen lagi`}
          {subPhase === "idle" && !correctFlash && "Bersiap…"}
        </div>

        {/* 2x2 Instrument Grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {INSTRUMEN.map((ins, idx) => {
            const isActive = activeIdx === idx;
            const isWrong = wrongIdx === idx;

            return (
              <button
                key={ins.id}
                id={`instrumen-${ins.id}`}
                onClick={() => handleInstrumenClick(idx)}
                disabled={!isInputPhase}
                aria-label={`${ins.nama} — ${ins.suaraLabel}`}
                className={`
                  relative flex flex-col items-center justify-center gap-2
                  rounded-2xl border-2 p-4 sm:p-5
                  transition-all duration-150 select-none
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC832]
                  overflow-hidden
                  ${isInputPhase ? "cursor-pointer active:scale-95" : "cursor-not-allowed opacity-70"}
                  ${isActive
                    ? "scale-105 shadow-2xl border-transparent"
                    : isWrong
                    ? "scale-100 shadow-lg border-red-400"
                    : "border-[#4E0B11]/20 bg-white shadow-sm hover:shadow-md"}
                `}
                style={
                  isActive
                    ? { backgroundColor: ins.warna, boxShadow: `0 0 30px 8px ${ins.warnaGlow}, 0 4px 20px rgba(0,0,0,0.2)` }
                    : isWrong
                    ? { backgroundColor: "#fef2f2" }
                    : {}
                }
              >
                {isActive && (
                  <span
                    className="absolute inset-0 rounded-2xl animate-ping opacity-30"
                    style={{ backgroundColor: ins.warna }}
                  />
                )}

                <div className={`relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-xl overflow-hidden border-2 shadow-sm transition-all duration-150 ${isActive ? "border-white/40 scale-110" : "border-[#4E0B11]/15"}`}>
                  <Image src={ins.gambarSrc} alt={ins.nama} fill className="object-cover" unoptimized />
                  {!isActive && <div className="absolute inset-0 bg-[#4E0B11]/10" />}
                </div>

                <span className={`text-sm sm:text-base font-bold leading-tight text-center transition-colors duration-150 ${isActive ? "text-white" : isWrong ? "text-red-700" : "text-[#4E0B11]"}`}>
                  {ins.nama}
                </span>

                <span className={`text-xs sm:text-sm font-black tracking-widest px-3 py-1 rounded-full transition-all duration-150 ${isActive ? "bg-white/25 text-white scale-110" : isWrong ? "bg-red-100 text-red-600" : "bg-[#4E0B11]/10 text-[#4E0B11]"}`}>
                  {ins.suaraLabel}
                </span>

                <span className={`text-[10px] text-center leading-tight font-medium transition-colors duration-150 ${isActive ? "text-white/80" : "text-[#4A332B]/70"}`}>
                  {ins.deskripsi}
                </span>
              </button>
            );
          })}
        </div>

        {/* Bottom Controls */}
        <div className="flex items-center justify-between gap-3 mt-2">
          <button
            id="btn-ulangi-pola"
            onClick={handleReplay}
            disabled={replayDisabled}
            className={`flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-xl border transition-all ${replayDisabled ? "border-stone-200 text-stone-400 bg-white cursor-not-allowed" : "border-[#4E0B11] text-[#4E0B11] bg-white hover:bg-[#4E0B11]/5 active:scale-95"}`}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Ulangi Pola
            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${replayDisabled ? "bg-stone-100 text-stone-400" : "bg-[#4E0B11] text-[#FFC832]"}`}>
              {MAX_REPLAYS_PER_ROUND - replayCount}&times;
            </span>
          </button>

          <div className="flex items-center gap-1">
            {Array.from({ length: MAX_PATTERN_LENGTH }).map((_, i) => (
              <div
                key={i}
                className={`h-2 rounded-full transition-all duration-500 ${
                  i < round - 1 ? "bg-[#FFC832] w-4" : i === round - 1 ? "bg-[#4E0B11] w-5" : "bg-[#4E0B11]/15 w-3"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Target hint */}
        {round <= MIN_ROUND_TO_WIN && (
          <p className="text-center text-[10px] text-[#4A332B]/60 font-medium">
            Target: selesaikan hingga ronde <strong className="text-[#4E0B11]">{MIN_ROUND_TO_WIN}</strong> untuk menyelesaikan Pendhapa Gamelan
          </p>
        )}
        {round > MIN_ROUND_TO_WIN && (
          <p className="text-center text-[10px] font-bold text-[#4E0B11] bg-[#FFC832]/20 py-1 rounded-full">
            Target tercapai! Terus bermain untuk skor lebih tinggi!
          </p>
        )}

      </div>
    </GameLayout>
  );
}
