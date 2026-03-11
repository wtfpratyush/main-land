import { Check } from 'lucide-react';

const benefits = [
  "World-class infrastructure for every aspect of your business",
  "100% ownership in key sectors",
  "Unrestricted flexibility to scale up or down as needed",
  "Stable business climate and regulatory framework",
  "Operate in both local and international markets simultaneously",
  "Easy business dealings through international conferences and trade expos",
  "Major banks and audit services to fuel your growth",
  "Freedom to choose your office location",
  "Access to a global pool of talented professionals"
];

export default function MainlandBenefits() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f5f5f0] via-white to-[#fef2f2]/30"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-br from-red-100/50 to-orange-100/30 rounded-full blur-3xl -translate-y-1/2 animate-pulse-glow"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
              <span className="text-xs font-bold tracking-widest uppercase text-gray-500">Advantages</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">
              Benefits of{' '}
              <span className="gradient-text">Mainland</span>{' '}
              Company Formation
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-orange-400 rounded-full mb-6"></div>
            <p className="text-gray-600 mb-8">
              Choosing a company setup in Dubai mainland provides numerous advantages, including complete freedom to trade and 100% foreign ownership in most sectors.
            </p>

            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl group">
              <img 
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop"
                alt="Dubai Skyline at Night"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-5">
                <p className="text-white font-semibold">Dubai, UAE</p>
                <p className="text-white/70 text-xs">The City of Opportunities</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
              {benefits.map((benefit, i) => (
                <div 
                  key={i} 
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 group animate-fade-in-up"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center shrink-0 mt-0.5 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-800 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Stats bar */}
            <div className="mt-10 bg-gradient-to-r from-[#0f172a] to-[#1e293b] rounded-2xl p-6 flex flex-wrap gap-8 justify-around text-white shadow-xl">
              <div className="text-center">
                <p className="text-3xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">100%</p>
                <p className="text-xs text-white/60 mt-1">Foreign Ownership</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">0%</p>
                <p className="text-xs text-white/60 mt-1">Corporate Tax*</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">3 Days</p>
                <p className="text-xs text-white/60 mt-1">Fast Setup</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">200+</p>
                <p className="text-xs text-white/60 mt-1">Nationalities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
