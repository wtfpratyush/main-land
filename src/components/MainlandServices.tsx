import { FileCheck, Users, FileText, Briefcase, Building, Landmark } from 'lucide-react';

const services = [
  {
    icon: FileCheck,
    title: "Trade Licence Issuance",
    desc: "We facilitate the issuance of trade licenses from the Department of Economic Development (DED) and assist with Chamber of Commerce registration.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=600&auto=format&fit=crop",
    color: "from-red-500 to-rose-600"
  },
  {
    icon: Users,
    title: "UAE National Sponsorship",
    desc: "We introduce dependable UAE Nationals as Local Partners or Service Agents per your business requirements.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=600&auto=format&fit=crop",
    color: "from-blue-500 to-indigo-600"
  },
  {
    icon: FileText,
    title: "Government Processing",
    desc: "Our team handles all necessary government processes, including Labor card, Immigration, and Establishment Card processing.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=600&auto=format&fit=crop",
    color: "from-emerald-500 to-teal-600"
  },
  {
    icon: Briefcase,
    title: "PRO Services",
    desc: "We provide expert PRO Services for all visa processing, be it for investors or employment, along with medical, stamping, and renewals.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=600&auto=format&fit=crop",
    color: "from-violet-500 to-purple-600"
  },
  {
    icon: Building,
    title: "Company Incorporation",
    desc: "Our services cover smooth company incorporation, license renewal in Dubai, and efficient company liquidation processes.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop",
    color: "from-orange-500 to-amber-600"
  },
  {
    icon: Landmark,
    title: "Bank Account Opening",
    desc: "We assist in opening commercial accounts with banks in Dubai.",
    image: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?q=80&w=600&auto=format&fit=crop",
    color: "from-cyan-500 to-blue-600"
  }
];

export default function MainlandServices() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#f5f5f0] to-white"></div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
          <span className="text-xs font-bold tracking-widest uppercase text-gray-500">Our Services</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight max-w-2xl">
            Our Mainland{' '}
            <span className="gradient-text">Company Formation</span>{' '}
            Services
          </h2>
          <p className="text-gray-500 max-w-sm text-sm">End-to-end support from licensing to visa processing for your Dubai business setup.</p>
        </div>

        {/* Services image banner */}
        <div className="relative rounded-2xl overflow-hidden mb-16 shadow-xl group">
          <img 
            src="https://images.unsplash.com/photo-1582407947092-50b8c1b50623?q=80&w=1600&auto=format&fit=crop"
            alt="Dubai Marina Business Hub"
            className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
          <div className="absolute bottom-6 left-8">
            <p className="text-white text-2xl font-bold">Full-Service Business Setup</p>
            <p className="text-white/70">From concept to completion — we handle everything</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div 
              key={i} 
              className="group relative bg-white rounded-2xl overflow-hidden border border-black/5 hover:shadow-2xl transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Card image that shows on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
              </div>

              <div className="relative p-8 flex flex-col h-full">
                <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-gray-900">{service.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mt-auto">{service.desc}</p>
                
                {/* Bottom accent */}
                <div className={`w-8 h-1 bg-gradient-to-r ${service.color} rounded-full mt-6 group-hover:w-16 transition-all duration-500`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
