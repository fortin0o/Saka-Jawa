import { HeroContent } from "../shared/HeroSection";

export const kulinerHeroContent: HeroContent = {
  badge: {
    iconSrc: "/Assets/Pendhopo Kuliner.svg",
    iconAlt: "Ikon Pendhapa Kuliner",
    label: "Pendhapa Kuliner",
  },
  headline: "Kuliner Makanan Jawa",
  subheadline: "Cita Rasa, Aroma dan Keterikatan",
  description:
    "Di balik setiap sajian kuliner Jawa, tersimpan filosofi mendalam, sejarah rempah, dan nilai kebersamaan masyarakat Nusantara.",
  actions: [
    { id: "btn-tentang-kuliner", label: "Tentang Kuliner", variant: "primary", href: "#tentang" },
    { id: "btn-jelajahi-koleksi", label: "Jelajahi Koleksi", variant: "secondary", href: "#koleksi" },
  ],
  images: [
    {
      src: "/Assets/Gambar-Kuliner/Jawa Timur/lontong-balap.avif",
      alt: "Lontong Balap",
    },
    {
      src: "/Assets/Gambar-Kuliner/Jawa Tengah/magelangan.avif",
      alt: "Nasi Goreng Magelangan",
    },
    {
      src: "/Assets/Gambar-Kuliner/Jawa Barat/tahu-kupat.avif",
      alt: "Tahu Kupat",
    },
    {
      src: "/Assets/Gambar-Kuliner/Jawa Barat/seblak-creamy-mie-bakso.avif",
      alt: "Seblak",
    },
  ],
  dots: {
    count: 4,
    activeIndex: 0,
  },
  imagePosition: "right",
};
