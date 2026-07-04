"use client";

import React, { useState } from "react";
import DetailGaleri from "../shared/DetailGaleri";

export default function KulinerDaerahSection() {
  const [selectedDaerahId, setSelectedDaerahId] = useState<string | null>(null);

  const daerahList = [
    {
      id: "barat",
      title: "Jawa Barat",
      desc: "Jelajahi kekayaan kuliner Jawa Barat yang memanjakan selera.",
      bgImage: "/assets/Gambar kuliner/Jawa Barat/tahu kupat.avif",
    },
    {
      id: "tengah",
      title: "Jawa Tengah",
      desc: "Jelajahi kekayaan kuliner Jawa Tengah yang memanjakan selera.",
      bgImage: "/assets/Gambar kuliner/Jawa Tengah/magelangan.avif",
    },
    {
      id: "timur",
      title: "Jawa Timur",
      desc: "Jelajahi kekayaan kuliner Jawa Timur yang memanjakan selera.",
      bgImage: "/assets/Gambar kuliner/Jawa Timur/lontong balap.avif",
    },
  ];

  // Data galeri per daerah
  const galleryData: Record<string, { gallery: { id: string; src: string; title: string; description: string }[] }> = {
    barat: {
      gallery: [
        {
          id: "barat-1",
          title: "Empal Gentong",
          description: "Makanan khas Cirebon yang mirip dengan gulai dan dimasak secara tradisional menggunakan kayu bakar di dalam gentong. Berisi daging, usus, dan babat sapi dengan kuah santan kuning yang kaya rempah.",
          src: "/assets/Gambar kuliner/Jawa Barat/empal-gentong.avif",
        },
        {
          id: "barat-2",
          title: "Lotek",
          description: "Sajian khas Jawa Barat berupa rebusan sayuran segar seperti bayam, kapri, dan kacang panjang yang disiram dengan bumbu kacang legit nan gurih. Cocok dinikmati bersama kerupuk dan lontong.",
          src: "/assets/Gambar kuliner/Jawa Barat/lotek.avif",
        },
        {
          id: "barat-3",
          title: "Seblak",
          description: "Jajanan populer khas Sunda dengan cita rasa gurih dan pedas. Terbuat dari kerupuk basah yang dimasak dengan bumbu kencur aromatik, dipadukan dengan telur, sosis, bakso, dan mie.",
          src: "/assets/Gambar kuliner/Jawa Barat/seblak-creamy-mie-bakso.avif",
        },
        {
          id: "barat-4",
          title: "Tahu Gejrot",
          description: "Camilan khas Cirebon yang terdiri dari potongan tahu pong goreng yang disiram dengan kuah asam manis pedas berbumbu cabai, bawang merah, bawang putih, dan gula merah yang digejrot (ditumbuk).",
          src: "/assets/Gambar kuliner/Jawa Barat/tahu gejrot.avif",
        },
        {
          id: "barat-5",
          title: "Tahu Kupat",
          description: "Hidangan tradisional khas Sunda yang memadukan potongan ketupat dan tahu goreng, disiram dengan bumbu kacang kental yang manis dan gurih, dilengkapi dengan tauge dan kecap manis.",
          src: "/assets/Gambar kuliner/Jawa Barat/tahu kupat.avif",
        },
      ],
    },
    tengah: {
      gallery: [
        {
          id: "tengah-1",
          title: "Nasi Berkat",
          description: "Nasi bungkus daun singkong/jati khas Wonogiri yang biasanya disajikan dalam acara syukuran atau hajatan, berisi nasi dengan aneka lauk pauk sederhana seperti oseng tempe, mi, dan daging sapi.",
          src: "/assets/Gambar kuliner/Jawa Tengah/Nasi Berkat wonogiri.avif",
        },
        {
          id: "tengah-2",
          title: "Nasi Goreng Magelangan",
          description: "Sering juga disebut nasi ruwet, hidangan khas Magelang ini mencampurkan nasi goreng dengan mi basah yang dimasak bersama bumbu rempah gurih, sayuran, dan suwiran ayam.",
          src: "/assets/Gambar kuliner/Jawa Tengah/magelangan.avif",
        },
        {
          id: "tengah-3",
          title: "Nasi Liwet",
          description: "Nasi Liwet adalah hidangan ikonik khas Solo yang dimasak dengan santan, serai, dan daun salam. Disajikan dengan labu siam, areh (santan kental), ayam suwir, dan telur yang lezat.",
          src: "/assets/Gambar kuliner/Jawa Tengah/nasi liwet.avif",
        },
        {
          id: "tengah-4",
          title: "Selat Solo",
          description: "Adaptasi lokal dari bistik Eropa. Terdiri dari irisan daging sapi rebus, telur pindang, aneka sayuran segar, yang disiram dengan kuah semur encer manis gurih dan saus mustard Jawa.",
          src: "/assets/Gambar kuliner/Jawa Tengah/selat Solo.avif",
        },
        {
          id: "tengah-5",
          title: "Nasi Timlo",
          description: "Sup khas kota Solo berkuah bening gurih yang berisi irisan ati ampela ayam, dadar gulung, sosis solo, mi soun, telur pindang, dan suwiran ayam. Segar dan menghangatkan.",
          src: "/assets/Gambar kuliner/Jawa Tengah/timlo.avif",
        },
      ],
    },
    timur: {
      gallery: [
        {
          id: "timur-1",
          title: "Lontong Balap",
          description: "Makanan ikonik Surabaya yang memadukan lontong, tauge melimpah, tahu goreng, dan lentho. Disiram kuah gurih beraroma petis yang khas dan ditaburi bawang goreng renyah.",
          src: "/assets/Gambar kuliner/Jawa Timur/lontong balap.avif",
        },
        {
          id: "timur-2",
          title: "Pecel",
          description: "Sayuran rebus yang disiram dengan sambal kacang pecel khas Madiun yang legit dan pedas. Biasanya disajikan dalam pincuk daun pisang dan dinikmati bersama rempeyek atau kerupuk karak.",
          src: "/assets/Gambar kuliner/Jawa Timur/pecel madiun.avif",
        },
        {
          id: "timur-3",
          title: "Rawon",
          description: "Sup daging sapi berkuah hitam pekat khas Jawa Timur yang warnanya berasal dari kluwek. Memiliki cita rasa gurih yang dalam, disajikan dengan tauge pendek, telur asin, dan sambal.",
          src: "/assets/Gambar kuliner/Jawa Timur/rawon.avif",
        },
        {
          id: "timur-4",
          title: "Sate Ayam",
          description: "Sate ayam khas Madura, terkenal dengan bumbu kacangnya yang kental, manis, dan gurih, meresap sempurna ke dalam potongan daging ayam yang dibakar dengan arang batok kelapa.",
          src: "/assets/Gambar kuliner/Jawa Timur/sate ayam.avif",
        },
        {
          id: "timur-5",
          title: "Soto Lamongan",
          description: "Soto ayam berkuah kuning gurih yang khas, dilengkapi suwiran ayam, soun, kol, dan telur. Ciri utamanya adalah taburan bubuk koya yang membuat kuahnya semakin kental dan istimewa.",
          src: "/assets/Gambar kuliner/Jawa Timur/soto-lamongan.avif",
        },
      ],
    },
  };

  return (
    <>
      <section className="py-14 px-4 sm:px-6 md:px-12 lg:px-24 lg:py-20 bg-[#F9F1E4]" id="koleksi">
        <div className="mx-auto w-full max-w-[var(--container-lg)] flex flex-col items-center">

          {/* Header */}
          <div className="text-center mb-16 max-w-2xl">
            <h2 className="font-['League_Spartan'] text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#4e0b11] mb-4">
              Jelajahi Berdasarkan Daerah Bagian
            </h2>
            <p className="font-['League_Spartan'] text-sm sm:text-base md:text-lg text-stone-900 font-medium">
              Temukan hidangan khas Jawa berdasarkan daerah asalnya
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-5xl">
            {daerahList.map((item) => (
              <div
                key={item.id}
                className="rounded-xl border border-[#4e0b11] overflow-hidden shadow-sm relative min-h-[220px] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl block text-left w-full group"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 z-0 bg-cover bg-right transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${item.bgImage}')` }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#4e0b11] from-45% to-transparent" />

                <div className="p-6 h-full flex flex-col justify-between w-[70%] z-10 relative">
                  <div>
                    <h3 className="font-['League_Spartan'] text-xl font-bold text-[#FFC832] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-300 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-6">
                    <button
                      onClick={() => setSelectedDaerahId(item.id)}
                      className="inline-flex items-center gap-2 text-white text-xs font-bold border border-white rounded-full px-4 py-1.5 hover:bg-[#FFC832] hover:text-[#4e0b11] hover:border-transparent transition-all duration-300"
                    >
                      Lihat Detail
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Galeri Modal Overlay */}
      {selectedDaerahId && (
        <DetailGaleri 
          initialImageId={`${selectedDaerahId}-1`} 
          images={galleryData[selectedDaerahId]?.gallery || []} 
          onClose={() => setSelectedDaerahId(null)} 
        />
      )}
    </>
  );
}
