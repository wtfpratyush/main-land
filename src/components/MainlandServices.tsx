import { FileCheck, Users, FileText, Briefcase, Building, Landmark } from 'lucide-react';

const services = [
  {
    icon: FileCheck,
    title: "Trade Licence Issuance",
    desc: "We facilitate the issuance of trade licenses from the Department of Economic Development (DED) and assist with Chamber of Commerce registration."
  },
  {
    icon: Users,
    title: "Reliable UAE National Sponsorship",
    desc: "We introduce dependable UAE Nationals as Local Partners or Service Agents per your business requirements."
  },
  {
    icon: FileText,
    title: "Government Processing",
    desc: "Our team handles all necessary government processes, including Labor card, Immigration, and Establishment Card processing."
  },
  {
    icon: Briefcase,
    title: "PRO Services",
    desc: "We provide expert PRO Services for all visa processing, be it for investors or employment, along with medical, stamping, and renewals."
  },
  {
    icon: Building,
    title: "Company Incorporation & Renewal",
    desc: "Our services cover smooth company incorporation, license renewal in Dubai, and efficient company liquidation processes."
  },
  {
    icon: Landmark,
    title: "Bank Account Opening",
    desc: "We assist in opening commercial accounts with banks in Dubai."
  }
];

export default function MainlandServices() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-t border-black/10">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-2 h-2 bg-black rounded-full"></div>
        <span className="text-xs font-bold tracking-widest uppercase">Our Services</span>
      </div>
      <h2 className="text-4xl font-semibold tracking-tight leading-tight mb-16 max-w-2xl">
        Our Mainland Company Formation Services Include:
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl border border-black/5 flex flex-col h-full hover:border-black/20 transition-colors">
            <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center mb-6">
              <service.icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed mt-auto">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
