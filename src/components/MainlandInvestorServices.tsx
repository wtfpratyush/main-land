import { CheckCircle2, Building2, FileText, Users, CreditCard, Stamp, Globe2, Briefcase, ShieldCheck, Scale, HeartPulse, GraduationCap } from 'lucide-react';

const investorServices = [
  { icon: Building2, title: "Company Registration & Licensing" },
  { icon: FileText, title: "Document Clearing Services" },
  { icon: Users, title: "Family Visa Sponsorship" },
  { icon: CreditCard, title: "Corporate Bank Account Opening" },
  { icon: Stamp, title: "Embassy Attestation" },
  { icon: Globe2, title: "Trade Mark Registration" },
  { icon: Briefcase, title: "Business Consultation" },
  { icon: ShieldCheck, title: "Labour & Immigration Cards" },
  { icon: Scale, title: "Legal Translation Services" },
  { icon: HeartPulse, title: "Medical Fitness Processing" },
  { icon: GraduationCap, title: "Golden Visa Assistance" },
  { icon: CheckCircle2, title: "Ejari & Tenancy Contracts" }
];

export default function MainlandInvestorServices() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1a2744] to-[#0f172a]"></div>
      <div className="absolute inset-0 dot-pattern opacity-10"></div>
      <div className="absolute top-0 left-1/3 w-[600px] h-[300px] bg-gradient-to-b from-red-500/10 to-transparent rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Heading + Image */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-2 h-2 bg-gradient-to-r from-red-400 to-orange-400 rounded-full"></div>
              <span className="text-xs font-bold tracking-widest uppercase text-white/50">Investor Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-white mb-4">
              Comprehensive{' '}
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Investor Services</span>
              <br />Navigating UAE Business Setup & Beyond
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-orange-400 rounded-full mb-6"></div>
            <p className="text-white/60 mb-10 max-w-lg">
              From initial consultation to post-setup support, we provide complete investor services to ensure your business thrives in the UAE market.
            </p>

            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200&auto=format&fit=crop"
                alt="Business Professionals Meeting"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-5 left-6">
                <p className="text-white font-semibold">Expert Team at Your Service</p>
                <p className="text-white/60 text-sm">Multilingual professionals with 15+ years experience</p>
              </div>
            </div>
          </div>

          {/* Right: Services grid */}
          <div>
            <div className="grid grid-cols-2 gap-4">
              {investorServices.map((service, i) => (
                <div
                  key={i}
                  className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-red-500/30 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${i * 0.06}s` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center shrink-0 group-hover:from-red-500 group-hover:to-orange-500 transition-all duration-300">
                    <service.icon className="w-5 h-5 text-red-400 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-sm text-white/80 font-medium group-hover:text-white transition-colors">{service.title}</span>
                </div>
              ))}
            </div>

            <button className="mt-8 bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-red-500/25 transition-all duration-300 w-full md:w-auto">
              Get a Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
