import { User, Users, Building2, Globe2 } from 'lucide-react';

const structures = [
  {
    icon: User,
    title: "Sole Proprietorship",
    desc: "A business owned and operated by a single individual. Ideal for professionals and consultants who want full control over their business. The owner has unlimited liability."
  },
  {
    icon: Users,
    title: "Civil Company",
    desc: "100% owned by professionals such as doctors, lawyers, engineers, and accountants. Best for service-oriented businesses offering professional consultancy or expertise."
  },
  {
    icon: Building2,
    title: "Limited Liability Company (LLC)",
    desc: "The most common structure, suitable for trading, manufacturing, and service-oriented businesses. Owned by one or more shareholders, with limited personal liability."
  },
  {
    icon: Globe2,
    title: "Branch of a Foreign Company",
    desc: "A subsidiary of a foreign company operating in Dubai. 100% foreign ownership is allowed. The parent company is responsible for the branch's liabilities."
  }
];

export default function MainlandStructures() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-t border-black/10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-2 h-2 bg-black rounded-full"></div>
            <span className="text-xs font-bold tracking-widest uppercase">Structures</span>
          </div>
          <h2 className="text-4xl font-semibold tracking-tight leading-tight max-w-2xl">
            Types of Company Structures for Dubai Mainland
          </h2>
        </div>
        <p className="text-gray-600 max-w-md text-sm">
          When considering business setup in the UAE mainland, you can choose from various business structures depending on the nature of your operations, the number of shareholders, and the desired ownership model.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {structures.map((s, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl border border-black/5 hover:border-black/20 transition-colors group">
            <div className="w-16 h-16 bg-[#1a2b4c] text-white rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <s.icon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-4">{s.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
