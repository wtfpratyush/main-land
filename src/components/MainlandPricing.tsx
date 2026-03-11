export default function MainlandPricing() {
  const packages = [
    {
      name: "Starter",
      price: "7,999",
      color: "from-blue-500 to-cyan-500",
      tagline: "Perfect for solo entrepreneurs",
      features: [
        "Trade License Issuance",
        "Trade Name Reservation",
        "Initial Approval from DED",
        "1 Investor Visa",
        "Company Stamp",
        "Basic PRO Service",
        "Establishment Card",
        "Chamber of Commerce Registration"
      ],
      popular: false
    },
    {
      name: "Business",
      price: "9,999",
      color: "from-red-500 to-orange-500",
      tagline: "Most popular for SMEs",
      features: [
        "Everything in Starter, plus:",
        "MoA / LSA Drafting & Notarization",
        "2 Investor / Employee Visas",
        "Emirates ID Processing",
        "Medical Fitness Test",
        "Visa Stamping",
        "Corporate Bank Account Assistance",
        "Dedicated Account Manager"
      ],
      popular: true
    },
    {
      name: "Professional",
      price: "13,999",
      color: "from-violet-500 to-purple-600",
      tagline: "For established businesses",
      features: [
        "Everything in Business, plus:",
        "5 Investor / Employee Visas",
        "Office Space Assistance (Ejari)",
        "Labour Card Processing",
        "Insurance Arrangement",
        "Annual Compliance Support",
        "VAT Registration Assistance",
        "Priority PRO Services"
      ],
      popular: false
    },
    {
      name: "Enterprise",
      price: "17,250",
      color: "from-emerald-500 to-teal-600",
      tagline: "Full-service premium package",
      features: [
        "Everything in Professional, plus:",
        "10 Employee Visas",
        "Premium Office Lease Negotiation",
        "Golden Visa Consultation",
        "Trademark Registration",
        "Website & Branding Setup",
        "Accounting & Bookkeeping (1 Year)",
        "Dedicated Legal Advisor"
      ],
      popular: false
    }
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f5f5f0] via-white to-[#fef2f2]/20"></div>
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-gradient-to-br from-red-100/30 to-orange-100/20 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-violet-100/20 to-blue-100/20 rounded-full blur-3xl animate-pulse-glow delay-300"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
            <span className="text-xs font-bold tracking-widest uppercase text-gray-500">Pricing</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-4">
            Mainland Company Formation{' '}
            <span className="gradient-text">Packages</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">Choose the package that suits your business needs. All packages include government fees and processing.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className={`relative bg-white rounded-2xl overflow-hidden border transition-all duration-500 hover:shadow-2xl group animate-fade-in-up ${
                pkg.popular ? 'border-red-200 shadow-xl scale-[1.02] lg:scale-105' : 'border-black/5 hover:-translate-y-2'
              }`}
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              {/* Popular badge */}
              {pkg.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-red-500 to-orange-500 text-white text-center py-2 text-xs font-bold tracking-widest uppercase">
                  Most Popular
                </div>
              )}

              {/* Top gradient line */}
              <div className={`h-1 bg-gradient-to-r ${pkg.color}`}></div>

              <div className={`p-8 ${pkg.popular ? 'pt-12' : ''}`}>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">{pkg.name}</p>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-sm text-gray-500">AED</span>
                  <span className={`text-4xl font-black bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent`}>{pkg.price}</span>
                </div>
                <p className="text-xs text-gray-400 mb-8">{pkg.tagline}</p>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${pkg.color} flex items-center justify-center shrink-0 mt-0.5`}>
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  pkg.popular 
                    ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white hover:shadow-lg hover:shadow-red-500/25' 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}>
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-8">* Prices are indicative. Final cost may vary based on specific business activity and requirements.</p>
      </div>
    </section>
  );
}
