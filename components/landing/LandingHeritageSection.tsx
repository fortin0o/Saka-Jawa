import Image from "next/image";

export default function LandingHeritageSection() {
  const images = [
    {
      src: "/Assets/kulinerHeroAsset.webp",
      alt: "Kuliner Tradisional",
      className: "w-[240px] md:w-[280px] h-[340px] md:h-[420px]",
    },
    {
      src: "/Assets/gamelanHeroAsset.webp",
      alt: "Gamelan",
      className: "w-[240px] md:w-[280px] h-[280px] md:h-[360px]",
    },
    {
      src: "/Assets/wayangHeroAsset.webp",
      alt: "Wayang",
      className: "w-[240px] md:w-[280px] h-[240px] md:h-[280px]",
    },
    {
      src: "/Assets/batikHeroAsset.webp",
      alt: "Batik",
      className: "w-[240px] md:w-[280px] h-[300px] md:h-[400px]",
    },
  ];

  return (
    <section className="bg-white pt-20 pb-10 w-full overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black max-w-lg leading-tight tracking-tight">
            Bukan Hanya<br />Peninggalan Masa Lalu
          </h2>
          <div className="max-w-[320px] flex gap-4 text-gray-800">
            <span className="text-5xl text-gray-400 font-serif leading-none mt-[-20px]">“</span>
            <p className="text-[15px] font-medium leading-relaxed">
              Budaya Jawa bukan hanya sejarah, tetapi identitas yang masih hidup hingga hari ini.
            </p>
            <span className="text-5xl text-gray-400 font-serif leading-none mt-[58px] mr-6">”</span>
          </div>
        </div>
      </div>

      <div className="w-full relative group">
        <div className="flex w-max animate-[scroll_25s_linear_infinite] group-hover:[animation-play-state:paused] items-start">
          {/* First set */}
          <div className="flex gap-4 md:gap-6 pr-4 md:pr-6 items-start ml-6 md:ml-12 lg:ml-24">
            {images.map((img, idx) => (
              <div key={`set1-${idx}`} className={`${img.className} rounded-2xl md:rounded-3xl overflow-hidden relative shadow-lg shrink-0`}>
                <Image src={img.src} fill className="object-cover" alt={img.alt} unoptimized />
              </div>
            ))}
          </div>
          {/* Second set for seamless loop */}
          <div className="flex gap-4 md:gap-6 pr-4 md:pr-6 items-start">
            {images.map((img, idx) => (
              <div key={`set2-${idx}`} className={`${img.className} rounded-2xl md:rounded-3xl overflow-hidden relative shadow-lg shrink-0`}>
                <Image src={img.src} fill className="object-cover" alt={img.alt} unoptimized />
              </div>
            ))}
          </div>
        </div>
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}} />
      </div>
    </section>
  );
}
