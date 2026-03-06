import { Plus } from 'lucide-react';

const faqs = [
  "What is mainland company formation in Dubai?",
  "What is a mainland license in the UAE?",
  "Can I own 100% of my mainland business in Dubai?",
  "What is the role of a local sponsor in Dubai Mainland?",
  "What are the benefits of setting up a mainland company in Dubai?",
  "Do I need an office space to set up a mainland company in Dubai?",
  "What documents are required for mainland company formation in Dubai?",
  "Can I get a visa through my Dubai Mainland company?",
  "Can Mainland companies trade freely within the UAE?"
];

export default function MainlandFAQ() {
  return (
    <section className="py-24 px-6 max-w-3xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-semibold tracking-tight leading-tight mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600">
          Everything you need to know about setting up a mainland company.
        </p>
      </div>

      <div className="divide-y divide-black/10 border-t border-b border-black/10">
        {faqs.map((faq, i) => (
          <div key={i} className="py-6 flex items-center justify-between group cursor-pointer">
            <h3 className="text-base font-medium group-hover:text-gray-600 transition-colors pr-8">{faq}</h3>
            <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors shrink-0">
              <Plus className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
