export default function MainlandHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2000&auto=format&fit=crop" 
          alt="Dubai Skyline" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-white">
          <div className="inline-block bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/10">
            Dubai Mainland
          </div>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] mb-6">
            Mainland Company Formation in Dubai
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-xl mb-8">
            100% Ownership, Tax-Haven — Get Thrive Help! We specialize in streamlining the process of business setup in Dubai mainland to ensure a hassle-free experience.
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-white/90 transition-colors">
              Book a Free Consultation
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="bg-[#f5f5f0] p-6 md:p-8 rounded-2xl text-black shadow-2xl max-w-md ml-auto w-full">
          <h3 className="text-2xl font-semibold mb-2">Let's Connect.</h3>
          <p className="text-gray-600 text-sm mb-6">How may I help you today?</p>
          <div className="space-y-4">
            <div>
              <input type="text" placeholder="Full name" className="w-full bg-white px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/5" />
            </div>
            <div>
              <input type="email" placeholder="Email address" className="w-full bg-white px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/5" />
            </div>
            <div>
              <input type="tel" placeholder="Phone Number (+123-4567...)" className="w-full bg-white px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/5" />
            </div>
            <div>
              <select className="w-full bg-white px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/5 appearance-none">
                <option>Free Zone</option>
                <option>Mainland</option>
                <option>Offshore</option>
              </select>
            </div>
            <div>
              <textarea placeholder="Type your message" rows={3} className="w-full bg-white px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/5 resize-none"></textarea>
            </div>
            <button className="w-full bg-black text-white py-4 rounded-lg font-medium hover:bg-black/90 transition-colors">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
