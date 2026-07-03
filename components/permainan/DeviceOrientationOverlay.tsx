"use client";

import { useEffect, useState } from "react";

export default function DeviceOrientationOverlay() {
  const [isPortrait, setIsPortrait] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is touch capable / mobile size
    const checkOrientation = () => {
      const mobileMatch = window.matchMedia("(max-width: 768px)");
      const portraitMatch = window.matchMedia("(orientation: portrait)");
      
      setIsMobile(mobileMatch.matches);
      setIsPortrait(portraitMatch.matches);
    };

    // Initial check
    checkOrientation();

    // Listen for resize/orientation changes
    window.addEventListener("resize", checkOrientation);
    window.addEventListener("orientationchange", checkOrientation);

    return () => {
      window.removeEventListener("resize", checkOrientation);
      window.removeEventListener("orientationchange", checkOrientation);
    };
  }, []);

  // Only show on mobile portrait
  if (!isMobile || !isPortrait) return null;

  return (
    <div className="fixed inset-0 z-[99999] bg-[#4E0B11] text-[#F9F1E4] flex flex-col items-center justify-center p-8 text-center">
      {/* Phone Rotation Animation/Icon */}
      <div className="relative mb-8 animate-[pulse_2s_ease-in-out_infinite]">
        <svg
          className="w-24 h-24 text-[#FFC832] transform -rotate-90"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
        <svg
          className="w-10 h-10 text-white absolute -bottom-2 -right-2 animate-[spin_3s_linear_infinite]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      </div>

      <h2 className="text-2xl font-bold mb-3 tracking-wide">
        Mohon Putar Perangkat
      </h2>
      <p className="text-sm opacity-90 max-w-[280px] leading-relaxed">
        Untuk pengalaman bermain yang lebih baik dan luas, silakan putar HP Anda ke mode <strong>Lanskap (Horizontal)</strong>.
      </p>
    </div>
  );
}
