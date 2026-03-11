export default function MainlandCTA() {
  return (
    <section className="relative py-0 overflow-hidden">
      {/* Full-width banner */}
      <div className="relative h-[400px] md:h-[420px]">
        <img
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2000&auto=format&fit=crop"
          alt="Dubai Skyline Panorama"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/90 via-[#0f172a]/75 to-[#0f172a]/50"></div>
        
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
                  <span className="text-xs font-bold tracking-widest uppercase text-white/50">Your Trusted Partner</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
                  Thrive Business Setup:{' '}
                  <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Your PRO Solutions</span>{' '}
                  Across the UAE
                </h2>
                <p className="text-white/65 text-base mb-8 max-w-lg leading-relaxed">
                  Streamlining your business operations across Dubai, Abu Dhabi, Sharjah, and all Emirates with expert PRO services. From company formation to ongoing compliance — we're your complete business partner.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-red-500/25 transition-all duration-300 hover:-translate-y-0.5">
                    Talk to Our Experts
                  </button>
                  <button className="border border-white/25 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                    Call +971 4 XXX XXXX
                  </button>
                </div>
              </div>

              {/* Right: Stats block */}
              <div className="hidden lg:block">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "7+", label: "Emirates Covered" },
                    { value: "50+", label: "Services Offered" },
                    { value: "24/7", label: "Client Support" },
                    { value: "3 Days", label: "Fast Track Setup" }
                  ].map((stat, i) => (
                    <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
                      <p className="text-3xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-1">{stat.value}</p>
                      <p className="text-white/50 text-xs">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
