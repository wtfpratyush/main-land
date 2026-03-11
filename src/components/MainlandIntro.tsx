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
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 -left-32 w-96 h-96 bg-gradient-to-br from-red-100/40 to-orange-100/30 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-20 -right-32 w-80 h-80 bg-gradient-to-br from-blue-100/30 to-indigo-100/20 rounded-full blur-3xl animate-pulse-glow delay-200"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text + Image */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
              <span className="text-xs font-bold tracking-widest uppercase text-gray-500">Overview</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-3">
              Mainland Business Setup in{' '}
              <span className="gradient-text">Dubai</span>
            </h2>
            {/* Gradient accent line */}
            <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-orange-400 rounded-full mb-8"></div>

            <div className="space-y-4 text-gray-600 mb-10">
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

            {/* Image with overlay */}
            <div className="relative rounded-2xl overflow-hidden group shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1582407947092-50b8c1b50623?q=80&w=1200&auto=format&fit=crop"
                alt="Dubai Business District"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-6 right-6">
                <p className="text-white font-semibold text-lg">Dubai Business District</p>
                <p className="text-white/70 text-sm">Your gateway to global commerce</p>
              </div>
            </div>
          </div>

          {/* Right: Business Activities Card */}
          <div className="relative">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-black/5 relative overflow-hidden">
              {/* Card gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-orange-500 to-amber-400"></div>
              
              <h3 className="text-xl font-semibold mb-2">Business Activities Allowed</h3>
              <p className="text-sm text-gray-500 mb-6">Here are some of the most common and popular options:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                {activities.map((activity, i) => (
                  <div key={i} className="flex items-start gap-3 animate-fade-in-up" style={{ animationDelay: `${i * 0.04}s` }}>
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-sm text-gray-700 leading-tight">{activity}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-6 italic">
                While most business activities are allowed in Dubai mainland, there may be specific regulations or licensing requirements for certain industries.
              </p>
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-4 bg-gradient-to-br from-red-500 to-orange-500 text-white p-5 rounded-2xl shadow-xl animate-float hidden lg:block">
              <p className="text-3xl font-bold">2,100+</p>
              <p className="text-sm text-white/80">Activities Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
