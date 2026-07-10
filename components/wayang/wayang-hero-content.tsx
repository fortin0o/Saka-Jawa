import { HeroContent } from "../shared/HeroSection";

export const wayangHeroContent: HeroContent = {
  badge: {
    iconSrc: "/Assets/PendhopoWayang.webp",
    iconAlt: "Ikon Pendhapa Wayang",
    label: "Pendhapa Wayang",
  },
  headline: "Seni Wayang Kulit",
  subheadline: "Karakter, Cerita, dan Bayangan Kehidupan",
  description:
    "Di balik setiap guratan tokoh wayang, tersimpan filosofi mendalam dan nilai kehidupan masyarakat Jawa.",
  actions: [
    { id: "btn-tentang-wayang", label: "Tentang Wayang", variant: "primary", href: "#tentang" },
    { id: "btn-jelajahi-tokoh", label: "Jelajahi Tokoh", variant: "secondary", href: "#ragam" },
  ],
  image: {
    src: "/Assets/Gambar-Wayang/heroWayang.webp",
    alt: "Seni Wayang Kulit Jawa",
  },
  images: [
    { src: "/Assets/Gambar-Wayang/heroWayang.webp", alt: "Ilustrasi Seni Wayang Kulit Jawa" },
    { src: "/Assets/Gambar-Wayang/wayang.webp", alt: "Wayang 1" },
    { src: "/Assets/Gambar-Wayang/wayang1.webp", alt: "Wayang 2" },
    { src: "/Assets/Gambar-Wayang/wayang2.webp", alt: "Wayang 3" },
  ],
  dots: {
    count: 4,
    activeIndex: 1,
  },
};
