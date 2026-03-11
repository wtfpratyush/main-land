import { Building2, FileText, Users, CreditCard, Stamp, Globe2, Briefcase, ShieldCheck, Scale, HeartPulse, GraduationCap, CheckCircle2, Fingerprint, Power, PenTool, UserCheck } from 'lucide-react';

const investorServices = [
  { icon: Building2, title: "Company Registration & Licensing" },
  { icon: Globe2, title: "Company Formation Mainland" },
  { icon: Users, title: "Family Visa Sponsorship" },
  { icon: UserCheck, title: "Corporate Partner/Sponsor Service" },
  { icon: ShieldCheck, title: "Labour Contract Services" },
  { icon: Stamp, title: "Trade Mark Registration" },
  { icon: FileText, title: "License Amendment" },
  { icon: Briefcase, title: "Office, Tenancy & Ejari" },
  { icon: Scale, title: "Change of Status within the Region" },
  { icon: HeartPulse, title: "Medical Fitness Processing" },
  { icon: Power, title: "Liquidation" },
  { icon: CheckCircle2, title: "Document Clearing Services" },
  { icon: PenTool, title: "Typing & Drafting Services" },
  { icon: GraduationCap, title: "Power of Attorney" },
  { icon: Fingerprint, title: "Emirates ID" },
  { icon: CreditCard, title: "Local Sponsor / Service Agent" }
];

export default function MainlandInvestorServices() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Dark background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1a2744] to-[#0f172a]"></div>
      <div className="absolute inset-0 dot-pattern opacity-10"></div>
      <div className="absolute top-0 left-1/3 w-[600px] h-[300px] bg-gradient-to-b from-red-500/8 to-transparent rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-0.5 bg-gradient-to-r from-red-400 to-orange-400 rounded-full"></div>
            <span className="text-xs font-bold tracking-widest uppercase text-white/50">Investor Services</span>
            <div className="w-8 h-0.5 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight text-white mb-4 max-w-4xl mx-auto">
            Comprehensive{' '}
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Investor Services</span>:
            {' '}Navigating UAE Business Setup And Beyond
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            From initial consultation to post-setup support, we provide complete investor services to ensure your business thrives in the UAE market.
          </p>
        </div>

        {/* 4-column icon grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {investorServices.map((service, i) => (
            <div
              key={i}
              className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-red-500/30 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center shrink-0 group-hover:from-red-500 group-hover:to-orange-500 transition-all duration-300">
                <service.icon className="w-5 h-5 text-red-400 group-hover:text-white transition-colors" />
              </div>
              <span className="text-sm text-white/80 font-medium group-hover:text-white transition-colors">{service.title}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-10 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-red-500/25 transition-all duration-300 hover:-translate-y-0.5">
            Explore Now
          </button>
        </div>
      </div>
    </section>
  );
}
