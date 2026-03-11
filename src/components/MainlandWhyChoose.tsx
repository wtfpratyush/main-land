import { CheckCircle2, ShieldCheck, Clock, Globe2, Headphones, FileCheck } from 'lucide-react';

const solutions = [
  {
    icon: ShieldCheck,
    title: "Complete Government Processing",
    desc: "Immigration, Labour card, Establishment Card — we handle all government processes end-to-end with zero hassle."
  },
  {
    icon: Clock,
    title: "Fast-Track Visa Processing",
    desc: "Investor visas, employment visas, family visas, and Golden Visa consultation — processed in record time."
  },
  {
    icon: Globe2,
    title: "International Business Setup",
    desc: "Full support for foreign companies looking to establish a branch or subsidiary in Dubai mainland."
  },
  {
    icon: Headphones,
    title: "Dedicated Account Manager",
    desc: "A single point of contact for all your business setup needs — from licensing to bank account opening."
  },
  {
    icon: FileCheck,
    title: "Document Attestation & Clearing",
    desc: "Embassy attestation, document clearing, and certificate verification services for all your legal needs."
  },
  {
    icon: CheckCircle2,
    title: "Annual Compliance & Renewal",
    desc: "License renewals, visa renewals, and ongoing compliance management to keep your business running smoothly."
  }
];

const highlights = [
  "15+ Years of trusted expertise in UAE business setup",
  "5,000+ Companies successfully registered",
  "Government-approved PRO service provider",
  "Dedicated legal & compliance team",
  "24/7 customer support in 6+ languages",
  "Transparent pricing — no hidden costs"
];

export default function MainlandWhyChoose() {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-20"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-gradient-to-bl from-red-50/50 to-transparent rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
          <span className="text-xs font-bold tracking-widest uppercase text-gray-500">Why Choose Thrive</span>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight max-w-2xl">
            Explore Our Enhanced{' '}
            <span className="gradient-text">PRO Solutions</span>{' '}
            in Dubai
          </h2>
          <p className="text-gray-500 max-w-sm text-sm">Comprehensive support from company formation to ongoing operations — all under one roof.</p>
        </div>

        {/* Top: Image + Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl group">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop"
              alt="Thrive Business Team"
              className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white text-xl font-bold mb-2">Trusted by 5,000+ Businesses</p>
              <p className="text-white/70 text-sm">Your success is our priority — from day one to day 1000</p>
            </div>
          </div>

          {/* Highlights checklist */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-8">
              What Makes Us <span className="gradient-text">Different</span>
            </h3>
            <div className="space-y-5">
              {highlights.map((item, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-800 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom: Service cards grid */}
        <h3 className="text-2xl font-bold mb-8 text-center">
          Facilitating Corporate{' '}
          <span className="gradient-text">PRO Services</span>{' '}
          in the UAE
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((sol, i) => (
            <div
              key={i}
              className="group bg-gray-50 hover:bg-white p-8 rounded-2xl border border-transparent hover:border-red-100 hover:shadow-xl transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <sol.icon className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-3">{sol.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{sol.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
