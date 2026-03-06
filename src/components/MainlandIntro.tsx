import { CheckCircle2 } from 'lucide-react';

const activities = [
  "Import, export, wholesale, and retail of goods",
  "Distribution of products and services",
  "Representation of foreign companies",
  "Trading in a variety of products",
  "Production of goods",
  "Assembly of components",
  "Processing of raw materials",
  "Management, engineering, legal, financial, and other consulting services",
  "Architectural, interior design, and graphic design",
  "Software development, IT consulting, and IT support",
  "Hotels and accommodation",
  "Restaurants and cafes",
  "Tourism activities",
  "Event management",
  "Healthcare",
  "Real Estate",
  "Media and Advertising",
  "Financial services",
  "Educational Services"
];

export default function MainlandIntro() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-2 h-2 bg-black rounded-full"></div>
            <span className="text-xs font-bold tracking-widest uppercase">Overview</span>
          </div>
          <h2 className="text-4xl font-semibold tracking-tight leading-tight mb-6">
            Mainland Business Setup in Dubai
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>
              A Mainland Company in Dubai is a business entity registered under the UAE's Department of Economic Development (DED) that allows companies to operate both within the UAE and globally. As of recent reforms, foreign investors can now enjoy 100% ownership in most business activities without needing a local sponsor.
            </p>
            <p>
              Dubai's mainland business setup is not just a tax-friendly jurisdiction but also offers complete freedom for businesses to trade, recruit, and establish their headquarters without restrictions on location.
            </p>
            <p>
              At Thrive, we specialize in streamlining the process of business setup in Dubai mainland to ensure a hassle-free experience from registration to licensing. Our team of experienced consultants, legal experts, and PRO executives is here to guide you every step of the way.
            </p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-black/5">
          <h3 className="text-xl font-semibold mb-6">Business Activities Allowed</h3>
          <p className="text-sm text-gray-500 mb-6">Here are some of the most common and popular options:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
            {activities.map((activity, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700 leading-tight">{activity}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-6 italic">
            While most business activities are allowed in Dubai mainland, there may be specific regulations or licensing requirements for certain industries.
          </p>
        </div>
      </div>
    </section>
  );
}
