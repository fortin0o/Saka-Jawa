import Image from "next/image";
import Link from "next/link";

export default function LandingChatbotSection() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
        {/* Left Side: Mascot Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-full max-w-[450px] aspect-square">
            <Image
              src="/Assets/maskotChatbot.svg"
              alt="Saka Mascot"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Right Side: Text Card */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <div className="bg-white border-2 border-[#601c23] rounded-3xl p-8 md:p-10 lg:p-12 shadow-sm flex flex-col gap-6 max-w-[550px]">
            <h2 className="text-4xl md:text-5xl font-bold text-black tracking-wide">
              Sugeng Rawuh!
            </h2>
            <p className="text-gray-800 text-lg md:text-xl leading-relaxed">
              Kenalkan, aku Saka pemandumu! Tugas-ku adalah menjaga gerbang ilmu SakaJawa agar tidak lekang oleh waktu. Penasaran dengan makna di balik budaya Jawa?
            </p>
            <div className="flex justify-end mt-4 md:mt-8">
              <Link
                href="/chatbot"
                className="text-[#f1b434] font-semibold text-lg md:text-xl flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                Tanya Sekarang <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
