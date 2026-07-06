"use client";

import Image from "next/image";
import Link from "next/link";
import { useGame } from "../../context/GameContext";
import SharedNavbar from "@/components/shared/SharedNavbar";

import { Palette, VenetianMask, Music, Utensils } from "lucide-react";

type PendhapaKey = "batik" | "wayang" | "gamelan" | "kuliner";

type PendhapaInfo = {
  key: PendhapaKey;
  label: string;
  href: string;
  color: string;
  desc: string;
  icon: React.ReactNode;
};

const pendhapas: PendhapaInfo[] = [
  {
    key: "batik",
    label: "Pendhapa Batik",
    href: "/permainan/batik",
    color: "#FFC832",
    desc: "Motif & filosofi kain Jawa",
    icon: <Palette className="w-6 h-6" />,
  },
  {
    key: "wayang",
    label: "Pendhapa Wayang",
    href: "/permainan/wayang",
    color: "#FFC832",
    desc: "Tokoh & cerita pewayangan",
    icon: <VenetianMask className="w-6 h-6" />,
  },
  {
    key: "gamelan",
    label: "Pendhapa Gamelan",
    href: "/permainan/gamelan",
    color: "#FFC832",
    desc: "Instrumen & harmoni musik",
    icon: <Music className="w-6 h-6" />,
  },
  {
    key: "kuliner",
    label: "Pendhapa Kuliner",
    href: "/permainan/kuliner",
    color: "#FFC832",
    desc: "Cita rasa masakan tradisional",
    icon: <Utensils className="w-6 h-6" />,
  },
];

export default function PermainanIntroPage() {
  const { completed } = useGame();
  
  const completedCount = Object.values(completed).filter(Boolean).length;
  const isAllCompleted = completedCount === 4;

  return (
    <div className="min-h-screen bg-[#F9F1E4] overflow-hidden">
      <SharedNavbar />
      {/* ── Hero Section ─────────────────────────────── */}
      <section className="relative w-full bg-gradient-to-br from-[#4E0B11] to-[#2D0F12] overflow-hidden">
        {/* Decorative gunungan kanan */}
        <div className="absolute -right-12 -top-8 w-56 sm:w-72 md:w-96 h-auto opacity-10 pointer-events-none">
          <Image
            src="/Assets/GununganCTAAtas.svg"
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
            src="/Assets/GununganCTABawah.svg"
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
            Game Edukasi
          </span>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
            Petualangan
            <br />
            <span className="text-[#FFC832]">4 Pendhapa</span>
          </h1>

          {/* Sub */}
          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-white/80 font-medium leading-relaxed max-w-xl mx-auto">
            Jelajahi empat pendhapa penuh cerita dan kearifan secara bebas. Jawab tantangan
            di setiap pendhapa untuk mengungkap kekayaan budaya Jawa!
          </p>

          {/* CTA */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            {isAllCompleted ? (
              <Link
                href="/permainan/hasil"
                className="inline-flex items-center gap-3 bg-[#FFC832] text-[#4E0B11] font-bold text-sm sm:text-base px-7 sm:px-9 py-3 sm:py-3.5 rounded-full shadow-lg hover:bg-[#e6b42d] hover:-translate-y-0.5 transition-all duration-200 active:translate-y-0 w-full sm:w-auto justify-center"
              >
                <span>Lihat Hasil Akhir</span>
                <span className="bg-[#4E0B11] text-[#FFC832] rounded-full w-6 h-6 flex items-center justify-center shrink-0">
                  !
                </span>
              </Link>
            ) : (
              <a
                href="#pilih-pendhapa"
                className="inline-flex items-center gap-3 bg-[#FFC832] text-[#4E0B11] font-bold text-sm sm:text-base px-7 sm:px-9 py-3 sm:py-3.5 rounded-full shadow-lg hover:bg-[#e6b42d] hover:-translate-y-0.5 transition-all duration-200 active:translate-y-0 w-full sm:w-auto justify-center"
              >
                <span>Pilih Pendhapa</span>
                <span className="bg-[#4E0B11] text-[#FFC832] rounded-full w-6 h-6 flex items-center justify-center shrink-0">
                  ↓
                </span>
              </a>
            )}

            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/80 text-sm font-semibold border border-white/30 rounded-full px-6 py-3 hover:bg-white/10 transition-all duration-200 w-full sm:w-auto justify-center"
            >
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </section>

      {/* ── Info 4 Pendhapa ───────────────────────────── */}
      <section id="pilih-pendhapa" className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16 scroll-mt-10">
        {/* Label section */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#4E0B11]">
            {isAllCompleted ? "Semua Pendhapa Selesai!" : "Pilih Pendhapa Menantimu"}
          </h2>
          <p className="text-sm sm:text-base text-[#4A332B] font-medium mt-2">
            Progress: {completedCount} dari 4 Pendhapa
          </p>
        </div>

        {/* Grid pendhapa */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {pendhapas.map((p, i) => {
            const isDone = completed[p.key];
            return (
              <Link
                href={p.href}
                key={p.key}
                className={`relative flex flex-col items-center text-center gap-2 rounded-xl sm:rounded-2xl border p-4 sm:p-5 transition-all duration-200 hover:-translate-y-1 ${
                  isDone 
                    ? "bg-[#FFC832]/20 border-[#FFC832] shadow-sm hover:shadow-md" 
                    : "bg-white border-[#4E0B11]/20 shadow-sm hover:shadow-md"
                }`}
              >
                {/* Nomor + ikon */}
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-xl sm:text-2xl shrink-0 ${isDone ? "bg-[#FFC832] text-[#4E0B11]" : "bg-[#4E0B11] text-[#FFC832]"}`}>
                  {isDone ? "✓" : p.icon}
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
                {isDone && (
                  <div className="absolute top-2 right-2 text-[#4E0B11]">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </Link>
            );
          })}
        </div>

        {/* Info cara bermain */}
        <div className="mt-8 sm:mt-10 bg-white border border-[#4E0B11]/20 rounded-xl sm:rounded-2xl p-5 sm:p-6">
          <h3 className="text-base sm:text-lg font-bold text-[#4E0B11] mb-3 sm:mb-4">
            Cara Bermain
          </h3>
          <ol className="space-y-2.5">
            {[
              "Pilih dan kunjungi pendhapa secara bebas (tidak harus berurutan).",
              "Jawab tantangan atau mainkan mini-game di setiap pendhapa.",
              "Setelah selesai satu pendhapa, kamu akan kembali ke halaman ini.",
              "Selesaikan keempatnya, lalu klik 'Lihat Hasil Akhir' untuk mendapat gelarmu!",
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
          {isAllCompleted && (
            <Link
              href="/permainan/hasil"
              className="inline-flex items-center gap-2 bg-[#4E0B11] text-white font-bold text-sm sm:text-base px-8 sm:px-10 py-3 sm:py-3.5 rounded-full shadow-md hover:bg-[#3A0810] hover:-translate-y-0.5 transition-all duration-200 active:translate-y-0"
            >
              Lihat Hasil Akhir
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          )}
        </div>
      </section>
    </div>
  );
}
