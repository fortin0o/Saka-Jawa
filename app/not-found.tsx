import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div id="not-found-page" className="min-h-screen bg-cream flex flex-col items-center justify-center p-6 sm:p-12 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold rounded-full mix-blend-multiply filter blur-[80px] opacity-30 animate-float"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-maroon rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-float-reverse"></div>

      {/* Illustration */}
      <div className="w-20 sm:w-28 mb-6 relative z-10 animate-fade-in-up">
        <Image 
          src="/Assets/SambutTamuAbout.svg" 
          alt="Sambut Tamu 404" 
          width={200} 
          height={200} 
          className="w-full h-auto object-contain drop-shadow-xl"
          priority
        />
      </div>

      {/* Text Content */}
      <div className="text-center relative z-10 flex flex-col items-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <h1 className="text-7xl md:text-9xl font-bold text-maroon mb-2 drop-shadow-sm">
          404
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-4">
          Waduh, Kesasar Ya?
        </h2>
        <p className="text-base md:text-lg text-gray-600 max-w-lg mb-10 leading-relaxed">
          Sepertinya halaman yang kamu cari sedang merantau atau memang tidak pernah ada. Mari kita kembali ke jalan yang benar.
        </p>
        
        {/* Call to Action */}
        <Link 
          href="/"
          className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-maroon rounded-full hover:bg-maroon-light focus:outline-none focus:ring-4 focus:ring-maroon/30 shadow-[0_8px_30px_rgb(78,11,17,0.2)] hover:shadow-[0_8px_30px_rgb(78,11,17,0.4)] hover:-translate-y-1"
        >
          <span className="mr-2">Kembali ke Beranda</span>
          <svg 
            className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1 rotate-180" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
