export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2000&auto=format&fit=crop" 
          alt="Dubai Skyline" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] mb-6">
          Set up your business smarter,<br />faster, and with less stress.
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12">
          We combine expert guidance, local knowledge, and seamless processing to help you launch your company in the UAE — without the hassle.
        </p>

        {/* Form */}
        <div className="bg-[#f5f5f0] p-6 md:p-8 rounded-2xl text-left max-w-3xl mx-auto shadow-2xl text-black">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input type="text" placeholder="Jane Smith" className="w-full bg-white px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/5" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              <input type="tel" placeholder="(123) 456-7890" className="w-full bg-white px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/5" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input type="email" placeholder="jane@thrive.com" className="w-full bg-white px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/5" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Jurisdiction</label>
              <select className="w-full bg-white px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/5 appearance-none">
                <option>Select...</option>
                <option>Dubai Mainland</option>
                <option>Dubai Freezone</option>
                <option>Abu Dhabi</option>
                <option>Sharjah</option>
                <option>UAE Offshore</option>
                <option>Individual Freezones</option>
              </select>
            </div>
          </div>
          <button className="w-full bg-black text-white py-4 rounded-lg font-medium hover:bg-black/90 transition-colors flex items-center justify-center gap-2">
            GET A FREE CONSULTATION <span className="text-xl">›</span>
          </button>
        </div>
      </div>
    </section>
  );
}
