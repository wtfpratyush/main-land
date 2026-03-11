import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: "What are PRO Services in Dubai/UAE?",
    a: "PRO (Public Relations Officer) Services encompass all government-related transactions including visa processing, document clearing, company licensing, and liaison with government departments such as Labour, Immigration, and the Ministry of Economy."
  },
  {
    q: "What is mainland company formation in Dubai?",
    a: "Mainland company formation refers to establishing a business under the jurisdiction of the UAE's Department of Economic Development (DED). It allows businesses to operate freely within the UAE and internationally without restrictions."
  },
  {
    q: "Can I own 100% of my mainland business in Dubai?",
    a: "Yes! Recent reforms allow foreign investors to enjoy 100% ownership in over 1,000 business activities without needing a local sponsor or partner."
  },
  {
    q: "How much do PRO Services cost in the UAE?",
    a: "The cost of PRO Services varies based on the type and complexity of services required. Basic visa processing may start from AED 500, while comprehensive packages covering company formation, licensing, and visa processing can range from AED 7,999 to AED 17,250 depending on the scope."
  },
  {
    q: "What documents are needed for PRO Services?",
    a: "Required documents typically include passport copies, visa copies, Emirates ID, initial approval from DED, MOA (for LLCs), trade name reservation, and a tenancy contract for office space. Additional documents may be needed based on the specific service."
  },
  {
    q: "Can you handle visa processing for my company?",
    a: "Absolutely! We handle all types of visa processing including investor visas, employment visas, family visas, tourist visas, and Golden Visa applications. Mainland companies can sponsor unlimited employee visas based on the office space size."
  },
  {
    q: "What is the timeline for PRO services?",
    a: "Timelines vary by service — trade license issuance can take 3-5 working days, visa processing 5-10 working days, and full company formation 1-3 weeks. Our fast-track options can expedite most services significantly."
  },
  {
    q: "Do you provide services across all Emirates?",
    a: "Yes, we provide comprehensive PRO services across Dubai, Abu Dhabi, Sharjah, Ajman, Fujairah, Ras Al Khaimah, and Umm Al Quwain. Our team covers all seven Emirates for your convenience."
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
              Everything you need to know about PRO services and mainland company formation in Dubai. Can't find an answer? Contact our expert team.
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
                <p className="text-white/70 text-sm mb-4">Our PRO consultants are here to help</p>
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
