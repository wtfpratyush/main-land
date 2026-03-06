import { Check } from 'lucide-react';

const benefits = [
  "World-class infrastructure for every aspect of your business",
  "100% ownership in key sectors",
  "Unrestricted flexibility to scale up or down as needed",
  "Stable business climate and regulatory framework",
  "Operate in both local and international markets simultaneously",
  "Easy business dealings through international conferences and trade expos",
  "Major banks and audit services to fuel your growth",
  "Freedom to choose your office location",
  "Access to a global pool of talented professionals"
];

export default function MainlandBenefits() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-t border-black/10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-2 h-2 bg-black rounded-full"></div>
            <span className="text-xs font-bold tracking-widest uppercase">Advantages</span>
          </div>
          <h2 className="text-4xl font-semibold tracking-tight leading-tight mb-6">
            Benefits of Mainland Company Formation
          </h2>
          <p className="text-gray-600">
            Choosing a company setup in Dubai mainland provides numerous advantages, including complete freedom to trade and 100% foreign ownership in most sectors.
          </p>
        </div>

        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-gray-800 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
