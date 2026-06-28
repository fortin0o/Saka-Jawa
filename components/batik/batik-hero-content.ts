export interface BatikHeroAction {
  id: string;
  label: string;
  variant: "primary" | "secondary";
}

export interface BatikHeroContent {
  badge: {
    iconSrc: string;
    iconAlt: string;
    label: string;
  };
  headline: string;
  subheadline: string;
  description: string;
  actions: BatikHeroAction[];
  image: {
    src: string;
    alt: string;
  };
  dots: {
    count: number;
    activeIndex: number;
  };
}

export const batikHeroContent: BatikHeroContent = {
  badge: {
    iconSrc: "/Assets/Pendhopo Batik.svg",
    iconAlt: "Ikon Pendhapa",
    label: "Pendhapa Batik",
  },
  headline: "Seni Lukisan Kain",
  subheadline: "Karakter, Cerita, dan Bayangan Kehidupan",
  description:
    "Di balik setiap guratan tokoh wayang, tersimpan filosofi mendalam dan nilai kehidupan masyarakat Jawa.",
  actions: [
    { id: "btn-tentang-batik", label: "Tentang Batik", variant: "primary" },
    { id: "btn-jelajahi-motif", label: "Jelajahi Motif", variant: "secondary" },
  ],
  image: {
    src: "/Assets/Batik Section Sejarawan.svg",
    alt: "Ilustrasi Seni Lukisan Kain Batik Jawa",
  },
  dots: {
    count: 5,
    activeIndex: 1,
  },
};
