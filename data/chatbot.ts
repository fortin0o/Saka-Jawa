  export interface ChatTopic {
    id: string;
    label: string;
    question: string;
    answer: string;
  }

  export interface ChatCategory {
    category: string;
    topics: ChatTopic[];
  }

  export const SURO_GREETING =
    "Sugeng rawuh! Aku Suro, pemandu budayamu di SakaJawa. Mau tanya apa hari ini? Pilih salah satu topik di bawah, atau ketik pertanyaanmu ya!";

  export const SURO_FALLBACK =
    "Waduh, pertanyaanmu di luar kemampuanku... Aku cuma paham soal budaya Jawa seperti Batik, Wayang, Gamelan, dan Kuliner. Coba pilih topik dari daftar di bawah ya!";

  export const chatbotData: ChatCategory[] = [
    {
      category: "Batik",
      topics: [
        {
          id: "batik-1",
          label: "Apa itu Batik Jawa?",
          question: "Apa itu Batik Jawa?",
          answer:
            "Batik adalah seni menghias kain dengan teknik perintang warna menggunakan malam (lilin). Batik Jawa dikenal akan motif-motifnya yang sarat makna filosofis, mulai dari Parang yang melambangkan kekuatan, hingga Kawung yang melambangkan kesucian. UNESCO telah mengakui batik Indonesia sebagai Warisan Budaya Tak Benda sejak tahun 2009! 🎨",
        },
        {
          id: "batik-2",
          label: "Apa makna motif Parang?",
          question: "Apa makna motif Parang?",
          answer:
            "Motif Parang berasal dari kata \"pereng\" yang berarti lereng. Motif ini menggambarkan ombak laut yang tak pernah berhenti, melambangkan semangat pantang menyerah dan kekuatan yang tak terputus. Dahulu, Batik Parang hanya boleh dikenakan oleh keluarga kerajaan Jawa sebagai simbol kewibawaan dan keagungan. ⚔️",
        },
        {
          id: "batik-3",
          label: "Beda Batik Solo dan Yogya?",
          question: "Apa perbedaan Batik Solo dan Yogya?",
          answer:
            "Batik Solo cenderung berwarna hangat — cokelat soga, kuning emas, dan krem — mencerminkan keanggunan dan kelembutan. Sementara Batik Yogya didominasi warna putih dan cokelat tua (sogan) dengan kontras yang lebih tegas, mencerminkan kesederhanaan dan ketegasan. Meski berbeda nuansa, keduanya sama-sama kaya akan filosofi Jawa! 🏛️",
        },
      ],
    },
    {
      category: "Wayang",
      topics: [
        {
          id: "wayang-1",
          label: "Apa itu Wayang Kulit?",
          question: "Apa itu Wayang Kulit?",
          answer:
            "Wayang Kulit adalah seni pertunjukan bayangan yang menggunakan boneka dari kulit kerbau yang diukir halus. Dalang memainkan wayang di balik kelir (layar putih) dengan diiringi gamelan. Pertunjukan ini bukan sekadar hiburan, tapi juga media pendidikan moral, filsafat hidup, dan nilai-nilai luhur Jawa. UNESCO mengakuinya sebagai Masterpiece of Oral and Intangible Heritage of Humanity! 🌟",
        },
        {
          id: "wayang-2",
          label: "Siapa tokoh favorit wayang?",
          question: "Siapa tokoh-tokoh terkenal dalam wayang?",
          answer:
            "Ada banyak tokoh legendaris! Arjuna dikenal sebagai ksatria tampan nan sakti. Bima si perkasa yang jujur dan teguh pendirian. Gatotkaca yang bisa terbang dan berbadan baja. Lalu ada Semar — punakawan bijaksana yang sebenarnya adalah dewa yang menjelma menjadi rakyat biasa. Setiap tokoh mengajarkan nilai kehidupan yang berbeda! 🏹",
        },
        {
          id: "wayang-3",
          label: "Apa peran Dalang?",
          question: "Apa peran seorang Dalang?",
          answer:
            "Dalang adalah \"sutradara\" sekaligus aktor utama dalam wayang. Seorang dalang harus menguasai semua aspek: memainkan puluhan wayang, mengubah suara untuk setiap karakter, memimpin musik gamelan, dan menguasai cerita Ramayana & Mahabharata. Pertunjukan bisa berlangsung semalam suntuk (8+ jam)! Dalang juga berperan sebagai guru kehidupan bagi penonton. 🎙️",
        },
      ],
    },
    {
      category: "Gamelan",
      topics: [
        {
          id: "gamelan-1",
          label: "Apa itu Gamelan?",
          question: "Apa itu Gamelan?",
          answer:
            "Gamelan adalah ansambel musik tradisional Jawa yang terdiri dari berbagai instrumen perkusi logam seperti saron, bonang, gong, kenong, dan gender. Kata \"gamelan\" berasal dari bahasa Jawa \"gamel\" yang berarti memukul. Gamelan bukan sekadar musik — ia adalah simbol keharmonisan dan keseimbangan dalam budaya Jawa. Setiap instrumen punya peran unik, seperti masyarakat yang saling melengkapi! 🎶",
        },
        {
          id: "gamelan-2",
          label: "Bedanya Slendro dan Pelog?",
          question: "Apa perbedaan laras Slendro dan Pelog?",
          answer:
            "Gamelan Jawa punya dua sistem nada (laras). Slendro memiliki 5 nada dengan interval yang hampir sama rata — nadanya terdengar ceria dan sering digunakan untuk cerita kepahlawanan. Pelog memiliki 7 nada dengan interval tidak sama rata — nadanya lebih lembut dan sering digunakan untuk adegan romantis atau sedih. Kedua laras ini mencerminkan dualisme kehidupan! ☯️",
        },
        {
          id: "gamelan-3",
          label: "Di mana bisa belajar Gamelan?",
          question: "Di mana bisa belajar Gamelan?",
          answer:
            "Kamu bisa belajar Gamelan di sanggar-sanggar seni di Yogyakarta dan Solo, seperti di Kraton Yogyakarta atau Mangkunegaran Solo yang sering mengadakan latihan terbuka. Beberapa universitas juga punya program gamelan. Bahkan, gamelan sudah mendunia — banyak universitas di Amerika, Eropa, dan Jepang yang memiliki set gamelan untuk dipelajari! 🌍",
        },
      ],
    },
    {
      category: "Kuliner",
      topics: [
        {
          id: "kuliner-1",
          label: "Kuliner khas Jawa apa saja?",
          question: "Apa saja kuliner khas Jawa yang terkenal?",
          answer:
            "Jawa punya segudang kuliner legendaris! Gudeg dari Yogya (nangka muda dengan santan), Rawon dari Jawa Timur (sup daging dengan kluwek hitam), Nasi Liwet dari Solo (nasi gurih dengan lauk ayam suwir), Soto Lamongan, Tahu Campur Lamongan, dan tentu saja Lumpia Semarang! Setiap daerah di Jawa punya cita rasa khasnya sendiri. 😋",
        },
        {
          id: "kuliner-2",
          label: "Apa filosofi makan orang Jawa?",
          question: "Apa filosofi makan dalam budaya Jawa?",
          answer:
            "Dalam budaya Jawa, makan bukan sekadar mengisi perut. Ada filosofi \"mangan ora mangan sing penting kumpul\" — makan atau tidak yang penting berkumpul. Ini menunjukkan betapa pentingnya kebersamaan. Penyajian makanan Jawa juga penuh tata krama: makan dengan tangan kanan, tidak boleh berdiri, dan selalu berbagi dengan tetangga melalui tradisi \"berkat\" atau \"bancaan\". 🙏",
        },
        {
          id: "kuliner-3",
          label: "Apa itu Gudeg?",
          question: "Apa itu Gudeg dan dari mana asalnya?",
          answer:
            "Gudeg adalah masakan khas Yogyakarta yang terbuat dari nangka muda (gori) yang dimasak lama dengan santan dan gula Jawa hingga berwarna cokelat kemerahan. Proses memasaknya bisa memakan waktu 8-10 jam! Gudeg biasanya disajikan dengan nasi, ayam kampung, telur, tahu, tempe, dan sambal krecek. Yogya bahkan dijuluki \"Kota Gudeg\" karena hidangan ini begitu ikonik! 🫕",
        },
      ],
    },
    {
      category: "Saka Jawa",
      topics: [
        {
          id: "saka-1",
          label: "Apa itu Saka Jawa?",
          question: "Apa itu Saka Jawa?",
          answer:
            "Saka Jawa adalah platform digital pelestarian budaya Jawa yang dibuat untuk generasi muda. Kata \"Saka\" berarti tiang penyangga — seperti tiang yang menopang pendapa Jawa. Kami percaya bahwa budaya Jawa harus terus dijaga dan dilestarikan agar tak lekang oleh waktu. Di sini kamu bisa menjelajahi Batik, Wayang, Gamelan, dan Kuliner Jawa! 🇮🇩",
        },
        {
          id: "saka-2",
          label: "Siapa yang membuat website ini?",
          question: "Siapa yang membuat website ini?",
          answer:
            "Website Saka Jawa dibuat oleh Tim Golek Howo yang terdiri dari 3 anak muda yaitu Hilmi Azzam, Byatara Ade, dan Donald Terrifortino. Nama \"Golek Howo\" berasal dari bahasa Jawa yang berarti \"mencari suasana\". Kami ingin mengajak generasi muda untuk mengenal dan mencintai kekayaan budaya Jawa melalui media digital yang menarik dan interaktif! 💛",
        },
      ],
    },
  ];

  // Flatten all topics for search matching
  export const allTopics: ChatTopic[] = chatbotData.flatMap((c) => c.topics);

  /**
   * Simple keyword matching to find the best answer for a free-text query.
   * Returns the matching topic or null if no match found.
   */
  export function findAnswer(query: string): ChatTopic | null {
    const q = query.toLowerCase().trim();

    // Exact match by question label
    const exact = allTopics.find(
      (t) => t.label.toLowerCase() === q || t.question.toLowerCase() === q
    );
    if (exact) return exact;

    // Keyword matching — score each topic
    const keywords: Record<string, string[]> = {
      "batik-1": ["batik", "apa itu batik", "batik jawa"],
      "batik-2": ["parang", "motif parang", "makna parang"],
      "batik-3": ["solo", "yogya", "beda batik", "perbedaan batik", "solo yogya"],
      "wayang-1": ["wayang", "wayang kulit", "apa itu wayang"],
      "wayang-2": ["tokoh", "arjuna", "bima", "gatotkaca", "semar", "favorit"],
      "wayang-3": ["dalang", "peran dalang"],
      "gamelan-1": ["gamelan", "apa itu gamelan"],
      "gamelan-2": ["slendro", "pelog", "laras", "nada"],
      "gamelan-3": ["belajar gamelan", "sanggar", "kursus"],
      "kuliner-1": ["kuliner", "makanan", "masakan jawa", "makanan jawa", "khas jawa"],
      "kuliner-2": ["filosofi makan", "mangan", "tata krama"],
      "kuliner-3": ["gudeg", "nangka", "yogyakarta"],
      "saka-1": ["saka jawa", "apa itu saka", "platform"],
      "saka-2": ["siapa", "pembuat", "golek howo", "tim","pencipta"],
    };

    let bestMatch: ChatTopic | null = null;
    let bestScore = 0;

    for (const topic of allTopics) {
      const topicKeywords = keywords[topic.id] || [];
      let score = 0;

      for (const kw of topicKeywords) {
        if (q.includes(kw)) {
          score += kw.split(" ").length; // Multi-word matches score higher
        }
      }

      if (score > bestScore) {
        bestScore = score;
        bestMatch = topic;
      }
    }

    return bestScore > 0 ? bestMatch : null;
  }
