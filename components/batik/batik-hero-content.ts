import { HeroContent } from "../shared/HeroSection";

export const batikHeroContent: HeroContent = {
  badge: {
    iconSrc: "/Assets/PendhopoBatik.svg",
    iconAlt: "Ikon Pendhapa",
    label: "Pendhapa Batik",
  },
  headline: "Seni Lukisan Kain",
  subheadline: "Karakter, Cerita, dan Bayangan Kehidupan",
  description:
    "Di balik setiap guratan tokoh wayang, tersimpan filosofi mendalam dan nilai kehidupan masyarakat Jawa.",
  actions: [
    { id: "btn-tentang-batik", label: "Tentang Batik", variant: "primary", href: "#batik-about" },
    { id: "btn-jelajahi-motif", label: "Jelajahi Motif", variant: "secondary", href: "#batik-motif" },
  ],
  images: [
    { src: "/Assets/BatikSectionSejarawan.svg", alt: "Ilustrasi Seni Lukisan Kain Batik Jawa" },
    { src: "/Assets/Gambar-Batik/Batik-Solo/Solo1.webp", alt: "Batik Solo 1" },
    { src: "/Assets/Gambar-Batik/Batik-Jogja/Jogja1.webp", alt: "Batik Jogja 1" },
    { src: "/Assets/Gambar-Batik/Batik-Pekalongan/Pekalongan1.webp", alt: "Batik Pekalongan 1" },
  ],
};
