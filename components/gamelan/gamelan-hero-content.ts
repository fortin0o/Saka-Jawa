import { HeroContent } from "../shared/HeroSection";

export const gamelanHeroContent: HeroContent = {
  badge: {
    iconSrc: "/Assets/Pendhopo Gamelan.svg",
    iconAlt: "Ikon Pendhapa Gamelan",
    label: "Pendhapa Gamelan",
  },
  headline: "Gamelan Jawa",
  subheadline: "Harmoni, Doa, dan Jiwa Nusantara",
  description:
    "Di balik setiap dentingan instrumen gamelan, tersimpan filosofi kebersamaan, keselarasan alam semesta, dan doa yang mengalun bagi sang pencipta.",
  actions: [
    { id: "btn-tentang-gamelan", label: "Tentang Gamelan", variant: "primary", href: "#tentang" },
    { id: "btn-jelajahi-instrumen", label: "Jelajahi Instrumen", variant: "secondary", href: "#instrumen" },
  ],
  images: [
    { src: "/Assets/Gambar Gamelan/Gamelan 1.jpg", alt: "Gamelan Jawa 1" },
    { src: "/Assets/Gambar Gamelan/Gamelan 2.jpg", alt: "Gamelan Jawa 2" },
    { src: "/Assets/Gambar Gamelan/Gamelan 3.jpg", alt: "Gamelan Jawa 3" },
    { src: "/Assets/Gambar Gamelan/Gamelan 4.jpg", alt: "Gamelan Jawa 4" },
  ],
  dots: {
    count: 4,
    activeIndex: 0,
  },
  imagePosition: "right",
};
