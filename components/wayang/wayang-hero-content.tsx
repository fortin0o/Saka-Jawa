import React from "react";
import Image from "next/image";
import { HeroContent } from "../shared/HeroSection";

export const wayangHeroContent: HeroContent = {
  badge: {
    iconSrc: "/Assets/Pendhopo Wayang.svg",
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
    src: "/Assets/wayangHeroAsset.avif",
    alt: "Seni Wayang Kulit Jawa",
  },
  dots: {
    count: 4,
    activeIndex: 1,
  },

  customImageRender: () => (
    <div className="relative w-full max-w-[620px] overflow-hidden rounded-r-[180px] rounded-l-[20px] border border-stone-200/50 bg-stone-50 p-2 shadow-[0_20px_50px_rgba(78,11,17,0.12)]">
      <div className="relative aspect-[16/10] w-full min-h-[300px] sm:min-h-[380px] overflow-hidden rounded-r-[170px] rounded-l-[15px]">
        <img
          src="/Assets/wayangHeroAsset.avif"
          alt="Seni Wayang Kulit Jawa"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  ),
};
