import Image from "next/image";

export default function TentangKamiCeritaSection() {
  return (
    <section
      id="cerita-kami"
      className="relative overflow-hidden px-6 py-24 md:px-12 lg:px-24 lg:py-32"
      style={{ background: "var(--color-cream)" }}
    >
      <div className="mx-auto w-full max-w-[var(--container-lg)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Left: Text */}
          <div className="flex flex-col">
            <p className="text-[#5B0917] text-sm font-bold tracking-[0.18em] uppercase mb-3">
              Cerita Kami
            </p>
            <h2 className="text-3xl md:text-[40px] font-bold text-[#4E0B11] leading-[1.15] mb-6">
              Mengapa Saka Jawa Lahir?
            </h2>
            <div className="space-y-4 text-[#4A332B] text-base md:text-[17px] leading-relaxed">
              <p>
                Saka Jawa lahir dari satu kegelisahan sederhana: warisan budaya
                Jawa yang kaya dan adiluhung terasa semakin jauh dari jangkauan
                generasi muda. Batik, wayang, gamelan, dan kuliner tradisional
                bukan sekadar tradisi — ia adalah sistem nilai, filosofi hidup,
                dan identitas yang dibangun selama berabad-abad.
              </p>
              <p>
                Kami, Tim Golek Howo, percaya bahwa pelestarian budaya tidak
                harus kaku dan membosankan. Dengan pendekatan digital yang
                interaktif dan visual yang menarik, kami menghadirkan
                pengalaman mengenal budaya Jawa yang terasa segar, relevan,
                dan menyenangkan.
              </p>
              <p>
                Nama &ldquo;Saka Jawa&rdquo; sendiri bermakna <em>&ldquo;pilar Jawa&rdquo;</em> &mdash;
                sebuah harapan bahwa platform ini menjadi tonggak penopang
                bagi keberlangsungan budaya Jawa di era modern.
              </p>
              <p>
                Kami tidak membangun museum digital. Kami membangun
                <strong> jembatan</strong> — antara masa lalu yang kaya makna
                dan generasi muda yang penuh potensi.
              </p>
            </div>
          </div>

          {/* Right: Mockup */}
          <div className="relative flex items-center justify-center">
            {/* Accent frame */}
            <div className="absolute -top-10 -left-2 w-20 h-20 border-t-[8px] border-l-[8px] border-[#FFC832] rounded-tl-2xl" />
            <div className="absolute -bottom-10 -right-2 w-20 h-20 border-b-[8px] border-r-[8px] border-[#FFC832] rounded-br-2xl" />

            <div className="relative w-full max-w-[400px] aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/Assets/Mockup.png"
                alt="Mockup Saka Jawa"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
