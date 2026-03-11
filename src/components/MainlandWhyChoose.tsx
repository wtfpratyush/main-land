import { CheckCircle2 } from 'lucide-react';

const highlights = [
  "Document Clearing, Translation & Attestation Services",
  "Unlimited Employees under Labour Quota Processing",
  "Legality in Processing any Regulatory Approvals",
  "PRO and Company-related services across UAE",
  "Office Comprehensive Documents Processing",
  "Support in Licensing and Company Registration",
  "Logistics Processing and Application Support",
  "Complete Labour Card & Immigration Assistance"
];

export default function MainlandWhyChoose() {
  return (
    <section className="relative py-0 overflow-hidden">
      {/* Teal/Green gradient banner */}
      <div className="relative bg-gradient-to-r from-[#0d6e6e] via-[#0e7b7b] to-[#0a8585]">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[500px] h-full">
            <img 
              src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop"
              alt="Dubai Skyline"
              className="w-full h-full object-cover mix-blend-overlay"
            />
          </div>
        </div>
        <div className="absolute inset-0 dot-pattern opacity-5"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          {/* Left: Title */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
              Explore Our Enhanced PRO Solutions in Dubai
            </h2>
            <div className="w-16 h-1 bg-white/40 rounded-full mb-6"></div>
            <button className="bg-white text-[#0d6e6e] px-7 py-3 rounded-full font-semibold text-sm hover:bg-white/90 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
              Know More
            </button>
          </div>

          {/* Right: Checklist grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {highlights.map((item, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-3 group animate-fade-in-up"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center shrink-0 group-hover:bg-white/30 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white/90 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
