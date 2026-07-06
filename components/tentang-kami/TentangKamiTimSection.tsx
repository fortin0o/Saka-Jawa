import Image from "next/image";

const teamMembers = [
  {
    name: "Donald Terrifortino",
    role: "Frontend Designer",
    image: "/Assets/Profil Tim/RPL Donald.jpeg",
    bgColor: "#4E0B11",
  },
  {
    name: "Byatara Ade Wisnubrata",
    role: "Frontend Designer",
    image: "/Assets/Profil Tim/RPL Byan.jpeg",
    bgColor: "#5B0917",
  },
  {
    name: "Mohamad Hilmi Azzam",
    role: "Frontend Designer",
    image: "/Assets/Profil Tim/Hilmi.jpeg",
    bgColor: "#6B1520",
  },
];

export default function TentangKamiTimSection() {
  return (
    <section
      id="tim-golek-howo"
      className="px-6 py-24 md:px-12 lg:px-24 bg-white"
    >
      <div className="mx-auto w-full max-w-[var(--container-lg)]">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#5B0917] text-sm font-bold tracking-[0.18em] uppercase mb-3">
            Orang-Orangnya
          </p>
          <h2 className="text-3xl md:text-[40px] font-bold text-[#4E0B11] mb-3">
            Tim Golek Howo
          </h2>
          <p className="text-[#4A332B] text-base leading-relaxed max-w-xl mx-auto">
            Tiga orang dengan satu visi — mendekatkan generasi muda pada
            warisan budaya Jawa melalui teknologi.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group flex flex-col items-center text-center gap-4"
            >
              {/* Avatar */}
              <div
                className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300"
                style={{ backgroundColor: member.bgColor }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Info */}
              <div>
                <p className="font-bold text-[#1A1A1A] text-[15px] md:text-base leading-tight mb-1">
                  {member.name}
                </p>
                <p className="text-[#6B6B6B] text-[13px] leading-relaxed">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
