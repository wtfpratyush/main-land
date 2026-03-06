import { Plus } from 'lucide-react';

const faqs = [
  "How do I know which jurisdiction is right for me?",
  "How long does it take to set up a company?",
  "Do I need a local sponsor for Dubai Mainland?",
  "What are the costs involved in setting up?",
  "Can you help me open a corporate bank account?",
  "Do I need to be physically present in the UAE?",
  "What makes your agency different?"
];

export default function FAQ() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-t border-black/10">
      <div className="flex items-center gap-4 mb-12">
        <div className="w-2 h-2 bg-black rounded-full"></div>
        <span className="text-xs font-bold tracking-widest uppercase">FAQs</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight sticky top-32">
            Everything you wanted to ask (but didn't know who to)
          </h2>
        </div>

        <div className="lg:col-span-7">
          <div className="divide-y divide-black/10 border-t border-black/10">
            {faqs.map((faq, i) => (
              <div key={i} className="py-6 flex items-center justify-between group cursor-pointer">
                <h3 className="text-lg font-medium group-hover:text-gray-600 transition-colors">{faq}</h3>
                <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors shrink-0 ml-4">
                  <Plus className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
