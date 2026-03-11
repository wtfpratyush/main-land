const steps = [
  {
    title: "Choose Your Business Activity",
    desc: "Determine the type of business you want to run — trading, consulting, manufacturing, or e-commerce. Your choice will influence the license type.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Secure a Trade Name",
    desc: "Pick a unique trade name for your company that complies with UAE regulations and check availability through the DED.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Apply for Initial Approval",
    desc: "Submit your application for initial approval from the DED with your business activity and trade name details.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Secure Office Space",
    desc: "Find a physical office that meets your requirements and submit the lease agreement to the DED for verification.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Submit Documents & Get License",
    desc: "Submit all required documents — trade name certificate, MOA, initial approval, office lease — to get your business license.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Get Additional Approvals",
    desc: "Depending on your business nature, you may need additional approvals from relevant government bodies.",
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Open a Corporate Bank Account",
    desc: "With your business license in hand, open a corporate bank account from Dubai's wide range of banking options.",
    image: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Apply for Visas",
    desc: "Apply for investor and employee visas with no restrictions — mainland companies have unlimited visa advantages.",
    image: "https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?q=80&w=600&auto=format&fit=crop"
  }
];

export default function MainlandSteps() {
  return (
    <section className="relative py-24 px-6 bg-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 dot-pattern opacity-30"></div>
      
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-red-50 to-transparent rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
          <span className="text-xs font-bold tracking-widest uppercase text-gray-500">Process</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight max-w-2xl">
            Key Steps For{' '}
            <span className="gradient-text">Mainland Company</span>{' '}
            Formation
          </h2>
          <p className="text-gray-500 max-w-sm text-sm">Follow these 8 essential steps to establish your business in Dubai mainland.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div 
              key={i} 
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Step image */}
              <div className="relative rounded-2xl overflow-hidden mb-5 shadow-md">
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="w-full h-44 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                {/* Step number badge */}
                <div className="absolute top-4 left-4 w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  {String(i + 1).padStart(2, '0')}
                </div>
              </div>

              {/* Connecting line (not for last in row) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-[88px] -right-4 w-8 h-0.5 bg-gradient-to-r from-red-300 to-orange-300 z-10"></div>
              )}

              <h3 className="text-lg font-semibold mb-3 group-hover:text-gray-700 transition-colors">{step.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
