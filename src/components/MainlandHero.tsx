export default function MainlandHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 px-6">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2000&auto=format&fit=crop" 
          alt="Dubai Skyline" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Content */}
        <div className="text-white">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-5 py-2.5 rounded-full text-sm font-medium mb-8 border border-white/10">
            <div className="w-2 h-2 bg-gradient-to-r from-red-400 to-orange-400 rounded-full animate-pulse"></div>
            PRO Services in Dubai
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] mb-6">
            PRO Services in{' '}
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Dubai</span>
          </h1>
          <p className="text-base md:text-lg text-white/75 max-w-xl mb-6 leading-relaxed">
            Providing a broad spectrum of business services ranging from government relations, document processing to company formation and legal assistance. Thrive's strategic PRO solutions help businesses to operate effectively in the UAE's dynamic economy.
          </p>
          <p className="text-sm text-white/55 max-w-lg mb-8 leading-relaxed">
            We facilitate key interactions with governmental and regulatory bodies, ensuring seamless processing of all necessary documentation, licenses, and permits. Our experienced PRO team understands the UAE's regulatory landscape.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-red-500/25 transition-all duration-300 hover:-translate-y-0.5">
              Connect Now for PRO Services in Dubai
            </button>
          </div>

          {/* Trust strip */}
          <div className="flex items-center gap-6 pt-6 border-t border-white/10">
            <div className="text-center">
              <p className="text-2xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">15+</p>
              <p className="text-xs text-white/50">Years Experience</p>
            </div>
            <div className="w-px h-10 bg-white/15"></div>
            <div className="text-center">
              <p className="text-2xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">5000+</p>
              <p className="text-xs text-white/50">Companies Setup</p>
            </div>
            <div className="w-px h-10 bg-white/15"></div>
            <div className="text-center">
              <p className="text-2xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">100%</p>
              <p className="text-xs text-white/50">Client Satisfaction</p>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="max-w-md ml-auto w-full">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            {/* Form header */}
            <div className="bg-gradient-to-r from-red-600 to-red-500 px-6 py-4">
              <h3 className="text-white text-lg font-bold">Get a Quote</h3>
              <p className="text-white/80 text-sm">How may I help you today?</p>
            </div>
            {/* Form body */}
            <div className="bg-[#f5f5f0] p-6 md:p-8">
              <div className="space-y-4">
                <div>
                  <input type="text" placeholder="Full name" className="w-full bg-white px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-400 transition-colors" />
                </div>
                <div>
                  <input type="email" placeholder="Email address" className="w-full bg-white px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-400 transition-colors" />
                </div>
                <div>
                  <input type="tel" placeholder="Phone Number (+971-...)" className="w-full bg-white px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-400 transition-colors" />
                </div>
                <div>
                  <select className="w-full bg-white px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-400 appearance-none transition-colors">
                    <option>Free Zone</option>
                    <option>Mainland</option>
                    <option>Offshore</option>
                    <option>PRO Services</option>
                  </select>
                </div>
                <div>
                  <textarea placeholder="Type your message" rows={3} className="w-full bg-white px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-400 resize-none transition-colors"></textarea>
                </div>
                <button className="w-full bg-gradient-to-r from-red-600 to-red-500 text-white py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
