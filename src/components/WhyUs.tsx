import { CheckCircle2, FileText, Briefcase, Globe } from 'lucide-react';

export default function WhyUs() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <div className="w-2 h-2 bg-black rounded-full"></div>
        <span className="text-xs font-bold tracking-widest uppercase">Why Setup With Us</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-12">
            Setting up your business is a big move — and we make it simple.
          </h2>
          
          <div className="bg-white p-8 rounded-2xl inline-block shadow-sm">
            <div className="text-6xl font-bold tracking-tighter mb-2">500+</div>
            <div className="text-gray-600 font-medium">businesses successfully setup<br />with us in the past year.</div>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden relative">
            <img 
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1000&auto=format&fit=crop" 
              alt="Business Meeting" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
            
            {/* Overlay Stat */}
            <div className="absolute top-8 left-8 text-white">
              <div className="text-6xl font-bold tracking-tighter mb-2">100%</div>
              <div className="font-medium text-white/90">Foreign ownership<br />in Freezones.</div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
              <p className="font-medium">
                Our local expertise, personalized service, and proven strategies ensure your business gets maximum visibility and top offers.
              </p>
            </div>
          </div>

          {/* Floating List */}
          <div className="lg:absolute lg:top-1/2 lg:-right-12 lg:-translate-y-1/2 bg-[#f5f5f0] lg:bg-white p-8 rounded-2xl lg:shadow-xl mt-8 lg:mt-0 w-full lg:w-80">
            <h3 className="font-semibold mb-6">When you setup with us, you get:</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm">Expert Guidance</h4>
                  <p className="text-xs text-gray-600 mt-1">Free consultation backed by real data.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <FileText className="w-6 h-6 shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm">Documentation</h4>
                  <p className="text-xs text-gray-600 mt-1">Professional drafting and translation.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <Briefcase className="w-6 h-6 shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm">Licensing</h4>
                  <p className="text-xs text-gray-600 mt-1">Fast-track approvals and processing.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <Globe className="w-6 h-6 shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm">Visas & Banking</h4>
                  <p className="text-xs text-gray-600 mt-1">Seamless residency and account setup.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
