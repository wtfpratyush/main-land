const steps = [
  {
    title: "Choose Your Business Activity",
    desc: "The first step is to determine the type of business you want to run. This could be trading, consulting, manufacturing, e-commerce, or another activity. Your choice will influence the type of license you need."
  },
  {
    title: "Secure a Trade Name",
    desc: "Pick a unique trade name for your company that complies with UAE regulations. Check availability through the Department of Economic Development (DED)."
  },
  {
    title: "Apply for Initial Approval to DED",
    desc: "Once you've settled on your business activity and trade name, apply for initial approval from the DED to proceed with the setup process."
  },
  {
    title: "Secure Office Space",
    desc: "All mainland businesses in Dubai need a physical office. Find a location that meets your business requirements and submit the lease agreement to the DED."
  },
  {
    title: "Submit Documents and Apply for a Mainland License",
    desc: "Submit all required documents (trade name certificate, MOA, initial approval, office lease) to the DED to apply for your business license."
  },
  {
    title: "Obtain Additional Approvals (if required)",
    desc: "Depending on the nature of your business, you may need additional approvals from relevant government bodies, such as healthcare, education, or finance authorities."
  },
  {
    title: "Open a Corporate Bank Account",
    desc: "With your business license in hand, the next step is to open a corporate bank account. Dubai offers a wide range of banking options."
  },
  {
    title: "Apply for Visas",
    desc: "After obtaining your business license, you can apply for investor and employee visas. Mainland companies have the advantage of no visa restrictions."
  }
];

export default function MainlandSteps() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-2 h-2 bg-black rounded-full"></div>
          <span className="text-xs font-bold tracking-widest uppercase">Process</span>
        </div>
        <h2 className="text-4xl font-semibold tracking-tight leading-tight mb-16 max-w-2xl">
          Key Steps For Mainland Company Formation in Dubai
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="text-6xl font-black text-gray-100 mb-4 tracking-tighter">
                0{i + 1}
              </div>
              <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
