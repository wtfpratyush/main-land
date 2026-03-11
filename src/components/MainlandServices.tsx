import { FileText, Stamp, Users, Handshake, ShieldCheck, Briefcase } from 'lucide-react';

const services = [
  {
    icon: FileText,
    title: "Document Processing",
    desc: "We provide full spectrum of document processing services, including clearing, translations, attestation, and legalization with government authorities.",
    color: "from-red-500 to-rose-600"
  },
  {
    icon: Stamp,
    title: "Trade Mark / Patent",
    desc: "Comprehensive trademark and patent registration services to safeguard your business identity and protect your intellectual property in the UAE.",
    color: "from-blue-500 to-indigo-600"
  },
  {
    icon: Users,
    title: "Tourist / Dependents / Companion",
    desc: "Simplifying all tourist, dependent, and companion visa processes with complete documentation support and expedited processing services.",
    color: "from-emerald-500 to-teal-600"
  },
  {
    icon: Handshake,
    title: "Local Sponsorship",
    desc: "Expert assistance for obtaining local sponsorship services. We introduce dependable UAE Nationals as Local Partners or Service Agents per your requirements.",
    color: "from-violet-500 to-purple-600"
  },
  {
    icon: ShieldCheck,
    title: "Attestation & Legalisation",
    desc: "Complete solutions for attestation & legalization of documents from ministries, embassies, and consulates for both personal and commercial use.",
    color: "from-orange-500 to-amber-600"
  },
  {
    icon: Briefcase,
    title: "PRO Services",
    desc: "Full-service PRO support across the Emirates, handling all government liaison work, visa processing, labour cards, and regulatory compliance.",
    color: "from-cyan-500 to-blue-600"
  }
];

export default function MainlandServices() {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-white">
      <div className="absolute inset-0 dot-pattern opacity-20"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-gradient-to-bl from-red-50/50 to-transparent rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-0.5 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
            <span className="text-xs font-bold tracking-widest uppercase text-gray-500">Our Services</span>
            <div className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-4">
            Facilitating Corporate{' '}
            <span className="gradient-text">PRO Services</span>{' '}
            In The UAE
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            End-to-end government relations and business support services to help you establish and operate your business seamlessly across the UAE.
          </p>
        </div>

        {/* 3×2 Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div 
              key={i} 
              className="group relative bg-[#f9f9f6] hover:bg-white rounded-2xl p-8 border border-transparent hover:border-red-100 hover:shadow-xl transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-gray-900 transition-colors">{service.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{service.desc}</p>

              {/* Bottom accent line */}
              <div className={`w-10 h-1 bg-gradient-to-r ${service.color} rounded-full mt-6 group-hover:w-20 transition-all duration-500`}></div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-10 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-red-500/25 transition-all duration-300 hover:-translate-y-0.5">
            Read More About Us
          </button>
        </div>
      </div>
    </section>
  );
}
