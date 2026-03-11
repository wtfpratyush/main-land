export default function MainlandCTA() {
  return (
    <section className="relative py-0 overflow-hidden">
      {/* Full-width image banner */}
      <div className="relative h-[400px] md:h-[450px]">
        <img
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2000&auto=format&fit=crop"
          alt="Dubai Skyline Panorama"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/90 via-[#0f172a]/70 to-[#0f172a]/40"></div>
        
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
                <span className="text-xs font-bold tracking-widest uppercase text-white/50">Get Started Today</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
                Start Your Business in{' '}
                <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Dubai Mainland</span>{' '}
                with Thrive
              </h2>
              <p className="text-white/70 text-lg mb-8 max-w-lg">
                Fast & affordable UAE business setup. Get your trade license in as little as 3 working days with our expert team.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-red-500/25 transition-all duration-300 hover:-translate-y-0.5">
                  Book Free Consultation
                </button>
                <button className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                  Call +971 4 XXX XXXX
                </button>
              </div>

              {/* Trust badges */}
              <div className="flex items-center gap-6 mt-8">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(n => (
                    <div key={n} className="w-9 h-9 rounded-full bg-gradient-to-br from-red-400 to-orange-400 border-2 border-white/20 flex items-center justify-center text-white text-xs font-bold">
                      {['A','S','M','K'][n-1]}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map(n => (
                      <svg key={n} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-white/50 text-xs mt-0.5">Rated 4.9/5 by 500+ clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
