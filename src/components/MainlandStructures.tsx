import { User, Users, Building2, Globe2 } from 'lucide-react';

const structures = [
  {
    icon: User,
    title: "Sole Proprietorship",
    desc: "A business owned and operated by a single individual. Ideal for professionals and consultants who want full control over their business.",
    image: "https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=600&auto=format&fit=crop",
    color: "from-violet-500 to-purple-600"
  },
  {
    icon: Users,
    title: "Civil Company",
    desc: "100% owned by professionals such as doctors, lawyers, engineers, and accountants. Best for service-oriented businesses.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=600&auto=format&fit=crop",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Building2,
    title: "Limited Liability Company",
    desc: "The most common structure, suitable for trading, manufacturing, and service-oriented businesses with limited personal liability.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop",
    color: "from-red-500 to-orange-500"
  },
  {
    icon: Globe2,
    title: "Branch of Foreign Company",
    desc: "A subsidiary of a foreign company operating in Dubai. 100% foreign ownership is allowed with parent company liability.",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=600&auto=format&fit=crop",
    color: "from-emerald-500 to-teal-500"
  }
];

export default function MainlandStructures() {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 dot-pattern opacity-20"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-red-500/10 to-transparent rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-2 h-2 bg-gradient-to-r from-red-400 to-orange-400 rounded-full"></div>
              <span className="text-xs font-bold tracking-widest uppercase text-white/50">Structures</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight max-w-2xl text-white">
              Types of Company Structures for{' '}
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Dubai Mainland</span>
            </h2>
          </div>
          <p className="text-white/60 max-w-md text-sm">
            When considering business setup in the UAE mainland, you can choose from various business structures depending on the nature of your operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {structures.map((s, i) => (
            <div key={i} className="group relative rounded-2xl overflow-hidden animate-fade-in-up" style={{ animationDelay: `${i * 0.15}s` }}>
              {/* Card image background */}
              <div className="absolute inset-0">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 group-hover:from-black/95 group-hover:via-black/70 transition-all duration-500"></div>
              </div>

              {/* Card content */}
              <div className="relative p-8 flex flex-col min-h-[360px] justify-end">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <s.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{s.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{s.desc}</p>
                
                {/* Bottom gradient line */}
                <div className={`w-12 h-1 bg-gradient-to-r ${s.color} rounded-full mt-5 group-hover:w-full transition-all duration-500`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
