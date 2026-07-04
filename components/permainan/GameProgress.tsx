"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

/**
 * GameProgress — stepper 5 langkah: Batik → Wayang → Gamelan → Kuliner → Hasil
 * Responsive: horizontal scroll di mobile, full horizontal di desktop.
 */

const STEPS = [
  {
    key: "batik",
    label: "Batik",
    href: "/permainan/batik",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={2}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" strokeLinecap="round" />
        <path d="M8 12s1.5-2 4-2 4 2 4 2" strokeLinecap="round" />
        <path d="M12 8v1M12 15v1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    key: "wayang",
    label: "Wayang",
    href: "/permainan/wayang",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={2}>
        <ellipse cx="12" cy="8" rx="4" ry="5" />
        <path d="M8 13c-3 2-4 5-4 8h16c0-3-1-6-4-8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    key: "gamelan",
    label: "Gamelan",
    href: "/permainan/gamelan",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={2}>
        <rect x="3" y="10" width="18" height="8" rx="2" />
        <circle cx="7" cy="14" r="1.5" fill="currentColor" />
        <circle cx="12" cy="14" r="1.5" fill="currentColor" />
        <circle cx="17" cy="14" r="1.5" fill="currentColor" />
        <path d="M7 10V7M12 10V6M17 10V7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    key: "kuliner",
    label: "Kuliner",
    href: "/permainan/kuliner",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={2}>
        <path d="M12 3C8 3 5 7 5 12h14c0-5-3-9-7-9z" strokeLinecap="round" />
        <path d="M5 12v2a7 7 0 0014 0v-2" strokeLinecap="round" />
        <path d="M9 21h6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    key: "hasil",
    label: "Hasil",
    href: "/permainan/hasil",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={2}>
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function GameProgress({ completed = {} }: { completed?: Record<string, boolean> }) {
  const pathname = usePathname();

  // Tentukan index step aktif
  const activeIndex = STEPS.findIndex((s) => pathname.startsWith(s.href));

  return (
    <nav aria-label="Progress game" className="w-full">
      {/* Scrollable container di mobile */}
      <div className="overflow-x-auto pb-1 -mx-4 px-4 sm:overflow-visible sm:mx-0 sm:px-0">
        <ol className="flex items-center min-w-max sm:min-w-0 sm:w-full gap-0">
          {STEPS.map((step, index) => {
            const isDone = completed[step.key] || index < activeIndex;
            const isActive = index === activeIndex;
            const isLast = index === STEPS.length - 1;

            return (
              <li key={step.key} className="flex items-center flex-1 last:flex-none">
                <Link href={step.href} className="flex items-center flex-1 w-full outline-none focus-visible:ring-2 focus-visible:ring-[#FFC832] rounded-full">
                  {/* Step bubble + label */}
                  <div className="flex flex-col items-center gap-1.5 hover:scale-105 transition-transform duration-200">
                    {/* Bubble */}
                    <div
                      className={`
                        relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full border-[1.5px] transition-all duration-300 shrink-0
                        ${isDone
                          ? "bg-[#FFC832] border-[#FFC832] text-[#4E0B11]"
                          : isActive
                          ? "bg-[#4E0B11] border-[#4E0B11] text-white shadow-lg shadow-[#4E0B11]/30"
                          : "bg-white border-stone-300 text-stone-400"
                        }
                      `}
                    >
                      {isDone ? (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        step.icon
                      )}

                      {/* Pulse ring saat aktif */}
                      {isActive && (
                        <span className="absolute inset-0 rounded-full border-2 border-[#4E0B11] animate-ping opacity-20" />
                      )}
                    </div>

                    {/* Label */}
                    <span
                      className={`text-[10px] sm:text-xs font-semibold tracking-wide whitespace-nowrap transition-colors duration-300 ${
                        isActive
                          ? "text-[#4E0B11]"
                          : isDone
                          ? "text-[#FFC832]"
                          : "text-stone-400"
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>

                  {/* Connector line (bukan step terakhir) */}
                  {!isLast && (
                    <div className="flex-1 mx-1 sm:mx-2 mb-4">
                      <div className="h-0.5 w-full relative overflow-hidden rounded-full bg-stone-200">
                        <div
                          className="absolute inset-y-0 left-0 bg-[#FFC832] transition-all duration-500"
                          style={{ width: isDone ? "100%" : "0%" }}
                        />
                      </div>
                    </div>
                  )}
                </Link>
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
