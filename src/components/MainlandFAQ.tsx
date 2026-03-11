import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: "What is mainland company formation in Dubai?",
    a: "Mainland company formation refers to establishing a business under the jurisdiction of the UAE's Department of Economic Development (DED). It allows businesses to operate freely within the UAE and internationally without restrictions."
  },
  {
    q: "What is a mainland license in the UAE?",
    a: "A mainland license is a trade license issued by the DED that permits businesses to operate in Dubai and across the UAE. It covers commercial, professional, and industrial activities."
  },
  {
    q: "Can I own 100% of my mainland business in Dubai?",
    a: "Yes! Recent reforms allow foreign investors to enjoy 100% ownership in over 1,000 business activities without needing a local sponsor or partner."
  },
  {
    q: "What is the role of a local sponsor in Dubai Mainland?",
    a: "While most activities no longer require a local sponsor, certain regulated sectors may still need a UAE national as a service agent. They act as a liaison with government authorities."
  },
  {
    q: "What are the benefits of setting up a mainland company in Dubai?",
    a: "Key benefits include 100% foreign ownership, no restrictions on business scope, freedom to trade anywhere in the UAE, access to government contracts, unlimited visa quotas, and a strategic location."
  },
  {
    q: "Do I need an office space to set up a mainland company in Dubai?",
    a: "Yes, mainland companies require a physical office space. The lease agreement must be submitted to the DED as part of the licensing process. We can help you find the right office."
  },
  {
    q: "What documents are required for mainland company formation?",
    a: "Required documents typically include passport copies, visa copies, initial approval from DED, MOA (for LLCs), trade name reservation, and a tenancy contract for office space."
  },
  {
    q: "Can I get a visa through my Dubai Mainland company?",
    a: "Absolutely! Mainland companies can sponsor unlimited employee visas based on the office space size. You can also sponsor family visas for dependents."
  },
  {
    q: "Can Mainland companies trade freely within the UAE?",
    a: "Yes, mainland companies can trade freely anywhere in the UAE and internationally. Unlike free zone companies, there are no restrictions on doing business within the local market."
  }
];

export default function MainlandFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f5f5f0] via-white to-[#fef2f2]/20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-red-100/40 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-orange-100/30 to-transparent rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          {/* Left side - Image + heading */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
              <span className="text-xs font-bold tracking-widest uppercase text-gray-500">FAQ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-4">
              Frequently Asked{' '}
              <span className="gradient-text">Questions</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-orange-400 rounded-full mb-6"></div>
            <p className="text-gray-600 mb-8">
              Everything you need to know about setting up a mainland company in Dubai. Can't find an answer? Contact our team.
            </p>

            {/* Consultation image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl group hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop"
                alt="Business Consultation"
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-semibold text-lg">Need Expert Guidance?</p>
                <p className="text-white/70 text-sm mb-4">Our consultants are here to help</p>
                <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-red-500/25 transition-all">
                  Book a Call
                </button>
              </div>
            </div>
          </div>

          {/* Right side - FAQ items */}
          <div className="lg:col-span-3">
            <div className="space-y-3">
              {faqs.map((faq, i) => {
                const isOpen = openIndex === i;
                return (
                  <div 
                    key={i} 
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen 
                        ? 'bg-white shadow-lg border-red-100' 
                        : 'bg-white/60 border-black/5 hover:bg-white hover:shadow-md'
                    }`}
                  >
                    <button 
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left"
                    >
                      <h3 className={`text-base font-medium pr-8 transition-colors ${isOpen ? 'text-red-600' : ''}`}>
                        {faq.q}
                      </h3>
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen 
                          ? 'bg-gradient-to-br from-red-500 to-orange-500 text-white rotate-180' 
                          : 'border border-black/10 hover:bg-black hover:text-white'
                      }`}>
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </button>
                    <div 
                      className="overflow-hidden transition-all duration-300 ease-in-out"
                      style={{ 
                        maxHeight: isOpen ? '200px' : '0px',
                        opacity: isOpen ? 1 : 0
                      }}
                    >
                      <p className="px-6 pb-5 text-sm text-gray-600 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
