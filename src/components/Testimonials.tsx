export default function Testimonials() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-t border-black/10 overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div className="flex items-center gap-4">
          <div className="w-2 h-2 bg-black rounded-full"></div>
          <span className="text-xs font-bold tracking-widest uppercase">Reviews</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight max-w-xl">
          Stories from founders who built their business with us
        </h2>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-8 snap-x hide-scrollbar">
        {/* Card 1 */}
        <div className="min-w-[320px] md:min-w-[400px] snap-start">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" alt="Client" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="text-xl font-medium mb-4 leading-snug">"They made setting up my tech firm feel effortless."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&auto=format&fit=crop" alt="Mark T" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Mark T.</div>
                  <div className="text-xs text-white/70 uppercase tracking-wider">Tech Founder, Dubai Freezone</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="min-w-[320px] md:min-w-[400px] snap-start">
          <div className="bg-white rounded-2xl p-8 h-full flex flex-col justify-between border border-black/5">
            <div>
              <h3 className="text-xl font-semibold mb-6">...I didn't think it was possible...</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                "I was nervous about setting up my company in a new country, but this team made the whole experience feel effortless. From the first valuation to the final handshake, they handled every detail with patience and care. The documentation, licensing, and communication were all top-notch — I barely had to lift a finger."
              </p>
            </div>
            <div className="flex items-center gap-3 mt-8">
              <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop" alt="Sarah L" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-semibold text-sm">Sarah L.</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Retail Owner, Dubai Mainland</div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="min-w-[320px] md:min-w-[400px] snap-start">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6">
            <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop" alt="Client" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="text-xl font-medium mb-4 leading-snug">"They cared more about my success than the commission."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=100&auto=format&fit=crop" alt="Ahmed R" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Ahmed R.</div>
                  <div className="text-xs text-white/70 uppercase tracking-wider">Consultant, Abu Dhabi</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
