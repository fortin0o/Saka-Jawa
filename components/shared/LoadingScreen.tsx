"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";

// Komponen inner yang di-remount setiap kali pathname berubah via key
function LoadingScreenInner() {
  const [mounted, setMounted] = useState(false);
  const [isHiding, setIsHiding] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const lenis = useLenis();

  // Kunci scroll saat loading screen aktif
  useEffect(() => {
    if (!isHidden) {
      document.body.style.overflow = "hidden";
      lenis?.stop();
    } else {
      document.body.style.overflow = "";
      lenis?.start();
    }

    return () => {
      document.body.style.overflow = "";
      lenis?.start();
    };
  }, [isHidden, lenis]);

  useEffect(() => {
    // Memastikan animasi berjalan setelah komponen dirender di client
    const mountTimer = setTimeout(() => {
      setMounted(true);
    }, 50);

    // Mulai fade-out setelah 4 detik untuk memberi waktu browser mendownload aset
    const hideTimer = setTimeout(() => {
      setIsHiding(true);
    }, 4000);

    // Hapus komponen dari DOM setelah transisi fade-out selesai
    const unmountTimer = setTimeout(() => {
      setIsHidden(true);
    }, 4500);

    return () => {
      clearTimeout(mountTimer);
      clearTimeout(hideTimer);
      clearTimeout(unmountTimer);
    };
  }, []); // Hanya berjalan sekali saat mount (remount otomatis via key)

  if (isHidden) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100000] flex flex-col items-center justify-center bg-[#F9F1E4] transition-opacity duration-500 ease-in-out ${isHiding ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    >
      {/* Konten Tengah: Logo & Teks */}
      <div 
        className={`flex flex-col items-center justify-center transition-all duration-1000 ease-out transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
      >
        <div className="relative w-24 h-24 md:w-32 md:h-32 mb-4">
          <Image
            src="/Assets/LogoUtama.webp"
            alt="Saka Jawa Logo"
            fill
            priority
            className="object-contain drop-shadow-md"
          />
        </div>
        <h1 
          className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-widest text-[var(--color-maroon)] uppercase leading-tight"
          style={{ fontFamily: 'var(--font-league-spartan)' }}
        >
          Saka Jawa
        </h1>
      </div>

      {/* Animasi Batik di Bawah */}
      <div className="absolute bottom-0 w-full flex h-12 md:h-16 lg:h-20 overflow-hidden">
        {/* Batik Kiri (Muncul dari kiri ke tengah) */}
        <div className="w-1/2 h-full relative overflow-hidden">
          <Image 
            src="/Assets/Batik Sambungan Kuning.webp" 
            alt="Batik Kiri" 
            fill 
            priority
            className={`object-cover object-left transition-transform duration-[2500ms] delay-300 ease-out ${mounted ? 'translate-x-0' : '-translate-x-full'}`} 
          />
        </div>
        
        {/* Batik Kanan (Muncul dari kanan ke tengah) */}
        <div className="w-1/2 h-full relative overflow-hidden">
          <Image 
            src="/Assets/Batik Sambungan Kuning.webp" 
            alt="Batik Kanan" 
            fill 
            priority
            className={`object-cover object-right transition-transform duration-[2500ms] delay-300 ease-out ${mounted ? 'translate-x-0' : 'translate-x-full'}`} 
          />
        </div>
      </div>
    </div>
  );
}

// Wrapper: menggunakan key={pathname} agar LoadingScreenInner di-remount
// setiap kali pathname berubah, sehingga state ter-reset secara alami
// tanpa perlu memanggil setState secara sinkron di dalam useEffect.
export default function LoadingScreen() {
  const pathname = usePathname();

  // Hilangkan loading screen untuk halaman game (misal: /permainan/batik, /permainan/gamelan)
  // tetapi tetap pertahankan loading screen untuk halaman utama /permainan
  if (pathname?.startsWith("/permainan/")) {
    return null;
  }

  return <LoadingScreenInner key={pathname} />;
}
