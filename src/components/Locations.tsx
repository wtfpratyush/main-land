import { MapPin, Clock, Building } from 'lucide-react';

const jurisdictions = [
  {
    id: 'dubai-mainland',
    title: 'Dubai Mainland',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop',
    location: 'Dubai, UAE',
    features: ['100% Foreign Ownership', 'No Currency Restrictions', 'Anywhere in Dubai'],
    timeframe: 'From 5 Days',
    tag: 'POPULAR'
  },
  {
    id: 'dubai-freezone',
    title: 'Dubai Freezone',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
    location: 'Multiple Zones, Dubai',
    features: ['0% Corporate Tax', '100% Repatriation', 'World-class Infrastructure'],
    timeframe: 'From 3 Days',
    tag: 'FAST SETUP'
  },
  {
    id: 'abu-dhabi',
    title: 'Abu Dhabi',
    image: 'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?q=80&w=800&auto=format&fit=crop',
    location: 'Abu Dhabi, UAE',
    features: ['Capital City Prestige', 'Government Contracts', 'Dual License Options'],
    timeframe: 'From 7 Days',
    tag: null
  },
  {
    id: 'sharjah',
    title: 'Sharjah',
    image: 'https://images.unsplash.com/photo-1546412414-e1885259563a?q=80&w=800&auto=format&fit=crop',
    location: 'Sharjah, UAE',
    features: ['Cost-effective', 'Industrial Hub', 'Proximity to Dubai'],
    timeframe: 'From 4 Days',
    tag: 'BEST VALUE'
  },
  {
    id: 'uae-offshore',
    title: 'UAE Offshore',
    image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?q=80&w=800&auto=format&fit=crop',
    location: 'JAFZA / RAK ICC',
    features: ['Asset Protection', 'Tax Optimization', 'No Physical Office Needed'],
    timeframe: 'From 2 Days',
    tag: null
  },
  {
    id: 'individual-freezones',
    title: 'Individual Freezones',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop',
    location: 'Across UAE',
    features: ['Sector Specific (Tech, Media)', 'Networking Opportunities', 'Tailored Facilities'],
    timeframe: 'Varies',
    tag: null
  }
];

export default function Locations() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-t border-black/10">
      <div className="flex items-center gap-4 mb-12">
        <div className="w-2 h-2 bg-black rounded-full"></div>
        <span className="text-xs font-bold tracking-widest uppercase">Jurisdictions</span>
      </div>

      <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-16 max-w-2xl">
        The jurisdictions we cover, the businesses we've launched
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {jurisdictions.map((j) => (
          <div key={j.id} className="group cursor-pointer">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6">
              <img 
                src={j.image} 
                alt={j.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {j.tag && (
                <div className="absolute top-4 right-4 bg-[#ff4e4e] text-white text-[10px] font-bold px-3 py-1.5 rounded-full tracking-wider z-10">
                  {j.tag}
                </div>
              )}
            </div>
            
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-medium text-gray-500 mb-2 uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5" />
                  {j.location}
                </div>
                <h3 className="text-2xl font-semibold">{j.title}</h3>
              </div>
              <div className="text-right">
                <div className="text-lg font-semibold">{j.timeframe}</div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-600 border-t border-black/5 pt-4">
              <div className="flex items-center gap-1.5">
                <Building className="w-4 h-4" />
                <span>{j.features[0]}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>{j.features[1]}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
